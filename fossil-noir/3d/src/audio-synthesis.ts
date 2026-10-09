import type { WeaponId } from './types';

/** Original sample instruments and composition, generated locally once per session. */
export const AUDIO_SAMPLE_RATE = 24000;
export const MUSIC_BPM = 112;
export const MUSIC_BARS = 16;
export const MUSIC_SECONDS = MUSIC_BARS * 4 * 60 / MUSIC_BPM;
export interface SynthClip { sampleRate: number; channels: Float32Array[] }
export interface Score { district: SynthClip; combat: SynthClip }

const TAU = Math.PI * 2;
const midi = (note: number) => 440 * 2 ** ((note - 69) / 12);
function random(seed: number) {
  return () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 2147483648 - 1; };
}
function clip(seconds: number, stereo = false, sampleRate = AUDIO_SAMPLE_RATE): SynthClip {
  return { sampleRate, channels: Array.from({ length: stereo ? 2 : 1 }, () => new Float32Array(Math.ceil(seconds * sampleRate))) };
}

/** A muzzle impulse is several pressure/noise bands, not a single electronic beep. */
export function renderWeaponSound(weapon: WeaponId, sampleRate = AUDIO_SAMPLE_RATE): SynthClip {
  const duration = { revolver: 0.82, shotgun: 1.1, plasma: 0.72, machinegun: 0.43 }[weapon];
  const output = clip(duration, true, sampleRate), dry = new Float32Array(output.channels[0].length);
  const noise = random({ revolver: 6721, shotgun: 1297, plasma: 9919, machinegun: 4049 }[weapon]);
  let low = 0, mid = 0, phase = 0, phase2 = 0;
  const isShotgun = weapon === 'shotgun', isPlasma = weapon === 'plasma', isMachine = weapon === 'machinegun';
  for (let i = 0; i < dry.length; i++) {
    const t = i / sampleRate, n = noise();
    low += (n - low) * 0.085;
    mid += (n - mid) * 0.43;
    const high = n - mid;
    const attack = Math.min(1, t / 0.0012);
    let value: number;
    if (isPlasma) {
      phase += TAU * (72 + 970 * Math.exp(-t * 20)) / sampleRate;
      phase2 += TAU * (114 + 1430 * Math.exp(-t * 17)) / sampleRate;
      value = (Math.sin(phase + Math.sin(phase2) * 1.5) * 0.58 + Math.sin(phase2) * 0.24) * Math.exp(-t * 10);
      value += (high * 0.62 + mid * 0.4) * Math.exp(-t * 24);
      value += Math.sin(TAU * 49 * t) * 0.45 * Math.exp(-t * 11);
      value += Math.sin(TAU * 1880 * t) * Math.exp(-t * 15) * 0.11;
    } else {
      const body = isShotgun ? 185 : isMachine ? 154 : 210;
      const decay = isShotgun ? 8.5 : isMachine ? 24 : 13;
      phase += TAU * (43 + body * Math.exp(-t * 37)) / sampleRate;
      value = Math.sin(phase) * (isShotgun ? 1.03 : 0.77) * Math.exp(-t * decay);
      value += high * 1.55 * Math.exp(-t * (isShotgun ? 100 : 155));
      value += mid * (isShotgun ? 1.9 : 1.12) * Math.exp(-t * (isShotgun ? 21 : isMachine ? 55 : 31));
      value += low * (isShotgun ? 2.25 : 1.55) * Math.exp(-t * (isShotgun ? 9 : 16));
      // Metallic bolt / cylinder snap and shell strike sit after the pressure wave.
      const clickTime = isShotgun ? 0.38 : isMachine ? 0.047 : 0.12;
      if (t > clickTime) {
        const u = t - clickTime;
        value += (high * 0.24 + Math.sin(TAU * 2230 * u) * 0.13 + Math.sin(TAU * 3180 * u) * 0.07) * Math.exp(-u * 83);
      }
      if (isShotgun && t > 0.56) value += (mid * 0.5 + Math.sin(TAU * 680 * t) * 0.1) * Math.exp(-(t - 0.56) * 45);
      const casingTime = isMachine ? 0.112 : isShotgun ? 0.66 : 0.19;
      if (t > casingTime) {
        const u = t - casingTime;
        value += (Math.sin(TAU * 2760 * u) + Math.sin(TAU * 4130 * u) * 0.35) * Math.exp(-u * 58) * 0.085;
      }
    }
    dry[i] = Math.tanh(value * 1.3) * attack * Math.min(1, (duration - t) / 0.035);
  }
  // Short, asymmetric room reflections retain a hard attack and add physical space.
  for (let side = 0; side < 2; side++) {
    let reflection = 0;
    const delays = [0.043 + side * 0.009, 0.097 - side * 0.012, 0.171 + side * 0.014];
    for (let i = 0; i < dry.length; i++) {
      let echoes = 0;
      for (let e = 0; e < delays.length; e++) {
        const index = i - Math.round(delays[e] * sampleRate);
        if (index >= 0) echoes += dry[index] * [0.21, 0.12, 0.065][e];
      }
      reflection += (echoes - reflection) * 0.27;
      output.channels[side][i] = Math.tanh((dry[i] + reflection) * 0.94) * 0.97;
    }
  }
  return output;
}

