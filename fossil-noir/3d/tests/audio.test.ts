import assert from 'node:assert/strict';
import test from 'node:test';
import { renderCapacitorReload, renderScore, renderWeaponSound, MUSIC_SECONDS } from '../src/audio-synthesis';
import type { SynthClip } from '../src/audio-synthesis';
import { AudioSystem } from '../src/audio';
import { WEAPON_IDS } from '../src/arsenal';

function rms(data: Float32Array, from = 0, until = data.length) {
  let sum = 0; for (let i = from; i < until; i++) sum += data[i] ** 2;
  return Math.sqrt(sum / (until - from));
}
function finiteBounded(sound: SynthClip) {
  for (const channel of sound.channels) for (const value of channel) {
    assert.ok(Number.isFinite(value), 'Audio must never send NaN to the browser mixer');
    assert.ok(Math.abs(value) < 1, 'Original samples leave headroom instead of hard clipping');
  }
}

test('all six weapons have a strong transient, an audible body and a decaying tail', () => {
  assert.equal(WEAPON_IDS.length, 6);
  for (const weapon of WEAPON_IDS) {
    const sound = renderWeaponSound(weapon); finiteBounded(sound);
    const d = sound.channels[0], rate = sound.sampleRate;
    const body = rms(d, 0, Math.round(rate * 0.1));
    assert.ok(body > 0.18, weapon + ' must sound substantial');
    assert.ok(rms(d, Math.round(rate * 0.025), Math.round(rate * 0.07)) > 0.07);
    assert.ok(rms(d, d.length - Math.round(rate * 0.025)) < body * 0.05);
    assert.equal(sound.channels.length, 2);
  }
});

test('rail launch and branching electrical discharge have distinct reproducible bodies and coil tails', () => {
  const rail = renderWeaponSound('railgun'), arc = renderWeaponSound('arc'), plasma = renderWeaponSound('plasma');
  assert.ok(rail.channels[0].length > arc.channels[0].length * 1.4, 'The rail capacitor has a longer physical ring');
  for (const sound of [rail, arc]) {
    const d = sound.channels[0], rate = sound.sampleRate;
    finiteBounded(sound);
    assert.ok(rms(d, Math.round(rate * 0.2), Math.round(rate * 0.4)) > 0.035, 'Capacitor decay remains audible after the launch');
    assert.ok(Math.max(...d.subarray(0, Math.round(rate * 0.1))) < 0.9, 'Transient leaves mix headroom');
  }
  for (const [a, b] of [[rail, plasma], [arc, plasma], [rail, arc]]) {
    let difference = 0, product = 0, energyA = 0, energyB = 0;
    const length = Math.round(a.sampleRate * 0.25);
    for (let i = 0; i < length; i++) {
      const x = a.channels[0][i], y = b.channels[0][i];
      difference += Math.abs(x - y); product += x * y; energyA += x * x; energyB += y * y;
    }
    assert.ok(difference / length > 0.15, 'New guns must not reuse the plasma waveform');
    assert.ok(Math.abs(product / Math.sqrt(energyA * energyB)) < 0.5, 'Different launch and coil instruments remain distinct');
  }
  assert.deepEqual(renderWeaponSound('railgun').channels, rail.channels, 'Generated instruments are deterministic');
  const lowerRate = renderWeaponSound('arc', 12000); finiteBounded(lowerRate);
  assert.equal(lowerRate.sampleRate, 12000);
  assert.equal(lowerRate.channels[0].length, Math.ceil(0.78 * 12000));
});

test('new capacitor reloads contain handling, precharge and a clean settled ending before reload completes', () => {
  const rail = renderCapacitorReload('railgun'), arc = renderCapacitorReload('arc');
  for (const [sound, reloadSeconds] of [[rail, 1.9], [arc, 1.6]] as const) {
    finiteBounded(sound); assert.equal(sound.channels.length, 2);
    const d = sound.channels[0], rate = sound.sampleRate;
    assert.ok(d.length / rate < reloadSeconds, 'The ready cue ends before firing is enabled');
    assert.ok(rms(d, 0, Math.round(rate * 0.1)) > 0.035, 'The capacitor latch is audible');
    assert.ok(rms(d, Math.round(rate * 0.8), Math.round(rate * 1.05)) > 0.025, 'Reload includes a sustained rising precharge');
    assert.ok(rms(d, d.length - Math.round(rate * 0.025)) < 0.001, 'No abrupt cut at the end of a reload');
  }
  assert.notDeepEqual(rail.channels[0].subarray(0, 2400), arc.channels[0].subarray(0, 2400));
});

