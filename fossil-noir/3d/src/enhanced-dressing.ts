import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import type {GameState,LevelData} from './types';

const TAU=Math.PI*2;
const hash=(x:number,z=0)=>{const n=Math.sin(x*127.1+z*311.7+87.3)*43758.5453123;return n-Math.floor(n)};
const smooth=(t:number)=>t*t*(3-2*t);
const noise=(x:number,z:number)=>{
  const ix=Math.floor(x),iz=Math.floor(z),fx=smooth(x-ix),fz=smooth(z-iz);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(hash(ix,iz),hash(ix+1,iz),fx),THREE.MathUtils.lerp(hash(ix,iz+1),hash(ix+1,iz+1),fx),fz);
};
const texture=(bytes:Uint8Array,w:number,h:number,repeat=false)=>{
  const map=new THREE.DataTexture(bytes,w,h,THREE.RGBAFormat);
  map.colorSpace=THREE.SRGBColorSpace;map.magFilter=THREE.LinearFilter;
  map.minFilter=repeat?THREE.LinearMipmapLinearFilter:THREE.LinearFilter;
  map.generateMipmaps=repeat;map.wrapS=map.wrapT=repeat?THREE.RepeatWrapping:THREE.ClampToEdgeWrapping;
  map.anisotropy=repeat?4:1;map.needsUpdate=true;return map;
};

/** Original sandstone/granite paint: strata, mineral grains and damp moss. */
function rockTexture(jungle:boolean):THREE.DataTexture {
  const size=256,data=new Uint8Array(size*size*4);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const i=(y*size+x)*4,large=noise(x/32,y/25),small=noise(x/7,y/5),grain=hash(x,y);
    const warp=noise(x/19,y/39)*14,layer=Math.sin((y+warp)*.16)*.12;
    const seam=Math.abs(Math.sin((y+warp)*.083+noise(x/55,y/42)*1.9));
    const vein=seam<.075?-.16:0,light=.43+large*.32+small*.17+(grain-.5)*.13+layer+vein;
    const moss=jungle?Math.max(0,noise(x/28+13,y/22+71)-.58)*1.5:0;
    data[i]=Math.min(255,Math.max(0,(jungle?166:158)*light-moss*22));
    data[i+1]=Math.min(255,Math.max(0,(jungle?162:159)*light+moss*9));
    data[i+2]=Math.min(255,Math.max(0,(jungle?136:153)*light-moss*20));data[i+3]=255;
  }
  return texture(data,size,size,true);
}

/** Four reusable alpha stamps: soft contact, dirt skirt, leak and rubbed paint. */
function grimeAtlas():THREE.DataTexture {
  const cell=96,w=cell*4,h=cell,data=new Uint8Array(w*h*4);
  for(let tile=0;tile<4;tile++)for(let y=0;y<cell;y++)for(let x=0;x<cell;x++){
    const u=x/(cell-1),v=y/(cell-1),dx=(u-.5)*2,dz=(v-.5)*2,r=Math.sqrt(dx*dx+dz*dz);
    const speckle=noise(x/7+tile*12,y/9+tile*17),fine=hash(x+tile*cell,y);
    let alpha=0,color=[12,15,16];
    if(tile===0)alpha=Math.pow(Math.max(0,1-r*r),2.3)*.62;
    else if(tile===1){alpha=Math.max(0,1-Math.abs(dz))*(.13+speckle*.26)*Math.min(1,u*8,(1-u)*8);color=[36,30,23]}
    else if(tile===2){
      const strand=Math.pow(noise(x/4+41,y/58+12),4);
      alpha=strand*(.16+speckle*.58)*Math.sin(Math.PI*u)*Math.sin(Math.PI*v);color=[37,28,20];
    }else {alpha=Math.max(0,1-r)*(.12+speckle*.31)*(fine>.12?1:.35);color=[23,27,26]}
    const i=(y*w+tile*cell+x)*4;
    data[i]=color[0];data[i+1]=color[1];data[i+2]=color[2];data[i+3]=Math.round(alpha*255);
  }
  return texture(data,w,h);
}

