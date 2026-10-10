import * as THREE from 'three';

type SurfaceKind='brick'|'metal'|'concrete'|'crate'|'floor'|'labfloor'|'road'|'ceiling'|'door'|'fuel';
type RGB=readonly[number,number,number];
interface Recipe {size:number;color:RGB;metalness:number;bump:number;roughness:number;seed:number}
const RECIPES:Record<SurfaceKind,Recipe>={
 brick:{size:512,color:[131,117,110],metalness:0,bump:.07,roughness:.94,seed:11},
 metal:{size:256,color:[115,127,128],metalness:.34,bump:.028,roughness:.84,seed:19},
 concrete:{size:512,color:[143,143,129],metalness:0,bump:.075,roughness:.97,seed:23},
 crate:{size:256,color:[132,113,83],metalness:.03,bump:.05,roughness:.95,seed:31},
 floor:{size:256,color:[108,116,114],metalness:.24,bump:.025,roughness:.86,seed:37},
 labfloor:{size:256,color:[139,149,139],metalness:.05,bump:.019,roughness:.88,seed:43},
 road:{size:512,color:[102,107,104],metalness:0,bump:.035,roughness:.91,seed:53},
 ceiling:{size:256,color:[86,101,102],metalness:.22,bump:.026,roughness:.9,seed:61},
 door:{size:256,color:[91,120,110],metalness:.3,bump:.026,roughness:.87,seed:71},
 fuel:{size:256,color:[148,83,61],metalness:.2,bump:.022,roughness:.89,seed:79},
};
const clamp=(value:number,min=0,max=1)=>Math.max(min,Math.min(max,value));
const mix=(a:number,b:number,t:number)=>a+(b-a)*t;
const smooth=(value:number)=>{const t=clamp(value);return t*t*(3-2*t)};
const mod=(value:number,period:number)=>(value%period+period)%period;
const hash=(value:number)=>{let n=value|0;n=Math.imul(n^(n>>>16),0x45d9f3b);n=Math.imul(n^(n>>>16),0x45d9f3b);return ((n^(n>>>16))>>>0)/4294967295};

/** Smooth toroidal noise: samples and their derivatives meet at the tile edge. */
function periodicNoise(period:number,size:number,seed:number):(x:number,y:number)=>number {
 const grid=new Float32Array(period*period);for(let i=0;i<grid.length;i++)grid[i]=hash(i+seed*1009);
 return (x,y)=>{
  const u=x*period/size,v=y*period/size,ix=Math.floor(u),iy=Math.floor(v),tx=smooth(u-ix),ty=smooth(v-iy);
  const a=mod(iy,period)*period,b=mod(iy+1,period)*period,left=mod(ix,period),right=mod(ix+1,period);
  return mix(mix(grid[a+left],grid[a+right],tx),mix(grid[b+left],grid[b+right],tx),ty);
 };
}

function canvas(size:number):HTMLCanvasElement {const c=document.createElement('canvas');c.width=c.height=size;return c}
function filtered(texture:THREE.Texture,color=false):THREE.Texture {
 texture.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;
 texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;
 texture.generateMipmaps=true;texture.anisotropy=4;
 texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.needsUpdate=true;return texture;
}

/** Materials own their texture objects; disposing a renderer cannot poison another. */
function ownTextures(material:THREE.MeshStandardMaterial,textures:THREE.Texture[]):void {
 let released=false;material.addEventListener('dispose',()=>{if(released)return;released=true;for(const texture of textures)texture.dispose()});
}

/**
 * Original, deterministic surfaces with broad weathering and small relief.
 * The look is deliberately matte and filtered, like a rich late-1990s FPS tile,
 * rather than polished modern metal. No photographs, external assets or URLs.
 */
