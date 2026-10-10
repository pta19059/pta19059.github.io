import type { Difficulty, GameEvent, GameState, LevelData, Settings, WeaponId } from './types';
import { CAMPAIGN, CASE_FILES } from './campaign';
import { AMMO_TYPES, WEAPONS, WEAPON_IDS } from './arsenal';
import { Controls } from './controls';
import { PickupNotices } from './pickup-notices';

type Screen = 'menu' | 'pause' | 'dead' | 'complete' | 'playing';
type Callbacks = {
  start: (checkpoint: boolean) => void;
  chapter: (index: number) => void;
  next: () => void;
  resume: () => void;
  restart: (checkpoint: boolean) => void;
  menu: () => void;
  pause: () => void;
  settings: (settings: Settings) => void;
};

const SETTINGS_KEY = 'fossil-noir-3d-settings';
const DEFAULT_SETTINGS: Settings = { sensitivity: 1, resolution: '640', quality: 'high', volume: 0.7, musicVolume: 0.75, effectsVolume: 0.95, difficulty: 'normal', controls: 'auto' };
const DIFFICULTY_LABELS: Record<Difficulty, {name: string; description: string}> = {
  easy: { name: 'ROOKIE', description: 'Less enemy health and damage. Slower attacks. Generous ammunition.' },
  normal: { name: 'DETECTIVE', description: 'Balanced enemies, combat speed and ammunition. The intended first run.' },
  hard: { name: 'NIGHTMARE', description: 'Tougher, faster enemies. Heavy incoming damage. Fewer rounds.' },
  nightmare: { name: 'EXTINCTION', description: 'Maximum enemy aggression, health and damage. Scarce ammunition. Every cache counts.' },
};
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));

export class UI {
  settings: Settings;
  private screen: Screen = 'menu';
  private panel: 'main' | 'controls' | 'settings' | 'chapters' | 'files' = 'main';
  private state?: GameState;
  private level: LevelData = CAMPAIGN[0];
  private selectedChapter = 0;
  private savedChapter: number | null = null;
  private knownEvidence: string[] = [];
  private overlay = document.querySelector<HTMLElement>('#menu-overlay')!;
  private cached = new Map<string, string>();
  private notices = new PickupNotices(document.querySelector<HTMLElement>('#pickup-notices')!);

  constructor(private callbacks: Callbacks, private controls = new Controls()) {
    this.settings = this.loadSettings();
    this.controls.setPreference(this.settings.controls);
    this.notices.setCompact(this.controls.mode === 'touch');
    this.controls.subscribe(() => {
      this.refreshControls();
      if (this.screen === 'playing' && this.state) this.update(this.state);
    });
    this.overlay.addEventListener('click', (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-action]');
      if (!button || button.disabled) return;
      switch (button.dataset.action) {
        case 'start': callbacks.start(false); break;
        case 'continue': callbacks.start(true); break;
        case 'next': callbacks.next(); break;
        case 'launch-chapter': callbacks.chapter(this.selectedChapter); break;
        case 'select-chapter': this.selectedChapter = Number(button.dataset.chapter); this.render(); break;
        case 'resume': callbacks.resume(); break;
        case 'retry': callbacks.restart(false); break;
        case 'checkpoint': callbacks.restart(true); break;
        case 'menu': callbacks.menu(); break;
        case 'controls': this.panel = 'controls'; this.render(); break;
        case 'settings': this.panel = 'settings'; this.render(); break;
        case 'chapters': this.panel = 'chapters'; this.render(); break;
        case 'files': this.panel = 'files'; this.render(); break;
        case 'back': this.panel = 'main'; this.render(); break;
      }
    });
    this.overlay.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement | HTMLSelectElement;
      if (!target.dataset.setting) return;
      const field = target.dataset.setting as keyof Settings;
      const raw: unknown = ['sensitivity', 'volume', 'musicVolume', 'effectsVolume'].includes(field) ? Number(target.value) : target.value;
      this.settings = this.validateSettings({ ...this.settings, [field]: raw });
      try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch { /* Session settings still work. */ }
      this.callbacks.settings({ ...this.settings });
      const outputIds = { sensitivity: 'sensitivity-value', volume: 'volume-value', musicVolume: 'music-volume-value', effectsVolume: 'effects-volume-value' };
      if (field in outputIds) {
        const numericField = field as keyof typeof outputIds;
        const output = this.overlay.querySelector(`#${outputIds[numericField]}`);
        if (output) output.textContent = field === 'sensitivity' ? `${this.settings.sensitivity.toFixed(1)}×` : `${Math.round(this.settings[numericField] * 100)}%`;
      }
      if (field === 'difficulty') {
        const description = this.overlay.querySelector('#difficulty-description');
        if (description) description.textContent = DIFFICULTY_LABELS[this.settings.difficulty].description;
      }
      if (field === 'controls') this.render();
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

