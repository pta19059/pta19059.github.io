import { EMPTY_INPUT, type InputFrame } from './types';

/** Keyboard/mouse and equivalent touch input. Angles returned in radians. */
export class Input {
  enabled = false;
  sensitivity = 1;
  private keys = new Set<string>();
  private pending: Partial<InputFrame> = {};
  private mouseX = 0;
  private mouseY = 0;
  private mouseFire = false;
  private wasLocked = false;
  private releasing = false;
  private touchMove = { x: 0, y: 0 };
  private touchFire = false;
  private touchSprint = false;
  private stick: HTMLElement | null = null;
  private stickPointer = -1;
  private lookPointer = -1;
  private stickOrigin = { x: 0, y: 0 };
  private lastLook = { x: 0, y: 0 };

  constructor(private canvas: HTMLCanvasElement, private onPause: () => void) {
    document.addEventListener('keydown', (event) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
      if (!this.enabled) return;
      if (['Escape', 'KeyP'].includes(event.code)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!event.repeat) this.onPause();
        return;
      }
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
      if (this.enabled && document.pointerLockElement === this.canvas) {
        this.mouseX += event.movementX;
        this.mouseY += event.movementY;
      }
    });
    this.canvas.addEventListener('pointerdown', (event) => {
      if (!this.enabled || event.pointerType === 'touch') return;
      if (event.button === 0) {
        this.mouseFire = true;
        this.pending.fire = true;
        this.capture();
      }
    });
    document.addEventListener('mouseup', (event) => { if (event.button === 0) this.mouseFire = false; });
    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === this.canvas;
      const lost = this.wasLocked && !locked;
      this.wasLocked = locked;
      if (!locked) {
        this.clear();
        if (lost && this.enabled && !this.releasing) this.onPause();
        this.releasing = false;
      }
    });
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    this.canvas.addEventListener('wheel', (event) => {
      if (!this.enabled) return;
      event.preventDefault();
      this.pending.weaponDelta = (this.pending.weaponDelta ?? 0) + Math.sign(event.deltaY);
    }, { passive: false });
    window.addEventListener('blur', () => {
      this.clear();
      if (this.enabled) this.onPause();
    });
    this.installTouch();
  }

  read(): InputFrame {
    const key = (...codes: string[]) => codes.some((code) => this.keys.has(code));
    const result: InputFrame = this.enabled ? {
      forward: Math.max(-1, Math.min(1, Number(key('KeyW', 'ArrowUp')) - Number(key('KeyS', 'ArrowDown')) - this.touchMove.y)),
      strafe: Math.max(-1, Math.min(1, Number(key('KeyD')) - Number(key('KeyA')) + this.touchMove.x)),
      lookX: -this.mouseX * 0.0024 * this.sensitivity + (Number(key('ArrowLeft')) - Number(key('ArrowRight'))) * 0.035,
      lookY: -this.mouseY * 0.0024 * this.sensitivity,
      fire: this.mouseFire || this.touchFire || Boolean(this.pending.fire),
      sprint: key('ShiftLeft', 'ShiftRight') || this.touchSprint,
      crouch: key('ControlLeft', 'ControlRight', 'KeyC'),
      jump: Boolean(this.pending.jump),
      interact: Boolean(this.pending.interact),
      reload: Boolean(this.pending.reload),
      weaponDelta: this.pending.weaponDelta ?? 0,
      weaponSlot: this.pending.weaponSlot ?? 0,
      slow: key('KeyQ'),
    } : { ...EMPTY_INPUT };
    this.mouseX = 0;
    this.mouseY = 0;
    this.pending = {};
    return result;
  }

  capture(): void {
    if (!this.enabled || matchMedia('(pointer: coarse)').matches || document.pointerLockElement === this.canvas) return;
    this.releasing = false;
    this.canvas.focus({ preventScroll: true });
    try {
      const request = this.canvas.requestPointerLock?.();
      if (request && typeof (request as Promise<void>).catch === 'function') (request as Promise<void>).catch(() => {});
    } catch { /* Pointer Lock can be denied; another click can retry. */ }
  }

  release(): void {
    this.releasing = true;
    this.clear();
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    else this.releasing = false;
  }

  clear(): void {
    this.keys.clear();
    this.pending = {};
    this.mouseX = this.mouseY = 0;
    this.mouseFire = this.touchFire = this.touchSprint = false;
    this.touchMove = { x: 0, y: 0 };
    this.stickPointer = this.lookPointer = -1;
    if (this.stick) this.stick.style.transform = '';
  }

  private installTouch(): void {
    const root = document.querySelector<HTMLElement>('#touch-controls');
    if (!root) return;
    root.innerHTML = `<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>`;
    const zone = root.querySelector<HTMLElement>('.touch-stick')!;
    this.stick = zone.querySelector('i');
    zone.addEventListener('pointerdown', (event) => {
      if (!this.enabled || this.stickPointer >= 0) return;
      event.preventDefault();
      this.stickPointer = event.pointerId;
      this.stickOrigin = { x: event.clientX, y: event.clientY };
      zone.setPointerCapture(event.pointerId);
    });
    zone.addEventListener('pointermove', (event) => {
      if (!this.enabled || event.pointerId !== this.stickPointer) return;
      const dx = event.clientX - this.stickOrigin.x, dy = event.clientY - this.stickOrigin.y;
      const distance = Math.hypot(dx, dy), radius = 38;
      const scale = distance > radius ? radius / distance : 1;
      this.touchMove = { x: dx * scale / radius, y: dy * scale / radius };
      if (this.stick) this.stick.style.transform = `translate(${dx * scale}px,${dy * scale}px)`;
    });
    const releaseStick = (event: PointerEvent) => {
      if (event.pointerId !== this.stickPointer) return;
      this.touchMove = { x: 0, y: 0 };
      this.stickPointer = -1;
      if (this.stick) this.stick.style.transform = '';
    };
    zone.addEventListener('pointerup', releaseStick);
    zone.addEventListener('pointercancel', releaseStick);
    const look = root.querySelector<HTMLElement>('.touch-look')!;
    look.addEventListener('pointerdown', (event) => {
      if (!this.enabled || this.lookPointer >= 0) return;
      this.lookPointer = event.pointerId;
      this.lastLook = { x: event.clientX, y: event.clientY };
      look.setPointerCapture(event.pointerId);
    });
    look.addEventListener('pointermove', (event) => {
      if (!this.enabled || event.pointerId !== this.lookPointer) return;
      this.mouseX += (event.clientX - this.lastLook.x) * 1.6;
      this.mouseY += (event.clientY - this.lastLook.y) * 1.6;
      this.lastLook = { x: event.clientX, y: event.clientY };
    });
    const releaseLook = (event: PointerEvent) => { if (event.pointerId === this.lookPointer) this.lookPointer = -1; };
    look.addEventListener('pointerup', releaseLook);
    look.addEventListener('pointercancel', releaseLook);
    root.querySelectorAll<HTMLButtonElement>('button').forEach((button) => {
      button.addEventListener('pointerdown', (event) => {
        if (!this.enabled) return;
        event.preventDefault();
        button.setPointerCapture(event.pointerId);
        button.classList.add('held');
        switch (button.dataset.action) {
          case 'fire': this.touchFire = true; this.pending.fire = true; break;
          case 'sprint': this.touchSprint = true; break;
          case 'interact': this.pending.interact = true; break;
          case 'jump': this.pending.jump = true; break;
          case 'reload': this.pending.reload = true; break;
          case 'weapon': this.pending.weaponDelta = 1; break;
          case 'pause': this.onPause(); break;
        }
      });
      const release = () => {
        button.classList.remove('held');
        if (button.dataset.action === 'fire') this.touchFire = false;
        if (button.dataset.action === 'sprint') this.touchSprint = false;
      };
      button.addEventListener('pointerup', release);
      button.addEventListener('pointercancel', release);
    });
  }
}
