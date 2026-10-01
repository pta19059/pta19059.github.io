const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');

// The real game runs in a small DOM/canvas host. Instrumentation stays in tests.
function boot(storage = new Map(), options = {}) {
  const nodes = new Map();
  const context2d = new Proxy({ getImageData: () => ({ data: new Uint8ClampedArray(128*128*4) }) }, { get: (o,k) => k in o ? o[k] : () => {} });
  function element(id) {
    if (nodes.has(id)) return nodes.get(id);
    const classes = new Set();
    const n = { id, value: '', style: {}, dataset: {}, textContent: '', listeners: {}, children: [],
      classList: { add: c => classes.add(c), remove: c => classes.delete(c), contains: c => classes.has(c), toggle: (c,v) => v ? classes.add(c) : classes.delete(c) },
      getContext: () => context2d, setAttribute() {}, focus() {}, blur() {}, setPointerCapture() {}, scrollIntoView() {},
      appendChild(x) { this.children.push(x); },
      addEventListener(k,f) { (this.listeners[k] ||= []).push(f); },
      getBoundingClientRect: () => ({left:0,top:0,width:480,height:360}),
      fire(k, args={}) { for (const f of this.listeners[k]||[]) f({currentTarget:this,target:this,preventDefault(){},...args}); }
    };
    nodes.set(id,n); return n;
  }
  element('difficulty').value='normal'; element('play-style').value='arcade';
  const document=element('document');
  const chapterCards=[4,5,6,7].map(stage=>{const button=element('chapter-card-'+stage);button.dataset.chapter=String(stage);return button;});
  Object.assign(document,{getElementById:id=>options.missingMusicButton&&id==='music-button'?null:element(id),createElement:t=>element(Symbol(t)),querySelector:element,querySelectorAll:selector=>selector==='[data-chapter]'?chapterCards:[],hidden:false});
  const window=element('window');
  const frames=[];
  const sandbox={document,window,console:{...console,warn(){}},Uint8ClampedArray,requestAnimationFrame:f=>frames.push(f),setTimeout(){},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)}};
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root,'chapters.js'),'utf8'),sandbox);
  vm.runInContext(fs.readFileSync(path.join(root,'rendering.js'),'utf8'),sandbox);
  vm.runInContext(fs.readFileSync(path.join(root,'music.js'),'utf8'),sandbox);
  let source=fs.readFileSync(path.join(root,'game.js'),'utf8');
  source=source.replace(/\}\)\(\);\s*$/,`globalThis.game = {begin,setup,update,draw,jump,shoot,reload,throwGrenade,explode,hitEnemy,hurt,collect,interact,digit,pauseGame,openDossier,closeDossier,newCaseMenu,validSave,aimTarget,sight,shoulder,muzzle,weaponAngle,detectivePose,resetInput,makeEnemy,bulletHitsEnemy,saveProgress,keys,touch,scenes,weapons,caseFiles,
    state:()=>({player,enemies,bullets,drops,grenades,crates,rescues,hazards,mode,stage,score,kills,rescued,checkpoint,savedRun,combo,unlocked}),
    updateEnemies,stepEnemy,predictedTarget,
    clearEnemies:()=>enemies=[],setCheckpoint:s=>checkpoint=s,setMouseFire:v=>mouseFire=v,setMusic:engine=>music=engine
  };})();`);
  vm.runInContext(source,sandbox);
  const g=sandbox.game;
  g.start=(stage=0,style='arcade')=>{element('chapter-select').value=String(stage);element('play-style').value=style;g.begin();};
  g.tick=(seconds)=>{for(let t=0;t<seconds;t+=1/60)g.update(1/60);};
  return {g,nodes,element,storage,frames,window};
}