function cloudTexture():THREE.DataTexture {
  const size=96,data=new Uint8Array(size*size*4);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const dx=(x-size/2)/(size/2),dz=(y-size/2)/(size/2),falloff=Math.max(0,1-Math.sqrt(dx*dx+dz*dz));
    const puff=noise(x/17+13,y/15+29)*.55+noise(x/7,y/7)*.26+noise(x/37,y/37)*.19;
    const density=Math.max(0,puff-.34)*falloff*2.2,i=(y*size+x)*4;
    data[i]=201;data[i+1]=207;data[i+2]=209;data[i+3]=Math.round(Math.min(.7,density)*255);
  }
  return texture(data,size,size);
}

/** Original 512px organic ground: lichen, damp earth, pebbles and short blades. */
function earthTexture(gravel=false):THREE.DataTexture {
  const size=512,data=new Uint8Array(size*size*4);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const field=noise(x/76+19,y/69+29),patch=noise(x/24+37,y/29+53),grain=noise(x/3.1,y/2.7),fine=hash(x,y);
    const damp=Math.max(0,noise(x/41+83,y/31+11)-.6)*1.2;
    const moss=gravel?0:THREE.MathUtils.smoothstep(field*.6+patch*.4,.31,.67);
    const blade=!gravel&&noise(x/1.4+patch*8,y/7.3)>.68&&patch>.35?.1:0;
    const pebble=grain>.65?(grain-.65)*.43:grain<.27?-(.27-grain)*.23:0;
    const light=.76+patch*.23+grain*.17+(fine-.5)*.13+pebble-damp*.22+blade;
    const base=gravel?[110,103,81]:[87+moss*10,77+moss*25,54+moss*8];
    const i=(y*size+x)*4;
    data[i]=Math.min(255,base[0]*light);data[i+1]=Math.min(255,base[1]*light);data[i+2]=Math.min(255,base[2]*light);
    if(gravel){const u=x/(size-1),edge=Math.max(0,1-Math.pow(Math.abs(u*2-1),4));data[i+3]=Math.round(255*edge*(.56+patch*.44))}
    else data[i+3]=255;
  }
  return texture(data,size,size,true);
}

/**
 * Cosmetic relief, geology and restrained late-1990s sky rendering.
 * No light, collider, navigation point, door, pickup or simulation state is
 * changed. Solid scenery stays in existing wall volumes, above jump height,
 * or beyond the authoritative level boundary. Static pieces merge by material.
 */
export class EnhancedDressing {
  private readonly root=new THREE.Group();
  private readonly batches=new Map<THREE.Material,THREE.BufferGeometry[]>();
  private readonly materials=new Set<THREE.Material>();
  private readonly maps=new Set<THREE.Texture>();
  private readonly geometries=new Set<THREE.BufferGeometry>();
  private readonly object=new THREE.Object3D();
  private readonly cameraPosition=new THREE.Vector3();
  private sky?:THREE.Mesh<THREE.SphereGeometry,THREE.ShaderMaterial>;
  private clouds?:THREE.InstancedMesh;
  private disposed=false;
  private readonly chapter:number;
  private readonly grime:THREE.MeshBasicMaterial;
  private readonly steel:THREE.MeshLambertMaterial;
  private readonly dark:THREE.MeshLambertMaterial;
  private readonly rock:THREE.MeshStandardMaterial;

