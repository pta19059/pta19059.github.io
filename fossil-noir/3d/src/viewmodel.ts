import type {GameState, WeaponId} from './types';
import {WEAPON_IDS} from './arsenal';

/** Original 320×200 pixel-painted sprites with cached firing and mechanical animation. */
type Point = readonly [number, number];
const PIXEL_STEEL=['#0e1114','#24282c','#3d454a','#59636a','#7c8b90','#a6b5b7','#c7d1c9','#e2e4d5'];
const PIXEL_BLUE=['#0c1419','#202d37','#3a4a55','#566a73','#768b91','#9eafb0','#c2cfc8','#e2e8d9'];
const STEEL = ['#151b20','#2d3b43','#465761','#687b84','#96a7ad','#ced5ce'];
type SmokeParticle = {age:number;life:number;x:number;y:number;vx:number;vy:number;size:number;variant:number;green:boolean;tint?:'railgun'|'arc'};
type CasingParticle = {age:number;weapon:string;x:number;y:number;vx:number;vy:number;spin:number};
const MUZZLES:Record<string,Point>={revolver:[159,128],shotgun:[158,130],plasma:[158,128],machinegun:[158,127],railgun:[158,111],arc:[158,116]};
const SPRITE_WEAPONS=['fist',...WEAPON_IDS];

export class Viewmodel {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly sprites = new Map<string, HTMLCanvasElement>();
  private readonly parts = new Map<string, HTMLCanvasElement>();
  private current: string = 'fist';
  private next: string = 'fist';
  private switchTime = 0;
  private flash = 0;
  private shotAge = 1;
  private lastRecoil = 0;
  private lastReload = 0;
  private reloadDuration = 1;
  private lastX = 0;
  private lastZ = 0;
  private travel = 0;
  private initialized = false;
  private effectTime = 0;
  private movementAmount = 0;
  private shotSerial = 0;
  private readonly flares = new Map<string, HTMLCanvasElement[]>();
  private readonly smokeSprites:HTMLCanvasElement[]=[];
  private readonly energySmoke = new Map<string, HTMLCanvasElement[]>();
  private readonly energyPulses = new Map<string, HTMLCanvasElement[]>();
  private readonly smoke:SmokeParticle[]=[];
  private readonly casings:CasingParticle[]=[];
  private reloadCasesEjected = false;
  private lastSimulationTime = 0;

  constructor(private readonly canvas: HTMLCanvasElement) {
    canvas.width = 640;
    canvas.height = 400;
    canvas.style.imageRendering = 'pixelated';
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('A 2D canvas is required for the weapon view.');
    this.ctx = ctx;
    ctx.imageSmoothingEnabled = false;
    ctx.setTransform(2, 0, 0, 2, 0, 0);
    this.cacheMechanicalParts();
    for (const weapon of SPRITE_WEAPONS) {
      const sprite = document.createElement('canvas');
      sprite.width = 320;
      sprite.height = 200;
      const s = sprite.getContext('2d')!;
      s.imageSmoothingEnabled = false;
      s.setTransform(1, 0, 0, 1, 0, 0);
      this.paintWeapon(s, weapon);
      this.crispSprite(s,sprite.width,sprite.height);
      this.sprites.set(weapon, sprite);
    }
    this.cacheFiringEffects();
    this.cacheEnergyPulses();
  }

  render(state: GameState, dt: number): void {
    const p = state.player;
    const c = this.ctx;
    dt = Math.max(0, Math.min(dt, 0.06));
    this.effectTime += dt;
    c.setTransform(2, 0, 0, 2, 0, 0);
    c.clearRect(0, 0, 320, 200);
    const weapon = p.owned.includes(p.weapon) ? p.weapon : 'fist';
    if(state.time < this.lastSimulationTime) {
      this.initialized = false;
      this.flash = 0;this.shotAge = 1;this.lastRecoil = 0;
      this.lastReload = 0;this.switchTime = 0;this.movementAmount = 0;
      this.travel = 0;this.effectTime = 0;this.smoke.length = 0;this.casings.length = 0;
    }
    this.lastSimulationTime = state.time;
    if (!this.initialized) {
      this.current = this.next = weapon;
      this.lastX = p.x;
      this.lastZ = p.z;
      this.initialized = true;
    }
    if (weapon !== this.next) {
      this.next = weapon;
      this.switchTime = 0.32;
    }
    if (this.switchTime > 0) {
      this.switchTime = Math.max(0, this.switchTime - dt);
      if (this.switchTime < 0.16) this.current = this.next;
    }
    if (p.recoil > 0.65 && p.recoil > this.lastRecoil + 0.04 && weapon !== 'fist' && !p.mounted) {
      this.flash = weapon==='arc' ? 0.15 : weapon==='railgun' ? 0.12 : weapon==='plasma' ? 0.11 : weapon==='shotgun' ? 0.09 : 0.075;
      this.shotAge = 0;
      this.shotSerial++;
      this.spawnShotEffects(weapon);
    }
    this.lastRecoil = p.recoil;
    this.flash = Math.max(0, this.flash - dt);
    this.shotAge += dt;
    if (p.reload > this.lastReload + 0.1) {
      this.reloadDuration = p.reload;
      this.reloadCasesEjected = false;
    }
    this.lastReload = p.reload;
    if (dt > 0) {
      const speed = Math.hypot(p.x - this.lastX, p.z - this.lastZ) / dt;
      this.lastX = p.x;
      this.lastZ = p.z;
      this.travel += Math.min(speed, 15) * dt * (p.mounted ? 1.9 : 2.5);
      this.movementAmount = Math.min(speed / 4, 1);
      this.updateParticles(dt);
    }
    const amount = this.movementAmount;
    const bobX = Math.sin(this.travel) * 2.2 * amount;
    const bobY = Math.abs(Math.cos(this.travel)) * 2.5 * amount;
    const switchDip = this.switchTime > 0 ? Math.sin((this.switchTime / 0.32) * Math.PI) * 100 : 0;
    const reloadProgress = p.reload > 0 ? 1 - p.reload / this.reloadDuration : 0;
    const reloadWave = p.reload > 0 ? Math.sin(reloadProgress * Math.PI) : 0;
    const recoil = Math.min(1, p.recoil);
    // A crisp wrist/shoulder impulse followed by a heavier return. Local timers
    // keep the full firing presentation still when the simulation is paused.
    const impulse = this.shotAge < (this.current==='railgun'||this.current==='arc'?.3:.26) ? Math.exp(-this.shotAge * (this.current==='shotgun'?11:this.current==='railgun'?13:this.current==='arc'?17:19)) : 0;
    const kick = this.current==='shotgun' ? 11 : this.current==='railgun' ? 8 : this.current==='arc' ? 5.5 : this.current==='revolver' ? 6 : this.current==='machinegun' ? 3.5 : 4;
    const tilt = this.current==='shotgun' ? .12 : this.current==='railgun' ? .055 : this.current==='arc' ? -.045 : this.current==='revolver' ? .105 : this.current==='machinegun' ? .033 : .035;
    if (this.current==='revolver' && p.reload > 0 && reloadProgress > .22 && !this.reloadCasesEjected) {
      this.reloadCasesEjected = true;
      for(let i=0;i<6;i++)this.spawnCasing('revolver',168-i*.7,167+i*.3,28+i*7,-27-i*3,i);
    }

    if (p.mounted) {
      // Mounted combat is a strider bite. Holster the weapon and keep Elias's
      // metal glove/reins visible, rather than displaying a gun that cannot fire.
      this.paintMount(c, this.effectTime, amount, recoil);
      this.line(c,[173,159],[251,188],'#5b4f35',2);
      this.arm(c,247,186);
      return;
    }
    c.save();
    c.translate(Math.round(bobX + impulse*(this.current==='machinegun'?Math.sin(this.shotSerial*2.4)*1.5:1)), Math.round(bobY + switchDip + impulse*kick + reloadWave * 23));
    if(impulse>0 && p.reload<=0) {
      c.translate(220,180);c.rotate(impulse*tilt);c.translate(-220,-180);
    }
    // A reload presents the side of the gun, distinct from the upward kick when firing.
    if (p.reload > 0) {
      c.translate(209, 176);
      c.rotate(reloadWave * (this.current === 'revolver' ? 0.3 : this.current==='arc' ? -.2 : this.current==='railgun' ? -.1 : -0.14));
      c.translate(-209, -176);
    }
    c.drawImage(this.sprites.get(this.current)!, 0, 0, 320, 200);
    this.paintAmmoGauge(c, this.current, p.ammo[this.current as WeaponId] || 0);
    this.paintMechanism(c, this.current, p.reload > 0);
    if (this.current === 'plasma') this.paintPlasmaPulse(c, this.effectTime, p.reload > 0);
    if (this.current === 'railgun' || this.current === 'arc') this.paintEnergyPulse(c,this.current,this.effectTime,p.reload>0);
    this.paintSmoke(c);
    if (p.reload > 0) this.paintReload(c, this.current, reloadProgress);
    if (this.flash > 0 && p.reload <= 0) this.paintFlash(c, this.current);
    if (this.current === 'shotgun' && p.reload <= 0) {
      const pumping = this.shotAge < .48 && this.shotAge > .12;
      this.paintPumpHand(c,pumping ? Math.sin((this.shotAge-.12)/.36*Math.PI)*8 : 0);
    }
    c.restore();
    this.paintCasings(c);
  }

