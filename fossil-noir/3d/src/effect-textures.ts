import * as THREE from 'three';

/** Original eight-cell pixel VFX atlas. Grayscale sprites accept instance tint. */
export function createEffectTexture(enhanced=false):THREE.CanvasTexture {
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;
 const g=canvas.getContext('2d')!;g.imageSmoothingEnabled=false;
 const random=(seed:number)=>{const t=Math.sin(seed*127.17+19.32)*43571.91;return t-Math.floor(t)};
 const stamp=(tile:number,paint:()=>void)=>{g.save();g.translate((tile%4)*64,(1-Math.floor(tile/4))*64);paint();g.restore()};
 const rect=(x:number,y:number,w:number,h:number,color='#ffffff')=>{g.fillStyle=color;g.fillRect(x,y,w,h)};
 const polygon=(points:number[],color:string)=>{g.fillStyle=color;g.beginPath();g.moveTo(points[0],points[1]);for(let i=2;i<points.length;i+=2)g.lineTo(points[i],points[i+1]);g.closePath();g.fill()};
 // Impact sparks: sparse incandescent rays, separated from an opaque cube silhouette.
 stamp(0,()=>{
  polygon([31,7,34,26,54,17,39,30,58,34,37,37,48,53,33,41,25,58,27,38,9,45,23,32,8,20,28,27],'#adadad');
  polygon([29,23,37,25,42,33,35,40,27,36,24,29],'#ffffff');
  rect(13,11,3,3,'#cdcdcd');rect(48,45,4,2,'#b8b8b8');rect(19,49,2,4,'#dedede');
 });
 // Enemy muzzle flame: an irregular short flash with a white center.
 stamp(1,()=>{
  polygon([31,2,37,18,49,10,44,26,62,27,47,36,55,48,38,43,30,62,24,44,8,52,15,37,2,27,22,24,17,8,28,18],'#909090');
  polygon([31,11,35,24,47,22,42,31,49,39,36,38,29,49,26,38,14,35,24,29,24,17,29,24],'#dedede');
  polygon([29,25,36,26,39,33,33,38,26,34,25,29],'#ffffff');
 });
 // Explosion lobes are painted in coarse tiers, with a dark ragged outer fringe.
 stamp(2,()=>{
  for(let i=0;i<18;i++){
   const a=i*Math.PI*2/18,r=18+random(i+7)*9,x=32+Math.cos(a)*r,y=34+Math.sin(a)*r;
   rect(x|0,y|0,5+(random(i+28)*6|0),4+(random(i+62)*7|0),'#5d5d5d');
  }
  polygon([9,34,10,22,18,13,27,12,31,5,41,14,48,15,51,25,58,31,49,44,42,51,32,56,23,48,14,47],'#9b9b9b');
  polygon([17,31,20,20,29,18,33,12,41,23,46,23,48,36,39,45,31,47,22,40],'#dbdbdb');
  polygon([24,31,29,24,34,20,38,31,42,36,34,41,27,37],'#ffffff');
  for(let i=0;i<37;i++)rect(14+(random(i+134)*37|0),16+(random(i+172)*33|0),1+i%3,1,i%3?'#b8b8b8':'#eeeeee');
 });
 // Smoke is alpha-dithered paint with a soft-looking irregular outline at native pixels.
 stamp(3,()=>{
  for(let y=4;y<61;y++)for(let x=4;x<61;x++){
   const dx=(x-32)/27,dy=(y-33)/25,edge=1-dx*dx-dy*dy;
   const lumps=Math.sin(x*.35)*.08+Math.sin(y*.28+x*.1)*.08;
   if(edge+lumps<.06||(!enhanced&&random(x*31+y*71)<Math.max(0,.24-edge*.24)))continue;
   const value=125+((1-dy)*39|0),alpha=Math.min(.72,.18+(edge+lumps)*.42);
   rect(x,y,1,1,`rgba(${value},${value},${value},${alpha})`);
  }
 });
 // Plasma: a green-tinted instance uses these stepped electric edges and hot nucleus.
 stamp(4,()=>{
  polygon([31,2,39,22,60,30,42,37,33,60,24,41,3,32,24,23],'#787878');
  polygon([30,12,36,26,48,32,37,37,32,50,26,38,15,31,26,27],'#d7d7d7');
  rect(27,26,10,10);rect(22,30,20,3);rect(30,21,3,21);
  polygon([9,13,17,17,14,22,21,25,18,29,24,32,16,31,12,24,15,19],'#bcbcbc');
 });
 // Blood: droplets have deliberately unequal sizes, keeping a spatter shape.
 stamp(5,()=>{
  for(let i=0;i<15;i++){
   const x=8+(random(i+15)*43|0),y=8+(random(i+52)*43|0),s=2+(random(i+103)*9|0);
   rect(x,y,s,s,i%3?'#8c8c8c':'#b7b7b7');rect(x+1,y,Math.max(1,s-3),2,'#dedede');
  }
 });
 // Broken glass: narrow slanted shard with a painted bright edge.
 stamp(6,()=>{polygon([12,18,49,9,54,40,33,52,17,41],'#777777');polygon([15,19,45,13,40,37,19,40],'#d7d7d7');polygon([43,14,51,36,36,47,40,37],'#b7b7b7');rect(20,19,20,2)});
 stamp(7,()=>{rect(23,30,19,3);rect(31,23,3,18);rect(20,31,4,2,'#898989');rect(32,19,2,5,'#bcbcbc')});
 const map=new THREE.CanvasTexture(canvas);map.magFilter=enhanced?THREE.LinearFilter:THREE.NearestFilter;map.minFilter=enhanced?THREE.LinearFilter:THREE.NearestFilter;map.generateMipmaps=false;map.colorSpace=THREE.SRGBColorSpace;
 return map;
}
