import * as THREE from 'three';
import {LEVEL} from './level';
import type {Effect,GameState,Settings} from './types';

const noise=(n:number)=>{const v=Math.sin(n*127.1+91.7)*43758.5453;return v-Math.floor(v)};
const BAYER=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
type Stamp='shadow'|'mist'|'impact'|'blood';

/** Small original pixel masks; dither keeps the soft shapes in the retro palette. */
function stamp(kind:Stamp):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d')!;
 const pixels=g.createImageData(64,64);
 for(let y=0;y<64;y++)for(let x=0;x<64;x++){
  const dx=(x-31.5)/31,dy=(y-31.5)/31,r=Math.sqrt(dx*dx+dy*dy),i=(y*64+x)*4;
  let density=0,color=[0,0,0];
  if(kind==='shadow'){density=Math.max(0,1-r*r)*.88;color=[6,12,18]}
  else if(kind==='mist'){density=Math.max(0,1-r)*(.45+noise((x>>2)+(y>>2)*16)*.55);color=[168,196,184]}
  else if(kind==='blood'){
   const edge=.7+noise((x>>2)+(y>>2)*16)*.28;density=r<edge?.9:0;
   color=noise(x+y*64)>.7?[105,29,43]:[62,17,28];
   if(r<.48&&noise(x+y*7)>.77)color=[128,43,49];
  }else{
   density=r<.32?1:r<.7&&noise((x>>1)+(y>>1)*32)>.58?.88:0;
   color=r<.36?[5,13,19]:r<.5?[93,97,83]:[43,52,51];
   if(Math.abs(dx+dy*.7)<.025&&r>.3&&r<.9){density=1;color=[16,25,30]}
  }
  pixels.data[i]=color[0];pixels.data[i+1]=color[1];pixels.data[i+2]=color[2];
  pixels.data[i+3]=density>(BAYER[(y%4)*4+x%4]+.5)/16?255:0;
 }
 g.putImageData(pixels,0,0);const map=new THREE.CanvasTexture(c);
 map.magFilter=map.minFilter=THREE.NearestFilter;map.generateMipmaps=false;map.colorSpace=THREE.SRGBColorSpace;return map;
}