  setLevel(level: LevelData): void {
    this.clearPickups();
    this.level = level;
    this.selectedChapter = level.chapterId ?? 0;
    this.state = undefined;
    this.write('chapter-number', String(this.selectedChapter + 1).padStart(2, '0'));
    this.write('chapter-title', level.title ?? 'THE NEON DISTRICT');
    this.write('chapter-subtitle', level.subtitle ?? 'VESPER CITY / 2091');
    if (this.screen !== 'playing') this.render();
  }

  setSave(chapter: number | null): void {
    this.savedChapter = chapter;
    if (this.screen === 'menu') this.render();
  }

  setEvidence(ids: string[]): void { this.knownEvidence = ids.filter((id) => Object.hasOwn(CASE_FILES, id)); }

  handleEvents(events: GameEvent[], state: GameState): void { this.notices.handle(events, state.player.owned); }
  tick(dt: number): void { this.notices.tick(dt); }
  clearPickups(): void { this.notices.clear(); }

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
    this.write('hud-weapon', player.owned.includes(player.weapon) ? WEAPONS[player.weapon].name.toUpperCase() : 'MECHANICAL ARM');
    this.write('hud-ammo-type', player.owned.includes(player.weapon) ? AMMO_TYPES[player.weapon].name.toUpperCase() : 'FIND A WEAPON');
    this.write('hud-kills', `${state.kills} / ${state.enemies.length}`);
    this.write('hud-mode', player.mounted ? 'STRIDER MOUNTED' : `FOCUS ${Math.round(state.slow * 100)}%`);
    this.write('hud-difficulty', DIFFICULTY_LABELS[state.difficulty].name);
    const boss = state.enemies.filter((enemy) => enemy.boss && enemy.alive && (enemy.alert || Math.hypot(enemy.x - player.x, enemy.z - player.z) < 14)).sort((a, b) => Math.hypot(a.x - player.x, a.z - player.z) - Math.hypot(b.x - player.x, b.z - player.z))[0];
    const bossStatus = document.querySelector<HTMLElement>('#boss-status')!;
    bossStatus.hidden = !boss;
    if (boss) {
      this.write('boss-name', (boss.label ?? boss.boss ?? 'PRIORITY HOSTILE').toUpperCase());
      this.write('boss-health', `${Math.max(0, Math.ceil(boss.health))} / ${boss.maxHealth}`);
      document.querySelector<HTMLElement>('#boss-bar')!.style.width = `${Math.max(0, Math.min(100, boss.health / boss.maxHealth * 100))}%`;
    }
    const key = document.querySelector<HTMLElement>('#hud-key')!;
    key.classList.toggle('acquired', player.keycard);
    key.querySelector('b')!.textContent = player.keycard ? '■' : '—';
    document.querySelector<HTMLElement>('#health-bar')!.style.width = `${Math.max(0, Math.min(100, player.health))}%`;
    document.querySelector<HTMLElement>('#armor-bar')!.style.width = `${Math.max(0, Math.min(100, player.armor))}%`;
    document.querySelector<HTMLElement>('.health-stat')!.classList.toggle('critical', player.health <= 25);
    document.querySelector<HTMLElement>('#game')!.style.setProperty('--hurt', String(Math.min(0.68, player.hurt * 0.7)));
    const required = this.level.requiredKills ?? [];
    const remaining = required.filter((id) => !state.enemies.some((enemy) => enemy.id === id && !enemy.alive)).length;
    const evidenceLeft = Math.max(0, (this.level.requiredEvidence ?? 0) - player.evidence);
    const hasKey = this.level.pickups.some((item) => item.kind === 'keycard');
    const objective = !player.owned.length ? 'FIND A WEAPON · WALK OVER THE PICKUP' : this.level.safe ? this.level.objective ?? 'FOLLOW THE CASE FILE' : hasKey && !player.keycard ? 'FIND THE SECURITY KEYCARD' : !state.powered ? this.level.objective ?? 'RESTORE EXIT POWER' : remaining ? `NEUTRALIZE ${remaining} PRIORITY HOSTILE${remaining === 1 ? '' : 'S'}` : evidenceLeft ? `RECOVER ${evidenceLeft} EVIDENCE FILE${evidenceLeft === 1 ? '' : 'S'}` : `REACH ${this.level.exitLabel ?? 'THE EXIT'}`;
    this.write('objective', objective.toUpperCase());
    this.write('message', state.messageTime > 0 ? state.message : '');
    let hint = '';
    const use = this.controls.mode === 'touch' ? 'TAP USE' : 'E';
    const nearDoor = state.doors.find((door) => Math.hypot(door.x - player.x, door.z - player.z) < 3.2);
    const nearPickup = state.pickups.filter((item) => !item.collected && Math.hypot(item.x - player.x, item.z - player.z) < 2.6).sort((a, b) => Math.hypot(a.x - player.x, a.z - player.z) - Math.hypot(b.x - player.x, b.z - player.z))[0];
    if (player.mounted) hint = `${use} · DISMOUNT STRIDER`;
    else if (Math.hypot(state.mount.x - player.x, state.mount.z - player.z) < 2.8) hint = `${use} · RIDE STRIDER`;
    else if (!state.powered && Math.hypot(this.level.switch.x - player.x, this.level.switch.z - player.z) < 2.5) hint = `${use} · ACTIVATE POWER / TRANSMITTER`;
    else if (Math.hypot(this.level.exit.x - player.x, this.level.exit.z - player.z) < 3) hint = !state.powered ? 'ACTIVATE THE SWITCH FIRST' : remaining ? 'PRIORITY HOSTILES REMAIN' : evidenceLeft ? 'RECOVER THE REQUIRED EVIDENCE' : `ENTER ${this.level.exitLabel ?? 'THE EXIT'}`;
    else if (nearDoor) hint = nearDoor.locked && !player.keycard ? 'SECURITY KEYCARD REQUIRED' : `${use} · ${nearDoor.target > 0 ? 'CLOSE' : 'OPEN'} ${nearDoor.label.toUpperCase()}`;
    else if (nearPickup) {
      const weapon = WEAPON_IDS.includes(nearPickup.kind as WeaponId) ? nearPickup.kind as WeaponId : undefined;
      const name = weapon ? WEAPONS[weapon].name : nearPickup.kind === 'ammo' ? nearPickup.ammoFor ? `${AMMO_TYPES[nearPickup.ammoFor].name} · FOR ${WEAPONS[nearPickup.ammoFor].name}` : 'MIXED AMMUNITION CRATE' : nearPickup.label ?? nearPickup.kind;
      hint = `MOVE OVER · ${name.toUpperCase()}`;
    }
    this.write('interaction', hint);
    document.querySelector('#crosshair')!.classList.toggle('firing', player.recoil > 0.1);
    const arsenal = WEAPON_IDS.map((id, index) => {
      const owned = player.owned.includes(id);
      const short = id === 'machinegun' ? 'HMG' : id === 'revolver' ? 'REV' : id === 'shotgun' ? 'SHOT' : id === 'plasma' ? 'PLAS' : id === 'railgun' ? 'RAIL' : 'ARC';
      return `<span class="arsenal-slot ${owned ? 'owned' : 'locked'} ${owned && player.weapon === id ? 'selected' : ''}" title="${escapeHtml(WEAPONS[id].name)}${owned ? ` — ${player.ammo[id]} loaded, ${player.reserve[id]} reserve` : ' — find this weapon'}"><b>${index + 1}</b> ${short}<small>${owned ? `${player.ammo[id]}/${player.reserve[id]}` : '—'}</small></span>`;
    }).join('');
    if (this.cached.get('arsenal') !== arsenal) { this.cached.set('arsenal', arsenal); document.querySelector('#arsenal')!.innerHTML = arsenal; }
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

