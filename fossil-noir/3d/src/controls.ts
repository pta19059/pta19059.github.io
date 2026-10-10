export type ControlMode = 'desktop' | 'touch';
export type ControlPreference = 'auto' | ControlMode;
export interface ControlSignals {
  userAgent: string;
  platform: string;
  maxTouchPoints: number;
  mobileHint?: boolean;
  coarsePointer: boolean;
}

/** Screen size and touch support alone cannot identify a phone: a Windows
 * laptop may have both a touchscreen and a full keyboard/mouse. */
export function detectControlMode(signals: ControlSignals): ControlMode {
  const mobileAgent = /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(signals.userAgent);
  const desktopAgentIPad = signals.platform === 'MacIntel' && signals.maxTouchPoints > 1;
  return signals.mobileHint === true || mobileAgent || desktopAgentIPad || signals.coarsePointer ? 'touch' : 'desktop';
}

const PREFERENCE_KEY = 'fossil-noir-3d-controls';
const GAME_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'KeyC', 'KeyE', 'KeyR', 'KeyQ', 'KeyP', 'Escape', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6']);

export class Controls {
  mode: ControlMode;
  preference: ControlPreference = 'auto';
  private listeners = new Set<(mode: ControlMode) => void>();
  private coarse: MediaQueryList;

  constructor() {
    this.coarse = matchMedia('(pointer: coarse)');
    try {
      const saved = localStorage.getItem(PREFERENCE_KEY);
      if (saved === 'desktop' || saved === 'touch') this.preference = saved;
    } catch { /* Control preferences remain available for this session. */ }
    this.mode = this.preference === 'auto' ? this.detect() : this.preference;
    document.body.dataset.controls = this.mode;
    const changed = () => { if (this.preference === 'auto') this.apply(this.detect()); };
    if (typeof this.coarse.addEventListener === 'function') this.coarse.addEventListener('change', changed);
    else this.coarse.addListener(changed);
    // Capture runs before the game handlers, so the first actual input works
    // immediately after an automatic mode change.
    document.addEventListener('pointerdown', (event) => this.observePointer(event), { capture: true, passive: true });
    document.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'mouse' && event.buttons === 0) this.observePointer(event);
    }, { capture: true, passive: true });
    document.addEventListener('keydown', (event) => {
      if (this.preference !== 'auto' || !GAME_KEYS.has(event.code)) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || target.matches('input,select,textarea'))) return;
      this.apply('desktop');
    }, { capture: true });
  }

  setPreference(preference: ControlPreference): void {
    if (preference !== 'auto' && preference !== 'desktop' && preference !== 'touch') return;
    this.preference = preference;
    try { localStorage.setItem(PREFERENCE_KEY, preference); } catch { /* Optional persistence. */ }
    this.apply(preference === 'auto' ? this.detect() : preference);
  }

  subscribe(listener: (mode: ControlMode) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private detect(): ControlMode {
    const browser = navigator as Navigator & { userAgentData?: { mobile?: boolean } };
    return detectControlMode({ userAgent: browser.userAgent, platform: browser.platform, maxTouchPoints: browser.maxTouchPoints ?? 0, mobileHint: browser.userAgentData?.mobile, coarsePointer: this.coarse.matches });
  }

  private observePointer(event: PointerEvent): void {
    if (this.preference !== 'auto') return;
    // Browsers may synthesize mouse events from a touchscreen tap. They must
    // not immediately undo the touch mode selected by that same interaction.
    const capabilities = (event as PointerEvent & { sourceCapabilities?: { firesTouchEvents?: boolean } }).sourceCapabilities;
    if (event.pointerType === 'touch' || event.pointerType === 'pen') this.apply('touch');
    else if (event.pointerType === 'mouse' && !capabilities?.firesTouchEvents) this.apply('desktop');
  }

  private apply(mode: ControlMode): void {
    document.body.dataset.controls = mode;
    if (this.mode === mode) return;
    this.mode = mode;
    for (const listener of this.listeners) listener(mode);
  }
}
