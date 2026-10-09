(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const wl=[],wt=(s,t,e,n,i=4.2,r="concrete",a)=>wl.push({x:s,z:t,w:e,d:n,h:i,material:r,...a===void 0?{}:{y:a}});wt(0,12.3,11,.6,4,"brick");wt(-5.3,8,.6,8.6,4,"brick");wt(5.3,8,.6,8.6,4,"brick");wt(-3.4,4,3.8,.6,4,"brick");wt(3.4,4,3.8,.6,4,"brick");wt(0,4,3,.6,.8,"brick",3.2);wt(-13.3,0,.6,8,6.5,"brick");wt(-13.3,-13.5,.6,7,6.5,"brick");wt(-13.3,-18.7,.6,3.4,6.5,"brick");wt(-13.3,-4.6,.6,2.2,6.5,"brick");wt(-13.3,-9.4,.6,2.2,6.5,"brick");wt(-17.3,-7,.6,6.6,4,"brick");wt(-15.2,-3.7,4.8,.6,4,"brick");wt(-15.2,-10.3,4.8,.6,4,"brick");wt(13.3,-8,.6,24,7.2,"brick");wt(-9.5,4,7,.6,5.5,"brick");wt(9.5,4,7,.6,5.5,"brick");wt(-8,-20,12,.7,6,"metal");wt(8,-20,12,.7,6,"metal");wt(0,-20,4,.7,2.4,"metal",3.2);wt(-7.3,-26,.6,12.6,4.5,"metal");wt(7.3,-23,.6,6,4.5,"metal");wt(7.3,-30.5,.6,3,4.5,"metal");wt(7.3,-27.4,.6,3,1.5,"metal",3);wt(11.2,-23.9,8.4,.6,4.5,"metal");wt(15.3,-27.9,.6,8.6,4.5,"metal");wt(11.2,-32.2,8.4,.6,4.5,"metal");wt(-5.8,-32.2,8.6,.6,4.5,"metal");wt(5.8,-32.2,8.6,.6,4.5,"metal");wt(0,-32.2,3,.6,1.3,"metal",3.2);wt(-10.3,-39.2,.6,14.6,4.5,"metal");wt(10.3,-39.2,.6,14.6,4.5,"metal");wt(-11,-46,.6,1.2,4.5,"metal");wt(-10,-46,2,.6,4.5,"metal");wt(2.8,-46,15.6,.6,4.5,"metal");wt(-7,-46,4,.6,1.3,"metal",3.2);wt(-11.3,-49,.6,6.6,4.5,"metal");wt(-2.7,-49,.6,6.6,4.5,"metal");wt(-7,-52.3,9.2,.6,4.5,"metal");wt(-3.2,8,2.2,1.1,.85,"crate");wt(3.8,10,1.2,2.2,1.5,"crate");wt(-8,-4,2.4,1.4,1.1,"crate");wt(-7,-10,2,3.6,1.1,"metal");wt(3.8,-13,2.4,1.6,1.7,"crate");wt(5,-14.5,1.6,1.5,1.1,"crate");wt(-4.7,-18,2.4,1.3,1.3,"crate");wt(4.5,-23.8,1.8,1.8,1.2,"crate");wt(-4.4,-26.8,2.2,1.4,1.25,"metal");wt(12,-25.9,3.3,1,1.1,"metal");wt(-6.7,-34.5,2.2,1.5,1.2,"metal");wt(5,-36,2.4,1.2,1.2,"metal");wt(0,-40,3.5,1.4,1.1,"metal");wt(-7.5,-42.8,1.3,2.4,1.5,"crate");const De={walls:wl,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",x:2,z:6.7},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",x:-10.5,z:-5.3},{id:"street-ammo2",kind:"ammo",x:5.8,z:-12},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",x:5.8,z:-28.5},{id:"lobby-ammo2",kind:"ammo",x:-5.7,z:-29.5},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",x:10,z:-30.7},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",x:4.7,z:-34.5},{id:"lab-ammo2",kind:"ammo",x:-8,z:-37},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",x:-5,z:-44.5},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"barrels",x:11.7,z:-12},{kind:"barrels",x:-11,z:-19},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="186",Lc=0,xo=1,Dc=2,Bs=1,Uc=2,ji=3,ai=0,He=1,Ke=2,Dn=0,es=1,_o=2,vo=3,Mo=4,Nc=5,Pi=100,Fc=101,Oc=102,Bc=103,zc=104,kc=200,Gc=201,Hc=202,Vc=203,Rl=204,Cl=205,Wc=206,Xc=207,qc=208,Yc=209,$c=210,Kc=211,Zc=212,Jc=213,Qc=214,Zr=0,Jr=1,Qr=2,ns=3,jr=4,ta=5,ea=6,na=7,js=0,jc=1,th=2,hn=0,Pl=1,Il=2,Ll=3,Dl=4,Ul=5,Nl=6,Fl=7,Ol=300,oi=301,Ni=302,lr=303,cr=304,tr=306,is=1e3,Ln=1001,ia=1002,de=1003,eh=1004,ms=1005,Ue=1006,hr=1007,ii=1008,Ze=1009,Bl=1010,zl=1011,ss=1012,za=1013,Sn=1014,ln=1015,bn=1016,ka=1017,Ga=1018,rs=1020,kl=35902,Gl=35899,Hl=1021,Vl=1022,cn=1023,Fn=1026,si=1027,Ha=1028,Va=1029,li=1030,Wa=1031,Xa=1033,zs=33776,ks=33777,Gs=33778,Hs=33779,sa=35840,ra=35841,aa=35842,oa=35843,la=36196,ca=37492,ha=37496,ua=37488,fa=37489,Ws=37490,da=37491,pa=37808,ma=37809,ga=37810,xa=37811,_a=37812,va=37813,Ma=37814,Sa=37815,ba=37816,ya=37817,Ea=37818,Ta=37819,Aa=37820,wa=37821,Ra=36492,Ca=36494,Pa=36495,Ia=36283,La=36284,Xs=36285,Da=36286,nh=3200,qs=0,ih=1,Yn="",we="srgb",Ys="srgb-linear",$s="linear",Jt="srgb",ur=7680,sh=519,rh=512,ah=513,oh=514,qa=515,lh=516,ch=517,Ya=518,hh=519,uh=35044,Wl=35048,So="300 es",Mn=2e3,as=2001;function fh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dh(){const s=Ks("canvas");return s.style.display="block",s}const bo={};function yo(...s){const t="THREE."+s.shift();console.log(t,...s)}function Xl(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ct(...s){s=Xl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=Xl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Di(...s){const t=s.join(" ");t in bo||(bo[t]=!0,Ct(...s))}function ph(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const mh={[Zr]:Jr,[Qr]:ea,[jr]:na,[ns]:ta,[Jr]:Zr,[ea]:Qr,[na]:jr,[ta]:ns};class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Ua=180/Math.PI;function cs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ht(s,t,e){return Math.max(t,Math.min(e,s))}function gh(s,t){return(s%t+t)%t}function dr(s,t,e){return(1-e)*s+e*t}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const eo=class eo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eo.prototype.isVector2=!0;let Pt=eo;class Ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==f||u!==p){let g=l*h+c*f+u*p+d*_;g<0&&(h=-h,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const y=Math.acos(g),w=Math.sin(y);m=Math.sin(m*y)/w,o=Math.sin(o*y)/w,l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+p*o,d=d*m+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-o*f,t[e+2]=c*p+u*f+o*h-l*d,t[e+3]=u*p-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const no=class no{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};no.prototype.isVector3=!0;let z=no;const pr=new z,Eo=new Ve,io=class io{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],w=i[4],v=i[7],b=i[2],T=i[5],R=i[8];return r[0]=a*_+o*y+l*b,r[3]=a*g+o*w+l*T,r[6]=a*m+o*v+l*R,r[1]=c*_+u*y+d*b,r[4]=c*g+u*w+d*T,r[7]=c*m+u*v+d*R,r[2]=h*_+f*y+p*b,r[5]=h*g+f*w+p*T,r[8]=h*m+f*v+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=e*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mr.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};io.prototype.isMatrix3=!0;let Lt=io;const mr=new Lt,To=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xh(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?$s:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ys]:{primaries:t,whitePoint:n,transfer:$s,toXYZ:To,fromXYZ:Ao,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:To,fromXYZ:Ao,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const Gt=xh();function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ui(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pi;class _h{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pi===void 0&&(pi=Ks("canvas")),pi.width=t.width,pi.height=t.height;const i=pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vh=0;class $a{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gr(i[a].image)):r.push(gr(i[a]))}else r=gr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function gr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_h.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let Mh=0;const xr=new z;class Ne extends hi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ln,i=Ln,r=Ue,a=ii,o=cn,l=Ze,c=Ne.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=cs(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Ol;Ne.DEFAULT_ANISOTROPY=1;const so=class so{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(f+1)/2,b=(m+1)/2,T=(u+h)/4,R=(d+_)/4,M=(p+g)/4;return w>v&&w>b?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=R/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=M/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};so.prototype.isVector4=!0;let fe=so;class Sh extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Ne(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new $a(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Sh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ql extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Qs=class Qs{constructor(t,e,n,i,r,a,o,l,c,u,d,h,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,d,h,f,p,_,g)}set(t,e,n,i,r,a,o,l,c,u,d,h,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qs().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,p=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-p,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,p=o*u,_=o*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=p*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yh,t,Eh)}lookAt(t,e,n){const i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(n,We),kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(n,We)),kn.normalize(),gs.crossVectors(We,kn),i[0]=kn.x,i[4]=gs.x,i[8]=We.x,i[1]=kn.y,i[5]=gs.y,i[9]=We.y,i[2]=kn.z,i[6]=gs.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],w=n[7],v=n[11],b=n[15],T=i[0],R=i[4],M=i[8],E=i[12],C=i[1],I=i[5],P=i[9],L=i[13],D=i[2],N=i[6],V=i[10],B=i[14],$=i[3],q=i[7],W=i[11],K=i[15];return r[0]=a*T+o*C+l*D+c*$,r[4]=a*R+o*I+l*N+c*q,r[8]=a*M+o*P+l*V+c*W,r[12]=a*E+o*L+l*B+c*K,r[1]=u*T+d*C+h*D+f*$,r[5]=u*R+d*I+h*N+f*q,r[9]=u*M+d*P+h*V+f*W,r[13]=u*E+d*L+h*B+f*K,r[2]=p*T+_*C+g*D+m*$,r[6]=p*R+_*I+g*N+m*q,r[10]=p*M+_*P+g*V+m*W,r[14]=p*E+_*L+g*B+m*K,r[3]=y*T+w*C+v*D+b*$,r[7]=y*R+w*I+v*N+b*q,r[11]=y*M+w*P+v*V+b*W,r[15]=y*E+w*L+v*B+b*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],y=l*f-c*h,w=o*f-c*d,v=o*h-l*d,b=a*f-c*u,T=a*h-l*u,R=a*d-o*u;return e*(_*y-g*w+m*v)-n*(p*y-g*b+m*T)+i*(p*w-_*b+m*R)-r*(p*v-_*T+g*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=e*o-n*a,w=e*l-i*a,v=e*c-r*a,b=n*l-i*o,T=n*c-r*o,R=i*c-r*l,M=u*_-d*p,E=u*g-h*p,C=u*m-f*p,I=d*g-h*_,P=d*m-f*_,L=h*m-f*g,D=y*L-w*P+v*I+b*C-T*E+R*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return t[0]=(o*L-l*P+c*I)*N,t[1]=(i*P-n*L-r*I)*N,t[2]=(_*R-g*T+m*b)*N,t[3]=(h*T-d*R-f*b)*N,t[4]=(l*C-a*L-c*E)*N,t[5]=(e*L-i*C+r*E)*N,t[6]=(g*v-p*R-m*w)*N,t[7]=(u*R-h*v+f*w)*N,t[8]=(a*P-o*C+c*M)*N,t[9]=(n*C-e*P-r*M)*N,t[10]=(p*T-_*v+m*y)*N,t[11]=(d*v-u*T-f*y)*N,t[12]=(o*E-a*I-l*M)*N,t[13]=(e*I-n*E+i*M)*N,t[14]=(_*w-p*b-g*y)*N,t[15]=(u*b-d*w+h*y)*N,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,_=a*u,g=a*d,m=o*d,y=l*c,w=l*u,v=l*d,b=n.x,T=n.y,R=n.z;return i[0]=(1-(_+m))*b,i[1]=(f+v)*b,i[2]=(p-w)*b,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(h+m))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(p+w)*R,i[9]=(g-y)*R,i[10]=(1-(h+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),l=mi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),nn.copy(this);const c=1/a,u=1/o,d=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Mn,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===as)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Mn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Mn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===as)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qs.prototype.isMatrix4=!0;let ae=Qs;const mi=new z,nn=new ae,yh=new z(0,0,0),Eh=new z(1,1,1),kn=new z,gs=new z,We=new z,wo=new ae,Ro=new Ve;class yn{constructor(t=0,e=0,n=0,i=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Th=0;const Co=new z,gi=new Ve,Tn=new ae,xs=new z,ki=new z,Ah=new z,wh=new Ve,Po=new z(1,0,0),Io=new z(0,1,0),Lo=new z(0,0,1),Do={type:"added"},Rh={type:"removed"},xi={type:"childadded",child:null},_r={type:"childremoved",child:null};class Me extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new z,e=new yn,n=new Ve,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Lt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Po,t)}rotateY(t){return this.rotateOnAxis(Io,t)}rotateZ(t){return this.rotateOnAxis(Lo,t)}translateOnAxis(t,e){return Co.copy(t).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Po,t)}translateY(t){return this.translateOnAxis(Io,t)}translateZ(t){return this.translateOnAxis(Lo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ki,xs,this.up):Tn.lookAt(xs,ki,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(Tn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Do),xi.child=t,this.dispatchEvent(xi),xi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rh),_r.child=t,this.dispatchEvent(_r),_r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Do),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Me.DEFAULT_UP=new z(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Be extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ch={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ch)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Mr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=gh(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mr(a,r,t+1/3),this.g=Mr(a,r,t),this.b=Mr(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Gt.workingToColorSpace(Ie.copy(this),t),Math.round(Ht(Ie.r*255,0,255))*65536+Math.round(Ht(Ie.g*255,0,255))*256+Math.round(Ht(Ie.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=we){Gt.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(_s);const n=dr(Gn.h,_s.h,e),i=dr(Gn.s,_s.s,e),r=dr(Gn.l,_s.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Ft;Ft.NAMES=$l;class Ka{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ph extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const sn=new z,An=new z,Sr=new z,wn=new z,_i=new z,vi=new z,Uo=new z,br=new z,yr=new z,Er=new z,Tr=new fe,Ar=new fe,wr=new fe;class on{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),An.subVectors(n,e),Sr.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(An),l=sn.dot(Sr),c=An.dot(An),u=An.dot(Sr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Tr.setScalar(0),Ar.setScalar(0),wr.setScalar(0),Tr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,n),wr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Tr,r.x),a.addScaledVector(Ar,r.y),a.addScaledVector(wr,r.z),a}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),An.subVectors(t,e),sn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;_i.subVectors(i,n),vi.subVectors(r,n),br.subVectors(t,n);const l=_i.dot(br),c=vi.dot(br);if(l<=0&&c<=0)return e.copy(n);yr.subVectors(t,i);const u=_i.dot(yr),d=vi.dot(yr);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(_i,a);Er.subVectors(t,r);const f=_i.dot(Er),p=vi.dot(Er);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(vi,o);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return Uo.subVectors(r,i),o=(d-u)/(d-u+(f-p)),e.copy(i).addScaledVector(Uo,o);const m=1/(g+_+h);return a=_*m,o=h*m,e.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),Ms.subVectors(this.max,Gi),Mi.subVectors(t.a,Gi),Si.subVectors(t.b,Gi),bi.subVectors(t.c,Gi),Hn.subVectors(Si,Mi),Vn.subVectors(bi,Si),Jn.subVectors(Mi,bi);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-Jn.z,Jn.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,Jn.z,0,-Jn.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-Jn.y,Jn.x,0];return!Rr(e,Mi,Si,bi,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Rr(e,Mi,Si,bi,Ms))?!1:(Ss.crossVectors(Hn,Vn),e=[Ss.x,Ss.y,Ss.z],Rr(e,Mi,Si,bi,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new z,new z,new z,new z,new z,new z,new z,new z],rn=new z,vs=new ui,Mi=new z,Si=new z,bi=new z,Hn=new z,Vn=new z,Jn=new z,Gi=new z,Ms=new z,Ss=new z,Qn=new z;function Rr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Qn.fromArray(s,r);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _e=new z,bs=new Pt;let Ih=0;class fn extends hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Kl extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zl extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Lh=new ui,Hi=new z,Cr=new z;class hs{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(Cr)),this.expandByPoint(Hi.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Dh=0;const Qe=new ae,Pr=new Me,yi=new z,Xe=new ui,Vi=new ui,Ee=new z;class ze extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fh(t)?Zl:Kl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Xe.min,Vi.min),Xe.expandByPoint(Ee),Ee.addVectors(Xe.max,Vi.max),Xe.expandByPoint(Ee)):(Xe.expandByPoint(Vi.min),Xe.expandByPoint(Vi.max))}Xe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),Ee.add(yi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new z,l[M]=new z;const c=new z,u=new z,d=new z,h=new Pt,f=new Pt,p=new Pt,_=new z,g=new z;function m(M,E,C){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),h.fromBufferAttribute(r,M),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),o[M].add(_),o[E].add(_),o[C].add(_),l[M].add(g),l[E].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let M=0,E=y.length;M<E;++M){const C=y[M],I=C.start,P=C.count;for(let L=I,D=I+P;L<D;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new z,v=new z,b=new z,T=new z;function R(M){b.fromBufferAttribute(i,M),T.copy(b);const E=o[M];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(T,E);const I=v.dot(l[M])<0?-1:1;a.setXYZW(M,w.x,w.y,w.z,I)}for(let M=0,E=y.length;M<E;++M){const C=y[M],I=C.start,P=C.count;for(let L=I,D=I+P;L<D;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[f++]}return new fn(h,u,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ir=new z,Uh=new z,Nh=new Lt;class qn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ir.subVectors(n,e).cross(Uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Ir),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nh.getNormalMatrix(t),i=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Fh=0;class Oi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=es,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Cn=new z,Lr=new z,ys=new z,Es=new z;class Oh{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Lr.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),Es.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ys),o=Es.dot(this.direction),l=-Es.dot(ys),c=Es.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Lr).addScaledVector(ys,h),f}intersectSphere(t,e){if(t.radius<0)return null;Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,g=e.z-a.z,m=n.x-a.x,y=n.y-a.y,w=n.z-a.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(u);let R,M,E,C,I,P,L,D,N,V,B,$;if(v>=b&&v>=T?(E=l,P=d,N=p,$=m,l>=0?(R=c,M=u,C=h,I=f,L=_,D=g,V=y,B=w):(R=u,M=c,C=f,I=h,L=g,D=_,V=w,B=y)):b>=T?(E=c,P=h,N=_,$=y,c>=0?(R=u,M=l,C=f,I=d,L=g,D=p,V=w,B=m):(R=l,M=u,C=d,I=f,L=p,D=g,V=m,B=w)):(E=u,P=f,N=g,$=w,u>=0?(R=l,M=c,C=d,I=h,L=p,D=_,V=m,B=y):(R=c,M=l,C=h,I=d,L=_,D=p,V=y,B=m)),E===0)return null;const q=R/E,W=M/E,K=1/E,pt=C-q*P,vt=I-W*P,ee=L-q*N,Vt=D-W*N,Yt=V-q*$,J=B-W*$,et=Yt*Vt-J*ee,_t=pt*J-vt*Yt,It=ee*vt-Vt*pt;if(i){if(et<0||_t<0||It<0)return null}else if((et<0||_t<0||It<0)&&(et>0||_t>0||It>0))return null;const gt=et+_t+It;if(gt===0)return null;const Ot=K*(et*P+_t*N+It*$);return(gt>0?Ot<0:Ot>0)?null:this.at(Ot/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const No=new ae,jn=new Oh,Ts=new hs,Fo=new z,As=new z,ws=new z,Rs=new z,Dr=new z,Cs=new z,Oo=new z,Ps=new z;class ue extends Me{constructor(t=new ze,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Dr.fromBufferAttribute(d,t),a?Cs.addScaledVector(Dr,u):Cs.addScaledVector(Dr.sub(e),u))}e.add(Cs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Ts.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ts,Fo)===null||jn.origin.distanceToSquared(Fo)>(t.far-t.near)**2))&&(No.copy(r).invert(),jn.copy(t.ray).applyMatrix4(No),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,b=w;v<b;v+=3){const T=o.getX(v),R=o.getX(v+1),M=o.getX(v+2);i=Is(this,m,t,n,c,u,d,T,R,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=Is(this,a,t,n,c,u,d,y,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,b=w;v<b;v+=3){const T=v,R=v+1,M=v+2;i=Is(this,m,t,n,c,u,d,T,R,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,w=g+1,v=g+2;i=Is(this,a,t,n,c,u,d,y,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Bh(s,t,e,n,i,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ai,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:s}}function Is(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,As),s.getVertexPosition(l,ws),s.getVertexPosition(c,Rs);const u=Bh(s,t,e,n,As,ws,Rs,Oo);if(u){const d=new z;on.getBarycoord(Oo,As,ws,Rs,d),i&&(u.uv=on.getInterpolatedAttribute(i,o,l,c,d,new Pt)),r&&(u.uv1=on.getInterpolatedAttribute(r,o,l,c,d,new Pt)),a&&(u.normal=on.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};on.getNormal(As,ws,Rs,h.normal),u.face=h,u.barycoord=d}return u}class Jl extends Ne{constructor(t=null,e=1,n=1,i,r,a,o,l,c=de,u=de,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ei=new ae,zo=new ae,Ls=[],ko=new ui,zh=new ae,Wi=new ue,Xi=new hs;class Ql extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),ko.copy(t.boundingBox).applyMatrix4(Ei),this.boundingBox.union(ko)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ei),Xi.copy(t.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Xi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),t.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ei),zo.multiplyMatrices(n,Ei),Wi.matrixWorld=zo,Wi.raycast(t,Ls);for(let a=0,o=Ls.length;a<o;a++){const l=Ls[a];l.instanceId=r,l.object=this,e.push(l)}Ls.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jl(new Float32Array(i*this.count),i,this.count,Ha,ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ti=new hs,kh=new Pt(.5,.5),Ds=new z;class Za{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],y=r[12],w=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,f-u,m-p,b-y).normalize(),i[1].setComponents(c+a,f+u,m+p,b+y).normalize(),i[2].setComponents(c+o,f+d,m+_,b+w).normalize(),i[3].setComponents(c-o,f-d,m-_,b-w).normalize(),n)i[4].setComponents(l,h,g,v).normalize(),i[5].setComponents(c-l,f-h,m-g,b-v).normalize();else if(i[4].setComponents(c-l,f-h,m-g,b-v).normalize(),e===Mn)i[5].setComponents(c+l,f+h,m+g,b+v).normalize();else if(e===as)i[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=kh.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ds.x=i.normal.x>0?t.max.x:t.min.x,Ds.y=i.normal.y>0?t.max.y:t.min.y,Ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends Ne{constructor(t=[],e=oi,n,i,r,a,o,l,c,u){super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class us extends Ne{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class os extends Ne{constructor(t,e,n=Sn,i,r,a,o=de,l=de,c,u=Fn,d=1){if(u!==Fn&&u!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Gh extends os{constructor(t,e=Sn,n=oi,i,r,a=de,o=de,l,c=Fn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tc extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ye extends ze{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function p(_,g,m,y,w,v,b,T,R,M,E){const C=v/R,I=b/M,P=v/2,L=b/2,D=T/2,N=R+1,V=M+1;let B=0,$=0;const q=new z;for(let W=0;W<V;W++){const K=W*I-L;for(let pt=0;pt<N;pt++){const vt=pt*C-P;q[_]=vt*y,q[g]=K*w,q[m]=D,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[m]=T>0?1:-1,u.push(q.x,q.y,q.z),d.push(pt/R),d.push(1-W/M),B+=1}}for(let W=0;W<M;W++)for(let K=0;K<R;K++){const pt=h+K+N*W,vt=h+K+N*(W+1),ee=h+(K+1)+N*(W+1),Vt=h+(K+1)+N*W;l.push(pt,vt,Vt),l.push(vt,ee,Vt),$+=6}o.addGroup(f,$,E),f+=$,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jt extends ze{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function y(){const v=new z,b=new z;let T=0;const R=(e-t)/n;for(let M=0;M<=r;M++){const E=[],C=M/r,I=C*(e-t)+t;for(let P=0;P<=i;P++){const L=P/i,D=L*l+o,N=Math.sin(D),V=Math.cos(D);b.x=I*N,b.y=-C*n+g,b.z=I*V,d.push(b.x,b.y,b.z),v.set(N,R,V).normalize(),h.push(v.x,v.y,v.z),f.push(L,1-C),E.push(p++)}_.push(E)}for(let M=0;M<i;M++)for(let E=0;E<r;E++){const C=_[E][M],I=_[E+1][M],P=_[E+1][M+1],L=_[E][M+1];(t>0||E!==0)&&(u.push(C,I,L),T+=3),(e>0||E!==r-1)&&(u.push(I,P,L),T+=3)}c.addGroup(m,T,0),m+=T}function w(v){const b=p,T=new Pt,R=new z;let M=0;const E=v===!0?t:e,C=v===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),p++;const I=p;for(let P=0;P<=i;P++){const D=P/i*l+o,N=Math.cos(D),V=Math.sin(D);R.x=E*V,R.y=g*C,R.z=E*N,d.push(R.x,R.y,R.z),h.push(0,C,0),T.x=N*.5+.5,T.y=V*.5*C+.5,f.push(T.x,T.y),p++}for(let P=0;P<i;P++){const L=b+P,D=I+P;v===!0?u.push(D,D+1,L):u.push(D+1,D,L),M+=3}c.addGroup(m,M,v===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class er extends jt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new er(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tn extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=t/o,h=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const y=m*h-a;for(let w=0;w<c;w++){const v=w*d-r;p.push(v,-y,0),_.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const w=y+c*m,v=y+c*(m+1),b=y+1+c*(m+1),T=y+1+c*m;f.push(w,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ja extends ze{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/i,f=new z,p=new Pt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,w=y,v=y+n+1,b=y+n+2,T=y+1;o.push(w,v,T),o.push(v,b,T)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nr extends ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new z,h=new z,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],w=m/n,v=a+w*o,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b);let R=0;m===0&&a===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let M=0;M<=e;M++){const E=M/e,C=i+E*r;d.x=-T*Math.cos(C),d.y=b,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(E+R,1-w),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const w=u[m][y+1],v=u[m][y],b=u[m+1][y],T=u[m+1][y+1];(m!==0||a>0)&&f.push(w,v,T),(m!==n-1||l<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zs extends ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new z,f=new z,p=new z;for(let _=0;_<=n;_++){const g=a+_/n*o;for(let m=0;m<=i;m++){const y=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){const m=(i+1)*_+g-1,y=(i+1)*(_-1)+g-1,w=(i+1)*(_-1)+g,v=(i+1)*_+g;l.push(m,y,v),l.push(y,w,v)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Fi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Go(i))i.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Go(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=Fi(s[e]);for(const i in n)t[i]=n[i]}return t}function Go(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Hh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const Vh={clone:Fi,merge:Oe};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Hh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(i.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class qh extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yh extends Oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=js,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ur extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=js,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $h extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kh extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qa extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Zh extends Qa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Nr=new ae,Ho=new z,Vo=new z;class nc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ho.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ho),Vo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vo),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Nr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===as||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Nr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Us=new z,Ns=new Ve,gn=new z;class ic extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Us,Ns,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Ns,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Us,Ns,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Ns,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new z,Wo=new Pt,Xo=new Pt;class $e extends ic{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Wo,Xo),e.subVectors(Xo,Wo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jh extends nc{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class Qh extends Qa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ja extends ic{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jh extends nc{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qo extends Qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ti=-90,Ai=1;class tu extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Ti,Ai,t,e);i.layers=this.layers,this.add(i);const r=new $e(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const a=new $e(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const o=new $e(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const l=new $e(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new $e(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class eu extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ro=class ro{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};ro.prototype.isMatrix2=!0;let Yo=ro;function $o(s,t,e,n){const i=nu(n);switch(e){case Hl:return s*t;case Ha:return s*t/i.components*i.byteLength;case Va:return s*t/i.components*i.byteLength;case li:return s*t*2/i.components*i.byteLength;case Wa:return s*t*2/i.components*i.byteLength;case Vl:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case Xa:return s*t*4/i.components*i.byteLength;case zs:case ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ra:case oa:return Math.max(s,16)*Math.max(t,8)/4;case sa:case aa:return Math.max(s,8)*Math.max(t,8)/2;case la:case ca:case ua:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:case Ws:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case va:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ra:case Ca:case Pa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ia:case La:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xs:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nu(s){switch(s){case Ze:case Bl:return{byteLength:1,components:1};case ss:case zl:case bn:return{byteLength:2,components:1};case ka:case Ga:return{byteLength:2,components:4};case Sn:case za:case ln:return{byteLength:4,components:1};case kl:case Gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sc(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function iu(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
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
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
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
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
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
#endif`,du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xu=`#ifdef USE_IRIDESCENCE
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
#endif`,_u=`#ifdef USE_BUMPMAP
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wu=`#define PI 3.141592653589793
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
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cu=`vec3 transformedNormal = objectNormal;
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
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
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
}`,qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ku=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
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
#endif`,nf=`uniform sampler2D dfgLUT;
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
}`,sf=`
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
#endif`,rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mf=`#if defined( USE_POINTS_UV )
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
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
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
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wf=`float getShadowMask() {
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
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,td=`#ifdef USE_TRANSMISSION
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
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ad=`uniform sampler2D t2D;
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
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`#include <common>
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
}`,fd=`#if DEPTH_PACKING == 3200
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
}`,dd=`#define DISTANCE
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
}`,pd=`#define DISTANCE
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`uniform float scale;
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
}`,_d=`uniform vec3 diffuse;
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
}`,vd=`#include <common>
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
}`,Md=`uniform vec3 diffuse;
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
}`,Sd=`#define LAMBERT
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
}`,bd=`#define LAMBERT
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
}`,yd=`#define MATCAP
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
}`,Ed=`#define MATCAP
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
}`,Td=`#define NORMAL
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
}`,Ad=`#define NORMAL
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
}`,wd=`#define PHONG
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
}`,Rd=`#define PHONG
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
}`,Cd=`#define STANDARD
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
}`,Pd=`#define STANDARD
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
}`,Id=`#define TOON
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
}`,Ld=`#define TOON
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
}`,Dd=`uniform float size;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Nd=`#include <common>
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
}`,Fd=`uniform vec3 color;
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
}`,Od=`uniform float rotation;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:fu,batching_vertex:du,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:xu,bumpmap_pars_fragment:_u,clipping_planes_fragment:vu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:bu,color_fragment:yu,color_pars_fragment:Eu,color_pars_vertex:Tu,color_vertex:Au,common:wu,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Pu,displacementmap_vertex:Iu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Du,colorspace_fragment:Uu,colorspace_pars_fragment:Nu,envmap_fragment:Fu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:Bu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:Zu,envmap_vertex:ku,fog_vertex:Gu,fog_pars_vertex:Hu,fog_fragment:Vu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_pars_fragment:qu,lights_lambert_fragment:Yu,lights_lambert_pars_fragment:$u,lights_pars_begin:Ku,lights_toon_fragment:Ju,lights_toon_pars_fragment:Qu,lights_phong_fragment:ju,lights_phong_pars_fragment:tf,lights_physical_fragment:ef,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:af,lightprobes_pars_fragment:of,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:uf,map_fragment:ff,map_pars_fragment:df,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:xf,morphinstance_vertex:_f,morphcolor_vertex:vf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:bf,normal_fragment_begin:yf,normal_fragment_maps:Ef,normal_pars_fragment:Tf,normal_pars_vertex:Af,normal_vertex:wf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Lf,opaque_fragment:Df,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:qf,skinning_vertex:Yf,skinnormal_vertex:$f,specularmap_fragment:Kf,specularmap_pars_fragment:Zf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:jf,transmission_pars_fragment:td,uv_pars_fragment:ed,uv_pars_vertex:nd,uv_vertex:id,worldpos_vertex:sd,background_vert:rd,background_frag:ad,backgroundCube_vert:od,backgroundCube_frag:ld,cube_vert:cd,cube_frag:hd,depth_vert:ud,depth_frag:fd,distance_vert:dd,distance_frag:pd,equirect_vert:md,equirect_frag:gd,linedashed_vert:xd,linedashed_frag:_d,meshbasic_vert:vd,meshbasic_frag:Md,meshlambert_vert:Sd,meshlambert_frag:bd,meshmatcap_vert:yd,meshmatcap_frag:Ed,meshnormal_vert:Td,meshnormal_frag:Ad,meshphong_vert:wd,meshphong_frag:Rd,meshphysical_vert:Cd,meshphysical_frag:Pd,meshtoon_vert:Id,meshtoon_frag:Ld,points_vert:Dd,points_frag:Ud,shadow_vert:Nd,shadow_frag:Fd,sprite_vert:Od,sprite_frag:Bd},ht={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Fs={r:0,b:0,g:0},zd=new ae,rc=new Lt;rc.set(-1,0,0,0,1,0,0,0,1);function kd(s,t,e,n,i,r){const a=new Ft(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(y){let w=!1;const v=f(y);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,w){const v=f(w);v&&(v.isCubeTexture||v.mapping===tr)?(c===void 0&&(c=new ue(new Ye(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Fi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zd.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rc),c.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Jt,(u!==v||d!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ue(new tn(2,2),new En({name:"BackgroundMaterial",uniforms:Fi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,w){y.getRGB(Fs,ec(s)),e.buffers.color.setClear(Fs.r,Fs.g,Fs.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Gd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(I,P,L,D,N){let V=!1;const B=d(I,D,L,P);r!==B&&(r=B,c(r.object)),V=f(I,D,L,N),V&&p(I,D,L,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(I,P,L,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function d(I,P,L,D){const N=D.wireframe===!0;let V=n[P.id];V===void 0&&(V={},n[P.id]=V);const B=I.isInstancedMesh===!0?I.id:0;let $=V[B];$===void 0&&($={},V[B]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let W=q[N];return W===void 0&&(W=h(l()),q[N]=W),W}function h(I){const P=[],L=[],D=[];for(let N=0;N<e;N++)P[N]=0,L[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,P,L,D){const N=r.attributes,V=P.attributes;let B=0;const $=L.getAttributes();for(const q in $)if($[q].location>=0){const K=N[q];let pt=V[q];if(pt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),K===void 0||K.attribute!==pt||pt&&K.data!==pt.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function p(I,P,L,D){const N={},V=P.attributes;let B=0;const $=L.getAttributes();for(const q in $)if($[q].location>=0){let K=V[q];K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const pt={};pt.attribute=K,K&&K.data&&(pt.data=K.data),N[q]=pt,B++}r.attributes=N,r.attributesNum=B,r.index=D}function _(){const I=r.newAttributes;for(let P=0,L=I.length;P<L;P++)I[P]=0}function g(I){m(I,0)}function m(I,P){const L=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;L[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),N[I]!==P&&(s.vertexAttribDivisor(I,P),N[I]=P)}function y(){const I=r.newAttributes,P=r.enabledAttributes;for(let L=0,D=P.length;L<D;L++)P[L]!==I[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function w(I,P,L,D,N,V,B){B===!0?s.vertexAttribIPointer(I,P,L,N,V):s.vertexAttribPointer(I,P,L,D,N,V)}function v(I,P,L,D){_();const N=D.attributes,V=L.getAttributes(),B=P.defaultAttributeValues;for(const $ in V){const q=V[$];if(q.location>=0){let W=N[$];if(W===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const K=W.normalized,pt=W.itemSize,vt=t.get(W);if(vt===void 0)continue;const ee=vt.buffer,Vt=vt.type,Yt=vt.bytesPerElement,J=Vt===s.INT||Vt===s.UNSIGNED_INT||W.gpuType===za;if(W.isInterleavedBufferAttribute){const et=W.data,_t=et.stride,It=W.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<q.locationSize;gt++)g(q.location+gt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let gt=0;gt<q.locationSize;gt++)w(q.location+gt,pt/q.locationSize,Vt,K,_t*Yt,(It+pt/q.locationSize*gt)*Yt,J)}else{if(W.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)m(q.location+et,W.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<q.locationSize;et++)g(q.location+et);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let et=0;et<q.locationSize;et++)w(q.location+et,pt/q.locationSize,Vt,K,pt*Yt,pt/q.locationSize*et*Yt,J)}}else if(B!==void 0){const K=B[$];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(q.location,K);break;case 3:s.vertexAttrib3fv(q.location,K);break;case 4:s.vertexAttrib4fv(q.location,K);break;default:s.vertexAttrib1fv(q.location,K)}}}}y()}function b(){E();for(const I in n){const P=n[I];for(const L in P){const D=P[L];for(const N in D){const V=D[N];for(const B in V)u(V[B].object),delete V[B];delete D[N]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const P=n[I.id];for(const L in P){const D=P[L];for(const N in D){const V=D[N];for(const B in V)u(V[B].object),delete V[B];delete D[N]}}delete n[I.id]}function R(I){for(const P in n){const L=n[P];for(const D in L){const N=L[D];if(N[I.id]===void 0)continue;const V=N[I.id];for(const B in V)u(V[B].object),delete V[B];delete N[I.id]}}}function M(I){for(const P in n){const L=n[P],D=I.isInstancedMesh===!0?I.id:0,N=L[D];if(N!==void 0){for(const V in N){const B=N[V];for(const $ in B)u(B[$].object),delete B[$];delete N[V]}delete L[D],Object.keys(L).length===0&&delete n[P]}}}function E(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Hd(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==cn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const M=R===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ze&&R!==ln&&!M&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ct("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Wd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new qn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?u(null):c();else{const y=r?0:n,w=y*4;let v=m.clippingState||null;l.value=v,v=u(p,h,w,f);for(let b=0;b!==w;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=f;w!==_;++w,v+=4)a.copy(d[w]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const Li=4,Xd=6,qd=20,Yd=256,qi=new ja,Ko=new Ft;let Fr=null,Or=0,Br=0,zr=!1;const $d=new z,ei=new z;class Zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=$d}=r;Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=zr,t.scissorTest=!1,wi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:bn,format:cn,colorSpace:Ys,depthBuffer:!1},i=Jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kd(r)),this._blurMaterial=Jd(r,t,e),this._ggxMaterial=Zd(r,t,e)}return i}_compileMaterial(t){const e=new ue(new ze,t);this._renderer.compile(e,qi)}_sceneToCubeUV(t,e,n,i,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ko),d.toneMapping=hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Ye,new an({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(Ko),m=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const b=this._cubeSize;wi(i,v*b,w>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===oi||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;wi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Li?n-p+Li:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,wi(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(o,qi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,wi(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(o,qi)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Li?i-this._lodMax+Li:0),h=4*(this._cubeSize-u);wi(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,qi)}}function Kd(s){const t=[],e=[];let n=s;const i=s-Li+1+Xd;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let m=0;m<d;m++){const y=m%3*2/3-1,w=m>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(v,f*h*m);for(let b=0;b<h;b++){const T=u[b*2]*2-1,R=u[b*2+1]*2-1;m===0?ei.set(1,R,T):m===1?ei.set(-T,1,-R):m===2?ei.set(-T,R,1):m===3?ei.set(-1,R,-T):m===4?ei.set(-T,-1,R):ei.set(T,R,-1),ei.toArray(_,(m*h+b)*f)}}const g=new ze;g.setAttribute("position",new fn(p,f)),g.setAttribute("outputDirection",new fn(_,f)),e.push(new ue(g,null)),n>Li&&n--}return{lodMeshes:e,sizeLods:t}}function Jo(s,t,e){const n=new un(s,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Zd(s,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ir(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Jd(s,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:qd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ir(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Qo(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ir(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function jo(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ir(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ac extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Dn});r.uniforms.tEquirect.value=e;const a=new ue(i,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ue),new tu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function Qd(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===lr||f===cr)if(t.has(h)){const p=t.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new ac(p.height);return _.fromEquirectangularTexture(s,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===lr||f===cr,_=f===oi||f===Ni;if(p||_){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Zo(s)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Zo(s)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===lr?h.mapping=oi:f===cr&&(h.mapping=Ni),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function jd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Di("WebGLRenderer: "+n+" extension not supported."),i}}}function t0(s,t,e,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],s.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let w=0,v=y.length;w<v;w+=3){const b=y[w+0],T=y[w+1],R=y[w+2];h.push(b,T,T,R,R,b)}}else{const y=p.array;_=p.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const b=w+0,T=w+1,R=w+2;h.push(b,T,T,R,R,b)}}const g=new(p.count>=65535?Zl:Kl)(h,1);g.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function e0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){s.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function n0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function i0(s,t,e){const n=new WeakMap,i=new fe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let C=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let b=o.attributes.position.count*v,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*T*4*d),M=new ql(R,b,T,d);M.type=ln,M.needsUpdate=!0;const E=v*4;for(let I=0;I<d;I++){const P=m[I],L=y[I],D=w[I],N=b*T*4*I;for(let V=0;V<P.count;V++){const B=V*E;p===!0&&(i.fromBufferAttribute(P,V),R[N+B+0]=i.x,R[N+B+1]=i.y,R[N+B+2]=i.z,R[N+B+3]=0),_===!0&&(i.fromBufferAttribute(L,V),R[N+B+4]=i.x,R[N+B+5]=i.y,R[N+B+6]=i.z,R[N+B+7]=0),g===!0&&(i.fromBufferAttribute(D,V),R[N+B+8]=i.x,R[N+B+9]=i.y,R[N+B+10]=i.z,R[N+B+11]=D.itemSize===4?i.w:1)}}h={count:d,texture:M,size:new Pt(b,T)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function s0(s,t,e,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const r0={[Pl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Fl]:"NEUTRAL_TONE_MAPPING",[Ul]:"CUSTOM_TONE_MAPPING"};function a0(s,t,e,n,i,r){const a=new un(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new ze;c.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pe([0,2,0,0,2,0],2));const u=new qh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ue(c,u),h=new ja(-1,1,1,-1,0,1);let f=null,p=null,_=!1,g,m=null,y=[],w=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let T=0;T<y.length;T++){const R=y[T];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;const b=a.width,T=a.height;y.length>0&&o===null&&(o=new un(b,T,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new un(b,T,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const M=y[R];M.setSize&&M.setSize(b,T)}},this.begin=function(v,b){if(_||v.toneMapping===hn&&y.length===0)return!1;if(m=b,b!==null){const T=b.width,R=b.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=hn,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=g,_=!0;let T=a,R=o;for(let M=0;M<y.length;M++){const E=y[M];E.enabled!==!1&&(E.render(v,R,T,b),E.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,u.defines={},Gt.getTransfer(f)===Jt&&(u.defines.SRGB_TRANSFER="");const M=r0[p];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(d,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const oc=new Ne,Na=new os(1,1),lc=new ql,cc=new bh,hc=new jl,tl=[],el=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=tl[i];if(r===void 0&&(r=new Float32Array(i),tl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sr(s,t){let e=el[t];e===void 0&&(e=new Int32Array(t),el[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function o0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function u0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;sl.set(n),s.uniformMatrix2fv(this.addr,!1,sl),be(e,n)}}function f0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;il.set(n),s.uniformMatrix3fv(this.addr,!1,il),be(e,n)}}function d0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;nl.set(n),s.uniformMatrix4fv(this.addr,!1,nl),be(e,n)}}function p0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function m0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function g0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function x0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function _0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function v0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function M0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function S0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function b0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Na.compareFunction=e.isReversedDepthBuffer()?Ya:qa,r=Na):r=oc,e.setTexture2D(t||r,i)}function y0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cc,i)}function E0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hc,i)}function T0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lc,i)}function A0(s){switch(s){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return f0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return v0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}function w0(s,t){s.uniform1fv(this.addr,t)}function R0(s,t){const e=Bi(t,this.size,2);s.uniform2fv(this.addr,e)}function C0(s,t){const e=Bi(t,this.size,3);s.uniform3fv(this.addr,e)}function P0(s,t){const e=Bi(t,this.size,4);s.uniform4fv(this.addr,e)}function I0(s,t){const e=Bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function L0(s,t){const e=Bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function D0(s,t){const e=Bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function U0(s,t){s.uniform1iv(this.addr,t)}function N0(s,t){s.uniform2iv(this.addr,t)}function F0(s,t){s.uniform3iv(this.addr,t)}function O0(s,t){s.uniform4iv(this.addr,t)}function B0(s,t){s.uniform1uiv(this.addr,t)}function z0(s,t){s.uniform2uiv(this.addr,t)}function k0(s,t){s.uniform3uiv(this.addr,t)}function G0(s,t){s.uniform4uiv(this.addr,t)}function H0(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Na:a=oc;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function V0(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cc,r[a])}function W0(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hc,r[a])}function X0(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lc,r[a])}function q0(s){switch(s){case 5126:return w0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class K0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function rl(s,t){s.seq.push(t),s.map[t.id]=t}function Z0(s,t,e){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),a=kr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rl(e,c===void 0?new Y0(o,s,t):new $0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new K0(o),rl(e,d)),e=d}}}class Vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Z0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function al(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const J0=37297;let Q0=0;function j0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ol=new Lt;function tp(s){Gt._getMatrix(ol,Gt.workingColorSpace,s);const t=`mat3( ${ol.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(s)){case $s:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ll(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+j0(s.getShaderSource(t),o)}else return r}function ep(s,t){const e=tp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const np={[Pl]:"Linear",[Il]:"Reinhard",[Ll]:"Cineon",[Dl]:"ACESFilmic",[Nl]:"AgX",[Fl]:"Neutral",[Ul]:"Custom"};function ip(s,t){const e=np[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new z;function sp(){Gt.getLuminanceCoefficients(Os);const s=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function ap(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function op(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ts(s){return s!==""}function cl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(s){return s.replace(lp,hp)}const cp=new Map;function hp(s,t){let e=Nt[t];if(e===void 0){const n=cp.get(t);if(n!==void 0)e=Nt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fa(e)}const up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(s){return s.replace(up,fp)}function fp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const dp={[Bs]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function pp(s){return dp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mp={[oi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE_UV"};function gp(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mp[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const xp={[Ni]:"ENVMAP_MODE_REFRACTION"};function _p(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vp={[js]:"ENVMAP_BLENDING_MULTIPLY",[jc]:"ENVMAP_BLENDING_MIX",[th]:"ENVMAP_BLENDING_ADD"};function Mp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vp[s.combine]||"ENVMAP_BLENDING_NONE"}function Sp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pp(e),c=gp(e),u=_p(e),d=Mp(e),h=Sp(e),f=rp(e),p=ap(r),_=i.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ts).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ts).join(`
`),m.length>0&&(m+=`
`)):(g=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),m=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==hn?ip("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,ep("linearToOutputTexel",e.outputColorSpace),sp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),a=Fa(a),a=cl(a,e),a=hl(a,e),o=Fa(o),o=cl(o,e),o=hl(o,e),a=ul(a),o=ul(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=y+g+a,v=y+m+o,b=al(i,i.VERTEX_SHADER,w),T=al(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(I){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(_)||"",L=i.getShaderInfoLog(b)||"",D=i.getShaderInfoLog(T)||"",N=P.trim(),V=L.trim(),B=D.trim();let $=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,T);else{const W=ll(i,b,"vertex"),K=ll(i,T,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+W+`
`+K)}else N!==""?Ct("WebGLProgram: Program Info Log:",N):(V===""||B==="")&&(q=!1);q&&(I.diagnostics={runnable:$,programLog:N,vertexShader:{log:V,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(b),i.deleteShader(T),M=new Vs(i,_),E=op(i,_)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,J0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let yp=0;class Ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tp(t),e.set(t,n)),n}}class Tp{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function Ap(s){return s===li||s===Ws||s===Xs}function wp(s,t,e,n,i,r){const a=new Yl,o=new Ep,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function _(M,E,C,I,P,L){const D=I.fog,N=P.geometry,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||V,B),q=$&&$.mapping===tr?$.image.height:null,W=f[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Ct("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pt=K!==void 0?K.length:0;let vt=0;N.morphAttributes.position!==void 0&&(vt=1),N.morphAttributes.normal!==void 0&&(vt=2),N.morphAttributes.color!==void 0&&(vt=3);let ee,Vt,Yt,J;if(W){const ie=vn[W];ee=ie.vertexShader,Vt=ie.fragmentShader}else{ee=M.vertexShader,Vt=M.fragmentShader;const ie=o.getVertexShaderStage(M),$t=o.getFragmentShaderStage(M);o.update(M,ie,$t),Yt=ie.id,J=$t.id}const et=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),It=P.isInstancedMesh===!0,gt=P.isBatchedMesh===!0,Ot=!!M.map,ve=!!M.matcap,Bt=!!$,Xt=!!M.aoMap,ne=!!M.lightMap,kt=!!M.bumpMap&&M.wireframe===!1,le=!!M.normalMap,ye=!!M.displacementMap,ke=!!M.emissiveMap,ce=!!M.metalnessMap,ge=!!M.roughnessMap,O=M.anisotropy>0,Re=M.clearcoat>0,Zt=M.dispersion>0,A=M.retroreflectivity>0,x=M.iridescence>0,k=M.sheen>0,X=M.transmission>0,Z=O&&!!M.anisotropyMap,it=Re&&!!M.clearcoatMap,st=Re&&!!M.clearcoatNormalMap,Q=Re&&!!M.clearcoatRoughnessMap,tt=x&&!!M.iridescenceMap,rt=x&&!!M.iridescenceThicknessMap,Et=k&&!!M.sheenColorMap,ct=k&&!!M.sheenRoughnessMap,at=!!M.specularMap,Tt=!!M.specularColorMap,Rt=!!M.specularIntensityMap,Dt=X&&!!M.transmissionMap,F=X&&!!M.thicknessMap,ot=!!M.gradientMap,j=!!M.alphaMap,lt=M.alphaTest>0,dt=!!M.alphaHash,nt=!!M.extensions;let At=hn;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(At=s.toneMapping);const bt={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:Vt,defines:M.defines,customVertexShaderID:Yt,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:gt,batchingColor:gt&&P._colorsTexture!==null,instancing:It,instancingColor:It&&P.instanceColor!==null,instancingMorph:It&&P.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ot,matcap:ve,envMap:Bt,envMapMode:Bt&&$.mapping,envMapCubeUVHeight:q,aoMap:Xt,lightMap:ne,bumpMap:kt,normalMap:le,displacementMap:ye,emissiveMap:ke,normalMapObjectSpace:le&&M.normalMapType===ih,normalMapTangentSpace:le&&M.normalMapType===qs,packedNormalMap:le&&M.normalMapType===qs&&Ap(M.normalMap.format),metalnessMap:ce,roughnessMap:ge,anisotropy:O,anisotropyMap:Z,clearcoat:Re,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Q,dispersion:Zt,retroreflection:A,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:rt,sheen:k,sheenColorMap:Et,sheenRoughnessMap:ct,specularMap:at,specularColorMap:Tt,specularIntensityMap:Rt,transmission:X,transmissionMap:Dt,thicknessMap:F,gradientMap:ot,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:dt,combine:M.combine,mapUv:Ot&&p(M.map.channel),aoMapUv:Xt&&p(M.aoMap.channel),lightMapUv:ne&&p(M.lightMap.channel),bumpMapUv:kt&&p(M.bumpMap.channel),normalMapUv:le&&p(M.normalMap.channel),displacementMapUv:ye&&p(M.displacementMap.channel),emissiveMapUv:ke&&p(M.emissiveMap.channel),metalnessMapUv:ce&&p(M.metalnessMap.channel),roughnessMapUv:ge&&p(M.roughnessMap.channel),anisotropyMapUv:Z&&p(M.anisotropyMap.channel),clearcoatMapUv:it&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:ct&&p(M.sheenRoughnessMap.channel),specularMapUv:at&&p(M.specularMap.channel),specularColorMapUv:Tt&&p(M.specularColorMap.channel),specularIntensityMapUv:Rt&&p(M.specularIntensityMap.channel),transmissionMapUv:Dt&&p(M.transmissionMap.channel),thicknessMapUv:F&&p(M.thicknessMap.channel),alphaMapUv:j&&p(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(le||O),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(Ot||j),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&le===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:vt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===Jt,decodeVideoTextureEmissive:ke&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ke,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:nt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&M.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(m(E,M),y(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function m(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function w(M){const E=f[M.type];let C;if(E){const I=vn[E];C=Vh.clone(I.uniforms)}else C=M.uniforms;return C}function v(M,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new bp(s,E,M,i),c.push(C),u.set(E,C)),C}function b(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:R}}function Rp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Cp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function dl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,g,m){let y=s[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=p,y.materialVariant=a(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=g,y.group=m),t++,y}function l(h,f,p,_,g,m,y){y.reversedDepth===!0&&(g=-g);const w=o(h,f,p,_,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(h,f,p,_,g,m){const y=o(h,f,p,_,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||Cp),n.length>1&&n.sort(f||dl),i.length>1&&i.sort(f||dl)}function d(){for(let h=t,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function Pp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new pl,s.set(n,[a])):i>=r.length?(a=new pl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Ft};break;case"SpotLight":e={position:new z,direction:new z,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dp=0;function Up(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s){const t=new Ip,e=Lp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new ae,a=new ae;function o(c){let u=0,d=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,w=0,v=0,b=0,T=0,R=0,M=0,E=0,C=0;c.sort(Up);for(let P=0,L=c.length;P<L;P++){const D=c[P],N=D.color,V=D.intensity,B=D.distance;let $=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===li?$=D.shadow.map.texture:$=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*V,d+=N.g*V,h+=N.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],V);C++}else if(D.isSunLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,K=e.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=$;const pt=W.getViewportCount();for(let vt=0;vt<pt;vt++)n.sunShadowMatrix[_+vt]=W.getMatrix(vt),n.sunShadowCascade[_+vt]=W._cascadeData[vt];_+=pt,p++}n.sun[f]=q,f++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,K=e.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=q,g++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(V),q.distance=B,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[y]=q;const W=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,W.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=W.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=$,R++}y++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(N).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=q,w++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const W=D.shadow,K=e.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=D.shadow.matrix,T++}n.point[m]=q,m++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[v]=q,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==R||I.numSpotMaps!==M||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=y,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=R,I.numSpotMaps=M,I.numLightProbes=C,n.version=Dp++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const v=c[y];if(v.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),d++}else if(v.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function ml(s){const t=new Np(s),e=[],n=[],i=[];function r(h){d.camera=h,e.length=0,n.length=0,i.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ml(s),t.set(i,[o])):r>=a.length?(o=new ml(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
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
}`,zp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],kp=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],gl=new ae,Yi=new z,Gr=new z;function Gp(s,t,e){let n=new Za;const i=new Pt,r=new Pt,a=new fe,o=new $h,l=new Kh,c={},u=e.maxTextureSize,d={[ai]:He,[He]:ai,[Ke]:Ke},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Op,fragmentShader:Bp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new ze;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ue(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let m=this.type;this.render=function(T,R,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Uc&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);const E=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Dn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==this.type;L&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(N=>N.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,N=T.length;D<N;D++){const V=T[D],B=V.shadow;if(B===void 0){Ct("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const $=B.getFrameExtents();i.multiply($),r.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,B.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,B.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ji){if(V.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new un(i.x,i.y,{format:li,type:bn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new os(i.x,i.y,ln),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Fn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=de,B.map.depthTexture.magFilter=de}else V.isPointLight?(B.map=new ac(i.x),B.map.depthTexture=new Gh(i.x,Sn)):(B.map=new un(i.x,i.y),B.map.depthTexture=new os(i.x,i.y,Sn)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Fn,this.type===Bs?(B.map.depthTexture.compareFunction=q?Ya:qa,B.map.depthTexture.minFilter=Ue,B.map.depthTexture.magFilter=Ue):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=de,B.map.depthTexture.magFilter=de);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,M);for(let K=0;K<W;K++){const pt=B.getCamera(K);if(V.isPointLight){const vt=B.camera,ee=B.matrix,Vt=V.distance||vt.far;Vt!==vt.far&&(vt.far=Vt,vt.updateProjectionMatrix()),Yi.setFromMatrixPosition(V.matrixWorld),vt.position.copy(Yi),Gr.copy(vt.position),Gr.add(zp[K]),vt.up.copy(kp[K]),vt.lookAt(Gr),vt.updateMatrixWorld(),ee.makeTranslation(-Yi.x,-Yi.y,-Yi.z),gl.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(gl,vt.coordinateSystem,vt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,K),s.clear();else{K===0&&(s.setRenderTarget(B.map),s.clear());const vt=B.getViewport(K);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),P.viewport(a)}n=B.getFrustum(K),v(R,M,pt,V,this.type)}B.isPointLightShadow!==!0&&this.type===ji&&y(B,M),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,C,I)};function y(T,R){const M=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new un(i.x,i.y,{format:li,type:bn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,M,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,M,f,_,null)}function w(T,R,M,E){let C=null;const I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=M.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=C.uuid,L=R.uuid;let D=c[P];D===void 0&&(D={},c[P]=D);let N=D[L];N===void 0&&(N=C.clone(),D[L]=N,R.addEventListener("dispose",b)),C=N}if(C.visible=R.visible,C.wireframe=R.wireframe,E===ji?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const P=s.properties.get(C);P.light=M}return C}function v(T,R,M,E,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ji)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const L=t.update(T),D=T.material;if(Array.isArray(D)){const N=L.groups;for(let V=0,B=N.length;V<B;V++){const $=N[V],q=D[$.materialIndex];if(q&&q.visible){const W=w(T,q,E,C);T.onBeforeShadow(s,T,R,M,L,W,$),s.renderBufferDirect(M,null,L,W,T,$),T.onAfterShadow(s,T,R,M,L,W,$)}}}else if(D.visible){const N=w(T,D,E,C);T.onBeforeShadow(s,T,R,M,L,N,null),s.renderBufferDirect(M,null,L,N,T,null),T.onAfterShadow(s,T,R,M,L,N,null)}}const P=T.children;for(let L=0,D=P.length;L<D;L++)v(P[L],R,M,E,C)}function b(T){T.target.removeEventListener("dispose",b);for(const M in c){const E=c[M],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Hp(s,t){function e(){let F=!1;const ot=new fe;let j=null;const lt=new fe(0,0,0,0);return{setMask:function(dt){j!==dt&&!F&&(s.colorMask(dt,dt,dt,dt),j=dt)},setLocked:function(dt){F=dt},setClear:function(dt,nt,At,bt,ie){ie===!0&&(dt*=bt,nt*=bt,At*=bt),ot.set(dt,nt,At,bt),lt.equals(ot)===!1&&(s.clearColor(dt,nt,At,bt),lt.copy(ot))},reset:function(){F=!1,j=null,lt.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,j=null,lt=null,dt=null;return{setReversed:function(nt){if(ot!==nt){const At=t.get("EXT_clip_control");nt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=nt;const bt=dt;dt=null,this.setClear(bt)}},getReversed:function(){return ot},setTest:function(nt){nt?et(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(nt){j!==nt&&!F&&(s.depthMask(nt),j=nt)},setFunc:function(nt){if(ot&&(nt=mh[nt]),lt!==nt){switch(nt){case Zr:s.depthFunc(s.NEVER);break;case Jr:s.depthFunc(s.ALWAYS);break;case Qr:s.depthFunc(s.LESS);break;case ns:s.depthFunc(s.LEQUAL);break;case jr:s.depthFunc(s.EQUAL);break;case ta:s.depthFunc(s.GEQUAL);break;case ea:s.depthFunc(s.GREATER);break;case na:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=nt}},setLocked:function(nt){F=nt},setClear:function(nt){dt!==nt&&(dt=nt,ot&&(nt=1-nt),s.clearDepth(nt))},reset:function(){F=!1,j=null,lt=null,dt=null,ot=!1}}}function i(){let F=!1,ot=null,j=null,lt=null,dt=null,nt=null,At=null,bt=null,ie=null;return{setTest:function($t){F||($t?et(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function($t){ot!==$t&&!F&&(s.stencilMask($t),ot=$t)},setFunc:function($t,en,pn){(j!==$t||lt!==en||dt!==pn)&&(s.stencilFunc($t,en,pn),j=$t,lt=en,dt=pn)},setOp:function($t,en,pn){(nt!==$t||At!==en||bt!==pn)&&(s.stencilOp($t,en,pn),nt=$t,At=en,bt=pn)},setLocked:function($t){F=$t},setClear:function($t){ie!==$t&&(s.clearStencil($t),ie=$t)},reset:function(){F=!1,ot=null,j=null,lt=null,dt=null,nt=null,At=null,bt=null,ie=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,w=null,v=null,b=null,T=null,R=null,M=new Ft(0,0,0),E=0,C=!1,I=null,P=null,L=null,D=null,N=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=$>=2);let W=null,K={};const pt=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),ee=new fe().fromArray(pt),Vt=new fe().fromArray(vt);function Yt(F,ot,j,lt){const dt=new Uint8Array(4),nt=s.createTexture();s.bindTexture(F,nt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<j;At++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(ot+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return nt}const J={};J[s.TEXTURE_2D]=Yt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(ns),kt(!1),le(xo),et(s.CULL_FACE),Xt(Dn);function et(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function _t(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function It(F,ot){return h[F]!==ot?(s.bindFramebuffer(F,ot),h[F]=ot,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ot),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function gt(F,ot){let j=p,lt=!1;if(F){j=f.get(ot),j===void 0&&(j=[],f.set(ot,j));const dt=F.textures;if(j.length!==dt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,At=dt.length;nt<At;nt++)j[nt]=s.COLOR_ATTACHMENT0+nt;j.length=dt.length,lt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,lt=!0);lt&&s.drawBuffers(j)}function Ot(F){return _!==F?(s.useProgram(F),_=F,!0):!1}const ve={[Pi]:s.FUNC_ADD,[Fc]:s.FUNC_SUBTRACT,[Oc]:s.FUNC_REVERSE_SUBTRACT};ve[Bc]=s.MIN,ve[zc]=s.MAX;const Bt={[kc]:s.ZERO,[Gc]:s.ONE,[Hc]:s.SRC_COLOR,[Rl]:s.SRC_ALPHA,[$c]:s.SRC_ALPHA_SATURATE,[qc]:s.DST_COLOR,[Wc]:s.DST_ALPHA,[Vc]:s.ONE_MINUS_SRC_COLOR,[Cl]:s.ONE_MINUS_SRC_ALPHA,[Yc]:s.ONE_MINUS_DST_COLOR,[Xc]:s.ONE_MINUS_DST_ALPHA,[Kc]:s.CONSTANT_COLOR,[Zc]:s.ONE_MINUS_CONSTANT_COLOR,[Jc]:s.CONSTANT_ALPHA,[Qc]:s.ONE_MINUS_CONSTANT_ALPHA};function Xt(F,ot,j,lt,dt,nt,At,bt,ie,$t){if(F===Dn){g===!0&&(_t(s.BLEND),g=!1);return}if(g===!1&&(et(s.BLEND),g=!0),F!==Nc){if(F!==m||$t!==C){if((y!==Pi||b!==Pi)&&(s.blendEquation(s.FUNC_ADD),y=Pi,b=Pi),$t)switch(F){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _o:s.blendFunc(s.ONE,s.ONE);break;case vo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",F);break}else switch(F){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _o:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vo:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mo:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",F);break}w=null,v=null,T=null,R=null,M.set(0,0,0),E=0,m=F,C=$t}return}dt=dt||ot,nt=nt||j,At=At||lt,(ot!==y||dt!==b)&&(s.blendEquationSeparate(ve[ot],ve[dt]),y=ot,b=dt),(j!==w||lt!==v||nt!==T||At!==R)&&(s.blendFuncSeparate(Bt[j],Bt[lt],Bt[nt],Bt[At]),w=j,v=lt,T=nt,R=At),(bt.equals(M)===!1||ie!==E)&&(s.blendColor(bt.r,bt.g,bt.b,ie),M.copy(bt),E=ie),m=F,C=!1}function ne(F,ot){F.side===Ke?_t(s.CULL_FACE):et(s.CULL_FACE);let j=F.side===He;ot&&(j=!j),kt(j),F.blending===es&&F.transparent===!1?Xt(Dn):Xt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const lt=F.stencilWrite;o.setTest(lt),lt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){I!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),I=F)}function le(F){F!==Lc?(et(s.CULL_FACE),F!==P&&(F===xo?s.cullFace(s.BACK):F===Dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),P=F}function ye(F){F!==L&&(B&&s.lineWidth(F),L=F)}function ke(F,ot,j){F?(et(s.POLYGON_OFFSET_FILL),(D!==ot||N!==j)&&(D=ot,N=j,a.getReversed()&&(ot=-ot),s.polygonOffset(ot,j))):_t(s.POLYGON_OFFSET_FILL)}function ce(F){F?et(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function ge(F){F===void 0&&(F=s.TEXTURE0+V-1),W!==F&&(s.activeTexture(F),W=F)}function O(F,ot,j){j===void 0&&(W===null?j=s.TEXTURE0+V-1:j=W);let lt=K[j];lt===void 0&&(lt={type:void 0,texture:void 0},K[j]=lt),(lt.type!==F||lt.texture!==ot)&&(W!==j&&(s.activeTexture(j),W=j),s.bindTexture(F,ot||J[F]),lt.type=F,lt.texture=ot)}function Re(){const F=K[W];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Zt(){try{s.compressedTexImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function x(){try{s.texSubImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function it(){try{s.texStorage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function st(){try{s.texStorage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function Q(){try{s.texImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function tt(){try{s.texImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function rt(F){return d[F]!==void 0?d[F]:s.getParameter(F)}function Et(F,ot){d[F]!==ot&&(s.pixelStorei(F,ot),d[F]=ot)}function ct(F){ee.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ee.copy(F))}function at(F){Vt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Vt.copy(F))}function Tt(F,ot){let j=c.get(ot);j===void 0&&(j=new WeakMap,c.set(ot,j));let lt=j.get(F);lt===void 0&&(lt=s.getUniformBlockIndex(ot,F.name),j.set(F,lt))}function Rt(F,ot){const lt=c.get(ot).get(F);l.get(ot)!==lt&&(s.uniformBlockBinding(ot,lt,F.__bindingPointIndex),l.set(ot,lt))}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},W=null,K={},h={},f=new WeakMap,p=[],_=null,g=!1,m=null,y=null,w=null,v=null,b=null,T=null,R=null,M=new Ft(0,0,0),E=0,C=!1,I=null,P=null,L=null,D=null,N=null,ee.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:_t,bindFramebuffer:It,drawBuffers:gt,useProgram:Ot,setBlending:Xt,setMaterial:ne,setFlipSided:kt,setCullFace:le,setLineWidth:ye,setPolygonOffset:ke,setScissorTest:ce,activeTexture:ge,bindTexture:O,unbindTexture:Re,compressedTexImage2D:Zt,compressedTexImage3D:A,texImage2D:Q,texImage3D:tt,pixelStorei:Et,getParameter:rt,updateUBOMapping:Tt,uniformBlockBinding:Rt,texStorage2D:it,texStorage3D:st,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:ct,viewport:at,reset:Dt}}function Vp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):Ks("canvas")}function g(A,x,k){let X=1;const Z=Zt(A);if((Z.width>k||Z.height>k)&&(X=k/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const it=Math.floor(X*Z.width),st=Math.floor(X*Z.height);h===void 0&&(h=_(it,st));const Q=x?_(it,st):h;return Q.width=it,Q.height=st,Q.getContext("2d").drawImage(A,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+it+"x"+st+")."),Q}else return"data"in A&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,x,k,X,Z,it=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st;X&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8),k===s.UNSIGNED_SHORT&&st&&(Q=st.R16_EXT),k===s.SHORT&&st&&(Q=st.R16_SNORM_EXT)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),x===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8),k===s.UNSIGNED_SHORT&&st&&(Q=st.RG16_EXT),k===s.SHORT&&st&&(Q=st.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RG8UI),k===s.UNSIGNED_SHORT&&(Q=s.RG16UI),k===s.UNSIGNED_INT&&(Q=s.RG32UI),k===s.BYTE&&(Q=s.RG8I),k===s.SHORT&&(Q=s.RG16I),k===s.INT&&(Q=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),k===s.UNSIGNED_INT&&(Q=s.RGB32UI),k===s.BYTE&&(Q=s.RGB8I),k===s.SHORT&&(Q=s.RGB16I),k===s.INT&&(Q=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),k===s.UNSIGNED_INT&&(Q=s.RGBA32UI),k===s.BYTE&&(Q=s.RGBA8I),k===s.SHORT&&(Q=s.RGBA16I),k===s.INT&&(Q=s.RGBA32I)),x===s.RGB&&(k===s.UNSIGNED_SHORT&&st&&(Q=st.RGB16_EXT),k===s.SHORT&&st&&(Q=st.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),x===s.RGBA){const tt=it?$s:Gt.getTransfer(Z);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=tt===Jt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&st&&(Q=st.RGBA16_EXT),k===s.SHORT&&st&&(Q=st.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(A,x){let k;return A?x===null||x===Sn||x===rs?k=s.DEPTH24_STENCIL8:x===ln?k=s.DEPTH32F_STENCIL8:x===ss&&(k=s.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Sn||x===rs?k=s.DEPTH_COMPONENT24:x===ln?k=s.DEPTH_COMPONENT32F:x===ss&&(k=s.DEPTH_COMPONENT16),k}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==de&&A.minFilter!==Ue?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),E(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function M(A){const x=A.target;x.removeEventListener("dispose",M),I(x)}function E(A){const x=n.get(A);if(x.__webglInit===void 0)return;const k=A.source,X=f.get(k);if(X){const Z=X[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(A),Object.keys(X).length===0&&f.delete(k)}n.remove(A)}function C(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const k=A.source,X=f.get(k);delete X[x.__cacheKey],a.memory.textures--}function I(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Z=0;Z<x.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)s.deleteFramebuffer(x.__webglFramebuffer[X]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=A.textures;for(let X=0,Z=k.length;X<Z;X++){const it=n.get(k[X]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(A)}let P=0;function L(){P=0}function D(){return P}function N(A){P=A}function V(){const A=P;return A>=i.maxTextures&&Ct("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function B(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const k=n.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const X=A.image;if(X===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}function q(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_t(k,A,x);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}function W(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){_t(k,A,x);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}function K(A,x){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){It(k,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}const pt={[is]:s.REPEAT,[Ln]:s.CLAMP_TO_EDGE,[ia]:s.MIRRORED_REPEAT},vt={[de]:s.NEAREST,[eh]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Ue]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},ee={[rh]:s.NEVER,[hh]:s.ALWAYS,[ah]:s.LESS,[qa]:s.LEQUAL,[oh]:s.EQUAL,[Ya]:s.GEQUAL,[lh]:s.GREATER,[ch]:s.NOTEQUAL};function Vt(A,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ue||x.magFilter===hr||x.magFilter===ms||x.magFilter===ii||x.minFilter===Ue||x.minFilter===hr||x.minFilter===ms||x.minFilter===ii)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,pt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,pt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,pt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,vt[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===de||x.minFilter!==ms&&x.minFilter!==ii||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const it=B(x);if(it!==A.__cacheKey){Z[it]===void 0&&(Z[it]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[it].usedTimes++;const st=Z[A.__cacheKey];st!==void 0&&(Z[A.__cacheKey].usedTimes--,st.usedTimes===0&&C(x)),A.__cacheKey=it,A.__webglTexture=Z[it].texture}return k}function J(A,x,k){return Math.floor(Math.floor(A/k)/x)}function et(A,x,k,X){const it=A.updateRanges;if(it.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,X,x.data);else{it.sort((Et,ct)=>Et.start-ct.start);let st=0;for(let Et=1;Et<it.length;Et++){const ct=it[st],at=it[Et],Tt=ct.start+ct.count,Rt=J(at.start,x.width,4),Dt=J(ct.start,x.width,4);at.start<=Tt+1&&Rt===Dt&&J(at.start+at.count-1,x.width,4)===Rt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;const Q=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Et=0,ct=it.length;Et<ct;Et++){const at=it[Et],Tt=Math.floor(at.start/4),Rt=Math.ceil(at.count/4),Dt=Tt%x.width,F=Math.floor(Tt/x.width),ot=Rt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Dt,F,ot,j,k,X,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,rt)}}function _t(A,x,k){let X=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=s.TEXTURE_3D);const Z=Yt(A,x),it=x.source;e.bindTexture(X,A.__webglTexture,s.TEXTURE0+k);const st=n.get(it);if(it.version!==st.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=Gt.getPrimaries(Gt.workingColorSpace),lt=x.colorSpace===Yn?null:Gt.getPrimaries(x.colorSpace),dt=x.colorSpace===Yn||j===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=g(x.image,!1,i.maxTextureSize);tt=Re(x,tt);const rt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type);let ct=v(x.internalFormat,rt,Et,x.normalized,x.colorSpace,x.isVideoTexture);Vt(X,x);let at;const Tt=x.mipmaps,Rt=x.isVideoTexture!==!0,Dt=st.__version===void 0||Z===!0,F=it.dataReady,ot=T(x,tt);if(x.isDepthTexture)ct=b(x.format===si,x.type),Dt&&(Rt?e.texStorage2D(s.TEXTURE_2D,1,ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,ct,tt.width,tt.height,0,rt,Et,null));else if(x.isDataTexture)if(Tt.length>0){Rt&&Dt&&e.texStorage2D(s.TEXTURE_2D,ot,ct,Tt[0].width,Tt[0].height);for(let j=0,lt=Tt.length;j<lt;j++)at=Tt[j],Rt?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,at.width,at.height,rt,Et,at.data):e.texImage2D(s.TEXTURE_2D,j,ct,at.width,at.height,0,rt,Et,at.data);x.generateMipmaps=!1}else Rt?(Dt&&e.texStorage2D(s.TEXTURE_2D,ot,ct,tt.width,tt.height),F&&et(x,tt,rt,Et)):e.texImage2D(s.TEXTURE_2D,0,ct,tt.width,tt.height,0,rt,Et,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Rt&&Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,ct,Tt[0].width,Tt[0].height,tt.depth);for(let j=0,lt=Tt.length;j<lt;j++)if(at=Tt[j],x.format!==cn)if(rt!==null)if(Rt){if(F)if(x.layerUpdates.size>0){const dt=$o(at.width,at.height,x.format,x.type);for(const nt of x.layerUpdates){const At=at.data.subarray(nt*dt/at.data.BYTES_PER_ELEMENT,(nt+1)*dt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,nt,at.width,at.height,1,rt,At)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,at.width,at.height,tt.depth,rt,at.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,ct,at.width,at.height,tt.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,at.width,at.height,tt.depth,rt,Et,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,ct,at.width,at.height,tt.depth,0,rt,Et,at.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Rt&&Dt&&e.texStorage2D(s.TEXTURE_2D,ot,ct,Tt[0].width,Tt[0].height);for(let j=0,lt=Tt.length;j<lt;j++)at=Tt[j],x.format!==cn?rt!==null?Rt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(s.TEXTURE_2D,j,ct,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,at.width,at.height,rt,Et,at.data):e.texImage2D(s.TEXTURE_2D,j,ct,at.width,at.height,0,rt,Et,at.data)}else if(x.isDataArrayTexture)if(Rt){if(Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,ct,tt.width,tt.height,tt.depth),F)if(x.layerUpdates.size>0){const j=$o(tt.width,tt.height,x.format,x.type);for(const lt of x.layerUpdates){const dt=tt.data.subarray(lt*j/tt.data.BYTES_PER_ELEMENT,(lt+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,tt.width,tt.height,1,rt,Et,dt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,rt,Et,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,tt.width,tt.height,tt.depth,0,rt,Et,tt.data);else if(x.isData3DTexture)Rt?(Dt&&e.texStorage3D(s.TEXTURE_3D,ot,ct,tt.width,tt.height,tt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,rt,Et,tt.data)):e.texImage3D(s.TEXTURE_3D,0,ct,tt.width,tt.height,tt.depth,0,rt,Et,tt.data);else if(x.isFramebufferTexture){if(Dt)if(Rt)e.texStorage2D(s.TEXTURE_2D,ot,ct,tt.width,tt.height);else{let j=tt.width,lt=tt.height;for(let dt=0;dt<ot;dt++)e.texImage2D(s.TEXTURE_2D,dt,ct,j,lt,0,rt,Et,null),j>>=1,lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),d.add(x),j.onpaint=lt=>{const dt=lt.changedElements;for(const nt of d)dt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{const dt=s.RGBA,nt=s.RGBA,At=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,dt,nt,At,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Rt&&Dt){const j=Zt(Tt[0]);e.texStorage2D(s.TEXTURE_2D,ot,ct,j.width,j.height)}for(let j=0,lt=Tt.length;j<lt;j++)at=Tt[j],Rt?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,rt,Et,at):e.texImage2D(s.TEXTURE_2D,j,ct,rt,Et,at);x.generateMipmaps=!1}else if(Rt){if(Dt){const j=Zt(tt);e.texStorage2D(s.TEXTURE_2D,ot,ct,j.width,j.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,Et,tt)}else e.texImage2D(s.TEXTURE_2D,0,ct,rt,Et,tt);m(x)&&y(X),st.__version=it.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function It(A,x,k){if(x.image.length!==6)return;const X=Yt(A,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const it=n.get(Z);if(Z.version!==it.__version||X===!0){e.activeTexture(s.TEXTURE0+k);const st=Gt.getPrimaries(Gt.workingColorSpace),Q=x.colorSpace===Yn?null:Gt.getPrimaries(x.colorSpace),tt=x.colorSpace===Yn||st===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const rt=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let nt=0;nt<6;nt++)!rt&&!Et?ct[nt]=g(x.image[nt],!0,i.maxCubemapSize):ct[nt]=Et?x.image[nt].image:x.image[nt],ct[nt]=Re(x,ct[nt]);const at=ct[0],Tt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),Dt=v(x.internalFormat,Tt,Rt,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,ot=it.__version===void 0||X===!0,j=Z.dataReady;let lt=T(x,at);Vt(s.TEXTURE_CUBE_MAP,x);let dt;if(rt){F&&ot&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Dt,at.width,at.height);for(let nt=0;nt<6;nt++){dt=ct[nt].mipmaps;for(let At=0;At<dt.length;At++){const bt=dt[At];x.format!==cn?Tt!==null?F?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Dt,bt.width,bt.height,0,bt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,bt.width,bt.height,Tt,Rt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,Dt,bt.width,bt.height,0,Tt,Rt,bt.data)}}}else{if(dt=x.mipmaps,F&&ot){dt.length>0&&lt++;const nt=Zt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Dt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Et){F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ct[nt].width,ct[nt].height,Tt,Rt,ct[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Dt,ct[nt].width,ct[nt].height,0,Tt,Rt,ct[nt].data);for(let At=0;At<dt.length;At++){const ie=dt[At].image[nt].image;F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,ie.width,ie.height,Tt,Rt,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Dt,ie.width,ie.height,0,Tt,Rt,ie.data)}}else{F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt,Rt,ct[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Dt,Tt,Rt,ct[nt]);for(let At=0;At<dt.length;At++){const bt=dt[At];F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,Tt,Rt,bt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,Dt,Tt,Rt,bt.image[nt])}}}m(x)&&y(s.TEXTURE_CUBE_MAP),it.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function gt(A,x,k,X,Z,it){const st=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),tt=v(k.internalFormat,st,Q,k.normalized,k.colorSpace),rt=n.get(x),Et=n.get(k);if(Et.__renderTarget=x,!rt.__hasExternalTextures){const ct=Math.max(1,x.width>>it),at=Math.max(1,x.height>>it);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,it,tt,ct,at,x.depth,0,st,Q,null):e.texImage2D(Z,it,tt,ct,at,0,st,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,Et.__webglTexture,0,ce(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,Et.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(A,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const X=x.depthTexture,Z=X&&X.isDepthTexture?X.type:null,it=b(x.stencilBuffer,Z),st=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce(x),it,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce(x),it,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,it,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,A)}else{const X=x.textures;for(let Z=0;Z<X.length;Z++){const it=X[Z],st=r.convert(it.format,it.colorSpace),Q=r.convert(it.type),tt=v(it.internalFormat,st,Q,it.normalized,it.colorSpace);ge(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce(x),tt,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce(x),tt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,tt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(A,x,k){const X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,x.depthTexture);const rt=r.convert(x.depthTexture.format),Et=r.convert(x.depthTexture.type);let ct;x.depthTexture.format===Fn?ct=s.DEPTH_COMPONENT24:x.depthTexture.format===si&&(ct=s.DEPTH24_STENCIL8);for(let at=0;at<6;at++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,x.width,x.height,0,rt,Et,null)}}else $(x.depthTexture,0);const it=Z.__webglTexture,st=ce(x),Q=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,tt=x.depthTexture.format===si?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fn)ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,it,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,it,0);else if(x.depthTexture.format===si)ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,it,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(A){const x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ve(x.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?ve(x.__webglFramebuffer[0],A,0):ve(x.__webglFramebuffer,A,0)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=s.createRenderbuffer(),Ot(x.__webglDepthbuffer[X],A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,it)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ot(x.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,it)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(A,x,k){const X=n.get(A);x!==void 0&&gt(X.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Bt(A)}function ne(A){const x=A.texture,k=n.get(A),X=n.get(x);A.addEventListener("dispose",M);const Z=A.textures,it=A.isWebGLCubeRenderTarget===!0,st=Z.length>1;if(st||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=x.version,a.memory.textures++),it){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let tt=0;tt<x.mipmaps.length;tt++)k.__webglFramebuffer[Q][tt]=s.createFramebuffer()}else k.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)k.__webglFramebuffer[Q]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(st)for(let Q=0,tt=Z.length;Q<tt;Q++){const rt=n.get(Z[Q]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const tt=Z[Q];k.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const rt=r.convert(tt.format,tt.colorSpace),Et=r.convert(tt.type),ct=v(tt.internalFormat,rt,Et,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),at=ce(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,ct,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)gt(k.__webglFramebuffer[Q][tt],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else gt(k.__webglFramebuffer[Q],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Q=0,tt=Z.length;Q<tt;Q++){const rt=Z[Q],Et=n.get(rt);let ct=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Et.__webglTexture),Vt(ct,rt),gt(k.__webglFramebuffer,A,rt,s.COLOR_ATTACHMENT0+Q,ct,0),m(rt)&&y(ct)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,X.__webglTexture),Vt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)gt(k.__webglFramebuffer[tt],A,x,s.COLOR_ATTACHMENT0,Q,tt);else gt(k.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Q,0);m(x)&&y(Q),e.unbindTexture()}A.depthBuffer&&Bt(A)}function kt(A){const x=A.textures;for(let k=0,X=x.length;k<X;k++){const Z=x[k];if(m(Z)){const it=w(A),st=n.get(Z).__webglTexture;e.bindTexture(it,st),y(it),e.unbindTexture()}}}const le=[],ye=[];function ke(A){if(A.samples>0){if(ge(A)===!1){const x=A.textures,k=A.width,X=A.height;let Z=s.COLOR_BUFFER_BIT;const it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=n.get(A),Q=x.length>1;if(Q)for(let rt=0;rt<x.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<x.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const Et=n.get(x[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,Z,s.NEAREST),l===!0&&(le.length=0,ye.length=0,le.push(s.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(le.push(it),ye.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let rt=0;rt<x.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const Et=n.get(x[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ce(A){return Math.min(i.maxSamples,A.samples)}function ge(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Re(A,x){const k=A.colorSpace,X=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ys&&k!==Yn&&(Gt.getTransfer(k)===Jt?(X!==cn||Z!==Ze)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",k)),x}function Zt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.getTextureUnits=D,this.setTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Xt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wp(s,t){function e(n,i=Yn){let r;const a=Gt.getTransfer(i);if(n===Ze)return s.UNSIGNED_BYTE;if(n===ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return s.BYTE;if(n===zl)return s.SHORT;if(n===ss)return s.UNSIGNED_SHORT;if(n===za)return s.INT;if(n===Sn)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===bn)return s.HALF_FLOAT;if(n===Hl)return s.ALPHA;if(n===Vl)return s.RGB;if(n===cn)return s.RGBA;if(n===Fn)return s.DEPTH_COMPONENT;if(n===si)return s.DEPTH_STENCIL;if(n===Ha)return s.RED;if(n===Va)return s.RED_INTEGER;if(n===li)return s.RG;if(n===Wa)return s.RG_INTEGER;if(n===Xa)return s.RGBA_INTEGER;if(n===zs||n===ks||n===Gs||n===Hs)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===aa||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ca||n===ha||n===ua||n===fa||n===Ws||n===da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===la||n===ca)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ua)return r.COMPRESSED_R11_EAC;if(n===fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ws)return r.COMPRESSED_RG11_EAC;if(n===da)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===Ma||n===Sa||n===ba||n===ya||n===Ea||n===Ta||n===Aa||n===wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ia||n===La||n===Xs||n===Da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
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

}`;class Yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new tc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:Xp,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends hi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Yp,m={},y=e.getContextAttributes();let w=null,v=null;const b=[],T=[],R=new Pt;let M=null,E=null;const C=new $e;C.viewport=new fe;const I=new $e;I.viewport=new fe;const P=[C,I],L=new eu;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=b[J];return et===void 0&&(et=new vr,b[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=b[J];return et===void 0&&(et=new vr,b[J]=et),et.getGripSpace()},this.getHand=function(J){let et=b[J];return et===void 0&&(et=new vr,b[J]=et),et.getHandSpace()};function V(J){const et=T.indexOf(J.inputSource);if(et===-1)return;const _t=b[et];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",$);for(let J=0;J<b.length;J++){const et=T[J];et!==null&&(T[J]=null,b[J].disconnect(et))}D=null,N=null,g.reset();for(const J in m)delete m[J];if(t.setRenderTarget(w),f=null,h=null,d=null,i=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(R.width,R.height,!1),E!==null){const J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",B),i.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,It=null,gt=null;y.depth&&(gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?si:Fn,It=y.stencil?rs:Sn);const Ot={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ot),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new un(h.textureWidth,h.textureHeight,{format:cn,type:Ze,depthTexture:new os(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new un(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let et=0;et<J.removed.length;et++){const _t=J.removed[et],It=T.indexOf(_t);It>=0&&(T[It]=null,b[It].disconnect(_t))}for(let et=0;et<J.added.length;et++){const _t=J.added[et];let It=T.indexOf(_t);if(It===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=T.length){T.push(_t),It=Ot;break}else if(T[Ot]===null){T[Ot]=_t,It=Ot;break}if(It===-1)break}const gt=b[It];gt&&gt.connect(_t)}}const q=new z,W=new z;function K(J,et,_t){q.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(_t.matrixWorld);const It=q.distanceTo(W),gt=et.projectionMatrix.elements,Ot=_t.projectionMatrix.elements,ve=gt[14]/(gt[10]-1),Bt=gt[14]/(gt[10]+1),Xt=(gt[9]+1)/gt[5],ne=(gt[9]-1)/gt[5],kt=(gt[8]-1)/gt[0],le=(Ot[8]+1)/Ot[0],ye=ve*kt,ke=ve*le,ce=It/(-kt+le),ge=ce*-kt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(ce),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),gt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const O=ve+ce,Re=Bt+ce,Zt=ye-ge,A=ke+(It-ge),x=Xt*Bt/Re*O,k=ne*Bt/Re*O;J.projectionMatrix.makePerspective(Zt,A,x,k,O,Re),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pt(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let et=J.near,_t=J.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),L.near=I.near=C.near=et,L.far=I.far=C.far=_t,(D!==L.near||N!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,N=L.far),L.layers.mask=J.layers.mask|6,C.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const It=J.parent,gt=L.cameras;pt(L,It);for(let Ot=0;Ot<gt.length;Ot++)pt(gt[Ot],It);gt.length===2?K(L,C,I):L.projectionMatrix.copy(C.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),vt(J,L,It)};function vt(J,et,_t){_t===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ua*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let ee=null;function Vt(J,et){if(u=et.getViewerPose(c||a),p=et,u!==null){const _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let It=!1;_t.length!==L.cameras.length&&(L.cameras.length=0,It=!0);for(let Bt=0;Bt<_t.length;Bt++){const Xt=_t[Bt];let ne=null;if(f!==null)ne=f.getViewport(Xt);else{const le=d.getViewSubImage(h,Xt);ne=le.viewport,Bt===0&&(t.setRenderTargetTextures(v,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(v))}let kt=P[Bt];kt===void 0&&(kt=new $e,kt.layers.enable(Bt),kt.viewport=new fe,P[Bt]=kt),kt.matrix.fromArray(Xt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Xt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ne.x,ne.y,ne.width,ne.height),Bt===0&&(L.matrix.copy(kt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),It===!0&&L.cameras.push(kt)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Bt=d.getDepthInformation(_t[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,i.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<_t.length;Bt++){const Xt=_t[Bt].camera;if(Xt){let ne=m[Xt];ne||(ne=new tc,m[Xt]=ne);const kt=d.getCameraImage(Xt);ne.sourceTexture=kt}}}}for(let _t=0;_t<b.length;_t++){const It=T[_t],gt=b[_t];It!==null&&gt!==void 0&&gt.update(It,et,c||a)}ee&&ee(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}const Yt=new sc;Yt.setAnimationLoop(Vt),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const Kp=new ae,uc=new Lt;uc.set(-1,0,0,0,1,0,0,0,1);function Zp(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ec(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===He&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===He&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),w=y.envMap,v=y.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(uc),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const T=b.program;n.uniformBlockBinding(v,T)}function c(v,b){let T=i[v.id];T===void 0&&(g(v),T=u(v),i[v.id]=T,v.addEventListener("dispose",y));const R=b.program;n.updateUBOMapping(v,R);const M=t.render.frame;r[v.id]!==M&&(h(v),r[v.id]=M)}function u(v){const b=d();v.__bindingPointIndex=b;const T=s.createBuffer(),R=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=i[v.id],T=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,E=T.length;M<E;M++){const C=T[M];if(Array.isArray(C))for(let I=0,P=C.length;I<P;I++)f(C[I],M,I,R);else f(C,M,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,T,R){if(_(v,b,T,R)===!0){const M=v.__offset,E=v.value;if(Array.isArray(E)){let C=0;for(let I=0;I<E.length;I++){const P=E[I],L=m(P);p(P,v.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function p(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function _(v,b,T,R){const M=v.value,E=b+"_"+T;if(R[E]===void 0)return typeof M=="number"||typeof M=="boolean"?R[E]=M:ArrayBuffer.isView(M)?R[E]=M.slice():R[E]=M.clone(),!0;{const C=R[E];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return R[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(v){const b=v.uniforms;let T=0;const R=16;for(let E=0,C=b.length;E<C;E++){const I=Array.isArray(b[E])?b[E]:[b[E]];for(let P=0,L=I.length;P<L;P++){const D=I[P],N=Array.isArray(D.value)?D.value:[D.value];for(let V=0,B=N.length;V<B;V++){const $=N[V],q=m($),W=T%R,K=W%q.boundary,pt=W+K;T+=K,pt!==0&&R-pt<q.storage&&(T+=R-pt),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=q.storage}}}const M=T%R;return M>0&&(T+=R-M),v.__size=T,v.__cache={},this}function m(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){const b=v.target;b.removeEventListener("dispose",y);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}const Qp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function jp(){return xn===null&&(xn=new Jl(Qp,16,16,li,bn),xn.name="DFG_LUT",xn.minFilter=Ue,xn.magFilter=Ue,xn.wrapS=Ln,xn.wrapT=Ln,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class tm{constructor(t={}){const{canvas:e=dh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ze}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([Xa,Wa,Va]),m=new Set([Ze,Sn,ss,rs,ka,Ga]),y=new Uint32Array(4),w=new Int32Array(4),v=new z;let b=null,T=null;const R=[],M=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,P=null,L=null,D=null,N=null;this._outputColorSpace=we;let V=0,B=0,$=null,q=-1,W=null;const K=new fe,pt=new fe;let vt=null;const ee=new Ft(0);let Vt=0,Yt=e.width,J=e.height,et=1,_t=null,It=null;const gt=new fe(0,0,Yt,J),Ot=new fe(0,0,Yt,J);let ve=!1;const Bt=new Za;let Xt=!1,ne=!1;const kt=new ae,le=new z,ye=new fe,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function ge(){return $===null?et:1}let O=n;function Re(S,U){return e.getContext(S,U)}let Zt,A,x,k,X,Z,it,st,Q,tt,rt,Et,ct,at,Tt,Rt,Dt,F,ot,j,lt,dt,nt;try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",en,!1),O===null){const U="webgl2";if(O=Re(U,S),O===null)throw Re(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(S){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",en,!1),qt("WebGLRenderer: "+S.message),S}function At(){Zt=new jd(O),Zt.init(),lt=new Wp(O,Zt),A=new Vd(O,Zt,t,lt),x=new Hp(O,Zt),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),L=O.createFramebuffer(),D=O.createFramebuffer(),N=O.createFramebuffer(),k=new n0(O),X=new Rp,Z=new Vp(O,Zt,x,X,A,lt,k),it=new Qd(C),st=new iu(O),dt=new Gd(O,st),Q=new t0(O,st,k,dt),tt=new s0(O,Q,st,dt,k),F=new i0(O,A,Z),Tt=new Wd(X),rt=new wp(C,it,Zt,A,dt,Tt),Et=new Zp(C,X),ct=new Pp,at=new Fp(Zt),Dt=new kd(C,it,x,tt,p,l),Rt=new Gp(C,tt,A),nt=new Jp(O,k,A,x),ot=new Hd(O,Zt,k),j=new e0(O,Zt,k),k.programs=rt.programs,C.capabilities=A,C.extensions=Zt,C.properties=X,C.renderLists=ct,C.shadowMap=Rt,C.state=x,C.info=k}_!==Ze&&(E=new a0(_,e.width,e.height,o,i,r));const bt=new $p(C,O);this.xr=bt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=Zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(Yt,J,!1))},this.getSize=function(S){return S.set(Yt,J)},this.setSize=function(S,U,Y=!0){if(bt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=S,J=U,e.width=Math.floor(S*et),e.height=Math.floor(U*et),Y===!0&&(e.style.width=S+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Yt*et,J*et).floor()},this.setDrawingBufferSize=function(S,U,Y){Yt=S,J=U,et=Y,e.width=Math.floor(S*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Ze){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(K)},this.getViewport=function(S){return S.copy(gt)},this.setViewport=function(S,U,Y,G){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,U,Y,G),x.viewport(K.copy(gt).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,U,Y,G){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,U,Y,G),x.scissor(pt.copy(Ot).multiplyScalar(et).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){x.setScissorTest(ve=S)},this.setOpaqueSort=function(S){_t=S},this.setTransparentSort=function(S){It=S},this.getClearColor=function(S){return S.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,Y=!0){let G=0;if(S){let H=!1;if($!==null){const ft=$.texture.format;H=g.has(ft)}if(H){const ft=$.texture.type,xt=m.has(ft),ut=Dt.getClearColor(),Mt=Dt.getClearAlpha(),yt=ut.r,Ut=ut.g,zt=ut.b;xt?(y[0]=yt,y[1]=Ut,y[2]=zt,y[3]=Mt,O.clearBufferuiv(O.COLOR,0,y)):(w[0]=yt,w[1]=Ut,w[2]=zt,w[3]=Mt,O.clearBufferiv(O.COLOR,0,w))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",en,!1),Dt.dispose(),ct.dispose(),at.dispose(),X.dispose(),it.dispose(),tt.dispose(),dt.dispose(),nt.dispose(),rt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",oo),bt.removeEventListener("sessionend",lo),Zn.stop()};function ie(S){S.preventDefault(),yo("WebGLRenderer: Context Lost."),I=!0}function $t(){yo("WebGLRenderer: Context Restored."),I=!1;const S=k.autoReset,U=Rt.enabled,Y=Rt.autoUpdate,G=Rt.needsUpdate,H=Rt.type;At(),k.autoReset=S,Rt.enabled=U,Rt.autoUpdate=Y,Rt.needsUpdate=G,Rt.type=H}function en(S){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pn(S){const U=S.target;U.removeEventListener("dispose",pn),Tc(U)}function Tc(S){Ac(S),X.remove(S)}function Ac(S){const U=X.get(S).programs;U!==void 0&&(U.forEach(function(Y){rt.releaseProgram(Y)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,Y,G,H,ft){U===null&&(U=ke);const xt=H.isMesh&&H.matrixWorld.determinantAffine()<0,ut=Cc(S,U,Y,G,H);x.setMaterial(G,xt);let Mt=Y.index,yt=1;if(G.wireframe===!0){if(Mt=Q.getWireframeAttribute(Y),Mt===void 0)return;yt=2}const Ut=Y.drawRange,zt=Y.attributes.position;let St=Ut.start*yt,Kt=(Ut.start+Ut.count)*yt;ft!==null&&(St=Math.max(St,ft.start*yt),Kt=Math.min(Kt,(ft.start+ft.count)*yt)),Mt!==null?(St=Math.max(St,0),Kt=Math.min(Kt,Mt.count)):zt!=null&&(St=Math.max(St,0),Kt=Math.min(Kt,zt.count));const xe=Kt-St;if(xe<0||xe===1/0)return;dt.setup(H,G,ut,Y,Mt);let oe,te=ot;if(Mt!==null&&(oe=st.get(Mt),te=j,te.setIndex(oe)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*ge()),te.setMode(O.LINES)):te.setMode(O.TRIANGLES);else if(H.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),x.setLineWidth(Ce*ge()),H.isLineSegments?te.setMode(O.LINES):H.isLineLoop?te.setMode(O.LINE_LOOP):te.setMode(O.LINE_STRIP)}else H.isPoints?te.setMode(O.POINTS):H.isSprite&&te.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))te.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ce=H._multiDrawStarts,mt=H._multiDrawCounts,Fe=H._multiDrawCount,Wt=Mt?st.get(Mt).bytesPerElement:1,Je=X.get(G).currentProgram.getUniforms();for(let mn=0;mn<Fe;mn++)Je.setValue(O,"_gl_DrawID",mn),te.render(Ce[mn]/Wt,mt[mn])}else if(H.isInstancedMesh)te.renderInstances(St,xe,H.count);else if(Y.isInstancedBufferGeometry){const Ce=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,mt=Math.min(Y.instanceCount,Ce);te.renderInstances(St,xe,mt)}else te.render(St,xe)};function ao(S,U,Y,G){P!==null&&S.isNodeMaterial&&P.setObject(G,S),Xt===!0&&Tt.setState(S,Y,!1),S.transparent===!0&&S.side===Ke&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,ps(S,U,G),S.side=ai,S.needsUpdate=!0,ps(S,U,G),S.side=Ke):ps(S,U,G)}this.compile=function(S,U,Y=null){Y===null&&(Y=S),P!==null&&P.renderStart(S,U,Y),T=at.get(Y),T.init(U),M.push(T),Y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==Y&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ne=this.localClippingEnabled,Xt=Tt.init(this.clippingPlanes,ne),Xt===!0&&Tt.setGlobalState(this.clippingPlanes,U),P!==null&&Rt.render(T.state.shadowsArray,Y,U);const G=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ft=H.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const ut=ft[xt];ao(ut,Y,U,H),G.add(ut)}else ao(ft,Y,U,H),G.add(ft)}),T=M.pop(),P!==null&&P.renderEnd(),G},this.compileAsync=function(S,U,Y=null){const G=this.compile(S,U,Y);return new Promise(H=>{function ft(){if(G.forEach(function(xt){const Mt=X.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&G.delete(xt)}),G.size===0){H(S);return}setTimeout(ft,10)}Zt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ar=null;function wc(S){ar&&ar(S)}function oo(){Zn.stop()}function lo(){Zn.start()}const Zn=new sc;Zn.setAnimationLoop(wc),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(S){ar=S,bt.setAnimationLoop(S),S===null?Zn.stop():Zn.start()},bt.addEventListener("sessionstart",oo),bt.addEventListener("sessionend",lo),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(S,U);const Y=bt.enabled===!0&&bt.isPresenting===!0,G=E!==null&&($===null||Y)&&E.begin(C,$);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(U),U=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,$),T=at.get(S,M.length),T.init(U),T.state.textureUnits=Z.getTextureUnits(),M.push(T),kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(kt,Mn,U.reversedDepth),ne=this.localClippingEnabled,Xt=Tt.init(this.clippingPlanes,ne),b=ct.get(S,R.length),b.init(),R.push(b),bt.enabled===!0&&bt.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&or(xt,U,-1/0,C.sortObjects)}or(S,U,0,C.sortObjects),b.finish(),P!==null&&P.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(_t,It),ce=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ce&&Dt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&Tt.beginShadows();const H=T.state.shadowsArray;if(Rt.render(H,S,U),Xt===!0&&Tt.endShadows(),(G&&E.hasRenderPass())===!1){const xt=b.opaque,ut=b.transmissive;if(T.setupLights(),U.isArrayCamera){const Mt=U.cameras;if(ut.length>0)for(let yt=0,Ut=Mt.length;yt<Ut;yt++){const zt=Mt[yt];ho(xt,ut,S,zt)}ce&&Dt.render(S);for(let yt=0,Ut=Mt.length;yt<Ut;yt++){const zt=Mt[yt];co(b,S,zt,zt.viewport)}}else ut.length>0&&ho(xt,ut,S,U),ce&&Dt.render(S),co(b,S,U)}$!==null&&B===0&&(Z.updateMultisampleRenderTarget($),Z.updateRenderTargetMipmap($)),G&&E.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),dt.resetDefaultState(),q=-1,W=null,M.pop(),M.length>0?(T=M[M.length-1],Z.setTextureUnits(T.state.textureUnits),Xt===!0&&Tt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,P!==null&&P.renderEnd()};function or(S,U,Y,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Bt)){G&&ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(kt);const xt=tt.update(S),ut=S.material;ut.visible&&b.push(S,xt,ut,Y,ye.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Bt))){const xt=tt.update(S),ut=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ye.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ye.copy(xt.boundingSphere.center)),ye.applyMatrix4(S.matrixWorld).applyMatrix4(kt)),Array.isArray(ut)){const Mt=xt.groups;for(let yt=0,Ut=Mt.length;yt<Ut;yt++){const zt=Mt[yt],St=ut[zt.materialIndex];St&&St.visible&&b.push(S,xt,St,Y,ye.z,zt,U)}}else ut.visible&&b.push(S,xt,ut,Y,ye.z,null,U)}}const ft=S.children;for(let xt=0,ut=ft.length;xt<ut;xt++)or(ft[xt],U,Y,G)}function co(S,U,Y,G){const{opaque:H,transmissive:ft,transparent:xt}=S;T.setupLightsView(Y),Xt===!0&&Tt.setGlobalState(C.clippingPlanes,Y),G&&x.viewport(K.copy(G)),H.length>0&&ds(H,U,Y),ft.length>0&&ds(ft,U,Y),xt.length>0&&ds(xt,U,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ho(S,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const St=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new un(1,1,{generateMipmaps:!0,type:St?bn:Ze,minFilter:ii,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const ft=T.state.transmissionRenderTarget[G.id],xt=G.viewport||K;ft.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);const ut=C.getRenderTarget(),Mt=C.getActiveCubeFace(),yt=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(ee),Vt=C.getClearAlpha(),Vt<1&&C.setClearColor(16777215,.5),C.clear(),ce&&Dt.render(Y);const Ut=C.toneMapping;C.toneMapping=hn;const zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Xt===!0&&Tt.setGlobalState(C.clippingPlanes,G),ds(S,Y,G),Z.updateMultisampleRenderTarget(ft),Z.updateRenderTargetMipmap(ft),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Kt=0,xe=U.length;Kt<xe;Kt++){const oe=U[Kt],{object:te,geometry:Ce,material:mt,group:Fe}=oe;if(mt.side===Ke&&te.layers.test(G.layers)){const Wt=mt.side;mt.side=He,mt.needsUpdate=!0,uo(te,Y,G,Ce,mt,Fe),mt.side=Wt,mt.needsUpdate=!0,St=!0}}St===!0&&(Z.updateMultisampleRenderTarget(ft),Z.updateRenderTargetMipmap(ft))}C.setRenderTarget(ut,Mt,yt),C.setClearColor(ee,Vt),zt!==void 0&&(G.viewport=zt),C.toneMapping=Ut}function ds(S,U,Y){const G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ft=S.length;H<ft;H++){const xt=S[H],{object:ut,geometry:Mt,group:yt}=xt;let Ut=xt.material;Ut.allowOverride===!0&&G!==null&&(Ut=G),ut.layers.test(Y.layers)&&uo(ut,U,Y,Mt,Ut,yt)}}function uo(S,U,Y,G,H,ft){P!==null&&H.isNodeMaterial&&P.setObject(S,H),S.onBeforeRender(C,U,Y,G,H,ft),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,U,Y,G,S,ft),H.transparent===!0&&H.side===Ke&&H.forceSinglePass===!1?(H.side=He,H.needsUpdate=!0,C.renderBufferDirect(Y,U,G,H,S,ft),H.side=ai,H.needsUpdate=!0,C.renderBufferDirect(Y,U,G,H,S,ft),H.side=Ke):C.renderBufferDirect(Y,U,G,H,S,ft),S.onAfterRender(C,U,Y,G,H,ft)}function ps(S,U,Y){U.isScene!==!0&&(U=ke);const G=X.get(S),H=T.state.lights,ft=T.state.shadowsArray,xt=H.state.version,ut=rt.getParameters(S,H.state,ft,U,Y,T.state.lightProbeGridArray),Mt=rt.getProgramCacheKey(ut);let yt=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Ut=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=it.get(S.envMap||G.environment,Ut),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,yt===void 0&&(S.addEventListener("dispose",pn),yt=new Map,G.programs=yt);let zt=yt.get(Mt);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===xt)return po(S,ut),zt}else ut.uniforms=rt.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,Y,ut),S.onBeforeCompile(ut,C),zt=rt.acquireProgram(ut,Mt),yt.set(Mt,zt),G.uniforms=ut.uniforms;const St=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=Tt.uniform),po(S,ut),G.needsLights=Ic(S),G.lightsStateVersion=xt,G.needsLights&&(St.ambientLightColor.value=H.state.ambient,St.lightProbe.value=H.state.probe,St.sunLights.value=H.state.sun,St.sunLightShadows.value=H.state.sunShadow,St.directionalLights.value=H.state.directional,St.directionalLightShadows.value=H.state.directionalShadow,St.spotLights.value=H.state.spot,St.spotLightShadows.value=H.state.spotShadow,St.rectAreaLights.value=H.state.rectArea,St.ltc_1.value=H.state.rectAreaLTC1,St.ltc_2.value=H.state.rectAreaLTC2,St.pointLights.value=H.state.point,St.pointLightShadows.value=H.state.pointShadow,St.hemisphereLights.value=H.state.hemi,St.sunShadowMatrix.value=H.state.sunShadowMatrix,St.sunShadowCascade.value=H.state.sunShadowCascade,St.directionalShadowMatrix.value=H.state.directionalShadowMatrix,St.spotLightMatrix.value=H.state.spotLightMatrix,St.spotLightMap.value=H.state.spotLightMap,St.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=zt,G.uniformsList=null,zt}function fo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Vs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function po(S,U){const Y=X.get(S);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Rc(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=S.length;Y<G;Y++){const H=S[Y];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function Cc(S,U,Y,G,H){U.isScene!==!0&&(U=ke),Z.resetTextureUnits();const ft=U.fog,xt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ut=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Gt.workingColorSpace,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,yt=it.get(G.envMap||xt,Mt),Ut=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,zt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!Y.morphAttributes.position,Kt=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color;let oe=hn;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(oe=C.toneMapping);const te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=te!==void 0?te.length:0,mt=X.get(G),Fe=T.state.lights;if(Xt===!0&&(ne===!0||S!==W)){const se=S===W&&G.id===q;Tt.setState(G,S,se)}let Wt=!1;G.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Fe.state.version||mt.outputColorSpace!==ut||H.isBatchedMesh&&mt.batching===!1||!H.isBatchedMesh&&mt.batching===!0||H.isBatchedMesh&&mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&mt.instancing===!1||!H.isInstancedMesh&&mt.instancing===!0||H.isSkinnedMesh&&mt.skinning===!1||!H.isSkinnedMesh&&mt.skinning===!0||H.isInstancedMesh&&mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&mt.instancingMorph===!1&&H.morphTexture!==null||mt.envMap!==yt||G.fog===!0&&mt.fog!==ft||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Tt.numPlanes||mt.numIntersection!==Tt.numIntersection)||mt.vertexAlphas!==Ut||mt.vertexTangents!==zt||mt.morphTargets!==St||mt.morphNormals!==Kt||mt.morphColors!==xe||mt.toneMapping!==oe||mt.morphTargetsCount!==Ce||!!mt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,mt.__version=G.version);let Je=mt.currentProgram;Wt===!0&&(Je=ps(G,U,H),P&&G.isNodeMaterial&&P.onUpdateProgram(G,Je,mt));let mn=!1,On=!1,fi=!1;const Qt=Je.getUniforms(),me=mt.uniforms;if(x.useProgram(Je.program)&&(mn=!0,On=!0,fi=!0),G.id!==q&&(q=G.id,On=!0),mt.needsLights){const se=Rc(T.state.lightProbeGridArray,H);mt.lightProbeGrid!==se&&(mt.lightProbeGrid=se,On=!0)}if(mn||W!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Qt.setValue(O,"projectionMatrix",S.projectionMatrix),Qt.setValue(O,"viewMatrix",S.matrixWorldInverse);const zn=Qt.map.cameraPosition;zn!==void 0&&zn.setValue(O,le.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Qt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,On=!0,fi=!0)}if(mt.needsLights&&(Fe.state.sunShadowMap.length>0&&Qt.setValue(O,"sunShadowMap",Fe.state.sunShadowMap,Z),Fe.state.directionalShadowMap.length>0&&Qt.setValue(O,"directionalShadowMap",Fe.state.directionalShadowMap,Z),Fe.state.spotShadowMap.length>0&&Qt.setValue(O,"spotShadowMap",Fe.state.spotShadowMap,Z),Fe.state.pointShadowMap.length>0&&Qt.setValue(O,"pointShadowMap",Fe.state.pointShadowMap,Z)),H.isSkinnedMesh){Qt.setOptional(O,H,"bindMatrix"),Qt.setOptional(O,H,"bindMatrixInverse");const se=H.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),Qt.setValue(O,"boneTexture",se.boneTexture,Z))}H.isBatchedMesh&&(Qt.setOptional(O,H,"batchingTexture"),Qt.setValue(O,"batchingTexture",H._matricesTexture,Z),Qt.setOptional(O,H,"batchingIdTexture"),Qt.setValue(O,"batchingIdTexture",H._indirectTexture,Z),Qt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Qt.setValue(O,"batchingColorTexture",H._colorsTexture,Z));const Bn=Y.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&F.update(H,Y,Je),(On||mt.receiveShadow!==H.receiveShadow)&&(mt.receiveShadow=H.receiveShadow,Qt.setValue(O,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(me.envMapIntensity.value=U.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=jp()),On){if(Qt.setValue(O,"toneMappingExposure",C.toneMappingExposure),mt.needsLights&&Pc(me,fi),ft&&G.fog===!0&&Et.refreshFogUniforms(me,ft),Et.refreshMaterialUniforms(me,G,et,J,T.state.transmissionRenderTarget[S.id]),mt.needsLights&&mt.lightProbeGrid){const se=mt.lightProbeGrid;me.probesSH.value=se.texture,me.probesMin.value.copy(se.boundingBox.min),me.probesMax.value.copy(se.boundingBox.max),me.probesResolution.value.copy(se.resolution)}Vs.upload(O,fo(mt),me,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vs.upload(O,fo(mt),me,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qt.setValue(O,"center",H.center),Qt.setValue(O,"modelViewMatrix",H.modelViewMatrix),Qt.setValue(O,"normalMatrix",H.normalMatrix),Qt.setValue(O,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const se=G.uniformsGroups;for(let zn=0,di=se.length;zn<di;zn++){const go=se[zn];nt.update(go,Je),nt.bind(go,Je)}}return Je}function Pc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ic(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(S,U,Y){const G=X.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=U,X.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const Y=X.get(S);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,Y=0){$=S,V=U,B=Y;let G=null,H=!1,ft=!1;if(S){const ut=X.get(S);if(ut.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),K.copy(S.viewport),pt.copy(S.scissor),vt=S.scissorTest,x.viewport(K),x.scissor(pt),x.setScissorTest(vt),q=-1;return}else if(ut.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(ut.__hasExternalTextures)Z.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ut=S.depthTexture;if(ut.__boundDepthTexture!==Ut){if(Ut!==null&&X.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);const yt=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(yt[U])?G=yt[U][Y]:G=yt[U],H=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?G=X.get(S).__webglMultisampledFramebuffer:Array.isArray(yt)?G=yt[Y]:G=yt,K.copy(S.viewport),pt.copy(S.scissor),vt=S.scissorTest}else K.copy(gt).multiplyScalar(et).floor(),pt.copy(Ot).multiplyScalar(et).floor(),vt=ve;if(Y!==0&&(G=L),x.bindFramebuffer(O.FRAMEBUFFER,G)&&x.drawBuffers(S,G),x.viewport(K),x.scissor(pt),x.setScissorTest(vt),H){const ut=X.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,Y)}else if(ft){const ut=U;for(let Mt=0;Mt<S.textures.length;Mt++){const yt=X.get(S.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,yt.__webglTexture,Y,ut)}}else if(S!==null&&Y!==0){const ut=X.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,Y)}q=-1};function mo(S){const U=X.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=A.textureFormatReadable(S.format),U.__typeReadable=A.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,Y,G,H,ft,xt,ut=0){if(!(S&&S.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){x.bindFramebuffer(O.FRAMEBUFFER,Mt);try{const yt=S.textures[ut],Ut=yt.format,zt=yt.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);const St=mo(yt);if(St.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&Y>=0&&Y<=S.height-H&&O.readPixels(U,Y,G,H,lt.convert(Ut),lt.convert(zt),ft)}finally{const yt=$!==null?X.get($).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,U,Y,G,H,ft,xt,ut=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(U>=0&&U<=S.width-G&&Y>=0&&Y<=S.height-H){x.bindFramebuffer(O.FRAMEBUFFER,Mt);const yt=S.textures[ut],Ut=yt.format,zt=yt.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);const St=mo(yt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(U,Y,G,H,lt.convert(Ut),lt.convert(zt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const xe=$!==null?X.get($).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,xe);const oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ph(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Kt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Kt),O.deleteSync(oe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,Y=0){const G=Math.pow(2,-Y),H=Math.floor(S.image.width*G),ft=Math.floor(S.image.height*G),xt=U!==null?U.x:0,ut=U!==null?U.y:0;Z.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xt,ut,H,ft),x.unbindTexture()},this.copyTextureToTexture=function(S,U,Y=null,G=null,H=0,ft=0){let xt,ut,Mt,yt,Ut,zt,St,Kt,xe;const oe=S.isCompressedTexture?S.mipmaps[ft]:S.image;if(Y!==null)xt=Y.max.x-Y.min.x,ut=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,yt=Y.min.x,Ut=Y.min.y,zt=Y.isBox3?Y.min.z:0;else{const me=Math.pow(2,-H);xt=Math.floor(oe.width*me),ut=Math.floor(oe.height*me),S.isDataArrayTexture?Mt=oe.depth:S.isData3DTexture?Mt=Math.floor(oe.depth*me):Mt=1,yt=0,Ut=0,zt=0}G!==null?(St=G.x,Kt=G.y,xe=G.z):(St=0,Kt=0,xe=0);const te=lt.convert(U.format),Ce=lt.convert(U.type);let mt;U.isData3DTexture?(Z.setTexture3D(U,0),mt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),mt=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),mt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const Fe=x.getParameter(O.UNPACK_ROW_LENGTH),Wt=x.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=x.getParameter(O.UNPACK_SKIP_PIXELS),mn=x.getParameter(O.UNPACK_SKIP_ROWS),On=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,oe.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,oe.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),x.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),x.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const fi=S.isDataArrayTexture||S.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const me=X.get(S),Bn=X.get(U),se=X.get(me.__renderTarget),zn=X.get(Bn.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,se.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let di=0;di<Mt;di++)fi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(S).__webglTexture,H,zt+di),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(U).__webglTexture,ft,xe+di)),O.blitFramebuffer(yt,Ut,xt,ut,St,Kt,xt,ut,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||X.has(S)){const me=X.get(S),Bn=X.get(U);x.bindFramebuffer(O.READ_FRAMEBUFFER,D),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let se=0;se<Mt;se++)fi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,me.__webglTexture,H,zt+se):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,H),Qt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bn.__webglTexture,ft,xe+se):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bn.__webglTexture,ft),H!==0?O.blitFramebuffer(yt,Ut,xt,ut,St,Kt,xt,ut,O.COLOR_BUFFER_BIT,O.NEAREST):Qt?O.copyTexSubImage3D(mt,ft,St,Kt,xe+se,yt,Ut,xt,ut):O.copyTexSubImage2D(mt,ft,St,Kt,yt,Ut,xt,ut);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qt?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(mt,ft,St,Kt,xe,xt,ut,Mt,te,Ce,oe.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(mt,ft,St,Kt,xe,xt,ut,Mt,te,oe.data):O.texSubImage3D(mt,ft,St,Kt,xe,xt,ut,Mt,te,Ce,oe):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,St,Kt,xt,ut,te,Ce,oe.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,St,Kt,oe.width,oe.height,te,oe.data):O.texSubImage2D(O.TEXTURE_2D,ft,St,Kt,xt,ut,te,Ce,oe);x.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),x.pixelStorei(O.UNPACK_SKIP_ROWS,mn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,On),ft===0&&U.generateMipmaps&&O.generateMipmap(mt),x.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){V=0,B=0,$=null,x.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}function fc(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ze;let c=0;for(let u=0;u<s.length;++u){const d=s[u];let h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const d=[];for(let h=0;h<s.length;++h){const f=s[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=s[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=xl(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][h]);const p=xl(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function xl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new fn(a,e,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<e;p++){const _=u.getComponent(h,p);o.setComponent(h+d,p,_)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}const he=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)};function dc(s,t=!1){const e=new us(s);return e.magFilter=e.minFilter=de,e.colorSpace=we,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=is),e}function em(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n={brick:["#48434c","#63585e","#292c35"],metal:["#334743","#6a7a6e","#162b2c"],concrete:["#4c5554","#69716a","#303e3e"],crate:["#696047","#988457","#30342c"],floor:["#303b3b","#515952","#19292b"],labfloor:["#405450","#697b6e","#223a39"],road:["#252a32","#485057","#171f28"],ceiling:["#2c3a3a","#53635b","#142628"],door:["#3d5149","#7d8e77","#182b29"]},i=n[s]??n.metal,r=(l,c,u,d,h)=>{e.fillStyle=l,e.fillRect(c,u,d,h)},a=(l,c,u=1)=>{e.strokeStyle=l,e.lineWidth=u,e.beginPath(),e.moveTo(c[0],c[1]);for(let d=2;d<c.length;d+=2)e.lineTo(c[d],c[d+1]);e.stroke()},o=(l,c)=>{r("#172827",l,c,4,4),r("#a2ac95",l,c,3,2),r("#63776b",l+1,c+2,2,1),r("#263e39",l+1,c+1,1,1)};r(i[0],0,0,128,128);for(let l=0;l<1500;l++)e.globalAlpha=.18+he(l)*.2,r(l%3?i[2]:i[1],he(l+1)*128|0,he(l+2)*128|0,1+l%3,1);if(e.globalAlpha=1,s==="brick"){for(let l=0;l<8;l++)for(let c=-1;c<5;c++){const u=c*32+l%2*16,d=l*16,h=l*5+c+2;e.globalAlpha=.15+he(h+70)*.15,r(h%3?i[1]:i[2],u+2,d+2,29,13),e.globalAlpha=1,r("#202832",u,d,32,2),r("#242930",u,d,2,16),r("#77656a",u+3,d+3,26,1),r("#584e56",u+2,d+4,1,9),r("#33323a",u+3,d+14,27,1),h%3===0&&(r("#292d35",u+22,d+3,3,2),r("#81716e",u+22,d+5,4,1)),h%4===0&&a("#302c35",[u+12,d+4,u+10,d+7,u+12,d+10,u+11,d+13]),r("#393a40",u+5,d+9,4,1),r("#62545a",u+17,d+7,6,1)}for(let l=0;l<15;l++)e.globalAlpha=.12,r("#1b302c",he(l+201)*128|0,he(l+231)*128|0,4,8);e.globalAlpha=1}else if(["metal","ceiling","door"].includes(s)){for(let l=0;l<2;l++)for(let c=0;c<2;c++){const u=c*64,d=l*64;r(i[2],u,d,64,3),r(i[2],u,d,3,64),r(i[1],u+3,d+3,59,1),r("#445d51",u+3,d+4,1,57);for(const h of[7,55])for(const f of[7,55])o(u+h,d+f);for(let h=0;h<7;h++){const f=u+10+he(h+l*14+c*7)*42|0,p=d+13+h*6;r("#263d38",f,p,10,1),r("#748077",f+2,p+1,5,1)}if(r("#7e6643",u+3,d+48,3,12),r("#553f2b",u+6,d+55,6,4),s==="ceiling"||s==="metal"&&l===1&&c===1){r("#1a2d2e",u+17,d+19,31,27);for(let h=21;h<45;h+=4)r("#0e2226",u+20,d+h-d,25,2),r("#667b6a",u+20,d+h-d+2,25,1)}}if(s==="door"){r("#172929",12,14,104,93),r("#718573",14,16,100,2);for(let l=20;l<101;l+=8)r("#4f6b59",16,l,96,4),r("#263e37",16,l+4,96,3),r("#76917a",18,l,90,1);r("#c7ab53",0,108,128,13);for(let l=-16;l<144;l+=24)e.fillStyle="#242c28",e.beginPath(),e.moveTo(l,121),e.lineTo(l+12,108),e.lineTo(l+24,108),e.lineTo(l+12,121),e.fill();r("#132a28",60,0,4,108),r("#92a288",65,2,2,104);for(const l of[7,97])o(53,l),o(72,l)}}else if(s==="crate"){for(let l=0;l<128;l+=16){r("#3e4030",l,0,2,128),r("#a18c5b",l+3,3,1,119);for(let c=8;c<120;c+=11)r("#4f4c35",l+5,c,7,1)}for(const l of[0,60,120])r("#333a30",l,0,8,128),r("#77836b",l+1,2,2,123);for(const l of[0,60,120])r("#333a30",0,l,128,8),r("#8e916f",3,l+1,121,2);for(const l of[3,63,123])for(const c of[5,62,122])o(l,c);r("#c4b886",19,21,34,22),r("#292f27",22,24,28,3),r("#595b40",22,30,19,2);for(let l=23;l<49;l+=3)r("#3d4934",l,36,1,5)}else if(s==="floor"||s==="labfloor")for(let l=0;l<2;l++)for(let c=0;c<2;c++){const u=c*64,d=l*64;r(i[2],u,d,64,3),r(i[2],u,d,3,64),r(i[1],u+3,d+3,59,1),r("#54675b",u+3,d+4,1,57);for(let h=0;h<9;h++){const f=u+8+he(h+l*21+c*7)*44|0,p=d+9+he(h+90)*44|0;r("#637363",f,p,5,1),r("#243a35",f+1,p+1,7,1)}if(s==="floor"){o(u+7,d+7),o(u+54,d+54);for(let h=14;h<52;h+=9)for(let f=15;f<52;f+=12)a("#506157",[u+f,d+h,u+f+3,d+h-3,u+f+5,d+h-3])}else l===1&&c===0&&a("#263e38",[u+20,d+3,u+21,d+12,u+26,d+19,u+25,d+29,u+31,d+35,u+32,d+45])}else if(s==="concrete"){r("#273c3d",0,0,128,3),r("#7b8173",0,3,128,1),r("#344848",0,64,128,2),a("#2b3b3d",[17,4,20,19,14,32,17,40,9,48,7,65]),a("#728074",[19,5,22,20,16,32]),a("#293b3c",[105,65,103,81,94,92,94,101,89,108,88,125]),a("#687768",[105,82,110,89,120,91]);for(const l of[11,115])for(const c of[12,114])r("#273c3c",l,c,5,4),r("#8b8c78",l,c,4,1);for(let l=0;l<16;l++)e.globalAlpha=.15,r("#1b3436",8+l*7,5,3,10+he(l+4)*30);e.globalAlpha=1}else if(s==="road"){for(let l=0;l<450;l++){const c=he(l+19)*128|0,u=he(l+81)*128|0;r(l%4===0?"#62655f":"#3a4549",c,u,1+l%2,1)}a("#101d25",[0,42,16,45,23,53,36,54,48,66,64,70,79,86,95,89,112,103,128,101],2),a("#46514d",[0,40,16,43,24,51,36,52,48,64,64,68]),a("#14212a",[49,65,49,80,41,88,39,107,29,128]);for(let l=0;l<5;l++)e.globalAlpha=.16,r("#121e29",20+l*3,10+l*4,25-l*3,15);e.globalAlpha=1}return dc(t,!0)}function nm(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=(i,r,a,o,l)=>{e.fillStyle=i,e.fillRect(r,a,o,l)};if(e.imageSmoothingEnabled=!1,s==="poster"){n("#142e32",4,3,118,122),n("#8ba084",8,7,110,110),n("#273a38",12,11,102,67);for(let i=0;i<12;i++)n(i%2?"#5b856e":"#365b54",19+i*7,20,3,44),n("#b2c09b",17+i*7,27+i%4*8,7,3);e.textAlign="center",e.fillStyle="#c8d4aa",e.font="bold 15px monospace",e.fillText("AXIOM",64,29),e.font="bold 9px monospace",e.fillText("A BETTER SPECIES",64,72),e.fillStyle="#293d37",e.fillText("LAZARUS / 2091",64,90),e.fillText("TRUST THE FUTURE",64,103),n("#597460",12,114,66,2),n("#203a34",22,119,86,2),n("#0d272d",4,100,5,15),n("#0d272d",119,8,5,16)}else if(s==="graffiti"){e.textAlign="center",e.font="bold 24px monospace",e.fillStyle="#cb5365",e.fillText("THEY LIED",64,54),e.font="bold 12px monospace",e.fillText("MARA IS ALIVE",64,74);for(let i=0;i<8;i++)n("#a33e50",14+i*14,56,1,5+he(i)*15);e.strokeStyle="#b75059",e.lineWidth=2,e.beginPath(),e.moveTo(8,83),e.lineTo(116,88),e.stroke()}else if(s==="paper"){n("#766e55",9,9,108,111),n("#c2b791",8,6,106,109),n("#aea17e",9,111,101,4),n("#3e4940",17,15,51,7),n("#7d4543",83,13,23,13);for(let i=0;i<13;i++)n("#6e7461",18,30+i*5,48+he(i)*37,1),i%3===0&&n("#9b9271",16,31+i*5,80,1);n("#7c5f50",75,69,28,22),n("#37473e",80,74,18,14),n("#b0a47c",12,93,16,13),e.fillStyle="#713f38",e.font="bold 8px monospace",e.fillText("CASE 091",36,105)}else if(s==="puddle"){e.fillStyle="#173541",e.beginPath();for(let i=0;i<20;i++){const r=i*Math.PI/10,a=45+he(i)*13,o=64+Math.cos(r)*a,l=64+Math.sin(r)*a*.65;i?e.lineTo(o,l):e.moveTo(o,l)}e.closePath(),e.fill();for(let i=0;i<14;i++)n(i%3?"#214f54":"#3a796a",20+he(i)*85,44+he(i+13)*41,7+he(i+9)*25,1);n("#548a73",34,49,27,1),n("#407869",73,58,21,1)}else if(s==="leak"){for(let i=0;i<40;i++)e.globalAlpha=.2+he(i)*.6,n(i%3?"#352d2a":"#806443",he(i)*128,he(i+5)*18,1+he(i+9)*4,19+he(i+3)*104);e.globalAlpha=1}else{n("#102a2b",0,0,128,128),n("#6a7a67",3,3,122,3),n("#3b5950",3,6,3,119);for(let i=0;i<6;i++)n("#203b36",10,12+i*17,75,11),n("#537766",13,15+i*17,42,2),n("#62dda0",17+i*8,17+i*17,5,3),n("#88a58b",94,14+i*17,18,6),n(i%2?"#edac58":"#74dca0",117,15+i*17,3,3);for(let i=0;i<9;i++)n("#899277",12+i*12,120,5,2)}return dc(t)}const je=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)},im=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function sm(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createImageData(64,64);for(let r=0;r<64;r++)for(let a=0;a<64;a++){const o=(a-31.5)/31,l=(r-31.5)/31,c=Math.sqrt(o*o+l*l),u=(r*64+a)*4;let d=0,h=[0,0,0];if(s==="shadow")d=Math.max(0,1-c*c)*.88,h=[6,12,18];else if(s==="mist")d=Math.max(0,1-c)*(.45+je((a>>2)+(r>>2)*16)*.55),h=[168,196,184];else if(s==="blood"){const f=.7+je((a>>2)+(r>>2)*16)*.28;d=c<f?.9:0,h=je(a+r*64)>.7?[105,29,43]:[62,17,28],c<.48&&je(a+r*7)>.77&&(h=[128,43,49])}else d=c<.32?1:c<.7&&je((a>>1)+(r>>1)*32)>.58?.88:0,h=c<.36?[5,13,19]:c<.5?[93,97,83]:[43,52,51],Math.abs(o+l*.7)<.025&&c>.3&&c<.9&&(d=1,h=[16,25,30]);n.data[u]=h[0],n.data[u+1]=h[1],n.data[u+2]=h[2],n.data[u+3]=d>(im[r%4*4+a%4]+.5)/16?255:0}e.putImageData(n,0,0);const i=new us(t);return i.magFilter=i.minFilter=de,i.generateMipmaps=!1,i.colorSpace=we,i}class rm{shadows;rain;mist;impacts;blood;object=new Me;normal=new z;forward=new z(0,0,1);marks=[];seen=new WeakSet;previous;materials=[];vents=[{x:4,z:-3},{x:-11.65,z:-11},{x:11.65,z:-17},{x:-9.6,z:-38.8},{x:9.6,z:-41}];constructor(t){const e=(r,a=1)=>{const o=new an({map:sm(r),transparent:a<1,opacity:a,alphaTest:.01,depthWrite:!1,side:Ke,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return this.materials.push(o),o},n=(r,a,o)=>{const l=new Ql(r,a,o);return l.instanceMatrix.setUsage(Wl),l.frustumCulled=!1,l.count=0,t.add(l),l};this.shadows=n(new tn(1,1),e("shadow",.38),32),this.blood=n(new tn(1,1),e("blood"),32),this.impacts=n(new tn(1,1),e("impact"),64),this.impacts.renderOrder=1,this.blood.renderOrder=1,this.mist=n(new tn(1,1),e("mist",.2),20);const i=new an({color:9287348,transparent:!0,opacity:.35,depthWrite:!1});this.materials.push(i),this.rain=n(new Ye(.013,.31,.013),i,112)}floor(t,e){return e>-20&&e<4&&Math.abs(t)>10.5?.167:.057}ground(t,e,n,i,r,a,o=this.floor(n,i)){this.object.position.set(n,o,i),this.object.rotation.set(-Math.PI/2,0,0),this.object.scale.set(r,a,1),this.object.updateMatrix(),t.setMatrixAt(e,this.object.matrix)}update(t,e,n,i){this.previous!==t&&(this.marks=[],this.seen=new WeakSet,this.previous=t,this.impacts.count=0);let r=0,a=0;for(const o of t.enemies){const l=o.kind==="brute"?1.05:o.kind==="raptor"?.6:.48;this.ground(this.shadows,r++,o.x,o.z,l*2.4,l*1.7),o.alive||this.ground(this.blood,a++,o.x,o.z,l*2.8,l*2.1,this.floor(o.x,o.z)+.004)}if(t.player.mounted||this.ground(this.shadows,r++,t.mount.x,t.mount.z,2.7,1.65),this.shadows.count=r,this.blood.count=a,this.shadows.instanceMatrix.needsUpdate=this.blood.instanceMatrix.needsUpdate=!0,this.rain.visible=i.quality==="high",this.rain.count=this.rain.visible?112:0,this.rain.visible)for(let o=0;o<this.rain.count;o++){const l=(je(o+40)+n*(.54+je(o+53)*.23))%1;this.object.position.set(-11.8+je(o+7)*23.6,.3+(1-l)*7.5,3-je(o+29)*22),this.object.rotation.set(0,0,-.13),this.object.scale.set(1,.6+je(o+8)*.7,1),this.object.updateMatrix(),this.rain.setMatrixAt(o,this.object.matrix)}if(this.rain.instanceMatrix.needsUpdate=!0,this.mist.visible=i.quality==="high",this.mist.count=this.mist.visible?20:0,this.mist.visible)for(let o=0;o<this.mist.count;o++){const l=this.vents[o%this.vents.length],c=(je(o+10)+n*.22)%1,u=.6+c*.85;this.object.position.set(l.x+Math.sin(o*2.3+n*.6)*c*.35,.18+c*1.35,l.z+Math.cos(o+n*.4)*c*.25),this.object.quaternion.copy(e.quaternion),this.object.scale.set(u,u*1.13,1),this.object.updateMatrix(),this.mist.setMatrixAt(o,this.object.matrix)}this.mist.instanceMatrix.needsUpdate=!0;for(const o of t.effects)o.kind==="spark"&&!this.seen.has(o)&&(this.seen.add(o),this.recordImpact(o));for(let o=0;o<this.marks.length;o++){const l=this.marks[o];this.object.position.copy(l.position),this.object.quaternion.setFromUnitVectors(this.forward,l.normal),this.object.scale.setScalar(l.size),this.object.updateMatrix(),this.impacts.setMatrixAt(o,this.object.matrix)}this.impacts.count=this.marks.length,this.impacts.instanceMatrix.needsUpdate=!0}recordImpact(t){let e=.045,n,i;for(const r of De.walls){const a=r.y??0,o=a+r.h,l=[{axis:"x",value:t.x,center:r.x,half:r.w/2},{axis:"z",value:t.z,center:r.z,half:r.d/2}];if(!(t.y<a-.02||t.y>o+.02))for(const c of l){const u=c.axis==="x"?t.z-r.z:t.x-r.x,d=c.axis==="x"?r.d/2:r.w/2;if(Math.abs(u)>d+.015)continue;const h=c.value>=c.center?1:-1,f=c.center+h*c.half,p=Math.abs(c.value-f);p>=e||(e=p,n=new z(t.x,t.y,t.z),n[c.axis]=f+h*.013,this.normal.set(0,0,0),this.normal[c.axis]=h,i=this.normal.clone())}}n&&i&&(this.marks.push({position:n,normal:i,size:.15+je(n.x+n.z)*.075}),this.marks.length>64&&this.marks.shift())}dispose(){for(const t of[this.shadows,this.rain,this.mist,this.impacts,this.blood])t.removeFromParent(),t.geometry.dispose();for(const t of this.materials)t.map?.dispose(),t.dispose()}}function am(s){const t=s.mat(5005912),e=s.mat(1716275),n=s.mat(9279361),i=s.mat(7885891),r=s.mat(7496267),a=s.mat(9060163),o=s.box.bind(s),l=(h,f,p,_,g=6)=>{const m=f.clone().sub(h),y=m.length(),w=new jt(p,p,y,g);w.applyQuaternion(new Ve().setFromUnitVectors(new z(0,1,0),m.normalize()));const v=h.clone().add(f).multiplyScalar(.5);s.addGeometry(w,_,v.x,v.y,v.z)},c=(h,f,p)=>new z(h,f,p),u=h=>{const f=Math.sin(h*127.1+91.7)*43758.5453;return f-Math.floor(f)};o(4.885,1.19,7.7,.045,.075,3.77,r),o(4.885,2.87,7.7,.045,.075,3.77,r);for(const h of[5.83,9.57])o(4.885,2.03,h,.045,1.72,.07,r);const d=[];for(let h=0;h<7;h++){const f=1.8+u(h)*.5,p=7.7+(u(h+10)-.5)*2.8;d.push(c(4.795,f+.125,p)),s.addGeometry(new jt(.025,.025,.04,6),i,4.8,f+.125,p,0,0,Math.PI/2),o(4.842,f+.005,p-.035,.012,.17,.11,e),o(4.832,f+.035,p-.035,.008,.053,.04,n),o(4.832,f-.025,p-.035,.008,.06,.068,t);for(let _=0;_<3;_++)o(4.832,f-.115+_*.023,p+.028,.008,.009,.095-_*.015,i)}for(const[h,f]of[[0,2],[2,5],[5,1],[1,4],[4,3],[3,6],[6,2]])l(d[h],d[f],.008,a,4);o(2.75,2.6,11.958,2.77,1.84,.045,e),o(2.75,2.6,11.925,.045,1.84,.028,t);for(const h of[1.33,4.17])o(h,2.6,11.907,.09,1.94,.055,r);for(const h of[1.65,3.55])o(2.75,h,11.907,2.94,.09,.055,r);for(let h=0;h<16;h++){const f=1.78+h*.105;o(2.75,f,11.899,2.7,.062,.055,t),o(2.75,f+.028,11.865,2.69,.014,.012,n)}for(const h of[1.96,3.51])o(h,2.57,11.86,.016,1.72,.018,e);l(c(4.24,3.42,11.872),c(4.24,2.58,11.872),.007,n,4),s.addGeometry(new jt(.035,.035,.08,6),r,4.24,2.55,11.872),s.addGeometry(new jt(.345,.345,.07,16),t,0,3.33,11.914,Math.PI/2),s.addGeometry(new jt(.299,.299,.014,16),n,0,3.33,11.868,Math.PI/2);for(let h=0;h<12;h++){const f=h*Math.PI/6;l(c(Math.sin(f)*.245,3.33+Math.cos(f)*.245,11.856),c(Math.sin(f)*.274,3.33+Math.cos(f)*.274,11.856),.009,e,4)}l(c(0,3.33,11.841),c(-.125,3.43,11.841),.014,e,4),l(c(0,3.33,11.838),c(.18,3.405,11.838),.009,e,4);for(const h of[-2.5,-12.8])for(const f of[0,.23]){let p=c(-12.8,6.13,h+f);for(let _=1;_<=12;_++){const g=-12.8+_*25.6/12,m=_/12,y=6.13-Math.sin(m*Math.PI)*1.12,w=c(g,y,h+f);l(p,w,.025,e),p=w}for(const _ of[-1,1])o(_*12.81,6.11,h+f,.23,.2,.11,t),s.addGeometry(new jt(.075,.075,.15,6),n,_*12.68,6.08,h+f,0,0,Math.PI/2)}for(const h of[-1,1])for(const f of[-3.4,-12.2,-16.6]){o(h*12.925,.87,f,.075,1.18,1.82,e);for(const p of[-.89,.89])o(h*12.875,.87,f+p,.035,1.13,.035,t);for(const p of[.33,1.4])o(h*12.875,p,f,.035,.03,1.8,t);for(const p of[-.65,.65])for(const _ of[.43,1.3])o(h*12.846,_,f+p,.018,.045,.045,n);o(h*12.854,1.04,f+.6,.045,.26,.08,t),o(h*12.809,1.05,f+.6,.025,.18,.035,n),o(h*12.877,.84,f-.46,.14,.47,.36,t),o(h*12.798,.84,f-.46,.022,.37,.27,e),s.addGeometry(new jt(.095,.095,.02,12),n,h*12.778,.9,f-.46,0,0,Math.PI/2),o(h*12.758,.9,f-.46,.014,.09,.018,i),o(h*12.761,.695,f-.46,.014,.032,.15,r),l(c(h*12.846,.57,f-.46),c(h*12.846,.21,f-.46),.019,i);for(const p of[.26,.46])o(h*12.81,p,f-.46,.027,.03,.06,n)}o(-6.7,1.26,-34.5,1.94,.12,1.16,e),s.addGeometry(new jt(.24,.28,1.35,6),r,-6.63,1.49,-34.5,0,0,Math.PI/2),s.addGeometry(new nr(.205,8,4),r,-7.38,1.49,-34.5);for(const h of[-7.1,-6.55,-6.1])o(h,1.704,-34.5,.035,.018,.43,i);for(const h of[-35.045,-33.955]){o(-6.7,1.65,h,1.91,.055,.045,n);for(const f of[-7.59,-5.81])o(f,1.49,h,.045,.35,.045,t)}s.sign("LAZARUS / SPECIMEN 091",-6.7,2.33,-32.565,2.45,.42,Math.PI,"#b7a57b","#253631"),o(-7.5,1.67,-42.58,1.05,.34,.92,t),o(-7.5,1.867,-42.58,1.11,.055,.97,e);for(const h of[-7.91,-7.09]){o(h,1.876,-42.58,.05,.03,.94,n);for(const f of[-42.95,-42.21])o(h,1.66,f,.09,.12,.04,r)}o(-7.5,1.66,-42.095,.3,.035,.028,n),o(-7.5,1.728,-42.083,.07,.07,.018,i),s.sign("BIOLOGICAL TRANSFER / DO NOT OPEN",-9.965,2.48,-43.9,2.23,.52,Math.PI/2,"#b7a57b","#253631"),o(.92,1.385,-39.61,.66,.045,.36,e);for(const h of[.6,1.24])o(h,1.415,-39.61,.025,.055,.36,n);for(const h of[-39.78,-39.44])o(.92,1.415,h,.66,.055,.025,n);for(let h=0;h<3;h++){const f=.75+h*.16;o(f,1.416,-39.62,.017,.018,.2,n,-.17+h*.12),o(f,1.426,-39.695,.038,.01,.055,t,-.17+h*.12)}s.addGeometry(new Zs(.034,.008,3,8),n,1.105,1.423,-39.565,Math.PI/2),s.addGeometry(new Zs(.034,.008,3,8),n,1.04,1.423,-39.565,Math.PI/2),l(c(1.045,1.423,-39.595),c(1.1,1.423,-39.726),.007,n,4),l(c(1.1,1.423,-39.595),c(1.045,1.423,-39.726),.007,n,4)}function om(s,t){const e=document.createElement("canvas");e.width=e.height=s==="raptor"?128:64;const n=e.width,i=e.getContext("2d"),r=t>>16&255,a=t>>8&255,o=t&255,l=(h,f=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(r*h+f)))},${Math.max(0,Math.min(255,Math.round(a*h+f)))},${Math.max(0,Math.min(255,Math.round(o*h+f)))})`,c=h=>{const f=Math.sin(h*127.13+t*.0017)*43758.5453;return f-Math.floor(f)},u=(h,f,p,_,g)=>{i.fillStyle=g,i.fillRect(h,f,p,_)};i.fillStyle=l(s==="raptor"?.94:1),i.fillRect(0,0,n,n);for(let h=0;h<(s==="raptor"?1300:340);h++)u(Math.floor(c(h)*n),Math.floor(c(h+431)*n),1+h%2,1,l(.86+c(h+233)*.23));if(s==="raptor")if(t===10202996||t===12889715)for(let f=0;f<n;f+=7){u(0,f,n,1,l(.79)),u(0,f+1,n,1,l(1.04));for(let p=0;p<n;p+=15)u(p+f%3,f+2,1,4,l(.88))}else{for(let f=0;f<95;f++){const p=c(f+341)*n|0,_=c(f+761)*n|0,g=4+f%9,m=3+f%6;u(p,_,g,m,l(f%3===0?.79:.99)),u(p+2,_-1,g-3,1,l(f%3===0?.84:1.02))}for(let f=0;f<19;f++)for(let p=-1;p<19;p++){const _=f*29+p+73,g=p*7+f%2*3+(c(_)*3|0),m=f*7+(c(_+313)*3|0),y=3+_%3,w=3+_%2,v=.88+c(_+97)*.13;u(g,m,y,1,l(.77+c(_+43)*.07)),u(g-1,m+1,1,w,l(.81)),u(g,m+1,y,w,l(v)),u(g+1,m+1,y-2,1,l(1.05)),u(g+1,m+w+1,y-1,1,l(.84))}for(let f=0;f<64;f++)u(c(f+911)*n|0,c(f+721)*n|0,1,2,l(1.08));for(let f=0;f<3;f++)for(let p=0;p<13;p++)u(58+f*4+Math.floor(p*.25),69+p,1,1,l(1.16,5))}else if(s==="soldier")if(t===10587248)for(let h=0;h<50;h++)u(c(h+1001)*64|0,c(h+1071)*64|0,2,1,l(.88));else if(t===2108985){for(let h=1;h<64;h+=4)for(let f=h%8;f<64;f+=4)u(f,h,1,2,l(1.3));for(const h of[16,47])u(0,h,64,1,l(.55)),u(0,h+1,64,1,l(1.35))}else{u(3,3,58,1,l(1.48)),u(3,4,1,56,l(1.39)),u(3,59,58,2,l(.48)),u(60,4,2,56,l(.6)),u(13,12,39,1,l(.62)),u(13,13,1,27,l(.62)),u(14,40,38,1,l(1.23));for(const h of[7,55])for(const f of[7,55])u(h,f,3,3,l(.49)),u(h,f,1,1,l(1.8));for(let h=0;h<16;h++){const f=c(h+61)*59|0,p=c(h+93)*62|0;u(f,p,2+h%4,1,l(1.5)),u(f,p+1,1,1,l(.58))}for(let h=0;h<3;h++)u(19+h*7,23,4,2+h%2,l(1.65,10));u(38,33,8,5,l(.63)),u(39,34,5,1,l(1.45)),u(39,36,3,1,l(1.45));for(let h=0;h<6;h++)u(48,18+h*3,7,1,l(.48))}else if(t===8820318||t===10121060){for(let f=0;f<75;f++){const p=c(f+17)*64|0,_=c(f+223)*64|0,g=2+f%4,m=2+f%3;u(p,_,g,m,l(f%3===0?.72:1.17)),u(p+1,_+1,Math.max(1,g-2),1,l(f%3===0?.8:1.24))}for(let f=0;f<3;f++)for(let p=0;p<23;p++){const _=9+f*19+Math.floor(Math.sin(p*.18)*2);u(_,7+p,1,1,"#664a3c"),p%5===0&&(u(_-2,7+p,5,1,l(.59)),u(_-2,6+p,1,1,l(1.3)))}for(let f=0;f<12;f++)u(c(f+1101)*64|0,c(f+1131)*64|0,1,3,"#775944")}else{u(3,3,58,2,l(1.38)),u(3,5,2,54,l(1.18)),u(59,4,2,57,l(.54)),u(4,59,55,2,l(.5));for(let f=0;f<50;f++){const p=c(f+79)*64|0,_=c(f+91)*64|0;u(p,_,2+f%4,1+f%2,l(f%3===0?.52:1.24))}for(let f=8;f<57;f++){const p=23+Math.floor(Math.sin(f*.2)*4);u(p,f,1,1,l(.45)),f%7<3&&u(p+1,f,1,1,l(1.3))}for(const f of[7,54])for(const p of[7,54])u(f,p,3,3,l(.44)),u(f,p,1,1,l(1.65));if(s==="brute")for(let f=8;f<57;f+=8)u(f,44,4,6,"#b6a064"),u(f+4,44,3,6,"#352d2c");else for(let f=0;f<4;f++)u(41,15+f*4,12,2,l(.57))}const d=new us(e);return d.magFilter=de,d.minFilter=de,d.wrapS=d.wrapT=is,d.generateMipmaps=!1,d.colorSpace=we,d}const pc=Math.PI*2,Ii=(s,t,e)=>Math.max(t,Math.min(e,s)),$i=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e*n)),lm=(s,t)=>Math.atan2(Math.sin(t-s),Math.cos(t-s)),Hr=new z(0,-1,0),cm=new z(0,0,-1),hm=new z(1,0,0),Ki=new z,Zi=new z,ni=new z,Vr=new z,_l=new z,vl=new z,Ji=new Ve,Wr=new Ve,Xr=new Ve,qr=new Ve,Ml=new Ve,Sl=new Ve;function mc(s){for(const e of[...s.children])e instanceof Be&&mc(e);const t=new Map;for(const e of[...s.children])if(e instanceof ue&&!Array.isArray(e.material)){const n=t.get(e.material)??[];n.push(e),t.set(e.material,n)}for(const[e,n]of t){if(n.length<2)continue;const i=n.map(a=>(a.updateMatrix(),a.geometry.clone().applyMatrix4(a.matrix))),r=fc(i,!1);if(r){for(const a of n)s.remove(a),a.geometry.dispose();s.add(new ue(r,e))}for(const a of i)a.dispose()}}function bl(s,t,e){const n=new Be,i=new Be,r=new Be,a=new Be,o=new Be,l=new Be,c=new Be;n.add(i),i.add(r),r.add(a),a.add(o),o.add(l),l.add(c);const u={root:n,model:i,pelvis:r,chest:a,neck:o,head:l,jaw:c,legs:[],arms:[],tail:[],kind:s,mount:t,distance:0,heading:0,previousX:0,previousZ:0,previousTime:0,previousAlive:!0,initialized:!1,walkStarted:!1,motion:0,death:0,attackPose:0,turn:0,hipHeight:s==="raptor"?1.02:1.025,stride:s==="raptor"?1.65:s==="brute"?1.3:1.24};n.name=`creature-${s}${t?"-strider":""}`,i.name="creature-model",r.name="pelvis",a.name="chest",o.name="neck",l.name="head",c.name="jaw",n.scale.setScalar(t?1.45:s==="brute"?1.47:s==="soldier"?.96:1),r.position.y=u.hipHeight;const d=(C,I,P,L=[0,0,0],D=0)=>{const N=new ue(I,e(P,D));return N.position.set(...L),C.add(N),N},h=(C,I,P,L,D=0)=>d(C,new Ye(...P),L,I,D),f=(C,I,P,L)=>{const D=d(C,new nr(1,8,5),L,I);return D.scale.set(...P),D},p=(C,I,P,L,D,N,V=7)=>{const B=new z(...I),$=new z(...P),q=$.sub(B),W=d(C,new jt(D,L,q.length(),V,1),N);return W.position.copy(B).addScaledVector(q,.5),W.quaternion.setFromUnitVectors(new z(0,1,0),q.normalize()),W},_=(C,I,P,L,D,N=0,V=0)=>{const B=d(C,new er(P,L,5),D,I);return B.rotation.set(N,0,V),B},g=(C,I)=>{const P=new Be;return P.position.set(...I),C.add(P),P},m=(C,I,P)=>{const L=[],D=[],N=[];for(let B=0;B<I.length;B++)for(let $=0;$<8;$++){const q=$*pc/8,W=I[B];L.push(Math.cos(q)*W.x,W.y+Math.sin(q)*W.h,W.z),D.push($/8,B/(I.length-1))}for(let B=0;B<I.length-1;B++)for(let $=0;$<8;$++){const q=B*8+$,W=B*8+($+1)%8,K=q+8,pt=W+8;N.push(q,K,W,W,K,pt)}for(let B=1;B<7;B++){N.push(0,B,B+1);const $=(I.length-1)*8;N.push($,$+B+1,$+B)}const V=new ze;return V.setAttribute("position",new pe(L,3)),V.setAttribute("uv",new pe(D,2)),V.setIndex(N),V.computeVertexNormals(),d(C,V,P)},y=s==="raptor",w=s==="soldier",v=s==="brute",b=y?t?9798226:6322507:w?10587248:v?10121060:8820318,T=y?t?12889715:10202996:b,R=w?4809334:v?8075325:5135683,M=y?t?5984827:3492664:w?2108985:v?3942703:3556401,E=y?13945248:w?8426382:13943713;if(y){f(r,[0,.13,.13],[.32,.3,.6],b),f(a,[0,.09,-.34],[.265,.26,.39],b),f(a,[0,-.035,-.24],[.235,.135,.45],T),f(r,[0,-.015,.17],[.29,.17,.36],T),o.position.set(0,.13,-.5),p(o,[0,0,0],[0,.27,-.15],.16,.115,b),p(o,[0,.25,-.14],[0,.32,-.31],.118,.1,b),l.position.set(0,.32,-.3),m(l,[{z:.13,y:0,x:.14,h:.135},{z:-.06,y:.035,x:.172,h:.15},{z:-.23,y:.015,x:.128,h:.095},{z:-.52,y:-.014,x:.092,h:.074},{z:-.62,y:-.017,x:.076,h:.06}],b),f(l,[0,-.093,-.34],[.098,.032,.31],M),c.position.set(0,-.073,.08),m(c,[{z:0,y:-.035,x:.115,h:.036},{z:-.24,y:-.061,x:.102,h:.035},{z:-.6,y:-.056,x:.071,h:.028},{z:-.69,y:-.049,x:.05,h:.025}],T);for(const L of[-1,1]){const D=f(l,[L*.146,.092,-.085],[.052,.035,.12],b);D.rotation.z=L*.24,f(l,[L*.16,.055,-.128],[.018,.032,.036],M),h(l,[L*.172,.056,-.135],[.009,.018,.029],t?14071917:14264417,2561792),h(l,[L*.179,.056,-.141],[.004,.018,.008],M),f(l,[L*.059,.01,-.586],[.017,.012,.022],M);for(let K=0;K<6;K++){const pt=-.2-K*.064,vt=L*(.102-K*.006);_(l,[vt,-.105,pt],.015,.063+K%2*.012,E,Math.PI),_(c,[vt*.93,-.012,pt-.06],.013,.049,E)}const N=g(r,[L*.267,0,.19]),V=g(N,[0,-.5,0]),B=g(V,[0,-.55,0]),$=g(B,[0,-.28,0]);f(N,[0,-.145,0],[.19,.265,.23],b),p(N,[0,-.05,0],[0,-.5,0],.15,.075,b),f(V,[0,-.015,0],[.079,.085,.085],T),p(V,[0,-.02,0],[0,-.55,0],.076,.039,T),p(B,[0,0,0],[0,-.28,0],.04,.033,b),f($,[0,.035,-.08],[.093,.055,.13],b);for(let K=-1;K<=1;K++){const pt=K*.056;p($,[pt,.035,-.035],[pt*1.35,.022,-.225],.028,.019,b,5),p($,[pt*1.35,.023,-.22],[pt*1.48,.024,-.295],.026,.002,E,5)}p($,[-L*.08,.068,-.025],[-L*.104,.128,-.12],.031,.023,b,5),p($,[-L*.104,.135,-.12],[-L*.106,.152,-.2],.037,.026,E,5),p($,[-L*.106,.152,-.2],[-L*.105,.073,-.254],.026,.002,E,5),u.legs.push({hip:N,knee:V,hock:B,foot:$,side:L,upper:.5,lower:.55,metatarsal:.28,anchor:new Pt,swingStart:new Pt,worldFoot:new Pt,height:0,previous:0,initialized:!1});const q=g(a,[L*.23,.055,-.415]),W=g(q,[0,-.22,0]);p(q,[0,0,0],[0,-.22,0],.052,.036,b),p(W,[0,0,0],[0,-.21,0],.036,.028,b);for(let K=-1;K<=1;K++)p(W,[K*.029,-.205,0],[K*.038,-.265,-.08],.016,.011,b,5),p(W,[K*.038,-.265,-.08],[K*.04,-.29,-.11],.018,.001,E,5);u.arms.push({upper:q,lower:W,side:L});for(let K=0;K<5;K++){const pt=f(r,[L*.293,.2-K*.015,-.28+K*.18],[.027,.13,.053],M);pt.rotation.z=L*.28}}let C=g(r,[0,.14,.62]);const I=[.48,.47,.46,.45],P=[.164,.123,.079,.04,.008];for(let L=0;L<I.length;L++)u.tail.push(C),p(C,[0,0,0],[0,-.025,I[L]],P[L],P[L+1],b,8),C=g(C,[0,-.025,I[L]]);if(t){h(r,[0,.41,.08],[.51,.1,.53],4274220),h(r,[0,.48,.3],[.52,.18,.085],6574141);for(const L of[-1,1])h(r,[L*.325,.12,.075],[.045,.45,.16],4274220),h(r,[L*.385,-.085,.075],[.13,.045,.21],E),p(a,[L*.12,.39,-.68],[L*.24,.3,-.1],.012,.012,4274220,5)}}else{const C=v?.46:.31,I=v?.51:.345;if(f(r,[0,.025,.04],[C*.88,.19,.225],w?M:b),f(a,[0,.26,.03],[C*.8,.29,.205],b),f(a,[0,.49,.025],[C,.27,.235],b),p(a,[0,.58,0],[0,v?.66:w?.68:.75,-.015],.12,.102,b),o.position.set(0,v?.64:w?.65:.73,-.018),l.position.set(0,v||w?.1:.14,0),f(l,[0,.025,0],[.145,.19,.159],b),f(l,[0,-.092,-.025],[.123,.1,.13],b),c.position.set(0,-.062,-.012),w){for(const P of[-1,1])f(a,[P*.135,.47,-.174],[.164,.219,.1],R),h(a,[P*.165,.098,-.185],[.14,.19,.085],R),h(r,[P*.245,.015,-.185],[.13,.16,.1],M);for(let P=0;P<3;P++)h(a,[0,.28-P*.065,-.206],[.32,.045,.065],R);h(a,[0,.44,-.266],[.065,.22,.046],E),h(r,[0,.015,-.03],[.59,.07,.39],M),h(r,[0,.025,-.23],[.082,.06,.024],E),h(a,[0,.38,.258],[.31,.43,.17],M),h(a,[0,.48,.356],[.2,.24,.042],R),f(l,[0,.06,.007],[.18,.2,.187],R),h(l,[0,.014,-.16],[.255,.065,.026],M),h(l,[0,.021,-.18],[.216,.024,.01],6613456,1395522),h(l,[.073,.021,-.189],[.036,.029,.009],14721632,3282957),f(l,[0,-.086,-.134],[.104,.06,.075],M);for(const P of[-1,1])p(l,[P*.078,-.087,-.149],[P*.078,-.087,-.21],.033,.031,E),f(l,[P*.179,.03,.007],[.025,.072,.064],M);p(l,[.15,.15,.034],[.15,.32,.034],.009,.007,M,5),h(a,[-.136,.51,-.268],[.052,.053,.012],13280116)}else{f(a,[-C*.38,.5,-.126],[C*.67,.22,.17],b),f(a,[C*.45,.36,-.135],[C*.44,.205,.124],R);for(let P=0;P<4;P++)for(const L of[-1,1])p(a,[L*.025,.52-P*.069,-.236],[L*(C*.75-P*.018),.48-P*.064,-.199],.018,.013,E,5);p(a,[0,.51,-.246],[0,.245,-.225],.023,.018,M,5),h(a,[C*.82,.43,.042],[.14,.26,.27],R),h(a,[.055,.47,.239],[.19,.3,.08],7897973);for(let P=0;P<4;P++)h(a,[.053,.58-P*.062,.287],[.15,.023,.02],M);f(l,[-.053,.029,-.107],[.09,.07,.09],b),f(l,[.083,.027,-.103],[.084,.08,.072],R);for(const P of[-1,1])f(l,[P*.073,.047,-.144],[.052,.045,.022],M),h(l,[P*.071,.04,-.168],[.018,.012,.008],14003301,3348744);h(l,[0,-.069,-.142],[.126,.041,.03],M),f(c,[0,-.052,-.122],[.096,.045,.055],b);for(let P=0;P<5;P++)_(l,[(P-2)*.021,-.084,-.163],.008,.037,E,Math.PI),_(c,[(P-2)*.021,-.017,-.153],.008,.028,E);if(v){f(a,[-.36,.56,.035],[.25,.22,.27],R);for(let P=0;P<3;P++)_(a,[-.36+P*.093,.76,.05],.035,.17-P*.018,E,0,-.15)}}for(const P of[-1,1]){const L=g(r,[P*(v?.23:.176),-.025,.018]),D=g(L,[0,-.52,0]),N=g(D,[0,-.54,0]),V=g(N,[0,0,0]);if(f(L,[0,-.2,.01],[v?.158:.119,.253,.13],w?M:b),p(L,[0,-.05,0],[0,-.52,0],v?.142:.105,.071,w?M:b),f(D,[0,-.008,-.032],[.085,.085,.095],R),p(D,[0,-.03,0],[0,-.54,0],.08,.052,w?M:b),w&&(h(L,[0,-.185,-.09],[.17,.28,.06],R),h(D,[0,-.21,-.066],[.12,.24,.055],R)),h(V,[0,.027,-.092],[v?.21:.16,.14,.31],w?M:R),h(V,[0,-.035,-.085],[v?.215:.165,.038,.33],M),!w)for(let W=-1;W<=1;W++)p(V,[W*.044,.012,-.222],[W*.053,.011,-.273],.016,.001,E,5);u.legs.push({hip:L,knee:D,hock:N,foot:V,side:P,upper:.52,lower:.54,metatarsal:0,anchor:new Pt,swingStart:new Pt,worldFoot:new Pt,height:0,previous:0,initialized:!1});const B=g(a,[P*I,.56,.015]),$=g(B,[0,-.34,0]),q=!w&&P<0;if(f(B,[0,-.075,0],[q?.17:.12,.16,.14],w?R:b),p(B,[0,-.06,0],[0,-.34,0],q?.137:.105,.073,w?M:b),p($,[0,0,0],[0,-.33,0],q?.115:.075,.048,w?M:b),f($,[0,-.34,-.014],[.06,.09,.055],w?M:b),w)h($,[0,-.16,-.05],[.11,.18,.06],R);else for(let W=-1;W<=1;W++)p($,[W*.034,-.373,-.025],[W*.041,-.43,-.065],.019,.012,b,5),p($,[W*.041,-.43,-.065],[W*.043,-.443,-.112],.018,.002,E,5);if(u.arms.push({upper:B,lower:$,side:P}),w&&P===1){const W=g($,[0,-.325,-.035]);W.name="rifle",W.rotation.x=-1.4,h(W,[0,-.035,-.1],[.105,.11,.38],M),h(W,[0,.025,-.09],[.085,.045,.29],E),p(W,[0,-.025,-.27],[0,-.025,-.61],.025,.018,M,6),h(W,[0,-.135,-.06],[.06,.17,.085],M),h(W,[0,.032,-.21],[.023,.018,.038],14203763,3153920)}}}u.legs.forEach(C=>{const I=C.side<0?"left":"right";C.hip.name=`${I}-thigh`,C.knee.name=`${I}-knee`,C.hock.name=`${I}-hock`,C.foot.name=`${I}-foot`}),u.arms.forEach(C=>{const I=C.side<0?"left":"right";C.upper.name=`${I}-upper-arm`,C.lower.name=`${I}-elbow`}),u.tail.forEach((C,I)=>C.name=`tail-${I}`),mc(i),Oa(u,{x:0,z:0,heading:0,speed:0,attack:0,hurt:0,alive:!0,time:0,dt:0}),u.initialized=!1;for(const C of u.legs)C.initialized=!1;return u}function Yr(s,t,e,n){const i=s.root.scale.x,r=Math.cos(s.heading),a=Math.sin(s.heading);return n.set(s.root.position.x+(t*r+e*a)*i,s.root.position.z+(-t*a+e*r)*i)}function um(s,t,e,n,i,r){const a=s.kind==="raptor",o=a?.47:0,l=n+(a?Math.cos(o)*t.metatarsal:0),c=i+(a?Math.sin(o)*t.metatarsal:0);Ji.copy(s.pelvis.quaternion).invert(),Ki.set(e,l,c).sub(s.pelvis.position).applyQuaternion(Ji).sub(t.hip.position);const u=Ki.length(),d=Ii(u,Math.abs(t.upper-t.lower)+.01,t.upper+t.lower-.002);Zi.copy(Ki).multiplyScalar(1/Math.max(1e-4,u)),Ki.copy(Zi).multiplyScalar(d),ni.copy(cm).applyQuaternion(Ji),ni.addScaledVector(Zi,-ni.dot(Zi)),ni.lengthSq()<1e-5&&ni.set(0,1,0),ni.normalize();const h=(t.upper*t.upper-t.lower*t.lower+d*d)/(2*d),f=Math.sqrt(Math.max(0,t.upper*t.upper-h*h));Vr.copy(Zi).multiplyScalar(h).addScaledVector(ni,f),_l.copy(Ki).sub(Vr).normalize(),Wr.setFromUnitVectors(Hr,Vr.normalize()),Xr.setFromUnitVectors(Hr,_l),t.hip.quaternion.copy(Wr),t.knee.quaternion.copy(Wr).invert().multiply(Xr),vl.set(0,-Math.cos(o),-Math.sin(o)).applyQuaternion(Ji),qr.setFromUnitVectors(Hr,vl),t.hock.quaternion.copy(Xr).invert().multiply(qr),Sl.setFromAxisAngle(hm,r),Ml.copy(Ji).multiply(Sl),t.foot.quaternion.copy(qr).invert().multiply(Ml)}function Oa(s,t){const e=Ii(t.dt,0,.1),n=s.kind==="raptor",i=s.kind==="soldier",r=s.kind==="brute",a=s.initialized&&(t.time<s.previousTime-.001||!s.previousAlive&&t.alive);if(a){s.initialized=!1,s.walkStarted=!1,s.distance=0,s.motion=0,s.attackPose=0,s.turn=0,s.death=0;for(const v of s.legs)v.initialized=!1}if(e===0&&s.initialized&&!a)return;const o=s.root.scale.x,l=s.initialized?Math.hypot(t.x-s.previousX,t.z-s.previousZ):0,c=!s.initialized||l>2.5||!t.alive&&s.death===0;s.initialized||(s.heading=t.heading,s.distance=0);const u=lm(s.heading,t.heading),d=u*(1-Math.exp(-(n?8:10)*e));s.heading+=d,s.turn=$i(s.turn,e?d/e:0,7,e),s.root.position.set(t.x,0,t.z),s.root.rotation.set(0,s.heading,0),s.previousX=t.x,s.previousZ=t.z,s.previousTime=t.time,s.previousAlive=t.alive,s.initialized=!0,s.motion=$i(s.motion,t.alive?Ii(t.speed/(n?3.2:2.1),0,1):0,9,e),t.alive&&t.speed>.02&&!s.walkStarted&&(s.distance=(n?.62:.66)*.5*s.stride,s.walkStarted=!0),t.alive&&t.speed>.02&&l<2.5&&(s.distance+=l/o),s.attackPose=$i(s.attackPose,Ii(t.attack,0,1),t.attack>s.attackPose?20:12,e),s.death=$i(s.death,t.alive?0:1,t.alive?25:6.2,e);const h=s.distance/s.stride,f=h*pc,p=s.attackPose,_=Math.sin(t.time*2.3)*.006*(1-s.motion)*(1-s.death);s.pelvis.position.y=s.hipHeight+Math.cos(f*2)*(n?.026:.017)*s.motion+_,s.pelvis.rotation.set(0,0,Math.sin(f)*(n?.02:.027)*s.motion),s.chest.rotation.set((n?-.035:-.055)*s.motion-(n?.07:.13)*p,Math.sin(f)*(i?.018:.045)*s.motion,0),s.neck.rotation.set((n?-.23:-.11)*p+_*.9,-s.turn*.013,0),s.head.rotation.set(t.hurt>0?Math.sin(t.time*40)*.055:0,0,t.hurt>0?-.055:0),s.jaw.rotation.x=n?-.075-p*.58:i?0:-p*.38,s.model.rotation.set(s.death*(n?-.07:.08),0,s.death*(n?1.49:1.52)),s.model.position.y=s.death*(n?.43:r?.64:i?.45:.485);const g=n?.62:.66,m=s.stride*g,y=m*.5,w=new Pt;for(const v of s.legs){const b=(h+(v.side>0?.5:0))%1;if(c||!v.initialized){const D=s.walkStarted?b<g?-y+b/g*m:y-(b-g)/(1-g)*m:0;Yr(s,v.hip.position.x,D+v.hip.position.z,v.anchor),v.worldFoot.copy(v.anchor),v.swingStart.copy(v.anchor),v.height=0,v.previous=b,v.initialized=!0}let T=0;if(t.alive&&t.speed>.035&&s.motion>.02)if(b<g)v.previous>=g&&Yr(s,v.hip.position.x,-y+v.hip.position.z,v.anchor),v.worldFoot.copy(v.anchor),v.height=0,T=-Math.pow(Ii((b/g-.77)/.23,0,1),2)*.2;else{v.previous<g&&v.swingStart.copy(v.anchor);const D=(b-g)/(1-g),N=D*D*(3-2*D);Yr(s,v.hip.position.x,-y+v.hip.position.z,w),v.worldFoot.copy(v.swingStart).lerp(w,N),v.height=Math.pow(Math.sin(D*Math.PI),1.3)*(n?.23:r?.16:.18)*Math.sqrt(s.motion),T=Math.sin(D*Math.PI)*.28,v.anchor.copy(v.worldFoot)}else v.height=$i(v.height,0,17,e),v.anchor.copy(v.worldFoot);v.previous=b;const M=(v.worldFoot.x-t.x)/o,E=(v.worldFoot.y-t.z)/o,C=Math.cos(s.heading),I=Math.sin(s.heading),P=M*C-E*I,L=M*I+E*C;um(s,v,P,(n?.025:.077)+v.height,L,T),s.death>.05&&(v.hip.rotation.x+=s.death*.35,v.knee.rotation.x-=s.death*.25)}for(const v of s.arms){const b=Math.sin(f+(v.side>0?Math.PI:0))*s.motion;n?(v.upper.rotation.x=.64-b*.22+p*.8,v.lower.rotation.x=.52+p*.3,v.upper.rotation.z=-v.side*(.18+p*.24)):i?(v.upper.rotation.x=v.side>0?.98:1.12,v.lower.rotation.x=v.side>0?.42:.58,v.upper.rotation.x-=p*.1,v.upper.rotation.z=v.side>0?-.06:.25):(v.upper.rotation.x=.13-b*.36+p*(v.side<0?1.3:.86),v.upper.rotation.z=-v.side*(.14+p*.34),v.lower.rotation.x=.22+p*(v.side<0?.51:.76)),v.upper.rotation.x-=s.death*.27,v.lower.rotation.x+=s.death*.42}for(let v=0;v<s.tail.length;v++){const b=s.tail[v];b.rotation.y=-Ii(s.turn,-3.2,3.2)*(.06+v*.018)+Math.sin(f-v*.55)*s.motion*(.045+v*.017),b.rotation.x=.012+p*(.045+v*.018)+Math.sin(t.time*1.4-v*.5)*.008*(1-s.motion)}}const $r=Math.PI*2,re=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)};function fm(s,t="#86ffb8",e="#101b20",n=256,i=64){const r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,i),a.fillStyle=t,a.fillRect(2,2,n-4,2),a.fillRect(2,i-4,n-4,2),a.fillRect(2,2,2,i-4),a.fillRect(n-4,2,2,i-4);const o=s.split("/").map(u=>u.trim());a.textAlign="center",a.textBaseline="middle";let l=o.length>1?19:22;l=Math.min(l,Math.floor((n-18)/(Math.max(...o.map(u=>u.length))*.61))),a.font=`bold ${Math.max(8,l)}px monospace`,o.forEach((u,d)=>a.fillText(u,n/2,i/2+(d-(o.length-1)/2)*(l+5)));const c=new us(r);return c.magFilter=c.minFilter=de,c.colorSpace=we,c.generateMipmaps=!1,c}function dm(){const s=document.createElement("canvas");s.width=64,s.height=80;const t=s.getContext("2d");t.fillStyle="#132126",t.fillRect(0,0,64,80),t.fillStyle="#2e594d";for(let n=0;n<80;n++)t.fillRect(re(n)*64|0,re(n+15)*80|0,2,4);t.fillStyle="#19252d",t.fillRect(16,39,36,32),t.fillStyle="#97654b",t.fillRect(24,20,20,27),t.fillStyle="#b78660",t.fillRect(26,21,15,21),t.fillStyle="#342731",t.fillRect(16,13,36,6),t.fillRect(21,7,23,9),t.fillStyle="#806454",t.fillRect(14,17,41,4),t.fillStyle="#131922",t.fillRect(27,28,17,3),t.fillRect(34,27,9,7),t.fillStyle="#81d9b5",t.fillRect(27,29,2,2),t.fillStyle="#382c2b",t.fillRect(29,39,10,3),t.fillStyle="#7f9e9a",t.fillRect(43,45,10,25),t.fillStyle="#313f47";for(let n=47;n<70;n+=5)t.fillRect(44,n,8,2);t.fillStyle="#fcba67",t.fillRect(47,48,2,2),t.fillStyle="#a0dabc",t.font="bold 6px monospace",t.textAlign="center",t.fillText("ELIAS VANE",32,76);const e=new us(s);return e.magFilter=e.minFilter=de,e.colorSpace=we,e}class pm{constructor(t){this.canvas=t,this.renderer=new tm({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=we,this.renderer.toneMapping=hn,this.scene.background=new Ft(593690),this.scene.fog=new Ka(661536,13,68),this.camera.rotation.order="YXZ";const e=new Zh(10077128,2112297,1.45);this.scene.add(e);const n=new qo(11123670,1.05);n.position.set(-10,25,12),this.scene.add(n);const i=new qo(7598010,.65);i.position.set(7,9,-25),this.scene.add(i);for(const r of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door"]){const a=new Ur({map:em(r)});this.retroMaterial(a),this.mats.set(r,a)}this.buildLevel(),this.flush();for(const r of De.doors)this.buildDoor(r);for(const r of De.enemies){const a=bl(r.kind,!1,(o,l=0)=>this.creatureMaterial(r.kind,!1,o,l));a.root.position.set(r.x,0,r.z),this.enemyGroups.set(r.id,a),this.scene.add(a.root)}for(const r of De.pickups){const a=this.buildPickup(r.kind);a.position.set(r.x,.5,r.z),this.scene.add(a),this.pickupGroups.set(r.id,a)}this.mountRig=bl("raptor",!0,(r,a=0)=>this.creatureMaterial("raptor",!0,r,a)),this.mountRig.root.position.set(De.mount.x,0,De.mount.z),this.mountRig.root.rotation.y=this.mountHeading,this.scene.add(this.mountRig.root),this.effectMat=new an({color:16777215,transparent:!0,opacity:.9}),this.effectMesh=new Ql(new Ye(.08,.08,.08),this.effectMat,128),this.effectMesh.instanceMatrix.setUsage(Wl),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated",this.atmosphere=new rm(this.scene)}renderer;scene=new Ph;camera=new $e(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;lamps=[];hazmat=[];mountRig;mountHeading=-.7;lastMountPosition;effectMesh;effectMat;dummy=new Me;snapGrid=new Pt(160,100);clock=0;cameraStride=0;cameraMotion=0;previousPlayer;lastResolution="";powerLamp;lights=[];atmosphere;retroMaterial(t){t.onBeforeCompile=e=>{e.uniforms.retroGrid={value:this.snapGrid},e.vertexShader=`uniform vec2 retroGrid;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},t.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(t,e=0,n=!0){const i=`c${t}-${e}`;let r=this.mats.get(i);return r||(r=new Ur({color:t,emissive:e,flatShading:n}),this.retroMaterial(r),this.mats.set(i,r)),r}basic(t){const e=`b${t}`;let n=this.mats.get(e);return n||(n=new an({color:t}),this.mats.set(e,n)),n}addGeometry(t,e,n,i,r,a=0,o=0,l=0){const c=new ae().compose(new z(n,i,r),new Ve().setFromEuler(new yn(a,o,l)),new z(1,1,1));t.applyMatrix4(c),t.attributes.normal||t.computeVertexNormals();const u=this.batches.get(e)||[];u.push(t),this.batches.set(e,u)}box(t,e,n,i,r,a,o,l=0){const c=new Ye(i,r,a),u=c.attributes.position,d=c.attributes.normal,h=c.attributes.uv;for(let f=0;f<u.count;f++){const p=Math.abs(d.getX(f)),_=Math.abs(d.getY(f));h.setXY(f,p>.5?u.getZ(f)/2:u.getX(f)/2,_>.5?u.getZ(f)/2:u.getY(f)/2)}this.addGeometry(c,o,t,e,n,0,l)}flush(){for(const[t,e]of this.batches){const n=fc(e,!1);this.scene.add(new ue(n,t));for(const i of e)i.dispose()}this.batches.clear()}sign(t,e,n,i,r=3,a=.8,o=0,l="#86ffb8",c="#101b20"){const u=fm(t,l,c),d=new an({map:u,side:Ke});this.mats.set(`sign-${this.mats.size}`,d);const h=new ue(new tn(r,a),d);return h.position.set(e,n,i),h.rotation.y=o,this.scene.add(h),h}lamp(t,e,n,i=8978368,r=!1){this.box(t,e,n,r?.08:1.2,r?1.9:.09,.1,this.mat(11791056,i));const a=new ue(new Ye(r?.09:1.22,r?1.95:.1,.11),this.basic(i));a.position.set(t,e,n+.015),this.scene.add(a),this.lamps.push(a)}buildLevel(){const t=e=>this.mats.get(e);this.box(-.7,-.12,-20,35,.2,69,t("road")),this.box(0,-.005,8,10.5,.08,8.1,t("floor")),this.box(0,-.005,-26,14,.08,12.1,t("labfloor")),this.box(11.3,-.005,-28,8,.08,8,t("floor")),this.box(0,-.005,-39,20,.08,14,t("labfloor")),this.box(-7,-.005,-49,8,.08,6,t("metal")),this.box(-15.4,-.005,-7,4,.08,6,t("floor")),this.box(0,4.05,8,10.6,.12,8.3,t("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,t("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,t("ceiling")),this.box(0,4.5,-39,20.4,.12,14,t("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,t("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,t("ceiling"));for(const e of De.walls)this.box(e.x,(e.y??0)+e.h/2,e.z,e.w,e.h,e.d,t(e.material)),e.h>3&&e.d<1&&(this.box(e.x,.15,e.z+.03,e.w,.25,e.d+.04,this.mat(1517867)),this.box(e.x,3.08,e.z+.035,e.w,.1,e.d+.08,this.mat(4153687)));for(let e=-1;e<=1;e+=2)for(let n=0;n<5;n++){const i=1-n*5,r=8+re(n+e+10)*10,a=e*17;this.box(a,r/2,i,6,r,4.5,t("brick")),this.box(a,r+.2,i,6.4,.4,4.8,this.mat(1583412));for(let o=4.8;o<r-1;o+=2.3)for(let l=0;l<2;l++){const c=e*13.95;this.box(c,o,i-1+l*2,.1,1.2,.9,this.mat((n+l)%3===0?6720377:1781821,(n+l)%3===0?2640696:0)),this.box(c-e*.04,o-.64,i-1+l*2,.25,.12,1.15,this.mat(989474))}this.box(a+e*.4,r+.8,i,.4,1.2,1.7,t("metal")),this.box(a,r+2.5,i,.12,4,.12,this.mat(4479848))}for(let e=0;e<10;e++){const n=-35+e*8,i=15+re(e+30)*27,r=-63-re(e+41)*18;this.box(n,i/2,r,5,i,6,this.mat(1385265));for(let a=4;a<i;a+=4)this.box(n,a,r+3.04,3.5,.15,.08,this.basic(2576199))}for(const e of[-11.8,11.8])this.box(e,.045,-8,2.6,.15,24,t("concrete")),this.box(e+Math.sign(e)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const e of[-1,1])for(let n=0;n<5;n++){const i=1-n*4.4;this.box(e*12.94,2.65,i,.08,1.8,1.7,this.mat(1518642));for(let r=-1;r<=1;r++)this.box(e*12.88,2.65,i+r*.58,.07,1.8,.045,this.mat(5859164));this.box(e*12.85,1.72,i,.13,.15,1.9,t("metal")),n%2===0&&this.lamp(e*12.84,3.95,i,n===2?14371183:7791803,!1)}for(const e of[6,10,-22,-27,-30,-34,-38,-42,-49]){const n=e<-31&&e>-46;this.box(0,3.91,e,n?20:9,.18,.25,t("metal")),this.lamp(e<-46?-7:0,e>0?3.79:4.22,e,11595712),this.box(3,4.12,e,1.5,.08,.8,t("metal"));for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,e,.06,.035,.65,this.mat(1189162))}for(const e of De.hazards){const n=new an({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${e.x}`,n);const i=new ue(new tn(e.w,e.d),n);i.rotation.x=-Math.PI/2,i.position.set(e.x,.11,e.z),this.scene.add(i),this.hazmat.push(i),this.box(e.x,e.x<0?.14:.02,e.z,e.w+.2,.1,e.d+.2,this.mat(2112557));for(let r=0;r<8;r++)this.box(e.x+(re(r)-.5)*e.w,.13,e.z+(re(r+13)-.5)*e.d,.12,.05,.12,this.basic(9623415))}for(const e of De.props){const n=e.x,i=e.z,r=e.rotation??0;if(["neon","office-sign","facility-sign","sign"].includes(e.kind)){const a=e.kind==="neon",o=e.kind==="office-sign"?3.05:e.kind==="facility-sign"?4.15:a?4.9:3.6;this.sign(e.label??"",n,o,i,e.kind==="facility-sign"?9:a?4.8:5,e.kind==="facility-sign"?1.3:.85,r,a&&i<-3?"#ff7095":"#96ffc9")}else if(e.kind==="portrait"){const a=new an({map:dm()});this.mats.set("portrait",a);const o=new ue(new tn(.9,1.12),a);o.position.set(n,2.1,i),o.rotation.y=Math.PI,this.scene.add(o),this.box(n,2.1,i+.08,1.04,1.27,.06,this.mat(5987138))}else if(e.kind==="office-board"){this.box(n,2,i,.08,1.7,3.7,this.mat(5327932)),this.sign(e.label??"",n-.06,2.55,i,2.8,.38,r,"#cecfaa","#32392e");for(let a=0;a<7;a++)this.box(n-.07,1.8+re(a)*.5,i+(re(a+10)-.5)*2.8,.035,.42,.31,this.mat(a%2?12233109:8296837))}else if(["terminal","console"].includes(e.kind)){this.box(n,1.4,i,.85,.65,.12,this.mat(1322032)),this.box(n,1.4,i+.07,.65,.45,.02,this.basic(3840368));for(let a=0;a<4;a++)this.box(n-.2,1.53-a*.08,i+.085,.32-re(a)*.1,.025,.01,this.basic(10280873));this.box(n,1.02,i+.2,.9,.08,.5,this.mat(4872532))}else if(e.kind==="lamp")this.box(n,1.9,i,.13,3.8,.13,this.mat(4217429)),this.box(n,3.7,i-.35,.12,.12,.8,this.mat(4217429)),this.lamp(n,3.61,i-.68,11530187);else if(e.kind==="car"){this.box(n,1,i,1.8,.65,3.6,this.mat(4797250),r),this.box(n,1.62,i-.2,1.58,.8,1.8,this.mat(2701636),r),this.box(n,1.63,i+.76,1.4,.48,.08,this.mat(1585465),r);for(const a of[-.97,.97])for(const o of[-1.15,1.15])this.addGeometry(new jt(.39,.39,.24,8),this.mat(1187107),n+a,.46,i+o,0,0,Math.PI/2);this.box(n,.78,i+1.86,1.1,.16,.08,this.basic(7021366)),this.box(n+.5,1.5,i,.04,.02,1.5,this.mat(9737091),.3)}else if(e.kind==="barrels")for(let a=0;a<3;a++){const o=n+a%2*.68,l=i+Math.floor(a/2)*.7;this.addGeometry(new jt(.29,.3,1,8),this.mat(a===2?5918776:2576451),o,.5,l),this.addGeometry(new jt(.31,.31,.07,8),this.mat(1059883),o,.22,l),this.addGeometry(new jt(.31,.31,.07,8),this.mat(1059883),o,.78,l),this.box(o,.6,l+.3,.17,.19,.02,this.basic(14003533))}else if(e.kind==="rubble")for(let a=0;a<12;a++)this.box(n+(re(a)-.5)*2,.18+re(a+10)*.18,i+(re(a+20)-.5)*2,.3+re(a+30)*.6,.25+re(a+40)*.4,.25+re(a+50)*.6,t("concrete"),re(a+60)*$r);else if(e.kind==="tank")this.addGeometry(new jt(.6,.65,.27,8),t("metal"),n,.14,i),this.addGeometry(new jt(.55,.55,2.5,8),this.mat(2384967,1063201),n,1.52,i),this.addGeometry(new jt(.65,.65,.28,8),t("metal"),n,2.91,i),this.box(n-.32,1.6,i+.45,.15,2.3,.15,this.basic(6671237)),this.box(n,1.8,i+.52,.28,.6,.16,this.mat(7580774)),this.box(n,1.4,i+.53,.53,.46,.12,this.mat(5929809)),this.box(n-.18,.8,i+.49,.12,.8,.15,this.mat(5929809)),this.box(n+.18,.8,i+.49,.12,.8,.15,this.mat(5929809));else if(e.kind==="pipe"){this.addGeometry(new jt(.15,.15,12,6),this.mat(4549473),n,3.3,i,Math.PI/2);for(let a=-2;a<=2;a++)this.addGeometry(new jt(.19,.19,.14,6),this.mat(1521208),n,3.3,i+a*2.4,Math.PI/2)}else if(e.kind==="lab-table"){this.box(n,1.27,i,3.9,.15,1.7,this.mat(5862506)),this.box(n,1.47,i,1.4,.26,.6,this.mat(6380610));for(let a=0;a<4;a++)this.box(n+(a-1.5)*.3,1.65,i,.16,.25,.18,this.mat(6653548))}else if(e.kind==="locker")this.box(n,1.25,i,.65,2.5,.85,t("metal")),this.box(n-.34,1.3,i,.025,.15,.17,this.basic(10471339));else if(e.kind==="power")this.box(n,1.15,i,.95,2.3,.45,t("metal")),this.sign("LIFT POWER",n,1.8,i+.24,1,.26),this.sign("E / ACTIVATE",n,1.48,i+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new ue(new Ye(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(n,1.12,i+.25),this.scene.add(this.powerLamp),this.box(n,.7,i+.28,.18,.35,.1,this.mat(12235397));else if(e.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,i,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,i,1,.4,Math.PI/2);else if(e.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",n,2.4,-51.91,5,.9),this.box(n,.05,i,6,.16,4,t("metal"));for(let a=0;a<5;a++)this.box(n,.17,i-2+a,6,.03,.12,this.mat(11310909))}else if(e.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(e.label??"",10,3.3,i,4,.65,-Math.PI/2,"#ff6b56");else if(e.kind==="street-mark")for(let a=0;a<3;a++)this.box(n,.05,i+(a-1)*1.8,.18,.03,.9,this.mat(9213035));else if(e.kind==="drain"){this.box(n,.04,i,1.7,.08,.6,this.mat(661533));for(let a=0;a<12;a++)this.box(n-.8+a*.14,.095,i,.055,.02,.5,this.mat(5399644))}else if(e.kind==="corpse"||e.kind==="skeleton")this.box(n,.17,i,.45,.3,1.5,this.mat(e.kind==="corpse"?5058625:10658186),.55),this.box(n-.24,.16,i+.75,.35,.23,.34,this.mat(7763815)),this.box(n,.025,i+.15,1.7,.02,2,this.mat(5051943));else if(e.kind==="chair"){this.box(n,.55,i,.6,.12,.6,this.mat(3684161)),this.box(n,.97,i+.25,.6,.8,.09,this.mat(3749953));for(const a of[-.23,.23])for(const o of[-.23,.23])this.box(n+a,.28,i+o,.06,.5,.06,t("metal"))}else if(e.kind==="bottles")for(let a=0;a<3;a++)this.addGeometry(new jt(.06,.1,.3,5),this.mat(4288072),n+a*.18,1,i);else e.kind==="secret-table"&&(this.box(n,.75,i,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}this.buildEnvironmentDetails(),am({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});for(const e of[[0,2.6,7],[0,3,-26],[0,3,-39],[8,3,-8],[-9,3,-7]]){const n=new Qh(e[2]===-7?13579886:5560217,7,12,2);n.position.set(e[0],e[1],e[2]),this.lights.push(n),this.scene.add(n)}}decal(t,e,n,i,r,a,o=0,l=!1){const c=`decal-${t}`;let u=this.mats.get(c);u||(u=new an({map:nm(t),alphaTest:.12,side:Ke,depthWrite:!l,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.mats.set(c,u)),this.addGeometry(new tn(r,a),u,e,n,i,l?-Math.PI/2:0,o)}buildEnvironmentDetails(){const t=c=>this.mats.get(c),e=this.mat(5005912),n=this.mat(1716275),i=this.mat(9279361),r=this.mat(7885891),a=this.mat(7496267),o=(c,u,d,h,f,p=0,_=0)=>this.addGeometry(new jt(h,h,f,8),e,c,u,d,p,0,_);this.box(-3.2,.88,8,2.3,.06,1.22,a),this.box(-3.2,.72,8.54,2,.16,.025,n);for(const c of[-3.7,-3.1,-2.5])this.box(c,.72,8.57,.49,.11,.035,a),this.box(c,.73,8.6,.16,.025,.03,i);this.box(-3.08,.98,8.26,.66,.055,.22,e);for(let c=0;c<3;c++)for(let u=0;u<10;u++)this.box(-3.34+u*.057,1.014,8.19+c*.052,.043,.018,.035,n);this.decal("paper",-2.46,.931,7.99,.43,.56,.15,!0),this.decal("paper",-3.96,.928,8.15,.36,.47,-.2,!0);for(let c=0;c<4;c++)this.box(-2.54,.96+c*.045,7.69,.38,.035,.32,this.mat(c%2?6315587:9273441),.12);this.box(-4.03,1.04,7.72,.29,.25,.22,n),this.box(-4.03,1.05,7.838,.23,.16,.012,e);for(let c=0;c<4;c++)this.box(-4.09+c*.04,1.06,7.85,.018,.09,.008,n);o(-4.13,1.26,7.69,.012,.32),this.box(-3.58,.95,8.35,.17,.05,.14,i),this.box(-3.59,.985,8.35,.1,.015,.08,n),o(-2.36,.953,7.72,.11,.04),o(-2.36,1.15,7.72,.025,.37),o(-2.53,1.39,7.72,.026,.4,0,Math.PI/2),this.addGeometry(new er(.19,.17,8),n,-2.69,1.37,7.72),this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(11390112));for(const c of[1.9,2.55]){this.box(-4.91,c,10.4,.16,.06,2.1,a);for(let u=0;u<9;u++){const d=9.58+u*.19;this.box(-4.89,c+.17,d,.16,.28+re(u)*.09,.12,this.mat([7162948,5730661,8287574][u%3])),this.box(-4.8,c+.16,d,.012,.025,.1,i)}}this.box(-4.98,.95,8,.07,.04,7.6,n),this.box(4.99,3.6,8,.07,.06,7.6,e),this.sign("VESPER 2091 / MISSING: MARA",-2.48,2.67,11.97,2.35,.44,Math.PI,"#b7a57b","#2b3230"),this.decal("paper",1.9,.048,10,.43,.54,.6,!0),this.decal("paper",1.65,.047,10.32,.31,.42,-.2,!0);for(const c of[-1,1])for(let u=0;u<5;u++){const d=1-u*4.4,h=c*12.87;for(const p of[-.99,.99])this.box(h,2.65,d+p,.15,2.1,.14,e),this.box(h-c*.045,2.65,d+p,.06,1.9,.04,i);if(this.box(h,3.71,d,.22,.13,2.16,e),this.box(h,1.56,d,.29,.12,2.22,n),u%2===1){this.box(c*12.5,3.98,d,.95,.1,2.4,n);for(let p=0;p<6;p++)this.box(c*12.47,4.037,d-1.05+p*.4,.94,.015,.14,this.mat(c<0?8478553:5471595));this.box(c*12.04,3.82,d,.055,.28,2.42,e)}const f=d-1.65;this.box(c*12.84,4.77,f,.28,.63,.94,t("metal"));for(let p=0;p<6;p++)this.box(c*12.66,4.52+p*.09,f,.026,.035,.77,n);o(c*12.78,3.2,f,.043,2.3),this.box(c*12.72,2.01,f,.16,.19,.18,r),this.decal("leak",c*12.975,2.9,f+.1,1,1.7,-c*Math.PI/2),(u===0||u===3)&&this.decal("poster",c*12.97,1.68,d-1.68,.64,.95,-c*Math.PI/2);for(const p of[-1.8,1.8])this.box(c*12.8,5.65,d+p,.14,.4,.17,e)}this.decal("graffiti",12.97,1.12,-14.2,2.55,1.12,-Math.PI/2),this.decal("graffiti",-12.97,1.3,-.7,2.4,1.05,Math.PI/2);for(const c of[-1,1]){o(c*12.83,5.4,-8,.065,23,Math.PI/2);for(let u=2;u>-20;u-=4)this.box(c*12.75,5.4,u,.09,.24,.2,e),this.box(c*11.78,.13,u,2.25,.024,.025,n);for(let u=1;u>-20;u-=6){this.box(c*11.68,.143,u,.7,.02,.42,n);for(let d=0;d<7;d++)this.box(c*11.68-.3+d*.1,.16,u,.038,.018,.38,e)}}for(let c=0;c<16;c++){const u=2-c*1.35;this.box(.6,.038,u,.12,.012,.62,this.mat(9277799));for(let d=0;d<3;d++)this.box(.58+(re(c+d)-.5)*.13,.047,u+(re(c+d+20)-.5)*.65,.08,.004,.05,t("road"))}for(const[c,u,d,h]of[[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal("puddle",c,.049,u,d,h,0,!0);for(let c=0;c<8;c++){const u=-10.7+re(c+42)*21,d=-1-re(c+90)*18;this.decal("paper",u,.048,d,.23,.31,re(c)*$r,!0)}this.box(-7,.85,-8.17,1.75,.14,.1,e);for(let c=0;c<10;c++)this.box(-7.6+c*.13,1.02,-8.11,.044,.13,.04,n);for(const c of[-7.59,-6.41])this.box(c,1.12,-8.12,.28,.19,.045,this.mat(10593678)),this.box(c,1.13,-8.09,.21,.07,.015,this.basic(7835254));this.box(-7,1.38,-8.22,1.53,.03,.1,r),this.box(-7.2,1.66,-9.2,.026,.45,.028,i,.6);for(const c of[-.97,.97])for(const u of[-1.15,1.15])this.addGeometry(new jt(.2,.2,.27,8),e,-7+c,.46,-10+u,0,0,Math.PI/2),this.addGeometry(new jt(.085,.085,.28,6),n,-7+c,.46,-10+u,0,0,Math.PI/2);for(const[c,u,d]of[[6.98,-21,-31],[9.98,-33,-45]])for(const h of[-1,1]){const f=h*c;this.box(f,3.9,(u+d)/2,.14,.21,u-d,e),o(f-h*.11,3.62,(u+d)/2,.055,u-d,Math.PI/2);for(let p=u;p>=d;p-=2.4){this.box(f,2,p,.065,3.65,.075,n);for(const _ of[.4,1.5,2.6,3.6])this.box(f-h*.045,_,p,.035,.055,.055,i);this.box(f-h*.09,3.62,p,.06,.27,.22,e)}this.decal("circuit",f-h*.04,1.6,(u+d)/2,.53,.76,-h*Math.PI/2)}for(const c of[-3.5,3.5]){this.box(c,4.28,-39,.6,.18,12,t("metal"));for(let u=-33.3;u>-45;u-=.65)this.box(c,4.17,u,.47,.08,.07,n);this.box(c,4.03,-33.5,.82,.18,.19,e),this.box(c,4.03,-44.5,.82,.18,.19,e)}this.decal("poster",-6.975,2.05,-22.8,.73,1.02,Math.PI/2),this.sign("HELIX / SECTOR 04",6.98,2.55,-22.8,1.7,.42,-Math.PI/2,"#b3c4a1");let l=0;for(const c of De.props)if(c.kind==="tank"){const{x:u,z:d}=c;for(const h of[.32,2.7]){this.addGeometry(new jt(.63,.63,.12,8),e,u,h,d);for(let f=0;f<8;f++){const p=f*$r/8;this.box(u+Math.sin(p)*.6,h,d+Math.cos(p)*.6,.075,.16,.075,i,p)}}for(const h of[-.45,.45])o(u+h,1.52,d-.36,.042,2.47);o(u,3.16,d,.1,.34),o(u,3.29,d-.5,.07,1,Math.PI/2),this.box(u+.43,1.6,d+.37,.31,.67,.18,n),this.decal("circuit",u+.43,1.6,d+.465,.24,.54),this.addGeometry(new jt(.105,.105,.035,12),i,u+.43,2.14,d+.42,Math.PI/2),this.box(u+.43,2.14,d+.446,.01,.11,.016,this.mat(12281932),.4),this.sign(`LZ-${String(++l).padStart(2,"0")} / CONTAINED`,u,.64,d+.655,.72,.18,0,"#b6cda2","#183b34")}for(const[c,u,d]of[[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){this.box(c-.6,d+.09,u+.22,.26,.14,.3,n),this.box(c-.6,d+.16,u+.22,.19,.015,.2,i),this.decal("paper",c+.57,d+.009,u,.31,.43,.2,!0);for(let h=0;h<4;h++)this.box(c-.65+h*.15,d+.013,u-.24,.08,.012,.02,r)}for(const c of[-1.38,1.38]){this.box(c,1.36,-40,.23,.055,1.43,i);for(const u of[-40.49,-39.52])this.box(c,1.41,u,.27,.05,.12,n)}this.box(-1.1,1.4,-40,.18,.2,.22,n),o(-1.09,1.65,-40,.045,.28),this.box(-1.17,1.79,-40,.18,.07,.14,i);for(let c=0;c<3;c++){const u=.8+c*.27;this.addGeometry(new jt(.06,.09,.29,6),this.mat(6523764),u,1.48,-40.4),this.box(u,1.64,-40.4,.07,.025,.07,e)}this.decal("paper",-1,1.36,-39.6,.35,.43,0,!0);for(const c of[-10.87,-3.12]){o(c,2.1,-49,.09,3.6);for(const u of[.7,3.45])o(c,u,-49,.14,.12);this.box(c,2.7,-51.88,.23,1.5,.12,e)}this.box(-7,4.25,-51.86,6,.12,.14,e),this.sign("AXIOM INDUSTRIES / FREIGHT 06",-7,1.35,-51.87,3.6,.36,0,"#8aa08e")}mesh(t,e,n,i,r,a){const o=new ue(t,e);return o.position.set(n,i,r),a.add(o),o}localBox(t,e,n,i,r,a,o,l,c=0){return this.mesh(new Ye(r,a,o),this.mat(l,c),e,n,i,t)}buildDoor(t){const e=new Be;e.position.set(t.x,0,t.z),this.mesh(new Ye(t.w,3.2,t.d),this.mats.get("door"),0,1.6,0,e);const n=t.w>t.d;n?(this.localBox(e,0,1.58,t.d/2+.015,t.w*.85,.08,.035,7581064),this.localBox(e,t.w*.35,1.3,t.d/2+.03,.15,.25,.03,t.locked?15629110:7924400,2250034)):this.localBox(e,-t.w/2-.015,1.58,0,.035,.08,t.d*.85,7581064),this.scene.add(e),this.doorGroups.set(t.id,e);const i=n?t.x:t.x-.3,r=n?t.z+.33:t.z;this.sign(t.label,i,3.57,r,n?Math.min(t.w+1.4,5):2.4,.5,n?0:-Math.PI/2,t.locked?"#ffb05d":"#8ccdaa")}creatureMaterial(t,e,n,i=0){const a={raptor:[6322507,10202996,9798226,12889715],soldier:[10587248,4809334,2108985,8426382],mutant:[8820318,5135683,7897973],brute:[10121060,8075325,7897973]}[t].includes(n)&&!i,o=[6322507,10202996,9798226,12889715,10587248,8820318,10121060].includes(n),l=`creature-${t}-${e?"saddle":"enemy"}-${n}-${i}`;let c=this.mats.get(l);if(!c){const u={color:a?16777215:n,map:a?om(t,n):void 0,emissive:i,flatShading:!o};c=t==="soldier"&&a&&!o?new Yh({...u,shininess:14,specular:2437168}):new Ur(u),this.mats.set(l,c)}return c}buildPickup(t){const e=new Be,i={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:9149585,plasma:6547611,machinegun:7767941}[t];if(t==="health")this.localBox(e,0,0,0,.55,.34,.3,12898751),this.localBox(e,0,0,.16,.3,.08,.015,12992833),this.localBox(e,0,0,.161,.08,.27,.015,12992833);else if(t==="armor"){this.localBox(e,0,0,0,.45,.42,.24,i),this.localBox(e,0,.26,0,.22,.13,.2,9684915);for(const a of[-1,1])this.localBox(e,a*.27,.1,0,.1,.3,.22,i)}else if(t==="ammo"){this.localBox(e,0,0,0,.5,.3,.35,5859659);for(let a=0;a<4;a++)this.localBox(e,-.17+a*.115,.19,0,.055,.15,.065,i)}else if(t==="keycard")this.localBox(e,0,0,0,.35,.23,.02,8961178),this.localBox(e,0,.04,-.015,.33,.04,.02,2178355),this.localBox(e,.08,-.06,-.016,.07,.055,.02,15060343);else if(t==="evidence"){this.localBox(e,0,0,0,.42,.02,.48,i);for(let a=0;a<5;a++)this.localBox(e,0,.016,-.15+a*.07,.24,.009,.018,4806471)}else this.localBox(e,0,0,0,t==="revolver"?.35:.7,.13,.2,i),this.localBox(e,.27,0,0,.4,.06,.07,6584431),this.localBox(e,-.11,-.15,0,.12,.22,.12,4209714),t==="plasma"&&this.localBox(e,0,.07,-.105,.37,.06,.035,7993010,1333048);const r=new ue(new Ja(.28,.36,12),new an({color:i,transparent:!0,opacity:.6,side:Ke}));return r.rotation.x=-Math.PI/2,r.position.y=-.43,e.add(r),e}resize(t){const e=t.resolution==="320"?320:640,n=t.resolution==="320"?200:400;this.renderer.setSize(e,n,!1),this.snapGrid.set(e/2,n/2);const i=this.canvas.getBoundingClientRect();this.camera.aspect=i.width&&i.height?i.width/i.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=t.resolution;for(const r of this.lights)r.visible=t.quality==="high"}render(t,e,n){this.lastResolution!==n.resolution&&this.resize(n),this.clock+=e;const i=t.player,r=this.previousPlayer,a=r?Math.hypot(i.x-r.x,i.z-r.z):0;r&&t.time<r.time&&(this.cameraStride=0,this.cameraMotion=0,this.lastMountPosition=void 0,this.mountHeading=-.7);const o=e>0&&a<1.5?a:0;this.cameraStride+=o,e>0&&(this.cameraMotion+=(Math.min(1,o/Math.max(e,.001)/4.4)-this.cameraMotion)*(1-Math.exp(-e*15))),this.previousPlayer={x:i.x,z:i.z,time:t.time};const l=i.crouching?.9:i.mounted?2.6:1.65,c=t.status==="playing"?Math.sin(this.cameraStride*(i.mounted?4.3:8.2))*this.cameraMotion*(i.mounted?.032:.016):0;this.camera.position.set(i.x,i.y+l+c,i.z),this.camera.rotation.set(i.pitch+i.recoil*.012,i.yaw,0,"YXZ");for(const p of t.doors){const _=this.doorGroups.get(p.id);_&&(_.position.y=p.open*3.4)}for(const p of t.enemies){const _=this.enemyGroups.get(p.id);Oa(_,{x:p.x,z:p.z,heading:p.heading,speed:p.speed,attack:p.attack,hurt:p.hurt,alive:p.alive,time:t.time,dt:e})}for(const p of t.pickups){const _=this.pickupGroups.get(p.id);_.visible=!p.collected,_.visible&&(_.position.y=.48+Math.sin(this.clock*3+p.x)*.06,_.rotation.y=this.clock*.75)}const u=t.mount,d=this.lastMountPosition,h=d?Math.hypot(u.x-d.x,u.z-d.z):0;h>.002&&h<2&&(this.mountHeading=Math.atan2(-(u.x-d.x),-(u.z-d.z))),Oa(this.mountRig,{x:u.x,z:u.z,heading:this.mountHeading,speed:e>0&&h<2?h/e:0,attack:i.mounted?i.recoil:0,hurt:0,alive:!0,time:t.time,dt:e}),this.mountRig.root.visible=!i.mounted,this.lastMountPosition={x:u.x,z:u.z},this.powerLamp&&this.powerLamp.material.color.setHex(t.powered?7602073:16737843);for(let p=0;p<this.lamps.length;p++)this.lamps[p].visible=Math.sin(this.clock*3+p*1.73)>0||p%4!==1||Math.sin(this.clock*31+p)>-.7;for(let p=0;p<this.hazmat.length;p++)this.hazmat[p].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+p),.19);let f=0;for(const p of t.effects){const _=p.kind==="blood"?12334150:p.kind==="plasma"?7274401:p.kind==="smoke"?6585208:16765568,g=1-p.life/p.maxLife;for(let m=0;m<(p.kind==="muzzle"?3:7)&&f<128;m++){const y=p.kind==="smoke"?.32:p.kind==="plasma"?.06:.22;this.dummy.position.set(p.x+(re(m+p.x)-.5)*g*y*5+(p.dx??0)*g*.4,p.y+(re(m+p.z)-.3)*g*y*3,p.z+(re(m+13)-.5)*g*y*5+(p.dz??0)*g*.4),this.dummy.scale.setScalar(p.kind==="smoke"?1+g*4:Math.max(.25,1-g)),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(f,this.dummy.matrix),this.effectMesh.setColorAt(f,new Ft(_)),f++}}this.effectMesh.count=f,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.atmosphere.update(t,this.camera,this.clock,n),this.renderer.render(this.scene,this.camera)}dispose(){this.atmosphere.dispose();const t=new Set;this.scene.traverse(e=>{e instanceof ue&&t.add(e.geometry)});for(const e of t)e.dispose();for(const e of this.mats.values())e.map?.dispose(),e.dispose();this.effectMat.dispose(),this.renderer.dispose()}}const Pn={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026}},Kr=["revolver","shotgun","plasma","machinegun"],yl={revolver:0,shotgun:0,plasma:0,machinegun:0},Xn={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},Le=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),qe=(s,t,e)=>Math.max(t,Math.min(e,s));class gc{constructor(t,e="normal"){this.level=t,this.resetState(e)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(t){const e=t==="easy"?.8:t==="hard"?1.18:1,n={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:"revolver",owned:[],ammo:{...yl},reserve:{...yl},reload:0,cooldown:0,recoil:0,hurt:0};this.state={player:n,enemies:this.level.enemies.map(i=>({...i,health:Math.round(Xn[i.kind].health*e),maxHealth:Math.round(Xn[i.kind].health*e),alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,heading:0,speed:0,attack:0,vx:0,vz:0,path:[],pathTime:0})),doors:this.level.doors.map(i=>({...i,open:0,target:0})),pickups:this.level.pickups.map(i=>({...i,collected:!1})),effects:[],status:"playing",kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty:t},this.reloading=null,this.attackWindups.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}restart(t=!1){if(t&&!this.checkpointState){this.resetState(this.state.difficulty);const e=this.state,n=e.player;n.keycard=!0,n.owned=["revolver","shotgun","machinegun"],n.weapon="machinegun",n.health=100,n.armor=55;for(const i of n.owned)n.ammo[i]=Pn[i].clip,n.reserve[i]=Pn[i].clip*4;for(const i of e.pickups)i.z>-32.2&&i.kind!=="evidence"&&i.x>-13&&(i.collected=!0);for(const i of e.enemies)i.z>-32.2&&(i.alive=!1,i.health=0,i.speed=0,i.vx=0,i.vz=0,i.attack=0,e.kills++);for(const i of e.doors)["office","facility","security"].includes(i.id)&&(i.open=1,i.target=1);e.checkpoint=!0,this.checkpointState=structuredClone(e),this.checkpointSecrets=[]}if(t&&this.checkpointState){this.state=structuredClone(this.checkpointState);const e=this.state.player;e.x=this.level.checkpoint.x,e.z=this.level.checkpoint.z,e.y=0,e.vy=0,e.grounded=!0,e.mounted=!1,e.health=Math.max(e.health,75),e.armor=Math.max(e.armor,25),e.cooldown=0,e.reload=0,e.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const n of this.state.enemies)n.path=[],n.pathTime=0,n.cooldown=1.1,n.speed=0,n.vx=0,n.vz=0,n.attack=0;this.message("CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.",4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(t,e){t=qe(t,0,.075);const n=this.state,i=n.player;if(n.status!=="playing")return;if(n.time+=t,n.messageTime=Math.max(0,n.messageTime-t),i.yaw+=e.lookX,i.pitch=qe(i.pitch+e.lookY,-1.22,1.22),i.cooldown=Math.max(0,i.cooldown-t),i.recoil=Math.max(0,i.recoil-t*4.6),i.hurt=Math.max(0,i.hurt-t*2),this.emptyClick=Math.max(0,this.emptyClick-t),i.reload>0&&(i.reload=Math.max(0,i.reload-t),i.reload===0&&this.reloading)){const a=this.reloading,o=Math.min(Pn[a].clip-i.ammo[a],i.reserve[a]);i.ammo[a]+=o,i.reserve[a]-=o,this.reloading=null}(e.weaponDelta||e.weaponSlot)&&this.switchWeapon(e.weaponDelta,e.weaponSlot||void 0),e.reload&&this.reload(),e.interact&&this.interact(),this.updateDoors(t),this.movePlayer(t,e),this.collectPickups(),e.fire&&this.fire();const r=e.slow&&n.slow>.015;n.slow=qe(n.slow+(r?-.17:.085)*t,0,1),this.updateEnemies(t*(r?.32:1),t),this.updateHazards(t);for(const a of n.effects)a.life-=t;n.effects=n.effects.filter(a=>a.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const t=this.state.player;return t.y+(t.mounted?2.6:t.crouching?.9:1.65)}canOccupy(t,e,n=.32,i=this.state.player.y){return this.state.player.mounted&&(e<-19.1||e>3.2)?!1:this.clearAt(t,e,n,i,this.height())}clearAt(t,e,n,i=0,r=1.8){const a=this.level.bounds;if(t-n<a.minX||t+n>a.maxX||e-n<a.minZ||e+n>a.maxZ)return!1;for(const o of this.level.walls){const l=o.y??0;if(!(i>=l+o.h-.025||i+r<=l+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1}for(const o of this.state.doors)if(!(i+r<=o.open*3.4+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1;return!0}circleBox(t,e,n,i,r,a,o){const l=qe(t,i-a/2,i+a/2),c=qe(e,r-o/2,r+o/2);return(t-l)**2+(e-c)**2<n*n}movePlayer(t,e){const n=this.state.player;e.crouch&&!n.mounted?n.crouching=!0:n.crouching&&(n.crouching=!1,this.canOccupy(n.x,n.z)||(n.crouching=!0));const i=qe(e.forward,-1,1),r=qe(e.strafe,-1,1),a=Math.max(1,Math.hypot(i,r)),o=n.mounted?8:n.crouching?2.3:e.sprint?6.4:4.4,l=(-Math.sin(n.yaw)*i+Math.cos(n.yaw)*r)*o*t/a,c=(-Math.cos(n.yaw)*i-Math.sin(n.yaw)*r)*o*t/a;n.mounted&&(n.z+c<-19.1||n.z+c>3.2)&&this.message("Your strider stays in the street. Press E to dismount and enter the building.",2);const u=Math.max(1,Math.ceil(Math.hypot(l,c)/.14)),d=n.mounted?.53:.32;for(let p=0;p<u;p++)this.canOccupy(n.x+l/u,n.z,d)&&(n.x+=l/u),this.canOccupy(n.x,n.z+c/u,d)&&(n.z+=c/u);e.jump&&!this.jumpHeld&&n.grounded&&!n.crouching&&(n.vy=n.mounted?6.4:6.1,n.grounded=!1),this.jumpHeld=e.jump,n.vy-=14*t;const h=n.y+n.vy*t;let f=0;if(n.vy<=0)for(const p of this.level.walls){const _=(p.y??0)+p.h;_<=n.y+.035&&_>=h&&this.circleBox(n.x,n.z,d,p.x,p.z,p.w,p.d)&&(f=Math.max(f,_))}n.vy<=0&&h<=f?(n.y=f,n.vy=0,n.grounded=!0):this.canOccupy(n.x,n.z,d,h)?(n.y=h,n.grounded=!1):n.vy>0&&(n.vy=0),n.mounted&&(this.state.mount.x=n.x,this.state.mount.z=n.z)}switchWeapon(t,e){const n=this.state.player;if(!n.owned.length)return;let i;if(e){if(i=Kr[qe(Math.round(e)-1,0,3)],!n.owned.includes(i)){this.message("Weapon not acquired yet.",1.5);return}}else{const r=Kr.filter(o=>n.owned.includes(o)),a=r.indexOf(n.weapon);i=r[(a+(t>0?1:-1)+r.length)%r.length]}i!==n.weapon&&(n.weapon=i,n.reload=0,n.cooldown=.22,n.recoil=.22,this.reloading=null,this.message(Pn[i].name,1.2))}reload(){const t=this.state.player,e=t.weapon,n=Pn[e];if(!(!t.owned.includes(e)||t.reload>0||t.ammo[e]>=n.clip)){if(t.reserve[e]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=e,t.reload=n.reload,this.state.events.push({type:"reload",weapon:e})}}fire(){const t=this.state.player;if(this.state.status!=="playing"||t.cooldown>0||t.reload>0)return;if(t.mounted){this.bite();return}if(!t.owned.includes(t.weapon)){this.message("Find your revolver in the office.",2);return}const e=Pn[t.weapon];if(t.ammo[t.weapon]<=0){t.reserve[t.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}t.ammo[t.weapon]--,t.cooldown=e.interval,t.recoil=1,this.state.events.push({type:"shot",weapon:t.weapon}),this.effect("muzzle",t.x-Math.sin(t.yaw)*.5,t.z-Math.cos(t.yaw)*.5,this.eyeHeight()-.18,.07);for(let n=0;n<e.pellets;n++){const i=t.yaw+(this.random()-.5)*e.spread*2,r=t.pitch+(this.random()-.5)*e.spread*1.5,a=-Math.sin(i)*Math.cos(r),o=-Math.cos(i)*Math.cos(r),l=Math.sin(r),c=this.eyeHeight();let u=this.rayWalls(t.x,c,t.z,a,l,o,e.range),d=null;for(const _ of this.state.enemies){if(!_.alive)continue;const g=Xn[_.kind],m=this.rayEnemy(_,t.x,c,t.z,a,l,o,g.radius,g.height);m!==null&&m>=0&&m<u&&(u=m,d=_)}const h=t.x+a*u,f=t.z+o*u,p=c+l*u;if(d){const _=t.weapon==="shotgun"?Math.max(.35,1-u/42):1;this.damageEnemy(d,e.damage*_),this.effect("blood",h,f,p,.24)}else u<e.range&&this.effect("spark",h,f,p,.15);if(t.weapon==="plasma"){const _=Math.min(12,Math.ceil(u/1.5));for(let g=1;g<=_;g++){const m=u*g/_;this.effect("plasma",t.x+a*m,t.z+o*m,c+l*m,.14)}}}}bite(){const t=this.state.player;t.cooldown=.58,t.recoil=.7;let e=!1;for(const n of this.state.enemies){if(!n.alive||Le(n,t)>3)continue;const i=n.x-t.x,r=n.z-t.z,a=Math.hypot(i,r);(-Math.sin(t.yaw)*i-Math.cos(t.yaw)*r)/Math.max(a,.1)>.35&&this.visible(t,n)&&(this.damageEnemy(n,95),this.effect("blood",n.x,n.z,1.1,.3),e=!0)}this.state.events.push({type:"enemy",message:e?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(t,e,n,i,r,a,o,l,c){const u=e-t.x,d=i-t.z,h=r*r+o*o,f=2*(u*r+d*o),p=u*u+d*d-l*l,_=f*f-4*h*p;if(_<0||h<1e-7)return null;const g=(-f-Math.sqrt(_))/(2*h),m=(-f+Math.sqrt(_))/(2*h);if(m<0)return null;let y=Math.max(0,g),w=m;if(Math.abs(a)<1e-8){if(n<0||n>c)return null}else{let v=-n/a,b=(c-n)/a;v>b&&([v,b]=[b,v]),y=Math.max(y,v),w=Math.min(w,b)}return y<=w?y:null}rayWalls(t,e,n,i,r,a,o){let l=o;for(const c of this.level.walls){const u=this.rayBox(t,e,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.y??0,(c.y??0)+c.h,c.z-c.d/2,c.z+c.d/2);u!==null&&u<l&&(l=u)}for(const c of this.state.doors){if(c.open>=.995)continue;const u=this.rayBox(t,e,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.open*3.4,3.4+c.open*3.4,c.z-c.d/2,c.z+c.d/2);u!==null&&u<l&&(l=u)}return l}rayBox(t,e,n,i,r,a,o,l,c,u,d,h){let f=0,p=1/0;const _=[t,e,n],g=[i,r,a],m=[o,c,d],y=[l,u,h];for(let w=0;w<3;w++){if(Math.abs(g[w])<1e-8){if(_[w]<m[w]||_[w]>y[w])return null;continue}let v=(m[w]-_[w])/g[w],b=(y[w]-_[w])/g[w];if(v>b&&([v,b]=[b,v]),f=Math.max(f,v),p=Math.min(p,b),f>p)return null}return p<0?null:f}visible(t,e,n=1.2){const i=Le(t,e);return i<.001?!0:this.rayWalls(t.x,n,t.z,(e.x-t.x)/i,0,(e.z-t.z)/i,i)>=i-.1}enemySees(t){const e=this.state.player,n=Xn[t.kind].height*.74,i=this.eyeHeight(),r=e.x-t.x,a=i-n,o=e.z-t.z,l=Math.hypot(r,a,o);return l<.001?!0:this.rayWalls(t.x,n,t.z,r/l,a/l,o/l,l)>=l-.1}damageEnemy(t,e){if(t.health-=e,t.hurt=1,t.alert=!0,t.health>0)return;t.health=0,t.alive=!1,t.path=[],t.speed=0,t.vx=0,t.vz=0,t.attack=0,this.attackWindups.delete(t.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",t.x,t.z,.7,.5);const n=this.state.player;n.reserve.revolver+=2,n.reserve.plasma+=2,n.reserve.machinegun+=3,t.kind==="brute"&&this.message("Containment beast neutralized. Restore the elevator power.",3)}updateDoors(t){for(const e of this.state.doors){const n=Math.sign(e.target-e.open);if(n!==0){if(n<0&&Le(e,this.state.player)<1.4){e.target=1;continue}e.open=qe(e.open+n*t*1.3,0,1)}}}interact(){const t=this.state,e=t.player;if(t.status!=="playing")return;if(e.mounted){const r=[{x:e.x+Math.cos(e.yaw)*1.1,z:e.z-Math.sin(e.yaw)*1.1},{x:e.x-Math.cos(e.yaw)*1.1,z:e.z+Math.sin(e.yaw)*1.1},{x:e.x,z:e.z+1.2}].find(a=>this.clearAt(a.x,a.z,.32,0,1.8));if(!r){this.message("No room to dismount. Move into the street.",2);return}e.mounted=!1,e.x=r.x,e.z=r.z,e.y=0,e.vy=0,t.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(Le(e,this.level.switch)<2.5){t.powered?this.message("Power online. The industrial lift is ready.",2):(t.powered=!0,t.events.push({type:"door"}),this.message("ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.",4));return}if(Le(e,t.mount)<2.6&&e.z>-19){e.mounted=!0,e.crouching=!1,t.mount.x=e.x,t.mount.z=e.z,t.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.",4);return}const n=t.doors.filter(i=>Le(e,i)<2.9).sort((i,r)=>Le(i,e)-Le(r,e));if(n.length){const i=n[0];if(e.mounted&&i.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(i.locked&&!e.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(i.id==="elevator"){if(!t.powered){this.message("LIFT OFFLINE — restore power at the laboratory switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return}}i.target=i.target>.5?0:1,t.events.push({type:"door"}),i.secret&&!this.secretDoors.has(i.id)?(this.secretDoors.add(i.id),t.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${i.label}: ${i.target?"opening":"closing"}.`,1.6);return}if(Le(e,this.level.exit)<3){this.checkExit(),t.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(e.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard.",2)}collectPickups(){const t=this.state,e=t.player;for(const n of t.pickups)if(!(n.collected||Le(n,e)>1.1||e.y>1.5||!this.visible(e,n,.45))&&!(n.kind==="health"&&e.health>=100||n.kind==="armor"&&e.armor>=100))if(n.collected=!0,t.events.push({type:"pickup"}),Kr.includes(n.kind)){const i=n.kind,r=!e.owned.includes(i);r&&e.owned.push(i),e.ammo[i]=Pn[i].clip,e.reserve[i]+=Pn[i].clip*(i==="revolver"?8:3),r&&(e.weapon=i,e.reload=0,this.reloading=null,e.cooldown=.15,e.recoil=.2),this.message(`${Pn[i].name.toUpperCase()} ACQUIRED — ${e.ammo[i]} loaded.`,2.5)}else n.kind==="health"?(e.health=Math.min(100,e.health+38),this.message("MEDKIT +38 HEALTH",1.6)):n.kind==="armor"?(e.armor=Math.min(100,e.armor+55),this.message("BODY ARMOR +55",1.6)):n.kind==="ammo"?(e.reserve.revolver+=24,e.reserve.shotgun+=16,e.reserve.plasma+=45,e.reserve.machinegun+=80,this.message("AMMUNITION CACHE — supplies replenished.",2)):n.kind==="evidence"?(e.evidence++,this.message("EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(e.keycard=!0,t.checkpoint=!0,this.message("SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.",4),t.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(t),this.checkpointState.events=[],this.checkpointSecrets=[...this.secretDoors])}finalThreats(){return this.state.enemies.filter(t=>t.alive&&(this.level.enemies.find(e=>e.id===t.id)?.z??t.z)<-32).length}checkExit(){const t=this.state;Le(t.player,this.level.exit)>1.5||t.status!=="playing"||!t.powered||this.finalThreats()>0||(t.status="complete",t.events.push({type:"complete"}),t.player.reload=0,this.message("NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(t,e=t){if(t<=0)return;const n=this.state.player,i=this.state.difficulty,r=i==="easy"?13:17;for(const a of this.state.enemies){if(!a.alive)continue;const o=Xn[a.kind],l=Le(a,n);if(a.speed=0,a.attack=Math.max(0,a.attack-t/(a.kind==="brute"?.26:.2)),a.hurt=Math.max(0,a.hurt-t*3.3),a.cooldown=Math.max(0,a.cooldown-t),a.pathTime-=t,!a.alert&&l<r&&this.enemySees(a)&&(a.alert=!0),!a.alert){a.vx=0,a.vz=0;continue}const c=this.attackWindups.get(a.id);if(c!==void 0){a.vx=0,a.vz=0,this.faceEnemy(a,n.x-a.x,n.z-a.z,t);const N=a.kind==="soldier"?.42:.32,V=c-t;if(a.attack=.15+.85*qe(1-V/N,0,1),V<=0){if(this.attackWindups.delete(a.id),a.attack=1,this.enemySees(a)&&l<o.range+(a.kind==="soldier"?2:.55))if(a.kind==="soldier"){this.effect("muzzle",a.x,a.z,1.4,.12);const B=i==="easy"?.55:i==="hard"?.88:.72;this.random()<B&&this.hurtPlayer(o.damage),this.effect("spark",n.x,n.z,Math.min(1.65,this.eyeHeight()),.1)}else this.hurtPlayer(o.damage),this.effect("blood",n.x,n.z,.65,.17);a.cooldown=o.interval*(i==="hard"?.8:i==="easy"?1.2:1)}else this.attackWindups.set(a.id,V);continue}const u=this.enemySees(a);if(l<o.range&&u&&a.cooldown<=0){a.vx=0,a.vz=0,a.attack=.15,this.faceEnemy(a,n.x-a.x,n.z-a.z,t),this.attackWindups.set(a.id,a.kind==="soldier"?.42:.32),this.state.events.push({type:"enemy",message:a.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),a.kind==="soldier"&&this.effect("plasma",a.x,a.z,1.65,.4);continue}const d=a.kind==="soldier"?9:o.range*.85;if(u&&l<=d+.025){a.vx=0,a.vz=0,this.faceEnemy(a,n.x-a.x,n.z-a.z,t);continue}let h=n;if(!u||!this.clearAt(a.x+(n.x-a.x)/Math.max(l,.01)*.7,a.z+(n.z-a.z)/Math.max(l,.01)*.7,o.radius,0,o.height))if(a.pathTime<=0&&(a.path=this.findPath(a,n,o.radius,Math.min(o.height,1.8)),a.pathTime=.8+this.random()*.25),a.path.length){for(;a.path.length&&Le(a,a.path[0])<.4;)a.path.shift();a.path.length&&(h=a.path[0])}else{a.vx=0,a.vz=0;continue}const f=Le(a,h);if(f<.01){a.vx=0,a.vz=0;continue}const p=a.kind==="raptor"?12:a.kind==="mutant"?8:5;let _=o.speed*(i==="easy"?.88:i==="hard"?1.12:1)*(a.hurt>0?.42:1);h===n&&u&&(_=Math.min(_,Math.sqrt(2*p*Math.max(0,l-d))));let g=(h.x-a.x)/f*_,m=(h.z-a.z)/f*_;for(const N of this.state.enemies){if(N===a||!N.alive)continue;const V=Le(a,N),$=o.radius+Xn[N.kind].radius+.35;V>.01&&V<$&&(g+=(a.x-N.x)/V*($-V)*3,m+=(a.z-N.z)/V*($-V)*3)}const y=Math.hypot(g,m);y>_&&(g*=_/y,m*=_/y);const w=g-a.vx,v=m-a.vz,b=Math.hypot(w,v),T=b>0?Math.min(1,p*t/b):1;a.vx+=w*T,a.vz+=v*T;const R=a.vx*t,M=a.vz*t,E=a.x,C=a.z,I=Math.max(1,Math.ceil(Math.hypot(R,M)/.12));for(let N=0;N<I;N++)this.enemyCanMove(a,a.x+R/I,a.z)&&(a.x+=R/I),this.enemyCanMove(a,a.x,a.z+M/I)&&(a.z+=M/I);const P=a.x-E,L=a.z-C,D=Math.hypot(P,L);a.speed=D/Math.max(e,1e-8),a.phase+=D,a.vx=P/t,a.vz=L/t,D>1e-5&&this.faceEnemy(a,P,L,t)}}faceEnemy(t,e,n,i){if(Math.hypot(e,n)<1e-5)return;const r=Math.atan2(-e,-n),a=Math.atan2(Math.sin(r-t.heading),Math.cos(r-t.heading)),o=t.kind==="raptor"?8:t.kind==="brute"?4:6;t.heading+=qe(a,-o*i,o*i),t.heading=Math.atan2(Math.sin(t.heading),Math.cos(t.heading))}enemyCanMove(t,e,n){const i=Xn[t.kind];if(!this.clearAt(e,n,i.radius,0,i.height))return!1;for(const r of this.state.enemies){if(r===t||!r.alive)continue;const a=i.radius+Xn[r.kind].radius,o=Math.hypot(e-r.x,n-r.z);if(o<a-1e-5&&o<=Le(t,r)+1e-6)return!1}return!0}findPath(t,e,n,i){const r=this.level.bounds,a=.9,o=Math.ceil((r.maxX-r.minX)/a),l=Math.ceil((r.maxZ-r.minZ)/a),c=I=>({x:qe(Math.floor((I.x-r.minX)/a),0,o-1),z:qe(Math.floor((I.z-r.minZ)/a),0,l-1)}),u=c(t),d=c(e),h=(I,P)=>P*o+I,f=I=>({x:r.minX+(I%o+.5)*a,z:r.minZ+(Math.floor(I/o)+.5)*a}),p=h(u.x,u.z),_=h(d.x,d.z),g=[p],m=new Map,y=new Map([[p,0]]),w=new Set,v=I=>Math.abs(I%o-d.x)+Math.abs(Math.floor(I/o)-d.z);let b=-1,T=p,R=v(p),M=0;for(;g.length&&M++<1900;){let I=0,P=1/0;for(let B=0;B<g.length;B++){const $=(y.get(g[B])??1/0)+v(g[B]);$<P&&(P=$,I=B)}const L=g.splice(I,1)[0];if(w.has(L))continue;w.add(L);const D=v(L);if(D<R&&(R=D,T=L),L===_){b=L;break}const N=L%o,V=Math.floor(L/o);for(const[B,$]of[[1,0],[-1,0],[0,1],[0,-1]]){const q=N+B,W=V+$;if(q<0||q>=o||W<0||W>=l)continue;const K=h(q,W);if(w.has(K))continue;const pt=f(K);if(K!==_&&!this.clearAt(pt.x,pt.z,n,0,i))continue;const vt=(y.get(L)??0)+1;vt>=(y.get(K)??1/0)||(y.set(K,vt),m.set(K,L),g.includes(K)||g.push(K))}}if(b===-1){if(T===p)return[];b=T}const E=[];let C=b;for(;C!==p&&m.has(C);)E.push(f(C)),C=m.get(C);return E.reverse()}hurtPlayer(t){const e=this.state,n=e.player;if(e.status!=="playing")return;t*=e.difficulty==="easy"?.65:e.difficulty==="hard"?1.22:1,n.mounted&&(t*=.65);const i=Math.min(n.armor,t*.65);n.armor-=i,n.health=Math.max(0,n.health-(t-i)),n.hurt=1,e.events.push({type:"hurt"}),n.health<=0&&(e.status="dead",n.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(t){const e=this.state.player;e.y<.45&&this.level.hazards.some(i=>Math.abs(e.x-i.x)<i.w/2&&Math.abs(e.z-i.z)<i.d/2)?(this.hazardTime+=t,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(t,e,n,i,r){this.state.effects.push({kind:t,x:e,z:n,y:i,life:r,maxLife:r})}message(t,e){this.state.message===t&&this.state.messageTime>.1||(this.state.message=t,this.state.messageTime=e,this.state.events.push({type:"message",message:t}))}}const mm={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class gm{constructor(t,e){this.canvas=t,this.onPause=e,document.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(n.code)){n.preventDefault(),n.stopImmediatePropagation(),n.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.repeat||(n.code==="Space"&&(this.pending.jump=!0),n.code==="KeyE"&&(this.pending.interact=!0),n.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-4]$/.test(n.code)&&(this.pending.weaponSlot=Number(n.code.slice(-1))))}}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=n.movementX,this.mouseY+=n.movementY)}),this.canvas.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType==="touch"||n.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===this.canvas,i=this.wasLocked&&!n;this.wasLocked=n,n||(this.clear(),i&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.enabled&&(n.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(n.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const t=(...n)=>n.some(i=>this.keys.has(i)),e=this.enabled?{forward:Math.max(-1,Math.min(1,Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(t("KeyD"))-Number(t("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(t("ArrowLeft"))-Number(t("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:t("ShiftLeft","ShiftRight")||this.touchSprint,crouch:t("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:t("KeyQ")}:{...mm};return this.mouseX=0,this.mouseY=0,this.pending={},e}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const t=document.querySelector("#touch-controls");if(!t)return;t.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const e=t.querySelector(".touch-stick");this.stick=e.querySelector("i"),e.addEventListener("pointerdown",a=>{!this.enabled||this.stickPointer>=0||(a.preventDefault(),this.stickPointer=a.pointerId,this.stickOrigin={x:a.clientX,y:a.clientY},e.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{if(!this.enabled||a.pointerId!==this.stickPointer)return;const o=a.clientX-this.stickOrigin.x,l=a.clientY-this.stickOrigin.y,c=Math.hypot(o,l),u=38,d=c>u?u/c:1;this.touchMove={x:o*d/u,y:l*d/u},this.stick&&(this.stick.style.transform=`translate(${o*d}px,${l*d}px)`)});const n=a=>{a.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n);const i=t.querySelector(".touch-look");i.addEventListener("pointerdown",a=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY},i.setPointerCapture(a.pointerId))}),i.addEventListener("pointermove",a=>{!this.enabled||a.pointerId!==this.lookPointer||(this.mouseX+=(a.clientX-this.lastLook.x)*1.6,this.mouseY+=(a.clientY-this.lastLook.y)*1.6,this.lastLook={x:a.clientX,y:a.clientY})});const r=a=>{a.pointerId===this.lookPointer&&(this.lookPointer=-1)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),t.querySelectorAll("button").forEach(a=>{a.addEventListener("pointerdown",l=>{if(this.enabled)switch(l.preventDefault(),a.setPointerCapture(l.pointerId),a.classList.add("held"),a.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const o=()=>{a.classList.remove("held"),a.dataset.action==="fire"&&(this.touchFire=!1),a.dataset.action==="sprint"&&(this.touchSprint=!1)};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)})}}const El="fossil-noir-3d-settings",Ri={sensitivity:1,resolution:"640",quality:"high",volume:.7,musicVolume:.75,effectsVolume:.95,difficulty:"normal"},xm={revolver:"DETECTIVE REVOLVER",shotgun:"TACTICAL SHOTGUN",plasma:"PLASMA RIFLE",machinegun:"HEAVY MACHINE GUN"};class _m{constructor(t){this.callbacks=t,this.settings=this.loadSettings(),this.overlay.addEventListener("click",n=>{const i=n.target.closest("button[data-action]");if(!(!i||i.disabled))switch(i.dataset.action){case"start":t.start(!1);break;case"continue":t.start(!0);break;case"resume":t.resume();break;case"retry":t.restart(!1);break;case"checkpoint":t.restart(!0);break;case"menu":t.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",n=>{const i=n.target;if(!i.dataset.setting)return;const r=i.dataset.setting,a=["sensitivity","volume","musicVolume","effectsVolume"].includes(r)?Number(i.value):i.value;this.settings=this.validateSettings({...this.settings,[r]:a});try{localStorage.setItem(El,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings}),r==="sensitivity"&&(this.overlay.querySelector("#sensitivity-value").textContent=`${this.settings.sensitivity.toFixed(1)}×`),r==="volume"&&(this.overlay.querySelector("#volume-value").textContent=`${Math.round(this.settings.volume*100)}%`),r==="musicVolume"&&(this.overlay.querySelector("#music-volume-value").textContent=`${Math.round(this.settings.musicVolume*100)}%`),r==="effectsVolume"&&(this.overlay.querySelector("#effects-volume-value").textContent=`${Math.round(this.settings.effectsVolume*100)}%`)}),document.addEventListener("keydown",n=>{this.screen!=="playing"&&n.code==="Escape"&&(n.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&t.resume())});const e=document.createElement("button");e.className="desktop-pause",e.setAttribute("aria-label","Pause mission"),e.textContent="Ⅱ",e.addEventListener("click",()=>t.pause()),document.querySelector("#game").appendChild(e),this.show("menu")}settings;screen="menu";panel="main";state;overlay=document.querySelector("#menu-overlay");cached=new Map;show(t){this.screen=t,this.panel="main",document.body.classList.toggle("playing",t==="playing"),document.body.dataset.screen=t,this.overlay.hidden=t==="playing",t!=="playing"&&this.render()}update(t){this.state=t;const e=t.player;this.write("hud-health",String(Math.max(0,Math.ceil(e.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(e.armor))).padStart(3,"0")),this.write("hud-ammo",e.reload>0?"LOAD":String(e.ammo[e.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(e.reserve[e.weapon]).padStart(3,"0")}`),this.write("hud-weapon",e.owned.includes(e.weapon)?xm[e.weapon]:"MECHANICAL ARM"),this.write("hud-kills",`${t.kills} / ${t.enemies.length}`),this.write("hud-mode",e.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(t.slow*100)}%`);const n=document.querySelector("#hud-key");n.classList.toggle("acquired",e.keycard),n.querySelector("b").textContent=e.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,e.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,e.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",e.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,e.hurt*.7)));const i=e.owned.length?!e.keycard&&e.z>=-19?"REACH THE AXIOM FACILITY":e.keycard?t.powered?"REACH THE INDUSTRIAL ELEVATOR":"ENTER THE LAB · RESTORE ELEVATOR POWER":"FIND THE SECURITY KEYCARD":"FIND YOUR REVOLVER";this.write("objective",i),this.write("message",t.messageTime>0?t.message:"");let r="";const a=t.doors.find(o=>Math.hypot(o.x-e.x,o.z-e.z)<3.2);e.mounted?r="E · DISMOUNT STRIDER":Math.hypot(t.mount.x-e.x,t.mount.z-e.z)<2.8?r="E · RIDE STRIDER":!t.powered&&Math.hypot(De.switch.x-e.x,De.switch.z-e.z)<2.5?r="E · RESTORE ELEVATOR POWER":Math.hypot(De.exit.x-e.x,De.exit.z-e.z)<3?r=t.powered?"ENTER THE LIFT TO EXTRACT":"ELEVATOR POWER REQUIRED":a&&(r=a.locked&&!e.keycard?"SECURITY KEYCARD REQUIRED":`E · ${a.target>0?"CLOSE":"OPEN"} ${a.label.toUpperCase()}`),this.write("interaction",r),document.querySelector("#crosshair").classList.toggle("firing",e.recoil>.1)}setError(t){const e=document.querySelector("#error");e.textContent=t,e.hidden=!t}write(t,e){if(this.cached.get(t)===e)return;this.cached.set(t,e);const n=document.getElementById(t);n&&(n.textContent=e)}hasCheckpoint(){if(this.state?.checkpoint)return!0;try{return!!localStorage.getItem("fossil-noir-3d-checkpoint")}catch{return!1}}render(){const t=this.hasCheckpoint(),e=this.panel==="main",n=this.screen==="menu";let i="",r="";if(this.panel==="controls")r="FIELD MANUAL",i='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")r="SYSTEM SETUP",i=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">MASTER VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="music-volume">MUSIC VOLUME <output id="music-volume-value">${Math.round(this.settings.musicVolume*100)}%</output></label><input id="music-volume" data-setting="musicVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.musicVolume}"><label for="effects-volume">EFFECTS VOLUME <output id="effects-volume-value">${Math.round(this.settings.effectsVolume*100)}%</output></label><input id="effects-volume" data-setting="effectsVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.effectsVolume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty==="easy"?"selected":""}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty==="normal"?"selected":""}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty==="hard"?"selected":""}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(n)i=`<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${t?"":"disabled"}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")r="MISSION PAUSED",i=`<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${t?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")r="CASE CLOSED",i=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${t?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${t?"":"primary"}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){r="DISTRICT SURVIVED";const a=Math.floor(this.state?.time??0);i=`<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${n&&e?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${n&&e?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${r?`<h2 class="panel-title">${r}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${i}</div></section>${n&&e?'<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>':""}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${n?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const t=localStorage.getItem(El);return this.validateSettings(t?JSON.parse(t):{})}catch{return{...Ri}}}validateSettings(t){const e=t&&typeof t=="object"?t:{},n=(i,r,a,o)=>typeof i=="number"&&Number.isFinite(i)?Math.min(a,Math.max(r,i)):o;return{sensitivity:n(e.sensitivity,.3,2.5,Ri.sensitivity),resolution:e.resolution==="320"||e.resolution==="640"?e.resolution:Ri.resolution,quality:e.quality==="low"?"low":"high",volume:n(e.volume,0,1,Ri.volume),musicVolume:n(e.musicVolume,0,1,Ri.musicVolume),effectsVolume:n(e.effectsVolume,0,1,Ri.effectsVolume),difficulty:e.difficulty==="easy"||e.difficulty==="hard"?e.difficulty:"normal"}}}const In=["#151b20","#2d3b43","#465761","#687b84","#96a7ad","#ced5ce"];class vm{constructor(t){this.canvas=t,t.width=640,t.height=400,t.style.imageRendering="pixelated";const e=t.getContext("2d");if(!e)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=e,e.imageSmoothingEnabled=!1,e.setTransform(2,0,0,2,0,0);for(const n of["fist","revolver","shotgun","plasma","machinegun"]){const i=document.createElement("canvas");i.width=640,i.height=400;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.setTransform(2,0,0,2,0,0),this.paintWeapon(r,n),this.sprites.set(n,i)}}ctx;sprites=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;render(t,e){const n=t.player,i=this.ctx;e=Math.min(e,.06),i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,320,200);const r=n.owned.includes(n.weapon)?n.weapon:"fist";this.initialized||(this.current=this.next=r,this.lastX=n.x,this.lastZ=n.z,this.initialized=!0),r!==this.next&&(this.next=r,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-e),this.switchTime<.16&&(this.current=this.next)),n.recoil>.65&&n.recoil>this.lastRecoil+.04&&r!=="fist"&&!n.mounted&&(this.flash=.075,this.shotAge=0),this.lastRecoil=n.recoil,this.flash=Math.max(0,this.flash-e),this.shotAge+=e,n.reload>this.lastReload+.1&&(this.reloadDuration=n.reload),this.lastReload=n.reload;const a=Math.hypot(n.x-this.lastX,n.z-this.lastZ)/Math.max(e,.001);this.lastX=n.x,this.lastZ=n.z,this.travel+=Math.min(a,15)*e*(n.mounted?1.9:2.5);const o=Math.min(a/4,1),l=Math.sin(this.travel)*2.2*o,c=Math.abs(Math.cos(this.travel))*2.5*o,u=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,d=n.reload>0?1-n.reload/this.reloadDuration:0,h=n.reload>0?Math.sin(d*Math.PI):0,f=Math.min(1,n.recoil),p=this.current==="shotgun"?13:this.current==="machinegun"?5:8;if(n.mounted){this.paintMount(i,t.time,o,f),this.line(i,[173,159],[251,188],"#5b4f35",2),this.arm(i,247,186);return}if(i.save(),i.translate(Math.round(l),Math.round(c+u+f*p+h*23)),n.reload>0&&(i.translate(209,176),i.rotate(h*(this.current==="revolver"?.3:-.14)),i.translate(-209,-176)),i.drawImage(this.sprites.get(this.current),0,0,320,200),this.paintAmmoGauge(i,this.current,n.ammo[this.current]||0),this.current==="plasma"&&this.paintPlasmaPulse(i,t.time,n.reload>0),n.reload>0&&this.paintReload(i,this.current,d),this.flash>0&&n.reload<=0&&this.paintFlash(i,this.current,t.time),this.current==="shotgun"&&this.shotAge<.48&&this.shotAge>.12&&n.reload<=0&&this.paintPumpHand(i,Math.sin((this.shotAge-.12)/.36*Math.PI)*8),i.restore(),["shotgun","machinegun","revolver"].includes(this.current)&&this.shotAge>.06&&this.shotAge<.35){const _=this.shotAge/.35;i.save(),i.translate(Math.round(222+_*59),Math.round(148-Math.sin(_*Math.PI)*25)),i.rotate(_*9),i.fillStyle="#17130b",i.fillRect(-2,-1,9,4),i.fillStyle=this.current==="shotgun"?"#a12b25":"#c19f4d",i.fillRect(-1,0,6,2),i.fillStyle="#e2ce86",i.fillRect(4,0,2,2),i.restore()}}poly(t,e,n,i="#080c10"){t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(const[r,a]of e.slice(1))t.lineTo(r,a);t.closePath(),t.fillStyle=n,t.fill(),i&&(t.strokeStyle=i,t.lineWidth=1,t.stroke())}line(t,e,n,i,r=1){t.beginPath(),t.moveTo(...e),t.lineTo(...n),t.strokeStyle=i,t.lineWidth=r,t.stroke()}bolt(t,e,n){t.fillStyle="#10161c",t.fillRect(e-2,n-2,5,5),t.fillStyle="#9faeae",t.fillRect(e-1,n-1,3,3),t.fillStyle="#344650",t.fillRect(e-1,n,3,1),t.fillStyle="#e2e5d5",t.fillRect(e-1,n-1,2,.5),t.fillStyle="#131f26",t.fillRect(e-.5,n-.5,.5,2),t.fillStyle="#52636a",t.fillRect(e+1,n+.5,.5,1.5)}screw(t,e,n,i=!1){t.fillStyle="#091317",t.fillRect(e-1,n-1,2.5,2.5),t.fillStyle=i?"#a58d59":"#91a19e",t.fillRect(e-.5,n-.5,1.5,1.5),t.fillStyle=i?"#f0d399":"#dbe0d3",t.fillRect(e-.5,n-.5,1,.5),t.fillStyle="#24333b",t.fillRect(e,n-.5,.5,1.5)}inset(t,e,n="#27353b"){this.poly(t,e,n,"#091318");for(let i=0;i<e.length-1;i++)i%2===0&&this.line(t,e[i],e[i+1],"#b0beb063",.5)}machining(t,e,n,i=90){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const h of e.slice(1))t.lineTo(...h);t.closePath(),t.clip();const r=e.map(h=>h[0]),a=e.map(h=>h[1]),o=Math.min(...r),l=Math.min(...a),c=Math.max(...r)-o,u=Math.max(...a)-l;let d=n;for(let h=0;h<i;h++){d=d*1664525+1013904223>>>0;const f=o+d%Math.max(1,c*2|0)*.5;d=d*1664525+1013904223>>>0;const p=l+d%Math.max(1,u*2|0)*.5;t.fillStyle=h%4===0?"#d3dcc241":h%4===1?"#030a136a":"#a5bab225",t.fillRect(f,p,h%9===0?2.5:.5,.5),h%17===0&&(t.fillStyle="#101b2570",t.fillRect(f,p+.5,1.5,.5))}t.restore()}etch(t,e,n,i,r="#b3bdab",a=0){const o={A:["010","101","111","101","101"],B:["110","101","110","101","110"],C:["111","100","100","100","111"],D:["110","101","101","101","110"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],H:["101","101","111","101","101"],I:["111","010","010","010","111"],K:["101","101","110","101","101"],L:["100","100","100","100","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["110","101","110","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"],V:["101","101","101","101","010"],X:["101","101","010","101","101"],Y:["101","101","010","010","010"],0:["111","101","101","101","111"],1:["010","110","010","010","111"],2:["110","001","010","100","111"],3:["110","001","010","001","110"],4:["101","101","111","001","001"],5:["111","100","110","001","110"],6:["011","100","111","101","111"],7:["111","001","010","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","110"],"-":["000","000","111","000","000"],".":["000","000","000","000","010"]};t.save(),t.translate(n,i),t.rotate(a),t.fillStyle=r;for(let l=0;l<e.length;l++){const c=o[e[l]];c&&c.forEach((u,d)=>{for(let h=0;h<3;h++)u[h]==="1"&&t.fillRect(l*2+h*.5,d*.5,.5,.5)})}t.restore()}wire(t,e,n,i=1){for(let r=0;r<e.length-1;r++)this.line(t,e[r],e[r+1],"#071219",i+1.5);for(let r=0;r<e.length-1;r++)this.line(t,e[r],e[r+1],n,i);for(let r=0;r<e.length-1;r++){const[a,o]=e[r];this.line(t,[a,o-.5],[e[r+1][0],e[r+1][1]-.5],"#ffe1b03a",.5)}}gripTexture(t,e){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const r of e.slice(1))t.lineTo(...r);t.closePath(),t.clip();const n=e.map(r=>r[0]),i=e.map(r=>r[1]);for(let r=Math.min(...i);r<Math.max(...i);r+=1.5)for(let a=Math.min(...n);a<Math.max(...n);a+=1.5)t.fillStyle="#090e1380",t.fillRect(a+Math.round(r)%2*.5,r,.5,.5),t.fillStyle="#c2ae8b45",t.fillRect(a+.5,r+.5,.5,.5);t.restore()}scratches(t,e,n,i=45){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const h of e.slice(1))t.lineTo(...h);t.closePath(),t.clip();const r=e.map(h=>h[0]),a=e.map(h=>h[1]),o=Math.min(...r),l=Math.min(...a),c=Math.max(...r)-o,u=Math.max(...a)-l;let d=n;for(let h=0;h<i;h++){d=d*1664525+1013904223>>>0;const f=o+d%Math.max(1,c|0);d=d*1664525+1013904223>>>0;const p=l+d%Math.max(1,u|0);t.fillStyle=h%3===0?"#a2afa42b":"#040b104a",t.fillRect(f,p,h%5===0?3:1,1)}t.restore()}arm(t,e=204,n=165){const i=[[266,184],[319,199],[326,217],[258,213],[240,195]];this.poly(t,i,"#141619"),this.poly(t,[[270,188],[319,203],[319,211],[264,201],[248,189]],"#2b3031"),this.line(t,[277,191],[314,204],"#484f4b",2);const r=[[e+7,n+13],[e+24,n+8],[274,181],[280,197],[258,209],[e+4,n+27]];this.poly(t,r,In[2]),this.poly(t,[[e+13,n+13],[e+24,n+11],[267,184],[271,190],[257,196],[e+12,n+24]],In[3]),this.poly(t,[[e+12,n+13],[e+24,n+11],[267,184],[260,185],[e+16,n+18]],In[5]),this.poly(t,[[e+14,n+25],[258,199],[275,191],[277,198],[259,205]],In[0]),this.scratches(t,r,773,100),this.line(t,[e+20,n+22],[259,193],"#0b151b",5),this.line(t,[e+20,n+22],[259,193],"#9eaeb0",2),this.line(t,[e+24,n+28],[258,201],"#0b151b",5),this.line(t,[e+24,n+28],[258,201],"#776b47",2),this.poly(t,[[258,185],[266,182],[277,190],[274,200],[266,202],[265,192]],"#30383c"),this.bolt(t,270,191),this.bolt(t,254,187),t.fillStyle="#28d989",t.fillRect(253,190,3,2),t.fillRect(257,191,2,2),this.line(t,[274,187],[278,197],"#afa17b",2),this.inset(t,[[239,181],[253,183],[258,189],[247,193],[238,187]],"#31434b"),this.machining(t,r,7133,145),this.line(t,[241,182],[251,184],"#ced4bd",.5),this.line(t,[240,188],[247,192],"#14202c",.5),this.screw(t,241,184),this.screw(t,251.5,187.5,!0),this.screw(t,261.5,194.5),this.etch(t,"VANE-09",244,184,"#b9c7b9",.28),this.wire(t,[[e+17,n+28],[238,195],[247,198],[254,197]],"#ac724c",1),this.wire(t,[[e+19,n+30],[240,198],[248,201],[255,200]],"#527b82",.5);for(let a=0;a<6;a++)this.line(t,[257+a*.8,191-a*.3],[258+a*.8,195-a*.3],a%2?"#192b32":"#afbcae",.5),this.line(t,[270+a*.6,185+a*.6],[272+a*.6,187+a*.6],a%2?"#b7ba99":"#2f3431",.5);for(let a=0;a<4;a++)t.fillStyle="#111e25",t.fillRect(263+a*1.5,187+a*.5,1,.5);this.line(t,[e+21,n+20],[254,188],"#f2efce",.5),this.line(t,[e+21,n+21],[255,190],"#303c42",.5),t.fillStyle="#0a191b",t.fillRect(251,189,8,3);for(let a=0;a<4;a++)t.fillStyle=a===3?"#6e7150":"#7ef4af",t.fillRect(252+a*1.5,190,1,1);this.line(t,[276,192],[279,196],"#f0d7a4",.5),this.line(t,[246,189],[248.5,188.5],"#111b20",.5),this.line(t,[246,189.5],[248,189],"#bfcbb1",.5);for(let a=0;a<11;a++)this.line(t,[283+a*2.5,193+a*.75],[283.5+a*2.5,194+a*.75],"#9b96784d",.5);this.line(t,[286,197],[310,206],"#080d13",.5),this.line(t,[291,199],[309,205],"#66706a",.5),this.hand(t,e,n)}hand(t,e,n){this.poly(t,[[e-14,n-5],[e-6,n-12],[e+9,n-10],[e+19,n],[e+21,n+14],[e+12,n+22],[e-3,n+18],[e-14,n+9]],"#293841"),this.poly(t,[[e-12,n-5],[e-6,n-10],[e+6,n-8],[e+12,n],[e+9,n+10],[e-7,n+7]],"#65767b");for(let i=0;i<4;i++){const r=e-11+i*6,a=n+i*2;this.poly(t,[[r,a],[r+4,a-2],[r+8,a+3],[r+7,a+10],[r+3,a+12],[r-1,a+7]],i%2?"#839391":"#61747a"),this.line(t,[r+1,a+5],[r+6,a+3],"#182730",2),t.fillStyle="#c0c8bb",t.fillRect(r+1,a,3,2),this.line(t,[r+1,a+.5],[r+4.5,a-1],"#e0e4c8",.5),this.line(t,[r+1.5,a+6.5],[r+5,a+5],"#afc0b6",.5),this.line(t,[r+1,a+9],[r+5.5,a+8],"#263a44",.5),this.screw(t,r+3,a+7),t.fillStyle="#233d42",t.fillRect(r+3.5,a+.5,.5,2),t.fillStyle="#9e8155",t.fillRect(r+6,a+4,.5,3),t.fillStyle="#f3e2b6",t.fillRect(r+6,a+4,.5,.5)}this.poly(t,[[e+12,n-2],[e+18,n-2],[e+23,n+6],[e+18,n+13],[e+13,n+8]],"#7e9195"),this.bolt(t,e+14,n+15),this.inset(t,[[e-9,n-7],[e-3,n-9],[e+4,n-5],[e+5,n-1],[e-4,n+2],[e-10,n-1]],"#41535b"),this.screw(t,e-6,n-4,!0),this.screw(t,e+1,n-3),this.line(t,[e+15,n],[e+20,n+6],"#cfdbcd",.5),this.line(t,[e+17,n+8],[e+20,n+6],"#243b43",.5),this.machining(t,[[e-12,n-5],[e+17,n],[e+20,n+13],[e-4,n+17]],139,30)}paintWeapon(t,e){if(e==="fist"){this.arm(t,195,172),this.poly(t,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],"#61777e");for(let n=0;n<4;n++)t.fillStyle="#b9c1b5",t.fillRect(186+n*7,155+n*2,5,6),t.fillStyle="#243a41",t.fillRect(186+n*7,162+n*2,5,2);this.machining(t,[[181,164],[190,148],[199,148],[217,158],[211,178],[189,179]],228,100);for(let n=0;n<4;n++)this.screw(t,188+n*7,157+n*2),this.line(t,[186+n*7,155+n*2],[190+n*7,155+n*2],"#e5e4c9",.5);this.etch(t,"VANE",193,170,"#b9cbc2",.25);return}if(e==="revolver"){this.arm(t,208,174),this.poly(t,[[196,156],[211,158],[230,185],[223,199],[208,196],[191,169]],"#191b1a"),this.poly(t,[[204,166],[212,167],[224,186],[218,193],[212,187]],"#4b3626");for(let n=0;n<5;n++)this.line(t,[210+n*2,175+n*3],[219+n,177+n*3],"#8a6d46");this.poly(t,[[155,122],[164,119],[180,139],[198,153],[196,170],[181,168],[169,145]],In[2]),this.poly(t,[[156,121],[164,120],[183,143],[176,145]],In[4]),this.poly(t,[[164,123],[169,128],[183,149],[182,156],[173,147]],In[0]),this.line(t,[158,124],[177,148],In[5],2),this.poly(t,[[175,143],[190,141],[204,152],[204,166],[194,173],[181,169],[174,155]],"#4a585b"),this.poly(t,[[177,144],[189,142],[199,150],[186,153]],"#b4bbaf"),this.poly(t,[[179,154],[186,152],[192,157],[191,168],[184,168]],"#202b31"),this.poly(t,[[193,154],[200,152],[203,157],[201,167],[195,170]],"#222d32"),this.line(t,[185,154],[185,166],"#8b9690",2),this.line(t,[198,155],[198,166],"#77847c",2),this.poly(t,[[163,120],[162,115],[157,116],[157,122]],"#1b2024"),t.fillStyle="#98f0c3",t.fillRect(158,115,3,1),this.poly(t,[[197,149],[201,143],[206,145],[208,153]],"#728281"),this.poly(t,[[193,171],[197,184],[207,188],[212,181],[207,171]],"#11191c"),this.line(t,[197,173],[201,182],"#9faaa4",2),this.scratches(t,[[174,142],[198,147],[203,164],[181,172]],129,45),this.paintGunDetail(t,e),this.hand(t,208,177),this.bolt(t,192,150),t.fillStyle="#a2ada1",t.fillRect(183,148,7,1)}else if(e==="shotgun"){this.arm(t,222,186);const n=[[154,120],[165,113],[183,136],[219,171],[240,192],[220,204],[186,170],[165,139]];this.poly(t,n,In[1]),this.poly(t,[[156,121],[163,116],[188,142],[219,174],[211,179],[181,145]],"#879698"),this.poly(t,[[155,122],[159,125],[191,161],[203,176],[199,181],[179,161]],"#17222a"),this.line(t,[160,122],[208,174],"#c3cabb",2),this.poly(t,[[152,118],[156,114],[163,111],[167,115],[165,122],[158,125]],"#40545b"),this.poly(t,[[155,117],[159,115],[163,115],[163,120],[160,122],[156,121]],"#070c10"),this.line(t,[156,114],[163,112],"#b0bcb4",2),this.poly(t,[[194,155],[213,171],[229,188],[220,198],[205,184],[187,166]],"#34454a"),this.poly(t,[[200,155],[218,171],[225,183],[218,187],[207,174],[194,163]],"#617378"),this.poly(t,[[208,170],[214,170],[221,178],[218,182],[212,177]],"#0c171e"),this.line(t,[209,171],[219,180],"#a9b6b3"),this.poly(t,[[175,144],[184,140],[203,159],[196,171],[187,169],[174,155]],"#564939");for(let i=0;i<6;i++)this.line(t,[179+i*3,146+i*2],[181+i*3,157+i*2],i%2?"#b09562":"#282925",2);this.poly(t,[[227,187],[240,191],[254,212],[227,213],[216,197]],"#171c1b"),this.scratches(t,n,448,100),this.bolt(t,207,164),this.bolt(t,223,186),this.paintGunDetail(t,e),this.paintPumpHand(t,0),this.hand(t,225,184)}else if(e==="plasma"){this.arm(t,217,179);const n=[[150,122],[160,114],[170,119],[185,139],[215,150],[232,171],[233,193],[221,201],[198,180],[168,145]];this.poly(t,n,"#263a3c"),this.poly(t,[[150,121],[159,116],[169,119],[183,139],[175,144],[160,131]],"#566f71"),this.poly(t,[[149,121],[151,115],[158,111],[166,113],[171,122],[162,129]],"#182624"),this.poly(t,[[153,117],[158,114],[165,116],[167,120],[160,125],[154,123]],"#030c09"),this.poly(t,[[157,117],[162,117],[164,120],[160,122],[157,121]],"#76f6ac"),this.poly(t,[[179,139],[190,134],[208,146],[223,164],[213,174],[196,164]],"#668085"),this.poly(t,[[180,140],[189,136],[207,148],[204,155],[192,154]],"#aac0b5"),this.poly(t,[[179,151],[191,147],[212,169],[207,180],[196,175]],"#101b1d"),this.poly(t,[[185,151],[191,151],[205,167],[202,173],[198,170]],"#16714d");for(let i=0;i<5;i++)this.line(t,[185+i*4,149+i*4],[181+i*4,153+i*4],"#86f8b4",2);this.poly(t,[[205,150],[213,150],[232,169],[231,187],[224,190],[211,175]],"#314b50"),this.poly(t,[[211,153],[215,153],[226,165],[226,174],[220,173]],"#092522"),t.fillStyle="#84fbbe",t.fillRect(215,158,4,3),t.fillRect(220,164,3,3),this.poly(t,[[211,180],[220,177],[234,193],[231,205],[221,205],[209,192]],"#172424"),this.scratches(t,n,137,85),this.bolt(t,205,145),this.bolt(t,229,178),this.paintGunDetail(t,e),this.hand(t,215,181)}else{this.arm(t,229,186);const n=[[148,118],[158,109],[168,114],[178,134],[212,153],[240,178],[255,201],[222,211],[187,175],[160,145]];this.poly(t,n,"#222b2e"),this.poly(t,[[149,118],[157,112],[164,115],[191,151],[186,159],[173,146]],"#718184"),this.poly(t,[[156,127],[162,120],[199,156],[193,166],[184,159]],"#3a4c51"),this.poly(t,[[147,117],[150,111],[157,107],[165,111],[171,120],[163,130],[154,129]],"#3f525b");for(const[i,r]of[[153,115],[160,114],[157,122],[164,120]])t.fillStyle="#030a0e",t.fillRect(i-2,r-2,4,4),t.fillStyle="#8da09b",t.fillRect(i-2,r-3,4,1);for(let i=0;i<3;i++)this.line(t,[156+i*4,123-i*2],[187+i*5,159-i*2],i%2?"#b0b8ad":"#11191e",2);this.poly(t,[[186,153],[198,146],[215,154],[238,175],[243,193],[228,204],[207,188],[186,167]],"#405255"),this.poly(t,[[189,153],[198,150],[215,158],[229,173],[221,177],[204,163]],"#91a09b"),this.poly(t,[[189,160],[205,164],[227,182],[228,198],[214,192],[194,174]],"#1c2b31");for(let i=0;i<4;i++)this.poly(t,[[193+i*5,162+i*4],[197+i*5,163+i*4],[203+i*5,173+i*4],[199+i*5,174+i*4]],"#070f13");this.poly(t,[[211,164],[220,160],[230,168],[230,176],[222,177]],"#364747"),this.poly(t,[[218,161],[216,151],[221,147],[230,151],[234,157],[230,161]],"#586b6b"),this.poly(t,[[219,156],[221,151],[227,152],[229,157]],"#070f15"),this.poly(t,[[236,169],[263,174],[280,182],[277,194],[249,185],[237,181]],"#14191b");for(let i=0;i<8;i++){const r=240+i*5,a=174+i*1.7;this.poly(t,[[r,a],[r+4,a+1],[r+3,a+12],[r,a+14],[r-2,a+11]],i%2?"#846733":"#a68b4c"),t.fillStyle="#d0b471",t.fillRect(r,a+1,2,7),t.fillStyle="#382e23",t.fillRect(r-1,a+9,4,2)}this.scratches(t,n,1985,140),this.bolt(t,205,158),this.bolt(t,235,185),this.paintGunDetail(t,e),this.hand(t,232,185)}}paintGunDetail(t,e){if(e==="revolver"){this.line(t,[156.5,122.5],[176.5,145.5],"#eff0d1",.5),this.line(t,[162,122.5],[180,144],"#566570",.5),this.line(t,[164,124.5],[181,146.5],"#111b23",.5);for(let n=0;n<7;n++){const i=163+n*2,r=127+n*2.25;this.line(t,[i,r],[i+2,r-.5],"#263b41",.5),this.line(t,[i+.5,r+.5],[i+2,r],"#c6d3c9",.5)}this.etch(t,".357",166,133,"#32434a",.88);for(let n=0;n<5;n++){const i=176.5+n*4.5,r=147+n*1.9;this.poly(t,[[i,r],[i+2,r-.5],[i+4,r+3],[i+3,r+12],[i+1.5,r+13],[i,r+8]],n%2?"#5e7376":"#253842",""),this.line(t,[i+1,r+.5],[i+2,r+10],"#c2cbb3",.5),this.line(t,[i+3,r+2],[i+3,r+11],"#121f2a",.5),t.fillStyle="#d1ad61",t.fillRect(i+.5,r-1,1.5,1),t.fillStyle="#f4dd90",t.fillRect(i+.5,r-1,.5,.5)}this.inset(t,[[184,168],[195,168],[199,171],[197,175],[187,172]],"#42535a"),this.screw(t,188.5,170),this.screw(t,197,167),this.line(t,[178,145],[188,143],"#e9e6c3",.5),this.line(t,[192,143.5],[200,149.5],"#e1d9b2",.5),this.line(t,[197,147],[201,144],"#1c3038",.5);for(let n=0;n<4;n++)this.line(t,[200+n*.9,146.5+n*.2],[202+n*.9,147+n*.2],"#303e45",.5);this.gripTexture(t,[[204,166],[212,167],[224,186],[218,193],[212,187]]),this.machining(t,[[171,137],[187,146],[204,161],[191,170]],1974,115),this.etch(t,"VANE",194,166,"#c1b895",.15),this.screw(t,215.5,183.5,!0)}else if(e==="shotgun"){this.line(t,[157,115.5],[162.5,112.5],"#d1d7bb",.5),this.poly(t,[[156,116],[160,114.5],[162.5,115.5],[161.5,118],[158,119.5]],"#17262d",""),this.line(t,[158,116],[161,115],"#64818b",.5);for(let n=0;n<11;n++){const i=164.5+n*2.6,r=122+n*2.8;this.poly(t,[[i,r],[i+2.5,r+1.5],[i+3.5,r+4],[i+1,r+2.5]],"#13212b",""),this.line(t,[i+.5,r],[i+2.5,r+1.5],"#b3c4b5",.5),this.line(t,[i+3,r+.5],[i+5,r+2.5],"#2d3941",.5)}this.line(t,[164,121],[191,149],"#eef0cf",.5),this.line(t,[165,123],[194,154],"#52646d",.5),this.inset(t,[[198,157],[206,164],[213,168],[210,172],[201,167],[195,162]],"#2c4148"),this.etch(t,"12 GA",198,160,"#c1cdb9",.79),this.line(t,[208.5,171],[217,178],"#d3dbbf",.5),this.line(t,[211,174],[216.5,178.5],"#1a292b",.5),this.screw(t,199,157),this.screw(t,216,172),this.screw(t,223.5,189,!0);for(let n=0;n<8;n++){const i=177.5+n*2.5,r=144+n*2;this.line(t,[i,r],[i+1.5,r+7.5],"#180f13",.5),this.line(t,[i+.5,r],[i+2,r+7.5],"#c7aa6c",.5)}this.gripTexture(t,[[229,189],[239,193],[247,208],[229,209],[222,198]]),this.machining(t,[[155,120],[164,116],[193,146],[226,179],[221,194],[179,156]],2529,165),this.etch(t,"FN-12",216,183,"#b9c1ad",.8)}else if(e==="plasma"){for(let n=0;n<9;n++){const i=183+n*2.45,r=149+n*2.5;this.line(t,[i,r],[i-3.5,r+4],"#161913",2),this.line(t,[i,r],[i-3.5,r+4],"#c49657",1),this.line(t,[i,r],[i-2,r+2],"#f0d392",.5),t.fillStyle="#3e7651",t.fillRect(i-1,r+2.5,.5,1)}this.wire(t,[[184,141],[192,138],[205,144],[216,154],[220,162]],"#a46945",1.5),this.wire(t,[[181,144],[189,143],[204,150],[214,160]],"#254d5a",.5),this.inset(t,[[189,136],[202,143],[205,148],[198,148],[188,141]],"#394f57"),this.etch(t,"ION-X3",190,139,"#d2d9b9",.51),this.line(t,[180,140],[188,136],"#e5ebcf",.5),this.line(t,[197,141],[206,147],"#e0e1c0",.5);for(let n=0;n<5;n++){const i=208+n*2,r=153+n*2.2;this.poly(t,[[i,r],[i+2,r],[i+5,r+3],[i+3,r+3]],"#0b2329",""),this.line(t,[i+.5,r+.5],[i+3,r+2],"#91b8a1",.5)}this.inset(t,[[220,166],[226,169],[229,177],[225,181],[220,175]],"#293d42"),this.screw(t,222,169,!0),this.screw(t,226.5,176),this.line(t,[155,117],[158,114.5],"#aeffd3",.5),this.line(t,[165,116.5],[168,122],"#549878",.5),t.fillStyle="#ccfadc",t.fillRect(156.5,119,1,.5),this.gripTexture(t,[[215,182],[221,179],[230,194],[226,203],[218,197]]),this.machining(t,[[172,133],[190,135],[211,149],[233,173],[224,190],[196,161]],186,165),this.etch(t,"CAUTION",199,173,"#969972",.74)}else{for(const[n,i]of[[153,115],[160,114],[157,122],[164,120]])this.line(t,[n-2,i-1.5],[n+1.5,i-1.5],"#c6d2c1",.5),this.line(t,[n-2,i-1],[n-2,i+1],"#708a8f",.5),this.line(t,[n+1.5,i-.5],[n+1.5,i+1.5],"#17232e",.5),t.fillStyle="#2b414b",t.fillRect(n-.5,i+.5,1,.5);for(let n=0;n<8;n++){const i=166+n*2.5,r=129+n*2.7;this.poly(t,[[i,r],[i+2,r-1],[i+4,r+2],[i+2,r+3]],"#0b141c",""),this.line(t,[i,r],[i+1.5,r-.5],"#c5d0b5",.5),this.line(t,[i+2,r+3],[i+3.5,r+2],"#4e6a6c",.5)}this.line(t,[153,124],[178,153],"#e3e6c2",.5),this.line(t,[165,127],[192,155],"#566e72",.5),this.inset(t,[[198,150],[209,155],[218,164],[214,169],[203,160],[195,155]],"#556a6c"),this.etch(t,"M-60",200,153,"#d5d7b5",.64),this.line(t,[206,160],[216,168],"#152930",.5);for(let n=0;n<4;n++){const i=193.5+n*5,r=163+n*4;this.line(t,[i,r],[i+3,r+7],"#5b7378",.5),this.line(t,[i+4,r+2],[i+6,r+8],"#a2b8a850",.5)}this.screw(t,199,153),this.screw(t,218.5,166.5),this.screw(t,233,178,!0);for(let n=0;n<8;n++){const i=240+n*5,r=174+n*1.7;t.fillStyle="#eee0a1",t.fillRect(i+.5,r+1,.5,7),t.fillStyle="#614e2b",t.fillRect(i+2,r+1,.5,7),this.line(t,[i-1,r+10],[i+2,r+10],"#f6d080",.5),this.line(t,[i-1,r+12],[i+2,r+12],"#2e2822",.5),this.screw(t,i+2.5,r+9)}this.wire(t,[[236,183],[244,190],[256,191]],"#687c78",.5),this.gripTexture(t,[[226,189],[238,187],[249,201],[239,208],[228,204]]),this.machining(t,[[162,128],[182,145],[210,149],[238,175],[242,194],[212,188]],6509,190),this.etch(t,"FOSSIL",205,179,"#90a399",.72)}}paintAmmoGauge(t,e,n){if(e==="fist")return;if(e==="revolver"){for(let l=0;l<6;l++)t.fillStyle=l<n?"#dfc181":"#243c46",t.fillRect(181+l*2,144+l*.3,1,.5);return}const i=e==="plasma",r=e==="machinegun",a=i?216:r?220:204,o=i?159:r?173:164;t.save(),t.translate(a,o),t.rotate(i?.72:r?.7:.78),t.fillStyle="#050f14",t.fillRect(-.5,-.5,8,4),t.fillStyle="#4c7070",t.fillRect(-.5,-.5,8,.5),this.etch(t,String(Math.min(99,n)).padStart(2,"0"),.5,.25,n>0?i?"#94ffc5":"#d6d1a1":"#ff7851"),t.fillStyle=n>0?"#53b693":"#933b28",t.fillRect(5.5,.5,.5,2),t.restore()}paintPumpHand(t,e){t.save(),t.translate(Math.round(e*.8),Math.round(e)),this.poly(t,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],"#1a2226"),this.poly(t,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],"#74858a"),this.line(t,[143,195],[163,174],"#c3ccc3",2);for(let n=0;n<4;n++)this.poly(t,[[166+n*4,161+n*2],[173+n*4,163+n*2],[176+n*4,169+n*2],[173+n*4,174+n*2],[166+n*4,169+n*2]],n%2?"#9aaba4":"#576c75"),this.line(t,[170+n*4,166+n*2],[175+n*4,168+n*2],"#1c2c34",2),this.line(t,[167+n*4,162+n*2],[172+n*4,164+n*2],"#e2e6c8",.5),this.screw(t,170+n*4,166+n*2),t.fillStyle="#9c7747",t.fillRect(174+n*4,169+n*2,.5,2);this.bolt(t,154,187),this.inset(t,[[145,190],[151,181],[158,176],[162,180],[155,186],[148,194]],"#4a626b"),this.wire(t,[[143,196],[151,189],[156,186]],"#a1744a",.5),this.machining(t,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],271,60),this.etch(t,"09",148,187,"#d0d6bb",-.81),t.restore()}paintPlasmaPulse(t,e,n){n||(t.fillStyle=Math.sin(e*9)>0?"#c4ffe1":"#49dc95",t.fillRect(215,158,4,2),t.fillRect(221,165,2,2),t.fillRect(158,117,3,3))}paintReload(t,e,n){const i=Math.sin(n*Math.PI);if(e==="revolver"){const r=171-Math.round(i*12),a=158+Math.round(i*10);this.poly(t,[[r-8,a-5],[r+5,a-8],[r+12,a],[r+10,a+13],[r-3,a+15],[r-11,a+5]],"#687b7d"),this.line(t,[r-8,a-5],[r+4,a-7],"#dfe4c1",.5),this.line(t,[r+9,a+2],[r+8,a+11],"#1c353d",.5);for(let o=0;o<6;o++){const l=o*Math.PI/3+n*5,c=Math.round(r+Math.cos(l)*6),u=Math.round(a+Math.sin(l)*6);t.fillStyle=n>.45?"#c2a254":"#0b151a",t.fillRect(c-2,u-2,4,4),t.fillStyle=n>.45?"#fae5a2":"#5f777e",t.fillRect(c-1.5,u-2,2,.5),n>.45&&(t.fillStyle="#615137",t.fillRect(c-.5,u-.5,1,1))}this.screw(t,r,a,!0),n>.35&&n<.7&&this.hand(t,147,190)}else if(e==="shotgun")this.hand(t,175+Math.round(i*9),190),t.fillStyle="#932621",t.fillRect(179,176,5,10),t.fillStyle="#d0aa62",t.fillRect(179,175,5,2),t.fillStyle="#edc99a",t.fillRect(179.5,175,4,.5),t.fillStyle="#ef6352",t.fillRect(179.5,177,.5,8),t.fillStyle="#541c21",t.fillRect(183,178,.5,7),this.etch(t,"12",180,179,"#f3d4b2");else if(e==="plasma"){const a=176+Math.round(i*21);this.poly(t,[[188,a],[199,a-4],[211,a+11],[201,a+19],[192,a+9]],"#294447"),this.line(t,[193,a+3],[202,a+14],"#72ffb0",4);for(let o=0;o<5;o++)this.line(t,[194+o*2,a+3+o*2],[191+o*2,a+5+o*2],"#173c3a",.5);this.line(t,[190,a+.5],[198,a-2.5],"#c4d9be",.5),this.screw(t,201,a+5,!0),this.hand(t,168,a+15)}else e==="machinegun"&&(this.hand(t,259-Math.round(i*16),178+Math.round(i*11)),t.fillStyle="#c7ac68",t.fillRect(242,167,14,3))}paintFlash(t,e,n){const i=e==="plasma",r=159,a=114,o=e==="shotgun"?23:e==="machinegun"?17:13,l=Math.floor(n*70)%2?1:-1;this.poly(t,[[r-3,a],[r-o,a-9],[r-7,a-12],[r-11,a-o-5],[r,a-15],[r+o*.7,a-o],[r+7,a-8],[r+o,a-3],[r+5,a+4]],i?"#247e55":"#af4321",""),this.poly(t,[[r-3,a],[r-10,a-7],[r-3,a-10],[r+l*3,a-19],[r+4,a-9],[r+12,a-6],[r+4,a+2]],i?"#82ffae":"#f9b84e",""),this.poly(t,[[r-3,a],[r-2,a-7],[r+2,a-11],[r+5,a-4],[r+3,a+3]],i?"#e7ffeb":"#fff3b9","")}paintMount(t,e,n,i=0){const r=Math.round(Math.sin(e*9)*n*2-i*11);t.save(),t.translate(0,r),this.poly(t,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(t,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(t,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),this.machining(t,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);for(let a=0;a<7;a++){const o=147+a*3,l=172-a*2.1;this.poly(t,[[o,l],[o+2.5,l-1],[o+3,l+1],[o+1.5,l+2]],a%2?"#637558":"#283f34",""),this.line(t,[o,l],[o+2,l-.5],"#a0a580",.5)}if(this.line(t,[162,145],[173,145],"#8a966d",.5),this.line(t,[170,149.5],[177,151],"#1d342e",.5),t.fillStyle="#132922",t.fillRect(177,150,1.5,1),this.line(t,[157,149],[163,153],"#192c26",.5),this.line(t,[156.5,149.5],[162.5,153.5],"#91a371",.5),i>.25){this.poly(t,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let a=0;a<5;a++)t.fillStyle="#b9bf8c",t.fillRect(163+a*3,155,2,3)}else this.line(t,[157,155],[178,155],"#111c19",2);t.fillStyle="#dfb961",t.fillRect(171,146,4,2),t.fillStyle="#081410",t.fillRect(174,146,1,2),t.fillStyle="#ffdc89",t.fillRect(171,146,2,.5);for(let a=0;a<5;a++)this.poly(t,[[135+a*3,183-a*6],[130+a*4,179-a*7],[139+a*3,177-a*6]],"#809178");this.line(t,[150,162],[119,200],"#74664c",2),this.line(t,[174,163],[198,197],"#74664c",2),this.line(t,[151,162],[120,200],"#b5a483",.5),this.line(t,[174,162],[198,195],"#c2b298",.5),this.inset(t,[[150,164],[153,164],[150,168],[147,168]],"#ad9f6b"),this.screw(t,150,166,!0),t.restore()}}const xc=24e3,_c=112,vc=16,Tl=vc*4*60/_c,Ae=Math.PI*2,Mm=s=>440*2**((s-69)/12);function Mc(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/2147483648-1)}function Js(s,t=!1,e=xc){return{sampleRate:e,channels:Array.from({length:t?2:1},()=>new Float32Array(Math.ceil(s*e)))}}function Sm(s,t=xc){const e={revolver:.82,shotgun:1.1,plasma:.72,machinegun:.43}[s],n=Js(e,!0,t),i=new Float32Array(n.channels[0].length),r=Mc({revolver:6721,shotgun:1297,plasma:9919,machinegun:4049}[s]);let a=0,o=0,l=0,c=0;const u=s==="shotgun",d=s==="plasma",h=s==="machinegun";for(let f=0;f<i.length;f++){const p=f/t,_=r();a+=(_-a)*.085,o+=(_-o)*.43;const g=_-o,m=Math.min(1,p/.0012);let y;if(d)l+=Ae*(72+970*Math.exp(-p*20))/t,c+=Ae*(114+1430*Math.exp(-p*17))/t,y=(Math.sin(l+Math.sin(c)*1.5)*.58+Math.sin(c)*.24)*Math.exp(-p*10),y+=(g*.62+o*.4)*Math.exp(-p*24),y+=Math.sin(Ae*49*p)*.45*Math.exp(-p*11),y+=Math.sin(Ae*1880*p)*Math.exp(-p*15)*.11;else{const w=u?185:h?154:210,v=u?8.5:h?24:13;l+=Ae*(43+w*Math.exp(-p*37))/t,y=Math.sin(l)*(u?1.03:.77)*Math.exp(-p*v),y+=g*1.55*Math.exp(-p*(u?100:155)),y+=o*(u?1.9:1.12)*Math.exp(-p*(u?21:h?55:31)),y+=a*(u?2.25:1.55)*Math.exp(-p*(u?9:16));const b=u?.38:h?.047:.12;if(p>b){const R=p-b;y+=(g*.24+Math.sin(Ae*2230*R)*.13+Math.sin(Ae*3180*R)*.07)*Math.exp(-R*83)}u&&p>.56&&(y+=(o*.5+Math.sin(Ae*680*p)*.1)*Math.exp(-(p-.56)*45));const T=h?.112:u?.66:.19;if(p>T){const R=p-T;y+=(Math.sin(Ae*2760*R)+Math.sin(Ae*4130*R)*.35)*Math.exp(-R*58)*.085}}i[f]=Math.tanh(y*1.3)*m*Math.min(1,(e-p)/.035)}for(let f=0;f<2;f++){let p=0;const _=[.043+f*.009,.097-f*.012,.171+f*.014];for(let g=0;g<i.length;g++){let m=0;for(let y=0;y<_.length;y++){const w=g-Math.round(_[y]*t);w>=0&&(m+=i[w]*[.21,.12,.065][y])}p+=(m-p)*.27,n.channels[f][g]=Math.tanh((i[g]+p)*.94)*.97}}return n}function Qi(s){const t={kick:.44,snare:.28,hat:.07,open:.29,metal:.37}[s],e=Js(t),n=Mc(s.charCodeAt(0)*1931);let i=0,r=0;for(let a=0;a<e.channels[0].length;a++){const o=a/e.sampleRate,l=n();i+=(l-i)*.22;let c=0;s==="kick"?(r+=Ae*(43+113*Math.exp(-o*48))/e.sampleRate,c=Math.sin(r)*Math.exp(-o*12)+(l-i)*Math.exp(-o*160)*.48):s==="snare"?(c=(l-i*.7)*Math.exp(-o*21)*.65+Math.sin(Ae*181*o)*Math.exp(-o*33)*.3,c+=(Math.sin(Ae*331*o)+Math.sin(Ae*418*o)*.4)*Math.exp(-o*40)*.14):s==="metal"?(c=(Math.sin(Ae*765*o)*Math.sin(Ae*1083*o)+Math.sin(Ae*1743*o)*.4)*Math.exp(-o*17)*.4,c+=(l-i)*Math.exp(-o*32)*.25):c=(l-i)*Math.exp(-o*(s==="hat"?67:18))*.52,e.channels[0][a]=Math.tanh(c*1.8)*Math.min(1,o/8e-4)}return e}function _n(s,t,e,n,i=0){const r=Math.round(e*s.sampleRate),a=s.channels[0].length,o=Math.sqrt((1-i)/2),l=Math.sqrt((1+i)/2);for(let c=0;c<t.channels[0].length;c++){const u=(r+c)%a;s.channels[0][u]+=t.channels[0][c]*n*o,s.channels[1][u]+=t.channels[t.channels.length-1][c]*n*l}}function Ci(s,t,e,n,i,r,a=0){const o=s.sampleRate,l=Mm(n),c=s.channels[0].length,u=Math.round(t*o),d=Math.ceil(e*o),h=Math.sqrt((1-a)/2),f=Math.sqrt((1+a)/2);for(let p=0;p<d;p++){const _=p/o,g=Ae*l*_,m=_/e;let y,w;r==="pad"?(y=Math.sin(g)*.52+Math.sin(g*1.004+Math.sin(_*1.3)*.12)*.32+Math.sin(g*1.997)*.13,w=Math.min(1,_/.29)*Math.min(1,(e-_)/.48)):r==="lead"?(y=Math.sin(g+Math.sin(g*2)*.62)*.63+Math.sin(g*3.002)*.12+Math.sin(g*.999)*.21,w=Math.min(1,_/.016)*Math.exp(-m*3.4)*Math.min(1,(e-_)/.055)):r==="riff"?(y=Math.tanh((Math.sin(g)+Math.sin(g*2)*.48+Math.sin(g*3)*.33+Math.sin(g*4)*.19)*3.8),w=Math.min(1,_/.005)*Math.exp(-m*4.5)*Math.min(1,(e-_)/.018)):(y=Math.tanh((Math.sin(g)*.83+Math.sin(g*2)*.32+Math.sin(g*3)*.17)*1.9),w=Math.min(1,_/.006)*Math.exp(-m*2.1)*Math.min(1,(e-_)/.022));const v=(u+p)%c,b=y*w*i;s.channels[0][v]+=b*h,s.channels[1][v]+=b*f}}function Al(s){for(const t of s.channels){let e=0,n=0;for(let r=0;r<t.length;r++){const a=t[r],o=a-e+n*.995;e=a,n=o,t[r]=Math.tanh(o*1.75)*.75}const i=Math.round(s.sampleRate*.003);for(let r=0;r<i;r++){const a=t.length-i+r,o=r/(i-1);t[a]=t[a]*(1-o)+t[0]*o}}}function bm(){const s=Js(Tl,!0),t=Js(Tl,!0),e=60/_c,n=e*4,i={kick:Qi("kick"),snare:Qi("snare"),hat:Qi("hat"),open:Qi("open"),metal:Qi("metal")},r=[[50,53,57,60,64],[46,50,53,57,60],[41,48,53,57,60],[48,53,55,58,62]],a=[38,34,29,36],o=[62,65,69,67,64,65,62,60];for(let l=0;l<vc;l++){const c=Math.floor(l/2)%4,u=a[c],d=l*n,h=l>=8;l%2===0&&r[c].forEach((p,_)=>Ci(s,d,n*2+.18,p,.053,"pad",(_-2)*.42));for(const p of[0,6,8,11,...l%4===3?[14]:[]])_n(s,i.kick,d+p*e/4,.42);for(const p of[4,12])_n(s,i.snare,d+p*e/4,.31,.06);l%2===1&&_n(s,i.snare,d+15*e/4,.095,-.2);for(let p=0;p<16;p+=2)_n(s,i.hat,d+p*e/4,p%4===0?.09:.14,p%4===0?-.27:.3);_n(s,i.open,d+10*e/4,.075,.4),l%2===1&&_n(s,i.metal,d+7*e/4,.12,-.45),[0,3,6,8,10,13,15].forEach((p,_)=>Ci(s,d+p*e/4,e*(p===0?.7:.38),u+(_===3||_===5?12:_===6&&l%2===1?7:0),.19,"bass")),(l%2===0||h)&&[.5,1.25,2.5,3.25].forEach((_,g)=>{const m=o[(l+g)%o.length]+(c===1?-2:c===3?-5:0);Ci(s,d+_*e,e*1.5,m,.125,"lead",-.34),Ci(s,d+(_+.5)*e,e*1.3,m,.042,"lead",.67)});for(const p of[0,2,6,8,10,14])_n(t,i.kick,d+p*e/4,.23);for(const p of[4,12,...l%4===3?[13,14,15]:[]])_n(t,i.snare,d+p*e/4,.22,-.1);for(let p=1;p<16;p+=2)_n(t,i.hat,d+p*e/4,.07,p%4===1?-.6:.6);for(const p of[0,2,3,6,8,10,11,14]){const _=u+12+(p===6?7:p===14&&l%4===3?10:0);Ci(t,d+p*e/4,e*.38,_,.16,"riff",-.42),Ci(t,d+p*e/4+.018,e*.38,_+12,.065,"riff",.42)}l%4===3&&_n(t,i.metal,d+3.5*e,.21,.3)}return Al(s),Al(t),{district:s,combat:t}}class ym{context;master;fx;music;musicDuck;districtGain;combatGain;noise;district;combat;weapons=new Map;musicSources=[];musicStarted=0;musicOffset=0;volume=.7;musicVolume=.75;effectsVolume=.95;unlocked=!1;lastStep=0;lastX;lastZ;distance=0;lastEnemy=-10;danger=0;unlock(){try{if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.context=new t,n=e.createDynamicsCompressor();n.threshold.value=-7,n.knee.value=8,n.ratio.value=4,n.attack.value=.002,n.release.value=.16,this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(n),n.connect(e.destination),this.fx=e.createGain(),this.fx.gain.value=this.effectsVolume,this.fx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVolume,this.music.connect(this.master),this.musicDuck=e.createGain(),this.musicDuck.connect(this.music),this.districtGain=e.createGain(),this.districtGain.gain.value=.92,this.districtGain.connect(this.musicDuck),this.combatGain=e.createGain(),this.combatGain.gain.value=0,this.combatGain.connect(this.musicDuck);const i=e.sampleRate*2;this.noise=e.createBuffer(1,i,e.sampleRate);const r=this.noise.getChannelData(0);let a=1793;for(let l=0;l<i;l++)a=Math.imul(a,1664525)+1013904223>>>0,r[l]=a/2147483648-1;for(const l of["revolver","shotgun","plasma","machinegun"])this.weapons.set(l,this.buffer(Sm(l)));const o=bm();this.district=this.buffer(o.district),this.combat=this.buffer(o.combat)}this.context.resume().then(()=>{this.unlocked=!0}).catch(()=>{}),this.unlocked=this.context.state==="running"}catch{}}setVolume(t){this.volume=this.clamp(t),this.setGain(this.master,this.volume)}setMusicVolume(t){this.musicVolume=this.clamp(t),this.setGain(this.music,this.musicVolume)}setEffectsVolume(t){this.effectsVolume=this.clamp(t),this.setGain(this.fx,this.effectsVolume)}clamp(t){return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}setGain(t,e){if(!this.context||!t)return;const n=this.context.currentTime;t.gain.cancelScheduledValues(n),e===0?t.gain.setValueAtTime(0,n):t.gain.setTargetAtTime(e,n,.04)}suspend(){const t=this.context;if(t&&this.musicSources.length&&this.district){this.musicOffset=(this.musicOffset+Math.max(0,t.currentTime-this.musicStarted))%this.district.duration,this.musicDuck?.gain.cancelScheduledValues(t.currentTime),this.musicDuck?.gain.setTargetAtTime(0,t.currentTime,.035);for(const e of this.musicSources)e.stop(t.currentTime+.16);this.musicSources=[]}this.lastX=this.lastZ=void 0,this.distance=0}handle(t){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const e of t)switch(e.type){case"shot":this.shot(e.weapon||"revolver");break;case"reload":this.reload(e.weapon||"revolver");break;case"hurt":this.burst(.23,.24,850),this.tone(97,.21,.21,"sawtooth",45);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.55,.14,740),this.tone(89,.43,.14,"sawtooth",58),this.burst(.085,.19,2700,.42);break;case"enemy":{const n=this.context.currentTime;if(n-this.lastEnemy>.55)if(this.lastEnemy=n,e.message?.includes("charging shot"))this.tone(260,.19,.1,"sawtooth",790),this.burst(.1,.24,4600,.2),this.tone(145,.16,.17,"triangle",45,.2);else{const i=e.message?.startsWith("Strider");this.tone(i?86:143,.34,.2,"sawtooth",i?35:56),this.tone(i?134:218,.27,.1,"triangle",63),this.burst(.32,.2,i?630:1100)}break}case"kill":this.burst(.26,.19,620),this.tone(118,.27,.13,"sawtooth",34);break;case"mount":this.tone(110,.22,.16,"sawtooth",210),this.tone(82,.18,.17,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(t,e){const n=this.context;if(!n||!this.unlocked||n.state!=="running"||t.status!=="playing")return;this.musicSources.length||this.startMusic();const i=t.player,r=t.enemies.some(o=>o.alive&&o.alert&&Math.hypot(o.x-i.x,o.z-i.z)<22);this.danger+=((r?1:0)-this.danger)*Math.min(1,e*(r?1.7:.32)),this.combatGain?.gain.setTargetAtTime(this.danger*.93,n.currentTime,.18),this.districtGain?.gain.setTargetAtTime(.92-this.danger*.12,n.currentTime,.22);const a=this.lastX===void 0?0:Math.hypot(i.x-this.lastX,i.z-this.lastZ);this.lastX=i.x,this.lastZ=i.z,a<1&&(this.distance+=a),i.grounded&&this.distance>(i.mounted?2.2:1.65)&&n.currentTime-this.lastStep>.22&&e>0&&(this.distance=0,this.lastStep=n.currentTime,this.burst(.065,i.mounted?.18:.085,i.mounted?430:1400),this.tone(i.mounted?65:110,.09,i.mounted?.15:.08,"triangle",40))}buffer(t){const e=this.context.createBuffer(t.channels.length,t.channels[0].length,t.sampleRate);return t.channels.forEach((n,i)=>e.getChannelData(i).set(n)),e}startMusic(){const t=this.context;if(!t||!this.district||!this.combat||!this.districtGain||!this.combatGain||!this.musicDuck)return;const e=t.currentTime+.025;this.musicDuck.gain.cancelScheduledValues(t.currentTime),this.musicDuck.gain.setValueAtTime(0,t.currentTime),this.musicDuck.gain.linearRampToValueAtTime(1,e+.3),this.musicStarted=e;for(const[n,i]of[[this.district,this.districtGain],[this.combat,this.combatGain]]){const r=t.createBufferSource();r.buffer=n,r.loop=!0,r.connect(i),r.start(e,this.musicOffset),r.onended=()=>r.disconnect(),this.musicSources.push(r)}}shot(t){const e=this.context,n=this.weapons.get(t);if(!e||!n||!this.fx)return;const i=e.createBufferSource(),r=e.createGain();if(i.buffer=n,i.playbackRate.value=.985+Math.random()*.03,r.gain.value={revolver:.84,shotgun:1,plasma:.74,machinegun:.7}[t],i.connect(r),r.connect(this.fx),i.start(),i.onended=()=>{i.disconnect(),r.disconnect()},this.musicDuck&&this.musicSources.length){const a=e.currentTime;this.musicDuck.gain.cancelScheduledValues(a),this.musicDuck.gain.setValueAtTime(Math.min(1,this.musicDuck.gain.value),a),this.musicDuck.gain.linearRampToValueAtTime(.79,a+.006),this.musicDuck.gain.linearRampToValueAtTime(1,a+.145)}}reload(t){if(t==="plasma"){this.tone(180,.28,.13,"sawtooth",740),this.burst(.17,.15,2900,.25),this.tone(1320,.18,.09,"triangle",420,.47);return}if(this.burst(.075,.19,4200),this.tone(420,.045,.11,"square",180),this.burst(.13,.12,1600,.19),this.tone(710,.045,.1,"triangle",270,.31),t==="shotgun"||t==="revolver")for(let e=0;e<3;e++)this.burst(.032,.09,3100,.36+e*.19),this.tone(1870,.024,.035,"triangle",970,.36+e*.19);this.burst(.06,.22,3800,t==="machinegun"?.83:1),this.tone(160,.08,.14,"triangle",61,t==="machinegun"?.84:1.02)}tone(t,e,n,i="square",r=t,a=0){const o=this.context;if(!o||!this.fx)return;const l=o.currentTime+a,c=o.createOscillator(),u=o.createGain();c.type=i,c.frequency.setValueAtTime(Math.max(1,t),l),c.frequency.exponentialRampToValueAtTime(Math.max(1,r),l+e),u.gain.setValueAtTime(1e-4,l),u.gain.linearRampToValueAtTime(n,l+Math.min(.006,e/4)),u.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(u),u.connect(this.fx),c.start(l),c.stop(l+e+.025),c.onended=()=>{c.disconnect(),u.disconnect()}}burst(t,e,n,i=0){const r=this.context;if(!r||!this.noise||!this.fx)return;const a=r.currentTime+i,o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain();o.buffer=this.noise,l.type="lowpass",l.frequency.setValueAtTime(n,a),l.Q.value=.4,c.gain.setValueAtTime(e,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(c),c.connect(this.fx),o.start(a,Math.random()),o.stop(a+t+.025),o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect()}}chime(t,e,n){t.forEach((i,r)=>this.tone(i,.42,n,"triangle",i,r*e))}}const to=document.querySelector("#world"),Em=document.querySelector("#weapon");let Te,rr,ri=!1,ls=performance.now(),ci=!1;const Nn=new ym,$n=new gm(to,fs),Tm=new vm(Em),dn=new _m({start:bc,resume:wm,restart:Rm,menu:Cm,pause:fs,settings:yc});Te=new gc(De,dn.settings.difficulty);function Am(){try{localStorage.setItem("fossil-noir-3d-checkpoint",JSON.stringify({version:1,difficulty:Te.state.difficulty}))}catch{}}function Sc(){try{return JSON.parse(localStorage.getItem("fossil-noir-3d-checkpoint")||"null")?.version===1}catch{return!1}}function Kn(s){ri=s==="playing",$n.enabled=ri,$n.clear(),dn.show(s),ri||($n.release(),Nn.suspend())}function bc(s=!1){ci||(Te=new gc(De,dn.settings.difficulty),s&&Sc()&&Te.restart(!0),Nn.unlock(),Kn("playing"),$n.capture(),ls=performance.now())}function wm(){ci||Te.state.status!=="playing"||(Nn.unlock(),Kn("playing"),$n.capture(),ls=performance.now())}function fs(){ri&&Kn("pause")}function Rm(s=!1){if(!ci){if(!s){bc(!1);return}Te.restart(s&&(Te.state.checkpoint||Sc())),Nn.unlock(),Kn("playing"),$n.capture(),ls=performance.now()}}function Cm(){Kn("menu")}function yc(s){$n.sensitivity=s.sensitivity,Nn.setVolume(s.volume),Nn.setMusicVolume(s.musicVolume),Nn.setEffectsVolume(s.effectsVolume),rr?.resize(s)}try{rr=new pm(to),yc(dn.settings),dn.show("menu")}catch(s){ci=!0,dn.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${s instanceof Error?s.message:""}`)}function Ec(s){const t=Math.min(Math.max((s-ls)/1e3,0),.05);if(ls=s,!ci)try{if(ri){Te.update(t,$n.read());for(const e of Te.state.events)e.type==="checkpoint"&&Am();if(Nn.handle(Te.state.events),Te.state.events.length=0,Nn.tick(Te.state,t),Te.state.status==="dead"&&Kn("dead"),Te.state.status==="complete"){try{localStorage.setItem("fossil-noir-3d-best",String(Math.floor(Te.state.time)))}catch{}Kn("complete")}}rr.render(Te.state,ri?t:0,dn.settings),Tm.render(Te.state,ri?t:0),dn.update(Te.state)}catch(e){console.error("Fossil Noir 3D runtime error",e),ci=!0,Kn("menu"),dn.setError("The mission could not continue. Reload this page to restart.")}requestAnimationFrame(Ec)}window.addEventListener("resize",()=>rr?.resize(dn.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&fs()});window.addEventListener("blur",fs);to.addEventListener("webglcontextlost",s=>{s.preventDefault(),fs(),ci=!0,dn.setError("Graphics context lost. Reload the page to recover the mission.")});requestAnimationFrame(Ec);
