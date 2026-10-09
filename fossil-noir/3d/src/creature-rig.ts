import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {EnemyKind} from './types';

type Point=[number,number,number];
type Surface=(color:number,emissive?:number)=>THREE.Material;
type Leg={hip:THREE.Group;knee:THREE.Group;hock:THREE.Group;foot:THREE.Group;side:number;upper:number;lower:number;metatarsal:number;anchor:THREE.Vector2;swingStart:THREE.Vector2;worldFoot:THREE.Vector2;height:number;previous:number;initialized:boolean};
type Arm={upper:THREE.Group;lower:THREE.Group;side:number};
export type CreatureFrame={x:number;z:number;heading:number;speed:number;attack:number;hurt:number;alive:boolean;time:number;dt:number};
export interface CreatureRig {
 root:THREE.Group;kind:EnemyKind;mount:boolean;
 /** Articulation is retained on the rig, with no per-frame geometry allocation. */
 model:THREE.Group;pelvis:THREE.Group;chest:THREE.Group;neck:THREE.Group;head:THREE.Group;jaw:THREE.Group;legs:Leg[];arms:Arm[];tail:THREE.Group[];
 distance:number;heading:number;previousX:number;previousZ:number;previousTime:number;previousAlive:boolean;initialized:boolean;walkStarted:boolean;motion:number;death:number;attackPose:number;turn:number;hipHeight:number;stride:number;
}
const TAU=Math.PI*2;
const clamp=(v:number,a:number,b:number)=>Math.max(a,Math.min(b,v));
const damp=(a:number,b:number,rate:number,dt:number)=>a+(b-a)*(1-Math.exp(-rate*dt));
const angleDelta=(a:number,b:number)=>Math.atan2(Math.sin(b-a),Math.cos(b-a));
const ikDown=new THREE.Vector3(0,-1,0),ikForward=new THREE.Vector3(0,0,-1),ikPitchAxis=new THREE.Vector3(1,0,0);
const ikTarget=new THREE.Vector3(),ikDirection=new THREE.Vector3(),ikPole=new THREE.Vector3(),ikKnee=new THREE.Vector3(),ikLower=new THREE.Vector3(),ikMeta=new THREE.Vector3();
const ikPelvisInverse=new THREE.Quaternion(),ikUpperRotation=new THREE.Quaternion(),ikLowerRotation=new THREE.Quaternion(),ikMetaRotation=new THREE.Quaternion(),ikFootRotation=new THREE.Quaternion(),ikTempRotation=new THREE.Quaternion();

/** Bake all rigid details that share a joint/material into one draw call. */
function batchJoint(group:THREE.Group){
 for(const child of [...group.children])if(child instanceof THREE.Group)batchJoint(child);
 const batches=new Map<THREE.Material,THREE.Mesh[]>();
 for(const child of [...group.children])if(child instanceof THREE.Mesh&&!Array.isArray(child.material)){
  const meshes=batches.get(child.material)??[];meshes.push(child);batches.set(child.material,meshes);
 }
 for(const [material,meshes]of batches){
  if(meshes.length<2)continue;
  const geometries=meshes.map(mesh=>{mesh.updateMatrix();return mesh.geometry.clone().applyMatrix4(mesh.matrix)});
  const geometry=mergeGeometries(geometries,false);
  if(geometry){for(const mesh of meshes){group.remove(mesh);mesh.geometry.dispose()}group.add(new THREE.Mesh(geometry,material))}
  for(const g of geometries)g.dispose();
 }
}

