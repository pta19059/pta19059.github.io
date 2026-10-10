import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildCreatureRig,updateCreatureRig} from '../src/creature-rig';
import type {EnemyKind} from '../src/types';

function creature(kind:EnemyKind,mount=false){const materials=new Map<number,THREE.Material>();return buildCreatureRig(kind,mount,color=>{if(!materials.has(color))materials.set(color,new THREE.MeshStandardMaterial({color}));return materials.get(color)!;});}

test('the curved dinosaur tail presents an outside surface from either side at each following joint',()=>{
 const rig=creature('raptor');rig.root.updateMatrixWorld(true);assert.equal(rig.tail.length,6);
 for(const tail of rig.tail){
  const center=tail.localToWorld(new THREE.Vector3(0,-.008,.08));
  for(const side of [-1,1]){
   const origin=center.clone().add(new THREE.Vector3(side,0,0)),direction=new THREE.Vector3(-side,0,0);
   const ray=new THREE.Raycaster(origin,direction,0,.999);
   const ownSurfaces=tail.children.filter(child=>child instanceof THREE.Mesh);
   assert.ok(ray.intersectObjects(ownSurfaces,false).length>0,`${tail.name} has an outward facing ${side<0?'left':'right'} surface`);
  }
 }
});

test('enhanced forms keep finite textured geometry and their joint resources are not recreated while animating',()=>{
 for(const kind of ['raptor','soldier','mutant','brute'] as EnemyKind[]){
  const rig=creature(kind),before=new Set<THREE.BufferGeometry>();
  rig.root.traverse(object=>{if(object instanceof THREE.Mesh){before.add(object.geometry);assert.ok(object.geometry.getAttribute('uv'));for(const coordinate of object.geometry.getAttribute('position').array)assert.ok(Number.isFinite(coordinate));}});
  for(let i=0;i<120;i++)updateCreatureRig(rig,{x:0,z:-i/120,heading:i/240,speed:1,attack:i>100?.8:0,hurt:0,alive:true,time:i/60,dt:1/60});
  const after=new Set<THREE.BufferGeometry>();rig.root.traverse(object=>{if(object instanceof THREE.Mesh)after.add(object.geometry)});
  assert.deepEqual(after,before,`${kind} reuses geometry for gait and attacks`);
 }
});

test('the rideable dinosaur remains within the enhanced geometry budget',()=>{
 const rig=creature('raptor',true);let triangles=0,meshes=0;rig.root.traverse(object=>{if(object instanceof THREE.Mesh){meshes++;triangles+=(object.geometry.index?.count??object.geometry.getAttribute('position').count)/3;}});
 assert.ok(triangles<22000,`strider triangles ${triangles}`);assert.ok(meshes<100,`strider meshes ${meshes}`);
});
