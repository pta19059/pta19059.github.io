import test from 'node:test';
import assert from 'node:assert/strict';
import { Simulation, WEAPONS } from '../src/simulation';
import { LEVEL } from '../src/level';
import { EMPTY_INPUT, type Enemy, type InputFrame, type LevelData, type Vec2, type WeaponId } from '../src/types';

// These are simulation integration checks, not claims about rendered-browser QA.
const STEP = 0.05;
const input = (changes: Partial<InputFrame> = {}): InputFrame => ({ ...EMPTY_INPUT, ...changes });
const distance = (a: Vec2, b: Vec2) => Math.hypot(a.x - b.x, a.z - b.z);
const ids: WeaponId[] = ['revolver', 'shotgun', 'plasma', 'machinegun'];

function advance(sim: Simulation, seconds: number, changes: Partial<InputFrame> = {}) {
  for (let elapsed = 0; elapsed < seconds - 1e-8; elapsed += STEP) sim.update(Math.min(STEP, seconds - elapsed), input(changes));
}

function aim(sim: Simulation, target: Vec2) {
  const p = sim.state.player;
  sim.update(0, input({ lookX: -Math.atan2(target.x - p.x, -(target.z - p.z)) - p.yaw, lookY: Math.atan2(1.1 - (p.y + (p.mounted ? 2.6 : 1.65)), distance(p, target)) - p.pitch }));
}

function arena(changes: Partial<LevelData> = {}) {
  return new Simulation({ ...LEVEL, spawn: { x: 0, z: 0 }, exit: { x: 18, z: 18 }, checkpoint: { x: 15, z: 15 }, switch: { x: 18, z: 15 }, mount: { x: 15, z: 18 }, bounds: { minX: -20, maxX: 20, minZ: -20, maxZ: 20 }, walls: [], doors: [], enemies: [], pickups: [], hazards: [], props: [], ...changes }, 'easy');
}

function armedArena(id: WeaponId, changes: Partial<LevelData> = {}) {
  const sim = arena({ pickups: [{ id: 'weapon', kind: id, x: 0, z: 0 }], ...changes });
  advance(sim, 0.2);
  return sim;
}

// Perception for the test player; it uses public level geometry, not private AI methods.
function sees(sim: Simulation, enemy: Enemy) {
  const p = sim.state.player, length = distance(p, enemy);
  const eye = p.y + (p.mounted ? 2.6 : p.crouching ? 0.9 : 1.65);
  const enemyHeight = enemy.kind === 'raptor' ? 1.0 : enemy.kind === 'brute' ? 1.7 : 1.3;
  const samples = Math.ceil(length / 0.12);
  for (let i = 1; i < samples; i++) {
    const t = i / samples, x = p.x + (enemy.x - p.x) * t, z = p.z + (enemy.z - p.z) * t, y = eye + (enemyHeight - eye) * t;
    if (sim.level.walls.some(w => y >= (w.y ?? 0) && y <= (w.y ?? 0) + w.h && Math.abs(x - w.x) <= w.w / 2 && Math.abs(z - w.z) <= w.d / 2)) return false;
    if (sim.state.doors.some(d => d.open < 0.995 && y >= d.open * 3.4 && Math.abs(x - d.x) <= d.w / 2 && Math.abs(z - d.z) <= d.d / 2)) return false;
  }
  return true;
}

