import type { GameState, Settings } from './types';
import { LEVEL } from './level';

type Screen = 'menu' | 'pause' | 'dead' | 'complete' | 'playing';
type Callbacks = {
  start: (checkpoint: boolean) => void;
  resume: () => void;
  restart: (checkpoint: boolean) => void;
  menu: () => void;
  pause: () => void;
  settings: (settings: Settings) => void;
};

const SETTINGS_KEY = 'fossil-noir-3d-settings';
const DEFAULT_SETTINGS: Settings = { sensitivity: 1, resolution: '640', quality: 'high', volume: 0.5, difficulty: 'normal' };
const WEAPONS = { revolver: 'DETECTIVE REVOLVER', shotgun: 'TACTICAL SHOTGUN', plasma: 'PLASMA RIFLE', machinegun: 'HEAVY MACHINE GUN' };

export class UI {
  settings: Settings;
  private screen: Screen = 'menu';
  private panel: 'main' | 'controls' | 'settings' = 'main';
  private state?: GameState;
  private overlay = document.querySelector<HTMLElement>('#menu-overlay')!;
  private cached = new Map<string, string>();

  constructor(private callbacks: Callbacks) {
    this.settings = this.loadSettings();
    this.overlay.addEventListener('click', (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-action]');
      if (!button || button.disabled) return;
      switch (button.dataset.action) {
        case 'start': callbacks.start(false); break;
        case 'continue': callbacks.start(true); break;
        case 'resume': callbacks.resume(); break;
        case 'retry': callbacks.restart(false); break;
        case 'checkpoint': callbacks.restart(true); break;
        case 'menu': callbacks.menu(); break;
        case 'controls': this.panel = 'controls'; this.render(); break;
        case 'settings': this.panel = 'settings'; this.render(); break;
        case 'back': this.panel = 'main'; this.render(); break;
      }
    });
    this.overlay.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement | HTMLSelectElement;
      if (!target.dataset.setting) return;
      const field = target.dataset.setting as keyof Settings;
      const raw: unknown = ['sensitivity', 'volume'].includes(field) ? Number(target.value) : target.value;
      this.settings = this.validateSettings({ ...this.settings, [field]: raw });
      try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch { /* Settings still apply for this session. */ }
      this.callbacks.settings({ ...this.settings });
      if (field === 'sensitivity') this.overlay.querySelector('#sensitivity-value')!.textContent = `${this.settings.sensitivity.toFixed(1)}×`;
      if (field === 'volume') this.overlay.querySelector('#volume-value')!.textContent = `${Math.round(this.settings.volume * 100)}%`;
    });
    document.addEventListener('keydown', (event) => {
      if (this.screen !== 'playing' && event.code === 'Escape') {
        event.preventDefault();
        if (this.panel !== 'main') { this.panel = 'main'; this.render(); }
        else if (this.screen === 'pause') callbacks.resume();
      }
    });
    const pause = document.createElement('button');
    pause.className = 'desktop-pause';
    pause.setAttribute('aria-label', 'Pause mission');
    pause.textContent = 'Ⅱ';
    pause.addEventListener('click', () => callbacks.pause());
    document.querySelector('#game')!.appendChild(pause);
    this.show('menu');
  }

  show(screen: Screen): void {
    this.screen = screen;
    this.panel = 'main';
    document.body.classList.toggle('playing', screen === 'playing');
    document.body.dataset.screen = screen;
    this.overlay.hidden = screen === 'playing';
    if (screen !== 'playing') this.render();
  }

  update(state: GameState): void {
    this.state = state;
    const player = state.player;
    this.write('hud-health', String(Math.max(0, Math.ceil(player.health))).padStart(3, '0'));
    this.write('hud-armor', String(Math.max(0, Math.ceil(player.armor))).padStart(3, '0'));
    this.write('hud-ammo', player.reload > 0 ? 'LOAD' : String(player.ammo[player.weapon]).padStart(2, '0'));
    this.write('hud-reserve', `/ ${String(player.reserve[player.weapon]).padStart(3, '0')}`);
    this.write('hud-weapon', player.owned.includes(player.weapon) ? WEAPONS[player.weapon] : 'MECHANICAL ARM');
    this.write('hud-kills', `${state.kills} / ${state.enemies.length}`);
    this.write('hud-mode', player.mounted ? 'STRIDER MOUNTED' : `FOCUS ${Math.round(state.slow * 100)}%`);
    const key = document.querySelector<HTMLElement>('#hud-key')!;
    key.classList.toggle('acquired', player.keycard);
    key.querySelector('b')!.textContent = player.keycard ? '■' : '—';
    document.querySelector<HTMLElement>('#health-bar')!.style.width = `${Math.max(0, Math.min(100, player.health))}%`;
    document.querySelector<HTMLElement>('#armor-bar')!.style.width = `${Math.max(0, Math.min(100, player.armor))}%`;
    document.querySelector<HTMLElement>('.health-stat')!.classList.toggle('critical', player.health <= 25);
    document.querySelector<HTMLElement>('#game')!.style.setProperty('--hurt', String(Math.min(0.68, player.hurt * 0.7)));
    const objective = !player.owned.length ? 'FIND YOUR REVOLVER' : !player.keycard && player.z >= -19 ? 'REACH THE AXIOM FACILITY' : !player.keycard ? 'FIND THE SECURITY KEYCARD' : !state.powered ? 'ENTER THE LAB · RESTORE ELEVATOR POWER' : 'REACH THE INDUSTRIAL ELEVATOR';
    this.write('objective', objective);
    this.write('message', state.messageTime > 0 ? state.message : '');
    let hint = '';
    const nearDoor = state.doors.find((door) => Math.hypot(door.x - player.x, door.z - player.z) < 3.2);
    if (player.mounted) hint = 'E · DISMOUNT STRIDER';
    else if (Math.hypot(state.mount.x - player.x, state.mount.z - player.z) < 2.8) hint = 'E · RIDE STRIDER';
    else if (!state.powered && Math.hypot(LEVEL.switch.x - player.x, LEVEL.switch.z - player.z) < 2.5) hint = 'E · RESTORE ELEVATOR POWER';
    else if (Math.hypot(LEVEL.exit.x - player.x, LEVEL.exit.z - player.z) < 3) hint = state.powered ? 'ENTER THE LIFT TO EXTRACT' : 'ELEVATOR POWER REQUIRED';
    else if (nearDoor) hint = nearDoor.locked && !player.keycard ? 'SECURITY KEYCARD REQUIRED' : `E · ${nearDoor.target > 0 ? 'CLOSE' : 'OPEN'} ${nearDoor.label.toUpperCase()}`;
    this.write('interaction', hint);
    document.querySelector('#crosshair')!.classList.toggle('firing', player.recoil > 0.1);
  }

  setError(message: string): void {
    const error = document.querySelector<HTMLElement>('#error')!;
    error.textContent = message;
    error.hidden = !message;
  }

  private write(id: string, value: string): void {
    if (this.cached.get(id) === value) return;
    this.cached.set(id, value);
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  private hasCheckpoint(): boolean {
    if (this.state?.checkpoint) return true;
    try { return Boolean(localStorage.getItem('fossil-noir-3d-checkpoint')); } catch { return false; }
  }

  private render(): void {
    const checkpoint = this.hasCheckpoint();
    const main = this.panel === 'main';
    const isMenu = this.screen === 'menu';
    let content = '';
    let title = '';
    if (this.panel === 'controls') {
      title = 'FIELD MANUAL';
      content = `<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>`;
    } else if (this.panel === 'settings') {
      title = 'SYSTEM SETUP';
      content = `<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution === '320' ? 'selected' : ''}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution === '640' ? 'selected' : ''}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality === 'low' ? 'selected' : ''}>LOW</option><option value="high" ${this.settings.quality === 'high' ? 'selected' : ''}>HIGH</option></select><label for="volume">SOUND VOLUME <output id="volume-value">${Math.round(this.settings.volume * 100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty === 'easy' ? 'selected' : ''}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty === 'normal' ? 'selected' : ''}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty === 'hard' ? 'selected' : ''}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;
    } else if (isMenu) {
      content = `<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${checkpoint ? '' : 'disabled'}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;
    } else if (this.screen === 'pause') {
      title = 'MISSION PAUSED';
      content = `<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${checkpoint ? '<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>' : ''}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;
    } else if (this.screen === 'dead') {
      title = 'CASE CLOSED';
      content = `<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills ?? 0}</b></div>${checkpoint ? '<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>' : ''}<button data-action="retry" class="menu-button ${checkpoint ? '' : 'primary'}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;
    } else if (this.screen === 'complete') {
      title = 'DISTRICT SURVIVED';
      const elapsed = Math.floor(this.state?.time ?? 0);
      content = `<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills ?? 0} / ${this.state?.enemies.length ?? 0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets ?? 0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence ?? 0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;
    }
    this.overlay.innerHTML = `<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${isMenu && main ? 'title-screen' : 'subscreen'}"><section class="menu-panel"><div class="brand ${isMenu && main ? '' : 'brand-small'}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${title ? `<h2 class="panel-title">${title}</h2>` : '<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${content}</div></section>${isMenu && main ? `<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>` : ''}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${isMenu ? 'KEYBOARD + MOUSE · TOUCH SUPPORTED' : 'ELIAS VANE / FOSSIL NOIR'}</span></div></div>`;
    requestAnimationFrame(() => this.overlay.querySelector<HTMLButtonElement>('button.primary, button[data-action="back"]')?.focus({ preventScroll: true }));
  }

  private loadSettings(): Settings {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      return this.validateSettings(saved ? JSON.parse(saved) : {});
    } catch { return { ...DEFAULT_SETTINGS }; }
  }

  private validateSettings(saved: unknown): Settings {
    const data = saved && typeof saved === 'object' ? saved as Record<string, unknown> : {};
    const finite = (value: unknown, min: number, max: number, fallback: number) => typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
    return {
      sensitivity: finite(data.sensitivity, 0.3, 2.5, DEFAULT_SETTINGS.sensitivity),
      resolution: data.resolution === '320' || data.resolution === '640' ? data.resolution : DEFAULT_SETTINGS.resolution,
      quality: data.quality === 'low' ? 'low' : 'high',
      volume: finite(data.volume, 0, 1, DEFAULT_SETTINGS.volume),
      difficulty: data.difficulty === 'easy' || data.difficulty === 'hard' ? data.difficulty : 'normal',
    };
  }
}
