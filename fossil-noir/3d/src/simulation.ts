import type {Destructible, Difficulty, Door, Effect, Enemy, EnemyDef, GameState, InputFrame, LevelData, PickupReceipt, Player, Vec2, WeaponId} from './types';

import {DIFFICULTIES, WEAPON_IDS, WEAPONS} from './arsenal';
export {WEAPONS} from './arsenal';
const IDS=WEAPON_IDS;
const START_AMMO:Record<WeaponId,number>={revolver:0,shotgun:0,plasma:0,machinegun:0,railgun:0,arc:0};
const STATS={
  raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1.0,height:1.65,radius:.42},
  soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},
  mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},
  brute:{health:460,speed:1.8,damage:29,range:2.0,interval:1.5,height:2.9,radius:.75},
};
const dist=(a:Vec2,b:Vec2)=>Math.hypot(a.x-b.x,a.z-b.z);
const clamp=(x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));

/** Pure, deterministic gameplay model: rendering and browser APIs live elsewhere. */
export class Simulation {
  state!:GameState;
  private checkpointState:GameState|null=null;
  private checkpointSecrets:string[]=[];
  private reloading:WeaponId|null=null;
  private attackWindups=new Map<string,number>();
  private bossTargets=new Map<string,Vec2>();
  private secretDoors=new Set<string>();
  private hazardTime=0;
  private seed=91271;
  private jumpHeld=false;
  private emptyClick=0;
  constructor(public readonly level:LevelData,difficulty:Difficulty='normal') {
    this.resetState(difficulty);
  }

  private resetState(difficulty:GameState['difficulty']):void {
    const loadout=this.level.defaultLoadout??[];
    const player:Player={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:false,evidence:0,
      mounted:false,crouching:false,grounded:true,weapon:loadout[0]??'revolver',owned:[...loadout],ammo:{...START_AMMO},reserve:{...START_AMMO},reload:0,cooldown:0,recoil:0,hurt:0};
    for(const id of loadout){player.ammo[id]=WEAPONS[id].clip;player.reserve[id]=this.startingReserve(id,difficulty);}
    this.state={player,enemies:this.level.enemies.map(e=>this.createEnemy(e,difficulty)),
      doors:this.level.doors.map(d=>({...d,open:0,target:0})),pickups:this.level.pickups.map(p=>({...p,collected:false})),
      destructibles:(this.level.destructibles??[]).map(prop=>({...prop,maxHealth:prop.health,destroyed:false})),effects:[],
      status:'playing',kills:0,time:0,message:this.level.intro??'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',
      messageTime:5,powered:false,checkpoint:false,secrets:0,discoveredSecrets:[],slow:1,events:[],mount:{...this.level.mount},difficulty,triggeredWaves:[],chapterId:this.level.chapterId};
    this.reloading=null;this.attackWindups.clear();this.bossTargets.clear();this.secretDoors.clear();
    this.hazardTime=0;this.seed=91271;this.jumpHeld=false;this.emptyClick=0;
  }

  private startingReserve(id:WeaponId,difficulty=this.state.difficulty):number {
    return Math.min(WEAPONS[id].reserveCap,Math.round((id==='revolver'?24:WEAPONS[id].clip*2)*DIFFICULTIES[difficulty].ammo));
  }

  private createEnemy(def:EnemyDef,difficulty=this.state.difficulty):Enemy {
    const health=Math.round((def.health??STATS[def.kind].health)*DIFFICULTIES[difficulty].health);
    return {...def,health,maxHealth:health,alive:true,alert:false,cooldown:.7,hurt:0,phase:0,heading:0,speed:0,attack:0,vx:0,vz:0,path:[],pathTime:0};
  }

  /** Restore a checkpoint snapshot without browser dependencies or stale transients. */
  restoreSavedState(saved:GameState):boolean {
    try {
      if(!saved||saved.chapterId!==this.level.chapterId||!DIFFICULTIES[saved.difficulty]||!saved.player||
        !Array.isArray(saved.enemies)||!Array.isArray(saved.doors)||!Array.isArray(saved.pickups)||!Array.isArray(saved.destructibles))return false;
      const p=saved.player,b=this.level.bounds;
      if(![p.x,p.z,p.health,p.armor,p.yaw,p.pitch,saved.time,saved.kills].every(Number.isFinite)||p.x<b.minX||p.x>b.maxX||p.z<b.minZ||p.z>b.maxZ||
        !Array.isArray(p.owned)||p.owned.some(id=>!IDS.includes(id))||!IDS.includes(p.weapon)||!p.ammo||!p.reserve)return false;
      const definitions=[...this.level.enemies,...(this.level.waves??[]).flatMap(w=>w.enemies)];
      if(saved.enemies.length>definitions.length||saved.enemies.some(e=>!definitions.some(d=>d.id===e.id&&d.kind===e.kind)||![e.x,e.z,e.health].every(Number.isFinite)))return false;
      if(saved.pickups.length>this.level.pickups.length+definitions.length||saved.doors.length!==this.level.doors.length||saved.destructibles.length!==(this.level.destructibles??[]).length)return false;
      const restored=structuredClone(saved);
      restored.triggeredWaves=(saved.triggeredWaves??[]).filter(id=>this.level.waves?.some(w=>w.id===id));
      restored.discoveredSecrets=(saved.discoveredSecrets??saved.doors.filter(d=>d.secret&&d.target>.5).map(d=>d.id)).filter(id=>this.level.doors.some(d=>d.id===id&&d.secret));
      restored.secrets=restored.discoveredSecrets.length;
      for(const id of IDS){restored.player.ammo[id]=clamp(Number(restored.player.ammo[id])||0,0,WEAPONS[id].clip);restored.player.reserve[id]=clamp(Number(restored.player.reserve[id])||0,0,WEAPONS[id].reserveCap);}
      restored.player.owned=[...new Set(restored.player.owned)];
      this.checkpointSecrets=[...restored.discoveredSecrets];
      if(restored.checkpoint){this.checkpointState=restored;this.state.difficulty=restored.difficulty;this.restart(true);}
      else{
        this.checkpointState=null;this.state=restored;this.state.status='playing';this.state.events=[];this.state.effects=[];
        this.state.player.reload=0;this.state.player.cooldown=0;this.state.player.hurt=0;this.state.player.mounted=false;
        this.reloading=null;this.attackWindups.clear();this.bossTargets.clear();this.jumpHeld=false;this.hazardTime=0;this.emptyClick=0;
        this.secretDoors=new Set(this.checkpointSecrets);
        for(const e of this.state.enemies){e.path=[];e.pathTime=0;e.cooldown=1.1;e.speed=0;e.vx=0;e.vz=0;e.attack=0;}
      }
      return true;
    }catch{return false;}
  }

