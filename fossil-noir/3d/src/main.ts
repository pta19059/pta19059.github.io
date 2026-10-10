import './style.css';
import { CAMPAIGN, CASE_FILES, createCampaignSimulation } from './campaign';
import { WEAPONS, WEAPON_IDS } from './arsenal';
import { Renderer } from './renderer';
import { Simulation } from './simulation';
import { Input } from './input';
import { Controls } from './controls';
import { UI } from './ui';
import { Viewmodel } from './viewmodel';
import { AudioSystem } from './audio';
import type { Difficulty, GameState, LevelData, Player, Settings, WeaponId } from './types';

const canvas = document.querySelector<HTMLCanvasElement>('#world')!;
const weaponCanvas = document.querySelector<HTMLCanvasElement>('#weapon')!;
const SAVE_KEY = 'fossil-noir-3d-checkpoint';
const SAVE_VERSION = 2;
const CAMPAIGN_REVISION = 'lazarus-campaign-8-1';
type SavedRun = { chapter: number; difficulty: Difficulty; state?: GameState; evidence: string[]; legacy?: boolean };
let chapter = 0;
let simulation: Simulation;
let renderer: Renderer;
let chapterStart: GameState;
let knownEvidence: string[] = [];
let running = false;
let screen: 'menu'|'pause'|'dead'|'complete'|'playing' = 'menu';
let previous = performance.now();
let failed = false;
const audio = new AudioSystem();
const controls = new Controls();
const input = new Input(canvas, pause, controls);
const viewmodel = new Viewmodel(weaponCanvas);
const ui = new UI({ start, chapter: selectChapter, next: nextChapter, resume, restart, menu, pause, settings: applySettings }, controls);
simulation = new Simulation(CAMPAIGN[0], ui.settings.difficulty);
chapterStart = cleanState(simulation.state);

const isRecord = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
const isDifficulty = (value: unknown): value is Difficulty => ['easy', 'normal', 'hard', 'nightmare'].includes(value as string);
const isWeapon = (value: unknown): value is WeaponId => WEAPON_IDS.includes(value as WeaponId);
const numberIn = (value: unknown, min: number, max: number): value is number => typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
const integerIn = (value: unknown, min: number, max: number): value is number => numberIn(value, min, max) && Number.isInteger(value);

/** Saves are made only at chapter boundaries and actual checkpoints. Transient
 * effects, audio events and enemy paths are deliberately never persisted. */
function cleanState(state: GameState): GameState {
  const copy = structuredClone(state);
  copy.events = []; copy.effects = []; copy.status = 'playing';
  copy.player.reload = 0; copy.player.cooldown = 0; copy.player.recoil = 0; copy.player.hurt = 0;
  copy.player.mounted = false; copy.player.crouching = false; copy.player.y = 0; copy.player.vy = 0; copy.player.grounded = true;
  for (const enemy of copy.enemies) {
    enemy.path = []; enemy.pathTime = 0; enemy.cooldown = 1; enemy.hurt = 0;
    enemy.speed = 0; enemy.attack = 0; enemy.vx = 0; enemy.vz = 0;
  }
  return copy;
}

function levelSignature(level: LevelData): string {
  const text = JSON.stringify({ walls: level.walls, doors: level.doors, enemies: level.enemies, pickups: level.pickups, destructibles: level.destructibles, spawn: level.spawn, checkpoint: level.checkpoint, switch: level.switch, exit: level.exit, waves: level.waves, mountBounds: level.mountBounds, safe: level.safe, requiredKills: level.requiredKills, requiredEvidence: level.requiredEvidence });
  let hash = 2166136261;
  for (let index = 0; index < text.length; index++) hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
  return (hash >>> 0).toString(16);
}

function collectEvidence(): void {
  knownEvidence = [...new Set([...knownEvidence, ...simulation.state.pickups.filter((item) => item.collected && item.evidenceId && Object.hasOwn(CASE_FILES, item.evidenceId)).map((item) => item.evidenceId!)])];
  ui.setEvidence(knownEvidence);
}

