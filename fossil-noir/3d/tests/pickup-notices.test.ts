import test from 'node:test';
import assert from 'node:assert/strict';
import {AMMO_TYPES,WEAPONS,WEAPON_IDS} from '../src/arsenal';
import {pickupCardContent} from '../src/pickup-notices';
import type {PickupReceipt,WeaponId} from '../src/types';

const textContent=(html:string)=>html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
const additions=(text:string)=>text.match(/\+\d+/g)??[];

test('each discovered weapon card identifies its exact compatible ammunition and actual loaded/reserve quantities',()=>{
  for(const id of WEAPON_IDS){
    const receipt:PickupReceipt={pickupId:`weapon-${id}`,kind:'weapon',weapon:id,loaded:3,ammunition:[{weapon:id,added:7}]};
    const text=textContent(pickupCardContent(receipt,[id]));
    assert.ok(text.includes(WEAPONS[id].name),`${id} weapon name is visible`);
    assert.ok(text.includes(AMMO_TYPES[id].name),`${id} compatible ammunition is visible`);
    assert.match(text,/3\s+LOADED/i);
    assert.deepEqual(additions(text),['+7'],'the card reports the committed reserve addition');
    for(const other of WEAPON_IDS.filter(other=>other!==id))assert.equal(text.includes(AMMO_TYPES[other].name),false,`${id} must not advertise ammunition for ${other}`);
  }
});

test('a weapon found with a full spare reserve shows its loaded ammunition without inventing a reserve gain',()=>{
  const text=textContent(pickupCardContent({pickupId:'rail',kind:'weapon',weapon:'railgun',loaded:5,ammunition:[]},['railgun']));
  assert.ok(text.includes(WEAPONS.railgun.name));assert.ok(text.includes(AMMO_TYPES.railgun.name));
  assert.match(text,/5\s+LOADED/i);assert.deepEqual(additions(text),[]);
});

test('typed ammunition cards show only their matching weapon and the actual accepted count',()=>{
  for(const id of WEAPON_IDS){
    const other=WEAPON_IDS[(WEAPON_IDS.indexOf(id)+1)%WEAPON_IDS.length];
    const text=textContent(pickupCardContent({pickupId:`ammo-${id}`,kind:'ammo',weapon:id,ammunition:[{weapon:id,added:2},{weapon:other,added:77}]},[id]));
    assert.ok(text.includes(AMMO_TYPES[id].name));assert.ok(text.includes(WEAPONS[id].name));
    assert.deepEqual(additions(text),['+2'],'a typed box does not display another weapon’s supply');
    assert.equal(text.includes(AMMO_TYPES[other].name),false);assert.equal(text.includes(WEAPONS[other].name),false);
  }
});

test('ammunition recovered before its weapon explains that it is stored for later use',()=>{
  for(const id of WEAPON_IDS){
    const receipt:PickupReceipt={pickupId:`stored-${id}`,kind:'ammo',weapon:id,ammunition:[{weapon:id,added:4}]};
    const waiting=textContent(pickupCardContent(receipt,[]));
    assert.ok(waiting.includes(AMMO_TYPES[id].name));assert.ok(waiting.includes(WEAPONS[id].name));
    assert.match(waiting,/stored.*find.*weapon/i);
    const ready=textContent(pickupCardContent(receipt,[id]));
    assert.match(ready,/reserve/i);assert.doesNotMatch(ready,/stored.*find.*weapon/i);
  }
});

test('mixed crate cards itemize each positive ammunition addition with its compatible weapon',()=>{
  const contents:{weapon:WeaponId;added:number}[]=[{weapon:'revolver',added:2},{weapon:'shotgun',added:0},{weapon:'plasma',added:7},{weapon:'machinegun',added:-1},{weapon:'railgun',added:0},{weapon:'arc',added:0}];
  const text=textContent(pickupCardContent({pickupId:'mixed',kind:'cache',ammunition:contents},[]));
  assert.deepEqual(additions(text),['+2','+7']);
  for(const item of contents){
    assert.equal(text.includes(AMMO_TYPES[item.weapon].name),item.added>0,`${item.weapon} ammunition is shown only if accepted`);
    assert.equal(text.includes(WEAPONS[item.weapon].name),item.added>0,`${item.weapon} compatibility accompanies its accepted supply`);
  }
});
