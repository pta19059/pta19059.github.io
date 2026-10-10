import * as THREE from 'three';

export type CampaignSurface = 'plaster'|'panel'|'stone'|'wood'|'container'|'server'|'bark'|'water'|'leaf'|'window'|'hazard'|'screen'|'archive';
const random=(seed:number)=>{const n=Math.sin(seed*127.17+38.71)*43758.543;return n-Math.floor(n)};

/** Original small, deliberately painted surfaces. No remote assets or per-frame canvases. */
export function createCampaignTexture(kind:CampaignSurface):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=64;
 const context=canvas.getContext('2d')!;
 const palettes:Record<CampaignSurface,string[]>={
  plaster:['#b6ad91','#8a8977','#d1c5a4','#645d50'],panel:['#687a7c','#35474d','#a2aaa0','#162d37'],
  stone:['#a9a17c','#756e51','#cdc197','#444a3b'],wood:['#735345','#402f2c','#aa8665','#282827'],
  container:['#8c5b44','#573c35','#b78658','#25343a'],server:['#344b51','#142b33','#607c7b','#91d2b3'],
  bark:['#655945','#393e32','#91846a','#29382f'],water:['#284852','#17333f','#607e80','#36626a'],
  leaf:['#477056','#233e36','#779d69','#172f2c'],window:['#172d3c','#101f2b','#a2a176','#637e7d'],
  hazard:['#b99d54','#242e34','#d9c17d','#5b5443'],screen:['#11272c','#193c37','#72b7a3','#bbd4ac'],
  archive:['#5d5c52','#2e3b3b','#b2a388','#70827a'],
 };
 const colors=palettes[kind],rect=(x:number,y:number,w:number,h:number,color:string)=>{context.fillStyle=color;context.fillRect(x,y,w,h)};
 rect(0,0,64,64,colors[0]);
 for(let i=0;i<670;i++){context.globalAlpha=.1+random(i+41)*.23;rect(random(i+3)*64|0,random(i+87)*64|0,1+(random(i+23)*3|0),1,colors[i%3])}context.globalAlpha=1;
 if(kind==='panel'||kind==='container'){
  for(let x=0;x<64;x+=kind==='container'?8:32){rect(x,0,2,64,colors[1]);rect(x+2,0,1,64,colors[2]);if(kind==='container')rect(x+6,0,2,64,colors[1])}
  for(let y=0;y<64;y+=32){rect(0,y,64,2,colors[1]);rect(0,y+2,64,1,colors[2]);for(const x of [4,27,36,59]){rect(x,y+5,2,2,colors[1]);rect(x,y+5,1,1,colors[2])}}
  for(let i=0;i<17;i++){const x=random(i+5)*64|0,y=random(i+76)*64|0;rect(x,y,1,3+random(i+13)*11,'#5e493c');rect(x+1,y,1,2,'#a28160')}
 }else if(kind==='stone'||kind==='plaster'){
  if(kind==='stone')for(let y=0;y<64;y+=16){rect(0,y,64,2,colors[1]);for(let x=-16;x<64;x+=32){rect(x+(y%32)/2,y,2,16,colors[1]);rect(x+(y%32)/2+2,y+2,27,1,colors[2])}}
  for(let i=0;i<13;i++){const x=random(i+15)*64|0,y=random(i+96)*64|0;rect(x,y,2+random(i+63)*8,1+random(i+21)*4,colors[1]);rect(x+1,y+1,2+random(i+63)*6,1,colors[2])}
 }else if(kind==='wood'||kind==='bark'){
  for(let i=0;i<24;i++){const x=random(i+32)*64|0;rect(x,0,1,64,colors[i%2?1:2]);rect(x+1,random(i+2)*54,1,10,colors[3])}
  if(kind==='wood')for(const y of [0,32]){rect(0,y,64,2,colors[1]);for(let x=6;x<64;x+=25)rect(x,y+4,2,2,colors[3])}
 }else if(kind==='server'||kind==='archive'){
  for(let y=0;y<64;y+=16){rect(0,y,64,2,colors[1]);rect(1,y+3,62,1,colors[2]);for(let x=4;x<60;x+=8){rect(x,y+6,5,7,colors[1]);if(kind==='archive'){rect(x,y+6,3,1,colors[2]);rect(x,y+9,2,1,colors[0])}else{rect(x+1,y+7,3,1,colors[3]);rect(x+1,y+10,3,1,colors[2])}}}
 }else if(kind==='window'){
  for(let y=2;y<64;y+=13)for(let x=3;x<64;x+=11){rect(x,y,7,8,colors[1]);if(random(x+y*11)>.35){rect(x+1,y+1,5,6,colors[random(x+y)>.5?2:3]);rect(x+3,y+1,1,6,colors[0])}}
 }else if(kind==='water'){
  for(let i=0;i<85;i++){const x=random(i+13)*64,y=random(i+93)*64;rect(x,y,2+random(i+73)*13,1,colors[i%3]);if(i%4===0)rect(x+1,y+1,5,1,colors[2])}
 }else if(kind==='leaf'){
  for(let i=0;i<27;i++){const x=random(i+13)*59,y=random(i+93)*59;rect(x,y,4,2,colors[1]);rect(x+1,y-1,3,2,colors[2]);rect(x+2,y+1,5,2,colors[0]);rect(x+3,y,1,3,colors[3])}
 }else if(kind==='hazard'){
  for(let y=-64;y<128;y+=20)for(let x=0;x<64;x++)rect(x,y-x,1,10,colors[1]);rect(0,0,64,2,colors[2]);rect(0,62,64,2,colors[1]);
 }else if(kind==='screen'){
  rect(0,0,64,64,colors[0]);for(let i=0;i<16;i++){const y=3+i*4;rect(3,y,3+random(i)*43,1,colors[i%5?1:2]);rect(50,y,9,1,colors[2])}
  for(let x=2;x<64;x+=10){rect(x,45,1,13,colors[1]);rect(x,50-random(x)*12,5,5+random(x)*12,colors[2])}
 }
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
 texture.minFilter=texture.magFilter=THREE.NearestFilter;texture.generateMipmaps=false;
 texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
 return texture;
}

