/* Original arcade renderer. Physics and hit boxes remain in game.js. */
(() => {
  'use strict';
  const atlas = document.createElement('img');
  atlas.src = './assets/environment-atlas.png';
  const cache = new Map();
  const poseCanvas=document.createElement('canvas');poseCanvas.width=128;poseCanvas.height=128;
  const poseContext=poseCanvas.getContext('2d');
  const ink = '#24251e';
  const hash = n => {const f=Math.sin(n*91.73+13.14)*43758.5453;return f-Math.floor(f);};
  const box = (g,x,y,w,h,c) => {g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));};

  // Scan conversion keeps even curved silhouettes on the native pixel grid.
  function shape(g, points, colors, texture=0) {
    const ys=points.map(p=>p[1]),lo=Math.floor(Math.min(...ys)),hi=Math.ceil(Math.max(...ys));
    for(let y=lo;y<=hi;y++){
      const hits=[];
      for(let i=0,j=points.length-1;i<points.length;j=i++){
        const a=points[i],b=points[j];if((a[1]<=y+.5&&b[1]>y+.5)||(b[1]<=y+.5&&a[1]>y+.5))hits.push(a[0]+(y+.5-a[1])*(b[0]-a[0])/(b[1]-a[1]));
      }
      hits.sort((a,b)=>a-b);
      for(let i=0;i+1<hits.length;i+=2){const x=Math.ceil(hits[i]),end=Math.floor(hits[i+1]),f=(y-lo)/Math.max(1,hi-lo);if(end<x)continue;
        const color=typeof colors==='string'?colors:colors[f<.26?0:f<.69?1:2];box(g,x,y,end-x+1,1,color);
        if(texture&&end-x>4){for(let px=x+2;px<end-1;px++){const n=hash(px*7+y*89);if(n>.91)box(g,px,y,1,1,colors[0]);else if(n<.035)box(g,px,y,1,1,colors[2]);}}
        box(g,x,y,1,1,ink);box(g,end,y,1,1,ink);
      }
    }
  }
  function limb(g,a,b,c,width,colors){const segment=(p,q,w)=>{const dx=q[0]-p[0],dy=q[1]-p[1],len=Math.hypot(dx,dy)||1,nx=-dy/len*w,ny=dx/len*w;shape(g,[[p[0]+nx,p[1]+ny],[q[0]+nx,q[1]+ny],[q[0]-nx,q[1]-ny],[p[0]-nx,p[1]-ny]],colors);};segment(a,b,width);segment(b,c,width*.72);box(g,b[0]-1,b[1]-1,3,3,colors[0]);}
  function ellipse(g,x,y,rx,ry,colors){const points=[];for(let i=0;i<20;i++){const a=i*Math.PI/10;points.push([x+Math.cos(a)*rx,y+Math.sin(a)*ry]);}shape(g,points,colors);}
  function shadow(g,x,y,w){box(g,x-w*.7,y-1,w*1.4,2,'#171c1d36');box(g,x-w*.48,y,w*.96,2,'#14171448');}
  function poseLayer(g,x,y,angle,draw){
    // Paint first, then rotate once: scanline shading stays solid and pixel sharp.
    poseContext.setTransform(1,0,0,1,64,64);poseContext.clearRect(-64,-64,128,128);
    draw(poseContext);
    g.save();g.translate(x,y);g.rotate(angle);g.imageSmoothingEnabled=false;
    g.drawImage(poseCanvas,-64,-64);g.restore();
  }

  function scene(g,stage,camera,time,width){
    if(!atlas.complete||!atlas.naturalWidth)return false;
    const sw=atlas.naturalWidth/2,sh=atlas.naturalHeight/4,sx=stage%2*sw,sy=Math.floor(stage/2)*sh;
    const drift=Math.max(0,Math.min(1,camera/Math.max(1,width-480))),renderWidth=650;
    g.imageSmoothingEnabled=false;g.drawImage(atlas,sx,sy,sw,sh,Math.round(-drift*(renderWidth-480)),43,renderWidth,294);
    // Middle-distance drifting particles give the painted vistas their own motion.
    const warm=[3,4,5,6].includes(stage);
    for(let i=0;i<20;i++){const x=((i*79-camera*.43+time*(warm?5:-7))%550+550)%550-30,y=82+hash(i+stage*20)*209+Math.sin(time+i)*4;box(g,x,y,1,i%4===0?2:1,warm?'#fce5a449':'#b0d9c63d');}
    if(stage===2||stage===3){for(let i=0;i<3;i++){const x=100+i*153-camera*.21;box(g,x,206-Math.sin(time*1.5+i)*15,8,1,'#b9e8c840');}}
    return true;
  }
  const terrainPalettes=[
    ['#a68f70','#72624f','#4d4540','#343938'],['#bb8e5b','#7e563a','#503a2e','#292826'],
    ['#b1b39f','#747b6b','#4d5853','#323f3d'],['#d2bb7f','#99875c','#635e45','#39413c'],
    ['#d7b178','#9b805d','#655847','#3b4140'],['#c4ac81','#817765','#515954','#313b3b'],
    ['#e2d091','#b9a470','#867653','#5e5d42'],['#bcb395','#837964','#57595b','#363c48']
  ];
  function terrainTile(stage){
    if(cache.has(stage))return cache.get(stage);
    const c=document.createElement('canvas');c.width=128;c.height=128;const g=c.getContext('2d'),p=terrainPalettes[stage];
    box(g,0,0,128,128,p[2]);
    for(let y=0;y<128;y++)for(let x=0;x<128;x++){const n=hash(x*7+y*307+stage*871);if(n>.87)box(g,x,y,n>.98?2:1,1,p[1]);else if(n<.055)box(g,x,y,1,1,p[3]);}
    const metal=[2,5,7].includes(stage);
    for(let row=0;row<8;row++){const y=13+row*15;for(let col=-1;col<5;col++){const x=col*37+(row%2?18:0);box(g,x,y,36,1,p[3]);box(g,x+1,y+1,34,1,p[1]);box(g,x,y,1,15,p[3]);box(g,x+1,y+2,1,12,p[1]);if(metal){box(g,x+3,y+4,2,2,p[0]);box(g,x+30,y+11,2,2,p[3]);}else{box(g,x+9+row%3,y+6,5,1,p[3]);box(g,x+21,y+10,3,1,p[1]);box(g,x+6,y+3,11,1,p[1]);}}}
    box(g,0,0,128,2,p[0]);box(g,0,3,128,2,p[1]);box(g,0,7,128,3,p[3]);box(g,0,10,128,1,p[0]);
    if(stage===0||stage===4)for(let x=3;x<120;x+=22){box(g,x,0,13,1,'#c8d5c2');box(g,x+4,3,7,1,'#91b6b4');}
    if(stage===6){for(let x=0;x<128;x+=4){const h=1+Math.floor(hash(x)*7);box(g,x,1,2,h,'#66783f');box(g,x+1,0,1,h-2,'#a1aa5c');}}
    cache.set(stage,c);return c;
  }
  function terrain(g,r,stage,camera,time,index){
    const x=Math.round(r.x-camera),left=Math.max(0,Math.floor((camera-r.x)/128)),right=Math.min(Math.ceil(r.w/128),Math.ceil((camera+480-r.x)/128));
    g.save();g.beginPath();g.rect(x,r.y-4,r.w,364-r.y);g.clip();
    for(let i=left;i<right;i++){const w=Math.min(128,r.w-i*128);g.drawImage(terrainTile(stage),0,0,w,128,x+i*128,r.y-4,w,128);}
    if(stage===5){box(g,x,r.y+33,r.w,4,'#1f302e');box(g,x+8,r.y+36,r.w-16,3,'#b9a784');for(let wx=22;wx<r.w;wx+=76){ellipse(g,x+wx,r.y+45,12,10,['#52645a','#293c37','#152b29']);ellipse(g,x+wx,r.y+45,7,6,['#b5b49b','#7c8876','#47564a']);box(g,x+wx-1,r.y+42,3,5,'#dfd7b3');}box(g,x+8,r.y+58,r.w-16,5,'#132f2f');}
    else if(stage===0){for(let wx=28;wx<r.w;wx+=81){box(g,x+wx,r.y+29,23,32,'#202b2c');box(g,x+wx+2,r.y+31,19,27,'#b49c6c');box(g,x+wx+3,r.y+32,7,24,'#5e756b');box(g,x+wx+11,r.y+32,8,24,'#d1bb7f');box(g,x+wx+1,r.y+43,21,2,'#514e3c');box(g,x+wx-2,r.y+60,27,3,'#afa083');}}
    g.restore();
    if(stage===6){for(let n=22;n<r.w-10;n+=63){const wx=x+n;if(wx<-20||wx>500)continue;for(let j=0;j<5;j++)shape(g,[[wx,r.y-3],[wx-14+j*6,r.y-8-hash(n+j)*13],[wx-8+j*4,r.y-4]],['#aab26e','#6d884d','#426249']);}}
    if(stage===2||stage===7){for(let n=35;n<r.w-10;n+=110){box(g,x+n,r.y+13,29,13,'#2e3d37');box(g,x+n+3,r.y+16,23,1,'#b8b294');for(let j=0;j<4;j++)box(g,x+n+4+j*6,r.y+19,2,5,'#818f76');}}
    // Foreground debris sits on the same collision plane as the character feet.
    for(let n=13;n<r.w-14;n+=49){const wx=x+n;if(wx<-12||wx>492)continue;const h=2+Math.floor(hash(n+index*4)*5),p=terrainPalettes[stage];shape(g,[[wx-5,r.y-4],[wx-2,r.y-4-h],[wx+3,r.y-3-h],[wx+7,r.y-4]],p);}
  }

  function detective(g,p,info){
    const {x,y,time,pose,origin,weapon,angle=p.aimAngle,offset,opacity}=info;
    shadow(g,x,y,16);g.save();g.globalAlpha=opacity;g.translate(Math.round(x),Math.round(y));g.scale(p.face,1);
    const run=p.moving?Math.sin(p.step*Math.PI/3):0,lift=p.moving?Math.cos(p.step*Math.PI/3):0;
    const cloth=['#9b9b71','#657452','#3e4b39'];
    // Separate silhouettes and lighting keep both legs readable at native size.
    const leg=(hip,knee,ankle,near)=>{
      const pants=near?['#acac7c','#7c8960','#4c6045']:['#78846a','#50634d','#344b3d'];
      const leather=near?['#baa075','#806547','#454434']:['#8e8060','#5c533e','#303b32'];
      limb(g,hip,knee,ankle,near?3.3:3,pants);
      box(g,knee[0]-2,knee[1]-2,4,2,pants[0]);
      box(g,knee[0]+1,knee[1],2,3,pants[2]);
      const [ax,ay]=ankle;
      shape(g,[[ax-3,ay-5],[ax+2,ay-5],[ax+3,ay-1],[ax+6,ay],[ax+7,ay+2],[ax-3,ay+2]],leather);
      box(g,ax-2,ay-4,4,1,leather[0]);
      box(g,ax+2,ay,3,1,leather[0]);
      box(g,ax-3,ay+2,10,1,ink);
      box(g,ax-2,ay+1,2,1,leather[1]);
    };
    if(p.riding){
      leg([-5,-23],[-9,-13],[-7,-5],false);
      leg([4,-23],[12,-17],[12,-3],true);
    }else if(!p.ground){
      leg([-4,-23],[-11,-12],[-18,-11],false);
      leg([4,-23],[10,-18],[13,-6],true);
    }else if(p.moving){
      const farLift=Math.max(0,-lift)*7,nearLift=Math.max(0,lift)*7;
      leg([-4,-23],[-3-run*6,-12-farLift*.45],[-2-run*11,-3-farLift],false);
      leg([4,-23],[3+run*6,-12-nearLift*.45],[2+run*11,-2-nearLift],true);
    }else{
      leg([-4,-23],[-7,-12],[-8,-3],false);
      leg([4,-23],[5,-12],[6,-2],true);
    }
    shape(g,[[-7,-24],[7,-24],[7,-19],[3,-17],[0,-20],[-3,-18],[-7,-19]],['#929774','#657653','#3d5140']);
    poseLayer(g,pose.shift||0,-23+pose.bob,pose.tilt,g=>{
    g.translate(0,23);
    shape(g,[[-8,-35],[3,-37],[10,-31],[8,-23],[3,-21],[-8,-22],[-11,-27]],cloth,true);
    shape(g,[[-8,-28],[-11-run*2,-21],[-7,-18],[-3,-25]],cloth);shape(g,[[3,-35],[7,-32],[5,-25],[0,-27]],['#d5c69a','#b1a17b','#716c50']);
    box(g,-7,-28,3,3,'#e8c675');box(g,-7,-24,15,3,'#443c2c');box(g,0,-24,4,3,'#d2b974');box(g,-9,-25,4,5,'#a79058');
    limb(g,[-8,-32],[-12,-24],[-8,-20],2.8,cloth);box(g,-9,-23,4,4,'#d4a272');
    shape(g,[[-7,-48],[2,-50],[9,-44],[9,-35],[4,-31],[-4,-33],[-8,-39]],['#f0cd93','#c69664','#8c6745']);
    box(g,-7,-43,3,7,'#725333');box(g,5,-41,6,4,'#d1a16d');box(g,0,-42,3,2,'#f8e6b7');box(g,2,-42,1,2,'#282d23');box(g,5,-44,4,5,'#31332b');box(g,-5,-45,12,1,'#66432f');box(g,0,-35,6,1,'#594535');box(g,-2,-34,6,1,'#95714a');
    shape(g,[[-10,-49],[-8,-56],[-1,-58],[5,-55],[6,-49],[14,-47],[11,-45],[-14,-46],[-15,-48]],['#d0aa6a','#967d47','#5e5434']);box(g,-7,-50,14,2,'#6a4831');box(g,-12,-47,24,1,'#e3c28c');
    shape(g,[[-6,-33],[4,-32],[8,-30],[1,-27],[-7,-29]],['#df9161','#b25f43','#713f31']);shape(g,[[2,-29],[11+run,-28],[9+run,-24],[3,-27]],['#d68858','#a9543c','#704333']);
    });
    poseLayer(g,origin.x,origin.y-offset,angle,g=>{
    const recoil=p.flash>0?-2:0;
    limb(g,[-4,-3],[4,3],[13+recoil,0],3,['#d3d2b3','#8a9b89','#4a6257']);box(g,-2,-4,4,2,'#eae5c6');box(g,3,1,6,2,'#c1c8a9');box(g,5,-1,2,2,'#85e2cd');
    shape(g,[[12+recoil,-5],[weapon.tip-2,-5],[weapon.tip,-3],[weapon.tip,-1],[14+recoil,0]],['#c3c6ae','#7c8b78','#394f43']);box(g,weapon.tip-3,-4,5,3,'#33453a');box(g,14,-1,4,6,'#715b37');
    if(weapon.id!=='pistol'){box(g,19,-7,7,2,'#334237');box(g,21,0,5,7,'#34493c');box(g,22,1,2,5,'#9cac8c');box(g,16,-4,8,1,'#e0d6aa');}
    if(p.flash>0){const tip=weapon.tip;shape(g,[[tip+1,-3],[tip+7,-7],[tip+6,-4],[tip+17,-3],[tip+9,0],[tip+11,3],[tip+3,0]],['#fff6c6','#ffd976','#e9a14a']);box(g,tip+1,-3,7,2,'#ffffe3');}
    });g.restore();
  }

  function creature(g,e,x,y,time){
    if(x<-130||x>610)return;
    shadow(g,x,y,e.r);g.save();g.translate(Math.round(x),Math.round(y));g.scale(e.dir<0?-1:1,1);
    const flash=e.flash>0,c=e.variant==='iron'?['#e7c384','#b19761','#706341']:e.variant==='omega'?['#d7bcb4','#968893','#555769']:e.variant==='root'?['#d3c47d','#909957','#536340']:['#d0c599','#8c9b68','#506247'];
    const skin=flash?['#fff7d3','#eedcac','#bdcbb8']:c,metal=['#d9d4b1','#8e9a85','#4c6053'],bone=['#f7e3ad','#c4b18a','#86795b'];
    const phase=e.type==='wirewing'?(e.anim||0)*9:(e.walk||0),stride=Math.sin(phase)*6,jaw=e.wind>0?3:e.lunge>0||e.bite>0?7:1;
    if(e.type==='wirewing'){
      const flap=Math.sin(phase)*15;
      for(const side of [-1,1]){shape(g,[[0,-7],[side*14,-18],[side*40,-28+flap],[side*31,-9+flap],[side*18,3],[side*8,-3]],['#bdac91','#8e8582','#535c69'],true);limb(g,[side*5,-8],[side*16,-18],[side*40,-28+flap],1.1,metal);}
      ellipse(g,0,-3,8,13,skin);shape(g,[[1,-11],[6,-24],[15,-19],[17,-11],[34,-7],[14,-4],[6,1]],skin);box(g,12,-16,3,2,'#fcbb66');limb(g,[-4,5],[-6,12],[-1,13],1.4,bone);limb(g,[4,5],[7,11],[11,11],1.4,bone);
    }else if(e.type==='turret'){
      shape(g,[[-17,0],[-11,-11],[-5,-12],[5,-12],[13,-7],[18,0]],metal);box(g,-16,-2,33,3,'#3d493d');ellipse(g,0,-20,13,11,metal);shape(g,[[-11,-22],[-8,-36],[3,-39],[15,-30],[27,-29],[28,-22],[12,-18]],skin,true);box(g,22,-28,11,5,'#344539');box(g,31,-27,3,3,'#bcba9b');box(g,8,-31,5,3,'#fa9d56');for(let i=0;i<4;i++)box(g,-12,-24+i*4,4,2,'#c0a367');
    }else if(e.type==='stalker'){
      for(let i=0;i<3;i++){const px=-17+i*16,s=Math.sin(phase+i)*5;limb(g,[px,-16],[px+s-8,-8],[px+s-13,0],2,metal);limb(g,[px+3,-14],[px-s+6,-6],[px-s+11,0],2,metal);}
      shape(g,[[-35,-20],[-22,-27],[-4,-31],[15,-27],[28,-33],[37,-27],[33,-17],[13,-13],[-13,-13],[-27,-16]],['#d2b8b8','#96839b','#605d73'],true);for(let i=0;i<5;i++)shape(g,[[-20+i*8,-24],[-17+i*8,-33],[-12+i*8,-23]],metal);box(g,26,-27,7,2,'#f5a4cd');
    }else if(e.type==='brute'){
      for(let i=0;i<3;i++)limb(g,[-20+i*18,-15],[-22+i*18+Math.sin(phase+i)*3,-7],[-18+i*18+Math.sin(phase+i)*4,0],4,metal);
      shape(g,[[-55,-22],[-35,-26],[-27,-39],[-10,-46],[10,-40],[24,-29],[37,-27],[44,-17],[29,-12],[10,-14],[-20,-12],[-37,-20]],['#d5bc81','#a89261','#685e43'],true);
      for(let i=0;i<5;i++)shape(g,[[-29+i*10,-26],[-27+i*10,-42+Math.abs(2-i)*2],[-22+i*10,-43+Math.abs(2-i)*2],[-18+i*10,-27]],metal);ellipse(g,-49,-24,9,7,metal);box(g,32,-24,5,2,'#ffc875');
    }else{
      const boss=e.type==='boss',scale=boss?1.48:1;g.scale(scale,scale);
      const step=stride/(boss?1.3:1);
      // Far leg, curved tail, torso, near leg, neck, skull and articulated jaw.
      limb(g,[-7,-23],[-12-step*.5,-13],[-8-step,0],3.3,['#929870','#5b6c4a','#394d36']);shape(g,[[-11-step,-3],[-1-step,-2],[3-step,1],[-12-step,1]],bone);
      shape(g,[[-48,-27],[-34,-29],[-22,-36],[-7,-40],[8,-36],[17,-24],[6,-14],[-13,-16],[-26,-26],[-38,-25]],skin,true);
      shape(g,[[-16,-24],[-5,-23],[6,-25],[7,-17],[-8,-15]],['#e3d5a1','#b8b586','#7f8762']);
      limb(g,[1,-22],[8+step*.4,-13],[4+step,0],4,skin);shape(g,[[step,-3],[step+10,-2],[step+14,1],[step-1,1]],bone);box(g,step+8,-2,1,3,ink);
      shape(g,[[6,-31],[11,-46],[23,-54],[32,-51],[34,-42],[29,-29],[18,-23]],skin,true);
      shape(g,[[20,-48],[25,-54],[35,-50],[39,-43],[48,-40],[46,-32],[31,-30],[23,-36]],skin,true);
      shape(g,[[29,-33],[43,-33],[43,-29+jaw],[32,-28+jaw],[25,-32]],bone);box(g,32,-33,12,2,'#493b2e');for(let i=0;i<4;i++)shape(g,[[32+i*3,-33],[34+i*3,-33],[33+i*3,-29]],bone);
      box(g,30,-44,9,4,'#3c4530');box(g,32,-43,5,2,e.type==='strider'?'#b0f1d6':'#ffca70');box(g,34,-43,1,3,ink);box(g,44,-38,2,1,ink);
      for(let i=0;i<4;i++)shape(g,[[-20+i*8,-34],[-18+i*8,-43],[ -13+i*8,-35]],metal);
      ellipse(g,-5,-28,6,6,metal);box(g,-8,-30,6,3,'#98d4b6');limb(g,[17,-30],[22,-23],[29,-25],1.5,skin);box(g,28,-26,4,2,'#f0deaf');
      if(e.type==='spitter'){for(let i=0;i<9;i++){const a=-Math.PI*.75+i*Math.PI/8;shape(g,[[19,-40],[19+Math.cos(a)*18,-40+Math.sin(a)*21],[22,-34]],['#c2a6a5','#97788d','#5c546b']);}shape(g,[[24,-49],[37,-46],[41,-38],[32,-33],[23,-36]],skin);box(g,31,-44,5,2,'#f8c778');ellipse(g,32,-30,6,5,['#dde5a4','#a9bd77','#728350']);}
      if(e.type==='strider'){shape(g,[[-17,-37],[-9,-42],[3,-40],[10,-35],[3,-32],[-15,-32]],['#d4b87d','#986e43','#5f5136']);box(g,-12,-34,3,17,'#a58955');box(g,-13,-30,5,5,'#72d3b9');box(g,8,-35,7,3,'#a7efe0');}
      if(boss){for(let i=0;i<4;i++)shape(g,[[22+i*4,-51],[23+i*4,-60-i%2*3],[26+i*4,-51]],bone);box(g,-16,-24,22,4,'#596953');box(g,-14,-23,18,1,e.variant==='omega'?'#dd9fca':'#9edfbe');}
    }
    g.restore();
    if(e.wind>0||e.phaseWind>0||e.variant&&e.special<.7){box(g,x-2,y-(e.type==='boss'?97:67),4,7,'#fff0b6');box(g,x-2,y-(e.type==='boss'?87:57),4,2,'#eb9b62');}
  }
  function explosion(g,blast,camera){
    const age=Math.max(0,1-blast.life/.5),x=blast.x-camera,y=blast.y,r=9+age*39;
    g.save();g.globalAlpha=Math.min(1,blast.life*4);
    for(let i=0;i<8;i++){const a=i*Math.PI/4,px=x+Math.cos(a)*r*.65,py=y+Math.sin(a)*r*.56-age*14;ellipse(g,px,py,7+age*11,6+age*10,['#d4c09a','#877b64','#4c544c']);}
    for(let i=0;i<7;i++){const a=i*Math.PI/3.5,px=x+Math.cos(a)*r*.38,py=y+Math.sin(a)*r*.38;ellipse(g,px,py,r*.47*(1-age*.4),r*.43,['#fff0b6','#f6b153','#c87437']);}
    ellipse(g,x,y,Math.max(2,12*(1-age)),Math.max(2,15*(1-age)),['#ffffdf','#fff0aa','#ffd376']);g.restore();
  }
  function supplies(g,c,camera){const x=Math.round(c.x-camera),y=c.y;shape(g,[[x-12,y],[x-12,y-31],[x-8,y-35],[x+12,y-35],[x+12,y]],['#dec28b','#ac8959','#705b3d']);for(let n=0;n<4;n++){box(g,x-10+n*6,y-31,1,29,'#5c5239');box(g,x-9+n*6,y-31,1,29,'#d6b478');}box(g,x-12,y-28,25,3,'#e2c48b');box(g,x-12,y-8,25,3,'#665941');for(const dx of [-9,8]){box(g,x+dx,y-27,2,2,'#424b3b');box(g,x+dx,y-7,2,2,'#d7d3a9');}}
  window.FossilArt={scene,terrain,detective,creature,explosion,supplies,ready:()=>!!atlas.complete&&!!atlas.naturalWidth};
})();