/** Input-only test player: walk planned routes, aim, shoot and reload on ordinary rules. */
function playerTick(sim: Simulation, movement?: Vec2, dt = STEP) {
  const p = sim.state.player;
  assert.equal(sim.state.status, 'playing', `player died at ${p.x.toFixed(1)}, ${p.z.toFixed(1)} after ${sim.state.kills} kills`);
  const enemy = sim.state.enemies.filter(e => e.alive && distance(p, e) < 40 && sees(sim, e)).sort((a, b) => distance(p, a) - distance(p, b))[0];
  const target = enemy ?? movement;
  const yaw = target ? -Math.atan2(target.x - p.x, -(target.z - p.z)) : p.yaw;
  const height = enemy ? (enemy.kind === 'raptor' ? 1 : enemy.kind === 'brute' ? 1.7 : 1.3) : p.y + 1.65;
  const pitch = enemy ? Math.atan2(height - (p.y + (p.mounted ? 2.6 : 1.65)), distance(p, enemy)) : 0;
  let slot = 0;
  if (enemy && !p.mounted) {
    const candidates: WeaponId[] = distance(p, enemy) < 7 ? ['shotgun', 'plasma', 'machinegun', 'revolver'] : ['plasma', 'machinegun', 'revolver', 'shotgun'];
    const best = candidates.find(id => p.owned.includes(id) && (p.ammo[id] > 0 || p.reserve[id] > 0));
    if (best && p.weapon !== best && !p.reload) slot = ids.indexOf(best) + 1;
  }
  let forward = 0, strafe = 0;
  if (movement) {
    const d = distance(p, movement), dx = (movement.x - p.x) / Math.max(d, 1e-8), dz = (movement.z - p.z) / Math.max(d, 1e-8);
    forward = -Math.sin(yaw) * dx - Math.cos(yaw) * dz;
    strafe = Math.cos(yaw) * dx - Math.sin(yaw) * dz;
  }
  sim.update(dt, input({ forward, strafe, lookX: yaw - p.yaw, lookY: pitch - p.pitch, fire: Boolean(enemy), reload: p.ammo[p.weapon] === 0, weaponSlot: slot }));
  sim.state.events.length = 0;
}

function walk(sim: Simulation, target: Vec2, tolerance = 0.55) {
  const path = route(sim, target, tolerance);
  assert.ok(path, `no walkable route from ${JSON.stringify({ x: sim.state.player.x, z: sim.state.player.z })} to ${JSON.stringify(target)}`);
  for (const waypoint of path.slice(1)) {
    let ticks = 0;
    while (distance(sim.state.player, waypoint) > 0.10) {
      if (sim.state.status === 'complete' && distance(target, sim.level.exit) < 0.1) return;
      assert.ok(ticks++ < 100, `movement blocked at ${JSON.stringify(waypoint)}`);
      playerTick(sim, waypoint, Math.min(STEP, distance(sim.state.player, waypoint) / (sim.state.player.mounted ? 8 : 4.4)));
    }
  }
}

function open(sim: Simulation, id: string, approach: Vec2) {
  walk(sim, approach);
  const door = sim.state.doors.find(d => d.id === id)!;
  assert.equal(door.target, 0, `${id} expected to begin closed`);
  sim.update(STEP, input({ interact: true }));
  assert.equal(door.target, 1, `${id} did not unlock: ${sim.state.message}`);
  for (let i = 0; i < 20; i++) playerTick(sim);
  assert.equal(door.open, 1);
}

test('movement collides with cover, allows wall sliding, and jump returns to ground', () => {
  const sim = arena({ walls: [{ x: 0, z: -2, w: 3, d: 0.6, h: 4, material: 'metal' }] });
  advance(sim, 2, { forward: 1 });
  assert.ok(sim.state.player.z >= -1.39 && sim.state.player.z < -1.3);
  const blocked = sim.state.player.z;
  advance(sim, 0.3, { forward: 1, strafe: 1 });
  assert.ok(sim.state.player.x > 0.7, 'diagonal input should slide along the wall');
  assert.ok(sim.state.player.z >= blocked - 0.02);
  sim.update(STEP, input({ jump: true }));
  assert.ok(sim.state.player.y > 0 && !sim.state.player.grounded);
  advance(sim, 1.5);
  assert.equal(sim.state.player.y, 0);
  assert.equal(sim.state.player.grounded, true);
  sim.update(STEP, input({ crouch: true }));
  assert.equal(sim.state.player.crouching, true);
});

test('four distinct weapons spend ammunition, damage enemies, and obey wall occlusion', () => {
  assert.equal(new Set(ids.map(id => WEAPONS[id].damage)).size, 4);
  assert.equal(new Set(ids.map(id => WEAPONS[id].interval)).size, 4);
  for (const id of ids) {
    const sim = armedArena(id, { enemies: [{ id: 'target', kind: 'brute', x: 0, z: -5 }] });
    aim(sim, sim.state.enemies[0]);
    const before = sim.state.enemies[0].health, ammo = sim.state.player.ammo[id];
    sim.update(STEP, input({ fire: true }));
    assert.equal(sim.state.player.ammo[id], ammo - 1, `${id} ammo`);
    assert.ok(sim.state.enemies[0].health < before, `${id} hit detection`);
    assert.ok(sim.state.effects.some(e => e.kind === 'blood'), `${id} damage feedback`);
    sim.update(0, input({ fire: true }));
    assert.equal(sim.state.player.ammo[id], ammo - 1, `${id} cooldown`);

    const blocked = armedArena(id, { enemies: [{ id: 'target', kind: 'brute', x: 0, z: -5 }], walls: [{ x: 0, z: -2, w: 4, d: 0.5, h: 4, material: 'metal' }] });
    aim(blocked, blocked.state.enemies[0]);
    const hp = blocked.state.enemies[0].health;
    blocked.update(STEP, input({ fire: true }));
    assert.equal(blocked.state.enemies[0].health, hp, `${id} cannot shoot through a wall`);
    assert.ok(blocked.state.effects.some(e => e.kind === 'spark'), `${id} wall impact`);
  }
});