/** Cosmetic detail only. Fixed instance budgets do not affect simulation or collisions. */
export class Atmosphere {
 private shadows:THREE.InstancedMesh;
 private rain:THREE.InstancedMesh;
 private mist:THREE.InstancedMesh;
 private impacts:THREE.InstancedMesh;
 private blood:THREE.InstancedMesh;
 private object=new THREE.Object3D();
 private normal=new THREE.Vector3();
 private forward=new THREE.Vector3(0,0,1);
 private marks:{position:THREE.Vector3;normal:THREE.Vector3;size:number}[]=[];
 private seen=new WeakSet<Effect>();
 private previous?:GameState;
 private materials:THREE.Material[]=[];
 private vents=[{x:4,z:-3},{x:-11.65,z:-11},{x:11.65,z:-17},{x:-9.6,z:-38.8},{x:9.6,z:-41}];
 constructor(scene:THREE.Scene){
  const mask=(kind:Stamp,opacity=1)=>{
   const m=new THREE.MeshBasicMaterial({map:stamp(kind),transparent:opacity<1,opacity,alphaTest:.01,depthWrite:false,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.materials.push(m);return m;
  };
  const instances=(geometry:THREE.BufferGeometry,material:THREE.Material,budget:number)=>{
   const mesh=new THREE.InstancedMesh(geometry,material,budget);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.count=0;scene.add(mesh);return mesh;
  };
  this.shadows=instances(new THREE.PlaneGeometry(1,1),mask('shadow',.38),32);
  this.blood=instances(new THREE.PlaneGeometry(1,1),mask('blood'),32);
  this.impacts=instances(new THREE.PlaneGeometry(1,1),mask('impact'),64);
  this.impacts.renderOrder=1;this.blood.renderOrder=1;
  this.mist=instances(new THREE.PlaneGeometry(1,1),mask('mist',.2),20);
  const rainMat=new THREE.MeshBasicMaterial({color:0x8db6b4,transparent:true,opacity:.35,depthWrite:false});this.materials.push(rainMat);
  this.rain=instances(new THREE.BoxGeometry(.013,.31,.013),rainMat,112);
 }
 private floor(x:number,z:number){return z>-20&&z<4&&Math.abs(x)>10.5?.167:.057}
 private ground(mesh:THREE.InstancedMesh,index:number,x:number,z:number,width:number,depth:number,y=this.floor(x,z)){
  this.object.position.set(x,y,z);this.object.rotation.set(-Math.PI/2,0,0);this.object.scale.set(width,depth,1);this.object.updateMatrix();mesh.setMatrixAt(index,this.object.matrix);
 }
 update(state:GameState,camera:THREE.Camera,time:number,settings:Settings){
  if(this.previous!==state){this.marks=[];this.seen=new WeakSet();this.previous=state;this.impacts.count=0}
  let shadowCount=0,bloodCount=0;
  for(const enemy of state.enemies){
   const r=enemy.kind==='brute'?1.05:enemy.kind==='raptor'?.6:.48;
   this.ground(this.shadows,shadowCount++,enemy.x,enemy.z,r*2.4,r*1.7);
   if(!enemy.alive)this.ground(this.blood,bloodCount++,enemy.x,enemy.z,r*2.8,r*2.1,this.floor(enemy.x,enemy.z)+.004);
  }
  if(!state.player.mounted)this.ground(this.shadows,shadowCount++,state.mount.x,state.mount.z,2.7,1.65);
  this.shadows.count=shadowCount;this.blood.count=bloodCount;this.shadows.instanceMatrix.needsUpdate=this.blood.instanceMatrix.needsUpdate=true;
  // A few rain streaks outside, rather than a full-screen rain overlay indoors.
  this.rain.visible=settings.quality==='high';this.rain.count=this.rain.visible?112:0;
  if(this.rain.visible)for(let i=0;i<this.rain.count;i++){
   const phase=(noise(i+40)+time*(.54+noise(i+53)*.23))%1;
   this.object.position.set(-11.8+noise(i+7)*23.6,.3+(1-phase)*7.5,3-noise(i+29)*22);
   this.object.rotation.set(0,0,-.13);this.object.scale.set(1,.6+noise(i+8)*.7,1);this.object.updateMatrix();this.rain.setMatrixAt(i,this.object.matrix);
  }
  this.rain.instanceMatrix.needsUpdate=true;
  this.mist.visible=settings.quality==='high';this.mist.count=this.mist.visible?20:0;
  if(this.mist.visible)for(let i=0;i<this.mist.count;i++){
   const vent=this.vents[i%this.vents.length],phase=(noise(i+10)+time*.22)%1,size=.6+phase*.85;
   this.object.position.set(vent.x+Math.sin(i*2.3+time*.6)*phase*.35,.18+phase*1.35,vent.z+Math.cos(i+time*.4)*phase*.25);
   this.object.quaternion.copy(camera.quaternion);this.object.scale.set(size,size*1.13,1);this.object.updateMatrix();this.mist.setMatrixAt(i,this.object.matrix);
  }
  this.mist.instanceMatrix.needsUpdate=true;
  // Hits on static level surfaces leave bounded scars, cleared on a new mission.
  for(const effect of state.effects)if(effect.kind==='spark'&&!this.seen.has(effect)){
   this.seen.add(effect);this.recordImpact(effect);
  }
  for(let i=0;i<this.marks.length;i++){
   const mark=this.marks[i];this.object.position.copy(mark.position);this.object.quaternion.setFromUnitVectors(this.forward,mark.normal);this.object.scale.setScalar(mark.size);this.object.updateMatrix();this.impacts.setMatrixAt(i,this.object.matrix);
  }
  this.impacts.count=this.marks.length;this.impacts.instanceMatrix.needsUpdate=true;
 }
 private recordImpact(effect:Effect){
  let closest=.045,point:THREE.Vector3|undefined,normal:THREE.Vector3|undefined;
  for(const wall of LEVEL.walls){
   const y0=wall.y??0,y1=y0+wall.h;
   const axes=[{axis:'x' as const,value:effect.x,center:wall.x,half:wall.w/2},{axis:'z' as const,value:effect.z,center:wall.z,half:wall.d/2}];
   if(effect.y<y0-.02||effect.y>y1+.02)continue;
   for(const a of axes){
    const other=a.axis==='x'?effect.z-wall.z:effect.x-wall.x,half=a.axis==='x'?wall.d/2:wall.w/2;
    if(Math.abs(other)>half+.015)continue;
    const sign=a.value>=a.center?1:-1,face=a.center+sign*a.half,distance=Math.abs(a.value-face);
    if(distance>=closest)continue;
    closest=distance;point=new THREE.Vector3(effect.x,effect.y,effect.z);point[a.axis]=face+sign*.013;
    this.normal.set(0,0,0);this.normal[a.axis]=sign;normal=this.normal.clone();
   }
  }
  if(point&&normal){this.marks.push({position:point,normal,size:.15+noise(point.x+point.z)*.075});if(this.marks.length>64)this.marks.shift()}
 }
 dispose(){
  for(const mesh of [this.shadows,this.rain,this.mist,this.impacts,this.blood]){mesh.removeFromParent();mesh.geometry.dispose()}
  for(const material of this.materials){(material as THREE.MeshBasicMaterial).map?.dispose();material.dispose()}
 }
}
