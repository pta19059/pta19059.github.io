import * as THREE from 'three';
import type {DecalKind} from './retro-textures';

/** Static props are submitted to the renderer's material batches before flush(). */
export interface SetDressingAPI {
 box(x:number,y:number,z:number,w:number,h:number,d:number,material:THREE.Material,ry?:number):void;
 addGeometry(geometry:THREE.BufferGeometry,material:THREE.Material,x:number,y:number,z:number,rx?:number,ry?:number,rz?:number):void;
 mat(color:number,emissive?:number):THREE.Material;
 basic(color:number):THREE.Material;
 sign(text:string,x:number,y:number,z:number,width?:number,height?:number,ry?:number,fg?:string,bg?:string):unknown;
 decal(kind:DecalKind,x:number,y:number,z:number,w:number,h:number,ry?:number,floor?:boolean):void;
}

export function buildSetDressing(api:SetDressingAPI):void {
 const trim=api.mat(0x4c6258),dark=api.mat(0x1a3033),silver=api.mat(0x8d9781);
 const rust=api.mat(0x785443),cloth=api.mat(0x72624b),thread=api.mat(0x8a3f43);
 const box=api.box.bind(api);
 const rod=(a:THREE.Vector3,b:THREE.Vector3,r:number,material:THREE.Material,sides=6)=>{
  const delta=b.clone().sub(a),length=delta.length();
  const geometry=new THREE.CylinderGeometry(r,r,length,sides);
  geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()));
  const center=a.clone().add(b).multiplyScalar(.5);
  api.addGeometry(geometry,material,center.x,center.y,center.z);
 };
 const v=(x:number,y:number,z:number)=>new THREE.Vector3(x,y,z);
 const noise=(n:number)=>{const t=Math.sin(n*127.1+91.7)*43758.5453;return t-Math.floor(t)};

 // The existing evidence cards now form an actual pin-and-thread investigation.
 box(4.885,1.19,7.7,.045,.075,3.77,cloth);
 box(4.885,2.87,7.7,.045,.075,3.77,cloth);
 for(const z of [5.83,9.57])box(4.885,2.03,z,.045,1.72,.07,cloth);
 const pins:THREE.Vector3[]=[];
 for(let i=0;i<7;i++){
  const y=1.8+noise(i)*.5,z=7.7+(noise(i+10)-.5)*2.8;
  pins.push(v(4.795,y+.125,z));
  api.addGeometry(new THREE.CylinderGeometry(.025,.025,.04,6),rust,4.8,y+.125,z,0,0,Math.PI/2);
  // Small printed photograph, a face silhouette, and handwritten caption bars.
  box(4.842,y+.005,z-.035,.012,.17,.11,dark);
  box(4.832,y+.035,z-.035,.008,.053,.04,silver);
  box(4.832,y-.025,z-.035,.008,.06,.068,trim);
  for(let j=0;j<3;j++)box(4.832,y-.115+j*.023,z+.028,.008,.009,.095-j*.015,rust);
 }
 for(const [a,b] of [[0,2],[2,5],[5,1],[1,4],[4,3],[3,6],[6,2]])rod(pins[a],pins[b],.008,thread,4);

 // A framed back-office window and lowered Venetian blinds break the brick wall.
 box(2.75,2.6,11.958,2.77,1.84,.045,dark);
 box(2.75,2.6,11.925,.045,1.84,.028,trim);
 for(const x of [1.33,4.17])box(x,2.6,11.907,.09,1.94,.055,cloth);
 for(const y of [1.65,3.55])box(2.75,y,11.907,2.94,.09,.055,cloth);
 for(let i=0;i<16;i++){
  const y=1.78+i*.105;
  box(2.75,y,11.899,2.7,.062,.055,trim);
  box(2.75,y+.028,11.865,2.69,.014,.012,silver);
 }
 for(const x of [1.96,3.51])box(x,2.57,11.86,.016,1.72,.018,dark);
 rod(v(4.24,3.42,11.872),v(4.24,2.58,11.872),.007,silver,4);
 api.addGeometry(new THREE.CylinderGeometry(.035,.035,.08,6),cloth,4.24,2.55,11.872);

 // Simple clock hands and relief ticks remain legible at native pixel resolution.
 api.addGeometry(new THREE.CylinderGeometry(.345,.345,.07,16),trim,0,3.33,11.914,Math.PI/2);
 api.addGeometry(new THREE.CylinderGeometry(.299,.299,.014,16),silver,0,3.33,11.868,Math.PI/2);
 for(let i=0;i<12;i++){
  const a=i*Math.PI/6;
  rod(v(Math.sin(a)*.245,3.33+Math.cos(a)*.245,11.856),v(Math.sin(a)*.274,3.33+Math.cos(a)*.274,11.856),.009,dark,4);
 }
 rod(v(0,3.33,11.841),v(-.125,3.43,11.841),.014,dark,4);
 rod(v(0,3.33,11.838),v(.18,3.405,11.838),.009,dark,4);

 // Catenary service lines add a stronger street silhouette above walking space.
 for(const z of [-2.5,-12.8])for(const offset of [0,.23]){
  let previous=v(-12.8,6.13,z+offset);
  for(let i=1;i<=12;i++){
   const x=-12.8+i*25.6/12,t=i/12,y=6.13-Math.sin(t*Math.PI)*1.12;
   const next=v(x,y,z+offset);rod(previous,next,.025,dark);previous=next;
  }
  for(const side of [-1,1]){
   box(side*12.81,6.11,z+offset,.23,.2,.11,trim);
   api.addGeometry(new THREE.CylinderGeometry(.075,.075,.15,6),silver,side*12.68,6.08,z+offset,0,0,Math.PI/2);
  }
 }
 // Kickplates, utility meters and pull handles stay within 0.18 m of solid walls.
 for(const side of [-1,1])for(const z of [-3.4,-12.2,-16.6]){
  box(side*12.925,.87,z,.075,1.18,1.82,dark);
  for(const dz of [-.89,.89])box(side*12.875,.87,z+dz,.035,1.13,.035,trim);
  for(const y of [.33,1.4])box(side*12.875,y,z,.035,.03,1.8,trim);
  for(const dz of [-.65,.65])for(const y of [.43,1.3])box(side*12.846,y,z+dz,.018,.045,.045,silver);
  box(side*12.854,1.04,z+.6,.045,.26,.08,trim);
  box(side*12.809,1.05,z+.6,.025,.18,.035,silver);
  // Electricity cabinet below the window sill, with an inset dial and cable clips.
  box(side*12.877,.84,z-.46,.14,.47,.36,trim);
  box(side*12.798,.84,z-.46,.022,.37,.27,dark);
  api.addGeometry(new THREE.CylinderGeometry(.095,.095,.02,12),silver,side*12.778,.9,z-.46,0,0,Math.PI/2);
  box(side*12.758,.9,z-.46,.014,.09,.018,rust);
  box(side*12.761,.695,z-.46,.014,.032,.15,cloth);
  rod(v(side*12.846,.57,z-.46),v(side*12.846,.21,z-.46),.019,rust);
  for(const y of [.26,.46])box(side*12.81,y,z-.46,.027,.03,.06,silver);
 }

 // Covered specimen bed rests entirely on the existing north-west cover island.
 box(-6.7,1.26,-34.5,1.94,.12,1.16,dark);
 api.addGeometry(new THREE.CylinderGeometry(.24,.28,1.35,6),cloth,-6.63,1.49,-34.5,0,0,Math.PI/2);
 api.addGeometry(new THREE.SphereGeometry(.205,8,4),cloth,-7.38,1.49,-34.5);
 for(const x of [-7.1,-6.55,-6.1])box(x,1.704,-34.5,.035,.018,.43,rust);
 for(const z of [-35.045,-33.955]){
  box(-6.7,1.65,z,1.91,.055,.045,silver);
  for(const x of [-7.59,-5.81])box(x,1.49,z,.045,.35,.045,trim);
 }
 api.sign('LAZARUS / SPECIMEN 091',-6.7,2.33,-32.565,2.45,.42,Math.PI,'#b7a57b','#253631');

 // A sealed transport case is contained by the existing southern crate collider.
 box(-7.5,1.67,-42.58,1.05,.34,.92,trim);
 box(-7.5,1.867,-42.58,1.11,.055,.97,dark);
 for(const x of [-7.91,-7.09]){
  box(x,1.876,-42.58,.05,.03,.94,silver);
  for(const z of [-42.95,-42.21])box(x,1.66,z,.09,.12,.04,cloth);
 }
 box(-7.5,1.66,-42.095,.3,.035,.028,silver);
 box(-7.5,1.728,-42.083,.07,.07,.018,rust);
 api.sign('BIOLOGICAL TRANSFER / DO NOT OPEN',-9.965,2.48,-43.9,2.23,.52,Math.PI/2,'#b7a57b','#253631');

 // Scalpels, clamps and a specimen tray fill a clear section of the lab table.
 box(.92,1.385,-39.61,.66,.045,.36,dark);
 for(const x of [.6,1.24])box(x,1.415,-39.61,.025,.055,.36,silver);
 for(const z of [-39.78,-39.44])box(.92,1.415,z,.66,.055,.025,silver);
 for(let i=0;i<3;i++){
  const x=.75+i*.16;
  box(x,1.416,-39.62,.017,.018,.2,silver,-.17+i*.12);
  box(x,1.426,-39.695,.038,.01,.055,trim,-.17+i*.12);
 }
 api.addGeometry(new THREE.TorusGeometry(.034,.008,3,8),silver,1.105,1.423,-39.565,Math.PI/2);
 api.addGeometry(new THREE.TorusGeometry(.034,.008,3,8),silver,1.04,1.423,-39.565,Math.PI/2);
 rod(v(1.045,1.423,-39.595),v(1.1,1.423,-39.726),.007,silver,4);
 rod(v(1.1,1.423,-39.595),v(1.045,1.423,-39.726),.007,silver,4);
}