export function createSurfaceMaterial(kind:string):THREE.MeshStandardMaterial {
 const surface=(kind in RECIPES?kind:'metal') as SurfaceKind,recipe=RECIPES[surface],size=recipe.size;
 const albedo=canvas(size),bump=canvas(size),rough=canvas(size),ac=albedo.getContext('2d')!,bc=bump.getContext('2d')!,rc=rough.getContext('2d')!;
 const colorImage=ac.createImageData(size,size),heightImage=bc.createImageData(size,size),roughImage=rc.createImageData(size,size);
 const broad=periodicNoise(4,size,recipe.seed),cloud=periodicNoise(13,size,recipe.seed+17),grain=periodicNoise(47,size,recipe.seed+31);
 const unit=size/256;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const px=x/unit,py=y/unit,coarse=broad(x,y),medium=cloud(x,y),fine=grain(x,y),speckle=hash(x+y*size+recipe.seed*143);
  let height=.45+(fine-.5)*.065+(medium-.5)*.045;
  let value=1+(coarse-.5)*.15+(medium-.5)*.11+(fine-.5)*.085+(speckle-.5)*.032;
  let roughness=recipe.roughness+(fine-.5)*.055+(coarse-.5)*.03;
  let color:RGB=recipe.color;
  if(surface==='brick'){
   const row=Math.floor(py/32),bx=mod(px+(row%2)*32,64),by=mod(py,32),edge=Math.min(bx,64-bx,by,32-by);
   const bevel=smooth((edge-1.1)/3.1),stone=hash(row*19+Math.floor((px+(row%2)*32)/64)+recipe.seed);
   height=.18+bevel*(.4+(fine-.5)*.10+(medium-.5)*.085);
   value*=mix(.59,.92+stone*.19,bevel);
   if(edge<1.1){color=[82,87,81];roughness=.99}
   const worn=Math.max(0,medium-.75)*.34;value+=worn;height-=worn*.3;
  }else if(surface==='concrete'){
   const bx=mod(px,128),by=mod(py,128),edge=Math.min(bx,128-bx,by,128-by);
   const joint=smooth((edge-.65)/1.55);height=.23+joint*(.24+(medium-.5)*.09+(fine-.5)*.075);
   value*=mix(.63,1,joint);
   // A fine, meandering hairline remains shallow instead of a tiled black scar.
   const crack=Math.abs(mod(px+Math.sin(py*Math.PI/64)*4,128)-83);
   if(crack<.5&&py>31&&py<96){height-=.085;value*=.82}
   const mineral=clamp((medium-.56)*2.4)*.045;value+=mineral;
  }else if(surface==='crate'){
   const board=mod(px,32),edge=Math.min(board,32-board),plank=hash(Math.floor(px/32)+recipe.seed);
   const grainLine=Math.sin(px*Math.PI*2*38/256+medium*5+Math.sin(py*Math.PI*2/256)*.8)*.035;
   height=.43+(fine-.5)*.06+grainLine;value*=.93+plank*.13+grainLine*2;
   if(edge<1.2){height=.16;value*=.59}
   const band=Math.min(mod(px,128),mod(py,128));
   if(band<5){color=[80,91,89];height=.65+(fine-.5)*.035;value=.82+medium*.19;roughness=.85}
  }else if(surface==='road'){
   const stone=(fine-.5)*.12+(speckle-.5)*.047;height=.47+stone+(medium-.5)*.035;
   value=1+(medium-.5)*.13+(fine-.5)*.2+(speckle-.5)*.075;
   // Dark wet patches are sparse and broad. They never turn the asphalt chrome.
   const damp=smooth((coarse-.61)/.24);roughness=mix(.96,.73,damp)+(fine-.5)*.03;value*=1-damp*.085;
   if(speckle>.988){value+=.075;height+=.035}
  }else{
   const bx=mod(px,128),by=mod(py,128),edge=Math.min(bx,128-bx,by,128-by),bevel=smooth((edge-.9)/2.7);
   height=.2+bevel*(.27+(fine-.5)*.035);value*=mix(.54,1,bevel);
   // Round recessed bolts and their raised steel heads share the same physical
   // height field, so angled light gives the relief rather than painted outlines.
   const boltX=Math.min(Math.abs(bx-10),Math.abs(bx-118)),boltY=Math.min(Math.abs(by-10),Math.abs(by-118)),bolt=Math.hypot(boltX,boltY);
   if(bolt<3.9){const head=smooth((3.1-bolt)/.8);height=mix(.18,.63,head);value*=mix(.66,1.07,head);roughness=.78}
   const scratch=Math.abs(Math.sin(px*Math.PI*2*4/256+py*Math.PI*2/256+medium*.1));
   if(scratch<.018&&fine>.66){value+=.07;height-=.023}
   const oxidation=clamp((cloud(x,y)-.66)*3.2)*clamp((.25-coarse)*4);
   if(oxidation>0){color=[mix(color[0],141,oxidation*.5),mix(color[1],101,oxidation*.5),mix(color[2],73,oxidation*.5)];height-=oxidation*.03;roughness+=oxidation*.035}
   if(surface==='floor'){
    const diamond=Math.min(Math.abs(mod(px+py,19)-9.5),Math.abs(mod(px-py,19)-9.5));
    const tread=(1-smooth((diamond-.5)/1.15))*bevel*.055;height+=tread;value+=tread*.55;
   }else if(surface==='labfloor'){
    roughness=.9+(medium-.5)*.035;height=.24+bevel*(.21+(fine-.5)*.018);value+=coarse*.035;
   }else if(surface==='ceiling'){
    if(bx>32&&bx<96&&by>32&&by<96){const slat=mod(py,9);height=slat<2?.16:.4;value*=slat<2?.56:.85}
   }else if(surface==='door'){
    if(bx>21&&bx<107&&by>18&&by<106){const slat=mod(py,11);height=slat<2?.19:.46;value*=slat<2?.64:.97}
    if(py>222&&py<242){const stripe=mod(px+py,32)<16;color=stripe?[184,158,76]:[47,57,58];value=.91+fine*.07;height=.49;roughness=.93}
   }else if(surface==='fuel'){
    const band=Math.min(Math.abs(py-20),Math.abs(py-90),Math.abs(py-234));
    if(band<4){color=[66,77,77];height=.66;value=.84+fine*.13;roughness=.84}
    else{height=.43+(fine-.5)*.027;value=1+(medium-.5)*.17+(fine-.5)*.07}
   }
  }
  const i=(y*size+x)*4;
  for(let channel=0;channel<3;channel++){colorImage.data[i+channel]=Math.round(clamp(color[channel]*value,0,255));heightImage.data[i+channel]=Math.round(clamp(height)*255);roughImage.data[i+channel]=Math.round(clamp(roughness,.7,.99)*255)}
  colorImage.data[i+3]=heightImage.data[i+3]=roughImage.data[i+3]=255;
 }
 ac.putImageData(colorImage,0,0);bc.putImageData(heightImage,0,0);rc.putImageData(roughImage,0,0);
 if(surface==='fuel'){
  // Original paint-only labels do not become implausibly embossed in the bump map.
  ac.fillStyle='#d1b470';ac.fillRect(79,113,98,69);ac.fillStyle='#39403d';ac.fillRect(84,118,88,59);
  ac.fillStyle='#dbc18a';ac.textAlign='center';ac.font='bold 18px monospace';ac.fillText('FUEL 09',128,144);ac.font='bold 11px monospace';ac.fillText('AXIOM',128,164);
 }
 const map=filtered(new THREE.CanvasTexture(albedo),true),bumpMap=filtered(new THREE.CanvasTexture(bump)),roughnessMap=filtered(new THREE.CanvasTexture(rough));
 const material=new THREE.MeshStandardMaterial({map,bumpMap,bumpScale:recipe.bump,roughnessMap,roughness:1,metalness:recipe.metalness});
 material.name=`fossil-surface-${surface}`;material.userData.fossilSurface=true;ownTextures(material,[map,bumpMap,roughnessMap]);return material;
}

