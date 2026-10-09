import type {GameState, WeaponId} from './types';

/** Original, hand-drawn procedural sprites. Half-unit details are native 640×400 pixels. */
type Point = readonly [number, number];
const STEEL = ['#151b20','#2d3b43','#465761','#687b84','#96a7ad','#ced5ce'];

export class Viewmodel {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly sprites = new Map<string, HTMLCanvasElement>();
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

  constructor(private readonly canvas: HTMLCanvasElement) {
    canvas.width = 640;
    canvas.height = 400;
    canvas.style.imageRendering = 'pixelated';
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('A 2D canvas is required for the weapon view.');
    this.ctx = ctx;
    ctx.imageSmoothingEnabled = false;
    ctx.setTransform(2, 0, 0, 2, 0, 0);
    for (const weapon of ['fist','revolver','shotgun','plasma','machinegun']) {
      const sprite = document.createElement('canvas');
      sprite.width = 640;
      sprite.height = 400;
      const s = sprite.getContext('2d')!;
      s.imageSmoothingEnabled = false;
      s.setTransform(2, 0, 0, 2, 0, 0);
      this.paintWeapon(s, weapon);
      this.sprites.set(weapon, sprite);
    }
  }

  render(state: GameState, dt: number): void {
    const p = state.player;
    const c = this.ctx;
    dt = Math.min(dt, 0.06);
    c.setTransform(2, 0, 0, 2, 0, 0);
    c.clearRect(0, 0, 320, 200);
    const weapon = p.owned.includes(p.weapon) ? p.weapon : 'fist';
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
      this.flash = 0.075;
      this.shotAge = 0;
    }
    this.lastRecoil = p.recoil;
    this.flash = Math.max(0, this.flash - dt);
    this.shotAge += dt;
    if (p.reload > this.lastReload + 0.1) this.reloadDuration = p.reload;
    this.lastReload = p.reload;
    const speed = Math.hypot(p.x - this.lastX, p.z - this.lastZ) / Math.max(dt, 0.001);
    this.lastX = p.x;
    this.lastZ = p.z;
    this.travel += Math.min(speed, 15) * dt * (p.mounted ? 1.9 : 2.5);
    const amount = Math.min(speed / 4, 1);
    const bobX = Math.sin(this.travel) * 2.2 * amount;
    const bobY = Math.abs(Math.cos(this.travel)) * 2.5 * amount;
    const switchDip = this.switchTime > 0 ? Math.sin((this.switchTime / 0.32) * Math.PI) * 100 : 0;
    const reloadProgress = p.reload > 0 ? 1 - p.reload / this.reloadDuration : 0;
    const reloadWave = p.reload > 0 ? Math.sin(reloadProgress * Math.PI) : 0;
    const recoil = Math.min(1, p.recoil);
    const recoilStrength = this.current === 'shotgun' ? 13 : this.current === 'machinegun' ? 5 : 8;

    if (p.mounted) {
      // Mounted combat is a strider bite. Holster the weapon and keep Elias's
      // metal glove/reins visible, rather than displaying a gun that cannot fire.
      this.paintMount(c, state.time, amount, recoil);
      this.line(c,[173,159],[251,188],'#5b4f35',2);
      this.arm(c,247,186);
      return;
    }
    c.save();
    c.translate(Math.round(bobX), Math.round(bobY + switchDip + recoil * recoilStrength + reloadWave * 23));
    // A reload presents the side of the gun, distinct from the upward kick when firing.
    if (p.reload > 0) {
      c.translate(209, 176);
      c.rotate(reloadWave * (this.current === 'revolver' ? 0.3 : -0.14));
      c.translate(-209, -176);
    }
    c.drawImage(this.sprites.get(this.current)!, 0, 0, 320, 200);
    this.paintAmmoGauge(c, this.current, p.ammo[this.current as WeaponId] || 0);
    if (this.current === 'plasma') this.paintPlasmaPulse(c, state.time, p.reload > 0);
    if (p.reload > 0) this.paintReload(c, this.current, reloadProgress);
    if (this.flash > 0 && p.reload <= 0) this.paintFlash(c, this.current, state.time);
    if (this.current === 'shotgun' && this.shotAge < 0.48 && this.shotAge > 0.12 && p.reload <= 0) {
      this.paintPumpHand(c, Math.sin((this.shotAge - 0.12) / 0.36 * Math.PI) * 8);
    }
    c.restore();
    // Brass is part of the foreground animation, never an external asset.
    if (['shotgun','machinegun','revolver'].includes(this.current) && this.shotAge > 0.06 && this.shotAge < 0.35) {
      const t = this.shotAge / 0.35;
      c.save();
      c.translate(Math.round(222 + t * 59), Math.round(148 - Math.sin(t * Math.PI) * 25));
      c.rotate(t * 9);
      c.fillStyle = '#17130b'; c.fillRect(-2,-1,9,4);
      c.fillStyle = this.current === 'shotgun' ? '#a12b25' : '#c19f4d'; c.fillRect(-1,0,6,2);
      c.fillStyle = '#e2ce86'; c.fillRect(4,0,2,2);
      c.restore();
    }
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

