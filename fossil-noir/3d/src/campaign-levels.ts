import type {DoorDef, EnemyDef, EnemyKind, LevelData, PickupDef, Prop, Vec2, Wall, WeaponId} from './types';

/**
 * Original locations from the 2D Black Rain case, rebuilt as connected FPS spaces.
 * Every cover block is an explicit collision volume. Signs and story props are
 * decorative; a picture of a doorway never substitutes for a real opening.
 */
class Plan {
  readonly walls:Wall[]=[];
  readonly doors:DoorDef[]=[];
  readonly enemies:EnemyDef[]=[];
  readonly pickups:PickupDef[]=[];
  readonly props:Prop[]=[];
  readonly destructibles:NonNullable<LevelData['destructibles']>=[];
  readonly hazards:LevelData['hazards']=[];
  readonly waves:NonNullable<LevelData['waves']>=[];
  private serial=0;
  constructor(readonly prefix:string,readonly bounds:LevelData['bounds']){}
  wall(x:number,z:number,w:number,d:number,h=4.2,material:Wall['material']='metal',y?:number){
    this.walls.push({x,z,w,d,h,material,...(y===undefined?{}:{y})});
  }
  outer(h=4.2,material:Wall['material']='metal',sideHeight=h){
    const b=this.bounds;
    this.wall((b.minX+b.maxX)/2,b.minZ+.3,b.maxX-b.minX,.6,h,material);
    this.wall((b.minX+b.maxX)/2,b.maxZ-.3,b.maxX-b.minX,.6,h,material);
    this.wall(b.minX+.3,(b.minZ+b.maxZ)/2,.6,b.maxZ-b.minZ,sideHeight,material);
    this.wall(b.maxX-.3,(b.minZ+b.maxZ)/2,.6,b.maxZ-b.minZ,sideHeight,material);
  }
  /** A complete partition with a real, three-metre-high opening. */
  cross(z:number,x:number,id:string,label:string,options:Partial<DoorDef>={},width=3.8,minX=this.bounds.minX,maxX=this.bounds.maxX,h=4.2,material:Wall['material']='metal'){
    const left=x-width/2,right=x+width/2;
    if(left>minX)this.wall((left+minX)/2,z,left-minX,.6,h,material);
    if(right<maxX)this.wall((right+maxX)/2,z,maxX-right,.6,h,material);
    this.wall(x,z,width,.6,Math.max(.6,h-3.25),material,3.25);
    this.doors.push({id,x,z,w:width,d:.5,label,...options});
  }
  side(x:number,z:number,id:string,label:string,options:Partial<DoorDef>={},width=3.2,minZ:number,maxZ:number,h=4.2,material:Wall['material']='metal'){
    const back=z-width/2,front=z+width/2;
    if(back>minZ)this.wall(x,(back+minZ)/2,.6,back-minZ,h,material);
    if(front<maxZ)this.wall(x,(front+maxZ)/2,.6,maxZ-front,h,material);
    this.wall(x,z,.6,width,Math.max(.6,h-3.25),material,3.25);
    this.doors.push({id,x,z,w:.5,d:width,label,...options});
  }
  cover(x:number,z:number,w:number,d:number,h=1.3,material:Wall['material']='crate'){
    this.wall(x,z,w,d,h,material);
  }
  prop(kind:string,x:number,z:number,label?:string,rotation?:number){
    this.props.push({kind,x,z,...(label?{label}:{}),...(rotation===undefined?{}:{rotation})});
  }
  item(kind:PickupDef['kind'],x:number,z:number,label?:string,extra:Partial<PickupDef>={}){
    this.pickups.push({id:`${this.prefix}-p${++this.serial}`,kind,x,z,...(label?{label}:{}),...extra});
  }
  ammo(ammoFor:WeaponId,x:number,z:number,amount:number){
    this.item('ammo',x,z,`${ammoFor.toUpperCase()} AMMUNITION`,{ammoFor,amount});
  }
  evidence(id:string,x:number,z:number,label:string){this.item('evidence',x,z,label,{evidenceId:id});}
  group(positions:[EnemyKind,number,number][],prefix='patrol'){
    positions.forEach(([kind,x,z],index)=>this.enemies.push({id:`${this.prefix}-${prefix}-${index+1}`,kind,x,z}));
  }
  wave(id:string,trigger:Vec2,radius:number,positions:[EnemyKind,number,number][]){
    this.waves.push({id:`${this.prefix}-${id}`,trigger,radius,enemies:positions.map(([kind,x,z],index)=>({id:`${this.prefix}-${id}-${index+1}`,kind,x,z}))});
  }
  boss(id:string,boss:NonNullable<EnemyDef['boss']>,x:number,z:number,health:number){
    const labels={crown:'CROWN REX',ironjaw:'IRON JAW',guardian:'ROOT CROWN',omega:'OMEGA'};
    this.enemies.push({id,kind:'brute',boss,x,z,health,label:labels[boss]});
  }
  barrel(id:string,x:number,z:number){this.destructibles.push({id:`${this.prefix}-${id}`,kind:'barrel',x,z,y:0,w:.85,d:.85,h:1.35,health:30});}
  finish(metadata:Omit<LevelData,'walls'|'doors'|'enemies'|'pickups'|'props'|'destructibles'|'hazards'|'bounds'|'waves'|'requiredKills'>):LevelData{
    // Tank silhouettes have real occupancy; the themed renderer uses these
    // matching volumes for the glass vessel instead of an opaque wall cube.
    for(const prop of this.props)if(prop.kind==='tank')this.cover(prop.x,prop.z,1.4,1.4,3.4,'metal');
    const enemies=[...this.enemies,...this.waves.flatMap(w=>w.enemies)];
    return {...metadata,bounds:this.bounds,walls:this.walls,doors:this.doors,enemies:this.enemies,pickups:this.pickups,props:this.props,
      destructibles:this.destructibles,hazards:this.hazards,waves:this.waves,requiredKills:enemies.map(e=>e.id)};
  }
}

