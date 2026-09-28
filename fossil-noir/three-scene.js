/* Fossil Noir 2.5D: original scenery, pinned local Three.js r186. */
import * as THREE from './vendor/three/three.module.min.js';

const W = 480, H = 360;
const palettes = [
  [0x65685c,0xc8b082,0x73c9c2,0x263b40],
  [0x796044,0xd9b880,0xe8b168,0x34332b],
  [0x68776d,0xb5c4a4,0x72e6c3,0x2f4440],
  [0x827955,0xe4ce94,0x95efbe,0x35453e],
  [0x80735a,0xddc08e,0x7ac6d0,0x2c4248],
  [0x697064,0xcab98b,0xf3b67b,0x344346],
  [0xb2a077,0xf1dda0,0xbaca83,0x4a6251],
  [0x656674,0xbab7a6,0xd39ce8,0x303441]
];
const noise = n => { const v = Math.sin(n * 91.73 + 13.14) * 43758.5453; return v - Math.floor(v); };

export function createDepthRenderer(onFailure) {
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x18231f);
  const camera = new THREE.OrthographicCamera(0, W, H, 0, 1, 3000);
  camera.position.z = 1000;

  // The front of every platform stays on the exact 2D collision plane.
  // Only its depth is projected up/right, so jumps and pointer aim stay aligned.
  const oblique = new THREE.Group();
  oblique.matrixAutoUpdate = false;
  oblique.matrix.set(1,0,-.34,0, 0,1,-.25,0, 0,0,1,0, 0,0,0,1);
  scene.add(oblique);
  const world = new THREE.Group(), middle = new THREE.Group();
  oblique.add(world, middle);
  scene.add(new THREE.HemisphereLight(0xc4ded6, 0x4b4035, 1.45));
  const sun = new THREE.DirectionalLight(0xffdfa4, 1.55);
  sun.position.set(-180, 430, 250); scene.add(sun);
  const rim = new THREE.DirectionalLight(0x71b9d0, .55);
  rim.position.set(490, 200, -120); scene.add(rim);
  const flash = new THREE.PointLight(0xffc776, 0, 190, 1);
  const blast = new THREE.PointLight(0xffa25a, 0, 240, 1);
  scene.add(flash, blast);

  const unitBox = new THREE.BoxGeometry(1,1,1);
  const grainCanvas=document.createElement('canvas');grainCanvas.width=grainCanvas.height=64;
  const grain=grainCanvas.getContext('2d');grain.fillStyle='#eeeeee';grain.fillRect(0,0,64,64);
  for(let y=0;y<64;y++)for(let x=0;x<64;x++){
    const n=noise(x+y*71);if(n>.86||n<.07){grain.fillStyle=n>.86?'#ffffff':'#c4c4c4';grain.fillRect(x,y,1,1);}
  }
  for(let y=15;y<64;y+=16){grain.fillStyle='#c3c3c3';grain.fillRect(0,y,64,1);grain.fillStyle='#ffffff';grain.fillRect(0,y+1,64,1);}
  const grainTexture=texture(grainCanvas);
  const plane = new THREE.PlaneGeometry(W,H);
  const baseMaterial = new THREE.MeshBasicMaterial({ toneMapped:false });
  const actorMaterial = new THREE.MeshBasicMaterial({ transparent:true, depthTest:false, depthWrite:false, toneMapped:false });
  const backdrop = new THREE.Mesh(plane, baseMaterial);
  backdrop.position.set(W/2,H/2,-1100); scene.add(backdrop);
  const actors = new THREE.Mesh(plane, actorMaterial);
  actors.position.set(W/2,H/2,8); actors.renderOrder = 10; scene.add(actors);
  let backgroundTexture, actorTexture, stage = -1, disposed = false;
  let resources = [], animations = [], boxes = new Map(), materials = new Map();
  const transform = new THREE.Object3D();
  const lost = event => { event.preventDefault(); onFailure(new Error('WebGL context lost')); };
  renderer.domElement.addEventListener('webglcontextlost', lost);

  function texture(canvas) {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter;
    t.generateMipmaps = false;
    return t;
  }
  function material(color, glow = false) {
    const key = color + ':' + glow;
    if (!materials.has(key)) {
      const m = glow ? new THREE.MeshBasicMaterial({ color, toneMapped:false }) : new THREE.MeshLambertMaterial({ color,map:grainTexture });
      materials.set(key,m); resources.push(m);
    }
    return materials.get(key);
  }
  function box(parent,x,y,z,w,h,d,color,glow=false) {
    const mat = material(color,glow);
    const key = parent.uuid + ':' + mat.uuid;
    if (!boxes.has(key)) boxes.set(key,{parent,mat,items:[]});
    boxes.get(key).items.push([x,y,z,w,h,d]);
  }
  function mesh(parent, geometry, color, x,y,z,glow=false) {
    resources.push(geometry);
    const m = new THREE.Mesh(geometry,material(color,glow));
    m.position.set(x,y,z); parent.add(m); return m;
  }
  function label(parent,words,x,y,z,color='#bfe3cc',width=80) {
    const c=document.createElement('canvas');c.width=128;c.height=32;
    const g=c.getContext('2d');g.fillStyle='#142825';g.fillRect(0,0,128,32);
    g.strokeStyle=color;g.strokeRect(1,1,126,30);g.fillStyle=color;
    g.font='bold 14px monospace';g.textAlign='center';g.fillText(words,64,21);
    const t=texture(c),m=new THREE.MeshBasicMaterial({map:t,toneMapped:false});
    const geometry=new THREE.PlaneGeometry(width,width/4);resources.push(t,m,geometry);
    const sign=new THREE.Mesh(geometry,m);sign.position.set(x,y,z);parent.add(sign);
  }
  function ring(parent,x,y,z,r,color) {
    const a=mesh(parent,new THREE.TorusGeometry(r,4,5,28),0x59645b,x,y,z);
    const b=mesh(parent,new THREE.TorusGeometry(r-6,1.3,4,28),color,x,y,z+1,true);
    animations.push({kind:'ring',a:b,base:r});return a;
  }
  function clearChapter() {
    world.clear();middle.clear();
    for(const resource of resources)resource.dispose();
    resources=[];animations=[];boxes=new Map();materials=new Map();
  }
  function build(s,index,art) {
    clearChapter();stage=index;
    const [stone,edge,accent,dark]=palettes[index];
    sun.color.set(index===6?0xffecc3:index===1?0xffcf94:0xcddbcc);
    rim.color.set(accent);
    for (let i=0;i<s.roofs.length;i++) {
      const r=s.roofs[i], y=H-r.y, depth=index===6?66:52;
      const h=index===5?37:H-r.y+14;
      box(world,r.x+r.w/2,y-h/2,-depth/2,r.w,h,depth,stone);
      // Front faces use the same original artwork as the classic renderer.
      const c=document.createElement('canvas');c.width=r.w;c.height=Math.ceil(h);
      const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.translate(0,-4);
      art.terrain(g,{x:0,w:r.w,y:4},index,0,0,i);
      const t=texture(c),m=new THREE.MeshLambertMaterial({map:t});
      const geometry=new THREE.PlaneGeometry(r.w,h);resources.push(t,m,geometry);
      const front=new THREE.Mesh(geometry,m);front.position.set(r.x+r.w/2,y-h/2,.15);world.add(front);
      box(world,r.x+r.w/2,y-.5,-1,r.w,2,3,edge);
      box(world,r.x+r.w/2,y-1,-depth+2,r.w,3,4,edge);
      for(let x=r.x+12;x<r.x+r.w-10;x+=32) {
        box(world,x,y+.2,-depth/2,1,.6,depth-5,dark);
        if(index!==6)box(world,x+8,y+.6,-depth+10,6,.8,3,edge);
      }
      if(index===5) {
        box(world,r.x+r.w/2,y-h-7,-depth/2,r.w-14,8,depth-8,dark);
        for(let wx=r.x+25;wx<r.x+r.w-9;wx+=76){
          const wheel=mesh(world,new THREE.CylinderGeometry(11,11,8,12),dark,wx,y-h-10,-7);
          wheel.rotation.x=Math.PI/2;
          const hub=mesh(world,new THREE.CylinderGeometry(4,4,9,8),edge,wx,y-h-10,-7);
          hub.rotation.x=Math.PI/2;
        }
      }
      // Props stand behind the walkable strip and never cover a landing edge.
      const x=r.x+Math.min(r.w*.57,180),z=-depth+3;
      if(index===0) {
        box(world,x,y+16,z,36,32,23,dark);box(world,x,y+33,z,41,3,27,edge);
        for(let n=0;n<5;n++)box(world,x,y+7+n*5,z+12,28,1,1,stone);
        box(world,x-70,y+46,z,3,92,4,stone);box(world,x-70,y+82,z,30,2,2,edge);
        if(i%2===0){box(world,x+12,y+69,z-6,87,25,7,dark);label(world,i?'NO VACANCY':'HOTEL 09',x+12,y+69,z-2,'#e5ae99',83);}
      } else if(index===1) {
        for(let n=0;n<4;n++){
          const bx=115+n*140;
          box(world,bx,y+52,-74,59,100,19,dark);
          for(let j=0;j<4;j++) {box(world,bx,y+14+j*23,-60,63,3,21,edge);for(let k=0;k<5;k++)box(world,bx-22+k*9,y+24+j*23,-57,5,15,9,[stone,0x5b7568,0x886856][k%3]);}
        }
        box(world,385,y+26,-29,91,6,30,stone);
        for(const dx of [-37,37])box(world,385+dx,y+11,-30,5,24,26,dark);
        label(world,'CASE ARCHIVE',385,y+98,-63,'#e4c28b',108);
      } else if(index===2) {
        for(const offset of [-54,30]){
          const tx=x+offset;
          mesh(world,new THREE.CylinderGeometry(20,20,9,12),edge,tx,y+5,z-8);
          mesh(world,new THREE.CylinderGeometry(17,17,78,12),dark,tx,y+48,z-8);
          mesh(world,new THREE.CylinderGeometry(20,20,8,12),stone,tx,y+89,z-8);
          for(const dx of [-13,13])box(world,tx+dx,y+46,z+4,2,65,2,accent,true);
          box(world,tx,y+24,z+9,18,3,1,accent,true);
        }
        label(world,'LAZARUS / B6',x-12,y+108,z+2,'#b7d9b0',106);
      } else if(index===3) {
        ring(world,570,y+89,-100,75,accent);
        for(const dx of [-96,96]){box(world,570+dx,y+80,-94,19,160,31,stone);box(world,570+dx,y+81,-77,4,124,2,accent,true);}
        label(world,'TEMPORAL CORE',570,y+181,-99,'#c7dcaa',114);
        for(let n=0;n<5;n++)box(world,140+n*190,y+15,-40,36,30,23,dark);
      } else if(index===4) {
        box(world,x,y+25,z-18,100,50,38,i%2?0x596d65:0x756348);
        box(world,x,y+50,z-18,104,3,40,edge);
        for(let n=0;n<9;n++)box(world,x-43+n*11,y+25,z+2,2,44,2,dark);
        label(world,'AX / CARGO',x,y+27,z+4,'#d3c394',59);
      } else if(index===5) {
        box(world,x,y+35,-53,72,70,20,dark);
        box(world,x,y+71,-51,80,4,25,stone);
        box(world,x,y+46,-41,54,30,2,0x9bb8ab);
        box(world,x,y+46,-39,3,30,2,stone);
        label(world,'LINE 09',x,y+18,-40,'#e7ce93',53);
      } else if(index===6) {
        for(const dx of [-57,45]){
          box(world,x+dx,y+8,z,34,16,33,stone);
          box(world,x+dx,y+49,z,22,72+(i%2)*18,23,edge);
          box(world,x+dx,y+90+(i%2)*9,z,35,10,33,stone);
          for(let n=0;n<5;n++)box(world,x+dx,y+22+n*13,z+12,23,1,1,stone);
          box(world,x+dx-6,y+57,z+12,3,15,1,dark);
        }
        if(i%2===0)box(world,x-6,y+100,z,137,13,37,edge);
        for(let n=0;n<7;n++){
          const leaf=mesh(world,new THREE.ConeGeometry(5,38,3),[0x637c4b,0x799459,0x435e41][n%3],x-29+(n-3)*4,y+13,z+9);
          leaf.rotation.z=(n-3)*.3;
        }
      } else {
        box(world,x,y+50,-57,24,100,28,dark);
        for(let n=0;n<6;n++)box(world,x,y+12+n*15,-42,30,4,3,stone);
        box(world,x,y+53,-39,3,83,2,accent,true);
        ring(world,x+69,y+78,-80,29,accent);
        box(world,x+69,y+25,-78,10,49,19,stone);
        label(world,'AXIOM ZERO',x+25,y+124,-60,'#d4b7da',95);
      }
    }
    // Independent middle distance: parallax geometry moves at half the lane speed.
    for(let i=-1;i<Math.ceil(s.width/180)+2;i++){
      const x=i*180,z=-165;
      if([0,4,7].includes(index)) {
        const h=60+noise(i+22)*66;
        box(middle,x,43+h/2,z,72,h,36,dark);
        box(middle,x,43+h,z,78,3,41,stone);
        for(let row=0;row<3;row++)for(let col=0;col<3;col++)if(noise(i*71+row*9+col)>.27)box(middle,x-23+col*22,56+row*19,z+19,5,9,1,col===1?edge:0x547574,true);
        if(index===4){box(middle,x+48,186,z+10,7,166,8,stone);box(middle,x+28,268,z+10,115,6,10,stone);box(middle,x-18,228,z+10,1,78,1,edge);}
      } else if(index===6){
        box(middle,x,138,z,13,190,15,dark);
        for(let j=0;j<4;j++){
          const crown=mesh(middle,new THREE.DodecahedronGeometry(24,0),[0x355749,0x45634c,0x59744f,0x526c43][j],x-32+j*22,225+Math.sin(j)*16,z-5);
          crown.scale.set(1.3,.7,1);
        }
      } else if(index===5){
        box(middle,x,169,z,5,260,6,dark);box(middle,x,285,z,89,5,6,stone);
      } else {
        box(middle,x,179,z,15,220,28,dark);box(middle,x,288,z,170,11,40,stone);
      }
    }
    // Batch the static architecture by material to keep draw calls low on phones.
    for(const {parent,mat,items} of boxes.values()){
      const batch=new THREE.InstancedMesh(unitBox,mat,items.length);
      items.forEach(([x,y,z,w,h,d],i)=>{transform.position.set(x,y,z);transform.scale.set(w,h,d);transform.updateMatrix();batch.setMatrixAt(i,transform.matrix);});
      batch.computeBoundingSphere();parent.add(batch);
      resources.push(batch);
    }
    boxes.clear();
  }
  return {
    canvas: renderer.domElement,
    render(frame) {
      if(disposed || renderer.getContext().isContextLost())throw new Error('WebGL renderer is unavailable');
      if(stage!==frame.stage)build(frame.scene,frame.stage,frame.art);
      if(!backgroundTexture){backgroundTexture=texture(frame.background);actorTexture=texture(frame.actors);baseMaterial.map=backgroundTexture;actorMaterial.map=actorTexture;baseMaterial.needsUpdate=actorMaterial.needsUpdate=true;}
      backgroundTexture.needsUpdate=actorTexture.needsUpdate=true;
      world.position.x=-frame.camera;
      camera.position.x=-(frame.shakeX||0);camera.position.y=frame.shakeY||0;
      middle.position.x=-frame.camera*.48-(frame.stage===5?(frame.time*34)%180:0);
      for(const a of animations){a.a.rotation.z=frame.time*.17;a.a.scale.setScalar(1+Math.sin(frame.time*2)*.015);}
      flash.position.set(frame.muzzle.x-frame.camera,H-frame.muzzle.y,24);
      flash.intensity=frame.player.flash>0?25:0;
      const explosion=frame.explosions.find(e=>Math.abs(e.x-frame.camera-W/2)<W/2+60);
      blast.intensity=explosion?45:0;
      if(explosion)blast.position.set(explosion.x-frame.camera,H-explosion.y,25);
      renderer.render(scene,camera);
      return renderer.domElement;
    },
    dispose() {
      if(disposed)return;disposed=true;
      renderer.domElement.removeEventListener('webglcontextlost',lost);
      clearChapter();backgroundTexture?.dispose();actorTexture?.dispose();
      baseMaterial.dispose();actorMaterial.dispose();grainTexture.dispose();unitBox.dispose();plane.dispose();renderer.dispose();
    }
  };
}
