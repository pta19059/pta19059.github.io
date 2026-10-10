import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildCreatureRig,updateCreatureRig,type CreatureFrame} from '../src/creature-rig';
import {CreatureSkin} from '../src/creature-skin';
import type {EnemyKind} from '../src/types';

type Range={source:THREE.Mesh;start:number;count:number;sourceStart:number};
const variants:{kind:EnemyKind;mount:boolean;name:string}[]=[
 {kind:'raptor',mount:false,name:'raptor'},
 {kind:'soldier',mount:false,name:'soldier'},
 {kind:'mutant',mount:false,name:'mutant'},
 {kind:'brute',mount:false,name:'brute'},
 {kind:'raptor',mount:true,name:'rideable dinosaur'},
];

function fixture(kind:EnemyKind,mount=false){
 const materials=new Map<string,THREE.Material>();
 const rig=buildCreatureRig(kind,mount,(color,emissive=0)=>{
  const key=`${color}-${emissive}`;
  if(!materials.has(key))materials.set(key,new THREE.MeshLambertMaterial({color,emissive}));
  return materials.get(key)!;
 });
 const sources:THREE.Mesh[]=[];
 rig.root.traverse(object=>{if(object instanceof THREE.Mesh)sources.push(object)});
 const geometry=new Set(sources.map(source=>source.geometry));
 return {rig,sources,materials,release(){for(const value of geometry)value.dispose();for(const value of materials.values())value.dispose()}};
}

function frame(changes:Partial<CreatureFrame>={}):CreatureFrame {
 return {x:2.2,z:-3.4,heading:.48,speed:0,attack:0,hurt:0,alive:true,time:0,dt:1/60,...changes};
}

function ranges(skin:CreatureSkin):Range[]{
 const result=skin.mesh.userData.rigidSkinRanges as Range[];
 assert.ok(Array.isArray(result),'the merged skin exposes its original source vertex ranges');
 return result;
}

/** Compare the CPU form of the GPU skin transform with every authored rigid vertex. */
function assertPoseFidelity(skin:CreatureSkin,label:string){
 skin.update();
 const merged=skin.mesh.geometry.getAttribute('position');
 const expected=new THREE.Vector3(),actual=new THREE.Vector3();
 let compared=0,maxError=0;
 for(const range of ranges(skin)){
  const source=range.source,positions=source.geometry.getAttribute('position');
  for(let vertex=0;vertex<range.count;vertex++){
   const flatIndex=range.sourceStart+vertex;
   const sourceIndex=source.geometry.index?.getX(flatIndex)??flatIndex;
   expected.fromBufferAttribute(positions,sourceIndex).applyMatrix4(source.matrixWorld);
   actual.fromBufferAttribute(merged,range.start+vertex);
   skin.mesh.applyBoneTransform(range.start+vertex,actual);
   actual.applyMatrix4(skin.mesh.matrixWorld);
   const error=actual.distanceTo(expected);
   assert.ok(Number.isFinite(error),`${label}: finite vertex coordinates`);
   maxError=Math.max(maxError,error);compared++;
  }
 }
 assert.equal(compared,merged.count,`${label}: every merged vertex retains an authored counterpart`);
 // One float32 bake is allowed; visible deviations in anatomy or gait are not.
 assert.ok(maxError<.00005,`${label}: largest world vertex error ${maxError}m`);
}

test('all creature variants use one rigid skin with at most twelve material groups',()=>{
 for(const {kind,mount,name}of variants){
  const value=fixture(kind,mount);
  const originalGeometry=value.sources.map(source=>source.geometry);
  const originalParents=value.sources.map(source=>source.parent);
  const skin=new CreatureSkin(value.rig);
  try{
   assert.ok(skin.mesh instanceof THREE.SkinnedMesh,`${name}: a real SkinnedMesh`);
   assert.equal(skin.mesh.parent,value.rig.root,`${name}: skin follows the authored root`);
   assert.equal(skin.mesh.visible,true,`${name}: enabled immediately`);
   assert.equal(skin.mesh.geometry.index,null,`${name}: stable non-indexed source ranges`);
   const groups=skin.mesh.geometry.groups;
   assert.ok(groups.length>0&&groups.length<=12,`${name}: ${groups.length} material draws`);
   assert.equal(groups.length,value.materials.size,`${name}: equal materials share one group`);
   const borrowed=Array.isArray(skin.mesh.material)?skin.mesh.material:[skin.mesh.material];
   assert.equal(borrowed.length,value.materials.size,`${name}: each material is stored once`);
   assert.ok(borrowed.every(material=>[...value.materials.values()].includes(material)),`${name}: original materials remain borrowed`);
   const position=skin.mesh.geometry.getAttribute('position');
   let offset=0;
   for(const group of groups){
    assert.equal(group.start,offset,`${name}: material groups are contiguous`);
    assert.ok(group.count>0&&group.count%3===0,`${name}: complete triangles`);
    offset+=group.count;
   }
   assert.equal(offset,position.count,`${name}: groups cover the complete anatomy`);
   const vertexRanges=ranges(skin);
   assert.equal(vertexRanges.length,value.sources.length,`${name}: all authored attachments survive conversion`);
   assert.equal(new Set(vertexRanges.map(range=>range.source)).size,value.sources.length,`${name}: each source appears once`);
   for(let i=0;i<value.sources.length;i++){
    const source=value.sources[i];
    assert.equal(source.geometry,originalGeometry[i],`${name}: original geometry identity survives`);
    assert.equal(source.parent,originalParents[i],`${name}: the authored joint hierarchy survives`);
    assert.equal(source.visible,false,`${name}: rigid duplicate is hidden`);
    assert.equal(source.userData.rigidSkinSource,true,`${name}: source ownership is explicit`);
   }
   const weights=skin.mesh.geometry.getAttribute('skinWeight'),indices=skin.mesh.geometry.getAttribute('skinIndex');
   assert.equal(weights.count,position.count);assert.equal(indices.count,position.count);
   for(let vertex=0;vertex<position.count;vertex++){
    assert.equal(weights.getX(vertex),1,`${name}: one joint owns each vertex`);
    assert.equal(weights.getY(vertex)+weights.getZ(vertex)+weights.getW(vertex),0,`${name}: no unintended joint blending`);
    assert.ok(indices.getX(vertex)<skin.mesh.skeleton.bones.length,`${name}: valid joint index`);
   }
  }finally{skin.dispose();value.release()}
 }
});

