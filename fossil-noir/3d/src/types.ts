export type WeaponId = 'revolver' | 'shotgun' | 'plasma' | 'machinegun' | 'railgun' | 'arc';
export type Difficulty = 'easy' | 'normal' | 'hard' | 'nightmare';
export type BossKind = 'crown' | 'ironjaw' | 'guardian' | 'omega';
export type EnemyKind = 'raptor' | 'soldier' | 'mutant' | 'brute';
export type PickupKind = WeaponId | 'health' | 'armor' | 'ammo' | 'keycard' | 'evidence';
export interface Vec2 {x:number;z:number}
export interface Wall extends Vec2 {w:number;d:number;h:number;material:'brick'|'metal'|'concrete'|'glass'|'crate';y?:number}
export interface DoorDef extends Vec2 {id:string;w:number;d:number;locked?:boolean;secret?:boolean;label:string}
export interface EnemyDef extends Vec2 {id:string;kind:EnemyKind;boss?:BossKind;health?:number;label?:string}
export interface PickupDef extends Vec2 {id:string;kind:PickupKind;label?:string;ammoFor?:WeaponId;amount?:number;evidenceId?:string}
export interface Prop extends Vec2 {kind:string;rotation?:number;scale?:number;label?:string}
/** Shootable scenery has an explicit volume; decorative meshes never imply a hit target. */
export interface DestructibleDef extends Vec2 {id:string;kind:'barrel'|'glass';y:number;w:number;d:number;h:number;health:number}
export interface Destructible extends DestructibleDef {maxHealth:number;destroyed:boolean}
export interface LevelData {chapterId?:number;title?:string;subtitle?:string;intro?:string;objective?:string;completionMessage?:string;exitLabel?:string;safe?:boolean;theme?:'district'|'safehouse'|'research'|'reactor'|'docks'|'train'|'jungle'|'tower';requiredEvidence?:number;requiredKills?:string[];defaultLoadout?:WeaponId[];mountBounds?:{minX:number;maxX:number;minZ:number;maxZ:number};waves?:{id:string;trigger:Vec2;radius:number;enemies:EnemyDef[]}[];walls:Wall[];doors:DoorDef[];enemies:EnemyDef[];pickups:PickupDef[];props:Prop[];destructibles?:DestructibleDef[];spawn:Vec2;exit:Vec2;checkpoint:Vec2;switch:Vec2;mount:Vec2;hazards:(Vec2&{w:number;d:number})[];bounds:{minX:number;maxX:number;minZ:number;maxZ:number}}
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
export interface Effect extends Vec2 {y:number;kind:'blood'|'spark'|'plasma'|'smoke'|'muzzle'|'explosion'|'shard'|'arc'|'rail';life:number;maxLife:number;dx?:number;dz?:number}
export interface InputFrame {forward:number;strafe:number;lookX:number;lookY:number;fire:boolean;sprint:boolean;crouch:boolean;jump:boolean;interact:boolean;reload:boolean;weaponDelta:number;weaponSlot:number;slow:boolean}
export interface PickupReceipt {pickupId:string;kind:'weapon'|'ammo'|'cache';weapon?:WeaponId;loaded?:number;ammunition:{weapon:WeaponId;added:number}[]}
export type GameEvent = {type:'shot'|'reload'|'hurt'|'pickup'|'door'|'enemy'|'kill'|'mount'|'complete'|'checkpoint'|'message'|'explosion'|'shatter';message?:string;weapon?:WeaponId;pickup?:PickupReceipt};
export interface GameState {player:Player;enemies:Enemy[];doors:Door[];pickups:Pickup[];destructibles:Destructible[];effects:Effect[];status:'playing'|'dead'|'complete';kills:number;time:number;message:string;messageTime:number;powered:boolean;checkpoint:boolean;secrets:number;discoveredSecrets:string[];slow:number;events:GameEvent[];mount:Vec2;difficulty:Difficulty;triggeredWaves:string[];chapterId?:number}
export type RenderingMode = 'enhanced' | 'retro';
export type RenderResolution = 'auto' | '720' | '1080' | '640' | '320';
export interface Settings {sensitivity:number;rendering:RenderingMode;resolution:RenderResolution;quality:'low'|'high';volume:number;musicVolume:number;effectsVolume:number;difficulty:Difficulty;controls:'auto'|'desktop'|'touch'}
export const EMPTY_INPUT:InputFrame={forward:0,strafe:0,lookX:0,lookY:0,fire:false,sprint:false,crouch:false,jump:false,interact:false,reload:false,weaponDelta:0,weaponSlot:0,slow:false};
