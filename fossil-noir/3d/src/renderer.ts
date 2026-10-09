import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {LEVEL} from './level';
import type {EnemyKind,GameState,Settings,Wall,PickupKind} from './types';

type MobVisual={root:THREE.Group;legs:THREE.Group[];arms:THREE.Group[];head:THREE.Group;tail?:THREE.Group;kind:EnemyKind;dead:boolean};
const TAU=Math.PI*2;
const rnd=(n:number)=>{const x=Math.sin(n*127.1+91.7)*43758.5453;return x-Math.floor(x)};

/** Original, procedurally painted 64px textures; no network or borrowed game art. */
function texture(kind:string):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d')!;
 const palettes:Record<string,string[]>={brick:['#34313b','#48424d','#22242b'],metal:['#293d3c','#41564f','#102325'],concrete:['#3b4242','#4e5550','#293233'],crate:['#55503d','#777053','#242b27'],floor:['#242d2e','#353d39','#172323'],labfloor:['#334343','#455552','#1d3332'],road:['#21232c','#32343e','#14191f'],ceiling:['#20292b','#33443f','#111d1d'],door:['#33413e','#617266','#122622']};
 const p=palettes[kind]??palettes.metal;g.fillStyle=p[0];g.fillRect(0,0,64,64);
 for(let i=0;i<480;i++){g.fillStyle=i%3===0?p[1]:p[2];g.globalAlpha=.18+rnd(i)*.28;g.fillRect(Math.floor(rnd(i+1)*64),Math.floor(rnd(i+2)*64),1+(i%3),1)}g.globalAlpha=1;
 if(kind==='brick'){
  for(let row=0;row<4;row++){const y=row*16;g.fillStyle='#121e23';g.fillRect(0,y,64,2);for(let x=(row%2)*16;x<64;x+=32){g.fillRect(x,y,2,16);g.fillStyle='#64555a';g.fillRect(x+3,y+3,27,1);g.fillStyle='#121e23'}}
 }else if(kind==='metal'||kind==='ceiling'||kind==='door'){
  g.fillStyle=p[2];g.fillRect(0,0,64,3);g.fillRect(0,0,3,64);g.fillRect(0,31,64,2);g.fillRect(31,0,2,64);
  g.fillStyle='#9ba89d';for(const x of [5,27,37,59])for(const y of [5,27,37,59])g.fillRect(x,y,2,2);
  if(kind==='door'){g.fillStyle='#141e22';g.fillRect(7,7,50,50);g.fillStyle='#516d61';for(let y=9;y<54;y+=5)g.fillRect(9,y,46,2);g.fillStyle='#b99939';g.fillRect(0,54,64,7);g.fillStyle='#25261e';for(let x=-8;x<70;x+=12){g.beginPath();g.moveTo(x,61);g.lineTo(x+6,54);g.lineTo(x+12,54);g.lineTo(x+6,61);g.fill()}}
 }else if(kind==='crate'){
  g.fillStyle='#262d26';g.fillRect(0,0,64,5);g.fillRect(0,59,64,5);g.fillRect(0,0,5,64);g.fillRect(59,0,5,64);g.fillRect(28,0,7,64);g.fillRect(0,28,64,7);g.fillStyle='#ab9160';g.fillRect(7,7,50,2);
 }else if(kind==='floor'||kind==='labfloor'){
  g.fillStyle=p[2];g.fillRect(0,0,64,2);g.fillRect(0,0,2,64);g.fillRect(0,32,64,1);g.fillRect(32,0,1,64);
 }else if(kind==='concrete'){g.fillStyle='#253031';g.fillRect(0,0,64,2);for(let i=0;i<4;i++){g.fillRect(14+i*13,4,1,9+rnd(i)*19)}}
 const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestFilter;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;t.generateMipmaps=false;return t;
}
function signTexture(text:string,fg='#86ffb8',bg='#101b20',w=256,h=64){
 const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d')!;g.fillStyle=bg;g.fillRect(0,0,w,h);g.fillStyle=fg;g.fillRect(2,2,w-4,2);g.fillRect(2,h-4,w-4,2);g.fillRect(2,2,2,h-4);g.fillRect(w-4,2,2,h-4);
 const lines=text.split('/').map(x=>x.trim());g.textAlign='center';g.textBaseline='middle';let size=lines.length>1?19:22;size=Math.min(size,Math.floor((w-18)/(Math.max(...lines.map(l=>l.length))*.61)));g.font=`bold ${Math.max(8,size)}px monospace`;
 lines.forEach((line,i)=>g.fillText(line,w/2,h/2+(i-(lines.length-1)/2)*(size+5)));
 const t=new THREE.CanvasTexture(c);t.magFilter=t.minFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;t.generateMipmaps=false;return t;
}
function portraitTexture(){
 const c=document.createElement('canvas');c.width=64;c.height=80;const g=c.getContext('2d')!;g.fillStyle='#132126';g.fillRect(0,0,64,80);g.fillStyle='#2e594d';for(let i=0;i<80;i++)g.fillRect(rnd(i)*64|0,rnd(i+15)*80|0,2,4);g.fillStyle='#19252d';g.fillRect(16,39,36,32);g.fillStyle='#97654b';g.fillRect(24,20,20,27);g.fillStyle='#b78660';g.fillRect(26,21,15,21);g.fillStyle='#342731';g.fillRect(16,13,36,6);g.fillRect(21,7,23,9);g.fillStyle='#806454';g.fillRect(14,17,41,4);g.fillStyle='#131922';g.fillRect(27,28,17,3);g.fillRect(34,27,9,7);g.fillStyle='#81d9b5';g.fillRect(27,29,2,2);g.fillStyle='#382c2b';g.fillRect(29,39,10,3);g.fillStyle='#7f9e9a';g.fillRect(43,45,10,25);g.fillStyle='#313f47';for(let y=47;y<70;y+=5)g.fillRect(44,y,8,2);g.fillStyle='#fcba67';g.fillRect(47,48,2,2);g.fillStyle='#a0dabc';g.font='bold 6px monospace';g.textAlign='center';g.fillText('ELIAS VANE',32,76);const t=new THREE.CanvasTexture(c);t.magFilter=t.minFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;return t;
}