  constructor(private readonly scene:THREE.Scene,private readonly level:LevelData){
    this.root.name='enhanced-dressing';this.root.userData.cosmeticOnly=true;this.scene.add(this.root);
    this.chapter=level.chapterId??0;
    const rockMap=rockTexture(level.theme==='jungle');this.maps.add(rockMap);
    this.rock=this.material(new THREE.MeshStandardMaterial({map:rockMap,bumpMap:rockMap,bumpScale:.055,color:0xdadbd6,vertexColors:true,roughness:.96,metalness:0}));
    this.steel=this.material(new THREE.MeshLambertMaterial({color:level.theme==='jungle'?0x737264:0x69736f}));
    this.dark=this.material(new THREE.MeshLambertMaterial({color:level.theme==='jungle'?0x403e34:0x353d40}));
    const grimeMap=grimeAtlas();this.maps.add(grimeMap);
    this.grime=this.material(new THREE.MeshBasicMaterial({map:grimeMap,transparent:true,depthWrite:false,side:THREE.DoubleSide,forceSinglePass:true,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));
    this.buildRelief();this.buildGrounding();
    if(['district','docks','train','jungle'].includes(level.theme??'district'))this.buildSky();
    if(level.theme==='jungle'){this.buildCliffs();this.buildOrganicGround()}
    if(level.theme==='docks')this.buildCoast();
    if(this.chapter===0||level.theme==='tower')this.buildSkyline();
    this.flush();
  }

  private material<T extends THREE.Material>(value:T):T {this.materials.add(value);return value}
  private add(geometry:THREE.BufferGeometry,material:THREE.Material,x:number,y:number,z:number,rx=0,ry=0,rz=0){
    const matrix=new THREE.Matrix4().compose(new THREE.Vector3(x,y,z),new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz,'YXZ')),new THREE.Vector3(1,1,1));
    geometry.applyMatrix4(matrix);
    if(geometry.index){const flattened=geometry.toNonIndexed();geometry.dispose();geometry=flattened}
    if(!geometry.getAttribute('uv'))geometry.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(geometry.getAttribute('position').count*2),2));
    let batch=this.batches.get(material);if(!batch){batch=[];this.batches.set(material,batch)}batch.push(geometry);
  }
  private box(x:number,y:number,z:number,w:number,h:number,d:number,material=this.steel){this.add(new THREE.BoxGeometry(w,h,d),material,x,y,z)}
  private rod(a:THREE.Vector3,b:THREE.Vector3,r=.04,material=this.steel){
    const delta=b.clone().sub(a),mid=a.clone().add(b).multiplyScalar(.5),geometry=new THREE.CylinderGeometry(r,r,delta.length(),7);
    geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize()));this.add(geometry,material,mid.x,mid.y,mid.z);
  }
  private tileUV(geometry:THREE.BufferGeometry,tile:number){
    const uv=geometry.getAttribute('uv'),inset=1/384;
    for(let i=0;i<uv.count;i++)uv.setXY(i,tile*.25+inset+uv.getX(i)*(.25-inset*2),inset+uv.getY(i)*(1-inset*2));
  }
  private stain(x:number,y:number,z:number,w:number,h:number,tile:number,rx=0,ry=0){
    const geometry=new THREE.PlaneGeometry(w,h);this.tileUV(geometry,tile);this.add(geometry,this.grime,x,y,z,rx,ry);
  }
  private floor(x:number,z:number){return this.chapter===0&&z>-20&&z<4&&Math.abs(x)>10.5?.165:.047}

  private buildRelief(){
    const {walls}=this.level;
    walls.forEach((wall,index)=>{
      if((wall.y??0)>0||wall.h<2.4||wall.w<2&&wall.d<2)return;
      const horizontal=wall.w>wall.d,length=horizontal?wall.w:wall.d,thin=horizontal?wall.d:wall.w;
      if(thin>1.2)return; // No extra shape around cover islands or the reactor core.
      const lip=.025,base=.27,band=Math.min(wall.h-.17,2.93);
      if(horizontal){
        this.box(wall.x,base,wall.z,wall.w+.015,.13,wall.d+lip,this.dark);
        this.box(wall.x,band,wall.z,wall.w+.018,.075,wall.d+lip);
      }else{
        this.box(wall.x,base,wall.z,wall.w+lip,.13,wall.d+.015,this.dark);
        this.box(wall.x,band,wall.z,wall.w+lip,.075,wall.d+.018);
      }
      // The service line is high enough for a jumping player and lies against
      // its own wall; it never spans a real doorway or aisle.
      if(wall.h>=4&&length>6&&this.level.theme!=='jungle'){
        const y=Math.min(wall.h-.17,4.08),face=thin/2+.038;
        for(const side of [-1,1]){
          const start=horizontal?new THREE.Vector3(wall.x-length*.44,y,wall.z+side*face):new THREE.Vector3(wall.x+side*face,y,wall.z-length*.44);
          const end=horizontal?new THREE.Vector3(wall.x+length*.44,y,wall.z+side*face):new THREE.Vector3(wall.x+side*face,y,wall.z+length*.44);
          this.rod(start,end,.038,index%3?this.steel:this.dark);
          const clamps=Math.min(12,Math.floor(length/4));
          for(let i=0;i<clamps;i++){
            const offset=(i-(clamps-1)/2)*3.5;
            if(horizontal)this.box(wall.x+offset,y,wall.z+side*face,.065,.14,.12,this.dark);
            else this.box(wall.x+side*face,y,wall.z+offset,.12,.14,.065,this.dark);
          }
        }
      }
      const marks=Math.min(5,Math.floor(length/5));
      for(let i=0;i<marks;i++)for(const side of [-1,1]){
        const offset=(i-(marks-1)/2)*length/(marks+.8),height=1.15+hash(index,i)*.6,face=thin/2+.033;
        if(horizontal)this.stain(wall.x+offset,wall.h-height*.5-.2,wall.z+side*face,1.35,height,2,0,side>0?0:Math.PI);
        else this.stain(wall.x+side*face,wall.h-height*.5-.2,wall.z+offset,1.35,height,2,0,side>0?Math.PI/2:-Math.PI/2);
      }
    });
    // Existing opaque cover gets a subtle top rim, entirely within the block.
    for(const wall of walls)if((wall.y??0)===0&&wall.h>.75&&wall.h<2&&wall.w>1.5&&wall.d>1){
      this.box(wall.x,wall.h-.055,wall.z,wall.w-.02,.075,wall.d-.02,this.dark);
      for(const side of [-1,1])this.box(wall.x+side*(wall.w/2-.026),wall.h*.5,wall.z,.035,wall.h-.08,wall.d-.025);
    }
  }

  private buildGrounding(){
    for(const wall of this.level.walls){
      if((wall.y??0)>0||wall.h<.65)continue;
      const w=wall.w+.65,d=wall.d+.65;
      this.stain(wall.x,this.floor(wall.x,wall.z)-.002,wall.z,w,d,1,-Math.PI/2);
    }
    const dimensions:Record<string,[number,number]>={tank:[2.2,2.2],locker:[1.15,1.6],chair:[1.3,1.3],terminal:[1.45,1.2],console:[1.6,1.3],lamp:[.9,.9],car:[2.7,4.6],'lab-table':[4.8,2.5],power:[1.4,1.3]};
    for(const prop of this.level.props){
      const size=dimensions[prop.kind];if(!size)continue;
      this.stain(prop.x,this.floor(prop.x,prop.z)+.002,prop.z,size[0],size[1],0,-Math.PI/2,prop.rotation??0);
    }
  }

  private buildSky(){
    const jungle=this.level.theme==='jungle',night=this.level.theme==='train';
    const horizon=new THREE.Color(jungle?0xa8b8b6:night?0x435363:this.level.theme==='docks'?0x74848d:0x667580);
    const zenith=new THREE.Color(jungle?0x648799:night?0x1a2639:this.level.theme==='docks'?0x293c50:0x24364c);
    const material=this.material(new THREE.ShaderMaterial({
      side:THREE.BackSide,depthWrite:false,depthTest:false,fog:false,toneMapped:false,
      uniforms:{horizon:{value:horizon},zenith:{value:zenith}},
      vertexShader:'varying vec3 skyDirection; void main(){skyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader:'uniform vec3 horizon;uniform vec3 zenith;varying vec3 skyDirection;void main(){float h=smoothstep(-0.06,0.8,normalize(skyDirection).y);gl_FragColor=vec4(mix(horizon,zenith,h),1.0);\n#include <colorspace_fragment>\n}',
    }));
    const geometry=new THREE.SphereGeometry(1,40,18);this.geometries.add(geometry);
    this.sky=new THREE.Mesh(geometry,material);this.sky.name='muted-gradient-sky';this.sky.frustumCulled=false;this.sky.renderOrder=-1000;this.sky.scale.setScalar(98);this.root.add(this.sky);
    const cloudMap=cloudTexture();this.maps.add(cloudMap);
    const cloudMaterial=this.material(new THREE.MeshBasicMaterial({map:cloudMap,color:jungle?0xe6ebe7:0x9daebb,transparent:true,opacity:night?.17:.34,depthWrite:false,side:THREE.DoubleSide,forceSinglePass:true,fog:false,toneMapped:false}));
    const cloudGeometry=new THREE.PlaneGeometry(1,1);cloudGeometry.rotateX(-Math.PI/2);this.geometries.add(cloudGeometry);
    this.clouds=new THREE.InstancedMesh(cloudGeometry,cloudMaterial,8);this.clouds.name='sparse-high-clouds';this.clouds.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.clouds.frustumCulled=false;this.clouds.renderOrder=-950;this.root.add(this.clouds);
  }

  private rockGeometry(axis:'x'|'z',fixed:number,start:number,end:number,outward:number,seed:number,height=24){
    const columns=36,rows=8,positions:number[]=[],uvs:number[]=[],colors:number[]=[],indices:number[]=[];
    for(let row=0;row<=rows;row++)for(let col=0;col<=columns;col++){
      const t=col/columns,u=row/rows,along=THREE.MathUtils.lerp(start,end,t),ridge=height*(.74+noise(t*8+seed,seed*.4)*.54);
      const y=-1+u*ridge,wave=noise(t*11+seed,u*6)*2.7+Math.sin(t*13+u*4+seed)*1.2;
      const offset=outward*(u*6+wave+1.5),cross=fixed+offset;
      const x=axis==='x'?cross:along,z=axis==='x'?along:cross;
      positions.push(x,y,z);uvs.push((along-start)/5,y/4);
      const shade=.69+u*.24+hash(col+seed,row)*.07;
      colors.push(shade,shade,shade*.97);
      if(row<rows&&col<columns){
        const a=row*(columns+1)+col,b=a+1,c=a+columns+1,d=c+1,reverse=axis==='x'?outward>0:outward<0;
        indices.push(...(reverse?[a,b,c,b,d,c]:[a,c,b,b,c,d]));
      }
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.setIndex(indices);geometry.computeVertexNormals();
    return geometry;
  }
  private boulder(x:number,z:number,size:number,seed:number){
    const geometry=new THREE.IcosahedronGeometry(1,2),positions=geometry.getAttribute('position'),colors=new Float32Array(positions.count*3);
    for(let i=0;i<positions.count;i++){
      const vx=positions.getX(i),vy=positions.getY(i),vz=positions.getZ(i),distortion=.87+noise(vx*3+seed,vz*3+vy)*.26;
      positions.setXYZ(i,vx*size*distortion,vy*size*.7*distortion,vz*size*.9*distortion);
      const shade=.72+Math.max(0,vy)*.25;colors[i*3]=shade;colors[i*3+1]=shade;colors[i*3+2]=shade*.97;
    }
    geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.computeVertexNormals();this.add(geometry,this.rock,x,size*.45,z,0,seed*.73);
  }
  private buildCliffs(){
    const b=this.level.bounds;
    // Every base is at least seven metres outside the playable boundary.
    this.add(this.rockGeometry('x',b.minX-10,b.minZ-23,b.maxZ+23,-1,17,27),this.rock,0,0,0);
    this.add(this.rockGeometry('x',b.maxX+10,b.minZ-23,b.maxZ+23,1,33,31),this.rock,0,0,0);
    this.add(this.rockGeometry('z',b.minZ-12,b.minX-27,b.maxX+27,-1,49,34),this.rock,0,0,0);
    this.add(this.rockGeometry('z',b.maxZ+13,b.minX-27,b.maxX+27,1,61,24),this.rock,0,0,0);
    for(const side of [-1,1])for(let i=0;i<6;i++)this.boulder(side<0?b.minX-8:b.maxX+8,b.minZ+8+i*(b.maxZ-b.minZ-16)/5,2.8+hash(i,side)*2.1,i+side*19);
  }
  private buildCoast(){
    const b=this.level.bounds;
    // One distant escarpment leaves the seaward horizon open rather than
    // turning the harbour into an enclosed canyon.
    this.add(this.rockGeometry('x',b.minX-49,b.minZ-25,b.maxZ+30,-1,89,30),this.rock,0,0,0);
    this.add(this.rockGeometry('z',b.minZ-36,b.minX-35,b.maxX+38,-1,103,24),this.rock,0,0,0);
    for(let i=0;i<7;i++)this.boulder(b.minX-19-hash(i,71)*12,b.minZ+8+i*12,3+hash(i,9)*2.4,i+47);
  }
  private buildSkyline(){
    const b=this.level.bounds,material=this.material(new THREE.MeshLambertMaterial({color:0x394750,vertexColors:true}));
    for(const side of [-1,1])for(let i=0;i<15;i++){
      const x=side<0?b.minX-28-hash(i,side)*28:b.maxX+28+hash(i,side)*28,z=b.minZ-17+i*(b.maxZ-b.minZ+34)/14;
      const w=4+hash(i,4)*7,d=5+hash(i,8)*9,h=24+hash(i,14)*42,geometry=new THREE.BoxGeometry(w,h,d),positions=geometry.getAttribute('position'),colors=new Float32Array(positions.count*3);
      for(let j=0;j<positions.count;j++){
        const top=(positions.getY(j)+h/2)/h,shade=.64+top*.22;
        colors[j*3]=shade;colors[j*3+1]=shade;colors[j*3+2]=shade;
      }
      geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));this.add(geometry,material,x,h/2,z);
      this.box(x,h+.25,z,w+.15,.5,d+.15,this.dark);
      if(i%3===0)this.box(x+w*.24,h+2,z,.6,3.5,.6,this.dark);
    }
  }
  private flush(){
    for(const [material,parts]of this.batches){
      const geometry=mergeGeometries(parts,false);
      for(const part of parts)part.dispose();
      if(!geometry)throw new Error('Enhanced dressing geometry could not be merged');
      geometry.computeBoundingSphere();this.geometries.add(geometry);
      const mesh=new THREE.Mesh(geometry,material);mesh.name=material===this.rock?'distant-original-geology':material===this.grime?'surface-grime':'merged-surface-relief';
      mesh.userData.cosmeticOnly=true;if(material===this.grime)mesh.renderOrder=1;this.root.add(mesh);
    }
    this.batches.clear();
  }

  private buildOrganicGround(){
    const b=this.level.bounds,w=b.maxX-b.minX,d=b.maxZ-b.minZ,cx=(b.minX+b.maxX)/2,cz=(b.minZ+b.maxZ)/2;
    const earth=earthTexture();earth.name='original-moss-earth-512';earth.repeat.set(w/10,d/10);this.maps.add(earth);
    const earthMaterial=this.material(new THREE.MeshStandardMaterial({map:earth,bumpMap:earth,bumpScale:.026,roughness:1,metalness:0,vertexColors:true}));earthMaterial.name='organic-earth';
    const geometry=new THREE.PlaneGeometry(w,d,40,44);geometry.rotateX(-Math.PI/2);
    const positions=geometry.getAttribute('position'),colors=new Float32Array(positions.count*3);
    for(let i=0;i<positions.count;i++){
      const x=positions.getX(i)+cx,z=positions.getZ(i)+cz,v=.84+noise(x/13+97,z/16+31)*.2;
      colors[i*3]=v;colors[i*3+1]=v;colors[i*3+2]=v*.97;
    }
    geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));this.add(geometry,earthMaterial,cx,.025,cz);
    // A gravel ribbon follows the real main route and its two story branches.
    // It is a flat surface overlay; no tall foliage or new obstacle is added.
    const gravel=earthTexture(true);gravel.name='original-gravel-path-512';gravel.wrapS=THREE.ClampToEdgeWrapping;this.maps.add(gravel);
    const gravelMaterial=this.material(new THREE.MeshStandardMaterial({map:gravel,bumpMap:gravel,bumpScale:.035,roughness:1,metalness:0,transparent:true,depthWrite:false}));gravelMaterial.name='organic-gravel-path';
    const ribbon=(points:[number,number][],width:number)=>{
      const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,.029,z))),segments=72,p:number[]=[],uv:number[]=[],indices:number[]=[];
      let travelled=0,last=curve.getPoint(0);
      for(let i=0;i<=segments;i++){
        const t=i/segments,point=curve.getPoint(t),tangent=curve.getTangent(t),normal=new THREE.Vector3(-tangent.z,0,tangent.x).normalize();
        travelled+=point.distanceTo(last);last=point;
        const half=width*(.45+noise(i/9,points[0][0])*.12);
        for(const side of [-1,1]){p.push(point.x+normal.x*side*half,.029,point.z+normal.z*side*half);uv.push(side<0?0:1,travelled/6)}
        if(i<segments){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2)}
      }
      const mesh=new THREE.BufferGeometry();mesh.setAttribute('position',new THREE.Float32BufferAttribute(p,3));mesh.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));mesh.setIndex(indices);mesh.computeVertexNormals();this.add(mesh,gravelMaterial,0,0,0);
    };
    ribbon([[0,11],[0,-11],[-1,-19],[0,-38],[0,-53],[-1,-64],[-4,-73],[0,-88],[0,-95]],3.3);
    ribbon([[0,-30],[-11,-30],[-23,-30],[-38,-32]],2.9);
    ribbon([[0,-31],[11,-31],[23,-31],[39,-33]],2.9);
    // Small flagstone pads preserve the human outpost and temple thresholds.
    // They use their own merged material so distant rock meshes remain outside
    // bounds and their occupancy guarantee remains independently testable.
    const padMaterial=this.material(new THREE.MeshStandardMaterial({map:this.rock.map,bumpMap:this.rock.map,bumpScale:.025,color:0xb8bba4,roughness:.98,metalness:0}));
    for(const [x,z,pw,pd]of [[0,-10,8,5],[-20,-30,5,6],[18,-30,5,6],[31,-31,24,20],[0,-52,8,5],[0,-88,7,5]] as [number,number,number,number][]){
      const pad=new THREE.PlaneGeometry(pw,pd);pad.rotateX(-Math.PI/2);const uv=pad.getAttribute('uv');
      for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*pw/4,uv.getY(i)*pd/4);this.add(pad,padMaterial,x,.032,z);
    }
  }

  update(state:GameState,camera:THREE.Camera,_dt:number):void {
    if(this.disposed)return;
    camera.getWorldPosition(this.cameraPosition);
    const far=camera instanceof THREE.PerspectiveCamera?camera.far:110;
    if(this.sky){this.sky.position.copy(this.cameraPosition);this.sky.scale.setScalar(Math.min(400,far*.94))}
    if(this.clouds){
      const scale=Math.min(1.5,far/110),time=state.time;
      for(let i=0;i<8;i++){
        const a=i*TAU/8+hash(i,7)*.4,r=(34+hash(i,2)*26)*scale;
        this.object.position.set(this.cameraPosition.x+Math.cos(a)*r+Math.sin(time*.014+i)*2.3,this.cameraPosition.y+(39+hash(i,12)*9)*scale,this.cameraPosition.z+Math.sin(a)*r);
        this.object.rotation.set(0,hash(i,13)*TAU,0);this.object.scale.set((23+hash(i,3)*18)*scale,1,(11+hash(i,9)*16)*scale);this.object.updateMatrix();this.clouds.setMatrixAt(i,this.object.matrix);
      }
      this.clouds.instanceMatrix.needsUpdate=true;
    }
  }
  dispose():void {
    if(this.disposed)return;this.disposed=true;this.scene.remove(this.root);
    for(const geometry of this.geometries)geometry.dispose();for(const material of this.materials)material.dispose();for(const map of this.maps)map.dispose();
    this.geometries.clear();this.materials.clear();this.maps.clear();this.root.clear();
  }
}
