import * as THREE from 'three';
import type {EnemyKind} from './types';

/** Original painted surfaces: large value shapes first, pixel-scale wear second. */
export function createCreatureTexture(kind:EnemyKind,color:number):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=kind==='raptor'?128:64;
 const size=canvas.width,ctx=canvas.getContext('2d')!;
 // Stable IDs retain the renderer's material cache and skin shading classifications.
 const palettes:Record<EnemyKind,Record<number,number>>={
  raptor:{[0x60794b]:0xa18f59,[0x9baf74]:0xdbc79b,[0x958252]:0xb39b64,[0xc4ae73]:0xe0cda2},
  soldier:{[0xa18c70]:0xd2b298,[0x496276]:0x939fac,[0x202e39]:0x394758,[0x80938e]:0xc7cacc},
  mutant:{[0x86965e]:0xc5b5a2,[0x4e5d43]:0xaa9d80,[0x788375]:0x80918f},
  brute:{[0x9a6f64]:0xbe8e71,[0x7b383d]:0xcdc0a0,[0x788375]:0x918474},
 };
 const painted=palettes[kind][color]??color;
 const r=(painted>>16)&255,g=(painted>>8)&255,b=painted&255;
 const shade=(factor:number,offset=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(r*factor+offset)))},${Math.max(0,Math.min(255,Math.round(g*factor+offset)))},${Math.max(0,Math.min(255,Math.round(b*factor+offset)))})`;
 const random=(n:number)=>{const value=Math.sin(n*127.13+color*.0017)*43758.5453;return value-Math.floor(value)};
 const pixel=(x:number,y:number,w:number,h:number,fill:string)=>{ctx.fillStyle=fill;ctx.fillRect(x,y,w,h)};
 const line=(x:number,y:number,w:number,h:number,dark:string,light:string)=>{pixel(x,y,w,h,dark);pixel(x,y-h,w,Math.max(1,h/2),light)};
 const flesh=kind==='mutant'&&color===0x86965e||kind==='brute'&&color===0x9a6f64||kind==='soldier'&&color===0xa18c70;
 const belly=kind==='raptor'&&(color===0x9baf74||color===0xc4ae73);
 pixel(0,0,size,size,shade(1));
 if(kind==='raptor'||flesh){
  // Broad stepped highlights are painted into each curved part, like a pre-lit FPS sprite.
  // Low-frequency masses survive 320x200; a little sparse grain prevents plastic surfaces.
  for(let y=0;y<size;y+=2)for(let x=0;x<size;x+=2){
   const u=x/size,v=y/size;
   const volume=.81+Math.sin(v*Math.PI)*.2+Math.max(0,Math.cos(u*Math.PI*2-.8))*.15;
   const stepped=Math.round(volume*18)/18;
   pixel(x,y,2,2,shade(stepped));
  }
  for(let i=0;i<(kind==='raptor'?270:85);i++)pixel(random(i)*size|0,random(i+431)*size|0,1,1,shade(.9+random(i+233)*.25));
 }
 if(kind==='raptor'){
  if(belly){
   // Overlapping cream scutes, with thinner folds at the edge and broad unbroken highlights.
   for(let y=4;y<size;y+=9){
    for(let x=0;x<size;x+=24){
     const j=x/24,h=2+(j%2),top=y+(j%2);
     line(x,top,22,h,shade(.67),shade(1.11));pixel(x+2,top+2,17,2,shade(.9));
    }
   }
  }else{
   // Irregular dorsal bars form a recognizable animal pattern rather than a grid of dots.
   for(let i=0;i<8;i++){
    const y=6+i*15,x=(i%2)*12,w=39+(i%3)*7;
    pixel(x,y,w,5,shade(.6));pixel(x+7,y+5,w-9,4,shade(.65));
    pixel(size-x-w,y+7,w-6,4,shade(.69));pixel(size-x-w+9,y+11,w-19,3,shade(.72));
   }
   // Larger scales around joints fade into fine scales, with light upper rims and recessed seams.
   for(let row=0;row<13;row++)for(let col=-1;col<15;col++){
    const seed=row*31+col+73,x=col*9+(row%2)*4+(random(seed)*3|0),y=row*10+(random(seed+313)*3|0);
    const w=4+(seed%3),h=2+(seed%3),value=.91+random(seed+97)*.14;
    pixel(x,y,w,1,shade(1.18));pixel(x-1,y+1,1,h,shade(.73));pixel(x,y+1,w,h,shade(value));pixel(x+1,y+h+1,w-1,1,shade(.7));
   }
   // Healed claw cuts carry pale connective tissue surrounded by a dark scar border.
   for(let i=0;i<3;i++)for(let y=0;y<19;y++){
    const x=66+i*6+Math.floor(y*.3);pixel(x-1,62+y,2,1,'#66553a');pixel(x,62+y,1,1,'#d9c49a');
   }
  }
 }else if(kind==='soldier'){
  if(flesh){
   for(let y=13;y<43;y++){const x=20+(y%7===0?1:0);pixel(x,y,1,1,'#956b5b');if(y%6===0)pixel(x+1,y,2,1,shade(1.12))}
   line(7,48,44,1,shade(.72),shade(1.09));
  }else if(color===0x202e39){
   // Broad creased fabric separates knees, gloves and the rifle from the bright armor plates.
   for(let y=0;y<64;y+=4)pixel(0,y,64,2,shade(.83+y/200));
   for(let i=0;i<6;i++)for(let y=6;y<59;y++){
    const x=6+i*10+Math.round(Math.sin(y*.11+i)*2);
    pixel(x,y,2,1,shade(.68));pixel(x+2,y,2,1,shade(1.27));
   }
   for(const y of [13,46])line(0,y,64,2,shade(.55),shade(1.45));
  }else{
   // Painted bevels, inset steel panels and edge catches have a clear large-to-small hierarchy.
   for(let y=0;y<64;y++)pixel(0,y,64,1,shade(1.17-y*.004));
   pixel(3,3,58,2,shade(1.45));pixel(3,5,2,54,shade(1.25));pixel(3,58,58,3,shade(.5));pixel(59,5,3,56,shade(.62));
   pixel(11,11,42,29,shade(.76));pixel(13,13,38,25,shade(.95));pixel(13,13,38,2,shade(1.28));pixel(13,37,38,2,shade(.65));
   for(const x of [7,55])for(const y of [7,55]){pixel(x,y,3,3,shade(.48));pixel(x,y,2,1,shade(1.8))}
   pixel(7,44,49,8,'#753e4a');pixel(7,43,49,1,'#b47878');pixel(7,51,49,1,'#4b3038');
   for(let i=0;i<3;i++)pixel(19+i*7,24,4,3+i%2,'#ddc492');
   pixel(38,31,9,5,shade(.58));pixel(39,32,6,1,shade(1.45));pixel(39,34,4,1,shade(1.45));
   for(let i=0;i<5;i++)line(43,16+i*3,8,1,shade(.45),shade(1.22));
   for(let i=0;i<9;i++){const x=random(i+61)*55+4|0,y=random(i+93)*55+4|0;line(x,y,2+i%5,1,shade(.5),shade(1.65))}
  }
 }else if(flesh){
  // Muscle creases and healed surgery seams reinforce form; bruises occupy deliberate patches.
  for(let i=0;i<4;i++)for(let y=5;y<59;y++){
   const x=6+i*16+Math.round(Math.sin(y*.065+i*.9)*3);
   pixel(x,y,1,1,shade(.63));pixel(x+1,y,2,1,shade(1.15));
   if(y%11===0){pixel(x-2,y,6,1,'#7c5b49');pixel(x-2,y-1,1,1,shade(1.2))}
  }
  for(let i=0;i<4;i++){
   const x=9+i*13,y=15+(i%2)*24,w=5+i%3,h=7+i%3;
   pixel(x,y,w,h,kind==='brute'?'#855341':'#967767');
   pixel(x+1,y+2,w-2,h-3,kind==='brute'?'#694334':'#78574a');
   pixel(x,y-1,w-1,1,shade(1.22));
  }
  for(let i=0;i<3;i++){
   const y=10+i*18;line(3,y,21,1,shade(.73),shade(1.17));line(39,y+5,21,1,shade(.77),shade(1.11));
  }
 }else{
  // Large pale cracked plates contrast the sienna/pale skin. Corrosion stays in seams.
  for(let y=0;y<64;y++)pixel(0,y,64,1,shade(1.12-y*.003));
  pixel(3,3,58,2,shade(1.36));pixel(3,5,2,54,shade(1.18));pixel(59,4,2,57,shade(.52));pixel(4,58,55,3,shade(.48));
  for(let y=8;y<58;y++){
   const x=23+Math.floor(Math.sin(y*.15)*4);pixel(x,y,2,1,shade(.39));pixel(x+2,y,1,1,shade(1.28));
   if(y>30&&y<46)pixel(x+Math.floor((y-30)*.8),y,1,1,shade(.52));
  }
  for(let i=0;i<18;i++){const x=random(i+79)*55+4|0,y=random(i+91)*54+5|0;line(x,y,2+i%4,1,i%3===0?'#886344':shade(.53),shade(1.3))}
  for(const x of [7,54])for(const y of [7,54]){pixel(x,y,3,3,shade(.4));pixel(x,y,1,1,shade(1.65))}
  if(kind==='brute')for(let x=8;x<57;x+=8){pixel(x,44,4,6,'#ad8d56');pixel(x+4,44,3,6,'#463b32')}
  else{
   for(let i=0;i<4;i++)line(41,15+i*4,12,2,shade(.44),shade(1.15));
   pixel(8,47,15,4,'#618d78');pixel(8,46,15,1,'#b2c2a4');
  }
 }
 const texture=new THREE.CanvasTexture(canvas);texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestFilter;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.generateMipmaps=false;texture.colorSpace=THREE.SRGBColorSpace;
 return texture;
}
