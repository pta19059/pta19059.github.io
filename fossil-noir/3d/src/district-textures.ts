import * as THREE from 'three';

export type DistrictSurface='stucco'|'terracotta'|'porcelain'|'shutter'|'pavement'|'paint'|'stone';
export type DistrictPoster='vesper'|'eden'|'helix';

const noise=(n:number)=>{const x=Math.sin(n*153.73+12.81)*43857.193;return x-Math.floor(x)};
function texture(canvas:HTMLCanvasElement,repeat=false){
 const result=new THREE.CanvasTexture(canvas);
 result.magFilter=result.minFilter=THREE.NearestFilter;
 result.colorSpace=THREE.SRGBColorSpace;result.generateMipmaps=false;
 if(repeat)result.wrapS=result.wrapT=THREE.RepeatWrapping;
 return result;
}

function cloud(x:number,y:number,scale:number,seed:number){
 const fx=x/scale,fy=y/scale,ix=Math.floor(fx),iy=Math.floor(fy),u=fx-ix,v=fy-iy;
 const n=(a:number,b:number)=>noise(a*53+b*179+seed);
 const sx=u*u*(3-2*u),sy=v*v*(3-2*v);
 return (n(ix,iy)*(1-sx)+n(ix+1,iy)*sx)*(1-sy)+(n(ix,iy+1)*(1-sx)+n(ix+1,iy+1)*sx)*sy;
}
/** Layered original stone, pigment and corrosion, rather than flat paint. */
export function createDistrictTexture(kind:DistrictSurface):THREE.CanvasTexture {
 const c=document.createElement('canvas');c.width=c.height=256;
 const g=c.getContext('2d')!;
 const base:Record<DistrictSurface,number[]>={
  stucco:[184,177,158],terracotta:[146,100,76],porcelain:[171,175,160],
  shutter:[106,116,115],pavement:[122,123,112],paint:[185,183,171],stone:[170,169,150],
 };
 const data=g.createImageData(256,256),values=base[kind];
 for(let y=0;y<256;y++)for(let x=0;x<256;x++){
  const index=(y*256+x)*4,large=cloud(x,y,54,13),medium=cloud(x,y,13,39),grain=noise(x+y*263);
  const variation=(large-.5)*35+(medium-.5)*22+(grain-.5)*24;
  for(let channel=0;channel<3;channel++)data.data[index+channel]=Math.max(0,Math.min(255,values[channel]+variation));data.data[index+3]=255;
 }
 g.putImageData(data,0,0);
 const rect=(x:number,y:number,w:number,h:number,color:string,alpha=1)=>{g.fillStyle=color;g.globalAlpha=alpha;g.fillRect(x,y,w,h);g.globalAlpha=1};
 const crack=(x:number,y:number,length:number,seed:number)=>{
  for(let i=0;i<length;i++){
   const yy=y+i*2,xx=x+Math.floor(Math.sin(i*.53+seed)*2+i*.26);
   rect(xx+1,yy,1,3,'#d0c4a9',.38);rect(xx,yy,1,3,'#3e433b',.54);
   if(i===Math.floor(length*.6))for(let j=0;j<9;j++)rect(xx-j,yy+j,1,2,'#41433a',.35);
  }
 };
 if(kind==='terracotta'){
  for(let row=0;row<8;row++)for(let col=-1;col<5;col++){
   const x=col*64+(row%2)*32,y=row*32,id=row*5+col;
   rect(x+3,y+3,59,27,id%3===0?'#af7959':'#5d493c',.13+noise(id+90)*.21);
   rect(x,y,64,3,'#8d8977');rect(x,y,3,32,'#8d8977');
   rect(x+3,y+3,60,1,'#d5a17c',.53);rect(x+3,y+29,60,2,'#523c33',.68);
   for(let k=0;k<8;k++)rect(x+4+noise(id*7+k)*54,y+4+noise(id*13+k+61)*23,2+noise(k)*5,1,'#ccb294',.19);
   if(noise(id+20)>.71)crack(x+29,y+7,10,id);
  }
 }else if(kind==='porcelain'){
  for(let y=0;y<256;y+=32)for(let x=0;x<256;x+=32){
   const seed=x*3+y;rect(x+2,y+2,30,30,seed%3?'#d7d0b9':'#6f8c7d',.07+noise(seed)*.2);
   rect(x,y,32,2,'#5e6a60');rect(x,y,2,32,'#5e6a60');
   rect(x+3,y+3,27,1,'#eee4c8',.75);rect(x+3,y+3,1,26,'#d3d4be',.5);
   rect(x+29,y+4,1,27,'#6d776a',.6);
   if(noise(seed+67)>.78){rect(x+2,y+2,4,3,'#777765');rect(x+2,y+5,2,4,'#93907c')}
   if(noise(seed+91)>.89)crack(x+10,y+8,8,seed);
  }
 }else if(kind==='shutter'){
  for(let y=0;y<256;y+=12){rect(0,y,256,2,'#243a3a');rect(0,y+2,256,2,'#b5bab0',.56);rect(0,y+10,256,2,'#3e5050',.65)}
  for(let i=0;i<50;i++){
   const x=noise(i+1)*256|0,y=noise(i+46)*256|0;rect(x,y,1,6+(noise(i+16)*34|0),'#6c4d36',.63);
   rect(x+1,y+3,1,8,'#bb9d73',.41);rect(x-1,y,3,2,'#bec7b5',.44);
  }
 }else if(kind==='pavement'){
  for(let y=0;y<256;y+=64)for(let x=0;x<256;x+=64){rect(x,y,64,2,'#48514a');rect(x,y,2,64,'#48514a');rect(x+2,y+2,60,1,'#aaac98',.5);if(noise(x+y+61)>.4)crack(x+11,y+9,18,x+y)}
 }else if(kind==='stone'){
  for(let y=0;y<256;y+=64){rect(0,y,256,3,'#787e6d');rect(0,y+3,256,1,'#d0cab2',.66);for(let x=-64;x<256;x+=128)rect(x+(y%128)*.5,y,3,64,'#7c8170')}
 }else{
  for(let i=0;i<12;i++){
   const x=noise(i+5)*256|0,y=noise(i+7)*256|0;
   const stain=g.createLinearGradient(0,y,0,y+37);stain.addColorStop(0,'rgba(67,74,57,.24)');stain.addColorStop(1,'rgba(67,74,57,0)');g.fillStyle=stain;g.fillRect(x,y,4+noise(i+30)*8,39);
   if(i<4)crack(x,y,12+noise(i+29)*16|0,i);
  }
  for(let i=0;i<18;i++){
   const x=noise(i+73)*256,y=noise(i+129)*256,w=4+noise(i+84)*16,h=2+noise(i+16)*9;
   rect(x,y,w,h,'#aaa087',.43);rect(x+1,y+1,w-2,h-2,'#d6cbb0',.35);
  }
 }
 return texture(c,true);
}

