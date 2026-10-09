import * as THREE from 'three';

export type DistrictSurface='stucco'|'terracotta'|'porcelain'|'shutter'|'pavement';
export type DistrictPoster='vesper'|'eden'|'helix';

const noise=(n:number)=>{const x=Math.sin(n*153.73+12.81)*43857.193;return x-Math.floor(x)};
function texture(canvas:HTMLCanvasElement,repeat=false){
 const result=new THREE.CanvasTexture(canvas);
 result.magFilter=result.minFilter=THREE.NearestFilter;
 result.colorSpace=THREE.SRGBColorSpace;result.generateMipmaps=false;
 if(repeat)result.wrapS=result.wrapT=THREE.RepeatWrapping;
 return result;
}

/** Original, deliberately coarse urban materials: two pixels describe a chip. */
export function createDistrictTexture(kind:DistrictSurface):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=c.height=128;
 const g=c.getContext('2d')!;
 const palette:Record<DistrictSurface,string[]>={
  stucco:['#b3a38c','#978d78','#cabda6','#726c5c'],
  terracotta:['#784d3d','#98614b','#ac7255','#5a443c'],
  porcelain:['#ababa0','#888e87','#d0cbb8','#576664'],
  shutter:['#5a6568','#303e43','#839092','#25333a'],
  pavement:['#6c6c64','#4f5653','#929082','#353d3c'],
 };
 const colors=palette[kind];g.fillStyle=colors[0];g.fillRect(0,0,128,128);
 for(let i=0;i<1100;i++){g.fillStyle=colors[1+i%3];g.globalAlpha=.16+noise(i+96)*.28;g.fillRect(Math.floor(noise(i)*128),Math.floor(noise(i+13)*128),1+(noise(i+54)*3|0),1+(noise(i+40)*3|0))}
 g.globalAlpha=1;
 if(kind==='terracotta'){
  for(let row=0;row<8;row++)for(let col=-1;col<5;col++){
   const x=col*32+(row%2)*16,y=row*16;
   g.fillStyle='#403c35';g.fillRect(x,y,32,2);g.fillRect(x,y,2,16);
   g.fillStyle='#b58265';g.fillRect(x+2,y+2,29,1);
   g.fillStyle='#664632';g.fillRect(x+2,y+14,29,1);
  }
 }else if(kind==='porcelain'){
  for(let y=0;y<128;y+=32)for(let x=0;x<128;x+=32){
   g.fillStyle='#465b58';g.fillRect(x,y,32,2);g.fillRect(x,y,2,32);
   g.fillStyle='#e0d8c1';g.fillRect(x+3,y+3,27,1);g.fillRect(x+3,y+3,1,26);
  }
 }else if(kind==='shutter'){
  for(let y=0;y<128;y+=8){g.fillStyle='#25373b';g.fillRect(0,y,128,2);g.fillStyle='#8c9997';g.fillRect(0,y+2,128,1)}
  for(let i=0;i<21;i++){g.fillStyle=i%2?'#605140':'#314044';g.fillRect(noise(i+1)*128|0,noise(i+46)*128|0,1,8+(noise(i+16)*26|0))}
 }else if(kind==='pavement'){
  for(let y=0;y<128;y+=32)for(let x=0;x<128;x+=32){g.fillStyle='#343e3d';g.fillRect(x,y,32,2);g.fillRect(x,y,2,32)}
 }else{
  // The lower edge carries water marks instead of uniformly random noise.
  for(let i=0;i<14;i++){g.fillStyle='#595d50';g.globalAlpha=.2;g.fillRect(noise(i+5)*128|0,95+(noise(i+7)*22|0),3,33)}g.globalAlpha=1;
 }
 return texture(c,true);
}