test('reload consumes finite reserve; weapon switching cancels an incomplete reload', () => {
  const sim = armedArena('revolver', { pickups: ids.map((kind, index) => ({ id: `weapon${index}`, kind, x: 0, z: 0 })) });
  sim.switchWeapon(0, 1);
  advance(sim, 0.3);
  const p = sim.state.player;
  p.ammo.revolver = 1; p.reserve.revolver = 2;
  sim.update(STEP, input({ reload: true }));
  assert.ok(p.reload > 0);
  sim.update(STEP, input({ fire: true }));
  assert.equal(p.ammo.revolver, 1, 'cannot fire while reloading');
  advance(sim, WEAPONS.revolver.reload + 0.1);
  assert.equal(p.ammo.revolver, 3);
  assert.equal(p.reserve.revolver, 0);
  sim.reload();
  assert.equal(p.reload, 0, 'empty reserve cannot create ammunition');
  p.reserve.revolver = 10;
  sim.reload();
  sim.update(STEP, input({ weaponSlot: 2 }));
  assert.equal(p.weapon, 'shotgun');
  assert.equal(p.reload, 0);
  advance(sim, 2);
  assert.equal(p.ammo.revolver, 3, 'cancelled reload must not finish invisibly');
  sim.update(0, input({ weaponDelta: 1 }));
  assert.equal(p.weapon, 'plasma');
});

test('closed doors stop damage and detection; opening a door enables ranged attacks', () => {
  const sim = armedArena('revolver', { doors: [{ id: 'door', x: 0, z: -2, w: 4, d: 0.5, label: 'TEST DOOR' }], enemies: [{ id: 'soldier', kind: 'soldier', x: 0, z: -5 }] });
  aim(sim, sim.state.enemies[0]);
  const enemyHP = sim.state.enemies[0].health;
  sim.update(STEP, input({ fire: true }));
  advance(sim, 4);
  assert.equal(sim.state.enemies[0].health, enemyHP);
  assert.equal(sim.state.enemies[0].alert, false);
  assert.equal(sim.state.player.health, 100);
  sim.update(STEP, input({ interact: true }));
  advance(sim, 8);
  assert.equal(sim.state.doors[0].open, 1);
  assert.equal(sim.state.enemies[0].alert, true);
  assert.ok(sim.state.player.health < 100, 'visible soldiers must attack');
});

test('all enemy types pursue or attack, react to damage and die without continuing attacks', () => {
  for (const kind of ['raptor', 'soldier', 'mutant', 'brute'] as const) {
    const sim = armedArena('machinegun', { enemies: [{ id: kind, kind, x: 0, z: -3 }] });
    advance(sim, kind === 'soldier' ? 8 : 2.8);
    const enemy = sim.state.enemies[0];
    assert.equal(enemy.alert, true, `${kind} detection`);
    assert.ok(sim.state.player.health < 100, `${kind} attacks`);
    const before = enemy.health;
    aim(sim, enemy);
    sim.update(STEP, input({ fire: true }));
    assert.ok(enemy.health < before && enemy.hurt > 0, `${kind} hit reaction`);
    for (let ticks = 0; enemy.alive && ticks < 300; ticks++) { aim(sim, enemy); sim.update(STEP, input({ fire: true, reload: sim.state.player.ammo.machinegun === 0 })); }
    assert.equal(enemy.alive, false, `${kind} can be killed`);
    assert.equal(enemy.health, 0);
    assert.equal(sim.state.kills, 1);
    const health = sim.state.player.health;
    advance(sim, 3);
    assert.equal(sim.state.player.health, health, `${kind} corpse cannot attack`);
  }
});

