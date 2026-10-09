(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Fl=[],It=(s,t,e,n,i=4.2,r="concrete",a)=>Fl.push({x:s,z:t,w:e,d:n,h:i,material:r,...a===void 0?{}:{y:a}});It(0,12.3,11,.6,4,"brick");It(-5.3,8,.6,8.6,4,"brick");It(5.3,8,.6,8.6,4,"brick");It(-3.4,4,3.8,.6,4,"brick");It(3.4,4,3.8,.6,4,"brick");It(0,4,3,.6,.8,"brick",3.2);It(-13.3,0,.6,8,6.5,"brick");It(-13.3,-13.5,.6,7,6.5,"brick");It(-13.3,-18.7,.6,3.4,6.5,"brick");It(-13.3,-4.6,.6,2.2,6.5,"brick");It(-13.3,-9.4,.6,2.2,6.5,"brick");It(-17.3,-7,.6,6.6,4,"brick");It(-15.2,-3.7,4.8,.6,4,"brick");It(-15.2,-10.3,4.8,.6,4,"brick");It(13.3,-8,.6,24,7.2,"brick");It(-9.5,4,7,.6,5.5,"brick");It(9.5,4,7,.6,5.5,"brick");It(-8,-20,12,.7,6,"metal");It(8,-20,12,.7,6,"metal");It(0,-20,4,.7,2.4,"metal",3.2);It(-7.3,-26,.6,12.6,4.5,"metal");It(7.3,-23,.6,6,4.5,"metal");It(7.3,-30.5,.6,3,4.5,"metal");It(7.3,-27.4,.6,3,1.5,"metal",3);It(11.2,-23.9,8.4,.6,4.5,"metal");It(15.3,-27.9,.6,8.6,4.5,"metal");It(11.2,-32.2,8.4,.6,4.5,"metal");It(-5.8,-32.2,8.6,.6,4.5,"metal");It(5.8,-32.2,8.6,.6,4.5,"metal");It(0,-32.2,3,.6,1.3,"metal",3.2);It(-10.3,-39.2,.6,14.6,4.5,"metal");It(10.3,-39.2,.6,14.6,4.5,"metal");It(-11,-46,.6,1.2,4.5,"metal");It(-10,-46,2,.6,4.5,"metal");It(2.8,-46,15.6,.6,4.5,"metal");It(-7,-46,4,.6,1.3,"metal",3.2);It(-11.3,-49,.6,6.6,4.5,"metal");It(-2.7,-49,.6,6.6,4.5,"metal");It(-7,-52.3,9.2,.6,4.5,"metal");It(-3.2,8,2.2,1.1,.85,"crate");It(3.8,10,1.2,2.2,1.5,"crate");It(-8,-4,2.4,1.4,1.1,"crate");It(-7,-10,2,3.6,1.1,"metal");It(3.8,-13,2.4,1.6,1.7,"crate");It(5,-14.5,1.6,1.5,1.1,"crate");It(-4.7,-18,2.4,1.3,1.3,"crate");It(4.5,-23.8,1.8,1.8,1.2,"crate");It(-4.4,-26.8,2.2,1.4,1.25,"metal");It(12,-25.9,3.3,1,1.1,"metal");It(-6.7,-34.5,2.2,1.5,1.2,"metal");It(5,-36,2.4,1.2,1.2,"metal");It(0,-40,3.5,1.4,1.1,"metal");It(-7.5,-42.8,1.3,2.4,1.5,"crate");const Le={walls:Fl,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",x:2,z:6.7},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",x:-10.5,z:-5.3},{id:"street-ammo2",kind:"ammo",x:5.8,z:-12},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",x:5.8,z:-28.5},{id:"lobby-ammo2",kind:"ammo",x:-5.7,z:-29.5},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",x:10,z:-30.7},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",x:4.7,z:-34.5},{id:"lab-ammo2",kind:"ammo",x:-8,z:-37},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",x:-5,z:-44.5},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],destructibles:[{id:"fuel-street-west",kind:"barrel",x:-8.8,z:-13.2,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-street-east",kind:"barrel",x:5.7,z:-16.8,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-security",kind:"barrel",x:4.8,z:-29.7,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-containment",kind:"barrel",x:.9,z:-43.5,y:0,w:.85,d:.85,h:1.35,health:30},{id:"glass-hotel",kind:"glass",x:-12.66,z:-1.7,y:1.12,w:.14,d:3.2,h:2.2,health:1},{id:"glass-eden",kind:"glass",x:12.66,z:-4.5,y:1.12,w:.14,d:3.2,h:2.2,health:1}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="186",Gc=0,wo=1,Hc=2,Gs=1,Vc=2,ss=3,ci=0,Ke=1,$e=2,On=0,as=1,Ro=2,Co=3,Po=4,Wc=5,Ui=100,Xc=101,qc=102,Yc=103,$c=104,Kc=200,Zc=201,Jc=202,Qc=203,Ol=204,zl=205,jc=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,ah=213,oh=214,ia=0,sa=1,ra=2,os=3,aa=4,oa=5,la=6,ca=7,rr=0,lh=1,ch=2,pn=0,Bl=1,kl=2,Gl=3,Hl=4,Vl=5,Wl=6,Xl=7,ql=300,hi=301,Bi=302,pr=303,mr=304,ar=306,ki=1e3,Fn=1001,ha=1002,de=1003,hh=1004,_s=1005,Be=1006,gr=1007,ai=1008,en=1009,Yl=1010,$l=1011,ls=1012,Ya=1013,Tn=1014,un=1015,An=1016,$a=1017,Ka=1018,cs=1020,Kl=35902,Zl=35899,Jl=1021,Ql=1022,dn=1023,kn=1026,oi=1027,Za=1028,Ja=1029,fi=1030,Qa=1031,ja=1033,Hs=33776,Vs=33777,Ws=33778,Xs=33779,fa=35840,ua=35841,da=35842,pa=35843,ma=36196,ga=37492,xa=37496,_a=37488,va=37489,Ks=37490,Ma=37491,Sa=37808,ba=37809,ya=37810,Ea=37811,Ta=37812,Aa=37813,wa=37814,Ra=37815,Ca=37816,Pa=37817,Ia=37818,La=37819,Da=37820,Ua=37821,Na=36492,Fa=36494,Oa=36495,za=36283,Ba=36284,Zs=36285,ka=36286,fh=3200,Js=0,uh=1,Zn="",be="srgb",Qs="srgb-linear",js="linear",se="srgb",xr=7680,dh=519,ph=512,mh=513,gh=514,to=515,xh=516,_h=517,eo=518,vh=519,Mh=35044,qs=35048,Io="300 es",En=2e3,hs=2001;function Sh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bh(){const s=tr("canvas");return s.style.display="block",s}const Lo={};function Do(...s){const t="THREE."+s.shift();console.log(t,...s)}function jl(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ft(...s){s=jl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=jl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Oi(...s){const t=s.join(" ");t in Lo||(Lo[t]=!0,Ft(...s))}function yh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Eh={[ia]:sa,[ra]:la,[aa]:ca,[os]:oa,[sa]:ia,[la]:ra,[ca]:aa,[oa]:os};class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,Ga=180/Math.PI;function ds(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function Th(s,t){return(s%t+t)%t}function vr(s,t,e){return(1-e)*s+e*t}function Wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fo=class fo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fo.prototype.isVector2=!0;let Ot=fo;class Ze{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,l){let o=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||o!==f||c!==p||h!==m){let g=o*f+c*p+h*m+u*x;g<0&&(f=-f,p=-p,m=-m,x=-x,g=-g);let d=1-l;if(g<.9995){const S=Math.acos(g),E=Math.sin(S);d=Math.sin(d*S)/E,l=Math.sin(l*S)/E,o=o*d+f*l,c=c*d+p*l,h=h*d+m*l,u=u*d+x*l}else{o=o*d+f*l,c=c*d+p*l,h=h*d+m*l,u=u*d+x*l;const S=1/Math.sqrt(o*o+c*c+h*h+u*u);o*=S,c*=S,h*=S,u*=S}}t[e]=o,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const l=n[i],o=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[e]=l*m+h*u+o*p-c*f,t[e+1]=o*m+h*f+c*u-l*p,t[e+2]=c*m+h*p+l*f-o*u,t[e+3]=h*m-l*u-o*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),h=l(i/2),u=l(r/2),f=o(n/2),p=o(i/2),m=o(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],l=e[5],o=e[9],c=e[2],h=e[6],u=e[10],f=n+l+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-o)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>l&&n>u){const p=2*Math.sqrt(1+n-l-u);this._w=(h-o)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(l>u){const p=2*Math.sqrt(1+l-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(o+h)/p}else{const p=2*Math.sqrt(1+u-n-l);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(o+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,l=e._x,o=e._y,c=e._z,h=e._w;return this._x=n*h+a*l+i*c-r*o,this._y=i*h+a*o+r*l-n*c,this._z=r*h+a*c+n*o-i*l,this._w=a*h-n*l-i*o-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,i=-i,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){const c=Math.acos(l),h=Math.sin(c);o=Math.sin(o*c)/h,e=Math.sin(e*c)/h,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uo=class uo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*i-l*n),h=2*(l*e-r*i),u=2*(r*n-a*e);return this.x=e+o*c+a*u-l*h,this.y=n+o*h+l*c-r*u,this.z=i+o*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=i*o-r*l,this.y=r*a-n*o,this.z=n*l-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uo.prototype.isVector3=!0;let k=uo;const Mr=new k,Uo=new Ze,po=class po{constructor(t,e,n,i,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,l,o,c)}set(t,e,n,i,r,a,l,o,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=l,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],x=i[0],g=i[3],d=i[6],S=i[1],E=i[4],_=i[7],b=i[2],T=i[5],C=i[8];return r[0]=a*x+l*S+o*b,r[3]=a*g+l*E+o*T,r[6]=a*d+l*_+o*C,r[1]=c*x+h*S+u*b,r[4]=c*g+h*E+u*T,r[7]=c*d+h*_+u*C,r[2]=f*x+p*S+m*b,r[5]=f*g+p*E+m*T,r[8]=f*d+p*_+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8];return e*a*h-e*l*c-n*r*h+n*l*o+i*r*c-i*a*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],u=h*a-l*c,f=l*o-h*r,p=c*r-a*o,m=e*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(l*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*o)*x,t[5]=(i*r-l*e)*x,t[6]=p*x,t[7]=(n*o-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-i*c,i*o,-i*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};po.prototype.isMatrix3=!0;let zt=po;const Sr=new zt,No=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ah(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?js:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qs]:{primaries:t,whitePoint:n,transfer:js,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:se,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),s}const $t=Ah();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _i;class wh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_i===void 0&&(_i=tr("canvas")),_i.width=t.width,_i.height=t.height;const i=_i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=_i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rh=0;class no{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?r.push(br(i[a].image)):r.push(br(i[a]))}else r=br(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function br(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Ch=0;const yr=new k;class ke extends di{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Fn,i=Fn,r=Be,a=ai,l=dn,o=en,c=ke.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ds(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yr).x}get height(){return this.source.getSize(yr).y}get depth(){return this.source.getSize(yr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=ql;ke.DEFAULT_ANISOTROPY=1;const mo=class mo{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const o=t.elements,c=o[0],h=o[4],u=o[8],f=o[1],p=o[5],m=o[9],x=o[2],g=o[6],d=o[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,_=(p+1)/2,b=(d+1)/2,T=(h+f)/4,C=(u+x)/4,M=(m+g)/4;return E>_&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=C/n):_>b?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=M/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mo.prototype.isVector4=!0;let ge=mo;class Ph extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new ke(i),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new no(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tc extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const sr=class sr{constructor(t,e,n,i,r,a,l,o,c,h,u,f,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,l,o,c,h,u,f,p,m,x,g)}set(t,e,n,i,r,a,l,o,c,h,u,f,p,m,x,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,m=l*h,x=l*u;e[0]=o*h,e[4]=-o*u,e[8]=c,e[1]=p+m*c,e[5]=f-x*c,e[9]=-l*o,e[2]=x-f*c,e[6]=m+p*c,e[10]=a*o}else if(t.order==="YXZ"){const f=o*h,p=o*u,m=c*h,x=c*u;e[0]=f+x*l,e[4]=m*l-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-l,e[2]=p*l-m,e[6]=x+f*l,e[10]=a*o}else if(t.order==="ZXY"){const f=o*h,p=o*u,m=c*h,x=c*u;e[0]=f-x*l,e[4]=-a*u,e[8]=m+p*l,e[1]=p+m*l,e[5]=a*h,e[9]=x-f*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){const f=a*h,p=a*u,m=l*h,x=l*u;e[0]=o*h,e[4]=m*c-p,e[8]=f*c+x,e[1]=o*u,e[5]=x*c+f,e[9]=p*c-m,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){const f=a*o,p=a*c,m=l*o,x=l*c;e[0]=o*h,e[4]=x-f*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-l*h,e[2]=-c*h,e[6]=p*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*o,p=a*c,m=l*o,x=l*c;e[0]=o*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=l*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lh,t,Dh)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Wn.crossVectors(n,Je),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Wn.crossVectors(n,Je)),Wn.normalize(),vs.crossVectors(Je,Wn),i[0]=Wn.x,i[4]=vs.x,i[8]=Je.x,i[1]=Wn.y,i[5]=vs.y,i[9]=Je.y,i[2]=Wn.z,i[6]=vs.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],S=n[3],E=n[7],_=n[11],b=n[15],T=i[0],C=i[4],M=i[8],A=i[12],I=i[1],L=i[5],P=i[9],D=i[13],U=i[2],F=i[6],Y=i[10],G=i[14],K=i[3],V=i[7],q=i[11],Z=i[15];return r[0]=a*T+l*I+o*U+c*K,r[4]=a*C+l*L+o*F+c*V,r[8]=a*M+l*P+o*Y+c*q,r[12]=a*A+l*D+o*G+c*Z,r[1]=h*T+u*I+f*U+p*K,r[5]=h*C+u*L+f*F+p*V,r[9]=h*M+u*P+f*Y+p*q,r[13]=h*A+u*D+f*G+p*Z,r[2]=m*T+x*I+g*U+d*K,r[6]=m*C+x*L+g*F+d*V,r[10]=m*M+x*P+g*Y+d*q,r[14]=m*A+x*D+g*G+d*Z,r[3]=S*T+E*I+_*U+b*K,r[7]=S*C+E*L+_*F+b*V,r[11]=S*M+E*P+_*Y+b*q,r[15]=S*A+E*D+_*G+b*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],l=t[5],o=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15],S=o*p-c*f,E=l*p-c*u,_=l*f-o*u,b=a*p-c*h,T=a*f-o*h,C=a*u-l*h;return e*(x*S-g*E+d*_)-n*(m*S-g*b+d*T)+i*(m*E-x*b+d*C)-r*(m*_-x*T+g*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],l=t[9],o=t[2],c=t[6],h=t[10];return e*(a*h-l*c)-n*(r*h-l*o)+i*(r*c-a*o)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],S=e*l-n*a,E=e*o-i*a,_=e*c-r*a,b=n*o-i*l,T=n*c-r*l,C=i*c-r*o,M=h*x-u*m,A=h*g-f*m,I=h*d-p*m,L=u*g-f*x,P=u*d-p*x,D=f*d-p*g,U=S*D-E*P+_*L+b*I-T*A+C*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return t[0]=(l*D-o*P+c*L)*F,t[1]=(i*P-n*D-r*L)*F,t[2]=(x*C-g*T+d*b)*F,t[3]=(f*T-u*C-p*b)*F,t[4]=(o*I-a*D-c*A)*F,t[5]=(e*D-i*I+r*A)*F,t[6]=(g*_-m*C-d*E)*F,t[7]=(h*C-f*_+p*E)*F,t[8]=(a*P-l*I+c*M)*F,t[9]=(n*I-e*P-r*M)*F,t[10]=(m*T-x*_+d*S)*F,t[11]=(u*_-h*T-p*S)*F,t[12]=(l*A-a*L-o*M)*F,t[13]=(e*L-n*A+i*M)*F,t[14]=(x*E-m*b-g*S)*F,t[15]=(h*b-u*E+f*S)*F,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,c=r*a,h=r*l;return this.set(c*a+n,c*l-i*o,c*o+i*l,0,c*l+i*o,h*l+n,h*o-i*a,0,c*o-i*l,h*o+i*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,c=r+r,h=a+a,u=l+l,f=r*c,p=r*h,m=r*u,x=a*h,g=a*u,d=l*u,S=o*c,E=o*h,_=o*u,b=n.x,T=n.y,C=n.z;return i[0]=(1-(x+d))*b,i[1]=(p+_)*b,i[2]=(m-E)*b,i[3]=0,i[4]=(p-_)*T,i[5]=(1-(f+d))*T,i[6]=(g+S)*T,i[7]=0,i[8]=(m+E)*C,i[9]=(g-S)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vi.set(i[0],i[1],i[2]).length();const l=vi.set(i[4],i[5],i[6]).length(),o=vi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),on.copy(this);const c=1/a,h=1/l,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,i,r,a,l=En,o=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let m,x;if(o)m=r/(a-r),x=a*r/(a-r);else if(l===En)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===hs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,l=En,o=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i);let m,x;if(o)m=1/(a-r),x=a/(a-r);else if(l===En)m=-2/(a-r),x=-(a+r)/(a-r);else if(l===hs)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sr.prototype.isMatrix4=!0;let fe=sr;const vi=new k,on=new fe,Lh=new k(0,0,0),Dh=new k(1,1,1),Wn=new k,vs=new k,Je=new k,Oo=new fe,zo=new Ze;class wn{constructor(t=0,e=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],l=i[8],o=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zo.setFromEuler(this),this.setFromQuaternion(zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uh=0;const Bo=new k,Mi=new Ze,Cn=new fe,Ms=new k,Xi=new k,Nh=new k,Fh=new Ze,ko=new k(1,0,0),Go=new k(0,1,0),Ho=new k(0,0,1),Vo={type:"added"},Oh={type:"removed"},Si={type:"childadded",child:null},Er={type:"childremoved",child:null};class Ee extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new k,e=new wn,n=new Ze,i=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return Bo.copy(t).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Xi,Ms,this.up):Cn.lookAt(Ms,Xi,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vo),Si.child=t,this.dispatchEvent(Si),Si.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oh),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vo),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const u=o[c];r(t.shapes,u)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(t.materials,this.material[o]));i.material=l}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];i.animations.push(r(t.animations,o))}}if(e){const l=a(t.geometries),o=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(l){const o=[];for(const c in l){const h=l[c];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new k(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class De extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zh={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(zh)))}return l!==null&&(l.visible=i!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Ar(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Th(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ar(a,r,t+1/3),this.g=Ar(a,r,t),this.b=Ar(a,r,t-1/3)}return $t.colorSpaceToWorking(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return $t.workingToColorSpace(Oe.copy(this),t),Math.round(Kt(Oe.r*255,0,255))*65536+Math.round(Kt(Oe.g*255,0,255))*256+Math.round(Kt(Oe.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,r=Oe.b,a=Math.max(n,i,r),l=Math.min(n,i,r);let o,c;const h=(l+a)/2;if(l===a)o=0,c=0;else{const u=a-l;switch(c=h<=.5?u/(a+l):u/(2-a-l),a){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=be){$t.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Ss);const n=vr(Xn.h,Ss.h,e),i=vr(Xn.s,Ss.s,e),r=vr(Xn.l,Ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ht;Ht.NAMES=nc;class io{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new io(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bh extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new k,Pn=new k,wr=new k,In=new k,bi=new k,yi=new k,Wo=new k,Rr=new k,Cr=new k,Pr=new k,Ir=new ge,Lr=new ge,Dr=new ge;class fn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Pn.subVectors(n,e),wr.subVectors(t,e);const a=ln.dot(ln),l=ln.dot(Pn),o=ln.dot(wr),c=Pn.dot(Pn),h=Pn.dot(wr),u=a*c-l*l;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*o-l*h)*f,m=(a*h-l*o)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,i,r,a,l,o){return this.getBarycoord(t,e,n,i,In)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,In.x),o.addScaledVector(a,In.y),o.addScaledVector(l,In.z),o)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ir.setScalar(0),Lr.setScalar(0),Dr.setScalar(0),Ir.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Dr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ir,r.x),a.addScaledVector(Lr,r.y),a.addScaledVector(Dr,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Pn.subVectors(t,e),ln.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,l;bi.subVectors(i,n),yi.subVectors(r,n),Rr.subVectors(t,n);const o=bi.dot(Rr),c=yi.dot(Rr);if(o<=0&&c<=0)return e.copy(n);Cr.subVectors(t,i);const h=bi.dot(Cr),u=yi.dot(Cr);if(h>=0&&u<=h)return e.copy(i);const f=o*u-h*c;if(f<=0&&o>=0&&h<=0)return a=o/(o-h),e.copy(n).addScaledVector(bi,a);Pr.subVectors(t,r);const p=bi.dot(Pr),m=yi.dot(Pr);if(m>=0&&p<=m)return e.copy(r);const x=p*c-o*m;if(x<=0&&c>=0&&m<=0)return l=c/(c-m),e.copy(n).addScaledVector(yi,l);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Wo.subVectors(r,i),l=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(Wo,l);const d=1/(g+x+f);return a=x*d,l=f*d,e.copy(n).addScaledVector(bi,a).addScaledVector(yi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),ys.subVectors(this.max,qi),Ei.subVectors(t.a,qi),Ti.subVectors(t.b,qi),Ai.subVectors(t.c,qi),qn.subVectors(Ti,Ei),Yn.subVectors(Ai,Ti),ti.subVectors(Ei,Ai);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ti.z,ti.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ti.z,0,-ti.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ti.y,ti.x,0];return!Ur(e,Ei,Ti,Ai,ys)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,Ei,Ti,Ai,ys))?!1:(Es.crossVectors(qn,Yn),e=[Es.x,Es.y,Es.z],Ur(e,Ei,Ti,Ai,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,bs=new pi,Ei=new k,Ti=new k,Ai=new k,qn=new k,Yn=new k,ti=new k,qi=new k,ys=new k,Es=new k,ei=new k;function Ur(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ei.fromArray(s,r);const l=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),o=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>l)return!1}return!0}const Se=new k,Ts=new Ot;let kh=0;class gn extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mh,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ic extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Gh=new pi,Yi=new k,Nr=new k;class ps{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(Nr)),this.expandByPoint(Yi.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Hh=0;const sn=new fe,Fr=new Ee,wi=new k,Qe=new pi,$i=new pi,Re=new k;class We extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?sc:ic)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];$i.setFromBufferAttribute(l),this.morphTargetsRelative?(Re.addVectors(Qe.min,$i.min),Qe.expandByPoint(Re),Re.addVectors(Qe.max,$i.max),Qe.expandByPoint(Re)):(Qe.expandByPoint($i.min),Qe.expandByPoint($i.max))}Qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],o=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Re.fromBufferAttribute(l,c),o&&(wi.fromBufferAttribute(t,c),Re.add(wi)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const l=[],o=[];for(let M=0;M<n.count;M++)l[M]=new k,o[M]=new k;const c=new k,h=new k,u=new k,f=new Ot,p=new Ot,m=new Ot,x=new k,g=new k;function d(M,A,I){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,I),h.sub(c),u.sub(c),p.sub(f),m.sub(f);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(L),l[M].add(x),l[A].add(x),l[I].add(x),o[M].add(g),o[A].add(g),o[I].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let M=0,A=S.length;M<A;++M){const I=S[M],L=I.start,P=I.count;for(let D=L,U=L+P;D<U;D+=3)d(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const E=new k,_=new k,b=new k,T=new k;function C(M){b.fromBufferAttribute(i,M),T.copy(b);const A=l[M];E.copy(A),E.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(T,A);const L=_.dot(o[M])<0?-1:1;a.setXYZW(M,E.x,E.y,E.z,L)}for(let M=0,A=S.length;M<A;++M){const I=S[M],L=I.start,P=I.count;for(let D=L,U=L+P;D<U;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,a=new k,l=new k,o=new k,c=new k,h=new k,u=new k;if(t)for(let f=0,p=t.count;f<p;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),l.fromBufferAttribute(n,m),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.add(h),o.add(h),c.add(h),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(l,o){const c=l.array,h=l.itemSize,u=l.normalized,f=new c.constructor(o.length*h);let p=0,m=0;for(let x=0,g=o.length;x<g;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new gn(f,h,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,i=this.attributes;for(const l in i){const o=i[l],c=t(o,n);e.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);o.push(p)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const c=n[o];t.data.attributes[o]=c.toJSON(t.data)}const i={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[o]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Or=new k,Vh=new k,Wh=new zt;class Kn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Or.subVectors(n,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Or),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wh.getNormalMatrix(t),i=this.coplanarPoint(Or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Xh=0;class Hi extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=as,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=zl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Dn=new k,zr=new k,As=new k,ws=new k;class qh{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),ws.copy(this.origin).sub(zr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),l=ws.dot(this.direction),o=-ws.dot(As),c=ws.lengthSq(),h=Math.abs(1-a*a);let u,f,p,m;if(h>0)if(u=a*o-l,f=a*l-o,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,p=u*(u+a*f+2*l)+f*(a*u+f+2*o)+c}else f=r,u=Math.max(0,-(a*f+l)),p=-u*u+f*(f+2*o)+c;else f=-r,u=Math.max(0,-(a*f+l)),p=-u*u+f*(f+2*o)+c;else f<=-m?(u=Math.max(0,-(-a*r+l)),f=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+f*(f+2*o)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+c):(u=Math.max(0,-(a*r+l)),f=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+f*(f+2*o)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+l)),p=-u*u+f*(f+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zr).addScaledVector(As,f),p}intersectSphere(t,e){if(t.radius<0)return null;Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,l,o;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(l=(t.min.z-f.z)*u,o=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,o=(t.min.z-f.z)*u),n>o||l>i)||((l>n||n!==n)&&(n=l),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,h=l.z,u=t.x-a.x,f=t.y-a.y,p=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,d=n.x-a.x,S=n.y-a.y,E=n.z-a.z,_=Math.abs(o),b=Math.abs(c),T=Math.abs(h);let C,M,A,I,L,P,D,U,F,Y,G,K;if(_>=b&&_>=T?(A=o,P=u,F=m,K=d,o>=0?(C=c,M=h,I=f,L=p,D=x,U=g,Y=S,G=E):(C=h,M=c,I=p,L=f,D=g,U=x,Y=E,G=S)):b>=T?(A=c,P=f,F=x,K=S,c>=0?(C=h,M=o,I=p,L=u,D=g,U=m,Y=E,G=d):(C=o,M=h,I=u,L=p,D=m,U=g,Y=d,G=E)):(A=h,P=p,F=g,K=E,h>=0?(C=o,M=c,I=u,L=f,D=m,U=x,Y=d,G=S):(C=c,M=o,I=f,L=u,D=x,U=m,Y=S,G=d)),A===0)return null;const V=C/A,q=M/A,Z=1/A,mt=I-V*P,Mt=L-q*P,re=D-V*F,qt=U-q*F,Yt=Y-V*K,w=G-q*K,N=Yt*qt-w*re,Q=mt*w-Mt*Yt,rt=re*Mt-qt*mt;if(i){if(N<0||Q<0||rt<0)return null}else if((N<0||Q<0||rt<0)&&(N>0||Q>0||rt>0))return null;const it=N+Q+rt;if(it===0)return null;const ot=Z*(N*P+Q*F+rt*K);return(it>0?ot<0:ot>0)?null:this.at(ot/it,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xo=new fe,ni=new qh,Rs=new ps,qo=new k,Cs=new k,Ps=new k,Is=new k,Br=new k,Ls=new k,Yo=new k,Ds=new k;class me extends Ee{constructor(t=new We,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const l=this.morphTargetInfluences;if(r&&l){Ls.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const h=l[o],u=r[o];h!==0&&(Br.fromBufferAttribute(u,t),a?Ls.addScaledVector(Br,h):Ls.addScaledVector(Br.sub(e),h))}e.add(Ls)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Rs.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Rs,qo)===null||ni.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Xo.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Xo),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const g=f[m],d=a[g.materialIndex],S=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,b=E;_<b;_+=3){const T=l.getX(_),C=l.getX(_+1),M=l.getX(_+2);i=Us(this,d,t,n,c,h,u,T,C,M),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const S=l.getX(g),E=l.getX(g+1),_=l.getX(g+2);i=Us(this,a,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const g=f[m],d=a[g.materialIndex],S=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=S,b=E;_<b;_+=3){const T=_,C=_+1,M=_+2;i=Us(this,d,t,n,c,h,u,T,C,M),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const S=g,E=g+1,_=g+2;i=Us(this,a,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Yh(s,t,e,n,i,r,a,l){let o;if(t.side===Ke?o=n.intersectTriangle(a,r,i,!0,l):o=n.intersectTriangle(i,r,a,t.side===ci,l),o===null)return null;Ds.copy(l),Ds.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:s}}function Us(s,t,e,n,i,r,a,l,o,c){s.getVertexPosition(l,Cs),s.getVertexPosition(o,Ps),s.getVertexPosition(c,Is);const h=Yh(s,t,e,n,Cs,Ps,Is,Yo);if(h){const u=new k;fn.getBarycoord(Yo,Cs,Ps,Is,u),i&&(h.uv=fn.getInterpolatedAttribute(i,l,o,c,u,new Ot)),r&&(h.uv1=fn.getInterpolatedAttribute(r,l,o,c,u,new Ot)),a&&(h.normal=fn.getInterpolatedAttribute(a,l,o,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:o,c,normal:new k,materialIndex:0};fn.getNormal(Cs,Ps,Is,f.normal),h.face=f,h.barycoord=u}return h}class rc extends ke{constructor(t=null,e=1,n=1,i,r,a,l,o,c=de,h=de,u,f){super(null,a,l,o,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er extends gn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ri=new fe,$o=new fe,Ns=[],Ko=new pi,$h=new fe,Ki=new me,Zi=new ps;class ac extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$h)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),Ko.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Ko)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),Zi.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(Zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=i[a+l]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),t.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ri),$o.multiplyMatrices(n,Ri),Ki.matrixWorld=$o,Ki.raycast(t,Ns);for(let a=0,l=Ns.length;a<l;a++){const o=Ns[a];o.instanceId=r,o.object=this,e.push(o)}Ns.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(i*this.count),i,this.count,Za,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=i*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ii=new ps,Kh=new Ot(.5,.5),Fs=new k;class so{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){const i=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],S=r[12],E=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-a,p-h,d-m,b-S).normalize(),i[1].setComponents(c+a,p+h,d+m,b+S).normalize(),i[2].setComponents(c+l,p+u,d+x,b+E).normalize(),i[3].setComponents(c-l,p-u,d-x,b-E).normalize(),n)i[4].setComponents(o,f,g,_).normalize(),i[5].setComponents(c-o,p-f,d-g,b-_).normalize();else if(i[4].setComponents(c-o,p-f,d-g,b-_).normalize(),e===En)i[5].setComponents(c+o,p+f,d+g,b+_).normalize();else if(e===hs)i[5].setComponents(o,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){ii.center.set(0,0,0);const e=Kh.distanceTo(t.center);return ii.radius=.7071067811865476+e,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oc extends ke{constructor(t=[],e=hi,n,i,r,a,l,o,c,h){super(t,e,n,i,r,a,l,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mi extends ke{constructor(t,e,n,i,r,a,l,o,c){super(t,e,n,i,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends ke{constructor(t,e,n=Tn,i,r,a,l=de,o=de,c,h=kn,u=1){if(h!==kn&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,a,l,o,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new no(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Zh extends fs{constructor(t,e=Tn,n=hi,i,r,a=de,l=de,o,c=kn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,l,o,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lc extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ye extends We{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const l=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],h=[],u=[];let f=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function m(x,g,d,S,E,_,b,T,C,M,A){const I=_/C,L=b/M,P=_/2,D=b/2,U=T/2,F=C+1,Y=M+1;let G=0,K=0;const V=new k;for(let q=0;q<Y;q++){const Z=q*L-D;for(let mt=0;mt<F;mt++){const Mt=mt*I-P;V[x]=Mt*S,V[g]=Z*E,V[d]=U,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[d]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(mt/C),u.push(1-q/M),G+=1}}for(let q=0;q<M;q++)for(let Z=0;Z<C;Z++){const mt=f+Z+F*q,Mt=f+Z+F*(q+1),re=f+(Z+1)+F*(q+1),qt=f+(Z+1)+F*q;o.push(mt,Mt,qt),o.push(Mt,re,qt),K+=6}l.addGroup(p,K,A),p+=K,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jt extends We{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let m=0;const x=[],g=n/2;let d=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function S(){const _=new k,b=new k;let T=0;const C=(e-t)/n;for(let M=0;M<=r;M++){const A=[],I=M/r,L=I*(e-t)+t;for(let P=0;P<=i;P++){const D=P/i,U=D*o+l,F=Math.sin(U),Y=Math.cos(U);b.x=L*F,b.y=-I*n+g,b.z=L*Y,u.push(b.x,b.y,b.z),_.set(F,C,Y).normalize(),f.push(_.x,_.y,_.z),p.push(D,1-I),A.push(m++)}x.push(A)}for(let M=0;M<i;M++)for(let A=0;A<r;A++){const I=x[A][M],L=x[A+1][M],P=x[A+1][M+1],D=x[A][M+1];(t>0||A!==0)&&(h.push(I,L,D),T+=3),(e>0||A!==r-1)&&(h.push(L,P,D),T+=3)}c.addGroup(d,T,0),d+=T}function E(_){const b=m,T=new Ot,C=new k;let M=0;const A=_===!0?t:e,I=_===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,g*I,0),f.push(0,I,0),p.push(.5,.5),m++;const L=m;for(let P=0;P<=i;P++){const U=P/i*o+l,F=Math.cos(U),Y=Math.sin(U);C.x=A*Y,C.y=g*I,C.z=A*F,u.push(C.x,C.y,C.z),f.push(0,I,0),T.x=F*.5+.5,T.y=Y*.5*I+.5,p.push(T.x,T.y),m++}for(let P=0;P<i;P++){const D=b+P,U=L+P;_===!0?h.push(U,U+1,D):h.push(U+1,U,D),M+=3}c.addGroup(d,M,_===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class or extends Jt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,l=Math.PI*2){super(0,t,e,n,i,r,a,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:l}}static fromJSON(t){return new or(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends We{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(i),c=l+1,h=o+1,u=t/l,f=e/o,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){const S=d*f-a;for(let E=0;E<c;E++){const _=E*u-r;m.push(_,-S,0),x.push(0,0,1),g.push(E/l),g.push(1-d/o)}}for(let d=0;d<o;d++)for(let S=0;S<l;S++){const E=S+c*d,_=S+c*(d+1),b=S+1+c*(d+1),T=S+1+c*d;p.push(E,_,T),p.push(_,b,T)}this.setIndex(p),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.widthSegments,t.heightSegments)}}class ro extends We{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const l=[],o=[],c=[],h=[];let u=t;const f=(e-t)/i,p=new k,m=new Ot;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const d=r+g/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),o.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){const g=x*(n+1);for(let d=0;d<n;d++){const S=d+g,E=S,_=S+n+1,b=S+n+2,T=S+1;l.push(E,_,T),l.push(_,b,T)}}this.setIndex(l),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lr extends We{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(a+l,Math.PI);let c=0;const h=[],u=new k,f=new k,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){const S=[],E=d/n,_=a+E*l,b=t*Math.cos(_),T=Math.sqrt(t*t-b*b);let C=0;d===0&&a===0?C=.5/e:d===n&&o===Math.PI&&(C=-.5/e);for(let M=0;M<=e;M++){const A=M/e,I=i+A*r;u.x=-T*Math.cos(I),u.y=b,u.z=T*Math.sin(I),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+C,1-E),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const E=h[d][S+1],_=h[d][S],b=h[d+1][S],T=h[d+1][S+1];(d!==0||a>0)&&p.push(E,_,T),(d!==n-1||o<Math.PI)&&p.push(_,b,T)}this.setIndex(p),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nr extends We{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:l},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],h=[],u=[],f=new k,p=new k,m=new k;for(let x=0;x<=n;x++){const g=a+x/n*l;for(let d=0;d<=i;d++){const S=d/i*r;p.x=(t+e*Math.cos(g))*Math.cos(S),p.y=(t+e*Math.cos(g))*Math.sin(S),p.z=e*Math.sin(g),c.push(p.x,p.y,p.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),m.subVectors(p,f).normalize(),h.push(m.x,m.y,m.z),u.push(d/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){const d=(i+1)*x+g-1,S=(i+1)*(x-1)+g-1,E=(i+1)*(x-1)+g,_=(i+1)*x+g;o.push(d,S,_),o.push(S,E,_)}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Gi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Zo(i))i.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Zo(i[0])){const r=[];for(let a=0,l=i.length;a<l;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=Gi(s[e]);for(const i in n)t[i]=n[i]}return t}function Zo(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Jh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Qh={clone:Gi,merge:He};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ef extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nf extends Hi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=rr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ys extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=rr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sf extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rf extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ao extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class af extends ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const kr=new fe,Jo=new k,Qo=new k;class hc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Jo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jo),Qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qo),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(kr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,l=i?i.w/r.y:1,o=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),e.multiply(kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Os=new k,zs=new Ze,Mn=new k;class fc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Os,zs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,zs,Mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Os,zs,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,zs,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new k,jo=new Ot,tl=new Ot;class tn extends fc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,jo,tl),e.subVectors(tl,jo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/o,e-=a.offsetY*n/c,i*=a.width/o,n*=a.height/c}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class of extends hc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gr extends ao{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new of}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class oo extends fc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,l=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=h*this.view.offsetY,o=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lf extends hc{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hr extends ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new lf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ci=-90,Pi=1;class cf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Ci,Pi,t,e);i.layers=this.layers,this.add(i);const r=new tn(Ci,Pi,t,e);r.layers=this.layers,this.add(r);const a=new tn(Ci,Pi,t,e);a.layers=this.layers,this.add(a);const l=new tn(Ci,Pi,t,e);l.layers=this.layers,this.add(l);const o=new tn(Ci,Pi,t,e);o.layers=this.layers,this.add(o);const c=new tn(Ci,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,l,o]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class hf extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const go=class go{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};go.prototype.isMatrix2=!0;let el=go;function nl(s,t,e,n){const i=ff(n);switch(e){case Jl:return s*t;case Za:return s*t/i.components*i.byteLength;case Ja:return s*t/i.components*i.byteLength;case fi:return s*t*2/i.components*i.byteLength;case Qa:return s*t*2/i.components*i.byteLength;case Ql:return s*t*3/i.components*i.byteLength;case dn:return s*t*4/i.components*i.byteLength;case ja:return s*t*4/i.components*i.byteLength;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:case pa:return Math.max(s,16)*Math.max(t,8)/4;case fa:case da:return Math.max(s,8)*Math.max(t,8)/2;case ma:case ga:case _a:case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xa:case Ks:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Na:case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case za:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Zs:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ff(s){switch(s){case en:case Yl:return{byteLength:1,components:1};case ls:case $l:case An:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case Tn:case Ya:case un:return{byteLength:4,components:1};case Kl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uc(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uf(s){const t=new WeakMap;function e(l,o){const c=l.array,h=l.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(o,f),s.bufferData(o,c,h),l.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,o,c){const h=o.array,u=o.updateRanges;if(s.bindBuffer(c,l),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){const m=u[f],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=t.get(l);o&&(s.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:i,remove:r,update:a}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,wf=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
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
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
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
#endif`,fu=`uniform sampler2D dfgLUT;
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
}`,uu=`
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
#endif`,du=`#if defined( RE_IndirectDiffuse )
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yu=`#if defined( USE_POINTS_UV )
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
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
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
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
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
#endif`,Ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qu=`float getShadowMask() {
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
}`,ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
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
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ld=`#ifdef USE_TRANSMISSION
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
}`,Md=`#if DEPTH_PACKING == 3200
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
}`,Sd=`#define DISTANCE
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
}`,bd=`#define DISTANCE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`uniform float scale;
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
}`,Ad=`uniform vec3 diffuse;
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
}`,wd=`#include <common>
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Cd=`#define LAMBERT
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
}`,Pd=`#define LAMBERT
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
}`,Id=`#define MATCAP
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
}`,Ld=`#define MATCAP
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
}`,Dd=`#define NORMAL
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
}`,Ud=`#define NORMAL
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
}`,Nd=`#define PHONG
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
}`,Fd=`#define PHONG
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
}`,Od=`#define STANDARD
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
}`,zd=`#define STANDARD
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
}`,Bd=`#define TOON
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
}`,kd=`#define TOON
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
}`,Gd=`uniform float size;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Wd=`uniform vec3 color;
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
}`,Xd=`uniform float rotation;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:df,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:xf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:bf,begin_vertex:yf,beginnormal_vertex:Ef,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:wf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:If,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:Uf,color_vertex:Nf,common:Ff,cube_uv_reflection_fragment:Of,defaultnormal_vertex:zf,displacementmap_pars_vertex:Bf,displacementmap_vertex:kf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:ru,envmap_vertex:Kf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Qf,fog_pars_fragment:jf,gradientmap_pars_fragment:tu,lightmap_pars_fragment:eu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:su,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:lu,lights_phong_pars_fragment:cu,lights_physical_fragment:hu,lights_physical_pars_fragment:fu,lights_fragment_begin:uu,lights_fragment_maps:du,lights_fragment_end:pu,lightprobes_pars_fragment:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:vu,map_fragment:Mu,map_pars_fragment:Su,map_particle_fragment:bu,map_particle_pars_fragment:yu,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:Au,morphcolor_vertex:wu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Cu,morphtarget_vertex:Pu,normal_fragment_begin:Iu,normal_fragment_maps:Lu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Ou,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:ku,opaque_fragment:Gu,packing:Hu,premultiplied_alpha_fragment:Vu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ju,shadowmask_pars_fragment:Qu,skinbase_vertex:ju,skinning_pars_vertex:td,skinning_vertex:ed,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:sd,tonemapping_fragment:rd,tonemapping_pars_fragment:ad,transmission_fragment:od,transmission_pars_fragment:ld,uv_pars_fragment:cd,uv_pars_vertex:hd,uv_vertex:fd,worldpos_vertex:ud,background_vert:dd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:gd,cube_vert:xd,cube_frag:_d,depth_vert:vd,depth_frag:Md,distance_vert:Sd,distance_frag:bd,equirect_vert:yd,equirect_frag:Ed,linedashed_vert:Td,linedashed_frag:Ad,meshbasic_vert:wd,meshbasic_frag:Rd,meshlambert_vert:Cd,meshlambert_frag:Pd,meshmatcap_vert:Id,meshmatcap_frag:Ld,meshnormal_vert:Dd,meshnormal_frag:Ud,meshphong_vert:Nd,meshphong_frag:Fd,meshphysical_vert:Od,meshphysical_frag:zd,meshtoon_vert:Bd,meshtoon_frag:kd,points_vert:Gd,points_frag:Hd,shadow_vert:Vd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:qd},pt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},yn={basic:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:He([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:He([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:He([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:He([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:He([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:He([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:He([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:He([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:He([pt.common,pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:He([pt.lights,pt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Bs={r:0,b:0,g:0},Yd=new fe,dc=new zt;dc.set(-1,0,0,0,1,0,0,0,1);function $d(s,t,e,n,i,r){const a=new Ht(0);let l=i===!0?0:1,o,c,h=null,u=0,f=null;function p(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const _=S.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(S){let E=!1;const _=p(S);_===null?g(a,l):_&&_.isColor&&(g(_,1),E=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,E){const _=p(E);_&&(_.isCubeTexture||_.mapping===ar)?(c===void 0&&(c=new me(new Ye(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Gi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dc),c.material.toneMapped=$t.getTransfer(_.colorSpace)!==se,(h!==_||u!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new me(new Ie(2,2),new Rn({name:"BackgroundMaterial",uniforms:Gi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,o.material.toneMapped=$t.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==s.toneMapping)&&(o.material.needsUpdate=!0,h=_,u=_.version,f=s.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null))}function g(S,E){S.getRGB(Bs,cc(s)),e.buffers.color.setClear(Bs.r,Bs.g,Bs.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:m,addToRenderList:x,dispose:d}}function Kd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function l(L,P,D,U,F){let Y=!1;const G=u(L,U,D,P);r!==G&&(r=G,c(r.object)),Y=p(L,U,D,F),Y&&m(L,U,D,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(L,P,D,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function o(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,P,D,U){const F=U.wireframe===!0;let Y=n[P.id];Y===void 0&&(Y={},n[P.id]=Y);const G=L.isInstancedMesh===!0?L.id:0;let K=Y[G];K===void 0&&(K={},Y[G]=K);let V=K[D.id];V===void 0&&(V={},K[D.id]=V);let q=V[F];return q===void 0&&(q=f(o()),V[F]=q),q}function f(L){const P=[],D=[],U=[];for(let F=0;F<e;F++)P[F]=0,D[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:L,attributes:{},index:null}}function p(L,P,D,U){const F=r.attributes,Y=P.attributes;let G=0;const K=D.getAttributes();for(const V in K)if(K[V].location>=0){const Z=F[V];let mt=Y[V];if(mt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor)),Z===void 0||Z.attribute!==mt||mt&&Z.data!==mt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function m(L,P,D,U){const F={},Y=P.attributes;let G=0;const K=D.getAttributes();for(const V in K)if(K[V].location>=0){let Z=Y[V];Z===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const mt={};mt.attribute=Z,Z&&Z.data&&(mt.data=Z.data),F[V]=mt,G++}r.attributes=F,r.attributesNum=G,r.index=U}function x(){const L=r.newAttributes;for(let P=0,D=L.length;P<D;P++)L[P]=0}function g(L){d(L,0)}function d(L,P){const D=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;D[L]=1,U[L]===0&&(s.enableVertexAttribArray(L),U[L]=1),F[L]!==P&&(s.vertexAttribDivisor(L,P),F[L]=P)}function S(){const L=r.newAttributes,P=r.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==L[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function E(L,P,D,U,F,Y,G){G===!0?s.vertexAttribIPointer(L,P,D,F,Y):s.vertexAttribPointer(L,P,D,U,F,Y)}function _(L,P,D,U){x();const F=U.attributes,Y=D.getAttributes(),G=P.defaultAttributeValues;for(const K in Y){const V=Y[K];if(V.location>=0){let q=F[K];if(q===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const Z=q.normalized,mt=q.itemSize,Mt=t.get(q);if(Mt===void 0)continue;const re=Mt.buffer,qt=Mt.type,Yt=Mt.bytesPerElement,w=qt===s.INT||qt===s.UNSIGNED_INT||q.gpuType===Ya;if(q.isInterleavedBufferAttribute){const N=q.data,Q=N.stride,rt=q.offset;if(N.isInstancedInterleavedBuffer){for(let it=0;it<V.locationSize;it++)d(V.location+it,N.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let it=0;it<V.locationSize;it++)g(V.location+it);s.bindBuffer(s.ARRAY_BUFFER,re);for(let it=0;it<V.locationSize;it++)E(V.location+it,mt/V.locationSize,qt,Z,Q*Yt,(rt+mt/V.locationSize*it)*Yt,w)}else{if(q.isInstancedBufferAttribute){for(let N=0;N<V.locationSize;N++)d(V.location+N,q.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let N=0;N<V.locationSize;N++)g(V.location+N);s.bindBuffer(s.ARRAY_BUFFER,re);for(let N=0;N<V.locationSize;N++)E(V.location+N,mt/V.locationSize,qt,Z,mt*Yt,mt/V.locationSize*N*Yt,w)}}else if(G!==void 0){const Z=G[K];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(V.location,Z);break;case 3:s.vertexAttrib3fv(V.location,Z);break;case 4:s.vertexAttrib4fv(V.location,Z);break;default:s.vertexAttrib1fv(V.location,Z)}}}}S()}function b(){A();for(const L in n){const P=n[L];for(const D in P){const U=P[D];for(const F in U){const Y=U[F];for(const G in Y)h(Y[G].object),delete Y[G];delete U[F]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const P=n[L.id];for(const D in P){const U=P[D];for(const F in U){const Y=U[F];for(const G in Y)h(Y[G].object),delete Y[G];delete U[F]}}delete n[L.id]}function C(L){for(const P in n){const D=n[P];for(const U in D){const F=D[U];if(F[L.id]===void 0)continue;const Y=F[L.id];for(const G in Y)h(Y[G].object),delete Y[G];delete F[L.id]}}}function M(L){for(const P in n){const D=n[P],U=L.isInstancedMesh===!0?L.id:0,F=D[U];if(F!==void 0){for(const Y in F){const G=F[Y];for(const K in G)h(G[K].object),delete G[K];delete F[Y]}delete D[U],Object.keys(D).length===0&&delete n[P]}}}function A(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:A,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function Zd(s,t,e){let n;function i(o){n=o}function r(o,c){s.drawArrays(n,o,c),e.update(c,n,1)}function a(o,c,h){h!==0&&(s.drawArraysInstanced(n,o,c,h),e.update(c,n,h))}function l(o,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Jd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==dn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const M=C===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==en&&C!==un&&!M&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function o(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=o(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:T}}function Qd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Kn,l=new zt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const S=r?0:n,E=S*4;let _=d.clippingState||null;o.value=_,_=h(m,f,E,p);for(let b=0;b!==E;++b)_[b]=e[b];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=o.value,m!==!0||g===null){const d=p+x*4,S=f.matrixWorldInverse;l.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,_=p;E!==x;++E,_+=4)a.copy(u[E]).applyMatrix4(S,l),a.normal.toArray(g,_),g[_+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const Fi=4,jd=6,t0=20,e0=256,Ji=new oo,il=new Ht;let Vr=null,Wr=0,Xr=0,qr=!1;const n0=new k,si=new k;class sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:l=n0}=r;Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,l),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vr,Wr,Xr),this._renderer.xr.enabled=qr,t.scissorTest=!1,Ii(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:An,format:dn,colorSpace:Qs,depthBuffer:!1},i=rl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=i0(r)),this._blurMaterial=r0(r,t,e),this._ggxMaterial=s0(r,t,e)}return i}_compileMaterial(t){const e=new me(new We,t);this._renderer.compile(e,Ji)}_sceneToCubeUV(t,e,n,i,r){const o=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(il),u.toneMapping=pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new Ye,new Ve({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let d=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,d=!0):(g.color.copy(il),d=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(o.up.set(0,c[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+h[E],r.y,r.z)):_===1?(o.up.set(0,0,c[E]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+h[E],r.z)):(o.up.set(0,c[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+h[E]));const b=this._cubeSize;Ii(i,_*b,E>2?b:0,b,b),u.setRenderTarget(i),d&&u.render(x,o),u.render(t,o)}u.toneMapping=p,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hi||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const l=r.uniforms;l.envMap.value=t;const o=this._cubeSize;Ii(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,Ji)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const o=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,p=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Fi?n-m+Fi:0),d=4*(this._cubeSize-x);o.envMap.value=t.texture,o.roughness.value=p,o.mipInt.value=m-e,Ii(r,g,d,3*x,2*x),i.setRenderTarget(r),i.render(l,Ji),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=m-n,Ii(t,g,d,3*x,2*x),i.setRenderTarget(t),i.render(l,Ji)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[i];o.material=l;const c=l.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-Fi?i-this._lodMax+Fi:0),f=4*(this._cubeSize-h);Ii(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(o,Ji)}}function i0(s){const t=[],e=[];let n=s;const i=s-Fi+1+jd;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const l=1/(a-2),o=-l,c=1+l,h=[o,o,c,o,c,c,o,o,c,c,o,c],u=6,f=6,p=3,m=new Float32Array(p*f*u),x=new Float32Array(p*f*u);for(let d=0;d<u;d++){const S=d%3*2/3-1,E=d>2?0:-1,_=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];m.set(_,p*f*d);for(let b=0;b<f;b++){const T=h[b*2]*2-1,C=h[b*2+1]*2-1;d===0?si.set(1,C,T):d===1?si.set(-T,1,-C):d===2?si.set(-T,C,1):d===3?si.set(-1,C,-T):d===4?si.set(-T,-1,C):si.set(T,C,-1),si.toArray(x,(d*f+b)*p)}}const g=new We;g.setAttribute("position",new gn(m,p)),g.setAttribute("outputDirection",new gn(x,p)),e.push(new me(g,null)),n>Fi&&n--}return{lodMeshes:e,sizeLods:t}}function rl(s,t,e){const n=new mn(s,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function s0(s,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cr(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function r0(s,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:t0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cr(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function al(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cr(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function ol(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function cr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pc extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new oc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:On});r.uniforms.tEquirect.value=e;const a=new me(i,r),l=e.minFilter;return e.minFilter===ai&&(e.minFilter=Be),new cf(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function a0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===pr||p===mr)if(t.has(f)){const m=t.get(f).texture;return l(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new pc(m.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,m=p===pr||p===mr,x=p===hi||p===Bi;if(m||x){let g=e.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new sl(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return m&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new sl(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function l(f,p){return p===pr?f.mapping=hi:p===mr&&(f.mapping=Bi),f}function o(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function o0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Oi("WebGLRenderer: "+n+" extension not supported."),i}}}function l0(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function o(u){const f=u.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(p!==null){const S=p.array;x=p.version;for(let E=0,_=S.length;E<_;E+=3){const b=S[E+0],T=S[E+1],C=S[E+2];f.push(b,T,T,C,C,b)}}else{const S=m.array;x=m.version;for(let E=0,_=S.length/3-1;E<_;E+=3){const b=E+0,T=E+1,C=E+2;f.push(b,T,T,C,C,b)}}const g=new(m.count>=65535?sc:ic)(f,1);g.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,g)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:l,update:o,getWireframeAttribute:h}}function c0(s,t,e){let n;function i(u){n=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function o(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,u*a,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let x=0;for(let g=0;g<p;g++)x+=f[g];e.update(x,n,1)}this.setMode=i,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function h0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=l*(r/3);break;case s.LINES:e.lines+=l*(r/2);break;case s.LINE_STRIP:e.lines+=l*(r-1);break;case s.LINE_LOOP:e.lines+=l*r;break;case s.POINTS:e.points+=l*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function f0(s,t,e){const n=new WeakMap,i=new ge;function r(a,l,o){const c=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(l);if(f===void 0||f.count!==u){let I=function(){M.dispose(),n.delete(l),l.removeEventListener("dispose",I)};var p=I;f!==void 0&&f.texture.dispose();const m=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],S=l.morphAttributes.normal||[],E=l.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let b=l.attributes.position.count*_,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*T*4*u),M=new tc(C,b,T,u);M.type=un,M.needsUpdate=!0;const A=_*4;for(let L=0;L<u;L++){const P=d[L],D=S[L],U=E[L],F=b*T*4*L;for(let Y=0;Y<P.count;Y++){const G=Y*A;m===!0&&(i.fromBufferAttribute(P,Y),C[F+G+0]=i.x,C[F+G+1]=i.y,C[F+G+2]=i.z,C[F+G+3]=0),x===!0&&(i.fromBufferAttribute(D,Y),C[F+G+4]=i.x,C[F+G+5]=i.y,C[F+G+6]=i.z,C[F+G+7]=0),g===!0&&(i.fromBufferAttribute(U,Y),C[F+G+8]=i.x,C[F+G+9]=i.y,C[F+G+10]=i.z,C[F+G+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:M,size:new Ot(b,T)},n.set(l,f),l.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=l.morphTargetsRelative?1:1-m;o.getUniforms().setValue(s,"morphTargetBaseInfluence",x),o.getUniforms().setValue(s,"morphTargetInfluences",c)}o.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function u0(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function l(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}const d0={[Bl]:"LINEAR_TONE_MAPPING",[kl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[Hl]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Xl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function p0(s,t,e,n,i,r){const a=new mn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null;const c=new We;c.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xe([0,2,0,0,2,0],2));const h=new ef({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new me(c,h),f=new oo(-1,1,1,-1,0,1);let p=null,m=null,x=!1,g,d=null,S=[],E=!1;this.setSize=function(_,b){a.setSize(_,b),l!==null&&l.setSize(_,b),o!==null&&o.setSize(_,b);for(let T=0;T<S.length;T++){const C=S[T];C.setSize&&C.setSize(_,b)}},this.setEffects=function(_){S=_,E=S.length>0&&S[0].isRenderPass===!0;const b=a.width,T=a.height;S.length>0&&l===null&&(l=new mn(b,T,{type:An,depthBuffer:!1,stencilBuffer:!1}),o=new mn(b,T,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const M=S[C];M.setSize&&M.setSize(b,T)}},this.begin=function(_,b){if(x||_.toneMapping===pn&&S.length===0)return!1;if(d=b,b!==null){const T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return E===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=pn,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=g,x=!0;let T=a,C=l;for(let M=0;M<S.length;M++){const A=S[M];A.enabled!==!1&&(A.render(_,C,T,b),A.needsSwap!==!1&&(T=C,C=C===l?o:l))}if(p!==_.outputColorSpace||m!==_.toneMapping){p=_.outputColorSpace,m=_.toneMapping,h.defines={},$t.getTransfer(p)===se&&(h.defines.SRGB_TRANSFER="");const M=d0[m];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(d),_.render(u,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),h.dispose()}}const mc=new ke,Ha=new fs(1,1),gc=new tc,xc=new Ih,_c=new oc,ll=[],cl=[],hl=new Float32Array(16),fl=new Float32Array(9),ul=new Float32Array(4);function Vi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,s[a].toArray(r,l)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function hr(s,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function m0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function g0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function x0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function _0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function v0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;ul.set(n),s.uniformMatrix2fv(this.addr,!1,ul),Ae(e,n)}}function M0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;fl.set(n),s.uniformMatrix3fv(this.addr,!1,fl),Ae(e,n)}}function S0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),Ae(e,n)}}function b0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function T0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function A0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function w0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function R0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function C0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function P0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ha.compareFunction=e.isReversedDepthBuffer()?eo:to,r=Ha):r=mc,e.setTexture2D(t||r,i)}function I0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xc,i)}function L0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_c,i)}function D0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gc,i)}function U0(s){switch(s){case 5126:return m0;case 35664:return g0;case 35665:return x0;case 35666:return _0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return b0;case 35667:case 35671:return y0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return w0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}}function N0(s,t){s.uniform1fv(this.addr,t)}function F0(s,t){const e=Vi(t,this.size,2);s.uniform2fv(this.addr,e)}function O0(s,t){const e=Vi(t,this.size,3);s.uniform3fv(this.addr,e)}function z0(s,t){const e=Vi(t,this.size,4);s.uniform4fv(this.addr,e)}function B0(s,t){const e=Vi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function k0(s,t){const e=Vi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function G0(s,t){const e=Vi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function H0(s,t){s.uniform1iv(this.addr,t)}function V0(s,t){s.uniform2iv(this.addr,t)}function W0(s,t){s.uniform3iv(this.addr,t)}function X0(s,t){s.uniform4iv(this.addr,t)}function q0(s,t){s.uniform1uiv(this.addr,t)}function Y0(s,t){s.uniform2uiv(this.addr,t)}function $0(s,t){s.uniform3uiv(this.addr,t)}function K0(s,t){s.uniform4uiv(this.addr,t)}function Z0(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ha:a=mc;for(let l=0;l!==i;++l)e.setTexture2D(t[l]||a,r[l])}function J0(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||xc,r[a])}function Q0(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_c,r[a])}function j0(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||gc,r[a])}function tp(s){switch(s){case 5126:return N0;case 35664:return F0;case 35665:return O0;case 35666:return z0;case 35674:return B0;case 35675:return k0;case 35676:return G0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return $0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return j0}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}}class np{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tp(e.type)}}class ip{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const l=i[r];l.setValue(t,e[l.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function dl(s,t){s.seq.push(t),s.map[t.id]=t}function sp(s,t,e){const n=s.name,i=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),a=Yr.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===i){dl(e,c===void 0?new ep(l,s,t):new np(l,s,t));break}else{let u=e.map[l];u===void 0&&(u=new ip(l),dl(e,u)),e=u}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);sp(l,o,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function pl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const rp=37297;let ap=0;function op(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const ml=new zt;function lp(s){$t._getMatrix(ml,$t.workingColorSpace,s);const t=`mat3( ${ml.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case js:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+op(s.getShaderSource(t),l)}else return r}function cp(s,t){const e=lp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const hp={[Bl]:"Linear",[kl]:"Reinhard",[Gl]:"Cineon",[Hl]:"ACESFilmic",[Wl]:"AgX",[Xl]:"Neutral",[Vl]:"Custom"};function fp(s,t){const e=hp[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new k;function up(){$t.getLuminanceCoefficients(ks);const s=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function pp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:l}}return e}function rs(s){return s!==""}function xl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(s){return s.replace(gp,_p)}const xp=new Map;function _p(s,t){let e=Gt[t];if(e===void 0){const n=xp.get(t);if(n!==void 0)e=Gt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Va(e)}const vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(s){return s.replace(vp,Mp)}function Mp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ml(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Sp={[Gs]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function bp(s){return Sp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yp={[hi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function Ep(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":yp[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tp={[Bi]:"ENVMAP_MODE_REFRACTION"};function Ap(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wp={[rr]:"ENVMAP_BLENDING_MULTIPLY",[lh]:"ENVMAP_BLENDING_MIX",[ch]:"ENVMAP_BLENDING_ADD"};function Rp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wp[s.combine]||"ENVMAP_BLENDING_NONE"}function Cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const o=bp(e),c=Ep(e),h=Ap(e),u=Rp(e),f=Cp(e),p=dp(e),m=pp(r),x=i.createProgram();let g,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rs).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rs).join(`
`),d.length>0&&(d+=`
`)):(g=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),d=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==pn?fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,cp("linearToOutputTexel",e.outputColorSpace),up(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=Va(a),a=xl(a,e),a=_l(a,e),l=Va(l),l=xl(l,e),l=_l(l,e),a=vl(a),l=vl(l),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=S+g+a,_=S+d+l,b=pl(i,i.VERTEX_SHADER,E),T=pl(i,i.FRAGMENT_SHADER,_);i.attachShader(x,b),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(L){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(b)||"",U=i.getShaderInfoLog(T)||"",F=P.trim(),Y=D.trim(),G=U.trim();let K=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,T);else{const q=gl(i,b,"vertex"),Z=gl(i,T,"fragment");Qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+q+`
`+Z)}else F!==""?Ft("WebGLProgram: Program Info Log:",F):(Y===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:K,programLog:F,vertexShader:{log:Y,prefix:g},fragmentShader:{log:G,prefix:d}})}i.deleteShader(b),i.deleteShader(T),M=new $s(i,x),A=mp(i,x)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(x,rp)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ap++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let Ip=0;class Lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dp(t),e.set(t,n)),n}}class Dp{constructor(t){this.id=Ip++,this.code=t,this.usedTimes=0}}function Up(s){return s===fi||s===Ks||s===Zs}function Np(s,t,e,n,i,r){const a=new ec,l=new Lp,o=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return o.add(M),M===0?"uv":`uv${M}`}function x(M,A,I,L,P,D){const U=L.fog,F=P.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,K=t.get(M.envMap||Y,G),V=K&&K.mapping===ar?K.image.height:null,q=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Ft("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,mt=Z!==void 0?Z.length:0;let Mt=0;F.morphAttributes.position!==void 0&&(Mt=1),F.morphAttributes.normal!==void 0&&(Mt=2),F.morphAttributes.color!==void 0&&(Mt=3);let re,qt,Yt,w;if(q){const ce=yn[q];re=ce.vertexShader,qt=ce.fragmentShader}else{re=M.vertexShader,qt=M.fragmentShader;const ce=l.getVertexShaderStage(M),ee=l.getFragmentShaderStage(M);l.update(M,ce,ee),Yt=ce.id,w=ee.id}const N=s.getRenderTarget(),Q=s.state.buffers.depth.getReversed(),rt=P.isInstancedMesh===!0,it=P.isBatchedMesh===!0,ot=!!M.map,Ut=!!M.matcap,At=!!K,Dt=!!M.aoMap,Nt=!!M.lightMap,Pt=!!M.bumpMap&&M.wireframe===!1,te=!!M.normalMap,we=!!M.displacementMap,Xe=!!M.emissiveMap,pe=!!M.metalnessMap,ve=!!M.roughnessMap,B=M.anisotropy>0,Ue=M.clearcoat>0,ie=M.dispersion>0,R=M.retroreflectivity>0,v=M.iridescence>0,H=M.sheen>0,$=M.transmission>0,j=B&&!!M.anisotropyMap,at=Ue&&!!M.clearcoatMap,lt=Ue&&!!M.clearcoatNormalMap,tt=Ue&&!!M.clearcoatRoughnessMap,nt=v&&!!M.iridescenceMap,ct=v&&!!M.iridescenceThicknessMap,wt=H&&!!M.sheenColorMap,dt=H&&!!M.sheenRoughnessMap,ht=!!M.specularMap,Rt=!!M.specularColorMap,Lt=!!M.specularIntensityMap,Bt=$&&!!M.transmissionMap,z=$&&!!M.thicknessMap,ft=!!M.gradientMap,et=!!M.alphaMap,ut=M.alphaTest>0,_t=!!M.alphaHash,st=!!M.extensions;let Ct=pn;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ct=s.toneMapping);const Et={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:qt,defines:M.defines,customVertexShaderID:Yt,customFragmentShaderID:w,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:it,batchingColor:it&&P._colorsTexture!==null,instancing:rt,instancingColor:rt&&P.instanceColor!==null,instancingMorph:rt&&P.morphTexture!==null,outputColorSpace:N===null?s.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:Ut,envMap:At,envMapMode:At&&K.mapping,envMapCubeUVHeight:V,aoMap:Dt,lightMap:Nt,bumpMap:Pt,normalMap:te,displacementMap:we,emissiveMap:Xe,normalMapObjectSpace:te&&M.normalMapType===uh,normalMapTangentSpace:te&&M.normalMapType===Js,packedNormalMap:te&&M.normalMapType===Js&&Up(M.normalMap.format),metalnessMap:pe,roughnessMap:ve,anisotropy:B,anisotropyMap:j,clearcoat:Ue,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:tt,dispersion:ie,retroreflection:R,iridescence:v,iridescenceMap:nt,iridescenceThicknessMap:ct,sheen:H,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:ht,specularColorMap:Rt,specularIntensityMap:Lt,transmission:$,transmissionMap:Bt,thicknessMap:z,gradientMap:ft,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:ut,alphaHash:_t,combine:M.combine,mapUv:ot&&m(M.map.channel),aoMapUv:Dt&&m(M.aoMap.channel),lightMapUv:Nt&&m(M.lightMap.channel),bumpMapUv:Pt&&m(M.bumpMap.channel),normalMapUv:te&&m(M.normalMap.channel),displacementMapUv:we&&m(M.displacementMap.channel),emissiveMapUv:Xe&&m(M.emissiveMap.channel),metalnessMapUv:pe&&m(M.metalnessMap.channel),roughnessMapUv:ve&&m(M.roughnessMap.channel),anisotropyMapUv:j&&m(M.anisotropyMap.channel),clearcoatMapUv:at&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:lt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:dt&&m(M.sheenRoughnessMap.channel),specularMapUv:ht&&m(M.specularMap.channel),specularColorMapUv:Rt&&m(M.specularColorMap.channel),specularIntensityMapUv:Lt&&m(M.specularIntensityMap.channel),transmissionMapUv:Bt&&m(M.transmissionMap.channel),thicknessMapUv:z&&m(M.thicknessMap.channel),alphaMapUv:et&&m(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(te||B),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(ot||et),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&te===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Mt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ct,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&$t.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:Xe&&M.emissiveMap.isVideoTexture===!0&&$t.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$e,flipSided:M.side===Ke,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:st&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&M.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Et.vertexUv1s=o.has(1),Et.vertexUv2s=o.has(2),Et.vertexUv3s=o.has(3),o.clear(),Et}function g(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(d(A,M),S(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function d(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function E(M){const A=p[M.type];let I;if(A){const L=yn[A];I=Qh.clone(L.uniforms)}else I=M.uniforms;return I}function _(M,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new Pp(s,A,M,i),c.push(I),h.set(A,I)),I}function b(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function Fp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function n(a){s.delete(a)}function i(a,l,o){s.get(a)[l]=o}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Op(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Sl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function bl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,m,x,g,d){let S=s[t];return S===void 0?(S={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},s[t]=S):(S.id=f.id,S.object=f,S.geometry=p,S.material=m,S.materialVariant=a(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=g,S.group=d),t++,S}function o(f,p,m,x,g,d,S){S.reversedDepth===!0&&(g=-g);const E=l(f,p,m,x,g,d);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(f,p,m,x,g,d){const S=l(f,p,m,x,g,d);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):e.unshift(S)}function h(f,p){e.length>1&&e.sort(f||Op),n.length>1&&n.sort(p||Sl),i.length>1&&i.sort(p||Sl)}function u(){for(let f=t,p=s.length;f<p;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:h}}function zp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new bl,s.set(n,[a])):i>=r.length?(a=new bl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Ht};break;case"SpotLight":e={position:new k,direction:new k,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function kp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gp=0;function Hp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vp(s){const t=new Bp,e=kp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new fe,a=new fe;function l(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,S=0,E=0,_=0,b=0,T=0,C=0,M=0,A=0,I=0;c.sort(Hp);for(let P=0,D=c.length;P<D;P++){const U=c[P],F=U.color,Y=U.intensity,G=U.distance;let K=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===fi?K=U.shadow.map.texture:K=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*Y,u+=F.g*Y,f+=F.b*Y;else if(U.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(U.sh.coefficients[V],Y);I++}else if(U.isSunLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const q=U.shadow,Z=e.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[m]=Z,n.sunShadowMap[m]=K;const mt=q.getViewportCount();for(let Mt=0;Mt<mt;Mt++)n.sunShadowMatrix[x+Mt]=q.getMatrix(Mt),n.sunShadowCascade[x+Mt]=q._cascadeData[Mt];x+=mt,m++}n.sun[p]=V,p++}else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const q=U.shadow,Z=e.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=U.shadow.matrix,b++}n.directional[g]=V,g++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(F).multiplyScalar(Y),V.distance=G,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,n.spot[S]=V;const q=U.shadow;if(U.map&&(n.spotLightMap[M]=U.map,M++,q.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[S]=q.matrix,U.castShadow){const Z=e.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=K,C++}S++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(F).multiplyScalar(Y),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),n.rectArea[E]=V,E++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){const q=U.shadow,Z=e.get(U);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,n.pointShadow[d]=Z,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=U.shadow.matrix,T++}n.point[d]=V,d++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(Y),V.groundColor.copy(U.groundColor).multiplyScalar(Y),n.hemi[_]=V,_++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==d||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==_||L.numSunShadows!==m||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==C||L.numSpotMaps!==M||L.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=g,n.spot.length=S,n.rectArea.length=E,n.point.length=d,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,L.sunLength=p,L.directionalLength=g,L.pointLength=d,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=_,L.numSunShadows=m,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=C,L.numSpotMaps=M,L.numLightProbes=I,n.version=Gp++)}function o(c,h){let u=0,f=0,p=0,m=0,x=0,g=0;const d=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){const _=c[S];if(_.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(d),u++}else if(_.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(d),f++}else if(_.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(d),m++}else if(_.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:l,setupView:o,state:n}}function yl(s){const t=new Vp(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){e.push(f)}function l(f){n.push(f)}function o(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function Wp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let l;return a===void 0?(l=new yl(s),t.set(i,[l])):r>=a.length?(l=new yl(s),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
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
}`,Yp=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],$p=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],El=new fe,Qi=new k,$r=new k;function Kp(s,t,e){let n=new so;const i=new Ot,r=new Ot,a=new ge,l=new sf,o=new rf,c={},h=e.maxTextureSize,u={[ci]:Ke,[Ke]:ci,[$e]:$e},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new We;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new me(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let d=this.type;this.render=function(T,C,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Vc&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);const A=s.getRenderTarget(),I=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),P=s.state;P.setBlending(On),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=d!==this.type;D&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=T.length;U<F;U++){const Y=T[U],G=Y.shadow;if(G===void 0){Ft("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const K=G.getFrameExtents();i.multiply(K),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,G.mapSize.y=r.y));const V=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||D===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ss){if(Y.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new mn(i.x,i.y,{format:fi,type:An,minFilter:Be,magFilter:Be,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new fs(i.x,i.y,un),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=kn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=de,G.map.depthTexture.magFilter=de}else Y.isPointLight?(G.map=new pc(i.x),G.map.depthTexture=new Zh(i.x,Tn)):(G.map=new mn(i.x,i.y),G.map.depthTexture=new fs(i.x,i.y,Tn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=kn,this.type===Gs?(G.map.depthTexture.compareFunction=V?eo:to,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=de,G.map.depthTexture.magFilter=de);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);const q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,M);for(let Z=0;Z<q;Z++){const mt=G.getCamera(Z);if(Y.isPointLight){const Mt=G.camera,re=G.matrix,qt=Y.distance||Mt.far;qt!==Mt.far&&(Mt.far=qt,Mt.updateProjectionMatrix()),Qi.setFromMatrixPosition(Y.matrixWorld),Mt.position.copy(Qi),$r.copy(Mt.position),$r.add(Yp[Z]),Mt.up.copy($p[Z]),Mt.lookAt($r),Mt.updateMatrixWorld(),re.makeTranslation(-Qi.x,-Qi.y,-Qi.z),El.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(El,Mt.coordinateSystem,Mt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(G.map),s.clear());const Mt=G.getViewport(Z);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),P.viewport(a)}n=G.getFrustum(Z),_(C,M,mt,Y,this.type)}G.isPointLightShadow!==!0&&this.type===ss&&S(G,M),G.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(A,I,L)};function S(T,C){const M=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new mn(i.x,i.y,{format:fi,type:An}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,M,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,M,p,x,null)}function E(T,C,M,A){let I=null;const L=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)I=L;else if(I=M.isPointLight===!0?o:l,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=I.uuid,D=C.uuid;let U=c[P];U===void 0&&(U={},c[P]=U);let F=U[D];F===void 0&&(F=I.clone(),U[D]=F,C.addEventListener("dispose",b)),I=F}if(I.visible=C.visible,I.wireframe=C.wireframe,A===ss?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:u[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const P=s.properties.get(I);P.light=M}return I}function _(T,C,M,A,I){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===ss)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const D=t.update(T),U=T.material;if(Array.isArray(U)){const F=D.groups;for(let Y=0,G=F.length;Y<G;Y++){const K=F[Y],V=U[K.materialIndex];if(V&&V.visible){const q=E(T,V,A,I);T.onBeforeShadow(s,T,C,M,D,q,K),s.renderBufferDirect(M,null,D,q,T,K),T.onAfterShadow(s,T,C,M,D,q,K)}}}else if(U.visible){const F=E(T,U,A,I);T.onBeforeShadow(s,T,C,M,D,F,null),s.renderBufferDirect(M,null,D,F,T,null),T.onAfterShadow(s,T,C,M,D,F,null)}}const P=T.children;for(let D=0,U=P.length;D<U;D++)_(P[D],C,M,A,I)}function b(T){T.target.removeEventListener("dispose",b);for(const M in c){const A=c[M],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Zp(s,t){function e(){let z=!1;const ft=new ge;let et=null;const ut=new ge(0,0,0,0);return{setMask:function(_t){et!==_t&&!z&&(s.colorMask(_t,_t,_t,_t),et=_t)},setLocked:function(_t){z=_t},setClear:function(_t,st,Ct,Et,ce){ce===!0&&(_t*=Et,st*=Et,Ct*=Et),ft.set(_t,st,Ct,Et),ut.equals(ft)===!1&&(s.clearColor(_t,st,Ct,Et),ut.copy(ft))},reset:function(){z=!1,et=null,ut.set(-1,0,0,0)}}}function n(){let z=!1,ft=!1,et=null,ut=null,_t=null;return{setReversed:function(st){if(ft!==st){const Ct=t.get("EXT_clip_control");st?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ft=st;const Et=_t;_t=null,this.setClear(Et)}},getReversed:function(){return ft},setTest:function(st){st?N(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(st){et!==st&&!z&&(s.depthMask(st),et=st)},setFunc:function(st){if(ft&&(st=Eh[st]),ut!==st){switch(st){case ia:s.depthFunc(s.NEVER);break;case sa:s.depthFunc(s.ALWAYS);break;case ra:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case aa:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case la:s.depthFunc(s.GREATER);break;case ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=st}},setLocked:function(st){z=st},setClear:function(st){_t!==st&&(_t=st,ft&&(st=1-st),s.clearDepth(st))},reset:function(){z=!1,et=null,ut=null,_t=null,ft=!1}}}function i(){let z=!1,ft=null,et=null,ut=null,_t=null,st=null,Ct=null,Et=null,ce=null;return{setTest:function(ee){z||(ee?N(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!z&&(s.stencilMask(ee),ft=ee)},setFunc:function(ee,an,_n){(et!==ee||ut!==an||_t!==_n)&&(s.stencilFunc(ee,an,_n),et=ee,ut=an,_t=_n)},setOp:function(ee,an,_n){(st!==ee||Ct!==an||Et!==_n)&&(s.stencilOp(ee,an,_n),st=ee,Ct=an,Et=_n)},setLocked:function(ee){z=ee},setClear:function(ee){ce!==ee&&(s.clearStencil(ee),ce=ee)},reset:function(){z=!1,ft=null,et=null,ut=null,_t=null,st=null,Ct=null,Et=null,ce=null}}}const r=new e,a=new n,l=new i,o=new WeakMap,c=new WeakMap;let h={},u={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,S=null,E=null,_=null,b=null,T=null,C=null,M=new Ht(0,0,0),A=0,I=!1,L=null,P=null,D=null,U=null,F=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let q=null,Z={};const mt=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),re=new ge().fromArray(mt),qt=new ge().fromArray(Mt);function Yt(z,ft,et,ut){const _t=new Uint8Array(4),st=s.createTexture();s.bindTexture(z,st),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<et;Ct++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ft+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return st}const w={};w[s.TEXTURE_2D]=Yt(s.TEXTURE_2D,s.TEXTURE_2D,1),w[s.TEXTURE_CUBE_MAP]=Yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[s.TEXTURE_2D_ARRAY]=Yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),w[s.TEXTURE_3D]=Yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),N(s.DEPTH_TEST),a.setFunc(os),Pt(!1),te(wo),N(s.CULL_FACE),Dt(On);function N(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function Q(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function rt(z,ft){return f[z]!==ft?(s.bindFramebuffer(z,ft),f[z]=ft,z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ft),z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function it(z,ft){let et=m,ut=!1;if(z){et=p.get(ft),et===void 0&&(et=[],p.set(ft,et));const _t=z.textures;if(et.length!==_t.length||et[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Ct=_t.length;st<Ct;st++)et[st]=s.COLOR_ATTACHMENT0+st;et.length=_t.length,ut=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,ut=!0);ut&&s.drawBuffers(et)}function ot(z){return x!==z?(s.useProgram(z),x=z,!0):!1}const Ut={[Ui]:s.FUNC_ADD,[Xc]:s.FUNC_SUBTRACT,[qc]:s.FUNC_REVERSE_SUBTRACT};Ut[Yc]=s.MIN,Ut[$c]=s.MAX;const At={[Kc]:s.ZERO,[Zc]:s.ONE,[Jc]:s.SRC_COLOR,[Ol]:s.SRC_ALPHA,[ih]:s.SRC_ALPHA_SATURATE,[eh]:s.DST_COLOR,[jc]:s.DST_ALPHA,[Qc]:s.ONE_MINUS_SRC_COLOR,[zl]:s.ONE_MINUS_SRC_ALPHA,[nh]:s.ONE_MINUS_DST_COLOR,[th]:s.ONE_MINUS_DST_ALPHA,[sh]:s.CONSTANT_COLOR,[rh]:s.ONE_MINUS_CONSTANT_COLOR,[ah]:s.CONSTANT_ALPHA,[oh]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(z,ft,et,ut,_t,st,Ct,Et,ce,ee){if(z===On){g===!0&&(Q(s.BLEND),g=!1);return}if(g===!1&&(N(s.BLEND),g=!0),z!==Wc){if(z!==d||ee!==I){if((S!==Ui||b!==Ui)&&(s.blendEquation(s.FUNC_ADD),S=Ui,b=Ui),ee)switch(z){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFunc(s.ONE,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Po:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",z);break}else switch(z){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Co:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Po:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",z);break}E=null,_=null,T=null,C=null,M.set(0,0,0),A=0,d=z,I=ee}return}_t=_t||ft,st=st||et,Ct=Ct||ut,(ft!==S||_t!==b)&&(s.blendEquationSeparate(Ut[ft],Ut[_t]),S=ft,b=_t),(et!==E||ut!==_||st!==T||Ct!==C)&&(s.blendFuncSeparate(At[et],At[ut],At[st],At[Ct]),E=et,_=ut,T=st,C=Ct),(Et.equals(M)===!1||ce!==A)&&(s.blendColor(Et.r,Et.g,Et.b,ce),M.copy(Et),A=ce),d=z,I=!1}function Nt(z,ft){z.side===$e?Q(s.CULL_FACE):N(s.CULL_FACE);let et=z.side===Ke;ft&&(et=!et),Pt(et),z.blending===as&&z.transparent===!1?Dt(On):Dt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ut=z.stencilWrite;l.setTest(ut),ut&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Xe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(z){L!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),L=z)}function te(z){z!==Gc?(N(s.CULL_FACE),z!==P&&(z===wo?s.cullFace(s.BACK):z===Hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),P=z}function we(z){z!==D&&(G&&s.lineWidth(z),D=z)}function Xe(z,ft,et){z?(N(s.POLYGON_OFFSET_FILL),(U!==ft||F!==et)&&(U=ft,F=et,a.getReversed()&&(ft=-ft),s.polygonOffset(ft,et))):Q(s.POLYGON_OFFSET_FILL)}function pe(z){z?N(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function ve(z){z===void 0&&(z=s.TEXTURE0+Y-1),q!==z&&(s.activeTexture(z),q=z)}function B(z,ft,et){et===void 0&&(q===null?et=s.TEXTURE0+Y-1:et=q);let ut=Z[et];ut===void 0&&(ut={type:void 0,texture:void 0},Z[et]=ut),(ut.type!==z||ut.texture!==ft)&&(q!==et&&(s.activeTexture(et),q=et),s.bindTexture(z,ft||w[z]),ut.type=z,ut.texture=ft)}function Ue(){const z=Z[q];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ie(){try{s.compressedTexImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function v(){try{s.texSubImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function H(){try{s.texSubImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function at(){try{s.texStorage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function lt(){try{s.texStorage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function tt(){try{s.texImage2D(...arguments)}catch(z){Qt("WebGLState:",z)}}function nt(){try{s.texImage3D(...arguments)}catch(z){Qt("WebGLState:",z)}}function ct(z){return u[z]!==void 0?u[z]:s.getParameter(z)}function wt(z,ft){u[z]!==ft&&(s.pixelStorei(z,ft),u[z]=ft)}function dt(z){re.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),re.copy(z))}function ht(z){qt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),qt.copy(z))}function Rt(z,ft){let et=c.get(ft);et===void 0&&(et=new WeakMap,c.set(ft,et));let ut=et.get(z);ut===void 0&&(ut=s.getUniformBlockIndex(ft,z.name),et.set(z,ut))}function Lt(z,ft){const ut=c.get(ft).get(z);o.get(ft)!==ut&&(s.uniformBlockBinding(ft,ut,z.__bindingPointIndex),o.set(ft,ut))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,Z={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,S=null,E=null,_=null,b=null,T=null,C=null,M=new Ht(0,0,0),A=0,I=!1,L=null,P=null,D=null,U=null,F=null,re.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:N,disable:Q,bindFramebuffer:rt,drawBuffers:it,useProgram:ot,setBlending:Dt,setMaterial:Nt,setFlipSided:Pt,setCullFace:te,setLineWidth:we,setPolygonOffset:Xe,setScissorTest:pe,activeTexture:ve,bindTexture:B,unbindTexture:Ue,compressedTexImage2D:ie,compressedTexImage3D:R,texImage2D:tt,texImage3D:nt,pixelStorei:wt,getParameter:ct,updateUBOMapping:Rt,uniformBlockBinding:Lt,texStorage2D:at,texStorage3D:lt,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:j,scissor:dt,viewport:ht,reset:Bt}}function Jp(s,t,e,n,i,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,u=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,v){return m?new OffscreenCanvas(R,v):tr("canvas")}function g(R,v,H){let $=1;const j=ie(R);if((j.width>H||j.height>H)&&($=H/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor($*j.width),lt=Math.floor($*j.height);f===void 0&&(f=x(at,lt));const tt=v?x(at,lt):f;return tt.width=at,tt.height=lt,tt.getContext("2d").drawImage(R,0,0,at,lt),Ft("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+lt+")."),tt}else return"data"in R&&Ft("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function d(R){return R.generateMipmaps}function S(R){s.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,v,H,$,j,at=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let lt;$&&(lt=t.get("EXT_texture_norm16"),lt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=v;if(v===s.RED&&(H===s.FLOAT&&(tt=s.R32F),H===s.HALF_FLOAT&&(tt=s.R16F),H===s.UNSIGNED_BYTE&&(tt=s.R8),H===s.UNSIGNED_SHORT&&lt&&(tt=lt.R16_EXT),H===s.SHORT&&lt&&(tt=lt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.R8UI),H===s.UNSIGNED_SHORT&&(tt=s.R16UI),H===s.UNSIGNED_INT&&(tt=s.R32UI),H===s.BYTE&&(tt=s.R8I),H===s.SHORT&&(tt=s.R16I),H===s.INT&&(tt=s.R32I)),v===s.RG&&(H===s.FLOAT&&(tt=s.RG32F),H===s.HALF_FLOAT&&(tt=s.RG16F),H===s.UNSIGNED_BYTE&&(tt=s.RG8),H===s.UNSIGNED_SHORT&&lt&&(tt=lt.RG16_EXT),H===s.SHORT&&lt&&(tt=lt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.RG8UI),H===s.UNSIGNED_SHORT&&(tt=s.RG16UI),H===s.UNSIGNED_INT&&(tt=s.RG32UI),H===s.BYTE&&(tt=s.RG8I),H===s.SHORT&&(tt=s.RG16I),H===s.INT&&(tt=s.RG32I)),v===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),H===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),H===s.UNSIGNED_INT&&(tt=s.RGB32UI),H===s.BYTE&&(tt=s.RGB8I),H===s.SHORT&&(tt=s.RGB16I),H===s.INT&&(tt=s.RGB32I)),v===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),H===s.UNSIGNED_INT&&(tt=s.RGBA32UI),H===s.BYTE&&(tt=s.RGBA8I),H===s.SHORT&&(tt=s.RGBA16I),H===s.INT&&(tt=s.RGBA32I)),v===s.RGB&&(H===s.UNSIGNED_SHORT&&lt&&(tt=lt.RGB16_EXT),H===s.SHORT&&lt&&(tt=lt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),v===s.RGBA){const nt=at?js:$t.getTransfer(j);H===s.FLOAT&&(tt=s.RGBA32F),H===s.HALF_FLOAT&&(tt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(tt=nt===se?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&lt&&(tt=lt.RGBA16_EXT),H===s.SHORT&&lt&&(tt=lt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(R,v){let H;return R?v===null||v===Tn||v===cs?H=s.DEPTH24_STENCIL8:v===un?H=s.DEPTH32F_STENCIL8:v===ls&&(H=s.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Tn||v===cs?H=s.DEPTH_COMPONENT24:v===un?H=s.DEPTH_COMPONENT32F:v===ls&&(H=s.DEPTH_COMPONENT16),H}function T(R,v){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==de&&R.minFilter!==Be?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){const v=R.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function M(R){const v=R.target;v.removeEventListener("dispose",M),L(v)}function A(R){const v=n.get(R);if(v.__webglInit===void 0)return;const H=R.source,$=p.get(H);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(R),Object.keys($).length===0&&p.delete(H)}n.remove(R)}function I(R){const v=n.get(R);s.deleteTexture(v.__webglTexture);const H=R.source,$=p.get(H);delete $[v.__cacheKey],a.memory.textures--}function L(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(v.__webglFramebuffer[$][j]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=R.textures;for(let $=0,j=H.length;$<j;$++){const at=n.get(H[$]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(R)}let P=0;function D(){P=0}function U(){return P}function F(R){P=R}function Y(){const R=P;return R>=i.maxTextures&&Ft("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function G(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function K(R,v){const H=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const $=R.image;if($===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,R,v);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function V(R,v){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Q(H,R,v);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function q(R,v){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Q(H,R,v);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function Z(R,v){const H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){rt(H,R,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}const mt={[ki]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[ha]:s.MIRRORED_REPEAT},Mt={[de]:s.NEAREST,[hh]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[gr]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},re={[ph]:s.NEVER,[vh]:s.ALWAYS,[mh]:s.LESS,[to]:s.LEQUAL,[gh]:s.EQUAL,[eo]:s.GEQUAL,[xh]:s.GREATER,[_h]:s.NOTEQUAL};function qt(R,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Be||v.magFilter===gr||v.magFilter===_s||v.magFilter===ai||v.minFilter===Be||v.minFilter===gr||v.minFilter===_s||v.minFilter===ai)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,mt[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,mt[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,mt[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Mt[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Mt[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===de||v.minFilter!==_s&&v.minFilter!==ai||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));const $=v.source;let j=p.get($);j===void 0&&(j={},p.set($,j));const at=G(v);if(at!==R.__cacheKey){j[at]===void 0&&(j[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[at].usedTimes++;const lt=j[R.__cacheKey];lt!==void 0&&(j[R.__cacheKey].usedTimes--,lt.usedTimes===0&&I(v)),R.__cacheKey=at,R.__webglTexture=j[at].texture}return H}function w(R,v,H){return Math.floor(Math.floor(R/H)/v)}function N(R,v,H,$){const at=R.updateRanges;if(at.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,H,$,v.data);else{at.sort((wt,dt)=>wt.start-dt.start);let lt=0;for(let wt=1;wt<at.length;wt++){const dt=at[lt],ht=at[wt],Rt=dt.start+dt.count,Lt=w(ht.start,v.width,4),Bt=w(dt.start,v.width,4);ht.start<=Rt+1&&Lt===Bt&&w(ht.start+ht.count-1,v.width,4)===Lt?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++lt,at[lt]=ht)}at.length=lt+1;const tt=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let wt=0,dt=at.length;wt<dt;wt++){const ht=at[wt],Rt=Math.floor(ht.start/4),Lt=Math.ceil(ht.count/4),Bt=Rt%v.width,z=Math.floor(Rt/v.width),ft=Lt,et=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Bt,z,ft,et,H,$,v.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function Q(R,v,H){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);const j=Yt(R,v),at=v.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+H);const lt=n.get(at);if(at.version!==lt.__version||j===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const et=$t.getPrimaries($t.workingColorSpace),ut=v.colorSpace===Zn?null:$t.getPrimaries(v.colorSpace),_t=v.colorSpace===Zn||et===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=g(v.image,!1,i.maxTextureSize);nt=Ue(v,nt);const ct=r.convert(v.format,v.colorSpace),wt=r.convert(v.type);let dt=_(v.internalFormat,ct,wt,v.normalized,v.colorSpace,v.isVideoTexture);qt($,v);let ht;const Rt=v.mipmaps,Lt=v.isVideoTexture!==!0,Bt=lt.__version===void 0||j===!0,z=at.dataReady,ft=T(v,nt);if(v.isDepthTexture)dt=b(v.format===oi,v.type),Bt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,dt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,dt,nt.width,nt.height,0,ct,wt,null));else if(v.isDataTexture)if(Rt.length>0){Lt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ft,dt,Rt[0].width,Rt[0].height);for(let et=0,ut=Rt.length;et<ut;et++)ht=Rt[et],Lt?z&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ht.width,ht.height,ct,wt,ht.data):e.texImage2D(s.TEXTURE_2D,et,dt,ht.width,ht.height,0,ct,wt,ht.data);v.generateMipmaps=!1}else Lt?(Bt&&e.texStorage2D(s.TEXTURE_2D,ft,dt,nt.width,nt.height),z&&N(v,nt,ct,wt)):e.texImage2D(s.TEXTURE_2D,0,dt,nt.width,nt.height,0,ct,wt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,dt,Rt[0].width,Rt[0].height,nt.depth);for(let et=0,ut=Rt.length;et<ut;et++)if(ht=Rt[et],v.format!==dn)if(ct!==null)if(Lt){if(z)if(v.layerUpdates.size>0){const _t=nl(ht.width,ht.height,v.format,v.type);for(const st of v.layerUpdates){const Ct=ht.data.subarray(st*_t/ht.data.BYTES_PER_ELEMENT,(st+1)*_t/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,st,ht.width,ht.height,1,ct,Ct)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,nt.depth,ct,ht.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,dt,ht.width,ht.height,nt.depth,0,ht.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,nt.depth,ct,wt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,dt,ht.width,ht.height,nt.depth,0,ct,wt,ht.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Lt&&Bt&&e.texStorage2D(s.TEXTURE_2D,ft,dt,Rt[0].width,Rt[0].height);for(let et=0,ut=Rt.length;et<ut;et++)ht=Rt[et],v.format!==dn?ct!==null?Lt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,et,dt,ht.width,ht.height,0,ht.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?z&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ht.width,ht.height,ct,wt,ht.data):e.texImage2D(s.TEXTURE_2D,et,dt,ht.width,ht.height,0,ct,wt,ht.data)}else if(v.isDataArrayTexture)if(Lt){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,dt,nt.width,nt.height,nt.depth),z)if(v.layerUpdates.size>0){const et=nl(nt.width,nt.height,v.format,v.type);for(const ut of v.layerUpdates){const _t=nt.data.subarray(ut*et/nt.data.BYTES_PER_ELEMENT,(ut+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,nt.width,nt.height,1,ct,wt,_t)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,wt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,nt.width,nt.height,nt.depth,0,ct,wt,nt.data);else if(v.isData3DTexture)Lt?(Bt&&e.texStorage3D(s.TEXTURE_3D,ft,dt,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,wt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,dt,nt.width,nt.height,nt.depth,0,ct,wt,nt.data);else if(v.isFramebufferTexture){if(Bt)if(Lt)e.texStorage2D(s.TEXTURE_2D,ft,dt,nt.width,nt.height);else{let et=nt.width,ut=nt.height;for(let _t=0;_t<ft;_t++)e.texImage2D(s.TEXTURE_2D,_t,dt,et,ut,0,ct,wt,null),et>>=1,ut>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){const et=s.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),u.add(v),et.onpaint=ut=>{const _t=ut.changedElements;for(const st of u)_t.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{const _t=s.RGBA,st=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,st,Ct,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Lt&&Bt){const et=ie(Rt[0]);e.texStorage2D(s.TEXTURE_2D,ft,dt,et.width,et.height)}for(let et=0,ut=Rt.length;et<ut;et++)ht=Rt[et],Lt?z&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ct,wt,ht):e.texImage2D(s.TEXTURE_2D,et,dt,ct,wt,ht);v.generateMipmaps=!1}else if(Lt){if(Bt){const et=ie(nt);e.texStorage2D(s.TEXTURE_2D,ft,dt,et.width,et.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,wt,nt)}else e.texImage2D(s.TEXTURE_2D,0,dt,ct,wt,nt);d(v)&&S($),lt.__version=at.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function rt(R,v,H){if(v.image.length!==6)return;const $=Yt(R,v),j=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);const at=n.get(j);if(j.version!==at.__version||$===!0){e.activeTexture(s.TEXTURE0+H);const lt=$t.getPrimaries($t.workingColorSpace),tt=v.colorSpace===Zn?null:$t.getPrimaries(v.colorSpace),nt=v.colorSpace===Zn||lt===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const ct=v.isCompressedTexture||v.image[0].isCompressedTexture,wt=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let st=0;st<6;st++)!ct&&!wt?dt[st]=g(v.image[st],!0,i.maxCubemapSize):dt[st]=wt?v.image[st].image:v.image[st],dt[st]=Ue(v,dt[st]);const ht=dt[0],Rt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Bt=_(v.internalFormat,Rt,Lt,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,ft=at.__version===void 0||$===!0,et=j.dataReady;let ut=T(v,ht);qt(s.TEXTURE_CUBE_MAP,v);let _t;if(ct){z&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Bt,ht.width,ht.height);for(let st=0;st<6;st++){_t=dt[st].mipmaps;for(let Ct=0;Ct<_t.length;Ct++){const Et=_t[Ct];v.format!==dn?Rt!==null?z?et&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,Et.width,Et.height,Rt,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,Bt,Et.width,Et.height,0,Et.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,Et.width,Et.height,Rt,Lt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,Bt,Et.width,Et.height,0,Rt,Lt,Et.data)}}}else{if(_t=v.mipmaps,z&&ft){_t.length>0&&ut++;const st=ie(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Bt,st.width,st.height)}for(let st=0;st<6;st++)if(wt){z?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,dt[st].width,dt[st].height,Rt,Lt,dt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Bt,dt[st].width,dt[st].height,0,Rt,Lt,dt[st].data);for(let Ct=0;Ct<_t.length;Ct++){const ce=_t[Ct].image[st].image;z?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,ce.width,ce.height,Rt,Lt,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,Bt,ce.width,ce.height,0,Rt,Lt,ce.data)}}else{z?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt,Lt,dt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Bt,Rt,Lt,dt[st]);for(let Ct=0;Ct<_t.length;Ct++){const Et=_t[Ct];z?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,Rt,Lt,Et.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,Bt,Rt,Lt,Et.image[st])}}}d(v)&&S(s.TEXTURE_CUBE_MAP),at.__version=j.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,H,$,j,at){const lt=r.convert(H.format,H.colorSpace),tt=r.convert(H.type),nt=_(H.internalFormat,lt,tt,H.normalized,H.colorSpace),ct=n.get(v),wt=n.get(H);if(wt.__renderTarget=v,!ct.__hasExternalTextures){const dt=Math.max(1,v.width>>at),ht=Math.max(1,v.height>>at);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,at,nt,dt,ht,v.depth,0,lt,tt,null):e.texImage2D(j,at,nt,dt,ht,0,lt,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ve(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,wt.__webglTexture,0,pe(v)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,wt.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(R,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,at=b(v.stencilBuffer,j),lt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(v),at,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(v),at,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,at,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,R)}else{const $=v.textures;for(let j=0;j<$.length;j++){const at=$[j],lt=r.convert(at.format,at.colorSpace),tt=r.convert(at.type),nt=_(at.internalFormat,lt,tt,at.normalized,at.colorSpace);ve(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(v),nt,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(v),nt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,nt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(R,v,H){const $=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),qt(s.TEXTURE_CUBE_MAP,v.depthTexture);const ct=r.convert(v.depthTexture.format),wt=r.convert(v.depthTexture.type);let dt;v.depthTexture.format===kn?dt=s.DEPTH_COMPONENT24:v.depthTexture.format===oi&&(dt=s.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,v.width,v.height,0,ct,wt,null)}}else K(v.depthTexture,0);const at=j.__webglTexture,lt=pe(v),tt=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,nt=v.depthTexture.format===oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===kn)ve(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,at,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,at,0);else if(v.depthTexture.format===oi)ve(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,tt,at,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,tt,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(R){const v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Ut(v.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Ut(v.__webglFramebuffer[0],R,0):Ut(v.__webglFramebuffer,R,0)}else if(H){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),ot(v.__webglDepthbuffer[$],R,!1);else{const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,at)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ot(v.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,at)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(R,v,H){const $=n.get(R);v!==void 0&&it($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&At(R)}function Nt(R){const v=R.texture,H=n.get(R),$=n.get(v);R.addEventListener("dispose",M);const j=R.textures,at=R.isWebGLCubeRenderTarget===!0,lt=j.length>1;if(lt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,a.memory.textures++),at){H.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[tt]=[];for(let nt=0;nt<v.mipmaps.length;nt++)H.__webglFramebuffer[tt][nt]=s.createFramebuffer()}else H.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let tt=0;tt<v.mipmaps.length;tt++)H.__webglFramebuffer[tt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(lt)for(let tt=0,nt=j.length;tt<nt;tt++){const ct=n.get(j[tt]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){const nt=j[tt];H.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[tt]);const ct=r.convert(nt.format,nt.colorSpace),wt=r.convert(nt.type),dt=_(nt.internalFormat,ct,wt,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),ht=pe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,dt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,H.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),qt(s.TEXTURE_CUBE_MAP,v);for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)it(H.__webglFramebuffer[tt][nt],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else it(H.__webglFramebuffer[tt],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);d(v)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let tt=0,nt=j.length;tt<nt;tt++){const ct=j[tt],wt=n.get(ct);let dt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,wt.__webglTexture),qt(dt,ct),it(H.__webglFramebuffer,R,ct,s.COLOR_ATTACHMENT0+tt,dt,0),d(ct)&&S(dt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,$.__webglTexture),qt(tt,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)it(H.__webglFramebuffer[nt],R,v,s.COLOR_ATTACHMENT0,tt,nt);else it(H.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,tt,0);d(v)&&S(tt),e.unbindTexture()}R.depthBuffer&&At(R)}function Pt(R){const v=R.textures;for(let H=0,$=v.length;H<$;H++){const j=v[H];if(d(j)){const at=E(R),lt=n.get(j).__webglTexture;e.bindTexture(at,lt),S(at),e.unbindTexture()}}}const te=[],we=[];function Xe(R){if(R.samples>0){if(ve(R)===!1){const v=R.textures,H=R.width,$=R.height;let j=s.COLOR_BUFFER_BIT;const at=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(R),tt=v.length>1;if(tt)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const nt=R.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const wt=n.get(v[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,j,s.NEAREST),o===!0&&(te.length=0,we.length=0,te.push(s.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(te.push(at),we.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,we)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const wt=n.get(v[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&o){const v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function pe(R){return Math.min(i.maxSamples,R.samples)}function ve(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ue(R,v){const H=R.colorSpace,$=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Qs&&H!==Zn&&($t.getTransfer(H)===se?($!==dn||j!==en)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",H)),v}function ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=D,this.getTextureUnits=U,this.setTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Dt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qp(s,t){function e(n,i=Zn){let r;const a=$t.getTransfer(i);if(n===en)return s.UNSIGNED_BYTE;if(n===$a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return s.BYTE;if(n===$l)return s.SHORT;if(n===ls)return s.UNSIGNED_SHORT;if(n===Ya)return s.INT;if(n===Tn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Jl)return s.ALPHA;if(n===Ql)return s.RGB;if(n===dn)return s.RGBA;if(n===kn)return s.DEPTH_COMPONENT;if(n===oi)return s.DEPTH_STENCIL;if(n===Za)return s.RED;if(n===Ja)return s.RED_INTEGER;if(n===fi)return s.RG;if(n===Qa)return s.RG_INTEGER;if(n===ja)return s.RGBA_INTEGER;if(n===Hs||n===Vs||n===Ws||n===Xs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===ua||n===da||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===xa||n===_a||n===va||n===Ks||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_a)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sa||n===ba||n===ya||n===Ea||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Ba||n===Zs||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tm=`
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

}`;class em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new lc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:jp,fragmentShader:tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nm extends di{constructor(t,e){super();const n=this;let i=null,r=1,a=null,l="local-floor",o=1,c=null,h=null,u=null,f=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new em,d={},S=e.getContextAttributes();let E=null,_=null;const b=[],T=[],C=new Ot;let M=null,A=null;const I=new tn;I.viewport=new ge;const L=new tn;L.viewport=new ge;const P=[I,L],D=new hf;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let N=b[w];return N===void 0&&(N=new Tr,b[w]=N),N.getTargetRaySpace()},this.getControllerGrip=function(w){let N=b[w];return N===void 0&&(N=new Tr,b[w]=N),N.getGripSpace()},this.getHand=function(w){let N=b[w];return N===void 0&&(N=new Tr,b[w]=N),N.getHandSpace()};function Y(w){const N=T.indexOf(w.inputSource);if(N===-1)return;const Q=b[N];Q!==void 0&&(Q.update(w.inputSource,w.frame,c||a),Q.dispatchEvent({type:w.type,data:w.inputSource}))}function G(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let w=0;w<b.length;w++){const N=T[w];N!==null&&(T[w]=null,b[w].disconnect(N))}U=null,F=null,g.reset();for(const w in d)delete d[w];if(t.setRenderTarget(E),p=null,f=null,u=null,i=null,_=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),A!==null){const w=A.camera;w.fov=A.fov,w.zoom=A.zoom,w.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){l=w,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(w){if(i=w,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,rt=null,it=null;S.depth&&(it=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=S.stencil?oi:kn,rt=S.stencil?cs:Tn);const ot={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ot),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new mn(f.textureWidth,f.textureHeight,{format:dn,type:en,depthTexture:new fs(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new mn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await i.requestReferenceSpace(l),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(w){for(let N=0;N<w.removed.length;N++){const Q=w.removed[N],rt=T.indexOf(Q);rt>=0&&(T[rt]=null,b[rt].disconnect(Q))}for(let N=0;N<w.added.length;N++){const Q=w.added[N];let rt=T.indexOf(Q);if(rt===-1){for(let ot=0;ot<b.length;ot++)if(ot>=T.length){T.push(Q),rt=ot;break}else if(T[ot]===null){T[ot]=Q,rt=ot;break}if(rt===-1)break}const it=b[rt];it&&it.connect(Q)}}const V=new k,q=new k;function Z(w,N,Q){V.setFromMatrixPosition(N.matrixWorld),q.setFromMatrixPosition(Q.matrixWorld);const rt=V.distanceTo(q),it=N.projectionMatrix.elements,ot=Q.projectionMatrix.elements,Ut=it[14]/(it[10]-1),At=it[14]/(it[10]+1),Dt=(it[9]+1)/it[5],Nt=(it[9]-1)/it[5],Pt=(it[8]-1)/it[0],te=(ot[8]+1)/ot[0],we=Ut*Pt,Xe=Ut*te,pe=rt/(-Pt+te),ve=pe*-Pt;if(N.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ve),w.translateZ(pe),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),it[10]===-1)w.projectionMatrix.copy(N.projectionMatrix),w.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const B=Ut+pe,Ue=At+pe,ie=we-ve,R=Xe+(rt-ve),v=Dt*At/Ue*B,H=Nt*At/Ue*B;w.projectionMatrix.makePerspective(ie,R,v,H,B,Ue),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function mt(w,N){N===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(N.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(i===null)return;let N=w.near,Q=w.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),D.near=L.near=I.near=N,D.far=L.far=I.far=Q,(U!==D.near||F!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,F=D.far),D.layers.mask=w.layers.mask|6,I.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;const rt=w.parent,it=D.cameras;mt(D,rt);for(let ot=0;ot<it.length;ot++)mt(it[ot],rt);it.length===2?Z(D,I,L):D.projectionMatrix.copy(I.projectionMatrix),A===null&&w.isPerspectiveCamera&&(A={camera:w,fov:w.fov,zoom:w.zoom}),Mt(w,D,rt)};function Mt(w,N,Q){Q===null?w.matrix.copy(N.matrixWorld):(w.matrix.copy(Q.matrixWorld),w.matrix.invert(),w.matrix.multiply(N.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(N.projectionMatrix),w.projectionMatrixInverse.copy(N.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Ga*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(w){o=w,f!==null&&(f.fixedFoveation=w),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=w)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(w){return d[w]};let re=null;function qt(w,N){if(h=N.getViewerPose(c||a),m=N,h!==null){const Q=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let rt=!1;Q.length!==D.cameras.length&&(D.cameras.length=0,rt=!0);for(let At=0;At<Q.length;At++){const Dt=Q[At];let Nt=null;if(p!==null)Nt=p.getViewport(Dt);else{const te=u.getViewSubImage(f,Dt);Nt=te.viewport,At===0&&(t.setRenderTargetTextures(_,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(_))}let Pt=P[At];Pt===void 0&&(Pt=new tn,Pt.layers.enable(At),Pt.viewport=new ge,P[At]=Pt),Pt.matrix.fromArray(Dt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Dt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),At===0&&(D.matrix.copy(Pt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),rt===!0&&D.cameras.push(Pt)}const it=i.enabledFeatures;if(it&&it.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const At=u.getDepthInformation(Q[0]);At&&At.isValid&&At.texture&&g.init(At,i.renderState)}if(it&&it.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let At=0;At<Q.length;At++){const Dt=Q[At].camera;if(Dt){let Nt=d[Dt];Nt||(Nt=new lc,d[Dt]=Nt);const Pt=u.getCameraImage(Dt);Nt.sourceTexture=Pt}}}}for(let Q=0;Q<b.length;Q++){const rt=T[Q],it=b[Q];rt!==null&&it!==void 0&&it.update(rt,N,c||a)}re&&re(w,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),m=null}const Yt=new uc;Yt.setAnimationLoop(qt),this.setAnimationLoop=function(w){re=w},this.dispose=function(){}}}const im=new fe,vc=new zt;vc.set(-1,0,0,0,1,0,0,0,1);function sm(s,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,cc(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,S,E,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&l(g,d)):d.isPointsMaterial?o(g,d,S,E):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ke&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ke&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const S=t.get(d),E=S.envMap,_=S.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vc),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function l(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function o(g,d,S,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=E*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const S=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rm(s,t,e,n){let i={},r={},a=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,b){const T=b.program;n.uniformBlockBinding(_,T)}function c(_,b){let T=i[_.id];T===void 0&&(g(_),T=h(_),i[_.id]=T,_.addEventListener("dispose",S));const C=b.program;n.updateUBOMapping(_,C);const M=t.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function h(_){const b=u();_.__bindingPointIndex=b;const T=s.createBuffer(),C=_.__size,M=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,C,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function u(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const b=i[_.id],T=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,A=T.length;M<A;M++){const I=T[M];if(Array.isArray(I))for(let L=0,P=I.length;L<P;L++)p(I[L],M,L,C);else p(I,M,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,b,T,C){if(x(_,b,T,C)===!0){const M=_.__offset,A=_.value;if(Array.isArray(A)){let I=0;for(let L=0;L<A.length;L++){const P=A[L],D=d(P);m(P,_.__data,I),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(I+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,_.__data)}}function m(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function x(_,b,T,C){const M=_.value,A=b+"_"+T;if(C[A]===void 0)return typeof M=="number"||typeof M=="boolean"?C[A]=M:ArrayBuffer.isView(M)?C[A]=M.slice():C[A]=M.clone(),!0;{const I=C[A];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return C[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function g(_){const b=_.uniforms;let T=0;const C=16;for(let A=0,I=b.length;A<I;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let P=0,D=L.length;P<D;P++){const U=L[P],F=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,G=F.length;Y<G;Y++){const K=F[Y],V=d(K),q=T%C,Z=q%V.boundary,mt=q+Z;T+=Z,mt!==0&&C-mt<V.storage&&(T+=C-mt),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=V.storage}}}const M=T%C;return M>0&&(T+=C-M),_.__size=T,_.__cache={},this}function d(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){const b=_.target;b.removeEventListener("dispose",S);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function E(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:o,update:c,dispose:E}}const am=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function om(){return Sn===null&&(Sn=new rc(am,16,16,fi,An),Sn.name="DFG_LUT",Sn.minFilter=Be,Sn.magFilter=Be,Sn.wrapS=Fn,Sn.wrapT=Fn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class lm{constructor(t={}){const{canvas:e=bh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=en}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=p,g=new Set([ja,Qa,Ja]),d=new Set([en,Tn,ls,cs,$a,Ka]),S=new Uint32Array(4),E=new Int32Array(4),_=new k;let b=null,T=null;const C=[],M=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,P=null,D=null,U=null,F=null;this._outputColorSpace=be;let Y=0,G=0,K=null,V=-1,q=null;const Z=new ge,mt=new ge;let Mt=null;const re=new Ht(0);let qt=0,Yt=e.width,w=e.height,N=1,Q=null,rt=null;const it=new ge(0,0,Yt,w),ot=new ge(0,0,Yt,w);let Ut=!1;const At=new so;let Dt=!1,Nt=!1;const Pt=new fe,te=new k,we=new ge,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function ve(){return K===null?N:1}let B=n;function Ue(y,O){return e.getContext(y,O)}let ie,R,v,H,$,j,at,lt,tt,nt,ct,wt,dt,ht,Rt,Lt,Bt,z,ft,et,ut,_t,st;try{const y={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",an,!1),B===null){const O="webgl2";if(B=Ue(O,y),B===null)throw Ue(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(y){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Qt("WebGLRenderer: "+y.message),y}function Ct(){ie=new o0(B),ie.init(),ut=new Qp(B,ie),R=new Jd(B,ie,t,ut),v=new Zp(B,ie),R.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),D=B.createFramebuffer(),U=B.createFramebuffer(),F=B.createFramebuffer(),H=new h0(B),$=new Fp,j=new Jp(B,ie,v,$,R,ut,H),at=new a0(I),lt=new uf(B),_t=new Kd(B,lt),tt=new l0(B,lt,H,_t),nt=new u0(B,tt,lt,_t,H),z=new f0(B,R,j),Rt=new Qd($),ct=new Np(I,at,ie,R,_t,Rt),wt=new sm(I,$),dt=new zp,ht=new Wp(ie),Bt=new $d(I,at,v,nt,m,o),Lt=new Kp(I,nt,R),st=new rm(B,H,R,v),ft=new Zd(B,ie,H),et=new c0(B,ie,H),H.programs=ct.programs,I.capabilities=R,I.extensions=ie,I.properties=$,I.renderLists=dt,I.shadowMap=Lt,I.state=v,I.info=H}x!==en&&(A=new p0(x,e.width,e.height,l,i,r));const Et=new nm(I,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(Yt,w,!1))},this.getSize=function(y){return y.set(Yt,w)},this.setSize=function(y,O,J=!0){if(Et.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=y,w=O,e.width=Math.floor(y*N),e.height=Math.floor(O*N),J===!0&&(e.style.width=y+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Yt*N,w*N).floor()},this.setDrawingBufferSize=function(y,O,J){Yt=y,w=O,N=J,e.width=Math.floor(y*J),e.height=Math.floor(O*J),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(x===en){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Z)},this.getViewport=function(y){return y.copy(it)},this.setViewport=function(y,O,J,W){y.isVector4?it.set(y.x,y.y,y.z,y.w):it.set(y,O,J,W),v.viewport(Z.copy(it).multiplyScalar(N).round())},this.getScissor=function(y){return y.copy(ot)},this.setScissor=function(y,O,J,W){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,O,J,W),v.scissor(mt.copy(ot).multiplyScalar(N).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(y){v.setScissorTest(Ut=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){rt=y},this.getClearColor=function(y){return y.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,J=!0){let W=0;if(y){let X=!1;if(K!==null){const xt=K.texture.format;X=g.has(xt)}if(X){const xt=K.texture.type,St=d.has(xt),gt=Bt.getClearColor(),bt=Bt.getClearAlpha(),Tt=gt.r,kt=gt.g,Xt=gt.b;St?(S[0]=Tt,S[1]=kt,S[2]=Xt,S[3]=bt,B.clearBufferuiv(B.COLOR,0,S)):(E[0]=Tt,E[1]=kt,E[2]=Xt,E[3]=bt,B.clearBufferiv(B.COLOR,0,E))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),P=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Bt.dispose(),dt.dispose(),ht.dispose(),$.dispose(),at.dispose(),nt.dispose(),_t.dispose(),st.dispose(),ct.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",_o),Et.removeEventListener("sessionend",vo),jn.stop()};function ce(y){y.preventDefault(),Do("WebGLRenderer: Context Lost."),L=!0}function ee(){Do("WebGLRenderer: Context Restored."),L=!1;const y=H.autoReset,O=Lt.enabled,J=Lt.autoUpdate,W=Lt.needsUpdate,X=Lt.type;Ct(),H.autoReset=y,Lt.enabled=O,Lt.autoUpdate=J,Lt.needsUpdate=W,Lt.type=X}function an(y){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function _n(y){const O=y.target;O.removeEventListener("dispose",_n),Uc(O)}function Uc(y){Nc(y),$.remove(y)}function Nc(y){const O=$.get(y).programs;O!==void 0&&(O.forEach(function(J){ct.releaseProgram(J)}),y.isShaderMaterial&&ct.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,J,W,X,xt){O===null&&(O=Xe);const St=X.isMesh&&X.matrixWorld.determinantAffine()<0,gt=zc(y,O,J,W,X);v.setMaterial(W,St);let bt=J.index,Tt=1;if(W.wireframe===!0){if(bt=tt.getWireframeAttribute(J),bt===void 0)return;Tt=2}const kt=J.drawRange,Xt=J.attributes.position;let yt=kt.start*Tt,ne=(kt.start+kt.count)*Tt;xt!==null&&(yt=Math.max(yt,xt.start*Tt),ne=Math.min(ne,(xt.start+xt.count)*Tt)),bt!==null?(yt=Math.max(yt,0),ne=Math.min(ne,bt.count)):Xt!=null&&(yt=Math.max(yt,0),ne=Math.min(ne,Xt.count));const Me=ne-yt;if(Me<0||Me===1/0)return;_t.setup(X,W,gt,J,bt);let ue,oe=ft;if(bt!==null&&(ue=lt.get(bt),oe=et,oe.setIndex(ue)),X.isMesh)W.wireframe===!0?(v.setLineWidth(W.wireframeLinewidth*ve()),oe.setMode(B.LINES)):oe.setMode(B.TRIANGLES);else if(X.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),v.setLineWidth(Ne*ve()),X.isLineSegments?oe.setMode(B.LINES):X.isLineLoop?oe.setMode(B.LINE_LOOP):oe.setMode(B.LINE_STRIP)}else X.isPoints?oe.setMode(B.POINTS):X.isSprite&&oe.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))oe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ne=X._multiDrawStarts,vt=X._multiDrawCounts,Ge=X._multiDrawCount,Zt=bt?lt.get(bt).bytesPerElement:1,nn=$.get(W).currentProgram.getUniforms();for(let vn=0;vn<Ge;vn++)nn.setValue(B,"_gl_DrawID",vn),oe.render(Ne[vn]/Zt,vt[vn])}else if(X.isInstancedMesh)oe.renderInstances(yt,Me,X.count);else if(J.isInstancedBufferGeometry){const Ne=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,vt=Math.min(J.instanceCount,Ne);oe.renderInstances(yt,Me,vt)}else oe.render(yt,Me)};function xo(y,O,J,W){P!==null&&y.isNodeMaterial&&P.setObject(W,y),Dt===!0&&Rt.setState(y,J,!1),y.transparent===!0&&y.side===$e&&y.forceSinglePass===!1?(y.side=Ke,y.needsUpdate=!0,xs(y,O,W),y.side=ci,y.needsUpdate=!0,xs(y,O,W),y.side=$e):xs(y,O,W)}this.compile=function(y,O,J=null){J===null&&(J=y),P!==null&&P.renderStart(y,O,J),T=ht.get(J),T.init(O),M.push(T),J.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),y!==J&&y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),Nt=this.localClippingEnabled,Dt=Rt.init(this.clippingPlanes,Nt),Dt===!0&&Rt.setGlobalState(this.clippingPlanes,O),P!==null&&Lt.render(T.state.shadowsArray,J,O);const W=new Set;return y.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xt=X.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){const gt=xt[St];xo(gt,J,O,X),W.add(gt)}else xo(xt,J,O,X),W.add(xt)}),T=M.pop(),P!==null&&P.renderEnd(),W},this.compileAsync=function(y,O,J=null){const W=this.compile(y,O,J);return new Promise(X=>{function xt(){if(W.forEach(function(St){const bt=$.get(St).currentProgram;(bt===void 0||bt.isReady())&&W.delete(St)}),W.size===0){X(y);return}setTimeout(xt,10)}ie.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ur=null;function Fc(y){ur&&ur(y)}function _o(){jn.stop()}function vo(){jn.start()}const jn=new uc;jn.setAnimationLoop(Fc),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){ur=y,Et.setAnimationLoop(y),y===null?jn.stop():jn.start()},Et.addEventListener("sessionstart",_o),Et.addEventListener("sessionend",vo),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(y,O);const J=Et.enabled===!0&&Et.isPresenting===!0,W=A!==null&&(K===null||J)&&A.begin(I,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(O),O=Et.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,O,K),T=ht.get(y,M.length),T.init(O),T.state.textureUnits=j.getTextureUnits(),M.push(T),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),At.setFromProjectionMatrix(Pt,En,O.reversedDepth),Nt=this.localClippingEnabled,Dt=Rt.init(this.clippingPlanes,Nt),b=dt.get(y,C.length),b.init(),C.push(b),Et.enabled===!0&&Et.isPresenting===!0){const St=I.xr.getDepthSensingMesh();St!==null&&dr(St,O,-1/0,I.sortObjects)}dr(y,O,0,I.sortObjects),b.finish(),P!==null&&P.updateLights(T.state.lightsArray),I.sortObjects===!0&&b.sort(Q,rt),pe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,pe&&Bt.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Dt===!0&&Rt.beginShadows();const X=T.state.shadowsArray;if(Lt.render(X,y,O),Dt===!0&&Rt.endShadows(),(W&&A.hasRenderPass())===!1){const St=b.opaque,gt=b.transmissive;if(T.setupLights(),O.isArrayCamera){const bt=O.cameras;if(gt.length>0)for(let Tt=0,kt=bt.length;Tt<kt;Tt++){const Xt=bt[Tt];So(St,gt,y,Xt)}pe&&Bt.render(y);for(let Tt=0,kt=bt.length;Tt<kt;Tt++){const Xt=bt[Tt];Mo(b,y,Xt,Xt.viewport)}}else gt.length>0&&So(St,gt,y,O),pe&&Bt.render(y),Mo(b,y,O)}K!==null&&G===0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K)),W&&A.end(I),y.isScene===!0&&y.onAfterRender(I,y,O),_t.resetDefaultState(),V=-1,q=null,M.pop(),M.length>0?(T=M[M.length-1],j.setTextureUnits(T.state.textureUnits),Dt===!0&&Rt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,P!==null&&P.renderEnd()};function dr(y,O,J,W){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(At)){W&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const St=nt.update(y),gt=y.material;gt.visible&&b.push(y,St,gt,J,we.z,null,O)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(At))){const St=nt.update(y),gt=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),we.copy(St.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(gt)){const bt=St.groups;for(let Tt=0,kt=bt.length;Tt<kt;Tt++){const Xt=bt[Tt],yt=gt[Xt.materialIndex];yt&&yt.visible&&b.push(y,St,yt,J,we.z,Xt,O)}}else gt.visible&&b.push(y,St,gt,J,we.z,null,O)}}const xt=y.children;for(let St=0,gt=xt.length;St<gt;St++)dr(xt[St],O,J,W)}function Mo(y,O,J,W){const{opaque:X,transmissive:xt,transparent:St}=y;T.setupLightsView(J),Dt===!0&&Rt.setGlobalState(I.clippingPlanes,J),W&&v.viewport(Z.copy(W)),X.length>0&&gs(X,O,J),xt.length>0&&gs(xt,O,J),St.length>0&&gs(St,O,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function So(y,O,J,W){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const yt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new mn(1,1,{generateMipmaps:!0,type:yt?An:en,minFilter:ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const xt=T.state.transmissionRenderTarget[W.id],St=W.viewport||Z;xt.setSize(St.z*I.transmissionResolutionScale,St.w*I.transmissionResolutionScale);const gt=I.getRenderTarget(),bt=I.getActiveCubeFace(),Tt=I.getActiveMipmapLevel();I.setRenderTarget(xt),I.getClearColor(re),qt=I.getClearAlpha(),qt<1&&I.setClearColor(16777215,.5),I.clear(),pe&&Bt.render(J);const kt=I.toneMapping;I.toneMapping=pn;const Xt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),Dt===!0&&Rt.setGlobalState(I.clippingPlanes,W),gs(y,J,W),j.updateMultisampleRenderTarget(xt),j.updateRenderTargetMipmap(xt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ne=0,Me=O.length;ne<Me;ne++){const ue=O[ne],{object:oe,geometry:Ne,material:vt,group:Ge}=ue;if(vt.side===$e&&oe.layers.test(W.layers)){const Zt=vt.side;vt.side=Ke,vt.needsUpdate=!0,bo(oe,J,W,Ne,vt,Ge),vt.side=Zt,vt.needsUpdate=!0,yt=!0}}yt===!0&&(j.updateMultisampleRenderTarget(xt),j.updateRenderTargetMipmap(xt))}I.setRenderTarget(gt,bt,Tt),I.setClearColor(re,qt),Xt!==void 0&&(W.viewport=Xt),I.toneMapping=kt}function gs(y,O,J){const W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,xt=y.length;X<xt;X++){const St=y[X],{object:gt,geometry:bt,group:Tt}=St;let kt=St.material;kt.allowOverride===!0&&W!==null&&(kt=W),gt.layers.test(J.layers)&&bo(gt,O,J,bt,kt,Tt)}}function bo(y,O,J,W,X,xt){P!==null&&X.isNodeMaterial&&P.setObject(y,X),y.onBeforeRender(I,O,J,W,X,xt),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(I,O,J,W,y,xt),X.transparent===!0&&X.side===$e&&X.forceSinglePass===!1?(X.side=Ke,X.needsUpdate=!0,I.renderBufferDirect(J,O,W,X,y,xt),X.side=ci,X.needsUpdate=!0,I.renderBufferDirect(J,O,W,X,y,xt),X.side=$e):I.renderBufferDirect(J,O,W,X,y,xt),y.onAfterRender(I,O,J,W,X,xt)}function xs(y,O,J){O.isScene!==!0&&(O=Xe);const W=$.get(y),X=T.state.lights,xt=T.state.shadowsArray,St=X.state.version,gt=ct.getParameters(y,X.state,xt,O,J,T.state.lightProbeGridArray),bt=ct.getProgramCacheKey(gt);let Tt=W.programs;W.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const kt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;W.envMap=at.get(y.envMap||W.environment,kt),W.envMapRotation=W.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Tt===void 0&&(y.addEventListener("dispose",_n),Tt=new Map,W.programs=Tt);let Xt=Tt.get(bt);if(Xt!==void 0){if(W.currentProgram===Xt&&W.lightsStateVersion===St)return Eo(y,gt),Xt}else gt.uniforms=ct.getUniforms(y),P!==null&&y.isNodeMaterial&&P.build(y,J,gt),y.onBeforeCompile(gt,I),Xt=ct.acquireProgram(gt,bt),Tt.set(bt,Xt),W.uniforms=gt.uniforms;const yt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=Rt.uniform),Eo(y,gt),W.needsLights=kc(y),W.lightsStateVersion=St,W.needsLights&&(yt.ambientLightColor.value=X.state.ambient,yt.lightProbe.value=X.state.probe,yt.sunLights.value=X.state.sun,yt.sunLightShadows.value=X.state.sunShadow,yt.directionalLights.value=X.state.directional,yt.directionalLightShadows.value=X.state.directionalShadow,yt.spotLights.value=X.state.spot,yt.spotLightShadows.value=X.state.spotShadow,yt.rectAreaLights.value=X.state.rectArea,yt.ltc_1.value=X.state.rectAreaLTC1,yt.ltc_2.value=X.state.rectAreaLTC2,yt.pointLights.value=X.state.point,yt.pointLightShadows.value=X.state.pointShadow,yt.hemisphereLights.value=X.state.hemi,yt.sunShadowMatrix.value=X.state.sunShadowMatrix,yt.sunShadowCascade.value=X.state.sunShadowCascade,yt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,yt.spotLightMatrix.value=X.state.spotLightMatrix,yt.spotLightMap.value=X.state.spotLightMap,yt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=Xt,W.uniformsList=null,Xt}function yo(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=$s.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Eo(y,O){const J=$.get(y);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Oc(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let J=0,W=y.length;J<W;J++){const X=y[J];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function zc(y,O,J,W,X){O.isScene!==!0&&(O=Xe),j.resetTextureUnits();const xt=O.fog,St=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,gt=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$t.workingColorSpace,bt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Tt=at.get(W.envMap||St,bt),kt=W.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xt=!!J.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),yt=!!J.morphAttributes.position,ne=!!J.morphAttributes.normal,Me=!!J.morphAttributes.color;let ue=pn;W.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ue=I.toneMapping);const oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ne=oe!==void 0?oe.length:0,vt=$.get(W),Ge=T.state.lights;if(Dt===!0&&(Nt===!0||y!==q)){const he=y===q&&W.id===V;Rt.setState(W,y,he)}let Zt=!1;W.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ge.state.version||vt.outputColorSpace!==gt||X.isBatchedMesh&&vt.batching===!1||!X.isBatchedMesh&&vt.batching===!0||X.isBatchedMesh&&vt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&vt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&vt.instancing===!1||!X.isInstancedMesh&&vt.instancing===!0||X.isSkinnedMesh&&vt.skinning===!1||!X.isSkinnedMesh&&vt.skinning===!0||X.isInstancedMesh&&vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&vt.instancingMorph===!1&&X.morphTexture!==null||vt.envMap!==Tt||W.fog===!0&&vt.fog!==xt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Rt.numPlanes||vt.numIntersection!==Rt.numIntersection)||vt.vertexAlphas!==kt||vt.vertexTangents!==Xt||vt.morphTargets!==yt||vt.morphNormals!==ne||vt.morphColors!==Me||vt.toneMapping!==ue||vt.morphTargetsCount!==Ne||!!vt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,vt.__version=W.version);let nn=vt.currentProgram;Zt===!0&&(nn=xs(W,O,X),P&&W.isNodeMaterial&&P.onUpdateProgram(W,nn,vt));let vn=!1,Gn=!1,gi=!1;const ae=nn.getUniforms(),_e=vt.uniforms;if(v.useProgram(nn.program)&&(vn=!0,Gn=!0,gi=!0),W.id!==V&&(V=W.id,Gn=!0),vt.needsLights){const he=Oc(T.state.lightProbeGridArray,X);vt.lightProbeGrid!==he&&(vt.lightProbeGrid=he,Gn=!0)}if(vn||q!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ae.setValue(B,"projectionMatrix",y.projectionMatrix),ae.setValue(B,"viewMatrix",y.matrixWorldInverse);const Vn=ae.map.cameraPosition;Vn!==void 0&&Vn.setValue(B,te.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&ae.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),q!==y&&(q=y,Gn=!0,gi=!0)}if(vt.needsLights&&(Ge.state.sunShadowMap.length>0&&ae.setValue(B,"sunShadowMap",Ge.state.sunShadowMap,j),Ge.state.directionalShadowMap.length>0&&ae.setValue(B,"directionalShadowMap",Ge.state.directionalShadowMap,j),Ge.state.spotShadowMap.length>0&&ae.setValue(B,"spotShadowMap",Ge.state.spotShadowMap,j),Ge.state.pointShadowMap.length>0&&ae.setValue(B,"pointShadowMap",Ge.state.pointShadowMap,j)),X.isSkinnedMesh){ae.setOptional(B,X,"bindMatrix"),ae.setOptional(B,X,"bindMatrixInverse");const he=X.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),ae.setValue(B,"boneTexture",he.boneTexture,j))}X.isBatchedMesh&&(ae.setOptional(B,X,"batchingTexture"),ae.setValue(B,"batchingTexture",X._matricesTexture,j),ae.setOptional(B,X,"batchingIdTexture"),ae.setValue(B,"batchingIdTexture",X._indirectTexture,j),ae.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&ae.setValue(B,"batchingColorTexture",X._colorsTexture,j));const Hn=J.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&z.update(X,J,nn),(Gn||vt.receiveShadow!==X.receiveShadow)&&(vt.receiveShadow=X.receiveShadow,ae.setValue(B,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(_e.envMapIntensity.value=O.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=om()),Gn){if(ae.setValue(B,"toneMappingExposure",I.toneMappingExposure),vt.needsLights&&Bc(_e,gi),xt&&W.fog===!0&&wt.refreshFogUniforms(_e,xt),wt.refreshMaterialUniforms(_e,W,N,w,T.state.transmissionRenderTarget[y.id]),vt.needsLights&&vt.lightProbeGrid){const he=vt.lightProbeGrid;_e.probesSH.value=he.texture,_e.probesMin.value.copy(he.boundingBox.min),_e.probesMax.value.copy(he.boundingBox.max),_e.probesResolution.value.copy(he.resolution)}$s.upload(B,yo(vt),_e,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($s.upload(B,yo(vt),_e,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(B,"center",X.center),ae.setValue(B,"modelViewMatrix",X.modelViewMatrix),ae.setValue(B,"normalMatrix",X.normalMatrix),ae.setValue(B,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const he=W.uniformsGroups;for(let Vn=0,xi=he.length;Vn<xi;Vn++){const Ao=he[Vn];st.update(Ao,nn),st.bind(Ao,nn)}}return nn}function Bc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function kc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,O,J){const W=$.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(y.texture).__webglTexture=O,$.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:J,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const J=$.get(y);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,J=0){K=y,Y=O,G=J;let W=null,X=!1,xt=!1;if(y){const gt=$.get(y);if(gt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,gt.__webglFramebuffer),Z.copy(y.viewport),mt.copy(y.scissor),Mt=y.scissorTest,v.viewport(Z),v.scissor(mt),v.setScissorTest(Mt),V=-1;return}else if(gt.__webglFramebuffer===void 0)j.setupRenderTarget(y);else if(gt.__hasExternalTextures)j.rebindTextures(y,$.get(y.texture).__webglTexture,$.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const kt=y.depthTexture;if(gt.__boundDepthTexture!==kt){if(kt!==null&&$.has(kt)&&(y.width!==kt.image.width||y.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(xt=!0);const Tt=$.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?W=Tt[O][J]:W=Tt[O],X=!0):y.samples>0&&j.useMultisampledRTT(y)===!1?W=$.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?W=Tt[J]:W=Tt,Z.copy(y.viewport),mt.copy(y.scissor),Mt=y.scissorTest}else Z.copy(it).multiplyScalar(N).floor(),mt.copy(ot).multiplyScalar(N).floor(),Mt=Ut;if(J!==0&&(W=D),v.bindFramebuffer(B.FRAMEBUFFER,W)&&v.drawBuffers(y,W),v.viewport(Z),v.scissor(mt),v.setScissorTest(Mt),X){const gt=$.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,J)}else if(xt){const gt=O;for(let bt=0;bt<y.textures.length;bt++){const Tt=$.get(y.textures[bt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+bt,Tt.__webglTexture,J,gt)}}else if(y!==null&&J!==0){const gt=$.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gt.__webglTexture,J)}V=-1};function To(y){const O=$.get(y);return(O.__readFormat!==y.format||O.__readType!==y.type)&&(O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=R.textureFormatReadable(y.format),O.__typeReadable=R.textureTypeReadable(y.type)),O}this.readRenderTargetPixels=function(y,O,J,W,X,xt,St,gt=0){if(!(y&&y.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){v.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Tt=y.textures[gt],kt=Tt.format,Xt=Tt.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+gt);const yt=To(Tt);if(yt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-W&&J>=0&&J<=y.height-X&&B.readPixels(O,J,W,X,ut.convert(kt),ut.convert(Xt),xt)}finally{const Tt=K!==null?$.get(K).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,O,J,W,X,xt,St,gt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=$.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt)if(O>=0&&O<=y.width-W&&J>=0&&J<=y.height-X){v.bindFramebuffer(B.FRAMEBUFFER,bt);const Tt=y.textures[gt],kt=Tt.format,Xt=Tt.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+gt);const yt=To(Tt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.bufferData(B.PIXEL_PACK_BUFFER,xt.byteLength,B.STREAM_READ),B.readPixels(O,J,W,X,ut.convert(kt),ut.convert(Xt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Me=K!==null?$.get(K).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Me);const ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await yh(B,ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ne),B.deleteSync(ue),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,J=0){const W=Math.pow(2,-J),X=Math.floor(y.image.width*W),xt=Math.floor(y.image.height*W),St=O!==null?O.x:0,gt=O!==null?O.y:0;j.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,St,gt,X,xt),v.unbindTexture()},this.copyTextureToTexture=function(y,O,J=null,W=null,X=0,xt=0){let St,gt,bt,Tt,kt,Xt,yt,ne,Me;const ue=y.isCompressedTexture?y.mipmaps[xt]:y.image;if(J!==null)St=J.max.x-J.min.x,gt=J.max.y-J.min.y,bt=J.isBox3?J.max.z-J.min.z:1,Tt=J.min.x,kt=J.min.y,Xt=J.isBox3?J.min.z:0;else{const _e=Math.pow(2,-X);St=Math.floor(ue.width*_e),gt=Math.floor(ue.height*_e),y.isDataArrayTexture?bt=ue.depth:y.isData3DTexture?bt=Math.floor(ue.depth*_e):bt=1,Tt=0,kt=0,Xt=0}W!==null?(yt=W.x,ne=W.y,Me=W.z):(yt=0,ne=0,Me=0);const oe=ut.convert(O.format),Ne=ut.convert(O.type);let vt;O.isData3DTexture?(j.setTexture3D(O,0),vt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),vt=B.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),vt=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const Ge=v.getParameter(B.UNPACK_ROW_LENGTH),Zt=v.getParameter(B.UNPACK_IMAGE_HEIGHT),nn=v.getParameter(B.UNPACK_SKIP_PIXELS),vn=v.getParameter(B.UNPACK_SKIP_ROWS),Gn=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,ue.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),v.pixelStorei(B.UNPACK_SKIP_ROWS,kt),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const gi=y.isDataArrayTexture||y.isData3DTexture,ae=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const _e=$.get(y),Hn=$.get(O),he=$.get(_e.__renderTarget),Vn=$.get(Hn.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,he.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let xi=0;xi<bt;xi++)gi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(y).__webglTexture,X,Xt+xi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(O).__webglTexture,xt,Me+xi)),B.blitFramebuffer(Tt,kt,St,gt,yt,ne,St,gt,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||y.isRenderTargetTexture||$.has(y)){const _e=$.get(y),Hn=$.get(O);v.bindFramebuffer(B.READ_FRAMEBUFFER,U),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let he=0;he<bt;he++)gi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_e.__webglTexture,X,Xt+he):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,X),ae?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Hn.__webglTexture,xt,Me+he):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Hn.__webglTexture,xt),X!==0?B.blitFramebuffer(Tt,kt,St,gt,yt,ne,St,gt,B.COLOR_BUFFER_BIT,B.NEAREST):ae?B.copyTexSubImage3D(vt,xt,yt,ne,Me+he,Tt,kt,St,gt):B.copyTexSubImage2D(vt,xt,yt,ne,Tt,kt,St,gt);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ae?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(vt,xt,yt,ne,Me,St,gt,bt,oe,Ne,ue.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(vt,xt,yt,ne,Me,St,gt,bt,oe,ue.data):B.texSubImage3D(vt,xt,yt,ne,Me,St,gt,bt,oe,Ne,ue):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xt,yt,ne,St,gt,oe,Ne,ue.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xt,yt,ne,ue.width,ue.height,oe,ue.data):B.texSubImage2D(B.TEXTURE_2D,xt,yt,ne,St,gt,oe,Ne,ue);v.pixelStorei(B.UNPACK_ROW_LENGTH,Ge),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt),v.pixelStorei(B.UNPACK_SKIP_PIXELS,nn),v.pixelStorei(B.UNPACK_SKIP_ROWS,vn),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Gn),xt===0&&O.generateMipmaps&&B.generateMipmap(vt),v.unbindTexture()},this.initRenderTarget=function(y){$.get(y).__webglFramebuffer===void 0&&j.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?j.setTextureCube(y,0):y.isData3DTexture?j.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?j.setTexture2DArray(y,0):j.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){Y=0,G=0,K=null,v.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}function Mc(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},l=s[0].morphTargetsRelative,o=new We;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const p=s[f].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=s[f].attributes.position.count}o.setIndex(u)}for(const h in r){const u=Tl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;o.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][f]);const m=Tl(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;o.morphAttributes[h].push(m)}}}return o}function Tl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),l=new gn(a,e,n);let o=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=o/e;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);l.setComponent(f+u,m,x)}}else a.set(h.array,o);o+=h.count*e}return i!==void 0&&(l.gpuType=i),l}const Vt=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)};function Sc(s,t=!1){const e=new mi(s);return e.magFilter=e.minFilter=de,e.colorSpace=be,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=ki),e}function cm(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n={brick:["#48434c","#63585e","#292c35"],metal:["#626b6e","#b3b9b1","#343d45"],concrete:["#77776c","#a6a190","#484c49"],crate:["#696047","#988457","#30342c"],floor:["#46514f","#7e877b","#283338"],labfloor:["#52625f","#839488","#2a4143"],road:["#686a68","#a09f94","#424951"],ceiling:["#2c3a3a","#53635b","#142628"],door:["#3d5149","#7d8e77","#182b29"],fuel:["#954732","#c87647","#4d302b"]},i=n[s]??n.metal,r=(o,c,h,u,f)=>{e.fillStyle=o,e.fillRect(c,h,u,f)},a=(o,c,h=1)=>{e.strokeStyle=o,e.lineWidth=h,e.beginPath(),e.moveTo(c[0],c[1]);for(let u=2;u<c.length;u+=2)e.lineTo(c[u],c[u+1]);e.stroke()},l=(o,c)=>{r("#172827",o,c,4,4),r("#a2ac95",o,c,3,2),r("#63776b",o+1,c+2,2,1),r("#263e39",o+1,c+1,1,1)};r(i[0],0,0,128,128);for(let o=0;o<1500;o++)e.globalAlpha=.18+Vt(o)*.2,r(o%3?i[2]:i[1],Vt(o+1)*128|0,Vt(o+2)*128|0,1+o%3,1);if(e.globalAlpha=1,s==="brick"){for(let o=0;o<8;o++)for(let c=-1;c<5;c++){const h=c*32+o%2*16,u=o*16,f=o*5+c+2;e.globalAlpha=.15+Vt(f+70)*.15,r(f%3?i[1]:i[2],h+2,u+2,29,13),e.globalAlpha=1,r("#202832",h,u,32,2),r("#242930",h,u,2,16),r("#77656a",h+3,u+3,26,1),r("#584e56",h+2,u+4,1,9),r("#33323a",h+3,u+14,27,1),f%3===0&&(r("#292d35",h+22,u+3,3,2),r("#81716e",h+22,u+5,4,1)),f%4===0&&a("#302c35",[h+12,u+4,h+10,u+7,h+12,u+10,h+11,u+13]),r("#393a40",h+5,u+9,4,1),r("#62545a",h+17,u+7,6,1)}for(let o=0;o<15;o++)e.globalAlpha=.12,r("#1b302c",Vt(o+201)*128|0,Vt(o+231)*128|0,4,8);e.globalAlpha=1}else if(s==="fuel"){for(const o of[8,35,95,117])r("#252d33",0,o,128,5),r("#87918b",0,o,128,2);for(const o of[8,40,72,104])r("#d6b55e",o,48,24,34),r("#392e27",o+2,50,20,30),e.fillStyle="#efc368",e.beginPath(),e.moveTo(o+12,52),e.lineTo(o+20,66),e.lineTo(o+4,66),e.fill(),r("#312b25",o+11,56,2,6),r("#312b25",o+11,63,2,2),r("#d5be86",o+4,71,16,2),r("#a38960",o+4,76,12,1);for(let o=0;o<20;o++)r("#513e35",Vt(o+33)*128,Vt(o+66)*128,1,3+Vt(o+4)*8)}else if(["metal","ceiling","door"].includes(s)){for(let o=0;o<2;o++)for(let c=0;c<2;c++){const h=c*64,u=o*64;r(i[2],h,u,64,3),r(i[2],h,u,3,64),r(i[1],h+3,u+3,59,1),r("#8c9690",h+3,u+4,1,57);for(let f=0;f<46;f++){const p=h+5+(Vt(f+c*47+o*97)*51|0),m=u+5+(Vt(f+138)*52|0);e.globalAlpha=.12+Vt(f+8)*.18,r(f%3?i[2]:i[1],p,m,1+(Vt(f+77)*9|0),1)}e.globalAlpha=1,r(i[1],h+5,u+5,55,1),r("#89968f",h+4,u+7,1,38),r(i[2],h+59,u+8,2,47);for(const f of[7,55])for(const p of[7,55])l(h+f,u+p);for(let f=0;f<7;f++){const p=h+10+Vt(f+o*14+c*7)*42|0,m=u+13+f*6;r("#263d38",p,m,10,1),r("#748077",p+2,m+1,5,1)}if(r("#7e6643",h+3,u+48,3,12),r("#553f2b",h+6,u+55,6,4),s==="ceiling"||s==="metal"&&o===1&&c===1){r("#1a2d2e",h+17,u+19,31,27);for(let f=21;f<45;f+=4)r("#16252b",h+20,u+f,25,2),r("#83958b",h+20,u+f+2,25,1)}}if(s==="door"){r("#172929",12,14,104,93),r("#718573",14,16,100,2);for(let o=20;o<101;o+=8)r("#4f6b59",16,o,96,4),r("#263e37",16,o+4,96,3),r("#76917a",18,o,90,1);r("#c7ab53",0,108,128,13);for(let o=-16;o<144;o+=24)e.fillStyle="#242c28",e.beginPath(),e.moveTo(o,121),e.lineTo(o+12,108),e.lineTo(o+24,108),e.lineTo(o+12,121),e.fill();r("#132a28",60,0,4,108),r("#92a288",65,2,2,104);for(const o of[7,97])l(53,o),l(72,o)}}else if(s==="crate"){for(let o=0;o<128;o+=16){r("#3e4030",o,0,2,128),r("#a18c5b",o+3,3,1,119);for(let c=8;c<120;c+=11)r("#4f4c35",o+5,c,7,1)}for(const o of[0,60,120])r("#333a30",o,0,8,128),r("#77836b",o+1,2,2,123);for(const o of[0,60,120])r("#333a30",0,o,128,8),r("#8e916f",3,o+1,121,2);for(const o of[3,63,123])for(const c of[5,62,122])l(o,c);r("#c4b886",19,21,34,22),r("#292f27",22,24,28,3),r("#595b40",22,30,19,2);for(let o=23;o<49;o+=3)r("#3d4934",o,36,1,5)}else if(s==="floor"||s==="labfloor")for(let o=0;o<2;o++)for(let c=0;c<2;c++){const h=c*64,u=o*64;r(i[2],h,u,64,3),r(i[2],h,u,3,64),r(i[1],h+3,u+3,59,1),r("#54675b",h+3,u+4,1,57);for(let f=0;f<9;f++){const p=h+8+Vt(f+o*21+c*7)*44|0,m=u+9+Vt(f+90)*44|0;r("#637363",p,m,5,1),r("#243a35",p+1,m+1,7,1)}if(s==="floor"){l(h+7,u+7),l(h+54,u+54);for(let f=14;f<52;f+=9)for(let p=15;p<52;p+=12)a("#506157",[h+p,u+f,h+p+3,u+f-3,h+p+5,u+f-3])}else o===1&&c===0&&a("#263e38",[h+20,u+3,h+21,u+12,h+26,u+19,h+25,u+29,h+31,u+35,h+32,u+45])}else if(s==="concrete"){r("#273c3d",0,0,128,3),r("#7b8173",0,3,128,1),r("#344848",0,64,128,2),a("#2b3b3d",[17,4,20,19,14,32,17,40,9,48,7,65]),a("#728074",[19,5,22,20,16,32]),a("#293b3c",[105,65,103,81,94,92,94,101,89,108,88,125]),a("#687768",[105,82,110,89,120,91]);for(const o of[11,115])for(const c of[12,114])r("#273c3c",o,c,5,4),r("#8b8c78",o,c,4,1);for(let o=0;o<16;o++)e.globalAlpha=.15,r("#1b3436",8+o*7,5,3,10+Vt(o+4)*30);e.globalAlpha=1}else if(s==="road"){for(let o=0;o<128;o++)for(let c=0;c<128;c++){const h=Vt((c>>3)*17+(o>>3)*271),u=Vt(c*19+o*131),f=90+h*22+u*24,p=Math.round(f/5)*5;r(`rgb(${p},${p+2},${p})`,c,o,1,1)}for(let o=0;o<720;o++){const c=Vt(o+19)*128|0,h=Vt(o+81)*128|0,u=o%9===0?3:o%3===0?2:1;r(o%4===0?"#484d51":"#7b7e76",c,h,u,1),u>1&&(r("#99998c",c,h-1,u-1,1),r("#4d5353",c+1,h+1,u,1))}for(let o=0;o<27;o++)e.globalAlpha=.09,r(o%2?"#32414b":"#b1a998",Vt(o+53)*128|0,Vt(o+94)*128|0,3+(Vt(o)*13|0),2+(Vt(o+5)*7|0));e.globalAlpha=1,a("#3b4143",[97,57,95,62,99,66,96,73,103,78,102,84]),a("#898b7f",[98,57,97,61,100,66,98,73,105,77]),a("#41484a",[97,73,89,75,84,72,78,76]);for(let o=0;o<7;o++)r("#8b8c80",Vt(o+34)*128|0,Vt(o+65)*128|0,2,1)}return Sc(t,!0)}function hm(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=(i,r,a,l,o)=>{e.fillStyle=i,e.fillRect(r,a,l,o)};if(e.imageSmoothingEnabled=!1,s==="poster"){n("#142e32",4,3,118,122),n("#8ba084",8,7,110,110),n("#273a38",12,11,102,67);for(let i=0;i<12;i++)n(i%2?"#5b856e":"#365b54",19+i*7,20,3,44),n("#b2c09b",17+i*7,27+i%4*8,7,3);e.textAlign="center",e.fillStyle="#c8d4aa",e.font="bold 15px monospace",e.fillText("AXIOM",64,29),e.font="bold 9px monospace",e.fillText("A BETTER SPECIES",64,72),e.fillStyle="#293d37",e.fillText("LAZARUS / 2091",64,90),e.fillText("TRUST THE FUTURE",64,103),n("#597460",12,114,66,2),n("#203a34",22,119,86,2),n("#0d272d",4,100,5,15),n("#0d272d",119,8,5,16)}else if(s==="graffiti"){e.textAlign="center",e.font="bold 24px monospace",e.fillStyle="#cb5365",e.fillText("THEY LIED",64,54),e.font="bold 12px monospace",e.fillText("MARA IS ALIVE",64,74);for(let i=0;i<8;i++)n("#a33e50",14+i*14,56,1,5+Vt(i)*15);e.strokeStyle="#b75059",e.lineWidth=2,e.beginPath(),e.moveTo(8,83),e.lineTo(116,88),e.stroke()}else if(s==="paper"){n("#766e55",9,9,108,111),n("#c2b791",8,6,106,109),n("#aea17e",9,111,101,4),n("#3e4940",17,15,51,7),n("#7d4543",83,13,23,13);for(let i=0;i<13;i++)n("#6e7461",18,30+i*5,48+Vt(i)*37,1),i%3===0&&n("#9b9271",16,31+i*5,80,1);n("#7c5f50",75,69,28,22),n("#37473e",80,74,18,14),n("#b0a47c",12,93,16,13),e.fillStyle="#713f38",e.font="bold 8px monospace",e.fillText("CASE 091",36,105)}else if(s==="puddle"){e.fillStyle="#173541",e.beginPath();for(let i=0;i<20;i++){const r=i*Math.PI/10,a=45+Vt(i)*13,l=64+Math.cos(r)*a,o=64+Math.sin(r)*a*.65;i?e.lineTo(l,o):e.moveTo(l,o)}e.closePath(),e.fill();for(let i=0;i<14;i++)n(i%3?"#214f54":"#3a796a",20+Vt(i)*85,44+Vt(i+13)*41,7+Vt(i+9)*25,1);n("#548a73",34,49,27,1),n("#407869",73,58,21,1)}else if(s==="leak"){for(let i=0;i<40;i++)e.globalAlpha=.2+Vt(i)*.6,n(i%3?"#352d2a":"#806443",Vt(i)*128,Vt(i+5)*18,1+Vt(i+9)*4,19+Vt(i+3)*104);e.globalAlpha=1}else{n("#102a2b",0,0,128,128),n("#6a7a67",3,3,122,3),n("#3b5950",3,6,3,119);for(let i=0;i<6;i++)n("#203b36",10,12+i*17,75,11),n("#537766",13,15+i*17,42,2),n("#62dda0",17+i*8,17+i*17,5,3),n("#88a58b",94,14+i*17,18,6),n(i%2?"#edac58":"#74dca0",117,15+i*17,3,3);for(let i=0;i<9;i++)n("#899277",12+i*12,120,5,2)}return Sc(t)}const rn=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)},fm=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function um(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createImageData(64,64);for(let r=0;r<64;r++)for(let a=0;a<64;a++){const l=(a-31.5)/31,o=(r-31.5)/31,c=Math.sqrt(l*l+o*o),h=(r*64+a)*4;let u=0,f=[0,0,0];if(s==="shadow")u=Math.max(0,1-c*c)*.88,f=[6,12,18];else if(s==="mist")u=Math.max(0,1-c)*(.45+rn((a>>2)+(r>>2)*16)*.55),f=[168,196,184];else if(s==="blood"){const p=.7+rn((a>>2)+(r>>2)*16)*.28;u=c<p?.9:0,f=rn(a+r*64)>.7?[105,29,43]:[62,17,28],c<.48&&rn(a+r*7)>.77&&(f=[128,43,49])}else u=c<.32?1:c<.7&&rn((a>>1)+(r>>1)*32)>.58?.88:0,f=c<.36?[5,13,19]:c<.5?[93,97,83]:[43,52,51],Math.abs(l+o*.7)<.025&&c>.3&&c<.9&&(u=1,f=[16,25,30]);n.data[h]=f[0],n.data[h+1]=f[1],n.data[h+2]=f[2],n.data[h+3]=u>(fm[r%4*4+a%4]+.5)/16?255:0}e.putImageData(n,0,0);const i=new mi(t);return i.magFilter=i.minFilter=de,i.generateMipmaps=!1,i.colorSpace=be,i}class dm{shadows;rain;mist;impacts;blood;object=new Ee;normal=new k;forward=new k(0,0,1);marks=[];seen=new WeakSet;previous;materials=[];vents=[{x:4,z:-3},{x:-11.65,z:-11},{x:11.65,z:-17},{x:-9.6,z:-38.8},{x:9.6,z:-41}];constructor(t){const e=(r,a=1)=>{const l=new Ve({map:um(r),transparent:a<1,opacity:a,alphaTest:.01,depthWrite:!1,side:$e,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return this.materials.push(l),l},n=(r,a,l)=>{const o=new ac(r,a,l);return o.instanceMatrix.setUsage(qs),o.frustumCulled=!1,o.count=0,t.add(o),o};this.shadows=n(new Ie(1,1),e("shadow",.38),32),this.blood=n(new Ie(1,1),e("blood"),32),this.impacts=n(new Ie(1,1),e("impact"),64),this.impacts.renderOrder=1,this.blood.renderOrder=1,this.mist=n(new Ie(1,1),e("mist",.2),20);const i=new Ve({color:9287348,transparent:!0,opacity:.35,depthWrite:!1});this.materials.push(i),this.rain=n(new Ye(.013,.31,.013),i,112)}floor(t,e){return e>-20&&e<4&&Math.abs(t)>10.5?.167:.057}ground(t,e,n,i,r,a,l=this.floor(n,i)){this.object.position.set(n,l,i),this.object.rotation.set(-Math.PI/2,0,0),this.object.scale.set(r,a,1),this.object.updateMatrix(),t.setMatrixAt(e,this.object.matrix)}update(t,e,n,i){this.previous!==t&&(this.marks=[],this.seen=new WeakSet,this.previous=t,this.impacts.count=0);let r=0,a=0;for(const l of t.enemies){const o=l.kind==="brute"?1.05:l.kind==="raptor"?.6:.48;this.ground(this.shadows,r++,l.x,l.z,o*2.4,o*1.7),l.alive||this.ground(this.blood,a++,l.x,l.z,o*2.8,o*2.1,this.floor(l.x,l.z)+.004)}if(t.player.mounted||this.ground(this.shadows,r++,t.mount.x,t.mount.z,2.7,1.65),this.shadows.count=r,this.blood.count=a,this.shadows.instanceMatrix.needsUpdate=this.blood.instanceMatrix.needsUpdate=!0,this.rain.visible=i.quality==="high",this.rain.count=this.rain.visible?112:0,this.rain.visible)for(let l=0;l<this.rain.count;l++){const o=(rn(l+40)+n*(.54+rn(l+53)*.23))%1;this.object.position.set(-11.8+rn(l+7)*23.6,.3+(1-o)*7.5,3-rn(l+29)*22),this.object.rotation.set(0,0,-.13),this.object.scale.set(1,.6+rn(l+8)*.7,1),this.object.updateMatrix(),this.rain.setMatrixAt(l,this.object.matrix)}if(this.rain.instanceMatrix.needsUpdate=!0,this.mist.visible=i.quality==="high",this.mist.count=this.mist.visible?20:0,this.mist.visible)for(let l=0;l<this.mist.count;l++){const o=this.vents[l%this.vents.length],c=(rn(l+10)+n*.22)%1,h=.6+c*.85;this.object.position.set(o.x+Math.sin(l*2.3+n*.6)*c*.35,.18+c*1.35,o.z+Math.cos(l+n*.4)*c*.25),this.object.quaternion.copy(e.quaternion),this.object.scale.set(h,h*1.13,1),this.object.updateMatrix(),this.mist.setMatrixAt(l,this.object.matrix)}this.mist.instanceMatrix.needsUpdate=!0;for(const l of t.effects)l.kind==="spark"&&!this.seen.has(l)&&(this.seen.add(l),this.recordImpact(l));for(let l=0;l<this.marks.length;l++){const o=this.marks[l];this.object.position.copy(o.position),this.object.quaternion.setFromUnitVectors(this.forward,o.normal),this.object.scale.setScalar(o.size),this.object.updateMatrix(),this.impacts.setMatrixAt(l,this.object.matrix)}this.impacts.count=this.marks.length,this.impacts.instanceMatrix.needsUpdate=!0}recordImpact(t){let e=.045,n,i;for(const r of Le.walls){const a=r.y??0,l=a+r.h,o=[{axis:"x",value:t.x,center:r.x,half:r.w/2},{axis:"z",value:t.z,center:r.z,half:r.d/2}];if(!(t.y<a-.02||t.y>l+.02))for(const c of o){const h=c.axis==="x"?t.z-r.z:t.x-r.x,u=c.axis==="x"?r.d/2:r.w/2;if(Math.abs(h)>u+.015)continue;const f=c.value>=c.center?1:-1,p=c.center+f*c.half,m=Math.abs(c.value-p);m>=e||(e=m,n=new k(t.x,t.y,t.z),n[c.axis]=p+f*.013,this.normal.set(0,0,0),this.normal[c.axis]=f,i=this.normal.clone())}}n&&i&&(this.marks.push({position:n,normal:i,size:.15+rn(n.x+n.z)*.075}),this.marks.length>64&&this.marks.shift())}dispose(){for(const t of[this.shadows,this.rain,this.mist,this.impacts,this.blood])t.removeFromParent(),t.geometry.dispose();for(const t of this.materials)t.map?.dispose(),t.dispose()}}function pm(s){const t=s.mat(5005912),e=s.mat(1716275),n=s.mat(9279361),i=s.mat(7885891),r=s.mat(7496267),a=s.mat(9060163),l=s.box.bind(s),o=(f,p,m,x,g=6)=>{const d=p.clone().sub(f),S=d.length(),E=new Jt(m,m,S,g);E.applyQuaternion(new Ze().setFromUnitVectors(new k(0,1,0),d.normalize()));const _=f.clone().add(p).multiplyScalar(.5);s.addGeometry(E,x,_.x,_.y,_.z)},c=(f,p,m)=>new k(f,p,m),h=f=>{const p=Math.sin(f*127.1+91.7)*43758.5453;return p-Math.floor(p)};l(4.885,1.19,7.7,.045,.075,3.77,r),l(4.885,2.87,7.7,.045,.075,3.77,r);for(const f of[5.83,9.57])l(4.885,2.03,f,.045,1.72,.07,r);const u=[];for(let f=0;f<7;f++){const p=1.8+h(f)*.5,m=7.7+(h(f+10)-.5)*2.8;u.push(c(4.795,p+.125,m)),s.addGeometry(new Jt(.025,.025,.04,6),i,4.8,p+.125,m,0,0,Math.PI/2),l(4.842,p+.005,m-.035,.012,.17,.11,e),l(4.832,p+.035,m-.035,.008,.053,.04,n),l(4.832,p-.025,m-.035,.008,.06,.068,t);for(let x=0;x<3;x++)l(4.832,p-.115+x*.023,m+.028,.008,.009,.095-x*.015,i)}for(const[f,p]of[[0,2],[2,5],[5,1],[1,4],[4,3],[3,6],[6,2]])o(u[f],u[p],.008,a,4);l(2.75,2.6,11.958,2.77,1.84,.045,e),l(2.75,2.6,11.925,.045,1.84,.028,t);for(const f of[1.33,4.17])l(f,2.6,11.907,.09,1.94,.055,r);for(const f of[1.65,3.55])l(2.75,f,11.907,2.94,.09,.055,r);for(let f=0;f<16;f++){const p=1.78+f*.105;l(2.75,p,11.899,2.7,.062,.055,t),l(2.75,p+.028,11.865,2.69,.014,.012,n)}for(const f of[1.96,3.51])l(f,2.57,11.86,.016,1.72,.018,e);o(c(4.24,3.42,11.872),c(4.24,2.58,11.872),.007,n,4),s.addGeometry(new Jt(.035,.035,.08,6),r,4.24,2.55,11.872),s.addGeometry(new Jt(.345,.345,.07,16),t,0,3.33,11.914,Math.PI/2),s.addGeometry(new Jt(.299,.299,.014,16),n,0,3.33,11.868,Math.PI/2);for(let f=0;f<12;f++){const p=f*Math.PI/6;o(c(Math.sin(p)*.245,3.33+Math.cos(p)*.245,11.856),c(Math.sin(p)*.274,3.33+Math.cos(p)*.274,11.856),.009,e,4)}o(c(0,3.33,11.841),c(-.125,3.43,11.841),.014,e,4),o(c(0,3.33,11.838),c(.18,3.405,11.838),.009,e,4);for(const f of[-2.5,-12.8])for(const p of[0,.23]){let m=c(-12.8,6.13,f+p);for(let x=1;x<=12;x++){const g=-12.8+x*25.6/12,d=x/12,S=6.13-Math.sin(d*Math.PI)*1.12,E=c(g,S,f+p);o(m,E,.025,e),m=E}for(const x of[-1,1])l(x*12.81,6.11,f+p,.23,.2,.11,t),s.addGeometry(new Jt(.075,.075,.15,6),n,x*12.68,6.08,f+p,0,0,Math.PI/2)}for(const f of[-1,1])for(const p of[-3.4,-12.2,-16.6]){l(f*12.925,.87,p,.075,1.18,1.82,e);for(const m of[-.89,.89])l(f*12.875,.87,p+m,.035,1.13,.035,t);for(const m of[.33,1.4])l(f*12.875,m,p,.035,.03,1.8,t);for(const m of[-.65,.65])for(const x of[.43,1.3])l(f*12.846,x,p+m,.018,.045,.045,n);l(f*12.854,1.04,p+.6,.045,.26,.08,t),l(f*12.809,1.05,p+.6,.025,.18,.035,n),l(f*12.877,.84,p-.46,.14,.47,.36,t),l(f*12.798,.84,p-.46,.022,.37,.27,e),s.addGeometry(new Jt(.095,.095,.02,12),n,f*12.778,.9,p-.46,0,0,Math.PI/2),l(f*12.758,.9,p-.46,.014,.09,.018,i),l(f*12.761,.695,p-.46,.014,.032,.15,r),o(c(f*12.846,.57,p-.46),c(f*12.846,.21,p-.46),.019,i);for(const m of[.26,.46])l(f*12.81,m,p-.46,.027,.03,.06,n)}l(-6.7,1.26,-34.5,1.94,.12,1.16,e),s.addGeometry(new Jt(.24,.28,1.35,6),r,-6.63,1.49,-34.5,0,0,Math.PI/2),s.addGeometry(new lr(.205,8,4),r,-7.38,1.49,-34.5);for(const f of[-7.1,-6.55,-6.1])l(f,1.704,-34.5,.035,.018,.43,i);for(const f of[-35.045,-33.955]){l(-6.7,1.65,f,1.91,.055,.045,n);for(const p of[-7.59,-5.81])l(p,1.49,f,.045,.35,.045,t)}s.sign("LAZARUS / SPECIMEN 091",-6.7,2.33,-32.565,2.45,.42,Math.PI,"#b7a57b","#253631"),l(-7.5,1.67,-42.58,1.05,.34,.92,t),l(-7.5,1.867,-42.58,1.11,.055,.97,e);for(const f of[-7.91,-7.09]){l(f,1.876,-42.58,.05,.03,.94,n);for(const p of[-42.95,-42.21])l(f,1.66,p,.09,.12,.04,r)}l(-7.5,1.66,-42.095,.3,.035,.028,n),l(-7.5,1.728,-42.083,.07,.07,.018,i),s.sign("BIOLOGICAL TRANSFER / DO NOT OPEN",-9.965,2.48,-43.9,2.23,.52,Math.PI/2,"#b7a57b","#253631"),l(.92,1.385,-39.61,.66,.045,.36,e);for(const f of[.6,1.24])l(f,1.415,-39.61,.025,.055,.36,n);for(const f of[-39.78,-39.44])l(.92,1.415,f,.66,.055,.025,n);for(let f=0;f<3;f++){const p=.75+f*.16;l(p,1.416,-39.62,.017,.018,.2,n,-.17+f*.12),l(p,1.426,-39.695,.038,.01,.055,t,-.17+f*.12)}s.addGeometry(new nr(.034,.008,3,8),n,1.105,1.423,-39.565,Math.PI/2),s.addGeometry(new nr(.034,.008,3,8),n,1.04,1.423,-39.565,Math.PI/2),o(c(1.045,1.423,-39.595),c(1.1,1.423,-39.726),.007,n,4),o(c(1.1,1.423,-39.595),c(1.045,1.423,-39.726),.007,n,4)}const Wt=s=>{const t=Math.sin(s*153.73+12.81)*43857.193;return t-Math.floor(t)};function bc(s,t=!1){const e=new mi(s);return e.magFilter=e.minFilter=de,e.colorSpace=be,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=ki),e}function Wa(s,t,e,n){const i=s/e,r=t/e,a=Math.floor(i),l=Math.floor(r),o=i-a,c=r-l,h=(p,m)=>Wt(p*53+m*179+n),u=o*o*(3-2*o),f=c*c*(3-2*c);return(h(a,l)*(1-u)+h(a+1,l)*u)*(1-f)+(h(a,l+1)*(1-u)+h(a+1,l+1)*u)*f}function mm(s){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n={stucco:[184,177,158],terracotta:[146,100,76],porcelain:[171,175,160],shutter:[106,116,115],pavement:[122,123,112],paint:[185,183,171],stone:[170,169,150]},i=e.createImageData(256,256),r=n[s];for(let o=0;o<256;o++)for(let c=0;c<256;c++){const h=(o*256+c)*4,u=Wa(c,o,54,13),f=Wa(c,o,13,39),p=Wt(c+o*263),m=(u-.5)*35+(f-.5)*22+(p-.5)*24;for(let x=0;x<3;x++)i.data[h+x]=Math.max(0,Math.min(255,r[x]+m));i.data[h+3]=255}e.putImageData(i,0,0);const a=(o,c,h,u,f,p=1)=>{e.fillStyle=f,e.globalAlpha=p,e.fillRect(o,c,h,u),e.globalAlpha=1},l=(o,c,h,u)=>{for(let f=0;f<h;f++){const p=c+f*2,m=o+Math.floor(Math.sin(f*.53+u)*2+f*.26);if(a(m+1,p,1,3,"#d0c4a9",.38),a(m,p,1,3,"#3e433b",.54),f===Math.floor(h*.6))for(let x=0;x<9;x++)a(m-x,p+x,1,2,"#41433a",.35)}};if(s==="terracotta")for(let o=0;o<8;o++)for(let c=-1;c<5;c++){const h=c*64+o%2*32,u=o*32,f=o*5+c;a(h+3,u+3,59,27,f%3===0?"#af7959":"#5d493c",.13+Wt(f+90)*.21),a(h,u,64,3,"#8d8977"),a(h,u,3,32,"#8d8977"),a(h+3,u+3,60,1,"#d5a17c",.53),a(h+3,u+29,60,2,"#523c33",.68);for(let p=0;p<8;p++)a(h+4+Wt(f*7+p)*54,u+4+Wt(f*13+p+61)*23,2+Wt(p)*5,1,"#ccb294",.19);Wt(f+20)>.71&&l(h+29,u+7,10,f)}else if(s==="porcelain")for(let o=0;o<256;o+=32)for(let c=0;c<256;c+=32){const h=c*3+o;a(c+2,o+2,30,30,h%3?"#d7d0b9":"#6f8c7d",.07+Wt(h)*.2),a(c,o,32,2,"#5e6a60"),a(c,o,2,32,"#5e6a60"),a(c+3,o+3,27,1,"#eee4c8",.75),a(c+3,o+3,1,26,"#d3d4be",.5),a(c+29,o+4,1,27,"#6d776a",.6),Wt(h+67)>.78&&(a(c+2,o+2,4,3,"#777765"),a(c+2,o+5,2,4,"#93907c")),Wt(h+91)>.89&&l(c+10,o+8,8,h)}else if(s==="shutter"){for(let o=0;o<256;o+=12)a(0,o,256,2,"#243a3a"),a(0,o+2,256,2,"#b5bab0",.56),a(0,o+10,256,2,"#3e5050",.65);for(let o=0;o<50;o++){const c=Wt(o+1)*256|0,h=Wt(o+46)*256|0;a(c,h,1,6+(Wt(o+16)*34|0),"#6c4d36",.63),a(c+1,h+3,1,8,"#bb9d73",.41),a(c-1,h,3,2,"#bec7b5",.44)}}else if(s==="pavement")for(let o=0;o<256;o+=64)for(let c=0;c<256;c+=64)a(c,o,64,2,"#48514a"),a(c,o,2,64,"#48514a"),a(c+2,o+2,60,1,"#aaac98",.5),Wt(c+o+61)>.4&&l(c+11,o+9,18,c+o);else if(s==="stone")for(let o=0;o<256;o+=64){a(0,o,256,3,"#787e6d"),a(0,o+3,256,1,"#d0cab2",.66);for(let c=-64;c<256;c+=128)a(c+o%128*.5,o,3,64,"#7c8170")}else{for(let o=0;o<12;o++){const c=Wt(o+5)*256|0,h=Wt(o+7)*256|0,u=e.createLinearGradient(0,h,0,h+37);u.addColorStop(0,"rgba(67,74,57,.24)"),u.addColorStop(1,"rgba(67,74,57,0)"),e.fillStyle=u,e.fillRect(c,h,4+Wt(o+30)*8,39),o<4&&l(c,h,12+Wt(o+29)*16|0,o)}for(let o=0;o<18;o++){const c=Wt(o+73)*256,h=Wt(o+129)*256,u=4+Wt(o+84)*16,f=2+Wt(o+16)*9;a(c,h,u,f,"#aaa087",.43),a(c+1,h+1,u-2,f-2,"#d6cbb0",.35)}}return bc(t,!0)}function lo(s=128,t=192){const e=document.createElement("canvas");e.width=s*2,e.height=t*2;const n=e.getContext("2d");return n.scale(2,2),{canvas:e,g:n,rect:(c,h,u,f,p)=>{n.fillStyle=p,n.fillRect(c,h,u,f)},poly:(c,h)=>{n.fillStyle=h,n.beginPath(),c.forEach(([u,f],p)=>p?n.lineTo(u,f):n.moveTo(u,f)),n.closePath(),n.fill()},ellipse:(c,h,u,f,p)=>{n.fillStyle=p,n.beginPath(),n.ellipse(c,h,u,f,0,0,Math.PI*2),n.fill()},shade:(c,h,u,f,p)=>{const m=n.createLinearGradient(c,h,c+u,h+f);p.forEach((x,g)=>m.addColorStop(g/(p.length-1),x)),n.fillStyle=m,n.fillRect(c,h,u,f)},text:(c,h,u,f,p="serif")=>{n.font=`bold ${u}px ${p}`,n.textAlign="center",n.fillStyle="#181f24",n.fillText(c,s/2+1,h+1),n.fillStyle=f,n.fillText(c,s/2,h)}}}function co(s,t=.5){const e=s.getContext("2d"),n=e.getImageData(0,0,s.width,s.height),i=n.data,r=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let a=0;a<s.height;a++)for(let l=0;l<s.width;l++){const o=(a*s.width+l)*4,c=(Wt(l+a*s.width+88)-.5)*12*t,h=(r[a%4*4+l%4]-7.5)*.55,u=(Wa(l,a,31,28)-.5)*14*t;for(let f=0;f<3;f++)i[o+f]=Math.max(0,Math.min(255,Math.round((i[o+f]+c+h+u)/8)*8))}return e.putImageData(n,0,0),bc(s)}function gm(s){const{canvas:t,g:e,rect:n,poly:i,ellipse:r,shade:a,text:l}=lo();if(n(0,0,128,192,s==="eden"?"#a39898":"#c2b796"),s==="vesper"){a(5,5,118,180,["#775c4b","#26373b","#151d26"]),r(91,61,22,23,"#c5a46b"),r(88,59,19,20,"#d7b674");for(let o=0;o<13;o++){const c=7+o*9,h=22+(Wt(o+56)*51|0);a(c,142-h,9,h,["#273238","#0f1b26"]);for(let u=144-h;u<137;u+=6)Wt(o+u)>.35&&n(c+2,u,2,2,"#c3aa73")}i([[28,141],[31,127],[43,117],[69,113],[90,129],[99,148]],"#101b26"),a(34,129,61,22,["#4e5555","#17242e","#0e1824"]),i([[46,115],[51,137],[59,130],[68,116]],"#b4aa8d"),i([[36,124],[44,118],[51,147],[44,145]],"#716b5c"),i([[73,118],[86,128],[75,147],[68,135]],"#3c4d54"),r(61,92,18,26,"#302b2a"),r(64,91,14,23,"#a88560"),i([[62,73],[74,79],[75,98],[69,108],[60,113],[54,103],[56,86]],"#c5a173"),i([[54,88],[60,95],[55,107],[49,102],[46,89]],"#73644f"),i([[68,87],[73,96],[65,99],[67,94]],"#e3ba85"),i([[59,105],[67,106],[71,102],[70,109],[63,113]],"#765747"),n(59,102,9,1,"#493a34"),n(61,110,7,1,"#c49b70"),e.lineWidth=2,e.strokeStyle="#252528",e.beginPath(),e.moveTo(49,84),e.lineTo(77,93),e.stroke(),r(69,89,5,5,"#212329"),n(55,88,5,1,"#303436"),n(58,88,1,1,"#d4e0c1"),i([[45,70],[49,52],[72,50],[80,70]],"#514435"),i([[50,53],[58,57],[70,53],[73,67],[49,67]],"#776248"),n(47,66,31,5,"#232b2b"),r(62,74,30,5,"#292a26"),r(61,72,29,3,"#79654b");for(let o=0;o<21;o++)n(47+Wt(o)*28,54+Wt(o+39)*12,1,1,"#a48c64");i([[84,129],[91,128],[96,150],[83,150],[81,136]],"#7e9494");for(let o=0;o<5;o++)n(83+o*.7,132+o*3,10,1,"#c3c5ac"),n(82+o*.7,133+o*3,10,2,"#34494e");r(87,133,3,3,"#b8b796"),r(87,133,1.4,1.4,"#574f42");for(let o=0;o<15;o++)n(34+Wt(o+42)*44,132+Wt(o+99)*18,2,1,"#536365");l("VESPER",28,20,"#ead4a3"),l("MIDNIGHT",167,17,"#d7bb87"),l("THE ELIAS VANE FILES",181,6.8,"#c9b790","monospace")}else if(s==="eden"){a(5,5,118,180,["#61566d","#253243","#16212d"]);for(let o=0;o<7;o++)e.globalAlpha=.15,i([[12+o*17,38],[52+o*5,145],[22+o*12,145]],o%2?"#9ccac5":"#d191af");e.globalAlpha=1;for(let o=0;o<85;o++)n(7+Wt(o+20)*113,44+Wt(o+42)*103,1,1,o%2?"#a4c7c2":"#766a87");r(64,78,22,27,"#232738"),r(64,79,14,23,"#c2997d"),i([[59,60],[72,68],[74,85],[68,97],[60,97],[54,86],[53,74]],"#d5b28b"),i([[53,74],[57,83],[58,91],[63,96],[57,96],[50,87]],"#967567"),i([[65,76],[68,87],[63,87],[63,82]],"#e3c39c"),n(60,90,9,2,"#70474d"),n(63,92,5,1,"#cd8c86"),e.strokeStyle="#202332",e.lineWidth=1.3;for(const o of[57,67])e.beginPath(),e.moveTo(o,77),e.lineTo(o+5,78),e.stroke();r(62,56,18,9,"#282739"),i([[45,65],[58,56],[48,98],[38,100]],"#222433"),i([[72,61],[82,70],[89,114],[75,100]],"#292c3b");for(let o=0;o<14;o++)e.strokeStyle=o%2?"#615272":"#434452",e.beginPath(),e.moveTo(43+o*2.5,62),e.bezierCurveTo(44+o*2,78,41+o*3,81,43+o*2.9,102),e.stroke();i([[49,96],[58,104],[68,103],[77,96],[82,136],[41,137]],"#673955"),i([[55,99],[63,111],[69,99]],"#e4b996"),i([[47,104],[43,134],[52,139],[56,111]],"#3f3047"),i([[76,101],[83,110],[91,95],[95,98],[88,123],[79,124]],"#c59481"),i([[43,137],[56,137],[56,153],[40,153]],"#182332"),i([[62,136],[74,137],[82,153],[67,153]],"#192331");for(let o=0;o<21;o++)n(48+Wt(o+17)*26,108+Wt(o+16)*27,1,1,"#b06d89");n(91,86,2,66,"#bbc0ab"),r(91,84,5,7,"#727f82"),n(88,79,5,8,"#b6bcab");for(let o=0;o<4;o++)n(89,80+o*2,5,1,"#4a5764");r(90,155,10,2,"#737e84"),l("EDEN",31,27,"#dfb0c4"),l("AFTER DARK",48,11,"#d0d9ca","monospace"),l("LIVE IN VESPER",172,10,"#c7c5b7"),l("ONE NIGHT. EVERY NIGHT.",182,5.8,"#bda8ab","monospace")}else{a(5,5,118,180,["#cad0b4","#91aaa1","#29454c"]),n(9,9,110,31,"#2b515a"),l("HELIX",32,22,"#dddcc2"),l("A BETTER TOMORROW",56,8.7,"#263c43","monospace");for(let o=0;o<28;o++){const c=66+o*2.7,h=26+Math.sin(o*.32)*12,u=101-Math.sin(o*.32)*12;r(h,c,2,2,"#587e74"),r(u,c,2,2,"#456b69"),o%2===0&&(e.strokeStyle="#7b9b89",e.lineWidth=.5,e.beginPath(),e.moveTo(h,c),e.lineTo(u,c),e.stroke())}r(61,113,31,12,"#406657"),r(62,108,28,9,"#708773"),i([[35,109],[22,116],[11,122],[29,119],[44,116]],"#4f7461"),i([[79,108],[86,94],[100,88],[111,92],[114,100],[98,101],[89,112]],"#6b8066"),i([[98,92],[112,96],[108,101],[94,100]],"#a0a480"),r(104,94,2,2,"#243e39"),n(104,93,1,1,"#dcd185"),i([[96,102],[108,102],[104,107],[92,105]],"#3b5147");for(let o=0;o<5;o++)i([[95+o*2,102],[96+o*2,105],[97+o*2,102]],"#d8d3a7");i([[50,115],[46,129],[57,133],[54,142],[67,142],[58,138],[62,127],[61,117]],"#526a55"),i([[74,116],[68,129],[77,133],[80,143],[89,143],[84,139],[84,126],[83,115]],"#70816a");for(let o=0;o<3;o++)n(60+o*3,141,1,2,"#d8cf9e"),n(82+o*2,141,1,2,"#d8cf9e");i([[85,105],[79,117],[86,120],[88,119],[84,116],[89,108]],"#859376");for(let o=0;o<180;o++){const c=34+Wt(o)*52,h=101+Wt(o+34)*19;((c-61)/29)**2+((h-112)/11)**2<1&&r(c,h,.65,.55,o%2?"#a7ad89":"#405c4e")}l("GENETICS FOR LIFE",159,9.6,"#e0dac0"),l("TRUST THE SCIENCE",176,9,"#bfd1bf","monospace")}for(let o=0;o<63;o++)e.globalAlpha=.12,n(5+Wt(o+27)*118,6+Wt(o+117)*177,1,1+Wt(o+21)*3,o%2?"#d9d1b5":"#202831");return e.globalAlpha=1,co(t,.8)}function xm(){const{canvas:s,g:t,rect:e,poly:n,ellipse:i,shade:r,text:a}=lo(128,160);r(0,0,128,160,["#bbaa78","#715c3c","#292d30"]),e(5,5,118,150,"#352d2c"),e(8,8,112,144,"#b8a773"),e(12,12,104,136,"#333d3c"),a("VESPER",35,21,"#e6d2a0"),a("NIGHT DINER",52,10,"#ceb887","monospace"),i(64,111,36,9,"#b8b396"),i(64,108,34,7,"#e3d3ae"),i(63,108,27,3,"#7c7c62"),t.strokeStyle="#d1c29c",t.lineWidth=6,t.beginPath(),t.ellipse(88,88,12,10,0,0,Math.PI*2),t.stroke(),n([[34,79],[85,79],[80,105],[71,112],[50,110],[40,103]],"#b0ad87"),n([[42,79],[75,80],[71,107],[54,107],[45,101]],"#e4d7aa"),n([[35,82],[40,101],[51,108],[52,103],[45,86]],"#7e8369"),i(60,79,25,7,"#ece0b2"),i(60,79,21,4,"#594633"),i(58,77,14,2,"#927b51");for(let l=0;l<4;l++)t.strokeStyle=l%2?"#9fa382":"#c3bc92",t.lineWidth=1.8,t.beginPath(),t.moveTo(48+l*8,71),t.bezierCurveTo(39+l*9,59,58+l*7,67,53+l*7,56),t.stroke();a("COFFEE UNTIL DAWN",135,6.3,"#c6b98f","monospace"),a("EST. 2041",145,6,"#a9a681","monospace");for(const l of[8,120])for(const o of[8,152])i(l,o,2,2,"#d4c7a1"),e(l-1,o,2,.5,"#635b43");return co(s,1)}function _m(s){const{canvas:t,g:e,rect:n,poly:i,ellipse:r,shade:a,text:l}=lo(192,132);a(0,0,192,132,s==="diner"?["#403c32","#68533f","#172629"]:["#34474b","#48424a","#1a2835"]),i([[0,0],[39,22],[39,104],[0,132]],"#343734"),i([[192,0],[151,22],[151,104],[192,132]],"#252d31"),a(39,22,112,82,s==="diner"?["#70745b","#64563f","#3b453d"]:["#5b6765","#39404a","#383b45"]);for(let o=27;o<88;o+=12)for(let c=40;c<150;c+=18)n(c,o,17,.8,"#33443a"),n(c,o,1,12,"#39463c");n(10,16,170,2,"#b1b295"),n(44,23,104,2,s==="diner"?"#d4ba88":"#8caab0");for(const o of[58,134])i([[o-11,1],[o+11,1],[o+15,8],[o-15,8]],"#222e32"),r(o,8,13,2,"#bfc2a0");if(s==="diner"){n(49,34,41,27,"#26352e"),n(50,35,39,25,"#33493c"),e.font="italic 5px serif",e.fillStyle="#b8c19f",e.textAlign="left",e.fillText("Tonight’s special",54,43),e.fillText("Coffee / Pie",54,51),e.fillText("OPEN ALL NIGHT",54,58),n(112,34,26,35,"#959a7c"),a(115,37,20,20,["#606b61","#303e3b"]),n(116,61,16,2,"#c2baa1");for(let o=0;o<3;o++){n(39,73+o*13,112,3,"#403d32"),n(40,73+o*13,111,.8,"#ac9671");for(let c=0;c<8;c++){const h=47+c*12.3;r(h,70+o*13,4.5,1.5,"#a7b091"),n(h-3,64+o*13,6,6,"#c0c1a3"),n(h-3,65+o*13,1,5,"#838e79")}}i([[8,98],[177,98],[191,113],[0,113]],"#b39b70"),a(0,113,192,19,["#746b55","#4b5045"]),r(110,100,18,3,"#cad0ad"),r(110,99,13,2,"#937750");for(const o of[24,60,154])r(o,100,5,2,"#d3c7a7"),n(o-4,95,8,5,"#d3c7a7"),r(o,94,4,1.3,"#6e6042")}else{for(let o=0;o<3;o++)for(let c=0;c<8;c++){const h=43+c*13.3,u=32+o*21;a(h,u,12,18,[["#967058","#644a4c"],["#8b9492","#405663"],["#ad9e7c","#5a5b59"]][(o+c)%3]),r(h+6,u+8,3,4,["#cfb691","#b4c3b4","#a9897f"][c%3]),n(h+2,u+14,8,1,"#d5c5a8")}i([[0,111],[26,94],[164,94],[192,111]],"#7a8580"),a(0,111,192,21,["#526665","#253944"]);for(let o=0;o<15;o++)n(8+o*12,104,8,3,["#b5a078","#839b9b","#926871"][o%3]);l("EDEN RECORDS",16,8,"#9dbcbc","monospace")}return co(t,.35)}const hn=s=>{const t=Math.sin(s*137.63+9.31)*47815.129;return t-Math.floor(t)};function vm(s){const t=s.box.bind(s),e=new Map,n=(w,N=16777215)=>{let Q=e.get(w);return Q||(Q=mm(w),e.set(w,Q)),new Ys({map:Q,color:N})},i=n("stucco"),r=n("terracotta"),a=n("porcelain"),l=n("shutter"),o=n("pavement"),c=n("stone",15850938),h=n("stone",15197141),u=n("paint",11761237),f=n("paint",10188416);n("paint",11053699);const p=n("paint",8681863),m=n("paint",9478308),x=n("paint",7575445),g=s.mat(6714745),d=s.mat(2503483),S=s.mat(1318955),E=s.mat(1123892),_=s.mat(3946546,1971720),b=s.mat(2374725,1059377),T=s.basic(16760677),C=s.basic(15761066),M=s.basic(7653083),A=s.basic(9556913),I=s.basic(12168313),L=s.basic(6524056),P=new Map,D=new Map,U=(w,N,Q,rt=2.1,it=1.38,ot=2.08)=>{let Ut=P.get(w);Ut||(Ut=new Ve({map:gm(w)}),P.set(w,Ut)),t(N*12.785,rt,Q,.08,ot+.16,it+.16,d),s.addGeometry(new Ie(it,ot),Ut,N*12.732,rt,Q,0,-N*Math.PI/2);for(const At of[-it/2-.035,it/2+.035])t(N*12.719,rt,Q+At,.022,ot+.1,.04,g)},F=(w,N,Q,rt,it,ot=.14,Ut=.18)=>t(w*12.8,N,Q,Ut,ot,rt,it),Y=(w,N,Q,rt)=>{t(w*12.8,Q/2,N,.22,Q,.24,rt),t(w*12.74,.29,N,.33,.35,.42,d),t(w*12.72,Q-.2,N,.37,.25,.42,rt),t(w*12.691,Q-.05,N,.44,.08,.48,h)},G=(w,N,Q,rt,it,ot=!1)=>{t(w*12.856,2.22,N,.028,2.2,Q,rt);for(const Pt of[-Q/2-.065,Q/2+.065])t(w*12.746,2.22,N+Pt,.15,2.2+.22,.13,d);for(const Pt of[1.07,3.37])t(w*12.735,Pt,N,.17,.13,Q+.25,h);t(w*12.746,.89,N,.13,.19,Q+.23,d);const Dt=w<0?"diner":"records";let Nt=D.get(Dt);if(Nt||(Nt=new Ve({map:_m(Dt)}),D.set(Dt,Nt)),s.addGeometry(new Ie(Q-.04,2.2-.045),Nt,w*12.828,2.22,N,0,-w*Math.PI/2),t(w*12.789,1.16,N,.04,.05,Q-.21,c),!ot){for(let Pt=1;Pt<3;Pt++)t(w*12.701,2.22,N-Q/2+Pt*Q/3,.055,2.2,.045,g);for(let Pt=0;Pt<2;Pt++)t(w*12.695,2.8-Pt*.12,N+.3+Pt*.2,.02,.08,.41-Pt*.1,it)}},K=(w,N,Q,rt,it=6.55)=>{F(w,it-.25,N,Q,rt,.24,.34),F(w,it,N,Q+.18,h,.14,.45),F(w,it+.12,N,Q+.27,d,.1,.48);for(let ot=-Q/2+.27;ot<Q/2;ot+=.68)t(w*12.685,it-.49,N+ot,.22,.24,.13,rt)},V=(w,N,Q,rt,it)=>{t(w*12.39,3.85,N,1.13,.1,Q,d);for(let ot=0;ot<Math.round(Q/.35);ot++)t(w*12.39,3.923,N-Q/2+.175+ot*.35,1.14,.024,.32,ot%2?it:rt);t(w*11.82,3.65,N,.065,.35,Q,rt);for(let ot=-Q/2+.2;ot<Q/2;ot+=.7)t(w*11.784,3.66,N+ot,.02,.035,.26,it)},q=(w,N,Q,rt,it,ot,Ut=4.6,At=.87)=>{t(w*12.735,Ut,N,.29,At+.24,rt+.28,d),t(w*12.566,Ut+At/2+.084,N,.065,.048,rt+.21,h),s.sign(Q,w*12.553,Ut,N,rt,At,-w*Math.PI/2,it,ot)},Z=new Ve({map:xm()}),mt=(w,N,Q,rt,it,ot=1.38,Ut=2.1,At=!1)=>{const Dt=w*11.77,Nt=4.8;t(w*12.25,6.01,N,1.35,.1,.11,d),t(w*12.88,5.75,N,.14,.65,.15,g),t(Dt,Nt,N,ot+.15,Ut+.15,.18,d),t(Dt,Nt+Ut/2+.1,N,ot+.25,.06,.24,h),At?(s.addGeometry(new Ie(ot,Ut),Z,Dt,Nt,N+.105),s.addGeometry(new Ie(ot,Ut),Z,Dt,Nt,N-.105,0,Math.PI)):(s.sign(Q,Dt,Nt,N+.105,ot,Ut,0,rt,it),s.sign(Q,Dt,Nt,N-.105,ot,Ut,Math.PI,rt,it))};t(-12.947,3.22,.1,.065,6.44,6.5,i),t(-12.925,.61,.1,.06,1.22,6.5,a),t(-12.924,5.55,.1,.065,1.1,6.5,r);for(const w of[-3.23,3.35])Y(-1,w,6.4,c);F(-1,1.12,.1,6.5,u,.1),F(-1,3.48,.1,6.5,c,.18,.24),G(-1,-1.7,3.2,_,T,!0),t(-12.825,1.92,1.71,.075,2.56,1.26,f),t(-12.776,2.38,1.71,.025,1.43,.86,_),t(-12.75,1.37,1.28,.035,.22,.047,T);for(const w of[1.045,2.375])t(-12.753,1.91,w,.11,2.68,.12,c);F(-1,3.3,1.71,1.53,c,.12),q(-1,.05,"VESPER / NIGHT DINER",5.65,"#ffcc79","#442b30"),V(-1,.03,6.2,u,c),K(-1,.1,6.5,u,6.49),mt(-1,2.57,"VESPER / NIGHT DINER","#ffd187","#47302e",1.75,2.38,!0);for(const w of[-1.7,1.65]){t(-12.885,5.47,w,.08,1.18,1.23,E);for(const N of[-.66,.66])t(-12.786,5.47,w+N,.14,1.29,.12,c);for(const N of[4.85,6.1])F(-1,N,w,1.39,c,.095,.26);t(-12.778,5.47,w,.065,1.18,.055,d),t(-12.774,5.47,w,.065,.055,1.2,d);for(const N of[-.31,.31])t(-12.844,5.47,w+N,.016,1.02,.5,I)}t(-12.936,4.84,-7,.078,3.1,3.89,f);for(const w of[-5.02,-8.98])Y(-1,w,6.38,u);F(-1,3.36,-7,3.89,d,.17,.34),q(-1,-7,"LAST CHANCE",3.46,"#ffe0a1","#592d3c",4.43,.76),K(-1,-7,3.99,f,6.43);for(const w of[-5.4,-8.59])t(-12.72,2.42,w,.16,.57,.17,d),t(-12.62,2.42,w,.05,.4,.09,T),t(-12.64,2.76,w,.11,.11,.28,c);mt(-1,-8.92,"LAST / CHANCE","#f8ca89","#432434",1.38,1.75);for(let w=0;w<6;w++)t(-12.762,5.55,-8.45+w*.58,.045,.055,.19,T);t(-12.946,3.48,-13.77,.069,6.96,7.55,i),t(-12.919,1.07,-13.77,.04,2.14,7.55,r);for(const w of[-9.94,-13.65,-17.58])Y(-1,w,6.9,u);t(-12.845,2.22,-15.56,.068,2.14,2.99,l);for(const w of[-1.53,1.53])t(-12.778,2.22,-15.56+w,.13,2.33,.14,f);U("vesper",-1,-11.65,2.23,2.55,3.2),q(-1,-13.77,"VESPER PICTURE HOUSE",6.9,"#e3c389","#332b30",4.6,.77),V(-1,-13.77,7.1,f,c),K(-1,-13.77,7.55,u,6.95);for(const w of[-11.72,-15.48]){t(-12.875,5.84,w,.08,1.15,2.47,E);for(let N=0;N<4;N++)t(-12.78,5.84,w-1.19+N*.79,.12,1.31,.1,c);for(const N of[5.19,6.49])F(-1,N,w,2.65,c,.1,.26)}t(-12.928,3.41,-18.76,.056,6.78,2.26,r),F(-1,6.72,-18.76,2.4,d,.24,.36),t(12.946,3.35,-.23,.068,6.7,8.35,i),t(12.925,.55,-.23,.053,1.1,8.35,m);for(const w of[3.96,-4.42])Y(1,w,6.64,h);G(1,.82,3.17,b,M),t(12.82,1.94,3.07,.11,2.6,1.27,d),t(12.755,2.19,3.07,.025,1.76,.83,b);for(const w of[2.39,3.75])t(12.725,1.96,w,.115,2.72,.12,h);t(12.69,1.36,2.69,.046,.2,.05,M),U("eden",1,-2.23,2.2,1.55,2.35),q(1,-.23,"EDEN / SOUND & VISION",7.47,"#a6ddec","#2d344c",4.66,.85),V(1,-.2,8.1,m,h),K(1,-.23,8.35,m,6.74);for(const w of[1.29,-2.29]){t(12.859,5.73,w,.084,1.03,1.89,E);for(const N of[-.98,.98])t(12.755,5.73,w+N,.13,1.23,.13,h);for(const N of[5.13,6.34])F(1,N,w,2.14,h,.1,.28);t(12.777,5.73,w,.09,1.09,.07,d),t(12.82,5.73,w-.46,.028,.93,.83,L)}t(12.945,3.55,-7.84,.07,7.1,6.71,p),t(12.926,.57,-7.84,.048,1.14,6.71,r);for(const w of[-4.47,-11.23])Y(1,w,7.1,m);G(1,-4.5,3.2,E,C,!0),t(12.829,1.91,-8.8,.08,2.54,1.88,f);for(const w of[-9.79,-7.81])t(12.75,1.91,w,.12,2.73,.13,m);for(let w=0;w<6;w++)t(12.779,.88+w*.31,-8.8,.025,.09,1.79,d);U("eden",1,-10.28,2.23,1.14,2.25),q(1,-7.85,"EDEN / AFTER DARK",5.75,"#ff9ec4","#312039",4.65,.95),F(1,3.44,-7.84,6.73,S,.17,.32),K(1,-7.84,6.71,m,7.11);for(const w of[-5.01,-10.57])t(12.75,4.49,w,.22,1.67,.23,d),t(12.619,4.49,w,.045,1.49,.074,C);mt(1,-7.24,"EDEN / ★","#ffb4d3","#30203a",1.38,2.26);for(const w of[-5.97,-9.85]){t(12.852,6.21,w,.078,1.14,1.63,E);for(const N of[-.86,.86])t(12.75,6.21,w+N,.13,1.28,.09,m);t(12.745,6.21,w,.14,1.19,.057,d);for(const N of[5.55,6.83])F(1,N,w,1.79,h,.075,.24)}t(12.945,3.64,-15.63,.07,7.28,8.17,a),t(12.921,.63,-15.63,.047,1.26,8.17,x);for(const w of[-11.51,-15.69,-19.75])Y(1,w,7.26,h);t(12.825,2.31,-17.55,.084,2.45,3.15,l);for(const w of[-19.18,-15.92])t(12.743,2.29,w,.12,2.6,.13,x);for(const w of[1.03,3.6])F(1,w,-17.55,3.5,x,.13,.27);U("helix",1,-13.68,2.34,2.1,2.9),q(1,-15.62,"HELIX / PUBLIC HEALTH",7.39,"#b9e2d1","#28484c",4.76,.89),F(1,3.78,-15.63,8.1,x,.24,.32),K(1,-15.63,8.17,x,7.32);for(const w of[-13.36,-17.36]){t(12.852,6.16,w,.081,1.29,2.72,E);for(let N=0;N<4;N++)t(12.749,6.16,w-1.42+N*.94,.12,1.39,.073,h);for(const N of[5.44,6.87])F(1,N,w,2.93,h,.097,.28);for(const N of[-.91,0,.91])t(12.82,6.16,w+N,.028,1.17,.77,L)}mt(1,-17.52,"HELIX / +","#a0ead0","#223f45",1.03,1.81);for(const w of[-1,1])for(let N=0;N<3;N++){const Q=w<0?[.4,-7,-14.1][N]:[-.15,-7.85,-15.63][N],rt=w<0?[6,3.9,7.2][N]:[7.9,6.4,7.8][N],it=w<0?6.8+N*.43:7.4+(2-N)*.31,ot=N===0?r:N===1?w<0?f:m:i;t(w*13.16,it+1.4,Q,.63,2.8,rt,ot),F(w,it+2.94,Q,rt+.21,d,.25,.31);for(let Ut=0;Ut<Math.floor(rt/1.65);Ut++){const At=Q-rt/2+1+Ut*1.65;t(w*12.79,it+1.35,At,.14,1.6,1.02,d),t(w*12.705,it+1.35,At,.03,1.4,.83,(Ut+N)%3===0?I:E),t(w*12.68,it+1.35,At,.04,1.51,.046,g),t(w*12.675,it+1.35,At,.04,.045,.97,g),t(w*12.68,it+.5,At,.2,.11,1.17,h)}N===0&&(t(w*13.35,it+3.72,Q,1.1,1.25,1.6,d),t(w*13.35,it+4.36,Q,1.18,.12,1.75,g))}for(const w of[-1,1]){t(w*8.84,2.8,3.658,5.85,5.3,.08,w<0?r:i);for(const Q of[w*5.86,w*11.86])t(Q,2.8,3.581,.21,5.3,.22,c);t(w*8.83,5.41,3.573,6.11,.19,.26,d);const N=w*8.86;t(N,2.9,3.601,3.79,1.8,.045,E);for(let Q=0;Q<4;Q++)t(N-1.89+Q*1.26,2.9,3.556,.07,1.95,.08,c);for(const Q of[1.94,3.85])t(N,Q,3.54,3.98,.09,.18,c);t(w*8.24,3.11,-19.562,11.13,5.84,.09,d),t(w*8.24,1.02,-19.483,11.14,1.04,.07,a),t(w*8.24,5.82,-19.473,11.22,.18,.31,h);for(let Q=0;Q<3;Q++){const rt=w*(3.88+Q*3.42);t(rt,3.11,-19.438,.17,5.6,.22,g),t(rt,4.48,-19.298,.068,1.57,.04,A),t(rt,1.44,-19.288,.06,.8,.04,A)}t(w*8.23,3.32,-19.437,10.89,1.28,.048,E);for(let Q=0;Q<8;Q++)t(w*8.23-5.46+Q*1.56,3.32,-19.399,.062,1.43,.065,g)}for(const w of[-1,1]){t(w*12.06,.147,-8,1.44,.014,23.7,o);for(let N=3.58;N>-19.5;N-=1.34)t(w*11.08,.155,N,.12,.022,1.18,h)}const Mt=s.mat(2239289),re=s.mat(2701380),qt=s.mat(1450798),Yt=[];for(const w of[-1,1])for(let N=0;N<5;N++)Yt.push({x:w*(24+N%2*7),z:12-N*11,w:5.5+hn(N+60)*3.5,d:6.5+hn(N+93)*3,h:20+hn(N+40)*22,seed:100+N+w*11});for(let w=0;w<7;w++)Yt.push({x:-33+w*11,z:-57-w%2*7,w:7+hn(w+7)*3,d:7,h:23+hn(w+69)*27,seed:200+w});for(let w=0;w<5;w++)Yt.push({x:-26+w*13,z:24+w%2*7,w:6+hn(w+88)*4,d:6,h:21+hn(w+80)*18,seed:300+w});for(const w of Yt){const{x:N,z:Q,w:rt,d:it,h:ot,seed:Ut}=w;t(N,ot/2,Q,rt,ot,it,Ut%2?re:Mt),t(N,ot+.17,Q,rt+.28,.34,it+.28,qt),t(N+rt*.22,ot+.6,Q-it*.2,rt*.3,.78,it*.35,d);for(const At of[-1,1])for(let Dt=4.8;Dt<ot-1;Dt+=2.4){for(let Nt=0;Nt<Math.floor(rt/1.45);Nt++){const Pt=N-rt/2+.72+Nt*1.45,te=Ut*31+Math.round(Dt)*17+Nt*5+At;hn(te)<.46||t(Pt,Dt,Q+At*(it/2+.015),.49,.94,.025,hn(te+67)>.5?I:L)}for(let Nt=0;Nt<Math.floor(it/1.7);Nt++){const Pt=Q-it/2+.77+Nt*1.7,te=Ut*43+Math.round(Dt)*21+Nt*7+At;hn(te)<.5||t(N+At*(rt/2+.015),Dt,Pt,.025,.94,.48,hn(te+25)>.53?I:L)}}Ut%3===0&&(t(N,ot+2.4,Q,.08,4.4,.08,g),t(N,ot+4.63,Q,.1,.14,.1,C))}}function Mm(s,t){const e=document.createElement("canvas");e.width=e.height=s==="raptor"?128:64;const n=e.width,i=e.getContext("2d"),a={raptor:{6322507:10587993,10202996:14403483,9798226:11770724,12889715:14732706},soldier:{10587248:13808280,4809334:9674668,2108985:3753816,8426382:13093580},mutant:{8820318:12957090,5135683:11181440,7897973:8425871},brute:{10121060:12488305,8075325:13484192,7897973:9536628}}[s][t]??t,l=a>>16&255,o=a>>8&255,c=a&255,h=(d,S=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(l*d+S)))},${Math.max(0,Math.min(255,Math.round(o*d+S)))},${Math.max(0,Math.min(255,Math.round(c*d+S)))})`,u=d=>{const S=Math.sin(d*127.13+t*.0017)*43758.5453;return S-Math.floor(S)},f=(d,S,E,_,b)=>{i.fillStyle=b,i.fillRect(d,S,E,_)},p=(d,S,E,_,b,T)=>{f(d,S,E,_,b),f(d,S-_,E,Math.max(1,_/2),T)},m=s==="mutant"&&t===8820318||s==="brute"&&t===10121060||s==="soldier"&&t===10587248,x=s==="raptor"&&(t===10202996||t===12889715);if(f(0,0,n,n,h(1)),s==="raptor"||m){for(let d=0;d<n;d+=2)for(let S=0;S<n;S+=2){const E=S/n,_=d/n,b=.81+Math.sin(_*Math.PI)*.2+Math.max(0,Math.cos(E*Math.PI*2-.8))*.15,T=Math.round(b*18)/18;f(S,d,2,2,h(T))}for(let d=0;d<(s==="raptor"?270:85);d++)f(u(d)*n|0,u(d+431)*n|0,1,1,h(.9+u(d+233)*.25))}if(s==="raptor")if(x)for(let d=4;d<n;d+=9)for(let S=0;S<n;S+=24){const E=S/24,_=2+E%2,b=d+E%2;p(S,b,22,_,h(.67),h(1.11)),f(S+2,b+2,17,2,h(.9))}else{for(let d=0;d<8;d++){const S=6+d*15,E=d%2*12,_=39+d%3*7;f(E,S,_,5,h(.6)),f(E+7,S+5,_-9,4,h(.65)),f(n-E-_,S+7,_-6,4,h(.69)),f(n-E-_+9,S+11,_-19,3,h(.72))}for(let d=0;d<13;d++)for(let S=-1;S<15;S++){const E=d*31+S+73,_=S*9+d%2*4+(u(E)*3|0),b=d*10+(u(E+313)*3|0),T=4+E%3,C=2+E%3,M=.91+u(E+97)*.14;f(_,b,T,1,h(1.18)),f(_-1,b+1,1,C,h(.73)),f(_,b+1,T,C,h(M)),f(_+1,b+C+1,T-1,1,h(.7))}for(let d=0;d<3;d++)for(let S=0;S<19;S++){const E=66+d*6+Math.floor(S*.3);f(E-1,62+S,2,1,"#66553a"),f(E,62+S,1,1,"#d9c49a")}}else if(s==="soldier")if(m){for(let d=13;d<43;d++){const S=20+(d%7===0?1:0);f(S,d,1,1,"#956b5b"),d%6===0&&f(S+1,d,2,1,h(1.12))}p(7,48,44,1,h(.72),h(1.09))}else if(t===2108985){for(let d=0;d<64;d+=4)f(0,d,64,2,h(.83+d/200));for(let d=0;d<6;d++)for(let S=6;S<59;S++){const E=6+d*10+Math.round(Math.sin(S*.11+d)*2);f(E,S,2,1,h(.68)),f(E+2,S,2,1,h(1.27))}for(const d of[13,46])p(0,d,64,2,h(.55),h(1.45))}else{for(let d=0;d<64;d++)f(0,d,64,1,h(1.17-d*.004));f(3,3,58,2,h(1.45)),f(3,5,2,54,h(1.25)),f(3,58,58,3,h(.5)),f(59,5,3,56,h(.62)),f(11,11,42,29,h(.76)),f(13,13,38,25,h(.95)),f(13,13,38,2,h(1.28)),f(13,37,38,2,h(.65));for(const d of[7,55])for(const S of[7,55])f(d,S,3,3,h(.48)),f(d,S,2,1,h(1.8));f(7,44,49,8,"#753e4a"),f(7,43,49,1,"#b47878"),f(7,51,49,1,"#4b3038");for(let d=0;d<3;d++)f(19+d*7,24,4,3+d%2,"#ddc492");f(38,31,9,5,h(.58)),f(39,32,6,1,h(1.45)),f(39,34,4,1,h(1.45));for(let d=0;d<5;d++)p(43,16+d*3,8,1,h(.45),h(1.22));for(let d=0;d<9;d++){const S=u(d+61)*55+4|0,E=u(d+93)*55+4|0;p(S,E,2+d%5,1,h(.5),h(1.65))}}else if(m){for(let d=0;d<4;d++)for(let S=5;S<59;S++){const E=6+d*16+Math.round(Math.sin(S*.065+d*.9)*3);f(E,S,1,1,h(.63)),f(E+1,S,2,1,h(1.15)),S%11===0&&(f(E-2,S,6,1,"#7c5b49"),f(E-2,S-1,1,1,h(1.2)))}for(let d=0;d<4;d++){const S=9+d*13,E=15+d%2*24,_=5+d%3,b=7+d%3;f(S,E,_,b,s==="brute"?"#855341":"#967767"),f(S+1,E+2,_-2,b-3,s==="brute"?"#694334":"#78574a"),f(S,E-1,_-1,1,h(1.22))}for(let d=0;d<3;d++){const S=10+d*18;p(3,S,21,1,h(.73),h(1.17)),p(39,S+5,21,1,h(.77),h(1.11))}}else{for(let d=0;d<64;d++)f(0,d,64,1,h(1.12-d*.003));f(3,3,58,2,h(1.36)),f(3,5,2,54,h(1.18)),f(59,4,2,57,h(.52)),f(4,58,55,3,h(.48));for(let d=8;d<58;d++){const S=23+Math.floor(Math.sin(d*.15)*4);f(S,d,2,1,h(.39)),f(S+2,d,1,1,h(1.28)),d>30&&d<46&&f(S+Math.floor((d-30)*.8),d,1,1,h(.52))}for(let d=0;d<18;d++){const S=u(d+79)*55+4|0,E=u(d+91)*54+5|0;p(S,E,2+d%4,1,d%3===0?"#886344":h(.53),h(1.3))}for(const d of[7,54])for(const S of[7,54])f(d,S,3,3,h(.4)),f(d,S,1,1,h(1.65));if(s==="brute")for(let d=8;d<57;d+=8)f(d,44,4,6,"#ad8d56"),f(d+4,44,3,6,"#463b32");else{for(let d=0;d<4;d++)p(41,15+d*4,12,2,h(.44),h(1.15));f(8,47,15,4,"#618d78"),f(8,46,15,1,"#b2c2a4")}}const g=new mi(e);return g.magFilter=de,g.minFilter=de,g.wrapS=g.wrapT=ki,g.generateMipmaps=!1,g.colorSpace=be,g}function Sm(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d");t.imageSmoothingEnabled=!1;const e=l=>{const o=Math.sin(l*127.17+19.32)*43571.91;return o-Math.floor(o)},n=(l,o)=>{t.save(),t.translate(l%4*64,(1-Math.floor(l/4))*64),o(),t.restore()},i=(l,o,c,h,u="#ffffff")=>{t.fillStyle=u,t.fillRect(l,o,c,h)},r=(l,o)=>{t.fillStyle=o,t.beginPath(),t.moveTo(l[0],l[1]);for(let c=2;c<l.length;c+=2)t.lineTo(l[c],l[c+1]);t.closePath(),t.fill()};n(0,()=>{r([31,7,34,26,54,17,39,30,58,34,37,37,48,53,33,41,25,58,27,38,9,45,23,32,8,20,28,27],"#adadad"),r([29,23,37,25,42,33,35,40,27,36,24,29],"#ffffff"),i(13,11,3,3,"#cdcdcd"),i(48,45,4,2,"#b8b8b8"),i(19,49,2,4,"#dedede")}),n(1,()=>{r([31,2,37,18,49,10,44,26,62,27,47,36,55,48,38,43,30,62,24,44,8,52,15,37,2,27,22,24,17,8,28,18],"#909090"),r([31,11,35,24,47,22,42,31,49,39,36,38,29,49,26,38,14,35,24,29,24,17,29,24],"#dedede"),r([29,25,36,26,39,33,33,38,26,34,25,29],"#ffffff")}),n(2,()=>{for(let l=0;l<18;l++){const o=l*Math.PI*2/18,c=18+e(l+7)*9,h=32+Math.cos(o)*c,u=34+Math.sin(o)*c;i(h|0,u|0,5+(e(l+28)*6|0),4+(e(l+62)*7|0),"#5d5d5d")}r([9,34,10,22,18,13,27,12,31,5,41,14,48,15,51,25,58,31,49,44,42,51,32,56,23,48,14,47],"#9b9b9b"),r([17,31,20,20,29,18,33,12,41,23,46,23,48,36,39,45,31,47,22,40],"#dbdbdb"),r([24,31,29,24,34,20,38,31,42,36,34,41,27,37],"#ffffff");for(let l=0;l<37;l++)i(14+(e(l+134)*37|0),16+(e(l+172)*33|0),1+l%3,1,l%3?"#b8b8b8":"#eeeeee")}),n(3,()=>{for(let l=4;l<61;l++)for(let o=4;o<61;o++){const c=(o-32)/27,h=(l-33)/25,u=1-c*c-h*h,f=Math.sin(o*.35)*.08+Math.sin(l*.28+o*.1)*.08;if(u+f<.06||e(o*31+l*71)<Math.max(0,.24-u*.24))continue;const p=125+((1-h)*39|0),m=Math.min(.72,.18+(u+f)*.42);i(o,l,1,1,`rgba(${p},${p},${p},${m})`)}}),n(4,()=>{r([31,2,39,22,60,30,42,37,33,60,24,41,3,32,24,23],"#787878"),r([30,12,36,26,48,32,37,37,32,50,26,38,15,31,26,27],"#d7d7d7"),i(27,26,10,10),i(22,30,20,3),i(30,21,3,21),r([9,13,17,17,14,22,21,25,18,29,24,32,16,31,12,24,15,19],"#bcbcbc")}),n(5,()=>{for(let l=0;l<15;l++){const o=8+(e(l+15)*43|0),c=8+(e(l+52)*43|0),h=2+(e(l+103)*9|0);i(o,c,h,h,l%3?"#8c8c8c":"#b7b7b7"),i(o+1,c,Math.max(1,h-3),2,"#dedede")}}),n(6,()=>{r([12,18,49,9,54,40,33,52,17,41],"#777777"),r([15,19,45,13,40,37,19,40],"#d7d7d7"),r([43,14,51,36,36,47,40,37],"#b7b7b7"),i(20,19,20,2)}),n(7,()=>{i(23,30,19,3),i(31,23,3,18),i(20,31,4,2,"#898989"),i(32,19,2,5,"#bcbcbc")});const a=new mi(s);return a.magFilter=a.minFilter=de,a.generateMipmaps=!1,a.colorSpace=be,a}const yc=Math.PI*2,Ni=(s,t,e)=>Math.max(t,Math.min(e,s)),ji=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e*n)),bm=(s,t)=>Math.atan2(Math.sin(t-s),Math.cos(t-s)),Kr=new k(0,-1,0),ym=new k(0,0,-1),Em=new k(1,0,0),ts=new k,es=new k,ri=new k,Zr=new k,Al=new k,wl=new k,ns=new Ze,Jr=new Ze,Qr=new Ze,jr=new Ze,Rl=new Ze,Cl=new Ze;function Ec(s){for(const e of[...s.children])e instanceof De&&Ec(e);const t=new Map;for(const e of[...s.children])if(e instanceof me&&!Array.isArray(e.material)){const n=t.get(e.material)??[];n.push(e),t.set(e.material,n)}for(const[e,n]of t){if(n.length<2)continue;const i=n.map(a=>(a.updateMatrix(),a.geometry.clone().applyMatrix4(a.matrix))),r=Mc(i,!1);if(r){for(const a of n)s.remove(a),a.geometry.dispose();s.add(new me(r,e))}for(const a of i)a.dispose()}}function Pl(s,t,e){const n=new De,i=new De,r=new De,a=new De,l=new De,o=new De,c=new De;n.add(i),i.add(r),r.add(a),a.add(l),l.add(o),o.add(c);const h={root:n,model:i,pelvis:r,chest:a,neck:l,head:o,jaw:c,legs:[],arms:[],tail:[],kind:s,mount:t,distance:0,heading:0,previousX:0,previousZ:0,previousTime:0,previousAlive:!0,initialized:!1,walkStarted:!1,motion:0,death:0,attackPose:0,turn:0,hipHeight:s==="raptor"?1.02:1.025,stride:s==="raptor"?1.65:s==="brute"?1.3:1.24};n.name=`creature-${s}${t?"-strider":""}`,i.name="creature-model",r.name="pelvis",a.name="chest",l.name="neck",o.name="head",c.name="jaw",n.scale.setScalar(t?1.45:s==="brute"?1.47:s==="soldier"?.96:1),r.position.y=h.hipHeight;const u=(I,L,P,D=[0,0,0],U=0)=>{const F=new me(L,e(P,U));return F.position.set(...D),I.add(F),F},f=(I,L,P,D,U=0)=>u(I,new Ye(...P),D,L,U),p=(I,L,P,D)=>{const U=u(I,new lr(1,10,6),D,L);return U.scale.set(...P),U},m=(I,L,P,D,U,F,Y=7)=>{const G=new k(...L),K=new k(...P),V=K.sub(G),q=u(I,new Jt(U,D,V.length(),Y,1),F);return q.position.copy(G).addScaledVector(V,.5),q.quaternion.setFromUnitVectors(new k(0,1,0),V.normalize()),q},x=(I,L,P,D,U,F=0,Y=0)=>{const G=u(I,new or(P,D,5),U,L);return G.rotation.set(F,0,Y),G},g=(I,L)=>{const P=new De;return P.position.set(...L),I.add(P),P},d=(I,L,P)=>{const D=[],U=[],F=[];for(let K=0;K<L.length;K++)for(let V=0;V<10;V++){const q=V*yc/10,Z=L[K];D.push(Math.cos(q)*Z.x,Z.y+Math.sin(q)*Z.h,Z.z),U.push(V/10,K/(L.length-1))}for(let K=0;K<L.length-1;K++)for(let V=0;V<10;V++){const q=K*10+V,Z=K*10+(V+1)%10,mt=q+10,Mt=Z+10;F.push(q,mt,Z,Z,mt,Mt)}for(let K=1;K<9;K++){F.push(0,K,K+1);const V=(L.length-1)*10;F.push(V,V+K+1,V+K)}const G=new We;return G.setAttribute("position",new xe(D,3)),G.setAttribute("uv",new xe(U,2)),G.setIndex(F),G.computeVertexNormals(),u(I,G,P)},S=s==="raptor",E=s==="soldier",_=s==="brute",b=S?t?9798226:6322507:E?10587248:_?10121060:8820318,T=S?t?12889715:10202996:b,C=E?4809334:_?8075325:5135683,M=S?t?5325619:4209964:E?2108985:_?4927529:4470319,A=S?14800045:E?8426382:14536884;if(S){p(r,[0,.13,.13],[.32,.3,.6],b),p(a,[0,.09,-.34],[.265,.26,.39],b),p(a,[0,-.035,-.24],[.235,.135,.45],T),p(r,[0,-.015,.17],[.29,.17,.36],T),l.position.set(0,.13,-.5),m(l,[0,0,0],[0,.27,-.15],.16,.115,b),m(l,[0,.25,-.14],[0,.32,-.31],.118,.1,b),o.position.set(0,.32,-.3),d(o,[{z:.13,y:0,x:.14,h:.135},{z:-.06,y:.035,x:.172,h:.15},{z:-.23,y:.015,x:.128,h:.095},{z:-.52,y:-.014,x:.092,h:.074},{z:-.62,y:-.017,x:.076,h:.06}],b),p(o,[0,-.093,-.34],[.098,.032,.31],M),c.position.set(0,-.073,.08),d(c,[{z:0,y:-.035,x:.115,h:.036},{z:-.24,y:-.061,x:.102,h:.035},{z:-.6,y:-.056,x:.071,h:.028},{z:-.69,y:-.049,x:.05,h:.025}],T);for(const D of[-1,1]){const U=p(o,[D*.146,.092,-.085],[.052,.035,.12],b);U.rotation.z=D*.24,p(o,[D*.161,.055,-.128],[.023,.042,.046],M),f(o,[D*.178,.056,-.135],[.012,.027,.041],t?16767386:16172413,5386504),f(o,[D*.186,.056,-.141],[.005,.026,.01],M),p(o,[D*.059,.01,-.586],[.017,.012,.022],M);for(let Z=0;Z<6;Z++){const mt=-.2-Z*.064,Mt=D*(.102-Z*.006);x(o,[Mt,-.105,mt],.019,.072+Z%2*.012,A,Math.PI),x(c,[Mt*.93,-.012,mt-.06],.016,.055,A)}const F=g(r,[D*.267,0,.19]),Y=g(F,[0,-.5,0]),G=g(Y,[0,-.55,0]),K=g(G,[0,-.28,0]);p(F,[0,-.145,0],[.19,.265,.23],b),m(F,[0,-.05,0],[0,-.5,0],.15,.075,b),p(Y,[0,-.015,0],[.091,.09,.095],T),m(Y,[0,-.02,0],[0,-.55,0],.085,.046,T),m(G,[0,0,0],[0,-.28,0],.046,.039,b),p(K,[0,.035,-.08],[.107,.063,.139],T);for(let Z=-1;Z<=1;Z++){const mt=Z*.056;m(K,[mt,.035,-.035],[mt*1.35,.022,-.225],.032,.023,T,5),m(K,[mt*1.35,.023,-.22],[mt*1.48,.024,-.295],.03,.002,A,5)}m(K,[-D*.08,.068,-.025],[-D*.104,.128,-.12],.031,.023,b,5),m(K,[-D*.104,.135,-.12],[-D*.106,.152,-.2],.037,.026,A,5),m(K,[-D*.106,.152,-.2],[-D*.105,.073,-.254],.026,.002,A,5),h.legs.push({hip:F,knee:Y,hock:G,foot:K,side:D,upper:.5,lower:.55,metatarsal:.28,anchor:new Ot,swingStart:new Ot,worldFoot:new Ot,height:0,previous:0,initialized:!1});const V=g(a,[D*.23,.055,-.415]),q=g(V,[0,-.22,0]);m(V,[0,0,0],[0,-.22,0],.061,.043,b),m(q,[0,0,0],[0,-.21,0],.043,.033,T);for(let Z=-1;Z<=1;Z++)m(q,[Z*.029,-.205,0],[Z*.038,-.265,-.08],.016,.011,b,5),m(q,[Z*.038,-.265,-.08],[Z*.04,-.29,-.11],.018,.001,A,5);h.arms.push({upper:V,lower:q,side:D});for(let Z=0;Z<5;Z++){const mt=p(r,[D*.293,.2-Z*.015,-.28+Z*.18],[.027,.13,.053],M);mt.rotation.z=D*.28}}let I=g(r,[0,.14,.62]);const L=[.48,.47,.46,.45],P=[.164,.123,.079,.04,.008];for(let D=0;D<L.length;D++)h.tail.push(I),m(I,[0,0,0],[0,-.025,L[D]],P[D],P[D+1],b,8),m(I,[0,-P[D]*.66,0],[0,-.025-P[D+1]*.66,L[D]],P[D]*.56,P[D+1]*.56,T,6),I=g(I,[0,-.025,L[D]]);if(t){f(r,[0,.41,.08],[.51,.1,.53],4274220),f(r,[0,.48,.3],[.52,.18,.085],6574141);for(const D of[-1,1])f(r,[D*.325,.12,.075],[.045,.45,.16],4274220),f(r,[D*.385,-.085,.075],[.13,.045,.21],A),m(a,[D*.12,.39,-.68],[D*.24,.3,-.1],.012,.012,4274220,5)}}else{const I=_?.46:.31,L=_?.51:.345;if(p(r,[0,.025,.04],[I*.88,.19,.225],E?M:b),p(a,[0,.26,.03],[I*.8,.29,.205],b),p(a,[0,.49,.025],[I,.27,.235],b),m(a,[0,.58,0],[0,_?.66:E?.68:.75,-.015],.12,.102,b),l.position.set(0,_?.64:E?.65:.73,-.018),o.position.set(0,_||E?.1:.14,0),p(o,[0,.025,0],[.145,.19,.159],b),p(o,[0,-.092,-.025],[.123,.1,.13],b),c.position.set(0,-.062,-.012),E){for(const P of[-1,1]){const D=f(a,[P*.135,.47,-.174],[.267,.35,.13],C);D.rotation.z=-P*.075,f(a,[P*.165,.098,-.185],[.14,.19,.085],C),f(r,[P*.245,.015,-.185],[.13,.16,.1],M)}for(let P=0;P<3;P++)f(a,[0,.28-P*.065,-.206],[.32,.045,.065],C);f(a,[0,.44,-.266],[.065,.22,.046],A),f(r,[0,.015,-.03],[.59,.07,.39],M),f(r,[0,.025,-.23],[.082,.06,.024],A),f(a,[0,.38,.258],[.31,.43,.17],M),f(a,[0,.48,.356],[.2,.24,.042],C),p(o,[0,.083,.026],[.18,.174,.187],C),f(o,[0,.014,-.16],[.255,.065,.026],M),f(o,[0,.054,-.171],[.257,.016,.025],A),f(o,[0,.021,-.18],[.216,.024,.01],15054443,5584659),f(o,[.073,.021,-.189],[.036,.029,.009],16766602,5849113),p(o,[0,-.118,-.143],[.089,.045,.059],M);for(const P of[-1,1])p(o,[P*.086,-.046,-.151],[.04,.052,.042],b),m(o,[P*.078,-.105,-.149],[P*.078,-.105,-.21],.03,.028,A),p(o,[P*.179,.03,.007],[.025,.072,.064],M);m(o,[.15,.15,.034],[.15,.32,.034],.009,.007,M,5),f(a,[-.136,.51,-.268],[.052,.053,.012],15844489)}else{p(a,[-I*.38,.5,-.126],[I*.67,.22,.17],b),p(a,[I*.45,.36,-.135],[I*.44,.205,.124],C);for(let P=0;P<4;P++)for(const D of[-1,1])m(a,[D*.025,.52-P*.069,-.236],[D*(I*.75-P*.018),.48-P*.064,-.199],.018,.013,A,5);m(a,[0,.51,-.246],[0,.245,-.225],.023,.018,M,5),f(a,[I*.82,.43,.042],[.14,.26,.27],C),f(a,[.055,.47,.239],[.19,.3,.08],7897973);for(let P=0;P<4;P++)f(a,[.053,.58-P*.062,.287],[.15,.023,.02],P===0?7976343:M,P===0?1455398:0);p(o,[-.053,.029,-.107],[.09,.07,.09],b),p(o,[.083,.027,-.103],[.084,.08,.072],C);for(const P of[-1,1])p(o,[P*.073,.047,-.144],[.055,.041,.025],M),p(o,[P*.073,.086,-.13],[.074,.028,.047],b),p(o,[P*.08,-.006,-.135],[.073,.047,.04],b),f(o,[P*.071,.04,-.173],[.029,.018,.01],15912852,4664598);d(o,[{z:-.118,y:.002,x:.035,h:.063},{z:-.183,y:-.003,x:.03,h:.046},{z:-.213,y:-.021,x:.026,h:.025}],b);for(const P of[-1,1])p(o,[P*.018,-.033,-.207],[.013,.007,.01],M);f(o,[0,-.069,-.142],[.126,.041,.03],M),p(c,[0,-.052,-.122],[.096,.045,.055],b);for(let P=0;P<5;P++)x(o,[(P-2)*.024,-.084,-.163],.011,.044,A,Math.PI),x(c,[(P-2)*.024,-.017,-.153],.011,.036,A);if(_){p(a,[-.36,.56,.035],[.25,.22,.27],C);for(let P=0;P<3;P++)x(a,[-.36+P*.093,.76,.05],.035,.17-P*.018,A,0,-.15)}}for(const P of[-1,1]){const D=g(r,[P*(_?.23:.176),-.025,.018]),U=g(D,[0,-.52,0]),F=g(U,[0,-.54,0]),Y=g(F,[0,0,0]);if(p(D,[0,-.2,.01],[_?.158:.119,.253,.13],E?M:b),m(D,[0,-.05,0],[0,-.52,0],_?.142:.105,.071,E?M:b),p(U,[0,-.008,-.032],[.085,.085,.095],C),m(U,[0,-.03,0],[0,-.54,0],.08,.052,E?M:b),E&&(f(D,[0,-.185,-.09],[.17,.28,.06],C),f(U,[0,-.21,-.066],[.12,.24,.055],C)),f(Y,[0,.027,-.092],[_?.21:.16,.14,.31],E?M:C),f(Y,[0,-.035,-.085],[_?.215:.165,.038,.33],M),!E)for(let q=-1;q<=1;q++)m(Y,[q*.044,.012,-.222],[q*.053,.011,-.273],.016,.001,A,5);h.legs.push({hip:D,knee:U,hock:F,foot:Y,side:P,upper:.52,lower:.54,metatarsal:0,anchor:new Ot,swingStart:new Ot,worldFoot:new Ot,height:0,previous:0,initialized:!1});const G=g(a,[P*L,.56,.015]),K=g(G,[0,-.34,0]),V=!E&&P<0;if(p(G,[0,-.075,0],[V?.17:.12,.16,.14],E?P<0?9131355:C:b),m(G,[0,-.06,0],[0,-.34,0],V?.137:.105,.073,E?M:b),m(K,[0,0,0],[0,-.33,0],V?.115:.075,.048,E?M:b),p(K,[0,-.34,-.014],[.06,.09,.055],E?M:b),E)f(K,[0,-.16,-.05],[.11,.18,.06],C);else for(let q=-1;q<=1;q++)m(K,[q*.034,-.373,-.025],[q*.041,-.43,-.065],.019,.012,b,5),m(K,[q*.041,-.43,-.065],[q*.043,-.443,-.112],.018,.002,A,5);if(h.arms.push({upper:G,lower:K,side:P}),E&&P===1){const q=g(K,[0,-.325,-.035]);q.name="rifle",q.rotation.x=-1.4,f(q,[0,-.035,-.1],[.105,.11,.38],M),f(q,[0,.025,-.09],[.085,.045,.29],A),m(q,[0,-.025,-.27],[0,-.025,-.61],.025,.018,M,6),f(q,[0,-.135,-.06],[.06,.17,.085],M),f(q,[0,.032,-.21],[.023,.018,.038],14203763,3153920)}}}h.legs.forEach(I=>{const L=I.side<0?"left":"right";I.hip.name=`${L}-thigh`,I.knee.name=`${L}-knee`,I.hock.name=`${L}-hock`,I.foot.name=`${L}-foot`}),h.arms.forEach(I=>{const L=I.side<0?"left":"right";I.upper.name=`${L}-upper-arm`,I.lower.name=`${L}-elbow`}),h.tail.forEach((I,L)=>I.name=`tail-${L}`),Ec(i),Xa(h,{x:0,z:0,heading:0,speed:0,attack:0,hurt:0,alive:!0,time:0,dt:0}),h.initialized=!1;for(const I of h.legs)I.initialized=!1;return h}function ta(s,t,e,n){const i=s.root.scale.x,r=Math.cos(s.heading),a=Math.sin(s.heading);return n.set(s.root.position.x+(t*r+e*a)*i,s.root.position.z+(-t*a+e*r)*i)}function Tm(s,t,e,n,i,r){const a=s.kind==="raptor",l=a?.47:0,o=n+(a?Math.cos(l)*t.metatarsal:0),c=i+(a?Math.sin(l)*t.metatarsal:0);ns.copy(s.pelvis.quaternion).invert(),ts.set(e,o,c).sub(s.pelvis.position).applyQuaternion(ns).sub(t.hip.position);const h=ts.length(),u=Ni(h,Math.abs(t.upper-t.lower)+.01,t.upper+t.lower-.002);es.copy(ts).multiplyScalar(1/Math.max(1e-4,h)),ts.copy(es).multiplyScalar(u),ri.copy(ym).applyQuaternion(ns),ri.addScaledVector(es,-ri.dot(es)),ri.lengthSq()<1e-5&&ri.set(0,1,0),ri.normalize();const f=(t.upper*t.upper-t.lower*t.lower+u*u)/(2*u),p=Math.sqrt(Math.max(0,t.upper*t.upper-f*f));Zr.copy(es).multiplyScalar(f).addScaledVector(ri,p),Al.copy(ts).sub(Zr).normalize(),Jr.setFromUnitVectors(Kr,Zr.normalize()),Qr.setFromUnitVectors(Kr,Al),t.hip.quaternion.copy(Jr),t.knee.quaternion.copy(Jr).invert().multiply(Qr),wl.set(0,-Math.cos(l),-Math.sin(l)).applyQuaternion(ns),jr.setFromUnitVectors(Kr,wl),t.hock.quaternion.copy(Qr).invert().multiply(jr),Cl.setFromAxisAngle(Em,r),Rl.copy(ns).multiply(Cl),t.foot.quaternion.copy(jr).invert().multiply(Rl)}function Xa(s,t){const e=Ni(t.dt,0,.1),n=s.kind==="raptor",i=s.kind==="soldier",r=s.kind==="brute",a=s.initialized&&(t.time<s.previousTime-.001||!s.previousAlive&&t.alive);if(a){s.initialized=!1,s.walkStarted=!1,s.distance=0,s.motion=0,s.attackPose=0,s.turn=0,s.death=0;for(const _ of s.legs)_.initialized=!1}if(e===0&&s.initialized&&!a)return;const l=s.root.scale.x,o=s.initialized?Math.hypot(t.x-s.previousX,t.z-s.previousZ):0,c=!s.initialized||o>2.5||!t.alive&&s.death===0;s.initialized||(s.heading=t.heading,s.distance=0);const h=bm(s.heading,t.heading),u=h*(1-Math.exp(-(n?8:10)*e));s.heading+=u,s.turn=ji(s.turn,e?u/e:0,7,e),s.root.position.set(t.x,0,t.z),s.root.rotation.set(0,s.heading,0),s.previousX=t.x,s.previousZ=t.z,s.previousTime=t.time,s.previousAlive=t.alive,s.initialized=!0,s.motion=ji(s.motion,t.alive?Ni(t.speed/(n?3.2:2.1),0,1):0,9,e),t.alive&&t.speed>.02&&!s.walkStarted&&(s.distance=(n?.62:.66)*.5*s.stride,s.walkStarted=!0),t.alive&&t.speed>.02&&o<2.5&&(s.distance+=o/l),s.attackPose=ji(s.attackPose,Ni(t.attack,0,1),t.attack>s.attackPose?20:12,e),s.death=ji(s.death,t.alive?0:1,t.alive?25:6.2,e);const f=s.distance/s.stride,p=f*yc,m=s.attackPose,x=Math.sin(t.time*2.3)*.006*(1-s.motion)*(1-s.death);s.pelvis.position.y=s.hipHeight+Math.cos(p*2)*(n?.026:.017)*s.motion+x,s.pelvis.rotation.set(0,0,Math.sin(p)*(n?.02:.027)*s.motion),s.chest.rotation.set((n?-.035:-.055)*s.motion-(n?.07:.13)*m,Math.sin(p)*(i?.018:.045)*s.motion,0),s.neck.rotation.set((n?-.23:-.11)*m+x*.9,-s.turn*.013,0),s.head.rotation.set(t.hurt>0?Math.sin(t.time*40)*.055:0,0,t.hurt>0?-.055:0),s.jaw.rotation.x=n?-.075-m*.58:i?0:-m*.38,s.model.rotation.set(s.death*(n?-.07:.08),0,s.death*(n?1.49:1.52)),s.model.position.y=s.death*(n?.43:r?.64:i?.45:.485);const g=n?.62:.66,d=s.stride*g,S=d*.5,E=new Ot;for(const _ of s.legs){const b=(f+(_.side>0?.5:0))%1;if(c||!_.initialized){const U=s.walkStarted?b<g?-S+b/g*d:S-(b-g)/(1-g)*d:0;ta(s,_.hip.position.x,U+_.hip.position.z,_.anchor),_.worldFoot.copy(_.anchor),_.swingStart.copy(_.anchor),_.height=0,_.previous=b,_.initialized=!0}let T=0;if(t.alive&&t.speed>.035&&s.motion>.02)if(b<g)_.previous>=g&&ta(s,_.hip.position.x,-S+_.hip.position.z,_.anchor),_.worldFoot.copy(_.anchor),_.height=0,T=-Math.pow(Ni((b/g-.77)/.23,0,1),2)*.2;else{_.previous<g&&_.swingStart.copy(_.anchor);const U=(b-g)/(1-g),F=U*U*(3-2*U);ta(s,_.hip.position.x,-S+_.hip.position.z,E),_.worldFoot.copy(_.swingStart).lerp(E,F),_.height=Math.pow(Math.sin(U*Math.PI),1.3)*(n?.23:r?.16:.18)*Math.sqrt(s.motion),T=Math.sin(U*Math.PI)*.28,_.anchor.copy(_.worldFoot)}else _.height=ji(_.height,0,17,e),_.anchor.copy(_.worldFoot);_.previous=b;const M=(_.worldFoot.x-t.x)/l,A=(_.worldFoot.y-t.z)/l,I=Math.cos(s.heading),L=Math.sin(s.heading),P=M*I-A*L,D=M*L+A*I;Tm(s,_,P,(n?.025:.077)+_.height,D,T),s.death>.05&&(_.hip.rotation.x+=s.death*.35,_.knee.rotation.x-=s.death*.25)}for(const _ of s.arms){const b=Math.sin(p+(_.side>0?Math.PI:0))*s.motion;n?(_.upper.rotation.x=.64-b*.22+m*.8,_.lower.rotation.x=.52+m*.3,_.upper.rotation.z=-_.side*(.18+m*.24)):i?(_.upper.rotation.x=_.side>0?.98:1.12,_.lower.rotation.x=_.side>0?.42:.58,_.upper.rotation.x-=m*.1,_.upper.rotation.z=_.side>0?-.06:.25):(_.upper.rotation.x=.13-b*.36+m*(_.side<0?1.3:.86),_.upper.rotation.z=-_.side*(.14+m*.34),_.lower.rotation.x=.22+m*(_.side<0?.51:.76)),_.upper.rotation.x-=s.death*.27,_.lower.rotation.x+=s.death*.42}for(let _=0;_<s.tail.length;_++){const b=s.tail[_];b.rotation.y=-Ni(s.turn,-3.2,3.2)*(.06+_*.018)+Math.sin(p-_*.55)*s.motion*(.045+_*.017),b.rotation.x=.012+m*(.045+_*.018)+Math.sin(t.time*1.4-_*.5)*.008*(1-s.motion)}}const ea=Math.PI*2,jt=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)};function Am(s,t="#86ffb8",e="#101b20",n=256,i=64){const r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,i),a.fillStyle=t,a.fillRect(2,2,n-4,2),a.fillRect(2,i-4,n-4,2),a.fillRect(2,2,2,i-4),a.fillRect(n-4,2,2,i-4);const l=s.split("/").map(h=>h.trim());a.textAlign="center",a.textBaseline="middle";let o=l.length>1?19:22;o=Math.min(o,Math.floor((n-18)/(Math.max(...l.map(h=>h.length))*.61))),a.font=`bold ${Math.max(8,o)}px monospace`,l.forEach((h,u)=>a.fillText(h,n/2,i/2+(u-(l.length-1)/2)*(o+5)));const c=new mi(r);return c.magFilter=c.minFilter=de,c.colorSpace=be,c.generateMipmaps=!1,c}function wm(){const s=document.createElement("canvas");s.width=64,s.height=80;const t=s.getContext("2d");t.fillStyle="#132126",t.fillRect(0,0,64,80),t.fillStyle="#2e594d";for(let n=0;n<80;n++)t.fillRect(jt(n)*64|0,jt(n+15)*80|0,2,4);t.fillStyle="#19252d",t.fillRect(16,39,36,32),t.fillStyle="#97654b",t.fillRect(24,20,20,27),t.fillStyle="#b78660",t.fillRect(26,21,15,21),t.fillStyle="#342731",t.fillRect(16,13,36,6),t.fillRect(21,7,23,9),t.fillStyle="#806454",t.fillRect(14,17,41,4),t.fillStyle="#131922",t.fillRect(27,28,17,3),t.fillRect(34,27,9,7),t.fillStyle="#81d9b5",t.fillRect(27,29,2,2),t.fillStyle="#382c2b",t.fillRect(29,39,10,3),t.fillStyle="#7f9e9a",t.fillRect(43,45,10,25),t.fillStyle="#313f47";for(let n=47;n<70;n+=5)t.fillRect(44,n,8,2);t.fillStyle="#fcba67",t.fillRect(47,48,2,2),t.fillStyle="#a0dabc",t.font="bold 6px monospace",t.textAlign="center",t.fillText("ELIAS VANE",32,76);const e=new mi(s);return e.magFilter=e.minFilter=de,e.colorSpace=be,e}class Rm{constructor(t){this.canvas=t,this.renderer=new lm({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=be,this.renderer.toneMapping=pn,this.scene.background=new Ht(461072),this.scene.fog=new io(1053983,24,94),this.camera.rotation.order="YXZ";const e=new af(12175839,6379857,1.38);this.scene.add(e);const n=new Hr(12175587,1.12);n.position.set(-10,25,12),this.scene.add(n);const i=new Hr(16765858,.42);i.position.set(-18,8,3),this.scene.add(i);const r=new Hr(8646332,.22);r.position.set(7,9,-25),this.scene.add(r),this.scene.add(this.muzzleLight,this.blastLight);for(const l of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door","fuel"]){const o=new Ys({map:cm(l)});this.retroMaterial(o),this.mats.set(l,o)}this.buildLevel(),this.flush();for(const l of Le.doors)this.buildDoor(l);for(const l of Le.destructibles??[])this.buildDestructible(l);for(const l of Le.enemies){const o=Pl(l.kind,!1,(c,h=0)=>this.creatureMaterial(l.kind,!1,c,h));o.root.position.set(l.x,0,l.z),this.enemyGroups.set(l.id,o),this.scene.add(o.root)}for(const l of Le.pickups){const o=this.buildPickup(l.kind);o.position.set(l.x,.5,l.z),this.scene.add(o),this.pickupGroups.set(l.id,o)}this.mountRig=Pl("raptor",!0,(l,o=0)=>this.creatureMaterial("raptor",!0,l,o)),this.mountRig.root.position.set(Le.mount.x,0,Le.mount.z),this.mountRig.root.rotation.y=this.mountHeading,this.scene.add(this.mountRig.root),this.effectMat=new Ve({color:16777215,map:Sm(),transparent:!0,opacity:.94,alphaTest:.07,depthWrite:!1}),this.effectMat.onBeforeCompile=l=>{l.vertexShader=`attribute float effectTile;
attribute float effectAlpha;
varying float vEffectTile;
varying float vEffectAlpha;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vEffectTile=effectTile;vEffectAlpha=effectAlpha;`),l.fragmentShader=`varying float vEffectTile;
varying float vEffectAlpha;
`+l.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
vec2 atlasUV=vec2((vMapUv.x+mod(vEffectTile,4.0))/4.0,(vMapUv.y+floor(vEffectTile/4.0))/2.0);
diffuseColor *= texture2D(map,atlasUV);diffuseColor.a *= vEffectAlpha;
#endif`)},this.effectMat.customProgramCacheKey=()=>"fossil-pixel-billboard-v1";const a=new Ie(.13,.13);a.setAttribute("effectTile",this.effectTiles),a.setAttribute("effectAlpha",this.effectAlpha),this.effectMesh=new ac(a,this.effectMat,192),this.effectMesh.instanceMatrix.setUsage(qs),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated",this.atmosphere=new dm(this.scene)}renderer;scene=new Bh;camera=new tn(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;propGroups=new Map;propRuins=new Map;muzzleLight=new Gr(16765594,0,8,2);blastLight=new Gr(16749358,0,15,2);lamps=[];hazmat=[];mountRig;mountHeading=-.7;lastMountPosition;effectMesh;effectMat;effectTiles=new er(new Float32Array(192),1).setUsage(qs);effectAlpha=new er(new Float32Array(192),1).setUsage(qs);dummy=new Ee;snapGrid=new Ot(640,400);clock=0;cameraStride=0;cameraMotion=0;previousPlayer;lastResolution="";powerLamp;lights=[];atmosphere;retroMaterial(t){t.onBeforeCompile=e=>{e.uniforms.retroGrid={value:this.snapGrid},e.vertexShader=`uniform vec2 retroGrid;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},t.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(t,e=0,n=!0){const i=`c${t}-${e}`;let r=this.mats.get(i);return r||(r=new Ys({color:t,emissive:e,flatShading:n}),this.retroMaterial(r),this.mats.set(i,r)),r}basic(t){const e=`b${t}`;let n=this.mats.get(e);return n||(n=new Ve({color:t}),this.mats.set(e,n)),n}addGeometry(t,e,n,i,r,a=0,l=0,o=0){const c=new fe().compose(new k(n,i,r),new Ze().setFromEuler(new wn(a,l,o)),new k(1,1,1));t.applyMatrix4(c),t.attributes.normal||t.computeVertexNormals();const h=this.batches.get(e)||[];h.push(t),this.batches.set(e,h)}box(t,e,n,i,r,a,l,o=0){const c=new Ye(i,r,a),h=c.attributes.position,u=c.attributes.normal,f=c.attributes.uv;for(let p=0;p<h.count;p++){const m=Math.abs(u.getX(p)),x=Math.abs(u.getY(p));f.setXY(p,m>.5?h.getZ(p)/2:h.getX(p)/2,x>.5?h.getZ(p)/2:h.getY(p)/2)}this.addGeometry(c,l,t,e,n,0,o)}flush(){for(const[t,e]of this.batches){const n=Mc(e,!1);this.scene.add(new me(n,t));for(const i of e)i.dispose()}this.batches.clear()}sign(t,e,n,i,r=3,a=.8,l=0,o="#86ffb8",c="#101b20"){const h=Am(t,o,c),u=new Ve({map:h,side:$e});this.mats.set(`sign-${this.mats.size}`,u);const f=new me(new Ie(r,a),u);return f.position.set(e,n,i),f.rotation.y=l,this.scene.add(f),f}lamp(t,e,n,i=8978368,r=!1){this.box(t,e,n,r?.08:1.2,r?1.9:.09,.1,this.mat(11791056,i));const a=new me(new Ye(r?.09:1.22,r?1.95:.1,.11),this.basic(i));a.position.set(t,e,n+.015),this.scene.add(a),this.lamps.push(a)}buildLevel(){const t=e=>this.mats.get(e);this.box(-.7,-.12,-20,35,.2,69,t("road")),this.box(0,-.005,8,10.5,.08,8.1,t("floor")),this.box(0,-.005,-26,14,.08,12.1,t("labfloor")),this.box(11.3,-.005,-28,8,.08,8,t("floor")),this.box(0,-.005,-39,20,.08,14,t("labfloor")),this.box(-7,-.005,-49,8,.08,6,t("metal")),this.box(-15.4,-.005,-7,4,.08,6,t("floor")),this.box(0,4.05,8,10.6,.12,8.3,t("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,t("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,t("ceiling")),this.box(0,4.5,-39,20.4,.12,14,t("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,t("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,t("ceiling"));for(const e of Le.walls)this.box(e.x,(e.y??0)+e.h/2,e.z,e.w,e.h,e.d,t(e.material)),e.h>3&&e.d<1&&(this.box(e.x,.15,e.z+.03,e.w,.25,e.d+.04,this.mat(1517867)),this.box(e.x,3.08,e.z+.035,e.w,.1,e.d+.08,this.mat(4153687)));for(let e=-1;e<=1;e+=2)for(let n=0;n<5;n++){const i=1-n*5,r=8+jt(n+e+10)*10,a=e*17;this.box(a,r/2,i,6,r,4.5,t("brick")),this.box(a,r+.2,i,6.4,.4,4.8,this.mat(1583412));for(let l=4.8;l<r-1;l+=2.3)for(let o=0;o<2;o++){const c=e*13.95;this.box(c,l,i-1+o*2,.1,1.2,.9,this.mat((n+o)%3===0?6720377:1781821,(n+o)%3===0?2640696:0)),this.box(c-e*.04,l-.64,i-1+o*2,.25,.12,1.15,this.mat(989474))}this.box(a+e*.4,r+.8,i,.4,1.2,1.7,t("metal")),this.box(a,r+2.5,i,.12,4,.12,this.mat(4479848))}for(let e=0;e<10;e++){const n=-35+e*8,i=15+jt(e+30)*27,r=-63-jt(e+41)*18;this.box(n,i/2,r,5,i,6,this.mat(1385265));for(let a=4;a<i;a+=4)this.box(n,a,r+3.04,3.5,.15,.08,this.basic(2576199))}for(const e of[-11.8,11.8])this.box(e,.045,-8,2.6,.15,24,t("concrete")),this.box(e+Math.sign(e)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const e of[6,10,-22,-27,-30,-34,-38,-42,-49]){const n=e<-31&&e>-46;this.box(0,3.91,e,n?20:9,.18,.25,t("metal")),this.lamp(e<-46?-7:0,e>0?3.79:4.22,e,11595712),this.box(3,4.12,e,1.5,.08,.8,t("metal"));for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,e,.06,.035,.65,this.mat(1189162))}for(const e of Le.hazards){const n=new Ve({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${e.x}`,n);const i=new me(new Ie(e.w,e.d),n);i.rotation.x=-Math.PI/2,i.position.set(e.x,.11,e.z),this.scene.add(i),this.hazmat.push(i),this.box(e.x,e.x<0?.14:.02,e.z,e.w+.2,.1,e.d+.2,this.mat(2112557));for(let r=0;r<8;r++)this.box(e.x+(jt(r)-.5)*e.w,.13,e.z+(jt(r+13)-.5)*e.d,.12,.05,.12,this.basic(9623415))}for(const e of Le.props){const n=e.x,i=e.z,r=e.rotation??0;if(e.kind!=="neon")if(["office-sign","facility-sign","sign"].includes(e.kind)){const a=e.kind==="neon",l=e.kind==="office-sign"?3.05:e.kind==="facility-sign"?4.15:a?4.9:3.6;this.sign(e.label??"",n,l,i,e.kind==="facility-sign"?9:a?4.8:5,e.kind==="facility-sign"?1.3:.85,r,a&&i<-3?"#ff7095":"#96ffc9")}else if(e.kind==="portrait"){const a=new Ve({map:wm()});this.mats.set("portrait",a);const l=new me(new Ie(.9,1.12),a);l.position.set(n,2.1,i),l.rotation.y=Math.PI,this.scene.add(l),this.box(n,2.1,i+.08,1.04,1.27,.06,this.mat(5987138))}else if(e.kind==="office-board"){this.box(n,2,i,.08,1.7,3.7,this.mat(5327932)),this.sign(e.label??"",n-.06,2.55,i,2.8,.38,r,"#cecfaa","#32392e");for(let a=0;a<7;a++)this.box(n-.07,1.8+jt(a)*.5,i+(jt(a+10)-.5)*2.8,.035,.42,.31,this.mat(a%2?12233109:8296837))}else if(["terminal","console"].includes(e.kind)){this.box(n,1.4,i,.85,.65,.12,this.mat(1322032)),this.box(n,1.4,i+.07,.65,.45,.02,this.basic(3840368));for(let a=0;a<4;a++)this.box(n-.2,1.53-a*.08,i+.085,.32-jt(a)*.1,.025,.01,this.basic(10280873));this.box(n,1.02,i+.2,.9,.08,.5,this.mat(4872532))}else if(e.kind==="lamp")this.box(n,1.9,i,.13,3.8,.13,this.mat(4217429)),this.box(n,3.7,i-.35,.12,.12,.8,this.mat(4217429)),this.lamp(n,3.61,i-.68,11530187);else if(e.kind==="car"){this.box(n,1,i,1.8,.65,3.6,this.mat(4797250),r),this.box(n,1.62,i-.2,1.58,.8,1.8,this.mat(2701636),r),this.box(n,1.63,i+.76,1.4,.48,.08,this.mat(1585465),r);for(const a of[-.97,.97])for(const l of[-1.15,1.15])this.addGeometry(new Jt(.39,.39,.24,8),this.mat(1187107),n+a,.46,i+l,0,0,Math.PI/2);this.box(n,.78,i+1.86,1.1,.16,.08,this.basic(7021366)),this.box(n+.5,1.5,i,.04,.02,1.5,this.mat(9737091),.3)}else if(e.kind==="barrels")for(let a=0;a<3;a++){const l=n+a%2*.68,o=i+Math.floor(a/2)*.7;this.addGeometry(new Jt(.29,.3,1,8),this.mat(a===2?5918776:2576451),l,.5,o),this.addGeometry(new Jt(.31,.31,.07,8),this.mat(1059883),l,.22,o),this.addGeometry(new Jt(.31,.31,.07,8),this.mat(1059883),l,.78,o),this.box(l,.6,o+.3,.17,.19,.02,this.basic(14003533))}else if(e.kind==="rubble")for(let a=0;a<12;a++)this.box(n+(jt(a)-.5)*2,.18+jt(a+10)*.18,i+(jt(a+20)-.5)*2,.3+jt(a+30)*.6,.25+jt(a+40)*.4,.25+jt(a+50)*.6,t("concrete"),jt(a+60)*ea);else if(e.kind==="tank")this.addGeometry(new Jt(.6,.65,.27,8),t("metal"),n,.14,i),this.addGeometry(new Jt(.55,.55,2.5,8),this.mat(2384967,1063201),n,1.52,i),this.addGeometry(new Jt(.65,.65,.28,8),t("metal"),n,2.91,i),this.box(n-.32,1.6,i+.45,.15,2.3,.15,this.basic(6671237)),this.box(n,1.8,i+.52,.28,.6,.16,this.mat(7580774)),this.box(n,1.4,i+.53,.53,.46,.12,this.mat(5929809)),this.box(n-.18,.8,i+.49,.12,.8,.15,this.mat(5929809)),this.box(n+.18,.8,i+.49,.12,.8,.15,this.mat(5929809));else if(e.kind==="pipe"){this.addGeometry(new Jt(.15,.15,12,6),this.mat(4549473),n,3.3,i,Math.PI/2);for(let a=-2;a<=2;a++)this.addGeometry(new Jt(.19,.19,.14,6),this.mat(1521208),n,3.3,i+a*2.4,Math.PI/2)}else if(e.kind==="lab-table"){this.box(n,1.27,i,3.9,.15,1.7,this.mat(5862506)),this.box(n,1.47,i,1.4,.26,.6,this.mat(6380610));for(let a=0;a<4;a++)this.box(n+(a-1.5)*.3,1.65,i,.16,.25,.18,this.mat(6653548))}else if(e.kind==="locker")this.box(n,1.25,i,.65,2.5,.85,t("metal")),this.box(n-.34,1.3,i,.025,.15,.17,this.basic(10471339));else if(e.kind==="power")this.box(n,1.15,i,.95,2.3,.45,t("metal")),this.sign("LIFT POWER",n,1.8,i+.24,1,.26),this.sign("E / ACTIVATE",n,1.48,i+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new me(new Ye(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(n,1.12,i+.25),this.scene.add(this.powerLamp),this.box(n,.7,i+.28,.18,.35,.1,this.mat(12235397));else if(e.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,i,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,i,1,.4,Math.PI/2);else if(e.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",n,2.4,-51.91,5,.9),this.box(n,.05,i,6,.16,4,t("metal"));for(let a=0;a<5;a++)this.box(n,.17,i-2+a,6,.03,.12,this.mat(11310909))}else if(e.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(e.label??"",10,3.3,i,4,.65,-Math.PI/2,"#ff6b56");else if(e.kind==="street-mark")for(let a=0;a<3;a++)this.box(n,.05,i+(a-1)*1.8,.18,.03,.9,this.mat(9213035));else if(e.kind==="drain"){this.box(n,.04,i,1.7,.08,.6,this.mat(661533));for(let a=0;a<12;a++)this.box(n-.8+a*.14,.095,i,.055,.02,.5,this.mat(5399644))}else if(e.kind==="corpse"||e.kind==="skeleton")this.box(n,.17,i,.45,.3,1.5,this.mat(e.kind==="corpse"?5058625:10658186),.55),this.box(n-.24,.16,i+.75,.35,.23,.34,this.mat(7763815)),this.box(n,.025,i+.15,1.7,.02,2,this.mat(5051943));else if(e.kind==="chair"){this.box(n,.55,i,.6,.12,.6,this.mat(3684161)),this.box(n,.97,i+.25,.6,.8,.09,this.mat(3749953));for(const a of[-.23,.23])for(const l of[-.23,.23])this.box(n+a,.28,i+l,.06,.5,.06,t("metal"))}else if(e.kind==="bottles")for(let a=0;a<3;a++)this.addGeometry(new Jt(.06,.1,.3,5),this.mat(4288072),n+a*.18,1,i);else e.kind==="secret-table"&&(this.box(n,.75,i,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}this.buildEnvironmentDetails(),pm({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)}),vm({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});for(const[e,n,i,r,a]of[[0,2.6,7,16759929,9],[0,3,-26,9161405,9],[0,3,-39,5560217,10],[9,3.6,-5.5,13585292,12],[-9,3.6,-1.7,16759404,13],[-9,3.7,-12,6728156,9]]){const l=new Gr(r,a,13,2);l.position.set(e,n,i),this.lights.push(l),this.scene.add(l)}}decal(t,e,n,i,r,a,l=0,o=!1){const c=`decal-${t}`;let h=this.mats.get(c);h||(h=new Ve({map:hm(t),alphaTest:.12,side:$e,depthWrite:!o,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.mats.set(c,h)),this.addGeometry(new Ie(r,a),h,e,n,i,o?-Math.PI/2:0,l)}buildEnvironmentDetails(){const t=c=>this.mats.get(c),e=this.mat(5005912),n=this.mat(1716275),i=this.mat(9279361),r=this.mat(7885891),a=this.mat(7496267),l=(c,h,u,f,p,m=0,x=0)=>this.addGeometry(new Jt(f,f,p,8),e,c,h,u,m,0,x);this.box(-3.2,.88,8,2.3,.06,1.22,a),this.box(-3.2,.72,8.54,2,.16,.025,n);for(const c of[-3.7,-3.1,-2.5])this.box(c,.72,8.57,.49,.11,.035,a),this.box(c,.73,8.6,.16,.025,.03,i);this.box(-3.08,.98,8.26,.66,.055,.22,e);for(let c=0;c<3;c++)for(let h=0;h<10;h++)this.box(-3.34+h*.057,1.014,8.19+c*.052,.043,.018,.035,n);this.decal("paper",-2.46,.931,7.99,.43,.56,.15,!0),this.decal("paper",-3.96,.928,8.15,.36,.47,-.2,!0);for(let c=0;c<4;c++)this.box(-2.54,.96+c*.045,7.69,.38,.035,.32,this.mat(c%2?6315587:9273441),.12);this.box(-4.03,1.04,7.72,.29,.25,.22,n),this.box(-4.03,1.05,7.838,.23,.16,.012,e);for(let c=0;c<4;c++)this.box(-4.09+c*.04,1.06,7.85,.018,.09,.008,n);l(-4.13,1.26,7.69,.012,.32),this.box(-3.58,.95,8.35,.17,.05,.14,i),this.box(-3.59,.985,8.35,.1,.015,.08,n),l(-2.36,.953,7.72,.11,.04),l(-2.36,1.15,7.72,.025,.37),l(-2.53,1.39,7.72,.026,.4,0,Math.PI/2),this.addGeometry(new or(.19,.17,8),n,-2.69,1.37,7.72),this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(11390112));for(const c of[1.9,2.55]){this.box(-4.91,c,10.4,.16,.06,2.1,a);for(let h=0;h<9;h++){const u=9.58+h*.19;this.box(-4.89,c+.17,u,.16,.28+jt(h)*.09,.12,this.mat([7162948,5730661,8287574][h%3])),this.box(-4.8,c+.16,u,.012,.025,.1,i)}}this.box(-4.98,.95,8,.07,.04,7.6,n),this.box(4.99,3.6,8,.07,.06,7.6,e),this.sign("VESPER 2091 / MISSING: MARA",-2.48,2.67,11.97,2.35,.44,Math.PI,"#b7a57b","#2b3230"),this.decal("paper",1.9,.048,10,.43,.54,.6,!0),this.decal("paper",1.65,.047,10.32,.31,.42,-.2,!0),this.decal("graffiti",12.97,1.12,-14.2,2.55,1.12,-Math.PI/2),this.decal("graffiti",-12.97,1.3,-.7,2.4,1.05,Math.PI/2);for(const c of[-1,1]){l(c*12.83,5.4,-8,.065,23,Math.PI/2);for(let h=2;h>-20;h-=4)this.box(c*12.75,5.4,h,.09,.24,.2,e),this.box(c*11.78,.13,h,2.25,.024,.025,n);for(let h=1;h>-20;h-=6){this.box(c*11.68,.143,h,.7,.02,.42,n);for(let u=0;u<7;u++)this.box(c*11.68-.3+u*.1,.16,h,.038,.018,.38,e)}}for(let c=0;c<16;c++){const h=2-c*1.35;this.box(.6,.038,h,.12,.012,.62,this.mat(9277799));for(let u=0;u<3;u++)this.box(.58+(jt(c+u)-.5)*.13,.047,h+(jt(c+u+20)-.5)*.65,.08,.004,.05,t("road"))}for(const[c,h,u,f]of[[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal("puddle",c,.049,h,u,f,0,!0);for(let c=0;c<8;c++){const h=-10.7+jt(c+42)*21,u=-1-jt(c+90)*18;this.decal("paper",h,.048,u,.23,.31,jt(c)*ea,!0)}this.box(-7,.85,-8.17,1.75,.14,.1,e);for(let c=0;c<10;c++)this.box(-7.6+c*.13,1.02,-8.11,.044,.13,.04,n);for(const c of[-7.59,-6.41])this.box(c,1.12,-8.12,.28,.19,.045,this.mat(10593678)),this.box(c,1.13,-8.09,.21,.07,.015,this.basic(7835254));this.box(-7,1.38,-8.22,1.53,.03,.1,r),this.box(-7.2,1.66,-9.2,.026,.45,.028,i,.6);for(const c of[-.97,.97])for(const h of[-1.15,1.15])this.addGeometry(new Jt(.2,.2,.27,8),e,-7+c,.46,-10+h,0,0,Math.PI/2),this.addGeometry(new Jt(.085,.085,.28,6),n,-7+c,.46,-10+h,0,0,Math.PI/2);for(const[c,h,u]of[[6.98,-21,-31],[9.98,-33,-45]])for(const f of[-1,1]){const p=f*c;this.box(p,3.9,(h+u)/2,.14,.21,h-u,e),l(p-f*.11,3.62,(h+u)/2,.055,h-u,Math.PI/2);for(let m=h;m>=u;m-=2.4){this.box(p,2,m,.065,3.65,.075,n);for(const x of[.4,1.5,2.6,3.6])this.box(p-f*.045,x,m,.035,.055,.055,i);this.box(p-f*.09,3.62,m,.06,.27,.22,e)}this.decal("circuit",p-f*.04,1.6,(h+u)/2,.53,.76,-f*Math.PI/2)}for(const c of[-3.5,3.5]){this.box(c,4.28,-39,.6,.18,12,t("metal"));for(let h=-33.3;h>-45;h-=.65)this.box(c,4.17,h,.47,.08,.07,n);this.box(c,4.03,-33.5,.82,.18,.19,e),this.box(c,4.03,-44.5,.82,.18,.19,e)}this.decal("poster",-6.975,2.05,-22.8,.73,1.02,Math.PI/2),this.sign("HELIX / SECTOR 04",6.98,2.55,-22.8,1.7,.42,-Math.PI/2,"#b3c4a1");let o=0;for(const c of Le.props)if(c.kind==="tank"){const{x:h,z:u}=c;for(const f of[.32,2.7]){this.addGeometry(new Jt(.63,.63,.12,8),e,h,f,u);for(let p=0;p<8;p++){const m=p*ea/8;this.box(h+Math.sin(m)*.6,f,u+Math.cos(m)*.6,.075,.16,.075,i,m)}}for(const f of[-.45,.45])l(h+f,1.52,u-.36,.042,2.47);l(h,3.16,u,.1,.34),l(h,3.29,u-.5,.07,1,Math.PI/2),this.box(h+.43,1.6,u+.37,.31,.67,.18,n),this.decal("circuit",h+.43,1.6,u+.465,.24,.54),this.addGeometry(new Jt(.105,.105,.035,12),i,h+.43,2.14,u+.42,Math.PI/2),this.box(h+.43,2.14,u+.446,.01,.11,.016,this.mat(12281932),.4),this.sign(`LZ-${String(++o).padStart(2,"0")} / CONTAINED`,h,.64,u+.655,.72,.18,0,"#b6cda2","#183b34")}for(const[c,h,u]of[[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){this.box(c-.6,u+.09,h+.22,.26,.14,.3,n),this.box(c-.6,u+.16,h+.22,.19,.015,.2,i),this.decal("paper",c+.57,u+.009,h,.31,.43,.2,!0);for(let f=0;f<4;f++)this.box(c-.65+f*.15,u+.013,h-.24,.08,.012,.02,r)}for(const c of[-1.38,1.38]){this.box(c,1.36,-40,.23,.055,1.43,i);for(const h of[-40.49,-39.52])this.box(c,1.41,h,.27,.05,.12,n)}this.box(-1.1,1.4,-40,.18,.2,.22,n),l(-1.09,1.65,-40,.045,.28),this.box(-1.17,1.79,-40,.18,.07,.14,i);for(let c=0;c<3;c++){const h=.8+c*.27;this.addGeometry(new Jt(.06,.09,.29,6),this.mat(6523764),h,1.48,-40.4),this.box(h,1.64,-40.4,.07,.025,.07,e)}this.decal("paper",-1,1.36,-39.6,.35,.43,0,!0);for(const c of[-10.87,-3.12]){l(c,2.1,-49,.09,3.6);for(const h of[.7,3.45])l(c,h,-49,.14,.12);this.box(c,2.7,-51.88,.23,1.5,.12,e)}this.box(-7,4.25,-51.86,6,.12,.14,e),this.sign("AXIOM INDUSTRIES / FREIGHT 06",-7,1.35,-51.87,3.6,.36,0,"#8aa08e")}mesh(t,e,n,i,r,a){const l=new me(t,e);return l.position.set(n,i,r),a.add(l),l}localBox(t,e,n,i,r,a,l,o,c=0){return this.mesh(new Ye(r,a,l),this.mat(o,c),e,n,i,t)}buildDestructible(t){const e=new De;if(e.position.set(t.x,t.y,t.z),e.name=`shootable-${t.id}`,t.kind==="barrel"){this.mesh(new Jt(t.w*.44,t.w*.44,t.h,12),this.mats.get("fuel"),0,t.h/2,0,e);for(const i of[.08,t.h*.26,t.h*.76,t.h-.04])this.mesh(new Jt(t.w*.456,t.w*.456,.075,12),this.mat(7369850),0,i,0,e);this.mesh(new Jt(.105,.105,.055,8),this.mat(2238254),.14,t.h+.035,.1,e),this.localBox(e,-.12,t.h+.06,.04,.25,.08,.1,10196613)}else{const i=new Ve({color:9550273,transparent:!0,opacity:.25,side:$e,depthWrite:!1});this.mats.set(`breakable-glass-${t.id}`,i),this.mesh(new Ye(t.w,t.h,t.d),i,0,t.h/2,0,e);for(let r=0;r<4;r++){const a=this.mesh(new Ye(.012,t.h*.73,.045),this.basic(r%2?6589335:13031884),-Math.sign(t.x)*(t.w/2+.012),t.h*.58,-t.d*.32+r*.15,e);a.rotation.x=-.36}this.localBox(e,-Math.sign(t.x)*.09,.04,0,.08,.08,t.d,10466996)}const n=new De;if(n.position.set(t.x,t.y,t.z),n.visible=!1,n.name=`ruin-${t.id}`,t.kind==="barrel"){const i=this.mesh(new Jt(t.w*.43,t.w*.44,.25,10,1,!0),this.mat(2369579),0,.13,0,n);i.rotation.z=.13;for(let r=0;r<4;r++){const a=this.localBox(n,(jt(r+t.x)-.5)*1.15,.05,(jt(r+t.z)-.5)*1.15,.23,.045,.18,4471347);a.rotation.y=r*1.2}}else for(let i=0;i<12;i++)this.mesh(new Ie(.05+jt(i)*.13,.08+jt(i+2)*.17),this.basic(10337472),-.1,.017,-t.d/2+i*t.d/12,n).rotation.set(-Math.PI/2,0,i*2.1);this.scene.add(e,n),this.propGroups.set(t.id,e),this.propRuins.set(t.id,n)}buildDoor(t){const e=new De;e.position.set(t.x,0,t.z),this.mesh(new Ye(t.w,3.2,t.d),this.mats.get("door"),0,1.6,0,e);const n=t.w>t.d;n?(this.localBox(e,0,1.58,t.d/2+.015,t.w*.85,.08,.035,7581064),this.localBox(e,t.w*.35,1.3,t.d/2+.03,.15,.25,.03,t.locked?15629110:7924400,2250034)):this.localBox(e,-t.w/2-.015,1.58,0,.035,.08,t.d*.85,7581064),this.scene.add(e),this.doorGroups.set(t.id,e);const i=n?t.x:t.x-.3,r=n?t.z+.33:t.z;this.sign(t.label,i,3.57,r,n?Math.min(t.w+1.4,5):2.4,.5,n?0:-Math.PI/2,t.locked?"#ffb05d":"#8ccdaa")}creatureMaterial(t,e,n,i=0){const a={raptor:[6322507,10202996,9798226,12889715],soldier:[10587248,4809334,2108985,8426382],mutant:[8820318,5135683,7897973],brute:[10121060,8075325,7897973]}[t].includes(n)&&!i,l=[6322507,10202996,9798226,12889715,10587248,8820318,10121060].includes(n),o=`creature-${t}-${e?"saddle":"enemy"}-${n}-${i}`;let c=this.mats.get(o);if(!c){const h=a?Mm(t,n):void 0,u={color:a?16777215:n,map:h,emissive:a?16777215:i,emissiveMap:h,emissiveIntensity:a?.2:1,flatShading:!1};c=t==="soldier"&&a&&!l?new nf({...u,shininess:14,specular:2437168}):new Ys(u),this.mats.set(o,c)}return c}buildPickup(t){const e=new De,i={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:9149585,plasma:6547611,machinegun:7767941}[t];if(t==="health")this.localBox(e,0,0,0,.55,.34,.3,12898751),this.localBox(e,0,0,.16,.3,.08,.015,12992833),this.localBox(e,0,0,.161,.08,.27,.015,12992833);else if(t==="armor"){this.localBox(e,0,0,0,.45,.42,.24,i),this.localBox(e,0,.26,0,.22,.13,.2,9684915);for(const a of[-1,1])this.localBox(e,a*.27,.1,0,.1,.3,.22,i)}else if(t==="ammo"){this.localBox(e,0,0,0,.5,.3,.35,5859659);for(let a=0;a<4;a++)this.localBox(e,-.17+a*.115,.19,0,.055,.15,.065,i)}else if(t==="keycard")this.localBox(e,0,0,0,.35,.23,.02,8961178),this.localBox(e,0,.04,-.015,.33,.04,.02,2178355),this.localBox(e,.08,-.06,-.016,.07,.055,.02,15060343);else if(t==="evidence"){this.localBox(e,0,0,0,.42,.02,.48,i);for(let a=0;a<5;a++)this.localBox(e,0,.016,-.15+a*.07,.24,.009,.018,4806471)}else this.localBox(e,0,0,0,t==="revolver"?.35:.7,.13,.2,i),this.localBox(e,.27,0,0,.4,.06,.07,6584431),this.localBox(e,-.11,-.15,0,.12,.22,.12,4209714),t==="plasma"&&this.localBox(e,0,.07,-.105,.37,.06,.035,7993010,1333048);const r=new me(new ro(.28,.36,12),new Ve({color:i,transparent:!0,opacity:.6,side:$e}));return r.rotation.x=-Math.PI/2,r.position.y=-.43,e.add(r),e}resize(t){const e=t.resolution==="320"?320:640,n=t.resolution==="320"?200:400;this.renderer.setSize(e,n,!1),this.snapGrid.set(e*(e===640?1:.5),n*(e===640?1:.5));const i=this.canvas.getBoundingClientRect();this.camera.aspect=i.width&&i.height?i.width/i.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=t.resolution;for(const r of this.lights)r.visible=t.quality==="high"}render(t,e,n){this.lastResolution!==n.resolution&&this.resize(n),this.clock+=e;const i=t.player,r=this.previousPlayer,a=r?Math.hypot(i.x-r.x,i.z-r.z):0;r&&t.time<r.time&&(this.cameraStride=0,this.cameraMotion=0,this.lastMountPosition=void 0,this.mountHeading=-.7);const l=e>0&&a<1.5?a:0;this.cameraStride+=l,e>0&&(this.cameraMotion+=(Math.min(1,l/Math.max(e,.001)/4.4)-this.cameraMotion)*(1-Math.exp(-e*15))),this.previousPlayer={x:i.x,z:i.z,time:t.time};const o=i.crouching?.9:i.mounted?2.6:1.65,c=t.status==="playing"?Math.sin(this.cameraStride*(i.mounted?4.3:8.2))*this.cameraMotion*(i.mounted?.032:.016):0;this.camera.position.set(i.x,i.y+o+c,i.z),this.camera.rotation.set(i.pitch+i.recoil*.012,i.yaw,0,"YXZ"),this.muzzleLight.visible=n.quality==="high"&&!i.mounted&&i.owned.includes(i.weapon),this.muzzleLight.intensity=Math.max(0,i.recoil-.58)*26,this.muzzleLight.color.setHex(i.weapon==="plasma"?6684574:16764811),this.muzzleLight.position.set(i.x-Math.sin(i.yaw)*.65+Math.cos(i.yaw)*.2,i.y+o-.15,i.z-Math.cos(i.yaw)*.65-Math.sin(i.yaw)*.2),this.blastLight.visible=!1,this.blastLight.intensity=0;for(const m of t.doors){const x=this.doorGroups.get(m.id);x&&(x.position.y=m.open*3.4)}for(const m of t.enemies){const x=this.enemyGroups.get(m.id);Xa(x,{x:m.x,z:m.z,heading:m.heading,speed:m.speed,attack:m.attack,hurt:m.hurt,alive:m.alive,time:t.time,dt:e}),x.root.visible=this.sectorVisible(m.z,t)&&Math.hypot(m.x-i.x,m.z-i.z)<65,x.root.position.y=this.curbstep(m.x,m.z)}for(const m of t.pickups){const x=this.pickupGroups.get(m.id);x.visible=!m.collected,x.visible&&(x.position.y=.48+Math.sin(this.clock*3+m.x)*.06,x.rotation.y=this.clock*.75)}const h=t.mount,u=this.lastMountPosition,f=u?Math.hypot(h.x-u.x,h.z-u.z):0;f>.002&&f<2&&(this.mountHeading=Math.atan2(-(h.x-u.x),-(h.z-u.z))),Xa(this.mountRig,{x:h.x,z:h.z,heading:this.mountHeading,speed:e>0&&f<2?f/e:0,attack:i.mounted?i.recoil:0,hurt:0,alive:!0,time:t.time,dt:e}),this.mountRig.root.visible=!i.mounted,this.mountRig.root.position.y=this.curbstep(h.x,h.z),this.lastMountPosition={x:h.x,z:h.z},this.powerLamp&&this.powerLamp.material.color.setHex(t.powered?7602073:16737843);for(const m of t.destructibles){const x=this.propGroups.get(m.id),g=this.propRuins.get(m.id);x&&(x.visible=!m.destroyed),g&&(g.visible=m.destroyed)}for(let m=0;m<this.lamps.length;m++)this.lamps[m].visible=Math.sin(this.clock*3+m*1.73)>0||m%4!==1||Math.sin(this.clock*31+m)>-.7;for(let m=0;m<this.hazmat.length;m++)this.hazmat[m].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+m),.19);let p=0;for(const m of t.effects){const x=1-m.life/m.maxLife,g=m.kind==="explosion",d=m.kind==="shard";if(m.kind==="muzzle"&&Math.hypot(m.x-i.x,m.z-i.z)<.9)continue;g&&n.quality==="high"&&(1-x)*32>this.blastLight.intensity&&(this.blastLight.visible=!0,this.blastLight.intensity=(1-x)*32,this.blastLight.position.set(m.x,m.y,m.z));const S=g?24:d?1:m.kind==="muzzle"?5:7;for(let E=0;E<S&&p<192;E++){const _=m.kind==="blood"?14173245:m.kind==="plasma"?8060848:m.kind==="smoke"?7829101:d?12048861:g?E%3===0?16773040:E%3===1?16752951:13978149:16765568,b=g?.55:m.kind==="smoke"?.4:m.kind==="plasma"?.08:d?.4:.22,T=(jt(E+m.x)-.5)*x*b*5+(m.dx??0)*x*.6,C=(jt(E+m.z+13)-.5)*x*b*5+(m.dz??0)*x*.6;this.dummy.position.set(m.x+T,d?Math.max(.04,m.y-x*x*4):m.y+(jt(E+m.z)-.2)*x*b*3+(g?x*.4:0),m.z+C),this.dummy.quaternion.copy(this.camera.quaternion),this.dummy.rotateZ(d?x*7+E*.9:(jt(E+m.x)*2-1)*.8);const M=g?(3.8+x*5)*(1-x*.76):m.kind==="smoke"?1.5+x*5:Math.max(.25,1-x);this.dummy.scale.set(M,d?M*.45:M,1),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(p,this.dummy.matrix),this.effectMesh.setColorAt(p,new Ht(_)),this.effectTiles.setX(p,g?2:m.kind==="smoke"?3:m.kind==="plasma"?4:m.kind==="blood"?5:d?6:m.kind==="muzzle"?1:0),this.effectAlpha.setX(p,m.kind==="smoke"?Math.max(0,1-x):Math.min(1,(1-x)*3)),p++}}this.effectMesh.count=p,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectTiles.needsUpdate=this.effectAlpha.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.atmosphere.update(t,this.camera,this.clock,n),this.renderer.render(this.scene,this.camera)}curbstep(t,e){return e>-20&&e<4&&Math.abs(t)>10.5&&Math.abs(t)<13.1?.12:0}sectorVisible(t,e){const n=e.player.z,i=r=>(e.doors.find(a=>a.id===r)?.open??1)<=.001;return!(n>4.35&&t<3.7&&i("office")||n>-19.6&&t<-20.4&&i("facility")||n>-31.8&&t<-32.6&&i("laboratory")||n<-20.4&&t>-19.6&&i("facility")||n<-32.6&&t>-31.8&&i("laboratory"))}dispose(){this.atmosphere.dispose();const t=new Set,e=new Set(this.mats.values()),n=new Set;this.scene.traverse(i=>{if(i instanceof me){t.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material])e.add(r)}});for(const i of t)i.dispose();for(const i of e){const r=i.map;r&&n.add(r),i.dispose()}for(const i of n)i.dispose();this.renderer.dispose()}}const Un={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026}},na=["revolver","shotgun","plasma","machinegun"],Il={revolver:0,shotgun:0,plasma:0,machinegun:0},Nn={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},ye=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),je=(s,t,e)=>Math.max(t,Math.min(e,s));class Tc{constructor(t,e="normal"){this.level=t,this.resetState(e)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(t){const e=t==="easy"?.8:t==="hard"?1.18:1,n={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:"revolver",owned:[],ammo:{...Il},reserve:{...Il},reload:0,cooldown:0,recoil:0,hurt:0};this.state={player:n,enemies:this.level.enemies.map(i=>({...i,health:Math.round(Nn[i.kind].health*e),maxHealth:Math.round(Nn[i.kind].health*e),alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,heading:0,speed:0,attack:0,vx:0,vz:0,path:[],pathTime:0})),doors:this.level.doors.map(i=>({...i,open:0,target:0})),pickups:this.level.pickups.map(i=>({...i,collected:!1})),destructibles:(this.level.destructibles??[]).map(i=>({...i,maxHealth:i.health,destroyed:!1})),effects:[],status:"playing",kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty:t},this.reloading=null,this.attackWindups.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}restart(t=!1){if(t&&!this.checkpointState){this.resetState(this.state.difficulty);const e=this.state,n=e.player;n.keycard=!0,n.owned=["revolver","shotgun","machinegun"],n.weapon="machinegun",n.health=100,n.armor=55;for(const i of n.owned)n.ammo[i]=Un[i].clip,n.reserve[i]=Un[i].clip*4;for(const i of e.pickups)i.z>-32.2&&i.kind!=="evidence"&&i.x>-13&&(i.collected=!0);for(const i of e.enemies)i.z>-32.2&&(i.alive=!1,i.health=0,i.speed=0,i.vx=0,i.vz=0,i.attack=0,e.kills++);for(const i of e.doors)["office","facility","security"].includes(i.id)&&(i.open=1,i.target=1);e.checkpoint=!0,this.checkpointState=structuredClone(e),this.checkpointSecrets=[]}if(t&&this.checkpointState){this.state=structuredClone(this.checkpointState);const e=this.state.player;e.x=this.level.checkpoint.x,e.z=this.level.checkpoint.z,e.y=0,e.vy=0,e.grounded=!0,e.mounted=!1,e.health=Math.max(e.health,75),e.armor=Math.max(e.armor,25),e.cooldown=0,e.reload=0,e.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const n of this.state.enemies)n.path=[],n.pathTime=0,n.cooldown=1.1,n.speed=0,n.vx=0,n.vz=0,n.attack=0;this.message("CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.",4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(t,e){t=je(t,0,.075);const n=this.state,i=n.player;if(n.status!=="playing")return;if(n.time+=t,n.messageTime=Math.max(0,n.messageTime-t),i.yaw+=e.lookX,i.pitch=je(i.pitch+e.lookY,-1.22,1.22),i.cooldown=Math.max(0,i.cooldown-t),i.recoil=Math.max(0,i.recoil-t*4.6),i.hurt=Math.max(0,i.hurt-t*2),this.emptyClick=Math.max(0,this.emptyClick-t),i.reload>0&&(i.reload=Math.max(0,i.reload-t),i.reload===0&&this.reloading)){const a=this.reloading,l=Math.min(Un[a].clip-i.ammo[a],i.reserve[a]);i.ammo[a]+=l,i.reserve[a]-=l,this.reloading=null}(e.weaponDelta||e.weaponSlot)&&this.switchWeapon(e.weaponDelta,e.weaponSlot||void 0),e.reload&&this.reload(),e.interact&&this.interact(),this.updateDoors(t),this.movePlayer(t,e),this.collectPickups(),e.fire&&this.fire();const r=e.slow&&n.slow>.015;n.slow=je(n.slow+(r?-.17:.085)*t,0,1),this.updateEnemies(t*(r?.32:1),t),this.updateHazards(t);for(const a of n.effects)a.life-=t;n.effects=n.effects.filter(a=>a.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const t=this.state.player;return t.y+(t.mounted?2.6:t.crouching?.9:1.65)}canOccupy(t,e,n=.32,i=this.state.player.y){return this.state.player.mounted&&(e<-19.1||e>3.2)?!1:this.clearAt(t,e,n,i,this.height())}clearAt(t,e,n,i=0,r=1.8){const a=this.level.bounds;if(t-n<a.minX||t+n>a.maxX||e-n<a.minZ||e+n>a.maxZ)return!1;for(const l of this.level.walls){const o=l.y??0;if(!(i>=o+l.h-.025||i+r<=o+.025)&&this.circleBox(t,e,n,l.x,l.z,l.w,l.d))return!1}for(const l of this.state.doors)if(!(i+r<=l.open*3.4+.025)&&this.circleBox(t,e,n,l.x,l.z,l.w,l.d))return!1;for(const l of this.state.destructibles)if(!(l.destroyed||l.kind!=="barrel"||i>=l.y+l.h-.025||i+r<=l.y+.025)&&this.circleBox(t,e,n,l.x,l.z,l.w,l.d))return!1;return!0}circleBox(t,e,n,i,r,a,l){const o=je(t,i-a/2,i+a/2),c=je(e,r-l/2,r+l/2);return(t-o)**2+(e-c)**2<n*n}movePlayer(t,e){const n=this.state.player;e.crouch&&!n.mounted?n.crouching=!0:n.crouching&&(n.crouching=!1,this.canOccupy(n.x,n.z)||(n.crouching=!0));const i=je(e.forward,-1,1),r=je(e.strafe,-1,1),a=Math.max(1,Math.hypot(i,r)),l=n.mounted?8:n.crouching?2.3:e.sprint?6.4:4.4,o=(-Math.sin(n.yaw)*i+Math.cos(n.yaw)*r)*l*t/a,c=(-Math.cos(n.yaw)*i-Math.sin(n.yaw)*r)*l*t/a;n.mounted&&(n.z+c<-19.1||n.z+c>3.2)&&this.message("Your strider stays in the street. Press E to dismount and enter the building.",2);const h=Math.max(1,Math.ceil(Math.hypot(o,c)/.14)),u=n.mounted?.53:.32;for(let m=0;m<h;m++)this.canOccupy(n.x+o/h,n.z,u)&&(n.x+=o/h),this.canOccupy(n.x,n.z+c/h,u)&&(n.z+=c/h);e.jump&&!this.jumpHeld&&n.grounded&&!n.crouching&&(n.vy=n.mounted?6.4:6.1,n.grounded=!1),this.jumpHeld=e.jump,n.vy-=14*t;const f=n.y+n.vy*t;let p=0;if(n.vy<=0){for(const m of this.level.walls){const x=(m.y??0)+m.h;x<=n.y+.035&&x>=f&&this.circleBox(n.x,n.z,u,m.x,m.z,m.w,m.d)&&(p=Math.max(p,x))}for(const m of this.state.destructibles){if(m.destroyed||m.kind!=="barrel")continue;const x=m.y+m.h;x<=n.y+.035&&x>=f&&this.circleBox(n.x,n.z,u,m.x,m.z,m.w,m.d)&&(p=Math.max(p,x))}}n.vy<=0&&f<=p?(n.y=p,n.vy=0,n.grounded=!0):this.canOccupy(n.x,n.z,u,f)?(n.y=f,n.grounded=!1):n.vy>0&&(n.vy=0),n.mounted&&(this.state.mount.x=n.x,this.state.mount.z=n.z)}switchWeapon(t,e){const n=this.state.player;if(!n.owned.length)return;let i;if(e){if(i=na[je(Math.round(e)-1,0,3)],!n.owned.includes(i)){this.message("Weapon not acquired yet.",1.5);return}}else{const r=na.filter(l=>n.owned.includes(l)),a=r.indexOf(n.weapon);i=r[(a+(t>0?1:-1)+r.length)%r.length]}i!==n.weapon&&(n.weapon=i,n.reload=0,n.cooldown=.22,n.recoil=.22,this.reloading=null,this.message(Un[i].name,1.2))}reload(){const t=this.state.player,e=t.weapon,n=Un[e];if(!(!t.owned.includes(e)||t.reload>0||t.ammo[e]>=n.clip)){if(t.reserve[e]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=e,t.reload=n.reload,this.state.events.push({type:"reload",weapon:e})}}fire(){const t=this.state.player;if(this.state.status!=="playing"||t.cooldown>0||t.reload>0)return;if(t.mounted){this.bite();return}if(!t.owned.includes(t.weapon)){this.message("Find your revolver in the office.",2);return}const e=Un[t.weapon];if(t.ammo[t.weapon]<=0){t.reserve[t.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}t.ammo[t.weapon]--,t.cooldown=e.interval,t.recoil=1,this.state.events.push({type:"shot",weapon:t.weapon}),this.effect("muzzle",t.x-Math.sin(t.yaw)*.5,t.z-Math.cos(t.yaw)*.5,this.eyeHeight()-.18,.07);for(let n=0;n<e.pellets;n++){const i=t.yaw+(this.random()-.5)*e.spread*2,r=t.pitch+(this.random()-.5)*e.spread*1.5,a=-Math.sin(i)*Math.cos(r),l=-Math.cos(i)*Math.cos(r),o=Math.sin(r),c=this.eyeHeight();let h=this.rayWalls(t.x,c,t.z,a,o,l,e.range),u=null,f=null;for(const g of this.state.enemies){if(!g.alive)continue;const d=Nn[g.kind],S=this.rayEnemy(g,t.x,c,t.z,a,o,l,d.radius,d.height);S!==null&&S>=0&&S<h&&(h=S,u=g)}for(const g of this.state.destructibles){if(g.destroyed)continue;const d=this.rayBox(t.x,c,t.z,a,o,l,g.x-g.w/2,g.x+g.w/2,g.y,g.y+g.h,g.z-g.d/2,g.z+g.d/2);d!==null&&d<h&&(h=d,f=g,u=null)}const p=t.x+a*h,m=t.z+l*h,x=c+o*h;if(f)this.damageDestructible(f,e.damage),this.effect("spark",p,m,x,.16);else if(u){const g=t.weapon==="shotgun"?Math.max(.35,1-h/42):1;this.damageEnemy(u,e.damage*g),this.effect("blood",p,m,x,.24)}else h<e.range&&this.effect("spark",p,m,x,.15);if(t.weapon==="plasma"){const g=Math.min(12,Math.ceil(h/1.5));for(let d=1;d<=g;d++){const S=h*d/g;this.effect("plasma",t.x+a*S,t.z+l*S,c+o*S,.14)}}}}bite(){const t=this.state.player;t.cooldown=.58,t.recoil=.7;let e=!1;for(const n of this.state.enemies){if(!n.alive||ye(n,t)>3)continue;const i=n.x-t.x,r=n.z-t.z,a=Math.hypot(i,r);(-Math.sin(t.yaw)*i-Math.cos(t.yaw)*r)/Math.max(a,.1)>.35&&this.visible(t,n)&&(this.damageEnemy(n,95),this.effect("blood",n.x,n.z,1.1,.3),e=!0)}this.state.events.push({type:"enemy",message:e?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(t,e,n,i,r,a,l,o,c){const h=e-t.x,u=i-t.z,f=r*r+l*l,p=2*(h*r+u*l),m=h*h+u*u-o*o,x=p*p-4*f*m;if(x<0||f<1e-7)return null;const g=(-p-Math.sqrt(x))/(2*f),d=(-p+Math.sqrt(x))/(2*f);if(d<0)return null;let S=Math.max(0,g),E=d;if(Math.abs(a)<1e-8){if(n<0||n>c)return null}else{let _=-n/a,b=(c-n)/a;_>b&&([_,b]=[b,_]),S=Math.max(S,_),E=Math.min(E,b)}return S<=E?S:null}rayWalls(t,e,n,i,r,a,l){let o=l;for(const c of this.level.walls){const h=this.rayBox(t,e,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.y??0,(c.y??0)+c.h,c.z-c.d/2,c.z+c.d/2);h!==null&&h<o&&(o=h)}for(const c of this.state.doors){if(c.open>=.995)continue;const h=this.rayBox(t,e,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.open*3.4,3.4+c.open*3.4,c.z-c.d/2,c.z+c.d/2);h!==null&&h<o&&(o=h)}return o}rayBox(t,e,n,i,r,a,l,o,c,h,u,f){let p=0,m=1/0;const x=[t,e,n],g=[i,r,a],d=[l,c,u],S=[o,h,f];for(let E=0;E<3;E++){if(Math.abs(g[E])<1e-8){if(x[E]<d[E]||x[E]>S[E])return null;continue}let _=(d[E]-x[E])/g[E],b=(S[E]-x[E])/g[E];if(_>b&&([_,b]=[b,_]),p=Math.max(p,_),m=Math.min(m,b),p>m)return null}return m<0?null:p}visible(t,e,n=1.2){const i=ye(t,e);return i<.001?!0:this.rayWalls(t.x,n,t.z,(e.x-t.x)/i,0,(e.z-t.z)/i,i)>=i-.1}enemySees(t){const e=this.state.player,n=Nn[t.kind].height*.74,i=this.eyeHeight(),r=e.x-t.x,a=i-n,l=e.z-t.z,o=Math.hypot(r,a,l);return o<.001?!0:this.rayWalls(t.x,n,t.z,r/o,a/o,l/o,o)>=o-.1}damageEnemy(t,e){if(!t.alive||(t.health-=e,t.hurt=1,t.alert=!0,t.health>0))return;t.health=0,t.alive=!1,t.path=[],t.speed=0,t.vx=0,t.vz=0,t.attack=0,this.attackWindups.delete(t.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",t.x,t.z,.7,.5);const n=this.state.player;n.reserve.revolver+=2,n.reserve.plasma+=2,n.reserve.machinegun+=3,t.kind==="brute"&&this.message("Containment beast neutralized. Restore the elevator power.",3)}damageDestructible(t,e){if(!t.destroyed&&(t.health=Math.max(0,t.health-e),!(t.health>0))){if(t.destroyed=!0,t.kind==="glass"){this.shatterGlass(t);return}this.explodeBarrels(t)}}shatterGlass(t){this.state.events.push({type:"shatter"});for(let e=0;e<16;e++){const n=t.x+(this.random()-.5)*t.w,i=t.z+(this.random()-.5)*t.d,r=t.y+this.random()*t.h;this.state.effects.push({kind:"shard",x:n,z:i,y:r,life:.7,maxLife:.7,dx:(this.random()-.5)*2,dz:(this.random()-.5)*2})}this.message("SHOP WINDOW SHATTERED — the district answers back.",1.5)}explodeBarrels(t){const e=[t],n=new Set,i=4.2;for(let r=0;r<e.length&&r<this.state.destructibles.length;r++){const a=e[r];if(n.has(a.id))continue;n.add(a.id),this.state.events.push({type:"explosion"}),this.effect("explosion",a.x,a.z,a.y+.75,.5);for(let c=0;c<10;c++){const h=this.random()*Math.PI*2,u=this.random()*1.2;this.effect(c<6?"smoke":"spark",a.x+Math.sin(h)*u,a.z+Math.cos(h)*u,a.y+.4+this.random()*1.3,c<6?1.5:.38)}for(const c of this.state.enemies){const h=ye(a,c);!c.alive||h>=i||!this.blastVisible(a,c,Math.min(1.1,Nn[c.kind].height*.6))||(this.damageEnemy(c,145*(1-h/i)),this.effect("blood",c.x,c.z,1.05,.35))}const l=this.state.player,o=ye(a,l);o<i&&this.blastVisible(a,l,l.y+Math.min(this.height()*.5,1.2))&&this.hurtPlayer(75*(1-o/i));for(const c of this.state.destructibles){const h=ye(a,c);c.destroyed||h>=i||!this.blastVisible(a,c,c.y+c.h*.5)||(c.health=Math.max(0,c.health-145*(1-h/i)),!(c.health>0)&&(c.destroyed=!0,c.kind==="barrel"?e.push(c):this.shatterGlass(c)))}}this.state.status==="playing"&&this.message("FUEL CANISTER DETONATED — keep your distance from the blast.",2.5)}blastVisible(t,e,n){const i=t.y+.9,r=e.x-t.x,a=n-i,l=e.z-t.z,o=Math.hypot(r,a,l);return o<.001?!0:this.rayWalls(t.x,i,t.z,r/o,a/o,l/o,o)>=o-.015}updateDoors(t){for(const e of this.state.doors){const n=Math.sign(e.target-e.open);if(n!==0){if(n<0&&ye(e,this.state.player)<1.4){e.target=1;continue}e.open=je(e.open+n*t*1.3,0,1)}}}interact(){const t=this.state,e=t.player;if(t.status!=="playing")return;if(e.mounted){const r=[{x:e.x+Math.cos(e.yaw)*1.1,z:e.z-Math.sin(e.yaw)*1.1},{x:e.x-Math.cos(e.yaw)*1.1,z:e.z+Math.sin(e.yaw)*1.1},{x:e.x,z:e.z+1.2}].find(a=>this.clearAt(a.x,a.z,.32,0,1.8));if(!r){this.message("No room to dismount. Move into the street.",2);return}e.mounted=!1,e.x=r.x,e.z=r.z,e.y=0,e.vy=0,t.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(ye(e,this.level.switch)<2.5){t.powered?this.message("Power online. The industrial lift is ready.",2):(t.powered=!0,t.events.push({type:"door"}),this.message("ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.",4));return}if(ye(e,t.mount)<2.6&&e.z>-19){e.mounted=!0,e.crouching=!1,t.mount.x=e.x,t.mount.z=e.z,t.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.",4);return}const n=t.doors.filter(i=>ye(e,i)<2.9).sort((i,r)=>ye(i,e)-ye(r,e));if(n.length){const i=n[0];if(e.mounted&&i.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(i.locked&&!e.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(i.id==="elevator"){if(!t.powered){this.message("LIFT OFFLINE — restore power at the laboratory switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return}}i.target=i.target>.5?0:1,t.events.push({type:"door"}),i.secret&&!this.secretDoors.has(i.id)?(this.secretDoors.add(i.id),t.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${i.label}: ${i.target?"opening":"closing"}.`,1.6);return}if(ye(e,this.level.exit)<3){this.checkExit(),t.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(e.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard.",2)}collectPickups(){const t=this.state,e=t.player;for(const n of t.pickups)if(!(n.collected||ye(n,e)>1.1||e.y>1.5||!this.visible(e,n,.45))&&!(n.kind==="health"&&e.health>=100||n.kind==="armor"&&e.armor>=100))if(n.collected=!0,t.events.push({type:"pickup"}),na.includes(n.kind)){const i=n.kind,r=!e.owned.includes(i);r&&e.owned.push(i),e.ammo[i]=Un[i].clip,e.reserve[i]+=Un[i].clip*(i==="revolver"?8:3),r&&(e.weapon=i,e.reload=0,this.reloading=null,e.cooldown=.15,e.recoil=.2),this.message(`${Un[i].name.toUpperCase()} ACQUIRED — ${e.ammo[i]} loaded.`,2.5)}else n.kind==="health"?(e.health=Math.min(100,e.health+38),this.message("MEDKIT +38 HEALTH",1.6)):n.kind==="armor"?(e.armor=Math.min(100,e.armor+55),this.message("BODY ARMOR +55",1.6)):n.kind==="ammo"?(e.reserve.revolver+=24,e.reserve.shotgun+=16,e.reserve.plasma+=45,e.reserve.machinegun+=80,this.message("AMMUNITION CACHE — supplies replenished.",2)):n.kind==="evidence"?(e.evidence++,this.message("EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(e.keycard=!0,t.checkpoint=!0,this.message("SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.",4),t.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(t),this.checkpointState.events=[],this.checkpointSecrets=[...this.secretDoors])}finalThreats(){return this.state.enemies.filter(t=>t.alive&&(this.level.enemies.find(e=>e.id===t.id)?.z??t.z)<-32).length}checkExit(){const t=this.state;ye(t.player,this.level.exit)>1.5||t.status!=="playing"||!t.powered||this.finalThreats()>0||(t.status="complete",t.events.push({type:"complete"}),t.player.reload=0,this.message("NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(t,e=t){if(t<=0)return;const n=this.state.player,i=this.state.difficulty,r=i==="easy"?13:17;for(const a of this.state.enemies){if(!a.alive)continue;const l=Nn[a.kind],o=ye(a,n);if(a.speed=0,a.attack=Math.max(0,a.attack-t/(a.kind==="brute"?.26:.2)),a.hurt=Math.max(0,a.hurt-t*3.3),a.cooldown=Math.max(0,a.cooldown-t),a.pathTime-=t,!a.alert&&o<r&&this.enemySees(a)&&(a.alert=!0),!a.alert){a.vx=0,a.vz=0;continue}const c=this.attackWindups.get(a.id);if(c!==void 0){a.vx=0,a.vz=0,this.faceEnemy(a,n.x-a.x,n.z-a.z,t);const F=a.kind==="soldier"?.42:.32,Y=c-t;if(a.attack=.15+.85*je(1-Y/F,0,1),Y<=0){if(this.attackWindups.delete(a.id),a.attack=1,this.enemySees(a)&&o<l.range+(a.kind==="soldier"?2:.55))if(a.kind==="soldier"){this.effect("muzzle",a.x,a.z,1.4,.12);const G=i==="easy"?.55:i==="hard"?.88:.72;this.random()<G&&this.hurtPlayer(l.damage),this.effect("spark",n.x,n.z,Math.min(1.65,this.eyeHeight()),.1)}else this.hurtPlayer(l.damage),this.effect("blood",n.x,n.z,.65,.17);a.cooldown=l.interval*(i==="hard"?.8:i==="easy"?1.2:1)}else this.attackWindups.set(a.id,Y);continue}const h=this.enemySees(a);if(o<l.range&&h&&a.cooldown<=0){a.vx=0,a.vz=0,a.attack=.15,this.faceEnemy(a,n.x-a.x,n.z-a.z,t),this.attackWindups.set(a.id,a.kind==="soldier"?.42:.32),this.state.events.push({type:"enemy",message:a.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),a.kind==="soldier"&&this.effect("plasma",a.x,a.z,1.65,.4);continue}const u=a.kind==="soldier"?9:l.range*.85;if(h&&o<=u+.025){a.vx=0,a.vz=0,this.faceEnemy(a,n.x-a.x,n.z-a.z,t);continue}let f=n;if(!h||!this.clearAt(a.x+(n.x-a.x)/Math.max(o,.01)*.7,a.z+(n.z-a.z)/Math.max(o,.01)*.7,l.radius,0,l.height))if(a.pathTime<=0&&(a.path=this.findPath(a,n,l.radius,Math.min(l.height,1.8)),a.pathTime=.8+this.random()*.25),a.path.length){for(;a.path.length&&ye(a,a.path[0])<.4;)a.path.shift();a.path.length&&(f=a.path[0])}else{a.vx=0,a.vz=0;continue}const p=ye(a,f);if(p<.01){a.vx=0,a.vz=0;continue}const m=a.kind==="raptor"?12:a.kind==="mutant"?8:5;let x=l.speed*(i==="easy"?.88:i==="hard"?1.12:1)*(a.hurt>0?.42:1);f===n&&h&&(x=Math.min(x,Math.sqrt(2*m*Math.max(0,o-u))));let g=(f.x-a.x)/p*x,d=(f.z-a.z)/p*x;for(const F of this.state.enemies){if(F===a||!F.alive)continue;const Y=ye(a,F),K=l.radius+Nn[F.kind].radius+.35;Y>.01&&Y<K&&(g+=(a.x-F.x)/Y*(K-Y)*3,d+=(a.z-F.z)/Y*(K-Y)*3)}const S=Math.hypot(g,d);S>x&&(g*=x/S,d*=x/S);const E=g-a.vx,_=d-a.vz,b=Math.hypot(E,_),T=b>0?Math.min(1,m*t/b):1;a.vx+=E*T,a.vz+=_*T;const C=a.vx*t,M=a.vz*t,A=a.x,I=a.z,L=Math.max(1,Math.ceil(Math.hypot(C,M)/.12));for(let F=0;F<L;F++)this.enemyCanMove(a,a.x+C/L,a.z)&&(a.x+=C/L),this.enemyCanMove(a,a.x,a.z+M/L)&&(a.z+=M/L);const P=a.x-A,D=a.z-I,U=Math.hypot(P,D);a.speed=U/Math.max(e,1e-8),a.phase+=U,a.vx=P/t,a.vz=D/t,U>1e-5&&this.faceEnemy(a,P,D,t)}}faceEnemy(t,e,n,i){if(Math.hypot(e,n)<1e-5)return;const r=Math.atan2(-e,-n),a=Math.atan2(Math.sin(r-t.heading),Math.cos(r-t.heading)),l=t.kind==="raptor"?8:t.kind==="brute"?4:6;t.heading+=je(a,-l*i,l*i),t.heading=Math.atan2(Math.sin(t.heading),Math.cos(t.heading))}enemyCanMove(t,e,n){const i=Nn[t.kind];if(!this.clearAt(e,n,i.radius,0,i.height))return!1;for(const r of this.state.enemies){if(r===t||!r.alive)continue;const a=i.radius+Nn[r.kind].radius,l=Math.hypot(e-r.x,n-r.z);if(l<a-1e-5&&l<=ye(t,r)+1e-6)return!1}return!0}findPath(t,e,n,i){const r=this.level.bounds,a=.9,l=Math.ceil((r.maxX-r.minX)/a),o=Math.ceil((r.maxZ-r.minZ)/a),c=L=>({x:je(Math.floor((L.x-r.minX)/a),0,l-1),z:je(Math.floor((L.z-r.minZ)/a),0,o-1)}),h=c(t),u=c(e),f=(L,P)=>P*l+L,p=L=>({x:r.minX+(L%l+.5)*a,z:r.minZ+(Math.floor(L/l)+.5)*a}),m=f(h.x,h.z),x=f(u.x,u.z),g=[m],d=new Map,S=new Map([[m,0]]),E=new Set,_=L=>Math.abs(L%l-u.x)+Math.abs(Math.floor(L/l)-u.z);let b=-1,T=m,C=_(m),M=0;for(;g.length&&M++<1900;){let L=0,P=1/0;for(let G=0;G<g.length;G++){const K=(S.get(g[G])??1/0)+_(g[G]);K<P&&(P=K,L=G)}const D=g.splice(L,1)[0];if(E.has(D))continue;E.add(D);const U=_(D);if(U<C&&(C=U,T=D),D===x){b=D;break}const F=D%l,Y=Math.floor(D/l);for(const[G,K]of[[1,0],[-1,0],[0,1],[0,-1]]){const V=F+G,q=Y+K;if(V<0||V>=l||q<0||q>=o)continue;const Z=f(V,q);if(E.has(Z))continue;const mt=p(Z);if(Z!==x&&!this.clearAt(mt.x,mt.z,n,0,i))continue;const Mt=(S.get(D)??0)+1;Mt>=(S.get(Z)??1/0)||(S.set(Z,Mt),d.set(Z,D),g.includes(Z)||g.push(Z))}}if(b===-1){if(T===m)return[];b=T}const A=[];let I=b;for(;I!==m&&d.has(I);)A.push(p(I)),I=d.get(I);return A.reverse()}hurtPlayer(t){const e=this.state,n=e.player;if(e.status!=="playing")return;t*=e.difficulty==="easy"?.65:e.difficulty==="hard"?1.22:1,n.mounted&&(t*=.65);const i=Math.min(n.armor,t*.65);n.armor-=i,n.health=Math.max(0,n.health-(t-i)),n.hurt=1,e.events.push({type:"hurt"}),n.health<=0&&(e.status="dead",n.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(t){const e=this.state.player;e.y<.45&&this.level.hazards.some(i=>Math.abs(e.x-i.x)<i.w/2&&Math.abs(e.z-i.z)<i.d/2)?(this.hazardTime+=t,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(t,e,n,i,r){this.state.effects.push({kind:t,x:e,z:n,y:i,life:r,maxLife:r})}message(t,e){this.state.message===t&&this.state.messageTime>.1||(this.state.message=t,this.state.messageTime=e,this.state.events.push({type:"message",message:t}))}}const Cm={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class Pm{constructor(t,e){this.canvas=t,this.onPause=e,document.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(n.code)){n.preventDefault(),n.stopImmediatePropagation(),n.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.repeat||(n.code==="Space"&&(this.pending.jump=!0),n.code==="KeyE"&&(this.pending.interact=!0),n.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-4]$/.test(n.code)&&(this.pending.weaponSlot=Number(n.code.slice(-1))))}}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=n.movementX,this.mouseY+=n.movementY)}),this.canvas.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType==="touch"||n.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===this.canvas,i=this.wasLocked&&!n;this.wasLocked=n,n||(this.clear(),i&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.enabled&&(n.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(n.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const t=(...n)=>n.some(i=>this.keys.has(i)),e=this.enabled?{forward:Math.max(-1,Math.min(1,Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(t("KeyD"))-Number(t("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(t("ArrowLeft"))-Number(t("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:t("ShiftLeft","ShiftRight")||this.touchSprint,crouch:t("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:t("KeyQ")}:{...Cm};return this.mouseX=0,this.mouseY=0,this.pending={},e}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const t=document.querySelector("#touch-controls");if(!t)return;t.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const e=t.querySelector(".touch-stick");this.stick=e.querySelector("i"),e.addEventListener("pointerdown",a=>{!this.enabled||this.stickPointer>=0||(a.preventDefault(),this.stickPointer=a.pointerId,this.stickOrigin={x:a.clientX,y:a.clientY},e.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{if(!this.enabled||a.pointerId!==this.stickPointer)return;const l=a.clientX-this.stickOrigin.x,o=a.clientY-this.stickOrigin.y,c=Math.hypot(l,o),h=38,u=c>h?h/c:1;this.touchMove={x:l*u/h,y:o*u/h},this.stick&&(this.stick.style.transform=`translate(${l*u}px,${o*u}px)`)});const n=a=>{a.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n);const i=t.querySelector(".touch-look");i.addEventListener("pointerdown",a=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY},i.setPointerCapture(a.pointerId))}),i.addEventListener("pointermove",a=>{!this.enabled||a.pointerId!==this.lookPointer||(this.mouseX+=(a.clientX-this.lastLook.x)*1.6,this.mouseY+=(a.clientY-this.lastLook.y)*1.6,this.lastLook={x:a.clientX,y:a.clientY})});const r=a=>{a.pointerId===this.lookPointer&&(this.lookPointer=-1)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),t.querySelectorAll("button").forEach(a=>{a.addEventListener("pointerdown",o=>{if(this.enabled)switch(o.preventDefault(),a.setPointerCapture(o.pointerId),a.classList.add("held"),a.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const l=()=>{a.classList.remove("held"),a.dataset.action==="fire"&&(this.touchFire=!1),a.dataset.action==="sprint"&&(this.touchSprint=!1)};a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l)})}}const Ll="fossil-noir-3d-settings",Li={sensitivity:1,resolution:"640",quality:"high",volume:.7,musicVolume:.75,effectsVolume:.95,difficulty:"normal"},Im={revolver:"DETECTIVE REVOLVER",shotgun:"TACTICAL SHOTGUN",plasma:"PLASMA RIFLE",machinegun:"HEAVY MACHINE GUN"};class Lm{constructor(t){this.callbacks=t,this.settings=this.loadSettings(),this.overlay.addEventListener("click",n=>{const i=n.target.closest("button[data-action]");if(!(!i||i.disabled))switch(i.dataset.action){case"start":t.start(!1);break;case"continue":t.start(!0);break;case"resume":t.resume();break;case"retry":t.restart(!1);break;case"checkpoint":t.restart(!0);break;case"menu":t.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",n=>{const i=n.target;if(!i.dataset.setting)return;const r=i.dataset.setting,a=["sensitivity","volume","musicVolume","effectsVolume"].includes(r)?Number(i.value):i.value;this.settings=this.validateSettings({...this.settings,[r]:a});try{localStorage.setItem(Ll,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings}),r==="sensitivity"&&(this.overlay.querySelector("#sensitivity-value").textContent=`${this.settings.sensitivity.toFixed(1)}×`),r==="volume"&&(this.overlay.querySelector("#volume-value").textContent=`${Math.round(this.settings.volume*100)}%`),r==="musicVolume"&&(this.overlay.querySelector("#music-volume-value").textContent=`${Math.round(this.settings.musicVolume*100)}%`),r==="effectsVolume"&&(this.overlay.querySelector("#effects-volume-value").textContent=`${Math.round(this.settings.effectsVolume*100)}%`)}),document.addEventListener("keydown",n=>{this.screen!=="playing"&&n.code==="Escape"&&(n.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&t.resume())});const e=document.createElement("button");e.className="desktop-pause",e.setAttribute("aria-label","Pause mission"),e.textContent="Ⅱ",e.addEventListener("click",()=>t.pause()),document.querySelector("#game").appendChild(e),this.show("menu")}settings;screen="menu";panel="main";state;overlay=document.querySelector("#menu-overlay");cached=new Map;show(t){this.screen=t,this.panel="main",document.body.classList.toggle("playing",t==="playing"),document.body.dataset.screen=t,this.overlay.hidden=t==="playing",t!=="playing"&&this.render()}update(t){this.state=t;const e=t.player;this.write("hud-health",String(Math.max(0,Math.ceil(e.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(e.armor))).padStart(3,"0")),this.write("hud-ammo",e.reload>0?"LOAD":String(e.ammo[e.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(e.reserve[e.weapon]).padStart(3,"0")}`),this.write("hud-weapon",e.owned.includes(e.weapon)?Im[e.weapon]:"MECHANICAL ARM"),this.write("hud-kills",`${t.kills} / ${t.enemies.length}`),this.write("hud-mode",e.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(t.slow*100)}%`);const n=document.querySelector("#hud-key");n.classList.toggle("acquired",e.keycard),n.querySelector("b").textContent=e.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,e.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,e.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",e.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,e.hurt*.7)));const i=e.owned.length?!e.keycard&&e.z>=-19?"REACH THE AXIOM FACILITY":e.keycard?t.powered?"REACH THE INDUSTRIAL ELEVATOR":"ENTER THE LAB · RESTORE ELEVATOR POWER":"FIND THE SECURITY KEYCARD":"FIND YOUR REVOLVER";this.write("objective",i),this.write("message",t.messageTime>0?t.message:"");let r="";const a=t.doors.find(l=>Math.hypot(l.x-e.x,l.z-e.z)<3.2);e.mounted?r="E · DISMOUNT STRIDER":Math.hypot(t.mount.x-e.x,t.mount.z-e.z)<2.8?r="E · RIDE STRIDER":!t.powered&&Math.hypot(Le.switch.x-e.x,Le.switch.z-e.z)<2.5?r="E · RESTORE ELEVATOR POWER":Math.hypot(Le.exit.x-e.x,Le.exit.z-e.z)<3?r=t.powered?"ENTER THE LIFT TO EXTRACT":"ELEVATOR POWER REQUIRED":a&&(r=a.locked&&!e.keycard?"SECURITY KEYCARD REQUIRED":`E · ${a.target>0?"CLOSE":"OPEN"} ${a.label.toUpperCase()}`),this.write("interaction",r),document.querySelector("#crosshair").classList.toggle("firing",e.recoil>.1)}setError(t){const e=document.querySelector("#error");e.textContent=t,e.hidden=!t}write(t,e){if(this.cached.get(t)===e)return;this.cached.set(t,e);const n=document.getElementById(t);n&&(n.textContent=e)}hasCheckpoint(){if(this.state?.checkpoint)return!0;try{return!!localStorage.getItem("fossil-noir-3d-checkpoint")}catch{return!1}}render(){const t=this.hasCheckpoint(),e=this.panel==="main",n=this.screen==="menu";let i="",r="";if(this.panel==="controls")r="FIELD MANUAL",i='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them. Shoot fuel canisters to blast nearby enemies; shop glass shatters.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")r="SYSTEM SETUP",i=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">MASTER VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="music-volume">MUSIC VOLUME <output id="music-volume-value">${Math.round(this.settings.musicVolume*100)}%</output></label><input id="music-volume" data-setting="musicVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.musicVolume}"><label for="effects-volume">EFFECTS VOLUME <output id="effects-volume-value">${Math.round(this.settings.effectsVolume*100)}%</output></label><input id="effects-volume" data-setting="effectsVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.effectsVolume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty==="easy"?"selected":""}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty==="normal"?"selected":""}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty==="hard"?"selected":""}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(n)i=`<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${t?"":"disabled"}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")r="MISSION PAUSED",i=`<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${t?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")r="CASE CLOSED",i=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${t?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${t?"":"primary"}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){r="DISTRICT SURVIVED";const a=Math.floor(this.state?.time??0);i=`<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${n&&e?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${n&&e?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${r?`<h2 class="panel-title">${r}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${i}</div></section>${n&&e?'<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>':""}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${n?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const t=localStorage.getItem(Ll);return this.validateSettings(t?JSON.parse(t):{})}catch{return{...Li}}}validateSettings(t){const e=t&&typeof t=="object"?t:{},n=(i,r,a,l)=>typeof i=="number"&&Number.isFinite(i)?Math.min(a,Math.max(r,i)):l;return{sensitivity:n(e.sensitivity,.3,2.5,Li.sensitivity),resolution:e.resolution==="320"||e.resolution==="640"?e.resolution:Li.resolution,quality:e.quality==="low"?"low":"high",volume:n(e.volume,0,1,Li.volume),musicVolume:n(e.musicVolume,0,1,Li.musicVolume),effectsVolume:n(e.effectsVolume,0,1,Li.effectsVolume),difficulty:e.difficulty==="easy"||e.difficulty==="hard"?e.difficulty:"normal"}}}const le=["#0e1114","#24282c","#3d454a","#59636a","#7c8b90","#a6b5b7","#c7d1c9","#e2e4d5"],ze=["#0c1419","#202d37","#3a4a55","#566a73","#768b91","#9eafb0","#c2cfc8","#e2e8d9"],Dl={revolver:[159,128],shotgun:[158,130],plasma:[158,128],machinegun:[158,127]};class Dm{constructor(t){this.canvas=t,t.width=640,t.height=400,t.style.imageRendering="pixelated";const e=t.getContext("2d");if(!e)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=e,e.imageSmoothingEnabled=!1,e.setTransform(2,0,0,2,0,0),this.cacheMechanicalParts();for(const n of["fist","revolver","shotgun","plasma","machinegun"]){const i=document.createElement("canvas");i.width=320,i.height=200;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.setTransform(1,0,0,1,0,0),this.paintWeapon(r,n),this.crispSprite(r,i.width,i.height),this.sprites.set(n,i)}this.cacheFiringEffects()}ctx;sprites=new Map;parts=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;effectTime=0;movementAmount=0;shotSerial=0;flares=new Map;smokeSprites=[];smoke=[];casings=[];reloadCasesEjected=!1;lastSimulationTime=0;render(t,e){const n=t.player,i=this.ctx;e=Math.max(0,Math.min(e,.06)),this.effectTime+=e,i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,320,200);const r=n.owned.includes(n.weapon)?n.weapon:"fist";if(t.time<this.lastSimulationTime&&(this.initialized=!1,this.flash=0,this.shotAge=1,this.lastRecoil=0,this.lastReload=0,this.switchTime=0,this.movementAmount=0,this.travel=0,this.effectTime=0,this.smoke.length=0,this.casings.length=0),this.lastSimulationTime=t.time,this.initialized||(this.current=this.next=r,this.lastX=n.x,this.lastZ=n.z,this.initialized=!0),r!==this.next&&(this.next=r,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-e),this.switchTime<.16&&(this.current=this.next)),n.recoil>.65&&n.recoil>this.lastRecoil+.04&&r!=="fist"&&!n.mounted&&(this.flash=r==="plasma"?.11:r==="shotgun"?.09:.075,this.shotAge=0,this.shotSerial++,this.spawnShotEffects(r)),this.lastRecoil=n.recoil,this.flash=Math.max(0,this.flash-e),this.shotAge+=e,n.reload>this.lastReload+.1&&(this.reloadDuration=n.reload,this.reloadCasesEjected=!1),this.lastReload=n.reload,e>0){const g=Math.hypot(n.x-this.lastX,n.z-this.lastZ)/e;this.lastX=n.x,this.lastZ=n.z,this.travel+=Math.min(g,15)*e*(n.mounted?1.9:2.5),this.movementAmount=Math.min(g/4,1),this.updateParticles(e)}const a=this.movementAmount,l=Math.sin(this.travel)*2.2*a,o=Math.abs(Math.cos(this.travel))*2.5*a,c=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,h=n.reload>0?1-n.reload/this.reloadDuration:0,u=n.reload>0?Math.sin(h*Math.PI):0,f=Math.min(1,n.recoil),p=this.shotAge<.26?Math.exp(-this.shotAge*(this.current==="shotgun"?11:19)):0,m=this.current==="shotgun"?11:this.current==="revolver"?6:this.current==="machinegun"?3.5:4,x=this.current==="shotgun"?.12:this.current==="revolver"?.105:this.current==="machinegun"?.033:.035;if(this.current==="revolver"&&n.reload>0&&h>.22&&!this.reloadCasesEjected){this.reloadCasesEjected=!0;for(let g=0;g<6;g++)this.spawnCasing("revolver",168-g*.7,167+g*.3,28+g*7,-27-g*3,g)}if(n.mounted){this.paintMount(i,this.effectTime,a,f),this.line(i,[173,159],[251,188],"#5b4f35",2),this.arm(i,247,186);return}if(i.save(),i.translate(Math.round(l+p*(this.current==="machinegun"?Math.sin(this.shotSerial*2.4)*1.5:1)),Math.round(o+c+p*m+u*23)),p>0&&n.reload<=0&&(i.translate(220,180),i.rotate(p*x),i.translate(-220,-180)),n.reload>0&&(i.translate(209,176),i.rotate(u*(this.current==="revolver"?.3:-.14)),i.translate(-209,-176)),i.drawImage(this.sprites.get(this.current),0,0,320,200),this.paintAmmoGauge(i,this.current,n.ammo[this.current]||0),this.paintMechanism(i,this.current,n.reload>0),this.current==="plasma"&&this.paintPlasmaPulse(i,this.effectTime,n.reload>0),this.paintSmoke(i),n.reload>0&&this.paintReload(i,this.current,h),this.flash>0&&n.reload<=0&&this.paintFlash(i,this.current),this.current==="shotgun"&&n.reload<=0){const g=this.shotAge<.48&&this.shotAge>.12;this.paintPumpHand(i,g?Math.sin((this.shotAge-.12)/.36*Math.PI)*8:0)}i.restore(),this.paintCasings(i)}poly(t,e,n,i="#080c10"){t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(const[r,a]of e.slice(1))t.lineTo(r,a);t.closePath(),t.fillStyle=n,t.fill(),i&&(t.strokeStyle=i,t.lineWidth=1,t.stroke())}line(t,e,n,i,r=1){t.beginPath(),t.moveTo(...e),t.lineTo(...n),t.strokeStyle=i,t.lineWidth=r,t.stroke()}bolt(t,e,n){t.fillStyle="#10161c",t.fillRect(e-2,n-2,5,5),t.fillStyle="#9faeae",t.fillRect(e-1,n-1,3,3),t.fillStyle="#344650",t.fillRect(e-1,n,3,1),t.fillStyle="#e2e5d5",t.fillRect(e-1,n-1,2,.5),t.fillStyle="#131f26",t.fillRect(e-.5,n-.5,.5,2),t.fillStyle="#52636a",t.fillRect(e+1,n+.5,.5,1.5)}screw(t,e,n,i=!1){t.fillStyle="#091317",t.fillRect(e-1,n-1,2.5,2.5),t.fillStyle=i?"#a58d59":"#91a19e",t.fillRect(e-.5,n-.5,1.5,1.5),t.fillStyle=i?"#f0d399":"#dbe0d3",t.fillRect(e-.5,n-.5,1,.5),t.fillStyle="#24333b",t.fillRect(e,n-.5,.5,1.5)}inset(t,e,n="#27353b"){this.poly(t,e,n,"#091318");for(let i=0;i<e.length-1;i++)i%2===0&&this.line(t,e[i],e[i+1],"#b0beb063",.5)}machining(t,e,n,i=90){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const f of e.slice(1))t.lineTo(...f);t.closePath(),t.clip();const r=e.map(f=>f[0]),a=e.map(f=>f[1]),l=Math.min(...r),o=Math.min(...a),c=Math.max(...r)-l,h=Math.max(...a)-o;let u=n;for(let f=0;f<i;f++){u=u*1664525+1013904223>>>0;const p=l+u%Math.max(1,c*2|0)*.5;u=u*1664525+1013904223>>>0;const m=o+u%Math.max(1,h*2|0)*.5;t.fillStyle=f%4===0?"#d3dcc241":f%4===1?"#030a136a":"#a5bab225",t.fillRect(p,m,f%9===0?2.5:.5,.5),f%17===0&&(t.fillStyle="#101b2570",t.fillRect(p,m+.5,1.5,.5))}t.restore()}etch(t,e,n,i,r="#b3bdab",a=0){const l={A:["010","101","111","101","101"],B:["110","101","110","101","110"],C:["111","100","100","100","111"],D:["110","101","101","101","110"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],H:["101","101","111","101","101"],I:["111","010","010","010","111"],K:["101","101","110","101","101"],L:["100","100","100","100","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["110","101","110","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"],V:["101","101","101","101","010"],X:["101","101","010","101","101"],Y:["101","101","010","010","010"],0:["111","101","101","101","111"],1:["010","110","010","010","111"],2:["110","001","010","100","111"],3:["110","001","010","001","110"],4:["101","101","111","001","001"],5:["111","100","110","001","110"],6:["011","100","111","101","111"],7:["111","001","010","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","110"],"-":["000","000","111","000","000"],".":["000","000","000","000","010"]};t.save(),t.translate(n,i),t.rotate(a),t.fillStyle=r;for(let o=0;o<e.length;o++){const c=l[e[o]];c&&c.forEach((h,u)=>{for(let f=0;f<3;f++)h[f]==="1"&&t.fillRect(o*2+f*.5,u*.5,.5,.5)})}t.restore()}wire(t,e,n,i=1){for(let r=0;r<e.length-1;r++)this.line(t,e[r],e[r+1],"#071219",i+1.5);for(let r=0;r<e.length-1;r++)this.line(t,e[r],e[r+1],n,i);for(let r=0;r<e.length-1;r++){const[a,l]=e[r];this.line(t,[a,l-.5],[e[r+1][0],e[r+1][1]-.5],"#ffe1b03a",.5)}}gripTexture(t,e){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const r of e.slice(1))t.lineTo(...r);t.closePath(),t.clip();const n=e.map(r=>r[0]),i=e.map(r=>r[1]);for(let r=Math.min(...i);r<Math.max(...i);r+=1.5)for(let a=Math.min(...n);a<Math.max(...n);a+=1.5)t.fillStyle="#090e1380",t.fillRect(a+Math.round(r)%2*.5,r,.5,.5),t.fillStyle="#c2ae8b45",t.fillRect(a+.5,r+.5,.5,.5);t.restore()}scratches(t,e,n,i=45){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const f of e.slice(1))t.lineTo(...f);t.closePath(),t.clip();const r=e.map(f=>f[0]),a=e.map(f=>f[1]),l=Math.min(...r),o=Math.min(...a),c=Math.max(...r)-l,h=Math.max(...a)-o;let u=n;for(let f=0;f<i;f++){u=u*1664525+1013904223>>>0;const p=l+u%Math.max(1,c|0);u=u*1664525+1013904223>>>0;const m=o+u%Math.max(1,h|0);t.fillStyle=f%3===0?"#a2afa42b":"#040b104a",t.fillRect(p,m,f%5===0?3:1,1)}t.restore()}arm(t,e=247,n=186){t.drawImage(this.parts.get("mount-arm"),Math.round(e-247),Math.round(n-186),320,200)}hand(t,e,n){t.drawImage(this.parts.get("hand"),Math.round(e-20),Math.round(n-16),56,52)}pixelFace(t,e,n,i,r=.5,a=.5){const l=e.map(m=>m[0]),o=e.map(m=>m[1]),c=Math.floor(Math.min(...l)),h=Math.ceil(Math.max(...l)),u=Math.floor(Math.min(...o)),f=Math.ceil(Math.max(...o));t.save(),t.beginPath(),t.moveTo(...e[0]);for(const m of e.slice(1))t.lineTo(...m);t.closePath(),t.clip();const p=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let m=u;m<f;m++)for(let x=c;x<h;x++){const g=(x*73856093^m*19349663^i)>>>0,d=(m-u)/Math.max(1,f-u),S=Math.sin((x+i%41)*.14)*Math.cos((m+i%29)*.12),E=Math.max(0,Math.sin((x-c)/Math.max(1,h-c)*6+i%4))*(1-d)*.07,_=r*.83+a*(.36-d*.78)+S*.035+E+(g%23-11)*7e-4,b=Math.max(0,Math.min(n.length-1.01,_*(n.length-1)));let T=Math.round(b);const C=Math.floor(b),M=b-C;M>.34&&M<.66&&S<.1&&(T=C+(M>p[(x&3)+((m&3)<<2)]/16?1:0)),g%137===0&&(T=Math.min(n.length-1,T+2)),g%149===0&&(T=Math.max(0,T-2)),t.fillStyle=n[T],t.fillRect(x,m,1,1)}t.restore()}crispSprite(t,e,n){const i=t.getImageData(0,0,e,n);for(let r=0;r<i.data.length;r+=4)i.data[r+3]=i.data[r+3]<160?0:255;t.putImageData(i,0,0)}metalBolt(t,e,n){t.fillStyle="#151b1b",t.fillRect(e-2,n-2,5,5),t.fillStyle="#9b9e89",t.fillRect(e-1,n-1,3,3),t.fillStyle="#d1d2b4",t.fillRect(e-1,n-1,2,1),t.fillStyle="#414b48",t.fillRect(e,n,2,2)}paintArmSprite(t,e,n){const i=["#080d10","#11191c","#1e282a","#303a37","#465048"];this.pixelFace(t,[[e+30,n+7],[e+52,n+5],[286,180],[319,186],[330,217],[265,217],[e+27,n+37]],i,294,.34,.22),this.pixelFace(t,[[e+14,n+11],[e+33,n+5],[276,179],[294,200],[273,211],[e+8,n+32]],ze,642,.37,.4),this.pixelFace(t,[[e+19,n+12],[e+33,n+8],[273,179],[276,186],[e+18,n+28]],le,892,.7,.4),this.pixelFace(t,[[e+15,n+28],[275,196],[289,194],[287,204],[273,209],[e+14,n+35]],le,34,.28,.3),this.pixelFace(t,[[e+29,n+17],[e+33,n+12],[276,185],[276,192],[270,195]],le,507,.73,.65),this.pixelFace(t,[[e+26,n+27],[e+30,n+22],[273,195],[273,201],[269,203]],le,508,.45,.5);for(let r=0;r<4;r++){const a=248+r*5,l=185+r*2;t.fillStyle="#152228",t.fillRect(a,l,4,6),t.fillStyle="#77958c",t.fillRect(a,l,3,1),t.fillStyle="#435954",t.fillRect(a,l+4,3,1)}this.metalBolt(t,277,194),this.metalBolt(t,265,188),t.fillStyle="#1d3029",t.fillRect(259,190,10,4);for(let r=0;r<3;r++)t.fillStyle="#9acc83",t.fillRect(260+r*3,191,2,1);t.fillStyle="#4b5044",t.fillRect(298,194,4,1),t.fillRect(304,197,5,1),t.fillStyle="#111c1f",t.fillRect(289,198,4,2),t.fillRect(307,203,5,2)}cacheMechanicalParts(){const t=document.createElement("canvas");t.width=56,t.height=52;const e=t.getContext("2d");this.pixelFace(e,[[4,13],[12,4],[31,4],[47,18],[47,37],[34,47],[15,44],[4,31]],ze,544,.37,.42),this.pixelFace(e,[[8,14],[14,7],[29,7],[38,15],[34,28],[14,25]],le,122,.64,.47);for(let c=0;c<4;c++){const h=8+c*8,u=20+c*2;this.pixelFace(e,[[h,u],[h+4,u-3],[h+10,u],[h+11,u+9],[h+7,u+14],[h+1,u+12],[h-1,u+5]],le,719+c,.59,.57),e.fillStyle="#152225",e.fillRect(h+2,u+6,7,2),e.fillStyle="#a6b199",e.fillRect(h+2,u+5,5,1),e.fillStyle="#405047",e.fillRect(h+2,u+10,5,1),e.fillStyle="#c9c6a4",e.fillRect(h+3,u,3,1),e.fillStyle="#263c3d",e.fillRect(h+7,u+3,2,2)}this.pixelFace(e,[[37,12],[43,11],[51,20],[47,30],[39,27],[35,18]],ze,905,.67,.5),this.metalBolt(e,37,37),this.metalBolt(e,15,14),e.fillStyle="#c09957",e.fillRect(41,33,2,5),e.fillStyle="#e4c883",e.fillRect(41,33,1,2),this.crispSprite(e,56,52),this.parts.set("hand",t);const n=document.createElement("canvas");n.width=320,n.height=200;const i=n.getContext("2d");this.pixelFace(i,[[122,207],[137,189],[155,166],[171,159],[189,169],[193,181],[172,190],[149,212]],ze,902,.5,.5);for(let c=0;c<4;c++){const h=164+c*5,u=162+c*3;this.pixelFace(i,[[h,u],[h+7,u],[h+12,u+5],[h+10,u+13],[h+4,u+15],[h-2,u+8]],le,177+c,.63,.65),i.fillStyle="#1a2526",i.fillRect(h+2,u+7,7,2),i.fillStyle="#acb59c",i.fillRect(h+2,u+6,6,1)}this.metalBolt(i,151,187),this.crispSprite(i,320,200),this.parts.set("pump",n);const r=document.createElement("canvas");r.width=320,r.height=200;const a=r.getContext("2d");this.paintArmSprite(a,247,186),this.hand(a,247,186),this.crispSprite(a,320,200),this.parts.set("mount-arm",r);const l=document.createElement("canvas");l.width=l.height=36;const o=l.getContext("2d");this.pixelFace(o,[[4,10],[14,3],[27,6],[34,14],[32,27],[21,33],[8,29],[2,19]],le,309,.59,.85),this.pixelFace(o,[[4,10],[14,3],[27,6],[32,11],[22,13],[11,9]],le,310,.83,.26),this.crispSprite(o,36,36),this.parts.set("reload-cylinder",l)}paintWeapon(t,e){if(e==="fist"){this.paintArmSprite(t,200,174),this.hand(t,200,165);return}const n=e==="revolver"?[224,179]:e==="shotgun"?[243,189]:e==="plasma"?[236,185]:[252,187];if(this.paintArmSprite(t,n[0],n[1]),e==="revolver"){this.pixelFace(t,[[151,128],[157,122],[167,123],[190,143],[184,157],[174,153]],le,729,.56,.7),this.pixelFace(t,[[155,124],[161,121],[168,124],[190,143],[184,147],[173,140]],le,623,.7,.32),this.pixelFace(t,[[153,133],[159,135],[182,158],[185,167],[177,163],[164,148]],le,122,.22,.34),this.pixelFace(t,[[170,148],[177,138],[192,139],[214,153],[220,167],[212,179],[197,181],[180,174],[170,159]],le,211,.47,.76),this.pixelFace(t,[[176,140],[186,137],[195,141],[214,155],[205,159],[181,148]],le,599,.72,.2);for(let i=0;i<5;i++){const r=177+i*7,a=148+i*2;this.pixelFace(t,[[r,a],[r+4,a-1],[r+8,a+3],[r+8,a+16],[r+4,a+20],[r+1,a+16]],le,778+i,.48,.75),t.fillStyle="#17221f",t.fillRect(r+6,a+5,2,10),t.fillStyle="#d3c9a0",t.fillRect(r+2,a+1,2,1)}this.pixelFace(t,[[207,155],[223,159],[238,180],[237,198],[224,203],[207,184]],le,975,.3,.55),this.pixelFace(t,[[219,177],[230,179],[244,200],[232,209],[221,200],[215,184]],["#171715","#2c261e","#433825","#635337","#89734b","#b39560"],186,.56,.57),this.pixelFace(t,[[151,126],[154,122],[162,121],[168,125],[166,130],[158,130],[152,128]],le,64,.68,.38),t.fillStyle="#a8b2aa",t.fillRect(154,123,5,1),t.fillStyle="#3a474b",t.fillRect(155,129,7,1),t.fillStyle="#364340",t.fillRect(157,118,5,4),t.fillStyle="#b4d397",t.fillRect(158,118,3,1),t.fillStyle="#1a2726",t.fillRect(217,150,5,5),t.fillStyle="#adb29a",t.fillRect(217,150,4,1),this.metalBolt(t,220,168),this.metalBolt(t,220,190),this.hand(t,228,184)}else if(e==="shotgun"){this.pixelFace(t,[[146,132],[153,121],[168,122],[210,162],[202,179],[183,165],[160,146]],ze,677,.41,.73),this.pixelFace(t,[[151,124],[160,121],[169,126],[211,163],[203,169],[176,142]],le,79,.66,.37),this.pixelFace(t,[[151,136],[158,137],[198,175],[197,184],[183,174]],ze,833,.22,.4),this.pixelFace(t,[[179,145],[192,146],[222,174],[213,187],[200,186],[173,161]],["#1b1c17","#343025","#514731","#736345","#998259","#baa06c"],277,.55,.66);for(let i=0;i<7;i++){const r=178+i*4,a=148+i*3;t.fillStyle="#302c20",t.fillRect(r,a,3,10),t.fillStyle="#a48b5d",t.fillRect(r+1,a,1,8)}this.pixelFace(t,[[194,152],[213,151],[240,173],[265,201],[240,215],[216,188],[198,176]],ze,988,.38,.65),this.pixelFace(t,[[198,153],[211,151],[241,175],[239,185],[222,176]],le,566,.65,.35),this.pixelFace(t,[[210,172],[224,173],[249,196],[245,214],[230,212],[211,191]],ze,975,.22,.5),this.pixelFace(t,[[147,129],[151,123],[160,122],[167,126],[168,130],[160,132],[152,131]],ze,226,.64,.42),t.fillStyle="#bac5b7",t.fillRect(151,124,5,1),t.fillRect(160,126,4,1),t.fillStyle="#39494e",t.fillRect(152,131,9,1),t.fillStyle="#25363c",t.fillRect(157,119,3,4),t.fillStyle="#c1c9af",t.fillRect(157,119,2,1);for(let i=0;i<8;i++)t.fillStyle="#1b2829",t.fillRect(168+i*4,134+i*3,3,4);this.poly(t,[[214,162],[220,162],[232,174],[229,179],[218,170]],"#101c20",""),t.fillStyle="#a2aea0",t.fillRect(217,163,3,1),this.metalBolt(t,225,170),this.metalBolt(t,241,187),this.hand(t,242,190)}else if(e==="plasma"){this.pixelFace(t,[[142,128],[151,116],[170,119],[191,140],[186,155],[167,157],[148,140]],ze,922,.43,.6),this.pixelFace(t,[[148,119],[154,114],[168,119],[191,140],[181,145],[168,136]],le,110,.65,.37),this.pixelFace(t,[[163,139],[188,135],[219,150],[254,185],[251,210],[229,215],[196,184],[173,165]],ze,436,.36,.72),this.pixelFace(t,[[177,139],[190,136],[217,151],[225,163],[213,167],[190,155]],le,788,.6,.43),this.pixelFace(t,[[210,157],[227,154],[253,179],[261,201],[247,213],[229,198],[217,183]],ze,651,.27,.72),this.poly(t,[[174,151],[185,144],[219,175],[212,189],[197,180]],"#13251e","");for(let i=0;i<7;i++){const r=178+i*4,a=148+i*4;this.pixelFace(t,[[r,a],[r+3,a-1],[r+10,a+5],[r+7,a+11],[r+2,a+9],[r-3,a+4]],["#2e2619","#514224","#7c6336","#a68b4d","#d3b974","#f2d895"],202+i,.57,.56),t.fillStyle="#58b875",t.fillRect(r+2,a+4,3,2),t.fillStyle="#b8e699",t.fillRect(r+2,a+4,1,1)}this.poly(t,[[144,123],[151,116],[163,117],[173,123],[175,134],[166,140],[153,140],[143,133]],"#485f57",""),this.poly(t,[[149,126],[154,121],[163,121],[170,127],[166,134],[156,135],[149,131]],"#142b24",""),t.fillStyle="#429b65",t.fillRect(153,124,11,8),t.fillStyle="#95e3a4",t.fillRect(156,125,6,4),t.fillStyle="#d6f3b8",t.fillRect(158,126,3,2);for(const[i,r]of[[145,126],[152,117],[168,121],[169,133]])this.metalBolt(t,i,r);this.poly(t,[[217,157],[224,157],[235,169],[233,179],[225,177]],"#16382b",""),t.fillStyle="#76d58e",t.fillRect(219,161,4,2),t.fillRect(225,168,3,3),this.metalBolt(t,242,181),this.metalBolt(t,226,194),this.hand(t,240,190)}else{this.pixelFace(t,[[142,128],[147,116],[163,112],[177,122],[194,145],[189,161],[171,159],[151,143]],ze,833,.35,.76),this.pixelFace(t,[[149,116],[162,112],[174,121],[195,145],[185,149],[162,129]],le,945,.6,.42),this.pixelFace(t,[[162,138],[173,132],[211,165],[208,178],[194,176]],le,588,.4,.78),this.pixelFace(t,[[179,148],[197,138],[222,148],[252,177],[278,202],[258,218],[233,207],[193,181],[181,165]],ze,175,.33,.6),this.pixelFace(t,[[187,147],[198,142],[224,153],[246,171],[244,180],[222,171]],le,875,.59,.38),this.pixelFace(t,[[192,168],[218,170],[245,192],[250,214],[234,215],[202,188]],ze,664,.2,.47),this.pixelFace(t,[[140,124],[145,115],[158,112],[170,117],[178,128],[174,138],[160,146],[146,139]],ze,78,.31,.5);for(const[i,r]of[[147,120],[157,117],[150,131],[162,129]])this.pixelFace(t,[[i,r],[i+3,r-3],[i+8,r+2],[i+22,r+21],[i+21,r+26],[i+16,r+22]],le,902+i,.43,.46),t.fillStyle="#bac5b5",t.fillRect(i+1,r-1,3,1),t.fillStyle="#31464b",t.fillRect(i+3,r+4,2,2);t.fillStyle="#25353c",t.fillRect(157,109,4,6),t.fillStyle="#c4ccaf",t.fillRect(158,109,2,1);for(let i=0;i<7;i++){const r=190+i*5,a=161+i*3;t.fillStyle="#1c2828",t.fillRect(r,a,4,8),t.fillStyle="#91a18e",t.fillRect(r,a-1,4,1)}this.poly(t,[[218,151],[227,151],[237,161],[234,169],[223,164]],"#182b2b",""),this.pixelFace(t,[[223,144],[231,146],[237,154],[237,159],[231,157],[226,152]],le,387,.58,.46),this.pixelFace(t,[[238,169],[259,169],[294,184],[292,207],[255,194],[238,181]],le,382,.24,.25);for(let i=0;i<9;i++){const r=243+i*6,a=172+i*2;this.pixelFace(t,[[r,a],[r+3,a-1],[r+6,a+4],[r+6,a+14],[r+3,a+17],[r,a+14]],["#423719","#68552a","#967a3a","#bfa05a","#dfc481","#f3de9c"],376+i,.61,.65),t.fillStyle="#534e34",t.fillRect(r,a+10,6,2),t.fillStyle="#baaa70",t.fillRect(r,a+13,4,1)}this.metalBolt(t,240,178),this.metalBolt(t,248,200),this.hand(t,253,193)}}paintAmmoGauge(t,e,n){if(e==="fist")return;if(e==="revolver"){for(let o=0;o<6;o++)t.fillStyle=o<n?"#dfc181":"#243c46",t.fillRect(181+o*2,144+o*.3,1,.5);return}const i=e==="plasma",r=e==="machinegun",a=i?216:r?220:204,l=i?159:r?173:164;t.save(),t.translate(a,l),t.rotate(i?.72:r?.7:.78),t.fillStyle="#050f14",t.fillRect(-.5,-.5,8,4),t.fillStyle="#4c7070",t.fillRect(-.5,-.5,8,.5),this.etch(t,String(Math.min(99,n)).padStart(2,"0"),.5,.25,n>0?i?"#94ffc5":"#d6d1a1":"#ff7851"),t.fillStyle=n>0?"#53b693":"#933b28",t.fillRect(5.5,.5,.5,2),t.restore()}paintPumpHand(t,e){t.drawImage(this.parts.get("pump"),Math.round(e*.8),Math.round(e),320,200)}paintPlasmaPulse(t,e,n){if(n)return;t.fillStyle=Math.sin(e*9)>0?"#c4ffe1":"#49dc95",t.fillRect(215,158,4,2),t.fillRect(221,165,2,2),t.fillRect(158,126,3,3);const i=1-Math.min(1,this.shotAge/.32);for(let r=0;r<5;r++){const a=i>.05||Math.sin(e*7-r*.9)>.4;this.line(t,[185+r*4,149+r*4],[181+r*4,153+r*4],a?"#b0ffbd":"#2fbc79",1),i>.2&&(t.fillStyle="#d6ffd2",t.fillRect(182+r*4,151+r*4,.5,1),r%2===this.shotSerial%2&&this.line(t,[184+r*4,151+r*4],[188+r*4,151+r*4],"#68eaa7",.5))}}paintReload(t,e,n){const i=Math.sin(n*Math.PI);if(e==="revolver"){const r=185-Math.round(i*12),a=160+Math.round(i*10);t.drawImage(this.parts.get("reload-cylinder"),r-18,a-17,36,36);for(let l=0;l<6;l++){const o=l*Math.PI/3+n*5,c=Math.round(r+Math.cos(o)*9),h=Math.round(a+Math.sin(o)*9);t.fillStyle=n>.45?"#c2a254":"#0b151a",t.fillRect(c-2,h-2,4,4),t.fillStyle=n>.45?"#fae5a2":"#5f777e",t.fillRect(c-1.5,h-2,2,.5),n>.45&&(t.fillStyle="#615137",t.fillRect(c-.5,h-.5,1,1))}this.screw(t,r,a,!0),n>.35&&n<.7&&this.hand(t,147,190)}else if(e==="shotgun")this.hand(t,175+Math.round(i*9),190),t.fillStyle="#932621",t.fillRect(179,176,5,10),t.fillStyle="#d0aa62",t.fillRect(179,175,5,2),t.fillStyle="#edc99a",t.fillRect(179.5,175,4,.5),t.fillStyle="#ef6352",t.fillRect(179.5,177,.5,8),t.fillStyle="#541c21",t.fillRect(183,178,.5,7),this.etch(t,"12",180,179,"#f3d4b2");else if(e==="plasma"){const a=176+Math.round(i*21);this.poly(t,[[188,a],[199,a-4],[211,a+11],[201,a+19],[192,a+9]],"#294447"),this.line(t,[193,a+3],[202,a+14],"#72ffb0",4);for(let l=0;l<5;l++)this.line(t,[194+l*2,a+3+l*2],[191+l*2,a+5+l*2],"#173c3a",.5);this.line(t,[190,a+.5],[198,a-2.5],"#c4d9be",.5),this.screw(t,201,a+5,!0),this.hand(t,168,a+15)}else e==="machinegun"&&(this.hand(t,259-Math.round(i*16),178+Math.round(i*11)),t.fillStyle="#c7ac68",t.fillRect(242,167,14,3))}cacheFiringEffects(){for(const t of["revolver","shotgun","plasma","machinegun"]){const e=[];for(let n=0;n<2;n++)for(let i=0;i<4;i++){const r=document.createElement("canvas");r.width=128,r.height=128;const a=r.getContext("2d");a.setTransform(2,0,0,2,0,0);const l=t==="plasma",o=(t==="shotgun"?26:t==="machinegun"?20:l?22:17)*(1-i*.12),c=32,h=42,u=n?1:-1;for(let f=0;f<7;f++){const p=-Math.PI+f/6*Math.PI,m=o*(.62+(f*5+n*3)%7*.065),x=Math.round(Math.cos(p)*m),g=Math.round(Math.sin(p)*m);this.poly(a,[[c-3,h-1],[c+x*.5-2,h+g*.5-2],[c+x-1,h+g],[c+x+3,h+g+2],[c+x*.5+3,h+g*.5+3],[c+3,h+1]],l?"#126948":i>1?"#873925":"#a84925","")}if(this.poly(a,[[c-4,h],[c-15,h-5],[c-10,h-8],[c-12,h-15],[c-6,h-12],[c+u*4,h-o],[c+7,h-12],[c+13,h-15],[c+11,h-7],[c+20,h-6],[c+12,h-1],[c+4,h+4]],l?"#27c881":"#e6742b",""),this.poly(a,[[c-4,h],[c-8,h-6],[c-3,h-8],[c+u*3,h-16],[c+6,h-8],[c+12,h-6],[c+5,h+3]],l?"#8affa9":"#ffd466",""),a.fillStyle=l?"#e6ffdd":"#fff5bc",a.fillRect(c-2,h-5,6,7),a.fillRect(c,h-9,3,5),a.fillRect(c-4,h-3,2,3),l){const f=[[[c-4,h-9],[c-14,h-17],[c-11,h-21],[c-19,h-25]],[[c+4,h-7],[c+16,h-14],[c+12,h-18],[c+20,h-24]],[[c,h-12],[c+u*5,h-24],[c-u*1,h-27]]];for(const p of f)for(let m=0;m<p.length-1;m++)this.line(a,p[m],p[m+1],i%2?"#72efb3":"#bef6bd",.5);a.fillStyle="#72e5ac";for(let p=0;p<7;p++)a.fillRect(c-23+(p*11+n*5)%43,h-10-p*7%22,.5,.5)}else for(let f=0;f<15;f++)a.fillStyle=f%3?"#da8c43":"#ffd996",a.fillRect(c-25+(f*13+n*7)%49,h-4-f*11%31,f%4===0?1.5:.5,.5);e.push(r)}this.flares.set(t,e)}for(let t=0;t<4;t++){const e=document.createElement("canvas");e.width=48,e.height=48;const n=e.getContext("2d");n.setTransform(2,0,0,2,0,0);const i=["#495457","#66716d","#829084"];for(let r=0;r<22;r++){const a=3+(r*7+t*3)%15,l=3+(r*11+t*5)%15;n.fillStyle=i[r%3],n.fillRect(a,l,2+r%3,2+(r+t)%3)}this.smokeSprites.push(e)}}spawnShotEffects(t){const e=Dl[t];if(!e)return;const n=t==="shotgun"?4:t==="plasma"?2:3;for(let i=0;i<n;i++)this.smoke.push({age:0,life:.35+i*.08,x:e[0],y:e[1]-3,vx:-10+(this.shotSerial*7+i*13)%21,vy:-22-i*8,size:t==="shotgun"?7+i:5+i,variant:(this.shotSerial+i)%4,green:t==="plasma"});this.smoke.length>28&&this.smoke.splice(0,this.smoke.length-28),t==="shotgun"&&this.spawnCasing(t,217,174,88,-73,this.shotSerial),t==="machinegun"&&this.spawnCasing(t,223,165,94,-62,this.shotSerial)}spawnCasing(t,e,n,i,r,a){this.casings.push({age:0,weapon:t,x:e,y:n,vx:i,vy:r,spin:a}),this.casings.length>14&&this.casings.splice(0,this.casings.length-14)}updateParticles(t){for(let e=this.smoke.length-1;e>=0;e--){const n=this.smoke[e];n.age+=t,n.age>n.life&&this.smoke.splice(e,1)}for(let e=this.casings.length-1;e>=0;e--){const n=this.casings[e];n.age+=t,n.age>.55&&this.casings.splice(e,1)}}paintSmoke(t){for(const e of this.smoke){const n=e.age/e.life,i=Math.round(e.size*(.65+n*.75)),r=Math.round(e.x+e.vx*e.age),a=Math.round(e.y+e.vy*e.age);t.save(),t.globalAlpha=(1-n)*(e.green?.22:.36),t.drawImage(this.smokeSprites[e.variant],r-i/2,a-i/2,i,i),t.restore()}}paintCasings(t){for(const e of this.casings){const n=e.weapon==="shotgun"?.14:e.weapon==="machinegun"?.035:0;if(e.age<n)continue;const i=e.age-n;t.save(),t.translate(Math.round(e.x+e.vx*i),Math.round(e.y+e.vy*i+175*i*i)),t.rotate((Math.floor(i*18)+e.spin)%4*Math.PI/2);const r=e.weapon==="shotgun";t.fillStyle="#111711",t.fillRect(-1.5,-1.5,r?8:5,3.5),t.fillStyle=r?"#a6312c":"#b2964f",t.fillRect(-1,-1,r?6:4,2.5),t.fillStyle=r?"#ee7861":"#e6cb78",t.fillRect(-1,-1,r?5:3,.5),t.fillStyle="#e7ce82",t.fillRect(r?4:2,-1,1.5,2.5),t.fillStyle="#675435",t.fillRect(r?5:3,-.5,.5,1.5),t.restore()}}paintMechanism(t,e,n){if(n)return;const i=Math.max(0,1-this.shotAge/.16);if(e==="revolver"&&i>0){const a=Math.round(i*4);this.poly(t,[[216,155],[217,149+a],[221,148+a],[225,152+a],[225,157]],"#37474b"),this.line(t,[217,150+a],[221,149+a],"#c8d1b8",.5),t.fillStyle="#141f27",t.fillRect(217,156,6,1.5)}else if(e==="machinegun"){const a=Math.round(i*3);t.fillStyle="#07151b",t.fillRect(218,151,12,8),this.poly(t,[[218+a,153+a],[222+a,152+a],[227+a,157+a],[225+a,160+a],[220+a,156+a]],"#7f9592"),this.line(t,[219+a,153+a],[222+a,152+a],"#dbe1bd",.5),t.fillStyle=i>.4?"#d8c074":"#364640",t.fillRect(221,154,1,2)}if(this.flash<=0)return;const r=e==="plasma"?"#a5ffd2":"#ffe0a2";t.save(),t.globalAlpha=.55,this.line(t,[165,131],[179,142],r,1),this.line(t,[182,146],[193,148],r,.5),this.line(t,[220,176],[229,183],r,.5),t.fillStyle=r,t.fillRect(223,182,2,.5),t.fillRect(231,186,1,.5),t.restore()}paintFlash(t,e){const n=this.flares.get(e),i=Dl[e];if(!n||!i)return;const r=Math.min(3,Math.floor(this.shotAge*45));t.drawImage(n[this.shotSerial%2*4+r],i[0]-32,i[1]-42,64,64)}paintMount(t,e,n,i=0){const r=Math.round(Math.sin(e*9)*n*2-i*11);t.save(),t.translate(0,r),this.poly(t,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(t,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(t,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),this.machining(t,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);for(let a=0;a<7;a++){const l=147+a*3,o=172-a*2.1;this.poly(t,[[l,o],[l+2.5,o-1],[l+3,o+1],[l+1.5,o+2]],a%2?"#637558":"#283f34",""),this.line(t,[l,o],[l+2,o-.5],"#a0a580",.5)}if(this.line(t,[162,145],[173,145],"#8a966d",.5),this.line(t,[170,149.5],[177,151],"#1d342e",.5),t.fillStyle="#132922",t.fillRect(177,150,1.5,1),this.line(t,[157,149],[163,153],"#192c26",.5),this.line(t,[156.5,149.5],[162.5,153.5],"#91a371",.5),i>.25){this.poly(t,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let a=0;a<5;a++)t.fillStyle="#b9bf8c",t.fillRect(163+a*3,155,2,3)}else this.line(t,[157,155],[178,155],"#111c19",2);t.fillStyle="#dfb961",t.fillRect(171,146,4,2),t.fillStyle="#081410",t.fillRect(174,146,1,2),t.fillStyle="#ffdc89",t.fillRect(171,146,2,.5);for(let a=0;a<5;a++)this.poly(t,[[135+a*3,183-a*6],[130+a*4,179-a*7],[139+a*3,177-a*6]],"#809178");this.line(t,[150,162],[119,200],"#74664c",2),this.line(t,[174,163],[198,197],"#74664c",2),this.line(t,[151,162],[120,200],"#b5a483",.5),this.line(t,[174,162],[198,195],"#c2b298",.5),this.inset(t,[[150,164],[153,164],[150,168],[147,168]],"#ad9f6b"),this.screw(t,150,166,!0),t.restore()}}const Ac=24e3,wc=112,Rc=16,Ul=Rc*4*60/wc,Pe=Math.PI*2,Um=s=>440*2**((s-69)/12);function Cc(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/2147483648-1)}function ir(s,t=!1,e=Ac){return{sampleRate:e,channels:Array.from({length:t?2:1},()=>new Float32Array(Math.ceil(s*e)))}}function Nm(s,t=Ac){const e={revolver:.82,shotgun:1.1,plasma:.72,machinegun:.43}[s],n=ir(e,!0,t),i=new Float32Array(n.channels[0].length),r=Cc({revolver:6721,shotgun:1297,plasma:9919,machinegun:4049}[s]);let a=0,l=0,o=0,c=0;const h=s==="shotgun",u=s==="plasma",f=s==="machinegun";for(let p=0;p<i.length;p++){const m=p/t,x=r();a+=(x-a)*.085,l+=(x-l)*.43;const g=x-l,d=Math.min(1,m/.0012);let S;if(u)o+=Pe*(72+970*Math.exp(-m*20))/t,c+=Pe*(114+1430*Math.exp(-m*17))/t,S=(Math.sin(o+Math.sin(c)*1.5)*.58+Math.sin(c)*.24)*Math.exp(-m*10),S+=(g*.62+l*.4)*Math.exp(-m*24),S+=Math.sin(Pe*49*m)*.45*Math.exp(-m*11),S+=Math.sin(Pe*1880*m)*Math.exp(-m*15)*.11;else{const E=h?185:f?154:210,_=h?8.5:f?24:13;o+=Pe*(43+E*Math.exp(-m*37))/t,S=Math.sin(o)*(h?1.03:.77)*Math.exp(-m*_),S+=g*1.55*Math.exp(-m*(h?100:155)),S+=l*(h?1.9:1.12)*Math.exp(-m*(h?21:f?55:31)),S+=a*(h?2.25:1.55)*Math.exp(-m*(h?9:16));const b=h?.38:f?.047:.12;if(m>b){const C=m-b;S+=(g*.24+Math.sin(Pe*2230*C)*.13+Math.sin(Pe*3180*C)*.07)*Math.exp(-C*83)}h&&m>.56&&(S+=(l*.5+Math.sin(Pe*680*m)*.1)*Math.exp(-(m-.56)*45));const T=f?.112:h?.66:.19;if(m>T){const C=m-T;S+=(Math.sin(Pe*2760*C)+Math.sin(Pe*4130*C)*.35)*Math.exp(-C*58)*.085}}i[p]=Math.tanh(S*1.3)*d*Math.min(1,(e-m)/.035)}for(let p=0;p<2;p++){let m=0;const x=[.043+p*.009,.097-p*.012,.171+p*.014];for(let g=0;g<i.length;g++){let d=0;for(let S=0;S<x.length;S++){const E=g-Math.round(x[S]*t);E>=0&&(d+=i[E]*[.21,.12,.065][S])}m+=(d-m)*.27,n.channels[p][g]=Math.tanh((i[g]+m)*.94)*.97}}return n}function is(s){const t={kick:.44,snare:.28,hat:.07,open:.29,metal:.37}[s],e=ir(t),n=Cc(s.charCodeAt(0)*1931);let i=0,r=0;for(let a=0;a<e.channels[0].length;a++){const l=a/e.sampleRate,o=n();i+=(o-i)*.22;let c=0;s==="kick"?(r+=Pe*(43+113*Math.exp(-l*48))/e.sampleRate,c=Math.sin(r)*Math.exp(-l*12)+(o-i)*Math.exp(-l*160)*.48):s==="snare"?(c=(o-i*.7)*Math.exp(-l*21)*.65+Math.sin(Pe*181*l)*Math.exp(-l*33)*.3,c+=(Math.sin(Pe*331*l)+Math.sin(Pe*418*l)*.4)*Math.exp(-l*40)*.14):s==="metal"?(c=(Math.sin(Pe*765*l)*Math.sin(Pe*1083*l)+Math.sin(Pe*1743*l)*.4)*Math.exp(-l*17)*.4,c+=(o-i)*Math.exp(-l*32)*.25):c=(o-i)*Math.exp(-l*(s==="hat"?67:18))*.52,e.channels[0][a]=Math.tanh(c*1.8)*Math.min(1,l/8e-4)}return e}function bn(s,t,e,n,i=0){const r=Math.round(e*s.sampleRate),a=s.channels[0].length,l=Math.sqrt((1-i)/2),o=Math.sqrt((1+i)/2);for(let c=0;c<t.channels[0].length;c++){const h=(r+c)%a;s.channels[0][h]+=t.channels[0][c]*n*l,s.channels[1][h]+=t.channels[t.channels.length-1][c]*n*o}}function Di(s,t,e,n,i,r,a=0){const l=s.sampleRate,o=Um(n),c=s.channels[0].length,h=Math.round(t*l),u=Math.ceil(e*l),f=Math.sqrt((1-a)/2),p=Math.sqrt((1+a)/2);for(let m=0;m<u;m++){const x=m/l,g=Pe*o*x,d=x/e;let S,E;r==="pad"?(S=Math.sin(g)*.52+Math.sin(g*1.004+Math.sin(x*1.3)*.12)*.32+Math.sin(g*1.997)*.13,E=Math.min(1,x/.29)*Math.min(1,(e-x)/.48)):r==="lead"?(S=Math.sin(g+Math.sin(g*2)*.62)*.63+Math.sin(g*3.002)*.12+Math.sin(g*.999)*.21,E=Math.min(1,x/.016)*Math.exp(-d*3.4)*Math.min(1,(e-x)/.055)):r==="riff"?(S=Math.tanh((Math.sin(g)+Math.sin(g*2)*.48+Math.sin(g*3)*.33+Math.sin(g*4)*.19)*3.8),E=Math.min(1,x/.005)*Math.exp(-d*4.5)*Math.min(1,(e-x)/.018)):(S=Math.tanh((Math.sin(g)*.83+Math.sin(g*2)*.32+Math.sin(g*3)*.17)*1.9),E=Math.min(1,x/.006)*Math.exp(-d*2.1)*Math.min(1,(e-x)/.022));const _=(h+m)%c,b=S*E*i;s.channels[0][_]+=b*f,s.channels[1][_]+=b*p}}function Nl(s){for(const t of s.channels){let e=0,n=0;for(let r=0;r<t.length;r++){const a=t[r],l=a-e+n*.995;e=a,n=l,t[r]=Math.tanh(l*1.75)*.75}const i=Math.round(s.sampleRate*.003);for(let r=0;r<i;r++){const a=t.length-i+r,l=r/(i-1);t[a]=t[a]*(1-l)+t[0]*l}}}function Fm(){const s=ir(Ul,!0),t=ir(Ul,!0),e=60/wc,n=e*4,i={kick:is("kick"),snare:is("snare"),hat:is("hat"),open:is("open"),metal:is("metal")},r=[[50,53,57,60,64],[46,50,53,57,60],[41,48,53,57,60],[48,53,55,58,62]],a=[38,34,29,36],l=[62,65,69,67,64,65,62,60];for(let o=0;o<Rc;o++){const c=Math.floor(o/2)%4,h=a[c],u=o*n,f=o>=8;o%2===0&&r[c].forEach((m,x)=>Di(s,u,n*2+.18,m,.053,"pad",(x-2)*.42));for(const m of[0,6,8,11,...o%4===3?[14]:[]])bn(s,i.kick,u+m*e/4,.42);for(const m of[4,12])bn(s,i.snare,u+m*e/4,.31,.06);o%2===1&&bn(s,i.snare,u+15*e/4,.095,-.2);for(let m=0;m<16;m+=2)bn(s,i.hat,u+m*e/4,m%4===0?.09:.14,m%4===0?-.27:.3);bn(s,i.open,u+10*e/4,.075,.4),o%2===1&&bn(s,i.metal,u+7*e/4,.12,-.45),[0,3,6,8,10,13,15].forEach((m,x)=>Di(s,u+m*e/4,e*(m===0?.7:.38),h+(x===3||x===5?12:x===6&&o%2===1?7:0),.19,"bass")),(o%2===0||f)&&[.5,1.25,2.5,3.25].forEach((x,g)=>{const d=l[(o+g)%l.length]+(c===1?-2:c===3?-5:0);Di(s,u+x*e,e*1.5,d,.125,"lead",-.34),Di(s,u+(x+.5)*e,e*1.3,d,.042,"lead",.67)});for(const m of[0,2,6,8,10,14])bn(t,i.kick,u+m*e/4,.23);for(const m of[4,12,...o%4===3?[13,14,15]:[]])bn(t,i.snare,u+m*e/4,.22,-.1);for(let m=1;m<16;m+=2)bn(t,i.hat,u+m*e/4,.07,m%4===1?-.6:.6);for(const m of[0,2,3,6,8,10,11,14]){const x=h+12+(m===6?7:m===14&&o%4===3?10:0);Di(t,u+m*e/4,e*.38,x,.16,"riff",-.42),Di(t,u+m*e/4+.018,e*.38,x+12,.065,"riff",.42)}o%4===3&&bn(t,i.metal,u+3.5*e,.21,.3)}return Nl(s),Nl(t),{district:s,combat:t}}class Om{context;master;fx;music;musicDuck;districtGain;combatGain;noise;district;combat;weapons=new Map;musicSources=[];musicStarted=0;musicOffset=0;volume=.7;musicVolume=.75;effectsVolume=.95;unlocked=!1;lastStep=0;lastX;lastZ;distance=0;lastEnemy=-10;danger=0;unlock(){try{if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.context=new t,n=e.createDynamicsCompressor();n.threshold.value=-7,n.knee.value=8,n.ratio.value=4,n.attack.value=.002,n.release.value=.16,this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(n),n.connect(e.destination),this.fx=e.createGain(),this.fx.gain.value=this.effectsVolume,this.fx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVolume,this.music.connect(this.master),this.musicDuck=e.createGain(),this.musicDuck.connect(this.music),this.districtGain=e.createGain(),this.districtGain.gain.value=.92,this.districtGain.connect(this.musicDuck),this.combatGain=e.createGain(),this.combatGain.gain.value=0,this.combatGain.connect(this.musicDuck);const i=e.sampleRate*2;this.noise=e.createBuffer(1,i,e.sampleRate);const r=this.noise.getChannelData(0);let a=1793;for(let o=0;o<i;o++)a=Math.imul(a,1664525)+1013904223>>>0,r[o]=a/2147483648-1;for(const o of["revolver","shotgun","plasma","machinegun"])this.weapons.set(o,this.buffer(Nm(o)));const l=Fm();this.district=this.buffer(l.district),this.combat=this.buffer(l.combat)}this.context.resume().then(()=>{this.unlocked=!0}).catch(()=>{}),this.unlocked=this.context.state==="running"}catch{}}setVolume(t){this.volume=this.clamp(t),this.setGain(this.master,this.volume)}setMusicVolume(t){this.musicVolume=this.clamp(t),this.setGain(this.music,this.musicVolume)}setEffectsVolume(t){this.effectsVolume=this.clamp(t),this.setGain(this.fx,this.effectsVolume)}clamp(t){return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}setGain(t,e){if(!this.context||!t)return;const n=this.context.currentTime;t.gain.cancelScheduledValues(n),e===0?t.gain.setValueAtTime(0,n):t.gain.setTargetAtTime(e,n,.04)}suspend(){const t=this.context;if(t&&this.musicSources.length&&this.district){this.musicOffset=(this.musicOffset+Math.max(0,t.currentTime-this.musicStarted))%this.district.duration,this.musicDuck?.gain.cancelScheduledValues(t.currentTime),this.musicDuck?.gain.setTargetAtTime(0,t.currentTime,.035);for(const e of this.musicSources)e.stop(t.currentTime+.16);this.musicSources=[]}this.lastX=this.lastZ=void 0,this.distance=0}handle(t){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const e of t)switch(e.type){case"shot":this.shot(e.weapon||"revolver");break;case"reload":this.reload(e.weapon||"revolver");break;case"hurt":this.burst(.23,.24,850),this.tone(97,.21,.21,"sawtooth",45);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.55,.14,740),this.tone(89,.43,.14,"sawtooth",58),this.burst(.085,.19,2700,.42);break;case"explosion":this.burst(.85,.72,2900),this.burst(.18,.48,6700),this.tone(128,.65,.48,"triangle",26),this.tone(49,.9,.28,"sine",24),this.burst(.55,.2,1800,.12);break;case"shatter":this.burst(.18,.35,8800),this.burst(.48,.17,5200,.05);for(let n=0;n<5;n++)this.tone(2140+n*479,.06,.04,"triangle",1330+n*313,.04+n*.043);break;case"enemy":{const n=this.context.currentTime;if(n-this.lastEnemy>.55)if(this.lastEnemy=n,e.message?.includes("charging shot"))this.tone(260,.19,.1,"sawtooth",790),this.burst(.1,.24,4600,.2),this.tone(145,.16,.17,"triangle",45,.2);else{const i=e.message?.startsWith("Strider");this.tone(i?86:143,.34,.2,"sawtooth",i?35:56),this.tone(i?134:218,.27,.1,"triangle",63),this.burst(.32,.2,i?630:1100)}break}case"kill":this.burst(.26,.19,620),this.tone(118,.27,.13,"sawtooth",34);break;case"mount":this.tone(110,.22,.16,"sawtooth",210),this.tone(82,.18,.17,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(t,e){const n=this.context;if(!n||!this.unlocked||n.state!=="running"||t.status!=="playing")return;this.musicSources.length||this.startMusic();const i=t.player,r=t.enemies.some(l=>l.alive&&l.alert&&Math.hypot(l.x-i.x,l.z-i.z)<22);this.danger+=((r?1:0)-this.danger)*Math.min(1,e*(r?1.7:.32)),this.combatGain?.gain.setTargetAtTime(this.danger*.93,n.currentTime,.18),this.districtGain?.gain.setTargetAtTime(.92-this.danger*.12,n.currentTime,.22);const a=this.lastX===void 0?0:Math.hypot(i.x-this.lastX,i.z-this.lastZ);this.lastX=i.x,this.lastZ=i.z,a<1&&(this.distance+=a),i.grounded&&this.distance>(i.mounted?2.2:1.65)&&n.currentTime-this.lastStep>.22&&e>0&&(this.distance=0,this.lastStep=n.currentTime,this.burst(.065,i.mounted?.18:.085,i.mounted?430:1400),this.tone(i.mounted?65:110,.09,i.mounted?.15:.08,"triangle",40))}buffer(t){const e=this.context.createBuffer(t.channels.length,t.channels[0].length,t.sampleRate);return t.channels.forEach((n,i)=>e.getChannelData(i).set(n)),e}startMusic(){const t=this.context;if(!t||!this.district||!this.combat||!this.districtGain||!this.combatGain||!this.musicDuck)return;const e=t.currentTime+.025;this.musicDuck.gain.cancelScheduledValues(t.currentTime),this.musicDuck.gain.setValueAtTime(0,t.currentTime),this.musicDuck.gain.linearRampToValueAtTime(1,e+.3),this.musicStarted=e;for(const[n,i]of[[this.district,this.districtGain],[this.combat,this.combatGain]]){const r=t.createBufferSource();r.buffer=n,r.loop=!0,r.connect(i),r.start(e,this.musicOffset),r.onended=()=>r.disconnect(),this.musicSources.push(r)}}shot(t){const e=this.context,n=this.weapons.get(t);if(!e||!n||!this.fx)return;const i=e.createBufferSource(),r=e.createGain();if(i.buffer=n,i.playbackRate.value=.985+Math.random()*.03,r.gain.value={revolver:.84,shotgun:1,plasma:.74,machinegun:.7}[t],i.connect(r),r.connect(this.fx),i.start(),i.onended=()=>{i.disconnect(),r.disconnect()},this.musicDuck&&this.musicSources.length){const a=e.currentTime;this.musicDuck.gain.cancelScheduledValues(a),this.musicDuck.gain.setValueAtTime(Math.min(1,this.musicDuck.gain.value),a),this.musicDuck.gain.linearRampToValueAtTime(.79,a+.006),this.musicDuck.gain.linearRampToValueAtTime(1,a+.145)}}reload(t){if(t==="plasma"){this.tone(180,.28,.13,"sawtooth",740),this.burst(.17,.15,2900,.25),this.tone(1320,.18,.09,"triangle",420,.47);return}if(this.burst(.075,.19,4200),this.tone(420,.045,.11,"square",180),this.burst(.13,.12,1600,.19),this.tone(710,.045,.1,"triangle",270,.31),t==="shotgun"||t==="revolver")for(let e=0;e<3;e++)this.burst(.032,.09,3100,.36+e*.19),this.tone(1870,.024,.035,"triangle",970,.36+e*.19);this.burst(.06,.22,3800,t==="machinegun"?.83:1),this.tone(160,.08,.14,"triangle",61,t==="machinegun"?.84:1.02)}tone(t,e,n,i="square",r=t,a=0){const l=this.context;if(!l||!this.fx)return;const o=l.currentTime+a,c=l.createOscillator(),h=l.createGain();c.type=i,c.frequency.setValueAtTime(Math.max(1,t),o),c.frequency.exponentialRampToValueAtTime(Math.max(1,r),o+e),h.gain.setValueAtTime(1e-4,o),h.gain.linearRampToValueAtTime(n,o+Math.min(.006,e/4)),h.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(h),h.connect(this.fx),c.start(o),c.stop(o+e+.025),c.onended=()=>{c.disconnect(),h.disconnect()}}burst(t,e,n,i=0){const r=this.context;if(!r||!this.noise||!this.fx)return;const a=r.currentTime+i,l=r.createBufferSource(),o=r.createBiquadFilter(),c=r.createGain();l.buffer=this.noise,o.type="lowpass",o.frequency.setValueAtTime(n,a),o.Q.value=.4,c.gain.setValueAtTime(e,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),l.connect(o),o.connect(c),c.connect(this.fx),l.start(a,Math.random()),l.stop(a+t+.025),l.onended=()=>{l.disconnect(),o.disconnect(),c.disconnect()}}chime(t,e,n){t.forEach((i,r)=>this.tone(i,.42,n,"triangle",i,r*e))}}const ho=document.querySelector("#world"),zm=document.querySelector("#weapon");let Ce,fr,li=!1,us=performance.now(),ui=!1;const Bn=new Om,Jn=new Pm(ho,ms),Bm=new Dm(zm),xn=new Lm({start:Ic,resume:Gm,restart:Hm,menu:Vm,pause:ms,settings:Lc});Ce=new Tc(Le,xn.settings.difficulty);function km(){try{localStorage.setItem("fossil-noir-3d-checkpoint",JSON.stringify({version:1,difficulty:Ce.state.difficulty}))}catch{}}function Pc(){try{return JSON.parse(localStorage.getItem("fossil-noir-3d-checkpoint")||"null")?.version===1}catch{return!1}}function Qn(s){li=s==="playing",Jn.enabled=li,Jn.clear(),xn.show(s),li||(Jn.release(),Bn.suspend())}function Ic(s=!1){ui||(Ce=new Tc(Le,xn.settings.difficulty),s&&Pc()&&Ce.restart(!0),Bn.unlock(),Qn("playing"),Jn.capture(),us=performance.now())}function Gm(){ui||Ce.state.status!=="playing"||(Bn.unlock(),Qn("playing"),Jn.capture(),us=performance.now())}function ms(){li&&Qn("pause")}function Hm(s=!1){if(!ui){if(!s){Ic(!1);return}Ce.restart(s&&(Ce.state.checkpoint||Pc())),Bn.unlock(),Qn("playing"),Jn.capture(),us=performance.now()}}function Vm(){Qn("menu")}function Lc(s){Jn.sensitivity=s.sensitivity,Bn.setVolume(s.volume),Bn.setMusicVolume(s.musicVolume),Bn.setEffectsVolume(s.effectsVolume),fr?.resize(s)}try{fr=new Rm(ho),Lc(xn.settings),xn.show("menu")}catch(s){ui=!0,xn.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${s instanceof Error?s.message:""}`)}function Dc(s){const t=Math.min(Math.max((s-us)/1e3,0),.05);if(us=s,!ui)try{if(li){Ce.update(t,Jn.read());for(const e of Ce.state.events)e.type==="checkpoint"&&km();if(Bn.handle(Ce.state.events),Ce.state.events.length=0,Bn.tick(Ce.state,t),Ce.state.status==="dead"&&Qn("dead"),Ce.state.status==="complete"){try{localStorage.setItem("fossil-noir-3d-best",String(Math.floor(Ce.state.time)))}catch{}Qn("complete")}}fr.render(Ce.state,li?t:0,xn.settings),Bm.render(Ce.state,li?t:0),xn.update(Ce.state)}catch(e){console.error("Fossil Noir 3D runtime error",e),ui=!0,Qn("menu"),xn.setError("The mission could not continue. Reload this page to restart.")}requestAnimationFrame(Dc)}window.addEventListener("resize",()=>fr?.resize(xn.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&ms()});window.addEventListener("blur",ms);ho.addEventListener("webglcontextlost",s=>{s.preventDefault(),ms(),ui=!0,xn.setError("Graphics context lost. Reload the page to recover the mission.")});requestAnimationFrame(Dc);