function safehouse():LevelData {
  const p=new Plan('09',{minX:-18,maxX:18,minZ:-30,maxZ:8});p.outer(4.2,'brick');
  p.cross(-4,0,'precinct','OLD PRECINCT / ROOM 09',{},3.8,undefined,undefined,4.2,'brick');
  p.side(-4,-10,'archive','ELIAS / PERSONAL ARCHIVE',{},3.2,-18,-4,4.2,'brick');
  p.side(4,-10,'workshop','AX-09 / WORKSHOP',{},3.2,-18,-4,4.2,'brick');
  p.cross(-18,0,'service','SERVICE CORRIDOR / B6',{},3.8,undefined,undefined,4.2,'brick');
  // A hidden armour cupboard in the service corridor is a genuine optional room.
  p.wall(-14,-23,8,.6,4.2,'brick');
  p.side(-10,-26,'secret','PRECINCT EVIDENCE LOCKER',{secret:true},3,-30,-18,4.2,'brick');
  p.cover(-12,-8,3.6,1.6,.92);p.cover(12,-8,3.6,1.6,.92);
  p.cover(-12,-15,4.2,1,1.05);p.cover(12,-15,4.2,1,1.05);
  p.cover(-12,3,3.6,1.8,1);p.cover(12,3,3.6,1.8,1);
  p.evidence('blackrain',-10.4,-12.5,'THE BLACK RAIN CASE');
  p.evidence('arm',10.4,-12.5,'A BORROWED SECOND / AX-09');
  p.item('revolver',-2,1,'Detective Revolver');p.item('shotgun',12,-13,'Tactical Shotgun');
  p.item('health',-1,2);p.item('armor',2,2);p.ammo('revolver',-2,-1,36);p.ammo('shotgun',11,-10.2,24);
  p.ammo('machinegun',-14,-26,100);p.item('armor',-14,-27.4);p.ammo('plasma',-15.5,-25.5,60);
  p.prop('office-sign',0,7.28,'SAFEHOUSE 09 / OLD PRECINCT');p.prop('portrait',-7,7.28,'ELIAS VANE');
  p.prop('office-board',-17.28,-12, 'THE BLACK RAIN CASE',Math.PI/2);
  p.prop('terminal',-12,-8);p.prop('chair',-12,-6.5);p.prop('bottles',-12.8,-8);
  p.prop('terminal',12,-8);p.prop('chair',12,-6.5);p.prop('locker',16.5,-14);p.prop('locker',16.5,-15);
  p.prop('sign',-3.6,-7,'ARCHIVE ←');p.prop('sign',3.6,-7,'→ WORKSHOP');p.prop('sign',0,-17.58,'SERVICE LIFT / SUBLEVEL B6');
  p.prop('power',12,-22,'SERVICE LIFT POWER');p.prop('checkpoint',0,-20.5,'SAFEHOUSE CHECKPOINT');p.prop('exit',12,-26,'DESCEND TO B6');
  return p.finish({chapterId:1,title:'SAFEHOUSE 09',subtitle:'OLD PRECINCT / ROOM 09',theme:'safehouse',safe:true,requiredEvidence:2,
    intro:'One good eye. Too many ghosts. The old precinct is still safe. Examine the Black Rain archive and the serial number inside your mechanical arm before descending to Axiom.',
    objective:'EXAMINE BOTH CASE FILES / POWER THE SERVICE LIFT',exitLabel:'DESCEND TO B6',completionMessage:'AX-09 belongs to Axiom. Mara’s signal leads below the city. Elias takes the service lift to sublevel B6.',
    spawn:{x:0,z:3},checkpoint:{x:0,z:-20.5},switch:{x:12,z:-22},exit:{x:12,z:-26},mount:{x:-100,z:100},
    mountBounds:{minX:-101,maxX:-99,minZ:99,maxZ:101},defaultLoadout:['revolver','shotgun']});
}

