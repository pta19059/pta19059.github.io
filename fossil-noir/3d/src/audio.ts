import type { GameEvent, GameState, WeaponId } from './types';
import { renderScore, renderWeaponSound, type SynthClip } from './audio-synthesis';

/** Original layered weapons and a composed, adaptive industrial/noir score. */
export class AudioSystem {
  private context?: AudioContext;
  private master?: GainNode;
  private fx?: GainNode;
  private music?: GainNode;
  private musicDuck?: GainNode;
  private districtGain?: GainNode;
  private combatGain?: GainNode;
  private noise?: AudioBuffer;
  private district?: AudioBuffer;
  private combat?: AudioBuffer;
  private weapons = new Map<WeaponId, AudioBuffer>();
  private musicSources: AudioBufferSourceNode[] = [];
  private musicStarted = 0;
  private musicOffset = 0;
  private volume = 0.7;
  private musicVolume = 0.75;
  private effectsVolume = 0.95;
  private unlocked = false;
  private lastStep = 0;
  private lastX?: number;
  private lastZ?: number;
  private distance = 0;
  private lastEnemy = -10;
  private danger = 0;

  unlock(): void {
    try {
      if (!this.context) {
        const AudioCtor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtor) return;
        const c = this.context = new AudioCtor();
        const limiter = c.createDynamicsCompressor();
        limiter.threshold.value = -7; limiter.knee.value = 8; limiter.ratio.value = 4;
        limiter.attack.value = 0.002; limiter.release.value = 0.16;
        this.master = c.createGain(); this.master.gain.value = this.volume;
        this.master.connect(limiter); limiter.connect(c.destination);
        this.fx = c.createGain(); this.fx.gain.value = this.effectsVolume; this.fx.connect(this.master);
        this.music = c.createGain(); this.music.gain.value = this.musicVolume; this.music.connect(this.master);
        this.musicDuck = c.createGain(); this.musicDuck.connect(this.music);
        this.districtGain = c.createGain(); this.districtGain.gain.value = 0.92; this.districtGain.connect(this.musicDuck);
        this.combatGain = c.createGain(); this.combatGain.gain.value = 0; this.combatGain.connect(this.musicDuck);
        const length = c.sampleRate * 2;
        this.noise = c.createBuffer(1, length, c.sampleRate);
        const data = this.noise.getChannelData(0);
        let seed = 1793;
        for (let i = 0; i < length; i++) { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; data[i] = seed / 2147483648 - 1; }
        for (const weapon of ['revolver', 'shotgun', 'plasma', 'machinegun'] as WeaponId[]) this.weapons.set(weapon, this.buffer(renderWeaponSound(weapon)));
        const score = renderScore();
        this.district = this.buffer(score.district); this.combat = this.buffer(score.combat);
      }
      void this.context.resume().then(() => { this.unlocked = true; }).catch(() => {});
      this.unlocked = this.context.state === 'running';
    } catch { /* The mission remains playable if a browser declines optional audio. */ }
  }

  setVolume(value: number): void { this.volume = this.clamp(value); this.setGain(this.master, this.volume); }
  setMusicVolume(value: number): void { this.musicVolume = this.clamp(value); this.setGain(this.music, this.musicVolume); }
  setEffectsVolume(value: number): void { this.effectsVolume = this.clamp(value); this.setGain(this.fx, this.effectsVolume); }
  private clamp(value: number): number { return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0; }
  private setGain(node: GainNode | undefined, value: number): void {
    if (!this.context || !node) return;
    const at = this.context.currentTime;
    node.gain.cancelScheduledValues(at);
    // A mute is exact, including an effects branch that was idle when changed.
    if (value === 0) node.gain.setValueAtTime(0, at);
    else node.gain.setTargetAtTime(value, at, 0.04);
  }

  suspend(): void {
    const c = this.context;
    if (c && this.musicSources.length && this.district) {
      this.musicOffset = (this.musicOffset + Math.max(0, c.currentTime - this.musicStarted)) % this.district.duration;
      this.musicDuck?.gain.cancelScheduledValues(c.currentTime);
      this.musicDuck?.gain.setTargetAtTime(0, c.currentTime, 0.035);
      for (const source of this.musicSources) source.stop(c.currentTime + 0.16);
      this.musicSources = [];
    }
    this.lastX = this.lastZ = undefined; this.distance = 0;
    // Keep the context alive so keyboard unpause needs no extra permission gesture.
  }

  handle(events: GameEvent[]): void {
    if (!this.context || !this.unlocked || this.context.state !== 'running') return;
    for (const event of events) {
      switch (event.type) {
        case 'shot': this.shot(event.weapon || 'revolver'); break;
        case 'reload': this.reload(event.weapon || 'revolver'); break;
        case 'hurt': this.burst(0.23, 0.24, 850); this.tone(97, 0.21, 0.21, 'sawtooth', 45); break;
        case 'pickup': this.tone(554.37, 0.08, 0.13, 'triangle'); this.tone(830.61, 0.1, 0.11, 'triangle', 830.61, 0.085); break;
        case 'door': this.burst(0.55, 0.14, 740); this.tone(89, 0.43, 0.14, 'sawtooth', 58); this.burst(0.085, 0.19, 2700, 0.42); break;
        case 'explosion':
          this.burst(0.85,0.72,2900);this.burst(0.18,0.48,6700);
          this.tone(128,0.65,0.48,'triangle',26);this.tone(49,0.9,0.28,'sine',24);
          this.burst(0.55,0.20,1800,0.12);break;
        case 'shatter':
          this.burst(0.18,0.35,8800);this.burst(0.48,0.17,5200,0.05);
          for(let i=0;i<5;i++)this.tone(2140+i*479,.06,.04,'triangle',1330+i*313,.04+i*.043);
          break;
        case 'enemy': {
          const now = this.context.currentTime;
          if (now - this.lastEnemy > 0.55) {
            this.lastEnemy = now;
            if (event.message?.includes('charging shot')) {
              this.tone(260, 0.19, 0.1, 'sawtooth', 790);
              this.burst(0.1, 0.24, 4600, 0.2); this.tone(145, 0.16, 0.17, 'triangle', 45, 0.2);
            } else {
              const strider = event.message?.startsWith('Strider');
              this.tone(strider ? 86 : 143, 0.34, 0.2, 'sawtooth', strider ? 35 : 56);
              this.tone(strider ? 134 : 218, 0.27, 0.1, 'triangle', 63);
              this.burst(0.32, 0.2, strider ? 630 : 1100);
            }
          }
          break;
        }
        case 'kill': this.burst(0.26, 0.19, 620); this.tone(118, 0.27, 0.13, 'sawtooth', 34); break;
        case 'mount': this.tone(110, 0.22, 0.16, 'sawtooth', 210); this.tone(82, 0.18, 0.17, 'triangle', 45, 0.15); break;
        case 'checkpoint': this.chime([261.63, 329.63, 392], 0.16, 0.11); break;
        case 'complete': this.chime([164.81, 220, 261.63, 329.63, 440], 0.18, 0.16); break;
        case 'message': break;
      }
    }
  }

  tick(state: GameState, dt: number): void {
    const c = this.context;
    if (!c || !this.unlocked || c.state !== 'running' || state.status !== 'playing') return;
    if (!this.musicSources.length) this.startMusic();
    const p = state.player;
    const threatened = state.enemies.some(enemy => enemy.alive && enemy.alert && Math.hypot(enemy.x - p.x, enemy.z - p.z) < 22);
    this.danger += ((threatened ? 1 : 0) - this.danger) * Math.min(1, dt * (threatened ? 1.7 : 0.32));
    this.combatGain?.gain.setTargetAtTime(this.danger * 0.93, c.currentTime, 0.18);
    this.districtGain?.gain.setTargetAtTime(0.92 - this.danger * 0.12, c.currentTime, 0.22);
    const travelled = this.lastX === undefined ? 0 : Math.hypot(p.x - this.lastX, p.z - this.lastZ!);
    this.lastX = p.x; this.lastZ = p.z;
    if (travelled < 1) this.distance += travelled;
    if (p.grounded && this.distance > (p.mounted ? 2.2 : 1.65) && c.currentTime - this.lastStep > 0.22 && dt > 0) {
      this.distance = 0; this.lastStep = c.currentTime;
      this.burst(0.065, p.mounted ? 0.18 : 0.085, p.mounted ? 430 : 1400);
      this.tone(p.mounted ? 65 : 110, 0.09, p.mounted ? 0.15 : 0.08, 'triangle', 40);
    }
  }

  private buffer(sound: SynthClip): AudioBuffer {
    const result = this.context!.createBuffer(sound.channels.length, sound.channels[0].length, sound.sampleRate);
    sound.channels.forEach((data, i) => result.getChannelData(i).set(data));
    return result;
  }

  private startMusic(): void {
    const c = this.context;
    if (!c || !this.district || !this.combat || !this.districtGain || !this.combatGain || !this.musicDuck) return;
    const at = c.currentTime + 0.025;
    this.musicDuck.gain.cancelScheduledValues(c.currentTime);
    this.musicDuck.gain.setValueAtTime(0, c.currentTime);
    this.musicDuck.gain.linearRampToValueAtTime(1, at + 0.3);
    this.musicStarted = at;
    for (const [buffer, bus] of [[this.district, this.districtGain], [this.combat, this.combatGain]] as const) {
      const source = c.createBufferSource(); source.buffer = buffer; source.loop = true; source.connect(bus);
      source.start(at, this.musicOffset); source.onended = () => source.disconnect();
      this.musicSources.push(source);
    }
  }

  private shot(weapon: WeaponId): void {
    const c = this.context, buffer = this.weapons.get(weapon);
    if (!c || !buffer || !this.fx) return;
    const source = c.createBufferSource(), gain = c.createGain();
    source.buffer = buffer; source.playbackRate.value = 0.985 + Math.random() * 0.03;
    gain.gain.value = { revolver: 0.84, shotgun: 1, plasma: 0.74, machinegun: 0.70 }[weapon];
    source.connect(gain); gain.connect(this.fx); source.start();
    source.onended = () => { source.disconnect(); gain.disconnect(); };
    // A gentle transient dip lets each muzzle crack cut through the score.
    if (this.musicDuck && this.musicSources.length) {
      const now = c.currentTime;
      this.musicDuck.gain.cancelScheduledValues(now);
      this.musicDuck.gain.setValueAtTime(Math.min(1, this.musicDuck.gain.value), now);
      this.musicDuck.gain.linearRampToValueAtTime(0.79, now + 0.006);
      this.musicDuck.gain.linearRampToValueAtTime(1, now + 0.145);
    }
  }

  private reload(weapon: WeaponId): void {
    if (weapon === 'plasma') {
      this.tone(180, 0.28, 0.13, 'sawtooth', 740); this.burst(0.17, 0.15, 2900, 0.25);
      this.tone(1320, 0.18, 0.09, 'triangle', 420, 0.47); return;
    }
    this.burst(0.075, 0.19, 4200); this.tone(420, 0.045, 0.11, 'square', 180);
    this.burst(0.13, 0.12, 1600, 0.19); this.tone(710, 0.045, 0.1, 'triangle', 270, 0.31);
    if (weapon === 'shotgun' || weapon === 'revolver') {
      for (let i = 0; i < 3; i++) {
        this.burst(0.032, 0.09, 3100, 0.36 + i * 0.19);
        this.tone(1870, 0.024, 0.035, 'triangle', 970, 0.36 + i * 0.19);
      }
    }
    this.burst(0.06, 0.22, 3800, weapon === 'machinegun' ? 0.83 : 1.0);
    this.tone(160, 0.08, 0.14, 'triangle', 61, weapon === 'machinegun' ? 0.84 : 1.02);
  }

  private tone(frequency: number, duration: number, volume: number, type: OscillatorType = 'square', end = frequency, delay = 0): void {
    const c = this.context;
    if (!c || !this.fx) return;
    const start = c.currentTime + delay, osc = c.createOscillator(), gain = c.createGain();
    osc.type = type; osc.frequency.setValueAtTime(Math.max(1, frequency), start);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, end), start + duration);
    gain.gain.setValueAtTime(0.0001, start); gain.gain.linearRampToValueAtTime(volume, start + Math.min(0.006, duration / 4));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain); gain.connect(this.fx); osc.start(start); osc.stop(start + duration + 0.025);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  private burst(duration: number, volume: number, cutoff: number, delay = 0): void {
    const c = this.context;
    if (!c || !this.noise || !this.fx) return;
    const start = c.currentTime + delay, source = c.createBufferSource(), filter = c.createBiquadFilter(), gain = c.createGain();
    source.buffer = this.noise; filter.type = 'lowpass'; filter.frequency.setValueAtTime(cutoff, start); filter.Q.value = 0.4;
    gain.gain.setValueAtTime(volume, start); gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter); filter.connect(gain); gain.connect(this.fx); source.start(start, Math.random()); source.stop(start + duration + 0.025);
    source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
  }

  private chime(notes: number[], spacing: number, volume: number): void {
    notes.forEach((note, i) => this.tone(note, 0.42, volume, 'triangle', note, i * spacing));
  }
}