  restart(checkpoint=false):void {
    if(checkpoint&&!this.checkpointState){
      this.resetState(this.state.difficulty);
      const s=this.state,p=s.player;
      p.health=100;p.armor=55;p.keycard=this.level.pickups.some(item=>item.kind==='keycard');
      // The original district has a known guard-room checkpoint. Every gun
      // before it is granted before marking its pickup, including secret guns.
      if(this.level.chapterId===undefined||this.level.chapterId===0){
        for(const item of s.pickups){
          if(item.z<=-32.2||item.kind==='evidence'||item.x<=-13)continue;
          if(IDS.includes(item.kind as WeaponId)&&!p.owned.includes(item.kind as WeaponId))p.owned.push(item.kind as WeaponId);
          item.collected=true;
        }
        for(const id of ['revolver','shotgun','machinegun'] as WeaponId[])if(!p.owned.includes(id))p.owned.push(id);
        for(const e of s.enemies){if(e.z>-32.2){e.alive=false;e.health=0;e.speed=0;e.vx=0;e.vz=0;e.attack=0;s.kills++;}}
        for(const d of s.doors){if(['office','facility','security'].includes(d.id)){d.open=1;d.target=1;}}
      }
      for(const id of p.owned){p.ammo[id]=WEAPONS[id].clip;p.reserve[id]=this.startingReserve(id);}
      p.weapon=p.owned.at(-1)??'revolver';
      s.checkpoint=true;this.checkpointState=structuredClone(s);this.checkpointSecrets=[];
    }
    if(checkpoint&&this.checkpointState){
      this.state=structuredClone(this.checkpointState);
      const p=this.state.player;
      p.x=this.level.checkpoint.x;p.z=this.level.checkpoint.z;p.y=0;p.vy=0;p.grounded=true;p.mounted=false;
      p.health=Math.max(p.health,75);p.armor=Math.max(p.armor,25);p.cooldown=0;p.reload=0;p.hurt=0;
      this.state.status='playing';this.state.effects=[];this.state.events=[];
      this.attackWindups.clear();this.bossTargets.clear();this.reloading=null;this.jumpHeld=false;
      this.secretDoors=new Set(this.checkpointSecrets);this.hazardTime=0;this.emptyClick=0;
      for(const e of this.state.enemies){e.path=[];e.pathTime=0;e.cooldown=1.1;e.speed=0;e.vx=0;e.vz=0;e.attack=0;}
      this.message(`CHECKPOINT RESTORED — ${this.level.objective??'keycard secured. Enter the restricted laboratory.'}`,4);
    }else{this.checkpointState=null;this.checkpointSecrets=[];this.resetState(this.state.difficulty);}
  }

  update(dt:number,input:InputFrame):void {
    dt=clamp(dt,0,.075);
    const s=this.state,p=s.player;
    if(s.status!=='playing')return;
    s.time+=dt;s.messageTime=Math.max(0,s.messageTime-dt);
    p.yaw+=input.lookX;p.pitch=clamp(p.pitch+input.lookY,-1.22,1.22);
    p.cooldown=Math.max(0,p.cooldown-dt);p.recoil=Math.max(0,p.recoil-dt*4.6);p.hurt=Math.max(0,p.hurt-dt*2);
    this.emptyClick=Math.max(0,this.emptyClick-dt);
    if(p.reload>0){
      p.reload=Math.max(0,p.reload-dt);
      if(p.reload===0&&this.reloading){
        const id=this.reloading,n=Math.min(WEAPONS[id].clip-p.ammo[id],p.reserve[id]);
        p.ammo[id]+=n;p.reserve[id]-=n;this.reloading=null;
      }
    }
    if(input.weaponDelta||input.weaponSlot)this.switchWeapon(input.weaponDelta,input.weaponSlot||undefined);
    if(input.reload)this.reload();
    if(input.interact)this.interact();
    this.updateDoors(dt);
    this.movePlayer(dt,input);
    this.collectPickups();
    this.triggerWaves();
    if(input.fire)this.fire();
    const slow=input.slow&&s.slow>.015;
    s.slow=clamp(s.slow+(slow?-.17:.085)*dt,0,1);
    this.updateEnemies(dt*(slow?.32:1),dt);
    this.updateHazards(dt);
    for(const effect of s.effects)effect.life-=dt;
    s.effects=s.effects.filter(e=>e.life>0).slice(-130);
    this.checkExit();
  }

  private height():number {return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8;}
  private eyeHeight():number {const p=this.state.player;return p.y+(p.mounted?2.6:p.crouching?.9:1.65);}

  canOccupy(x:number,z:number,radius=.32,y=this.state.player.y):boolean {
    if(this.state.player.mounted&&!this.insideMountBounds(x,z))return false;
    return this.clearAt(x,z,radius,y,this.height());
  }

  private clearAt(x:number,z:number,radius:number,y=0,height=1.8):boolean {
    const b=this.level.bounds;
    if(x-radius<b.minX||x+radius>b.maxX||z-radius<b.minZ||z+radius>b.maxZ)return false;
    for(const w of this.level.walls){
      const bottom=w.y??0;
      if(y>=bottom+w.h-.025||y+height<=bottom+.025)continue;
      if(this.circleBox(x,z,radius,w.x,w.z,w.w,w.d))return false;
    }
    for(const d of this.state.doors){
      // Doors rise into the lintel; collision follows their visible opening.
      if(y+height<=d.open*3.4+.025)continue;
      if(this.circleBox(x,z,radius,d.x,d.z,d.w,d.d))return false;
    }
    for(const prop of this.state.destructibles){
      if(prop.destroyed||prop.kind!=='barrel'||y>=prop.y+prop.h-.025||y+height<=prop.y+.025)continue;
      if(this.circleBox(x,z,radius,prop.x,prop.z,prop.w,prop.d))return false;
    }
    return true;
  }

  private circleBox(x:number,z:number,r:number,bx:number,bz:number,w:number,d:number):boolean {
    const nx=clamp(x,bx-w/2,bx+w/2),nz=clamp(z,bz-d/2,bz+d/2);
    return (x-nx)**2+(z-nz)**2<r*r;
  }