function research():LevelData {
  const p=new Plan('b6',{minX:-28,maxX:28,minZ:-74,maxZ:10});p.outer(4.5);
  p.cross(-4,0,'b6-entry','AXIOM / SUBLEVEL B6');
  p.side(-9,-20,'specimens','SPECIMEN ARCHIVE',{},3.8,-38,-4,4.5);
  p.side(9,-20,'security','B6 SECURITY CONTROL',{},3.8,-38,-4,4.5);
  p.cross(-38,0,'containment','CONTAINMENT / SECURITY KEY',{locked:true},4.2,undefined,undefined,4.5);
  p.cross(-64,0,'core-access','REACTOR ACCESS',{},4.2,undefined,undefined,4.5);
  p.side(-23,-53,'secret','COLD STORAGE / 314',{secret:true},2.8,-64,-38,4.5);
  p.cover(-2,-14,3.8,1.8,1.25,'metal');p.cover(4,-29,3.8,1.8,1.25,'metal');
  for(const x of [-20,-14])for(const z of [-12,-31])p.cover(x,z,2.4,2.4,1.8,'metal');
  p.cover(20,-12,6.2,1.4,1.2,'metal');p.cover(20,-33,6.2,1.4,1.2,'metal');
  for(const x of [-13,13])for(const z of [-46,-58])p.cover(x,z,4.6,2,1.5,'metal');
  p.cover(0,-53,5,2.3,1.15,'metal');
  p.group([
    ['soldier',-3,-19],['soldier',4,-24],['mutant',-5,-31],
    ['raptor',-18,-18],['raptor',-13,-25],['mutant',-23,-28],['soldier',-15,-35],
    ['soldier',16,-19],['soldier',23,-25],['soldier',16,-30],['mutant',24,-35],
    ['raptor',-7,-43],['raptor',7,-46],['mutant',-18,-52],['soldier',17,-52],['soldier',-8,-60],['mutant',9,-61],['brute',0,-59],
    ['soldier',-8,-69],['soldier',8,-69],
  ]);
  p.wave('containment-release',{x:0,z:-44},8,[['raptor',-6,-50],['raptor',6,-52],['mutant',-5,-57],['soldier',7,-57]]);
  p.item('machinegun',2,3,'Heavy Machine Gun');p.ammo('machinegun',-2,3,100);p.ammo('shotgun',3,0,24);p.item('armor',-3,0);
  p.evidence('lazarus',-18,-27,'PROJECT LAZARUS / CONTAINMENT 314');p.item('keycard',19,-28,'B6 CONTAINMENT KEYCARD');
  p.item('plasma',21,-30,'Plasma Rifle');p.ammo('plasma',23,-29,80);p.ammo('machinegun',15,-24,100);p.item('health',25,-32);
  p.ammo('shotgun',-21,-22,28);p.item('health',-25,-33);p.item('armor',-13,-35);
  p.ammo('machinegun',-18,-43,120);p.ammo('plasma',18,-43,80);p.item('health',19,-58);p.item('health',-19,-60);
  p.ammo('revolver',8,-55,48);p.ammo('shotgun',-8,-55,28);p.item('armor',-25,-60);p.ammo('plasma',-25,-56,100);
  p.item('health',6,-67);p.ammo('machinegun',-6,-67,120);
  p.barrel('security-fuel',22,-21);p.barrel('containment-fuel',-17,-48);p.barrel('core-fuel',15,-61);
  p.hazards.push({x:18,z:-48,w:3,d:4},{x:-17,z:-56,w:2.5,d:3});
  p.prop('facility-sign',0,-3.6,'AXIOM / RESEARCH WING');p.prop('sign',0,-37.6,'PROJECT LAZARUS / 314');
  for(const x of [-26,26])for(const z of [-15,-29,-44,-58])p.prop('tank',x,z);
  p.prop('console',-2,-14);p.prop('lab-table',0,-53);p.prop('terminal',20,-33);p.prop('locker',26,-26);p.prop('locker',26,-27.5);
  p.prop('corpse',-21,-24);p.prop('skeleton',-10,-56);p.prop('pipe',-26.8,-50);p.prop('pipe',26.8,-50);
  p.prop('checkpoint',0,-40.5,'CONTAINMENT CHECKPOINT');p.prop('power',6,-68,'REACTOR LIFT POWER');p.prop('exit',0,-69,'REACTOR ACCESS');
  return p.finish({chapterId:2,title:'AXIOM RESEARCH WING',subtitle:'AXIOM / SUBLEVEL B6',theme:'research',
    intro:'They did not find fossils. They made weapons. Retrieve the Lazarus record in the specimen archive and take the containment key from security. The broken tanks were no accident.',
    objective:'RECOVER LAZARUS DATA / UNLOCK THE CORE',exitLabel:'REACTOR ACCESS',completionMessage:'The living specimens came through a temporal breach. Containment is clear. The reactor is next.',
    spawn:{x:0,z:5},checkpoint:{x:0,z:-40.5},switch:{x:6,z:-68},exit:{x:0,z:-69},mount:{x:-5,z:1},
    mountBounds:{minX:-7,maxX:7,minZ:-35,maxZ:6},defaultLoadout:['revolver','shotgun','machinegun']});
}