/**
 * Upgrade authored Lambert/Phong scenery without changing painting or blending.
 * Call once per distinct source material in the renderer; no global cache retains
 * disposed GPU resources. Basic materials (signs, lamps, effects) stay unlit.
 */
export function enrichSurfaceMaterial(source:THREE.Material):THREE.Material {
 // Three's type flags also work when a harness, plugin or loader has a second
 // Three module instance. `instanceof` would silently leave those maps pixelated.
 const material=source as THREE.MeshLambertMaterial|THREE.MeshPhongMaterial;
 if(!('isMeshLambertMaterial' in material)&&!('isMeshPhongMaterial' in material))return source;
 const phong='isMeshPhongMaterial' in material;
 const owned:THREE.Texture[]=[],copies=new Map<THREE.Texture,Map<boolean,THREE.Texture>>();
 const clone=(texture:THREE.Texture|null,color=false)=>{
  if(!texture)return null;let versions=copies.get(texture);if(!versions){versions=new Map();copies.set(texture,versions)}
  const existing=versions.get(color);if(existing)return existing;
  const copy=texture.clone();filtered(copy,color);copy.wrapS=texture.wrapS;copy.wrapT=texture.wrapT;versions.set(color,copy);owned.push(copy);return copy;
 };
 const next=new THREE.MeshStandardMaterial({
  color:material.color.clone(),map:clone(material.map,true),alphaMap:clone(material.alphaMap),
  emissive:material.emissive.clone(),emissiveIntensity:material.emissiveIntensity,emissiveMap:clone(material.emissiveMap,true),
  transparent:material.transparent,opacity:material.opacity,alphaTest:material.alphaTest,side:material.side,
  depthWrite:material.depthWrite,depthTest:material.depthTest,vertexColors:material.vertexColors,flatShading:material.flatShading,
  wireframe:material.wireframe,wireframeLinewidth:material.wireframeLinewidth,fog:material.fog,
  roughness:phong ? clamp(.9-Math.log2(material.shininess+1)*.037,.66,.94) : .94,metalness:phong ? .2 : .035,
 });
 next.name=material.name;next.blending=material.blending;next.blendSrc=material.blendSrc;next.blendDst=material.blendDst;next.blendEquation=material.blendEquation;
 next.toneMapped=material.toneMapped;next.visible=material.visible;next.colorWrite=material.colorWrite;next.premultipliedAlpha=material.premultipliedAlpha;next.alphaToCoverage=material.alphaToCoverage;next.dithering=material.dithering;
 next.polygonOffset=material.polygonOffset;next.polygonOffsetFactor=material.polygonOffsetFactor;next.polygonOffsetUnits=material.polygonOffsetUnits;
 next.clippingPlanes=material.clippingPlanes;next.clipIntersection=material.clipIntersection;next.clipShadows=material.clipShadows;next.shadowSide=material.shadowSide;
 next.userData={...material.userData,fossilSurfaceEnriched:true};
 if(material.bumpMap){next.bumpMap=clone(material.bumpMap);next.bumpScale=material.bumpScale}
 if(material.normalMap){next.normalMap=clone(material.normalMap);next.normalScale.copy(material.normalScale)}
 ownTextures(next,owned);return next;
}