function saveBoundary(index: number, state: GameState): void {
  if (state.player.health <= 0) return;
  try {
    const data = { version: SAVE_VERSION, campaign: CAMPAIGN_REVISION, level: levelSignature(CAMPAIGN[index]), chapter: index, difficulty: state.difficulty, evidence: knownEvidence, state: cleanState(state) };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    ui.setSave(index);
  } catch { /* A denied/quota-limited store does not interrupt the game. */ }
}

/** Rebuild every saved entity from current level definitions, applying only
 * checked gameplay values. Unknown fields, duplicate IDs and invalid ammo or
 * chapter data are rejected instead of being trusted as simulation objects. */
function readCheckpoint(): SavedRun | null {
  try {
    const text = localStorage.getItem(SAVE_KEY);
    if (!text || text.length > 200000) return null;
    const data: unknown = JSON.parse(text);
    if (!isRecord(data)) return null;
    if (data.version === 1 && isDifficulty(data.difficulty)) return { chapter: 0, difficulty: data.difficulty, evidence: [], legacy: true };
    if (data.version !== SAVE_VERSION || data.campaign !== CAMPAIGN_REVISION || !integerIn(data.chapter, 0, CAMPAIGN.length - 1) || !isDifficulty(data.difficulty) || !isRecord(data.state)) return null;
    const level = CAMPAIGN[data.chapter];
    if (data.level !== levelSignature(level)) return null;
    const raw = data.state;
    if (raw.difficulty !== data.difficulty || raw.chapterId !== data.chapter || raw.status !== 'playing' || !isRecord(raw.player)) return null;
    if (!Array.isArray(raw.triggeredWaves) || raw.triggeredWaves.length > (level.waves?.length ?? 0) || new Set(raw.triggeredWaves).size !== raw.triggeredWaves.length || !raw.triggeredWaves.every((id) => typeof id === 'string' && level.waves?.some((wave) => wave.id === id))) return null;
    const triggered = raw.triggeredWaves as string[];
    const waveEnemies = (level.waves ?? []).filter((wave) => triggered.includes(wave.id)).flatMap((wave) => wave.enemies);
    const fresh = new Simulation({ ...level, enemies: [...level.enemies, ...waveEnemies] }, data.difficulty).state;
    fresh.triggeredWaves = [...triggered];
    const p = raw.player;
    if (!isWeapon(p.weapon) || !Array.isArray(p.owned) || p.owned.length > WEAPON_IDS.length || !p.owned.every(isWeapon) || new Set(p.owned).size !== p.owned.length || (p.owned.length && !p.owned.includes(p.weapon))) return null;
    if (!isRecord(p.ammo) || !isRecord(p.reserve)) return null;
    for (const id of WEAPON_IDS) if (!integerIn(p.ammo[id], 0, WEAPONS[id].clip) || !integerIn(p.reserve[id], 0, WEAPONS[id].reserveCap)) return null;
    const bounds = level.bounds;
    if (!numberIn(p.x, bounds.minX, bounds.maxX) || !numberIn(p.z, bounds.minZ, bounds.maxZ) || !numberIn(p.yaw, -1000000, 1000000) || !numberIn(p.pitch, -1.22, 1.22) || !numberIn(p.health, .001, 100) || !numberIn(p.armor, 0, 100) || typeof p.keycard !== 'boolean' || !integerIn(p.evidence, 0, level.pickups.filter((item) => item.kind === 'evidence').length)) return null;
    fresh.player = { ...fresh.player, x: p.x, z: p.z, yaw: p.yaw, pitch: p.pitch, health: p.health, armor: p.armor, keycard: p.keycard, evidence: p.evidence, weapon: p.weapon, owned: [...p.owned] as WeaponId[], ammo: { ...fresh.player.ammo }, reserve: { ...fresh.player.reserve } };
    for (const id of WEAPON_IDS) { fresh.player.ammo[id] = p.ammo[id] as number; fresh.player.reserve[id] = p.reserve[id] as number; }
    const entities = <T extends { id: string }>(saved: unknown, defaults: T[]): Map<string, Record<string, unknown>> | null => {
      if (!Array.isArray(saved) || saved.length !== defaults.length || !saved.every(isRecord)) return null;
      const map = new Map(saved.map((item) => [item.id, item]));
      if (map.size !== saved.length || !defaults.every((item) => map.has(item.id))) return null;
      return map as Map<string, Record<string, unknown>>;
    };
    const enemies = entities(raw.enemies, fresh.enemies), doors = entities(raw.doors, fresh.doors), props = entities(raw.destructibles, fresh.destructibles);
    if (!enemies || !doors || !props) return null;
    for (const enemy of fresh.enemies) {
      const item = enemies.get(enemy.id)!;
      if (!numberIn(item.x, bounds.minX, bounds.maxX) || !numberIn(item.z, bounds.minZ, bounds.maxZ) || !numberIn(item.health, 0, enemy.maxHealth) || typeof item.alive !== 'boolean' || typeof item.alert !== 'boolean' || !numberIn(item.heading, -1000000, 1000000) || !numberIn(item.phase, 0, 1000000) || (item.alive ? item.health <= 0 : item.health > 0)) return null;
      Object.assign(enemy, { x: item.x, z: item.z, health: item.health, alive: item.alive, alert: item.alert, heading: item.heading, phase: item.phase });
    }
    for (const door of fresh.doors) {
      const item = doors.get(door.id)!;
      if (!numberIn(item.open, 0, 1) || !numberIn(item.target, 0, 1)) return null;
      door.open = item.open; door.target = item.target;
    }
    for (const prop of fresh.destructibles) {
      const item = props.get(prop.id)!;
      if (!numberIn(item.health, 0, prop.maxHealth) || typeof item.destroyed !== 'boolean' || (item.destroyed ? item.health > 0 : item.health <= 0)) return null;
      prop.health = item.health; prop.destroyed = item.destroyed;
    }
    if (!Array.isArray(raw.pickups) || raw.pickups.length < fresh.pickups.length || raw.pickups.length > fresh.pickups.length + fresh.enemies.length * 2 || !raw.pickups.every(isRecord)) return null;
    const pickups = new Map(raw.pickups.map((item) => [item.id, item]));
    if (pickups.size !== raw.pickups.length) return null;
    for (const pickup of fresh.pickups) {
      const item = pickups.get(pickup.id);
      if (!item || typeof item.collected !== 'boolean') return null;
      pickup.collected = item.collected;
      pickups.delete(pickup.id);
    }
    for (const [id, item] of pickups) {
      if (typeof id !== 'string' || !fresh.enemies.some((enemy) => !enemy.alive && (id === `drop-${enemy.id}` || id.startsWith(`drop-${enemy.id}-`))) || item.kind !== 'ammo' || !isWeapon(item.ammoFor) || !integerIn(item.amount, 1, WEAPONS[item.ammoFor].reserveCap) || typeof item.collected !== 'boolean' || !numberIn(item.x, bounds.minX, bounds.maxX) || !numberIn(item.z, bounds.minZ, bounds.maxZ)) return null;
      fresh.pickups.push({ id, kind: 'ammo', ammoFor: item.ammoFor, amount: item.amount, label: `${WEAPONS[item.ammoFor].name} ammunition`, x: item.x, z: item.z, collected: item.collected });
    }
    if (!integerIn(raw.kills, 0, fresh.enemies.length) || raw.kills !== fresh.enemies.filter((enemy) => !enemy.alive).length || !numberIn(raw.time, 0, 1000000) || typeof raw.powered !== 'boolean' || typeof raw.checkpoint !== 'boolean' || !integerIn(raw.secrets, 0, level.doors.filter((door) => door.secret).length) || !numberIn(raw.slow, 0, 1)) return null;
    if (!Array.isArray(raw.discoveredSecrets) || raw.discoveredSecrets.length !== raw.secrets || new Set(raw.discoveredSecrets).size !== raw.discoveredSecrets.length || !raw.discoveredSecrets.every((id) => typeof id === 'string' && level.doors.some((door) => door.secret && door.id === id))) return null;
    fresh.discoveredSecrets = [...raw.discoveredSecrets] as string[];
    fresh.kills = raw.kills; fresh.time = raw.time; fresh.powered = raw.powered; fresh.checkpoint = raw.checkpoint; fresh.secrets = raw.secrets; fresh.slow = raw.slow;
    if (isRecord(raw.mount) && numberIn(raw.mount.x, bounds.minX, bounds.maxX) && numberIn(raw.mount.z, bounds.minZ, bounds.maxZ)) fresh.mount = { x: raw.mount.x, z: raw.mount.z };
    fresh.message = 'CASE FILE RESTORED · CONTINUE THE TRAIL'; fresh.messageTime = 4;
    const evidence = Array.isArray(data.evidence) ? [...new Set(data.evidence.filter((id): id is string => typeof id === 'string' && Object.hasOwn(CASE_FILES, id)))] : [];
    return { chapter: data.chapter, difficulty: data.difficulty, state: fresh, evidence };
  } catch { return null; }
}