  private movePlayer(dt:number,input:InputFrame):void {
    const p=this.state.player;
    if(input.crouch&&!p.mounted)p.crouching=true;
    else if(p.crouching){p.crouching=false;if(!this.canOccupy(p.x,p.z))p.crouching=true;}
    const forward=clamp(input.forward,-1,1),strafe=clamp(input.strafe,-1,1),n=Math.max(1,Math.hypot(forward,strafe));
    const speed=p.mounted?8.0:p.crouching?2.3:input.sprint?6.4:4.4;
    const dx=(-Math.sin(p.yaw)*forward+Math.cos(p.yaw)*strafe)*speed*dt/n;
    const dz=(-Math.cos(p.yaw)*forward-Math.sin(p.yaw)*strafe)*speed*dt/n;
    if(p.mounted&&!this.insideMountBounds(p.x+dx,p.z+dz))this.message('Your strider stays in this area. Press E to dismount.',2);
    const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.14)),radius=p.mounted?.53:.32;
    for(let i=0;i<steps;i++){
      if(this.canOccupy(p.x+dx/steps,p.z,radius))p.x+=dx/steps;
      if(this.canOccupy(p.x,p.z+dz/steps,radius))p.z+=dz/steps;
    }
    if(input.jump&&!this.jumpHeld&&p.grounded&&!p.crouching){p.vy=p.mounted?6.4:6.1;p.grounded=false;}
    this.jumpHeld=input.jump;
    p.vy-=14*dt;
    const nextY=p.y+p.vy*dt;
    let landing=0;
    if(p.vy<=0){
      for(const wall of this.level.walls){
        const top=(wall.y??0)+wall.h;
        if(top<=p.y+.035&&top>=nextY&&this.circleBox(p.x,p.z,radius,wall.x,wall.z,wall.w,wall.d))landing=Math.max(landing,top);
      }
      for(const prop of this.state.destructibles){
        if(prop.destroyed||prop.kind!=='barrel')continue;
        const top=prop.y+prop.h;
        if(top<=p.y+.035&&top>=nextY&&this.circleBox(p.x,p.z,radius,prop.x,prop.z,prop.w,prop.d))landing=Math.max(landing,top);
      }
    }
    if(p.vy<=0&&nextY<=landing){p.y=landing;p.vy=0;p.grounded=true;}
    else if(this.canOccupy(p.x,p.z,radius,nextY)){p.y=nextY;p.grounded=false;}
    else if(p.vy>0)p.vy=0;
    if(p.mounted){this.state.mount.x=p.x;this.state.mount.z=p.z;}
  }

  switchWeapon(delta:number,slot?:number):void {
    const p=this.state.player;
    if(!p.owned.length)return;
    let id:WeaponId;
    if(slot){id=IDS[clamp(Math.round(slot)-1,0,IDS.length-1)];if(!p.owned.includes(id)){this.message('Weapon not acquired yet.',1.5);return;}}
    else{const owned=IDS.filter(w=>p.owned.includes(w)),i=owned.indexOf(p.weapon);id=owned[(i+(delta>0?1:-1)+owned.length)%owned.length];}
    if(id===p.weapon)return;
    p.weapon=id;p.reload=0;p.cooldown=.22;p.recoil=.22;this.reloading=null;
    this.message(WEAPONS[id].name,1.2);
  }

  reload():void {
    const p=this.state.player,id=p.weapon,w=WEAPONS[id];
    if(!p.owned.includes(id)||p.reload>0||p.ammo[id]>=w.clip)return;
    if(p.reserve[id]<=0){this.message('No spare ammunition. Search the district.',1.6);return;}
    this.reloading=id;p.reload=w.reload;this.state.events.push({type:'reload',weapon:id});
  }

  fire():void {
    const p=this.state.player;
    if(this.state.status!=='playing'||p.cooldown>0||p.reload>0)return;
    if(p.mounted){this.bite();return;}
    if(!p.owned.includes(p.weapon)){this.message('Find your revolver in the office.',2);return;}
    const w=WEAPONS[p.weapon];
    if(p.ammo[p.weapon]<=0){
      if(p.reserve[p.weapon]>0)this.reload();
      else if(this.emptyClick===0){this.message('EMPTY — change weapon or find ammunition.',2);this.emptyClick=.6;}
      return;
    }
    p.ammo[p.weapon]--;p.cooldown=w.interval;p.recoil=1;
    this.state.events.push({type:'shot',weapon:p.weapon});
    this.effect('muzzle',p.x-Math.sin(p.yaw)*.5,p.z-Math.cos(p.yaw)*.5,this.eyeHeight()-.18,.07);
    for(let pellet=0;pellet<w.pellets;pellet++){
      const yaw=p.yaw+(this.random()-.5)*w.spread*2,pitch=p.pitch+(this.random()-.5)*w.spread*1.5;
      const dx=-Math.sin(yaw)*Math.cos(pitch),dz=-Math.cos(yaw)*Math.cos(pitch),dy=Math.sin(pitch),ey=this.eyeHeight();
      let hitDistance=this.rayWalls(p.x,ey,p.z,dx,dy,dz,w.range),hit:Enemy|null=null,propHit:Destructible|null=null;
      for(const enemy of this.state.enemies){
        if(!enemy.alive)continue;
        const stat=STATS[enemy.kind],scale=enemy.boss?1.15:1,t=this.rayEnemy(enemy,p.x,ey,p.z,dx,dy,dz,stat.radius*scale,stat.height*scale);
        if(t!==null&&t>=0&&t<hitDistance){hitDistance=t;hit=enemy;}
      }
      for(const prop of this.state.destructibles){
        if(prop.destroyed)continue;
        const t=this.rayBox(p.x,ey,p.z,dx,dy,dz,prop.x-prop.w/2,prop.x+prop.w/2,prop.y,prop.y+prop.h,prop.z-prop.d/2,prop.z+prop.d/2);
        if(t!==null&&t<hitDistance){hitDistance=t;propHit=prop;hit=null;}
      }
      const hx=p.x+dx*hitDistance,hz=p.z+dz*hitDistance,hy=ey+dy*hitDistance;
      if(propHit){
        this.damageDestructible(propHit,w.damage);this.effect('spark',hx,hz,hy,.16);
      }else if(hit){
        const falloff=p.weapon==='shotgun'?Math.max(.35,1-hitDistance/42):1;
        this.damageEnemy(hit,w.damage*falloff);this.effect('blood',hx,hz,hy,.24);
        if(p.weapon==='arc')this.chainArc(hit);
      }else if(hitDistance<w.range)this.effect('spark',hx,hz,hy,.15);
      if(p.weapon==='railgun'||p.weapon==='arc')this.trace(p.weapon==='railgun'?'rail':'arc',p.x,ey,p.z,hx,hy,hz);
      if(p.weapon==='plasma'){
        const count=Math.min(12,Math.ceil(hitDistance/1.5));
        for(let j=1;j<=count;j++){const t=hitDistance*j/count;this.effect('plasma',p.x+dx*t,p.z+dz*t,ey+dy*t,.14);}
      }
    }
  }

  /** Renderers see actual trace samples; no decorative hits can trigger damage. */
  private trace(kind:'rail'|'arc',x:number,y:number,z:number,tx:number,ty:number,tz:number):void {
    const length=Math.hypot(tx-x,ty-y,tz-z),count=Math.min(kind==='rail'?28:14,Math.max(2,Math.ceil(length/.7)));
    for(let i=1;i<=count;i++){
      const t=i/count,jitter=kind==='arc'&&i<count?Math.sin(i*2.3)*.1:0;
      this.effect(kind,x+(tx-x)*t+jitter,z+(tz-z)*t-jitter,y+(ty-y)*t,kind==='rail'?.18:.23);
    }
  }

  private chainArc(first:Enemy):void {
    const used=new Set([first.id]);let source=first;
    for(let chain=0;chain<2;chain++){
      const sy=STATS[source.kind].height*(source.boss?1.15:1)*.55;
      let nearest:Enemy|null=null,gap=5.00001;
      for(const candidate of this.state.enemies){
        if(!candidate.alive||used.has(candidate.id))continue;
        const ty=STATS[candidate.kind].height*(candidate.boss?1.15:1)*.55,d=Math.hypot(candidate.x-source.x,candidate.z-source.z,ty-sy);
        if(d>5||d>=gap||!this.lineClear(source.x,sy,source.z,candidate.x,ty,candidate.z))continue;
        nearest=candidate;gap=d;
      }
      if(!nearest)break;
      const ty=STATS[nearest.kind].height*(nearest.boss?1.15:1)*.55;
      this.trace('arc',source.x,sy,source.z,nearest.x,ty,nearest.z);
      this.damageEnemy(nearest,40);this.effect('spark',nearest.x,nearest.z,ty,.25);
      used.add(nearest.id);source=nearest;
    }
  }

  private lineClear(x:number,y:number,z:number,tx:number,ty:number,tz:number):boolean {
    const dx=tx-x,dy=ty-y,dz=tz-z,length=Math.hypot(dx,dy,dz);
    if(length<.001)return true;
    const nx=dx/length,ny=dy/length,nz=dz/length;
    if(this.rayWalls(x,y,z,nx,ny,nz,length)<length-.02)return false;
    for(const prop of this.state.destructibles){
      if(prop.destroyed)continue;
      const t=this.rayBox(x,y,z,nx,ny,nz,prop.x-prop.w/2,prop.x+prop.w/2,prop.y,prop.y+prop.h,prop.z-prop.d/2,prop.z+prop.d/2);
      if(t!==null&&t<length-.02)return false;
    }
    return true;
  }

  private bite():void {
    const p=this.state.player;p.cooldown=.58;p.recoil=.7;
    let bitten=false;
    for(const e of this.state.enemies){
      if(!e.alive||dist(e,p)>3)continue;
      const dx=e.x-p.x,dz=e.z-p.z,d=Math.hypot(dx,dz);
      if((-Math.sin(p.yaw)*dx-Math.cos(p.yaw)*dz)/Math.max(d,.1)>.35&&this.visible(p,e)){
        this.damageEnemy(e,95);this.effect('blood',e.x,e.z,1.1,.3);bitten=true;
      }
    }
    this.state.events.push({type:'enemy',message:bitten?'Strider bite':'Strider roar'});
  }

  private random():number {this.seed=(Math.imul(this.seed,1664525)+1013904223)>>>0;return this.seed/4294967296;}

  private rayEnemy(e:Enemy,x:number,y:number,z:number,dx:number,dy:number,dz:number,r:number,h:number):number|null {
    const ox=x-e.x,oz=z-e.z,a=dx*dx+dz*dz,b=2*(ox*dx+oz*dz),c=ox*ox+oz*oz-r*r;
    const discriminant=b*b-4*a*c;
    if(discriminant<0||a<1e-7)return null;
    const entry=(-b-Math.sqrt(discriminant))/(2*a),exit=(-b+Math.sqrt(discriminant))/(2*a);
    if(exit<0)return null;
    let enter=Math.max(0,entry),leave=exit;
    if(Math.abs(dy)<1e-8){if(y<0||y>h)return null;}
    else{
      let near=-y/dy,far=(h-y)/dy;if(near>far)[near,far]=[far,near];
      enter=Math.max(enter,near);leave=Math.min(leave,far);
    }
    return enter<=leave?enter:null;
  }

  private rayWalls(x:number,y:number,z:number,dx:number,dy:number,dz:number,max:number):number {
    let nearest=max;
    for(const w of this.level.walls){const t=this.rayBox(x,y,z,dx,dy,dz,w.x-w.w/2,w.x+w.w/2,w.y??0,(w.y??0)+w.h,w.z-w.d/2,w.z+w.d/2);if(t!==null&&t<nearest)nearest=t;}
    for(const d of this.state.doors){if(d.open>=.995)continue;const t=this.rayBox(x,y,z,dx,dy,dz,d.x-d.w/2,d.x+d.w/2,d.open*3.4,3.4+d.open*3.4,d.z-d.d/2,d.z+d.d/2);if(t!==null&&t<nearest)nearest=t;}
    return nearest;
  }

  private rayBox(x:number,y:number,z:number,dx:number,dy:number,dz:number,minX:number,maxX:number,minY:number,maxY:number,minZ:number,maxZ:number):number|null {
    let enter=0,leave=Infinity;
    const points=[x,y,z],dirs=[dx,dy,dz],mins=[minX,minY,minZ],maxs=[maxX,maxY,maxZ];
    for(let i=0;i<3;i++){
      if(Math.abs(dirs[i])<1e-8){if(points[i]<mins[i]||points[i]>maxs[i])return null;continue;}
      let a=(mins[i]-points[i])/dirs[i],b=(maxs[i]-points[i])/dirs[i];if(a>b)[a,b]=[b,a];
      enter=Math.max(enter,a);leave=Math.min(leave,b);if(enter>leave)return null;
    }
    return leave<0?null:enter;
  }

  private visible(a:Vec2,b:Vec2,height=1.2):boolean {
    const d=dist(a,b);if(d<.001)return true;
    return this.lineClear(a.x,height,a.z,b.x,height,b.z);
  }

  private enemySees(enemy:Enemy):boolean {
    const p=this.state.player,startY=STATS[enemy.kind].height*.74,targetY=this.eyeHeight();
    const dx=p.x-enemy.x,dy=targetY-startY,dz=p.z-enemy.z,length=Math.hypot(dx,dy,dz);
    if(length<.001)return true;
    return this.rayWalls(enemy.x,startY,enemy.z,dx/length,dy/length,dz/length,length)>=length-.1;
  }

  private damageEnemy(e:Enemy,damage:number):void {
    if(!e.alive)return;
    e.health-=damage;e.hurt=1;e.alert=true;
    if(e.health>0)return;
    e.health=0;e.alive=false;e.path=[];e.speed=0;e.vx=0;e.vz=0;e.attack=0;this.attackWindups.delete(e.id);this.bossTargets.delete(e.id);this.state.kills++;
    this.state.events.push({type:'kill'});this.effect('blood',e.x,e.z,.7,.5);
    // Supplies remain physically in the level until the detective reaches them.
    if(e.kind==='soldier'&&!this.state.pickups.some(item=>item.id===`drop-${e.id}`))this.state.pickups.push({id:`drop-${e.id}`,kind:'ammo',ammoFor:'machinegun',amount:20,label:'Soldier ammunition',x:e.x,z:e.z,collected:false});
    if(e.boss)this.message(`${e.label??e.boss.toUpperCase()} NEUTRALIZED — ${this.level.objective??'find the extraction route.'}`,3);
    else if(e.kind==='brute')this.message('Containment beast neutralized. Restore the exit power.',3);
  }

  private damageDestructible(prop:Destructible,damage:number):void {
    if(prop.destroyed)return;
    prop.health=Math.max(0,prop.health-damage);
    if(prop.health>0)return;
    prop.destroyed=true;
    if(prop.kind==='glass'){this.shatterGlass(prop);return;}
    this.explodeBarrels(prop);
  }

  private shatterGlass(prop:Destructible):void {
    this.state.events.push({type:'shatter'});
    for(let i=0;i<16;i++){
      const x=prop.x+(this.random()-.5)*prop.w,z=prop.z+(this.random()-.5)*prop.d,y=prop.y+this.random()*prop.h;
      this.state.effects.push({kind:'shard',x,z,y,life:.7,maxLife:.7,dx:(this.random()-.5)*2,dz:(this.random()-.5)*2});
    }
    this.message('SHOP WINDOW SHATTERED — the district answers back.',1.5);
  }

  /** Iterative chains mark a canister destroyed before scheduling its blast. */
  private explodeBarrels(first:Destructible):void {
    const queue=[first],processed=new Set<string>(),radius=4.2;
    for(let head=0;head<queue.length&&head<this.state.destructibles.length;head++){
      const barrel=queue[head];if(processed.has(barrel.id))continue;processed.add(barrel.id);
      this.state.events.push({type:'explosion'});
      this.effect('explosion',barrel.x,barrel.z,barrel.y+.75,.5);
      for(let i=0;i<10;i++){
        const angle=this.random()*Math.PI*2,r=this.random()*1.2;
        this.effect(i<6?'smoke':'spark',barrel.x+Math.sin(angle)*r,barrel.z+Math.cos(angle)*r,barrel.y+.4+this.random()*1.3,i<6?1.5:.38);
      }
      for(const enemy of this.state.enemies){
        const distance=dist(barrel,enemy);
        if(!enemy.alive||distance>=radius||!this.blastVisible(barrel,enemy,Math.min(1.1,STATS[enemy.kind].height*.6)))continue;
        this.damageEnemy(enemy,145*(1-distance/radius));
        this.effect('blood',enemy.x,enemy.z,1.05,.35);
      }
      const p=this.state.player,distance=dist(barrel,p);
      if(distance<radius&&this.blastVisible(barrel,p,p.y+Math.min(this.height()*.5,1.2)))this.hurtPlayer(75*(1-distance/radius));
      for(const prop of this.state.destructibles){
        const gap=dist(barrel,prop);
        if(prop.destroyed||gap>=radius||!this.blastVisible(barrel,prop,prop.y+prop.h*.5))continue;
        prop.health=Math.max(0,prop.health-145*(1-gap/radius));
        if(prop.health>0)continue;
        prop.destroyed=true;
        if(prop.kind==='barrel')queue.push(prop);else this.shatterGlass(prop);
      }
    }
    if(this.state.status==='playing')this.message('FUEL CANISTER DETONATED — keep your distance from the blast.',2.5);
  }

  private blastVisible(source:Destructible,target:Vec2,targetY:number):boolean {
    const sourceY=source.y+.9,dx=target.x-source.x,dy=targetY-sourceY,dz=target.z-source.z,length=Math.hypot(dx,dy,dz);
    if(length<.001)return true;
    return this.rayWalls(source.x,sourceY,source.z,dx/length,dy/length,dz/length,length)>=length-.015;
  }

  private updateDoors(dt:number):void {
    for(const d of this.state.doors){
      const direction=Math.sign(d.target-d.open);
      if(direction===0)continue;
      if(direction<0&&dist(d,this.state.player)<1.4){d.target=1;continue;}
      d.open=clamp(d.open+direction*dt*1.3,0,1);
    }
  }

  interact():void {
    const s=this.state,p=s.player;
    if(s.status!=='playing')return;
    if(p.mounted){
      const options=[{x:p.x+Math.cos(p.yaw)*1.1,z:p.z-Math.sin(p.yaw)*1.1},{x:p.x-Math.cos(p.yaw)*1.1,z:p.z+Math.sin(p.yaw)*1.1},{x:p.x,z:p.z+1.2}];
      const spot=options.find(v=>this.clearAt(v.x,v.z,.32,0,1.8));
      if(!spot){this.message('No room to dismount. Move into the street.',2);return;}
      p.mounted=false;p.x=spot.x;p.z=spot.z;p.y=0;p.vy=0;s.events.push({type:'mount'});this.message('Dismounted. Your strider will wait here.',2);return;
    }
    if(dist(p,this.level.switch)<2.5){
      if(!s.powered){s.powered=true;s.events.push({type:'door'});this.message(`${(this.level.exitLabel??'EXIT').toUpperCase()} POWER RESTORED — ${this.level.objective??'eliminate the laboratory threats and reach the lift.'}`,4);}
      else this.message('Power online. The exit is ready once the area is clear.',2);
      return;
    }
    if(dist(p,s.mount)<2.6&&this.insideMountBounds(p.x,p.z)){
      p.mounted=true;p.crouching=false;s.mount.x=p.x;s.mount.z=p.z;s.events.push({type:'mount'});
      this.message('STRIDER MOUNTED — faster movement. Fire to bite; E to dismount.',4);return;
    }
    const nearby=s.doors.filter(d=>dist(p,d)<2.9).sort((a,b)=>dist(a,p)-dist(b,p));
    if(nearby.length){
      const d=nearby[0];
      if(p.mounted&&d.id==='facility'){this.message('Dismount before entering the research facility.',2);return;}
      if(d.locked&&!p.keycard){this.message('RESTRICTED — find the security keycard in the guard room.',3);return;}
      if(d.id==='elevator'||d.id==='exit'){
        if(!s.powered){this.message('EXIT OFFLINE — restore power at the control switch.',3);return;}
        if(this.finalThreats()>0){this.message(`${this.finalThreats()} threats remain. Clear the area before extraction.`,3);return;}
        if(s.player.evidence<(this.level.requiredEvidence??0)){this.message(`Collect ${this.level.requiredEvidence} case files before leaving.`,3);return;}
      }
      d.target=d.target>.5?0:1;s.events.push({type:'door'});
      if(d.secret&&!this.secretDoors.has(d.id)){this.secretDoors.add(d.id);s.discoveredSecrets.push(d.id);s.secrets++;this.message('SECRET FOUND — the city still keeps a few things off the record.',3);}
      else this.message(`${d.label}: ${d.target?'opening':'closing'}.`,1.6);
      return;
    }
    if(dist(p,this.level.exit)<3){this.checkExit();if(!s.powered)this.message('Restore elevator power first.',2);return;}
    this.collectPickups();
    this.message(this.level.objective??(p.keycard?'Find the laboratory power switch, then clear the lift route.':'Search the security wing for a keycard.'),2);
  }

  private addReserve(id:WeaponId,amount:number):number {
    const p=this.state.player,w=WEAPONS[id],before=p.reserve[id];
    p.reserve[id]=Math.min(w.reserveCap,before+Math.max(0,Math.round(amount*DIFFICULTIES[this.state.difficulty].ammo)));
    return p.reserve[id]-before;
  }

  private collectPickups():void {
    const s=this.state,p=s.player;let checkpointCollected=false;
    for(const item of s.pickups){
      if(item.collected||dist(item,p)>1.1||p.y>1.5||!this.visible(p,item,.45))continue;
      if(item.kind==='health'&&p.health>=100||item.kind==='armor'&&p.armor>=100)continue;
      let receipt:PickupReceipt|undefined;
      if(IDS.includes(item.kind as WeaponId)){
        const id=item.kind as WeaponId,first=!p.owned.includes(id);
        if(first){
          const before=p.reserve[id];
          p.owned.push(id);p.ammo[id]=WEAPONS[id].clip;p.reserve[id]=Math.min(WEAPONS[id].reserveCap,p.reserve[id]+this.startingReserve(id));
          const added=p.reserve[id]-before;
          receipt={pickupId:item.id,kind:'weapon',weapon:id,loaded:p.ammo[id],ammunition:added>0?[{weapon:id,added}]:[]};
          p.weapon=id;p.reload=0;this.reloading=null;p.cooldown=.15;p.recoil=.2;
          this.message(`${WEAPONS[id].name.toUpperCase()} ACQUIRED — ${p.ammo[id]} loaded.`,2.5);
        }else{
          const added=this.addReserve(id,item.amount??WEAPONS[id].ammoPickup);if(added===0)continue;
          receipt={pickupId:item.id,kind:'ammo',weapon:id,ammunition:[{weapon:id,added}]};
          this.message(`${WEAPONS[id].name.toUpperCase()} AMMO +${added}`,1.6);
        }
      }else if(item.kind==='health'){p.health=Math.min(100,p.health+38);this.message('MEDKIT +38 HEALTH',1.6);}
      else if(item.kind==='armor'){p.armor=Math.min(100,p.armor+55);this.message('BODY ARMOR +55',1.6);}
      else if(item.kind==='ammo'){
        if(item.ammoFor){
          const added=this.addReserve(item.ammoFor,item.amount??WEAPONS[item.ammoFor].ammoPickup);if(added===0)continue;
          receipt={pickupId:item.id,kind:'ammo',weapon:item.ammoFor,ammunition:[{weapon:item.ammoFor,added}]};
          this.message(`${WEAPONS[item.ammoFor].name.toUpperCase()} AMMO +${added}`,1.6);
        }else{
          const counts:Record<WeaponId,number>={revolver:24,shotgun:16,plasma:45,machinegun:80,railgun:8,arc:12};
          const ammunition:PickupReceipt['ammunition']=[];
          for(const id of IDS){const added=this.addReserve(id,item.amount??counts[id]);if(added>0)ammunition.push({weapon:id,added});}
          if(ammunition.length===0)continue;
          receipt={pickupId:item.id,kind:'cache',ammunition};
          this.message('AMMUNITION CACHE — supplies replenished.',2);
        }
      }else if(item.kind==='evidence'){
        p.evidence++;this.message(item.label?`CASE FILE RECOVERED — ${item.label}`:'EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.',3.5);
      }else if(item.kind==='keycard'){
        p.keycard=true;s.checkpoint=true;checkpointCollected=true;
        this.message(`SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. ${this.level.objective??'Unlock the laboratory.'}`,4);
      }
      item.collected=true;s.events.push(receipt?{type:'pickup',pickup:receipt}:{type:'pickup'});
    }
    // A keycard and supplies can overlap; snapshot the complete collection pass.
    if(checkpointCollected){
      s.events.push({type:'checkpoint'});this.checkpointState=structuredClone(s);this.checkpointState.events=[];this.checkpointState.effects=[];
      this.checkpointSecrets=[...this.secretDoors];
    }
  }

  private insideMountBounds(x:number,z:number):boolean {
    const bounds=this.level.mountBounds??{minX:this.level.bounds.minX,maxX:this.level.bounds.maxX,minZ:-19.1,maxZ:3.2};
    return x>=bounds.minX&&x<=bounds.maxX&&z>=bounds.minZ&&z<=bounds.maxZ;
  }

  private triggerWaves():void {
    for(const wave of this.level.waves??[]){
      if(this.state.triggeredWaves.includes(wave.id)||dist(this.state.player,wave.trigger)>wave.radius)continue;
      this.state.triggeredWaves.push(wave.id);
      for(const def of wave.enemies)if(!this.state.enemies.some(e=>e.id===def.id)){const enemy=this.createEnemy(def);enemy.alert=true;this.state.enemies.push(enemy);}
      this.message(`AMBUSH — ${wave.enemies.length} hostiles detected. Keep moving.`,3);
    }
  }

  private finalThreats():number {
    if(this.level.requiredKills){
      let threats=0;
      for(const id of this.level.requiredKills)if(!this.state.enemies.some(e=>e.id===id&&!e.alive))threats++;
      const required=new Set(this.level.requiredKills);
      for(const e of this.state.enemies)if(e.alive&&!required.has(e.id)&&!(this.level.enemies.some(def=>def.id===e.id)))threats++;
      return threats;
    }
    return this.state.enemies.filter(e=>e.alive&&(this.level.enemies.find(def=>def.id===e.id)?.z??e.z)<-32).length;
  }

  private checkExit():void {
    const s=this.state;
    if(dist(s.player,this.level.exit)>1.5||s.status!=='playing')return;
    if(!s.powered||this.finalThreats()>0||s.player.evidence<(this.level.requiredEvidence??0))return;
    s.status='complete';s.events.push({type:'complete'});s.player.reload=0;this.reloading=null;
    this.message(this.level.completionMessage??'NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.',99);
  }

  private updateEnemies(dt:number,frameDt=dt):void {
    if(dt<=0)return;
    const p=this.state.player,difficulty=this.state.difficulty,tuning=DIFFICULTIES[difficulty],detect=tuning.detect;
    for(const e of this.state.enemies){
      if(!e.alive)continue;
      const stats=STATS[e.kind],distance=dist(e,p);
      // Clear last frame's measured motion before each branch. Idle, blocked,
      // charging and dead creatures never keep cycling their feet in place.
      e.speed=0;e.attack=Math.max(0,e.attack-dt/(e.kind==='brute'?.26:.2));
      e.hurt=Math.max(0,e.hurt-dt*3.3);e.cooldown=Math.max(0,e.cooldown-dt);e.pathTime-=dt;
      if(!e.alert&&distance<detect&&this.enemySees(e))e.alert=true;
      if(!e.alert){e.vx=0;e.vz=0;continue;}
      const windup=this.attackWindups.get(e.id);
      if(windup!==undefined){
        e.vx=0;e.vz=0;
        this.faceEnemy(e,p.x-e.x,p.z-e.z,dt);
        const duration=e.boss?.8:e.kind==='soldier'?.42:.32;
        const remaining=windup-dt;
        e.attack=.15+.85*clamp(1-remaining/duration,0,1);
        if(remaining<=0){
          this.attackWindups.delete(e.id);
          e.attack=1;
          if(e.boss){this.bossStrike(e);}
          else if(this.enemySees(e)&&distance<stats.range+(e.kind==='soldier'?2:.55)){
            if(e.kind==='soldier'){
              this.effect('muzzle',e.x,e.z,1.4,.12);
              if(this.random()<tuning.accuracy)this.hurtPlayer(stats.damage);
              this.effect('spark',p.x,p.z,Math.min(1.65,this.eyeHeight()),.1);
            }else{this.hurtPlayer(stats.damage);this.effect('blood',p.x,p.z,.65,.17);}
          }
          e.cooldown=(e.boss?2.1:stats.interval)*tuning.attackInterval;
        }else this.attackWindups.set(e.id,remaining);
        continue;
      }
      const sees=this.enemySees(e);
      if(distance<(e.boss?12:stats.range)&&sees&&e.cooldown<=0){
        e.vx=0;e.vz=0;e.attack=.15;
        this.faceEnemy(e,p.x-e.x,p.z-e.z,dt);
        this.attackWindups.set(e.id,e.boss?.8:e.kind==='soldier'?.42:.32);
        if(e.boss){
          this.bossTargets.set(e.id,{x:p.x,z:p.z});
          this.effect('arc',p.x,p.z,.15,.8);this.effect('spark',p.x,p.z,.35,.8);
          this.message(`${e.label??e.boss.toUpperCase()} ${e.boss==='crown'||e.boss==='ironjaw'?'CHARGING — MOVE!':'OVERLOAD — MOVE CLEAR!'}`,1.2);
        }
        this.state.events.push({type:'enemy',message:e.kind==='soldier'?'Enemy charging shot':'Predator attacking'});
        if(e.kind==='soldier')this.effect('plasma',e.x,e.z,1.65,.4);
        continue;
      }
      const stopDistance=e.kind==='soldier'?9:stats.range*.85;
      if(sees&&distance<=stopDistance+.025){
        e.vx=0;e.vz=0;
        this.faceEnemy(e,p.x-e.x,p.z-e.z,dt);
        continue;
      }
      let target:Vec2=p;
      if(!sees||!this.clearAt(e.x+(p.x-e.x)/Math.max(distance,.01)*.7,e.z+(p.z-e.z)/Math.max(distance,.01)*.7,stats.radius,0,stats.height)){
        if(e.pathTime<=0){e.path=this.findPath(e,p,stats.radius,Math.min(stats.height,1.8));e.pathTime=.8+this.random()*.25;}
        if(e.path.length){while(e.path.length&&dist(e,e.path[0])<.4)e.path.shift();if(e.path.length)target=e.path[0];}
        else {e.vx=0;e.vz=0;continue;}
      }
      const length=dist(e,target);if(length<.01){e.vx=0;e.vz=0;continue;}
      const acceleration=e.kind==='raptor'?12:e.kind==='mutant'?8:5;
      let speed=stats.speed*tuning.speed*(e.hurt>0?.42:1);
      // Brake before entering the attack/aim distance instead of snapping from
      // full speed to an idle pose. Waypoints keep full speed through turns.
      if(target===p&&sees)speed=Math.min(speed,Math.sqrt(2*acceleration*Math.max(0,distance-stopDistance)));
      let desiredX=(target.x-e.x)/length*speed,desiredZ=(target.z-e.z)/length*speed;
      // Begin steering before contact; hard movement checks below keep the
      // physical volumes separated even when several predators pursue Elias.
      for(const other of this.state.enemies){
        if(other===e||!other.alive)continue;
        const gap=dist(e,other),minimum=stats.radius+STATS[other.kind].radius;
        const shoulder=minimum+.35;
        if(gap>.01&&gap<shoulder){desiredX+=(e.x-other.x)/gap*(shoulder-gap)*3;desiredZ+=(e.z-other.z)/gap*(shoulder-gap)*3;}
      }
      const desiredLength=Math.hypot(desiredX,desiredZ);
      if(desiredLength>speed){desiredX*=speed/desiredLength;desiredZ*=speed/desiredLength;}
      const changeX=desiredX-e.vx,changeZ=desiredZ-e.vz,change=Math.hypot(changeX,changeZ),blend=change>0?Math.min(1,acceleration*dt/change):1;
      e.vx+=changeX*blend;e.vz+=changeZ*blend;
      const dx=e.vx*dt,dz=e.vz*dt,startX=e.x,startZ=e.z;
      const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.12));
      for(let step=0;step<steps;step++){
        if(this.enemyCanMove(e,e.x+dx/steps,e.z))e.x+=dx/steps;
        if(this.enemyCanMove(e,e.x,e.z+dz/steps))e.z+=dz/steps;
      }
      const movedX=e.x-startX,movedZ=e.z-startZ,moved=Math.hypot(movedX,movedZ);
      e.speed=moved/Math.max(frameDt,1e-8);e.phase+=moved;
      // Losing a component to collision must also remove its stored momentum.
      e.vx=movedX/dt;e.vz=movedZ/dt;
      if(moved>.00001)this.faceEnemy(e,movedX,movedZ,dt);
    }
  }

  /** Boss attacks telegraph a fixed target so a moving player can evade them. */
  private bossStrike(enemy:Enemy):void {
    const target=this.bossTargets.get(enemy.id);this.bossTargets.delete(enemy.id);
    if(!target)return;
    const charging=enemy.boss==='crown'||enemy.boss==='ironjaw';
    if(charging){
      const dx=target.x-enemy.x,dz=target.z-enemy.z,length=Math.hypot(dx,dz),travel=Math.min(length,4.5);
      const steps=Math.max(1,Math.ceil(travel/.12)),sx=enemy.x,sz=enemy.z;
      for(let i=0;i<steps;i++){
        const nx=enemy.x+dx/Math.max(length,.001)*travel/steps,nz=enemy.z+dz/Math.max(length,.001)*travel/steps;
        if(!this.enemyCanMove(enemy,nx,nz))break;
        enemy.x=nx;enemy.z=nz;
      }
      enemy.phase+=Math.hypot(enemy.x-sx,enemy.z-sz);
    }
    const impact=charging?enemy:target,radius=charging?2.5:enemy.boss==='omega'?3.4:2.7;
    this.effect(charging?'explosion':'arc',impact.x,impact.z,.45,.4);
    for(let i=0;i<8;i++){const angle=i*Math.PI/4;this.effect(charging?'spark':'plasma',impact.x+Math.sin(angle)*radius,impact.z+Math.cos(angle)*radius,.22,.42);}
    const p=this.state.player;
    if(dist(p,impact)<radius&&this.lineClear(enemy.x,1.3,enemy.z,p.x,this.eyeHeight(),p.z))this.hurtPlayer(enemy.boss==='omega'?38:charging?34:28);
    this.state.events.push({type:'enemy',message:charging?'Boss charge impact':'Boss electrical overload'});
  }

  private faceEnemy(e:Enemy,dx:number,dz:number,dt:number):void {
    if(Math.hypot(dx,dz)<.00001)return;
    const desired=Math.atan2(-dx,-dz),difference=Math.atan2(Math.sin(desired-e.heading),Math.cos(desired-e.heading));
    const rate=e.kind==='raptor'?8:e.kind==='brute'?4:6;
    e.heading+=clamp(difference,-rate*dt,rate*dt);
    e.heading=Math.atan2(Math.sin(e.heading),Math.cos(e.heading));
  }

  private enemyCanMove(e:Enemy,x:number,z:number):boolean {
    const stats=STATS[e.kind];
    if(!this.clearAt(x,z,stats.radius,0,stats.height))return false;
    for(const other of this.state.enemies){
      if(other===e||!other.alive)continue;
      const minimum=stats.radius+STATS[other.kind].radius,nextGap=Math.hypot(x-other.x,z-other.z);
      // A custom/checkpoint position may begin overlapped; only movement which
      // increases that gap is then allowed. Ordinary movement cannot overlap.
      if(nextGap<minimum-.00001&&nextGap<=dist(e,other)+.000001)return false;
    }
    return true;
  }

  private findPath(start:Vec2,goal:Vec2,radius:number,height:number):Vec2[] {
    const b=this.level.bounds,cell=.9,w=Math.ceil((b.maxX-b.minX)/cell),h=Math.ceil((b.maxZ-b.minZ)/cell);
    const at=(v:Vec2)=>({x:clamp(Math.floor((v.x-b.minX)/cell),0,w-1),z:clamp(Math.floor((v.z-b.minZ)/cell),0,h-1)});
    const a=at(start),g=at(goal),key=(x:number,z:number)=>z*w+x,world=(k:number)=>({x:b.minX+(k%w+.5)*cell,z:b.minZ+(Math.floor(k/w)+.5)*cell});
    const begin=key(a.x,a.z),end=key(g.x,g.z),open=[begin],came=new Map<number,number>(),scores=new Map<number,number>([[begin,0]]),closed=new Set<number>();
    const heuristic=(k:number)=>Math.abs(k%w-g.x)+Math.abs(Math.floor(k/w)-g.z);
    let found=-1,best=begin,bestH=heuristic(begin),examined=0;
    while(open.length&&examined++<1900){
      let index=0,cost=Infinity;
      for(let i=0;i<open.length;i++){const value=(scores.get(open[i])??Infinity)+heuristic(open[i]);if(value<cost){cost=value;index=i;}}
      const current=open.splice(index,1)[0];if(closed.has(current))continue;
      closed.add(current);
      const hh=heuristic(current);if(hh<bestH){bestH=hh;best=current;}
      if(current===end){found=current;break;}
      const x=current%w,z=Math.floor(current/w);
      for(const [dx,dz]of [[1,0],[-1,0],[0,1],[0,-1]]){
        const nx=x+dx,nz=z+dz;if(nx<0||nx>=w||nz<0||nz>=h)continue;
        const next=key(nx,nz);if(closed.has(next))continue;
        const spot=world(next);if(next!==end&&!this.clearAt(spot.x,spot.z,radius,0,height))continue;
        const value=(scores.get(current)??0)+1;
        if(value>=(scores.get(next)??Infinity))continue;
        scores.set(next,value);came.set(next,current);if(!open.includes(next))open.push(next);
      }
    }
    if(found===-1){if(best===begin)return [];found=best;}
    const path:Vec2[]=[];let cursor=found;
    while(cursor!==begin&&came.has(cursor)){path.push(world(cursor));cursor=came.get(cursor)!;}
    return path.reverse();
  }

  private hurtPlayer(amount:number):void {
    const s=this.state,p=s.player;if(s.status!=='playing')return;
    amount*=DIFFICULTIES[s.difficulty].damage;
    if(p.mounted)amount*=.65;
    const absorbed=Math.min(p.armor,amount*.65);p.armor-=absorbed;p.health=Math.max(0,p.health-(amount-absorbed));p.hurt=1;
    s.events.push({type:'hurt'});
    if(p.health<=0){s.status='dead';p.reload=0;this.message('ELIAS VANE IS DOWN. The city keeps its secrets.',99);}
  }

  private updateHazards(dt:number):void {
    const p=this.state.player;
    const onHazard=p.y<.45&&this.level.hazards.some(h=>Math.abs(p.x-h.x)<h.w/2&&Math.abs(p.z-h.z)<h.d/2);
    if(onHazard){this.hazardTime+=dt;if(this.hazardTime>.65){this.hazardTime=0;this.hurtPlayer(12);this.message('TOXIC SPILL — move clear of the green waste.',1.5);}}
    else this.hazardTime=0;
  }

  private effect(kind:Effect['kind'],x:number,z:number,y:number,life:number):void {this.state.effects.push({kind,x,z,y,life,maxLife:life});}
  private message(message:string,duration:number):void {
    if(this.state.message===message&&this.state.messageTime>.1)return;
    this.state.message=message;this.state.messageTime=duration;this.state.events.push({type:'message',message});
  }
}
