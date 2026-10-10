import test from 'node:test';
import assert from 'node:assert/strict';
import { Simulation } from '../src/simulation';
import { AMMO_TYPES, DIFFICULTIES, WEAPONS, WEAPON_IDS } from '../src/arsenal';
import { LEVEL } from '../src/level';
import { EMPTY_INPUT, type Difficulty, type InputFrame, type LevelData, type PickupReceipt, type Vec2, type WeaponId } from '../src/types';

const frame = (changes: Partial<InputFrame> = {}): InputFrame => ({ ...EMPTY_INPUT, ...changes });
function advance(sim: Simulation, seconds: number, changes: Partial<InputFrame> = {}) {
  for (let t = 0; t < seconds - 1e-8; t += .025) sim.update(Math.min(.025, seconds - t), frame(changes));
}
function arena(changes: Partial<LevelData> = {}, difficulty: Difficulty = 'normal') {
  return new Simulation({
    ...LEVEL, chapterId: 0, safe: false, requiredEvidence: 0, requiredKills: [], defaultLoadout: [], waves: [],
    spawn: { x: 0, z: 0 }, exit: { x: 18, z: 18 }, checkpoint: { x: 12, z: 12 },
    switch: { x: 18, z: 12 }, mount: { x: 12, z: 18 }, bounds: { minX: -20, maxX: 20, minZ: -20, maxZ: 20 },
    walls: [], doors: [], enemies: [], pickups: [], hazards: [], props: [], destructibles: [], ...changes,
  }, difficulty);
}
function aim(sim: Simulation, target: Vec2) {
  const p = sim.state.player, length = Math.hypot(target.x - p.x, target.z - p.z);
  sim.update(0, frame({ lookX: -Math.atan2(target.x - p.x, -(target.z - p.z)) - p.yaw, lookY: Math.atan2(1.3 - (p.y + 1.65), length) - p.pitch }));
}
function equip(id: WeaponId, changes: Partial<LevelData> = {}) {
  const sim = arena({ pickups: [{ id: 'weapon', kind: id, x: 0, z: 0 }], ...changes });
  advance(sim, .2);
  return sim;
}
const receipts=(sim:Simulation):PickupReceipt[]=>sim.state.events.filter(event=>event.type==='pickup'&&event.pickup).map(event=>event.pickup!);

