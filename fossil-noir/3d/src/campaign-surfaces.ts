import * as THREE from 'three';
import {createSurfaceMaterial,enrichSurfaceMaterial} from './surface-materials';

type Kind='stone'|'plaster'|'wood'|'container'|'server'|'bark'|'leaf'|'water'|'archive';
type RGB=readonly[number,number,number];
const COLORS:Record<Kind,RGB>={stone:[146,145,121],plaster:[177,168,147],wood:[132,105,79],container:[143,104,77],server:[68,88,94],bark:[105,92,70],leaf:[74,112,82],water:[65,92,104],archive:[121,122,108]};
const clamp=(n:number,a=0,b=1)=>Math.max(a,Math.min(b,n));
const mod=(n:number,p:number)=>(n%p+p)%p;
const smooth=(n:number)=>{const t=clamp(n);return t*t*(3-2*t)};
const hash=(seed:number)=>{let n=seed|0;n=Math.imul(n^(n>>>16),0x45d9f3b);n=Math.imul(n^(n>>>16),0x45d9f3b);return ((n^(n>>>16))>>>0)/4294967295};
function noise(period:number,size:number,seed:number){
 const values=new Float32Array(period*period);for(let i=0;i<values.length;i++)values[i]=hash(i+seed*521);
 return (x:number,y:number)=>{const u=x*period/size,v=y*period/size,ix=Math.floor(u),iy=Math.floor(v),tx=smooth(u-ix),ty=smooth(v-iy),a=mod(iy,period)*period,b=mod(iy+1,period)*period,l=mod(ix,period),r=mod(ix+1,period);return (values[a+l]+(values[a+r]-values[a+l])*tx)*(1-ty)+(values[b+l]+(values[b+r]-values[b+l])*tx)*ty};
}
function finish(map:THREE.Texture,color=false){map.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;map.magFilter=THREE.LinearFilter;map.minFilter=THREE.LinearMipmapLinearFilter;map.generateMipmaps=true;map.anisotropy=4;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.needsUpdate=true;return map}
function own(material:THREE.Material,maps:THREE.Texture[]){let disposed=false;material.addEventListener('dispose',()=>{if(disposed)return;disposed=true;for(const map of maps)map.dispose()})}

/** Keep authored UV animation: callbacks mutate vectors, not texture ownership. */
function uv(map:THREE.Texture,source:THREE.Texture|null){
 if(!source)return;map.wrapS=source.wrapS;map.wrapT=source.wrapT;
 map.offset=source.offset;map.repeat=source.repeat;map.center=source.center;
 map.rotation=source.rotation;map.flipY=source.flipY;map.channel=source.channel;
 map.matrixAutoUpdate=source.matrixAutoUpdate;map.matrix.copy(source.matrix);map.needsUpdate=true;
}