export class Renderer {
 private renderer:THREE.WebGLRenderer;
 private scene=new THREE.Scene();
 private camera=new THREE.PerspectiveCamera(76,1.6,.06,110);
 private mats=new Map<string,THREE.Material>();
 private batches=new Map<THREE.Material,THREE.BufferGeometry[]>();
 private doorGroups=new Map<string,THREE.Group>();
 private enemyGroups=new Map<string,MobVisual>();
 private pickupGroups=new Map<string,THREE.Group>();
 private lamps:THREE.Mesh[]=[];
 private hazmat:THREE.Mesh[]=[];
 private mountGroup:THREE.Group;
 private mountLegs:THREE.Group[]=[];
 private effectMesh:THREE.InstancedMesh;
 private effectMat:THREE.MeshBasicMaterial;
 private dummy=new THREE.Object3D();
 private snapGrid=new THREE.Vector2(160,100);
 private clock=0;
 private lastResolution='';
 private powerLamp?:THREE.Mesh;
 private lights:THREE.PointLight[]=[];
 constructor(private canvas:HTMLCanvasElement){
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false,powerPreference:'high-performance'});
  this.renderer.setPixelRatio(1);this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.NoToneMapping;
  this.scene.background=new THREE.Color(0x090f1a);this.scene.fog=new THREE.Fog(0x0a1820,13,68);
  this.camera.rotation.order='YXZ';
  const hemisphere=new THREE.HemisphereLight(0x99c3c8,0x203b29,1.45);this.scene.add(hemisphere);
  const moon=new THREE.DirectionalLight(0xa9bbd6,1.05);moon.position.set(-10,25,12);this.scene.add(moon);
  const green=new THREE.DirectionalLight(0x73efba,.65);green.position.set(7,9,-25);this.scene.add(green);
  for(const kind of ['brick','metal','concrete','crate','floor','labfloor','road','ceiling','door']){const m=new THREE.MeshLambertMaterial({map:texture(kind)});this.retroMaterial(m);this.mats.set(kind,m)}
  this.buildLevel();this.flush();
  for(const d of LEVEL.doors)this.buildDoor(d);
  for(const e of LEVEL.enemies){const mob=this.buildMob(e.kind);mob.root.position.set(e.x,0,e.z);this.enemyGroups.set(e.id,mob);this.scene.add(mob.root)}
  for(const p of LEVEL.pickups){const group=this.buildPickup(p.kind);group.position.set(p.x,.5,p.z);this.scene.add(group);this.pickupGroups.set(p.id,group)}
  const mount=this.buildMob('raptor',true);this.mountGroup=mount.root;this.mountLegs=mount.legs;this.mountGroup.scale.setScalar(1.55);this.mountGroup.position.set(LEVEL.mount.x,0,LEVEL.mount.z);this.mountGroup.rotation.y=-.7;this.scene.add(this.mountGroup);
  this.effectMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.9});this.effectMesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.08,.08,.08),this.effectMat,128);this.effectMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.effectMesh.count=0;this.effectMesh.frustumCulled=false;this.scene.add(this.effectMesh);
  this.canvas.style.imageRendering='pixelated';
 }
 // Quantised clip-space vertices recreate the subtle subpixel wobble of PS1 scenes.
 private retroMaterial(m:THREE.MeshLambertMaterial){
  m.onBeforeCompile=shader=>{shader.uniforms.retroGrid={value:this.snapGrid};shader.vertexShader='uniform vec2 retroGrid;\n'+shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)};
  m.customProgramCacheKey=()=> 'fossil-retro-vertex-v1';
 }
 private mat(color:number,emissive=0,flat=true):THREE.Material {
  const key=`c${color}-${emissive}`;let m=this.mats.get(key);if(!m){m=new THREE.MeshLambertMaterial({color,emissive,flatShading:flat});this.retroMaterial(m as THREE.MeshLambertMaterial);this.mats.set(key,m)}return m;
 }
 private basic(color:number):THREE.Material {
  const key=`b${color}`;let m=this.mats.get(key);if(!m){m=new THREE.MeshBasicMaterial({color});this.mats.set(key,m)}return m;
 }
 private addGeometry(geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number,rx=0,ry=0,rz=0){
  const m=new THREE.Matrix4().compose(new THREE.Vector3(x,y,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz)),new THREE.Vector3(1,1,1));geo.applyMatrix4(m);if(!geo.attributes.normal)geo.computeVertexNormals();
  const group=this.batches.get(mat)||[];group.push(geo);this.batches.set(mat,group);
 }
 private box(x:number,y:number,z:number,w:number,h:number,d:number,mat:THREE.Material,ry=0){
  const geo=new THREE.BoxGeometry(w,h,d);const pos=geo.attributes.position,normal=geo.attributes.normal,uv=geo.attributes.uv;
  for(let i=0;i<pos.count;i++){const nx=Math.abs(normal.getX(i)),ny=Math.abs(normal.getY(i));uv.setXY(i,nx>.5?pos.getZ(i)/2:pos.getX(i)/2,ny>.5?pos.getZ(i)/2:pos.getY(i)/2)}
  this.addGeometry(geo,mat,x,y,z,0,ry);
 }
 private flush(){for(const [mat,geos]of this.batches){const merged=mergeGeometries(geos,false)!;this.scene.add(new THREE.Mesh(merged,mat));for(const g of geos)g.dispose()}this.batches.clear()}
 private sign(text:string,x:number,y:number,z:number,width=3,height=.8,ry=0,fg='#86ffb8',bg='#101b20'){
  const t=signTexture(text,fg,bg);const m=new THREE.MeshBasicMaterial({map:t,side:THREE.DoubleSide});this.mats.set(`sign-${this.mats.size}`,m);const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,height),m);mesh.position.set(x,y,z);mesh.rotation.y=ry;this.scene.add(mesh);return mesh;
 }
 private lamp(x:number,y:number,z:number,color=0x88ffc0,vertical=false){
  this.box(x,y,z,vertical?.08:1.2,vertical?1.9:.09,.1,this.mat(0xb3ead0,color));
  const bulb=new THREE.Mesh(new THREE.BoxGeometry(vertical?.09:1.22,vertical?1.95:.1,.11),this.basic(color));bulb.position.set(x,y,z+.015);this.scene.add(bulb);this.lamps.push(bulb);
 }
 private buildLevel(){
  const M=(k:string)=>this.mats.get(k)!;
  this.box(-.7,-.12,-20,35,.2,69,M('road'));
  // Surface changes communicate each sector even at the native 320x200 resolution.
  this.box(0,-.005,8,10.5,.08,8.1,M('floor'));this.box(0,-.005,-26,14,.08,12.1,M('labfloor'));
  this.box(11.3,-.005,-28,8,.08,8,M('floor'));this.box(0,-.005,-39,20,.08,14,M('labfloor'));
  this.box(-7,-.005,-49,8,.08,6,M('metal'));this.box(-15.4,-.005,-7,4,.08,6,M('floor'));
  this.box(0,4.05,8,10.6,.12,8.3,M('ceiling'));this.box(0,4.5,-26,14.4,.12,12.2,M('ceiling'));
  this.box(11.3,4.5,-28,8.3,.12,8.3,M('ceiling'));this.box(0,4.5,-39,20.4,.12,14,M('ceiling'));this.box(-7,4.5,-49,8.3,.12,6.3,M('ceiling'));
  this.box(-15.4,4,-7,4.2,.1,6.2,M('ceiling'));
  for(const w of LEVEL.walls){this.box(w.x,(w.y??0)+w.h/2,w.z,w.w,w.h,w.d,M(w.material));
   if(w.h>3&&w.d<1){this.box(w.x,.15,w.z+.03,w.w,.25,w.d+.04,this.mat(0x17292b));this.box(w.x,3.08,w.z+.035,w.w,.1,w.d+.08,this.mat(0x3f6157))}
  }
  // Exterior high rises, trim, windows, rooftop machinery and exposed city skyline.
  for(let side=-1;side<=1;side+=2)for(let j=0;j<5;j++){
   const z=1-j*5;const h=8+rnd(j+side+10)*10,x=side*17;
   this.box(x,h/2,z,6,h,4.5,M('brick'));this.box(x,h+.2,z,6.4,.4,4.8,this.mat(0x182934));
   for(let y=4.8;y<h-1;y+=2.3)for(let k=0;k<2;k++){
    const wx=side*13.95;this.box(wx,y,z-1+k*2,.1,1.2,.9,this.mat((j+k)%3===0?0x668b79:0x1b303d,(j+k)%3===0?0x284b38:0));
    this.box(wx-side*.04,y-.64,z-1+k*2,.25,.12,1.15,this.mat(0x0f1922));
   }
   this.box(x+side*.4,h+.8,z,.4,1.2,1.7,M('metal'));this.box(x,h+2.5,z,.12,4,.12,this.mat(0x445b68));
  }
  for(let i=0;i<10;i++){
   const x=-35+i*8,h=15+rnd(i+30)*27,z=-63-rnd(i+41)*18;this.box(x,h/2,z,5,h,6,this.mat(0x152331));
   for(let y=4;y<h;y+=4)this.box(x,y,z+3.04,3.5,.15,.08,this.basic(0x274f47));
  }
  // Street sidewalk edges and luminous windows in the street facing walls.
  for(const x of [-11.8,11.8]){this.box(x,.045,-8,2.6,.15,24,M('concrete'));this.box(x+Math.sign(x)*.9,1.2,-8,.06,.08,22,this.mat(0x385346))}
  for(const side of [-1,1])for(let i=0;i<5;i++){
   const z=1-i*4.4;this.box(side*12.94,2.65,z,.08,1.8,1.7,this.mat(0x172c32));
   for(let k=-1;k<=1;k++)this.box(side*12.88,2.65,z+k*.58,.07,1.8,.045,this.mat(0x59675c));
   this.box(side*12.85,1.72,z,.13,.15,1.9,M('metal'));
   if(i%2===0)this.lamp(side*12.84,3.95,z,i===2?0xdb496f:0x76e4bb,false);
  }
  // Ceiling structure with vents and industrial strips; low mesh count via batching.
  for(const z of [6,10,-22,-27,-30,-34,-38,-42,-49]){
   const lab=z<-31&&z>-46;this.box(0,3.91,z,lab?20:9,.18,.25,M('metal'));
   this.lamp(z<-46?-7:0,z>0?3.79:4.22,z,0xb0efc0);this.box(3,4.12,z,1.5,.08,.8,M('metal'));
   for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,z,.06,.035,.65,this.mat(0x12252a));
  }
  for(const h of LEVEL.hazards){const material=new THREE.MeshBasicMaterial({color:0x408a3c,transparent:true,opacity:.76});this.mats.set(`hazard-${h.x}`,material);const mesh=new THREE.Mesh(new THREE.PlaneGeometry(h.w,h.d),material);mesh.rotation.x=-Math.PI/2;mesh.position.set(h.x,.11,h.z);this.scene.add(mesh);this.hazmat.push(mesh);
   this.box(h.x,h.x<0?.14:.02,h.z,h.w+.2,.1,h.d+.2,this.mat(0x203c2d));for(let i=0;i<8;i++)this.box(h.x+(rnd(i)-.5)*h.w,.13,h.z+(rnd(i+13)-.5)*h.d,.12,.05,.12,this.basic(0x92d777))
  }
  // Original props and small environmental stories.
  for(const p of LEVEL.props){
   const x=p.x,z=p.z,r=p.rotation??0;
   if(['neon','office-sign','facility-sign','sign'].includes(p.kind)){
    const isNeon=p.kind==='neon';const y=p.kind==='office-sign'?3.05:p.kind==='facility-sign'?4.15:isNeon?4.9:3.6;
    this.sign(p.label??'',x,y,z,p.kind==='facility-sign'?9:isNeon?4.8:5,p.kind==='facility-sign'?1.3:.85,r,isNeon&&z<-3?'#ff7095':'#96ffc9');
   }else if(p.kind==='portrait'){
    const material=new THREE.MeshBasicMaterial({map:portraitTexture()});this.mats.set('portrait',material);const mesh=new THREE.Mesh(new THREE.PlaneGeometry(.9,1.12),material);mesh.position.set(x,2.1,z);mesh.rotation.y=Math.PI;this.scene.add(mesh);this.box(x,2.1,z+.08,1.04,1.27,.06,this.mat(0x5b5b42));
   }else if(p.kind==='office-board'){
    this.box(x,2,z,.08,1.7,3.7,this.mat(0x514c3c));this.sign(p.label??'',x-.06,2.55,z,2.8,.38,r,'#cecfaa','#32392e');
    for(let i=0;i<7;i++)this.box(x-.07,1.8+rnd(i)*.5,z+(rnd(i+10)-.5)*2.8,.035,.42,.31,this.mat(i%2?0xbaa995:0x7e9985));
   }else if(['terminal','console'].includes(p.kind)){
    this.box(x,1.4,z,.85,.65,.12,this.mat(0x142c30));this.box(x,1.4,z+.07,.65,.45,.02,this.basic(0x3a9970));
    for(let i=0;i<4;i++)this.box(x-.2,1.53-i*.08,z+.085,.32-rnd(i)*.1,.025,.01,this.basic(0x9cdfa9));
    this.box(x,1.02,z+.2,.9,.08,.5,this.mat(0x4a5954));
   }else if(p.kind==='lamp'){
    this.box(x,1.9,z,.13,3.8,.13,this.mat(0x405a55));this.box(x,3.7,z-.35,.12,.12,.8,this.mat(0x405a55));this.lamp(x,3.61,z-.68,0xafefcb);
   }else if(p.kind==='car'){
    this.box(x,1,z,1.8,.65,3.6,this.mat(0x493342),r);this.box(x,1.62,z-.2,1.58,.8,1.8,this.mat(0x293944),r);
    this.box(x,1.63,z+.76,1.4,.48,.08,this.mat(0x183139),r);for(const sx of [-.97,.97])for(const sz of [-1.15,1.15])this.addGeometry(new THREE.CylinderGeometry(.39,.39,.24,8),this.mat(0x121d23),x+sx,.46,z+sz,0,0,Math.PI/2);
    this.box(x,.78,z+1.86,1.1,.16,.08,this.basic(0x6b2336));this.box(x+.5,1.5,z,.04,.02,1.5,this.mat(0x949383),.3);
   }else if(p.kind==='barrels'){
    for(let i=0;i<3;i++){const bx=x+(i%2)*.68,bz=z+Math.floor(i/2)*.7;this.addGeometry(new THREE.CylinderGeometry(.29,.3,1,8),this.mat(i===2?0x5a5038:0x275043),bx,.5,bz);this.addGeometry(new THREE.CylinderGeometry(.31,.31,.07,8),this.mat(0x102c2b),bx,.22,bz);this.addGeometry(new THREE.CylinderGeometry(.31,.31,.07,8),this.mat(0x102c2b),bx,.78,bz);this.box(bx,.6,bz+.3,.17,.19,.02,this.basic(0xd5ad4d))}
   }else if(p.kind==='rubble'){
    for(let i=0;i<12;i++)this.box(x+(rnd(i)-.5)*2,.18+rnd(i+10)*.18,z+(rnd(i+20)-.5)*2,.3+rnd(i+30)*.6,.25+rnd(i+40)*.4,.25+rnd(i+50)*.6,M('concrete'),rnd(i+60)*TAU);
   }else if(p.kind==='tank'){
    this.addGeometry(new THREE.CylinderGeometry(.6,.65,.27,8),M('metal'),x,.14,z);this.addGeometry(new THREE.CylinderGeometry(.55,.55,2.5,8),this.mat(0x246447,0x103921),x,1.52,z);
    this.addGeometry(new THREE.CylinderGeometry(.65,.65,.28,8),M('metal'),x,2.91,z);this.box(x-.32,1.6,z+.45,.15,2.3,.15,this.basic(0x65cb85));this.box(x,1.8,z+.52,.28,.6,.16,this.mat(0x73ac66));
    this.box(x,1.4,z+.53,.53,.46,.12,this.mat(0x5a7b51));this.box(x-.18,.8,z+.49,.12,.8,.15,this.mat(0x5a7b51));this.box(x+.18,.8,z+.49,.12,.8,.15,this.mat(0x5a7b51));
   }else if(p.kind==='pipe'){
    this.addGeometry(new THREE.CylinderGeometry(.15,.15,12,6),this.mat(0x456b61),x,3.3,z,Math.PI/2);for(let i=-2;i<=2;i++)this.addGeometry(new THREE.CylinderGeometry(.19,.19,.14,6),this.mat(0x173638),x,3.3,z+i*2.4,Math.PI/2);
   }else if(p.kind==='lab-table'){
    this.box(x,1.27,z,3.9,.15,1.7,this.mat(0x59746a));this.box(x,1.47,z,1.4,.26,.6,this.mat(0x615c42));for(let i=0;i<4;i++)this.box(x+(i-1.5)*.3,1.65,z,.16,.25,.18,this.mat(0x65866c));
   }else if(p.kind==='locker'){
    this.box(x,1.25,z,.65,2.5,.85,M('metal'));this.box(x-.34,1.3,z,.025,.15,.17,this.basic(0x9fc7ab));
   }else if(p.kind==='power'){
    this.box(x,1.15,z,.95,2.3,.45,M('metal'));this.sign('LIFT POWER',x,1.8,z+.24,1,.26);this.sign('E / ACTIVATE',x,1.48,z+.24,.9,.2,0,'#e8ca69');
    this.powerLamp=new THREE.Mesh(new THREE.BoxGeometry(.23,.26,.04),this.basic(0xff6633));this.powerLamp.position.set(x,1.12,z+.25);this.scene.add(this.powerLamp);this.box(x,.7,z+.28,.18,.35,.1,this.mat(0xbab285));
   }else if(p.kind==='checkpoint'){
    this.sign('LOBBY / SECURITY →',0,3.65,-24.5,5,.55);this.box(-6.94,1.5,z,.08,1.5,.8,this.mat(0x263f3b));this.sign('SAFE / CHECKPOINT',-6.88,1.6,z,1,.4,Math.PI/2);
   }else if(p.kind==='exit'){
    this.sign('EXTRACTION / LEVEL 01',x,2.4,-51.91,5,.9);this.box(x,.05,z,6,.16,4,M('metal'));for(let i=0;i<5;i++)this.box(x,.17,z-2+i,6,.03,.12,this.mat(0xac973d));
   }else if(p.kind==='warning'){
    this.sign('AXIOM / PROJECT LAZARUS',0,3.8,-45.62,7,.8);this.sign(p.label??'',10,3.3,z,4,.65,-Math.PI/2,'#ff6b56');
   }else if(p.kind==='street-mark'){
    for(let i=0;i<3;i++)this.box(x,.05,z+(i-1)*1.8,.18,.03,.9,this.mat(0x8c946b));
   }else if(p.kind==='drain'){
    this.box(x,.04,z,1.7,.08,.6,this.mat(0x0a181d));for(let i=0;i<12;i++)this.box(x-.8+i*.14,.095,z,.055,.02,.5,this.mat(0x52645c));
   }else if(p.kind==='corpse'||p.kind==='skeleton'){
    this.box(x,.17,z,.45,.3,1.5,this.mat(p.kind==='corpse'?0x4d3041:0xa2a18a),.55);this.box(x-.24,.16,z+.75,.35,.23,.34,this.mat(0x767767));this.box(x,.025,z+.15,1.7,.02,2,this.mat(0x4d1627));
   }else if(p.kind==='chair'){
    this.box(x,.55,z,.6,.12,.6,this.mat(0x383741));this.box(x,.97,z+.25,.6,.8,.09,this.mat(0x393841));for(const sx of [-.23,.23])for(const sz of [-.23,.23])this.box(x+sx,.28,z+sz,.06,.5,.06,M('metal'));
   }else if(p.kind==='bottles'){
    for(let i=0;i<3;i++)this.addGeometry(new THREE.CylinderGeometry(.06,.1,.3,5),this.mat(0x416e48),x+i*.18,1,z);
   }else if(p.kind==='secret-table'){
    this.box(x,.75,z,2.3,.14,1.1,this.mat(0x4b4738));this.sign('MARA WAS HERE',-17,2.5,-7,3,.6,Math.PI/2,'#eecc91');
   }
  }
  // A handful of local lights, rather than a light per luminous decorative prop.
  for(const pos of [[0,2.6,7],[0,3,-26],[0,3,-39],[8,3,-8],[-9,3,-7]]){
   const l=new THREE.PointLight(pos[2]===-7?0xcf366e:0x54d799,7,12,2);l.position.set(pos[0],pos[1],pos[2]);this.lights.push(l);this.scene.add(l);
  }
 }
 private mesh(geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number,parent:THREE.Group){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);parent.add(m);return m}
 private localBox(parent:THREE.Group,x:number,y:number,z:number,w:number,h:number,d:number,color:number,emissive=0){return this.mesh(new THREE.BoxGeometry(w,h,d),this.mat(color,emissive),x,y,z,parent)}
 private buildDoor(d:typeof LEVEL.doors[number]){
  const group=new THREE.Group();group.position.set(d.x,0,d.z);this.mesh(new THREE.BoxGeometry(d.w,3.2,d.d),this.mats.get('door')!,0,1.6,0,group);
  const horizontal=d.w>d.d;if(horizontal){this.localBox(group,0,1.58,d.d/2+.015,d.w*.85,.08,.035,0x73ad88);this.localBox(group,d.w*.35,1.3,d.d/2+.03,.15,.25,.03,d.locked?0xee7b36:0x78eab0,0x225532)}else this.localBox(group,-d.w/2-.015,1.58,0,.035,.08,d.d*.85,0x73ad88);
  this.scene.add(group);this.doorGroups.set(d.id,group);
  const sx=horizontal?d.x:d.x-.3,sz=horizontal?d.z+.33:d.z;this.sign(d.label,sx,3.57,sz,horizontal?Math.min(d.w+1.4,5):2.4,.5,horizontal?0:-Math.PI/2,d.locked?'#ffb05d':'#8ccdaa');
 }
 private buildMob(kind:EnemyKind,mount=false):MobVisual {
  const root=new THREE.Group(),head=new THREE.Group(),legs:THREE.Group[]=[],arms:THREE.Group[]=[];
  if(kind==='raptor'){
   const color=mount?0x8f8151:0x576f43,accent=mount?0xbbac71:0x789853;
   this.localBox(root,0,.88,0,.53,.5,1.03,color);this.mesh(new THREE.OctahedronGeometry(.4,0),this.mat(accent),0,1.12,-.33,root);
   head.position.set(0,1.48,-.53);root.add(head);this.localBox(head,0,0,-.12,.37,.32,.5,accent);this.localBox(head,0,-.07,-.45,.31,.17,.45,color);this.localBox(head,0,-.17,-.44,.3,.055,.43,0xb9ae88);
   for(const side of [-1,1]){
    this.localBox(head,side*.194,.07,-.18,.02,.07,.12,mount?0xf0e895:0xff4934,0x771509);
    const leg=new THREE.Group();leg.position.set(side*.27,.68,.12);this.localBox(leg,0,-.08,0,.2,.5,.32,color);this.localBox(leg,0,-.43,-.04,.1,.45,.11,accent);this.localBox(leg,0,-.64,-.2,.16,.11,.4,0x949475);this.localBox(leg,side*.075,-.64,-.42,.045,.07,.16,0xd0cab3);legs.push(leg);root.add(leg);
    const arm=new THREE.Group();arm.position.set(side*.33,1,-.44);this.localBox(arm,0,-.15,-.12,.09,.34,.13,color);this.localBox(arm,0,-.28,-.22,.1,.065,.21,0xc1baa3);arms.push(arm);root.add(arm);
   }
   const tail=new THREE.Group();tail.position.set(0,1,.48);const t=this.mesh(new THREE.ConeGeometry(.23,1.5,4),this.mat(color),0,0,.68,tail);t.rotation.x=Math.PI/2;root.add(tail);
   for(let i=0;i<5;i++)this.localBox(root,0,1.2-i*.04,.05+i*.19,.08,.2,.12,0x303c29);
   if(mount){this.localBox(root,0,1.26,.02,.7,.18,.6,0x302d2f);this.localBox(root,0,1.4,.18,.58,.25,.13,0x5e5043);for(const s of [-1,1])this.localBox(root,s*.35,1.03,0,.07,.5,.65,0x333a36)}
   return {root,legs,arms,head,tail,kind,dead:false};
  }
  const brute=kind==='brute',soldier=kind==='soldier',skin=soldier?0x9a8770:brute?0x775650:0x77905c;
  const armor=soldier?0x405568:brute?0x642e36:0x464b34;
  this.localBox(root,0,1.1,0,brute?.94:.58,.82,.36,skin);this.localBox(root,0,1.15,.06,brute?1:.64,.7,.43,armor);
  this.localBox(root,0,.66,0,.52,.22,.38,0x353740);head.position.set(0,1.72,-.01);root.add(head);
  this.localBox(head,0,0,0,.4,.4,.38,skin);
  if(soldier){this.localBox(head,0,.1,.025,.46,.35,.44,0x313f50);this.localBox(head,0,.025,-.211,.35,.09,.03,0x57e6cf,0x17675f);this.localBox(root,0,1.25,-.24,.34,.29,.1,0x779289);this.localBox(root,.05,1.22,-.305,.18,.08,.035,0xe5894c)}
  else{this.localBox(head,0,-.05,-.211,.26,.17,.03,0x38211f);this.localBox(head,0,-.04,-.23,.22,.035,.02,0xc3b98c);for(const sx of [-.12,.12])this.localBox(head,sx,.07,-.207,.07,.045,.03,0xff573c,0x661500)}
  for(const side of [-1,1]){
   const leg=new THREE.Group();leg.position.set(side*(brute?.3:.19),.68,0);this.localBox(leg,0,-.25,0,.2,.53,.26,armor);this.localBox(leg,0,-.57,-.07,.24,.16,.36,0x1d2b32);legs.push(leg);root.add(leg);
   const arm=new THREE.Group();arm.position.set(side*(brute?.59:.39),1.45,0);this.localBox(arm,0,-.28,0,brute?.3:.2,.65,.25,skin);this.localBox(arm,0,-.06,0,brute?.38:.28,.25,.35,armor);this.localBox(arm,0,-.55,-.06,.2,.17,.22,skin);arms.push(arm);root.add(arm);
   if(!soldier){const spike=this.mesh(new THREE.ConeGeometry(.12,.36,4),this.mat(0xb3ab89),side*(brute?.48:.36),1.62,0,root);spike.rotation.z=-side*.55}
  }
  if(soldier){this.localBox(arms[1],-.15,-.5,-.31,.18,.22,.6,0x182d36);this.localBox(arms[1],-.15,-.43,-.68,.06,.075,.25,0x61766d)}
  if(brute){root.scale.setScalar(1.47);this.localBox(root,0,1.15,-.25,.35,.38,.14,0x7d8170);this.localBox(root,0,1.15,-.335,.13,.13,.035,0x56fb97,0x087e27)}
  return {root,legs,arms,head,kind,dead:false};
 }
 private buildPickup(kind:PickupKind){
  const group=new THREE.Group();const palette:Record<PickupKind,number>={health:0xeabda1,armor:0x4ba9b4,ammo:0xc39945,keycard:0x78ee9d,evidence:0xc8b786,revolver:0xaebcb1,shotgun:0x8b9c91,plasma:0x63e89b,machinegun:0x768785};const col=palette[kind];
  if(kind==='health'){this.localBox(group,0,0,0,.55,.34,.3,0xc4d1bf);this.localBox(group,0,0,.16,.3,.08,.015,0xc64141);this.localBox(group,0,0,.161,.08,.27,.015,0xc64141)}
  else if(kind==='armor'){this.localBox(group,0,0,0,.45,.42,.24,col);this.localBox(group,0,.26,0,.22,.13,.2,0x93c7b3);for(const s of [-1,1])this.localBox(group,s*.27,.1,0,.1,.3,.22,col)}
  else if(kind==='ammo'){this.localBox(group,0,0,0,.5,.3,.35,0x59694b);for(let i=0;i<4;i++)this.localBox(group,-.17+i*.115,.19,0,.055,.15,.065,col)}
  else if(kind==='keycard'){this.localBox(group,0,0,0,.35,.23,.02,0x88bc9a);this.localBox(group,0,.04,-.015,.33,.04,.02,0x213d33);this.localBox(group,.08,-.06,-.016,.07,.055,.02,0xe5cd77)}
  else if(kind==='evidence'){this.localBox(group,0,0,0,.42,.02,.48,col);for(let i=0;i<5;i++)this.localBox(group,0,.016,-.15+i*.07,.24,.009,.018,0x495747)}
  else{this.localBox(group,0,0,0,kind==='revolver'?.35:.7,.13,.2,col);this.localBox(group,.27,0,0,.4,.06,.07,0x64786f);this.localBox(group,-.11,-.15,0,.12,.22,.12,0x403c32);if(kind==='plasma')this.localBox(group,0,.07,-.105,.37,.06,.035,0x79f6b2,0x145738)}
  const ring=new THREE.Mesh(new THREE.RingGeometry(.28,.36,12),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:.6,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=-.43;group.add(ring);
  return group;
 }
 resize(settings:Settings){
  const width=settings.resolution==='320'?320:640,height=settings.resolution==='320'?200:400;this.renderer.setSize(width,height,false);this.snapGrid.set(width/2,height/2);
  const rect=this.canvas.getBoundingClientRect();this.camera.aspect=rect.width&&rect.height?rect.width/rect.height:1.6;this.camera.updateProjectionMatrix();this.lastResolution=settings.resolution;
  for(const l of this.lights)l.visible=settings.quality==='high';
 }
 render(state:GameState,dt:number,settings:Settings){
  if(this.lastResolution!==settings.resolution)this.resize(settings);this.clock+=dt;const p=state.player;
  const eye=p.crouching?.9:p.mounted?2.6:1.65;const speedBob=state.status==='playing'?Math.sin(this.clock*(p.mounted?9:11))*(p.mounted?.025:.009):0;
  this.camera.position.set(p.x,p.y+eye+speedBob,p.z);this.camera.rotation.set(p.pitch+(p.recoil*.012),p.yaw,0,'YXZ');
  for(const d of state.doors){const g=this.doorGroups.get(d.id);if(g)g.position.y=d.open*3.4}
  for(const e of state.enemies){
   const m=this.enemyGroups.get(e.id)!;m.root.position.set(e.x,0,e.z);
   if(e.alive){m.root.rotation.y=Math.atan2(-(p.x-e.x),-(p.z-e.z));m.root.rotation.z=0;m.root.position.y=0;
    const stride=Math.sin(e.phase*6)*(e.alert?.72:.13);m.legs.forEach((l,i)=>l.rotation.x=stride*(i%2?1:-1));m.arms.forEach((a,i)=>{a.rotation.x=(m.kind==='soldier'?-.4:0)-stride*(i%2?1:-1)*.5});
    if(m.tail)m.tail.rotation.y=Math.sin(e.phase*3)*.18;m.head.rotation.z=e.hurt>0?Math.sin(this.clock*45)*.09:0;
    m.root.scale.y=(m.kind==='brute'?1.47:1)*(e.hurt>0?.94:1);m.dead=false;
   }else{
    m.root.position.y=.1;m.root.rotation.z=Math.PI/2;m.root.rotation.x=.15;m.root.scale.y=m.kind==='brute'?1.47:1;
    if(!m.dead){const blood=new THREE.Mesh(new THREE.CircleGeometry(m.kind==='brute'?1:.6,9),new THREE.MeshBasicMaterial({color:0x681c32,side:THREE.DoubleSide}));blood.rotation.x=-Math.PI/2;blood.position.set(e.x,.018,e.z);this.scene.add(blood);m.dead=true}
   }
  }
  for(const item of state.pickups){const g=this.pickupGroups.get(item.id)!;g.visible=!item.collected;if(g.visible){g.position.y=.48+Math.sin(this.clock*3+item.x)*.06;g.rotation.y=this.clock*.75}}
  this.mountGroup.visible=!p.mounted;this.mountGroup.position.set(state.mount.x,0,state.mount.z);this.mountLegs.forEach((l,i)=>l.rotation.x=Math.sin(this.clock*2+i*Math.PI)*.04);
  if(this.powerLamp)(this.powerLamp.material as THREE.MeshBasicMaterial).color.setHex(state.powered?0x73ff99:0xff6633);
  for(let i=0;i<this.lamps.length;i++)this.lamps[i].visible=Math.sin(this.clock*3+i*1.73)>.0||i%4!==1||Math.sin(this.clock*31+i)>-.7;
  for(let i=0;i<this.hazmat.length;i++){const m=this.hazmat[i].material as THREE.MeshBasicMaterial;m.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+i),.19)}
  let count=0;for(const fx of state.effects){
   const c=fx.kind==='blood'?0xbc3446:fx.kind==='plasma'?0x6effa1:fx.kind==='smoke'?0x647b78:0xffd280;
   const age=1-fx.life/fx.maxLife;for(let i=0;i<(fx.kind==='muzzle'?3:7)&&count<128;i++){
    const spread=fx.kind==='smoke'?.32:fx.kind==='plasma'?.06:.22;this.dummy.position.set(fx.x+(rnd(i+fx.x)-.5)*age*spread*5+(fx.dx??0)*age*.4,fx.y+(rnd(i+fx.z)-.3)*age*spread*3,fx.z+(rnd(i+13)-.5)*age*spread*5+(fx.dz??0)*age*.4);
    this.dummy.scale.setScalar(fx.kind==='smoke'?(1+age*4):Math.max(.25,1-age));this.dummy.updateMatrix();this.effectMesh.setMatrixAt(count,this.dummy.matrix);this.effectMesh.setColorAt(count,new THREE.Color(c));count++;
   }
  }
  this.effectMesh.count=count;this.effectMesh.instanceMatrix.needsUpdate=true;if(this.effectMesh.instanceColor)this.effectMesh.instanceColor.needsUpdate=true;
  this.renderer.render(this.scene,this.camera);
 }
 dispose(){
  const geometries=new Set<THREE.BufferGeometry>();this.scene.traverse(o=>{if(o instanceof THREE.Mesh)geometries.add(o.geometry)});for(const g of geometries)g.dispose();
  for(const mat of this.mats.values()){const map=(mat as THREE.MeshLambertMaterial).map;map?.dispose();mat.dispose()}this.effectMat.dispose();this.renderer.dispose();
 }
}
