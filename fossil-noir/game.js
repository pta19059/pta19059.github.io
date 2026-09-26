/* Fossil Noir — dependency-free, original browser game. */
(() => {
  'use strict';
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d', { alpha: false });
  const overlay = document.getElementById('overlay');
  const puzzle = document.getElementById('puzzle');
  const startButton = document.getElementById('start');
  const status = document.getElementById('status');
  const W = 480, H = 270;
  ctx.imageSmoothingEnabled = false;
  const C = { bg:'#0c111b', floor:'#18212a', wall:'#33404b', edge:'#62757d', acid:'#b2f148', cyan:'#62decf', red:'#ff6170', yellow:'#ffc877', white:'#e4eee5', mute:'#8a9ca2' };
  const stages = [
    {name:'01 / PIOGGIA SU VESPER', subtitle:'Trova il codice. Apri l’accesso Axiom.', code:'241', clue:'Sul registro della scena: la sequenza è 2 · 4 · 1.', terminal:{x:408,y:165}, note:{x:77,y:205}, exit:{x:458,y:132}, walls:[{x:166,y:72,w:20,h:88},{x:268,y:162,w:66,h:18},{x:315,y:57,w:50,h:16}], spawns:[{type:'raptor',x:255,y:80},{type:'raptor',x:360,y:197},{type:'turret',x:391,y:67}], pickups:[{x:151,y:221,type:'ammo'}]},
    {name:'02 / STANZA SICURA', subtitle:'Le pareti sono spesse. Per ora.', safe:true, exit:{x:455,y:134}, walls:[{x:170,y:55,w:17,h:93},{x:280,y:164,w:67,h:18}], spawns:[],pickups:[]},
    {name:'03 / LABORATORIO 09', subtitle:'Sblocca l’ascensore verso la frattura.', code:'314', clue:'Protocollo di contenimento sul terminale: 3 · 1 · 4.', terminal:{x:402,y:91},note:{x:77,y:205},exit:{x:456,y:134},walls:[{x:136,y:70,w:19,h:72},{x:248,y:54,w:18,h:89},{x:263,y:191,w:70,h:16}],spawns:[{type:'raptor',x:206,y:72},{type:'raptor',x:336,y:177},{type:'turret',x:368,y:63},{type:'brute',x:222,y:214}],pickups:[{x:182,y:211,type:'ammo'},{x:314,y:78,type:'med'}]},
    {name:'04 / NUCLEO DELLA FRATTURA', subtitle:'Distruggi l’arma. Chiudi il caso.', exit:{x:452,y:135},walls:[{x:160,y:65,w:22,h:55},{x:171,y:196,w:66,h:14},{x:355,y:69,w:19,h:54}],spawns:[{type:'boss',x:312,y:131},{type:'raptor',x:370,y:207}],pickups:[{x:86,y:206,type:'ammo'},{x:121,y:65,type:'med'}]}
  ];
  const rain = Array.from({length:80},(_,i)=>({x:(i*79)%W,y:(i*137)%H,s:16+(i*13)%34}));
  const keys = new Set(), held = new Set();
  const touch = {x:0,y:0,shoot:false,slow:false};
  let mode='menu', scene=0, player, enemies=[], bullets=[], sparks=[], pickups=[], doorOpen=false, checkpoint=null;
  let aim=null, time=0, shake=0, banner=0, message='', messageTime=0, code='', frame=0;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const random=(a,b)=>a+Math.random()*(b-a);
  const rectHit=(x,y,r,box)=>x+r>box.x&&x-r<box.x+box.w&&y+r>box.y&&y-r<box.y+box.h;
  const typeData={raptor:{hp:3,speed:42,r:10,damage:1},brute:{hp:8,speed:25,r:14,damage:2},turret:{hp:4,speed:0,r:10,damage:1},boss:{hp:32,speed:20,r:22,damage:2}};
  function say(text,seconds=2.8){message=text;messageTime=seconds;}
  function pointBurst(x,y,color,count=9){for(let i=0;i<count;i++)sparks.push({x,y,vx:random(-90,90),vy:random(-95,60),life:random(.25,.6),color});}
  function setupScene(index,fromCheckpoint=false){
    scene=index; const s=stages[scene];
    if(!fromCheckpoint){player.x=30;player.y=135;player.iframe=1;}
    enemies=s.spawns.map((e,i)=>({...e,...typeData[e.type],max:typeData[e.type].hp,attack:random(.2,1.2),shoot:random(.7,1.5),phase:i*1.6,flash:0}));
    pickups=s.pickups.map(p=>({...p,taken:false}));bullets=[];sparks=[];doorOpen=!!s.safe;banner=3.2;
    status.textContent='SIGNAL: '+s.name;
    if(s.safe){
      player.hp=Math.min(5,player.hp+2);player.reserve=Math.min(60,player.reserve+8);player.focus=100;
      checkpoint={scene:1,hp:player.hp,ammo:player.ammo,reserve:player.reserve};
      say('CHECKPOINT // medicazioni e 8 proiettili recuperati',4);
    } else say(s.subtitle,3.5);
  }
  function begin(fromSave=false){
    player={x:32,y:135,r:7,hp:5,ammo:12,reserve:28,focus:100,dirX:1,dirY:0,iframe:0,dodge:0,dx:0,dy:0,shoot:0,reload:0,melee:0,wallRun:0};
    if(fromSave&&checkpoint){player.hp=checkpoint.hp;player.ammo=checkpoint.ammo;player.reserve=checkpoint.reserve;setupScene(1,true);player.x=33;player.y=135;doorOpen=true;banner=3;say('CHECKPOINT RIPRISTINATO',3);}else {checkpoint=null;setupScene(0);}
    mode='play';overlay.classList.add('hidden');puzzle.classList.add('hidden');
    startButton.blur();
  }
  function end(won){mode=won?'win':'dead';overlay.classList.remove('hidden');
    document.getElementById('overlay-title').innerHTML=won?'IL FUTURO<br>HA UN DOMANI.':'L’INDAGINE<br>NON FINISCE QUI.';
    document.getElementById('overlay-text').textContent=won?'La frattura si richiude. Le prove contro Axiom sopravvivono. Elias esce nella pioggia, con una nuova ragione per tornare.':'Vesper ha ancora bisogno di un detective. Riprendi dal tuo ultimo rifugio.';
    startButton.innerHTML=won?'GIOCA ANCORA <span>↗</span>':checkpoint?'RIPRENDI DAL CHECKPOINT <span>↗</span>':'RIPROVA <span>↗</span>';
    document.getElementById('overlay-foot').textContent=won?'CASO 001 // COMPLETATO':'CASO 001 // ARCHIVIO SOSPESO';
  }
  function move(o,dx,dy,r){
    const walls=stages[scene].walls;
    o.x=clamp(o.x+dx,10+r,W-9-r);
    for(const box of walls)if(rectHit(o.x,o.y,r,box))o.x=dx>0?box.x-r:box.x+box.w+r;
    o.y=clamp(o.y+dy,29+r,H-23-r);
    for(const box of walls)if(rectHit(o.x,o.y,r,box))o.y=dy>0?box.y-r:box.y+box.h+r;
  }
  function press(code){return keys.has(code);}
  function nearest(max=230){let pick=null,best=max;for(const e of enemies)if(e.hp>0){let d=dist(player,e);if(d<best){best=d;pick=e;}}return pick;}
  function shoot(){if(player.shoot>0||player.reload>0||player.dodge>.12)return;
    if(player.ammo<=0){reload();if(player.reserve===0)say('CARICATORE VUOTO // usa il corpo a corpo');return;}
    player.ammo--;player.shoot=.22;
    let x=player.dirX,y=player.dirY;
    if(aim){x=aim.x-player.x;y=aim.y-player.y;}else{const target=nearest();if(target){x=target.x-player.x;y=target.y-player.y;}}
    const len=Math.hypot(x,y)||1;x/=len;y/=len;player.dirX=x;player.dirY=y;
    bullets.push({x:player.x+x*10,y:player.y+y*10,vx:x*230,vy:y*230,life:1.4,friendly:true,r:2});
    pointBurst(player.x+x*11,player.y+y*11,C.yellow,3);shake=1.5;
  }
  function reload(){if(player.reload>0||player.ammo===12||player.reserve===0)return;player.reload=1.1;say('RICARICA...',1);}
  function dodge(){if(player.dodge>0||player.focus<14)return;
    const mx=(press('KeyD')||press('ArrowRight')?1:0)-(press('KeyA')||press('ArrowLeft')?1:0)+touch.x;
    const my=(press('KeyS')||press('ArrowDown')?1:0)-(press('KeyW')||press('ArrowUp')?1:0)+touch.y;
    const len=Math.hypot(mx,my)||1;player.dx=(mx||player.dirX)/len;player.dy=(my||player.dirY)/len;
    player.dodge=.38;player.iframe=Math.max(player.iframe,.34);player.focus-=14;
    const nearWall=stages[scene].walls.find(b=>rectHit(player.x,player.y,17,b));
    player.wallRun=nearWall ? .38 : 0;
    if(nearWall){
      // Redirect the dodge along nearby cover: a short, invulnerable wall run.
      if(nearWall.h>nearWall.w){player.dx=0;player.dy=Math.sign(my||player.dirY||1);}
      else{player.dx=Math.sign(mx||player.dirX||1);player.dy=0;}
    }
    pointBurst(player.x,player.y,nearWall?C.cyan:C.acid,7);
  }
  function melee(){if(player.melee>0)return;player.melee=.5;let hit=false;
    for(const e of enemies){if(e.hp<=0||dist(player,e)>27+e.r)continue;
      const dot=((e.x-player.x)*player.dirX+(e.y-player.y)*player.dirY)/(dist(player,e)||1);
      if(dot<-.4)continue;damageEnemy(e,1);e.x+=player.dirX*12;e.y+=player.dirY*12;hit=true;
    }if(hit){player.focus=clamp(player.focus+13,0,100);say('IMPATTO // istinto recuperato',1);}
    pointBurst(player.x+player.dirX*15,player.y+player.dirY*15,C.cyan,5);
  }
  function damageEnemy(e,n){e.hp-=n;e.flash=.15;pointBurst(e.x,e.y,C.red,6);if(e.hp<=0){player.focus=clamp(player.focus+11,0,100);shake=e.type==='boss'?6:2;if(e.type==='boss'){doorOpen=true;say('L’ARMA È CADUTA // raggiungi la frattura',5);}else if(Math.random()<.25)pickups.push({x:e.x,y:e.y,type:'ammo',taken:false});}}
  function hurt(n){if(player.iframe>0)return;player.hp=Math.max(0,player.hp-n);player.iframe=1;shake=5;pointBurst(player.x,player.y,C.red,14);say('FERITA // cerca una via di fuga',2);if(player.hp===0)end(false);}
  function interact(){const s=stages[scene];if(s.note&&dist(player,s.note)<36){say('REGISTRO: '+s.clue,6);return;}
    if(s.terminal&&dist(player,s.terminal)<38&&!doorOpen){mode='puzzle';puzzle.classList.remove('hidden');document.getElementById('puzzle-clue').textContent=s.clue;code='';updateCode();return;}
    if(dist(player,s.exit)<35){if(scene===3){if(doorOpen)end(true);else say('IL CUSTODE È ANCORA ATTIVO',2);}else if(doorOpen)setupScene(scene+1);else say('PORTA BLOCCATA // trova il terminale',2);return;}
    say('NESSUNA INTERAZIONE QUI',1.4);
  }
  function updateCode(){document.getElementById('code-display').textContent=(code+'___').slice(0,3).split('').join(' ');}
  function digit(d){if(mode!=='puzzle')return;code+=d;updateCode();if(code.length===3){if(code===stages[scene].code){doorOpen=true;mode='play';puzzle.classList.add('hidden');say('ACCESSO AUTORIZZATO // raggiungi la porta',4);pointBurst(stages[scene].terminal.x,stages[scene].terminal.y,C.acid,22);}else{say('CODICE ERRATO',2);setTimeout(()=>{code='';updateCode();},420);}}}
  function tick(dt){time+=dt;frame++;
    if(mode!=='play')return;
    banner=Math.max(0,banner-dt);messageTime=Math.max(0,messageTime-dt);shake=Math.max(0,shake-dt*18);
    const p=player;
    p.iframe=Math.max(0,p.iframe-dt);p.shoot=Math.max(0,p.shoot-dt);p.melee=Math.max(0,p.melee-dt);p.wallRun=Math.max(0,p.wallRun-dt);
    if(p.reload>0){p.reload-=dt;if(p.reload<=0){const n=Math.min(12-p.ammo,p.reserve);p.ammo+=n;p.reserve-=n;p.reload=0;}}
    if(press('ShiftLeft')||press('ShiftRight')){if(!held.has('SHIFT_HELD')){dodge();held.add('SHIFT_HELD');}}else held.delete('SHIFT_HELD');
    if(press('KeyF')){if(!held.has('F_HELD')){melee();held.add('F_HELD');}}else held.delete('F_HELD');
    if(press('KeyE')){if(!held.has('E_HELD')){interact();held.add('E_HELD');}}else held.delete('E_HELD');
    if(press('KeyR'))reload();
    const slow=(press('KeyQ')||touch.slow)&&p.focus>0;
    p.focus=clamp(p.focus+(slow?-33:3)*dt,0,100);
    const rate=slow?.23:1;
    if(p.dodge>0){p.dodge=Math.max(0,p.dodge-dt);move(p,p.dx*180*dt,p.dy*180*dt,p.r);if(Math.random()<.5)pointBurst(p.x,p.y,p.wallRun?C.cyan:C.acid,1);}
    else{
      let mx=(press('KeyD')||press('ArrowRight')?1:0)-(press('KeyA')||press('ArrowLeft')?1:0)+touch.x;
      let my=(press('KeyS')||press('ArrowDown')?1:0)-(press('KeyW')||press('ArrowUp')?1:0)+touch.y;
      const d=Math.hypot(mx,my);if(d){mx/=d;my/=d;p.dirX=mx;p.dirY=my;move(p,mx*73*dt,my*73*dt,p.r);}
    }
    if(press('Space')||touch.shoot)shoot();
    for(const item of pickups){if(item.taken||dist(p,item)>15)continue;item.taken=true;if(item.type==='ammo'){p.reserve=Math.min(60,p.reserve+7);say('MUNIZIONI +7',2);}else {p.hp=Math.min(5,p.hp+2);say('MEDICAZIONI +2',2);}pointBurst(item.x,item.y,C.acid,9);}
    for(const e of enemies){if(e.hp<=0)continue;e.flash=Math.max(0,e.flash-dt);const d=dist(e,p);
      if(e.type==='turret'){
        e.shoot-=dt*rate;if(e.shoot<=0&&d<255){const a=Math.atan2(p.y-e.y,p.x-e.x);bullets.push({x:e.x,y:e.y,vx:Math.cos(a)*80,vy:Math.sin(a)*80,life:3,friendly:false,r:3});e.shoot=2.2;pointBurst(e.x,e.y,C.red,3);}
      }else{
        e.attack-=dt*rate;e.phase+=dt*rate;
        if(d>e.r+p.r+3){let vx=(p.x-e.x)/(d||1),vy=(p.y-e.y)/(d||1);move(e,vx*e.speed*rate*dt,vy*e.speed*rate*dt,e.r);}
        if(d<e.r+p.r+7&&e.attack<=0){hurt(e.damage);e.attack=e.type==='boss'?1.15:.85;}
        if(e.type==='boss'){e.shoot-=dt*rate;if(e.shoot<=0&&d<230){const a=Math.atan2(p.y-e.y,p.x-e.x);for(let i=-1;i<=1;i++)bullets.push({x:e.x,y:e.y,vx:Math.cos(a+i*.25)*92,vy:Math.sin(a+i*.25)*92,life:2.8,friendly:false,r:3});e.shoot=2.5;}}
      }
    }
    for(const b of bullets){if(b.life<=0)continue;const step=b.friendly?1:rate;b.x+=b.vx*dt*step;b.y+=b.vy*dt*step;b.life-=dt*step;
      if(b.x<8||b.x>W-8||b.y<28||b.y>H-21||stages[scene].walls.some(w=>rectHit(b.x,b.y,b.r,w))){b.life=0;pointBurst(b.x,b.y,C.edge,3);continue;}
      if(b.friendly){for(const e of enemies){if(e.hp>0&&dist(b,e)<e.r+b.r){damageEnemy(e,1);b.life=0;break;}}}
      else if(dist(b,p)<p.r+b.r){if(p.iframe>0&&dist(b,p)<10)p.focus=clamp(p.focus+3,0,100);else hurt(1);b.life=0;}
    }
    bullets=bullets.filter(b=>b.life>0);
    for(const v of sparks){v.x+=v.vx*dt;v.y+=v.vy*dt;v.life-=dt;}sparks=sparks.filter(v=>v.life>0);
  }
  function box(x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(x|0,y|0,w|0,h|0);}
  function label(t,x,y,color=C.white,size=7,align='left'){ctx.fillStyle=color;ctx.textAlign=align;ctx.font=`bold ${size}px monospace`;ctx.fillText(t,x|0,y|0);ctx.textAlign='left';}
  function backdrop(){
    const s=stages[scene];box(0,0,W,H,C.bg);
    if(scene===0){
      for(let i=0;i<21;i++){const x=i*26-5,hei=23+(i*31)%42;box(x,28-hei,24,hei,'#1c2631');box(x+4,7,3,4,i%3===0?'#a2d578':'#37515b');box(x+12,14,2,5,'#557980');}
      box(0,29,W,217,'#18222c');
      for(let i=0;i<9;i++){box(i*68+(i%2)*20,36,26,17,i%3===0?'#1d393c':'#29353e');box(i*68+4,40,18,2,i%3===0?'#59b89b':'#687982');}
      box(0,155,W,3,'#38454d');box(0,226,W,3,'#35434a');
      for(let i=0;i<12;i++)box(i*48+7,195+(i%2)*6,26,1,'#53636a');
      box(14,45,96,34,'#242e39');box(17,48,90,25,'#143c37');label('V E S P E R',22,66,C.acid,10);
      for(const r of rain){const y=(r.y+time*r.s)%245+24;box(r.x,y,1,5,'#88b2b266');}
    }else if(scene===1){
      box(0,28,W,220,'#202933');for(let x=10;x<W;x+=32)for(let y=33;y<240;y+=32){box(x,y,29,29,'#263139');box(x+2,y+2,25,25,'#2b373d');}
      box(59,55,65,32,'#3a4747');box(62,58,59,25,'#274543');label('SAFE',72,75,C.acid,11);
      box(218,96,42,30,'#353c40');box(220,99,38,6,'#a4bba5');box(221,113,35,9,'#596a62');
    }else{
      box(0,28,W,220,scene===2?'#1b2830':'#172329');
      for(let x=9;x<W;x+=32){box(x,31,1,212,'#34414a');for(let y=35;y<245;y+=29)box(x+1,y,30,1,'#34414a');}
      if(scene===2){for(let i=0;i<4;i++){box(i*115+14,34,55,13,'#314148');box(i*115+18,36,47,6,'#244f48');}box(32,120,43,49,'#293c43');box(36,125,35,40,'#25535a');label('AX-09',37,148,C.cyan,7);}
      else{const cx=306,cy=137;for(let i=7;i>=1;i--){ctx.strokeStyle=i%2?'#277779':'#384d54';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(cx,cy,i*19,i*11,0,0,Math.PI*2);ctx.stroke();}
        box(cx-18,cy-35,36,71,'#0a1920');box(cx-9,cy-25,18,50,Math.sin(time*3)>0?'#65e6ca':'#4c9d9b');}
    }
    for(const wall of s.walls){box(wall.x+2,wall.y+4,wall.w,wall.h,'#090d15');box(wall.x,wall.y,wall.w,wall.h,C.wall);box(wall.x+2,wall.y+2,wall.w-4,3,C.edge);box(wall.x+2,wall.y+8,2,wall.h-11,'#455860');if(wall.w>30)for(let x=wall.x+8;x<wall.x+wall.w-5;x+=19)box(x,wall.y+5,5,3,'#7ca993');}
    if(s.note){box(s.note.x-6,s.note.y-5,13,10,'#cec69b');box(s.note.x-3,s.note.y-2,8,1,'#735a54');box(s.note.x-3,s.note.y+1,6,1,'#735a54');}
    if(s.terminal){box(s.terminal.x-11,s.terminal.y-12,22,24,'#0e161e');box(s.terminal.x-8,s.terminal.y-9,16,11,doorOpen?C.acid:C.red);box(s.terminal.x-6,s.terminal.y+6,12,2,'#768c87');}
    const door=s.exit;box(door.x-11,door.y-25,24,52,'#0b161b');box(door.x-6,door.y-21,17,43,doorOpen?'#216451':'#5b2e38');box(door.x-5,door.y-17,3,35,doorOpen?C.acid:C.red);
    if(scene===3&&doorOpen){label('USCITA',425,94,C.acid,7);}
  }
  function drawEnemy(e){if(e.hp<=0)return;const x=e.x|0,y=e.y|0;const skin=e.flash>0?'#fff9e5':e.type==='boss'?'#638f80':e.type==='brute'?'#789384':e.type==='turret'?'#80908c':'#6d9d89';
    box(x-e.r,y+e.r-2,e.r*2,4,'#0b1119');
    if(e.type==='turret'){box(x-10,y-8,20,18,'#475963');box(x-6,y-5,12,10,skin);box(x-2,y-12,5,10,C.red);box(x-8,y+11,16,3,'#7b8b83');}
    else if(e.type==='boss'){box(x-23,y-10,41,24,skin);box(x+12,y-15,18,15,skin);box(x+24,y-6,8,8,'#91ac9d');box(x+21,y-12,4,3,C.red);box(x-17,y+11,8,13,'#425650');box(x+4,y+11,9,15,'#425650');box(x-35,y-7,15,8,'#556e63');box(x-30,y-16,4,13,C.cyan);box(x-9,y-20,4,12,'#809e87');box(x+2,y-22,4,12,'#809e87');}
    else{const large=e.type==='brute',scale=large?2:1;box(x-9*scale,y-5*scale,18*scale,10*scale,skin);box(x+5*scale,y-8*scale,9*scale,8*scale,skin);box(x+11*scale,y-5*scale,3*scale,2*scale,C.red);box(x-15*scale,y-3*scale,8*scale,3*scale,'#3d655f');box(x-7*scale,y+5*scale,3*scale,6*scale,'#465c5b');box(x+3*scale,y+5*scale,3*scale,6*scale,'#465c5b');box(x-3*scale,y-7*scale,3*scale,3*scale,C.cyan);}
    if(e.type==='boss'){box(x-21,y-29,42,3,'#26333b');box(x-21,y-29,42*(e.hp/e.max),3,C.red);}
  }
  function drawPlayer(){const p=player,x=p.x|0,y=p.y|0;if(p.iframe>0&&Math.floor(time*14)%2===0)return;box(x-7,y+6,15,3,'#090e15');box(x-5,y-4,11,11,p.dodge>0?C.cyan:'#253b43');box(x-5,y-10,10,7,'#252e37');box(x-6,y-11,12,3,'#0b121b');box(x-2,y-6,5,2,'#e0c5a4');box(x+2,y-5,3,1,C.acid);box(x-5,y+6,4,5,'#1b292e');box(x+2,y+6,4,5,'#1b292e');box(x+Math.round(p.dirX*8),y+Math.round(p.dirY*8)-2,7,3,'#768b8a');if(p.melee>.31){ctx.strokeStyle=C.cyan;ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,19,-1.1,1.3);ctx.stroke();}}
  function hud(){box(0,0,W,27,'#091118');box(0,247,W,23,'#091118');box(9,8,7,7,C.red);label('VITA',21,14,C.mute,7);for(let i=0;i<5;i++)box(46+i*10,8,8,7,i<player.hp?C.red:'#45333a');
    label('ISTINTO',112,14,C.mute,7);box(158,8,80,7,'#263a3a');box(158,8,80*(player.focus/100),7,C.acid);
    label('9MM',267,14,C.mute,7);label(String(player.ammo).padStart(2,'0')+' / '+String(player.reserve).padStart(2,'0'),293,15,C.white,10);
    label('AXIOM // '+(scene+1)+'/4',393,14,C.cyan,7);
    if(player.reload>0)label('RICARICA',W/2,39,C.yellow,8,'center');
    const s=stages[scene];let prompt='';if(s.note&&dist(player,s.note)<35)prompt='[E] LEGGI REGISTRO';else if(s.terminal&&!doorOpen&&dist(player,s.terminal)<38)prompt='[E] TERMINALE';else if(dist(player,s.exit)<35)prompt='[E] '+(scene===3?'CHIUDI IL CASO':'ENTRA');
    if(prompt)label(prompt,W/2,234,C.acid,9,'center');
    if(messageTime>0)label(message.toUpperCase().slice(0,63),10,261,C.white,7);else label('ELIAS VANE  //  VESPER NON DORME',10,261,C.mute,7);
    label('FOSSIL NOIR',468,261,C.acid,7,'right');
    if(banner>0){box(0,97,W,42,'#071118df');label(s.name,W/2,116,C.acid,13,'center');label(s.subtitle.toUpperCase(),W/2,129,C.white,7,'center');}
    if((keys.has('KeyQ')||touch.slow)&&player.focus>0){box(0,27,W,2,C.acid);box(0,245,W,2,C.acid);}
  }
  function render(){ctx.save();if(shake>0)ctx.translate(Math.round(random(-shake,shake)),Math.round(random(-shake,shake)));backdrop();
    if(mode!=='menu'){
      for(const item of pickups){if(item.taken)continue;box(item.x-5,item.y-5,11,11,item.type==='ammo'?'#3b6345':'#674850');box(item.x-2,item.y-3,5,6,item.type==='ammo'?C.acid:C.red);if(item.type==='med'){box(item.x-4,item.y,9,2,C.white);box(item.x-1,item.y-3,2,9,C.white);}}
      for(const e of enemies)drawEnemy(e);for(const b of bullets){box(b.x-2,b.y-2,4,4,b.friendly?C.yellow:C.red);box(b.x-b.vx*.025,b.y-b.vy*.025,2,2,b.friendly?C.yellow:C.red);}
      drawPlayer();for(const v of sparks)box(v.x,v.y,2,2,v.color);hud();
    }else{box(0,0,W,27,'#091118');label('AXIOM SECURITY FEED // SIGNAL 09',12,16,C.acid,8);label('VESPER // 2091',10,261,C.mute,8);}
    ctx.restore();
  }
  let previous=0;function loop(t){const dt=Math.min(.045,(t-previous)/1000||0);previous=t;tick(dt);render();requestAnimationFrame(loop);}
  startButton.addEventListener('click',()=>begin(mode==='dead'&&!!checkpoint));
  const numGrid=document.querySelector('.num-grid');for(const n of [1,2,3,4]){const b=document.createElement('button');b.textContent=n;b.type='button';b.addEventListener('click',()=>digit(String(n)));numGrid.appendChild(b);}
  document.getElementById('cancel-puzzle').addEventListener('click',()=>{mode='play';puzzle.classList.add('hidden');});
  const gameKeys=new Set(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight']);
  document.addEventListener('keydown',e=>{if(gameKeys.has(e.code))e.preventDefault();if(mode==='puzzle'){if(e.code==='Escape'){mode='play';puzzle.classList.add('hidden');}else if(e.key>='1'&&e.key<='4')digit(e.key);return;}keys.add(e.code);});
  document.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();held.clear();touch.shoot=false;touch.slow=false;});
  canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=canvas.getBoundingClientRect();aim={x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};});
  canvas.addEventListener('pointerleave',()=>aim=null);canvas.addEventListener('pointerdown',e=>{if(mode==='play'){e.preventDefault();shoot();}});
  const joystick=document.getElementById('joystick'),stick=document.getElementById('stick');let stickId=null;
  function moveStick(e){const r=joystick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,length=Math.max(1,Math.hypot(dx,dy)),cap=Math.min(length,r.width*.32),x=dx/length*cap,y=dy/length*cap;stick.style.transform=`translate(${x}px,${y}px)`;touch.x=x/(r.width*.32);touch.y=y/(r.height*.32);}
  joystick.addEventListener('pointerdown',e=>{e.preventDefault();stickId=e.pointerId;joystick.setPointerCapture(e.pointerId);moveStick(e);});joystick.addEventListener('pointermove',e=>{if(stickId===e.pointerId)moveStick(e);});
  const resetStick=e=>{if(stickId!==e.pointerId)return;stickId=null;touch.x=touch.y=0;stick.style.transform='';};joystick.addEventListener('pointerup',resetStick);joystick.addEventListener('pointercancel',resetStick);
  for(const b of document.querySelectorAll('[data-action]')){const action=b.dataset.action;
    b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);if(mode!=='play')return;if(action==='shoot')touch.shoot=true;else if(action==='slow')touch.slow=true;else if(action==='dodge')dodge();else if(action==='melee')melee();else if(action==='interact')interact();else if(action==='reload')reload();});
    for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>{if(action==='shoot')touch.shoot=false;if(action==='slow')touch.slow=false;});
  }
  render();requestAnimationFrame(loop);
})();