  private arm(c:CanvasRenderingContext2D, gripX=204, gripY=165):void {
    // Heavy detective coat surrounds a segmented titanium forearm.
    const coat:Point[]=[[266,184],[319,199],[326,217],[258,213],[240,195]];
    this.poly(c,coat,'#141619');
    this.poly(c,[[270,188],[319,203],[319,211],[264,201],[248,189]],'#2b3031');
    this.line(c,[277,191],[314,204],'#484f4b',2);
    const arm:Point[]=[[gripX+7,gripY+13],[gripX+24,gripY+8],[274,181],[280,197],[258,209],[gripX+4,gripY+27]];
    this.poly(c,arm,STEEL[2]);
    this.poly(c,[[gripX+13,gripY+13],[gripX+24,gripY+11],[267,184],[271,190],[257,196],[gripX+12,gripY+24]],STEEL[3]);
    this.poly(c,[[gripX+12,gripY+13],[gripX+24,gripY+11],[267,184],[260,185],[gripX+16,gripY+18]],STEEL[5]);
    this.poly(c,[[gripX+14,gripY+25],[258,199],[275,191],[277,198],[259,205]],STEEL[0]);
    this.scratches(c,arm,773,100);
    // Parallel hydraulic pistons: bright rods inside black housings.
    this.line(c,[gripX+20,gripY+22],[259,193],'#0b151b',5);
    this.line(c,[gripX+20,gripY+22],[259,193],'#9eaeb0',2);
    this.line(c,[gripX+24,gripY+28],[258,201],'#0b151b',5);
    this.line(c,[gripX+24,gripY+28],[258,201],'#776b47',2);
    this.poly(c,[[258,185],[266,182],[277,190],[274,200],[266,202],[265,192]],'#30383c');
    this.bolt(c,270,191); this.bolt(c,254,187);
    c.fillStyle='#28d989';c.fillRect(253,190,3,2); c.fillRect(257,191,2,2);
    this.line(c,[274,187],[278,197],'#afa17b',2);
    // Small exposed hardware now resolves at one native pixel, rather than
    // simply enlarging the old coarse sprite.
    this.inset(c,[[239,181],[253,183],[258,189],[247,193],[238,187]],'#31434b');
    this.machining(c,arm,7133,145);
    this.line(c,[241,182],[251,184],'#ced4bd',.5);
    this.line(c,[240,188],[247,192],'#14202c',.5);
    this.screw(c,241,184);this.screw(c,251.5,187.5,true);this.screw(c,261.5,194.5);
    this.etch(c,'VANE-09',244,184,'#b9c7b9',.28);
    this.wire(c,[[gripX+17,gripY+28],[238,195],[247,198],[254,197]],'#ac724c',1);
    this.wire(c,[[gripX+19,gripY+30],[240,198],[248,201],[255,200]],'#527b82',.5);
    // Machined piston collars and knurled wrist ring.
    for(let i=0;i<6;i++) {
      this.line(c,[257+i*.8,191-i*.3],[258+i*.8,195-i*.3],i%2?'#192b32':'#afbcae',.5);
      this.line(c,[270+i*.6,185+i*.6],[272+i*.6,187+i*.6],i%2?'#b7ba99':'#2f3431',.5);
    }
    for(let i=0;i<4;i++) {c.fillStyle='#111e25';c.fillRect(263+i*1.5,187+i*.5,1,.5);}
    this.line(c,[gripX+21,gripY+20],[254,188],'#f2efce',.5);
    this.line(c,[gripX+21,gripY+21],[255,190],'#303c42',.5);
    c.fillStyle='#0a191b';c.fillRect(251,189,8,3);
    for(let i=0;i<4;i++){c.fillStyle=i===3?'#6e7150':'#7ef4af';c.fillRect(252+i*1.5,190,1,1);}
    this.line(c,[276,192],[279,196],'#f0d7a4',.5);
    this.line(c,[246,189],[248.5,188.5],'#111b20',.5);
    this.line(c,[246,189.5],[248,189],'#bfcbb1',.5);
    // Sparse stitching and folds in the detective's battered coat.
    for(let i=0;i<11;i++)this.line(c,[283+i*2.5,193+i*.75],[283.5+i*2.5,194+i*.75],'#9b96784d',.5);
    this.line(c,[286,197],[310,206],'#080d13',.5);
    this.line(c,[291,199],[309,205],'#66706a',.5);
    this.hand(c,gripX,gripY);
  }

