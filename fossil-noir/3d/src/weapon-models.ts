import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {WEAPON_IDS} from './arsenal';
import type {GameState,WeaponId} from './types';

type HeldWeapon=WeaponId|'fist';
type Position=readonly[number,number,number];
interface WeaponAsset {
  root:THREE.Group;muzzle:THREE.Object3D;flash:THREE.Sprite;flashLight:THREE.PointLight;
  cylinder?:THREE.Group;pump?:THREE.Group;bolt?:THREE.Group;cell?:THREE.Group;contacts?:THREE.Group;
  charge:THREE.Mesh[];baseCell?:THREE.Vector3;
}

/** Original lit 3D view weapons. The caller renders the world first, then this
 * camera-space scene into the same target; no second WebGL context is created. */
export class WeaponModels {
  private readonly scene=new THREE.Scene();
  private readonly camera=new THREE.PerspectiveCamera(55,1,.01,8);
  private readonly rig=new THREE.Group();
  private readonly assets=new Map<HeldWeapon,WeaponAsset>();
  private readonly geometries=new Map<string,THREE.BufferGeometry>();
  private readonly materials=new Map<string,THREE.Material>();
  private readonly textures=new Set<THREE.Texture>();
  private current:HeldWeapon='fist';
  private next:HeldWeapon='fist';
  private initialized=false;
  private switchTime=0;
  private flashTime=0;
  private shotAge=10;
  private shotSerial=0;
  private lastRecoil=0;
  private lastReload=0;
  private reloadDuration=1;
  private lastTime=0;
  private lastX=0;
  private lastZ=0;
  private travel=0;
  private movement=0;
  private elapsed=0;

  constructor() {
    this.scene.name='Elias weapon overlay';this.rig.name='elias-view-weapon-rig';
    this.scene.add(this.rig);
    this.scene.add(new THREE.HemisphereLight(0xb7d2df,0x1b242c,1.15));
    const key=new THREE.DirectionalLight(0xffe0b0,2.15);key.position.set(-1,2,2);this.scene.add(key);
    const rim=new THREE.DirectionalLight(0x74a8df,1.4);rim.position.set(1,.8,-2);this.scene.add(rim);
    this.cacheMaterials();
    this.buildFist();
    for(const weapon of WEAPON_IDS)this.buildWeapon(weapon);
    for(const asset of this.assets.values())asset.root.visible=false;
  }