test('health and armor pickups cap at 100; toxic waste inflicts damage', () => {
  const sim = arena({ pickups: [{ id: 'health', kind: 'health', x: 0, z: 0 }, { id: 'armor', kind: 'armor', x: 0, z: 0 }], hazards: [{ x: 0, z: 0, w: 2, d: 2 }] });
  sim.state.player.health = 90;
  sim.state.player.armor = 80;
  sim.update(STEP, input());
  assert.equal(sim.state.player.health, 100);
  assert.equal(sim.state.player.armor, 100);
  advance(sim, 1);
  assert.ok(sim.state.player.health < 100 && sim.state.player.armor < 100);
});

test('mount moves faster, bites predators, and dismounts only into open space', () => {
  const sim = arena({ mount: { x: 0, z: 0 }, enemies: [{ id: 'raptor', kind: 'raptor', x: 0, z: -2 }] });
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.player.mounted, true);
  aim(sim, sim.state.enemies[0]);
  sim.update(STEP, input({ fire: true }));
  assert.equal(sim.state.enemies[0].alive, false, 'mounted bite works');
  const initialZ = sim.state.player.z;
  advance(sim, 0.5, { forward: 1 });
  assert.ok(initialZ - sim.state.player.z > 3.8, 'mounted travel speed');
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.player.mounted, false);
  assert.equal(sim.canOccupy(sim.state.player.x, sim.state.player.z), true);

  const enclosed = arena({ mount: { x: 0, z: 0 }, walls: [
    { x: 1.1, z: 0, w: 0.6, d: 0.6, h: 4, material: 'metal' },
    { x: -1.1, z: 0, w: 0.6, d: 0.6, h: 4, material: 'metal' },
    { x: 0, z: 1.2, w: 0.6, d: 0.6, h: 4, material: 'metal' },
  ] });
  enclosed.update(STEP, input({ interact: true }));
  enclosed.update(STEP, input({ interact: true }));
  assert.equal(enclosed.state.player.mounted, true, 'cannot dismount inside surrounding walls');
  assert.match(enclosed.state.message, /No room to dismount/);
});

test('restricted lab cannot be reached around the outside before unlocking its keycard door', () => {
  const sim = new Simulation(LEVEL, 'easy');
  sim.state.player.x = LEVEL.checkpoint.x;
  sim.state.player.z = LEVEL.checkpoint.z;
  assert.equal(route(sim, LEVEL.switch), undefined, 'locked lab must not have a perimeter bypass');
  sim.state.player.x = 0; sim.state.player.z = -30;
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.doors.find(d => d.id === 'laboratory')!.target, 0);
});

test('an open facility door cannot let a mounted strider leave its street area', () => {
  const sim = new Simulation({ ...LEVEL, spawn: { x: 0, z: -18 }, enemies: [], pickups: [] }, 'easy');
  sim.update(STEP, input({ interact: true }));
  advance(sim, 1);
  assert.equal(sim.state.doors.find(d => d.id === 'facility')!.open, 1);
  walk(sim, LEVEL.mount);
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.player.mounted, true);
  walk(sim, { x: 0, z: -18 });
  aim(sim, { x: 0, z: -30 });
  advance(sim, 2, { forward: 1 });
  assert.ok(sim.state.player.z >= -19.1 && sim.state.player.z < -18.8, 'mount stops at the district boundary');
  assert.equal(sim.canOccupy(0, -20), false, 'mounted collision enforces the designated area');
  assert.match(sim.state.message, /dismount/i);
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.player.mounted, false);
  advance(sim, 1.5, { forward: 1 });
  assert.ok(sim.state.player.z < -21, 'Elias can enter on foot after dismounting');
});

test('elevator stays shut until power is restored and laboratory threats are defeated', () => {
  const sim = armedArena('revolver', {
    spawn: { x: 0, z: -32 }, bounds: { minX: -20, maxX: 20, minZ: -40, maxZ: 20 },
    pickups: [{ id: 'gun', kind: 'revolver', x: 0, z: -32 }],
    switch: { x: 3.5, z: -32 }, exit: { x: 0, z: -38 },
    doors: [{ id: 'elevator', x: 0, z: -34, w: 4, d: 0.5, label: 'FREIGHT LIFT' }],
    enemies: [{ id: 'laboratory-soldier', kind: 'soldier', x: 4, z: -33 }],
  });
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.powered, false);
  assert.equal(sim.state.doors[0].target, 0, 'no elevator power');
  advance(sim, 0.25, { strafe: 1 });
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.powered, true);
  advance(sim, 0.25, { strafe: -1 });
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.doors[0].target, 0, 'power alone cannot bypass containment threats');
  const enemy = sim.state.enemies[0];
  for (let ticks = 0; enemy.alive && ticks < 100; ticks++) {
    aim(sim, enemy);
    sim.update(STEP, input({ fire: true, reload: sim.state.player.ammo.revolver === 0 }));
  }
  assert.equal(enemy.alive, false);
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.doors[0].target, 1);
});