function changeScreen(next: typeof screen) {
  screen = next;
  running = next === 'playing';
  input.enabled = running;
  input.clear();
  ui.show(next);
  if (!running) { input.release(); audio.suspend(); }
}

function buildChapter(index: number, difficulty: Difficulty, carry?: Player): Simulation {
  return createCampaignSimulation(index, difficulty, carry);
}

/** Construct the replacement first: a failed chapter load keeps the last
 * working renderer available, and its resources are released only on success. */
function loadChapter(index: number, difficulty: Difficulty, carry?: Player, saved?: GameState, legacy = false): boolean {
  if (failed || !Number.isInteger(index) || !CAMPAIGN[index]) return false;
  let nextRenderer: Renderer | undefined;
  try {
    const next = buildChapter(index, difficulty, carry);
    const initial = cleanState(next.state);
    if (saved && !next.restoreSavedState(saved)) throw new Error('Invalid restored checkpoint');
    else if (legacy) next.restart(true);
    nextRenderer = new Renderer(canvas, CAMPAIGN[index]);
    nextRenderer.resize(ui.settings);
    const oldRenderer = renderer;
    renderer = nextRenderer; simulation = next; chapter = index;
    chapterStart = saved ? saved.checkpoint ? cleanState(buildChapter(index, difficulty, saved.player).state) : cleanState(saved) : initial;
    oldRenderer?.dispose();
    ui.setError(''); ui.setLevel(CAMPAIGN[index]); ui.setEvidence(knownEvidence); ui.update(simulation.state);
    saveBoundary(index, simulation.state);
    audio.unlock(); changeScreen('playing'); input.capture(); previous = performance.now();
    return true;
  } catch (error) {
    nextRenderer?.dispose();
    console.error('Fossil Noir chapter load error', error);
    changeScreen('menu');
    ui.setError('This chapter could not load. Reload the page or select another chapter.');
    return false;
  }
}

