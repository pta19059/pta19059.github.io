import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {CAMPAIGN} from '../src/campaign';
import {Simulation} from '../src/simulation';
import {EnhancedDressing} from '../src/enhanced-dressing';

for(const level of CAMPAIGN)test(`${level.title}: enhanced dressing preserves gameplay, stays bounded and disposes`,()=>{
  const scene=new THREE.Scene();scene.background=new THREE.Color(0x123456);scene.fog=new THREE.Fog(0x789abc,8,70);
  const background=scene.background,fog=scene.fog,definition=JSON.stringify(level),sim=new Simulation(level,'normal'),state=JSON.stringify(sim.state);
  const camera=new THREE.PerspectiveCamera(76,1.6,.06,110);camera.position.set(level.spawn.x,1.65,level.spawn.z);camera.updateMatrixWorld();
  const dressing=new EnhancedDressing(scene,level);dressing.update(sim.state,camera,.016);
  assert.equal(scene.background,background);assert.equal(scene.fog,fog);assert.equal(JSON.stringify(level),definition);assert.equal(JSON.stringify(sim.state),state);
  const root=scene.getObjectByName('enhanced-dressing')!;assert.ok(root);assert.equal(root.userData.cosmeticOnly,true);
  const meshes:THREE.Mesh[]=[],geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),maps=new Set<THREE.Texture>();
  root.traverse(object=>{
    assert.ok(!(object instanceof THREE.Light),'decorative geometry does not add a light per prop');
    if(!(object instanceof THREE.Mesh))return;meshes.push(object);geometries.add(object.geometry);
    for(const material of Array.isArray(object.material)?object.material:[object.material]){
      materials.add(material);const map=(material as THREE.MeshBasicMaterial).map;if(map)maps.add(map);
    }
    const positions=object.geometry.getAttribute('position');for(let i=0;i<positions.count;i++)assert.ok(Number.isFinite(positions.getX(i)+positions.getY(i)+positions.getZ(i)),'mesh vertices are finite');
  });
  assert.ok(meshes.length<=12,`only ${meshes.length} additional draw surfaces`);
  if(level.theme==='jungle'){
    const ground=meshes.find(mesh=>!Array.isArray(mesh.material)&&mesh.material.name==='organic-earth')!;
    const route=meshes.find(mesh=>!Array.isArray(mesh.material)&&mesh.material.name==='organic-gravel-path')!;
    assert.ok(ground&&route,'jungle replaces the tiled field with natural ground and real route strips');
    for(const mesh of [ground,route]){
      const material=mesh.material as THREE.MeshStandardMaterial;
      assert.equal(material.map!.image.width,512);assert.equal(material.map!.image.height,512);
      assert.ok(material.bumpMap&&material.bumpScale>0);assert.ok(material.roughness>=.95);
      const normal=mesh.geometry.getAttribute('normal'),position=mesh.geometry.getAttribute('position');
      for(let i=0;i<normal.count;i++){assert.ok(normal.getY(i)>.99,'ground and route face upwards');assert.ok(position.getY(i)<.04,'new terrain remains a cosmetic thin floor overlay below hazards')}
    }
  }
  const geology=root.getObjectByName('distant-original-geology') as THREE.Mesh|undefined;
  if(geology){
    const positions=geology.geometry.getAttribute('position'),b=level.bounds;
    for(let i=0;i<positions.count;i++){
      const x=positions.getX(i),z=positions.getZ(i);
      assert.ok(x<b.minX||x>b.maxX||z<b.minZ||z>b.maxZ,'new rock geometry never crosses a walkable route');
    }
  }
  const skies=root.getObjectByName('muted-gradient-sky'),clouds=root.getObjectByName('sparse-high-clouds') as THREE.InstancedMesh|undefined;
  if(skies){
    assert.equal(skies.position.distanceTo(camera.position),0,'sky follows camera without mutating scene background');
    const before=Array.from(clouds!.instanceMatrix.array);dressing.update(sim.state,camera,.25);
    assert.deepEqual(Array.from(clouds!.instanceMatrix.array),before,'paused simulation time produces stable clouds');
  }
  let disposed=0;for(const resource of [...geometries,...materials,...maps])resource.addEventListener('dispose',()=>disposed++);
  dressing.dispose();const first=disposed;dressing.dispose();dressing.update(sim.state,camera,.1);
  assert.equal(scene.getObjectByName('enhanced-dressing'),undefined);assert.ok(first>=geometries.size+materials.size+maps.size);assert.equal(disposed,first,'double disposal is harmless');
  assert.equal(JSON.stringify(sim.state),state);
});
