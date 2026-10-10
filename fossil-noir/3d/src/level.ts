import type {LevelData, Wall} from './types';

// All positions are metres. The district leads north (negative Z) from the office
// to the street, research lobby, security wing, restricted lab and freight lift.
const walls:Wall[]=[];
const wall=(x:number,z:number,w:number,d:number,h=4.2,material:Wall['material']='concrete',y?:number)=>walls.push({x,z,w,d,h,material,...(y===undefined?{}:{y})});
// Office, with a wide front doorway.
wall(0,12.3,11,.6,4,'brick'); wall(-5.3,8,.6,8.6,4,'brick'); wall(5.3,8,.6,8.6,4,'brick');
wall(-3.4,4,3.8,.6,4,'brick'); wall(3.4,4,3.8,.6,4,'brick'); wall(0,4,3,.6,.8,'brick',3.2);
// District street, fractured shop fronts and an accessible hidden speakeasy.
wall(-13.3,0,.6,8,6.5,'brick'); wall(-13.3,-13.5,.6,7,6.5,'brick');
wall(-13.3,-18.7,.6,3.4,6.5,'brick');
wall(-13.3,-4.6,.6,2.2,6.5,'brick'); wall(-13.3,-9.4,.6,2.2,6.5,'brick');
wall(-17.3,-7,.6,6.6,4,'brick'); wall(-15.2,-3.7,4.8,.6,4,'brick'); wall(-15.2,-10.3,4.8,.6,4,'brick');
wall(13.3,-8,.6,24,7.2,'brick'); wall(-9.5,4,7,.6,5.5,'brick');wall(9.5,4,7,.6,5.5,'brick');
// Research building frontage and the lobby.
wall(-8,-20,12,.7,6,'metal'); wall(8,-20,12,.7,6,'metal');wall(0,-20,4,.7,2.4,'metal',3.2);
wall(-7.3,-26,.6,12.6,4.5,'metal'); wall(7.3,-23,.6,6,4.5,'metal');
wall(7.3,-30.5,.6,3,4.5,'metal'); wall(7.3,-27.4,.6,3,1.5,'metal',3);
// Security annex, connected through the lobby.
wall(11.2,-23.9,8.4,.6,4.5,'metal');wall(15.3,-27.9,.6,8.6,4.5,'metal');wall(11.2,-32.2,8.4,.6,4.5,'metal');
// Restricted laboratory, with a keycard airlock.
wall(-5.8,-32.2,8.6,.6,4.5,'metal'); wall(5.8,-32.2,8.6,.6,4.5,'metal');wall(0,-32.2,3,.6,1.3,'metal',3.2);
wall(-10.3,-39.2,.6,14.6,4.5,'metal'); wall(10.3,-39.2,.6,14.6,4.5,'metal');
wall(-11,-46,.6,1.2,4.5,'metal');wall(-10,-46,2,.6,4.5,'metal');wall(2.8,-46,15.6,.6,4.5,'metal');
wall(-7,-46,4,.6,1.3,'metal',3.2);
// Freight lift and final extraction point.
wall(-11.3,-49,.6,6.6,4.5,'metal');wall(-2.7,-49,.6,6.6,4.5,'metal');wall(-7,-52.3,9.2,.6,4.5,'metal');
// Traversable cover: desks, shipping crates, wrecked car and laboratory islands.
wall(-3.2,8,2.2,1.1,.85,'crate');wall(3.8,10,1.2,2.2,1.5,'crate');
wall(-8,-4,2.4,1.4,1.1,'crate'); wall(-7,-10,2,3.6,1.1,'metal');
wall(3.8,-13,2.4,1.6,1.7,'crate');wall(5,-14.5,1.6,1.5,1.1,'crate');
wall(-4.7,-18,2.4,1.3,1.3,'crate');wall(4.5,-23.8,1.8,1.8,1.2,'crate');
wall(-4.4,-26.8,2.2,1.4,1.25,'metal');wall(12,-25.9,3.3,1,1.1,'metal');
wall(-6.7,-34.5,2.2,1.5,1.2,'metal');wall(5,-36,2.4,1.2,1.2,'metal');
wall(0,-40,3.5,1.4,1.1,'metal');wall(-7.5,-42.8,1.3,2.4,1.5,'crate');