/** Local entertainment and Helix propaganda; every illustration is drawn here. */
export function createDistrictPoster(kind:DistrictPoster):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=128;c.height=192;
 const g=c.getContext('2d')!;g.imageSmoothingEnabled=false;
 const rect=(x:number,y:number,w:number,h:number,color:string)=>{g.fillStyle=color;g.fillRect(x,y,w,h)};
 const text=(value:string,y:number,size:number,color:string)=>{g.font=`bold ${size}px monospace`;g.textAlign='center';g.fillStyle=color;g.fillText(value,64,y)};
 if(kind==='vesper'){
  rect(0,0,128,192,'#c1af84');rect(6,6,116,180,'#3e3839');
  rect(9,36,110,105,'#6c5148');rect(13,40,104,3,'#ab6f55');
  // A glowing moon behind a noir city, detective's hat and coat silhouette.
  g.fillStyle='#d6ad63';g.beginPath();g.arc(87,64,21,0,Math.PI*2);g.fill();
  for(let i=0;i<10;i++){const x=10+i*11,h=22+(noise(i+56)*36|0);rect(x,139-h,10,h,i%2?'#393d43':'#48454b');for(let yy=142-h;yy<133;yy+=7)rect(x+2,yy,2,2,'#bdb487')}
  rect(48,77,28,15,'#161f27');rect(40,89,46,5,'#171e25');
  rect(51,96,22,21,'#8c765d');rect(55,98,20,5,'#be9b73');
  rect(58,105,18,3,'#25252c');rect(65,108,9,5,'#25252c');
  rect(46,119,36,23,'#202732');rect(39,130,49,14,'#202732');
  rect(47,120,7,23,'#726656');rect(75,123,7,20,'#789591');
  text('VESPER',28,20,'#dec79c');text('MIDNIGHT',163,13,'#e0c097');text('CASE FILE 091',177,8,'#c19676');
 }else if(kind==='eden'){
  rect(0,0,128,192,'#181c31');rect(5,5,118,182,'#313553');
  for(let y=48;y<142;y+=7)rect(9,y,110,1,y%2?'#675c8b':'#45647c');
  // An original singer under alternating magenta and cyan stage beams.
  g.fillStyle='#6b527e';g.beginPath();g.moveTo(9,47);g.lineTo(62,135);g.lineTo(29,139);g.fill();
  g.fillStyle='#547d82';g.beginPath();g.moveTo(117,47);g.lineTo(66,137);g.lineTo(102,142);g.fill();
  rect(53,64,19,24,'#b9a182');rect(48,67,7,28,'#2a2539');rect(69,62,8,35,'#2a2539');
  rect(51,64,23,6,'#282039');rect(56,76,5,2,'#303340');rect(65,76,5,2,'#303340');
  rect(51,89,23,40,'#482f55');rect(46,106,13,24,'#482f55');rect(72,99,6,26,'#9b897b');
  rect(60,128,6,19,'#181e2c');rect(70,125,6,22,'#181e2c');
  rect(77,94,2,55,'#bac3aa');rect(74,90,8,6,'#848c9e');rect(71,148,13,3,'#bac3aa');
  text('EDEN',29,26,'#eda7cb');text('AFTER DARK',46,11,'#8ce6d7');
  text('LIVE FROM VESPER',166,9,'#abc8c7');text('EVERY NIGHT',180,10,'#d59eb8');
 }else{
  rect(0,0,128,192,'#b8c5b0');rect(6,6,116,180,'#203a42');
  rect(10,11,108,31,'#315761');text('HELIX',31,19,'#d8dbc2');
  text('A BETTER',60,12,'#b1dad0');text('TOMORROW',76,12,'#b1dad0');
  // Genome ladders wrap around a deliberately abstract dinosaur profile.
  for(let i=0;i<14;i++){const y=83+i*4,x=25+Math.sin(i*.52)*9,z=102-Math.sin(i*.52)*9;rect(x,y,3,4,'#7dc7aa');rect(z,y,3,4,'#789b91');if(i%2===0)rect(x+3,y+1,z-x-3,1,'#446e6c')}
  rect(45,107,40,14,'#8dba9d');rect(78,99,12,16,'#8dba9d');rect(85,96,18,9,'#8dba9d');
  rect(30,112,19,5,'#8dba9d');rect(22,109,13,4,'#8dba9d');rect(46,119,7,15,'#8dba9d');rect(73,118,7,16,'#8dba9d');
  rect(96,97,3,2,'#182d38');rect(85,106,13,2,'#182d38');
  text('GENETICS FOR LIFE',157,9,'#d6d1a5');text('TRUST THE SCIENCE',174,9,'#95bab1');
 }
 for(let i=0;i<270;i++){g.fillStyle=i%2?'#ded8be':'#171c29';g.globalAlpha=.05+noise(i)*.13;g.fillRect(noise(i+16)*128|0,noise(i+77)*192|0,1+(noise(i+5)*3|0),1)}g.globalAlpha=1;
 return texture(c);
}