  private hand(c:CanvasRenderingContext2D,x:number,y:number):void {
    this.poly(c,[[x-14,y-5],[x-6,y-12],[x+9,y-10],[x+19,y],[x+21,y+14],[x+12,y+22],[x-3,y+18],[x-14,y+9]],'#293841');
    this.poly(c,[[x-12,y-5],[x-6,y-10],[x+6,y-8],[x+12,y],[x+9,y+10],[x-7,y+7]],'#65767b');
    for(let i=0;i<4;i++) {
      const fx=x-11+i*6,fy=y+i*2;
      this.poly(c,[[fx,fy],[fx+4,fy-2],[fx+8,fy+3],[fx+7,fy+10],[fx+3,fy+12],[fx-1,fy+7]],i%2?'#839391':'#61747a');
      this.line(c,[fx+1,fy+5],[fx+6,fy+3],'#182730',2);
      c.fillStyle='#c0c8bb';c.fillRect(fx+1,fy,3,2);
      this.line(c,[fx+1,fy+.5],[fx+4.5,fy-1],'#e0e4c8',.5);
      this.line(c,[fx+1.5,fy+6.5],[fx+5,fy+5],'#afc0b6',.5);
      this.line(c,[fx+1,fy+9],[fx+5.5,fy+8],'#263a44',.5);
      this.screw(c,fx+3,fy+7);
      c.fillStyle='#233d42';c.fillRect(fx+3.5,fy+.5,.5,2);
      c.fillStyle='#9e8155';c.fillRect(fx+6,fy+4,.5,3);
      c.fillStyle='#f3e2b6';c.fillRect(fx+6,fy+4,.5,.5);
    }
    this.poly(c,[[x+12,y-2],[x+18,y-2],[x+23,y+6],[x+18,y+13],[x+13,y+8]],'#7e9195');
    this.bolt(c,x+14,y+15);
    this.inset(c,[[x-9,y-7],[x-3,y-9],[x+4,y-5],[x+5,y-1],[x-4,y+2],[x-10,y-1]],'#41535b');
    this.screw(c,x-6,y-4,true);this.screw(c,x+1,y-3);
    this.line(c,[x+15,y],[x+20,y+6],'#cfdbcd',.5);
    this.line(c,[x+17,y+8],[x+20,y+6],'#243b43',.5);
    this.machining(c,[[x-12,y-5],[x+17,y],[x+20,y+13],[x-4,y+17]],139,30);
  }

