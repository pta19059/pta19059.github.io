import test from 'node:test';
import assert from 'node:assert/strict';
import { Simulation } from '../src/simulation';
import { LEVEL } from '../src/level';
import { EMPTY_INPUT, type DestructibleDef, type LevelData, type Vec2 } from '../src/types';

const barrel=(id:string,x:number,z:number):DestructibleDef=>({id,kind:'barrel',x,z,y:0,w:.85,d:.85,h:1.35,health:30});
const glass=(id:string,x:number,z:number):DestructibleDef=>({id,kind:'glass',x,z,y:.4,w:1.8,d:.12,h:2.4,health:1});
function arena(changes:Partial<LevelData>={},difficulty:'normal'|'easy'='normal') {
  const sim=new Simulation({...LEVEL,spawn:{x:0,z:0},exit:{x:18,z:18},checkpoint:{x:0,z:0},switch:{x:18,z:15},mount:{x:15,z:18},bounds:{minX:-20,maxX:20,minZ:-20,maxZ:20},walls:[],doors:[],enemies:[],pickups:[],hazards:[],props:[],destructibles:[],...changes},difficulty);
  sim.state.player.owned=['revolver'];sim.state.player.ammo.revolver=6;
  return sim;
}
function shoot(sim:Simulation,target:Vec2,height=.7) {
  const p=sim.state.player,d=Math.hypot(target.x-p.x,target.z-p.z);
  p.cooldown=0;
  sim.update(0,{...EMPTY_INPUT,lookX:-Math.atan2(target.x-p.x,-(target.z-p.z))-p.yaw,lookY:Math.atan2(height-(p.y+1.65),d)-p.pitch,fire:true});
}

test('fuel barrels are actual collision volumes until shooting destroys them',()=>{
  const sim=arena({destructibles:[barrel('fuel',0,-3)],enemies:[{id:'nearby',kind:'raptor',x:.9,z:-3.5}]});
  assert.equal(sim.canOccupy(0,-3),false);
  shoot(sim,{x:0,z:-3});
  assert.equal(sim.state.destructibles[0].health,0);
  assert.equal(sim.state.destructibles[0].destroyed,true);
  assert.equal(sim.canOccupy(0,-3),true,'a destroyed canister no longer blocks walking');
  assert.equal(sim.state.enemies[0].alive,false,'a close predator takes the real explosion damage');
  assert.equal(sim.state.kills,1);
  assert.ok(sim.state.player.health<100,'standing in the blast radius also hurts Elias');
  assert.ok(sim.state.effects.some(e=>e.kind==='explosion'));
  assert.ok(sim.state.effects.some(e=>e.kind==='smoke'));
  assert.ok(sim.state.effects.some(e=>e.kind==='blood'));
  assert.equal(sim.state.events.filter(e=>e.type==='explosion').length,1);
});

test('descending onto intact fuel scenery lands on its top rather than hovering',()=>{
  const sim=arena({destructibles:[barrel('platform',0,-3)]});
  const p=sim.state.player;p.z=-3;p.y=2;p.vy=-3;p.grounded=false;
  for(let i=0;i<10;i++)sim.update(.05,EMPTY_INPUT);
  assert.equal(p.y,1.35);
  assert.equal(p.grounded,true);
  assert.equal(p.vy,0);
  sim.state.destructibles[0].destroyed=true;
  sim.update(.05,EMPTY_INPUT);
  assert.ok(p.y<1.35,'removing the support lets the player fall normally');
});

test('walls and closed doors occlude exact bullet hits and explosion damage',()=>{
  for(const occluder of ['wall','door'] as const){
    const geometry=occluder==='wall'?{walls:[{x:0,z:-2,w:8,d:.5,h:4,material:'metal' as const}]}:{doors:[{id:'shield',x:0,z:-2,w:8,d:.5,label:'CLOSED'}]};
    const hidden=arena({...geometry,destructibles:[barrel('hidden',0,-3)]});
    shoot(hidden,{x:0,z:-3});
    assert.equal(hidden.state.destructibles[0].destroyed,false,`${occluder} stops the shot before the prop`);

    const shieldGeometry=occluder==='wall'?{walls:[{x:0,z:-4,w:8,d:.5,h:4,material:'metal' as const}]}:{doors:[{id:'shield',x:0,z:-4,w:8,d:.5,label:'CLOSED'}]};
    const shielded=arena({...shieldGeometry,destructibles:[barrel('fuel',0,-3)],enemies:[{id:'protected',kind:'raptor',x:0,z:-5}]});
    const health=shielded.state.enemies[0].health;
    shoot(shielded,{x:0,z:-3});
    assert.equal(shielded.state.destructibles[0].destroyed,true);
    assert.equal(shielded.state.enemies[0].health,health,`${occluder} shields the enemy from the nearby blast`);
    assert.equal(shielded.state.enemies[0].alert,false,'cover also prevents a blast hit reaction');
  }
});