  private poly(c: CanvasRenderingContext2D, points: readonly Point[], fill: string, outline = '#080c10'): void {
    c.beginPath();
    c.moveTo(points[0][0], points[0][1]);
    for (const [x,y] of points.slice(1)) c.lineTo(x,y);
    c.closePath();
    c.fillStyle = fill; c.fill();
    if (outline) { c.strokeStyle = outline; c.lineWidth = 1; c.stroke(); }
  }

  private line(c:CanvasRenderingContext2D, from:Point, to:Point, color:string, width=1):void {
    c.beginPath(); c.moveTo(...from); c.lineTo(...to); c.strokeStyle=color; c.lineWidth=width; c.stroke();
  }

  private bolt(c:CanvasRenderingContext2D,x:number,y:number):void {
    c.fillStyle='#10161c';c.fillRect(x-2,y-2,5,5);
    c.fillStyle='#9faeae';c.fillRect(x-1,y-1,3,3);
    c.fillStyle='#344650';c.fillRect(x-1,y,3,1);
    c.fillStyle='#e2e5d5';c.fillRect(x-1,y-1,2,.5);
    c.fillStyle='#131f26';c.fillRect(x-.5,y-.5,.5,2);
    c.fillStyle='#52636a';c.fillRect(x+1,y+.5,.5,1.5);
  }

  private screw(c:CanvasRenderingContext2D,x:number,y:number,brass=false):void {
    c.fillStyle='#091317';c.fillRect(x-1,y-1,2.5,2.5);
    c.fillStyle=brass?'#a58d59':'#91a19e';c.fillRect(x-.5,y-.5,1.5,1.5);
    c.fillStyle=brass?'#f0d399':'#dbe0d3';c.fillRect(x-.5,y-.5,1,.5);
    c.fillStyle='#24333b';c.fillRect(x,y-.5,.5,1.5);
  }

  private inset(c:CanvasRenderingContext2D,points:readonly Point[],fill='#27353b'):void {
    this.poly(c,points,fill,'#091318');
    for(let i=0;i<points.length-1;i++) {
      if(i%2===0)this.line(c,points[i],points[i+1],'#b0beb063',.5);
    }
  }

  private machining(c:CanvasRenderingContext2D,polygon:readonly Point[],seed:number,count=90):void {
    c.save();c.beginPath();c.moveTo(...polygon[0]);
    for(const point of polygon.slice(1))c.lineTo(...point);
    c.closePath();c.clip();
    const xs=polygon.map(p=>p[0]),ys=polygon.map(p=>p[1]);
    const x0=Math.min(...xs),y0=Math.min(...ys),w=Math.max(...xs)-x0,h=Math.max(...ys)-y0;
    let n=seed;
    for(let i=0;i<count;i++) {
      n=(n*1664525+1013904223)>>>0;const x=x0+(n%Math.max(1,w*2|0))*.5;
      n=(n*1664525+1013904223)>>>0;const y=y0+(n%Math.max(1,h*2|0))*.5;
      c.fillStyle=i%4===0?'#d3dcc241':i%4===1?'#030a136a':'#a5bab225';
      c.fillRect(x,y,i%9===0?2.5:.5,.5);
      if(i%17===0){c.fillStyle='#101b2570';c.fillRect(x,y+.5,1.5,.5);}
    }
    c.restore();
  }

  private etch(c:CanvasRenderingContext2D,text:string,x:number,y:number,color='#b3bdab',angle=0):void {
    const glyphs:Record<string,string[]>={
      'A':['010','101','111','101','101'],'B':['110','101','110','101','110'],
      'C':['111','100','100','100','111'],'D':['110','101','101','101','110'],
      'E':['111','100','110','100','111'],'F':['111','100','110','100','100'],
      'G':['111','100','101','101','111'],'H':['101','101','111','101','101'],
      'I':['111','010','010','010','111'],'K':['101','101','110','101','101'],
      'L':['100','100','100','100','111'],'M':['101','111','111','101','101'],
      'N':['101','111','111','111','101'],'O':['111','101','101','101','111'],
      'P':['110','101','110','100','100'],'R':['110','101','110','101','101'],
      'S':['111','100','111','001','111'],'T':['111','010','010','010','010'],
      'U':['101','101','101','101','111'],'V':['101','101','101','101','010'],
      'X':['101','101','010','101','101'],'Y':['101','101','010','010','010'],
      '0':['111','101','101','101','111'],'1':['010','110','010','010','111'],
      '2':['110','001','010','100','111'],'3':['110','001','010','001','110'],
      '4':['101','101','111','001','001'],'5':['111','100','110','001','110'],
      '6':['011','100','111','101','111'],'7':['111','001','010','010','010'],
      '8':['111','101','111','101','111'],'9':['111','101','111','001','110'],
      '-':['000','000','111','000','000'],'.':['000','000','000','000','010'],
    };
    c.save();c.translate(x,y);c.rotate(angle);c.fillStyle=color;
    for(let i=0;i<text.length;i++) {
      const glyph=glyphs[text[i]];
      if(!glyph)continue;
      glyph.forEach((row,gy)=>{for(let gx=0;gx<3;gx++)if(row[gx]==='1')c.fillRect(i*2+gx*.5,gy*.5,.5,.5);});
    }
    c.restore();
  }

  private wire(c:CanvasRenderingContext2D,points:readonly Point[],color:string,width=1):void {
    for(let i=0;i<points.length-1;i++)this.line(c,points[i],points[i+1],'#071219',width+1.5);
    for(let i=0;i<points.length-1;i++)this.line(c,points[i],points[i+1],color,width);
    for(let i=0;i<points.length-1;i++) {
      const [x,y]=points[i];this.line(c,[x,y-.5],[points[i+1][0],points[i+1][1]-.5],'#ffe1b03a',.5);
    }
  }

  private gripTexture(c:CanvasRenderingContext2D,points:readonly Point[]):void {
    c.save();c.beginPath();c.moveTo(...points[0]);
    for(const point of points.slice(1))c.lineTo(...point);
    c.closePath();c.clip();
    const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    for(let y=Math.min(...ys);y<Math.max(...ys);y+=1.5) {
      for(let x=Math.min(...xs);x<Math.max(...xs);x+=1.5) {
        c.fillStyle='#090e1380';c.fillRect(x+(Math.round(y)%2)*.5,y,.5,.5);
        c.fillStyle='#c2ae8b45';c.fillRect(x+.5,y+.5,.5,.5);
      }
    }
    c.restore();
  }

  private scratches(c:CanvasRenderingContext2D,polygon:readonly Point[],seed:number,count=45):void {
    c.save(); c.beginPath(); c.moveTo(...polygon[0]);
    for(const point of polygon.slice(1)) c.lineTo(...point);
    c.closePath();c.clip();
    const xs=polygon.map(p=>p[0]),ys=polygon.map(p=>p[1]);
    const x0=Math.min(...xs), y0=Math.min(...ys), w=Math.max(...xs)-x0, h=Math.max(...ys)-y0;
    let n=seed;
    for(let i=0;i<count;i++) {
      n=(n*1664525+1013904223)>>>0;const x=x0+n%Math.max(1,w|0);
      n=(n*1664525+1013904223)>>>0;const y=y0+n%Math.max(1,h|0);
      c.fillStyle=i%3===0?'#a2afa42b':'#040b104a';c.fillRect(x,y, i%5===0?3:1,1);
    }
    c.restore();
  }

  private arm(c:CanvasRenderingContext2D,gripX=247,gripY=186):void {
    c.drawImage(this.parts.get('mount-arm')!,Math.round(gripX-247),Math.round(gripY-186),320,200);
  }

  private hand(c:CanvasRenderingContext2D,x:number,y:number):void {
    c.drawImage(this.parts.get('hand')!,Math.round(x-20),Math.round(y-16),56,52);
  }

