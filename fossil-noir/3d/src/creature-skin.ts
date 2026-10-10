import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {CreatureRig} from './creature-rig';

interface SourceMesh {mesh:THREE.Mesh;visible:boolean}
interface SkinPart {source:THREE.Mesh;geometry:THREE.BufferGeometry;sourceStart:number}
interface SkinRange {source:THREE.Mesh;start:number;count:number;sourceStart:number}

/**
 * Render the existing joint animation as one rigidly weighted skin. Every
 * vertex follows its original parent joint exactly; anatomy, gait and hit
 * volumes remain authored by CreatureRig. Materials and source meshes are
 * borrowed, so the classic renderer can still display them unchanged.
 */
export class CreatureSkin {
  readonly mesh:THREE.SkinnedMesh;
  private readonly skeleton:THREE.Skeleton;
  private readonly joints:THREE.Object3D[]=[];
  private readonly sources:SourceMesh[]=[];
  private enabled=true;
  private disposed=false;

  constructor(private readonly rig:CreatureRig) {
    rig.root.updateWorldMatrix(true,true);
    const rootInverse=rig.root.matrixWorld.clone().invert();
    const meshes:THREE.Mesh[]=[];
    rig.root.traverse(object=>{
      if(object instanceof THREE.Mesh&&!('isSkinnedMesh' in object)&&!object.userData.rigidSkinSource)meshes.push(object);
    });
    if(!meshes.length)throw new Error('CreatureSkin requires an authored creature mesh.');
    const bones:THREE.Bone[]=[],indices=new Map<THREE.Object3D,number>();
    const batches=new Map<THREE.Material,SkinPart[]>();
    for(const source of meshes) {
      const joint=source.parent??rig.root;
      let boneIndex=indices.get(joint);
      if(boneIndex===undefined) {
        boneIndex=bones.length;indices.set(joint,boneIndex);this.joints.push(joint);
        const bone=new THREE.Bone();bone.name=joint.name||`creature-joint-${boneIndex}`;
        bone.matrixAutoUpdate=false;bone.matrixWorldAutoUpdate=false;bone.matrixWorld.copy(joint.matrixWorld);bones.push(bone);
      }
      const transformed=source.geometry.clone();
      transformed.applyMatrix4(new THREE.Matrix4().multiplyMatrices(rootInverse,source.matrixWorld));
      const flat=transformed.index?transformed.toNonIndexed():transformed;
      if(flat!==transformed)transformed.dispose();
      // All authored rigs have these channels; defaults also keep original
      // attachments compatible with the same material batches.
      const count=flat.getAttribute('position').count;
      if(!flat.getAttribute('normal'))flat.computeVertexNormals();
      if(!flat.getAttribute('uv'))flat.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(count*2),2));
      const skinIndex=new Uint16Array(count*4),skinWeight=new Float32Array(count*4);
      for(let vertex=0;vertex<count;vertex++){skinIndex[vertex*4]=boneIndex;skinWeight[vertex*4]=1;}
      flat.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(skinIndex,4));
      flat.setAttribute('skinWeight',new THREE.Float32BufferAttribute(skinWeight,4));
      const materials=Array.isArray(source.material)?source.material:[source.material];
      const groups=Array.isArray(source.material)&&flat.groups.length?flat.groups:[{start:0,count,materialIndex:0}];
      let flatBorrowed=false;
      for(const group of groups) {
        const material=materials[group.materialIndex??0];if(!material)continue;
        let geometry=flat;
        if(groups.length>1||group.start!==0||group.count!==count) {
          geometry=new THREE.BufferGeometry();
          for(const [name,attribute]of Object.entries(flat.attributes)) {
            if(attribute instanceof THREE.InterleavedBufferAttribute)throw new Error('CreatureSkin attachments require ordinary vertex attributes.');
            const data=attribute.array.slice(group.start*attribute.itemSize,(group.start+group.count)*attribute.itemSize);
            geometry.setAttribute(name,new THREE.BufferAttribute(data,attribute.itemSize,attribute.normalized));
          }
        }
        let parts=batches.get(material);if(!parts){parts=[];batches.set(material,parts)}
        parts.push({source,geometry,sourceStart:group.start});
        if(geometry===flat)flatBorrowed=true;
      }
      if(!flatBorrowed)flat.dispose();
      this.sources.push({mesh:source,visible:source.visible});source.userData.rigidSkinSource=true;
    }
    // Optional per-vertex painting is standardized across every batch so
    // merging never drops color channels or divides a joint into more draws.
    const parts=[...batches.values()].flat();
    const hasColor=parts.some(part=>part.geometry.hasAttribute('color'));
    for(const part of parts) {
      for(const name of Object.keys(part.geometry.attributes))if(!['position','normal','uv','color','skinIndex','skinWeight'].includes(name))part.geometry.deleteAttribute(name);
      if(hasColor&&!part.geometry.hasAttribute('color')){
        const colors=new Float32Array(part.geometry.getAttribute('position').count*3);colors.fill(1);part.geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
      }
    }
    const ranges:SkinRange[]=[],materials:THREE.Material[]=[],geometries:THREE.BufferGeometry[]=[];
    let start=0;
    for(const [material,batch]of batches) {
      const geometry=mergeGeometries(batch.map(part=>part.geometry),false);
      if(!geometry)throw new Error('CreatureSkin material batch could not be merged.');
      materials.push(material);geometries.push(geometry);
      for(const part of batch){const count=part.geometry.getAttribute('position').count;ranges.push({source:part.source,start,count,sourceStart:part.sourceStart});start+=count;part.geometry.dispose();}
    }
    const geometry=mergeGeometries(geometries,true);
    for(const part of geometries)part.dispose();
    if(!geometry)throw new Error('CreatureSkin could not merge its material groups.');
    this.skeleton=new THREE.Skeleton(bones);
    this.mesh=new THREE.SkinnedMesh(geometry,materials);this.mesh.name='creature-rigid-skin';
    this.mesh.frustumCulled=false;this.mesh.userData.rigidSkinRanges=ranges;
    rig.root.add(this.mesh);rig.root.updateWorldMatrix(true,true);
    // Attached binding cancels the current root transform once, while the
    // mirrored world-space joint matrices already include movement and scale.
    this.mesh.bind(this.skeleton,rig.root.matrixWorld);
    this.setEnabled(true);this.update();
  }

  update():void {
    if(this.disposed||!this.enabled)return;
    this.rig.root.updateWorldMatrix(true,true);
    for(let i=0;i<this.joints.length;i++)this.skeleton.bones[i].matrixWorld.copy(this.joints[i].matrixWorld);
    // updateWorldMatrix does not call SkinnedMesh.updateMatrixWorld, whose
    // attached-bind hook normally refreshes this inverse during scene render.
    this.mesh.bindMatrixInverse.copy(this.mesh.matrixWorld).invert();
    // Three uploads these mirrored transforms once per rendered skeleton.
  }

  setEnabled(enabled:boolean):void {
    if(this.disposed)return;
    this.enabled=enabled;this.mesh.visible=enabled;
    for(const source of this.sources)source.mesh.visible=enabled?false:source.visible;
    if(enabled)this.update();
  }

  dispose():void {
    if(this.disposed)return;this.disposed=true;
    this.mesh.removeFromParent();this.mesh.geometry.dispose();this.skeleton.dispose();
    for(const source of this.sources){source.mesh.visible=source.visible;delete source.mesh.userData.rigidSkinSource;}
  }
}
