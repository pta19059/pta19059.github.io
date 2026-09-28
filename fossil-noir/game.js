/* Fossil Noir — original side-scrolling pixel-art game, no dependencies. */
(() => {
  'use strict';
  const canvas=document.getElementById('game');
  const art=window.FossilArt;
  let g=canvas.getContext('2d',{alpha:false});
  const spriteCanvas=document.createElement('canvas');spriteCanvas.width=128;spriteCanvas.height=128;
  const spriteContext=spriteCanvas.getContext('2d',{willReadFrequently:true});
  const overlay=document.getElementById('overlay'),puzzle=document.getElementById('puzzle');
  const dossier=document.getElementById('dossier');
  const startButton=document.getElementById('start'),status=document.getElementById('status');
  const difficultySelect=document.getElementById('difficulty'),difficultyHint=document.getElementById('difficulty-hint');
  const difficulties={
    easy:{name:'EASY',damage:.6,ammo:1.5,enemySpeed:.85,drain:20,regen:8,description:'Reduced damage, extra ammo, slower enemies and faster Instinct recovery.'},
    normal:{name:'NORMAL',damage:1,ammo:1,enemySpeed:1,drain:27,regen:5,description:'Balanced combat, standard supplies and Instinct recovery.'},
    hard:{name:'HARD',damage:1.4,ammo:.7,enemySpeed:1.15,drain:34,regen:3,description:'Higher damage, scarce ammo, faster enemies and slower Instinct recovery.'}
  };
  let difficulty='normal',playStyle='arcade';
  const styleSelect=document.getElementById('play-style'),chapterSelect=document.getElementById('chapter-select');
  const arcade=()=>playStyle==='arcade';
  const rules=()=>difficulties[difficulty];
  function selectedDifficulty(){return Object.hasOwn(difficulties,difficultySelect.value)?difficultySelect.value:'normal';}
  function difficultyMenu(){
    const locked=mode==='dead'&&!!checkpoint;difficultySelect.disabled=locked;
    if(locked)difficultySelect.value=checkpoint.difficulty;
    styleSelect.disabled=locked;chapterSelect.disabled=locked;
    difficultyHint.textContent=locked?'Retry with your checkpoint settings. Choose New Case to change them.':({easy:'Less damage, extra supplies and slower enemies.',normal:'Balanced combat and regular supplies.',hard:'Faster enemies, scarce ammunition and increased damage.'})[selectedDifficulty()];
    document.getElementById('new-case').classList[locked?'remove':'add']('hidden');
  }
  function newCaseMenu(){mode='menu';resetInput();document.getElementById('pause').classList.add('hidden');overlay.classList.remove('hidden');difficultyMenu();
    document.getElementById('overlay-title').innerHTML='THE CASE<br>CONTINUES.';document.getElementById('overlay-text').textContent='Choose any chapter for a new mission, or continue from your last checkpoint.';
    startButton.innerHTML='START MISSION <span>↗</span>';document.getElementById('overlay-foot').textContent='8 CHAPTERS / 3 DIFFICULTIES';refreshContinue();}
  const W=480,H=360;
  g.imageSmoothingEnabled=false;
  const P={ink:'#101d2a',black:'#10121c',cream:'#ffefb3',acid:'#d1ec63',coral:'#ec605b',red:'#ed454e',cyan:'#83ebdc',white:'#f7f6dc',shadow:'#226174'};
  const scenes=[
    {name:'RAIN OVER VESPER',note:'The witness left the access code: 2 · 4 · 1.',code:'241',width:1410,roofs:[{x:0,w:290,y:263},{x:330,w:220,y:240},{x:590,w:270,y:265},{x:900,w:240,y:245},{x:1180,w:230,y:257}],enemies:[{x:424,type:'raptor'},{x:690,type:'raptor'},{x:1040,type:'turret'}],pickups:[{x:236,type:'ammo'},{x:749,type:'med'}],clue:{x:994,y:245},terminal:{x:1218,y:257},exit:{x:1360,y:257}},
    {name:'SAFEHOUSE 09',safe:true,width:740,roofs:[{x:0,w:740,y:273}],enemies:[],pickups:[],exit:{x:693,y:273}},
    {name:'AXIOM RESEARCH WING',note:'Containment protocol: 3 · 1 · 4.',code:'314',width:1430,roofs:[{x:0,w:245,y:265},{x:285,w:265,y:240},{x:590,w:280,y:263},{x:910,w:235,y:243},{x:1185,w:245,y:262}],enemies:[{x:385,type:'raptor'},{x:665,type:'raptor'},{x:786,type:'turret'},{x:1041,type:'brute'}],pickups:[{x:205,type:'ammo'},{x:735,type:'med'},{x:1081,type:'ammo'}],clue:{x:1012,y:243},terminal:{x:1220,y:262},exit:{x:1380,y:262}},
    {name:'THE FRACTURE',width:1080,roofs:[{x:0,w:1080,y:268}],enemies:[{x:752,type:'boss'},{x:460,type:'raptor'}],pickups:[{x:224,type:'ammo'},{x:530,type:'med'}],exit:{x:1021,y:268}}
  ];
  const chapterDetails=[
    {location:'VESPER / RAIN DISTRICT',quote:'The rain could never wash this city clean.',objective:'FIND THE WITNESS NOTE / REACH SAFEHOUSE 09',exitLabel:'SAFEHOUSE 09'},
    {location:'OLD PRECINCT / ROOM 09',quote:'One good eye. Too many ghosts.',objective:'EXAMINE THE CASE FILES / TAKE THE SERVICE LIFT',exitLabel:'DESCEND TO B6'},
    {location:'AXIOM / SUBLEVEL B6',quote:'They did not find fossils. They made weapons.',objective:'RECOVER LAZARUS DATA / UNLOCK THE CORE',exitLabel:'REACTOR ACCESS'},
    {location:'CHRONAL REACTOR / GROUND ZERO',quote:'Sixty-six million years. One trigger away.',objective:'BRING DOWN CROWN REX / SEAL THE BREACH',exitLabel:'SEAL THE RIFT'}
  ];
  scenes.forEach((s,i)=>Object.assign(s,chapterDetails[i]));
  const caseFiles={
    witness:{title:'THE LAST SHIPMENT',source:'WITNESS NOTE / VESPER ROOFTOPS',body:'Shipment 09 was not carrying fossils. It was carrying things that were still breathing. Axiom moved the survivors below the city. Someone cut the power before I could follow.\n\nThe old precinct is still safe. Stairwell access: 2 - 4 - 1.\n\nIf you hear claws on the fire escape, leave the lights off.'},
    blackrain:{title:'THE BLACK RAIN CASE',source:'ELIAS VANE / PERSONAL ARCHIVE',body:'Five years ago, a raid on Axiom took my eye, my arm, and my partner, Mara Vale. The company called it a reactor accident. The police closed the case.\n\nTonight, a distress call came through on Mara\'s old frequency. It led to the rooftops, and a shipment of creatures that should not exist.\n\nThe service lift behind this office reaches Axiom\'s abandoned utility tunnels. I know the way down.'},
    arm:{title:'A BORROWED SECOND',source:'WORKBENCH / PROTOTYPE AX-09',body:'AX-09. The serial inside my mechanical arm matches Axiom\'s prototype inventory. Its chronal capacitor lets me move between the pulses of a damaged timeline.\n\nThat is what instinct feels like: a borrowed second. It never lasts.\n\nSomeone rebuilt me with the same technology that opened the breach. I intend to find out why.'},
    lazarus:{title:'PROJECT LAZARUS',source:'AXIOM / RESTRICTED RESEARCH',body:'The temporal breach retrieves living prehistoric DNA. Axiom clones the specimens, modifies their aggression and grafts command hardware into their nervous systems.\n\nContainment failed when the first Crown-class organism severed its control tether. The broken tanks were not an accident.\n\nEmergency reactor access: 3 - 1 - 4.\n\nSeal the breach at the core. Do not allow another shipment to leave Vesper.'},
    reactor:{title:'THE OTHER SIDE',source:'REACTOR / EMERGENCY RECORD',body:'The aperture is no simulation. Beyond the containment ring lies a living prehistoric world. Spores and root systems have already crossed into the chamber.\n\nCrown Rex is feeding on the reactor discharge. The shutdown console will not respond while the organism is tethered to the core.\n\nDestroy the bio-weapon, then reach the console at the far end of the chamber.'}
  };
  caseFiles.arm.body+='\n\nThe R-09 transport line still accepts this arm\'s control key. Look for a cyan saddle. A linked Strider can run, leap and fight while I fire from its back.';
  scenes[0].clue.file='witness';scenes[2].clue.file='lazarus';
  scenes[1].files=[{x:410,y:273,file:'blackrain'},{x:540,y:273,file:'arm'}];
  scenes[3].files=[{x:170,y:268,file:'reactor'}];
  scenes[0].enemies[1].type='spitter';scenes[0].enemies.push({x:815,type:'wirewing'});
  scenes[2].enemies[1].type='spitter';scenes[2].enemies.push({x:518,type:'stalker'},{x:969,type:'wirewing'});
  scenes[3].enemies.push({x:591,type:'stalker'},{x:926,type:'wirewing'});
  scenes[0].mountX=158;scenes[2].mountX=109;scenes[3].mountX=87;
  scenes[0].crates=[485,794];scenes[0].rescues=[665];scenes[0].pickups.push({x:215,type:'heavy'},{x:930,type:'grenade'});
  scenes[2].crates=[450,1090];scenes[2].rescues=[634];scenes[2].pickups.push({x:195,type:'heavy'},{x:957,type:'grenade'});
  scenes[3].bossName='CROWN REX / THE FRACTURE';scenes[3].pickups.push({x:290,type:'heavy'},{x:630,type:'grenade'});
  scenes[3].exitLabel='TO THE DOCKS';
  scenes.push(...window.FOSSIL_CHAPTERS);
  Object.assign(caseFiles,{
    manifest:{title:'THE LAST CARGO',source:'BLACKWATER / MANIFEST 09',body:'The reactor is silent, but Axiom has already moved the project onto freight trains. Line 09 ends at a second breach.\n\nThere is a signature on the manifest: M. Vale. Mara is alive. And someone is forcing her to work.'},
    signal:{title:'A SIGNAL IN THE NOISE',source:'IRON EXPRESS / SERVICE RADIO',body:'Elias, if you receive this, cross the breach. I sabotaged the station collars, but the guardian is still linked to the network.\n\nI am not shipping the creatures. I am trying to send them home. — Mara'},
    mara:{title:'THE RETURN OF MARA',source:'CRETACEOUS OUTPOST / PERSONAL LOG',body:'Five years on the wrong side of time. Axiom kept me here to stabilize the breaches. Now I have copied every order, every experiment.\n\nTake down the guardian. The return gate leads to the transmission tower. I will meet you on channel 09.'},
    zero:{title:'PROTOCOL ZERO',source:'AXIOM TOWER / FINAL ORDER',body:'If the evidence leaves this tower, Axiom falls. Protocol Omega protects the transmitter with the final Crown specimen.\n\nMara has unlocked the public frequency. There is only one thing left to do: reach the top.'}
  });
  const weapons=[
    {id:'pistol',name:'PISTOL',mag:12,reserve:28,max:72,cache:7,rate:.23,reload:1,pellets:1,spread:0,damage:1,speed:320,life:1.7,tip:25,color:'#fff1bc'},
    {id:'shotgun',name:'SHOTGUN',mag:4,reserve:8,max:24,cache:3,rate:.76,reload:1.45,pellets:5,spread:.105,damage:.8,speed:350,life:.43,tip:36,color:'#f0b479'},
    {id:'carbine',name:'CARBINE',mag:18,reserve:36,max:108,cache:12,rate:.115,reload:1.2,pellets:1,spread:0,damage:.85,speed:430,life:1.65,tip:34,color:'#93e7ef'}
  ];
  const weapon=p=>weapons[p.weapon||0];
  const stats={raptor:{hp:3,speed:34,r:19,hit:1},brute:{hp:7,speed:18,r:26,hit:2},turret:{hp:4,speed:0,r:17,hit:1},boss:{hp:25,speed:18,r:43,hit:2},spitter:{hp:4,speed:22,r:22,hit:1},wirewing:{hp:3,speed:52,r:19,hit:1},stalker:{hp:5,speed:56,r:21,hit:1}};
  const keys=new Set(),edge=new Set(),touch={x:0,y:0,shoot:false,slow:false,jump:false};
  let grenades=[],explosions=[],crates=[],rescues=[],waves=[],score=0,combo=0,comboTime=0,kills=0,rescued=0,mouseFire=false;
  let audioContext=null,soundOn=true,musicOn=true,music=null,savedRun=null,bestScore=0;
  const AUDIO_KEY='fossil-noir-audio-v1';
  const SAVE_KEY='fossil-noir-v2';
  let mode='menu',stage=0,player,enemies=[],bullets=[],drops=[],particles=[],unlocked=false,checkpoint=null,camera=0,aim=null;
  let time=0,shake=0,banner=0,notice='',noticeTime=0,enteredCode='',slowAmount=0,echoes=[],echoClock=0,mount=null,hazards=[];
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const rand=(a,b)=>a+Math.random()*(b-a);
  const hash=n=>{let x=Math.sin(n*127.1+34.22)*43758.5453;return x-Math.floor(x);};
  function resetInput(){keys.clear();edge.clear();touch.x=0;touch.y=0;touch.shoot=false;touch.slow=false;touch.jump=false;mouseFire=false;aim=null;document.getElementById('stick').style.transform='';}
  function validSave(s){return s&&Number.isInteger(s.stage)&&s.stage>=0&&s.stage<scenes.length&&Object.hasOwn(difficulties,s.difficulty)&&['arcade','story'].includes(s.playStyle)&&Number.isFinite(s.hp)&&s.hp>0&&s.hp<=5&&Number.isInteger(s.weapon)&&s.weapon>=0&&s.weapon<weapons.length&&Number.isInteger(s.grenades)&&s.grenades>=0&&s.grenades<=9&&Number.isFinite(s.heavy)&&s.heavy>=0&&s.heavy<=25&&['score','kills','rescued'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&Array.isArray(s.inventory)&&s.inventory.length===weapons.length&&s.inventory.every((v,i)=>v&&Number.isInteger(v.ammo)&&v.ammo>=0&&v.ammo<=weapons[i].mag&&Number.isInteger(v.reserve)&&v.reserve>=0&&v.reserve<=weapons[i].max);}
  function loadProgress(){try{const data=JSON.parse(localStorage.getItem(SAVE_KEY));if(data?.version===2){if(validSave(data.run))savedRun=data.run;if(Number.isSafeInteger(data.best)&&data.best>=0)bestScore=data.best;}}catch{/* Storage can be disabled; a run remains playable. */}}
  function saveProgress(){try{localStorage.setItem(SAVE_KEY,JSON.stringify({version:2,run:savedRun,best:Math.max(bestScore,score)}));}catch{/* Checkpoint remains in memory. */}}
  function refreshContinue(){document.getElementById('continue').classList.toggle('hidden',!savedRun||mode==='dead');}
  function pauseGame(){if(mode==='play'){mode='pause';resetInput();document.getElementById('pause').classList.remove('hidden');document.getElementById('resume').focus();}else if(mode==='pause'){mode='play';resetInput();document.getElementById('pause').classList.add('hidden');canvas.focus({preventScroll:true});initAudio();}syncMusic();}
  function syncMusic(){music?.update({enabled:musicOn,active:mode==='play'&&!document.hidden,stage,safe:!!scenes[stage].safe,boss:enemies.some(e=>e.type==='boss'&&e.hp>0&&Math.abs(e.x-player.x)<380)});}
  function audioButtons(){for(const [id,on,label] of [['sound-button',soundOn,'SFX'],['music-button',musicOn,'MUSIC']]){const button=document.getElementById(id);button.textContent=label+(on?' ON':' OFF');button.setAttribute('aria-pressed',String(on));}}
  function loadAudio(){try{const settings=JSON.parse(localStorage.getItem(AUDIO_KEY));if(typeof settings?.sound==='boolean')soundOn=settings.sound;if(typeof settings?.music==='boolean')musicOn=settings.music;}catch{}audioButtons();}
  function saveAudio(){try{localStorage.setItem(AUDIO_KEY,JSON.stringify({sound:soundOn,music:musicOn}));}catch{}audioButtons();}
  function initAudio(){if(!soundOn&&!musicOn)return;try{if(!audioContext){audioContext=new (window.AudioContext||window.webkitAudioContext)();music=window.FossilMusic?.create(audioContext);}audioContext.resume().then(syncMusic).catch(()=>{});}catch{/* Audio is optional; the game works without Web Audio. */}}
  function sfx(kind){if(!soundOn||!audioContext||audioContext.state!=='running')return;const presets={shot:[220,65,.055,.025],heavy:[140,42,.075,.035],jump:[180,500,.12,.04],blast:[85,24,.35,.09],pickup:[480,980,.14,.045],hurt:[130,40,.19,.04]};const [from,to,duration,volume]=presets[kind]||presets.shot;const o=audioContext.createOscillator(),v=audioContext.createGain(),t=audioContext.currentTime;o.type=kind==='pickup'?'sine':'square';o.frequency.setValueAtTime(from,t);o.frequency.exponentialRampToValueAtTime(to,t+duration);v.gain.setValueAtTime(volume,t);v.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(v);v.connect(audioContext.destination);o.start(t);o.stop(t+duration);o.onended=()=>{o.disconnect();v.disconnect();};}
  function addScore(points,chain=false){if(chain){combo=comboTime>0?Math.min(combo+1,5):1;comboTime=4;}score+=points*Math.max(1,chain?combo:1);bestScore=Math.max(bestScore,score);}
  function throwGrenade(){if(mode!=='play'||player.grenadeCooldown>0)return;if(player.grenades<=0){note('OUT OF GRENADES / FIND SUPPLY CRATES',1.5);return;}player.grenades--;player.grenadeCooldown=.45;grenades.push({x:player.x+player.face*18,y:targetHeight(),vx:player.face*205+player.vx*.3,vy:-205,life:1.05});sfx('jump');}
  function explode(x,y){explosions.push({x,y,life:.38});burst(x,y,'#ffc774',30);shake=6;sfx('blast');for(const e of enemies)if(e.hp>0&&Math.hypot(e.x-x,enemyAimY(e)-y)<110)hitEnemy(e,e.type==='boss'?9:7);for(const c of crates)if(c.hp>0&&Math.hypot(c.x-x,c.y-15-y)<110)breakCrate(c);bullets=bullets.filter(b=>b.good||Math.hypot(b.x-x,b.y-y)>115);}
  function breakCrate(c){c.hp=0;burst(c.x,c.y-12,'#d6ab70',14);drops.push({x:c.x,y:c.y-15,type:c.loot,taken:false});addScore(50);}
  function collect(item){item.taken=true;const p=player;
    if(item.type==='ammo'){restock();note('AMMO CACHE / ALL WEAPONS RESUPPLIED',2);}
    else if(item.type==='grenade'){p.grenades=Math.min(9,p.grenades+3);note('GRENADES +3 / K OR X',2);}
    else if(item.type==='heavy'){p.heavy=20;p.weapon=2;p.reload=0;p.ammo=weapons[2].mag;note('HEAVY MACHINE GUN / 20 SECONDS',3);}
    else{p.hp=Math.min(5,p.hp+2);note('MEDKIT / HEALTH +2',2);}
    addScore(100);burst(item.x,item.y,P.acid,9);sfx('pickup');
  }
  function advance(){addScore(1000+rescues.filter(r=>r.saved).length*200);if(stage===scenes.length-1)finish(true);else setup(stage+1);}
  function updateArcade(dt){const p=player;p.grenadeCooldown=Math.max(0,p.grenadeCooldown-dt);p.heavy=Math.max(0,p.heavy-dt);comboTime=Math.max(0,comboTime-dt);if(!comboTime)combo=0;
    for(const bomb of grenades){const oldY=bomb.y;bomb.vy+=460*dt;bomb.x+=bomb.vx*dt;bomb.y+=bomb.vy*dt;bomb.life-=dt;const floor=floorAt(bomb.x);if(floor!==null&&oldY<floor&&bomb.y>=floor){bomb.y=floor-2;bomb.vy=-Math.abs(bomb.vy)*.36;bomb.vx*=.65;}if(bomb.life<=0)explode(bomb.x,bomb.y);}
    grenades=grenades.filter(b=>b.life>0);for(const e of explosions)e.life-=dt;explosions=explosions.filter(e=>e.life>0);
    for(const r of rescues)if(!r.saved&&Math.abs(p.x-r.x)<29&&Math.abs(p.y-r.y)<40){r.saved=true;rescued++;p.grenades=Math.min(9,p.grenades+2);addScore(500);note('HOSTAGE RESCUED / +500 / GRENADES +2',3);sfx('pickup');}
    for(const w of waves)if(!w.done&&p.x>w.trigger){w.done=true;enemies.push(...w.enemies.map((e,i)=>makeEnemy(e,i)));note('AXIOM REINFORCEMENTS INCOMING',2.5);}
    for(const item of drops)if(!item.taken&&Math.abs(p.x-item.x)<25&&Math.abs(p.y-17-item.y)<38)collect(item);
    if(arcade()&&unlocked&&p.x>=scenes[stage].exit.x&&Math.abs(p.y-scenes[stage].exit.y)<18)advance();
  }
  function rect(x,y,w,h,color){g.fillStyle=color;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
  const glyphs={
    A:[14,17,17,31,17,17,17],B:[30,17,17,30,17,17,30],C:[14,17,16,16,16,17,14],D:[30,17,17,17,17,17,30],E:[31,16,16,30,16,16,31],F:[31,16,16,30,16,16,16],G:[14,17,16,23,17,17,15],H:[17,17,17,31,17,17,17],I:[14,4,4,4,4,4,14],J:[7,2,2,2,18,18,12],K:[17,18,20,24,20,18,17],L:[16,16,16,16,16,16,31],M:[17,27,21,21,17,17,17],N:[17,25,21,19,17,17,17],O:[14,17,17,17,17,17,14],P:[30,17,17,30,16,16,16],Q:[14,17,17,17,21,18,13],R:[30,17,17,30,20,18,17],S:[15,16,16,14,1,1,30],T:[31,4,4,4,4,4,4],U:[17,17,17,17,17,17,14],V:[17,17,17,17,17,10,4],W:[17,17,17,21,21,21,10],X:[17,17,10,4,10,17,17],Y:[17,17,10,4,4,4,4],Z:[31,1,2,4,8,16,31],
    '0':[14,17,19,21,25,17,14],'1':[4,12,4,4,4,4,14],'2':[14,17,1,2,4,8,31],'3':[30,1,1,14,1,1,30],'4':[2,6,10,18,31,2,2],'5':[31,16,16,30,1,1,30],'6':[14,16,16,30,17,17,14],'7':[31,1,2,4,8,8,8],'8':[14,17,17,14,17,17,14],'9':[14,17,17,15,1,1,14],
    '/':[1,1,2,4,8,16,16],'-':[0,0,0,31,0,0,0],'.':[0,0,0,0,0,12,12],':':[0,12,12,0,12,12,0],'+':[0,4,4,31,4,4,0],'%':[25,25,2,4,8,19,19],'[':[14,8,8,8,8,8,14],']':[14,2,2,2,2,2,14],"'":[4,4,8,0,0,0,0],'!':[4,4,4,4,4,0,4],'×':[0,0,17,10,4,10,17],'·':[0,0,0,4,0,0,0]
  };
  function text(s,x,y,color=P.white,size=8,align='left'){
    s=String(s).toUpperCase();const scale=size>=12?2:1,width=(s.length*6-1)*scale;
    if(align==='center')x-=width/2;else if(align==='right')x-=width;
    for(let i=0;i<s.length;i++){const rows=glyphs[s[i]];if(!rows)continue;for(let row=0;row<7;row++)for(let col=0;col<5;col++)if(rows[row]&(16>>col))rect(x+(i*6+col)*scale,y-(7-row)*scale,scale,scale,color);}
  }
  function note(s,seconds=3){notice=s;noticeTime=seconds;}
  function burst(x,y,c,n=8){for(let i=0;i<n;i++){const life=rand(.2,.6);particles.push({x,y,vx:rand(-95,95),vy:rand(-130,20),life,maxLife:life,gravity:170,size:i%3===0?2:1,c});}}
  function freshPlayer(){return{x:65,y:263,vx:0,vy:0,face:1,aimAngle:0,ground:true,moving:false,step:0,hp:5,weapon:0,grenades:5,grenadeCooldown:0,heavy:0,coyote:.12,jumpBuffer:0,safeX:65,safeY:263,inventory:weapons.map(w=>({ammo:w.mag,reserve:Math.min(w.max,Math.round(w.reserve*rules().ammo))})),get ammo(){return this.inventory[this.weapon].ammo;},set ammo(v){this.inventory[this.weapon].ammo=v;},get reserve(){return this.inventory[this.weapon].reserve;},set reserve(v){this.inventory[this.weapon].reserve=v;},focus:100,inv:0,fire:0,flash:0,reload:0,melee:0,dash:0,dashDir:1,dodgeKind:'dive',dodgeCooldown:0,land:0,wall:0,wallRun:0,riding:false};}
  function makeEnemy(e,i,s=scenes[stage]){const y=floorAt(e.x,s)-(e.type==='wirewing'?86:0);return{...stats[e.type],...e,y,homeY:y,max:e.hp||stats[e.type].hp,dir:i%2?1:-1,shoot:1.1+i*.2,attack:.8+i*.13,flash:0,anim:i,wind:0,lunge:0,blink:2.5,phaseWind:0,special:3.5};}
  function makeMount(s){return s.mountX==null?null:{x:s.mountX,y:floorAt(s.mountX,s),dir:1,type:'strider',hp:6,max:6,r:26,anim:0,flash:0,wind:0,lunge:0,bite:0,hits:new Set()};}
  function restock(){player.inventory.forEach((slot,i)=>slot.reserve=Math.min(weapons[i].max,slot.reserve+Math.max(1,Math.round(weapons[i].cache*rules().ammo))));}
  function roofAt(x,scene=scenes[stage]){return scene.roofs.find(r=>x>=r.x+3&&x<=r.x+r.w-3);}
  function floorAt(x,scene=scenes[stage]){const r=roofAt(x,scene);return r?r.y:null;}
  function setup(index,restore=false){
    stage=index;const s=scenes[index];camera=0;unlocked=!!s.safe||(!s.code&&!s.enemies.some(e=>e.type==='boss'))||arcade()&&!s.enemies.some(e=>e.type==='boss');bullets=[];particles=[];echoes=[];hazards=[];grenades=[];explosions=[];combo=0;comboTime=0;slowAmount=0;mount=makeMount(s);
    crates=(s.crates||[]).map((x,i)=>({x,y:floorAt(x,s),hp:2,loot:i%2?'grenade':'heavy'}));rescues=(s.rescues||[]).map(x=>({x,y:floorAt(x,s),saved:false}));waves=(s.waves||[]).map(w=>({...w,done:false}));
    player.dash=0;player.dodgeCooldown=0;player.wall=0;player.wallRun=0;player.vx=0;player.land=0;player.riding=false;player.reload=0;
    player.x=65;player.y=s.roofs[0].y;player.safeX=65;player.safeY=player.y;player.vy=0;player.ground=true;player.inv=1.5;player.jumpBuffer=0;player.coyote=.12;player.grenadeCooldown=0;resetInput();
    if(!restore){player.hp=Math.min(5,player.hp+(arcade()?2:s.safe?2:1));player.grenades=Math.max(player.grenades,arcade()?5:3);restock();player.focus=100;}
    enemies=s.enemies.map((e,i)=>makeEnemy(e,i,s));
    drops=s.pickups.map(p=>({...p,y:floorAt(p.x,s)-13,taken:false}));banner=2.4;
    status.textContent=`${arcade()?'ARCADE':'STORY'} / 0${index+1} / ${s.name}`;chapterSelect.value=String(index);
    if(!restore){checkpoint={stage,difficulty,playStyle,hp:player.hp,weapon:player.weapon,grenades:player.grenades,heavy:player.heavy,inventory:player.inventory.map(slot=>({...slot})),score,kills,rescued};savedRun=checkpoint;saveProgress();}
    note(restore?'CHECKPOINT RESTORED':s.safe?'SAFEHOUSE / HEALTH AND AMMO RESTORED':s.objective,3.4);
  }
  function begin(fromSave=false){const save=fromSave?checkpoint:null;difficulty=save?save.difficulty:selectedDifficulty();playStyle=save?save.playStyle:styleSelect.value;difficultySelect.value=difficulty;styleSelect.value=playStyle;player=freshPlayer();score=save?save.score:0;kills=save?save.kills:0;rescued=save?save.rescued:0;
    if(save){for(const key of ['hp','weapon','grenades','heavy'])player[key]=save[key];player.inventory=save.inventory.map(slot=>({...slot}));setup(save.stage,true);}else setup(clamp(Number(chapterSelect.value)||0,0,scenes.length-1));
    mode='play';overlay.classList.add('hidden');puzzle.classList.add('hidden');dossier.classList.add('hidden');document.getElementById('pause').classList.add('hidden');initAudio();canvas.focus({preventScroll:true});document.querySelector('.machine').scrollIntoView({block:'start'});}
  function finish(won){mode=won?'win':'dead';overlay.classList.remove('hidden');
    resetInput();document.getElementById('overlay-title').innerHTML=won?'VESPER<br>IS FREE.':'NOT OVER.<br>NOT YET.';
    document.getElementById('overlay-text').textContent=won?'Omega falls. Mara broadcasts the Lazarus evidence across every screen in Vesper. The Black Rain case is finally closed.':'Restart this chapter with your checkpoint supplies. Vesper still needs you.';
    startButton.innerHTML=won?'PLAY AGAIN <span>↗</span>':'RETRY CHAPTER <span>↗</span>';
    document.getElementById('overlay-foot').textContent=`SCORE ${score} / KILLS ${kills} / RESCUED ${rescued}`;bestScore=Math.max(bestScore,score);saveProgress();difficultyMenu();refreshContinue();startButton.focus();
  }
  function jump(){if(mode!=='play')return;
    if(player.ground||player.coyote>0){player.vy=player.riding?-310:arcade()?-285:-260;player.ground=false;player.coyote=0;player.jumpBuffer=0;burst(player.x,player.y,P.cream,5);sfx('jump');return;}
    if(player.wall&&!player.riding){player.vy=-238;player.x+=player.wall*15;player.face=player.wall;player.wall=0;player.wallRun=0;burst(player.x,player.y,P.cyan,10);}
  }
  function moveInput(){return clamp((keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+touch.x,-1,1);}
  function dodge(){
    if(mode!=='play'||player.dash>0||player.dodgeCooldown>0||player.focus<15)return;
    if(player.riding){if(player.focus<20)return;player.focus-=20;player.dodgeKind='charge';player.dash=.42;player.dashDir=moveInput()||mount.dir;player.dashDir=Math.sign(player.dashDir);player.dodgeCooldown=1;player.inv=Math.max(player.inv,.35);mount.hits.clear();burst(player.x,player.y-3,P.cyan,7);return;}
    const p=player,direction=moveInput();p.focus-=15;p.dodgeKind=p.ground&&Math.abs(direction)<.2?'bend':'dive';
    p.dash=p.dodgeKind==='bend'?.62:.48;p.dodgeCooldown=.85;p.dashDir=Math.abs(direction)>.2?Math.sign(direction):p.face;
    p.inv=Math.max(p.inv,p.dash);p.wallRun=0;
    if(p.dodgeKind==='dive'){p.vy=-100;p.ground=false;burst(p.x,p.y-3,P.cream,5);}
  }
  function switchWeapon(index=(player.weapon+1)%weapons.length){if(mode!=='play'||index<0||index>=weapons.length||index===player.weapon)return;player.weapon=index;player.reload=0;player.flash=0;player.fire=Math.max(player.fire,.14);note(weapon(player).name+' // '+(index+1)+' / C TO SWITCH',1.8);}
  function reload(){const w=weapon(player);if(mode!=='play'||player.reload>0||player.ammo===w.mag||player.reserve<=0||arcade()&&player.weapon===0||player.heavy>0&&player.weapon===2)return;player.reload=arcade()?w.reload*.48:w.reload;note('RELOAD '+w.name,player.reload);}
  function nearMount(){return mount&&mount.hp>0&&Math.abs(player.x-mount.x)<48&&Math.abs(player.y-mount.y)<18;}
  function toggleMount(){if(mode!=='play')return;const p=player;
    if(p.riding){if(!p.ground||p.dash>0){note('LAND AND STOP CHARGING TO DISMOUNT',2);return;}
      const landing=[p.x-mount.dir*39,p.x+mount.dir*39,p.x].find(x=>x>12&&x<scenes[stage].width-10&&floorAt(x)!==null&&Math.abs(floorAt(x)-p.y)<5);
      if(landing==null)return;p.riding=false;p.x=landing;p.y=floorAt(landing);p.vx=0;p.vy=0;p.inv=Math.max(p.inv,.45);note('DISMOUNTED // R-09 LINK ON STANDBY',2);return;}
    if(!p.ground||p.dash>0||!nearMount()){note('APPROACH A CYAN SADDLE // G TO RIDE',2);return;}
    p.riding=true;p.x=mount.x;p.y=mount.y;p.vx=0;p.vy=0;p.wall=0;p.inv=Math.max(p.inv,.6);p.aimAngle=0;note('R-09 LINKED // F BITE / SHIFT CHARGE / G DISMOUNT',4);
  }
  const riderOffset=p=>p.riding?-25:0;
  const targetHeight=()=>player.y-(player.riding?55:25);
  function enemyAimY(e){return e.y-(e.type==='wirewing'?0:e.type==='stalker'?19:e.type==='boss'?37:29);}
  function nearest(){let pick=null,best=340;for(const e of enemies){if(e.hp<=0)continue;const dx=e.x-player.x,dy=enemyAimY(e)-targetHeight();if(dx*player.face>=-12&&Math.abs(dy)<125&&Math.hypot(dx,dy)<best){pick=e;best=Math.hypot(dx,dy);}}return pick;}
  function aimTarget(){const up=keys.has('ArrowUp')||touch.y<-.55,down=keys.has('ArrowDown')||touch.y>.55;if(up||down)return{x:player.x+player.face*(Math.abs(moveInput())>.25?180:1),y:targetHeight()+(up?-200:200)};if(aim)return{x:aim.x+camera,y:aim.y};const e=nearest();return e?{x:e.x,y:enemyAimY(e)}:null;}
  function detectivePose(p){
    if(p.riding)return{tilt:p.dash>0?.14:.04,bob:p.moving?Math.floor(p.step)%2:0,shift:0};
    let tilt=p.moving?(p.vx*p.face<0?-.04:.07):0,bob=p.moving?([0,-1,-2,-1,0,0][Math.floor(p.step)%6]):Math.floor(time*2)%2;
    if(!p.ground){tilt=p.vy<0?-.08:.1;bob=0;}
    if(p.wallRun>0)tilt=-.14;
    if(p.dash>0){
      const duration=p.dodgeKind==='bend'?.62:.48,phase=1-p.dash/duration;
      const envelope=Math.min(1,phase/.18,(1-phase)/.22);
      tilt=(p.dodgeKind==='bend'?-.22:p.dashDir*p.face<0?-.2:.28)*Math.max(0,envelope);bob=0;
    }
    if(p.melee>.16){tilt=-.1;bob=0;}
    return{tilt,bob:bob+(p.land>0?2:0),shift:p.moving?2:0};
  }
  function shoulder(p){
    const pose=detectivePose(p),a=pose.tilt;
    // Rotate around the waist, using the same transform as the sprite's torso.
    return{x:pose.shift+8*Math.cos(a)+4*Math.sin(a),y:-23+8*Math.sin(a)-4*Math.cos(a)+pose.bob+riderOffset(p)};
  }
  const clampAim=angle=>clamp(angle,-Math.PI/2,Math.PI/9);
  const weaponAngle=p=>p.reload>0?-.35:clampAim(p.aimAngle);
  function sight(p,target){
    if(!target)return{face:p.face,angle:0};
    const face=target.x>=p.x?1:-1,origin=shoulder({...p,face});
    const dx=(target.x-p.x)*face-origin.x,dy=target.y-p.y-origin.y;
    // The bore is two pixels above the shoulder axis. Account for that offset.
    const angle=dx<=0&&dy<0?-Math.PI/2:clampAim(Math.atan2(dy,Math.max(0,dx))+Math.asin(clamp(2/Math.max(8,Math.hypot(dx,dy)),-1,1)));
    return{face,angle};
  }
  function muzzle(p){
    const a=weaponAngle(p),origin=shoulder(p),tip=weapon(p).tip;
    // Each weapon uses the same shoulder and barrel geometry as its sprite.
    return{x:p.x+p.face*(origin.x+tip*Math.cos(a)+2*Math.sin(a)),y:p.y+origin.y+tip*Math.sin(a)-2*Math.cos(a)};
  }
  function shoot(){if(mode!=='play'||player.fire>0||player.reload>0)return;
    const heavy=player.heavy>0&&player.weapon===2,infinite=arcade()&&player.weapon===0||heavy;
    if(player.ammo===0&&!infinite){reload();if(player.reserve===0){switchWeapon(0);note('OUT OF AMMO / SWITCHING TO PISTOL',2);}return;}
    const {face,angle}=sight(player,aimTarget());player.face=face;player.aimAngle=angle;
    const tip=muzzle(player),w=weapon(player);if(!infinite)player.ammo--;player.fire=heavy?.065:arcade()?w.rate*.72:w.rate;player.flash=.07;sfx(heavy?'heavy':'shot');
    for(let i=0;i<w.pellets;i++){const a=angle+(i-(w.pellets-1)/2)*w.spread,dx=face*Math.cos(a),dy=Math.sin(a);bullets.push({x:tip.x+dx*2,y:tip.y+dy*2,vx:dx*w.speed,vy:dy*w.speed,life:w.life,good:true,damage:heavy?1.45:w.damage,weapon:w.id,color:heavy?'#ffcf67':w.color});}
    burst(tip.x,tip.y,w.color,w.pellets===1?4:8);shake=w.id==='shotgun'?2.6:.9;
  }
  function hitEnemy(e,n){if(e.hp<=0)return;e.hp=Math.max(0,e.hp-n);if(e.hp<.001)e.hp=0;e.flash=.14;burst(e.x,enemyAimY(e),P.red,8);
    if(e.hp<=0){e.death=.55;kills++;addScore(e.type==='boss'?2000:e.type==='brute'?250:100,true);player.focus=clamp(player.focus+12,0,100);shake=e.type==='boss'?5:2;if(e.type==='boss'){unlocked=!enemies.some(other=>other.hp>0&&other.type==='boss');note('BOSS DOWN / REACH THE EXIT',5);explosions.push({x:e.x,y:e.y-35,life:.5});sfx('blast');}else if(Math.random()<(arcade()?.4:.22)){const floor=floorAt(e.x);if(floor!==null)drops.push({x:e.x,y:floor-13,type:Math.random()<.25?'grenade':'ammo',taken:false});}}
  }
  function bulletHitsEnemy(b,e){
    const bounds=e.type==='wirewing'?{left:-25,right:25,top:-19,bottom:12}:e.type==='stalker'?{left:-30,right:31,top:-33}:e.type==='spitter'?{left:-35,right:38,top:-49}:e.type==='boss'?{left:-76,right:70,top:-69}:e.type==='brute'?{left:-51,right:51,top:-44}:e.type==='turret'?{left:-19,right:29,top:-42}:{left:-43,right:43,top:-49};
    const left=e.dir<0?-bounds.right:bounds.left,right=e.dir<0?-bounds.left:bounds.right;
    // Segment/AABB intersection keeps fast carbine rounds from skipping small targets.
    let enter=0,leave=1;for(const [from,to,min,max] of [[b.prevX??b.x,b.x,e.x+left-2,e.x+right+2],[b.prevY??b.y,b.y,e.y+bounds.top-2,e.y+(bounds.bottom??4)]]){const delta=to-from;if(Math.abs(delta)<.00001){if(from<min||from>max)return false;continue;}let a=(min-from)/delta,z=(max-from)/delta;if(a>z)[a,z]=[z,a];enter=Math.max(enter,a);leave=Math.min(leave,z);if(enter>leave)return false;}return true;
  }
  function melee(){if(mode!=='play'||player.melee>0)return;player.melee=.44;let landed=false;
    for(const c of crates)if(c.hp>0&&Math.abs(c.x-player.x)<58&&Math.abs(c.y-player.y)<35)breakCrate(c);
    if(player.riding){player.melee=.65;mount.bite=.3;for(const e of enemies){if(e.hp>0&&(e.x-player.x)*mount.dir>-10&&Math.abs(e.x-player.x)<e.r+69&&Math.abs(enemyAimY(e)-(player.y-27))<35){hitEnemy(e,3);landed=true;}}if(landed)player.focus=clamp(player.focus+6,0,100);burst(player.x+mount.dir*41,player.y-30,P.cyan,5);return;}
    for(const e of enemies){if(e.hp>0&&Math.abs(e.x-player.x)<e.r+24&&Math.abs(e.y-player.y)<39&&(e.x-player.x)*player.face>-8){hitEnemy(e,1);e.x+=player.face*11;landed=true;}}
    if(landed)player.focus=clamp(player.focus+10,0,100);burst(player.x+player.face*19,player.y-17,P.cyan,6);
  }
  function hurt(n){if(player.inv>0||mode!=='play')return;n*=rules().damage;combo=0;comboTime=0;sfx('hurt');
    if(player.riding&&mount){mount.hp=Math.max(0,Math.round((mount.hp-n)*100)/100);mount.flash=.18;player.inv=.85;shake=3;burst(player.x,player.y-24,P.cyan,10);
      if(mount.hp===0){player.riding=false;player.dash=0;player.ground=false;player.vy=-90;player.inv=1.2;note('R-09 DISABLED // EJECTING',3);}else note('STRIDER ARMOR HIT',1.2);return;}
    player.hp=Math.max(0,Math.round((player.hp-n)*100)/100);player.inv=1.1;shake=5;burst(player.x,player.y-18,P.red,14);note('HIT // FIND COVER',1.8);if(player.hp===0)finish(false);}
  function nearbyFile(){const s=scenes[stage];return [...(s.clue?[s.clue]:[]),...(s.files||[])].find(f=>Math.abs(player.x-f.x)<31&&Math.abs(player.y-f.y)<45);}
  function openDossier(id){const file=caseFiles[id];if(!file)return;mode='dossier';resetInput();player.vx=0;
    document.getElementById('dossier-source').textContent=file.source;document.getElementById('dossier-title').textContent=file.title;document.getElementById('dossier-body').textContent=file.body;dossier.classList.remove('hidden');document.getElementById('close-dossier').focus();}
  function closeDossier(){if(mode!=='dossier')return;mode='play';dossier.classList.add('hidden');resetInput();canvas.focus({preventScroll:true});}
  function interact(){if(mode!=='play')return;const s=scenes[stage],file=nearbyFile();
    if(file){openDossier(file.file);return;}
    if(s.terminal&&!unlocked&&Math.abs(player.x-s.terminal.x)<34&&Math.abs(player.y-s.terminal.y)<45){mode='puzzle';resetInput();puzzle.classList.remove('hidden');document.getElementById('puzzle-clue').textContent=stage===0?'The witness left the access code on the previous rooftop.':'Look for the emergency code in the Lazarus case file.';enteredCode='';showCode();document.getElementById('cancel-puzzle').focus();return;}
    if(Math.abs(player.x-s.exit.x)<40&&Math.abs(player.y-s.exit.y)<48){if(unlocked)advance();else note(s.enemies.some(e=>e.type==='boss')?'DEFEAT THE BOSS TO CONTINUE':'FIND THE CODE / USE THE TERMINAL',2);return;}
    note('NOTHING TO USE HERE',1.3);
  }
  function showCode(){document.getElementById('code-display').textContent=(enteredCode+'___').slice(0,3).split('').join(' ');}
  function digit(d){if(mode!=='puzzle')return;enteredCode+=d;showCode();if(enteredCode.length===3){if(enteredCode===scenes[stage].code){unlocked=true;mode='play';puzzle.classList.add('hidden');note('ACCESS GRANTED // '+scenes[stage].exitLabel,4);burst(scenes[stage].terminal.x,scenes[stage].terminal.y-28,P.acid,22);}else{note('ACCESS DENIED',2);setTimeout(()=>{enteredCode='';showCode();},400);}}}
  function stepEnemy(e,step){const next=e.x+step,floor=floorAt(next);if(floor!==null&&Math.abs(floor-e.y)<6){e.x=next;e.walk=(e.walk||0)+Math.abs(step)*.14;}}
  function updateWirewing(e,dt){
    const p=player,distance=Math.abs(e.x-p.x);e.dir=Math.sign(p.x-e.x)||e.dir;
    if(e.wind>0){e.wind-=dt;if(e.wind<=0){const dx=p.x-e.x,dy=targetHeight()-e.y,length=Math.max(1,Math.hypot(dx,dy));e.diveX=dx/length*205;e.diveY=dy/length*205;e.lunge=.68;e.attack=2.6;}}
    else if(e.lunge>0){e.lunge-=dt;e.x+=e.diveX*dt;e.y+=e.diveY*dt;if(Math.abs(e.x-p.x)<27&&e.y>p.y-(p.riding?84:49)&&e.y<p.y+4)hurt(1);}
    else{
      const homeX=distance<340?p.x+Math.sin(e.anim*.9)*105:e.x;
      e.x+=clamp(homeX-e.x,-e.speed,e.speed)*dt;e.y+=(e.homeY+Math.sin(e.anim*2)*12-e.y)*Math.min(1,dt*2.8);
      if(distance<265&&Math.abs(e.y-targetHeight())<155&&e.attack<=0)e.wind=.48;
    }
    e.x=clamp(e.x,28,scenes[stage].width-28);e.y=clamp(e.y,76,300);
  }
  function updateEnemies(dt,speed){
    const p=player,tick=dt*speed;
    for(const e of enemies){if(e.hp<=0){e.death=Math.max(0,(e.death||0)-dt);continue;}e.flash=Math.max(0,e.flash-dt);e.attack-=tick;e.shoot-=tick;e.anim+=tick;
      const distance=Math.abs(e.x-p.x),vertical=Math.abs(e.y-p.y);
      if(distance>W+120)continue;
      if(e.variant&&distance<330){e.special-=tick;if(e.special<=0){e.special=e.hp<e.max*.5?3:4.5;
        if(e.variant==='iron'){for(let i=0;i<3;i++)bullets.push({x:e.x,y:e.y-50,vx:e.dir*(85+i*22),vy:-180-i*25,gravity:300,life:3,good:false,kind:'acid'});}
        else if(e.variant==='root'){for(const offset of [-85,0,85]){const x=clamp(p.x+offset,15,scenes[stage].width-15),y=floorAt(x);if(y!==null)hazards.push({x,y,life:3.5,warn:.85});}}
        else{for(let i=0;i<7;i++){const a=-Math.PI+i*Math.PI/6;bullets.push({x:e.x,y:e.y-55,vx:Math.cos(a)*135,vy:Math.sin(a)*135,life:3.6,good:false});}}
        burst(e.x,e.y-45,P.coral,15);
      }}
      if(e.type==='wirewing'){updateWirewing(e,tick);continue;}
      if(e.type==='stalker'){
        e.blink-=tick;
        if(e.phaseWind>0){e.phaseWind-=tick;if(e.phaseWind<=0){const floor=floorAt(e.shiftTo);if(floor!==null){burst(e.x,e.y-18,'#b98adf',9);e.x=e.shiftTo;e.y=floor;burst(e.x,e.y-18,'#b98adf',9);}e.blink=3.8;e.attack=.7;e.wind=0;e.lunge=0;}continue;}
        if(e.blink<=0&&distance>90&&distance<240&&p.ground){const candidate=clamp(p.x-p.face*65,25,scenes[stage].width-25),floor=floorAt(candidate);if(floor!==null&&Math.abs(floor-p.y)<6){e.shiftTo=candidate;e.phaseWind=.48;continue;}e.blink=1;}
      }
      if(e.type==='spitter'){
        e.dir=Math.sign(p.x-e.x)||e.dir;
        if(distance>320)e.shoot=Math.max(.65,e.shoot);
        if(e.shoot<=0&&distance<320&&vertical<105){const mouth={x:e.x+e.dir*36,y:e.y-32},flight=clamp(distance/138,.35,1.8);bullets.push({x:mouth.x,y:mouth.y,vx:e.dir*138,vy:(targetHeight()-mouth.y)/flight-60*flight,gravity:120,life:3,good:false,kind:'acid'});e.shoot=2.45;burst(mouth.x,mouth.y,'#cee78a',5);}
      }
      if(e.type==='turret'||e.type==='boss'){
        e.dir=Math.sign(p.x-e.x)||e.dir;
        if(e.shoot<=0&&distance<295&&vertical<125){const mouth={x:e.x+e.dir*(e.type==='boss'?67:26),y:e.y-(e.type==='boss'?42:26)},a=Math.atan2(targetHeight()-mouth.y,p.x-mouth.x),spread=e.type==='boss'?[-.2,0,.2]:[0];
          for(const off of spread)bullets.push({x:mouth.x,y:mouth.y,vx:Math.cos(a+off)*104,vy:Math.sin(a+off)*104,life:3,good:false});
          e.shoot=e.type==='boss'?2.3:1.9;burst(mouth.x,mouth.y,P.coral,3);
        }
      }
      if(e.type==='turret')continue;
      if(e.wind>0){e.wind-=tick;if(e.wind<=0){e.lunge=e.type==='stalker'?.3:.2;e.attack=e.type==='stalker'?1.3:1.05;}}
      else if(e.lunge>0){e.lunge-=tick;stepEnemy(e,e.dir*(e.type==='boss'?70:e.type==='stalker'?185:130)*tick);if(Math.abs(e.x-p.x)<e.r+13&&vertical<33)hurt(e.hit);}
      else{
        if(distance<e.r+37&&vertical<42&&e.attack<=0){e.wind=.3;e.dir=Math.sign(p.x-e.x)||e.dir;}
        else if(distance<250&&vertical<65){let sign=Math.sign(p.x-e.x)||1;if(e.type==='spitter'){if(distance>120&&distance<205)sign=0;else if(distance<=120)sign=-sign;}stepEnemy(e,sign*e.speed*tick);if(e.type!=='spitter'&&sign)e.dir=sign;}
      }
    }
  }
  function update(dt){time+=dt*(1-slowAmount*.75);shake=Math.max(0,shake-dt*17);if(mode!=='play')return;
    const s=scenes[stage],p=player;
    p.coyote=p.ground?.12:Math.max(0,p.coyote-dt);p.jumpBuffer=Math.max(0,p.jumpBuffer-dt);
    banner=Math.max(0,banner-dt);noticeTime=Math.max(0,noticeTime-dt);p.inv=Math.max(0,p.inv-dt);p.fire=Math.max(0,p.fire-dt);p.flash=Math.max(0,p.flash-dt);p.melee=Math.max(0,p.melee-dt);p.wallRun=Math.max(0,p.wallRun-dt);p.land=Math.max(0,p.land-dt);p.dodgeCooldown=Math.max(0,p.dodgeCooldown-dt);
    if(p.reload>0){p.reload-=dt;if(p.reload<=0){const n=Math.min(weapon(p).mag-p.ammo,p.reserve);p.ammo+=n;p.reserve-=n;p.reload=0;}}
    const k=id=>keys.has(id);
    const direction=moveInput();
    if(Math.abs(direction)>.2&&p.dash<=0)p.face=direction>0?1:-1;
    p.moving=Math.abs(direction)>.2&&p.ground&&p.dash<=0;p.step+=Math.abs(p.vx)*dt*.1;
    if(p.fire<=0.14){const line=sight(p,aimTarget());if(aim)p.face=line.face;p.aimAngle=line.angle;}
    const jumping=k('KeyW')||k('Space')||touch.jump;if(jumping&&!edge.has('JUMP')){p.jumpBuffer=.14;edge.add('JUMP');}if(!jumping)edge.delete('JUMP');if(p.jumpBuffer>0)jump();if(!jumping&&p.vy<-115)p.vy=-115;
    const dashing=k('ShiftLeft')||k('ShiftRight');if(dashing&&!edge.has('DASH')){dodge();edge.add('DASH');}if(!dashing)edge.delete('DASH');
    if(k('KeyF')&&!edge.has('MELEE')){melee();edge.add('MELEE');}if(!k('KeyF'))edge.delete('MELEE');
    if(k('KeyE')&&!edge.has('USE')){interact();edge.add('USE');}if(!k('KeyE'))edge.delete('USE');
    if((k('KeyK')||k('KeyX'))&&!edge.has('GRENADE')){throwGrenade();edge.add('GRENADE');}if(!k('KeyK')&&!k('KeyX'))edge.delete('GRENADE');
    if(mode!=='play'||s!==scenes[stage])return;
    if(k('KeyR'))reload();if(k('KeyJ')||touch.shoot||mouseFire)shoot();
    const slow=(k('KeyQ')||touch.slow)&&p.focus>0;
    slowAmount=clamp(slowAmount+(slow?dt*7:-dt*5),0,1);
    p.focus=clamp(p.focus+(slow?-rules().drain:rules().regen)*dt,0,100);const speed=(1-slowAmount*.8)*rules().enemySpeed;
    const oldY=p.y,wasGround=p.ground;
    if(p.dash>0){
      p.dash=Math.max(0,p.dash-dt);p.vx=p.dodgeKind==='bend'?0:p.dashDir*(p.riding?282:228);p.x+=p.vx*dt;
      if(p.dodgeKind==='dive')p.vy=Math.min(p.vy,42);
    }else{const desired=direction*(p.riding?190:arcade()?158:129);p.vx+=(desired-p.vx)*Math.min(1,dt*(p.ground?32:19));p.x+=p.vx*dt;}
    p.x=clamp(p.x,12,s.width-10);
    p.vy+=535*dt;p.y+=p.vy*dt;p.ground=false;
    if(p.vy>=0){for(const roof of s.roofs){if(p.x>=roof.x+4&&p.x<=roof.x+roof.w-4&&oldY<=roof.y+4&&p.y>=roof.y){if(!wasGround&&p.vy>90){p.land=.12;burst(p.x,roof.y-2,'#b4c4a3',4);}p.y=roof.y;p.vy=0;p.ground=true;p.wall=0;break;}}}
    if(!p.ground){
      p.wall=0;
      for(const roof of s.roofs){if(p.y>roof.y+9&&p.y<roof.y+90){if(Math.abs(p.x-roof.x)<10&&direction>0){p.x=roof.x-8;p.wall=-1;}if(Math.abs(p.x-(roof.x+roof.w))<10&&direction<0){p.x=roof.x+roof.w+8;p.wall=1;}}}
      if(p.wall&&!p.riding){p.wallRun=.14;p.vy=Math.min(p.vy,35);}
    }
    if(p.ground){const ground=roofAt(p.x);if(ground&&p.x>ground.x+30&&p.x<ground.x+ground.w-30){p.safeX=p.x;p.safeY=p.y;}}
    if(p.y>H+60){if(!arcade()){p.hp=0;finish(false);return;}p.riding=false;p.dash=0;p.x=p.safeX;p.y=p.safeY;p.vx=0;p.vy=0;p.ground=true;p.inv=0;hurt(1);if(mode!=='play')return;p.inv=2;note('BACK ON YOUR FEET / HEALTH LOST',2);}
    const cameraTarget=clamp(p.x-W*.38,0,Math.max(0,s.width-W));camera+=(cameraTarget-camera)*Math.min(1,dt*7);
    echoClock-=dt;if(p.dash>0&&!p.riding&&echoClock<=0){echoes.push({...p,life:.24});echoClock=.065;}
    for(const echo of echoes)echo.life-=dt;echoes=echoes.filter(e=>e.life>0);
    if(mount&&mount.hp>0){mount.anim+=dt*(p.riding?Math.max(.2,Math.abs(p.vx)/36):.25);mount.walk=p.riding?p.step:0;mount.bite=Math.max(0,mount.bite-dt);mount.flash=Math.max(0,mount.flash-dt);if(p.riding){mount.x=p.x;mount.y=p.y;if(Math.abs(p.vx)>5)mount.dir=Math.sign(p.vx);}}
    updateEnemies(dt,speed);
    if(p.riding&&p.dash>0&&p.dodgeKind==='charge')for(const e of enemies){if(e.hp>0&&!mount.hits.has(e)&&Math.abs(e.x-p.x)<e.r+32&&Math.abs(enemyAimY(e)-(p.y-25))<42){mount.hits.add(e);hitEnemy(e,3);burst(e.x,enemyAimY(e),P.cyan,8);}}
    for(const b of bullets){if(b.life<=0)continue;const rate=b.good?1:speed;b.prevX=b.x;b.prevY=b.y;if(b.gravity)b.vy+=b.gravity*dt*rate;b.x+=b.vx*dt*rate;b.y+=b.vy*dt*rate;b.life-=dt*rate;
      if(b.x<0||b.x>s.width||b.y<37||b.y>H){b.life=0;continue;}
      if(b.good){for(const e of enemies){if(e.hp>0&&bulletHitsEnemy(b,e)){hitEnemy(e,b.damage??1);b.life=0;break;}}if(b.life>0)for(const c of crates){if(c.hp>0&&b.y>c.y-36&&b.y<c.y+2&&Math.max(b.prevX,b.x)>=c.x-12&&Math.min(b.prevX,b.x)<=c.x+12){c.hp-=b.damage??1;if(c.hp<=0)breakCrate(c);b.life=0;break;}}}
      else if(Math.abs(b.x-p.x)<(p.riding?29:12)&&b.y>p.y-(p.riding?82:50)&&b.y<p.y+2){
        if(p.dash>0&&p.dodgeKind!=='charge'){if(!b.evaded){b.evaded=true;p.focus=clamp(p.focus+4,0,100);note('CLOSE CALL // +4 INSTINCT',1.2);}}
        else{if(p.inv<=0)hurt(1);b.life=0;}
      }
      if(b.kind==='acid'&&b.life>0){const floor=floorAt(b.x);if(floor!==null&&b.prevY<floor&&b.y>=floor){hazards.push({x:b.x,y:floor,life:4});b.life=0;burst(b.x,floor-2,'#b6d971',5);}}
    }
    for(const h of hazards){h.life-=dt*speed;h.warn=Math.max(0,(h.warn||0)-dt*speed);if(!h.warn&&Math.abs(p.x-h.x)<21&&Math.abs(p.y-h.y)<8)hurt(1);}hazards=hazards.filter(h=>h.life>0);
    bullets=bullets.filter(b=>b.life>0);
    for(const v of particles){v.vy+=(v.gravity||0)*dt;v.x+=v.vx*dt;v.y+=v.vy*dt;v.life-=dt;}particles=particles.filter(v=>v.life>0);
    if(mode==='play')updateArcade(dt);
  }
  function halo(x,y,w,h,color){
    g.save();for(let i=3;i>0;i--){g.globalAlpha=.025*(4-i);rect(x-i*5,y-i*4,w+i*10,h+i*8,color);}g.restore();
  }
  function lightCone(x,y,width,height,color){
    g.save();g.globalAlpha=.055;for(let row=0;row<height;row+=8){const w=width*(row+12)/height;rect(x-w/2,y+row,w,8,color);}g.restore();
  }
  function neon(x,y,label,color){
    const width=label.length*6+12;halo(x,y,width,18,color);rect(x,y,width,18,'#090e19');rect(x,y,width,1,color);rect(x,y+17,width,1,color);rect(x,y,1,18,color);text(label,x+6,y+12,color,8);
  }
  function rainBox(x,y,w,h,offset=0){
    g.save();g.beginPath();g.rect(x,y,w,h);g.clip();
    for(let i=0;i<72;i++){const px=x+((i*67-camera*.35+offset)%w+w)%w,py=y+(i*47+time*(82+i%4*12))%h;rect(px,py,1,6,'#8dbdd64d');rect(px-1,py+5,1,3,'#8dbdd633');}g.restore();
  }
  function cityBackdrop(){
    rect(0,43,W,H-43,'#090f20');rect(0,115,W,95,'#111b32');rect(0,210,W,127,'#1b2940');
    // A clouded moon and distant chemical haze; all lighting stays on a pixel grid.
    const moonX=370-camera*.045;rect(moonX-10,62,27,23,'#3b5466');rect(moonX-14,68,35,12,'#3b5466');rect(moonX+4,62,13,6,'#1b2a40');
    for(let i=0;i<7;i++)rect((i*119-camera*.08)%620-80,76+i%3*17,96+i%2*42,5,'#172039');
    for(let layer=0;layer<3;layer++){
      const par=[.12,.24,.42][layer],base=[253,287,331][layer],step=[51,76,99][layer],tints=['#111b2d','#162638','#203548'];
      const offset=camera*par;
      for(let i=Math.floor(offset/step)-1;i<Math.ceil((offset+W)/step)+1;i++){
        const x=Math.round(i*step-offset),height=58+Math.floor(hash(i*9+layer*27)*99),y=base-height;
        rect(x,y,step-7,H-y,tints[layer]);rect(x+8,y-6,step-23,7,tints[layer]);
        if(i%3===0){rect(x+18,y-22,2,20,tints[layer]);rect(x+17,y-23,4,2,'#bc536b');}
        for(let wy=y+12;wy<base;wy+=13)for(let wx=x+7;wx<x+step-12;wx+=11){const h=hash(i*43+wx+wy);if(h>.52)rect(wx,wy,3,5,h>.88?'#87654f':layer===2?'#477a85':'#304452');}
        if(layer===1&&i%4===1){rect(x+step-12,y+13,2,54,'#ba5288');halo(x+step-12,y+13,2,54,'#ba5288');}
      }
    }
    const tower=600-camera*.21;rect(tower,64,86,220,'#0e1a29');rect(tower+13,51,60,14,'#192c3c');rect(tower+40,44,5,8,'#456177');
    for(let i=0;i<8;i++){rect(tower+10+i*9,90,2,177,'#263d4b');rect(tower+12,96+i*20,61,1,'#34545b');}
    neon(tower+22,73,'AXIOM','#62c7ba');
    // A surveillance craft, small against the towers, sweeps the rain district.
    const dx=260-camera*.16+Math.sin(time*.17)*56,dy=91+Math.sin(time*.8)*2;
    rect(dx-20,dy,39,6,'#304554');rect(dx-10,dy-5,21,12,'#3c5560');rect(dx-27,dy-3,13,2,'#78919a');rect(dx+14,dy-3,13,2,'#78919a');rect(dx-2,dy+7,4,3,'#e47383');
    lightCone(dx,dy+12,64,116,'#7cc9d5');
  }
  function officeBackdrop(){
    rect(0,43,W,H-43,'#15151e');
    const x=-camera;
    rect(x,69,740,204,'#29232b');rect(x,74,740,4,'#504046');rect(x,207,740,65,'#201d28');rect(x,204,740,4,'#604a46');
    for(let wx=12;wx<740;wx+=24){rect(x+wx,82,1,121,'#393039');rect(x+wx,213,1,56,'#383038');}
    // Books, old case boxes and a warm lamp make the safehouse feel inhabited.
    rect(25-camera,112,88,142,'#100f19');rect(29-camera,115,80,132,'#4d3633');
    for(let shelf=0;shelf<3;shelf++){const sy=126+shelf*38;for(let b=0;b<9;b++){const bx=34-camera+b*8;rect(bx,sy+hash(b+shelf*14)*5,6,25-b%3*3,['#8a6b4f','#40585c','#703f48'][b%3]);rect(bx,sy+18,6,2,'#aa9169');}rect(30-camera,sy+28,77,4,'#271d25');}
    neon(32-camera,86,'SAFE / 09','#d6b578');
    // Rain only appears beyond the glass; the room itself is dry and still.
    const wx=163-camera;rect(wx-6,95,150,112,'#171d2b');rect(wx,100,138,101,'#142b43');
    for(let i=0;i<5;i++){rect(wx+i*28,138-i%3*13,23,64+i%3*13,'#20394b');for(let j=0;j<5;j++)rect(wx+i*28+8,150+j*10,3,3,'#8d765a');}
    rainBox(wx,100,138,101,80);rect(wx+66,99,5,104,'#6c665f');
    for(let i=0;i<9;i++)rect(wx-2,101+i*11,143,3,'#292b32');rect(wx-8,202,154,5,'#847263');
    // Desk, radio, open notebook, coffee and detective's chair.
    rect(149-camera,234,179,9,'#765643');rect(152-camera,243,8,29,'#392a2b');rect(307-camera,243,13,29,'#392a2b');rect(278-camera,245,26,19,'#4c3630');rect(289-camera,251,5,2,'#b29469');
    rect(241-camera,228,27,5,'#cebd95');rect(253-camera,225,2,9,'#8d6953');rect(214-camera,224,8,10,'#b99771');rect(221-camera,227,3,5,'#b99771');
    rect(277-camera,218,28,16,'#202d30');for(let i=0;i<5;i++)rect(281-camera+i*3,222,1,8,'#5e7470');rect(299-camera,222,3,3,'#d6b578');rect(302-camera,203,1,15,'#708177');
    rect(180-camera,201,3,33,'#9d8056');rect(169-camera,200,26,5,'#4b6d61');rect(175-camera,196,14,5,'#6e9b76');rect(176-camera,233,18,2,'#bc9a6a');lightCone(181-camera,207,95,63,'#ffcf83');
    rect(226-camera,245,20,16,'#31212b');rect(231-camera,239,15,9,'#54363a');rect(230-camera,261,3,12,'#161522');rect(242-camera,261,3,12,'#161522');
    // Evidence board, strings and a faded photograph of the missing partner.
    const bx=362-camera;rect(bx,108,120,97,'#6c4a35');rect(bx+4,112,112,89,'#352b2c');
    const papers=[[10,9,29,24],[60,9,42,16],[17,55,39,20],[79,42,22,34]];
    for(const [px,py,pw,ph] of papers){rect(bx+px,112+py,pw,ph,'#b3a083');rect(bx+px+4,116+py,pw-8,2,'#736d62');rect(bx+px+3,111+py,3,3,'#c65b63');}
    rect(bx+15,124,19,11,'#47504c');rect(bx+23,125,6,5,'#c1a685');rect(bx+20,131,11,7,'#35404b');
    for(let i=0;i<48;i++){rect(bx+29+i,141+Math.round(i*.28),1,1,'#a45c60');rect(bx+52+i,181-Math.round(i*.83),1,1,'#a45c60');}
    text('BLACK RAIN',bx+15,198,'#d4b98e',7);
    // Exposed cybernetic-arm parts tie the room to Elias's past.
    rect(510-camera,231,86,9,'#755745');rect(517-camera,239,6,34,'#3d3234');rect(581-camera,239,6,34,'#3d3234');rect(518-camera,225,42,5,'#53696d');rect(521-camera,221,10,6,'#b4c4b6');rect(534-camera,224,17,3,'#7adaCD');
    rect(563-camera,212,25,20,'#192934');rect(566-camera,215,19,11,'#397469');text('AX-09',522-camera,249,'#b9a983',7);rect(542-camera,259,16,14,'#7d4c44');rect(548-camera,262,4,8,'#e1c9a0');rect(545-camera,265,10,2,'#e1c9a0');
    rect(617-camera,89,2,41,'#0e1522');rect(601-camera,128,34,6,'#b38b57');rect(606-camera,133,24,3,'#eac18c');lightCone(618-camera,135,160,138,'#ffbb7d');
    rect(333-camera,245,4,28,'#614640');rect(324-camera,234,22,3,'#775850');rect(325-camera,237,13,23,'#293746');
  }
  function laboratoryBackdrop(core=false){
    rect(0,43,W,H-43,core?'#101322':'#0b1723');rect(0,73,W,193,core?'#171f30':'#172c39');rect(0,266,W,71,'#080f1b');
    const offset=camera*.72,step=128;
    for(let i=Math.floor(offset/step)-1;i<Math.ceil((offset+W)/step)+1;i++){
      const x=i*step-offset;rect(x,83,120,173,core?'#172232':'#1b3540');rect(x+4,89,110,159,core?'#1b293a':'#203c45');
      rect(x+6,94,107,1,'#33545b');rect(x+6,182,107,2,'#142936');rect(x+19,105,1,129,'#28434c');rect(x+100,105,1,129,'#28434c');
      rect(x+117,68,11,248,'#0c1a28');rect(x+119,83,4,196,'#36515c');
      for(let j=0;j<3;j++)rect(x+32+j*12,218,8,18,'#142735');
      rect(x+34,87,40,3,core?'#4b7981':'#558f92');
      if(i%2===0){rect(x+90,77,11,5,'#d56b70');halo(x+90,77,11,5,'#cf5e68');lightCone(x+96,83,78,141,'#d56470');}
    }
    // Cable trays, ventilation and low pipes identify a sealed underground facility.
    rect(0,54,W,7,'#2e4551');rect(0,55,W,2,'#526573');rect(0,66,W,3,'#17212e');
    for(let i=0;i<9;i++){const px=((i*64-camera*.85)%560+560)%560-40;rect(px,51,4,14,'#77828a');rect(px+16,66,24,11,'#080f19');rect(px+19,68,18,1,'#405761');}
    rect(0,289,W,5,'#263a49');rect(0,296,W,2,'#436073');
  }
  function specimenTank(worldX,floor,broken,serial){
    const x=worldX-camera,y=floor-151;if(x<-100||x>W+100)return;
    const tint=broken?'#b36677':'#75d3b6';
    rect(x-31,y,65,7,'#577881');rect(x-37,y+7,77,11,'#233947');rect(x-31,y+17,65,111,'#0a1823');
    rect(x-25,y+20,53,92,broken?'#192a37':'#164e50');rect(x-30,y+17,5,105,'#567d86');rect(x+28,y+17,5,105,'#567d86');
    if(!broken){
      halo(x-22,y+24,48,79,'#3ce3b0');rect(x-22,y+24,47,85,'#205e5b');rect(x-20,y+24,3,83,'#5b9e92');rect(x+19,y+27,2,76,'#5b9e92');
      const float=Math.round(Math.sin(time*1.3+worldX)*2);
      g.save();g.translate(x,y+63+float);rect(-13,-9,21,18,'#143e43');rect(-19,-2,10,5,'#143e43');rect(-24,-5,7,3,'#143e43');rect(3,-17,15,13,'#143e43');rect(13,-11,9,5,'#143e43');rect(13,-14,3,2,'#aed38c');rect(-9,7,5,8,'#143e43');rect(3,5,5,9,'#143e43');rect(-4,-7,4,6,'#52968a');g.restore();
      for(let i=0;i<8;i++){const by=y+102-(time*13+i*13)%76;rect(x-14+i%4*10,by,2,2,'#79c6aa');}
      rect(x-20,y+37,41,1,'#91e1ba45');rect(x-20,y+79,41,1,'#91e1ba45');
    }else{
      for(let i=0;i<5;i++){rect(x-24+i*11,y+20+i%2*7,7,3,'#61969b');rect(x-23+i*10,y+99-i%3*4,4,12+i%3*4,'#61969b');}
      rect(x-10,y+59,21,3,'#5f3546');rect(x-13,y+67,17,2,'#663848');rect(x-4,y+72,3,14,'#5b3341');
      for(let i=0;i<3;i++){rect(x-15+i*11,y+49,2,17,'#96bcc0');rect(x-13+i*11,y+65,2,6,'#96bcc0');}
      for(let i=0;i<7;i++)rect(x-33+i*10,floor-9-i%3*2,5,2,'#84afb3');
    }
    rect(x-36,y+114,75,14,'#294451');rect(x-33,y+114,69,2,tint);rect(x-22,y+129,5,15,'#3d5d67');rect(x+19,y+129,5,15,'#3d5d67');
    rect(x-24,y+117,51,10,'#102631');text(serial,x+2,y+125,tint,7,'center');
    rect(x+35,y+37,17,28,'#0c1c2a');rect(x+38,y+41,11,12,broken?'#8e465a':'#467e73');rect(x+39,y+58,3,2,tint);
  }
  function labDetails(){
    for(const t of [{x:139,y:265,b:false,id:'RZ-03'},{x:382,y:240,b:true,id:'BREACH'},{x:695,y:263,b:false,id:'RZ-12'},{x:1023,y:243,b:true,id:'CR-01'}])specimenTank(t.x,t.y,t.b,t.id);
    neon(23-camera,99,'AXIOM / B6','#7bc9c5');neon(542-camera,102,'LAZARUS','#be637e');neon(1210-camera,108,'CORE ACCESS','#d69576');
    for(const wx of [270,800,1120]){const x=wx-camera;rect(x,102,61,37,'#0c1c2a');rect(x+3,105,55,29,'#254b51');text('GENOME',x+7,116,'#83bda9',7);for(let i=0;i<8;i++)rect(x+6+i*6,122,3,4+i%3*3,'#659b8d');rect(x+9,140,43,3,'#456773');}
    for(const wx of [500,1087]){const floor=floorAt(wx),x=wx-camera;if(floor!==null){rect(x-13,floor-3,30,3,'#613543');rect(x+5,floor-6,8,3,'#774250');rect(x+9,floor+1,2,11,'#613543');}}
    // Thin coolant plumes replace outdoor rain.
    for(let i=0;i<12;i++){const x=((i*83-camera*.9)%560+560)%560-40,y=275-(time*11+i*17)%77;rect(x,y,10+i%3*6,2,'#8dd3c014');}
  }
  function fern(x,y,height,color){
    rect(x,y-height,2,height,color);for(let i=0;i<5;i++){const py=y-height+i*height/6,reach=6+i*3;rect(x-reach,py+4,reach,2,color);rect(x+2,py+2,reach-2,2,color);rect(x-reach,py,3,6,color);rect(x+reach-3,py-2,3,5,color);}
  }
  function coreDetails(){
    const cx=770-camera,cy=158,closed=mode==='win';
    // A heavy containment ring frames a real prehistoric landscape.
    rect(cx-124,76,16,181,'#304859');rect(cx+108,76,16,181,'#304859');rect(cx-128,75,256,9,'#385667');rect(cx-113,242,226,13,'#3d5b67');
    for(const dx of [-118,116]){rect(cx+dx,86,4,146,'#6d8390');for(let i=0;i<5;i++){rect(cx+dx-5,94+i*28,13,10,'#192f3f');rect(cx+dx-2,97+i*28,7,3,closed?'#436b68':'#80c6b0');}}
    const points=[];for(let i=0;i<40;i++){const a=i*Math.PI/20;points.push([Math.round(Math.cos(a)*96/3)*3,Math.round(Math.sin(a)*83/3)*3]);}
    g.save();g.translate(cx,cy);g.beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fillStyle='#0a1421';g.fill();g.lineWidth=8;g.strokeStyle='#456474';g.stroke();g.lineWidth=3;g.strokeStyle=closed?'#426967':'#79d7b4';g.stroke();g.clip();
    if(!closed){
      rect(-92,-78,184,156,'#a78864');rect(-92,-30,184,108,'#7e8664');rect(-92,12,184,68,'#4f6e58');
      rect(36,-57,20,17,'#dbc28e');rect(32,-53,28,9,'#dbc28e');
      for(let i=0;i<9;i++){const x=-102+i*26,h=31+(i*13)%43;rect(x,8-h,16,88+h,'#526951');rect(x-7,5-h,31,7,'#526951');rect(x-3,-2-h,22,8,'#526951');}
      rect(-29,13,39,20,'#334d46');rect(-23,7,25,11,'#334d46');rect(3,-12,8,34,'#334d46');rect(7,-18,15,8,'#334d46');rect(-38,20,14,5,'#334d46');rect(-47,18,12,3,'#334d46');rect(-21,31,5,18,'#334d46');rect(-2,30,5,18,'#334d46');
      for(let i=0;i<5;i++)fern(-80+i*43,83,34+i%3*14,'#213e39');
      for(let i=0;i<12;i++){const px=-84+(i*37)%165,py=-69+(time*9+i*17)%145;rect(px,py,2,2,'#cae8b199');}
    }else{text('BREACH',0,-2,'#81acaa',8,'center');text('SEALED',0,12,'#a4d1b3',8,'center');}
    g.restore();
    if(!closed){
      halo(cx-99,cy-85,198,170,'#78ffb8');
      for(let i=0;i<20;i++){const a=i*Math.PI/10+time*.18,rx=cx+Math.cos(a)*100,ry=cy+Math.sin(a)*88;rect(rx,ry,2+i%2*2,3,'#b6f5c1');}
      for(let i=0;i<4;i++){const x=cx-130+i*78,y=196+Math.sin(time*.7+i)*13;rect(x,y,11,5,'#405963');rect(x+2,y-3,6,4,'#6f8280');}
    }
    neon(27-camera,103,'REACTOR / B9','#be839d');
    const rack=157-camera;rect(rack-12,203,27,56,'#243b4b');rect(rack-8,208,19,29,'#326358');for(let i=0;i<3;i++)rect(rack-5,212+i*7,13,2,'#83bb99');rect(rack-8,243,19,4,'#6b7e86');
    for(const x of [598,888,922])fern(x-camera,266,27+x%17,'#365956');
    for(let i=0;i<5;i++){rect(840-camera+i*12,260-i%2*4,14,3,'#4c7364');rect(900-camera-i*9,253-i*5,3,8,'#3a5f58');}
  }
  function expansionBackdrop(theme){
    if(theme==='tower'){cityBackdrop();rect(0,44,W,2,'#db7985');const beam=310-camera*.07;rect(beam,52,8,205,'#5d748a');halo(beam-5,52,18,200,'#c786d9');for(let i=0;i<9;i++){rect(beam-55,72+i*18,118,3,'#4f425f');rect(beam-47,76+i*18,102,1,'#8a637e');}rainBox(0,44,W,270);return;}
    if(theme==='jungle'){
      rect(0,43,W,H-43,'#0b2527');rect(0,65,W,130,'#234446');rect(0,195,W,150,'#132e2c');
      rect(330-camera*.035,72,32,32,'#95b698');halo(320-camera*.035,62,50,50,'#bdce92');
      for(let layer=0;layer<3;layer++){const offset=camera*(.12+layer*.16),step=91+layer*21;for(let i=Math.floor(offset/step)-1;i<(offset+W)/step+1;i++){const x=i*step-offset,top=60+hash(i+layer*33)*80,tint=['#294e48','#1b403a','#16362f'][layer];rect(x,top,13+layer*4,280-top,tint);for(let j=0;j<5;j++){rect(x-40+j*5,top+j*9,90-j*12,12,tint);rect(x+8,top+40+j*17,30-j*4,4,'#386253');}fern(x-9,282,40+layer*15,tint);}}
      for(let i=0;i<20;i++){const x=(i*73-camera*.4+Math.sin(time+i)*8+W*10)%W,y=90+(i*41)%140;rect(x,y,2,2,'#a4cb784c');}return;
    }
    rect(0,43,W,H-43,theme==='train'?'#302831':'#102735');rect(0,90,W,120,theme==='train'?'#754b44':'#274954');
    const drift=theme==='train'?time*82:0;
    for(let i=0;i<12;i++){const x=((i*87-camera*.23-drift*.35)%1044+1044)%1044-110,height=50+hash(i)*74;rect(x,224-height,70,height,theme==='train'?'#41383b':'#1b3442');for(let j=0;j<5;j++)rect(x+9+j*11,234-height,3,5,'#9a85604d');}
    if(theme==='docks'){
      rect(0,265,W,95,'#102c3e');for(let i=0;i<30;i++)rect((i*47+time*8)%W,277+i%8*9,11+i%4*8,1,i%3?'#365366':'#8c82694d');
      for(let i=0;i<5;i++){const x=i*185-camera*.48;rect(x+42,83,9,181,'#172d37');rect(x-14,83,155,7,'#3e5960');rect(x+115,89,2,105,'#78908c');rect(x+107,189,19,5,'#cbac71');for(let n=0;n<9;n++)rect(x+42,91+n*18,9,2,'#8b7c57');}
      rainBox(0,44,W,280);return;
    }
    rect(0,297,W,63,'#1b2029');for(let i=0;i<26;i++){const x=((i*29-camera-drift*3)%754+754)%754;rect(x,309,13,6,'#554849');rect(x,330,13,3,'#6f5550');}rect(0,302,W,3,'#a68e75');rect(0,325,W,3,'#a68e75');
    for(let i=0;i<3;i++){const x=((i*240-drift*1.8-camera*.6)%720+720)%720-80;rect(x,49,5,239,'#292a32');rect(x-24,67,53,4,'#292a32');}rect(0,68,W,1,'#625253');
  }
  function expansionPlatform(r,i,theme){const x=Math.round(r.x-camera);if(theme==='jungle'){rect(x,r.y,r.w,H-r.y,'#28372e');rect(x,r.y-5,r.w,6,'#719259');rect(x,r.y+1,r.w,7,'#425c38');for(let n=0;n<r.w;n+=17){rect(x+n,r.y+9,9,3,'#566049');rect(x+n+7,r.y+27,5,12,'#152d2a');}for(let n=15;n<r.w;n+=87)fern(x+n,r.y,19,'#527f4a');return;}
    const train=theme==='train',tower=theme==='tower';rect(x,r.y,r.w,train?38:H-r.y,tower?'#2b2e44':train?'#544443':'#315054');rect(x,r.y-6,r.w,7,tower?'#81949e':'#b99f75');
    for(let n=5;n<r.w-8;n+=16){rect(x+n,r.y+8,3,train?20:61,'#172d38');rect(x+n+3,r.y+8,2,train?20:61,'#7c87824d');}
    if(train){rect(x+10,r.y+38,r.w-20,5,'#18232c');for(const wheel of [26,r.w-38]){rect(x+wheel,r.y+37,23,16,'#171f29');rect(x+wheel+5,r.y+40,13,9,'#7c7c76');}text('AX / 0'+(i+1),x+24,r.y+26,'#e4c790',7);}
    else{for(let n=15;n<r.w;n+=100){rect(x+n,r.y+13,32,19,'#172a34');text(tower?'09':'AX',x+n+6,r.y+26,'#759998',7);}if(tower)for(let n=25;n<r.w;n+=115){rect(x+n,r.y-63,4,57,'#677581');rect(x+n-3,r.y-65,10,3,'#e28b9e');}}
  }
  function platform(r,i){
    const x=Math.round(r.x-camera);if(x>W+8||x+r.w<-8)return;
    if(art){art.terrain(g,r,stage,camera,time,i);return;}
    if(scenes[stage].theme){expansionPlatform(r,i,scenes[stage].theme);return;}
    if(stage===0){
      rect(x,r.y,r.w,H-r.y,'#182230');rect(x+3,r.y+9,r.w-6,H-r.y-9,'#2d2c38');
      for(let row=0;row<10;row++)for(let col=0;col<Math.ceil(r.w/22);col++){const px=x+col*22+(row%2?11:0);if(px+18>x+r.w-3)continue;rect(px,r.y+13+row*9,18,6,(row+col)%5===0?'#3d3540':'#33303b');rect(px,r.y+19+row*9,18,1,'#1a2431');}
      for(let wx=x+27;wx<x+r.w-22;wx+=57){rect(wx-2,r.y+34,23,36,'#101b2a');rect(wx,r.y+36,19,31,'#273e50');rect(wx+3,r.y+39,6,23,i%2?'#ae775a':'#548891');rect(wx+11,r.y+39,5,23,i%2?'#67554a':'#365e72');rect(wx-3,r.y+69,25,3,'#65505a');}
      rect(x-2,r.y-7,r.w+4,8,'#101c2a');rect(x,r.y-7,r.w,2,'#66828e');rect(x+3,r.y-3,r.w-6,2,'#3d6573');
      for(let n=0;n<5;n++){const px=x+19+n*49;if(px+27<x+r.w)rect(px,r.y-3+n%2,19+n%3*4,1,n%2?'#875d8d':'#70a6ad');}
      const vent=x+r.w-61;rect(vent,r.y-34,32,27,'#243541');rect(vent+2,r.y-32,28,21,'#405460');for(let j=0;j<5;j++)rect(vent+5,r.y-29+j*3,22,1,'#142631');rect(vent-2,r.y-36,36,3,'#677b83');
      if(i===0||i===2){const sx=x+84,sy=r.y-72;rect(sx-3,sy-4,123,26,'#283345');neon(sx,sy,i===0?'NIGHTFALL HOTEL':'NO VACANCY',i===0?'#d277a1':'#6ec7c5');rect(sx+8,sy+19,3,46,'#3c4e5a');rect(sx+105,sy+19,3,46,'#3c4e5a');}
      if(i%2){const ax=x+24;rect(ax,r.y-67,2,60,'#526f7b');rect(ax-12,r.y-52,30,2,'#617e87');rect(ax-7,r.y-60,17,2,'#617e87');}
      if(i===3){rect(x+r.w-12,r.y+5,5,103,'#58616e');for(let j=0;j<8;j++)rect(x+r.w-23,r.y+12+j*13,28,2,'#4b5866');}
    }else if(stage===1){
      rect(x,r.y,r.w,H-r.y,'#312730');for(let row=0;row<8;row++){rect(x,r.y+row*9,r.w,1,'#665047');for(let col=0;col<10;col++)rect(x+col*91+(row%2?40:0),r.y+row*9,1,9,'#191d28');}rect(x,r.y-4,r.w,4,'#9a795b');
      rect(354-camera,285,254,34,'#5a3640');rect(360-camera,289,242,26,'#71464c');rect(366-camera,293,230,1,'#a47866');rect(366-camera,310,230,1,'#a47866');
    }else{
      rect(x,r.y,r.w,H-r.y,'#101d2b');rect(x,r.y-6,r.w,7,'#3b5667');rect(x,r.y-6,r.w,2,'#9aaeb2');rect(x,r.y+1,r.w,9,'#1c2e3d');
      for(let px=x+5;px<x+r.w-5;px+=13){rect(px,r.y+2,8,3,'#617278');rect(px+2,r.y+4,4,2,'#283c49');}
      for(let px=x+15;px<x+r.w-19;px+=47){rect(px,r.y+15,31,46,'#1b2f40');rect(px+4,r.y+19,23,1,'#375569');rect(px+12,r.y+23,5,21,'#080f1c');rect(px+7,r.y+51,15,2,stage===3?'#468a78':'#7c4659');}
      for(const end of [x,x+r.w-23]){rect(end,r.y-5,23,5,'#c4ab6c');for(let j=0;j<4;j++)rect(end+j*6,r.y-5,3,5,'#263243');}
      if(stage===3){for(let n=0;n<8;n++){const px=620-camera+n*36;rect(px,r.y+24+n%2*10,15,2,'#38615b');rect(px+12,r.y+18+n%2*10,2,8,'#447e6d');}}
    }
  }
  function accessPoint(){
    const s=scenes[stage],x=s.exit.x-camera,y=s.exit.y;
    if(stage===3){
      rect(x-27,y-43,47,36,'#213849');rect(x-25,y-47,43,9,'#6a7d88');rect(x-23,y-37,36,17,unlocked?'#2d655b':'#57374d');rect(x-19,y-33,28,2,unlocked?'#9be4b6':'#d5848d');rect(x-20,y-16,30,3,'#748889');rect(x-19,y-12,4,10,'#3a5260');rect(x+6,y-12,4,10,'#3a5260');
      text(unlocked?'SHUTDOWN':'CORE LOCK',x-2,y-54,unlocked?P.acid:'#d2a2af',8,'center');return;
    }
    const label=s.exitLabel,width=stage===1?57:49;
    rect(x-width/2-4,y-85,width+8,85,'#142433');rect(x-width/2,y-81,width,77,stage===1?'#4b4345':'#354351');
    rect(x-width/2+5,y-76,width-10,72,'#172b39');rect(x-1,y-73,2,67,'#5b6f76');
    if(stage===0){for(let j=0;j<6;j++)rect(x-17,y-67+j*10,35,2,'#334955');}
    if(stage===1){rect(x-23,y-72,46,7,'#85715b');rect(x-22,y-55,17,41,'#4b4b4b');rect(x+5,y-55,17,41,'#4b4b4b');}
    rect(x+width/2+3,y-39,8,16,'#263b49');rect(x+width/2+5,y-36,4,5,unlocked?'#96dcba':'#d0657e');
    neon(x-label.length*3-6,y-104,label,stage===1?'#dfb986':unlocked?'#85cabc':'#ab86b7');
  }
  function scenery(){
    const s=scenes[stage];
    const painted=art?.scene(g,stage,camera,time,s.width);
    if(!painted){if(s.theme)expansionBackdrop(s.theme);else if(stage===0)cityBackdrop();else if(stage===1)officeBackdrop();else laboratoryBackdrop(stage===3);if(stage===2)labDetails();else if(stage===3)coreDetails();}
    for(let i=0;i<s.roofs.length;i++)platform(s.roofs[i],i);
    if(s.clue){const x=s.clue.x-camera,y=s.clue.y;rect(x-9,y-30,18,23,'#273744');rect(x-6,y-27,13,15,'#e2c9a0');for(let i=0;i<3;i++)rect(x-4,y-24+i*4,8,1,'#805e58');rect(x-2,y-31,5,2,'#e38c82');}
    for(const f of s.files||[]){const x=f.x-camera;rect(x-3,f.y-42,7,5,'#d1b27c');rect(x-1,f.y-41,3,3,'#f2d8a2');}
    if(s.terminal){const x=s.terminal.x-camera,y=s.terminal.y;rect(x-12,y-40,23,34,'#152a39');rect(x-9,y-36,17,17,unlocked?'#3c8572':'#623b56');rect(x-7,y-33,13,2,unlocked?'#a7ecc0':'#d995a3');rect(x-7,y-27,8,2,unlocked?'#a7ecc0':'#d995a3');rect(x-8,y-14,16,3,'#8babae');rect(x-7,y-6,4,6,'#4b6776');}
    accessPoint();
    if(stage===0){
      rainBox(0,44,W,293);
      for(const roof of s.roofs){const x=roof.x+roof.w-40-camera;for(let j=0;j<3;j++){const rise=(time*13+j*13)%44;rect(x-3-rise*.13,roof.y-35-rise,8+rise*.28,3,'#a6c6d018');}}
    }
  }
  function enemySprite(e){
    const x=Math.round(e.x-camera),y=Math.round(e.y),clock=e.anim||0,flash=e.flash>0;
    if(e.hp<=0){if(art&&e.death>0){const age=1-e.death/.55;g.save();g.globalAlpha=Math.min(1,e.death*3);g.translate(x,y-12*Math.sin(age*Math.PI));g.rotate(age*.8*(e.dir<0?-1:1));g.scale(1,1-age*.45);art.creature(g,{...e,flash:0,wind:0},0,0,time);g.restore();}return;}
    if(art){art.creature(g,e,x,y,time);return;}
    if(x<-110||x>W+110)return;
    if(e.type!=='wirewing')rect(x-e.r,y-1,e.r*2,3,'#182f324c');
    if(e.phaseWind>0){const tx=e.shiftTo-camera,ty=floorAt(e.shiftTo);for(let i=0;i<3;i++)rect(tx-20+i*17,ty-5-i%2*4,10,2,'#cb93da');}
    g.save();g.translate(x,y);g.scale(e.dir<0?-1:1,1);if(e.type==='stalker'&&!flash&&(e.phaseWind>0||(e.anim%4<1.6&&Math.abs(e.x-player.x)>80)))g.globalAlpha=.5;
    const ink='#102328',dark='#31504e',metal='#526c68',chrome='#bad0b5',bone='#efe8bc';
    const skin=flash?P.white:e.variant==='iron'?'#aa8466':e.variant==='root'?'#718c4e':e.variant==='omega'?'#90749f':e.type==='strider'?'#729bb5':'#68988a',light=flash?P.white:e.variant==='iron'?'#e2c4a1':e.variant==='root'?'#c6d795':e.variant==='omega'?'#d6b4e4':e.type==='strider'?'#b6d1d7':'#a2c4a0',eye=e.type==='strider'?'#9cf2db':e.wind>0?'#fff0a8':'#ef6256';
    const stride=[0,2,4,1,-2,-3][Math.floor(clock*10)%6],jaw=e.bite>0?8:e.wind>0?4:e.lunge>0?7:Math.floor(clock*3)%2;
    if(e.type==='wirewing'){
      const flap=[-14,-6,4,9,2,-8][Math.floor(clock*10)%6],purple=flash?P.white:'#827dac',membrane=flash?P.white:'#575a85';
      // Jointed pterosaur wings, a needle beak and exposed flight servos.
      for(const side of [-1,1]){g.save();g.scale(side,1);
        rect(4,-8,15,10,ink);rect(12,-9+flap*.3,15,8,ink);rect(24,-10+flap*.7,13,7,ink);rect(35,-13+flap,7,6,ink);
        rect(7,-6,10,6,purple);rect(16,-6+flap*.3,9,8,membrane);rect(25,-7+flap*.7,9,8,membrane);rect(34,-10+flap,5,3,purple);
        rect(18,flap*.3,3,5,ink);rect(29,flap*.7,3,5,ink);rect(11,-8+flap*.2,4,4,chrome);rect(13,-7+flap*.2,2,2,'#c696cb');g.restore();}
      rect(-8,-13,22,24,ink);rect(-5,-10,16,18,purple);rect(-2,-9,7,14,metal);rect(-1,-5,5,3,P.cyan);
      rect(5,-19,13,13,ink);rect(7,-17,10,8,purple);rect(2,-23,5,8,ink);rect(4,-22,3,5,chrome);
      rect(16,-12,12,7,ink);rect(26,-10,10,4,ink);rect(18,-11,10,3,chrome);rect(26,-9,7,1,bone);rect(12,-16,4,3,'#f1a0ad');
      rect(-6,9,4,7,ink);rect(3,8,4,7,ink);rect(-8,14,7,2,bone);rect(3,13,7,2,bone);
    }else if(e.type==='spitter'){
      const olive=flash?P.white:'#7e9679',pale=flash?P.white:'#bdd091',frill=flash?P.white:'#976c9a';
      rect(-37,-16,18,5,ink);rect(-28,-23,19,9,ink);rect(-25,-21,17,5,olive);rect(-16,-30,30,22,ink);rect(-13,-28,25,17,olive);rect(-9,-25,15,10,pale);
      // A broad violet frill identifies the acid weapon before it fires.
      rect(5,-41,23,26,ink);rect(10,-48,14,39,ink);rect(7,-39,19,23,frill);rect(12,-46,10,34,frill);
      for(let i=0;i<4;i++){rect(9+i*4,-39-i%2*4,2,19+i%2*9,'#b2af8e');rect(10+i*4,-24+i%2*4,2,5,'#684861');}
      rect(16,-40,18,18,ink);rect(18,-38,15,12,olive);rect(27,-33,13,8,ink);rect(29,-32,10,4,pale);
      rect(22,-38,7,5,ink);rect(25,-37,3,3,'#ff9d8b');rect(19,-44,3,6,pale);rect(28,-43,3,6,pale);
      rect(30,-25,9,4,ink);rect(31,-25,2,3,bone);rect(36,-25,2,3,bone);
      const charged=e.shoot<.5;rect(20,-25,10,8,ink);rect(22,-24,7,6,charged?'#e0f896':'#809f64');if(charged){rect(38,-32,3,4,'#dcf88f');rect(42,-30,2,2,'#dcf88f');}
      rect(-10,-20,12,7,metal);rect(-8,-19,8,3,'#c6d88b');rect(-4,-15,4,4,chrome);
      for(let i=0;i<2;i++){const px=i?5:-13,off=i?stride:-stride;rect(px,-12,9,9,ink);rect(px+2,-11,5,5,metal);rect(px+off,-5,11,5,ink);rect(px+off+7,-4,3,3,bone);}
    }else if(e.type==='stalker'){
      const hide=flash?P.white:'#71647f',plate=flash?P.white:'#ab91b5';
      rect(-37,-21,15,3,ink);rect(-29,-18,13,5,ink);rect(-37,-22,5,2,'#c18ec6');
      rect(-22,-28,43,19,ink);rect(-18,-26,35,15,hide);rect(-16,-26,8,7,plate);rect(-5,-29,10,9,ink);rect(-3,-27,6,7,plate);rect(8,-27,9,7,plate);
      rect(16,-31,18,17,ink);rect(19,-29,12,11,hide);rect(30,-23,8,7,ink);rect(31,-23,6,3,plate);
      rect(25,-28,7,4,'#dc83c2');rect(19,-34,3,5,chrome);rect(28,-34,3,5,chrome);rect(31,-16,3,5,bone);rect(35,-18,2,5,bone);
      rect(-12,-18,24,7,ink);for(let i=0;i<3;i++)rect(-9+i*7,-17,4,3,'#be8bcc');
      // Six low articulated limbs make this mutation read differently from a raptor.
      for(let i=0;i<3;i++){const px=-18+i*17,off=(i%2?1:-1)*stride;rect(px,-14,5,8,ink);rect(px+off-3,-9,5,8,metal);rect(px+off-6,-3,12,3,ink);rect(px+off+3,-4,3,3,chrome);rect(px+2,-12,3,3,'#b19bbf');}
    }else if(e.type==='turret'){
      // A fixed saurian skull, exposed ammunition belt and twin stabilizers.
      rect(-18,-8,37,8,ink);rect(-15,-11,7,9,metal);rect(10,-11,7,9,metal);
      rect(-13,-22,26,15,ink);rect(-11,-20,22,10,dark);rect(-8,-20,5,9,chrome);rect(4,-20,5,9,chrome);
      rect(-3,-25,6,16,metal);rect(-1,-22,3,5,P.cyan);rect(-14,-14,29,3,metal);
      rect(-11,-36,23,15,ink);rect(-8,-34,21,10,skin);rect(-5,-32,9,3,light);
      rect(9,-31,19,10,ink);rect(11,-29,16,4,chrome);rect(12,-24,14,2,dark);
      rect(13,-23,3,4,bone);rect(20,-23,3,4,bone);rect(3,-33,7,5,ink);rect(6,-32,3,3,eye);
      rect(24,-27,5,3,ink);rect(-15,-33,6,18,ink);for(let i=0;i<4;i++)rect(-14,-30+i*4,4,2,'#beab77');
      rect(-3,-39,4,5,ink);rect(-2,-42,2,4,P.red);
      if(e.shoot<.25){rect(29,-28,2,4,eye);rect(32,-27,2,2,eye);}
    }else if(e.type==='brute'){
      // The Ironback: four hydraulic feet and a heavy segmented tail club.
      const amber=flash?P.white:'#ab8f65',sand=flash?P.white:'#d1b580';
      rect(-47,-20,21,8,ink);rect(-42,-19,17,4,metal);rect(-53,-25,14,16,ink);rect(-51,-23,10,12,amber);rect(-50,-22,6,3,sand);
      rect(-27,-31,44,22,ink);rect(-23,-38,34,29,ink);rect(-24,-30,41,19,amber);rect(-20,-35,32,18,sand);
      for(let i=0;i<4;i++){const px=-22+i*10;rect(px,-36,8,16,metal);rect(px+2,-34,5,11,dark);rect(px+2,-39,5,5,ink);rect(px+3,-40,3,4,sand);}
      rect(-18,-19,30,7,dark);rect(-13,-18,7,4,P.cyan);rect(1,-18,7,4,P.cyan);
      rect(15,-30,22,19,ink);rect(17,-28,19,13,amber);rect(31,-25,11,10,ink);rect(32,-24,10,5,sand);
      rect(25,-28,8,5,ink);rect(27,-27,4,3,eye);rect(33,-17,7,2,bone);rect(36,-22,2,2,ink);
      rect(16,-35,6,9,ink);rect(17,-36,3,8,sand);rect(31,-33,4,6,sand);
      for(let i=0;i<3;i++){const px=-20+i*18,offset=i%2?stride:-stride;rect(px,-13,9,13,ink);rect(px+2,-11,5,8,metal);rect(px+offset,-4,12,4,ink);rect(px+offset+2,-3,3,2,chrome);rect(px+offset+7,-3,3,2,chrome);}
    }else if(e.type==='boss'){
      // Crown Rex: oversized skull, a separate lower jaw, vertebrae and pistons.
      const tail=Math.round(Math.sin(clock*3)*2);
      rect(-76,-22+tail,17,5,ink);rect(-65,-28+tail,22,10,ink);rect(-61,-26+tail,19,6,skin);rect(-49,-34,18,15,ink);rect(-47,-31,15,10,skin);
      rect(-39,-43,61,31,ink);rect(-34,-47,51,35,ink);rect(-35,-41,53,25,skin);rect(-30,-38,41,17,light);
      for(let i=0;i<4;i++){const px=-31+i*12;rect(px,-47-(i%2)*3,8,15,ink);rect(px+2,-45-(i%2)*3,5,10,metal);rect(px+2,-50-(i%2)*3,4,5,chrome);}
      rect(-27,-26,31,11,dark);rect(-23,-24,8,5,P.cyan);rect(-9,-24,8,5,P.cyan);rect(-27,-17,42,4,metal);
      rect(6,-42,20,19,ink);rect(13,-40,11,13,skin);
      rect(16,-65,35,32,ink);rect(20,-69,26,7,ink);rect(19,-62,31,25,skin);rect(23,-62,20,6,light);
      rect(42,-54,23,19,ink);rect(45,-51,20,12,light);rect(61,-48,8,9,ink);rect(64,-46,3,3,metal);
      rect(36,-57,14,10,ink);rect(41,-54,7,5,eye);rect(43,-54,3,2,bone);rect(32,-60,13,3,metal);
      rect(43,-39,24,7+jaw,ink);rect(45,-30+jaw,23,8,ink);rect(46,-29+jaw,20,4,skin);
      for(let i=0;i<4;i++){rect(46+i*5,-39,3,5,bone);rect(47+i*5,-31+jaw,3,4,bone);}
      rect(20,-48,5,7,metal);rect(22,-45,3,3,P.cyan);rect(25,-40,6,4,dark);
      for(let i=0;i<2;i++){const px=i?8:-23,off=i?stride:-stride;rect(px,-17,16,14,ink);rect(px+3,-15,9,9,metal);rect(px+6,-13,3,8,chrome);rect(px+off,-6,21,6,ink);for(let n=0;n<3;n++)rect(px+off+3+n*6,-4,3,3,bone);}
      rect(19,-31,12,5,ink);rect(27,-27,5,7,metal);rect(30,-24,5,3,bone);
    }else{
      // Razor raptor: stepped tail, enlarged skull, sickle claws and exposed servo.
      const bob=e.wind>0?2:Math.floor(clock*7)%2,tail=Math.round(Math.sin(clock*6)*2);
      rect(-43,-20+tail,12,4,ink);rect(-34,-24+tail,15,7,ink);rect(-31,-23+tail,11,4,skin);rect(-24,-29,16,12,ink);rect(-22,-27,13,7,skin);
      rect(-18,-32+bob,33,22,ink);rect(-15,-30+bob,28,17,skin);rect(-11,-28+bob,20,10,light);rect(-13,-15,23,3,dark);
      rect(-11,-34+bob,7,9,metal);rect(-2,-36+bob,7,10,ink);rect(0,-34+bob,4,6,chrome);rect(8,-34+bob,5,8,metal);
      rect(8,-36+bob,13,18,ink);rect(11,-34+bob,8,15,skin);
      rect(11,-47+bob,23,19,ink);rect(15,-49+bob,15,4,ink);rect(14,-45+bob,19,13,skin);rect(16,-44+bob,11,4,light);
      rect(28,-39+bob,15,11,ink);rect(30,-38+bob,13,6,light);rect(40,-37+bob,3,2,ink);
      rect(26,-43+bob,9,6,ink);rect(28,-42+bob,4,3,eye);rect(29,-42+bob,1,1,bone);
      rect(30,-29+bob,13,5+jaw,ink);rect(31,-25+bob+jaw,12,4,ink);rect(32,-24+bob+jaw,10,2,skin);
      for(let i=0;i<3;i++){rect(32+i*4,-29+bob,2,3,bone);rect(33+i*4,-26+bob+jaw,2,2,bone);}
      rect(-10,-25,10,9,ink);rect(-8,-23,6,5,metal);rect(-7,-22,4,3,P.cyan);
      rect(12,-24+bob,7,4,ink);rect(16,-22+bob,4,6,metal);rect(18,-18+bob,5,2,bone);
      for(let i=0;i<2;i++){const px=i?5:-12,off=i?stride:-stride;rect(px,-13,9,9,ink);rect(px+2,-12,5,6,metal);rect(px+off,-7,6,6,ink);rect(px+off-1,-3,13,3,ink);rect(px+off+7,-5,3,4,bone);rect(px+off+2,-2,3,2,chrome);}
    }
    if(e.type==='strider'){rect(-16,-35,26,7,ink);rect(-13,-34,20,4,'#b48359');rect(-11,-30,6,16,'#8d6550');rect(-10,-27,4,6,'#96ead8');rect(10,-32,8,6,'#79dacb');rect(16,-33,4,7,ink);rect(17,-32,2,4,P.cyan);}
    g.restore();
    if(e.wind>0||e.phaseWind>0||e.variant&&e.special<.7){const top=e.type==='wirewing'?36:e.type==='boss'?84:62;rect(x-2,y-top,4,7,P.cream);rect(x-2,y-top+9,4,2,P.red);}
    if(e.type==='boss'){rect(x-43,y-78,86,5,ink);rect(x-42,y-77,84*Math.max(0,e.hp)/e.max,3,P.red);}
  }
  function detective(p=player,opacity=1){
    const x=Math.round(p.x-camera),y=Math.round(p.y+riderOffset(p));
    if(opacity===1&&p.inv>0&&p.dash<=0&&Math.floor(time*15)%2===0&&mode!=='menu')return;
    if(art){art.detective(g,p,{x,y,time,pose:detectivePose(p),origin:shoulder(p),weapon:weapon(p),angle:weaponAngle(p),offset:riderOffset(p),opacity});return;}
    const main=g,pose=detectivePose(p),flying=!p.ground,frame=Math.floor(p.step)%6;
    const ink='#101e22',coat='#263f43',light='#526b65',leather='#765342';
    main.save();main.globalAlpha=opacity;main.fillStyle='#172c3148';
    if(p.ground&&!p.riding)main.fillRect(x-16,y-1,32,3);
    g=spriteContext;g.clearRect(0,0,128,128);g.save();g.translate(64,92);
    // Feet have six discrete poses; the silhouette stays crisp at native resolution.
    const feet=[[-8,5],[-12,8],[-14,10],[-8,5],[-3,0],[0,-5]][frame];
    if(p.riding){rect(-12,-14,22,7,ink);rect(5,-11,8,13,ink);rect(7,-10,5,10,'#465d64');rect(6,0,12,4,ink);rect(7,1,8,2,'#889a97');rect(-11,-11,6,8,'#354956');}
    else if(p.melee>.16){
      rect(-9,-14,8,12,ink);rect(-11,-4,12,4,ink);
      rect(0,-17,13,7,ink);rect(9,-17,12,6,light);rect(18,-20,9,10,ink);rect(23,-18,3,7,'#9da797');
    }else if(p.dash>0&&p.dodgeKind==='bend'){
      rect(-12,-13,10,10,ink);rect(-15,-5,15,5,ink);rect(3,-13,9,9,ink);rect(7,-5,12,5,ink);
      rect(-10,-11,5,5,light);rect(5,-11,5,5,light);
    }else if(flying){
      const dive=p.dash>0?7:0;
      rect(-12-dive,-14,9,8,ink);rect(-17-dive,-10,12,5,ink);rect(-14-dive,-11,6,2,light);
      rect(2-dive,-14,9,9,ink);rect(8-dive,-8,9,5,ink);rect(4-dive,-13,5,3,light);
    }else{
      for(let i=0;i<2;i++){const foot=p.moving?feet[i]:i?5:-8;
        rect(i?2:-9,-14,8,9,ink);rect(foot,-8,7,6,ink);rect(foot-1,-4,12,4,ink);
        rect(foot+1,-8,4,3,'#425654');rect(foot,-2,10,1,'#899487');}
    }
    g.save();g.translate(pose.shift,-23+pose.bob);g.rotate(pose.tilt);g.translate(0,23);
    // Short split coat, shirt, brass badge and red neckerchief.
    rect(-13,-30,25,20,ink);rect(-11,-28,21,15,coat);
    const tail=flying||p.moving?-4:0;
    rect(-13+tail,-17,11,11,ink);rect(-11+tail,-16,7,8,coat);rect(4,-15,9,8,ink);rect(5,-14,6,5,light);
    rect(-4,-29,7,15,'#b2b6a0');rect(-7,-29,4,12,light);rect(4,-29,4,10,light);
    rect(-1,-27,3,8,'#374846');rect(-8,-26,3,4,'#ead295');rect(-12,-15,23,4,ink);rect(-1,-15,5,3,'#bb995e');
    rect(-15,-27,7,13,ink);rect(-13,-25,4,8,light);rect(-14,-16,5,4,'#d9ae8e');
    // Broad face and clear eye patch, with just enough pixels for the scar and stubble.
    rect(-12,-46,25,19,ink);rect(-10,-44,21,16,'#b78066');rect(-8,-43,19,11,'#ebba99');
    rect(-13,-38,4,7,'#bd856b');rect(11,-36,4,5,'#dfaa87');rect(-10,-42,3,6,'#483830');
    rect(-7,-38,5,3,'#f4e3b7');rect(-4,-38,2,3,ink);
    rect(-11,-41,19,2,'#744348');rect(2,-41,8,8,ink);rect(3,-40,6,6,'#492d34');rect(3,-40,3,1,'#98635b');
    rect(-8,-32,19,4,'#795746');rect(-5,-33,8,2,'#dfaa87');rect(4,-33,5,1,ink);rect(-8,-29,19,4,'#bf514c');
    rect(5,-25,9,3,'#923a3d');rect(10,-22,5,3,'#bf514c');
    // Pinched cowboy crown, raised brim tips and a pale worn edge.
    rect(-13,-55,25,12,ink);rect(-10,-58,8,4,ink);rect(3,-58,7,4,ink);
    rect(-11,-53,21,8,leather);rect(-9,-55,6,3,'#b88b5d');rect(4,-55,5,3,'#aa7c53');rect(-2,-53,5,2,'#513c34');
    rect(-12,-47,24,4,'#342f2d');rect(-10,-46,20,2,'#b65849');rect(-19,-47,6,5,ink);rect(13,-47,6,5,ink);
    rect(-17,-44,34,5,ink);rect(-15,-44,30,2,'#b38b62');rect(-11,-42,22,1,'#78533d');
    g.restore();
    // One shared shoulder/barrel transform drives both drawing and projectiles.
    const origin=shoulder(p);g.save();g.translate(origin.x,origin.y-riderOffset(p));g.rotate(weaponAngle(p));
    rect(-4,-7,10,12,ink);rect(-2,-6,7,9,'#738b88');rect(-2,-6,5,2,'#e0dfc6');rect(2,-3,5,7,ink);
    rect(4,-2,6,6,'#a5b4a6');rect(5,-1,3,3,'#bf514c');rect(9,-4,8,7,ink);rect(10,-3,6,5,'#657e7a');
    rect(11,-3,5,2,'#d1dbc8');rect(12,0,4,1,'#8fe2c9');rect(16,-4,4,5,'#bdcbb8');
    const w=weapon(p);
    if(w.id==='shotgun'){
      rect(14,-6,13,8,ink);rect(17,-5,9,4,'#a7aca3');rect(23,-6,14,6,ink);rect(24,-5,12,2,'#c0c6b4');rect(24,-1,11,3,'#926944');rect(26,0,2,2,'#d1a574');rect(32,0,2,2,'#d1a574');rect(17,1,4,5,'#755545');
    }else if(w.id==='carbine'){
      rect(14,-7,17,10,ink);rect(17,-6,13,5,'#718e94');rect(28,-5,7,5,ink);rect(29,-4,5,2,'#aec9c5');rect(20,2,6,7,ink);rect(21,3,4,4,'#506d78');rect(18,-9,9,3,ink);rect(20,-8,5,2,'#84e2e8');rect(26,-2,3,2,'#91eaf0');
    }else{rect(17,-7,9,7,ink);rect(18,-6,7,2,'#a9b9a6');rect(22,-4,3,2,'#536b64');rect(18,0,4,6,ink);rect(19,1,2,3,leather);}
    if(p.flash>0){rect(w.tip+1,-5,5,6,'#fff4c2');rect(w.tip+6,-3,6,2,w.color);rect(w.tip+3,-8,2,3,'#fff4c2');rect(w.tip+3,1,2,3,'#fff4c2');}
    g.restore();g.restore();
    // Quantize rotated edges before scaling; no blurred sprite outlines.
    const pixels=g.getImageData(0,0,128,128);for(let i=3;i<pixels.data.length;i+=4)pixels.data[i]=pixels.data[i]>110?255:0;g.putImageData(pixels,0,0);
    g=main;g.translate(x,y);g.scale(p.face,1);g.drawImage(spriteCanvas,-64,-92);g.restore();
  }
  function drawBullet(b){
    const x=b.x-camera,y=b.y,length=Math.hypot(b.vx,b.vy),dx=b.vx/length,dy=b.vy/length;
    if(slowAmount>.1){
      g.save();g.globalAlpha=slowAmount*(b.good?.5:.8);
      // Pixel rings expand behind the round, like a visible pressure wave.
      for(let n=1;n<7;n++){const behind=n*10,cx=x-dx*behind,cy=y-dy*behind,r=2+n*.55;
        g.globalAlpha=slowAmount*(1-n/8)*.8;
        for(let i=0;i<16;i++){const a=i*Math.PI/8,u=Math.cos(a)*r*.48,v=Math.sin(a)*r;rect(cx+dx*u-dy*v,cy+dy*u+dx*v,1,1,'#e0f2c9');}
      }g.restore();
    }else for(let i=1;i<4;i++)rect(x-dx*i*2,y-dy*i*2,1,1,b.good?'#c1ccb0':'#b98672');
    rect(x-2,y-1,4,3,'#2d5149');rect(x-1,y-1,3,2,b.good?(b.color||'#fff1bc'):'#ed8a6b');if(b.kind==='acid'){rect(x-3,y-2,6,5,'#96b764');rect(x-1,y-2,3,2,'#e0f69c');}
  }
  function foreground(){const s=scenes[stage];for(const d of drops){if(d.taken)continue;const x=d.x-camera,y=d.y+Math.sin(time*4+d.x)*2,color=d.type==='heavy'?'#ffd178':d.type==='grenade'?P.coral:d.type==='med'?P.white:P.acid;rect(x-9,y-10,18,18,'#142832');rect(x-9,y-10,18,2,color);rect(x-9,y+6,18,2,color);text(({heavy:'H',grenade:'G',ammo:'A',med:'+'})[d.type],x,y+3,color,8,'center');}
    for(const c of crates)if(c.hp>0){if(art){art.supplies(g,c,camera);continue;}const x=c.x-camera;rect(x-12,c.y-35,24,34,'#84634a');rect(x-10,c.y-33,20,30,'#c29e65');rect(x-8,c.y-30,16,24,'#745344');rect(x-1,c.y-32,3,28,'#d5b47b');}
    for(const r of rescues)if(!r.saved){const x=r.x-camera;rect(x-5,r.y-27,10,8,'#dfb58c');rect(x-6,r.y-19,12,12,'#bfceac');rect(x-7,r.y-7,5,7,'#506a68');rect(x+2,r.y-7,5,7,'#506a68');rect(x-9,r.y-17,18,3,'#7f6151');text('HELP',x,r.y-38,P.cream,7,'center');}
    for(const h of hazards){const x=h.x-camera;if(h.warn){if(Math.floor(time*12)%2)rect(x-20,h.y-2,40,2,P.coral);continue;}rect(x-20,h.y-3,40,3,'#667943');rect(x-15,h.y-4,29,2,'#b5d16f');rect(x-7+Math.sin(time*5)*7,h.y-6,3,2,'#e0eba1');}
    for(const echo of echoes)detective(echo,echo.life*.8);
    for(const e of enemies)enemySprite(e);
    if(mount&&mount.hp>0)enemySprite(mount);
    for(const b of bullets)drawBullet(b);
    for(const b of grenades){rect(b.x-camera-4,b.y-4,8,8,'#b8cb7e');rect(b.x-camera-2,b.y-7,4,3,'#fff3ad');}
    for(const blast of explosions){if(art){art.explosion(g,blast,camera);continue;}const radius=(1-blast.life/.5)*70+8;g.save();g.globalAlpha=Math.min(1,blast.life*3);for(let i=0;i<16;i++){const a=i*Math.PI/8;rect(blast.x-camera+Math.cos(a)*radius-5,blast.y+Math.sin(a)*radius-5,10,10,i%2?'#fff1ae':'#f7874d');}rect(blast.x-camera-12,blast.y-12,24,24,'#fff2bb');g.restore();}
    detective();for(const v of particles){g.save();g.globalAlpha=Math.min(1,v.life*6);rect(v.x-camera,v.y,v.size||2,v.size||2,v.c);g.restore();}
    let target=null,label='';const file=nearbyFile();if(file){target=file;label='[E] READ FILE';}
    else if(s.terminal&&!unlocked&&Math.abs(player.x-s.terminal.x)<34&&Math.abs(player.y-s.terminal.y)<45){target=s.terminal;label='[E] TERMINAL';}
    else if(Math.abs(player.x-s.exit.x)<40&&Math.abs(player.y-s.exit.y)<48){target=s.exit;label=unlocked?(arcade()?'GO >':'[E] CONTINUE'):'DEFEAT THE BOSS';}
    else if(!player.riding&&nearMount()){target={x:mount.x,y:mount.y-4};label='[G] RIDE R-09';}
    if(target){const width=label.length*6+12,bx=clamp(target.x-camera-width/2,5,W-width-5);rect(target.x-camera-2,target.y-47,5,5,P.acid);rect(bx,target.y-64,width,13,'#102534');text(label,bx+6,target.y-55,P.cream,8);}
  }
  function hud(){
    rect(0,0,W,43,'#132631');rect(0,41,W,3,'#6a9d96');
    rect(10,5,31,31,'#071620');rect(12,7,27,27,'#224a57');
    rect(16,28,21,6,'#1c394b');rect(20,25,13,4,P.coral);rect(34,26,4,7,'#8fa7aa');
    rect(19,16,16,10,'#d6ab88');rect(20,20,14,6,'#e8c19b');
    rect(21,19,3,2,P.white);rect(29,18,5,5,'#29343c');rect(30,19,3,3,'#a14750');
    rect(17,17,12,2,'#74454a');rect(19,10,17,7,'#594536');rect(22,8,12,3,'#82634b');
    rect(17,14,19,2,P.coral);rect(13,16,26,3,'#10202b');rect(16,17,20,1,'#b18b68');
    rect(49,8,118,8,'#663f43');rect(49,8,118*player.hp/5,8,player.hp<=2?P.red:'#f8c751');rect(49,8,118*player.hp/5,2,P.cream);
    text('ELIAS VANE',49,31,P.cream,14);text('INSTINCT',182,12,P.cream,7);rect(182,18,88,9,'#325057');rect(182,18,88*player.focus/100,9,P.acid);
    const heavy=player.heavy>0&&player.weapon===2; text(heavy?'HEAVY MG':(player.weapon+1)+' '+weapon(player).name,288,12,heavy?'#ffd178':weapon(player).color,7);text(heavy?Math.ceil(player.heavy)+' SEC':arcade()&&player.weapon===0?'INF':String(player.ammo).padStart(2,'0')+' / '+String(player.reserve).padStart(2,'0'),286,29,P.white,13);
    rect(390,16,7,3,'#37675f');rect(395,12,14,10,'#26464d');rect(398,9,13,10,'#4b8d79');
    rect(407,7,8,8,'#26464d');rect(409,8,9,7,'#6ba18c');rect(414,13,7,3,'#93b49a');rect(416,10,2,2,P.red);
    rect(415,16,2,3,P.white);rect(403,21,3,4,'#26464d');rect(395,21,3,4,'#26464d');
    text('× '+String(enemies.filter(e=>e.hp>0).length).padStart(2,'0'),430,26,P.white,12);
    rect(0,H-23,W,23,'#0e222e');rect(0,H-23,W,2,'#477b7d');
    const objective=unlocked?'REACH THE EXIT / '+scenes[stage].exitLabel:scenes[stage].objective;
    text(noticeTime>0?notice.toUpperCase().slice(0,62):objective,9,H-8,noticeTime>0?P.cream:'#a2c7c0',8);
    text(`0${stage+1}/08`,W-10,H-8,P.acid,8,'right');
    rect(8,48,52,12,'#102636d9');text(rules().name,13,57,P.cream,7);
    rect(65,48,119,12,'#102636d9');text('SCORE '+String(score).padStart(6,'0'),71,57,P.cream,7);rect(359,48,113,12,'#102636d9');text('GRENADES '+player.grenades+' [K]',365,57,P.coral,7);
    if(combo>1&&comboTime>0){text('COMBO X'+combo,12,76,P.acid,8);rect(12,80,56*comboTime/4,2,P.acid);}
    const boss=enemies.find(e=>e.type==='boss'&&e.hp>0&&Math.abs(e.x-player.x)<360);if(boss){rect(98,68,284,23,'#16232be8');text(scenes[stage].bossName||'CROWN REX',240,78,P.coral,7,'center');rect(106,82,268,4,'#4c3842');rect(106,82,268*boss.hp/boss.max,4,P.coral);}
    if(unlocked&&mode==='play'&&banner<=0&&Math.floor(time*2)%2)text('GO >',450,115,P.acid,12,'right');
    if(player.reload>0)text('RELOADING',W/2,58,P.cream,8,'center');
    if(slowAmount>.1){rect(0,43,W,4,'#172d28');rect(0,H-27,W,4,'#172d28');rect(W/2-57,49,114,14,'#243f35');text('BULLET TIME / 20%',W/2,59,'#d5e8b9',8,'center');}
    if(player.riding&&mount){rect(326,306,146,27,'#102636e8');text('R-09 / G TO DISMOUNT',332,317,'#a8e3d9',7);for(let i=0;i<6;i++){rect(332+i*22,322,18,5,'#36505c');rect(332+i*22,322,18*clamp(mount.hp-i,0,1),5,'#81dbca');}}
    const rideButton=document.querySelector('[data-action="ride"]'),dodgeButton=document.querySelector('[data-action="dodge"]'),meleeButton=document.querySelector('[data-action="melee"]');
    if(rideButton&&rideButton.textContent!==(player.riding?'DISMOUNT':'RIDE')){rideButton.textContent=player.riding?'DISMOUNT':'RIDE';dodgeButton.textContent=player.riding?'CHARGE':'DODGE';meleeButton.textContent=player.riding?'BITE':'MELEE';}
    if(banner>0){const s=scenes[stage];rect(42,76,396,72,'#0c172be8');rect(42,76,396,2,stage===1?'#d8b282':P.cyan);text(s.location,W/2,93,P.cyan,8,'center');text(s.name,W/2,116,P.cream,15,'center');text(s.quote,W/2,137,'#b5c3ca',8,'center');}
  }
  function draw(){g.save();if(shake)g.translate(Math.round(rand(-shake,shake)),Math.round(rand(-shake,shake)));scenery();foreground();hud();g.restore();}
  let previous=0;function loop(t){const dt=Math.min(.04,(t-previous)/1000||0);previous=t;update(dt);syncMusic();draw();requestAnimationFrame(loop);}
  scenes.forEach((s,i)=>{const option=document.createElement('option');option.value=String(i);option.textContent=String(i+1).padStart(2,'0')+' — '+s.name;chapterSelect.appendChild(option);});
  chapterSelect.value='0';loadProgress();loadAudio();refreshContinue();
  difficultySelect.addEventListener('change',difficultyMenu);
  styleSelect.addEventListener('change',()=>{document.getElementById('style-hint').textContent=styleSelect.value==='arcade'?'Unlimited pistol ammo, quick reloads, open terminals. Hold fire to keep shooting.':'Limited ammo, hidden access codes and lethal falls. Every chapter has a checkpoint.';});
  chapterSelect.addEventListener('change',()=>{const s=scenes[Number(chapterSelect.value)];document.getElementById('overlay-text').textContent=s.briefing||s.quote;});
  document.getElementById('continue').addEventListener('click',()=>{if(savedRun){checkpoint=savedRun;begin(true);}});
  document.getElementById('pause-button').addEventListener('click',pauseGame);
  document.getElementById('resume').addEventListener('click',pauseGame);
  document.getElementById('back-menu').addEventListener('click',newCaseMenu);
  document.getElementById('sound-button').addEventListener('click',()=>{soundOn=!soundOn;saveAudio();if(soundOn)initAudio();});
  document.getElementById('music-button').addEventListener('click',()=>{musicOn=!musicOn;saveAudio();if(musicOn)initAudio();syncMusic();});
  document.getElementById('fullscreen-button').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.querySelector('.machine').requestFullscreen();}catch{note('FULLSCREEN IS NOT AVAILABLE',2);}});
  for(const b of document.querySelectorAll('[data-chapter]'))b.addEventListener('click',()=>{newCaseMenu();chapterSelect.value=b.dataset.chapter;document.getElementById('overlay-text').textContent=scenes[Number(b.dataset.chapter)].briefing;document.querySelector('.machine').scrollIntoView({behavior:'smooth',block:'start'});startButton.focus({preventScroll:true});});
  document.getElementById('new-case').addEventListener('click',newCaseMenu);
  difficultyMenu();
  startButton.addEventListener('click',()=>begin(mode==='dead'&&!!checkpoint));
  const grid=document.querySelector('.num-grid');for(const n of [1,2,3,4]){const b=document.createElement('button');b.textContent=n;b.type='button';b.addEventListener('click',()=>digit(String(n)));grid.appendChild(b);}
  document.getElementById('cancel-puzzle').addEventListener('click',()=>{mode='play';resetInput();puzzle.classList.add('hidden');canvas.focus({preventScroll:true});});
  document.getElementById('close-dossier').addEventListener('click',closeDossier);
  const prevent=new Set(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight']);
  document.addEventListener('keydown',e=>{if(['SELECT','INPUT','TEXTAREA'].includes(e.target.tagName))return;if(mode==='dossier'){if(!e.repeat&&['Escape','Enter','KeyE'].includes(e.code)){e.preventDefault();closeDossier();}return;}if(mode==='puzzle'){if(e.code==='Escape'){mode='play';resetInput();puzzle.classList.add('hidden');}else if(e.key>='1'&&e.key<='4'&&!e.repeat)digit(e.key);return;}if((e.code==='Escape'||e.code==='KeyP')&&!e.repeat&&(mode==='play'||mode==='pause')){e.preventDefault();pauseGame();return;}if(mode!=='play')return;if(prevent.has(e.code))e.preventDefault();keys.add(e.code);if(!e.repeat){if(['Digit1','Digit2','Digit3'].includes(e.code))switchWeapon(Number(e.code.slice(-1))-1);else if(e.code==='KeyC')switchWeapon();else if(e.code==='KeyG')toggleMount();}});
  document.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{resetInput();if(mode==='play')pauseGame();music?.stop();});document.addEventListener('visibilitychange',()=>{if(document.hidden){resetInput();if(mode==='play')pauseGame();music?.stop();}});
  canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=canvas.getBoundingClientRect();aim={x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};});
  canvas.addEventListener('pointerleave',()=>{aim=null;mouseFire=false;});canvas.addEventListener('pointerdown',e=>{if(mode==='play'&&e.button===0&&e.pointerType!=='touch'){e.preventDefault();canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);mouseFire=true;shoot();}});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>mouseFire=false);
  const joystick=document.getElementById('joystick'),stick=document.getElementById('stick');let stickId=null;
  function moveStick(e){const r=joystick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,length=Math.max(1,Math.hypot(dx,dy)),cap=Math.min(length,r.width*.32),x=dx/length*cap,y=dy/length*cap;stick.style.transform=`translate(${x}px,${y}px)`;const value=x/(r.width*.32);touch.x=Math.abs(value)>.18?value:0;touch.y=y/(r.width*.32);}
  joystick.addEventListener('pointerdown',e=>{e.preventDefault();stickId=e.pointerId;joystick.setPointerCapture(e.pointerId);moveStick(e);});joystick.addEventListener('pointermove',e=>{if(stickId===e.pointerId)moveStick(e);});
  const reset=e=>{if(stickId!==e.pointerId)return;stickId=null;touch.x=0;touch.y=0;stick.style.transform='';};joystick.addEventListener('pointerup',reset);joystick.addEventListener('pointercancel',reset);joystick.addEventListener('lostpointercapture',reset);
  for(const b of document.querySelectorAll('[data-action]')){const action=b.dataset.action;
    b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);if(mode!=='play')return;if(action==='shoot')touch.shoot=true;else if(action==='slow')touch.slow=true;else if(action==='jump'){touch.jump=true;player.jumpBuffer=.14;}else if(action==='grenade')throwGrenade();else if(action==='dodge')dodge();else if(action==='melee')melee();else if(action==='interact')interact();else if(action==='reload')reload();else if(action==='weapon')switchWeapon();else if(action==='ride')toggleMount();});
    for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>{if(action==='shoot')touch.shoot=false;if(action==='slow')touch.slow=false;if(action==='jump')touch.jump=false;});
  }
  player=freshPlayer();player.x=425;player.y=192;player.ground=false;enemies=scenes[0].enemies.map((e,i)=>makeEnemy(e,i,scenes[0]));mount=makeMount(scenes[0]);drops=scenes[0].pickups.map(d=>({...d,y:floorAt(d.x,scenes[0])-13,taken:false}));draw();requestAnimationFrame(loop);
})();
