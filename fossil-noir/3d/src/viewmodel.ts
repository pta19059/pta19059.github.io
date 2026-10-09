import type {GameState, WeaponId} from './types';

/** Original, hand-drawn procedural sprites. Coordinates are deliberately quantized. */
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
    canvas.width = 320;
    canvas.height = 200;
    canvas.style.imageRendering = 'pixelated';
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('A 2D canvas is required for the weapon view.');
    this.ctx = ctx;
    ctx.imageSmoothingEnabled = false;
    for (const weapon of ['fist','revolver','shotgun','plasma','machinegun']) {
      const sprite = document.createElement('canvas');
      sprite.width = 320;
      sprite.height = 200;
      const s = sprite.getContext('2d')!;
      s.imageSmoothingEnabled = false;
      this.paintWeapon(s, weapon);
      this.sprites.set(weapon, sprite);
    }
  }

  render(state: GameState, dt: number): void {
    const p = state.player;
    const c = this.ctx;
    dt = Math.min(dt, 0.06);
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
    c.drawImage(this.sprites.get(this.current)!, 0, 0);
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
    }
    this.poly(c,[[x+12,y-2],[x+18,y-2],[x+23,y+6],[x+18,y+13],[x+13,y+8]],'#7e9195');
    this.bolt(c,x+14,y+15);
  }

  private paintWeapon(c:CanvasRenderingContext2D, weapon:string):void {
    if(weapon==='fist') {
      this.arm(c,195,172);
      this.poly(c,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],'#61777e');
      for(let i=0;i<4;i++) { c.fillStyle='#b9c1b5';c.fillRect(186+i*7,155+i*2,5,6);c.fillStyle='#243a41';c.fillRect(186+i*7,162+i*2,5,2); }
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
      this.hand(c,232,185);
    }
  }

  private paintPumpHand(c:CanvasRenderingContext2D,offset:number):void {
    c.save();c.translate(Math.round(offset*0.8),Math.round(offset));
    this.poly(c,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],'#1a2226');
    this.poly(c,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],'#74858a');
    this.line(c,[143,195],[163,174],'#c3ccc3',2);
    for(let i=0;i<4;i++) {
      this.poly(c,[[166+i*4,161+i*2],[173+i*4,163+i*2],[176+i*4,169+i*2],[173+i*4,174+i*2],[166+i*4,169+i*2]],i%2?'#9aaba4':'#576c75');
      this.line(c,[170+i*4,166+i*2],[175+i*4,168+i*2],'#1c2c34',2);
    }
    this.bolt(c,154,187);c.restore();
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
      for(let i=0;i<6;i++) {
        const a=i*Math.PI/3+progress*5;
        c.fillStyle=progress>0.45?'#c2a254':'#0b151a';
        c.fillRect(Math.round(x+Math.cos(a)*6)-2,Math.round(y+Math.sin(a)*6)-2,4,4);
      }
      if(progress>0.35&&progress<0.7)this.hand(c,147,190);
    } else if(weapon==='shotgun') {
      this.hand(c,175+Math.round(wave*9),190);
      c.fillStyle='#932621';c.fillRect(179,176,5,10);c.fillStyle='#d0aa62';c.fillRect(179,175,5,2);
    } else if(weapon==='plasma') {
      const x=188,y=176+Math.round(wave*21);
      this.poly(c,[[x,y],[x+11,y-4],[x+23,y+11],[x+13,y+19],[x+4,y+9]],'#294447');
      this.line(c,[x+5,y+3],[x+14,y+14],'#72ffb0',4);
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
    if(recoil>0.25) {
      this.poly(c,[[157,153],[180,155],[179,163],[162,160]],'#0b1110');
      for(let i=0;i<5;i++){c.fillStyle='#b9bf8c';c.fillRect(163+i*3,155,2,3);}
    } else this.line(c,[157,155],[178,155],'#111c19',2);
    c.fillStyle='#dfb961';c.fillRect(171,146,4,2);c.fillStyle='#081410';c.fillRect(174,146,1,2);
    for(let i=0;i<5;i++)this.poly(c,[[135+i*3,183-i*6],[130+i*4,179-i*7],[139+i*3,177-i*6]],'#809178');
    this.line(c,[150,162],[119,200],'#74664c',2);this.line(c,[174,163],[198,197],'#74664c',2);
    c.restore();
  }
}