  private hasCheckpoint(): boolean { return Boolean(this.state?.checkpoint); }

  private difficultyControl(): string {
    return `<div class="difficulty-choice"><label for="difficulty">DIFFICULTY FOR NEW RUN</label><select id="difficulty" data-setting="difficulty">${Object.entries(DIFFICULTY_LABELS).map(([id, info]) => `<option value="${id}" ${this.settings.difficulty === id ? 'selected' : ''}>${info.name}</option>`).join('')}</select><p id="difficulty-description">${DIFFICULTY_LABELS[this.settings.difficulty].description}</p></div>`;
  }

  private controlChoice(): string {
    return `<div class="control-choice"><label for="control-preference">CONTROL MODE</label><select id="control-preference" data-setting="controls"><option value="auto" ${this.settings.controls === 'auto' ? 'selected' : ''}>AUTO · DETECT DEVICE</option><option value="desktop" ${this.settings.controls === 'desktop' ? 'selected' : ''}>PC · KEYBOARD + MOUSE</option><option value="touch" ${this.settings.controls === 'touch' ? 'selected' : ''}>PHONE / TABLET · TOUCH</option></select><p id="control-description">${this.controls.mode === 'touch' ? 'TOUCH ACTIVE · Joystick + on-screen buttons. No mouse capture needed.' : 'KEYBOARD + MOUSE ACTIVE · WASD, Shift to sprint and left click to fire.'}</p></div>`;
  }

