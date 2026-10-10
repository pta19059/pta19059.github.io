import type {Difficulty, WeaponId} from './types';

export const WEAPON_IDS:WeaponId[]=['revolver','shotgun','plasma','machinegun','railgun','arc'];
export interface WeaponStats {name:string;damage:number;interval:number;clip:number;range:number;reload:number;pellets:number;spread:number;reserveCap:number;ammoPickup:number}
export const WEAPONS:Record<WeaponId,WeaponStats>={
  revolver:{name:'Detective Revolver',damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003,reserveCap:144,ammoPickup:24},
  shotgun:{name:'Tactical Shotgun',damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065,reserveCap:64,ammoPickup:12},
  plasma:{name:'Plasma Rifle',damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012,reserveCap:180,ammoPickup:30},
  machinegun:{name:'Heavy Machine Gun',damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026,reserveCap:360,ammoPickup:60},
  railgun:{name:'Rail Rifle',damage:128,interval:.85,clip:5,range:80,reload:1.9,pellets:1,spread:.001,reserveCap:36,ammoPickup:8},
  arc:{name:'Arc Disruptor',damage:55,interval:.5,clip:12,range:24,reload:1.6,pellets:1,spread:.007,reserveCap:60,ammoPickup:12},
};
export interface DifficultyStats {name:string;description:string;health:number;damage:number;speed:number;ammo:number;detect:number;attackInterval:number;accuracy:number}
export const DIFFICULTIES:Record<Difficulty,DifficultyStats>={
  easy:{name:'Rookie',description:'Explore the case with more supplies and gentler enemies.',health:.8,damage:.65,speed:.88,ammo:1.25,detect:13,attackInterval:1.2,accuracy:.55},
  normal:{name:'Detective',description:'The complete case with balanced supplies and combat.',health:1,damage:1,speed:1,ammo:1,detect:17,attackInterval:1,accuracy:.72},
  hard:{name:'Nightmare',description:'Faster, tougher enemies and tighter ammunition.',health:1.18,damage:1.22,speed:1.12,ammo:.85,detect:20,attackInterval:.8,accuracy:.88},
  nightmare:{name:'Extinction',description:'Relentless predators, rapid attacks and scarce supplies.',health:1.42,damage:1.48,speed:1.28,ammo:.65,detect:24,attackInterval:.62,accuracy:.96},
};