test('all eight chapters have grounded exits, spawns and reachable gaps',()=>{
  const {g}=boot(); assert.equal(g.scenes.length,8);
  for(const [i,s] of g.scenes.entries()) {
    const floor=x=>s.roofs.find(r=>x>=r.x+3&&x<=r.x+r.w-3);
    for(const x of [65,s.exit.x,...s.enemies.map(e=>e.x),...s.pickups.map(p=>p.x),...(s.crates||[]),...(s.rescues||[])])assert.ok(floor(x),`chapter ${i+1}, x=${x}`);
    for(let r=1;r<s.roofs.length;r++)assert.ok(s.roofs[r].x-s.roofs[r-1].x-s.roofs[r-1].w<=40);
    g.start(i);g.tick(.1);g.draw();assert.equal(g.state().stage,i);assert.ok(g.validSave(g.state().checkpoint));
  }
});
test('arcade pistol keeps firing without ammunition or manual reload',()=>{
  const {g}=boot();g.start();g.clearEnemies();const reserve=g.state().player.reserve;g.keys.add('KeyJ');g.tick(8);
  assert.equal(g.state().player.ammo,12);assert.equal(g.state().player.reserve,reserve);assert.equal(g.state().player.reload,0);assert.ok(g.state().bullets.length>3);
});
test('holding the mouse fires repeatedly and release stops it',()=>{
  const {g}=boot();g.start();g.clearEnemies();g.setMouseFire(true);g.tick(.7);assert.ok(g.state().bullets.length>=4);g.setMouseFire(false);g.tick(2);assert.equal(g.state().bullets.length,0);
});
test('survival retains limited ammunition and automatic empty-mag reload',()=>{
  const {g}=boot();g.start(0,'story');g.clearEnemies();g.keys.add('KeyJ');g.tick(5);assert.ok(g.state().player.reserve<28);assert.ok(g.state().player.ammo<12);
});
test('aim assistance only selects enemies ahead; up aims vertically',()=>{
  const {g}=boot();g.start();const p=g.state().player;p.x=500;p.face=1;assert.ok(g.aimTarget().x>p.x);g.keys.add('ArrowUp');const aim=g.aimTarget();assert.ok(aim.y<p.y-150);assert.equal(aim.x,p.x+1);
});

test('crowded encounters never turn aim assistance toward a monster just behind the player',()=>{
  const {g}=boot();g.start();g.clearEnemies();const p=g.state().player;p.x=180;
  for(const face of [-1,1]){
    g.clearEnemies();p.face=face;
    g.state().enemies.push(g.makeEnemy({x:p.x-face*5,type:'raptor'},0),g.makeEnemy({x:p.x+face*60,type:'raptor'},1));
    assert.equal(g.aimTarget().x,p.x+face*60);
  }
});

test('eighteen additional monsters populate combat chapters while the safehouse stays empty',()=>{
  const {g}=boot();assert.deepEqual(Array.from(g.scenes,s=>s.enemies.length),[6,0,8,6,11,11,11,12]);
  for(let chapter=0;chapter<8;chapter++){
    g.start(chapter);
    for(const e of g.state().enemies){assert.ok(Number.isFinite(e.y));assert.ok(e.x>240);assert.equal(e.brain.target,null);}
  }
});

// Small combat fixtures exercise the real AI without player input or randomness.
function encounter(type='raptor',x=550,style='arcade'){
  const {g,element}=boot();g.start(3,style);g.clearEnemies();
  Object.assign(g.state().player,{x:400,y:268,vx:0,vy:0,ground:true,inv:100});
  const e=g.makeEnemy({type,x},0);g.state().enemies.push(e);
  const advance=seconds=>{for(let i=0;i<Math.ceil(seconds*60);i++)g.updateEnemies(1/60,1);};
  return{g,element,e,p:g.state().player,advance};
}

test('spitters learn sustained gunfire, keep more distance, and forget after firing stops',()=>{
  const {e,p,advance}=encounter('spitter');e.shoot=100;p.fire=.1;
  advance(.15);assert.equal(e.brain.target,null,'reaction delay prevents an immediate response');
  advance(1.4);assert.ok(e.brain.pressure>.4);assert.ok(e.x>550,'spitter retreats under sustained fire');
  p.fire=0;advance(4);assert.ok(e.brain.pressure<.15);
  const relaxed=e.x;advance(1);assert.equal(e.x,relaxed,'calm spitter stops retreating');
});