  private controlStatus(): string {
    return `<div class="control-status"><b id="control-status-mode">${this.controls.mode === 'touch' ? 'PHONE / TABLET · TOUCH' : 'PC · KEYBOARD + MOUSE'}</b><span id="control-status-source">${this.controls.preference === 'auto' ? 'AUTO DETECTED' : 'MANUAL SELECTION'}</span></div>`;
  }

  private controlManual(): string {
    const rows = this.controls.mode === 'touch' ? [
      ['MOVE', 'LEFT JOYSTICK'], ['RUN', 'FULL STICK / HOLD RUN'], ['AIM', 'DRAG THE RIGHT SIDE'], ['FIRE + AIM', 'HOLD & DRAG FIRE'],
      ['JUMP / CROUCH', 'JUMP / HOLD CROUCH'], ['INTERACT / RIDE', 'TAP USE'], ['RELOAD', 'TAP RELOAD'], ['CHANGE WEAPON', 'TAP GUN'], ['BULLET TIME', 'HOLD FOCUS'], ['PAUSE', 'TAP Ⅱ'],
    ] : [
      ['MOVE', 'W A S D'], ['RUN', 'HOLD SHIFT'], ['AIM / FIRE', 'MOUSE / LEFT CLICK'], ['JUMP', 'SPACE'], ['CROUCH', 'CTRL / C'],
      ['INTERACT / RIDE', 'E'], ['RELOAD', 'R'], ['CHANGE WEAPON', '1–6 / MOUSE WHEEL'], ['BULLET TIME', 'HOLD Q'], ['PAUSE', 'ESC / P'],
    ];
    return rows.map(([name, keys]) => `<span>${name}</span><kbd>${keys}</kbd>`).join('');
  }