function detailed(kind:Kind):THREE.MeshStandardMaterial {
 const size=kind==='stone'?512:256,unit=size/256,base=COLORS[kind];
 const canvases=Array.from({length:3},()=>{const c=document.createElement('canvas');c.width=c.height=size;return c});
 const contexts=canvases.map(c=>c.getContext('2d')!),images=contexts.map(c=>c.createImageData(size,size));
 const seed=Object.keys(COLORS).indexOf(kind)*19+131,broad=noise(5,size,seed),cloud=noise(17,size,seed+37),fine=noise(57,size,seed+83);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const px=x/unit,py=y/unit,large=broad(x,y),medium=cloud(x,y),small=fine(x,y),dust=hash(x+y*size+seed*127);
  let rgb:RGB=base,height=.43+(small-.5)*.07+(medium-.5)*.05;
  let value=1+(large-.5)*.16+(medium-.5)*.13+(small-.5)*.07+(dust-.5)*.035,roughness=.94;
  if(kind==='stone'){
   // Irregular strata give temple masonry mineral structure rather than a
   // stretched 64px brick grid. Worn bed joints remain smoothly tileable.
   const layer=mod(py+Math.sin(px*Math.PI*2/128)*1.9,64),edge=Math.min(layer,64-layer),bed=smooth((edge-.8)/2.3);
   const strata=Math.sin(py*Math.PI*2*14/256+medium*2.3)*.032;
   height=.15+bed*(.34+(medium-.5)*.13+(small-.5)*.09+strata);
   value*=.63+bed*.37;value+=strata*.7;
   const moss=smooth((large-.66)/.22)*smooth((medium-.43)/.38)*.16;rgb=[base[0]*(1-moss*.44),base[1]*(1-moss*.15),base[2]*(1-moss*.32)];roughness=.97;
  }else if(kind==='plaster'){
   const peel=smooth((medium-.68)/.17)*smooth((large-.48)/.35);
   height=.44+(small-.5)*.047+(dust-.5)*.022-peel*.075;
   value=1+(large-.5)*.11+(medium-.5)*.10+(small-.5)*.055-peel*.065;
   rgb=[base[0]-peel*13,base[1]-peel*10,base[2]-peel*7];roughness=.97;
  }else if(kind==='wood'||kind==='bark'){
   const fibre=Math.sin(px*Math.PI*2*41/256+medium*4.6+Math.sin(py*Math.PI*2/256)*1.2);
   const furrow=Math.sin(px*Math.PI*2*13/256+large*4);
   height=.42+fibre*.035+(medium-.5)*.045;value+=fibre*.075+furrow*.037;
   if(kind==='wood'){
    const board=mod(px,32),edge=Math.min(board,32-board),bevel=smooth((edge-.35)/1.05);
    height=.19+bevel*(height-.19);value*=.64+bevel*.36;
    const tint=hash(Math.floor(px/32)+seed);rgb=[base[0]*(.94+tint*.12),base[1]*(.94+tint*.12),base[2]*(.94+tint*.12)];
   }else{const ridge=smooth((furrow+.52)/.35);height-=ridge*.065;value*=1-ridge*.12}roughness=.97;
  }else if(kind==='container'){
   const corrugation=Math.cos(px*Math.PI*2*16/256),corrosion=smooth((medium-.61)/.22)*smooth((large-.48)/.29);
   height=.44+corrugation*.065+(small-.5)*.024-corrosion*.032;value+=corrugation*.025-corrosion*.06;
   rgb=[base[0]+corrosion*12,base[1]-corrosion*11,base[2]-corrosion*12];
   const seam=Math.min(mod(py,128),128-mod(py,128));if(seam<1.2){height=.26;value*=.7}roughness=.91+corrosion*.055;
  }else if(kind==='server'||kind==='archive'){
   const bx=mod(px,64),by=mod(py,32),edge=Math.min(bx,64-bx,by,32-by),bevel=smooth((edge-.7)/1.6);
   height=.19+bevel*.27;value*=.57+bevel*.43;
   if(kind==='server'){
    if(bx>7&&bx<43&&by>7&&by<24){const slit=mod(py,4);if(slit<1.2){height=.15;value*=.59}else{height=.42;value*=.9}}
    if(bx>48&&bx<56&&by>8&&by<12){rgb=[140,184,166];height=.47;value=.86}
    if(bx>48&&bx<56&&by>18&&by<21){rgb=[185,159,99];height=.47;value=.74}roughness=.88;
   }else{
    const paper=hash(Math.floor(px/64)+Math.floor(py/32)*11+seed);rgb=paper>.3?[149+paper*19,141+paper*15,116+paper*16]:[93,108,104];
    if(bx>10&&bx<53&&by>8&&by<23){rgb=[178,166,138];height=.475;value=.92+(small-.5)*.08}
    if(bx>14&&bx<47&&by>12&&by<18&&mod(py,3)<1){rgb=[81,91,84];value=.94}roughness=.96;
   }
  }else if(kind==='leaf'){
   // Broad living color masses work across crown geometry, fine veins add
   // close detail without turning a whole tree into repeated leaf postage stamps.
   const veins=Math.sin(px*Math.PI*2*19/256+medium*3)*Math.sin(py*Math.PI*2*13/256+large*2);
   height=.43+(small-.5)*.04+veins*.018;value=1+(large-.5)*.23+(medium-.5)*.2+(small-.5)*.10;
   rgb=[base[0]+medium*8,base[1]+large*13,base[2]-medium*4];roughness=.94;
  }else if(kind==='water'){
   const ripple=Math.sin(py*Math.PI*2*12/256+large*2.8)+Math.sin(px*Math.PI*2*7/256+medium*2.4)*.37;
   height=.45+ripple*.028+(small-.5)*.007;value=1+(large-.5)*.1+ripple*.037;
   roughness=.79+(medium-.5)*.06;
  }
  const i=(y*size+x)*4;
  for(let channel=0;channel<3;channel++){images[0].data[i+channel]=Math.round(clamp(rgb[channel]*value,0,255));images[1].data[i+channel]=Math.round(clamp(height)*255);images[2].data[i+channel]=Math.round(clamp(roughness,.72,.99)*255)}
  for(const image of images)image.data[i+3]=255;
 }
 contexts.forEach((context,index)=>context.putImageData(images[index],0,0));
 if(kind==='archive'){
  const g=contexts[0];g.font='bold 6px monospace';g.fillStyle='#535c54';g.textAlign='left';
  for(let row=0;row<8;row++)for(let col=0;col<4;col++)g.fillText(`09-${String(row*4+col+1).padStart(2,'0')}`,col*64+17,row*32+20);
 }
 const maps=canvases.map((c,i)=>finish(new THREE.CanvasTexture(c),i===0));maps[0].name=`campaign-surface:${kind}`;
 const bumpScale=kind==='water'?.013:kind==='leaf'?.022:kind==='bark'?.058:kind==='stone'?.075:.03;
 const material=new THREE.MeshStandardMaterial({map:maps[0],bumpMap:maps[1],bumpScale,roughnessMap:maps[2],roughness:1,metalness:kind==='container'?.16:kind==='server'?.2:0});own(material,maps);return material;
}