export function buildCreatureRig(kind:EnemyKind,mount:boolean,material:Surface):CreatureRig {
 const root=new THREE.Group(),model=new THREE.Group(),pelvis=new THREE.Group(),chest=new THREE.Group(),neck=new THREE.Group(),head=new THREE.Group(),jaw=new THREE.Group();
 root.add(model);model.add(pelvis);pelvis.add(chest);chest.add(neck);neck.add(head);head.add(jaw);
 const rig:CreatureRig={root,model,pelvis,chest,neck,head,jaw,legs:[],arms:[],tail:[],kind,mount,distance:0,heading:0,previousX:0,previousZ:0,previousTime:0,previousAlive:true,initialized:false,walkStarted:false,motion:0,death:0,attackPose:0,turn:0,hipHeight:kind==='raptor'?1.02:1.025,stride:kind==='raptor'?1.65:kind==='brute'?1.3:1.24};
 root.name=`creature-${kind}${mount?'-strider':''}`;model.name='creature-model';pelvis.name='pelvis';chest.name='chest';neck.name='neck';head.name='head';jaw.name='jaw';
 root.scale.setScalar(mount?1.45:kind==='brute'?1.47:kind==='soldier'?.96:1);
 pelvis.position.y=rig.hipHeight;
 const mesh=(parent:THREE.Group,geometry:THREE.BufferGeometry,color:number,pos:Point=[0,0,0],emissive=0)=>{
  const m=new THREE.Mesh(geometry,material(color,emissive));m.position.set(...pos);parent.add(m);return m;
 };
 const box=(p:THREE.Group,pos:Point,size:Point,color:number,emissive=0)=>mesh(p,new THREE.BoxGeometry(...size),color,pos,emissive);
 const oval=(p:THREE.Group,pos:Point,size:Point,color:number)=>{const m=mesh(p,new THREE.SphereGeometry(1,8,5),color,pos);m.scale.set(...size);return m};
 const segment=(p:THREE.Group,a:Point,b:Point,r1:number,r2:number,color:number,sides=7)=>{
  const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),delta=end.sub(start),m=mesh(p,new THREE.CylinderGeometry(r2,r1,delta.length(),sides,1),color);
  m.position.copy(start).addScaledVector(delta,.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;
 };
 const cone=(p:THREE.Group,pos:Point,radius:number,length:number,color:number,rx=0,rz=0)=>{const m=mesh(p,new THREE.ConeGeometry(radius,length,5),color,pos);m.rotation.set(rx,0,rz);return m};
 const joint=(parent:THREE.Group,pos:Point)=>{const group=new THREE.Group();group.position.set(...pos);parent.add(group);return group};
 // Eight-sided taper profiles give skulls and torsos designed silhouettes without smooth modern meshes.
 const profile=(p:THREE.Group,rings:{z:number;y:number;x:number;h:number}[],color:number)=>{
  const positions:number[]=[],uv:number[]=[],indices:number[]=[];
  for(let j=0;j<rings.length;j++)for(let i=0;i<8;i++){const a=i*TAU/8,r=rings[j];positions.push(Math.cos(a)*r.x,r.y+Math.sin(a)*r.h,r.z);uv.push(i/8,j/(rings.length-1))}
  for(let j=0;j<rings.length-1;j++)for(let i=0;i<8;i++){const a=j*8+i,b=j*8+(i+1)%8,c=a+8,d=b+8;indices.push(a,c,b,b,c,d)}
  for(let i=1;i<7;i++){indices.push(0,i,i+1);const o=(rings.length-1)*8;indices.push(o,o+i+1,o+i)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return mesh(p,g,color);
 };

 const dinosaur=kind==='raptor',soldier=kind==='soldier',brute=kind==='brute';
 const skin=dinosaur?(mount?0x958252:0x60794b):soldier?0xa18c70:brute?0x9a6f64:0x86965e;
 const belly=dinosaur?(mount?0xc4ae73:0x9baf74):skin;
 const armor=soldier?0x496276:brute?0x7b383d:0x4e5d43;
 const dark=dinosaur?(mount?0x5b523b:0x354b38):soldier?0x202e39:brute?0x3c292f:0x364431;
 const bone=dinosaur?0xd4c9a0:soldier?0x80938e:0xd4c3a1;
 if(dinosaur){
  // Horizontal ribcage, narrow chest and muscular pelvic mass; the skull is small relative to the body.
  oval(pelvis,[0,.13,.13],[.32,.3,.6],skin);oval(chest,[0,.09,-.34],[.265,.26,.39],skin);
  oval(chest,[0,-.035,-.24],[.235,.135,.45],belly);oval(pelvis,[0,-.015,.17],[.29,.17,.36],belly);
  neck.position.set(0,.13,-.5);
  segment(neck,[0,0,0],[0,.27,-.15],.16,.115,skin);segment(neck,[0,.25,-.14],[0,.32,-.31],.118,.1,skin);
  head.position.set(0,.32,-.3);
  profile(head,[{z:.13,y:0,x:.14,h:.135},{z:-.06,y:.035,x:.172,h:.15},{z:-.23,y:.015,x:.128,h:.095},{z:-.52,y:-.014,x:.092,h:.074},{z:-.62,y:-.017,x:.076,h:.06}],skin);
  oval(head,[0,-.093,-.34],[.098,.032,.31],dark);
  jaw.position.set(0,-.073,.08);
  profile(jaw,[{z:0,y:-.035,x:.115,h:.036},{z:-.24,y:-.061,x:.102,h:.035},{z:-.6,y:-.056,x:.071,h:.028},{z:-.69,y:-.049,x:.05,h:.025}],belly);
  for(const side of [-1,1]){
   const brow=oval(head,[side*.146,.092,-.085],[.052,.035,.12],skin);brow.rotation.z=side*.24;
   oval(head,[side*.16,.055,-.128],[.018,.032,.036],dark);
   box(head,[side*.172,.056,-.135],[.009,.018,.029],mount?0xd6b86d:0xd9a861,0x271700);
   box(head,[side*.179,.056,-.141],[.004,.018,.008],dark);
   oval(head,[side*.059,.01,-.586],[.017,.012,.022],dark);
   for(let i=0;i<6;i++){
    const z=-.2-i*.064,x=side*(.102-i*.006);
    cone(head,[x,-.105,z],.015,.063+(i%2)*.012,bone,Math.PI);
    cone(jaw,[x*.93,-.012,z-.06],.013,.049,bone);
   }
   // Large haunches belong to the thigh joint, so their silhouette compresses with each step.
   const hip=joint(pelvis,[side*.267,0,.19]),knee=joint(hip,[0,-.5,0]),hock=joint(knee,[0,-.55,0]),foot=joint(hock,[0,-.28,0]);
   oval(hip,[0,-.145,0],[.19,.265,.23],skin);segment(hip,[0,-.05,0],[0,-.5,0],.15,.075,skin);
   oval(knee,[0,-.015,0],[.079,.085,.085],belly);segment(knee,[0,-.02,0],[0,-.55,0],.076,.039,belly);
   segment(hock,[0,0,0],[0,-.28,0],.04,.033,skin);
   oval(foot,[0,.035,-.08],[.093,.055,.13],skin);
   for(let toe=-1;toe<=1;toe++){
    const tx=toe*.056;
    segment(foot,[tx,.035,-.035],[tx*1.35,.022,-.225],.028,.019,skin,5);
    segment(foot,[tx*1.35,.023,-.22],[tx*1.48,.024,-.295],.026,.002,bone,5);
   }
   // The inner second toe is held clear of the floor, with a hooked sickle claw.
   segment(foot,[-side*.08,.068,-.025],[-side*.104,.128,-.12],.031,.023,skin,5);
   segment(foot,[-side*.104,.135,-.12],[-side*.106,.152,-.2],.037,.026,bone,5);
   segment(foot,[-side*.106,.152,-.2],[-side*.105,.073,-.254],.026,.002,bone,5);
   rig.legs.push({hip,knee,hock,foot,side,upper:.5,lower:.55,metatarsal:.28,anchor:new THREE.Vector2(),swingStart:new THREE.Vector2(),worldFoot:new THREE.Vector2(),height:0,previous:0,initialized:false});
   const upper=joint(chest,[side*.23,.055,-.415]),lower=joint(upper,[0,-.22,0]);
   segment(upper,[0,0,0],[0,-.22,0],.052,.036,skin);segment(lower,[0,0,0],[0,-.21,0],.036,.028,skin);
   for(let i=-1;i<=1;i++){segment(lower,[i*.029,-.205,0],[i*.038,-.265,-.08],.016,.011,skin,5);segment(lower,[i*.038,-.265,-.08],[i*.04,-.29,-.11],.018,.001,bone,5)}
   rig.arms.push({upper,lower,side});
   for(let i=0;i<5;i++){const band=oval(pelvis,[side*.293,.2-i*.015,-.28+i*.18],[.027,.13,.053],dark);band.rotation.z=side*.28}
  }
  // A long, tapered counterbalance tail with four independent following joints.
  let parent=joint(pelvis,[0,.14,.62]);
  const lengths=[.48,.47,.46,.45],radii=[.164,.123,.079,.04,.008];
  for(let i=0;i<lengths.length;i++){
   rig.tail.push(parent);segment(parent,[0,0,0],[0,-.025,lengths[i]],radii[i],radii[i+1],skin,8);
   parent=joint(parent,[0,-.025,lengths[i]]);
  }
  if(mount){
   box(pelvis,[0,.41,.08],[.51,.1,.53],0x41382c);box(pelvis,[0,.48,.3],[.52,.18,.085],0x64503d);
   for(const side of [-1,1]){box(pelvis,[side*.325,.12,.075],[.045,.45,.16],0x41382c);box(pelvis,[side*.385,-.085,.075],[.13,.045,.21],bone);segment(chest,[side*.12,.39,-.68],[side*.24,.3,-.1],.012,.012,0x41382c,5)}
  }
 }else{
  const width=brute?.46:.31,shoulder=brute?.51:.345;
  // Pelvis, abdominal cylinder and ribcage form separate masses, rather than a single inflated capsule.
  oval(pelvis,[0,.025,.04],[width*.88,.19,.225],soldier?dark:skin);
  oval(chest,[0,.26,.03],[width*.8,.29,.205],skin);oval(chest,[0,.49,.025],[width,.27,.235],skin);
  segment(chest,[0,.58,0],[0,brute?.66:soldier?.68:.75,-.015],.12,.102,skin);neck.position.set(0,brute?.64:soldier?.65:.73,-.018);head.position.set(0,brute||soldier?.1:.14,0);
  oval(head,[0,.025,0],[.145,.19,.159],skin);oval(head,[0,-.092,-.025],[.123,.1,.13],skin);
  jaw.position.set(0,-.062,-.012);
  if(soldier){
   for(const side of [-1,1]){
    oval(chest,[side*.135,.47,-.174],[.164,.219,.1],armor);box(chest,[side*.165,.098,-.185],[.14,.19,.085],armor);
    box(pelvis,[side*.245,.015,-.185],[.13,.16,.1],dark);
   }
   for(let i=0;i<3;i++)box(chest,[0,.28-i*.065,-.206],[.32,.045,.065],armor);
   box(chest,[0,.44,-.266],[.065,.22,.046],bone);box(pelvis,[0,.015,-.03],[.59,.07,.39],dark);box(pelvis,[0,.025,-.23],[.082,.06,.024],bone);
   box(chest,[0,.38,.258],[.31,.43,.17],dark);box(chest,[0,.48,.356],[.2,.24,.042],armor);
   oval(head,[0,.06,.007],[.18,.2,.187],armor);box(head,[0,.014,-.16],[.255,.065,.026],dark);
   box(head,[0,.021,-.18],[.216,.024,.01],0x64e9d0,0x154b42);
   box(head,[.073,.021,-.189],[.036,.029,.009],0xe0a260,0x32180d);
   oval(head,[0,-.086,-.134],[.104,.06,.075],dark);
   for(const side of [-1,1]){segment(head,[side*.078,-.087,-.149],[side*.078,-.087,-.21],.033,.031,bone);oval(head,[side*.179,.03,.007],[.025,.072,.064],dark)}
   segment(head,[.15,.15,.034],[.15,.32,.034],.009,.007,dark,5);
   box(chest,[-.136,.51,-.268],[.052,.053,.012],0xcaa374);
  }else{
   // Asymmetric pectorals, rib arcs and a heavy implant distinguish the infected silhouettes.
   oval(chest,[-width*.38,.5,-.126],[width*.67,.22,.17],skin);oval(chest,[width*.45,.36,-.135],[width*.44,.205,.124],armor);
   for(let i=0;i<4;i++)for(const side of [-1,1])segment(chest,[side*.025,.52-i*.069,-.236],[side*(width*.75-i*.018),.48-i*.064,-.199],.018,.013,bone,5);
   segment(chest,[0,.51,-.246],[0,.245,-.225],.023,.018,dark,5);
   box(chest,[width*.82,.43,.042],[.14,.26,.27],armor);box(chest,[.055,.47,.239],[.19,.3,.08],0x788375);
   for(let i=0;i<4;i++)box(chest,[.053,.58-i*.062,.287],[.15,.023,.02],dark);
   oval(head,[-.053,.029,-.107],[.09,.07,.09],skin);oval(head,[.083,.027,-.103],[.084,.08,.072],armor);
   for(const side of [-1,1]){oval(head,[side*.073,.047,-.144],[.052,.045,.022],dark);box(head,[side*.071,.04,-.168],[.018,.012,.008],0xd5ac65,0x331908)}
   box(head,[0,-.069,-.142],[.126,.041,.03],dark);
   oval(jaw,[0,-.052,-.122],[.096,.045,.055],skin);
   for(let i=0;i<5;i++){cone(head,[(i-2)*.021,-.084,-.163],.008,.037,bone,Math.PI);cone(jaw,[(i-2)*.021,-.017,-.153],.008,.028,bone)}
   if(brute){oval(chest,[-.36,.56,.035],[.25,.22,.27],armor);for(let i=0;i<3;i++)cone(chest,[-.36+i*.093,.76,.05],.035,.17-i*.018,bone,0,-.15)}
  }
  for(const side of [-1,1]){
   const hip=joint(pelvis,[side*(brute?.23:.176),-.025,.018]),knee=joint(hip,[0,-.52,0]),hock=joint(knee,[0,-.54,0]),foot=joint(hock,[0,0,0]);
   oval(hip,[0,-.2,.01],[brute?.158:.119,.253,.13],soldier?dark:skin);segment(hip,[0,-.05,0],[0,-.52,0],brute?.142:.105,.071,soldier?dark:skin);
   oval(knee,[0,-.008,-.032],[.085,.085,.095],armor);segment(knee,[0,-.03,0],[0,-.54,0],.08,.052,soldier?dark:skin);
   if(soldier){box(hip,[0,-.185,-.09],[.17,.28,.06],armor);box(knee,[0,-.21,-.066],[.12,.24,.055],armor)}
   box(foot,[0,.027,-.092],[brute?.21:.16,.14,.31],soldier?dark:armor);box(foot,[0,-.035,-.085],[brute?.215:.165,.038,.33],dark);
   if(!soldier)for(let toe=-1;toe<=1;toe++)segment(foot,[toe*.044,.012,-.222],[toe*.053,.011,-.273],.016,.001,bone,5);
   rig.legs.push({hip,knee,hock,foot,side,upper:.52,lower:.54,metatarsal:0,anchor:new THREE.Vector2(),swingStart:new THREE.Vector2(),worldFoot:new THREE.Vector2(),height:0,previous:0,initialized:false});
   const upper=joint(chest,[side*shoulder,.56,.015]),lower=joint(upper,[0,-.34,0]);
   const bulky=!soldier&&side<0;
   oval(upper,[0,-.075,0],[bulky?.17:.12,.16,.14],soldier?armor:skin);segment(upper,[0,-.06,0],[0,-.34,0],bulky?.137:.105,.073,soldier?dark:skin);
   segment(lower,[0,0,0],[0,-.33,0],bulky?.115:.075,.048,soldier?dark:skin);oval(lower,[0,-.34,-.014],[.06,.09,.055],soldier?dark:skin);
   if(!soldier){for(let finger=-1;finger<=1;finger++){segment(lower,[finger*.034,-.373,-.025],[finger*.041,-.43,-.065],.019,.012,skin,5);segment(lower,[finger*.041,-.43,-.065],[finger*.043,-.443,-.112],.018,.002,bone,5)}}
   else box(lower,[0,-.16,-.05],[.11,.18,.06],armor);
   rig.arms.push({upper,lower,side});
   if(soldier&&side===1){
    const gun=joint(lower,[0,-.325,-.035]);gun.name='rifle';gun.rotation.x=-1.4;
    box(gun,[0,-.035,-.1],[.105,.11,.38],dark);box(gun,[0,.025,-.09],[.085,.045,.29],bone);
    segment(gun,[0,-.025,-.27],[0,-.025,-.61],.025,.018,dark,6);box(gun,[0,-.135,-.06],[.06,.17,.085],dark);
    box(gun,[0,.032,-.21],[.023,.018,.038],0xd8bb73,0x302000);
   }
  }
 }
 rig.legs.forEach(leg=>{const side=leg.side<0?'left':'right';leg.hip.name=`${side}-thigh`;leg.knee.name=`${side}-knee`;leg.hock.name=`${side}-hock`;leg.foot.name=`${side}-foot`});
 rig.arms.forEach(arm=>{const side=arm.side<0?'left':'right';arm.upper.name=`${side}-upper-arm`;arm.lower.name=`${side}-elbow`});
 rig.tail.forEach((tail,i)=>tail.name=`tail-${i}`);
 batchJoint(model);
 updateCreatureRig(rig,{x:0,z:0,heading:0,speed:0,attack:0,hurt:0,alive:true,time:0,dt:0});
 rig.initialized=false;for(const leg of rig.legs)leg.initialized=false;
 return rig;
}

/** Convert a local ground position through the current (smoothed) facing. */
function toWorld(rig:CreatureRig,x:number,z:number,out:THREE.Vector2){
 const scale=rig.root.scale.x,c=Math.cos(rig.heading),s=Math.sin(rig.heading);
 return out.set(rig.root.position.x+(x*c+z*s)*scale,rig.root.position.z+(-x*s+z*c)*scale);
}

function poseLeg(rig:CreatureRig,leg:Leg,footX:number,footY:number,footZ:number,toePitch:number){
 // Solve in three dimensions with a forward knee pole. Planted feet also remain fixed through turns
 // and pelvis weight shifts; a sagittal-only swing would skate sideways when the creature pivots.
 const dinosaur=rig.kind==='raptor',metaAngle=dinosaur?.47:0;
 const hockY=footY+(dinosaur?Math.cos(metaAngle)*leg.metatarsal:0),hockZ=footZ+(dinosaur?Math.sin(metaAngle)*leg.metatarsal:0);
 ikPelvisInverse.copy(rig.pelvis.quaternion).invert();
 ikTarget.set(footX,hockY,hockZ).sub(rig.pelvis.position).applyQuaternion(ikPelvisInverse).sub(leg.hip.position);
 const rawDistance=ikTarget.length(),distance=clamp(rawDistance,Math.abs(leg.upper-leg.lower)+.01,leg.upper+leg.lower-.002);
 ikDirection.copy(ikTarget).multiplyScalar(1/Math.max(.0001,rawDistance));ikTarget.copy(ikDirection).multiplyScalar(distance);
 ikPole.copy(ikForward).applyQuaternion(ikPelvisInverse);ikPole.addScaledVector(ikDirection,-ikPole.dot(ikDirection));
 if(ikPole.lengthSq()<.00001)ikPole.set(0,1,0);ikPole.normalize();
 const along=(leg.upper*leg.upper-leg.lower*leg.lower+distance*distance)/(2*distance),bend=Math.sqrt(Math.max(0,leg.upper*leg.upper-along*along));
 ikKnee.copy(ikDirection).multiplyScalar(along).addScaledVector(ikPole,bend);ikLower.copy(ikTarget).sub(ikKnee).normalize();
 ikUpperRotation.setFromUnitVectors(ikDown,ikKnee.normalize());ikLowerRotation.setFromUnitVectors(ikDown,ikLower);
 leg.hip.quaternion.copy(ikUpperRotation);leg.knee.quaternion.copy(ikUpperRotation).invert().multiply(ikLowerRotation);
 ikMeta.set(0,-Math.cos(metaAngle),-Math.sin(metaAngle)).applyQuaternion(ikPelvisInverse);ikMetaRotation.setFromUnitVectors(ikDown,ikMeta);
 leg.hock.quaternion.copy(ikLowerRotation).invert().multiply(ikMetaRotation);
 ikTempRotation.setFromAxisAngle(ikPitchAxis,toePitch);ikFootRotation.copy(ikPelvisInverse).multiply(ikTempRotation);
 leg.foot.quaternion.copy(ikMetaRotation).invert().multiply(ikFootRotation);
}

export function updateCreatureRig(rig:CreatureRig,frame:CreatureFrame):void {
 const dt=clamp(frame.dt,0,.1),dinosaur=rig.kind==='raptor',soldier=rig.kind==='soldier',brute=rig.kind==='brute';
 const restarted=rig.initialized&&(frame.time<rig.previousTime-.001||(!rig.previousAlive&&frame.alive));
 if(restarted){rig.initialized=false;rig.walkStarted=false;rig.distance=0;rig.motion=0;rig.attackPose=0;rig.turn=0;rig.death=0;for(const leg of rig.legs)leg.initialized=false}
 if(dt===0&&rig.initialized&&!restarted)return;
 const scale=rig.root.scale.x,travel=rig.initialized?Math.hypot(frame.x-rig.previousX,frame.z-rig.previousZ):0;
 const reset=!rig.initialized||travel>2.5||(!frame.alive&&rig.death===0);
 if(!rig.initialized){rig.heading=frame.heading;rig.distance=0}
 const turnDelta=angleDelta(rig.heading,frame.heading),turnStep=turnDelta*(1-Math.exp(-(dinosaur?8:10)*dt));
 rig.heading+=turnStep;rig.turn=damp(rig.turn,dt?turnStep/dt:0,7,dt);
 rig.root.position.set(frame.x,0,frame.z);rig.root.rotation.set(0,rig.heading,0);
 rig.previousX=frame.x;rig.previousZ=frame.z;rig.previousTime=frame.time;rig.previousAlive=frame.alive;rig.initialized=true;
 rig.motion=damp(rig.motion,frame.alive?clamp(frame.speed/(dinosaur?3.2:2.1),0,1):0,9,dt);
 if(frame.alive&&frame.speed>.02&&!rig.walkStarted){rig.distance=(dinosaur?.62:.66)*.5*rig.stride;rig.walkStarted=true}
 if(frame.alive&&frame.speed>.02&&travel<2.5)rig.distance+=travel/scale;
 rig.attackPose=damp(rig.attackPose,clamp(frame.attack,0,1),frame.attack>rig.attackPose?20:12,dt);
 rig.death=damp(rig.death,frame.alive?0:1,frame.alive?25:6.2,dt);
 const cycle=rig.distance/rig.stride,phase=cycle*TAU,attack=rig.attackPose;
 const breathing=Math.sin(frame.time*2.3)*.006*(1-rig.motion)*(1-rig.death);
 // Weight drops on contact; all leg targets remain on the ground through pelvis motion.
 rig.pelvis.position.y=rig.hipHeight+Math.cos(phase*2)*(dinosaur?.026:.017)*rig.motion+breathing;
 rig.pelvis.rotation.set(0,0,Math.sin(phase)*(dinosaur?.02:.027)*rig.motion);
 rig.chest.rotation.set((dinosaur?-.035:-.055)*rig.motion-(dinosaur?.07:.13)*attack,Math.sin(phase)*(soldier?.018:.045)*rig.motion,0);
 rig.neck.rotation.set((dinosaur?-.23:-.11)*attack+breathing*.9,-rig.turn*.013,0);
 rig.head.rotation.set(frame.hurt>0?Math.sin(frame.time*40)*.055:0,0,frame.hurt>0?-.055:0);
 rig.jaw.rotation.x=dinosaur?-.075-attack*.58:soldier?0:-attack*.38;
 rig.model.rotation.set(rig.death*(dinosaur?-.07:.08),0,rig.death*(dinosaur?1.49:1.52));rig.model.position.y=rig.death*(dinosaur?.43:brute?.64:soldier?.45:.485);
 const stance=dinosaur?.62:.66,supportSpan=rig.stride*stance,half=supportSpan*.5;
 const scratch=new THREE.Vector2();
 for(const leg of rig.legs){
  const q=(cycle+(leg.side>0?.5:0))%1;
  if(reset||!leg.initialized){
   const z=rig.walkStarted?(q<stance?-half+q/stance*supportSpan:half-(q-stance)/(1-stance)*supportSpan):0;
   toWorld(rig,leg.hip.position.x,z+leg.hip.position.z,leg.anchor);leg.worldFoot.copy(leg.anchor);leg.swingStart.copy(leg.anchor);leg.height=0;leg.previous=q;leg.initialized=true;
  }
  let toePitch=0;
  const moving=frame.alive&&frame.speed>.035&&rig.motion>.02;
  if(moving){
   if(q<stance){
    if(leg.previous>=stance)toWorld(rig,leg.hip.position.x,-half+leg.hip.position.z,leg.anchor);
    leg.worldFoot.copy(leg.anchor);leg.height=0;
    toePitch=-Math.pow(clamp((q/stance-.77)/.23,0,1),2)*.2;
   }else{
    if(leg.previous<stance)leg.swingStart.copy(leg.anchor);
    const t=(q-stance)/(1-stance),ease=t*t*(3-2*t);
    toWorld(rig,leg.hip.position.x,-half+leg.hip.position.z,scratch);
    leg.worldFoot.copy(leg.swingStart).lerp(scratch,ease);
    leg.height=Math.pow(Math.sin(t*Math.PI),1.3)*(dinosaur?.23:brute?.16:.18)*Math.sqrt(rig.motion);
    toePitch=Math.sin(t*Math.PI)*.28;
    leg.anchor.copy(leg.worldFoot);
   }
  }else{
   // A halted creature settles the lifted foot; stationary enemies never march in place.
   leg.height=damp(leg.height,0,17,dt);leg.anchor.copy(leg.worldFoot);
  }
  leg.previous=q;
  const wx=(leg.worldFoot.x-frame.x)/scale,wz=(leg.worldFoot.y-frame.z)/scale,c=Math.cos(rig.heading),s=Math.sin(rig.heading);
  const footX=wx*c-wz*s,footZ=wx*s+wz*c;
  poseLeg(rig,leg,footX,(dinosaur?.025:.077)+leg.height,footZ,toePitch);
  if(rig.death>.05){leg.hip.rotation.x+=rig.death*.35;leg.knee.rotation.x-=rig.death*.25}
 }
 for(const arm of rig.arms){
  const swing=Math.sin(phase+(arm.side>0?Math.PI:0))*rig.motion;
  if(dinosaur){arm.upper.rotation.x=.64-swing*.22+attack*.8;arm.lower.rotation.x=.52+attack*.3;arm.upper.rotation.z=-arm.side*(.18+attack*.24)}
  else if(soldier){arm.upper.rotation.x=arm.side>0?.98:1.12;arm.lower.rotation.x=arm.side>0?.42:.58;arm.upper.rotation.x-=attack*.1;arm.upper.rotation.z=arm.side>0?-.06:.25}
  else{arm.upper.rotation.x=.13-swing*.36+attack*(arm.side<0?1.3:.86);arm.upper.rotation.z=-arm.side*(.14+attack*.34);arm.lower.rotation.x=.22+attack*(arm.side<0?.51:.76)}
  arm.upper.rotation.x-=rig.death*.27;arm.lower.rotation.x+=rig.death*.42;
 }
 for(let i=0;i<rig.tail.length;i++){
  const tail=rig.tail[i];tail.rotation.y=-clamp(rig.turn,-3.2,3.2)*(.06+i*.018)+Math.sin(phase-i*.55)*rig.motion*(.045+i*.017);
  tail.rotation.x=.012+attack*(.045+i*.018)+Math.sin(frame.time*1.4-i*.5)*.008*(1-rig.motion);
 }
}