function fracture():LevelData {
  const p=new Plan('rift',{minX:-36,maxX:36,minZ:-82,maxZ:12});p.outer(6);
  p.cross(-6,0,'reactor-entry','CHRONAL REACTOR / GROUND ZERO',{},4.2,undefined,undefined,6);
  p.cross(-26,0,'reactor-seal','CORE ACCESS / EMERGENCY KEY',{locked:true},5,undefined,undefined,6);
  p.cross(-68,24,'exhaust-gate','BLACKWATER SERVICE TUNNEL',{},4.2,undefined,undefined,6);
  p.side(-29,-48,'secret','REACTOR MAINTENANCE 09',{secret:true},3,-68,-26,6);
  p.cover(-13,-14,6,2.8,1.4,'metal');p.cover(13,-20,6,2.8,1.4,'metal');
  p.cover(-24,-21,4,2.3,1.7,'metal');p.cover(25,-12,4,2.3,1.7,'metal');
  // Central discharge block and peripheral cover create a proper circular fight.
  p.cover(0,-43,8.5,8.5,2.65,'metal');
  for(const x of [-15,15])for(const z of [-36,-53,-63])p.cover(x,z,4.6,2.3,1.4,'metal');
  p.cover(-24,-40,2.3,5,1.6,'metal');p.cover(24,-56,2.3,5,1.6,'metal');
  p.group([
    ['soldier',-20,-16],['soldier',18,-14],['mutant',-5,-22],['raptor',8,-20],['soldier',28,-20],
    ['raptor',-8,-32],['raptor',9,-34],['mutant',-23,-35],['soldier',24,-34],['soldier',-22,-56],['mutant',24,-63],
    ['raptor',-7,-61],['raptor',8,-62],['mutant',-22,-63],['soldier',28,-47],['soldier',21,-75],['mutant',29,-76],
  ]);
  p.boss('crown-rex','crown',0,-56,1250);
  p.wave('core-overload',{x:0,z:-32},10,[['raptor',-8,-52],['raptor',8,-53],['mutant',-23,-48],['soldier',23,-44]]);
  p.item('plasma',2,7,'Plasma Rifle');p.ammo('plasma',-2,7,100);p.ammo('machinegun',4,3,140);p.item('health',-4,3);p.item('armor',5,5);
  p.evidence('reactor',-27,-14,'THE OTHER SIDE / EMERGENCY RECORD');p.item('keycard',27,-17,'REACTOR EMERGENCY KEY');
  p.item('railgun',25,-23,'Chronal Railgun');p.ammo('railgun',23,-23,20);p.ammo('shotgun',-20,-23,32);p.item('health',-29,-23);
  p.ammo('plasma',-25,-31,100);p.ammo('machinegun',25,-31,160);p.item('armor',25,-37);
  p.ammo('railgun',-26,-58,24);p.ammo('plasma',26,-60,100);p.ammo('machinegun',-20,-66,160);p.item('health',-25,-65);p.item('health',25,-65);
  p.item('armor',-32,-57);p.ammo('railgun',-32,-53,30);p.item('health',-32,-45);p.ammo('shotgun',9,-49.5,32);
  p.item('health',29,-72);p.ammo('plasma',17,-74,80);
  p.barrel('west-fuel',-24,-31);p.barrel('east-fuel',24,-40);p.barrel('north-fuel',9,-65);
  p.hazards.push({x:-10,z:-45,w:3,d:6},{x:10,z:-45,w:3,d:6},{x:0,z:-65,w:7,d:2});
  p.prop('sign',0,-5.6,'THE FRACTURE / REACTOR 01');p.prop('warning',0,-26.4,'CROWN-CLASS ORGANISM / TETHER ACTIVE');
  p.prop('console',13,-20);p.prop('tank',-33,-36);p.prop('tank',33,-54);p.prop('skeleton',20,-49);p.prop('corpse',-24,-16);
  for(const x of [-34,34])for(const z of [-38,-59])p.prop('pipe',x,z);
  p.prop('checkpoint',0,-28.5,'CORE CHECKPOINT');p.prop('power',24,-72,'SEAL THE TEMPORAL BREACH');p.prop('exit',24,-77,'TO THE DOCKS');
  return p.finish({chapterId:3,title:'THE FRACTURE',subtitle:'CHRONAL REACTOR / GROUND ZERO',theme:'reactor',
    intro:'Sixty-six million years. One trigger away. Crown Rex feeds on the reactor discharge. Destroy the Crown-class organism, clear its escaped specimens and shut down the aperture.',
    objective:'BRING DOWN CROWN REX / SEAL THE BREACH',exitLabel:'TO THE DOCKS',completionMessage:'Crown Rex falls and the first breach closes. Axiom has already moved another shipment to Blackwater harbour.',
    spawn:{x:0,z:7},checkpoint:{x:0,z:-28.5},switch:{x:24,z:-72},exit:{x:24,z:-77},mount:{x:-22,z:-10},
    mountBounds:{minX:-28,maxX:28,minZ:-67,maxZ:-7},defaultLoadout:['revolver','shotgun','machinegun','plasma']});
}

