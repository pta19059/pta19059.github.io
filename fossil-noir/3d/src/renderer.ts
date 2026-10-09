import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {LEVEL} from './level';
import {createRetroTexture,createDecal,type DecalKind} from './retro-textures';
import {Atmosphere} from './atmosphere';
import {buildSetDressing} from './set-dressing';
import {buildDistrict} from './district';
import {createCreatureTexture} from './creature-textures';
import {buildCreatureRig,updateCreatureRig,type CreatureRig} from './creature-rig';
import type {EnemyKind,GameState,Settings,Wall,PickupKind,DestructibleDef} from './types';

const TAU=Math.PI*2;
const rnd=(n:number)=>{const x=Math.sin(n*127.1+91.7)*43758.5453;return x-Math.floor(x)};

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
 private enemyGroups=new Map<string,CreatureRig>();
 private pickupGroups=new Map<string,THREE.Group>();
 private propGroups=new Map<string,THREE.Group>();
 private propRuins=new Map<string,THREE.Group>();
 private muzzleLight=new THREE.PointLight(0xffd29a,0,8,2);
 private blastLight=new THREE.PointLight(0xff932e,0,15,2);
 private lamps:THREE.Mesh[]=[];
 private hazmat:THREE.Mesh[]=[];
 private mountRig:CreatureRig;
 private mountHeading=-.7;
 private lastMountPosition?:{x:number;z:number};
 private effectMesh:THREE.InstancedMesh;
 private effectMat:THREE.MeshBasicMaterial;
 private dummy=new THREE.Object3D();
 private snapGrid=new THREE.Vector2(160,100);
 private clock=0;
 private cameraStride=0;
 private cameraMotion=0;
 private previousPlayer?:{x:number;z:number;time:number};
 private lastResolution='';
 private powerLamp?:THREE.Mesh;
 private lights:THREE.PointLight[]=[];
 private atmosphere:Atmosphere;
 constructor(private canvas:HTMLCanvasElement){
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false,powerPreference:'high-performance'});
  this.renderer.setPixelRatio(1);this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.NoToneMapping;
  this.scene.background=new THREE.Color(0x070910);this.scene.fog=new THREE.Fog(0x10151f,24,94);
  this.camera.rotation.order='YXZ';
  // Neutral fill reveals painted surfaces; local amber, magenta and green lights define districts.
  const hemisphere=new THREE.HemisphereLight(0xb9c9df,0x615951,1.38);this.scene.add(hemisphere);
  const moon=new THREE.DirectionalLight(0xb9c8e3,1.12);moon.position.set(-10,25,12);this.scene.add(moon);
  const warm=new THREE.DirectionalLight(0xffd3a2,.42);warm.position.set(-18,8,3);this.scene.add(warm);
  const green=new THREE.DirectionalLight(0x83eebc,.22);green.position.set(7,9,-25);this.scene.add(green);
  this.scene.add(this.muzzleLight,this.blastLight);
  for(const kind of ['brick','metal','concrete','crate','floor','labfloor','road','ceiling','door','fuel']){const m=new THREE.MeshLambertMaterial({map:createRetroTexture(kind)});this.retroMaterial(m);this.mats.set(kind,m)}
  this.buildLevel();this.flush();
  for(const d of LEVEL.doors)this.buildDoor(d);
  for(const prop of LEVEL.destructibles??[])this.buildDestructible(prop);
  for(const e of LEVEL.enemies){const mob=buildCreatureRig(e.kind,false,(color,emissive=0)=>this.creatureMaterial(e.kind,false,color,emissive));mob.root.position.set(e.x,0,e.z);this.enemyGroups.set(e.id,mob);this.scene.add(mob.root)}
  for(const p of LEVEL.pickups){const group=this.buildPickup(p.kind);group.position.set(p.x,.5,p.z);this.scene.add(group);this.pickupGroups.set(p.id,group)}
  this.mountRig=buildCreatureRig('raptor',true,(color,emissive=0)=>this.creatureMaterial('raptor',true,color,emissive));this.mountRig.root.position.set(LEVEL.mount.x,0,LEVEL.mount.z);this.mountRig.root.rotation.y=this.mountHeading;this.scene.add(this.mountRig.root);
  this.effectMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.94,depthWrite:false});this.effectMesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.08,.08,.08),this.effectMat,192);this.effectMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.effectMesh.count=0;this.effectMesh.frustumCulled=false;this.scene.add(this.effectMesh);
  this.canvas.style.imageRendering='pixelated';
  this.atmosphere=new Atmosphere(this.scene);
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
   if(p.kind==='neon')continue; // The district's large, distinct shop signs replace the repeated plaques.
   if(['office-sign','facility-sign','sign'].includes(p.kind)){
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
  this.buildEnvironmentDetails();
  buildSetDressing({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});
  buildDistrict({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});
  // A handful of local lights, rather than a light per luminous decorative prop.
  for(const [x,y,z,color,power]of [[0,2.6,7,0xffbc79,9],[0,3,-26,0x8bcabd,9],[0,3,-39,0x54d799,10],[9,3.6,-5.5,0xcf4b8c,12],[-9,3.6,-1.7,0xffba6c,13],[-9,3.7,-12,0x66a9dc,9]]){
   const l=new THREE.PointLight(color,power,13,2);l.position.set(x,y,z);this.lights.push(l);this.scene.add(l);
  }
 }
 private decal(kind:DecalKind,x:number,y:number,z:number,w:number,h:number,ry=0,floor=false){
  const key=`decal-${kind}`;let mat=this.mats.get(key);
  if(!mat){mat=new THREE.MeshBasicMaterial({map:createDecal(kind),alphaTest:.12,side:THREE.DoubleSide,depthWrite:!floor,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mats.set(key,mat)}
  this.addGeometry(new THREE.PlaneGeometry(w,h),mat,x,y,z,floor?-Math.PI/2:0,ry);
 }
 private buildEnvironmentDetails(){
  const M=(k:string)=>this.mats.get(k)!;
  const trim=this.mat(0x4c6258),dark=this.mat(0x1a3033),silver=this.mat(0x8d9781),rust=this.mat(0x785443),wood=this.mat(0x72624b);
  const tube=(x:number,y:number,z:number,r:number,length:number,rx=0,rz=0)=>this.addGeometry(new THREE.CylinderGeometry(r,r,length,8),trim,x,y,z,rx,0,rz);
  // Office desk: case files, a keyboard, radio, ashtray and articulated lamp.
  this.box(-3.2,.88,8,2.3,.06,1.22,wood);this.box(-3.2,.72,8.54,2,.16,.025,dark);
  for(const x of [-3.7,-3.1,-2.5]){this.box(x,.72,8.57,.49,.11,.035,wood);this.box(x,.73,8.6,.16,.025,.03,silver)}
  this.box(-3.08,.98,8.26,.66,.055,.22,trim);
  for(let row=0;row<3;row++)for(let col=0;col<10;col++)this.box(-3.34+col*.057,1.014,8.19+row*.052,.043,.018,.035,dark);
  this.decal('paper',-2.46,.931,7.99,.43,.56,.15,true);this.decal('paper',-3.96,.928,8.15,.36,.47,-.2,true);
  for(let i=0;i<4;i++)this.box(-2.54,.96+i*.045,7.69,.38,.035,.32,this.mat(i%2?0x605e43:0x8d8061),.12);
  this.box(-4.03,1.04,7.72,.29,.25,.22,dark);this.box(-4.03,1.05,7.838,.23,.16,.012,trim);
  for(let i=0;i<4;i++)this.box(-4.09+i*.04,1.06,7.85,.018,.09,.008,dark);
  tube(-4.13,1.26,7.69,.012,.32);this.box(-3.58,.95,8.35,.17,.05,.14,silver);this.box(-3.59,.985,8.35,.1,.015,.08,dark);
  tube(-2.36,.953,7.72,.11,.04);tube(-2.36,1.15,7.72,.025,.37);tube(-2.53,1.39,7.72,.026,.4,0,Math.PI/2);
  this.addGeometry(new THREE.ConeGeometry(.19,.17,8),dark,-2.69,1.37,7.72);this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(0xadcca0));
  // Shallow shelves and conduit stay against the walls, outside navigable space.
  for(const y of [1.9,2.55]){this.box(-4.91,y,10.4,.16,.06,2.1,wood);for(let i=0;i<9;i++){const z=9.58+i*.19;this.box(-4.89,y+.17,z,.16,.28+rnd(i)*.09,.12,this.mat([0x6d4c44,0x577165,0x7e7556][i%3]));this.box(-4.8,y+.16,z,.012,.025,.1,silver)}}
  this.box(-4.98,.95,8,.07,.04,7.6,dark);this.box(4.99,3.6,8,.07,.06,7.6,trim);
  this.sign('VESPER 2091 / MISSING: MARA',-2.48,2.67,11.97,2.35,.44,Math.PI,'#b7a57b','#2b3230');
  this.decal('paper',1.9,.048,10,.43,.54,.6,true);this.decal('paper',1.65,.047,10.32,.31,.42,-.2,true);
  // Large, distinct shop fronts are built by the district module.
  this.decal('graffiti',12.97,1.12,-14.2,2.55,1.12,-Math.PI/2);this.decal('graffiti',-12.97,1.3,-.7,2.4,1.05,Math.PI/2);
  for(const side of [-1,1]){
   tube(side*12.83,5.4,-8,.065,23,Math.PI/2);
   for(let z=2;z>-20;z-=4){this.box(side*12.75,5.4,z,.09,.24,.2,trim);this.box(side*11.78,.13,z,2.25,.024,.025,dark)}
   for(let z=1;z>-20;z-=6){this.box(side*11.68,.143,z,.7,.02,.42,dark);for(let i=0;i<7;i++)this.box(side*11.68-.3+i*.1,.16,z,.038,.018,.38,trim)}
  }
  // Painted lane wear and flat pixel reflections evoke rain without expensive mirrors.
  for(let i=0;i<16;i++){const z=2-i*1.35;this.box(.6,.038,z,.12,.012,.62,this.mat(0x8d9167));for(let j=0;j<3;j++)this.box(.58+(rnd(i+j)-.5)*.13,.047,z+(rnd(i+j+20)-.5)*.65,.08,.004,.05,M('road'))}
  for(const [x,z,w,d] of [[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal('puddle',x,.049,z,w,d,0,true);
  for(let i=0;i<8;i++){const x=-10.7+rnd(i+42)*21,z=-1-rnd(i+90)*18;this.decal('paper',x,.048,z,.23,.31,rnd(i)*TAU,true)}
  // Existing car collider gets original bodywork, grille, cracked glazing and tyres.
  this.box(-7,.85,-8.17,1.75,.14,.1,trim);for(let i=0;i<10;i++)this.box(-7.6+i*.13,1.02,-8.11,.044,.13,.04,dark);
  for(const x of [-7.59,-6.41]){this.box(x,1.12,-8.12,.28,.19,.045,this.mat(0xa1a58e));this.box(x,1.13,-8.09,.21,.07,.015,this.basic(0x778e76))}
  this.box(-7,1.38,-8.22,1.53,.03,.1,rust);this.box(-7.2,1.66,-9.2,.026,.45,.028,silver,.6);
  for(const sx of [-.97,.97])for(const sz of [-1.15,1.15]){
   this.addGeometry(new THREE.CylinderGeometry(.2,.2,.27,8),trim,-7+sx,.46,-10+sz,0,0,Math.PI/2);
   this.addGeometry(new THREE.CylinderGeometry(.085,.085,.28,6),dark,-7+sx,.46,-10+sz,0,0,Math.PI/2);
  }
  // Industrial interiors: bolted seams, duct flanges, control cards, cable trays.
  for(const [half,z0,z1] of [[6.98,-21,-31],[9.98,-33,-45]])for(const side of [-1,1]){
   const x=side*half;this.box(x,3.9,(z0+z1)/2,.14,.21,z0-z1,trim);tube(x-side*.11,3.62,(z0+z1)/2,.055,z0-z1,Math.PI/2);
   for(let z=z0;z>=z1;z-=2.4){this.box(x,2,z,.065,3.65,.075,dark);for(const y of [.4,1.5,2.6,3.6])this.box(x-side*.045,y,z,.035,.055,.055,silver);this.box(x-side*.09,3.62,z,.06,.27,.22,trim)}
   this.decal('circuit',x-side*.04,1.6,(z0+z1)/2,.53,.76,-side*Math.PI/2);
  }
  for(const x of [-3.5,3.5]){
   this.box(x,4.28,-39,.6,.18,12,M('metal'));for(let z=-33.3;z>-45;z-=.65)this.box(x,4.17,z,.47,.08,.07,dark);
   this.box(x,4.03,-33.5,.82,.18,.19,trim);this.box(x,4.03,-44.5,.82,.18,.19,trim);
  }
  this.decal('poster',-6.975,2.05,-22.8,.73,1.02,Math.PI/2);
  this.sign('HELIX / SECTOR 04',6.98,2.55,-22.8,1.7,.42,-Math.PI/2,'#b3c4a1');
  // Tank collar bolts, feed hoses, monitoring gauges and specimen labels.
  let tankId=0;
  for(const p of LEVEL.props)if(p.kind==='tank'){
   const {x,z}=p;for(const y of [.32,2.7]){
    this.addGeometry(new THREE.CylinderGeometry(.63,.63,.12,8),trim,x,y,z);
    for(let i=0;i<8;i++){const a=i*TAU/8;this.box(x+Math.sin(a)*.6,y,z+Math.cos(a)*.6,.075,.16,.075,silver,a)}
   }
   for(const dx of [-.45,.45])tube(x+dx,1.52,z-.36,.042,2.47);
   tube(x,3.16,z,.1,.34);tube(x,3.29,z-.5,.07,1,Math.PI/2);
   this.box(x+.43,1.6,z+.37,.31,.67,.18,dark);this.decal('circuit',x+.43,1.6,z+.465,.24,.54);
   this.addGeometry(new THREE.CylinderGeometry(.105,.105,.035,12),silver,x+.43,2.14,z+.42,Math.PI/2);this.box(x+.43,2.14,z+.446,.01,.11,.016,this.mat(0xbb684c),.4);
   this.sign(`LZ-${String(++tankId).padStart(2,'0')} / CONTAINED`,x,.64,z+.655,.72,.18,0,'#b6cda2','#183b34');
  }
  // Laboratory instruments live on existing cover islands, not on walking routes.
  for(const [x,z,y] of [[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){
   this.box(x-.6,y+.09,z+.22,.26,.14,.3,dark);this.box(x-.6,y+.16,z+.22,.19,.015,.2,silver);this.decal('paper',x+.57,y+.009,z,.31,.43,.2,true);
   for(let i=0;i<4;i++)this.box(x-.65+i*.15,y+.013,z-.24,.08,.012,.02,rust);
  }
  for(const x of [-1.38,1.38]){this.box(x,1.36,-40,.23,.055,1.43,silver);for(const z of [-40.49,-39.52])this.box(x,1.41,z,.27,.05,.12,dark)}
  this.box(-1.1,1.4,-40,.18,.2,.22,dark);tube(-1.09,1.65,-40,.045,.28);this.box(-1.17,1.79,-40,.18,.07,.14,silver);
  for(let i=0;i<3;i++){const x=.8+i*.27;this.addGeometry(new THREE.CylinderGeometry(.06,.09,.29,6),this.mat(0x638b74),x,1.48,-40.4);this.box(x,1.64,-40.4,.07,.025,.07,trim)}
  this.decal('paper',-1,1.36,-39.6,.35,.43,0,true);
  // Lift pistons and floor edge markers retain the original exit interaction volume.
  for(const x of [-10.87,-3.12]){tube(x,2.1,-49,.09,3.6);for(const y of [.7,3.45])tube(x,y,-49,.14,.12);this.box(x,2.7,-51.88,.23,1.5,.12,trim)}
  this.box(-7,4.25,-51.86,6,.12,.14,trim);this.sign('AXIOM INDUSTRIES / FREIGHT 06',-7,1.35,-51.87,3.6,.36,0,'#8aa08e');
 }
 private mesh(geo:THREE.BufferGeometry,mat:THREE.Material,x:number,y:number,z:number,parent:THREE.Group){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);parent.add(m);return m}
 private localBox(parent:THREE.Group,x:number,y:number,z:number,w:number,h:number,d:number,color:number,emissive=0){return this.mesh(new THREE.BoxGeometry(w,h,d),this.mat(color,emissive),x,y,z,parent)}
 private buildDestructible(prop:DestructibleDef){
  const group=new THREE.Group();group.position.set(prop.x,prop.y,prop.z);group.name=`shootable-${prop.id}`;
  if(prop.kind==='barrel'){
   this.mesh(new THREE.CylinderGeometry(prop.w*.44,prop.w*.44,prop.h,12),this.mats.get('fuel')!,0,prop.h/2,0,group);
   for(const y of [.08,prop.h*.26,prop.h*.76,prop.h-.04])this.mesh(new THREE.CylinderGeometry(prop.w*.456,prop.w*.456,.075,12),this.mat(0x70747a),0,y,0,group);
   this.mesh(new THREE.CylinderGeometry(.105,.105,.055,8),this.mat(0x22272e),.14,prop.h+.035,.10,group);
   this.localBox(group,-.12,prop.h+.06,.04,.25,.08,.10,0x9b9685);
  }else{
   // Bright broken reflections show precisely which panes can be shot.
   const glassMat=new THREE.MeshBasicMaterial({color:0x91b9c1,transparent:true,opacity:.25,side:THREE.DoubleSide,depthWrite:false});
   this.mats.set(`breakable-glass-${prop.id}`,glassMat);
   this.mesh(new THREE.BoxGeometry(prop.w,prop.h,prop.d),glassMat,0,prop.h/2,0,group);
   for(let i=0;i<4;i++){
    const stripe=this.mesh(new THREE.BoxGeometry(.012,prop.h*.73,.045),this.basic(i%2?0x648b97:0xc6d9cc),-Math.sign(prop.x)*(prop.w/2+.012),prop.h*.58,-prop.d*.32+i*.15,group);
    stripe.rotation.x=-.36;
   }
   this.localBox(group,-Math.sign(prop.x)*.09,.04,0,.08,.08,prop.d,0x9fb6b4);
  }
  const ruin=new THREE.Group();ruin.position.set(prop.x,prop.y,prop.z);ruin.visible=false;ruin.name=`ruin-${prop.id}`;
  if(prop.kind==='barrel'){
   const shell=this.mesh(new THREE.CylinderGeometry(prop.w*.43,prop.w*.44,.25,10,1,true),this.mat(0x24282b),0,.13,0,ruin);shell.rotation.z=.13;
   for(let i=0;i<4;i++){const bit=this.localBox(ruin,(rnd(i+prop.x)-.5)*1.15,.05,(rnd(i+prop.z)-.5)*1.15,.23,.045,.18,0x443a33);bit.rotation.y=i*1.2;}
  }else{
   for(let i=0;i<12;i++){const shard=this.mesh(new THREE.PlaneGeometry(.05+rnd(i)*.13,.08+rnd(i+2)*.17),this.basic(0x9dbcc0),-.10,.017,-prop.d/2+i*prop.d/12,ruin);shard.rotation.set(-Math.PI/2,0,i*2.1);}
  }
  this.scene.add(group,ruin);this.propGroups.set(prop.id,group);this.propRuins.set(prop.id,ruin);
 }
 private buildDoor(d:typeof LEVEL.doors[number]){
  const group=new THREE.Group();group.position.set(d.x,0,d.z);this.mesh(new THREE.BoxGeometry(d.w,3.2,d.d),this.mats.get('door')!,0,1.6,0,group);
  const horizontal=d.w>d.d;if(horizontal){this.localBox(group,0,1.58,d.d/2+.015,d.w*.85,.08,.035,0x73ad88);this.localBox(group,d.w*.35,1.3,d.d/2+.03,.15,.25,.03,d.locked?0xee7b36:0x78eab0,0x225532)}else this.localBox(group,-d.w/2-.015,1.58,0,.035,.08,d.d*.85,0x73ad88);
  this.scene.add(group);this.doorGroups.set(d.id,group);
  const sx=horizontal?d.x:d.x-.3,sz=horizontal?d.z+.33:d.z;this.sign(d.label,sx,3.57,sz,horizontal?Math.min(d.w+1.4,5):2.4,.5,horizontal?0:-Math.PI/2,d.locked?'#ffb05d':'#8ccdaa');
 }
 private creatureMaterial(kind:EnemyKind,mount:boolean,color:number,emissive=0):THREE.Material {
  // Mouths, teeth, eyes and small accents retain their clean silhouettes and emissive colors.
  const palettes:Record<EnemyKind,number[]>={
   raptor:[0x60794b,0x9baf74,0x958252,0xc4ae73],
   soldier:[0xa18c70,0x496276,0x202e39,0x80938e],
   mutant:[0x86965e,0x4e5d43,0x788375],
   brute:[0x9a6f64,0x7b383d,0x788375],
  };
  const textured=palettes[kind].includes(color)&&!emissive;
  const skin=[0x60794b,0x9baf74,0x958252,0xc4ae73,0xa18c70,0x86965e,0x9a6f64].includes(color);
  const key=`creature-${kind}-${mount?'saddle':'enemy'}-${color}-${emissive}`;
  let material=this.mats.get(key);
  if(!material){
   const surface={color:textured?0xffffff:color,map:textured?createCreatureTexture(kind,color):undefined,emissive,flatShading:!skin};
   material=kind==='soldier'&&textured&&!skin?new THREE.MeshPhongMaterial({...surface,shininess:14,specular:0x253030}):new THREE.MeshLambertMaterial(surface);
   // Keep the world wobble, but preserve subpixel precision on animated joints and facial details.
   this.mats.set(key,material);
  }
  return material;
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
  const last=this.previousPlayer,travel=last?Math.hypot(p.x-last.x,p.z-last.z):0;
  if(last&&state.time<last.time){this.cameraStride=0;this.cameraMotion=0;this.lastMountPosition=undefined;this.mountHeading=-.7;}
  const actualMove=dt>0&&travel<1.5?travel:0;
  this.cameraStride+=actualMove;
  if(dt>0)this.cameraMotion+=(Math.min(1,actualMove/Math.max(dt,.001)/4.4)-this.cameraMotion)*(1-Math.exp(-dt*15));
  this.previousPlayer={x:p.x,z:p.z,time:state.time};
  const eye=p.crouching?.9:p.mounted?2.6:1.65;
  const speedBob=state.status==='playing'?Math.sin(this.cameraStride*(p.mounted?4.3:8.2))*this.cameraMotion*(p.mounted?.032:.016):0;
  this.camera.position.set(p.x,p.y+eye+speedBob,p.z);this.camera.rotation.set(p.pitch+(p.recoil*.012),p.yaw,0,'YXZ');
  this.muzzleLight.visible=settings.quality==='high'&&!p.mounted&&p.owned.includes(p.weapon);
  this.muzzleLight.intensity=Math.max(0,p.recoil-.58)*26;
  this.muzzleLight.color.setHex(p.weapon==='plasma'?0x65ff9e:0xffcf8b);
  this.muzzleLight.position.set(p.x-Math.sin(p.yaw)*.65+Math.cos(p.yaw)*.20,p.y+eye-.15,p.z-Math.cos(p.yaw)*.65-Math.sin(p.yaw)*.20);
  this.blastLight.visible=false;this.blastLight.intensity=0;
  for(const d of state.doors){const g=this.doorGroups.get(d.id);if(g)g.position.y=d.open*3.4}
  for(const e of state.enemies){
   const rig=this.enemyGroups.get(e.id)!;
   updateCreatureRig(rig,{x:e.x,z:e.z,heading:e.heading,speed:e.speed,attack:e.attack,hurt:e.hurt,alive:e.alive,time:state.time,dt});
   // A shut portal fully hides the next room, so its creatures need no draw calls.
   rig.root.visible=this.sectorVisible(e.z,state)&&Math.hypot(e.x-p.x,e.z-p.z)<65;
   rig.root.position.y=this.curbstep(e.x,e.z);
  }
  for(const item of state.pickups){const g=this.pickupGroups.get(item.id)!;g.visible=!item.collected;if(g.visible){g.position.y=.48+Math.sin(this.clock*3+item.x)*.06;g.rotation.y=this.clock*.75}}
  const mount=state.mount,previous=this.lastMountPosition;
  const mountDistance=previous?Math.hypot(mount.x-previous.x,mount.z-previous.z):0;
  if(mountDistance>.002&&mountDistance<2)this.mountHeading=Math.atan2(-(mount.x-previous!.x),-(mount.z-previous!.z));
  updateCreatureRig(this.mountRig,{x:mount.x,z:mount.z,heading:this.mountHeading,speed:dt>0&&mountDistance<2?mountDistance/dt:0,attack:p.mounted?p.recoil:0,hurt:0,alive:true,time:state.time,dt});
  this.mountRig.root.visible=!p.mounted;
  this.mountRig.root.position.y=this.curbstep(mount.x,mount.z);
  this.lastMountPosition={x:mount.x,z:mount.z};
  if(this.powerLamp)(this.powerLamp.material as THREE.MeshBasicMaterial).color.setHex(state.powered?0x73ff99:0xff6633);
  for(const prop of state.destructibles){
   const group=this.propGroups.get(prop.id),ruin=this.propRuins.get(prop.id);
   if(group)group.visible=!prop.destroyed;if(ruin)ruin.visible=prop.destroyed;
  }
  for(let i=0;i<this.lamps.length;i++)this.lamps[i].visible=Math.sin(this.clock*3+i*1.73)>.0||i%4!==1||Math.sin(this.clock*31+i)>-.7;
  for(let i=0;i<this.hazmat.length;i++){const m=this.hazmat[i].material as THREE.MeshBasicMaterial;m.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+i),.19)}
  let count=0;for(const fx of state.effects){
   const age=1-fx.life/fx.maxLife,explosion=fx.kind==='explosion',shard=fx.kind==='shard';
   if(explosion&&settings.quality==='high'&&(1-age)*32>this.blastLight.intensity){this.blastLight.visible=true;this.blastLight.intensity=(1-age)*32;this.blastLight.position.set(fx.x,fx.y,fx.z);}
   const total=explosion?24:shard?1:fx.kind==='muzzle'?5:7;
   for(let i=0;i<total&&count<192;i++){
    const c=fx.kind==='blood'?0xd8443d:fx.kind==='plasma'?0x7affb0:fx.kind==='smoke'?0x77766d:shard?0xb7d9dd:explosion?(i%3===0?0xffefb0:i%3===1?0xffa137:0xd54a25):0xffd280;
    const spread=explosion?.55:fx.kind==='smoke'?.4:fx.kind==='plasma'?.08:shard?.4:.22;
    const sx=(rnd(i+fx.x)-.5)*age*spread*5+(fx.dx??0)*age*.6,sz=(rnd(i+fx.z+13)-.5)*age*spread*5+(fx.dz??0)*age*.6;
    this.dummy.position.set(fx.x+sx,shard?Math.max(.04,fx.y-age*age*4):fx.y+(rnd(i+fx.z)-.2)*age*spread*3+(explosion?age*.4:0),fx.z+sz);
    this.dummy.rotation.set(shard?age*9:0,age*i*.2,shard?age*7:0);
    const size=explosion?(3.8+age*5)*(1-age*.76):fx.kind==='smoke'?(1.5+age*5):Math.max(.25,1-age);
    this.dummy.scale.set(size,shard?size*.23:size,size);this.dummy.updateMatrix();this.effectMesh.setMatrixAt(count,this.dummy.matrix);this.effectMesh.setColorAt(count,new THREE.Color(c));count++;
   }
  }
  this.effectMesh.count=count;this.effectMesh.instanceMatrix.needsUpdate=true;if(this.effectMesh.instanceColor)this.effectMesh.instanceColor.needsUpdate=true;
  this.atmosphere.update(state,this.camera,this.clock,settings);
  this.renderer.render(this.scene,this.camera);
 }
 private curbstep(x:number,z:number){return z>-20&&z<4&&Math.abs(x)>10.5&&Math.abs(x)<13.1?.12:0;}
 private sectorVisible(z:number,state:GameState){
  // Even a partly raised door can expose feet or a crouching player's sightline.
  const pz=state.player.z,closed=(id:string)=>(state.doors.find(d=>d.id===id)?.open??1)<=.001;
  if(pz>4.35&&z<3.7&&closed('office'))return false;
  if(pz>-19.6&&z<-20.4&&closed('facility'))return false;
  if(pz>-31.8&&z<-32.6&&closed('laboratory'))return false;
  if(pz<-20.4&&z>-19.6&&closed('facility'))return false;
  if(pz<-32.6&&z>-31.8&&closed('laboratory'))return false;
  return true;
 }
 dispose(){
  this.atmosphere.dispose();
  const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(this.mats.values()),textures=new Set<THREE.Texture>();
  this.scene.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m)}});
  for(const g of geometries)g.dispose();for(const m of materials){const map=(m as THREE.MeshLambertMaterial).map;if(map)textures.add(map);m.dispose()}for(const t of textures)t.dispose();this.renderer.dispose();
 }
}