function painter(width=128,height=192){
 const canvas=document.createElement('canvas');canvas.width=width*2;canvas.height=height*2;
 const g=canvas.getContext('2d')!;g.scale(2,2);
 const rect=(x:number,y:number,w:number,h:number,color:string)=>{g.fillStyle=color;g.fillRect(x,y,w,h)};
 const poly=(points:number[][],color:string)=>{g.fillStyle=color;g.beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill()};
 const ellipse=(x:number,y:number,rx:number,ry:number,color:string)=>{g.fillStyle=color;g.beginPath();g.ellipse(x,y,rx,ry,0,0,Math.PI*2);g.fill()};
 const shade=(x:number,y:number,w:number,h:number,colors:string[])=>{const gradient=g.createLinearGradient(x,y,x+w,y+h);colors.forEach((color,i)=>gradient.addColorStop(i/(colors.length-1),color));g.fillStyle=gradient;g.fillRect(x,y,w,h)};
 const text=(value:string,y:number,size:number,color:string,font='serif')=>{g.font=`bold ${size}px ${font}`;g.textAlign='center';g.fillStyle='#181f24';g.fillText(value,width/2+1,y+1);g.fillStyle=color;g.fillText(value,width/2,y)};
 return {canvas,g,rect,poly,ellipse,shade,text};
}
/** Limited-color dither, paper grain and ink registration imitate scanned art. */
function printed(canvas:HTMLCanvasElement,wear=.5):THREE.CanvasTexture {
 const g=canvas.getContext('2d')!,image=g.getImageData(0,0,canvas.width,canvas.height),values=image.data;
 const bayer=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
 for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++){
  const index=(y*canvas.width+x)*4,grain=(noise(x+y*canvas.width+88)-.5)*12*wear,dither=(bayer[(y%4)*4+x%4]-7.5)*.55;
  const stain=(cloud(x,y,31,28)-.5)*14*wear;
  for(let c=0;c<3;c++)values[index+c]=Math.max(0,Math.min(255,Math.round((values[index+c]+grain+dither+stain)/8)*8));
 }
 g.putImageData(image,0,0);return texture(canvas);
}

