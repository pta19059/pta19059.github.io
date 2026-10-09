import * as THREE from 'three';
import type {EnemyKind} from './types';

/** Original pixel-painted surfaces, deterministic and independent of any game assets. */
export function createCreatureTexture(kind:EnemyKind,color:number):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=kind==='raptor'?128:64;
 const size=canvas.width;
 const ctx=canvas.getContext('2d')!;
 // Keep surface IDs stable for the renderer's material cache, but paint each species with
 // its own readable palette. Neutral flesh and cool armor separate enemies from green neon.
 const palettes:Record<EnemyKind,Record<number,number>>={
  raptor:{[0x60794b]:0x797348,[0x9baf74]:0xc5b18b,[0x958252]:0xa08a5b,[0xc4ae73]:0xd1bd93},
  soldier:{[0xa18c70]:0xc49f88,[0x496276]:0x858c9d,[0x202e39]:0x303c4b,[0x80938e]:0xb5b9bc},
  mutant:{[0x86965e]:0xb2a496,[0x4e5d43]:0x8d8270,[0x788375]:0x737d80},
  brute:{[0x9a6f64]:0xaa7a65,[0x7b383d]:0xb7aa8d,[0x788375]:0x776f69},
 };
 const painted=palettes[kind][color]??color;
 const r=(painted>>16)&255,g=(painted>>8)&255,b=painted&255;
 const shade=(factor:number,offset=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(r*factor+offset)))},${Math.max(0,Math.min(255,Math.round(g*factor+offset)))},${Math.max(0,Math.min(255,Math.round(b*factor+offset)))})`;
 const random=(n:number)=>{const value=Math.sin(n*127.13+color*.0017)*43758.5453;return value-Math.floor(value)};
 const pixel=(x:number,y:number,w:number,h:number,fill:string)=>{ctx.fillStyle=fill;ctx.fillRect(x,y,w,h)};
 ctx.fillStyle=shade(kind==='raptor'?.94:1);ctx.fillRect(0,0,size,size);
 // Fine tonal variations stay pixel-sharp; larger motifs remain visible at the retro resolution.
 for(let i=0;i<(kind==='raptor'?1300:340);i++)pixel(Math.floor(random(i)*size),Math.floor(random(i+431)*size),1+i%2,1,shade(.86+random(i+233)*.23));
 if(kind==='raptor'){
  const belly=color===0x9baf74||color===0xc4ae73;
  if(belly){
   // Pale ventral scutes give the jaw, throat and muscular legs a clear lit underside.
   for(let y=0;y<size;y+=7){pixel(0,y,size,1,shade(.74));pixel(0,y+1,size,1,shade(1.08));for(let x=0;x<size;x+=15)pixel(x+(y%3),y+2,1,4,shade(.87))}
  }else{
   // Broad ochre/olive patches read at a distance; small irregular scales resolve up close.
   for(let i=0;i<18;i++){
    const x=random(i+1401)*size|0,y=random(i+1481)*size|0,w=10+i%13,h=8+i%9;
    pixel(x,y,w,h,i%3===0?'#56523a':shade(1.16,3));
    pixel(x+3,y-2,Math.max(3,w-6),3,i%3===0?'#615a3e':shade(1.1,2));
   }
   for(let i=0;i<95;i++){
    const x=random(i+341)*size|0,y=random(i+761)*size|0,w=4+(i%9),h=3+(i%6);
    pixel(x,y,w,h,shade(i%3===0?.79:.99));pixel(x+2,y-1,w-3,1,shade(i%3===0?.84:1.02));
   }
   for(let row=0;row<19;row++)for(let col=-1;col<19;col++){
    const seed=row*29+col+73,x=col*7+(row%2)*3+(random(seed)*3|0),y=row*7+(random(seed+313)*3|0),w=3+(seed%3),h=3+(seed%2),variation=.88+random(seed+97)*.13;
    pixel(x,y,w,1,shade(.77+random(seed+43)*.07));pixel(x-1,y+1,1,h,shade(.81));pixel(x,y+1,w,h,shade(variation));pixel(x+1,y+1,w-2,1,shade(1.05));pixel(x+1,y+h+1,w-1,1,shade(.84));
   }
   for(let i=0;i<64;i++)pixel(random(i+911)*size|0,random(i+721)*size|0,1,2,shade(1.08));
   // Three healed claw cuts, with darker scar borders rather than glowing skin.
   for(let i=0;i<3;i++)for(let y=0;y<13;y++){
    const x=58+i*4+Math.floor(y*.25);pixel(x-1,69+y,1,1,'#4e4332');pixel(x,69+y,1,1,shade(1.25,5));
   }
  }
 }else if(kind==='soldier'){
  if(color===0xa18c70){
   for(let i=0;i<50;i++)pixel(random(i+1001)*64|0,random(i+1071)*64|0,2,1,shade(.88));
   // Skin remains warm beneath cold armor: subtle bruising, pores and a healed cheek cut.
   for(let y=16;y<40;y++){const x=21+(y%7===0?1:0);pixel(x,y,1,1,'#835e55');if(y%5===0)pixel(x+1,y,2,1,shade(1.16))}
  }else if(color===0x202e39){
   // Woven fabric and inset gun channels rather than shiny, modern materials.
   for(let y=1;y<64;y+=4)for(let x=y%8;x<64;x+=4)pixel(x,y,1,2,shade(1.3));
   for(const y of [16,47]){pixel(0,y,64,1,shade(.55));pixel(0,y+1,64,1,shade(1.35))}
  }else{
   pixel(3,3,58,1,shade(1.48));pixel(3,4,1,56,shade(1.39));pixel(3,59,58,2,shade(.48));pixel(60,4,2,56,shade(.6));
   pixel(13,12,39,1,shade(.62));pixel(13,13,1,27,shade(.62));pixel(14,40,38,1,shade(1.23));
   for(const x of [7,55])for(const y of [7,55]){pixel(x,y,3,3,shade(.49));pixel(x,y,1,1,shade(1.8))}
   for(let i=0;i<16;i++){const x=random(i+61)*59|0,y=random(i+93)*62|0;pixel(x,y,2+i%4,1,shade(1.5));pixel(x,y+1,1,1,shade(.58))}
   // Burgundy unit markings and amber maintenance stamps stand apart from the city palette.
   pixel(7,43,49,7,'#673d46');pixel(7,42,49,1,'#9e6166');
   for(let i=0;i<3;i++)pixel(19+i*7,23,4,2+i%2,'#c6af7c');
   pixel(38,33,8,5,shade(.63));pixel(39,34,5,1,shade(1.45));pixel(39,36,3,1,shade(1.45));
   for(let i=0;i<6;i++)pixel(48,18+i*3,7,1,shade(.48));
  }
 }else{
  const flesh=color===0x86965e||color===0x9a6f64;
  if(flesh){
   // Desaturated flesh, bruised patches and rust-colored wounds communicate infection
   // without giving every body the same fluorescent green surface as the laboratory.
   for(let i=0;i<75;i++){
    const x=random(i+17)*64|0,y=random(i+223)*64|0,w=2+(i%4),h=2+(i%3);
    pixel(x,y,w,h,shade(i%3===0?.72:1.17));pixel(x+1,y+1,Math.max(1,w-2),1,shade(i%3===0?.8:1.24));
   }
   for(let i=0;i<8;i++){
    const x=random(i+1207)*55|0,y=random(i+1229)*56|0,w=3+i%6,h=3+i%4;
    pixel(x,y,w,h,kind==='brute'?'#774e40':'#827569');
    pixel(x+1,y+1,Math.max(1,w-2),Math.max(1,h-2),kind==='brute'?'#674136':'#714d43');
    pixel(x,y-1,w-1,1,shade(1.18));
   }
   for(let i=0;i<3;i++)for(let y=0;y<23;y++){
    const x=9+i*19+Math.floor(Math.sin(y*.18)*2);pixel(x,7+y,1,1,'#664a3c');
    if(y%5===0){pixel(x-2,7+y,5,1,shade(.59));pixel(x-2,6+y,1,1,shade(1.3))}
   }
   for(let i=0;i<12;i++)pixel(random(i+1101)*64|0,random(i+1131)*64|0,1,3,kind==='brute'?'#623e32':'#8e6254');
  }else{
   // Cracked bone containment plates retain broad light masses; oxide gathers at edges.
   pixel(3,3,58,2,shade(1.38));pixel(3,5,2,54,shade(1.18));pixel(59,4,2,57,shade(.54));pixel(4,59,55,2,shade(.5));
   for(let i=0;i<50;i++){const x=random(i+79)*64|0,y=random(i+91)*64|0;pixel(x,y,2+i%4,1+i%2,i%5===0?'#805947':shade(i%3===0?.52:1.24))}
   for(let y=8;y<57;y++){const x=23+Math.floor(Math.sin(y*.2)*4);pixel(x,y,1,1,shade(.45));if(y%7<3)pixel(x+1,y,1,1,shade(1.3))}
   for(const x of [7,54])for(const y of [7,54]){pixel(x,y,3,3,shade(.44));pixel(x,y,1,1,shade(1.65))}
   if(kind==='brute')for(let x=8;x<57;x+=8){pixel(x,44,4,6,'#967549');pixel(x+4,44,3,6,'#463b32')}
   else{
    for(let i=0;i<4;i++)pixel(41,15+i*4,12,2,shade(.57));
    // A small faded laboratory stripe remains, rather than green covering the whole mutant.
    pixel(8,47,15,4,'#648879');pixel(8,46,15,1,'#97a997');
   }
  }
 }
 const texture=new THREE.CanvasTexture(canvas);texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestFilter;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.generateMipmaps=false;texture.colorSpace=THREE.SRGBColorSpace;
 return texture;
}