  render(renderer:THREE.WebGLRenderer,state:GameState,dt:number,aspect:number):void {
    const p=state.player,weapon:HeldWeapon=p.owned.includes(p.weapon)?p.weapon:'fist';
    dt=Math.max(0,Math.min(Number.isFinite(dt)?dt:0,.06));
    if(!this.initialized||state.time<this.lastTime) {
      this.current=this.next=weapon;this.initialized=true;this.switchTime=0;
      this.flashTime=0;this.shotAge=10;this.lastRecoil=0;this.lastReload=0;
      this.travel=0;this.movement=0;this.elapsed=0;this.lastX=p.x;this.lastZ=p.z;
    }
    this.lastTime=state.time;
    if(weapon!==this.next){this.next=weapon;this.switchTime=.32;}
    if(dt>0) {
      this.elapsed+=dt;
      this.switchTime=Math.max(0,this.switchTime-dt);
      if(this.switchTime<.16)this.current=this.next;
      this.flashTime=Math.max(0,this.flashTime-dt);this.shotAge+=dt;
      const distance=Math.min(Math.hypot(p.x-this.lastX,p.z-this.lastZ),15*dt);
      this.lastX=p.x;this.lastZ=p.z;this.travel+=distance*2.7;
      this.movement+=(Math.min(1,distance/(4*dt))-this.movement)*Math.min(1,dt*12);
    }
    if(p.recoil>.65&&p.recoil>this.lastRecoil+.04&&!p.mounted) {
      this.shotAge=0;this.shotSerial++;
      this.flashTime=weapon==='arc'?.14:weapon==='railgun'?.12:weapon==='shotgun'?.09:.075;
    }
    this.lastRecoil=p.recoil;
    if(p.reload>this.lastReload+.1)this.reloadDuration=p.reload;
    this.lastReload=p.reload;
    const safeAspect=Number.isFinite(aspect)&&aspect>0?aspect:1;
    if(Math.abs(this.camera.aspect-safeAspect)>.001){this.camera.aspect=safeAspect;this.camera.updateProjectionMatrix();}
    const recoil=Math.exp(-this.shotAge*(this.current==='shotgun'?12:this.current==='railgun'?14:20));
    const progress=p.reload>0?THREE.MathUtils.clamp(1-p.reload/this.reloadDuration,0,1):0;
    const reloadWave=p.reload>0?Math.sin(progress*Math.PI):0;
    const switchDip=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI):0;
    const widthFactor=Math.min(1,safeAspect/1.2);
    this.rig.position.set(.225*widthFactor+Math.sin(this.travel)*.007*this.movement,
      -.22-Math.abs(Math.cos(this.travel))*.009*this.movement-switchDip*.42-reloadWave*.065+recoil*.025,
      -.59+recoil*(this.current==='shotgun'?.065:.039));
    this.rig.rotation.set(.115+recoil*(this.current==='shotgun'?.16:.08)-reloadWave*.12,
      .24+reloadWave*.2,-.035+reloadWave*.18);
    this.rig.visible=!p.mounted;
    for(const [id,asset]of this.assets) {
      asset.root.visible=id===this.current;
      if(asset.root.visible)this.animate(asset,id,p.reload>0,progress,reloadWave,p.ammo[id as WeaponId]||0);
      else{asset.flash.visible=false;asset.flashLight.intensity=0;}
    }
    const previousAutoClear=renderer.autoClear;
    try{renderer.autoClear=false;renderer.clearDepth();renderer.render(this.scene,this.camera);}
    finally{renderer.autoClear=previousAutoClear;}
  }

  dispose():void {
    for(const geometry of this.geometries.values())geometry.dispose();
    for(const material of this.materials.values())material.dispose();
    for(const texture of this.textures)texture.dispose();
    this.geometries.clear();this.materials.clear();this.textures.clear();this.assets.clear();this.scene.clear();
  }

  private texture(paint:(c:CanvasRenderingContext2D)=>void,width=128,height=128):THREE.CanvasTexture {
    const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
    const context=canvas.getContext('2d');if(!context)throw new Error('Weapon textures require a 2D canvas.');
    paint(context);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.magFilter=THREE.LinearFilter;
    texture.minFilter=THREE.LinearMipmapLinearFilter;this.textures.add(texture);return texture;
  }

  private cacheMaterials():void {
    const metal=this.texture(c=>{
      c.fillStyle='#aab2b9';c.fillRect(0,0,128,128);let seed=3317;
      for(let y=0;y<128;y++)for(let x=0;x<128;x++) {
        seed=(Math.imul(seed,1664525)+1013904223)>>>0;
        const value=152+(seed%31)+(y%4===0?8:0);c.fillStyle=`rgb(${value},${value+5},${value+8})`;c.fillRect(x,y,1,1);
      }
      for(let i=0;i<31;i++){c.fillStyle=i%3?'#dce0de40':'#303e4a55';c.fillRect((i*37)%125,(i*19)%127,3+i%17,1);}
      for(let i=0;i<24;i++) {
        const x=(i*47+13)%121,y=(i*29+7)%123;
        c.fillStyle=i%2?'#e2e7dc70':'#263b4a70';c.fillRect(x,y,2+i%5,1);
        c.fillStyle='#40515d3d';c.fillRect(x+1,y+1,1+i%3,2);
      }
    });
    const grip=this.texture(c=>{
      c.fillStyle='#474f52';c.fillRect(0,0,128,128);
      for(let y=0;y<128;y+=8)for(let x=0;x<128;x+=8){c.fillStyle='#6b7271';c.fillRect(x+(y%16?4:0),y,4,2);c.fillStyle='#20292c';c.fillRect(x,y+4,6,2);}
    });
    const specs:Record<string,THREE.MeshStandardMaterialParameters>={
      steel:{color:0x738490,map:metal,roughness:.44,metalness:.58},
      dark:{color:0x263741,map:metal,roughness:.57,metalness:.45},
      chrome:{color:0xc6d1d2,map:metal,roughness:.28,metalness:.72},
      brass:{color:0xb99b57,map:metal,roughness:.4,metalness:.62},
      copper:{color:0x9f6546,map:metal,roughness:.46,metalness:.55},
      polymer:{color:0x263039,map:grip,roughness:.86,metalness:.06},
      coat:{color:0x121b23,map:grip,roughness:.94,metalness:0},
      ceramic:{color:0xa0b0ae,map:metal,roughness:.68,metalness:.15},
      wood:{color:0x65462e,map:grip,roughness:.72,metalness:.05},
      green:{color:0x28493a,emissive:0x61dc92,emissiveIntensity:.7,roughness:.4,metalness:.18},
      blue:{color:0x345b70,emissive:0x68c8ef,emissiveIntensity:.7,roughness:.34,metalness:.2},
      violet:{color:0x594677,emissive:0xb09aef,emissiveIntensity:.66,roughness:.36,metalness:.2},
      amber:{color:0xd4a851,emissive:0x9a6424,emissiveIntensity:.14,roughness:.65,metalness:.22},
    };
    for(const [name,spec]of Object.entries(specs))this.materials.set(name,new THREE.MeshStandardMaterial(spec));
    const flashTexture=this.texture(c=>{
      const gradient=c.createRadialGradient(64,64,0,64,64,64);
      gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.08,'#fffefaed');
      gradient.addColorStop(.24,'#f3efde8c');gradient.addColorStop(.56,'#d3d6df26');gradient.addColorStop(1,'#eeeeee00');
      c.fillStyle=gradient;c.fillRect(0,0,128,128);
    });
    flashTexture.wrapS=flashTexture.wrapT=THREE.ClampToEdgeWrapping;
    this.materials.set('flash-template',new THREE.SpriteMaterial({map:flashTexture,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
  }

  private geometry(key:string,make:()=>THREE.BufferGeometry):THREE.BufferGeometry {
    let geometry=this.geometries.get(key);if(!geometry){geometry=make();this.geometries.set(key,geometry);}return geometry;
  }

  private box(parent:THREE.Object3D,name:string,size:Position,position:Position,material='steel',bevel=.006):THREE.Mesh {
    const [w,h,d]=size,b=Math.min(bevel,w*.18,h*.18,d*.18);
    const key=`box:${w}:${h}:${d}:${b}`;
    const geometry=this.geometry(key,()=>{
      const shape=new THREE.Shape(),x=w/2-b,y=h/2-b;
      shape.moveTo(-x,-y);shape.lineTo(x,-y);shape.lineTo(x,y);shape.lineTo(-x,y);shape.closePath();
      const result=new THREE.ExtrudeGeometry(shape,{depth:d-2*b,steps:1,bevelEnabled:b>0,bevelSize:b,bevelThickness:b,bevelSegments:1,curveSegments:1});
      result.translate(0,0,-(d-2*b)/2);
      // ExtrudeGeometry's default UVs are measured in world units. Camera-space
      // parts are centimetres wide, so each face needs the entire painted map.
      const positions=result.getAttribute('position'),normals=result.getAttribute('normal'),uv=result.getAttribute('uv');
      for(let i=0;i<positions.count;i++) {
        const nx=Math.abs(normals.getX(i)),ny=Math.abs(normals.getY(i)),nz=Math.abs(normals.getZ(i));
        uv.setXY(i,nx>nz&&nx>ny?positions.getZ(i)/d+.5:positions.getX(i)/w+.5,
          ny>nz&&ny>nx?positions.getZ(i)/d+.5:positions.getY(i)/h+.5);
      }
      return result;
    });
    const mesh=new THREE.Mesh(geometry,this.materials.get(material));mesh.name=name;mesh.position.set(...position);parent.add(mesh);return mesh;
  }

  private cylinder(parent:THREE.Object3D,name:string,radius:number,length:number,position:Position,material='steel',axis:'x'|'y'|'z'='z',segments=12):THREE.Mesh {
    const geometry=this.geometry(`cylinder:${radius}:${length}:${segments}`,()=>new THREE.CylinderGeometry(radius,radius,length,segments));
    const mesh=new THREE.Mesh(geometry,this.materials.get(material));mesh.name=name;mesh.position.set(...position);
    if(axis==='z')mesh.rotation.x=Math.PI/2;else if(axis==='x')mesh.rotation.z=Math.PI/2;
    parent.add(mesh);return mesh;
  }

  private label(parent:THREE.Object3D,text:string,position:Position,width=.075,materialColor='#c5d2c6'):void {
    const key=`label:${text}:${materialColor}`;
    let material=this.materials.get(key);
    if(!material){const map=this.texture(c=>{c.fillStyle='#1b2b35';c.fillRect(0,0,128,48);c.strokeStyle='#78919b';c.strokeRect(3,3,122,42);c.fillStyle=materialColor;c.font='bold 21px monospace';c.textAlign='center';c.fillText(text,64,31);},128,48);map.wrapS=map.wrapT=THREE.ClampToEdgeWrapping;material=new THREE.MeshStandardMaterial({map,roughness:.7,metalness:.16});this.materials.set(key,material);}
    const geometry=this.geometry(`label-plane:${width}`,()=>new THREE.PlaneGeometry(width,width*48/128));
    const panel=new THREE.Mesh(geometry,material);panel.name=`${text}-engraved-panel`;panel.position.set(...position);panel.rotation.y=-Math.PI/2;parent.add(panel);
  }

  private mechanicalArm(parent:THREE.Group,position:Position=[.04,-.045,.08]):void {
    const arm=new THREE.Group();arm.name='elias-mechanical-arm';arm.position.set(...position);parent.add(arm);
    this.box(arm,'articulated-palm',[.098,.085,.07],[0,0,0],'dark');
    this.box(arm,'dorsal-hand-plate',[.083,.018,.058],[0,.047,.001],'steel',.005);
    for(let i=0;i<4;i++) {
      const x=(i-1.5)*.024;
      this.box(arm,`mechanical-knuckle-${i}`,[.020,.026,.028],[x,.034,-.038],'chrome',.003);
      this.box(arm,`gripping-finger-${i}`,[.018,.051,.024],[x,.002,-.057],'steel',.003);
      this.cylinder(arm,`finger-joint-${i}`,.009,.02,[x,.02,-.051],'dark','x',8);
    }
    this.box(arm,'thumb',[.028,.062,.029],[-.057,.01,.005],'steel',.004).rotation.z=-.35;
    this.cylinder(arm,'wrist-collar',.057,.038,[.016,.052,.077],'chrome');
    // The forearm approaches from the lower right of the actual camera frustum.
    // Its rising wrist-to-elbow angle keeps chrome pistons and the armored hand
    // visible while the sleeve naturally leaves the bottom edge of the image.
    const forearm=this.box(arm,'forearm-armored-casing',[.116,.095,.24],[.055,.12,.208],'dark',.012);forearm.rotation.x=-.56;
    for(const x of [-.028,.068])this.cylinder(arm,'hydraulic-chrome-piston',.012,.23,[x,.12,.207],'chrome').rotation.x-=.56;
    this.box(arm,'forearm-exposed-circuit',[.050,.012,.090],[.047,.19,.19],'polymer',.002).rotation.x=-.56;
    for(let i=0;i<3;i++)this.box(arm,'wrist-status-diode',[.011,.006,.014],[.030+i*.015,.199,.166],'green',.001);
    this.box(arm,'noir-coat-sleeve',[.148,.145,.29],[.078,.25,.429],'coat',.018).rotation.x=-.5;
    this.box(arm,'coat-cuff',[.152,.119,.055],[.064,.192,.298],'polymer',.008).rotation.x=-.5;
    this.cylinder(arm,'wrist-service-bolt',.008,.012,[-.035,.044,.08],'brass','x',8);
  }

  private supportHand(parent:THREE.Group,position:Position):void {
    const hand=new THREE.Group();hand.name='left-support-glove';hand.position.set(...position);parent.add(hand);
    this.box(hand,'glove-palm',[.105,.072,.09],[0,-.025,0],'polymer',.01);
    for(let i=0;i<4;i++)this.box(hand,'glove-finger',[.021,.050,.025],[(i-1.5)*.024,.003,-.053],'polymer',.005);
    this.box(hand,'left-coat-sleeve',[.13,.11,.29],[-.065,-.11,.16],'coat',.018).rotation.y=.5;
  }

  private asset(id:HeldWeapon,muzzle:Position,color:number):WeaponAsset {
    const root=new THREE.Group();root.name=`${id}-view-weapon`;this.rig.add(root);
    const muzzleNode=new THREE.Object3D();muzzleNode.name=`${id}-muzzle`;muzzleNode.position.set(...muzzle);root.add(muzzleNode);
    const flashMaterial=(this.materials.get('flash-template') as THREE.SpriteMaterial).clone();flashMaterial.color.setHex(color);
    this.materials.set(`${id}-flash`,flashMaterial);
    const flash=new THREE.Sprite(flashMaterial);flash.name=`${id}-soft-muzzle-flash`;flash.visible=false;muzzleNode.add(flash);
    const flashLight=new THREE.PointLight(color,0,1.1,2);flashLight.name=`${id}-muzzle-light`;flashLight.position.z=.04;muzzleNode.add(flashLight);
    const asset:WeaponAsset={root,muzzle:muzzleNode,flash,flashLight,charge:[]};this.assets.set(id,asset);return asset;
  }

  private buildFist():void {
    const asset=this.asset('fist',[0,0,-.1],0xffd89d);this.mechanicalArm(asset.root,[0,-.07,-.05]);
    this.batchStaticParts(asset.root,asset);
  }

  private buildWeapon(id:WeaponId):void {
    const muzzle:Record<WeaponId,Position>={revolver:[0,.035,-.34],shotgun:[0,.035,-.64],plasma:[0,.02,-.44],machinegun:[0,.035,-.49],railgun:[0,.055,-.79],arc:[0,.045,-.45]};
    const asset=this.asset(id,muzzle[id],id==='plasma'?0x91ffb8:id==='railgun'?0xa9e0ff:id==='arc'?0xceb5ff:0xffcc7a);
    const root=asset.root;
    this.mechanicalArm(root);
    this.box(root,`${id}-pistol-grip`,[.071,.135,.072],[.005,-.104,.085],id==='revolver'?'wood':'polymer',.009).rotation.x=-.2;
    this.box(root,`${id}-trigger-guard`,[.075,.054,.012],[0,-.047,-.018],'dark',.003);
    this.box(root,`${id}-trigger`,[.009,.028,.012],[.022,-.041,-.014],'chrome',.002);
    if(id==='revolver') {
      this.box(root,'revolver-breech',[.085,.082,.146],[0,.035,-.041],'steel',.01);
      this.box(root,'revolver-barrel-shroud',[.058,.065,.22],[0,.049,-.232],'steel',.009);
      this.cylinder(root,'revolver-bore',.019,.013,[0,.042,-.345],'dark');
      this.box(root,'revolver-front-sight',[.013,.020,.023],[0,.091,-.316],'dark',.002);
      this.box(root,'revolver-rear-sight',[.042,.015,.021],[0,.084,.03],'dark',.002);
      const cylinder=new THREE.Group();cylinder.name='revolver-animated-cylinder';cylinder.position.set(0,.032,-.07);root.add(cylinder);asset.cylinder=cylinder;
      this.cylinder(cylinder,'revolver-six-shot-drum',.056,.084,[0,0,0],'steel', 'z',18);
      for(let i=0;i<6;i++){const a=i*Math.PI/3;this.cylinder(cylinder,'revolver-chamber',.012,.009,[Math.cos(a)*.039,Math.sin(a)*.039,.046],'brass','z',8);}
      this.box(root,'revolver-hammer',[.021,.034,.017],[0,.083,.053],'chrome',.003);
      this.label(root,'VANE',[-.043,.035,.01],.057);
    } else if(id==='shotgun') {
      this.box(root,'shotgun-receiver',[.10,.088,.23],[0,.025,-.03],'dark',.012);
      this.cylinder(root,'shotgun-steel-barrel',.026,.52,[0,.035,-.36],'steel');
      this.cylinder(root,'shotgun-tubular-magazine',.022,.42,[0,-.018,-.33],'dark');
      this.cylinder(root,'shotgun-muzzle-collar',.031,.03,[0,.035,-.625],'chrome');
      const pump=new THREE.Group();pump.name='shotgun-animated-pump';pump.position.set(0,-.015,-.31);root.add(pump);asset.pump=pump;
      this.box(pump,'shotgun-pump-body',[.105,.073,.19],[0,0,0],'wood',.012);
      for(let i=0;i<7;i++)this.box(pump,'shotgun-pump-rib',[.112,.081,.010],[0,0,-.077+i*.024],'dark',.004);
      this.supportHand(pump,[0,-.05,.018]);
      this.box(root,'shotgun-top-rib',[.018,.010,.46],[0,.067,-.332],'chrome',.002);
      this.box(root,'shotgun-sight',[.015,.018,.024],[0,.078,-.59],'amber',.002);
      this.label(root,'FN-12',[-.052,.025,-.02]);
      this.box(root,'shotgun-ejection-port',[.008,.034,.068],[.054,.032,-.03],'chrome',.002);
    } else if(id==='plasma') {
      this.box(root,'plasma-receiver',[.15,.105,.29],[0,.018,-.06],'dark',.016);
      this.box(root,'plasma-ceramic-shroud',[.165,.139,.16],[0,.03,-.34],'ceramic',.02);
      this.box(root,'plasma-emitter-side-inset',[.009,.052,.104],[-.088,.033,-.34],'dark',.002);
      asset.charge.push(this.box(root,'plasma-emitter-side-window',[.008,.026,.071],[-.094,.033,-.34],'green',.002));
      this.cylinder(root,'plasma-emitter-cage',.052,.036,[0,.025,-.432],'dark','z',16);
      this.cylinder(root,'plasma-luminous-emitter',.033,.008,[0,.025,-.453],'green','z',16);
      for(let i=0;i<6;i++)this.cylinder(root,'plasma-copper-coil',.068,.016,[0,.015,-.16-i*.024],'copper','z',16);
      const cell=new THREE.Group();cell.name='plasma-animated-cell';cell.position.set(-.076,-.016,-.07);root.add(cell);asset.cell=cell;asset.baseCell=cell.position.clone();
      this.box(cell,'plasma-power-cell',[.028,.058,.16],[0,0,0],'polymer',.004);
      asset.charge.push(this.box(cell,'plasma-green-charge-window',[.008,.032,.12],[-.018,0,0],'green',.002));
      this.supportHand(root,[-.01,-.074,-.23]);this.label(root,'P-30',[-.078,.025,.018]);
      for(const x of [-.058,.058])this.box(root,'plasma-emitter-brace',[.018,.035,.1],[x,.034,-.382],'steel',.004);
    } else if(id==='machinegun') {
      this.box(root,'machinegun-heavy-receiver',[.16,.135,.29],[0,.028,-.01],'dark',.016);
      this.cylinder(root,'machinegun-barrel',.028,.4,[0,.039,-.29],'steel');
      this.cylinder(root,'machinegun-muzzle-brake',.039,.063,[0,.039,-.475],'dark');
      for(let i=0;i<6;i++)this.box(root,'machinegun-cooling-rib',[.086,.073,.012],[0,.039,-.16-i*.045],'steel',.004);
      const magazine=new THREE.Group();magazine.name='machinegun-animated-magazine';magazine.position.set(.08,-.112,.025);root.add(magazine);asset.cell=magazine;asset.baseCell=magazine.position.clone();
      this.box(magazine,'machinegun-belt-magazine',[.14,.15,.135],[0,0,0],'polymer',.014);
      this.box(magazine,'machinegun-magazine-latch',[.06,.013,.04],[-.018,.083,0],'steel',.003);
      for(let i=0;i<7;i++)this.cylinder(root,'machinegun-linked-round',.011,.070,[.115+i*.021,.034,-.001-i*.013],'brass');
      this.box(root,'machinegun-carry-handle',[.13,.017,.125],[0,.13,-.02],'steel',.004);
      for(const x of [-.055,.055])this.box(root,'machinegun-handle-mount',[.017,.059,.019],[x,.106,.01],'dark',.004);
      const bolt=new THREE.Group();bolt.name='machinegun-animated-bolt';bolt.position.set(-.082,.021,-.028);root.add(bolt);asset.bolt=bolt;
      this.box(bolt,'machinegun-bolt-plate',[.008,.042,.074],[0,0,0],'chrome',.003);
      this.supportHand(root,[-.015,-.059,-.24]);this.label(root,'H-60',[-.081,.04,.066]);
    } else if(id==='railgun') {
      this.box(root,'railgun-angular-receiver',[.135,.108,.30],[0,.022,-.034],'steel',.013);
      this.box(root,'railgun-accelerator-channel',[.071,.041,.65],[0,.055,-.445],'dark',.008);
      for(const x of [-.043,.043])this.box(root,'railgun-long-chrome-rail',[.022,.037,.63],[x,.074,-.448],'chrome',.006);
      for(let i=0;i<8;i++)this.box(root,'railgun-vent-cap',[.10,.014,.024],[0,.085,-.22-i*.067],'dark',.004);
      this.box(root,'railgun-front-contact',[.075,.041,.046],[0,.056,-.775],'steel',.006);
      asset.charge.push(this.box(root,'railgun-accelerator-glow',[.022,.006,.54],[0,.092,-.447],'blue',.001));
      const cell=new THREE.Group();cell.name='railgun-animated-capacitor-magazine';cell.position.set(-.072,-.025,-.031);root.add(cell);asset.cell=cell;asset.baseCell=cell.position.clone();
      this.box(cell,'railgun-capacitor-frame',[.035,.08,.16],[0,0,0],'dark',.006);
      for(let i=0;i<5;i++)asset.charge.push(this.box(cell,'railgun-blue-capacitor',[.012,.05,.022],[-.022,.005,-.061+i*.028],'blue',.003));
      const bolt=new THREE.Group();bolt.name='railgun-animated-contact';bolt.position.set(.068,.025,-.023);root.add(bolt);asset.bolt=bolt;
      this.box(bolt,'railgun-contact-latch',[.02,.036,.071],[0,0,0],'chrome',.004);
      this.box(root,'railgun-warning-band',[.14,.009,.042],[0,.081,-.053],'amber',.002);
      this.supportHand(root,[-.01,-.055,-.35]);this.label(root,'R-05',[-.07,.024,.063]);
    } else {
      this.box(root,'arc-forked-receiver',[.17,.117,.26],[0,.022,-.072],'dark',.018);
      const contacts=new THREE.Group();contacts.name='arc-animated-conductors';root.add(contacts);asset.contacts=contacts;
      for(const x of [-.059,.059]) {
        this.box(contacts,'arc-steel-conductor',[.042,.066,.25],[x,.045,-.327],'steel',.010);
        asset.charge.push(this.cylinder(contacts,'arc-violet-contact',.019,.031,[x,.045,-.452],'violet','z',12));
        this.box(contacts,'arc-ceramic-insulator',[.052,.081,.048],[x,.045,-.274],'ceramic',.008);
      }
      const cell=new THREE.Group();cell.name='arc-animated-triple-cell';cell.position.set(-.092,-.014,-.071);root.add(cell);asset.cell=cell;asset.baseCell=cell.position.clone();
      this.box(cell,'arc-cell-cassette',[.032,.09,.18],[0,0,0],'steel',.006);
      for(let i=0;i<3;i++)asset.charge.push(this.cylinder(cell,'arc-violet-capacitor',.017,.060,[-.020,0,-.06+i*.06],'violet','y',12));
      this.box(root,'arc-rear-insulation',[.10,.07,.04],[0,.07,.073],'polymer',.007);
      this.supportHand(root,[-.01,-.06,-.21]);this.label(root,'A-12',[-.088,.029,.037],.07,'#c7b9eb');
    }
    // Service screws, contrasting inset plates and irregular wear make the
    // silhouettes read as assembled hardware rather than a stack of primitives.
    const receiver:Record<WeaponId,{w:number;h:number;rear:number;y:number;front:number}>={
      revolver:{w:.085,h:.082,rear:.032,y:.035,front:-.071},
      shotgun:{w:.10,h:.088,rear:.085,y:.025,front:-.079},
      plasma:{w:.15,h:.105,rear:.085,y:.018,front:-.11},
      machinegun:{w:.16,h:.135,rear:.135,y:.028,front:-.09},
      railgun:{w:.135,h:.108,rear:.116,y:.022,front:-.071},
      arc:{w:.17,h:.117,rear:.058,y:.022,front:-.11},
    };
    const plate=receiver[id];
    this.box(root,'receiver-recessed-side-panel',[.006,plate.h*.47,.089],[-plate.w/2-.003,plate.y-.003,plate.front],'dark',.002);
    this.box(root,'receiver-rear-service-cover',[plate.w*.80,plate.h*.70,.008],[0,plate.y,plate.rear+.004],'steel',.003);
    this.box(root,'receiver-rear-cover-inset',[plate.w*.59,plate.h*.40,.009],[0,plate.y,plate.rear+.008],'dark',.002);
    for(const x of [-plate.w*.29,plate.w*.29])this.cylinder(root,'rear-cover-chrome-screw',.0055,.008,[x,plate.y+plate.h*.22,plate.rear+.011],'chrome','z',8);
    if(id!=='revolver')for(let i=0;i<3;i++)this.box(root,'receiver-top-vent',[plate.w*.57,.008,.009],[0,plate.y+plate.h*.5+.001,plate.front+i*.018],'dark',.002);
    for(const z of [-.069,.058])this.cylinder(root,'receiver-service-screw',.008,.009,[-(id==='revolver'?.047:.082),.005,z],'brass','x',8);
    const energyMaterials=new Map<THREE.Material,THREE.Material>();
    for(const mesh of asset.charge) {
      const original=mesh.material as THREE.MeshStandardMaterial;
      let material=energyMaterials.get(original);
      if(!material){material=original.clone();this.materials.set(`${id}-energy-family-${energyMaterials.size}`,material);energyMaterials.set(original,material);}
      mesh.material=material;
    }
    const moving=[asset.cylinder,asset.pump,asset.bolt,asset.cell,asset.contacts].filter((group):group is THREE.Group=>!!group);
    for(const group of moving)this.batchStaticParts(group,asset);
    this.batchStaticParts(root,asset,new Set(moving));
  }

  /** Static detail shares a draw per material. Named moving groups retain their
   * local origins, while merged meshes record every original component name. */
  private batchStaticParts(container:THREE.Group,asset:WeaponAsset,excluded=new Set<THREE.Group>()):void {
    container.updateWorldMatrix(true,true);
    const groups=new Map<THREE.Material,THREE.Mesh[]>();
    const collect=(node:THREE.Object3D):void=>{
      if(node!==container&&excluded.has(node as THREE.Group))return;
      if(node instanceof THREE.Mesh&&!Array.isArray(node.material)){const meshes=groups.get(node.material)||[];meshes.push(node);groups.set(node.material,meshes);}
      for(const child of node.children)collect(child);
    };
    collect(container);
    const inverse=new THREE.Matrix4().copy(container.matrixWorld).invert();
    for(const [material,meshes]of groups) {
      if(meshes.length<2)continue;
      const geometryParts=meshes.map(mesh=>{
        const geometry=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
        geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,mesh.matrixWorld));return geometry;
      });
      const merged=mergeGeometries(geometryParts,false);
      for(const part of geometryParts)part.dispose();
      if(!merged)throw new Error('Weapon detail geometries could not be merged.');
      this.geometries.set(`batch:${container.uuid}:${material.uuid}`,merged);
      const batch=new THREE.Mesh(merged,material);
      const materialName=[...this.materials].find(([,value])=>value===material)?.[0]||'metal';
      batch.name=`${container.name}-${materialName}-detail-batch`;batch.userData.partNames=meshes.map(mesh=>mesh.name);
      const isCharge=meshes.some(mesh=>asset.charge.includes(mesh));
      asset.charge=asset.charge.filter(mesh=>!meshes.includes(mesh));
      if(isCharge)asset.charge.push(batch);
      for(const mesh of meshes)mesh.removeFromParent();
      container.add(batch);
    }
  }

  private animate(asset:WeaponAsset,id:HeldWeapon,reloading:boolean,progress:number,wave:number,ammo:number):void {
    const firing=this.flashTime>0&&!reloading&&id!=='fist';
    asset.flash.visible=firing;asset.flashLight.intensity=firing?3.2:0;
    if(firing){const extent=(id==='shotgun'?.23:id==='railgun'?.15:id==='arc'?.22:.18)*(1+Math.sin(this.shotSerial*2.1)*.09);asset.flash.scale.set(extent,extent*(id==='railgun'?1.8:1.15),1);(asset.flash.material as THREE.SpriteMaterial).opacity=Math.min(.85,.34+this.flashTime*4);}
    if(asset.cylinder){asset.cylinder.rotation.z=this.shotSerial*Math.PI/3;asset.cylinder.position.x=reloading?-wave*.10:0;asset.cylinder.position.y=.032-wave*.008;}
    if(asset.pump){asset.pump.position.z=-.31+(reloading?wave*.025:this.shotAge>.12&&this.shotAge<.48?Math.sin((this.shotAge-.12)/.36*Math.PI)*.11:0);}
    if(asset.bolt)asset.bolt.position.z=(id==='railgun'?-.023:-.028)+Math.max(0,1-this.shotAge/.17)*.048;
    if(asset.cell&&asset.baseCell){asset.cell.position.copy(asset.baseCell);asset.cell.position.x-=wave*.08;asset.cell.position.y+=wave*(id==='machinegun'?.12:.03);asset.cell.position.z-=wave*.05;asset.cell.rotation.z=id==='arc'?-wave*.45:-wave*.2;}
    if(asset.contacts)asset.contacts.position.z=Math.max(0,1-this.shotAge/.18)*.014;
    for(const [index,mesh]of asset.charge.entries()) {
      // Original cached surfaces pulse in their real light response. Empty
      // weapons retain their solid emitters, but discharge their illumination.
      (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity=ammo>0?.58+Math.sin(this.elapsed*7+index)*.06:reloading?.22:.015;
    }
    if(id==='fist')asset.root.rotation.x=-Math.max(0,1-this.shotAge/.3)*.2;
    else asset.root.rotation.x=0;
    if(id!=='fist'&&reloading&&progress>.88&&asset.cell)asset.cell.position.lerp(asset.baseCell!,Math.min(1,(progress-.88)/.12));
  }
}