/** Original painted advertising, textured and dithered at era-appropriate sizes. */
export function createDistrictPoster(kind:DistrictPoster):THREE.CanvasTexture {
 const {canvas,g,rect,poly,ellipse,shade,text}=painter();
 rect(0,0,128,192,kind==='eden'?'#a39898':'#c2b796');
 if(kind==='vesper'){
  shade(5,5,118,180,['#775c4b','#26373b','#151d26']);
  ellipse(91,61,22,23,'#c5a46b');ellipse(88,59,19,20,'#d7b674');
  for(let i=0;i<13;i++){
   const x=7+i*9,h=22+(noise(i+56)*51|0);shade(x,142-h,9,h,['#273238','#0f1b26']);
   for(let yy=144-h;yy<137;yy+=6)if(noise(i+yy)>.35)rect(x+2,yy,2,2,'#c3aa73');
  }
  // The detective is a painted bust with asymmetric flesh, cast shadow and
  // mechanical joints, rather than the former rectangular character icon.
  poly([[28,141],[31,127],[43,117],[69,113],[90,129],[99,148]],'#101b26');
  shade(34,129,61,22,['#4e5555','#17242e','#0e1824']);
  poly([[46,115],[51,137],[59,130],[68,116]],'#b4aa8d');
  poly([[36,124],[44,118],[51,147],[44,145]],'#716b5c');
  poly([[73,118],[86,128],[75,147],[68,135]],'#3c4d54');
  ellipse(61,92,18,26,'#302b2a');ellipse(64,91,14,23,'#a88560');
  poly([[62,73],[74,79],[75,98],[69,108],[60,113],[54,103],[56,86]],'#c5a173');
  poly([[54,88],[60,95],[55,107],[49,102],[46,89]],'#73644f');
  poly([[68,87],[73,96],[65,99],[67,94]],'#e3ba85');
  poly([[59,105],[67,106],[71,102],[70,109],[63,113]],'#765747');
  rect(59,102,9,1,'#493a34');rect(61,110,7,1,'#c49b70');
  g.lineWidth=2;g.strokeStyle='#252528';g.beginPath();g.moveTo(49,84);g.lineTo(77,93);g.stroke();
  ellipse(69,89,5,5,'#212329');rect(55,88,5,1,'#303436');rect(58,88,1,1,'#d4e0c1');
  // Hat has a shaped brim and multiple faded felt shades.
  poly([[45,70],[49,52],[72,50],[80,70]],'#514435');
  poly([[50,53],[58,57],[70,53],[73,67],[49,67]],'#776248');
  rect(47,66,31,5,'#232b2b');ellipse(62,74,30,5,'#292a26');ellipse(61,72,29,3,'#79654b');
  for(let i=0;i<21;i++)rect(47+noise(i)*28,54+noise(i+39)*12,1,1,'#a48c64');
  poly([[84,129],[91,128],[96,150],[83,150],[81,136]],'#7e9494');
  for(let i=0;i<5;i++){rect(83+i*.7,132+i*3,10,1,'#c3c5ac');rect(82+i*.7,133+i*3,10,2,'#34494e')}
  ellipse(87,133,3,3,'#b8b796');ellipse(87,133,1.4,1.4,'#574f42');
  for(let i=0;i<15;i++)rect(34+noise(i+42)*44,132+noise(i+99)*18,2,1,'#536365');
  text('VESPER',28,20,'#ead4a3');text('MIDNIGHT',167,17,'#d7bb87');text('THE ELIAS VANE FILES',181,6.8,'#c9b790','monospace');
 }else if(kind==='eden'){
  shade(5,5,118,180,['#61566d','#253243','#16212d']);
  for(let i=0;i<7;i++){g.globalAlpha=.15;poly([[12+i*17,38],[52+i*5,145],[22+i*12,145]],i%2?'#9ccac5':'#d191af')}g.globalAlpha=1;
  for(let i=0;i<85;i++)rect(7+noise(i+20)*113,44+noise(i+42)*103,1,1,i%2?'#a4c7c2':'#766a87');
  // Face, loose hair and hand painted against a small nightclub stage.
  ellipse(64,78,22,27,'#232738');ellipse(64,79,14,23,'#c2997d');
  poly([[59,60],[72,68],[74,85],[68,97],[60,97],[54,86],[53,74]],'#d5b28b');
  poly([[53,74],[57,83],[58,91],[63,96],[57,96],[50,87]],'#967567');
  poly([[65,76],[68,87],[63,87],[63,82]],'#e3c39c');rect(60,90,9,2,'#70474d');rect(63,92,5,1,'#cd8c86');
  g.strokeStyle='#202332';g.lineWidth=1.3;for(const x of [57,67]){g.beginPath();g.moveTo(x,77);g.lineTo(x+5,78);g.stroke()}
  ellipse(62,56,18,9,'#282739');poly([[45,65],[58,56],[48,98],[38,100]],'#222433');poly([[72,61],[82,70],[89,114],[75,100]],'#292c3b');
  for(let i=0;i<14;i++){g.strokeStyle=i%2?'#615272':'#434452';g.beginPath();g.moveTo(43+i*2.5,62);g.bezierCurveTo(44+i*2,78,41+i*3,81,43+i*2.9,102);g.stroke()}
  poly([[49,96],[58,104],[68,103],[77,96],[82,136],[41,137]],'#673955');
  poly([[55,99],[63,111],[69,99]],'#e4b996');poly([[47,104],[43,134],[52,139],[56,111]],'#3f3047');
  poly([[76,101],[83,110],[91,95],[95,98],[88,123],[79,124]],'#c59481');
  poly([[43,137],[56,137],[56,153],[40,153]],'#182332');poly([[62,136],[74,137],[82,153],[67,153]],'#192331');
  for(let i=0;i<21;i++)rect(48+noise(i+17)*26,108+noise(i+16)*27,1,1,'#b06d89');
  rect(91,86,2,66,'#bbc0ab');ellipse(91,84,5,7,'#727f82');rect(88,79,5,8,'#b6bcab');
  for(let i=0;i<4;i++)rect(89,80+i*2,5,1,'#4a5764');ellipse(90,155,10,2,'#737e84');
  text('EDEN',31,27,'#dfb0c4');text('AFTER DARK',48,11,'#d0d9ca','monospace');
  text('LIVE IN VESPER',172,10,'#c7c5b7');text('ONE NIGHT. EVERY NIGHT.',182,5.8,'#bda8ab','monospace');
 }else{
  shade(5,5,118,180,['#cad0b4','#91aaa1','#29454c']);
  rect(9,9,110,31,'#2b515a');text('HELIX',32,22,'#dddcc2');text('A BETTER TOMORROW',56,8.7,'#263c43','monospace');
  for(let i=0;i<28;i++){const y=66+i*2.7,x=26+Math.sin(i*.32)*12,z=101-Math.sin(i*.32)*12;ellipse(x,y,2,2,'#587e74');ellipse(z,y,2,2,'#456b69');if(i%2===0){g.strokeStyle='#7b9b89';g.lineWidth=.5;g.beginPath();g.moveTo(x,y);g.lineTo(z,y);g.stroke()}}
  ellipse(61,113,31,12,'#406657');ellipse(62,108,28,9,'#708773');
  poly([[35,109],[22,116],[11,122],[29,119],[44,116]],'#4f7461');
  poly([[79,108],[86,94],[100,88],[111,92],[114,100],[98,101],[89,112]],'#6b8066');
  poly([[98,92],[112,96],[108,101],[94,100]],'#a0a480');
  ellipse(104,94,2,2,'#243e39');rect(104,93,1,1,'#dcd185');
  poly([[96,102],[108,102],[104,107],[92,105]],'#3b5147');
  for(let i=0;i<5;i++)poly([[95+i*2,102],[96+i*2,105],[97+i*2,102]],'#d8d3a7');
  poly([[50,115],[46,129],[57,133],[54,142],[67,142],[58,138],[62,127],[61,117]],'#526a55');
  poly([[74,116],[68,129],[77,133],[80,143],[89,143],[84,139],[84,126],[83,115]],'#70816a');
  for(let i=0;i<3;i++){rect(60+i*3,141,1,2,'#d8cf9e');rect(82+i*2,141,1,2,'#d8cf9e')}
  poly([[85,105],[79,117],[86,120],[88,119],[84,116],[89,108]],'#859376');
  for(let i=0;i<180;i++){
   const x=34+noise(i)*52,y=101+noise(i+34)*19;if(((x-61)/29)**2+((y-112)/11)**2<1)ellipse(x,y,.65,.55,i%2?'#a7ad89':'#405c4e');
  }
  text('GENETICS FOR LIFE',159,9.6,'#e0dac0');text('TRUST THE SCIENCE',176,9,'#bfd1bf','monospace');
 }
 // Light scratches and tears are content-specific, not a screen noise overlay.
 for(let i=0;i<63;i++){g.globalAlpha=.12;rect(5+noise(i+27)*118,6+noise(i+117)*177,1,1+noise(i+21)*3,i%2?'#d9d1b5':'#202831')}g.globalAlpha=1;
 return printed(canvas,.8);
}

