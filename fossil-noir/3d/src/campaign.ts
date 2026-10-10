import {LEVEL} from './level';
import {CAMPAIGN_LEVELS} from './campaign-levels';
import {Simulation} from './simulation';
import {WEAPONS,WEAPON_IDS} from './arsenal';
import type {Difficulty,LevelData,Player} from './types';

/** The same eight chapters, in the same order, as the original 2D game. */
export const CAMPAIGN:LevelData[]=[{
  ...LEVEL,chapterId:0,title:'RAIN OVER VESPER',subtitle:'THE NEON DISTRICT',theme:'district',
  intro:'The rain could never wash this city clean. A distress call on Mara Vale’s old frequency leads Elias Vane into Vesper’s neon district. Find the witness record, clear the escape route and reach Safehouse 09.',
  objective:'FIND THE WITNESS NOTE / REACH SAFEHOUSE 09',exitLabel:'SAFEHOUSE 09',
  completionMessage:'Shipment 09 was carrying things that were still breathing. The witness says the old precinct is safe. Elias returns to Room 09.',
  defaultLoadout:[],requiredKills:LEVEL.enemies.map(e=>e.id),
  enemies:LEVEL.enemies.map(e=>e.id==='s01'?{...e,z:-14.3}:e),
  mountBounds:{minX:-12,maxX:12,minZ:-19.1,maxZ:3.2},
  pickups:LEVEL.pickups.map(p=>p.id==='office-evidence'?{...p,label:'THE LAST SHIPMENT / WITNESS NOTE',evidenceId:'witness'}:
    p.id==='machinegun'?{...p,z:-24.9}:p),
},...CAMPAIGN_LEVELS];

export const CHAPTER_TITLES=CAMPAIGN.map(level=>level.title!);

/** The browser and campaign tests share the real chapter-transition rules. */
export function createCampaignSimulation(index:number,difficulty:Difficulty,carry?:Player):Simulation {
  if(!Number.isInteger(index)||!CAMPAIGN[index])throw new RangeError('Unknown Fossil Noir chapter');
  const next=new Simulation(CAMPAIGN[index],difficulty);
  if(carry){
    const player=next.state.player;
    player.health=Math.max(50,Math.min(100,carry.health));
    player.armor=Math.max(0,Math.min(100,carry.armor));
    player.owned=[...new Set([...carry.owned,...player.owned])];
    for(const id of WEAPON_IDS){
      if(carry.owned.includes(id)){
        player.ammo[id]=Math.min(WEAPONS[id].clip,carry.ammo[id]);
        player.reserve[id]=Math.min(WEAPONS[id].reserveCap,carry.reserve[id]);
      }else player.reserve[id]=Math.min(WEAPONS[id].reserveCap,Math.max(player.reserve[id],carry.reserve[id]));
    }
    if(player.owned.includes(carry.weapon))player.weapon=carry.weapon;
    player.keycard=false;player.evidence=0;
  }
  return next;
}

export interface CaseFile {title:string;source:string;body:string}
/** Original Fossil Noir lore. These texts belong to their corresponding pickups. */
export const CASE_FILES:Record<string,CaseFile>={
  witness:{title:'THE LAST SHIPMENT',source:'WITNESS NOTE / VESPER ROOFTOPS',body:'Shipment 09 was not carrying fossils. It was carrying things that were still breathing. Axiom moved the survivors below the city. Someone cut the power before I could follow.\n\nThe old precinct is still safe. Stairwell access: 2 - 4 - 1.\n\nIf you hear claws on the fire escape, leave the lights off.'},
  blackrain:{title:'THE BLACK RAIN CASE',source:'ELIAS VANE / PERSONAL ARCHIVE',body:'Five years ago, a raid on Axiom took my eye, my arm, and my partner, Mara Vale. The company called it a reactor accident. The police closed the case.\n\nTonight, a distress call came through on Mara’s old frequency. It led to the rooftops, and a shipment of creatures that should not exist.\n\nThe service lift behind this office reaches Axiom’s abandoned utility tunnels. I know the way down.'},
  arm:{title:'A BORROWED SECOND',source:'WORKBENCH / PROTOTYPE AX-09',body:'AX-09. The serial inside my mechanical arm matches Axiom’s prototype inventory. Its chronal capacitor lets me move between the pulses of a damaged timeline.\n\nThat is what instinct feels like: a borrowed second. It never lasts.\n\nSomeone rebuilt me with the same technology that opened the breach. I intend to find out why.\n\nThe R-09 transport line still accepts this arm’s control key. Look for a cyan saddle. A linked Strider can run, leap and fight while I fire from its back.'},
  lazarus:{title:'PROJECT LAZARUS',source:'AXIOM / RESTRICTED RESEARCH',body:'The temporal breach retrieves living prehistoric DNA. Axiom clones the specimens, modifies their aggression and grafts command hardware into their nervous systems.\n\nContainment failed when the first Crown-class organism severed its control tether. The broken tanks were not an accident.\n\nEmergency reactor access: 3 - 1 - 4.\n\nSeal the breach at the core. Do not allow another shipment to leave Vesper.'},
  reactor:{title:'THE OTHER SIDE',source:'REACTOR / EMERGENCY RECORD',body:'The aperture is no simulation. Beyond the containment ring lies a living prehistoric world. Spores and root systems have already crossed into the chamber.\n\nCrown Rex is feeding on the reactor discharge. The shutdown console will not respond while the organism is tethered to the core.\n\nDestroy the bio-weapon, then reach the console at the far end of the chamber.'},
  manifest:{title:'THE LAST CARGO',source:'BLACKWATER / MANIFEST 09',body:'The reactor is silent, but Axiom has already moved the project onto freight trains. Line 09 ends at a second breach.\n\nThere is a signature on the manifest: M. Vale. Mara is alive. And someone is forcing her to work.'},
  signal:{title:'A SIGNAL IN THE NOISE',source:'IRON EXPRESS / SERVICE RADIO',body:'Elias, if you receive this, cross the breach. I sabotaged the station collars, but the guardian is still linked to the network.\n\nI am not shipping the creatures. I am trying to send them home. — Mara'},
  mara:{title:'THE RETURN OF MARA',source:'CRETACEOUS OUTPOST / PERSONAL LOG',body:'Five years on the wrong side of time. Axiom kept me here to stabilize the breaches. Now I have copied every order, every experiment.\n\nTake down the guardian. The return gate leads to the transmission tower. I will meet you on channel 09.'},
  zero:{title:'PROTOCOL ZERO',source:'AXIOM TOWER / FINAL ORDER',body:'If the evidence leaves this tower, Axiom falls. Protocol Omega protects the transmitter with the final Crown specimen.\n\nMara has unlocked the public frequency. There is only one thing left to do: reach the top.'},
};