test('a shotgun makes spitters back off and a visible reload offers predators an opening',()=>{
  const ranged=encounter('spitter');ranged.p.weapon=1;ranged.e.shoot=100;ranged.advance(.6);
  assert.ok(ranged.e.x>550);
  const normal=encounter(),reload=encounter('raptor',550,'story');reload.p.reload=1;
  normal.advance(.7);reload.advance(.7);
  assert.ok(reload.e.x<normal.e.x-2,'predator closes faster while the player reloads');
  assert.equal(reload.e.hp,normal.e.hp);assert.equal(reload.e.hit,normal.e.hit);
});

test('ground monsters evade nearby grenades after a delay and remain vulnerable',()=>{
  const {g,e,advance}=encounter();g.state().grenades.push({x:535,y:244,vx:0,vy:0,life:1});
  advance(.1);assert.equal(e.brain.evade,0);assert.equal(e.x,550);
  advance(.4);assert.ok(e.brain.evade>0);assert.ok(e.x>550);
  g.explode(e.x,e.y-20);assert.equal(e.hp,0,'evasion grants no immunity');
});

test('pack members stagger melee attacks and respect warning time',()=>{
  const {g,e,advance}=encounter('raptor',450);e.attack=0;
  const other=g.makeEnemy({type:'raptor',x:350},0);other.attack=0;g.state().enemies.push(other);
  advance(.23);
  assert.equal(g.state().enemies.filter(v=>v.wind>0).length,1);
  assert.equal(g.state().enemies.filter(v=>v.lunge>0).length,0);
  advance(.15);assert.equal(g.state().enemies.filter(v=>v.lunge>0).length,0);
  advance(.2);assert.equal(g.state().enemies.filter(v=>v.lunge>0).length,1);
});

test('wirewing dives lock their direction before the warning and can be dodged',()=>{
  const {g,e,p,advance}=encounter('wirewing',560);e.attack=0;
  advance(.22);assert.ok(e.wind>0);const dx=e.diveX,dy=e.diveY;assert.ok(dx<0);
  p.x=740;advance(.5);assert.ok(e.lunge>0);
  assert.equal(e.diveX,dx);assert.equal(e.diveY,dy,'dive does not track a dodge during its warning');
  assert.equal(g.state().mode,'play');
});

test('ranged aim uses a delayed observation with bounded prediction, including slow time',()=>{
  const {g,e,p,advance}=encounter('turret',560);p.vx=200;advance(.22);
  const target=g.predictedTarget(e);assert.equal(target.x,424);
  p.x=470;p.vx=-200;g.updateEnemies(.1,.2);
  assert.equal(g.predictedTarget(e).x,424,'slow time delays the next observation');
  advance(.35);assert.equal(g.predictedTarget(e).x,446);
});

test('stalkers reject occupied ambush positions and show a warning before shifting',()=>{
  const {g,e,p,advance}=encounter('stalker',580);e.blink=0;p.face=1;
  const guard=g.makeEnemy({type:'turret',x:325},0);g.state().enemies.push(guard);
  advance(.25);assert.equal(e.phaseWind,0,'occupied destination is rejected');
  guard.hp=0;e.blink=0;advance(.02);assert.ok(e.phaseWind>0);
  const before=e.x,destination=e.shiftTo;advance(.2);assert.equal(e.x,before);
  for(let i=0;i<40&&e.phaseWind>0;i++)advance(1/60);
  assert.equal(e.x,destination);assert.ok(e.attack>0,'recovery leaves time to react');
});

test('ground movement cannot cross a platform gap, even with a large lunge step',()=>{
  const {g}=boot();g.start(0);const e=g.makeEnemy({type:'raptor',x:270},0);
  g.stepEnemy(e,100);assert.ok(e.x<=287);assert.equal(e.y,263);
});