test('barrel chains are finite and award each nearby enemy kill only once',()=>{
  const sim=arena({destructibles:[barrel('one',0,-3),barrel('two',0,-5),barrel('three',0,-7),glass('pane',1,-5)],enemies:[{id:'victim',kind:'raptor',x:1.2,z:-5.5}]});
  shoot(sim,{x:0,z:-3});
  assert.ok(sim.state.destructibles.every(prop=>prop.destroyed));
  assert.equal(sim.state.events.filter(e=>e.type==='explosion').length,3,'each fuel barrel detonates exactly once');
  assert.equal(sim.state.events.filter(e=>e.type==='shatter').length,1,'a blast can shatter nearby glazing');
  assert.equal(sim.state.kills,1);
  assert.equal(sim.state.events.filter(e=>e.type==='kill').length,1);
  shoot(sim,{x:0,z:-3});
  assert.equal(sim.state.events.filter(e=>e.type==='explosion').length,3,'shooting the destroyed scenery cannot trigger it again');
  assert.equal(sim.state.kills,1);
});

test('blast distance falloff respects armor and leaves players outside the radius safe',()=>{
  const sim=arena({destructibles:[barrel('fuel',0,-1.5)]});
  sim.state.player.armor=50;
  shoot(sim,{x:0,z:-1.5});
  const damage=75*(1-1.5/4.2);
  assert.ok(Math.abs(sim.state.player.armor-(50-damage*.65))<1e-7);
  assert.ok(Math.abs(sim.state.player.health-(100-damage*.35))<1e-7);
  const distant=arena({destructibles:[barrel('distant',0,-5)]});
  shoot(distant,{x:0,z:-5});
  assert.equal(distant.state.player.health,100);
});

test('shop glazing shatters in front of its backing wall and never opens a progression bypass',()=>{
  const pane=glass('shop',0,-3);
  const sim=arena({destructibles:[pane],walls:[{x:0,z:-3.3,w:4,d:.4,h:4,material:'brick'}]});
  assert.equal(sim.canOccupy(0,-3.3),false);
  shoot(sim,pane,1.6);
  assert.equal(sim.state.destructibles[0].destroyed,true);
  assert.equal(sim.state.effects.filter(e=>e.kind==='shard').length,16);
  assert.equal(sim.state.events.filter(e=>e.type==='shatter').length,1);
  assert.equal(sim.canOccupy(0,-3.3),false,'the shop remains a backed storefront');
  assert.match(sim.state.message,/WINDOW SHATTERED/);
});

test('checkpoints retain destruction already earned while full restarts revive the original props',()=>{
  const sim=arena({destructibles:[barrel('before-save',0,-5),barrel('after-save',5,-5)],pickups:[{id:'card',kind:'keycard',x:10,z:10}]});
  shoot(sim,{x:0,z:-5});
  sim.state.player.x=10;sim.state.player.z=10;
  sim.update(0,EMPTY_INPUT);
  assert.equal(sim.state.checkpoint,true,'the ordinary keycard pickup captures the checkpoint');
  shoot(sim,{x:5,z:-5});
  assert.ok(sim.state.destructibles.every(prop=>prop.destroyed));
  sim.restart(true);
  assert.equal(sim.state.destructibles[0].destroyed,true,'a snapshot after destruction preserves it');
  assert.equal(sim.state.destructibles[1].destroyed,false,'post-checkpoint destruction is rolled back with the rest of the encounter');
  sim.restart(false);
  assert.ok(sim.state.destructibles.every(prop=>!prop.destroyed&&prop.health===prop.maxHealth));
});
