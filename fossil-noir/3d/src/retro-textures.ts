import * as THREE from 'three';

const noise=(n:number)=>{const v=Math.sin(n*127.1+91.7)*43758.5453;return v-Math.floor(v)};

function finish(canvas:HTMLCanvasElement,repeat=false):THREE.CanvasTexture {
 const map=new THREE.CanvasTexture(canvas);
 map.magFilter=map.minFilter=THREE.NearestFilter;
 map.colorSpace=THREE.SRGBColorSpace;map.generateMipmaps=false;
 if(repeat)map.wrapS=map.wrapT=THREE.RepeatWrapping;
 return map;
}

/** Hand-painted pixel materials: small repeating tiles, deliberate wear and relief. */
export function createRetroTexture(kind:string):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d')!;
 const palettes:Record<string,string[]>={brick:['#48434c','#63585e','#292c35'],metal:['#626b6e','#b3b9b1','#343d45'],concrete:['#77776c','#a6a190','#484c49'],crate:['#696047','#988457','#30342c'],floor:['#46514f','#7e877b','#283338'],labfloor:['#52625f','#839488','#2a4143'],road:['#686a68','#a09f94','#424951'],ceiling:['#2c3a3a','#53635b','#142628'],door:['#3d5149','#7d8e77','#182b29'],fuel:['#954732','#c87647','#4d302b']};
 const p=palettes[kind]??palettes.metal;
 const rect=(color:string,x:number,y:number,w:number,h:number)=>{g.fillStyle=color;g.fillRect(x,y,w,h)};
 const line=(color:string,points:number[],width=1)=>{g.strokeStyle=color;g.lineWidth=width;g.beginPath();g.moveTo(points[0],points[1]);for(let i=2;i<points.length;i+=2)g.lineTo(points[i],points[i+1]);g.stroke()};
 const rivet=(x:number,y:number)=>{rect('#172827',x,y,4,4);rect('#a2ac95',x,y,3,2);rect('#63776b',x+1,y+2,2,1);rect('#263e39',x+1,y+1,1,1)};
 rect(p[0],0,0,128,128);
 for(let i=0;i<1500;i++){g.globalAlpha=.18+noise(i)*.2;rect(i%3?p[2]:p[1],noise(i+1)*128|0,noise(i+2)*128|0,1+i%3,1)}g.globalAlpha=1;
 if(kind==='brick'){
  for(let row=0;row<8;row++)for(let col=-1;col<5;col++){
   const x=col*32+(row%2)*16,y=row*16,k=row*5+col+2;
   g.globalAlpha=.15+noise(k+70)*.15;rect(k%3?p[1]:p[2],x+2,y+2,29,13);g.globalAlpha=1;
   rect('#202832',x,y,32,2);rect('#242930',x,y,2,16);
   rect('#77656a',x+3,y+3,26,1);rect('#584e56',x+2,y+4,1,9);rect('#33323a',x+3,y+14,27,1);
   if(k%3===0){rect('#292d35',x+22,y+3,3,2);rect('#81716e',x+22,y+5,4,1)}
   if(k%4===0)line('#302c35',[x+12,y+4,x+10,y+7,x+12,y+10,x+11,y+13]);
   rect('#393a40',x+5,y+9,4,1);rect('#62545a',x+17,y+7,6,1);
  }
  // Damp brick ends and soft soot, rather than uniform random speckles.
  for(let i=0;i<15;i++){g.globalAlpha=.12;rect('#1b302c',noise(i+201)*128|0,noise(i+231)*128|0,4,8)}g.globalAlpha=1;
 }else if(kind==='fuel'){
  for(const y of [8,35,95,117]){rect('#252d33',0,y,128,5);rect('#87918b',0,y,128,2)}
  for(const x of [8,40,72,104]){
   rect('#d6b55e',x,48,24,34);rect('#392e27',x+2,50,20,30);
   g.fillStyle='#efc368';g.beginPath();g.moveTo(x+12,52);g.lineTo(x+20,66);g.lineTo(x+4,66);g.fill();
   rect('#312b25',x+11,56,2,6);rect('#312b25',x+11,63,2,2);
   rect('#d5be86',x+4,71,16,2);rect('#a38960',x+4,76,12,1);
  }
  for(let i=0;i<20;i++){rect('#513e35',noise(i+33)*128,noise(i+66)*128,1,3+noise(i+4)*8)}
 }else if(['metal','ceiling','door'].includes(kind)){
  for(let row=0;row<2;row++)for(let col=0;col<2;col++){
   const x=col*64,y=row*64;
   rect(p[2],x,y,64,3);rect(p[2],x,y,3,64);rect(p[1],x+3,y+3,59,1);rect('#8c9690',x+3,y+4,1,57);
   for(let i=0;i<46;i++){
    const xx=x+5+(noise(i+col*47+row*97)*51|0),yy=y+5+(noise(i+138)*52|0);
    g.globalAlpha=.12+noise(i+8)*.18;rect(i%3?p[2]:p[1],xx,yy,1+(noise(i+77)*9|0),1);
   }g.globalAlpha=1;
   rect(p[1],x+5,y+5,55,1);rect('#89968f',x+4,y+7,1,38);rect(p[2],x+59,y+8,2,47);
   for(const sx of [7,55])for(const sy of [7,55])rivet(x+sx,y+sy);
   for(let i=0;i<7;i++){const xx=x+10+noise(i+row*14+col*7)*42|0,yy=y+13+i*6;rect('#263d38',xx,yy,10,1);rect('#748077',xx+2,yy+1,5,1)}
   rect('#7e6643',x+3,y+48,3,12);rect('#553f2b',x+6,y+55,6,4);
   if(kind==='ceiling'||(kind==='metal'&&row===1&&col===1)){
    rect('#1a2d2e',x+17,y+19,31,27);for(let sy=21;sy<45;sy+=4){rect('#16252b',x+20,y+sy,25,2);rect('#83958b',x+20,y+sy+2,25,1)}
   }
  }
  if(kind==='door'){
   rect('#172929',12,14,104,93);rect('#718573',14,16,100,2);
   for(let y=20;y<101;y+=8){rect('#4f6b59',16,y,96,4);rect('#263e37',16,y+4,96,3);rect('#76917a',18,y,90,1)}
   rect('#c7ab53',0,108,128,13);for(let x=-16;x<144;x+=24){g.fillStyle='#242c28';g.beginPath();g.moveTo(x,121);g.lineTo(x+12,108);g.lineTo(x+24,108);g.lineTo(x+12,121);g.fill()}
   rect('#132a28',60,0,4,108);rect('#92a288',65,2,2,104);for(const y of [7,97]){rivet(53,y);rivet(72,y)}
  }
 }else if(kind==='crate'){
  for(let x=0;x<128;x+=16){rect('#3e4030',x,0,2,128);rect('#a18c5b',x+3,3,1,119);for(let y=8;y<120;y+=11)rect('#4f4c35',x+5,y,7,1)}
  for(const x of [0,60,120]){rect('#333a30',x,0,8,128);rect('#77836b',x+1,2,2,123)}
  for(const y of [0,60,120]){rect('#333a30',0,y,128,8);rect('#8e916f',3,y+1,121,2)}
  for(const x of [3,63,123])for(const y of [5,62,122])rivet(x,y);
  rect('#c4b886',19,21,34,22);rect('#292f27',22,24,28,3);rect('#595b40',22,30,19,2);for(let x=23;x<49;x+=3)rect('#3d4934',x,36,1,5);
 }else if(kind==='floor'||kind==='labfloor'){
  for(let row=0;row<2;row++)for(let col=0;col<2;col++){
   const x=col*64,y=row*64;rect(p[2],x,y,64,3);rect(p[2],x,y,3,64);rect(p[1],x+3,y+3,59,1);rect('#54675b',x+3,y+4,1,57);
   for(let k=0;k<9;k++){const sx=x+8+noise(k+row*21+col*7)*44|0,sy=y+9+noise(k+90)*44|0;rect('#637363',sx,sy,5,1);rect('#243a35',sx+1,sy+1,7,1)}
   if(kind==='floor'){rivet(x+7,y+7);rivet(x+54,y+54);for(let yy=14;yy<52;yy+=9)for(let xx=15;xx<52;xx+=12)line('#506157',[x+xx,y+yy,x+xx+3,y+yy-3,x+xx+5,y+yy-3])}
   else if(row===1&&col===0)line('#263e38',[x+20,y+3,x+21,y+12,x+26,y+19,x+25,y+29,x+31,y+35,x+32,y+45]);
  }
 }else if(kind==='concrete'){
  rect('#273c3d',0,0,128,3);rect('#7b8173',0,3,128,1);rect('#344848',0,64,128,2);
  line('#2b3b3d',[17,4,20,19,14,32,17,40,9,48,7,65]);line('#728074',[19,5,22,20,16,32]);
  line('#293b3c',[105,65,103,81,94,92,94,101,89,108,88,125]);line('#687768',[105,82,110,89,120,91]);
  for(const x of [11,115])for(const y of [12,114]){rect('#273c3c',x,y,5,4);rect('#8b8c78',x,y,4,1)}
  for(let i=0;i<16;i++){g.globalAlpha=.15;rect('#1b3436',8+i*7,5,3,10+noise(i+4)*30)}g.globalAlpha=1;
 }else if(kind==='road'){
  // Coarse aggregate has a light-facing lip and dark socket, like a painted FPS tile.
  // Fine multiscale wear replaces a repeated large black crack across every two metres.
  for(let y=0;y<128;y++)for(let x=0;x<128;x++){
   const coarse=noise((x>>3)*17+(y>>3)*271),fine=noise(x*19+y*131),v=90+coarse*22+fine*24;
   const level=Math.round(v/5)*5;rect(`rgb(${level},${level+2},${level})`,x,y,1,1);
  }
  for(let i=0;i<720;i++){
   const x=noise(i+19)*128|0,y=noise(i+81)*128|0,size=i%9===0?3:i%3===0?2:1;
   rect(i%4===0?'#484d51':'#7b7e76',x,y,size,1);
   if(size>1){rect('#99998c',x,y-1,size-1,1);rect('#4d5353',x+1,y+1,size,1)}
  }
  for(let i=0;i<27;i++){g.globalAlpha=.09;rect(i%2?'#32414b':'#b1a998',noise(i+53)*128|0,noise(i+94)*128|0,3+(noise(i)*13|0),2+(noise(i+5)*7|0))}g.globalAlpha=1;
  line('#3b4143',[97,57,95,62,99,66,96,73,103,78,102,84]);
  line('#898b7f',[98,57,97,61,100,66,98,73,105,77]);
  line('#41484a',[97,73,89,75,84,72,78,76]);
  for(let i=0;i<7;i++){rect('#8b8c80',noise(i+34)*128|0,noise(i+65)*128|0,2,1)}
 }
 return finish(c,true);
}

