import assert from 'node:assert/strict';
import test from 'node:test';
import { renderScore, renderWeaponSound, MUSIC_SECONDS } from '../src/audio-synthesis';
import type { SynthClip } from '../src/audio-synthesis';

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

test('all four weapons have a strong transient, an audible body and a decaying tail', () => {
  for (const weapon of ['revolver', 'shotgun', 'plasma', 'machinegun'] as const) {
    const sound = renderWeaponSound(weapon); finiteBounded(sound);
    const d = sound.channels[0], rate = sound.sampleRate;
    const body = rms(d, 0, Math.round(rate * 0.1));
    assert.ok(body > 0.18, weapon + ' must sound substantial');
    assert.ok(rms(d, Math.round(rate * 0.025), Math.round(rate * 0.07)) > 0.07);
    assert.ok(rms(d, d.length - Math.round(rate * 0.025)) < body * 0.05);
    assert.equal(sound.channels.length, 2);
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