  private paintWeapon(c:CanvasRenderingContext2D, weapon:string):void {
    if(weapon==='fist') {
      this.arm(c,195,172);
      this.poly(c,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],'#61777e');
      for(let i=0;i<4;i++) { c.fillStyle='#b9c1b5';c.fillRect(186+i*7,155+i*2,5,6);c.fillStyle='#243a41';c.fillRect(186+i*7,162+i*2,5,2); }
      this.machining(c,[[181,164],[190,148],[199,148],[217,158],[211,178],[189,179]],228,100);
      for(let i=0;i<4;i++){this.screw(c,188+i*7,157+i*2);this.line(c,[186+i*7,155+i*2],[190+i*7,155+i*2],'#e5e4c9',.5);}
      this.etch(c,'VANE',193,170,'#b9cbc2',.25);
      return;
    }
    if(weapon==='revolver') {
      this.arm(c,208,174);
      this.poly(c,[[196,156],[211,158],[230,185],[223,199],[208,196],[191,169]],'#191b1a');
      this.poly(c,[[204,166],[212,167],[224,186],[218,193],[212,187]],'#4b3626');
      for(let i=0;i<5;i++) this.line(c,[210+i*2,175+i*3],[219+i,177+i*3],'#8a6d46');
      this.poly(c,[[155,122],[164,119],[180,139],[198,153],[196,170],[181,168],[169,145]],STEEL[2]);
      this.poly(c,[[156,121],[164,120],[183,143],[176,145]],STEEL[4]);
      this.poly(c,[[164,123],[169,128],[183,149],[182,156],[173,147]],STEEL[0]);
      this.line(c,[158,124],[177,148],STEEL[5],2);
      this.poly(c,[[175,143],[190,141],[204,152],[204,166],[194,173],[181,169],[174,155]],'#4a585b');
      this.poly(c,[[177,144],[189,142],[199,150],[186,153]],'#b4bbaf');
      this.poly(c,[[179,154],[186,152],[192,157],[191,168],[184,168]],'#202b31');
      this.poly(c,[[193,154],[200,152],[203,157],[201,167],[195,170]],'#222d32');
      this.line(c,[185,154],[185,166],'#8b9690',2);this.line(c,[198,155],[198,166],'#77847c',2);
      this.poly(c,[[163,120],[162,115],[157,116],[157,122]],'#1b2024');
      c.fillStyle='#98f0c3';c.fillRect(158,115,3,1);
      this.poly(c,[[197,149],[201,143],[206,145],[208,153]],'#728281');
      this.poly(c,[[193,171],[197,184],[207,188],[212,181],[207,171]],'#11191c');
      this.line(c,[197,173],[201,182],'#9faaa4',2);
      this.scratches(c,[[174,142],[198,147],[203,164],[181,172]],129,45);
      this.paintGunDetail(c,weapon);
      this.hand(c,208,177);
      this.bolt(c,192,150);
      c.fillStyle='#a2ada1';c.fillRect(183,148,7,1);
    } else if(weapon==='shotgun') {
      this.arm(c,222,186);
      const gun:Point[]=[[154,120],[165,113],[183,136],[219,171],[240,192],[220,204],[186,170],[165,139]];
      this.poly(c,gun,STEEL[1]);
      this.poly(c,[[156,121],[163,116],[188,142],[219,174],[211,179],[181,145]],'#879698');
      this.poly(c,[[155,122],[159,125],[191,161],[203,176],[199,181],[179,161]],'#17222a');
      this.line(c,[160,122],[208,174],'#c3cabb',2);
      this.poly(c,[[152,118],[156,114],[163,111],[167,115],[165,122],[158,125]],'#40545b');
      this.poly(c,[[155,117],[159,115],[163,115],[163,120],[160,122],[156,121]],'#070c10');
      this.line(c,[156,114],[163,112],'#b0bcb4',2);
      this.poly(c,[[194,155],[213,171],[229,188],[220,198],[205,184],[187,166]],'#34454a');
      this.poly(c,[[200,155],[218,171],[225,183],[218,187],[207,174],[194,163]],'#617378');
      this.poly(c,[[208,170],[214,170],[221,178],[218,182],[212,177]],'#0c171e');
      this.line(c,[209,171],[219,180],'#a9b6b3');
      this.poly(c,[[175,144],[184,140],[203,159],[196,171],[187,169],[174,155]],'#564939');
      for(let i=0;i<6;i++) this.line(c,[179+i*3,146+i*2],[181+i*3,157+i*2],i%2?'#b09562':'#282925',2);
      this.poly(c,[[227,187],[240,191],[254,212],[227,213],[216,197]],'#171c1b');
      this.scratches(c,gun,448,100);this.bolt(c,207,164);this.bolt(c,223,186);
      this.paintGunDetail(c,weapon);
      this.paintPumpHand(c,0);
      this.hand(c,225,184);
    } else if(weapon==='plasma') {
      this.arm(c,217,179);
      const body:Point[]=[[150,122],[160,114],[170,119],[185,139],[215,150],[232,171],[233,193],[221,201],[198,180],[168,145]];
      this.poly(c,body,'#263a3c');
      this.poly(c,[[150,121],[159,116],[169,119],[183,139],[175,144],[160,131]],'#566f71');
      this.poly(c,[[149,121],[151,115],[158,111],[166,113],[171,122],[162,129]],'#182624');
      this.poly(c,[[153,117],[158,114],[165,116],[167,120],[160,125],[154,123]],'#030c09');
      this.poly(c,[[157,117],[162,117],[164,120],[160,122],[157,121]],'#76f6ac');
      this.poly(c,[[179,139],[190,134],[208,146],[223,164],[213,174],[196,164]],'#668085');
      this.poly(c,[[180,140],[189,136],[207,148],[204,155],[192,154]],'#aac0b5');
      this.poly(c,[[179,151],[191,147],[212,169],[207,180],[196,175]],'#101b1d');
      this.poly(c,[[185,151],[191,151],[205,167],[202,173],[198,170]],'#16714d');
      for(let i=0;i<5;i++) this.line(c,[185+i*4,149+i*4],[181+i*4,153+i*4],'#86f8b4',2);
      this.poly(c,[[205,150],[213,150],[232,169],[231,187],[224,190],[211,175]],'#314b50');
      this.poly(c,[[211,153],[215,153],[226,165],[226,174],[220,173]],'#092522');
      c.fillStyle='#84fbbe';c.fillRect(215,158,4,3);c.fillRect(220,164,3,3);
      this.poly(c,[[211,180],[220,177],[234,193],[231,205],[221,205],[209,192]],'#172424');
      this.scratches(c,body,137,85);this.bolt(c,205,145);this.bolt(c,229,178);
      this.paintGunDetail(c,weapon);
      this.hand(c,215,181);
    } else {
      this.arm(c,229,186);
      const body:Point[]=[[148,118],[158,109],[168,114],[178,134],[212,153],[240,178],[255,201],[222,211],[187,175],[160,145]];
      this.poly(c,body,'#222b2e');
      this.poly(c,[[149,118],[157,112],[164,115],[191,151],[186,159],[173,146]],'#718184');
      this.poly(c,[[156,127],[162,120],[199,156],[193,166],[184,159]],'#3a4c51');
      this.poly(c,[[147,117],[150,111],[157,107],[165,111],[171,120],[163,130],[154,129]],'#3f525b');
      for(const [x,y] of [[153,115],[160,114],[157,122],[164,120]]) {
        c.fillStyle='#030a0e';c.fillRect(x-2,y-2,4,4);c.fillStyle='#8da09b';c.fillRect(x-2,y-3,4,1);
      }
      for(let i=0;i<3;i++) this.line(c,[156+i*4,123-i*2],[187+i*5,159-i*2],i%2?'#b0b8ad':'#11191e',2);
      this.poly(c,[[186,153],[198,146],[215,154],[238,175],[243,193],[228,204],[207,188],[186,167]],'#405255');
      this.poly(c,[[189,153],[198,150],[215,158],[229,173],[221,177],[204,163]],'#91a09b');
      this.poly(c,[[189,160],[205,164],[227,182],[228,198],[214,192],[194,174]],'#1c2b31');
      for(let i=0;i<4;i++) this.poly(c,[[193+i*5,162+i*4],[197+i*5,163+i*4],[203+i*5,173+i*4],[199+i*5,174+i*4]],'#070f13');
      this.poly(c,[[211,164],[220,160],[230,168],[230,176],[222,177]],'#364747');
      this.poly(c,[[218,161],[216,151],[221,147],[230,151],[234,157],[230,161]],'#586b6b');
      this.poly(c,[[219,156],[221,151],[227,152],[229,157]],'#070f15');
      // An ammunition belt fed from the right with alternating brass rounds.
      this.poly(c,[[236,169],[263,174],[280,182],[277,194],[249,185],[237,181]],'#14191b');
      for(let i=0;i<8;i++) {
        const x=240+i*5,y=174+i*1.7;
        this.poly(c,[[x,y],[x+4,y+1],[x+3,y+12],[x,y+14],[x-2,y+11]],i%2?'#846733':'#a68b4c');
        c.fillStyle='#d0b471';c.fillRect(x,y+1,2,7);c.fillStyle='#382e23';c.fillRect(x-1,y+9,4,2);
      }
      this.scratches(c,body,1985,140);this.bolt(c,205,158);this.bolt(c,235,185);
      this.paintGunDetail(c,weapon);
      this.hand(c,232,185);
    }
  }

  private paintGunDetail(c:CanvasRenderingContext2D,weapon:string):void {
    if(weapon==='revolver') {
      this.line(c,[156.5,122.5],[176.5,145.5],'#eff0d1',.5);
      this.line(c,[162,122.5],[180,144],'#566570',.5);
      this.line(c,[164,124.5],[181,146.5],'#111b23',.5);
      for(let i=0;i<7;i++) {
        const x=163+i*2,y=127+i*2.25;
        this.line(c,[x,y],[x+2,y-.5],'#263b41',.5);
        this.line(c,[x+.5,y+.5],[x+2,y],'#c6d3c9',.5);
      }
      this.etch(c,'.357',166,133,'#32434a',.88);
      // The cylinder has six distinctly faceted chambers and tiny cartridge rims.
      for(let i=0;i<5;i++) {
        const x=176.5+i*4.5,y=147+i*1.9;
        this.poly(c,[[x,y],[x+2,y-.5],[x+4,y+3],[x+3,y+12],[x+1.5,y+13],[x,y+8]],i%2?'#5e7376':'#253842','');
        this.line(c,[x+1,y+.5],[x+2,y+10],'#c2cbb3',.5);
        this.line(c,[x+3,y+2],[x+3,y+11],'#121f2a',.5);
        c.fillStyle='#d1ad61';c.fillRect(x+.5,y-1,1.5,1);
        c.fillStyle='#f4dd90';c.fillRect(x+.5,y-1,.5,.5);
      }
      this.inset(c,[[184,168],[195,168],[199,171],[197,175],[187,172]],'#42535a');
      this.screw(c,188.5,170);this.screw(c,197,167);
      this.line(c,[178,145],[188,143],'#e9e6c3',.5);
      this.line(c,[192,143.5],[200,149.5],'#e1d9b2',.5);
      this.line(c,[197,147],[201,144],'#1c3038',.5);
      for(let i=0;i<4;i++)this.line(c,[200+i*.9,146.5+i*.2],[202+i*.9,147+i*.2],'#303e45',.5);
      this.gripTexture(c,[[204,166],[212,167],[224,186],[218,193],[212,187]]);
      this.machining(c,[[171,137],[187,146],[204,161],[191,170]],1974,115);
      this.etch(c,'VANE',194,166,'#c1b895',.15);
      this.screw(c,215.5,183.5,true);
    } else if(weapon==='shotgun') {
      this.line(c,[157,115.5],[162.5,112.5],'#d1d7bb',.5);
      this.poly(c,[[156,116],[160,114.5],[162.5,115.5],[161.5,118],[158,119.5]],'#17262d','');
      this.line(c,[158,116],[161,115],'#64818b',.5);
      // A ventilated heat shield and a toothed rail running along the barrel.
      for(let i=0;i<11;i++) {
        const x=164.5+i*2.6,y=122+i*2.8;
        this.poly(c,[[x,y],[x+2.5,y+1.5],[x+3.5,y+4],[x+1,y+2.5]],'#13212b','');
        this.line(c,[x+.5,y],[x+2.5,y+1.5],'#b3c4b5',.5);
        this.line(c,[x+3,y+.5],[x+5,y+2.5],'#2d3941',.5);
      }
      this.line(c,[164,121],[191,149],'#eef0cf',.5);
      this.line(c,[165,123],[194,154],'#52646d',.5);
      this.inset(c,[[198,157],[206,164],[213,168],[210,172],[201,167],[195,162]],'#2c4148');
      this.etch(c,'12 GA',198,160,'#c1cdb9',.79);
      this.line(c,[208.5,171],[217,178],'#d3dbbf',.5);
      this.line(c,[211,174],[216.5,178.5],'#1a292b',.5);
      this.screw(c,199,157);this.screw(c,216,172);this.screw(c,223.5,189,true);
      for(let i=0;i<8;i++) {
        const x=177.5+i*2.5,y=144+i*2;
        this.line(c,[x,y],[x+1.5,y+7.5],'#180f13',.5);
        this.line(c,[x+.5,y],[x+2,y+7.5],'#c7aa6c',.5);
      }
      this.gripTexture(c,[[229,189],[239,193],[247,208],[229,209],[222,198]]);
      this.machining(c,[[155,120],[164,116],[193,146],[226,179],[221,194],[179,156]],2529,165);
      this.etch(c,'FN-12',216,183,'#b9c1ad',.8);
    } else if(weapon==='plasma') {
      // Copper wound power coils with ceramic insulation around a green core.
      for(let i=0;i<9;i++) {
        const x=183+i*2.45,y=149+i*2.5;
        this.line(c,[x,y],[x-3.5,y+4],'#161913',2);
        this.line(c,[x,y],[x-3.5,y+4],'#c49657',1);
        this.line(c,[x,y],[x-2,y+2],'#f0d392',.5);
        c.fillStyle='#3e7651';c.fillRect(x-1,y+2.5,.5,1);
      }
      this.wire(c,[[184,141],[192,138],[205,144],[216,154],[220,162]],'#a46945',1.5);
      this.wire(c,[[181,144],[189,143],[204,150],[214,160]],'#254d5a',.5);
      this.inset(c,[[189,136],[202,143],[205,148],[198,148],[188,141]],'#394f57');
      this.etch(c,'ION-X3',190,139,'#d2d9b9',.51);
      this.line(c,[180,140],[188,136],'#e5ebcf',.5);
      this.line(c,[197,141],[206,147],'#e0e1c0',.5);
      for(let i=0;i<5;i++) {
        const x=208+i*2,y=153+i*2.2;
        this.poly(c,[[x,y],[x+2,y],[x+5,y+3],[x+3,y+3]],'#0b2329','');
        this.line(c,[x+.5,y+.5],[x+3,y+2],'#91b8a1',.5);
      }
      this.inset(c,[[220,166],[226,169],[229,177],[225,181],[220,175]],'#293d42');
      this.screw(c,222,169,true);this.screw(c,226.5,176);
      this.line(c,[155,117],[158,114.5],'#aeffd3',.5);
      this.line(c,[165,116.5],[168,122],'#549878',.5);
      c.fillStyle='#ccfadc';c.fillRect(156.5,119,1,.5);
      this.gripTexture(c,[[215,182],[221,179],[230,194],[226,203],[218,197]]);
      this.machining(c,[[172,133],[190,135],[211,149],[233,173],[224,190],[196,161]],186,165);
      this.etch(c,'CAUTION',199,173,'#969972',.74);
    } else {
      // Four muzzle rings, each with worn chamfers around a black bore.
      for(const [x,y] of [[153,115],[160,114],[157,122],[164,120]]) {
        this.line(c,[x-2,y-1.5],[x+1.5,y-1.5],'#c6d2c1',.5);
        this.line(c,[x-2,y-1],[x-2,y+1],'#708a8f',.5);
        this.line(c,[x+1.5,y-.5],[x+1.5,y+1.5],'#17232e',.5);
        c.fillStyle='#2b414b';c.fillRect(x-.5,y+.5,1,.5);
      }
      for(let i=0;i<8;i++) {
        const x=166+i*2.5,y=129+i*2.7;
        this.poly(c,[[x,y],[x+2,y-1],[x+4,y+2],[x+2,y+3]],'#0b141c','');
        this.line(c,[x,y],[x+1.5,y-.5],'#c5d0b5',.5);
        this.line(c,[x+2,y+3],[x+3.5,y+2],'#4e6a6c',.5);
      }
      this.line(c,[153,124],[178,153],'#e3e6c2',.5);
      this.line(c,[165,127],[192,155],'#566e72',.5);
      this.inset(c,[[198,150],[209,155],[218,164],[214,169],[203,160],[195,155]],'#556a6c');
      this.etch(c,'M-60',200,153,'#d5d7b5',.64);
      this.line(c,[206,160],[216,168],'#152930',.5);
      for(let i=0;i<4;i++) {
        const x=193.5+i*5,y=163+i*4;
        this.line(c,[x,y],[x+3,y+7],'#5b7378',.5);
        this.line(c,[x+4,y+2],[x+6,y+8],'#a2b8a850',.5);
      }
      this.screw(c,199,153);this.screw(c,218.5,166.5);this.screw(c,233,178,true);
      for(let i=0;i<8;i++) {
        const x=240+i*5,y=174+i*1.7;
        c.fillStyle='#eee0a1';c.fillRect(x+.5,y+1,.5,7);
        c.fillStyle='#614e2b';c.fillRect(x+2,y+1,.5,7);
        this.line(c,[x-1,y+10],[x+2,y+10],'#f6d080',.5);
        this.line(c,[x-1,y+12],[x+2,y+12],'#2e2822',.5);
        this.screw(c,x+2.5,y+9);
      }
      this.wire(c,[[236,183],[244,190],[256,191]],'#687c78',.5);
      this.gripTexture(c,[[226,189],[238,187],[249,201],[239,208],[228,204]]);
      this.machining(c,[[162,128],[182,145],[210,149],[238,175],[242,194],[212,188]],6509,190);
      this.etch(c,'FOSSIL',205,179,'#90a399',.72);
    }
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
    c.save();c.translate(Math.round(offset*0.8),Math.round(offset));
    this.poly(c,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],'#1a2226');
    this.poly(c,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],'#74858a');
    this.line(c,[143,195],[163,174],'#c3ccc3',2);
    for(let i=0;i<4;i++) {
      this.poly(c,[[166+i*4,161+i*2],[173+i*4,163+i*2],[176+i*4,169+i*2],[173+i*4,174+i*2],[166+i*4,169+i*2]],i%2?'#9aaba4':'#576c75');
      this.line(c,[170+i*4,166+i*2],[175+i*4,168+i*2],'#1c2c34',2);
      this.line(c,[167+i*4,162+i*2],[172+i*4,164+i*2],'#e2e6c8',.5);
      this.screw(c,170+i*4,166+i*2);
      c.fillStyle='#9c7747';c.fillRect(174+i*4,169+i*2,.5,2);
    }
    this.bolt(c,154,187);
    this.inset(c,[[145,190],[151,181],[158,176],[162,180],[155,186],[148,194]],'#4a626b');
    this.wire(c,[[143,196],[151,189],[156,186]],'#a1744a',.5);
    this.machining(c,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],271,60);
    this.etch(c,'09',148,187,'#d0d6bb',-.81);
    c.restore();
  }

  private paintPlasmaPulse(c:CanvasRenderingContext2D,time:number,reload:boolean):void {
    if(reload)return;
    c.fillStyle=Math.sin(time*9)>0?'#c4ffe1':'#49dc95';
    c.fillRect(215,158,4,2);c.fillRect(221,165,2,2);
    c.fillRect(158,117,3,3);
  }

  private paintReload(c:CanvasRenderingContext2D,weapon:string,progress:number):void {
    const wave=Math.sin(progress*Math.PI);
    if(weapon==='revolver') {
      const x=171-Math.round(wave*12),y=158+Math.round(wave*10);
      this.poly(c,[[x-8,y-5],[x+5,y-8],[x+12,y],[x+10,y+13],[x-3,y+15],[x-11,y+5]],'#687b7d');
      this.line(c,[x-8,y-5],[x+4,y-7],'#dfe4c1',.5);
      this.line(c,[x+9,y+2],[x+8,y+11],'#1c353d',.5);
      for(let i=0;i<6;i++) {
        const a=i*Math.PI/3+progress*5;
        const cx=Math.round(x+Math.cos(a)*6),cy=Math.round(y+Math.sin(a)*6);
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
    }
  }

  private paintFlash(c:CanvasRenderingContext2D,weapon:string,time:number):void {
    const green=weapon==='plasma',x=159,y=114;
    const size=weapon==='shotgun'?23:weapon==='machinegun'?17:13;
    const shift=Math.floor(time*70)%2?1:-1;
    this.poly(c,[[x-3,y],[x-size,y-9],[x-7,y-12],[x-11,y-size-5],[x,y-15],[x+size*0.7,y-size],[x+7,y-8],[x+size,y-3],[x+5,y+4]],green?'#247e55':'#af4321','');
    this.poly(c,[[x-3,y],[x-10,y-7],[x-3,y-10],[x+shift*3,y-19],[x+4,y-9],[x+12,y-6],[x+4,y+2]],green?'#82ffae':'#f9b84e','');
    this.poly(c,[[x-3,y],[x-2,y-7],[x+2,y-11],[x+5,y-4],[x+3,y+3]],green?'#e7ffeb':'#fff3b9','');
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
