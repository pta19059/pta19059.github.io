import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {Pass} from 'three/addons/postprocessing/Pass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {FXAAShader} from 'three/addons/shaders/FXAAShader.js';

/** Render Elias's real 3D weapon into the world buffer, before color conversion. */
class WeaponPass extends Pass {
 constructor(private readonly draw:(renderer:THREE.WebGLRenderer)=>void){super();this.needsSwap=false;}
 override render(renderer:THREE.WebGLRenderer,_write:THREE.WebGLRenderTarget,read:THREE.WebGLRenderTarget){
  renderer.setRenderTarget(read);this.draw(renderer);
 }
}

/** Restrained highlight glow; the reference's matte surfaces remain readable. */
export class RenderEffects {
 private composer:EffectComposer;
 private bloom:UnrealBloomPass;
 private output:OutputPass;
 private aa:ShaderPass;
 constructor(renderer:THREE.WebGLRenderer,scene:THREE.Scene,camera:THREE.Camera,drawWeapon:(renderer:THREE.WebGLRenderer)=>void){
  const target=new THREE.WebGLRenderTarget(640,400,{type:THREE.HalfFloatType,depthBuffer:true});
  this.composer=new EffectComposer(renderer,target);
  this.composer.addPass(new RenderPass(scene,camera));
  this.composer.addPass(new WeaponPass(drawWeapon));
  this.bloom=new UnrealBloomPass(new THREE.Vector2(640,400),.18,.35,.98);
  this.output=new OutputPass();this.aa=new ShaderPass(FXAAShader);
  this.composer.addPass(this.bloom);this.composer.addPass(this.output);this.composer.addPass(this.aa);
 }
 resize(width:number,height:number,bloom:boolean){
  this.composer.setSize(width,height);this.bloom.enabled=bloom;
  this.aa.uniforms.resolution.value.set(1/width,1/height);
 }
 render(dt:number){this.composer.render(dt);}
 dispose(){
  this.bloom.dispose();
  // Three's bloom disposal omits the high-pass shader material.
  this.bloom.materialHighPassFilter.dispose();
  this.output.dispose();this.aa.dispose();this.composer.dispose();
 }
}
