import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildCreatureRig,updateCreatureRig,type CreatureFrame} from '../src/creature-rig';
import type {EnemyKind} from '../src/types';

const kinds:EnemyKind[]=['raptor','soldier','mutant','brute'];
function creature(kind:EnemyKind,mount=false){
 const materials=new Map<string,THREE.Material>();
 return buildCreatureRig(kind,mount,(color,emissive=0)=>{
  const key=`${color}-${emissive}`;
  if(!materials.has(key))materials.set(key,new THREE.MeshLambertMaterial({color,emissive}));
  return materials.get(key)!;
 });
}
function frame(changes:Partial<CreatureFrame>={}):CreatureFrame {
 return {x:0,z:0,heading:0,speed:0,attack:0,hurt:0,alive:true,time:0,dt:1/60,...changes};
}

test('articulated creature feet stay grounded during stance while knees flex',()=>{
 for(const kind of kinds){
  const rig=creature(kind),prior=rig.legs.map(()=>new THREE.Vector3());
  let contacts=0,maxDrift=0,maxGroundError=0,kneeMin=Infinity,kneeMax=-Infinity;
  for(let tick=0;tick<180;tick++){
   const time=tick/60;
   updateCreatureRig(rig,frame({z:-time*2,speed:2,time}));
   rig.root.updateMatrixWorld(true);
   for(let i=0;i<rig.legs.length;i++){
    const leg=rig.legs[i],foot=leg.foot.getWorldPosition(new THREE.Vector3());
    const q=(rig.distance/rig.stride+(leg.side>0?.5:0))%1;
    const stance=kind==='raptor'?.62:.66;
    // Ignore contact transitions and the intentional toe roll at the end of stance.
    if(tick>3&&q>.08&&q<stance*.74&&leg.height<.001){
     contacts++;
     maxGroundError=Math.max(maxGroundError,Math.abs(foot.y-(kind==='raptor'?.025:.077)*rig.root.scale.y));
     maxDrift=Math.max(maxDrift,Math.hypot(foot.x-prior[i].x,foot.z-prior[i].z));
    }
    prior[i].copy(foot);
    kneeMin=Math.min(kneeMin,leg.knee.rotation.x);kneeMax=Math.max(kneeMax,leg.knee.rotation.x);
   }
  }
  assert.ok(contacts>50,`${kind} has a sustained planted stance`);
  assert.ok(maxGroundError<.02,`${kind} stance ground error ${maxGroundError.toFixed(3)}m`);
  assert.ok(maxDrift<.015,`${kind} planted foot drift ${maxDrift.toFixed(3)}m per frame`);
  assert.ok(kneeMax-kneeMin>.25,`${kind} knees bend through the gait`);
 }
});

test('stopped and paused creatures do not keep marching',()=>{
 for(const kind of kinds){
  const rig=creature(kind);
  for(let tick=0;tick<60;tick++)updateCreatureRig(rig,frame({z:-tick/30,speed:2,time:tick/60}));
  const distance=rig.distance,z=-59/30;
  for(let tick=0;tick<60;tick++)updateCreatureRig(rig,frame({z,speed:0,time:1+tick/60}));
  assert.equal(rig.distance,distance,`${kind} does not advance its gait while stopped`);
  assert.ok(rig.legs.every(leg=>leg.height<.001),`${kind} settles its lifted foot`);
  const rotations=rig.legs.map(leg=>[leg.hip.rotation.x,leg.knee.rotation.x,leg.foot.rotation.x]);
  updateCreatureRig(rig,frame({z,speed:2,time:119/60,dt:0}));
  assert.deepEqual(rig.legs.map(leg=>[leg.hip.rotation.x,leg.knee.rotation.x,leg.foot.rotation.x]),rotations,`${kind} freezes in pause`);
 }
});

test('enhanced creature anatomy stays within the triangle and batched mesh budget',()=>{
 for(const kind of kinds){
  const rig=creature(kind);let triangles=0,meshes=0;
  rig.root.traverse(object=>{if(object instanceof THREE.Mesh){meshes++;triangles+=(object.geometry.index?.count??object.geometry.attributes.position.count)/3;}});
  assert.ok(triangles<22000,`${kind}: ${triangles} triangles`);
  assert.ok(meshes<100,`${kind}: ${meshes} batched meshes`);
 }
});

test('a restarted mission immediately clears the previous death and attack pose',()=>{
 for(const kind of kinds){
  const rig=creature(kind);
  for(let tick=0;tick<90;tick++)updateCreatureRig(rig,frame({z:-tick/30,speed:2,attack:.7,time:tick/60}));
  for(let tick=0;tick<90;tick++)updateCreatureRig(rig,frame({z:-3,speed:0,alive:false,time:1.5+tick/60}));
  assert.ok(rig.death>.95,`${kind} reaches its fallen pose`);
  updateCreatureRig(rig,frame({x:4,z:-4,time:0,alive:true}));
  assert.equal(rig.death,0,`${kind} revives without a tilted corpse pose`);
  assert.equal(rig.attackPose,0,`${kind} does not inherit an old attack`);
  assert.equal(rig.distance,0,`${kind} starts a fresh footfall cycle`);
  assert.ok(rig.legs.every(leg=>leg.height===0),`${kind} starts with grounded feet`);
 }
});
