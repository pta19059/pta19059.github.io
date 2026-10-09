(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Il=[],It=(s,t,e,n,i=4.2,r="concrete",a)=>Il.push({x:s,z:t,w:e,d:n,h:i,material:r,...a===void 0?{}:{y:a}});It(0,12.3,11,.6,4,"brick");It(-5.3,8,.6,8.6,4,"brick");It(5.3,8,.6,8.6,4,"brick");It(-3.4,4,3.8,.6,4,"brick");It(3.4,4,3.8,.6,4,"brick");It(0,4,3,.6,.8,"brick",3.2);It(-13.3,0,.6,8,6.5,"brick");It(-13.3,-13.5,.6,7,6.5,"brick");It(-13.3,-18.7,.6,3.4,6.5,"brick");It(-13.3,-4.6,.6,2.2,6.5,"brick");It(-13.3,-9.4,.6,2.2,6.5,"brick");It(-17.3,-7,.6,6.6,4,"brick");It(-15.2,-3.7,4.8,.6,4,"brick");It(-15.2,-10.3,4.8,.6,4,"brick");It(13.3,-8,.6,24,7.2,"brick");It(-9.5,4,7,.6,5.5,"brick");It(9.5,4,7,.6,5.5,"brick");It(-8,-20,12,.7,6,"metal");It(8,-20,12,.7,6,"metal");It(0,-20,4,.7,2.4,"metal",3.2);It(-7.3,-26,.6,12.6,4.5,"metal");It(7.3,-23,.6,6,4.5,"metal");It(7.3,-30.5,.6,3,4.5,"metal");It(7.3,-27.4,.6,3,1.5,"metal",3);It(11.2,-23.9,8.4,.6,4.5,"metal");It(15.3,-27.9,.6,8.6,4.5,"metal");It(11.2,-32.2,8.4,.6,4.5,"metal");It(-5.8,-32.2,8.6,.6,4.5,"metal");It(5.8,-32.2,8.6,.6,4.5,"metal");It(0,-32.2,3,.6,1.3,"metal",3.2);It(-10.3,-39.2,.6,14.6,4.5,"metal");It(10.3,-39.2,.6,14.6,4.5,"metal");It(-11,-46,.6,1.2,4.5,"metal");It(-10,-46,2,.6,4.5,"metal");It(2.8,-46,15.6,.6,4.5,"metal");It(-7,-46,4,.6,1.3,"metal",3.2);It(-11.3,-49,.6,6.6,4.5,"metal");It(-2.7,-49,.6,6.6,4.5,"metal");It(-7,-52.3,9.2,.6,4.5,"metal");It(-3.2,8,2.2,1.1,.85,"crate");It(3.8,10,1.2,2.2,1.5,"crate");It(-8,-4,2.4,1.4,1.1,"crate");It(-7,-10,2,3.6,1.1,"metal");It(3.8,-13,2.4,1.6,1.7,"crate");It(5,-14.5,1.6,1.5,1.1,"crate");It(-4.7,-18,2.4,1.3,1.3,"crate");It(4.5,-23.8,1.8,1.8,1.2,"crate");It(-4.4,-26.8,2.2,1.4,1.25,"metal");It(12,-25.9,3.3,1,1.1,"metal");It(-6.7,-34.5,2.2,1.5,1.2,"metal");It(5,-36,2.4,1.2,1.2,"metal");It(0,-40,3.5,1.4,1.1,"metal");It(-7.5,-42.8,1.3,2.4,1.5,"crate");const Ce={walls:Il,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",x:2,z:6.7},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",x:-10.5,z:-5.3},{id:"street-ammo2",kind:"ammo",x:5.8,z:-12},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",x:5.8,z:-28.5},{id:"lobby-ammo2",kind:"ammo",x:-5.7,z:-29.5},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",x:10,z:-30.7},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",x:4.7,z:-34.5},{id:"lab-ammo2",kind:"ammo",x:-8,z:-37},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",x:-5,z:-44.5},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],destructibles:[{id:"fuel-street-west",kind:"barrel",x:-8.8,z:-13.2,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-street-east",kind:"barrel",x:5.7,z:-16.8,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-security",kind:"barrel",x:4.8,z:-29.7,y:0,w:.85,d:.85,h:1.35,health:30},{id:"fuel-containment",kind:"barrel",x:.9,z:-43.5,y:0,w:.85,d:.85,h:1.35,health:30},{id:"glass-hotel",kind:"glass",x:-12.66,z:-1.7,y:1.12,w:.14,d:3.2,h:2.2,health:1},{id:"glass-eden",kind:"glass",x:12.66,z:-4.5,y:1.12,w:.14,d:3.2,h:2.2,health:1}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="186",Oc=0,So=1,zc=2,ks=1,Bc=2,is=3,li=0,qe=1,We=2,Fn=0,rs=1,bo=2,yo=3,Eo=4,kc=5,Li=100,Gc=101,Hc=102,Vc=103,Wc=104,Xc=200,qc=201,Yc=202,$c=203,Ll=204,Dl=205,Kc=206,Zc=207,Jc=208,Qc=209,jc=210,th=211,eh=212,nh=213,ih=214,ta=0,ea=1,na=2,as=3,ia=4,sa=5,ra=6,aa=7,nr=0,sh=1,rh=2,un=0,Ul=1,Nl=2,Fl=3,Ol=4,zl=5,Bl=6,kl=7,Gl=300,ci=301,Oi=302,fr=303,ur=304,ir=306,zi=1e3,Nn=1001,oa=1002,fe=1003,ah=1004,xs=1005,Ne=1006,dr=1007,ri=1008,je=1009,Hl=1010,Vl=1011,os=1012,Va=1013,yn=1014,hn=1015,En=1016,Wa=1017,Xa=1018,ls=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,fn=1023,Bn=1026,ai=1027,qa=1028,Ya=1029,hi=1030,$a=1031,Ka=1033,Gs=33776,Hs=33777,Vs=33778,Ws=33779,la=35840,ca=35841,ha=35842,fa=35843,ua=36196,da=37492,pa=37496,ma=37488,ga=37489,Ys=37490,xa=37491,_a=37808,va=37809,Ma=37810,Sa=37811,ba=37812,ya=37813,Ea=37814,Ta=37815,wa=37816,Aa=37817,Ra=37818,Ca=37819,Pa=37820,Ia=37821,La=36492,Da=36494,Ua=36495,Na=36283,Fa=36284,$s=36285,Oa=36286,oh=3200,Ks=0,lh=1,Kn="",Se="srgb",Zs="srgb-linear",Js="linear",ne="srgb",pr=7680,ch=519,hh=512,fh=513,uh=514,Za=515,dh=516,ph=517,Ja=518,mh=519,gh=35044,$l=35048,To="300 es",bn=2e3,cs=2001;function xh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _h(){const s=Qs("canvas");return s.style.display="block",s}const wo={};function Ao(...s){const t="THREE."+s.shift();console.log(t,...s)}function Kl(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=Kl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Zt(...s){s=Kl(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ni(...s){const t=s.join(" ");t in wo||(wo[t]=!0,Nt(...s))}function vh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Mh={[ta]:ea,[na]:ra,[ia]:aa,[as]:sa,[ea]:ta,[ra]:na,[aa]:ia,[sa]:as};class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,za=180/Math.PI;function us(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function Sh(s,t){return(s%t+t)%t}function gr(s,t,e){return(1-e)*s+e*t}function Vi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ro=class ro{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ro.prototype.isVector2=!0;let Ft=ro;class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],p=r[a+1],u=r[a+2],x=r[a+3];if(d!==x||c!==f||l!==p||h!==u){let m=c*f+l*p+h*u+d*x;m<0&&(f=-f,p=-p,u=-u,x=-x,m=-m);let g=1-o;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,o=Math.sin(o*y)/w,c=c*g+f*o,l=l*g+p*o,h=h*g+u*o,d=d*g+x*o}else{c=c*g+f*o,l=l*g+p*o,h=h*g+u*o,d=d*g+x*o;const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],p=r[a+2],u=r[a+3];return t[e]=o*u+h*d+c*p-l*f,t[e+1]=c*u+h*f+l*d-o*p,t[e+2]=l*u+h*p+o*f-c*d,t[e+3]=h*u-o*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),p=c(i/2),u=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*p*u,this._y=l*p*d-f*h*u,this._z=l*h*u+f*p*d,this._w=l*h*d-f*p*u;break;case"YXZ":this._x=f*h*d+l*p*u,this._y=l*p*d-f*h*u,this._z=l*h*u-f*p*d,this._w=l*h*d+f*p*u;break;case"ZXY":this._x=f*h*d-l*p*u,this._y=l*p*d+f*h*u,this._z=l*h*u+f*p*d,this._w=l*h*d-f*p*u;break;case"ZYX":this._x=f*h*d-l*p*u,this._y=l*p*d+f*h*u,this._z=l*h*u-f*p*d,this._w=l*h*d+f*p*u;break;case"YZX":this._x=f*h*d+l*p*u,this._y=l*p*d+f*h*u,this._z=l*h*u-f*p*d,this._w=l*h*d-f*p*u;break;case"XZY":this._x=f*h*d-l*p*u,this._y=l*p*d-f*h*u,this._z=l*h*u+f*p*d,this._w=l*h*d+f*p*u;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ao=class ao{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ro.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ro.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ao.prototype.isVector3=!0;let G=ao;const xr=new G,Ro=new Ye,oo=class oo{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],u=n[8],x=i[0],m=i[3],g=i[6],y=i[1],w=i[4],v=i[7],b=i[2],E=i[5],R=i[8];return r[0]=a*x+o*y+c*b,r[3]=a*m+o*w+c*E,r[6]=a*g+o*v+c*R,r[1]=l*x+h*y+d*b,r[4]=l*m+h*w+d*E,r[7]=l*g+h*v+d*R,r[2]=f*x+p*y+u*b,r[5]=f*m+p*w+u*E,r[8]=f*g+p*v+u*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,p=l*r-a*c,u=e*d+n*f+i*p;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/u;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_r.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oo.prototype.isMatrix3=!0;let Ot=oo;const _r=new Ot,Co=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bh(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?Js:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zs]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),s}const Xt=bh();function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gi;class yh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=Qs("canvas")),gi.width=t.width,gi.height=t.height;const i=gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Eh=0;class Qa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vr(i[a].image)):r.push(vr(i[a]))}else r=vr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Th=0;const Mr=new G;class Fe extends ui{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Nn,i=Nn,r=Ne,a=ri,o=fn,c=je,l=Fe.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=us(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mr).x}get height(){return this.source.getSize(Mr).y}get depth(){return this.source.getSize(Mr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Gl;Fe.DEFAULT_ANISOTROPY=1;const lo=class lo{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],u=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(u-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(u+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,v=(p+1)/2,b=(g+1)/2,E=(h+f)/4,R=(d+x)/4,M=(u+m)/4;return w>v&&w>b?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=R/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=M/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-u)*(m-u)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-u)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lo.prototype.isVector4=!0;let pe=lo;class wh extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Fe(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qa(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zl extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const er=class er{constructor(t,e,n,i,r,a,o,c,l,h,d,f,p,u,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,f,p,u,x,m)}set(t,e,n,i,r,a,o,c,l,h,d,f,p,u,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=p,g[7]=u,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new er().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),a=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*d,u=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+u*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=u+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,p=c*d,u=l*h,x=l*d;e[0]=f+x*o,e[4]=u*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-u,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,p=c*d,u=l*h,x=l*d;e[0]=f-x*o,e[4]=-a*d,e[8]=u+p*o,e[1]=p+u*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,p=a*d,u=o*h,x=o*d;e[0]=c*h,e[4]=u*l-p,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=p*l-u,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,u=o*c,x=o*l;e[0]=c*h,e[4]=x-f*d,e[8]=u*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+u,e[10]=f-x*d}else if(t.order==="XZY"){const f=a*c,p=a*l,u=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+x,e[5]=a*h,e[9]=p*d-u,e[2]=u*d-p,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ch)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Vn.crossVectors(n,$e),Vn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Vn.crossVectors(n,$e)),Vn.normalize(),_s.crossVectors($e,Vn),i[0]=Vn.x,i[4]=_s.x,i[8]=$e.x,i[1]=Vn.y,i[5]=_s.y,i[9]=$e.y,i[2]=Vn.z,i[6]=_s.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],u=n[2],x=n[6],m=n[10],g=n[14],y=n[3],w=n[7],v=n[11],b=n[15],E=i[0],R=i[4],M=i[8],T=i[12],C=i[1],I=i[5],P=i[9],D=i[13],L=i[2],U=i[6],q=i[10],k=i[14],J=i[3],Y=i[7],X=i[11],j=i[15];return r[0]=a*E+o*C+c*L+l*J,r[4]=a*R+o*I+c*U+l*Y,r[8]=a*M+o*P+c*q+l*X,r[12]=a*T+o*D+c*k+l*j,r[1]=h*E+d*C+f*L+p*J,r[5]=h*R+d*I+f*U+p*Y,r[9]=h*M+d*P+f*q+p*X,r[13]=h*T+d*D+f*k+p*j,r[2]=u*E+x*C+m*L+g*J,r[6]=u*R+x*I+m*U+g*Y,r[10]=u*M+x*P+m*q+g*X,r[14]=u*T+x*D+m*k+g*j,r[3]=y*E+w*C+v*L+b*J,r[7]=y*R+w*I+v*U+b*Y,r[11]=y*M+w*P+v*q+b*X,r[15]=y*T+w*D+v*k+b*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],u=t[3],x=t[7],m=t[11],g=t[15],y=c*p-l*f,w=o*p-l*d,v=o*f-c*d,b=a*p-l*h,E=a*f-c*h,R=a*d-o*h;return e*(x*y-m*w+g*v)-n*(u*y-m*b+g*E)+i*(u*w-x*b+g*R)-r*(u*v-x*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],u=t[12],x=t[13],m=t[14],g=t[15],y=e*o-n*a,w=e*c-i*a,v=e*l-r*a,b=n*c-i*o,E=n*l-r*o,R=i*l-r*c,M=h*x-d*u,T=h*m-f*u,C=h*g-p*u,I=d*m-f*x,P=d*g-p*x,D=f*g-p*m,L=y*D-w*P+v*I+b*C-E*T+R*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return t[0]=(o*D-c*P+l*I)*U,t[1]=(i*P-n*D-r*I)*U,t[2]=(x*R-m*E+g*b)*U,t[3]=(f*E-d*R-p*b)*U,t[4]=(c*C-a*D-l*T)*U,t[5]=(e*D-i*C+r*T)*U,t[6]=(m*v-u*R-g*w)*U,t[7]=(h*R-f*v+p*w)*U,t[8]=(a*P-o*C+l*M)*U,t[9]=(n*C-e*P-r*M)*U,t[10]=(u*E-x*v+g*y)*U,t[11]=(d*v-h*E-p*y)*U,t[12]=(o*T-a*I-c*M)*U,t[13]=(e*I-n*T+i*M)*U,t[14]=(x*w-u*b-m*y)*U,t[15]=(h*b-d*w+f*y)*U,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,p=r*h,u=r*d,x=a*h,m=a*d,g=o*d,y=c*l,w=c*h,v=c*d,b=n.x,E=n.y,R=n.z;return i[0]=(1-(x+g))*b,i[1]=(p+v)*b,i[2]=(u-w)*b,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(f+g))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(u+w)*R,i[9]=(m-y)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=xi.set(i[0],i[1],i[2]).length();const o=xi.set(i[4],i[5],i[6]).length(),c=xi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),rn.copy(this);const l=1/a,h=1/o,d=1/c;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=bn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let u,x;if(c)u=r/(a-r),x=a*r/(a-r);else if(o===bn)u=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===cs)u=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=bn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i);let u,x;if(c)u=1/(a-r),x=a/(a-r);else if(o===bn)u=-2/(a-r),x=-(a+r)/(a-r);else if(o===cs)u=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=u,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};er.prototype.isMatrix4=!0;let le=er;const xi=new G,rn=new le,Rh=new G(0,0,0),Ch=new G(1,1,1),Vn=new G,_s=new G,$e=new G,Io=new le,Lo=new Ye;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Io,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ph=0;const Do=new G,_i=new Ye,An=new le,vs=new G,Wi=new G,Ih=new G,Lh=new Ye,Uo=new G(1,0,0),No=new G(0,1,0),Fo=new G(0,0,1),Oo={type:"added"},Dh={type:"removed"},vi={type:"childadded",child:null},Sr={type:"childremoved",child:null};class be extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new G,e=new Tn,n=new Ye,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Do.copy(t).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Wi,vs,this.up):An.lookAt(vs,Wi,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(An),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oo),vi.child=t,this.dispatchEvent(vi),vi.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oo),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),u=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),u.length>0&&(n.nodes=u)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new G(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uh={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,u=.005;l.inputState.pinching&&f>p+u?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-u&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Sh(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yr(a,r,t+1/3),this.g=yr(a,r,t),this.b=yr(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=Ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Xt.workingToColorSpace(Ue.copy(this),t),Math.round(qt(Ue.r*255,0,255))*65536+Math.round(qt(Ue.g*255,0,255))*256+Math.round(qt(Ue.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,r=Ue.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Se){Xt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Ms);const n=gr(Wn.h,Ms.h,e),i=gr(Wn.s,Ms.s,e),r=gr(Wn.l,Ms.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Gt;Gt.NAMES=Ql;class ja{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nh extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const an=new G,Rn=new G,Er=new G,Cn=new G,Mi=new G,Si=new G,zo=new G,Tr=new G,wr=new G,Ar=new G,Rr=new pe,Cr=new pe,Pr=new pe;class cn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),Rn.subVectors(n,e),Er.subVectors(t,e);const a=an.dot(an),o=an.dot(Rn),c=an.dot(Er),l=Rn.dot(Rn),h=Rn.dot(Er),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(l*c-o*h)*f,u=(a*h-o*c)*f;return r.set(1-p-u,u,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Rr.setScalar(0),Cr.setScalar(0),Pr.setScalar(0),Rr.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Pr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Rr,r.x),a.addScaledVector(Cr,r.y),a.addScaledVector(Pr,r.z),a}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),Rn.subVectors(t,e),an.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Mi.subVectors(i,n),Si.subVectors(r,n),Tr.subVectors(t,n);const c=Mi.dot(Tr),l=Si.dot(Tr);if(c<=0&&l<=0)return e.copy(n);wr.subVectors(t,i);const h=Mi.dot(wr),d=Si.dot(wr);if(h>=0&&d<=h)return e.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Mi,a);Ar.subVectors(t,r);const p=Mi.dot(Ar),u=Si.dot(Ar);if(u>=0&&p<=u)return e.copy(r);const x=p*l-c*u;if(x<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Si,o);const m=h*u-p*d;if(m<=0&&d-h>=0&&p-u>=0)return zo.subVectors(r,i),o=(d-h)/(d-h+(p-u)),e.copy(i).addScaledVector(zo,o);const g=1/(m+x+f);return a=x*g,o=f*g,e.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),bs.subVectors(this.max,Xi),bi.subVectors(t.a,Xi),yi.subVectors(t.b,Xi),Ei.subVectors(t.c,Xi),Xn.subVectors(yi,bi),qn.subVectors(Ei,yi),jn.subVectors(bi,Ei);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-jn.z,jn.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,jn.z,0,-jn.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-jn.y,jn.x,0];return!Ir(e,bi,yi,Ei,bs)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,bi,yi,Ei,bs))?!1:(ys.crossVectors(Xn,qn),e=[ys.x,ys.y,ys.z],Ir(e,bi,yi,Ei,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new G,new G,new G,new G,new G,new G,new G,new G],on=new G,Ss=new di,bi=new G,yi=new G,Ei=new G,Xn=new G,qn=new G,jn=new G,Xi=new G,bs=new G,ys=new G,ti=new G;function Ir(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ti.fromArray(s,r);const o=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ve=new G,Es=new Ft;let Fh=0;class pn extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class jl extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Oh=new di,qi=new G,Lr=new G;class ds{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Oh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(Lr)),this.expandByPoint(qi.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let zh=0;const en=new le,Dr=new be,Ti=new G,Ke=new di,Yi=new di,we=new G;class Ge extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?tc:jl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ke.min,Yi.min),Ke.expandByPoint(we),we.addVectors(Ke.max,Yi.max),Ke.expandByPoint(we)):(Ke.expandByPoint(Yi.min),Ke.expandByPoint(Yi.max))}Ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)we.fromBufferAttribute(o,l),c&&(Ti.fromBufferAttribute(t,l),we.add(Ti)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new G,c[M]=new G;const l=new G,h=new G,d=new G,f=new Ft,p=new Ft,u=new Ft,x=new G,m=new G;function g(M,T,C){l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),u.fromBufferAttribute(r,C),h.sub(l),d.sub(l),p.sub(f),u.sub(f);const I=1/(p.x*u.y-u.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(u.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-u.x).multiplyScalar(I),o[M].add(x),o[T].add(x),o[C].add(x),c[M].add(m),c[T].add(m),c[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let M=0,T=y.length;M<T;++M){const C=y[M],I=C.start,P=C.count;for(let D=I,L=I+P;D<L;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const w=new G,v=new G,b=new G,E=new G;function R(M){b.fromBufferAttribute(i,M),E.copy(b);const T=o[M];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(E,T);const I=v.dot(c[M])<0?-1:1;a.setXYZW(M,w.x,w.y,w.z,I)}for(let M=0,T=y.length;M<T;++M){const C=y[M],I=C.start,P=C.count;for(let D=I,L=I+P;D<L;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new G,r=new G,a=new G,o=new G,c=new G,l=new G,h=new G,d=new G;if(t)for(let f=0,p=t.count;f<p;f+=3){const u=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,u),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,u),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(u,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let p=0,u=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let g=0;g<h;g++)f[u++]=l[p++]}return new pn(f,h,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new G,Bh=new G,kh=new Ot;class $n{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ur.subVectors(n,e).cross(Bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Ur),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kh.getNormalMatrix(t),i=this.coplanarPoint(Ur).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Gh=0;class ki extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=us(),this.name="",this.type="Material",this.blending=rs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Dl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const In=new G,Nr=new G,Ts=new G,ws=new G;class Hh{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nr.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),ws.copy(this.origin).sub(Nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),o=ws.dot(this.direction),c=-ws.dot(Ts),l=ws.lengthSq(),h=Math.abs(1-a*a);let d,f,p,u;if(h>0)if(d=a*c-o,f=a*o-c,u=r*h,d>=0)if(f>=-u)if(f<=u){const x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-u?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=u?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Nr).addScaledVector(Ts,f),p}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,p=t.z-a.z,u=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=n.x-a.x,y=n.y-a.y,w=n.z-a.z,v=Math.abs(c),b=Math.abs(l),E=Math.abs(h);let R,M,T,C,I,P,D,L,U,q,k,J;if(v>=b&&v>=E?(T=c,P=d,U=u,J=g,c>=0?(R=l,M=h,C=f,I=p,D=x,L=m,q=y,k=w):(R=h,M=l,C=p,I=f,D=m,L=x,q=w,k=y)):b>=E?(T=l,P=f,U=x,J=y,l>=0?(R=h,M=c,C=p,I=d,D=m,L=u,q=w,k=g):(R=c,M=h,C=d,I=p,D=u,L=m,q=g,k=w)):(T=h,P=p,U=m,J=w,h>=0?(R=c,M=l,C=d,I=f,D=u,L=x,q=g,k=y):(R=l,M=c,C=f,I=d,D=x,L=u,q=y,k=g)),T===0)return null;const Y=R/T,X=M/T,j=1/T,vt=C-Y*P,bt=I-X*P,Jt=D-Y*U,O=L-X*U,Q=q-Y*J,N=k-X*J,$=Q*O-N*Jt,st=vt*N-bt*Q,lt=Jt*bt-O*vt;if(i){if($<0||st<0||lt<0)return null}else if(($<0||st<0||lt<0)&&($>0||st>0||lt>0))return null;const at=$+st+lt;if(at===0)return null;const Tt=j*($*P+st*U+lt*J);return(at>0?Tt<0:Tt>0)?null:this.at(Tt/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bo=new le,ei=new Hh,As=new ds,ko=new G,Rs=new G,Cs=new G,Ps=new G,Fr=new G,Is=new G,Go=new G,Ls=new G;class de extends be{constructor(t=new Ge,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Fr.fromBufferAttribute(d,t),a?Is.addScaledVector(Fr,h):Is.addScaledVector(Fr.sub(e),h))}e.add(Is)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(As.containsPoint(ei.origin)===!1&&(ei.intersectSphere(As,ko)===null||ei.origin.distanceToSquared(ko)>(t.far-t.near)**2))&&(Bo.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Bo),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let u=0,x=f.length;u<x;u++){const m=f[u],g=a[m.materialIndex],y=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,b=w;v<b;v+=3){const E=o.getX(v),R=o.getX(v+1),M=o.getX(v+2);i=Ds(this,g,t,n,l,h,d,E,R,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const u=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=u,g=x;m<g;m+=3){const y=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);i=Ds(this,a,t,n,l,h,d,y,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let u=0,x=f.length;u<x;u++){const m=f[u],g=a[m.materialIndex],y=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,b=w;v<b;v+=3){const E=v,R=v+1,M=v+2;i=Ds(this,g,t,n,l,h,d,E,R,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const u=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=u,g=x;m<g;m+=3){const y=m,w=m+1,v=m+2;i=Ds(this,a,t,n,l,h,d,y,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Vh(s,t,e,n,i,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===li,o),c===null)return null;Ls.copy(o),Ls.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:s}}function Ds(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Rs),s.getVertexPosition(c,Cs),s.getVertexPosition(l,Ps);const h=Vh(s,t,e,n,Rs,Cs,Ps,Go);if(h){const d=new G;cn.getBarycoord(Go,Rs,Cs,Ps,d),i&&(h.uv=cn.getInterpolatedAttribute(i,o,c,l,d,new Ft)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,d,new Ft)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new G,materialIndex:0};cn.getNormal(Rs,Cs,Ps,f.normal),h.face=f,h.barycoord=d}return h}class ec extends Fe{constructor(t=null,e=1,n=1,i,r,a,o,c,l=fe,h=fe,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho extends pn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new le,Vo=new le,Us=[],Wo=new di,Wh=new le,$i=new de,Ki=new ds;class nc extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),Wo.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(Wo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),Ki.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),t.ray.intersectsSphere(Ki)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wi),Vo.multiplyMatrices(n,wi),$i.matrixWorld=Vo,$i.raycast(t,Us);for(let a=0,o=Us.length;a<o;a++){const c=Us[a];c.instanceId=r,c.object=this,e.push(c)}Us.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ec(new Float32Array(i*this.count),i,this.count,qa,hn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ni=new ds,Xh=new Ft(.5,.5),Ns=new G;class to{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],p=r[7],u=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-a,p-h,g-u,b-y).normalize(),i[1].setComponents(l+a,p+h,g+u,b+y).normalize(),i[2].setComponents(l+o,p+d,g+x,b+w).normalize(),i[3].setComponents(l-o,p-d,g-x,b-w).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,p-f,g-m,b-v).normalize();else if(i[4].setComponents(l-c,p-f,g-m,b-v).normalize(),e===bn)i[5].setComponents(l+c,p+f,g+m,b+v).normalize();else if(e===cs)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=Xh.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ns.x=i.normal.x>0?t.max.x:t.min.x,Ns.y=i.normal.y>0?t.max.y:t.min.y,Ns.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ic extends Fe{constructor(t=[],e=ci,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gi extends Fe{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs extends Fe{constructor(t,e,n=yn,i,r,a,o=fe,c=fe,l,h=Bn,d=1){if(h!==Bn&&h!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class qh extends hs{constructor(t,e=yn,n=ci,i,r,a=fe,o=fe,c,l=Bn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sc extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ke extends Ge{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,p=0;u("z","y","x",-1,-1,n,e,t,a,r,0),u("z","y","x",1,-1,n,e,-t,a,r,1),u("x","z","y",1,1,t,n,e,i,a,2),u("x","z","y",1,-1,t,n,-e,i,a,3),u("x","y","z",1,-1,t,e,n,i,r,4),u("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function u(x,m,g,y,w,v,b,E,R,M,T){const C=v/R,I=b/M,P=v/2,D=b/2,L=E/2,U=R+1,q=M+1;let k=0,J=0;const Y=new G;for(let X=0;X<q;X++){const j=X*I-D;for(let vt=0;vt<U;vt++){const bt=vt*C-P;Y[x]=bt*y,Y[m]=j*w,Y[g]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[g]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(vt/R),d.push(1-X/M),k+=1}}for(let X=0;X<M;X++)for(let j=0;j<R;j++){const vt=f+j+U*X,bt=f+j+U*(X+1),Jt=f+(j+1)+U*(X+1),O=f+(j+1)+U*X;c.push(vt,bt,O),c.push(bt,Jt,O),J+=6}o.addGroup(p,J,T),p+=J,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Kt extends Ge{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let u=0;const x=[],m=n/2;let g=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(p,2));function y(){const v=new G,b=new G;let E=0;const R=(e-t)/n;for(let M=0;M<=r;M++){const T=[],C=M/r,I=C*(e-t)+t;for(let P=0;P<=i;P++){const D=P/i,L=D*c+o,U=Math.sin(L),q=Math.cos(L);b.x=I*U,b.y=-C*n+m,b.z=I*q,d.push(b.x,b.y,b.z),v.set(U,R,q).normalize(),f.push(v.x,v.y,v.z),p.push(D,1-C),T.push(u++)}x.push(T)}for(let M=0;M<i;M++)for(let T=0;T<r;T++){const C=x[T][M],I=x[T+1][M],P=x[T+1][M+1],D=x[T][M+1];(t>0||T!==0)&&(h.push(C,I,D),E+=3),(e>0||T!==r-1)&&(h.push(I,P,D),E+=3)}l.addGroup(g,E,0),g+=E}function w(v){const b=u,E=new Ft,R=new G;let M=0;const T=v===!0?t:e,C=v===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,m*C,0),f.push(0,C,0),p.push(.5,.5),u++;const I=u;for(let P=0;P<=i;P++){const L=P/i*c+o,U=Math.cos(L),q=Math.sin(L);R.x=T*q,R.y=m*C,R.z=T*U,d.push(R.x,R.y,R.z),f.push(0,C,0),E.x=U*.5+.5,E.y=q*.5*C+.5,p.push(E.x,E.y),u++}for(let P=0;P<i;P++){const D=b+P,L=I+P;v===!0?h.push(L,L+1,D):h.push(L+1,L,D),M+=3}l.addGroup(g,M,v===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sr extends Kt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new sr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xe extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,f=e/c,p=[],u=[],x=[],m=[];for(let g=0;g<h;g++){const y=g*f-a;for(let w=0;w<l;w++){const v=w*d-r;u.push(v,-y,0),x.push(0,0,1),m.push(w/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<o;y++){const w=y+l*g,v=y+l*(g+1),b=y+1+l*(g+1),E=y+1+l*g;p.push(w,v,E),p.push(v,b,E)}this.setIndex(p),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.widthSegments,t.heightSegments)}}class eo extends Ge{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=t;const f=(e-t)/i,p=new G,u=new Ft;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=r+m/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),u.x=(p.x/e+1)/2,u.y=(p.y/e+1)/2,h.push(u.x,u.y)}d+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const y=g+m,w=y,v=y+n+1,b=y+n+2,E=y+1;o.push(w,v,E),o.push(v,b,E)}}this.setIndex(o),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rr extends Ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new G,f=new G,p=[],u=[],x=[],m=[];for(let g=0;g<=n;g++){const y=[],w=g/n,v=a+w*o,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b);let R=0;g===0&&a===0?R=.5/e:g===n&&c===Math.PI&&(R=-.5/e);for(let M=0;M<=e;M++){const T=M/e,C=i+T*r;d.x=-E*Math.cos(C),d.y=b,d.z=E*Math.sin(C),u.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(T+R,1-w),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const w=h[g][y+1],v=h[g][y],b=h[g+1][y],E=h[g+1][y+1];(g!==0||a>0)&&p.push(w,v,E),(g!==n-1||c<Math.PI)&&p.push(v,b,E)}this.setIndex(p),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class js extends Ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],f=new G,p=new G,u=new G;for(let x=0;x<=n;x++){const m=a+x/n*o;for(let g=0;g<=i;g++){const y=g/i*r;p.x=(t+e*Math.cos(m))*Math.cos(y),p.y=(t+e*Math.cos(m))*Math.sin(y),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),u.subVectors(p,f).normalize(),h.push(u.x,u.y,u.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,y=(i+1)*(x-1)+m-1,w=(i+1)*(x-1)+m,v=(i+1)*x+m;c.push(g,y,v),c.push(y,w,v)}this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Bi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Xo(i))i.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Xo(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Bi(s[e]);for(const i in n)t[i]=n[i]}return t}function Xo(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Yh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const $h={clone:Bi,merge:ze};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Yh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new le().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Jh extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qh extends ki{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xs extends ki{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ks,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jh extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tf extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class no extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ef extends no{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Or=new le,qo=new G,Yo=new G;class ac{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;qo.setFromMatrixPosition(t.matrixWorld),e.position.copy(qo),Yo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yo),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Or.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Or,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fs=new G,Os=new Ye,_n=new G;class oc extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fs,Os,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fs,Os,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new G,$o=new Ft,Ko=new Ft;class Qe extends oc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,$o,Ko),e.subVectors(Ko,$o)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nf extends ac{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class zr extends no{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class io extends oc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sf extends ac{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Br extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ai=-90,Ri=1;class rf extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Ai,Ri,t,e);i.layers=this.layers,this.add(i);const r=new Qe(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const c=new Qe(Ai,Ri,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Ai,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),u=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class af extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const co=class co{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};co.prototype.isMatrix2=!0;let Zo=co;function Jo(s,t,e,n){const i=of(n);switch(e){case ql:return s*t;case qa:return s*t/i.components*i.byteLength;case Ya:return s*t/i.components*i.byteLength;case hi:return s*t*2/i.components*i.byteLength;case $a:return s*t*2/i.components*i.byteLength;case Yl:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case Ka:return s*t*4/i.components*i.byteLength;case Gs:case Hs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ca:case fa:return Math.max(s,16)*Math.max(t,8)/4;case la:case ha:return Math.max(s,8)*Math.max(t,8)/2;case ua:case da:case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pa:case Ys:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case La:case Da:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Na:case Fa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $s:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(s){switch(s){case je:case Hl:return{byteLength:1,components:1};case os:case Vl:case En:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case yn:case Va:case hn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lc(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function lf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((p,u)=>p.start-u.start);let f=0;for(let p=1;p<d.length;p++){const u=d[f],x=d[p];x.start<=u.start+u.count+1?u.count=Math.max(u.count,x.start+x.count-u.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,u=d.length;p<u;p++){const x=d[p];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
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
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eu=`#ifdef USE_ENVMAP
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
#endif`,nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,au=`PhysicalMaterial material;
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
#endif`,ou=`uniform sampler2D dfgLUT;
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
}`,lu=`
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
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
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vu=`#if defined( USE_POINTS_UV )
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
#endif`,Mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
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
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lu=`#ifdef USE_NORMALMAP
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
#endif`,Du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$u=`float getShadowMask() {
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
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,id=`#ifdef USE_TRANSMISSION
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
#endif`,sd=`#ifdef USE_TRANSMISSION
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hd=`uniform sampler2D t2D;
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`#include <common>
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
}`,gd=`#if DEPTH_PACKING == 3200
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
}`,xd=`#define DISTANCE
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
}`,_d=`#define DISTANCE
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
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`uniform float scale;
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
}`,bd=`uniform vec3 diffuse;
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
}`,yd=`#include <common>
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Td=`#define LAMBERT
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
}`,wd=`#define LAMBERT
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
}`,Ad=`#define MATCAP
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
}`,Rd=`#define MATCAP
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
}`,Cd=`#define NORMAL
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
}`,Pd=`#define NORMAL
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
}`,Id=`#define PHONG
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
}`,Ld=`#define PHONG
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
}`,Dd=`#define STANDARD
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
}`,Ud=`#define STANDARD
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
}`,Nd=`#define TOON
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
}`,Fd=`#define TOON
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
}`,Od=`uniform float size;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Bd=`#include <common>
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
}`,kd=`uniform vec3 color;
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
}`,Gd=`uniform float rotation;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:cf,alphahash_pars_fragment:hf,alphamap_fragment:ff,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:xf,batching_vertex:_f,begin_vertex:vf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:bf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Af,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:If,common:Lf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:zf,colorspace_fragment:Bf,colorspace_pars_fragment:kf,envmap_fragment:Gf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:eu,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:$f,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:jf,lights_pars_begin:tu,lights_toon_fragment:nu,lights_toon_pars_fragment:iu,lights_phong_fragment:su,lights_phong_pars_fragment:ru,lights_physical_fragment:au,lights_physical_pars_fragment:ou,lights_fragment_begin:lu,lights_fragment_maps:cu,lights_fragment_end:hu,lightprobes_pars_fragment:fu,logdepthbuf_fragment:uu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:gu,map_pars_fragment:xu,map_particle_fragment:_u,map_particle_pars_fragment:vu,metalnessmap_fragment:Mu,metalnessmap_pars_fragment:Su,morphinstance_vertex:bu,morphcolor_vertex:yu,morphnormal_vertex:Eu,morphtarget_pars_vertex:Tu,morphtarget_vertex:wu,normal_fragment_begin:Au,normal_fragment_maps:Ru,normal_pars_fragment:Cu,normal_pars_vertex:Pu,normal_vertex:Iu,normalmap_pars_fragment:Lu,clearcoat_normal_fragment_begin:Du,clearcoat_normal_fragment_maps:Uu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Fu,opaque_fragment:Ou,packing:zu,premultiplied_alpha_fragment:Bu,project_vertex:ku,dithering_fragment:Gu,dithering_pars_fragment:Hu,roughnessmap_fragment:Vu,roughnessmap_pars_fragment:Wu,shadowmap_pars_fragment:Xu,shadowmap_pars_vertex:qu,shadowmap_vertex:Yu,shadowmask_pars_fragment:$u,skinbase_vertex:Ku,skinning_pars_vertex:Zu,skinning_vertex:Ju,skinnormal_vertex:Qu,specularmap_fragment:ju,specularmap_pars_fragment:td,tonemapping_fragment:ed,tonemapping_pars_fragment:nd,transmission_fragment:id,transmission_pars_fragment:sd,uv_pars_fragment:rd,uv_pars_vertex:ad,uv_vertex:od,worldpos_vertex:ld,background_vert:cd,background_frag:hd,backgroundCube_vert:fd,backgroundCube_frag:ud,cube_vert:dd,cube_frag:pd,depth_vert:md,depth_frag:gd,distance_vert:xd,distance_frag:_d,equirect_vert:vd,equirect_frag:Md,linedashed_vert:Sd,linedashed_frag:bd,meshbasic_vert:yd,meshbasic_frag:Ed,meshlambert_vert:Td,meshlambert_frag:wd,meshmatcap_vert:Ad,meshmatcap_frag:Rd,meshnormal_vert:Cd,meshnormal_frag:Pd,meshphong_vert:Id,meshphong_frag:Ld,meshphysical_vert:Dd,meshphysical_frag:Ud,meshtoon_vert:Nd,meshtoon_frag:Fd,points_vert:Od,points_frag:zd,shadow_vert:Bd,shadow_frag:kd,sprite_vert:Gd,sprite_frag:Hd},mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Sn={basic:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ze([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ze([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ze([mt.points,mt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ze([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ze([mt.common,mt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ze([mt.sprite,mt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:ze([mt.common,mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:ze([mt.lights,mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:ze([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const zs={r:0,b:0,g:0},Vd=new le,cc=new Ot;cc.set(-1,0,0,0,1,0,0,0,1);function Wd(s,t,e,n,i,r){const a=new Gt(0);let o=i===!0?0:1,c,l,h=null,d=0,f=null;function p(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function u(y){let w=!1;const v=p(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,w){const v=p(w);v&&(v.isCubeTexture||v.mapping===ir)?(l===void 0&&(l=new de(new ke(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Bi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vd.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cc),l.material.toneMapped=Xt.getTransfer(v.colorSpace)!==ne,(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new de(new Xe(2,2),new wn({name:"BackgroundMaterial",uniforms:Bi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,w){y.getRGB(zs,rc(s)),e.buffers.color.setClear(zs.r,zs.g,zs.b,w,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:u,addToRenderList:x,dispose:g}}function Xd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(I,P,D,L,U){let q=!1;const k=d(I,L,D,P);r!==k&&(r=k,l(r.object)),q=p(I,L,D,U),q&&u(I,L,D,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(I,P,D,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,P,D,L){const U=L.wireframe===!0;let q=n[P.id];q===void 0&&(q={},n[P.id]=q);const k=I.isInstancedMesh===!0?I.id:0;let J=q[k];J===void 0&&(J={},q[k]=J);let Y=J[D.id];Y===void 0&&(Y={},J[D.id]=Y);let X=Y[U];return X===void 0&&(X=f(c()),Y[U]=X),X}function f(I){const P=[],D=[],L=[];for(let U=0;U<e;U++)P[U]=0,D[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,P,D,L){const U=r.attributes,q=P.attributes;let k=0;const J=D.getAttributes();for(const Y in J)if(J[Y].location>=0){const j=U[Y];let vt=q[Y];if(vt===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(vt=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(vt=I.instanceColor)),j===void 0||j.attribute!==vt||vt&&j.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function u(I,P,D,L){const U={},q=P.attributes;let k=0;const J=D.getAttributes();for(const Y in J)if(J[Y].location>=0){let j=q[Y];j===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const vt={};vt.attribute=j,j&&j.data&&(vt.data=j.data),U[Y]=vt,k++}r.attributes=U,r.attributesNum=k,r.index=L}function x(){const I=r.newAttributes;for(let P=0,D=I.length;P<D;P++)I[P]=0}function m(I){g(I,0)}function g(I,P){const D=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;D[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),U[I]!==P&&(s.vertexAttribDivisor(I,P),U[I]=P)}function y(){const I=r.newAttributes,P=r.enabledAttributes;for(let D=0,L=P.length;D<L;D++)P[D]!==I[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function w(I,P,D,L,U,q,k){k===!0?s.vertexAttribIPointer(I,P,D,U,q):s.vertexAttribPointer(I,P,D,L,U,q)}function v(I,P,D,L){x();const U=L.attributes,q=D.getAttributes(),k=P.defaultAttributeValues;for(const J in q){const Y=q[J];if(Y.location>=0){let X=U[J];if(X===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const j=X.normalized,vt=X.itemSize,bt=t.get(X);if(bt===void 0)continue;const Jt=bt.buffer,O=bt.type,Q=bt.bytesPerElement,N=O===s.INT||O===s.UNSIGNED_INT||X.gpuType===Va;if(X.isInterleavedBufferAttribute){const $=X.data,st=$.stride,lt=X.offset;if($.isInstancedInterleavedBuffer){for(let at=0;at<Y.locationSize;at++)g(Y.location+at,$.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let at=0;at<Y.locationSize;at++)m(Y.location+at);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let at=0;at<Y.locationSize;at++)w(Y.location+at,vt/Y.locationSize,O,j,st*Q,(lt+vt/Y.locationSize*at)*Q,N)}else{if(X.isInstancedBufferAttribute){for(let $=0;$<Y.locationSize;$++)g(Y.location+$,X.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let $=0;$<Y.locationSize;$++)m(Y.location+$);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let $=0;$<Y.locationSize;$++)w(Y.location+$,vt/Y.locationSize,O,j,vt*Q,vt/Y.locationSize*$*Q,N)}}else if(k!==void 0){const j=k[J];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Y.location,j);break;case 3:s.vertexAttrib3fv(Y.location,j);break;case 4:s.vertexAttrib4fv(Y.location,j);break;default:s.vertexAttrib1fv(Y.location,j)}}}}y()}function b(){T();for(const I in n){const P=n[I];for(const D in P){const L=P[D];for(const U in L){const q=L[U];for(const k in q)h(q[k].object),delete q[k];delete L[U]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const P=n[I.id];for(const D in P){const L=P[D];for(const U in L){const q=L[U];for(const k in q)h(q[k].object),delete q[k];delete L[U]}}delete n[I.id]}function R(I){for(const P in n){const D=n[P];for(const L in D){const U=D[L];if(U[I.id]===void 0)continue;const q=U[I.id];for(const k in q)h(q[k].object),delete q[k];delete U[I.id]}}}function M(I){for(const P in n){const D=n[P],L=I.isInstancedMesh===!0?I.id:0,U=D[L];if(U!==void 0){for(const q in U){const k=U[q];for(const J in k)h(k[J].object),delete k[J];delete U[q]}delete D[L],Object.keys(D).length===0&&delete n[P]}}}function T(){C(),a=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function qd(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let p=0;p<h;p++)f+=l[p];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Yd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const M=R===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==je&&R!==hn&&!M&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Nt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:u,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:E}}function $d(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new $n,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const u=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||u===null||u.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,w=y*4;let v=g.clippingState||null;c.value=v,v=h(u,f,w,p);for(let b=0;b!==w;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,u){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,u!==!0||m===null){const g=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=p;w!==x;++w,v+=4)a.copy(d[w]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const Ui=4,Kd=6,Zd=20,Jd=256,Zi=new io,Qo=new Gt;let kr=null,Gr=0,Hr=0,Vr=!1;const Qd=new G,ii=new G;class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qd}=r;kr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Gr,Hr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,Ci(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:En,format:fn,colorSpace:Zs,depthBuffer:!1},i=tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jd(r)),this._blurMaterial=e0(r,t,e),this._ggxMaterial=t0(r,t,e)}return i}_compileMaterial(t){const e=new de(new Ge,t);this._renderer.compile(e,Zi)}_sceneToCubeUV(t,e,n,i,r){const c=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Qo),d.toneMapping=un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new ke,new Je({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,g=!0):(m.color.copy(Qo),g=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const b=this._cubeSize;Ci(i,v*b,w>2?b:0,b,b),d.setRenderTarget(i),g&&d.render(x,c),d.render(t,c)}d.toneMapping=p,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ci||t.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ci(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),f=l*1.25,p=d*f,{_lodMax:u}=this,x=this._sizeLods[n],m=3*x*(n>u-Ui?n-u+Ui:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=u-e,Ci(r,m,g,3*x,2*x),i.setRenderTarget(r),i.render(o,Zi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=u-n,Ci(t,m,g,3*x,2*x),i.setRenderTarget(t),i.render(o,Zi)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-Ui?i-this._lodMax+Ui:0),f=4*(this._cubeSize-h);Ci(e,d,f,3*h,2*h),a.setRenderTarget(e),a.render(c,Zi)}}function jd(s){const t=[],e=[];let n=s;const i=s-Ui+1+Kd;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,p=3,u=new Float32Array(p*f*d),x=new Float32Array(p*f*d);for(let g=0;g<d;g++){const y=g%3*2/3-1,w=g>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];u.set(v,p*f*g);for(let b=0;b<f;b++){const E=h[b*2]*2-1,R=h[b*2+1]*2-1;g===0?ii.set(1,R,E):g===1?ii.set(-E,1,-R):g===2?ii.set(-E,R,1):g===3?ii.set(-1,R,-E):g===4?ii.set(-E,-1,R):ii.set(E,R,-1),ii.toArray(x,(g*f+b)*p)}}const m=new Ge;m.setAttribute("position",new pn(u,p)),m.setAttribute("outputDirection",new pn(x,p)),e.push(new de(m,null)),n>Ui&&n--}return{lodMeshes:e,sizeLods:t}}function tl(s,t,e){const n=new dn(s,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ci(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function t0(s,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ar(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function e0(s,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Zd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ar(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function el(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ar(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function nl(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ar(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hc extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ic(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ke(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Fn});r.uniforms.tEquirect.value=e;const a=new de(i,r),o=e.minFilter;return e.minFilter===ri&&(e.minFilter=Ne),new rf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function n0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===fr||p===ur)if(t.has(f)){const u=t.get(f).texture;return o(u,f.mapping)}else{const u=f.image;if(u&&u.height>0){const x=new hc(u.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,u=p===fr||p===ur,x=p===ci||p===Oi;if(u||x){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new jo(s)),m=u?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return u&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new jo(s)),m=u?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,p){return p===fr?f.mapping=ci:p===ur&&(f.mapping=Oi),f}function c(f){let p=0;const u=6;for(let x=0;x<u;x++)f[x]!==void 0&&p++;return p===u}function l(f){const p=f.target;p.removeEventListener("dispose",l);const u=t.get(p);u!==void 0&&(t.delete(p),u.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const u=e.get(p);u!==void 0&&(e.delete(p),u.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function i0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ni("WebGLRenderer: "+n+" extension not supported."),i}}}function s0(s,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const u in f.attributes)t.remove(f.attributes[u]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,u=d.attributes.position;let x=0;if(u===void 0)return;if(p!==null){const y=p.array;x=p.version;for(let w=0,v=y.length;w<v;w+=3){const b=y[w+0],E=y[w+1],R=y[w+2];f.push(b,E,E,R,R,b)}}else{const y=u.array;x=u.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const b=w+0,E=w+1,R=w+2;f.push(b,E,E,R,R,b)}}const m=new(u.count>=65535?tc:jl)(f,1);m.version=x;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function r0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function a0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(s,t,e){const n=new WeakMap,i=new pe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let C=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var p=C;f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;u===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*E*4*d),M=new Zl(R,b,E,d);M.type=hn,M.needsUpdate=!0;const T=v*4;for(let I=0;I<d;I++){const P=g[I],D=y[I],L=w[I],U=b*E*4*I;for(let q=0;q<P.count;q++){const k=q*T;u===!0&&(i.fromBufferAttribute(P,q),R[U+k+0]=i.x,R[U+k+1]=i.y,R[U+k+2]=i.z,R[U+k+3]=0),x===!0&&(i.fromBufferAttribute(D,q),R[U+k+4]=i.x,R[U+k+5]=i.y,R[U+k+6]=i.z,R[U+k+7]=0),m===!0&&(i.fromBufferAttribute(L,q),R[U+k+8]=i.x,R[U+k+9]=i.y,R[U+k+10]=i.z,R[U+k+11]=L.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new Ft(b,E)},n.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let m=0;m<l.length;m++)u+=l[m];const x=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function l0(s,t,e,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const c0={[Ul]:"LINEAR_TONE_MAPPING",[Nl]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Ol]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[kl]:"NEUTRAL_TONE_MAPPING",[zl]:"CUSTOM_TONE_MAPPING"};function h0(s,t,e,n,i,r){const a=new dn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ge;l.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new me([0,2,0,0,2,0],2));const h=new Jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new de(l,h),f=new io(-1,1,1,-1,0,1);let p=null,u=null,x=!1,m,g=null,y=[],w=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),c!==null&&c.setSize(v,b);for(let E=0;E<y.length;E++){const R=y[E];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;const b=a.width,E=a.height;y.length>0&&o===null&&(o=new dn(b,E,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new dn(b,E,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const M=y[R];M.setSize&&M.setSize(b,E)}},this.begin=function(v,b){if(x||v.toneMapping===un&&y.length===0)return!1;if(g=b,b!==null){const E=b.width,R=b.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=un,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=m,x=!0;let E=a,R=o;for(let M=0;M<y.length;M++){const T=y[M];T.enabled!==!1&&(T.render(v,R,E,b),T.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(p!==v.outputColorSpace||u!==v.toneMapping){p=v.outputColorSpace,u=v.toneMapping,h.defines={},Xt.getTransfer(p)===ne&&(h.defines.SRGB_TRANSFER="");const M=c0[u];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(g),v.render(d,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const fc=new Fe,Ba=new hs(1,1),uc=new Zl,dc=new Ah,pc=new ic,il=[],sl=[],rl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function Hi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=il[i];if(r===void 0&&(r=new Float32Array(i),il[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function or(s,t){let e=sl[t];e===void 0&&(e=new Int32Array(t),sl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function f0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function u0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function d0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function p0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function m0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;ol.set(n),s.uniformMatrix2fv(this.addr,!1,ol),Ee(e,n)}}function g0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;al.set(n),s.uniformMatrix3fv(this.addr,!1,al),Ee(e,n)}}function x0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;rl.set(n),s.uniformMatrix4fv(this.addr,!1,rl),Ee(e,n)}}function _0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function v0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function M0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function S0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function b0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function T0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function w0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ba.compareFunction=e.isReversedDepthBuffer()?Ja:Za,r=Ba):r=fc,e.setTexture2D(t||r,i)}function A0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dc,i)}function R0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pc,i)}function C0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uc,i)}function P0(s){switch(s){case 5126:return f0;case 35664:return u0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return y0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(s,t){s.uniform1fv(this.addr,t)}function L0(s,t){const e=Hi(t,this.size,2);s.uniform2fv(this.addr,e)}function D0(s,t){const e=Hi(t,this.size,3);s.uniform3fv(this.addr,e)}function U0(s,t){const e=Hi(t,this.size,4);s.uniform4fv(this.addr,e)}function N0(s,t){const e=Hi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function F0(s,t){const e=Hi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function O0(s,t){const e=Hi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function z0(s,t){s.uniform1iv(this.addr,t)}function B0(s,t){s.uniform2iv(this.addr,t)}function k0(s,t){s.uniform3iv(this.addr,t)}function G0(s,t){s.uniform4iv(this.addr,t)}function H0(s,t){s.uniform1uiv(this.addr,t)}function V0(s,t){s.uniform2uiv(this.addr,t)}function W0(s,t){s.uniform3uiv(this.addr,t)}function X0(s,t){s.uniform4uiv(this.addr,t)}function q0(s,t,e){const n=this.cache,i=t.length,r=or(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ba:a=fc;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Y0(s,t,e){const n=this.cache,i=t.length,r=or(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dc,r[a])}function $0(s,t,e){const n=this.cache,i=t.length,r=or(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||pc,r[a])}function K0(s,t,e){const n=this.cache,i=t.length,r=or(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||uc,r[a])}function Z0(s){switch(s){case 5126:return I0;case 35664:return L0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return K0}}class J0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class Q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function ll(s,t){s.seq.push(t),s.map[t.id]=t}function tp(s,t,e){const n=s.name,i=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),a=Wr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ll(e,l===void 0?new J0(o,s,t):new Q0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new j0(o),ll(e,d)),e=d}}}class qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);tp(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function cl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ep=37297;let np=0;function ip(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hl=new Ot;function sp(s){Xt._getMatrix(hl,Xt.workingColorSpace,s);const t=`mat3( ${hl.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case Js:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function fl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ip(s.getShaderSource(t),o)}else return r}function rp(s,t){const e=sp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ap={[Ul]:"Linear",[Nl]:"Reinhard",[Fl]:"Cineon",[Ol]:"ACESFilmic",[Bl]:"AgX",[kl]:"Neutral",[zl]:"Custom"};function op(s,t){const e=ap[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bs=new G;function lp(){Xt.getLuminanceCoefficients(Bs);const s=Bs.x.toFixed(4),t=Bs.y.toFixed(4),e=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function hp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ss(s){return s!==""}function ul(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(s){return s.replace(up,pp)}const dp=new Map;function pp(s,t){let e=kt[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=kt[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ka(e)}const mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(s){return s.replace(mp,gp)}function gp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ml(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const xp={[ks]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function _p(s){return xp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vp={[ci]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function Mp(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vp[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sp={[Oi]:"ENVMAP_MODE_REFRACTION"};function bp(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yp={[nr]:"ENVMAP_BLENDING_MULTIPLY",[sh]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function Ep(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":yp[s.combine]||"ENVMAP_BLENDING_NONE"}function Tp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=_p(e),l=Mp(e),h=bp(e),d=Ep(e),f=Tp(e),p=cp(e),u=hp(r),x=i.createProgram();let m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ss).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ss).join(`
`),g.length>0&&(g+=`
`)):(m=[ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),g=[ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?kt.tonemapping_pars_fragment:"",e.toneMapping!==un?op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,rp("linearToOutputTexel",e.outputColorSpace),lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=ka(a),a=ul(a,e),a=dl(a,e),o=ka(o),o=ul(o,e),o=dl(o,e),a=pl(a),o=pl(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=y+m+a,v=y+g+o,b=cl(i,i.VERTEX_SHADER,w),E=cl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,b),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(b)||"",L=i.getShaderInfoLog(E)||"",U=P.trim(),q=D.trim(),k=L.trim();let J=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,E);else{const X=fl(i,b,"vertex"),j=fl(i,E,"fragment");Zt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+X+`
`+j)}else U!==""?Nt("WebGLProgram: Program Info Log:",U):(q===""||k==="")&&(Y=!1);Y&&(I.diagnostics={runnable:J,programLog:U,vertexShader:{log:q,prefix:m},fragmentShader:{log:k,prefix:g}})}i.deleteShader(b),i.deleteShader(E),M=new qs(i,x),T=fp(i,x)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,ep)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let Ap=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cp(t),e.set(t,n)),n}}class Cp{constructor(t){this.id=Ap++,this.code=t,this.usedTimes=0}}function Pp(s){return s===hi||s===Ys||s===$s}function Ip(s,t,e,n,i,r){const a=new Jl,o=new Rp,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,T,C,I,P,D){const L=I.fog,U=P.geometry,q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,J=t.get(M.envMap||q,k),Y=J&&J.mapping===ir?J.image.height:null,X=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Nt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,vt=j!==void 0?j.length:0;let bt=0;U.morphAttributes.position!==void 0&&(bt=1),U.morphAttributes.normal!==void 0&&(bt=2),U.morphAttributes.color!==void 0&&(bt=3);let Jt,O,Q,N;if(X){const re=Sn[X];Jt=re.vertexShader,O=re.fragmentShader}else{Jt=M.vertexShader,O=M.fragmentShader;const re=o.getVertexShaderStage(M),Qt=o.getFragmentShaderStage(M);o.update(M,re,Qt),Q=re.id,N=Qt.id}const $=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),lt=P.isInstancedMesh===!0,at=P.isBatchedMesh===!0,Tt=!!M.map,Dt=!!M.matcap,Ut=!!J,Vt=!!M.aoMap,$t=!!M.lightMap,Wt=!!M.bumpMap&&M.wireframe===!1,he=!!M.normalMap,Te=!!M.displacementMap,He=!!M.emissiveMap,ue=!!M.metalnessMap,xe=!!M.roughnessMap,B=M.anisotropy>0,Ie=M.clearcoat>0,ee=M.dispersion>0,A=M.retroreflectivity>0,_=M.iridescence>0,H=M.sheen>0,K=M.transmission>0,tt=B&&!!M.anisotropyMap,ot=Ie&&!!M.clearcoatMap,ct=Ie&&!!M.clearcoatNormalMap,et=Ie&&!!M.clearcoatRoughnessMap,it=_&&!!M.iridescenceMap,ht=_&&!!M.iridescenceThicknessMap,Rt=H&&!!M.sheenColorMap,pt=H&&!!M.sheenRoughnessMap,ft=!!M.specularMap,Ct=!!M.specularColorMap,Lt=!!M.specularIntensityMap,zt=K&&!!M.transmissionMap,z=K&&!!M.thicknessMap,ut=!!M.gradientMap,nt=!!M.alphaMap,dt=M.alphaTest>0,_t=!!M.alphaHash,rt=!!M.extensions;let Pt=un;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Pt=s.toneMapping);const wt={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Jt,fragmentShader:O,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:at,batchingColor:at&&P._colorsTexture!==null,instancing:lt,instancingColor:lt&&P.instanceColor!==null,instancingMorph:lt&&P.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:Dt,envMap:Ut,envMapMode:Ut&&J.mapping,envMapCubeUVHeight:Y,aoMap:Vt,lightMap:$t,bumpMap:Wt,normalMap:he,displacementMap:Te,emissiveMap:He,normalMapObjectSpace:he&&M.normalMapType===lh,normalMapTangentSpace:he&&M.normalMapType===Ks,packedNormalMap:he&&M.normalMapType===Ks&&Pp(M.normalMap.format),metalnessMap:ue,roughnessMap:xe,anisotropy:B,anisotropyMap:tt,clearcoat:Ie,clearcoatMap:ot,clearcoatNormalMap:ct,clearcoatRoughnessMap:et,dispersion:ee,retroreflection:A,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:H,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:Ct,specularIntensityMap:Lt,transmission:K,transmissionMap:zt,thicknessMap:z,gradientMap:ut,opaque:M.transparent===!1&&M.blending===rs&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:dt,alphaHash:_t,combine:M.combine,mapUv:Tt&&u(M.map.channel),aoMapUv:Vt&&u(M.aoMap.channel),lightMapUv:$t&&u(M.lightMap.channel),bumpMapUv:Wt&&u(M.bumpMap.channel),normalMapUv:he&&u(M.normalMap.channel),displacementMapUv:Te&&u(M.displacementMap.channel),emissiveMapUv:He&&u(M.emissiveMap.channel),metalnessMapUv:ue&&u(M.metalnessMap.channel),roughnessMapUv:xe&&u(M.roughnessMap.channel),anisotropyMapUv:tt&&u(M.anisotropyMap.channel),clearcoatMapUv:ot&&u(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&u(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&u(M.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&u(M.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&u(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&u(M.sheenColorMap.channel),sheenRoughnessMapUv:pt&&u(M.sheenRoughnessMap.channel),specularMapUv:ft&&u(M.specularMap.channel),specularColorMapUv:Ct&&u(M.specularColorMap.channel),specularIntensityMapUv:Lt&&u(M.specularIntensityMap.channel),transmissionMapUv:zt&&u(M.transmissionMap.channel),thicknessMapUv:z&&u(M.thicknessMap.channel),alphaMapUv:nt&&u(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(he||B),vertexNormals:!!U.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Tt||nt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||U.attributes.normal===void 0&&he===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:st,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&Xt.getTransfer(M.map.colorSpace)===ne,decodeVideoTextureEmissive:He&&M.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(M.emissiveMap.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:rt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&M.extensions.multiDraw===!0||at)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function m(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)T.push(C),T.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(g(T,M),y(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function w(M){const T=p[M.type];let C;if(T){const I=Sn[T];C=$h.clone(I.uniforms)}else C=M.uniforms;return C}function v(M,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new wp(s,T,M,i),l.push(C),h.set(T,C)),C}function b(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function E(M){o.remove(M)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:R}}function Lp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Dp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function gl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,u,x,m,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:p,material:u,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=u,y.materialVariant=a(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function c(f,p,u,x,m,g,y){y.reversedDepth===!0&&(m=-m);const w=o(f,p,u,x,m,g);u.transmission>0?n.push(w):u.transparent===!0?i.push(w):e.push(w)}function l(f,p,u,x,m,g){const y=o(f,p,u,x,m,g);u.transmission>0?n.unshift(y):u.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,p){e.length>1&&e.sort(f||Dp),n.length>1&&n.sort(p||gl),i.length>1&&i.sort(p||gl)}function d(){for(let f=t,p=s.length;f<p;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function Up(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new xl,s.set(n,[a])):i>=r.length?(a=new xl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Np(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Gt};break;case"SpotLight":e={position:new G,direction:new G,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function Fp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Op=0;function zp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Bp(s){const t=new Np,e=Fp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const i=new G,r=new le,a=new le;function o(l){let h=0,d=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,u=0,x=0,m=0,g=0,y=0,w=0,v=0,b=0,E=0,R=0,M=0,T=0,C=0;l.sort(zp);for(let P=0,D=l.length;P<D;P++){const L=l[P],U=L.color,q=L.intensity,k=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hi?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=U.r*q,d+=U.g*q,f+=U.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);C++}else if(L.isSunLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,j=e.get(L);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[u]=j,n.sunShadowMap[u]=J;const vt=X.getViewportCount();for(let bt=0;bt<vt;bt++)n.sunShadowMatrix[x+bt]=X.getMatrix(bt),n.sunShadowCascade[x+bt]=X._cascadeData[bt];x+=vt,u++}n.sun[p]=Y,p++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,j=e.get(L);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(q),Y.distance=k,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[y]=Y;const X=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,X.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[y]=X.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=J,R++}y++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(U).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Y,w++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const X=L.shadow,j=e.get(L);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[v]=Y,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==u||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==M||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=u,n.sunShadowMap.length=u,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=p,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=u,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=M,I.numLightProbes=C,n.version=Op++)}function c(l,h){let d=0,f=0,p=0,u=0,x=0,m=0;const g=h.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){const v=l[y];if(v.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(v.isSpotLight){const b=n.spot[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(v.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),p++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function _l(s){const t=new Bp(s),e=[],n=[],i=[];function r(f){d.camera=f,e.length=0,n.length=0,i.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){i.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function kp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new _l(s),t.set(i,[o])):r>=a.length?(o=new _l(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hp=`uniform sampler2D shadow_pass;
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
}`,Vp=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Wp=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],vl=new le,Ji=new G,Xr=new G;function Xp(s,t,e){let n=new to;const i=new Ft,r=new Ft,a=new pe,o=new jh,c=new tf,l={},h=e.maxTextureSize,d={[li]:qe,[qe]:li,[We]:We},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Gp,fragmentShader:Hp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const u=new Ge;u.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new de(u,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let g=this.type;this.render=function(E,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Bc&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);const T=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Fn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=g!==this.type;D&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=E.length;L<U;L++){const q=E[L],k=q.shadow;if(k===void 0){Nt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const J=k.getFrameExtents();i.multiply(J),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,k.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===is){if(q.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new dn(i.x,i.y,{format:hi,type:En,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new hs(i.x,i.y,hn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=Bn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=fe,k.map.depthTexture.magFilter=fe}else q.isPointLight?(k.map=new hc(i.x),k.map.depthTexture=new qh(i.x,yn)):(k.map=new dn(i.x,i.y),k.map.depthTexture=new hs(i.x,i.y,yn)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=Bn,this.type===ks?(k.map.depthTexture.compareFunction=Y?Ja:Za,k.map.depthTexture.minFilter=Ne,k.map.depthTexture.magFilter=Ne):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=fe,k.map.depthTexture.magFilter=fe);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const X=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,M);for(let j=0;j<X;j++){const vt=k.getCamera(j);if(q.isPointLight){const bt=k.camera,Jt=k.matrix,O=q.distance||bt.far;O!==bt.far&&(bt.far=O,bt.updateProjectionMatrix()),Ji.setFromMatrixPosition(q.matrixWorld),bt.position.copy(Ji),Xr.copy(bt.position),Xr.add(Vp[j]),bt.up.copy(Wp[j]),bt.lookAt(Xr),bt.updateMatrixWorld(),Jt.makeTranslation(-Ji.x,-Ji.y,-Ji.z),vl.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(vl,bt.coordinateSystem,bt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,j),s.clear();else{j===0&&(s.setRenderTarget(k.map),s.clear());const bt=k.getViewport(j);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),P.viewport(a)}n=k.getFrustum(j),v(R,M,vt,q,this.type)}k.isPointLightShadow!==!0&&this.type===is&&y(k,M),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,C,I)};function y(E,R){const M=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new dn(i.x,i.y,{format:hi,type:En}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,M,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,M,p,x,null)}function w(E,R,M,T){let C=null;const I=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=M.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=C.uuid,D=R.uuid;let L=l[P];L===void 0&&(L={},l[P]=L);let U=L[D];U===void 0&&(U=C.clone(),L[D]=U,R.addEventListener("dispose",b)),C=U}if(C.visible=R.visible,C.wireframe=R.wireframe,T===is?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const P=s.properties.get(C);P.light=M}return C}function v(E,R,M,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===is)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const D=t.update(E),L=E.material;if(Array.isArray(L)){const U=D.groups;for(let q=0,k=U.length;q<k;q++){const J=U[q],Y=L[J.materialIndex];if(Y&&Y.visible){const X=w(E,Y,T,C);E.onBeforeShadow(s,E,R,M,D,X,J),s.renderBufferDirect(M,null,D,X,E,J),E.onAfterShadow(s,E,R,M,D,X,J)}}}else if(L.visible){const U=w(E,L,T,C);E.onBeforeShadow(s,E,R,M,D,U,null),s.renderBufferDirect(M,null,D,U,E,null),E.onAfterShadow(s,E,R,M,D,U,null)}}const P=E.children;for(let D=0,L=P.length;D<L;D++)v(P[D],R,M,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(const M in l){const T=l[M],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function qp(s,t){function e(){let z=!1;const ut=new pe;let nt=null;const dt=new pe(0,0,0,0);return{setMask:function(_t){nt!==_t&&!z&&(s.colorMask(_t,_t,_t,_t),nt=_t)},setLocked:function(_t){z=_t},setClear:function(_t,rt,Pt,wt,re){re===!0&&(_t*=wt,rt*=wt,Pt*=wt),ut.set(_t,rt,Pt,wt),dt.equals(ut)===!1&&(s.clearColor(_t,rt,Pt,wt),dt.copy(ut))},reset:function(){z=!1,nt=null,dt.set(-1,0,0,0)}}}function n(){let z=!1,ut=!1,nt=null,dt=null,_t=null;return{setReversed:function(rt){if(ut!==rt){const Pt=t.get("EXT_clip_control");rt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ut=rt;const wt=_t;_t=null,this.setClear(wt)}},getReversed:function(){return ut},setTest:function(rt){rt?$(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!z&&(s.depthMask(rt),nt=rt)},setFunc:function(rt){if(ut&&(rt=Mh[rt]),dt!==rt){switch(rt){case ta:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case na:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case sa:s.depthFunc(s.GEQUAL);break;case ra:s.depthFunc(s.GREATER);break;case aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=rt}},setLocked:function(rt){z=rt},setClear:function(rt){_t!==rt&&(_t=rt,ut&&(rt=1-rt),s.clearDepth(rt))},reset:function(){z=!1,nt=null,dt=null,_t=null,ut=!1}}}function i(){let z=!1,ut=null,nt=null,dt=null,_t=null,rt=null,Pt=null,wt=null,re=null;return{setTest:function(Qt){z||(Qt?$(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!z&&(s.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,sn,gn){(nt!==Qt||dt!==sn||_t!==gn)&&(s.stencilFunc(Qt,sn,gn),nt=Qt,dt=sn,_t=gn)},setOp:function(Qt,sn,gn){(rt!==Qt||Pt!==sn||wt!==gn)&&(s.stencilOp(Qt,sn,gn),rt=Qt,Pt=sn,wt=gn)},setLocked:function(Qt){z=Qt},setClear:function(Qt){re!==Qt&&(s.clearStencil(Qt),re=Qt)},reset:function(){z=!1,ut=null,nt=null,dt=null,_t=null,rt=null,Pt=null,wt=null,re=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},f={},p=new WeakMap,u=[],x=null,m=!1,g=null,y=null,w=null,v=null,b=null,E=null,R=null,M=new Gt(0,0,0),T=0,C=!1,I=null,P=null,D=null,L=null,U=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=J>=2);let X=null,j={};const vt=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Jt=new pe().fromArray(vt),O=new pe().fromArray(bt);function Q(z,ut,nt,dt){const _t=new Uint8Array(4),rt=s.createTexture();s.bindTexture(z,rt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<nt;Pt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ut+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return rt}const N={};N[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(s.DEPTH_TEST),a.setFunc(as),Wt(!1),he(So),$(s.CULL_FACE),Vt(Fn);function $(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function st(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function lt(z,ut){return f[z]!==ut?(s.bindFramebuffer(z,ut),f[z]=ut,z===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ut),z===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function at(z,ut){let nt=u,dt=!1;if(z){nt=p.get(ut),nt===void 0&&(nt=[],p.set(ut,nt));const _t=z.textures;if(nt.length!==_t.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Pt=_t.length;rt<Pt;rt++)nt[rt]=s.COLOR_ATTACHMENT0+rt;nt.length=_t.length,dt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,dt=!0);dt&&s.drawBuffers(nt)}function Tt(z){return x!==z?(s.useProgram(z),x=z,!0):!1}const Dt={[Li]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};Dt[Vc]=s.MIN,Dt[Wc]=s.MAX;const Ut={[Xc]:s.ZERO,[qc]:s.ONE,[Yc]:s.SRC_COLOR,[Ll]:s.SRC_ALPHA,[jc]:s.SRC_ALPHA_SATURATE,[Jc]:s.DST_COLOR,[Kc]:s.DST_ALPHA,[$c]:s.ONE_MINUS_SRC_COLOR,[Dl]:s.ONE_MINUS_SRC_ALPHA,[Qc]:s.ONE_MINUS_DST_COLOR,[Zc]:s.ONE_MINUS_DST_ALPHA,[th]:s.CONSTANT_COLOR,[eh]:s.ONE_MINUS_CONSTANT_COLOR,[nh]:s.CONSTANT_ALPHA,[ih]:s.ONE_MINUS_CONSTANT_ALPHA};function Vt(z,ut,nt,dt,_t,rt,Pt,wt,re,Qt){if(z===Fn){m===!0&&(st(s.BLEND),m=!1);return}if(m===!1&&($(s.BLEND),m=!0),z!==kc){if(z!==g||Qt!==C){if((y!==Li||b!==Li)&&(s.blendEquation(s.FUNC_ADD),y=Li,b=Li),Qt)switch(z){case rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bo:s.blendFunc(s.ONE,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Zt("WebGLState: Invalid blending: ",z);break}else switch(z){case rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yo:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eo:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",z);break}w=null,v=null,E=null,R=null,M.set(0,0,0),T=0,g=z,C=Qt}return}_t=_t||ut,rt=rt||nt,Pt=Pt||dt,(ut!==y||_t!==b)&&(s.blendEquationSeparate(Dt[ut],Dt[_t]),y=ut,b=_t),(nt!==w||dt!==v||rt!==E||Pt!==R)&&(s.blendFuncSeparate(Ut[nt],Ut[dt],Ut[rt],Ut[Pt]),w=nt,v=dt,E=rt,R=Pt),(wt.equals(M)===!1||re!==T)&&(s.blendColor(wt.r,wt.g,wt.b,re),M.copy(wt),T=re),g=z,C=!1}function $t(z,ut){z.side===We?st(s.CULL_FACE):$(s.CULL_FACE);let nt=z.side===qe;ut&&(nt=!nt),Wt(nt),z.blending===rs&&z.transparent===!1?Vt(Fn):Vt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const dt=z.stencilWrite;o.setTest(dt),dt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),He(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(z){I!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),I=z)}function he(z){z!==Oc?($(s.CULL_FACE),z!==P&&(z===So?s.cullFace(s.BACK):z===zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),P=z}function Te(z){z!==D&&(k&&s.lineWidth(z),D=z)}function He(z,ut,nt){z?($(s.POLYGON_OFFSET_FILL),(L!==ut||U!==nt)&&(L=ut,U=nt,a.getReversed()&&(ut=-ut),s.polygonOffset(ut,nt))):st(s.POLYGON_OFFSET_FILL)}function ue(z){z?$(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function xe(z){z===void 0&&(z=s.TEXTURE0+q-1),X!==z&&(s.activeTexture(z),X=z)}function B(z,ut,nt){nt===void 0&&(X===null?nt=s.TEXTURE0+q-1:nt=X);let dt=j[nt];dt===void 0&&(dt={type:void 0,texture:void 0},j[nt]=dt),(dt.type!==z||dt.texture!==ut)&&(X!==nt&&(s.activeTexture(nt),X=nt),s.bindTexture(z,ut||N[z]),dt.type=z,dt.texture=ut)}function Ie(){const z=j[X];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(z){Zt("WebGLState:",z)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(z){Zt("WebGLState:",z)}}function _(){try{s.texSubImage2D(...arguments)}catch(z){Zt("WebGLState:",z)}}function H(){try{s.texSubImage3D(...arguments)}catch(z){Zt("WebGLState:",z)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Zt("WebGLState:",z)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Zt("WebGLState:",z)}}function ot(){try{s.texStorage2D(...arguments)}catch(z){Zt("WebGLState:",z)}}function ct(){try{s.texStorage3D(...arguments)}catch(z){Zt("WebGLState:",z)}}function et(){try{s.texImage2D(...arguments)}catch(z){Zt("WebGLState:",z)}}function it(){try{s.texImage3D(...arguments)}catch(z){Zt("WebGLState:",z)}}function ht(z){return d[z]!==void 0?d[z]:s.getParameter(z)}function Rt(z,ut){d[z]!==ut&&(s.pixelStorei(z,ut),d[z]=ut)}function pt(z){Jt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Jt.copy(z))}function ft(z){O.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),O.copy(z))}function Ct(z,ut){let nt=l.get(ut);nt===void 0&&(nt=new WeakMap,l.set(ut,nt));let dt=nt.get(z);dt===void 0&&(dt=s.getUniformBlockIndex(ut,z.name),nt.set(z,dt))}function Lt(z,ut){const dt=l.get(ut).get(z);c.get(ut)!==dt&&(s.uniformBlockBinding(ut,dt,z.__bindingPointIndex),c.set(ut,dt))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,j={},f={},p=new WeakMap,u=[],x=null,m=!1,g=null,y=null,w=null,v=null,b=null,E=null,R=null,M=new Gt(0,0,0),T=0,C=!1,I=null,P=null,D=null,L=null,U=null,Jt.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:st,bindFramebuffer:lt,drawBuffers:at,useProgram:Tt,setBlending:Vt,setMaterial:$t,setFlipSided:Wt,setCullFace:he,setLineWidth:Te,setPolygonOffset:He,setScissorTest:ue,activeTexture:xe,bindTexture:B,unbindTexture:Ie,compressedTexImage2D:ee,compressedTexImage3D:A,texImage2D:et,texImage3D:it,pixelStorei:Rt,getParameter:ht,updateUBOMapping:Ct,uniformBlockBinding:Lt,texStorage2D:ot,texStorage3D:ct,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:pt,viewport:ft,reset:zt}}function Yp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,h=new WeakMap,d=new Set;let f;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return u?new OffscreenCanvas(A,_):Qs("canvas")}function m(A,_,H){let K=1;const tt=ee(A);if((tt.width>H||tt.height>H)&&(K=H/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ot=Math.floor(K*tt.width),ct=Math.floor(K*tt.height);f===void 0&&(f=x(ot,ct));const et=_?x(ot,ct):f;return et.width=ot,et.height=ct,et.getContext("2d").drawImage(A,0,0,ot,ct),Nt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+ct+")."),et}else return"data"in A&&Nt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function g(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,_,H,K,tt,ot=!1){if(A!==null){if(s[A]!==void 0)return s[A];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;K&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=_;if(_===s.RED&&(H===s.FLOAT&&(et=s.R32F),H===s.HALF_FLOAT&&(et=s.R16F),H===s.UNSIGNED_BYTE&&(et=s.R8),H===s.UNSIGNED_SHORT&&ct&&(et=ct.R16_EXT),H===s.SHORT&&ct&&(et=ct.R16_SNORM_EXT)),_===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.R8UI),H===s.UNSIGNED_SHORT&&(et=s.R16UI),H===s.UNSIGNED_INT&&(et=s.R32UI),H===s.BYTE&&(et=s.R8I),H===s.SHORT&&(et=s.R16I),H===s.INT&&(et=s.R32I)),_===s.RG&&(H===s.FLOAT&&(et=s.RG32F),H===s.HALF_FLOAT&&(et=s.RG16F),H===s.UNSIGNED_BYTE&&(et=s.RG8),H===s.UNSIGNED_SHORT&&ct&&(et=ct.RG16_EXT),H===s.SHORT&&ct&&(et=ct.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.RG8UI),H===s.UNSIGNED_SHORT&&(et=s.RG16UI),H===s.UNSIGNED_INT&&(et=s.RG32UI),H===s.BYTE&&(et=s.RG8I),H===s.SHORT&&(et=s.RG16I),H===s.INT&&(et=s.RG32I)),_===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.RGB8UI),H===s.UNSIGNED_SHORT&&(et=s.RGB16UI),H===s.UNSIGNED_INT&&(et=s.RGB32UI),H===s.BYTE&&(et=s.RGB8I),H===s.SHORT&&(et=s.RGB16I),H===s.INT&&(et=s.RGB32I)),_===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),H===s.UNSIGNED_INT&&(et=s.RGBA32UI),H===s.BYTE&&(et=s.RGBA8I),H===s.SHORT&&(et=s.RGBA16I),H===s.INT&&(et=s.RGBA32I)),_===s.RGB&&(H===s.UNSIGNED_SHORT&&ct&&(et=ct.RGB16_EXT),H===s.SHORT&&ct&&(et=ct.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),_===s.RGBA){const it=ot?Js:Xt.getTransfer(tt);H===s.FLOAT&&(et=s.RGBA32F),H===s.HALF_FLOAT&&(et=s.RGBA16F),H===s.UNSIGNED_BYTE&&(et=it===ne?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&ct&&(et=ct.RGBA16_EXT),H===s.SHORT&&ct&&(et=ct.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(A,_){let H;return A?_===null||_===yn||_===ls?H=s.DEPTH24_STENCIL8:_===hn?H=s.DEPTH32F_STENCIL8:_===os&&(H=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yn||_===ls?H=s.DEPTH_COMPONENT24:_===hn?H=s.DEPTH_COMPONENT32F:_===os&&(H=s.DEPTH_COMPONENT16),H}function E(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==fe&&A.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function M(A){const _=A.target;_.removeEventListener("dispose",M),I(_)}function T(A){const _=n.get(A);if(_.__webglInit===void 0)return;const H=A.source,K=p.get(H);if(K){const tt=K[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&C(A),Object.keys(K).length===0&&p.delete(H)}n.remove(A)}function C(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const H=A.source,K=p.get(H);delete K[_.__cacheKey],a.memory.textures--}function I(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let tt=0;tt<_.__webglFramebuffer[K].length;tt++)s.deleteFramebuffer(_.__webglFramebuffer[K][tt]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=A.textures;for(let K=0,tt=H.length;K<tt;K++){const ot=n.get(H[K]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(A)}let P=0;function D(){P=0}function L(){return P}function U(A){P=A}function q(){const A=P;return A>=i.maxTextures&&Nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function k(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function J(A,_){const H=n.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const K=A.image;if(K===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(H,A,_);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+_)}function Y(A,_){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){st(H,A,_);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+_)}function X(A,_){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){st(H,A,_);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+_)}function j(A,_){const H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){lt(H,A,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+_)}const vt={[zi]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[oa]:s.MIRRORED_REPEAT},bt={[fe]:s.NEAREST,[ah]:s.NEAREST_MIPMAP_NEAREST,[xs]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[dr]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},Jt={[hh]:s.NEVER,[mh]:s.ALWAYS,[fh]:s.LESS,[Za]:s.LEQUAL,[uh]:s.EQUAL,[Ja]:s.GEQUAL,[dh]:s.GREATER,[ph]:s.NOTEQUAL};function O(A,_){if(_.type===hn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===dr||_.magFilter===xs||_.magFilter===ri||_.minFilter===Ne||_.minFilter===dr||_.minFilter===xs||_.minFilter===ri)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,vt[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,vt[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,vt[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,bt[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,bt[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fe||_.minFilter!==xs&&_.minFilter!==ri||_.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Q(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const K=_.source;let tt=p.get(K);tt===void 0&&(tt={},p.set(K,tt));const ot=k(_);if(ot!==A.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[ot].usedTimes++;const ct=tt[A.__cacheKey];ct!==void 0&&(tt[A.__cacheKey].usedTimes--,ct.usedTimes===0&&C(_)),A.__cacheKey=ot,A.__webglTexture=tt[ot].texture}return H}function N(A,_,H){return Math.floor(Math.floor(A/H)/_)}function $(A,_,H,K){const ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,H,K,_.data);else{ot.sort((Rt,pt)=>Rt.start-pt.start);let ct=0;for(let Rt=1;Rt<ot.length;Rt++){const pt=ot[ct],ft=ot[Rt],Ct=pt.start+pt.count,Lt=N(ft.start,_.width,4),zt=N(pt.start,_.width,4);ft.start<=Ct+1&&Lt===zt&&N(ft.start+ft.count-1,_.width,4)===Lt?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++ct,ot[ct]=ft)}ot.length=ct+1;const et=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),ht=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,pt=ot.length;Rt<pt;Rt++){const ft=ot[Rt],Ct=Math.floor(ft.start/4),Lt=Math.ceil(ft.count/4),zt=Ct%_.width,z=Math.floor(Ct/_.width),ut=Lt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,zt,z,ut,nt,H,K,_.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,et),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht)}}function st(A,_,H){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const tt=Q(A,_),ot=_.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+H);const ct=n.get(ot);if(ot.version!==ct.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const nt=Xt.getPrimaries(Xt.workingColorSpace),dt=_.colorSpace===Kn?null:Xt.getPrimaries(_.colorSpace),_t=_.colorSpace===Kn||nt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let it=m(_.image,!1,i.maxTextureSize);it=Ie(_,it);const ht=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type);let pt=v(_.internalFormat,ht,Rt,_.normalized,_.colorSpace,_.isVideoTexture);O(K,_);let ft;const Ct=_.mipmaps,Lt=_.isVideoTexture!==!0,zt=ct.__version===void 0||tt===!0,z=ot.dataReady,ut=E(_,it);if(_.isDepthTexture)pt=b(_.format===ai,_.type),zt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,pt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,pt,it.width,it.height,0,ht,Rt,null));else if(_.isDataTexture)if(Ct.length>0){Lt&&zt&&e.texStorage2D(s.TEXTURE_2D,ut,pt,Ct[0].width,Ct[0].height);for(let nt=0,dt=Ct.length;nt<dt;nt++)ft=Ct[nt],Lt?z&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ft.width,ft.height,ht,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,nt,pt,ft.width,ft.height,0,ht,Rt,ft.data);_.generateMipmaps=!1}else Lt?(zt&&e.texStorage2D(s.TEXTURE_2D,ut,pt,it.width,it.height),z&&$(_,it,ht,Rt)):e.texImage2D(s.TEXTURE_2D,0,pt,it.width,it.height,0,ht,Rt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,pt,Ct[0].width,Ct[0].height,it.depth);for(let nt=0,dt=Ct.length;nt<dt;nt++)if(ft=Ct[nt],_.format!==fn)if(ht!==null)if(Lt){if(z)if(_.layerUpdates.size>0){const _t=Jo(ft.width,ft.height,_.format,_.type);for(const rt of _.layerUpdates){const Pt=ft.data.subarray(rt*_t/ft.data.BYTES_PER_ELEMENT,(rt+1)*_t/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,rt,ft.width,ft.height,1,ht,Pt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,it.depth,ht,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,pt,ft.width,ft.height,it.depth,0,ft.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,it.depth,ht,Rt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,pt,ft.width,ft.height,it.depth,0,ht,Rt,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Lt&&zt&&e.texStorage2D(s.TEXTURE_2D,ut,pt,Ct[0].width,Ct[0].height);for(let nt=0,dt=Ct.length;nt<dt;nt++)ft=Ct[nt],_.format!==fn?ht!==null?Lt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,pt,ft.width,ft.height,0,ft.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?z&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ft.width,ft.height,ht,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,nt,pt,ft.width,ft.height,0,ht,Rt,ft.data)}else if(_.isDataArrayTexture)if(Lt){if(zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,pt,it.width,it.height,it.depth),z)if(_.layerUpdates.size>0){const nt=Jo(it.width,it.height,_.format,_.type);for(const dt of _.layerUpdates){const _t=it.data.subarray(dt*nt/it.data.BYTES_PER_ELEMENT,(dt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,it.width,it.height,1,ht,Rt,_t)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,Rt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,pt,it.width,it.height,it.depth,0,ht,Rt,it.data);else if(_.isData3DTexture)Lt?(zt&&e.texStorage3D(s.TEXTURE_3D,ut,pt,it.width,it.height,it.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,Rt,it.data)):e.texImage3D(s.TEXTURE_3D,0,pt,it.width,it.height,it.depth,0,ht,Rt,it.data);else if(_.isFramebufferTexture){if(zt)if(Lt)e.texStorage2D(s.TEXTURE_2D,ut,pt,it.width,it.height);else{let nt=it.width,dt=it.height;for(let _t=0;_t<ut;_t++)e.texImage2D(s.TEXTURE_2D,_t,pt,nt,dt,0,ht,Rt,null),nt>>=1,dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),d.add(_),nt.onpaint=dt=>{const _t=dt.changedElements;for(const rt of d)_t.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{const _t=s.RGBA,rt=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,rt,Pt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Lt&&zt){const nt=ee(Ct[0]);e.texStorage2D(s.TEXTURE_2D,ut,pt,nt.width,nt.height)}for(let nt=0,dt=Ct.length;nt<dt;nt++)ft=Ct[nt],Lt?z&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ht,Rt,ft):e.texImage2D(s.TEXTURE_2D,nt,pt,ht,Rt,ft);_.generateMipmaps=!1}else if(Lt){if(zt){const nt=ee(it);e.texStorage2D(s.TEXTURE_2D,ut,pt,nt.width,nt.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,Rt,it)}else e.texImage2D(s.TEXTURE_2D,0,pt,ht,Rt,it);g(_)&&y(K),ct.__version=ot.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function lt(A,_,H){if(_.image.length!==6)return;const K=Q(A,_),tt=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+H);const ot=n.get(tt);if(tt.version!==ot.__version||K===!0){e.activeTexture(s.TEXTURE0+H);const ct=Xt.getPrimaries(Xt.workingColorSpace),et=_.colorSpace===Kn?null:Xt.getPrimaries(_.colorSpace),it=_.colorSpace===Kn||ct===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const ht=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!ht&&!Rt?pt[rt]=m(_.image[rt],!0,i.maxCubemapSize):pt[rt]=Rt?_.image[rt].image:_.image[rt],pt[rt]=Ie(_,pt[rt]);const ft=pt[0],Ct=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),zt=v(_.internalFormat,Ct,Lt,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,ut=ot.__version===void 0||K===!0,nt=tt.dataReady;let dt=E(_,ft);O(s.TEXTURE_CUBE_MAP,_);let _t;if(ht){z&&ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,zt,ft.width,ft.height);for(let rt=0;rt<6;rt++){_t=pt[rt].mipmaps;for(let Pt=0;Pt<_t.length;Pt++){const wt=_t[Pt];_.format!==fn?Ct!==null?z?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,zt,wt.width,wt.height,0,wt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,wt.width,wt.height,Ct,Lt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,zt,wt.width,wt.height,0,Ct,Lt,wt.data)}}}else{if(_t=_.mipmaps,z&&ut){_t.length>0&&dt++;const rt=ee(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,zt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Rt){z?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,Ct,Lt,pt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,zt,pt[rt].width,pt[rt].height,0,Ct,Lt,pt[rt].data);for(let Pt=0;Pt<_t.length;Pt++){const re=_t[Pt].image[rt].image;z?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,re.width,re.height,Ct,Lt,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,zt,re.width,re.height,0,Ct,Lt,re.data)}}else{z?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct,Lt,pt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,zt,Ct,Lt,pt[rt]);for(let Pt=0;Pt<_t.length;Pt++){const wt=_t[Pt];z?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Ct,Lt,wt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,zt,Ct,Lt,wt.image[rt])}}}g(_)&&y(s.TEXTURE_CUBE_MAP),ot.__version=tt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function at(A,_,H,K,tt,ot){const ct=r.convert(H.format,H.colorSpace),et=r.convert(H.type),it=v(H.internalFormat,ct,et,H.normalized,H.colorSpace),ht=n.get(_),Rt=n.get(H);if(Rt.__renderTarget=_,!ht.__hasExternalTextures){const pt=Math.max(1,_.width>>ot),ft=Math.max(1,_.height>>ot);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,it,pt,ft,_.depth,0,ct,et,null):e.texImage2D(tt,ot,it,pt,ft,0,ct,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),xe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,tt,Rt.__webglTexture,0,ue(_)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,tt,Rt.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(A,_,H){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const K=_.depthTexture,tt=K&&K.isDepthTexture?K.type:null,ot=b(_.stencilBuffer,tt),ct=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(_),ot,_.width,_.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(_),ot,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ot,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,A)}else{const K=_.textures;for(let tt=0;tt<K.length;tt++){const ot=K[tt],ct=r.convert(ot.format,ot.colorSpace),et=r.convert(ot.type),it=v(ot.internalFormat,ct,et,ot.normalized,ot.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(_),it,_.width,_.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(_),it,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,it,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(A,_,H){const K=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(_.depthTexture);if(tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),O(s.TEXTURE_CUBE_MAP,_.depthTexture);const ht=r.convert(_.depthTexture.format),Rt=r.convert(_.depthTexture.type);let pt;_.depthTexture.format===Bn?pt=s.DEPTH_COMPONENT24:_.depthTexture.format===ai&&(pt=s.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,_.width,_.height,0,ht,Rt,null)}}else J(_.depthTexture,0);const ot=tt.__webglTexture,ct=ue(_),et=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,it=_.depthTexture.format===ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bn)xe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,ot,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,ot,0);else if(_.depthTexture.format===ai)xe(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,ot,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(A){const _=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=K}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let K=0;K<6;K++)Dt(_.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?Dt(_.__webglFramebuffer[0],A,0):Dt(_.__webglFramebuffer,A,0)}else if(H){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),Tt(_.__webglDepthbuffer[K],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ot)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Tt(_.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,ot)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(A,_,H){const K=n.get(A);_!==void 0&&at(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ut(A)}function $t(A){const _=A.texture,H=n.get(A),K=n.get(_);A.addEventListener("dispose",M);const tt=A.textures,ot=A.isWebGLCubeRenderTarget===!0,ct=tt.length>1;if(ct||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,a.memory.textures++),ot){H.__webglFramebuffer=[];for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[et]=[];for(let it=0;it<_.mipmaps.length;it++)H.__webglFramebuffer[et][it]=s.createFramebuffer()}else H.__webglFramebuffer[et]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let et=0;et<_.mipmaps.length;et++)H.__webglFramebuffer[et]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ct)for(let et=0,it=tt.length;et<it;et++){const ht=n.get(tt[et]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&xe(A)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){const it=tt[et];H.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[et]);const ht=r.convert(it.format,it.colorSpace),Rt=r.convert(it.type),pt=v(it.internalFormat,ht,Rt,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),ft=ue(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,pt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,H.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),O(s.TEXTURE_CUBE_MAP,_);for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)at(H.__webglFramebuffer[et][it],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else at(H.__webglFramebuffer[et],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(_)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let et=0,it=tt.length;et<it;et++){const ht=tt[et],Rt=n.get(ht);let pt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Rt.__webglTexture),O(pt,ht),at(H.__webglFramebuffer,A,ht,s.COLOR_ATTACHMENT0+et,pt,0),g(ht)&&y(pt)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(et=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,K.__webglTexture),O(et,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)at(H.__webglFramebuffer[it],A,_,s.COLOR_ATTACHMENT0,et,it);else at(H.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,et,0);g(_)&&y(et),e.unbindTexture()}A.depthBuffer&&Ut(A)}function Wt(A){const _=A.textures;for(let H=0,K=_.length;H<K;H++){const tt=_[H];if(g(tt)){const ot=w(A),ct=n.get(tt).__webglTexture;e.bindTexture(ot,ct),y(ot),e.unbindTexture()}}}const he=[],Te=[];function He(A){if(A.samples>0){if(xe(A)===!1){const _=A.textures,H=A.width,K=A.height;let tt=s.COLOR_BUFFER_BIT;const ot=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(A),et=_.length>1;if(et)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const it=A.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);const Rt=n.get(_[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,H,K,0,0,H,K,tt,s.NEAREST),c===!0&&(he.length=0,Te.length=0,he.push(s.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(he.push(ot),Te.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);const Rt=n.get(_[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,Rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function ue(A){return Math.min(i.maxSamples,A.samples)}function xe(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ie(A,_){const H=A.colorSpace,K=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Zs&&H!==Kn&&(Xt.getTransfer(H)===ne?(K!==fn||tt!==je)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",H)),_}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=D,this.getTextureUnits=L,this.setTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=at,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $p(s,t){function e(n,i=Kn){let r;const a=Xt.getTransfer(i);if(n===je)return s.UNSIGNED_BYTE;if(n===Wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hl)return s.BYTE;if(n===Vl)return s.SHORT;if(n===os)return s.UNSIGNED_SHORT;if(n===Va)return s.INT;if(n===yn)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===En)return s.HALF_FLOAT;if(n===ql)return s.ALPHA;if(n===Yl)return s.RGB;if(n===fn)return s.RGBA;if(n===Bn)return s.DEPTH_COMPONENT;if(n===ai)return s.DEPTH_STENCIL;if(n===qa)return s.RED;if(n===Ya)return s.RED_INTEGER;if(n===hi)return s.RG;if(n===$a)return s.RG_INTEGER;if(n===Ka)return s.RGBA_INTEGER;if(n===Gs||n===Hs||n===Vs||n===Ws)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ha||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===pa||n===ma||n===ga||n===Ys||n===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ua||n===da)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ma)return r.COMPRESSED_R11_EAC;if(n===ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ys)return r.COMPRESSED_RG11_EAC;if(n===xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_a||n===va||n===Ma||n===Sa||n===ba||n===ya||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Na||n===Fa||n===$s||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new sc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends ui{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,u=null;const x=typeof XRWebGLBinding<"u",m=new Jp,g={},y=e.getContextAttributes();let w=null,v=null;const b=[],E=[],R=new Ft;let M=null,T=null;const C=new Qe;C.viewport=new pe;const I=new Qe;I.viewport=new pe;const P=[C,I],D=new af;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let $=b[N];return $===void 0&&($=new br,b[N]=$),$.getTargetRaySpace()},this.getControllerGrip=function(N){let $=b[N];return $===void 0&&($=new br,b[N]=$),$.getGripSpace()},this.getHand=function(N){let $=b[N];return $===void 0&&($=new br,b[N]=$),$.getHandSpace()};function q(N){const $=E.indexOf(N.inputSource);if($===-1)return;const st=b[$];st!==void 0&&(st.update(N.inputSource,N.frame,l||a),st.dispatchEvent({type:N.type,data:N.inputSource}))}function k(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",J);for(let N=0;N<b.length;N++){const $=E[N];$!==null&&(E[N]=null,b[N].disconnect($))}L=null,U=null,m.reset();for(const N in g)delete g[N];if(t.setRenderTarget(w),p=null,f=null,d=null,i=null,v=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(R.width,R.height,!1),T!==null){const N=T.camera;N.fov=T.fov,N.zoom=T.zoom,N.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",k),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,lt=null,at=null;y.depth&&(at=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=y.stencil?ai:Bn,lt=y.stencil?ls:yn);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new dn(f.textureWidth,f.textureHeight,{format:fn,type:je,depthTexture:new hs(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const st={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new dn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(N){for(let $=0;$<N.removed.length;$++){const st=N.removed[$],lt=E.indexOf(st);lt>=0&&(E[lt]=null,b[lt].disconnect(st))}for(let $=0;$<N.added.length;$++){const st=N.added[$];let lt=E.indexOf(st);if(lt===-1){for(let Tt=0;Tt<b.length;Tt++)if(Tt>=E.length){E.push(st),lt=Tt;break}else if(E[Tt]===null){E[Tt]=st,lt=Tt;break}if(lt===-1)break}const at=b[lt];at&&at.connect(st)}}const Y=new G,X=new G;function j(N,$,st){Y.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(st.matrixWorld);const lt=Y.distanceTo(X),at=$.projectionMatrix.elements,Tt=st.projectionMatrix.elements,Dt=at[14]/(at[10]-1),Ut=at[14]/(at[10]+1),Vt=(at[9]+1)/at[5],$t=(at[9]-1)/at[5],Wt=(at[8]-1)/at[0],he=(Tt[8]+1)/Tt[0],Te=Dt*Wt,He=Dt*he,ue=lt/(-Wt+he),xe=ue*-Wt;if($.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(xe),N.translateZ(ue),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),at[10]===-1)N.projectionMatrix.copy($.projectionMatrix),N.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const B=Dt+ue,Ie=Ut+ue,ee=Te-xe,A=He+(lt-xe),_=Vt*Ut/Ie*B,H=$t*Ut/Ie*B;N.projectionMatrix.makePerspective(ee,A,_,H,B,Ie),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function vt(N,$){$===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices($.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let $=N.near,st=N.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(st=m.depthFar)),D.near=I.near=C.near=$,D.far=I.far=C.far=st,(L!==D.near||U!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,U=D.far),D.layers.mask=N.layers.mask|6,C.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;const lt=N.parent,at=D.cameras;vt(D,lt);for(let Tt=0;Tt<at.length;Tt++)vt(at[Tt],lt);at.length===2?j(D,C,I):D.projectionMatrix.copy(C.projectionMatrix),T===null&&N.isPerspectiveCamera&&(T={camera:N,fov:N.fov,zoom:N.zoom}),bt(N,D,lt)};function bt(N,$,st){st===null?N.matrix.copy($.matrixWorld):(N.matrix.copy(st.matrixWorld),N.matrix.invert(),N.matrix.multiply($.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy($.projectionMatrix),N.projectionMatrixInverse.copy($.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=za*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(N){c=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(N){return g[N]};let Jt=null;function O(N,$){if(h=$.getViewerPose(l||a),u=$,h!==null){const st=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let lt=!1;st.length!==D.cameras.length&&(D.cameras.length=0,lt=!0);for(let Ut=0;Ut<st.length;Ut++){const Vt=st[Ut];let $t=null;if(p!==null)$t=p.getViewport(Vt);else{const he=d.getViewSubImage(f,Vt);$t=he.viewport,Ut===0&&(t.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(v))}let Wt=P[Ut];Wt===void 0&&(Wt=new Qe,Wt.layers.enable(Ut),Wt.viewport=new pe,P[Ut]=Wt),Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set($t.x,$t.y,$t.width,$t.height),Ut===0&&(D.matrix.copy(Wt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),lt===!0&&D.cameras.push(Wt)}const at=i.enabledFeatures;if(at&&at.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ut=d.getDepthInformation(st[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,i.renderState)}if(at&&at.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ut=0;Ut<st.length;Ut++){const Vt=st[Ut].camera;if(Vt){let $t=g[Vt];$t||($t=new sc,g[Vt]=$t);const Wt=d.getCameraImage(Vt);$t.sourceTexture=Wt}}}}for(let st=0;st<b.length;st++){const lt=E[st],at=b[st];lt!==null&&at!==void 0&&at.update(lt,$,l||a)}Jt&&Jt(N,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),u=null}const Q=new lc;Q.setAnimationLoop(O),this.setAnimationLoop=function(N){Jt=N},this.dispose=function(){}}}const jp=new le,mc=new Ot;mc.set(-1,0,0,0,1,0,0,0,1);function tm(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,rc(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),u(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,y,w):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=t.get(g),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mc),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qe&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function u(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function em(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const E=b.program;n.uniformBlockBinding(v,E)}function l(v,b){let E=i[v.id];E===void 0&&(m(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",y));const R=b.program;n.updateUBOMapping(v,R);const M=t.render.frame;r[v.id]!==M&&(f(v),r[v.id]=M)}function h(v){const b=d();v.__bindingPointIndex=b;const E=s.createBuffer(),R=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=i[v.id],E=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,T=E.length;M<T;M++){const C=E[M];if(Array.isArray(C))for(let I=0,P=C.length;I<P;I++)p(C[I],M,I,R);else p(C,M,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,b,E,R){if(x(v,b,E,R)===!0){const M=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){const P=T[I],D=g(P);u(P,v.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else u(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function u(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function x(v,b,E,R){const M=v.value,T=b+"_"+E;if(R[T]===void 0)return typeof M=="number"||typeof M=="boolean"?R[T]=M:ArrayBuffer.isView(M)?R[T]=M.slice():R[T]=M.clone(),!0;{const C=R[T];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return R[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(v){const b=v.uniforms;let E=0;const R=16;for(let T=0,C=b.length;T<C;T++){const I=Array.isArray(b[T])?b[T]:[b[T]];for(let P=0,D=I.length;P<D;P++){const L=I[P],U=Array.isArray(L.value)?L.value:[L.value];for(let q=0,k=U.length;q<k;q++){const J=U[q],Y=g(J),X=E%R,j=X%Y.boundary,vt=X+j;E+=j,vt!==0&&R-vt<Y.storage&&(E+=R-vt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Y.storage}}}const M=E%R;return M>0&&(E+=R-M),v.__size=E,v.__cache={},this}function g(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){const b=v.target;b.removeEventListener("dispose",y);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:w}}const nm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function im(){return vn===null&&(vn=new ec(nm,16,16,hi,En),vn.name="DFG_LUT",vn.minFilter=Ne,vn.magFilter=Ne,vn.wrapS=Nn,vn.wrapT=Nn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class sm{constructor(t={}){const{canvas:e=_h(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=je}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const x=p,m=new Set([Ka,$a,Ya]),g=new Set([je,yn,os,ls,Wa,Xa]),y=new Uint32Array(4),w=new Int32Array(4),v=new G;let b=null,E=null;const R=[],M=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,P=null,D=null,L=null,U=null;this._outputColorSpace=Se;let q=0,k=0,J=null,Y=-1,X=null;const j=new pe,vt=new pe;let bt=null;const Jt=new Gt(0);let O=0,Q=e.width,N=e.height,$=1,st=null,lt=null;const at=new pe(0,0,Q,N),Tt=new pe(0,0,Q,N);let Dt=!1;const Ut=new to;let Vt=!1,$t=!1;const Wt=new le,he=new G,Te=new pe,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function xe(){return J===null?$:1}let B=n;function Ie(S,F){return e.getContext(S,F)}let ee,A,_,H,K,tt,ot,ct,et,it,ht,Rt,pt,ft,Ct,Lt,zt,z,ut,nt,dt,_t,rt;try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",sn,!1),B===null){const F="webgl2";if(B=Ie(F,S),B===null)throw Ie(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(S){throw e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),Zt("WebGLRenderer: "+S.message),S}function Pt(){ee=new i0(B),ee.init(),dt=new $p(B,ee),A=new Yd(B,ee,t,dt),_=new qp(B,ee),A.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),D=B.createFramebuffer(),L=B.createFramebuffer(),U=B.createFramebuffer(),H=new a0(B),K=new Lp,tt=new Yp(B,ee,_,K,A,dt,H),ot=new n0(C),ct=new lf(B),_t=new Xd(B,ct),et=new s0(B,ct,H,_t),it=new l0(B,et,ct,_t,H),z=new o0(B,A,tt),Ct=new $d(K),ht=new Ip(C,ot,ee,A,_t,Ct),Rt=new tm(C,K),pt=new Up,ft=new kp(ee),zt=new Wd(C,ot,_,it,u,c),Lt=new Xp(C,it,A),rt=new em(B,H,A,_),ut=new qd(B,ee,H),nt=new r0(B,ee,H),H.programs=ht.programs,C.capabilities=A,C.extensions=ee,C.properties=K,C.renderLists=pt,C.shadowMap=Lt,C.state=_,C.info=H}x!==je&&(T=new h0(x,e.width,e.height,o,i,r));const wt=new Qp(C,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(Q,N,!1))},this.getSize=function(S){return S.set(Q,N)},this.setSize=function(S,F,Z=!0){if(wt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,N=F,e.width=Math.floor(S*$),e.height=Math.floor(F*$),Z===!0&&(e.style.width=S+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Q*$,N*$).floor()},this.setDrawingBufferSize=function(S,F,Z){Q=S,N=F,$=Z,e.width=Math.floor(S*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(x===je){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(at)},this.setViewport=function(S,F,Z,V){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,F,Z,V),_.viewport(j.copy(at).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(Tt)},this.setScissor=function(S,F,Z,V){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,F,Z,V),_.scissor(vt.copy(Tt).multiplyScalar($).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(S){_.setScissorTest(Dt=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Z=!0){let V=0;if(S){let W=!1;if(J!==null){const xt=J.texture.format;W=m.has(xt)}if(W){const xt=J.texture.type,St=g.has(xt),gt=zt.getClearColor(),yt=zt.getClearAlpha(),At=gt.r,Bt=gt.g,Ht=gt.b;St?(y[0]=At,y[1]=Bt,y[2]=Ht,y[3]=yt,B.clearBufferuiv(B.COLOR,0,y)):(w[0]=At,w[1]=Bt,w[2]=Ht,w[3]=yt,B.clearBufferiv(B.COLOR,0,w))}else V|=B.COLOR_BUFFER_BIT}F&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),zt.dispose(),pt.dispose(),ft.dispose(),K.dispose(),ot.dispose(),it.dispose(),_t.dispose(),rt.dispose(),ht.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",fo),wt.removeEventListener("sessionend",uo),Qn.stop()};function re(S){S.preventDefault(),Ao("WebGLRenderer: Context Lost."),I=!0}function Qt(){Ao("WebGLRenderer: Context Restored."),I=!1;const S=H.autoReset,F=Lt.enabled,Z=Lt.autoUpdate,V=Lt.needsUpdate,W=Lt.type;Pt(),H.autoReset=S,Lt.enabled=F,Lt.autoUpdate=Z,Lt.needsUpdate=V,Lt.type=W}function sn(S){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gn(S){const F=S.target;F.removeEventListener("dispose",gn),Pc(F)}function Pc(S){Ic(S),K.remove(S)}function Ic(S){const F=K.get(S).programs;F!==void 0&&(F.forEach(function(Z){ht.releaseProgram(Z)}),S.isShaderMaterial&&ht.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Z,V,W,xt){F===null&&(F=He);const St=W.isMesh&&W.matrixWorld.determinantAffine()<0,gt=Uc(S,F,Z,V,W);_.setMaterial(V,St);let yt=Z.index,At=1;if(V.wireframe===!0){if(yt=et.getWireframeAttribute(Z),yt===void 0)return;At=2}const Bt=Z.drawRange,Ht=Z.attributes.position;let Et=Bt.start*At,jt=(Bt.start+Bt.count)*At;xt!==null&&(Et=Math.max(Et,xt.start*At),jt=Math.min(jt,(xt.start+xt.count)*At)),yt!==null?(Et=Math.max(Et,0),jt=Math.min(jt,yt.count)):Ht!=null&&(Et=Math.max(Et,0),jt=Math.min(jt,Ht.count));const _e=jt-Et;if(_e<0||_e===1/0)return;_t.setup(W,V,gt,Z,yt);let ce,se=ut;if(yt!==null&&(ce=ct.get(yt),se=nt,se.setIndex(ce)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*xe()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(W.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),_.setLineWidth(Le*xe()),W.isLineSegments?se.setMode(B.LINES):W.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else W.isPoints?se.setMode(B.POINTS):W.isSprite&&se.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Le=W._multiDrawStarts,Mt=W._multiDrawCounts,Oe=W._multiDrawCount,Yt=yt?ct.get(yt).bytesPerElement:1,tn=K.get(V).currentProgram.getUniforms();for(let xn=0;xn<Oe;xn++)tn.setValue(B,"_gl_DrawID",xn),se.render(Le[xn]/Yt,Mt[xn])}else if(W.isInstancedMesh)se.renderInstances(Et,_e,W.count);else if(Z.isInstancedBufferGeometry){const Le=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Mt=Math.min(Z.instanceCount,Le);se.renderInstances(Et,_e,Mt)}else se.render(Et,_e)};function ho(S,F,Z,V){P!==null&&S.isNodeMaterial&&P.setObject(V,S),Vt===!0&&Ct.setState(S,Z,!1),S.transparent===!0&&S.side===We&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,gs(S,F,V),S.side=li,S.needsUpdate=!0,gs(S,F,V),S.side=We):gs(S,F,V)}this.compile=function(S,F,Z=null){Z===null&&(Z=S),P!==null&&P.renderStart(S,F,Z),E=ft.get(Z),E.init(F),M.push(E),Z.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),S!==Z&&S.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),$t=this.localClippingEnabled,Vt=Ct.init(this.clippingPlanes,$t),Vt===!0&&Ct.setGlobalState(this.clippingPlanes,F),P!==null&&Lt.render(E.state.shadowsArray,Z,F);const V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xt=W.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){const gt=xt[St];ho(gt,Z,F,W),V.add(gt)}else ho(xt,Z,F,W),V.add(xt)}),E=M.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(S,F,Z=null){const V=this.compile(S,F,Z);return new Promise(W=>{function xt(){if(V.forEach(function(St){const yt=K.get(St).currentProgram;(yt===void 0||yt.isReady())&&V.delete(St)}),V.size===0){W(S);return}setTimeout(xt,10)}ee.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let cr=null;function Lc(S){cr&&cr(S)}function fo(){Qn.stop()}function uo(){Qn.start()}const Qn=new lc;Qn.setAnimationLoop(Lc),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){cr=S,wt.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},wt.addEventListener("sessionstart",fo),wt.addEventListener("sessionend",uo),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(S,F);const Z=wt.enabled===!0&&wt.isPresenting===!0,V=T!==null&&(J===null||Z)&&T.begin(C,J);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(F),F=wt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,J),E=ft.get(S,M.length),E.init(F),E.state.textureUnits=tt.getTextureUnits(),M.push(E),Wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ut.setFromProjectionMatrix(Wt,bn,F.reversedDepth),$t=this.localClippingEnabled,Vt=Ct.init(this.clippingPlanes,$t),b=pt.get(S,R.length),b.init(),R.push(b),wt.enabled===!0&&wt.isPresenting===!0){const St=C.xr.getDepthSensingMesh();St!==null&&hr(St,F,-1/0,C.sortObjects)}hr(S,F,0,C.sortObjects),b.finish(),P!==null&&P.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(st,lt),ue=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ue&&zt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Vt===!0&&Ct.beginShadows();const W=E.state.shadowsArray;if(Lt.render(W,S,F),Vt===!0&&Ct.endShadows(),(V&&T.hasRenderPass())===!1){const St=b.opaque,gt=b.transmissive;if(E.setupLights(),F.isArrayCamera){const yt=F.cameras;if(gt.length>0)for(let At=0,Bt=yt.length;At<Bt;At++){const Ht=yt[At];mo(St,gt,S,Ht)}ue&&zt.render(S);for(let At=0,Bt=yt.length;At<Bt;At++){const Ht=yt[At];po(b,S,Ht,Ht.viewport)}}else gt.length>0&&mo(St,gt,S,F),ue&&zt.render(S),po(b,S,F)}J!==null&&k===0&&(tt.updateMultisampleRenderTarget(J),tt.updateRenderTargetMipmap(J)),V&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),_t.resetDefaultState(),Y=-1,X=null,M.pop(),M.length>0?(E=M[M.length-1],tt.setTextureUnits(E.state.textureUnits),Vt===!0&&Ct.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,P!==null&&P.renderEnd()};function hr(S,F,Z,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ut)){V&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Wt);const St=it.update(S),gt=S.material;gt.visible&&b.push(S,St,gt,Z,Te.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ut))){const St=it.update(S),gt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Te.copy(St.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(Wt)),Array.isArray(gt)){const yt=St.groups;for(let At=0,Bt=yt.length;At<Bt;At++){const Ht=yt[At],Et=gt[Ht.materialIndex];Et&&Et.visible&&b.push(S,St,Et,Z,Te.z,Ht,F)}}else gt.visible&&b.push(S,St,gt,Z,Te.z,null,F)}}const xt=S.children;for(let St=0,gt=xt.length;St<gt;St++)hr(xt[St],F,Z,V)}function po(S,F,Z,V){const{opaque:W,transmissive:xt,transparent:St}=S;E.setupLightsView(Z),Vt===!0&&Ct.setGlobalState(C.clippingPlanes,Z),V&&_.viewport(j.copy(V)),W.length>0&&ms(W,F,Z),xt.length>0&&ms(xt,F,Z),St.length>0&&ms(St,F,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function mo(S,F,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const Et=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new dn(1,1,{generateMipmaps:!0,type:Et?En:je,minFilter:ri,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const xt=E.state.transmissionRenderTarget[V.id],St=V.viewport||j;xt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);const gt=C.getRenderTarget(),yt=C.getActiveCubeFace(),At=C.getActiveMipmapLevel();C.setRenderTarget(xt),C.getClearColor(Jt),O=C.getClearAlpha(),O<1&&C.setClearColor(16777215,.5),C.clear(),ue&&zt.render(Z);const Bt=C.toneMapping;C.toneMapping=un;const Ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Vt===!0&&Ct.setGlobalState(C.clippingPlanes,V),ms(S,Z,V),tt.updateMultisampleRenderTarget(xt),tt.updateRenderTargetMipmap(xt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let jt=0,_e=F.length;jt<_e;jt++){const ce=F[jt],{object:se,geometry:Le,material:Mt,group:Oe}=ce;if(Mt.side===We&&se.layers.test(V.layers)){const Yt=Mt.side;Mt.side=qe,Mt.needsUpdate=!0,go(se,Z,V,Le,Mt,Oe),Mt.side=Yt,Mt.needsUpdate=!0,Et=!0}}Et===!0&&(tt.updateMultisampleRenderTarget(xt),tt.updateRenderTargetMipmap(xt))}C.setRenderTarget(gt,yt,At),C.setClearColor(Jt,O),Ht!==void 0&&(V.viewport=Ht),C.toneMapping=Bt}function ms(S,F,Z){const V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,xt=S.length;W<xt;W++){const St=S[W],{object:gt,geometry:yt,group:At}=St;let Bt=St.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),gt.layers.test(Z.layers)&&go(gt,F,Z,yt,Bt,At)}}function go(S,F,Z,V,W,xt){P!==null&&W.isNodeMaterial&&P.setObject(S,W),S.onBeforeRender(C,F,Z,V,W,xt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(C,F,Z,V,S,xt),W.transparent===!0&&W.side===We&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,C.renderBufferDirect(Z,F,V,W,S,xt),W.side=li,W.needsUpdate=!0,C.renderBufferDirect(Z,F,V,W,S,xt),W.side=We):C.renderBufferDirect(Z,F,V,W,S,xt),S.onAfterRender(C,F,Z,V,W,xt)}function gs(S,F,Z){F.isScene!==!0&&(F=He);const V=K.get(S),W=E.state.lights,xt=E.state.shadowsArray,St=W.state.version,gt=ht.getParameters(S,W.state,xt,F,Z,E.state.lightProbeGridArray),yt=ht.getProgramCacheKey(gt);let At=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=ot.get(S.envMap||V.environment,Bt),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",gn),At=new Map,V.programs=At);let Ht=At.get(yt);if(Ht!==void 0){if(V.currentProgram===Ht&&V.lightsStateVersion===St)return _o(S,gt),Ht}else gt.uniforms=ht.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,Z,gt),S.onBeforeCompile(gt,C),Ht=ht.acquireProgram(gt,yt),At.set(yt,Ht),V.uniforms=gt.uniforms;const Et=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=Ct.uniform),_o(S,gt),V.needsLights=Fc(S),V.lightsStateVersion=St,V.needsLights&&(Et.ambientLightColor.value=W.state.ambient,Et.lightProbe.value=W.state.probe,Et.sunLights.value=W.state.sun,Et.sunLightShadows.value=W.state.sunShadow,Et.directionalLights.value=W.state.directional,Et.directionalLightShadows.value=W.state.directionalShadow,Et.spotLights.value=W.state.spot,Et.spotLightShadows.value=W.state.spotShadow,Et.rectAreaLights.value=W.state.rectArea,Et.ltc_1.value=W.state.rectAreaLTC1,Et.ltc_2.value=W.state.rectAreaLTC2,Et.pointLights.value=W.state.point,Et.pointLightShadows.value=W.state.pointShadow,Et.hemisphereLights.value=W.state.hemi,Et.sunShadowMatrix.value=W.state.sunShadowMatrix,Et.sunShadowCascade.value=W.state.sunShadowCascade,Et.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Et.spotLightMatrix.value=W.state.spotLightMatrix,Et.spotLightMap.value=W.state.spotLightMap,Et.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Ht,V.uniformsList=null,Ht}function xo(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=qs.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function _o(S,F){const Z=K.get(S);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Dc(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Z=0,V=S.length;Z<V;Z++){const W=S[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Uc(S,F,Z,V,W){F.isScene!==!0&&(F=He),tt.resetTextureUnits();const xt=F.fog,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,gt=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xt.workingColorSpace,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,At=ot.get(V.envMap||St,yt),Bt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!Z.morphAttributes.position,jt=!!Z.morphAttributes.normal,_e=!!Z.morphAttributes.color;let ce=un;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ce=C.toneMapping);const se=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Le=se!==void 0?se.length:0,Mt=K.get(V),Oe=E.state.lights;if(Vt===!0&&($t===!0||S!==X)){const ae=S===X&&V.id===Y;Ct.setState(V,S,ae)}let Yt=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Oe.state.version||Mt.outputColorSpace!==gt||W.isBatchedMesh&&Mt.batching===!1||!W.isBatchedMesh&&Mt.batching===!0||W.isBatchedMesh&&Mt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Mt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Mt.instancing===!1||!W.isInstancedMesh&&Mt.instancing===!0||W.isSkinnedMesh&&Mt.skinning===!1||!W.isSkinnedMesh&&Mt.skinning===!0||W.isInstancedMesh&&Mt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Mt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Mt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Mt.instancingMorph===!1&&W.morphTexture!==null||Mt.envMap!==At||V.fog===!0&&Mt.fog!==xt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Ct.numPlanes||Mt.numIntersection!==Ct.numIntersection)||Mt.vertexAlphas!==Bt||Mt.vertexTangents!==Ht||Mt.morphTargets!==Et||Mt.morphNormals!==jt||Mt.morphColors!==_e||Mt.toneMapping!==ce||Mt.morphTargetsCount!==Le||!!Mt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,Mt.__version=V.version);let tn=Mt.currentProgram;Yt===!0&&(tn=gs(V,F,W),P&&V.isNodeMaterial&&P.onUpdateProgram(V,tn,Mt));let xn=!1,kn=!1,pi=!1;const ie=tn.getUniforms(),ge=Mt.uniforms;if(_.useProgram(tn.program)&&(xn=!0,kn=!0,pi=!0),V.id!==Y&&(Y=V.id,kn=!0),Mt.needsLights){const ae=Dc(E.state.lightProbeGridArray,W);Mt.lightProbeGrid!==ae&&(Mt.lightProbeGrid=ae,kn=!0)}if(xn||X!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ie.setValue(B,"projectionMatrix",S.projectionMatrix),ie.setValue(B,"viewMatrix",S.matrixWorldInverse);const Hn=ie.map.cameraPosition;Hn!==void 0&&Hn.setValue(B,he.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ie.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ie.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,kn=!0,pi=!0)}if(Mt.needsLights&&(Oe.state.sunShadowMap.length>0&&ie.setValue(B,"sunShadowMap",Oe.state.sunShadowMap,tt),Oe.state.directionalShadowMap.length>0&&ie.setValue(B,"directionalShadowMap",Oe.state.directionalShadowMap,tt),Oe.state.spotShadowMap.length>0&&ie.setValue(B,"spotShadowMap",Oe.state.spotShadowMap,tt),Oe.state.pointShadowMap.length>0&&ie.setValue(B,"pointShadowMap",Oe.state.pointShadowMap,tt)),W.isSkinnedMesh){ie.setOptional(B,W,"bindMatrix"),ie.setOptional(B,W,"bindMatrixInverse");const ae=W.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),ie.setValue(B,"boneTexture",ae.boneTexture,tt))}W.isBatchedMesh&&(ie.setOptional(B,W,"batchingTexture"),ie.setValue(B,"batchingTexture",W._matricesTexture,tt),ie.setOptional(B,W,"batchingIdTexture"),ie.setValue(B,"batchingIdTexture",W._indirectTexture,tt),ie.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&ie.setValue(B,"batchingColorTexture",W._colorsTexture,tt));const Gn=Z.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&z.update(W,Z,tn),(kn||Mt.receiveShadow!==W.receiveShadow)&&(Mt.receiveShadow=W.receiveShadow,ie.setValue(B,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(ge.envMapIntensity.value=F.environmentIntensity),ge.dfgLUT!==void 0&&(ge.dfgLUT.value=im()),kn){if(ie.setValue(B,"toneMappingExposure",C.toneMappingExposure),Mt.needsLights&&Nc(ge,pi),xt&&V.fog===!0&&Rt.refreshFogUniforms(ge,xt),Rt.refreshMaterialUniforms(ge,V,$,N,E.state.transmissionRenderTarget[S.id]),Mt.needsLights&&Mt.lightProbeGrid){const ae=Mt.lightProbeGrid;ge.probesSH.value=ae.texture,ge.probesMin.value.copy(ae.boundingBox.min),ge.probesMax.value.copy(ae.boundingBox.max),ge.probesResolution.value.copy(ae.resolution)}qs.upload(B,xo(Mt),ge,tt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qs.upload(B,xo(Mt),ge,tt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ie.setValue(B,"center",W.center),ie.setValue(B,"modelViewMatrix",W.modelViewMatrix),ie.setValue(B,"normalMatrix",W.normalMatrix),ie.setValue(B,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const ae=V.uniformsGroups;for(let Hn=0,mi=ae.length;Hn<mi;Hn++){const Mo=ae[Hn];rt.update(Mo,tn),rt.bind(Mo,tn)}}return tn}function Nc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Fc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(S,F,Z){const V=K.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),K.get(S.texture).__webglTexture=F,K.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const Z=K.get(S);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Z=0){J=S,q=F,k=Z;let V=null,W=!1,xt=!1;if(S){const gt=K.get(S);if(gt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(B.FRAMEBUFFER,gt.__webglFramebuffer),j.copy(S.viewport),vt.copy(S.scissor),bt=S.scissorTest,_.viewport(j),_.scissor(vt),_.setScissorTest(bt),Y=-1;return}else if(gt.__webglFramebuffer===void 0)tt.setupRenderTarget(S);else if(gt.__hasExternalTextures)tt.rebindTextures(S,K.get(S.texture).__webglTexture,K.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(gt.__boundDepthTexture!==Bt){if(Bt!==null&&K.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(xt=!0);const At=K.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[F])?V=At[F][Z]:V=At[F],W=!0):S.samples>0&&tt.useMultisampledRTT(S)===!1?V=K.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?V=At[Z]:V=At,j.copy(S.viewport),vt.copy(S.scissor),bt=S.scissorTest}else j.copy(at).multiplyScalar($).floor(),vt.copy(Tt).multiplyScalar($).floor(),bt=Dt;if(Z!==0&&(V=D),_.bindFramebuffer(B.FRAMEBUFFER,V)&&_.drawBuffers(S,V),_.viewport(j),_.scissor(vt),_.setScissorTest(bt),W){const gt=K.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,gt.__webglTexture,Z)}else if(xt){const gt=F;for(let yt=0;yt<S.textures.length;yt++){const At=K.get(S.textures[yt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+yt,At.__webglTexture,Z,gt)}}else if(S!==null&&Z!==0){const gt=K.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gt.__webglTexture,Z)}Y=-1};function vo(S){const F=K.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=A.textureFormatReadable(S.format),F.__typeReadable=A.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Z,V,W,xt,St,gt=0){if(!(S&&S.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St]),yt){_.bindFramebuffer(B.FRAMEBUFFER,yt);try{const At=S.textures[gt],Bt=At.format,Ht=At.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+gt);const Et=vo(At);if(Et.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-W&&B.readPixels(F,Z,V,W,dt.convert(Bt),dt.convert(Ht),xt)}finally{const At=J!==null?K.get(J).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,F,Z,V,W,xt,St,gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St]),yt)if(F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-W){_.bindFramebuffer(B.FRAMEBUFFER,yt);const At=S.textures[gt],Bt=At.format,Ht=At.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+gt);const Et=vo(At);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.bufferData(B.PIXEL_PACK_BUFFER,xt.byteLength,B.STREAM_READ),B.readPixels(F,Z,V,W,dt.convert(Bt),dt.convert(Ht),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const _e=J!==null?K.get(J).__webglFramebuffer:null;_.bindFramebuffer(B.FRAMEBUFFER,_e);const ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await vh(B,ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(jt),B.deleteSync(ce),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Z=0){const V=Math.pow(2,-Z),W=Math.floor(S.image.width*V),xt=Math.floor(S.image.height*V),St=F!==null?F.x:0,gt=F!==null?F.y:0;tt.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,St,gt,W,xt),_.unbindTexture()},this.copyTextureToTexture=function(S,F,Z=null,V=null,W=0,xt=0){let St,gt,yt,At,Bt,Ht,Et,jt,_e;const ce=S.isCompressedTexture?S.mipmaps[xt]:S.image;if(Z!==null)St=Z.max.x-Z.min.x,gt=Z.max.y-Z.min.y,yt=Z.isBox3?Z.max.z-Z.min.z:1,At=Z.min.x,Bt=Z.min.y,Ht=Z.isBox3?Z.min.z:0;else{const ge=Math.pow(2,-W);St=Math.floor(ce.width*ge),gt=Math.floor(ce.height*ge),S.isDataArrayTexture?yt=ce.depth:S.isData3DTexture?yt=Math.floor(ce.depth*ge):yt=1,At=0,Bt=0,Ht=0}V!==null?(Et=V.x,jt=V.y,_e=V.z):(Et=0,jt=0,_e=0);const se=dt.convert(F.format),Le=dt.convert(F.type);let Mt;F.isData3DTexture?(tt.setTexture3D(F,0),Mt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(tt.setTexture2DArray(F,0),Mt=B.TEXTURE_2D_ARRAY):(tt.setTexture2D(F,0),Mt=B.TEXTURE_2D),_.activeTexture(B.TEXTURE0),_.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Oe=_.getParameter(B.UNPACK_ROW_LENGTH),Yt=_.getParameter(B.UNPACK_IMAGE_HEIGHT),tn=_.getParameter(B.UNPACK_SKIP_PIXELS),xn=_.getParameter(B.UNPACK_SKIP_ROWS),kn=_.getParameter(B.UNPACK_SKIP_IMAGES);_.pixelStorei(B.UNPACK_ROW_LENGTH,ce.width),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce.height),_.pixelStorei(B.UNPACK_SKIP_PIXELS,At),_.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),_.pixelStorei(B.UNPACK_SKIP_IMAGES,Ht);const pi=S.isDataArrayTexture||S.isData3DTexture,ie=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const ge=K.get(S),Gn=K.get(F),ae=K.get(ge.__renderTarget),Hn=K.get(Gn.__renderTarget);_.bindFramebuffer(B.READ_FRAMEBUFFER,ae.__webglFramebuffer),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let mi=0;mi<yt;mi++)pi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(S).__webglTexture,W,Ht+mi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(F).__webglTexture,xt,_e+mi)),B.blitFramebuffer(At,Bt,St,gt,Et,jt,St,gt,B.DEPTH_BUFFER_BIT,B.NEAREST);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||K.has(S)){const ge=K.get(S),Gn=K.get(F);_.bindFramebuffer(B.READ_FRAMEBUFFER,L),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let ae=0;ae<yt;ae++)pi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ge.__webglTexture,W,Ht+ae):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ge.__webglTexture,W),ie?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gn.__webglTexture,xt,_e+ae):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gn.__webglTexture,xt),W!==0?B.blitFramebuffer(At,Bt,St,gt,Et,jt,St,gt,B.COLOR_BUFFER_BIT,B.NEAREST):ie?B.copyTexSubImage3D(Mt,xt,Et,jt,_e+ae,At,Bt,St,gt):B.copyTexSubImage2D(Mt,xt,Et,jt,At,Bt,St,gt);_.bindFramebuffer(B.READ_FRAMEBUFFER,null),_.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ie?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Mt,xt,Et,jt,_e,St,gt,yt,se,Le,ce.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Mt,xt,Et,jt,_e,St,gt,yt,se,ce.data):B.texSubImage3D(Mt,xt,Et,jt,_e,St,gt,yt,se,Le,ce):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xt,Et,jt,St,gt,se,Le,ce.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xt,Et,jt,ce.width,ce.height,se,ce.data):B.texSubImage2D(B.TEXTURE_2D,xt,Et,jt,St,gt,se,Le,ce);_.pixelStorei(B.UNPACK_ROW_LENGTH,Oe),_.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Yt),_.pixelStorei(B.UNPACK_SKIP_PIXELS,tn),_.pixelStorei(B.UNPACK_SKIP_ROWS,xn),_.pixelStorei(B.UNPACK_SKIP_IMAGES,kn),xt===0&&F.generateMipmaps&&B.generateMipmap(Mt),_.unbindTexture()},this.initRenderTarget=function(S){K.get(S).__webglFramebuffer===void 0&&tt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?tt.setTextureCube(S,0):S.isData3DTexture?tt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?tt.setTexture2DArray(S,0):tt.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){q=0,k=0,J=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}function gc(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Ge;let l=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const p=s[f].index;for(let u=0;u<p.count;++u)d.push(p.getX(u)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Ml(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][f]);const u=Ml(p);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(u)}}}return c}function Ml(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new pn(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let f=0,p=h.count;f<p;f++)for(let u=0;u<e;u++){const x=h.getComponent(f,u);o.setComponent(f+d,u,x)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const oe=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)};function xc(s,t=!1){const e=new Gi(s);return e.magFilter=e.minFilter=fe,e.colorSpace=Se,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=zi),e}function rm(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n={brick:["#48434c","#63585e","#292c35"],metal:["#454c52","#82908d","#222e35"],concrete:["#77776c","#a6a190","#484c49"],crate:["#696047","#988457","#30342c"],floor:["#303b3b","#515952","#19292b"],labfloor:["#52625f","#839488","#2a4143"],road:["#45464b","#777971","#292c34"],ceiling:["#2c3a3a","#53635b","#142628"],door:["#3d5149","#7d8e77","#182b29"],fuel:["#954732","#c87647","#4d302b"]},i=n[s]??n.metal,r=(c,l,h,d,f)=>{e.fillStyle=c,e.fillRect(l,h,d,f)},a=(c,l,h=1)=>{e.strokeStyle=c,e.lineWidth=h,e.beginPath(),e.moveTo(l[0],l[1]);for(let d=2;d<l.length;d+=2)e.lineTo(l[d],l[d+1]);e.stroke()},o=(c,l)=>{r("#172827",c,l,4,4),r("#a2ac95",c,l,3,2),r("#63776b",c+1,l+2,2,1),r("#263e39",c+1,l+1,1,1)};r(i[0],0,0,128,128);for(let c=0;c<1500;c++)e.globalAlpha=.18+oe(c)*.2,r(c%3?i[2]:i[1],oe(c+1)*128|0,oe(c+2)*128|0,1+c%3,1);if(e.globalAlpha=1,s==="brick"){for(let c=0;c<8;c++)for(let l=-1;l<5;l++){const h=l*32+c%2*16,d=c*16,f=c*5+l+2;e.globalAlpha=.15+oe(f+70)*.15,r(f%3?i[1]:i[2],h+2,d+2,29,13),e.globalAlpha=1,r("#202832",h,d,32,2),r("#242930",h,d,2,16),r("#77656a",h+3,d+3,26,1),r("#584e56",h+2,d+4,1,9),r("#33323a",h+3,d+14,27,1),f%3===0&&(r("#292d35",h+22,d+3,3,2),r("#81716e",h+22,d+5,4,1)),f%4===0&&a("#302c35",[h+12,d+4,h+10,d+7,h+12,d+10,h+11,d+13]),r("#393a40",h+5,d+9,4,1),r("#62545a",h+17,d+7,6,1)}for(let c=0;c<15;c++)e.globalAlpha=.12,r("#1b302c",oe(c+201)*128|0,oe(c+231)*128|0,4,8);e.globalAlpha=1}else if(s==="fuel"){for(const c of[8,35,95,117])r("#252d33",0,c,128,5),r("#87918b",0,c,128,2);for(const c of[8,40,72,104])r("#d6b55e",c,48,24,34),r("#392e27",c+2,50,20,30),e.fillStyle="#efc368",e.beginPath(),e.moveTo(c+12,52),e.lineTo(c+20,66),e.lineTo(c+4,66),e.fill(),r("#312b25",c+11,56,2,6),r("#312b25",c+11,63,2,2),r("#d5be86",c+4,71,16,2),r("#a38960",c+4,76,12,1);for(let c=0;c<20;c++)r("#513e35",oe(c+33)*128,oe(c+66)*128,1,3+oe(c+4)*8)}else if(["metal","ceiling","door"].includes(s)){for(let c=0;c<2;c++)for(let l=0;l<2;l++){const h=l*64,d=c*64;r(i[2],h,d,64,3),r(i[2],h,d,3,64),r(i[1],h+3,d+3,59,1),r("#445d51",h+3,d+4,1,57);for(const f of[7,55])for(const p of[7,55])o(h+f,d+p);for(let f=0;f<7;f++){const p=h+10+oe(f+c*14+l*7)*42|0,u=d+13+f*6;r("#263d38",p,u,10,1),r("#748077",p+2,u+1,5,1)}if(r("#7e6643",h+3,d+48,3,12),r("#553f2b",h+6,d+55,6,4),s==="ceiling"||s==="metal"&&c===1&&l===1){r("#1a2d2e",h+17,d+19,31,27);for(let f=21;f<45;f+=4)r("#0e2226",h+20,d+f-d,25,2),r("#667b6a",h+20,d+f-d+2,25,1)}}if(s==="door"){r("#172929",12,14,104,93),r("#718573",14,16,100,2);for(let c=20;c<101;c+=8)r("#4f6b59",16,c,96,4),r("#263e37",16,c+4,96,3),r("#76917a",18,c,90,1);r("#c7ab53",0,108,128,13);for(let c=-16;c<144;c+=24)e.fillStyle="#242c28",e.beginPath(),e.moveTo(c,121),e.lineTo(c+12,108),e.lineTo(c+24,108),e.lineTo(c+12,121),e.fill();r("#132a28",60,0,4,108),r("#92a288",65,2,2,104);for(const c of[7,97])o(53,c),o(72,c)}}else if(s==="crate"){for(let c=0;c<128;c+=16){r("#3e4030",c,0,2,128),r("#a18c5b",c+3,3,1,119);for(let l=8;l<120;l+=11)r("#4f4c35",c+5,l,7,1)}for(const c of[0,60,120])r("#333a30",c,0,8,128),r("#77836b",c+1,2,2,123);for(const c of[0,60,120])r("#333a30",0,c,128,8),r("#8e916f",3,c+1,121,2);for(const c of[3,63,123])for(const l of[5,62,122])o(c,l);r("#c4b886",19,21,34,22),r("#292f27",22,24,28,3),r("#595b40",22,30,19,2);for(let c=23;c<49;c+=3)r("#3d4934",c,36,1,5)}else if(s==="floor"||s==="labfloor")for(let c=0;c<2;c++)for(let l=0;l<2;l++){const h=l*64,d=c*64;r(i[2],h,d,64,3),r(i[2],h,d,3,64),r(i[1],h+3,d+3,59,1),r("#54675b",h+3,d+4,1,57);for(let f=0;f<9;f++){const p=h+8+oe(f+c*21+l*7)*44|0,u=d+9+oe(f+90)*44|0;r("#637363",p,u,5,1),r("#243a35",p+1,u+1,7,1)}if(s==="floor"){o(h+7,d+7),o(h+54,d+54);for(let f=14;f<52;f+=9)for(let p=15;p<52;p+=12)a("#506157",[h+p,d+f,h+p+3,d+f-3,h+p+5,d+f-3])}else c===1&&l===0&&a("#263e38",[h+20,d+3,h+21,d+12,h+26,d+19,h+25,d+29,h+31,d+35,h+32,d+45])}else if(s==="concrete"){r("#273c3d",0,0,128,3),r("#7b8173",0,3,128,1),r("#344848",0,64,128,2),a("#2b3b3d",[17,4,20,19,14,32,17,40,9,48,7,65]),a("#728074",[19,5,22,20,16,32]),a("#293b3c",[105,65,103,81,94,92,94,101,89,108,88,125]),a("#687768",[105,82,110,89,120,91]);for(const c of[11,115])for(const l of[12,114])r("#273c3c",c,l,5,4),r("#8b8c78",c,l,4,1);for(let c=0;c<16;c++)e.globalAlpha=.15,r("#1b3436",8+c*7,5,3,10+oe(c+4)*30);e.globalAlpha=1}else if(s==="road"){for(let c=0;c<450;c++){const l=oe(c+19)*128|0,h=oe(c+81)*128|0;r(c%4===0?"#62655f":"#3a4549",l,h,1+c%2,1)}a("#101d25",[0,42,16,45,23,53,36,54,48,66,64,70,79,86,95,89,112,103,128,101],2),a("#46514d",[0,40,16,43,24,51,36,52,48,64,64,68]),a("#14212a",[49,65,49,80,41,88,39,107,29,128]);for(let c=0;c<5;c++)e.globalAlpha=.16,r("#121e29",20+c*3,10+c*4,25-c*3,15);e.globalAlpha=1}return xc(t,!0)}function am(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=(i,r,a,o,c)=>{e.fillStyle=i,e.fillRect(r,a,o,c)};if(e.imageSmoothingEnabled=!1,s==="poster"){n("#142e32",4,3,118,122),n("#8ba084",8,7,110,110),n("#273a38",12,11,102,67);for(let i=0;i<12;i++)n(i%2?"#5b856e":"#365b54",19+i*7,20,3,44),n("#b2c09b",17+i*7,27+i%4*8,7,3);e.textAlign="center",e.fillStyle="#c8d4aa",e.font="bold 15px monospace",e.fillText("AXIOM",64,29),e.font="bold 9px monospace",e.fillText("A BETTER SPECIES",64,72),e.fillStyle="#293d37",e.fillText("LAZARUS / 2091",64,90),e.fillText("TRUST THE FUTURE",64,103),n("#597460",12,114,66,2),n("#203a34",22,119,86,2),n("#0d272d",4,100,5,15),n("#0d272d",119,8,5,16)}else if(s==="graffiti"){e.textAlign="center",e.font="bold 24px monospace",e.fillStyle="#cb5365",e.fillText("THEY LIED",64,54),e.font="bold 12px monospace",e.fillText("MARA IS ALIVE",64,74);for(let i=0;i<8;i++)n("#a33e50",14+i*14,56,1,5+oe(i)*15);e.strokeStyle="#b75059",e.lineWidth=2,e.beginPath(),e.moveTo(8,83),e.lineTo(116,88),e.stroke()}else if(s==="paper"){n("#766e55",9,9,108,111),n("#c2b791",8,6,106,109),n("#aea17e",9,111,101,4),n("#3e4940",17,15,51,7),n("#7d4543",83,13,23,13);for(let i=0;i<13;i++)n("#6e7461",18,30+i*5,48+oe(i)*37,1),i%3===0&&n("#9b9271",16,31+i*5,80,1);n("#7c5f50",75,69,28,22),n("#37473e",80,74,18,14),n("#b0a47c",12,93,16,13),e.fillStyle="#713f38",e.font="bold 8px monospace",e.fillText("CASE 091",36,105)}else if(s==="puddle"){e.fillStyle="#173541",e.beginPath();for(let i=0;i<20;i++){const r=i*Math.PI/10,a=45+oe(i)*13,o=64+Math.cos(r)*a,c=64+Math.sin(r)*a*.65;i?e.lineTo(o,c):e.moveTo(o,c)}e.closePath(),e.fill();for(let i=0;i<14;i++)n(i%3?"#214f54":"#3a796a",20+oe(i)*85,44+oe(i+13)*41,7+oe(i+9)*25,1);n("#548a73",34,49,27,1),n("#407869",73,58,21,1)}else if(s==="leak"){for(let i=0;i<40;i++)e.globalAlpha=.2+oe(i)*.6,n(i%3?"#352d2a":"#806443",oe(i)*128,oe(i+5)*18,1+oe(i+9)*4,19+oe(i+3)*104);e.globalAlpha=1}else{n("#102a2b",0,0,128,128),n("#6a7a67",3,3,122,3),n("#3b5950",3,6,3,119);for(let i=0;i<6;i++)n("#203b36",10,12+i*17,75,11),n("#537766",13,15+i*17,42,2),n("#62dda0",17+i*8,17+i*17,5,3),n("#88a58b",94,14+i*17,18,6),n(i%2?"#edac58":"#74dca0",117,15+i*17,3,3);for(let i=0;i<9;i++)n("#899277",12+i*12,120,5,2)}return xc(t)}const nn=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)},om=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function lm(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createImageData(64,64);for(let r=0;r<64;r++)for(let a=0;a<64;a++){const o=(a-31.5)/31,c=(r-31.5)/31,l=Math.sqrt(o*o+c*c),h=(r*64+a)*4;let d=0,f=[0,0,0];if(s==="shadow")d=Math.max(0,1-l*l)*.88,f=[6,12,18];else if(s==="mist")d=Math.max(0,1-l)*(.45+nn((a>>2)+(r>>2)*16)*.55),f=[168,196,184];else if(s==="blood"){const p=.7+nn((a>>2)+(r>>2)*16)*.28;d=l<p?.9:0,f=nn(a+r*64)>.7?[105,29,43]:[62,17,28],l<.48&&nn(a+r*7)>.77&&(f=[128,43,49])}else d=l<.32?1:l<.7&&nn((a>>1)+(r>>1)*32)>.58?.88:0,f=l<.36?[5,13,19]:l<.5?[93,97,83]:[43,52,51],Math.abs(o+c*.7)<.025&&l>.3&&l<.9&&(d=1,f=[16,25,30]);n.data[h]=f[0],n.data[h+1]=f[1],n.data[h+2]=f[2],n.data[h+3]=d>(om[r%4*4+a%4]+.5)/16?255:0}e.putImageData(n,0,0);const i=new Gi(t);return i.magFilter=i.minFilter=fe,i.generateMipmaps=!1,i.colorSpace=Se,i}class cm{shadows;rain;mist;impacts;blood;object=new be;normal=new G;forward=new G(0,0,1);marks=[];seen=new WeakSet;previous;materials=[];vents=[{x:4,z:-3},{x:-11.65,z:-11},{x:11.65,z:-17},{x:-9.6,z:-38.8},{x:9.6,z:-41}];constructor(t){const e=(r,a=1)=>{const o=new Je({map:lm(r),transparent:a<1,opacity:a,alphaTest:.01,depthWrite:!1,side:We,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return this.materials.push(o),o},n=(r,a,o)=>{const c=new nc(r,a,o);return c.instanceMatrix.setUsage($l),c.frustumCulled=!1,c.count=0,t.add(c),c};this.shadows=n(new Xe(1,1),e("shadow",.38),32),this.blood=n(new Xe(1,1),e("blood"),32),this.impacts=n(new Xe(1,1),e("impact"),64),this.impacts.renderOrder=1,this.blood.renderOrder=1,this.mist=n(new Xe(1,1),e("mist",.2),20);const i=new Je({color:9287348,transparent:!0,opacity:.35,depthWrite:!1});this.materials.push(i),this.rain=n(new ke(.013,.31,.013),i,112)}floor(t,e){return e>-20&&e<4&&Math.abs(t)>10.5?.167:.057}ground(t,e,n,i,r,a,o=this.floor(n,i)){this.object.position.set(n,o,i),this.object.rotation.set(-Math.PI/2,0,0),this.object.scale.set(r,a,1),this.object.updateMatrix(),t.setMatrixAt(e,this.object.matrix)}update(t,e,n,i){this.previous!==t&&(this.marks=[],this.seen=new WeakSet,this.previous=t,this.impacts.count=0);let r=0,a=0;for(const o of t.enemies){const c=o.kind==="brute"?1.05:o.kind==="raptor"?.6:.48;this.ground(this.shadows,r++,o.x,o.z,c*2.4,c*1.7),o.alive||this.ground(this.blood,a++,o.x,o.z,c*2.8,c*2.1,this.floor(o.x,o.z)+.004)}if(t.player.mounted||this.ground(this.shadows,r++,t.mount.x,t.mount.z,2.7,1.65),this.shadows.count=r,this.blood.count=a,this.shadows.instanceMatrix.needsUpdate=this.blood.instanceMatrix.needsUpdate=!0,this.rain.visible=i.quality==="high",this.rain.count=this.rain.visible?112:0,this.rain.visible)for(let o=0;o<this.rain.count;o++){const c=(nn(o+40)+n*(.54+nn(o+53)*.23))%1;this.object.position.set(-11.8+nn(o+7)*23.6,.3+(1-c)*7.5,3-nn(o+29)*22),this.object.rotation.set(0,0,-.13),this.object.scale.set(1,.6+nn(o+8)*.7,1),this.object.updateMatrix(),this.rain.setMatrixAt(o,this.object.matrix)}if(this.rain.instanceMatrix.needsUpdate=!0,this.mist.visible=i.quality==="high",this.mist.count=this.mist.visible?20:0,this.mist.visible)for(let o=0;o<this.mist.count;o++){const c=this.vents[o%this.vents.length],l=(nn(o+10)+n*.22)%1,h=.6+l*.85;this.object.position.set(c.x+Math.sin(o*2.3+n*.6)*l*.35,.18+l*1.35,c.z+Math.cos(o+n*.4)*l*.25),this.object.quaternion.copy(e.quaternion),this.object.scale.set(h,h*1.13,1),this.object.updateMatrix(),this.mist.setMatrixAt(o,this.object.matrix)}this.mist.instanceMatrix.needsUpdate=!0;for(const o of t.effects)o.kind==="spark"&&!this.seen.has(o)&&(this.seen.add(o),this.recordImpact(o));for(let o=0;o<this.marks.length;o++){const c=this.marks[o];this.object.position.copy(c.position),this.object.quaternion.setFromUnitVectors(this.forward,c.normal),this.object.scale.setScalar(c.size),this.object.updateMatrix(),this.impacts.setMatrixAt(o,this.object.matrix)}this.impacts.count=this.marks.length,this.impacts.instanceMatrix.needsUpdate=!0}recordImpact(t){let e=.045,n,i;for(const r of Ce.walls){const a=r.y??0,o=a+r.h,c=[{axis:"x",value:t.x,center:r.x,half:r.w/2},{axis:"z",value:t.z,center:r.z,half:r.d/2}];if(!(t.y<a-.02||t.y>o+.02))for(const l of c){const h=l.axis==="x"?t.z-r.z:t.x-r.x,d=l.axis==="x"?r.d/2:r.w/2;if(Math.abs(h)>d+.015)continue;const f=l.value>=l.center?1:-1,p=l.center+f*l.half,u=Math.abs(l.value-p);u>=e||(e=u,n=new G(t.x,t.y,t.z),n[l.axis]=p+f*.013,this.normal.set(0,0,0),this.normal[l.axis]=f,i=this.normal.clone())}}n&&i&&(this.marks.push({position:n,normal:i,size:.15+nn(n.x+n.z)*.075}),this.marks.length>64&&this.marks.shift())}dispose(){for(const t of[this.shadows,this.rain,this.mist,this.impacts,this.blood])t.removeFromParent(),t.geometry.dispose();for(const t of this.materials)t.map?.dispose(),t.dispose()}}function hm(s){const t=s.mat(5005912),e=s.mat(1716275),n=s.mat(9279361),i=s.mat(7885891),r=s.mat(7496267),a=s.mat(9060163),o=s.box.bind(s),c=(f,p,u,x,m=6)=>{const g=p.clone().sub(f),y=g.length(),w=new Kt(u,u,y,m);w.applyQuaternion(new Ye().setFromUnitVectors(new G(0,1,0),g.normalize()));const v=f.clone().add(p).multiplyScalar(.5);s.addGeometry(w,x,v.x,v.y,v.z)},l=(f,p,u)=>new G(f,p,u),h=f=>{const p=Math.sin(f*127.1+91.7)*43758.5453;return p-Math.floor(p)};o(4.885,1.19,7.7,.045,.075,3.77,r),o(4.885,2.87,7.7,.045,.075,3.77,r);for(const f of[5.83,9.57])o(4.885,2.03,f,.045,1.72,.07,r);const d=[];for(let f=0;f<7;f++){const p=1.8+h(f)*.5,u=7.7+(h(f+10)-.5)*2.8;d.push(l(4.795,p+.125,u)),s.addGeometry(new Kt(.025,.025,.04,6),i,4.8,p+.125,u,0,0,Math.PI/2),o(4.842,p+.005,u-.035,.012,.17,.11,e),o(4.832,p+.035,u-.035,.008,.053,.04,n),o(4.832,p-.025,u-.035,.008,.06,.068,t);for(let x=0;x<3;x++)o(4.832,p-.115+x*.023,u+.028,.008,.009,.095-x*.015,i)}for(const[f,p]of[[0,2],[2,5],[5,1],[1,4],[4,3],[3,6],[6,2]])c(d[f],d[p],.008,a,4);o(2.75,2.6,11.958,2.77,1.84,.045,e),o(2.75,2.6,11.925,.045,1.84,.028,t);for(const f of[1.33,4.17])o(f,2.6,11.907,.09,1.94,.055,r);for(const f of[1.65,3.55])o(2.75,f,11.907,2.94,.09,.055,r);for(let f=0;f<16;f++){const p=1.78+f*.105;o(2.75,p,11.899,2.7,.062,.055,t),o(2.75,p+.028,11.865,2.69,.014,.012,n)}for(const f of[1.96,3.51])o(f,2.57,11.86,.016,1.72,.018,e);c(l(4.24,3.42,11.872),l(4.24,2.58,11.872),.007,n,4),s.addGeometry(new Kt(.035,.035,.08,6),r,4.24,2.55,11.872),s.addGeometry(new Kt(.345,.345,.07,16),t,0,3.33,11.914,Math.PI/2),s.addGeometry(new Kt(.299,.299,.014,16),n,0,3.33,11.868,Math.PI/2);for(let f=0;f<12;f++){const p=f*Math.PI/6;c(l(Math.sin(p)*.245,3.33+Math.cos(p)*.245,11.856),l(Math.sin(p)*.274,3.33+Math.cos(p)*.274,11.856),.009,e,4)}c(l(0,3.33,11.841),l(-.125,3.43,11.841),.014,e,4),c(l(0,3.33,11.838),l(.18,3.405,11.838),.009,e,4);for(const f of[-2.5,-12.8])for(const p of[0,.23]){let u=l(-12.8,6.13,f+p);for(let x=1;x<=12;x++){const m=-12.8+x*25.6/12,g=x/12,y=6.13-Math.sin(g*Math.PI)*1.12,w=l(m,y,f+p);c(u,w,.025,e),u=w}for(const x of[-1,1])o(x*12.81,6.11,f+p,.23,.2,.11,t),s.addGeometry(new Kt(.075,.075,.15,6),n,x*12.68,6.08,f+p,0,0,Math.PI/2)}for(const f of[-1,1])for(const p of[-3.4,-12.2,-16.6]){o(f*12.925,.87,p,.075,1.18,1.82,e);for(const u of[-.89,.89])o(f*12.875,.87,p+u,.035,1.13,.035,t);for(const u of[.33,1.4])o(f*12.875,u,p,.035,.03,1.8,t);for(const u of[-.65,.65])for(const x of[.43,1.3])o(f*12.846,x,p+u,.018,.045,.045,n);o(f*12.854,1.04,p+.6,.045,.26,.08,t),o(f*12.809,1.05,p+.6,.025,.18,.035,n),o(f*12.877,.84,p-.46,.14,.47,.36,t),o(f*12.798,.84,p-.46,.022,.37,.27,e),s.addGeometry(new Kt(.095,.095,.02,12),n,f*12.778,.9,p-.46,0,0,Math.PI/2),o(f*12.758,.9,p-.46,.014,.09,.018,i),o(f*12.761,.695,p-.46,.014,.032,.15,r),c(l(f*12.846,.57,p-.46),l(f*12.846,.21,p-.46),.019,i);for(const u of[.26,.46])o(f*12.81,u,p-.46,.027,.03,.06,n)}o(-6.7,1.26,-34.5,1.94,.12,1.16,e),s.addGeometry(new Kt(.24,.28,1.35,6),r,-6.63,1.49,-34.5,0,0,Math.PI/2),s.addGeometry(new rr(.205,8,4),r,-7.38,1.49,-34.5);for(const f of[-7.1,-6.55,-6.1])o(f,1.704,-34.5,.035,.018,.43,i);for(const f of[-35.045,-33.955]){o(-6.7,1.65,f,1.91,.055,.045,n);for(const p of[-7.59,-5.81])o(p,1.49,f,.045,.35,.045,t)}s.sign("LAZARUS / SPECIMEN 091",-6.7,2.33,-32.565,2.45,.42,Math.PI,"#b7a57b","#253631"),o(-7.5,1.67,-42.58,1.05,.34,.92,t),o(-7.5,1.867,-42.58,1.11,.055,.97,e);for(const f of[-7.91,-7.09]){o(f,1.876,-42.58,.05,.03,.94,n);for(const p of[-42.95,-42.21])o(f,1.66,p,.09,.12,.04,r)}o(-7.5,1.66,-42.095,.3,.035,.028,n),o(-7.5,1.728,-42.083,.07,.07,.018,i),s.sign("BIOLOGICAL TRANSFER / DO NOT OPEN",-9.965,2.48,-43.9,2.23,.52,Math.PI/2,"#b7a57b","#253631"),o(.92,1.385,-39.61,.66,.045,.36,e);for(const f of[.6,1.24])o(f,1.415,-39.61,.025,.055,.36,n);for(const f of[-39.78,-39.44])o(.92,1.415,f,.66,.055,.025,n);for(let f=0;f<3;f++){const p=.75+f*.16;o(p,1.416,-39.62,.017,.018,.2,n,-.17+f*.12),o(p,1.426,-39.695,.038,.01,.055,t,-.17+f*.12)}s.addGeometry(new js(.034,.008,3,8),n,1.105,1.423,-39.565,Math.PI/2),s.addGeometry(new js(.034,.008,3,8),n,1.04,1.423,-39.565,Math.PI/2),c(l(1.045,1.423,-39.595),l(1.1,1.423,-39.726),.007,n,4),c(l(1.1,1.423,-39.595),l(1.045,1.423,-39.726),.007,n,4)}const Be=s=>{const t=Math.sin(s*153.73+12.81)*43857.193;return t-Math.floor(t)};function _c(s,t=!1){const e=new Gi(s);return e.magFilter=e.minFilter=fe,e.colorSpace=Se,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=zi),e}function fm(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i={stucco:["#b3a38c","#978d78","#cabda6","#726c5c"],terracotta:["#784d3d","#98614b","#ac7255","#5a443c"],porcelain:["#ababa0","#888e87","#d0cbb8","#576664"],shutter:["#5a6568","#303e43","#839092","#25333a"],pavement:["#6c6c64","#4f5653","#929082","#353d3c"]}[s];e.fillStyle=i[0],e.fillRect(0,0,128,128);for(let r=0;r<1100;r++)e.fillStyle=i[1+r%3],e.globalAlpha=.16+Be(r+96)*.28,e.fillRect(Math.floor(Be(r)*128),Math.floor(Be(r+13)*128),1+(Be(r+54)*3|0),1+(Be(r+40)*3|0));if(e.globalAlpha=1,s==="terracotta")for(let r=0;r<8;r++)for(let a=-1;a<5;a++){const o=a*32+r%2*16,c=r*16;e.fillStyle="#403c35",e.fillRect(o,c,32,2),e.fillRect(o,c,2,16),e.fillStyle="#b58265",e.fillRect(o+2,c+2,29,1),e.fillStyle="#664632",e.fillRect(o+2,c+14,29,1)}else if(s==="porcelain")for(let r=0;r<128;r+=32)for(let a=0;a<128;a+=32)e.fillStyle="#465b58",e.fillRect(a,r,32,2),e.fillRect(a,r,2,32),e.fillStyle="#e0d8c1",e.fillRect(a+3,r+3,27,1),e.fillRect(a+3,r+3,1,26);else if(s==="shutter"){for(let r=0;r<128;r+=8)e.fillStyle="#25373b",e.fillRect(0,r,128,2),e.fillStyle="#8c9997",e.fillRect(0,r+2,128,1);for(let r=0;r<21;r++)e.fillStyle=r%2?"#605140":"#314044",e.fillRect(Be(r+1)*128|0,Be(r+46)*128|0,1,8+(Be(r+16)*26|0))}else if(s==="pavement")for(let r=0;r<128;r+=32)for(let a=0;a<128;a+=32)e.fillStyle="#343e3d",e.fillRect(a,r,32,2),e.fillRect(a,r,2,32);else{for(let r=0;r<14;r++)e.fillStyle="#595d50",e.globalAlpha=.2,e.fillRect(Be(r+5)*128|0,95+(Be(r+7)*22|0),3,33);e.globalAlpha=1}return _c(t,!0)}function um(s){const t=document.createElement("canvas");t.width=128,t.height=192;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const n=(r,a,o,c,l)=>{e.fillStyle=l,e.fillRect(r,a,o,c)},i=(r,a,o,c)=>{e.font=`bold ${o}px monospace`,e.textAlign="center",e.fillStyle=c,e.fillText(r,64,a)};if(s==="vesper"){n(0,0,128,192,"#c1af84"),n(6,6,116,180,"#3e3839"),n(9,36,110,105,"#6c5148"),n(13,40,104,3,"#ab6f55"),e.fillStyle="#d6ad63",e.beginPath(),e.arc(87,64,21,0,Math.PI*2),e.fill();for(let r=0;r<10;r++){const a=10+r*11,o=22+(Be(r+56)*36|0);n(a,139-o,10,o,r%2?"#393d43":"#48454b");for(let c=142-o;c<133;c+=7)n(a+2,c,2,2,"#bdb487")}n(48,77,28,15,"#161f27"),n(40,89,46,5,"#171e25"),n(51,96,22,21,"#8c765d"),n(55,98,20,5,"#be9b73"),n(58,105,18,3,"#25252c"),n(65,108,9,5,"#25252c"),n(46,119,36,23,"#202732"),n(39,130,49,14,"#202732"),n(47,120,7,23,"#726656"),n(75,123,7,20,"#789591"),i("VESPER",28,20,"#dec79c"),i("MIDNIGHT",163,13,"#e0c097"),i("CASE FILE 091",177,8,"#c19676")}else if(s==="eden"){n(0,0,128,192,"#181c31"),n(5,5,118,182,"#313553");for(let r=48;r<142;r+=7)n(9,r,110,1,r%2?"#675c8b":"#45647c");e.fillStyle="#6b527e",e.beginPath(),e.moveTo(9,47),e.lineTo(62,135),e.lineTo(29,139),e.fill(),e.fillStyle="#547d82",e.beginPath(),e.moveTo(117,47),e.lineTo(66,137),e.lineTo(102,142),e.fill(),n(53,64,19,24,"#b9a182"),n(48,67,7,28,"#2a2539"),n(69,62,8,35,"#2a2539"),n(51,64,23,6,"#282039"),n(56,76,5,2,"#303340"),n(65,76,5,2,"#303340"),n(51,89,23,40,"#482f55"),n(46,106,13,24,"#482f55"),n(72,99,6,26,"#9b897b"),n(60,128,6,19,"#181e2c"),n(70,125,6,22,"#181e2c"),n(77,94,2,55,"#bac3aa"),n(74,90,8,6,"#848c9e"),n(71,148,13,3,"#bac3aa"),i("EDEN",29,26,"#eda7cb"),i("AFTER DARK",46,11,"#8ce6d7"),i("LIVE FROM VESPER",166,9,"#abc8c7"),i("EVERY NIGHT",180,10,"#d59eb8")}else{n(0,0,128,192,"#b8c5b0"),n(6,6,116,180,"#203a42"),n(10,11,108,31,"#315761"),i("HELIX",31,19,"#d8dbc2"),i("A BETTER",60,12,"#b1dad0"),i("TOMORROW",76,12,"#b1dad0");for(let r=0;r<14;r++){const a=83+r*4,o=25+Math.sin(r*.52)*9,c=102-Math.sin(r*.52)*9;n(o,a,3,4,"#7dc7aa"),n(c,a,3,4,"#789b91"),r%2===0&&n(o+3,a+1,c-o-3,1,"#446e6c")}n(45,107,40,14,"#8dba9d"),n(78,99,12,16,"#8dba9d"),n(85,96,18,9,"#8dba9d"),n(30,112,19,5,"#8dba9d"),n(22,109,13,4,"#8dba9d"),n(46,119,7,15,"#8dba9d"),n(73,118,7,16,"#8dba9d"),n(96,97,3,2,"#182d38"),n(85,106,13,2,"#182d38"),i("GENETICS FOR LIFE",157,9,"#d6d1a5"),i("TRUST THE SCIENCE",174,9,"#95bab1")}for(let r=0;r<270;r++)e.fillStyle=r%2?"#ded8be":"#171c29",e.globalAlpha=.05+Be(r)*.13,e.fillRect(Be(r+16)*128|0,Be(r+77)*192|0,1+(Be(r+5)*3|0),1);return e.globalAlpha=1,_c(t)}const ln=s=>{const t=Math.sin(s*137.63+9.31)*47815.129;return t-Math.floor(t)};function dm(s){const t=s.box.bind(s),e=(O,Q=16777215)=>new Xs({map:fm(O),color:Q}),n=e("stucco"),i=e("terracotta"),r=e("porcelain"),a=e("shutter"),o=e("pavement"),c=s.mat(13678734),l=s.mat(13552823),h=s.mat(10114878),d=s.mat(6698568),f=s.mat(8290403),p=s.mat(5325407),u=s.mat(5731207),x=s.mat(3831669),m=s.mat(6714745),g=s.mat(2503483),y=s.mat(1318955),w=s.mat(1123892),v=s.mat(3946546,1971720),b=s.mat(2374725,1059377),E=s.basic(16760677),R=s.basic(15761066),M=s.basic(7653083),T=s.basic(9556913),C=s.basic(12168313),I=s.basic(6524056),P=new Map,D=(O,Q,N,$=2.1,st=1.38,lt=2.08)=>{let at=P.get(O);at||(at=new Je({map:um(O)}),P.set(O,at)),t(Q*12.785,$,N,.08,lt+.16,st+.16,g),s.addGeometry(new Xe(st,lt),at,Q*12.732,$,N,0,-Q*Math.PI/2);for(const Tt of[-st/2-.035,st/2+.035])t(Q*12.719,$,N+Tt,.022,lt+.1,.04,m)},L=(O,Q,N,$,st,lt=.14,at=.18)=>t(O*12.8,Q,N,at,lt,$,st),U=(O,Q,N,$)=>{t(O*12.8,N/2,Q,.22,N,.24,$),t(O*12.74,.29,Q,.33,.35,.42,g),t(O*12.72,N-.2,Q,.37,.25,.42,$),t(O*12.691,N-.05,Q,.44,.08,.48,l)},q=(O,Q,N,$,st,lt=!1)=>{t(O*12.856,2.22,Q,.028,2.2,N,$);for(const Dt of[-N/2-.065,N/2+.065])t(O*12.746,2.22,Q+Dt,.15,2.2+.22,.13,g);for(const Dt of[1.07,3.37])t(O*12.735,Dt,Q,.17,.13,N+.25,l);t(O*12.746,.89,Q,.13,.19,N+.23,g),t(O*12.817,1.39,Q,.027,.28,N-.27,st),t(O*12.789,1.57,Q,.04,.045,N-.21,c);for(let Dt=0;Dt<4;Dt++){const Ut=Q-N*.35+Dt*N*.23;t(O*12.805,2.08,Ut,.033,.45,.17,Dt%2?d:f),t(O*12.779,2.36,Ut,.026,.052,.24,st)}if(t(O*12.807,2.9,Q,.045,.037,N-.3,st),!lt){for(let Dt=1;Dt<3;Dt++)t(O*12.701,2.22,Q-N/2+Dt*N/3,.055,2.2,.045,m);for(let Dt=0;Dt<2;Dt++)t(O*12.695,2.8-Dt*.12,Q+.3+Dt*.2,.02,.08,.41-Dt*.1,st)}},k=(O,Q,N,$,st=6.55)=>{L(O,st-.25,Q,N,$,.24,.34),L(O,st,Q,N+.18,l,.14,.45),L(O,st+.12,Q,N+.27,g,.1,.48);for(let lt=-N/2+.27;lt<N/2;lt+=.68)t(O*12.685,st-.49,Q+lt,.22,.24,.13,$)},J=(O,Q,N,$,st)=>{t(O*12.39,3.85,Q,1.13,.1,N,g);for(let lt=0;lt<Math.round(N/.35);lt++)t(O*12.39,3.923,Q-N/2+.175+lt*.35,1.14,.024,.32,lt%2?st:$);t(O*11.82,3.65,Q,.065,.35,N,$);for(let lt=-N/2+.2;lt<N/2;lt+=.7)t(O*11.784,3.66,Q+lt,.02,.035,.26,st)},Y=(O,Q,N,$,st,lt,at=4.6,Tt=.87)=>{t(O*12.735,at,Q,.29,Tt+.24,$+.28,g),t(O*12.566,at+Tt/2+.084,Q,.065,.048,$+.21,l),s.sign(N,O*12.553,at,Q,$,Tt,-O*Math.PI/2,st,lt)},X=(O,Q,N,$,st,lt=1.38,at=2.1)=>{const Tt=O*11.77,Dt=4.8;t(O*12.25,6.01,Q,1.35,.1,.11,g),t(O*12.88,5.75,Q,.14,.65,.15,m),t(Tt,Dt,Q,lt+.15,at+.15,.18,g),t(Tt,Dt+at/2+.1,Q,lt+.25,.06,.24,l),s.sign(N,Tt,Dt,Q+.105,lt,at,0,$,st),s.sign(N,Tt,Dt,Q-.105,lt,at,Math.PI,$,st)};t(-12.947,3.22,.1,.065,6.44,6.5,n),t(-12.925,.61,.1,.06,1.22,6.5,r),t(-12.924,5.55,.1,.065,1.1,6.5,i);for(const O of[-3.23,3.35])U(-1,O,6.4,c);L(-1,1.12,.1,6.5,h,.1),L(-1,3.48,.1,6.5,c,.18,.24),q(-1,-1.7,3.2,v,E,!0),t(-12.825,1.92,1.71,.075,2.56,1.26,d),t(-12.776,2.38,1.71,.025,1.43,.86,v),t(-12.75,1.37,1.28,.035,.22,.047,E);for(const O of[1.045,2.375])t(-12.753,1.91,O,.11,2.68,.12,c);L(-1,3.3,1.71,1.53,c,.12),Y(-1,.05,"VESPER / NIGHT DINER",5.65,"#ffcc79","#442b30"),J(-1,.03,6.2,h,c),k(-1,.1,6.5,h,6.49),X(-1,2.57,"V / 24 H","#ffd187","#47302e",1.05,1.88);for(const O of[-1.7,1.65]){t(-12.885,5.47,O,.08,1.18,1.23,w);for(const Q of[-.66,.66])t(-12.786,5.47,O+Q,.14,1.29,.12,c);for(const Q of[4.85,6.1])L(-1,Q,O,1.39,c,.095,.26);t(-12.778,5.47,O,.065,1.18,.055,g),t(-12.774,5.47,O,.065,.055,1.2,g);for(const Q of[-.31,.31])t(-12.844,5.47,O+Q,.016,1.02,.5,C)}t(-12.936,4.84,-7,.078,3.1,3.89,d);for(const O of[-5.02,-8.98])U(-1,O,6.38,h);L(-1,3.36,-7,3.89,g,.17,.34),Y(-1,-7,"LAST CHANCE",3.46,"#ffe0a1","#592d3c",4.43,.76),k(-1,-7,3.99,d,6.43);for(const O of[-5.4,-8.59])t(-12.72,2.42,O,.16,.57,.17,g),t(-12.62,2.42,O,.05,.4,.09,E),t(-12.64,2.76,O,.11,.11,.28,c);X(-1,-8.92,"LAST / CHANCE","#f8ca89","#432434",1.38,1.75);for(let O=0;O<6;O++)t(-12.762,5.55,-8.45+O*.58,.045,.055,.19,E);t(-12.946,3.48,-13.77,.069,6.96,7.55,n),t(-12.919,1.07,-13.77,.04,2.14,7.55,i);for(const O of[-9.94,-13.65,-17.58])U(-1,O,6.9,h);t(-12.845,2.22,-15.56,.068,2.14,2.99,a);for(const O of[-1.53,1.53])t(-12.778,2.22,-15.56+O,.13,2.33,.14,d);D("vesper",-1,-11.65,2.17,2.16,2.99),Y(-1,-13.77,"VESPER PICTURE HOUSE",6.9,"#e3c389","#332b30",4.6,.77),J(-1,-13.77,7.1,d,c),k(-1,-13.77,7.55,h,6.95);for(const O of[-11.72,-15.48]){t(-12.875,5.84,O,.08,1.15,2.47,w);for(let Q=0;Q<4;Q++)t(-12.78,5.84,O-1.19+Q*.79,.12,1.31,.1,c);for(const Q of[5.19,6.49])L(-1,Q,O,2.65,c,.1,.26)}t(-12.928,3.41,-18.76,.056,6.78,2.26,i),L(-1,6.72,-18.76,2.4,g,.24,.36),t(12.946,3.35,-.23,.068,6.7,8.35,n),t(12.925,.55,-.23,.053,1.1,8.35,u);for(const O of[3.96,-4.42])U(1,O,6.64,l);q(1,.82,3.17,b,M),t(12.82,1.94,3.07,.11,2.6,1.27,g),t(12.755,2.19,3.07,.025,1.76,.83,b);for(const O of[2.39,3.75])t(12.725,1.96,O,.115,2.72,.12,l);t(12.69,1.36,2.69,.046,.2,.05,M),D("eden",1,-2.23,2.2,1.55,2.35),Y(1,-.23,"EDEN / SOUND & VISION",7.47,"#a6ddec","#2d344c",4.66,.85),J(1,-.2,8.1,u,l),k(1,-.23,8.35,u,6.74);for(const O of[1.29,-2.29]){t(12.859,5.73,O,.084,1.03,1.89,w);for(const Q of[-.98,.98])t(12.755,5.73,O+Q,.13,1.23,.13,l);for(const Q of[5.13,6.34])L(1,Q,O,2.14,l,.1,.28);t(12.777,5.73,O,.09,1.09,.07,g),t(12.82,5.73,O-.46,.028,.93,.83,I)}t(12.945,3.55,-7.84,.07,7.1,6.71,p),t(12.926,.57,-7.84,.048,1.14,6.71,i);for(const O of[-4.47,-11.23])U(1,O,7.1,u);q(1,-4.5,3.2,w,R,!0),t(12.829,1.91,-8.8,.08,2.54,1.88,d);for(const O of[-9.79,-7.81])t(12.75,1.91,O,.12,2.73,.13,u);for(let O=0;O<6;O++)t(12.779,.88+O*.31,-8.8,.025,.09,1.79,g);D("eden",1,-10.28,2.23,1.14,2.25),Y(1,-7.85,"EDEN / AFTER DARK",5.75,"#ff9ec4","#312039",4.65,.95),L(1,3.44,-7.84,6.73,y,.17,.32),k(1,-7.84,6.71,u,7.11);for(const O of[-5.01,-10.57])t(12.75,4.49,O,.22,1.67,.23,g),t(12.619,4.49,O,.045,1.49,.074,R);X(1,-7.24,"EDEN / ★","#ffb4d3","#30203a",1.38,2.26);for(const O of[-5.97,-9.85]){t(12.852,6.21,O,.078,1.14,1.63,w);for(const Q of[-.86,.86])t(12.75,6.21,O+Q,.13,1.28,.09,u);t(12.745,6.21,O,.14,1.19,.057,g);for(const Q of[5.55,6.83])L(1,Q,O,1.79,l,.075,.24)}t(12.945,3.64,-15.63,.07,7.28,8.17,r),t(12.921,.63,-15.63,.047,1.26,8.17,x);for(const O of[-11.51,-15.69,-19.75])U(1,O,7.26,l);t(12.825,2.31,-17.55,.084,2.45,3.15,a);for(const O of[-19.18,-15.92])t(12.743,2.29,O,.12,2.6,.13,x);for(const O of[1.03,3.6])L(1,O,-17.55,3.5,x,.13,.27);D("helix",1,-13.68,2.34,2.1,2.9),Y(1,-15.62,"HELIX / PUBLIC HEALTH",7.39,"#b9e2d1","#28484c",4.76,.89),L(1,3.78,-15.63,8.1,x,.24,.32),k(1,-15.63,8.17,x,7.32);for(const O of[-13.36,-17.36]){t(12.852,6.16,O,.081,1.29,2.72,w);for(let Q=0;Q<4;Q++)t(12.749,6.16,O-1.42+Q*.94,.12,1.39,.073,l);for(const Q of[5.44,6.87])L(1,Q,O,2.93,l,.097,.28);for(const Q of[-.91,0,.91])t(12.82,6.16,O+Q,.028,1.17,.77,I)}X(1,-17.52,"HELIX / +","#a0ead0","#223f45",1.03,1.81);for(const O of[-1,1])for(let Q=0;Q<3;Q++){const N=O<0?[.4,-7,-14.1][Q]:[-.15,-7.85,-15.63][Q],$=O<0?[6,3.9,7.2][Q]:[7.9,6.4,7.8][Q],st=O<0?6.8+Q*.43:7.4+(2-Q)*.31,lt=Q===0?i:Q===1?O<0?d:u:n;t(O*13.16,st+1.4,N,.63,2.8,$,lt),L(O,st+2.94,N,$+.21,g,.25,.31);for(let at=0;at<Math.floor($/1.65);at++){const Tt=N-$/2+1+at*1.65;t(O*12.79,st+1.35,Tt,.14,1.6,1.02,g),t(O*12.705,st+1.35,Tt,.03,1.4,.83,(at+Q)%3===0?C:w),t(O*12.68,st+1.35,Tt,.04,1.51,.046,m),t(O*12.675,st+1.35,Tt,.04,.045,.97,m),t(O*12.68,st+.5,Tt,.2,.11,1.17,l)}Q===0&&(t(O*13.35,st+3.72,N,1.1,1.25,1.6,g),t(O*13.35,st+4.36,N,1.18,.12,1.75,m))}for(const O of[-1,1]){t(O*8.84,2.8,3.658,5.85,5.3,.08,O<0?i:n);for(const N of[O*5.86,O*11.86])t(N,2.8,3.581,.21,5.3,.22,c);t(O*8.83,5.41,3.573,6.11,.19,.26,g);const Q=O*8.86;t(Q,2.9,3.601,3.79,1.8,.045,w);for(let N=0;N<4;N++)t(Q-1.89+N*1.26,2.9,3.556,.07,1.95,.08,c);for(const N of[1.94,3.85])t(Q,N,3.54,3.98,.09,.18,c);t(O*8.24,3.11,-19.562,11.13,5.84,.09,g),t(O*8.24,1.02,-19.483,11.14,1.04,.07,r),t(O*8.24,5.82,-19.473,11.22,.18,.31,l);for(let N=0;N<3;N++){const $=O*(3.88+N*3.42);t($,3.11,-19.438,.17,5.6,.22,m),t($,4.48,-19.298,.068,1.57,.04,T),t($,1.44,-19.288,.06,.8,.04,T)}t(O*8.23,3.32,-19.437,10.89,1.28,.048,w);for(let N=0;N<8;N++)t(O*8.23-5.46+N*1.56,3.32,-19.399,.062,1.43,.065,m)}for(const O of[-1,1]){t(O*12.06,.147,-8,1.44,.014,23.7,o);for(let Q=3.58;Q>-19.5;Q-=1.34)t(O*11.08,.155,Q,.12,.022,1.18,l)}const j=s.mat(2239289),vt=s.mat(2701380),bt=s.mat(1450798),Jt=[];for(const O of[-1,1])for(let Q=0;Q<5;Q++)Jt.push({x:O*(24+Q%2*7),z:12-Q*11,w:5.5+ln(Q+60)*3.5,d:6.5+ln(Q+93)*3,h:20+ln(Q+40)*22,seed:100+Q+O*11});for(let O=0;O<7;O++)Jt.push({x:-33+O*11,z:-57-O%2*7,w:7+ln(O+7)*3,d:7,h:23+ln(O+69)*27,seed:200+O});for(let O=0;O<5;O++)Jt.push({x:-26+O*13,z:24+O%2*7,w:6+ln(O+88)*4,d:6,h:21+ln(O+80)*18,seed:300+O});for(const O of Jt){const{x:Q,z:N,w:$,d:st,h:lt,seed:at}=O;t(Q,lt/2,N,$,lt,st,at%2?vt:j),t(Q,lt+.17,N,$+.28,.34,st+.28,bt),t(Q+$*.22,lt+.6,N-st*.2,$*.3,.78,st*.35,g);for(const Tt of[-1,1])for(let Dt=4.8;Dt<lt-1;Dt+=2.4){for(let Ut=0;Ut<Math.floor($/1.45);Ut++){const Vt=Q-$/2+.72+Ut*1.45,$t=at*31+Math.round(Dt)*17+Ut*5+Tt;ln($t)<.46||t(Vt,Dt,N+Tt*(st/2+.015),.49,.94,.025,ln($t+67)>.5?C:I)}for(let Ut=0;Ut<Math.floor(st/1.7);Ut++){const Vt=N-st/2+.77+Ut*1.7,$t=at*43+Math.round(Dt)*21+Ut*7+Tt;ln($t)<.5||t(Q+Tt*($/2+.015),Dt,Vt,.025,.94,.48,ln($t+25)>.53?C:I)}}at%3===0&&(t(Q,lt+2.4,N,.08,4.4,.08,m),t(Q,lt+4.63,N,.1,.14,.1,R))}}function pm(s,t){const e=document.createElement("canvas");e.width=e.height=s==="raptor"?128:64;const n=e.width,i=e.getContext("2d"),a={raptor:{6322507:7959368,10202996:12956043,9798226:10521179,12889715:13745555},soldier:{10587248:12885896,4809334:8752285,2108985:3161163,8426382:11909564},mutant:{8820318:11707542,5135683:9273968,7897973:7568768},brute:{10121060:11172453,8075325:12036749,7897973:7827305}}[s][t]??t,o=a>>16&255,c=a>>8&255,l=a&255,h=(u,x=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(o*u+x)))},${Math.max(0,Math.min(255,Math.round(c*u+x)))},${Math.max(0,Math.min(255,Math.round(l*u+x)))})`,d=u=>{const x=Math.sin(u*127.13+t*.0017)*43758.5453;return x-Math.floor(x)},f=(u,x,m,g,y)=>{i.fillStyle=y,i.fillRect(u,x,m,g)};i.fillStyle=h(s==="raptor"?.94:1),i.fillRect(0,0,n,n);for(let u=0;u<(s==="raptor"?1300:340);u++)f(Math.floor(d(u)*n),Math.floor(d(u+431)*n),1+u%2,1,h(.86+d(u+233)*.23));if(s==="raptor")if(t===10202996||t===12889715)for(let x=0;x<n;x+=7){f(0,x,n,1,h(.74)),f(0,x+1,n,1,h(1.08));for(let m=0;m<n;m+=15)f(m+x%3,x+2,1,4,h(.87))}else{for(let x=0;x<18;x++){const m=d(x+1401)*n|0,g=d(x+1481)*n|0,y=10+x%13,w=8+x%9;f(m,g,y,w,x%3===0?"#56523a":h(1.16,3)),f(m+3,g-2,Math.max(3,y-6),3,x%3===0?"#615a3e":h(1.1,2))}for(let x=0;x<95;x++){const m=d(x+341)*n|0,g=d(x+761)*n|0,y=4+x%9,w=3+x%6;f(m,g,y,w,h(x%3===0?.79:.99)),f(m+2,g-1,y-3,1,h(x%3===0?.84:1.02))}for(let x=0;x<19;x++)for(let m=-1;m<19;m++){const g=x*29+m+73,y=m*7+x%2*3+(d(g)*3|0),w=x*7+(d(g+313)*3|0),v=3+g%3,b=3+g%2,E=.88+d(g+97)*.13;f(y,w,v,1,h(.77+d(g+43)*.07)),f(y-1,w+1,1,b,h(.81)),f(y,w+1,v,b,h(E)),f(y+1,w+1,v-2,1,h(1.05)),f(y+1,w+b+1,v-1,1,h(.84))}for(let x=0;x<64;x++)f(d(x+911)*n|0,d(x+721)*n|0,1,2,h(1.08));for(let x=0;x<3;x++)for(let m=0;m<13;m++){const g=58+x*4+Math.floor(m*.25);f(g-1,69+m,1,1,"#4e4332"),f(g,69+m,1,1,h(1.25,5))}}else if(s==="soldier")if(t===10587248){for(let u=0;u<50;u++)f(d(u+1001)*64|0,d(u+1071)*64|0,2,1,h(.88));for(let u=16;u<40;u++){const x=21+(u%7===0?1:0);f(x,u,1,1,"#835e55"),u%5===0&&f(x+1,u,2,1,h(1.16))}}else if(t===2108985){for(let u=1;u<64;u+=4)for(let x=u%8;x<64;x+=4)f(x,u,1,2,h(1.3));for(const u of[16,47])f(0,u,64,1,h(.55)),f(0,u+1,64,1,h(1.35))}else{f(3,3,58,1,h(1.48)),f(3,4,1,56,h(1.39)),f(3,59,58,2,h(.48)),f(60,4,2,56,h(.6)),f(13,12,39,1,h(.62)),f(13,13,1,27,h(.62)),f(14,40,38,1,h(1.23));for(const u of[7,55])for(const x of[7,55])f(u,x,3,3,h(.49)),f(u,x,1,1,h(1.8));for(let u=0;u<16;u++){const x=d(u+61)*59|0,m=d(u+93)*62|0;f(x,m,2+u%4,1,h(1.5)),f(x,m+1,1,1,h(.58))}f(7,43,49,7,"#673d46"),f(7,42,49,1,"#9e6166");for(let u=0;u<3;u++)f(19+u*7,23,4,2+u%2,"#c6af7c");f(38,33,8,5,h(.63)),f(39,34,5,1,h(1.45)),f(39,36,3,1,h(1.45));for(let u=0;u<6;u++)f(48,18+u*3,7,1,h(.48))}else if(t===8820318||t===10121060){for(let x=0;x<75;x++){const m=d(x+17)*64|0,g=d(x+223)*64|0,y=2+x%4,w=2+x%3;f(m,g,y,w,h(x%3===0?.72:1.17)),f(m+1,g+1,Math.max(1,y-2),1,h(x%3===0?.8:1.24))}for(let x=0;x<8;x++){const m=d(x+1207)*55|0,g=d(x+1229)*56|0,y=3+x%6,w=3+x%4;f(m,g,y,w,s==="brute"?"#774e40":"#827569"),f(m+1,g+1,Math.max(1,y-2),Math.max(1,w-2),s==="brute"?"#674136":"#714d43"),f(m,g-1,y-1,1,h(1.18))}for(let x=0;x<3;x++)for(let m=0;m<23;m++){const g=9+x*19+Math.floor(Math.sin(m*.18)*2);f(g,7+m,1,1,"#664a3c"),m%5===0&&(f(g-2,7+m,5,1,h(.59)),f(g-2,6+m,1,1,h(1.3)))}for(let x=0;x<12;x++)f(d(x+1101)*64|0,d(x+1131)*64|0,1,3,s==="brute"?"#623e32":"#8e6254")}else{f(3,3,58,2,h(1.38)),f(3,5,2,54,h(1.18)),f(59,4,2,57,h(.54)),f(4,59,55,2,h(.5));for(let x=0;x<50;x++){const m=d(x+79)*64|0,g=d(x+91)*64|0;f(m,g,2+x%4,1+x%2,x%5===0?"#805947":h(x%3===0?.52:1.24))}for(let x=8;x<57;x++){const m=23+Math.floor(Math.sin(x*.2)*4);f(m,x,1,1,h(.45)),x%7<3&&f(m+1,x,1,1,h(1.3))}for(const x of[7,54])for(const m of[7,54])f(x,m,3,3,h(.44)),f(x,m,1,1,h(1.65));if(s==="brute")for(let x=8;x<57;x+=8)f(x,44,4,6,"#967549"),f(x+4,44,3,6,"#463b32");else{for(let x=0;x<4;x++)f(41,15+x*4,12,2,h(.57));f(8,47,15,4,"#648879"),f(8,46,15,1,"#97a997")}}const p=new Gi(e);return p.magFilter=fe,p.minFilter=fe,p.wrapS=p.wrapT=zi,p.generateMipmaps=!1,p.colorSpace=Se,p}const vc=Math.PI*2,Di=(s,t,e)=>Math.max(t,Math.min(e,s)),Qi=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e*n)),mm=(s,t)=>Math.atan2(Math.sin(t-s),Math.cos(t-s)),qr=new G(0,-1,0),gm=new G(0,0,-1),xm=new G(1,0,0),ji=new G,ts=new G,si=new G,Yr=new G,Sl=new G,bl=new G,es=new Ye,$r=new Ye,Kr=new Ye,Zr=new Ye,yl=new Ye,El=new Ye;function Mc(s){for(const e of[...s.children])e instanceof Pe&&Mc(e);const t=new Map;for(const e of[...s.children])if(e instanceof de&&!Array.isArray(e.material)){const n=t.get(e.material)??[];n.push(e),t.set(e.material,n)}for(const[e,n]of t){if(n.length<2)continue;const i=n.map(a=>(a.updateMatrix(),a.geometry.clone().applyMatrix4(a.matrix))),r=gc(i,!1);if(r){for(const a of n)s.remove(a),a.geometry.dispose();s.add(new de(r,e))}for(const a of i)a.dispose()}}function Tl(s,t,e){const n=new Pe,i=new Pe,r=new Pe,a=new Pe,o=new Pe,c=new Pe,l=new Pe;n.add(i),i.add(r),r.add(a),a.add(o),o.add(c),c.add(l);const h={root:n,model:i,pelvis:r,chest:a,neck:o,head:c,jaw:l,legs:[],arms:[],tail:[],kind:s,mount:t,distance:0,heading:0,previousX:0,previousZ:0,previousTime:0,previousAlive:!0,initialized:!1,walkStarted:!1,motion:0,death:0,attackPose:0,turn:0,hipHeight:s==="raptor"?1.02:1.025,stride:s==="raptor"?1.65:s==="brute"?1.3:1.24};n.name=`creature-${s}${t?"-strider":""}`,i.name="creature-model",r.name="pelvis",a.name="chest",o.name="neck",c.name="head",l.name="jaw",n.scale.setScalar(t?1.45:s==="brute"?1.47:s==="soldier"?.96:1),r.position.y=h.hipHeight;const d=(C,I,P,D=[0,0,0],L=0)=>{const U=new de(I,e(P,L));return U.position.set(...D),C.add(U),U},f=(C,I,P,D,L=0)=>d(C,new ke(...P),D,I,L),p=(C,I,P,D)=>{const L=d(C,new rr(1,8,5),D,I);return L.scale.set(...P),L},u=(C,I,P,D,L,U,q=7)=>{const k=new G(...I),J=new G(...P),Y=J.sub(k),X=d(C,new Kt(L,D,Y.length(),q,1),U);return X.position.copy(k).addScaledVector(Y,.5),X.quaternion.setFromUnitVectors(new G(0,1,0),Y.normalize()),X},x=(C,I,P,D,L,U=0,q=0)=>{const k=d(C,new sr(P,D,5),L,I);return k.rotation.set(U,0,q),k},m=(C,I)=>{const P=new Pe;return P.position.set(...I),C.add(P),P},g=(C,I,P)=>{const D=[],L=[],U=[];for(let k=0;k<I.length;k++)for(let J=0;J<8;J++){const Y=J*vc/8,X=I[k];D.push(Math.cos(Y)*X.x,X.y+Math.sin(Y)*X.h,X.z),L.push(J/8,k/(I.length-1))}for(let k=0;k<I.length-1;k++)for(let J=0;J<8;J++){const Y=k*8+J,X=k*8+(J+1)%8,j=Y+8,vt=X+8;U.push(Y,j,X,X,j,vt)}for(let k=1;k<7;k++){U.push(0,k,k+1);const J=(I.length-1)*8;U.push(J,J+k+1,J+k)}const q=new Ge;return q.setAttribute("position",new me(D,3)),q.setAttribute("uv",new me(L,2)),q.setIndex(U),q.computeVertexNormals(),d(C,q,P)},y=s==="raptor",w=s==="soldier",v=s==="brute",b=y?t?9798226:6322507:w?10587248:v?10121060:8820318,E=y?t?12889715:10202996:b,R=w?4809334:v?8075325:5135683,M=y?t?5325619:4209964:w?2108985:v?4927529:4470319,T=y?14800045:w?8426382:14536884;if(y){p(r,[0,.13,.13],[.32,.3,.6],b),p(a,[0,.09,-.34],[.265,.26,.39],b),p(a,[0,-.035,-.24],[.235,.135,.45],E),p(r,[0,-.015,.17],[.29,.17,.36],E),o.position.set(0,.13,-.5),u(o,[0,0,0],[0,.27,-.15],.16,.115,b),u(o,[0,.25,-.14],[0,.32,-.31],.118,.1,b),c.position.set(0,.32,-.3),g(c,[{z:.13,y:0,x:.14,h:.135},{z:-.06,y:.035,x:.172,h:.15},{z:-.23,y:.015,x:.128,h:.095},{z:-.52,y:-.014,x:.092,h:.074},{z:-.62,y:-.017,x:.076,h:.06}],b),p(c,[0,-.093,-.34],[.098,.032,.31],M),l.position.set(0,-.073,.08),g(l,[{z:0,y:-.035,x:.115,h:.036},{z:-.24,y:-.061,x:.102,h:.035},{z:-.6,y:-.056,x:.071,h:.028},{z:-.69,y:-.049,x:.05,h:.025}],E);for(const D of[-1,1]){const L=p(c,[D*.146,.092,-.085],[.052,.035,.12],b);L.rotation.z=D*.24,p(c,[D*.16,.055,-.128],[.018,.032,.036],M),f(c,[D*.172,.056,-.135],[.009,.018,.029],t?15253360:15710561,4334592),f(c,[D*.179,.056,-.141],[.004,.018,.008],M),p(c,[D*.059,.01,-.586],[.017,.012,.022],M);for(let j=0;j<6;j++){const vt=-.2-j*.064,bt=D*(.102-j*.006);x(c,[bt,-.105,vt],.015,.063+j%2*.012,T,Math.PI),x(l,[bt*.93,-.012,vt-.06],.013,.049,T)}const U=m(r,[D*.267,0,.19]),q=m(U,[0,-.5,0]),k=m(q,[0,-.55,0]),J=m(k,[0,-.28,0]);p(U,[0,-.145,0],[.19,.265,.23],b),u(U,[0,-.05,0],[0,-.5,0],.15,.075,b),p(q,[0,-.015,0],[.079,.085,.085],E),u(q,[0,-.02,0],[0,-.55,0],.076,.039,E),u(k,[0,0,0],[0,-.28,0],.04,.033,b),p(J,[0,.035,-.08],[.093,.055,.13],b);for(let j=-1;j<=1;j++){const vt=j*.056;u(J,[vt,.035,-.035],[vt*1.35,.022,-.225],.028,.019,b,5),u(J,[vt*1.35,.023,-.22],[vt*1.48,.024,-.295],.026,.002,T,5)}u(J,[-D*.08,.068,-.025],[-D*.104,.128,-.12],.031,.023,b,5),u(J,[-D*.104,.135,-.12],[-D*.106,.152,-.2],.037,.026,T,5),u(J,[-D*.106,.152,-.2],[-D*.105,.073,-.254],.026,.002,T,5),h.legs.push({hip:U,knee:q,hock:k,foot:J,side:D,upper:.5,lower:.55,metatarsal:.28,anchor:new Ft,swingStart:new Ft,worldFoot:new Ft,height:0,previous:0,initialized:!1});const Y=m(a,[D*.23,.055,-.415]),X=m(Y,[0,-.22,0]);u(Y,[0,0,0],[0,-.22,0],.052,.036,b),u(X,[0,0,0],[0,-.21,0],.036,.028,b);for(let j=-1;j<=1;j++)u(X,[j*.029,-.205,0],[j*.038,-.265,-.08],.016,.011,b,5),u(X,[j*.038,-.265,-.08],[j*.04,-.29,-.11],.018,.001,T,5);h.arms.push({upper:Y,lower:X,side:D});for(let j=0;j<5;j++){const vt=p(r,[D*.293,.2-j*.015,-.28+j*.18],[.027,.13,.053],M);vt.rotation.z=D*.28}}let C=m(r,[0,.14,.62]);const I=[.48,.47,.46,.45],P=[.164,.123,.079,.04,.008];for(let D=0;D<I.length;D++)h.tail.push(C),u(C,[0,0,0],[0,-.025,I[D]],P[D],P[D+1],b,8),C=m(C,[0,-.025,I[D]]);if(t){f(r,[0,.41,.08],[.51,.1,.53],4274220),f(r,[0,.48,.3],[.52,.18,.085],6574141);for(const D of[-1,1])f(r,[D*.325,.12,.075],[.045,.45,.16],4274220),f(r,[D*.385,-.085,.075],[.13,.045,.21],T),u(a,[D*.12,.39,-.68],[D*.24,.3,-.1],.012,.012,4274220,5)}}else{const C=v?.46:.31,I=v?.51:.345;if(p(r,[0,.025,.04],[C*.88,.19,.225],w?M:b),p(a,[0,.26,.03],[C*.8,.29,.205],b),p(a,[0,.49,.025],[C,.27,.235],b),u(a,[0,.58,0],[0,v?.66:w?.68:.75,-.015],.12,.102,b),o.position.set(0,v?.64:w?.65:.73,-.018),c.position.set(0,v||w?.1:.14,0),p(c,[0,.025,0],[.145,.19,.159],b),p(c,[0,-.092,-.025],[.123,.1,.13],b),l.position.set(0,-.062,-.012),w){for(const P of[-1,1])p(a,[P*.135,.47,-.174],[.164,.219,.1],R),f(a,[P*.165,.098,-.185],[.14,.19,.085],R),f(r,[P*.245,.015,-.185],[.13,.16,.1],M);for(let P=0;P<3;P++)f(a,[0,.28-P*.065,-.206],[.32,.045,.065],R);f(a,[0,.44,-.266],[.065,.22,.046],T),f(r,[0,.015,-.03],[.59,.07,.39],M),f(r,[0,.025,-.23],[.082,.06,.024],T),f(a,[0,.38,.258],[.31,.43,.17],M),f(a,[0,.48,.356],[.2,.24,.042],R),p(c,[0,.06,.007],[.18,.2,.187],R),f(c,[0,.014,-.16],[.255,.065,.026],M),f(c,[0,.021,-.18],[.216,.024,.01],15054443,5584659),f(c,[.073,.021,-.189],[.036,.029,.009],16766602,5849113),p(c,[0,-.086,-.134],[.104,.06,.075],M);for(const P of[-1,1])u(c,[P*.078,-.087,-.149],[P*.078,-.087,-.21],.033,.031,T),p(c,[P*.179,.03,.007],[.025,.072,.064],M);u(c,[.15,.15,.034],[.15,.32,.034],.009,.007,M,5),f(a,[-.136,.51,-.268],[.052,.053,.012],15844489)}else{p(a,[-C*.38,.5,-.126],[C*.67,.22,.17],b),p(a,[C*.45,.36,-.135],[C*.44,.205,.124],R);for(let P=0;P<4;P++)for(const D of[-1,1])u(a,[D*.025,.52-P*.069,-.236],[D*(C*.75-P*.018),.48-P*.064,-.199],.018,.013,T,5);u(a,[0,.51,-.246],[0,.245,-.225],.023,.018,M,5),f(a,[C*.82,.43,.042],[.14,.26,.27],R),f(a,[.055,.47,.239],[.19,.3,.08],7897973);for(let P=0;P<4;P++)f(a,[.053,.58-P*.062,.287],[.15,.023,.02],P===0?7976343:M,P===0?1455398:0);p(c,[-.053,.029,-.107],[.09,.07,.09],b),p(c,[.083,.027,-.103],[.084,.08,.072],R);for(const P of[-1,1])p(c,[P*.073,.047,-.144],[.052,.045,.022],M),f(c,[P*.071,.04,-.168],[.018,.012,.008],14003301,3348744);f(c,[0,-.069,-.142],[.126,.041,.03],M),p(l,[0,-.052,-.122],[.096,.045,.055],b);for(let P=0;P<5;P++)x(c,[(P-2)*.021,-.084,-.163],.008,.037,T,Math.PI),x(l,[(P-2)*.021,-.017,-.153],.008,.028,T);if(v){p(a,[-.36,.56,.035],[.25,.22,.27],R);for(let P=0;P<3;P++)x(a,[-.36+P*.093,.76,.05],.035,.17-P*.018,T,0,-.15)}}for(const P of[-1,1]){const D=m(r,[P*(v?.23:.176),-.025,.018]),L=m(D,[0,-.52,0]),U=m(L,[0,-.54,0]),q=m(U,[0,0,0]);if(p(D,[0,-.2,.01],[v?.158:.119,.253,.13],w?M:b),u(D,[0,-.05,0],[0,-.52,0],v?.142:.105,.071,w?M:b),p(L,[0,-.008,-.032],[.085,.085,.095],R),u(L,[0,-.03,0],[0,-.54,0],.08,.052,w?M:b),w&&(f(D,[0,-.185,-.09],[.17,.28,.06],R),f(L,[0,-.21,-.066],[.12,.24,.055],R)),f(q,[0,.027,-.092],[v?.21:.16,.14,.31],w?M:R),f(q,[0,-.035,-.085],[v?.215:.165,.038,.33],M),!w)for(let X=-1;X<=1;X++)u(q,[X*.044,.012,-.222],[X*.053,.011,-.273],.016,.001,T,5);h.legs.push({hip:D,knee:L,hock:U,foot:q,side:P,upper:.52,lower:.54,metatarsal:0,anchor:new Ft,swingStart:new Ft,worldFoot:new Ft,height:0,previous:0,initialized:!1});const k=m(a,[P*I,.56,.015]),J=m(k,[0,-.34,0]),Y=!w&&P<0;if(p(k,[0,-.075,0],[Y?.17:.12,.16,.14],w?P<0?9131355:R:b),u(k,[0,-.06,0],[0,-.34,0],Y?.137:.105,.073,w?M:b),u(J,[0,0,0],[0,-.33,0],Y?.115:.075,.048,w?M:b),p(J,[0,-.34,-.014],[.06,.09,.055],w?M:b),w)f(J,[0,-.16,-.05],[.11,.18,.06],R);else for(let X=-1;X<=1;X++)u(J,[X*.034,-.373,-.025],[X*.041,-.43,-.065],.019,.012,b,5),u(J,[X*.041,-.43,-.065],[X*.043,-.443,-.112],.018,.002,T,5);if(h.arms.push({upper:k,lower:J,side:P}),w&&P===1){const X=m(J,[0,-.325,-.035]);X.name="rifle",X.rotation.x=-1.4,f(X,[0,-.035,-.1],[.105,.11,.38],M),f(X,[0,.025,-.09],[.085,.045,.29],T),u(X,[0,-.025,-.27],[0,-.025,-.61],.025,.018,M,6),f(X,[0,-.135,-.06],[.06,.17,.085],M),f(X,[0,.032,-.21],[.023,.018,.038],14203763,3153920)}}}h.legs.forEach(C=>{const I=C.side<0?"left":"right";C.hip.name=`${I}-thigh`,C.knee.name=`${I}-knee`,C.hock.name=`${I}-hock`,C.foot.name=`${I}-foot`}),h.arms.forEach(C=>{const I=C.side<0?"left":"right";C.upper.name=`${I}-upper-arm`,C.lower.name=`${I}-elbow`}),h.tail.forEach((C,I)=>C.name=`tail-${I}`),Mc(i),Ga(h,{x:0,z:0,heading:0,speed:0,attack:0,hurt:0,alive:!0,time:0,dt:0}),h.initialized=!1;for(const C of h.legs)C.initialized=!1;return h}function Jr(s,t,e,n){const i=s.root.scale.x,r=Math.cos(s.heading),a=Math.sin(s.heading);return n.set(s.root.position.x+(t*r+e*a)*i,s.root.position.z+(-t*a+e*r)*i)}function _m(s,t,e,n,i,r){const a=s.kind==="raptor",o=a?.47:0,c=n+(a?Math.cos(o)*t.metatarsal:0),l=i+(a?Math.sin(o)*t.metatarsal:0);es.copy(s.pelvis.quaternion).invert(),ji.set(e,c,l).sub(s.pelvis.position).applyQuaternion(es).sub(t.hip.position);const h=ji.length(),d=Di(h,Math.abs(t.upper-t.lower)+.01,t.upper+t.lower-.002);ts.copy(ji).multiplyScalar(1/Math.max(1e-4,h)),ji.copy(ts).multiplyScalar(d),si.copy(gm).applyQuaternion(es),si.addScaledVector(ts,-si.dot(ts)),si.lengthSq()<1e-5&&si.set(0,1,0),si.normalize();const f=(t.upper*t.upper-t.lower*t.lower+d*d)/(2*d),p=Math.sqrt(Math.max(0,t.upper*t.upper-f*f));Yr.copy(ts).multiplyScalar(f).addScaledVector(si,p),Sl.copy(ji).sub(Yr).normalize(),$r.setFromUnitVectors(qr,Yr.normalize()),Kr.setFromUnitVectors(qr,Sl),t.hip.quaternion.copy($r),t.knee.quaternion.copy($r).invert().multiply(Kr),bl.set(0,-Math.cos(o),-Math.sin(o)).applyQuaternion(es),Zr.setFromUnitVectors(qr,bl),t.hock.quaternion.copy(Kr).invert().multiply(Zr),El.setFromAxisAngle(xm,r),yl.copy(es).multiply(El),t.foot.quaternion.copy(Zr).invert().multiply(yl)}function Ga(s,t){const e=Di(t.dt,0,.1),n=s.kind==="raptor",i=s.kind==="soldier",r=s.kind==="brute",a=s.initialized&&(t.time<s.previousTime-.001||!s.previousAlive&&t.alive);if(a){s.initialized=!1,s.walkStarted=!1,s.distance=0,s.motion=0,s.attackPose=0,s.turn=0,s.death=0;for(const v of s.legs)v.initialized=!1}if(e===0&&s.initialized&&!a)return;const o=s.root.scale.x,c=s.initialized?Math.hypot(t.x-s.previousX,t.z-s.previousZ):0,l=!s.initialized||c>2.5||!t.alive&&s.death===0;s.initialized||(s.heading=t.heading,s.distance=0);const h=mm(s.heading,t.heading),d=h*(1-Math.exp(-(n?8:10)*e));s.heading+=d,s.turn=Qi(s.turn,e?d/e:0,7,e),s.root.position.set(t.x,0,t.z),s.root.rotation.set(0,s.heading,0),s.previousX=t.x,s.previousZ=t.z,s.previousTime=t.time,s.previousAlive=t.alive,s.initialized=!0,s.motion=Qi(s.motion,t.alive?Di(t.speed/(n?3.2:2.1),0,1):0,9,e),t.alive&&t.speed>.02&&!s.walkStarted&&(s.distance=(n?.62:.66)*.5*s.stride,s.walkStarted=!0),t.alive&&t.speed>.02&&c<2.5&&(s.distance+=c/o),s.attackPose=Qi(s.attackPose,Di(t.attack,0,1),t.attack>s.attackPose?20:12,e),s.death=Qi(s.death,t.alive?0:1,t.alive?25:6.2,e);const f=s.distance/s.stride,p=f*vc,u=s.attackPose,x=Math.sin(t.time*2.3)*.006*(1-s.motion)*(1-s.death);s.pelvis.position.y=s.hipHeight+Math.cos(p*2)*(n?.026:.017)*s.motion+x,s.pelvis.rotation.set(0,0,Math.sin(p)*(n?.02:.027)*s.motion),s.chest.rotation.set((n?-.035:-.055)*s.motion-(n?.07:.13)*u,Math.sin(p)*(i?.018:.045)*s.motion,0),s.neck.rotation.set((n?-.23:-.11)*u+x*.9,-s.turn*.013,0),s.head.rotation.set(t.hurt>0?Math.sin(t.time*40)*.055:0,0,t.hurt>0?-.055:0),s.jaw.rotation.x=n?-.075-u*.58:i?0:-u*.38,s.model.rotation.set(s.death*(n?-.07:.08),0,s.death*(n?1.49:1.52)),s.model.position.y=s.death*(n?.43:r?.64:i?.45:.485);const m=n?.62:.66,g=s.stride*m,y=g*.5,w=new Ft;for(const v of s.legs){const b=(f+(v.side>0?.5:0))%1;if(l||!v.initialized){const L=s.walkStarted?b<m?-y+b/m*g:y-(b-m)/(1-m)*g:0;Jr(s,v.hip.position.x,L+v.hip.position.z,v.anchor),v.worldFoot.copy(v.anchor),v.swingStart.copy(v.anchor),v.height=0,v.previous=b,v.initialized=!0}let E=0;if(t.alive&&t.speed>.035&&s.motion>.02)if(b<m)v.previous>=m&&Jr(s,v.hip.position.x,-y+v.hip.position.z,v.anchor),v.worldFoot.copy(v.anchor),v.height=0,E=-Math.pow(Di((b/m-.77)/.23,0,1),2)*.2;else{v.previous<m&&v.swingStart.copy(v.anchor);const L=(b-m)/(1-m),U=L*L*(3-2*L);Jr(s,v.hip.position.x,-y+v.hip.position.z,w),v.worldFoot.copy(v.swingStart).lerp(w,U),v.height=Math.pow(Math.sin(L*Math.PI),1.3)*(n?.23:r?.16:.18)*Math.sqrt(s.motion),E=Math.sin(L*Math.PI)*.28,v.anchor.copy(v.worldFoot)}else v.height=Qi(v.height,0,17,e),v.anchor.copy(v.worldFoot);v.previous=b;const M=(v.worldFoot.x-t.x)/o,T=(v.worldFoot.y-t.z)/o,C=Math.cos(s.heading),I=Math.sin(s.heading),P=M*C-T*I,D=M*I+T*C;_m(s,v,P,(n?.025:.077)+v.height,D,E),s.death>.05&&(v.hip.rotation.x+=s.death*.35,v.knee.rotation.x-=s.death*.25)}for(const v of s.arms){const b=Math.sin(p+(v.side>0?Math.PI:0))*s.motion;n?(v.upper.rotation.x=.64-b*.22+u*.8,v.lower.rotation.x=.52+u*.3,v.upper.rotation.z=-v.side*(.18+u*.24)):i?(v.upper.rotation.x=v.side>0?.98:1.12,v.lower.rotation.x=v.side>0?.42:.58,v.upper.rotation.x-=u*.1,v.upper.rotation.z=v.side>0?-.06:.25):(v.upper.rotation.x=.13-b*.36+u*(v.side<0?1.3:.86),v.upper.rotation.z=-v.side*(.14+u*.34),v.lower.rotation.x=.22+u*(v.side<0?.51:.76)),v.upper.rotation.x-=s.death*.27,v.lower.rotation.x+=s.death*.42}for(let v=0;v<s.tail.length;v++){const b=s.tail[v];b.rotation.y=-Di(s.turn,-3.2,3.2)*(.06+v*.018)+Math.sin(p-v*.55)*s.motion*(.045+v*.017),b.rotation.x=.012+u*(.045+v*.018)+Math.sin(t.time*1.4-v*.5)*.008*(1-s.motion)}}const Qr=Math.PI*2,te=s=>{const t=Math.sin(s*127.1+91.7)*43758.5453;return t-Math.floor(t)};function vm(s,t="#86ffb8",e="#101b20",n=256,i=64){const r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,i),a.fillStyle=t,a.fillRect(2,2,n-4,2),a.fillRect(2,i-4,n-4,2),a.fillRect(2,2,2,i-4),a.fillRect(n-4,2,2,i-4);const o=s.split("/").map(h=>h.trim());a.textAlign="center",a.textBaseline="middle";let c=o.length>1?19:22;c=Math.min(c,Math.floor((n-18)/(Math.max(...o.map(h=>h.length))*.61))),a.font=`bold ${Math.max(8,c)}px monospace`,o.forEach((h,d)=>a.fillText(h,n/2,i/2+(d-(o.length-1)/2)*(c+5)));const l=new Gi(r);return l.magFilter=l.minFilter=fe,l.colorSpace=Se,l.generateMipmaps=!1,l}function Mm(){const s=document.createElement("canvas");s.width=64,s.height=80;const t=s.getContext("2d");t.fillStyle="#132126",t.fillRect(0,0,64,80),t.fillStyle="#2e594d";for(let n=0;n<80;n++)t.fillRect(te(n)*64|0,te(n+15)*80|0,2,4);t.fillStyle="#19252d",t.fillRect(16,39,36,32),t.fillStyle="#97654b",t.fillRect(24,20,20,27),t.fillStyle="#b78660",t.fillRect(26,21,15,21),t.fillStyle="#342731",t.fillRect(16,13,36,6),t.fillRect(21,7,23,9),t.fillStyle="#806454",t.fillRect(14,17,41,4),t.fillStyle="#131922",t.fillRect(27,28,17,3),t.fillRect(34,27,9,7),t.fillStyle="#81d9b5",t.fillRect(27,29,2,2),t.fillStyle="#382c2b",t.fillRect(29,39,10,3),t.fillStyle="#7f9e9a",t.fillRect(43,45,10,25),t.fillStyle="#313f47";for(let n=47;n<70;n+=5)t.fillRect(44,n,8,2);t.fillStyle="#fcba67",t.fillRect(47,48,2,2),t.fillStyle="#a0dabc",t.font="bold 6px monospace",t.textAlign="center",t.fillText("ELIAS VANE",32,76);const e=new Gi(s);return e.magFilter=e.minFilter=fe,e.colorSpace=Se,e}class Sm{constructor(t){this.canvas=t,this.renderer=new sm({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Se,this.renderer.toneMapping=un,this.scene.background=new Gt(461072),this.scene.fog=new ja(1053983,24,94),this.camera.rotation.order="YXZ";const e=new ef(12175839,6379857,1.38);this.scene.add(e);const n=new Br(12175587,1.12);n.position.set(-10,25,12),this.scene.add(n);const i=new Br(16765858,.42);i.position.set(-18,8,3),this.scene.add(i);const r=new Br(8646332,.22);r.position.set(7,9,-25),this.scene.add(r),this.scene.add(this.muzzleLight,this.blastLight);for(const a of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door","fuel"]){const o=new Xs({map:rm(a)});this.retroMaterial(o),this.mats.set(a,o)}this.buildLevel(),this.flush();for(const a of Ce.doors)this.buildDoor(a);for(const a of Ce.destructibles??[])this.buildDestructible(a);for(const a of Ce.enemies){const o=Tl(a.kind,!1,(c,l=0)=>this.creatureMaterial(a.kind,!1,c,l));o.root.position.set(a.x,0,a.z),this.enemyGroups.set(a.id,o),this.scene.add(o.root)}for(const a of Ce.pickups){const o=this.buildPickup(a.kind);o.position.set(a.x,.5,a.z),this.scene.add(o),this.pickupGroups.set(a.id,o)}this.mountRig=Tl("raptor",!0,(a,o=0)=>this.creatureMaterial("raptor",!0,a,o)),this.mountRig.root.position.set(Ce.mount.x,0,Ce.mount.z),this.mountRig.root.rotation.y=this.mountHeading,this.scene.add(this.mountRig.root),this.effectMat=new Je({color:16777215,transparent:!0,opacity:.94,depthWrite:!1}),this.effectMesh=new nc(new ke(.08,.08,.08),this.effectMat,192),this.effectMesh.instanceMatrix.setUsage($l),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated",this.atmosphere=new cm(this.scene)}renderer;scene=new Nh;camera=new Qe(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;propGroups=new Map;propRuins=new Map;muzzleLight=new zr(16765594,0,8,2);blastLight=new zr(16749358,0,15,2);lamps=[];hazmat=[];mountRig;mountHeading=-.7;lastMountPosition;effectMesh;effectMat;dummy=new be;snapGrid=new Ft(160,100);clock=0;cameraStride=0;cameraMotion=0;previousPlayer;lastResolution="";powerLamp;lights=[];atmosphere;retroMaterial(t){t.onBeforeCompile=e=>{e.uniforms.retroGrid={value:this.snapGrid},e.vertexShader=`uniform vec2 retroGrid;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},t.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(t,e=0,n=!0){const i=`c${t}-${e}`;let r=this.mats.get(i);return r||(r=new Xs({color:t,emissive:e,flatShading:n}),this.retroMaterial(r),this.mats.set(i,r)),r}basic(t){const e=`b${t}`;let n=this.mats.get(e);return n||(n=new Je({color:t}),this.mats.set(e,n)),n}addGeometry(t,e,n,i,r,a=0,o=0,c=0){const l=new le().compose(new G(n,i,r),new Ye().setFromEuler(new Tn(a,o,c)),new G(1,1,1));t.applyMatrix4(l),t.attributes.normal||t.computeVertexNormals();const h=this.batches.get(e)||[];h.push(t),this.batches.set(e,h)}box(t,e,n,i,r,a,o,c=0){const l=new ke(i,r,a),h=l.attributes.position,d=l.attributes.normal,f=l.attributes.uv;for(let p=0;p<h.count;p++){const u=Math.abs(d.getX(p)),x=Math.abs(d.getY(p));f.setXY(p,u>.5?h.getZ(p)/2:h.getX(p)/2,x>.5?h.getZ(p)/2:h.getY(p)/2)}this.addGeometry(l,o,t,e,n,0,c)}flush(){for(const[t,e]of this.batches){const n=gc(e,!1);this.scene.add(new de(n,t));for(const i of e)i.dispose()}this.batches.clear()}sign(t,e,n,i,r=3,a=.8,o=0,c="#86ffb8",l="#101b20"){const h=vm(t,c,l),d=new Je({map:h,side:We});this.mats.set(`sign-${this.mats.size}`,d);const f=new de(new Xe(r,a),d);return f.position.set(e,n,i),f.rotation.y=o,this.scene.add(f),f}lamp(t,e,n,i=8978368,r=!1){this.box(t,e,n,r?.08:1.2,r?1.9:.09,.1,this.mat(11791056,i));const a=new de(new ke(r?.09:1.22,r?1.95:.1,.11),this.basic(i));a.position.set(t,e,n+.015),this.scene.add(a),this.lamps.push(a)}buildLevel(){const t=e=>this.mats.get(e);this.box(-.7,-.12,-20,35,.2,69,t("road")),this.box(0,-.005,8,10.5,.08,8.1,t("floor")),this.box(0,-.005,-26,14,.08,12.1,t("labfloor")),this.box(11.3,-.005,-28,8,.08,8,t("floor")),this.box(0,-.005,-39,20,.08,14,t("labfloor")),this.box(-7,-.005,-49,8,.08,6,t("metal")),this.box(-15.4,-.005,-7,4,.08,6,t("floor")),this.box(0,4.05,8,10.6,.12,8.3,t("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,t("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,t("ceiling")),this.box(0,4.5,-39,20.4,.12,14,t("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,t("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,t("ceiling"));for(const e of Ce.walls)this.box(e.x,(e.y??0)+e.h/2,e.z,e.w,e.h,e.d,t(e.material)),e.h>3&&e.d<1&&(this.box(e.x,.15,e.z+.03,e.w,.25,e.d+.04,this.mat(1517867)),this.box(e.x,3.08,e.z+.035,e.w,.1,e.d+.08,this.mat(4153687)));for(let e=-1;e<=1;e+=2)for(let n=0;n<5;n++){const i=1-n*5,r=8+te(n+e+10)*10,a=e*17;this.box(a,r/2,i,6,r,4.5,t("brick")),this.box(a,r+.2,i,6.4,.4,4.8,this.mat(1583412));for(let o=4.8;o<r-1;o+=2.3)for(let c=0;c<2;c++){const l=e*13.95;this.box(l,o,i-1+c*2,.1,1.2,.9,this.mat((n+c)%3===0?6720377:1781821,(n+c)%3===0?2640696:0)),this.box(l-e*.04,o-.64,i-1+c*2,.25,.12,1.15,this.mat(989474))}this.box(a+e*.4,r+.8,i,.4,1.2,1.7,t("metal")),this.box(a,r+2.5,i,.12,4,.12,this.mat(4479848))}for(let e=0;e<10;e++){const n=-35+e*8,i=15+te(e+30)*27,r=-63-te(e+41)*18;this.box(n,i/2,r,5,i,6,this.mat(1385265));for(let a=4;a<i;a+=4)this.box(n,a,r+3.04,3.5,.15,.08,this.basic(2576199))}for(const e of[-11.8,11.8])this.box(e,.045,-8,2.6,.15,24,t("concrete")),this.box(e+Math.sign(e)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const e of[6,10,-22,-27,-30,-34,-38,-42,-49]){const n=e<-31&&e>-46;this.box(0,3.91,e,n?20:9,.18,.25,t("metal")),this.lamp(e<-46?-7:0,e>0?3.79:4.22,e,11595712),this.box(3,4.12,e,1.5,.08,.8,t("metal"));for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,e,.06,.035,.65,this.mat(1189162))}for(const e of Ce.hazards){const n=new Je({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${e.x}`,n);const i=new de(new Xe(e.w,e.d),n);i.rotation.x=-Math.PI/2,i.position.set(e.x,.11,e.z),this.scene.add(i),this.hazmat.push(i),this.box(e.x,e.x<0?.14:.02,e.z,e.w+.2,.1,e.d+.2,this.mat(2112557));for(let r=0;r<8;r++)this.box(e.x+(te(r)-.5)*e.w,.13,e.z+(te(r+13)-.5)*e.d,.12,.05,.12,this.basic(9623415))}for(const e of Ce.props){const n=e.x,i=e.z,r=e.rotation??0;if(e.kind!=="neon")if(["office-sign","facility-sign","sign"].includes(e.kind)){const a=e.kind==="neon",o=e.kind==="office-sign"?3.05:e.kind==="facility-sign"?4.15:a?4.9:3.6;this.sign(e.label??"",n,o,i,e.kind==="facility-sign"?9:a?4.8:5,e.kind==="facility-sign"?1.3:.85,r,a&&i<-3?"#ff7095":"#96ffc9")}else if(e.kind==="portrait"){const a=new Je({map:Mm()});this.mats.set("portrait",a);const o=new de(new Xe(.9,1.12),a);o.position.set(n,2.1,i),o.rotation.y=Math.PI,this.scene.add(o),this.box(n,2.1,i+.08,1.04,1.27,.06,this.mat(5987138))}else if(e.kind==="office-board"){this.box(n,2,i,.08,1.7,3.7,this.mat(5327932)),this.sign(e.label??"",n-.06,2.55,i,2.8,.38,r,"#cecfaa","#32392e");for(let a=0;a<7;a++)this.box(n-.07,1.8+te(a)*.5,i+(te(a+10)-.5)*2.8,.035,.42,.31,this.mat(a%2?12233109:8296837))}else if(["terminal","console"].includes(e.kind)){this.box(n,1.4,i,.85,.65,.12,this.mat(1322032)),this.box(n,1.4,i+.07,.65,.45,.02,this.basic(3840368));for(let a=0;a<4;a++)this.box(n-.2,1.53-a*.08,i+.085,.32-te(a)*.1,.025,.01,this.basic(10280873));this.box(n,1.02,i+.2,.9,.08,.5,this.mat(4872532))}else if(e.kind==="lamp")this.box(n,1.9,i,.13,3.8,.13,this.mat(4217429)),this.box(n,3.7,i-.35,.12,.12,.8,this.mat(4217429)),this.lamp(n,3.61,i-.68,11530187);else if(e.kind==="car"){this.box(n,1,i,1.8,.65,3.6,this.mat(4797250),r),this.box(n,1.62,i-.2,1.58,.8,1.8,this.mat(2701636),r),this.box(n,1.63,i+.76,1.4,.48,.08,this.mat(1585465),r);for(const a of[-.97,.97])for(const o of[-1.15,1.15])this.addGeometry(new Kt(.39,.39,.24,8),this.mat(1187107),n+a,.46,i+o,0,0,Math.PI/2);this.box(n,.78,i+1.86,1.1,.16,.08,this.basic(7021366)),this.box(n+.5,1.5,i,.04,.02,1.5,this.mat(9737091),.3)}else if(e.kind==="barrels")for(let a=0;a<3;a++){const o=n+a%2*.68,c=i+Math.floor(a/2)*.7;this.addGeometry(new Kt(.29,.3,1,8),this.mat(a===2?5918776:2576451),o,.5,c),this.addGeometry(new Kt(.31,.31,.07,8),this.mat(1059883),o,.22,c),this.addGeometry(new Kt(.31,.31,.07,8),this.mat(1059883),o,.78,c),this.box(o,.6,c+.3,.17,.19,.02,this.basic(14003533))}else if(e.kind==="rubble")for(let a=0;a<12;a++)this.box(n+(te(a)-.5)*2,.18+te(a+10)*.18,i+(te(a+20)-.5)*2,.3+te(a+30)*.6,.25+te(a+40)*.4,.25+te(a+50)*.6,t("concrete"),te(a+60)*Qr);else if(e.kind==="tank")this.addGeometry(new Kt(.6,.65,.27,8),t("metal"),n,.14,i),this.addGeometry(new Kt(.55,.55,2.5,8),this.mat(2384967,1063201),n,1.52,i),this.addGeometry(new Kt(.65,.65,.28,8),t("metal"),n,2.91,i),this.box(n-.32,1.6,i+.45,.15,2.3,.15,this.basic(6671237)),this.box(n,1.8,i+.52,.28,.6,.16,this.mat(7580774)),this.box(n,1.4,i+.53,.53,.46,.12,this.mat(5929809)),this.box(n-.18,.8,i+.49,.12,.8,.15,this.mat(5929809)),this.box(n+.18,.8,i+.49,.12,.8,.15,this.mat(5929809));else if(e.kind==="pipe"){this.addGeometry(new Kt(.15,.15,12,6),this.mat(4549473),n,3.3,i,Math.PI/2);for(let a=-2;a<=2;a++)this.addGeometry(new Kt(.19,.19,.14,6),this.mat(1521208),n,3.3,i+a*2.4,Math.PI/2)}else if(e.kind==="lab-table"){this.box(n,1.27,i,3.9,.15,1.7,this.mat(5862506)),this.box(n,1.47,i,1.4,.26,.6,this.mat(6380610));for(let a=0;a<4;a++)this.box(n+(a-1.5)*.3,1.65,i,.16,.25,.18,this.mat(6653548))}else if(e.kind==="locker")this.box(n,1.25,i,.65,2.5,.85,t("metal")),this.box(n-.34,1.3,i,.025,.15,.17,this.basic(10471339));else if(e.kind==="power")this.box(n,1.15,i,.95,2.3,.45,t("metal")),this.sign("LIFT POWER",n,1.8,i+.24,1,.26),this.sign("E / ACTIVATE",n,1.48,i+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new de(new ke(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(n,1.12,i+.25),this.scene.add(this.powerLamp),this.box(n,.7,i+.28,.18,.35,.1,this.mat(12235397));else if(e.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,i,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,i,1,.4,Math.PI/2);else if(e.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",n,2.4,-51.91,5,.9),this.box(n,.05,i,6,.16,4,t("metal"));for(let a=0;a<5;a++)this.box(n,.17,i-2+a,6,.03,.12,this.mat(11310909))}else if(e.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(e.label??"",10,3.3,i,4,.65,-Math.PI/2,"#ff6b56");else if(e.kind==="street-mark")for(let a=0;a<3;a++)this.box(n,.05,i+(a-1)*1.8,.18,.03,.9,this.mat(9213035));else if(e.kind==="drain"){this.box(n,.04,i,1.7,.08,.6,this.mat(661533));for(let a=0;a<12;a++)this.box(n-.8+a*.14,.095,i,.055,.02,.5,this.mat(5399644))}else if(e.kind==="corpse"||e.kind==="skeleton")this.box(n,.17,i,.45,.3,1.5,this.mat(e.kind==="corpse"?5058625:10658186),.55),this.box(n-.24,.16,i+.75,.35,.23,.34,this.mat(7763815)),this.box(n,.025,i+.15,1.7,.02,2,this.mat(5051943));else if(e.kind==="chair"){this.box(n,.55,i,.6,.12,.6,this.mat(3684161)),this.box(n,.97,i+.25,.6,.8,.09,this.mat(3749953));for(const a of[-.23,.23])for(const o of[-.23,.23])this.box(n+a,.28,i+o,.06,.5,.06,t("metal"))}else if(e.kind==="bottles")for(let a=0;a<3;a++)this.addGeometry(new Kt(.06,.1,.3,5),this.mat(4288072),n+a*.18,1,i);else e.kind==="secret-table"&&(this.box(n,.75,i,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}this.buildEnvironmentDetails(),hm({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)}),dm({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});for(const[e,n,i,r,a]of[[0,2.6,7,16759929,9],[0,3,-26,9161405,9],[0,3,-39,5560217,10],[9,3.6,-5.5,13585292,12],[-9,3.6,-1.7,16759404,13],[-9,3.7,-12,6728156,9]]){const o=new zr(r,a,13,2);o.position.set(e,n,i),this.lights.push(o),this.scene.add(o)}}decal(t,e,n,i,r,a,o=0,c=!1){const l=`decal-${t}`;let h=this.mats.get(l);h||(h=new Je({map:am(t),alphaTest:.12,side:We,depthWrite:!c,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.mats.set(l,h)),this.addGeometry(new Xe(r,a),h,e,n,i,c?-Math.PI/2:0,o)}buildEnvironmentDetails(){const t=l=>this.mats.get(l),e=this.mat(5005912),n=this.mat(1716275),i=this.mat(9279361),r=this.mat(7885891),a=this.mat(7496267),o=(l,h,d,f,p,u=0,x=0)=>this.addGeometry(new Kt(f,f,p,8),e,l,h,d,u,0,x);this.box(-3.2,.88,8,2.3,.06,1.22,a),this.box(-3.2,.72,8.54,2,.16,.025,n);for(const l of[-3.7,-3.1,-2.5])this.box(l,.72,8.57,.49,.11,.035,a),this.box(l,.73,8.6,.16,.025,.03,i);this.box(-3.08,.98,8.26,.66,.055,.22,e);for(let l=0;l<3;l++)for(let h=0;h<10;h++)this.box(-3.34+h*.057,1.014,8.19+l*.052,.043,.018,.035,n);this.decal("paper",-2.46,.931,7.99,.43,.56,.15,!0),this.decal("paper",-3.96,.928,8.15,.36,.47,-.2,!0);for(let l=0;l<4;l++)this.box(-2.54,.96+l*.045,7.69,.38,.035,.32,this.mat(l%2?6315587:9273441),.12);this.box(-4.03,1.04,7.72,.29,.25,.22,n),this.box(-4.03,1.05,7.838,.23,.16,.012,e);for(let l=0;l<4;l++)this.box(-4.09+l*.04,1.06,7.85,.018,.09,.008,n);o(-4.13,1.26,7.69,.012,.32),this.box(-3.58,.95,8.35,.17,.05,.14,i),this.box(-3.59,.985,8.35,.1,.015,.08,n),o(-2.36,.953,7.72,.11,.04),o(-2.36,1.15,7.72,.025,.37),o(-2.53,1.39,7.72,.026,.4,0,Math.PI/2),this.addGeometry(new sr(.19,.17,8),n,-2.69,1.37,7.72),this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(11390112));for(const l of[1.9,2.55]){this.box(-4.91,l,10.4,.16,.06,2.1,a);for(let h=0;h<9;h++){const d=9.58+h*.19;this.box(-4.89,l+.17,d,.16,.28+te(h)*.09,.12,this.mat([7162948,5730661,8287574][h%3])),this.box(-4.8,l+.16,d,.012,.025,.1,i)}}this.box(-4.98,.95,8,.07,.04,7.6,n),this.box(4.99,3.6,8,.07,.06,7.6,e),this.sign("VESPER 2091 / MISSING: MARA",-2.48,2.67,11.97,2.35,.44,Math.PI,"#b7a57b","#2b3230"),this.decal("paper",1.9,.048,10,.43,.54,.6,!0),this.decal("paper",1.65,.047,10.32,.31,.42,-.2,!0),this.decal("graffiti",12.97,1.12,-14.2,2.55,1.12,-Math.PI/2),this.decal("graffiti",-12.97,1.3,-.7,2.4,1.05,Math.PI/2);for(const l of[-1,1]){o(l*12.83,5.4,-8,.065,23,Math.PI/2);for(let h=2;h>-20;h-=4)this.box(l*12.75,5.4,h,.09,.24,.2,e),this.box(l*11.78,.13,h,2.25,.024,.025,n);for(let h=1;h>-20;h-=6){this.box(l*11.68,.143,h,.7,.02,.42,n);for(let d=0;d<7;d++)this.box(l*11.68-.3+d*.1,.16,h,.038,.018,.38,e)}}for(let l=0;l<16;l++){const h=2-l*1.35;this.box(.6,.038,h,.12,.012,.62,this.mat(9277799));for(let d=0;d<3;d++)this.box(.58+(te(l+d)-.5)*.13,.047,h+(te(l+d+20)-.5)*.65,.08,.004,.05,t("road"))}for(const[l,h,d,f]of[[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal("puddle",l,.049,h,d,f,0,!0);for(let l=0;l<8;l++){const h=-10.7+te(l+42)*21,d=-1-te(l+90)*18;this.decal("paper",h,.048,d,.23,.31,te(l)*Qr,!0)}this.box(-7,.85,-8.17,1.75,.14,.1,e);for(let l=0;l<10;l++)this.box(-7.6+l*.13,1.02,-8.11,.044,.13,.04,n);for(const l of[-7.59,-6.41])this.box(l,1.12,-8.12,.28,.19,.045,this.mat(10593678)),this.box(l,1.13,-8.09,.21,.07,.015,this.basic(7835254));this.box(-7,1.38,-8.22,1.53,.03,.1,r),this.box(-7.2,1.66,-9.2,.026,.45,.028,i,.6);for(const l of[-.97,.97])for(const h of[-1.15,1.15])this.addGeometry(new Kt(.2,.2,.27,8),e,-7+l,.46,-10+h,0,0,Math.PI/2),this.addGeometry(new Kt(.085,.085,.28,6),n,-7+l,.46,-10+h,0,0,Math.PI/2);for(const[l,h,d]of[[6.98,-21,-31],[9.98,-33,-45]])for(const f of[-1,1]){const p=f*l;this.box(p,3.9,(h+d)/2,.14,.21,h-d,e),o(p-f*.11,3.62,(h+d)/2,.055,h-d,Math.PI/2);for(let u=h;u>=d;u-=2.4){this.box(p,2,u,.065,3.65,.075,n);for(const x of[.4,1.5,2.6,3.6])this.box(p-f*.045,x,u,.035,.055,.055,i);this.box(p-f*.09,3.62,u,.06,.27,.22,e)}this.decal("circuit",p-f*.04,1.6,(h+d)/2,.53,.76,-f*Math.PI/2)}for(const l of[-3.5,3.5]){this.box(l,4.28,-39,.6,.18,12,t("metal"));for(let h=-33.3;h>-45;h-=.65)this.box(l,4.17,h,.47,.08,.07,n);this.box(l,4.03,-33.5,.82,.18,.19,e),this.box(l,4.03,-44.5,.82,.18,.19,e)}this.decal("poster",-6.975,2.05,-22.8,.73,1.02,Math.PI/2),this.sign("HELIX / SECTOR 04",6.98,2.55,-22.8,1.7,.42,-Math.PI/2,"#b3c4a1");let c=0;for(const l of Ce.props)if(l.kind==="tank"){const{x:h,z:d}=l;for(const f of[.32,2.7]){this.addGeometry(new Kt(.63,.63,.12,8),e,h,f,d);for(let p=0;p<8;p++){const u=p*Qr/8;this.box(h+Math.sin(u)*.6,f,d+Math.cos(u)*.6,.075,.16,.075,i,u)}}for(const f of[-.45,.45])o(h+f,1.52,d-.36,.042,2.47);o(h,3.16,d,.1,.34),o(h,3.29,d-.5,.07,1,Math.PI/2),this.box(h+.43,1.6,d+.37,.31,.67,.18,n),this.decal("circuit",h+.43,1.6,d+.465,.24,.54),this.addGeometry(new Kt(.105,.105,.035,12),i,h+.43,2.14,d+.42,Math.PI/2),this.box(h+.43,2.14,d+.446,.01,.11,.016,this.mat(12281932),.4),this.sign(`LZ-${String(++c).padStart(2,"0")} / CONTAINED`,h,.64,d+.655,.72,.18,0,"#b6cda2","#183b34")}for(const[l,h,d]of[[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){this.box(l-.6,d+.09,h+.22,.26,.14,.3,n),this.box(l-.6,d+.16,h+.22,.19,.015,.2,i),this.decal("paper",l+.57,d+.009,h,.31,.43,.2,!0);for(let f=0;f<4;f++)this.box(l-.65+f*.15,d+.013,h-.24,.08,.012,.02,r)}for(const l of[-1.38,1.38]){this.box(l,1.36,-40,.23,.055,1.43,i);for(const h of[-40.49,-39.52])this.box(l,1.41,h,.27,.05,.12,n)}this.box(-1.1,1.4,-40,.18,.2,.22,n),o(-1.09,1.65,-40,.045,.28),this.box(-1.17,1.79,-40,.18,.07,.14,i);for(let l=0;l<3;l++){const h=.8+l*.27;this.addGeometry(new Kt(.06,.09,.29,6),this.mat(6523764),h,1.48,-40.4),this.box(h,1.64,-40.4,.07,.025,.07,e)}this.decal("paper",-1,1.36,-39.6,.35,.43,0,!0);for(const l of[-10.87,-3.12]){o(l,2.1,-49,.09,3.6);for(const h of[.7,3.45])o(l,h,-49,.14,.12);this.box(l,2.7,-51.88,.23,1.5,.12,e)}this.box(-7,4.25,-51.86,6,.12,.14,e),this.sign("AXIOM INDUSTRIES / FREIGHT 06",-7,1.35,-51.87,3.6,.36,0,"#8aa08e")}mesh(t,e,n,i,r,a){const o=new de(t,e);return o.position.set(n,i,r),a.add(o),o}localBox(t,e,n,i,r,a,o,c,l=0){return this.mesh(new ke(r,a,o),this.mat(c,l),e,n,i,t)}buildDestructible(t){const e=new Pe;if(e.position.set(t.x,t.y,t.z),e.name=`shootable-${t.id}`,t.kind==="barrel"){this.mesh(new Kt(t.w*.44,t.w*.44,t.h,12),this.mats.get("fuel"),0,t.h/2,0,e);for(const i of[.08,t.h*.26,t.h*.76,t.h-.04])this.mesh(new Kt(t.w*.456,t.w*.456,.075,12),this.mat(7369850),0,i,0,e);this.mesh(new Kt(.105,.105,.055,8),this.mat(2238254),.14,t.h+.035,.1,e),this.localBox(e,-.12,t.h+.06,.04,.25,.08,.1,10196613)}else{const i=new Je({color:9550273,transparent:!0,opacity:.25,side:We,depthWrite:!1});this.mats.set(`breakable-glass-${t.id}`,i),this.mesh(new ke(t.w,t.h,t.d),i,0,t.h/2,0,e);for(let r=0;r<4;r++){const a=this.mesh(new ke(.012,t.h*.73,.045),this.basic(r%2?6589335:13031884),-Math.sign(t.x)*(t.w/2+.012),t.h*.58,-t.d*.32+r*.15,e);a.rotation.x=-.36}this.localBox(e,-Math.sign(t.x)*.09,.04,0,.08,.08,t.d,10466996)}const n=new Pe;if(n.position.set(t.x,t.y,t.z),n.visible=!1,n.name=`ruin-${t.id}`,t.kind==="barrel"){const i=this.mesh(new Kt(t.w*.43,t.w*.44,.25,10,1,!0),this.mat(2369579),0,.13,0,n);i.rotation.z=.13;for(let r=0;r<4;r++){const a=this.localBox(n,(te(r+t.x)-.5)*1.15,.05,(te(r+t.z)-.5)*1.15,.23,.045,.18,4471347);a.rotation.y=r*1.2}}else for(let i=0;i<12;i++)this.mesh(new Xe(.05+te(i)*.13,.08+te(i+2)*.17),this.basic(10337472),-.1,.017,-t.d/2+i*t.d/12,n).rotation.set(-Math.PI/2,0,i*2.1);this.scene.add(e,n),this.propGroups.set(t.id,e),this.propRuins.set(t.id,n)}buildDoor(t){const e=new Pe;e.position.set(t.x,0,t.z),this.mesh(new ke(t.w,3.2,t.d),this.mats.get("door"),0,1.6,0,e);const n=t.w>t.d;n?(this.localBox(e,0,1.58,t.d/2+.015,t.w*.85,.08,.035,7581064),this.localBox(e,t.w*.35,1.3,t.d/2+.03,.15,.25,.03,t.locked?15629110:7924400,2250034)):this.localBox(e,-t.w/2-.015,1.58,0,.035,.08,t.d*.85,7581064),this.scene.add(e),this.doorGroups.set(t.id,e);const i=n?t.x:t.x-.3,r=n?t.z+.33:t.z;this.sign(t.label,i,3.57,r,n?Math.min(t.w+1.4,5):2.4,.5,n?0:-Math.PI/2,t.locked?"#ffb05d":"#8ccdaa")}creatureMaterial(t,e,n,i=0){const a={raptor:[6322507,10202996,9798226,12889715],soldier:[10587248,4809334,2108985,8426382],mutant:[8820318,5135683,7897973],brute:[10121060,8075325,7897973]}[t].includes(n)&&!i,o=[6322507,10202996,9798226,12889715,10587248,8820318,10121060].includes(n),c=`creature-${t}-${e?"saddle":"enemy"}-${n}-${i}`;let l=this.mats.get(c);if(!l){const h={color:a?16777215:n,map:a?pm(t,n):void 0,emissive:i,flatShading:!o};l=t==="soldier"&&a&&!o?new Qh({...h,shininess:14,specular:2437168}):new Xs(h),this.mats.set(c,l)}return l}buildPickup(t){const e=new Pe,i={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:9149585,plasma:6547611,machinegun:7767941}[t];if(t==="health")this.localBox(e,0,0,0,.55,.34,.3,12898751),this.localBox(e,0,0,.16,.3,.08,.015,12992833),this.localBox(e,0,0,.161,.08,.27,.015,12992833);else if(t==="armor"){this.localBox(e,0,0,0,.45,.42,.24,i),this.localBox(e,0,.26,0,.22,.13,.2,9684915);for(const a of[-1,1])this.localBox(e,a*.27,.1,0,.1,.3,.22,i)}else if(t==="ammo"){this.localBox(e,0,0,0,.5,.3,.35,5859659);for(let a=0;a<4;a++)this.localBox(e,-.17+a*.115,.19,0,.055,.15,.065,i)}else if(t==="keycard")this.localBox(e,0,0,0,.35,.23,.02,8961178),this.localBox(e,0,.04,-.015,.33,.04,.02,2178355),this.localBox(e,.08,-.06,-.016,.07,.055,.02,15060343);else if(t==="evidence"){this.localBox(e,0,0,0,.42,.02,.48,i);for(let a=0;a<5;a++)this.localBox(e,0,.016,-.15+a*.07,.24,.009,.018,4806471)}else this.localBox(e,0,0,0,t==="revolver"?.35:.7,.13,.2,i),this.localBox(e,.27,0,0,.4,.06,.07,6584431),this.localBox(e,-.11,-.15,0,.12,.22,.12,4209714),t==="plasma"&&this.localBox(e,0,.07,-.105,.37,.06,.035,7993010,1333048);const r=new de(new eo(.28,.36,12),new Je({color:i,transparent:!0,opacity:.6,side:We}));return r.rotation.x=-Math.PI/2,r.position.y=-.43,e.add(r),e}resize(t){const e=t.resolution==="320"?320:640,n=t.resolution==="320"?200:400;this.renderer.setSize(e,n,!1),this.snapGrid.set(e/2,n/2);const i=this.canvas.getBoundingClientRect();this.camera.aspect=i.width&&i.height?i.width/i.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=t.resolution;for(const r of this.lights)r.visible=t.quality==="high"}render(t,e,n){this.lastResolution!==n.resolution&&this.resize(n),this.clock+=e;const i=t.player,r=this.previousPlayer,a=r?Math.hypot(i.x-r.x,i.z-r.z):0;r&&t.time<r.time&&(this.cameraStride=0,this.cameraMotion=0,this.lastMountPosition=void 0,this.mountHeading=-.7);const o=e>0&&a<1.5?a:0;this.cameraStride+=o,e>0&&(this.cameraMotion+=(Math.min(1,o/Math.max(e,.001)/4.4)-this.cameraMotion)*(1-Math.exp(-e*15))),this.previousPlayer={x:i.x,z:i.z,time:t.time};const c=i.crouching?.9:i.mounted?2.6:1.65,l=t.status==="playing"?Math.sin(this.cameraStride*(i.mounted?4.3:8.2))*this.cameraMotion*(i.mounted?.032:.016):0;this.camera.position.set(i.x,i.y+c+l,i.z),this.camera.rotation.set(i.pitch+i.recoil*.012,i.yaw,0,"YXZ"),this.muzzleLight.visible=n.quality==="high"&&!i.mounted&&i.owned.includes(i.weapon),this.muzzleLight.intensity=Math.max(0,i.recoil-.58)*26,this.muzzleLight.color.setHex(i.weapon==="plasma"?6684574:16764811),this.muzzleLight.position.set(i.x-Math.sin(i.yaw)*.65+Math.cos(i.yaw)*.2,i.y+c-.15,i.z-Math.cos(i.yaw)*.65-Math.sin(i.yaw)*.2),this.blastLight.visible=!1,this.blastLight.intensity=0;for(const u of t.doors){const x=this.doorGroups.get(u.id);x&&(x.position.y=u.open*3.4)}for(const u of t.enemies){const x=this.enemyGroups.get(u.id);Ga(x,{x:u.x,z:u.z,heading:u.heading,speed:u.speed,attack:u.attack,hurt:u.hurt,alive:u.alive,time:t.time,dt:e}),x.root.visible=this.sectorVisible(u.z,t)&&Math.hypot(u.x-i.x,u.z-i.z)<65,x.root.position.y=this.curbstep(u.x,u.z)}for(const u of t.pickups){const x=this.pickupGroups.get(u.id);x.visible=!u.collected,x.visible&&(x.position.y=.48+Math.sin(this.clock*3+u.x)*.06,x.rotation.y=this.clock*.75)}const h=t.mount,d=this.lastMountPosition,f=d?Math.hypot(h.x-d.x,h.z-d.z):0;f>.002&&f<2&&(this.mountHeading=Math.atan2(-(h.x-d.x),-(h.z-d.z))),Ga(this.mountRig,{x:h.x,z:h.z,heading:this.mountHeading,speed:e>0&&f<2?f/e:0,attack:i.mounted?i.recoil:0,hurt:0,alive:!0,time:t.time,dt:e}),this.mountRig.root.visible=!i.mounted,this.mountRig.root.position.y=this.curbstep(h.x,h.z),this.lastMountPosition={x:h.x,z:h.z},this.powerLamp&&this.powerLamp.material.color.setHex(t.powered?7602073:16737843);for(const u of t.destructibles){const x=this.propGroups.get(u.id),m=this.propRuins.get(u.id);x&&(x.visible=!u.destroyed),m&&(m.visible=u.destroyed)}for(let u=0;u<this.lamps.length;u++)this.lamps[u].visible=Math.sin(this.clock*3+u*1.73)>0||u%4!==1||Math.sin(this.clock*31+u)>-.7;for(let u=0;u<this.hazmat.length;u++)this.hazmat[u].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+u),.19);let p=0;for(const u of t.effects){const x=1-u.life/u.maxLife,m=u.kind==="explosion",g=u.kind==="shard";m&&n.quality==="high"&&(1-x)*32>this.blastLight.intensity&&(this.blastLight.visible=!0,this.blastLight.intensity=(1-x)*32,this.blastLight.position.set(u.x,u.y,u.z));const y=m?24:g?1:u.kind==="muzzle"?5:7;for(let w=0;w<y&&p<192;w++){const v=u.kind==="blood"?14173245:u.kind==="plasma"?8060848:u.kind==="smoke"?7829101:g?12048861:m?w%3===0?16773040:w%3===1?16752951:13978149:16765568,b=m?.55:u.kind==="smoke"?.4:u.kind==="plasma"?.08:g?.4:.22,E=(te(w+u.x)-.5)*x*b*5+(u.dx??0)*x*.6,R=(te(w+u.z+13)-.5)*x*b*5+(u.dz??0)*x*.6;this.dummy.position.set(u.x+E,g?Math.max(.04,u.y-x*x*4):u.y+(te(w+u.z)-.2)*x*b*3+(m?x*.4:0),u.z+R),this.dummy.rotation.set(g?x*9:0,x*w*.2,g?x*7:0);const M=m?(3.8+x*5)*(1-x*.76):u.kind==="smoke"?1.5+x*5:Math.max(.25,1-x);this.dummy.scale.set(M,g?M*.23:M,M),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(p,this.dummy.matrix),this.effectMesh.setColorAt(p,new Gt(v)),p++}}this.effectMesh.count=p,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.atmosphere.update(t,this.camera,this.clock,n),this.renderer.render(this.scene,this.camera)}curbstep(t,e){return e>-20&&e<4&&Math.abs(t)>10.5&&Math.abs(t)<13.1?.12:0}sectorVisible(t,e){const n=e.player.z,i=r=>(e.doors.find(a=>a.id===r)?.open??1)<=.001;return!(n>4.35&&t<3.7&&i("office")||n>-19.6&&t<-20.4&&i("facility")||n>-31.8&&t<-32.6&&i("laboratory")||n<-20.4&&t>-19.6&&i("facility")||n<-32.6&&t>-31.8&&i("laboratory"))}dispose(){this.atmosphere.dispose();const t=new Set,e=new Set(this.mats.values()),n=new Set;this.scene.traverse(i=>{if(i instanceof de){t.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material])e.add(r)}});for(const i of t)i.dispose();for(const i of e){const r=i.map;r&&n.add(r),i.dispose()}for(const i of n)i.dispose();this.renderer.dispose()}}const Ln={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026}},jr=["revolver","shotgun","plasma","machinegun"],wl={revolver:0,shotgun:0,plasma:0,machinegun:0},Dn={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},Me=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),Ze=(s,t,e)=>Math.max(t,Math.min(e,s));class Sc{constructor(t,e="normal"){this.level=t,this.resetState(e)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(t){const e=t==="easy"?.8:t==="hard"?1.18:1,n={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:"revolver",owned:[],ammo:{...wl},reserve:{...wl},reload:0,cooldown:0,recoil:0,hurt:0};this.state={player:n,enemies:this.level.enemies.map(i=>({...i,health:Math.round(Dn[i.kind].health*e),maxHealth:Math.round(Dn[i.kind].health*e),alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,heading:0,speed:0,attack:0,vx:0,vz:0,path:[],pathTime:0})),doors:this.level.doors.map(i=>({...i,open:0,target:0})),pickups:this.level.pickups.map(i=>({...i,collected:!1})),destructibles:(this.level.destructibles??[]).map(i=>({...i,maxHealth:i.health,destroyed:!1})),effects:[],status:"playing",kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty:t},this.reloading=null,this.attackWindups.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}restart(t=!1){if(t&&!this.checkpointState){this.resetState(this.state.difficulty);const e=this.state,n=e.player;n.keycard=!0,n.owned=["revolver","shotgun","machinegun"],n.weapon="machinegun",n.health=100,n.armor=55;for(const i of n.owned)n.ammo[i]=Ln[i].clip,n.reserve[i]=Ln[i].clip*4;for(const i of e.pickups)i.z>-32.2&&i.kind!=="evidence"&&i.x>-13&&(i.collected=!0);for(const i of e.enemies)i.z>-32.2&&(i.alive=!1,i.health=0,i.speed=0,i.vx=0,i.vz=0,i.attack=0,e.kills++);for(const i of e.doors)["office","facility","security"].includes(i.id)&&(i.open=1,i.target=1);e.checkpoint=!0,this.checkpointState=structuredClone(e),this.checkpointSecrets=[]}if(t&&this.checkpointState){this.state=structuredClone(this.checkpointState);const e=this.state.player;e.x=this.level.checkpoint.x,e.z=this.level.checkpoint.z,e.y=0,e.vy=0,e.grounded=!0,e.mounted=!1,e.health=Math.max(e.health,75),e.armor=Math.max(e.armor,25),e.cooldown=0,e.reload=0,e.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const n of this.state.enemies)n.path=[],n.pathTime=0,n.cooldown=1.1,n.speed=0,n.vx=0,n.vz=0,n.attack=0;this.message("CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.",4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(t,e){t=Ze(t,0,.075);const n=this.state,i=n.player;if(n.status!=="playing")return;if(n.time+=t,n.messageTime=Math.max(0,n.messageTime-t),i.yaw+=e.lookX,i.pitch=Ze(i.pitch+e.lookY,-1.22,1.22),i.cooldown=Math.max(0,i.cooldown-t),i.recoil=Math.max(0,i.recoil-t*4.6),i.hurt=Math.max(0,i.hurt-t*2),this.emptyClick=Math.max(0,this.emptyClick-t),i.reload>0&&(i.reload=Math.max(0,i.reload-t),i.reload===0&&this.reloading)){const a=this.reloading,o=Math.min(Ln[a].clip-i.ammo[a],i.reserve[a]);i.ammo[a]+=o,i.reserve[a]-=o,this.reloading=null}(e.weaponDelta||e.weaponSlot)&&this.switchWeapon(e.weaponDelta,e.weaponSlot||void 0),e.reload&&this.reload(),e.interact&&this.interact(),this.updateDoors(t),this.movePlayer(t,e),this.collectPickups(),e.fire&&this.fire();const r=e.slow&&n.slow>.015;n.slow=Ze(n.slow+(r?-.17:.085)*t,0,1),this.updateEnemies(t*(r?.32:1),t),this.updateHazards(t);for(const a of n.effects)a.life-=t;n.effects=n.effects.filter(a=>a.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const t=this.state.player;return t.y+(t.mounted?2.6:t.crouching?.9:1.65)}canOccupy(t,e,n=.32,i=this.state.player.y){return this.state.player.mounted&&(e<-19.1||e>3.2)?!1:this.clearAt(t,e,n,i,this.height())}clearAt(t,e,n,i=0,r=1.8){const a=this.level.bounds;if(t-n<a.minX||t+n>a.maxX||e-n<a.minZ||e+n>a.maxZ)return!1;for(const o of this.level.walls){const c=o.y??0;if(!(i>=c+o.h-.025||i+r<=c+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1}for(const o of this.state.doors)if(!(i+r<=o.open*3.4+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1;for(const o of this.state.destructibles)if(!(o.destroyed||o.kind!=="barrel"||i>=o.y+o.h-.025||i+r<=o.y+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1;return!0}circleBox(t,e,n,i,r,a,o){const c=Ze(t,i-a/2,i+a/2),l=Ze(e,r-o/2,r+o/2);return(t-c)**2+(e-l)**2<n*n}movePlayer(t,e){const n=this.state.player;e.crouch&&!n.mounted?n.crouching=!0:n.crouching&&(n.crouching=!1,this.canOccupy(n.x,n.z)||(n.crouching=!0));const i=Ze(e.forward,-1,1),r=Ze(e.strafe,-1,1),a=Math.max(1,Math.hypot(i,r)),o=n.mounted?8:n.crouching?2.3:e.sprint?6.4:4.4,c=(-Math.sin(n.yaw)*i+Math.cos(n.yaw)*r)*o*t/a,l=(-Math.cos(n.yaw)*i-Math.sin(n.yaw)*r)*o*t/a;n.mounted&&(n.z+l<-19.1||n.z+l>3.2)&&this.message("Your strider stays in the street. Press E to dismount and enter the building.",2);const h=Math.max(1,Math.ceil(Math.hypot(c,l)/.14)),d=n.mounted?.53:.32;for(let u=0;u<h;u++)this.canOccupy(n.x+c/h,n.z,d)&&(n.x+=c/h),this.canOccupy(n.x,n.z+l/h,d)&&(n.z+=l/h);e.jump&&!this.jumpHeld&&n.grounded&&!n.crouching&&(n.vy=n.mounted?6.4:6.1,n.grounded=!1),this.jumpHeld=e.jump,n.vy-=14*t;const f=n.y+n.vy*t;let p=0;if(n.vy<=0){for(const u of this.level.walls){const x=(u.y??0)+u.h;x<=n.y+.035&&x>=f&&this.circleBox(n.x,n.z,d,u.x,u.z,u.w,u.d)&&(p=Math.max(p,x))}for(const u of this.state.destructibles){if(u.destroyed||u.kind!=="barrel")continue;const x=u.y+u.h;x<=n.y+.035&&x>=f&&this.circleBox(n.x,n.z,d,u.x,u.z,u.w,u.d)&&(p=Math.max(p,x))}}n.vy<=0&&f<=p?(n.y=p,n.vy=0,n.grounded=!0):this.canOccupy(n.x,n.z,d,f)?(n.y=f,n.grounded=!1):n.vy>0&&(n.vy=0),n.mounted&&(this.state.mount.x=n.x,this.state.mount.z=n.z)}switchWeapon(t,e){const n=this.state.player;if(!n.owned.length)return;let i;if(e){if(i=jr[Ze(Math.round(e)-1,0,3)],!n.owned.includes(i)){this.message("Weapon not acquired yet.",1.5);return}}else{const r=jr.filter(o=>n.owned.includes(o)),a=r.indexOf(n.weapon);i=r[(a+(t>0?1:-1)+r.length)%r.length]}i!==n.weapon&&(n.weapon=i,n.reload=0,n.cooldown=.22,n.recoil=.22,this.reloading=null,this.message(Ln[i].name,1.2))}reload(){const t=this.state.player,e=t.weapon,n=Ln[e];if(!(!t.owned.includes(e)||t.reload>0||t.ammo[e]>=n.clip)){if(t.reserve[e]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=e,t.reload=n.reload,this.state.events.push({type:"reload",weapon:e})}}fire(){const t=this.state.player;if(this.state.status!=="playing"||t.cooldown>0||t.reload>0)return;if(t.mounted){this.bite();return}if(!t.owned.includes(t.weapon)){this.message("Find your revolver in the office.",2);return}const e=Ln[t.weapon];if(t.ammo[t.weapon]<=0){t.reserve[t.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}t.ammo[t.weapon]--,t.cooldown=e.interval,t.recoil=1,this.state.events.push({type:"shot",weapon:t.weapon}),this.effect("muzzle",t.x-Math.sin(t.yaw)*.5,t.z-Math.cos(t.yaw)*.5,this.eyeHeight()-.18,.07);for(let n=0;n<e.pellets;n++){const i=t.yaw+(this.random()-.5)*e.spread*2,r=t.pitch+(this.random()-.5)*e.spread*1.5,a=-Math.sin(i)*Math.cos(r),o=-Math.cos(i)*Math.cos(r),c=Math.sin(r),l=this.eyeHeight();let h=this.rayWalls(t.x,l,t.z,a,c,o,e.range),d=null,f=null;for(const m of this.state.enemies){if(!m.alive)continue;const g=Dn[m.kind],y=this.rayEnemy(m,t.x,l,t.z,a,c,o,g.radius,g.height);y!==null&&y>=0&&y<h&&(h=y,d=m)}for(const m of this.state.destructibles){if(m.destroyed)continue;const g=this.rayBox(t.x,l,t.z,a,c,o,m.x-m.w/2,m.x+m.w/2,m.y,m.y+m.h,m.z-m.d/2,m.z+m.d/2);g!==null&&g<h&&(h=g,f=m,d=null)}const p=t.x+a*h,u=t.z+o*h,x=l+c*h;if(f)this.damageDestructible(f,e.damage),this.effect("spark",p,u,x,.16);else if(d){const m=t.weapon==="shotgun"?Math.max(.35,1-h/42):1;this.damageEnemy(d,e.damage*m),this.effect("blood",p,u,x,.24)}else h<e.range&&this.effect("spark",p,u,x,.15);if(t.weapon==="plasma"){const m=Math.min(12,Math.ceil(h/1.5));for(let g=1;g<=m;g++){const y=h*g/m;this.effect("plasma",t.x+a*y,t.z+o*y,l+c*y,.14)}}}}bite(){const t=this.state.player;t.cooldown=.58,t.recoil=.7;let e=!1;for(const n of this.state.enemies){if(!n.alive||Me(n,t)>3)continue;const i=n.x-t.x,r=n.z-t.z,a=Math.hypot(i,r);(-Math.sin(t.yaw)*i-Math.cos(t.yaw)*r)/Math.max(a,.1)>.35&&this.visible(t,n)&&(this.damageEnemy(n,95),this.effect("blood",n.x,n.z,1.1,.3),e=!0)}this.state.events.push({type:"enemy",message:e?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(t,e,n,i,r,a,o,c,l){const h=e-t.x,d=i-t.z,f=r*r+o*o,p=2*(h*r+d*o),u=h*h+d*d-c*c,x=p*p-4*f*u;if(x<0||f<1e-7)return null;const m=(-p-Math.sqrt(x))/(2*f),g=(-p+Math.sqrt(x))/(2*f);if(g<0)return null;let y=Math.max(0,m),w=g;if(Math.abs(a)<1e-8){if(n<0||n>l)return null}else{let v=-n/a,b=(l-n)/a;v>b&&([v,b]=[b,v]),y=Math.max(y,v),w=Math.min(w,b)}return y<=w?y:null}rayWalls(t,e,n,i,r,a,o){let c=o;for(const l of this.level.walls){const h=this.rayBox(t,e,n,i,r,a,l.x-l.w/2,l.x+l.w/2,l.y??0,(l.y??0)+l.h,l.z-l.d/2,l.z+l.d/2);h!==null&&h<c&&(c=h)}for(const l of this.state.doors){if(l.open>=.995)continue;const h=this.rayBox(t,e,n,i,r,a,l.x-l.w/2,l.x+l.w/2,l.open*3.4,3.4+l.open*3.4,l.z-l.d/2,l.z+l.d/2);h!==null&&h<c&&(c=h)}return c}rayBox(t,e,n,i,r,a,o,c,l,h,d,f){let p=0,u=1/0;const x=[t,e,n],m=[i,r,a],g=[o,l,d],y=[c,h,f];for(let w=0;w<3;w++){if(Math.abs(m[w])<1e-8){if(x[w]<g[w]||x[w]>y[w])return null;continue}let v=(g[w]-x[w])/m[w],b=(y[w]-x[w])/m[w];if(v>b&&([v,b]=[b,v]),p=Math.max(p,v),u=Math.min(u,b),p>u)return null}return u<0?null:p}visible(t,e,n=1.2){const i=Me(t,e);return i<.001?!0:this.rayWalls(t.x,n,t.z,(e.x-t.x)/i,0,(e.z-t.z)/i,i)>=i-.1}enemySees(t){const e=this.state.player,n=Dn[t.kind].height*.74,i=this.eyeHeight(),r=e.x-t.x,a=i-n,o=e.z-t.z,c=Math.hypot(r,a,o);return c<.001?!0:this.rayWalls(t.x,n,t.z,r/c,a/c,o/c,c)>=c-.1}damageEnemy(t,e){if(!t.alive||(t.health-=e,t.hurt=1,t.alert=!0,t.health>0))return;t.health=0,t.alive=!1,t.path=[],t.speed=0,t.vx=0,t.vz=0,t.attack=0,this.attackWindups.delete(t.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",t.x,t.z,.7,.5);const n=this.state.player;n.reserve.revolver+=2,n.reserve.plasma+=2,n.reserve.machinegun+=3,t.kind==="brute"&&this.message("Containment beast neutralized. Restore the elevator power.",3)}damageDestructible(t,e){if(!t.destroyed&&(t.health=Math.max(0,t.health-e),!(t.health>0))){if(t.destroyed=!0,t.kind==="glass"){this.shatterGlass(t);return}this.explodeBarrels(t)}}shatterGlass(t){this.state.events.push({type:"shatter"});for(let e=0;e<16;e++){const n=t.x+(this.random()-.5)*t.w,i=t.z+(this.random()-.5)*t.d,r=t.y+this.random()*t.h;this.state.effects.push({kind:"shard",x:n,z:i,y:r,life:.7,maxLife:.7,dx:(this.random()-.5)*2,dz:(this.random()-.5)*2})}this.message("SHOP WINDOW SHATTERED — the district answers back.",1.5)}explodeBarrels(t){const e=[t],n=new Set,i=4.2;for(let r=0;r<e.length&&r<this.state.destructibles.length;r++){const a=e[r];if(n.has(a.id))continue;n.add(a.id),this.state.events.push({type:"explosion"}),this.effect("explosion",a.x,a.z,a.y+.75,.5);for(let l=0;l<10;l++){const h=this.random()*Math.PI*2,d=this.random()*1.2;this.effect(l<6?"smoke":"spark",a.x+Math.sin(h)*d,a.z+Math.cos(h)*d,a.y+.4+this.random()*1.3,l<6?1.5:.38)}for(const l of this.state.enemies){const h=Me(a,l);!l.alive||h>=i||!this.blastVisible(a,l,Math.min(1.1,Dn[l.kind].height*.6))||(this.damageEnemy(l,145*(1-h/i)),this.effect("blood",l.x,l.z,1.05,.35))}const o=this.state.player,c=Me(a,o);c<i&&this.blastVisible(a,o,o.y+Math.min(this.height()*.5,1.2))&&this.hurtPlayer(75*(1-c/i));for(const l of this.state.destructibles){const h=Me(a,l);l.destroyed||h>=i||!this.blastVisible(a,l,l.y+l.h*.5)||(l.health=Math.max(0,l.health-145*(1-h/i)),!(l.health>0)&&(l.destroyed=!0,l.kind==="barrel"?e.push(l):this.shatterGlass(l)))}}this.state.status==="playing"&&this.message("FUEL CANISTER DETONATED — keep your distance from the blast.",2.5)}blastVisible(t,e,n){const i=t.y+.9,r=e.x-t.x,a=n-i,o=e.z-t.z,c=Math.hypot(r,a,o);return c<.001?!0:this.rayWalls(t.x,i,t.z,r/c,a/c,o/c,c)>=c-.015}updateDoors(t){for(const e of this.state.doors){const n=Math.sign(e.target-e.open);if(n!==0){if(n<0&&Me(e,this.state.player)<1.4){e.target=1;continue}e.open=Ze(e.open+n*t*1.3,0,1)}}}interact(){const t=this.state,e=t.player;if(t.status!=="playing")return;if(e.mounted){const r=[{x:e.x+Math.cos(e.yaw)*1.1,z:e.z-Math.sin(e.yaw)*1.1},{x:e.x-Math.cos(e.yaw)*1.1,z:e.z+Math.sin(e.yaw)*1.1},{x:e.x,z:e.z+1.2}].find(a=>this.clearAt(a.x,a.z,.32,0,1.8));if(!r){this.message("No room to dismount. Move into the street.",2);return}e.mounted=!1,e.x=r.x,e.z=r.z,e.y=0,e.vy=0,t.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(Me(e,this.level.switch)<2.5){t.powered?this.message("Power online. The industrial lift is ready.",2):(t.powered=!0,t.events.push({type:"door"}),this.message("ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.",4));return}if(Me(e,t.mount)<2.6&&e.z>-19){e.mounted=!0,e.crouching=!1,t.mount.x=e.x,t.mount.z=e.z,t.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.",4);return}const n=t.doors.filter(i=>Me(e,i)<2.9).sort((i,r)=>Me(i,e)-Me(r,e));if(n.length){const i=n[0];if(e.mounted&&i.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(i.locked&&!e.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(i.id==="elevator"){if(!t.powered){this.message("LIFT OFFLINE — restore power at the laboratory switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return}}i.target=i.target>.5?0:1,t.events.push({type:"door"}),i.secret&&!this.secretDoors.has(i.id)?(this.secretDoors.add(i.id),t.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${i.label}: ${i.target?"opening":"closing"}.`,1.6);return}if(Me(e,this.level.exit)<3){this.checkExit(),t.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(e.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard.",2)}collectPickups(){const t=this.state,e=t.player;for(const n of t.pickups)if(!(n.collected||Me(n,e)>1.1||e.y>1.5||!this.visible(e,n,.45))&&!(n.kind==="health"&&e.health>=100||n.kind==="armor"&&e.armor>=100))if(n.collected=!0,t.events.push({type:"pickup"}),jr.includes(n.kind)){const i=n.kind,r=!e.owned.includes(i);r&&e.owned.push(i),e.ammo[i]=Ln[i].clip,e.reserve[i]+=Ln[i].clip*(i==="revolver"?8:3),r&&(e.weapon=i,e.reload=0,this.reloading=null,e.cooldown=.15,e.recoil=.2),this.message(`${Ln[i].name.toUpperCase()} ACQUIRED — ${e.ammo[i]} loaded.`,2.5)}else n.kind==="health"?(e.health=Math.min(100,e.health+38),this.message("MEDKIT +38 HEALTH",1.6)):n.kind==="armor"?(e.armor=Math.min(100,e.armor+55),this.message("BODY ARMOR +55",1.6)):n.kind==="ammo"?(e.reserve.revolver+=24,e.reserve.shotgun+=16,e.reserve.plasma+=45,e.reserve.machinegun+=80,this.message("AMMUNITION CACHE — supplies replenished.",2)):n.kind==="evidence"?(e.evidence++,this.message("EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(e.keycard=!0,t.checkpoint=!0,this.message("SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.",4),t.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(t),this.checkpointState.events=[],this.checkpointSecrets=[...this.secretDoors])}finalThreats(){return this.state.enemies.filter(t=>t.alive&&(this.level.enemies.find(e=>e.id===t.id)?.z??t.z)<-32).length}checkExit(){const t=this.state;Me(t.player,this.level.exit)>1.5||t.status!=="playing"||!t.powered||this.finalThreats()>0||(t.status="complete",t.events.push({type:"complete"}),t.player.reload=0,this.message("NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(t,e=t){if(t<=0)return;const n=this.state.player,i=this.state.difficulty,r=i==="easy"?13:17;for(const a of this.state.enemies){if(!a.alive)continue;const o=Dn[a.kind],c=Me(a,n);if(a.speed=0,a.attack=Math.max(0,a.attack-t/(a.kind==="brute"?.26:.2)),a.hurt=Math.max(0,a.hurt-t*3.3),a.cooldown=Math.max(0,a.cooldown-t),a.pathTime-=t,!a.alert&&c<r&&this.enemySees(a)&&(a.alert=!0),!a.alert){a.vx=0,a.vz=0;continue}const l=this.attackWindups.get(a.id);if(l!==void 0){a.vx=0,a.vz=0,this.faceEnemy(a,n.x-a.x,n.z-a.z,t);const U=a.kind==="soldier"?.42:.32,q=l-t;if(a.attack=.15+.85*Ze(1-q/U,0,1),q<=0){if(this.attackWindups.delete(a.id),a.attack=1,this.enemySees(a)&&c<o.range+(a.kind==="soldier"?2:.55))if(a.kind==="soldier"){this.effect("muzzle",a.x,a.z,1.4,.12);const k=i==="easy"?.55:i==="hard"?.88:.72;this.random()<k&&this.hurtPlayer(o.damage),this.effect("spark",n.x,n.z,Math.min(1.65,this.eyeHeight()),.1)}else this.hurtPlayer(o.damage),this.effect("blood",n.x,n.z,.65,.17);a.cooldown=o.interval*(i==="hard"?.8:i==="easy"?1.2:1)}else this.attackWindups.set(a.id,q);continue}const h=this.enemySees(a);if(c<o.range&&h&&a.cooldown<=0){a.vx=0,a.vz=0,a.attack=.15,this.faceEnemy(a,n.x-a.x,n.z-a.z,t),this.attackWindups.set(a.id,a.kind==="soldier"?.42:.32),this.state.events.push({type:"enemy",message:a.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),a.kind==="soldier"&&this.effect("plasma",a.x,a.z,1.65,.4);continue}const d=a.kind==="soldier"?9:o.range*.85;if(h&&c<=d+.025){a.vx=0,a.vz=0,this.faceEnemy(a,n.x-a.x,n.z-a.z,t);continue}let f=n;if(!h||!this.clearAt(a.x+(n.x-a.x)/Math.max(c,.01)*.7,a.z+(n.z-a.z)/Math.max(c,.01)*.7,o.radius,0,o.height))if(a.pathTime<=0&&(a.path=this.findPath(a,n,o.radius,Math.min(o.height,1.8)),a.pathTime=.8+this.random()*.25),a.path.length){for(;a.path.length&&Me(a,a.path[0])<.4;)a.path.shift();a.path.length&&(f=a.path[0])}else{a.vx=0,a.vz=0;continue}const p=Me(a,f);if(p<.01){a.vx=0,a.vz=0;continue}const u=a.kind==="raptor"?12:a.kind==="mutant"?8:5;let x=o.speed*(i==="easy"?.88:i==="hard"?1.12:1)*(a.hurt>0?.42:1);f===n&&h&&(x=Math.min(x,Math.sqrt(2*u*Math.max(0,c-d))));let m=(f.x-a.x)/p*x,g=(f.z-a.z)/p*x;for(const U of this.state.enemies){if(U===a||!U.alive)continue;const q=Me(a,U),J=o.radius+Dn[U.kind].radius+.35;q>.01&&q<J&&(m+=(a.x-U.x)/q*(J-q)*3,g+=(a.z-U.z)/q*(J-q)*3)}const y=Math.hypot(m,g);y>x&&(m*=x/y,g*=x/y);const w=m-a.vx,v=g-a.vz,b=Math.hypot(w,v),E=b>0?Math.min(1,u*t/b):1;a.vx+=w*E,a.vz+=v*E;const R=a.vx*t,M=a.vz*t,T=a.x,C=a.z,I=Math.max(1,Math.ceil(Math.hypot(R,M)/.12));for(let U=0;U<I;U++)this.enemyCanMove(a,a.x+R/I,a.z)&&(a.x+=R/I),this.enemyCanMove(a,a.x,a.z+M/I)&&(a.z+=M/I);const P=a.x-T,D=a.z-C,L=Math.hypot(P,D);a.speed=L/Math.max(e,1e-8),a.phase+=L,a.vx=P/t,a.vz=D/t,L>1e-5&&this.faceEnemy(a,P,D,t)}}faceEnemy(t,e,n,i){if(Math.hypot(e,n)<1e-5)return;const r=Math.atan2(-e,-n),a=Math.atan2(Math.sin(r-t.heading),Math.cos(r-t.heading)),o=t.kind==="raptor"?8:t.kind==="brute"?4:6;t.heading+=Ze(a,-o*i,o*i),t.heading=Math.atan2(Math.sin(t.heading),Math.cos(t.heading))}enemyCanMove(t,e,n){const i=Dn[t.kind];if(!this.clearAt(e,n,i.radius,0,i.height))return!1;for(const r of this.state.enemies){if(r===t||!r.alive)continue;const a=i.radius+Dn[r.kind].radius,o=Math.hypot(e-r.x,n-r.z);if(o<a-1e-5&&o<=Me(t,r)+1e-6)return!1}return!0}findPath(t,e,n,i){const r=this.level.bounds,a=.9,o=Math.ceil((r.maxX-r.minX)/a),c=Math.ceil((r.maxZ-r.minZ)/a),l=I=>({x:Ze(Math.floor((I.x-r.minX)/a),0,o-1),z:Ze(Math.floor((I.z-r.minZ)/a),0,c-1)}),h=l(t),d=l(e),f=(I,P)=>P*o+I,p=I=>({x:r.minX+(I%o+.5)*a,z:r.minZ+(Math.floor(I/o)+.5)*a}),u=f(h.x,h.z),x=f(d.x,d.z),m=[u],g=new Map,y=new Map([[u,0]]),w=new Set,v=I=>Math.abs(I%o-d.x)+Math.abs(Math.floor(I/o)-d.z);let b=-1,E=u,R=v(u),M=0;for(;m.length&&M++<1900;){let I=0,P=1/0;for(let k=0;k<m.length;k++){const J=(y.get(m[k])??1/0)+v(m[k]);J<P&&(P=J,I=k)}const D=m.splice(I,1)[0];if(w.has(D))continue;w.add(D);const L=v(D);if(L<R&&(R=L,E=D),D===x){b=D;break}const U=D%o,q=Math.floor(D/o);for(const[k,J]of[[1,0],[-1,0],[0,1],[0,-1]]){const Y=U+k,X=q+J;if(Y<0||Y>=o||X<0||X>=c)continue;const j=f(Y,X);if(w.has(j))continue;const vt=p(j);if(j!==x&&!this.clearAt(vt.x,vt.z,n,0,i))continue;const bt=(y.get(D)??0)+1;bt>=(y.get(j)??1/0)||(y.set(j,bt),g.set(j,D),m.includes(j)||m.push(j))}}if(b===-1){if(E===u)return[];b=E}const T=[];let C=b;for(;C!==u&&g.has(C);)T.push(p(C)),C=g.get(C);return T.reverse()}hurtPlayer(t){const e=this.state,n=e.player;if(e.status!=="playing")return;t*=e.difficulty==="easy"?.65:e.difficulty==="hard"?1.22:1,n.mounted&&(t*=.65);const i=Math.min(n.armor,t*.65);n.armor-=i,n.health=Math.max(0,n.health-(t-i)),n.hurt=1,e.events.push({type:"hurt"}),n.health<=0&&(e.status="dead",n.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(t){const e=this.state.player;e.y<.45&&this.level.hazards.some(i=>Math.abs(e.x-i.x)<i.w/2&&Math.abs(e.z-i.z)<i.d/2)?(this.hazardTime+=t,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(t,e,n,i,r){this.state.effects.push({kind:t,x:e,z:n,y:i,life:r,maxLife:r})}message(t,e){this.state.message===t&&this.state.messageTime>.1||(this.state.message=t,this.state.messageTime=e,this.state.events.push({type:"message",message:t}))}}const bm={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class ym{constructor(t,e){this.canvas=t,this.onPause=e,document.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(n.code)){n.preventDefault(),n.stopImmediatePropagation(),n.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.repeat||(n.code==="Space"&&(this.pending.jump=!0),n.code==="KeyE"&&(this.pending.interact=!0),n.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-4]$/.test(n.code)&&(this.pending.weaponSlot=Number(n.code.slice(-1))))}}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=n.movementX,this.mouseY+=n.movementY)}),this.canvas.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType==="touch"||n.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===this.canvas,i=this.wasLocked&&!n;this.wasLocked=n,n||(this.clear(),i&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.enabled&&(n.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(n.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const t=(...n)=>n.some(i=>this.keys.has(i)),e=this.enabled?{forward:Math.max(-1,Math.min(1,Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(t("KeyD"))-Number(t("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(t("ArrowLeft"))-Number(t("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:t("ShiftLeft","ShiftRight")||this.touchSprint,crouch:t("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:t("KeyQ")}:{...bm};return this.mouseX=0,this.mouseY=0,this.pending={},e}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const t=document.querySelector("#touch-controls");if(!t)return;t.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const e=t.querySelector(".touch-stick");this.stick=e.querySelector("i"),e.addEventListener("pointerdown",a=>{!this.enabled||this.stickPointer>=0||(a.preventDefault(),this.stickPointer=a.pointerId,this.stickOrigin={x:a.clientX,y:a.clientY},e.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{if(!this.enabled||a.pointerId!==this.stickPointer)return;const o=a.clientX-this.stickOrigin.x,c=a.clientY-this.stickOrigin.y,l=Math.hypot(o,c),h=38,d=l>h?h/l:1;this.touchMove={x:o*d/h,y:c*d/h},this.stick&&(this.stick.style.transform=`translate(${o*d}px,${c*d}px)`)});const n=a=>{a.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n);const i=t.querySelector(".touch-look");i.addEventListener("pointerdown",a=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY},i.setPointerCapture(a.pointerId))}),i.addEventListener("pointermove",a=>{!this.enabled||a.pointerId!==this.lookPointer||(this.mouseX+=(a.clientX-this.lastLook.x)*1.6,this.mouseY+=(a.clientY-this.lastLook.y)*1.6,this.lastLook={x:a.clientX,y:a.clientY})});const r=a=>{a.pointerId===this.lookPointer&&(this.lookPointer=-1)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),t.querySelectorAll("button").forEach(a=>{a.addEventListener("pointerdown",c=>{if(this.enabled)switch(c.preventDefault(),a.setPointerCapture(c.pointerId),a.classList.add("held"),a.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const o=()=>{a.classList.remove("held"),a.dataset.action==="fire"&&(this.touchFire=!1),a.dataset.action==="sprint"&&(this.touchSprint=!1)};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)})}}const Al="fossil-noir-3d-settings",Pi={sensitivity:1,resolution:"640",quality:"high",volume:.7,musicVolume:.75,effectsVolume:.95,difficulty:"normal"},Em={revolver:"DETECTIVE REVOLVER",shotgun:"TACTICAL SHOTGUN",plasma:"PLASMA RIFLE",machinegun:"HEAVY MACHINE GUN"};class Tm{constructor(t){this.callbacks=t,this.settings=this.loadSettings(),this.overlay.addEventListener("click",n=>{const i=n.target.closest("button[data-action]");if(!(!i||i.disabled))switch(i.dataset.action){case"start":t.start(!1);break;case"continue":t.start(!0);break;case"resume":t.resume();break;case"retry":t.restart(!1);break;case"checkpoint":t.restart(!0);break;case"menu":t.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",n=>{const i=n.target;if(!i.dataset.setting)return;const r=i.dataset.setting,a=["sensitivity","volume","musicVolume","effectsVolume"].includes(r)?Number(i.value):i.value;this.settings=this.validateSettings({...this.settings,[r]:a});try{localStorage.setItem(Al,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings}),r==="sensitivity"&&(this.overlay.querySelector("#sensitivity-value").textContent=`${this.settings.sensitivity.toFixed(1)}×`),r==="volume"&&(this.overlay.querySelector("#volume-value").textContent=`${Math.round(this.settings.volume*100)}%`),r==="musicVolume"&&(this.overlay.querySelector("#music-volume-value").textContent=`${Math.round(this.settings.musicVolume*100)}%`),r==="effectsVolume"&&(this.overlay.querySelector("#effects-volume-value").textContent=`${Math.round(this.settings.effectsVolume*100)}%`)}),document.addEventListener("keydown",n=>{this.screen!=="playing"&&n.code==="Escape"&&(n.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&t.resume())});const e=document.createElement("button");e.className="desktop-pause",e.setAttribute("aria-label","Pause mission"),e.textContent="Ⅱ",e.addEventListener("click",()=>t.pause()),document.querySelector("#game").appendChild(e),this.show("menu")}settings;screen="menu";panel="main";state;overlay=document.querySelector("#menu-overlay");cached=new Map;show(t){this.screen=t,this.panel="main",document.body.classList.toggle("playing",t==="playing"),document.body.dataset.screen=t,this.overlay.hidden=t==="playing",t!=="playing"&&this.render()}update(t){this.state=t;const e=t.player;this.write("hud-health",String(Math.max(0,Math.ceil(e.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(e.armor))).padStart(3,"0")),this.write("hud-ammo",e.reload>0?"LOAD":String(e.ammo[e.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(e.reserve[e.weapon]).padStart(3,"0")}`),this.write("hud-weapon",e.owned.includes(e.weapon)?Em[e.weapon]:"MECHANICAL ARM"),this.write("hud-kills",`${t.kills} / ${t.enemies.length}`),this.write("hud-mode",e.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(t.slow*100)}%`);const n=document.querySelector("#hud-key");n.classList.toggle("acquired",e.keycard),n.querySelector("b").textContent=e.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,e.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,e.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",e.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,e.hurt*.7)));const i=e.owned.length?!e.keycard&&e.z>=-19?"REACH THE AXIOM FACILITY":e.keycard?t.powered?"REACH THE INDUSTRIAL ELEVATOR":"ENTER THE LAB · RESTORE ELEVATOR POWER":"FIND THE SECURITY KEYCARD":"FIND YOUR REVOLVER";this.write("objective",i),this.write("message",t.messageTime>0?t.message:"");let r="";const a=t.doors.find(o=>Math.hypot(o.x-e.x,o.z-e.z)<3.2);e.mounted?r="E · DISMOUNT STRIDER":Math.hypot(t.mount.x-e.x,t.mount.z-e.z)<2.8?r="E · RIDE STRIDER":!t.powered&&Math.hypot(Ce.switch.x-e.x,Ce.switch.z-e.z)<2.5?r="E · RESTORE ELEVATOR POWER":Math.hypot(Ce.exit.x-e.x,Ce.exit.z-e.z)<3?r=t.powered?"ENTER THE LIFT TO EXTRACT":"ELEVATOR POWER REQUIRED":a&&(r=a.locked&&!e.keycard?"SECURITY KEYCARD REQUIRED":`E · ${a.target>0?"CLOSE":"OPEN"} ${a.label.toUpperCase()}`),this.write("interaction",r),document.querySelector("#crosshair").classList.toggle("firing",e.recoil>.1)}setError(t){const e=document.querySelector("#error");e.textContent=t,e.hidden=!t}write(t,e){if(this.cached.get(t)===e)return;this.cached.set(t,e);const n=document.getElementById(t);n&&(n.textContent=e)}hasCheckpoint(){if(this.state?.checkpoint)return!0;try{return!!localStorage.getItem("fossil-noir-3d-checkpoint")}catch{return!1}}render(){const t=this.hasCheckpoint(),e=this.panel==="main",n=this.screen==="menu";let i="",r="";if(this.panel==="controls")r="FIELD MANUAL",i='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them. Shoot fuel canisters to blast nearby enemies; shop glass shatters.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")r="SYSTEM SETUP",i=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">MASTER VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="music-volume">MUSIC VOLUME <output id="music-volume-value">${Math.round(this.settings.musicVolume*100)}%</output></label><input id="music-volume" data-setting="musicVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.musicVolume}"><label for="effects-volume">EFFECTS VOLUME <output id="effects-volume-value">${Math.round(this.settings.effectsVolume*100)}%</output></label><input id="effects-volume" data-setting="effectsVolume" type="range" min="0" max="1" step="0.05" value="${this.settings.effectsVolume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty==="easy"?"selected":""}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty==="normal"?"selected":""}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty==="hard"?"selected":""}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(n)i=`<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${t?"":"disabled"}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")r="MISSION PAUSED",i=`<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${t?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")r="CASE CLOSED",i=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${t?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${t?"":"primary"}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){r="DISTRICT SURVIVED";const a=Math.floor(this.state?.time??0);i=`<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${n&&e?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${n&&e?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${r?`<h2 class="panel-title">${r}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${i}</div></section>${n&&e?'<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>':""}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${n?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const t=localStorage.getItem(Al);return this.validateSettings(t?JSON.parse(t):{})}catch{return{...Pi}}}validateSettings(t){const e=t&&typeof t=="object"?t:{},n=(i,r,a,o)=>typeof i=="number"&&Number.isFinite(i)?Math.min(a,Math.max(r,i)):o;return{sensitivity:n(e.sensitivity,.3,2.5,Pi.sensitivity),resolution:e.resolution==="320"||e.resolution==="640"?e.resolution:Pi.resolution,quality:e.quality==="low"?"low":"high",volume:n(e.volume,0,1,Pi.volume),musicVolume:n(e.musicVolume,0,1,Pi.musicVolume),effectsVolume:n(e.effectsVolume,0,1,Pi.effectsVolume),difficulty:e.difficulty==="easy"||e.difficulty==="hard"?e.difficulty:"normal"}}}const Un=["#151b20","#2d3b43","#465761","#687b84","#96a7ad","#ced5ce"],Rl={revolver:[159,119],shotgun:[159,117],plasma:[160,119],machinegun:[158,116]};class wm{constructor(t){this.canvas=t,t.width=640,t.height=400,t.style.imageRendering="pixelated";const e=t.getContext("2d");if(!e)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=e,e.imageSmoothingEnabled=!1,e.setTransform(2,0,0,2,0,0);for(const n of["fist","revolver","shotgun","plasma","machinegun"]){const i=document.createElement("canvas");i.width=640,i.height=400;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.setTransform(2,0,0,2,0,0),this.paintWeapon(r,n),this.sprites.set(n,i)}this.cacheFiringEffects()}ctx;sprites=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;effectTime=0;movementAmount=0;shotSerial=0;flares=new Map;smokeSprites=[];smoke=[];casings=[];reloadCasesEjected=!1;lastSimulationTime=0;render(t,e){const n=t.player,i=this.ctx;e=Math.max(0,Math.min(e,.06)),this.effectTime+=e,i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,320,200);const r=n.owned.includes(n.weapon)?n.weapon:"fist";if(t.time<this.lastSimulationTime&&(this.initialized=!1,this.flash=0,this.shotAge=1,this.lastRecoil=0,this.lastReload=0,this.switchTime=0,this.movementAmount=0,this.travel=0,this.effectTime=0,this.smoke.length=0,this.casings.length=0),this.lastSimulationTime=t.time,this.initialized||(this.current=this.next=r,this.lastX=n.x,this.lastZ=n.z,this.initialized=!0),r!==this.next&&(this.next=r,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-e),this.switchTime<.16&&(this.current=this.next)),n.recoil>.65&&n.recoil>this.lastRecoil+.04&&r!=="fist"&&!n.mounted&&(this.flash=r==="plasma"?.11:r==="shotgun"?.09:.075,this.shotAge=0,this.shotSerial++,this.spawnShotEffects(r)),this.lastRecoil=n.recoil,this.flash=Math.max(0,this.flash-e),this.shotAge+=e,n.reload>this.lastReload+.1&&(this.reloadDuration=n.reload,this.reloadCasesEjected=!1),this.lastReload=n.reload,e>0){const m=Math.hypot(n.x-this.lastX,n.z-this.lastZ)/e;this.lastX=n.x,this.lastZ=n.z,this.travel+=Math.min(m,15)*e*(n.mounted?1.9:2.5),this.movementAmount=Math.min(m/4,1),this.updateParticles(e)}const a=this.movementAmount,o=Math.sin(this.travel)*2.2*a,c=Math.abs(Math.cos(this.travel))*2.5*a,l=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,h=n.reload>0?1-n.reload/this.reloadDuration:0,d=n.reload>0?Math.sin(h*Math.PI):0,f=Math.min(1,n.recoil),p=this.shotAge<.26?Math.exp(-this.shotAge*(this.current==="shotgun"?11:19)):0,u=this.current==="shotgun"?11:this.current==="revolver"?6:this.current==="machinegun"?3.5:4,x=this.current==="shotgun"?.12:this.current==="revolver"?.105:this.current==="machinegun"?.033:.035;if(this.current==="revolver"&&n.reload>0&&h>.22&&!this.reloadCasesEjected){this.reloadCasesEjected=!0;for(let m=0;m<6;m++)this.spawnCasing("revolver",168-m*.7,167+m*.3,28+m*7,-27-m*3,m)}if(n.mounted){this.paintMount(i,this.effectTime,a,f),this.line(i,[173,159],[251,188],"#5b4f35",2),this.arm(i,247,186);return}i.save(),i.translate(Math.round(o+p*(this.current==="machinegun"?Math.sin(this.shotSerial*2.4)*1.5:1)),Math.round(c+l+p*u+d*23)),p>0&&n.reload<=0&&(i.translate(220,180),i.rotate(p*x),i.translate(-220,-180)),n.reload>0&&(i.translate(209,176),i.rotate(d*(this.current==="revolver"?.3:-.14)),i.translate(-209,-176)),i.drawImage(this.sprites.get(this.current),0,0,320,200),this.paintAmmoGauge(i,this.current,n.ammo[this.current]||0),this.paintMechanism(i,this.current,n.reload>0),this.current==="plasma"&&this.paintPlasmaPulse(i,this.effectTime,n.reload>0),this.paintSmoke(i),n.reload>0&&this.paintReload(i,this.current,h),this.flash>0&&n.reload<=0&&this.paintFlash(i,this.current),this.current==="shotgun"&&this.shotAge<.48&&this.shotAge>.12&&n.reload<=0&&this.paintPumpHand(i,Math.sin((this.shotAge-.12)/.36*Math.PI)*8),i.restore(),this.paintCasings(i)}poly(t,e,n,i="#080c10"){t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(const[r,a]of e.slice(1))t.lineTo(r,a);t.closePath(),t.fillStyle=n,t.fill(),i&&(t.strokeStyle=i,t.lineWidth=1,t.stroke())}line(t,e,n,i,r=1){t.beginPath(),t.moveTo(...e),t.lineTo(...n),t.strokeStyle=i,t.lineWidth=r,t.stroke()}bolt(t,e,n){t.fillStyle="#10161c",t.fillRect(e-2,n-2,5,5),t.fillStyle="#9faeae",t.fillRect(e-1,n-1,3,3),t.fillStyle="#344650",t.fillRect(e-1,n,3,1),t.fillStyle="#e2e5d5",t.fillRect(e-1,n-1,2,.5),t.fillStyle="#131f26",t.fillRect(e-.5,n-.5,.5,2),t.fillStyle="#52636a",t.fillRect(e+1,n+.5,.5,1.5)}screw(t,e,n,i=!1){t.fillStyle="#091317",t.fillRect(e-1,n-1,2.5,2.5),t.fillStyle=i?"#a58d59":"#91a19e",t.fillRect(e-.5,n-.5,1.5,1.5),t.fillStyle=i?"#f0d399":"#dbe0d3",t.fillRect(e-.5,n-.5,1,.5),t.fillStyle="#24333b",t.fillRect(e,n-.5,.5,1.5)}inset(t,e,n="#27353b"){this.poly(t,e,n,"#091318");for(let i=0;i<e.length-1;i++)i%2===0&&this.line(t,e[i],e[i+1],"#b0beb063",.5)}machining(t,e,n,i=90){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const f of e.slice(1))t.lineTo(...f);t.closePath(),t.clip();const r=e.map(f=>f[0]),a=e.map(f=>f[1]),o=Math.min(...r),c=Math.min(...a),l=Math.max(...r)-o,h=Math.max(...a)-c;let d=n;for(let f=0;f<i;f++){d=d*1664525+1013904223>>>0;const p=o+d%Math.max(1,l*2|0)*.5;d=d*1664525+1013904223>>>0;const u=c+d%Math.max(1,h*2|0)*.5;t.fillStyle=f%4===0?"#d3dcc241":f%4===1?"#030a136a":"#a5bab225",t.fillRect(p,u,f%9===0?2.5:.5,.5),f%17===0&&(t.fillStyle="#101b2570",t.fillRect(p,u+.5,1.5,.5))}t.restore()}etch(t,e,n,i,r="#b3bdab",a=0){const o={A:["010","101","111","101","101"],B:["110","101","110","101","110"],C:["111","100","100","100","111"],D:["110","101","101","101","110"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],H:["101","101","111","101","101"],I:["111","010","010","010","111"],K:["101","101","110","101","101"],L:["100","100","100","100","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["110","101","110","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"],V:["101","101","101","101","010"],X:["101","101","010","101","101"],Y:["101","101","010","010","010"],0:["111","101","101","101","111"],1:["010","110","010","010","111"],2:["110","001","010","100","111"],3:["110","001","010","001","110"],4:["101","101","111","001","001"],5:["111","100","110","001","110"],6:["011","100","111","101","111"],7:["111","001","010","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","110"],"-":["000","000","111","000","000"],".":["000","000","000","000","010"]};t.save(),t.translate(n,i),t.rotate(a),t.fillStyle=r;for(let c=0;c<e.length;c++){const l=o[e[c]];l&&l.forEach((h,d)=>{for(let f=0;f<3;f++)h[f]==="1"&&t.fillRect(c*2+f*.5,d*.5,.5,.5)})}t.restore()}wire(t,e,n,i=1){for(let r=0;r<e.length-1;r++)this.line(t,e[r],e[r+1],"#071219",i+1.5);for(let r=0;r<e.length-1;r++)this.line(t,e[r],e[r+1],n,i);for(let r=0;r<e.length-1;r++){const[a,o]=e[r];this.line(t,[a,o-.5],[e[r+1][0],e[r+1][1]-.5],"#ffe1b03a",.5)}}gripTexture(t,e){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const r of e.slice(1))t.lineTo(...r);t.closePath(),t.clip();const n=e.map(r=>r[0]),i=e.map(r=>r[1]);for(let r=Math.min(...i);r<Math.max(...i);r+=1.5)for(let a=Math.min(...n);a<Math.max(...n);a+=1.5)t.fillStyle="#090e1380",t.fillRect(a+Math.round(r)%2*.5,r,.5,.5),t.fillStyle="#c2ae8b45",t.fillRect(a+.5,r+.5,.5,.5);t.restore()}scratches(t,e,n,i=45){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const f of e.slice(1))t.lineTo(...f);t.closePath(),t.clip();const r=e.map(f=>f[0]),a=e.map(f=>f[1]),o=Math.min(...r),c=Math.min(...a),l=Math.max(...r)-o,h=Math.max(...a)-c;let d=n;for(let f=0;f<i;f++){d=d*1664525+1013904223>>>0;const p=o+d%Math.max(1,l|0);d=d*1664525+1013904223>>>0;const u=c+d%Math.max(1,h|0);t.fillStyle=f%3===0?"#a2afa42b":"#040b104a",t.fillRect(p,u,f%5===0?3:1,1)}t.restore()}arm(t,e=204,n=165){const i=[[266,184],[319,199],[326,217],[258,213],[240,195]];this.poly(t,i,"#141619"),this.poly(t,[[270,188],[319,203],[319,211],[264,201],[248,189]],"#2b3031"),this.line(t,[277,191],[314,204],"#484f4b",2);const r=[[e+7,n+13],[e+24,n+8],[274,181],[280,197],[258,209],[e+4,n+27]];this.poly(t,r,Un[2]),this.poly(t,[[e+13,n+13],[e+24,n+11],[267,184],[271,190],[257,196],[e+12,n+24]],Un[3]),this.poly(t,[[e+12,n+13],[e+24,n+11],[267,184],[260,185],[e+16,n+18]],Un[5]),this.poly(t,[[e+14,n+25],[258,199],[275,191],[277,198],[259,205]],Un[0]),this.scratches(t,r,773,100),this.line(t,[e+20,n+22],[259,193],"#0b151b",5),this.line(t,[e+20,n+22],[259,193],"#9eaeb0",2),this.line(t,[e+24,n+28],[258,201],"#0b151b",5),this.line(t,[e+24,n+28],[258,201],"#776b47",2),this.poly(t,[[258,185],[266,182],[277,190],[274,200],[266,202],[265,192]],"#30383c"),this.bolt(t,270,191),this.bolt(t,254,187),t.fillStyle="#28d989",t.fillRect(253,190,3,2),t.fillRect(257,191,2,2),this.line(t,[274,187],[278,197],"#afa17b",2),this.inset(t,[[239,181],[253,183],[258,189],[247,193],[238,187]],"#31434b"),this.machining(t,r,7133,145),this.line(t,[241,182],[251,184],"#ced4bd",.5),this.line(t,[240,188],[247,192],"#14202c",.5),this.screw(t,241,184),this.screw(t,251.5,187.5,!0),this.screw(t,261.5,194.5),this.etch(t,"VANE-09",244,184,"#b9c7b9",.28),this.wire(t,[[e+17,n+28],[238,195],[247,198],[254,197]],"#ac724c",1),this.wire(t,[[e+19,n+30],[240,198],[248,201],[255,200]],"#527b82",.5);for(let a=0;a<6;a++)this.line(t,[257+a*.8,191-a*.3],[258+a*.8,195-a*.3],a%2?"#192b32":"#afbcae",.5),this.line(t,[270+a*.6,185+a*.6],[272+a*.6,187+a*.6],a%2?"#b7ba99":"#2f3431",.5);for(let a=0;a<4;a++)t.fillStyle="#111e25",t.fillRect(263+a*1.5,187+a*.5,1,.5);this.line(t,[e+21,n+20],[254,188],"#f2efce",.5),this.line(t,[e+21,n+21],[255,190],"#303c42",.5),t.fillStyle="#0a191b",t.fillRect(251,189,8,3);for(let a=0;a<4;a++)t.fillStyle=a===3?"#6e7150":"#7ef4af",t.fillRect(252+a*1.5,190,1,1);this.line(t,[276,192],[279,196],"#f0d7a4",.5),this.line(t,[246,189],[248.5,188.5],"#111b20",.5),this.line(t,[246,189.5],[248,189],"#bfcbb1",.5);for(let a=0;a<11;a++)this.line(t,[283+a*2.5,193+a*.75],[283.5+a*2.5,194+a*.75],"#9b96784d",.5);this.line(t,[286,197],[310,206],"#080d13",.5),this.line(t,[291,199],[309,205],"#66706a",.5),this.hand(t,e,n)}hand(t,e,n){this.poly(t,[[e-14,n-5],[e-6,n-12],[e+9,n-10],[e+19,n],[e+21,n+14],[e+12,n+22],[e-3,n+18],[e-14,n+9]],"#293841"),this.poly(t,[[e-12,n-5],[e-6,n-10],[e+6,n-8],[e+12,n],[e+9,n+10],[e-7,n+7]],"#65767b");for(let i=0;i<4;i++){const r=e-11+i*6,a=n+i*2;this.poly(t,[[r,a],[r+4,a-2],[r+8,a+3],[r+7,a+10],[r+3,a+12],[r-1,a+7]],i%2?"#839391":"#61747a"),this.line(t,[r+1,a+5],[r+6,a+3],"#182730",2),t.fillStyle="#c0c8bb",t.fillRect(r+1,a,3,2),this.line(t,[r+1,a+.5],[r+4.5,a-1],"#e0e4c8",.5),this.line(t,[r+1.5,a+6.5],[r+5,a+5],"#afc0b6",.5),this.line(t,[r+1,a+9],[r+5.5,a+8],"#263a44",.5),this.screw(t,r+3,a+7),t.fillStyle="#233d42",t.fillRect(r+3.5,a+.5,.5,2),t.fillStyle="#9e8155",t.fillRect(r+6,a+4,.5,3),t.fillStyle="#f3e2b6",t.fillRect(r+6,a+4,.5,.5)}this.poly(t,[[e+12,n-2],[e+18,n-2],[e+23,n+6],[e+18,n+13],[e+13,n+8]],"#7e9195"),this.bolt(t,e+14,n+15),this.inset(t,[[e-9,n-7],[e-3,n-9],[e+4,n-5],[e+5,n-1],[e-4,n+2],[e-10,n-1]],"#41535b"),this.screw(t,e-6,n-4,!0),this.screw(t,e+1,n-3),this.line(t,[e+15,n],[e+20,n+6],"#cfdbcd",.5),this.line(t,[e+17,n+8],[e+20,n+6],"#243b43",.5),this.machining(t,[[e-12,n-5],[e+17,n],[e+20,n+13],[e-4,n+17]],139,30)}paintWeapon(t,e){if(e==="fist"){this.arm(t,195,172),this.poly(t,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],"#61777e");for(let n=0;n<4;n++)t.fillStyle="#b9c1b5",t.fillRect(186+n*7,155+n*2,5,6),t.fillStyle="#243a41",t.fillRect(186+n*7,162+n*2,5,2);this.machining(t,[[181,164],[190,148],[199,148],[217,158],[211,178],[189,179]],228,100);for(let n=0;n<4;n++)this.screw(t,188+n*7,157+n*2),this.line(t,[186+n*7,155+n*2],[190+n*7,155+n*2],"#e5e4c9",.5);this.etch(t,"VANE",193,170,"#b9cbc2",.25);return}if(e==="revolver"){this.arm(t,208,174),this.poly(t,[[196,156],[211,158],[230,185],[223,199],[208,196],[191,169]],"#191b1a"),this.poly(t,[[204,166],[212,167],[224,186],[218,193],[212,187]],"#4b3626");for(let n=0;n<5;n++)this.line(t,[210+n*2,175+n*3],[219+n,177+n*3],"#8a6d46");this.poly(t,[[155,122],[164,119],[180,139],[198,153],[196,170],[181,168],[169,145]],Un[2]),this.poly(t,[[156,121],[164,120],[183,143],[176,145]],Un[4]),this.poly(t,[[164,123],[169,128],[183,149],[182,156],[173,147]],Un[0]),this.line(t,[158,124],[177,148],Un[5],2),this.poly(t,[[175,143],[190,141],[204,152],[204,166],[194,173],[181,169],[174,155]],"#4a585b"),this.poly(t,[[177,144],[189,142],[199,150],[186,153]],"#b4bbaf"),this.poly(t,[[179,154],[186,152],[192,157],[191,168],[184,168]],"#202b31"),this.poly(t,[[193,154],[200,152],[203,157],[201,167],[195,170]],"#222d32"),this.line(t,[185,154],[185,166],"#8b9690",2),this.line(t,[198,155],[198,166],"#77847c",2),this.poly(t,[[163,120],[162,115],[157,116],[157,122]],"#1b2024"),t.fillStyle="#98f0c3",t.fillRect(158,115,3,1),this.poly(t,[[197,149],[201,143],[206,145],[208,153]],"#728281"),this.poly(t,[[193,171],[197,184],[207,188],[212,181],[207,171]],"#11191c"),this.line(t,[197,173],[201,182],"#9faaa4",2),this.scratches(t,[[174,142],[198,147],[203,164],[181,172]],129,45),this.paintGunDetail(t,e),this.hand(t,208,177),this.bolt(t,192,150),t.fillStyle="#a2ada1",t.fillRect(183,148,7,1)}else if(e==="shotgun"){this.arm(t,222,186);const n=[[154,120],[165,113],[183,136],[219,171],[240,192],[220,204],[186,170],[165,139]];this.poly(t,n,Un[1]),this.poly(t,[[156,121],[163,116],[188,142],[219,174],[211,179],[181,145]],"#879698"),this.poly(t,[[155,122],[159,125],[191,161],[203,176],[199,181],[179,161]],"#17222a"),this.line(t,[160,122],[208,174],"#c3cabb",2),this.poly(t,[[152,118],[156,114],[163,111],[167,115],[165,122],[158,125]],"#40545b"),this.poly(t,[[155,117],[159,115],[163,115],[163,120],[160,122],[156,121]],"#070c10"),this.line(t,[156,114],[163,112],"#b0bcb4",2),this.poly(t,[[194,155],[213,171],[229,188],[220,198],[205,184],[187,166]],"#34454a"),this.poly(t,[[200,155],[218,171],[225,183],[218,187],[207,174],[194,163]],"#617378"),this.poly(t,[[208,170],[214,170],[221,178],[218,182],[212,177]],"#0c171e"),this.line(t,[209,171],[219,180],"#a9b6b3"),this.poly(t,[[175,144],[184,140],[203,159],[196,171],[187,169],[174,155]],"#564939");for(let i=0;i<6;i++)this.line(t,[179+i*3,146+i*2],[181+i*3,157+i*2],i%2?"#b09562":"#282925",2);this.poly(t,[[227,187],[240,191],[254,212],[227,213],[216,197]],"#171c1b"),this.scratches(t,n,448,100),this.bolt(t,207,164),this.bolt(t,223,186),this.paintGunDetail(t,e),this.paintPumpHand(t,0),this.hand(t,225,184)}else if(e==="plasma"){this.arm(t,217,179);const n=[[150,122],[160,114],[170,119],[185,139],[215,150],[232,171],[233,193],[221,201],[198,180],[168,145]];this.poly(t,n,"#263a3c"),this.poly(t,[[150,121],[159,116],[169,119],[183,139],[175,144],[160,131]],"#566f71"),this.poly(t,[[149,121],[151,115],[158,111],[166,113],[171,122],[162,129]],"#182624"),this.poly(t,[[153,117],[158,114],[165,116],[167,120],[160,125],[154,123]],"#030c09"),this.poly(t,[[157,117],[162,117],[164,120],[160,122],[157,121]],"#76f6ac"),this.poly(t,[[179,139],[190,134],[208,146],[223,164],[213,174],[196,164]],"#668085"),this.poly(t,[[180,140],[189,136],[207,148],[204,155],[192,154]],"#aac0b5"),this.poly(t,[[179,151],[191,147],[212,169],[207,180],[196,175]],"#101b1d"),this.poly(t,[[185,151],[191,151],[205,167],[202,173],[198,170]],"#16714d");for(let i=0;i<5;i++)this.line(t,[185+i*4,149+i*4],[181+i*4,153+i*4],"#86f8b4",2);this.poly(t,[[205,150],[213,150],[232,169],[231,187],[224,190],[211,175]],"#314b50"),this.poly(t,[[211,153],[215,153],[226,165],[226,174],[220,173]],"#092522"),t.fillStyle="#84fbbe",t.fillRect(215,158,4,3),t.fillRect(220,164,3,3),this.poly(t,[[211,180],[220,177],[234,193],[231,205],[221,205],[209,192]],"#172424"),this.scratches(t,n,137,85),this.bolt(t,205,145),this.bolt(t,229,178),this.paintGunDetail(t,e),this.hand(t,215,181)}else{this.arm(t,229,186);const n=[[148,118],[158,109],[168,114],[178,134],[212,153],[240,178],[255,201],[222,211],[187,175],[160,145]];this.poly(t,n,"#222b2e"),this.poly(t,[[149,118],[157,112],[164,115],[191,151],[186,159],[173,146]],"#718184"),this.poly(t,[[156,127],[162,120],[199,156],[193,166],[184,159]],"#3a4c51"),this.poly(t,[[147,117],[150,111],[157,107],[165,111],[171,120],[163,130],[154,129]],"#3f525b");for(const[i,r]of[[153,115],[160,114],[157,122],[164,120]])t.fillStyle="#030a0e",t.fillRect(i-2,r-2,4,4),t.fillStyle="#8da09b",t.fillRect(i-2,r-3,4,1);for(let i=0;i<3;i++)this.line(t,[156+i*4,123-i*2],[187+i*5,159-i*2],i%2?"#b0b8ad":"#11191e",2);this.poly(t,[[186,153],[198,146],[215,154],[238,175],[243,193],[228,204],[207,188],[186,167]],"#405255"),this.poly(t,[[189,153],[198,150],[215,158],[229,173],[221,177],[204,163]],"#91a09b"),this.poly(t,[[189,160],[205,164],[227,182],[228,198],[214,192],[194,174]],"#1c2b31");for(let i=0;i<4;i++)this.poly(t,[[193+i*5,162+i*4],[197+i*5,163+i*4],[203+i*5,173+i*4],[199+i*5,174+i*4]],"#070f13");this.poly(t,[[211,164],[220,160],[230,168],[230,176],[222,177]],"#364747"),this.poly(t,[[218,161],[216,151],[221,147],[230,151],[234,157],[230,161]],"#586b6b"),this.poly(t,[[219,156],[221,151],[227,152],[229,157]],"#070f15"),this.poly(t,[[236,169],[263,174],[280,182],[277,194],[249,185],[237,181]],"#14191b");for(let i=0;i<8;i++){const r=240+i*5,a=174+i*1.7;this.poly(t,[[r,a],[r+4,a+1],[r+3,a+12],[r,a+14],[r-2,a+11]],i%2?"#846733":"#a68b4c"),t.fillStyle="#d0b471",t.fillRect(r,a+1,2,7),t.fillStyle="#382e23",t.fillRect(r-1,a+9,4,2)}this.scratches(t,n,1985,140),this.bolt(t,205,158),this.bolt(t,235,185),this.paintGunDetail(t,e),this.hand(t,232,185)}}paintGunDetail(t,e){if(e==="revolver"){this.line(t,[156.5,122.5],[176.5,145.5],"#eff0d1",.5),this.line(t,[162,122.5],[180,144],"#566570",.5),this.line(t,[164,124.5],[181,146.5],"#111b23",.5);for(let n=0;n<7;n++){const i=163+n*2,r=127+n*2.25;this.line(t,[i,r],[i+2,r-.5],"#263b41",.5),this.line(t,[i+.5,r+.5],[i+2,r],"#c6d3c9",.5)}this.etch(t,".357",166,133,"#32434a",.88);for(let n=0;n<5;n++){const i=176.5+n*4.5,r=147+n*1.9;this.poly(t,[[i,r],[i+2,r-.5],[i+4,r+3],[i+3,r+12],[i+1.5,r+13],[i,r+8]],n%2?"#5e7376":"#253842",""),this.line(t,[i+1,r+.5],[i+2,r+10],"#c2cbb3",.5),this.line(t,[i+3,r+2],[i+3,r+11],"#121f2a",.5),t.fillStyle="#d1ad61",t.fillRect(i+.5,r-1,1.5,1),t.fillStyle="#f4dd90",t.fillRect(i+.5,r-1,.5,.5)}this.inset(t,[[184,168],[195,168],[199,171],[197,175],[187,172]],"#42535a"),this.screw(t,188.5,170),this.screw(t,197,167),this.line(t,[178,145],[188,143],"#e9e6c3",.5),this.line(t,[192,143.5],[200,149.5],"#e1d9b2",.5),this.line(t,[197,147],[201,144],"#1c3038",.5);for(let n=0;n<4;n++)this.line(t,[200+n*.9,146.5+n*.2],[202+n*.9,147+n*.2],"#303e45",.5);this.gripTexture(t,[[204,166],[212,167],[224,186],[218,193],[212,187]]),this.machining(t,[[171,137],[187,146],[204,161],[191,170]],1974,115),this.etch(t,"VANE",194,166,"#c1b895",.15),this.screw(t,215.5,183.5,!0)}else if(e==="shotgun"){this.line(t,[157,115.5],[162.5,112.5],"#d1d7bb",.5),this.poly(t,[[156,116],[160,114.5],[162.5,115.5],[161.5,118],[158,119.5]],"#17262d",""),this.line(t,[158,116],[161,115],"#64818b",.5);for(let n=0;n<11;n++){const i=164.5+n*2.6,r=122+n*2.8;this.poly(t,[[i,r],[i+2.5,r+1.5],[i+3.5,r+4],[i+1,r+2.5]],"#13212b",""),this.line(t,[i+.5,r],[i+2.5,r+1.5],"#b3c4b5",.5),this.line(t,[i+3,r+.5],[i+5,r+2.5],"#2d3941",.5)}this.line(t,[164,121],[191,149],"#eef0cf",.5),this.line(t,[165,123],[194,154],"#52646d",.5),this.inset(t,[[198,157],[206,164],[213,168],[210,172],[201,167],[195,162]],"#2c4148"),this.etch(t,"12 GA",198,160,"#c1cdb9",.79),this.line(t,[208.5,171],[217,178],"#d3dbbf",.5),this.line(t,[211,174],[216.5,178.5],"#1a292b",.5),this.screw(t,199,157),this.screw(t,216,172),this.screw(t,223.5,189,!0);for(let n=0;n<8;n++){const i=177.5+n*2.5,r=144+n*2;this.line(t,[i,r],[i+1.5,r+7.5],"#180f13",.5),this.line(t,[i+.5,r],[i+2,r+7.5],"#c7aa6c",.5)}this.gripTexture(t,[[229,189],[239,193],[247,208],[229,209],[222,198]]),this.machining(t,[[155,120],[164,116],[193,146],[226,179],[221,194],[179,156]],2529,165),this.etch(t,"FN-12",216,183,"#b9c1ad",.8)}else if(e==="plasma"){for(let n=0;n<9;n++){const i=183+n*2.45,r=149+n*2.5;this.line(t,[i,r],[i-3.5,r+4],"#161913",2),this.line(t,[i,r],[i-3.5,r+4],"#c49657",1),this.line(t,[i,r],[i-2,r+2],"#f0d392",.5),t.fillStyle="#3e7651",t.fillRect(i-1,r+2.5,.5,1)}this.wire(t,[[184,141],[192,138],[205,144],[216,154],[220,162]],"#a46945",1.5),this.wire(t,[[181,144],[189,143],[204,150],[214,160]],"#254d5a",.5),this.inset(t,[[189,136],[202,143],[205,148],[198,148],[188,141]],"#394f57"),this.etch(t,"ION-X3",190,139,"#d2d9b9",.51),this.line(t,[180,140],[188,136],"#e5ebcf",.5),this.line(t,[197,141],[206,147],"#e0e1c0",.5);for(let n=0;n<5;n++){const i=208+n*2,r=153+n*2.2;this.poly(t,[[i,r],[i+2,r],[i+5,r+3],[i+3,r+3]],"#0b2329",""),this.line(t,[i+.5,r+.5],[i+3,r+2],"#91b8a1",.5)}this.inset(t,[[220,166],[226,169],[229,177],[225,181],[220,175]],"#293d42"),this.screw(t,222,169,!0),this.screw(t,226.5,176),this.line(t,[155,117],[158,114.5],"#aeffd3",.5),this.line(t,[165,116.5],[168,122],"#549878",.5),t.fillStyle="#ccfadc",t.fillRect(156.5,119,1,.5),this.gripTexture(t,[[215,182],[221,179],[230,194],[226,203],[218,197]]),this.machining(t,[[172,133],[190,135],[211,149],[233,173],[224,190],[196,161]],186,165),this.etch(t,"CAUTION",199,173,"#969972",.74)}else{for(const[n,i]of[[153,115],[160,114],[157,122],[164,120]])this.line(t,[n-2,i-1.5],[n+1.5,i-1.5],"#c6d2c1",.5),this.line(t,[n-2,i-1],[n-2,i+1],"#708a8f",.5),this.line(t,[n+1.5,i-.5],[n+1.5,i+1.5],"#17232e",.5),t.fillStyle="#2b414b",t.fillRect(n-.5,i+.5,1,.5);for(let n=0;n<8;n++){const i=166+n*2.5,r=129+n*2.7;this.poly(t,[[i,r],[i+2,r-1],[i+4,r+2],[i+2,r+3]],"#0b141c",""),this.line(t,[i,r],[i+1.5,r-.5],"#c5d0b5",.5),this.line(t,[i+2,r+3],[i+3.5,r+2],"#4e6a6c",.5)}this.line(t,[153,124],[178,153],"#e3e6c2",.5),this.line(t,[165,127],[192,155],"#566e72",.5),this.inset(t,[[198,150],[209,155],[218,164],[214,169],[203,160],[195,155]],"#556a6c"),this.etch(t,"M-60",200,153,"#d5d7b5",.64),this.line(t,[206,160],[216,168],"#152930",.5);for(let n=0;n<4;n++){const i=193.5+n*5,r=163+n*4;this.line(t,[i,r],[i+3,r+7],"#5b7378",.5),this.line(t,[i+4,r+2],[i+6,r+8],"#a2b8a850",.5)}this.screw(t,199,153),this.screw(t,218.5,166.5),this.screw(t,233,178,!0);for(let n=0;n<8;n++){const i=240+n*5,r=174+n*1.7;t.fillStyle="#eee0a1",t.fillRect(i+.5,r+1,.5,7),t.fillStyle="#614e2b",t.fillRect(i+2,r+1,.5,7),this.line(t,[i-1,r+10],[i+2,r+10],"#f6d080",.5),this.line(t,[i-1,r+12],[i+2,r+12],"#2e2822",.5),this.screw(t,i+2.5,r+9)}this.wire(t,[[236,183],[244,190],[256,191]],"#687c78",.5),this.gripTexture(t,[[226,189],[238,187],[249,201],[239,208],[228,204]]),this.machining(t,[[162,128],[182,145],[210,149],[238,175],[242,194],[212,188]],6509,190),this.etch(t,"FOSSIL",205,179,"#90a399",.72)}}paintAmmoGauge(t,e,n){if(e==="fist")return;if(e==="revolver"){for(let c=0;c<6;c++)t.fillStyle=c<n?"#dfc181":"#243c46",t.fillRect(181+c*2,144+c*.3,1,.5);return}const i=e==="plasma",r=e==="machinegun",a=i?216:r?220:204,o=i?159:r?173:164;t.save(),t.translate(a,o),t.rotate(i?.72:r?.7:.78),t.fillStyle="#050f14",t.fillRect(-.5,-.5,8,4),t.fillStyle="#4c7070",t.fillRect(-.5,-.5,8,.5),this.etch(t,String(Math.min(99,n)).padStart(2,"0"),.5,.25,n>0?i?"#94ffc5":"#d6d1a1":"#ff7851"),t.fillStyle=n>0?"#53b693":"#933b28",t.fillRect(5.5,.5,.5,2),t.restore()}paintPumpHand(t,e){t.save(),t.translate(Math.round(e*.8),Math.round(e)),this.poly(t,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],"#1a2226"),this.poly(t,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],"#74858a"),this.line(t,[143,195],[163,174],"#c3ccc3",2);for(let n=0;n<4;n++)this.poly(t,[[166+n*4,161+n*2],[173+n*4,163+n*2],[176+n*4,169+n*2],[173+n*4,174+n*2],[166+n*4,169+n*2]],n%2?"#9aaba4":"#576c75"),this.line(t,[170+n*4,166+n*2],[175+n*4,168+n*2],"#1c2c34",2),this.line(t,[167+n*4,162+n*2],[172+n*4,164+n*2],"#e2e6c8",.5),this.screw(t,170+n*4,166+n*2),t.fillStyle="#9c7747",t.fillRect(174+n*4,169+n*2,.5,2);this.bolt(t,154,187),this.inset(t,[[145,190],[151,181],[158,176],[162,180],[155,186],[148,194]],"#4a626b"),this.wire(t,[[143,196],[151,189],[156,186]],"#a1744a",.5),this.machining(t,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],271,60),this.etch(t,"09",148,187,"#d0d6bb",-.81),t.restore()}paintPlasmaPulse(t,e,n){if(n)return;t.fillStyle=Math.sin(e*9)>0?"#c4ffe1":"#49dc95",t.fillRect(215,158,4,2),t.fillRect(221,165,2,2),t.fillRect(158,117,3,3);const i=1-Math.min(1,this.shotAge/.32);for(let r=0;r<5;r++){const a=i>.05||Math.sin(e*7-r*.9)>.4;this.line(t,[185+r*4,149+r*4],[181+r*4,153+r*4],a?"#b0ffbd":"#2fbc79",1),i>.2&&(t.fillStyle="#d6ffd2",t.fillRect(182+r*4,151+r*4,.5,1),r%2===this.shotSerial%2&&this.line(t,[184+r*4,151+r*4],[188+r*4,151+r*4],"#68eaa7",.5))}}paintReload(t,e,n){const i=Math.sin(n*Math.PI);if(e==="revolver"){const r=171-Math.round(i*12),a=158+Math.round(i*10);this.poly(t,[[r-8,a-5],[r+5,a-8],[r+12,a],[r+10,a+13],[r-3,a+15],[r-11,a+5]],"#687b7d"),this.line(t,[r-8,a-5],[r+4,a-7],"#dfe4c1",.5),this.line(t,[r+9,a+2],[r+8,a+11],"#1c353d",.5);for(let o=0;o<6;o++){const c=o*Math.PI/3+n*5,l=Math.round(r+Math.cos(c)*6),h=Math.round(a+Math.sin(c)*6);t.fillStyle=n>.45?"#c2a254":"#0b151a",t.fillRect(l-2,h-2,4,4),t.fillStyle=n>.45?"#fae5a2":"#5f777e",t.fillRect(l-1.5,h-2,2,.5),n>.45&&(t.fillStyle="#615137",t.fillRect(l-.5,h-.5,1,1))}this.screw(t,r,a,!0),n>.35&&n<.7&&this.hand(t,147,190)}else if(e==="shotgun")this.hand(t,175+Math.round(i*9),190),t.fillStyle="#932621",t.fillRect(179,176,5,10),t.fillStyle="#d0aa62",t.fillRect(179,175,5,2),t.fillStyle="#edc99a",t.fillRect(179.5,175,4,.5),t.fillStyle="#ef6352",t.fillRect(179.5,177,.5,8),t.fillStyle="#541c21",t.fillRect(183,178,.5,7),this.etch(t,"12",180,179,"#f3d4b2");else if(e==="plasma"){const a=176+Math.round(i*21);this.poly(t,[[188,a],[199,a-4],[211,a+11],[201,a+19],[192,a+9]],"#294447"),this.line(t,[193,a+3],[202,a+14],"#72ffb0",4);for(let o=0;o<5;o++)this.line(t,[194+o*2,a+3+o*2],[191+o*2,a+5+o*2],"#173c3a",.5);this.line(t,[190,a+.5],[198,a-2.5],"#c4d9be",.5),this.screw(t,201,a+5,!0),this.hand(t,168,a+15)}else e==="machinegun"&&(this.hand(t,259-Math.round(i*16),178+Math.round(i*11)),t.fillStyle="#c7ac68",t.fillRect(242,167,14,3))}cacheFiringEffects(){for(const t of["revolver","shotgun","plasma","machinegun"]){const e=[];for(let n=0;n<2;n++)for(let i=0;i<4;i++){const r=document.createElement("canvas");r.width=128,r.height=128;const a=r.getContext("2d");a.setTransform(2,0,0,2,0,0);const o=t==="plasma",c=(t==="shotgun"?26:t==="machinegun"?20:o?22:17)*(1-i*.12),l=32,h=42,d=n?1:-1;for(let f=0;f<7;f++){const p=-Math.PI+f/6*Math.PI,u=c*(.62+(f*5+n*3)%7*.065),x=Math.round(Math.cos(p)*u),m=Math.round(Math.sin(p)*u);this.poly(a,[[l-3,h-1],[l+x*.5-2,h+m*.5-2],[l+x-1,h+m],[l+x+3,h+m+2],[l+x*.5+3,h+m*.5+3],[l+3,h+1]],o?"#126948":i>1?"#873925":"#a84925","")}if(this.poly(a,[[l-4,h],[l-15,h-5],[l-10,h-8],[l-12,h-15],[l-6,h-12],[l+d*4,h-c],[l+7,h-12],[l+13,h-15],[l+11,h-7],[l+20,h-6],[l+12,h-1],[l+4,h+4]],o?"#27c881":"#e6742b",""),this.poly(a,[[l-4,h],[l-8,h-6],[l-3,h-8],[l+d*3,h-16],[l+6,h-8],[l+12,h-6],[l+5,h+3]],o?"#8affa9":"#ffd466",""),a.fillStyle=o?"#e6ffdd":"#fff5bc",a.fillRect(l-2,h-5,6,7),a.fillRect(l,h-9,3,5),a.fillRect(l-4,h-3,2,3),o){const f=[[[l-4,h-9],[l-14,h-17],[l-11,h-21],[l-19,h-25]],[[l+4,h-7],[l+16,h-14],[l+12,h-18],[l+20,h-24]],[[l,h-12],[l+d*5,h-24],[l-d*1,h-27]]];for(const p of f)for(let u=0;u<p.length-1;u++)this.line(a,p[u],p[u+1],i%2?"#72efb3":"#bef6bd",.5);a.fillStyle="#72e5ac";for(let p=0;p<7;p++)a.fillRect(l-23+(p*11+n*5)%43,h-10-p*7%22,.5,.5)}else for(let f=0;f<15;f++)a.fillStyle=f%3?"#da8c43":"#ffd996",a.fillRect(l-25+(f*13+n*7)%49,h-4-f*11%31,f%4===0?1.5:.5,.5);e.push(r)}this.flares.set(t,e)}for(let t=0;t<4;t++){const e=document.createElement("canvas");e.width=48,e.height=48;const n=e.getContext("2d");n.setTransform(2,0,0,2,0,0);const i=["#495457","#66716d","#829084"];for(let r=0;r<22;r++){const a=3+(r*7+t*3)%15,o=3+(r*11+t*5)%15;n.fillStyle=i[r%3],n.fillRect(a,o,2+r%3,2+(r+t)%3)}this.smokeSprites.push(e)}}spawnShotEffects(t){const e=Rl[t];if(!e)return;const n=t==="shotgun"?4:t==="plasma"?2:3;for(let i=0;i<n;i++)this.smoke.push({age:0,life:.35+i*.08,x:e[0],y:e[1]-3,vx:-10+(this.shotSerial*7+i*13)%21,vy:-22-i*8,size:t==="shotgun"?7+i:5+i,variant:(this.shotSerial+i)%4,green:t==="plasma"});this.smoke.length>28&&this.smoke.splice(0,this.smoke.length-28),t==="shotgun"&&this.spawnCasing(t,217,174,88,-73,this.shotSerial),t==="machinegun"&&this.spawnCasing(t,223,165,94,-62,this.shotSerial)}spawnCasing(t,e,n,i,r,a){this.casings.push({age:0,weapon:t,x:e,y:n,vx:i,vy:r,spin:a}),this.casings.length>14&&this.casings.splice(0,this.casings.length-14)}updateParticles(t){for(let e=this.smoke.length-1;e>=0;e--){const n=this.smoke[e];n.age+=t,n.age>n.life&&this.smoke.splice(e,1)}for(let e=this.casings.length-1;e>=0;e--){const n=this.casings[e];n.age+=t,n.age>.55&&this.casings.splice(e,1)}}paintSmoke(t){for(const e of this.smoke){const n=e.age/e.life,i=Math.round(e.size*(.65+n*.75)),r=Math.round(e.x+e.vx*e.age),a=Math.round(e.y+e.vy*e.age);t.save(),t.globalAlpha=(1-n)*(e.green?.22:.36),t.drawImage(this.smokeSprites[e.variant],r-i/2,a-i/2,i,i),t.restore()}}paintCasings(t){for(const e of this.casings){const n=e.weapon==="shotgun"?.14:e.weapon==="machinegun"?.035:0;if(e.age<n)continue;const i=e.age-n;t.save(),t.translate(Math.round(e.x+e.vx*i),Math.round(e.y+e.vy*i+175*i*i)),t.rotate((Math.floor(i*18)+e.spin)%4*Math.PI/2);const r=e.weapon==="shotgun";t.fillStyle="#111711",t.fillRect(-1.5,-1.5,r?8:5,3.5),t.fillStyle=r?"#a6312c":"#b2964f",t.fillRect(-1,-1,r?6:4,2.5),t.fillStyle=r?"#ee7861":"#e6cb78",t.fillRect(-1,-1,r?5:3,.5),t.fillStyle="#e7ce82",t.fillRect(r?4:2,-1,1.5,2.5),t.fillStyle="#675435",t.fillRect(r?5:3,-.5,.5,1.5),t.restore()}}paintMechanism(t,e,n){if(n)return;const i=Math.max(0,1-this.shotAge/.16);if(e==="revolver"&&i>0){const a=Math.round(i*4);this.poly(t,[[198,148],[199,142+a],[203,141+a],[207,145+a],[207,150]],"#37474b"),this.line(t,[199,143+a],[203,142+a],"#c8d1b8",.5),t.fillStyle="#141f27",t.fillRect(199,149,6,1.5)}else if(e==="machinegun"){const a=Math.round(i*3);t.fillStyle="#07151b",t.fillRect(218,151,12,8),this.poly(t,[[218+a,153+a],[222+a,152+a],[227+a,157+a],[225+a,160+a],[220+a,156+a]],"#7f9592"),this.line(t,[219+a,153+a],[222+a,152+a],"#dbe1bd",.5),t.fillStyle=i>.4?"#d8c074":"#364640",t.fillRect(221,154,1,2)}if(this.flash<=0)return;const r=e==="plasma"?"#a5ffd2":"#ffe0a2";t.save(),t.globalAlpha=.55,this.line(t,[163,123],[178,141],r,1),this.line(t,[182,146],[193,148],r,.5),this.line(t,[220,176],[229,183],r,.5),t.fillStyle=r,t.fillRect(223,182,2,.5),t.fillRect(231,186,1,.5),t.restore()}paintFlash(t,e){const n=this.flares.get(e),i=Rl[e];if(!n||!i)return;const r=Math.min(3,Math.floor(this.shotAge*45));t.drawImage(n[this.shotSerial%2*4+r],i[0]-32,i[1]-42,64,64)}paintMount(t,e,n,i=0){const r=Math.round(Math.sin(e*9)*n*2-i*11);t.save(),t.translate(0,r),this.poly(t,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(t,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(t,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),this.machining(t,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);for(let a=0;a<7;a++){const o=147+a*3,c=172-a*2.1;this.poly(t,[[o,c],[o+2.5,c-1],[o+3,c+1],[o+1.5,c+2]],a%2?"#637558":"#283f34",""),this.line(t,[o,c],[o+2,c-.5],"#a0a580",.5)}if(this.line(t,[162,145],[173,145],"#8a966d",.5),this.line(t,[170,149.5],[177,151],"#1d342e",.5),t.fillStyle="#132922",t.fillRect(177,150,1.5,1),this.line(t,[157,149],[163,153],"#192c26",.5),this.line(t,[156.5,149.5],[162.5,153.5],"#91a371",.5),i>.25){this.poly(t,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let a=0;a<5;a++)t.fillStyle="#b9bf8c",t.fillRect(163+a*3,155,2,3)}else this.line(t,[157,155],[178,155],"#111c19",2);t.fillStyle="#dfb961",t.fillRect(171,146,4,2),t.fillStyle="#081410",t.fillRect(174,146,1,2),t.fillStyle="#ffdc89",t.fillRect(171,146,2,.5);for(let a=0;a<5;a++)this.poly(t,[[135+a*3,183-a*6],[130+a*4,179-a*7],[139+a*3,177-a*6]],"#809178");this.line(t,[150,162],[119,200],"#74664c",2),this.line(t,[174,163],[198,197],"#74664c",2),this.line(t,[151,162],[120,200],"#b5a483",.5),this.line(t,[174,162],[198,195],"#c2b298",.5),this.inset(t,[[150,164],[153,164],[150,168],[147,168]],"#ad9f6b"),this.screw(t,150,166,!0),t.restore()}}const bc=24e3,yc=112,Ec=16,Cl=Ec*4*60/yc,Re=Math.PI*2,Am=s=>440*2**((s-69)/12);function Tc(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/2147483648-1)}function tr(s,t=!1,e=bc){return{sampleRate:e,channels:Array.from({length:t?2:1},()=>new Float32Array(Math.ceil(s*e)))}}function Rm(s,t=bc){const e={revolver:.82,shotgun:1.1,plasma:.72,machinegun:.43}[s],n=tr(e,!0,t),i=new Float32Array(n.channels[0].length),r=Tc({revolver:6721,shotgun:1297,plasma:9919,machinegun:4049}[s]);let a=0,o=0,c=0,l=0;const h=s==="shotgun",d=s==="plasma",f=s==="machinegun";for(let p=0;p<i.length;p++){const u=p/t,x=r();a+=(x-a)*.085,o+=(x-o)*.43;const m=x-o,g=Math.min(1,u/.0012);let y;if(d)c+=Re*(72+970*Math.exp(-u*20))/t,l+=Re*(114+1430*Math.exp(-u*17))/t,y=(Math.sin(c+Math.sin(l)*1.5)*.58+Math.sin(l)*.24)*Math.exp(-u*10),y+=(m*.62+o*.4)*Math.exp(-u*24),y+=Math.sin(Re*49*u)*.45*Math.exp(-u*11),y+=Math.sin(Re*1880*u)*Math.exp(-u*15)*.11;else{const w=h?185:f?154:210,v=h?8.5:f?24:13;c+=Re*(43+w*Math.exp(-u*37))/t,y=Math.sin(c)*(h?1.03:.77)*Math.exp(-u*v),y+=m*1.55*Math.exp(-u*(h?100:155)),y+=o*(h?1.9:1.12)*Math.exp(-u*(h?21:f?55:31)),y+=a*(h?2.25:1.55)*Math.exp(-u*(h?9:16));const b=h?.38:f?.047:.12;if(u>b){const R=u-b;y+=(m*.24+Math.sin(Re*2230*R)*.13+Math.sin(Re*3180*R)*.07)*Math.exp(-R*83)}h&&u>.56&&(y+=(o*.5+Math.sin(Re*680*u)*.1)*Math.exp(-(u-.56)*45));const E=f?.112:h?.66:.19;if(u>E){const R=u-E;y+=(Math.sin(Re*2760*R)+Math.sin(Re*4130*R)*.35)*Math.exp(-R*58)*.085}}i[p]=Math.tanh(y*1.3)*g*Math.min(1,(e-u)/.035)}for(let p=0;p<2;p++){let u=0;const x=[.043+p*.009,.097-p*.012,.171+p*.014];for(let m=0;m<i.length;m++){let g=0;for(let y=0;y<x.length;y++){const w=m-Math.round(x[y]*t);w>=0&&(g+=i[w]*[.21,.12,.065][y])}u+=(g-u)*.27,n.channels[p][m]=Math.tanh((i[m]+u)*.94)*.97}}return n}function ns(s){const t={kick:.44,snare:.28,hat:.07,open:.29,metal:.37}[s],e=tr(t),n=Tc(s.charCodeAt(0)*1931);let i=0,r=0;for(let a=0;a<e.channels[0].length;a++){const o=a/e.sampleRate,c=n();i+=(c-i)*.22;let l=0;s==="kick"?(r+=Re*(43+113*Math.exp(-o*48))/e.sampleRate,l=Math.sin(r)*Math.exp(-o*12)+(c-i)*Math.exp(-o*160)*.48):s==="snare"?(l=(c-i*.7)*Math.exp(-o*21)*.65+Math.sin(Re*181*o)*Math.exp(-o*33)*.3,l+=(Math.sin(Re*331*o)+Math.sin(Re*418*o)*.4)*Math.exp(-o*40)*.14):s==="metal"?(l=(Math.sin(Re*765*o)*Math.sin(Re*1083*o)+Math.sin(Re*1743*o)*.4)*Math.exp(-o*17)*.4,l+=(c-i)*Math.exp(-o*32)*.25):l=(c-i)*Math.exp(-o*(s==="hat"?67:18))*.52,e.channels[0][a]=Math.tanh(l*1.8)*Math.min(1,o/8e-4)}return e}function Mn(s,t,e,n,i=0){const r=Math.round(e*s.sampleRate),a=s.channels[0].length,o=Math.sqrt((1-i)/2),c=Math.sqrt((1+i)/2);for(let l=0;l<t.channels[0].length;l++){const h=(r+l)%a;s.channels[0][h]+=t.channels[0][l]*n*o,s.channels[1][h]+=t.channels[t.channels.length-1][l]*n*c}}function Ii(s,t,e,n,i,r,a=0){const o=s.sampleRate,c=Am(n),l=s.channels[0].length,h=Math.round(t*o),d=Math.ceil(e*o),f=Math.sqrt((1-a)/2),p=Math.sqrt((1+a)/2);for(let u=0;u<d;u++){const x=u/o,m=Re*c*x,g=x/e;let y,w;r==="pad"?(y=Math.sin(m)*.52+Math.sin(m*1.004+Math.sin(x*1.3)*.12)*.32+Math.sin(m*1.997)*.13,w=Math.min(1,x/.29)*Math.min(1,(e-x)/.48)):r==="lead"?(y=Math.sin(m+Math.sin(m*2)*.62)*.63+Math.sin(m*3.002)*.12+Math.sin(m*.999)*.21,w=Math.min(1,x/.016)*Math.exp(-g*3.4)*Math.min(1,(e-x)/.055)):r==="riff"?(y=Math.tanh((Math.sin(m)+Math.sin(m*2)*.48+Math.sin(m*3)*.33+Math.sin(m*4)*.19)*3.8),w=Math.min(1,x/.005)*Math.exp(-g*4.5)*Math.min(1,(e-x)/.018)):(y=Math.tanh((Math.sin(m)*.83+Math.sin(m*2)*.32+Math.sin(m*3)*.17)*1.9),w=Math.min(1,x/.006)*Math.exp(-g*2.1)*Math.min(1,(e-x)/.022));const v=(h+u)%l,b=y*w*i;s.channels[0][v]+=b*f,s.channels[1][v]+=b*p}}function Pl(s){for(const t of s.channels){let e=0,n=0;for(let r=0;r<t.length;r++){const a=t[r],o=a-e+n*.995;e=a,n=o,t[r]=Math.tanh(o*1.75)*.75}const i=Math.round(s.sampleRate*.003);for(let r=0;r<i;r++){const a=t.length-i+r,o=r/(i-1);t[a]=t[a]*(1-o)+t[0]*o}}}function Cm(){const s=tr(Cl,!0),t=tr(Cl,!0),e=60/yc,n=e*4,i={kick:ns("kick"),snare:ns("snare"),hat:ns("hat"),open:ns("open"),metal:ns("metal")},r=[[50,53,57,60,64],[46,50,53,57,60],[41,48,53,57,60],[48,53,55,58,62]],a=[38,34,29,36],o=[62,65,69,67,64,65,62,60];for(let c=0;c<Ec;c++){const l=Math.floor(c/2)%4,h=a[l],d=c*n,f=c>=8;c%2===0&&r[l].forEach((u,x)=>Ii(s,d,n*2+.18,u,.053,"pad",(x-2)*.42));for(const u of[0,6,8,11,...c%4===3?[14]:[]])Mn(s,i.kick,d+u*e/4,.42);for(const u of[4,12])Mn(s,i.snare,d+u*e/4,.31,.06);c%2===1&&Mn(s,i.snare,d+15*e/4,.095,-.2);for(let u=0;u<16;u+=2)Mn(s,i.hat,d+u*e/4,u%4===0?.09:.14,u%4===0?-.27:.3);Mn(s,i.open,d+10*e/4,.075,.4),c%2===1&&Mn(s,i.metal,d+7*e/4,.12,-.45),[0,3,6,8,10,13,15].forEach((u,x)=>Ii(s,d+u*e/4,e*(u===0?.7:.38),h+(x===3||x===5?12:x===6&&c%2===1?7:0),.19,"bass")),(c%2===0||f)&&[.5,1.25,2.5,3.25].forEach((x,m)=>{const g=o[(c+m)%o.length]+(l===1?-2:l===3?-5:0);Ii(s,d+x*e,e*1.5,g,.125,"lead",-.34),Ii(s,d+(x+.5)*e,e*1.3,g,.042,"lead",.67)});for(const u of[0,2,6,8,10,14])Mn(t,i.kick,d+u*e/4,.23);for(const u of[4,12,...c%4===3?[13,14,15]:[]])Mn(t,i.snare,d+u*e/4,.22,-.1);for(let u=1;u<16;u+=2)Mn(t,i.hat,d+u*e/4,.07,u%4===1?-.6:.6);for(const u of[0,2,3,6,8,10,11,14]){const x=h+12+(u===6?7:u===14&&c%4===3?10:0);Ii(t,d+u*e/4,e*.38,x,.16,"riff",-.42),Ii(t,d+u*e/4+.018,e*.38,x+12,.065,"riff",.42)}c%4===3&&Mn(t,i.metal,d+3.5*e,.21,.3)}return Pl(s),Pl(t),{district:s,combat:t}}class Pm{context;master;fx;music;musicDuck;districtGain;combatGain;noise;district;combat;weapons=new Map;musicSources=[];musicStarted=0;musicOffset=0;volume=.7;musicVolume=.75;effectsVolume=.95;unlocked=!1;lastStep=0;lastX;lastZ;distance=0;lastEnemy=-10;danger=0;unlock(){try{if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.context=new t,n=e.createDynamicsCompressor();n.threshold.value=-7,n.knee.value=8,n.ratio.value=4,n.attack.value=.002,n.release.value=.16,this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(n),n.connect(e.destination),this.fx=e.createGain(),this.fx.gain.value=this.effectsVolume,this.fx.connect(this.master),this.music=e.createGain(),this.music.gain.value=this.musicVolume,this.music.connect(this.master),this.musicDuck=e.createGain(),this.musicDuck.connect(this.music),this.districtGain=e.createGain(),this.districtGain.gain.value=.92,this.districtGain.connect(this.musicDuck),this.combatGain=e.createGain(),this.combatGain.gain.value=0,this.combatGain.connect(this.musicDuck);const i=e.sampleRate*2;this.noise=e.createBuffer(1,i,e.sampleRate);const r=this.noise.getChannelData(0);let a=1793;for(let c=0;c<i;c++)a=Math.imul(a,1664525)+1013904223>>>0,r[c]=a/2147483648-1;for(const c of["revolver","shotgun","plasma","machinegun"])this.weapons.set(c,this.buffer(Rm(c)));const o=Cm();this.district=this.buffer(o.district),this.combat=this.buffer(o.combat)}this.context.resume().then(()=>{this.unlocked=!0}).catch(()=>{}),this.unlocked=this.context.state==="running"}catch{}}setVolume(t){this.volume=this.clamp(t),this.setGain(this.master,this.volume)}setMusicVolume(t){this.musicVolume=this.clamp(t),this.setGain(this.music,this.musicVolume)}setEffectsVolume(t){this.effectsVolume=this.clamp(t),this.setGain(this.fx,this.effectsVolume)}clamp(t){return Number.isFinite(t)?Math.max(0,Math.min(1,t)):0}setGain(t,e){if(!this.context||!t)return;const n=this.context.currentTime;t.gain.cancelScheduledValues(n),e===0?t.gain.setValueAtTime(0,n):t.gain.setTargetAtTime(e,n,.04)}suspend(){const t=this.context;if(t&&this.musicSources.length&&this.district){this.musicOffset=(this.musicOffset+Math.max(0,t.currentTime-this.musicStarted))%this.district.duration,this.musicDuck?.gain.cancelScheduledValues(t.currentTime),this.musicDuck?.gain.setTargetAtTime(0,t.currentTime,.035);for(const e of this.musicSources)e.stop(t.currentTime+.16);this.musicSources=[]}this.lastX=this.lastZ=void 0,this.distance=0}handle(t){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const e of t)switch(e.type){case"shot":this.shot(e.weapon||"revolver");break;case"reload":this.reload(e.weapon||"revolver");break;case"hurt":this.burst(.23,.24,850),this.tone(97,.21,.21,"sawtooth",45);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.55,.14,740),this.tone(89,.43,.14,"sawtooth",58),this.burst(.085,.19,2700,.42);break;case"explosion":this.burst(.85,.72,2900),this.burst(.18,.48,6700),this.tone(128,.65,.48,"triangle",26),this.tone(49,.9,.28,"sine",24),this.burst(.55,.2,1800,.12);break;case"shatter":this.burst(.18,.35,8800),this.burst(.48,.17,5200,.05);for(let n=0;n<5;n++)this.tone(2140+n*479,.06,.04,"triangle",1330+n*313,.04+n*.043);break;case"enemy":{const n=this.context.currentTime;if(n-this.lastEnemy>.55)if(this.lastEnemy=n,e.message?.includes("charging shot"))this.tone(260,.19,.1,"sawtooth",790),this.burst(.1,.24,4600,.2),this.tone(145,.16,.17,"triangle",45,.2);else{const i=e.message?.startsWith("Strider");this.tone(i?86:143,.34,.2,"sawtooth",i?35:56),this.tone(i?134:218,.27,.1,"triangle",63),this.burst(.32,.2,i?630:1100)}break}case"kill":this.burst(.26,.19,620),this.tone(118,.27,.13,"sawtooth",34);break;case"mount":this.tone(110,.22,.16,"sawtooth",210),this.tone(82,.18,.17,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(t,e){const n=this.context;if(!n||!this.unlocked||n.state!=="running"||t.status!=="playing")return;this.musicSources.length||this.startMusic();const i=t.player,r=t.enemies.some(o=>o.alive&&o.alert&&Math.hypot(o.x-i.x,o.z-i.z)<22);this.danger+=((r?1:0)-this.danger)*Math.min(1,e*(r?1.7:.32)),this.combatGain?.gain.setTargetAtTime(this.danger*.93,n.currentTime,.18),this.districtGain?.gain.setTargetAtTime(.92-this.danger*.12,n.currentTime,.22);const a=this.lastX===void 0?0:Math.hypot(i.x-this.lastX,i.z-this.lastZ);this.lastX=i.x,this.lastZ=i.z,a<1&&(this.distance+=a),i.grounded&&this.distance>(i.mounted?2.2:1.65)&&n.currentTime-this.lastStep>.22&&e>0&&(this.distance=0,this.lastStep=n.currentTime,this.burst(.065,i.mounted?.18:.085,i.mounted?430:1400),this.tone(i.mounted?65:110,.09,i.mounted?.15:.08,"triangle",40))}buffer(t){const e=this.context.createBuffer(t.channels.length,t.channels[0].length,t.sampleRate);return t.channels.forEach((n,i)=>e.getChannelData(i).set(n)),e}startMusic(){const t=this.context;if(!t||!this.district||!this.combat||!this.districtGain||!this.combatGain||!this.musicDuck)return;const e=t.currentTime+.025;this.musicDuck.gain.cancelScheduledValues(t.currentTime),this.musicDuck.gain.setValueAtTime(0,t.currentTime),this.musicDuck.gain.linearRampToValueAtTime(1,e+.3),this.musicStarted=e;for(const[n,i]of[[this.district,this.districtGain],[this.combat,this.combatGain]]){const r=t.createBufferSource();r.buffer=n,r.loop=!0,r.connect(i),r.start(e,this.musicOffset),r.onended=()=>r.disconnect(),this.musicSources.push(r)}}shot(t){const e=this.context,n=this.weapons.get(t);if(!e||!n||!this.fx)return;const i=e.createBufferSource(),r=e.createGain();if(i.buffer=n,i.playbackRate.value=.985+Math.random()*.03,r.gain.value={revolver:.84,shotgun:1,plasma:.74,machinegun:.7}[t],i.connect(r),r.connect(this.fx),i.start(),i.onended=()=>{i.disconnect(),r.disconnect()},this.musicDuck&&this.musicSources.length){const a=e.currentTime;this.musicDuck.gain.cancelScheduledValues(a),this.musicDuck.gain.setValueAtTime(Math.min(1,this.musicDuck.gain.value),a),this.musicDuck.gain.linearRampToValueAtTime(.79,a+.006),this.musicDuck.gain.linearRampToValueAtTime(1,a+.145)}}reload(t){if(t==="plasma"){this.tone(180,.28,.13,"sawtooth",740),this.burst(.17,.15,2900,.25),this.tone(1320,.18,.09,"triangle",420,.47);return}if(this.burst(.075,.19,4200),this.tone(420,.045,.11,"square",180),this.burst(.13,.12,1600,.19),this.tone(710,.045,.1,"triangle",270,.31),t==="shotgun"||t==="revolver")for(let e=0;e<3;e++)this.burst(.032,.09,3100,.36+e*.19),this.tone(1870,.024,.035,"triangle",970,.36+e*.19);this.burst(.06,.22,3800,t==="machinegun"?.83:1),this.tone(160,.08,.14,"triangle",61,t==="machinegun"?.84:1.02)}tone(t,e,n,i="square",r=t,a=0){const o=this.context;if(!o||!this.fx)return;const c=o.currentTime+a,l=o.createOscillator(),h=o.createGain();l.type=i,l.frequency.setValueAtTime(Math.max(1,t),c),l.frequency.exponentialRampToValueAtTime(Math.max(1,r),c+e),h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(n,c+Math.min(.006,e/4)),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(this.fx),l.start(c),l.stop(c+e+.025),l.onended=()=>{l.disconnect(),h.disconnect()}}burst(t,e,n,i=0){const r=this.context;if(!r||!this.noise||!this.fx)return;const a=r.currentTime+i,o=r.createBufferSource(),c=r.createBiquadFilter(),l=r.createGain();o.buffer=this.noise,c.type="lowpass",c.frequency.setValueAtTime(n,a),c.Q.value=.4,l.gain.setValueAtTime(e,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(l),l.connect(this.fx),o.start(a,Math.random()),o.stop(a+t+.025),o.onended=()=>{o.disconnect(),c.disconnect(),l.disconnect()}}chime(t,e,n){t.forEach((i,r)=>this.tone(i,.42,n,"triangle",i,r*e))}}const so=document.querySelector("#world"),Im=document.querySelector("#weapon");let Ae,lr,oi=!1,fs=performance.now(),fi=!1;const zn=new Pm,Zn=new ym(so,ps),Lm=new wm(Im),mn=new Tm({start:Ac,resume:Um,restart:Nm,menu:Fm,pause:ps,settings:Rc});Ae=new Sc(Ce,mn.settings.difficulty);function Dm(){try{localStorage.setItem("fossil-noir-3d-checkpoint",JSON.stringify({version:1,difficulty:Ae.state.difficulty}))}catch{}}function wc(){try{return JSON.parse(localStorage.getItem("fossil-noir-3d-checkpoint")||"null")?.version===1}catch{return!1}}function Jn(s){oi=s==="playing",Zn.enabled=oi,Zn.clear(),mn.show(s),oi||(Zn.release(),zn.suspend())}function Ac(s=!1){fi||(Ae=new Sc(Ce,mn.settings.difficulty),s&&wc()&&Ae.restart(!0),zn.unlock(),Jn("playing"),Zn.capture(),fs=performance.now())}function Um(){fi||Ae.state.status!=="playing"||(zn.unlock(),Jn("playing"),Zn.capture(),fs=performance.now())}function ps(){oi&&Jn("pause")}function Nm(s=!1){if(!fi){if(!s){Ac(!1);return}Ae.restart(s&&(Ae.state.checkpoint||wc())),zn.unlock(),Jn("playing"),Zn.capture(),fs=performance.now()}}function Fm(){Jn("menu")}function Rc(s){Zn.sensitivity=s.sensitivity,zn.setVolume(s.volume),zn.setMusicVolume(s.musicVolume),zn.setEffectsVolume(s.effectsVolume),lr?.resize(s)}try{lr=new Sm(so),Rc(mn.settings),mn.show("menu")}catch(s){fi=!0,mn.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${s instanceof Error?s.message:""}`)}function Cc(s){const t=Math.min(Math.max((s-fs)/1e3,0),.05);if(fs=s,!fi)try{if(oi){Ae.update(t,Zn.read());for(const e of Ae.state.events)e.type==="checkpoint"&&Dm();if(zn.handle(Ae.state.events),Ae.state.events.length=0,zn.tick(Ae.state,t),Ae.state.status==="dead"&&Jn("dead"),Ae.state.status==="complete"){try{localStorage.setItem("fossil-noir-3d-best",String(Math.floor(Ae.state.time)))}catch{}Jn("complete")}}lr.render(Ae.state,oi?t:0,mn.settings),Lm.render(Ae.state,oi?t:0),mn.update(Ae.state)}catch(e){console.error("Fossil Noir 3D runtime error",e),fi=!0,Jn("menu"),mn.setError("The mission could not continue. Reload this page to restart.")}requestAnimationFrame(Cc)}window.addEventListener("resize",()=>lr?.resize(mn.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&ps()});window.addEventListener("blur",ps);so.addEventListener("webglcontextlost",s=>{s.preventDefault(),ps(),fi=!0,mn.setError("Graphics context lost. Reload the page to recover the mission.")});requestAnimationFrame(Cc);