function docks():LevelData {
  const p=new Plan('port',{minX:-44,maxX:44,minZ:-90,maxZ:14});p.outer(4.8,'concrete',1.2);
  p.cross(-2,-29,'warehouse','BLACKWATER / MANIFEST 09',{},5,undefined,undefined,4.8,'concrete');
  p.cross(-58,0,'freight-yard','LINE 09 / CARGO KEY',{locked:true},5,undefined,undefined,4.8);
  // The harbour office is a branch, not the same room painted a different colour.
  p.wall(32.5,-12,15,.6);p.wall(32.5,-30,15,.6);p.wall(40,-21,.6,18);
  p.side(25,-20,'harbour-office','HARBOURMASTER / SECURITY',{},3.5,-30,-12);
  p.wall(-35,-77,.6,24,4.8,'concrete');
  p.side(-35,-76,'secret','SMUGGLER CACHE',{secret:true},3,-89,-65,4.8,'concrete');
  for(const [x,z,w,d] of [[-29,5,7,3],[2,7,9,4],[23,5,9,3],[-27,-20,8,12],[-10,-22,8,12],[10,-23,8,14],[-28,-43,8,12],[-10,-42,8,12],[10,-43,8,12],[30,-44,8,12],[-22,-73,9,5],[13,-73,9,5]] as [number,number,number,number][])p.cover(x,z,w,d,2.8,'crate');
  p.cover(32,-26,5,1.4,1.1,'metal');p.cover(30,-66,4,2,1.4,'metal');
  p.group([
    ['raptor',-34,-16],['raptor',-19,-24],['soldier',-3,-15],['soldier',19,-20],['mutant',-20,-34],['raptor',-2,-31],
    ['soldier',31,-18],['soldier',35,-27],['raptor',20,-35],['soldier',-36,-37],['mutant',-20,-47],['soldier',-2,-47],['raptor',20,-48],['brute',36,-52],
    ['soldier',-25,-61],['raptor',-8,-64],['raptor',10,-63],['mutant',25,-60],['soldier',35,-75],['mutant',3,-79],['soldier',-26,-84],
  ]);
  p.wave('last-shipment',{x:0,z:-61},10,[['raptor',-8,-74],['raptor',7,-82],['soldier',25,-81],['mutant',20,-84]]);
  p.item('railgun',-25,8,'Chronal Railgun');p.ammo('railgun',-23,7,24);p.item('armor',-34,9);p.ammo('machinegun',-24,3,160);p.item('health',-34,2);
  p.item('arc',31,-23,'Storm Arc Cannon');p.ammo('arc',34,-24,48);p.item('keycard',36,-24,'LINE 09 FREIGHT KEY');p.evidence('manifest',28,-27,'THE LAST CARGO / M. VALE');
  p.ammo('shotgun',-37,-29,36);p.item('health',-19,-30);p.ammo('plasma',20,-29,120);p.ammo('machinegun',-3,-37,160);p.item('armor',36,-34);
  p.ammo('railgun',-36,-50,30);p.item('health',-20,-54);p.ammo('arc',20,-54,48);p.item('health',38,-55);
  p.ammo('plasma',-29,-64,140);p.ammo('machinegun',17,-63,180);p.item('armor',29,-70);p.ammo('arc',-40,-74,60);p.item('health',-40,-80);
  p.ammo('railgun',-10,-82,30);p.item('health',19,-85);p.ammo('shotgun',34,-84,40);
  for(const [id,x,z] of [['west-fuel',-18,-20],['central-fuel',-1,-27],['east-fuel',20,-40],['loading-fuel',26,-76]] as [string,number,number][])p.barrel(id,x,z);
  p.hazards.push({x:-1,z:-53,w:6,d:2},{x:38,z:-68,w:3,d:9});
  p.prop('facility-sign',-29,-1.6,'BLACKWATER HARBOUR');p.prop('sign',0,-57.6,'LINE 09 / AXIOM CONVOY');p.prop('sign',25.4,-17,'HARBOUR OFFICE',Math.PI/2);
  p.prop('terminal',32,-26);p.prop('chair',33,-24.5);p.prop('corpse',-19,-37);p.prop('rubble',37,-37);p.prop('drain',-20,-57);
  for(const x of [-40,40])for(const z of [-9,-35,-56,-83])p.prop('lamp',x,z);
  p.prop('checkpoint',0,-60.5,'FREIGHT YARD CHECKPOINT');p.prop('power',28,-80,'TRAIN LOADING BRIDGE');p.prop('exit',28,-85,'LAST TRAIN');
  return p.finish({chapterId:4,title:'BLACKWATER DOCKS',subtitle:'VESPER / BLACKWATER HARBOUR',theme:'docks',
    intro:'The reactor was only the first shipment. Mara is transmitting from the harbour. Search the harbourmaster’s office, stop the creatures in the loading yard and board Line 09.',
    objective:'STOP THE SHIPMENT / BOARD THE TRAIN',exitLabel:'LAST TRAIN',completionMessage:'M. Vale signed the manifest. Mara is alive, and someone is forcing her to work. The freight line leads to a second breach.',
    spawn:{x:-29,z:9},checkpoint:{x:0,z:-60.5},switch:{x:28,z:-80},exit:{x:28,z:-85},mount:{x:-38,z:-8},
    mountBounds:{minX:-41,maxX:41,minZ:-87,maxZ:-3},defaultLoadout:['revolver','shotgun','machinegun','plasma','railgun']});
}

