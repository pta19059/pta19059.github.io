(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const uc=[],Fe=(s,e,t,i,n=4.2,a="concrete",r)=>uc.push({x:s,z:e,w:t,d:i,h:n,material:a,...r===void 0?{}:{y:r}});Fe(0,12.3,11,.6,4,"brick");Fe(-5.3,8,.6,8.6,4,"brick");Fe(5.3,8,.6,8.6,4,"brick");Fe(-3.4,4,3.8,.6,4,"brick");Fe(3.4,4,3.8,.6,4,"brick");Fe(0,4,3,.6,.8,"brick",3.2);Fe(-13.3,0,.6,8,6.5,"brick");Fe(-13.3,-13.5,.6,7,6.5,"brick");Fe(-13.3,-18.7,.6,3.4,6.5,"brick");Fe(-13.3,-4.6,.6,2.2,6.5,"brick");Fe(-13.3,-9.4,.6,2.2,6.5,"brick");Fe(-17.3,-7,.6,6.6,4,"brick");Fe(-15.2,-3.7,4.8,.6,4,"brick");Fe(-15.2,-10.3,4.8,.6,4,"brick");Fe(13.3,-8,.6,24,7.2,"brick");Fe(-9.5,4,7,.6,5.5,"brick");Fe(9.5,4,7,.6,5.5,"brick");Fe(-8,-20,12,.7,6,"metal");Fe(8,-20,12,.7,6,"metal");Fe(0,-20,4,.7,2.4,"metal",3.2);Fe(-7.3,-26,.6,12.6,4.5,"metal");Fe(7.3,-23,.6,6,4.5,"metal");Fe(7.3,-30.5,.6,3,4.5,"metal");Fe(7.3,-27.4,.6,3,1.5,"metal",3);Fe(11.2,-23.9,8.4,.6,4.5,"metal");Fe(15.3,-27.9,.6,8.6,4.5,"metal");Fe(11.2,-32.2,8.4,.6,4.5,"metal");Fe(-5.8,-32.2,8.6,.6,4.5,"metal");Fe(5.8,-32.2,8.6,.6,4.5,"metal");Fe(0,-32.2,3,.6,1.3,"metal",3.2);Fe(-10.3,-39.2,.6,14.6,4.5,"metal");Fe(10.3,-39.2,.6,14.6,4.5,"metal");Fe(-11,-46,.6,1.2,4.5,"metal");Fe(-10,-46,2,.6,4.5,"metal");Fe(2.8,-46,15.6,.6,4.5,"metal");Fe(-7,-46,4,.6,1.3,"metal",3.2);Fe(-11.3,-49,.6,6.6,4.5,"metal");Fe(-2.7,-49,.6,6.6,4.5,"metal");Fe(-7,-52.3,9.2,.6,4.5,"metal");Fe(-3.2,8,2.2,1.1,.85,"crate");Fe(3.8,10,1.2,2.2,1.5,"crate");Fe(-8,-4,2.4,1.4,1.1,"crate");Fe(-7,-10,2,3.6,1.1,"metal");Fe(3.8,-13,2.4,1.6,1.7,"crate");Fe(5,-14.5,1.6,1.5,1.1,"crate");Fe(-4.7,-18,2.4,1.3,1.3,"crate");Fe(4.5,-23.8,1.8,1.8,1.2,"crate");Fe(-4.4,-26.8,2.2,1.4,1.25,"metal");Fe(12,-25.9,3.3,1,1.1,"metal");Fe(-6.7,-34.5,2.2,1.5,1.2,"metal");Fe(5,-36,2.4,1.2,1.2,"metal");Fe(0,-40,3.5,1.4,1.1,"metal");Fe(-7.5,-42.8,1.3,2.4,1.5,"crate");const jn={walls:uc,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",ammoFor:"revolver",amount:24,x:2,z:6.7,label:"Revolver rounds"},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",ammoFor:"shotgun",amount:16,x:-10.5,z:-5.3,label:"Shotgun shells"},{id:"street-ammo2",kind:"ammo",ammoFor:"revolver",amount:24,x:5.8,z:-12,label:"Revolver rounds"},{id:"street-railgun",kind:"railgun",x:11.3,z:-14.2,label:"Rail Rifle"},{id:"street-rail-ammo",kind:"ammo",ammoFor:"railgun",amount:8,x:11,z:-15.6,label:"Rail slugs"},{id:"alley-rounds",kind:"ammo",ammoFor:"revolver",amount:18,x:-10.8,z:-11.6,label:"Revolver rounds"},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-cells",kind:"ammo",ammoFor:"plasma",amount:45,x:-15.6,z:-8.5,label:"Plasma cells"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",ammoFor:"machinegun",amount:60,x:5.8,z:-28.5,label:"Machine gun belt"},{id:"lobby-ammo2",kind:"ammo",ammoFor:"shotgun",amount:16,x:-5.7,z:-29.5,label:"Shotgun shells"},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",ammoFor:"machinegun",amount:80,x:10,z:-30.7,label:"Machine gun belt"},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-arc",kind:"arc",x:2.3,z:-33.8,label:"Arc Disruptor"},{id:"lab-railgun",kind:"railgun",x:-4.6,z:-33.7,label:"Rail Rifle"},{id:"lab-arc-cells",kind:"ammo",ammoFor:"arc",amount:16,x:2.2,z:-35.2,label:"Arc cells"},{id:"containment-arc-cells",kind:"ammo",ammoFor:"arc",amount:18,x:8.8,z:-41.3,label:"Arc cells"},{id:"containment-plasma",kind:"ammo",ammoFor:"plasma",amount:45,x:-8.4,z:-40.3,label:"Plasma cells"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",ammoFor:"plasma",amount:45,x:4.7,z:-34.5,label:"Plasma cells"},{id:"lab-ammo2",kind:"ammo",ammoFor:"railgun",amount:10,x:-8,z:-37,label:"Rail slugs"},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",ammoFor:"machinegun",amount:80,x:-5,z:-44.5,label:"Machine gun belt"},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],destructibles:[{id:"fuel-street-west",kind:"barrel",x:-8.8,z:-13.2,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-street-east",kind:"barrel",x:5.7,z:-16.8,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-security",kind:"barrel",x:4.8,z:-29.7,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-containment",kind:"barrel",x:.9,z:-43.5,y:0,w:.85,d:.85,h:1.35,health:30},{id:"glass-hotel",kind:"glass",x:-12.66,z:-1.7,y:1.12,w:.14,d:3.2,h:2.2,health:1},{id:"glass-eden",kind:"glass",x:12.66,z:-4.5,y:1.12,w:.14,d:3.2,h:2.2,health:1}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};class Cn{constructor(e,t){this.prefix=e,this.bounds=t}walls=[];doors=[];enemies=[];pickups=[];props=[];destructibles=[];hazards=[];waves=[];serial=0;wall(e,t,i,n,a=4.2,r="metal",o){this.walls.push({x:e,z:t,w:i,d:n,h:a,material:r,...o===void 0?{}:{y:o}})}outer(e=4.2,t="metal",i=e){const n=this.bounds;this.wall((n.minX+n.maxX)/2,n.minZ+.3,n.maxX-n.minX,.6,e,t),this.wall((n.minX+n.maxX)/2,n.maxZ-.3,n.maxX-n.minX,.6,e,t),this.wall(n.minX+.3,(n.minZ+n.maxZ)/2,.6,n.maxZ-n.minZ,i,t),this.wall(n.maxX-.3,(n.minZ+n.maxZ)/2,.6,n.maxZ-n.minZ,i,t)}cross(e,t,i,n,a={},r=3.8,o=this.bounds.minX,l=this.bounds.maxX,c=4.2,h="metal"){const d=t-r/2,f=t+r/2;d>o&&this.wall((d+o)/2,e,d-o,.6,c,h),f<l&&this.wall((f+l)/2,e,l-f,.6,c,h),this.wall(t,e,r,.6,Math.max(.6,c-3.25),h,3.25),this.doors.push({id:i,x:t,z:e,w:r,d:.5,label:n,...a})}side(e,t,i,n,a={},r=3.2,o,l,c=4.2,h="metal"){const d=t-r/2,f=t+r/2;d>o&&this.wall(e,(d+o)/2,.6,d-o,c,h),f<l&&this.wall(e,(f+l)/2,.6,l-f,c,h),this.wall(e,t,.6,r,Math.max(.6,c-3.25),h,3.25),this.doors.push({id:i,x:e,z:t,w:.5,d:r,label:n,...a})}cover(e,t,i,n,a=1.3,r="crate"){this.wall(e,t,i,n,a,r)}prop(e,t,i,n,a){this.props.push({kind:e,x:t,z:i,...n?{label:n}:{},...a===void 0?{}:{rotation:a}})}item(e,t,i,n,a={}){this.pickups.push({id:`${this.prefix}-p${++this.serial}`,kind:e,x:t,z:i,...n?{label:n}:{},...a})}ammo(e,t,i,n){this.item("ammo",t,i,`${e.toUpperCase()} AMMUNITION`,{ammoFor:e,amount:n})}evidence(e,t,i,n){this.item("evidence",t,i,n,{evidenceId:e})}group(e,t="patrol"){e.forEach(([i,n,a],r)=>this.enemies.push({id:`${this.prefix}-${t}-${r+1}`,kind:i,x:n,z:a}))}wave(e,t,i,n){this.waves.push({id:`${this.prefix}-${e}`,trigger:t,radius:i,enemies:n.map(([a,r,o],l)=>({id:`${this.prefix}-${e}-${l+1}`,kind:a,x:r,z:o}))})}boss(e,t,i,n,a){const r={crown:"CROWN REX",ironjaw:"IRON JAW",guardian:"ROOT CROWN",omega:"OMEGA"};this.enemies.push({id:e,kind:"brute",boss:t,x:i,z:n,health:a,label:r[t]})}barrel(e,t,i){this.destructibles.push({id:`${this.prefix}-${e}`,kind:"barrel",x:t,z:i,y:0,w:.85,d:.85,h:1.35,health:30})}finish(e){for(const i of this.props)i.kind==="tank"&&this.cover(i.x,i.z,1.4,1.4,3.4,"metal");const t=[...this.enemies,...this.waves.flatMap(i=>i.enemies)];return{...e,bounds:this.bounds,walls:this.walls,doors:this.doors,enemies:this.enemies,pickups:this.pickups,props:this.props,destructibles:this.destructibles,hazards:this.hazards,waves:this.waves,requiredKills:t.map(i=>i.id)}}}function vh(){const s=new Cn("09",{minX:-18,maxX:18,minZ:-30,maxZ:8});return s.outer(4.2,"brick"),s.cross(-4,0,"precinct","OLD PRECINCT / ROOM 09",{},3.8,void 0,void 0,4.2,"brick"),s.side(-4,-10,"archive","ELIAS / PERSONAL ARCHIVE",{},3.2,-18,-4,4.2,"brick"),s.side(4,-10,"workshop","AX-09 / WORKSHOP",{},3.2,-18,-4,4.2,"brick"),s.cross(-18,0,"service","SERVICE CORRIDOR / B6",{},3.8,void 0,void 0,4.2,"brick"),s.wall(-14,-23,8,.6,4.2,"brick"),s.side(-10,-26,"secret","PRECINCT EVIDENCE LOCKER",{secret:!0},3,-30,-18,4.2,"brick"),s.cover(-12,-8,3.6,1.6,.92),s.cover(12,-8,3.6,1.6,.92),s.cover(-12,-15,4.2,1,1.05),s.cover(12,-15,4.2,1,1.05),s.cover(-12,3,3.6,1.8,1),s.cover(12,3,3.6,1.8,1),s.evidence("blackrain",-10.4,-12.5,"THE BLACK RAIN CASE"),s.evidence("arm",10.4,-12.5,"A BORROWED SECOND / AX-09"),s.item("revolver",-2,1,"Detective Revolver"),s.item("shotgun",12,-13,"Tactical Shotgun"),s.item("health",-1,2),s.item("armor",2,2),s.ammo("revolver",-2,-1,36),s.ammo("shotgun",11,-10.2,24),s.ammo("machinegun",-14,-26,100),s.item("armor",-14,-27.4),s.ammo("plasma",-15.5,-25.5,60),s.prop("office-sign",0,7.28,"SAFEHOUSE 09 / OLD PRECINCT"),s.prop("portrait",-7,7.28,"ELIAS VANE"),s.prop("office-board",-17.28,-12,"THE BLACK RAIN CASE",Math.PI/2),s.prop("terminal",-12,-8),s.prop("chair",-12,-6.5),s.prop("bottles",-12.8,-8),s.prop("terminal",12,-8),s.prop("chair",12,-6.5),s.prop("locker",16.5,-14),s.prop("locker",16.5,-15),s.prop("sign",-3.6,-7,"ARCHIVE ←"),s.prop("sign",3.6,-7,"→ WORKSHOP"),s.prop("sign",0,-17.58,"SERVICE LIFT / SUBLEVEL B6"),s.prop("power",12,-22,"SERVICE LIFT POWER"),s.prop("checkpoint",0,-20.5,"SAFEHOUSE CHECKPOINT"),s.prop("exit",12,-26,"DESCEND TO B6"),s.finish({chapterId:1,title:"SAFEHOUSE 09",subtitle:"OLD PRECINCT / ROOM 09",theme:"safehouse",safe:!0,requiredEvidence:2,intro:"One good eye. Too many ghosts. The old precinct is still safe. Examine the Black Rain archive and the serial number inside your mechanical arm before descending to Axiom.",objective:"EXAMINE BOTH CASE FILES / POWER THE SERVICE LIFT",exitLabel:"DESCEND TO B6",completionMessage:"AX-09 belongs to Axiom. Mara’s signal leads below the city. Elias takes the service lift to sublevel B6.",spawn:{x:0,z:3},checkpoint:{x:0,z:-20.5},switch:{x:12,z:-22},exit:{x:12,z:-26},mount:{x:-100,z:100},mountBounds:{minX:-101,maxX:-99,minZ:99,maxZ:101},defaultLoadout:["revolver","shotgun"]})}function _h(){const s=new Cn("b6",{minX:-28,maxX:28,minZ:-74,maxZ:10});s.outer(4.5),s.cross(-4,0,"b6-entry","AXIOM / SUBLEVEL B6"),s.side(-9,-20,"specimens","SPECIMEN ARCHIVE",{},3.8,-38,-4,4.5),s.side(9,-20,"security","B6 SECURITY CONTROL",{},3.8,-38,-4,4.5),s.cross(-38,0,"containment","CONTAINMENT / SECURITY KEY",{locked:!0},4.2,void 0,void 0,4.5),s.cross(-64,0,"core-access","REACTOR ACCESS",{},4.2,void 0,void 0,4.5),s.side(-23,-53,"secret","COLD STORAGE / 314",{secret:!0},2.8,-64,-38,4.5),s.cover(-2,-14,3.8,1.8,1.25,"metal"),s.cover(4,-29,3.8,1.8,1.25,"metal");for(const e of[-20,-14])for(const t of[-12,-31])s.cover(e,t,2.4,2.4,1.8,"metal");s.cover(20,-12,6.2,1.4,1.2,"metal"),s.cover(20,-33,6.2,1.4,1.2,"metal");for(const e of[-13,13])for(const t of[-46,-58])s.cover(e,t,4.6,2,1.5,"metal");s.cover(0,-53,5,2.3,1.15,"metal"),s.group([["soldier",-3,-19],["soldier",4,-24],["mutant",-5,-31],["raptor",-18,-18],["raptor",-13,-25],["mutant",-23,-28],["soldier",-15,-35],["soldier",16,-19],["soldier",23,-25],["soldier",16,-30],["mutant",24,-35],["raptor",-7,-43],["raptor",7,-46],["mutant",-18,-52],["soldier",17,-52],["soldier",-8,-60],["mutant",9,-61],["brute",0,-59],["soldier",-8,-69],["soldier",8,-69]]),s.wave("containment-release",{x:0,z:-44},8,[["raptor",-6,-50],["raptor",6,-52],["mutant",-5,-57],["soldier",7,-57]]),s.item("machinegun",2,3,"Heavy Machine Gun"),s.ammo("machinegun",-2,3,100),s.ammo("shotgun",3,0,24),s.item("armor",-3,0),s.evidence("lazarus",-18,-27,"PROJECT LAZARUS / CONTAINMENT 314"),s.item("keycard",19,-28,"B6 CONTAINMENT KEYCARD"),s.item("plasma",21,-30,"Plasma Rifle"),s.ammo("plasma",23,-29,80),s.ammo("machinegun",15,-24,100),s.item("health",25,-32),s.ammo("shotgun",-21,-22,28),s.item("health",-25,-33),s.item("armor",-13,-35),s.ammo("machinegun",-18,-43,120),s.ammo("plasma",18,-43,80),s.item("health",19,-58),s.item("health",-19,-60),s.ammo("revolver",8,-55,48),s.ammo("shotgun",-8,-55,28),s.item("armor",-25,-60),s.ammo("plasma",-25,-56,100),s.item("health",6,-67),s.ammo("machinegun",-6,-67,120),s.barrel("security-fuel",22,-21),s.barrel("containment-fuel",-17,-48),s.barrel("core-fuel",15,-61),s.hazards.push({x:18,z:-48,w:3,d:4},{x:-17,z:-56,w:2.5,d:3}),s.prop("facility-sign",0,-3.6,"AXIOM / RESEARCH WING"),s.prop("sign",0,-37.6,"PROJECT LAZARUS / 314");for(const e of[-26,26])for(const t of[-15,-29,-44,-58])s.prop("tank",e,t);return s.prop("console",-2,-14),s.prop("lab-table",0,-53),s.prop("terminal",20,-33),s.prop("locker",26,-26),s.prop("locker",26,-27.5),s.prop("corpse",-21,-24),s.prop("skeleton",-10,-56),s.prop("pipe",-26.8,-50),s.prop("pipe",26.8,-50),s.prop("checkpoint",0,-40.5,"CONTAINMENT CHECKPOINT"),s.prop("power",6,-68,"REACTOR LIFT POWER"),s.prop("exit",0,-69,"REACTOR ACCESS"),s.finish({chapterId:2,title:"AXIOM RESEARCH WING",subtitle:"AXIOM / SUBLEVEL B6",theme:"research",intro:"They did not find fossils. They made weapons. Retrieve the Lazarus record in the specimen archive and take the containment key from security. The broken tanks were no accident.",objective:"RECOVER LAZARUS DATA / UNLOCK THE CORE",exitLabel:"REACTOR ACCESS",completionMessage:"The living specimens came through a temporal breach. Containment is clear. The reactor is next.",spawn:{x:0,z:5},checkpoint:{x:0,z:-40.5},switch:{x:6,z:-68},exit:{x:0,z:-69},mount:{x:-5,z:1},mountBounds:{minX:-7,maxX:7,minZ:-35,maxZ:6},defaultLoadout:["revolver","shotgun","machinegun"]})}function Mh(){const s=new Cn("rift",{minX:-36,maxX:36,minZ:-82,maxZ:12});s.outer(6),s.cross(-6,0,"reactor-entry","CHRONAL REACTOR / GROUND ZERO",{},4.2,void 0,void 0,6),s.cross(-26,0,"reactor-seal","CORE ACCESS / EMERGENCY KEY",{locked:!0},5,void 0,void 0,6),s.cross(-68,24,"exhaust-gate","BLACKWATER SERVICE TUNNEL",{},4.2,void 0,void 0,6),s.side(-29,-48,"secret","REACTOR MAINTENANCE 09",{secret:!0},3,-68,-26,6),s.cover(-13,-14,6,2.8,1.4,"metal"),s.cover(13,-20,6,2.8,1.4,"metal"),s.cover(-24,-21,4,2.3,1.7,"metal"),s.cover(25,-12,4,2.3,1.7,"metal"),s.cover(0,-43,8.5,8.5,2.65,"metal");for(const e of[-15,15])for(const t of[-36,-53,-63])s.cover(e,t,4.6,2.3,1.4,"metal");s.cover(-24,-40,2.3,5,1.6,"metal"),s.cover(24,-56,2.3,5,1.6,"metal"),s.group([["soldier",-20,-16],["soldier",18,-14],["mutant",-5,-22],["raptor",8,-20],["soldier",28,-20],["raptor",-8,-32],["raptor",9,-34],["mutant",-23,-35],["soldier",24,-34],["soldier",-22,-56],["mutant",24,-63],["raptor",-7,-61],["raptor",8,-62],["mutant",-22,-63],["soldier",28,-47],["soldier",21,-75],["mutant",29,-76]]),s.boss("crown-rex","crown",0,-56,1250),s.wave("core-overload",{x:0,z:-32},10,[["raptor",-8,-52],["raptor",8,-53],["mutant",-23,-48],["soldier",23,-44]]),s.item("plasma",2,7,"Plasma Rifle"),s.ammo("plasma",-2,7,100),s.ammo("machinegun",4,3,140),s.item("health",-4,3),s.item("armor",5,5),s.evidence("reactor",-27,-14,"THE OTHER SIDE / EMERGENCY RECORD"),s.item("keycard",27,-17,"REACTOR EMERGENCY KEY"),s.item("railgun",25,-23,"Chronal Railgun"),s.ammo("railgun",23,-23,20),s.ammo("shotgun",-20,-23,32),s.item("health",-29,-23),s.ammo("plasma",-25,-31,100),s.ammo("machinegun",25,-31,160),s.item("armor",25,-37),s.ammo("railgun",-26,-58,24),s.ammo("plasma",26,-60,100),s.ammo("machinegun",-20,-66,160),s.item("health",-25,-65),s.item("health",25,-65),s.item("armor",-32,-57),s.ammo("railgun",-32,-53,30),s.item("health",-32,-45),s.ammo("shotgun",9,-49.5,32),s.item("health",29,-72),s.ammo("plasma",17,-74,80),s.barrel("west-fuel",-24,-31),s.barrel("east-fuel",24,-40),s.barrel("north-fuel",9,-65),s.hazards.push({x:-10,z:-45,w:3,d:6},{x:10,z:-45,w:3,d:6},{x:0,z:-65,w:7,d:2}),s.prop("sign",0,-5.6,"THE FRACTURE / REACTOR 01"),s.prop("warning",0,-26.4,"CROWN-CLASS ORGANISM / TETHER ACTIVE"),s.prop("console",13,-20),s.prop("tank",-33,-36),s.prop("tank",33,-54),s.prop("skeleton",20,-49),s.prop("corpse",-24,-16);for(const e of[-34,34])for(const t of[-38,-59])s.prop("pipe",e,t);return s.prop("checkpoint",0,-28.5,"CORE CHECKPOINT"),s.prop("power",24,-72,"SEAL THE TEMPORAL BREACH"),s.prop("exit",24,-77,"TO THE DOCKS"),s.finish({chapterId:3,title:"THE FRACTURE",subtitle:"CHRONAL REACTOR / GROUND ZERO",theme:"reactor",intro:"Sixty-six million years. One trigger away. Crown Rex feeds on the reactor discharge. Destroy the Crown-class organism, clear its escaped specimens and shut down the aperture.",objective:"BRING DOWN CROWN REX / SEAL THE BREACH",exitLabel:"TO THE DOCKS",completionMessage:"Crown Rex falls and the first breach closes. Axiom has already moved another shipment to Blackwater harbour.",spawn:{x:0,z:7},checkpoint:{x:0,z:-28.5},switch:{x:24,z:-72},exit:{x:24,z:-77},mount:{x:-22,z:-10},mountBounds:{minX:-28,maxX:28,minZ:-67,maxZ:-7},defaultLoadout:["revolver","shotgun","machinegun","plasma"]})}function Sh(){const s=new Cn("port",{minX:-44,maxX:44,minZ:-90,maxZ:14});s.outer(4.8,"concrete",1.2),s.cross(-2,-29,"warehouse","BLACKWATER / MANIFEST 09",{},5,void 0,void 0,4.8,"concrete"),s.cross(-58,0,"freight-yard","LINE 09 / CARGO KEY",{locked:!0},5,void 0,void 0,4.8),s.wall(32.5,-12,15,.6),s.wall(32.5,-30,15,.6),s.wall(40,-21,.6,18),s.side(25,-20,"harbour-office","HARBOURMASTER / SECURITY",{},3.5,-30,-12),s.wall(-35,-77,.6,24,4.8,"concrete"),s.side(-35,-76,"secret","SMUGGLER CACHE",{secret:!0},3,-89,-65,4.8,"concrete");for(const[e,t,i,n]of[[-29,5,7,3],[2,7,9,4],[23,5,9,3],[-27,-20,8,12],[-10,-22,8,12],[10,-23,8,14],[-28,-43,8,12],[-10,-42,8,12],[10,-43,8,12],[30,-44,8,12],[-22,-73,9,5],[13,-73,9,5]])s.cover(e,t,i,n,2.8,"crate");s.cover(32,-26,5,1.4,1.1,"metal"),s.cover(30,-66,4,2,1.4,"metal"),s.group([["raptor",-34,-16],["raptor",-19,-24],["soldier",-3,-15],["soldier",19,-20],["mutant",-20,-34],["raptor",-2,-31],["soldier",31,-18],["soldier",35,-27],["raptor",20,-35],["soldier",-36,-37],["mutant",-20,-47],["soldier",-2,-47],["raptor",20,-48],["brute",36,-52],["soldier",-25,-61],["raptor",-8,-64],["raptor",10,-63],["mutant",25,-60],["soldier",35,-75],["mutant",3,-79],["soldier",-26,-84]]),s.wave("last-shipment",{x:0,z:-61},10,[["raptor",-8,-74],["raptor",7,-82],["soldier",25,-81],["mutant",20,-84]]),s.item("railgun",-25,8,"Chronal Railgun"),s.ammo("railgun",-23,7,24),s.item("armor",-34,9),s.ammo("machinegun",-24,3,160),s.item("health",-34,2),s.item("arc",31,-23,"Storm Arc Cannon"),s.ammo("arc",34,-24,48),s.item("keycard",36,-24,"LINE 09 FREIGHT KEY"),s.evidence("manifest",28,-27,"THE LAST CARGO / M. VALE"),s.ammo("shotgun",-37,-29,36),s.item("health",-19,-30),s.ammo("plasma",20,-29,120),s.ammo("machinegun",-3,-37,160),s.item("armor",36,-34),s.ammo("railgun",-36,-50,30),s.item("health",-20,-54),s.ammo("arc",20,-54,48),s.item("health",38,-55),s.ammo("plasma",-29,-64,140),s.ammo("machinegun",17,-63,180),s.item("armor",29,-70),s.ammo("arc",-40,-74,60),s.item("health",-40,-80),s.ammo("railgun",-10,-82,30),s.item("health",19,-85),s.ammo("shotgun",34,-84,40);for(const[e,t,i]of[["west-fuel",-18,-20],["central-fuel",-1,-27],["east-fuel",20,-40],["loading-fuel",26,-76]])s.barrel(e,t,i);s.hazards.push({x:-1,z:-53,w:6,d:2},{x:38,z:-68,w:3,d:9}),s.prop("facility-sign",-29,-1.6,"BLACKWATER HARBOUR"),s.prop("sign",0,-57.6,"LINE 09 / AXIOM CONVOY"),s.prop("sign",25.4,-17,"HARBOUR OFFICE",Math.PI/2),s.prop("terminal",32,-26),s.prop("chair",33,-24.5),s.prop("corpse",-19,-37),s.prop("rubble",37,-37),s.prop("drain",-20,-57);for(const e of[-40,40])for(const t of[-9,-35,-56,-83])s.prop("lamp",e,t);return s.prop("checkpoint",0,-60.5,"FREIGHT YARD CHECKPOINT"),s.prop("power",28,-80,"TRAIN LOADING BRIDGE"),s.prop("exit",28,-85,"LAST TRAIN"),s.finish({chapterId:4,title:"BLACKWATER DOCKS",subtitle:"VESPER / BLACKWATER HARBOUR",theme:"docks",intro:"The reactor was only the first shipment. Mara is transmitting from the harbour. Search the harbourmaster’s office, stop the creatures in the loading yard and board Line 09.",objective:"STOP THE SHIPMENT / BOARD THE TRAIN",exitLabel:"LAST TRAIN",completionMessage:"M. Vale signed the manifest. Mara is alive, and someone is forcing her to work. The freight line leads to a second breach.",spawn:{x:-29,z:9},checkpoint:{x:0,z:-60.5},switch:{x:28,z:-80},exit:{x:28,z:-85},mount:{x:-38,z:-8},mountBounds:{minX:-41,maxX:41,minZ:-87,maxZ:-3},defaultLoadout:["revolver","shotgun","machinegun","plasma","railgun"]})}function bh(){const s=new Cn("line",{minX:-9,maxX:9,minZ:-139,maxZ:9});s.wall(0,8.7,18,.6,4.5),s.wall(0,-138.7,18,.6,4.5);for(const e of[-8.6,8.6]){s.wall(e,-65,.6,148,1.1),s.wall(e,-65,.6,148,1.05,"metal",3.1);for(let t=6;t>-138;t-=6)s.wall(e,t,.6,.45,4.2)}for(const[e,t,i,n]of[[-17,"carriage-2","CAR 02 / PASSENGER SECURITY",!1],[-42,"carriage-3","CAR 03 / SPECIMEN FREIGHT",!1],[-67,"carriage-4","CAR 04 / CONVOY KEY",!0],[-92,"engine","CAR 05 / IRON JAW",!1]])s.cross(e,0,t,i,{locked:n},3.8,-8.6,8.6,4.2);s.side(-4,-33,"secret","SERVICE ARMOURY",{secret:!0},2.8,-40,-25,4.2),s.wall(-6.3,-25,4.6,.6),s.wall(-6.3,-40,4.6,.6);for(const[e,t,i,n]of[[-6,-6,2.4,8],[6,-6,2.4,8],[6,-29,2.5,10],[-6,-53,2.5,10],[6,-57,2.5,4],[-6,-80,2.5,9],[6,-79,2.5,9],[-5,-107,2.5,5],[5,-119,2.5,5]])s.cover(e,t,i,n,1.35,"metal");s.cover(0,-72,2.3,1.5,1.1,"crate"),s.cover(-2.6,-126,2.2,1.8,1.1,"metal"),s.group([["soldier",-2,-22],["soldier",3,-25],["raptor",0,-30],["mutant",2,-37],["raptor",-1,-47],["soldier",4,-48],["mutant",-2,-57],["soldier",3,-62],["raptor",-3,-64],["soldier",-3,-70],["raptor",3,-73],["mutant",0,-81],["soldier",-2,-88],["raptor",3,-87],["soldier",-5,-97],["soldier",5,-102],["raptor",0,-105],["mutant",4,-109],["raptor",-3,-121],["soldier",4,-129]]),s.boss("iron-jaw","ironjaw",-1,-116,1550),s.wave("engine-defense",{x:0,z:-96},7,[["raptor",-3,-112],["raptor",4,-116],["soldier",-4,-124]]),s.item("arc",1,4,"Storm Arc Cannon"),s.ammo("arc",-1,4,60),s.ammo("machinegun",2,0,180),s.item("health",-2,0),s.item("armor",-3,5),s.ammo("shotgun",-2,-13,40),s.ammo("plasma",4,-19,140),s.item("health",-3,-38),s.ammo("railgun",-2,-39,32),s.ammo("arc",-6,-34,64),s.item("armor",-6,-37),s.item("keycard",4,-54,"LINE 09 ENGINE KEY"),s.ammo("machinegun",3,-52,200),s.ammo("shotgun",-3,-62,36),s.item("health",4,-64),s.evidence("signal",4,-82,"A SIGNAL IN THE NOISE / MARA"),s.ammo("plasma",3,-74,140),s.item("armor",-3,-85),s.ammo("railgun",4,-89,40),s.ammo("arc",-4,-99,70),s.item("health",4,-99),s.ammo("machinegun",-4,-120,220),s.item("health",5,-125),s.ammo("railgun",-4,-131,32),s.barrel("car-three-fuel",6,-47),s.barrel("engine-fuel",6,-111),s.barrel("engine-fuel-west",-6,-117),s.prop("sign",0,8.25,"IRON EXPRESS / LINE 09"),s.prop("sign",0,-91.6,"ARMOURED BEAST / ENGINE");for(const e of[-9,-32,-55,-79,-104])s.prop("terminal",7.8,e),s.prop("locker",-7.8,e);return s.prop("corpse",3,-44),s.prop("tank",-7.5,-49),s.prop("tank",7.5,-60),s.prop("pipe",-7.8,-114),s.prop("checkpoint",0,-69.5,"CONVOY CHECKPOINT"),s.prop("power",4,-131,"RIFT GATE COLLAR"),s.prop("exit",0,-134,"RIFT GATE"),s.finish({chapterId:5,title:"IRON EXPRESS",subtitle:"LINE 09 / AXIOM CONVOY",theme:"train",intro:"Next stop: no return. The convoy is racing toward another breach. Fight through five connected carriages, hear Mara’s service-radio message and destroy Iron Jaw before the tunnel.",objective:"CROSS THE TRAIN / DESTROY IRON JAW",exitLabel:"RIFT GATE",completionMessage:"Iron Jaw is scrap. Mara sabotaged the station collars. She is trying to send the creatures home. Elias crosses the second breach.",spawn:{x:0,z:4},checkpoint:{x:0,z:-69.5},switch:{x:4,z:-131},exit:{x:0,z:-134},mount:{x:-100,z:100},mountBounds:{minX:-101,maxX:-99,minZ:99,maxZ:101},defaultLoadout:["revolver","shotgun","machinegun","plasma","railgun","arc"]})}function yh(){const s=new Cn("canopy",{minX:-50,maxX:50,minZ:-98,maxZ:14});s.outer(4.4,"concrete"),s.cross(-10,0,"outpost-entry","BREACH 02 / CRETACEOUS OUTPOST",{},6,void 0,void 0,4.4,"concrete"),s.cross(-52,0,"temple","LOST TEMPLE / OUTPOST KEY",{locked:!0},6,void 0,void 0,4.8,"concrete"),s.cross(-88,0,"return-gate","RETURN TO 2091",{},5,void 0,void 0,4.8,"concrete");for(const e of[-20,-42])s.wall(-32,e,24,.7,4.2,"concrete"),s.wall(31,e,26,.7,4.2,"metal");s.wall(-44,-31,.7,22,4.2,"concrete"),s.wall(44,-31,.7,22,4.2),s.side(-20,-30,"temple-archive","MARA / FIELD ARCHIVE",{},4,-42,-20,4.2,"concrete"),s.side(18,-30,"outpost","AXIOM / RESEARCH OUTPOST",{},4,-42,-20,4.2),s.wall(-39.5,-67,11,.7,4.8,"concrete"),s.wall(-39.5,-84,11,.7,4.8,"concrete"),s.wall(-45,-75.5,.7,17,4.8,"concrete"),s.side(-34,-75,"secret","THE FIRST TEMPLE",{secret:!0},3.2,-84,-67,4.8,"concrete");for(const[e,t,i,n]of[[-13,-4,3,3],[18,1,4,3],[-35,-14,4,4],[34,-14,4,4],[-8,-28,3,7],[8,-40,3,6],[-30,-47,5,3],[29,-47,5,3],[-29,-59,4,4],[29,-59,4,4],[-14,-64,3,3],[14,-64,3,3],[-24,-80,3,3],[24,-80,3,3],[-8,-84,3,3],[8,-84,3,3]])s.cover(e,t,i,n,2.2,"concrete");return s.cover(-34,-24,6,1.5,1.1,"concrete"),s.cover(32,-24,6,1.5,1.1,"metal"),s.group([["raptor",-17,-16],["raptor",17,-18],["mutant",-4,-23],["raptor",6,-32],["mutant",-34,-28],["raptor",-28,-36],["soldier",26,-28],["soldier",37,-34],["raptor",-35,-46],["mutant",-15,-43],["soldier",15,-44],["raptor",35,-47],["raptor",-8,-57],["mutant",10,-59],["raptor",-23,-65],["soldier",24,-67],["mutant",-18,-78],["raptor",19,-81],["soldier",-6,-93],["soldier",7,-93]]),s.boss("root-crown","guardian",0,-78,1800),s.wave("guardian-roots",{x:0,z:-56},9,[["raptor",-8,-69],["raptor",8,-71],["mutant",29,-75],["mutant",-27,-62]]),s.item("shotgun",2,8,"Tactical Shotgun"),s.ammo("shotgun",-2,8,40),s.item("health",-4,3),s.item("armor",4,3),s.ammo("plasma",3,-3,140),s.evidence("mara",-34,-33,"THE RETURN OF MARA / PERSONAL LOG"),s.item("keycard",33,-33,"CRETACEOUS OUTPOST KEY"),s.item("railgun",-32,-37,"Chronal Railgun"),s.ammo("railgun",-38,-37,40),s.item("health",-39,-28),s.item("armor",40,-37),s.ammo("arc",38,-28,70),s.ammo("machinegun",-16,-36,200),s.ammo("plasma",16,-36,140),s.item("health",-36,-50),s.item("health",36,-50),s.ammo("shotgun",0,-46,44),s.ammo("railgun",-22,-57,40),s.ammo("arc",22,-57,70),s.item("health",-28,-75),s.item("health",28,-83),s.item("armor",-39,-80),s.ammo("arc",-40,-72,80),s.ammo("plasma",-8,-82,160),s.ammo("machinegun",8,-86,220),s.item("health",14,-92),s.barrel("outpost-fuel",40,-24),s.barrel("broken-collar",22,-74),s.barrel("temple-collar",-22,-70),s.hazards.push({x:-5,z:-61,w:3,d:6},{x:5,z:-73,w:3,d:6},{x:38,z:-61,w:5,d:5}),s.prop("sign",0,-9.5,"THE LOST CANOPY / BREACH 02"),s.prop("sign",18.4,-27,"STRANDED RESEARCH OUTPOST",Math.PI/2),s.prop("sign",0,-51.5,"THE PAST HAS TAKEN ROOT"),s.prop("lab-table",32,-24),s.prop("terminal",32,-24),s.prop("tank",42,-39),s.prop("skeleton",-33,-36),s.prop("skeleton",-30,-63),s.prop("rubble",-38,-18),s.prop("rubble",38,-46),s.prop("corpse",30,-31),s.prop("warning",0,-84,"BREACH GUARDIAN / ROOT CROWN"),s.prop("checkpoint",0,-54.5,"TEMPLE CHECKPOINT"),s.prop("power",10,-92,"RETURN GATE / CHANNEL 09"),s.prop("exit",0,-93,"RETURN TO 2091"),s.finish({chapterId:6,title:"THE LOST CANOPY",subtitle:"BREACH 02 / THE LOST TEMPLE",theme:"jungle",intro:"The past has taken root. A living prehistoric jungle has swallowed the Axiom outpost and ancient sandstone ruins. Find Mara’s log, break the guardian’s control network and open the return gate.",objective:"FIND MARA / DEFEAT THE GUARDIAN",exitLabel:"RETURN TO 2091",completionMessage:"Root Crown falls. Mara has copied the orders and experiments. The return gate leads to Axiom’s transmission tower. Channel 09 is still open.",spawn:{x:0,z:8},checkpoint:{x:0,z:-54.5},switch:{x:10,z:-92},exit:{x:0,z:-93},mount:{x:12,z:4},mountBounds:{minX:-46,maxX:46,minZ:-95,maxZ:11},defaultLoadout:["revolver","shotgun","machinegun","plasma","railgun","arc"]})}function Eh(){const s=new Cn("zero",{minX:-32,maxX:32,minZ:-104,maxZ:10});s.outer(4.8),s.cross(-18,18,"tower-lobby","F01 / CORPORATE SECURITY",{},4.2,void 0,void 0,4.8),s.cross(-42,-18,"tower-archive","F02 / PROTOCOL ZERO KEY",{locked:!0},4.2,void 0,void 0,4.8),s.cross(-66,18,"tower-transmission","F03 / TRANSMISSION CONTROL",{},4.2,void 0,void 0,4.8),s.cross(-86,0,"omega","F04 / FINAL PROTOCOL",{locked:!0},5,void 0,void 0,4.8),s.side(-23,-54,"secret","AXIOM / CLASSIFIED ARMOURY",{secret:!0},3,-65,-43,4.8),s.cover(-19,-4,6,2,1.2,"metal"),s.cover(8,-8,6,2,1.2,"metal"),s.cover(23,-5,4,2,1.2,"metal");for(const[e,t,i,n]of[[-11,-27,5,2],[11,-33,5,2],[-24,-29,2,5],[24,-30,2,5],[-13,-48,4,3],[10,-53,4,3],[-2,-59,4,2],[25,-60,2,5],[-12,-74,4,2],[12,-78,4,2],[-24,-80,2,4],[24,-71,2,4],[-14,-93,3,3],[14,-94,3,3]])s.cover(e,t,i,n,1.55,"metal");s.group([["soldier",16,-11],["soldier",26,-14],["soldier",15,-25],["mutant",0,-25],["raptor",-20,-23],["soldier",-25,-37],["soldier",4,-37],["mutant",23,-37],["soldier",-16,-46],["raptor",-7,-49],["brute",3,-46],["mutant",16,-49],["soldier",-14,-61],["raptor",9,-62],["soldier",21,-74],["mutant",-19,-72],["soldier",0,-81],["raptor",-6,-75],["brute",-25,-84],["soldier",-24,-95],["soldier",25,-92],["mutant",-7,-99]]),s.boss("omega-final","omega",0,-95,2400),s.wave("protocol-omega",{x:0,z:-89},8,[["raptor",-9,-91],["raptor",9,-91],["mutant",21,-98],["soldier",-20,-99]]),s.item("arc",-15,5,"Storm Arc Cannon"),s.ammo("arc",-13,5,80),s.item("armor",-22,4),s.item("health",-22,2),s.ammo("machinegun",-15,1,220),s.ammo("railgun",-11,1,40),s.item("keycard",25,-27,"PROTOCOL ZERO / TRANSMITTER KEY"),s.evidence("zero",23,-35,"PROTOCOL ZERO / FINAL ORDER"),s.ammo("plasma",26,-39,180),s.item("health",-27,-26),s.ammo("shotgun",-20,-38,44),s.item("armor",20,-23),s.ammo("machinegun",-19,-46,220),s.item("health",19,-45),s.ammo("railgun",-27,-60,50),s.item("armor",-27,-56),s.ammo("arc",-27,-50,90),s.ammo("plasma",23,-64,180),s.item("health",-19,-63),s.ammo("arc",26,-79,90),s.ammo("railgun",-19,-82,50),s.item("health",-27,-77),s.ammo("machinegun",-20,-89,240),s.ammo("plasma",20,-89,200),s.item("health",27,-99),s.item("health",-27,-101),s.ammo("arc",11,-100,100),s.ammo("railgun",-10,-101,50),s.barrel("security-fuel",21,-35),s.barrel("archive-fuel",6,-57),s.barrel("transmission-fuel",-8,-79),s.barrel("omega-fuel",19,-97),s.hazards.push({x:-3,z:-54,w:2.5,d:4},{x:5,z:-95,w:2.3,d:4}),s.prop("facility-sign",0,9.3,"AXIOM ZERO / TRANSMISSION TOWER"),s.prop("sign",18,-17.5,"F01 / CORPORATE SECURITY"),s.prop("sign",-18,-41.5,"F02 / BLACK RAIN ARCHIVE"),s.prop("sign",18,-65.5,"F03 / PUBLIC FREQUENCY"),s.prop("sign",0,-85.5,"OMEGA / FINAL PROTOCOL");for(const[e,t]of[[-11,-27],[11,-33],[-13,-48],[10,-53],[-12,-74],[12,-78]])s.prop("console",e,t);return s.prop("tank",-30,-91),s.prop("tank",30,-91),s.prop("corpse",22,-31),s.prop("skeleton",-20,-79),s.prop("pipe",-30,-98),s.prop("pipe",30,-98),s.prop("checkpoint",18,-68.5,"TRANSMISSION CHECKPOINT"),s.prop("power",22,-98,"BROADCAST / MARA CHANNEL 09"),s.prop("exit",22,-101,"BROADCAST"),s.finish({chapterId:7,title:"AXIOM ZERO",subtitle:"AXIOM / TRANSMISSION TOWER",theme:"tower",intro:"This time, the city is listening. Mara has opened a route through the tower. Recover Protocol Zero, fight through security and transmission control, then destroy Omega and broadcast the truth.",objective:"DEFEAT OMEGA / BROADCAST THE EVIDENCE",exitLabel:"BROADCAST",completionMessage:"Omega falls. Mara broadcasts the Lazarus evidence across every screen in Vesper. Axiom’s crimes are exposed. The Black Rain case is finally closed.",spawn:{x:-19,z:5},checkpoint:{x:18,z:-68.5},switch:{x:22,z:-98},exit:{x:22,z:-101},mount:{x:-26,z:0},mountBounds:{minX:-29,maxX:29,minZ:-100,maxZ:6},defaultLoadout:["revolver","shotgun","machinegun","plasma","railgun","arc"]})}const Th=[vh(),_h(),Mh(),Sh(),bh(),yh(),Eh()],bi=["revolver","shotgun","plasma","machinegun","railgun","arc"],ut={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003,reserveCap:144,ammoPickup:24},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065,reserveCap:64,ammoPickup:12},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012,reserveCap:180,ammoPickup:30},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026,reserveCap:360,ammoPickup:60},railgun:{name:"Rail Rifle",damage:128,interval:.85,clip:5,range:80,reload:1.9,pellets:1,spread:.001,reserveCap:36,ammoPickup:8},arc:{name:"Arc Disruptor",damage:55,interval:.5,clip:12,range:24,reload:1.6,pellets:1,spread:.007,reserveCap:60,ammoPickup:12}},Nn={easy:{name:"Rookie",description:"Explore the case with more supplies and gentler enemies.",health:.8,damage:.65,speed:.88,ammo:1.25,detect:13,attackInterval:1.2,accuracy:.55},normal:{name:"Detective",description:"The complete case with balanced supplies and combat.",health:1,damage:1,speed:1,ammo:1,detect:17,attackInterval:1,accuracy:.72},hard:{name:"Nightmare",description:"Faster, tougher enemies and tighter ammunition.",health:1.18,damage:1.22,speed:1.12,ammo:.85,detect:20,attackInterval:.8,accuracy:.88},nightmare:{name:"Extinction",description:"Relentless predators, rapid attacks and scarce supplies.",health:1.42,damage:1.48,speed:1.28,ammo:.65,detect:24,attackInterval:.62,accuracy:.96}},zi=bi,il={revolver:0,shotgun:0,plasma:0,machinegun:0,railgun:0,arc:0},ui={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},Pt=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),jt=(s,e,t)=>Math.max(e,Math.min(t,s));class vo{constructor(e,t="normal"){this.level=e,this.resetState(t)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;bossTargets=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(e){const t=this.level.defaultLoadout??[],i={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:t[0]??"revolver",owned:[...t],ammo:{...il},reserve:{...il},reload:0,cooldown:0,recoil:0,hurt:0};for(const n of t)i.ammo[n]=ut[n].clip,i.reserve[n]=this.startingReserve(n,e);this.state={player:i,enemies:this.level.enemies.map(n=>this.createEnemy(n,e)),doors:this.level.doors.map(n=>({...n,open:0,target:0})),pickups:this.level.pickups.map(n=>({...n,collected:!1})),destructibles:(this.level.destructibles??[]).map(n=>({...n,maxHealth:n.health,destroyed:!1})),effects:[],status:"playing",kills:0,time:0,message:this.level.intro??'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,discoveredSecrets:[],slow:1,events:[],mount:{...this.level.mount},difficulty:e,triggeredWaves:[],chapterId:this.level.chapterId},this.reloading=null,this.attackWindups.clear(),this.bossTargets.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}startingReserve(e,t=this.state.difficulty){return Math.min(ut[e].reserveCap,Math.round((e==="revolver"?24:ut[e].clip*2)*Nn[t].ammo))}createEnemy(e,t=this.state.difficulty){const i=Math.round((e.health??ui[e.kind].health)*Nn[t].health);return{...e,health:i,maxHealth:i,alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,heading:0,speed:0,attack:0,vx:0,vz:0,path:[],pathTime:0}}restoreSavedState(e){try{if(!e||e.chapterId!==this.level.chapterId||!Nn[e.difficulty]||!e.player||!Array.isArray(e.enemies)||!Array.isArray(e.doors)||!Array.isArray(e.pickups)||!Array.isArray(e.destructibles))return!1;const t=e.player,i=this.level.bounds;if(![t.x,t.z,t.health,t.armor,t.yaw,t.pitch,e.time,e.kills].every(Number.isFinite)||t.x<i.minX||t.x>i.maxX||t.z<i.minZ||t.z>i.maxZ||!Array.isArray(t.owned)||t.owned.some(r=>!zi.includes(r))||!zi.includes(t.weapon)||!t.ammo||!t.reserve)return!1;const n=[...this.level.enemies,...(this.level.waves??[]).flatMap(r=>r.enemies)];if(e.enemies.length>n.length||e.enemies.some(r=>!n.some(o=>o.id===r.id&&o.kind===r.kind)||![r.x,r.z,r.health].every(Number.isFinite))||e.pickups.length>this.level.pickups.length+n.length||e.doors.length!==this.level.doors.length||e.destructibles.length!==(this.level.destructibles??[]).length)return!1;const a=structuredClone(e);a.triggeredWaves=(e.triggeredWaves??[]).filter(r=>this.level.waves?.some(o=>o.id===r)),a.discoveredSecrets=(e.discoveredSecrets??e.doors.filter(r=>r.secret&&r.target>.5).map(r=>r.id)).filter(r=>this.level.doors.some(o=>o.id===r&&o.secret)),a.secrets=a.discoveredSecrets.length;for(const r of zi)a.player.ammo[r]=jt(Number(a.player.ammo[r])||0,0,ut[r].clip),a.player.reserve[r]=jt(Number(a.player.reserve[r])||0,0,ut[r].reserveCap);if(a.player.owned=[...new Set(a.player.owned)],this.checkpointSecrets=[...a.discoveredSecrets],a.checkpoint)this.checkpointState=a,this.state.difficulty=a.difficulty,this.restart(!0);else{this.checkpointState=null,this.state=a,this.state.status="playing",this.state.events=[],this.state.effects=[],this.state.player.reload=0,this.state.player.cooldown=0,this.state.player.hurt=0,this.state.player.mounted=!1,this.reloading=null,this.attackWindups.clear(),this.bossTargets.clear(),this.jumpHeld=!1,this.hazardTime=0,this.emptyClick=0,this.secretDoors=new Set(this.checkpointSecrets);for(const r of this.state.enemies)r.path=[],r.pathTime=0,r.cooldown=1.1,r.speed=0,r.vx=0,r.vz=0,r.attack=0}return!0}catch{return!1}}restart(e=!1){if(e&&!this.checkpointState){this.resetState(this.state.difficulty);const t=this.state,i=t.player;if(i.health=100,i.armor=55,i.keycard=this.level.pickups.some(n=>n.kind==="keycard"),this.level.chapterId===void 0||this.level.chapterId===0){for(const n of t.pickups)n.z<=-32.2||n.kind==="evidence"||n.x<=-13||(zi.includes(n.kind)&&!i.owned.includes(n.kind)&&i.owned.push(n.kind),n.collected=!0);for(const n of["revolver","shotgun","machinegun"])i.owned.includes(n)||i.owned.push(n);for(const n of t.enemies)n.z>-32.2&&(n.alive=!1,n.health=0,n.speed=0,n.vx=0,n.vz=0,n.attack=0,t.kills++);for(const n of t.doors)["office","facility","security"].includes(n.id)&&(n.open=1,n.target=1)}for(const n of i.owned)i.ammo[n]=ut[n].clip,i.reserve[n]=this.startingReserve(n);i.weapon=i.owned.at(-1)??"revolver",t.checkpoint=!0,this.checkpointState=structuredClone(t),this.checkpointSecrets=[]}if(e&&this.checkpointState){this.state=structuredClone(this.checkpointState);const t=this.state.player;t.x=this.level.checkpoint.x,t.z=this.level.checkpoint.z,t.y=0,t.vy=0,t.grounded=!0,t.mounted=!1,t.health=Math.max(t.health,75),t.armor=Math.max(t.armor,25),t.cooldown=0,t.reload=0,t.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.bossTargets.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const i of this.state.enemies)i.path=[],i.pathTime=0,i.cooldown=1.1,i.speed=0,i.vx=0,i.vz=0,i.attack=0;this.message(`CHECKPOINT RESTORED — ${this.level.objective??"keycard secured. Enter the restricted laboratory."}`,4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(e,t){e=jt(e,0,.075);const i=this.state,n=i.player;if(i.status!=="playing")return;if(i.time+=e,i.messageTime=Math.max(0,i.messageTime-e),n.yaw+=t.lookX,n.pitch=jt(n.pitch+t.lookY,-1.22,1.22),n.cooldown=Math.max(0,n.cooldown-e),n.recoil=Math.max(0,n.recoil-e*4.6),n.hurt=Math.max(0,n.hurt-e*2),this.emptyClick=Math.max(0,this.emptyClick-e),n.reload>0&&(n.reload=Math.max(0,n.reload-e),n.reload===0&&this.reloading)){const r=this.reloading,o=Math.min(ut[r].clip-n.ammo[r],n.reserve[r]);n.ammo[r]+=o,n.reserve[r]-=o,this.reloading=null}(t.weaponDelta||t.weaponSlot)&&this.switchWeapon(t.weaponDelta,t.weaponSlot||void 0),t.reload&&this.reload(),t.interact&&this.interact(),this.updateDoors(e),this.movePlayer(e,t),this.collectPickups(),this.triggerWaves(),t.fire&&this.fire();const a=t.slow&&i.slow>.015;i.slow=jt(i.slow+(a?-.17:.085)*e,0,1),this.updateEnemies(e*(a?.32:1),e),this.updateHazards(e);for(const r of i.effects)r.life-=e;i.effects=i.effects.filter(r=>r.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const e=this.state.player;return e.y+(e.mounted?2.6:e.crouching?.9:1.65)}canOccupy(e,t,i=.32,n=this.state.player.y){return this.state.player.mounted&&!this.insideMountBounds(e,t)?!1:this.clearAt(e,t,i,n,this.height())}clearAt(e,t,i,n=0,a=1.8){const r=this.level.bounds;if(e-i<r.minX||e+i>r.maxX||t-i<r.minZ||t+i>r.maxZ)return!1;for(const o of this.level.walls){const l=o.y??0;if(!(n>=l+o.h-.025||n+a<=l+.025)&&this.circleBox(e,t,i,o.x,o.z,o.w,o.d))return!1}for(const o of this.state.doors)if(!(n+a<=o.open*3.4+.025)&&this.circleBox(e,t,i,o.x,o.z,o.w,o.d))return!1;for(const o of this.state.destructibles)if(!(o.destroyed||o.kind!=="barrel"||n>=o.y+o.h-.025||n+a<=o.y+.025)&&this.circleBox(e,t,i,o.x,o.z,o.w,o.d))return!1;return!0}circleBox(e,t,i,n,a,r,o){const l=jt(e,n-r/2,n+r/2),c=jt(t,a-o/2,a+o/2);return(e-l)**2+(t-c)**2<i*i}movePlayer(e,t){const i=this.state.player;t.crouch&&!i.mounted?i.crouching=!0:i.crouching&&(i.crouching=!1,this.canOccupy(i.x,i.z)||(i.crouching=!0));const n=jt(t.forward,-1,1),a=jt(t.strafe,-1,1),r=Math.max(1,Math.hypot(n,a)),o=i.mounted?8:i.crouching?2.3:t.sprint?6.4:4.4,l=(-Math.sin(i.yaw)*n+Math.cos(i.yaw)*a)*o*e/r,c=(-Math.cos(i.yaw)*n-Math.sin(i.yaw)*a)*o*e/r;i.mounted&&!this.insideMountBounds(i.x+l,i.z+c)&&this.message("Your strider stays in this area. Press E to dismount.",2);const h=Math.max(1,Math.ceil(Math.hypot(l,c)/.14)),d=i.mounted?.53:.32;for(let g=0;g<h;g++)this.canOccupy(i.x+l/h,i.z,d)&&(i.x+=l/h),this.canOccupy(i.x,i.z+c/h,d)&&(i.z+=c/h);t.jump&&!this.jumpHeld&&i.grounded&&!i.crouching&&(i.vy=i.mounted?6.4:6.1,i.grounded=!1),this.jumpHeld=t.jump,i.vy-=14*e;const f=i.y+i.vy*e;let u=0;if(i.vy<=0){for(const g of this.level.walls){const x=(g.y??0)+g.h;x<=i.y+.035&&x>=f&&this.circleBox(i.x,i.z,d,g.x,g.z,g.w,g.d)&&(u=Math.max(u,x))}for(const g of this.state.destructibles){if(g.destroyed||g.kind!=="barrel")continue;const x=g.y+g.h;x<=i.y+.035&&x>=f&&this.circleBox(i.x,i.z,d,g.x,g.z,g.w,g.d)&&(u=Math.max(u,x))}}i.vy<=0&&f<=u?(i.y=u,i.vy=0,i.grounded=!0):this.canOccupy(i.x,i.z,d,f)?(i.y=f,i.grounded=!1):i.vy>0&&(i.vy=0),i.mounted&&(this.state.mount.x=i.x,this.state.mount.z=i.z)}switchWeapon(e,t){const i=this.state.player;if(!i.owned.length)return;let n;if(t){if(n=zi[jt(Math.round(t)-1,0,zi.length-1)],!i.owned.includes(n)){this.message("Weapon not acquired yet.",1.5);return}}else{const a=zi.filter(o=>i.owned.includes(o)),r=a.indexOf(i.weapon);n=a[(r+(e>0?1:-1)+a.length)%a.length]}n!==i.weapon&&(i.weapon=n,i.reload=0,i.cooldown=.22,i.recoil=.22,this.reloading=null,this.message(ut[n].name,1.2))}reload(){const e=this.state.player,t=e.weapon,i=ut[t];if(!(!e.owned.includes(t)||e.reload>0||e.ammo[t]>=i.clip)){if(e.reserve[t]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=t,e.reload=i.reload,this.state.events.push({type:"reload",weapon:t})}}fire(){const e=this.state.player;if(this.state.status!=="playing"||e.cooldown>0||e.reload>0)return;if(e.mounted){this.bite();return}if(!e.owned.includes(e.weapon)){this.message("Find your revolver in the office.",2);return}const t=ut[e.weapon];if(e.ammo[e.weapon]<=0){e.reserve[e.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}e.ammo[e.weapon]--,e.cooldown=t.interval,e.recoil=1,this.state.events.push({type:"shot",weapon:e.weapon}),this.effect("muzzle",e.x-Math.sin(e.yaw)*.5,e.z-Math.cos(e.yaw)*.5,this.eyeHeight()-.18,.07);for(let i=0;i<t.pellets;i++){const n=e.yaw+(this.random()-.5)*t.spread*2,a=e.pitch+(this.random()-.5)*t.spread*1.5,r=-Math.sin(n)*Math.cos(a),o=-Math.cos(n)*Math.cos(a),l=Math.sin(a),c=this.eyeHeight();let h=this.rayWalls(e.x,c,e.z,r,l,o,t.range),d=null,f=null;for(const p of this.state.enemies){if(!p.alive)continue;const m=ui[p.kind],_=p.boss?1.15:1,M=this.rayEnemy(p,e.x,c,e.z,r,l,o,m.radius*_,m.height*_);M!==null&&M>=0&&M<h&&(h=M,d=p)}for(const p of this.state.destructibles){if(p.destroyed)continue;const m=this.rayBox(e.x,c,e.z,r,l,o,p.x-p.w/2,p.x+p.w/2,p.y,p.y+p.h,p.z-p.d/2,p.z+p.d/2);m!==null&&m<h&&(h=m,f=p,d=null)}const u=e.x+r*h,g=e.z+o*h,x=c+l*h;if(f)this.damageDestructible(f,t.damage),this.effect("spark",u,g,x,.16);else if(d){const p=e.weapon==="shotgun"?Math.max(.35,1-h/42):1;this.damageEnemy(d,t.damage*p),this.effect("blood",u,g,x,.24),e.weapon==="arc"&&this.chainArc(d)}else h<t.range&&this.effect("spark",u,g,x,.15);if((e.weapon==="railgun"||e.weapon==="arc")&&this.trace(e.weapon==="railgun"?"rail":"arc",e.x,c,e.z,u,x,g),e.weapon==="plasma"){const p=Math.min(12,Math.ceil(h/1.5));for(let m=1;m<=p;m++){const _=h*m/p;this.effect("plasma",e.x+r*_,e.z+o*_,c+l*_,.14)}}}}trace(e,t,i,n,a,r,o){const l=Math.hypot(a-t,r-i,o-n),c=Math.min(e==="rail"?28:14,Math.max(2,Math.ceil(l/.7)));for(let h=1;h<=c;h++){const d=h/c,f=e==="arc"&&h<c?Math.sin(h*2.3)*.1:0;this.effect(e,t+(a-t)*d+f,n+(o-n)*d-f,i+(r-i)*d,e==="rail"?.18:.23)}}chainArc(e){const t=new Set([e.id]);let i=e;for(let n=0;n<2;n++){const a=ui[i.kind].height*(i.boss?1.15:1)*.55;let r=null,o=5.00001;for(const c of this.state.enemies){if(!c.alive||t.has(c.id))continue;const h=ui[c.kind].height*(c.boss?1.15:1)*.55,d=Math.hypot(c.x-i.x,c.z-i.z,h-a);d>5||d>=o||!this.lineClear(i.x,a,i.z,c.x,h,c.z)||(r=c,o=d)}if(!r)break;const l=ui[r.kind].height*(r.boss?1.15:1)*.55;this.trace("arc",i.x,a,i.z,r.x,l,r.z),this.damageEnemy(r,40),this.effect("spark",r.x,r.z,l,.25),t.add(r.id),i=r}}lineClear(e,t,i,n,a,r){const o=n-e,l=a-t,c=r-i,h=Math.hypot(o,l,c);if(h<.001)return!0;const d=o/h,f=l/h,u=c/h;if(this.rayWalls(e,t,i,d,f,u,h)<h-.02)return!1;for(const g of this.state.destructibles){if(g.destroyed)continue;const x=this.rayBox(e,t,i,d,f,u,g.x-g.w/2,g.x+g.w/2,g.y,g.y+g.h,g.z-g.d/2,g.z+g.d/2);if(x!==null&&x<h-.02)return!1}return!0}bite(){const e=this.state.player;e.cooldown=.58,e.recoil=.7;let t=!1;for(const i of this.state.enemies){if(!i.alive||Pt(i,e)>3)continue;const n=i.x-e.x,a=i.z-e.z,r=Math.hypot(n,a);(-Math.sin(e.yaw)*n-Math.cos(e.yaw)*a)/Math.max(r,.1)>.35&&this.visible(e,i)&&(this.damageEnemy(i,95),this.effect("blood",i.x,i.z,1.1,.3),t=!0)}this.state.events.push({type:"enemy",message:t?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(e,t,i,n,a,r,o,l,c){const h=t-e.x,d=n-e.z,f=a*a+o*o,u=2*(h*a+d*o),g=h*h+d*d-l*l,x=u*u-4*f*g;if(x<0||f<1e-7)return null;const p=(-u-Math.sqrt(x))/(2*f),m=(-u+Math.sqrt(x))/(2*f);if(m<0)return null;let _=Math.max(0,p),M=m;if(Math.abs(r)<1e-8){if(i<0||i>c)return null}else{let v=-i/r,y=(c-i)/r;v>y&&([v,y]=[y,v]),_=Math.max(_,v),M=Math.min(M,y)}return _<=M?_:null}rayWalls(e,t,i,n,a,r,o){let l=o;for(const c of this.level.walls){const h=this.rayBox(e,t,i,n,a,r,c.x-c.w/2,c.x+c.w/2,c.y??0,(c.y??0)+c.h,c.z-c.d/2,c.z+c.d/2);h!==null&&h<l&&(l=h)}for(const c of this.state.doors){if(c.open>=.995)continue;const h=this.rayBox(e,t,i,n,a,r,c.x-c.w/2,c.x+c.w/2,c.open*3.4,3.4+c.open*3.4,c.z-c.d/2,c.z+c.d/2);h!==null&&h<l&&(l=h)}return l}rayBox(e,t,i,n,a,r,o,l,c,h,d,f){let u=0,g=1/0;const x=[e,t,i],p=[n,a,r],m=[o,c,d],_=[l,h,f];for(let M=0;M<3;M++){if(Math.abs(p[M])<1e-8){if(x[M]<m[M]||x[M]>_[M])return null;continue}let v=(m[M]-x[M])/p[M],y=(_[M]-x[M])/p[M];if(v>y&&([v,y]=[y,v]),u=Math.max(u,v),g=Math.min(g,y),u>g)return null}return g<0?null:u}visible(e,t,i=1.2){return Pt(e,t)<.001?!0:this.lineClear(e.x,i,e.z,t.x,i,t.z)}enemySees(e){const t=this.state.player,i=ui[e.kind].height*.74,n=this.eyeHeight(),a=t.x-e.x,r=n-i,o=t.z-e.z,l=Math.hypot(a,r,o);return l<.001?!0:this.rayWalls(e.x,i,e.z,a/l,r/l,o/l,l)>=l-.1}damageEnemy(e,t){e.alive&&(e.health-=t,e.hurt=1,e.alert=!0,!(e.health>0)&&(e.health=0,e.alive=!1,e.path=[],e.speed=0,e.vx=0,e.vz=0,e.attack=0,this.attackWindups.delete(e.id),this.bossTargets.delete(e.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",e.x,e.z,.7,.5),e.kind==="soldier"&&!this.state.pickups.some(i=>i.id===`drop-${e.id}`)&&this.state.pickups.push({id:`drop-${e.id}`,kind:"ammo",ammoFor:"machinegun",amount:20,label:"Soldier ammunition",x:e.x,z:e.z,collected:!1}),e.boss?this.message(`${e.label??e.boss.toUpperCase()} NEUTRALIZED — ${this.level.objective??"find the extraction route."}`,3):e.kind==="brute"&&this.message("Containment beast neutralized. Restore the exit power.",3)))}damageDestructible(e,t){if(!e.destroyed&&(e.health=Math.max(0,e.health-t),!(e.health>0))){if(e.destroyed=!0,e.kind==="glass"){this.shatterGlass(e);return}this.explodeBarrels(e)}}shatterGlass(e){this.state.events.push({type:"shatter"});for(let t=0;t<16;t++){const i=e.x+(this.random()-.5)*e.w,n=e.z+(this.random()-.5)*e.d,a=e.y+this.random()*e.h;this.state.effects.push({kind:"shard",x:i,z:n,y:a,life:.7,maxLife:.7,dx:(this.random()-.5)*2,dz:(this.random()-.5)*2})}this.message("SHOP WINDOW SHATTERED — the district answers back.",1.5)}explodeBarrels(e){const t=[e],i=new Set,n=4.2;for(let a=0;a<t.length&&a<this.state.destructibles.length;a++){const r=t[a];if(i.has(r.id))continue;i.add(r.id),this.state.events.push({type:"explosion"}),this.effect("explosion",r.x,r.z,r.y+.75,.5);for(let c=0;c<10;c++){const h=this.random()*Math.PI*2,d=this.random()*1.2;this.effect(c<6?"smoke":"spark",r.x+Math.sin(h)*d,r.z+Math.cos(h)*d,r.y+.4+this.random()*1.3,c<6?1.5:.38)}for(const c of this.state.enemies){const h=Pt(r,c);!c.alive||h>=n||!this.blastVisible(r,c,Math.min(1.1,ui[c.kind].height*.6))||(this.damageEnemy(c,145*(1-h/n)),this.effect("blood",c.x,c.z,1.05,.35))}const o=this.state.player,l=Pt(r,o);l<n&&this.blastVisible(r,o,o.y+Math.min(this.height()*.5,1.2))&&this.hurtPlayer(75*(1-l/n));for(const c of this.state.destructibles){const h=Pt(r,c);c.destroyed||h>=n||!this.blastVisible(r,c,c.y+c.h*.5)||(c.health=Math.max(0,c.health-145*(1-h/n)),!(c.health>0)&&(c.destroyed=!0,c.kind==="barrel"?t.push(c):this.shatterGlass(c)))}}this.state.status==="playing"&&this.message("FUEL CANISTER DETONATED — keep your distance from the blast.",2.5)}blastVisible(e,t,i){const n=e.y+.9,a=t.x-e.x,r=i-n,o=t.z-e.z,l=Math.hypot(a,r,o);return l<.001?!0:this.rayWalls(e.x,n,e.z,a/l,r/l,o/l,l)>=l-.015}updateDoors(e){for(const t of this.state.doors){const i=Math.sign(t.target-t.open);if(i!==0){if(i<0&&Pt(t,this.state.player)<1.4){t.target=1;continue}t.open=jt(t.open+i*e*1.3,0,1)}}}interact(){const e=this.state,t=e.player;if(e.status!=="playing")return;if(t.mounted){const a=[{x:t.x+Math.cos(t.yaw)*1.1,z:t.z-Math.sin(t.yaw)*1.1},{x:t.x-Math.cos(t.yaw)*1.1,z:t.z+Math.sin(t.yaw)*1.1},{x:t.x,z:t.z+1.2}].find(r=>this.clearAt(r.x,r.z,.32,0,1.8));if(!a){this.message("No room to dismount. Move into the street.",2);return}t.mounted=!1,t.x=a.x,t.z=a.z,t.y=0,t.vy=0,e.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(Pt(t,this.level.switch)<2.5){e.powered?this.message("Power online. The exit is ready once the area is clear.",2):(e.powered=!0,e.events.push({type:"door"}),this.message(`${(this.level.exitLabel??"EXIT").toUpperCase()} POWER RESTORED — ${this.level.objective??"eliminate the laboratory threats and reach the lift."}`,4));return}if(Pt(t,e.mount)<2.6&&this.insideMountBounds(t.x,t.z)){t.mounted=!0,t.crouching=!1,e.mount.x=t.x,e.mount.z=t.z,e.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount.",4);return}const i=e.doors.filter(n=>Pt(t,n)<2.9).sort((n,a)=>Pt(n,t)-Pt(a,t));if(i.length){const n=i[0];if(t.mounted&&n.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(n.locked&&!t.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(n.id==="elevator"||n.id==="exit"){if(!e.powered){this.message("EXIT OFFLINE — restore power at the control switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} threats remain. Clear the area before extraction.`,3);return}if(e.player.evidence<(this.level.requiredEvidence??0)){this.message(`Collect ${this.level.requiredEvidence} case files before leaving.`,3);return}}n.target=n.target>.5?0:1,e.events.push({type:"door"}),n.secret&&!this.secretDoors.has(n.id)?(this.secretDoors.add(n.id),e.discoveredSecrets.push(n.id),e.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${n.label}: ${n.target?"opening":"closing"}.`,1.6);return}if(Pt(t,this.level.exit)<3){this.checkExit(),e.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(this.level.objective??(t.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard."),2)}addReserve(e,t){const i=this.state.player,n=ut[e],a=i.reserve[e];return i.reserve[e]=Math.min(n.reserveCap,a+Math.max(0,Math.round(t*Nn[this.state.difficulty].ammo))),i.reserve[e]-a}collectPickups(){const e=this.state,t=e.player;let i=!1;for(const n of e.pickups)if(!(n.collected||Pt(n,t)>1.1||t.y>1.5||!this.visible(t,n,.45))&&!(n.kind==="health"&&t.health>=100||n.kind==="armor"&&t.armor>=100)){if(zi.includes(n.kind)){const a=n.kind;if(!t.owned.includes(a))t.owned.push(a),t.ammo[a]=ut[a].clip,t.reserve[a]=Math.min(ut[a].reserveCap,t.reserve[a]+this.startingReserve(a)),t.weapon=a,t.reload=0,this.reloading=null,t.cooldown=.15,t.recoil=.2,this.message(`${ut[a].name.toUpperCase()} ACQUIRED — ${t.ammo[a]} loaded.`,2.5);else{const o=this.addReserve(a,n.amount??ut[a].ammoPickup);if(o===0)continue;this.message(`${ut[a].name.toUpperCase()} AMMO +${o}`,1.6)}}else if(n.kind==="health")t.health=Math.min(100,t.health+38),this.message("MEDKIT +38 HEALTH",1.6);else if(n.kind==="armor")t.armor=Math.min(100,t.armor+55),this.message("BODY ARMOR +55",1.6);else if(n.kind==="ammo")if(n.ammoFor){const a=this.addReserve(n.ammoFor,n.amount??ut[n.ammoFor].ammoPickup);if(a===0)continue;this.message(`${ut[n.ammoFor].name.toUpperCase()} AMMO +${a}`,1.6)}else{const a={revolver:24,shotgun:16,plasma:45,machinegun:80,railgun:8,arc:12};let r=0;for(const o of zi)r+=this.addReserve(o,n.amount??a[o]);if(r===0)continue;this.message("AMMUNITION CACHE — supplies replenished.",2)}else n.kind==="evidence"?(t.evidence++,this.message(n.label?`CASE FILE RECOVERED — ${n.label}`:"EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(t.keycard=!0,e.checkpoint=!0,i=!0,this.message(`SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. ${this.level.objective??"Unlock the laboratory."}`,4));n.collected=!0,e.events.push({type:"pickup"})}i&&(e.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(e),this.checkpointState.events=[],this.checkpointState.effects=[],this.checkpointSecrets=[...this.secretDoors])}insideMountBounds(e,t){const i=this.level.mountBounds??{minX:this.level.bounds.minX,maxX:this.level.bounds.maxX,minZ:-19.1,maxZ:3.2};return e>=i.minX&&e<=i.maxX&&t>=i.minZ&&t<=i.maxZ}triggerWaves(){for(const e of this.level.waves??[])if(!(this.state.triggeredWaves.includes(e.id)||Pt(this.state.player,e.trigger)>e.radius)){this.state.triggeredWaves.push(e.id);for(const t of e.enemies)if(!this.state.enemies.some(i=>i.id===t.id)){const i=this.createEnemy(t);i.alert=!0,this.state.enemies.push(i)}this.message(`AMBUSH — ${e.enemies.length} hostiles detected. Keep moving.`,3)}}finalThreats(){if(this.level.requiredKills){let e=0;for(const i of this.level.requiredKills)this.state.enemies.some(n=>n.id===i&&!n.alive)||e++;const t=new Set(this.level.requiredKills);for(const i of this.state.enemies)i.alive&&!t.has(i.id)&&!this.level.enemies.some(n=>n.id===i.id)&&e++;return e}return this.state.enemies.filter(e=>e.alive&&(this.level.enemies.find(t=>t.id===e.id)?.z??e.z)<-32).length}checkExit(){const e=this.state;Pt(e.player,this.level.exit)>1.5||e.status!=="playing"||!e.powered||this.finalThreats()>0||e.player.evidence<(this.level.requiredEvidence??0)||(e.status="complete",e.events.push({type:"complete"}),e.player.reload=0,this.reloading=null,this.message(this.level.completionMessage??"NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(e,t=e){if(e<=0)return;const i=this.state.player,n=this.state.difficulty,a=Nn[n],r=a.detect;for(const o of this.state.enemies){if(!o.alive)continue;const l=ui[o.kind],c=Pt(o,i);if(o.speed=0,o.attack=Math.max(0,o.attack-e/(o.kind==="brute"?.26:.2)),o.hurt=Math.max(0,o.hurt-e*3.3),o.cooldown=Math.max(0,o.cooldown-e),o.pathTime-=e,!o.alert&&c<r&&this.enemySees(o)&&(o.alert=!0),!o.alert){o.vx=0,o.vz=0;continue}const h=this.attackWindups.get(o.id);if(h!==void 0){o.vx=0,o.vz=0,this.faceEnemy(o,i.x-o.x,i.z-o.z,e);const Q=o.boss?.8:o.kind==="soldier"?.42:.32,X=h-e;o.attack=.15+.85*jt(1-X/Q,0,1),X<=0?(this.attackWindups.delete(o.id),o.attack=1,o.boss?this.bossStrike(o):this.enemySees(o)&&c<l.range+(o.kind==="soldier"?2:.55)&&(o.kind==="soldier"?(this.effect("muzzle",o.x,o.z,1.4,.12),this.random()<a.accuracy&&this.hurtPlayer(l.damage),this.effect("spark",i.x,i.z,Math.min(1.65,this.eyeHeight()),.1)):(this.hurtPlayer(l.damage),this.effect("blood",i.x,i.z,.65,.17))),o.cooldown=(o.boss?2.1:l.interval)*a.attackInterval):this.attackWindups.set(o.id,X);continue}const d=this.enemySees(o);if(c<(o.boss?12:l.range)&&d&&o.cooldown<=0){o.vx=0,o.vz=0,o.attack=.15,this.faceEnemy(o,i.x-o.x,i.z-o.z,e),this.attackWindups.set(o.id,o.boss?.8:o.kind==="soldier"?.42:.32),o.boss&&(this.bossTargets.set(o.id,{x:i.x,z:i.z}),this.effect("arc",i.x,i.z,.15,.8),this.effect("spark",i.x,i.z,.35,.8),this.message(`${o.label??o.boss.toUpperCase()} ${o.boss==="crown"||o.boss==="ironjaw"?"CHARGING — MOVE!":"OVERLOAD — MOVE CLEAR!"}`,1.2)),this.state.events.push({type:"enemy",message:o.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),o.kind==="soldier"&&this.effect("plasma",o.x,o.z,1.65,.4);continue}const f=o.kind==="soldier"?9:l.range*.85;if(d&&c<=f+.025){o.vx=0,o.vz=0,this.faceEnemy(o,i.x-o.x,i.z-o.z,e);continue}let u=i;if(!d||!this.clearAt(o.x+(i.x-o.x)/Math.max(c,.01)*.7,o.z+(i.z-o.z)/Math.max(c,.01)*.7,l.radius,0,l.height))if(o.pathTime<=0&&(o.path=this.findPath(o,i,l.radius,Math.min(l.height,1.8)),o.pathTime=.8+this.random()*.25),o.path.length){for(;o.path.length&&Pt(o,o.path[0])<.4;)o.path.shift();o.path.length&&(u=o.path[0])}else{o.vx=0,o.vz=0;continue}const g=Pt(o,u);if(g<.01){o.vx=0,o.vz=0;continue}const x=o.kind==="raptor"?12:o.kind==="mutant"?8:5;let p=l.speed*a.speed*(o.hurt>0?.42:1);u===i&&d&&(p=Math.min(p,Math.sqrt(2*x*Math.max(0,c-f))));let m=(u.x-o.x)/g*p,_=(u.z-o.z)/g*p;for(const Q of this.state.enemies){if(Q===o||!Q.alive)continue;const X=Pt(o,Q),Y=l.radius+ui[Q.kind].radius+.35;X>.01&&X<Y&&(m+=(o.x-Q.x)/X*(Y-X)*3,_+=(o.z-Q.z)/X*(Y-X)*3)}const M=Math.hypot(m,_);M>p&&(m*=p/M,_*=p/M);const v=m-o.vx,y=_-o.vz,T=Math.hypot(v,y),A=T>0?Math.min(1,x*e/T):1;o.vx+=v*A,o.vz+=y*A;const S=o.vx*e,w=o.vz*e,C=o.x,N=o.z,L=Math.max(1,Math.ceil(Math.hypot(S,w)/.12));for(let Q=0;Q<L;Q++)this.enemyCanMove(o,o.x+S/L,o.z)&&(o.x+=S/L),this.enemyCanMove(o,o.x,o.z+w/L)&&(o.z+=w/L);const U=o.x-C,z=o.z-N,k=Math.hypot(U,z);o.speed=k/Math.max(t,1e-8),o.phase+=k,o.vx=U/e,o.vz=z/e,k>1e-5&&this.faceEnemy(o,U,z,e)}}bossStrike(e){const t=this.bossTargets.get(e.id);if(this.bossTargets.delete(e.id),!t)return;const i=e.boss==="crown"||e.boss==="ironjaw";if(i){const o=t.x-e.x,l=t.z-e.z,c=Math.hypot(o,l),h=Math.min(c,4.5),d=Math.max(1,Math.ceil(h/.12)),f=e.x,u=e.z;for(let g=0;g<d;g++){const x=e.x+o/Math.max(c,.001)*h/d,p=e.z+l/Math.max(c,.001)*h/d;if(!this.enemyCanMove(e,x,p))break;e.x=x,e.z=p}e.phase+=Math.hypot(e.x-f,e.z-u)}const n=i?e:t,a=i?2.5:e.boss==="omega"?3.4:2.7;this.effect(i?"explosion":"arc",n.x,n.z,.45,.4);for(let o=0;o<8;o++){const l=o*Math.PI/4;this.effect(i?"spark":"plasma",n.x+Math.sin(l)*a,n.z+Math.cos(l)*a,.22,.42)}const r=this.state.player;Pt(r,n)<a&&this.lineClear(e.x,1.3,e.z,r.x,this.eyeHeight(),r.z)&&this.hurtPlayer(e.boss==="omega"?38:i?34:28),this.state.events.push({type:"enemy",message:i?"Boss charge impact":"Boss electrical overload"})}faceEnemy(e,t,i,n){if(Math.hypot(t,i)<1e-5)return;const a=Math.atan2(-t,-i),r=Math.atan2(Math.sin(a-e.heading),Math.cos(a-e.heading)),o=e.kind==="raptor"?8:e.kind==="brute"?4:6;e.heading+=jt(r,-o*n,o*n),e.heading=Math.atan2(Math.sin(e.heading),Math.cos(e.heading))}enemyCanMove(e,t,i){const n=ui[e.kind];if(!this.clearAt(t,i,n.radius,0,n.height))return!1;for(const a of this.state.enemies){if(a===e||!a.alive)continue;const r=n.radius+ui[a.kind].radius,o=Math.hypot(t-a.x,i-a.z);if(o<r-1e-5&&o<=Pt(e,a)+1e-6)return!1}return!0}findPath(e,t,i,n){const a=this.level.bounds,r=.9,o=Math.ceil((a.maxX-a.minX)/r),l=Math.ceil((a.maxZ-a.minZ)/r),c=N=>({x:jt(Math.floor((N.x-a.minX)/r),0,o-1),z:jt(Math.floor((N.z-a.minZ)/r),0,l-1)}),h=c(e),d=c(t),f=(N,L)=>L*o+N,u=N=>({x:a.minX+(N%o+.5)*r,z:a.minZ+(Math.floor(N/o)+.5)*r}),g=f(h.x,h.z),x=f(d.x,d.z),p=[g],m=new Map,_=new Map([[g,0]]),M=new Set,v=N=>Math.abs(N%o-d.x)+Math.abs(Math.floor(N/o)-d.z);let y=-1,T=g,A=v(g),S=0;for(;p.length&&S++<1900;){let N=0,L=1/0;for(let X=0;X<p.length;X++){const ee=(_.get(p[X])??1/0)+v(p[X]);ee<L&&(L=ee,N=X)}const U=p.splice(N,1)[0];if(M.has(U))continue;M.add(U);const z=v(U);if(z<A&&(A=z,T=U),U===x){y=U;break}const k=U%o,Q=Math.floor(U/o);for(const[X,ee]of[[1,0],[-1,0],[0,1],[0,-1]]){const Y=k+X,Z=Q+ee;if(Y<0||Y>=o||Z<0||Z>=l)continue;const j=f(Y,Z);if(M.has(j))continue;const me=u(j);if(j!==x&&!this.clearAt(me.x,me.z,i,0,n))continue;const we=(_.get(U)??0)+1;we>=(_.get(j)??1/0)||(_.set(j,we),m.set(j,U),p.includes(j)||p.push(j))}}if(y===-1){if(T===g)return[];y=T}const w=[];let C=y;for(;C!==g&&m.has(C);)w.push(u(C)),C=m.get(C);return w.reverse()}hurtPlayer(e){const t=this.state,i=t.player;if(t.status!=="playing")return;e*=Nn[t.difficulty].damage,i.mounted&&(e*=.65);const n=Math.min(i.armor,e*.65);i.armor-=n,i.health=Math.max(0,i.health-(e-n)),i.hurt=1,t.events.push({type:"hurt"}),i.health<=0&&(t.status="dead",i.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(e){const t=this.state.player;t.y<.45&&this.level.hazards.some(n=>Math.abs(t.x-n.x)<n.w/2&&Math.abs(t.z-n.z)<n.d/2)?(this.hazardTime+=e,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(e,t,i,n,a){this.state.effects.push({kind:e,x:t,z:i,y:n,life:a,maxLife:a})}message(e,t){this.state.message===e&&this.state.messageTime>.1||(this.state.message=e,this.state.messageTime=t,this.state.events.push({type:"message",message:e}))}}const wt=[{...jn,chapterId:0,title:"RAIN OVER VESPER",subtitle:"THE NEON DISTRICT",theme:"district",intro:"The rain could never wash this city clean. A distress call on Mara Vale’s old frequency leads Elias Vane into Vesper’s neon district. Find the witness record, clear the escape route and reach Safehouse 09.",objective:"FIND THE WITNESS NOTE / REACH SAFEHOUSE 09",exitLabel:"SAFEHOUSE 09",completionMessage:"Shipment 09 was carrying things that were still breathing. The witness says the old precinct is safe. Elias returns to Room 09.",defaultLoadout:[],requiredKills:jn.enemies.map(s=>s.id),enemies:jn.enemies.map(s=>s.id==="s01"?{...s,z:-14.3}:s),mountBounds:{minX:-12,maxX:12,minZ:-19.1,maxZ:3.2},pickups:jn.pickups.map(s=>s.id==="office-evidence"?{...s,label:"THE LAST SHIPMENT / WITNESS NOTE",evidenceId:"witness"}:s.id==="machinegun"?{...s,z:-24.9}:s)},...Th];wt.map(s=>s.title);function wh(s,e,t){if(!Number.isInteger(s)||!wt[s])throw new RangeError("Unknown Fossil Noir chapter");const i=new vo(wt[s],e);if(t){const n=i.state.player;n.health=Math.max(50,Math.min(100,t.health)),n.armor=Math.max(0,Math.min(100,t.armor)),n.owned=[...new Set([...t.owned,...n.owned])];for(const a of bi)t.owned.includes(a)?(n.ammo[a]=Math.min(ut[a].clip,t.ammo[a]),n.reserve[a]=Math.min(ut[a].reserveCap,t.reserve[a])):n.reserve[a]=Math.min(ut[a].reserveCap,Math.max(n.reserve[a],t.reserve[a]));n.owned.includes(t.weapon)&&(n.weapon=t.weapon),n.keycard=!1,n.evidence=0}return i}const _n={witness:{title:"THE LAST SHIPMENT",source:"WITNESS NOTE / VESPER ROOFTOPS",body:`Shipment 09 was not carrying fossils. It was carrying things that were still breathing. Axiom moved the survivors below the city. Someone cut the power before I could follow.

The old precinct is still safe. Stairwell access: 2 - 4 - 1.

If you hear claws on the fire escape, leave the lights off.`},blackrain:{title:"THE BLACK RAIN CASE",source:"ELIAS VANE / PERSONAL ARCHIVE",body:`Five years ago, a raid on Axiom took my eye, my arm, and my partner, Mara Vale. The company called it a reactor accident. The police closed the case.

Tonight, a distress call came through on Mara’s old frequency. It led to the rooftops, and a shipment of creatures that should not exist.

The service lift behind this office reaches Axiom’s abandoned utility tunnels. I know the way down.`},arm:{title:"A BORROWED SECOND",source:"WORKBENCH / PROTOTYPE AX-09",body:`AX-09. The serial inside my mechanical arm matches Axiom’s prototype inventory. Its chronal capacitor lets me move between the pulses of a damaged timeline.

That is what instinct feels like: a borrowed second. It never lasts.

Someone rebuilt me with the same technology that opened the breach. I intend to find out why.

The R-09 transport line still accepts this arm’s control key. Look for a cyan saddle. A linked Strider can run, leap and fight while I fire from its back.`},lazarus:{title:"PROJECT LAZARUS",source:"AXIOM / RESTRICTED RESEARCH",body:`The temporal breach retrieves living prehistoric DNA. Axiom clones the specimens, modifies their aggression and grafts command hardware into their nervous systems.

Containment failed when the first Crown-class organism severed its control tether. The broken tanks were not an accident.

Emergency reactor access: 3 - 1 - 4.

Seal the breach at the core. Do not allow another shipment to leave Vesper.`},reactor:{title:"THE OTHER SIDE",source:"REACTOR / EMERGENCY RECORD",body:`The aperture is no simulation. Beyond the containment ring lies a living prehistoric world. Spores and root systems have already crossed into the chamber.

Crown Rex is feeding on the reactor discharge. The shutdown console will not respond while the organism is tethered to the core.

Destroy the bio-weapon, then reach the console at the far end of the chamber.`},manifest:{title:"THE LAST CARGO",source:"BLACKWATER / MANIFEST 09",body:`The reactor is silent, but Axiom has already moved the project onto freight trains. Line 09 ends at a second breach.

There is a signature on the manifest: M. Vale. Mara is alive. And someone is forcing her to work.`},signal:{title:"A SIGNAL IN THE NOISE",source:"IRON EXPRESS / SERVICE RADIO",body:`Elias, if you receive this, cross the breach. I sabotaged the station collars, but the guardian is still linked to the network.

I am not shipping the creatures. I am trying to send them home. — Mara`},mara:{title:"THE RETURN OF MARA",source:"CRETACEOUS OUTPOST / PERSONAL LOG",body:`Five years on the wrong side of time. Axiom kept me here to stabilize the breaches. Now I have copied every order, every experiment.

Take down the guardian. The return gate leads to the transmission tower. I will meet you on channel 09.`},zero:{title:"PROTOCOL ZERO",source:"AXIOM TOWER / FINAL ORDER",body:`If the evidence leaves this tower, Axiom falls. Protocol Omega protects the transmitter with the final Crown specimen.

Mara has unlocked the public frequency. There is only one thing left to do: reach the top.`}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="186",Ah=0,nl=1,Rh=2,pa=1,Ch=2,Es=3,En=0,ai=1,si=2,Xi=0,ws=1,sl=2,al=3,rl=4,Ih=5,Jn=100,Ph=101,Lh=102,Dh=103,Nh=104,Uh=200,Fh=201,Oh=202,zh=203,pc=204,mc=205,kh=206,Bh=207,Hh=208,Gh=209,Vh=210,Wh=211,Xh=212,qh=213,Yh=214,Ar=0,Rr=1,Cr=2,Cs=3,Ir=4,Pr=5,Lr=6,Dr=7,Pa=0,$h=1,Zh=2,yi=0,gc=1,xc=2,vc=3,_c=4,Mc=5,Sc=6,bc=7,yc=300,Tn=301,ss=302,ka=303,Ba=304,La=306,wn=1e3,Wi=1001,Nr=1002,_t=1003,Kh=1004,Ws=1005,$t=1006,Ha=1007,Mn=1008,ci=1009,Ec=1010,Tc=1011,Is=1012,Mo=1013,Ni=1014,Mi=1015,Ui=1016,So=1017,bo=1018,Ps=1020,wc=35902,Ac=35899,Rc=1021,Cc=1022,Si=1023,Zi=1026,Sn=1027,yo=1028,Eo=1029,An=1030,To=1031,wo=1033,ma=33776,ga=33777,xa=33778,va=33779,Ur=35840,Fr=35841,Or=35842,zr=35843,kr=36196,Br=37492,Hr=37496,Gr=37488,Vr=37489,Sa=37490,Wr=37491,Xr=37808,qr=37809,Yr=37810,$r=37811,Zr=37812,Kr=37813,Jr=37814,Qr=37815,jr=37816,eo=37817,to=37818,io=37819,no=37820,so=37821,ao=36492,ro=36494,oo=36495,lo=36283,co=36284,ba=36285,ho=36286,Jh=3200,ya=0,Qh=1,on="",At="srgb",Ea="srgb-linear",Ta="linear",pt="srgb",Ga=7680,jh=519,ef=512,tf=513,nf=514,Ao=515,sf=516,af=517,Ro=518,rf=519,of=35044,_a=35048,ol="300 es",Di=2e3,Ls=2001;function lf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cf(){const s=wa("canvas");return s.style.display="block",s}const ll={};function cl(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ic(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function He(...s){s=Ic(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ct(...s){s=Ic(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function is(...s){const e=s.join(" ");e in ll||(ll[e]=!0,He(...s))}function hf(s,e,t){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const ff={[Ar]:Rr,[Cr]:Lr,[Ir]:Dr,[Cs]:Pr,[Rr]:Ar,[Lr]:Cr,[Dr]:Ir,[Pr]:Cs};class In{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,fo=180/Math.PI;function ks(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function df(s,e){return(s%e+e)%e}function Wa(s,e,t){return(1-t)*s+t*e}function cs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ho=class Ho{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*n+e.x,this.y=a*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ho.prototype.isVector2=!0;let ze=Ho;class Kt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=a[r+0],u=a[r+1],g=a[r+2],x=a[r+3];if(d!==x||l!==f||c!==u||h!==g){let p=l*f+c*u+h*g+d*x;p<0&&(f=-f,u=-u,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){const _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+f*o,c=c*m+u*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+f*o,c=c*m+u*o,h=h*m+g*o,d=d*m+x*o;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=a[r],f=a[r+1],u=a[r+2],g=a[r+3];return e[t]=o*g+h*d+l*u-c*f,e[t+1]=l*g+h*f+c*d-o*u,e[t+2]=c*g+h*u+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(a/2),f=l(i/2),u=l(n/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(a-c)*u,this._z=(r-n)*u}else if(i>o&&i>d){const u=2*Math.sqrt(1+i-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+r)/u,this._z=(a+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-i-d);this._w=(a-c)/u,this._x=(n+r)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-i-o);this._w=(r-n)/u,this._x=(a+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-a*l,this._y=n*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Go=class Go{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*n-o*i),h=2*(o*t-a*n),d=2*(a*i-r*t);return this.x=t+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=n+l*d+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Go.prototype.isVector3=!0;let W=Go;const Xa=new W,hl=new Kt,Vo=class Vo{constructor(e,t,i,n,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,r,o,l,c)}set(e,t,i,n,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],g=i[8],x=n[0],p=n[3],m=n[6],_=n[1],M=n[4],v=n[7],y=n[2],T=n[5],A=n[8];return a[0]=r*x+o*_+l*y,a[3]=r*p+o*M+l*T,a[6]=r*m+o*v+l*A,a[1]=c*x+h*_+d*y,a[4]=c*p+h*M+d*T,a[7]=c*m+h*v+d*A,a[2]=f*x+u*_+g*y,a[5]=f*p+u*M+g*T,a[8]=f*m+u*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*a*h+i*o*l+n*a*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,f=o*l-h*a,u=c*a-r*l,g=t*d+i*f+n*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*r)*x,e[3]=f*x,e[4]=(h*t-n*l)*x,e[5]=(n*a-o*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qa.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vo.prototype.isMatrix3=!0;let Ge=Vo;const qa=new Ge,fl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uf(){const s={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(n,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===pt&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pt&&(n.r=ns(n.r),n.g=ns(n.g),n.b=ns(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===on?Ta:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,r){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Ea]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),s}const it=uf();function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Un;class pf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Un===void 0&&(Un=wa("canvas")),Un.width=e.width,Un.height=e.height;const n=Un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Un}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=qi(a[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mf=0;class Co{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(Ya(n[r].image)):a.push(Ya(n[r]))}else a=Ya(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let gf=0;const $a=new W;class Zt extends In{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Wi,n=Wi,a=$t,r=Mn,o=Si,l=ci,c=Zt.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ks(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=yc;Zt.DEFAULT_ANISOTROPY=1;const Wo=class Wo{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(u+1)/2,y=(m+1)/2,T=(h+f)/4,A=(d+x)/4,S=(g+p)/4;return M>v&&M>y?M<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(M),n=T/i,a=A/i):v>y?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=T/n,a=S/n):y<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(y),i=A/a,n=S/a),this.set(i,n,a,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wo.prototype.isVector4=!0;let Ct=Wo;class xf extends In{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},a=new Zt(n),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends xf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pc extends Zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_t,this.minFilter=_t,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends Zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_t,this.minFilter=_t,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ia=class Ia{constructor(e,t,i,n,a,r,o,l,c,h,d,f,u,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,r,o,l,c,h,d,f,u,g,x,p)}set(e,t,i,n,a,r,o,l,c,h,d,f,u,g,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,n=1/Fn.setFromMatrixColumn(e,0).length(),a=1/Fn.setFromMatrixColumn(e,1).length(),r=1/Fn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=r*h,u=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+u*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,g=c*h,x=c*d;t[0]=f+x*o,t[4]=g*o-u,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=u*o-g,t[6]=x+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,g=c*h,x=c*d;t[0]=f-x*o,t[4]=-r*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=r*h,t[9]=x-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,u=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-u,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,u=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+u,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=r*l,u=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=r*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_f,e,Mf)}lookAt(e,t,i){const n=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ji.crossVectors(i,ri),ji.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ji.crossVectors(i,ri)),ji.normalize(),Xs.crossVectors(ri,ji),n[0]=ji.x,n[4]=Xs.x,n[8]=ri.x,n[1]=ji.y,n[5]=Xs.y,n[9]=ri.y,n[2]=ji.z,n[6]=Xs.z,n[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],M=i[7],v=i[11],y=i[15],T=n[0],A=n[4],S=n[8],w=n[12],C=n[1],N=n[5],L=n[9],U=n[13],z=n[2],k=n[6],Q=n[10],X=n[14],ee=n[3],Y=n[7],Z=n[11],j=n[15];return a[0]=r*T+o*C+l*z+c*ee,a[4]=r*A+o*N+l*k+c*Y,a[8]=r*S+o*L+l*Q+c*Z,a[12]=r*w+o*U+l*X+c*j,a[1]=h*T+d*C+f*z+u*ee,a[5]=h*A+d*N+f*k+u*Y,a[9]=h*S+d*L+f*Q+u*Z,a[13]=h*w+d*U+f*X+u*j,a[2]=g*T+x*C+p*z+m*ee,a[6]=g*A+x*N+p*k+m*Y,a[10]=g*S+x*L+p*Q+m*Z,a[14]=g*w+x*U+p*X+m*j,a[3]=_*T+M*C+v*z+y*ee,a[7]=_*A+M*N+v*k+y*Y,a[11]=_*S+M*L+v*Q+y*Z,a[15]=_*w+M*U+v*X+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],x=e[7],p=e[11],m=e[15],_=l*u-c*f,M=o*u-c*d,v=o*f-l*d,y=r*u-c*h,T=r*f-l*h,A=r*d-o*h;return t*(x*_-p*M+m*v)-i*(g*_-p*y+m*T)+n*(g*M-x*y+m*A)-a*(g*v-x*T+p*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-i*(a*h-o*l)+n*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],x=e[13],p=e[14],m=e[15],_=t*o-i*r,M=t*l-n*r,v=t*c-a*r,y=i*l-n*o,T=i*c-a*o,A=n*c-a*l,S=h*x-d*g,w=h*p-f*g,C=h*m-u*g,N=d*p-f*x,L=d*m-u*x,U=f*m-u*p,z=_*U-M*L+v*N+y*C-T*w+A*S;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=(o*U-l*L+c*N)*k,e[1]=(n*L-i*U-a*N)*k,e[2]=(x*A-p*T+m*y)*k,e[3]=(f*T-d*A-u*y)*k,e[4]=(l*C-r*U-c*w)*k,e[5]=(t*U-n*C+a*w)*k,e[6]=(p*v-g*A-m*M)*k,e[7]=(h*A-f*v+u*M)*k,e[8]=(r*L-o*C+c*S)*k,e[9]=(i*C-t*L-a*S)*k,e[10]=(g*T-x*v+m*_)*k,e[11]=(d*v-h*T-u*_)*k,e[12]=(o*w-r*N-l*S)*k,e[13]=(t*N-i*w+n*S)*k,e[14]=(x*M-g*y-p*_)*k,e[15]=(h*y-d*M+f*_)*k,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,r){return this.set(1,i,a,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,d=o+o,f=a*c,u=a*h,g=a*d,x=r*h,p=r*d,m=o*d,_=l*c,M=l*h,v=l*d,y=i.x,T=i.y,A=i.z;return n[0]=(1-(x+m))*y,n[1]=(u+v)*y,n[2]=(g-M)*y,n[3]=0,n[4]=(u-v)*T,n[5]=(1-(f+m))*T,n[6]=(p+_)*T,n[7]=0,n[8]=(g+M)*A,n[9]=(p-_)*A,n[10]=(1-(f+x))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=Fn.set(n[0],n[1],n[2]).length();const o=Fn.set(n[4],n[5],n[6]).length(),l=Fn.set(n[8],n[9],n[10]).length();a<0&&(r=-r),pi.copy(this);const c=1/r,h=1/o,d=1/l;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,t.setFromRotationMatrix(pi),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,n,a,r,o=Di,l=!1){const c=this.elements,h=2*a/(t-e),d=2*a/(i-n),f=(t+e)/(t-e),u=(i+n)/(i-n);let g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Di)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Ls)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,a,r,o=Di,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-n),f=-(t+e)/(t-e),u=-(i+n)/(i-n);let g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Di)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Ls)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ia.prototype.isMatrix4=!0;let St=Ia;const Fn=new W,pi=new St,_f=new W(0,0,0),Mf=new W(1,1,1),ji=new W,Xs=new W,ri=new W,ul=new St,pl=new Kt;class wi{constructor(e=0,t=0,i=0,n=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,u),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const ml=new W,On=new Kt,ki=new St,qs=new W,hs=new W,bf=new W,yf=new Kt,gl=new W(1,0,0),xl=new W(0,1,0),vl=new W(0,0,1),_l={type:"added"},Ef={type:"removed"},zn={type:"childadded",child:null},Za={type:"childremoved",child:null};class Ot extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new W,t=new wi,i=new Kt,n=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new St},normalMatrix:{value:new Ge}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qs.copy(e):qs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(hs,qs,this.up):ki.lookAt(qs,hs,this.up),this.quaternion.setFromRotationMatrix(ki),n&&(ki.extractRotation(n.matrixWorld),On.setFromRotationMatrix(ki),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),zn.child=e,this.dispatchEvent(zn),zn.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),zn.child=e,this.dispatchEvent(zn),zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*n,a[13]+=i-a[1]*t-a[5]*i-a[9]*n,a[14]+=n-a[2]*t-a[6]*i-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),u=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.DEFAULT_UP=new W(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tf={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Ja(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=it.workingColorSpace){if(e=df(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=Ja(r,a,e+1/3),this.g=Ja(r,a,e),this.b=Ja(r,a,e-1/3)}return it.colorSpaceToWorking(this,n),this}setStyle(e,t=At){function i(a){a!==void 0&&parseFloat(a)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=Dc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return it.workingToColorSpace(Xt.copy(this),e),Math.round(nt(Xt.r*255,0,255))*65536+Math.round(nt(Xt.g*255,0,255))*256+Math.round(nt(Xt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Xt.copy(this),t);const i=Xt.r,n=Xt.g,a=Xt.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=At){it.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,n=Xt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(en),this.setHSL(en.h+e,en.s+t,en.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(Ys);const i=Wa(en.h,Ys.h,t),n=Wa(en.s,Ys.s,t),a=Wa(en.l,Ys.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new We;We.NAMES=Dc;class es{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new es(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wf extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new W,Bi=new W,Qa=new W,Hi=new W,kn=new W,Bn=new W,Ml=new W,ja=new W,er=new W,tr=new W,ir=new Ct,nr=new Ct,sr=new Ct;class _i{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),mi.subVectors(e,t),n.cross(mi);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){mi.subVectors(n,t),Bi.subVectors(i,t),Qa.subVectors(e,t);const r=mi.dot(mi),o=mi.dot(Bi),l=mi.dot(Qa),c=Bi.dot(Bi),h=Bi.dot(Qa),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-u-g,g,u)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,n,a,r,o,l){return this.getBarycoord(e,t,i,n,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Hi.x),l.addScaledVector(r,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(e,t,i,n,a,r){return ir.setScalar(0),nr.setScalar(0),sr.setScalar(0),ir.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,i),sr.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(ir,a.x),r.addScaledVector(nr,a.y),r.addScaledVector(sr,a.z),r}static isFrontFacing(e,t,i,n){return mi.subVectors(i,t),Bi.subVectors(e,t),mi.cross(Bi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),mi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return _i.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let r,o;kn.subVectors(n,i),Bn.subVectors(a,i),ja.subVectors(e,i);const l=kn.dot(ja),c=Bn.dot(ja);if(l<=0&&c<=0)return t.copy(i);er.subVectors(e,n);const h=kn.dot(er),d=Bn.dot(er);if(h>=0&&d<=h)return t.copy(n);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(kn,r);tr.subVectors(e,a);const u=kn.dot(tr),g=Bn.dot(tr);if(g>=0&&u<=g)return t.copy(a);const x=u*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Bn,o);const p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return Ml.subVectors(a,n),o=(d-h)/(d-h+(u-g)),t.copy(n).addScaledVector(Ml,o);const m=1/(p+x+f);return r=x*m,o=f*m,t.copy(i).addScaledVector(kn,r).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pn{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,gi):gi.fromBufferAttribute(a,r),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const n=e.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Zs.subVectors(this.max,fs),Hn.subVectors(e.a,fs),Gn.subVectors(e.b,fs),Vn.subVectors(e.c,fs),tn.subVectors(Gn,Hn),nn.subVectors(Vn,Gn),dn.subVectors(Hn,Vn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-dn.z,dn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,dn.z,0,-dn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-dn.y,dn.x,0];return!ar(t,Hn,Gn,Vn,Zs)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,Hn,Gn,Vn,Zs))?!1:(Ks.crossVectors(tn,nn),t=[Ks.x,Ks.y,Ks.z],ar(t,Hn,Gn,Vn,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new W,new W,new W,new W,new W,new W,new W,new W],gi=new W,$s=new Pn,Hn=new W,Gn=new W,Vn=new W,tn=new W,nn=new W,dn=new W,fs=new W,Zs=new W,Ks=new W,un=new W;function ar(s,e,t,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){un.fromArray(s,a);const o=n.x*Math.abs(un.x)+n.y*Math.abs(un.y)+n.z*Math.abs(un.z),l=e.dot(un),c=t.dot(un),h=i.dot(un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ut=new W,Js=new ze;let Af=0;class Ti extends In{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=of,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),n=ti(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),n=ti(n,this.array),a=ti(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nc extends Ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends Ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends Ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rf=new Pn,ds=new W,rr=new W;class Bs{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rf.setFromPoints(e).getCenter(i);let n=0;for(let a=0,r=e.length;a<r;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ds,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(rr)),this.expandByPoint(ds.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cf=0;const fi=new St,or=new Ot,Wn=new W,oi=new Pn,us=new Pn,Bt=new W;class Jt extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?Uc:Nc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(oi.min,us.min),oi.expandByPoint(Bt),Bt.addVectors(oi.max,us.max),oi.expandByPoint(Bt)):(oi.expandByPoint(us.min),oi.expandByPoint(us.max))}oi.getCenter(i);let n=0;for(let a=0,r=e.count;a<r;a++)Bt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Bt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(Wn.fromBufferAttribute(e,c),Bt.add(Wn)),n=Math.max(n,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new W,l[S]=new W;const c=new W,h=new W,d=new W,f=new ze,u=new ze,g=new ze,x=new W,p=new W;function m(S,w,C){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,C),f.fromBufferAttribute(a,S),u.fromBufferAttribute(a,w),g.fromBufferAttribute(a,C),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const N=1/(u.x*g.y-g.x*u.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(N),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(N),o[S].add(x),o[w].add(x),o[C].add(x),l[S].add(p),l[w].add(p),l[C].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,w=_.length;S<w;++S){const C=_[S],N=C.start,L=C.count;for(let U=N,z=N+L;U<z;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new W,v=new W,y=new W,T=new W;function A(S){y.fromBufferAttribute(n,S),T.copy(y);const w=o[S];M.copy(w),M.sub(y.multiplyScalar(y.dot(w))).normalize(),v.crossVectors(T,w);const N=v.dot(l[S])<0?-1:1;r.setXYZW(S,M.x,M.y,M.z,N)}for(let S=0,w=_.length;S<w;++S){const C=_[S],N=C.start,L=C.count;for(let U=N,z=N+L;U<z;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const n=new W,a=new W,r=new W,o=new W,l=new W,c=new W,h=new W,d=new W;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),h.subVectors(r,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)n.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,a),d.subVectors(n,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[u++]}return new Ti(f,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lr=new W,If=new W,Pf=new Ge;class rn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=lr.subVectors(i,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(lr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pf.getNormalMatrix(e),n=this.coplanarPoint(lr).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Lf=0;class os extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=ws,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=n(e.textures),r=n(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new rn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vi=new W,cr=new W,Qs=new W,js=new W;class Df{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){cr.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),js.copy(this.origin).sub(cr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Qs),o=js.dot(this.direction),l=-js.dot(Qs),c=js.lengthSq(),h=Math.abs(1-r*r);let d,f,u,g;if(h>0)if(d=r*l-o,f=r*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,u=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),u=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),u=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(cr).addScaledVector(Qs,f),u}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),n=Vi.dot(Vi)-i*i,a=e.radius*e.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,n,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-r.x,f=e.y-r.y,u=e.z-r.z,g=t.x-r.x,x=t.y-r.y,p=t.z-r.z,m=i.x-r.x,_=i.y-r.y,M=i.z-r.z,v=Math.abs(l),y=Math.abs(c),T=Math.abs(h);let A,S,w,C,N,L,U,z,k,Q,X,ee;if(v>=y&&v>=T?(w=l,L=d,k=g,ee=m,l>=0?(A=c,S=h,C=f,N=u,U=x,z=p,Q=_,X=M):(A=h,S=c,C=u,N=f,U=p,z=x,Q=M,X=_)):y>=T?(w=c,L=f,k=x,ee=_,c>=0?(A=h,S=l,C=u,N=d,U=p,z=g,Q=M,X=m):(A=l,S=h,C=d,N=u,U=g,z=p,Q=m,X=M)):(w=h,L=u,k=p,ee=M,h>=0?(A=l,S=c,C=d,N=f,U=g,z=x,Q=m,X=_):(A=c,S=l,C=f,N=d,U=x,z=g,Q=_,X=m)),w===0)return null;const Y=A/w,Z=S/w,j=1/w,me=C-Y*L,we=N-Z*L,st=U-Y*k,qe=z-Z*k,Qe=Q-Y*ee,R=X-Z*ee,O=Qe*qe-R*st,se=me*R-we*Qe,fe=st*we-qe*me;if(n){if(O<0||se<0||fe<0)return null}else if((O<0||se<0||fe<0)&&(O>0||se>0||fe>0))return null;const ce=O+se+fe;if(ce===0)return null;const pe=j*(O*L+se*k+fe*ee);return(ce>0?pe<0:pe>0)?null:this.at(pe/ce,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sl=new St,pn=new Df,ea=new Bs,bl=new W,ta=new W,ia=new W,na=new W,hr=new W,sa=new W,yl=new W,aa=new W;class xt extends Ot{constructor(e=new Jt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){sa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(hr.fromBufferAttribute(d,e),r?sa.addScaledVector(hr,h):sa.addScaledVector(hr.sub(t),h))}t.add(sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(a),pn.copy(e.ray).recast(e.near),!(ea.containsPoint(pn.origin)===!1&&(pn.intersectSphere(ea,bl)===null||pn.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Sl.copy(a).invert(),pn.copy(e.ray).applyMatrix4(Sl),!(i.boundingBox!==null&&pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pn)))}_computeIntersections(e,t,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=r[p.materialIndex],_=Math.max(p.start,u.start),M=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let v=_,y=M;v<y;v+=3){const T=o.getX(v),A=o.getX(v+1),S=o.getX(v+2);n=ra(this,m,e,i,c,h,d,T,A,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=g,m=x;p<m;p+=3){const _=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);n=ra(this,r,e,i,c,h,d,_,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=r[p.materialIndex],_=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=_,y=M;v<y;v+=3){const T=v,A=v+1,S=v+2;n=ra(this,m,e,i,c,h,d,T,A,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=g,m=x;p<m;p+=3){const _=p,M=p+1,v=p+2;n=ra(this,r,e,i,c,h,d,_,M,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Nf(s,e,t,i,n,a,r,o){let l;if(e.side===ai?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,e.side===En,o),l===null)return null;aa.copy(o),aa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:s}}function ra(s,e,t,i,n,a,r,o,l,c){s.getVertexPosition(o,ta),s.getVertexPosition(l,ia),s.getVertexPosition(c,na);const h=Nf(s,e,t,i,ta,ia,na,yl);if(h){const d=new W;_i.getBarycoord(yl,ta,ia,na,d),n&&(h.uv=_i.getInterpolatedAttribute(n,o,l,c,d,new ze)),a&&(h.uv1=_i.getInterpolatedAttribute(a,o,l,c,d,new ze)),r&&(h.normal=_i.getInterpolatedAttribute(r,o,l,c,d,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};_i.getNormal(ta,ia,na,f.normal),h.face=f,h.barycoord=d}return h}class Fc extends Zt{constructor(e=null,t=1,i=1,n,a,r,o,l,c=_t,h=_t,d,f){super(null,r,o,l,c,h,n,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Aa extends Ti{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xn=new St,El=new St,oa=[],Tl=new Pn,Uf=new St,ps=new xt,ms=new Bs;class Oc extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Uf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xn),Tl.copy(e.boundingBox).applyMatrix4(Xn),this.boundingBox.union(Tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xn),ms.copy(e.boundingSphere).applyMatrix4(Xn),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(i),e.ray.intersectsSphere(ms)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Xn),El.multiplyMatrices(i,Xn),ps.matrixWorld=El,ps.raycast(e,oa);for(let r=0,o=oa.length;r<o;r++){const l=oa[r];l.instanceId=a,l.object=this,t.push(l)}oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(n*this.count),n,this.count,yo,Mi));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mn=new Bs,Ff=new ze(.5,.5),la=new W;class Io{constructor(e=new rn,t=new rn,i=new rn,n=new rn,a=new rn,r=new rn){this.planes=[e,t,i,n,a,r]}set(e,t,i,n,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di,i=!1){const n=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],u=a[7],g=a[8],x=a[9],p=a[10],m=a[11],_=a[12],M=a[13],v=a[14],y=a[15];if(n[0].setComponents(c-r,u-h,m-g,y-_).normalize(),n[1].setComponents(c+r,u+h,m+g,y+_).normalize(),n[2].setComponents(c+o,u+d,m+x,y+M).normalize(),n[3].setComponents(c-o,u-d,m-x,y-M).normalize(),i)n[4].setComponents(l,f,p,v).normalize(),n[5].setComponents(c-l,u-f,m-p,y-v).normalize();else if(n[4].setComponents(c-l,u-f,m-p,y-v).normalize(),t===Di)n[5].setComponents(c+l,u+f,m+p,y+v).normalize();else if(t===Ls)n[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){mn.center.set(0,0,0);const t=Ff.distanceTo(e.center);return mn.radius=.7071067811865476+t,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(la.x=n.normal.x>0?e.max.x:e.min.x,la.y=n.normal.y>0?e.max.y:e.min.y,la.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zc extends Zt{constructor(e=[],t=Tn,i,n,a,r,o,l,c,h){super(e,t,i,n,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oi extends Zt{constructor(e,t,i,n,a,r,o,l,c){super(e,t,i,n,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends Zt{constructor(e,t,i=Ni,n,a,r,o=_t,l=_t,c,h=Zi,d=1){if(h!==Zi&&h!==Sn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,n,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Of extends Ds{constructor(e,t=Ni,i=Tn,n,a,r=_t,o=_t,l,c=Zi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kc extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yt extends Jt{constructor(e=1,t=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function g(x,p,m,_,M,v,y,T,A,S,w){const C=v/A,N=y/S,L=v/2,U=y/2,z=T/2,k=A+1,Q=S+1;let X=0,ee=0;const Y=new W;for(let Z=0;Z<Q;Z++){const j=Z*N-U;for(let me=0;me<k;me++){const we=me*C-L;Y[x]=we*_,Y[p]=j*M,Y[m]=z,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[m]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(me/A),d.push(1-Z/S),X+=1}}for(let Z=0;Z<S;Z++)for(let j=0;j<A;j++){const me=f+j+k*Z,we=f+j+k*(Z+1),st=f+(j+1)+k*(Z+1),qe=f+(j+1)+k*Z;l.push(me,we,qe),l.push(we,st,qe),ee+=6}o.addGroup(u,ee,w),u+=ee,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Je extends Jt{constructor(e=1,t=1,i=1,n=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),a=Math.floor(a);const h=[],d=[],f=[],u=[];let g=0;const x=[],p=i/2;let m=0;_(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(u,2));function _(){const v=new W,y=new W;let T=0;const A=(t-e)/i;for(let S=0;S<=a;S++){const w=[],C=S/a,N=C*(t-e)+e;for(let L=0;L<=n;L++){const U=L/n,z=U*l+o,k=Math.sin(z),Q=Math.cos(z);y.x=N*k,y.y=-C*i+p,y.z=N*Q,d.push(y.x,y.y,y.z),v.set(k,A,Q).normalize(),f.push(v.x,v.y,v.z),u.push(U,1-C),w.push(g++)}x.push(w)}for(let S=0;S<n;S++)for(let w=0;w<a;w++){const C=x[w][S],N=x[w+1][S],L=x[w+1][S+1],U=x[w][S+1];(e>0||w!==0)&&(h.push(C,N,U),T+=3),(t>0||w!==a-1)&&(h.push(N,L,U),T+=3)}c.addGroup(m,T,0),m+=T}function M(v){const y=g,T=new ze,A=new W;let S=0;const w=v===!0?e:t,C=v===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,p*C,0),f.push(0,C,0),u.push(.5,.5),g++;const N=g;for(let L=0;L<=n;L++){const z=L/n*l+o,k=Math.cos(z),Q=Math.sin(z);A.x=w*Q,A.y=p*C,A.z=w*k,d.push(A.x,A.y,A.z),f.push(0,C,0),T.x=k*.5+.5,T.y=Q*.5*C+.5,u.push(T.x,T.y),g++}for(let L=0;L<n;L++){const U=y+L,z=N+L;v===!0?h.push(z,z+1,U):h.push(z+1,z,U),S+=3}c.addGroup(m,S,v===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends Je{constructor(e=1,t=1,i=32,n=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,n,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Ns(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends Jt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const a=[],r=[];o(n),c(i),h(),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(a.slice(),3)),this.setAttribute("uv",new Et(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new W,v=new W,y=new W;for(let T=0;T<t.length;T+=3)u(t[T+0],M),u(t[T+1],v),u(t[T+2],y),l(M,v,y,_)}function l(_,M,v,y){const T=y+1,A=[];for(let S=0;S<=T;S++){A[S]=[];const w=_.clone().lerp(v,S/T),C=M.clone().lerp(v,S/T),N=T-S;for(let L=0;L<=N;L++)L===0&&S===T?A[S][L]=w:A[S][L]=w.clone().lerp(C,L/N)}for(let S=0;S<T;S++)for(let w=0;w<2*(T-S)-1;w++){const C=Math.floor(w/2);w%2===0?(f(A[S][C+1]),f(A[S+1][C]),f(A[S][C])):(f(A[S][C+1]),f(A[S+1][C+1]),f(A[S+1][C]))}}function c(_){const M=new W;for(let v=0;v<a.length;v+=3)M.x=a[v+0],M.y=a[v+1],M.z=a[v+2],M.normalize().multiplyScalar(_),a[v+0]=M.x,a[v+1]=M.y,a[v+2]=M.z}function h(){const _=new W;for(let M=0;M<a.length;M+=3){_.x=a[M+0],_.y=a[M+1],_.z=a[M+2];const v=p(_)/2/Math.PI+.5,y=m(_)/Math.PI+.5;r.push(v,1-y)}g(),d()}function d(){for(let _=0;_<r.length;_+=6){const M=r[_+0],v=r[_+2],y=r[_+4],T=Math.max(M,v,y),A=Math.min(M,v,y);T>.9&&A<.1&&(M<.2&&(r[_+0]+=1),v<.2&&(r[_+2]+=1),y<.2&&(r[_+4]+=1))}}function f(_){a.push(_.x,_.y,_.z)}function u(_,M){const v=_*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const _=new W,M=new W,v=new W,y=new W,T=new ze,A=new ze,S=new ze;for(let w=0,C=0;w<a.length;w+=9,C+=6){_.set(a[w+0],a[w+1],a[w+2]),M.set(a[w+3],a[w+4],a[w+5]),v.set(a[w+6],a[w+7],a[w+8]),T.set(r[C+0],r[C+1]),A.set(r[C+2],r[C+3]),S.set(r[C+4],r[C+5]),y.copy(_).add(M).add(v).divideScalar(3);const N=p(y);x(T,C+0,_,N),x(A,C+2,M,N),x(S,C+4,v,N)}}function x(_,M,v,y){y<0&&_.x===1&&(r[M]=_.x-1),v.x===0&&v.z===0&&(r[M]=y/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.vertices,e.indices,e.radius,e.detail)}}class Ra extends Da{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}class Ca extends Da{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ca(e.radius,e.detail)}}class Rt extends Jt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,f=t/l,u=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const _=m*f-r;for(let M=0;M<c;M++){const v=M*d-a;g.push(v,-_,0),x.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const M=_+c*m,v=_+c*(m+1),y=_+1+c*(m+1),T=_+1+c*m;u.push(M,v,T),u.push(v,y,T)}this.setIndex(u),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Po extends Jt{constructor(e=.5,t=1,i=32,n=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/n,u=new W,g=new ze;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){const m=a+p/i*r;u.x=d*Math.cos(m),u.y=d*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<n;x++){const p=x*(i+1);for(let m=0;m<i;m++){const _=m+p,M=_,v=_+i+1,y=_+i+2,T=_+1;o.push(M,v,T),o.push(v,y,T)}}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bn extends Jt{constructor(e=1,t=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new W,f=new W,u=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const _=[],M=m/i,v=r+M*o,y=e*Math.cos(v),T=Math.sqrt(e*e-y*y);let A=0;m===0&&r===0?A=.5/t:m===i&&l===Math.PI&&(A=-.5/t);for(let S=0;S<=t;S++){const w=S/t,C=n+w*a;d.x=-T*Math.cos(C),d.y=y,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(w+A,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){const M=h[m][_+1],v=h[m][_],y=h[m+1][_],T=h[m+1][_+1];(m!==0||r>0)&&u.push(M,v,T),(m!==i-1||l<Math.PI)&&u.push(v,y,T)}this.setIndex(u),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends Jt{constructor(e=1,t=.4,i=12,n=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],f=new W,u=new W,g=new W;for(let x=0;x<=i;x++){const p=r+x/i*o;for(let m=0;m<=n;m++){const _=m/n*a;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),c.push(u.x,u.y,u.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),d.push(m/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=n;p++){const m=(n+1)*x+p-1,_=(n+1)*(x-1)+p-1,M=(n+1)*(x-1)+p,v=(n+1)*x+p;l.push(m,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function as(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];if(wl(n))n.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(wl(n[0])){const a=[];for(let r=0,o=n.length;r<o;r++)a[r]=n[r].clone();e[t][i]=a}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ei(s){const e={};for(let t=0;t<s.length;t++){const i=as(s[t]);for(const n in i)e[n]=i[n]}return e}function wl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function zf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const kf={clone:as,merge:ei};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(n.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(n.value);break;case"v3":this.uniforms[i].value=new W().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(n.value);break;case"m4":this.uniforms[i].value=new St().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gf extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vf extends os{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ln extends os{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wf extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xf extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lo extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class qf extends Lo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const fr=new St,Al=new W,Rl=new W;class Hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fr,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=n?n.z/a.x:1,o=n?n.w/a.y:1,l=n?n.x/a.x:0,c=n?n.y/a.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ca=new W,ha=new Kt,Ci=new W;class Gc extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,ha,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ca,ha,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sn=new W,Cl=new ze,Il=new ze;class li extends Gc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sn.x,sn.y).multiplyScalar(-e/sn.z),sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sn.x,sn.y).multiplyScalar(-e/sn.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Il),t.subVectors(Il,Cl)}setViewOffset(e,t,i,n,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yf extends Hc{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class fa extends Lo{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Yf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Do extends Gc{constructor(e=-1,t=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $f extends Hc{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dr extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new $f}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qn=-90,Yn=1;class Zf extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new li(qn,Yn,e,t);n.layers=this.layers,this.add(n);const a=new li(qn,Yn,e,t);a.layers=this.layers,this.add(a);const r=new li(qn,Yn,e,t);r.layers=this.layers,this.add(r);const o=new li(qn,Yn,e,t);o.layers=this.layers,this.add(o);const l=new li(qn,Yn,e,t);l.layers=this.layers,this.add(l);const c=new li(qn,Yn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kf extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xo=class Xo{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=n,this}};Xo.prototype.isMatrix2=!0;let Pl=Xo;function Ll(s,e,t,i){const n=Jf(i);switch(t){case Rc:return s*e;case yo:return s*e/n.components*n.byteLength;case Eo:return s*e/n.components*n.byteLength;case An:return s*e*2/n.components*n.byteLength;case To:return s*e*2/n.components*n.byteLength;case Cc:return s*e*3/n.components*n.byteLength;case Si:return s*e*4/n.components*n.byteLength;case wo:return s*e*4/n.components*n.byteLength;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xa:case va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fr:case zr:return Math.max(s,16)*Math.max(e,8)/4;case Ur:case Or:return Math.max(s,8)*Math.max(e,8)/2;case kr:case Br:case Gr:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Sa:case Wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ao:case ro:case oo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ba:case ho:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jf(s){switch(s){case ci:case Ec:return{byteLength:1,components:1};case Is:case Tc:case Ui:return{byteLength:2,components:1};case So:case bo:return{byteLength:2,components:4};case Ni:case Mo:case Mi:return{byteLength:4,components:1};case wc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vc(){let s=null,e=!1,t=null,i=null;function n(a,r){i=s.requestAnimationFrame(n),t(a,r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Qf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],x=d[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:r}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ru=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:jf,alphahash_pars_fragment:ed,alphamap_fragment:td,alphamap_pars_fragment:id,alphatest_fragment:nd,alphatest_pars_fragment:sd,aomap_fragment:ad,aomap_pars_fragment:rd,batching_pars_vertex:od,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:fd,iridescence_fragment:dd,bumpmap_pars_fragment:ud,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:_d,color_pars_vertex:Md,color_vertex:Sd,common:bd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Td,displacementmap_vertex:wd,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:zd,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:jd,lights_fragment_end:eu,lightprobes_pars_fragment:tu,logdepthbuf_fragment:iu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:su,logdepthbuf_vertex:au,map_fragment:ru,map_pars_fragment:ou,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:fu,morphinstance_vertex:du,morphcolor_vertex:uu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:gu,normal_fragment_begin:xu,normal_fragment_maps:vu,normal_pars_fragment:_u,normal_pars_vertex:Mu,normal_vertex:Su,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Eu,clearcoat_pars_fragment:Tu,iridescence_pars_fragment:wu,opaque_fragment:Au,packing:Ru,premultiplied_alpha_fragment:Cu,project_vertex:Iu,dithering_fragment:Pu,dithering_pars_fragment:Lu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Uu,shadowmap_pars_vertex:Fu,shadowmap_vertex:Ou,shadowmask_pars_fragment:zu,skinbase_vertex:ku,skinning_pars_vertex:Bu,skinning_vertex:Hu,skinnormal_vertex:Gu,specularmap_fragment:Vu,specularmap_pars_fragment:Wu,tonemapping_fragment:Xu,tonemapping_pars_fragment:qu,transmission_fragment:Yu,transmission_pars_fragment:$u,uv_pars_fragment:Zu,uv_pars_vertex:Ku,uv_vertex:Ju,worldpos_vertex:Qu,background_vert:ju,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:i0,cube_vert:n0,cube_frag:s0,depth_vert:a0,depth_frag:r0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:h0,linedashed_vert:f0,linedashed_frag:d0,meshbasic_vert:u0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:x0,meshmatcap_frag:v0,meshnormal_vert:_0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:b0,meshphysical_vert:y0,meshphysical_frag:E0,meshtoon_vert:T0,meshtoon_frag:w0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:I0,sprite_vert:P0,sprite_frag:L0},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Li={basic:{uniforms:ei([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ei([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ei([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ei([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ei([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ei([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ei([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ei([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ei([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ei([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ei([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ei([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ei([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Li.physical={uniforms:ei([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const da={r:0,b:0,g:0},D0=new St,Wc=new Ge;Wc.set(-1,0,0,0,1,0,0,0,1);function N0(s,e,t,i,n,a){const r=new We(0);let o=n===!0?0:1,l,c,h=null,d=0,f=null;function u(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const v=_.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(_){let M=!1;const v=u(_);v===null?p(r,o):v&&v.isColor&&(p(v,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,M){const v=u(M);v&&(v.isCubeTexture||v.mapping===La)?(c===void 0&&(c=new xt(new Yt(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:as(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wc),c.material.toneMapped=it.getTransfer(v.colorSpace)!==pt,(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xt(new Rt(2,2),new Fi({name:"BackgroundMaterial",uniforms:as(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=it.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(da,Bc(s)),t.buffers.color.setClear(da.r,da.g,da.b,M,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,M=1){r.set(_),o=M,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(r,o)},render:g,addToRenderList:x,dispose:m}}function U0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let a=n,r=!1;function o(N,L,U,z,k){let Q=!1;const X=d(N,z,U,L);a!==X&&(a=X,c(a.object)),Q=u(N,z,U,k),Q&&g(N,z,U,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,v(N,L,U,z),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,L,U,z){const k=z.wireframe===!0;let Q=i[L.id];Q===void 0&&(Q={},i[L.id]=Q);const X=N.isInstancedMesh===!0?N.id:0;let ee=Q[X];ee===void 0&&(ee={},Q[X]=ee);let Y=ee[U.id];Y===void 0&&(Y={},ee[U.id]=Y);let Z=Y[k];return Z===void 0&&(Z=f(l()),Y[k]=Z),Z}function f(N){const L=[],U=[],z=[];for(let k=0;k<t;k++)L[k]=0,U[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:z,object:N,attributes:{},index:null}}function u(N,L,U,z){const k=a.attributes,Q=L.attributes;let X=0;const ee=U.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const j=k[Y];let me=Q[Y];if(me===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),j===void 0||j.attribute!==me||me&&j.data!==me.data)return!0;X++}return a.attributesNum!==X||a.index!==z}function g(N,L,U,z){const k={},Q=L.attributes;let X=0;const ee=U.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let j=Q[Y];j===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));const me={};me.attribute=j,j&&j.data&&(me.data=j.data),k[Y]=me,X++}a.attributes=k,a.attributesNum=X,a.index=z}function x(){const N=a.newAttributes;for(let L=0,U=N.length;L<U;L++)N[L]=0}function p(N){m(N,0)}function m(N,L){const U=a.newAttributes,z=a.enabledAttributes,k=a.attributeDivisors;U[N]=1,z[N]===0&&(s.enableVertexAttribArray(N),z[N]=1),k[N]!==L&&(s.vertexAttribDivisor(N,L),k[N]=L)}function _(){const N=a.newAttributes,L=a.enabledAttributes;for(let U=0,z=L.length;U<z;U++)L[U]!==N[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function M(N,L,U,z,k,Q,X){X===!0?s.vertexAttribIPointer(N,L,U,k,Q):s.vertexAttribPointer(N,L,U,z,k,Q)}function v(N,L,U,z){x();const k=z.attributes,Q=U.getAttributes(),X=L.defaultAttributeValues;for(const ee in Q){const Y=Q[ee];if(Y.location>=0){let Z=k[ee];if(Z===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){const j=Z.normalized,me=Z.itemSize,we=e.get(Z);if(we===void 0)continue;const st=we.buffer,qe=we.type,Qe=we.bytesPerElement,R=qe===s.INT||qe===s.UNSIGNED_INT||Z.gpuType===Mo;if(Z.isInterleavedBufferAttribute){const O=Z.data,se=O.stride,fe=Z.offset;if(O.isInstancedInterleavedBuffer){for(let ce=0;ce<Y.locationSize;ce++)m(Y.location+ce,O.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ce=0;ce<Y.locationSize;ce++)p(Y.location+ce);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ce=0;ce<Y.locationSize;ce++)M(Y.location+ce,me/Y.locationSize,qe,j,se*Qe,(fe+me/Y.locationSize*ce)*Qe,R)}else{if(Z.isInstancedBufferAttribute){for(let O=0;O<Y.locationSize;O++)m(Y.location+O,Z.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let O=0;O<Y.locationSize;O++)p(Y.location+O);s.bindBuffer(s.ARRAY_BUFFER,st);for(let O=0;O<Y.locationSize;O++)M(Y.location+O,me/Y.locationSize,qe,j,me*Qe,me/Y.locationSize*O*Qe,R)}}else if(X!==void 0){const j=X[ee];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Y.location,j);break;case 3:s.vertexAttrib3fv(Y.location,j);break;case 4:s.vertexAttrib4fv(Y.location,j);break;default:s.vertexAttrib1fv(Y.location,j)}}}}_()}function y(){w();for(const N in i){const L=i[N];for(const U in L){const z=L[U];for(const k in z){const Q=z[k];for(const X in Q)h(Q[X].object),delete Q[X];delete z[k]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const L=i[N.id];for(const U in L){const z=L[U];for(const k in z){const Q=z[k];for(const X in Q)h(Q[X].object),delete Q[X];delete z[k]}}delete i[N.id]}function A(N){for(const L in i){const U=i[L];for(const z in U){const k=U[z];if(k[N.id]===void 0)continue;const Q=k[N.id];for(const X in Q)h(Q[X].object),delete Q[X];delete k[N.id]}}}function S(N){for(const L in i){const U=i[L],z=N.isInstancedMesh===!0?N.id:0,k=U[z];if(k!==void 0){for(const Q in k){const X=k[Q];for(const ee in X)h(X[ee].object),delete X[ee];delete k[Q]}delete U[z],Object.keys(U).length===0&&delete i[L]}}}function w(){C(),r=!0,a!==n&&(a=n,c(a.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function F0(s,e,t){let i;function n(l){i=l}function a(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,i,1)}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function O0(s,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){return!(A!==Si&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const S=A===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ci&&A!==Mi&&!S&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:T}}function z0(s){const e=this;let t=null,i=0,n=!1,a=!1;const r=new rn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||a&&!p)a?h(null):c();else{const _=a?0:i,M=_*4;let v=m.clippingState||null;l.value=v,v=h(g,f,M,u);for(let y=0;y!==M;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,u,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=u+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=u;M!==x;++M,v+=4)r.copy(d[M]).applyMatrix4(_,o),r.normal.toArray(p,v),p[v+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const ts=4,k0=6,B0=20,H0=256,gs=new Do,Dl=new We;let ur=null,pr=0,mr=0,gr=!1;const G0=new W,gn=new W;class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,a={}){const{size:r=256,position:o=G0}=a;ur=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ur,pr,mr),this._renderer.xr.enabled=gr,e.scissorTest=!1,$n(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tn||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ur=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ui,format:Si,colorSpace:Ea,depthBuffer:!1},n=Ul(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=V0(a)),this._blurMaterial=X0(a,e,t),this._ggxMaterial=W0(a,e,t)}return n}_compileMaterial(e){const t=new xt(new Jt,e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,i,n,a){const l=new li(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Dl),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Yt,new Dt({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Dl),m=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[M],a.y,a.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[M],a.z)):(l.up.set(0,c[M],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[M]));const y=this._cubeSize;$n(n,v*y,M>2?y:0,y,y),d.setRenderTarget(n),m&&d.render(x,l),d.render(e,l)}d.toneMapping=u,d.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Tn||e.mapping===ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const a=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;$n(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,gs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let a=1;a<n;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-ts?i-g+ts:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=g-t,$n(a,p,m,3*x,2*x),n.setRenderTarget(a),n.render(o,gs),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,$n(e,p,m,3*x,2*x),n.setRenderTarget(e),n.render(o,gs)}_blur(e,t,i,n){const a=this._pingPongRenderTarget,r=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,n,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],d=3*h*(n>this._lodMax-ts?n-this._lodMax+ts:0),f=4*(this._cubeSize-h);$n(t,d,f,3*h,2*h),r.setRenderTarget(t),r.render(l,gs)}}function V0(s){const e=[],t=[];let i=s;const n=s-ts+1+k0;for(let a=0;a<n;a++){const r=Math.pow(2,i);e.push(r);const o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,g=new Float32Array(u*f*d),x=new Float32Array(u*f*d);for(let m=0;m<d;m++){const _=m%3*2/3-1,M=m>2?0:-1,v=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(v,u*f*m);for(let y=0;y<f;y++){const T=h[y*2]*2-1,A=h[y*2+1]*2-1;m===0?gn.set(1,A,T):m===1?gn.set(-T,1,-A):m===2?gn.set(-T,A,1):m===3?gn.set(-1,A,-T):m===4?gn.set(-T,-1,A):gn.set(T,A,-1),gn.toArray(x,(m*f+y)*u)}}const p=new Jt;p.setAttribute("position",new Ti(g,u)),p.setAttribute("outputDirection",new Ti(x,u)),t.push(new xt(p,null)),i>ts&&i--}return{lodMeshes:t,sizeLods:e}}function Ul(s,e,t){const i=new Ei(s,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $n(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function W0(s,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function X0(s,e,t){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:B0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Fl(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ol(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xc extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new zc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Yt(5,5,5),a=new Fi({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:Xi});a.uniforms.tEquirect.value=t;const r=new xt(n,a),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=$t),new Zf(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(a)}}function q0(s){let e=new WeakMap,t=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?r(f):a(f)}function a(f){if(f&&f.isTexture){const u=f.mapping;if(u===ka||u===Ba)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new Xc(g.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){const u=f.mapping,g=u===ka||u===Ba,x=u===Tn||u===ss;if(g||x){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Nl(s)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const _=f.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Nl(s)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===ka?f.mapping=Tn:u===Ba&&(f.mapping=ss),f}function l(f){let u=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&u++;return u===g}function c(f){const u=f.target;u.removeEventListener("dispose",c);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Y0(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&is("WebGLRenderer: "+i+" extension not supported."),n}}}function $0(s,e,t,i){const n={},a=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete n[f.id];const u=a.get(f);u&&(e.remove(u),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return n[f.id]===!0||(f.addEventListener("dispose",r),n[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)e.update(f[u],s.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(u!==null){const _=u.array;x=u.version;for(let M=0,v=_.length;M<v;M+=3){const y=_[M+0],T=_[M+1],A=_[M+2];f.push(y,T,T,A,A,y)}}else{const _=g.array;x=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){const y=M+0,T=M+1,A=M+2;f.push(y,T,T,A,A,y)}}const p=new(g.count>=65535?Uc:Nc)(f,1);p.version=x;const m=a.get(d);m&&e.remove(m),a.set(d,p)}function h(d){const f=a.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Z0(s,e,t){let i;function n(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(i,f,a,d*r),t.update(f,i,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(i,f,a,d*r,u),t.update(f,i,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,d,0,u);let x=0;for(let p=0;p<u;p++)x+=f[p];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function K0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:ct("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function J0(s,e,t){const i=new WeakMap,n=new Ct;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let C=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var u=C;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),p===!0&&(v=3);let y=o.attributes.position.count*v,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*T*4*d),S=new Pc(A,y,T,d);S.type=Mi,S.needsUpdate=!0;const w=v*4;for(let N=0;N<d;N++){const L=m[N],U=_[N],z=M[N],k=y*T*4*N;for(let Q=0;Q<L.count;Q++){const X=Q*w;g===!0&&(n.fromBufferAttribute(L,Q),A[k+X+0]=n.x,A[k+X+1]=n.y,A[k+X+2]=n.z,A[k+X+3]=0),x===!0&&(n.fromBufferAttribute(U,Q),A[k+X+4]=n.x,A[k+X+5]=n.y,A[k+X+6]=n.z,A[k+X+7]=0),p===!0&&(n.fromBufferAttribute(z,Q),A[k+X+8]=n.x,A[k+X+9]=n.y,A[k+X+10]=n.z,A[k+X+11]=z.itemSize===4?n.w:1)}}f={count:d,texture:S,size:new ze(y,T)},i.set(o,f),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function Q0(s,e,t,i,n){let a=new WeakMap;function r(c){const h=n.render.frame,d=c.geometry,f=e.get(c,d);if(a.get(f)!==h&&(e.update(f),a.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==h&&(u.update(),a.set(u,h))}return f}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const j0={[gc]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[_c]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function ep(s,e,t,i,n,a){const r=new Ei(e,t,{type:s,depthBuffer:n,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Jt;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));const h=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(c,h),f=new Do(-1,1,1,-1,0,1);let u=null,g=null,x=!1,p,m=null,_=[],M=!1;this.setSize=function(v,y){r.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let T=0;T<_.length;T++){const A=_[T];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){_=v,M=_.length>0&&_[0].isRenderPass===!0;const y=r.width,T=r.height;_.length>0&&o===null&&(o=new Ei(y,T,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new Ei(y,T,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){const S=_[A];S.setSize&&S.setSize(y,T)}},this.begin=function(v,y){if(x||v.toneMapping===yi&&_.length===0)return!1;if(m=y,y!==null){const T=y.width,A=y.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return M===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=yi,!0},this.hasRenderPass=function(){return M},this.end=function(v,y){v.toneMapping=p,x=!0;let T=r,A=o;for(let S=0;S<_.length;S++){const w=_[S];w.enabled!==!1&&(w.render(v,A,T,y),w.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(u!==v.outputColorSpace||g!==v.toneMapping){u=v.outputColorSpace,g=v.toneMapping,h.defines={},it.getTransfer(u)===pt&&(h.defines.SRGB_TRANSFER="");const S=j0[g];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(d,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const qc=new Zt,uo=new Ds(1,1),Yc=new Pc,$c=new vf,Zc=new zc,zl=[],kl=[],Bl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function ls(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let a=zl[n];if(a===void 0&&(a=new Float32Array(n),zl[n]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ua(s,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function tp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function ap(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Gl.set(i),s.uniformMatrix2fv(this.addr,!1,Gl),kt(t,i)}}function rp(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Hl.set(i),s.uniformMatrix3fv(this.addr,!1,Hl),kt(t,i)}}function op(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Bl.set(i),s.uniformMatrix4fv(this.addr,!1,Bl),kt(t,i)}}function lp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function dp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function gp(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?(uo.compareFunction=t.isReversedDepthBuffer()?Ro:Ao,a=uo):a=qc,t.setTexture2D(e||a,n)}function xp(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||$c,n)}function vp(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Zc,n)}function _p(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Yc,n)}function Mp(s){switch(s){case 5126:return tp;case 35664:return ip;case 35665:return np;case 35666:return sp;case 35674:return ap;case 35675:return rp;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return fp;case 5125:return dp;case 36294:return up;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return _p}}function Sp(s,e){s.uniform1fv(this.addr,e)}function bp(s,e){const t=ls(e,this.size,2);s.uniform2fv(this.addr,t)}function yp(s,e){const t=ls(e,this.size,3);s.uniform3fv(this.addr,t)}function Ep(s,e){const t=ls(e,this.size,4);s.uniform4fv(this.addr,t)}function Tp(s,e){const t=ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wp(s,e){const t=ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ap(s,e){const t=ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Rp(s,e){s.uniform1iv(this.addr,e)}function Cp(s,e){s.uniform2iv(this.addr,e)}function Ip(s,e){s.uniform3iv(this.addr,e)}function Pp(s,e){s.uniform4iv(this.addr,e)}function Lp(s,e){s.uniform1uiv(this.addr,e)}function Dp(s,e){s.uniform2uiv(this.addr,e)}function Np(s,e){s.uniform3uiv(this.addr,e)}function Up(s,e){s.uniform4uiv(this.addr,e)}function Fp(s,e,t){const i=this.cache,n=e.length,a=Ua(t,n);zt(i,a)||(s.uniform1iv(this.addr,a),kt(i,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=uo:r=qc;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||r,a[o])}function Op(s,e,t){const i=this.cache,n=e.length,a=Ua(t,n);zt(i,a)||(s.uniform1iv(this.addr,a),kt(i,a));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||$c,a[r])}function zp(s,e,t){const i=this.cache,n=e.length,a=Ua(t,n);zt(i,a)||(s.uniform1iv(this.addr,a),kt(i,a));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Zc,a[r])}function kp(s,e,t){const i=this.cache,n=e.length,a=Ua(t,n);zt(i,a)||(s.uniform1iv(this.addr,a),kt(i,a));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Yc,a[r])}function Bp(s){switch(s){case 5126:return Sp;case 35664:return bp;case 35665:return yp;case 35666:return Ep;case 35674:return Tp;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Ip;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}class Hp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mp(t.type)}}class Gp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bp(t.type)}}class Vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function Vl(s,e){s.seq.push(e),s.map[e.id]=e}function Wp(s,e,t){const i=s.name,n=i.length;for(xr.lastIndex=0;;){const a=xr.exec(i),r=xr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){Vl(t,c===void 0?new Hp(o,s,e):new Gp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Vp(o),Vl(t,d)),t=d}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Wp(o,l,this)}const n=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):a.push(r);n.length>0&&(this.seq=n.concat(a))}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Wl(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Xp=37297;let qp=0;function Yp(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const Xl=new Ge;function $p(s){it._getMatrix(Xl,it.workingColorSpace,s);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Ta:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ql(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Yp(s.getShaderSource(e),o)}else return a}function Zp(s,e){const t=$p(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Kp={[gc]:"Linear",[xc]:"Reinhard",[vc]:"Cineon",[_c]:"ACESFilmic",[Sc]:"AgX",[bc]:"Neutral",[Mc]:"Custom"};function Jp(s,e){const t=Kp[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ua=new W;function Qp(){it.getLuminanceCoefficients(ua);const s=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function em(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tm(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(e,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Ts(s){return s!==""}function Yl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(s){return s.replace(im,sm)}const nm=new Map;function sm(s,e){let t=Ke[e];if(t===void 0){const i=nm.get(e);if(i!==void 0)t=Ke[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return po(t)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(s){return s.replace(am,rm)}function rm(s,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Kl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const om={[pa]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function lm(s){return om[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cm={[Tn]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function hm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cm[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const fm={[ss]:"ENVMAP_MODE_REFRACTION"};function dm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":fm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const um={[Pa]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function pm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":um[s.combine]||"ENVMAP_BLENDING_NONE"}function mm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gm(s,e,t,i){const n=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=lm(t),c=hm(t),h=dm(t),d=pm(t),f=mm(t),u=jp(t),g=em(a),x=n.createProgram();let p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==yi?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Zp("linearToOutputTexel",t.outputColorSpace),Qp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),r=po(r),r=Yl(r,t),r=$l(r,t),o=po(o),o=Yl(o,t),o=$l(o,t),r=Zl(r),o=Zl(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=_+p+r,v=_+m+o,y=Wl(n,n.VERTEX_SHADER,M),T=Wl(n,n.FRAGMENT_SHADER,v);n.attachShader(x,y),n.attachShader(x,T),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(N){if(s.debug.checkShaderErrors){const L=n.getProgramInfoLog(x)||"",U=n.getShaderInfoLog(y)||"",z=n.getShaderInfoLog(T)||"",k=L.trim(),Q=U.trim(),X=z.trim();let ee=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,y,T);else{const Z=ql(n,y,"vertex"),j=ql(n,T,"fragment");ct("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Z+`
`+j)}else k!==""?He("WebGLProgram: Program Info Log:",k):(Q===""||X==="")&&(Y=!1);Y&&(N.diagnostics={runnable:ee,programLog:k,vertexShader:{log:Q,prefix:p},fragmentShader:{log:X,prefix:m}})}n.deleteShader(y),n.deleteShader(T),S=new Ma(n,x),w=tm(n,x)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(x,Xp)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=T,this}let xm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _m(e),t.set(e,i)),i}}class _m{constructor(e){this.id=xm++,this.code=e,this.usedTimes=0}}function Mm(s){return s===An||s===Sa||s===ba}function Sm(s,e,t,i,n,a){const r=new Lc,o=new vm,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,w,C,N,L,U){const z=N.fog,k=L.geometry,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ee=e.get(S.envMap||Q,X),Y=ee&&ee.mapping===La?ee.image.height:null,Z=u[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&He("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=j!==void 0?j.length:0;let we=0;k.morphAttributes.position!==void 0&&(we=1),k.morphAttributes.normal!==void 0&&(we=2),k.morphAttributes.color!==void 0&&(we=3);let st,qe,Qe,R;if(Z){const bt=Li[Z];st=bt.vertexShader,qe=bt.fragmentShader}else{st=S.vertexShader,qe=S.fragmentShader;const bt=o.getVertexShaderStage(S),ft=o.getFragmentShaderStage(S);o.update(S,bt,ft),Qe=bt.id,R=ft.id}const O=s.getRenderTarget(),se=s.state.buffers.depth.getReversed(),fe=L.isInstancedMesh===!0,ce=L.isBatchedMesh===!0,pe=!!S.map,D=!!S.matcap,F=!!ee,P=!!S.aoMap,q=!!S.lightMap,B=!!S.bumpMap&&S.wireframe===!1,te=!!S.normalMap,de=!!S.displacementMap,ke=!!S.emissiveMap,Be=!!S.metalnessMap,$e=!!S.roughnessMap,H=S.anisotropy>0,lt=S.clearcoat>0,Ve=S.dispersion>0,I=S.retroreflectivity>0,b=S.iridescence>0,$=S.sheen>0,ie=S.transmission>0,ae=H&&!!S.anisotropyMap,ue=lt&&!!S.clearcoatMap,ge=lt&&!!S.clearcoatNormalMap,re=lt&&!!S.clearcoatRoughnessMap,le=b&&!!S.iridescenceMap,xe=b&&!!S.iridescenceThicknessMap,De=$&&!!S.sheenColorMap,Se=$&&!!S.sheenRoughnessMap,ve=!!S.specularMap,Ne=!!S.specularColorMap,Oe=!!S.specularIntensityMap,Xe=ie&&!!S.transmissionMap,V=ie&&!!S.thicknessMap,_e=!!S.gradientMap,oe=!!S.alphaMap,Me=S.alphaTest>0,Te=!!S.alphaHash,he=!!S.extensions;let Ue=yi;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const Pe={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:qe,defines:S.defines,customVertexShaderID:Qe,customFragmentShaderID:R,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ce,batchingColor:ce&&L._colorsTexture!==null,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:D,envMap:F,envMapMode:F&&ee.mapping,envMapCubeUVHeight:Y,aoMap:P,lightMap:q,bumpMap:B,normalMap:te,displacementMap:de,emissiveMap:ke,normalMapObjectSpace:te&&S.normalMapType===Qh,normalMapTangentSpace:te&&S.normalMapType===ya,packedNormalMap:te&&S.normalMapType===ya&&Mm(S.normalMap.format),metalnessMap:Be,roughnessMap:$e,anisotropy:H,anisotropyMap:ae,clearcoat:lt,clearcoatMap:ue,clearcoatNormalMap:ge,clearcoatRoughnessMap:re,dispersion:Ve,retroreflection:I,iridescence:b,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:$,sheenColorMap:De,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:Ne,specularIntensityMap:Oe,transmission:ie,transmissionMap:Xe,thicknessMap:V,gradientMap:_e,opaque:S.transparent===!1&&S.blending===ws&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:Me,alphaHash:Te,combine:S.combine,mapUv:pe&&g(S.map.channel),aoMapUv:P&&g(S.aoMap.channel),lightMapUv:q&&g(S.lightMap.channel),bumpMapUv:B&&g(S.bumpMap.channel),normalMapUv:te&&g(S.normalMap.channel),displacementMapUv:de&&g(S.displacementMap.channel),emissiveMapUv:ke&&g(S.emissiveMap.channel),metalnessMapUv:Be&&g(S.metalnessMap.channel),roughnessMapUv:$e&&g(S.roughnessMap.channel),anisotropyMapUv:ae&&g(S.anisotropyMap.channel),clearcoatMapUv:ue&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(S.sheenRoughnessMap.channel),specularMapUv:ve&&g(S.specularMap.channel),specularColorMapUv:Ne&&g(S.specularColorMap.channel),specularIntensityMapUv:Oe&&g(S.specularIntensityMap.channel),transmissionMapUv:Xe&&g(S.transmissionMap.channel),thicknessMapUv:V&&g(S.thicknessMap.channel),alphaMapUv:oe&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(te||H),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(pe||oe),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&te===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:ke&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===ai,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:he&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&S.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)w.push(C),w.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(m(w,S),_(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function m(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numSunLights),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numSunLightShadows),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),S.push(r.mask)}function M(S){const w=u[S.type];let C;if(w){const N=Li[w];C=kf.clone(N.uniforms)}else C=S.uniforms;return C}function v(S,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new gm(s,w,S,n),c.push(C),h.set(w,C)),C}function y(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:A}}function bm(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Jl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ql(){const s=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function r(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,g,x,p,m){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:u,material:g,materialVariant:r(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},s[e]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=g,_.materialVariant=r(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function l(f,u,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);const M=o(f,u,g,x,p,m);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):t.push(M)}function c(f,u,g,x,p,m){const _=o(f,u,g,x,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?n.unshift(_):t.unshift(_)}function h(f,u){t.length>1&&t.sort(f||ym),i.length>1&&i.sort(u||Jl),n.length>1&&n.sort(u||Jl)}function d(){for(let f=e,u=s.length;f<u;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:l,unshift:c,finish:d,sort:h}}function Em(){let s=new WeakMap;function e(i,n){const a=s.get(i);let r;return a===void 0?(r=new Ql,s.set(i,[r])):n>=a.length?(r=new Ql,a.push(r)):r=a[n],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new We};break;case"SpotLight":t={position:new W,direction:new W,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function wm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Am=0;function Rm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cm(s){const e=new Tm,t=wm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const n=new W,a=new St,r=new St;function o(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,g=0,x=0,p=0,m=0,_=0,M=0,v=0,y=0,T=0,A=0,S=0,w=0,C=0;c.sort(Rm);for(let L=0,U=c.length;L<U;L++){const z=c[L],k=z.color,Q=z.intensity,X=z.distance;let ee=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===An?ee=z.shadow.map.texture:ee=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=k.r*Q,d+=k.g*Q,f+=k.b*Q;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(z.sh.coefficients[Y],Q);C++}else if(z.isSunLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,j=t.get(z);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=ee;const me=Z.getViewportCount();for(let we=0;we<me;we++)i.sunShadowMatrix[x+we]=Z.getMatrix(we),i.sunShadowCascade[x+we]=Z._cascadeData[we];x+=me,g++}i.sun[u]=Y,u++}else if(z.isDirectionalLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,j=t.get(z);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=z.shadow.matrix,y++}i.directional[p]=Y,p++}else if(z.isSpotLight){const Y=e.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(k).multiplyScalar(Q),Y.distance=X,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,i.spot[_]=Y;const Z=z.shadow;if(z.map&&(i.spotLightMap[S]=z.map,S++,Z.updateMatrices(z),z.castShadow&&w++),i.spotLightMatrix[_]=Z.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=ee,A++}_++}else if(z.isRectAreaLight){const Y=e.get(z);Y.color.copy(k).multiplyScalar(Q),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),i.rectArea[M]=Y,M++}else if(z.isPointLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const Z=z.shadow,j=t.get(z);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=z.shadow.matrix,T++}i.point[m]=Y,m++}else if(z.isHemisphereLight){const Y=e.get(z);Y.skyColor.copy(z.color).multiplyScalar(Q),Y.groundColor.copy(z.groundColor).multiplyScalar(Q),i.hemi[v]=Y,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==y||N.numPointShadows!==T||N.numSpotShadows!==A||N.numSpotMaps!==S||N.numLightProbes!==C)&&(i.sun.length=u,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.sunLength=u,N.directionalLength=p,N.pointLength=m,N.spotLength=_,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=y,N.numPointShadows=T,N.numSpotShadows=A,N.numSpotMaps=S,N.numLightProbes=C,i.version=Am++)}function l(c,h){let d=0,f=0,u=0,g=0,x=0,p=0;const m=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const v=c[_];if(v.isSunLight){const y=i.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),d++}else if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),x++}else if(v.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function jl(s){const e=new Cm(s),t=[],i=[],n=[];function a(f){d.camera=f,t.length=0,i.length=0,n.length=0}function r(f){t.push(f)}function o(f){i.push(f)}function l(f){n.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Im(s){let e=new WeakMap;function t(n,a=0){const r=e.get(n);let o;return r===void 0?(o=new jl(s),e.set(n,[o])):a>=r.length?(o=new jl(s),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dm=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Nm=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ec=new St,xs=new W,vr=new W;function Um(s,e,t){let i=new Io;const n=new ze,a=new ze,r=new Ct,o=new Wf,l=new Xf,c={},h=t.maxTextureSize,d={[En]:ai,[ai]:En,[si]:si},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Pm,fragmentShader:Lm}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let m=this.type;this.render=function(T,A,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Ch&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);const w=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Xi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=m!==this.type;U&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=T.length;z<k;z++){const Q=T[z],X=Q.shadow;if(X===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const ee=X.getFrameExtents();n.multiply(ee),a.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/ee.x),n.x=a.x*ee.x,X.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/ee.y),n.y=a.y*ee.y,X.mapSize.y=a.y));const Y=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Es){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ei(n.x,n.y,{format:An,type:Ui,minFilter:$t,magFilter:$t,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new Ds(n.x,n.y,Mi),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=Zi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_t,X.map.depthTexture.magFilter=_t}else Q.isPointLight?(X.map=new Xc(n.x),X.map.depthTexture=new Of(n.x,Ni)):(X.map=new Ei(n.x,n.y),X.map.depthTexture=new Ds(n.x,n.y,Ni)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=Zi,this.type===pa?(X.map.depthTexture.compareFunction=Y?Ro:Ao,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_t,X.map.depthTexture.magFilter=_t);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==n.x||X.map.height!==n.y)&&X.map.setSize(n.x,n.y);const Z=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Q.isPointLight!==!0&&X.updateMatrices(Q,S);for(let j=0;j<Z;j++){const me=X.getCamera(j);if(Q.isPointLight){const we=X.camera,st=X.matrix,qe=Q.distance||we.far;qe!==we.far&&(we.far=qe,we.updateProjectionMatrix()),xs.setFromMatrixPosition(Q.matrixWorld),we.position.copy(xs),vr.copy(we.position),vr.add(Dm[j]),we.up.copy(Nm[j]),we.lookAt(vr),we.updateMatrixWorld(),st.makeTranslation(-xs.x,-xs.y,-xs.z),ec.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ec,we.coordinateSystem,we.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,j),s.clear();else{j===0&&(s.setRenderTarget(X.map),s.clear());const we=X.getViewport(j);r.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),L.viewport(r)}i=X.getFrustum(j),v(A,S,me,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Es&&_(X,S),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(w,C,N)};function _(T,A){const S=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ei(n.x,n.y,{format:An,type:Ui}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,S,f,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,S,u,x,null)}function M(T,A,S,w){let C=null;const N=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=S.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=C.uuid,U=A.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let k=z[U];k===void 0&&(k=C.clone(),z[U]=k,A.addEventListener("dispose",y)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Es?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=s.properties.get(C);L.light=S}return C}function v(T,A,S,w,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Es)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const U=e.update(T),z=T.material;if(Array.isArray(z)){const k=U.groups;for(let Q=0,X=k.length;Q<X;Q++){const ee=k[Q],Y=z[ee.materialIndex];if(Y&&Y.visible){const Z=M(T,Y,w,C);T.onBeforeShadow(s,T,A,S,U,Z,ee),s.renderBufferDirect(S,null,U,Z,T,ee),T.onAfterShadow(s,T,A,S,U,Z,ee)}}}else if(z.visible){const k=M(T,z,w,C);T.onBeforeShadow(s,T,A,S,U,k,null),s.renderBufferDirect(S,null,U,k,T,null),T.onAfterShadow(s,T,A,S,U,k,null)}}const L=T.children;for(let U=0,z=L.length;U<z;U++)v(L[U],A,S,w,C)}function y(T){T.target.removeEventListener("dispose",y);for(const S in c){const w=c[S],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Fm(s,e){function t(){let V=!1;const _e=new Ct;let oe=null;const Me=new Ct(0,0,0,0);return{setMask:function(Te){oe!==Te&&!V&&(s.colorMask(Te,Te,Te,Te),oe=Te)},setLocked:function(Te){V=Te},setClear:function(Te,he,Ue,Pe,bt){bt===!0&&(Te*=Pe,he*=Pe,Ue*=Pe),_e.set(Te,he,Ue,Pe),Me.equals(_e)===!1&&(s.clearColor(Te,he,Ue,Pe),Me.copy(_e))},reset:function(){V=!1,oe=null,Me.set(-1,0,0,0)}}}function i(){let V=!1,_e=!1,oe=null,Me=null,Te=null;return{setReversed:function(he){if(_e!==he){const Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),_e=he;const Pe=Te;Te=null,this.setClear(Pe)}},getReversed:function(){return _e},setTest:function(he){he?O(s.DEPTH_TEST):se(s.DEPTH_TEST)},setMask:function(he){oe!==he&&!V&&(s.depthMask(he),oe=he)},setFunc:function(he){if(_e&&(he=ff[he]),Me!==he){switch(he){case Ar:s.depthFunc(s.NEVER);break;case Rr:s.depthFunc(s.ALWAYS);break;case Cr:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Ir:s.depthFunc(s.EQUAL);break;case Pr:s.depthFunc(s.GEQUAL);break;case Lr:s.depthFunc(s.GREATER);break;case Dr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=he}},setLocked:function(he){V=he},setClear:function(he){Te!==he&&(Te=he,_e&&(he=1-he),s.clearDepth(he))},reset:function(){V=!1,oe=null,Me=null,Te=null,_e=!1}}}function n(){let V=!1,_e=null,oe=null,Me=null,Te=null,he=null,Ue=null,Pe=null,bt=null;return{setTest:function(ft){V||(ft?O(s.STENCIL_TEST):se(s.STENCIL_TEST))},setMask:function(ft){_e!==ft&&!V&&(s.stencilMask(ft),_e=ft)},setFunc:function(ft,di,Ai){(oe!==ft||Me!==di||Te!==Ai)&&(s.stencilFunc(ft,di,Ai),oe=ft,Me=di,Te=Ai)},setOp:function(ft,di,Ai){(he!==ft||Ue!==di||Pe!==Ai)&&(s.stencilOp(ft,di,Ai),he=ft,Ue=di,Pe=Ai)},setLocked:function(ft){V=ft},setClear:function(ft){bt!==ft&&(s.clearStencil(ft),bt=ft)},reset:function(){V=!1,_e=null,oe=null,Me=null,Te=null,he=null,Ue=null,Pe=null,bt=null}}}const a=new t,r=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},f={},u=new WeakMap,g=[],x=null,p=!1,m=null,_=null,M=null,v=null,y=null,T=null,A=null,S=new We(0,0,0),w=0,C=!1,N=null,L=null,U=null,z=null,k=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=ee>=2);let Z=null,j={};const me=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),st=new Ct().fromArray(me),qe=new Ct().fromArray(we);function Qe(V,_e,oe,Me){const Te=new Uint8Array(4),he=s.createTexture();s.bindTexture(V,he),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<oe;Ue++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(_e+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return he}const R={};R[s.TEXTURE_2D]=Qe(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=Qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=Qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=Qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),O(s.DEPTH_TEST),r.setFunc(Cs),B(!1),te(nl),O(s.CULL_FACE),P(Xi);function O(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function se(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function fe(V,_e){return f[V]!==_e?(s.bindFramebuffer(V,_e),f[V]=_e,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=_e),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function ce(V,_e){let oe=g,Me=!1;if(V){oe=u.get(_e),oe===void 0&&(oe=[],u.set(_e,oe));const Te=V.textures;if(oe.length!==Te.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ue=Te.length;he<Ue;he++)oe[he]=s.COLOR_ATTACHMENT0+he;oe.length=Te.length,Me=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,Me=!0);Me&&s.drawBuffers(oe)}function pe(V){return x!==V?(s.useProgram(V),x=V,!0):!1}const D={[Jn]:s.FUNC_ADD,[Ph]:s.FUNC_SUBTRACT,[Lh]:s.FUNC_REVERSE_SUBTRACT};D[Dh]=s.MIN,D[Nh]=s.MAX;const F={[Uh]:s.ZERO,[Fh]:s.ONE,[Oh]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Vh]:s.SRC_ALPHA_SATURATE,[Hh]:s.DST_COLOR,[kh]:s.DST_ALPHA,[zh]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[Gh]:s.ONE_MINUS_DST_COLOR,[Bh]:s.ONE_MINUS_DST_ALPHA,[Wh]:s.CONSTANT_COLOR,[Xh]:s.ONE_MINUS_CONSTANT_COLOR,[qh]:s.CONSTANT_ALPHA,[Yh]:s.ONE_MINUS_CONSTANT_ALPHA};function P(V,_e,oe,Me,Te,he,Ue,Pe,bt,ft){if(V===Xi){p===!0&&(se(s.BLEND),p=!1);return}if(p===!1&&(O(s.BLEND),p=!0),V!==Ih){if(V!==m||ft!==C){if((_!==Jn||y!==Jn)&&(s.blendEquation(s.FUNC_ADD),_=Jn,y=Jn),ft)switch(V){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sl:s.blendFunc(s.ONE,s.ONE);break;case al:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ct("WebGLState: Invalid blending: ",V);break}else switch(V){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case al:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",V);break}M=null,v=null,T=null,A=null,S.set(0,0,0),w=0,m=V,C=ft}return}Te=Te||_e,he=he||oe,Ue=Ue||Me,(_e!==_||Te!==y)&&(s.blendEquationSeparate(D[_e],D[Te]),_=_e,y=Te),(oe!==M||Me!==v||he!==T||Ue!==A)&&(s.blendFuncSeparate(F[oe],F[Me],F[he],F[Ue]),M=oe,v=Me,T=he,A=Ue),(Pe.equals(S)===!1||bt!==w)&&(s.blendColor(Pe.r,Pe.g,Pe.b,bt),S.copy(Pe),w=bt),m=V,C=!1}function q(V,_e){V.side===si?se(s.CULL_FACE):O(s.CULL_FACE);let oe=V.side===ai;_e&&(oe=!oe),B(oe),V.blending===ws&&V.transparent===!1?P(Xi):P(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),a.setMask(V.colorWrite);const Me=V.stencilWrite;o.setTest(Me),Me&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ke(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):se(s.SAMPLE_ALPHA_TO_COVERAGE)}function B(V){N!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),N=V)}function te(V){V!==Ah?(O(s.CULL_FACE),V!==L&&(V===nl?s.cullFace(s.BACK):V===Rh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):se(s.CULL_FACE),L=V}function de(V){V!==U&&(X&&s.lineWidth(V),U=V)}function ke(V,_e,oe){V?(O(s.POLYGON_OFFSET_FILL),(z!==_e||k!==oe)&&(z=_e,k=oe,r.getReversed()&&(_e=-_e),s.polygonOffset(_e,oe))):se(s.POLYGON_OFFSET_FILL)}function Be(V){V?O(s.SCISSOR_TEST):se(s.SCISSOR_TEST)}function $e(V){V===void 0&&(V=s.TEXTURE0+Q-1),Z!==V&&(s.activeTexture(V),Z=V)}function H(V,_e,oe){oe===void 0&&(Z===null?oe=s.TEXTURE0+Q-1:oe=Z);let Me=j[oe];Me===void 0&&(Me={type:void 0,texture:void 0},j[oe]=Me),(Me.type!==V||Me.texture!==_e)&&(Z!==oe&&(s.activeTexture(oe),Z=oe),s.bindTexture(V,_e||R[V]),Me.type=V,Me.texture=_e)}function lt(){const V=j[Z];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ve(){try{s.compressedTexImage2D(...arguments)}catch(V){ct("WebGLState:",V)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(V){ct("WebGLState:",V)}}function b(){try{s.texSubImage2D(...arguments)}catch(V){ct("WebGLState:",V)}}function $(){try{s.texSubImage3D(...arguments)}catch(V){ct("WebGLState:",V)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(V){ct("WebGLState:",V)}}function ae(){try{s.compressedTexSubImage3D(...arguments)}catch(V){ct("WebGLState:",V)}}function ue(){try{s.texStorage2D(...arguments)}catch(V){ct("WebGLState:",V)}}function ge(){try{s.texStorage3D(...arguments)}catch(V){ct("WebGLState:",V)}}function re(){try{s.texImage2D(...arguments)}catch(V){ct("WebGLState:",V)}}function le(){try{s.texImage3D(...arguments)}catch(V){ct("WebGLState:",V)}}function xe(V){return d[V]!==void 0?d[V]:s.getParameter(V)}function De(V,_e){d[V]!==_e&&(s.pixelStorei(V,_e),d[V]=_e)}function Se(V){st.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),st.copy(V))}function ve(V){qe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),qe.copy(V))}function Ne(V,_e){let oe=c.get(_e);oe===void 0&&(oe=new WeakMap,c.set(_e,oe));let Me=oe.get(V);Me===void 0&&(Me=s.getUniformBlockIndex(_e,V.name),oe.set(V,Me))}function Oe(V,_e){const Me=c.get(_e).get(V);l.get(_e)!==Me&&(s.uniformBlockBinding(_e,Me,V.__bindingPointIndex),l.set(_e,Me))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,j={},f={},u=new WeakMap,g=[],x=null,p=!1,m=null,_=null,M=null,v=null,y=null,T=null,A=null,S=new We(0,0,0),w=0,C=!1,N=null,L=null,U=null,z=null,k=null,st.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:O,disable:se,bindFramebuffer:fe,drawBuffers:ce,useProgram:pe,setBlending:P,setMaterial:q,setFlipSided:B,setCullFace:te,setLineWidth:de,setPolygonOffset:ke,setScissorTest:Be,activeTexture:$e,bindTexture:H,unbindTexture:lt,compressedTexImage2D:Ve,compressedTexImage3D:I,texImage2D:re,texImage3D:le,pixelStorei:De,getParameter:xe,updateUBOMapping:Ne,uniformBlockBinding:Oe,texStorage2D:ue,texStorage3D:ge,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:ie,compressedTexSubImage3D:ae,scissor:Se,viewport:ve,reset:Xe}}function Om(s,e,t,i,n,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,d=new Set;let f;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,b){return g?new OffscreenCanvas(I,b):wa("canvas")}function p(I,b,$){let ie=1;const ae=Ve(I);if((ae.width>$||ae.height>$)&&(ie=$/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(ie*ae.width),ge=Math.floor(ie*ae.height);f===void 0&&(f=x(ue,ge));const re=b?x(ue,ge):f;return re.width=ue,re.height=ge,re.getContext("2d").drawImage(I,0,0,ue,ge),He("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ue+"x"+ge+")."),re}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function m(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(I,b,$,ie,ae,ue=!1){if(I!==null){if(s[I]!==void 0)return s[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ge;ie&&(ge=e.get("EXT_texture_norm16"),ge||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=b;if(b===s.RED&&($===s.FLOAT&&(re=s.R32F),$===s.HALF_FLOAT&&(re=s.R16F),$===s.UNSIGNED_BYTE&&(re=s.R8),$===s.UNSIGNED_SHORT&&ge&&(re=ge.R16_EXT),$===s.SHORT&&ge&&(re=ge.R16_SNORM_EXT)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(re=s.R8UI),$===s.UNSIGNED_SHORT&&(re=s.R16UI),$===s.UNSIGNED_INT&&(re=s.R32UI),$===s.BYTE&&(re=s.R8I),$===s.SHORT&&(re=s.R16I),$===s.INT&&(re=s.R32I)),b===s.RG&&($===s.FLOAT&&(re=s.RG32F),$===s.HALF_FLOAT&&(re=s.RG16F),$===s.UNSIGNED_BYTE&&(re=s.RG8),$===s.UNSIGNED_SHORT&&ge&&(re=ge.RG16_EXT),$===s.SHORT&&ge&&(re=ge.RG16_SNORM_EXT)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(re=s.RG8UI),$===s.UNSIGNED_SHORT&&(re=s.RG16UI),$===s.UNSIGNED_INT&&(re=s.RG32UI),$===s.BYTE&&(re=s.RG8I),$===s.SHORT&&(re=s.RG16I),$===s.INT&&(re=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(re=s.RGB8UI),$===s.UNSIGNED_SHORT&&(re=s.RGB16UI),$===s.UNSIGNED_INT&&(re=s.RGB32UI),$===s.BYTE&&(re=s.RGB8I),$===s.SHORT&&(re=s.RGB16I),$===s.INT&&(re=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),$===s.UNSIGNED_INT&&(re=s.RGBA32UI),$===s.BYTE&&(re=s.RGBA8I),$===s.SHORT&&(re=s.RGBA16I),$===s.INT&&(re=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_SHORT&&ge&&(re=ge.RGB16_EXT),$===s.SHORT&&ge&&(re=ge.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),b===s.RGBA){const le=ue?Ta:it.getTransfer(ae);$===s.FLOAT&&(re=s.RGBA32F),$===s.HALF_FLOAT&&(re=s.RGBA16F),$===s.UNSIGNED_BYTE&&(re=le===pt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&ge&&(re=ge.RGBA16_EXT),$===s.SHORT&&ge&&(re=ge.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(I,b){let $;return I?b===null||b===Ni||b===Ps?$=s.DEPTH24_STENCIL8:b===Mi?$=s.DEPTH32F_STENCIL8:b===Is&&($=s.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ni||b===Ps?$=s.DEPTH_COMPONENT24:b===Mi?$=s.DEPTH_COMPONENT32F:b===Is&&($=s.DEPTH_COMPONENT16),$}function T(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==_t&&I.minFilter!==$t?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function A(I){const b=I.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function S(I){const b=I.target;b.removeEventListener("dispose",S),N(b)}function w(I){const b=i.get(I);if(b.__webglInit===void 0)return;const $=I.source,ie=u.get($);if(ie){const ae=ie[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(I),Object.keys(ie).length===0&&u.delete($)}i.remove(I)}function C(I){const b=i.get(I);s.deleteTexture(b.__webglTexture);const $=I.source,ie=u.get($);delete ie[b.__cacheKey],r.memory.textures--}function N(I){const b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let ae=0;ae<b.__webglFramebuffer[ie].length;ae++)s.deleteFramebuffer(b.__webglFramebuffer[ie][ae]);else s.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)s.deleteFramebuffer(b.__webglFramebuffer[ie]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=I.textures;for(let ie=0,ae=$.length;ie<ae;ie++){const ue=i.get($[ie]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),r.memory.textures--),i.remove($[ie])}i.remove(I)}let L=0;function U(){L=0}function z(){return L}function k(I){L=I}function Q(){const I=L;return I>=n.maxTextures&&He("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,I}function X(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ee(I,b){const $=i.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const ie=I.image;if(ie===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{se($,I,b);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function Y(I,b){const $=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){se($,I,b);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function Z(I,b){const $=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){se($,I,b);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function j(I,b){const $=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){fe($,I,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}const me={[wn]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},we={[_t]:s.NEAREST,[Kh]:s.NEAREST_MIPMAP_NEAREST,[Ws]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[Ha]:s.LINEAR_MIPMAP_NEAREST,[Mn]:s.LINEAR_MIPMAP_LINEAR},st={[ef]:s.NEVER,[rf]:s.ALWAYS,[tf]:s.LESS,[Ao]:s.LEQUAL,[nf]:s.EQUAL,[Ro]:s.GEQUAL,[sf]:s.GREATER,[af]:s.NOTEQUAL};function qe(I,b){if(b.type===Mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===$t||b.magFilter===Ha||b.magFilter===Ws||b.magFilter===Mn||b.minFilter===$t||b.minFilter===Ha||b.minFilter===Ws||b.minFilter===Mn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,me[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,me[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,me[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,we[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,we[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_t||b.minFilter!==Ws&&b.minFilter!==Mn||b.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Qe(I,b){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",A));const ie=b.source;let ae=u.get(ie);ae===void 0&&(ae={},u.set(ie,ae));const ue=X(b);if(ue!==I.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,$=!0),ae[ue].usedTimes++;const ge=ae[I.__cacheKey];ge!==void 0&&(ae[I.__cacheKey].usedTimes--,ge.usedTimes===0&&C(b)),I.__cacheKey=ue,I.__webglTexture=ae[ue].texture}return $}function R(I,b,$){return Math.floor(Math.floor(I/$)/b)}function O(I,b,$,ie){const ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,ie,b.data);else{ue.sort((De,Se)=>De.start-Se.start);let ge=0;for(let De=1;De<ue.length;De++){const Se=ue[ge],ve=ue[De],Ne=Se.start+Se.count,Oe=R(ve.start,b.width,4),Xe=R(Se.start,b.width,4);ve.start<=Ne+1&&Oe===Xe&&R(ve.start+ve.count-1,b.width,4)===Oe?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++ge,ue[ge]=ve)}ue.length=ge+1;const re=t.getParameter(s.UNPACK_ROW_LENGTH),le=t.getParameter(s.UNPACK_SKIP_PIXELS),xe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let De=0,Se=ue.length;De<Se;De++){const ve=ue[De],Ne=Math.floor(ve.start/4),Oe=Math.ceil(ve.count/4),Xe=Ne%b.width,V=Math.floor(Ne/b.width),_e=Oe,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,Xe,V,_e,oe,$,ie,b.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,re),t.pixelStorei(s.UNPACK_SKIP_PIXELS,le),t.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function se(I,b,$){let ie=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=s.TEXTURE_3D);const ae=Qe(I,b),ue=b.source;t.bindTexture(ie,I.__webglTexture,s.TEXTURE0+$);const ge=i.get(ue);if(ue.version!==ge.__version||ae===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const oe=it.getPrimaries(it.workingColorSpace),Me=b.colorSpace===on?null:it.getPrimaries(b.colorSpace),Te=b.colorSpace===on||oe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let le=p(b.image,!1,n.maxTextureSize);le=lt(b,le);const xe=a.convert(b.format,b.colorSpace),De=a.convert(b.type);let Se=v(b.internalFormat,xe,De,b.normalized,b.colorSpace,b.isVideoTexture);qe(ie,b);let ve;const Ne=b.mipmaps,Oe=b.isVideoTexture!==!0,Xe=ge.__version===void 0||ae===!0,V=ue.dataReady,_e=T(b,le);if(b.isDepthTexture)Se=y(b.format===Sn,b.type),Xe&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Se,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Se,le.width,le.height,0,xe,De,null));else if(b.isDataTexture)if(Ne.length>0){Oe&&Xe&&t.texStorage2D(s.TEXTURE_2D,_e,Se,Ne[0].width,Ne[0].height);for(let oe=0,Me=Ne.length;oe<Me;oe++)ve=Ne[oe],Oe?V&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ve.width,ve.height,xe,De,ve.data):t.texImage2D(s.TEXTURE_2D,oe,Se,ve.width,ve.height,0,xe,De,ve.data);b.generateMipmaps=!1}else Oe?(Xe&&t.texStorage2D(s.TEXTURE_2D,_e,Se,le.width,le.height),V&&O(b,le,xe,De)):t.texImage2D(s.TEXTURE_2D,0,Se,le.width,le.height,0,xe,De,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Se,Ne[0].width,Ne[0].height,le.depth);for(let oe=0,Me=Ne.length;oe<Me;oe++)if(ve=Ne[oe],b.format!==Si)if(xe!==null)if(Oe){if(V)if(b.layerUpdates.size>0){const Te=Ll(ve.width,ve.height,b.format,b.type);for(const he of b.layerUpdates){const Ue=ve.data.subarray(he*Te/ve.data.BYTES_PER_ELEMENT,(he+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,he,ve.width,ve.height,1,xe,Ue)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,le.depth,xe,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Se,ve.width,ve.height,le.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,le.depth,xe,De,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Se,ve.width,ve.height,le.depth,0,xe,De,ve.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Oe&&Xe&&t.texStorage2D(s.TEXTURE_2D,_e,Se,Ne[0].width,Ne[0].height);for(let oe=0,Me=Ne.length;oe<Me;oe++)ve=Ne[oe],b.format!==Si?xe!==null?Oe?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Se,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?V&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ve.width,ve.height,xe,De,ve.data):t.texImage2D(s.TEXTURE_2D,oe,Se,ve.width,ve.height,0,xe,De,ve.data)}else if(b.isDataArrayTexture)if(Oe){if(Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Se,le.width,le.height,le.depth),V)if(b.layerUpdates.size>0){const oe=Ll(le.width,le.height,b.format,b.type);for(const Me of b.layerUpdates){const Te=le.data.subarray(Me*oe/le.data.BYTES_PER_ELEMENT,(Me+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,le.width,le.height,1,xe,De,Te)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,le.width,le.height,le.depth,0,xe,De,le.data);else if(b.isData3DTexture)Oe?(Xe&&t.texStorage3D(s.TEXTURE_3D,_e,Se,le.width,le.height,le.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)):t.texImage3D(s.TEXTURE_3D,0,Se,le.width,le.height,le.depth,0,xe,De,le.data);else if(b.isFramebufferTexture){if(Xe)if(Oe)t.texStorage2D(s.TEXTURE_2D,_e,Se,le.width,le.height);else{let oe=le.width,Me=le.height;for(let Te=0;Te<_e;Te++)t.texImage2D(s.TEXTURE_2D,Te,Se,oe,Me,0,xe,De,null),oe>>=1,Me>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),le.parentNode!==oe){oe.appendChild(le),d.add(b),oe.onpaint=Me=>{const Te=Me.changedElements;for(const he of d)Te.includes(he.image)&&(he.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,le);else{const Te=s.RGBA,he=s.RGBA,Ue=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,he,Ue,le)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Oe&&Xe){const oe=Ve(Ne[0]);t.texStorage2D(s.TEXTURE_2D,_e,Se,oe.width,oe.height)}for(let oe=0,Me=Ne.length;oe<Me;oe++)ve=Ne[oe],Oe?V&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,xe,De,ve):t.texImage2D(s.TEXTURE_2D,oe,Se,xe,De,ve);b.generateMipmaps=!1}else if(Oe){if(Xe){const oe=Ve(le);t.texStorage2D(s.TEXTURE_2D,_e,Se,oe.width,oe.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,De,le)}else t.texImage2D(s.TEXTURE_2D,0,Se,xe,De,le);m(b)&&_(ie),ge.__version=ue.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function fe(I,b,$){if(b.image.length!==6)return;const ie=Qe(I,b),ae=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+$);const ue=i.get(ae);if(ae.version!==ue.__version||ie===!0){t.activeTexture(s.TEXTURE0+$);const ge=it.getPrimaries(it.workingColorSpace),re=b.colorSpace===on?null:it.getPrimaries(b.colorSpace),le=b.colorSpace===on||ge===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let he=0;he<6;he++)!xe&&!De?Se[he]=p(b.image[he],!0,n.maxCubemapSize):Se[he]=De?b.image[he].image:b.image[he],Se[he]=lt(b,Se[he]);const ve=Se[0],Ne=a.convert(b.format,b.colorSpace),Oe=a.convert(b.type),Xe=v(b.internalFormat,Ne,Oe,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,_e=ue.__version===void 0||ie===!0,oe=ae.dataReady;let Me=T(b,ve);qe(s.TEXTURE_CUBE_MAP,b);let Te;if(xe){V&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Xe,ve.width,ve.height);for(let he=0;he<6;he++){Te=Se[he].mipmaps;for(let Ue=0;Ue<Te.length;Ue++){const Pe=Te[Ue];b.format!==Si?Ne!==null?V?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,Xe,Pe.width,Pe.height,0,Pe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,Pe.width,Pe.height,Ne,Oe,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,Xe,Pe.width,Pe.height,0,Ne,Oe,Pe.data)}}}else{if(Te=b.mipmaps,V&&_e){Te.length>0&&Me++;const he=Ve(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,Xe,he.width,he.height)}for(let he=0;he<6;he++)if(De){V?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Se[he].width,Se[he].height,Ne,Oe,Se[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Xe,Se[he].width,Se[he].height,0,Ne,Oe,Se[he].data);for(let Ue=0;Ue<Te.length;Ue++){const bt=Te[Ue].image[he].image;V?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,bt.width,bt.height,Ne,Oe,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,Xe,bt.width,bt.height,0,Ne,Oe,bt.data)}}else{V?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,Oe,Se[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Xe,Ne,Oe,Se[he]);for(let Ue=0;Ue<Te.length;Ue++){const Pe=Te[Ue];V?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,Ne,Oe,Pe.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,Xe,Ne,Oe,Pe.image[he])}}}m(b)&&_(s.TEXTURE_CUBE_MAP),ue.__version=ae.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ce(I,b,$,ie,ae,ue){const ge=a.convert($.format,$.colorSpace),re=a.convert($.type),le=v($.internalFormat,ge,re,$.normalized,$.colorSpace),xe=i.get(b),De=i.get($);if(De.__renderTarget=b,!xe.__hasExternalTextures){const Se=Math.max(1,b.width>>ue),ve=Math.max(1,b.height>>ue);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ue,le,Se,ve,b.depth,0,ge,re,null):t.texImage2D(ae,ue,le,Se,ve,0,ge,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),$e(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ae,De.__webglTexture,0,Be(b)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ae,De.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(I,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const ie=b.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,ue=y(b.stencilBuffer,ae),ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$e(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be(b),ue,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be(b),ue,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,I)}else{const ie=b.textures;for(let ae=0;ae<ie.length;ae++){const ue=ie[ae],ge=a.convert(ue.format,ue.colorSpace),re=a.convert(ue.type),le=v(ue.internalFormat,ge,re,ue.normalized,ue.colorSpace);$e(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be(b),le,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be(b),le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,le,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function D(I,b,$){const ie=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=i.get(b.depthTexture);if(ae.__renderTarget=b,(!ae.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),ae.__webglTexture===void 0){ae.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),qe(s.TEXTURE_CUBE_MAP,b.depthTexture);const xe=a.convert(b.depthTexture.format),De=a.convert(b.depthTexture.type);let Se;b.depthTexture.format===Zi?Se=s.DEPTH_COMPONENT24:b.depthTexture.format===Sn&&(Se=s.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,b.width,b.height,0,xe,De,null)}}else ee(b.depthTexture,0);const ue=ae.__webglTexture,ge=Be(b),re=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,le=b.depthTexture.format===Sn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Zi)$e(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,re,ue,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,le,re,ue,0);else if(b.depthTexture.format===Sn)$e(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,re,ue,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,le,re,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(I){const b=i.get(I),$=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const ie=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const ae=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),b.__depthDisposeCallback=ae}b.__boundDepthTexture=ie}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let ie=0;ie<6;ie++)D(b.__webglFramebuffer[ie],I,ie);else{const ie=I.texture.mipmaps;ie&&ie.length>0?D(b.__webglFramebuffer[0],I,0):D(b.__webglFramebuffer,I,0)}else if($){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=s.createRenderbuffer(),pe(b.__webglDepthbuffer[ie],I,!1);else{const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ue)}}else{const ie=I.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),pe(b.__webglDepthbuffer,I,!1);else{const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function P(I,b,$){const ie=i.get(I);b!==void 0&&ce(ie.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&F(I)}function q(I){const b=I.texture,$=i.get(I),ie=i.get(b);I.addEventListener("dispose",S);const ae=I.textures,ue=I.isWebGLCubeRenderTarget===!0,ge=ae.length>1;if(ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=b.version,r.memory.textures++),ue){$.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[re]=[];for(let le=0;le<b.mipmaps.length;le++)$.__webglFramebuffer[re][le]=s.createFramebuffer()}else $.__webglFramebuffer[re]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)$.__webglFramebuffer[re]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ge)for(let re=0,le=ae.length;re<le;re++){const xe=i.get(ae[re]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),r.memory.textures++)}if(I.samples>0&&$e(I)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let re=0;re<ae.length;re++){const le=ae[re];$.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[re]);const xe=a.convert(le.format,le.colorSpace),De=a.convert(le.type),Se=v(le.internalFormat,xe,De,le.normalized,le.colorSpace,I.isXRRenderTarget===!0),ve=Be(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Se,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,$.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),pe($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),qe(s.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)ce($.__webglFramebuffer[re][le],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else ce($.__webglFramebuffer[re],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(b)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,le=ae.length;re<le;re++){const xe=ae[re],De=i.get(xe);let Se=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,De.__webglTexture),qe(Se,xe),ce($.__webglFramebuffer,I,xe,s.COLOR_ATTACHMENT0+re,Se,0),m(xe)&&_(Se)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,ie.__webglTexture),qe(re,b),b.mipmaps&&b.mipmaps.length>0)for(let le=0;le<b.mipmaps.length;le++)ce($.__webglFramebuffer[le],I,b,s.COLOR_ATTACHMENT0,re,le);else ce($.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,re,0);m(b)&&_(re),t.unbindTexture()}I.depthBuffer&&F(I)}function B(I){const b=I.textures;for(let $=0,ie=b.length;$<ie;$++){const ae=b[$];if(m(ae)){const ue=M(I),ge=i.get(ae).__webglTexture;t.bindTexture(ue,ge),_(ue),t.unbindTexture()}}}const te=[],de=[];function ke(I){if(I.samples>0){if($e(I)===!1){const b=I.textures,$=I.width,ie=I.height;let ae=s.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=i.get(I),re=b.length>1;if(re)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const le=I.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const De=i.get(b[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,De,0)}s.blitFramebuffer(0,0,$,ie,0,0,$,ie,ae,s.NEAREST),l===!0&&(te.length=0,de.length=0,te.push(s.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(te.push(ue),de.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,de)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);const De=i.get(b[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Be(I){return Math.min(n.maxSamples,I.samples)}function $e(I){const b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(I){const b=r.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function lt(I,b){const $=I.colorSpace,ie=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Ea&&$!==on&&(it.getTransfer($)===pt?(ie!==Si||ae!==ci)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",$)),b}function Ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=U,this.getTextureUnits=z,this.setTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=P,this.setupRenderTarget=q,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zm(s,e){function t(i,n=on){let a;const r=it.getTransfer(n);if(i===ci)return s.UNSIGNED_BYTE;if(i===So)return s.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===wc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return s.BYTE;if(i===Tc)return s.SHORT;if(i===Is)return s.UNSIGNED_SHORT;if(i===Mo)return s.INT;if(i===Ni)return s.UNSIGNED_INT;if(i===Mi)return s.FLOAT;if(i===Ui)return s.HALF_FLOAT;if(i===Rc)return s.ALPHA;if(i===Cc)return s.RGB;if(i===Si)return s.RGBA;if(i===Zi)return s.DEPTH_COMPONENT;if(i===Sn)return s.DEPTH_STENCIL;if(i===yo)return s.RED;if(i===Eo)return s.RED_INTEGER;if(i===An)return s.RG;if(i===To)return s.RG_INTEGER;if(i===wo)return s.RGBA_INTEGER;if(i===ma||i===ga||i===xa||i===va)if(r===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ur||i===Fr||i===Or||i===zr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ur)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Or)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kr||i===Br||i===Hr||i===Gr||i===Vr||i===Sa||i===Wr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kr||i===Br)return r===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Hr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gr)return a.COMPRESSED_R11_EAC;if(i===Vr)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Sa)return a.COMPRESSED_RG11_EAC;if(i===Wr)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xr||i===qr||i===Yr||i===$r||i===Zr||i===Kr||i===Jr||i===Qr||i===jr||i===eo||i===to||i===io||i===no||i===so)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Xr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$r)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===to)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===no)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===ro||i===oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ao)return r===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===co||i===ba||i===ho)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===lo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ho)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new kc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fi({vertexShader:km,fragmentShader:Bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Rt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends In{constructor(e,t){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Hm,m={},_=t.getContextAttributes();let M=null,v=null;const y=[],T=[],A=new ze;let S=null,w=null;const C=new li;C.viewport=new Ct;const N=new li;N.viewport=new Ct;const L=[C,N],U=new Kf;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let O=y[R];return O===void 0&&(O=new Ka,y[R]=O),O.getTargetRaySpace()},this.getControllerGrip=function(R){let O=y[R];return O===void 0&&(O=new Ka,y[R]=O),O.getGripSpace()},this.getHand=function(R){let O=y[R];return O===void 0&&(O=new Ka,y[R]=O),O.getHandSpace()};function Q(R){const O=T.indexOf(R.inputSource);if(O===-1)return;const se=y[O];se!==void 0&&(se.update(R.inputSource,R.frame,c||r),se.dispatchEvent({type:R.type,data:R.inputSource}))}function X(){n.removeEventListener("select",Q),n.removeEventListener("selectstart",Q),n.removeEventListener("selectend",Q),n.removeEventListener("squeeze",Q),n.removeEventListener("squeezestart",Q),n.removeEventListener("squeezeend",Q),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",ee);for(let R=0;R<y.length;R++){const O=T[R];O!==null&&(T[R]=null,y[R].disconnect(O))}z=null,k=null,p.reset();for(const R in m)delete m[R];if(e.setRenderTarget(M),u=null,f=null,d=null,n=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(A.width,A.height,!1),w!==null){const R=w.camera;R.fov=w.fov,R.zoom=w.zoom,R.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){a=R,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(R){if(n=R,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",Q),n.addEventListener("selectstart",Q),n.addEventListener("selectend",Q),n.addEventListener("squeeze",Q),n.addEventListener("squeezestart",Q),n.addEventListener("squeezeend",Q),n.addEventListener("end",X),n.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,fe=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=_.stencil?Sn:Zi,fe=_.stencil?Ps:Ni);const pe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(pe),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ei(f.textureWidth,f.textureHeight,{format:Si,type:ci,depthTexture:new Ds(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(n,t,se),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Ei(u.framebufferWidth,u.framebufferHeight,{format:Si,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),Qe.setContext(n),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(R){for(let O=0;O<R.removed.length;O++){const se=R.removed[O],fe=T.indexOf(se);fe>=0&&(T[fe]=null,y[fe].disconnect(se))}for(let O=0;O<R.added.length;O++){const se=R.added[O];let fe=T.indexOf(se);if(fe===-1){for(let pe=0;pe<y.length;pe++)if(pe>=T.length){T.push(se),fe=pe;break}else if(T[pe]===null){T[pe]=se,fe=pe;break}if(fe===-1)break}const ce=y[fe];ce&&ce.connect(se)}}const Y=new W,Z=new W;function j(R,O,se){Y.setFromMatrixPosition(O.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const fe=Y.distanceTo(Z),ce=O.projectionMatrix.elements,pe=se.projectionMatrix.elements,D=ce[14]/(ce[10]-1),F=ce[14]/(ce[10]+1),P=(ce[9]+1)/ce[5],q=(ce[9]-1)/ce[5],B=(ce[8]-1)/ce[0],te=(pe[8]+1)/pe[0],de=D*B,ke=D*te,Be=fe/(-B+te),$e=Be*-B;if(O.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX($e),R.translateZ(Be),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),ce[10]===-1)R.projectionMatrix.copy(O.projectionMatrix),R.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const H=D+Be,lt=F+Be,Ve=de-$e,I=ke+(fe-$e),b=P*F/lt*H,$=q*F/lt*H;R.projectionMatrix.makePerspective(Ve,I,b,$,H,lt),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function me(R,O){O===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(O.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(n===null)return;let O=R.near,se=R.far;p.texture!==null&&(p.depthNear>0&&(O=p.depthNear),p.depthFar>0&&(se=p.depthFar)),U.near=N.near=C.near=O,U.far=N.far=C.far=se,(z!==U.near||k!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,k=U.far),U.layers.mask=R.layers.mask|6,C.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;const fe=R.parent,ce=U.cameras;me(U,fe);for(let pe=0;pe<ce.length;pe++)me(ce[pe],fe);ce.length===2?j(U,C,N):U.projectionMatrix.copy(C.projectionMatrix),w===null&&R.isPerspectiveCamera&&(w={camera:R,fov:R.fov,zoom:R.zoom}),we(R,U,fe)};function we(R,O,se){se===null?R.matrix.copy(O.matrixWorld):(R.matrix.copy(se.matrixWorld),R.matrix.invert(),R.matrix.multiply(O.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(O.projectionMatrix),R.projectionMatrixInverse.copy(O.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=fo*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(R){l=R,f!==null&&(f.fixedFoveation=R),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=R)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(R){return m[R]};let st=null;function qe(R,O){if(h=O.getViewerPose(c||r),g=O,h!==null){const se=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let fe=!1;se.length!==U.cameras.length&&(U.cameras.length=0,fe=!0);for(let F=0;F<se.length;F++){const P=se[F];let q=null;if(u!==null)q=u.getViewport(P);else{const te=d.getViewSubImage(f,P);q=te.viewport,F===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let B=L[F];B===void 0&&(B=new li,B.layers.enable(F),B.viewport=new Ct,L[F]=B),B.matrix.fromArray(P.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(P.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(q.x,q.y,q.width,q.height),F===0&&(U.matrix.copy(B.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),fe===!0&&U.cameras.push(B)}const ce=n.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const F=d.getDepthInformation(se[0]);F&&F.isValid&&F.texture&&p.init(F,n.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let F=0;F<se.length;F++){const P=se[F].camera;if(P){let q=m[P];q||(q=new kc,m[P]=q);const B=d.getCameraImage(P);q.sourceTexture=B}}}}for(let se=0;se<y.length;se++){const fe=T[se],ce=y[se];fe!==null&&ce!==void 0&&ce.update(fe,O,c||r)}st&&st(R,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const Qe=new Vc;Qe.setAnimationLoop(qe),this.setAnimationLoop=function(R){st=R},this.dispose=function(){}}}const Vm=new St,Kc=new Ge;Kc.set(-1,0,0,0,1,0,0,0,1);function Wm(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Bc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,v)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),x(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ai&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ai&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m),M=_.envMap,v=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kc),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ai&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Xm(s,e,t,i){let n={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const T=y.program;i.uniformBlockBinding(v,T)}function c(v,y){let T=n[v.id];T===void 0&&(p(v),T=h(v),n[v.id]=T,v.addEventListener("dispose",_));const A=y.program;i.updateUBOMapping(v,A);const S=e.render.frame;a[v.id]!==S&&(f(v),a[v.id]=S)}function h(v){const y=d();v.__bindingPointIndex=y;const T=s.createBuffer(),A=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,A,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=n[v.id],T=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let S=0,w=T.length;S<w;S++){const C=T[S];if(Array.isArray(C))for(let N=0,L=C.length;N<L;N++)u(C[N],S,N,A);else u(C,S,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,y,T,A){if(x(v,y,T,A)===!0){const S=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){const L=w[N],U=m(L);g(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,v.__data)}}function g(v,y,T){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,T)}function x(v,y,T,A){const S=v.value,w=y+"_"+T;if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:ArrayBuffer.isView(S)?A[w]=S.slice():A[w]=S.clone(),!0;{const C=A[w];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function p(v){const y=v.uniforms;let T=0;const A=16;for(let w=0,C=y.length;w<C;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let L=0,U=N.length;L<U;L++){const z=N[L],k=Array.isArray(z.value)?z.value:[z.value];for(let Q=0,X=k.length;Q<X;Q++){const ee=k[Q],Y=m(ee),Z=T%A,j=Z%Y.boundary,me=Z+j;T+=j,me!==0&&A-me<Y.storage&&(T+=A-me),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=Y.storage}}}const S=T%A;return S>0&&(T+=A-S),v.__size=T,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),y}function _(v){const y=v.target;y.removeEventListener("dispose",_);const T=r.indexOf(y.__bindingPointIndex);r.splice(T,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete a[y.id]}function M(){for(const v in n)s.deleteBuffer(n[v]);r=[],n={},a={}}return{bind:l,update:c,dispose:M}}const qm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function Ym(){return Ii===null&&(Ii=new Fc(qm,16,16,An,Ui),Ii.name="DFG_LUT",Ii.minFilter=$t,Ii.magFilter=$t,Ii.wrapS=Wi,Ii.wrapT=Wi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class $m{constructor(e={}){const{canvas:t=cf(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ci}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const x=u,p=new Set([wo,To,Eo]),m=new Set([ci,Ni,Is,Ps,So,bo]),_=new Uint32Array(4),M=new Int32Array(4),v=new W;let y=null,T=null;const A=[],S=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,L=null,U=null,z=null,k=null;this._outputColorSpace=At;let Q=0,X=0,ee=null,Y=-1,Z=null;const j=new Ct,me=new Ct;let we=null;const st=new We(0);let qe=0,Qe=t.width,R=t.height,O=1,se=null,fe=null;const ce=new Ct(0,0,Qe,R),pe=new Ct(0,0,Qe,R);let D=!1;const F=new Io;let P=!1,q=!1;const B=new St,te=new W,de=new Ct,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function $e(){return ee===null?O:1}let H=i;function lt(E,G){return t.getContext(E,G)}let Ve,I,b,$,ie,ae,ue,ge,re,le,xe,De,Se,ve,Ne,Oe,Xe,V,_e,oe,Me,Te,he;try{const E={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_o}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",di,!1),H===null){const G="webgl2";if(H=lt(G,E),H===null)throw lt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(E){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",di,!1),ct("WebGLRenderer: "+E.message),E}function Ue(){Ve=new Y0(H),Ve.init(),Me=new zm(H,Ve),I=new O0(H,Ve,e,Me),b=new Fm(H,Ve),I.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),U=H.createFramebuffer(),z=H.createFramebuffer(),k=H.createFramebuffer(),$=new K0(H),ie=new bm,ae=new Om(H,Ve,b,ie,I,Me,$),ue=new q0(C),ge=new Qf(H),Te=new U0(H,ge),re=new $0(H,ge,$,Te),le=new Q0(H,re,ge,Te,$),V=new J0(H,I,ae),Ne=new z0(ie),xe=new Sm(C,ue,Ve,I,Te,Ne),De=new Wm(C,ie),Se=new Em,ve=new Im(Ve),Xe=new N0(C,ue,b,le,g,l),Oe=new Um(C,le,I),he=new Xm(H,$,I,b),_e=new F0(H,Ve,$),oe=new Z0(H,Ve,$),$.programs=xe.programs,C.capabilities=I,C.extensions=Ve,C.properties=ie,C.renderLists=Se,C.shadowMap=Oe,C.state=b,C.info=$}x!==ci&&(w=new ep(x,t.width,t.height,o,n,a));const Pe=new Gm(C,H);this.xr=Pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(Qe,R,!1))},this.getSize=function(E){return E.set(Qe,R)},this.setSize=function(E,G,ne=!0){if(Pe.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=E,R=G,t.width=Math.floor(E*O),t.height=Math.floor(G*O),ne===!0&&(t.style.width=E+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Qe*O,R*O).floor()},this.setDrawingBufferSize=function(E,G,ne){Qe=E,R=G,O=ne,t.width=Math.floor(E*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(x===ci){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ce)},this.setViewport=function(E,G,ne,K){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,G,ne,K),b.viewport(j.copy(ce).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(pe)},this.setScissor=function(E,G,ne,K){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,G,ne,K),b.scissor(me.copy(pe).multiplyScalar(O).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(E){b.setScissorTest(D=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,ne=!0){let K=0;if(E){let J=!1;if(ee!==null){const Ee=ee.texture.format;J=p.has(Ee)}if(J){const Ee=ee.texture.type,Re=m.has(Ee),ye=Xe.getClearColor(),Ce=Xe.getClearAlpha(),Le=ye.r,Ze=ye.g,tt=ye.b;Re?(_[0]=Le,_[1]=Ze,_[2]=tt,_[3]=Ce,H.clearBufferuiv(H.COLOR,0,_)):(M[0]=Le,M[1]=Ze,M[2]=tt,M[3]=Ce,H.clearBufferiv(H.COLOR,0,M))}else K|=H.COLOR_BUFFER_BIT}G&&(K|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",di,!1),Xe.dispose(),Se.dispose(),ve.dispose(),ie.dispose(),ue.dispose(),le.dispose(),Te.dispose(),he.dispose(),xe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Yo),Pe.removeEventListener("sessionend",$o),fn.stop()};function bt(E){E.preventDefault(),cl("WebGLRenderer: Context Lost."),N=!0}function ft(){cl("WebGLRenderer: Context Restored."),N=!1;const E=$.autoReset,G=Oe.enabled,ne=Oe.autoUpdate,K=Oe.needsUpdate,J=Oe.type;Ue(),$.autoReset=E,Oe.enabled=G,Oe.autoUpdate=ne,Oe.needsUpdate=K,Oe.type=J}function di(E){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ai(E){const G=E.target;G.removeEventListener("dispose",Ai),fh(G)}function fh(E){dh(E),ie.remove(E)}function dh(E){const G=ie.get(E).programs;G!==void 0&&(G.forEach(function(ne){xe.releaseProgram(ne)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,ne,K,J,Ee){G===null&&(G=ke);const Re=J.isMesh&&J.matrixWorld.determinantAffine()<0,ye=mh(E,G,ne,K,J);b.setMaterial(K,Re);let Ce=ne.index,Le=1;if(K.wireframe===!0){if(Ce=re.getWireframeAttribute(ne),Ce===void 0)return;Le=2}const Ze=ne.drawRange,tt=ne.attributes.position;let Ie=Ze.start*Le,dt=(Ze.start+Ze.count)*Le;Ee!==null&&(Ie=Math.max(Ie,Ee.start*Le),dt=Math.min(dt,(Ee.start+Ee.count)*Le)),Ce!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,Ce.count)):tt!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,tt.count));const Nt=dt-Ie;if(Nt<0||Nt===1/0)return;Te.setup(J,K,ye,ne,Ce);let Tt,Mt=_e;if(Ce!==null&&(Tt=ge.get(Ce),Mt=oe,Mt.setIndex(Tt)),J.isMesh)K.wireframe===!0?(b.setLineWidth(K.wireframeLinewidth*$e()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(J.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),b.setLineWidth(Vt*$e()),J.isLineSegments?Mt.setMode(H.LINES):J.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else J.isPoints?Mt.setMode(H.POINTS):J.isSprite&&Mt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Vt=J._multiDrawStarts,Ae=J._multiDrawCounts,Qt=J._multiDrawCount,at=Ce?ge.get(Ce).bytesPerElement:1,hi=ie.get(K).currentProgram.getUniforms();for(let Ri=0;Ri<Qt;Ri++)hi.setValue(H,"_gl_DrawID",Ri),Mt.render(Vt[Ri]/at,Ae[Ri])}else if(J.isInstancedMesh)Mt.renderInstances(Ie,Nt,J.count);else if(ne.isInstancedBufferGeometry){const Vt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ae=Math.min(ne.instanceCount,Vt);Mt.renderInstances(Ie,Nt,Ae)}else Mt.render(Ie,Nt)};function qo(E,G,ne,K){L!==null&&E.isNodeMaterial&&L.setObject(K,E),P===!0&&Ne.setState(E,ne,!1),E.transparent===!0&&E.side===si&&E.forceSinglePass===!1?(E.side=ai,E.needsUpdate=!0,Vs(E,G,K),E.side=En,E.needsUpdate=!0,Vs(E,G,K),E.side=si):Vs(E,G,K)}this.compile=function(E,G,ne=null){ne===null&&(ne=E),L!==null&&L.renderStart(E,G,ne),T=ve.get(ne),T.init(G),S.push(T),ne.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),E!==ne&&E.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),q=this.localClippingEnabled,P=Ne.init(this.clippingPlanes,q),P===!0&&Ne.setGlobalState(this.clippingPlanes,G),L!==null&&Oe.render(T.state.shadowsArray,ne,G);const K=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ee=J.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const ye=Ee[Re];qo(ye,ne,G,J),K.add(ye)}else qo(Ee,ne,G,J),K.add(Ee)}),T=S.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(E,G,ne=null){const K=this.compile(E,G,ne);return new Promise(J=>{function Ee(){if(K.forEach(function(Re){const Ce=ie.get(Re).currentProgram;(Ce===void 0||Ce.isReady())&&K.delete(Re)}),K.size===0){J(E);return}setTimeout(Ee,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Oa=null;function uh(E){Oa&&Oa(E)}function Yo(){fn.stop()}function $o(){fn.start()}const fn=new Vc;fn.setAnimationLoop(uh),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(E){Oa=E,Pe.setAnimationLoop(E),E===null?fn.stop():fn.start()},Pe.addEventListener("sessionstart",Yo),Pe.addEventListener("sessionend",$o),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(E,G);const ne=Pe.enabled===!0&&Pe.isPresenting===!0,K=w!==null&&(ee===null||ne)&&w.begin(C,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(G),G=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,G,ee),T=ve.get(E,S.length),T.init(G),T.state.textureUnits=ae.getTextureUnits(),S.push(T),B.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),F.setFromProjectionMatrix(B,Di,G.reversedDepth),q=this.localClippingEnabled,P=Ne.init(this.clippingPlanes,q),y=Se.get(E,A.length),y.init(),A.push(y),Pe.enabled===!0&&Pe.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&za(Re,G,-1/0,C.sortObjects)}za(E,G,0,C.sortObjects),y.finish(),L!==null&&L.updateLights(T.state.lightsArray),C.sortObjects===!0&&y.sort(se,fe),Be=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Be&&Xe.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),P===!0&&Ne.beginShadows();const J=T.state.shadowsArray;if(Oe.render(J,E,G),P===!0&&Ne.endShadows(),(K&&w.hasRenderPass())===!1){const Re=y.opaque,ye=y.transmissive;if(T.setupLights(),G.isArrayCamera){const Ce=G.cameras;if(ye.length>0)for(let Le=0,Ze=Ce.length;Le<Ze;Le++){const tt=Ce[Le];Ko(Re,ye,E,tt)}Be&&Xe.render(E);for(let Le=0,Ze=Ce.length;Le<Ze;Le++){const tt=Ce[Le];Zo(y,E,tt,tt.viewport)}}else ye.length>0&&Ko(Re,ye,E,G),Be&&Xe.render(E),Zo(y,E,G)}ee!==null&&X===0&&(ae.updateMultisampleRenderTarget(ee),ae.updateRenderTargetMipmap(ee)),K&&w.end(C),E.isScene===!0&&E.onAfterRender(C,E,G),Te.resetDefaultState(),Y=-1,Z=null,S.pop(),S.length>0?(T=S[S.length-1],ae.setTextureUnits(T.state.textureUnits),P===!0&&Ne.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,L!==null&&L.renderEnd()};function za(E,G,ne,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(F)){K&&de.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const Re=le.update(E),ye=E.material;ye.visible&&y.push(E,Re,ye,ne,de.z,null,G)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(F))){const Re=le.update(E),ye=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),de.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),de.copy(Re.boundingSphere.center)),de.applyMatrix4(E.matrixWorld).applyMatrix4(B)),Array.isArray(ye)){const Ce=Re.groups;for(let Le=0,Ze=Ce.length;Le<Ze;Le++){const tt=Ce[Le],Ie=ye[tt.materialIndex];Ie&&Ie.visible&&y.push(E,Re,Ie,ne,de.z,tt,G)}}else ye.visible&&y.push(E,Re,ye,ne,de.z,null,G)}}const Ee=E.children;for(let Re=0,ye=Ee.length;Re<ye;Re++)za(Ee[Re],G,ne,K)}function Zo(E,G,ne,K){const{opaque:J,transmissive:Ee,transparent:Re}=E;T.setupLightsView(ne),P===!0&&Ne.setGlobalState(C.clippingPlanes,ne),K&&b.viewport(j.copy(K)),J.length>0&&Gs(J,G,ne),Ee.length>0&&Gs(Ee,G,ne),Re.length>0&&Gs(Re,G,ne),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ko(E,G,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){const Ie=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Ei(1,1,{generateMipmaps:!0,type:Ie?Ui:ci,minFilter:Mn,samples:Math.max(4,I.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Ee=T.state.transmissionRenderTarget[K.id],Re=K.viewport||j;Ee.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(st),qe=C.getClearAlpha(),qe<1&&C.setClearColor(16777215,.5),C.clear(),Be&&Xe.render(ne);const Ze=C.toneMapping;C.toneMapping=yi;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),P===!0&&Ne.setGlobalState(C.clippingPlanes,K),Gs(E,ne,K),ae.updateMultisampleRenderTarget(Ee),ae.updateRenderTargetMipmap(Ee),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,Nt=G.length;dt<Nt;dt++){const Tt=G[dt],{object:Mt,geometry:Vt,material:Ae,group:Qt}=Tt;if(Ae.side===si&&Mt.layers.test(K.layers)){const at=Ae.side;Ae.side=ai,Ae.needsUpdate=!0,Jo(Mt,ne,K,Vt,Ae,Qt),Ae.side=at,Ae.needsUpdate=!0,Ie=!0}}Ie===!0&&(ae.updateMultisampleRenderTarget(Ee),ae.updateRenderTargetMipmap(Ee))}C.setRenderTarget(ye,Ce,Le),C.setClearColor(st,qe),tt!==void 0&&(K.viewport=tt),C.toneMapping=Ze}function Gs(E,G,ne){const K=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Ee=E.length;J<Ee;J++){const Re=E[J],{object:ye,geometry:Ce,group:Le}=Re;let Ze=Re.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),ye.layers.test(ne.layers)&&Jo(ye,G,ne,Ce,Ze,Le)}}function Jo(E,G,ne,K,J,Ee){L!==null&&J.isNodeMaterial&&L.setObject(E,J),E.onBeforeRender(C,G,ne,K,J,Ee),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(C,G,ne,K,E,Ee),J.transparent===!0&&J.side===si&&J.forceSinglePass===!1?(J.side=ai,J.needsUpdate=!0,C.renderBufferDirect(ne,G,K,J,E,Ee),J.side=En,J.needsUpdate=!0,C.renderBufferDirect(ne,G,K,J,E,Ee),J.side=si):C.renderBufferDirect(ne,G,K,J,E,Ee),E.onAfterRender(C,G,ne,K,J,Ee)}function Vs(E,G,ne){G.isScene!==!0&&(G=ke);const K=ie.get(E),J=T.state.lights,Ee=T.state.shadowsArray,Re=J.state.version,ye=xe.getParameters(E,J.state,Ee,G,ne,T.state.lightProbeGridArray),Ce=xe.getProgramCacheKey(ye);let Le=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;const Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=ue.get(E.envMap||K.environment,Ze),K.envMapRotation=K.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Ai),Le=new Map,K.programs=Le);let tt=Le.get(Ce);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Re)return jo(E,ye),tt}else ye.uniforms=xe.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,ne,ye),E.onBeforeCompile(ye,C),tt=xe.acquireProgram(ye,Ce),Le.set(Ce,tt),K.uniforms=ye.uniforms;const Ie=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),jo(E,ye),K.needsLights=xh(E),K.lightsStateVersion=Re,K.needsLights&&(Ie.ambientLightColor.value=J.state.ambient,Ie.lightProbe.value=J.state.probe,Ie.sunLights.value=J.state.sun,Ie.sunLightShadows.value=J.state.sunShadow,Ie.directionalLights.value=J.state.directional,Ie.directionalLightShadows.value=J.state.directionalShadow,Ie.spotLights.value=J.state.spot,Ie.spotLightShadows.value=J.state.spotShadow,Ie.rectAreaLights.value=J.state.rectArea,Ie.ltc_1.value=J.state.rectAreaLTC1,Ie.ltc_2.value=J.state.rectAreaLTC2,Ie.pointLights.value=J.state.point,Ie.pointLightShadows.value=J.state.pointShadow,Ie.hemisphereLights.value=J.state.hemi,Ie.sunShadowMatrix.value=J.state.sunShadowMatrix,Ie.sunShadowCascade.value=J.state.sunShadowCascade,Ie.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ie.spotLightMatrix.value=J.state.spotLightMatrix,Ie.spotLightMap.value=J.state.spotLightMap,Ie.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=tt,K.uniformsList=null,tt}function Qo(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Ma.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function jo(E,G){const ne=ie.get(E);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function ph(E,G){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(G.matrixWorld);for(let ne=0,K=E.length;ne<K;ne++){const J=E[ne];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function mh(E,G,ne,K,J){G.isScene!==!0&&(G=ke),ae.resetTextureUnits();const Ee=G.fog,Re=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,ye=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:it.workingColorSpace,Ce=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Le=ue.get(K.envMap||Re,Ce),Ze=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,tt=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!ne.morphAttributes.position,dt=!!ne.morphAttributes.normal,Nt=!!ne.morphAttributes.color;let Tt=yi;K.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Tt=C.toneMapping);const Mt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Vt=Mt!==void 0?Mt.length:0,Ae=ie.get(K),Qt=T.state.lights;if(P===!0&&(q===!0||E!==Z)){const yt=E===Z&&K.id===Y;Ne.setState(K,E,yt)}let at=!1;K.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Qt.state.version||Ae.outputColorSpace!==ye||J.isBatchedMesh&&Ae.batching===!1||!J.isBatchedMesh&&Ae.batching===!0||J.isBatchedMesh&&Ae.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ae.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ae.instancing===!1||!J.isInstancedMesh&&Ae.instancing===!0||J.isSkinnedMesh&&Ae.skinning===!1||!J.isSkinnedMesh&&Ae.skinning===!0||J.isInstancedMesh&&Ae.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ae.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ae.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ae.instancingMorph===!1&&J.morphTexture!==null||Ae.envMap!==Le||K.fog===!0&&Ae.fog!==Ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ne.numPlanes||Ae.numIntersection!==Ne.numIntersection)||Ae.vertexAlphas!==Ze||Ae.vertexTangents!==tt||Ae.morphTargets!==Ie||Ae.morphNormals!==dt||Ae.morphColors!==Nt||Ae.toneMapping!==Tt||Ae.morphTargetsCount!==Vt||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ae.__version=K.version);let hi=Ae.currentProgram;at===!0&&(hi=Vs(K,G,J),L&&K.isNodeMaterial&&L.onUpdateProgram(K,hi,Ae));let Ri=!1,Ki=!1,Ln=!1;const mt=hi.getUniforms(),It=Ae.uniforms;if(b.useProgram(hi.program)&&(Ri=!0,Ki=!0,Ln=!0),K.id!==Y&&(Y=K.id,Ki=!0),Ae.needsLights){const yt=ph(T.state.lightProbeGridArray,J);Ae.lightProbeGrid!==yt&&(Ae.lightProbeGrid=yt,Ki=!0)}if(Ri||Z!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(H,"projectionMatrix",E.projectionMatrix),mt.setValue(H,"viewMatrix",E.matrixWorldInverse);const Qi=mt.map.cameraPosition;Qi!==void 0&&Qi.setValue(H,te.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&mt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Ki=!0,Ln=!0)}if(Ae.needsLights&&(Qt.state.sunShadowMap.length>0&&mt.setValue(H,"sunShadowMap",Qt.state.sunShadowMap,ae),Qt.state.directionalShadowMap.length>0&&mt.setValue(H,"directionalShadowMap",Qt.state.directionalShadowMap,ae),Qt.state.spotShadowMap.length>0&&mt.setValue(H,"spotShadowMap",Qt.state.spotShadowMap,ae),Qt.state.pointShadowMap.length>0&&mt.setValue(H,"pointShadowMap",Qt.state.pointShadowMap,ae)),J.isSkinnedMesh){mt.setOptional(H,J,"bindMatrix"),mt.setOptional(H,J,"bindMatrixInverse");const yt=J.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),mt.setValue(H,"boneTexture",yt.boneTexture,ae))}J.isBatchedMesh&&(mt.setOptional(H,J,"batchingTexture"),mt.setValue(H,"batchingTexture",J._matricesTexture,ae),mt.setOptional(H,J,"batchingIdTexture"),mt.setValue(H,"batchingIdTexture",J._indirectTexture,ae),mt.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&mt.setValue(H,"batchingColorTexture",J._colorsTexture,ae));const Ji=ne.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&V.update(J,ne,hi),(Ki||Ae.receiveShadow!==J.receiveShadow)&&(Ae.receiveShadow=J.receiveShadow,mt.setValue(H,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(It.envMapIntensity.value=G.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Ym()),Ki){if(mt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&gh(It,Ln),Ee&&K.fog===!0&&De.refreshFogUniforms(It,Ee),De.refreshMaterialUniforms(It,K,O,R,T.state.transmissionRenderTarget[E.id]),Ae.needsLights&&Ae.lightProbeGrid){const yt=Ae.lightProbeGrid;It.probesSH.value=yt.texture,It.probesMin.value.copy(yt.boundingBox.min),It.probesMax.value.copy(yt.boundingBox.max),It.probesResolution.value.copy(yt.resolution)}Ma.upload(H,Qo(Ae),It,ae)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ma.upload(H,Qo(Ae),It,ae),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&mt.setValue(H,"center",J.center),mt.setValue(H,"modelViewMatrix",J.modelViewMatrix),mt.setValue(H,"normalMatrix",J.normalMatrix),mt.setValue(H,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){const yt=K.uniformsGroups;for(let Qi=0,Dn=yt.length;Qi<Dn;Qi++){const tl=yt[Qi];he.update(tl,hi),he.bind(tl,hi)}}return hi}function gh(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.sunLights.needsUpdate=G,E.sunLightShadows.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function xh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,G,ne){const K=ie.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ie.get(E.texture).__webglTexture=G,ie.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const ne=ie.get(E);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,ne=0){ee=E,Q=G,X=ne;let K=null,J=!1,Ee=!1;if(E){const ye=ie.get(E);if(ye.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(H.FRAMEBUFFER,ye.__webglFramebuffer),j.copy(E.viewport),me.copy(E.scissor),we=E.scissorTest,b.viewport(j),b.scissor(me),b.setScissorTest(we),Y=-1;return}else if(ye.__webglFramebuffer===void 0)ae.setupRenderTarget(E);else if(ye.__hasExternalTextures)ae.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ze=E.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&ie.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);const Le=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[G])?K=Le[G][ne]:K=Le[G],J=!0):E.samples>0&&ae.useMultisampledRTT(E)===!1?K=ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?K=Le[ne]:K=Le,j.copy(E.viewport),me.copy(E.scissor),we=E.scissorTest}else j.copy(ce).multiplyScalar(O).floor(),me.copy(pe).multiplyScalar(O).floor(),we=D;if(ne!==0&&(K=U),b.bindFramebuffer(H.FRAMEBUFFER,K)&&b.drawBuffers(E,K),b.viewport(j),b.scissor(me),b.setScissorTest(we),J){const ye=ie.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,ne)}else if(Ee){const ye=G;for(let Ce=0;Ce<E.textures.length;Ce++){const Le=ie.get(E.textures[Ce]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,ne,ye)}}else if(E!==null&&ne!==0){const ye=ie.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ye.__webglTexture,ne)}Y=-1};function el(E){const G=ie.get(E);return(G.__readFormat!==E.format||G.__readType!==E.type)&&(G.__readFormat=E.format,G.__readType=E.type,G.__formatReadable=I.textureFormatReadable(E.format),G.__typeReadable=I.textureTypeReadable(E.type)),G}this.readRenderTargetPixels=function(E,G,ne,K,J,Ee,Re,ye=0){if(!(E&&E.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){b.bindFramebuffer(H.FRAMEBUFFER,Ce);try{const Le=E.textures[ye],Ze=Le.format,tt=Le.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ye);const Ie=el(Le);if(Ie.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-K&&ne>=0&&ne<=E.height-J&&H.readPixels(G,ne,K,J,Me.convert(Ze),Me.convert(tt),Ee)}finally{const Le=ee!==null?ie.get(ee).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,G,ne,K,J,Ee,Re,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce)if(G>=0&&G<=E.width-K&&ne>=0&&ne<=E.height-J){b.bindFramebuffer(H.FRAMEBUFFER,Ce);const Le=E.textures[ye],Ze=Le.format,tt=Le.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ye);const Ie=el(Le);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(G,ne,K,J,Me.convert(Ze),Me.convert(tt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Nt=ee!==null?ie.get(ee).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,Nt);const Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hf(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(dt),H.deleteSync(Tt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,ne=0){const K=Math.pow(2,-ne),J=Math.floor(E.image.width*K),Ee=Math.floor(E.image.height*K),Re=G!==null?G.x:0,ye=G!==null?G.y:0;ae.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Re,ye,J,Ee),b.unbindTexture()},this.copyTextureToTexture=function(E,G,ne=null,K=null,J=0,Ee=0){let Re,ye,Ce,Le,Ze,tt,Ie,dt,Nt;const Tt=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(ne!==null)Re=ne.max.x-ne.min.x,ye=ne.max.y-ne.min.y,Ce=ne.isBox3?ne.max.z-ne.min.z:1,Le=ne.min.x,Ze=ne.min.y,tt=ne.isBox3?ne.min.z:0;else{const It=Math.pow(2,-J);Re=Math.floor(Tt.width*It),ye=Math.floor(Tt.height*It),E.isDataArrayTexture?Ce=Tt.depth:E.isData3DTexture?Ce=Math.floor(Tt.depth*It):Ce=1,Le=0,Ze=0,tt=0}K!==null?(Ie=K.x,dt=K.y,Nt=K.z):(Ie=0,dt=0,Nt=0);const Mt=Me.convert(G.format),Vt=Me.convert(G.type);let Ae;G.isData3DTexture?(ae.setTexture3D(G,0),Ae=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ae.setTexture2DArray(G,0),Ae=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(G,0),Ae=H.TEXTURE_2D),b.activeTexture(H.TEXTURE0),b.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Qt=b.getParameter(H.UNPACK_ROW_LENGTH),at=b.getParameter(H.UNPACK_IMAGE_HEIGHT),hi=b.getParameter(H.UNPACK_SKIP_PIXELS),Ri=b.getParameter(H.UNPACK_SKIP_ROWS),Ki=b.getParameter(H.UNPACK_SKIP_IMAGES);b.pixelStorei(H.UNPACK_ROW_LENGTH,Tt.width),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt.height),b.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),b.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),b.pixelStorei(H.UNPACK_SKIP_IMAGES,tt);const Ln=E.isDataArrayTexture||E.isData3DTexture,mt=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const It=ie.get(E),Ji=ie.get(G),yt=ie.get(It.__renderTarget),Qi=ie.get(Ji.__renderTarget);b.bindFramebuffer(H.READ_FRAMEBUFFER,yt.__webglFramebuffer),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let Dn=0;Dn<Ce;Dn++)Ln&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.get(E).__webglTexture,J,tt+Dn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.get(G).__webglTexture,Ee,Nt+Dn)),H.blitFramebuffer(Le,Ze,Re,ye,Ie,dt,Re,ye,H.DEPTH_BUFFER_BIT,H.NEAREST);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||ie.has(E)){const It=ie.get(E),Ji=ie.get(G);b.bindFramebuffer(H.READ_FRAMEBUFFER,z),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,k);for(let yt=0;yt<Ce;yt++)Ln?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,J,tt+yt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,J),mt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ji.__webglTexture,Ee,Nt+yt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ji.__webglTexture,Ee),J!==0?H.blitFramebuffer(Le,Ze,Re,ye,Ie,dt,Re,ye,H.COLOR_BUFFER_BIT,H.NEAREST):mt?H.copyTexSubImage3D(Ae,Ee,Ie,dt,Nt+yt,Le,Ze,Re,ye):H.copyTexSubImage2D(Ae,Ee,Ie,dt,Le,Ze,Re,ye);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else mt?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Ae,Ee,Ie,dt,Nt,Re,ye,Ce,Mt,Vt,Tt.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Ae,Ee,Ie,dt,Nt,Re,ye,Ce,Mt,Tt.data):H.texSubImage3D(Ae,Ee,Ie,dt,Nt,Re,ye,Ce,Mt,Vt,Tt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,Ie,dt,Re,ye,Mt,Vt,Tt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,Ie,dt,Tt.width,Tt.height,Mt,Tt.data):H.texSubImage2D(H.TEXTURE_2D,Ee,Ie,dt,Re,ye,Mt,Vt,Tt);b.pixelStorei(H.UNPACK_ROW_LENGTH,Qt),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),b.pixelStorei(H.UNPACK_SKIP_PIXELS,hi),b.pixelStorei(H.UNPACK_SKIP_ROWS,Ri),b.pixelStorei(H.UNPACK_SKIP_IMAGES,Ki),Ee===0&&G.generateMipmaps&&H.generateMipmap(Ae),b.unbindTexture()},this.initRenderTarget=function(E){ie.get(E).__webglFramebuffer===void 0&&ae.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ae.setTextureCube(E,0):E.isData3DTexture?ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ae.setTexture2DArray(E,0):ae.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){Q=0,X=0,ee=null,b.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function No(s,e=!1){const t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new Jt;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in a){const d=tc(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<r[h].length;++x)u.push(r[h][x][f]);const g=tc(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function tc(s){let e,t,i,n=-1,a=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new Ti(r,t,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<t;g++){const x=h.getComponent(f,g);o.setComponent(f+d,g,x)}}else r.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}const je=s=>{const e=Math.sin(s*127.1+91.7)*43758.5453;return e-Math.floor(e)};function Jc(s,e=!1){const t=new Oi(s);return t.magFilter=t.minFilter=_t,t.colorSpace=At,t.generateMipmaps=!1,e&&(t.wrapS=t.wrapT=wn),t}function Zm(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),i={brick:["#48434c","#63585e","#292c35"],metal:["#626b6e","#b3b9b1","#343d45"],concrete:["#77776c","#a6a190","#484c49"],crate:["#696047","#988457","#30342c"],floor:["#46514f","#7e877b","#283338"],labfloor:["#52625f","#839488","#2a4143"],road:["#686a68","#a09f94","#424951"],ceiling:["#2c3a3a","#53635b","#142628"],door:["#3d5149","#7d8e77","#182b29"],fuel:["#954732","#c87647","#4d302b"]},n=i[s]??i.metal,a=(l,c,h,d,f)=>{t.fillStyle=l,t.fillRect(c,h,d,f)},r=(l,c,h=1)=>{t.strokeStyle=l,t.lineWidth=h,t.beginPath(),t.moveTo(c[0],c[1]);for(let d=2;d<c.length;d+=2)t.lineTo(c[d],c[d+1]);t.stroke()},o=(l,c)=>{a("#172827",l,c,4,4),a("#a2ac95",l,c,3,2),a("#63776b",l+1,c+2,2,1),a("#263e39",l+1,c+1,1,1)};a(n[0],0,0,128,128);for(let l=0;l<1500;l++)t.globalAlpha=.18+je(l)*.2,a(l%3?n[2]:n[1],je(l+1)*128|0,je(l+2)*128|0,1+l%3,1);if(t.globalAlpha=1,s==="brick"){for(let l=0;l<8;l++)for(let c=-1;c<5;c++){const h=c*32+l%2*16,d=l*16,f=l*5+c+2;t.globalAlpha=.15+je(f+70)*.15,a(f%3?n[1]:n[2],h+2,d+2,29,13),t.globalAlpha=1,a("#202832",h,d,32,2),a("#242930",h,d,2,16),a("#77656a",h+3,d+3,26,1),a("#584e56",h+2,d+4,1,9),a("#33323a",h+3,d+14,27,1),f%3===0&&(a("#292d35",h+22,d+3,3,2),a("#81716e",h+22,d+5,4,1)),f%4===0&&r("#302c35",[h+12,d+4,h+10,d+7,h+12,d+10,h+11,d+13]),a("#393a40",h+5,d+9,4,1),a("#62545a",h+17,d+7,6,1)}for(let l=0;l<15;l++)t.globalAlpha=.12,a("#1b302c",je(l+201)*128|0,je(l+231)*128|0,4,8);t.globalAlpha=1}else if(s==="fuel"){for(const l of[8,35,95,117])a("#252d33",0,l,128,5),a("#87918b",0,l,128,2);for(const l of[8,40,72,104])a("#d6b55e",l,48,24,34),a("#392e27",l+2,50,20,30),t.fillStyle="#efc368",t.beginPath(),t.moveTo(l+12,52),t.lineTo(l+20,66),t.lineTo(l+4,66),t.fill(),a("#312b25",l+11,56,2,6),a("#312b25",l+11,63,2,2),a("#d5be86",l+4,71,16,2),a("#a38960",l+4,76,12,1);for(let l=0;l<20;l++)a("#513e35",je(l+33)*128,je(l+66)*128,1,3+je(l+4)*8)}else if(["metal","ceiling","door"].includes(s)){for(let l=0;l<2;l++)for(let c=0;c<2;c++){const h=c*64,d=l*64;a(n[2],h,d,64,3),a(n[2],h,d,3,64),a(n[1],h+3,d+3,59,1),a("#8c9690",h+3,d+4,1,57);for(let f=0;f<46;f++){const u=h+5+(je(f+c*47+l*97)*51|0),g=d+5+(je(f+138)*52|0);t.globalAlpha=.12+je(f+8)*.18,a(f%3?n[2]:n[1],u,g,1+(je(f+77)*9|0),1)}t.globalAlpha=1,a(n[1],h+5,d+5,55,1),a("#89968f",h+4,d+7,1,38),a(n[2],h+59,d+8,2,47);for(const f of[7,55])for(const u of[7,55])o(h+f,d+u);for(let f=0;f<7;f++){const u=h+10+je(f+l*14+c*7)*42|0,g=d+13+f*6;a("#263d38",u,g,10,1),a("#748077",u+2,g+1,5,1)}if(a("#7e6643",h+3,d+48,3,12),a("#553f2b",h+6,d+55,6,4),s==="ceiling"||s==="metal"&&l===1&&c===1){a("#1a2d2e",h+17,d+19,31,27);for(let f=21;f<45;f+=4)a("#16252b",h+20,d+f,25,2),a("#83958b",h+20,d+f+2,25,1)}}if(s==="door"){a("#172929",12,14,104,93),a("#718573",14,16,100,2);for(let l=20;l<101;l+=8)a("#4f6b59",16,l,96,4),a("#263e37",16,l+4,96,3),a("#76917a",18,l,90,1);a("#c7ab53",0,108,128,13);for(let l=-16;l<144;l+=24)t.fillStyle="#242c28",t.beginPath(),t.moveTo(l,121),t.lineTo(l+12,108),t.lineTo(l+24,108),t.lineTo(l+12,121),t.fill();a("#132a28",60,0,4,108),a("#92a288",65,2,2,104);for(const l of[7,97])o(53,l),o(72,l)}}else if(s==="crate"){for(let l=0;l<128;l+=16){a("#3e4030",l,0,2,128),a("#a18c5b",l+3,3,1,119);for(let c=8;c<120;c+=11)a("#4f4c35",l+5,c,7,1)}for(const l of[0,60,120])a("#333a30",l,0,8,128),a("#77836b",l+1,2,2,123);for(const l of[0,60,120])a("#333a30",0,l,128,8),a("#8e916f",3,l+1,121,2);for(const l of[3,63,123])for(const c of[5,62,122])o(l,c);a("#c4b886",19,21,34,22),a("#292f27",22,24,28,3),a("#595b40",22,30,19,2);for(let l=23;l<49;l+=3)a("#3d4934",l,36,1,5)}else if(s==="floor"||s==="labfloor")for(let l=0;l<2;l++)for(let c=0;c<2;c++){const h=c*64,d=l*64;a(n[2],h,d,64,3),a(n[2],h,d,3,64),a(n[1],h+3,d+3,59,1),a("#54675b",h+3,d+4,1,57);for(let f=0;f<9;f++){const u=h+8+je(f+l*21+c*7)*44|0,g=d+9+je(f+90)*44|0;a("#637363",u,g,5,1),a("#243a35",u+1,g+1,7,1)}if(s==="floor"){o(h+7,d+7),o(h+54,d+54);for(let f=14;f<52;f+=9)for(let u=15;u<52;u+=12)r("#506157",[h+u,d+f,h+u+3,d+f-3,h+u+5,d+f-3])}else l===1&&c===0&&r("#263e38",[h+20,d+3,h+21,d+12,h+26,d+19,h+25,d+29,h+31,d+35,h+32,d+45])}else if(s==="concrete"){a("#273c3d",0,0,128,3),a("#7b8173",0,3,128,1),a("#344848",0,64,128,2),r("#2b3b3d",[17,4,20,19,14,32,17,40,9,48,7,65]),r("#728074",[19,5,22,20,16,32]),r("#293b3c",[105,65,103,81,94,92,94,101,89,108,88,125]),r("#687768",[105,82,110,89,120,91]);for(const l of[11,115])for(const c of[12,114])a("#273c3c",l,c,5,4),a("#8b8c78",l,c,4,1);for(let l=0;l<16;l++)t.globalAlpha=.15,a("#1b3436",8+l*7,5,3,10+je(l+4)*30);t.globalAlpha=1}else if(s==="road"){for(let l=0;l<128;l++)for(let c=0;c<128;c++){const h=je((c>>3)*17+(l>>3)*271),d=je(c*19+l*131),f=90+h*22+d*24,u=Math.round(f/5)*5;a(`rgb(${u},${u+2},${u})`,c,l,1,1)}for(let l=0;l<720;l++){const c=je(l+19)*128|0,h=je(l+81)*128|0,d=l%9===0?3:l%3===0?2:1;a(l%4===0?"#484d51":"#7b7e76",c,h,d,1),d>1&&(a("#99998c",c,h-1,d-1,1),a("#4d5353",c+1,h+1,d,1))}for(let l=0;l<27;l++)t.globalAlpha=.09,a(l%2?"#32414b":"#b1a998",je(l+53)*128|0,je(l+94)*128|0,3+(je(l)*13|0),2+(je(l+5)*7|0));t.globalAlpha=1,r("#3b4143",[97,57,95,62,99,66,96,73,103,78,102,84]),r("#898b7f",[98,57,97,61,100,66,98,73,105,77]),r("#41484a",[97,73,89,75,84,72,78,76]);for(let l=0;l<7;l++)a("#8b8c80",je(l+34)*128|0,je(l+65)*128|0,2,1)}return Jc(e,!0)}function Km(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),i=(n,a,r,o,l)=>{t.fillStyle=n,t.fillRect(a,r,o,l)};if(t.imageSmoothingEnabled=!1,s==="poster"){i("#142e32",4,3,118,122),i("#8ba084",8,7,110,110),i("#273a38",12,11,102,67);for(let n=0;n<12;n++)i(n%2?"#5b856e":"#365b54",19+n*7,20,3,44),i("#b2c09b",17+n*7,27+n%4*8,7,3);t.textAlign="center",t.fillStyle="#c8d4aa",t.font="bold 15px monospace",t.fillText("AXIOM",64,29),t.font="bold 9px monospace",t.fillText("A BETTER SPECIES",64,72),t.fillStyle="#293d37",t.fillText("LAZARUS / 2091",64,90),t.fillText("TRUST THE FUTURE",64,103),i("#597460",12,114,66,2),i("#203a34",22,119,86,2),i("#0d272d",4,100,5,15),i("#0d272d",119,8,5,16)}else if(s==="graffiti"){t.textAlign="center",t.font="bold 24px monospace",t.fillStyle="#cb5365",t.fillText("THEY LIED",64,54),t.font="bold 12px monospace",t.fillText("MARA IS ALIVE",64,74);for(let n=0;n<8;n++)i("#a33e50",14+n*14,56,1,5+je(n)*15);t.strokeStyle="#b75059",t.lineWidth=2,t.beginPath(),t.moveTo(8,83),t.lineTo(116,88),t.stroke()}else if(s==="paper"){i("#766e55",9,9,108,111),i("#c2b791",8,6,106,109),i("#aea17e",9,111,101,4),i("#3e4940",17,15,51,7),i("#7d4543",83,13,23,13);for(let n=0;n<13;n++)i("#6e7461",18,30+n*5,48+je(n)*37,1),n%3===0&&i("#9b9271",16,31+n*5,80,1);i("#7c5f50",75,69,28,22),i("#37473e",80,74,18,14),i("#b0a47c",12,93,16,13),t.fillStyle="#713f38",t.font="bold 8px monospace",t.fillText("CASE 091",36,105)}else if(s==="puddle"){t.fillStyle="#173541",t.beginPath();for(let n=0;n<20;n++){const a=n*Math.PI/10,r=45+je(n)*13,o=64+Math.cos(a)*r,l=64+Math.sin(a)*r*.65;n?t.lineTo(o,l):t.moveTo(o,l)}t.closePath(),t.fill();for(let n=0;n<14;n++)i(n%3?"#214f54":"#3a796a",20+je(n)*85,44+je(n+13)*41,7+je(n+9)*25,1);i("#548a73",34,49,27,1),i("#407869",73,58,21,1)}else if(s==="leak"){for(let n=0;n<40;n++)t.globalAlpha=.2+je(n)*.6,i(n%3?"#352d2a":"#806443",je(n)*128,je(n+5)*18,1+je(n+9)*4,19+je(n+3)*104);t.globalAlpha=1}else{i("#102a2b",0,0,128,128),i("#6a7a67",3,3,122,3),i("#3b5950",3,6,3,119);for(let n=0;n<6;n++)i("#203b36",10,12+n*17,75,11),i("#537766",13,15+n*17,42,2),i("#62dda0",17+n*8,17+n*17,5,3),i("#88a58b",94,14+n*17,18,6),i(n%2?"#edac58":"#74dca0",117,15+n*17,3,3);for(let n=0;n<9;n++)i("#899277",12+n*12,120,5,2)}return Jc(e)}const ni=s=>{const e=Math.sin(s*127.1+91.7)*43758.5453;return e-Math.floor(e)},Jm=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Qm(s){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),i=t.createImageData(64,64);for(let a=0;a<64;a++)for(let r=0;r<64;r++){const o=(r-31.5)/31,l=(a-31.5)/31,c=Math.sqrt(o*o+l*l),h=(a*64+r)*4;let d=0,f=[0,0,0];if(s==="shadow")d=Math.max(0,1-c*c)*.88,f=[6,12,18];else if(s==="mist")d=Math.max(0,1-c)*(.45+ni((r>>2)+(a>>2)*16)*.55),f=[168,196,184];else if(s==="blood"){const u=.7+ni((r>>2)+(a>>2)*16)*.28;d=c<u?.9:0,f=ni(r+a*64)>.7?[105,29,43]:[62,17,28],c<.48&&ni(r+a*7)>.77&&(f=[128,43,49])}else d=c<.32?1:c<.7&&ni((r>>1)+(a>>1)*32)>.58?.88:0,f=c<.36?[5,13,19]:c<.5?[93,97,83]:[43,52,51],Math.abs(o+l*.7)<.025&&c>.3&&c<.9&&(d=1,f=[16,25,30]);i.data[h]=f[0],i.data[h+1]=f[1],i.data[h+2]=f[2],i.data[h+3]=d>(Jm[a%4*4+r%4]+.5)/16?255:0}t.putImageData(i,0,0);const n=new Oi(e);return n.magFilter=n.minFilter=_t,n.generateMipmaps=!1,n.colorSpace=At,n}class jm{constructor(e,t=jn){this.level=t,(this.level.chapterId??0)!==0&&(this.vents=this.level.props.filter(r=>r.kind==="vent"||r.kind==="tank"||r.kind==="reactor").slice(0,8).map(r=>({x:r.x,z:r.z}))),this.vents.length||(this.vents=[{x:this.level.switch.x,z:this.level.switch.z}]);const i=(r,o=1)=>{const l=new Dt({map:Qm(r),transparent:o<1,opacity:o,alphaTest:.01,depthWrite:!1,side:si,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return this.materials.push(l),l},n=(r,o,l)=>{const c=new Oc(r,o,l);return c.instanceMatrix.setUsage(_a),c.frustumCulled=!1,c.count=0,e.add(c),c};this.shadows=n(new Rt(1,1),i("shadow",.38),128),this.blood=n(new Rt(1,1),i("blood"),128),this.impacts=n(new Rt(1,1),i("impact"),64),this.impacts.renderOrder=1,this.blood.renderOrder=1,this.mist=n(new Rt(1,1),i("mist",.2),20);const a=new Dt({color:9287348,transparent:!0,opacity:.35,depthWrite:!1});this.materials.push(a),this.rain=n(new Yt(.013,.31,.013),a,112)}shadows;rain;mist;impacts;blood;object=new Ot;normal=new W;forward=new W(0,0,1);marks=[];seen=new WeakSet;previous;materials=[];vents=[{x:4,z:-3},{x:-11.65,z:-11},{x:11.65,z:-17},{x:-9.6,z:-38.8},{x:9.6,z:-41}];floor(e,t){return(this.level.chapterId??0)!==0?.057:t>-20&&t<4&&Math.abs(e)>10.5?.167:.057}ground(e,t,i,n,a,r,o=this.floor(i,n)){this.object.position.set(i,o,n),this.object.rotation.set(-Math.PI/2,0,0),this.object.scale.set(a,r,1),this.object.updateMatrix(),e.setMatrixAt(t,this.object.matrix)}update(e,t,i,n){this.previous!==e&&(this.marks=[],this.seen=new WeakSet,this.previous=e,this.impacts.count=0);let a=0,r=0;for(const o of e.enemies){const l=o.kind==="brute"?1.05:o.kind==="raptor"?.6:.48;a<128&&this.ground(this.shadows,a++,o.x,o.z,l*2.4,l*1.7),!o.alive&&r<128&&this.ground(this.blood,r++,o.x,o.z,l*2.8,l*2.1,this.floor(o.x,o.z)+.004)}if(!e.player.mounted&&!this.level.safe&&e.mount.x>=this.level.bounds.minX&&e.mount.x<=this.level.bounds.maxX&&e.mount.z>=this.level.bounds.minZ&&e.mount.z<=this.level.bounds.maxZ&&a<128&&this.ground(this.shadows,a++,e.mount.x,e.mount.z,2.7,1.65),this.shadows.count=a,this.blood.count=r,this.shadows.instanceMatrix.needsUpdate=this.blood.instanceMatrix.needsUpdate=!0,this.rain.visible=n.quality==="high"&&["district","docks","jungle"].includes(this.level.theme??"district"),this.rain.count=this.rain.visible?112:0,this.rain.visible)for(let o=0;o<this.rain.count;o++){const l=(ni(o+40)+i*(.54+ni(o+53)*.23))%1,c=this.level.bounds;this.object.position.set((this.level.chapterId??0)===0?-11.8+ni(o+7)*23.6:c.minX+1+ni(o+7)*(c.maxX-c.minX-2),.3+(1-l)*7.5,(this.level.chapterId??0)===0?3-ni(o+29)*22:c.minZ+1+ni(o+29)*(c.maxZ-c.minZ-2)),this.object.rotation.set(0,0,-.13),this.object.scale.set(1,.6+ni(o+8)*.7,1),this.object.updateMatrix(),this.rain.setMatrixAt(o,this.object.matrix)}if(this.rain.instanceMatrix.needsUpdate=!0,this.mist.visible=n.quality==="high",this.mist.count=this.mist.visible?20:0,this.mist.visible)for(let o=0;o<this.mist.count;o++){const l=this.vents[o%this.vents.length],c=(ni(o+10)+i*.22)%1,h=.6+c*.85;this.object.position.set(l.x+Math.sin(o*2.3+i*.6)*c*.35,.18+c*1.35,l.z+Math.cos(o+i*.4)*c*.25),this.object.quaternion.copy(t.quaternion),this.object.scale.set(h,h*1.13,1),this.object.updateMatrix(),this.mist.setMatrixAt(o,this.object.matrix)}this.mist.instanceMatrix.needsUpdate=!0;for(const o of e.effects)o.kind==="spark"&&!this.seen.has(o)&&(this.seen.add(o),this.recordImpact(o));for(let o=0;o<this.marks.length;o++){const l=this.marks[o];this.object.position.copy(l.position),this.object.quaternion.setFromUnitVectors(this.forward,l.normal),this.object.scale.setScalar(l.size),this.object.updateMatrix(),this.impacts.setMatrixAt(o,this.object.matrix)}this.impacts.count=this.marks.length,this.impacts.instanceMatrix.needsUpdate=!0}recordImpact(e){let t=.045,i,n;for(const a of this.level.walls){const r=a.y??0,o=r+a.h,l=[{axis:"x",value:e.x,center:a.x,half:a.w/2},{axis:"z",value:e.z,center:a.z,half:a.d/2}];if(!(e.y<r-.02||e.y>o+.02))for(const c of l){const h=c.axis==="x"?e.z-a.z:e.x-a.x,d=c.axis==="x"?a.d/2:a.w/2;if(Math.abs(h)>d+.015)continue;const f=c.value>=c.center?1:-1,u=c.center+f*c.half,g=Math.abs(c.value-u);g>=t||(t=g,i=new W(e.x,e.y,e.z),i[c.axis]=u+f*.013,this.normal.set(0,0,0),this.normal[c.axis]=f,n=this.normal.clone())}}i&&n&&(this.marks.push({position:i,normal:n,size:.15+ni(i.x+i.z)*.075}),this.marks.length>64&&this.marks.shift())}dispose(){for(const e of[this.shadows,this.rain,this.mist,this.impacts,this.blood])e.removeFromParent(),e.geometry.dispose();for(const e of this.materials)e.map?.dispose(),e.dispose()}}function e1(s){const e=s.mat(5005912),t=s.mat(1716275),i=s.mat(9279361),n=s.mat(7885891),a=s.mat(7496267),r=s.mat(9060163),o=s.box.bind(s),l=(f,u,g,x,p=6)=>{const m=u.clone().sub(f),_=m.length(),M=new Je(g,g,_,p);M.applyQuaternion(new Kt().setFromUnitVectors(new W(0,1,0),m.normalize()));const v=f.clone().add(u).multiplyScalar(.5);s.addGeometry(M,x,v.x,v.y,v.z)},c=(f,u,g)=>new W(f,u,g),h=f=>{const u=Math.sin(f*127.1+91.7)*43758.5453;return u-Math.floor(u)};o(4.885,1.19,7.7,.045,.075,3.77,a),o(4.885,2.87,7.7,.045,.075,3.77,a);for(const f of[5.83,9.57])o(4.885,2.03,f,.045,1.72,.07,a);const d=[];for(let f=0;f<7;f++){const u=1.8+h(f)*.5,g=7.7+(h(f+10)-.5)*2.8;d.push(c(4.795,u+.125,g)),s.addGeometry(new Je(.025,.025,.04,6),n,4.8,u+.125,g,0,0,Math.PI/2),o(4.842,u+.005,g-.035,.012,.17,.11,t),o(4.832,u+.035,g-.035,.008,.053,.04,i),o(4.832,u-.025,g-.035,.008,.06,.068,e);for(let x=0;x<3;x++)o(4.832,u-.115+x*.023,g+.028,.008,.009,.095-x*.015,n)}for(const[f,u]of[[0,2],[2,5],[5,1],[1,4],[4,3],[3,6],[6,2]])l(d[f],d[u],.008,r,4);o(2.75,2.6,11.958,2.77,1.84,.045,t),o(2.75,2.6,11.925,.045,1.84,.028,e);for(const f of[1.33,4.17])o(f,2.6,11.907,.09,1.94,.055,a);for(const f of[1.65,3.55])o(2.75,f,11.907,2.94,.09,.055,a);for(let f=0;f<16;f++){const u=1.78+f*.105;o(2.75,u,11.899,2.7,.062,.055,e),o(2.75,u+.028,11.865,2.69,.014,.012,i)}for(const f of[1.96,3.51])o(f,2.57,11.86,.016,1.72,.018,t);l(c(4.24,3.42,11.872),c(4.24,2.58,11.872),.007,i,4),s.addGeometry(new Je(.035,.035,.08,6),a,4.24,2.55,11.872),s.addGeometry(new Je(.345,.345,.07,16),e,0,3.33,11.914,Math.PI/2),s.addGeometry(new Je(.299,.299,.014,16),i,0,3.33,11.868,Math.PI/2);for(let f=0;f<12;f++){const u=f*Math.PI/6;l(c(Math.sin(u)*.245,3.33+Math.cos(u)*.245,11.856),c(Math.sin(u)*.274,3.33+Math.cos(u)*.274,11.856),.009,t,4)}l(c(0,3.33,11.841),c(-.125,3.43,11.841),.014,t,4),l(c(0,3.33,11.838),c(.18,3.405,11.838),.009,t,4);for(const f of[-2.5,-12.8])for(const u of[0,.23]){let g=c(-12.8,6.13,f+u);for(let x=1;x<=12;x++){const p=-12.8+x*25.6/12,m=x/12,_=6.13-Math.sin(m*Math.PI)*1.12,M=c(p,_,f+u);l(g,M,.025,t),g=M}for(const x of[-1,1])o(x*12.81,6.11,f+u,.23,.2,.11,e),s.addGeometry(new Je(.075,.075,.15,6),i,x*12.68,6.08,f+u,0,0,Math.PI/2)}for(const f of[-1,1])for(const u of[-3.4,-12.2,-16.6]){o(f*12.925,.87,u,.075,1.18,1.82,t);for(const g of[-.89,.89])o(f*12.875,.87,u+g,.035,1.13,.035,e);for(const g of[.33,1.4])o(f*12.875,g,u,.035,.03,1.8,e);for(const g of[-.65,.65])for(const x of[.43,1.3])o(f*12.846,x,u+g,.018,.045,.045,i);o(f*12.854,1.04,u+.6,.045,.26,.08,e),o(f*12.809,1.05,u+.6,.025,.18,.035,i),o(f*12.877,.84,u-.46,.14,.47,.36,e),o(f*12.798,.84,u-.46,.022,.37,.27,t),s.addGeometry(new Je(.095,.095,.02,12),i,f*12.778,.9,u-.46,0,0,Math.PI/2),o(f*12.758,.9,u-.46,.014,.09,.018,n),o(f*12.761,.695,u-.46,.014,.032,.15,a),l(c(f*12.846,.57,u-.46),c(f*12.846,.21,u-.46),.019,n);for(const g of[.26,.46])o(f*12.81,g,u-.46,.027,.03,.06,i)}o(-6.7,1.26,-34.5,1.94,.12,1.16,t),s.addGeometry(new Je(.24,.28,1.35,6),a,-6.63,1.49,-34.5,0,0,Math.PI/2),s.addGeometry(new bn(.205,8,4),a,-7.38,1.49,-34.5);for(const f of[-7.1,-6.55,-6.1])o(f,1.704,-34.5,.035,.018,.43,n);for(const f of[-35.045,-33.955]){o(-6.7,1.65,f,1.91,.055,.045,i);for(const u of[-7.59,-5.81])o(u,1.49,f,.045,.35,.045,e)}s.sign("LAZARUS / SPECIMEN 091",-6.7,2.33,-32.565,2.45,.42,Math.PI,"#b7a57b","#253631"),o(-7.5,1.67,-42.58,1.05,.34,.92,e),o(-7.5,1.867,-42.58,1.11,.055,.97,t);for(const f of[-7.91,-7.09]){o(f,1.876,-42.58,.05,.03,.94,i);for(const u of[-42.95,-42.21])o(f,1.66,u,.09,.12,.04,a)}o(-7.5,1.66,-42.095,.3,.035,.028,i),o(-7.5,1.728,-42.083,.07,.07,.018,n),s.sign("BIOLOGICAL TRANSFER / DO NOT OPEN",-9.965,2.48,-43.9,2.23,.52,Math.PI/2,"#b7a57b","#253631"),o(.92,1.385,-39.61,.66,.045,.36,t);for(const f of[.6,1.24])o(f,1.415,-39.61,.025,.055,.36,i);for(const f of[-39.78,-39.44])o(.92,1.415,f,.66,.055,.025,i);for(let f=0;f<3;f++){const u=.75+f*.16;o(u,1.416,-39.62,.017,.018,.2,i,-.17+f*.12),o(u,1.426,-39.695,.038,.01,.055,e,-.17+f*.12)}s.addGeometry(new ii(.034,.008,3,8),i,1.105,1.423,-39.565,Math.PI/2),s.addGeometry(new ii(.034,.008,3,8),i,1.04,1.423,-39.565,Math.PI/2),l(c(1.045,1.423,-39.595),c(1.1,1.423,-39.726),.007,i,4),l(c(1.1,1.423,-39.595),c(1.045,1.423,-39.726),.007,i,4)}const et=s=>{const e=Math.sin(s*153.73+12.81)*43857.193;return e-Math.floor(e)};function Qc(s,e=!1){const t=new Oi(s);return t.magFilter=t.minFilter=_t,t.colorSpace=At,t.generateMipmaps=!1,e&&(t.wrapS=t.wrapT=wn),t}function mo(s,e,t,i){const n=s/t,a=e/t,r=Math.floor(n),o=Math.floor(a),l=n-r,c=a-o,h=(u,g)=>et(u*53+g*179+i),d=l*l*(3-2*l),f=c*c*(3-2*c);return(h(r,o)*(1-d)+h(r+1,o)*d)*(1-f)+(h(r,o+1)*(1-d)+h(r+1,o+1)*d)*f}function t1(s){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),i={stucco:[184,177,158],terracotta:[146,100,76],porcelain:[171,175,160],shutter:[106,116,115],pavement:[122,123,112],paint:[185,183,171],stone:[170,169,150]},n=t.createImageData(256,256),a=i[s];for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=(l*256+c)*4,d=mo(c,l,54,13),f=mo(c,l,13,39),u=et(c+l*263),g=(d-.5)*35+(f-.5)*22+(u-.5)*24;for(let x=0;x<3;x++)n.data[h+x]=Math.max(0,Math.min(255,a[x]+g));n.data[h+3]=255}t.putImageData(n,0,0);const r=(l,c,h,d,f,u=1)=>{t.fillStyle=f,t.globalAlpha=u,t.fillRect(l,c,h,d),t.globalAlpha=1},o=(l,c,h,d)=>{for(let f=0;f<h;f++){const u=c+f*2,g=l+Math.floor(Math.sin(f*.53+d)*2+f*.26);if(r(g+1,u,1,3,"#d0c4a9",.38),r(g,u,1,3,"#3e433b",.54),f===Math.floor(h*.6))for(let x=0;x<9;x++)r(g-x,u+x,1,2,"#41433a",.35)}};if(s==="terracotta")for(let l=0;l<8;l++)for(let c=-1;c<5;c++){const h=c*64+l%2*32,d=l*32,f=l*5+c;r(h+3,d+3,59,27,f%3===0?"#af7959":"#5d493c",.13+et(f+90)*.21),r(h,d,64,3,"#8d8977"),r(h,d,3,32,"#8d8977"),r(h+3,d+3,60,1,"#d5a17c",.53),r(h+3,d+29,60,2,"#523c33",.68);for(let u=0;u<8;u++)r(h+4+et(f*7+u)*54,d+4+et(f*13+u+61)*23,2+et(u)*5,1,"#ccb294",.19);et(f+20)>.71&&o(h+29,d+7,10,f)}else if(s==="porcelain")for(let l=0;l<256;l+=32)for(let c=0;c<256;c+=32){const h=c*3+l;r(c+2,l+2,30,30,h%3?"#d7d0b9":"#6f8c7d",.07+et(h)*.2),r(c,l,32,2,"#5e6a60"),r(c,l,2,32,"#5e6a60"),r(c+3,l+3,27,1,"#eee4c8",.75),r(c+3,l+3,1,26,"#d3d4be",.5),r(c+29,l+4,1,27,"#6d776a",.6),et(h+67)>.78&&(r(c+2,l+2,4,3,"#777765"),r(c+2,l+5,2,4,"#93907c")),et(h+91)>.89&&o(c+10,l+8,8,h)}else if(s==="shutter"){for(let l=0;l<256;l+=12)r(0,l,256,2,"#243a3a"),r(0,l+2,256,2,"#b5bab0",.56),r(0,l+10,256,2,"#3e5050",.65);for(let l=0;l<50;l++){const c=et(l+1)*256|0,h=et(l+46)*256|0;r(c,h,1,6+(et(l+16)*34|0),"#6c4d36",.63),r(c+1,h+3,1,8,"#bb9d73",.41),r(c-1,h,3,2,"#bec7b5",.44)}}else if(s==="pavement")for(let l=0;l<256;l+=64)for(let c=0;c<256;c+=64)r(c,l,64,2,"#48514a"),r(c,l,2,64,"#48514a"),r(c+2,l+2,60,1,"#aaac98",.5),et(c+l+61)>.4&&o(c+11,l+9,18,c+l);else if(s==="stone")for(let l=0;l<256;l+=64){r(0,l,256,3,"#787e6d"),r(0,l+3,256,1,"#d0cab2",.66);for(let c=-64;c<256;c+=128)r(c+l%128*.5,l,3,64,"#7c8170")}else{for(let l=0;l<12;l++){const c=et(l+5)*256|0,h=et(l+7)*256|0,d=t.createLinearGradient(0,h,0,h+37);d.addColorStop(0,"rgba(67,74,57,.24)"),d.addColorStop(1,"rgba(67,74,57,0)"),t.fillStyle=d,t.fillRect(c,h,4+et(l+30)*8,39),l<4&&o(c,h,12+et(l+29)*16|0,l)}for(let l=0;l<18;l++){const c=et(l+73)*256,h=et(l+129)*256,d=4+et(l+84)*16,f=2+et(l+16)*9;r(c,h,d,f,"#aaa087",.43),r(c+1,h+1,d-2,f-2,"#d6cbb0",.35)}}return Qc(e,!0)}function Uo(s=128,e=192){const t=document.createElement("canvas");t.width=s*2,t.height=e*2;const i=t.getContext("2d");return i.scale(2,2),{canvas:t,g:i,rect:(c,h,d,f,u)=>{i.fillStyle=u,i.fillRect(c,h,d,f)},poly:(c,h)=>{i.fillStyle=h,i.beginPath(),c.forEach(([d,f],u)=>u?i.lineTo(d,f):i.moveTo(d,f)),i.closePath(),i.fill()},ellipse:(c,h,d,f,u)=>{i.fillStyle=u,i.beginPath(),i.ellipse(c,h,d,f,0,0,Math.PI*2),i.fill()},shade:(c,h,d,f,u)=>{const g=i.createLinearGradient(c,h,c+d,h+f);u.forEach((x,p)=>g.addColorStop(p/(u.length-1),x)),i.fillStyle=g,i.fillRect(c,h,d,f)},text:(c,h,d,f,u="serif")=>{i.font=`bold ${d}px ${u}`,i.textAlign="center",i.fillStyle="#181f24",i.fillText(c,s/2+1,h+1),i.fillStyle=f,i.fillText(c,s/2,h)}}}function Fo(s,e=.5){const t=s.getContext("2d"),i=t.getImageData(0,0,s.width,s.height),n=i.data,a=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let r=0;r<s.height;r++)for(let o=0;o<s.width;o++){const l=(r*s.width+o)*4,c=(et(o+r*s.width+88)-.5)*12*e,h=(a[r%4*4+o%4]-7.5)*.55,d=(mo(o,r,31,28)-.5)*14*e;for(let f=0;f<3;f++)n[l+f]=Math.max(0,Math.min(255,Math.round((n[l+f]+c+h+d)/8)*8))}return t.putImageData(i,0,0),Qc(s)}function jc(s){const{canvas:e,g:t,rect:i,poly:n,ellipse:a,shade:r,text:o}=Uo();if(i(0,0,128,192,s==="eden"?"#a39898":"#c2b796"),s==="vesper"){r(5,5,118,180,["#775c4b","#26373b","#151d26"]),a(91,61,22,23,"#c5a46b"),a(88,59,19,20,"#d7b674");for(let l=0;l<13;l++){const c=7+l*9,h=22+(et(l+56)*51|0);r(c,142-h,9,h,["#273238","#0f1b26"]);for(let d=144-h;d<137;d+=6)et(l+d)>.35&&i(c+2,d,2,2,"#c3aa73")}n([[28,141],[31,127],[43,117],[69,113],[90,129],[99,148]],"#101b26"),r(34,129,61,22,["#4e5555","#17242e","#0e1824"]),n([[46,115],[51,137],[59,130],[68,116]],"#b4aa8d"),n([[36,124],[44,118],[51,147],[44,145]],"#716b5c"),n([[73,118],[86,128],[75,147],[68,135]],"#3c4d54"),a(61,92,18,26,"#302b2a"),a(64,91,14,23,"#a88560"),n([[62,73],[74,79],[75,98],[69,108],[60,113],[54,103],[56,86]],"#c5a173"),n([[54,88],[60,95],[55,107],[49,102],[46,89]],"#73644f"),n([[68,87],[73,96],[65,99],[67,94]],"#e3ba85"),n([[59,105],[67,106],[71,102],[70,109],[63,113]],"#765747"),i(59,102,9,1,"#493a34"),i(61,110,7,1,"#c49b70"),t.lineWidth=2,t.strokeStyle="#252528",t.beginPath(),t.moveTo(49,84),t.lineTo(77,93),t.stroke(),a(69,89,5,5,"#212329"),i(55,88,5,1,"#303436"),i(58,88,1,1,"#d4e0c1"),n([[45,70],[49,52],[72,50],[80,70]],"#514435"),n([[50,53],[58,57],[70,53],[73,67],[49,67]],"#776248"),i(47,66,31,5,"#232b2b"),a(62,74,30,5,"#292a26"),a(61,72,29,3,"#79654b");for(let l=0;l<21;l++)i(47+et(l)*28,54+et(l+39)*12,1,1,"#a48c64");n([[84,129],[91,128],[96,150],[83,150],[81,136]],"#7e9494");for(let l=0;l<5;l++)i(83+l*.7,132+l*3,10,1,"#c3c5ac"),i(82+l*.7,133+l*3,10,2,"#34494e");a(87,133,3,3,"#b8b796"),a(87,133,1.4,1.4,"#574f42");for(let l=0;l<15;l++)i(34+et(l+42)*44,132+et(l+99)*18,2,1,"#536365");o("VESPER",28,20,"#ead4a3"),o("MIDNIGHT",167,17,"#d7bb87"),o("THE ELIAS VANE FILES",181,6.8,"#c9b790","monospace")}else if(s==="eden"){r(5,5,118,180,["#61566d","#253243","#16212d"]);for(let l=0;l<7;l++)t.globalAlpha=.15,n([[12+l*17,38],[52+l*5,145],[22+l*12,145]],l%2?"#9ccac5":"#d191af");t.globalAlpha=1;for(let l=0;l<85;l++)i(7+et(l+20)*113,44+et(l+42)*103,1,1,l%2?"#a4c7c2":"#766a87");a(64,78,22,27,"#232738"),a(64,79,14,23,"#c2997d"),n([[59,60],[72,68],[74,85],[68,97],[60,97],[54,86],[53,74]],"#d5b28b"),n([[53,74],[57,83],[58,91],[63,96],[57,96],[50,87]],"#967567"),n([[65,76],[68,87],[63,87],[63,82]],"#e3c39c"),i(60,90,9,2,"#70474d"),i(63,92,5,1,"#cd8c86"),t.strokeStyle="#202332",t.lineWidth=1.3;for(const l of[57,67])t.beginPath(),t.moveTo(l,77),t.lineTo(l+5,78),t.stroke();a(62,56,18,9,"#282739"),n([[45,65],[58,56],[48,98],[38,100]],"#222433"),n([[72,61],[82,70],[89,114],[75,100]],"#292c3b");for(let l=0;l<14;l++)t.strokeStyle=l%2?"#615272":"#434452",t.beginPath(),t.moveTo(43+l*2.5,62),t.bezierCurveTo(44+l*2,78,41+l*3,81,43+l*2.9,102),t.stroke();n([[49,96],[58,104],[68,103],[77,96],[82,136],[41,137]],"#673955"),n([[55,99],[63,111],[69,99]],"#e4b996"),n([[47,104],[43,134],[52,139],[56,111]],"#3f3047"),n([[76,101],[83,110],[91,95],[95,98],[88,123],[79,124]],"#c59481"),n([[43,137],[56,137],[56,153],[40,153]],"#182332"),n([[62,136],[74,137],[82,153],[67,153]],"#192331");for(let l=0;l<21;l++)i(48+et(l+17)*26,108+et(l+16)*27,1,1,"#b06d89");i(91,86,2,66,"#bbc0ab"),a(91,84,5,7,"#727f82"),i(88,79,5,8,"#b6bcab");for(let l=0;l<4;l++)i(89,80+l*2,5,1,"#4a5764");a(90,155,10,2,"#737e84"),o("EDEN",31,27,"#dfb0c4"),o("AFTER DARK",48,11,"#d0d9ca","monospace"),o("LIVE IN VESPER",172,10,"#c7c5b7"),o("ONE NIGHT. EVERY NIGHT.",182,5.8,"#bda8ab","monospace")}else{r(5,5,118,180,["#cad0b4","#91aaa1","#29454c"]),i(9,9,110,31,"#2b515a"),o("HELIX",32,22,"#dddcc2"),o("A BETTER TOMORROW",56,8.7,"#263c43","monospace");for(let l=0;l<28;l++){const c=66+l*2.7,h=26+Math.sin(l*.32)*12,d=101-Math.sin(l*.32)*12;a(h,c,2,2,"#587e74"),a(d,c,2,2,"#456b69"),l%2===0&&(t.strokeStyle="#7b9b89",t.lineWidth=.5,t.beginPath(),t.moveTo(h,c),t.lineTo(d,c),t.stroke())}a(61,113,31,12,"#406657"),a(62,108,28,9,"#708773"),n([[35,109],[22,116],[11,122],[29,119],[44,116]],"#4f7461"),n([[79,108],[86,94],[100,88],[111,92],[114,100],[98,101],[89,112]],"#6b8066"),n([[98,92],[112,96],[108,101],[94,100]],"#a0a480"),a(104,94,2,2,"#243e39"),i(104,93,1,1,"#dcd185"),n([[96,102],[108,102],[104,107],[92,105]],"#3b5147");for(let l=0;l<5;l++)n([[95+l*2,102],[96+l*2,105],[97+l*2,102]],"#d8d3a7");n([[50,115],[46,129],[57,133],[54,142],[67,142],[58,138],[62,127],[61,117]],"#526a55"),n([[74,116],[68,129],[77,133],[80,143],[89,143],[84,139],[84,126],[83,115]],"#70816a");for(let l=0;l<3;l++)i(60+l*3,141,1,2,"#d8cf9e"),i(82+l*2,141,1,2,"#d8cf9e");n([[85,105],[79,117],[86,120],[88,119],[84,116],[89,108]],"#859376");for(let l=0;l<180;l++){const c=34+et(l)*52,h=101+et(l+34)*19;((c-61)/29)**2+((h-112)/11)**2<1&&a(c,h,.65,.55,l%2?"#a7ad89":"#405c4e")}o("GENETICS FOR LIFE",159,9.6,"#e0dac0"),o("TRUST THE SCIENCE",176,9,"#bfd1bf","monospace")}for(let l=0;l<63;l++)t.globalAlpha=.12,i(5+et(l+27)*118,6+et(l+117)*177,1,1+et(l+21)*3,l%2?"#d9d1b5":"#202831");return t.globalAlpha=1,Fo(e,.8)}function i1(){const{canvas:s,g:e,rect:t,poly:i,ellipse:n,shade:a,text:r}=Uo(128,160);a(0,0,128,160,["#bbaa78","#715c3c","#292d30"]),t(5,5,118,150,"#352d2c"),t(8,8,112,144,"#b8a773"),t(12,12,104,136,"#333d3c"),r("VESPER",35,21,"#e6d2a0"),r("NIGHT DINER",52,10,"#ceb887","monospace"),n(64,111,36,9,"#b8b396"),n(64,108,34,7,"#e3d3ae"),n(63,108,27,3,"#7c7c62"),e.strokeStyle="#d1c29c",e.lineWidth=6,e.beginPath(),e.ellipse(88,88,12,10,0,0,Math.PI*2),e.stroke(),i([[34,79],[85,79],[80,105],[71,112],[50,110],[40,103]],"#b0ad87"),i([[42,79],[75,80],[71,107],[54,107],[45,101]],"#e4d7aa"),i([[35,82],[40,101],[51,108],[52,103],[45,86]],"#7e8369"),n(60,79,25,7,"#ece0b2"),n(60,79,21,4,"#594633"),n(58,77,14,2,"#927b51");for(let o=0;o<4;o++)e.strokeStyle=o%2?"#9fa382":"#c3bc92",e.lineWidth=1.8,e.beginPath(),e.moveTo(48+o*8,71),e.bezierCurveTo(39+o*9,59,58+o*7,67,53+o*7,56),e.stroke();r("COFFEE UNTIL DAWN",135,6.3,"#c6b98f","monospace"),r("EST. 2041",145,6,"#a9a681","monospace");for(const o of[8,120])for(const l of[8,152])n(o,l,2,2,"#d4c7a1"),t(o-1,l,2,.5,"#635b43");return Fo(s,1)}function n1(s){const{canvas:e,g:t,rect:i,poly:n,ellipse:a,shade:r,text:o}=Uo(192,132);r(0,0,192,132,s==="diner"?["#403c32","#68533f","#172629"]:["#34474b","#48424a","#1a2835"]),n([[0,0],[39,22],[39,104],[0,132]],"#343734"),n([[192,0],[151,22],[151,104],[192,132]],"#252d31"),r(39,22,112,82,s==="diner"?["#70745b","#64563f","#3b453d"]:["#5b6765","#39404a","#383b45"]);for(let l=27;l<88;l+=12)for(let c=40;c<150;c+=18)i(c,l,17,.8,"#33443a"),i(c,l,1,12,"#39463c");i(10,16,170,2,"#b1b295"),i(44,23,104,2,s==="diner"?"#d4ba88":"#8caab0");for(const l of[58,134])n([[l-11,1],[l+11,1],[l+15,8],[l-15,8]],"#222e32"),a(l,8,13,2,"#bfc2a0");if(s==="diner"){i(49,34,41,27,"#26352e"),i(50,35,39,25,"#33493c"),t.font="italic 5px serif",t.fillStyle="#b8c19f",t.textAlign="left",t.fillText("Tonight’s special",54,43),t.fillText("Coffee / Pie",54,51),t.fillText("OPEN ALL NIGHT",54,58),i(112,34,26,35,"#959a7c"),r(115,37,20,20,["#606b61","#303e3b"]),i(116,61,16,2,"#c2baa1");for(let l=0;l<3;l++){i(39,73+l*13,112,3,"#403d32"),i(40,73+l*13,111,.8,"#ac9671");for(let c=0;c<8;c++){const h=47+c*12.3;a(h,70+l*13,4.5,1.5,"#a7b091"),i(h-3,64+l*13,6,6,"#c0c1a3"),i(h-3,65+l*13,1,5,"#838e79")}}n([[8,98],[177,98],[191,113],[0,113]],"#b39b70"),r(0,113,192,19,["#746b55","#4b5045"]),a(110,100,18,3,"#cad0ad"),a(110,99,13,2,"#937750");for(const l of[24,60,154])a(l,100,5,2,"#d3c7a7"),i(l-4,95,8,5,"#d3c7a7"),a(l,94,4,1.3,"#6e6042")}else{for(let l=0;l<3;l++)for(let c=0;c<8;c++){const h=43+c*13.3,d=32+l*21;r(h,d,12,18,[["#967058","#644a4c"],["#8b9492","#405663"],["#ad9e7c","#5a5b59"]][(l+c)%3]),a(h+6,d+8,3,4,["#cfb691","#b4c3b4","#a9897f"][c%3]),i(h+2,d+14,8,1,"#d5c5a8")}n([[0,111],[26,94],[164,94],[192,111]],"#7a8580"),r(0,111,192,21,["#526665","#253944"]);for(let l=0;l<15;l++)i(8+l*12,104,8,3,["#b5a078","#839b9b","#926871"][l%3]);o("EDEN RECORDS",16,8,"#9dbcbc","monospace")}return Fo(e,.35)}const xi=s=>{const e=Math.sin(s*137.63+9.31)*47815.129;return e-Math.floor(e)};function s1(s){const e=s.box.bind(s),t=new Map,i=(R,O=16777215)=>{let se=t.get(R);return se||(se=t1(R),t.set(R,se)),new ln({map:se,color:O})},n=i("stucco"),a=i("terracotta"),r=i("porcelain"),o=i("shutter"),l=i("pavement"),c=i("stone",15850938),h=i("stone",15197141),d=i("paint",11761237),f=i("paint",10188416);i("paint",11053699);const u=i("paint",8681863),g=i("paint",9478308),x=i("paint",7575445),p=s.mat(6714745),m=s.mat(2503483),_=s.mat(1318955),M=s.mat(1123892),v=s.mat(3946546,1971720),y=s.mat(2374725,1059377),T=s.basic(16760677),A=s.basic(15761066),S=s.basic(7653083),w=s.basic(9556913),C=s.basic(12168313),N=s.basic(6524056),L=new Map,U=new Map,z=(R,O,se,fe=2.1,ce=1.38,pe=2.08)=>{let D=L.get(R);D||(D=new Dt({map:jc(R)}),L.set(R,D)),e(O*12.785,fe,se,.08,pe+.16,ce+.16,m),s.addGeometry(new Rt(ce,pe),D,O*12.732,fe,se,0,-O*Math.PI/2);for(const F of[-ce/2-.035,ce/2+.035])e(O*12.719,fe,se+F,.022,pe+.1,.04,p)},k=(R,O,se,fe,ce,pe=.14,D=.18)=>e(R*12.8,O,se,D,pe,fe,ce),Q=(R,O,se,fe)=>{e(R*12.8,se/2,O,.22,se,.24,fe),e(R*12.74,.29,O,.33,.35,.42,m),e(R*12.72,se-.2,O,.37,.25,.42,fe),e(R*12.691,se-.05,O,.44,.08,.48,h)},X=(R,O,se,fe,ce,pe=!1)=>{e(R*12.856,2.22,O,.028,2.2,se,fe);for(const B of[-se/2-.065,se/2+.065])e(R*12.746,2.22,O+B,.15,2.2+.22,.13,m);for(const B of[1.07,3.37])e(R*12.735,B,O,.17,.13,se+.25,h);e(R*12.746,.89,O,.13,.19,se+.23,m);const P=R<0?"diner":"records";let q=U.get(P);if(q||(q=new Dt({map:n1(P)}),U.set(P,q)),s.addGeometry(new Rt(se-.04,2.2-.045),q,R*12.828,2.22,O,0,-R*Math.PI/2),e(R*12.789,1.16,O,.04,.05,se-.21,c),!pe){for(let B=1;B<3;B++)e(R*12.701,2.22,O-se/2+B*se/3,.055,2.2,.045,p);for(let B=0;B<2;B++)e(R*12.695,2.8-B*.12,O+.3+B*.2,.02,.08,.41-B*.1,ce)}},ee=(R,O,se,fe,ce=6.55)=>{k(R,ce-.25,O,se,fe,.24,.34),k(R,ce,O,se+.18,h,.14,.45),k(R,ce+.12,O,se+.27,m,.1,.48);for(let pe=-se/2+.27;pe<se/2;pe+=.68)e(R*12.685,ce-.49,O+pe,.22,.24,.13,fe)},Y=(R,O,se,fe,ce)=>{e(R*12.39,3.85,O,1.13,.1,se,m);for(let pe=0;pe<Math.round(se/.35);pe++)e(R*12.39,3.923,O-se/2+.175+pe*.35,1.14,.024,.32,pe%2?ce:fe);e(R*11.82,3.65,O,.065,.35,se,fe);for(let pe=-se/2+.2;pe<se/2;pe+=.7)e(R*11.784,3.66,O+pe,.02,.035,.26,ce)},Z=(R,O,se,fe,ce,pe,D=4.6,F=.87)=>{e(R*12.735,D,O,.29,F+.24,fe+.28,m),e(R*12.566,D+F/2+.084,O,.065,.048,fe+.21,h),s.sign(se,R*12.553,D,O,fe,F,-R*Math.PI/2,ce,pe)},j=new Dt({map:i1()}),me=(R,O,se,fe,ce,pe=1.38,D=2.1,F=!1)=>{const P=R*11.77,q=4.8;e(R*12.25,6.01,O,1.35,.1,.11,m),e(R*12.88,5.75,O,.14,.65,.15,p),e(P,q,O,pe+.15,D+.15,.18,m),e(P,q+D/2+.1,O,pe+.25,.06,.24,h),F?(s.addGeometry(new Rt(pe,D),j,P,q,O+.105),s.addGeometry(new Rt(pe,D),j,P,q,O-.105,0,Math.PI)):(s.sign(se,P,q,O+.105,pe,D,0,fe,ce),s.sign(se,P,q,O-.105,pe,D,Math.PI,fe,ce))};e(-12.947,3.22,.1,.065,6.44,6.5,n),e(-12.925,.61,.1,.06,1.22,6.5,r),e(-12.924,5.55,.1,.065,1.1,6.5,a);for(const R of[-3.23,3.35])Q(-1,R,6.4,c);k(-1,1.12,.1,6.5,d,.1),k(-1,3.48,.1,6.5,c,.18,.24),X(-1,-1.7,3.2,v,T,!0),e(-12.825,1.92,1.71,.075,2.56,1.26,f),e(-12.776,2.38,1.71,.025,1.43,.86,v),e(-12.75,1.37,1.28,.035,.22,.047,T);for(const R of[1.045,2.375])e(-12.753,1.91,R,.11,2.68,.12,c);k(-1,3.3,1.71,1.53,c,.12),Z(-1,.05,"VESPER / NIGHT DINER",5.65,"#ffcc79","#442b30"),Y(-1,.03,6.2,d,c),ee(-1,.1,6.5,d,6.49),me(-1,2.57,"VESPER / NIGHT DINER","#ffd187","#47302e",1.75,2.38,!0);for(const R of[-1.7,1.65]){e(-12.885,5.47,R,.08,1.18,1.23,M);for(const O of[-.66,.66])e(-12.786,5.47,R+O,.14,1.29,.12,c);for(const O of[4.85,6.1])k(-1,O,R,1.39,c,.095,.26);e(-12.778,5.47,R,.065,1.18,.055,m),e(-12.774,5.47,R,.065,.055,1.2,m);for(const O of[-.31,.31])e(-12.844,5.47,R+O,.016,1.02,.5,C)}e(-12.936,4.84,-7,.078,3.1,3.89,f);for(const R of[-5.02,-8.98])Q(-1,R,6.38,d);k(-1,3.36,-7,3.89,m,.17,.34),Z(-1,-7,"LAST CHANCE",3.46,"#ffe0a1","#592d3c",4.43,.76),ee(-1,-7,3.99,f,6.43);for(const R of[-5.4,-8.59])e(-12.72,2.42,R,.16,.57,.17,m),e(-12.62,2.42,R,.05,.4,.09,T),e(-12.64,2.76,R,.11,.11,.28,c);me(-1,-8.92,"LAST / CHANCE","#f8ca89","#432434",1.38,1.75);for(let R=0;R<6;R++)e(-12.762,5.55,-8.45+R*.58,.045,.055,.19,T);e(-12.946,3.48,-13.77,.069,6.96,7.55,n),e(-12.919,1.07,-13.77,.04,2.14,7.55,a);for(const R of[-9.94,-13.65,-17.58])Q(-1,R,6.9,d);e(-12.845,2.22,-15.56,.068,2.14,2.99,o);for(const R of[-1.53,1.53])e(-12.778,2.22,-15.56+R,.13,2.33,.14,f);z("vesper",-1,-11.65,2.23,2.55,3.2),Z(-1,-13.77,"VESPER PICTURE HOUSE",6.9,"#e3c389","#332b30",4.6,.77),Y(-1,-13.77,7.1,f,c),ee(-1,-13.77,7.55,d,6.95);for(const R of[-11.72,-15.48]){e(-12.875,5.84,R,.08,1.15,2.47,M);for(let O=0;O<4;O++)e(-12.78,5.84,R-1.19+O*.79,.12,1.31,.1,c);for(const O of[5.19,6.49])k(-1,O,R,2.65,c,.1,.26)}e(-12.928,3.41,-18.76,.056,6.78,2.26,a),k(-1,6.72,-18.76,2.4,m,.24,.36),e(12.946,3.35,-.23,.068,6.7,8.35,n),e(12.925,.55,-.23,.053,1.1,8.35,g);for(const R of[3.96,-4.42])Q(1,R,6.64,h);X(1,.82,3.17,y,S),e(12.82,1.94,3.07,.11,2.6,1.27,m),e(12.755,2.19,3.07,.025,1.76,.83,y);for(const R of[2.39,3.75])e(12.725,1.96,R,.115,2.72,.12,h);e(12.69,1.36,2.69,.046,.2,.05,S),z("eden",1,-2.23,2.2,1.55,2.35),Z(1,-.23,"EDEN / SOUND & VISION",7.47,"#a6ddec","#2d344c",4.66,.85),Y(1,-.2,8.1,g,h),ee(1,-.23,8.35,g,6.74);for(const R of[1.29,-2.29]){e(12.859,5.73,R,.084,1.03,1.89,M);for(const O of[-.98,.98])e(12.755,5.73,R+O,.13,1.23,.13,h);for(const O of[5.13,6.34])k(1,O,R,2.14,h,.1,.28);e(12.777,5.73,R,.09,1.09,.07,m),e(12.82,5.73,R-.46,.028,.93,.83,N)}e(12.945,3.55,-7.84,.07,7.1,6.71,u),e(12.926,.57,-7.84,.048,1.14,6.71,a);for(const R of[-4.47,-11.23])Q(1,R,7.1,g);X(1,-4.5,3.2,M,A,!0),e(12.829,1.91,-8.8,.08,2.54,1.88,f);for(const R of[-9.79,-7.81])e(12.75,1.91,R,.12,2.73,.13,g);for(let R=0;R<6;R++)e(12.779,.88+R*.31,-8.8,.025,.09,1.79,m);z("eden",1,-10.28,2.23,1.14,2.25),Z(1,-7.85,"EDEN / AFTER DARK",5.75,"#ff9ec4","#312039",4.65,.95),k(1,3.44,-7.84,6.73,_,.17,.32),ee(1,-7.84,6.71,g,7.11);for(const R of[-5.01,-10.57])e(12.75,4.49,R,.22,1.67,.23,m),e(12.619,4.49,R,.045,1.49,.074,A);me(1,-7.24,"EDEN / ★","#ffb4d3","#30203a",1.38,2.26);for(const R of[-5.97,-9.85]){e(12.852,6.21,R,.078,1.14,1.63,M);for(const O of[-.86,.86])e(12.75,6.21,R+O,.13,1.28,.09,g);e(12.745,6.21,R,.14,1.19,.057,m);for(const O of[5.55,6.83])k(1,O,R,1.79,h,.075,.24)}e(12.945,3.64,-15.63,.07,7.28,8.17,r),e(12.921,.63,-15.63,.047,1.26,8.17,x);for(const R of[-11.51,-15.69,-19.75])Q(1,R,7.26,h);e(12.825,2.31,-17.55,.084,2.45,3.15,o);for(const R of[-19.18,-15.92])e(12.743,2.29,R,.12,2.6,.13,x);for(const R of[1.03,3.6])k(1,R,-17.55,3.5,x,.13,.27);z("helix",1,-13.68,2.34,2.1,2.9),Z(1,-15.62,"HELIX / PUBLIC HEALTH",7.39,"#b9e2d1","#28484c",4.76,.89),k(1,3.78,-15.63,8.1,x,.24,.32),ee(1,-15.63,8.17,x,7.32);for(const R of[-13.36,-17.36]){e(12.852,6.16,R,.081,1.29,2.72,M);for(let O=0;O<4;O++)e(12.749,6.16,R-1.42+O*.94,.12,1.39,.073,h);for(const O of[5.44,6.87])k(1,O,R,2.93,h,.097,.28);for(const O of[-.91,0,.91])e(12.82,6.16,R+O,.028,1.17,.77,N)}me(1,-17.52,"HELIX / +","#a0ead0","#223f45",1.03,1.81);for(const R of[-1,1])for(let O=0;O<3;O++){const se=R<0?[.4,-7,-14.1][O]:[-.15,-7.85,-15.63][O],fe=R<0?[6,3.9,7.2][O]:[7.9,6.4,7.8][O],ce=R<0?6.8+O*.43:7.4+(2-O)*.31,pe=O===0?a:O===1?R<0?f:g:n;e(R*13.16,ce+1.4,se,.63,2.8,fe,pe),k(R,ce+2.94,se,fe+.21,m,.25,.31);for(let D=0;D<Math.floor(fe/1.65);D++){const F=se-fe/2+1+D*1.65;e(R*12.79,ce+1.35,F,.14,1.6,1.02,m),e(R*12.705,ce+1.35,F,.03,1.4,.83,(D+O)%3===0?C:M),e(R*12.68,ce+1.35,F,.04,1.51,.046,p),e(R*12.675,ce+1.35,F,.04,.045,.97,p),e(R*12.68,ce+.5,F,.2,.11,1.17,h)}O===0&&(e(R*13.35,ce+3.72,se,1.1,1.25,1.6,m),e(R*13.35,ce+4.36,se,1.18,.12,1.75,p))}for(const R of[-1,1]){e(R*8.84,2.8,3.658,5.85,5.3,.08,R<0?a:n);for(const se of[R*5.86,R*11.86])e(se,2.8,3.581,.21,5.3,.22,c);e(R*8.83,5.41,3.573,6.11,.19,.26,m);const O=R*8.86;e(O,2.9,3.601,3.79,1.8,.045,M);for(let se=0;se<4;se++)e(O-1.89+se*1.26,2.9,3.556,.07,1.95,.08,c);for(const se of[1.94,3.85])e(O,se,3.54,3.98,.09,.18,c);e(R*8.24,3.11,-19.562,11.13,5.84,.09,m),e(R*8.24,1.02,-19.483,11.14,1.04,.07,r),e(R*8.24,5.82,-19.473,11.22,.18,.31,h);for(let se=0;se<3;se++){const fe=R*(3.88+se*3.42);e(fe,3.11,-19.438,.17,5.6,.22,p),e(fe,4.48,-19.298,.068,1.57,.04,w),e(fe,1.44,-19.288,.06,.8,.04,w)}e(R*8.23,3.32,-19.437,10.89,1.28,.048,M);for(let se=0;se<8;se++)e(R*8.23-5.46+se*1.56,3.32,-19.399,.062,1.43,.065,p)}for(const R of[-1,1]){e(R*12.06,.147,-8,1.44,.014,23.7,l);for(let O=3.58;O>-19.5;O-=1.34)e(R*11.08,.155,O,.12,.022,1.18,h)}const we=s.mat(2239289),st=s.mat(2701380),qe=s.mat(1450798),Qe=[];for(const R of[-1,1])for(let O=0;O<5;O++)Qe.push({x:R*(24+O%2*7),z:12-O*11,w:5.5+xi(O+60)*3.5,d:6.5+xi(O+93)*3,h:20+xi(O+40)*22,seed:100+O+R*11});for(let R=0;R<7;R++)Qe.push({x:-33+R*11,z:-57-R%2*7,w:7+xi(R+7)*3,d:7,h:23+xi(R+69)*27,seed:200+R});for(let R=0;R<5;R++)Qe.push({x:-26+R*13,z:24+R%2*7,w:6+xi(R+88)*4,d:6,h:21+xi(R+80)*18,seed:300+R});for(const R of Qe){const{x:O,z:se,w:fe,d:ce,h:pe,seed:D}=R;e(O,pe/2,se,fe,pe,ce,D%2?st:we),e(O,pe+.17,se,fe+.28,.34,ce+.28,qe),e(O+fe*.22,pe+.6,se-ce*.2,fe*.3,.78,ce*.35,m);for(const F of[-1,1])for(let P=4.8;P<pe-1;P+=2.4){for(let q=0;q<Math.floor(fe/1.45);q++){const B=O-fe/2+.72+q*1.45,te=D*31+Math.round(P)*17+q*5+F;xi(te)<.46||e(B,P,se+F*(ce/2+.015),.49,.94,.025,xi(te+67)>.5?C:N)}for(let q=0;q<Math.floor(ce/1.7);q++){const B=se-ce/2+.77+q*1.7,te=D*43+Math.round(P)*21+q*7+F;xi(te)<.5||e(O+F*(fe/2+.015),P,B,.025,.94,.48,xi(te+25)>.53?C:N)}}D%3===0&&(e(O,pe+2.4,se,.08,4.4,.08,p),e(O,pe+4.63,se,.1,.14,.1,A))}}const gt=s=>{const e=Math.sin(s*127.17+38.71)*43758.543;return e-Math.floor(e)};function ic(s){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n={plaster:["#b6ad91","#8a8977","#d1c5a4","#645d50"],panel:["#687a7c","#35474d","#a2aaa0","#162d37"],stone:["#a9a17c","#756e51","#cdc197","#444a3b"],wood:["#735345","#402f2c","#aa8665","#282827"],container:["#8c5b44","#573c35","#b78658","#25343a"],server:["#344b51","#142b33","#607c7b","#91d2b3"],bark:["#655945","#393e32","#91846a","#29382f"],water:["#284852","#17333f","#607e80","#36626a"],leaf:["#477056","#233e36","#779d69","#172f2c"],window:["#172d3c","#101f2b","#a2a176","#637e7d"],hazard:["#b99d54","#242e34","#d9c17d","#5b5443"],screen:["#11272c","#193c37","#72b7a3","#bbd4ac"],archive:["#5d5c52","#2e3b3b","#b2a388","#70827a"]}[s],a=(o,l,c,h,d)=>{t.fillStyle=d,t.fillRect(o,l,c,h)};a(0,0,64,64,n[0]);for(let o=0;o<670;o++)t.globalAlpha=.1+gt(o+41)*.23,a(gt(o+3)*64|0,gt(o+87)*64|0,1+(gt(o+23)*3|0),1,n[o%3]);if(t.globalAlpha=1,s==="panel"||s==="container"){for(let o=0;o<64;o+=s==="container"?8:32)a(o,0,2,64,n[1]),a(o+2,0,1,64,n[2]),s==="container"&&a(o+6,0,2,64,n[1]);for(let o=0;o<64;o+=32){a(0,o,64,2,n[1]),a(0,o+2,64,1,n[2]);for(const l of[4,27,36,59])a(l,o+5,2,2,n[1]),a(l,o+5,1,1,n[2])}for(let o=0;o<17;o++){const l=gt(o+5)*64|0,c=gt(o+76)*64|0;a(l,c,1,3+gt(o+13)*11,"#5e493c"),a(l+1,c,1,2,"#a28160")}}else if(s==="stone"||s==="plaster"){if(s==="stone")for(let o=0;o<64;o+=16){a(0,o,64,2,n[1]);for(let l=-16;l<64;l+=32)a(l+o%32/2,o,2,16,n[1]),a(l+o%32/2+2,o+2,27,1,n[2])}for(let o=0;o<13;o++){const l=gt(o+15)*64|0,c=gt(o+96)*64|0;a(l,c,2+gt(o+63)*8,1+gt(o+21)*4,n[1]),a(l+1,c+1,2+gt(o+63)*6,1,n[2])}}else if(s==="wood"||s==="bark"){for(let o=0;o<24;o++){const l=gt(o+32)*64|0;a(l,0,1,64,n[o%2?1:2]),a(l+1,gt(o+2)*54,1,10,n[3])}if(s==="wood")for(const o of[0,32]){a(0,o,64,2,n[1]);for(let l=6;l<64;l+=25)a(l,o+4,2,2,n[3])}}else if(s==="server"||s==="archive")for(let o=0;o<64;o+=16){a(0,o,64,2,n[1]),a(1,o+3,62,1,n[2]);for(let l=4;l<60;l+=8)a(l,o+6,5,7,n[1]),s==="archive"?(a(l,o+6,3,1,n[2]),a(l,o+9,2,1,n[0])):(a(l+1,o+7,3,1,n[3]),a(l+1,o+10,3,1,n[2]))}else if(s==="window")for(let o=2;o<64;o+=13)for(let l=3;l<64;l+=11)a(l,o,7,8,n[1]),gt(l+o*11)>.35&&(a(l+1,o+1,5,6,n[gt(l+o)>.5?2:3]),a(l+3,o+1,1,6,n[0]));else if(s==="water")for(let o=0;o<85;o++){const l=gt(o+13)*64,c=gt(o+93)*64;a(l,c,2+gt(o+73)*13,1,n[o%3]),o%4===0&&a(l+1,c+1,5,1,n[2])}else if(s==="leaf")for(let o=0;o<27;o++){const l=gt(o+13)*59,c=gt(o+93)*59;a(l,c,4,2,n[1]),a(l+1,c-1,3,2,n[2]),a(l+2,c+1,5,2,n[0]),a(l+3,c,1,3,n[3])}else if(s==="hazard"){for(let o=-64;o<128;o+=20)for(let l=0;l<64;l++)a(l,o-l,1,10,n[1]);a(0,0,64,2,n[2]),a(0,62,64,2,n[1])}else if(s==="screen"){a(0,0,64,64,n[0]);for(let o=0;o<16;o++){const l=3+o*4;a(3,l,3+gt(o)*43,1,n[o%5?1:2]),a(50,l,9,1,n[2])}for(let o=2;o<64;o+=10)a(o,45,1,13,n[1]),a(o,50-gt(o)*12,5,5+gt(o)*12,n[2])}const r=new Oi(e);return r.colorSpace=At,r.minFilter=r.magFilter=_t,r.generateMipmaps=!1,r.wrapS=r.wrapT=wn,r}function a1(s,e="#b6dbc2",t="#142c35",i=256,n=96){const a=document.createElement("canvas");a.width=i,a.height=n;const r=a.getContext("2d");r.fillStyle=t,r.fillRect(0,0,i,n),r.fillStyle="#607575",r.fillRect(0,0,i,3),r.fillRect(0,0,3,n),r.fillStyle="#0a2029",r.fillRect(0,n-4,i,4),r.fillRect(i-4,0,4,n);const o=s.split("/").map(h=>h.trim()),l=Math.max(10,Math.min(23,Math.floor((i-20)/(Math.max(...o.map(h=>h.length))*.61))));r.font=`bold ${l}px monospace`,r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,o.forEach((h,d)=>r.fillText(h,i/2,n/2+(d-(o.length-1)/2)*(l+8)));for(let h=0;h<90;h++)r.globalAlpha=.08,r.fillStyle=h%2?"#ded0a8":"#0c1b23",r.fillRect(gt(h+16)*i|0,gt(h+99)*n|0,1+gt(h)*6,1);r.globalAlpha=1;const c=new Oi(a);return c.colorSpace=At,c.minFilter=c.magFilter=_t,c.generateMipmaps=!1,c}function r1(){const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createImageData(64,64);for(let n=0;n<64;n++)for(let a=0;a<64;a++){const r=(a-31.5)/31.5,o=(n-31.5)/31.5,l=Math.sqrt(r*r+o*o),c=Math.atan2(o,r),h=(n*64+a)*4;if(l>1)continue;const d=Math.sin(l*43+c*4.5),f=Math.sin(c*7+l*22),u=gt(a+n*64+220),g=Math.max(0,d*.4+f*.18+.37)*(.27+.73*l);t.data[h]=Math.round(21+g*107+u*8),t.data[h+1]=Math.round(35+g*157+u*8),t.data[h+2]=Math.round(48+g*176+u*8),t.data[h+3]=Math.round((.76-l*l*.22)*255),l<.24&&(t.data[h]=12,t.data[h+1]=25+u*12,t.data[h+2]=30+u*17)}e.putImageData(t,0,0);const i=new Oi(s);return i.colorSpace=At,i.minFilter=i.magFilter=_t,i.generateMipmaps=!1,i.center.set(.5,.5),i}const Ht=s=>{const e=Math.sin(s*137.23+13.97)*43358.917;return e-Math.floor(e)};function o1(s,e){const t=new Gt;t.name="campaign-dressing",s.add(t);const i=new Map,n=new Map,a=new Set,r=new Set,o=[],l=(D,F=16777215,P=0)=>{const q=`surface-${D}-${F}-${P}`;let B=n.get(q);if(!B){const te=ic(D);a.add(te),B=new ln({map:te,color:F,emissive:P,emissiveMap:P?te:null}),n.set(q,B)}return B},c=(D,F=!1)=>{const P=`${D}-${F}`;let q=n.get(P);return q||(q=F?new Dt({color:D}):new ln({color:D}),n.set(P,q)),q},h=c(1780530),d=c(8819339),f=c(7951173),u=c(12893088),g=c(12888677,!0),x=c(12934994,!0),p=c(7980718,!0),m=c(11049166,!0),_=(D,F,P,q,B,te=0,de=0,ke=0)=>{if(D.applyMatrix4(new St().compose(new W(P,q,B),new Kt().setFromEuler(new wi(te,de,ke)),new W(1,1,1))),D.index){const $e=D.toNonIndexed();D.dispose(),D=$e}let Be=i.get(F);Be||(Be=[],i.set(F,Be)),Be.push(D)},M=(D,F,P,q,B,te,de,ke=0,Be=!1)=>{const $e=new Yt(q,B,te);if(Be){const H=$e.getAttribute("uv"),lt=[[te,B],[te,B],[q,te],[q,te],[q,B],[q,B]];for(let Ve=0;Ve<6;Ve++)for(let I=0;I<4;I++){const b=Ve*4+I;H.setXY(b,H.getX(b)*lt[Ve][0]/2,H.getY(b)*lt[Ve][1]/2)}}_($e,de,D,F,P,0,ke)},v=(D,F,P,q,B,te,de,ke,Be=6)=>{const $e=new W(D,F,P),H=new W(q,B,te),lt=H.clone().sub($e),Ve=$e.clone().add(H).multiplyScalar(.5),I=new Je(de,de,lt.length(),Be);I.applyQuaternion(new Kt().setFromUnitVectors(new W(0,1,0),lt.normalize())),_(I,ke,Ve.x,Ve.y,Ve.z)},y=(D,F,P,q,B=3,te=.72,de=0,ke="#b6dbc2",Be="#142c35")=>{const $e=a1(D,ke,Be);a.add($e);const H=new Dt({map:$e});n.set(`sign-${n.size}`,H),M(F,P,q,B+.14,te+.14,.065,h,de);const lt=new W(Math.sin(de),0,Math.cos(de)).multiplyScalar(.038);_(new Rt(B,te),H,F+lt.x,P,q+lt.z,0,de)},T=(D,F,P,q,B)=>M(D,.007,F,P,.018,q,B,0,!0),A=l("panel"),S=l("stone"),w=l("plaster"),C=l("wood"),N=l("container"),L=l("server"),U=l("hazard"),z=l("screen",16777215,2243377),k=e.chapterId??0,Q=e.props.filter(D=>D.kind==="tank"),X=k===1?w:k===6?S:k===4?N:A;for(const D of e.walls){if(D.h<2.3||D.w<=1.5&&D.d<=1.5&&Q.some(P=>Math.abs(P.x-D.x)<.01&&Math.abs(P.z-D.z)<.01))continue;const F=(D.y??0)+D.h/2;M(D.x,F,D.z,D.w+.018,D.h,D.d+.018,D.material==="brick"?k===6?S:w:X,0,!0),(D.y??0)<.1&&(M(D.x,.19,D.z,D.w+.045,.34,D.d+.045,h),M(D.x,Math.min(3.18,D.h-.08),D.z,D.w+.065,.065,D.d+.065,d))}const{minX:ee,maxX:Y,minZ:Z,maxZ:j}=e.bounds,me=(ee+Y)/2,we=(Z+j)/2,st=(D,F=Z)=>{M(me,D,(j+F)/2,Y-ee,.16,j-F,A,0,!0);for(let P=j-4;P>F;P-=7)M(me,D-.16,P,Y-ee,.18,.26,h),M(me,D-.275,P,3,.045,.27,u),M(me,D-.3,P,2.7,.015,.2,p)},qe=(D,F,P,q=0)=>M(D,.035,F,P,.018,.28,U,q,!0),Qe=(D,F,P,q=2.9,B=0)=>{M(D,q/2,F,P,q,.27,l("archive"),B,!0);for(const te of[.12,.82,1.53,2.24,q])M(D,te,F,P+.06,.075,.4,d,B)},R=(D,F,P=1.6)=>{M(D,1.58,F,P,.6,.18,h),M(D,1.59,F+.105,P-.2,.43,.018,z),M(D,1.28,F+.12,P,.06,.48,d);for(let q=0;q<6;q++)M(D-P*.4+q*P*.13,1.323,F+.18,.08,.016,.07,q%3?h:g)},O=()=>{for(const D of e.walls)D.h>.7&&D.h<1.8&&D.material==="metal"&&D.w>1.5&&R(D.x,D.z,Math.min(2.4,D.w*.8))},se=(D,F,P=3.6,q=8702389)=>{M(D,P/2,F-.48,1.12,P-.12,.14,h);const B=new ln({color:q,transparent:!0,opacity:.31,depthWrite:!1});n.set(`tank-${n.size}`,B),_(new Je(.54,.54,P-.47,10),B,D,P/2,F);for(const te of[.19,P-.19])_(new Je(.69,.69,.22,10),A,D,te,F);_(new bn(.3,8,5),c(5467219),D,P*.5,F+.15),v(D,P*.35,F+.18,D+.14,P*.7,F+.18,.13,c(7373923));for(let te=0;te<4;te++)v(D-.25,P*.45+te*.09,F+.27,D+.2,P*.44+te*.09,F+.27,.021,c(10792067),5);for(const te of[-1,1])M(D+te*.56,P/2,F,.08,P-.36,.1,d);M(D,P-.54,F+.63,.26,.2,.045,U),M(D,P*.28,F+.62,.23,.08,.04,p)},fe=(D,F,P=4.45,q=p)=>{M(D,P,F,2.2,.12,.27,h),M(D,P-.08,F,1.92,.045,.2,q)},ce=D=>{const F=l("window",9411757,1382671);for(let P=-1;P<=1;P+=2)for(let q=0;q<11;q++){const B=P*(Y+8+Ht(q+53)*20),te=D-q*11,de=13+Ht(q+19)*28;M(B,de/2,te,7+Ht(q+49)*5,de,8,F,0,!0),M(B,de+.1,te,8,.27,8,h),v(B,de,te,B,de+3.4,te,.045,d)}};if(k===1){st(4.24),T(-10,-10,13,24,C),T(10,-10,13,24,C),y("VANE / SAFEHOUSE",0,3.4,j-.68,4,.8,Math.PI,"#dcc69b","#3d3b33"),y("ARCHIVE / NO ONE IS INNOCENT",-10,3.25,Z+.68,7,.8),y("ARMORY / KEEP YOUR HEAD DOWN",10,3.25,Z+.68,7,.8);for(const D of[-1,1])for(let F=-3;F>-22;F-=4.7)Qe(D*17.5,F,3.5,2.9,D<0?Math.PI/2:-Math.PI/2),M(D*17.35,3.5,F,.03,.4,3.9,C);for(const D of[-1,1]){const F=D*17.35,P=-24;M(F,2.15,P,.08,1.63,4.25,l("wood"));for(let q=0;q<7;q++){const B=1.64+Ht(q+13)*.81,te=P-1.6+q*.47;M(F-D*.055,B,te,.035,.42,.3,u),M(F-D*.078,B+.065,te,.012,.15,.19,h),v(F-D*.081,B+.23,te,F-D*.081,2.2,P+.4,.007,f,4)}}for(const D of e.walls)if(D.h<1.5&&D.material==="crate"){M(D.x,D.h+.08,D.z,D.w*.88,.13,D.d*.8,C),M(D.x,D.h+.19,D.z,.32,.08,.23,d);for(let F=0;F<3;F++)M(D.x-.36+F*.28,D.h+.12,D.z+.25,.16,.04,.22,u)}for(const D of[-1,1])for(let F=0;F>-28;F-=7){M(D*17.37,2.45,F,.13,1.3,2.55,h);for(let P=0;P<12;P++)M(D*17.29,1.87+P*.1,F,.03,.044,2.35,d);fe(D*11,F,4.13,g)}O()}else if(k===2){st(5.05),T(0,-48,28,35,A),y("AXIOM / HUMAN ENGINEERING",0,4.03,j-.68,11,1.18,Math.PI,"#e3caa5","#492e33"),y("SPECIMEN WING / CONTAINMENT 09",-16,3.7,-36.55,8,.8),y("SECURITY / AUTHORIZED PERSONNEL",17,3.7,-35.55,8,.8);for(const D of[-27.08,27.08])for(let F=-20;F>-68;F-=10)M(D,4.28,F,.24,.2,5,A);for(const D of[-26.97,26.97]){v(D,4.4,-15,D,4.4,-69,.16,f),v(D-.35*Math.sign(D),4.18,-15,D-.35*Math.sign(D),4.18,-69,.095,d);for(let F=-17;F>-69;F-=6)M(D,4.4,F,.38,.31,.085,h)}for(let D=-12;D>-68;D-=9)fe(0,D,4.75,D<-38?x:p),qe(0,D,10);y("LAZARUS / SUBJECTS WERE HUMAN",0,3.8,Z+.68,11,.95),O()}else if(k===3){T(0,-46,53,53,A),ce(-20),_(new ii(11.8,.48,6,32),A,0,7.4,-46,Math.PI/2),_(new ii(11.1,.12,4,32),m,0,7.46,-46,Math.PI/2);for(let P=0;P<12;P++){const q=P*Math.PI/6,B=Math.sin(q)*11.8,te=-46+Math.cos(q)*11.8;v(B,7.4,te,B,11.4,te,.15,d),M(B,8.4,te,.45,.6,.48,h),v(B,7.2,te,B*.85,5.4,-46+(te+46)*.85,.09,f)}for(const P of[-34.8,34.8])for(let q=-15;q>-76;q-=14)M(P,3.6,q,.45,7.2,2.3,A),M(P,5.7,q,.55,.25,2.7,U),v(P,5.1,q,P-5*Math.sign(P),5.1,q,.18,d),_(new ii(1.2,.15,4,12),p,P,4.85,q,0,Math.PI/2);for(let P=0;P<7;P++){const q=-22+P*7,B=-80.4;M(q,5.4,B,3.2,10.8,1.2,L,0,!0),M(q,9.6,B+.65,1.8,.16,.07,m),v(q,10.8,B,q,15+Ht(P)*8,B,.12,d)}y("FRACTURE / REALITY IS A WEAPON",0,5.1,-25.2,13,1.04),y("REACTOR 00 / NULL CROWN",0,4.6,-81.2,13,1.1);const D=r1();a.add(D);const F=new Dt({map:D,transparent:!0,depthWrite:!1,opacity:.92});n.set("reactor-breach",F),_(new Rt(6.6,6.6),F,0,7.1,-80.95),_(new ii(3.48,.17,5,24),p,0,7.1,-81.06),o.push((P,q)=>{D.rotation+=P*.11,F.opacity=q?.powered?.16:.92});for(const P of e.walls)P.h<2&&P.material==="metal"&&(M(P.x,P.h+.045,P.z,P.w+.06,.08,P.d+.06,U,0,!0),R(P.x,P.z,Math.min(P.w*.85,2.4)))}else if(k===4){ce(-8);const D=l("water",9548731,1057067);T(0,-37,Y-ee-1,j-Z-1,l("panel",6846326)),M(ee-12,-.24,-40,22,.1,110,D,0,!0),M(Y+12,-.24,-40,22,.1,110,D,0,!0);const F=D.map;o.push(P=>{F.offset.x=(F.offset.x+P*.009)%1,F.offset.y=(F.offset.y+P*.004)%1});for(const P of e.walls)if(P.material==="crate"&&P.h>1.7&&(M(P.x,P.h/2,P.z,P.w+.035,P.h+.025,P.d+.035,N,0,!0),M(P.x,P.h+.07,P.z,P.w+.12,.1,P.d+.12,h),P.w>P.d)){for(let q=P.x-P.w/2+.17;q<P.x+P.w/2;q+=.72)M(q,P.h/2,P.z+P.d/2+.028,.045,P.h-.13,.055,d);y("AXIOM / LIVE CARGO",P.x,Math.min(2,P.h*.64),P.z+P.d/2+.064,Math.min(3.1,P.w*.6),.63)}for(const P of[-1,1]){const q=P*(Y+1.1),B=P<0?-42:-72;M(q,8,B,1.1,16,1.2,f),M(q,14.8,B,2.2,2.2,2.2,A),M(q-P*8,16,B,18,.6,1.1,U,0,!0),v(q,16,B,q-P*16,16,B,.11,d),v(q,13.3,B,q-P*10,16,B,.14,h),v(q-P*12,15.7,B,q-P*12,6.8,B,.055,d),_(new ii(.28,.08,4,10,Math.PI*1.35),f,q-P*12,6.54,B)}for(const P of[-1,1])for(let q=3;q>-87;q-=14)M(P*43.35,2.75,q,.16,5.5,.16,h),v(P*43.35,5.5,q,P*41.9,5.5,q,.08,d),fe(P*41.9,q,5.36,g);y("PORT VESPER / AXIOM FREIGHT",0,5,-57.7,15,1.1),y("CARGO 091 / DO NOT BREAK SEAL",31,3.45,-29.45,9,.83);for(let P=-12;P>-80;P-=12)qe(0,P,7)}else if(k===5){st(4.36),T(0,-65,15,144,C);const D=ic("window");a.add(D);const F=new Dt({map:D,color:10729406});n.set("moving-train-night",F),o.push(q=>{D.offset.x=(D.offset.x+q*.45)%1});for(const q of[-1,1])for(let B=1;B>-134;B-=5.8){const te=q*8.37;M(te,2.12,B,.05,1.36,3.7,h),M(te-q*.041,2.12,B,.012,1.12,3.44,F,0,!0);for(const de of[1.42,2.82])M(te-q*.083,de,B,.035,.07,3.84,d);for(const de of[-1.9,1.9])M(te-q*.083,2.12,B+de,.035,1.48,.07,d);M(te-q*.03,3.32,B,.045,.43,3.72,l("plaster",9218732)),M(te-q*.086,3.3,B,.018,.06,1.5,g)}for(const q of[-1,1]){v(q*4.7,3.68,4,q*4.7,3.68,-132,.055,d);for(let B=1;B>-132;B-=5.8)v(q*4.7,4.24,B,q*4.7,3.68,B,.036,d),_(new ii(.17,.03,4,10),h,q*4.7,3.43,B)}const P=["PASSENGER","FREIGHT","BIOTRANSFER","HEAVY CARGO","LOCOMOTIVE"];for(let q=0;q<5;q++){const B=-8-q*25;fe(0,B,4.06,q>2?x:g);for(const te of[-1,1])y(`IRON EXPRESS / ${String(q+1).padStart(2,"0")} ${P[q]}`,te*8.3,3.64,B,3.8,.52,-te*Math.PI/2,"#dfc47b","#263b40");qe(0,-16-q*25,14)}for(const q of e.walls)q.h<1.7&&q.w>1.5&&M(q.x,q.h+.06,q.z,q.w*.95,.12,q.d*.91,l("plaster",7903373));O(),y("ENGINE ROOM / DANGER HIGH VOLTAGE",0,3.38,Z+.68,9,.83)}else if(k===6){const D=l("bark"),F=l("leaf"),P=l("stone",12825219);T(me,we,Y-ee-.5,j-Z-.5,P);const q=(B,te,de)=>{const ke=9+Ht(de)*7;_(new Je(.33,.9,ke,7),D,B,ke/2,te);for(let Be=0;Be<4;Be++){const $e=Be*Math.PI*.5+Ht(de)*1.6,H=Math.sin($e)*3.6,lt=Math.cos($e)*3.6;v(B,ke*.58,te,B+H,ke*.77,te+lt,.21,D),_(new Ca(3+Ht(de+Be)*2,0),F,B+H,ke*.83,te+lt)}_(new Ca(4.4,0),F,B,ke+.7,te);for(let Be=0;Be<5;Be++){const $e=Be*Math.PI*.4;v(B,.6,te,B+Math.sin($e)*1.2,.03,te+Math.cos($e)*1.2,.14,D)}};for(const B of[-1,1])for(let te=7;te>-95;te-=10)q(B*(Y+1.3),te,te*3+B+500);for(let B=0;B<9;B++)q(-41+B*10,Z-2,600+B);for(const B of[-1,1])for(let te=4;te>-92;te-=5){const de=B*49.46;for(let ke=0;ke<5;ke++){const Be=-1+ke*.5,$e=de-B*Math.cos(Be)*1.15,H=te+Math.sin(Be)*1.4;v(de,.02,te,$e,.8+Ht(te+ke)*.45,H,.025,D,4);for(let lt=1;lt<5;lt++){const Ve=lt/5,I=de+($e-de)*Ve,b=Ve*.85,$=te+(H-te)*Ve;_(new Rt(.31,.13),F,I,b,$,Math.PI*.24,B*Be,B*.35)}}}for(const B of e.walls)(B.material==="crate"||B.material==="metal")&&(M(B.x,(B.y??0)+B.h/2,B.z,B.w+.035,B.h+.03,B.d+.035,S,0,!0),B.h>2&&M(B.x,Math.min(3.3,B.h-.25),B.z,B.w+.075,.1,B.d+.075,p));for(let B=0;B<7;B++){const te=-20+B*6.7;M(te,5.3,-97.4,2.3,10.6,2.3,S,0,!0),M(te,10.1,-97.4,3,.5,3,S),v(te,10.5,-97.4,te,15.8,-97.4,.17,h)}y("THE LOST CANOPY / BEFORE THE FIRST BREACH",0,4.05,-51.62,16,1.2,0,"#becb97","#34453d"),y("AXIOM FIELD STATION / RESEARCH OUTPOST 07",31,3.5,-43.45,10,.92);for(let B=0;B<18;B++){const te=-48+Ht(B+900)*96,de=12+Ht(B+950)*2;_(new Ra(.35+Ht(B+99)*.5,0),S,te,.17,de)}}else if(k===7){st(5.15,-86),T(0,-53,61,103,A),ce(-7);for(const F of[-1,1])for(let P=2;P>-101;P-=7){M(F*31.43,2.55,P,.34,4.9,4.5,L,0,!0),M(F*31.22,4.35,P,.04,.12,3.7,p),M(F*31.2,1,P,.05,.13,3.7,m);for(let q=0;q<4;q++)M(F*31.21,1.42+q*.63,P,.04,.15,2.3,z)}for(const F of[-18,-42,-66,-86]){M(0,4.75,F,61,.3,.7,U,0,!0);for(const P of[-1,1])v(P*26,4.63,F,P*26,4.63,F-12,.12,d)}const D=Z-5;for(const F of[-14,14])M(F,13,D,1.2,26,1.2,A),v(F,25,D,0,38,D,.19,d);for(let F=9;F<34;F+=6)v(-14,F,D,14,F,D,.16,d),v(-14,F,D,14,F+6,D,.11,f),v(14,F,D,-14,F+6,D,.11,f);v(0,30,D,0,45,D,.23,d),_(new ii(6.1,.18,5,24),p,0,30,D,Math.PI/2),_(new ii(4.4,.13,5,20),m,0,34,D,Math.PI/2);for(let F=0;F<4;F++){const P=F*Math.PI*.5;v(Math.sin(P)*6.1,30,D+Math.cos(P)*6.1,0,36,D,.085,d)}y("AXIOM ZERO / END THE TRANSMISSION",0,4.3,-85.55,16,1.1,0,"#bfdfd7","#263144"),y("OMEGA / THERE IS NO CLEAN EXIT",0,4.07,Z+.68,15,.95,0,"#d6a6ad","#432b38"),O()}for(const D of e.props){const F=D.x,P=D.z,q=D.rotation??0;if(D.kind==="tank"){const B=e.walls.find(te=>te.w<=1.5&&te.d<=1.5&&Math.abs(F-te.x)<.01&&Math.abs(P-te.z)<.01);se(F,P,B?.h??3.4,k===3?12560848:k===7?9550277:8702389)}else if(["sign","facility-sign","warning"].includes(D.kind))y(D.label??"",F,D.kind==="facility-sign"?3.67:3.42,P,D.kind==="facility-sign"?7.2:4.4,.66,P>j-1?Math.PI:q,D.kind==="warning"?"#e1aa89":"#b6d3c0");else if(D.kind==="portrait"){const B=jc("vesper");a.add(B);const te=new Dt({map:B});n.set("elias-safehouse-poster",te),M(F,2.07,P,1.44,2.17,.07,C),_(new Rt(1.3,2.03),te,F,2.07,P-.044,0,Math.PI)}else if(D.kind==="office-board"){M(F,2,P,.08,1.67,3.6,C);for(let B=0;B<8;B++){const te=1.45+Ht(B+93)*.83,de=P-1.4+Ht(B+26)*2.8;M(F+.06,te,de,.03,.32,.25,u),M(F+.08,te+.055,de,.012,.13,.14,h),v(F+.09,te+.16,de,F+.09,2.3,P,.006,f,4)}}else if(D.kind==="terminal"||D.kind==="console"){if(!e.walls.some(te=>te.h<1.8&&te.w>1.5&&te.material==="metal"&&Math.abs(F-te.x)<.01&&Math.abs(P-te.z)<.01))if(Math.abs(F)>Y-2){const te=Math.sign(F),de=te*(Y-.67);M(de,1.84,P,.1,.64,1.1,h),M(de-te*.065,1.86,P,.016,.48,.92,z),M(de-te*.16,1.46,P,.4,.065,1.1,d)}else R(F,P,1.25)}else if(D.kind==="lab-table"){const B=e.walls.find(de=>de.h<2&&Math.abs(F-de.x)<.1&&Math.abs(P-de.z)<.1),te=B?.h??1.15;M(F,te+.037,P,B?B.w*.9:1.6,.07,B?B.d*.85:.72,d);for(let de=0;de<5;de++)M(F-.47+de*.19,te+.085,P+.15,.065,.017,.27,de%2?h:u,Ht(de)*.8-.4);_(new Je(.18,.18,.08,8),h,F+.51,te+.105,P-.2)}else if(D.kind==="locker"){const B=Math.sign(F)||1,te=B*(Y-.66);M(te,1.34,P,.1,2.64,.7,L),M(te-B*.06,1.38,P,.025,2.43,.57,A);for(let de=0;de<5;de++)M(te-B*.083,2.12-de*.08,P,.012,.024,.38,h);M(te-B*.09,1.23,P+.18,.025,.22,.035,d)}else if(D.kind==="chair"){M(F,.62,P,.44,.09,.44,h),M(F,.99,P-.18,.44,.7,.07,l("plaster",7767933));for(const B of[-.17,.17])for(const te of[-.17,.17])v(F+B,.08,P+te,F+B,.6,P+te,.022,d,4)}else if(D.kind==="bottles"){const te=e.walls.find(de=>de.h<2&&Math.abs(F-de.x)<2&&Math.abs(P-de.z)<.8)?.h??.94;for(let de=0;de<3;de++){const ke=F+de*.17;_(new Je(.052,.068,.23,6),c(de%2?5397049:7885629),ke,te+.15,P),_(new Je(.021,.027,.08,6),h,ke,te+.3,P)}}else if(D.kind==="pipe"){v(F,3.85,P-3.2,F,3.85,P+3.2,.13,f);for(const B of[P-2.5,P,P+2.5])_(new ii(.17,.036,4,8),d,F,3.85,B);_(new ii(.3,.045,4,10),f,F,3.25,P,0,Math.PI/2),v(F,3.22,P,F,3.9,P,.075,d)}else if(D.kind==="corpse"||D.kind==="skeleton"){const B=D.kind==="corpse"?c(6445651):u,te=new bn(1,8,4);te.scale(.43,.13,.27),_(te,B,F,.14,P);const de=new bn(.15,8,5);de.scale(1,.7,1),_(de,u,F-.53,.1,P);for(const ke of[-1,1])v(F+.25,.13,P+ke*.13,F+.64,.055,P+ke*.24,.065,B,5),v(F-.18,.14,P+ke*.22,F+.01,.07,P+ke*.46,.045,B,5);for(let ke=0;ke<5;ke++)v(F-.25+ke*.13,.255,P-.2,F-.25+ke*.13,.255,P+.2,.024,u,4);D.kind==="corpse"&&M(F,.024,P,.7,.01,.61,c(6503997))}else if(D.kind==="rubble")for(let B=0;B<8;B++){const te=new Ra(.14+Ht(B+21)*.2,0);te.scale(1,.4,1),_(te,S,F+(Ht(B)-.5)*1.3,.07,P+(Ht(B+33)-.5)*1.3)}else if(D.kind==="lamp")fe(F,P,5.1,g);else if(D.kind==="drain"){M(F,.026,P,1.1,.022,.85,h);for(let B=0;B<8;B++)M(F-.45+B*.13,.042,P,.045,.018,.82,d)}else D.kind==="checkpoint"&&(qe(F,P,2.6),M(F,.037,P,.16,.018,2,p))}for(const D of e.doors)if(D.d>D.w){M(D.x,3.64,D.z,.72,.18,D.d+.24,U,0,!0);for(const F of[-1,1])M(D.x,1.9,D.z+F*(D.d/2+.17),.62,3.8,.13,d)}else{M(D.x,3.64,D.z,D.w+.24,.18,.72,U,0,!0);for(const F of[-1,1])M(D.x+F*(D.w/2+.17),1.9,D.z,.13,3.8,.62,d)}for(const[D,F]of i){const P=No(F,!1);for(const q of F)q.dispose();if(P){const q=new xt(P,D);q.name=`campaign-static-${t.children.length}`,t.add(q),r.add(P)}}let pe=!1;return{update(D,F){if(!(pe||F&&F.status!=="playing"))for(const P of o)P(Math.max(0,Math.min(.05,D)),F)},dispose(){if(!pe){pe=!0,s.remove(t);for(const D of r)D.dispose();for(const D of n.values())D.dispose();for(const D of a)D.dispose();t.clear()}}}}function l1(s,e){const t=document.createElement("canvas");t.width=t.height=s==="raptor"?128:64;const i=t.width,n=t.getContext("2d"),r={raptor:{6322507:10587993,10202996:14403483,9798226:11770724,12889715:14732706},soldier:{10587248:13808280,4809334:9674668,2108985:3753816,8426382:13093580},mutant:{8820318:12957090,5135683:11181440,7897973:8425871},brute:{10121060:12488305,8075325:13484192,7897973:9536628}}[s][e]??e,o=r>>16&255,l=r>>8&255,c=r&255,h=(m,_=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(o*m+_)))},${Math.max(0,Math.min(255,Math.round(l*m+_)))},${Math.max(0,Math.min(255,Math.round(c*m+_)))})`,d=m=>{const _=Math.sin(m*127.13+e*.0017)*43758.5453;return _-Math.floor(_)},f=(m,_,M,v,y)=>{n.fillStyle=y,n.fillRect(m,_,M,v)},u=(m,_,M,v,y,T)=>{f(m,_,M,v,y),f(m,_-v,M,Math.max(1,v/2),T)},g=s==="mutant"&&e===8820318||s==="brute"&&e===10121060||s==="soldier"&&e===10587248,x=s==="raptor"&&(e===10202996||e===12889715);if(f(0,0,i,i,h(1)),s==="raptor"||g){for(let m=0;m<i;m+=2)for(let _=0;_<i;_+=2){const M=_/i,v=m/i,y=.81+Math.sin(v*Math.PI)*.2+Math.max(0,Math.cos(M*Math.PI*2-.8))*.15,T=Math.round(y*18)/18;f(_,m,2,2,h(T))}for(let m=0;m<(s==="raptor"?270:85);m++)f(d(m)*i|0,d(m+431)*i|0,1,1,h(.9+d(m+233)*.25))}if(s==="raptor")if(x)for(let m=4;m<i;m+=9)for(let _=0;_<i;_+=24){const M=_/24,v=2+M%2,y=m+M%2;u(_,y,22,v,h(.67),h(1.11)),f(_+2,y+2,17,2,h(.9))}else{for(let m=0;m<8;m++){const _=6+m*15,M=m%2*12,v=39+m%3*7;f(M,_,v,5,h(.6)),f(M+7,_+5,v-9,4,h(.65)),f(i-M-v,_+7,v-6,4,h(.69)),f(i-M-v+9,_+11,v-19,3,h(.72))}for(let m=0;m<13;m++)for(let _=-1;_<15;_++){const M=m*31+_+73,v=_*9+m%2*4+(d(M)*3|0),y=m*10+(d(M+313)*3|0),T=4+M%3,A=2+M%3,S=.91+d(M+97)*.14;f(v,y,T,1,h(1.18)),f(v-1,y+1,1,A,h(.73)),f(v,y+1,T,A,h(S)),f(v+1,y+A+1,T-1,1,h(.7))}for(let m=0;m<3;m++)for(let _=0;_<19;_++){const M=66+m*6+Math.floor(_*.3);f(M-1,62+_,2,1,"#66553a"),f(M,62+_,1,1,"#d9c49a")}}else if(s==="soldier")if(g){for(let m=13;m<43;m++){const _=20+(m%7===0?1:0);f(_,m,1,1,"#956b5b"),m%6===0&&f(_+1,m,2,1,h(1.12))}u(7,48,44,1,h(.72),h(1.09))}else if(e===2108985){for(let m=0;m<64;m+=4)f(0,m,64,2,h(.83+m/200));for(let m=0;m<6;m++)for(let _=6;_<59;_++){const M=6+m*10+Math.round(Math.sin(_*.11+m)*2);f(M,_,2,1,h(.68)),f(M+2,_,2,1,h(1.27))}for(const m of[13,46])u(0,m,64,2,h(.55),h(1.45))}else{for(let m=0;m<64;m++)f(0,m,64,1,h(1.17-m*.004));f(3,3,58,2,h(1.45)),f(3,5,2,54,h(1.25)),f(3,58,58,3,h(.5)),f(59,5,3,56,h(.62)),f(11,11,42,29,h(.76)),f(13,13,38,25,h(.95)),f(13,13,38,2,h(1.28)),f(13,37,38,2,h(.65));for(const m of[7,55])for(const _ of[7,55])f(m,_,3,3,h(.48)),f(m,_,2,1,h(1.8));f(7,44,49,8,"#753e4a"),f(7,43,49,1,"#b47878"),f(7,51,49,1,"#4b3038");for(let m=0;m<3;m++)f(19+m*7,24,4,3+m%2,"#ddc492");f(38,31,9,5,h(.58)),f(39,32,6,1,h(1.45)),f(39,34,4,1,h(1.45));for(let m=0;m<5;m++)u(43,16+m*3,8,1,h(.45),h(1.22));for(let m=0;m<9;m++){const _=d(m+61)*55+4|0,M=d(m+93)*55+4|0;u(_,M,2+m%5,1,h(.5),h(1.65))}}else if(g){for(let m=0;m<4;m++)for(let _=5;_<59;_++){const M=6+m*16+Math.round(Math.sin(_*.065+m*.9)*3);f(M,_,1,1,h(.63)),f(M+1,_,2,1,h(1.15)),_%11===0&&(f(M-2,_,6,1,"#7c5b49"),f(M-2,_-1,1,1,h(1.2)))}for(let m=0;m<4;m++){const _=9+m*13,M=15+m%2*24,v=5+m%3,y=7+m%3;f(_,M,v,y,s==="brute"?"#855341":"#967767"),f(_+1,M+2,v-2,y-3,s==="brute"?"#694334":"#78574a"),f(_,M-1,v-1,1,h(1.22))}for(let m=0;m<3;m++){const _=10+m*18;u(3,_,21,1,h(.73),h(1.17)),u(39,_+5,21,1,h(.77),h(1.11))}}else{for(let m=0;m<64;m++)f(0,m,64,1,h(1.12-m*.003));f(3,3,58,2,h(1.36)),f(3,5,2,54,h(1.18)),f(59,4,2,57,h(.52)),f(4,58,55,3,h(.48));for(let m=8;m<58;m++){const _=23+Math.floor(Math.sin(m*.15)*4);f(_,m,2,1,h(.39)),f(_+2,m,1,1,h(1.28)),m>30&&m<46&&f(_+Math.floor((m-30)*.8),m,1,1,h(.52))}for(let m=0;m<18;m++){const _=d(m+79)*55+4|0,M=d(m+91)*54+5|0;u(_,M,2+m%4,1,m%3===0?"#886344":h(.53),h(1.3))}for(const m of[7,54])for(const _ of[7,54])f(m,_,3,3,h(.4)),f(m,_,1,1,h(1.65));if(s==="brute")for(let m=8;m<57;m+=8)f(m,44,4,6,"#ad8d56"),f(m+4,44,3,6,"#463b32");else{for(let m=0;m<4;m++)u(41,15+m*4,12,2,h(.44),h(1.15));f(8,47,15,4,"#618d78"),f(8,46,15,1,"#b2c2a4")}}const p=new Oi(t);return p.magFilter=_t,p.minFilter=_t,p.wrapS=p.wrapT=wn,p.generateMipmaps=!1,p.colorSpace=At,p}function c1(){const s=document.createElement("canvas");s.width=256,s.height=128;const e=s.getContext("2d");e.imageSmoothingEnabled=!1;const t=o=>{const l=Math.sin(o*127.17+19.32)*43571.91;return l-Math.floor(l)},i=(o,l)=>{e.save(),e.translate(o%4*64,(1-Math.floor(o/4))*64),l(),e.restore()},n=(o,l,c,h,d="#ffffff")=>{e.fillStyle=d,e.fillRect(o,l,c,h)},a=(o,l)=>{e.fillStyle=l,e.beginPath(),e.moveTo(o[0],o[1]);for(let c=2;c<o.length;c+=2)e.lineTo(o[c],o[c+1]);e.closePath(),e.fill()};i(0,()=>{a([31,7,34,26,54,17,39,30,58,34,37,37,48,53,33,41,25,58,27,38,9,45,23,32,8,20,28,27],"#adadad"),a([29,23,37,25,42,33,35,40,27,36,24,29],"#ffffff"),n(13,11,3,3,"#cdcdcd"),n(48,45,4,2,"#b8b8b8"),n(19,49,2,4,"#dedede")}),i(1,()=>{a([31,2,37,18,49,10,44,26,62,27,47,36,55,48,38,43,30,62,24,44,8,52,15,37,2,27,22,24,17,8,28,18],"#909090"),a([31,11,35,24,47,22,42,31,49,39,36,38,29,49,26,38,14,35,24,29,24,17,29,24],"#dedede"),a([29,25,36,26,39,33,33,38,26,34,25,29],"#ffffff")}),i(2,()=>{for(let o=0;o<18;o++){const l=o*Math.PI*2/18,c=18+t(o+7)*9,h=32+Math.cos(l)*c,d=34+Math.sin(l)*c;n(h|0,d|0,5+(t(o+28)*6|0),4+(t(o+62)*7|0),"#5d5d5d")}a([9,34,10,22,18,13,27,12,31,5,41,14,48,15,51,25,58,31,49,44,42,51,32,56,23,48,14,47],"#9b9b9b"),a([17,31,20,20,29,18,33,12,41,23,46,23,48,36,39,45,31,47,22,40],"#dbdbdb"),a([24,31,29,24,34,20,38,31,42,36,34,41,27,37],"#ffffff");for(let o=0;o<37;o++)n(14+(t(o+134)*37|0),16+(t(o+172)*33|0),1+o%3,1,o%3?"#b8b8b8":"#eeeeee")}),i(3,()=>{for(let o=4;o<61;o++)for(let l=4;l<61;l++){const c=(l-32)/27,h=(o-33)/25,d=1-c*c-h*h,f=Math.sin(l*.35)*.08+Math.sin(o*.28+l*.1)*.08;if(d+f<.06||t(l*31+o*71)<Math.max(0,.24-d*.24))continue;const u=125+((1-h)*39|0),g=Math.min(.72,.18+(d+f)*.42);n(l,o,1,1,`rgba(${u},${u},${u},${g})`)}}),i(4,()=>{a([31,2,39,22,60,30,42,37,33,60,24,41,3,32,24,23],"#787878"),a([30,12,36,26,48,32,37,37,32,50,26,38,15,31,26,27],"#d7d7d7"),n(27,26,10,10),n(22,30,20,3),n(30,21,3,21),a([9,13,17,17,14,22,21,25,18,29,24,32,16,31,12,24,15,19],"#bcbcbc")}),i(5,()=>{for(let o=0;o<15;o++){const l=8+(t(o+15)*43|0),c=8+(t(o+52)*43|0),h=2+(t(o+103)*9|0);n(l,c,h,h,o%3?"#8c8c8c":"#b7b7b7"),n(l+1,c,Math.max(1,h-3),2,"#dedede")}}),i(6,()=>{a([12,18,49,9,54,40,33,52,17,41],"#777777"),a([15,19,45,13,40,37,19,40],"#d7d7d7"),a([43,14,51,36,36,47,40,37],"#b7b7b7"),n(20,19,20,2)}),i(7,()=>{n(23,30,19,3),n(31,23,3,18),n(20,31,4,2,"#898989"),n(32,19,2,5,"#bcbcbc")});const r=new Oi(s);return r.magFilter=r.minFilter=_t,r.generateMipmaps=!1,r.colorSpace=At,r}const eh=Math.PI*2,Qn=(s,e,t)=>Math.max(e,Math.min(t,s)),vs=(s,e,t,i)=>s+(e-s)*(1-Math.exp(-t*i)),h1=(s,e)=>Math.atan2(Math.sin(e-s),Math.cos(e-s)),_r=new W(0,-1,0),f1=new W(0,0,-1),d1=new W(1,0,0),_s=new W,Ms=new W,xn=new W,Mr=new W,nc=new W,sc=new W,Ss=new Kt,Sr=new Kt,br=new Kt,yr=new Kt,ac=new Kt,rc=new Kt;function th(s){for(const t of[...s.children])t instanceof Gt&&th(t);const e=new Map;for(const t of[...s.children])if(t instanceof xt&&!Array.isArray(t.material)){const i=e.get(t.material)??[];i.push(t),e.set(t.material,i)}for(const[t,i]of e){if(i.length<2)continue;const n=i.map(r=>(r.updateMatrix(),r.geometry.clone().applyMatrix4(r.matrix))),a=No(n,!1);if(a){for(const r of i)s.remove(r),r.geometry.dispose();s.add(new xt(a,t))}for(const r of n)r.dispose()}}function oc(s,e,t){const i=new Gt,n=new Gt,a=new Gt,r=new Gt,o=new Gt,l=new Gt,c=new Gt;i.add(n),n.add(a),a.add(r),r.add(o),o.add(l),l.add(c);const h={root:i,model:n,pelvis:a,chest:r,neck:o,head:l,jaw:c,legs:[],arms:[],tail:[],kind:s,mount:e,distance:0,heading:0,previousX:0,previousZ:0,previousTime:0,previousAlive:!0,initialized:!1,walkStarted:!1,motion:0,death:0,attackPose:0,turn:0,hipHeight:s==="raptor"?1.02:1.025,stride:s==="raptor"?1.65:s==="brute"?1.3:1.24};i.name=`creature-${s}${e?"-strider":""}`,n.name="creature-model",a.name="pelvis",r.name="chest",o.name="neck",l.name="head",c.name="jaw",i.scale.setScalar(e?1.45:s==="brute"?1.47:s==="soldier"?.96:1),a.position.y=h.hipHeight;const d=(C,N,L,U=[0,0,0],z=0)=>{const k=new xt(N,t(L,z));return k.position.set(...U),C.add(k),k},f=(C,N,L,U,z=0)=>d(C,new Yt(...L),U,N,z),u=(C,N,L,U)=>{const z=d(C,new bn(1,10,6),U,N);return z.scale.set(...L),z},g=(C,N,L,U,z,k,Q=7)=>{const X=new W(...N),ee=new W(...L),Y=ee.sub(X),Z=d(C,new Je(z,U,Y.length(),Q,1),k);return Z.position.copy(X).addScaledVector(Y,.5),Z.quaternion.setFromUnitVectors(new W(0,1,0),Y.normalize()),Z},x=(C,N,L,U,z,k=0,Q=0)=>{const X=d(C,new Ns(L,U,5),z,N);return X.rotation.set(k,0,Q),X},p=(C,N)=>{const L=new Gt;return L.position.set(...N),C.add(L),L},m=(C,N,L)=>{const U=[],z=[],k=[];for(let ee=0;ee<N.length;ee++)for(let Y=0;Y<10;Y++){const Z=Y*eh/10,j=N[ee];U.push(Math.cos(Z)*j.x,j.y+Math.sin(Z)*j.h,j.z),z.push(Y/10,ee/(N.length-1))}for(let ee=0;ee<N.length-1;ee++)for(let Y=0;Y<10;Y++){const Z=ee*10+Y,j=ee*10+(Y+1)%10,me=Z+10,we=j+10;k.push(Z,me,j,j,me,we)}for(let ee=1;ee<9;ee++){k.push(0,ee,ee+1);const Y=(N.length-1)*10;k.push(Y,Y+ee+1,Y+ee)}const X=new Jt;return X.setAttribute("position",new Et(U,3)),X.setAttribute("uv",new Et(z,2)),X.setIndex(k),X.computeVertexNormals(),d(C,X,L)},_=s==="raptor",M=s==="soldier",v=s==="brute",y=_?e?9798226:6322507:M?10587248:v?10121060:8820318,T=_?e?12889715:10202996:y,A=M?4809334:v?8075325:5135683,S=_?e?5325619:4209964:M?2108985:v?4927529:4470319,w=_?14800045:M?8426382:14536884;if(_){u(a,[0,.13,.13],[.32,.3,.6],y),u(r,[0,.09,-.34],[.265,.26,.39],y),u(r,[0,-.035,-.24],[.235,.135,.45],T),u(a,[0,-.015,.17],[.29,.17,.36],T),o.position.set(0,.13,-.5),g(o,[0,0,0],[0,.27,-.15],.16,.115,y),g(o,[0,.25,-.14],[0,.32,-.31],.118,.1,y),l.position.set(0,.32,-.3),m(l,[{z:.13,y:0,x:.14,h:.135},{z:-.06,y:.035,x:.172,h:.15},{z:-.23,y:.015,x:.128,h:.095},{z:-.52,y:-.014,x:.092,h:.074},{z:-.62,y:-.017,x:.076,h:.06}],y),u(l,[0,-.093,-.34],[.098,.032,.31],S),c.position.set(0,-.073,.08),m(c,[{z:0,y:-.035,x:.115,h:.036},{z:-.24,y:-.061,x:.102,h:.035},{z:-.6,y:-.056,x:.071,h:.028},{z:-.69,y:-.049,x:.05,h:.025}],T);for(const U of[-1,1]){const z=u(l,[U*.146,.092,-.085],[.052,.035,.12],y);z.rotation.z=U*.24,u(l,[U*.161,.055,-.128],[.023,.042,.046],S),f(l,[U*.178,.056,-.135],[.012,.027,.041],e?16767386:16172413,5386504),f(l,[U*.186,.056,-.141],[.005,.026,.01],S),u(l,[U*.059,.01,-.586],[.017,.012,.022],S);for(let j=0;j<6;j++){const me=-.2-j*.064,we=U*(.102-j*.006);x(l,[we,-.105,me],.019,.072+j%2*.012,w,Math.PI),x(c,[we*.93,-.012,me-.06],.016,.055,w)}const k=p(a,[U*.267,0,.19]),Q=p(k,[0,-.5,0]),X=p(Q,[0,-.55,0]),ee=p(X,[0,-.28,0]);u(k,[0,-.145,0],[.19,.265,.23],y),g(k,[0,-.05,0],[0,-.5,0],.15,.075,y),u(Q,[0,-.015,0],[.091,.09,.095],T),g(Q,[0,-.02,0],[0,-.55,0],.085,.046,T),g(X,[0,0,0],[0,-.28,0],.046,.039,y),u(ee,[0,.035,-.08],[.107,.063,.139],T);for(let j=-1;j<=1;j++){const me=j*.056;g(ee,[me,.035,-.035],[me*1.35,.022,-.225],.032,.023,T,5),g(ee,[me*1.35,.023,-.22],[me*1.48,.024,-.295],.03,.002,w,5)}g(ee,[-U*.08,.068,-.025],[-U*.104,.128,-.12],.031,.023,y,5),g(ee,[-U*.104,.135,-.12],[-U*.106,.152,-.2],.037,.026,w,5),g(ee,[-U*.106,.152,-.2],[-U*.105,.073,-.254],.026,.002,w,5),h.legs.push({hip:k,knee:Q,hock:X,foot:ee,side:U,upper:.5,lower:.55,metatarsal:.28,anchor:new ze,swingStart:new ze,worldFoot:new ze,height:0,previous:0,initialized:!1});const Y=p(r,[U*.23,.055,-.415]),Z=p(Y,[0,-.22,0]);g(Y,[0,0,0],[0,-.22,0],.061,.043,y),g(Z,[0,0,0],[0,-.21,0],.043,.033,T);for(let j=-1;j<=1;j++)g(Z,[j*.029,-.205,0],[j*.038,-.265,-.08],.016,.011,y,5),g(Z,[j*.038,-.265,-.08],[j*.04,-.29,-.11],.018,.001,w,5);h.arms.push({upper:Y,lower:Z,side:U});for(let j=0;j<5;j++){const me=u(a,[U*.293,.2-j*.015,-.28+j*.18],[.027,.13,.053],S);me.rotation.z=U*.28}}let C=p(a,[0,.14,.62]);const N=[.48,.47,.46,.45],L=[.164,.123,.079,.04,.008];for(let U=0;U<N.length;U++)h.tail.push(C),g(C,[0,0,0],[0,-.025,N[U]],L[U],L[U+1],y,8),g(C,[0,-L[U]*.66,0],[0,-.025-L[U+1]*.66,N[U]],L[U]*.56,L[U+1]*.56,T,6),C=p(C,[0,-.025,N[U]]);if(e){f(a,[0,.41,.08],[.51,.1,.53],4274220),f(a,[0,.48,.3],[.52,.18,.085],6574141);for(const U of[-1,1])f(a,[U*.325,.12,.075],[.045,.45,.16],4274220),f(a,[U*.385,-.085,.075],[.13,.045,.21],w),g(r,[U*.12,.39,-.68],[U*.24,.3,-.1],.012,.012,4274220,5)}}else{const C=v?.46:.31,N=v?.51:.345;if(u(a,[0,.025,.04],[C*.88,.19,.225],M?S:y),u(r,[0,.26,.03],[C*.8,.29,.205],y),u(r,[0,.49,.025],[C,.27,.235],y),g(r,[0,.58,0],[0,v?.66:M?.68:.75,-.015],.12,.102,y),o.position.set(0,v?.64:M?.65:.73,-.018),l.position.set(0,v||M?.1:.14,0),u(l,[0,.025,0],[.145,.19,.159],y),u(l,[0,-.092,-.025],[.123,.1,.13],y),c.position.set(0,-.062,-.012),M){for(const L of[-1,1]){const U=f(r,[L*.135,.47,-.174],[.267,.35,.13],A);U.rotation.z=-L*.075,f(r,[L*.165,.098,-.185],[.14,.19,.085],A),f(a,[L*.245,.015,-.185],[.13,.16,.1],S)}for(let L=0;L<3;L++)f(r,[0,.28-L*.065,-.206],[.32,.045,.065],A);f(r,[0,.44,-.266],[.065,.22,.046],w),f(a,[0,.015,-.03],[.59,.07,.39],S),f(a,[0,.025,-.23],[.082,.06,.024],w),f(r,[0,.38,.258],[.31,.43,.17],S),f(r,[0,.48,.356],[.2,.24,.042],A),u(l,[0,.083,.026],[.18,.174,.187],A),f(l,[0,.014,-.16],[.255,.065,.026],S),f(l,[0,.054,-.171],[.257,.016,.025],w),f(l,[0,.021,-.18],[.216,.024,.01],15054443,5584659),f(l,[.073,.021,-.189],[.036,.029,.009],16766602,5849113),u(l,[0,-.118,-.143],[.089,.045,.059],S);for(const L of[-1,1])u(l,[L*.086,-.046,-.151],[.04,.052,.042],y),g(l,[L*.078,-.105,-.149],[L*.078,-.105,-.21],.03,.028,w),u(l,[L*.179,.03,.007],[.025,.072,.064],S);g(l,[.15,.15,.034],[.15,.32,.034],.009,.007,S,5),f(r,[-.136,.51,-.268],[.052,.053,.012],15844489)}else{u(r,[-C*.38,.5,-.126],[C*.67,.22,.17],y),u(r,[C*.45,.36,-.135],[C*.44,.205,.124],A);for(let L=0;L<4;L++)for(const U of[-1,1])g(r,[U*.025,.52-L*.069,-.236],[U*(C*.75-L*.018),.48-L*.064,-.199],.018,.013,w,5);g(r,[0,.51,-.246],[0,.245,-.225],.023,.018,S,5),f(r,[C*.82,.43,.042],[.14,.26,.27],A),f(r,[.055,.47,.239],[.19,.3,.08],7897973);for(let L=0;L<4;L++)f(r,[.053,.58-L*.062,.287],[.15,.023,.02],L===0?7976343:S,L===0?1455398:0);u(l,[-.053,.029,-.107],[.09,.07,.09],y),u(l,[.083,.027,-.103],[.084,.08,.072],A);for(const L of[-1,1])u(l,[L*.073,.047,-.144],[.055,.041,.025],S),u(l,[L*.073,.086,-.13],[.074,.028,.047],y),u(l,[L*.08,-.006,-.135],[.073,.047,.04],y),f(l,[L*.071,.04,-.173],[.029,.018,.01],15912852,4664598);m(l,[{z:-.118,y:.002,x:.035,h:.063},{z:-.183,y:-.003,x:.03,h:.046},{z:-.213,y:-.021,x:.026,h:.025}],y);for(const L of[-1,1])u(l,[L*.018,-.033,-.207],[.013,.007,.01],S);f(l,[0,-.069,-.142],[.126,.041,.03],S),u(c,[0,-.052,-.122],[.096,.045,.055],y);for(let L=0;L<5;L++)x(l,[(L-2)*.024,-.084,-.163],.011,.044,w,Math.PI),x(c,[(L-2)*.024,-.017,-.153],.011,.036,w);if(v){u(r,[-.36,.56,.035],[.25,.22,.27],A);for(let L=0;L<3;L++)x(r,[-.36+L*.093,.76,.05],.035,.17-L*.018,w,0,-.15)}}for(const L of[-1,1]){const U=p(a,[L*(v?.23:.176),-.025,.018]),z=p(U,[0,-.52,0]),k=p(z,[0,-.54,0]),Q=p(k,[0,0,0]);if(u(U,[0,-.2,.01],[v?.158:.119,.253,.13],M?S:y),g(U,[0,-.05,0],[0,-.52,0],v?.142:.105,.071,M?S:y),u(z,[0,-.008,-.032],[.085,.085,.095],A),g(z,[0,-.03,0],[0,-.54,0],.08,.052,M?S:y),M&&(f(U,[0,-.185,-.09],[.17,.28,.06],A),f(z,[0,-.21,-.066],[.12,.24,.055],A)),f(Q,[0,.027,-.092],[v?.21:.16,.14,.31],M?S:A),f(Q,[0,-.035,-.085],[v?.215:.165,.038,.33],S),!M)for(let Z=-1;Z<=1;Z++)g(Q,[Z*.044,.012,-.222],[Z*.053,.011,-.273],.016,.001,w,5);h.legs.push({hip:U,knee:z,hock:k,foot:Q,side:L,upper:.52,lower:.54,metatarsal:0,anchor:new ze,swingStart:new ze,worldFoot:new ze,height:0,previous:0,initialized:!1});const X=p(r,[L*N,.56,.015]),ee=p(X,[0,-.34,0]),Y=!M&&L<0;if(u(X,[0,-.075,0],[Y?.17:.12,.16,.14],M?L<0?9131355:A:y),g(X,[0,-.06,0],[0,-.34,0],Y?.137:.105,.073,M?S:y),g(ee,[0,0,0],[0,-.33,0],Y?.115:.075,.048,M?S:y),u(ee,[0,-.34,-.014],[.06,.09,.055],M?S:y),M)f(ee,[0,-.16,-.05],[.11,.18,.06],A);else for(let Z=-1;Z<=1;Z++)g(ee,[Z*.034,-.373,-.025],[Z*.041,-.43,-.065],.019,.012,y,5),g(ee,[Z*.041,-.43,-.065],[Z*.043,-.443,-.112],.018,.002,w,5);if(h.arms.push({upper:X,lower:ee,side:L}),M&&L===1){const Z=p(ee,[0,-.325,-.035]);Z.name="rifle",Z.rotation.x=-1.4,f(Z,[0,-.035,-.1],[.105,.11,.38],S),f(Z,[0,.025,-.09],[.085,.045,.29],w),g(Z,[0,-.025,-.27],[0,-.025,-.61],.025,.018,S,6),f(Z,[0,-.135,-.06],[.06,.17,.085],S),f(Z,[0,.032,-.21],[.023,.018,.038],14203763,3153920)}}}h.legs.forEach(C=>{const N=C.side<0?"left":"right";C.hip.name=`${N}-thigh`,C.knee.name=`${N}-knee`,C.hock.name=`${N}-hock`,C.foot.name=`${N}-foot`}),h.arms.forEach(C=>{const N=C.side<0?"left":"right";C.upper.name=`${N}-upper-arm`,C.lower.name=`${N}-elbow`}),h.tail.forEach((C,N)=>C.name=`tail-${N}`),th(n),go(h,{x:0,z:0,heading:0,speed:0,attack:0,hurt:0,alive:!0,time:0,dt:0}),h.initialized=!1;for(const C of h.legs)C.initialized=!1;return h}function Er(s,e,t,i){const n=s.root.scale.x,a=Math.cos(s.heading),r=Math.sin(s.heading);return i.set(s.root.position.x+(e*a+t*r)*n,s.root.position.z+(-e*r+t*a)*n)}function u1(s,e,t,i,n,a){const r=s.kind==="raptor",o=r?.47:0,l=i+(r?Math.cos(o)*e.metatarsal:0),c=n+(r?Math.sin(o)*e.metatarsal:0);Ss.copy(s.pelvis.quaternion).invert(),_s.set(t,l,c).sub(s.pelvis.position).applyQuaternion(Ss).sub(e.hip.position);const h=_s.length(),d=Qn(h,Math.abs(e.upper-e.lower)+.01,e.upper+e.lower-.002);Ms.copy(_s).multiplyScalar(1/Math.max(1e-4,h)),_s.copy(Ms).multiplyScalar(d),xn.copy(f1).applyQuaternion(Ss),xn.addScaledVector(Ms,-xn.dot(Ms)),xn.lengthSq()<1e-5&&xn.set(0,1,0),xn.normalize();const f=(e.upper*e.upper-e.lower*e.lower+d*d)/(2*d),u=Math.sqrt(Math.max(0,e.upper*e.upper-f*f));Mr.copy(Ms).multiplyScalar(f).addScaledVector(xn,u),nc.copy(_s).sub(Mr).normalize(),Sr.setFromUnitVectors(_r,Mr.normalize()),br.setFromUnitVectors(_r,nc),e.hip.quaternion.copy(Sr),e.knee.quaternion.copy(Sr).invert().multiply(br),sc.set(0,-Math.cos(o),-Math.sin(o)).applyQuaternion(Ss),yr.setFromUnitVectors(_r,sc),e.hock.quaternion.copy(br).invert().multiply(yr),rc.setFromAxisAngle(d1,a),ac.copy(Ss).multiply(rc),e.foot.quaternion.copy(yr).invert().multiply(ac)}function go(s,e){const t=Qn(e.dt,0,.1),i=s.kind==="raptor",n=s.kind==="soldier",a=s.kind==="brute",r=s.initialized&&(e.time<s.previousTime-.001||!s.previousAlive&&e.alive);if(r){s.initialized=!1,s.walkStarted=!1,s.distance=0,s.motion=0,s.attackPose=0,s.turn=0,s.death=0;for(const v of s.legs)v.initialized=!1}if(t===0&&s.initialized&&!r)return;const o=s.root.scale.x,l=s.initialized?Math.hypot(e.x-s.previousX,e.z-s.previousZ):0,c=!s.initialized||l>2.5||!e.alive&&s.death===0;s.initialized||(s.heading=e.heading,s.distance=0);const h=h1(s.heading,e.heading),d=h*(1-Math.exp(-(i?8:10)*t));s.heading+=d,s.turn=vs(s.turn,t?d/t:0,7,t),s.root.position.set(e.x,0,e.z),s.root.rotation.set(0,s.heading,0),s.previousX=e.x,s.previousZ=e.z,s.previousTime=e.time,s.previousAlive=e.alive,s.initialized=!0,s.motion=vs(s.motion,e.alive?Qn(e.speed/(i?3.2:2.1),0,1):0,9,t),e.alive&&e.speed>.02&&!s.walkStarted&&(s.distance=(i?.62:.66)*.5*s.stride,s.walkStarted=!0),e.alive&&e.speed>.02&&l<2.5&&(s.distance+=l/o),s.attackPose=vs(s.attackPose,Qn(e.attack,0,1),e.attack>s.attackPose?20:12,t),s.death=vs(s.death,e.alive?0:1,e.alive?25:6.2,t);const f=s.distance/s.stride,u=f*eh,g=s.attackPose,x=Math.sin(e.time*2.3)*.006*(1-s.motion)*(1-s.death);s.pelvis.position.y=s.hipHeight+Math.cos(u*2)*(i?.026:.017)*s.motion+x,s.pelvis.rotation.set(0,0,Math.sin(u)*(i?.02:.027)*s.motion),s.chest.rotation.set((i?-.035:-.055)*s.motion-(i?.07:.13)*g,Math.sin(u)*(n?.018:.045)*s.motion,0),s.neck.rotation.set((i?-.23:-.11)*g+x*.9,-s.turn*.013,0),s.head.rotation.set(e.hurt>0?Math.sin(e.time*40)*.055:0,0,e.hurt>0?-.055:0),s.jaw.rotation.x=i?-.075-g*.58:n?0:-g*.38,s.model.rotation.set(s.death*(i?-.07:.08),0,s.death*(i?1.49:1.52)),s.model.position.y=s.death*(i?.43:a?.64:n?.45:.485);const p=i?.62:.66,m=s.stride*p,_=m*.5,M=new ze;for(const v of s.legs){const y=(f+(v.side>0?.5:0))%1;if(c||!v.initialized){const z=s.walkStarted?y<p?-_+y/p*m:_-(y-p)/(1-p)*m:0;Er(s,v.hip.position.x,z+v.hip.position.z,v.anchor),v.worldFoot.copy(v.anchor),v.swingStart.copy(v.anchor),v.height=0,v.previous=y,v.initialized=!0}let T=0;if(e.alive&&e.speed>.035&&s.motion>.02)if(y<p)v.previous>=p&&Er(s,v.hip.position.x,-_+v.hip.position.z,v.anchor),v.worldFoot.copy(v.anchor),v.height=0,T=-Math.pow(Qn((y/p-.77)/.23,0,1),2)*.2;else{v.previous<p&&v.swingStart.copy(v.anchor);const z=(y-p)/(1-p),k=z*z*(3-2*z);Er(s,v.hip.position.x,-_+v.hip.position.z,M),v.worldFoot.copy(v.swingStart).lerp(M,k),v.height=Math.pow(Math.sin(z*Math.PI),1.3)*(i?.23:a?.16:.18)*Math.sqrt(s.motion),T=Math.sin(z*Math.PI)*.28,v.anchor.copy(v.worldFoot)}else v.height=vs(v.height,0,17,t),v.anchor.copy(v.worldFoot);v.previous=y;const S=(v.worldFoot.x-e.x)/o,w=(v.worldFoot.y-e.z)/o,C=Math.cos(s.heading),N=Math.sin(s.heading),L=S*C-w*N,U=S*N+w*C;u1(s,v,L,(i?.025:.077)+v.height,U,T),s.death>.05&&(v.hip.rotation.x+=s.death*.35,v.knee.rotation.x-=s.death*.25)}for(const v of s.arms){const y=Math.sin(u+(v.side>0?Math.PI:0))*s.motion;i?(v.upper.rotation.x=.64-y*.22+g*.8,v.lower.rotation.x=.52+g*.3,v.upper.rotation.z=-v.side*(.18+g*.24)):n?(v.upper.rotation.x=v.side>0?.98:1.12,v.lower.rotation.x=v.side>0?.42:.58,v.upper.rotation.x-=g*.1,v.upper.rotation.z=v.side>0?-.06:.25):(v.upper.rotation.x=.13-y*.36+g*(v.side<0?1.3:.86),v.upper.rotation.z=-v.side*(.14+g*.34),v.lower.rotation.x=.22+g*(v.side<0?.51:.76)),v.upper.rotation.x-=s.death*.27,v.lower.rotation.x+=s.death*.42}for(let v=0;v<s.tail.length;v++){const y=s.tail[v];y.rotation.y=-Qn(s.turn,-3.2,3.2)*(.06+v*.018)+Math.sin(u-v*.55)*s.motion*(.045+v*.017),y.rotation.x=.012+g*(.045+v*.018)+Math.sin(e.time*1.4-v*.5)*.008*(1-s.motion)}}const Tr=Math.PI*2,ht=s=>{const e=Math.sin(s*127.1+91.7)*43758.5453;return e-Math.floor(e)};function p1(s,e="#86ffb8",t="#101b20",i=256,n=64){const a=document.createElement("canvas");a.width=i,a.height=n;const r=a.getContext("2d");r.fillStyle=t,r.fillRect(0,0,i,n),r.fillStyle=e,r.fillRect(2,2,i-4,2),r.fillRect(2,n-4,i-4,2),r.fillRect(2,2,2,n-4),r.fillRect(i-4,2,2,n-4);const o=s.split("/").map(h=>h.trim());r.textAlign="center",r.textBaseline="middle";let l=o.length>1?19:22;l=Math.min(l,Math.floor((i-18)/(Math.max(...o.map(h=>h.length))*.61))),r.font=`bold ${Math.max(8,l)}px monospace`,o.forEach((h,d)=>r.fillText(h,i/2,n/2+(d-(o.length-1)/2)*(l+5)));const c=new Oi(a);return c.magFilter=c.minFilter=_t,c.colorSpace=At,c.generateMipmaps=!1,c}function m1(){const s=document.createElement("canvas");s.width=64,s.height=80;const e=s.getContext("2d");e.fillStyle="#132126",e.fillRect(0,0,64,80),e.fillStyle="#2e594d";for(let i=0;i<80;i++)e.fillRect(ht(i)*64|0,ht(i+15)*80|0,2,4);e.fillStyle="#19252d",e.fillRect(16,39,36,32),e.fillStyle="#97654b",e.fillRect(24,20,20,27),e.fillStyle="#b78660",e.fillRect(26,21,15,21),e.fillStyle="#342731",e.fillRect(16,13,36,6),e.fillRect(21,7,23,9),e.fillStyle="#806454",e.fillRect(14,17,41,4),e.fillStyle="#131922",e.fillRect(27,28,17,3),e.fillRect(34,27,9,7),e.fillStyle="#81d9b5",e.fillRect(27,29,2,2),e.fillStyle="#382c2b",e.fillRect(29,39,10,3),e.fillStyle="#7f9e9a",e.fillRect(43,45,10,25),e.fillStyle="#313f47";for(let i=47;i<70;i+=5)e.fillRect(44,i,8,2);e.fillStyle="#fcba67",e.fillRect(47,48,2,2),e.fillStyle="#a0dabc",e.font="bold 6px monospace",e.textAlign="center",e.fillText("ELIAS VANE",32,76);const t=new Oi(s);return t.magFilter=t.minFilter=_t,t.colorSpace=At,t}class ih{constructor(e,t=jn){this.canvas=e,this.level=t,this.renderer=new $m({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=At,this.renderer.toneMapping=yi,this.scene.background=new We(461072),this.scene.fog=new es(1053983,24,94),this.camera.rotation.order="YXZ";const i=new qf(12175839,6379857,1.38);this.scene.add(i);const n=new dr(12175587,1.12);n.position.set(-10,25,12),this.scene.add(n);const a=new dr(16765858,.42);a.position.set(-18,8,3),this.scene.add(a);const r=new dr(8646332,.22);r.position.set(7,9,-25),this.scene.add(r),this.scene.add(this.muzzleLight,this.blastLight);for(const l of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door","fuel"]){const c=new ln({map:Zm(l)});this.retroMaterial(c),this.mats.set(l,c)}(this.level.chapterId??0)===0?this.buildLevel():this.buildCampaignLevel(),this.flush();for(const l of this.level.doors)this.buildDoor(l);for(const l of this.level.destructibles??[])this.buildDestructible(l);for(const l of this.level.enemies)this.ensureEnemy(l);for(const l of this.level.pickups){const c=this.buildPickup(l);c.position.set(l.x,.5,l.z),this.scene.add(c),this.pickupGroups.set(l.id,c)}this.mountRig=oc("raptor",!0,(l,c=0)=>this.creatureMaterial("raptor",!0,l,c)),this.mountRig.root.position.set(this.level.mount.x,0,this.level.mount.z),this.mountRig.root.rotation.y=this.mountHeading,this.scene.add(this.mountRig.root),this.effectMat=new Dt({color:16777215,map:c1(),transparent:!0,opacity:.94,alphaTest:.07,depthWrite:!1}),this.effectMat.onBeforeCompile=l=>{l.vertexShader=`attribute float effectTile;
attribute float effectAlpha;
varying float vEffectTile;
varying float vEffectAlpha;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vEffectTile=effectTile;vEffectAlpha=effectAlpha;`),l.fragmentShader=`varying float vEffectTile;
varying float vEffectAlpha;
`+l.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
vec2 atlasUV=vec2((vMapUv.x+mod(vEffectTile,4.0))/4.0,(vMapUv.y+floor(vEffectTile/4.0))/2.0);
diffuseColor *= texture2D(map,atlasUV);diffuseColor.a *= vEffectAlpha;
#endif`)},this.effectMat.customProgramCacheKey=()=>"fossil-pixel-billboard-v1";const o=new Rt(.13,.13);o.setAttribute("effectTile",this.effectTiles),o.setAttribute("effectAlpha",this.effectAlpha),this.effectMesh=new Oc(o,this.effectMat,192),this.effectMesh.instanceMatrix.setUsage(_a),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated",this.atmosphere=new jm(this.scene,this.level)}renderer;scene=new wf;camera=new li(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;propGroups=new Map;propRuins=new Map;muzzleLight=new fa(16765594,0,8,2);blastLight=new fa(16749358,0,15,2);lamps=[];hazmat=[];mountRig;mountHeading=-.7;lastMountPosition;effectMesh;effectMat;effectTiles=new Aa(new Float32Array(192),1).setUsage(_a);effectAlpha=new Aa(new Float32Array(192),1).setUsage(_a);dummy=new Ot;snapGrid=new ze(640,400);clock=0;cameraStride=0;cameraMotion=0;previousPlayer;lastResolution="";powerLamp;lights=[];atmosphere;campaignDressing;retroMaterial(e){e.onBeforeCompile=t=>{t.uniforms.retroGrid={value:this.snapGrid},t.vertexShader=`uniform vec2 retroGrid;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},e.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(e,t=0,i=!0){const n=`c${e}-${t}`;let a=this.mats.get(n);return a||(a=new ln({color:e,emissive:t,flatShading:i}),this.retroMaterial(a),this.mats.set(n,a)),a}basic(e){const t=`b${e}`;let i=this.mats.get(t);return i||(i=new Dt({color:e}),this.mats.set(t,i)),i}addGeometry(e,t,i,n,a,r=0,o=0,l=0){const c=new St().compose(new W(i,n,a),new Kt().setFromEuler(new wi(r,o,l)),new W(1,1,1));e.applyMatrix4(c),e.attributes.normal||e.computeVertexNormals();const h=this.batches.get(t)||[];h.push(e),this.batches.set(t,h)}box(e,t,i,n,a,r,o,l=0){const c=new Yt(n,a,r),h=c.attributes.position,d=c.attributes.normal,f=c.attributes.uv;for(let u=0;u<h.count;u++){const g=Math.abs(d.getX(u)),x=Math.abs(d.getY(u));f.setXY(u,g>.5?h.getZ(u)/2:h.getX(u)/2,x>.5?h.getZ(u)/2:h.getY(u)/2)}this.addGeometry(c,o,e,t,i,0,l)}flush(){for(const[e,t]of this.batches){const i=No(t,!1);this.scene.add(new xt(i,e));for(const n of t)n.dispose()}this.batches.clear()}sign(e,t,i,n,a=3,r=.8,o=0,l="#86ffb8",c="#101b20"){const h=p1(e,l,c),d=new Dt({map:h,side:si});this.mats.set(`sign-${this.mats.size}`,d);const f=new xt(new Rt(a,r),d);return f.position.set(t,i,n),f.rotation.y=o,this.scene.add(f),f}lamp(e,t,i,n=8978368,a=!1){this.box(e,t,i,a?.08:1.2,a?1.9:.09,.1,this.mat(11791056,n));const r=new xt(new Yt(a?.09:1.22,a?1.95:.1,.11),this.basic(n));r.position.set(e,t,i+.015),this.scene.add(r),this.lamps.push(r)}buildCampaignLevel(){const{bounds:e,theme:t}=this.level,i=(e.minX+e.maxX)/2,n=(e.minZ+e.maxZ)/2,a=this.mats.get(t==="docks"||t==="jungle"?"road":t==="reactor"?"labfloor":"floor");this.box(i,-.08,n,e.maxX-e.minX,.16,e.maxZ-e.minZ,a);for(const o of this.level.walls)o.w===1.4&&o.d===1.4&&this.level.props.some(l=>l.kind==="tank"&&l.x===o.x&&l.z===o.z)||(this.box(o.x,(o.y??0)+o.h/2,o.z,o.w,o.h,o.d,this.mats.get(o.material)),o.h>3&&this.box(o.x,.17,o.z,o.w+.02,.22,o.d+.02,this.mat(t==="jungle"?6646096:2700090)));for(const o of this.level.hazards){const l=new Dt({color:t==="reactor"?7005618:5601843,transparent:!0,opacity:.78});this.mats.set(`hazard-${o.x}-${o.z}`,l);const c=new xt(new Rt(o.w,o.d),l);c.rotation.x=-Math.PI/2,c.position.set(o.x,.06,o.z),this.scene.add(c),this.hazmat.push(c)}const r=this.level.switch;this.box(r.x,.68,r.z,.44,1.25,.3,this.mats.get("metal")),this.powerLamp=new xt(new Yt(.29,.24,.05),this.basic(16737843)),this.powerLamp.position.set(r.x,1.18,r.z+.19),this.scene.add(this.powerLamp),this.sign("E / "+(t==="tower"?"BROADCAST":t==="reactor"?"SEAL THE BREACH":"RESTORE POWER"),r.x,1.78,r.z+.19,2.25,.36),this.sign(this.level.exitLabel??"EXTRACTION",this.level.exit.x,2.45,this.level.exit.z-.75,3.7,.46);for(let o=e.maxZ-5;o>e.minZ+4;o-=13){this.lamp(i,3.75,o,t==="jungle"?14002793:t==="reactor"?8054460:10861760);const l=new fa(t==="jungle"?16761744:8568784,8,15,2);l.position.set(i,3.1,o),this.lights.push(l),this.scene.add(l)}t==="jungle"?(this.scene.background=new We(2307372),this.scene.fog=new es(4610883,20,85)):t==="docks"?(this.scene.background=new We(1121321),this.scene.fog=new es(1648693,25,95)):t==="reactor"&&(this.scene.background=new We(1054496),this.scene.fog=new es(1522486,24,80)),this.campaignDressing=o1(this.scene,this.level),this.scene.getObjectByName("campaign-dressing")?.traverse(o=>{if(o instanceof xt)for(const l of Array.isArray(o.material)?o.material:[o.material])l instanceof ln&&this.retroMaterial(l)})}ensureEnemy(e){let t=this.enemyGroups.get(e.id);if(t)return t;const i=e.boss==="ironjaw"?10792887:e.boss==="guardian"?11190668:e.boss==="omega"?10258625:e.boss==="crown"?13284471:16777215,n=e.boss?"raptor":e.kind;if(t=oc(n,!1,(a,r=0)=>{const o=this.creatureMaterial(n,!1,a,r);if(!e.boss||r)return o;const l=`boss-${e.boss}-${a}`;let c=this.mats.get(l);return c||(c=o.clone(),c.color.setHex(i),this.mats.set(l,c)),c}),e.boss){if(t.root.scale.setScalar(e.boss==="omega"?1.75:1.7),e.boss==="ironjaw"||e.boss==="omega")for(const a of[-1,1])this.localBox(t.chest,a*.31,.13,-.12,.1,.4,.54,e.boss==="omega"?6640245:5859700),this.localBox(t.head,a*.19,.01,-.19,.07,.16,.28,8096915),this.localBox(t.head,a*.23,.09,-.2,.025,.07,.12,e.boss==="omega"?14459135:16750709,4728633);if(e.boss==="crown"||e.boss==="guardian")for(const a of[-1,1]){const r=this.mesh(new Ns(.08,.32,5),this.mat(e.boss==="guardian"?9419381:12299899),a*.15,.18,-.12,t.head);r.rotation.z=a*-.32}}return t.root.position.set(e.x,0,e.z),this.enemyGroups.set(e.id,t),this.scene.add(t.root),t}removeTransientGroup(e){e.removeFromParent(),e.traverse(t=>{if(t instanceof xt){t.geometry.dispose();const i=Array.isArray(t.material)?t.material:[t.material];for(const n of i)[...this.mats.values()].includes(n)||n.dispose()}})}buildLevel(){const e=t=>this.mats.get(t);this.box(-.7,-.12,-20,35,.2,69,e("road")),this.box(0,-.005,8,10.5,.08,8.1,e("floor")),this.box(0,-.005,-26,14,.08,12.1,e("labfloor")),this.box(11.3,-.005,-28,8,.08,8,e("floor")),this.box(0,-.005,-39,20,.08,14,e("labfloor")),this.box(-7,-.005,-49,8,.08,6,e("metal")),this.box(-15.4,-.005,-7,4,.08,6,e("floor")),this.box(0,4.05,8,10.6,.12,8.3,e("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,e("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,e("ceiling")),this.box(0,4.5,-39,20.4,.12,14,e("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,e("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,e("ceiling"));for(const t of this.level.walls)this.box(t.x,(t.y??0)+t.h/2,t.z,t.w,t.h,t.d,e(t.material)),t.h>3&&t.d<1&&(this.box(t.x,.15,t.z+.03,t.w,.25,t.d+.04,this.mat(1517867)),this.box(t.x,3.08,t.z+.035,t.w,.1,t.d+.08,this.mat(4153687)));for(let t=-1;t<=1;t+=2)for(let i=0;i<5;i++){const n=1-i*5,a=8+ht(i+t+10)*10,r=t*17;this.box(r,a/2,n,6,a,4.5,e("brick")),this.box(r,a+.2,n,6.4,.4,4.8,this.mat(1583412));for(let o=4.8;o<a-1;o+=2.3)for(let l=0;l<2;l++){const c=t*13.95;this.box(c,o,n-1+l*2,.1,1.2,.9,this.mat((i+l)%3===0?6720377:1781821,(i+l)%3===0?2640696:0)),this.box(c-t*.04,o-.64,n-1+l*2,.25,.12,1.15,this.mat(989474))}this.box(r+t*.4,a+.8,n,.4,1.2,1.7,e("metal")),this.box(r,a+2.5,n,.12,4,.12,this.mat(4479848))}for(let t=0;t<10;t++){const i=-35+t*8,n=15+ht(t+30)*27,a=-63-ht(t+41)*18;this.box(i,n/2,a,5,n,6,this.mat(1385265));for(let r=4;r<n;r+=4)this.box(i,r,a+3.04,3.5,.15,.08,this.basic(2576199))}for(const t of[-11.8,11.8])this.box(t,.045,-8,2.6,.15,24,e("concrete")),this.box(t+Math.sign(t)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const t of[6,10,-22,-27,-30,-34,-38,-42,-49]){const i=t<-31&&t>-46;this.box(0,3.91,t,i?20:9,.18,.25,e("metal")),this.lamp(t<-46?-7:0,t>0?3.79:4.22,t,11595712),this.box(3,4.12,t,1.5,.08,.8,e("metal"));for(let n=0;n<6;n++)this.box(2.4+n*.22,4.02,t,.06,.035,.65,this.mat(1189162))}for(const t of this.level.hazards){const i=new Dt({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${t.x}`,i);const n=new xt(new Rt(t.w,t.d),i);n.rotation.x=-Math.PI/2,n.position.set(t.x,.11,t.z),this.scene.add(n),this.hazmat.push(n),this.box(t.x,t.x<0?.14:.02,t.z,t.w+.2,.1,t.d+.2,this.mat(2112557));for(let a=0;a<8;a++)this.box(t.x+(ht(a)-.5)*t.w,.13,t.z+(ht(a+13)-.5)*t.d,.12,.05,.12,this.basic(9623415))}for(const t of this.level.props){const i=t.x,n=t.z,a=t.rotation??0;if(t.kind!=="neon")if(["office-sign","facility-sign","sign"].includes(t.kind)){const r=t.kind==="neon",o=t.kind==="office-sign"?3.05:t.kind==="facility-sign"?4.15:r?4.9:3.6;this.sign(t.label??"",i,o,n,t.kind==="facility-sign"?9:r?4.8:5,t.kind==="facility-sign"?1.3:.85,a,r&&n<-3?"#ff7095":"#96ffc9")}else if(t.kind==="portrait"){const r=new Dt({map:m1()});this.mats.set("portrait",r);const o=new xt(new Rt(.9,1.12),r);o.position.set(i,2.1,n),o.rotation.y=Math.PI,this.scene.add(o),this.box(i,2.1,n+.08,1.04,1.27,.06,this.mat(5987138))}else if(t.kind==="office-board"){this.box(i,2,n,.08,1.7,3.7,this.mat(5327932)),this.sign(t.label??"",i-.06,2.55,n,2.8,.38,a,"#cecfaa","#32392e");for(let r=0;r<7;r++)this.box(i-.07,1.8+ht(r)*.5,n+(ht(r+10)-.5)*2.8,.035,.42,.31,this.mat(r%2?12233109:8296837))}else if(["terminal","console"].includes(t.kind)){this.box(i,1.4,n,.85,.65,.12,this.mat(1322032)),this.box(i,1.4,n+.07,.65,.45,.02,this.basic(3840368));for(let r=0;r<4;r++)this.box(i-.2,1.53-r*.08,n+.085,.32-ht(r)*.1,.025,.01,this.basic(10280873));this.box(i,1.02,n+.2,.9,.08,.5,this.mat(4872532))}else if(t.kind==="lamp")this.box(i,1.9,n,.13,3.8,.13,this.mat(4217429)),this.box(i,3.7,n-.35,.12,.12,.8,this.mat(4217429)),this.lamp(i,3.61,n-.68,11530187);else if(t.kind==="car"){this.box(i,1,n,1.8,.65,3.6,this.mat(4797250),a),this.box(i,1.62,n-.2,1.58,.8,1.8,this.mat(2701636),a),this.box(i,1.63,n+.76,1.4,.48,.08,this.mat(1585465),a);for(const r of[-.97,.97])for(const o of[-1.15,1.15])this.addGeometry(new Je(.39,.39,.24,8),this.mat(1187107),i+r,.46,n+o,0,0,Math.PI/2);this.box(i,.78,n+1.86,1.1,.16,.08,this.basic(7021366)),this.box(i+.5,1.5,n,.04,.02,1.5,this.mat(9737091),.3)}else if(t.kind==="barrels")for(let r=0;r<3;r++){const o=i+r%2*.68,l=n+Math.floor(r/2)*.7;this.addGeometry(new Je(.29,.3,1,8),this.mat(r===2?5918776:2576451),o,.5,l),this.addGeometry(new Je(.31,.31,.07,8),this.mat(1059883),o,.22,l),this.addGeometry(new Je(.31,.31,.07,8),this.mat(1059883),o,.78,l),this.box(o,.6,l+.3,.17,.19,.02,this.basic(14003533))}else if(t.kind==="rubble")for(let r=0;r<12;r++)this.box(i+(ht(r)-.5)*2,.18+ht(r+10)*.18,n+(ht(r+20)-.5)*2,.3+ht(r+30)*.6,.25+ht(r+40)*.4,.25+ht(r+50)*.6,e("concrete"),ht(r+60)*Tr);else if(t.kind==="tank")this.addGeometry(new Je(.6,.65,.27,8),e("metal"),i,.14,n),this.addGeometry(new Je(.55,.55,2.5,8),this.mat(2384967,1063201),i,1.52,n),this.addGeometry(new Je(.65,.65,.28,8),e("metal"),i,2.91,n),this.box(i-.32,1.6,n+.45,.15,2.3,.15,this.basic(6671237)),this.box(i,1.8,n+.52,.28,.6,.16,this.mat(7580774)),this.box(i,1.4,n+.53,.53,.46,.12,this.mat(5929809)),this.box(i-.18,.8,n+.49,.12,.8,.15,this.mat(5929809)),this.box(i+.18,.8,n+.49,.12,.8,.15,this.mat(5929809));else if(t.kind==="pipe"){this.addGeometry(new Je(.15,.15,12,6),this.mat(4549473),i,3.3,n,Math.PI/2);for(let r=-2;r<=2;r++)this.addGeometry(new Je(.19,.19,.14,6),this.mat(1521208),i,3.3,n+r*2.4,Math.PI/2)}else if(t.kind==="lab-table"){this.box(i,1.27,n,3.9,.15,1.7,this.mat(5862506)),this.box(i,1.47,n,1.4,.26,.6,this.mat(6380610));for(let r=0;r<4;r++)this.box(i+(r-1.5)*.3,1.65,n,.16,.25,.18,this.mat(6653548))}else if(t.kind==="locker")this.box(i,1.25,n,.65,2.5,.85,e("metal")),this.box(i-.34,1.3,n,.025,.15,.17,this.basic(10471339));else if(t.kind==="power")this.box(i,1.15,n,.95,2.3,.45,e("metal")),this.sign("LIFT POWER",i,1.8,n+.24,1,.26),this.sign("E / ACTIVATE",i,1.48,n+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new xt(new Yt(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(i,1.12,n+.25),this.scene.add(this.powerLamp),this.box(i,.7,n+.28,.18,.35,.1,this.mat(12235397));else if(t.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,n,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,n,1,.4,Math.PI/2);else if(t.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",i,2.4,-51.91,5,.9),this.box(i,.05,n,6,.16,4,e("metal"));for(let r=0;r<5;r++)this.box(i,.17,n-2+r,6,.03,.12,this.mat(11310909))}else if(t.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(t.label??"",10,3.3,n,4,.65,-Math.PI/2,"#ff6b56");else if(t.kind==="street-mark")for(let r=0;r<3;r++)this.box(i,.05,n+(r-1)*1.8,.18,.03,.9,this.mat(9213035));else if(t.kind==="drain"){this.box(i,.04,n,1.7,.08,.6,this.mat(661533));for(let r=0;r<12;r++)this.box(i-.8+r*.14,.095,n,.055,.02,.5,this.mat(5399644))}else if(t.kind==="corpse"||t.kind==="skeleton")this.box(i,.17,n,.45,.3,1.5,this.mat(t.kind==="corpse"?5058625:10658186),.55),this.box(i-.24,.16,n+.75,.35,.23,.34,this.mat(7763815)),this.box(i,.025,n+.15,1.7,.02,2,this.mat(5051943));else if(t.kind==="chair"){this.box(i,.55,n,.6,.12,.6,this.mat(3684161)),this.box(i,.97,n+.25,.6,.8,.09,this.mat(3749953));for(const r of[-.23,.23])for(const o of[-.23,.23])this.box(i+r,.28,n+o,.06,.5,.06,e("metal"))}else if(t.kind==="bottles")for(let r=0;r<3;r++)this.addGeometry(new Je(.06,.1,.3,5),this.mat(4288072),i+r*.18,1,n);else t.kind==="secret-table"&&(this.box(i,.75,n,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}this.buildEnvironmentDetails(),e1({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)}),s1({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});for(const[t,i,n,a,r]of[[0,2.6,7,16759929,9],[0,3,-26,9161405,9],[0,3,-39,5560217,10],[9,3.6,-5.5,13585292,12],[-9,3.6,-1.7,16759404,13],[-9,3.7,-12,6728156,9]]){const o=new fa(a,r,13,2);o.position.set(t,i,n),this.lights.push(o),this.scene.add(o)}}decal(e,t,i,n,a,r,o=0,l=!1){const c=`decal-${e}`;let h=this.mats.get(c);h||(h=new Dt({map:Km(e),alphaTest:.12,side:si,depthWrite:!l,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.mats.set(c,h)),this.addGeometry(new Rt(a,r),h,t,i,n,l?-Math.PI/2:0,o)}buildEnvironmentDetails(){const e=c=>this.mats.get(c),t=this.mat(5005912),i=this.mat(1716275),n=this.mat(9279361),a=this.mat(7885891),r=this.mat(7496267),o=(c,h,d,f,u,g=0,x=0)=>this.addGeometry(new Je(f,f,u,8),t,c,h,d,g,0,x);this.box(-3.2,.88,8,2.3,.06,1.22,r),this.box(-3.2,.72,8.54,2,.16,.025,i);for(const c of[-3.7,-3.1,-2.5])this.box(c,.72,8.57,.49,.11,.035,r),this.box(c,.73,8.6,.16,.025,.03,n);this.box(-3.08,.98,8.26,.66,.055,.22,t);for(let c=0;c<3;c++)for(let h=0;h<10;h++)this.box(-3.34+h*.057,1.014,8.19+c*.052,.043,.018,.035,i);this.decal("paper",-2.46,.931,7.99,.43,.56,.15,!0),this.decal("paper",-3.96,.928,8.15,.36,.47,-.2,!0);for(let c=0;c<4;c++)this.box(-2.54,.96+c*.045,7.69,.38,.035,.32,this.mat(c%2?6315587:9273441),.12);this.box(-4.03,1.04,7.72,.29,.25,.22,i),this.box(-4.03,1.05,7.838,.23,.16,.012,t);for(let c=0;c<4;c++)this.box(-4.09+c*.04,1.06,7.85,.018,.09,.008,i);o(-4.13,1.26,7.69,.012,.32),this.box(-3.58,.95,8.35,.17,.05,.14,n),this.box(-3.59,.985,8.35,.1,.015,.08,i),o(-2.36,.953,7.72,.11,.04),o(-2.36,1.15,7.72,.025,.37),o(-2.53,1.39,7.72,.026,.4,0,Math.PI/2),this.addGeometry(new Ns(.19,.17,8),i,-2.69,1.37,7.72),this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(11390112));for(const c of[1.9,2.55]){this.box(-4.91,c,10.4,.16,.06,2.1,r);for(let h=0;h<9;h++){const d=9.58+h*.19;this.box(-4.89,c+.17,d,.16,.28+ht(h)*.09,.12,this.mat([7162948,5730661,8287574][h%3])),this.box(-4.8,c+.16,d,.012,.025,.1,n)}}this.box(-4.98,.95,8,.07,.04,7.6,i),this.box(4.99,3.6,8,.07,.06,7.6,t),this.sign("VESPER 2091 / MISSING: MARA",-2.48,2.67,11.97,2.35,.44,Math.PI,"#b7a57b","#2b3230"),this.decal("paper",1.9,.048,10,.43,.54,.6,!0),this.decal("paper",1.65,.047,10.32,.31,.42,-.2,!0),this.decal("graffiti",12.97,1.12,-14.2,2.55,1.12,-Math.PI/2),this.decal("graffiti",-12.97,1.3,-.7,2.4,1.05,Math.PI/2);for(const c of[-1,1]){o(c*12.83,5.4,-8,.065,23,Math.PI/2);for(let h=2;h>-20;h-=4)this.box(c*12.75,5.4,h,.09,.24,.2,t),this.box(c*11.78,.13,h,2.25,.024,.025,i);for(let h=1;h>-20;h-=6){this.box(c*11.68,.143,h,.7,.02,.42,i);for(let d=0;d<7;d++)this.box(c*11.68-.3+d*.1,.16,h,.038,.018,.38,t)}}for(let c=0;c<16;c++){const h=2-c*1.35;this.box(.6,.038,h,.12,.012,.62,this.mat(9277799));for(let d=0;d<3;d++)this.box(.58+(ht(c+d)-.5)*.13,.047,h+(ht(c+d+20)-.5)*.65,.08,.004,.05,e("road"))}for(const[c,h,d,f]of[[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal("puddle",c,.049,h,d,f,0,!0);for(let c=0;c<8;c++){const h=-10.7+ht(c+42)*21,d=-1-ht(c+90)*18;this.decal("paper",h,.048,d,.23,.31,ht(c)*Tr,!0)}this.box(-7,.85,-8.17,1.75,.14,.1,t);for(let c=0;c<10;c++)this.box(-7.6+c*.13,1.02,-8.11,.044,.13,.04,i);for(const c of[-7.59,-6.41])this.box(c,1.12,-8.12,.28,.19,.045,this.mat(10593678)),this.box(c,1.13,-8.09,.21,.07,.015,this.basic(7835254));this.box(-7,1.38,-8.22,1.53,.03,.1,a),this.box(-7.2,1.66,-9.2,.026,.45,.028,n,.6);for(const c of[-.97,.97])for(const h of[-1.15,1.15])this.addGeometry(new Je(.2,.2,.27,8),t,-7+c,.46,-10+h,0,0,Math.PI/2),this.addGeometry(new Je(.085,.085,.28,6),i,-7+c,.46,-10+h,0,0,Math.PI/2);for(const[c,h,d]of[[6.98,-21,-31],[9.98,-33,-45]])for(const f of[-1,1]){const u=f*c;this.box(u,3.9,(h+d)/2,.14,.21,h-d,t),o(u-f*.11,3.62,(h+d)/2,.055,h-d,Math.PI/2);for(let g=h;g>=d;g-=2.4){this.box(u,2,g,.065,3.65,.075,i);for(const x of[.4,1.5,2.6,3.6])this.box(u-f*.045,x,g,.035,.055,.055,n);this.box(u-f*.09,3.62,g,.06,.27,.22,t)}this.decal("circuit",u-f*.04,1.6,(h+d)/2,.53,.76,-f*Math.PI/2)}for(const c of[-3.5,3.5]){this.box(c,4.28,-39,.6,.18,12,e("metal"));for(let h=-33.3;h>-45;h-=.65)this.box(c,4.17,h,.47,.08,.07,i);this.box(c,4.03,-33.5,.82,.18,.19,t),this.box(c,4.03,-44.5,.82,.18,.19,t)}this.decal("poster",-6.975,2.05,-22.8,.73,1.02,Math.PI/2),this.sign("HELIX / SECTOR 04",6.98,2.55,-22.8,1.7,.42,-Math.PI/2,"#b3c4a1");let l=0;for(const c of this.level.props)if(c.kind==="tank"){const{x:h,z:d}=c;for(const f of[.32,2.7]){this.addGeometry(new Je(.63,.63,.12,8),t,h,f,d);for(let u=0;u<8;u++){const g=u*Tr/8;this.box(h+Math.sin(g)*.6,f,d+Math.cos(g)*.6,.075,.16,.075,n,g)}}for(const f of[-.45,.45])o(h+f,1.52,d-.36,.042,2.47);o(h,3.16,d,.1,.34),o(h,3.29,d-.5,.07,1,Math.PI/2),this.box(h+.43,1.6,d+.37,.31,.67,.18,i),this.decal("circuit",h+.43,1.6,d+.465,.24,.54),this.addGeometry(new Je(.105,.105,.035,12),n,h+.43,2.14,d+.42,Math.PI/2),this.box(h+.43,2.14,d+.446,.01,.11,.016,this.mat(12281932),.4),this.sign(`LZ-${String(++l).padStart(2,"0")} / CONTAINED`,h,.64,d+.655,.72,.18,0,"#b6cda2","#183b34")}for(const[c,h,d]of[[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){this.box(c-.6,d+.09,h+.22,.26,.14,.3,i),this.box(c-.6,d+.16,h+.22,.19,.015,.2,n),this.decal("paper",c+.57,d+.009,h,.31,.43,.2,!0);for(let f=0;f<4;f++)this.box(c-.65+f*.15,d+.013,h-.24,.08,.012,.02,a)}for(const c of[-1.38,1.38]){this.box(c,1.36,-40,.23,.055,1.43,n);for(const h of[-40.49,-39.52])this.box(c,1.41,h,.27,.05,.12,i)}this.box(-1.1,1.4,-40,.18,.2,.22,i),o(-1.09,1.65,-40,.045,.28),this.box(-1.17,1.79,-40,.18,.07,.14,n);for(let c=0;c<3;c++){const h=.8+c*.27;this.addGeometry(new Je(.06,.09,.29,6),this.mat(6523764),h,1.48,-40.4),this.box(h,1.64,-40.4,.07,.025,.07,t)}this.decal("paper",-1,1.36,-39.6,.35,.43,0,!0);for(const c of[-10.87,-3.12]){o(c,2.1,-49,.09,3.6);for(const h of[.7,3.45])o(c,h,-49,.14,.12);this.box(c,2.7,-51.88,.23,1.5,.12,t)}this.box(-7,4.25,-51.86,6,.12,.14,t),this.sign("AXIOM INDUSTRIES / FREIGHT 06",-7,1.35,-51.87,3.6,.36,0,"#8aa08e")}mesh(e,t,i,n,a,r){const o=new xt(e,t);return o.position.set(i,n,a),r.add(o),o}localBox(e,t,i,n,a,r,o,l,c=0){return this.mesh(new Yt(a,r,o),this.mat(l,c),t,i,n,e)}buildDestructible(e){const t=new Gt;if(t.position.set(e.x,e.y,e.z),t.name=`shootable-${e.id}`,e.kind==="barrel"){this.mesh(new Je(e.w*.44,e.w*.44,e.h,12),this.mats.get("fuel"),0,e.h/2,0,t);for(const n of[.08,e.h*.26,e.h*.76,e.h-.04])this.mesh(new Je(e.w*.456,e.w*.456,.075,12),this.mat(7369850),0,n,0,t);this.mesh(new Je(.105,.105,.055,8),this.mat(2238254),.14,e.h+.035,.1,t),this.localBox(t,-.12,e.h+.06,.04,.25,.08,.1,10196613)}else{const n=new Dt({color:9550273,transparent:!0,opacity:.25,side:si,depthWrite:!1});this.mats.set(`breakable-glass-${e.id}`,n),this.mesh(new Yt(e.w,e.h,e.d),n,0,e.h/2,0,t);for(let a=0;a<4;a++){const r=this.mesh(new Yt(.012,e.h*.73,.045),this.basic(a%2?6589335:13031884),-Math.sign(e.x)*(e.w/2+.012),e.h*.58,-e.d*.32+a*.15,t);r.rotation.x=-.36}this.localBox(t,-Math.sign(e.x)*.09,.04,0,.08,.08,e.d,10466996)}const i=new Gt;if(i.position.set(e.x,e.y,e.z),i.visible=!1,i.name=`ruin-${e.id}`,e.kind==="barrel"){const n=this.mesh(new Je(e.w*.43,e.w*.44,.25,10,1,!0),this.mat(2369579),0,.13,0,i);n.rotation.z=.13;for(let a=0;a<4;a++){const r=this.localBox(i,(ht(a+e.x)-.5)*1.15,.05,(ht(a+e.z)-.5)*1.15,.23,.045,.18,4471347);r.rotation.y=a*1.2}}else for(let n=0;n<12;n++)this.mesh(new Rt(.05+ht(n)*.13,.08+ht(n+2)*.17),this.basic(10337472),-.1,.017,-e.d/2+n*e.d/12,i).rotation.set(-Math.PI/2,0,n*2.1);this.scene.add(t,i),this.propGroups.set(e.id,t),this.propRuins.set(e.id,i)}buildDoor(e){const t=new Gt;t.position.set(e.x,0,e.z),this.mesh(new Yt(e.w,3.2,e.d),this.mats.get("door"),0,1.6,0,t);const i=e.w>e.d;i?(this.localBox(t,0,1.58,e.d/2+.015,e.w*.85,.08,.035,7581064),this.localBox(t,e.w*.35,1.3,e.d/2+.03,.15,.25,.03,e.locked?15629110:7924400,2250034)):this.localBox(t,-e.w/2-.015,1.58,0,.035,.08,e.d*.85,7581064),this.scene.add(t),this.doorGroups.set(e.id,t);const n=i?e.x:e.x-.3,a=i?e.z+.33:e.z;this.sign(e.label,n,3.57,a,i?Math.min(e.w+1.4,5):2.4,.5,i?0:-Math.PI/2,e.locked?"#ffb05d":"#8ccdaa")}creatureMaterial(e,t,i,n=0){const r={raptor:[6322507,10202996,9798226,12889715],soldier:[10587248,4809334,2108985,8426382],mutant:[8820318,5135683,7897973],brute:[10121060,8075325,7897973]}[e].includes(i)&&!n,o=[6322507,10202996,9798226,12889715,10587248,8820318,10121060].includes(i),l=`creature-${e}-${t?"saddle":"enemy"}-${i}-${n}`;let c=this.mats.get(l);if(!c){const h=r?l1(e,i):void 0,d={color:r?16777215:i,map:h,emissive:r?16777215:n,emissiveMap:h,emissiveIntensity:r?.2:1,flatShading:!1};c=e==="soldier"&&r&&!o?new Vf({...d,shininess:14,specular:2437168}):new ln(d),this.mats.set(l,c)}return c}buildPickup(e){const{kind:t,ammoFor:i}=e,n=new Gt;n.name=`pickup-${e.id}`;const r={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:14260323,plasma:6547611,machinegun:7767941,railgun:8306431,arc:11969023}[t==="ammo"&&i?i:t];if(t==="health")this.localBox(n,0,0,0,.55,.34,.3,12898751),this.localBox(n,0,0,.16,.3,.08,.015,12992833),this.localBox(n,0,0,.161,.08,.27,.015,12992833);else if(t==="armor"){this.localBox(n,0,0,0,.45,.42,.24,r),this.localBox(n,0,.26,0,.22,.13,.2,9684915);for(const c of[-1,1])this.localBox(n,c*.27,.1,0,.1,.3,.22,r)}else if(t==="ammo")if(this.localBox(n,0,0,0,.5,.3,.35,3160635),this.localBox(n,0,.09,.184,.4,.08,.025,r),i==="plasma"||i==="arc")for(let c=0;c<3;c++)this.localBox(n,-.16+c*.16,.2,0,.09,.22,.15,4740701),this.localBox(n,-.16+c*.16,.2,.09,.055,.11,.025,r,Math.floor(r*.13));else for(let c=0;c<4;c++)this.localBox(n,-.17+c*.115,.19,0,.055,i==="railgun"?.22:.15,.065,r);else if(t==="keycard")this.localBox(n,0,0,0,.35,.23,.02,8961178),this.localBox(n,0,.04,-.015,.33,.04,.02,2178355),this.localBox(n,.08,-.06,-.016,.07,.055,.02,15060343);else if(t==="evidence"){this.localBox(n,0,0,0,.42,.02,.48,r);for(let c=0;c<5;c++)this.localBox(n,0,.016,-.15+c*.07,.24,.009,.018,4806471)}else{if(this.localBox(n,0,0,0,t==="revolver"?.35:t==="railgun"?.95:.7,.13,.2,r),this.localBox(n,.27,0,0,t==="railgun"?.65:.4,.06,.07,6584431),this.localBox(n,-.11,-.15,0,.12,.22,.12,4209714),t==="plasma"||t==="arc")for(const c of[-.105,.105])this.localBox(n,0,.07,c,.37,.06,.035,r,2370102);t==="railgun"&&this.localBox(n,.07,.15,0,.38,.08,.075,2571858)}const o=new Dt({color:r,transparent:!0,opacity:.6,side:si}),l=new xt(new Po(.28,.36,12),o);return l.rotation.x=-Math.PI/2,l.position.y=-.43,n.add(l),n}resize(e){const t=e.resolution==="320"?320:640,i=e.resolution==="320"?200:400;this.renderer.setSize(t,i,!1),this.snapGrid.set(t*(t===640?1:.5),i*(t===640?1:.5));const n=this.canvas.getBoundingClientRect();this.camera.aspect=n.width&&n.height?n.width/n.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=e.resolution;for(const a of this.lights)a.visible=e.quality==="high"}render(e,t,i){this.lastResolution!==i.resolution&&this.resize(i),this.clock+=t;const n=e.player,a=this.previousPlayer,r=a?Math.hypot(n.x-a.x,n.z-a.z):0;a&&e.time<a.time&&(this.cameraStride=0,this.cameraMotion=0,this.lastMountPosition=void 0,this.mountHeading=-.7);const o=t>0&&r<1.5?r:0;this.cameraStride+=o,t>0&&(this.cameraMotion+=(Math.min(1,o/Math.max(t,.001)/4.4)-this.cameraMotion)*(1-Math.exp(-t*15))),this.previousPlayer={x:n.x,z:n.z,time:e.time};const l=n.crouching?.9:n.mounted?2.6:1.65,c=e.status==="playing"?Math.sin(this.cameraStride*(n.mounted?4.3:8.2))*this.cameraMotion*(n.mounted?.032:.016):0;this.camera.position.set(n.x,n.y+l+c,n.z),this.camera.rotation.set(n.pitch+n.recoil*.012,n.yaw,0,"YXZ"),this.muzzleLight.visible=i.quality==="high"&&!n.mounted&&n.owned.includes(n.weapon),this.muzzleLight.intensity=Math.max(0,n.recoil-.58)*26,this.muzzleLight.color.setHex(n.weapon==="plasma"?6684574:n.weapon==="arc"?11969023:n.weapon==="railgun"?8440063:16764811),this.muzzleLight.position.set(n.x-Math.sin(n.yaw)*.65+Math.cos(n.yaw)*.2,n.y+l-.15,n.z-Math.cos(n.yaw)*.65-Math.sin(n.yaw)*.2),this.blastLight.visible=!1,this.blastLight.intensity=0;for(const p of e.doors){const m=this.doorGroups.get(p.id);m&&(m.position.y=p.open*3.4)}for(const p of e.enemies){const m=this.ensureEnemy(p);go(m,{x:p.x,z:p.z,heading:p.heading,speed:p.speed,attack:p.attack,hurt:p.hurt,alive:p.alive,time:e.time,dt:t}),m.root.visible=this.sectorVisible(p.z,e)&&Math.hypot(p.x-n.x,p.z-n.z)<65,m.root.position.y=this.curbstep(p.x,p.z)}const h=new Set(e.enemies.map(p=>p.id));for(const[p,m]of this.enemyGroups)h.has(p)||(this.removeTransientGroup(m.root),this.enemyGroups.delete(p));const d=new Set(e.pickups.map(p=>p.id));for(const[p,m]of this.pickupGroups)d.has(p)||(this.removeTransientGroup(m),this.pickupGroups.delete(p));for(const p of e.pickups){let m=this.pickupGroups.get(p.id);m||(m=this.buildPickup(p),this.pickupGroups.set(p.id,m),this.scene.add(m)),m.visible=!p.collected,m.visible&&(m.position.set(p.x,.48+Math.sin(this.clock*3+p.x)*.06,p.z),m.rotation.y=this.clock*.75)}const f=e.mount,u=this.lastMountPosition,g=u?Math.hypot(f.x-u.x,f.z-u.z):0;g>.002&&g<2&&(this.mountHeading=Math.atan2(-(f.x-u.x),-(f.z-u.z))),go(this.mountRig,{x:f.x,z:f.z,heading:this.mountHeading,speed:t>0&&g<2?g/t:0,attack:n.mounted?n.recoil:0,hurt:0,alive:!0,time:e.time,dt:t}),this.mountRig.root.visible=!n.mounted&&!this.level.safe&&f.x>=this.level.bounds.minX&&f.x<=this.level.bounds.maxX&&f.z>=this.level.bounds.minZ&&f.z<=this.level.bounds.maxZ,this.mountRig.root.position.y=this.curbstep(f.x,f.z),this.lastMountPosition={x:f.x,z:f.z},this.powerLamp&&this.powerLamp.material.color.setHex(e.powered?7602073:16737843);for(const p of e.destructibles){const m=this.propGroups.get(p.id),_=this.propRuins.get(p.id);m&&(m.visible=!p.destroyed),_&&(_.visible=p.destroyed)}for(let p=0;p<this.lamps.length;p++)this.lamps[p].visible=Math.sin(this.clock*3+p*1.73)>0||p%4!==1||Math.sin(this.clock*31+p)>-.7;for(let p=0;p<this.hazmat.length;p++)this.hazmat[p].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+p),.19);let x=0;for(const p of e.effects){const m=1-p.life/p.maxLife,_=p.kind==="explosion",M=p.kind==="shard";if(p.kind==="muzzle"&&Math.hypot(p.x-n.x,p.z-n.z)<.9)continue;_&&i.quality==="high"&&(1-m)*32>this.blastLight.intensity&&(this.blastLight.visible=!0,this.blastLight.intensity=(1-m)*32,this.blastLight.position.set(p.x,p.y,p.z));const v=_?24:M?1:p.kind==="muzzle"?5:7;for(let y=0;y<v&&x<192;y++){const T=p.kind==="blood"?14173245:p.kind==="plasma"?8060848:p.kind==="arc"?12229631:p.kind==="rail"?9886207:p.kind==="smoke"?7829101:M?12048861:_?y%3===0?16773040:y%3===1?16752951:13978149:16765568,A=_?.55:p.kind==="smoke"?.4:p.kind==="plasma"||p.kind==="arc"||p.kind==="rail"?.04:M?.4:.22,S=(ht(y+p.x)-.5)*m*A*5+(p.dx??0)*m*.6,w=(ht(y+p.z+13)-.5)*m*A*5+(p.dz??0)*m*.6;this.dummy.position.set(p.x+S,M?Math.max(.04,p.y-m*m*4):p.y+(ht(y+p.z)-.2)*m*A*3+(_?m*.4:0),p.z+w),this.dummy.quaternion.copy(this.camera.quaternion),this.dummy.rotateZ(M?m*7+y*.9:(ht(y+p.x)*2-1)*.8);const C=_?(3.8+m*5)*(1-m*.76):p.kind==="smoke"?1.5+m*5:Math.max(.25,1-m);this.dummy.scale.set(C,M?C*.45:C,1),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(x,this.dummy.matrix),this.effectMesh.setColorAt(x,new We(T)),this.effectTiles.setX(x,_?2:p.kind==="smoke"?3:p.kind==="plasma"||p.kind==="arc"||p.kind==="rail"?4:p.kind==="blood"?5:M?6:p.kind==="muzzle"?1:0),this.effectAlpha.setX(x,p.kind==="smoke"?Math.max(0,1-m):Math.min(1,(1-m)*3)),x++}}this.effectMesh.count=x,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectTiles.needsUpdate=this.effectAlpha.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.atmosphere.update(e,this.camera,this.clock,i),this.campaignDressing?.update?.(t,e),this.renderer.render(this.scene,this.camera)}curbstep(e,t){return(this.level.chapterId??0)!==0?0:t>-20&&t<4&&Math.abs(e)>10.5&&Math.abs(e)<13.1?.12:0}sectorVisible(e,t){if((this.level.chapterId??0)!==0)return!0;const i=t.player.z,n=a=>(t.doors.find(r=>r.id===a)?.open??1)<=.001;return!(i>4.35&&e<3.7&&n("office")||i>-19.6&&e<-20.4&&n("facility")||i>-31.8&&e<-32.6&&n("laboratory")||i<-20.4&&e>-19.6&&n("facility")||i<-32.6&&e>-31.8&&n("laboratory"))}dispose(){this.campaignDressing?.dispose(),this.atmosphere.dispose();const e=new Set,t=new Set(this.mats.values()),i=new Set;this.scene.traverse(n=>{if(n instanceof xt){e.add(n.geometry);for(const a of Array.isArray(n.material)?n.material:[n.material])t.add(a)}});for(const n of e)n.dispose();for(const n of t){const a=n.map;a&&i.add(a),n.dispose()}for(const n of i)n.dispose();this.renderer.dispose()}}const g1={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class x1{constructor(e,t){this.canvas=e,this.onPause=t,document.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(i.code)){i.preventDefault(),i.stopImmediatePropagation(),i.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(i.code)&&i.preventDefault(),this.keys.add(i.code),i.repeat||(i.code==="Space"&&(this.pending.jump=!0),i.code==="KeyE"&&(this.pending.interact=!0),i.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-6]$/.test(i.code)&&(this.pending.weaponSlot=Number(i.code.slice(-1))))}}),document.addEventListener("keyup",i=>this.keys.delete(i.code)),document.addEventListener("mousemove",i=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=i.movementX,this.mouseY+=i.movementY)}),this.canvas.addEventListener("pointerdown",i=>{!this.enabled||i.pointerType==="touch"||i.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",i=>{i.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===this.canvas,n=this.wasLocked&&!i;this.wasLocked=i,i||(this.clear(),n&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",i=>i.preventDefault()),this.canvas.addEventListener("wheel",i=>{this.enabled&&(i.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(i.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const e=(...i)=>i.some(n=>this.keys.has(n)),t=this.enabled?{forward:Math.max(-1,Math.min(1,Number(e("KeyW","ArrowUp"))-Number(e("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(e("KeyD"))-Number(e("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(e("ArrowLeft"))-Number(e("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:e("ShiftLeft","ShiftRight")||this.touchSprint,crouch:e("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:e("KeyQ")}:{...g1};return this.mouseX=0,this.mouseY=0,this.pending={},t}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const e=this.canvas.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const e=document.querySelector("#touch-controls");if(!e)return;e.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const t=e.querySelector(".touch-stick");this.stick=t.querySelector("i"),t.addEventListener("pointerdown",r=>{!this.enabled||this.stickPointer>=0||(r.preventDefault(),this.stickPointer=r.pointerId,this.stickOrigin={x:r.clientX,y:r.clientY},t.setPointerCapture(r.pointerId))}),t.addEventListener("pointermove",r=>{if(!this.enabled||r.pointerId!==this.stickPointer)return;const o=r.clientX-this.stickOrigin.x,l=r.clientY-this.stickOrigin.y,c=Math.hypot(o,l),h=38,d=c>h?h/c:1;this.touchMove={x:o*d/h,y:l*d/h},this.stick&&(this.stick.style.transform=`translate(${o*d}px,${l*d}px)`)});const i=r=>{r.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i);const n=e.querySelector(".touch-look");n.addEventListener("pointerdown",r=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=r.pointerId,this.lastLook={x:r.clientX,y:r.clientY},n.setPointerCapture(r.pointerId))}),n.addEventListener("pointermove",r=>{!this.enabled||r.pointerId!==this.lookPointer||(this.mouseX+=(r.clientX-this.lastLook.x)*1.6,this.mouseY+=(r.clientY-this.lastLook.y)*1.6,this.lastLook={x:r.clientX,y:r.clientY})});const a=r=>{r.pointerId===this.lookPointer&&(this.lookPointer=-1)};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),e.querySelectorAll("button").forEach(r=>{r.addEventListener("pointerdown",l=>{if(this.enabled)switch(l.preventDefault(),r.setPointerCapture(l.pointerId),r.classList.add("held"),r.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const o=()=>{r.classList.remove("held"),r.dataset.action==="fire"&&(this.touchFire=!1),r.dataset.action==="sprint"&&(this.touchSprint=!1)};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o)})}}const lc="fossil-noir-3d-settings",Zn={sensitivity:1,resolution:"640",quality:"high",volume:.7,musicVolume:.75,effectsVolume:.95,difficulty:"normal"},bs={easy:{name:"ROOKIE",description:"Less enemy health and damage. Slower attacks. Generous ammunition."},normal:{name:"DETECTIVE",description:"Balanced enemies, combat speed and ammunition. The intended first run."},hard:{name:"NIGHTMARE",description:"Tougher, faster enemies. Heavy incoming damage. Fewer rounds."},nightmare:{name:"EXTINCTION",description:"Maximum enemy aggression, health and damage. Scarce ammunition. Every cache counts."}},qt=s=>s.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);class v1{constructor(e){this.callbacks=e,this.settings=this.loadSettings(),this.overlay.addEventListener("click",i=>{const n=i.target.closest("button[data-action]");if(!(!n||n.disabled))switch(n.dataset.action){case"start":e.start(!1);break;case"continue":e.start(!0);break;case"next":e.next();break;case"launch-chapter":e.chapter(this.selectedChapter);break;case"select-chapter":this.selectedChapter=Number(n.dataset.chapter),this.render();break;case"resume":e.resume();break;case"retry":e.restart(!1);break;case"checkpoint":e.restart(!0);break;case"menu":e.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"chapters":this.panel="chapters",this.render();break;case"files":this.panel="files",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",i=>{const n=i.target;if(!n.dataset.setting)return;const a=n.dataset.setting,r=["sensitivity","volume","musicVolume","effectsVolume"].includes(a)?Number(n.value):n.value;this.settings=this.validateSettings({...this.settings,[a]:r});try{localStorage.setItem(lc,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings});const o={sensitivity:"sensitivity-value",volume:"volume-value",musicVolume:"music-volume-value",effectsVolume:"effects-volume-value"};if(a in o){const l=a,c=this.overlay.querySelector(`#${o[l]}`);c&&(c.textContent=a==="sensitivity"?`${this.settings.sensitivity.toFixed(1)}×`:`${Math.round(this.settings[l]*100)}%`)}if(a==="difficulty"){const l=this.overlay.querySelector("#difficulty-description");l&&(l.textContent=bs[this.settings.difficulty].description)}}),document.addEventListener("keydown",i=>{this.screen!=="playing"&&i.code==="Escape"&&(i.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&e.resume())});const t=document.createElement("button");t.className="desktop-pause",t.setAttribute("aria-label","Pause mission"),t.textContent="Ⅱ",t.addEventListener("click",()=>e.pause()),document.querySelector("#game").appendChild(t),this.show("menu")}settings;screen="menu";panel="main";state;level=wt[0];selectedChapter=0;savedChapter=null;knownEvidence=[];overlay=document.querySelector("#menu-overlay");cached=new Map;setLevel(e){this.level=e,this.selectedChapter=e.chapterId??0,this.state=void 0,this.write("chapter-number",String(this.selectedChapter+1).padStart(2,"0")),this.write("chapter-title",e.title??"THE NEON DISTRICT"),this.write("chapter-subtitle",e.subtitle??"VESPER CITY / 2091"),this.screen!=="playing"&&this.render()}setSave(e){this.savedChapter=e,this.screen==="menu"&&this.render()}setEvidence(e){this.knownEvidence=e.filter(t=>Object.hasOwn(_n,t))}show(e){this.screen=e,this.panel="main",document.body.classList.toggle("playing",e==="playing"),document.body.dataset.screen=e,this.overlay.hidden=e==="playing",e!=="playing"&&this.render()}update(e){this.state=e;const t=e.player;this.write("hud-health",String(Math.max(0,Math.ceil(t.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(t.armor))).padStart(3,"0")),this.write("hud-ammo",t.reload>0?"LOAD":String(t.ammo[t.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(t.reserve[t.weapon]).padStart(3,"0")}`),this.write("hud-weapon",t.owned.includes(t.weapon)?ut[t.weapon].name.toUpperCase():"MECHANICAL ARM"),this.write("hud-kills",`${e.kills} / ${e.enemies.length}`),this.write("hud-mode",t.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(e.slow*100)}%`),this.write("hud-difficulty",bs[e.difficulty].name);const i=e.enemies.filter(x=>x.boss&&x.alive&&(x.alert||Math.hypot(x.x-t.x,x.z-t.z)<14)).sort((x,p)=>Math.hypot(x.x-t.x,x.z-t.z)-Math.hypot(p.x-t.x,p.z-t.z))[0],n=document.querySelector("#boss-status");n.hidden=!i,i&&(this.write("boss-name",(i.label??i.boss??"PRIORITY HOSTILE").toUpperCase()),this.write("boss-health",`${Math.max(0,Math.ceil(i.health))} / ${i.maxHealth}`),document.querySelector("#boss-bar").style.width=`${Math.max(0,Math.min(100,i.health/i.maxHealth*100))}%`);const a=document.querySelector("#hud-key");a.classList.toggle("acquired",t.keycard),a.querySelector("b").textContent=t.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,t.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,t.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",t.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,t.hurt*.7)));const o=(this.level.requiredKills??[]).filter(x=>!e.enemies.some(p=>p.id===x&&!p.alive)).length,l=Math.max(0,(this.level.requiredEvidence??0)-t.evidence),c=this.level.pickups.some(x=>x.kind==="keycard"),h=t.owned.length?this.level.safe?this.level.objective??"FOLLOW THE CASE FILE":c&&!t.keycard?"FIND THE SECURITY KEYCARD":e.powered?o?`NEUTRALIZE ${o} PRIORITY HOSTILE${o===1?"":"S"}`:l?`RECOVER ${l} EVIDENCE FILE${l===1?"":"S"}`:`REACH ${this.level.exitLabel??"THE EXIT"}`:this.level.objective??"RESTORE EXIT POWER":"FIND A WEAPON · WALK OVER THE PICKUP";this.write("objective",h.toUpperCase()),this.write("message",e.messageTime>0?e.message:"");let d="";const f=e.doors.find(x=>Math.hypot(x.x-t.x,x.z-t.z)<3.2),u=e.pickups.filter(x=>!x.collected&&Math.hypot(x.x-t.x,x.z-t.z)<2.6).sort((x,p)=>Math.hypot(x.x-t.x,x.z-t.z)-Math.hypot(p.x-t.x,p.z-t.z))[0];if(t.mounted)d="E · DISMOUNT STRIDER";else if(Math.hypot(e.mount.x-t.x,e.mount.z-t.z)<2.8)d="E · RIDE STRIDER";else if(!e.powered&&Math.hypot(this.level.switch.x-t.x,this.level.switch.z-t.z)<2.5)d="E · ACTIVATE POWER / TRANSMITTER";else if(Math.hypot(this.level.exit.x-t.x,this.level.exit.z-t.z)<3)d=e.powered?o?"PRIORITY HOSTILES REMAIN":l?"RECOVER THE REQUIRED EVIDENCE":`ENTER ${this.level.exitLabel??"THE EXIT"}`:"ACTIVATE THE SWITCH FIRST";else if(f)d=f.locked&&!t.keycard?"SECURITY KEYCARD REQUIRED":`E · ${f.target>0?"CLOSE":"OPEN"} ${f.label.toUpperCase()}`;else if(u){const x=bi.includes(u.kind)?u.kind:void 0;d=`WALK OVER · ${(u.label??(x?ut[x].name:u.kind==="ammo"&&u.ammoFor?`${ut[u.ammoFor].name} ammunition`:u.kind)).toUpperCase()}${u.kind==="ammo"&&u.amount?` +${u.amount}`:""}`}this.write("interaction",d),document.querySelector("#crosshair").classList.toggle("firing",t.recoil>.1);const g=bi.map((x,p)=>{const m=t.owned.includes(x),_=x==="machinegun"?"HMG":x==="revolver"?"REV":x==="shotgun"?"SHOT":x==="plasma"?"PLAS":x==="railgun"?"RAIL":"ARC";return`<span class="arsenal-slot ${m?"owned":"locked"} ${m&&t.weapon===x?"selected":""}" title="${qt(ut[x].name)}${m?` — ${t.ammo[x]} loaded, ${t.reserve[x]} reserve`:" — find this weapon"}"><b>${p+1}</b> ${_}<small>${m?`${t.ammo[x]}/${t.reserve[x]}`:"—"}</small></span>`}).join("");this.cached.get("arsenal")!==g&&(this.cached.set("arsenal",g),document.querySelector("#arsenal").innerHTML=g)}setError(e){const t=document.querySelector("#error");t.textContent=e,t.hidden=!e}write(e,t){if(this.cached.get(e)===t)return;this.cached.set(e,t);const i=document.getElementById(e);i&&(i.textContent=t)}hasCheckpoint(){return!!this.state?.checkpoint}difficultyControl(){return`<div class="difficulty-choice"><label for="difficulty">DIFFICULTY FOR NEW RUN</label><select id="difficulty" data-setting="difficulty">${Object.entries(bs).map(([e,t])=>`<option value="${e}" ${this.settings.difficulty===e?"selected":""}>${t.name}</option>`).join("")}</select><p id="difficulty-description">${bs[this.settings.difficulty].description}</p></div>`}briefing(e){const t=e.chapterId??0;return`<aside class="case-file"><div class="file-tab">CASE FILE <b>${String(t+1).padStart(2,"0")} / ${wt.length}</b></div><h2>${qt(e.title??"THE NEON DISTRICT")}</h2><div class="file-subject">${qt(e.subtitle??"VESPER CITY / 2091")}</div><p>${qt(e.intro??"")}</p><div class="case-route"><span>OBJECTIVE / ${qt(e.objective??"REACH THE EXIT")}</span><span>EXIT / ${qt(e.exitLabel??"EXTRACTION")}</span><span>ARSENAL CARRIES INTO THE NEXT CHAPTER</span></div><div class="file-stamp">${e.safe?"SAFEHOUSE":"STATUS: OPEN"}</div></aside>`}render(){const e=this.hasCheckpoint(),t=this.panel==="main",i=this.screen==="menu",n=this.level.chapterId??0;let a="",r="";if(this.panel==="controls")r="FIELD MANUAL",a='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–6 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture the mouse. Esc releases it. Walk over new weapons, ammunition, armor, medical kits and case files to collect them. R reloads from your reserve. Each weapon has its own ammunition; caches can be collected before finding the weapon. Defeated enemies leave supplies on the ground.</p><p class="field-note">Shoot fuel canisters for explosions; glass shatters. The Rail Rifle delivers precise heavy hits; the Arc Disruptor chains energy between nearby enemies. Explore secret doors for rare weapons. Hold Q for bullet time. Pause to read recovered case files.</p><p class="field-note">TOUCH: left joystick moves; drag the right side to aim. Hold FIRE or RUN. E operates doors, switches and the strider. GUN cycles owned weapons.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")r="SYSTEM SETUP",a=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">MASTER VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="music-volume">MUSIC VOLUME <output id="music-volume-value">${Math.round(this.settings.musicVolume*100)}%</output></label><input id="music-volume" data-setting="musicVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.musicVolume}"><label for="effects-volume">EFFECTS VOLUME <output id="effects-volume-value">${Math.round(this.settings.effectsVolume*100)}%</output></label><input id="effects-volume" data-setting="effectsVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.effectsVolume}"></div>${this.difficultyControl()}<p class="field-note">Difficulty changes apply to a new campaign or chapter selection. The current run and its checkpoints keep their original difficulty. Other settings apply immediately and are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(this.panel==="chapters")r="SELECT A CHAPTER",a=`<div class="chapter-grid">${wt.map((o,l)=>`<button data-action="select-chapter" data-chapter="${l}" class="chapter-card ${l===this.selectedChapter?"selected":""}" aria-pressed="${l===this.selectedChapter}"><b>${String(l+1).padStart(2,"0")}</b><span>${qt(o.title??"")}<small>${qt(o.subtitle??"")}</small></span></button>`).join("")}</div><div class="chapter-briefing"><p>${qt(wt[this.selectedChapter].intro??"")}</p><small>${qt(wt[this.selectedChapter].objective??"")}</small></div>${this.difficultyControl()}<button data-action="launch-chapter" class="menu-button primary">▶ START CHAPTER ${String(this.selectedChapter+1).padStart(2,"0")}</button><p class="field-note">Chapter selection gives a suitable starting arsenal. Playing the campaign carries your collected weapons and ammunition forward.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(this.panel==="files"){r="RECOVERED CASE FILES";const o=[...new Set([...this.knownEvidence,...this.state?.pickups.filter(l=>l.collected&&l.evidenceId).map(l=>l.evidenceId)??[]])];a=`<div class="evidence-files">${o.length?o.map(l=>_n[l]?`<article><h3>${qt(_n[l].title)}</h3><small>${qt(_n[l].source)}</small><p>${qt(_n[l].body)}</p></article>`:"").join(""):'<p class="field-note">No files recovered yet. Look for glowing evidence terminals and walk over them.</p>'}</div><button data-action="back" class="menu-button">← BACK</button>`}else if(i)a=`<button data-action="start" class="menu-button primary"><span>▶</span> START CAMPAIGN</button><button data-action="continue" class="menu-button" ${this.savedChapter===null?"disabled":""}>CONTINUE ${this.savedChapter===null?"CAMPAIGN":`CHAPTER ${String(this.savedChapter+1).padStart(2,"0")}`}</button><button data-action="chapters" class="menu-button">CHAPTER SELECT · ${wt.length} CHAPTERS</button>${this.difficultyControl()}<button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")r="MISSION PAUSED",a=`<p class="pause-quote">CHAPTER ${String(n+1).padStart(2,"0")} · ${qt(this.level.title??"")}<br>${this.state?bs[this.state.difficulty].name:""} · Your run keeps its chosen difficulty.</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${e?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART CHAPTER</button><button data-action="files" class="menu-button">READ CASE FILES</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")r="CASE CLOSED",a=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${e?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${e?"":"primary"}">RESTART CHAPTER</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){const o=n===wt.length-1;r=o?"EVIDENCE BROADCAST":"CHAPTER COMPLETE";const l=Math.floor(this.state?.time??0);a=`<p class="pause-quote">${qt(this.level.completionMessage??"The trail continues.")}</p>${o?'<p class="ending-copy">CASE 091 CLOSED. The Lazarus evidence is on every screen in Vesper. Mara is alive. Axiom can no longer bury the truth.</p>':`<p class="next-chapter">NEXT / ${String(n+2).padStart(2,"0")} · ${qt(wt[n+1].title??"")}</p>`}<div class="results"><div class="result-line"><span>CHAPTER TIME</span><b>${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div>${o?'<button data-action="start" class="menu-button primary">▶ NEW CAMPAIGN</button>':'<button data-action="next" class="menu-button primary">▶ NEXT CHAPTER</button>'}<button data-action="files" class="menu-button">READ CASE FILES</button><button data-action="retry" class="menu-button">REPLAY CHAPTER</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / CASE 091</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${i&&t?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${i&&t?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${r?`<h2 class="panel-title">${r}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${a}</div></section>${i&&t?this.briefing(wt[this.savedChapter??0]):""}</div><div class="menu-bottomline"><span>RETRO FPS / ${wt.length} CHAPTER CAMPAIGN</span><span>${i?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const e=localStorage.getItem(lc);return this.validateSettings(e?JSON.parse(e):{})}catch{return{...Zn}}}validateSettings(e){const t=e&&typeof e=="object"?e:{},i=(n,a,r,o)=>typeof n=="number"&&Number.isFinite(n)?Math.min(r,Math.max(a,n)):o;return{sensitivity:i(t.sensitivity,.3,2.5,Zn.sensitivity),resolution:t.resolution==="320"||t.resolution==="640"?t.resolution:Zn.resolution,quality:t.quality==="low"?"low":"high",volume:i(t.volume,0,1,Zn.volume),musicVolume:i(t.musicVolume,0,1,Zn.musicVolume),effectsVolume:i(t.effectsVolume,0,1,Zn.effectsVolume),difficulty:t.difficulty==="easy"||t.difficulty==="hard"||t.difficulty==="nightmare"?t.difficulty:"normal"}}}const Ye=["#0e1114","#24282c","#3d454a","#59636a","#7c8b90","#a6b5b7","#c7d1c9","#e2e4d5"],Ft=["#0c1419","#202d37","#3a4a55","#566a73","#768b91","#9eafb0","#c2cfc8","#e2e8d9"],cc={revolver:[159,128],shotgun:[158,130],plasma:[158,128],machinegun:[158,127],railgun:[158,111],arc:[158,116]},_1=["fist",...bi];class M1{constructor(e){this.canvas=e,e.width=640,e.height=400,e.style.imageRendering="pixelated";const t=e.getContext("2d");if(!t)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=t,t.imageSmoothingEnabled=!1,t.setTransform(2,0,0,2,0,0),this.cacheMechanicalParts();for(const i of _1){const n=document.createElement("canvas");n.width=320,n.height=200;const a=n.getContext("2d");a.imageSmoothingEnabled=!1,a.setTransform(1,0,0,1,0,0),this.paintWeapon(a,i),this.crispSprite(a,n.width,n.height),this.sprites.set(i,n)}this.cacheFiringEffects(),this.cacheEnergyPulses()}ctx;sprites=new Map;parts=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;effectTime=0;movementAmount=0;shotSerial=0;flares=new Map;smokeSprites=[];energySmoke=new Map;energyPulses=new Map;smoke=[];casings=[];reloadCasesEjected=!1;lastSimulationTime=0;render(e,t){const i=e.player,n=this.ctx;t=Math.max(0,Math.min(t,.06)),this.effectTime+=t,n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,320,200);const a=i.owned.includes(i.weapon)?i.weapon:"fist";if(e.time<this.lastSimulationTime&&(this.initialized=!1,this.flash=0,this.shotAge=1,this.lastRecoil=0,this.lastReload=0,this.switchTime=0,this.movementAmount=0,this.travel=0,this.effectTime=0,this.smoke.length=0,this.casings.length=0),this.lastSimulationTime=e.time,this.initialized||(this.current=this.next=a,this.lastX=i.x,this.lastZ=i.z,this.initialized=!0),a!==this.next&&(this.next=a,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-t),this.switchTime<.16&&(this.current=this.next)),i.recoil>.65&&i.recoil>this.lastRecoil+.04&&a!=="fist"&&!i.mounted&&(this.flash=a==="arc"?.15:a==="railgun"?.12:a==="plasma"?.11:a==="shotgun"?.09:.075,this.shotAge=0,this.shotSerial++,this.spawnShotEffects(a)),this.lastRecoil=i.recoil,this.flash=Math.max(0,this.flash-t),this.shotAge+=t,i.reload>this.lastReload+.1&&(this.reloadDuration=i.reload,this.reloadCasesEjected=!1),this.lastReload=i.reload,t>0){const p=Math.hypot(i.x-this.lastX,i.z-this.lastZ)/t;this.lastX=i.x,this.lastZ=i.z,this.travel+=Math.min(p,15)*t*(i.mounted?1.9:2.5),this.movementAmount=Math.min(p/4,1),this.updateParticles(t)}const r=this.movementAmount,o=Math.sin(this.travel)*2.2*r,l=Math.abs(Math.cos(this.travel))*2.5*r,c=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,h=i.reload>0?1-i.reload/this.reloadDuration:0,d=i.reload>0?Math.sin(h*Math.PI):0,f=Math.min(1,i.recoil),u=this.shotAge<(this.current==="railgun"||this.current==="arc"?.3:.26)?Math.exp(-this.shotAge*(this.current==="shotgun"?11:this.current==="railgun"?13:this.current==="arc"?17:19)):0,g=this.current==="shotgun"?11:this.current==="railgun"?8:this.current==="arc"?5.5:this.current==="revolver"?6:this.current==="machinegun"?3.5:4,x=this.current==="shotgun"?.12:this.current==="railgun"?.055:this.current==="arc"?-.045:this.current==="revolver"?.105:this.current==="machinegun"?.033:.035;if(this.current==="revolver"&&i.reload>0&&h>.22&&!this.reloadCasesEjected){this.reloadCasesEjected=!0;for(let p=0;p<6;p++)this.spawnCasing("revolver",168-p*.7,167+p*.3,28+p*7,-27-p*3,p)}if(i.mounted){this.paintMount(n,this.effectTime,r,f),this.line(n,[173,159],[251,188],"#5b4f35",2),this.arm(n,247,186);return}if(n.save(),n.translate(Math.round(o+u*(this.current==="machinegun"?Math.sin(this.shotSerial*2.4)*1.5:1)),Math.round(l+c+u*g+d*23)),u>0&&i.reload<=0&&(n.translate(220,180),n.rotate(u*x),n.translate(-220,-180)),i.reload>0&&(n.translate(209,176),n.rotate(d*(this.current==="revolver"?.3:this.current==="arc"?-.2:this.current==="railgun"?-.1:-.14)),n.translate(-209,-176)),n.drawImage(this.sprites.get(this.current),0,0,320,200),this.paintAmmoGauge(n,this.current,i.ammo[this.current]||0),this.paintMechanism(n,this.current,i.reload>0),this.current==="plasma"&&this.paintPlasmaPulse(n,this.effectTime,i.reload>0),(this.current==="railgun"||this.current==="arc")&&this.paintEnergyPulse(n,this.current,this.effectTime,i.reload>0),this.paintSmoke(n),i.reload>0&&this.paintReload(n,this.current,h),this.flash>0&&i.reload<=0&&this.paintFlash(n,this.current),this.current==="shotgun"&&i.reload<=0){const p=this.shotAge<.48&&this.shotAge>.12;this.paintPumpHand(n,p?Math.sin((this.shotAge-.12)/.36*Math.PI)*8:0)}n.restore(),this.paintCasings(n)}poly(e,t,i,n="#080c10"){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(const[a,r]of t.slice(1))e.lineTo(a,r);e.closePath(),e.fillStyle=i,e.fill(),n&&(e.strokeStyle=n,e.lineWidth=1,e.stroke())}line(e,t,i,n,a=1){e.beginPath(),e.moveTo(...t),e.lineTo(...i),e.strokeStyle=n,e.lineWidth=a,e.stroke()}bolt(e,t,i){e.fillStyle="#10161c",e.fillRect(t-2,i-2,5,5),e.fillStyle="#9faeae",e.fillRect(t-1,i-1,3,3),e.fillStyle="#344650",e.fillRect(t-1,i,3,1),e.fillStyle="#e2e5d5",e.fillRect(t-1,i-1,2,.5),e.fillStyle="#131f26",e.fillRect(t-.5,i-.5,.5,2),e.fillStyle="#52636a",e.fillRect(t+1,i+.5,.5,1.5)}screw(e,t,i,n=!1){e.fillStyle="#091317",e.fillRect(t-1,i-1,2.5,2.5),e.fillStyle=n?"#a58d59":"#91a19e",e.fillRect(t-.5,i-.5,1.5,1.5),e.fillStyle=n?"#f0d399":"#dbe0d3",e.fillRect(t-.5,i-.5,1,.5),e.fillStyle="#24333b",e.fillRect(t,i-.5,.5,1.5)}inset(e,t,i="#27353b"){this.poly(e,t,i,"#091318");for(let n=0;n<t.length-1;n++)n%2===0&&this.line(e,t[n],t[n+1],"#b0beb063",.5)}machining(e,t,i,n=90){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const f of t.slice(1))e.lineTo(...f);e.closePath(),e.clip();const a=t.map(f=>f[0]),r=t.map(f=>f[1]),o=Math.min(...a),l=Math.min(...r),c=Math.max(...a)-o,h=Math.max(...r)-l;let d=i;for(let f=0;f<n;f++){d=d*1664525+1013904223>>>0;const u=o+d%Math.max(1,c*2|0)*.5;d=d*1664525+1013904223>>>0;const g=l+d%Math.max(1,h*2|0)*.5;e.fillStyle=f%4===0?"#d3dcc241":f%4===1?"#030a136a":"#a5bab225",e.fillRect(u,g,f%9===0?2.5:.5,.5),f%17===0&&(e.fillStyle="#101b2570",e.fillRect(u,g+.5,1.5,.5))}e.restore()}etch(e,t,i,n,a="#b3bdab",r=0){const o={A:["010","101","111","101","101"],B:["110","101","110","101","110"],C:["111","100","100","100","111"],D:["110","101","101","101","110"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],H:["101","101","111","101","101"],I:["111","010","010","010","111"],K:["101","101","110","101","101"],L:["100","100","100","100","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["110","101","110","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"],V:["101","101","101","101","010"],X:["101","101","010","101","101"],Y:["101","101","010","010","010"],0:["111","101","101","101","111"],1:["010","110","010","010","111"],2:["110","001","010","100","111"],3:["110","001","010","001","110"],4:["101","101","111","001","001"],5:["111","100","110","001","110"],6:["011","100","111","101","111"],7:["111","001","010","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","110"],"-":["000","000","111","000","000"],".":["000","000","000","000","010"]};e.save(),e.translate(i,n),e.rotate(r),e.fillStyle=a;for(let l=0;l<t.length;l++){const c=o[t[l]];c&&c.forEach((h,d)=>{for(let f=0;f<3;f++)h[f]==="1"&&e.fillRect(l*2+f*.5,d*.5,.5,.5)})}e.restore()}wire(e,t,i,n=1){for(let a=0;a<t.length-1;a++)this.line(e,t[a],t[a+1],"#071219",n+1.5);for(let a=0;a<t.length-1;a++)this.line(e,t[a],t[a+1],i,n);for(let a=0;a<t.length-1;a++){const[r,o]=t[a];this.line(e,[r,o-.5],[t[a+1][0],t[a+1][1]-.5],"#ffe1b03a",.5)}}gripTexture(e,t){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const a of t.slice(1))e.lineTo(...a);e.closePath(),e.clip();const i=t.map(a=>a[0]),n=t.map(a=>a[1]);for(let a=Math.min(...n);a<Math.max(...n);a+=1.5)for(let r=Math.min(...i);r<Math.max(...i);r+=1.5)e.fillStyle="#090e1380",e.fillRect(r+Math.round(a)%2*.5,a,.5,.5),e.fillStyle="#c2ae8b45",e.fillRect(r+.5,a+.5,.5,.5);e.restore()}scratches(e,t,i,n=45){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const f of t.slice(1))e.lineTo(...f);e.closePath(),e.clip();const a=t.map(f=>f[0]),r=t.map(f=>f[1]),o=Math.min(...a),l=Math.min(...r),c=Math.max(...a)-o,h=Math.max(...r)-l;let d=i;for(let f=0;f<n;f++){d=d*1664525+1013904223>>>0;const u=o+d%Math.max(1,c|0);d=d*1664525+1013904223>>>0;const g=l+d%Math.max(1,h|0);e.fillStyle=f%3===0?"#a2afa42b":"#040b104a",e.fillRect(u,g,f%5===0?3:1,1)}e.restore()}arm(e,t=247,i=186){e.drawImage(this.parts.get("mount-arm"),Math.round(t-247),Math.round(i-186),320,200)}hand(e,t,i){e.drawImage(this.parts.get("hand"),Math.round(t-20),Math.round(i-16),56,52)}pixelFace(e,t,i,n,a=.5,r=.5){const o=t.map(g=>g[0]),l=t.map(g=>g[1]),c=Math.floor(Math.min(...o)),h=Math.ceil(Math.max(...o)),d=Math.floor(Math.min(...l)),f=Math.ceil(Math.max(...l));e.save(),e.beginPath(),e.moveTo(...t[0]);for(const g of t.slice(1))e.lineTo(...g);e.closePath(),e.clip();const u=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let g=d;g<f;g++)for(let x=c;x<h;x++){const p=(x*73856093^g*19349663^n)>>>0,m=(g-d)/Math.max(1,f-d),_=Math.sin((x+n%41)*.14)*Math.cos((g+n%29)*.12),M=Math.max(0,Math.sin((x-c)/Math.max(1,h-c)*6+n%4))*(1-m)*.07,v=a*.83+r*(.36-m*.78)+_*.035+M+(p%23-11)*7e-4,y=Math.max(0,Math.min(i.length-1.01,v*(i.length-1)));let T=Math.round(y);const A=Math.floor(y),S=y-A;S>.34&&S<.66&&_<.1&&(T=A+(S>u[(x&3)+((g&3)<<2)]/16?1:0)),p%137===0&&(T=Math.min(i.length-1,T+2)),p%149===0&&(T=Math.max(0,T-2)),e.fillStyle=i[T],e.fillRect(x,g,1,1)}e.restore()}crispSprite(e,t,i){const n=e.getImageData(0,0,t,i);for(let a=0;a<n.data.length;a+=4)n.data[a+3]=n.data[a+3]<160?0:255;e.putImageData(n,0,0)}metalBolt(e,t,i){e.fillStyle="#151b1b",e.fillRect(t-2,i-2,5,5),e.fillStyle="#9b9e89",e.fillRect(t-1,i-1,3,3),e.fillStyle="#d1d2b4",e.fillRect(t-1,i-1,2,1),e.fillStyle="#414b48",e.fillRect(t,i,2,2)}paintArmSprite(e,t,i){const n=["#080d10","#11191c","#1e282a","#303a37","#465048"];this.pixelFace(e,[[t+30,i+7],[t+52,i+5],[286,180],[319,186],[330,217],[265,217],[t+27,i+37]],n,294,.34,.22),this.pixelFace(e,[[t+14,i+11],[t+33,i+5],[276,179],[294,200],[273,211],[t+8,i+32]],Ft,642,.37,.4),this.pixelFace(e,[[t+19,i+12],[t+33,i+8],[273,179],[276,186],[t+18,i+28]],Ye,892,.7,.4),this.pixelFace(e,[[t+15,i+28],[275,196],[289,194],[287,204],[273,209],[t+14,i+35]],Ye,34,.28,.3),this.pixelFace(e,[[t+29,i+17],[t+33,i+12],[276,185],[276,192],[270,195]],Ye,507,.73,.65),this.pixelFace(e,[[t+26,i+27],[t+30,i+22],[273,195],[273,201],[269,203]],Ye,508,.45,.5);for(let a=0;a<4;a++){const r=248+a*5,o=185+a*2;e.fillStyle="#152228",e.fillRect(r,o,4,6),e.fillStyle="#77958c",e.fillRect(r,o,3,1),e.fillStyle="#435954",e.fillRect(r,o+4,3,1)}this.metalBolt(e,277,194),this.metalBolt(e,265,188),e.fillStyle="#1d3029",e.fillRect(259,190,10,4);for(let a=0;a<3;a++)e.fillStyle="#9acc83",e.fillRect(260+a*3,191,2,1);e.fillStyle="#4b5044",e.fillRect(298,194,4,1),e.fillRect(304,197,5,1),e.fillStyle="#111c1f",e.fillRect(289,198,4,2),e.fillRect(307,203,5,2)}cacheMechanicalParts(){const e=document.createElement("canvas");e.width=56,e.height=52;const t=e.getContext("2d");this.pixelFace(t,[[4,13],[12,4],[31,4],[47,18],[47,37],[34,47],[15,44],[4,31]],Ft,544,.37,.42),this.pixelFace(t,[[8,14],[14,7],[29,7],[38,15],[34,28],[14,25]],Ye,122,.64,.47);for(let d=0;d<4;d++){const f=8+d*8,u=20+d*2;this.pixelFace(t,[[f,u],[f+4,u-3],[f+10,u],[f+11,u+9],[f+7,u+14],[f+1,u+12],[f-1,u+5]],Ye,719+d,.59,.57),t.fillStyle="#152225",t.fillRect(f+2,u+6,7,2),t.fillStyle="#a6b199",t.fillRect(f+2,u+5,5,1),t.fillStyle="#405047",t.fillRect(f+2,u+10,5,1),t.fillStyle="#c9c6a4",t.fillRect(f+3,u,3,1),t.fillStyle="#263c3d",t.fillRect(f+7,u+3,2,2)}this.pixelFace(t,[[37,12],[43,11],[51,20],[47,30],[39,27],[35,18]],Ft,905,.67,.5),this.metalBolt(t,37,37),this.metalBolt(t,15,14),t.fillStyle="#c09957",t.fillRect(41,33,2,5),t.fillStyle="#e4c883",t.fillRect(41,33,1,2),this.crispSprite(t,56,52),this.parts.set("hand",e);const i=document.createElement("canvas");i.width=320,i.height=200;const n=i.getContext("2d");this.pixelFace(n,[[122,207],[137,189],[155,166],[171,159],[189,169],[193,181],[172,190],[149,212]],Ft,902,.5,.5);for(let d=0;d<4;d++){const f=164+d*5,u=162+d*3;this.pixelFace(n,[[f,u],[f+7,u],[f+12,u+5],[f+10,u+13],[f+4,u+15],[f-2,u+8]],Ye,177+d,.63,.65),n.fillStyle="#1a2526",n.fillRect(f+2,u+7,7,2),n.fillStyle="#acb59c",n.fillRect(f+2,u+6,6,1)}this.metalBolt(n,151,187),this.crispSprite(n,320,200),this.parts.set("pump",i);const a=document.createElement("canvas");a.width=320,a.height=200;const r=a.getContext("2d");this.paintArmSprite(r,247,186),this.hand(r,247,186),this.crispSprite(r,320,200),this.parts.set("mount-arm",a);const o=document.createElement("canvas");o.width=o.height=36;const l=o.getContext("2d");this.pixelFace(l,[[4,10],[14,3],[27,6],[34,14],[32,27],[21,33],[8,29],[2,19]],Ye,309,.59,.85),this.pixelFace(l,[[4,10],[14,3],[27,6],[32,11],[22,13],[11,9]],Ye,310,.83,.26),this.crispSprite(l,36,36),this.parts.set("reload-cylinder",o);for(const d of["railgun","arc"]){const f=document.createElement("canvas");f.width=64,f.height=72;const u=f.getContext("2d");if(d==="railgun"){this.pixelFace(u,[[17,7],[31,3],[48,18],[49,48],[36,63],[22,49]],Ye,6239,.42,.68),this.pixelFace(u,[[18,8],[31,4],[46,17],[34,24],[23,17]],Ye,6240,.74,.28),this.pixelFace(u,[[22,18],[34,23],[34,54],[25,45]],Ft,6241,.3,.45);for(let g=0;g<5;g++)u.fillStyle="#172737",u.fillRect(26,23+g*5,15,3),u.fillStyle="#429cbb",u.fillRect(26,23+g*5,12,1),u.fillStyle="#93dde2",u.fillRect(26,23+g*5,4,1);u.fillStyle="#c29a51",u.fillRect(30,7,3,5),u.fillRect(35,10,3,5),u.fillRect(40,13,3,5),this.etch(u,"R-05",34,31,"#d3c695",1.1),this.metalBolt(u,41,45)}else{const g=["#10101c","#242337","#3a3b59","#595771","#838296","#b2b3c5","#d5dce0"];this.pixelFace(u,[[11,9],[30,3],[49,18],[53,46],[38,61],[18,54],[9,35]],g,7331,.4,.55),this.pixelFace(u,[[12,10],[30,4],[46,17],[29,23],[13,17]],Ye,7332,.73,.34);for(let x=0;x<3;x++){const p=16+x*9,m=17+x*4;this.pixelFace(u,[[p,m],[p+7,m+2],[p+8,m+25],[p+3,m+30],[p-2,m+23]],g,7340+x,.66,.6),u.fillStyle="#754dbc",u.fillRect(p+1,m+5,4,18),u.fillStyle="#b394f2",u.fillRect(p+1,m+5,2,18),u.fillStyle="#d3cbff",u.fillRect(p+1,m+5,1,7),u.fillStyle="#28394b",u.fillRect(p-1,m+12,7,2),u.fillRect(p-1,m+22,7,2)}this.metalBolt(u,39,51),this.etch(u,"A-12",20,47,"#b6c6d6",.22)}this.crispSprite(u,64,72),this.parts.set(`${d}-cell`,f)}const c=document.createElement("canvas");c.width=26,c.height=26;const h=c.getContext("2d");this.pixelFace(h,[[2,9],[10,4],[22,15],[19,23],[8,16]],Ye,6342,.73,.5),h.fillStyle="#a6d5d8",h.fillRect(7,8,3,1),h.fillStyle="#203949",h.fillRect(9,11,3,2),this.crispSprite(h,26,26),this.parts.set("rail-slide",c)}paintWeapon(e,t){if(t==="fist"){this.paintArmSprite(e,200,174),this.hand(e,200,165);return}const i=t==="revolver"?[224,179]:t==="shotgun"?[243,189]:t==="plasma"?[236,185]:t==="arc"?[250,191]:t==="railgun"?[246,188]:[252,187];if(this.paintArmSprite(e,i[0],i[1]),t==="revolver"){this.pixelFace(e,[[151,128],[157,122],[167,123],[190,143],[184,157],[174,153]],Ye,729,.56,.7),this.pixelFace(e,[[155,124],[161,121],[168,124],[190,143],[184,147],[173,140]],Ye,623,.7,.32),this.pixelFace(e,[[153,133],[159,135],[182,158],[185,167],[177,163],[164,148]],Ye,122,.22,.34),this.pixelFace(e,[[170,148],[177,138],[192,139],[214,153],[220,167],[212,179],[197,181],[180,174],[170,159]],Ye,211,.47,.76),this.pixelFace(e,[[176,140],[186,137],[195,141],[214,155],[205,159],[181,148]],Ye,599,.72,.2);for(let n=0;n<5;n++){const a=177+n*7,r=148+n*2;this.pixelFace(e,[[a,r],[a+4,r-1],[a+8,r+3],[a+8,r+16],[a+4,r+20],[a+1,r+16]],Ye,778+n,.48,.75),e.fillStyle="#17221f",e.fillRect(a+6,r+5,2,10),e.fillStyle="#d3c9a0",e.fillRect(a+2,r+1,2,1)}this.pixelFace(e,[[207,155],[223,159],[238,180],[237,198],[224,203],[207,184]],Ye,975,.3,.55),this.pixelFace(e,[[219,177],[230,179],[244,200],[232,209],[221,200],[215,184]],["#171715","#2c261e","#433825","#635337","#89734b","#b39560"],186,.56,.57),this.pixelFace(e,[[151,126],[154,122],[162,121],[168,125],[166,130],[158,130],[152,128]],Ye,64,.68,.38),e.fillStyle="#a8b2aa",e.fillRect(154,123,5,1),e.fillStyle="#3a474b",e.fillRect(155,129,7,1),e.fillStyle="#364340",e.fillRect(157,118,5,4),e.fillStyle="#b4d397",e.fillRect(158,118,3,1),e.fillStyle="#1a2726",e.fillRect(217,150,5,5),e.fillStyle="#adb29a",e.fillRect(217,150,4,1),this.metalBolt(e,220,168),this.metalBolt(e,220,190),this.hand(e,228,184)}else if(t==="shotgun"){this.pixelFace(e,[[146,132],[153,121],[168,122],[210,162],[202,179],[183,165],[160,146]],Ft,677,.41,.73),this.pixelFace(e,[[151,124],[160,121],[169,126],[211,163],[203,169],[176,142]],Ye,79,.66,.37),this.pixelFace(e,[[151,136],[158,137],[198,175],[197,184],[183,174]],Ft,833,.22,.4),this.pixelFace(e,[[179,145],[192,146],[222,174],[213,187],[200,186],[173,161]],["#1b1c17","#343025","#514731","#736345","#998259","#baa06c"],277,.55,.66);for(let n=0;n<7;n++){const a=178+n*4,r=148+n*3;e.fillStyle="#302c20",e.fillRect(a,r,3,10),e.fillStyle="#a48b5d",e.fillRect(a+1,r,1,8)}this.pixelFace(e,[[194,152],[213,151],[240,173],[265,201],[240,215],[216,188],[198,176]],Ft,988,.38,.65),this.pixelFace(e,[[198,153],[211,151],[241,175],[239,185],[222,176]],Ye,566,.65,.35),this.pixelFace(e,[[210,172],[224,173],[249,196],[245,214],[230,212],[211,191]],Ft,975,.22,.5),this.pixelFace(e,[[147,129],[151,123],[160,122],[167,126],[168,130],[160,132],[152,131]],Ft,226,.64,.42),e.fillStyle="#bac5b7",e.fillRect(151,124,5,1),e.fillRect(160,126,4,1),e.fillStyle="#39494e",e.fillRect(152,131,9,1),e.fillStyle="#25363c",e.fillRect(157,119,3,4),e.fillStyle="#c1c9af",e.fillRect(157,119,2,1);for(let n=0;n<8;n++)e.fillStyle="#1b2829",e.fillRect(168+n*4,134+n*3,3,4);this.poly(e,[[214,162],[220,162],[232,174],[229,179],[218,170]],"#101c20",""),e.fillStyle="#a2aea0",e.fillRect(217,163,3,1),this.metalBolt(e,225,170),this.metalBolt(e,241,187),this.hand(e,242,190)}else if(t==="plasma"){this.pixelFace(e,[[142,128],[151,116],[170,119],[191,140],[186,155],[167,157],[148,140]],Ft,922,.43,.6),this.pixelFace(e,[[148,119],[154,114],[168,119],[191,140],[181,145],[168,136]],Ye,110,.65,.37),this.pixelFace(e,[[163,139],[188,135],[219,150],[254,185],[251,210],[229,215],[196,184],[173,165]],Ft,436,.36,.72),this.pixelFace(e,[[177,139],[190,136],[217,151],[225,163],[213,167],[190,155]],Ye,788,.6,.43),this.pixelFace(e,[[210,157],[227,154],[253,179],[261,201],[247,213],[229,198],[217,183]],Ft,651,.27,.72),this.poly(e,[[174,151],[185,144],[219,175],[212,189],[197,180]],"#13251e","");for(let n=0;n<7;n++){const a=178+n*4,r=148+n*4;this.pixelFace(e,[[a,r],[a+3,r-1],[a+10,r+5],[a+7,r+11],[a+2,r+9],[a-3,r+4]],["#2e2619","#514224","#7c6336","#a68b4d","#d3b974","#f2d895"],202+n,.57,.56),e.fillStyle="#58b875",e.fillRect(a+2,r+4,3,2),e.fillStyle="#b8e699",e.fillRect(a+2,r+4,1,1)}this.poly(e,[[144,123],[151,116],[163,117],[173,123],[175,134],[166,140],[153,140],[143,133]],"#485f57",""),this.poly(e,[[149,126],[154,121],[163,121],[170,127],[166,134],[156,135],[149,131]],"#142b24",""),e.fillStyle="#429b65",e.fillRect(153,124,11,8),e.fillStyle="#95e3a4",e.fillRect(156,125,6,4),e.fillStyle="#d6f3b8",e.fillRect(158,126,3,2);for(const[n,a]of[[145,126],[152,117],[168,121],[169,133]])this.metalBolt(e,n,a);this.poly(e,[[217,157],[224,157],[235,169],[233,179],[225,177]],"#16382b",""),e.fillStyle="#76d58e",e.fillRect(219,161,4,2),e.fillRect(225,168,3,3),this.metalBolt(e,242,181),this.metalBolt(e,226,194),this.hand(e,240,190)}else if(t==="railgun")this.paintRailRifle(e);else if(t==="arc")this.paintArcDisruptor(e);else if(t==="machinegun"){this.pixelFace(e,[[142,128],[147,116],[163,112],[177,122],[194,145],[189,161],[171,159],[151,143]],Ft,833,.35,.76),this.pixelFace(e,[[149,116],[162,112],[174,121],[195,145],[185,149],[162,129]],Ye,945,.6,.42),this.pixelFace(e,[[162,138],[173,132],[211,165],[208,178],[194,176]],Ye,588,.4,.78),this.pixelFace(e,[[179,148],[197,138],[222,148],[252,177],[278,202],[258,218],[233,207],[193,181],[181,165]],Ft,175,.33,.6),this.pixelFace(e,[[187,147],[198,142],[224,153],[246,171],[244,180],[222,171]],Ye,875,.59,.38),this.pixelFace(e,[[192,168],[218,170],[245,192],[250,214],[234,215],[202,188]],Ft,664,.2,.47),this.pixelFace(e,[[140,124],[145,115],[158,112],[170,117],[178,128],[174,138],[160,146],[146,139]],Ft,78,.31,.5);for(const[n,a]of[[147,120],[157,117],[150,131],[162,129]])this.pixelFace(e,[[n,a],[n+3,a-3],[n+8,a+2],[n+22,a+21],[n+21,a+26],[n+16,a+22]],Ye,902+n,.43,.46),e.fillStyle="#bac5b5",e.fillRect(n+1,a-1,3,1),e.fillStyle="#31464b",e.fillRect(n+3,a+4,2,2);e.fillStyle="#25353c",e.fillRect(157,109,4,6),e.fillStyle="#c4ccaf",e.fillRect(158,109,2,1);for(let n=0;n<7;n++){const a=190+n*5,r=161+n*3;e.fillStyle="#1c2828",e.fillRect(a,r,4,8),e.fillStyle="#91a18e",e.fillRect(a,r-1,4,1)}this.poly(e,[[218,151],[227,151],[237,161],[234,169],[223,164]],"#182b2b",""),this.pixelFace(e,[[223,144],[231,146],[237,154],[237,159],[231,157],[226,152]],Ye,387,.58,.46),this.pixelFace(e,[[238,169],[259,169],[294,184],[292,207],[255,194],[238,181]],Ye,382,.24,.25);for(let n=0;n<9;n++){const a=243+n*6,r=172+n*2;this.pixelFace(e,[[a,r],[a+3,r-1],[a+6,r+4],[a+6,r+14],[a+3,r+17],[a,r+14]],["#423719","#68552a","#967a3a","#bfa05a","#dfc481","#f3de9c"],376+n,.61,.65),e.fillStyle="#534e34",e.fillRect(a,r+10,6,2),e.fillStyle="#baaa70",e.fillRect(a,r+13,4,1)}this.metalBolt(e,240,178),this.metalBolt(e,248,200),this.hand(e,253,193)}}paintRailRifle(e){this.pixelFace(e,[[149,112],[155,102],[166,106],[217,157],[214,170],[198,160],[172,134]],Ft,6101,.34,.65),this.pixelFace(e,[[153,105],[159,102],[167,108],[217,157],[211,163],[189,141]],Ye,6102,.72,.35),this.pixelFace(e,[[155,115],[162,116],[213,167],[211,180],[199,173],[181,149]],Ye,6103,.28,.48),this.pixelFace(e,[[152,108],[156,105],[213,158],[210,163],[201,157]],Ye,6104,.58,.48),this.pixelFace(e,[[163,109],[167,109],[221,161],[219,168],[213,164]],Ye,6105,.64,.52),this.poly(e,[[158,111],[161,110],[215,162],[212,165]],"#16323b",""),this.line(e,[160,112],[211,161],"#58a8bb",1),this.line(e,[160,113],[210,162],"#c0d5d4",.5);for(let t=0;t<7;t++){const i=163+t*6,n=119+t*6;e.fillStyle="#1c2930",e.fillRect(i,n,4,6),e.fillStyle="#778a8a",e.fillRect(i,n,4,1),e.fillStyle="#b89b52",e.fillRect(i+1,n+3,3,1)}this.pixelFace(e,[[190,151],[208,145],[225,155],[258,187],[262,211],[235,216],[208,188],[190,168]],Ft,6110,.32,.65),this.pixelFace(e,[[199,150],[209,148],[225,159],[245,178],[234,183],[215,168]],Ye,6111,.67,.38),this.pixelFace(e,[[218,174],[235,177],[253,194],[252,211],[233,211],[218,192]],Ye,6112,.3,.61),this.poly(e,[[183,150],[195,144],[218,164],[215,179],[202,179],[185,162]],"#142c37","");for(let t=0;t<5;t++){const i=188+t*5,n=149+t*4;this.pixelFace(e,[[i,n],[i+6,n],[i+12,n+7],[i+9,n+15],[i+2,n+12],[i-2,n+4]],["#13202c","#234353","#356274","#5396ac","#86c8d2","#c4e6df"],6130+t,.62,.63),e.fillStyle="#1a2c34",e.fillRect(i+1,n+5,9,2),e.fillStyle="#a2cfcb",e.fillRect(i+2,n+1,3,1)}e.fillStyle="#213437",e.fillRect(156,99,4,6),e.fillStyle="#d4b66a",e.fillRect(157,99,2,1),this.poly(e,[[216,151],[223,153],[232,161],[229,165],[221,161]],"#17272d",""),this.line(e,[218,152],[222,153],"#abb9aa",1),e.fillStyle="#bd9b4f",e.fillRect(235,175,8,2),e.fillStyle="#26343a",e.fillRect(239,175,2,2),this.etch(e,"R-05",224,183,"#a7b8b5",.72),this.etch(e,"HV",214,162,"#e1c17c",.72),this.metalBolt(e,213,181),this.metalBolt(e,242,196),this.metalBolt(e,195,155),this.hand(e,247,190)}paintArcDisruptor(e){const t=["#10131d","#252735","#3d4055","#596179","#8292a0","#afbcca","#d2dad6"];this.pixelFace(e,[[138,121],[142,107],[151,108],[176,141],[174,157],[156,146]],t,7201,.37,.68),this.pixelFace(e,[[143,108],[148,105],[155,112],[175,140],[169,143]],Ye,7202,.73,.43),this.pixelFace(e,[[169,116],[170,104],[180,108],[206,139],[203,155],[188,147]],t,7203,.41,.64),this.pixelFace(e,[[174,106],[179,107],[205,138],[198,143],[188,130]],Ye,7204,.78,.4);for(const[i,n]of[[145,112],[175,111]])e.fillStyle="#4c4298",e.fillRect(i,n,6,10),e.fillStyle="#ac9be9",e.fillRect(i+1,n,3,7),e.fillStyle="#d1d9ee",e.fillRect(i+1,n,2,2),e.fillStyle="#253645",e.fillRect(i-1,n+5,8,2),this.metalBolt(e,i+3,n+12);this.pixelFace(e,[[163,143],[180,131],[201,136],[234,163],[269,194],[270,215],[243,218],[206,192],[169,162]],t,7210,.37,.64),this.pixelFace(e,[[175,136],[184,131],[203,140],[229,164],[222,173],[200,155]],Ye,7211,.68,.32),this.pixelFace(e,[[223,161],[239,166],[264,187],[270,207],[257,217],[237,201],[222,183]],t,7212,.29,.65),this.poly(e,[[173,153],[191,145],[221,168],[222,186],[207,194],[180,174]],"#182330","");for(let i=0;i<3;i++){const n=179+i*11,a=152+i*8;this.pixelFace(e,[[n,a],[n+8,a-1],[n+17,a+8],[n+13,a+18],[n+5,a+17],[n-2,a+7]],t,7220+i,.58,.63),e.fillStyle="#7064b1",e.fillRect(n+3,a+5,5,9),e.fillStyle="#b6a3ea",e.fillRect(n+3,a+5,2,9),e.fillStyle="#ded6fa",e.fillRect(n+3,a+5,1,4),e.fillStyle="#263440",e.fillRect(n+1,a+10,10,2)}this.pixelFace(e,[[224,171],[233,173],[251,193],[244,202],[230,188]],Ye,7230,.55,.45),this.wire(e,[[177,167],[173,176],[185,186],[204,190],[225,184]],"#667395",2),this.poly(e,[[227,162],[237,164],[247,176],[241,182],[231,175]],"#1b2836",""),e.fillStyle="#798ac1",e.fillRect(230,166,4,2),e.fillStyle="#b5c7e5",e.fillRect(230,166,2,1),this.etch(e,"A-12",232,182,"#b9bfcf",.82),this.etch(e,"HV",199,143,"#dfb568",.72);for(const[i,n]of[[171,151],[211,148],[219,192],[252,199]])this.metalBolt(e,i,n);this.hand(e,251,193)}paintAmmoGauge(e,t,i){if(t==="fist")return;if(t==="revolver"){for(let l=0;l<6;l++)e.fillStyle=l<i?"#dfc181":"#243c46",e.fillRect(181+l*2,144+l*.3,1,.5);return}if(t==="railgun"||t==="arc"){const l=t==="railgun",c=l?224:232,h=l?171:167;e.save(),e.translate(c,h),e.rotate(l?.76:.83),e.fillStyle="#0b1520",e.fillRect(-1,-1,12,6),e.fillStyle="#718a9b",e.fillRect(-1,-1,12,1),this.etch(e,String(Math.min(99,i)).padStart(2,"0"),.5,.1,i>0?l?"#a6e3e7":"#c9b9fa":"#e0795b");const d=l?5:12;for(let f=0;f<(l?5:6);f++)e.fillStyle=i>(l?f:f*2)?l?"#65bdcf":"#a395eb":"#283544",e.fillRect(f*1.5,3.5,1,1);e.fillStyle=i>=d?"#c6d3b5":"#617981",e.fillRect(8.5,.5,1,2),e.restore();return}const n=t==="plasma",a=t==="machinegun",r=n?216:a?220:204,o=n?159:a?173:164;e.save(),e.translate(r,o),e.rotate(n?.72:a?.7:.78),e.fillStyle="#050f14",e.fillRect(-.5,-.5,8,4),e.fillStyle="#4c7070",e.fillRect(-.5,-.5,8,.5),this.etch(e,String(Math.min(99,i)).padStart(2,"0"),.5,.25,i>0?n?"#94ffc5":"#d6d1a1":"#ff7851"),e.fillStyle=i>0?"#53b693":"#933b28",e.fillRect(5.5,.5,.5,2),e.restore()}paintPumpHand(e,t){e.drawImage(this.parts.get("pump"),Math.round(t*.8),Math.round(t),320,200)}paintPlasmaPulse(e,t,i){if(i)return;e.fillStyle=Math.sin(t*9)>0?"#c4ffe1":"#49dc95",e.fillRect(215,158,4,2),e.fillRect(221,165,2,2),e.fillRect(158,126,3,3);const n=1-Math.min(1,this.shotAge/.32);for(let a=0;a<5;a++){const r=n>.05||Math.sin(t*7-a*.9)>.4;this.line(e,[185+a*4,149+a*4],[181+a*4,153+a*4],r?"#b0ffbd":"#2fbc79",1),n>.2&&(e.fillStyle="#d6ffd2",e.fillRect(182+a*4,151+a*4,.5,1),a%2===this.shotSerial%2&&this.line(e,[184+a*4,151+a*4],[188+a*4,151+a*4],"#68eaa7",.5))}}cacheEnergyPulses(){for(const e of["railgun","arc"]){const t=[];for(let i=0;i<2;i++)for(let n=0;n<4;n++){const a=document.createElement("canvas");a.width=320,a.height=200;const r=a.getContext("2d");if(e==="railgun"){for(let o=0;o<5;o++){const l=191+o*5,c=153+o*4,h=i?o<=n:o===n;r.fillStyle=h?"#b9eef0":"#4c90a5",r.fillRect(l,c,3,2),h&&(r.fillStyle="#e0f3e4",r.fillRect(l,c,1,1))}r.fillStyle=i?"#d6f3e3":"#729cad",r.fillRect(158,108,2,2),i&&this.line(r,[161,114],[183,137],"#9adbe2",1)}else{for(let l=0;l<3;l++){const c=182+l*11,h=157+l*8;r.fillStyle=i?"#e2d4ff":(n+l)%3===0?"#c7b4f4":"#8c78c8",r.fillRect(c,h,2,4)}const o=[[149,114],[153,115-n%2],[156,112+n],[160,118-n],[163,113+n],[174,113]];for(let l=0;l<o.length-1;l++)this.line(r,o[l],o[l+1],i?"#ded3ff":"#968ad6",i?1.5:1);r.fillStyle=i?"#e9e8ff":"#7fbece",r.fillRect(146,112,2,2),r.fillRect(176,111,2,2)}this.crispSprite(r,320,200),t.push(a)}this.energyPulses.set(e,t)}}paintEnergyPulse(e,t,i,n){if(n)return;const a=this.energyPulses.get(t);if(!a)return;const r=this.shotAge<.32,o=r?Math.min(3,Math.floor(this.shotAge/.08)):Math.floor(i*(t==="arc"?7:4))%4;e.drawImage(a[(r?4:0)+o],0,0,320,200)}paintReload(e,t,i){const n=Math.sin(i*Math.PI);if(t==="revolver"){const a=185-Math.round(n*12),r=160+Math.round(n*10);e.drawImage(this.parts.get("reload-cylinder"),a-18,r-17,36,36);for(let o=0;o<6;o++){const l=o*Math.PI/3+i*5,c=Math.round(a+Math.cos(l)*9),h=Math.round(r+Math.sin(l)*9);e.fillStyle=i>.45?"#c2a254":"#0b151a",e.fillRect(c-2,h-2,4,4),e.fillStyle=i>.45?"#fae5a2":"#5f777e",e.fillRect(c-1.5,h-2,2,.5),i>.45&&(e.fillStyle="#615137",e.fillRect(c-.5,h-.5,1,1))}this.screw(e,a,r,!0),i>.35&&i<.7&&this.hand(e,147,190)}else if(t==="shotgun")this.hand(e,175+Math.round(n*9),190),e.fillStyle="#932621",e.fillRect(179,176,5,10),e.fillStyle="#d0aa62",e.fillRect(179,175,5,2),e.fillStyle="#edc99a",e.fillRect(179.5,175,4,.5),e.fillStyle="#ef6352",e.fillRect(179.5,177,.5,8),e.fillStyle="#541c21",e.fillRect(183,178,.5,7),this.etch(e,"12",180,179,"#f3d4b2");else if(t==="plasma"){const r=176+Math.round(n*21);this.poly(e,[[188,r],[199,r-4],[211,r+11],[201,r+19],[192,r+9]],"#294447"),this.line(e,[193,r+3],[202,r+14],"#72ffb0",4);for(let o=0;o<5;o++)this.line(e,[194+o*2,r+3+o*2],[191+o*2,r+5+o*2],"#173c3a",.5);this.line(e,[190,r+.5],[198,r-2.5],"#c4d9be",.5),this.screw(e,201,r+5,!0),this.hand(e,168,r+15)}else if(t==="machinegun")this.hand(e,259-Math.round(n*16),178+Math.round(n*11)),e.fillStyle="#c7ac68",e.fillRect(242,167,14,3);else if(t==="railgun"){const r=135+Math.round(n*4);e.drawImage(this.parts.get("railgun-cell"),176,r,38,43),this.hand(e,150,r+29),i>.72&&e.drawImage(this.parts.get("rail-slide"),212+Math.round(Math.sin((i-.72)/.28*Math.PI)*5),150,26,26)}else if(t==="arc"){const a=182-Math.round(n*9),r=132+Math.round(n*4);e.save(),e.translate(a+20,r+20),e.rotate(-n*.23),e.drawImage(this.parts.get("arc-cell"),-20,-20,42,47),e.restore(),this.hand(e,a-18,r+34)}}cacheFiringEffects(){for(const e of bi){const t=[];for(let i=0;i<2;i++)for(let n=0;n<4;n++){const a=document.createElement("canvas");a.width=128,a.height=128;const r=a.getContext("2d");if(r.setTransform(2,0,0,2,0,0),e==="railgun"||e==="arc"){const f=e==="railgun",u=32,g=42,x=i?1:-1;if(f){this.poly(r,[[u-4,g+1],[u-7,g-4],[u-4,g-9],[u-3,g-20],[u+x*2,g-31+n*3],[u+4,g-18],[u+6,g-9],[u+8,g-4],[u+4,g+2]],"#285d86",""),this.poly(r,[[u-2,g],[u-3,g-9],[u+x,g-25+n*2],[u+3,g-12],[u+4,g-3],[u+2,g+2]],"#73bedb",""),r.fillStyle="#cbecea",r.fillRect(u-1,g-13,3,13),r.fillStyle="#edddb1",r.fillRect(u,g-5,2,5);for(let p=0;p<8;p++)r.fillStyle=p%3?"#6ebed5":"#d2edeb",r.fillRect(u-13+(p*7+i*3)%25,g-4-(p*5+n*2)%27,1,1)}else{for(let p=0;p<5;p++){const m=-24+p*12,_=g-14-(p*7+i*3+n*2)%17,M=[[u,g],[u+m*.4,g-8],[u+m*.3+x*3,g-15],[u+m,_],[u+m-x*3,_-5]];for(let v=0;v<M.length-1;v++)this.line(r,M[v],M[v+1],"#58498a",3);for(let v=0;v<M.length-1;v++)this.line(r,M[v],M[v+1],p%2?"#b5a0f0":"#8abcdc",1.5);for(let v=0;v<M.length-1;v++)this.line(r,M[v],M[v+1],"#dfdaf7",.5)}r.fillStyle="#c4b8f4",r.fillRect(u-3,g-4,7,6),r.fillStyle="#e4e8f4",r.fillRect(u-1,g-2,3,3);for(let p=0;p<6;p++)r.fillStyle=p%2?"#cab6f4":"#8abcdc",r.fillRect(u-23+(p*11+i*5)%43,g-10-p*7%22,1,1)}this.crispSprite(r,128,128),t.push(a);continue}const o=e==="plasma",l=(e==="shotgun"?26:e==="machinegun"?20:o?22:17)*(1-n*.12),c=32,h=42,d=i?1:-1;for(let f=0;f<7;f++){const u=-Math.PI+f/6*Math.PI,g=l*(.62+(f*5+i*3)%7*.065),x=Math.round(Math.cos(u)*g),p=Math.round(Math.sin(u)*g);this.poly(r,[[c-3,h-1],[c+x*.5-2,h+p*.5-2],[c+x-1,h+p],[c+x+3,h+p+2],[c+x*.5+3,h+p*.5+3],[c+3,h+1]],o?"#126948":n>1?"#873925":"#a84925","")}if(this.poly(r,[[c-4,h],[c-15,h-5],[c-10,h-8],[c-12,h-15],[c-6,h-12],[c+d*4,h-l],[c+7,h-12],[c+13,h-15],[c+11,h-7],[c+20,h-6],[c+12,h-1],[c+4,h+4]],o?"#27c881":"#e6742b",""),this.poly(r,[[c-4,h],[c-8,h-6],[c-3,h-8],[c+d*3,h-16],[c+6,h-8],[c+12,h-6],[c+5,h+3]],o?"#8affa9":"#ffd466",""),r.fillStyle=o?"#e6ffdd":"#fff5bc",r.fillRect(c-2,h-5,6,7),r.fillRect(c,h-9,3,5),r.fillRect(c-4,h-3,2,3),o){const f=[[[c-4,h-9],[c-14,h-17],[c-11,h-21],[c-19,h-25]],[[c+4,h-7],[c+16,h-14],[c+12,h-18],[c+20,h-24]],[[c,h-12],[c+d*5,h-24],[c-d*1,h-27]]];for(const u of f)for(let g=0;g<u.length-1;g++)this.line(r,u[g],u[g+1],n%2?"#72efb3":"#bef6bd",.5);r.fillStyle="#72e5ac";for(let u=0;u<7;u++)r.fillRect(c-23+(u*11+i*5)%43,h-10-u*7%22,.5,.5)}else for(let f=0;f<15;f++)r.fillStyle=f%3?"#da8c43":"#ffd996",r.fillRect(c-25+(f*13+i*7)%49,h-4-f*11%31,f%4===0?1.5:.5,.5);t.push(a)}this.flares.set(e,t)}for(let e=0;e<4;e++){const t=document.createElement("canvas");t.width=48,t.height=48;const i=t.getContext("2d");i.setTransform(2,0,0,2,0,0);const n=["#495457","#66716d","#829084"];for(let a=0;a<22;a++){const r=3+(a*7+e*3)%15,o=3+(a*11+e*5)%15;i.fillStyle=n[a%3],i.fillRect(r,o,2+a%3,2+(a+e)%3)}this.smokeSprites.push(t)}for(const e of["railgun","arc"]){const t=[];for(let i=0;i<4;i++){const n=document.createElement("canvas");n.width=48,n.height=48;const a=n.getContext("2d"),r=e==="railgun"?["#35515e","#5b8090","#96b8bd"]:["#393456","#65618a","#a6a5c0"];for(let o=0;o<13;o++){const l=8+(o*7+i*3)%26,c=4+(o*11+i*5)%32;a.fillStyle=r[o%3],a.fillRect(l,c,3+o%3,2+o%2)}t.push(n)}this.energySmoke.set(e,t)}}spawnShotEffects(e){const t=cc[e];if(!t)return;const i=e==="railgun"||e==="arc",n=e==="shotgun"?4:e==="plasma"||e==="railgun"?2:3;for(let a=0;a<n;a++)this.smoke.push({age:0,life:(i?.25:.35)+a*.08,x:t[0],y:t[1]-3,vx:-10+(this.shotSerial*7+a*13)%21,vy:-22-a*8,size:e==="shotgun"?7+a:i?4+a:5+a,variant:(this.shotSerial+a)%4,green:e==="plasma",tint:e==="railgun"?"railgun":e==="arc"?"arc":void 0});this.smoke.length>28&&this.smoke.splice(0,this.smoke.length-28),e==="shotgun"&&this.spawnCasing(e,217,174,88,-73,this.shotSerial),e==="machinegun"&&this.spawnCasing(e,223,165,94,-62,this.shotSerial)}spawnCasing(e,t,i,n,a,r){this.casings.push({age:0,weapon:e,x:t,y:i,vx:n,vy:a,spin:r}),this.casings.length>14&&this.casings.splice(0,this.casings.length-14)}updateParticles(e){for(let t=this.smoke.length-1;t>=0;t--){const i=this.smoke[t];i.age+=e,i.age>i.life&&this.smoke.splice(t,1)}for(let t=this.casings.length-1;t>=0;t--){const i=this.casings[t];i.age+=e,i.age>.55&&this.casings.splice(t,1)}}paintSmoke(e){for(const t of this.smoke){const i=t.age/t.life,n=Math.round(t.size*(.65+i*.75)),a=Math.round(t.x+t.vx*t.age),r=Math.round(t.y+t.vy*t.age);e.save(),e.globalAlpha=(1-i)*(t.green?.22:t.tint?.28:.36);const o=t.tint?this.energySmoke.get(t.tint)?.[t.variant]:void 0;e.drawImage(o??this.smokeSprites[t.variant],a-n/2,r-n/2,n,n),e.restore()}}paintCasings(e){for(const t of this.casings){const i=t.weapon==="shotgun"?.14:t.weapon==="machinegun"?.035:0;if(t.age<i)continue;const n=t.age-i;e.save(),e.translate(Math.round(t.x+t.vx*n),Math.round(t.y+t.vy*n+175*n*n)),e.rotate((Math.floor(n*18)+t.spin)%4*Math.PI/2);const a=t.weapon==="shotgun";e.fillStyle="#111711",e.fillRect(-1.5,-1.5,a?8:5,3.5),e.fillStyle=a?"#a6312c":"#b2964f",e.fillRect(-1,-1,a?6:4,2.5),e.fillStyle=a?"#ee7861":"#e6cb78",e.fillRect(-1,-1,a?5:3,.5),e.fillStyle="#e7ce82",e.fillRect(a?4:2,-1,1.5,2.5),e.fillStyle="#675435",e.fillRect(a?5:3,-.5,.5,1.5),e.restore()}}paintMechanism(e,t,i){if(i)return;const n=Math.max(0,1-this.shotAge/.16);if(t==="revolver"&&n>0){const r=Math.round(n*4);this.poly(e,[[216,155],[217,149+r],[221,148+r],[225,152+r],[225,157]],"#37474b"),this.line(e,[217,150+r],[221,149+r],"#c8d1b8",.5),e.fillStyle="#141f27",e.fillRect(217,156,6,1.5)}else if(t==="machinegun"){const r=Math.round(n*3);e.fillStyle="#07151b",e.fillRect(218,151,12,8),this.poly(e,[[218+r,153+r],[222+r,152+r],[227+r,157+r],[225+r,160+r],[220+r,156+r]],"#7f9592"),this.line(e,[219+r,153+r],[222+r,152+r],"#dbe1bd",.5),e.fillStyle=n>.4?"#d8c074":"#364640",e.fillRect(221,154,1,2)}else if(t==="railgun"){const r=Math.round(Math.max(0,1-this.shotAge/.3)*4);e.drawImage(this.parts.get("rail-slide"),209+r,146+r,26,26)}else if(t==="arc"&&n>0){const r=Math.round(n*3);e.fillStyle="#526375",e.fillRect(143,118+r,9,2),e.fillRect(173,117+r,9,2),e.fillStyle="#a3b4c4",e.fillRect(143,118+r,8,1),e.fillRect(173,117+r,8,1)}if(this.flash<=0)return;const a=t==="plasma"?"#a5ffd2":t==="railgun"?"#a9dbe9":t==="arc"?"#c7b7f2":"#ffe0a2";e.save(),e.globalAlpha=.55,this.line(e,[165,131],[179,142],a,1),this.line(e,[182,146],[193,148],a,.5),this.line(e,[220,176],[229,183],a,.5),e.fillStyle=a,e.fillRect(223,182,2,.5),e.fillRect(231,186,1,.5),e.restore()}paintFlash(e,t){const i=this.flares.get(t),n=cc[t];if(!i||!n)return;const a=Math.min(3,Math.floor(this.shotAge*45));e.drawImage(i[this.shotSerial%2*4+a],n[0]-32,n[1]-42,64,64)}paintMount(e,t,i,n=0){const a=Math.round(Math.sin(t*9)*i*2-n*11);e.save(),e.translate(0,a),this.poly(e,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(e,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(e,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),this.machining(e,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);for(let r=0;r<7;r++){const o=147+r*3,l=172-r*2.1;this.poly(e,[[o,l],[o+2.5,l-1],[o+3,l+1],[o+1.5,l+2]],r%2?"#637558":"#283f34",""),this.line(e,[o,l],[o+2,l-.5],"#a0a580",.5)}if(this.line(e,[162,145],[173,145],"#8a966d",.5),this.line(e,[170,149.5],[177,151],"#1d342e",.5),e.fillStyle="#132922",e.fillRect(177,150,1.5,1),this.line(e,[157,149],[163,153],"#192c26",.5),this.line(e,[156.5,149.5],[162.5,153.5],"#91a371",.5),n>.25){this.poly(e,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let r=0;r<5;r++)e.fillStyle="#b9bf8c",e.fillRect(163+r*3,155,2,3)}else this.line(e,[157,155],[178,155],"#111c19",2);e.fillStyle="#dfb961",e.fillRect(171,146,4,2),e.fillStyle="#081410",e.fillRect(174,146,1,2),e.fillStyle="#ffdc89",e.fillRect(171,146,2,.5);for(let r=0;r<5;r++)this.poly(e,[[135+r*3,183-r*6],[130+r*4,179-r*7],[139+r*3,177-r*6]],"#809178");this.line(e,[150,162],[119,200],"#74664c",2),this.line(e,[174,163],[198,197],"#74664c",2),this.line(e,[151,162],[120,200],"#b5a483",.5),this.line(e,[174,162],[198,195],"#c2b298",.5),this.inset(e,[[150,164],[153,164],[150,168],[147,168]],"#ad9f6b"),this.screw(e,150,166,!0),e.restore()}}const Oo=24e3,nh=112,sh=16,hc=sh*4*60/nh,rt=Math.PI*2,S1=s=>440*2**((s-69)/12);function zo(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/2147483648-1)}function Us(s,e=!1,t=Oo){return{sampleRate:t,channels:Array.from({length:e?2:1},()=>new Float32Array(Math.ceil(s*t)))}}function b1(s,e=Oo){const t={revolver:.82,shotgun:1.1,plasma:.72,machinegun:.43,railgun:1.16,arc:.78}[s],i=Us(t,!0,e),n=new Float32Array(i.channels[0].length),a=zo({revolver:6721,shotgun:1297,plasma:9919,machinegun:4049,railgun:82111,arc:17413}[s]);let r=0,o=0,l=0,c=0;const h=s==="shotgun",d=s==="plasma",f=s==="machinegun";for(let u=0;u<n.length;u++){const g=u/e,x=a();r+=(x-r)*.085,o+=(x-o)*.43;const p=x-o,m=Math.min(1,g/.0012);let _;if(s==="railgun"){if(l+=rt*(38+134*Math.exp(-g*28))/e,c+=rt*(510+1140*Math.exp(-g*12))/e,_=Math.sin(l)*.94*Math.exp(-g*10),_+=p*2.4*Math.exp(-g*140)+o*1.35*Math.exp(-g*25)+r*.85*Math.exp(-g*9),_+=(Math.sin(c)+Math.sin(c*1.417)*.42)*.36*Math.exp(-g*8.5),g>.095){const M=g-.095;_+=(Math.sin(rt*1420*M)*.19+Math.sin(rt*2197*M)*.085)*Math.exp(-M*7)}g>.27&&(_+=p*.14*Math.exp(-(g-.27)*55))}else if(s==="arc"){l+=rt*(63+238*Math.exp(-g*30))/e,c+=rt*(460+1080*Math.exp(-g*20))/e,_=Math.sin(l)*.72*Math.exp(-g*12),_+=p*1.75*Math.exp(-g*80)+o*.9*Math.exp(-g*26),_+=Math.sin(c+Math.sin(c*1.731)*1.1)*.32*Math.exp(-g*11);for(const M of[.023,.057,.109,.167]){if(g<M)continue;const v=g-M,y=1-M*2.4;_+=y*(p*.85+Math.sin(rt*620*v)*.24+Math.sin(rt*1739*v)*.17)*Math.exp(-v*54)}if(g>.08){const M=g-.08;_+=Math.sin(rt*807*M+Math.sin(rt*91*M)*.7)*.23*Math.exp(-M*8)}}else if(d)l+=rt*(72+970*Math.exp(-g*20))/e,c+=rt*(114+1430*Math.exp(-g*17))/e,_=(Math.sin(l+Math.sin(c)*1.5)*.58+Math.sin(c)*.24)*Math.exp(-g*10),_+=(p*.62+o*.4)*Math.exp(-g*24),_+=Math.sin(rt*49*g)*.45*Math.exp(-g*11),_+=Math.sin(rt*1880*g)*Math.exp(-g*15)*.11;else{const M=h?185:f?154:210,v=h?8.5:f?24:13;l+=rt*(43+M*Math.exp(-g*37))/e,_=Math.sin(l)*(h?1.03:.77)*Math.exp(-g*v),_+=p*1.55*Math.exp(-g*(h?100:155)),_+=o*(h?1.9:1.12)*Math.exp(-g*(h?21:f?55:31)),_+=r*(h?2.25:1.55)*Math.exp(-g*(h?9:16));const y=h?.38:f?.047:.12;if(g>y){const A=g-y;_+=(p*.24+Math.sin(rt*2230*A)*.13+Math.sin(rt*3180*A)*.07)*Math.exp(-A*83)}h&&g>.56&&(_+=(o*.5+Math.sin(rt*680*g)*.1)*Math.exp(-(g-.56)*45));const T=f?.112:h?.66:.19;if(g>T){const A=g-T;_+=(Math.sin(rt*2760*A)+Math.sin(rt*4130*A)*.35)*Math.exp(-A*58)*.085}}n[u]=Math.tanh(_*1.3)*m*Math.min(1,(t-g)/.035)}for(let u=0;u<2;u++){let g=0;const x=[.043+u*.009,.097-u*.012,.171+u*.014];for(let p=0;p<n.length;p++){let m=0;for(let _=0;_<x.length;_++){const M=p-Math.round(x[_]*e);M>=0&&(m+=n[M]*[.21,.12,.065][_])}g+=(m-g)*.27,i.channels[u][p]=Math.tanh((n[p]+g)*.94)*.97}}return i}function y1(s,e=Oo){const t=s==="railgun",i=t?1.72:1.45,n=Us(i,!0,e),a=n.channels[0],r=zo(t?13579:27893),o=t?[.015,.31,.63,1.34]:[.015,.22,.48,1.1],l=t?.72:.58,c=t?1.42:1.19;let h=0,d=0;for(let g=0;g<a.length;g++){const x=g/e,p=r();h+=(p-h)*.24;let m=0;for(let M=0;M<o.length;M++){const v=x-o[M];if(v<0)continue;const y=t?960+M*131:1490+M*217;m+=((p-h)*.61+Math.sin(rt*y*v)*.18+Math.sin(rt*163*v)*.17)*Math.exp(-v*(M===1?26:64))*Math.min(1,v/8e-4)}if(x>=l&&x<=c){const M=x-l,v=c-l;d+=rt*(t?105+605*M/v:240+950*M/v)/e;const y=Math.min(1,M/.12)*Math.min(1,(c-x)/.11);m+=(Math.sin(d)*.18+Math.sin(d*(t?2.003:1.719))*.085)*y}const _=t?1.4:1.18;if(x>_){const M=x-_;m+=(Math.sin(rt*(t?1920:2650)*M)*.13+Math.sin(rt*(t?2870:1841)*M)*.07)*Math.exp(-M*26)}a[g]=Math.tanh(m*1.15)*.72*Math.min(1,(i-x)/.025)}const f=n.channels[1],u=Math.round(e*.009);for(let g=0;g<a.length;g++)f[g]=a[g]*.94+(g>=u?a[g-u]*.045:0);return n}function ys(s){const e={kick:.44,snare:.28,hat:.07,open:.29,metal:.37}[s],t=Us(e),i=zo(s.charCodeAt(0)*1931);let n=0,a=0;for(let r=0;r<t.channels[0].length;r++){const o=r/t.sampleRate,l=i();n+=(l-n)*.22;let c=0;s==="kick"?(a+=rt*(43+113*Math.exp(-o*48))/t.sampleRate,c=Math.sin(a)*Math.exp(-o*12)+(l-n)*Math.exp(-o*160)*.48):s==="snare"?(c=(l-n*.7)*Math.exp(-o*21)*.65+Math.sin(rt*181*o)*Math.exp(-o*33)*.3,c+=(Math.sin(rt*331*o)+Math.sin(rt*418*o)*.4)*Math.exp(-o*40)*.14):s==="metal"?(c=(Math.sin(rt*765*o)*Math.sin(rt*1083*o)+Math.sin(rt*1743*o)*.4)*Math.exp(-o*17)*.4,c+=(l-n)*Math.exp(-o*32)*.25):c=(l-n)*Math.exp(-o*(s==="hat"?67:18))*.52,t.channels[0][r]=Math.tanh(c*1.8)*Math.min(1,o/8e-4)}return t}function Pi(s,e,t,i,n=0){const a=Math.round(t*s.sampleRate),r=s.channels[0].length,o=Math.sqrt((1-n)/2),l=Math.sqrt((1+n)/2);for(let c=0;c<e.channels[0].length;c++){const h=(a+c)%r;s.channels[0][h]+=e.channels[0][c]*i*o,s.channels[1][h]+=e.channels[e.channels.length-1][c]*i*l}}function Kn(s,e,t,i,n,a,r=0){const o=s.sampleRate,l=S1(i),c=s.channels[0].length,h=Math.round(e*o),d=Math.ceil(t*o),f=Math.sqrt((1-r)/2),u=Math.sqrt((1+r)/2);for(let g=0;g<d;g++){const x=g/o,p=rt*l*x,m=x/t;let _,M;a==="pad"?(_=Math.sin(p)*.52+Math.sin(p*1.004+Math.sin(x*1.3)*.12)*.32+Math.sin(p*1.997)*.13,M=Math.min(1,x/.29)*Math.min(1,(t-x)/.48)):a==="lead"?(_=Math.sin(p+Math.sin(p*2)*.62)*.63+Math.sin(p*3.002)*.12+Math.sin(p*.999)*.21,M=Math.min(1,x/.016)*Math.exp(-m*3.4)*Math.min(1,(t-x)/.055)):a==="riff"?(_=Math.tanh((Math.sin(p)+Math.sin(p*2)*.48+Math.sin(p*3)*.33+Math.sin(p*4)*.19)*3.8),M=Math.min(1,x/.005)*Math.exp(-m*4.5)*Math.min(1,(t-x)/.018)):(_=Math.tanh((Math.sin(p)*.83+Math.sin(p*2)*.32+Math.sin(p*3)*.17)*1.9),M=Math.min(1,x/.006)*Math.exp(-m*2.1)*Math.min(1,(t-x)/.022));const v=(h+g)%c,y=_*M*n;s.channels[0][v]+=y*f,s.channels[1][v]+=y*u}}function fc(s){for(const e of s.channels){let t=0,i=0;for(let a=0;a<e.length;a++){const r=e[a],o=r-t+i*.995;t=r,i=o,e[a]=Math.tanh(o*1.75)*.75}const n=Math.round(s.sampleRate*.003);for(let a=0;a<n;a++){const r=e.length-n+a,o=a/(n-1);e[r]=e[r]*(1-o)+e[0]*o}}}function E1(){const s=Us(hc,!0),e=Us(hc,!0),t=60/nh,i=t*4,n={kick:ys("kick"),snare:ys("snare"),hat:ys("hat"),open:ys("open"),metal:ys("metal")},a=[[50,53,57,60,64],[46,50,53,57,60],[41,48,53,57,60],[48,53,55,58,62]],r=[38,34,29,36],o=[62,65,69,67,64,65,62,60];for(let l=0;l<sh;l++){const c=Math.floor(l/2)%4,h=r[c],d=l*i,f=l>=8;l%2===0&&a[c].forEach((g,x)=>Kn(s,d,i*2+.18,g,.053,"pad",(x-2)*.42));for(const g of[0,6,8,11,...l%4===3?[14]:[]])Pi(s,n.kick,d+g*t/4,.42);for(const g of[4,12])Pi(s,n.snare,d+g*t/4,.31,.06);l%2===1&&Pi(s,n.snare,d+15*t/4,.095,-.2);for(let g=0;g<16;g+=2)Pi(s,n.hat,d+g*t/4,g%4===0?.09:.14,g%4===0?-.27:.3);Pi(s,n.open,d+10*t/4,.075,.4),l%2===1&&Pi(s,n.metal,d+7*t/4,.12,-.45),[0,3,6,8,10,13,15].forEach((g,x)=>Kn(s,d+g*t/4,t*(g===0?.7:.38),h+(x===3||x===5?12:x===6&&l%2===1?7:0),.19,"bass")),(l%2===0||f)&&[.5,1.25,2.5,3.25].forEach((x,p)=>{const m=o[(l+p)%o.length]+(c===1?-2:c===3?-5:0);Kn(s,d+x*t,t*1.5,m,.125,"lead",-.34),Kn(s,d+(x+.5)*t,t*1.3,m,.042,"lead",.67)});for(const g of[0,2,6,8,10,14])Pi(e,n.kick,d+g*t/4,.23);for(const g of[4,12,...l%4===3?[13,14,15]:[]])Pi(e,n.snare,d+g*t/4,.22,-.1);for(let g=1;g<16;g+=2)Pi(e,n.hat,d+g*t/4,.07,g%4===1?-.6:.6);for(const g of[0,2,3,6,8,10,11,14]){const x=h+12+(g===6?7:g===14&&l%4===3?10:0);Kn(e,d+g*t/4,t*.38,x,.16,"riff",-.42),Kn(e,d+g*t/4+.018,t*.38,x+12,.065,"riff",.42)}l%4===3&&Pi(e,n.metal,d+3.5*t,.21,.3)}return fc(s),fc(e),{district:s,combat:e}}class T1{context;master;fx;music;musicDuck;districtGain;combatGain;noise;district;combat;weapons=new Map;capacitorReloads=new Map;musicSources=[];musicStarted=0;musicOffset=0;volume=.7;musicVolume=.75;effectsVolume=.95;unlocked=!1;lastStep=0;lastX;lastZ;distance=0;lastEnemy=-10;danger=0;unlock(){try{if(!this.context){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.context=new e,i=t.createDynamicsCompressor();i.threshold.value=-7,i.knee.value=8,i.ratio.value=4,i.attack.value=.002,i.release.value=.16,this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(i),i.connect(t.destination),this.fx=t.createGain(),this.fx.gain.value=this.effectsVolume,this.fx.connect(this.master),this.music=t.createGain(),this.music.gain.value=this.musicVolume,this.music.connect(this.master),this.musicDuck=t.createGain(),this.musicDuck.connect(this.music),this.districtGain=t.createGain(),this.districtGain.gain.value=.92,this.districtGain.connect(this.musicDuck),this.combatGain=t.createGain(),this.combatGain.gain.value=0,this.combatGain.connect(this.musicDuck);const n=t.sampleRate*2;this.noise=t.createBuffer(1,n,t.sampleRate);const a=this.noise.getChannelData(0);let r=1793;for(let l=0;l<n;l++)r=Math.imul(r,1664525)+1013904223>>>0,a[l]=r/2147483648-1;for(const l of bi)this.weapons.set(l,this.buffer(b1(l)));for(const l of["railgun","arc"])this.capacitorReloads.set(l,this.buffer(y1(l)));const o=E1();this.district=this.buffer(o.district),this.combat=this.buffer(o.combat)}this.context.resume().then(()=>{this.unlocked=!0}).catch(()=>{}),this.unlocked=this.context.state==="running"}catch{}}setVolume(e){this.volume=this.clamp(e),this.setGain(this.master,this.volume)}setMusicVolume(e){this.musicVolume=this.clamp(e),this.setGain(this.music,this.musicVolume)}setEffectsVolume(e){this.effectsVolume=this.clamp(e),this.setGain(this.fx,this.effectsVolume)}clamp(e){return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}setGain(e,t){if(!this.context||!e)return;const i=this.context.currentTime;e.gain.cancelScheduledValues(i),t===0?e.gain.setValueAtTime(0,i):e.gain.setTargetAtTime(t,i,.04)}suspend(){const e=this.context;if(e&&this.musicSources.length&&this.district){this.musicOffset=(this.musicOffset+Math.max(0,e.currentTime-this.musicStarted))%this.district.duration,this.musicDuck?.gain.cancelScheduledValues(e.currentTime),this.musicDuck?.gain.setTargetAtTime(0,e.currentTime,.035);for(const t of this.musicSources)t.stop(e.currentTime+.16);this.musicSources=[]}this.lastX=this.lastZ=void 0,this.distance=0}handle(e){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const t of e)switch(t.type){case"shot":this.shot(t.weapon||"revolver");break;case"reload":this.reload(t.weapon||"revolver");break;case"hurt":this.burst(.23,.24,850),this.tone(97,.21,.21,"sawtooth",45);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.55,.14,740),this.tone(89,.43,.14,"sawtooth",58),this.burst(.085,.19,2700,.42);break;case"explosion":this.burst(.85,.72,2900),this.burst(.18,.48,6700),this.tone(128,.65,.48,"triangle",26),this.tone(49,.9,.28,"sine",24),this.burst(.55,.2,1800,.12);break;case"shatter":this.burst(.18,.35,8800),this.burst(.48,.17,5200,.05);for(let i=0;i<5;i++)this.tone(2140+i*479,.06,.04,"triangle",1330+i*313,.04+i*.043);break;case"enemy":{const i=this.context.currentTime;if(i-this.lastEnemy>.55)if(this.lastEnemy=i,t.message?.includes("charging shot"))this.tone(260,.19,.1,"sawtooth",790),this.burst(.1,.24,4600,.2),this.tone(145,.16,.17,"triangle",45,.2);else{const n=t.message?.startsWith("Strider");this.tone(n?86:143,.34,.2,"sawtooth",n?35:56),this.tone(n?134:218,.27,.1,"triangle",63),this.burst(.32,.2,n?630:1100)}break}case"kill":this.burst(.26,.19,620),this.tone(118,.27,.13,"sawtooth",34);break;case"mount":this.tone(110,.22,.16,"sawtooth",210),this.tone(82,.18,.17,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(e,t){const i=this.context;if(!i||!this.unlocked||i.state!=="running"||e.status!=="playing")return;this.musicSources.length||this.startMusic();const n=e.player,a=e.enemies.some(o=>o.alive&&o.alert&&Math.hypot(o.x-n.x,o.z-n.z)<22);this.danger+=((a?1:0)-this.danger)*Math.min(1,t*(a?1.7:.32)),this.combatGain?.gain.setTargetAtTime(this.danger*.93,i.currentTime,.18),this.districtGain?.gain.setTargetAtTime(.92-this.danger*.12,i.currentTime,.22);const r=this.lastX===void 0?0:Math.hypot(n.x-this.lastX,n.z-this.lastZ);this.lastX=n.x,this.lastZ=n.z,r<1&&(this.distance+=r),n.grounded&&this.distance>(n.mounted?2.2:1.65)&&i.currentTime-this.lastStep>.22&&t>0&&(this.distance=0,this.lastStep=i.currentTime,this.burst(.065,n.mounted?.18:.085,n.mounted?430:1400),this.tone(n.mounted?65:110,.09,n.mounted?.15:.08,"triangle",40))}buffer(e){const t=this.context.createBuffer(e.channels.length,e.channels[0].length,e.sampleRate);return e.channels.forEach((i,n)=>t.getChannelData(n).set(i)),t}startMusic(){const e=this.context;if(!e||!this.district||!this.combat||!this.districtGain||!this.combatGain||!this.musicDuck)return;const t=e.currentTime+.025;this.musicDuck.gain.cancelScheduledValues(e.currentTime),this.musicDuck.gain.setValueAtTime(0,e.currentTime),this.musicDuck.gain.linearRampToValueAtTime(1,t+.3),this.musicStarted=t;for(const[i,n]of[[this.district,this.districtGain],[this.combat,this.combatGain]]){const a=e.createBufferSource();a.buffer=i,a.loop=!0,a.connect(n),a.start(t,this.musicOffset),a.onended=()=>a.disconnect(),this.musicSources.push(a)}}shot(e){const t=this.context,i=this.weapons.get(e);if(!t||!i||!this.fx)return;const n=t.createBufferSource(),a=t.createGain();if(n.buffer=i,n.playbackRate.value=.985+Math.random()*.03,a.gain.value={revolver:.84,shotgun:1,plasma:.74,machinegun:.7,railgun:.86,arc:.76}[e],n.connect(a),a.connect(this.fx),n.start(),n.onended=()=>{n.disconnect(),a.disconnect()},this.musicDuck&&this.musicSources.length){const r=t.currentTime;this.musicDuck.gain.cancelScheduledValues(r),this.musicDuck.gain.setValueAtTime(Math.min(1,this.musicDuck.gain.value),r),this.musicDuck.gain.linearRampToValueAtTime(.79,r+.006),this.musicDuck.gain.linearRampToValueAtTime(1,r+.145)}}reload(e){if(e==="railgun"||e==="arc"){const t=this.context,i=this.capacitorReloads.get(e);if(!t||!i||!this.fx)return;const n=t.createBufferSource(),a=t.createGain();n.buffer=i,a.gain.value=e==="railgun"?.68:.64,n.connect(a),a.connect(this.fx),n.start(),n.onended=()=>{n.disconnect(),a.disconnect()};return}if(e==="plasma"){this.tone(180,.28,.13,"sawtooth",740),this.burst(.17,.15,2900,.25),this.tone(1320,.18,.09,"triangle",420,.47);return}if(this.burst(.075,.19,4200),this.tone(420,.045,.11,"square",180),this.burst(.13,.12,1600,.19),this.tone(710,.045,.1,"triangle",270,.31),e==="shotgun"||e==="revolver")for(let t=0;t<3;t++)this.burst(.032,.09,3100,.36+t*.19),this.tone(1870,.024,.035,"triangle",970,.36+t*.19);this.burst(.06,.22,3800,e==="machinegun"?.83:1),this.tone(160,.08,.14,"triangle",61,e==="machinegun"?.84:1.02)}tone(e,t,i,n="square",a=e,r=0){const o=this.context;if(!o||!this.fx)return;const l=o.currentTime+r,c=o.createOscillator(),h=o.createGain();c.type=n,c.frequency.setValueAtTime(Math.max(1,e),l),c.frequency.exponentialRampToValueAtTime(Math.max(1,a),l+t),h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(i,l+Math.min(.006,t/4)),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(this.fx),c.start(l),c.stop(l+t+.025),c.onended=()=>{c.disconnect(),h.disconnect()}}burst(e,t,i,n=0){const a=this.context;if(!a||!this.noise||!this.fx)return;const r=a.currentTime+n,o=a.createBufferSource(),l=a.createBiquadFilter(),c=a.createGain();o.buffer=this.noise,l.type="lowpass",l.frequency.setValueAtTime(i,r),l.Q.value=.4,c.gain.setValueAtTime(t,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(l),l.connect(c),c.connect(this.fx),o.start(r,Math.random()),o.stop(r+e+.025),o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect()}}chime(e,t,i){e.forEach((n,a)=>this.tone(n,.42,i,"triangle",n,a*t))}}const Fa=document.querySelector("#world"),w1=document.querySelector("#weapon"),ah="fossil-noir-3d-checkpoint",rh=2,oh="lazarus-campaign-8-1";let vi=0,ot,rs,ko,cn=[],yn=!1,Fs=performance.now(),Rn=!1;const Yi=new T1,hn=new x1(Fa,Hs),A1=new M1(w1),vt=new v1({start:R1,chapter:C1,next:I1,resume:P1,restart:L1,menu:D1,pause:Hs,settings:ch});ot=new vo(wt[0],vt.settings.difficulty);ko=As(ot.state);const an=s=>s!==null&&typeof s=="object"&&!Array.isArray(s),dc=s=>["easy","normal","hard","nightmare"].includes(s),wr=s=>bi.includes(s),Lt=(s,e,t)=>typeof s=="number"&&Number.isFinite(s)&&s>=e&&s<=t,vn=(s,e,t)=>Lt(s,e,t)&&Number.isInteger(s);function As(s){const e=structuredClone(s);e.events=[],e.effects=[],e.status="playing",e.player.reload=0,e.player.cooldown=0,e.player.recoil=0,e.player.hurt=0,e.player.mounted=!1,e.player.crouching=!1,e.player.y=0,e.player.vy=0,e.player.grounded=!0;for(const t of e.enemies)t.path=[],t.pathTime=0,t.cooldown=1,t.hurt=0,t.speed=0,t.attack=0,t.vx=0,t.vz=0;return e}function lh(s){const e=JSON.stringify({walls:s.walls,doors:s.doors,enemies:s.enemies,pickups:s.pickups,destructibles:s.destructibles,spawn:s.spawn,checkpoint:s.checkpoint,switch:s.switch,exit:s.exit,waves:s.waves,mountBounds:s.mountBounds,safe:s.safe,requiredKills:s.requiredKills,requiredEvidence:s.requiredEvidence});let t=2166136261;for(let i=0;i<e.length;i++)t=Math.imul(t^e.charCodeAt(i),16777619);return(t>>>0).toString(16)}function Os(){cn=[...new Set([...cn,...ot.state.pickups.filter(s=>s.collected&&s.evidenceId&&Object.hasOwn(_n,s.evidenceId)).map(s=>s.evidenceId)])],vt.setEvidence(cn)}function Rs(s,e){if(!(e.player.health<=0))try{const t={version:rh,campaign:oh,level:lh(wt[s]),chapter:s,difficulty:e.difficulty,evidence:cn,state:As(e)};localStorage.setItem(ah,JSON.stringify(t)),vt.setSave(s)}catch{}}function Bo(){try{const s=localStorage.getItem(ah);if(!s||s.length>2e5)return null;const e=JSON.parse(s);if(!an(e))return null;if(e.version===1&&dc(e.difficulty))return{chapter:0,difficulty:e.difficulty,evidence:[],legacy:!0};if(e.version!==rh||e.campaign!==oh||!vn(e.chapter,0,wt.length-1)||!dc(e.difficulty)||!an(e.state))return null;const t=wt[e.chapter];if(e.level!==lh(t))return null;const i=e.state;if(i.difficulty!==e.difficulty||i.chapterId!==e.chapter||i.status!=="playing"||!an(i.player)||!Array.isArray(i.triggeredWaves)||i.triggeredWaves.length>(t.waves?.length??0)||new Set(i.triggeredWaves).size!==i.triggeredWaves.length||!i.triggeredWaves.every(x=>typeof x=="string"&&t.waves?.some(p=>p.id===x)))return null;const n=i.triggeredWaves,a=(t.waves??[]).filter(x=>n.includes(x.id)).flatMap(x=>x.enemies),r=new vo({...t,enemies:[...t.enemies,...a]},e.difficulty).state;r.triggeredWaves=[...n];const o=i.player;if(!wr(o.weapon)||!Array.isArray(o.owned)||o.owned.length>bi.length||!o.owned.every(wr)||new Set(o.owned).size!==o.owned.length||o.owned.length&&!o.owned.includes(o.weapon)||!an(o.ammo)||!an(o.reserve))return null;for(const x of bi)if(!vn(o.ammo[x],0,ut[x].clip)||!vn(o.reserve[x],0,ut[x].reserveCap))return null;const l=t.bounds;if(!Lt(o.x,l.minX,l.maxX)||!Lt(o.z,l.minZ,l.maxZ)||!Lt(o.yaw,-1e6,1e6)||!Lt(o.pitch,-1.22,1.22)||!Lt(o.health,.001,100)||!Lt(o.armor,0,100)||typeof o.keycard!="boolean"||!vn(o.evidence,0,t.pickups.filter(x=>x.kind==="evidence").length))return null;r.player={...r.player,x:o.x,z:o.z,yaw:o.yaw,pitch:o.pitch,health:o.health,armor:o.armor,keycard:o.keycard,evidence:o.evidence,weapon:o.weapon,owned:[...o.owned],ammo:{...r.player.ammo},reserve:{...r.player.reserve}};for(const x of bi)r.player.ammo[x]=o.ammo[x],r.player.reserve[x]=o.reserve[x];const c=(x,p)=>{if(!Array.isArray(x)||x.length!==p.length||!x.every(an))return null;const m=new Map(x.map(_=>[_.id,_]));return m.size!==x.length||!p.every(_=>m.has(_.id))?null:m},h=c(i.enemies,r.enemies),d=c(i.doors,r.doors),f=c(i.destructibles,r.destructibles);if(!h||!d||!f)return null;for(const x of r.enemies){const p=h.get(x.id);if(!Lt(p.x,l.minX,l.maxX)||!Lt(p.z,l.minZ,l.maxZ)||!Lt(p.health,0,x.maxHealth)||typeof p.alive!="boolean"||typeof p.alert!="boolean"||!Lt(p.heading,-1e6,1e6)||!Lt(p.phase,0,1e6)||(p.alive?p.health<=0:p.health>0))return null;Object.assign(x,{x:p.x,z:p.z,health:p.health,alive:p.alive,alert:p.alert,heading:p.heading,phase:p.phase})}for(const x of r.doors){const p=d.get(x.id);if(!Lt(p.open,0,1)||!Lt(p.target,0,1))return null;x.open=p.open,x.target=p.target}for(const x of r.destructibles){const p=f.get(x.id);if(!Lt(p.health,0,x.maxHealth)||typeof p.destroyed!="boolean"||(p.destroyed?p.health>0:p.health<=0))return null;x.health=p.health,x.destroyed=p.destroyed}if(!Array.isArray(i.pickups)||i.pickups.length<r.pickups.length||i.pickups.length>r.pickups.length+r.enemies.length*2||!i.pickups.every(an))return null;const u=new Map(i.pickups.map(x=>[x.id,x]));if(u.size!==i.pickups.length)return null;for(const x of r.pickups){const p=u.get(x.id);if(!p||typeof p.collected!="boolean")return null;x.collected=p.collected,u.delete(x.id)}for(const[x,p]of u){if(typeof x!="string"||!r.enemies.some(m=>!m.alive&&(x===`drop-${m.id}`||x.startsWith(`drop-${m.id}-`)))||p.kind!=="ammo"||!wr(p.ammoFor)||!vn(p.amount,1,ut[p.ammoFor].reserveCap)||typeof p.collected!="boolean"||!Lt(p.x,l.minX,l.maxX)||!Lt(p.z,l.minZ,l.maxZ))return null;r.pickups.push({id:x,kind:"ammo",ammoFor:p.ammoFor,amount:p.amount,label:`${ut[p.ammoFor].name} ammunition`,x:p.x,z:p.z,collected:p.collected})}if(!vn(i.kills,0,r.enemies.length)||i.kills!==r.enemies.filter(x=>!x.alive).length||!Lt(i.time,0,1e6)||typeof i.powered!="boolean"||typeof i.checkpoint!="boolean"||!vn(i.secrets,0,t.doors.filter(x=>x.secret).length)||!Lt(i.slow,0,1)||!Array.isArray(i.discoveredSecrets)||i.discoveredSecrets.length!==i.secrets||new Set(i.discoveredSecrets).size!==i.discoveredSecrets.length||!i.discoveredSecrets.every(x=>typeof x=="string"&&t.doors.some(p=>p.secret&&p.id===x)))return null;r.discoveredSecrets=[...i.discoveredSecrets],r.kills=i.kills,r.time=i.time,r.powered=i.powered,r.checkpoint=i.checkpoint,r.secrets=i.secrets,r.slow=i.slow,an(i.mount)&&Lt(i.mount.x,l.minX,l.maxX)&&Lt(i.mount.z,l.minZ,l.maxZ)&&(r.mount={x:i.mount.x,z:i.mount.z}),r.message="CASE FILE RESTORED · CONTINUE THE TRAIL",r.messageTime=4;const g=Array.isArray(e.evidence)?[...new Set(e.evidence.filter(x=>typeof x=="string"&&Object.hasOwn(_n,x)))]:[];return{chapter:e.chapter,difficulty:e.difficulty,state:r,evidence:g}}catch{return null}}function $i(s){yn=s==="playing",hn.enabled=yn,hn.clear(),vt.show(s),yn||(hn.release(),Yi.suspend())}function xo(s,e,t){return wh(s,e,t)}function zs(s,e,t,i,n=!1){if(Rn||!Number.isInteger(s)||!wt[s])return!1;let a;try{const r=xo(s,e,t),o=As(r.state);if(i&&!r.restoreSavedState(i))throw new Error("Invalid restored checkpoint");n&&r.restart(!0),a=new ih(Fa,wt[s]),a.resize(vt.settings);const l=rs;return rs=a,ot=r,vi=s,ko=i?i.checkpoint?As(xo(s,e,i.player).state):As(i):o,l?.dispose(),vt.setError(""),vt.setLevel(wt[s]),vt.setEvidence(cn),vt.update(ot.state),Rs(s,ot.state),Yi.unlock(),$i("playing"),hn.capture(),Fs=performance.now(),!0}catch(r){return a?.dispose(),console.error("Fossil Noir chapter load error",r),$i("menu"),vt.setError("This chapter could not load. Reload the page or select another chapter."),!1}}function R1(s=!1){if(s){const e=Bo();if(!e){vt.setSave(null),vt.setError("No compatible saved checkpoint was found. Start a new campaign or choose a chapter.");return}cn=e.evidence,zs(e.chapter,e.difficulty,void 0,e.state,e.legacy)}else cn=[],zs(0,vt.settings.difficulty)}function C1(s){cn=[],zs(s,vt.settings.difficulty)}function I1(){ot.state.status!=="complete"||vi>=wt.length-1||(Os(),zs(vi+1,ot.state.difficulty,ot.state.player))}function P1(){Rn||ot.state.status!=="playing"||(Yi.unlock(),$i("playing"),hn.capture(),Fs=performance.now())}function Hs(){yn&&(Os(),vt.update(ot.state),$i("pause"))}function L1(s=!1){if(!Rn){if(!s){zs(vi,ot.state.difficulty,void 0,ko);return}ot.state.checkpoint&&(ot.restart(!0),vt.update(ot.state),Rs(vi,ot.state),Yi.unlock(),$i("playing"),hn.capture(),Fs=performance.now())}}function D1(){Os(),$i("menu"),vt.setSave(Bo()?.chapter??null)}function ch(s){hn.sensitivity=s.sensitivity,Yi.setVolume(s.volume),Yi.setMusicVolume(s.musicVolume),Yi.setEffectsVolume(s.effectsVolume),rs?.resize(s)}try{rs=new ih(Fa,wt[0]),ch(vt.settings),vt.setLevel(wt[0]);const s=Bo();vt.setSave(s?.chapter??null),vt.show("menu")}catch(s){Rn=!0,vt.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${s instanceof Error?s.message:""}`)}function hh(s){const e=Math.min(Math.max((s-Fs)/1e3,0),.05);if(Fs=s,!Rn)try{if(yn&&(ot.update(e,hn.read()),ot.state.events.some(i=>i.type==="checkpoint")&&(Os(),Rs(vi,ot.state)),Yi.handle(ot.state.events),ot.state.events.length=0,Yi.tick(ot.state,e),vt.update(ot.state),ot.state.status==="dead"&&$i("dead"),ot.state.status==="complete")){Os(),vi<wt.length-1?Rs(vi+1,xo(vi+1,ot.state.difficulty,ot.state.player).state):Rs(vi,ot.state);try{localStorage.setItem(`fossil-noir-3d-best-${vi}-${ot.state.difficulty}`,String(Math.floor(ot.state.time)))}catch{}$i("complete")}rs.render(ot.state,yn?e:0,vt.settings),A1.render(ot.state,yn?e:0),vt.update(ot.state)}catch(t){console.error("Fossil Noir 3D runtime error",t),Rn=!0,$i("menu"),vt.setError("The mission could not continue. Reload this page to restart from the saved chapter.")}requestAnimationFrame(hh)}window.addEventListener("resize",()=>rs?.resize(vt.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&Hs()});window.addEventListener("blur",Hs);Fa.addEventListener("webglcontextlost",s=>{s.preventDefault(),Hs(),Rn=!0,vt.setError("Graphics context lost. Reload the page to recover the saved mission.")});requestAnimationFrame(hh);
