import assert from 'node:assert/strict';
import test from 'node:test';
import { Controls, detectControlMode, type ControlSignals } from '../src/controls';

const desktop: ControlSignals = { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/143', platform: 'Win32', maxTouchPoints: 0, coarsePointer: false };

test('phones are detected by mobile agent or browser client hint', () => {
  assert.equal(detectControlMode({ ...desktop, userAgent: 'Mozilla/5.0 (Linux; Android 16; SM-S926B) Chrome/143 Mobile', maxTouchPoints: 5 }), 'touch');
  assert.equal(detectControlMode({ ...desktop, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)', platform: 'iPhone' }), 'touch');
  assert.equal(detectControlMode({ ...desktop, mobileHint: true }), 'touch');
});

test('iPadOS requesting a desktop site still uses touch controls', () => {
  assert.equal(detectControlMode({ ...desktop, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) Safari/605', platform: 'MacIntel', maxTouchPoints: 5 }), 'touch');
  assert.equal(detectControlMode({ ...desktop, platform: 'MacIntel', maxTouchPoints: 0 }), 'desktop');
});

test('touch support alone does not turn a keyboard and mouse laptop into a phone', () => {
  assert.equal(detectControlMode({ ...desktop, maxTouchPoints: 10 }), 'desktop');
  assert.equal(detectControlMode({ ...desktop, maxTouchPoints: 10, mobileHint: false }), 'desktop');
  assert.equal(detectControlMode({ ...desktop, coarsePointer: true }), 'touch');
});

test('a narrow desktop window keeps desktop controls and a wide tablet keeps touch controls', () => {
  assert.equal(detectControlMode({ ...desktop, viewportWidth: 390 } as ControlSignals), 'desktop');
  assert.equal(detectControlMode({ ...desktop, userAgent: 'Mozilla/5.0 (Linux; Android 15; Tablet)', viewportWidth: 1600 } as ControlSignals), 'touch');
});

function withBrowser(run: (browser: { document: EventTarget & { body: { dataset: Record<string, string> } }; coarse: EventTarget & { matches: boolean }; values: Map<string, string> }) => void) {
  const previous = new Map<string, PropertyDescriptor | undefined>();
  const document = Object.assign(new EventTarget(), { body: { dataset: {} as Record<string, string> } });
  const coarse = Object.assign(new EventTarget(), { matches: false });
  const values = new Map<string, string>();
  class Element { isContentEditable = false; matches() { return false; } }
  const replacements = { document, navigator: { userAgent: desktop.userAgent, platform: desktop.platform, maxTouchPoints: 10 }, matchMedia: () => coarse, localStorage: { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value) }, HTMLElement: Element };
  for (const [key, value] of Object.entries(replacements)) {
    previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
  }
  try { run({ document, coarse, values }); }
  finally { for (const [key, descriptor] of previous) { if (descriptor) Object.defineProperty(globalThis, key, descriptor); else Reflect.deleteProperty(globalThis, key); } }
}
const event = (name: string, fields: Record<string, unknown>) => Object.assign(new Event(name), fields);

test('automatic controls follow actual touch, game keys, mouse and primary-pointer changes', () => withBrowser(({ document, coarse }) => {
  const controls = new Controls();
  assert.equal(controls.mode, 'desktop');
  const changes: string[] = [];
  const unsubscribe = controls.subscribe((mode) => changes.push(mode));
  document.dispatchEvent(event('pointerdown', { pointerType: 'touch' }));
  assert.equal(controls.mode, 'touch');
  assert.equal(document.body.dataset.controls, 'touch');
  document.dispatchEvent(event('pointermove', { pointerType: 'mouse', buttons: 0, sourceCapabilities: { firesTouchEvents: true } }));
  assert.equal(controls.mode, 'touch', 'A compatibility mouse event cannot undo its touch gesture.');
  document.dispatchEvent(event('keydown', { code: 'KeyW' }));
  assert.equal(controls.mode, 'desktop');
  document.dispatchEvent(event('pointerdown', { pointerType: 'pen' }));
  assert.equal(controls.mode, 'touch');
  document.dispatchEvent(event('pointermove', { pointerType: 'mouse', buttons: 0 }));
  assert.equal(controls.mode, 'touch');
  document.dispatchEvent(event('pointerdown', { pointerType: 'mouse', buttons: 1 }));
  assert.equal(controls.mode, 'desktop');
  coarse.matches = true; coarse.dispatchEvent(new Event('change'));
  assert.equal(controls.mode, 'touch');
  assert.deepEqual(changes, ['touch', 'desktop', 'touch', 'desktop', 'touch']);
  unsubscribe(); controls.setPreference('desktop'); assert.equal(changes.length, 5);
}));

test('uncaptured mouse motion after touch and Pointer Lock release preserves touch controls', () => withBrowser(({ document }) => {
  const controls = new Controls();
  document.dispatchEvent(event('pointerdown', { pointerType: 'touch', pointerId: 4 }));
  document.dispatchEvent(event('pointerlockchange', {}));
  document.dispatchEvent(event('pointermove', { pointerType: 'mouse', buttons: 0 }));
  document.dispatchEvent(event('pointerup', { pointerType: 'touch', pointerId: 4 }));
  document.dispatchEvent(event('pointermove', { pointerType: 'mouse', buttons: 0 }));
  assert.equal(controls.mode, 'touch');
  assert.equal(document.body.dataset.controls, 'touch');
  document.dispatchEvent(event('pointerdown', { pointerType: 'mouse', buttons: 1 }));
  assert.equal(controls.mode, 'desktop', 'A deliberate mouse click still changes mode immediately.');
}));

test('explicit preferences persist and remain fixed until Auto is selected', () => withBrowser(({ document, coarse, values }) => {
  const controls = new Controls();
  controls.setPreference('desktop');
  document.dispatchEvent(event('pointerdown', { pointerType: 'touch' }));
  coarse.matches = true; coarse.dispatchEvent(new Event('change'));
  assert.equal(controls.mode, 'desktop');
  assert.equal(values.get('fossil-noir-3d-controls'), 'desktop');
  controls.setPreference('touch');
  document.dispatchEvent(event('keydown', { code: 'KeyW' }));
  document.dispatchEvent(event('pointerdown', { pointerType: 'mouse' }));
  assert.equal(controls.mode, 'touch');
  assert.equal(document.body.dataset.controls, 'touch');
  controls.setPreference('auto');
  assert.equal(controls.preference, 'auto');
  assert.equal(controls.mode, 'touch');
  coarse.matches = false; coarse.dispatchEvent(new Event('change'));
  assert.equal(controls.mode, 'desktop');
}));

test('stored explicit controls are restored before input is initialized', () => withBrowser(({ values, document }) => {
  values.set('fossil-noir-3d-controls', 'touch');
  const controls = new Controls();
  assert.equal(controls.preference, 'touch');
  assert.equal(controls.mode, 'touch');
  assert.equal(document.body.dataset.controls, 'touch');
}));
