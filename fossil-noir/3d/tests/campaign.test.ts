import test from 'node:test';
import assert from 'node:assert/strict';
import {CAMPAIGN, CASE_FILES,createCampaignSimulation} from '../src/campaign';
import {Simulation,WEAPONS} from '../src/simulation';
import {WEAPON_IDS} from '../src/arsenal';
import {EMPTY_INPUT,type Enemy,type InputFrame,type LevelData,type Vec2,type WeaponId} from '../src/types';

const titles=['RAIN OVER VESPER','SAFEHOUSE 09','AXIOM RESEARCH WING','THE FRACTURE','BLACKWATER DOCKS','IRON EXPRESS','THE LOST CANOPY','AXIOM ZERO'];
const distance=(a:Vec2,b:Vec2)=>Math.hypot(a.x-b.x,a.z-b.z);
const boxTouch=(point:Vec2,x:number,z:number,w:number,d:number,r:number)=>{
  const nx=Math.max(x-w/2,Math.min(point.x,x+w/2)),nz=Math.max(z-d/2,Math.min(point.z,z+d/2));
  return (point.x-nx)**2+(point.z-nz)**2<r*r;
};
function clear(level:LevelData,point:Vec2,r=.32,locked=false){
  const b=level.bounds;
  if(point.x-r<b.minX||point.x+r>b.maxX||point.z-r<b.minZ||point.z+r>b.maxZ)return false;
  if(level.walls.some(w=>(w.y??0)<1.8&&boxTouch(point,w.x,w.z,w.w,w.d,r)))return false;
  if(locked&&level.doors.some(d=>d.locked&&boxTouch(point,d.x,d.z,d.w,d.d,r)))return false;
  return !(level.destructibles??[]).some(p=>p.kind==='barrel'&&boxTouch(point,p.x,p.z,p.w,p.d,r));
}
/** The doors are open for route geometry, then locked doors are tested separately. */
function reachable(level:LevelData,locked=false){
  const b=level.bounds,cell=.65,width=Math.ceil((b.maxX-b.minX)/cell),height=Math.ceil((b.maxZ-b.minZ)/cell);
  const point=(index:number):Vec2=>({x:b.minX+(index%width+.5)*cell,z:b.minZ+(Math.floor(index/width)+.5)*cell});
  const snap=(p:Vec2)=>Math.max(0,Math.min(height-1,Math.floor((p.z-b.minZ)/cell)))*width+Math.max(0,Math.min(width-1,Math.floor((p.x-b.minX)/cell)));
  const open=new Uint8Array(width*height),seen=new Uint8Array(width*height);
  for(let i=0;i<open.length;i++)open[i]=clear(level,point(i),.32,locked)?1:0;
  const start=snap(level.spawn),queue=[start];seen[start]=1;
  assert.equal(open[start],1,`${level.title}: spawn's navigation cell is clear`);
  for(let cursor=0;cursor<queue.length;cursor++){
    const at=queue[cursor],x=at%width,z=Math.floor(at/width);
    for(const next of [x>0?at-1:-1,x<width-1?at+1:-1,z>0?at-width:-1,z<height-1?at+width:-1]){
      if(next<0||seen[next]||!open[next])continue;seen[next]=1;queue.push(next);
    }
  }
  return (target:Vec2,tolerance=.95)=>{
    const index=snap(target),cx=index%width,cz=Math.floor(index/width),steps=Math.ceil(tolerance/cell);
    for(let dz=-steps;dz<=steps;dz++)for(let dx=-steps;dx<=steps;dx++){
      const x=cx+dx,z=cz+dz;if(x<0||z<0||x>=width||z>=height)continue;
      const i=z*width+x;if(seen[i]&&distance(point(i),target)<=tolerance)return true;
    }
    return false;
  };
}

