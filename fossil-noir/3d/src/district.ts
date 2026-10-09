import * as THREE from 'three';
import type {SetDressingAPI} from './set-dressing';
import {createDistrictTexture,createDistrictPoster,createDistrictInterior,createDistrictLandmark,type DistrictSurface,type DistrictPoster} from './district-textures';

const noise=(n:number)=>{const t=Math.sin(n*137.63+9.31)*47815.129;return t-Math.floor(t)};

/**
 * A designed city frontage rather than a repeating industrial corridor.
 * The collision map stays authoritative: all ground-level relief fits in the
 * existing wall skin; overhanging signs/awnings have at least 3.5 m clearance.
 * Shared materials are fed through the renderer's existing static mesh batches.
 */
export function buildDistrict(api:SetDressingAPI):void {
 const box=api.box.bind(api);
 const surfaces=new Map<DistrictSurface,THREE.CanvasTexture>();
 const surface=(kind:DistrictSurface,color=0xffffff)=>{
  let map=surfaces.get(kind);if(!map){map=createDistrictTexture(kind);surfaces.set(kind,map)}
  return new THREE.MeshLambertMaterial({map,color});
 };
 const stucco=surface('stucco'),brick=surface('terracotta'),porcelain=surface('porcelain'),shutter=surface('shutter'),paving=surface('pavement');
 // Weathered stone and pigment keep broad facade planes textured too, rather
 // than putting all the visual detail in trim over featureless flat colors.
 const cream=surface('stone',0xf1ddba),chalk=surface('stone',0xe7e3d5),oxide=surface('paint',0xb37655),claret=surface('paint',0x9b7680),olive=surface('paint',0xa8aa83);
 const violet=surface('paint',0x847987),blue=surface('paint',0x90a0a4),teal=surface('paint',0x739795),steel=api.mat(0x667579),iron=api.mat(0x26333b),black=api.mat(0x14202b);
 const windowDark=api.mat(0x112634),windowWarm=api.mat(0x3c3832,0x1e1608),windowCool=api.mat(0x243c45,0x102a31);
 const amber=api.basic(0xffbf65),pink=api.basic(0xf07eaa),cyan=api.basic(0x74c6db),mint=api.basic(0x91d3b1),warmWindow=api.basic(0xb9ac79),coolWindow=api.basic(0x638c98);
 const posterMaterials=new Map<DistrictPoster,THREE.Material>();
 const interiorMaterials=new Map<string,THREE.Material>();
 const poster=(kind:DistrictPoster,side:number,z:number,y=2.1,w=1.38,h=2.08)=>{
  let material=posterMaterials.get(kind);
  if(!material){material=new THREE.MeshBasicMaterial({map:createDistrictPoster(kind)});posterMaterials.set(kind,material)}
  box(side*12.785,y,z,.08,h+.16,w+.16,iron);
  api.addGeometry(new THREE.PlaneGeometry(w,h),material,side*12.732,y,z,0,-side*Math.PI/2);
  for(const dz of [-w/2-.035,w/2+.035])box(side*12.719,y,z+dz,.022,h+.1,.04,steel);
 };
 const band=(side:number,y:number,z:number,length:number,material:THREE.Material,h=.14,depth=.18)=>box(side*12.80,y,z,depth,h,length,material);
 const pilaster=(side:number,z:number,height:number,material:THREE.Material)=>{
  box(side*12.80,height/2,z,.22,height,.24,material);
  box(side*12.74,.29,z,.33,.35,.42,iron);
  box(side*12.72,height-.2,z,.37,.25,.42,material);
  box(side*12.691,height-.05,z,.44,.08,.48,chalk);
 };
 const shopWindow=(side:number,z:number,length:number,interior:THREE.Material,accent:THREE.Material,breakable=false)=>{
  const y=2.22,h=2.2;
  // The shallow, dark recess remains visible when the interactive pane breaks.
  box(side*12.856,y,z,.028,h,length,interior);
  for(const dz of [-length/2-.065,length/2+.065])box(side*12.746,y,z+dz,.15,h+.22,.13,iron);
  for(const yy of [1.07,3.37])box(side*12.735,yy,z,.17,.13,length+.25,chalk);
  box(side*12.746,.89,z,.13,.19,length+.23,iron);
  // Painted perspective supplies a full dim shop interior behind actual glass:
  // shelves, crockery, diner menu and stacked record sleeves, without opening
  // an untraversable room through the original solid collision boundary.
  const kind=side<0?'diner':'records';let display=interiorMaterials.get(kind);
  if(!display){display=new THREE.MeshBasicMaterial({map:createDistrictInterior(kind)});interiorMaterials.set(kind,display)}
  api.addGeometry(new THREE.PlaneGeometry(length-.04,h-.045),display,side*12.828,y,z,0,-side*Math.PI/2);
  box(side*12.789,1.16,z,.04,.05,length-.21,cream);
  if(!breakable){
   for(let k=1;k<3;k++)box(side*12.701,y,z-length/2+k*length/3,.055,h,.045,steel);
   // Small flat reflected highlights keep the illustrated view unmistakably glass.
   for(let k=0;k<2;k++)box(side*12.695,2.8-k*.12,z+.3+k*.2,.02,.08,.41-k*.1,accent);
  }
 };
 const cornice=(side:number,z:number,length:number,color:THREE.Material,height=6.55)=>{
  band(side,height-.25,z,length,color,.24,.34);band(side,height,z,length+.18,chalk,.14,.45);
  band(side,height+.12,z,length+.27,iron,.1,.48);
  for(let dz=-length/2+.27;dz<length/2;dz+=.68)box(side*12.685,height-.49,z+dz,.22,.24,.13,color);
 };
 const awning=(side:number,z:number,length:number,color:THREE.Material,stripe:THREE.Material)=>{
  box(side*12.39,3.85,z,1.13,.1,length,iron);
  for(let j=0;j<Math.round(length/.35);j++)box(side*12.39,3.923,z-length/2+.175+j*.35,1.14,.024,.32,j%2?stripe:color);
  box(side*11.82,3.65,z,.065,.35,length,color);
  for(let dz=-length/2+.2;dz<length/2;dz+=.7)box(side*11.784,3.66,z+dz,.02,.035,.26,stripe);
 };
 const signFrame=(side:number,z:number,text:string,width:number,fg:string,bg:string,y=4.6,h=.87)=>{
  box(side*12.735,y,z,.29,h+.24,width+.28,iron);
  box(side*12.566,y+h/2+.084,z,.065,.048,width+.21,chalk);
  api.sign(text,side*12.553,y,z,width,h,-side*Math.PI/2,fg,bg);
 };
 const landmark=new THREE.MeshBasicMaterial({map:createDistrictLandmark()});
 const projectingSign=(side:number,z:number,text:string,fg:string,bg:string,w=1.38,h=2.1,pictorial=false)=>{
  const x=side*11.77,y=4.8;
  box(side*12.25,6.01,z,1.35,.1,.11,iron);
  box(side*12.88,5.75,z,.14,.65,.15,steel);
  box(x,y,z,w+.15,h+.15,.18,iron);
  box(x,y+h/2+.1,z,w+.25,.06,.24,chalk);
  if(pictorial){
   api.addGeometry(new THREE.PlaneGeometry(w,h),landmark,x,y,z+.105);
   api.addGeometry(new THREE.PlaneGeometry(w,h),landmark,x,y,z-.105,0,Math.PI);
  }else{
   api.sign(text,x,y,z+.105,w,h,0,fg,bg);
   api.sign(text,x,y,z-.105,w,h,Math.PI,fg,bg);
  }
 };

 // WEST: a late-night diner with pale ceramic and terracotta; its breakable
 // display window is the first inviting warm pool of light outside the office.
 box(-12.947,3.22,.1,.065,6.44,6.5,stucco);
 box(-12.925,.61,.1,.06,1.22,6.5,porcelain);
 box(-12.924,5.55,.1,.065,1.1,6.5,brick);
 for(const z of [-3.23,3.35])pilaster(-1,z,6.4,cream);
 band(-1,1.12,.1,6.5,oxide,.1);band(-1,3.48,.1,6.5,cream,.18,.24);
 shopWindow(-1,-1.7,3.2,windowWarm,amber,true);
 // A separate narrow door and tiled address plaque give the frontage scale.
 box(-12.825,1.92,1.71,.075,2.56,1.26,claret);
 box(-12.776,2.38,1.71,.025,1.43,.86,windowWarm);
 box(-12.75,1.37,1.28,.035,.22,.047,amber);
 for(const z of [1.045,2.375])box(-12.753,1.91,z,.11,2.68,.12,cream);
 band(-1,3.3,1.71,1.53,cream,.12);
 signFrame(-1,.05,'VESPER / NIGHT DINER',5.65,'#ffcc79','#442b30');
 awning(-1,.03,6.2,oxide,cream);
 cornice(-1,.1,6.5,oxide,6.49);
 projectingSign(-1,2.57,'VESPER / NIGHT DINER','#ffd187','#47302e',1.75,2.38,true);
 // Small upper hotel lights, paired sash frames and stepped bay relief.
 for(const z of [-1.7,1.65]){
  box(-12.885,5.47,z,.08,1.18,1.23,windowDark);
  for(const dz of [-.66,.66])box(-12.786,5.47,z+dz,.14,1.29,.12,cream);
  for(const y of [4.85,6.1])band(-1,y,z,1.39,cream,.095,.26);
  box(-12.778,5.47,z,.065,1.18,.055,iron);box(-12.774,5.47,z,.065,.055,1.2,iron);
  for(const dz of [-.31,.31])box(-12.844,5.47,z+dz,.016,1.02,.5,warmWindow);
 }

 // WEST: The Last Chance frames the actual hidden room doorway. No mesh is
 // placed within the passage (z -5.7..-8.3 below its 3.2 m lintel).
 box(-12.936,4.84,-7,.078,3.1,3.89,claret);
 for(const z of [-5.02,-8.98])pilaster(-1,z,6.38,oxide);
 band(-1,3.36,-7,3.89,iron,.17,.34);
 signFrame(-1,-7,'LAST CHANCE',3.46,'#ffe0a1','#592d3c',4.43,.76);
 cornice(-1,-7,3.99,claret,6.43);
 for(const z of [-5.4,-8.59]){
  box(-12.72,2.42,z,.16,.57,.17,iron);
  box(-12.62,2.42,z,.05,.4,.09,amber);
  box(-12.64,2.76,z,.11,.11,.28,cream);
 }
 projectingSign(-1,-8.92,'LAST / CHANCE','#f8ca89','#432434',1.38,1.75);
 for(let i=0;i<6;i++)box(-12.762,5.55,-8.45+i*.58,.045,.055,.19,amber);

 // WEST: a boarded cinema at the far end, pictorial billboards and tall
 // plaster piers deliberately break the repeated restaurant rhythm.
 box(-12.946,3.48,-13.77,.069,6.96,7.55,stucco);
 box(-12.919,1.07,-13.77,.04,2.14,7.55,brick);
 for(const z of [-9.94,-13.65,-17.58])pilaster(-1,z,6.9,oxide);
 box(-12.845,2.22,-15.56,.068,2.14,2.99,shutter);
 for(const dz of [-1.53,1.53])box(-12.778,2.22,-15.56+dz,.13,2.33,.14,claret);
 poster('vesper',-1,-11.65,2.23,2.55,3.2);
 signFrame(-1,-13.77,'VESPER PICTURE HOUSE',6.9,'#e3c389','#332b30',4.6,.77);
 awning(-1,-13.77,7.1,claret,cream);
 cornice(-1,-13.77,7.55,oxide,6.95);
 for(const z of [-11.72,-15.48]){
  box(-12.875,5.84,z,.08,1.15,2.47,windowDark);
  for(let k=0;k<4;k++)box(-12.78,5.84,z-1.19+k*.79,.12,1.31,.1,cream);
  for(const y of [5.19,6.49])band(-1,y,z,2.65,cream,.1,.26);
 }
 box(-12.928,3.41,-18.76,.056,6.78,2.26,brick);
 band(-1,6.72,-18.76,2.4,iron,.24,.36);

 // EAST: an azure record store transitions into Eden's magenta nightclub.
 // Its designated breakable pane sits at z-4.5 in a genuinely dark recess.
 box(12.946,3.35,-.23,.068,6.7,8.35,stucco);
 box(12.925,.55,-.23,.053,1.1,8.35,blue);
 for(const z of [3.96,-4.42])pilaster(1,z,6.64,chalk);
 shopWindow(1,.82,3.17,windowCool,cyan);
 box(12.82,1.94,3.07,.11,2.6,1.27,iron);
 box(12.755,2.19,3.07,.025,1.76,.83,windowCool);
 for(const z of [2.39,3.75])box(12.725,1.96,z,.115,2.72,.12,chalk);
 box(12.69,1.36,2.69,.046,.2,.05,cyan);
 poster('eden',1,-2.23,2.2,1.55,2.35);
 signFrame(1,-.23,'EDEN / SOUND & VISION',7.47,'#a6ddec','#2d344c',4.66,.85);
 awning(1,-.2,8.1,blue,chalk);cornice(1,-.23,8.35,blue,6.74);
 for(const z of [1.29,-2.29]){
  box(12.859,5.73,z,.084,1.03,1.89,windowDark);
  for(const dz of [-.98,.98])box(12.755,5.73,z+dz,.13,1.23,.13,chalk);
  for(const y of [5.13,6.34])band(1,y,z,2.14,chalk,.1,.28);
  box(12.777,5.73,z,.09,1.09,.07,iron);
  box(12.82,5.73,z-.46,.028,.93,.83,coolWindow);
 }

 box(12.945,3.55,-7.84,.07,7.1,6.71,violet);
 box(12.926,.57,-7.84,.048,1.14,6.71,brick);
 for(const z of [-4.47,-11.23])pilaster(1,z,7.1,blue);
 shopWindow(1,-4.5,3.2,windowDark,pink,true);
 // Pane shares its northern pilaster with the record-store frontage; the
 // nightclub's boarded doorway and illustrated show poster sit farther north.
 box(12.829,1.91,-8.8,.08,2.54,1.88,claret);
 for(const z of [-9.79,-7.81])box(12.75,1.91,z,.12,2.73,.13,blue);
 for(let j=0;j<6;j++)box(12.779,.88+j*.31,-8.8,.025,.09,1.79,iron);
 poster('eden',1,-10.28,2.23,1.14,2.25);
 signFrame(1,-7.85,'EDEN / AFTER DARK',5.75,'#ff9ec4','#312039',4.65,.95);
 band(1,3.44,-7.84,6.73,black,.17,.32);cornice(1,-7.84,6.71,blue,7.11);
 for(const z of [-5.01,-10.57]){
  box(12.75,4.49,z,.22,1.67,.23,iron);
  box(12.619,4.49,z,.045,1.49,.074,pink);
 }
 projectingSign(1,-7.24,'EDEN / ★','#ffb4d3','#30203a',1.38,2.26);
 for(const z of [-5.97,-9.85]){
  box(12.852,6.21,z,.078,1.14,1.63,windowDark);
  for(const dz of [-.86,.86])box(12.75,6.21,z+dz,.13,1.28,.09,blue);
  box(12.745,6.21,z,.14,1.19,.057,iron);
  for(const y of [5.55,6.83])band(1,y,z,1.79,chalk,.075,.24);
 }

 // EAST: HELIX has a clean cream-and-teal municipal-clinic facade, metal
 // shutters and an unsettling original genetic campaign; greener research
 // interiors therefore read as a destination instead of the whole city.
 box(12.945,3.64,-15.63,.07,7.28,8.17,porcelain);
 box(12.921,.63,-15.63,.047,1.26,8.17,teal);
 for(const z of [-11.51,-15.69,-19.75])pilaster(1,z,7.26,chalk);
 box(12.825,2.31,-17.55,.084,2.45,3.15,shutter);
 for(const z of [-19.18,-15.92])box(12.743,2.29,z,.12,2.6,.13,teal);
 for(const y of [1.03,3.6])band(1,y,-17.55,3.5,teal,.13,.27);
 poster('helix',1,-13.68,2.34,2.1,2.9);
 signFrame(1,-15.62,'HELIX / PUBLIC HEALTH',7.39,'#b9e2d1','#28484c',4.76,.89);
 band(1,3.78,-15.63,8.1,teal,.24,.32);cornice(1,-15.63,8.17,teal,7.32);
 for(const z of [-13.36,-17.36]){
  box(12.852,6.16,z,.081,1.29,2.72,windowDark);
  for(let k=0;k<4;k++)box(12.749,6.16,z-1.42+k*.94,.12,1.39,.073,chalk);
  for(const y of [5.44,6.87])band(1,y,z,2.93,chalk,.097,.28);
  for(const dz of [-.91,0,.91])box(12.82,6.16,z+dz,.028,1.17,.77,coolWindow);
 }
 projectingSign(1,-17.52,'HELIX / +','#a0ead0','#223f45',1.03,1.81);

 // Raised facade crowns and multiple tiers of urban windows give a city
 // silhouette above the 7 m shop fronts instead of identical flat wall caps.
 for(const side of [-1,1])for(let sector=0;sector<3;sector++){
  const z=side<0?[.4,-7,-14.1][sector]:[-.15,-7.85,-15.63][sector];
  const length=side<0?[6.0,3.9,7.2][sector]:[7.9,6.4,7.8][sector];
  const y=side<0?6.8+sector*.43:7.4+(2-sector)*.31;
  const material=sector===0?brick:sector===1?(side<0?claret:blue):stucco;
  box(side*13.16,y+1.4,z,.63,2.8,length,material);
  band(side,y+2.94,z,length+.21,iron,.25,.31);
  for(let k=0;k<Math.floor(length/1.65);k++){
   const zz=z-length/2+1+k*1.65;
   box(side*12.79,y+1.35,zz,.14,1.6,1.02,iron);
   box(side*12.705,y+1.35,zz,.03,1.4,.83,(k+sector)%3===0?warmWindow:windowDark);
   box(side*12.68,y+1.35,zz,.04,1.51,.046,steel);
   box(side*12.675,y+1.35,zz,.04,.045,.97,steel);
   box(side*12.68,y+.5,zz,.2,.11,1.17,chalk);
  }
  if(sector===0){box(side*13.35,y+3.72,z,1.1,1.25,1.6,iron);box(side*13.35,y+4.36,z,1.18,.12,1.75,steel)}
 }

 // An arrival facade and the research gateway have contrasting masonry and
 // pylons, but never cover the original office or Helix entrances.
 for(const side of [-1,1]){
  box(side*8.84,2.8,3.658,5.85,5.3,.08,side<0?brick:stucco);
  for(const x of [side*5.86,side*11.86])box(x,2.8,3.581,.21,5.3,.22,cream);
  box(side*8.83,5.41,3.573,6.11,.19,.26,iron);
  // The street-facing back of the office reads as a real older city building.
  const paneX=side*8.86;
  box(paneX,2.9,3.601,3.79,1.8,.045,windowDark);
  for(let k=0;k<4;k++)box(paneX-1.89+k*1.26,2.9,3.556,.07,1.95,.08,cream);
  for(const y of [1.94,3.85])box(paneX,y,3.54,3.98,.09,.18,cream);
  box(side*8.24,3.11,-19.562,11.13,5.84,.09,iron);
  box(side*8.24,1.02,-19.483,11.14,1.04,.07,porcelain);
  box(side*8.24,5.82,-19.473,11.22,.18,.31,chalk);
  for(let k=0;k<3;k++){
   const x=side*(3.88+k*3.42);
   box(x,3.11,-19.438,.17,5.6,.22,steel);
   box(x,4.48,-19.298,.068,1.57,.04,mint);
   box(x,1.44,-19.288,.06,.8,.04,mint);
  }
  // Narrow horizontal glazing indicates multiple floors beyond the entrance.
  box(side*8.23,3.32,-19.437,10.89,1.28,.048,windowDark);
  for(let k=0;k<8;k++)box(side*8.23-5.46+k*1.56,3.32,-19.399,.062,1.43,.065,steel);
 }
 // Extra pavement joins reinforce perspective and acknowledge the sidewalk.
 for(const side of [-1,1]){
  box(side*12.06,.147,-8,1.44,.014,23.7,paving);
  for(let z=3.58;z>-19.5;z-=1.34)box(side*11.08,.155,z,.12,.022,1.18,chalk);
 }

 // Skyline silhouettes surround every street-facing camera direction. Grids
 // of individually selected warm/cool windows replace the old thin stripes.
 // All towers/windows still share just four batched materials.
 const towerDark=api.mat(0x222b39),towerBlue=api.mat(0x293844),roof=api.mat(0x16232e);
 const buildings:Array<{x:number;z:number;w:number;d:number;h:number;seed:number}>=[];
 for(const side of [-1,1])for(let i=0;i<5;i++)buildings.push({x:side*(24+(i%2)*7),z:12-i*11,w:5.5+noise(i+60)*3.5,d:6.5+noise(i+93)*3,h:20+noise(i+40)*22,seed:100+i+side*11});
 for(let i=0;i<7;i++)buildings.push({x:-33+i*11,z:-57-(i%2)*7,w:7+noise(i+7)*3,d:7,h:23+noise(i+69)*27,seed:200+i});
 for(let i=0;i<5;i++)buildings.push({x:-26+i*13,z:24+(i%2)*7,w:6+noise(i+88)*4,d:6,h:21+noise(i+80)*18,seed:300+i});
 for(const building of buildings){
  const {x,z,w,d,h,seed}=building;
  box(x,h/2,z,w,h,d,seed%2?towerBlue:towerDark);
  box(x,h+.17,z,w+.28,.34,d+.28,roof);
  box(x+w*.22,h+.6,z-d*.2,w*.3,.78,d*.35,iron);
  // Four sides matter: looking east/west must retain the surrounding city.
  for(const face of [-1,1])for(let y=4.8;y<h-1;y+=2.4){
   for(let k=0;k<Math.floor(w/1.45);k++){
    const xx=x-w/2+.72+k*1.45,id=seed*31+Math.round(y)*17+k*5+face;
    if(noise(id)<.46)continue;
    box(xx,y,z+face*(d/2+.015),.49,.94,.025,noise(id+67)>.5?warmWindow:coolWindow);
   }
   for(let k=0;k<Math.floor(d/1.7);k++){
    const zz=z-d/2+.77+k*1.7,id=seed*43+Math.round(y)*21+k*7+face;
    if(noise(id)<.5)continue;
    box(x+face*(w/2+.015),y,zz,.025,.94,.48,noise(id+25)>.53?warmWindow:coolWindow);
   }
  }
  if(seed%3===0){box(x,h+2.4,z,.08,4.4,.08,steel);box(x,h+4.63,z,.1,.14,.1,pink)}
 }
}
