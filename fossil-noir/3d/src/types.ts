export type WeaponId = 'revolver' | 'shotgun' | 'plasma' | 'machinegun';
export type EnemyKind = 'raptor' | 'soldier' | 'mutant' | 'brute';
export type PickupKind = WeaponId | 'health' | 'armor' | 'ammo' | 'keycard' | 'evidence';
export interface Vec2 {x:number;z:number}
export interface Wall extends Vec2 {w:number;d:number;h:number;material:'brick'|'metal'|'concrete'|'glass'|'crate';y?:number}
export interface DoorDef extends Vec2 {id:string;w:number;d:number;locked?:boolean;secret?:boolean;label:string}
export interface EnemyDef extends Vec2 {id:string;kind:EnemyKind}
export interface PickupDef extends Vec2 {id:string;kind:PickupKind;label?:string}
export interface Prop extends Vec2 {kind:string;rotation?:number;scale?:number;label?:string}
export interface LevelData {walls:Wall[];doors:DoorDef[];enemies:EnemyDef[];pickups:PickupDef[];props:Prop[];spawn:Vec2;exit:Vec2;checkpoint:Vec2;switch:Vec2;mount:Vec2;hazards:(Vec2&{w:number;d:number})[];bounds:{minX:number;maxX:number;minZ:number;maxZ:number}}
export interface Player extends Vec2 {y:number;vy:number;yaw:number;pitch:number;health:number;armor:number;keycard:boolean;evidence:number;mounted:boolean;crouching:boolean;grounded:boolean;weapon:WeaponId;owned:WeaponId[];ammo:Record<WeaponId,number>;reserve:Record<WeaponId,number>;reload:number;cooldown:number;recoil:number;hurt:number}
export interface Enemy extends EnemyDef {
  health:number;maxHealth:number;alive:boolean;alert:boolean;cooldown:number;hurt:number;
  /** Metres travelled: the renderer derives footfall timing from actual movement. */
  phase:number;
  /** Facing in the same convention as player yaw; movement and aim update it. */
  heading:number;
  /** Actual horizontal speed, including collision and slow motion. */
  speed:number;
  /** Real attack windup/strike/recovery envelope, from zero to one. */
  attack:number;
  vx:number;vz:number;path:Vec2[];pathTime:number;
}
export interface Door extends DoorDef {open:number;target:number}
export interface Pickup extends PickupDef {collected:boolean}
export interface Effect extends Vec2 {y:number;kind:'blood'|'spark'|'plasma'|'smoke'|'muzzle';life:number;maxLife:number;dx?:number;dz?:number}
export interface InputFrame {forward:number;strafe:number;lookX:number;lookY:number;fire:boolean;sprint:boolean;crouch:boolean;jump:boolean;interact:boolean;reload:boolean;weaponDelta:number;weaponSlot:number;slow:boolean}
export type GameEvent = {type:'shot'|'reload'|'hurt'|'pickup'|'door'|'enemy'|'kill'|'mount'|'complete'|'checkpoint'|'message';message?:string;weapon?:WeaponId};
export interface GameState {player:Player;enemies:Enemy[];doors:Door[];pickups:Pickup[];effects:Effect[];status:'playing'|'dead'|'complete';kills:number;time:number;message:string;messageTime:number;powered:boolean;checkpoint:boolean;secrets:number;slow:number;events:GameEvent[];mount:Vec2;difficulty:'easy'|'normal'|'hard'}
export interface Settings {sensitivity:number;resolution:'320'|'640';quality:'low'|'high';volume:number;difficulty:'easy'|'normal'|'hard'}
export const EMPTY_INPUT:InputFrame={forward:0,strafe:0,lookX:0,lookY:0,fire:false,sprint:false,crouch:false,jump:false,interact:false,reload:false,weaponDelta:0,weaponSlot:0,slow:false};