test('campaign preserves the original eight chapters, nine case files and final ending',()=>{
  assert.deepEqual(CAMPAIGN.map(l=>l.title),titles);
  assert.deepEqual(CAMPAIGN.map(l=>l.chapterId),[0,1,2,3,4,5,6,7]);
  assert.deepEqual(Object.keys(CASE_FILES),['witness','blackrain','arm','lazarus','reactor','manifest','signal','mara','zero']);
  assert.match(CAMPAIGN[7].completionMessage!,/Mara broadcasts.*Black Rain case is finally closed/);
  assert.equal(CAMPAIGN[1].safe,true);assert.equal(CAMPAIGN[1].requiredEvidence,2);
  assert.equal(CAMPAIGN[1].enemies.length,0);assert.equal(CAMPAIGN[1].waves?.length,0);
  assert.equal(CAMPAIGN[1].pickups.filter(p=>p.kind==='evidence').length,2);
  const layouts=CAMPAIGN.map(l=>JSON.stringify([l.bounds,l.walls.map(w=>[w.x,w.z,w.w,w.d])]))
  assert.equal(new Set(layouts).size,8,'every chapter has its own footprint and collision layout');
});

for(const level of CAMPAIGN){
  test(`${level.title}: all supplies, story, doors and encounters have traversable geometry`,()=>{
    const reaches=reachable(level),enemies=[...level.enemies,...(level.waves??[]).flatMap(w=>w.enemies)];
    const targets=[{id:'spawn',...level.spawn},{id:'checkpoint',...level.checkpoint},{id:'switch',...level.switch},{id:'exit',...level.exit},...level.pickups,...enemies];
    for(const target of targets){
      assert.equal(clear(level,target,.32),true,`${level.title}: ${target.id} inside a wall or barrel at ${JSON.stringify(target)}`);
      assert.equal(reaches(target),true,`${level.title}: no route to ${target.id} at ${JSON.stringify(target)}`);
    }
    const radii={raptor:.42,soldier:.43,mutant:.55,brute:.75};
    for(const enemy of enemies)assert.equal(clear(level,enemy,radii[enemy.kind]),true,`${enemy.id} does not have body clearance`);
    for(const wave of level.waves??[])assert.equal(reaches(wave.trigger),true,`${wave.id} trigger is inaccessible`);
    for(const door of level.doors)assert.equal(reaches(door),true,`${door.id} opening is not a connected passage`);
    const ids=[...level.pickups.map(p=>p.id),...enemies.map(e=>e.id),...level.doors.map(d=>d.id),...(level.destructibles??[]).map(d=>d.id)];
    assert.equal(new Set(ids).size,ids.length,'entities have unique IDs inside their chapter');
    assert.deepEqual(new Set(level.requiredKills),new Set(enemies.map(e=>e.id)),'exit requirements include late encounter waves');
    for(const pickup of level.pickups){
      assert.ok(!level.hazards.some(h=>boxTouch(pickup,h.x,h.z,h.w,h.d,.32)),`${pickup.id} is inside a damaging hazard`);
      if(pickup.evidenceId)assert.ok(CASE_FILES[pickup.evidenceId],`unknown evidence ${pickup.evidenceId}`);
      if(pickup.ammoFor)assert.ok(pickup.amount!>0,`empty ammunition cache ${pickup.id}`);
    }
    if(level.chapterId!==0&&!level.safe){
      assert.ok(enemies.length>=20&&enemies.length<=30,'combat chapters contain a complete encounter roster');
      assert.ok(enemies.every(e=>distance(e,level.spawn)>20),'no attack spawn is placed on the player');
      assert.ok(level.pickups.filter(p=>p.kind==='ammo').length>=10,'supplies are distributed through the mission');
      assert.ok(level.doors.some(d=>d.secret),'each combat chapter has a reachable secret');
    }
  });
  if(level.chapterId!==0&&!level.safe)test(`${level.title}: the key is reachable before its locked progression gate`,()=>{
    const reaches=reachable(level,true),keys=level.pickups.filter(p=>p.kind==='keycard');
    assert.equal(keys.length,1);
    assert.ok(keys.every(k=>reaches(k)),'security keycard can be obtained before opening a locked door');
    assert.equal(reaches(level.exit),false,'a closed locked gate cannot be bypassed around the outer wall');
  });
}