test('death freezes combat and movement, and restart returns to playable state', () => {
  const sim = armedArena('revolver', { hazards: [{ x: 0, z: 0, w: 3, d: 3 }] });
  advance(sim, 12);
  assert.equal(sim.state.status, 'dead');
  assert.equal(sim.state.player.health, 0);
  const time = sim.state.time, ammo = sim.state.player.ammo.revolver, x = sim.state.player.x;
  sim.update(STEP, input({ strafe: 1, fire: true }));
  assert.equal(sim.state.time, time);
  assert.equal(sim.state.player.x, x);
  assert.equal(sim.state.player.ammo.revolver, ammo);
  sim.restart(false);
  assert.equal(sim.state.status, 'playing');
  assert.equal(sim.state.player.health, 100);
});

test('LEVEL 01 completes by walking, collecting weapons/keycard, fighting, unlocking and powering the lift', (t) => {
  const sim = new Simulation(LEVEL, 'easy');
  assert.deepEqual(sim.state.player.owned, []);
  walk(sim, { x: 0.7, z: 7 });
  assert.ok(sim.state.player.owned.includes('revolver'));
  walk(sim, { x: 2, z: 6.7 });
  open(sim, 'office', { x: 0, z: 5.5 });
  walk(sim, { x: -10, z: -4 });
  assert.ok(sim.state.player.owned.includes('shotgun'));
  walk(sim, LEVEL.pickups.find(p => p.id === 'street-ammo1')!);
  open(sim, 'secret', { x: -11.5, z: -7 });
  walk(sim, { x: -15.8, z: -7 });
  assert.ok(sim.state.player.owned.includes('plasma'));
  assert.equal(sim.state.secrets, 1);
  walk(sim, { x: -15, z: -5 });
  walk(sim, { x: -15, z: -9 });
  walk(sim, { x: 8, z: -6 });
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.player.mounted, true);
  walk(sim, { x: 5, z: -16 });
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.player.mounted, false);
  walk(sim, { x: -10, z: -17 });
  open(sim, 'facility', { x: 0, z: -18.3 });
  walk(sim, LEVEL.checkpoint);
  walk(sim, { x: -5.5, z: -22 });
  open(sim, 'security', { x: 5.5, z: -27.5 });
  walk(sim, { x: 12, z: -29.3 });
  assert.equal(sim.state.player.keycard, true);
  assert.equal(sim.state.checkpoint, true);
  walk(sim, { x: 13.8, z: -25.5 });
  assert.equal(sim.state.player.owned.length, 4);
  walk(sim, { x: 10, z: -30.7 });
  open(sim, 'laboratory', { x: 0, z: -30.5 });
  walk(sim, { x: 8.2, z: -33.8 });
  walk(sim, { x: 8, z: -38.5 });
  walk(sim, { x: 8.3, z: -44.5 });
  walk(sim, LEVEL.switch);
  sim.update(STEP, input({ interact: true }));
  assert.equal(sim.state.powered, true);
  // Clear any survivors by approaching their actual positions through walkable routes.
  for (let attempts = 0; attempts < 80; attempts++) {
    const remaining = sim.state.enemies.filter(e => e.alive && LEVEL.enemies.find(def => def.id === e.id)!.z < -32);
    if (!remaining.length) break;
    const enemy = remaining.sort((a, b) => distance(sim.state.player, a) - distance(sim.state.player, b))[0];
    if (!sees(sim, enemy)) walk(sim, enemy, 1.5);
    for (let ticks = 0; ticks < 40 && enemy.alive; ticks++) playerTick(sim);
  }
  assert.equal(sim.state.enemies.filter(e => e.alive && LEVEL.enemies.find(def => def.id === e.id)!.z < -32).length, 0);
  open(sim, 'elevator', { x: -7, z: -44.3 });
  walk(sim, LEVEL.exit);
  assert.equal(sim.state.status, 'complete');
  assert.ok(sim.state.kills >= 10);
  assert.ok(sim.state.player.health > 0);
  t.diagnostic(`Input-only walkthrough: ${sim.state.time.toFixed(1)} simulated seconds, ${sim.state.kills} kills, ${Math.round(sim.state.player.health)} health remaining.`);
  const completionTime = sim.state.time;
  sim.update(STEP, input({ forward: 1, fire: true }));
  assert.equal(sim.state.time, completionTime, 'completed level freezes gameplay');
});

