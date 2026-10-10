import assert from 'node:assert/strict';
import test from 'node:test';
import { DEFAULT_SETTINGS, validateSettings } from '../src/ui';

test('fresh or unavailable settings use enhanced adaptive rendering',()=>{
  for(const input of [undefined,null,{},'',[],false]) {
    const settings=validateSettings(input);assert.equal(settings.rendering,'enhanced');assert.equal(settings.resolution,'auto');
  }
  assert.equal(DEFAULT_SETTINGS.rendering,'enhanced');assert.equal(DEFAULT_SETTINGS.resolution,'auto');
});
test('saved classic resolutions migrate without erasing controls, audio or difficulty',()=>{
  for(const resolution of ['320','640'] as const) {
    const settings=validateSettings({resolution,controls:'touch',difficulty:'nightmare',sensitivity:1.7,volume:.25,musicVolume:.4,effectsVolume:.8,quality:'low'});
    assert.equal(settings.rendering,'enhanced');assert.equal(settings.resolution,'auto');assert.equal(settings.controls,'touch');assert.equal(settings.difficulty,'nightmare');assert.equal(settings.sensitivity,1.7);assert.equal(settings.volume,.25);assert.equal(settings.musicVolume,.4);assert.equal(settings.effectsVolume,.8);assert.equal(settings.quality,'low');
  }
});
test('all current visual styles and resolutions survive reload validation',()=>{
  for(const rendering of ['enhanced','retro'] as const) for(const resolution of ['auto','720','1080','640','320'] as const) {
    const selected=validateSettings({rendering,resolution});assert.equal(selected.rendering,rendering);assert.equal(selected.resolution,resolution);assert.deepEqual(validateSettings(JSON.parse(JSON.stringify(selected))),selected);
  }
});
test('unknown visual values fall back safely while legitimate unrelated values remain',()=>{
  const settings=validateSettings({rendering:'ultra',resolution:'4k',volume:.6,controls:'desktop'});assert.equal(settings.rendering,'enhanced');assert.equal(settings.resolution,'auto');assert.equal(settings.volume,.6);assert.equal(settings.controls,'desktop');
});
test('numbers remain finite and bounded across old and new settings',()=>{
  const settings=validateSettings({sensitivity:Infinity,volume:-9,musicVolume:8,effectsVolume:NaN,rendering:'retro',resolution:'1080'});assert.equal(settings.sensitivity,1);assert.equal(settings.volume,0);assert.equal(settings.musicVolume,1);assert.equal(settings.effectsVolume,.95);assert.equal(settings.rendering,'retro');assert.equal(settings.resolution,'1080');
});