function start(checkpoint = false) {
  if (checkpoint) {
    const saved = readCheckpoint();
    if (!saved) { ui.setSave(null); ui.setError('No compatible saved checkpoint was found. Start a new campaign or choose a chapter.'); return; }
    knownEvidence = saved.evidence;
    loadChapter(saved.chapter, saved.difficulty, undefined, saved.state, saved.legacy);
  } else { knownEvidence = []; loadChapter(0, ui.settings.difficulty); }
}

function selectChapter(index: number) { knownEvidence = []; loadChapter(index, ui.settings.difficulty); }
function nextChapter() {
  if (simulation.state.status !== 'complete' || chapter >= CAMPAIGN.length - 1) return;
  collectEvidence();
  loadChapter(chapter + 1, simulation.state.difficulty, simulation.state.player);
}
function resume() {
  if (failed || simulation.state.status !== 'playing') return;
  audio.unlock(); changeScreen('playing'); input.capture(); previous = performance.now();
}
function pause() { if (running) { collectEvidence(); ui.update(simulation.state); changeScreen('pause'); } }
function restart(checkpoint = false) {
  if (failed) return;
  if (!checkpoint) { loadChapter(chapter, simulation.state.difficulty, undefined, chapterStart); return; }
  if (!simulation.state.checkpoint) return;
  ui.clearPickups();
  simulation.restart(true);
  ui.update(simulation.state); saveBoundary(chapter, simulation.state);
  audio.unlock(); changeScreen('playing'); input.capture(); previous = performance.now();
}
function menu() { collectEvidence(); changeScreen('menu'); ui.setSave(readCheckpoint()?.chapter ?? null); }
function applySettings(settings: Settings) {
  if (controls.preference !== settings.controls) controls.setPreference(settings.controls);
  input.sensitivity = settings.sensitivity;
  audio.setVolume(settings.volume); audio.setMusicVolume(settings.musicVolume); audio.setEffectsVolume(settings.effectsVolume);
  renderer?.resize(settings);
}
try {
  renderer = new Renderer(canvas, CAMPAIGN[0]);
  applySettings(ui.settings); ui.setLevel(CAMPAIGN[0]);
  const saved = readCheckpoint();
  ui.setSave(saved?.chapter ?? null); ui.show('menu');
} catch (error) {
  failed = true;
  ui.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${error instanceof Error ? error.message : ''}`);
}

function frame(now: number) {
  const dt = Math.min(Math.max((now - previous) / 1000, 0), 0.05);
  previous = now;
  if (!failed) {
    try {
      if (running) {
        simulation.update(dt, input.read());
        const checkpoint = simulation.state.events.some((event) => event.type === 'checkpoint');
        if (checkpoint) { collectEvidence(); saveBoundary(chapter, simulation.state); }
        ui.handleEvents(simulation.state.events, simulation.state); ui.tick(dt);
        audio.handle(simulation.state.events); simulation.state.events.length = 0; audio.tick(simulation.state, dt);
        ui.update(simulation.state);
        if (simulation.state.status === 'dead') changeScreen('dead');
        if (simulation.state.status === 'complete') {
          collectEvidence();
          if (chapter < CAMPAIGN.length - 1) saveBoundary(chapter + 1, buildChapter(chapter + 1, simulation.state.difficulty, simulation.state.player).state);
          else saveBoundary(chapter, simulation.state);
          try { localStorage.setItem(`fossil-noir-3d-best-${chapter}-${simulation.state.difficulty}`, String(Math.floor(simulation.state.time))); } catch { /* Optional best time. */ }
          changeScreen('complete');
        }
      }
      renderer.render(simulation.state, running ? dt : 0, ui.settings);
      viewmodel.render(simulation.state, running ? dt : 0); ui.update(simulation.state);
    } catch (error) {
      console.error('Fossil Noir 3D runtime error', error); failed = true;
      changeScreen('menu'); ui.setError('The mission could not continue. Reload this page to restart from the saved chapter.');
    }
  }
  requestAnimationFrame(frame);
}
window.addEventListener('resize', () => renderer?.resize(ui.settings));
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
window.addEventListener('blur', pause);
canvas.addEventListener('webglcontextlost', (event) => {
  event.preventDefault(); pause(); failed = true; ui.setError('Graphics context lost. Reload the page to recover the saved mission.');
});
requestAnimationFrame(frame);