export const LEVEL:LevelData={
 walls,
 spawn:{x:0,z:8}, checkpoint:{x:0,z:-23.5}, switch:{x:7.5,z:-43},exit:{x:-7,z:-49}, mount:{x:8,z:-6},
 bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},
 doors:[
  {id:'office',x:0,z:4,w:3,d:.5,label:'VANE DETECTIVE AGENCY'},
  {id:'facility',x:0,z:-20,w:4,d:.5,label:'HELIX RESEARCH'},
  {id:'security',x:7.3,z:-27.5,w:.5,d:3,label:'SECURITY CONTROL'},
  {id:'laboratory',x:0,z:-32.2,w:3,d:.5,locked:true,label:'RESTRICTED LAB • KEYCARD'},
  {id:'elevator',x:-7,z:-46,w:4,d:.5,label:'FREIGHT LIFT'},
  {id:'secret',x:-13.3,z:-7,w:.5,d:2.6,secret:true,label:'THE LAST CHANCE'},
 ],
 enemies:[
  {id:'r01',kind:'raptor',x:-4,z:-3},{id:'r02',kind:'raptor',x:2,z:-6},{id:'r03',kind:'raptor',x:-3,z:-10},
  {id:'s01',kind:'soldier',x:-9,z:-14},{id:'s02',kind:'soldier',x:7,z:-17},{id:'r04',kind:'raptor',x:1,z:-16},
  {id:'s03',kind:'soldier',x:-4,z:-23},{id:'s04',kind:'soldier',x:3,z:-27},{id:'m01',kind:'mutant',x:-4,z:-30},
  {id:'s05',kind:'soldier',x:10,z:-27.5},{id:'s06',kind:'soldier',x:13,z:-30},
  {id:'r05',kind:'raptor',x:-5,z:-36},{id:'m02',kind:'mutant',x:7,z:-34.8},{id:'s07',kind:'soldier',x:3,z:-38},
  {id:'r06',kind:'raptor',x:-7,z:-39},{id:'m03',kind:'mutant',x:6,z:-40},{id:'m04',kind:'mutant',x:-3,z:-43},
  {id:'s08',kind:'soldier',x:4,z:-44},{id:'b01',kind:'brute',x:-2,z:-44},
  {id:'r07',kind:'raptor',x:8,z:-12},
 ],
 pickups:[
  {id:'revolver',kind:'revolver',x:.7,z:7,label:'Detective Revolver'},
  {id:'office-ammo',kind:'ammo',ammoFor:'revolver',amount:24,x:2,z:6.7,label:'Revolver rounds'},{id:'office-evidence',kind:'evidence',x:-2.1,z:9.5,label:'CASE 091: FIND MARA'},
  {id:'street-shotgun',kind:'shotgun',x:-10,z:-4,label:'Tactical Shotgun'},
  {id:'street-ammo1',kind:'ammo',ammoFor:'shotgun',amount:16,x:-10.5,z:-5.3,label:'Shotgun shells'},{id:'street-ammo2',kind:'ammo',ammoFor:'revolver',amount:24,x:5.8,z:-12,label:'Revolver rounds'},
  {id:'street-railgun',kind:'railgun',x:11.3,z:-14.2,label:'Rail Rifle'},
  {id:'street-rail-ammo',kind:'ammo',ammoFor:'railgun',amount:8,x:11,z:-15.6,label:'Rail slugs'},
  {id:'alley-rounds',kind:'ammo',ammoFor:'revolver',amount:18,x:-10.8,z:-11.6,label:'Revolver rounds'},
  {id:'street-health',kind:'health',x:9.5,z:-3.5},{id:'street-armor',kind:'armor',x:-10,z:-17},
  {id:'secret-plasma',kind:'plasma',x:-15.8,z:-7,label:'Plasma Rifle'},{id:'secret-cells',kind:'ammo',ammoFor:'plasma',amount:45,x:-15.6,z:-8.5,label:'Plasma cells'},{id:'secret-armor',kind:'armor',x:-15,z:-5},{id:'secret-health',kind:'health',x:-15,z:-9},
  {id:'lobby-health',kind:'health',x:-5.5,z:-22},{id:'lobby-ammo1',kind:'ammo',ammoFor:'machinegun',amount:60,x:5.8,z:-28.5,label:'Machine gun belt'},{id:'lobby-ammo2',kind:'ammo',ammoFor:'shotgun',amount:16,x:-5.7,z:-29.5,label:'Shotgun shells'},
  {id:'keycard',kind:'keycard',x:12,z:-29.3,label:'Helix Security Keycard'},
  {id:'machinegun',kind:'machinegun',x:13.8,z:-25.5,label:'Heavy Machine Gun'},
  {id:'security-ammo',kind:'ammo',ammoFor:'machinegun',amount:80,x:10,z:-30.7,label:'Machine gun belt'},{id:'security-evidence',kind:'evidence',x:14,z:-30,label:'SUBJECTS WERE HUMAN'},
  {id:'lab-plasma',kind:'plasma',x:8.2,z:-33.8,label:'Plasma Rifle'},
  {id:'lab-arc',kind:'arc',x:2.3,z:-33.8,label:'Arc Disruptor'},
  {id:'lab-railgun',kind:'railgun',x:-4.6,z:-33.7,label:'Rail Rifle'},
  {id:'lab-arc-cells',kind:'ammo',ammoFor:'arc',amount:16,x:2.2,z:-35.2,label:'Arc cells'},
  {id:'containment-arc-cells',kind:'ammo',ammoFor:'arc',amount:18,x:8.8,z:-41.3,label:'Arc cells'},
  {id:'containment-plasma',kind:'ammo',ammoFor:'plasma',amount:45,x:-8.4,z:-40.3,label:'Plasma cells'},
  {id:'lab-health1',kind:'health',x:-8.3,z:-33.8},{id:'lab-ammo1',kind:'ammo',ammoFor:'plasma',amount:45,x:4.7,z:-34.5,label:'Plasma cells'},
  {id:'lab-ammo2',kind:'ammo',ammoFor:'railgun',amount:10,x:-8,z:-37,label:'Rail slugs'},{id:'lab-armor',kind:'armor',x:8,z:-38.5},
  {id:'lab-health2',kind:'health',x:8.3,z:-44.5},{id:'lab-ammo3',kind:'ammo',ammoFor:'machinegun',amount:80,x:-5,z:-44.5,label:'Machine gun belt'},
  {id:'lab-evidence',kind:'evidence',x:-8.8,z:-44.6,label:'PROJECT LAZARUS: NO SURVIVORS'},
 ],
 hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],
 // Fuel canisters provide tactical blasts near patrols; neither glass panel is
 // a progression gate. Their shallow volumes stand in front of the shop wall.
 destructibles:[
  {id:'fuel-street-west',kind:'barrel',x:-8.8,z:-13.2,y:0,w:.85,d:.85,h:1.35,health:30},
  {id:'fuel-street-east',kind:'barrel',x:5.7,z:-16.8,y:0,w:.85,d:.85,h:1.35,health:30},
  {id:'fuel-security',kind:'barrel',x:4.8,z:-29.7,y:0,w:.85,d:.85,h:1.35,health:30},
  {id:'fuel-containment',kind:'barrel',x:.9,z:-43.5,y:0,w:.85,d:.85,h:1.35,health:30},
  {id:'glass-hotel',kind:'glass',x:-12.66,z:-1.7,y:1.12,w:.14,d:3.2,h:2.2,health:1},
  {id:'glass-eden',kind:'glass',x:12.66,z:-4.5,y:1.12,w:.14,d:3.2,h:2.2,health:1},
 ],
 props:[
  {kind:'office-sign',x:0,z:3.55,label:'VANE / PRIVATE INVESTIGATIONS'},
  {kind:'portrait',x:0,z:11.94,label:'ELIAS VANE'},
  {kind:'office-board',x:4.94,z:7.7,rotation:-Math.PI/2,label:'MARA / PROJECT LAZARUS'},
  {kind:'terminal',x:-3.1,z:8},{kind:'chair',x:-3.1,z:9.1},{kind:'lamp',x:-4.6,z:6},{kind:'bottles',x:-3.8,z:8},
  {kind:'neon',x:-12.93,z:-1.5,rotation:Math.PI/2,label:'HOTEL / NO VACANCY'},
  {kind:'neon',x:12.93,z:-7,rotation:-Math.PI/2,label:'EDEN / AFTER DARK'},
  {kind:'neon',x:-12.93,z:-7,rotation:Math.PI/2,label:'LAST CHANCE'},
  {kind:'facility-sign',x:0,z:-19.56,label:'AXIOM / HELIX RESEARCH'},
  {kind:'car',x:-7,z:-10,rotation:.15},
  {kind:'lamp',x:10.8,z:1},{kind:'lamp',x:-10.8,z:-8},{kind:'lamp',x:10.8,z:-18},
  {kind:'rubble',x:-11,z:-11},{kind:'rubble',x:11,z:-16},{kind:'corpse',x:3,z:-9},
  {kind:'street-mark',x:0,z:-8},{kind:'street-mark',x:0,z:-15},{kind:'drain',x:4,z:-3},
  {kind:'console',x:-4.4,z:-26.8},{kind:'sign',x:0,z:-31.81,label:'BIOHAZARD / AUTHORIZED PERSONNEL'},
  {kind:'sign',x:7,z:-25,rotation:-Math.PI/2,label:'SECURITY →'},
  {kind:'terminal',x:12,z:-25.9},{kind:'locker',x:14.8,z:-27},{kind:'locker',x:14.8,z:-28},
  {kind:'tank',x:-8.7,z:-35.3},{kind:'tank',x:8.7,z:-36},{kind:'tank',x:-8.7,z:-41},
  {kind:'tank',x:8.7,z:-41.5},{kind:'lab-table',x:0,z:-40},{kind:'console',x:5,z:-36},
  {kind:'pipe',x:-9.6,z:-39,rotation:Math.PI/2},{kind:'pipe',x:9.6,z:-39,rotation:Math.PI/2},
  {kind:'power',x:7.5,z:-43,label:'RESTORE LIFT POWER'},
  {kind:'checkpoint',x:0,z:-23.5,label:'CHECKPOINT'},
  {kind:'exit',x:-7,z:-49,label:'EXTRACTION / FREIGHT LIFT'},
  {kind:'sign',x:-7,z:-45.61,label:'FREIGHT LIFT / POWER REQUIRED'},
  {kind:'warning',x:0,z:-35.5,label:'CONTAINMENT BREACH'},
  {kind:'skeleton',x:2,z:-42.8},{kind:'secret-table',x:-15.7,z:-7},
 ],
};
