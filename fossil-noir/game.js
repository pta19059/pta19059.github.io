/* Fossil Noir — original side-scrolling pixel-art game, no dependencies. */
(() => {
  'use strict';
  const canvas=document.getElementById('game'),g=canvas.getContext('2d',{alpha:false});
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
  let time=0,shake=0,banner=0,notice='',noticeTime=0,enteredCode='';
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const rand=(a,b)=>a+Math.random()*(b-a);
  const hash=n=>{let x=Math.sin(n*127.1+34.22)*43758.5453;return x-Math.floor(x);};
  function rect(x,y,w,h,color){g.fillStyle=color;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
  function text(s,x,y,color=P.white,size=8,align='left'){g.font=`bold ${size}px monospace`;g.fillStyle=color;g.textAlign=align;g.fillText(s,Math.round(x),Math.round(y));g.textAlign='left';}
  function note(s,seconds=3){notice=s;noticeTime=seconds;}
  function burst(x,y,c,n=8){for(let i=0;i<n;i++)particles.push({x,y,vx:rand(-95,95),vy:rand(-130,20),life:rand(.2,.6),c});}
  function freshPlayer(){return{x:65,y:263,vy:0,face:1,ground:true,moving:false,step:0,hp:5,ammo:12,reserve:28,focus:100,inv:0,fire:0,reload:0,melee:0,dash:0,dashDir:1,wall:0,wallRun:0};}
  function roofAt(x,scene=scenes[stage]){return scene.roofs.find(r=>x>=r.x+3&&x<=r.x+r.w-3);}
  function floorAt(x,scene=scenes[stage]){const r=roofAt(x,scene);return r?r.y:null;}
  function setup(index,restore=false){
    stage=index;const s=scenes[index];camera=0;unlocked=!!s.safe;bullets=[];particles=[];
    if(!restore){player.x=65;player.y=s.roofs[0].y;player.vy=0;player.ground=true;player.inv=.7;}
    enemies=s.enemies.map((e,i)=>({...e,y:floorAt(e.x,s),...stats[e.type],max:stats[e.type].hp,dir:i%2?1:-1,shoot:rand(.8,1.7),attack:.4,flash:0}));
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
  function dodge(){if(mode!=='play'||player.dash>0||player.focus<15)return;player.focus-=15;player.dash=.27;player.dashDir=player.face;player.inv=Math.max(player.inv,.3);player.wallRun=0;burst(player.x,player.y-12,P.cyan,9);}
  function reload(){if(mode!=='play'||player.reload>0||player.ammo===12||player.reserve<=0)return;player.reload=1;note('RELOADING',1);}
  function nearest(){let pick=null,best=275;for(const e of enemies){if(e.hp<=0)continue;const dx=e.x-player.x,dy=e.y-player.y;if(Math.abs(dy)<80&&Math.hypot(dx,dy)<best){pick=e;best=Math.hypot(dx,dy);}}return pick;}
  function shoot(){if(mode!=='play'||player.fire>0||player.reload>0)return;
    if(player.ammo===0){reload();if(player.reserve===0)note('NO AMMO // USE MELEE',2);return;}
    let dx=player.face,dy=0;
    if(aim){dx=aim.x+camera-player.x;dy=aim.y-(player.y-17);}
    else{const e=nearest();if(e){dx=e.x-player.x;dy=e.y-11-(player.y-17);}}
    const l=Math.hypot(dx,dy)||1;dx/=l;dy/=l;player.face=dx>=0?1:-1;
    player.ammo--;player.fire=.23;bullets.push({x:player.x+dx*12,y:player.y-17+dy*10,vx:dx*298,vy:dy*298,life:2,good:true});burst(player.x+dx*12,player.y-17+dy*8,P.cream,4);shake=1.3;
  }
  function hitEnemy(e,n){if(e.hp<=0)return;e.hp-=n;e.flash=.14;burst(e.x,e.y-14,P.red,8);
    if(e.hp<=0){player.focus=clamp(player.focus+12,0,100);shake=e.type==='boss'?5:2;if(e.type==='boss'){unlocked=true;note('THE WEAPON IS DOWN // REACH THE GATE',5);}else if(Math.random()<.22)drops.push({x:e.x,y:e.y-13,type:'ammo',taken:false});}
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
  function update(dt){time+=dt;shake=Math.max(0,shake-dt*17);if(mode!=='play')return;
    const s=scenes[stage],p=player;
    banner=Math.max(0,banner-dt);noticeTime=Math.max(0,noticeTime-dt);p.inv=Math.max(0,p.inv-dt);p.fire=Math.max(0,p.fire-dt);p.melee=Math.max(0,p.melee-dt);p.wallRun=Math.max(0,p.wallRun-dt);
    if(p.reload>0){p.reload-=dt;if(p.reload<=0){const n=Math.min(12-p.ammo,p.reserve);p.ammo+=n;p.reserve-=n;p.reload=0;}}
    const k=id=>keys.has(id);
    const x=(k('KeyD')||k('ArrowRight')?1:0)-(k('KeyA')||k('ArrowLeft')?1:0)+touch.x;
    const direction=clamp(x,-1,1);
    if(Math.abs(direction)>.2)p.face=direction>0?1:-1;
    p.moving=Math.abs(direction)>.2&&p.ground;p.step+=Math.abs(direction)*dt*10;
    const jumping=k('KeyW')||k('ArrowUp')||k('Space');if(jumping&&!edge.has('JUMP')){jump();edge.add('JUMP');}if(!jumping)edge.delete('JUMP');
    const dashing=k('ShiftLeft')||k('ShiftRight');if(dashing&&!edge.has('DASH')){dodge();edge.add('DASH');}if(!dashing)edge.delete('DASH');
    if(k('KeyF')&&!edge.has('MELEE')){melee();edge.add('MELEE');}if(!k('KeyF'))edge.delete('MELEE');
    if(k('KeyE')&&!edge.has('USE')){interact();edge.add('USE');}if(!k('KeyE'))edge.delete('USE');
    if(k('KeyR'))reload();if(k('KeyJ')||touch.shoot)shoot();
    const slow=(k('KeyQ')||touch.slow)&&p.focus>0;
    p.focus=clamp(p.focus+(slow?-34:3)*dt,0,100);const speed=slow?.22:1;
    const oldY=p.y;
    if(p.dash>0){p.dash=Math.max(0,p.dash-dt);p.x+=p.dashDir*245*dt;p.vy*=.6;}
    else p.x+=direction*119*dt;
    p.x=clamp(p.x,12,s.width-10);
    p.vy+=535*dt;p.y+=p.vy*dt;p.ground=false;
    if(p.vy>=0){for(const roof of s.roofs){if(p.x>=roof.x+4&&p.x<=roof.x+roof.w-4&&oldY<=roof.y+4&&p.y>=roof.y){p.y=roof.y;p.vy=0;p.ground=true;p.wall=0;break;}}}
    if(!p.ground){
      p.wall=0;
      for(const roof of s.roofs){if(p.y>roof.y+9&&p.y<roof.y+90){if(Math.abs(p.x-roof.x)<10&&direction>0){p.x=roof.x-8;p.wall=-1;}if(Math.abs(p.x-(roof.x+roof.w))<10&&direction<0){p.x=roof.x+roof.w+8;p.wall=1;}}}
      if(p.wall){p.wallRun=.14;p.vy=Math.min(p.vy,35);}
    }
    if(p.y>H+60){p.hp=0;finish(false);return;}
    camera=clamp(p.x-W*.38,0,Math.max(0,s.width-W));
    for(const item of drops){if(item.taken)continue;if(Math.abs(p.x-item.x)<17&&Math.abs(p.y-17-item.y)<25){item.taken=true;if(item.type==='ammo'){p.reserve=Math.min(60,p.reserve+7);note('7 ROUNDS RECOVERED',2);}else{p.hp=Math.min(5,p.hp+2);note('MED-KIT // +2 HEALTH',2);}burst(item.x,item.y,P.acid,9);}}
    for(const e of enemies){if(e.hp<=0)continue;e.flash=Math.max(0,e.flash-dt);e.attack-=dt*speed;e.shoot-=dt*speed;
      const distance=Math.abs(e.x-p.x),vertical=Math.abs(e.y-p.y);
      if(e.type==='turret'||e.type==='boss'){
        if(e.shoot<=0&&distance<295&&vertical<100){const a=Math.atan2(p.y-17-(e.y-16),p.x-e.x);const spread=e.type==='boss'?[-.2,0,.2]:[0];for(const off of spread)bullets.push({x:e.x,y:e.y-17,vx:Math.cos(a+off)*104,vy:Math.sin(a+off)*104,life:3,good:false});e.shoot=e.type==='boss'?2.3:1.9;burst(e.x,e.y-18,P.coral,3);}
      }
      if(e.type!=='turret'){
        if(distance<225&&vertical<65){const sign=Math.sign(p.x-e.x)||1,step=sign*e.speed*speed*dt,floor=floorAt(e.x+step*2);if(floor!==null&&Math.abs(floor-e.y)<6)e.x+=step;e.dir=sign;}
        if(distance<e.r+10&&vertical<27&&e.attack<=0){hurt(e.hit);e.attack=e.type==='boss'?1.1:.83;}
      }
    }
    for(const b of bullets){if(b.life<=0)continue;const rate=b.good?1:speed;b.x+=b.vx*dt*rate;b.y+=b.vy*dt*rate;b.life-=dt*rate;
      if(b.x<0||b.x>s.width||b.y<37||b.y>H){b.life=0;continue;}
      if(b.good){for(const e of enemies){if(e.hp>0&&Math.abs(b.x-e.x)<e.r+3&&Math.abs(b.y-(e.y-(e.type==='boss'?23:13)))<(e.type==='boss'?24:15)){hitEnemy(e,1);b.life=0;break;}}}
      else if(Math.abs(b.x-p.x)<10&&Math.abs(b.y-(p.y-17))<17){if(p.inv>0)p.focus=clamp(p.focus+4,0,100);else hurt(1);b.life=0;}
    }
    bullets=bullets.filter(b=>b.life>0);
    for(const v of particles){v.x+=v.vx*dt;v.y+=v.vy*dt;v.life-=dt;}particles=particles.filter(v=>v.life>0);
  }
  function sky(){const dusk=stage===2,rift=stage===3,safe=stage===1;
    if(safe||rift){rect(0,0,W,H,rift?'#294b5a':'#4b7791');rect(0,65,W,192,rift?'#3e7681':'#779db0');}
    else{rect(0,0,W,H,dusk?'#4f8994':'#91ccca');rect(0,72,W,60,dusk?'#6aa4a4':'#b8dbbf');rect(0,133,W,133,dusk?'#70abb0':'#a8d5c8');}
    // Three layers of stepped, parallax city blocks.
    for(let layer=0;layer<3;layer++){
      const par=[.14,.28,.46][layer],base=[236,264,292][layer],tints=rift?['#3e6d79','#2b6173','#245268']:safe?['#82acba','#508399','#31657e']:dusk?['#88c2c1','#5aa6bc','#267d9e']:['#a0d4d0','#69bdc8','#3499bc'];
      const offset=camera*par,step=layer===0?67:layer===1?79:98;
      for(let i=Math.floor(offset/step)-2;i<Math.ceil((offset+W)/step)+2;i++){
        const bx=i*step-offset,hei=55+Math.floor(hash(i*3+layer*41)*100)+(layer===2?16:0),bw=step-2;
        rect(bx,base-hei,bw,H-(base-hei),tints[layer]);rect(bx+9,base-hei-7,bw-18,7,tints[layer]);
        if(layer===2)for(let wx=bx+12;wx<bx+bw-7;wx+=15)for(let wy=base-hei+17;wy<base-11;wy+=24)if(hash(i*97+wx*3+wy)> .48)rect(wx,wy,3,5,dusk?'#88bac2':'#91cfdb');
      }
    }
    if(stage===0){rect(20-camera*.1,87,62,12,'#344c56');text('VESPER',25-camera*.1,96,P.acid,8);}
    if(rift){const cx=360-camera*.08;for(let i=6;i>0;i--){g.strokeStyle=i%2?'#85e4d7':'#347b85';g.lineWidth=3;g.beginPath();g.ellipse(cx,133,i*13,i*18,0,0,Math.PI*2);g.stroke();}rect(cx-9,79,18,107,'#83e5d4');rect(cx-4,98,8,72,'#e4f9c8');}
  }
  function brickRoof(r,i){const x=r.x-camera;if(x>W+10||x+r.w<-10)return;
    const lab=stage===2,interior=stage===1,core=stage===3;
    const base=lab?'#5b6770':interior?'#537c83':core?'#4d6c74':'#b56941',light=lab?'#849091':interior?'#8ab5b1':core?'#8ba9a4':'#e49a5c',dark=lab?'#30434b':interior?'#375f67':core?'#324d57':'#7c3e34';
    rect(x,r.y,r.w,H-r.y,dark);rect(x+2,r.y+9,r.w-4,H-r.y-9,base);
    for(let row=0;row<Math.ceil((H-r.y)/9);row++){
      let y=r.y+9+row*9,off=row%2?8:0;for(let c=-1;c<Math.ceil(r.w/18);c++){
        let px=x+c*18+off;if(px<x+3||px>x+r.w-6)continue;rect(px,y,15,6,(c+row)%5===0?light:base);rect(px+1,y+5,3,1,dark);
      }
    }
    for(let wx=x+27;wx<x+r.w-18;wx+=52){rect(wx,r.y+52,18,29,'#422f35');rect(wx+3,r.y+54,12,23,'#263b48');rect(wx+9,r.y+54,2,23,dark);rect(wx-2,r.y+78,23,3,light);}
    rect(x-2,r.y-4,r.w+4,6,'#172d3a');rect(x,r.y-7,r.w,3,light);rect(x+4,r.y-1,r.w-8,3,dark);
    for(let px=x+13;px<x+r.w-12;px+=20){rect(px,r.y+9,9,2,light);rect(px+2,r.y+14,4,1,dark);}
    if(i%2===1&&!interior){rect(x+r.w-42,r.y-20,21,13,'#344955');rect(x+r.w-38,r.y-28,13,8,'#465f62');rect(x+r.w-32,r.y-36,2,8,'#243d4b');}
  }
  function scenery(){const s=scenes[stage];sky();
    for(let i=0;i<s.roofs.length;i++)brickRoof(s.roofs[i],i);
    if(stage===1){rect(80-camera,230,56,43,'#435b67');rect(84-camera,235,48,20,'#365149');text('SAFE',90-camera,251,P.acid,9);rect(344-camera,238,35,35,'#45636a');rect(352-camera,244,21,24,'#a9c9bb');}
    if(stage===2){rect(370-camera,182,47,58,'#253d48');rect(375-camera,190,37,30,'#3b8c8d');text('AX',384-camera,208,P.acid,11);}
    if(s.clue){const x=s.clue.x-camera,y=s.clue.y;rect(x-7,y-26,15,18,'#4b4544');rect(x-5,y-24,11,13,'#f5d99d');rect(x-3,y-21,7,1,'#825d4b');rect(x-3,y-17,7,1,'#825d4b');}
    if(s.terminal){const x=s.terminal.x-camera,y=s.terminal.y;rect(x-10,y-37,20,30,'#1a2d38');rect(x-7,y-34,14,14,unlocked?P.acid:P.red);rect(x-5,y-15,10,3,'#a8cbc6');}
    const gate=s.exit,x=gate.x-camera,y=gate.y;rect(x-17,y-63,37,67,'#223a48');rect(x-12,y-57,27,54,unlocked?'#2a807b':'#693e4a');rect(x-9,y-52,4,44,unlocked?P.acid:P.red);rect(x+1,y-52,9,3,'#173743');
    if(stage===3&&!unlocked){rect(x-3,y-54,6,39,P.red);}
    if(stage!==1)for(let i=0;i<56;i++){const px=(i*83-camera*.43)%560,py=(i*71+time*(38+i%5*13))%340;if(px>=0&&px<W)rect(px,py,1,5,stage===0?'#dbf8df9c':'#aee4df75');}
  }
  function enemySprite(e){
    if(e.hp<=0)return;
    const x=Math.round(e.x-camera),y=Math.round(e.y),flash=e.flash>0;
    rect(x-e.r,y-2,e.r*2,3,'#19354488');
    g.save();g.translate(x,y);g.scale(e.dir<0?-1:1,1);
    const armor=flash?P.white:e.type==='brute'?'#88765e':e.type==='turret'?'#568c91':'#497e76';
    const scale=flash?P.white:e.type==='brute'?'#c9ad7d':'#8fb5a0';
    const steel='#263f4a',shade='#192d3a',joint='#7fe0d3';
    if(e.type==='turret'){
      // A sentry built from a cloned skull and a fixed mechanical rib cage.
      rect(-17,-17,34,17,shade);rect(-13,-19,26,17,steel);rect(-9,-28,20,15,armor);
      rect(-6,-25,13,6,scale);rect(-3,-19,3,13,joint);rect(-13,-7,26,4,'#668b8b');
      rect(3,-34,14,10,shade);rect(5,-32,13,8,armor);rect(14,-29,12,5,scale);
      rect(16,-26,10,3,shade);rect(17,-23,3,3,P.white);rect(22,-23,3,3,P.white);
      rect(14,-31,3,3,P.red);rect(10,-36,4,5,steel);
      rect(-15,-15,3,12,'#5b8384');rect(12,-15,3,12,'#5b8384');
    }else if(e.type==='boss'){
      // The final creature has a separate jaw, plated torso, spines and hydraulic legs.
      const stride=Math.round(Math.sin(time*6)*2);
      rect(-74,-21,19,4,shade);rect(-64,-26,19,8,steel);rect(-53,-34,20,12,armor);
      rect(-37,-43,60,34,shade);rect(-34,-41,55,29,armor);rect(-30,-37,48,18,'#648f7d');
      for(let i=0;i<4;i++){rect(-27+i*11,-47-(i%2)*4,6,11,steel);rect(-25+i*11,-50-(i%2)*4,3,8,scale);}
      rect(-19,-32,26,8,'#2b5054');rect(-12,-30,7,4,joint);rect(1,-30,7,4,joint);
      rect(12,-47,13,16,steel);rect(21,-57,29,29,shade);rect(24,-55,27,23,armor);
      rect(38,-49,15,6,scale);rect(48,-43,17,9,steel);rect(52,-42,17,5,armor);
      const jaw=Math.sin(time*4+e.x*.01)>0?3:0;
      rect(46,-35+jaw,23,8,shade);rect(49,-34+jaw,18,3,'#a5bba2');
      for(let i=0;i<4;i++)rect(51+i*4,-31+jaw,2,4,P.white);
      rect(44,-47,5,4,Math.sin(time*7)>0?P.red:P.coral);rect(46,-46,2,2,P.cream);rect(32,-55,5,4,'#aec6ad');
      rect(-21,-14,15,14,shade);rect(-17,-15,8,12,steel);rect(-15,-7+stride,10,8,'#5b7e7d');
      rect(8,-14,18,14,shade);rect(12,-15,9,13,steel);rect(13,-7-stride,12,8,'#5b7e7d');
      rect(25,-28,11,4,steel);rect(33,-24,5,8,shade);rect(36,-23,5,4,scale);
      rect(-56,-34,7,5,joint);rect(-37,-36,6,6,joint);
    }else{
      const large=e.type==='brute',stride=Math.round(Math.sin(time*(large?5:9)+e.x*.03)*3);
      if(large)g.scale(1.23,1.23);
      // Long counterbalancing tail, bent hind legs, pointed snout and visible teeth.
      rect(-40,-18,11,4,shade);rect(-34,-22,14,7,steel);rect(-26,-27,12,10,armor);
      rect(-17,-31,31,22,shade);rect(-14,-30,27,18,armor);rect(-11,-27,22,10,large?'#ab9070':'#69a18e');
      rect(-14,-16,9,5,shade);rect(7,-15,10,5,shade);
      rect(-12,-34,6,6,scale);rect(-3,-36,5,7,steel);rect(5,-34,5,6,scale);
      rect(-5,-39,4,5,scale);rect(4,-38,4,5,scale);
      rect(10,-35,9,14,steel);rect(14,-42,16,14,shade);rect(16,-40,16,11,armor);
      const jaw=Math.sin(time*7+e.x*.04)>0?2:0;
      rect(26,-35,12,5,scale);rect(32,-32,9,5,shade);rect(31,-28+jaw,10,3,'#a6bda6');
      rect(31,-25+jaw,2,4,P.white);rect(36,-25+jaw,2,4,P.white);
      rect(26,-38,4,4,P.red);rect(27,-37,2,2,P.cream);
      rect(-7,-22,8,4,steel);rect(-6,-19,4,7,shade);rect(-3,-17,4,3,joint);
      rect(-12,-11,9,10,shade);rect(-11,-11,4,8,steel);rect(-12+stride,-4,11,4,'#447071');
      rect(6,-12,9,10,shade);rect(7,-11,4,8,steel);rect(5-stride,-4,11,4,'#447071');
      rect(-11+stride,0,4,2,scale);rect(-5+stride,0,3,2,scale);
      rect(6-stride,0,4,2,scale);rect(12-stride,0,3,2,scale);
      rect(-9,-28,5,5,joint);rect(-7,-26,2,2,P.cream);
      if(large){rect(-14,-37,18,6,steel);rect(-8,-41,5,6,scale);rect(3,-41,5,6,scale);rect(3,-29,5,5,P.coral);}
    }
    g.restore();
    if(e.type==='boss'){rect(x-43,y-66,86,6,'#1b3039');rect(x-43,y-66,86*Math.max(0,e.hp)/e.max,6,P.red);rect(x-41,y-65,80*Math.max(0,e.hp)/e.max,2,P.cream);}
  }
  function detective(){
    const p=player,x=Math.round(p.x-camera),y=Math.round(p.y);
    if(p.inv>0&&Math.floor(time*15)%2===0&&mode!=='menu')return;
    g.save();g.translate(x,y);g.scale(p.face*1.25,1.25);
    const flying=!p.ground,step=p.moving?Math.round(Math.sin(p.step)*3):0;
    const coat=p.dash>0?'#68bcb9':'#284b62',light=p.dash>0?'#c2eee0':'#5a8e98',ink='#132533';
    if(p.dash>0||p.wallRun>0){rect(-24,-32,15,22,'#5ed4d1');rect(-34,-29,7,15,'#a6eee1');}
    // Shoes and separate legs make running and airborne poses readable.
    if(flying){rect(-12,-12,7,8,ink);rect(-15,-7,10,5,'#203b4d');rect(3,-11,8,7,ink);rect(7,-8,9,5,'#203b4d');}
    else{rect(-9,-12,7,10,ink);rect(-9+step,-4,10,4,'#162635');rect(3,-12,7,10,ink);rect(3-step,-4,11,4,'#162635');rect(-7,-14,5,4,'#527b81');rect(4,-14,5,4,'#527b81');}
    // Split coat tails, belt, lapels and a small detective badge.
    rect(-13,-30,25,22,ink);rect(-11,-28,21,19,coat);
    rect(-11,-14,9,12,ink);rect(-9,-15,7,11,coat);rect(3,-14,10,12,ink);rect(4,-15,8,10,coat);
    if(flying){rect(-14,-13,5,7,light);rect(10,-16,5,7,light);}
    rect(-4,-27,6,15,light);rect(-8,-27,4,11,'#365e73');rect(3,-27,4,11,'#365e73');
    rect(-10,-17,19,3,'#132b3b');rect(1,-17,3,3,'#d3b662');rect(-8,-24,3,3,P.cream);
    // Warm face and nose under a dark fedora; red scarf separates head from coat.
    rect(-7,-39,15,13,ink);rect(-5,-37,12,12,'#cfa27f');rect(-4,-33,11,7,'#e3bd94');
    rect(5,-33,4,3,'#b38065');rect(2,-34,3,2,P.white);rect(4,-34,1,1,ink);rect(1,-30,6,2,'#875a50');
    rect(-7,-42,16,6,ink);rect(-5,-43,13,3,'#314c5d');rect(-10,-38,23,4,'#0c1e2c');rect(1,-40,7,2,P.coral);
    rect(-6,-27,14,4,P.coral);rect(5,-24,7,4,'#a54e52');
    // Foreground arm, glove and distinct pistol silhouette.
    rect(7,-28,7,11,ink);rect(9,-26,6,9,coat);rect(12,-23,6,5,'#1d2f3d');
    rect(15,-25,10,5,ink);rect(23,-24,5,2,'#94b8b1');rect(17,-20,4,6,'#101d2b');
    rect(-12,-26,5,12,ink);rect(-11,-24,4,9,light);
    if(p.fire>.14){rect(28,-25,4,4,P.cream);rect(32,-24,4,2,P.coral);}
    if(p.melee>.24){rect(22,-42,4,9,P.cyan);rect(28,-32,5,7,P.cyan);rect(30,-22,5,6,P.cream);}
    g.restore();
  }
  function foreground(){const s=scenes[stage];for(const d of drops){if(d.taken)continue;const x=d.x-camera;rect(x-6,d.y-7,13,12,d.type==='ammo'?'#2d675b':'#963f54');rect(x-3,d.y-5,7,7,d.type==='ammo'?P.acid:P.white);if(d.type==='med'){rect(x-5,d.y-3,11,2,P.white);rect(x-1,d.y-7,2,10,P.white);}}
    for(const e of enemies)enemySprite(e);
    for(const b of bullets){rect(b.x-camera-3,b.y-2,6,3,b.good?P.cream:P.red);rect(b.x-camera-b.vx*.025,b.y-b.vy*.025,3,2,b.good?P.cream:P.red);}
    detective();for(const v of particles)rect(v.x-camera,v.y,2,2,v.c);
    let target=null,label='';if(s.clue&&Math.abs(player.x-s.clue.x)<31&&Math.abs(player.y-s.clue.y)<45){target=s.clue;label='[E] READ NOTE';}
    else if(s.terminal&&!unlocked&&Math.abs(player.x-s.terminal.x)<34&&Math.abs(player.y-s.terminal.y)<45){target=s.terminal;label='[E] TERMINAL';}
    else if(Math.abs(player.x-s.exit.x)<40&&Math.abs(player.y-s.exit.y)<48){target=s.exit;label='[E] '+(stage===3?'SEAL THE BREACH':'ENTER');}
    if(target){rect(target.x-camera-2,target.y-47,5,5,P.acid);rect(clamp(target.x-camera-55,5,W-120),target.y-64,116,13,'#142a38');text(label,clamp(target.x-camera-51,8,W-116),target.y-55,P.cream,8);}
  }
  function hud(){
    rect(0,0,W,43,'#132631');rect(0,41,W,3,'#6a9d96');
    rect(10,5,31,31,'#071620');rect(12,7,27,27,'#224a57');
    rect(16,27,20,7,'#1c394b');rect(20,23,12,5,P.coral);
    rect(18,14,15,11,'#d6ab88');rect(19,19,13,6,'#e8c19b');rect(27,17,5,2,'#fff2d9');rect(30,17,1,2,'#0c1d2c');
    rect(17,11,18,5,'#152839');rect(20,9,14,3,'#354d5e');rect(14,15,23,3,'#0b1827');rect(28,12,6,2,P.coral);
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
    if((keys.has('KeyQ')||touch.slow)&&player.focus>0){rect(0,43,W,2,P.acid);rect(0,H-25,W,2,P.acid);}
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
  player=freshPlayer();player.x=425;player.y=192;player.ground=false;enemies=scenes[0].enemies.map(e=>({...e,y:floorAt(e.x,scenes[0]),...stats[e.type],max:stats[e.type].hp,dir:-1,flash:0}));drops=scenes[0].pickups.map(d=>({...d,y:floorAt(d.x,scenes[0])-13,taken:false}));draw();requestAnimationFrame(loop);
})();