test('AI memory pauses with play and resets on checkpoint retry',()=>{
  const {g,e,p,advance}=encounter('spitter');p.fire=.1;advance(1.5);assert.ok(e.brain.pressure>.4);
  g.pauseGame();const memory=JSON.stringify(e.brain);g.tick(2);assert.equal(JSON.stringify(e.brain),memory);
  g.begin(true);for(const enemy of g.state().enemies){assert.equal(enemy.brain.pressure,0);assert.equal(enemy.brain.target,null);}
  assert.ok(g.validSave(g.state().checkpoint));
});
test('keyboard, touch, mouse and aim assist keep downward pistol shots shallow',()=>{
  for(const input of ['keyboard','touch','mouse','assist'])for(const face of [-1,1]){
    const {g,element}=boot();g.start();g.clearEnemies();const p=g.state().player;p.x=180;p.face=face;
    if(input==='keyboard')g.keys.add('ArrowDown');
    if(input==='touch')g.touch.y=1;
    if(input==='mouse')element('game').fire('pointermove',{pointerType:'mouse',clientX:p.x+face*2,clientY:p.y+200});
    if(input==='assist')g.state().enemies.push({...g.makeEnemy({type:'raptor',x:p.x+face*60},0,g.scenes[0]),y:p.y+65});
    g.shoot();const b=g.state().bullets.find(b=>b.good);assert.ok(b,input);
    const degrees=Math.atan2(b.vy,Math.abs(b.vx))*180/Math.PI;
    assert.ok(degrees>0&&degrees<=20.00001,`${input}: ${degrees} degrees`);
    assert.equal(Math.sign(b.vx),face);assert.ok(b.y<p.y-12,'barrel stays above the feet');
    assert.ok(Math.abs(degrees-p.aimAngle*180/Math.PI)<1e-8,'bullets follow the visible barrel');
  }
});
test('upward and straight pistol aim remain available in both directions',()=>{
  for(const face of [-1,1])for(const up of [false,true]){
    const {g}=boot();g.start();g.clearEnemies();const p=g.state().player;p.face=face;
    if(up)g.keys.add('ArrowUp');g.shoot();const b=g.state().bullets.find(b=>b.good);
    if(up){assert.ok(b.vy<-300);assert.ok(Math.abs(b.vx)<1);}else{assert.equal(b.vy,0);assert.equal(Math.sign(b.vx),face);}
  }
});
test('dodges stay compact and every weapon clears the ground through the animation',()=>{
  const {g}=boot();g.start();const p=g.state().player;
  for(const face of [-1,1])for(const direction of [-1,1])for(const kind of ['bend','dive'])for(let frame=0;frame<=24;frame++){
    Object.assign(p,{face,dashDir:direction,dodgeKind:kind,dash:(kind==='bend'?.62:.48)*frame/24,land:.1});
    assert.ok(Math.abs(g.detectivePose(p).tilt)<=.3,'body lean is under 18 degrees');
    for(let weapon=0;weapon<3;weapon++)for(const reload of [0,.5]){
      Object.assign(p,{weapon,reload,aimAngle:Math.PI/2});
      assert.ok(g.muzzle(p).y<p.y-10,'muzzle remains clear even at the lowest permitted angle');
    }
  }
});
test('coyote time allows a jump shortly after leaving a platform',()=>{
  const {g}=boot();g.start();const p=g.state().player;p.ground=false;p.coyote=.06;p.vy=12;g.jump();assert.ok(p.vy<-250);assert.equal(p.coyote,0);
});
test('buffered jump fires when landing, and holding jump goes higher',()=>{
  const {g}=boot();g.start();g.clearEnemies();let p=g.state().player;p.y=258;p.ground=false;p.coyote=0;p.vy=80;g.keys.add('Space');g.tick(.09);assert.ok(p.vy<0);
  g.start();g.clearEnemies();g.keys.add('Space');g.tick(.3);const high=g.state().player.y;
  g.start();g.clearEnemies();g.keys.add('Space');g.tick(.05);g.keys.delete('Space');g.tick(.25);assert.ok(g.state().player.y>high+15);
});
test('arcade fall costs health and recovers; survival fall ends the run',()=>{
  const {g}=boot();g.start();let p=g.state().player;p.x=311;p.y=430;p.ground=false;g.update(.016);assert.equal(g.state().mode,'play');assert.equal(p.hp,4);assert.equal(p.x,p.safeX);
  g.start(0,'story');p=g.state().player;p.y=430;p.ground=false;g.update(.016);assert.equal(g.state().mode,'dead');
});
test('grenades have a cooldown, consume stock and damage an area',()=>{
  const {g}=boot();g.start(3);const boss=g.state().enemies.find(e=>e.type==='boss');g.throwGrenade();g.throwGrenade();assert.equal(g.state().player.grenades,4);assert.equal(g.state().grenades.length,1);g.explode(boss.x,boss.y-30);assert.equal(boss.hp,16);
});
test('crates break and provide an actual pickup',()=>{
  const {g}=boot();g.start(4);const c=g.state().crates[0];g.explode(c.x,c.y-15);assert.equal(c.hp,0);const drop=g.state().drops.find(d=>d.x===c.x);assert.ok(drop);g.collect(drop);assert.equal(g.state().player.heavy,20);
});
test('ordinary horizontal gunfire can destroy supply crates',()=>{
  const {g}=boot();g.start(4);g.clearEnemies();const c=g.state().crates[0],p=g.state().player;p.x=c.x-90;p.y=c.y;p.face=1;g.keys.add('KeyJ');g.tick(1);assert.equal(c.hp,0);assert.ok(g.state().drops.some(d=>d.x===c.x));
});
test('heavy machine gun expires and ammunition becomes finite again',()=>{
  const {g}=boot();g.start();g.clearEnemies();g.collect({type:'heavy',x:0,y:0});g.keys.add('KeyJ');g.tick(2);assert.equal(g.state().player.ammo,18);g.keys.clear();g.tick(19);assert.equal(g.state().player.heavy,0);g.shoot();assert.equal(g.state().player.ammo,17);
});
test('rescuing a prisoner rewards only once',()=>{
  const {g}=boot();g.start(4);const r=g.state().rescues[0],p=g.state().player;p.x=r.x;p.y=r.y;g.tick(.05);const value=g.state().score;assert.equal(g.state().rescued,1);g.tick(.1);assert.equal(g.state().score,value);
});
test('chapter checkpoint survives page reload and preserves settings',()=>{
  const storage=new Map();const first=boot(storage);first.g.start(6,'story');const save=first.g.state().checkpoint;const second=boot(storage);assert.equal(second.g.state().savedRun.stage,6);second.g.setCheckpoint(second.g.state().savedRun);second.g.begin(true);assert.equal(second.g.state().stage,6);assert.equal(second.g.state().player.y,270);assert.equal(second.g.state().checkpoint.playStyle,'story');assert.equal(second.g.state().player.hp,save.hp);
});
test('invalid or corrupt saves are ignored safely',()=>{
  for(const data of ['{bad',JSON.stringify({version:2,run:{stage:900},best:-1})]){const {g}=boot(new Map([['fossil-noir-v2',data]]));assert.equal(g.state().savedRun,null);g.start();assert.equal(g.state().mode,'play');}
});
test('PLAY CHAPTER immediately starts the selected mission from menu, play, pause or death',()=>{
  const {g,element}=boot();
  element('chapter-card-4').fire('click');assert.equal(g.state().mode,'play');assert.equal(g.state().stage,4);
  element('chapter-card-5').fire('click');assert.equal(g.state().stage,5);
  g.pauseGame();element('chapter-card-6').fire('click');assert.equal(g.state().mode,'play');assert.equal(g.state().stage,6);
  const p=g.state().player;p.inv=0;g.hurt(100);assert.equal(g.state().mode,'dead');
  element('chapter-card-7').fire('click');assert.equal(g.state().mode,'play');assert.equal(g.state().stage,7);
});
test('music failures cannot stop movement or the animation loop',()=>{
  const {g,element,frames}=boot();g.start();g.clearEnemies();const startX=g.state().player.x;
  g.setMusic({update(){throw new Error('Audio scheduling failed');},stop(){throw new Error('Audio device interrupted');}});
  g.keys.add('KeyD');for(let i=1;i<=8;i++)assert.doesNotThrow(()=>frames.shift()(i*16));
  assert.ok(g.state().player.x>startX);assert.equal(frames.length,1);assert.equal(g.state().mode,'play');
  assert.equal(element('music-button').textContent,'MUSIC OFF');g.pauseGame();g.pauseGame();assert.equal(g.state().mode,'play');
});
test('older page markup without the music toggle still initializes and starts missions',()=>{
  const {g,element}=boot(new Map(),{missingMusicButton:true});
  element('start').fire('click');assert.equal(g.state().mode,'play');assert.equal(g.state().stage,0);
});