function train():LevelData {
  const p=new Plan('line',{minX:-9,maxX:9,minZ:-139,maxZ:9});
  p.wall(0,8.7,18,.6,4.5);p.wall(0,-138.7,18,.6,4.5);
  // Real window openings expose the night route. Low rails and explicit bounds
  // keep walking and jumping inside; the windows are not solid painted panels.
  for(const x of [-8.6,8.6]){
    p.wall(x,-65,.6,148,1.1);p.wall(x,-65,.6,148,1.05,'metal',3.1);
    for(let z=6;z>-138;z-=6)p.wall(x,z,.6,.45,4.2);
  }
  for(const [z,id,label,locked] of [
    [-17,'carriage-2','CAR 02 / PASSENGER SECURITY',false],[-42,'carriage-3','CAR 03 / SPECIMEN FREIGHT',false],
    [-67,'carriage-4','CAR 04 / CONVOY KEY',true],[-92,'engine','CAR 05 / IRON JAW',false],
  ] as [number,string,string,boolean][])p.cross(z,0,id,label,{locked},3.8,-8.6,8.6,4.2);
  p.side(-4,-33,'secret','SERVICE ARMOURY',{secret:true},2.8,-40,-25,4.2);p.wall(-6.3,-25,4.6,.6);p.wall(-6.3,-40,4.6,.6);
  for(const [x,z,w,d] of [[-6,-6,2.4,8],[6,-6,2.4,8],[6,-29,2.5,10],[-6,-53,2.5,10],[6,-57,2.5,4],[-6,-80,2.5,9],[6,-79,2.5,9],[-5,-107,2.5,5],[5,-119,2.5,5]] as [number,number,number,number][])p.cover(x,z,w,d,1.35,'metal');
  p.cover(0,-72,2.3,1.5,1.1,'crate');p.cover(-2.6,-126,2.2,1.8,1.1,'metal');
  p.group([
    ['soldier',-2,-22],['soldier',3,-25],['raptor',0,-30],['mutant',2,-37],
    ['raptor',-1,-47],['soldier',4,-48],['mutant',-2,-57],['soldier',3,-62],['raptor',-3,-64],
    ['soldier',-3,-70],['raptor',3,-73],['mutant',0,-81],['soldier',-2,-88],['raptor',3,-87],
    ['soldier',-5,-97],['soldier',5,-102],['raptor',0,-105],['mutant',4,-109],['raptor',-3,-121],['soldier',4,-129],
  ]);
  p.boss('iron-jaw','ironjaw',-1,-116,1550);
  p.wave('engine-defense',{x:0,z:-96},7,[['raptor',-3,-112],['raptor',4,-116],['soldier',-4,-124]]);
  p.item('arc',1,4,'Storm Arc Cannon');p.ammo('arc',-1,4,60);p.ammo('machinegun',2,0,180);p.item('health',-2,0);p.item('armor',-3,5);
  p.ammo('shotgun',-2,-13,40);p.ammo('plasma',4,-19,140);p.item('health',-3,-38);p.ammo('railgun',-2,-39,32);
  p.ammo('arc',-6,-34,64);p.item('armor',-6,-37);p.item('keycard',4,-54,'LINE 09 ENGINE KEY');
  p.ammo('machinegun',3,-52,200);p.ammo('shotgun',-3,-62,36);p.item('health',4,-64);
  p.evidence('signal',4,-82,'A SIGNAL IN THE NOISE / MARA');p.ammo('plasma',3,-74,140);p.item('armor',-3,-85);p.ammo('railgun',4,-89,40);
  p.ammo('arc',-4,-99,70);p.item('health',4,-99);p.ammo('machinegun',-4,-120,220);p.item('health',5,-125);p.ammo('railgun',-4,-131,32);
  p.barrel('car-three-fuel',6,-47);p.barrel('engine-fuel',6,-111);p.barrel('engine-fuel-west',-6,-117);
  p.prop('sign',0,8.25,'IRON EXPRESS / LINE 09');p.prop('sign',0,-91.6,'ARMOURED BEAST / ENGINE');
  for(const z of [-9,-32,-55,-79,-104]){p.prop('terminal',7.8,z);p.prop('locker',-7.8,z);}
  p.prop('corpse',3,-44);p.prop('tank',-7.5,-49);p.prop('tank',7.5,-60);p.prop('pipe',-7.8,-114);
  p.prop('checkpoint',0,-69.5,'CONVOY CHECKPOINT');p.prop('power',4,-131,'RIFT GATE COLLAR');p.prop('exit',0,-134,'RIFT GATE');
  return p.finish({chapterId:5,title:'IRON EXPRESS',subtitle:'LINE 09 / AXIOM CONVOY',theme:'train',
    intro:'Next stop: no return. The convoy is racing toward another breach. Fight through five connected carriages, hear Mara’s service-radio message and destroy Iron Jaw before the tunnel.',
    objective:'CROSS THE TRAIN / DESTROY IRON JAW',exitLabel:'RIFT GATE',completionMessage:'Iron Jaw is scrap. Mara sabotaged the station collars. She is trying to send the creatures home. Elias crosses the second breach.',
    spawn:{x:0,z:4},checkpoint:{x:0,z:-69.5},switch:{x:4,z:-131},exit:{x:0,z:-134},mount:{x:-100,z:100},
    mountBounds:{minX:-101,maxX:-99,minZ:99,maxZ:101},defaultLoadout:['revolver','shotgun','machinegun','plasma','railgun','arc']});
}

