import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {createCampaignTexture,createCampaignSign,createCampaignPortal,type CampaignSurface} from './campaign-textures';
import {createDistrictPoster} from './district-textures';
import type {GameState,LevelData} from './types';

export interface CampaignDressing {dispose():void;update(dt:number,state?:GameState):void}
const noise=(seed:number)=>{const n=Math.sin(seed*137.23+13.97)*43358.917;return n-Math.floor(n)};

/**
 * All solid relief is inside the level's authoritative wall/cover volumes.
 * Skylines, crane booms and tree crowns are outside the playable boundary or
 * above head height. Static parts merge by material instead of one draw per bolt.
 */
export function buildCampaignDressing(scene:THREE.Scene,level:LevelData):CampaignDressing {
 const root=new THREE.Group();root.name='campaign-dressing';scene.add(root);
 const batches=new Map<THREE.Material,THREE.BufferGeometry[]>(),materials=new Map<string,THREE.Material>(),textures=new Set<THREE.Texture>(),geometries=new Set<THREE.BufferGeometry>();
 const animated:((dt:number,state?:GameState)=>void)[]=[];
 const surface=(kind:CampaignSurface,color=0xffffff,emissive=0)=>{
  const key=`surface-${kind}-${color}-${emissive}`;let material=materials.get(key);
  if(!material){const map=createCampaignTexture(kind);textures.add(map);material=new THREE.MeshLambertMaterial({map,color,emissive,emissiveMap:emissive?map:null});materials.set(key,material)}return material;
 };
 const solid=(color:number,unlit=false)=>{const key=`${color}-${unlit}`;let material=materials.get(key);if(!material){material=unlit?new THREE.MeshBasicMaterial({color}):new THREE.MeshLambertMaterial({color});materials.set(key,material)}return material};
 const dark=solid(0x1b2b32),steel=solid(0x86928b),rust=solid(0x795345),pale=solid(0xc4bba0),amber=solid(0xc4aa65,true),red=solid(0xc55f52,true),mint=solid(0x79c6ae,true),violet=solid(0xa898ce,true);
 const add=(geometry:THREE.BufferGeometry,material:THREE.Material,x:number,y:number,z:number,rx=0,ry=0,rz=0)=>{
  geometry.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(x,y,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz)),new THREE.Vector3(1,1,1)));
  // Platonic foliage/rocks are non-indexed in Three.js. Normalize every source
  // before merging, so mixing those with boxes never drops an entire batch.
  if(geometry.index){const flat=geometry.toNonIndexed();geometry.dispose();geometry=flat}
  let list=batches.get(material);if(!list){list=[];batches.set(material,list)}list.push(geometry);
 };
 const box=(x:number,y:number,z:number,w:number,h:number,d:number,material:THREE.Material,ry=0,tile=false)=>{
  const geometry=new THREE.BoxGeometry(w,h,d);
  if(tile){const uv=geometry.getAttribute('uv'),pairs=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]];for(let face=0;face<6;face++)for(let vertex=0;vertex<4;vertex++){const i=face*4+vertex;uv.setXY(i,uv.getX(i)*pairs[face][0]/2,uv.getY(i)*pairs[face][1]/2)}}
  add(geometry,material,x,y,z,0,ry);
 };
 const rod=(ax:number,ay:number,az:number,bx:number,by:number,bz:number,r:number,material:THREE.Material,sides=6)=>{
  const a=new THREE.Vector3(ax,ay,az),b=new THREE.Vector3(bx,by,bz),delta=b.clone().sub(a),center=a.clone().add(b).multiplyScalar(.5);
  const geometry=new THREE.CylinderGeometry(r,r,delta.length(),sides);geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()));add(geometry,material,center.x,center.y,center.z);
 };
 const sign=(text:string,x:number,y:number,z:number,w=3,h=.72,ry=0,color='#b6dbc2',background='#142c35')=>{
  const texture=createCampaignSign(text,color,background);textures.add(texture);const material=new THREE.MeshBasicMaterial({map:texture});materials.set(`sign-${materials.size}`,material);
  box(x,y,z,w+.14,h+.14,.065,dark,ry);const facing=new THREE.Vector3(Math.sin(ry),0,Math.cos(ry)).multiplyScalar(.038);
  add(new THREE.PlaneGeometry(w,h),material,x+facing.x,y,z+facing.z,0,ry);
 };
 const floor=(x:number,z:number,w:number,d:number,material:THREE.Material)=>box(x,.007,z,w,.018,d,material,0,true);
 const panel=surface('panel'),stone=surface('stone'),plaster=surface('plaster'),wood=surface('wood'),container=surface('container'),server=surface('server'),hazard=surface('hazard'),screen=surface('screen',0xffffff,0x223b31);
 const chapter=level.chapterId??0;
 const tankProps=level.props.filter(prop=>prop.kind==='tank');
 // Each chapter has a deliberate wall palette. These thin textured shells share
 // the collision surfaces exactly, including raised door lintels.
 const wallMaterial=chapter===1?plaster:chapter===6?stone:chapter===4?container:panel;
 for(const wall of level.walls){
  if(wall.h<2.3)continue;
  if(wall.w<=1.5&&wall.d<=1.5&&tankProps.some(prop=>Math.abs(prop.x-wall.x)<.01&&Math.abs(prop.z-wall.z)<.01))continue;
  const y=(wall.y??0)+wall.h/2;
  box(wall.x,y,wall.z,wall.w+.018,wall.h,wall.d+.018,wall.material==='brick'?chapter===6?stone:plaster:wallMaterial,0,true);
  if((wall.y??0)<.1){box(wall.x,.19,wall.z,wall.w+.045,.34,wall.d+.045,dark);box(wall.x,Math.min(3.18,wall.h-.08),wall.z,wall.w+.065,.065,wall.d+.065,steel)}
 }
 const {minX,maxX,minZ,maxZ}=level.bounds,cx=(minX+maxX)/2,cz=(minZ+maxZ)/2;
 const ceiling=(y:number,back=minZ)=>{box(cx,y,(maxZ+back)/2,maxX-minX,.16,maxZ-back,panel,0,true);for(let z=maxZ-4;z>back;z-=7){box(cx,y-.16,z,maxX-minX,.18,.26,dark);box(cx,y-.275,z,3,.045,.27,pale);box(cx,y-.3,z,2.7,.015,.2,mint)}};
 const stripe=(x:number,z:number,length:number,ry=0)=>box(x,.035,z,length,.018,.28,hazard,ry,true);
 const rack=(x:number,z:number,length:number,height=2.9,ry=0)=>{
  box(x,height/2,z,length,height,.27,surface('archive'),ry,true);
  for(const y of [.12,.82,1.53,2.24,height])box(x,y,z,length+.06,.075,.4,steel,ry);
 };
 const console=(x:number,z:number,w=1.6)=>{
  // Consoles are only placed on existing cover; never an invisible obstacle.
  box(x,1.58,z,w,.6,.18,dark);box(x,1.59,z+.105,w-.2,.43,.018,screen);box(x,1.28,z+.12,w,.06,.48,steel);
  for(let i=0;i<6;i++)box(x-w*.4+i*w*.13,1.323,z+.18,.08,.016,.07,i%3?dark:amber);
 };
 const wallConsoles=()=>{for(const wall of level.walls){if(wall.h>.7&&wall.h<1.8&&wall.material==='metal'&&wall.w>1.5)console(wall.x,wall.z,Math.min(2.4,wall.w*.8))}};
 const tank=(x:number,z:number,height=3.6,color=0x84c9b5)=>{
  box(x,height/2,z-.48,1.12,height-.12,.14,dark);
  const glass=new THREE.MeshLambertMaterial({color,transparent:true,opacity:.31,depthWrite:false});materials.set(`tank-${materials.size}`,glass);
  add(new THREE.CylinderGeometry(.54,.54,height-.47,10),glass,x,height/2,z);
  for(const y of [.19,height-.19])add(new THREE.CylinderGeometry(.69,.69,.22,10),panel,x,y,z);
  // A malformed specimen visible through the vessel: torso, curved tail and ribs.
  add(new THREE.SphereGeometry(.3,8,5),solid(0x536c53),x,height*.5,z+.15);rod(x,height*.35,z+.18,x+.14,height*.7,z+.18,.13,solid(0x708463));
  for(let i=0;i<4;i++)rod(x-.25,height*.45+i*.09,z+.27,x+.2,height*.44+i*.09,z+.27,.021,solid(0xa4ac83),5);
  for(const side of [-1,1])box(x+side*.56,height/2,z,.08,height-.36,.1,steel);
  box(x,height-.54,z+.63,.26,.2,.045,hazard);box(x,height*.28,z+.62,.23,.08,.04,mint);
 };
 const lamp=(x:number,z:number,y=4.45,color:THREE.Material=mint)=>{box(x,y,z,2.2,.12,.27,dark);box(x,y-.08,z,1.92,.045,.2,color)};
 const skyline=(startZ:number)=>{
  const windows=surface('window',0x8f9cad,0x15190f);
  for(let side=-1;side<=1;side+=2)for(let i=0;i<11;i++){const x=side*(maxX+8+noise(i+53)*20),z=startZ-i*11,h=13+noise(i+19)*28;box(x,h/2,z,7+noise(i+49)*5,h,8,windows,0,true);box(x,h+.1,z,8,.27,8,dark);rod(x,h,z,x,h+3.4,z,.045,steel)}
 };

 if(chapter===1){
  ceiling(4.24);floor(-10,-10,13,24,wood);floor(10,-10,13,24,wood);
  sign('VANE / SAFEHOUSE',0,3.4,maxZ-.68,4,.8,Math.PI,'#dcc69b','#3d3b33');
  sign('ARCHIVE / NO ONE IS INNOCENT',-10,3.25,minZ+.68,7,.8);sign('ARMORY / KEEP YOUR HEAD DOWN',10,3.25,minZ+.68,7,.8);
  for(const side of [-1,1])for(let z=-3;z>-22;z-=4.7){rack(side*17.5,z,3.5,2.9,side<0?Math.PI/2:-Math.PI/2);box(side*17.35,3.5,z,.03,.4,3.9,wood)}
  // Cork evidence boards stay against side walls, framed by real shelf relief.
  for(const side of [-1,1]){
   const x=side*17.35,z=-24;box(x,2.15,z,.08,1.63,4.25,surface('wood'));
   for(let i=0;i<7;i++){const py=1.64+noise(i+13)*.81,pz=z-1.6+i*.47;box(x-side*.055,py,pz,.035,.42,.3,pale);box(x-side*.078,py+.065,pz,.012,.15,.19,dark);rod(x-side*.081,py+.23,pz,x-side*.081,2.2,z+.4,.007,rust,4)}
  }
  for(const wall of level.walls)if(wall.h<1.5&&wall.material==='crate'){
   box(wall.x,wall.h+.08,wall.z,wall.w*.88,.13,wall.d*.8,wood);box(wall.x,wall.h+.19,wall.z,.32,.08,.23,steel);
   for(let i=0;i<3;i++)box(wall.x-.36+i*.28,wall.h+.12,wall.z+.25,.16,.04,.22,pale);
  }
  for(const side of [-1,1])for(let z=0;z>-28;z-=7){box(side*17.37,2.45,z,.13,1.3,2.55,dark);for(let j=0;j<12;j++)box(side*17.29,1.87+j*.1,z,.03,.044,2.35,steel);lamp(side*11,z,4.13,amber)}
  wallConsoles();
 }else if(chapter===2){
  ceiling(5.05);floor(0,-48,28,35,panel);
  sign('AXIOM / HUMAN ENGINEERING',0,4.03,maxZ-.68,11,1.18,Math.PI,'#e3caa5','#492e33');
  sign('SPECIMEN WING / CONTAINMENT 09',-16,3.7,-36.55,8,.8);sign('SECURITY / AUTHORIZED PERSONNEL',17,3.7,-35.55,8,.8);
  for(const x of [-27.08,27.08])for(let z=-20;z>-68;z-=10)box(x,4.28,z,.24,.2,5,panel);
  for(const x of [-26.97,26.97]){rod(x,4.4,-15,x,4.4,-69,.16,rust);rod(x-.35*Math.sign(x),4.18,-15,x-.35*Math.sign(x),4.18,-69,.095,steel);for(let z=-17;z>-69;z-=6)box(x,4.4,z,.38,.31,.085,dark)}
  for(let z=-12;z>-68;z-=9){lamp(0,z,4.75,z<-38?red:mint);stripe(0,z,10)}
  sign('LAZARUS / SUBJECTS WERE HUMAN',0,3.8,minZ+.68,11,.95);
  wallConsoles();
 }else if(chapter===3){
  floor(0,-46,53,53,panel);skyline(-20);
  // The reactor's open arena is framed by a suspended power torus, never by a
  // decorative wall crossing the fight. High gantry rings sit above jumping.
  add(new THREE.TorusGeometry(11.8,.48,6,32),panel,0,7.4,-46,Math.PI/2);
  add(new THREE.TorusGeometry(11.1,.12,4,32),violet,0,7.46,-46,Math.PI/2);
  for(let i=0;i<12;i++){const a=i*Math.PI/6,x=Math.sin(a)*11.8,z=-46+Math.cos(a)*11.8;rod(x,7.4,z,x,11.4,z,.15,steel);box(x,8.4,z,.45,.6,.48,dark);rod(x,7.2,z,x*.85,5.4,-46+(z+46)*.85,.09,rust)}
  for(const x of [-34.8,34.8])for(let z=-15;z>-76;z-=14){box(x,3.6,z,.45,7.2,2.3,panel);box(x,5.7,z,.55,.25,2.7,hazard);rod(x,5.1,z,x-5*Math.sign(x),5.1,z,.18,steel);add(new THREE.TorusGeometry(1.2,.15,4,12),mint,x,4.85,z,0,Math.PI/2)}
  for(let i=0;i<7;i++){const x=-22+i*7,z=-80.4;box(x,5.4,z,3.2,10.8,1.2,server,0,true);box(x,9.6,z+.65,1.8,.16,.07,violet);rod(x,10.8,z,x,15+noise(i)*8,z,.12,steel)}
  sign('FRACTURE / REALITY IS A WEAPON',0,5.1,-25.2,13,1.04);sign('REACTOR 00 / NULL CROWN',0,4.6,-81.2,13,1.1);
  const breachMap=createCampaignPortal();textures.add(breachMap);const breachMaterial=new THREE.MeshBasicMaterial({map:breachMap,transparent:true,depthWrite:false,opacity:.92});materials.set('reactor-breach',breachMaterial);
  add(new THREE.PlaneGeometry(6.6,6.6),breachMaterial,0,7.1,-80.95);add(new THREE.TorusGeometry(3.48,.17,5,24),mint,0,7.1,-81.06);
  animated.push((dt,state)=>{breachMap.rotation+=dt*.11;breachMaterial.opacity=state?.powered ? .16 : .92});
  for(const wall of level.walls)if(wall.h<2&&wall.material==='metal'){box(wall.x,wall.h+.045,wall.z,wall.w+.06,.08,wall.d+.06,hazard,0,true);console(wall.x,wall.z,Math.min(wall.w*.85,2.4))}
 }else if(chapter===4){
  skyline(-8);const water=surface('water',0x91b3bb,0x10212b);floor(0,-37,maxX-minX-1,maxZ-minZ-1,surface('panel',0x687776));
  // Water beyond the existing boundary communicates a working harbor without
  // hiding traversable ground or adding a lethal collision not in level data.
  box(minX-12,-.24,-40,22,.1,110,water,0,true);box(maxX+12,-.24,-40,22,.1,110,water,0,true);
  const waterMap=(water as THREE.MeshLambertMaterial).map!;animated.push(dt=>{waterMap.offset.x=(waterMap.offset.x+dt*.009)%1;waterMap.offset.y=(waterMap.offset.y+dt*.004)%1});
  for(const wall of level.walls)if(wall.material==='crate'&&wall.h>1.7){
   box(wall.x,wall.h/2,wall.z,wall.w+.035,wall.h+.025,wall.d+.035,container,0,true);
   box(wall.x,wall.h+.07,wall.z,wall.w+.12,.1,wall.d+.12,dark);
   if(wall.w>wall.d){for(let x=wall.x-wall.w/2+.17;x<wall.x+wall.w/2;x+=.72)box(x,wall.h/2,wall.z+wall.d/2+.028,.045,wall.h-.13,.055,steel);sign('AXIOM / LIVE CARGO',wall.x,Math.min(2,wall.h*.64),wall.z+wall.d/2+.064,Math.min(3.1,wall.w*.6),.63)}
  }
  // Two gantry cranes outside combat lanes with long booms overhead.
  for(const side of [-1,1]){const x=side*(maxX+1.1),z=side<0?-42:-72;box(x,8,z,1.1,16,1.2,rust);box(x,14.8,z,2.2,2.2,2.2,panel);box(x-side*8,16,z,18,.6,1.1,hazard,0,true);rod(x,16,z,x-side*16,16,z,.11,steel);rod(x,13.3,z,x-side*10,16,z,.14,dark);rod(x-side*12,15.7,z,x-side*12,6.8,z,.055,steel);add(new THREE.TorusGeometry(.28,.08,4,10,Math.PI*1.35),rust,x-side*12,6.54,z)}
  for(const side of [-1,1])for(let z=3;z>-87;z-=14){box(side*43.35,2.75,z,.16,5.5,.16,dark);rod(side*43.35,5.5,z,side*41.9,5.5,z,.08,steel);lamp(side*41.9,z,5.36,amber)}
  sign('PORT VESPER / AXIOM FREIGHT',0,5,-57.7,15,1.1);sign('CARGO 091 / DO NOT BREAK SEAL',31,3.45,-29.45,9,.83);
  for(let z=-12;z>-80;z-=12)stripe(0,z,7);
 }else if(chapter===5){
  ceiling(4.36);floor(0,-65,15,144,wood);
  const windowMap=createCampaignTexture('window');textures.add(windowMap);const movingWindow=new THREE.MeshBasicMaterial({map:windowMap,color:0xa3b7be});materials.set('moving-train-night',movingWindow);
  animated.push(dt=>{windowMap.offset.x=(windowMap.offset.x+dt*.45)%1});
  // Animated night panes are in the wall skin, with steel frames and overhead
  // handrails. No seat geometry is inserted into the narrow escape aisle.
  for(const side of [-1,1])for(let z=1;z>-134;z-=5.8){const x=side*8.37;box(x,2.12,z,.05,1.36,3.7,dark);box(x-side*.041,2.12,z,.012,1.12,3.44,movingWindow,0,true);for(const y of [1.42,2.82])box(x-side*.083,y,z,.035,.07,3.84,steel);for(const dz of [-1.9,1.9])box(x-side*.083,2.12,z+dz,.035,1.48,.07,steel);box(x-side*.03,3.32,z,.045,.43,3.72,surface('plaster',0x8caaac));box(x-side*.086,3.3,z,.018,.06,1.5,amber)}
  for(const side of [-1,1]){rod(side*4.7,3.68,4,side*4.7,3.68,-132,.055,steel);for(let z=1;z>-132;z-=5.8){rod(side*4.7,4.24,z,side*4.7,3.68,z,.036,steel);add(new THREE.TorusGeometry(.17,.03,4,10),dark,side*4.7,3.43,z)}}
  const names=['PASSENGER','FREIGHT','BIOTRANSFER','HEAVY CARGO','LOCOMOTIVE'];
  for(let i=0;i<5;i++){const z=-8-i*25;lamp(0,z,4.06,i>2?red:amber);for(const side of [-1,1])sign(`IRON EXPRESS / ${String(i+1).padStart(2,'0')} ${names[i]}`,side*8.3,3.64,z,3.8,.52,-side*Math.PI/2,'#dfc47b','#263b40');stripe(0,-16-i*25,14)}
  for(const wall of level.walls)if(wall.h<1.7&&wall.w>1.5)box(wall.x,wall.h+.06,wall.z,wall.w*.95,.12,wall.d*.91,surface('plaster',0x78988d));
  wallConsoles();sign('ENGINE ROOM / DANGER HIGH VOLTAGE',0,3.38,minZ+.68,9,.83);
 }else if(chapter===6){
  const bark=surface('bark'),leaves=surface('leaf'),sand=surface('stone',0xc3b283);floor(cx,cz,maxX-minX-.5,maxZ-minZ-.5,sand);
  const tree=(x:number,z:number,seed:number)=>{
   const h=9+noise(seed)*7;add(new THREE.CylinderGeometry(.33,.9,h,7),bark,x,h/2,z);
   for(let i=0;i<4;i++){const a=i*Math.PI*.5+noise(seed)*1.6,dx=Math.sin(a)*3.6,dz=Math.cos(a)*3.6;rod(x,h*.58,z,x+dx,h*.77,z+dz,.21,bark);add(new THREE.IcosahedronGeometry(3+noise(seed+i)*2,0),leaves,x+dx,h*.83,z+dz)}
   add(new THREE.IcosahedronGeometry(4.4,0),leaves,x,h+.7,z);for(let i=0;i<5;i++){const a=i*Math.PI*.4;rod(x,.6,z,x+Math.sin(a)*1.2,.03,z+Math.cos(a)*1.2,.14,bark)}
  };
  // Tree trunks occupy only boundary walls, and all branch crowns clear jumps.
  for(const side of [-1,1])for(let z=7;z>-95;z-=10)tree(side*(maxX+1.3),z,z*3+side+500);
  for(let i=0;i<9;i++)tree(-41+i*10,minZ-2,600+i);
  // Ferns are painted low-poly fronds against boundary walls. Their angular
  // leaves retain readable highlights at native 320 pixel resolution.
  for(const side of [-1,1])for(let z=4;z>-92;z-=5){const x=side*49.46;for(let i=0;i<5;i++){const a=-1+i*.5,ex=x-side*Math.cos(a)*1.15,ez=z+Math.sin(a)*1.4;rod(x,.02,z,ex,.8+noise(z+i)*.45,ez,.025,bark,4);for(let j=1;j<5;j++){const t=j/5,px=x+(ex-x)*t,py=t*.85,pz=z+(ez-z)*t;add(new THREE.PlaneGeometry(.31,.13),leaves,px,py,pz,Math.PI*.24,side*a,side*.35)}}}
  // Masonry covers and high lintels grow stone relief, carved luminous seams.
  for(const wall of level.walls)if(wall.material==='crate'||wall.material==='metal'){
   box(wall.x,(wall.y??0)+wall.h/2,wall.z,wall.w+.035,wall.h+.03,wall.d+.035,stone,0,true);
   if(wall.h>2)box(wall.x,Math.min(3.3,wall.h-.25),wall.z,wall.w+.075,.1,wall.d+.075,mint);
  }
  for(let i=0;i<7;i++){const x=-20+i*6.7;box(x,5.3,-97.4,2.3,10.6,2.3,stone,0,true);box(x,10.1,-97.4,3,.5,3,stone);rod(x,10.5,-97.4,x,15.8,-97.4,.17,dark)}
  sign('THE LOST CANOPY / BEFORE THE FIRST BREACH',0,4.05,-51.62,16,1.2,0,'#becb97','#34453d');sign('AXIOM FIELD STATION / RESEARCH OUTPOST 07',31,3.5,-43.45,10,.92);
  for(let i=0;i<18;i++){const x=-48+noise(i+900)*96,z=12+noise(i+950)*2;add(new THREE.DodecahedronGeometry(.35+noise(i+99)*.5,0),stone,x,.17,z)}
 }else if(chapter===7){
  ceiling(5.15,-86);floor(0,-53,61,103,panel);skyline(-7);
  for(const side of [-1,1])for(let z=2;z>-101;z-=7){box(side*31.43,2.55,z,.34,4.9,4.5,server,0,true);box(side*31.22,4.35,z,.04,.12,3.7,mint);box(side*31.2,1,z,.05,.13,3.7,violet);for(let i=0;i<4;i++)box(side*31.21,1.42+i*.63,z,.04,.15,2.3,screen)}
  for(const z of [-18,-42,-66,-86]){box(0,4.75,z,61,.3,.7,hazard,0,true);for(const side of [-1,1])rod(side*26,4.63,z,side*26,4.63,z-12,.12,steel)}
  // Transmitter crown is beyond the final arena, monumental and visible from
  // the zigzag ascent. The central antenna does not obstruct Omega's fight.
  const tz=minZ-5;for(const x of [-14,14]){box(x,13,tz,1.2,26,1.2,panel);rod(x,25,tz,0,38,tz,.19,steel)}
  for(let y=9;y<34;y+=6){rod(-14,y,tz,14,y,tz,.16,steel);rod(-14,y,tz,14,y+6,tz,.11,rust);rod(14,y,tz,-14,y+6,tz,.11,rust)}
  rod(0,30,tz,0,45,tz,.23,steel);add(new THREE.TorusGeometry(6.1,.18,5,24),mint,0,30,tz,Math.PI/2);add(new THREE.TorusGeometry(4.4,.13,5,20),violet,0,34,tz,Math.PI/2);
  for(let i=0;i<4;i++){const a=i*Math.PI*.5;rod(Math.sin(a)*6.1,30,tz+Math.cos(a)*6.1,0,36,tz,.085,steel)}
  sign('AXIOM ZERO / END THE TRANSMISSION',0,4.3,-85.55,16,1.1,0,'#bfdfd7','#263144');sign('OMEGA / THERE IS NO CLEAN EXIT',0,4.07,minZ+.68,15,.95,0,'#d6a6ad','#432b38');wallConsoles();
 }
 // Story props use the authored level coordinates. Small wall-mounted objects
 // are relief, while full-height vessels use the explicit tank colliders.
 for(const prop of level.props){
  const x=prop.x,z=prop.z,rotation=prop.rotation??0;
  if(prop.kind==='tank'){const collider=level.walls.find(wall=>wall.w<=1.5&&wall.d<=1.5&&Math.abs(x-wall.x)<.01&&Math.abs(z-wall.z)<.01);tank(x,z,collider?.h??3.4,chapter===3?0xbfa9d0:chapter===7?0x91b9c5:0x84c9b5)}
  else if(['sign','facility-sign','warning'].includes(prop.kind))sign(prop.label??'',x,prop.kind==='facility-sign'?3.67:3.42,z,prop.kind==='facility-sign'?7.2:4.4,.66,z>maxZ-1?Math.PI:rotation,prop.kind==='warning'?'#e1aa89':'#b6d3c0');
  else if(prop.kind==='portrait'){
   const map=createDistrictPoster('vesper');textures.add(map);const material=new THREE.MeshBasicMaterial({map});materials.set('elias-safehouse-poster',material);
   box(x,2.07,z,1.44,2.17,.07,wood);add(new THREE.PlaneGeometry(1.3,2.03),material,x,2.07,z-.044,0,Math.PI);
  }else if(prop.kind==='office-board'){
   box(x,2,z,.08,1.67,3.6,wood);for(let i=0;i<8;i++){const py=1.45+noise(i+93)*.83,pz=z-1.4+noise(i+26)*2.8;box(x+.06,py,pz,.03,.32,.25,pale);box(x+.08,py+.055,pz,.012,.13,.14,dark);rod(x+.09,py+.16,pz,x+.09,2.3,z,.006,rust,4)}
  }else if(prop.kind==='terminal'||prop.kind==='console'){
   // Cover consoles have already been built with the relevant cover height.
   const matchingCover=level.walls.some(wall=>wall.h<1.8&&wall.w>1.5&&wall.material==='metal'&&Math.abs(x-wall.x)<.01&&Math.abs(z-wall.z)<.01);
   if(!matchingCover){
    if(Math.abs(x)>maxX-2){const side=Math.sign(x),wx=side*(maxX-.67);box(wx,1.84,z,.1,.64,1.1,dark);box(wx-side*.065,1.86,z,.016,.48,.92,screen);box(wx-side*.16,1.46,z,.4,.065,1.1,steel)}else console(x,z,1.25);
   }
  }else if(prop.kind==='lab-table'){
   const cover=level.walls.find(wall=>wall.h<2&&Math.abs(x-wall.x)<.1&&Math.abs(z-wall.z)<.1);
   const top=cover?.h??1.15;box(x,top+.037,z,cover?cover.w*.9:1.6,.07,cover?cover.d*.85:.72,steel);
   for(let i=0;i<5;i++)box(x-.47+i*.19,top+.085,z+.15,.065,.017,.27,i%2?dark:pale,noise(i)*.8-.4);
   add(new THREE.CylinderGeometry(.18,.18,.08,8),dark,x+.51,top+.105,z-.2);
  }else if(prop.kind==='locker'){
   const side=Math.sign(x)||1,wx=side*(maxX-.66);box(wx,1.34,z,.1,2.64,.7,server);box(wx-side*.06,1.38,z,.025,2.43,.57,panel);
   for(let i=0;i<5;i++)box(wx-side*.083,2.12-i*.08,z,.012,.024,.38,dark);box(wx-side*.09,1.23,z+.18,.025,.22,.035,steel);
  }else if(prop.kind==='chair'){
   box(x,.62,z,.44,.09,.44,dark);box(x,.99,z-.18,.44,.7,.07,surface('plaster',0x76877d));for(const dx of [-.17,.17])for(const dz of [-.17,.17])rod(x+dx,.08,z+dz,x+dx,.6,z+dz,.022,steel,4);
  }else if(prop.kind==='bottles'){
   const cover=level.walls.find(wall=>wall.h<2&&Math.abs(x-wall.x)<2&&Math.abs(z-wall.z)<.8);const top=cover?.h??.94;
   for(let i=0;i<3;i++){const bx=x+i*.17;add(new THREE.CylinderGeometry(.052,.068,.23,6),solid(i%2?0x525a39:0x78533d),bx,top+.15,z);add(new THREE.CylinderGeometry(.021,.027,.08,6),dark,bx,top+.3,z)}
  }else if(prop.kind==='pipe'){
   rod(x,3.85,z-3.2,x,3.85,z+3.2,.13,rust);for(const pz of [z-2.5,z,z+2.5])add(new THREE.TorusGeometry(.17,.036,4,8),steel,x,3.85,pz);
   add(new THREE.TorusGeometry(.3,.045,4,10),rust,x,3.25,z,0,Math.PI/2);rod(x,3.22,z,x,3.9,z,.075,steel);
  }else if(prop.kind==='corpse'||prop.kind==='skeleton'){
   const flesh=prop.kind==='corpse'?solid(0x625a53):pale;const torso=new THREE.SphereGeometry(1,8,4);torso.scale(.43,.13,.27);add(torso,flesh,x,.14,z);
   const head=new THREE.SphereGeometry(.15,8,5);head.scale(1,.7,1);add(head,pale,x-.53,.1,z);
   for(const side of [-1,1]){rod(x+.25,.13,z+side*.13,x+.64,.055,z+side*.24,.065,flesh,5);rod(x-.18,.14,z+side*.22,x+.01,.07,z+side*.46,.045,flesh,5)}
   for(let i=0;i<5;i++)rod(x-.25+i*.13,.255,z-.2,x-.25+i*.13,.255,z+.2,.024,pale,4);
   if(prop.kind==='corpse')box(x,.024,z,.7,.01,.61,solid(0x633e3d));
  }else if(prop.kind==='rubble'){
   for(let i=0;i<8;i++){const geometry=new THREE.DodecahedronGeometry(.14+noise(i+21)*.2,0);geometry.scale(1,.4,1);add(geometry,stone,x+(noise(i)-.5)*1.3,.07,z+(noise(i+33)-.5)*1.3)}
  }else if(prop.kind==='lamp')lamp(x,z,5.1,amber);
  else if(prop.kind==='drain'){box(x,.026,z,1.1,.022,.85,dark);for(let i=0;i<8;i++)box(x-.45+i*.13,.042,z,.045,.018,.82,steel)}
  else if(prop.kind==='checkpoint'){stripe(x,z,2.6);box(x,.037,z,.16,.018,2,mint)}
 }
 // Every door gets a painted hazard lintel; door motion stays exclusively in
 // Renderer and Simulation. Nothing here visually closes an open passage.
 for(const door of level.doors){if(door.d>door.w){box(door.x,3.64,door.z,.72,.18,door.d+.24,hazard,0,true);for(const side of [-1,1])box(door.x,1.9,door.z+side*(door.d/2+.17),.62,3.8,.13,steel)}else{box(door.x,3.64,door.z,door.w+.24,.18,.72,hazard,0,true);for(const side of [-1,1])box(door.x+side*(door.w/2+.17),1.9,door.z,.13,3.8,.62,steel)}}
 for(const [material,list] of batches){const merged=mergeGeometries(list,false);for(const geometry of list)geometry.dispose();if(merged){const mesh=new THREE.Mesh(merged,material);mesh.name=`campaign-static-${root.children.length}`;root.add(mesh);geometries.add(merged)}}
 let disposed=false;
 return {update(dt,state){if(disposed||state&&state.status!=='playing')return;for(const update of animated)update(Math.max(0,Math.min(.05,dt)),state)},dispose(){if(disposed)return;disposed=true;scene.remove(root);for(const geometry of geometries)geometry.dispose();for(const material of materials.values())material.dispose();for(const texture of textures)texture.dispose();root.clear()}};
}