type Drum = 'kick' | 'snare' | 'hat' | 'open' | 'metal';
function drum(kind: Drum): SynthClip {
  const duration = { kick: 0.44, snare: 0.28, hat: 0.07, open: 0.29, metal: 0.37 }[kind];
  const sample = clip(duration), noise = random(kind.charCodeAt(0) * 1931);
  let low = 0, phase = 0;
  for (let i = 0; i < sample.channels[0].length; i++) {
    const t = i / sample.sampleRate, n = noise(); low += (n - low) * 0.22;
    let s = 0;
    if (kind === 'kick') {
      phase += TAU * (43 + 113 * Math.exp(-t * 48)) / sample.sampleRate;
      s = Math.sin(phase) * Math.exp(-t * 12) + (n - low) * Math.exp(-t * 160) * 0.48;
    } else if (kind === 'snare') {
      s = (n - low * 0.7) * Math.exp(-t * 21) * 0.65 + Math.sin(TAU * 181 * t) * Math.exp(-t * 33) * 0.3;
      s += (Math.sin(TAU * 331 * t) + Math.sin(TAU * 418 * t) * 0.4) * Math.exp(-t * 40) * 0.14;
    } else if (kind === 'metal') {
      s = (Math.sin(TAU * 765 * t) * Math.sin(TAU * 1083 * t) + Math.sin(TAU * 1743 * t) * 0.4) * Math.exp(-t * 17) * 0.4;
      s += (n - low) * Math.exp(-t * 32) * 0.25;
    } else s = (n - low) * Math.exp(-t * (kind === 'hat' ? 67 : 18)) * 0.52;
    sample.channels[0][i] = Math.tanh(s * 1.8) * Math.min(1, t / 0.0008);
  }
  return sample;
}

function addSample(target: SynthClip, sound: SynthClip, at: number, gain: number, pan = 0): void {
  const start = Math.round(at * target.sampleRate), length = target.channels[0].length;
  const left = Math.sqrt((1 - pan) / 2), right = Math.sqrt((1 + pan) / 2);
  for (let i = 0; i < sound.channels[0].length; i++) {
    const index = (start + i) % length;
    target.channels[0][index] += sound.channels[0][i] * gain * left;
    target.channels[1][index] += sound.channels[sound.channels.length - 1][i] * gain * right;
  }
}

type Instrument = 'bass' | 'pad' | 'lead' | 'riff';
function addVoice(target: SynthClip, at: number, seconds: number, note: number, gain: number, instrument: Instrument, pan = 0): void {
  const rate = target.sampleRate, frequency = midi(note), length = target.channels[0].length;
  const start = Math.round(at * rate), frames = Math.ceil(seconds * rate);
  const left = Math.sqrt((1 - pan) / 2), right = Math.sqrt((1 + pan) / 2);
  for (let i = 0; i < frames; i++) {
    const t = i / rate, p = TAU * frequency * t, progress = t / seconds;
    let wave: number, envelope: number;
    if (instrument === 'pad') {
      wave = Math.sin(p) * 0.52 + Math.sin(p * 1.004 + Math.sin(t * 1.3) * 0.12) * 0.32 + Math.sin(p * 1.997) * 0.13;
      envelope = Math.min(1, t / 0.29) * Math.min(1, (seconds - t) / 0.48);
    } else if (instrument === 'lead') {
      wave = Math.sin(p + Math.sin(p * 2) * 0.62) * 0.63 + Math.sin(p * 3.002) * 0.12 + Math.sin(p * 0.999) * 0.21;
      envelope = Math.min(1, t / 0.016) * Math.exp(-progress * 3.4) * Math.min(1, (seconds - t) / 0.055);
    } else if (instrument === 'riff') {
      wave = Math.tanh((Math.sin(p) + Math.sin(p * 2) * 0.48 + Math.sin(p * 3) * 0.33 + Math.sin(p * 4) * 0.19) * 3.8);
      envelope = Math.min(1, t / 0.005) * Math.exp(-progress * 4.5) * Math.min(1, (seconds - t) / 0.018);
    } else {
      wave = Math.tanh((Math.sin(p) * 0.83 + Math.sin(p * 2) * 0.32 + Math.sin(p * 3) * 0.17) * 1.9);
      envelope = Math.min(1, t / 0.006) * Math.exp(-progress * 2.1) * Math.min(1, (seconds - t) / 0.022);
    }
    const index = (start + i) % length, value = wave * envelope * gain;
    target.channels[0][index] += value * left;
    target.channels[1][index] += value * right;
  }
}

