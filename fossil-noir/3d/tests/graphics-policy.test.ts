import test from 'node:test';
import assert from 'node:assert/strict';
import {renderProfile} from '../src/graphics-policy';
import type {Settings} from '../src/types';
const settings:Settings={rendering:'enhanced',resolution:'auto',quality:'high',sensitivity:1,volume:.5,musicVolume:.5,effectsVolume:.5,difficulty:'normal',controls:'auto'};
test('enhanced adaptive buffers preserve screen aspect and cap oversized desktop viewports',()=>{
 for(const [w,h] of [[1100,700],[3840,2160],[3440,1440],[390,844]]){
  const p=renderProfile(settings,w,h,false);assert.ok(Math.abs(p.width/p.height-w/h)<.01);assert.ok(p.width<=1920&&p.height<=1080);assert.ok(p.width*p.height<=2073600);assert.equal(p.enhanced,true);
 }
});
test('touch graphics cap pixel budget even when high resolution is requested',()=>{
 for(const resolution of ['auto','720','1080'] as const)for(const [w,h] of [[844,390],[390,844],[2560,1600]]){
  const p=renderProfile({...settings,resolution},w,h,true);assert.ok(p.width<=960&&p.height<=960);assert.ok(p.width*p.height<=462000);assert.ok(Math.abs(p.width/p.height-w/h)<.01);assert.equal(p.shadows,false);assert.equal(p.bloom,false);
 }
});
test('retro retains actual low resolution buffers independently of viewport',()=>{
 assert.deepEqual(renderProfile({...settings,rendering:'retro',resolution:'320'},1920,1080,false),{width:320,height:200,enhanced:false,shadows:false,bloom:false});
 assert.equal(renderProfile({...settings,rendering:'retro',resolution:'auto'},1920,1080,false).width,640);
});
test('fixed resolution resists adaptive scaling while adaptive can reduce workload',()=>{
 const a=renderProfile(settings,1280,720,false,.55),b=renderProfile(settings,1280,720,false,1);assert.ok(a.width*a.height<b.width*b.height*.32);
 assert.deepEqual(renderProfile({...settings,resolution:'1080'},1280,720,false,.55),renderProfile({...settings,resolution:'1080'},1280,720,false,1));
 const low=renderProfile({...settings,quality:'low'},3840,2160,false);assert.ok(low.width<=1280&&low.height<=720);assert.equal(low.shadows,false);
});