/** Original illustrated diner emblem on the large projecting street landmark. */
export function createDistrictLandmark():THREE.CanvasTexture {
 const {canvas,g,rect,poly,ellipse,shade,text}=painter(128,160);
 shade(0,0,128,160,['#bbaa78','#715c3c','#292d30']);rect(5,5,118,150,'#352d2c');
 rect(8,8,112,144,'#b8a773');rect(12,12,104,136,'#333d3c');
 text('VESPER',35,21,'#e6d2a0');text('NIGHT DINER',52,10,'#ceb887','monospace');
 ellipse(64,111,36,9,'#b8b396');ellipse(64,108,34,7,'#e3d3ae');ellipse(63,108,27,3,'#7c7c62');
 g.strokeStyle='#d1c29c';g.lineWidth=6;g.beginPath();g.ellipse(88,88,12,10,0,0,Math.PI*2);g.stroke();
 poly([[34,79],[85,79],[80,105],[71,112],[50,110],[40,103]],'#b0ad87');
 poly([[42,79],[75,80],[71,107],[54,107],[45,101]],'#e4d7aa');
 poly([[35,82],[40,101],[51,108],[52,103],[45,86]],'#7e8369');
 ellipse(60,79,25,7,'#ece0b2');ellipse(60,79,21,4,'#594633');ellipse(58,77,14,2,'#927b51');
 for(let i=0;i<4;i++){g.strokeStyle=i%2?'#9fa382':'#c3bc92';g.lineWidth=1.8;g.beginPath();g.moveTo(48+i*8,71);g.bezierCurveTo(39+i*9,59,58+i*7,67,53+i*7,56);g.stroke()}
 text('COFFEE UNTIL DAWN',135,6.3,'#c6b98f','monospace');text('EST. 2041',145,6,'#a9a681','monospace');
 for(const x of [8,120])for(const y of [8,152]){ellipse(x,y,2,2,'#d4c7a1');rect(x-1,y,2,.5,'#635b43')}
 return printed(canvas,1);
}

