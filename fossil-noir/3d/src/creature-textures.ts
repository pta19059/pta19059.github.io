import * as THREE from 'three';
import type {EnemyKind} from './types';

/** Original pixel-painted surfaces, deterministic and independent of any game assets. */
export function createCreatureTexture(kind:EnemyKind,color:number):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=kind==='raptor'?128:64;
 const size=canvas.width;
 const ctx=canvas.getContext('2d')!;
 const r=(color>>16)&255,g=(color>>8)&255,b=color&255;
 const shade=(factor:number,offset=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(r*factor+offset)))},${Math.max(0,Math.min(255,Math.round(g*factor+offset)))},${Math.max(0,Math.min(255,Math.round(b*factor+offset)))})`;
 const random=(n:number)=>{const value=Math.sin(n*127.13+color*.0017)*43758.5453;return value-Math.floor(value)};
 const pixel=(x:number,y:number,w:number,h:number,fill:string)=>{ctx.fillStyle=fill;ctx.fillRect(x,y,w,h)};
 ctx.fillStyle=shade(kind==='raptor'?.94:1);ctx.fillRect(0,0,size,size);
 // Fine tonal variations stay pixel-sharp; larger motifs remain visible at the retro resolution.
 for(let i=0;i<(kind==='raptor'?1300:340);i++)pixel(Math.floor(random(i)*size),Math.floor(random(i+431)*size),1+i%2,1,shade(.86+random(i+233)*.23));
 if(kind==='raptor'){
  const belly=color===0x9baf74||color===0xc4ae73;
  if(belly){
   // Subtle overlapping belly scutes instead of large, evenly spaced black stripes.
   for(let y=0;y<size;y+=7){pixel(0,y,size,1,shade(.79));pixel(0,y+1,size,1,shade(1.04));for(let x=0;x<size;x+=15)pixel(x+(y%3),y+2,1,4,shade(.88))}
  }else{
   // Irregular small scales sit inside broad olive mottling. The texture reads as hide,
   // while the silhouette and lighting carry the anatomy at the game's low resolution.
   for(let i=0;i<95;i++){
    const x=random(i+341)*size|0,y=random(i+761)*size|0,w=4+(i%9),h=3+(i%6);
    pixel(x,y,w,h,shade(i%3===0?.79:.99));pixel(x+2,y-1,w-3,1,shade(i%3===0?.84:1.02));
   }
   for(let row=0;row<19;row++)for(let col=-1;col<19;col++){
    const seed=row*29+col+73,x=col*7+(row%2)*3+(random(seed)*3|0),y=row*7+(random(seed+313)*3|0),w=3+(seed%3),h=3+(seed%2),variation=.88+random(seed+97)*.13;
    pixel(x,y,w,1,shade(.77+random(seed+43)*.07));pixel(x-1,y+1,1,h,shade(.81));pixel(x,y+1,w,h,shade(variation));pixel(x+1,y+1,w-2,1,shade(1.05));pixel(x+1,y+h+1,w-1,1,shade(.84));
   }
   for(let i=0;i<64;i++)pixel(random(i+911)*size|0,random(i+721)*size|0,1,2,shade(1.08));
   for(let i=0;i<3;i++)for(let y=0;y<13;y++)pixel(58+i*4+Math.floor(y*.25),69+y,1,1,shade(1.16,5));
  }
 }else if(kind==='soldier'){
  if(color===0xa18c70){
   for(let i=0;i<50;i++)pixel(random(i+1001)*64|0,random(i+1071)*64|0,2,1,shade(.88));
  }else if(color===0x202e39){
   // Woven fabric and inset gun channels rather than shiny, modern materials.
   for(let y=1;y<64;y+=4)for(let x=y%8;x<64;x+=4)pixel(x,y,1,2,shade(1.3));
   for(const y of [16,47]){pixel(0,y,64,1,shade(.55));pixel(0,y+1,64,1,shade(1.35))}
  }else{
   pixel(3,3,58,1,shade(1.48));pixel(3,4,1,56,shade(1.39));pixel(3,59,58,2,shade(.48));pixel(60,4,2,56,shade(.6));
   pixel(13,12,39,1,shade(.62));pixel(13,13,1,27,shade(.62));pixel(14,40,38,1,shade(1.23));
   for(const x of [7,55])for(const y of [7,55]){pixel(x,y,3,3,shade(.49));pixel(x,y,1,1,shade(1.8))}
   for(let i=0;i<16;i++){const x=random(i+61)*59|0,y=random(i+93)*62|0;pixel(x,y,2+i%4,1,shade(1.5));pixel(x,y+1,1,1,shade(.58))}
   // Worn stencilled bars and a faded maintenance code on the front plate.
   for(let i=0;i<3;i++)pixel(19+i*7,23,4,2+i%2,shade(1.65,10));
   pixel(38,33,8,5,shade(.63));pixel(39,34,5,1,shade(1.45));pixel(39,36,3,1,shade(1.45));
   for(let i=0;i<6;i++)pixel(48,18+i*3,7,1,shade(.48));
  }
 }else{
  const flesh=color===0x86965e||color===0x9a6f64;
  if(flesh){
   // Broad cellular mottling, broken capillaries and surgical scar stitches.
   for(let i=0;i<75;i++){
    const x=random(i+17)*64|0,y=random(i+223)*64|0,w=2+(i%4),h=2+(i%3);
    pixel(x,y,w,h,shade(i%3===0?.72:1.17));pixel(x+1,y+1,Math.max(1,w-2),1,shade(i%3===0?.8:1.24));
   }
   for(let i=0;i<3;i++)for(let y=0;y<23;y++){
    const x=9+i*19+Math.floor(Math.sin(y*.18)*2);pixel(x,7+y,1,1,'#664a3c');
    if(y%5===0){pixel(x-2,7+y,5,1,shade(.59));pixel(x-2,6+y,1,1,shade(1.3))}
   }
   for(let i=0;i<12;i++)pixel(random(i+1101)*64|0,random(i+1131)*64|0,1,3,'#775944');
  }else{
   // Corroded implants and cracked containment armor; the brute uses its own red palette.
   pixel(3,3,58,2,shade(1.38));pixel(3,5,2,54,shade(1.18));pixel(59,4,2,57,shade(.54));pixel(4,59,55,2,shade(.5));
   for(let i=0;i<50;i++){const x=random(i+79)*64|0,y=random(i+91)*64|0;pixel(x,y,2+i%4,1+i%2,shade(i%3===0?.52:1.24))}
   for(let y=8;y<57;y++){const x=23+Math.floor(Math.sin(y*.2)*4);pixel(x,y,1,1,shade(.45));if(y%7<3)pixel(x+1,y,1,1,shade(1.3))}
   for(const x of [7,54])for(const y of [7,54]){pixel(x,y,3,3,shade(.44));pixel(x,y,1,1,shade(1.65))}
   if(kind==='brute')for(let x=8;x<57;x+=8){pixel(x,44,4,6,'#b6a064');pixel(x+4,44,3,6,'#352d2c')}
   else for(let i=0;i<4;i++)pixel(41,15+i*4,12,2,shade(.57));
  }
 }
 const texture=new THREE.CanvasTexture(canvas);texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestFilter;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.generateMipmaps=false;texture.colorSpace=THREE.SRGBColorSpace;
 return texture;
}
