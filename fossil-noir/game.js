/* Fossil Noir — original side-scrolling pixel-art game, no dependencies. */
(() => {
  'use strict';
  const canvas=document.getElementById('game');
  let g=canvas.getContext('2d',{alpha:false});
  const spriteCanvas=document.createElement('canvas');spriteCanvas.width=128;spriteCanvas.height=128;
  const spriteContext=spriteCanvas.getContext('2d',{willReadFrequently:true});
  const overlay=document.getElementById('overlay'),puzzle=document.getElementById('puzzle');
  const startButton=document.getElementById('start'),status=document.getElementById('status');
  const W=480,H=360;
  g.imageSmoothingEnabled=false;
  const P={ink:'#101d2a',black:'#10121c',cream:'#ffefb3',acid:'#d1ec63',coral:'#ec605b',red:'#ed454e',cyan:'#83ebdc',white:'#f7f6dc',shadow:'#226174'};
  const scenes=[
    {name:'RAIN OVER VESPER',note:'The witness left the access code: 2 · 4 · 1.',code:'241',width:1410,roofs:[{x:0,w:290,y:263},{x:330,w:220,y:240},{x:590,w:270,y:265},{x:900,w:240,y:245},{x:1180,w:230,y:257}],enemies:[{x:424,type:'raptor'},{x:690,type:'raptor'},{x:1040,type:'turret'}],pickups:[{x:236,type:'ammo'},{x:749,type:'med'}],clue:{x:994,y:245},terminal:{x:1218,y:257},exit:{x:1360,y:257}},
    {name:'SAFEHOUSE 09',safe:true,width:740,roofs:[{x:0,w:740,y:273}],enemies:[],pickups:[],exit:{x:693,y:273}},
    {name:'AXIOM RESEARCH WING',note:'Containment protocol: 3 · 1 · 4.',code:'314',width:1430,roofs:[{x:0,w:245,y:265},{x:285,w:265,y:240},{x:590,w:280,y:263},{x:910,w:235,y:243},{x:1185,w:245,y:262}],enemies:[{x:385,type:'raptor'},{x:665,type:'raptor'},{x:786,type:'turret'},{x:1041,type:'brute'}],pickups:[{x:205,type:'ammo'},{x:735,type:'med'},{x:1081,type:'ammo'}],clue:{x:1012,y:243},terminal:{x:1220,y:262},exit:{x:1380,y:262}},
    {name:'THE FRACTURE',width:1080,roofs:[{x:0,w:1080,y:268}],enemies:[{x:752,type:'boss'},{x:460,type:'raptor'}],pickups:[{x:224,type:'ammo'},{x:530,type:'med'}],exit:{x:1021,y:268}}
  ];
  const stats={raptor:{hp:3,speed:34,r:19,hit:1},brute:{hp:7,speed:18,r:26,hit:2},turret:{hp:4,speed:0,r:17,hit:1},boss:{hp:25,speed:18,r:43,hit:2}};
  const keys=new Set(),edge=new Set(),touch={x:0,shoot:false,slow:false};
  let mode='menu',stage=0,player,enemies=[],bullets=[],drops=[],particles=[],unlocked=false,checkpoint=null,camera=0,aim=null;
  let time=0,shake=0,banner=0,notice='',noticeTime=0,enteredCode='',slowAmount=0,echoes=[],echoClock=0;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const rand=(a,b)=>a+Math.random()*(b-a);
  const hash=n=>{let x=Math.sin(n*127.1+34.22)*43758.5453;return x-Math.floor(x);};
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
  function burst(x,y,c,n=8){for(let i=0;i<n;i++)particles.push({x,y,vx:rand(-95,95),vy:rand(-130,20),life:rand(.2,.6),c});}
  function freshPlayer(){return{x:65,y:263,vx:0,vy:0,face:1,aimAngle:0,ground:true,moving:false,step:0,hp:5,ammo:12,reserve:28,focus:100,inv:0,fire:0,reload:0,melee:0,dash:0,dashDir:1,dodgeKind:'dive',dodgeCooldown:0,land:0,wall:0,wallRun:0};}
  function roofAt(x,scene=scenes[stage]){return scene.roofs.find(r=>x>=r.x+3&&x<=r.x+r.w-3);}
  function floorAt(x,scene=scenes[stage]){const r=roofAt(x,scene);return r?r.y:null;}
  function setup(index,restore=false){
    stage=index;const s=scenes[index];camera=0;unlocked=!!s.safe;bullets=[];particles=[];echoes=[];slowAmount=0;
    player.dash=0;player.dodgeCooldown=0;player.wall=0;player.wallRun=0;player.vx=0;player.land=0;
    if(!restore){player.x=65;player.y=s.roofs[0].y;player.vy=0;player.ground=true;player.inv=.7;}
    enemies=s.enemies.map((e,i)=>({...e,y:floorAt(e.x,s),...stats[e.type],max:stats[e.type].hp,dir:i%2?1:-1,shoot:rand(.8,1.7),attack:.6,flash:0,anim:i,wind:0,lunge:0}));
    drops=s.pickups.map(p=>({...p,y:floorAt(p.x,s)-13,taken:false}));banner=2.4;
    status.textContent=`SECTOR 0${index+1} / ${s.name}`;
    if(s.safe&&!restore){player.hp=Math.min(5,player.hp+2);player.reserve=Math.min(60,player.reserve+8);player.focus=100;checkpoint={hp:player.hp,ammo:player.ammo,reserve:player.reserve};note('SAFEHOUSE // CHECKPOINT REACHED',4);}
    else note(s.safe?'CHECKPOINT RESTORED':index===3?'THE BREACH IS STILL OPEN':'FIND THE AXIOM ACCESS TERMINAL',3.4);
  }
  function begin(fromSave=false){player=freshPlayer();if(fromSave&&checkpoint){player.hp=checkpoint.hp;player.ammo=checkpoint.ammo;player.reserve=checkpoint.reserve;setup(1,true);unlocked=true;}else{checkpoint=null;setup(0);}
    mode='play';overlay.classList.add('hidden');puzzle.classList.add('hidden');startButton.blur();}
  function finish(won){mode=won?'win':'dead';overlay.classList.remove('hidden');
    document.getElementById('overlay-title').innerHTML=won?'THE FUTURE<br>IS YOURS.':'CASE FILE<br>INTERRUPTED.';
    document.getElementById('overlay-text').textContent=won?'The breach is sealed. Axiom cannot hide the evidence. Elias steps out into the rain, alive.':'Vesper still needs a detective. Try again from your last safehouse.';
    startButton.innerHTML=won?'PLAY AGAIN <span>↗</span>':checkpoint?'RESUME FROM SAFEHOUSE <span>↗</span>':'TRY AGAIN <span>↗</span>';
    document.getElementById('overlay-foot').textContent=won?'CASE 001 / CLOSED':'CASE 001 / STILL OPEN';
  }
  function jump(){if(mode!=='play')return;
    if(player.ground){player.vy=-247;player.ground=false;burst(player.x,player.y,P.cream,5);return;}
    if(player.wall){player.vy=-238;player.x+=player.wall*15;player.face=player.wall;player.wall=0;player.wallRun=0;burst(player.x,player.y,P.cyan,10);}
  }
  function moveInput(){return clamp((keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+touch.x,-1,1);}
  function dodge(){
    if(mode!=='play'||player.dash>0||player.dodgeCooldown>0||player.focus<15)return;
    const p=player,direction=moveInput();p.focus-=15;p.dodgeKind=p.ground&&Math.abs(direction)<.2?'bend':'dive';
    p.dash=p.dodgeKind==='bend'?.62:.48;p.dodgeCooldown=.85;p.dashDir=Math.abs(direction)>.2?Math.sign(direction):p.face;
    p.inv=Math.max(p.inv,p.dash);p.wallRun=0;
    if(p.dodgeKind==='dive'){p.vy=-100;p.ground=false;burst(p.x,p.y-3,P.cream,5);}
  }
  function reload(){if(mode!=='play'||player.reload>0||player.ammo===12||player.reserve<=0)return;player.reload=1;note('RELOADING',1);}
  function nearest(){let pick=null,best=275;for(const e of enemies){if(e.hp<=0)continue;const dx=e.x-player.x,dy=e.y-player.y;if(Math.abs(dy)<80&&Math.hypot(dx,dy)<best){pick=e;best=Math.hypot(dx,dy);}}return pick;}
  function aimTarget(){if(aim)return{x:aim.x+camera,y:aim.y};const e=nearest();return e?{x:e.x,y:e.y-(e.type==='boss'?32:29)}:null;}
  function detectivePose(p){
    let tilt=p.moving?.07:0,bob=p.moving?([0,-1,-2,-1,0,0][Math.floor(p.step)%6]):Math.floor(time*2)%2;
    if(!p.ground){tilt=p.vy<0?-.12:.15;bob=0;}
    if(p.wallRun>0)tilt=-.3;
    if(p.dash>0){
      const duration=p.dodgeKind==='bend'?.62:.48,phase=1-p.dash/duration;
      const envelope=Math.min(1,phase/.18,(1-phase)/.22);
      tilt=(p.dodgeKind==='bend'?-1.12:1.18*p.dashDir*p.face)*Math.max(0,envelope);bob=0;
    }
    if(p.melee>.16){tilt=-.2;bob=0;}
    return{tilt,bob:bob+(p.land>0?2:0)};
  }
  function shoulder(p){
    const pose=detectivePose(p),a=pose.tilt;
    return{x:8*Math.cos(a)+16*Math.sin(a),y:-11+8*Math.sin(a)-16*Math.cos(a)+pose.bob};
  }
  function sight(p,target){
    if(!target)return{face:p.face,angle:0};
    const face=target.x>=p.x?1:-1,origin=shoulder({...p,face});
    const dx=(target.x-p.x)*face-origin.x,dy=target.y-p.y-origin.y;
    // The bore is two pixels above the shoulder axis. Account for that offset.
    const angle=clamp(Math.atan2(dy,Math.max(8,dx))+Math.asin(clamp(2/Math.max(8,Math.hypot(dx,dy)),-1,1)),-1.15,1.15);
    return{face,angle};
  }
  function muzzle(p){
    const a=p.aimAngle,origin=shoulder(p);
    // Shared with the drawn arm: pivot at shoulder, barrel ends at (25,-2).
    return{x:p.x+p.face*(origin.x+25*Math.cos(a)+2*Math.sin(a)),y:p.y+origin.y+25*Math.sin(a)-2*Math.cos(a)};
  }
  function shoot(){if(mode!=='play'||player.fire>0||player.reload>0)return;
    if(player.ammo===0){reload();if(player.reserve===0)note('NO AMMO // USE MELEE',2);return;}
    const {face,angle}=sight(player,aimTarget());player.face=face;player.aimAngle=angle;
    const tip=muzzle(player),dx=face*Math.cos(angle),dy=Math.sin(angle);
    player.ammo--;player.fire=.23;
    bullets.push({x:tip.x+dx*2,y:tip.y+dy*2,vx:dx*298,vy:dy*298,life:2,good:true});
    burst(tip.x,tip.y,P.cream,5);shake=1.3;
  }
  function hitEnemy(e,n){if(e.hp<=0)return;e.hp-=n;e.flash=.14;burst(e.x,e.y-14,P.red,8);
    if(e.hp<=0){player.focus=clamp(player.focus+12,0,100);shake=e.type==='boss'?5:2;if(e.type==='boss'){unlocked=true;note('THE WEAPON IS DOWN // REACH THE GATE',5);}else if(Math.random()<.22)drops.push({x:e.x,y:e.y-13,type:'ammo',taken:false});}
  }
  function bulletHitsEnemy(b,e){
    const bounds=e.type==='boss'?{left:-76,right:70,top:-69}:e.type==='brute'?{left:-51,right:51,top:-54}:e.type==='turret'?{left:-19,right:27,top:-38}:{left:-43,right:43,top:-49};
    const left=e.dir<0?-bounds.right:bounds.left,right=e.dir<0?-bounds.left:bounds.right;
    return b.x>=e.x+left-2&&b.x<=e.x+right+2&&b.y>=e.y+bounds.top-2&&b.y<=e.y+4;
  }
  function melee(){if(mode!=='play'||player.melee>0)return;player.melee=.44;let landed=false;
    for(const e of enemies){if(e.hp>0&&Math.abs(e.x-player.x)<e.r+24&&Math.abs(e.y-player.y)<39&&(e.x-player.x)*player.face>-8){hitEnemy(e,1);e.x+=player.face*11;landed=true;}}
    if(landed)player.focus=clamp(player.focus+10,0,100);burst(player.x+player.face*19,player.y-17,P.cyan,6);
  }
  function hurt(n){if(player.inv>0||mode!=='play')return;player.hp=Math.max(0,player.hp-n);player.inv=1.1;shake=5;burst(player.x,player.y-18,P.red,14);note('HIT // FIND COVER',1.8);if(player.hp===0)finish(false);}
  function interact(){if(mode!=='play')return;const s=scenes[stage];
    if(s.clue&&Math.abs(player.x-s.clue.x)<31&&Math.abs(player.y-s.clue.y)<45){note('CASE NOTE: '+s.note,6);return;}
    if(s.terminal&&!unlocked&&Math.abs(player.x-s.terminal.x)<34&&Math.abs(player.y-s.terminal.y)<45){mode='puzzle';puzzle.classList.remove('hidden');document.getElementById('puzzle-clue').textContent=s.note;enteredCode='';showCode();return;}
    if(Math.abs(player.x-s.exit.x)<40&&Math.abs(player.y-s.exit.y)<48){if(stage===3){if(unlocked)finish(true);else note('THE BIO-WEAPON STILL LIVES',2);}else if(unlocked)setup(stage+1);else note('LOCKED // FIND THE ACCESS TERMINAL',2);return;}
    note('NOTHING TO USE HERE',1.3);
  }
  function showCode(){document.getElementById('code-display').textContent=(enteredCode+'___').slice(0,3).split('').join(' ');}
  function digit(d){if(mode!=='puzzle')return;enteredCode+=d;showCode();if(enteredCode.length===3){if(enteredCode===scenes[stage].code){unlocked=true;mode='play';puzzle.classList.add('hidden');note('ACCESS GRANTED // REACH THE GATE',4);burst(scenes[stage].terminal.x,scenes[stage].terminal.y-28,P.acid,22);}else{note('ACCESS DENIED',2);setTimeout(()=>{enteredCode='';showCode();},400);}}}
  function update(dt){time+=dt*(1-slowAmount*.75);shake=Math.max(0,shake-dt*17);if(mode!=='play')return;
    const s=scenes[stage],p=player;
    banner=Math.max(0,banner-dt);noticeTime=Math.max(0,noticeTime-dt);p.inv=Math.max(0,p.inv-dt);p.fire=Math.max(0,p.fire-dt);p.melee=Math.max(0,p.melee-dt);p.wallRun=Math.max(0,p.wallRun-dt);p.land=Math.max(0,p.land-dt);p.dodgeCooldown=Math.max(0,p.dodgeCooldown-dt);
    if(p.reload>0){p.reload-=dt;if(p.reload<=0){const n=Math.min(12-p.ammo,p.reserve);p.ammo+=n;p.reserve-=n;p.reload=0;}}
    const k=id=>keys.has(id);
    const direction=moveInput();
    if(Math.abs(direction)>.2&&p.dash<=0)p.face=direction>0?1:-1;
    p.moving=Math.abs(direction)>.2&&p.ground&&p.dash<=0;p.step+=Math.abs(p.vx)*dt*.1;
    if(p.fire<=0.14){const line=sight(p,aimTarget());if(aim)p.face=line.face;p.aimAngle=line.angle;}
    const jumping=k('KeyW')||k('ArrowUp')||k('Space');if(jumping&&!edge.has('JUMP')){jump();edge.add('JUMP');}if(!jumping)edge.delete('JUMP');
    const dashing=k('ShiftLeft')||k('ShiftRight');if(dashing&&!edge.has('DASH')){dodge();edge.add('DASH');}if(!dashing)edge.delete('DASH');
    if(k('KeyF')&&!edge.has('MELEE')){melee();edge.add('MELEE');}if(!k('KeyF'))edge.delete('MELEE');
    if(k('KeyE')&&!edge.has('USE')){interact();edge.add('USE');}if(!k('KeyE'))edge.delete('USE');
    if(k('KeyR'))reload();if(k('KeyJ')||touch.shoot)shoot();
    const slow=(k('KeyQ')||touch.slow)&&p.focus>0;
    slowAmount=clamp(slowAmount+(slow?dt*7:-dt*5),0,1);
    p.focus=clamp(p.focus+(slow?-27:5)*dt,0,100);const speed=1-slowAmount*.8;
    const oldY=p.y,wasGround=p.ground;
    if(p.dash>0){
      p.dash=Math.max(0,p.dash-dt);p.vx=p.dodgeKind==='bend'?0:p.dashDir*228;p.x+=p.vx*dt;
      if(p.dodgeKind==='dive')p.vy=Math.min(p.vy,42);
    }else{const desired=direction*119;p.vx+=(desired-p.vx)*Math.min(1,dt*(p.ground?20:10));p.x+=p.vx*dt;}
    p.x=clamp(p.x,12,s.width-10);
    p.vy+=535*dt;p.y+=p.vy*dt;p.ground=false;
    if(p.vy>=0){for(const roof of s.roofs){if(p.x>=roof.x+4&&p.x<=roof.x+roof.w-4&&oldY<=roof.y+4&&p.y>=roof.y){if(!wasGround&&p.vy>90){p.land=.12;burst(p.x,roof.y-2,'#b4c4a3',4);}p.y=roof.y;p.vy=0;p.ground=true;p.wall=0;break;}}}
    if(!p.ground){
      p.wall=0;
      for(const roof of s.roofs){if(p.y>roof.y+9&&p.y<roof.y+90){if(Math.abs(p.x-roof.x)<10&&direction>0){p.x=roof.x-8;p.wall=-1;}if(Math.abs(p.x-(roof.x+roof.w))<10&&direction<0){p.x=roof.x+roof.w+8;p.wall=1;}}}
      if(p.wall){p.wallRun=.14;p.vy=Math.min(p.vy,35);}
    }
    if(p.y>H+60){p.hp=0;finish(false);return;}
    const cameraTarget=clamp(p.x-W*.38,0,Math.max(0,s.width-W));camera+=(cameraTarget-camera)*Math.min(1,dt*7);
    echoClock-=dt;if(p.dash>0&&echoClock<=0){echoes.push({...p,life:.24});echoClock=.065;}
    for(const echo of echoes)echo.life-=dt;echoes=echoes.filter(e=>e.life>0);
    for(const item of drops){if(item.taken)continue;if(Math.abs(p.x-item.x)<17&&Math.abs(p.y-17-item.y)<25){item.taken=true;if(item.type==='ammo'){p.reserve=Math.min(60,p.reserve+7);note('7 ROUNDS RECOVERED',2);}else{p.hp=Math.min(5,p.hp+2);note('MED-KIT // +2 HEALTH',2);}burst(item.x,item.y,P.acid,9);}}
    for(const e of enemies){if(e.hp<=0)continue;e.flash=Math.max(0,e.flash-dt);e.attack-=dt*speed;e.shoot-=dt*speed;e.anim+=dt*speed;
      const distance=Math.abs(e.x-p.x),vertical=Math.abs(e.y-p.y);
      if(e.type==='turret'||e.type==='boss'){
        e.dir=Math.sign(p.x-e.x)||e.dir;
        if(e.shoot<=0&&distance<295&&vertical<100){
          const mouth={x:e.x+e.dir*(e.type==='boss'?67:26),y:e.y-(e.type==='boss'?42:26)};
          const a=Math.atan2(p.y-25-mouth.y,p.x-mouth.x),spread=e.type==='boss'?[-.2,0,.2]:[0];
          for(const off of spread)bullets.push({x:mouth.x,y:mouth.y,vx:Math.cos(a+off)*104,vy:Math.sin(a+off)*104,life:3,good:false});
          e.shoot=e.type==='boss'?2.3:1.9;burst(mouth.x,mouth.y,P.coral,3);
        }
      }
      if(e.type!=='turret'){
        if(e.wind>0){e.wind-=dt*speed;if(e.wind<=0){e.lunge=.2;e.attack=1.05;}}
        else if(e.lunge>0){e.lunge-=dt*speed;const next=e.x+e.dir*(e.type==='boss'?70:130)*speed*dt,floor=floorAt(next);if(floor!==null&&Math.abs(floor-e.y)<6)e.x=next;
          if(Math.abs(e.x-p.x)<e.r+13&&vertical<33)hurt(e.hit);
        }else{
          if(distance<e.r+37&&vertical<42&&e.attack<=0){e.wind=.3;e.dir=Math.sign(p.x-e.x)||e.dir;}
          else if(distance<225&&vertical<65){const sign=Math.sign(p.x-e.x)||1,step=sign*e.speed*speed*dt,floor=floorAt(e.x+step*2);if(floor!==null&&Math.abs(floor-e.y)<6)e.x+=step;e.dir=sign;}
        }
      }
    }
    for(const b of bullets){if(b.life<=0)continue;const rate=b.good?1:speed;b.x+=b.vx*dt*rate;b.y+=b.vy*dt*rate;b.life-=dt*rate;
      if(b.x<0||b.x>s.width||b.y<37||b.y>H){b.life=0;continue;}
      if(b.good){for(const e of enemies){if(e.hp>0&&bulletHitsEnemy(b,e)){hitEnemy(e,1);b.life=0;break;}}}
      else if(Math.abs(b.x-p.x)<12&&Math.abs(b.y-(p.y-25))<25){
        if(p.dash>0){if(!b.evaded){b.evaded=true;p.focus=clamp(p.focus+4,0,100);note('CLOSE CALL // +4 INSTINCT',1.2);}}
        else{if(p.inv<=0)hurt(1);b.life=0;}
      }
    }
    bullets=bullets.filter(b=>b.life>0);
    for(const v of particles){v.x+=v.vx*dt;v.y+=v.vy*dt;v.life-=dt;}particles=particles.filter(v=>v.life>0);
  }
  function sky(){
    const lab=stage===2,rift=stage===3,safe=stage===1;
    const colors=rift?['#284d50','#51817a','#6e9c87']:lab?['#608b84','#8db5a3','#a7c7a7']:safe?['#658e85','#8eafa0','#b2c4a6']:['#a5e6cc','#b7ead0','#c4e8cb'];
    rect(0,0,W,H,colors[0]);rect(0,126,W,88,colors[1]);rect(0,214,W,123,colors[2]);
    // Distant silhouettes stay quiet so faces, guns and attack poses read immediately.
    for(let layer=0;layer<3;layer++){
      const par=[.1,.2,.34][layer],base=[255,273,305][layer],tints=rift?['#49766e','#3e6a63','#31564f']:lab?['#83ad9c','#719988','#567e71']:['#94cbb5','#80b5a1','#669b89'];
      const offset=camera*par,step=[53,76,101][layer];
      for(let i=Math.floor(offset/step)-1;i<Math.ceil((offset+W)/step)+1;i++){
        const bx=Math.round(i*step-offset),hei=30+Math.floor(hash(i*3+layer*41)*76),bw=step-7;
        rect(bx,base-hei,bw,H-base+hei,tints[layer]);rect(bx+9,base-hei-5,bw-18,6,tints[layer]);
        if(i%3===0)rect(bx+18,base-hei-16,2,13,tints[layer]);
        for(let wy=base-hei+9;wy<base-5;wy+=13)for(let wx=bx+6;wx<bx+bw-4;wx+=11)if(hash(i*31+wx+wy)>.45)rect(wx,wy,4,2,layer===2?'#8cbaa4':'#b7ddbd');
      }
    }
    if(stage===0){
      // An original Axiom retrieval VTOL, hovering well behind the playable rooftop.
      const sx=Math.round(293-camera*.29+Math.sin(time*.35)*9),sy=Math.round(143+Math.sin(time*.6)*2);
      g.save();g.translate(sx,sy);const edge='#467b70',hull='#568e80',lit='#6ca48f';
      rect(-95,-6,49,11,edge);rect(-103,-17,9,23,edge);rect(-100,-15,11,7,hull);rect(-80,-1,41,4,lit);
      rect(-52,-24,97,44,edge);rect(-59,-17,13,30,edge);rect(43,-16,16,28,edge);rect(58,-7,7,15,edge);
      rect(-49,-21,91,38,hull);rect(-46,-19,58,3,lit);rect(-51,7,96,8,hull);rect(-33,14,56,7,edge);
      rect(15,-19,20,22,edge);rect(37,-14,15,17,edge);rect(18,-16,13,15,'#385f5a');rect(38,-11,10,13,'#385f5a');
      rect(-34,-13,29,29,edge);rect(-32,-11,24,23,hull);rect(-29,-9,18,12,lit);rect(-12,4,3,2,edge);
      rect(-39,-30,76,8,edge);rect(-14,-40,6,12,edge);rect(-19,-42,17,4,lit);
      const rotor=Math.floor(time*24)%2;rect(-79+rotor*12,-41,138-rotor*24,2,edge);rect(-69+rotor*20,-38,118-rotor*40,1,lit);
      rect(-25,21,4,7,edge);rect(30,19,4,9,edge);rect(-37,27,84,3,edge);rect(45,24,7,4,edge);
      rect(-20,-2,3,3,'#afd0a4');text('AX',0,11,'#aac2a0',7);g.restore();
    }
    if(rift){const cx=360-camera*.08;for(let i=6;i>0;i--){g.strokeStyle=i%2?'#99d8b4':'#518c79';g.lineWidth=2;g.beginPath();g.ellipse(cx,137,i*11,i*16,0,0,Math.PI*2);g.stroke();}rect(cx-6,88,12,97,'#92d9b3');rect(cx-2,101,4,65,'#dcf4bd');}
  }
  function brickRoof(r,i){const x=r.x-camera;if(x>W+10||x+r.w<-10)return;
    const lab=stage===2,interior=stage===1,core=stage===3;
    const base=lab?'#5b7268':interior?'#597c70':core?'#42685d':'#71917b',light=lab?'#95ad90':interior?'#9cb59a':core?'#88ab8b':'#a8bc94',dark=lab?'#344d48':interior?'#3b5d51':core?'#2c4d47':'#4c6d59';
    rect(x,r.y,r.w,H-r.y,dark);rect(x+2,r.y+9,r.w-4,H-r.y-9,base);
    for(let row=0;row<Math.ceil((H-r.y)/9);row++){
      let y=r.y+9+row*9,off=row%2?8:0;for(let c=-1;c<Math.ceil(r.w/18);c++){
        let px=x+c*18+off;if(px<x+3||px>x+r.w-6)continue;rect(px,y,15,6,(c+row)%5===0?light:base);rect(px+1,y+5,3,1,dark);
      }
    }
    for(let wx=x+27;wx<x+r.w-18;wx+=52){rect(wx,r.y+52,18,29,'#422f35');rect(wx+3,r.y+54,12,23,'#263b48');rect(wx+9,r.y+54,2,23,dark);rect(wx-2,r.y+78,23,3,light);}
    rect(x-2,r.y-4,r.w+4,6,'#233e36');rect(x,r.y-7,r.w,3,light);rect(x+4,r.y-1,r.w-8,3,dark);rect(x+2,r.y+2,r.w-4,8,'#739a7f');
    for(let px=x+13;px<x+r.w-12;px+=20){rect(px,r.y+9,9,2,light);rect(px+2,r.y+14,4,1,dark);}
    if(!interior&&i%2===0){
      const vx=x+r.w-65;rect(vx,r.y-41,39,33,'#435b4d');rect(vx+2,r.y-39,35,29,'#7f9577');rect(vx-2,r.y-43,43,4,'#b1bf96');
      rect(vx+6,r.y-34,25,14,'#4f6756');for(let n=0;n<4;n++)rect(vx+8,r.y-32+n*3,21,1,'#a0ac83');
      rect(vx+5,r.y-15,27,2,'#506e5b');rect(vx+32,r.y-18,2,3,'#bd6a53');
    }else if(!interior){rect(x+r.w-42,r.y-27,23,20,'#4c6958');rect(x+r.w-40,r.y-26,19,18,'#8aa382');rect(x+r.w-35,r.y-39,10,13,'#5c7c66');rect(x+r.w-38,r.y-41,16,3,'#b2be91');}
  }
  function scenery(){const s=scenes[stage];sky();
    for(let i=0;i<s.roofs.length;i++)brickRoof(s.roofs[i],i);
    if(stage===1){rect(80-camera,230,56,43,'#435b67');rect(84-camera,235,48,20,'#365149');text('SAFE',90-camera,251,P.acid,9);rect(344-camera,238,35,35,'#45636a');rect(352-camera,244,21,24,'#a9c9bb');}
    if(stage===2){rect(370-camera,182,47,58,'#253d48');rect(375-camera,190,37,30,'#3b8c8d');text('AX',384-camera,208,P.acid,11);}
    if(s.clue){const x=s.clue.x-camera,y=s.clue.y;rect(x-7,y-26,15,18,'#4b4544');rect(x-5,y-24,11,13,'#f5d99d');rect(x-3,y-21,7,1,'#825d4b');rect(x-3,y-17,7,1,'#825d4b');}
    if(s.terminal){const x=s.terminal.x-camera,y=s.terminal.y;rect(x-10,y-37,20,30,'#1a2d38');rect(x-7,y-34,14,14,unlocked?P.acid:P.red);rect(x-5,y-15,10,3,'#a8cbc6');}
    const gate=s.exit,x=gate.x-camera,y=gate.y;rect(x-17,y-63,37,67,'#223a48');rect(x-12,y-57,27,54,unlocked?'#2a807b':'#693e4a');rect(x-9,y-52,4,44,unlocked?P.acid:P.red);rect(x+1,y-52,9,3,'#173743');
    if(stage===3&&!unlocked){rect(x-3,y-54,6,39,P.red);}
    if(stage!==1)for(let i=0;i<56;i++){const px=(i*83-camera*.43)%560,py=(i*71+time*(38+i%5*13))%340;if(px>=0&&px<W)rect(px,py,1,5,stage===0?'#e3f8db69':'#c9e9cf66');}
  }
  function enemySprite(e){
    if(e.hp<=0)return;
    const x=Math.round(e.x-camera),y=Math.round(e.y),clock=e.anim||0,flash=e.flash>0;
    if(x<-110||x>W+110)return;
    rect(x-e.r,y-1,e.r*2,3,'#182f324c');
    g.save();g.translate(x,y);g.scale(e.dir<0?-1:1,1);
    const ink='#102328',dark='#31504e',metal='#526c68',chrome='#bad0b5',bone='#efe8bc';
    const skin=flash?P.white:'#68988a',light=flash?P.white:'#a2c4a0',eye=e.wind>0?'#fff0a8':'#ef6256';
    const stride=[0,2,4,1,-2,-3][Math.floor(clock*10)%6],jaw=e.wind>0?4:e.lunge>0?7:Math.floor(clock*3)%2;
    if(e.type==='turret'){
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
    g.restore();
    if(e.wind>0){rect(x-2,y-(e.type==='boss'?84:62),4,7,P.cream);rect(x-2,y-(e.type==='boss'?75:53),4,2,P.red);}
    if(e.type==='boss'){rect(x-43,y-78,86,5,ink);rect(x-42,y-77,84*Math.max(0,e.hp)/e.max,3,P.red);}
  }
  function detective(p=player,opacity=1){
    const x=Math.round(p.x-camera),y=Math.round(p.y);
    if(opacity===1&&p.inv>0&&p.dash<=0&&Math.floor(time*15)%2===0&&mode!=='menu')return;
    const main=g,pose=detectivePose(p),flying=!p.ground,frame=Math.floor(p.step)%6;
    const ink='#101e22',coat='#263f43',light='#526b65',leather='#765342';
    main.save();main.globalAlpha=opacity;main.fillStyle='#172c3148';
    if(p.ground)main.fillRect(x-16,y-1,32,3);
    g=spriteContext;g.clearRect(0,0,128,128);g.save();g.translate(64,92);
    // Feet have six discrete poses; the silhouette stays crisp at native resolution.
    const feet=[[-8,5],[-12,8],[-14,10],[-8,5],[-3,0],[0,-5]][frame];
    if(p.melee>.16){
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
    g.save();g.translate(0,-11+pose.bob);g.rotate(pose.tilt);g.translate(0,11);
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
    const origin=shoulder(p);g.save();g.translate(origin.x,origin.y);g.rotate(p.reload>0?1.05:p.aimAngle);
    rect(-4,-7,10,12,ink);rect(-2,-6,7,9,'#738b88');rect(-2,-6,5,2,'#e0dfc6');rect(2,-3,5,7,ink);
    rect(4,-2,6,6,'#a5b4a6');rect(5,-1,3,3,'#bf514c');rect(9,-4,8,7,ink);rect(10,-3,6,5,'#657e7a');
    rect(11,-3,5,2,'#d1dbc8');rect(12,0,4,1,'#8fe2c9');rect(16,-4,4,5,'#bdcbb8');
    rect(17,-7,9,7,ink);rect(18,-6,7,2,'#a9b9a6');rect(22,-4,3,2,'#536b64');rect(18,0,4,6,ink);rect(19,1,2,3,leather);
    if(p.fire>.17){rect(26,-5,5,6,'#fff4c2');rect(31,-3,6,2,'#ebba73');rect(28,-8,2,3,'#fff4c2');rect(28,1,2,3,'#fff4c2');}
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
    rect(x-2,y-1,4,3,'#2d5149');rect(x-1,y-1,3,2,b.good?'#fff1bc':'#ed8a6b');
  }
  function foreground(){const s=scenes[stage];for(const d of drops){if(d.taken)continue;const x=d.x-camera;rect(x-6,d.y-7,13,12,d.type==='ammo'?'#2d675b':'#963f54');rect(x-3,d.y-5,7,7,d.type==='ammo'?P.acid:P.white);if(d.type==='med'){rect(x-5,d.y-3,11,2,P.white);rect(x-1,d.y-7,2,10,P.white);}}
    for(const echo of echoes)detective(echo,echo.life*.8);
    for(const e of enemies)enemySprite(e);
    for(const b of bullets)drawBullet(b);
    detective();for(const v of particles)rect(v.x-camera,v.y,2,2,v.c);
    let target=null,label='';if(s.clue&&Math.abs(player.x-s.clue.x)<31&&Math.abs(player.y-s.clue.y)<45){target=s.clue;label='[E] READ NOTE';}
    else if(s.terminal&&!unlocked&&Math.abs(player.x-s.terminal.x)<34&&Math.abs(player.y-s.terminal.y)<45){target=s.terminal;label='[E] TERMINAL';}
    else if(Math.abs(player.x-s.exit.x)<40&&Math.abs(player.y-s.exit.y)<48){target=s.exit;label='[E] '+(stage===3?'SEAL THE BREACH':'ENTER');}
    if(target){rect(target.x-camera-2,target.y-47,5,5,P.acid);rect(clamp(target.x-camera-55,5,W-120),target.y-64,116,13,'#142a38');text(label,clamp(target.x-camera-51,8,W-116),target.y-55,P.cream,8);}
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
    text('AMMO',288,12,P.cream,7);text(String(player.ammo).padStart(2,'0')+' / '+String(player.reserve).padStart(2,'0'),286,29,P.white,13);
    rect(390,16,7,3,'#37675f');rect(395,12,14,10,'#26464d');rect(398,9,13,10,'#4b8d79');
    rect(407,7,8,8,'#26464d');rect(409,8,9,7,'#6ba18c');rect(414,13,7,3,'#93b49a');rect(416,10,2,2,P.red);
    rect(415,16,2,3,P.white);rect(403,21,3,4,'#26464d');rect(395,21,3,4,'#26464d');
    text('× '+String(enemies.filter(e=>e.hp>0).length).padStart(2,'0'),430,26,P.white,12);
    rect(0,H-23,W,23,'#0e222e');rect(0,H-23,W,2,'#477b7d');
    text(noticeTime>0?notice.toUpperCase().slice(0,62):'VESPER CITY  //  FOLLOW THE EVIDENCE',9,H-8,noticeTime>0?P.cream:'#a2c7c0',8);
    text(`0${stage+1}/04`,W-10,H-8,P.acid,8,'right');
    if(player.reload>0)text('RELOADING',W/2,58,P.cream,8,'center');
    if(slowAmount>.1){rect(0,43,W,4,'#172d28');rect(0,H-27,W,4,'#172d28');rect(W/2-57,49,114,14,'#243f35');text('BULLET TIME / 20%',W/2,59,'#d5e8b9',8,'center');}
    if(banner>0){rect(84,84,312,45,'#142d3bdc');rect(84,84,312,2,P.acid);text(`SECTOR 0${stage+1}`,W/2,101,P.cyan,8,'center');text(scenes[stage].name,W/2,119,P.cream,15,'center');}
  }
  function draw(){g.save();if(shake)g.translate(Math.round(rand(-shake,shake)),Math.round(rand(-shake,shake)));scenery();foreground();hud();g.restore();}
  let previous=0;function loop(t){const dt=Math.min(.04,(t-previous)/1000||0);previous=t;update(dt);draw();requestAnimationFrame(loop);}
  startButton.addEventListener('click',()=>begin(mode==='dead'&&!!checkpoint));
  const grid=document.querySelector('.num-grid');for(const n of [1,2,3,4]){const b=document.createElement('button');b.textContent=n;b.type='button';b.addEventListener('click',()=>digit(String(n)));grid.appendChild(b);}
  document.getElementById('cancel-puzzle').addEventListener('click',()=>{mode='play';puzzle.classList.add('hidden');});
  const prevent=new Set(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight']);
  document.addEventListener('keydown',e=>{if(prevent.has(e.code))e.preventDefault();if(mode==='puzzle'){if(e.code==='Escape'){mode='play';puzzle.classList.add('hidden');}else if(e.key>='1'&&e.key<='4')digit(e.key);return;}keys.add(e.code);});
  document.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();edge.clear();touch.shoot=false;touch.slow=false;});
  canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=canvas.getBoundingClientRect();aim={x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};});
  canvas.addEventListener('pointerleave',()=>aim=null);canvas.addEventListener('pointerdown',e=>{if(mode==='play'){e.preventDefault();shoot();}});
  const joystick=document.getElementById('joystick'),stick=document.getElementById('stick');let stickId=null;
  function moveStick(e){const r=joystick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,length=Math.max(1,Math.hypot(dx,dy)),cap=Math.min(length,r.width*.32),x=dx/length*cap,y=dy/length*cap;stick.style.transform=`translate(${x}px,${y}px)`;touch.x=x/(r.width*.32);}
  joystick.addEventListener('pointerdown',e=>{e.preventDefault();stickId=e.pointerId;joystick.setPointerCapture(e.pointerId);moveStick(e);});joystick.addEventListener('pointermove',e=>{if(stickId===e.pointerId)moveStick(e);});
  const reset=e=>{if(stickId!==e.pointerId)return;stickId=null;touch.x=0;stick.style.transform='';};joystick.addEventListener('pointerup',reset);joystick.addEventListener('pointercancel',reset);
  for(const b of document.querySelectorAll('[data-action]')){const action=b.dataset.action;
    b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);if(mode!=='play')return;if(action==='shoot')touch.shoot=true;else if(action==='slow')touch.slow=true;else if(action==='jump')jump();else if(action==='dodge')dodge();else if(action==='melee')melee();else if(action==='interact')interact();else if(action==='reload')reload();});
    for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>{if(action==='shoot')touch.shoot=false;if(action==='slow')touch.slow=false;});
  }
  player=freshPlayer();player.x=425;player.y=192;player.ground=false;enemies=scenes[0].enemies.map(e=>({...e,y:floorAt(e.x,scenes[0]),...stats[e.type],max:stats[e.type].hp,dir:-1,flash:0,anim:0,wind:0,lunge:0,shoot:1}));drops=scenes[0].pickups.map(d=>({...d,y:floorAt(d.x,scenes[0])-13,taken:false}));draw();requestAnimationFrame(loop);
})();