function canopy():LevelData {
  const p=new Plan('canopy',{minX:-50,maxX:50,minZ:-98,maxZ:14});p.outer(4.4,'concrete');
  p.cross(-10,0,'outpost-entry','BREACH 02 / CRETACEOUS OUTPOST',{},6,undefined,undefined,4.4,'concrete');
  p.cross(-52,0,'temple','LOST TEMPLE / OUTPOST KEY',{locked:true},6,undefined,undefined,4.8,'concrete');
  p.cross(-88,0,'return-gate','RETURN TO 2091',{},5,undefined,undefined,4.8,'concrete');
  // Ancient archive west; the stranded research outpost east. Both have doors
  // and their own routes back to the central jungle clearing.
  for(const z of [-20,-42]){p.wall(-32,z,24,.7,4.2,'concrete');p.wall(31,z,26,.7,4.2,'metal');}
  p.wall(-44,-31,.7,22,4.2,'concrete');p.wall(44,-31,.7,22,4.2);
  p.side(-20,-30,'temple-archive','MARA / FIELD ARCHIVE',{},4,-42,-20,4.2,'concrete');
  p.side(18,-30,'outpost','AXIOM / RESEARCH OUTPOST',{},4,-42,-20,4.2);
  p.wall(-39.5,-67,11,.7,4.8,'concrete');p.wall(-39.5,-84,11,.7,4.8,'concrete');p.wall(-45,-75.5,.7,17,4.8,'concrete');
  p.side(-34,-75,'secret','THE FIRST TEMPLE',{secret:true},3.2,-84,-67,4.8,'concrete');
  for(const [x,z,w,d] of [[-13,-4,3,3],[18,1,4,3],[-35,-14,4,4],[34,-14,4,4],[-8,-28,3,7],[8,-40,3,6],[-30,-47,5,3],[29,-47,5,3],[-29,-59,4,4],[29,-59,4,4],[-14,-64,3,3],[14,-64,3,3],[-24,-80,3,3],[24,-80,3,3],[-8,-84,3,3],[8,-84,3,3]] as [number,number,number,number][])p.cover(x,z,w,d,2.2,'concrete');
  p.cover(-34,-24,6,1.5,1.1,'concrete');p.cover(32,-24,6,1.5,1.1,'metal');
  p.group([
    ['raptor',-17,-16],['raptor',17,-18],['mutant',-4,-23],['raptor',6,-32],
    ['mutant',-34,-28],['raptor',-28,-36],['soldier',26,-28],['soldier',37,-34],
    ['raptor',-35,-46],['mutant',-15,-43],['soldier',15,-44],['raptor',35,-47],
    ['raptor',-8,-57],['mutant',10,-59],['raptor',-23,-65],['soldier',24,-67],['mutant',-18,-78],['raptor',19,-81],['soldier',-6,-93],['soldier',7,-93],
  ]);
  p.boss('root-crown','guardian',0,-78,1800);
  p.wave('guardian-roots',{x:0,z:-56},9,[['raptor',-8,-69],['raptor',8,-71],['mutant',29,-75],['mutant',-27,-62]]);
  p.item('shotgun',2,8,'Tactical Shotgun');p.ammo('shotgun',-2,8,40);p.item('health',-4,3);p.item('armor',4,3);p.ammo('plasma',3,-3,140);
  p.evidence('mara',-34,-33,'THE RETURN OF MARA / PERSONAL LOG');p.item('keycard',33,-33,'CRETACEOUS OUTPOST KEY');
  p.item('railgun',-32,-37,'Chronal Railgun');p.ammo('railgun',-38,-37,40);p.item('health',-39,-28);p.item('armor',40,-37);p.ammo('arc',38,-28,70);
  p.ammo('machinegun',-16,-36,200);p.ammo('plasma',16,-36,140);p.item('health',-36,-50);p.item('health',36,-50);p.ammo('shotgun',0,-46,44);
  p.ammo('railgun',-22,-57,40);p.ammo('arc',22,-57,70);p.item('health',-28,-75);p.item('health',28,-83);p.item('armor',-39,-80);
  p.ammo('arc',-40,-72,80);p.ammo('plasma',-8,-82,160);p.ammo('machinegun',8,-86,220);p.item('health',14,-92);
  p.barrel('outpost-fuel',40,-24);p.barrel('broken-collar',22,-74);p.barrel('temple-collar',-22,-70);
  p.hazards.push({x:-5,z:-61,w:3,d:6},{x:5,z:-73,w:3,d:6},{x:38,z:-61,w:5,d:5});
  p.prop('sign',0,-9.5,'THE LOST CANOPY / BREACH 02');p.prop('sign',18.4,-27,'STRANDED RESEARCH OUTPOST',Math.PI/2);p.prop('sign',0,-51.5,'THE PAST HAS TAKEN ROOT');
  p.prop('lab-table',32,-24);p.prop('terminal',32,-24);p.prop('tank',42,-39);p.prop('skeleton',-33,-36);p.prop('skeleton',-30,-63);
  p.prop('rubble',-38,-18);p.prop('rubble',38,-46);p.prop('corpse',30,-31);p.prop('warning',0,-84,'BREACH GUARDIAN / ROOT CROWN');
  p.prop('checkpoint',0,-54.5,'TEMPLE CHECKPOINT');p.prop('power',10,-92,'RETURN GATE / CHANNEL 09');p.prop('exit',0,-93,'RETURN TO 2091');
  return p.finish({chapterId:6,title:'THE LOST CANOPY',subtitle:'BREACH 02 / THE LOST TEMPLE',theme:'jungle',
    intro:'The past has taken root. A living prehistoric jungle has swallowed the Axiom outpost and ancient sandstone ruins. Find Mara’s log, break the guardian’s control network and open the return gate.',
    objective:'FIND MARA / DEFEAT THE GUARDIAN',exitLabel:'RETURN TO 2091',completionMessage:'Root Crown falls. Mara has copied the orders and experiments. The return gate leads to Axiom’s transmission tower. Channel 09 is still open.',
    spawn:{x:0,z:8},checkpoint:{x:0,z:-54.5},switch:{x:10,z:-92},exit:{x:0,z:-93},mount:{x:12,z:4},
    mountBounds:{minX:-46,maxX:46,minZ:-95,maxZ:11},defaultLoadout:['revolver','shotgun','machinegun','plasma','railgun','arc']});
}