/** Original detailed campaign maps, with the source's authored palette and UVs. */
export function createCampaignSurface(kind:string,source:THREE.MeshLambertMaterial|THREE.MeshPhongMaterial):THREE.MeshStandardMaterial {
 if(['window','hazard','screen'].includes(kind)||!(kind==='panel'||kind in COLORS)){
  const kept=enrichSurfaceMaterial(source) as THREE.MeshStandardMaterial;
  for(const map of [kept.map,kept.bumpMap,kept.roughnessMap])if(map)uv(map,source.map);if(kept.emissiveMap)uv(kept.emissiveMap,source.emissiveMap);return kept;
 }
 const next=kind==='panel'?createSurfaceMaterial('metal'):detailed(kind as Kind),extras:THREE.Texture[]=[];
 next.color.copy(source.color);next.emissive.copy(source.emissive);next.emissiveIntensity=source.emissiveIntensity;
 next.transparent=source.transparent;next.opacity=source.opacity;next.alphaTest=source.alphaTest;next.side=source.side;
 next.depthWrite=source.depthWrite;next.depthTest=source.depthTest;next.vertexColors=source.vertexColors;next.flatShading=source.flatShading;next.fog=source.fog;
 next.toneMapped=source.toneMapped;next.visible=source.visible;next.colorWrite=source.colorWrite;next.premultipliedAlpha=source.premultipliedAlpha;
 next.blending=source.blending;next.blendSrc=source.blendSrc;next.blendDst=source.blendDst;next.blendEquation=source.blendEquation;
 next.polygonOffset=source.polygonOffset;next.polygonOffsetFactor=source.polygonOffsetFactor;next.polygonOffsetUnits=source.polygonOffsetUnits;
 next.name=source.name;next.userData={...source.userData,fossilCampaignSurface:kind};
 for(const map of [next.map,next.bumpMap,next.roughnessMap])if(map)uv(map,source.map);
 if(source.emissiveMap){
  if(source.emissiveMap===source.map)next.emissiveMap=next.map;
  else{next.emissiveMap=finish(source.emissiveMap.clone(),true);uv(next.emissiveMap,source.emissiveMap);extras.push(next.emissiveMap)}
 }
 if(source.alphaMap){next.alphaMap=finish(source.alphaMap.clone());uv(next.alphaMap,source.alphaMap);extras.push(next.alphaMap)}
 own(next,extras);return next;
}