  private controlTip(): string {
    return this.controls.mode === 'touch' ? 'Two thumbs: move with the left joystick; push it fully to run. Hold and drag FIRE with the right thumb to shoot and aim together. Drag elsewhere on the right to look without shooting. Landscape is recommended.' : 'Click the game to capture the mouse. Esc releases it. Hold Shift to run; left click fires. Touch controls stay hidden. On a hybrid device, Auto follows your active input; you can choose a fixed mode above.';
  }

  private refreshControls(): void {
    this.notices.setCompact(this.controls.mode === 'touch');
    // Update only labels: replacing the menu during pointerdown would swallow
    // the first tap on a hybrid device before its click can reach a button.
    const text = (id: string, value: string) => { const node = document.getElementById(id); if (node) node.textContent = value; };
    text('control-status-mode', this.controls.mode === 'touch' ? 'PHONE / TABLET · TOUCH' : 'PC · KEYBOARD + MOUSE');
    text('control-status-source', this.controls.preference === 'auto' ? 'AUTO DETECTED' : 'MANUAL SELECTION');
    text('control-footer', this.controls.mode === 'touch' ? 'TOUCH · MOVE / AIM / FIRE' : 'PC · KEYBOARD + MOUSE');
    text('control-description', this.controls.mode === 'touch' ? 'TOUCH ACTIVE · Joystick + on-screen buttons. No mouse capture needed.' : 'KEYBOARD + MOUSE ACTIVE · WASD, Shift to sprint and left click to fire.');
    text('control-tip', this.controlTip());
    const manual = document.getElementById('control-manual');
    if (manual) manual.innerHTML = this.controlManual();
  }

  private briefing(level: LevelData): string {
    const index = level.chapterId ?? 0;
    return `<aside class="case-file"><div class="file-tab">CASE FILE <b>${String(index + 1).padStart(2, '0')} / ${CAMPAIGN.length}</b></div><h2>${escapeHtml(level.title ?? 'THE NEON DISTRICT')}</h2><div class="file-subject">${escapeHtml(level.subtitle ?? 'VESPER CITY / 2091')}</div><p>${escapeHtml(level.intro ?? '')}</p><div class="case-route"><span>OBJECTIVE / ${escapeHtml(level.objective ?? 'REACH THE EXIT')}</span><span>EXIT / ${escapeHtml(level.exitLabel ?? 'EXTRACTION')}</span><span>ARSENAL CARRIES INTO THE NEXT CHAPTER</span></div><div class="file-stamp">${level.safe ? 'SAFEHOUSE' : 'STATUS: OPEN'}</div></aside>`;
  }