test('keycard checkpoint restores progress; a full restart resets the original level', () => {
  const sim = armedArena('revolver', { checkpoint: { x: 0, z: 0 }, pickups: [{ id: 'weapon', kind: 'revolver', x: 0, z: 0 }, { id: 'keycard', kind: 'keycard', x: 0, z: -1 }] });
  sim.update(STEP, input({ forward: 1 }));
  assert.equal(sim.state.checkpoint, true);
  const savedReserve = sim.state.player.reserve.revolver;
  sim.state.player.health = 0;
  sim.state.status = 'dead';
  sim.restart(true);
  assert.equal(sim.state.status, 'playing');
  assert.equal(sim.state.player.keycard, true);
  assert.ok(sim.state.player.health >= 75);
  assert.ok(sim.state.player.owned.includes('revolver'));
  assert.equal(sim.state.player.reserve.revolver, savedReserve);
  assert.equal(distance(sim.state.player, sim.level.checkpoint), 0);
  sim.restart(false);
  assert.equal(sim.state.player.keycard, false);
  assert.deepEqual(sim.state.player.owned, []);
  assert.equal(sim.state.checkpoint, false);
  assert.equal(sim.state.kills, 0);
  assert.ok(sim.state.pickups.every(p => !p.collected));
});

test('a fresh simulation can resume the persisted checkpoint baseline without trapping the player', () => {
  const sim = new Simulation(LEVEL, 'normal');
  sim.restart(true);
  assert.equal(sim.state.player.keycard, true);
  assert.equal(sim.state.checkpoint, true);
  assert.equal(distance(sim.state.player, LEVEL.checkpoint), 0);
  assert.ok(sim.state.player.owned.includes('revolver'));
  assert.ok(sim.state.player.ammo.machinegun > 0);
  assert.ok(sim.canOccupy(sim.state.player.x, sim.state.player.z));
  assert.ok(route(sim, { x: 0, z: -30.5 }), 'checkpoint can reach the laboratory airlock');
  assert.ok(sim.state.enemies.some(e => e.alive && e.z < -32), 'remaining laboratory encounters are preserved');
});

/** Breadth-first walking route, evaluated against the actual collision subsystem. */
function route(sim: Simulation, target: Vec2, tolerance = 0.6): Vec2[] | undefined {
  const grid = 0.5;
  const encode = (x: number, z: number) => `${x},${z}`;
  const start = { x: Math.round(sim.state.player.x / grid), z: Math.round(sim.state.player.z / grid) };
  const queue = [start], parents = new Map<string, string | null>([[encode(start.x, start.z), null]]);
  let goal: string | undefined;
  for (let head = 0; head < queue.length; head++) {
    const node = queue[head], world = { x: node.x * grid, z: node.z * grid };
    const key = encode(node.x, node.z);
    if (distance(world, target) <= tolerance) { goal = key; break; }
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const x = node.x + dx, z = node.z + dz, next = encode(x, z);
      if (parents.has(next)) continue;
      const wx = x * grid, wz = z * grid;
      if (!sim.canOccupy(wx, wz, sim.state.player.mounted ? 0.53 : 0.32)) continue;
      if (LEVEL.hazards.some(h => Math.abs(wx - h.x) < h.w / 2 + 0.4 && Math.abs(wz - h.z) < h.d / 2 + 0.4)) continue;
      parents.set(next, key);
      queue.push({ x, z });
    }
  }
  if (!goal) return undefined;
  const result: Vec2[] = [];
  for (let key: string | null = goal; key; key = parents.get(key) ?? null) {
    const [x, z] = key.split(',').map(Number);
    result.push({ x: x * grid, z: z * grid });
  }
  return result.reverse();
}