test('a failed 2.5D frame falls back without stopping movement, saving or the animation loop',()=>{
  const {g,window,frames,storage}=boot();g.start(4);g.clearEnemies();
  const x=g.state().player.x,save=storage.get('fossil-noir-v2');let attempts=0,failures=0;
  window.FossilDepth={available:true,render(){attempts++;throw new Error('WebGL context lost');},disable(){failures++;this.available=false;}};
  g.keys.add('KeyD');for(let i=1;i<=12;i++)assert.doesNotThrow(()=>frames.shift()(i*16));
  assert.equal(attempts,1);assert.equal(failures,1);assert.ok(g.state().player.x>x);
  assert.equal(frames.length,1);assert.equal(g.state().mode,'play');assert.equal(storage.get('fossil-noir-v2'),save);
});

test('2.5D drawing shares each chapter, actor position and muzzle with the gameplay simulation',()=>{
  const {g,window}=boot();const rendered=[];
  window.FossilDepth={available:true,render(frame){rendered.push(frame);return frame.actors;},disable(){assert.fail('renderer should not fail');}};
  for(let stage=0;stage<8;stage++){
    g.start(stage);g.tick(.1);g.draw();const frame=rendered.at(-1),p=g.state().player;
    assert.equal(frame.stage,stage);assert.equal(frame.scene,g.scenes[stage]);assert.equal(frame.player,p);
    assert.deepEqual(frame.muzzle,g.muzzle(p));assert.equal(frame.background.width,480);assert.equal(frame.actors.height,360);
    assert.notEqual(frame.background,frame.actors);
  }
});
test('music and sound effects can be toggled independently and remembered without changing the checkpoint',()=>{
  const storage=new Map(),first=boot(storage);first.g.start(4);
  const checkpoint=storage.get('fossil-noir-v2');
  assert.equal(first.element('music-button').textContent,'MUSIC ON');
  first.element('music-button').fire('click');
  assert.equal(first.element('music-button').textContent,'MUSIC OFF');
  assert.equal(first.element('sound-button').textContent,'SFX ON');
  const second=boot(storage);assert.equal(second.element('music-button').textContent,'MUSIC OFF');
  second.element('sound-button').fire('click');second.element('music-button').fire('click');
  const third=boot(storage);assert.equal(third.element('music-button').textContent,'MUSIC ON');
  assert.equal(third.element('sound-button').textContent,'SFX OFF');
  assert.equal(storage.get('fossil-noir-v2'),checkpoint);
  third.g.start();third.g.pauseGame();third.g.pauseGame();assert.equal(third.g.state().mode,'play','audio support is optional');
});
test('invalid audio preferences keep usable defaults',()=>{
  for(const data of ['{bad','null',JSON.stringify({sound:'off',music:0})]){
    const {element}=boot(new Map([['fossil-noir-audio-v1',data]]));
    assert.equal(element('music-button').textContent,'MUSIC ON');assert.equal(element('sound-button').textContent,'SFX ON');
  }
});
test('pause freezes physics and clears held fire; blur pauses automatically',()=>{
  const {g,element}=boot();g.start();g.keys.add('KeyD');g.setMouseFire(true);g.pauseGame();const x=g.state().player.x;g.tick(2);assert.equal(g.state().player.x,x);assert.equal(g.state().bullets.length,0);g.pauseGame();g.tick(.1);assert.equal(g.state().player.x,x);element('window').fire('blur');assert.equal(g.state().mode,'pause');
});
test('menu arrow keys remain available to native selects',()=>{
  const {g,element}=boot();g.start();element('document').fire('keydown',{code:'ArrowRight',target:{tagName:'SELECT'}});assert.equal(g.keys.size,0);
});
test('story terminal codes still work; arcade bypasses codes',()=>{
  const {g}=boot();g.start(0,'story');let p=g.state().player;p.x=1218;p.y=257;g.interact();assert.equal(g.state().mode,'puzzle');g.digit('2');g.digit('4');g.digit('1');assert.equal(g.state().unlocked,true);assert.equal(g.state().mode,'play');g.start(0,'arcade');assert.equal(g.state().unlocked,true);
});
test('boss variants use distinct attacks and retain configured health',()=>{
  const {g}=boot();for(const i of [5,6,7]){g.start(i);const s=g.state(),boss=s.enemies.find(e=>e.type==='boss');assert.equal(boss.hp,g.scenes[i].enemies.find(e=>e.type==='boss').hp);s.player.x=boss.x-200;s.player.y=boss.y;s.player.inv=100;boss.special=.01;g.update(.02);assert.ok(i===6?g.state().hazards.length>=3:g.state().bullets.length>=3);}
});
test('boss locks its exit; chapter four continues and chapter eight wins',()=>{
  const {g}=boot();for(let i=0;i<8;i++){g.start(i);const p=g.state().player,s=g.scenes[i];p.x=s.exit.x;p.y=s.exit.y;const boss=g.state().enemies.find(e=>e.type==='boss');if(boss){g.interact();assert.equal(g.state().stage,i);g.hitEnemy(boss,1000);}g.interact();if(i===7)assert.equal(g.state().mode,'win');else assert.equal(g.state().stage,i+1);}
});
test('swept bullet collision catches a fast round crossing an enemy',()=>{
  const {g}=boot();g.start();const e=g.state().enemies[0];assert.equal(g.bulletHitsEnemy({prevX:e.x-100,x:e.x+100,prevY:e.y-20,y:e.y-20},e),true);
});
test('the actual movement physics can cross every platform gap',()=>{
  const {g}=boot();for(const chapter of [0,2,4,5,6,7]){g.start(chapter);const s=g.scenes[chapter];g.clearEnemies();let jumpUntil=0;
    for(let frame=0;frame<2400&&g.state().stage===chapter&&g.state().player.x<s.exit.x-15;frame++){
      g.clearEnemies();const p=g.state().player;g.keys.add('KeyD');const roof=s.roofs.find(r=>p.x>=r.x&&p.x<=r.x+r.w);
      if(p.ground&&roof&&roof!==s.roofs.at(-1)&&p.x>roof.x+roof.w-48)jumpUntil=frame+22;
      if(frame<jumpUntil)g.keys.add('Space');else g.keys.delete('Space');g.update(1/60);
    }
    assert.equal(g.state().mode,'play');assert.ok(g.state().player.x>=s.exit.x-15,`chapter ${chapter+1} traversed`);assert.equal(g.state().player.hp,5,`chapter ${chapter+1} without falling`);
  }
});
test('the interface and game copy remain in English',()=>{
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.match(html,/<html lang="en">/);
  for(const file of ['index.html','chapters.js','game.js','README.md']){
    const source=fs.readFileSync(path.join(root,file),'utf8');
    assert.doesNotMatch(source,/\b(?:CAPITOLI|CAPITOLO|RIPRENDI|RAGGIUNGI|SALVATAGGIO|CAVALCA|GRANATE|FUOCO|RICARICA|CONTINUA|PUNTI|ABBATTI|SCHIVA|ARMA|RIPARTI|NUOVO)\b/i,file);
  }
});
test('the illustrated atlas is packaged with eight equal cells',()=>{
  const data=fs.readFileSync(path.join(root,'assets','environment-atlas.png'));
  assert.equal(data.subarray(1,4).toString(),'PNG');const width=data.readUInt32BE(16),height=data.readUInt32BE(20);
  assert.ok(width>=1024&&height>=1024);assert.equal(width%2,0);assert.equal(height%4,0);
  assert.match(fs.readFileSync(path.join(root,'index.html'),'utf8'),/rendering\.js/);
});