  private render(): void {
    const checkpoint = this.hasCheckpoint();
    const main = this.panel === 'main';
    const isMenu = this.screen === 'menu';
    const chapter = this.level.chapterId ?? 0;
    let content = '';
    let title = '';
    if (this.panel === 'controls') {
      title = 'FIELD MANUAL';
      content = `${this.controlChoice()}<div id="control-manual" class="controls-grid">${this.controlManual()}</div><p id="control-tip" class="field-note">${this.controlTip()}</p><p class="field-note">Walk over supplies to collect them. Each weapon has its own ammunition. The recovery card shows the ammo type, compatible weapon and the exact reserve added. Supplies can be stored before finding their weapon; reload from its reserve.</p><p class="field-note">Shoot fuel canisters for explosions; glass shatters. The Rail Rifle delivers precise heavy hits; the Arc Disruptor chains energy between nearby enemies. Explore secret doors for rare weapons. Pause to read recovered case files.</p><button data-action="back" class="menu-button">← BACK</button>`;
    } else if (this.panel === 'settings') {
      title = 'SYSTEM SETUP';
      content = `<div class="settings-grid"><label for="sensitivity">LOOK SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution === '320' ? 'selected' : ''}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution === '640' ? 'selected' : ''}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality === 'low' ? 'selected' : ''}>LOW</option><option value="high" ${this.settings.quality === 'high' ? 'selected' : ''}>HIGH</option></select><label for="volume">MASTER VOLUME <output id="volume-value">${Math.round(this.settings.volume * 100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="music-volume">MUSIC VOLUME <output id="music-volume-value">${Math.round(this.settings.musicVolume * 100)}%</output></label><input id="music-volume" data-setting="musicVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.musicVolume}"><label for="effects-volume">EFFECTS VOLUME <output id="effects-volume-value">${Math.round(this.settings.effectsVolume * 100)}%</output></label><input id="effects-volume" data-setting="effectsVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.effectsVolume}"></div>${this.controlChoice()}${this.difficultyControl()}<p class="field-note">Difficulty changes apply to a new campaign or chapter selection. The current run and its checkpoints keep their original difficulty. Other settings apply immediately and are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;
    } else if (this.panel === 'chapters') {
      title = 'SELECT A CHAPTER';
      content = `<div class="chapter-grid">${CAMPAIGN.map((level, index) => `<button data-action="select-chapter" data-chapter="${index}" class="chapter-card ${index === this.selectedChapter ? 'selected' : ''}" aria-pressed="${index === this.selectedChapter}"><b>${String(index + 1).padStart(2, '0')}</b><span>${escapeHtml(level.title ?? '')}<small>${escapeHtml(level.subtitle ?? '')}</small></span></button>`).join('')}</div><div class="chapter-briefing"><p>${escapeHtml(CAMPAIGN[this.selectedChapter].intro ?? '')}</p><small>${escapeHtml(CAMPAIGN[this.selectedChapter].objective ?? '')}</small></div>${this.difficultyControl()}<button data-action="launch-chapter" class="menu-button primary">▶ START CHAPTER ${String(this.selectedChapter + 1).padStart(2, '0')}</button><p class="field-note">Chapter selection gives a suitable starting arsenal. Playing the campaign carries your collected weapons and ammunition forward.</p><button data-action="back" class="menu-button">← BACK</button>`;
    } else if (this.panel === 'files') {
      title = 'RECOVERED CASE FILES';
      const ids = [...new Set([...this.knownEvidence, ...(this.state?.pickups.filter((item) => item.collected && item.evidenceId).map((item) => item.evidenceId!) ?? [])])];
      content = `<div class="evidence-files">${ids.length ? ids.map((id) => CASE_FILES[id] ? `<article><h3>${escapeHtml(CASE_FILES[id].title)}</h3><small>${escapeHtml(CASE_FILES[id].source)}</small><p>${escapeHtml(CASE_FILES[id].body)}</p></article>` : '').join('') : '<p class="field-note">No files recovered yet. Look for glowing evidence terminals and walk over them.</p>'}</div><button data-action="back" class="menu-button">← BACK</button>`;
    } else if (isMenu) {
      content = `${this.controlStatus()}<button data-action="start" class="menu-button primary"><span>▶</span> START CAMPAIGN</button><button data-action="continue" class="menu-button" ${this.savedChapter === null ? 'disabled' : ''}>CONTINUE ${this.savedChapter === null ? 'CAMPAIGN' : `CHAPTER ${String(this.savedChapter + 1).padStart(2, '0')}`}</button><button data-action="chapters" class="menu-button">CHAPTER SELECT · ${CAMPAIGN.length} CHAPTERS</button>${this.difficultyControl()}<button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;
    } else if (this.screen === 'pause') {
      title = 'MISSION PAUSED';
      content = `<p class="pause-quote">CHAPTER ${String(chapter + 1).padStart(2, '0')} · ${escapeHtml(this.level.title ?? '')}<br>${this.state ? DIFFICULTY_LABELS[this.state.difficulty].name : ''} · Your run keeps its chosen difficulty.</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${checkpoint ? '<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>' : ''}<button data-action="retry" class="menu-button">RESTART CHAPTER</button><button data-action="files" class="menu-button">READ CASE FILES</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;
    } else if (this.screen === 'dead') {
      title = 'CASE CLOSED';
      content = `<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills ?? 0}</b></div>${checkpoint ? '<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>' : ''}<button data-action="retry" class="menu-button ${checkpoint ? '' : 'primary'}">RESTART CHAPTER</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;
    } else if (this.screen === 'complete') {
      const final = chapter === CAMPAIGN.length - 1;
      title = final ? 'EVIDENCE BROADCAST' : 'CHAPTER COMPLETE';
      const elapsed = Math.floor(this.state?.time ?? 0);
      content = `<p class="pause-quote">${escapeHtml(this.level.completionMessage ?? 'The trail continues.')}</p>${final ? '<p class="ending-copy">CASE 091 CLOSED. The Lazarus evidence is on every screen in Vesper. Mara is alive. Axiom can no longer bury the truth.</p>' : `<p class="next-chapter">NEXT / ${String(chapter + 2).padStart(2, '0')} · ${escapeHtml(CAMPAIGN[chapter + 1].title ?? '')}</p>`}<div class="results"><div class="result-line"><span>CHAPTER TIME</span><b>${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills ?? 0} / ${this.state?.enemies.length ?? 0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets ?? 0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence ?? 0}</b></div></div>${final ? '<button data-action="start" class="menu-button primary">▶ NEW CAMPAIGN</button>' : '<button data-action="next" class="menu-button primary">▶ NEXT CHAPTER</button>'}<button data-action="files" class="menu-button">READ CASE FILES</button><button data-action="retry" class="menu-button">REPLAY CHAPTER</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;
    }
    this.overlay.innerHTML = `<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / CASE 091</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${isMenu && main ? 'title-screen' : 'subscreen'}"><section class="menu-panel"><div class="brand ${isMenu && main ? '' : 'brand-small'}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${title ? `<h2 class="panel-title">${title}</h2>` : '<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${content}</div></section>${isMenu && main ? this.briefing(CAMPAIGN[this.savedChapter ?? 0]) : ''}</div><div class="menu-bottomline"><span>RETRO FPS / ${CAMPAIGN.length} CHAPTER CAMPAIGN</span><span><span id="control-footer">${this.controls.mode === 'touch' ? 'TOUCH · MOVE / AIM / FIRE' : 'PC · KEYBOARD + MOUSE'}</span></span></div></div>`;
    requestAnimationFrame(() => this.overlay.querySelector<HTMLButtonElement>('button.primary, button[data-action="back"]')?.focus({ preventScroll: true }));
  }

  private loadSettings(): Settings {
    try { const saved = localStorage.getItem(SETTINGS_KEY); return this.validateSettings(saved ? JSON.parse(saved) : {}); }
    catch { return { ...DEFAULT_SETTINGS }; }
  }

  private validateSettings(saved: unknown): Settings {
    const data = saved && typeof saved === 'object' ? saved as Record<string, unknown> : {};
    const finite = (value: unknown, min: number, max: number, fallback: number) => typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;
    return {
      sensitivity: finite(data.sensitivity, 0.3, 2.5, DEFAULT_SETTINGS.sensitivity),
      resolution: data.resolution === '320' || data.resolution === '640' ? data.resolution : DEFAULT_SETTINGS.resolution,
      quality: data.quality === 'low' ? 'low' : 'high',
      volume: finite(data.volume, 0, 1, DEFAULT_SETTINGS.volume),
      musicVolume: finite(data.musicVolume, 0, 1, DEFAULT_SETTINGS.musicVolume),
      effectsVolume: finite(data.effectsVolume, 0, 1, DEFAULT_SETTINGS.effectsVolume),
      difficulty: data.difficulty === 'easy' || data.difficulty === 'hard' || data.difficulty === 'nightmare' ? data.difficulty : 'normal',
      controls: data.controls === 'desktop' || data.controls === 'touch' ? data.controls : 'auto',
    };
  }
}