test('Web Audio schedules every weapon with finite gains and reuses clips while completed voices disconnect', () => {
  const sources: Array<ReturnType<typeof sourceNode>> = [], parameters: number[] = [];
  const valid = (value: number) => { assert.ok(Number.isFinite(value), 'Scheduled mixer values must be finite'); parameters.push(value); };
  const parameter = () => {
    let value = 0;
    return {
      get value() { return value; }, set value(next: number) { valid(next); value = next; },
      cancelScheduledValues(at: number) { valid(at); },
      setValueAtTime(next: number, at: number) { valid(next); valid(at); value = next; },
      setTargetAtTime(next: number, at: number, tau: number) { valid(next); valid(at); valid(tau); value = next; },
      linearRampToValueAtTime(next: number, at: number) { valid(next); valid(at); value = next; },
      exponentialRampToValueAtTime(next: number, at: number) { valid(next); valid(at); value = next; },
    };
  };
  function node() { return { disconnected: false, connect(_to: unknown) {}, disconnect() { this.disconnected = true; } }; }
  function sourceNode() {
    return { ...node(), buffer: undefined as undefined | { duration: number; getChannelData(channel: number): Float32Array }, playbackRate: parameter(), onended: undefined as undefined | (() => void),
      start(at = 0, offset = 0) { valid(at); valid(offset); assert.ok(this.buffer, 'A weapon source must have a rendered sample'); }, stop(at = 0) { valid(at); } };
  }
  class AudioHarness {
    sampleRate = 24000; currentTime = 0; state = 'running'; destination = node();
    resume() { return Promise.resolve(); }
    createGain() { return { ...node(), gain: parameter() }; }
    createDynamicsCompressor() { return { ...node(), threshold: parameter(), knee: parameter(), ratio: parameter(), attack: parameter(), release: parameter() }; }
    createBuffer(channels: number, length: number, rate: number) {
      assert.ok(length > 0 && length <= Math.ceil(MUSIC_SECONDS * rate));
      const data = Array.from({ length: channels }, () => new Float32Array(length));
      return { duration: length / rate, getChannelData(channel: number) { return data[channel]; } };
    }
    createBufferSource() { const source = sourceNode(); sources.push(source); return source; }
    createOscillator() { return { ...node(), frequency: parameter(), type: 'sine', start(at: number) { valid(at); }, stop(at: number) { valid(at); } }; }
    createBiquadFilter() { return { ...node(), frequency: parameter(), Q: parameter(), type: 'lowpass' }; }
  }
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { AudioContext: AudioHarness } });
  try {
    const audio = new AudioSystem(); audio.unlock();
    audio.handle(WEAPON_IDS.map(weapon => ({ type: 'shot' as const, weapon })));
    assert.equal(sources.length, 6, 'A sound buffer exists for each unlocked weapon');
    const firstPass = sources.slice(), clips = firstPass.map(source => source.buffer);
    assert.equal(new Set(clips).size, 6, 'Each weapon has its own instrument');
    for (let repeat = 0; repeat < 5; repeat++) audio.handle(WEAPON_IDS.map(weapon => ({ type: 'shot' as const, weapon })));
    for (let i = 6; i < sources.length; i++) assert.equal(sources[i].buffer, clips[i % 6], 'Shots reuse PCM instead of regenerating it');
    audio.handle([{ type: 'reload', weapon: 'railgun' }, { type: 'reload', weapon: 'arc' }]);
    assert.equal(sources.length, 38, 'Both capacitor reloads are ready to play');
    assert.ok(sources.at(-2)!.buffer!.duration < 1.9);
    assert.ok(sources.at(-1)!.buffer!.duration < 1.6);
    for (const source of sources) {
      assert.ok(source.onended, 'Every temporary voice releases its nodes');
      source.onended!(); assert.equal(source.disconnected, true);
    }
    assert.ok(parameters.length > 50, 'Real mixer and voice scheduling paths were exercised');
  } finally {
    if (previousWindow) Object.defineProperty(globalThis, 'window', previousWindow);
    else Reflect.deleteProperty(globalThis, 'window');
  }
});

test('shotgun has more low body and longer decay than machine gun; plasma has its own waveform', () => {
  const shotgun = renderWeaponSound('shotgun'), machine = renderWeaponSound('machinegun'), plasma = renderWeaponSound('plasma');
  assert.ok(shotgun.channels[0].length > machine.channels[0].length * 2);
  const tailStart = Math.round(0.18 * shotgun.sampleRate), tailEnd = Math.round(0.27 * shotgun.sampleRate);
  assert.ok(rms(shotgun.channels[0], tailStart, tailEnd) > rms(machine.channels[0], tailStart, tailEnd) * 2);
  let difference = 0;
  for (let i = 0; i < 2400; i++) difference += Math.abs(plasma.channels[0][i] - machine.channels[0][i]);
  assert.ok(difference / 2400 > 0.1, 'Energy weapon must not be a renamed bullet sample');
});

test('score stems stay phase aligned, have full musical energy and close cleanly', () => {
  const score = renderScore();
  assert.equal(score.district.channels[0].length, score.combat.channels[0].length);
  assert.ok(Math.abs(score.district.channels[0].length / score.district.sampleRate - MUSIC_SECONDS) < 1 / score.district.sampleRate);
  for (const stem of [score.district, score.combat]) {
    finiteBounded(stem);
    assert.ok(rms(stem.channels[0]) > 0.065, 'Soundtrack is a full arrangement rather than scattered beeps');
    for (const channel of stem.channels) assert.ok(Math.abs(channel[0] - channel[channel.length - 1]) < 0.0001, 'Loop seam must not click');
  }
  let stereoDifference = 0;
  for (let i = 0; i < score.district.channels[0].length; i++) stereoDifference += Math.abs(score.district.channels[0][i] - score.district.channels[1][i]);
  assert.ok(stereoDifference / score.district.channels[0].length > 0.02, 'Pads, lead delays and percussion occupy stereo space');
});