test('skinning preserves idle, walking, turning, combat and death anatomy under transformed parents',()=>{
 for(const {kind,mount,name}of variants){
  const value=fixture(kind,mount),rig=value.rig;
  const scene=new THREE.Scene(),parent=new THREE.Group();
  parent.position.set(-6,2,9);parent.rotation.set(.06,-.27,.13);parent.scale.set(1.05,.93,1.16);
  scene.add(parent);parent.add(rig.root);
  rig.root.scale.multiply(new THREE.Vector3(1.13,.88,1.07));
  updateCreatureRig(rig,frame());
  const skin=new CreatureSkin(rig);
  try{
   assertPoseFidelity(skin,`${name} idle`);
   for(let tick=1;tick<=90;tick++){
    const time=tick/60;
    updateCreatureRig(rig,frame({x:2.2+time*.4,z:-3.4-time*2,speed:2,time}));
    if(tick===15||tick===45||tick===90)assertPoseFidelity(skin,`${name} walking ${tick}`);
   }
   // Change the outer transform after binding as well as the creature heading.
   parent.position.add(new THREE.Vector3(1.4,.3,-.8));parent.rotation.y+=.19;parent.scale.y*=1.08;
   for(let tick=1;tick<=45;tick++){
    const time=1.5+tick/60;
    updateCreatureRig(rig,frame({x:2.8+tick*.02,z:-6.4-tick*.015,heading:.48+tick*.035,speed:1.5,time}));
    if(tick===15||tick===45)assertPoseFidelity(skin,`${name} turning ${tick}`);
   }
   for(let tick=1;tick<=18;tick++){
    updateCreatureRig(rig,frame({x:3.7,z:-7.075,heading:2.055,attack:1,time:2.25+tick/60}));
   }
   assertPoseFidelity(skin,`${name} attack`);
   updateCreatureRig(rig,frame({x:3.7,z:-7.075,heading:2.055,attack:.5,hurt:.8,time:2.57}));
   assertPoseFidelity(skin,`${name} hurt`);
   for(let tick=1;tick<=90;tick++){
    updateCreatureRig(rig,frame({x:3.7,z:-7.075,heading:2.055,alive:false,time:2.57+tick/60}));
    if(tick===1||tick===30||tick===90)assertPoseFidelity(skin,`${name} death ${tick}`);
   }
   assert.ok(rig.death>.99,`${name}: the full fallen pose was compared`);
   updateCreatureRig(rig,frame({x:-1,z:4,heading:-.7,time:0}));
   assertPoseFidelity(skin,`${name} restarted`);
  }finally{skin.dispose();value.release()}
 }
});

test('skin mode switches and disposal preserve original visibility and borrowed resources',()=>{
 const value=fixture('raptor',true);
 value.sources[0].visible=false;value.sources.at(-1)!.visible=false;
 const visibility=value.sources.map(source=>source.visible);
 let sourceDisposals=0,materialDisposals=0,skinDisposals=0,skeletonDisposals=0;
 for(const source of value.sources)source.geometry.addEventListener('dispose',()=>sourceDisposals++);
 for(const material of value.materials.values())material.addEventListener('dispose',()=>materialDisposals++);
 const skin=new CreatureSkin(value.rig);
 skin.mesh.geometry.addEventListener('dispose',()=>skinDisposals++);
 const skeleton=skin.mesh.skeleton;
 const disposeSkeleton=skeleton.dispose.bind(skeleton);
 skeleton.dispose=()=>{skeletonDisposals++;disposeSkeleton()};
 try{
  skin.setEnabled(false);
  assert.equal(skin.mesh.visible,false);
  assert.deepEqual(value.sources.map(source=>source.visible),visibility,'classic mode restores even intentionally hidden details');
  updateCreatureRig(value.rig,frame({heading:1.2,speed:2,z:-4,time:.3}));
  skin.setEnabled(true);skin.setEnabled(true);
  assert.equal(skin.mesh.visible,true);
  assert.ok(value.sources.every(source=>!source.visible),'enhanced mode hides all rigid duplicates');
  assertPoseFidelity(skin,'reenabled mount');
  skin.dispose();skin.dispose();
  assert.equal(skin.mesh.parent,null,'the disposed skin detaches from the authored rig');
  assert.deepEqual(value.sources.map(source=>source.visible),visibility,'disposal restores source visibility');
  assert.ok(value.sources.every(source=>!source.userData.rigidSkinSource),'disposal clears borrowed source ownership markers');
  assert.equal(skinDisposals,1,'merged geometry is disposed exactly once');
  assert.equal(skeletonDisposals,1,'owned skeleton is disposed exactly once');
  assert.equal(sourceDisposals,0,'classic source geometry remains available');
  assert.equal(materialDisposals,0,'borrowed materials remain available');
  skin.setEnabled(true);skin.update();
  assert.equal(skin.mesh.parent,null,'late mode callbacks cannot resurrect a disposed skin');
  assert.deepEqual(value.sources.map(source=>source.visible),visibility);
 }finally{skin.dispose();value.release()}
});
