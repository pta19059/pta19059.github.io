import type {Door, Effect, Enemy, GameState, InputFrame, LevelData, Player, Vec2, WeaponId} from './types';

export const WEAPONS: Record<WeaponId, {name:string;damage:number;interval:number;clip:number;range:number;reload:number;pellets:number;spread:number}> = {
  revolver:{name:'Detective Revolver',damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},
  shotgun:{name:'Tactical Shotgun',damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},
  plasma:{name:'Plasma Rifle',damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},
  machinegun:{name:'Heavy Machine Gun',damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026},
};
const IDS:WeaponId[]=['revolver','shotgun','plasma','machinegun'];
const START_AMMO={revolver:0,shotgun:0,plasma:0,machinegun:0};
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
  private secretDoors=new Set<string>();
  private hazardTime=0;
  private seed=91271;
  private jumpHeld=false;
  private emptyClick=0;
  constructor(public readonly level:LevelData,difficulty:'easy'|'normal'|'hard'='normal') {
    this.resetState(difficulty);
  }

  private resetState(difficulty:GameState['difficulty']):void {
    const healthScale=difficulty==='easy'?.8:difficulty==='hard'?1.18:1;
    const player:Player={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:false,evidence:0,
      mounted:false,crouching:false,grounded:true,weapon:'revolver',owned:[],ammo:{...START_AMMO},reserve:{...START_AMMO},reload:0,cooldown:0,recoil:0,hurt:0};
    this.state={player,enemies:this.level.enemies.map(e=>({...e,health:Math.round(STATS[e.kind].health*healthScale),maxHealth:Math.round(STATS[e.kind].health*healthScale),
      alive:true,alert:false,cooldown:.7,hurt:0,phase:0,heading:0,speed:0,attack:0,vx:0,vz:0,path:[],pathTime:0})),
      doors:this.level.doors.map(d=>({...d,open:0,target:0})),pickups:this.level.pickups.map(p=>({...p,collected:false})),effects:[],
      status:'playing',kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',
      messageTime:5,powered:false,checkpoint:false,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty};
    this.reloading=null;this.attackWindups.clear();this.secretDoors.clear();
    this.hazardTime=0;this.seed=91271;this.jumpHeld=false;this.emptyClick=0;
  }

  restart(checkpoint=false):void {
    if(checkpoint&&!this.checkpointState){
      // A saved browser checkpoint can be resumed after reloading the page. The
      // in-memory snapshot is more exact; this fair baseline needs no backend.
      this.resetState(this.state.difficulty);
      const s=this.state,p=s.player;
      p.keycard=true;p.owned=['revolver','shotgun','machinegun'];p.weapon='machinegun';
      p.health=100;p.armor=55;
      for(const id of p.owned){p.ammo[id]=WEAPONS[id].clip;p.reserve[id]=WEAPONS[id].clip*4;}
      for(const item of s.pickups){if(item.z>-32.2&&item.kind!=='evidence'&&item.x>-13)item.collected=true;}
      for(const e of s.enemies){if(e.z>-32.2){e.alive=false;e.health=0;e.speed=0;e.vx=0;e.vz=0;e.attack=0;s.kills++;}}
      for(const d of s.doors){if(['office','facility','security'].includes(d.id)){d.open=1;d.target=1;}}
      s.checkpoint=true;this.checkpointState=structuredClone(s);
      this.checkpointSecrets=[];
    }
    if(checkpoint&&this.checkpointState){
      this.state=structuredClone(this.checkpointState);
      const p=this.state.player;
      p.x=this.level.checkpoint.x;p.z=this.level.checkpoint.z;p.y=0;p.vy=0;p.grounded=true;p.mounted=false;
      p.health=Math.max(p.health,75);p.armor=Math.max(p.armor,25);p.cooldown=0;p.reload=0;p.hurt=0;
      this.state.status='playing';this.state.effects=[];this.state.events=[];
      this.attackWindups.clear();this.reloading=null;this.jumpHeld=false;
      this.secretDoors=new Set(this.checkpointSecrets);this.hazardTime=0;this.emptyClick=0;
      for(const e of this.state.enemies){e.path=[];e.pathTime=0;e.cooldown=1.1;e.speed=0;e.vx=0;e.vz=0;e.attack=0;}
      this.message('CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.',4);
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
    if(this.state.player.mounted&&(z<-19.1||z>3.2))return false;
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
    if(p.mounted&&(p.z+dz<-19.1||p.z+dz>3.2))this.message('Your strider stays in the street. Press E to dismount and enter the building.',2);
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
    if(slot){id=IDS[clamp(Math.round(slot)-1,0,3)];if(!p.owned.includes(id)){this.message('Weapon not acquired yet.',1.5);return;}}
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
      let hitDistance=this.rayWalls(p.x,ey,p.z,dx,dy,dz,w.range),hit:Enemy|null=null;
      for(const enemy of this.state.enemies){
        if(!enemy.alive)continue;
        const stat=STATS[enemy.kind],t=this.rayEnemy(enemy,p.x,ey,p.z,dx,dy,dz,stat.radius,stat.height);
        if(t!==null&&t>=0&&t<hitDistance){hitDistance=t;hit=enemy;}
      }
      const hx=p.x+dx*hitDistance,hz=p.z+dz*hitDistance,hy=ey+dy*hitDistance;
      if(hit){
        const falloff=p.weapon==='shotgun'?Math.max(.35,1-hitDistance/42):1;
        this.damageEnemy(hit,w.damage*falloff);this.effect('blood',hx,hz,hy,.24);
      }else if(hitDistance<w.range)this.effect('spark',hx,hz,hy,.15);
      if(p.weapon==='plasma'){
        const count=Math.min(12,Math.ceil(hitDistance/1.5));
        for(let j=1;j<=count;j++){const t=hitDistance*j/count;this.effect('plasma',p.x+dx*t,p.z+dz*t,ey+dy*t,.14);}
      }
    }
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
    return this.rayWalls(a.x,height,a.z,(b.x-a.x)/d,0,(b.z-a.z)/d,d)>=d-.1;
  }

  private enemySees(enemy:Enemy):boolean {
    const p=this.state.player,startY=STATS[enemy.kind].height*.74,targetY=this.eyeHeight();
    const dx=p.x-enemy.x,dy=targetY-startY,dz=p.z-enemy.z,length=Math.hypot(dx,dy,dz);
    if(length<.001)return true;
    return this.rayWalls(enemy.x,startY,enemy.z,dx/length,dy/length,dz/length,length)>=length-.1;
  }

  private damageEnemy(e:Enemy,damage:number):void {
    e.health-=damage;e.hurt=1;e.alert=true;
    if(e.health>0)return;
    e.health=0;e.alive=false;e.path=[];e.speed=0;e.vx=0;e.vz=0;e.attack=0;this.attackWindups.delete(e.id);this.state.kills++;
    this.state.events.push({type:'kill'});this.effect('blood',e.x,e.z,.7,.5);
    // Small salvage drops prevent an unlucky route from making the level unwinnable.
    const p=this.state.player;
    p.reserve.revolver+=2;p.reserve.plasma+=2;p.reserve.machinegun+=3;
    if(e.kind==='brute')this.message('Containment beast neutralized. Restore the elevator power.',3);
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
      if(!s.powered){s.powered=true;s.events.push({type:'door'});this.message('ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.',4);}
      else this.message('Power online. The industrial lift is ready.',2);
      return;
    }
    if(dist(p,s.mount)<2.6&&p.z>-19){
      p.mounted=true;p.crouching=false;s.mount.x=p.x;s.mount.z=p.z;s.events.push({type:'mount'});
      this.message('STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.',4);return;
    }
    const nearby=s.doors.filter(d=>dist(p,d)<2.9).sort((a,b)=>dist(a,p)-dist(b,p));
    if(nearby.length){
      const d=nearby[0];
      if(p.mounted&&d.id==='facility'){this.message('Dismount before entering the research facility.',2);return;}
      if(d.locked&&!p.keycard){this.message('RESTRICTED — find the security keycard in the guard room.',3);return;}
      if(d.id==='elevator'){
        if(!s.powered){this.message('LIFT OFFLINE — restore power at the laboratory switch.',3);return;}
        if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return;}
      }
      d.target=d.target>.5?0:1;s.events.push({type:'door'});
      if(d.secret&&!this.secretDoors.has(d.id)){this.secretDoors.add(d.id);s.secrets++;this.message('SECRET FOUND — the city still keeps a few things off the record.',3);}
      else this.message(`${d.label}: ${d.target?'opening':'closing'}.`,1.6);
      return;
    }
    if(dist(p,this.level.exit)<3){this.checkExit();if(!s.powered)this.message('Restore elevator power first.',2);return;}
    this.collectPickups();
    this.message(p.keycard?'Find the laboratory power switch, then clear the lift route.':'Search the security wing for a keycard.',2);
  }

  private collectPickups():void {
    const s=this.state,p=s.player;
    for(const item of s.pickups){
      if(item.collected||dist(item,p)>1.1||p.y>1.5||!this.visible(p,item,.45))continue;
      if(item.kind==='health'&&p.health>=100||item.kind==='armor'&&p.armor>=100)continue;
      item.collected=true;s.events.push({type:'pickup'});
      if(IDS.includes(item.kind as WeaponId)){
        const id=item.kind as WeaponId,first=!p.owned.includes(id);
        if(first)p.owned.push(id);
        p.ammo[id]=WEAPONS[id].clip;p.reserve[id]+=WEAPONS[id].clip*(id==='revolver'?8:3);
        if(first){p.weapon=id;p.reload=0;this.reloading=null;p.cooldown=.15;p.recoil=.2;}
        this.message(`${WEAPONS[id].name.toUpperCase()} ACQUIRED — ${p.ammo[id]} loaded.`,2.5);
      }else if(item.kind==='health'){p.health=Math.min(100,p.health+38);this.message('MEDKIT +38 HEALTH',1.6);}
      else if(item.kind==='armor'){p.armor=Math.min(100,p.armor+55);this.message('BODY ARMOR +55',1.6);}
      else if(item.kind==='ammo'){
        p.reserve.revolver+=24;p.reserve.shotgun+=16;p.reserve.plasma+=45;p.reserve.machinegun+=80;
        this.message('AMMUNITION CACHE — supplies replenished.',2);
      }else if(item.kind==='evidence'){p.evidence++;this.message('EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.',3.5);}
      else if(item.kind==='keycard'){
        p.keycard=true;s.checkpoint=true;
        this.message('SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.',4);
        s.events.push({type:'checkpoint'});
        this.checkpointState=structuredClone(s);this.checkpointState.events=[];
        this.checkpointSecrets=[...this.secretDoors];
      }
    }
  }

  private finalThreats():number {
    return this.state.enemies.filter(e=>e.alive&&(this.level.enemies.find(def=>def.id===e.id)?.z??e.z)<-32).length;
  }

  private checkExit():void {
    const s=this.state;
    if(dist(s.player,this.level.exit)>1.5||s.status!=='playing')return;
    if(!s.powered||this.finalThreats()>0)return;
    s.status='complete';s.events.push({type:'complete'});s.player.reload=0;
    this.message('NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.',99);
  }

  private updateEnemies(dt:number,frameDt=dt):void {
    if(dt<=0)return;
    const p=this.state.player,difficulty=this.state.difficulty,detect=difficulty==='easy'?13:17;
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
        const duration=e.kind==='soldier'?.42:.32;
        const remaining=windup-dt;
        e.attack=.15+.85*clamp(1-remaining/duration,0,1);
        if(remaining<=0){
          this.attackWindups.delete(e.id);
          e.attack=1;
          if(this.enemySees(e)&&distance<stats.range+(e.kind==='soldier'?2:.55)){
            if(e.kind==='soldier'){
              this.effect('muzzle',e.x,e.z,1.4,.12);
              const chance=difficulty==='easy'?.55:difficulty==='hard'?.88:.72;
              if(this.random()<chance)this.hurtPlayer(stats.damage);
              this.effect('spark',p.x,p.z,Math.min(1.65,this.eyeHeight()),.1);
            }else{this.hurtPlayer(stats.damage);this.effect('blood',p.x,p.z,.65,.17);}
          }
          e.cooldown=stats.interval*(difficulty==='hard'?.8:difficulty==='easy'?1.2:1);
        }else this.attackWindups.set(e.id,remaining);
        continue;
      }
      const sees=this.enemySees(e);
      if(distance<stats.range&&sees&&e.cooldown<=0){
        e.vx=0;e.vz=0;e.attack=.15;
        this.faceEnemy(e,p.x-e.x,p.z-e.z,dt);
        this.attackWindups.set(e.id,e.kind==='soldier'?.42:.32);
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
      let speed=stats.speed*(difficulty==='easy'?.88:difficulty==='hard'?1.12:1)*(e.hurt>0?.42:1);
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
    amount*=s.difficulty==='easy'?.65:s.difficulty==='hard'?1.22:1;
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