test('each ammunition identity explicitly names its compatible weapon and has its own visual color',()=>{
  assert.equal(new Set(WEAPON_IDS.map(id=>AMMO_TYPES[id].name)).size,6);
  assert.equal(new Set(WEAPON_IDS.map(id=>AMMO_TYPES[id].color)).size,6);
  for(const id of WEAPON_IDS){
    assert.ok(AMMO_TYPES[id].description.includes(WEAPONS[id].name),`${id} description names the compatible weapon`);
    assert.match(AMMO_TYPES[id].color,/^#[0-9a-f]{6}$/);
    assert.ok(AMMO_TYPES[id].unit.length>0);
  }
});

test('typed ammunition receipts report the exact difficulty-adjusted reserve gain for each of six weapons',()=>{
  for(const difficulty of ['easy','normal','hard','nightmare'] as Difficulty[])for(const id of WEAPON_IDS){
    const sim=arena({pickups:[{id:`supply-${id}`,kind:'ammo',ammoFor:id,amount:13,x:0,z:0}]},difficulty);
    sim.update(0,frame());
    const expected=Math.round(13*DIFFICULTIES[difficulty].ammo);
    assert.deepEqual(receipts(sim),[{pickupId:`supply-${id}`,kind:'ammo',weapon:id,ammunition:[{weapon:id,added:expected}]}]);
    assert.equal(sim.state.player.reserve[id],expected);
    assert.ok(WEAPON_IDS.filter(other=>other!==id).every(other=>sim.state.player.reserve[other]===0));
    assert.deepEqual(sim.state.player.owned,[],'finding ammunition does not grant a weapon');
  }
});

test('supply receipts contain the accepted capped quantity and full boxes remain silent and uncollected',()=>{
  for(const id of WEAPON_IDS){
    const sim=arena({pickups:[{id:'ammo',kind:'ammo',ammoFor:id,amount:30,x:0,z:0}]},'nightmare');
    sim.state.player.reserve[id]=WEAPONS[id].reserveCap;
    sim.update(0,frame());
    assert.equal(sim.state.pickups[0].collected,false);
    assert.deepEqual(sim.state.events,[],'a full supply produces no pickup or message event');
    sim.state.player.reserve[id]-=2;
    sim.update(0,frame());
    assert.deepEqual(receipts(sim),[{pickupId:'ammo',kind:'ammo',weapon:id,ammunition:[{weapon:id,added:2}]}]);
    assert.equal(sim.state.player.reserve[id],WEAPONS[id].reserveCap);
  }
});

test('first weapon receipts distinguish loaded ammunition from the actual new reserve, including a full reserve',()=>{
  for(const id of WEAPON_IDS)for(const room of [0,2]){
    const sim=arena({pickups:[{id:'found-gun',kind:id,x:0,z:0}]},'hard');
    sim.state.player.reserve[id]=WEAPONS[id].reserveCap-room;
    sim.update(0,frame());
    assert.deepEqual(receipts(sim),[{pickupId:'found-gun',kind:'weapon',weapon:id,loaded:WEAPONS[id].clip,ammunition:room?[{weapon:id,added:room}]:[]}]);
    assert.equal(sim.state.player.ammo[id],WEAPONS[id].clip);
    assert.equal(sim.state.player.reserve[id],WEAPONS[id].reserveCap);
    assert.equal(sim.state.pickups[0].collected,true,'a previously unknown gun is acquired even when its spare reserve is full');
  }
});

test('duplicate gun receipts are ammunition receipts without refilling the magazine or resetting reload',()=>{
  for(const id of WEAPON_IDS){
    const sim=equip(id),p=sim.state.player;
    sim.state.events=[];p.ammo[id]=1;p.reserve[id]=WEAPONS[id].reserveCap-2;
    sim.reload();const reload=p.reload;sim.state.events=[];
    sim.state.pickups.push({id:'duplicate-gun',kind:id,x:0,z:0,collected:false});
    sim.update(0,frame());
    assert.deepEqual(receipts(sim),[{pickupId:'duplicate-gun',kind:'ammo',weapon:id,ammunition:[{weapon:id,added:2}]}]);
    assert.equal(p.ammo[id],1);assert.equal(p.reload,reload);
    sim.state.events=[];sim.state.pickups.push({id:'full-duplicate',kind:id,x:0,z:0,collected:false});
    sim.update(0,frame());
    assert.equal(sim.state.pickups.at(-1)!.collected,false);assert.deepEqual(sim.state.events,[]);
  }
});

test('mixed crates itemize only the ammunition actually accepted for individual weapons',()=>{
  const sim=arena({pickups:[{id:'mixed-crate',kind:'ammo',x:0,z:0}]});
  const rooms=[0,2,1,0,3,4];
  WEAPON_IDS.forEach((id,index)=>{sim.state.player.reserve[id]=WEAPONS[id].reserveCap-rooms[index];});
  sim.update(0,frame());
  assert.deepEqual(receipts(sim),[{pickupId:'mixed-crate',kind:'cache',ammunition:[{weapon:'shotgun',added:2},{weapon:'plasma',added:1},{weapon:'railgun',added:3},{weapon:'arc',added:4}]}]);
  assert.ok(WEAPON_IDS.every(id=>sim.state.player.reserve[id]===WEAPONS[id].reserveCap));
  assert.ok(WEAPON_IDS.every(id=>sim.state.player.ammo[id]===0),'a mixed crate does not fill magazines');
  sim.state.events=[];sim.state.pickups.push({id:'full-crate',kind:'ammo',x:0,z:0,collected:false});
  sim.update(0,frame());
  assert.equal(sim.state.pickups.at(-1)!.collected,false);assert.deepEqual(sim.state.events,[]);
});

test('wave soldier drops issue one machine-gun-specific receipt only when the physical supply is collected',()=>{
  const sim=arena({defaultLoadout:['railgun'],waves:[{id:'reinforcement',trigger:{x:0,z:0},radius:1,enemies:[{id:'reinforcement-soldier',kind:'soldier',x:0,z:-5}]}]});
  sim.update(.025,frame());aim(sim,sim.state.enemies[0]);sim.state.events=[];
  sim.update(.025,frame({fire:true}));
  assert.equal(sim.state.enemies[0].alive,false);
  assert.deepEqual(receipts(sim),[],'a distant kill creates the supply without awarding it');
  const drop=sim.state.pickups.find(item=>item.id==='drop-reinforcement-soldier')!;
  assert.ok(drop);sim.state.player.x=drop.x;sim.state.player.z=drop.z;sim.state.events=[];
  sim.update(0,frame());
  assert.deepEqual(receipts(sim),[{pickupId:drop.id,kind:'ammo',weapon:'machinegun',ammunition:[{weapon:'machinegun',added:20}]}]);
  sim.state.events=[];sim.update(0,frame());assert.deepEqual(receipts(sim),[]);
});

test('pickup receipts are transient and are not replayed when restoring a checkpoint',()=>{
  const sim=arena({checkpoint:{x:0,z:0},pickups:[{id:'rail',kind:'railgun',x:0,z:0},{id:'key',kind:'keycard',x:0,z:0}]});
  sim.update(0,frame());assert.equal(receipts(sim).length,1);assert.equal(sim.state.checkpoint,true);
  sim.restart(true);assert.deepEqual(receipts(sim),[]);assert.equal(sim.state.pickups[0].collected,true);
});

test('six weapon slots and wheel switching skip weapons that have not been discovered', () => {
  const sim = equip('revolver');
  assert.equal(WEAPON_IDS.length, 6);
  for (const slot of [2, 3, 4, 5, 6]) {
    sim.update(0, frame({ weaponSlot: slot }));
    assert.equal(sim.state.player.weapon, 'revolver');
    assert.match(sim.state.message, /not acquired/i);
  }
  sim.update(0, frame({ weaponDelta: 1 }));
  assert.equal(sim.state.player.weapon, 'revolver');
  sim.state.pickups.push({ id: 'rail', kind: 'railgun', x: 0, z: 0, collected: false });
  sim.update(0, frame());
  assert.equal(sim.state.player.weapon, 'railgun');
  sim.update(0, frame({ weaponDelta: 1 }));
  assert.equal(sim.state.player.weapon, 'revolver');
  sim.update(0, frame({ weaponDelta: -1 }));
  assert.equal(sim.state.player.weapon, 'railgun');
  sim.update(0, frame({ weaponSlot: 6 }));
  assert.equal(sim.state.player.weapon, 'railgun', 'an unowned sixth slot must not clamp to an owned fourth slot');
});

test('typed ammunition is collected before its weapon and fills only its own finite reserve', () => {
  for (const id of WEAPON_IDS) {
    const sim = arena({ pickups: [{ id: 'ammo', kind: 'ammo', ammoFor: id, amount: 13, x: 0, z: 0 }] });
    sim.update(0, frame());
    assert.deepEqual(sim.state.player.owned, []);
    assert.equal(sim.state.player.reserve[id], 13, `${id} reserve before acquiring a weapon`);
    assert.equal(sim.state.player.ammo[id], 0, 'an ammo box does not create a loaded weapon');
    for (const other of WEAPON_IDS.filter(other => other !== id)) assert.equal(sim.state.player.reserve[other], 0);
    sim.state.pickups.push({ id: 'found-weapon', kind: id, x: 0, z: 0, collected: false });
    sim.update(0, frame());
    assert.ok(sim.state.player.owned.includes(id));
    assert.equal(sim.state.player.ammo[id], WEAPONS[id].clip);
    assert.ok(sim.state.player.reserve[id] >= 13 && sim.state.player.reserve[id] <= WEAPONS[id].reserveCap);
  }
});

test('a full reserve leaves its ammo box available; a nearly full reserve accepts only its capacity', () => {
  for (const id of WEAPON_IDS) {
    const sim = arena({ pickups: [{ id: 'ammo', kind: 'ammo', ammoFor: id, amount: 30, x: 0, z: 0 }] });
    sim.state.player.reserve[id] = WEAPONS[id].reserveCap;
    sim.update(0, frame());
    assert.equal(sim.state.pickups[0].collected, false, `${id} full box stays on the ground`);
    sim.state.player.reserve[id] -= 2;
    sim.update(0, frame());
    assert.equal(sim.state.pickups[0].collected, true);
    assert.equal(sim.state.player.reserve[id], WEAPONS[id].reserveCap, `${id} reserve is capped`);
  }
});

test('duplicate weapon pickups supply reserve without filling a spent magazine or cancelling its reload', () => {
  for (const id of WEAPON_IDS) {
    const sim = equip(id), p = sim.state.player;
    p.ammo[id] = 1; p.reserve[id] = 2;
    sim.reload();
    const reload = p.reload;
    assert.ok(reload > 0);
    sim.state.pickups.push({ id: 'duplicate', kind: id, x: 0, z: 0, collected: false });
    sim.update(0, frame());
    assert.equal(p.ammo[id], 1, `${id} duplicate must not refill the clip`);
    assert.equal(p.reload, reload, `${id} duplicate must not interrupt reload`);
    assert.equal(p.owned.filter(weapon => weapon === id).length, 1);
    assert.ok(p.reserve[id] > 2 && p.reserve[id] <= WEAPONS[id].reserveCap);
  }
});

test('all six reloads consume finite reserve and switching cancels unfinished reloads', () => {
  for (const id of WEAPON_IDS) {
    const sim = arena({ pickups: WEAPON_IDS.map((kind, index) => ({ id: `weapon-${index}`, kind, x: 0, z: 0 })) });
    advance(sim, .3);
    sim.switchWeapon(0, WEAPON_IDS.indexOf(id) + 1);
    advance(sim, .3);
    const p = sim.state.player;
    p.ammo[id] = 0; p.reserve[id] = 2;
    sim.reload();
    assert.ok(p.reload > 0, `${id} starts reload`);
    sim.update(.025, frame({ fire: true }));
    assert.equal(p.ammo[id], 0, `${id} cannot fire while reloading`);
    advance(sim, WEAPONS[id].reload + .1);
    assert.equal(p.ammo[id], 2);
    assert.equal(p.reserve[id], 0);
    p.ammo[id] = 0; p.reserve[id] = 3;
    sim.reload();
    const next = WEAPON_IDS[(WEAPON_IDS.indexOf(id) + 1) % WEAPON_IDS.length];
    sim.update(0, frame({ weaponSlot: WEAPON_IDS.indexOf(next) + 1 }));
    assert.equal(p.weapon, next);
    assert.equal(p.reload, 0);
    advance(sim, WEAPONS[id].reload + .1);
    assert.equal(p.ammo[id], 0, `${id} cancelled reload cannot finish on a hidden weapon`);
    assert.equal(p.reserve[id], 3);
  }
});

test('soldier ammunition drops remain in the world until the player walks over them, exactly once', () => {
  const sim = equip('railgun', { enemies: [{ id: 'soldier', kind: 'soldier', x: 0, z: -5 }] });
  const enemy = sim.state.enemies[0];
  aim(sim, enemy);
  const reserve = sim.state.player.reserve.machinegun;
  sim.update(.025, frame({ fire: true }));
  assert.equal(enemy.alive, false);
  const drop = sim.state.pickups.find(item => item.id === 'drop-soldier');
  assert.ok(drop, 'a visible pickup definition is created at the corpse');
  assert.equal(drop.kind, 'ammo');
  assert.equal(drop.ammoFor, 'machinegun');
  assert.equal(drop.collected, false);
  assert.equal(sim.state.player.reserve.machinegun, reserve, 'killing at range does not automatically award ammunition');
  advance(sim, .9, { fire: true });
  assert.equal(sim.state.pickups.filter(item => item.id === drop.id).length, 1);
  sim.update(0, frame({ lookX: -sim.state.player.yaw, lookY: -sim.state.player.pitch }));
  advance(sim, 1.15, { forward: 1 });
  assert.equal(drop.collected, true, 'ordinary movement collects the visible dropped pickup');
  assert.ok(sim.state.player.reserve.machinegun > reserve);
  const supplied = sim.state.player.reserve.machinegun;
  advance(sim, .2);
  assert.equal(sim.state.player.reserve.machinegun, supplied, 'the collected drop cannot be supplied twice');
});

test('Arc Disruptor chains to at most three living enemies and respects walls and closed doors', () => {
  const enemies = [0, 2, 4, 6].map((x, index) => ({ id: `target-${index}`, kind: 'brute' as const, health: 1000, x, z: -5 }));
  const sim = equip('arc', { enemies });
  aim(sim, sim.state.enemies[0]);
  const before = sim.state.enemies.map(enemy => enemy.health);
  sim.update(.025, frame({ fire: true }));
  assert.equal(sim.state.enemies.filter((enemy, index) => enemy.health < before[index]).length, 3);
  assert.equal(sim.state.enemies[3].health, before[3], 'a fourth link is not allowed');
  assert.ok(sim.state.effects.some(effect => effect.kind === 'arc'));
  for (const obstacle of ['wall', 'door'] as const) {
    const blocked = equip('arc', {
      enemies: enemies.slice(0, 2),
      walls: obstacle === 'wall' ? [{ x: 1, z: -5, w: .3, d: 4, h: 4, material: 'metal' }] : [],
      doors: obstacle === 'door' ? [{ id: 'closed', x: 1, z: -5, w: .3, d: 4, label: 'SEALED' }] : [],
    });
    aim(blocked, blocked.state.enemies[0]);
    const hp = blocked.state.enemies.map(enemy => enemy.health);
    blocked.update(.025, frame({ fire: true }));
    assert.ok(blocked.state.enemies[0].health < hp[0]);
    assert.equal(blocked.state.enemies[1].health, hp[1], `${obstacle} prevents an arc link through its surface`);
  }
});

test('Rail Rifle gives a precise single-target hit rather than splash or a second chain', () => {
  const sim = equip('railgun', { enemies: [{ id: 'aimed', kind: 'soldier', health: 1000, x: 0, z: -5 }, { id: 'nearby', kind: 'soldier', health: 1000, x: .95, z: -5 }] });
  aim(sim, sim.state.enemies[0]);
  const before = sim.state.enemies.map(enemy => enemy.health);
  sim.update(.025, frame({ fire: true }));
  assert.equal(before[0] - sim.state.enemies[0].health, WEAPONS.railgun.damage);
  assert.equal(sim.state.enemies[1].health, before[1]);
  assert.ok(sim.state.effects.some(effect => effect.kind === 'rail'));
});

test('four difficulties change real health, pursuit, received damage and collected ammunition', () => {
  const difficulties: Difficulty[] = ['easy', 'normal', 'hard', 'nightmare'];
  const samples = difficulties.map(difficulty => {
    const moving = arena({ enemies: [{ id: 'raptor', kind: 'raptor', x: 0, z: -8 }], pickups: [{ id: 'ammo', kind: 'ammo', ammoFor: 'plasma', amount: 20, x: 0, z: 0 }] }, difficulty);
    advance(moving, .7);
    const damage = arena({ hazards: [{ x: 0, z: 0, w: 3, d: 3 }] }, difficulty);
    advance(damage, .7);
    return { difficulty, hp: moving.state.enemies[0].maxHealth, travel: moving.state.enemies[0].z + 8, hurt: 100 - damage.state.player.health, ammo: moving.state.player.reserve.plasma };
  });
  for (let index = 1; index < samples.length; index++) {
    assert.ok(samples[index].hp > samples[index - 1].hp, 'enemy health rises with difficulty');
    assert.ok(samples[index].travel > samples[index - 1].travel, 'actual pursuit speed rises with difficulty');
    assert.ok(samples[index].hurt > samples[index - 1].hurt, 'actual received damage rises with difficulty');
    assert.ok(samples[index].ammo < samples[index - 1].ammo, 'actual ammo supplies shrink with difficulty');
  }
  assert.equal(Object.keys(DIFFICULTIES).length, 4);
});

test('checkpoint restores exactly one dynamic drop and full restart removes transient drops', () => {
  const sim = equip('railgun', { checkpoint: { x: 8, z: 0 }, enemies: [{ id: 'checkpoint-soldier', kind: 'soldier', x: 0, z: -5 }], pickups: [{ id: 'weapon', kind: 'railgun', x: 0, z: 0 }, { id: 'keycard', kind: 'keycard', x: 8, z: 0 }] });
  aim(sim, sim.state.enemies[0]);
  sim.update(.025, frame({ fire: true }));
  assert.equal(sim.state.pickups.filter(item => item.id === 'drop-checkpoint-soldier').length, 1);
  sim.update(0, frame({ lookX: -sim.state.player.yaw, lookY: -sim.state.player.pitch }));
  advance(sim, 1.7, { strafe: 1 });
  assert.equal(sim.state.player.keycard, true);
  sim.restart(true);
  assert.equal(sim.state.pickups.filter(item => item.id === 'drop-checkpoint-soldier').length, 1);
  assert.equal(sim.state.pickups.find(item => item.id === 'drop-checkpoint-soldier')!.collected, false);
  assert.equal(sim.state.player.ammo.railgun, WEAPONS.railgun.clip - 1, 'checkpoint preserves spent ammunition');
  sim.restart(false);
  assert.equal(sim.state.pickups.some(item => item.id.startsWith('drop-')), false);
  assert.equal(sim.state.enemies[0].alive, true);
  assert.deepEqual(sim.state.player.owned, []);
  assert.ok(WEAPON_IDS.every(id => sim.state.player.ammo[id] === 0 && sim.state.player.reserve[id] === 0));
});

test('reinforcements trigger once and a required ambush cannot be skipped by reaching the exit early', () => {
  const sim = arena({
    defaultLoadout: ['railgun'], exit: { x: 0, z: 0 }, requiredKills: ['ambush-soldier'],
    waves: [{ id: 'street-ambush', trigger: { x: 4, z: 0 }, radius: 1, enemies: [{ id: 'ambush-soldier', kind: 'soldier', x: 4, z: -4 }] }],
  });
  sim.state.powered = true;
  sim.update(0, frame());
  assert.equal(sim.state.status, 'playing', 'a pending required wave must block the exit');
  advance(sim, .75, { strafe: 1 });
  assert.deepEqual(sim.state.triggeredWaves, ['street-ambush']);
  assert.equal(sim.state.enemies.length, 1);
  advance(sim, .2);
  assert.equal(sim.state.enemies.length, 1, 'standing in the trigger does not duplicate enemies');
  aim(sim, sim.state.enemies[0]);
  sim.update(.025, frame({ fire: true }));
  assert.equal(sim.state.enemies[0].alive, false);
  assert.equal(sim.state.pickups.filter(item => item.id === 'drop-ambush-soldier').length, 1);
  sim.update(0, frame({ lookX: -sim.state.player.yaw, lookY: -sim.state.player.pitch }));
  advance(sim, .65, { strafe: -1 });
  assert.equal(sim.state.status, 'complete', 'defeating the actual wave enables the exit');
});

test('saved wave state and a previously closed secret restore without duplicate enemies, drops or secret counts', () => {
  const level: Partial<LevelData> = {
    defaultLoadout: ['railgun'], checkpoint: { x: 8, z: 0 },
    doors: [{ id: 'secret', x: 0, z: -2, w: 2, d: .3, secret: true, label: 'HIDDEN ROOM' }],
    pickups: [{ id: 'keycard', kind: 'keycard', x: 8, z: 0 }],
    waves: [{ id: 'ambush', trigger: { x: 0, z: 0 }, radius: 1, enemies: [{ id: 'wave-soldier', kind: 'soldier', x: 5, z: 0 }] }],
  };
  const sim = arena(level);
  sim.update(.025, frame({ interact: true }));
  assert.equal(sim.state.secrets, 1);
  advance(sim, 1);
  sim.update(.025, frame({ interact: true }));
  advance(sim, 1);
  assert.equal(sim.state.doors[0].target, 0, 'the discovered secret is closed before saving');
  aim(sim, sim.state.enemies[0]);
  sim.update(.025, frame({ fire: true }));
  assert.equal(sim.state.enemies[0].alive, false);
  sim.update(0, frame({ lookX: -sim.state.player.yaw, lookY: -sim.state.player.pitch }));
  advance(sim, 1.7, { strafe: 1 });
  assert.equal(sim.state.checkpoint, true);
  const saved = structuredClone(sim.state), restored = arena(level);
  assert.equal(restored.restoreSavedState(saved), true);
  assert.deepEqual(restored.state.triggeredWaves, ['ambush']);
  assert.equal(restored.state.enemies.length, 1);
  assert.equal(restored.state.pickups.filter(item => item.id === 'drop-wave-soldier').length, 1);
  restored.state.player.x = 0; restored.state.player.z = 0;
  restored.update(.025, frame({ interact: true }));
  assert.equal(restored.state.enemies.length, 1, 'the restored ambush cannot trigger again');
  assert.equal(restored.state.secrets, 1, 'reopening the saved closed secret does not award a second discovery');
  assert.deepEqual(restored.state.discoveredSecrets, ['secret']);
  restored.restart(false);
  assert.deepEqual(restored.state.triggeredWaves, []);
  assert.equal(restored.state.enemies.length, 0);
  assert.equal(restored.state.pickups.some(item => item.id.startsWith('drop-')), false);
});

test('each dinosaur boss telegraphs a functional attack that ordinary strafing can evade', () => {
  for (const boss of ['crown', 'ironjaw', 'guardian', 'omega'] as const) {
    const create = () => arena({ enemies: [{ id: `boss-${boss}`, kind: 'brute', boss, health: 1000, label: boss.toUpperCase(), x: 0, z: -5 }] });
    const stationary = create(), dodging = create();
    for (const sim of [stationary, dodging]) {
      sim.state.enemies[0].cooldown = 0;
      sim.update(.025, frame());
      assert.equal(sim.state.player.health, 100, `${boss} starts with a warning rather than immediate damage`);
      assert.ok(sim.state.enemies[0].attack > 0);
      assert.match(sim.state.message, /MOVE/);
    }
    advance(stationary, .7);
    assert.equal(stationary.state.player.health, 100, `${boss} provides a real warning window`);
    advance(stationary, .15);
    advance(dodging, .85, { strafe: 1 });
    assert.ok(stationary.state.player.health < 100, `${boss} damages a player who remains on the marked target`);
    assert.equal(dodging.state.player.health, 100, `${boss} can be evaded by moving during the warning`);
    assert.ok(stationary.state.events.some(event => event.type === 'enemy' && /impact|overload/i.test(event.message ?? '')));
  }
});

test('a closing industrial door blocks a marked boss attack before its strike lands', () => {
  const sim = arena({
    enemies: [{ id: 'omega', kind: 'brute', boss: 'omega', x: 0, z: -5 }],
    doors: [{ id: 'shield', x: 0, z: -2.5, w: 4, d: .5, label: 'BLAST DOOR' }],
  });
  sim.state.doors[0].open = 1; sim.state.doors[0].target = 1;
  sim.state.enemies[0].cooldown = 0;
  sim.update(.025, frame());
  assert.ok(sim.state.enemies[0].attack > 0);
  sim.update(.025, frame({ interact: true }));
  advance(sim, .85);
  assert.equal(sim.state.doors[0].target, 0);
  assert.equal(sim.state.player.health, 100, 'boss overload must respect the door between its source and the player');
});