function finishStem(target: SynthClip): void {
  for (const channel of target.channels) {
    let previousInput = 0, previousOutput = 0;
    for (let i = 0; i < channel.length; i++) {
      // DC blocker and conservative saturation leave room for gunfire in the mix.
      const input = channel[i], output = input - previousInput + previousOutput * 0.995;
      previousInput = input; previousOutput = output;
      channel[i] = Math.tanh(output * 1.75) * 0.75;
    }
    // The PCM loop closes without a discontinuity at its sixteenth-bar boundary.
    const seamFrames = Math.round(target.sampleRate * 0.003);
    for (let i = 0; i < seamFrames; i++) {
      const index = channel.length - seamFrames + i, blend = i / (seamFrames - 1);
      channel[index] = channel[index] * (1 - blend) + channel[0] * blend;
    }
  }
}

/** Sixteen-bar D-minor score: nocturnal harmony, breakbeat, bass and a recurring case-file motif. */
export function renderScore(): Score {
  const district = clip(MUSIC_SECONDS, true), combat = clip(MUSIC_SECONDS, true);
  const beat = 60 / MUSIC_BPM, bar = beat * 4;
  const samples = { kick: drum('kick'), snare: drum('snare'), hat: drum('hat'), open: drum('open'), metal: drum('metal') };
  // Dm9 → Bbmaj7 → Fadd9 → Csus: original noir harmony with an unresolved turnaround.
  const chords = [[50, 53, 57, 60, 64], [46, 50, 53, 57, 60], [41, 48, 53, 57, 60], [48, 53, 55, 58, 62]];
  const roots = [38, 34, 29, 36];
  const motif = [62, 65, 69, 67, 64, 65, 62, 60];
  for (let b = 0; b < MUSIC_BARS; b++) {
    const section = Math.floor(b / 2) % 4, root = roots[section], start = b * bar;
    const variation = b >= 8;
    if (b % 2 === 0) {
      chords[section].forEach((note, voice) => addVoice(district, start, bar * 2 + 0.18, note, 0.053, 'pad', (voice - 2) * 0.42));
    }
    // Syncopation and occasional ghost notes make this a full groove, including exploration.
    for (const step of [0, 6, 8, 11, ...(b % 4 === 3 ? [14] : [])]) addSample(district, samples.kick, start + step * beat / 4, 0.42);
    for (const step of [4, 12]) addSample(district, samples.snare, start + step * beat / 4, 0.31, 0.06);
    if (b % 2 === 1) addSample(district, samples.snare, start + 15 * beat / 4, 0.095, -0.2);
    for (let step = 0; step < 16; step += 2) addSample(district, samples.hat, start + step * beat / 4, step % 4 === 0 ? 0.09 : 0.14, step % 4 === 0 ? -0.27 : 0.3);
    addSample(district, samples.open, start + 10 * beat / 4, 0.075, 0.4);
    if (b % 2 === 1) addSample(district, samples.metal, start + 7 * beat / 4, 0.12, -0.45);
    const bassSteps = [0, 3, 6, 8, 10, 13, 15];
    bassSteps.forEach((step, i) => addVoice(district, start + step * beat / 4, beat * (step === 0 ? 0.7 : 0.38), root + (i === 3 || i === 5 ? 12 : i === 6 && b % 2 === 1 ? 7 : 0), 0.19, 'bass'));
    if (b % 2 === 0 || variation) {
      const phrase = [0.5, 1.25, 2.5, 3.25];
      phrase.forEach((position, i) => {
        const note = motif[(b + i) % motif.length] + (section === 1 ? -2 : section === 3 ? -5 : 0);
        addVoice(district, start + position * beat, beat * 1.5, note, 0.125, 'lead', -0.34);
        addVoice(district, start + (position + 0.5) * beat, beat * 1.3, note, 0.042, 'lead', 0.67);
      });
    }
    // A phase-aligned second stem crossfades in during a real enemy encounter.
    for (const step of [0, 2, 6, 8, 10, 14]) addSample(combat, samples.kick, start + step * beat / 4, 0.23);
    for (const step of [4, 12, ...(b % 4 === 3 ? [13, 14, 15] : [])]) addSample(combat, samples.snare, start + step * beat / 4, 0.22, -0.1);
    for (let step = 1; step < 16; step += 2) addSample(combat, samples.hat, start + step * beat / 4, 0.07, step % 4 === 1 ? -0.6 : 0.6);
    for (const step of [0, 2, 3, 6, 8, 10, 11, 14]) {
      const note = root + 12 + (step === 6 ? 7 : step === 14 && b % 4 === 3 ? 10 : 0);
      addVoice(combat, start + step * beat / 4, beat * 0.38, note, 0.16, 'riff', -0.42);
      addVoice(combat, start + step * beat / 4 + 0.018, beat * 0.38, note + 12, 0.065, 'riff', 0.42);
    }
    if (b % 4 === 3) addSample(combat, samples.metal, start + 3.5 * beat, 0.21, 0.3);
  }
  finishStem(district); finishStem(combat);
  return { district, combat };
}