  /** Raster paint: broad form shading with a small fixed palette, ordered
   * dither transitions and irregular wear. It is only used while caching. */
  private pixelFace(c:CanvasRenderingContext2D,points:readonly Point[],palette:readonly string[],seed:number,brightness=.5,contrast=.5):void {
    const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    const x0=Math.floor(Math.min(...xs)),x1=Math.ceil(Math.max(...xs)),y0=Math.floor(Math.min(...ys)),y1=Math.ceil(Math.max(...ys));
    c.save();c.beginPath();c.moveTo(...points[0]);for(const point of points.slice(1))c.lineTo(...point);c.closePath();c.clip();
    const dither=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
    for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++) {
      const n=((x*73856093)^(y*19349663)^seed)>>>0;
      const t=(y-y0)/Math.max(1,y1-y0);
      const patch=Math.sin((x+seed%41)*.14)*Math.cos((y+seed%29)*.12);
      const reflection=Math.max(0,Math.sin((x-x0)/Math.max(1,x1-x0)*6+seed%4))*(1-t)*.07;
      const shine=brightness*.83+contrast*(.36-t*.78)+patch*.035+reflection+(n%23-11)*.0007;
      const value=Math.max(0,Math.min(palette.length-1.01,shine*(palette.length-1)));
      let tone=Math.round(value);
      const lower=Math.floor(value),fraction=value-lower;
      // Clean, broad painted highlights alternate with small transition patches.
      // Dither is a material detail, not a uniform checker coating.
      if(fraction>.34 && fraction<.66 && patch<.1)tone=lower+(fraction>dither[(x&3)+((y&3)<<2)]/16?1:0);
      // Painted chips replace a few pixels; no continuous white outline.
      if(n%137===0)tone=Math.min(palette.length-1,tone+2);
      if(n%149===0)tone=Math.max(0,tone-2);
      c.fillStyle=palette[tone];c.fillRect(x,y,1,1);
    }
    c.restore();
  }

  private crispSprite(c:CanvasRenderingContext2D,width:number,height:number):void {
    const pixels=c.getImageData(0,0,width,height);
    for(let i=0;i<pixels.data.length;i+=4)pixels.data[i+3]=pixels.data[i+3]<160?0:255;
    c.putImageData(pixels,0,0);
  }

  private metalBolt(c:CanvasRenderingContext2D,x:number,y:number):void {
    c.fillStyle='#151b1b';c.fillRect(x-2,y-2,5,5);
    c.fillStyle='#9b9e89';c.fillRect(x-1,y-1,3,3);
    c.fillStyle='#d1d2b4';c.fillRect(x-1,y-1,2,1);
    c.fillStyle='#414b48';c.fillRect(x,y,2,2);
  }

  private paintArmSprite(c:CanvasRenderingContext2D,x:number,y:number):void {
    const coat=['#080d10','#11191c','#1e282a','#303a37','#465048'];
    this.pixelFace(c,[[x+30,y+7],[x+52,y+5],[286,180],[319,186],[330,217],[265,217],[x+27,y+37]],coat,294,.34,.22);
    this.pixelFace(c,[[x+14,y+11],[x+33,y+5],[276,179],[294,200],[273,211],[x+8,y+32]],PIXEL_BLUE,642,.37,.4);
    this.pixelFace(c,[[x+19,y+12],[x+33,y+8],[273,179],[276,186],[x+18,y+28]],PIXEL_STEEL,892,.7,.4);
    this.pixelFace(c,[[x+15,y+28],[275,196],[289,194],[287,204],[273,209],[x+14,y+35]],PIXEL_STEEL,34,.28,.3);
    // Twin hydraulic housings, broad chrome bands and dark gaps.
    this.pixelFace(c,[[x+29,y+17],[x+33,y+12],[276,185],[276,192],[270,195]],PIXEL_STEEL,507,.73,.65);
    this.pixelFace(c,[[x+26,y+27],[x+30,y+22],[273,195],[273,201],[269,203]],PIXEL_STEEL,508,.45,.5);
    for(let i=0;i<4;i++) {
      const px=248+i*5,py=185+i*2;
      c.fillStyle='#152228';c.fillRect(px,py,4,6);
      c.fillStyle='#77958c';c.fillRect(px,py,3,1);
      c.fillStyle='#435954';c.fillRect(px,py+4,3,1);
    }
    this.metalBolt(c,277,194);this.metalBolt(c,265,188);
    c.fillStyle='#1d3029';c.fillRect(259,190,10,4);
    for(let i=0;i<3;i++){c.fillStyle='#9acc83';c.fillRect(260+i*3,191,2,1);}
    // Battered coat has painted seams instead of an enclosing comic stroke.
    c.fillStyle='#4b5044';c.fillRect(298,194,4,1);c.fillRect(304,197,5,1);
    c.fillStyle='#111c1f';c.fillRect(289,198,4,2);c.fillRect(307,203,5,2);
  }

  private cacheMechanicalParts():void {
    const hand=document.createElement('canvas');hand.width=56;hand.height=52;
    const h=hand.getContext('2d')!;
    this.pixelFace(h,[[4,13],[12,4],[31,4],[47,18],[47,37],[34,47],[15,44],[4,31]],PIXEL_BLUE,544,.37,.42);
    this.pixelFace(h,[[8,14],[14,7],[29,7],[38,15],[34,28],[14,25]],PIXEL_STEEL,122,.64,.47);
    for(let i=0;i<4;i++) {
      const x=8+i*8,y=20+i*2;
      this.pixelFace(h,[[x,y],[x+4,y-3],[x+10,y],[x+11,y+9],[x+7,y+14],[x+1,y+12],[x-1,y+5]],PIXEL_STEEL,719+i,.59,.57);
      h.fillStyle='#152225';h.fillRect(x+2,y+6,7,2);
      h.fillStyle='#a6b199';h.fillRect(x+2,y+5,5,1);
      h.fillStyle='#405047';h.fillRect(x+2,y+10,5,1);
      h.fillStyle='#c9c6a4';h.fillRect(x+3,y,3,1);
      h.fillStyle='#263c3d';h.fillRect(x+7,y+3,2,2);
    }
    this.pixelFace(h,[[37,12],[43,11],[51,20],[47,30],[39,27],[35,18]],PIXEL_BLUE,905,.67,.5);
    this.metalBolt(h,37,37);this.metalBolt(h,15,14);
    h.fillStyle='#c09957';h.fillRect(41,33,2,5);
    h.fillStyle='#e4c883';h.fillRect(41,33,1,2);
    this.crispSprite(h,56,52);this.parts.set('hand',hand);
    const pump=document.createElement('canvas');pump.width=320;pump.height=200;
    const p=pump.getContext('2d')!;
    this.pixelFace(p,[[122,207],[137,189],[155,166],[171,159],[189,169],[193,181],[172,190],[149,212]],PIXEL_BLUE,902,.5,.5);
    for(let i=0;i<4;i++) {
      const x=164+i*5,y=162+i*3;
      this.pixelFace(p,[[x,y],[x+7,y],[x+12,y+5],[x+10,y+13],[x+4,y+15],[x-2,y+8]],PIXEL_STEEL,177+i,.63,.65);
      p.fillStyle='#1a2526';p.fillRect(x+2,y+7,7,2);p.fillStyle='#acb59c';p.fillRect(x+2,y+6,6,1);
    }
    this.metalBolt(p,151,187);this.crispSprite(p,320,200);this.parts.set('pump',pump);
    const mount=document.createElement('canvas');mount.width=320;mount.height=200;
    const m=mount.getContext('2d')!;this.paintArmSprite(m,247,186);this.hand(m,247,186);
    this.crispSprite(m,320,200);this.parts.set('mount-arm',mount);
    const cylinder=document.createElement('canvas');cylinder.width=cylinder.height=36;
    const cy=cylinder.getContext('2d')!;
    this.pixelFace(cy,[[4,10],[14,3],[27,6],[34,14],[32,27],[21,33],[8,29],[2,19]],PIXEL_STEEL,309,.59,.85);
    this.pixelFace(cy,[[4,10],[14,3],[27,6],[32,11],[22,13],[11,9]],PIXEL_STEEL,310,.83,.26);
    this.crispSprite(cy,36,36);this.parts.set('reload-cylinder',cylinder);
    // New cell magazines and movable contacts are painted once, then translated
    // during reload/charge cycles. Each has its own silhouette and palette.
    for(const weapon of ['railgun','arc']) {
      const cell=document.createElement('canvas');cell.width=64;cell.height=72;
      const ce=cell.getContext('2d')!;
      if(weapon==='railgun') {
        this.pixelFace(ce,[[17,7],[31,3],[48,18],[49,48],[36,63],[22,49]],PIXEL_STEEL,6239,.42,.68);
        this.pixelFace(ce,[[18,8],[31,4],[46,17],[34,24],[23,17]],PIXEL_STEEL,6240,.74,.28);
        this.pixelFace(ce,[[22,18],[34,23],[34,54],[25,45]],PIXEL_BLUE,6241,.3,.45);
        for(let i=0;i<5;i++) {
          ce.fillStyle='#172737';ce.fillRect(26,23+i*5,15,3);
          ce.fillStyle='#429cbb';ce.fillRect(26,23+i*5,12,1);
          ce.fillStyle='#93dde2';ce.fillRect(26,23+i*5,4,1);
        }
        ce.fillStyle='#c29a51';ce.fillRect(30,7,3,5);ce.fillRect(35,10,3,5);ce.fillRect(40,13,3,5);
        this.etch(ce,'R-05',34,31,'#d3c695',1.1);this.metalBolt(ce,41,45);
      } else {
        const purple=['#10101c','#242337','#3a3b59','#595771','#838296','#b2b3c5','#d5dce0'];
        this.pixelFace(ce,[[11,9],[30,3],[49,18],[53,46],[38,61],[18,54],[9,35]],purple,7331,.4,.55);
        this.pixelFace(ce,[[12,10],[30,4],[46,17],[29,23],[13,17]],PIXEL_STEEL,7332,.73,.34);
        for(let i=0;i<3;i++) {
          const x=16+i*9,y=17+i*4;
          this.pixelFace(ce,[[x,y],[x+7,y+2],[x+8,y+25],[x+3,y+30],[x-2,y+23]],purple,7340+i,.66,.6);
          ce.fillStyle='#754dbc';ce.fillRect(x+1,y+5,4,18);
          ce.fillStyle='#b394f2';ce.fillRect(x+1,y+5,2,18);
          ce.fillStyle='#d3cbff';ce.fillRect(x+1,y+5,1,7);
          ce.fillStyle='#28394b';ce.fillRect(x-1,y+12,7,2);ce.fillRect(x-1,y+22,7,2);
        }
        this.metalBolt(ce,39,51);this.etch(ce,'A-12',20,47,'#b6c6d6',.22);
      }
      this.crispSprite(ce,64,72);this.parts.set(`${weapon}-cell`,cell);
    }
    const slide=document.createElement('canvas');slide.width=26;slide.height=26;
    const sl=slide.getContext('2d')!;
    this.pixelFace(sl,[[2,9],[10,4],[22,15],[19,23],[8,16]],PIXEL_STEEL,6342,.73,.5);
    sl.fillStyle='#a6d5d8';sl.fillRect(7,8,3,1);sl.fillStyle='#203949';sl.fillRect(9,11,3,2);
    this.crispSprite(sl,26,26);this.parts.set('rail-slide',slide);
  }

  private paintWeapon(c:CanvasRenderingContext2D,weapon:string):void {
    if(weapon==='fist') {
      this.paintArmSprite(c,200,174);this.hand(c,200,165);return;
    }
    const grip=weapon==='revolver'?[224,179]:weapon==='shotgun'?[243,189]:weapon==='plasma'?[236,185]:weapon==='arc'?[250,191]:weapon==='railgun'?[246,188]:[252,187];
    this.paintArmSprite(c,grip[0],grip[1]);
    if(weapon==='revolver') {
      // Broad .357 barrel shroud and foreshortened six-shot cylinder.
      this.pixelFace(c,[[151,128],[157,122],[167,123],[190,143],[184,157],[174,153]],PIXEL_STEEL,729,.56,.7);
      this.pixelFace(c,[[155,124],[161,121],[168,124],[190,143],[184,147],[173,140]],PIXEL_STEEL,623,.70,.32);
      this.pixelFace(c,[[153,133],[159,135],[182,158],[185,167],[177,163],[164,148]],PIXEL_STEEL,122,.22,.34);
      this.pixelFace(c,[[170,148],[177,138],[192,139],[214,153],[220,167],[212,179],[197,181],[180,174],[170,159]],PIXEL_STEEL,211,.47,.76);
      this.pixelFace(c,[[176,140],[186,137],[195,141],[214,155],[205,159],[181,148]],PIXEL_STEEL,599,.72,.2);
      for(let i=0;i<5;i++) {
        const x=177+i*7,y=148+i*2;
        this.pixelFace(c,[[x,y],[x+4,y-1],[x+8,y+3],[x+8,y+16],[x+4,y+20],[x+1,y+16]],PIXEL_STEEL,778+i,.48,.75);
        c.fillStyle='#17221f';c.fillRect(x+6,y+5,2,10);
        c.fillStyle='#d3c9a0';c.fillRect(x+2,y+1,2,1);
      }
      this.pixelFace(c,[[207,155],[223,159],[238,180],[237,198],[224,203],[207,184]],PIXEL_STEEL,975,.30,.55);
      this.pixelFace(c,[[219,177],[230,179],[244,200],[232,209],[221,200],[215,184]],['#171715','#2c261e','#433825','#635337','#89734b','#b39560'],186,.56,.57);
      // The gun points away: only the upper muzzle lip is visible past the
      // shroud. A front-facing black circle would reverse the perspective.
      this.pixelFace(c,[[151,126],[154,122],[162,121],[168,125],[166,130],[158,130],[152,128]],PIXEL_STEEL,64,.68,.38);
      c.fillStyle='#a8b2aa';c.fillRect(154,123,5,1);
      c.fillStyle='#3a474b';c.fillRect(155,129,7,1);
      c.fillStyle='#364340';c.fillRect(157,118,5,4);c.fillStyle='#b4d397';c.fillRect(158,118,3,1);
      c.fillStyle='#1a2726';c.fillRect(217,150,5,5);c.fillStyle='#adb29a';c.fillRect(217,150,4,1);
      this.metalBolt(c,220,168);this.metalBolt(c,220,190);
      this.hand(c,228,184);
    } else if(weapon==='shotgun') {
      // Wide ribbed pump, twin tubular profiles and a heavy squared breech.
      this.pixelFace(c,[[146,132],[153,121],[168,122],[210,162],[202,179],[183,165],[160,146]],PIXEL_BLUE,677,.41,.73);
      this.pixelFace(c,[[151,124],[160,121],[169,126],[211,163],[203,169],[176,142]],PIXEL_STEEL,79,.66,.37);
      this.pixelFace(c,[[151,136],[158,137],[198,175],[197,184],[183,174]],PIXEL_BLUE,833,.22,.4);
      this.pixelFace(c,[[179,145],[192,146],[222,174],[213,187],[200,186],[173,161]],['#1b1c17','#343025','#514731','#736345','#998259','#baa06c'],277,.55,.66);
      for(let i=0;i<7;i++) {
        const x=178+i*4,y=148+i*3;
        c.fillStyle='#302c20';c.fillRect(x,y,3,10);c.fillStyle='#a48b5d';c.fillRect(x+1,y,1,8);
      }
      this.pixelFace(c,[[194,152],[213,151],[240,173],[265,201],[240,215],[216,188],[198,176]],PIXEL_BLUE,988,.38,.65);
      this.pixelFace(c,[[198,153],[211,151],[241,175],[239,185],[222,176]],PIXEL_STEEL,566,.65,.35);
      this.pixelFace(c,[[210,172],[224,173],[249,196],[245,214],[230,212],[211,191]],PIXEL_BLUE,975,.22,.5);
      this.pixelFace(c,[[147,129],[151,123],[160,122],[167,126],[168,130],[160,132],[152,131]],PIXEL_BLUE,226,.64,.42);
      c.fillStyle='#bac5b7';c.fillRect(151,124,5,1);c.fillRect(160,126,4,1);
      c.fillStyle='#39494e';c.fillRect(152,131,9,1);
      c.fillStyle='#25363c';c.fillRect(157,119,3,4);c.fillStyle='#c1c9af';c.fillRect(157,119,2,1);
      for(let i=0;i<8;i++){c.fillStyle='#1b2829';c.fillRect(168+i*4,134+i*3,3,4);}
      this.poly(c,[[214,162],[220,162],[232,174],[229,179],[218,170]],'#101c20','');
      c.fillStyle='#a2aea0';c.fillRect(217,163,3,1);
      this.metalBolt(c,225,170);this.metalBolt(c,241,187);
      this.hand(c,242,190);
    } else if(weapon==='plasma') {
      // Large ceramic emitter shroud and copper-wound exposed power cell.
      this.pixelFace(c,[[142,128],[151,116],[170,119],[191,140],[186,155],[167,157],[148,140]],PIXEL_BLUE,922,.43,.6);
      this.pixelFace(c,[[148,119],[154,114],[168,119],[191,140],[181,145],[168,136]],PIXEL_STEEL,110,.65,.37);
      this.pixelFace(c,[[163,139],[188,135],[219,150],[254,185],[251,210],[229,215],[196,184],[173,165]],PIXEL_BLUE,436,.36,.72);
      this.pixelFace(c,[[177,139],[190,136],[217,151],[225,163],[213,167],[190,155]],PIXEL_STEEL,788,.60,.43);
      this.pixelFace(c,[[210,157],[227,154],[253,179],[261,201],[247,213],[229,198],[217,183]],PIXEL_BLUE,651,.27,.72);
      this.poly(c,[[174,151],[185,144],[219,175],[212,189],[197,180]],'#13251e','');
      for(let i=0;i<7;i++) {
        const x=178+i*4,y=148+i*4;
        this.pixelFace(c,[[x,y],[x+3,y-1],[x+10,y+5],[x+7,y+11],[x+2,y+9],[x-3,y+4]],['#2e2619','#514224','#7c6336','#a68b4d','#d3b974','#f2d895'],202+i,.57,.56);
        c.fillStyle='#58b875';c.fillRect(x+2,y+4,3,2);c.fillStyle='#b8e699';c.fillRect(x+2,y+4,1,1);
      }
      this.poly(c,[[144,123],[151,116],[163,117],[173,123],[175,134],[166,140],[153,140],[143,133]],'#485f57','');
      this.poly(c,[[149,126],[154,121],[163,121],[170,127],[166,134],[156,135],[149,131]],'#142b24','');
      c.fillStyle='#429b65';c.fillRect(153,124,11,8);c.fillStyle='#95e3a4';c.fillRect(156,125,6,4);c.fillStyle='#d6f3b8';c.fillRect(158,126,3,2);
      // Bolted emitter cage, with ceramic caps and disconnected painted chips.
      for(const [x,y] of [[145,126],[152,117],[168,121],[169,133]])this.metalBolt(c,x,y);
      this.poly(c,[[217,157],[224,157],[235,169],[233,179],[225,177]],'#16382b','');
      c.fillStyle='#76d58e';c.fillRect(219,161,4,2);c.fillRect(225,168,3,3);
      this.metalBolt(c,242,181);this.metalBolt(c,226,194);
      this.hand(c,240,190);
    } else if(weapon==='railgun') {
      this.paintRailRifle(c);
    } else if(weapon==='arc') {
      this.paintArcDisruptor(c);
    } else if(weapon==='machinegun') {
      // A substantial four-barrel block, ventilated receiver and linked brass belt.
      this.pixelFace(c,[[142,128],[147,116],[163,112],[177,122],[194,145],[189,161],[171,159],[151,143]],PIXEL_BLUE,833,.35,.76);
      this.pixelFace(c,[[149,116],[162,112],[174,121],[195,145],[185,149],[162,129]],PIXEL_STEEL,945,.60,.42);
      this.pixelFace(c,[[162,138],[173,132],[211,165],[208,178],[194,176]],PIXEL_STEEL,588,.40,.78);
      this.pixelFace(c,[[179,148],[197,138],[222,148],[252,177],[278,202],[258,218],[233,207],[193,181],[181,165]],PIXEL_BLUE,175,.33,.6);
      this.pixelFace(c,[[187,147],[198,142],[224,153],[246,171],[244,180],[222,171]],PIXEL_STEEL,875,.59,.38);
      this.pixelFace(c,[[192,168],[218,170],[245,192],[250,214],[234,215],[202,188]],PIXEL_BLUE,664,.20,.47);
      this.pixelFace(c,[[140,124],[145,115],[158,112],[170,117],[178,128],[174,138],[160,146],[146,139]],PIXEL_BLUE,78,.31,.5);
      // Foreshortened upper barrel ribs; the bores face into the street.
      for(const [x,y] of [[147,120],[157,117],[150,131],[162,129]]) {
        this.pixelFace(c,[[x,y],[x+3,y-3],[x+8,y+2],[x+22,y+21],[x+21,y+26],[x+16,y+22]],PIXEL_STEEL,902+x,.43,.46);
        c.fillStyle='#bac5b5';c.fillRect(x+1,y-1,3,1);
        c.fillStyle='#31464b';c.fillRect(x+3,y+4,2,2);
      }
      c.fillStyle='#25353c';c.fillRect(157,109,4,6);c.fillStyle='#c4ccaf';c.fillRect(158,109,2,1);
      for(let i=0;i<7;i++) {
        const x=190+i*5,y=161+i*3;
        c.fillStyle='#1c2828';c.fillRect(x,y,4,8);c.fillStyle='#91a18e';c.fillRect(x,y-1,4,1);
      }
      this.poly(c,[[218,151],[227,151],[237,161],[234,169],[223,164]],'#182b2b','');
      this.pixelFace(c,[[223,144],[231,146],[237,154],[237,159],[231,157],[226,152]],PIXEL_STEEL,387,.58,.46);
      this.pixelFace(c,[[238,169],[259,169],[294,184],[292,207],[255,194],[238,181]],PIXEL_STEEL,382,.24,.25);
      for(let i=0;i<9;i++) {
        const x=243+i*6,y=172+i*2;
        this.pixelFace(c,[[x,y],[x+3,y-1],[x+6,y+4],[x+6,y+14],[x+3,y+17],[x,y+14]],['#423719','#68552a','#967a3a','#bfa05a','#dfc481','#f3de9c'],376+i,.61,.65);
        c.fillStyle='#534e34';c.fillRect(x,y+10,6,2);c.fillStyle='#baaa70';c.fillRect(x,y+13,4,1);
      }
      this.metalBolt(c,240,178);this.metalBolt(c,248,200);
      this.hand(c,253,193);
    }
  }

  private paintRailRifle(c:CanvasRenderingContext2D):void {
    // A long narrow accelerator aims into the scene. Blue capacitors sit below
    // its angular steel rails; the amber bands identify high-voltage hardware.
    this.pixelFace(c,[[149,112],[155,102],[166,106],[217,157],[214,170],[198,160],[172,134]],PIXEL_BLUE,6101,.34,.65);
    this.pixelFace(c,[[153,105],[159,102],[167,108],[217,157],[211,163],[189,141]],PIXEL_STEEL,6102,.72,.35);
    this.pixelFace(c,[[155,115],[162,116],[213,167],[211,180],[199,173],[181,149]],PIXEL_STEEL,6103,.28,.48);
    // Parallel conductive rails leave a recessed blue accelerator channel.
    this.pixelFace(c,[[152,108],[156,105],[213,158],[210,163],[201,157]],PIXEL_STEEL,6104,.58,.48);
    this.pixelFace(c,[[163,109],[167,109],[221,161],[219,168],[213,164]],PIXEL_STEEL,6105,.64,.52);
    this.poly(c,[[158,111],[161,110],[215,162],[212,165]],'#16323b','');
    this.line(c,[160,112],[211,161],'#58a8bb',1);this.line(c,[160,113],[210,162],'#c0d5d4',.5);
    for(let i=0;i<7;i++) {
      const x=163+i*6,y=119+i*6;
      c.fillStyle='#1c2930';c.fillRect(x,y,4,6);c.fillStyle='#778a8a';c.fillRect(x,y,4,1);
      c.fillStyle='#b89b52';c.fillRect(x+1,y+3,3,1);
    }
    this.pixelFace(c,[[190,151],[208,145],[225,155],[258,187],[262,211],[235,216],[208,188],[190,168]],PIXEL_BLUE,6110,.32,.65);
    this.pixelFace(c,[[199,150],[209,148],[225,159],[245,178],[234,183],[215,168]],PIXEL_STEEL,6111,.67,.38);
    this.pixelFace(c,[[218,174],[235,177],[253,194],[252,211],[233,211],[218,192]],PIXEL_STEEL,6112,.3,.61);
    this.poly(c,[[183,150],[195,144],[218,164],[215,179],[202,179],[185,162]],'#142c37','');
    for(let i=0;i<5;i++) {
      const x=188+i*5,y=149+i*4;
      this.pixelFace(c,[[x,y],[x+6,y],[x+12,y+7],[x+9,y+15],[x+2,y+12],[x-2,y+4]],['#13202c','#234353','#356274','#5396ac','#86c8d2','#c4e6df'],6130+i,.62,.63);
      c.fillStyle='#1a2c34';c.fillRect(x+1,y+5,9,2);c.fillStyle='#a2cfcb';c.fillRect(x+2,y+1,3,1);
    }
    // Backward-facing sights and worn warning strips clarify foreshortening.
    c.fillStyle='#213437';c.fillRect(156,99,4,6);c.fillStyle='#d4b66a';c.fillRect(157,99,2,1);
    this.poly(c,[[216,151],[223,153],[232,161],[229,165],[221,161]],'#17272d','');
    this.line(c,[218,152],[222,153],'#abb9aa',1);
    c.fillStyle='#bd9b4f';c.fillRect(235,175,8,2);c.fillStyle='#26343a';c.fillRect(239,175,2,2);
    this.etch(c,'R-05',224,183,'#a7b8b5',.72);this.etch(c,'HV',214,162,'#e1c17c',.72);
    this.metalBolt(c,213,181);this.metalBolt(c,242,196);this.metalBolt(c,195,155);
    this.hand(c,247,190);
  }

  private paintArcDisruptor(c:CanvasRenderingContext2D):void {
    const purple=['#10131d','#252735','#3d4055','#596179','#8292a0','#afbcca','#d2dad6'];
    // Forked contacts: both point away, with the blue/violet arc jumping across
    // the narrow gap rather than a round barrel copied from the plasma rifle.
    this.pixelFace(c,[[138,121],[142,107],[151,108],[176,141],[174,157],[156,146]],purple,7201,.37,.68);
    this.pixelFace(c,[[143,108],[148,105],[155,112],[175,140],[169,143]],PIXEL_STEEL,7202,.73,.43);
    this.pixelFace(c,[[169,116],[170,104],[180,108],[206,139],[203,155],[188,147]],purple,7203,.41,.64);
    this.pixelFace(c,[[174,106],[179,107],[205,138],[198,143],[188,130]],PIXEL_STEEL,7204,.78,.4);
    for(const [x,y] of [[145,112],[175,111]]) {
      c.fillStyle='#4c4298';c.fillRect(x,y,6,10);c.fillStyle='#ac9be9';c.fillRect(x+1,y,3,7);
      c.fillStyle='#d1d9ee';c.fillRect(x+1,y,2,2);c.fillStyle='#253645';c.fillRect(x-1,y+5,8,2);
      this.metalBolt(c,x+3,y+12);
    }
    this.pixelFace(c,[[163,143],[180,131],[201,136],[234,163],[269,194],[270,215],[243,218],[206,192],[169,162]],purple,7210,.37,.64);
    this.pixelFace(c,[[175,136],[184,131],[203,140],[229,164],[222,173],[200,155]],PIXEL_STEEL,7211,.68,.32);
    this.pixelFace(c,[[223,161],[239,166],[264,187],[270,207],[257,217],[237,201],[222,183]],purple,7212,.29,.65);
    this.poly(c,[[173,153],[191,145],[221,168],[222,186],[207,194],[180,174]],'#182330','');
    for(let i=0;i<3;i++) {
      const x=179+i*11,y=152+i*8;
      this.pixelFace(c,[[x,y],[x+8,y-1],[x+17,y+8],[x+13,y+18],[x+5,y+17],[x-2,y+7]],purple,7220+i,.58,.63);
      c.fillStyle='#7064b1';c.fillRect(x+3,y+5,5,9);c.fillStyle='#b6a3ea';c.fillRect(x+3,y+5,2,9);
      c.fillStyle='#ded6fa';c.fillRect(x+3,y+5,1,4);c.fillStyle='#263440';c.fillRect(x+1,y+10,10,2);
    }
    // Ceramic heat shields, hydraulic hose and a rectangular rear charge panel.
    this.pixelFace(c,[[224,171],[233,173],[251,193],[244,202],[230,188]],PIXEL_STEEL,7230,.55,.45);
    this.wire(c,[[177,167],[173,176],[185,186],[204,190],[225,184]],'#667395',2);
    this.poly(c,[[227,162],[237,164],[247,176],[241,182],[231,175]],'#1b2836','');
    c.fillStyle='#798ac1';c.fillRect(230,166,4,2);c.fillStyle='#b5c7e5';c.fillRect(230,166,2,1);
    this.etch(c,'A-12',232,182,'#b9bfcf',.82);this.etch(c,'HV',199,143,'#dfb568',.72);
    for(const [x,y] of [[171,151],[211,148],[219,192],[252,199]])this.metalBolt(c,x,y);
    this.hand(c,251,193);
  }

  private paintAmmoGauge(c:CanvasRenderingContext2D,weapon:string,ammo:number):void {
    if(weapon==='fist')return;
    if(weapon==='revolver') {
      for(let i=0;i<6;i++) {
        c.fillStyle=i<ammo?'#dfc181':'#243c46';
        c.fillRect(181+i*2,144+i*.3,1,.5);
      }
      return;
    }
    if(weapon==='railgun'||weapon==='arc') {
      const rail=weapon==='railgun',x=rail?224:232,y=rail?171:167;
      c.save();c.translate(x,y);c.rotate(rail?.76:.83);
      c.fillStyle='#0b1520';c.fillRect(-1,-1,12,6);
      c.fillStyle='#718a9b';c.fillRect(-1,-1,12,1);
      this.etch(c,String(Math.min(99,ammo)).padStart(2,'0'),.5,.1,ammo>0?(rail?'#a6e3e7':'#c9b9fa'):'#e0795b');
      const capacity=rail?5:12;
      for(let i=0;i<(rail?5:6);i++) {
        c.fillStyle=ammo>(rail?i:i*2)?(rail?'#65bdcf':'#a395eb'):'#283544';
        c.fillRect(i*1.5,3.5,1,1);
      }
      c.fillStyle=ammo>=capacity?'#c6d3b5':'#617981';c.fillRect(8.5,.5,1,2);
      c.restore();return;
    }
    const plasma=weapon==='plasma',heavy=weapon==='machinegun';
    const x=plasma?216:heavy?220:204,y=plasma?159:heavy?173:164;
    c.save();c.translate(x,y);c.rotate(plasma?.72:heavy?.7:.78);
    c.fillStyle='#050f14';c.fillRect(-.5,-.5,8,4);
    c.fillStyle='#4c7070';c.fillRect(-.5,-.5,8,.5);
    this.etch(c,String(Math.min(99,ammo)).padStart(2,'0'),.5,.25,ammo>0?(plasma?'#94ffc5':'#d6d1a1'):'#ff7851');
    c.fillStyle=ammo>0?'#53b693':'#933b28';c.fillRect(5.5,.5,.5,2);
    c.restore();
  }

  private paintPumpHand(c:CanvasRenderingContext2D,offset:number):void {
    c.drawImage(this.parts.get('pump')!,Math.round(offset*.8),Math.round(offset),320,200);
  }

  private paintPlasmaPulse(c:CanvasRenderingContext2D,time:number,reload:boolean):void {
    if(reload)return;
    c.fillStyle=Math.sin(time*9)>0?'#c4ffe1':'#49dc95';
    c.fillRect(215,158,4,2);c.fillRect(221,165,2,2);
    c.fillRect(158,126,3,3);
    const charge=1-Math.min(1,this.shotAge/.32);
    for(let i=0;i<5;i++) {
      const bright=charge>.05 || Math.sin(time*7-i*.9)>.4;
      this.line(c,[185+i*4,149+i*4],[181+i*4,153+i*4],bright?'#b0ffbd':'#2fbc79',1);
      if(charge>.2) {
        c.fillStyle='#d6ffd2';c.fillRect(182+i*4,151+i*4,.5,1);
        if(i%2===this.shotSerial%2)this.line(c,[184+i*4,151+i*4],[188+i*4,151+i*4],'#68eaa7',.5);
      }
    }
  }

  private cacheEnergyPulses():void {
    for(const weapon of ['railgun','arc']) {
      const frames:HTMLCanvasElement[]=[];
      for(let charged=0;charged<2;charged++)for(let phase=0;phase<4;phase++) {
        const sprite=document.createElement('canvas');sprite.width=320;sprite.height=200;
        const c=sprite.getContext('2d')!;
        if(weapon==='railgun') {
          // The rail's five capacitors chase toward the muzzle during recovery.
          for(let i=0;i<5;i++) {
            const x=191+i*5,y=153+i*4,lit=charged?i<=phase:i===phase;
            c.fillStyle=lit?'#b9eef0':'#4c90a5';c.fillRect(x,y,3,2);
            if(lit){c.fillStyle='#e0f3e4';c.fillRect(x,y,1,1);}
          }
          c.fillStyle=charged?'#d6f3e3':'#729cad';c.fillRect(158,108,2,2);
          if(charged)this.line(c,[161,114],[183,137],'#9adbe2',1);
        } else {
          for(let i=0;i<3;i++) {
            const x=182+i*11,y=157+i*8;
            c.fillStyle=charged?'#e2d4ff':(phase+i)%3===0?'#c7b4f4':'#8c78c8';c.fillRect(x,y,2,4);
          }
          const fork:Point[]=[[149,114],[153,115-phase%2],[156,112+phase],[160,118-phase],[163,113+phase],[174,113]];
          for(let i=0;i<fork.length-1;i++)this.line(c,fork[i],fork[i+1],charged?'#ded3ff':'#968ad6',charged?1.5:1);
          c.fillStyle=charged?'#e9e8ff':'#7fbece';c.fillRect(146,112,2,2);c.fillRect(176,111,2,2);
        }
        this.crispSprite(c,320,200);frames.push(sprite);
      }
      this.energyPulses.set(weapon,frames);
    }
  }

  private paintEnergyPulse(c:CanvasRenderingContext2D,weapon:string,time:number,reload:boolean):void {
    if(reload)return;
    const frames=this.energyPulses.get(weapon);if(!frames)return;
    const charged=this.shotAge<.32;
    const phase=charged?Math.min(3,Math.floor(this.shotAge/.08)):Math.floor(time*(weapon==='arc'?7:4))%4;
    c.drawImage(frames[(charged?4:0)+phase],0,0,320,200);
  }

  private paintReload(c:CanvasRenderingContext2D,weapon:string,progress:number):void {
    const wave=Math.sin(progress*Math.PI);
    if(weapon==='revolver') {
      const x=185-Math.round(wave*12),y=160+Math.round(wave*10);
      c.drawImage(this.parts.get('reload-cylinder')!,x-18,y-17,36,36);
      for(let i=0;i<6;i++) {
        const a=i*Math.PI/3+progress*5;
        const cx=Math.round(x+Math.cos(a)*9),cy=Math.round(y+Math.sin(a)*9);
        c.fillStyle=progress>0.45?'#c2a254':'#0b151a';
        c.fillRect(cx-2,cy-2,4,4);
        c.fillStyle=progress>0.45?'#fae5a2':'#5f777e';c.fillRect(cx-1.5,cy-2,2,.5);
        if(progress>0.45){c.fillStyle='#615137';c.fillRect(cx-.5,cy-.5,1,1);}
      }
      this.screw(c,x,y,true);
      if(progress>0.35&&progress<0.7)this.hand(c,147,190);
    } else if(weapon==='shotgun') {
      this.hand(c,175+Math.round(wave*9),190);
      c.fillStyle='#932621';c.fillRect(179,176,5,10);c.fillStyle='#d0aa62';c.fillRect(179,175,5,2);
      c.fillStyle='#edc99a';c.fillRect(179.5,175,4,.5);
      c.fillStyle='#ef6352';c.fillRect(179.5,177,.5,8);
      c.fillStyle='#541c21';c.fillRect(183,178,.5,7);
      this.etch(c,'12',180,179,'#f3d4b2');
    } else if(weapon==='plasma') {
      const x=188,y=176+Math.round(wave*21);
      this.poly(c,[[x,y],[x+11,y-4],[x+23,y+11],[x+13,y+19],[x+4,y+9]],'#294447');
      this.line(c,[x+5,y+3],[x+14,y+14],'#72ffb0',4);
      for(let i=0;i<5;i++)this.line(c,[x+6+i*2,y+3+i*2],[x+3+i*2,y+5+i*2],'#173c3a',.5);
      this.line(c,[x+2,y+.5],[x+10,y-2.5],'#c4d9be',.5);
      this.screw(c,x+13,y+5,true);
      this.hand(c,168,y+15);
    } else if(weapon==='machinegun') {
      this.hand(c,259-Math.round(wave*16),178+Math.round(wave*11));
      c.fillStyle='#c7ac68';c.fillRect(242,167,14,3);
    } else if(weapon==='railgun') {
      // Pull the five-slug capacitor magazine down, reseat it, then rack the
      // accelerator contact. No revolver shells or shotgun pump are reused.
      const x=176,y=135+Math.round(wave*4);
      c.drawImage(this.parts.get('railgun-cell')!,x,y,38,43);
      this.hand(c,150,y+29);
      if(progress>.72)c.drawImage(this.parts.get('rail-slide')!,212+Math.round(Math.sin((progress-.72)/.28*Math.PI)*5),150,26,26);
    } else if(weapon==='arc') {
      // A wider three-cell cassette swings clear of the left receiver bay.
      const x=182-Math.round(wave*9),y=132+Math.round(wave*4);
      c.save();c.translate(x+20,y+20);c.rotate(-wave*.23);
      c.drawImage(this.parts.get('arc-cell')!,-20,-20,42,47);c.restore();
      this.hand(c,x-18,y+34);
    }
  }

  private cacheFiringEffects():void {
    // Small original pixel sprites are painted once. No gradients, canvas
    // allocations, randomness or blur work in the render loop.
    for(const weapon of WEAPON_IDS) {
      const frames:HTMLCanvasElement[]=[];
      for(let variant=0;variant<2;variant++)for(let frame=0;frame<4;frame++) {
        const sprite=document.createElement('canvas');sprite.width=128;sprite.height=128;
        const c=sprite.getContext('2d')!;c.setTransform(2,0,0,2,0,0);
        if(weapon==='railgun'||weapon==='arc') {
          const rail=weapon==='railgun',x=32,y=42,shift=variant?1:-1;
          if(rail) {
            // A tight accelerator discharge: slender blue jet, warm slug core.
            this.poly(c,[[x-4,y+1],[x-7,y-4],[x-4,y-9],[x-3,y-20],[x+shift*2,y-31+frame*3],[x+4,y-18],[x+6,y-9],[x+8,y-4],[x+4,y+2]],'#285d86','');
            this.poly(c,[[x-2,y],[x-3,y-9],[x+shift,y-25+frame*2],[x+3,y-12],[x+4,y-3],[x+2,y+2]],'#73bedb','');
            c.fillStyle='#cbecea';c.fillRect(x-1,y-13,3,13);c.fillStyle='#edddb1';c.fillRect(x,y-5,2,5);
            for(let i=0;i<8;i++) {
              c.fillStyle=i%3?'#6ebed5':'#d2edeb';c.fillRect(x-13+(i*7+variant*3)%25,y-4-(i*5+frame*2)%27,1,1);
            }
          } else {
            // Forked electric corona: asymmetric lightning, never a powder fireball.
            for(let i=0;i<5;i++) {
              const dx=-24+i*12,top=y-14-((i*7+variant*3+frame*2)%17);
              const path:Point[]=[[x,y],[x+dx*.4,y-8],[x+dx*.3+shift*3,y-15],[x+dx,top],[x+dx-shift*3,top-5]];
              for(let j=0;j<path.length-1;j++)this.line(c,path[j],path[j+1],'#58498a',3);
              for(let j=0;j<path.length-1;j++)this.line(c,path[j],path[j+1],i%2?'#b5a0f0':'#8abcdc',1.5);
              for(let j=0;j<path.length-1;j++)this.line(c,path[j],path[j+1],'#dfdaf7',.5);
            }
            c.fillStyle='#c4b8f4';c.fillRect(x-3,y-4,7,6);c.fillStyle='#e4e8f4';c.fillRect(x-1,y-2,3,3);
            for(let i=0;i<6;i++) {
              c.fillStyle=i%2?'#cab6f4':'#8abcdc';c.fillRect(x-23+(i*11+variant*5)%43,y-10-(i*7)%22,1,1);
            }
          }
          this.crispSprite(c,128,128);frames.push(sprite);continue;
        }
        const plasma=weapon==='plasma';
        const size=(weapon==='shotgun'?26:weapon==='machinegun'?20:plasma?22:17)*(1-frame*.12);
        const x=32,y=42,shift=variant?1:-1;
        // Asymmetric lobes with a stepped silhouette rather than smooth bloom.
        for(let lobe=0;lobe<7;lobe++) {
          const a=-Math.PI+(lobe/6)*Math.PI;
          const length=size*(.62+((lobe*5+variant*3)%7)*.065);
          const dx=Math.round(Math.cos(a)*length),dy=Math.round(Math.sin(a)*length);
          this.poly(c,[[x-3,y-1],[x+dx*.5-2,y+dy*.5-2],[x+dx-1,y+dy],[x+dx+3,y+dy+2],[x+dx*.5+3,y+dy*.5+3],[x+3,y+1]],plasma?'#126948':frame>1?'#873925':'#a84925','');
        }
        this.poly(c,[[x-4,y],[x-15,y-5],[x-10,y-8],[x-12,y-15],[x-6,y-12],[x+shift*4,y-size],[x+7,y-12],[x+13,y-15],[x+11,y-7],[x+20,y-6],[x+12,y-1],[x+4,y+4]],plasma?'#27c881':'#e6742b','');
        this.poly(c,[[x-4,y],[x-8,y-6],[x-3,y-8],[x+shift*3,y-16],[x+6,y-8],[x+12,y-6],[x+5,y+3]],plasma?'#8affa9':'#ffd466','');
        // White is restricted to the small hot core; enemies stay readable.
        c.fillStyle=plasma?'#e6ffdd':'#fff5bc';
        c.fillRect(x-2,y-5,6,7);c.fillRect(x,y-9,3,5);c.fillRect(x-4,y-3,2,3);
        if(plasma) {
          const arcs:Point[][]=[[[x-4,y-9],[x-14,y-17],[x-11,y-21],[x-19,y-25]],[[x+4,y-7],[x+16,y-14],[x+12,y-18],[x+20,y-24]],[[x,y-12],[x+shift*5,y-24],[x-shift*1,y-27]]];
          for(const arc of arcs)for(let i=0;i<arc.length-1;i++)this.line(c,arc[i],arc[i+1],frame%2?'#72efb3':'#bef6bd',.5);
          c.fillStyle='#72e5ac';
          for(let i=0;i<7;i++)c.fillRect(x-23+(i*11+variant*5)%43,y-10-(i*7)%22,.5,.5);
        } else {
          // Incandescent powder grains have an uneven, chunky edge.
          for(let i=0;i<15;i++) {
            c.fillStyle=i%3?'#da8c43':'#ffd996';
            c.fillRect(x-25+(i*13+variant*7)%49,y-4-(i*11)%31,i%4===0?1.5:.5,.5);
          }
        }
        frames.push(sprite);
      }
      this.flares.set(weapon,frames);
    }
    for(let variant=0;variant<4;variant++) {
      const sprite=document.createElement('canvas');sprite.width=48;sprite.height=48;
      const c=sprite.getContext('2d')!;c.setTransform(2,0,0,2,0,0);
      const colors=['#495457','#66716d','#829084'];
      for(let i=0;i<22;i++) {
        const x=3+(i*7+variant*3)%15,y=3+(i*11+variant*5)%15;
        c.fillStyle=colors[i%3];c.fillRect(x,y,2+(i%3),2+((i+variant)%3));
      }
      this.smokeSprites.push(sprite);
    }
    for(const weapon of ['railgun','arc']) {
      const sprites:HTMLCanvasElement[]=[];
      for(let variant=0;variant<4;variant++) {
        const sprite=document.createElement('canvas');sprite.width=48;sprite.height=48;
        const c=sprite.getContext('2d')!;
        const colors=weapon==='railgun'?['#35515e','#5b8090','#96b8bd']:['#393456','#65618a','#a6a5c0'];
        for(let i=0;i<13;i++) {
          const x=8+(i*7+variant*3)%26,y=4+(i*11+variant*5)%32;
          c.fillStyle=colors[i%3];c.fillRect(x,y,3+i%3,2+i%2);
        }
        sprites.push(sprite);
      }
      this.energySmoke.set(weapon,sprites);
    }
  }

  private spawnShotEffects(weapon:string):void {
    const muzzle=MUZZLES[weapon];if(!muzzle)return;
    const energy=weapon==='railgun'||weapon==='arc';
    const count=weapon==='shotgun'?4:weapon==='plasma'||weapon==='railgun'?2:3;
    for(let i=0;i<count;i++) {
      this.smoke.push({age:0,life:(energy?.25:.35)+i*.08,x:muzzle[0],y:muzzle[1]-3,
        vx:-10+((this.shotSerial*7+i*13)%21),vy:-22-i*8,
        size:weapon==='shotgun'?7+i:energy?4+i:5+i,variant:(this.shotSerial+i)%4,green:weapon==='plasma',tint:weapon==='railgun'?'railgun':weapon==='arc'?'arc':undefined});
    }
    if(this.smoke.length>28)this.smoke.splice(0,this.smoke.length-28);
    if(weapon==='shotgun')this.spawnCasing(weapon,217,174,88,-73,this.shotSerial);
    if(weapon==='machinegun')this.spawnCasing(weapon,223,165,94,-62,this.shotSerial);
  }

  private spawnCasing(weapon:string,x:number,y:number,vx:number,vy:number,spin:number):void {
    this.casings.push({age:0,weapon,x,y,vx,vy,spin});
    if(this.casings.length>14)this.casings.splice(0,this.casings.length-14);
  }

  private updateParticles(dt:number):void {
    for(let i=this.smoke.length-1;i>=0;i--) {
      const puff=this.smoke[i];puff.age+=dt;
      if(puff.age>puff.life)this.smoke.splice(i,1);
    }
    for(let i=this.casings.length-1;i>=0;i--) {
      const casing=this.casings[i];casing.age+=dt;
      if(casing.age>.55)this.casings.splice(i,1);
    }
  }

  private paintSmoke(c:CanvasRenderingContext2D):void {
    for(const puff of this.smoke) {
      const t=puff.age/puff.life;
      const size=Math.round(puff.size*(.65+t*.75));
      const x=Math.round(puff.x+puff.vx*puff.age),y=Math.round(puff.y+puff.vy*puff.age);
      c.save();c.globalAlpha=(1-t)*(puff.green?.22:puff.tint?.28:.36);
      const sprite=puff.tint?this.energySmoke.get(puff.tint)?.[puff.variant]:undefined;
      c.drawImage(sprite??this.smokeSprites[puff.variant],x-size/2,y-size/2,size,size);
      c.restore();
    }
  }

  private paintCasings(c:CanvasRenderingContext2D):void {
    for(const shell of this.casings) {
      const delay=shell.weapon==='shotgun'?.14:shell.weapon==='machinegun'?.035:0;
      if(shell.age<delay)continue;
      const t=shell.age-delay;
      c.save();c.translate(Math.round(shell.x+shell.vx*t),Math.round(shell.y+shell.vy*t+175*t*t));
      c.rotate(((Math.floor(t*18)+shell.spin)%4)*Math.PI/2);
      const shotgun=shell.weapon==='shotgun';
      c.fillStyle='#111711';c.fillRect(-1.5,-1.5,shotgun?8:5,3.5);
      c.fillStyle=shotgun?'#a6312c':'#b2964f';c.fillRect(-1,-1,shotgun?6:4,2.5);
      c.fillStyle=shotgun?'#ee7861':'#e6cb78';c.fillRect(-1,-1,shotgun?5:3,.5);
      c.fillStyle='#e7ce82';c.fillRect(shotgun?4:2,-1,1.5,2.5);
      c.fillStyle='#675435';c.fillRect(shotgun?5:3,-.5,.5,1.5);
      c.restore();
    }
  }

  private paintMechanism(c:CanvasRenderingContext2D,weapon:string,reload:boolean):void {
    if(reload)return;
    const cycle=Math.max(0,1-this.shotAge/.16);
    if(weapon==='revolver' && cycle>0) {
      const lift=Math.round(cycle*4);
      this.poly(c,[[216,155],[217,149+lift],[221,148+lift],[225,152+lift],[225,157]],'#37474b');
      this.line(c,[217,150+lift],[221,149+lift],'#c8d1b8',.5);
      c.fillStyle='#141f27';c.fillRect(217,156,6,1.5);
    } else if(weapon==='machinegun') {
      const back=Math.round(cycle*3);
      c.fillStyle='#07151b';c.fillRect(218,151,12,8);
      this.poly(c,[[218+back,153+back],[222+back,152+back],[227+back,157+back],[225+back,160+back],[220+back,156+back]],'#7f9592');
      this.line(c,[219+back,153+back],[222+back,152+back],'#dbe1bd',.5);
      c.fillStyle=cycle>.4?'#d8c074':'#364640';c.fillRect(221,154,1,2);
    } else if(weapon==='railgun') {
      const back=Math.round(Math.max(0,1-this.shotAge/.3)*4);
      c.drawImage(this.parts.get('rail-slide')!,209+back,146+back,26,26);
    } else if(weapon==='arc' && cycle>0) {
      // Heat shutters close briefly over the fork contacts while capacitors recover.
      const back=Math.round(cycle*3);
      c.fillStyle='#526375';c.fillRect(143,118+back,9,2);c.fillRect(173,117+back,9,2);
      c.fillStyle='#a3b4c4';c.fillRect(143,118+back,8,1);c.fillRect(173,117+back,8,1);
    }
    // Colored reflections stay on barrel edges and the mechanical knuckles.
    if(this.flash<=0)return;
    const color=weapon==='plasma'?'#a5ffd2':weapon==='railgun'?'#a9dbe9':weapon==='arc'?'#c7b7f2':'#ffe0a2';
    c.save();c.globalAlpha=.55;
    this.line(c,[165,131],[179,142],color,1);
    this.line(c,[182,146],[193,148],color,.5);
    this.line(c,[220,176],[229,183],color,.5);
    c.fillStyle=color;c.fillRect(223,182,2,.5);c.fillRect(231,186,1,.5);
    c.restore();
  }

  private paintFlash(c:CanvasRenderingContext2D,weapon:string):void {
    const frames=this.flares.get(weapon),muzzle=MUZZLES[weapon];if(!frames||!muzzle)return;
    const frame=Math.min(3,Math.floor(this.shotAge*45));
    c.drawImage(frames[(this.shotSerial%2)*4+frame],muzzle[0]-32,muzzle[1]-42,64,64);
  }

  private paintMount(c:CanvasRenderingContext2D,time:number,amount:number,recoil=0):void {
    const bob=Math.round(Math.sin(time*9)*amount*2-recoil*11);
    c.save();c.translate(0,bob);
    this.poly(c,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],'#1a332e');
    this.poly(c,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],'#47654b');
    this.poly(c,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],'#385947');
    // Small original scale clusters, brow ridges and scars on the ridden strider.
    this.machining(c,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);
    for(let i=0;i<7;i++) {
      const x=147+i*3,y=172-i*2.1;
      this.poly(c,[[x,y],[x+2.5,y-1],[x+3,y+1],[x+1.5,y+2]],i%2?'#637558':'#283f34','');
      this.line(c,[x,y],[x+2,y-.5],'#a0a580',.5);
    }
    this.line(c,[162,145],[173,145],'#8a966d',.5);
    this.line(c,[170,149.5],[177,151],'#1d342e',.5);
    c.fillStyle='#132922';c.fillRect(177,150,1.5,1);
    this.line(c,[157,149],[163,153],'#192c26',.5);
    this.line(c,[156.5,149.5],[162.5,153.5],'#91a371',.5);
    if(recoil>0.25) {
      this.poly(c,[[157,153],[180,155],[179,163],[162,160]],'#0b1110');
      for(let i=0;i<5;i++){c.fillStyle='#b9bf8c';c.fillRect(163+i*3,155,2,3);}
    } else this.line(c,[157,155],[178,155],'#111c19',2);
    c.fillStyle='#dfb961';c.fillRect(171,146,4,2);c.fillStyle='#081410';c.fillRect(174,146,1,2);
    c.fillStyle='#ffdc89';c.fillRect(171,146,2,.5);
    for(let i=0;i<5;i++)this.poly(c,[[135+i*3,183-i*6],[130+i*4,179-i*7],[139+i*3,177-i*6]],'#809178');
    this.line(c,[150,162],[119,200],'#74664c',2);this.line(c,[174,163],[198,197],'#74664c',2);
    this.line(c,[151,162],[120,200],'#b5a483',.5);
    this.line(c,[174,162],[198,195],'#c2b298',.5);
    this.inset(c,[[150,164],[153,164],[150,168],[147,168]],'#ad9f6b');
    this.screw(c,150,166,true);
    c.restore();
  }
}