function tower():LevelData {
  const p=new Plan('zero',{minX:-32,maxX:32,minZ:-104,maxZ:10});p.outer(4.8);
  // Connected departments snake across the tower. Alternating security gates
  // give each flat-floor segment a different approach and combat frontage.
  p.cross(-18,18,'tower-lobby','F01 / CORPORATE SECURITY',{},4.2,undefined,undefined,4.8);
  p.cross(-42,-18,'tower-archive','F02 / PROTOCOL ZERO KEY',{locked:true},4.2,undefined,undefined,4.8);
  p.cross(-66,18,'tower-transmission','F03 / TRANSMISSION CONTROL',{},4.2,undefined,undefined,4.8);
  p.cross(-86,0,'omega','F04 / FINAL PROTOCOL',{locked:true},5,undefined,undefined,4.8);
  p.side(-23,-54,'secret','AXIOM / CLASSIFIED ARMOURY',{secret:true},3,-65,-43,4.8);
  p.cover(-19,-4,6,2,1.2,'metal');p.cover(8,-8,6,2,1.2,'metal');p.cover(23,-5,4,2,1.2,'metal');
  for(const [x,z,w,d] of [[-11,-27,5,2],[11,-33,5,2],[-24,-29,2,5],[24,-30,2,5],[-13,-48,4,3],[10,-53,4,3],[-2,-59,4,2],[25,-60,2,5],[-12,-74,4,2],[12,-78,4,2],[-24,-80,2,4],[24,-71,2,4],[-14,-93,3,3],[14,-94,3,3]] as [number,number,number,number][])p.cover(x,z,w,d,1.55,'metal');
  p.group([
    ['soldier',16,-11],['soldier',26,-14],
    ['soldier',15,-25],['mutant',0,-25],['raptor',-20,-23],['soldier',-25,-37],['soldier',4,-37],['mutant',23,-37],
    ['soldier',-16,-46],['raptor',-7,-49],['brute',3,-46],['mutant',16,-49],['soldier',-14,-61],['raptor',9,-62],
    ['soldier',21,-74],['mutant',-19,-72],['soldier',0,-81],['raptor',-6,-75],['brute',-25,-84],
    ['soldier',-24,-95],['soldier',25,-92],['mutant',-7,-99],
  ]);
  p.boss('omega-final','omega',0,-95,2400);
  p.wave('protocol-omega',{x:0,z:-89},8,[['raptor',-9,-91],['raptor',9,-91],['mutant',21,-98],['soldier',-20,-99]]);
  p.item('arc',-15,5,'Storm Arc Cannon');p.ammo('arc',-13,5,80);p.item('armor',-22,4);p.item('health',-22,2);p.ammo('machinegun',-15,1,220);p.ammo('railgun',-11,1,40);
  p.item('keycard',25,-27,'PROTOCOL ZERO / TRANSMITTER KEY');p.evidence('zero',23,-35,'PROTOCOL ZERO / FINAL ORDER');
  p.ammo('plasma',26,-39,180);p.item('health',-27,-26);p.ammo('shotgun',-20,-38,44);p.item('armor',20,-23);
  p.ammo('machinegun',-19,-46,220);p.item('health',19,-45);p.ammo('railgun',-27,-60,50);p.item('armor',-27,-56);p.ammo('arc',-27,-50,90);
  p.ammo('plasma',23,-64,180);p.item('health',-19,-63);p.ammo('arc',26,-79,90);p.ammo('railgun',-19,-82,50);p.item('health',-27,-77);
  p.ammo('machinegun',-20,-89,240);p.ammo('plasma',20,-89,200);p.item('health',27,-99);p.item('health',-27,-101);p.ammo('arc',11,-100,100);p.ammo('railgun',-10,-101,50);
  p.barrel('security-fuel',21,-35);p.barrel('archive-fuel',6,-57);p.barrel('transmission-fuel',-8,-79);p.barrel('omega-fuel',19,-97);
  p.hazards.push({x:-3,z:-54,w:2.5,d:4},{x:5,z:-95,w:2.3,d:4});
  p.prop('facility-sign',0,9.3,'AXIOM ZERO / TRANSMISSION TOWER');p.prop('sign',18,-17.5,'F01 / CORPORATE SECURITY');p.prop('sign',-18,-41.5,'F02 / BLACK RAIN ARCHIVE');
  p.prop('sign',18,-65.5,'F03 / PUBLIC FREQUENCY');p.prop('sign',0,-85.5,'OMEGA / FINAL PROTOCOL');
  for(const [x,z] of [[-11,-27],[11,-33],[-13,-48],[10,-53],[-12,-74],[12,-78]] as [number,number][])p.prop('console',x,z);
  p.prop('tank',-30,-91);p.prop('tank',30,-91);p.prop('corpse',22,-31);p.prop('skeleton',-20,-79);p.prop('pipe',-30,-98);p.prop('pipe',30,-98);
  p.prop('checkpoint',18,-68.5,'TRANSMISSION CHECKPOINT');p.prop('power',22,-98,'BROADCAST / MARA CHANNEL 09');p.prop('exit',22,-101,'BROADCAST');
  return p.finish({chapterId:7,title:'AXIOM ZERO',subtitle:'AXIOM / TRANSMISSION TOWER',theme:'tower',
    intro:'This time, the city is listening. Mara has opened a route through the tower. Recover Protocol Zero, fight through security and transmission control, then destroy Omega and broadcast the truth.',
    objective:'DEFEAT OMEGA / BROADCAST THE EVIDENCE',exitLabel:'BROADCAST',completionMessage:'Omega falls. Mara broadcasts the Lazarus evidence across every screen in Vesper. Axiom’s crimes are exposed. The Black Rain case is finally closed.',
    spawn:{x:-19,z:5},checkpoint:{x:18,z:-68.5},switch:{x:22,z:-98},exit:{x:22,z:-101},mount:{x:-26,z:0},
    mountBounds:{minX:-29,maxX:29,minZ:-100,maxZ:6},defaultLoadout:['revolver','shotgun','machinegun','plasma','railgun','arc']});
}

export const CAMPAIGN_LEVELS:LevelData[]=[safehouse(),research(),fracture(),docks(),train(),canopy(),tower()];