test('campaign bosses are distinct and all six weapons can be found along the route',()=>{
  const bosses=CAMPAIGN.flatMap(l=>l.enemies.filter(e=>e.boss));
  assert.deepEqual(bosses.map(b=>b.boss),['crown','ironjaw','guardian','omega']);
  assert.deepEqual(bosses.map(b=>b.id),['crown-rex','iron-jaw','root-crown','omega-final']);
  assert.ok(bosses.every(b=>b.health!>=1000));
  const finds=new Set(CAMPAIGN.flatMap(l=>l.pickups.map(p=>p.kind)));
  for(const id of ['revolver','shotgun','plasma','machinegun','railgun','arc'])assert.ok(finds.has(id as never),`${id} is discoverable`);
});

// The following mission driver has no teleport, invulnerability, ammo grant or
// direct kill path. It walks navigation cells, opens doors, aims, fires and
// reloads using the same input frames as the browser. Geometry checks above
// test every cache even when a full player has no reason to consume it.
const STEP=.05;
const input=(changes:Partial<InputFrame>={}):InputFrame=>({...EMPTY_INPUT,...changes});
function shotVisible(sim:Simulation,enemy:Enemy){
  const p=sim.state.player,length=distance(p,enemy),height=enemy.kind==='raptor'?1.2:enemy.kind==='brute'?1.8:1.35;
  const samples=Math.ceil(length/.2),eye=p.y+1.65;
  for(let i=1;i<samples;i++){
    const t=i/samples,x=p.x+(enemy.x-p.x)*t,z=p.z+(enemy.z-p.z)*t,y=eye+(height-eye)*t;
    if(sim.level.walls.some(w=>y>=(w.y??0)&&y<=(w.y??0)+w.h&&Math.abs(x-w.x)<=w.w/2&&Math.abs(z-w.z)<=w.d/2))return false;
    if(sim.state.doors.some(d=>y>=d.open*3.4&&Math.abs(x-d.x)<=d.w/2&&Math.abs(z-d.z)<=d.d/2))return false;
    if(sim.state.destructibles.some(d=>!d.destroyed&&y>=d.y&&y<=d.y+d.h&&Math.abs(x-d.x)<=d.w/2&&Math.abs(z-d.z)<=d.d/2))return false;
  }
  return true;
}
function tickPlayer(sim:Simulation,waypoint?:Vec2,dt=STEP,interact=false){
  const p=sim.state.player;
  assert.equal(sim.state.status,'playing',`${sim.level.title}: died at (${p.x.toFixed(1)},${p.z.toFixed(1)}), kills ${sim.state.kills}, time ${sim.state.time.toFixed(1)}`);
  const enemy=sim.state.enemies.filter(e=>e.alive&&distance(p,e)<52&&shotVisible(sim,e)).sort((a,b)=>distance(p,a)-distance(p,b))[0];
  const target=enemy??waypoint,yaw=target?-Math.atan2(target.x-p.x,-(target.z-p.z)):p.yaw;
  const height=enemy?(enemy.kind==='raptor'?1.2:enemy.kind==='brute'?1.8:1.35):1.65;
  const pitch=enemy?Math.atan2(height-(p.y+1.65),distance(p,enemy)):0;
  let slot=0;
  if(enemy){
    const range=distance(p,enemy);
    const choices:WeaponId[]=range<7?['shotgun','machinegun','plasma','arc','railgun','revolver']:range>35?['railgun','plasma','machinegun','revolver','shotgun','arc']:['machinegun','plasma','railgun','arc','revolver','shotgun'];
    const best=choices.find(id=>p.owned.includes(id)&&WEAPONS[id].range>range&&(p.ammo[id]>0||p.reserve[id]>0));
    if(best&&p.weapon!==best&&!p.reload)slot=WEAPON_IDS.indexOf(best)+1;
  }
  let forward=0,strafe=0;
  if(waypoint){
    const d=distance(p,waypoint),dx=(waypoint.x-p.x)/Math.max(d,.0001),dz=(waypoint.z-p.z)/Math.max(d,.0001);
    forward=-Math.sin(yaw)*dx-Math.cos(yaw)*dz;strafe=Math.cos(yaw)*dx-Math.sin(yaw)*dz;
  }
  sim.update(dt,input({forward,strafe,lookX:yaw-p.yaw,lookY:pitch-p.pitch,fire:!!enemy,reload:p.ammo[p.weapon]===0,weaponSlot:slot,interact}));
  sim.state.events.length=0;
}
function pathTo(sim:Simulation,target:Vec2,tolerance=.85):Vec2[]|null{
  const level=sim.level,b=level.bounds,cell=.65,width=Math.ceil((b.maxX-b.minX)/cell),height=Math.ceil((b.maxZ-b.minZ)/cell);
  const point=(i:number):Vec2=>({x:b.minX+(i%width+.5)*cell,z:b.minZ+(Math.floor(i/width)+.5)*cell});
  const snap=(p:Vec2)=>Math.max(0,Math.min(height-1,Math.floor((p.z-b.minZ)/cell)))*width+Math.max(0,Math.min(width-1,Math.floor((p.x-b.minX)/cell)));
  const start=snap(sim.state.player),parents=new Int32Array(width*height);parents.fill(-2);parents[start]=-1;
  const queue=[start];let end=-1;
  for(let cursor=0;cursor<queue.length;cursor++){
    const at=queue[cursor],spot=point(at);
    if(distance(spot,target)<tolerance){end=at;break;}
    const x=at%width,z=Math.floor(at/width);
    for(const next of [x>0?at-1:-1,x<width-1?at+1:-1,z>0?at-width:-1,z<height-1?at+width:-1]){
      if(next<0||parents[next]!==-2)continue;
      const candidate=point(next);
      if(!clear(level,candidate))continue;
      if(!sim.state.player.keycard&&level.doors.some(d=>d.locked&&boxTouch(candidate,d.x,d.z,d.w,d.d,.32)))continue;
      if(level.hazards.some(h=>boxTouch(candidate,h.x,h.z,h.w,h.d,.5)))continue;
      parents[next]=at;queue.push(next);
    }
  }
  if(end<0)return null;
  const result:Vec2[]=[];for(let at=end;at!==-1;at=parents[at])result.push(point(at));return result.reverse();
}
function walkTo(sim:Simulation,target:Vec2,tolerance=.85){
  const route=pathTo(sim,target,tolerance);assert.ok(route,`${sim.level.title}: no input route to ${JSON.stringify(target)}`);
  for(const waypoint of route.slice(1)){
    let ticks=0;
    while(distance(sim.state.player,waypoint)>.10){
      if(sim.state.status==='complete')return;
      assert.ok(ticks++<100,`${sim.level.title}: stuck near ${JSON.stringify(waypoint)}, player ${JSON.stringify(sim.state.player)}, message ${sim.state.message}`);
      const door=sim.state.doors.filter(d=>d.target===0&&(!d.locked||sim.state.player.keycard)&&distance(sim.state.player,d)<2.5).sort((a,b)=>distance(sim.state.player,a)-distance(sim.state.player,b))[0];
      if(door){tickPlayer(sim,undefined,STEP,true);for(let i=0;i<14;i++)tickPlayer(sim);}
      tickPlayer(sim,waypoint,Math.min(STEP,distance(sim.state.player,waypoint)/4.4));
    }
  }
}
function completeMission(sim:Simulation){
  const level=sim.level;tickPlayer(sim);
  const visited=new Set<string>();let destinations=0;
  while(visited.size<level.pickups.length&&sim.state.status==='playing'){
    assert.ok(destinations++<level.pickups.length+1);
    const candidates=level.pickups.filter(p=>!visited.has(p.id)).sort((a,b)=>distance(sim.state.player,a)-distance(sim.state.player,b));
    const next=candidates.find(p=>pathTo(sim,p));assert.ok(next,`${level.title}: remaining supply area cannot be entered from (${sim.state.player.x},${sim.state.player.z}), key=${sim.state.player.keycard}: ${JSON.stringify(candidates)}`);
    visited.add(next.id);walkTo(sim,next);tickPlayer(sim);
  }
  for(const wave of level.waves??[])if(!sim.state.triggeredWaves.includes(wave.id))walkTo(sim,wave.trigger,.5);
  let hunt=0;
  while(sim.state.enemies.some(e=>e.alive)&&sim.state.status==='playing'){
    assert.ok(hunt++<80,`${level.title}: encounter never settled`);
    const target=sim.state.enemies.filter(e=>e.alive).sort((a,b)=>distance(sim.state.player,a)-distance(sim.state.player,b))[0];
    walkTo(sim,target,5.5);
    for(let i=0;i<35&&target.alive;i++){
      const p=sim.state.player,d=distance(p,target);
      const retreat=d<7?{x:p.x+(p.x-target.x)/Math.max(d,.1)*1.2,z:p.z+(p.z-target.z)/Math.max(d,.1)*1.2}:undefined;
      tickPlayer(sim,retreat&&sim.canOccupy(retreat.x,retreat.z)?retreat:undefined);
    }
    if(sim.state.player.health<75){
      const health=sim.state.pickups.filter(p=>p.kind==='health'&&!p.collected).sort((a,b)=>distance(sim.state.player,a)-distance(sim.state.player,b))[0];
      if(health&&pathTo(sim,health))walkTo(sim,health);
    }
  }
  assert.equal(sim.state.kills,level.requiredKills?.length??level.enemies.length);
  assert.equal(sim.state.triggeredWaves.length,level.waves?.length??0);
  assert.ok(sim.state.player.evidence>=(level.requiredEvidence??0));
  walkTo(sim,level.switch,.5);tickPlayer(sim,undefined,STEP,true);
  walkTo(sim,level.exit,.5);
  if(sim.state.status==='playing')tickPlayer(sim,undefined,STEP,true);
  assert.equal(sim.state.status,'complete',`${level.title}: ${sim.state.message}`);
  assert.ok(sim.state.player.health>0);assert.ok(sim.state.powered);
}
for(const level of CAMPAIGN)for(const difficulty of ['easy','normal'] as const)
  test(`${level.title}: complete the chapter with ordinary finite-ammunition inputs (${difficulty})`,{timeout:120000},t=>{
    const sim=new Simulation(level,difficulty);completeMission(sim);
    t.diagnostic(`Chapter ${level.chapterId!+1}: ${sim.state.kills} kills, ${sim.state.time.toFixed(1)}s simulated play, ${sim.state.player.health.toFixed(0)} HP, ${sim.state.player.armor.toFixed(0)} armor, ${sim.state.triggeredWaves.length} reinforcement wave(s), ${sim.state.secrets} secret(s).`);
  });

