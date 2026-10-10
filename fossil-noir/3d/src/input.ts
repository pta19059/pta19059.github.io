import { EMPTY_INPUT, type InputFrame } from './types';
import { Controls } from './controls';

/** Keyboard/mouse and equivalent simultaneous touch input. Angles are radians. */
export class Input {
  enabled = false;
  sensitivity = 1;
  private keys = new Set<string>();
  private pending: Partial<InputFrame> = {};
  private mouseX = 0;
  private mouseY = 0;
  private mouseFire = false;
  private mousePointer = -1;
  private wasLocked = false;
  private releasing = false;
  private touchMove = { x: 0, y: 0 };
  private touchFire = false;
  private touchSprint = false;
  private touchCrouch = false;
  private touchFocus = false;
  private stick: HTMLElement | null = null;
  private stickPointer = -1;
  private lookPointer = -1;
  private stickOrigin = { x: 0, y: 0 };
  private stickRadius = 38;
  private lastLook = { x: 0, y: 0 };
  private lastFireLook = { x: 0, y: 0 };
  private captures = new Map<number, HTMLElement>();
  private buttons = new Map<HTMLButtonElement, number>();

  constructor(private canvas: HTMLCanvasElement, private onPause: () => void, private controls: Controls = new Controls()) {
    document.addEventListener('keydown', (event) => {
      if (event.target instanceof HTMLElement && (event.target.isContentEditable || event.target.matches('input,select,textarea'))) return;
      if (!this.enabled) return;
      if (['Escape', 'KeyP'].includes(event.code)) {
        event.preventDefault(); event.stopImmediatePropagation();
        if (!event.repeat) this.onPause();
        return;
      }
      if (this.controls.mode !== 'desktop') return;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ControlLeft', 'ControlRight', 'Tab'].includes(event.code)) event.preventDefault();
      this.keys.add(event.code);
      if (!event.repeat) {
        if (event.code === 'Space') this.pending.jump = true;
        if (event.code === 'KeyE') this.pending.interact = true;
        if (event.code === 'KeyR') this.pending.reload = true;
        if (/^Digit[1-6]$/.test(event.code)) this.pending.weaponSlot = Number(event.code.slice(-1));
      }
    });
    document.addEventListener('keyup', (event) => this.keys.delete(event.code));
    document.addEventListener('mousemove', (event) => {
      if (this.enabled && this.controls.mode === 'desktop' && document.pointerLockElement === this.canvas) {
        this.mouseX += event.movementX; this.mouseY += event.movementY;
      }
    });
    this.canvas.addEventListener('pointerdown', (event) => {
      if (!this.enabled || this.controls.mode !== 'desktop' || event.pointerType === 'touch' || event.pointerType === 'pen') return;
      if (event.button === 0) {
        this.mouseFire = true; this.mousePointer = event.pointerId; this.pending.fire = true; this.capture();
      }
    });
    const endMouse = (event: PointerEvent) => { if (event.pointerId === this.mousePointer) { this.mouseFire = false; this.mousePointer = -1; } };
    document.addEventListener('pointerup', endMouse);
    document.addEventListener('pointercancel', endMouse);
    document.addEventListener('mouseup', (event) => { if (event.button === 0) { this.mouseFire = false; this.mousePointer = -1; } });
    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === this.canvas;
      const lost = this.wasLocked && !locked;
      this.wasLocked = locked;
      if (!locked) {
        const deliberate = this.releasing;
        this.releasing = false;
        // release() already cleared the previous mode. An asynchronous lock
        // event must not erase the new touch gesture that selected that mode.
        if (!deliberate) this.clear();
        if (lost && this.enabled && !deliberate && this.controls.mode === 'desktop') this.onPause();
      }
    });
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    this.canvas.addEventListener('wheel', (event) => {
      if (!this.enabled || this.controls.mode !== 'desktop') return;
      event.preventDefault(); this.pending.weaponDelta = (this.pending.weaponDelta ?? 0) + Math.sign(event.deltaY);
    }, { passive: false });
    window.addEventListener('blur', () => { this.clear(); if (this.enabled) this.onPause(); });
    this.controls.subscribe(() => this.release());
    this.installTouch();
  }

  read(): InputFrame {
    const desktop = this.controls.mode === 'desktop';
    const key = (...codes: string[]) => desktop && codes.some((code) => this.keys.has(code));
    const autoRun = !desktop && Math.hypot(this.touchMove.x, this.touchMove.y) >= .88;
    const result: InputFrame = this.enabled ? {
      forward: Math.max(-1, Math.min(1, Number(key('KeyW', 'ArrowUp')) - Number(key('KeyS', 'ArrowDown')) - this.touchMove.y)),
      strafe: Math.max(-1, Math.min(1, Number(key('KeyD')) - Number(key('KeyA')) + this.touchMove.x)),
      lookX: -this.mouseX * .0024 * this.sensitivity + (Number(key('ArrowLeft')) - Number(key('ArrowRight'))) * .035,
      lookY: -this.mouseY * .0024 * this.sensitivity,
      fire: this.mouseFire || this.touchFire || Boolean(this.pending.fire),
      sprint: key('ShiftLeft', 'ShiftRight') || this.touchSprint || autoRun,
      crouch: key('ControlLeft', 'ControlRight', 'KeyC') || this.touchCrouch,
      jump: Boolean(this.pending.jump), interact: Boolean(this.pending.interact), reload: Boolean(this.pending.reload),
      weaponDelta: this.pending.weaponDelta ?? 0, weaponSlot: this.pending.weaponSlot ?? 0,
      slow: key('KeyQ') || this.touchFocus,
    } : { ...EMPTY_INPUT };
    this.mouseX = 0; this.mouseY = 0; this.pending = {};
    return result;
  }

  capture(): void {
    if (!this.enabled || this.controls.mode !== 'desktop' || document.pointerLockElement === this.canvas) return;
    this.releasing = false; this.canvas.focus({ preventScroll: true });
    try {
      const request = this.canvas.requestPointerLock?.();
      if (request && typeof (request as Promise<void>).catch === 'function') (request as Promise<void>).catch(() => {});
    } catch { /* A subsequent click can retry a denied mouse capture. */ }
  }

  release(): void {
    this.releasing = true; this.clear();
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    else this.releasing = false;
  }

  clear(): void {
    this.keys.clear(); this.pending = {}; this.mouseX = this.mouseY = 0;
    this.mouseFire = this.touchFire = this.touchSprint = this.touchCrouch = this.touchFocus = false;
    this.mousePointer = this.stickPointer = this.lookPointer = -1;
    this.touchMove = { x: 0, y: 0 }; this.lastLook = this.lastFireLook = { x: 0, y: 0 };
    const captures = [...this.captures]; this.captures.clear();
    for (const button of this.buttons.keys()) button.classList.remove('held');
    this.buttons.clear();
    if (this.stick) this.stick.style.transform = '';
    for (const [id, element] of captures) this.releaseCapture(element, id);
  }

  private capturePointer(element: HTMLElement, event: PointerEvent): void {
    this.captures.set(event.pointerId, element);
    try { element.setPointerCapture(event.pointerId); } catch { /* Synthetic/browser-denied capture still has up/cancel handlers. */ }
  }

  private releaseCapture(element: HTMLElement, id: number): void {
    try { if (element.hasPointerCapture(id)) element.releasePointerCapture(id); } catch { /* Already released by the browser. */ }
  }

  private touchEnabled(): boolean { return this.enabled && this.controls.mode === 'touch'; }

  private aim(dx: number, dy: number): void { this.mouseX += dx * 1.6; this.mouseY += dy * 1.6; }

  private installTouch(): void {
    const root = document.querySelector<HTMLElement>('#touch-controls');
    if (!root) return;
    root.innerHTML = `<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick: push fully to run"><i></i><span>MOVE / RUN</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Hold to fire and drag to aim">FIRE</button><button data-action="interact" aria-label="Use a door, switch or rideable dinosaur">USE</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload current weapon">RELOAD</button><button data-action="weapon" aria-label="Switch to next owned weapon">GUN</button><button data-action="sprint" aria-label="Hold to run">RUN</button><button data-action="crouch" aria-label="Hold to crouch">CROUCH</button><button data-action="slow" aria-label="Hold for bullet time">FOCUS</button></div><button class="touch-pause" data-action="pause" aria-label="Pause mission">Ⅱ</button>`;
    const zone = root.querySelector<HTMLElement>('.touch-stick')!;
    this.stick = zone.querySelector('i');
    const moveStick = (event: PointerEvent) => {
      if (!this.touchEnabled() || event.pointerId !== this.stickPointer) return;
      const dx = event.clientX - this.stickOrigin.x, dy = event.clientY - this.stickOrigin.y;
      const distance = Math.hypot(dx, dy), scale = distance > this.stickRadius ? this.stickRadius / distance : 1;
      this.touchMove = { x: dx * scale / this.stickRadius, y: dy * scale / this.stickRadius };
      if (this.stick) this.stick.style.transform = `translate(${dx * scale}px,${dy * scale}px)`;
    };
    zone.addEventListener('pointerdown', (event) => {
      if (!this.touchEnabled() || this.stickPointer >= 0) return;
      event.preventDefault(); event.stopPropagation();
      this.stickPointer = event.pointerId;
      const rect = zone.getBoundingClientRect();
      this.stickOrigin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      this.stickRadius = Math.max(20, Math.min(rect.width, rect.height) * .35);
      this.capturePointer(zone, event); moveStick(event);
    });
    zone.addEventListener('pointermove', moveStick);
    const releaseStick = (event: PointerEvent) => {
      if (event.pointerId !== this.stickPointer) return;
      this.touchMove = { x: 0, y: 0 }; this.stickPointer = -1;
      this.captures.delete(event.pointerId); this.releaseCapture(zone, event.pointerId);
      if (this.stick) this.stick.style.transform = '';
    };
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) zone.addEventListener(name, releaseStick as EventListener);
    const look = root.querySelector<HTMLElement>('.touch-look')!;
    look.addEventListener('pointerdown', (event) => {
      if (!this.touchEnabled() || this.lookPointer >= 0) return;
      event.preventDefault(); event.stopPropagation(); this.lookPointer = event.pointerId;
      this.lastLook = { x: event.clientX, y: event.clientY }; this.capturePointer(look, event);
    });
    look.addEventListener('pointermove', (event) => {
      if (!this.touchEnabled() || event.pointerId !== this.lookPointer) return;
      this.aim(event.clientX - this.lastLook.x, event.clientY - this.lastLook.y);
      this.lastLook = { x: event.clientX, y: event.clientY };
    });
    const releaseLook = (event: PointerEvent) => {
      if (event.pointerId !== this.lookPointer) return;
      this.lookPointer = -1; this.captures.delete(event.pointerId); this.releaseCapture(look, event.pointerId);
    };
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) look.addEventListener(name, releaseLook as EventListener);
    root.querySelectorAll<HTMLButtonElement>('button').forEach((button) => {
      button.addEventListener('pointerdown', (event) => {
        if (!this.touchEnabled() || this.buttons.has(button)) return;
        event.preventDefault(); event.stopPropagation();
        this.buttons.set(button, event.pointerId); this.capturePointer(button, event); button.classList.add('held');
        switch (button.dataset.action) {
          case 'fire': this.touchFire = true; this.pending.fire = true; this.lastFireLook = { x: event.clientX, y: event.clientY }; break;
          case 'sprint': this.touchSprint = true; break;
          case 'crouch': this.touchCrouch = true; break;
          case 'slow': this.touchFocus = true; break;
          case 'interact': this.pending.interact = true; break;
          case 'jump': this.pending.jump = true; break;
          case 'reload': this.pending.reload = true; break;
          case 'weapon': this.pending.weaponDelta = (this.pending.weaponDelta ?? 0) + 1; break;
          case 'pause': this.onPause(); break;
        }
      });
      button.addEventListener('pointermove', (event) => {
        if (!this.touchEnabled() || button.dataset.action !== 'fire' || this.buttons.get(button) !== event.pointerId) return;
        this.aim(event.clientX - this.lastFireLook.x, event.clientY - this.lastFireLook.y);
        this.lastFireLook = { x: event.clientX, y: event.clientY };
      });
      const release = (event: PointerEvent) => {
        if (this.buttons.get(button) !== event.pointerId) return;
        this.buttons.delete(button); button.classList.remove('held');
        this.captures.delete(event.pointerId); this.releaseCapture(button, event.pointerId);
        switch (button.dataset.action) {
          case 'fire': this.touchFire = false; if (event.type !== 'pointerup') this.pending.fire = false; break;
          case 'sprint': this.touchSprint = false; break;
          case 'crouch': this.touchCrouch = false; break;
          case 'slow': this.touchFocus = false; break;
        }
      };
      for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(name, release as EventListener);
    });
    // A capture can be denied or absent in synthetic/browser edge cases. Global
    // releases still end the correct finger, without clearing the other ones.
    const releaseAnywhere = (event: PointerEvent) => {
      releaseStick(event); releaseLook(event);
      for (const [button, id] of this.buttons) if (id === event.pointerId) button.dispatchEvent(new PointerEvent(event.type, { pointerId: id, pointerType: event.pointerType }));
    };
    document.addEventListener('pointerup', releaseAnywhere);
    document.addEventListener('pointercancel', releaseAnywhere);
  }
}