export type DecalKind='poster'|'graffiti'|'paper'|'puddle'|'leak'|'circuit';
/** Original posters, case files and stains; no external image assets. */
export function createDecal(kind:DecalKind):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d')!;
 const r=(color:string,x:number,y:number,w:number,h:number)=>{g.fillStyle=color;g.fillRect(x,y,w,h)};
 g.imageSmoothingEnabled=false;
 if(kind==='poster'){
  r('#142e32',4,3,118,122);r('#8ba084',8,7,110,110);r('#273a38',12,11,102,67);
  for(let i=0;i<12;i++){r(i%2?'#5b856e':'#365b54',19+i*7,20,3,44);r('#b2c09b',17+i*7,27+(i%4)*8,7,3)}
  g.textAlign='center';g.fillStyle='#c8d4aa';g.font='bold 15px monospace';g.fillText('AXIOM',64,29);g.font='bold 9px monospace';g.fillText('A BETTER SPECIES',64,72);
  g.fillStyle='#293d37';g.fillText('LAZARUS / 2091',64,90);g.fillText('TRUST THE FUTURE',64,103);r('#597460',12,114,66,2);r('#203a34',22,119,86,2);
  r('#0d272d',4,100,5,15);r('#0d272d',119,8,5,16);
 }else if(kind==='graffiti'){
  g.textAlign='center';g.font='bold 24px monospace';g.fillStyle='#cb5365';g.fillText('THEY LIED',64,54);g.font='bold 12px monospace';g.fillText('MARA IS ALIVE',64,74);
  for(let i=0;i<8;i++)r('#a33e50',14+i*14,56,1,5+noise(i)*15);
  g.strokeStyle='#b75059';g.lineWidth=2;g.beginPath();g.moveTo(8,83);g.lineTo(116,88);g.stroke();
 }else if(kind==='paper'){
  r('#766e55',9,9,108,111);r('#c2b791',8,6,106,109);r('#aea17e',9,111,101,4);r('#3e4940',17,15,51,7);r('#7d4543',83,13,23,13);
  for(let i=0;i<13;i++){r('#6e7461',18,30+i*5,48+noise(i)*37,1);if(i%3===0)r('#9b9271',16,31+i*5,80,1)}
  r('#7c5f50',75,69,28,22);r('#37473e',80,74,18,14);r('#b0a47c',12,93,16,13);g.fillStyle='#713f38';g.font='bold 8px monospace';g.fillText('CASE 091',36,105);
 }else if(kind==='puddle'){
  g.fillStyle='#173541';g.beginPath();for(let i=0;i<20;i++){const a=i*Math.PI/10,rr=45+noise(i)*13;const x=64+Math.cos(a)*rr,y=64+Math.sin(a)*rr*.65;i?g.lineTo(x,y):g.moveTo(x,y)}g.closePath();g.fill();
  for(let i=0;i<14;i++){r(i%3?'#214f54':'#3a796a',20+noise(i)*85,44+noise(i+13)*41,7+noise(i+9)*25,1)}
  r('#548a73',34,49,27,1);r('#407869',73,58,21,1);
 }else if(kind==='leak'){
  for(let i=0;i<40;i++){g.globalAlpha=.2+noise(i)*.6;r(i%3?'#352d2a':'#806443',noise(i)*128,noise(i+5)*18,1+noise(i+9)*4,19+noise(i+3)*104)}g.globalAlpha=1;
 }else{
  r('#102a2b',0,0,128,128);r('#6a7a67',3,3,122,3);r('#3b5950',3,6,3,119);
  for(let i=0;i<6;i++){r('#203b36',10,12+i*17,75,11);r('#537766',13,15+i*17,42,2);r('#62dda0',17+i*8,17+i*17,5,3);r('#88a58b',94,14+i*17,18,6);r(i%2?'#edac58':'#74dca0',117,15+i*17,3,3)}
  for(let i=0;i<9;i++)r('#899277',12+i*12,120,5,2);
 }
 return finish(c);
}