/** Shop interiors are shaded scene illustrations, not four floating rectangles. */
export function createDistrictInterior(kind:'diner'|'records'):THREE.CanvasTexture {
 const {canvas,g,rect,poly,ellipse,shade,text}=painter(192,132);
 shade(0,0,192,132,kind==='diner'?['#403c32','#68533f','#172629']:['#34474b','#48424a','#1a2835']);
 poly([[0,0],[39,22],[39,104],[0,132]],'#343734');poly([[192,0],[151,22],[151,104],[192,132]],'#252d31');
 shade(39,22,112,82,kind==='diner'?['#70745b','#64563f','#3b453d']:['#5b6765','#39404a','#383b45']);
 for(let y=27;y<88;y+=12)for(let x=40;x<150;x+=18){rect(x,y,17,.8,'#33443a');rect(x,y,1,12,'#39463c')}
 rect(10,16,170,2,'#b1b295');rect(44,23,104,2,kind==='diner'?'#d4ba88':'#8caab0');
 for(const x of [58,134]){poly([[x-11,1],[x+11,1],[x+15,8],[x-15,8]],'#222e32');ellipse(x,8,13,2,'#bfc2a0')}
 if(kind==='diner'){
  rect(49,34,41,27,'#26352e');rect(50,35,39,25,'#33493c');
  g.font='italic 5px serif';g.fillStyle='#b8c19f';g.textAlign='left';g.fillText('Tonight’s special',54,43);g.fillText('Coffee / Pie',54,51);g.fillText('OPEN ALL NIGHT',54,58);
  rect(112,34,26,35,'#959a7c');shade(115,37,20,20,['#606b61','#303e3b']);rect(116,61,16,2,'#c2baa1');
  for(let j=0;j<3;j++){rect(39,73+j*13,112,3,'#403d32');rect(40,73+j*13,111,.8,'#ac9671');for(let i=0;i<8;i++){const x=47+i*12.3;ellipse(x,70+j*13,4.5,1.5,'#a7b091');rect(x-3,64+j*13,6,6,'#c0c1a3');rect(x-3,65+j*13,1,5,'#838e79')}}
  poly([[8,98],[177,98],[191,113],[0,113]],'#b39b70');shade(0,113,192,19,['#746b55','#4b5045']);
  ellipse(110,100,18,3,'#cad0ad');ellipse(110,99,13,2,'#937750');
  for(const x of [24,60,154]){ellipse(x,100,5,2,'#d3c7a7');rect(x-4,95,8,5,'#d3c7a7');ellipse(x,94,4,1.3,'#6e6042')}
 }else{
  for(let row=0;row<3;row++)for(let col=0;col<8;col++){
   const x=43+col*13.3,y=32+row*21;shade(x,y,12,18,[['#967058','#644a4c'],['#8b9492','#405663'],['#ad9e7c','#5a5b59']][(row+col)%3]);
   ellipse(x+6,y+8,3,4,['#cfb691','#b4c3b4','#a9897f'][col%3]);rect(x+2,y+14,8,1,'#d5c5a8');
  }
  poly([[0,111],[26,94],[164,94],[192,111]],'#7a8580');shade(0,111,192,21,['#526665','#253944']);
  for(let i=0;i<15;i++)rect(8+i*12,104,8,3,['#b5a078','#839b9b','#926871'][i%3]);
  text('EDEN RECORDS',16,8,'#9dbcbc','monospace');
 }
 return printed(canvas,.35);
}