export function createCampaignSign(text:string,color='#b6dbc2',background='#142c35',width=256,height=96):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const g=canvas.getContext('2d')!;
 g.fillStyle=background;g.fillRect(0,0,width,height);g.fillStyle='#607575';g.fillRect(0,0,width,3);g.fillRect(0,0,3,height);g.fillStyle='#0a2029';g.fillRect(0,height-4,width,4);g.fillRect(width-4,0,4,height);
 const lines=text.split('/').map(line=>line.trim()),size=Math.max(10,Math.min(23,Math.floor((width-20)/(Math.max(...lines.map(line=>line.length))*.61))));
 g.font=`bold ${size}px monospace`;g.textAlign='center';g.textBaseline='middle';g.fillStyle=color;
 lines.forEach((line,index)=>g.fillText(line,width/2,height/2+(index-(lines.length-1)/2)*(size+8)));
 for(let i=0;i<90;i++){g.globalAlpha=.08;g.fillStyle=i%2?'#ded0a8':'#0c1b23';g.fillRect(random(i+16)*width|0,random(i+99)*height|0,1+random(i)*6,1)}g.globalAlpha=1;
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=texture.magFilter=THREE.NearestFilter;texture.generateMipmaps=false;return texture;
}

/** A painted breach aperture: broken concentric arcs and a dark living centre. */
export function createCampaignPortal():THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const g=canvas.getContext('2d')!,image=g.createImageData(64,64);
 for(let y=0;y<64;y++)for(let x=0;x<64;x++){
  const nx=(x-31.5)/31.5,ny=(y-31.5)/31.5,r=Math.sqrt(nx*nx+ny*ny),a=Math.atan2(ny,nx),i=(y*64+x)*4;
  if(r>1)continue;
  const ripples=Math.sin(r*43+a*4.5),arc=Math.sin(a*7+r*22),grain=random(x+y*64+220),bright=Math.max(0,ripples*.4+arc*.18+.37)*(.27+.73*r);
  image.data[i]=Math.round(21+bright*107+grain*8);image.data[i+1]=Math.round(35+bright*157+grain*8);image.data[i+2]=Math.round(48+bright*176+grain*8);image.data[i+3]=Math.round((.76-r*r*.22)*255);
  if(r<.24){image.data[i]=12;image.data[i+1]=25+grain*12;image.data[i+2]=30+grain*17}
 }
 g.putImageData(image,0,0);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=texture.magFilter=THREE.NearestFilter;texture.generateMipmaps=false;texture.center.set(.5,.5);return texture;
}
