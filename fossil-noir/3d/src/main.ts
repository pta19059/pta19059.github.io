import './style.css';
import { LEVEL } from './level';
import { Renderer } from './renderer';
import { Simulation } from './simulation';
import { Input } from './input';
import { UI } from './ui';
import { Viewmodel } from './viewmodel';
import { AudioSystem } from './audio';
import type { Settings } from './types';

const canvas = document.querySelector<HTMLCanvasElement>('#world')!;
const weaponCanvas = document.querySelector<HTMLCanvasElement>('#weapon')!;
let simulation: Simulation;
let renderer: Renderer;
let running = false;
let screen: 'menu'|'pause'|'dead'|'complete'|'playing' = 'menu';
let previous = performance.now();
let failed = false;
const audio = new AudioSystem();
const input = new Input(canvas, pause);
const viewmodel = new Viewmodel(weaponCanvas);
const ui = new UI({ start, resume, restart, menu, pause, settings: applySettings });
simulation = new Simulation(LEVEL, ui.settings.difficulty);

function rememberCheckpoint() {
  try { localStorage.setItem('fossil-noir-3d-checkpoint', JSON.stringify({version:1,difficulty:simulation.state.difficulty})); } catch { /* Private browsing may deny storage. */ }
}
function hasCheckpoint() {
  try { return JSON.parse(localStorage.getItem('fossil-noir-3d-checkpoint') || 'null')?.version === 1; } catch { return false; }
}
function changeScreen(next: typeof screen) {
  screen = next;
  running = next === 'playing';
  input.enabled = running;
  input.clear();
  ui.show(next);
  if (!running) { input.release(); audio.suspend(); }
}
function start(checkpoint = false) {
  if (failed) return;
  simulation = new Simulation(LEVEL, ui.settings.difficulty);
  if (checkpoint && hasCheckpoint()) simulation.restart(true);
  audio.unlock();
  changeScreen('playing');
  input.capture();
  previous = performance.now();
}
function resume() {
  if (failed || simulation.state.status !== 'playing') return;
  audio.unlock();
  changeScreen('playing');
  input.capture();
  previous = performance.now();
}
function pause() {
  if (running) changeScreen('pause');
}
function restart(checkpoint = false) {
  if (failed) return;
  if (!checkpoint) { start(false); return; }
  simulation.restart(checkpoint && (simulation.state.checkpoint || hasCheckpoint()));
  audio.unlock();
  changeScreen('playing');
  input.capture();
  previous = performance.now();
}
function menu() { changeScreen('menu'); }
function applySettings(settings: Settings) {
  input.sensitivity = settings.sensitivity;
  audio.setVolume(settings.volume);
  audio.setMusicVolume(settings.musicVolume);
  audio.setEffectsVolume(settings.effectsVolume);
  renderer?.resize(settings);
}
try {
  renderer = new Renderer(canvas);
  applySettings(ui.settings);
  ui.show('menu');
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
        for (const event of simulation.state.events) if (event.type === 'checkpoint') rememberCheckpoint();
        audio.handle(simulation.state.events);
        simulation.state.events.length = 0;
        audio.tick(simulation.state, dt);
        if (simulation.state.status === 'dead') changeScreen('dead');
        if (simulation.state.status === 'complete') {
          try { localStorage.setItem('fossil-noir-3d-best', String(Math.floor(simulation.state.time))); } catch { /* Optional local best time. */ }
          changeScreen('complete');
        }
      }
      renderer.render(simulation.state, running ? dt : 0, ui.settings);
      viewmodel.render(simulation.state, running ? dt : 0);
      ui.update(simulation.state);
    } catch (error) {
      console.error('Fossil Noir 3D runtime error', error);
      failed = true;
      changeScreen('menu');
      ui.setError('The mission could not continue. Reload this page to restart.');
    }
  }
  requestAnimationFrame(frame);
}
window.addEventListener('resize', () => renderer?.resize(ui.settings));
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
window.addEventListener('blur', pause);
canvas.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  pause();
  failed = true;
  ui.setError('Graphics context lost. Reload the page to recover the mission.');
});
requestAnimationFrame(frame);
