import * as THREE from 'three';
import type {EnemyKind} from './types';

/** Original coherent 256px surfaces, made from pigmentation, pores and wear. */
export function createCreatureTexture(kind:EnemyKind,color:number):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
 const size=canvas.width,ctx=canvas.getContext('2d')!;
 // The IDs are shared with the rig and renderer's surface classifications.
 const palettes:Record<EnemyKind,Record<number,number>>={
  raptor:{[0x60794b]:0x9c9567,[0x9baf74]:0xd7c9a4,[0x958252]:0xa99265,[0xc4ae73]:0xdfcba2},
  soldier:{[0xa18c70]:0xc7aa93,[0x496276]:0x8d9cab,[0x202e39]:0x3c4854,[0x80938e]:0xb9c4c5},
  mutant:{[0x86965e]:0xb7b5a0,[0x4e5d43]:0x939478,[0x788375]:0x7b8d89},
  brute:{[0x9a6f64]:0xb48e7a,[0x7b383d]:0xc2b393,[0x788375]:0x8b8176},
 };
 const painted=palettes[kind][color]??color,r=(painted>>16)&255,g=(painted>>8)&255,b=painted&255;
 const clamp=(n:number)=>Math.max(0,Math.min(255,n));
 const shade=(value:number,offset=0)=>`rgb(${clamp(Math.round(r*value+offset))},${clamp(Math.round(g*value+offset))},${clamp(Math.round(b*value+offset))})`;
 const hash=(x:number,y:number,salt=0)=>{let n=Math.imul(x^color,374761393)+Math.imul(y+salt,668265263);n=Math.imul(n^(n>>>13),1274126177);return ((n^(n>>>16))>>>0)/4294967296};
 const noise=(u:number,v:number,frequency:number,salt=0)=>{
  const x=u*frequency,y=v*frequency,ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy,sx=fx*fx*(3-2*fx),sy=fy*fy*(3-2*fy);
  const a=hash((ix+frequency)%frequency,(iy+frequency)%frequency,salt),bb=hash((ix+1+frequency)%frequency,(iy+frequency)%frequency,salt),c=hash((ix+frequency)%frequency,(iy+1+frequency)%frequency,salt),d=hash((ix+1+frequency)%frequency,(iy+1+frequency)%frequency,salt);
  return a+(bb-a)*sx+(c-a+(a-bb-c+d)*sx)*sy;
 };
 const flesh=(kind==='mutant'&&color===0x86965e)||(kind==='brute'&&color===0x9a6f64)||(kind==='soldier'&&color===0xa18c70);
 const reptile=kind==='raptor',belly=reptile&&(color===0x9baf74||color===0xc4ae73),cloth=kind==='soldier'&&color===0x202e39;
 const image=ctx.createImageData(size,size);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=x/size,v=y/size,index=(y*size+x)*4;
  const broad=noise(u,v,4,19),mottle=noise(u,v,13,71),grain=noise(u,v,48,137),pore=hash(x,y,221);
  let value=.9+broad*.15+(mottle-.5)*.09+(grain-.5)*.045+(pore-.5)*.025,red=0,green=0,blue=0;
  if(reptile){
   if(belly){
    const row=Math.floor(y/15),rowY=(y%15)/15,curve=Math.cos(u*Math.PI*8+row*.43)*.09;
    const crease=Math.exp(-Math.pow((rowY-.09-curve)*17,2));
    value+=.025*Math.sin(rowY*Math.PI)-crease*.125;
   }else{
    // Staggered rounded scales have a narrow recessed rim and varied pigmentation.
    const row=Math.floor(y/8),sx=x+(row%2)*4,col=Math.floor(sx/8),seed=hash(col,row,379),cy=4+(seed-.5)*.6,cx=4+(hash(col,row,383)-.5)*.9;
    const dx=((sx%8)-cx)/3.65,dy=((y%8)-cy)/3.1,edge=dx*dx+dy*dy;
    value+=(seed-.5)*.08-Math.exp(-Math.pow((edge-.92)*5,2))*.085;
    if(edge<.8)value+=Math.max(0,-dy)*.024;
    const band=Math.sin(v*Math.PI*10+Math.sin(u*Math.PI*4)*1.1),dorsal=.3+.7*Math.pow(Math.abs(Math.sin(u*Math.PI*2)),3);
    if(band>.32)value-=Math.pow((band-.32)/.68,1.3)*dorsal*.19;
    red+=(broad-.5)*7;green+=(mottle-.5)*8;blue-=3;
   }
  }else if(flesh){
   // Irregular subcutaneous color is continuous rather than stamped pixel patches.
   value+=(noise(u,v,25,447)-.5)*.07;
   if(pore>.963)value-=.085;
   const bruise=Math.max(0,noise(u,v,7,541)-.64)*2.2;
   if(kind!=='soldier'){red+=bruise*12;green-=bruise*19;blue+=bruise*4;}
   const striation=Math.sin(u*Math.PI*22+Math.sin(v*Math.PI*4)*.72);
   value+=striation*.018;
  }else if(cloth){
   const thread=((x+y)%2?1:-1)*.021,fold=Math.sin(u*Math.PI*10+Math.sin(v*Math.PI*4)*.67);
   value+=thread+fold*.054;
  }else{
   value=.96+(broad-.5)*.1+(grain-.5)*.06+(pore-.5)*.032;
   // Fine oxide in recesses and a subtly brushed manufactured finish.
   value+=Math.sin(x*.81+y*.14)*.012;
   if(mottle<.28){red+=8;green-=3;blue-=8;}
  }
  image.data[index]=clamp(Math.round(r*value+red));image.data[index+1]=clamp(Math.round(g*value+green));image.data[index+2]=clamp(Math.round(b*value+blue));image.data[index+3]=255;
 }
 ctx.putImageData(image,0,0);
 const stroke=(points:[number,number][],width:number,fill:string)=>{ctx.strokeStyle=fill;ctx.lineWidth=width;ctx.lineCap=ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(...points[0]);for(let i=1;i<points.length;i++){const prior=points[i-1],point=points[i];ctx.quadraticCurveTo(prior[0],prior[1],(prior[0]+point[0])/2,(prior[1]+point[1])/2)}ctx.lineTo(...points.at(-1)!);ctx.stroke();};
 if(reptile&&!belly){
  ctx.globalAlpha=.37;
  for(let i=0;i<3;i++){const x=137+i*13;stroke([[x,122],[x-2,139],[x+5,157],[x+6,180]],2.6,'#625d43');stroke([[x+1,122],[x,140],[x+7,158],[x+8,180]],1,'#d7c49b');}
  ctx.globalAlpha=1;
 }else if(flesh){
  if(kind!=='soldier'){
   // A small number of branching vessels follow the underlying muscle direction.
   ctx.globalAlpha=.24;
   for(let i=0;i<4;i++){
    const x=25+i*61;stroke([[x,14],[x+6,56],[x-8,91],[x+1,139],[x-3,213]],1.4,kind==='brute'?'#765050':'#5c7563');
    stroke([[x+2,68],[x+22,89],[x+28,112]],1,'#627268');stroke([[x-4,150],[x-24,169],[x-28,188]],.9,'#74685d');
   }
   ctx.globalAlpha=.62;
   const scars=[[[52,39],[61,76],[56,103]],[[173,132],[162,168],[173,209]]] as [number,number][][];
   for(const path of scars){stroke(path,3.2,'#785949');stroke(path.map(([x,y])=>[x+1.2,y] as [number,number]),1.2,'#d0b9a3');
    for(let i=1;i<5;i++){const t=i/5,x=path[0][0]*(1-t)+path.at(-1)![0]*t,y=path[0][1]*(1-t)+path.at(-1)![1]*t;stroke([[x-4,y-1],[x+4,y+1]],.9,'#514d45');}
   }
   ctx.globalAlpha=1;
  }else{
   ctx.globalAlpha=.34;stroke([[86,58],[82,98],[91,138]],1.3,'#916d5e');ctx.globalAlpha=1;
  }
 }else if(cloth){
  for(const x of [21,234]){stroke([[x,0],[x+3,76],[x-1,171],[x,256]],2,shade(.63));stroke([[x+2,0],[x+5,76],[x+1,171],[x+2,256]],.8,shade(1.12));}
  ctx.strokeStyle=shade(1.18);ctx.lineWidth=1;ctx.setLineDash([2.1,2.6]);ctx.beginPath();ctx.moveTo(28,0);ctx.lineTo(28,256);ctx.moveTo(229,0);ctx.lineTo(229,256);ctx.stroke();ctx.setLineDash([]);
 }else{
  // Flat paint, chamfer catches, edge rub and hardware labels read at any scale.
  ctx.strokeStyle=shade(.58);ctx.lineWidth=3;ctx.strokeRect(7,7,242,242);ctx.strokeStyle=shade(1.25);ctx.lineWidth=1;ctx.strokeRect(9,9,238,238);
  ctx.globalAlpha=.15;ctx.fillStyle='#21343b';ctx.fillRect(42,34,173,93);ctx.globalAlpha=1;
  ctx.strokeStyle=shade(.68);ctx.lineWidth=1.3;ctx.strokeRect(43,35,171,91);
  for(const x of [17,237])for(const y of [17,237]){ctx.fillStyle=shade(.48);ctx.beginPath();ctx.arc(x,y,3.1,0,Math.PI*2);ctx.fill();stroke([[x-1.5,y-1],[x+1.5,y-1]],1,shade(1.3));}
  ctx.globalAlpha=.66;ctx.fillStyle=kind==='soldier'?'#734b51':'#77614b';ctx.fillRect(27,176,202,23);ctx.globalAlpha=.45;ctx.fillStyle='#cfb481';ctx.fillRect(29,178,198,2);ctx.globalAlpha=1;
  ctx.font='bold 12px monospace';ctx.fillStyle=shade(.55);ctx.fillText(kind==='soldier'?'AXIOM / 09':'SUBJECT / AX',54,76);ctx.fillStyle=shade(1.28);ctx.fillText(kind==='soldier'?'AXIOM / 09':'SUBJECT / AX',54,75);
  for(let i=0;i<44;i++){const x=11+hash(i,17,877)*233,y=11+hash(i,31,883)*233,length=2+hash(i,43,887)*10;ctx.globalAlpha=.2+hash(i,53)*.3;stroke([[x,y],[x+length,y-.3-length*.16]],.7,shade(1.5));}
  ctx.globalAlpha=1;
 }
 const texture=new THREE.CanvasTexture(canvas);texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.generateMipmaps=true;texture.colorSpace=THREE.SRGBColorSpace;
 return texture;
}