test('complete the entire normal campaign with real chapter carry and finite ammunition',{timeout:120000},t=>{
  let previous:Simulation|undefined,totalTime=0,totalKills=0;
  const files=new Set<string>();
  for(let index=0;index<CAMPAIGN.length;index++){
    const carry=previous?.state.player,before=carry?JSON.stringify(carry):undefined;
    const sim=createCampaignSimulation(index,'normal',carry);
    if(carry){
      assert.equal(JSON.stringify(carry),before,'loading the next chapter does not alter the previous run');
      assert.equal(sim.state.player.keycard,false,'each facility requires its own key');
      assert.equal(sim.state.player.evidence,0,'safehouse files are not bypassed by earlier evidence');
      for(const id of carry.owned){
        assert.equal(sim.state.player.ammo[id],carry.ammo[id],`${id} does not receive a free loaded magazine`);
        assert.equal(sim.state.player.reserve[id],carry.reserve[id],`${id} reserves carry rather than refill`);
      }
    }
    completeMission(sim);previous=sim;totalTime+=sim.state.time;totalKills+=sim.state.kills;
    for(const pickup of sim.state.pickups)if(pickup.collected&&pickup.evidenceId)files.add(pickup.evidenceId);
    t.diagnostic(`${index+1}/${CAMPAIGN.length} ${sim.level.title}: ${sim.state.kills} kills; ${sim.state.player.health.toFixed(0)} HP; owned ${sim.state.player.owned.length} weapons.`);
  }
  assert.equal(totalKills,CAMPAIGN.reduce((sum,l)=>sum+l.requiredKills!.length,0));
  assert.equal(files.size,9,'the continuous journey can recover every original case file');
  assert.equal(previous!.state.status,'complete');
  t.diagnostic(`Full input-driven normal campaign: ${totalKills} kills, ${totalTime.toFixed(1)}s simulated play, all 9 original case files. Perfect deterministic aim is used; these are completion checks, not human play-time estimates.`);
});
