(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const il=[],wt=(r,t,e,n,i=4.2,s="concrete",a)=>il.push({x:r,z:t,w:e,d:n,h:i,material:s,...a===void 0?{}:{y:a}});wt(0,12.3,11,.6,4,"brick");wt(-5.3,8,.6,8.6,4,"brick");wt(5.3,8,.6,8.6,4,"brick");wt(-3.4,4,3.8,.6,4,"brick");wt(3.4,4,3.8,.6,4,"brick");wt(0,4,3,.6,.8,"brick",3.2);wt(-13.3,0,.6,8,6.5,"brick");wt(-13.3,-13.5,.6,7,6.5,"brick");wt(-13.3,-18.7,.6,3.4,6.5,"brick");wt(-13.3,-4.6,.6,2.2,6.5,"brick");wt(-13.3,-9.4,.6,2.2,6.5,"brick");wt(-17.3,-7,.6,6.6,4,"brick");wt(-15.2,-3.7,4.8,.6,4,"brick");wt(-15.2,-10.3,4.8,.6,4,"brick");wt(13.3,-8,.6,24,7.2,"brick");wt(-9.5,4,7,.6,5.5,"brick");wt(9.5,4,7,.6,5.5,"brick");wt(-8,-20,12,.7,6,"metal");wt(8,-20,12,.7,6,"metal");wt(0,-20,4,.7,2.4,"metal",3.2);wt(-7.3,-26,.6,12.6,4.5,"metal");wt(7.3,-23,.6,6,4.5,"metal");wt(7.3,-30.5,.6,3,4.5,"metal");wt(7.3,-27.4,.6,3,1.5,"metal",3);wt(11.2,-23.9,8.4,.6,4.5,"metal");wt(15.3,-27.9,.6,8.6,4.5,"metal");wt(11.2,-32.2,8.4,.6,4.5,"metal");wt(-5.8,-32.2,8.6,.6,4.5,"metal");wt(5.8,-32.2,8.6,.6,4.5,"metal");wt(0,-32.2,3,.6,1.3,"metal",3.2);wt(-10.3,-39.2,.6,14.6,4.5,"metal");wt(10.3,-39.2,.6,14.6,4.5,"metal");wt(-11,-46,.6,1.2,4.5,"metal");wt(-10,-46,2,.6,4.5,"metal");wt(2.8,-46,15.6,.6,4.5,"metal");wt(-7,-46,4,.6,1.3,"metal",3.2);wt(-11.3,-49,.6,6.6,4.5,"metal");wt(-2.7,-49,.6,6.6,4.5,"metal");wt(-7,-52.3,9.2,.6,4.5,"metal");wt(-3.2,8,2.2,1.1,.85,"crate");wt(3.8,10,1.2,2.2,1.5,"crate");wt(-8,-4,2.4,1.4,1.1,"crate");wt(-7,-10,2,3.6,1.1,"metal");wt(3.8,-13,2.4,1.6,1.7,"crate");wt(5,-14.5,1.6,1.5,1.1,"crate");wt(-4.7,-18,2.4,1.3,1.3,"crate");wt(4.5,-23.8,1.8,1.8,1.2,"crate");wt(-4.4,-26.8,2.2,1.4,1.25,"metal");wt(12,-25.9,3.3,1,1.1,"metal");wt(-6.7,-34.5,2.2,1.5,1.2,"metal");wt(5,-36,2.4,1.2,1.2,"metal");wt(0,-40,3.5,1.4,1.1,"metal");wt(-7.5,-42.8,1.3,2.4,1.5,"crate");const Ie={walls:il,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",x:2,z:6.7},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",x:-10.5,z:-5.3},{id:"street-ammo2",kind:"ammo",x:5.8,z:-12},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",x:5.8,z:-28.5},{id:"lobby-ammo2",kind:"ammo",x:-5.7,z:-29.5},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",x:10,z:-30.7},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",x:4.7,z:-34.5},{id:"lab-ammo2",kind:"ammo",x:-8,z:-37},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",x:-5,z:-44.5},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"barrels",x:11.7,z:-12},{kind:"barrels",x:-11,z:-19},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="186",ec=0,Qa=1,nc=2,Rs=1,ic=2,Gi=3,ei=0,ke=1,Xe=2,Cn=0,Vi=1,ja=2,to=3,eo=4,sc=5,Ti=100,rc=101,ac=102,oc=103,lc=104,cc=200,hc=201,uc=202,fc=203,sl=204,rl=205,dc=206,pc=207,mc=208,gc=209,_c=210,xc=211,vc=212,Mc=213,Sc=214,Ir=0,Lr=1,Dr=2,Wi=3,Ur=4,Nr=5,Fr=6,Or=7,Ma=0,bc=1,yc=2,ln=0,al=1,ol=2,ll=3,cl=4,hl=5,ul=6,fl=7,dl=300,ni=301,Ci=302,$s=303,Zs=304,Hs=306,Xi=1e3,Rn=1001,Br=1002,fe=1003,Ec=1004,ss=1005,Le=1006,Js=1007,Qn=1008,qe=1009,pl=1010,ml=1011,qi=1012,Sa=1013,xn=1014,an=1015,vn=1016,ba=1017,ya=1018,Yi=1020,gl=35902,_l=35899,xl=1021,vl=1022,on=1023,In=1026,jn=1027,Ea=1028,Ta=1029,ii=1030,Aa=1031,wa=1033,Cs=33776,Ps=33777,Is=33778,Ls=33779,zr=35840,kr=35841,Gr=35842,Hr=35843,Vr=36196,Wr=37492,Xr=37496,qr=37488,Yr=37489,Us=37490,Kr=37491,$r=37808,Zr=37809,Jr=37810,Qr=37811,jr=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,ra=37818,aa=37819,oa=37820,la=37821,ca=36492,ha=36494,ua=36495,fa=36283,da=36284,Ns=36285,pa=36286,Tc=3200,ma=0,Ac=1,Hn="",Ae="srgb",Fs="srgb-linear",Os="linear",Jt="srgb",Qs=7680,wc=519,Rc=512,Cc=513,Pc=514,Ra=515,Ic=516,Lc=517,Ca=518,Dc=519,Uc=35044,Ml=35048,no="300 es",_n=2e3,Ki=2001;function Nc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fc(){const r=Bs("canvas");return r.style.display="block",r}const io={};function so(...r){const t="THREE."+r.shift();console.log(t,...r)}function Sl(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ct(...r){r=Sl(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function qt(...r){r=Sl(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function wi(...r){const t=r.join(" ");t in io||(io[t]=!0,Ct(...r))}function Oc(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Bc={[Ir]:Lr,[Dr]:Fr,[Ur]:Or,[Wi]:Nr,[Lr]:Ir,[Fr]:Dr,[Or]:Ur,[Nr]:Wi};class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,ga=180/Math.PI;function Ji(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ht(r,t,e){return Math.max(t,Math.min(e,r))}function zc(r,t){return(r%t+t)%t}function tr(r,t,e){return(1-e)*r+e*t}function Li(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Oa=class Oa{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oa.prototype.isVector2=!0;let zt=Oa;class Xn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(f!==v||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),y=Math.sin(T);p=Math.sin(p*T)/y,o=Math.sin(o*T)/y,c=c*p+h*o,l=l*p+d*o,u=u*p+g*o,f=f*p+v*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+g*o,f=f*p+v*o;const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-o*d,t[e+2]=l*g+u*d+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(s/2),h=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ba=class Ba{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ro.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ro.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=i+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return er.copy(this).projectOnVector(t),this.sub(er)}reflect(t){return this.sub(er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ba.prototype.isVector3=!0;let B=Ba;const er=new B,ro=new Xn,za=class za{constructor(t,e,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],T=i[1],y=i[4],S=i[7],b=i[2],E=i[5],R=i[8];return s[0]=a*v+o*T+c*b,s[3]=a*m+o*y+c*E,s[6]=a*p+o*S+c*R,s[1]=l*v+u*T+f*b,s[4]=l*m+u*y+f*E,s[7]=l*p+u*S+f*R,s[2]=h*v+d*T+g*b,s[5]=h*m+d*y+g*E,s[8]=h*p+d*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,g=e*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(i*l-u*n)*v,t[2]=(o*n-i*a)*v,t[3]=h*v,t[4]=(u*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nr.makeScale(t,e)),this}rotate(t){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nr.makeRotation(-t)),this}translate(t,e){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};za.prototype.isMatrix3=!0;let It=za;const nr=new It,ao=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oo=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kc(){const r={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Os:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fs]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:ao,fromXYZ:oo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:ao,fromXYZ:oo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),r}const Gt=kc();function Pn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ri(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hi;class Gc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=Bs("canvas")),hi.width=t.width,hi.height=t.height;const i=hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hc=0;class Pa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ir(i[a].image)):s.push(ir(i[a]))}else s=ir(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ir(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let Vc=0;const sr=new B;class De extends ai{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Rn,i=Rn,s=Le,a=Qn,o=on,c=qe,l=De.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Ji(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sr).x}get height(){return this.source.getSize(sr).y}get depth(){return this.source.getSize(sr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=dl;De.DEFAULT_ANISOTROPY=1;const ka=class ka{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,S=(d+1)/2,b=(p+1)/2,E=(u+h)/4,R=(f+v)/4,_=(g+m)/4;return y>S&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=R/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=E/i,s=_/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=_/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ka.prototype.isVector4=!0;let ue=ka;class Wc extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new De(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Pa(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bl extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xc extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Gs=class Gs{constructor(t,e,n,i,s,a,o,c,l,u,f,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,u,f,h,d,g,v,m)}set(t,e,n,i,s,a,o,c,l,u,f,h,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gs().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),s=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-v*f}else if(t.order==="XZY"){const h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qc,t,Yc)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Fn.crossVectors(n,He),Fn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Fn.crossVectors(n,He)),Fn.normalize(),rs.crossVectors(He,Fn),i[0]=Fn.x,i[4]=rs.x,i[8]=He.x,i[1]=Fn.y,i[5]=rs.y,i[9]=He.y,i[2]=Fn.z,i[6]=rs.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],y=n[7],S=n[11],b=n[15],E=i[0],R=i[4],_=i[8],A=i[12],C=i[1],P=i[5],F=i[9],D=i[13],U=i[2],z=i[6],$=i[10],V=i[14],nt=i[3],X=i[7],Q=i[11],j=i[15];return s[0]=a*E+o*C+c*U+l*nt,s[4]=a*R+o*P+c*z+l*X,s[8]=a*_+o*F+c*$+l*Q,s[12]=a*A+o*D+c*V+l*j,s[1]=u*E+f*C+h*U+d*nt,s[5]=u*R+f*P+h*z+d*X,s[9]=u*_+f*F+h*$+d*Q,s[13]=u*A+f*D+h*V+d*j,s[2]=g*E+v*C+m*U+p*nt,s[6]=g*R+v*P+m*z+p*X,s[10]=g*_+v*F+m*$+p*Q,s[14]=g*A+v*D+m*V+p*j,s[3]=T*E+y*C+S*U+b*nt,s[7]=T*R+y*P+S*z+b*X,s[11]=T*_+y*F+S*$+b*Q,s[15]=T*A+y*D+S*V+b*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],T=c*d-l*h,y=o*d-l*f,S=o*h-c*f,b=a*d-l*u,E=a*h-c*u,R=a*f-o*u;return e*(v*T-m*y+p*S)-n*(g*T-m*b+p*E)+i*(g*y-v*b+p*R)-s*(g*S-v*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(s*u-o*c)+i*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=e*o-n*a,y=e*c-i*a,S=e*l-s*a,b=n*c-i*o,E=n*l-s*o,R=i*l-s*c,_=u*v-f*g,A=u*m-h*g,C=u*p-d*g,P=f*m-h*v,F=f*p-d*v,D=h*p-d*m,U=T*D-y*F+S*P+b*C-E*A+R*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/U;return t[0]=(o*D-c*F+l*P)*z,t[1]=(i*F-n*D-s*P)*z,t[2]=(v*R-m*E+p*b)*z,t[3]=(h*E-f*R-d*b)*z,t[4]=(c*C-a*D-l*A)*z,t[5]=(e*D-i*C+s*A)*z,t[6]=(m*S-g*R-p*y)*z,t[7]=(u*R-h*S+d*y)*z,t[8]=(a*F-o*C+l*_)*z,t[9]=(n*C-e*F-s*_)*z,t[10]=(g*E-v*S+p*T)*z,t[11]=(f*S-u*E-d*T)*z,t[12]=(o*A-a*P-c*_)*z,t[13]=(e*P-n*A+i*_)*z,t[14]=(v*y-g*b-m*T)*z,t[15]=(u*b-f*y+h*T)*z,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,g=s*f,v=a*u,m=a*f,p=o*f,T=c*l,y=c*u,S=c*f,b=n.x,E=n.y,R=n.z;return i[0]=(1-(v+p))*b,i[1]=(d+S)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(d-S)*E,i[5]=(1-(h+p))*E,i[6]=(m+T)*E,i[7]=0,i[8]=(g+y)*R,i[9]=(m-T)*R,i[10]=(1-(h+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=ui.set(i[0],i[1],i[2]).length();const o=ui.set(i[4],i[5],i[6]).length(),c=ui.set(i[8],i[9],i[10]).length();s<0&&(a=-a),je.copy(this);const l=1/a,u=1/o,f=1/c;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=f,je.elements[9]*=f,je.elements[10]*=f,e.setFromRotationMatrix(je),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,s,a,o=_n,c=!1){const l=this.elements,u=2*s/(e-t),f=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===_n)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ki)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=_n,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-i),h=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===_n)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ki)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Gs.prototype.isMatrix4=!0;let ae=Gs;const ui=new B,je=new ae,qc=new B(0,0,0),Yc=new B(1,1,1),Fn=new B,rs=new B,He=new B,lo=new ae,co=new Xn;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return co.setFromEuler(this),this.setFromQuaternion(co,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kc=0;const ho=new B,fi=new Xn,Sn=new ae,as=new B,Di=new B,$c=new B,Zc=new Xn,uo=new B(1,0,0),fo=new B(0,1,0),po=new B(0,0,1),mo={type:"added"},Jc={type:"removed"},di={type:"childadded",child:null},rr={type:"childremoved",child:null};class Me extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new B,e=new Ln,n=new Xn,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new It}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(uo,t)}rotateY(t){return this.rotateOnAxis(fo,t)}rotateZ(t){return this.rotateOnAxis(po,t)}translateOnAxis(t,e){return ho.copy(t).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uo,t)}translateY(t){return this.translateOnAxis(fo,t)}translateZ(t){return this.translateOnAxis(po,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Di,as,this.up):Sn.lookAt(as,Di,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(Sn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mo),di.child=t,this.dispatchEvent(di),di.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jc),rr.child=t,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mo),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,$c),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Zc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Me.DEFAULT_UP=new B(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ze extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qc={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qc)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},os={h:0,s:0,l:0};function or(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=zc(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=or(a,s,t+1/3),this.g=or(a,s,t),this.b=or(a,s,t-1/3)}return Gt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=El[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Gt.workingToColorSpace(Pe.copy(this),t),Math.round(Ht(Pe.r*255,0,255))*65536+Math.round(Ht(Pe.g*255,0,255))*256+Math.round(Ht(Pe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,s=Pe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ae){Gt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(os);const n=tr(On.h,os.h,e),i=tr(On.s,os.s,e),s=tr(On.l,os.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Bt;Bt.NAMES=El;class Ia{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Ia(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jc extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const tn=new B,bn=new B,lr=new B,yn=new B,pi=new B,mi=new B,go=new B,cr=new B,hr=new B,ur=new B,fr=new ue,dr=new ue,pr=new ue;class rn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){tn.subVectors(i,e),bn.subVectors(n,e),lr.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(bn),c=tn.dot(lr),l=bn.dot(bn),u=bn.dot(lr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return fr.setScalar(0),dr.setScalar(0),pr.setScalar(0),fr.fromBufferAttribute(t,e),dr.fromBufferAttribute(t,n),pr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(fr,s.x),a.addScaledVector(dr,s.y),a.addScaledVector(pr,s.z),a}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),bn.subVectors(t,e),tn.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),tn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(s,n),cr.subVectors(t,n);const c=pi.dot(cr),l=mi.dot(cr);if(c<=0&&l<=0)return e.copy(n);hr.subVectors(t,i);const u=pi.dot(hr),f=mi.dot(hr);if(u>=0&&f<=u)return e.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(pi,a);ur.subVectors(t,s);const d=pi.dot(ur),g=mi.dot(ur);if(g>=0&&d<=g)return e.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(mi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return go.subVectors(s,i),o=(f-u)/(f-u+(d-g)),e.copy(i).addScaledVector(go,o);const p=1/(m+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class oi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),cs.subVectors(this.max,Ui),gi.subVectors(t.a,Ui),_i.subVectors(t.b,Ui),xi.subVectors(t.c,Ui),Bn.subVectors(_i,gi),zn.subVectors(xi,_i),Yn.subVectors(gi,xi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Yn.z,Yn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Yn.z,0,-Yn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Yn.y,Yn.x,0];return!mr(e,gi,_i,xi,cs)||(e=[1,0,0,0,1,0,0,0,1],!mr(e,gi,_i,xi,cs))?!1:(hs.crossVectors(Bn,zn),e=[hs.x,hs.y,hs.z],mr(e,gi,_i,xi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,ls=new oi,gi=new B,_i=new B,xi=new B,Bn=new B,zn=new B,Yn=new B,Ui=new B,cs=new B,hs=new B,Kn=new B;function mr(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Kn.fromArray(r,s);const o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const xe=new B,us=new zt;let th=0;class hn extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:th++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)us.fromBufferAttribute(this,e),us.applyMatrix3(t),this.setXY(e,us.x,us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Tl extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Al extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const eh=new oi,Ni=new B,gr=new B;class Qi{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):eh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(gr)),this.expandByPoint(Ni.copy(t.center).sub(gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nh=0;const Ke=new ae,_r=new Me,vi=new B,Ve=new oi,Fi=new oi,Ee=new B;class Ge extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Al:Tl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return _r.lookAt(t),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ve.min,Fi.min),Ve.expandByPoint(Ee),Ee.addVectors(Ve.max,Fi.max),Ve.expandByPoint(Ee)):(Ve.expandByPoint(Fi.min),Ve.expandByPoint(Fi.max))}Ve.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ee.fromBufferAttribute(o,l),c&&(vi.fromBufferAttribute(t,l),Ee.add(vi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new B,c[_]=new B;const l=new B,u=new B,f=new B,h=new zt,d=new zt,g=new zt,v=new B,m=new B;function p(_,A,C){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,C),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,A),g.fromBufferAttribute(s,C),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[_].add(v),o[A].add(v),o[C].add(v),c[_].add(m),c[A].add(m),c[C].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,A=T.length;_<A;++_){const C=T[_],P=C.start,F=C.count;for(let D=P,U=P+F;D<U;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new B,S=new B,b=new B,E=new B;function R(_){b.fromBufferAttribute(i,_),E.copy(b);const A=o[_];y.copy(A),y.sub(b.multiplyScalar(b.dot(A))).normalize(),S.crossVectors(E,A);const P=S.dot(c[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,A=T.length;_<A;++_){const C=T[_],P=C.start,F=C.count;for(let D=P,U=P+F;D<U;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,a=new B,o=new B,c=new B,l=new B,u=new B,f=new B;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new hn(h,u,f)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xr=new B,ih=new B,sh=new It;class Gn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xr.subVectors(n,e).cross(ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(xr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sh.getNormalMatrix(t),i=this.coplanarPoint(xr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let rh=0;class ji extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Vi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Tn=new B,vr=new B,fs=new B,ds=new B;class ah{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vr.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),ds.copy(this.origin).sub(vr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fs),o=ds.dot(this.direction),c=-ds.dot(fs),l=ds.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*c-o,h=a*o-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(vr).addScaledVector(fs,h),d}intersectSphere(t,e){if(t.radius<0)return null;Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,T=n.y-a.y,y=n.z-a.z,S=Math.abs(c),b=Math.abs(l),E=Math.abs(u);let R,_,A,C,P,F,D,U,z,$,V,nt;if(S>=b&&S>=E?(A=c,F=f,z=g,nt=p,c>=0?(R=l,_=u,C=h,P=d,D=v,U=m,$=T,V=y):(R=u,_=l,C=d,P=h,D=m,U=v,$=y,V=T)):b>=E?(A=l,F=h,z=v,nt=T,l>=0?(R=u,_=c,C=d,P=f,D=m,U=g,$=y,V=p):(R=c,_=u,C=f,P=d,D=g,U=m,$=p,V=y)):(A=u,F=d,z=m,nt=y,u>=0?(R=c,_=l,C=f,P=h,D=g,U=v,$=p,V=T):(R=l,_=c,C=h,P=f,D=v,U=g,$=T,V=p)),A===0)return null;const X=R/A,Q=_/A,j=1/A,Tt=C-X*F,St=P-Q*F,ee=D-X*z,Vt=U-Q*z,Yt=$-X*nt,Y=V-Q*nt,tt=Yt*Vt-Y*ee,_t=Tt*Y-St*Yt,Pt=ee*St-Vt*Tt;if(i){if(tt<0||_t<0||Pt<0)return null}else if((tt<0||_t<0||Pt<0)&&(tt>0||_t>0||Pt>0))return null;const mt=tt+_t+Pt;if(mt===0)return null;const Nt=j*(tt*F+_t*z+Pt*nt);return(mt>0?Nt<0:Nt>0)?null:this.at(Nt/mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _o=new ae,$n=new ah,ps=new Qi,xo=new B,ms=new B,gs=new B,_s=new B,Mr=new B,xs=new B,vo=new B,vs=new B;class de extends Me{constructor(t=new Ge,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Mr.fromBufferAttribute(f,t),a?xs.addScaledVector(Mr,u):xs.addScaledVector(Mr.sub(e),u))}e.add(xs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),$n.copy(t.ray).recast(t.near),!(ps.containsPoint($n.origin)===!1&&($n.intersectSphere(ps,xo)===null||$n.origin.distanceToSquared(xo)>(t.far-t.near)**2))&&(_o.copy(s).invert(),$n.copy(t.ray).applyMatrix4(_o),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,b=y;S<b;S+=3){const E=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);i=Ms(this,p,t,n,l,u,f,E,R,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);i=Ms(this,a,t,n,l,u,f,T,y,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,b=y;S<b;S+=3){const E=S,R=S+1,_=S+2;i=Ms(this,p,t,n,l,u,f,E,R,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=m,y=m+1,S=m+2;i=Ms(this,a,t,n,l,u,f,T,y,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function oh(r,t,e,n,i,s,a,o){let c;if(t.side===ke?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===ei,o),c===null)return null;vs.copy(o),vs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(vs);return l<e.near||l>e.far?null:{distance:l,point:vs.clone(),object:r}}function Ms(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,ms),r.getVertexPosition(c,gs),r.getVertexPosition(l,_s);const u=oh(r,t,e,n,ms,gs,_s,vo);if(u){const f=new B;rn.getBarycoord(vo,ms,gs,_s,f),i&&(u.uv=rn.getInterpolatedAttribute(i,o,c,l,f,new zt)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,c,l,f,new zt)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,c,l,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new B,materialIndex:0};rn.getNormal(ms,gs,_s,h.normal),u.face=h,u.barycoord=f}return u}class wl extends De{constructor(t=null,e=1,n=1,i,s,a,o,c,l=fe,u=fe,f,h){super(null,a,o,c,l,u,i,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo extends hn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mi=new ae,So=new ae,Ss=[],bo=new oi,lh=new ae,Oi=new de,Bi=new Qi;class Rl extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),bo.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(bo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),Bi.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Bi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(n),t.ray.intersectsSphere(Bi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Mi),So.multiplyMatrices(n,Mi),Oi.matrixWorld=So,Oi.raycast(t,Ss);for(let a=0,o=Ss.length;a<o;a++){const c=Ss[a];c.instanceId=s,c.object=this,e.push(c)}Ss.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wl(new Float32Array(i*this.count),i,this.count,Ea,an));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zn=new Qi,ch=new zt(.5,.5),bs=new B;class La{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,s=new Gn,a=new Gn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],v=s[9],m=s[10],p=s[11],T=s[12],y=s[13],S=s[14],b=s[15];if(i[0].setComponents(l-a,d-u,p-g,b-T).normalize(),i[1].setComponents(l+a,d+u,p+g,b+T).normalize(),i[2].setComponents(l+o,d+f,p+v,b+y).normalize(),i[3].setComponents(l-o,d-f,p-v,b-y).normalize(),n)i[4].setComponents(c,h,m,S).normalize(),i[5].setComponents(l-c,d-h,p-m,b-S).normalize();else if(i[4].setComponents(l-c,d-h,p-m,b-S).normalize(),e===_n)i[5].setComponents(l+c,d+h,p+m,b+S).normalize();else if(e===Ki)i[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){Zn.center.set(0,0,0);const e=ch.distanceTo(t.center);return Zn.radius=.7071067811865476+e,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(bs.x=i.normal.x>0?t.max.x:t.min.x,bs.y=i.normal.y>0?t.max.y:t.min.y,bs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cl extends De{constructor(t=[],e=ni,n,i,s,a,o,c,l,u){super(t,e,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ts extends De{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $i extends De{constructor(t,e,n=xn,i,s,a,o=fe,c=fe,l,u=In,f=1){if(u!==In&&u!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class hh extends $i{constructor(t,e=xn,n=ni,i,s,a=fe,o=fe,c,l=In){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pl extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ze extends Ge{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function g(v,m,p,T,y,S,b,E,R,_,A){const C=S/R,P=b/_,F=S/2,D=b/2,U=E/2,z=R+1,$=_+1;let V=0,nt=0;const X=new B;for(let Q=0;Q<$;Q++){const j=Q*P-D;for(let Tt=0;Tt<z;Tt++){const St=Tt*C-F;X[v]=St*T,X[m]=j*y,X[p]=U,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=E>0?1:-1,u.push(X.x,X.y,X.z),f.push(Tt/R),f.push(1-Q/_),V+=1}}for(let Q=0;Q<_;Q++)for(let j=0;j<R;j++){const Tt=h+j+z*Q,St=h+j+z*(Q+1),ee=h+(j+1)+z*(Q+1),Vt=h+(j+1)+z*Q;c.push(Tt,St,Vt),c.push(St,ee,Vt),nt+=6}o.addGroup(d,nt,A),d+=nt,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jt extends Ge{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const v=[],m=n/2;let p=0;T(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function T(){const S=new B,b=new B;let E=0;const R=(e-t)/n;for(let _=0;_<=s;_++){const A=[],C=_/s,P=C*(e-t)+t;for(let F=0;F<=i;F++){const D=F/i,U=D*c+o,z=Math.sin(U),$=Math.cos(U);b.x=P*z,b.y=-C*n+m,b.z=P*$,f.push(b.x,b.y,b.z),S.set(z,R,$).normalize(),h.push(S.x,S.y,S.z),d.push(D,1-C),A.push(g++)}v.push(A)}for(let _=0;_<i;_++)for(let A=0;A<s;A++){const C=v[A][_],P=v[A+1][_],F=v[A+1][_+1],D=v[A][_+1];(t>0||A!==0)&&(u.push(C,P,D),E+=3),(e>0||A!==s-1)&&(u.push(P,F,D),E+=3)}l.addGroup(p,E,0),p+=E}function y(S){const b=g,E=new zt,R=new B;let _=0;const A=S===!0?t:e,C=S===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*C,0),h.push(0,C,0),d.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const U=F/i*c+o,z=Math.cos(U),$=Math.sin(U);R.x=A*$,R.y=m*C,R.z=A*z,f.push(R.x,R.y,R.z),h.push(0,C,0),E.x=z*.5+.5,E.y=$*.5*C+.5,d.push(E.x,E.y),g++}for(let F=0;F<i;F++){const D=b+F,U=P+F;S===!0?u.push(U,U+1,D):u.push(U+1,U,D),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zs extends jt{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new zs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Je extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=t/o,h=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let y=0;y<l;y++){const S=y*f-s;g.push(S,-T,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const y=T+l*p,S=T+l*(p+1),b=T+1+l*(p+1),E=T+1+l*p;d.push(y,S,E),d.push(S,b,E)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.width,t.height,t.widthSegments,t.heightSegments)}}class Da extends Ge{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let f=t;const h=(e-t)/i,d=new B,g=new zt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const T=p+m,y=T,S=T+n+1,b=T+n+2,E=T+1;o.push(y,S,E),o.push(S,b,E)}}this.setIndex(o),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vs extends Ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new B,h=new B,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],y=p/n,S=a+y*o,b=t*Math.cos(S),E=Math.sqrt(t*t-b*b);let R=0;p===0&&a===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const A=_/e,C=i+A*s;f.x=-E*Math.cos(C),f.y=b,f.z=E*Math.sin(C),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(A+R,1-y),T.push(l++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const y=u[p][T+1],S=u[p][T],b=u[p+1][T],E=u[p+1][T+1];(p!==0||a>0)&&d.push(y,S,E),(p!==n-1||c<Math.PI)&&d.push(S,b,E)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ks extends Ge{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],u=[],f=[],h=new B,d=new B,g=new B;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let p=0;p<=i;p++){const T=p/i*s;d.x=(t+e*Math.cos(m))*Math.cos(T),d.y=(t+e*Math.cos(m))*Math.sin(T),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(T),h.y=t*Math.sin(T),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/i),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const p=(i+1)*v+m-1,T=(i+1)*(v-1)+m-1,y=(i+1)*(v-1)+m,S=(i+1)*v+m;c.push(p,T,S),c.push(T,y,S)}this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Pi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];if(yo(i))i.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(yo(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Fe(r){const t={};for(let e=0;e<r.length;e++){const n=Pi(r[e]);for(const i in n)t[i]=n[i]}return t}function yo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uh(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Il(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const fh={clone:Pi,merge:Fe};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(i.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new It().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class mh extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sr extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gh extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _h extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ua extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class xh extends Ua{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const br=new ae,Eo=new B,To=new B;class Ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Eo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eo),To.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(To),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(br,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===Ki||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ys=new B,Es=new Xn,pn=new B;class Dl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ys,Es,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,Es,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ys,Es,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,Es,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new B,Ao=new zt,wo=new zt;class We extends Dl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Ao,wo),e.subVectors(wo,Ao)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class vh extends Ll{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}}class Mh extends Ua{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Na extends Dl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sh extends Ll{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Si=-90,bi=1;class bh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(Si,bi,t,e);i.layers=this.layers,this.add(i);const s=new We(Si,bi,t,e);s.layers=this.layers,this.add(s);const a=new We(Si,bi,t,e);a.layers=this.layers,this.add(a);const o=new We(Si,bi,t,e);o.layers=this.layers,this.add(o);const c=new We(Si,bi,t,e);c.layers=this.layers,this.add(c);const l=new We(Si,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yh extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ga=class Ga{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Ga.prototype.isMatrix2=!0;let Co=Ga;function Po(r,t,e,n){const i=Eh(n);switch(e){case xl:return r*t;case Ea:return r*t/i.components*i.byteLength;case Ta:return r*t/i.components*i.byteLength;case ii:return r*t*2/i.components*i.byteLength;case Aa:return r*t*2/i.components*i.byteLength;case vl:return r*t*3/i.components*i.byteLength;case on:return r*t*4/i.components*i.byteLength;case wa:return r*t*4/i.components*i.byteLength;case Cs:case Ps:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ls:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kr:case Hr:return Math.max(r,16)*Math.max(t,8)/4;case zr:case Gr:return Math.max(r,8)*Math.max(t,8)/2;case Vr:case Wr:case qr:case Yr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Us:case Kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case aa:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case la:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ca:case ha:case ua:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fa:case da:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ns:case pa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eh(r){switch(r){case qe:case pl:return{byteLength:1,components:1};case qi:case ml:case vn:return{byteLength:2,components:1};case ba:case ya:return{byteLength:2,components:4};case xn:case Sa:case an:return{byteLength:4,components:1};case gl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ul(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Th(r){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,o),f.length===0)r.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
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
#endif`,Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
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
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`#ifdef USE_BATCHING
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
#endif`,Nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zh=`#ifdef USE_IRIDESCENCE
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
#endif`,kh=`#ifdef USE_BUMPMAP
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$h=`#define PI 3.141592653589793
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
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jh=`vec3 transformedNormal = objectNormal;
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
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,du=`#ifdef USE_GRADIENTMAP
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
}`,pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_u=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xu=`#ifdef USE_ENVMAP
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
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
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
#endif`,Eu=`uniform sampler2D dfgLUT;
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
}`,Tu=`
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
#endif`,Au=`#if defined( RE_IndirectDiffuse )
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fu=`#if defined( USE_POINTS_UV )
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
#endif`,Ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
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
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
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
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ff=`float getShadowMask() {
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
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
}`,Uf=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,$f=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define STANDARD
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
}`,Qf=`#define STANDARD
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
}`,jf=`#define TOON
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
}`,td=`#define TOON
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
}`,ed=`uniform float size;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,sd=`uniform vec3 color;
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
}`,rd=`uniform float rotation;
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
}`,ad=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ah,alphahash_pars_fragment:wh,alphamap_fragment:Rh,alphamap_pars_fragment:Ch,alphatest_fragment:Ph,alphatest_pars_fragment:Ih,aomap_fragment:Lh,aomap_pars_fragment:Dh,batching_pars_vertex:Uh,batching_vertex:Nh,begin_vertex:Fh,beginnormal_vertex:Oh,bsdfs:Bh,iridescence_fragment:zh,bumpmap_pars_fragment:kh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:Vh,clipping_planes_vertex:Wh,color_fragment:Xh,color_pars_fragment:qh,color_pars_vertex:Yh,color_vertex:Kh,common:$h,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:jh,emissivemap_fragment:tu,emissivemap_pars_fragment:eu,colorspace_fragment:nu,colorspace_pars_fragment:iu,envmap_fragment:su,envmap_common_pars_fragment:ru,envmap_pars_fragment:au,envmap_pars_vertex:ou,envmap_physical_pars_fragment:xu,envmap_vertex:lu,fog_vertex:cu,fog_pars_vertex:hu,fog_fragment:uu,fog_pars_fragment:fu,gradientmap_pars_fragment:du,lightmap_pars_fragment:pu,lights_lambert_fragment:mu,lights_lambert_pars_fragment:gu,lights_pars_begin:_u,lights_toon_fragment:vu,lights_toon_pars_fragment:Mu,lights_phong_fragment:Su,lights_phong_pars_fragment:bu,lights_physical_fragment:yu,lights_physical_pars_fragment:Eu,lights_fragment_begin:Tu,lights_fragment_maps:Au,lights_fragment_end:wu,lightprobes_pars_fragment:Ru,logdepthbuf_fragment:Cu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Iu,logdepthbuf_vertex:Lu,map_fragment:Du,map_pars_fragment:Uu,map_particle_fragment:Nu,map_particle_pars_fragment:Fu,metalnessmap_fragment:Ou,metalnessmap_pars_fragment:Bu,morphinstance_vertex:zu,morphcolor_vertex:ku,morphnormal_vertex:Gu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Vu,normal_fragment_begin:Wu,normal_fragment_maps:Xu,normal_pars_fragment:qu,normal_pars_vertex:Yu,normal_vertex:Ku,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Qu,iridescence_pars_fragment:ju,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:ff,skinbase_vertex:df,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:vf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:bf,uv_pars_fragment:yf,uv_pars_vertex:Ef,uv_vertex:Tf,worldpos_vertex:Af,background_vert:wf,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:If,cube_frag:Lf,depth_vert:Df,depth_frag:Uf,distance_vert:Nf,distance_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:kf,meshbasic_vert:Gf,meshbasic_frag:Hf,meshlambert_vert:Vf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:Qf,meshtoon_vert:jf,meshtoon_frag:td,points_vert:ed,points_frag:nd,shadow_vert:id,shadow_frag:sd,sprite_vert:rd,sprite_frag:ad},ht={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},gn={basic:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Fe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Fe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Fe([ht.points,ht.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Fe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Fe([ht.common,ht.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Fe([ht.sprite,ht.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:Fe([ht.common,ht.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:Fe([ht.lights,ht.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};gn.physical={uniforms:Fe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ts={r:0,b:0,g:0},od=new ae,Nl=new It;Nl.set(-1,0,0,0,1,0,0,0,1);function ld(r,t,e,n,i,s){const a=new Bt(0);let o=i===!0?0:1,c,l,u=null,f=0,h=null;function d(T){let y=T.isScene===!0?T.background:null;if(y&&y.isTexture){const S=T.backgroundBlurriness>0;y=t.get(y,S)}return y}function g(T){let y=!1;const S=d(T);S===null?m(a,o):S&&S.isColor&&(m(S,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(T,y){const S=d(y);S&&(S.isCubeTexture||S.mapping===Hs)?(l===void 0&&(l=new de(new Ze(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Pi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(od.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Nl),l.material.toneMapped=Gt.getTransfer(S.colorSpace)!==Jt,(u!==S||f!==S.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new de(new Je(2,2),new Mn({name:"BackgroundMaterial",uniforms:Pi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(Ts,Il(r)),e.buffers.color.setClear(Ts.r,Ts.g,Ts.b,y,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:v,dispose:p}}function cd(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(P,F,D,U,z){let $=!1;const V=f(P,U,D,F);s!==V&&(s=V,l(s.object)),$=d(P,U,D,z),$&&g(P,U,D,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(P,F,D,U),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return r.createVertexArray()}function l(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function f(P,F,D,U){const z=U.wireframe===!0;let $=n[F.id];$===void 0&&($={},n[F.id]=$);const V=P.isInstancedMesh===!0?P.id:0;let nt=$[V];nt===void 0&&(nt={},$[V]=nt);let X=nt[D.id];X===void 0&&(X={},nt[D.id]=X);let Q=X[z];return Q===void 0&&(Q=h(c()),X[z]=Q),Q}function h(P){const F=[],D=[],U=[];for(let z=0;z<e;z++)F[z]=0,D[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:U,object:P,attributes:{},index:null}}function d(P,F,D,U){const z=s.attributes,$=F.attributes;let V=0;const nt=D.getAttributes();for(const X in nt)if(nt[X].location>=0){const j=z[X];let Tt=$[X];if(Tt===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Tt=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Tt=P.instanceColor)),j===void 0||j.attribute!==Tt||Tt&&j.data!==Tt.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function g(P,F,D,U){const z={},$=F.attributes;let V=0;const nt=D.getAttributes();for(const X in nt)if(nt[X].location>=0){let j=$[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const Tt={};Tt.attribute=j,j&&j.data&&(Tt.data=j.data),z[X]=Tt,V++}s.attributes=z,s.attributesNum=V,s.index=U}function v(){const P=s.newAttributes;for(let F=0,D=P.length;F<D;F++)P[F]=0}function m(P){p(P,0)}function p(P,F){const D=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;D[P]=1,U[P]===0&&(r.enableVertexAttribArray(P),U[P]=1),z[P]!==F&&(r.vertexAttribDivisor(P,F),z[P]=F)}function T(){const P=s.newAttributes,F=s.enabledAttributes;for(let D=0,U=F.length;D<U;D++)F[D]!==P[D]&&(r.disableVertexAttribArray(D),F[D]=0)}function y(P,F,D,U,z,$,V){V===!0?r.vertexAttribIPointer(P,F,D,z,$):r.vertexAttribPointer(P,F,D,U,z,$)}function S(P,F,D,U){v();const z=U.attributes,$=D.getAttributes(),V=F.defaultAttributeValues;for(const nt in $){const X=$[nt];if(X.location>=0){let Q=z[nt];if(Q===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const j=Q.normalized,Tt=Q.itemSize,St=t.get(Q);if(St===void 0)continue;const ee=St.buffer,Vt=St.type,Yt=St.bytesPerElement,Y=Vt===r.INT||Vt===r.UNSIGNED_INT||Q.gpuType===Sa;if(Q.isInterleavedBufferAttribute){const tt=Q.data,_t=tt.stride,Pt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<X.locationSize;mt++)p(X.location+mt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<X.locationSize;mt++)m(X.location+mt);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let mt=0;mt<X.locationSize;mt++)y(X.location+mt,Tt/X.locationSize,Vt,j,_t*Yt,(Pt+Tt/X.locationSize*mt)*Yt,Y)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let tt=0;tt<X.locationSize;tt++)y(X.location+tt,Tt/X.locationSize,Vt,j,Tt*Yt,Tt/X.locationSize*tt*Yt,Y)}}else if(V!==void 0){const j=V[nt];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(X.location,j);break;case 3:r.vertexAttrib3fv(X.location,j);break;case 4:r.vertexAttrib4fv(X.location,j);break;default:r.vertexAttrib1fv(X.location,j)}}}}T()}function b(){A();for(const P in n){const F=n[P];for(const D in F){const U=F[D];for(const z in U){const $=U[z];for(const V in $)u($[V].object),delete $[V];delete U[z]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const F=n[P.id];for(const D in F){const U=F[D];for(const z in U){const $=U[z];for(const V in $)u($[V].object),delete $[V];delete U[z]}}delete n[P.id]}function R(P){for(const F in n){const D=n[F];for(const U in D){const z=D[U];if(z[P.id]===void 0)continue;const $=z[P.id];for(const V in $)u($[V].object),delete $[V];delete z[P.id]}}}function _(P){for(const F in n){const D=n[F],U=P.isInstancedMesh===!0?P.id:0,z=D[U];if(z!==void 0){for(const $ in z){const V=z[$];for(const nt in V)u(V[nt].object),delete V[nt];delete z[$]}delete D[U],Object.keys(D).length===0&&delete n[F]}}}function A(){C(),a=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function hd(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ud(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==on&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==qe&&R!==an&&!_&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ct("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:S,maxSamples:b,samples:E}}function fd(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Gn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,y=T*4;let S=p.clippingState||null;c.value=S,S=u(g,h,y,d);for(let b=0;b!==y;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=d;y!==v;++y,S+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const Ai=4,dd=6,pd=20,md=256,zi=new Na,Io=new Bt;let yr=null,Er=0,Tr=0,Ar=!1;const gd=new B,Jn=new B;class Lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=gd}=s;yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yr,Er,Tr),this._renderer.xr.enabled=Ar,t.scissorTest=!1,yi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:vn,format:on,colorSpace:Fs,depthBuffer:!1},i=Do(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_d(s)),this._blurMaterial=vd(s,t,e),this._ggxMaterial=xd(s,t,e)}return i}_compileMaterial(t){const e=new de(new Ge,t);this._renderer.compile(e,zi)}_sceneToCubeUV(t,e,n,i,s){const c=new We(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Io),f.toneMapping=ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Ze,new sn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(Io),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;yi(i,S*b,y>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ni||t.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;yi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,zi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ai?n-g+Ai:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,yi(s,m,p,3*v,2*v),i.setRenderTarget(s),i.render(o,zi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,yi(t,m,p,3*v,2*v),i.setRenderTarget(t),i.render(o,zi)}_blur(t,e,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],f=3*u*(i>this._lodMax-Ai?i-this._lodMax+Ai:0),h=4*(this._cubeSize-u);yi(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,zi)}}function _d(r){const t=[],e=[];let n=r;const i=r-Ai+1+dd;for(let s=0;s<i;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let p=0;p<f;p++){const T=p%3*2/3-1,y=p>2?0:-1,S=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];g.set(S,d*h*p);for(let b=0;b<h;b++){const E=u[b*2]*2-1,R=u[b*2+1]*2-1;p===0?Jn.set(1,R,E):p===1?Jn.set(-E,1,-R):p===2?Jn.set(-E,R,1):p===3?Jn.set(-1,R,-E):p===4?Jn.set(-E,-1,R):Jn.set(E,R,-1),Jn.toArray(v,(p*h+b)*d)}}const m=new Ge;m.setAttribute("position",new hn(g,d)),m.setAttribute("outputDirection",new hn(v,d)),e.push(new de(m,null)),n>Ai&&n--}return{lodMeshes:e,sizeLods:t}}function Do(r,t,e){const n=new cn(r,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yi(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function xd(r,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:md,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function vd(r,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:pd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Uo(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function No(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ws(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fl extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ze(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Cn});s.uniforms.tEquirect.value=e;const a=new de(i,s),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Le),new bh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}function Md(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===$s||d===Zs)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Fl(g.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===$s||d===Zs,v=d===ni||d===Ci;if(g||v){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Lo(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const T=h.image;return g&&T&&T.height>0||v&&T&&c(T)?(n===null&&(n=new Lo(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===$s?h.mapping=ni:d===Zs&&(h.mapping=Ci),h}function c(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Sd(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&wi("WebGLRenderer: "+n+" extension not supported."),i}}}function bd(r,t,e,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],r.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const T=d.array;v=d.version;for(let y=0,S=T.length;y<S;y+=3){const b=T[y+0],E=T[y+1],R=T[y+2];h.push(b,E,E,R,R,b)}}else{const T=g.array;v=g.version;for(let y=0,S=T.length/3-1;y<S;y+=3){const b=y+0,E=y+1,R=y+2;h.push(b,E,E,R,R,b)}}const m=new(g.count>=65535?Al:Tl)(h,1);m.version=v;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function yd(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){r.drawElements(n,h,s,f*a),e.update(h,n,1)}function l(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ed(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Td(r,t,e){const n=new WeakMap,i=new ue;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var d=C;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*E*4*f),_=new bl(R,b,E,f);_.type=an,_.needsUpdate=!0;const A=S*4;for(let P=0;P<f;P++){const F=p[P],D=T[P],U=y[P],z=b*E*4*P;for(let $=0;$<F.count;$++){const V=$*A;g===!0&&(i.fromBufferAttribute(F,$),R[z+V+0]=i.x,R[z+V+1]=i.y,R[z+V+2]=i.z,R[z+V+3]=0),v===!0&&(i.fromBufferAttribute(D,$),R[z+V+4]=i.x,R[z+V+5]=i.y,R[z+V+6]=i.z,R[z+V+7]=0),m===!0&&(i.fromBufferAttribute(U,$),R[z+V+8]=i.x,R[z+V+9]=i.y,R[z+V+10]=i.z,R[z+V+11]=U.itemSize===4?i.w:1)}}h={count:f,texture:_,size:new zt(b,E)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Ad(r,t,e,n,i){let s=new WeakMap;function a(l){const u=i.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const wd={[al]:"LINEAR_TONE_MAPPING",[ol]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[cl]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function Rd(r,t,e,n,i,s){const a=new cn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ge;l.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new me([0,2,0,0,2,0],2));const u=new mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new de(l,u),h=new Na(-1,1,1,-1,0,1);let d=null,g=null,v=!1,m,p=null,T=[],y=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let E=0;E<T.length;E++){const R=T[E];R.setSize&&R.setSize(S,b)}},this.setEffects=function(S){T=S,y=T.length>0&&T[0].isRenderPass===!0;const b=a.width,E=a.height;T.length>0&&o===null&&(o=new cn(b,E,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new cn(b,E,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<T.length;R++){const _=T[R];_.setSize&&_.setSize(b,E)}},this.begin=function(S,b){if(v||S.toneMapping===ln&&T.length===0)return!1;if(p=b,b!==null){const E=b.width,R=b.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return y===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=ln,!0},this.hasRenderPass=function(){return y},this.end=function(S,b){S.toneMapping=m,v=!0;let E=a,R=o;for(let _=0;_<T.length;_++){const A=T[_];A.enabled!==!1&&(A.render(S,R,E,b),A.needsSwap!==!1&&(E=R,R=R===o?c:o))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},Gt.getTransfer(d)===Jt&&(u.defines.SRGB_TRANSFER="");const _=wd[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(f,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Ol=new De,_a=new $i(1,1),Bl=new bl,zl=new Xc,kl=new Cl,Fo=[],Oo=[],Bo=new Float32Array(16),zo=new Float32Array(9),ko=new Float32Array(4);function Ii(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Fo[i];if(s===void 0&&(s=new Float32Array(i),Fo[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Se(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Xs(r,t){let e=Oo[t];e===void 0&&(e=new Int32Array(t),Oo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Cd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Pd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2fv(this.addr,t),be(e,t)}}function Id(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;r.uniform3fv(this.addr,t),be(e,t)}}function Ld(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4fv(this.addr,t),be(e,t)}}function Dd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;ko.set(n),r.uniformMatrix2fv(this.addr,!1,ko),be(e,n)}}function Ud(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;zo.set(n),r.uniformMatrix3fv(this.addr,!1,zo),be(e,n)}}function Nd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Bo.set(n),r.uniformMatrix4fv(this.addr,!1,Bo),be(e,n)}}function Fd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Od(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2iv(this.addr,t),be(e,t)}}function Bd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3iv(this.addr,t),be(e,t)}}function zd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4iv(this.addr,t),be(e,t)}}function kd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2uiv(this.addr,t),be(e,t)}}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3uiv(this.addr,t),be(e,t)}}function Vd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4uiv(this.addr,t),be(e,t)}}function Wd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(_a.compareFunction=e.isReversedDepthBuffer()?Ca:Ra,s=_a):s=Ol,e.setTexture2D(t||s,i)}function Xd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zl,i)}function qd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kl,i)}function Yd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bl,i)}function Kd(r){switch(r){case 5126:return Cd;case 35664:return Pd;case 35665:return Id;case 35666:return Ld;case 35674:return Dd;case 35675:return Ud;case 35676:return Nd;case 5124:case 35670:return Fd;case 35667:case 35671:return Od;case 35668:case 35672:return Bd;case 35669:case 35673:return zd;case 5125:return kd;case 36294:return Gd;case 36295:return Hd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}function $d(r,t){r.uniform1fv(this.addr,t)}function Zd(r,t){const e=Ii(t,this.size,2);r.uniform2fv(this.addr,e)}function Jd(r,t){const e=Ii(t,this.size,3);r.uniform3fv(this.addr,e)}function Qd(r,t){const e=Ii(t,this.size,4);r.uniform4fv(this.addr,e)}function jd(r,t){const e=Ii(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tp(r,t){const e=Ii(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ep(r,t){const e=Ii(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function np(r,t){r.uniform1iv(this.addr,t)}function ip(r,t){r.uniform2iv(this.addr,t)}function sp(r,t){r.uniform3iv(this.addr,t)}function rp(r,t){r.uniform4iv(this.addr,t)}function ap(r,t){r.uniform1uiv(this.addr,t)}function op(r,t){r.uniform2uiv(this.addr,t)}function lp(r,t){r.uniform3uiv(this.addr,t)}function cp(r,t){r.uniform4uiv(this.addr,t)}function hp(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=_a:a=Ol;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function up(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||zl,s[a])}function fp(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||kl,s[a])}function dp(r,t,e){const n=this.cache,i=t.length,s=Xs(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Bl,s[a])}function pp(r){switch(r){case 5126:return $d;case 35664:return Zd;case 35665:return Jd;case 35666:return Qd;case 35674:return jd;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return dp}}class mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kd(e.type)}}class gp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pp(e.type)}}class _p{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Go(r,t){r.seq.push(t),r.map[t.id]=t}function xp(r,t,e){const n=r.name,i=n.length;for(wr.lastIndex=0;;){const s=wr.exec(n),a=wr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Go(e,l===void 0?new mp(o,r,t):new gp(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new _p(o),Go(e,f)),e=f}}}class Ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);xp(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ho(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const vp=37297;let Mp=0;function Sp(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vo=new It;function bp(r){Gt._getMatrix(Vo,Gt.workingColorSpace,r);const t=`mat3( ${Vo.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(r)){case Os:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Wo(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Sp(r.getShaderSource(t),o)}else return s}function yp(r,t){const e=bp(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ep={[al]:"Linear",[ol]:"Reinhard",[ll]:"Cineon",[cl]:"ACESFilmic",[ul]:"AgX",[fl]:"Neutral",[hl]:"Custom"};function Tp(r,t){const e=Ep[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const As=new B;function Ap(){Gt.getLuminanceCoefficients(As);const r=As.x.toFixed(4),t=As.y.toFixed(4),e=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Rp(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cp(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Hi(r){return r!==""}function Xo(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qo(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(r){return r.replace(Pp,Lp)}const Ip=new Map;function Lp(r,t){let e=Ut[t];if(e===void 0){const n=Ip.get(t);if(n!==void 0)e=Ut[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xa(e)}const Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(r){return r.replace(Dp,Up)}function Up(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ko(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Np={[Rs]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function Fp(r){return Np[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Op={[ni]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function Bp(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Op[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const zp={[Ci]:"ENVMAP_MODE_REFRACTION"};function kp(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":zp[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gp={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[bc]:"ENVMAP_BLENDING_MIX",[yc]:"ENVMAP_BLENDING_ADD"};function Hp(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Gp[r.combine]||"ENVMAP_BLENDING_NONE"}function Vp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wp(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Fp(e),l=Bp(e),u=kp(e),f=Hp(e),h=Vp(e),d=wp(e),g=Rp(s),v=i.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`)):(m=[Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),p=[Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ln?Tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,yp("linearToOutputTexel",e.outputColorSpace),Ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),a=xa(a),a=Xo(a,e),a=qo(a,e),o=xa(o),o=Xo(o,e),o=qo(o,e),a=Yo(a),o=Yo(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+a,S=T+p+o,b=Ho(i,i.VERTEX_SHADER,y),E=Ho(i,i.FRAGMENT_SHADER,S);i.attachShader(v,b),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(b)||"",U=i.getShaderInfoLog(E)||"",z=F.trim(),$=D.trim(),V=U.trim();let nt=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,b,E);else{const Q=Wo(i,b,"vertex"),j=Wo(i,E,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Q+`
`+j)}else z!==""?Ct("WebGLProgram: Program Info Log:",z):($===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:nt,programLog:z,vertexShader:{log:$,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(b),i.deleteShader(E),_=new Ds(i,v),A=Cp(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,vp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}let Xp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yp(t),e.set(t,n)),n}}class Yp{constructor(t){this.id=Xp++,this.code=t,this.usedTimes=0}}function Kp(r){return r===ii||r===Us||r===Ns}function $p(r,t,e,n,i,s){const a=new yl,o=new qp,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,A,C,P,F,D){const U=P.fog,z=F.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||$,V),X=nt&&nt.mapping===Hs?nt.image.height:null,Q=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ct("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Tt=j!==void 0?j.length:0;let St=0;z.morphAttributes.position!==void 0&&(St=1),z.morphAttributes.normal!==void 0&&(St=2),z.morphAttributes.color!==void 0&&(St=3);let ee,Vt,Yt,Y;if(Q){const ie=gn[Q];ee=ie.vertexShader,Vt=ie.fragmentShader}else{ee=_.vertexShader,Vt=_.fragmentShader;const ie=o.getVertexShaderStage(_),Kt=o.getFragmentShaderStage(_);o.update(_,ie,Kt),Yt=ie.id,Y=Kt.id}const tt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Pt=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,Nt=!!_.map,ve=!!_.matcap,Ft=!!nt,Xt=!!_.aoMap,ne=!!_.lightMap,kt=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,ye=!!_.displacementMap,Oe=!!_.emissiveMap,ce=!!_.metalnessMap,ge=!!_.roughnessMap,N=_.anisotropy>0,we=_.clearcoat>0,Zt=_.dispersion>0,w=_.retroreflectivity>0,x=_.iridescence>0,O=_.sheen>0,H=_.transmission>0,q=N&&!!_.anisotropyMap,it=we&&!!_.clearcoatMap,st=we&&!!_.clearcoatNormalMap,K=we&&!!_.clearcoatRoughnessMap,J=x&&!!_.iridescenceMap,rt=x&&!!_.iridescenceThicknessMap,yt=O&&!!_.sheenColorMap,ct=O&&!!_.sheenRoughnessMap,at=!!_.specularMap,Et=!!_.specularColorMap,Rt=!!_.specularIntensityMap,Lt=H&&!!_.transmissionMap,L=H&&!!_.thicknessMap,ot=!!_.gradientMap,Z=!!_.alphaMap,lt=_.alphaTest>0,dt=!!_.alphaHash,et=!!_.extensions;let At=ln;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(At=r.toneMapping);const Mt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:Vt,defines:_.defines,customVertexShaderID:Yt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&F.instanceColor!==null,instancingMorph:Pt&&F.morphTexture!==null,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:ve,envMap:Ft,envMapMode:Ft&&nt.mapping,envMapCubeUVHeight:X,aoMap:Xt,lightMap:ne,bumpMap:kt,normalMap:le,displacementMap:ye,emissiveMap:Oe,normalMapObjectSpace:le&&_.normalMapType===Ac,normalMapTangentSpace:le&&_.normalMapType===ma,packedNormalMap:le&&_.normalMapType===ma&&Kp(_.normalMap.format),metalnessMap:ce,roughnessMap:ge,anisotropy:N,anisotropyMap:q,clearcoat:we,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:K,dispersion:Zt,retroreflection:w,iridescence:x,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:O,sheenColorMap:yt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:Et,specularIntensityMap:Rt,transmission:H,transmissionMap:Lt,thicknessMap:L,gradientMap:ot,opaque:_.transparent===!1&&_.blending===Vi&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:dt,combine:_.combine,mapUv:Nt&&g(_.map.channel),aoMapUv:Xt&&g(_.aoMap.channel),lightMapUv:ne&&g(_.lightMap.channel),bumpMapUv:kt&&g(_.bumpMap.channel),normalMapUv:le&&g(_.normalMap.channel),displacementMapUv:ye&&g(_.displacementMap.channel),emissiveMapUv:Oe&&g(_.emissiveMap.channel),metalnessMapUv:ce&&g(_.metalnessMap.channel),roughnessMapUv:ge&&g(_.roughnessMap.channel),anisotropyMapUv:q&&g(_.anisotropyMap.channel),clearcoatMapUv:it&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ct&&g(_.sheenRoughnessMap.channel),specularMapUv:at&&g(_.specularMap.channel),specularColorMapUv:Et&&g(_.specularColorMap.channel),specularIntensityMapUv:Rt&&g(_.specularIntensityMap.channel),transmissionMapUv:Lt&&g(_.transmissionMap.channel),thicknessMapUv:L&&g(_.thicknessMap.channel),alphaMapUv:Z&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(le||N),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Nt||Z),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:St,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xe,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(A,_),T(A,_),A.push(r.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function T(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const A=d[_.type];let C;if(A){const P=gn[A];C=fh.clone(P.uniforms)}else C=_.uniforms;return C}function S(_,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new Wp(r,A,_,i),l.push(C),u.set(A,C)),C}function b(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:R}}function Zp(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Jp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function $o(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Zo(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,p){let T=r[t];return T===void 0?(T={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},r[t]=T):(T.id=h.id,T.object=h,T.geometry=d,T.material=g,T.materialVariant=a(h),T.groupOrder=v,T.renderOrder=h.renderOrder,T.z=m,T.group=p),t++,T}function c(h,d,g,v,m,p,T){T.reversedDepth===!0&&(m=-m);const y=o(h,d,g,v,m,p);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):e.push(y)}function l(h,d,g,v,m,p){const T=o(h,d,g,v,m,p);g.transmission>0?n.unshift(T):g.transparent===!0?i.unshift(T):e.unshift(T)}function u(h,d){e.length>1&&e.sort(h||Jp),n.length>1&&n.sort(d||$o),i.length>1&&i.sort(d||$o)}function f(){for(let h=t,d=r.length;h<d;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:f,sort:u}}function Qp(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Zo,r.set(n,[a])):i>=s.length?(a=new Zo,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function jp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Bt};break;case"SpotLight":e={position:new B,direction:new B,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function t0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let e0=0;function n0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function i0(r){const t=new jp,e=t0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const i=new B,s=new ae,a=new ae;function o(l){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,T=0,y=0,S=0,b=0,E=0,R=0,_=0,A=0,C=0;l.sort(n0);for(let F=0,D=l.length;F<D;F++){const U=l[F],z=U.color,$=U.intensity,V=U.distance;let nt=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ii?nt=U.shadow.map.texture:nt=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=z.r*$,f+=z.g*$,h+=z.b*$;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],$);C++}else if(U.isSunLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,j=e.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=nt;const Tt=Q.getViewportCount();for(let St=0;St<Tt;St++)n.sunShadowMatrix[v+St]=Q.getMatrix(St),n.sunShadowCascade[v+St]=Q._cascadeData[St];v+=Tt,g++}n.sun[d]=X,d++}else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,j=e.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=X,m++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(z).multiplyScalar($),X.distance=V,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[T]=X;const Q=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,Q.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[T]=Q.matrix,U.castShadow){const j=e.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=nt,R++}T++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(z).multiplyScalar($),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[y]=X,y++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,j=e.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=U.shadow.matrix,E++}n.point[p]=X,p++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar($),X.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[S]=X,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==T||P.rectAreaLength!==y||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=T,n.rectArea.length=y,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.sunLength=d,P.directionalLength=m,P.pointLength=p,P.spotLength=T,P.rectAreaLength=y,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=C,n.version=e0++)}function c(l,u){let f=0,h=0,d=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let T=0,y=l.length;T<y;T++){const S=l[T];if(S.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),h++}else if(S.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Jo(r){const t=new i0(r),e=[],n=[],i=[];function s(h){f.camera=h,e.length=0,n.length=0,i.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function s0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Jo(r),t.set(i,[o])):s>=a.length?(o=new Jo(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
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
}`,o0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],l0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Qo=new ae,ki=new B,Rr=new B;function c0(r,t,e){let n=new La;const i=new zt,s=new zt,a=new ue,o=new gh,c=new _h,l={},u=e.maxTextureSize,f={[ei]:ke,[ke]:ei,[Xe]:Xe},h=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:r0,fragmentShader:a0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ic&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);const A=r.getRenderTarget(),C=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Cn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=p!==this.type;D&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=E.length;U<z;U++){const $=E[U],V=$.shadow;if(V===void 0){Ct("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const nt=V.getFrameExtents();i.multiply(nt),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/nt.x),i.x=s.x*nt.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/nt.y),i.y=s.y*nt.y,V.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||D===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Gi){if($.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new cn(i.x,i.y,{format:ii,type:vn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new $i(i.x,i.y,an),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=In,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fe,V.map.depthTexture.magFilter=fe}else $.isPointLight?(V.map=new Fl(i.x),V.map.depthTexture=new hh(i.x,xn)):(V.map=new cn(i.x,i.y),V.map.depthTexture=new $i(i.x,i.y,xn)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=In,this.type===Rs?(V.map.depthTexture.compareFunction=X?Ca:Ra,V.map.depthTexture.minFilter=Le,V.map.depthTexture.magFilter=Le):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fe,V.map.depthTexture.magFilter=fe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,_);for(let j=0;j<Q;j++){const Tt=V.getCamera(j);if($.isPointLight){const St=V.camera,ee=V.matrix,Vt=$.distance||St.far;Vt!==St.far&&(St.far=Vt,St.updateProjectionMatrix()),ki.setFromMatrixPosition($.matrixWorld),St.position.copy(ki),Rr.copy(St.position),Rr.add(o0[j]),St.up.copy(l0[j]),St.lookAt(Rr),St.updateMatrixWorld(),ee.makeTranslation(-ki.x,-ki.y,-ki.z),Qo.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Qo,St.coordinateSystem,St.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,j),r.clear();else{j===0&&(r.setRenderTarget(V.map),r.clear());const St=V.getViewport(j);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),F.viewport(a)}n=V.getFrustum(j),S(R,_,Tt,$,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&T(V,_),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(A,C,P)};function T(E,R){const _=t.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new cn(i.x,i.y,{format:ii,type:vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,_,h,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,_,d,v,null)}function y(E,R,_,A){let C=null;const P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,D=R.uuid;let U=l[F];U===void 0&&(U={},l[F]=U);let z=U[D];z===void 0&&(z=C.clone(),U[D]=z,R.addEventListener("dispose",b)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,A===Gi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=r.properties.get(C);F.light=_}return C}function S(E,R,_,A,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Gi)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const D=t.update(E),U=E.material;if(Array.isArray(U)){const z=D.groups;for(let $=0,V=z.length;$<V;$++){const nt=z[$],X=U[nt.materialIndex];if(X&&X.visible){const Q=y(E,X,A,C);E.onBeforeShadow(r,E,R,_,D,Q,nt),r.renderBufferDirect(_,null,D,Q,E,nt),E.onAfterShadow(r,E,R,_,D,Q,nt)}}}else if(U.visible){const z=y(E,U,A,C);E.onBeforeShadow(r,E,R,_,D,z,null),r.renderBufferDirect(_,null,D,z,E,null),E.onAfterShadow(r,E,R,_,D,z,null)}}const F=E.children;for(let D=0,U=F.length;D<U;D++)S(F[D],R,_,A,C)}function b(E){E.target.removeEventListener("dispose",b);for(const _ in l){const A=l[_],C=E.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function h0(r,t){function e(){let L=!1;const ot=new ue;let Z=null;const lt=new ue(0,0,0,0);return{setMask:function(dt){Z!==dt&&!L&&(r.colorMask(dt,dt,dt,dt),Z=dt)},setLocked:function(dt){L=dt},setClear:function(dt,et,At,Mt,ie){ie===!0&&(dt*=Mt,et*=Mt,At*=Mt),ot.set(dt,et,At,Mt),lt.equals(ot)===!1&&(r.clearColor(dt,et,At,Mt),lt.copy(ot))},reset:function(){L=!1,Z=null,lt.set(-1,0,0,0)}}}function n(){let L=!1,ot=!1,Z=null,lt=null,dt=null;return{setReversed:function(et){if(ot!==et){const At=t.get("EXT_clip_control");et?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ot=et;const Mt=dt;dt=null,this.setClear(Mt)}},getReversed:function(){return ot},setTest:function(et){et?tt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(et){Z!==et&&!L&&(r.depthMask(et),Z=et)},setFunc:function(et){if(ot&&(et=Bc[et]),lt!==et){switch(et){case Ir:r.depthFunc(r.NEVER);break;case Lr:r.depthFunc(r.ALWAYS);break;case Dr:r.depthFunc(r.LESS);break;case Wi:r.depthFunc(r.LEQUAL);break;case Ur:r.depthFunc(r.EQUAL);break;case Nr:r.depthFunc(r.GEQUAL);break;case Fr:r.depthFunc(r.GREATER);break;case Or:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=et}},setLocked:function(et){L=et},setClear:function(et){dt!==et&&(dt=et,ot&&(et=1-et),r.clearDepth(et))},reset:function(){L=!1,Z=null,lt=null,dt=null,ot=!1}}}function i(){let L=!1,ot=null,Z=null,lt=null,dt=null,et=null,At=null,Mt=null,ie=null;return{setTest:function(Kt){L||(Kt?tt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(Kt){ot!==Kt&&!L&&(r.stencilMask(Kt),ot=Kt)},setFunc:function(Kt,Qe,fn){(Z!==Kt||lt!==Qe||dt!==fn)&&(r.stencilFunc(Kt,Qe,fn),Z=Kt,lt=Qe,dt=fn)},setOp:function(Kt,Qe,fn){(et!==Kt||At!==Qe||Mt!==fn)&&(r.stencilOp(Kt,Qe,fn),et=Kt,At=Qe,Mt=fn)},setLocked:function(Kt){L=Kt},setClear:function(Kt){ie!==Kt&&(r.clearStencil(Kt),ie=Kt)},reset:function(){L=!1,ot=null,Z=null,lt=null,dt=null,et=null,At=null,Mt=null,ie=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,T=null,y=null,S=null,b=null,E=null,R=null,_=new Bt(0,0,0),A=0,C=!1,P=null,F=null,D=null,U=null,z=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=nt>=2);let Q=null,j={};const Tt=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),ee=new ue().fromArray(Tt),Vt=new ue().fromArray(St);function Yt(L,ot,Z,lt){const dt=new Uint8Array(4),et=r.createTexture();r.bindTexture(L,et),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<Z;At++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(ot+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return et}const Y={};Y[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(r.DEPTH_TEST),a.setFunc(Wi),kt(!1),le(Qa),tt(r.CULL_FACE),Xt(Cn);function tt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function _t(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Pt(L,ot){return h[L]!==ot?(r.bindFramebuffer(L,ot),h[L]=ot,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ot),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(L,ot){let Z=g,lt=!1;if(L){Z=d.get(ot),Z===void 0&&(Z=[],d.set(ot,Z));const dt=L.textures;if(Z.length!==dt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let et=0,At=dt.length;et<At;et++)Z[et]=r.COLOR_ATTACHMENT0+et;Z.length=dt.length,lt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,lt=!0);lt&&r.drawBuffers(Z)}function Nt(L){return v!==L?(r.useProgram(L),v=L,!0):!1}const ve={[Ti]:r.FUNC_ADD,[rc]:r.FUNC_SUBTRACT,[ac]:r.FUNC_REVERSE_SUBTRACT};ve[oc]=r.MIN,ve[lc]=r.MAX;const Ft={[cc]:r.ZERO,[hc]:r.ONE,[uc]:r.SRC_COLOR,[sl]:r.SRC_ALPHA,[_c]:r.SRC_ALPHA_SATURATE,[mc]:r.DST_COLOR,[dc]:r.DST_ALPHA,[fc]:r.ONE_MINUS_SRC_COLOR,[rl]:r.ONE_MINUS_SRC_ALPHA,[gc]:r.ONE_MINUS_DST_COLOR,[pc]:r.ONE_MINUS_DST_ALPHA,[xc]:r.CONSTANT_COLOR,[vc]:r.ONE_MINUS_CONSTANT_COLOR,[Mc]:r.CONSTANT_ALPHA,[Sc]:r.ONE_MINUS_CONSTANT_ALPHA};function Xt(L,ot,Z,lt,dt,et,At,Mt,ie,Kt){if(L===Cn){m===!0&&(_t(r.BLEND),m=!1);return}if(m===!1&&(tt(r.BLEND),m=!0),L!==sc){if(L!==p||Kt!==C){if((T!==Ti||b!==Ti)&&(r.blendEquation(r.FUNC_ADD),T=Ti,b=Ti),Kt)switch(L){case Vi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ja:r.blendFunc(r.ONE,r.ONE);break;case to:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qt("WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ja:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case to:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eo:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",L);break}y=null,S=null,E=null,R=null,_.set(0,0,0),A=0,p=L,C=Kt}return}dt=dt||ot,et=et||Z,At=At||lt,(ot!==T||dt!==b)&&(r.blendEquationSeparate(ve[ot],ve[dt]),T=ot,b=dt),(Z!==y||lt!==S||et!==E||At!==R)&&(r.blendFuncSeparate(Ft[Z],Ft[lt],Ft[et],Ft[At]),y=Z,S=lt,E=et,R=At),(Mt.equals(_)===!1||ie!==A)&&(r.blendColor(Mt.r,Mt.g,Mt.b,ie),_.copy(Mt),A=ie),p=L,C=!1}function ne(L,ot){L.side===Xe?_t(r.CULL_FACE):tt(r.CULL_FACE);let Z=L.side===ke;ot&&(Z=!Z),kt(Z),L.blending===Vi&&L.transparent===!1?Xt(Cn):Xt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const lt=L.stencilWrite;o.setTest(lt),lt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?tt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){P!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),P=L)}function le(L){L!==ec?(tt(r.CULL_FACE),L!==F&&(L===Qa?r.cullFace(r.BACK):L===nc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),F=L}function ye(L){L!==D&&(V&&r.lineWidth(L),D=L)}function Oe(L,ot,Z){L?(tt(r.POLYGON_OFFSET_FILL),(U!==ot||z!==Z)&&(U=ot,z=Z,a.getReversed()&&(ot=-ot),r.polygonOffset(ot,Z))):_t(r.POLYGON_OFFSET_FILL)}function ce(L){L?tt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function ge(L){L===void 0&&(L=r.TEXTURE0+$-1),Q!==L&&(r.activeTexture(L),Q=L)}function N(L,ot,Z){Z===void 0&&(Q===null?Z=r.TEXTURE0+$-1:Z=Q);let lt=j[Z];lt===void 0&&(lt={type:void 0,texture:void 0},j[Z]=lt),(lt.type!==L||lt.texture!==ot)&&(Q!==Z&&(r.activeTexture(Z),Q=Z),r.bindTexture(L,ot||Y[L]),lt.type=L,lt.texture=ot)}function we(){const L=j[Q];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Zt(){try{r.compressedTexImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function x(){try{r.texSubImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function O(){try{r.texSubImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function it(){try{r.texStorage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function st(){try{r.texStorage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function K(){try{r.texImage2D(...arguments)}catch(L){qt("WebGLState:",L)}}function J(){try{r.texImage3D(...arguments)}catch(L){qt("WebGLState:",L)}}function rt(L){return f[L]!==void 0?f[L]:r.getParameter(L)}function yt(L,ot){f[L]!==ot&&(r.pixelStorei(L,ot),f[L]=ot)}function ct(L){ee.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function at(L){Vt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Vt.copy(L))}function Et(L,ot){let Z=l.get(ot);Z===void 0&&(Z=new WeakMap,l.set(ot,Z));let lt=Z.get(L);lt===void 0&&(lt=r.getUniformBlockIndex(ot,L.name),Z.set(L,lt))}function Rt(L,ot){const lt=l.get(ot).get(L);c.get(ot)!==lt&&(r.uniformBlockBinding(ot,lt,L.__bindingPointIndex),c.set(ot,lt))}function Lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,j={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,T=null,y=null,S=null,b=null,E=null,R=null,_=new Bt(0,0,0),A=0,C=!1,P=null,F=null,D=null,U=null,z=null,ee.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Pt,drawBuffers:mt,useProgram:Nt,setBlending:Xt,setMaterial:ne,setFlipSided:kt,setCullFace:le,setLineWidth:ye,setPolygonOffset:Oe,setScissorTest:ce,activeTexture:ge,bindTexture:N,unbindTexture:we,compressedTexImage2D:Zt,compressedTexImage3D:w,texImage2D:K,texImage3D:J,pixelStorei:yt,getParameter:rt,updateUBOMapping:Et,uniformBlockBinding:Rt,texStorage2D:it,texStorage3D:st,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ct,viewport:at,reset:Lt}}function u0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return g?new OffscreenCanvas(w,x):Bs("canvas")}function m(w,x,O){let H=1;const q=Zt(w);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const it=Math.floor(H*q.width),st=Math.floor(H*q.height);h===void 0&&(h=v(it,st));const K=x?v(it,st):h;return K.width=it,K.height=st,K.getContext("2d").drawImage(w,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+it+"x"+st+")."),K}else return"data"in w&&Ct("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function p(w){return w.generateMipmaps}function T(w){r.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(w,x,O,H,q,it=!1){if(w!==null){if(r[w]!==void 0)return r[w];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let st;H&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===r.RED&&(O===r.FLOAT&&(K=r.R32F),O===r.HALF_FLOAT&&(K=r.R16F),O===r.UNSIGNED_BYTE&&(K=r.R8),O===r.UNSIGNED_SHORT&&st&&(K=st.R16_EXT),O===r.SHORT&&st&&(K=st.R16_SNORM_EXT)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.R8UI),O===r.UNSIGNED_SHORT&&(K=r.R16UI),O===r.UNSIGNED_INT&&(K=r.R32UI),O===r.BYTE&&(K=r.R8I),O===r.SHORT&&(K=r.R16I),O===r.INT&&(K=r.R32I)),x===r.RG&&(O===r.FLOAT&&(K=r.RG32F),O===r.HALF_FLOAT&&(K=r.RG16F),O===r.UNSIGNED_BYTE&&(K=r.RG8),O===r.UNSIGNED_SHORT&&st&&(K=st.RG16_EXT),O===r.SHORT&&st&&(K=st.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RG8UI),O===r.UNSIGNED_SHORT&&(K=r.RG16UI),O===r.UNSIGNED_INT&&(K=r.RG32UI),O===r.BYTE&&(K=r.RG8I),O===r.SHORT&&(K=r.RG16I),O===r.INT&&(K=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RGB8UI),O===r.UNSIGNED_SHORT&&(K=r.RGB16UI),O===r.UNSIGNED_INT&&(K=r.RGB32UI),O===r.BYTE&&(K=r.RGB8I),O===r.SHORT&&(K=r.RGB16I),O===r.INT&&(K=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),O===r.UNSIGNED_INT&&(K=r.RGBA32UI),O===r.BYTE&&(K=r.RGBA8I),O===r.SHORT&&(K=r.RGBA16I),O===r.INT&&(K=r.RGBA32I)),x===r.RGB&&(O===r.UNSIGNED_SHORT&&st&&(K=st.RGB16_EXT),O===r.SHORT&&st&&(K=st.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),x===r.RGBA){const J=it?Os:Gt.getTransfer(q);O===r.FLOAT&&(K=r.RGBA32F),O===r.HALF_FLOAT&&(K=r.RGBA16F),O===r.UNSIGNED_BYTE&&(K=J===Jt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&st&&(K=st.RGBA16_EXT),O===r.SHORT&&st&&(K=st.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(w,x){let O;return w?x===null||x===xn||x===Yi?O=r.DEPTH24_STENCIL8:x===an?O=r.DEPTH32F_STENCIL8:x===qi&&(O=r.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===Yi?O=r.DEPTH_COMPONENT24:x===an?O=r.DEPTH_COMPONENT32F:x===qi&&(O=r.DEPTH_COMPONENT16),O}function E(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==fe&&w.minFilter!==Le?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function _(w){const x=w.target;x.removeEventListener("dispose",_),P(x)}function A(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,H=d.get(O);if(H){const q=H[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(w),Object.keys(H).length===0&&d.delete(O)}n.remove(w)}function C(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const O=w.source,H=d.get(O);delete H[x.__cacheKey],a.memory.textures--}function P(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let q=0;q<x.__webglFramebuffer[H].length;q++)r.deleteFramebuffer(x.__webglFramebuffer[H][q]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let H=0,q=O.length;H<q;H++){const it=n.get(O[H]);it.__webglTexture&&(r.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(w)}let F=0;function D(){F=0}function U(){return F}function z(w){F=w}function $(){const w=F;return w>=i.maxTextures&&Ct("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,w}function V(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function nt(w,x){const O=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const H=w.image;if(H===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function X(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,x);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function Q(w,x){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,x);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function j(w,x){const O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Pt(O,w,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const Tt={[Xi]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[Br]:r.MIRRORED_REPEAT},St={[fe]:r.NEAREST,[Ec]:r.NEAREST_MIPMAP_NEAREST,[ss]:r.NEAREST_MIPMAP_LINEAR,[Le]:r.LINEAR,[Js]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},ee={[Rc]:r.NEVER,[Dc]:r.ALWAYS,[Cc]:r.LESS,[Ra]:r.LEQUAL,[Pc]:r.EQUAL,[Ca]:r.GEQUAL,[Ic]:r.GREATER,[Lc]:r.NOTEQUAL};function Vt(w,x){if(x.type===an&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Le||x.magFilter===Js||x.magFilter===ss||x.magFilter===Qn||x.minFilter===Le||x.minFilter===Js||x.minFilter===ss||x.minFilter===Qn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Tt[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Tt[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Tt[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,St[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fe||x.minFilter!==ss&&x.minFilter!==Qn||x.type===an&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let q=d.get(H);q===void 0&&(q={},d.set(H,q));const it=V(x);if(it!==w.__cacheKey){q[it]===void 0&&(q[it]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[it].usedTimes++;const st=q[w.__cacheKey];st!==void 0&&(q[w.__cacheKey].usedTimes--,st.usedTimes===0&&C(x)),w.__cacheKey=it,w.__webglTexture=q[it].texture}return O}function Y(w,x,O){return Math.floor(Math.floor(w/O)/x)}function tt(w,x,O,H){const it=w.updateRanges;if(it.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,H,x.data);else{it.sort((yt,ct)=>yt.start-ct.start);let st=0;for(let yt=1;yt<it.length;yt++){const ct=it[st],at=it[yt],Et=ct.start+ct.count,Rt=Y(at.start,x.width,4),Lt=Y(ct.start,x.width,4);at.start<=Et+1&&Rt===Lt&&Y(at.start+at.count-1,x.width,4)===Rt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;const K=e.getParameter(r.UNPACK_ROW_LENGTH),J=e.getParameter(r.UNPACK_SKIP_PIXELS),rt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let yt=0,ct=it.length;yt<ct;yt++){const at=it[yt],Et=Math.floor(at.start/4),Rt=Math.ceil(at.count/4),Lt=Et%x.width,L=Math.floor(Et/x.width),ot=Rt,Z=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Lt,L,ot,Z,O,H,x.data)}w.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,K),e.pixelStorei(r.UNPACK_SKIP_PIXELS,J),e.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function _t(w,x,O){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);const q=Yt(w,x),it=x.source;e.bindTexture(H,w.__webglTexture,r.TEXTURE0+O);const st=n.get(it);if(it.version!==st.__version||q===!0){if(e.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Z=Gt.getPrimaries(Gt.workingColorSpace),lt=x.colorSpace===Hn?null:Gt.getPrimaries(x.colorSpace),dt=x.colorSpace===Hn||Z===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,i.maxTextureSize);J=we(x,J);const rt=s.convert(x.format,x.colorSpace),yt=s.convert(x.type);let ct=S(x.internalFormat,rt,yt,x.normalized,x.colorSpace,x.isVideoTexture);Vt(H,x);let at;const Et=x.mipmaps,Rt=x.isVideoTexture!==!0,Lt=st.__version===void 0||q===!0,L=it.dataReady,ot=E(x,J);if(x.isDepthTexture)ct=b(x.format===jn,x.type),Lt&&(Rt?e.texStorage2D(r.TEXTURE_2D,1,ct,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,ct,J.width,J.height,0,rt,yt,null));else if(x.isDataTexture)if(Et.length>0){Rt&&Lt&&e.texStorage2D(r.TEXTURE_2D,ot,ct,Et[0].width,Et[0].height);for(let Z=0,lt=Et.length;Z<lt;Z++)at=Et[Z],Rt?L&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,rt,yt,at.data):e.texImage2D(r.TEXTURE_2D,Z,ct,at.width,at.height,0,rt,yt,at.data);x.generateMipmaps=!1}else Rt?(Lt&&e.texStorage2D(r.TEXTURE_2D,ot,ct,J.width,J.height),L&&tt(x,J,rt,yt)):e.texImage2D(r.TEXTURE_2D,0,ct,J.width,J.height,0,rt,yt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Rt&&Lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,ct,Et[0].width,Et[0].height,J.depth);for(let Z=0,lt=Et.length;Z<lt;Z++)if(at=Et[Z],x.format!==on)if(rt!==null)if(Rt){if(L)if(x.layerUpdates.size>0){const dt=Po(at.width,at.height,x.format,x.type);for(const et of x.layerUpdates){const At=at.data.subarray(et*dt/at.data.BYTES_PER_ELEMENT,(et+1)*dt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,et,at.width,at.height,1,rt,At)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,J.depth,rt,at.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,ct,at.width,at.height,J.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,J.depth,rt,yt,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,ct,at.width,at.height,J.depth,0,rt,yt,at.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Rt&&Lt&&e.texStorage2D(r.TEXTURE_2D,ot,ct,Et[0].width,Et[0].height);for(let Z=0,lt=Et.length;Z<lt;Z++)at=Et[Z],x.format!==on?rt!==null?Rt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,ct,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?L&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,at.width,at.height,rt,yt,at.data):e.texImage2D(r.TEXTURE_2D,Z,ct,at.width,at.height,0,rt,yt,at.data)}else if(x.isDataArrayTexture)if(Rt){if(Lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,ct,J.width,J.height,J.depth),L)if(x.layerUpdates.size>0){const Z=Po(J.width,J.height,x.format,x.type);for(const lt of x.layerUpdates){const dt=J.data.subarray(lt*Z/J.data.BYTES_PER_ELEMENT,(lt+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,J.width,J.height,1,rt,yt,dt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,rt,yt,J.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,ct,J.width,J.height,J.depth,0,rt,yt,J.data);else if(x.isData3DTexture)Rt?(Lt&&e.texStorage3D(r.TEXTURE_3D,ot,ct,J.width,J.height,J.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,rt,yt,J.data)):e.texImage3D(r.TEXTURE_3D,0,ct,J.width,J.height,J.depth,0,rt,yt,J.data);else if(x.isFramebufferTexture){if(Lt)if(Rt)e.texStorage2D(r.TEXTURE_2D,ot,ct,J.width,J.height);else{let Z=J.width,lt=J.height;for(let dt=0;dt<ot;dt++)e.texImage2D(r.TEXTURE_2D,dt,ct,Z,lt,0,rt,yt,null),Z>>=1,lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const Z=r.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(x),Z.onpaint=lt=>{const dt=lt.changedElements;for(const et of f)dt.includes(et.image)&&(et.needsUpdate=!0)},Z.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{const dt=r.RGBA,et=r.RGBA,At=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,dt,et,At,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Et.length>0){if(Rt&&Lt){const Z=Zt(Et[0]);e.texStorage2D(r.TEXTURE_2D,ot,ct,Z.width,Z.height)}for(let Z=0,lt=Et.length;Z<lt;Z++)at=Et[Z],Rt?L&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,rt,yt,at):e.texImage2D(r.TEXTURE_2D,Z,ct,rt,yt,at);x.generateMipmaps=!1}else if(Rt){if(Lt){const Z=Zt(J);e.texStorage2D(r.TEXTURE_2D,ot,ct,Z.width,Z.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,yt,J)}else e.texImage2D(r.TEXTURE_2D,0,ct,rt,yt,J);p(x)&&T(H),st.__version=it.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Pt(w,x,O){if(x.image.length!==6)return;const H=Yt(w,x),q=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);const it=n.get(q);if(q.version!==it.__version||H===!0){e.activeTexture(r.TEXTURE0+O);const st=Gt.getPrimaries(Gt.workingColorSpace),K=x.colorSpace===Hn?null:Gt.getPrimaries(x.colorSpace),J=x.colorSpace===Hn||st===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const rt=x.isCompressedTexture||x.image[0].isCompressedTexture,yt=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let et=0;et<6;et++)!rt&&!yt?ct[et]=m(x.image[et],!0,i.maxCubemapSize):ct[et]=yt?x.image[et].image:x.image[et],ct[et]=we(x,ct[et]);const at=ct[0],Et=s.convert(x.format,x.colorSpace),Rt=s.convert(x.type),Lt=S(x.internalFormat,Et,Rt,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ot=it.__version===void 0||H===!0,Z=q.dataReady;let lt=E(x,at);Vt(r.TEXTURE_CUBE_MAP,x);let dt;if(rt){L&&ot&&e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Lt,at.width,at.height);for(let et=0;et<6;et++){dt=ct[et].mipmaps;for(let At=0;At<dt.length;At++){const Mt=dt[At];x.format!==on?Et!==null?L?Z&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Lt,Mt.width,Mt.height,0,Mt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,0,0,Mt.width,Mt.height,Et,Rt,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At,Lt,Mt.width,Mt.height,0,Et,Rt,Mt.data)}}}else{if(dt=x.mipmaps,L&&ot){dt.length>0&&lt++;const et=Zt(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,Lt,et.width,et.height)}for(let et=0;et<6;et++)if(yt){L?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ct[et].width,ct[et].height,Et,Rt,ct[et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,ct[et].width,ct[et].height,0,Et,Rt,ct[et].data);for(let At=0;At<dt.length;At++){const ie=dt[At].image[et].image;L?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,ie.width,ie.height,Et,Rt,ie.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Lt,ie.width,ie.height,0,Et,Rt,ie.data)}}else{L?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et,Rt,ct[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,Et,Rt,ct[et]);for(let At=0;At<dt.length;At++){const Mt=dt[At];L?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,0,0,Et,Rt,Mt.image[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,At+1,Lt,Et,Rt,Mt.image[et])}}}p(x)&&T(r.TEXTURE_CUBE_MAP),it.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function mt(w,x,O,H,q,it){const st=s.convert(O.format,O.colorSpace),K=s.convert(O.type),J=S(O.internalFormat,st,K,O.normalized,O.colorSpace),rt=n.get(x),yt=n.get(O);if(yt.__renderTarget=x,!rt.__hasExternalTextures){const ct=Math.max(1,x.width>>it),at=Math.max(1,x.height>>it);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?e.texImage3D(q,it,J,ct,at,x.depth,0,st,K,null):e.texImage2D(q,it,J,ct,at,0,st,K,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),ge(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,q,yt.__webglTexture,0,ce(x)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,q,yt.__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(w,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const H=x.depthTexture,q=H&&H.isDepthTexture?H.type:null,it=b(x.stencilBuffer,q),st=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce(x),it,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce(x),it,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,it,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,w)}else{const H=x.textures;for(let q=0;q<H.length;q++){const it=H[q],st=s.convert(it.format,it.colorSpace),K=s.convert(it.type),J=S(it.internalFormat,st,K,it.normalized,it.colorSpace);ge(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce(x),J,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce(x),J,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,J,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(w,x,O){const H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,x.depthTexture);const rt=s.convert(x.depthTexture.format),yt=s.convert(x.depthTexture.type);let ct;x.depthTexture.format===In?ct=r.DEPTH_COMPONENT24:x.depthTexture.format===jn&&(ct=r.DEPTH24_STENCIL8);for(let at=0;at<6;at++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,x.width,x.height,0,rt,yt,null)}}else nt(x.depthTexture,0);const it=q.__webglTexture,st=ce(x),K=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,J=x.depthTexture.format===jn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===In)ge(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,it,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,J,K,it,0);else if(x.depthTexture.format===jn)ge(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,it,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,J,K,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=H}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)ve(x.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?ve(x.__webglFramebuffer[0],w,0):ve(x.__webglFramebuffer,w,0)}else if(O){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),Nt(x.__webglDepthbuffer[H],w,!1);else{const q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,it)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Nt(x.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,it)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(w,x,O){const H=n.get(w);x!==void 0&&mt(H.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ft(w)}function ne(w){const x=w.texture,O=n.get(w),H=n.get(x);w.addEventListener("dispose",_);const q=w.textures,it=w.isWebGLCubeRenderTarget===!0,st=q.length>1;if(st||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,a.memory.textures++),it){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[K][J]=r.createFramebuffer()}else O.__webglFramebuffer[K]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)O.__webglFramebuffer[K]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(st)for(let K=0,J=q.length;K<J;K++){const rt=n.get(q[K]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const J=q[K];O.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const rt=s.convert(J.format,J.colorSpace),yt=s.convert(J.type),ct=S(J.internalFormat,rt,yt,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),at=ce(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,ct,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,O.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Vt(r.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)mt(O.__webglFramebuffer[K][J],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else mt(O.__webglFramebuffer[K],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&T(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let K=0,J=q.length;K<J;K++){const rt=q[K],yt=n.get(rt);let ct=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,yt.__webglTexture),Vt(ct,rt),mt(O.__webglFramebuffer,w,rt,r.COLOR_ATTACHMENT0+K,ct,0),p(rt)&&T(ct)}e.unbindTexture()}else{let K=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),Vt(K,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)mt(O.__webglFramebuffer[J],w,x,r.COLOR_ATTACHMENT0,K,J);else mt(O.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,K,0);p(x)&&T(K),e.unbindTexture()}w.depthBuffer&&Ft(w)}function kt(w){const x=w.textures;for(let O=0,H=x.length;O<H;O++){const q=x[O];if(p(q)){const it=y(w),st=n.get(q).__webglTexture;e.bindTexture(it,st),T(it),e.unbindTexture()}}}const le=[],ye=[];function Oe(w){if(w.samples>0){if(ge(w)===!1){const x=w.textures,O=w.width,H=w.height;let q=r.COLOR_BUFFER_BIT;const it=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=n.get(w),K=x.length>1;if(K)for(let rt=0;rt<x.length;rt++)e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<x.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const yt=n.get(x[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,O,H,0,0,O,H,q,r.NEAREST),c===!0&&(le.length=0,ye.length=0,le.push(r.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(le.push(it),ye.push(it),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<x.length;rt++){e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);const yt=n.get(x[rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ce(w){return Math.min(i.maxSamples,w.samples)}function ge(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function we(w,x){const O=w.colorSpace,H=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Fs&&O!==Hn&&(Gt.getTransfer(O)===Jt?(H!==on||q!==qe)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",O)),x}function Zt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=D,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Xt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function f0(r,t){function e(n,i=Hn){let s;const a=Gt.getTransfer(i);if(n===qe)return r.UNSIGNED_BYTE;if(n===ba)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return r.BYTE;if(n===ml)return r.SHORT;if(n===qi)return r.UNSIGNED_SHORT;if(n===Sa)return r.INT;if(n===xn)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===vn)return r.HALF_FLOAT;if(n===xl)return r.ALPHA;if(n===vl)return r.RGB;if(n===on)return r.RGBA;if(n===In)return r.DEPTH_COMPONENT;if(n===jn)return r.DEPTH_STENCIL;if(n===Ea)return r.RED;if(n===Ta)return r.RED_INTEGER;if(n===ii)return r.RG;if(n===Aa)return r.RG_INTEGER;if(n===wa)return r.RGBA_INTEGER;if(n===Cs||n===Ps||n===Is||n===Ls)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zr||n===kr||n===Gr||n===Hr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===Us||n===Kr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vr||n===Wr)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qr)return s.COMPRESSED_R11_EAC;if(n===Yr)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Us)return s.COMPRESSED_RG11_EAC;if(n===Kr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$r||n===Zr||n===Jr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$r)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jr)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===ha||n===ua)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===da||n===Ns||n===pa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`;class m0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:d0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g0 extends ai{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new m0,p={},T=e.getContextAttributes();let y=null,S=null;const b=[],E=[],R=new zt;let _=null,A=null;const C=new We;C.viewport=new ue;const P=new We;P.viewport=new ue;const F=[C,P],D=new yh;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=b[Y];return tt===void 0&&(tt=new ar,b[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=b[Y];return tt===void 0&&(tt=new ar,b[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=b[Y];return tt===void 0&&(tt=new ar,b[Y]=tt),tt.getHandSpace()};function $(Y){const tt=E.indexOf(Y.inputSource);if(tt===-1)return;const _t=b[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<b.length;Y++){const tt=E[Y];tt!==null&&(E[Y]=null,b[Y].disconnect(tt))}U=null,z=null,m.reset();for(const Y in p)delete p[Y];if(t.setRenderTarget(y),d=null,h=null,f=null,i=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),A!==null){const Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",V),i.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Pt=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?jn:In,Pt=T.stencil?Yi:xn);const Nt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Nt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new cn(h.textureWidth,h.textureHeight,{format:on,type:qe,depthTexture:new $i(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new cn(d.framebufferWidth,d.framebufferHeight,{format:on,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let tt=0;tt<Y.removed.length;tt++){const _t=Y.removed[tt],Pt=E.indexOf(_t);Pt>=0&&(E[Pt]=null,b[Pt].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){const _t=Y.added[tt];let Pt=E.indexOf(_t);if(Pt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=E.length){E.push(_t),Pt=Nt;break}else if(E[Nt]===null){E[Nt]=_t,Pt=Nt;break}if(Pt===-1)break}const mt=b[Pt];mt&&mt.connect(_t)}}const X=new B,Q=new B;function j(Y,tt,_t){X.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);const Pt=X.distanceTo(Q),mt=tt.projectionMatrix.elements,Nt=_t.projectionMatrix.elements,ve=mt[14]/(mt[10]-1),Ft=mt[14]/(mt[10]+1),Xt=(mt[9]+1)/mt[5],ne=(mt[9]-1)/mt[5],kt=(mt[8]-1)/mt[0],le=(Nt[8]+1)/Nt[0],ye=ve*kt,Oe=ve*le,ce=Pt/(-kt+le),ge=ce*-kt;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ge),Y.translateZ(ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const N=ve+ce,we=Ft+ce,Zt=ye-ge,w=Oe+(Pt-ge),x=Xt*Ft/we*N,O=ne*Ft/we*N;Y.projectionMatrix.makePerspective(Zt,w,x,O,N,we),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Tt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,_t=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),D.near=P.near=C.near=tt,D.far=P.far=C.far=_t,(U!==D.near||z!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,z=D.far),D.layers.mask=Y.layers.mask|6,C.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Pt=Y.parent,mt=D.cameras;Tt(D,Pt);for(let Nt=0;Nt<mt.length;Nt++)Tt(mt[Nt],Pt);mt.length===2?j(D,C,P):D.projectionMatrix.copy(C.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),St(Y,D,Pt)};function St(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ga*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Y){return p[Y]};let ee=null;function Vt(Y,tt){if(u=tt.getViewerPose(l||a),g=tt,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Pt=!1;_t.length!==D.cameras.length&&(D.cameras.length=0,Pt=!0);for(let Ft=0;Ft<_t.length;Ft++){const Xt=_t[Ft];let ne=null;if(d!==null)ne=d.getViewport(Xt);else{const le=f.getViewSubImage(h,Xt);ne=le.viewport,Ft===0&&(t.setRenderTargetTextures(S,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(S))}let kt=F[Ft];kt===void 0&&(kt=new We,kt.layers.enable(Ft),kt.viewport=new ue,F[Ft]=kt),kt.matrix.fromArray(Xt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Xt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ne.x,ne.y,ne.width,ne.height),Ft===0&&(D.matrix.copy(kt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pt===!0&&D.cameras.push(kt)}const mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const Ft=f.getDepthInformation(_t[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,i.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Ft=0;Ft<_t.length;Ft++){const Xt=_t[Ft].camera;if(Xt){let ne=p[Xt];ne||(ne=new Pl,p[Xt]=ne);const kt=f.getCameraImage(Xt);ne.sourceTexture=kt}}}}for(let _t=0;_t<b.length;_t++){const Pt=E[_t],mt=b[_t];Pt!==null&&mt!==void 0&&mt.update(Pt,tt,l||a)}ee&&ee(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Yt=new Ul;Yt.setAnimationLoop(Vt),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}}const _0=new ae,Gl=new It;Gl.set(-1,0,0,0,1,0,0,0,1);function x0(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Il(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,y,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),y=T.envMap,S=T.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gl),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const E=b.program;n.uniformBlockBinding(S,E)}function l(S,b){let E=i[S.id];E===void 0&&(m(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",T));const R=b.program;n.updateUBOMapping(S,R);const _=t.render.frame;s[S.id]!==_&&(h(S),s[S.id]=_)}function u(S){const b=f();S.__bindingPointIndex=b;const E=r.createBuffer(),R=S.__size,_=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,R,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=i[S.id],E=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let _=0,A=E.length;_<A;_++){const C=E[_];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)d(C[P],_,P,R);else d(C,_,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,b,E,R){if(v(S,b,E,R)===!0){const _=S.__offset,A=S.value;if(Array.isArray(A)){let C=0;for(let P=0;P<A.length;P++){const F=A[P],D=p(F);g(F,S.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,S.__data)}}function g(S,b,E){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,E)}function v(S,b,E,R){const _=S.value,A=b+"_"+E;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const C=R[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(S){const b=S.uniforms;let E=0;const R=16;for(let A=0,C=b.length;A<C;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let F=0,D=P.length;F<D;F++){const U=P[F],z=Array.isArray(U.value)?U.value:[U.value];for(let $=0,V=z.length;$<V;$++){const nt=z[$],X=p(nt),Q=E%R,j=Q%X.boundary,Tt=Q+j;E+=j,Tt!==0&&R-Tt<X.storage&&(E+=R-Tt),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=X.storage}}}const _=E%R;return _>0&&(E+=R-_),S.__size=E,S.__cache={},this}function p(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",S),b}function T(S){const b=S.target;b.removeEventListener("dispose",T);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function y(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:y}}const M0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function S0(){return mn===null&&(mn=new wl(M0,16,16,ii,vn),mn.name="DFG_LUT",mn.minFilter=Le,mn.magFilter=Le,mn.wrapS=Rn,mn.wrapT=Rn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class b0{constructor(t={}){const{canvas:e=Fc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=qe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=d,m=new Set([wa,Aa,Ta]),p=new Set([qe,xn,qi,Yi,ba,ya]),T=new Uint32Array(4),y=new Int32Array(4),S=new B;let b=null,E=null;const R=[],_=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,F=null,D=null,U=null,z=null;this._outputColorSpace=Ae;let $=0,V=0,nt=null,X=-1,Q=null;const j=new ue,Tt=new ue;let St=null;const ee=new Bt(0);let Vt=0,Yt=e.width,Y=e.height,tt=1,_t=null,Pt=null;const mt=new ue(0,0,Yt,Y),Nt=new ue(0,0,Yt,Y);let ve=!1;const Ft=new La;let Xt=!1,ne=!1;const kt=new ae,le=new B,ye=new ue,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function ge(){return nt===null?tt:1}let N=n;function we(M,I){return e.getContext(M,I)}let Zt,w,x,O,H,q,it,st,K,J,rt,yt,ct,at,Et,Rt,Lt,L,ot,Z,lt,dt,et;try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",Qe,!1),N===null){const I="webgl2";if(N=we(I,M),N===null)throw we(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(M){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),qt("WebGLRenderer: "+M.message),M}function At(){Zt=new Sd(N),Zt.init(),lt=new f0(N,Zt),w=new ud(N,Zt,t,lt),x=new h0(N,Zt),w.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),D=N.createFramebuffer(),U=N.createFramebuffer(),z=N.createFramebuffer(),O=new Ed(N),H=new Zp,q=new u0(N,Zt,x,H,w,lt,O),it=new Md(C),st=new Th(N),dt=new cd(N,st),K=new bd(N,st,O,dt),J=new Ad(N,K,st,dt,O),L=new Td(N,w,q),Et=new fd(H),rt=new $p(C,it,Zt,w,dt,Et),yt=new x0(C,H),ct=new Qp,at=new s0(Zt),Lt=new ld(C,it,x,J,g,c),Rt=new c0(C,J,w),et=new v0(N,O,w,x),ot=new hd(N,Zt,O),Z=new yd(N,Zt,O),O.programs=rt.programs,C.capabilities=w,C.extensions=Zt,C.properties=H,C.renderLists=ct,C.shadowMap=Rt,C.state=x,C.info=O}v!==qe&&(A=new Rd(v,e.width,e.height,o,i,s));const Mt=new g0(C,N);this.xr=Mt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Zt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Zt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(Yt,Y,!1))},this.getSize=function(M){return M.set(Yt,Y)},this.setSize=function(M,I,W=!0){if(Mt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=M,Y=I,e.width=Math.floor(M*tt),e.height=Math.floor(I*tt),W===!0&&(e.style.width=M+"px",e.style.height=I+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Yt*tt,Y*tt).floor()},this.setDrawingBufferSize=function(M,I,W){Yt=M,Y=I,tt=W,e.width=Math.floor(M*W),e.height=Math.floor(I*W),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(v===qe){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,I,W,k){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,I,W,k),x.viewport(j.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Nt)},this.setScissor=function(M,I,W,k){M.isVector4?Nt.set(M.x,M.y,M.z,M.w):Nt.set(M,I,W,k),x.scissor(Tt.copy(Nt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(M){x.setScissorTest(ve=M)},this.setOpaqueSort=function(M){_t=M},this.setTransparentSort=function(M){Pt=M},this.getClearColor=function(M){return M.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,W=!0){let k=0;if(M){let G=!1;if(nt!==null){const ft=nt.texture.format;G=m.has(ft)}if(G){const ft=nt.texture.type,gt=p.has(ft),ut=Lt.getClearColor(),xt=Lt.getClearAlpha(),bt=ut.r,Dt=ut.g,Ot=ut.b;gt?(T[0]=bt,T[1]=Dt,T[2]=Ot,T[3]=xt,N.clearBufferuiv(N.COLOR,0,T)):(y[0]=bt,y[1]=Dt,y[2]=Ot,y[3]=xt,N.clearBufferiv(N.COLOR,0,y))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),Lt.dispose(),ct.dispose(),at.dispose(),H.dispose(),it.dispose(),J.dispose(),dt.dispose(),et.dispose(),rt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Va),Mt.removeEventListener("sessionend",Wa),qn.stop()};function ie(M){M.preventDefault(),so("WebGLRenderer: Context Lost."),P=!0}function Kt(){so("WebGLRenderer: Context Restored."),P=!1;const M=O.autoReset,I=Rt.enabled,W=Rt.autoUpdate,k=Rt.needsUpdate,G=Rt.type;At(),O.autoReset=M,Rt.enabled=I,Rt.autoUpdate=W,Rt.needsUpdate=k,Rt.type=G}function Qe(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function fn(M){const I=M.target;I.removeEventListener("dispose",fn),Kl(I)}function Kl(M){$l(M),H.remove(M)}function $l(M){const I=H.get(M).programs;I!==void 0&&(I.forEach(function(W){rt.releaseProgram(W)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,W,k,G,ft){I===null&&(I=Oe);const gt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=Ql(M,I,W,k,G);x.setMaterial(k,gt);let xt=W.index,bt=1;if(k.wireframe===!0){if(xt=K.getWireframeAttribute(W),xt===void 0)return;bt=2}const Dt=W.drawRange,Ot=W.attributes.position;let vt=Dt.start*bt,$t=(Dt.start+Dt.count)*bt;ft!==null&&(vt=Math.max(vt,ft.start*bt),$t=Math.min($t,(ft.start+ft.count)*bt)),xt!==null?(vt=Math.max(vt,0),$t=Math.min($t,xt.count)):Ot!=null&&(vt=Math.max(vt,0),$t=Math.min($t,Ot.count));const _e=$t-vt;if(_e<0||_e===1/0)return;dt.setup(G,k,ut,W,xt);let oe,te=ot;if(xt!==null&&(oe=st.get(xt),te=Z,te.setIndex(oe)),G.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*ge()),te.setMode(N.LINES)):te.setMode(N.TRIANGLES);else if(G.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),x.setLineWidth(Re*ge()),G.isLineSegments?te.setMode(N.LINES):G.isLineLoop?te.setMode(N.LINE_LOOP):te.setMode(N.LINE_STRIP)}else G.isPoints?te.setMode(N.POINTS):G.isSprite&&te.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Re=G._multiDrawStarts,pt=G._multiDrawCounts,Ue=G._multiDrawCount,Wt=xt?st.get(xt).bytesPerElement:1,Ye=H.get(k).currentProgram.getUniforms();for(let dn=0;dn<Ue;dn++)Ye.setValue(N,"_gl_DrawID",dn),te.render(Re[dn]/Wt,pt[dn])}else if(G.isInstancedMesh)te.renderInstances(vt,_e,G.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pt=Math.min(W.instanceCount,Re);te.renderInstances(vt,_e,pt)}else te.render(vt,_e)};function Ha(M,I,W,k){F!==null&&M.isNodeMaterial&&F.setObject(k,M),Xt===!0&&Et.setState(M,W,!1),M.transparent===!0&&M.side===Xe&&M.forceSinglePass===!1?(M.side=ke,M.needsUpdate=!0,is(M,I,k),M.side=ei,M.needsUpdate=!0,is(M,I,k),M.side=Xe):is(M,I,k)}this.compile=function(M,I,W=null){W===null&&(W=M),F!==null&&F.renderStart(M,I,W),E=at.get(W),E.init(I),_.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==W&&M.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),ne=this.localClippingEnabled,Xt=Et.init(this.clippingPlanes,ne),Xt===!0&&Et.setGlobalState(this.clippingPlanes,I),F!==null&&Rt.render(E.state.shadowsArray,W,I);const k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let gt=0;gt<ft.length;gt++){const ut=ft[gt];Ha(ut,W,I,G),k.add(ut)}else Ha(ft,W,I,G),k.add(ft)}),E=_.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(M,I,W=null){const k=this.compile(M,I,W);return new Promise(G=>{function ft(){if(k.forEach(function(gt){const xt=H.get(gt).currentProgram;(xt===void 0||xt.isReady())&&k.delete(gt)}),k.size===0){G(M);return}setTimeout(ft,10)}Zt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ys=null;function Zl(M){Ys&&Ys(M)}function Va(){qn.stop()}function Wa(){qn.start()}const qn=new Ul;qn.setAnimationLoop(Zl),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(M){Ys=M,Mt.setAnimationLoop(M),M===null?qn.stop():qn.start()},Mt.addEventListener("sessionstart",Va),Mt.addEventListener("sessionend",Wa),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(M,I);const W=Mt.enabled===!0&&Mt.isPresenting===!0,k=A!==null&&(nt===null||W)&&A.begin(C,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(I),I=Mt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,I,nt),E=at.get(M,_.length),E.init(I),E.state.textureUnits=q.getTextureUnits(),_.push(E),kt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ft.setFromProjectionMatrix(kt,_n,I.reversedDepth),ne=this.localClippingEnabled,Xt=Et.init(this.clippingPlanes,ne),b=ct.get(M,R.length),b.init(),R.push(b),Mt.enabled===!0&&Mt.isPresenting===!0){const gt=C.xr.getDepthSensingMesh();gt!==null&&Ks(gt,I,-1/0,C.sortObjects)}Ks(M,I,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(_t,Pt),ce=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ce&&Lt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&Et.beginShadows();const G=E.state.shadowsArray;if(Rt.render(G,M,I),Xt===!0&&Et.endShadows(),(k&&A.hasRenderPass())===!1){const gt=b.opaque,ut=b.transmissive;if(E.setupLights(),I.isArrayCamera){const xt=I.cameras;if(ut.length>0)for(let bt=0,Dt=xt.length;bt<Dt;bt++){const Ot=xt[bt];qa(gt,ut,M,Ot)}ce&&Lt.render(M);for(let bt=0,Dt=xt.length;bt<Dt;bt++){const Ot=xt[bt];Xa(b,M,Ot,Ot.viewport)}}else ut.length>0&&qa(gt,ut,M,I),ce&&Lt.render(M),Xa(b,M,I)}nt!==null&&V===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),k&&A.end(C),M.isScene===!0&&M.onAfterRender(C,M,I),dt.resetDefaultState(),X=-1,Q=null,_.pop(),_.length>0?(E=_[_.length-1],q.setTextureUnits(E.state.textureUnits),Xt===!0&&Et.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,F!==null&&F.renderEnd()};function Ks(M,I,W,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ft)){k&&ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(kt);const gt=J.update(M),ut=M.material;ut.visible&&b.push(M,gt,ut,W,ye.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ft))){const gt=J.update(M),ut=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ye.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ye.copy(gt.boundingSphere.center)),ye.applyMatrix4(M.matrixWorld).applyMatrix4(kt)),Array.isArray(ut)){const xt=gt.groups;for(let bt=0,Dt=xt.length;bt<Dt;bt++){const Ot=xt[bt],vt=ut[Ot.materialIndex];vt&&vt.visible&&b.push(M,gt,vt,W,ye.z,Ot,I)}}else ut.visible&&b.push(M,gt,ut,W,ye.z,null,I)}}const ft=M.children;for(let gt=0,ut=ft.length;gt<ut;gt++)Ks(ft[gt],I,W,k)}function Xa(M,I,W,k){const{opaque:G,transmissive:ft,transparent:gt}=M;E.setupLightsView(W),Xt===!0&&Et.setGlobalState(C.clippingPlanes,W),k&&x.viewport(j.copy(k)),G.length>0&&ns(G,I,W),ft.length>0&&ns(ft,I,W),gt.length>0&&ns(gt,I,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function qa(M,I,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const vt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new cn(1,1,{generateMipmaps:!0,type:vt?vn:qe,minFilter:Qn,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const ft=E.state.transmissionRenderTarget[k.id],gt=k.viewport||j;ft.setSize(gt.z*C.transmissionResolutionScale,gt.w*C.transmissionResolutionScale);const ut=C.getRenderTarget(),xt=C.getActiveCubeFace(),bt=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(ee),Vt=C.getClearAlpha(),Vt<1&&C.setClearColor(16777215,.5),C.clear(),ce&&Lt.render(W);const Dt=C.toneMapping;C.toneMapping=ln;const Ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),Xt===!0&&Et.setGlobalState(C.clippingPlanes,k),ns(M,W,k),q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let $t=0,_e=I.length;$t<_e;$t++){const oe=I[$t],{object:te,geometry:Re,material:pt,group:Ue}=oe;if(pt.side===Xe&&te.layers.test(k.layers)){const Wt=pt.side;pt.side=ke,pt.needsUpdate=!0,Ya(te,W,k,Re,pt,Ue),pt.side=Wt,pt.needsUpdate=!0,vt=!0}}vt===!0&&(q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft))}C.setRenderTarget(ut,xt,bt),C.setClearColor(ee,Vt),Ot!==void 0&&(k.viewport=Ot),C.toneMapping=Dt}function ns(M,I,W){const k=I.isScene===!0?I.overrideMaterial:null;for(let G=0,ft=M.length;G<ft;G++){const gt=M[G],{object:ut,geometry:xt,group:bt}=gt;let Dt=gt.material;Dt.allowOverride===!0&&k!==null&&(Dt=k),ut.layers.test(W.layers)&&Ya(ut,I,W,xt,Dt,bt)}}function Ya(M,I,W,k,G,ft){F!==null&&G.isNodeMaterial&&F.setObject(M,G),M.onBeforeRender(C,I,W,k,G,ft),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(C,I,W,k,M,ft),G.transparent===!0&&G.side===Xe&&G.forceSinglePass===!1?(G.side=ke,G.needsUpdate=!0,C.renderBufferDirect(W,I,k,G,M,ft),G.side=ei,G.needsUpdate=!0,C.renderBufferDirect(W,I,k,G,M,ft),G.side=Xe):C.renderBufferDirect(W,I,k,G,M,ft),M.onAfterRender(C,I,W,k,G,ft)}function is(M,I,W){I.isScene!==!0&&(I=Oe);const k=H.get(M),G=E.state.lights,ft=E.state.shadowsArray,gt=G.state.version,ut=rt.getParameters(M,G.state,ft,I,W,E.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ut);let bt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;const Dt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=it.get(M.envMap||k.environment,Dt),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",fn),bt=new Map,k.programs=bt);let Ot=bt.get(xt);if(Ot!==void 0){if(k.currentProgram===Ot&&k.lightsStateVersion===gt)return $a(M,ut),Ot}else ut.uniforms=rt.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,W,ut),M.onBeforeCompile(ut,C),Ot=rt.acquireProgram(ut,xt),bt.set(xt,Ot),k.uniforms=ut.uniforms;const vt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(vt.clippingPlanes=Et.uniform),$a(M,ut),k.needsLights=tc(M),k.lightsStateVersion=gt,k.needsLights&&(vt.ambientLightColor.value=G.state.ambient,vt.lightProbe.value=G.state.probe,vt.sunLights.value=G.state.sun,vt.sunLightShadows.value=G.state.sunShadow,vt.directionalLights.value=G.state.directional,vt.directionalLightShadows.value=G.state.directionalShadow,vt.spotLights.value=G.state.spot,vt.spotLightShadows.value=G.state.spotShadow,vt.rectAreaLights.value=G.state.rectArea,vt.ltc_1.value=G.state.rectAreaLTC1,vt.ltc_2.value=G.state.rectAreaLTC2,vt.pointLights.value=G.state.point,vt.pointLightShadows.value=G.state.pointShadow,vt.hemisphereLights.value=G.state.hemi,vt.sunShadowMatrix.value=G.state.sunShadowMatrix,vt.sunShadowCascade.value=G.state.sunShadowCascade,vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,vt.spotLightMatrix.value=G.state.spotLightMatrix,vt.spotLightMap.value=G.state.spotLightMap,vt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=Ot,k.uniformsList=null,Ot}function Ka(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Ds.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function $a(M,I){const W=H.get(M);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function Jl(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,k=M.length;W<k;W++){const G=M[W];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Ql(M,I,W,k,G){I.isScene!==!0&&(I=Oe),q.resetTextureUnits();const ft=I.fog,gt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,ut=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Gt.workingColorSpace,xt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,bt=it.get(k.envMap||gt,xt),Dt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),vt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,_e=!!W.morphAttributes.color;let oe=ln;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=C.toneMapping);const te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Re=te!==void 0?te.length:0,pt=H.get(k),Ue=E.state.lights;if(Xt===!0&&(ne===!0||M!==Q)){const se=M===Q&&k.id===X;Et.setState(k,M,se)}let Wt=!1;k.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ue.state.version||pt.outputColorSpace!==ut||G.isBatchedMesh&&pt.batching===!1||!G.isBatchedMesh&&pt.batching===!0||G.isBatchedMesh&&pt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&pt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&pt.instancing===!1||!G.isInstancedMesh&&pt.instancing===!0||G.isSkinnedMesh&&pt.skinning===!1||!G.isSkinnedMesh&&pt.skinning===!0||G.isInstancedMesh&&pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&pt.instancingMorph===!1&&G.morphTexture!==null||pt.envMap!==bt||k.fog===!0&&pt.fog!==ft||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Et.numPlanes||pt.numIntersection!==Et.numIntersection)||pt.vertexAlphas!==Dt||pt.vertexTangents!==Ot||pt.morphTargets!==vt||pt.morphNormals!==$t||pt.morphColors!==_e||pt.toneMapping!==oe||pt.morphTargetsCount!==Re||!!pt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,pt.__version=k.version);let Ye=pt.currentProgram;Wt===!0&&(Ye=is(k,I,G),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Ye,pt));let dn=!1,Dn=!1,li=!1;const Qt=Ye.getUniforms(),pe=pt.uniforms;if(x.useProgram(Ye.program)&&(dn=!0,Dn=!0,li=!0),k.id!==X&&(X=k.id,Dn=!0),pt.needsLights){const se=Jl(E.state.lightProbeGridArray,G);pt.lightProbeGrid!==se&&(pt.lightProbeGrid=se,Dn=!0)}if(dn||Q!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Qt.setValue(N,"projectionMatrix",M.projectionMatrix),Qt.setValue(N,"viewMatrix",M.matrixWorldInverse);const Nn=Qt.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,le.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&Qt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Qt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Dn=!0,li=!0)}if(pt.needsLights&&(Ue.state.sunShadowMap.length>0&&Qt.setValue(N,"sunShadowMap",Ue.state.sunShadowMap,q),Ue.state.directionalShadowMap.length>0&&Qt.setValue(N,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&Qt.setValue(N,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&Qt.setValue(N,"pointShadowMap",Ue.state.pointShadowMap,q)),G.isSkinnedMesh){Qt.setOptional(N,G,"bindMatrix"),Qt.setOptional(N,G,"bindMatrixInverse");const se=G.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),Qt.setValue(N,"boneTexture",se.boneTexture,q))}G.isBatchedMesh&&(Qt.setOptional(N,G,"batchingTexture"),Qt.setValue(N,"batchingTexture",G._matricesTexture,q),Qt.setOptional(N,G,"batchingIdTexture"),Qt.setValue(N,"batchingIdTexture",G._indirectTexture,q),Qt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Qt.setValue(N,"batchingColorTexture",G._colorsTexture,q));const Un=W.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&L.update(G,W,Ye),(Dn||pt.receiveShadow!==G.receiveShadow)&&(pt.receiveShadow=G.receiveShadow,Qt.setValue(N,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(pe.envMapIntensity.value=I.environmentIntensity),pe.dfgLUT!==void 0&&(pe.dfgLUT.value=S0()),Dn){if(Qt.setValue(N,"toneMappingExposure",C.toneMappingExposure),pt.needsLights&&jl(pe,li),ft&&k.fog===!0&&yt.refreshFogUniforms(pe,ft),yt.refreshMaterialUniforms(pe,k,tt,Y,E.state.transmissionRenderTarget[M.id]),pt.needsLights&&pt.lightProbeGrid){const se=pt.lightProbeGrid;pe.probesSH.value=se.texture,pe.probesMin.value.copy(se.boundingBox.min),pe.probesMax.value.copy(se.boundingBox.max),pe.probesResolution.value.copy(se.resolution)}Ds.upload(N,Ka(pt),pe,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ds.upload(N,Ka(pt),pe,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Qt.setValue(N,"center",G.center),Qt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Qt.setValue(N,"normalMatrix",G.normalMatrix),Qt.setValue(N,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const se=k.uniformsGroups;for(let Nn=0,ci=se.length;Nn<ci;Nn++){const Ja=se[Nn];et.update(Ja,Ye),et.bind(Ja,Ye)}}return Ye}function jl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function tc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,I,W){const k=H.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=I,H.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const W=H.get(M);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,W=0){nt=M,$=I,V=W;let k=null,G=!1,ft=!1;if(M){const ut=H.get(M);if(ut.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,ut.__webglFramebuffer),j.copy(M.viewport),Tt.copy(M.scissor),St=M.scissorTest,x.viewport(j),x.scissor(Tt),x.setScissorTest(St),X=-1;return}else if(ut.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(ut.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Dt=M.depthTexture;if(ut.__boundDepthTexture!==Dt){if(Dt!==null&&H.has(Dt)&&(M.width!==Dt.image.width||M.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const xt=M.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ft=!0);const bt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?k=bt[I][W]:k=bt[I],G=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?k=H.get(M).__webglMultisampledFramebuffer:Array.isArray(bt)?k=bt[W]:k=bt,j.copy(M.viewport),Tt.copy(M.scissor),St=M.scissorTest}else j.copy(mt).multiplyScalar(tt).floor(),Tt.copy(Nt).multiplyScalar(tt).floor(),St=ve;if(W!==0&&(k=D),x.bindFramebuffer(N.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(j),x.scissor(Tt),x.setScissorTest(St),G){const ut=H.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ut.__webglTexture,W)}else if(ft){const ut=I;for(let xt=0;xt<M.textures.length;xt++){const bt=H.get(M.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,bt.__webglTexture,W,ut)}}else if(M!==null&&W!==0){const ut=H.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ut.__webglTexture,W)}X=-1};function Za(M){const I=H.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=w.textureFormatReadable(M.format),I.__typeReadable=w.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,W,k,G,ft,gt,ut=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){x.bindFramebuffer(N.FRAMEBUFFER,xt);try{const bt=M.textures[ut],Dt=bt.format,Ot=bt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut);const vt=Za(bt);if(vt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&W>=0&&W<=M.height-G&&N.readPixels(I,W,k,G,lt.convert(Dt),lt.convert(Ot),ft)}finally{const bt=nt!==null?H.get(nt).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,I,W,k,G,ft,gt,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(I>=0&&I<=M.width-k&&W>=0&&W<=M.height-G){x.bindFramebuffer(N.FRAMEBUFFER,xt);const bt=M.textures[ut],Dt=bt.format,Ot=bt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ut);const vt=Za(bt);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(I,W,k,G,lt.convert(Dt),lt.convert(Ot),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const _e=nt!==null?H.get(nt).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,_e);const oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Oc(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer($t),N.deleteSync(oe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,W=0){const k=Math.pow(2,-W),G=Math.floor(M.image.width*k),ft=Math.floor(M.image.height*k),gt=I!==null?I.x:0,ut=I!==null?I.y:0;q.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,gt,ut,G,ft),x.unbindTexture()},this.copyTextureToTexture=function(M,I,W=null,k=null,G=0,ft=0){let gt,ut,xt,bt,Dt,Ot,vt,$t,_e;const oe=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(W!==null)gt=W.max.x-W.min.x,ut=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,Dt=W.min.y,Ot=W.isBox3?W.min.z:0;else{const pe=Math.pow(2,-G);gt=Math.floor(oe.width*pe),ut=Math.floor(oe.height*pe),M.isDataArrayTexture?xt=oe.depth:M.isData3DTexture?xt=Math.floor(oe.depth*pe):xt=1,bt=0,Dt=0,Ot=0}k!==null?(vt=k.x,$t=k.y,_e=k.z):(vt=0,$t=0,_e=0);const te=lt.convert(I.format),Re=lt.convert(I.type);let pt;I.isData3DTexture?(q.setTexture3D(I,0),pt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(q.setTexture2DArray(I,0),pt=N.TEXTURE_2D_ARRAY):(q.setTexture2D(I,0),pt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Ue=x.getParameter(N.UNPACK_ROW_LENGTH),Wt=x.getParameter(N.UNPACK_IMAGE_HEIGHT),Ye=x.getParameter(N.UNPACK_SKIP_PIXELS),dn=x.getParameter(N.UNPACK_SKIP_ROWS),Dn=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,oe.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),x.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);const li=M.isDataArrayTexture||M.isData3DTexture,Qt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const pe=H.get(M),Un=H.get(I),se=H.get(pe.__renderTarget),Nn=H.get(Un.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,se.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let ci=0;ci<xt;ci++)li&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(M).__webglTexture,G,Ot+ci),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(I).__webglTexture,ft,_e+ci)),N.blitFramebuffer(bt,Dt,gt,ut,vt,$t,gt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||H.has(M)){const pe=H.get(M),Un=H.get(I);x.bindFramebuffer(N.READ_FRAMEBUFFER,U),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let se=0;se<xt;se++)li?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pe.__webglTexture,G,Ot+se):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,G),Qt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Un.__webglTexture,ft,_e+se):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Un.__webglTexture,ft),G!==0?N.blitFramebuffer(bt,Dt,gt,ut,vt,$t,gt,ut,N.COLOR_BUFFER_BIT,N.NEAREST):Qt?N.copyTexSubImage3D(pt,ft,vt,$t,_e+se,bt,Dt,gt,ut):N.copyTexSubImage2D(pt,ft,vt,$t,bt,Dt,gt,ut);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Qt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(pt,ft,vt,$t,_e,gt,ut,xt,te,Re,oe.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(pt,ft,vt,$t,_e,gt,ut,xt,te,oe.data):N.texSubImage3D(pt,ft,vt,$t,_e,gt,ut,xt,te,Re,oe):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ft,vt,$t,gt,ut,te,Re,oe.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ft,vt,$t,oe.width,oe.height,te,oe.data):N.texSubImage2D(N.TEXTURE_2D,ft,vt,$t,gt,ut,te,Re,oe);x.pixelStorei(N.UNPACK_ROW_LENGTH,Ue),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Wt),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Ye),x.pixelStorei(N.UNPACK_SKIP_ROWS,dn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Dn),ft===0&&I.generateMipmaps&&N.generateMipmap(pt),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){$=0,V=0,nt=null,x.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}function jo(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Ge;let l=0;for(let u=0;u<r.length;++u){const f=r[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const f=[];for(let h=0;h<r.length;++h){const d=r[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=r[h].attributes.position.count}c.setIndex(f)}for(const u in s){const f=tl(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][h]);const g=tl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function tl(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){const u=r[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new hn(a,e,n);let c=0;for(let l=0;l<r.length;++l){const u=r[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const v=u.getComponent(h,g);o.setComponent(h+f,g,v)}}else a.set(u.array,c);c+=u.count*e}return i!==void 0&&(o.gpuType=i),o}const he=r=>{const t=Math.sin(r*127.1+91.7)*43758.5453;return t-Math.floor(t)};function Hl(r,t=!1){const e=new ts(r);return e.magFilter=e.minFilter=fe,e.colorSpace=Ae,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=Xi),e}function y0(r){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n={brick:["#48434c","#63585e","#292c35"],metal:["#334743","#6a7a6e","#162b2c"],concrete:["#4c5554","#69716a","#303e3e"],crate:["#696047","#988457","#30342c"],floor:["#303b3b","#515952","#19292b"],labfloor:["#405450","#697b6e","#223a39"],road:["#252a32","#485057","#171f28"],ceiling:["#2c3a3a","#53635b","#142628"],door:["#3d5149","#7d8e77","#182b29"]},i=n[r]??n.metal,s=(c,l,u,f,h)=>{e.fillStyle=c,e.fillRect(l,u,f,h)},a=(c,l,u=1)=>{e.strokeStyle=c,e.lineWidth=u,e.beginPath(),e.moveTo(l[0],l[1]);for(let f=2;f<l.length;f+=2)e.lineTo(l[f],l[f+1]);e.stroke()},o=(c,l)=>{s("#172827",c,l,4,4),s("#a2ac95",c,l,3,2),s("#63776b",c+1,l+2,2,1),s("#263e39",c+1,l+1,1,1)};s(i[0],0,0,128,128);for(let c=0;c<1500;c++)e.globalAlpha=.18+he(c)*.2,s(c%3?i[2]:i[1],he(c+1)*128|0,he(c+2)*128|0,1+c%3,1);if(e.globalAlpha=1,r==="brick"){for(let c=0;c<8;c++)for(let l=-1;l<5;l++){const u=l*32+c%2*16,f=c*16,h=c*5+l+2;e.globalAlpha=.15+he(h+70)*.15,s(h%3?i[1]:i[2],u+2,f+2,29,13),e.globalAlpha=1,s("#202832",u,f,32,2),s("#242930",u,f,2,16),s("#77656a",u+3,f+3,26,1),s("#584e56",u+2,f+4,1,9),s("#33323a",u+3,f+14,27,1),h%3===0&&(s("#292d35",u+22,f+3,3,2),s("#81716e",u+22,f+5,4,1)),h%4===0&&a("#302c35",[u+12,f+4,u+10,f+7,u+12,f+10,u+11,f+13]),s("#393a40",u+5,f+9,4,1),s("#62545a",u+17,f+7,6,1)}for(let c=0;c<15;c++)e.globalAlpha=.12,s("#1b302c",he(c+201)*128|0,he(c+231)*128|0,4,8);e.globalAlpha=1}else if(["metal","ceiling","door"].includes(r)){for(let c=0;c<2;c++)for(let l=0;l<2;l++){const u=l*64,f=c*64;s(i[2],u,f,64,3),s(i[2],u,f,3,64),s(i[1],u+3,f+3,59,1),s("#445d51",u+3,f+4,1,57);for(const h of[7,55])for(const d of[7,55])o(u+h,f+d);for(let h=0;h<7;h++){const d=u+10+he(h+c*14+l*7)*42|0,g=f+13+h*6;s("#263d38",d,g,10,1),s("#748077",d+2,g+1,5,1)}if(s("#7e6643",u+3,f+48,3,12),s("#553f2b",u+6,f+55,6,4),r==="ceiling"||r==="metal"&&c===1&&l===1){s("#1a2d2e",u+17,f+19,31,27);for(let h=21;h<45;h+=4)s("#0e2226",u+20,f+h-f,25,2),s("#667b6a",u+20,f+h-f+2,25,1)}}if(r==="door"){s("#172929",12,14,104,93),s("#718573",14,16,100,2);for(let c=20;c<101;c+=8)s("#4f6b59",16,c,96,4),s("#263e37",16,c+4,96,3),s("#76917a",18,c,90,1);s("#c7ab53",0,108,128,13);for(let c=-16;c<144;c+=24)e.fillStyle="#242c28",e.beginPath(),e.moveTo(c,121),e.lineTo(c+12,108),e.lineTo(c+24,108),e.lineTo(c+12,121),e.fill();s("#132a28",60,0,4,108),s("#92a288",65,2,2,104);for(const c of[7,97])o(53,c),o(72,c)}}else if(r==="crate"){for(let c=0;c<128;c+=16){s("#3e4030",c,0,2,128),s("#a18c5b",c+3,3,1,119);for(let l=8;l<120;l+=11)s("#4f4c35",c+5,l,7,1)}for(const c of[0,60,120])s("#333a30",c,0,8,128),s("#77836b",c+1,2,2,123);for(const c of[0,60,120])s("#333a30",0,c,128,8),s("#8e916f",3,c+1,121,2);for(const c of[3,63,123])for(const l of[5,62,122])o(c,l);s("#c4b886",19,21,34,22),s("#292f27",22,24,28,3),s("#595b40",22,30,19,2);for(let c=23;c<49;c+=3)s("#3d4934",c,36,1,5)}else if(r==="floor"||r==="labfloor")for(let c=0;c<2;c++)for(let l=0;l<2;l++){const u=l*64,f=c*64;s(i[2],u,f,64,3),s(i[2],u,f,3,64),s(i[1],u+3,f+3,59,1),s("#54675b",u+3,f+4,1,57);for(let h=0;h<9;h++){const d=u+8+he(h+c*21+l*7)*44|0,g=f+9+he(h+90)*44|0;s("#637363",d,g,5,1),s("#243a35",d+1,g+1,7,1)}if(r==="floor"){o(u+7,f+7),o(u+54,f+54);for(let h=14;h<52;h+=9)for(let d=15;d<52;d+=12)a("#506157",[u+d,f+h,u+d+3,f+h-3,u+d+5,f+h-3])}else c===1&&l===0&&a("#263e38",[u+20,f+3,u+21,f+12,u+26,f+19,u+25,f+29,u+31,f+35,u+32,f+45])}else if(r==="concrete"){s("#273c3d",0,0,128,3),s("#7b8173",0,3,128,1),s("#344848",0,64,128,2),a("#2b3b3d",[17,4,20,19,14,32,17,40,9,48,7,65]),a("#728074",[19,5,22,20,16,32]),a("#293b3c",[105,65,103,81,94,92,94,101,89,108,88,125]),a("#687768",[105,82,110,89,120,91]);for(const c of[11,115])for(const l of[12,114])s("#273c3c",c,l,5,4),s("#8b8c78",c,l,4,1);for(let c=0;c<16;c++)e.globalAlpha=.15,s("#1b3436",8+c*7,5,3,10+he(c+4)*30);e.globalAlpha=1}else if(r==="road"){for(let c=0;c<450;c++){const l=he(c+19)*128|0,u=he(c+81)*128|0;s(c%4===0?"#62655f":"#3a4549",l,u,1+c%2,1)}a("#101d25",[0,42,16,45,23,53,36,54,48,66,64,70,79,86,95,89,112,103,128,101],2),a("#46514d",[0,40,16,43,24,51,36,52,48,64,64,68]),a("#14212a",[49,65,49,80,41,88,39,107,29,128]);for(let c=0;c<5;c++)e.globalAlpha=.16,s("#121e29",20+c*3,10+c*4,25-c*3,15);e.globalAlpha=1}return Hl(t,!0)}function E0(r){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=(i,s,a,o,c)=>{e.fillStyle=i,e.fillRect(s,a,o,c)};if(e.imageSmoothingEnabled=!1,r==="poster"){n("#142e32",4,3,118,122),n("#8ba084",8,7,110,110),n("#273a38",12,11,102,67);for(let i=0;i<12;i++)n(i%2?"#5b856e":"#365b54",19+i*7,20,3,44),n("#b2c09b",17+i*7,27+i%4*8,7,3);e.textAlign="center",e.fillStyle="#c8d4aa",e.font="bold 15px monospace",e.fillText("AXIOM",64,29),e.font="bold 9px monospace",e.fillText("A BETTER SPECIES",64,72),e.fillStyle="#293d37",e.fillText("LAZARUS / 2091",64,90),e.fillText("TRUST THE FUTURE",64,103),n("#597460",12,114,66,2),n("#203a34",22,119,86,2),n("#0d272d",4,100,5,15),n("#0d272d",119,8,5,16)}else if(r==="graffiti"){e.textAlign="center",e.font="bold 24px monospace",e.fillStyle="#cb5365",e.fillText("THEY LIED",64,54),e.font="bold 12px monospace",e.fillText("MARA IS ALIVE",64,74);for(let i=0;i<8;i++)n("#a33e50",14+i*14,56,1,5+he(i)*15);e.strokeStyle="#b75059",e.lineWidth=2,e.beginPath(),e.moveTo(8,83),e.lineTo(116,88),e.stroke()}else if(r==="paper"){n("#766e55",9,9,108,111),n("#c2b791",8,6,106,109),n("#aea17e",9,111,101,4),n("#3e4940",17,15,51,7),n("#7d4543",83,13,23,13);for(let i=0;i<13;i++)n("#6e7461",18,30+i*5,48+he(i)*37,1),i%3===0&&n("#9b9271",16,31+i*5,80,1);n("#7c5f50",75,69,28,22),n("#37473e",80,74,18,14),n("#b0a47c",12,93,16,13),e.fillStyle="#713f38",e.font="bold 8px monospace",e.fillText("CASE 091",36,105)}else if(r==="puddle"){e.fillStyle="#173541",e.beginPath();for(let i=0;i<20;i++){const s=i*Math.PI/10,a=45+he(i)*13,o=64+Math.cos(s)*a,c=64+Math.sin(s)*a*.65;i?e.lineTo(o,c):e.moveTo(o,c)}e.closePath(),e.fill();for(let i=0;i<14;i++)n(i%3?"#214f54":"#3a796a",20+he(i)*85,44+he(i+13)*41,7+he(i+9)*25,1);n("#548a73",34,49,27,1),n("#407869",73,58,21,1)}else if(r==="leak"){for(let i=0;i<40;i++)e.globalAlpha=.2+he(i)*.6,n(i%3?"#352d2a":"#806443",he(i)*128,he(i+5)*18,1+he(i+9)*4,19+he(i+3)*104);e.globalAlpha=1}else{n("#102a2b",0,0,128,128),n("#6a7a67",3,3,122,3),n("#3b5950",3,6,3,119);for(let i=0;i<6;i++)n("#203b36",10,12+i*17,75,11),n("#537766",13,15+i*17,42,2),n("#62dda0",17+i*8,17+i*17,5,3),n("#88a58b",94,14+i*17,18,6),n(i%2?"#edac58":"#74dca0",117,15+i*17,3,3);for(let i=0;i<9;i++)n("#899277",12+i*12,120,5,2)}return Hl(t)}const $e=r=>{const t=Math.sin(r*127.1+91.7)*43758.5453;return t-Math.floor(t)},T0=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function A0(r){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createImageData(64,64);for(let s=0;s<64;s++)for(let a=0;a<64;a++){const o=(a-31.5)/31,c=(s-31.5)/31,l=Math.sqrt(o*o+c*c),u=(s*64+a)*4;let f=0,h=[0,0,0];if(r==="shadow")f=Math.max(0,1-l*l)*.88,h=[6,12,18];else if(r==="mist")f=Math.max(0,1-l)*(.45+$e((a>>2)+(s>>2)*16)*.55),h=[168,196,184];else if(r==="blood"){const d=.7+$e((a>>2)+(s>>2)*16)*.28;f=l<d?.9:0,h=$e(a+s*64)>.7?[105,29,43]:[62,17,28],l<.48&&$e(a+s*7)>.77&&(h=[128,43,49])}else f=l<.32?1:l<.7&&$e((a>>1)+(s>>1)*32)>.58?.88:0,h=l<.36?[5,13,19]:l<.5?[93,97,83]:[43,52,51],Math.abs(o+c*.7)<.025&&l>.3&&l<.9&&(f=1,h=[16,25,30]);n.data[u]=h[0],n.data[u+1]=h[1],n.data[u+2]=h[2],n.data[u+3]=f>(T0[s%4*4+a%4]+.5)/16?255:0}e.putImageData(n,0,0);const i=new ts(t);return i.magFilter=i.minFilter=fe,i.generateMipmaps=!1,i.colorSpace=Ae,i}class w0{shadows;rain;mist;impacts;blood;object=new Me;normal=new B;forward=new B(0,0,1);marks=[];seen=new WeakSet;previous;materials=[];vents=[{x:4,z:-3},{x:-11.65,z:-11},{x:11.65,z:-17},{x:-9.6,z:-38.8},{x:9.6,z:-41}];constructor(t){const e=(s,a=1)=>{const o=new sn({map:A0(s),transparent:a<1,opacity:a,alphaTest:.01,depthWrite:!1,side:Xe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return this.materials.push(o),o},n=(s,a,o)=>{const c=new Rl(s,a,o);return c.instanceMatrix.setUsage(Ml),c.frustumCulled=!1,c.count=0,t.add(c),c};this.shadows=n(new Je(1,1),e("shadow",.38),32),this.blood=n(new Je(1,1),e("blood"),32),this.impacts=n(new Je(1,1),e("impact"),64),this.impacts.renderOrder=1,this.blood.renderOrder=1,this.mist=n(new Je(1,1),e("mist",.2),20);const i=new sn({color:9287348,transparent:!0,opacity:.35,depthWrite:!1});this.materials.push(i),this.rain=n(new Ze(.013,.31,.013),i,112)}floor(t,e){return e>-20&&e<4&&Math.abs(t)>10.5?.167:.057}ground(t,e,n,i,s,a,o=this.floor(n,i)){this.object.position.set(n,o,i),this.object.rotation.set(-Math.PI/2,0,0),this.object.scale.set(s,a,1),this.object.updateMatrix(),t.setMatrixAt(e,this.object.matrix)}update(t,e,n,i){this.previous!==t&&(this.marks=[],this.seen=new WeakSet,this.previous=t,this.impacts.count=0);let s=0,a=0;for(const o of t.enemies){const c=o.kind==="brute"?1.05:o.kind==="raptor"?.6:.48;this.ground(this.shadows,s++,o.x,o.z,c*2.4,c*1.7),o.alive||this.ground(this.blood,a++,o.x,o.z,c*2.8,c*2.1,this.floor(o.x,o.z)+.004)}if(t.player.mounted||this.ground(this.shadows,s++,t.mount.x,t.mount.z,2.7,1.65),this.shadows.count=s,this.blood.count=a,this.shadows.instanceMatrix.needsUpdate=this.blood.instanceMatrix.needsUpdate=!0,this.rain.visible=i.quality==="high",this.rain.count=this.rain.visible?112:0,this.rain.visible)for(let o=0;o<this.rain.count;o++){const c=($e(o+40)+n*(.54+$e(o+53)*.23))%1;this.object.position.set(-11.8+$e(o+7)*23.6,.3+(1-c)*7.5,3-$e(o+29)*22),this.object.rotation.set(0,0,-.13),this.object.scale.set(1,.6+$e(o+8)*.7,1),this.object.updateMatrix(),this.rain.setMatrixAt(o,this.object.matrix)}if(this.rain.instanceMatrix.needsUpdate=!0,this.mist.visible=i.quality==="high",this.mist.count=this.mist.visible?20:0,this.mist.visible)for(let o=0;o<this.mist.count;o++){const c=this.vents[o%this.vents.length],l=($e(o+10)+n*.22)%1,u=.6+l*.85;this.object.position.set(c.x+Math.sin(o*2.3+n*.6)*l*.35,.18+l*1.35,c.z+Math.cos(o+n*.4)*l*.25),this.object.quaternion.copy(e.quaternion),this.object.scale.set(u,u*1.13,1),this.object.updateMatrix(),this.mist.setMatrixAt(o,this.object.matrix)}this.mist.instanceMatrix.needsUpdate=!0;for(const o of t.effects)o.kind==="spark"&&!this.seen.has(o)&&(this.seen.add(o),this.recordImpact(o));for(let o=0;o<this.marks.length;o++){const c=this.marks[o];this.object.position.copy(c.position),this.object.quaternion.setFromUnitVectors(this.forward,c.normal),this.object.scale.setScalar(c.size),this.object.updateMatrix(),this.impacts.setMatrixAt(o,this.object.matrix)}this.impacts.count=this.marks.length,this.impacts.instanceMatrix.needsUpdate=!0}recordImpact(t){let e=.045,n,i;for(const s of Ie.walls){const a=s.y??0,o=a+s.h,c=[{axis:"x",value:t.x,center:s.x,half:s.w/2},{axis:"z",value:t.z,center:s.z,half:s.d/2}];if(!(t.y<a-.02||t.y>o+.02))for(const l of c){const u=l.axis==="x"?t.z-s.z:t.x-s.x,f=l.axis==="x"?s.d/2:s.w/2;if(Math.abs(u)>f+.015)continue;const h=l.value>=l.center?1:-1,d=l.center+h*l.half,g=Math.abs(l.value-d);g>=e||(e=g,n=new B(t.x,t.y,t.z),n[l.axis]=d+h*.013,this.normal.set(0,0,0),this.normal[l.axis]=h,i=this.normal.clone())}}n&&i&&(this.marks.push({position:n,normal:i,size:.15+$e(n.x+n.z)*.075}),this.marks.length>64&&this.marks.shift())}dispose(){for(const t of[this.shadows,this.rain,this.mist,this.impacts,this.blood])t.removeFromParent(),t.geometry.dispose();for(const t of this.materials)t.map?.dispose(),t.dispose()}}function R0(r){const t=r.mat(5005912),e=r.mat(1716275),n=r.mat(9279361),i=r.mat(7885891),s=r.mat(7496267),a=r.mat(9060163),o=r.box.bind(r),c=(h,d,g,v,m=6)=>{const p=d.clone().sub(h),T=p.length(),y=new jt(g,g,T,m);y.applyQuaternion(new Xn().setFromUnitVectors(new B(0,1,0),p.normalize()));const S=h.clone().add(d).multiplyScalar(.5);r.addGeometry(y,v,S.x,S.y,S.z)},l=(h,d,g)=>new B(h,d,g),u=h=>{const d=Math.sin(h*127.1+91.7)*43758.5453;return d-Math.floor(d)};o(4.885,1.19,7.7,.045,.075,3.77,s),o(4.885,2.87,7.7,.045,.075,3.77,s);for(const h of[5.83,9.57])o(4.885,2.03,h,.045,1.72,.07,s);const f=[];for(let h=0;h<7;h++){const d=1.8+u(h)*.5,g=7.7+(u(h+10)-.5)*2.8;f.push(l(4.795,d+.125,g)),r.addGeometry(new jt(.025,.025,.04,6),i,4.8,d+.125,g,0,0,Math.PI/2),o(4.842,d+.005,g-.035,.012,.17,.11,e),o(4.832,d+.035,g-.035,.008,.053,.04,n),o(4.832,d-.025,g-.035,.008,.06,.068,t);for(let v=0;v<3;v++)o(4.832,d-.115+v*.023,g+.028,.008,.009,.095-v*.015,i)}for(const[h,d]of[[0,2],[2,5],[5,1],[1,4],[4,3],[3,6],[6,2]])c(f[h],f[d],.008,a,4);o(2.75,2.6,11.958,2.77,1.84,.045,e),o(2.75,2.6,11.925,.045,1.84,.028,t);for(const h of[1.33,4.17])o(h,2.6,11.907,.09,1.94,.055,s);for(const h of[1.65,3.55])o(2.75,h,11.907,2.94,.09,.055,s);for(let h=0;h<16;h++){const d=1.78+h*.105;o(2.75,d,11.899,2.7,.062,.055,t),o(2.75,d+.028,11.865,2.69,.014,.012,n)}for(const h of[1.96,3.51])o(h,2.57,11.86,.016,1.72,.018,e);c(l(4.24,3.42,11.872),l(4.24,2.58,11.872),.007,n,4),r.addGeometry(new jt(.035,.035,.08,6),s,4.24,2.55,11.872),r.addGeometry(new jt(.345,.345,.07,16),t,0,3.33,11.914,Math.PI/2),r.addGeometry(new jt(.299,.299,.014,16),n,0,3.33,11.868,Math.PI/2);for(let h=0;h<12;h++){const d=h*Math.PI/6;c(l(Math.sin(d)*.245,3.33+Math.cos(d)*.245,11.856),l(Math.sin(d)*.274,3.33+Math.cos(d)*.274,11.856),.009,e,4)}c(l(0,3.33,11.841),l(-.125,3.43,11.841),.014,e,4),c(l(0,3.33,11.838),l(.18,3.405,11.838),.009,e,4);for(const h of[-2.5,-12.8])for(const d of[0,.23]){let g=l(-12.8,6.13,h+d);for(let v=1;v<=12;v++){const m=-12.8+v*25.6/12,p=v/12,T=6.13-Math.sin(p*Math.PI)*1.12,y=l(m,T,h+d);c(g,y,.025,e),g=y}for(const v of[-1,1])o(v*12.81,6.11,h+d,.23,.2,.11,t),r.addGeometry(new jt(.075,.075,.15,6),n,v*12.68,6.08,h+d,0,0,Math.PI/2)}for(const h of[-1,1])for(const d of[-3.4,-12.2,-16.6]){o(h*12.925,.87,d,.075,1.18,1.82,e);for(const g of[-.89,.89])o(h*12.875,.87,d+g,.035,1.13,.035,t);for(const g of[.33,1.4])o(h*12.875,g,d,.035,.03,1.8,t);for(const g of[-.65,.65])for(const v of[.43,1.3])o(h*12.846,v,d+g,.018,.045,.045,n);o(h*12.854,1.04,d+.6,.045,.26,.08,t),o(h*12.809,1.05,d+.6,.025,.18,.035,n),o(h*12.877,.84,d-.46,.14,.47,.36,t),o(h*12.798,.84,d-.46,.022,.37,.27,e),r.addGeometry(new jt(.095,.095,.02,12),n,h*12.778,.9,d-.46,0,0,Math.PI/2),o(h*12.758,.9,d-.46,.014,.09,.018,i),o(h*12.761,.695,d-.46,.014,.032,.15,s),c(l(h*12.846,.57,d-.46),l(h*12.846,.21,d-.46),.019,i);for(const g of[.26,.46])o(h*12.81,g,d-.46,.027,.03,.06,n)}o(-6.7,1.26,-34.5,1.94,.12,1.16,e),r.addGeometry(new jt(.24,.28,1.35,6),s,-6.63,1.49,-34.5,0,0,Math.PI/2),r.addGeometry(new Vs(.205,8,4),s,-7.38,1.49,-34.5);for(const h of[-7.1,-6.55,-6.1])o(h,1.704,-34.5,.035,.018,.43,i);for(const h of[-35.045,-33.955]){o(-6.7,1.65,h,1.91,.055,.045,n);for(const d of[-7.59,-5.81])o(d,1.49,h,.045,.35,.045,t)}r.sign("LAZARUS / SPECIMEN 091",-6.7,2.33,-32.565,2.45,.42,Math.PI,"#b7a57b","#253631"),o(-7.5,1.67,-42.58,1.05,.34,.92,t),o(-7.5,1.867,-42.58,1.11,.055,.97,e);for(const h of[-7.91,-7.09]){o(h,1.876,-42.58,.05,.03,.94,n);for(const d of[-42.95,-42.21])o(h,1.66,d,.09,.12,.04,s)}o(-7.5,1.66,-42.095,.3,.035,.028,n),o(-7.5,1.728,-42.083,.07,.07,.018,i),r.sign("BIOLOGICAL TRANSFER / DO NOT OPEN",-9.965,2.48,-43.9,2.23,.52,Math.PI/2,"#b7a57b","#253631"),o(.92,1.385,-39.61,.66,.045,.36,e);for(const h of[.6,1.24])o(h,1.415,-39.61,.025,.055,.36,n);for(const h of[-39.78,-39.44])o(.92,1.415,h,.66,.055,.025,n);for(let h=0;h<3;h++){const d=.75+h*.16;o(d,1.416,-39.62,.017,.018,.2,n,-.17+h*.12),o(d,1.426,-39.695,.038,.01,.055,t,-.17+h*.12)}r.addGeometry(new ks(.034,.008,3,8),n,1.105,1.423,-39.565,Math.PI/2),r.addGeometry(new ks(.034,.008,3,8),n,1.04,1.423,-39.565,Math.PI/2),c(l(1.045,1.423,-39.595),l(1.1,1.423,-39.726),.007,n,4),c(l(1.1,1.423,-39.595),l(1.045,1.423,-39.726),.007,n,4)}function C0(r,t){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=t>>16&255,s=t>>8&255,a=t&255,o=(f,h=0)=>`rgb(${Math.max(0,Math.min(255,Math.round(i*f+h)))},${Math.max(0,Math.min(255,Math.round(s*f+h)))},${Math.max(0,Math.min(255,Math.round(a*f+h)))})`,c=f=>{const h=Math.sin(f*127.13+t*.0017)*43758.5453;return h-Math.floor(h)},l=(f,h,d,g,v)=>{n.fillStyle=v,n.fillRect(f,h,d,g)};n.fillStyle=o(1),n.fillRect(0,0,64,64);for(let f=0;f<340;f++)l(Math.floor(c(f)*64),Math.floor(c(f+431)*64),1+f%2,1,o(.82+c(f+233)*.32));if(r==="raptor")if(t===10202996||t===12889715)for(let h=0;h<64;h+=7){l(0,h,64,2,o(.64)),l(0,h+2,64,1,o(1.16));for(let d=0;d<64;d+=16)l(d,h+3,1,4,o(.8))}else{for(let h=0;h<9;h++)for(let d=-1;d<9;d++){const g=d*8+h%2*4,v=h*7,m=.92+c(h*11+d+17)*.15;l(g+1,v,5,1,o(.63)),l(g,v+1,7,1,o(.75)),l(g+1,v+2,5,4,o(m)),l(g+2,v+2,3,1,o(1.19)),l(g+2,v+6,3,1,o(.73))}for(let h=4;h<64;h++){const d=11+Math.floor(Math.sin(h*.14)*3);l(d,h,h%9<6?4:2,1,o(.56));const g=43+Math.floor(Math.sin(h*.13+2)*4);h%15<11&&l(g,h,3,1,o(.65))}for(let h=0;h<24;h++)l(c(h+911)*64|0,c(h+721)*64|0,2,2,o(1.26));for(let h=0;h<3;h++)for(let d=0;d<9;d++)l(26+h*3+Math.floor(d*.33),32+d,1,1,o(1.34,8))}else if(r==="soldier")if(t===10587248)for(let f=0;f<50;f++)l(c(f+1001)*64|0,c(f+1071)*64|0,2,1,o(.88));else if(t===2108985){for(let f=1;f<64;f+=4)for(let h=f%8;h<64;h+=4)l(h,f,1,2,o(1.3));for(const f of[16,47])l(0,f,64,1,o(.55)),l(0,f+1,64,1,o(1.35))}else{l(3,3,58,1,o(1.48)),l(3,4,1,56,o(1.39)),l(3,59,58,2,o(.48)),l(60,4,2,56,o(.6)),l(13,12,39,1,o(.62)),l(13,13,1,27,o(.62)),l(14,40,38,1,o(1.23));for(const f of[7,55])for(const h of[7,55])l(f,h,3,3,o(.49)),l(f,h,1,1,o(1.8));for(let f=0;f<16;f++){const h=c(f+61)*59|0,d=c(f+93)*62|0;l(h,d,2+f%4,1,o(1.5)),l(h,d+1,1,1,o(.58))}for(let f=0;f<3;f++)l(19+f*7,23,4,2+f%2,o(1.65,10));l(38,33,8,5,o(.63)),l(39,34,5,1,o(1.45)),l(39,36,3,1,o(1.45));for(let f=0;f<6;f++)l(48,18+f*3,7,1,o(.48))}else if(t===8820318||t===10121060){for(let h=0;h<75;h++){const d=c(h+17)*64|0,g=c(h+223)*64|0,v=2+h%4,m=2+h%3;l(d,g,v,m,o(h%3===0?.72:1.17)),l(d+1,g+1,Math.max(1,v-2),1,o(h%3===0?.8:1.24))}for(let h=0;h<3;h++)for(let d=0;d<23;d++){const g=9+h*19+Math.floor(Math.sin(d*.18)*2);l(g,7+d,1,1,"#664a3c"),d%5===0&&(l(g-2,7+d,5,1,o(.59)),l(g-2,6+d,1,1,o(1.3)))}for(let h=0;h<12;h++)l(c(h+1101)*64|0,c(h+1131)*64|0,1,3,"#775944")}else{l(3,3,58,2,o(1.38)),l(3,5,2,54,o(1.18)),l(59,4,2,57,o(.54)),l(4,59,55,2,o(.5));for(let h=0;h<50;h++){const d=c(h+79)*64|0,g=c(h+91)*64|0;l(d,g,2+h%4,1+h%2,o(h%3===0?.52:1.24))}for(let h=8;h<57;h++){const d=23+Math.floor(Math.sin(h*.2)*4);l(d,h,1,1,o(.45)),h%7<3&&l(d+1,h,1,1,o(1.3))}for(const h of[7,54])for(const d of[7,54])l(h,d,3,3,o(.44)),l(h,d,1,1,o(1.65));if(r==="brute")for(let h=8;h<57;h+=8)l(h,44,4,6,"#b6a064"),l(h+4,44,3,6,"#352d2c");else for(let h=0;h<4;h++)l(41,15+h*4,12,2,o(.57))}const u=new ts(e);return u.magFilter=fe,u.minFilter=fe,u.wrapS=u.wrapT=Xi,u.generateMipmaps=!1,u.colorSpace=Ae,u}const Cr=Math.PI*2,re=r=>{const t=Math.sin(r*127.1+91.7)*43758.5453;return t-Math.floor(t)};function P0(r,t="#86ffb8",e="#101b20",n=256,i=64){const s=document.createElement("canvas");s.width=n,s.height=i;const a=s.getContext("2d");a.fillStyle=e,a.fillRect(0,0,n,i),a.fillStyle=t,a.fillRect(2,2,n-4,2),a.fillRect(2,i-4,n-4,2),a.fillRect(2,2,2,i-4),a.fillRect(n-4,2,2,i-4);const o=r.split("/").map(u=>u.trim());a.textAlign="center",a.textBaseline="middle";let c=o.length>1?19:22;c=Math.min(c,Math.floor((n-18)/(Math.max(...o.map(u=>u.length))*.61))),a.font=`bold ${Math.max(8,c)}px monospace`,o.forEach((u,f)=>a.fillText(u,n/2,i/2+(f-(o.length-1)/2)*(c+5)));const l=new ts(s);return l.magFilter=l.minFilter=fe,l.colorSpace=Ae,l.generateMipmaps=!1,l}function I0(){const r=document.createElement("canvas");r.width=64,r.height=80;const t=r.getContext("2d");t.fillStyle="#132126",t.fillRect(0,0,64,80),t.fillStyle="#2e594d";for(let n=0;n<80;n++)t.fillRect(re(n)*64|0,re(n+15)*80|0,2,4);t.fillStyle="#19252d",t.fillRect(16,39,36,32),t.fillStyle="#97654b",t.fillRect(24,20,20,27),t.fillStyle="#b78660",t.fillRect(26,21,15,21),t.fillStyle="#342731",t.fillRect(16,13,36,6),t.fillRect(21,7,23,9),t.fillStyle="#806454",t.fillRect(14,17,41,4),t.fillStyle="#131922",t.fillRect(27,28,17,3),t.fillRect(34,27,9,7),t.fillStyle="#81d9b5",t.fillRect(27,29,2,2),t.fillStyle="#382c2b",t.fillRect(29,39,10,3),t.fillStyle="#7f9e9a",t.fillRect(43,45,10,25),t.fillStyle="#313f47";for(let n=47;n<70;n+=5)t.fillRect(44,n,8,2);t.fillStyle="#fcba67",t.fillRect(47,48,2,2),t.fillStyle="#a0dabc",t.font="bold 6px monospace",t.textAlign="center",t.fillText("ELIAS VANE",32,76);const e=new ts(r);return e.magFilter=e.minFilter=fe,e.colorSpace=Ae,e}class L0{constructor(t){this.canvas=t,this.renderer=new b0({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Ae,this.renderer.toneMapping=ln,this.scene.background=new Bt(593690),this.scene.fog=new Ia(661536,13,68),this.camera.rotation.order="YXZ";const e=new xh(10077128,2112297,1.45);this.scene.add(e);const n=new Ro(11123670,1.05);n.position.set(-10,25,12),this.scene.add(n);const i=new Ro(7598010,.65);i.position.set(7,9,-25),this.scene.add(i);for(const a of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door"]){const o=new Sr({map:y0(a)});this.retroMaterial(o),this.mats.set(a,o)}this.buildLevel(),this.flush();for(const a of Ie.doors)this.buildDoor(a);for(const a of Ie.enemies){const o=this.buildMob(a.kind);o.root.position.set(a.x,0,a.z),this.enemyGroups.set(a.id,o),this.scene.add(o.root)}for(const a of Ie.pickups){const o=this.buildPickup(a.kind);o.position.set(a.x,.5,a.z),this.scene.add(o),this.pickupGroups.set(a.id,o)}const s=this.buildMob("raptor",!0);this.mountGroup=s.root,this.mountLegs=s.legs,this.mountGroup.scale.setScalar(1.55),this.mountGroup.position.set(Ie.mount.x,0,Ie.mount.z),this.mountGroup.rotation.y=-.7,this.scene.add(this.mountGroup),this.effectMat=new sn({color:16777215,transparent:!0,opacity:.9}),this.effectMesh=new Rl(new Ze(.08,.08,.08),this.effectMat,128),this.effectMesh.instanceMatrix.setUsage(Ml),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated",this.atmosphere=new w0(this.scene)}renderer;scene=new jc;camera=new We(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;lamps=[];hazmat=[];mountGroup;mountLegs=[];effectMesh;effectMat;dummy=new Me;snapGrid=new zt(160,100);clock=0;lastResolution="";powerLamp;lights=[];atmosphere;retroMaterial(t){t.onBeforeCompile=e=>{e.uniforms.retroGrid={value:this.snapGrid},e.vertexShader=`uniform vec2 retroGrid;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},t.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(t,e=0,n=!0){const i=`c${t}-${e}`;let s=this.mats.get(i);return s||(s=new Sr({color:t,emissive:e,flatShading:n}),this.retroMaterial(s),this.mats.set(i,s)),s}basic(t){const e=`b${t}`;let n=this.mats.get(e);return n||(n=new sn({color:t}),this.mats.set(e,n)),n}addGeometry(t,e,n,i,s,a=0,o=0,c=0){const l=new ae().compose(new B(n,i,s),new Xn().setFromEuler(new Ln(a,o,c)),new B(1,1,1));t.applyMatrix4(l),t.attributes.normal||t.computeVertexNormals();const u=this.batches.get(e)||[];u.push(t),this.batches.set(e,u)}box(t,e,n,i,s,a,o,c=0){const l=new Ze(i,s,a),u=l.attributes.position,f=l.attributes.normal,h=l.attributes.uv;for(let d=0;d<u.count;d++){const g=Math.abs(f.getX(d)),v=Math.abs(f.getY(d));h.setXY(d,g>.5?u.getZ(d)/2:u.getX(d)/2,v>.5?u.getZ(d)/2:u.getY(d)/2)}this.addGeometry(l,o,t,e,n,0,c)}flush(){for(const[t,e]of this.batches){const n=jo(e,!1);this.scene.add(new de(n,t));for(const i of e)i.dispose()}this.batches.clear()}sign(t,e,n,i,s=3,a=.8,o=0,c="#86ffb8",l="#101b20"){const u=P0(t,c,l),f=new sn({map:u,side:Xe});this.mats.set(`sign-${this.mats.size}`,f);const h=new de(new Je(s,a),f);return h.position.set(e,n,i),h.rotation.y=o,this.scene.add(h),h}lamp(t,e,n,i=8978368,s=!1){this.box(t,e,n,s?.08:1.2,s?1.9:.09,.1,this.mat(11791056,i));const a=new de(new Ze(s?.09:1.22,s?1.95:.1,.11),this.basic(i));a.position.set(t,e,n+.015),this.scene.add(a),this.lamps.push(a)}buildLevel(){const t=e=>this.mats.get(e);this.box(-.7,-.12,-20,35,.2,69,t("road")),this.box(0,-.005,8,10.5,.08,8.1,t("floor")),this.box(0,-.005,-26,14,.08,12.1,t("labfloor")),this.box(11.3,-.005,-28,8,.08,8,t("floor")),this.box(0,-.005,-39,20,.08,14,t("labfloor")),this.box(-7,-.005,-49,8,.08,6,t("metal")),this.box(-15.4,-.005,-7,4,.08,6,t("floor")),this.box(0,4.05,8,10.6,.12,8.3,t("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,t("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,t("ceiling")),this.box(0,4.5,-39,20.4,.12,14,t("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,t("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,t("ceiling"));for(const e of Ie.walls)this.box(e.x,(e.y??0)+e.h/2,e.z,e.w,e.h,e.d,t(e.material)),e.h>3&&e.d<1&&(this.box(e.x,.15,e.z+.03,e.w,.25,e.d+.04,this.mat(1517867)),this.box(e.x,3.08,e.z+.035,e.w,.1,e.d+.08,this.mat(4153687)));for(let e=-1;e<=1;e+=2)for(let n=0;n<5;n++){const i=1-n*5,s=8+re(n+e+10)*10,a=e*17;this.box(a,s/2,i,6,s,4.5,t("brick")),this.box(a,s+.2,i,6.4,.4,4.8,this.mat(1583412));for(let o=4.8;o<s-1;o+=2.3)for(let c=0;c<2;c++){const l=e*13.95;this.box(l,o,i-1+c*2,.1,1.2,.9,this.mat((n+c)%3===0?6720377:1781821,(n+c)%3===0?2640696:0)),this.box(l-e*.04,o-.64,i-1+c*2,.25,.12,1.15,this.mat(989474))}this.box(a+e*.4,s+.8,i,.4,1.2,1.7,t("metal")),this.box(a,s+2.5,i,.12,4,.12,this.mat(4479848))}for(let e=0;e<10;e++){const n=-35+e*8,i=15+re(e+30)*27,s=-63-re(e+41)*18;this.box(n,i/2,s,5,i,6,this.mat(1385265));for(let a=4;a<i;a+=4)this.box(n,a,s+3.04,3.5,.15,.08,this.basic(2576199))}for(const e of[-11.8,11.8])this.box(e,.045,-8,2.6,.15,24,t("concrete")),this.box(e+Math.sign(e)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const e of[-1,1])for(let n=0;n<5;n++){const i=1-n*4.4;this.box(e*12.94,2.65,i,.08,1.8,1.7,this.mat(1518642));for(let s=-1;s<=1;s++)this.box(e*12.88,2.65,i+s*.58,.07,1.8,.045,this.mat(5859164));this.box(e*12.85,1.72,i,.13,.15,1.9,t("metal")),n%2===0&&this.lamp(e*12.84,3.95,i,n===2?14371183:7791803,!1)}for(const e of[6,10,-22,-27,-30,-34,-38,-42,-49]){const n=e<-31&&e>-46;this.box(0,3.91,e,n?20:9,.18,.25,t("metal")),this.lamp(e<-46?-7:0,e>0?3.79:4.22,e,11595712),this.box(3,4.12,e,1.5,.08,.8,t("metal"));for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,e,.06,.035,.65,this.mat(1189162))}for(const e of Ie.hazards){const n=new sn({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${e.x}`,n);const i=new de(new Je(e.w,e.d),n);i.rotation.x=-Math.PI/2,i.position.set(e.x,.11,e.z),this.scene.add(i),this.hazmat.push(i),this.box(e.x,e.x<0?.14:.02,e.z,e.w+.2,.1,e.d+.2,this.mat(2112557));for(let s=0;s<8;s++)this.box(e.x+(re(s)-.5)*e.w,.13,e.z+(re(s+13)-.5)*e.d,.12,.05,.12,this.basic(9623415))}for(const e of Ie.props){const n=e.x,i=e.z,s=e.rotation??0;if(["neon","office-sign","facility-sign","sign"].includes(e.kind)){const a=e.kind==="neon",o=e.kind==="office-sign"?3.05:e.kind==="facility-sign"?4.15:a?4.9:3.6;this.sign(e.label??"",n,o,i,e.kind==="facility-sign"?9:a?4.8:5,e.kind==="facility-sign"?1.3:.85,s,a&&i<-3?"#ff7095":"#96ffc9")}else if(e.kind==="portrait"){const a=new sn({map:I0()});this.mats.set("portrait",a);const o=new de(new Je(.9,1.12),a);o.position.set(n,2.1,i),o.rotation.y=Math.PI,this.scene.add(o),this.box(n,2.1,i+.08,1.04,1.27,.06,this.mat(5987138))}else if(e.kind==="office-board"){this.box(n,2,i,.08,1.7,3.7,this.mat(5327932)),this.sign(e.label??"",n-.06,2.55,i,2.8,.38,s,"#cecfaa","#32392e");for(let a=0;a<7;a++)this.box(n-.07,1.8+re(a)*.5,i+(re(a+10)-.5)*2.8,.035,.42,.31,this.mat(a%2?12233109:8296837))}else if(["terminal","console"].includes(e.kind)){this.box(n,1.4,i,.85,.65,.12,this.mat(1322032)),this.box(n,1.4,i+.07,.65,.45,.02,this.basic(3840368));for(let a=0;a<4;a++)this.box(n-.2,1.53-a*.08,i+.085,.32-re(a)*.1,.025,.01,this.basic(10280873));this.box(n,1.02,i+.2,.9,.08,.5,this.mat(4872532))}else if(e.kind==="lamp")this.box(n,1.9,i,.13,3.8,.13,this.mat(4217429)),this.box(n,3.7,i-.35,.12,.12,.8,this.mat(4217429)),this.lamp(n,3.61,i-.68,11530187);else if(e.kind==="car"){this.box(n,1,i,1.8,.65,3.6,this.mat(4797250),s),this.box(n,1.62,i-.2,1.58,.8,1.8,this.mat(2701636),s),this.box(n,1.63,i+.76,1.4,.48,.08,this.mat(1585465),s);for(const a of[-.97,.97])for(const o of[-1.15,1.15])this.addGeometry(new jt(.39,.39,.24,8),this.mat(1187107),n+a,.46,i+o,0,0,Math.PI/2);this.box(n,.78,i+1.86,1.1,.16,.08,this.basic(7021366)),this.box(n+.5,1.5,i,.04,.02,1.5,this.mat(9737091),.3)}else if(e.kind==="barrels")for(let a=0;a<3;a++){const o=n+a%2*.68,c=i+Math.floor(a/2)*.7;this.addGeometry(new jt(.29,.3,1,8),this.mat(a===2?5918776:2576451),o,.5,c),this.addGeometry(new jt(.31,.31,.07,8),this.mat(1059883),o,.22,c),this.addGeometry(new jt(.31,.31,.07,8),this.mat(1059883),o,.78,c),this.box(o,.6,c+.3,.17,.19,.02,this.basic(14003533))}else if(e.kind==="rubble")for(let a=0;a<12;a++)this.box(n+(re(a)-.5)*2,.18+re(a+10)*.18,i+(re(a+20)-.5)*2,.3+re(a+30)*.6,.25+re(a+40)*.4,.25+re(a+50)*.6,t("concrete"),re(a+60)*Cr);else if(e.kind==="tank")this.addGeometry(new jt(.6,.65,.27,8),t("metal"),n,.14,i),this.addGeometry(new jt(.55,.55,2.5,8),this.mat(2384967,1063201),n,1.52,i),this.addGeometry(new jt(.65,.65,.28,8),t("metal"),n,2.91,i),this.box(n-.32,1.6,i+.45,.15,2.3,.15,this.basic(6671237)),this.box(n,1.8,i+.52,.28,.6,.16,this.mat(7580774)),this.box(n,1.4,i+.53,.53,.46,.12,this.mat(5929809)),this.box(n-.18,.8,i+.49,.12,.8,.15,this.mat(5929809)),this.box(n+.18,.8,i+.49,.12,.8,.15,this.mat(5929809));else if(e.kind==="pipe"){this.addGeometry(new jt(.15,.15,12,6),this.mat(4549473),n,3.3,i,Math.PI/2);for(let a=-2;a<=2;a++)this.addGeometry(new jt(.19,.19,.14,6),this.mat(1521208),n,3.3,i+a*2.4,Math.PI/2)}else if(e.kind==="lab-table"){this.box(n,1.27,i,3.9,.15,1.7,this.mat(5862506)),this.box(n,1.47,i,1.4,.26,.6,this.mat(6380610));for(let a=0;a<4;a++)this.box(n+(a-1.5)*.3,1.65,i,.16,.25,.18,this.mat(6653548))}else if(e.kind==="locker")this.box(n,1.25,i,.65,2.5,.85,t("metal")),this.box(n-.34,1.3,i,.025,.15,.17,this.basic(10471339));else if(e.kind==="power")this.box(n,1.15,i,.95,2.3,.45,t("metal")),this.sign("LIFT POWER",n,1.8,i+.24,1,.26),this.sign("E / ACTIVATE",n,1.48,i+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new de(new Ze(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(n,1.12,i+.25),this.scene.add(this.powerLamp),this.box(n,.7,i+.28,.18,.35,.1,this.mat(12235397));else if(e.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,i,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,i,1,.4,Math.PI/2);else if(e.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",n,2.4,-51.91,5,.9),this.box(n,.05,i,6,.16,4,t("metal"));for(let a=0;a<5;a++)this.box(n,.17,i-2+a,6,.03,.12,this.mat(11310909))}else if(e.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(e.label??"",10,3.3,i,4,.65,-Math.PI/2,"#ff6b56");else if(e.kind==="street-mark")for(let a=0;a<3;a++)this.box(n,.05,i+(a-1)*1.8,.18,.03,.9,this.mat(9213035));else if(e.kind==="drain"){this.box(n,.04,i,1.7,.08,.6,this.mat(661533));for(let a=0;a<12;a++)this.box(n-.8+a*.14,.095,i,.055,.02,.5,this.mat(5399644))}else if(e.kind==="corpse"||e.kind==="skeleton")this.box(n,.17,i,.45,.3,1.5,this.mat(e.kind==="corpse"?5058625:10658186),.55),this.box(n-.24,.16,i+.75,.35,.23,.34,this.mat(7763815)),this.box(n,.025,i+.15,1.7,.02,2,this.mat(5051943));else if(e.kind==="chair"){this.box(n,.55,i,.6,.12,.6,this.mat(3684161)),this.box(n,.97,i+.25,.6,.8,.09,this.mat(3749953));for(const a of[-.23,.23])for(const o of[-.23,.23])this.box(n+a,.28,i+o,.06,.5,.06,t("metal"))}else if(e.kind==="bottles")for(let a=0;a<3;a++)this.addGeometry(new jt(.06,.1,.3,5),this.mat(4288072),n+a*.18,1,i);else e.kind==="secret-table"&&(this.box(n,.75,i,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}this.buildEnvironmentDetails(),R0({box:this.box.bind(this),addGeometry:this.addGeometry.bind(this),mat:this.mat.bind(this),basic:this.basic.bind(this),sign:this.sign.bind(this),decal:this.decal.bind(this)});for(const e of[[0,2.6,7],[0,3,-26],[0,3,-39],[8,3,-8],[-9,3,-7]]){const n=new Mh(e[2]===-7?13579886:5560217,7,12,2);n.position.set(e[0],e[1],e[2]),this.lights.push(n),this.scene.add(n)}}decal(t,e,n,i,s,a,o=0,c=!1){const l=`decal-${t}`;let u=this.mats.get(l);u||(u=new sn({map:E0(t),alphaTest:.12,side:Xe,depthWrite:!c,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.mats.set(l,u)),this.addGeometry(new Je(s,a),u,e,n,i,c?-Math.PI/2:0,o)}buildEnvironmentDetails(){const t=l=>this.mats.get(l),e=this.mat(5005912),n=this.mat(1716275),i=this.mat(9279361),s=this.mat(7885891),a=this.mat(7496267),o=(l,u,f,h,d,g=0,v=0)=>this.addGeometry(new jt(h,h,d,8),e,l,u,f,g,0,v);this.box(-3.2,.88,8,2.3,.06,1.22,a),this.box(-3.2,.72,8.54,2,.16,.025,n);for(const l of[-3.7,-3.1,-2.5])this.box(l,.72,8.57,.49,.11,.035,a),this.box(l,.73,8.6,.16,.025,.03,i);this.box(-3.08,.98,8.26,.66,.055,.22,e);for(let l=0;l<3;l++)for(let u=0;u<10;u++)this.box(-3.34+u*.057,1.014,8.19+l*.052,.043,.018,.035,n);this.decal("paper",-2.46,.931,7.99,.43,.56,.15,!0),this.decal("paper",-3.96,.928,8.15,.36,.47,-.2,!0);for(let l=0;l<4;l++)this.box(-2.54,.96+l*.045,7.69,.38,.035,.32,this.mat(l%2?6315587:9273441),.12);this.box(-4.03,1.04,7.72,.29,.25,.22,n),this.box(-4.03,1.05,7.838,.23,.16,.012,e);for(let l=0;l<4;l++)this.box(-4.09+l*.04,1.06,7.85,.018,.09,.008,n);o(-4.13,1.26,7.69,.012,.32),this.box(-3.58,.95,8.35,.17,.05,.14,i),this.box(-3.59,.985,8.35,.1,.015,.08,n),o(-2.36,.953,7.72,.11,.04),o(-2.36,1.15,7.72,.025,.37),o(-2.53,1.39,7.72,.026,.4,0,Math.PI/2),this.addGeometry(new zs(.19,.17,8),n,-2.69,1.37,7.72),this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(11390112));for(const l of[1.9,2.55]){this.box(-4.91,l,10.4,.16,.06,2.1,a);for(let u=0;u<9;u++){const f=9.58+u*.19;this.box(-4.89,l+.17,f,.16,.28+re(u)*.09,.12,this.mat([7162948,5730661,8287574][u%3])),this.box(-4.8,l+.16,f,.012,.025,.1,i)}}this.box(-4.98,.95,8,.07,.04,7.6,n),this.box(4.99,3.6,8,.07,.06,7.6,e),this.sign("VESPER 2091 / MISSING: MARA",-2.48,2.67,11.97,2.35,.44,Math.PI,"#b7a57b","#2b3230"),this.decal("paper",1.9,.048,10,.43,.54,.6,!0),this.decal("paper",1.65,.047,10.32,.31,.42,-.2,!0);for(const l of[-1,1])for(let u=0;u<5;u++){const f=1-u*4.4,h=l*12.87;for(const g of[-.99,.99])this.box(h,2.65,f+g,.15,2.1,.14,e),this.box(h-l*.045,2.65,f+g,.06,1.9,.04,i);if(this.box(h,3.71,f,.22,.13,2.16,e),this.box(h,1.56,f,.29,.12,2.22,n),u%2===1){this.box(l*12.5,3.98,f,.95,.1,2.4,n);for(let g=0;g<6;g++)this.box(l*12.47,4.037,f-1.05+g*.4,.94,.015,.14,this.mat(l<0?8478553:5471595));this.box(l*12.04,3.82,f,.055,.28,2.42,e)}const d=f-1.65;this.box(l*12.84,4.77,d,.28,.63,.94,t("metal"));for(let g=0;g<6;g++)this.box(l*12.66,4.52+g*.09,d,.026,.035,.77,n);o(l*12.78,3.2,d,.043,2.3),this.box(l*12.72,2.01,d,.16,.19,.18,s),this.decal("leak",l*12.975,2.9,d+.1,1,1.7,-l*Math.PI/2),(u===0||u===3)&&this.decal("poster",l*12.97,1.68,f-1.68,.64,.95,-l*Math.PI/2);for(const g of[-1.8,1.8])this.box(l*12.8,5.65,f+g,.14,.4,.17,e)}this.decal("graffiti",12.97,1.12,-14.2,2.55,1.12,-Math.PI/2),this.decal("graffiti",-12.97,1.3,-.7,2.4,1.05,Math.PI/2);for(const l of[-1,1]){o(l*12.83,5.4,-8,.065,23,Math.PI/2);for(let u=2;u>-20;u-=4)this.box(l*12.75,5.4,u,.09,.24,.2,e),this.box(l*11.78,.13,u,2.25,.024,.025,n);for(let u=1;u>-20;u-=6){this.box(l*11.68,.143,u,.7,.02,.42,n);for(let f=0;f<7;f++)this.box(l*11.68-.3+f*.1,.16,u,.038,.018,.38,e)}}for(let l=0;l<16;l++){const u=2-l*1.35;this.box(.6,.038,u,.12,.012,.62,this.mat(9277799));for(let f=0;f<3;f++)this.box(.58+(re(l+f)-.5)*.13,.047,u+(re(l+f+20)-.5)*.65,.08,.004,.05,t("road"))}for(const[l,u,f,h]of[[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal("puddle",l,.049,u,f,h,0,!0);for(let l=0;l<8;l++){const u=-10.7+re(l+42)*21,f=-1-re(l+90)*18;this.decal("paper",u,.048,f,.23,.31,re(l)*Cr,!0)}this.box(-7,.85,-8.17,1.75,.14,.1,e);for(let l=0;l<10;l++)this.box(-7.6+l*.13,1.02,-8.11,.044,.13,.04,n);for(const l of[-7.59,-6.41])this.box(l,1.12,-8.12,.28,.19,.045,this.mat(10593678)),this.box(l,1.13,-8.09,.21,.07,.015,this.basic(7835254));this.box(-7,1.38,-8.22,1.53,.03,.1,s),this.box(-7.2,1.66,-9.2,.026,.45,.028,i,.6);for(const l of[-.97,.97])for(const u of[-1.15,1.15])this.addGeometry(new jt(.2,.2,.27,8),e,-7+l,.46,-10+u,0,0,Math.PI/2),this.addGeometry(new jt(.085,.085,.28,6),n,-7+l,.46,-10+u,0,0,Math.PI/2);for(const[l,u,f]of[[6.98,-21,-31],[9.98,-33,-45]])for(const h of[-1,1]){const d=h*l;this.box(d,3.9,(u+f)/2,.14,.21,u-f,e),o(d-h*.11,3.62,(u+f)/2,.055,u-f,Math.PI/2);for(let g=u;g>=f;g-=2.4){this.box(d,2,g,.065,3.65,.075,n);for(const v of[.4,1.5,2.6,3.6])this.box(d-h*.045,v,g,.035,.055,.055,i);this.box(d-h*.09,3.62,g,.06,.27,.22,e)}this.decal("circuit",d-h*.04,1.6,(u+f)/2,.53,.76,-h*Math.PI/2)}for(const l of[-3.5,3.5]){this.box(l,4.28,-39,.6,.18,12,t("metal"));for(let u=-33.3;u>-45;u-=.65)this.box(l,4.17,u,.47,.08,.07,n);this.box(l,4.03,-33.5,.82,.18,.19,e),this.box(l,4.03,-44.5,.82,.18,.19,e)}this.decal("poster",-6.975,2.05,-22.8,.73,1.02,Math.PI/2),this.sign("HELIX / SECTOR 04",6.98,2.55,-22.8,1.7,.42,-Math.PI/2,"#b3c4a1");let c=0;for(const l of Ie.props)if(l.kind==="tank"){const{x:u,z:f}=l;for(const h of[.32,2.7]){this.addGeometry(new jt(.63,.63,.12,8),e,u,h,f);for(let d=0;d<8;d++){const g=d*Cr/8;this.box(u+Math.sin(g)*.6,h,f+Math.cos(g)*.6,.075,.16,.075,i,g)}}for(const h of[-.45,.45])o(u+h,1.52,f-.36,.042,2.47);o(u,3.16,f,.1,.34),o(u,3.29,f-.5,.07,1,Math.PI/2),this.box(u+.43,1.6,f+.37,.31,.67,.18,n),this.decal("circuit",u+.43,1.6,f+.465,.24,.54),this.addGeometry(new jt(.105,.105,.035,12),i,u+.43,2.14,f+.42,Math.PI/2),this.box(u+.43,2.14,f+.446,.01,.11,.016,this.mat(12281932),.4),this.sign(`LZ-${String(++c).padStart(2,"0")} / CONTAINED`,u,.64,f+.655,.72,.18,0,"#b6cda2","#183b34")}for(const[l,u,f]of[[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){this.box(l-.6,f+.09,u+.22,.26,.14,.3,n),this.box(l-.6,f+.16,u+.22,.19,.015,.2,i),this.decal("paper",l+.57,f+.009,u,.31,.43,.2,!0);for(let h=0;h<4;h++)this.box(l-.65+h*.15,f+.013,u-.24,.08,.012,.02,s)}for(const l of[-1.38,1.38]){this.box(l,1.36,-40,.23,.055,1.43,i);for(const u of[-40.49,-39.52])this.box(l,1.41,u,.27,.05,.12,n)}this.box(-1.1,1.4,-40,.18,.2,.22,n),o(-1.09,1.65,-40,.045,.28),this.box(-1.17,1.79,-40,.18,.07,.14,i);for(let l=0;l<3;l++){const u=.8+l*.27;this.addGeometry(new jt(.06,.09,.29,6),this.mat(6523764),u,1.48,-40.4),this.box(u,1.64,-40.4,.07,.025,.07,e)}this.decal("paper",-1,1.36,-39.6,.35,.43,0,!0);for(const l of[-10.87,-3.12]){o(l,2.1,-49,.09,3.6);for(const u of[.7,3.45])o(l,u,-49,.14,.12);this.box(l,2.7,-51.88,.23,1.5,.12,e)}this.box(-7,4.25,-51.86,6,.12,.14,e),this.sign("AXIOM INDUSTRIES / FREIGHT 06",-7,1.35,-51.87,3.6,.36,0,"#8aa08e")}mesh(t,e,n,i,s,a){const o=new de(t,e);return o.position.set(n,i,s),a.add(o),o}localBox(t,e,n,i,s,a,o,c,l=0){return this.mesh(new Ze(s,a,o),this.mat(c,l),e,n,i,t)}buildDoor(t){const e=new ze;e.position.set(t.x,0,t.z),this.mesh(new Ze(t.w,3.2,t.d),this.mats.get("door"),0,1.6,0,e);const n=t.w>t.d;n?(this.localBox(e,0,1.58,t.d/2+.015,t.w*.85,.08,.035,7581064),this.localBox(e,t.w*.35,1.3,t.d/2+.03,.15,.25,.03,t.locked?15629110:7924400,2250034)):this.localBox(e,-t.w/2-.015,1.58,0,.035,.08,t.d*.85,7581064),this.scene.add(e),this.doorGroups.set(t.id,e);const i=n?t.x:t.x-.3,s=n?t.z+.33:t.z;this.sign(t.label,i,3.57,s,n?Math.min(t.w+1.4,5):2.4,.5,n?0:-Math.PI/2,t.locked?"#ffb05d":"#8ccdaa")}mergeMobParts(t){for(const n of[...t.children])n instanceof ze&&this.mergeMobParts(n);const e=new Map;for(const n of t.children)if(n instanceof de&&!Array.isArray(n.material)){const i=e.get(n.material)??[];i.push(n),e.set(n.material,i)}for(const[n,i]of e){if(i.length<2)continue;const s=i.map(o=>(o.updateMatrix(),o.geometry.clone().applyMatrix4(o.matrix))),a=jo(s,!1);if(a){for(const o of i)t.remove(o),o.geometry.dispose();t.add(new de(a,n))}for(const o of s)o.dispose()}}creatureMaterial(t,e,n){if(!{raptor:[6322507,10202996,9798226,12889715],soldier:[10587248,4809334,2108985,8426382],mutant:[8820318,5135683,7897973],brute:[10121060,8075325,7897973]}[t].includes(n))return this.mat(n);const s=`creature-${t}-${e?"saddle":"enemy"}-${n}`;let a=this.mats.get(s);if(!a){const o=new Sr({map:C0(t,n),flatShading:!0});this.retroMaterial(o),a=o,this.mats.set(s,a)}return a}buildMob(t,e=!1){const n=new ze,i=new ze,s=[],a=[],o=y=>this.creatureMaterial(t,e,y),c=(y,S,b,E,R,_,A,C,P=0)=>{const F=this.localBox(y,S,b,E,R,_,A,C,P);return P||(F.material=o(C)),F},l=(y,S,b,E,R,_,A,C)=>{const P=this.mesh(new Vs(1,6,4),o(C),S,b,E,y);return P.scale.set(R,_,A),P},u=(y,S,b,E,R,_,A=6)=>{const C=new B(...S),P=new B(...b),F=P.clone().sub(C),D=C.clone().add(P).multiplyScalar(.5),U=this.mesh(new jt(R,E,F.length(),A),o(_),D.x,D.y,D.z,y);return U.quaternion.setFromUnitVectors(new B(0,1,0),F.normalize()),U},f=(y,S,b,E,R,_,A=0)=>{const C=this.mesh(new zs(R*.26,R,4),o(_),S,b,E,y);return C.rotation.z=A,C};if(t==="raptor"){const y=e?9798226:6322507,S=e?12889715:10202996,b=e?5984827:3492664,E=13945248;l(n,0,.94,.15,.38,.33,.65,y),l(n,0,.86,-.17,.28,.24,.44,S),l(n,0,1.2,-.34,.26,.28,.3,y),u(n,[0,1.1,-.26],[0,1.47,-.6],.19,.14,y),i.position.set(0,1.47,-.6),n.add(i),l(i,0,.01,-.08,.18,.19,.29,y),u(i,[0,-.015,-.19],[0,-.025,-.86],.143,.075,y),l(i,0,-.26,-.52,.119,.054,.415,S),c(i,0,-.151,-.59,.2,.105,.64,b),c(i,0,-.201,-.59,.2,.025,.64,S);for(const _ of[-1,1])f(i,_*.065,-.153,-.907,.166,E,Math.PI);for(const _ of[-1,1]){const A=l(i,_*.144,.105,-.19,.067,.032,.12,b);A.rotation.z=_*.22;const C=c(i,_*.16,.062,-.249,.043,.039,.034,e?15784331:16736578,5904136);C.rotation.y=_*.25,c(i,_*.157,.062,-.271,.012,.034,.012,b),l(i,_*.045,.031,-.832,.021,.016,.028,b);for(let D=0;D<4;D++)f(i,_*(.122-D*.011),-.147,-.4-D*.115,.078+D%2*.012,E,Math.PI);const P=new ze;P.position.set(_*.28,.78,.23),n.add(P),s.push(P),l(P,0,-.02,.02,.19,.29,.29,y),u(P,[0,-.14,-.02],[0,-.4,.12],.115,.07,y),l(P,0,-.36,.1,.084,.085,.085,S),u(P,[0,-.39,.1],[0,-.65,-.08],.065,.04,S),l(P,0,-.69,-.18,.125,.05,.2,b);for(let D=-1;D<=1;D++)u(P,[D*.057,-.68,-.15],[D*.077,-.69,-.35],.025,.014,y,4),u(P,[D*.077,-.69,-.34],[D*.077,-.7,-.43],.027,.001,E,4);u(P,[_*.09,-.62,-.15],[_*.12,-.55,-.3],.045,.008,E,4);const F=new ze;F.position.set(_*.29,1.11,-.42),n.add(F),a.push(F),u(F,[0,0,0],[_*.065,-.17,-.12],.055,.04,y),u(F,[_*.065,-.17,-.12],[_*.02,-.22,-.31],.04,.027,S);for(let D=0;D<3;D++)u(F,[_*.02+(D-1)*.027,-.22,-.29],[_*.02+(D-1)*.035,-.27,-.4],.021,.001,E,4);for(let D=0;D<5;D++){const U=l(n,_*(.27+.035*Math.sin(D)),1.03-D*.035,-.31+D*.18,.055,.16,.065,b);U.rotation.z=_*.23;const z=l(n,_*.32,.88,-.2+D*.16,.032,.05,.07,S);z.rotation.z=_*.5}}const R=new ze;R.position.set(0,1.02,.6),n.add(R);for(let _=0;_<5;_++){const A=[Math.sin(_*.45)*.09,-_*.075,_*.31],C=[Math.sin((_+1)*.45)*.09,-(_+1)*.075,(_+1)*.31];u(R,A,C,.19-_*.034,Math.max(.005,.155-_*.034),y),_<4&&l(R,A[0],A[1]+.115-_*.02,A[2]+.15,.05,.095-_*.012,.07,b)}for(let _=0;_<7;_++){const A=f(n,0,1.24-_*.025,-.13+_*.14,.18-_*.007,b);A.rotation.x=.25}if(e){c(n,0,1.26,.05,.58,.14,.6,4274220),c(n,0,1.41,.25,.55,.27,.12,6574141);for(const _ of[-1,1])c(n,_*.33,1.05,.08,.065,.5,.59,4274220),c(n,_*.39,.83,.11,.17,.08,.26,E),u(n,[_*.16,1.45,-.63],[_*.32,1.37,-.18],.014,.014,4274220,4)}return this.mergeMobParts(n),{root:n,legs:s,arms:a,head:i,tail:R,kind:t,dead:!1}}const h=t==="brute",d=t==="soldier",g=d?10587248:h?10121060:8820318,v=d?4809334:h?8075325:5135683,m=d?2108985:h?3942703:3556401,p=d?10268063:13943713,T=d?8426382:7897973;if(l(n,0,1.15,.025,h?.54:.34,.46,h?.31:.235,g),l(n,0,.78,.025,h?.4:.28,.22,.24,m),u(n,[0,1.4,0],[0,1.68,0],.15,.115,g),i.position.set(0,1.72,-.025),n.add(i),l(i,0,0,0,.215,.215,.205,g),d){for(const y of[-1,1]){const S=l(n,y*.167,1.3,-.157,.19,.245,.12,v);S.rotation.z=-y*.1,c(n,y*.26,.83,-.19,.13,.19,.13,m),c(n,y*.26,.89,-.27,.11,.055,.027,T),c(n,y*.135,.88,-.23,.12,.24,.1,v)}c(n,0,1.3,-.278,.095,.24,.055,T);for(let y=0;y<3;y++)c(n,0,1.08-y*.075,-.232,.37,.055,.07,v);c(n,0,.74,-.01,.62,.1,.44,m),c(n,0,.75,-.254,.1,.08,.035,T),c(n,0,1.22,.24,.37,.48,.19,m),c(n,0,1.28,.35,.23,.25,.06,v),l(i,0,.063,.016,.247,.235,.25,v),c(i,0,.01,-.22,.34,.13,.047,m),c(i,0,.027,-.251,.3,.073,.017,6613456,1731421),c(i,.105,.027,-.269,.047,.055,.017,16747605,7744016),l(i,0,-.1,-.193,.16,.088,.1,m);for(const y of[-1,1])u(i,[y*.108,-.111,-.207],[y*.108,-.111,-.286],.051,.047,T),l(i,y*.244,.01,.015,.046,.103,.115,m);u(i,[.215,.18,.06],[.217,.39,.06],.011,.008,m,4),c(n,-.135,1.39,-.279,.06,.1,.013,14981973)}else{l(n,-.14,1.32,-.13,.29,.29,.18,g),l(n,.2,1.12,-.17,.16,.27,.14,v);for(let y=0;y<4;y++)for(const S of[-1,1]){const b=u(n,[S*.035,1.36-y*.085,-.255],[S*(.21-y*.013),1.33-y*.085,-.205],.025,.018,p,5);b.rotation.z+=S*.07}u(n,[0,1.41,-.27],[0,1.03,-.275],.031,.026,m),c(n,-.2,1.38,.25,.14,.38,.11,T);for(let y=0;y<4;y++)l(n,-.2,1.47-y*.09,.316,.039,.033,.024,m);l(i,-.035,-.105,-.105,.185,.125,.17,g),c(i,-.018,-.061,-.222,.255,.142,.036,m);for(let y=0;y<5;y++)f(i,-.118+y*.047,-.11,-.243,.055+y%2*.023,p,Math.PI);for(const y of[-1,1]){const S=l(i,y*.112,.069,-.165,.103,.064,.086,v);S.rotation.z=-y*.2,c(i,y*.105,.027,-.213,.058,.051,.027,16738374,7085837)}c(i,-.195,-.002,-.04,.054,.19,.18,T);for(let y=0;y<3;y++)c(i,-.225,.06-y*.055,-.13,.016,.025,.03,m)}for(const y of[-1,1]){const S=new ze;if(S.position.set(y*(h?.31:.19),.69,0),n.add(S),s.push(S),u(S,[0,-.025,0],[0,-.31,.025],h?.16:.115,h?.13:.09,d?m:g),l(S,0,-.3,-.025,h?.145:.11,.11,.13,v),u(S,[0,-.32,.025],[0,-.58,-.01],h?.105:.075,.066,d?m:g),d||h)l(S,0,-.46,-.075,.12,.19,.083,v),c(S,0,-.27,-.136,.17,.14,.059,T),c(S,0,-.6,-.087,.24,.15,.35,m),c(S,0,-.652,-.1,.25,.038,.36,T);else{l(S,0,-.61,-.095,.13,.069,.2,v);for(let E=0;E<3;E++)u(S,[(E-1)*.068,-.625,-.18],[(E-1)*.078,-.651,-.32],.028,.001,p,4)}const b=new ze;if(b.position.set(y*(h?.55:.36),1.46,0),n.add(b),a.push(b),l(b,0,-.045,0,h?.225:.155,h?.19:.15,.195,v),u(b,[0,-.095,0],[y*.016,-.33,.009],h?.15:.092,.083,g),l(b,y*.016,-.33,.009,.1,.105,.11,m),u(b,[y*.016,-.35,.009],[0,-.57,-.073],.09,h?.115:.069,d||y<0?T:g),l(b,0,-.58,-.09,h?.14:.089,.12,.115,g),d)c(b,0,-.455,-.13,.15,.19,.042,v),c(b,0,-.36,-.114,.115,.06,.025,T);else{if(y<0)for(let R=0;R<3;R++)c(b,0,-.405-R*.055,-.108,.17,.03,.055,m);for(let R=0;R<3;R++)u(b,[(R-1)*.056,-.62,-.135],[(R-1)*.063,-.76,-.19],.027,.001,p,4);const E=f(b,y*.12,.082,0,h?.29:.22,p,-y*.65);E.rotation.x=.2}}if(d){const y=a[1];c(y,-.13,-.52,-.285,.16,.18,.42,m),c(y,-.13,-.42,-.31,.12,.025,.31,T),u(y,[-.13,-.5,-.45],[-.13,-.5,-.73],.041,.035,T,6),u(y,[-.13,-.5,-.72],[-.13,-.5,-.81],.046,.046,m,6),c(y,-.13,-.652,-.36,.09,.18,.14,v),c(y,-.13,-.37,-.35,.06,.075,.14,m),c(y,-.13,-.367,-.428,.035,.027,.011,6613456,1731421)}if(h){n.scale.setScalar(1.47);for(const y of[-1,1]){const S=l(n,y*.265,1.29,-.235,.275,.285,.12,v);S.rotation.z=-y*.18,c(n,y*.32,1.25,-.352,.035,.28,.032,T),l(n,y*.42,1.54,.035,.21,.14,.25,v),u(n,[y*.39,1.65,.15],[y*.43,1.88,.22],.053,.006,p,4)}c(n,0,1.2,-.305,.31,.36,.12,m),u(n,[0,1.2,-.365],[0,1.2,-.413],.106,.106,T,8),u(n,[0,1.2,-.418],[0,1.2,-.434],.076,.076,7897973,8),c(n,0,1.2,-.45,.12,.12,.022,6683806,1539133);for(let y=0;y<3;y++)c(n,0,.99-y*.074,-.28,.5,.049,.073,v);u(n,[-.3,1.03,.225],[-.3,1.5,.225],.095,.095,m),u(n,[.3,1.03,.225],[.3,1.5,.225],.095,.095,m),l(i,0,.093,.035,.245,.16,.22,v),c(i,0,.062,-.205,.35,.055,.039,T),c(i,0,-.166,-.138,.37,.055,.22,T);for(let y=0;y<4;y++)c(i,-.135+y*.09,-.172,-.253,.031,.048,.018,m)}return this.mergeMobParts(n),{root:n,legs:s,arms:a,head:i,kind:t,dead:!1}}buildPickup(t){const e=new ze,i={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:9149585,plasma:6547611,machinegun:7767941}[t];if(t==="health")this.localBox(e,0,0,0,.55,.34,.3,12898751),this.localBox(e,0,0,.16,.3,.08,.015,12992833),this.localBox(e,0,0,.161,.08,.27,.015,12992833);else if(t==="armor"){this.localBox(e,0,0,0,.45,.42,.24,i),this.localBox(e,0,.26,0,.22,.13,.2,9684915);for(const a of[-1,1])this.localBox(e,a*.27,.1,0,.1,.3,.22,i)}else if(t==="ammo"){this.localBox(e,0,0,0,.5,.3,.35,5859659);for(let a=0;a<4;a++)this.localBox(e,-.17+a*.115,.19,0,.055,.15,.065,i)}else if(t==="keycard")this.localBox(e,0,0,0,.35,.23,.02,8961178),this.localBox(e,0,.04,-.015,.33,.04,.02,2178355),this.localBox(e,.08,-.06,-.016,.07,.055,.02,15060343);else if(t==="evidence"){this.localBox(e,0,0,0,.42,.02,.48,i);for(let a=0;a<5;a++)this.localBox(e,0,.016,-.15+a*.07,.24,.009,.018,4806471)}else this.localBox(e,0,0,0,t==="revolver"?.35:.7,.13,.2,i),this.localBox(e,.27,0,0,.4,.06,.07,6584431),this.localBox(e,-.11,-.15,0,.12,.22,.12,4209714),t==="plasma"&&this.localBox(e,0,.07,-.105,.37,.06,.035,7993010,1333048);const s=new de(new Da(.28,.36,12),new sn({color:i,transparent:!0,opacity:.6,side:Xe}));return s.rotation.x=-Math.PI/2,s.position.y=-.43,e.add(s),e}resize(t){const e=t.resolution==="320"?320:640,n=t.resolution==="320"?200:400;this.renderer.setSize(e,n,!1),this.snapGrid.set(e/2,n/2);const i=this.canvas.getBoundingClientRect();this.camera.aspect=i.width&&i.height?i.width/i.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=t.resolution;for(const s of this.lights)s.visible=t.quality==="high"}render(t,e,n){this.lastResolution!==n.resolution&&this.resize(n),this.clock+=e;const i=t.player,s=i.crouching?.9:i.mounted?2.6:1.65,a=t.status==="playing"?Math.sin(this.clock*(i.mounted?9:11))*(i.mounted?.025:.009):0;this.camera.position.set(i.x,i.y+s+a,i.z),this.camera.rotation.set(i.pitch+i.recoil*.012,i.yaw,0,"YXZ");for(const c of t.doors){const l=this.doorGroups.get(c.id);l&&(l.position.y=c.open*3.4)}for(const c of t.enemies){const l=this.enemyGroups.get(c.id);if(l.root.position.set(c.x,0,c.z),c.alive){l.root.rotation.y=Math.atan2(-(i.x-c.x),-(i.z-c.z)),l.root.rotation.z=0,l.root.position.y=0;const u=Math.sin(c.phase*6)*(c.alert?.72:.13);l.legs.forEach((f,h)=>f.rotation.x=u*(h%2?1:-1)),l.arms.forEach((f,h)=>{f.rotation.x=(l.kind==="soldier"?-.4:0)-u*(h%2?1:-1)*.5}),l.tail&&(l.tail.rotation.y=Math.sin(c.phase*3)*.18),l.head.rotation.z=c.hurt>0?Math.sin(this.clock*45)*.09:0,l.root.scale.y=(l.kind==="brute"?1.47:1)*(c.hurt>0?.94:1),l.dead=!1}else l.root.position.y=.1,l.root.rotation.z=Math.PI/2,l.root.rotation.x=.15,l.root.scale.y=l.kind==="brute"?1.47:1,l.dead=!0}for(const c of t.pickups){const l=this.pickupGroups.get(c.id);l.visible=!c.collected,l.visible&&(l.position.y=.48+Math.sin(this.clock*3+c.x)*.06,l.rotation.y=this.clock*.75)}this.mountGroup.visible=!i.mounted,this.mountGroup.position.set(t.mount.x,0,t.mount.z),this.mountLegs.forEach((c,l)=>c.rotation.x=Math.sin(this.clock*2+l*Math.PI)*.04),this.powerLamp&&this.powerLamp.material.color.setHex(t.powered?7602073:16737843);for(let c=0;c<this.lamps.length;c++)this.lamps[c].visible=Math.sin(this.clock*3+c*1.73)>0||c%4!==1||Math.sin(this.clock*31+c)>-.7;for(let c=0;c<this.hazmat.length;c++)this.hazmat[c].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+c),.19);let o=0;for(const c of t.effects){const l=c.kind==="blood"?12334150:c.kind==="plasma"?7274401:c.kind==="smoke"?6585208:16765568,u=1-c.life/c.maxLife;for(let f=0;f<(c.kind==="muzzle"?3:7)&&o<128;f++){const h=c.kind==="smoke"?.32:c.kind==="plasma"?.06:.22;this.dummy.position.set(c.x+(re(f+c.x)-.5)*u*h*5+(c.dx??0)*u*.4,c.y+(re(f+c.z)-.3)*u*h*3,c.z+(re(f+13)-.5)*u*h*5+(c.dz??0)*u*.4),this.dummy.scale.setScalar(c.kind==="smoke"?1+u*4:Math.max(.25,1-u)),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(o,this.dummy.matrix),this.effectMesh.setColorAt(o,new Bt(l)),o++}}this.effectMesh.count=o,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.atmosphere.update(t,this.camera,this.clock,n),this.renderer.render(this.scene,this.camera)}dispose(){this.atmosphere.dispose();const t=new Set;this.scene.traverse(e=>{e instanceof de&&t.add(e.geometry)});for(const e of t)e.dispose();for(const e of this.mats.values())e.map?.dispose(),e.dispose();this.effectMat.dispose(),this.renderer.dispose()}}const An={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026}},Pr=["revolver","shotgun","plasma","machinegun"],el={revolver:0,shotgun:0,plasma:0,machinegun:0},Ei={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},Ne=(r,t)=>Math.hypot(r.x-t.x,r.z-t.z),nn=(r,t,e)=>Math.max(t,Math.min(e,r));class Vl{constructor(t,e="normal"){this.level=t,this.resetState(e)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(t){const e=t==="easy"?.8:t==="hard"?1.18:1,n={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:"revolver",owned:[],ammo:{...el},reserve:{...el},reload:0,cooldown:0,recoil:0,hurt:0};this.state={player:n,enemies:this.level.enemies.map(i=>({...i,health:Math.round(Ei[i.kind].health*e),maxHealth:Math.round(Ei[i.kind].health*e),alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,path:[],pathTime:0})),doors:this.level.doors.map(i=>({...i,open:0,target:0})),pickups:this.level.pickups.map(i=>({...i,collected:!1})),effects:[],status:"playing",kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty:t},this.reloading=null,this.attackWindups.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}restart(t=!1){if(t&&!this.checkpointState){this.resetState(this.state.difficulty);const e=this.state,n=e.player;n.keycard=!0,n.owned=["revolver","shotgun","machinegun"],n.weapon="machinegun",n.health=100,n.armor=55;for(const i of n.owned)n.ammo[i]=An[i].clip,n.reserve[i]=An[i].clip*4;for(const i of e.pickups)i.z>-32.2&&i.kind!=="evidence"&&i.x>-13&&(i.collected=!0);for(const i of e.enemies)i.z>-32.2&&(i.alive=!1,i.health=0,e.kills++);for(const i of e.doors)["office","facility","security"].includes(i.id)&&(i.open=1,i.target=1);e.checkpoint=!0,this.checkpointState=structuredClone(e),this.checkpointSecrets=[]}if(t&&this.checkpointState){this.state=structuredClone(this.checkpointState);const e=this.state.player;e.x=this.level.checkpoint.x,e.z=this.level.checkpoint.z,e.y=0,e.vy=0,e.grounded=!0,e.mounted=!1,e.health=Math.max(e.health,75),e.armor=Math.max(e.armor,25),e.cooldown=0,e.reload=0,e.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const n of this.state.enemies)n.path=[],n.pathTime=0,n.cooldown=1.1;this.message("CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.",4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(t,e){t=nn(t,0,.075);const n=this.state,i=n.player;if(n.status!=="playing")return;if(n.time+=t,n.messageTime=Math.max(0,n.messageTime-t),i.yaw+=e.lookX,i.pitch=nn(i.pitch+e.lookY,-1.22,1.22),i.cooldown=Math.max(0,i.cooldown-t),i.recoil=Math.max(0,i.recoil-t*4.6),i.hurt=Math.max(0,i.hurt-t*2),this.emptyClick=Math.max(0,this.emptyClick-t),i.reload>0&&(i.reload=Math.max(0,i.reload-t),i.reload===0&&this.reloading)){const a=this.reloading,o=Math.min(An[a].clip-i.ammo[a],i.reserve[a]);i.ammo[a]+=o,i.reserve[a]-=o,this.reloading=null}(e.weaponDelta||e.weaponSlot)&&this.switchWeapon(e.weaponDelta,e.weaponSlot||void 0),e.reload&&this.reload(),e.interact&&this.interact(),this.updateDoors(t),this.movePlayer(t,e),this.collectPickups(),e.fire&&this.fire();const s=e.slow&&n.slow>.015;n.slow=nn(n.slow+(s?-.17:.085)*t,0,1),this.updateEnemies(t*(s?.32:1)),this.updateHazards(t);for(const a of n.effects)a.life-=t;n.effects=n.effects.filter(a=>a.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const t=this.state.player;return t.y+(t.mounted?2.6:t.crouching?.9:1.65)}canOccupy(t,e,n=.32,i=this.state.player.y){return this.state.player.mounted&&(e<-19.1||e>3.2)?!1:this.clearAt(t,e,n,i,this.height())}clearAt(t,e,n,i=0,s=1.8){const a=this.level.bounds;if(t-n<a.minX||t+n>a.maxX||e-n<a.minZ||e+n>a.maxZ)return!1;for(const o of this.level.walls){const c=o.y??0;if(!(i>=c+o.h-.025||i+s<=c+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1}for(const o of this.state.doors)if(!(i+s<=o.open*3.4+.025)&&this.circleBox(t,e,n,o.x,o.z,o.w,o.d))return!1;return!0}circleBox(t,e,n,i,s,a,o){const c=nn(t,i-a/2,i+a/2),l=nn(e,s-o/2,s+o/2);return(t-c)**2+(e-l)**2<n*n}movePlayer(t,e){const n=this.state.player;e.crouch&&!n.mounted?n.crouching=!0:n.crouching&&(n.crouching=!1,this.canOccupy(n.x,n.z)||(n.crouching=!0));const i=nn(e.forward,-1,1),s=nn(e.strafe,-1,1),a=Math.max(1,Math.hypot(i,s)),o=n.mounted?8:n.crouching?2.3:e.sprint?6.4:4.4,c=(-Math.sin(n.yaw)*i+Math.cos(n.yaw)*s)*o*t/a,l=(-Math.cos(n.yaw)*i-Math.sin(n.yaw)*s)*o*t/a;n.mounted&&(n.z+l<-19.1||n.z+l>3.2)&&this.message("Your strider stays in the street. Press E to dismount and enter the building.",2);const u=Math.max(1,Math.ceil(Math.hypot(c,l)/.14)),f=n.mounted?.53:.32;for(let g=0;g<u;g++)this.canOccupy(n.x+c/u,n.z,f)&&(n.x+=c/u),this.canOccupy(n.x,n.z+l/u,f)&&(n.z+=l/u);e.jump&&!this.jumpHeld&&n.grounded&&!n.crouching&&(n.vy=n.mounted?6.4:6.1,n.grounded=!1),this.jumpHeld=e.jump,n.vy-=14*t;const h=n.y+n.vy*t;let d=0;if(n.vy<=0)for(const g of this.level.walls){const v=(g.y??0)+g.h;v<=n.y+.035&&v>=h&&this.circleBox(n.x,n.z,f,g.x,g.z,g.w,g.d)&&(d=Math.max(d,v))}n.vy<=0&&h<=d?(n.y=d,n.vy=0,n.grounded=!0):this.canOccupy(n.x,n.z,f,h)?(n.y=h,n.grounded=!1):n.vy>0&&(n.vy=0),n.mounted&&(this.state.mount.x=n.x,this.state.mount.z=n.z)}switchWeapon(t,e){const n=this.state.player;if(!n.owned.length)return;let i;if(e){if(i=Pr[nn(Math.round(e)-1,0,3)],!n.owned.includes(i)){this.message("Weapon not acquired yet.",1.5);return}}else{const s=Pr.filter(o=>n.owned.includes(o)),a=s.indexOf(n.weapon);i=s[(a+(t>0?1:-1)+s.length)%s.length]}i!==n.weapon&&(n.weapon=i,n.reload=0,n.cooldown=.22,n.recoil=.22,this.reloading=null,this.message(An[i].name,1.2))}reload(){const t=this.state.player,e=t.weapon,n=An[e];if(!(!t.owned.includes(e)||t.reload>0||t.ammo[e]>=n.clip)){if(t.reserve[e]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=e,t.reload=n.reload,this.state.events.push({type:"reload",weapon:e})}}fire(){const t=this.state.player;if(this.state.status!=="playing"||t.cooldown>0||t.reload>0)return;if(t.mounted){this.bite();return}if(!t.owned.includes(t.weapon)){this.message("Find your revolver in the office.",2);return}const e=An[t.weapon];if(t.ammo[t.weapon]<=0){t.reserve[t.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}t.ammo[t.weapon]--,t.cooldown=e.interval,t.recoil=1,this.state.events.push({type:"shot",weapon:t.weapon}),this.effect("muzzle",t.x-Math.sin(t.yaw)*.5,t.z-Math.cos(t.yaw)*.5,this.eyeHeight()-.18,.07);for(let n=0;n<e.pellets;n++){const i=t.yaw+(this.random()-.5)*e.spread*2,s=t.pitch+(this.random()-.5)*e.spread*1.5,a=-Math.sin(i)*Math.cos(s),o=-Math.cos(i)*Math.cos(s),c=Math.sin(s),l=this.eyeHeight();let u=this.rayWalls(t.x,l,t.z,a,c,o,e.range),f=null;for(const v of this.state.enemies){if(!v.alive)continue;const m=Ei[v.kind],p=this.rayEnemy(v,t.x,l,t.z,a,c,o,m.radius,m.height);p!==null&&p>=0&&p<u&&(u=p,f=v)}const h=t.x+a*u,d=t.z+o*u,g=l+c*u;if(f){const v=t.weapon==="shotgun"?Math.max(.35,1-u/42):1;this.damageEnemy(f,e.damage*v),this.effect("blood",h,d,g,.24)}else u<e.range&&this.effect("spark",h,d,g,.15);if(t.weapon==="plasma"){const v=Math.min(12,Math.ceil(u/1.5));for(let m=1;m<=v;m++){const p=u*m/v;this.effect("plasma",t.x+a*p,t.z+o*p,l+c*p,.14)}}}}bite(){const t=this.state.player;t.cooldown=.58,t.recoil=.7;let e=!1;for(const n of this.state.enemies){if(!n.alive||Ne(n,t)>3)continue;const i=n.x-t.x,s=n.z-t.z,a=Math.hypot(i,s);(-Math.sin(t.yaw)*i-Math.cos(t.yaw)*s)/Math.max(a,.1)>.35&&this.visible(t,n)&&(this.damageEnemy(n,95),this.effect("blood",n.x,n.z,1.1,.3),e=!0)}this.state.events.push({type:"enemy",message:e?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(t,e,n,i,s,a,o,c,l){const u=e-t.x,f=i-t.z,h=s*s+o*o,d=2*(u*s+f*o),g=u*u+f*f-c*c,v=d*d-4*h*g;if(v<0||h<1e-7)return null;const m=(-d-Math.sqrt(v))/(2*h),p=(-d+Math.sqrt(v))/(2*h);if(p<0)return null;let T=Math.max(0,m),y=p;if(Math.abs(a)<1e-8){if(n<0||n>l)return null}else{let S=-n/a,b=(l-n)/a;S>b&&([S,b]=[b,S]),T=Math.max(T,S),y=Math.min(y,b)}return T<=y?T:null}rayWalls(t,e,n,i,s,a,o){let c=o;for(const l of this.level.walls){const u=this.rayBox(t,e,n,i,s,a,l.x-l.w/2,l.x+l.w/2,l.y??0,(l.y??0)+l.h,l.z-l.d/2,l.z+l.d/2);u!==null&&u<c&&(c=u)}for(const l of this.state.doors){if(l.open>=.995)continue;const u=this.rayBox(t,e,n,i,s,a,l.x-l.w/2,l.x+l.w/2,l.open*3.4,3.4+l.open*3.4,l.z-l.d/2,l.z+l.d/2);u!==null&&u<c&&(c=u)}return c}rayBox(t,e,n,i,s,a,o,c,l,u,f,h){let d=0,g=1/0;const v=[t,e,n],m=[i,s,a],p=[o,l,f],T=[c,u,h];for(let y=0;y<3;y++){if(Math.abs(m[y])<1e-8){if(v[y]<p[y]||v[y]>T[y])return null;continue}let S=(p[y]-v[y])/m[y],b=(T[y]-v[y])/m[y];if(S>b&&([S,b]=[b,S]),d=Math.max(d,S),g=Math.min(g,b),d>g)return null}return g<0?null:d}visible(t,e,n=1.2){const i=Ne(t,e);return i<.001?!0:this.rayWalls(t.x,n,t.z,(e.x-t.x)/i,0,(e.z-t.z)/i,i)>=i-.1}enemySees(t){const e=this.state.player,n=Ei[t.kind].height*.74,i=this.eyeHeight(),s=e.x-t.x,a=i-n,o=e.z-t.z,c=Math.hypot(s,a,o);return c<.001?!0:this.rayWalls(t.x,n,t.z,s/c,a/c,o/c,c)>=c-.1}damageEnemy(t,e){if(t.health-=e,t.hurt=1,t.alert=!0,t.health>0)return;t.health=0,t.alive=!1,t.path=[],this.attackWindups.delete(t.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",t.x,t.z,.7,.5);const n=this.state.player;n.reserve.revolver+=2,n.reserve.plasma+=2,n.reserve.machinegun+=3,t.kind==="brute"&&this.message("Containment beast neutralized. Restore the elevator power.",3)}updateDoors(t){for(const e of this.state.doors){const n=Math.sign(e.target-e.open);if(n!==0){if(n<0&&Ne(e,this.state.player)<1.4){e.target=1;continue}e.open=nn(e.open+n*t*1.3,0,1)}}}interact(){const t=this.state,e=t.player;if(t.status!=="playing")return;if(e.mounted){const s=[{x:e.x+Math.cos(e.yaw)*1.1,z:e.z-Math.sin(e.yaw)*1.1},{x:e.x-Math.cos(e.yaw)*1.1,z:e.z+Math.sin(e.yaw)*1.1},{x:e.x,z:e.z+1.2}].find(a=>this.clearAt(a.x,a.z,.32,0,1.8));if(!s){this.message("No room to dismount. Move into the street.",2);return}e.mounted=!1,e.x=s.x,e.z=s.z,e.y=0,e.vy=0,t.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(Ne(e,this.level.switch)<2.5){t.powered?this.message("Power online. The industrial lift is ready.",2):(t.powered=!0,t.events.push({type:"door"}),this.message("ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.",4));return}if(Ne(e,t.mount)<2.6&&e.z>-19){e.mounted=!0,e.crouching=!1,t.mount.x=e.x,t.mount.z=e.z,t.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.",4);return}const n=t.doors.filter(i=>Ne(e,i)<2.9).sort((i,s)=>Ne(i,e)-Ne(s,e));if(n.length){const i=n[0];if(e.mounted&&i.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(i.locked&&!e.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(i.id==="elevator"){if(!t.powered){this.message("LIFT OFFLINE — restore power at the laboratory switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return}}i.target=i.target>.5?0:1,t.events.push({type:"door"}),i.secret&&!this.secretDoors.has(i.id)?(this.secretDoors.add(i.id),t.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${i.label}: ${i.target?"opening":"closing"}.`,1.6);return}if(Ne(e,this.level.exit)<3){this.checkExit(),t.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(e.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard.",2)}collectPickups(){const t=this.state,e=t.player;for(const n of t.pickups)if(!(n.collected||Ne(n,e)>1.1||e.y>1.5||!this.visible(e,n,.45))&&!(n.kind==="health"&&e.health>=100||n.kind==="armor"&&e.armor>=100))if(n.collected=!0,t.events.push({type:"pickup"}),Pr.includes(n.kind)){const i=n.kind,s=!e.owned.includes(i);s&&e.owned.push(i),e.ammo[i]=An[i].clip,e.reserve[i]+=An[i].clip*(i==="revolver"?8:3),s&&(e.weapon=i,e.reload=0,this.reloading=null,e.cooldown=.15,e.recoil=.2),this.message(`${An[i].name.toUpperCase()} ACQUIRED — ${e.ammo[i]} loaded.`,2.5)}else n.kind==="health"?(e.health=Math.min(100,e.health+38),this.message("MEDKIT +38 HEALTH",1.6)):n.kind==="armor"?(e.armor=Math.min(100,e.armor+55),this.message("BODY ARMOR +55",1.6)):n.kind==="ammo"?(e.reserve.revolver+=24,e.reserve.shotgun+=16,e.reserve.plasma+=45,e.reserve.machinegun+=80,this.message("AMMUNITION CACHE — supplies replenished.",2)):n.kind==="evidence"?(e.evidence++,this.message("EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(e.keycard=!0,t.checkpoint=!0,this.message("SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.",4),t.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(t),this.checkpointState.events=[],this.checkpointSecrets=[...this.secretDoors])}finalThreats(){return this.state.enemies.filter(t=>t.alive&&(this.level.enemies.find(e=>e.id===t.id)?.z??t.z)<-32).length}checkExit(){const t=this.state;Ne(t.player,this.level.exit)>1.5||t.status!=="playing"||!t.powered||this.finalThreats()>0||(t.status="complete",t.events.push({type:"complete"}),t.player.reload=0,this.message("NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(t){const e=this.state.player,n=this.state.difficulty,i=n==="easy"?13:17;for(const s of this.state.enemies){if(!s.alive)continue;const a=Ei[s.kind],o=Ne(s,e);if(s.hurt=Math.max(0,s.hurt-t*3.3),s.cooldown=Math.max(0,s.cooldown-t),s.pathTime-=t,!s.alert&&o<i&&this.enemySees(s)&&(s.alert=!0),!s.alert){s.phase+=t*.6;continue}const c=this.attackWindups.get(s.id);if(c!==void 0){const v=c-t;if(v<=0){if(this.attackWindups.delete(s.id),this.enemySees(s)&&o<a.range+(s.kind==="soldier"?2:.55))if(s.kind==="soldier"){this.effect("muzzle",s.x,s.z,1.4,.12);const m=n==="easy"?.55:n==="hard"?.88:.72;this.random()<m&&this.hurtPlayer(a.damage),this.effect("spark",e.x,e.z,Math.min(1.65,this.eyeHeight()),.1)}else this.hurtPlayer(a.damage),this.effect("blood",e.x,e.z,.65,.17);s.cooldown=a.interval*(n==="hard"?.8:n==="easy"?1.2:1)}else this.attackWindups.set(s.id,v);continue}const l=this.enemySees(s);if(o<a.range&&l&&s.cooldown<=0){this.attackWindups.set(s.id,s.kind==="soldier"?.42:.32),this.state.events.push({type:"enemy",message:s.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),s.kind==="soldier"&&this.effect("plasma",s.x,s.z,1.65,.4);continue}if(s.kind==="soldier"&&l&&o<9)continue;let u=e;if(!l||!this.clearAt(s.x+(e.x-s.x)/Math.max(o,.01)*.7,s.z+(e.z-s.z)/Math.max(o,.01)*.7,a.radius,0,a.height))if(s.pathTime<=0&&(s.path=this.findPath(s,e,a.radius,Math.min(a.height,1.8)),s.pathTime=.8+this.random()*.25),s.path.length){for(;s.path.length&&Ne(s,s.path[0])<.4;)s.path.shift();s.path.length&&(u=s.path[0])}else continue;const f=Ne(s,u);if(f<.01)continue;const h=a.speed*(n==="easy"?.88:n==="hard"?1.12:1)*(s.hurt>0?.42:1);let d=(u.x-s.x)/f*h*t,g=(u.z-s.z)/f*h*t;for(const v of this.state.enemies){if(v===s||!v.alive)continue;const m=Ne(s,v),p=a.radius+Ei[v.kind].radius;m>.01&&m<p&&(d+=(s.x-v.x)/m*(p-m)*t*2,g+=(s.z-v.z)/m*(p-m)*t*2)}o<Math.max(.65,a.radius+.35)||(this.clearAt(s.x+d,s.z,a.radius,0,a.height)&&(s.x+=d),this.clearAt(s.x,s.z+g,a.radius,0,a.height)&&(s.z+=g),s.phase+=t*h*3)}}findPath(t,e,n,i){const s=this.level.bounds,a=.9,o=Math.ceil((s.maxX-s.minX)/a),c=Math.ceil((s.maxZ-s.minZ)/a),l=P=>({x:nn(Math.floor((P.x-s.minX)/a),0,o-1),z:nn(Math.floor((P.z-s.minZ)/a),0,c-1)}),u=l(t),f=l(e),h=(P,F)=>F*o+P,d=P=>({x:s.minX+(P%o+.5)*a,z:s.minZ+(Math.floor(P/o)+.5)*a}),g=h(u.x,u.z),v=h(f.x,f.z),m=[g],p=new Map,T=new Map([[g,0]]),y=new Set,S=P=>Math.abs(P%o-f.x)+Math.abs(Math.floor(P/o)-f.z);let b=-1,E=g,R=S(g),_=0;for(;m.length&&_++<1900;){let P=0,F=1/0;for(let V=0;V<m.length;V++){const nt=(T.get(m[V])??1/0)+S(m[V]);nt<F&&(F=nt,P=V)}const D=m.splice(P,1)[0];if(y.has(D))continue;y.add(D);const U=S(D);if(U<R&&(R=U,E=D),D===v){b=D;break}const z=D%o,$=Math.floor(D/o);for(const[V,nt]of[[1,0],[-1,0],[0,1],[0,-1]]){const X=z+V,Q=$+nt;if(X<0||X>=o||Q<0||Q>=c)continue;const j=h(X,Q);if(y.has(j))continue;const Tt=d(j);if(j!==v&&!this.clearAt(Tt.x,Tt.z,n,0,i))continue;const St=(T.get(D)??0)+1;St>=(T.get(j)??1/0)||(T.set(j,St),p.set(j,D),m.includes(j)||m.push(j))}}if(b===-1){if(E===g)return[];b=E}const A=[];let C=b;for(;C!==g&&p.has(C);)A.push(d(C)),C=p.get(C);return A.reverse()}hurtPlayer(t){const e=this.state,n=e.player;if(e.status!=="playing")return;t*=e.difficulty==="easy"?.65:e.difficulty==="hard"?1.22:1,n.mounted&&(t*=.65);const i=Math.min(n.armor,t*.65);n.armor-=i,n.health=Math.max(0,n.health-(t-i)),n.hurt=1,e.events.push({type:"hurt"}),n.health<=0&&(e.status="dead",n.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(t){const e=this.state.player;e.y<.45&&this.level.hazards.some(i=>Math.abs(e.x-i.x)<i.w/2&&Math.abs(e.z-i.z)<i.d/2)?(this.hazardTime+=t,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(t,e,n,i,s){this.state.effects.push({kind:t,x:e,z:n,y:i,life:s,maxLife:s})}message(t,e){this.state.message===t&&this.state.messageTime>.1||(this.state.message=t,this.state.messageTime=e,this.state.events.push({type:"message",message:t}))}}const D0={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class U0{constructor(t,e){this.canvas=t,this.onPause=e,document.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(n.code)){n.preventDefault(),n.stopImmediatePropagation(),n.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.repeat||(n.code==="Space"&&(this.pending.jump=!0),n.code==="KeyE"&&(this.pending.interact=!0),n.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-4]$/.test(n.code)&&(this.pending.weaponSlot=Number(n.code.slice(-1))))}}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=n.movementX,this.mouseY+=n.movementY)}),this.canvas.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType==="touch"||n.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===this.canvas,i=this.wasLocked&&!n;this.wasLocked=n,n||(this.clear(),i&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.enabled&&(n.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(n.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const t=(...n)=>n.some(i=>this.keys.has(i)),e=this.enabled?{forward:Math.max(-1,Math.min(1,Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(t("KeyD"))-Number(t("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(t("ArrowLeft"))-Number(t("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:t("ShiftLeft","ShiftRight")||this.touchSprint,crouch:t("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:t("KeyQ")}:{...D0};return this.mouseX=0,this.mouseY=0,this.pending={},e}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const t=document.querySelector("#touch-controls");if(!t)return;t.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const e=t.querySelector(".touch-stick");this.stick=e.querySelector("i"),e.addEventListener("pointerdown",a=>{!this.enabled||this.stickPointer>=0||(a.preventDefault(),this.stickPointer=a.pointerId,this.stickOrigin={x:a.clientX,y:a.clientY},e.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{if(!this.enabled||a.pointerId!==this.stickPointer)return;const o=a.clientX-this.stickOrigin.x,c=a.clientY-this.stickOrigin.y,l=Math.hypot(o,c),u=38,f=l>u?u/l:1;this.touchMove={x:o*f/u,y:c*f/u},this.stick&&(this.stick.style.transform=`translate(${o*f}px,${c*f}px)`)});const n=a=>{a.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n);const i=t.querySelector(".touch-look");i.addEventListener("pointerdown",a=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY},i.setPointerCapture(a.pointerId))}),i.addEventListener("pointermove",a=>{!this.enabled||a.pointerId!==this.lookPointer||(this.mouseX+=(a.clientX-this.lastLook.x)*1.6,this.mouseY+=(a.clientY-this.lastLook.y)*1.6,this.lastLook={x:a.clientX,y:a.clientY})});const s=a=>{a.pointerId===this.lookPointer&&(this.lookPointer=-1)};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),t.querySelectorAll("button").forEach(a=>{a.addEventListener("pointerdown",c=>{if(this.enabled)switch(c.preventDefault(),a.setPointerCapture(c.pointerId),a.classList.add("held"),a.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const o=()=>{a.classList.remove("held"),a.dataset.action==="fire"&&(this.touchFire=!1),a.dataset.action==="sprint"&&(this.touchSprint=!1)};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)})}}const nl="fossil-noir-3d-settings",ws={sensitivity:1,resolution:"640",quality:"high",volume:.5,difficulty:"normal"},N0={revolver:"DETECTIVE REVOLVER",shotgun:"TACTICAL SHOTGUN",plasma:"PLASMA RIFLE",machinegun:"HEAVY MACHINE GUN"};class F0{constructor(t){this.callbacks=t,this.settings=this.loadSettings(),this.overlay.addEventListener("click",n=>{const i=n.target.closest("button[data-action]");if(!(!i||i.disabled))switch(i.dataset.action){case"start":t.start(!1);break;case"continue":t.start(!0);break;case"resume":t.resume();break;case"retry":t.restart(!1);break;case"checkpoint":t.restart(!0);break;case"menu":t.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",n=>{const i=n.target;if(!i.dataset.setting)return;const s=i.dataset.setting,a=["sensitivity","volume"].includes(s)?Number(i.value):i.value;this.settings=this.validateSettings({...this.settings,[s]:a});try{localStorage.setItem(nl,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings}),s==="sensitivity"&&(this.overlay.querySelector("#sensitivity-value").textContent=`${this.settings.sensitivity.toFixed(1)}×`),s==="volume"&&(this.overlay.querySelector("#volume-value").textContent=`${Math.round(this.settings.volume*100)}%`)}),document.addEventListener("keydown",n=>{this.screen!=="playing"&&n.code==="Escape"&&(n.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&t.resume())});const e=document.createElement("button");e.className="desktop-pause",e.setAttribute("aria-label","Pause mission"),e.textContent="Ⅱ",e.addEventListener("click",()=>t.pause()),document.querySelector("#game").appendChild(e),this.show("menu")}settings;screen="menu";panel="main";state;overlay=document.querySelector("#menu-overlay");cached=new Map;show(t){this.screen=t,this.panel="main",document.body.classList.toggle("playing",t==="playing"),document.body.dataset.screen=t,this.overlay.hidden=t==="playing",t!=="playing"&&this.render()}update(t){this.state=t;const e=t.player;this.write("hud-health",String(Math.max(0,Math.ceil(e.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(e.armor))).padStart(3,"0")),this.write("hud-ammo",e.reload>0?"LOAD":String(e.ammo[e.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(e.reserve[e.weapon]).padStart(3,"0")}`),this.write("hud-weapon",e.owned.includes(e.weapon)?N0[e.weapon]:"MECHANICAL ARM"),this.write("hud-kills",`${t.kills} / ${t.enemies.length}`),this.write("hud-mode",e.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(t.slow*100)}%`);const n=document.querySelector("#hud-key");n.classList.toggle("acquired",e.keycard),n.querySelector("b").textContent=e.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,e.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,e.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",e.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,e.hurt*.7)));const i=e.owned.length?!e.keycard&&e.z>=-19?"REACH THE AXIOM FACILITY":e.keycard?t.powered?"REACH THE INDUSTRIAL ELEVATOR":"ENTER THE LAB · RESTORE ELEVATOR POWER":"FIND THE SECURITY KEYCARD":"FIND YOUR REVOLVER";this.write("objective",i),this.write("message",t.messageTime>0?t.message:"");let s="";const a=t.doors.find(o=>Math.hypot(o.x-e.x,o.z-e.z)<3.2);e.mounted?s="E · DISMOUNT STRIDER":Math.hypot(t.mount.x-e.x,t.mount.z-e.z)<2.8?s="E · RIDE STRIDER":!t.powered&&Math.hypot(Ie.switch.x-e.x,Ie.switch.z-e.z)<2.5?s="E · RESTORE ELEVATOR POWER":Math.hypot(Ie.exit.x-e.x,Ie.exit.z-e.z)<3?s=t.powered?"ENTER THE LIFT TO EXTRACT":"ELEVATOR POWER REQUIRED":a&&(s=a.locked&&!e.keycard?"SECURITY KEYCARD REQUIRED":`E · ${a.target>0?"CLOSE":"OPEN"} ${a.label.toUpperCase()}`),this.write("interaction",s),document.querySelector("#crosshair").classList.toggle("firing",e.recoil>.1)}setError(t){const e=document.querySelector("#error");e.textContent=t,e.hidden=!t}write(t,e){if(this.cached.get(t)===e)return;this.cached.set(t,e);const n=document.getElementById(t);n&&(n.textContent=e)}hasCheckpoint(){if(this.state?.checkpoint)return!0;try{return!!localStorage.getItem("fossil-noir-3d-checkpoint")}catch{return!1}}render(){const t=this.hasCheckpoint(),e=this.panel==="main",n=this.screen==="menu";let i="",s="";if(this.panel==="controls")s="FIELD MANUAL",i='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")s="SYSTEM SETUP",i=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">SOUND VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty==="easy"?"selected":""}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty==="normal"?"selected":""}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty==="hard"?"selected":""}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(n)i=`<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${t?"":"disabled"}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")s="MISSION PAUSED",i=`<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${t?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")s="CASE CLOSED",i=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${t?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${t?"":"primary"}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){s="DISTRICT SURVIVED";const a=Math.floor(this.state?.time??0);i=`<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${n&&e?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${n&&e?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${s?`<h2 class="panel-title">${s}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${i}</div></section>${n&&e?'<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>':""}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${n?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const t=localStorage.getItem(nl);return this.validateSettings(t?JSON.parse(t):{})}catch{return{...ws}}}validateSettings(t){const e=t&&typeof t=="object"?t:{},n=(i,s,a,o)=>typeof i=="number"&&Number.isFinite(i)?Math.min(a,Math.max(s,i)):o;return{sensitivity:n(e.sensitivity,.3,2.5,ws.sensitivity),resolution:e.resolution==="320"||e.resolution==="640"?e.resolution:ws.resolution,quality:e.quality==="low"?"low":"high",volume:n(e.volume,0,1,ws.volume),difficulty:e.difficulty==="easy"||e.difficulty==="hard"?e.difficulty:"normal"}}}const wn=["#151b20","#2d3b43","#465761","#687b84","#96a7ad","#ced5ce"];class O0{constructor(t){this.canvas=t,t.width=640,t.height=400,t.style.imageRendering="pixelated";const e=t.getContext("2d");if(!e)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=e,e.imageSmoothingEnabled=!1,e.setTransform(2,0,0,2,0,0);for(const n of["fist","revolver","shotgun","plasma","machinegun"]){const i=document.createElement("canvas");i.width=640,i.height=400;const s=i.getContext("2d");s.imageSmoothingEnabled=!1,s.setTransform(2,0,0,2,0,0),this.paintWeapon(s,n),this.sprites.set(n,i)}}ctx;sprites=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;render(t,e){const n=t.player,i=this.ctx;e=Math.min(e,.06),i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,320,200);const s=n.owned.includes(n.weapon)?n.weapon:"fist";this.initialized||(this.current=this.next=s,this.lastX=n.x,this.lastZ=n.z,this.initialized=!0),s!==this.next&&(this.next=s,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-e),this.switchTime<.16&&(this.current=this.next)),n.recoil>.65&&n.recoil>this.lastRecoil+.04&&s!=="fist"&&!n.mounted&&(this.flash=.075,this.shotAge=0),this.lastRecoil=n.recoil,this.flash=Math.max(0,this.flash-e),this.shotAge+=e,n.reload>this.lastReload+.1&&(this.reloadDuration=n.reload),this.lastReload=n.reload;const a=Math.hypot(n.x-this.lastX,n.z-this.lastZ)/Math.max(e,.001);this.lastX=n.x,this.lastZ=n.z,this.travel+=Math.min(a,15)*e*(n.mounted?1.9:2.5);const o=Math.min(a/4,1),c=Math.sin(this.travel)*2.2*o,l=Math.abs(Math.cos(this.travel))*2.5*o,u=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,f=n.reload>0?1-n.reload/this.reloadDuration:0,h=n.reload>0?Math.sin(f*Math.PI):0,d=Math.min(1,n.recoil),g=this.current==="shotgun"?13:this.current==="machinegun"?5:8;if(n.mounted){this.paintMount(i,t.time,o,d),this.line(i,[173,159],[251,188],"#5b4f35",2),this.arm(i,247,186);return}if(i.save(),i.translate(Math.round(c),Math.round(l+u+d*g+h*23)),n.reload>0&&(i.translate(209,176),i.rotate(h*(this.current==="revolver"?.3:-.14)),i.translate(-209,-176)),i.drawImage(this.sprites.get(this.current),0,0,320,200),this.paintAmmoGauge(i,this.current,n.ammo[this.current]||0),this.current==="plasma"&&this.paintPlasmaPulse(i,t.time,n.reload>0),n.reload>0&&this.paintReload(i,this.current,f),this.flash>0&&n.reload<=0&&this.paintFlash(i,this.current,t.time),this.current==="shotgun"&&this.shotAge<.48&&this.shotAge>.12&&n.reload<=0&&this.paintPumpHand(i,Math.sin((this.shotAge-.12)/.36*Math.PI)*8),i.restore(),["shotgun","machinegun","revolver"].includes(this.current)&&this.shotAge>.06&&this.shotAge<.35){const v=this.shotAge/.35;i.save(),i.translate(Math.round(222+v*59),Math.round(148-Math.sin(v*Math.PI)*25)),i.rotate(v*9),i.fillStyle="#17130b",i.fillRect(-2,-1,9,4),i.fillStyle=this.current==="shotgun"?"#a12b25":"#c19f4d",i.fillRect(-1,0,6,2),i.fillStyle="#e2ce86",i.fillRect(4,0,2,2),i.restore()}}poly(t,e,n,i="#080c10"){t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(const[s,a]of e.slice(1))t.lineTo(s,a);t.closePath(),t.fillStyle=n,t.fill(),i&&(t.strokeStyle=i,t.lineWidth=1,t.stroke())}line(t,e,n,i,s=1){t.beginPath(),t.moveTo(...e),t.lineTo(...n),t.strokeStyle=i,t.lineWidth=s,t.stroke()}bolt(t,e,n){t.fillStyle="#10161c",t.fillRect(e-2,n-2,5,5),t.fillStyle="#9faeae",t.fillRect(e-1,n-1,3,3),t.fillStyle="#344650",t.fillRect(e-1,n,3,1),t.fillStyle="#e2e5d5",t.fillRect(e-1,n-1,2,.5),t.fillStyle="#131f26",t.fillRect(e-.5,n-.5,.5,2),t.fillStyle="#52636a",t.fillRect(e+1,n+.5,.5,1.5)}screw(t,e,n,i=!1){t.fillStyle="#091317",t.fillRect(e-1,n-1,2.5,2.5),t.fillStyle=i?"#a58d59":"#91a19e",t.fillRect(e-.5,n-.5,1.5,1.5),t.fillStyle=i?"#f0d399":"#dbe0d3",t.fillRect(e-.5,n-.5,1,.5),t.fillStyle="#24333b",t.fillRect(e,n-.5,.5,1.5)}inset(t,e,n="#27353b"){this.poly(t,e,n,"#091318");for(let i=0;i<e.length-1;i++)i%2===0&&this.line(t,e[i],e[i+1],"#b0beb063",.5)}machining(t,e,n,i=90){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const h of e.slice(1))t.lineTo(...h);t.closePath(),t.clip();const s=e.map(h=>h[0]),a=e.map(h=>h[1]),o=Math.min(...s),c=Math.min(...a),l=Math.max(...s)-o,u=Math.max(...a)-c;let f=n;for(let h=0;h<i;h++){f=f*1664525+1013904223>>>0;const d=o+f%Math.max(1,l*2|0)*.5;f=f*1664525+1013904223>>>0;const g=c+f%Math.max(1,u*2|0)*.5;t.fillStyle=h%4===0?"#d3dcc241":h%4===1?"#030a136a":"#a5bab225",t.fillRect(d,g,h%9===0?2.5:.5,.5),h%17===0&&(t.fillStyle="#101b2570",t.fillRect(d,g+.5,1.5,.5))}t.restore()}etch(t,e,n,i,s="#b3bdab",a=0){const o={A:["010","101","111","101","101"],B:["110","101","110","101","110"],C:["111","100","100","100","111"],D:["110","101","101","101","110"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],H:["101","101","111","101","101"],I:["111","010","010","010","111"],K:["101","101","110","101","101"],L:["100","100","100","100","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["110","101","110","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"],V:["101","101","101","101","010"],X:["101","101","010","101","101"],Y:["101","101","010","010","010"],0:["111","101","101","101","111"],1:["010","110","010","010","111"],2:["110","001","010","100","111"],3:["110","001","010","001","110"],4:["101","101","111","001","001"],5:["111","100","110","001","110"],6:["011","100","111","101","111"],7:["111","001","010","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","110"],"-":["000","000","111","000","000"],".":["000","000","000","000","010"]};t.save(),t.translate(n,i),t.rotate(a),t.fillStyle=s;for(let c=0;c<e.length;c++){const l=o[e[c]];l&&l.forEach((u,f)=>{for(let h=0;h<3;h++)u[h]==="1"&&t.fillRect(c*2+h*.5,f*.5,.5,.5)})}t.restore()}wire(t,e,n,i=1){for(let s=0;s<e.length-1;s++)this.line(t,e[s],e[s+1],"#071219",i+1.5);for(let s=0;s<e.length-1;s++)this.line(t,e[s],e[s+1],n,i);for(let s=0;s<e.length-1;s++){const[a,o]=e[s];this.line(t,[a,o-.5],[e[s+1][0],e[s+1][1]-.5],"#ffe1b03a",.5)}}gripTexture(t,e){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const s of e.slice(1))t.lineTo(...s);t.closePath(),t.clip();const n=e.map(s=>s[0]),i=e.map(s=>s[1]);for(let s=Math.min(...i);s<Math.max(...i);s+=1.5)for(let a=Math.min(...n);a<Math.max(...n);a+=1.5)t.fillStyle="#090e1380",t.fillRect(a+Math.round(s)%2*.5,s,.5,.5),t.fillStyle="#c2ae8b45",t.fillRect(a+.5,s+.5,.5,.5);t.restore()}scratches(t,e,n,i=45){t.save(),t.beginPath(),t.moveTo(...e[0]);for(const h of e.slice(1))t.lineTo(...h);t.closePath(),t.clip();const s=e.map(h=>h[0]),a=e.map(h=>h[1]),o=Math.min(...s),c=Math.min(...a),l=Math.max(...s)-o,u=Math.max(...a)-c;let f=n;for(let h=0;h<i;h++){f=f*1664525+1013904223>>>0;const d=o+f%Math.max(1,l|0);f=f*1664525+1013904223>>>0;const g=c+f%Math.max(1,u|0);t.fillStyle=h%3===0?"#a2afa42b":"#040b104a",t.fillRect(d,g,h%5===0?3:1,1)}t.restore()}arm(t,e=204,n=165){const i=[[266,184],[319,199],[326,217],[258,213],[240,195]];this.poly(t,i,"#141619"),this.poly(t,[[270,188],[319,203],[319,211],[264,201],[248,189]],"#2b3031"),this.line(t,[277,191],[314,204],"#484f4b",2);const s=[[e+7,n+13],[e+24,n+8],[274,181],[280,197],[258,209],[e+4,n+27]];this.poly(t,s,wn[2]),this.poly(t,[[e+13,n+13],[e+24,n+11],[267,184],[271,190],[257,196],[e+12,n+24]],wn[3]),this.poly(t,[[e+12,n+13],[e+24,n+11],[267,184],[260,185],[e+16,n+18]],wn[5]),this.poly(t,[[e+14,n+25],[258,199],[275,191],[277,198],[259,205]],wn[0]),this.scratches(t,s,773,100),this.line(t,[e+20,n+22],[259,193],"#0b151b",5),this.line(t,[e+20,n+22],[259,193],"#9eaeb0",2),this.line(t,[e+24,n+28],[258,201],"#0b151b",5),this.line(t,[e+24,n+28],[258,201],"#776b47",2),this.poly(t,[[258,185],[266,182],[277,190],[274,200],[266,202],[265,192]],"#30383c"),this.bolt(t,270,191),this.bolt(t,254,187),t.fillStyle="#28d989",t.fillRect(253,190,3,2),t.fillRect(257,191,2,2),this.line(t,[274,187],[278,197],"#afa17b",2),this.inset(t,[[239,181],[253,183],[258,189],[247,193],[238,187]],"#31434b"),this.machining(t,s,7133,145),this.line(t,[241,182],[251,184],"#ced4bd",.5),this.line(t,[240,188],[247,192],"#14202c",.5),this.screw(t,241,184),this.screw(t,251.5,187.5,!0),this.screw(t,261.5,194.5),this.etch(t,"VANE-09",244,184,"#b9c7b9",.28),this.wire(t,[[e+17,n+28],[238,195],[247,198],[254,197]],"#ac724c",1),this.wire(t,[[e+19,n+30],[240,198],[248,201],[255,200]],"#527b82",.5);for(let a=0;a<6;a++)this.line(t,[257+a*.8,191-a*.3],[258+a*.8,195-a*.3],a%2?"#192b32":"#afbcae",.5),this.line(t,[270+a*.6,185+a*.6],[272+a*.6,187+a*.6],a%2?"#b7ba99":"#2f3431",.5);for(let a=0;a<4;a++)t.fillStyle="#111e25",t.fillRect(263+a*1.5,187+a*.5,1,.5);this.line(t,[e+21,n+20],[254,188],"#f2efce",.5),this.line(t,[e+21,n+21],[255,190],"#303c42",.5),t.fillStyle="#0a191b",t.fillRect(251,189,8,3);for(let a=0;a<4;a++)t.fillStyle=a===3?"#6e7150":"#7ef4af",t.fillRect(252+a*1.5,190,1,1);this.line(t,[276,192],[279,196],"#f0d7a4",.5),this.line(t,[246,189],[248.5,188.5],"#111b20",.5),this.line(t,[246,189.5],[248,189],"#bfcbb1",.5);for(let a=0;a<11;a++)this.line(t,[283+a*2.5,193+a*.75],[283.5+a*2.5,194+a*.75],"#9b96784d",.5);this.line(t,[286,197],[310,206],"#080d13",.5),this.line(t,[291,199],[309,205],"#66706a",.5),this.hand(t,e,n)}hand(t,e,n){this.poly(t,[[e-14,n-5],[e-6,n-12],[e+9,n-10],[e+19,n],[e+21,n+14],[e+12,n+22],[e-3,n+18],[e-14,n+9]],"#293841"),this.poly(t,[[e-12,n-5],[e-6,n-10],[e+6,n-8],[e+12,n],[e+9,n+10],[e-7,n+7]],"#65767b");for(let i=0;i<4;i++){const s=e-11+i*6,a=n+i*2;this.poly(t,[[s,a],[s+4,a-2],[s+8,a+3],[s+7,a+10],[s+3,a+12],[s-1,a+7]],i%2?"#839391":"#61747a"),this.line(t,[s+1,a+5],[s+6,a+3],"#182730",2),t.fillStyle="#c0c8bb",t.fillRect(s+1,a,3,2),this.line(t,[s+1,a+.5],[s+4.5,a-1],"#e0e4c8",.5),this.line(t,[s+1.5,a+6.5],[s+5,a+5],"#afc0b6",.5),this.line(t,[s+1,a+9],[s+5.5,a+8],"#263a44",.5),this.screw(t,s+3,a+7),t.fillStyle="#233d42",t.fillRect(s+3.5,a+.5,.5,2),t.fillStyle="#9e8155",t.fillRect(s+6,a+4,.5,3),t.fillStyle="#f3e2b6",t.fillRect(s+6,a+4,.5,.5)}this.poly(t,[[e+12,n-2],[e+18,n-2],[e+23,n+6],[e+18,n+13],[e+13,n+8]],"#7e9195"),this.bolt(t,e+14,n+15),this.inset(t,[[e-9,n-7],[e-3,n-9],[e+4,n-5],[e+5,n-1],[e-4,n+2],[e-10,n-1]],"#41535b"),this.screw(t,e-6,n-4,!0),this.screw(t,e+1,n-3),this.line(t,[e+15,n],[e+20,n+6],"#cfdbcd",.5),this.line(t,[e+17,n+8],[e+20,n+6],"#243b43",.5),this.machining(t,[[e-12,n-5],[e+17,n],[e+20,n+13],[e-4,n+17]],139,30)}paintWeapon(t,e){if(e==="fist"){this.arm(t,195,172),this.poly(t,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],"#61777e");for(let n=0;n<4;n++)t.fillStyle="#b9c1b5",t.fillRect(186+n*7,155+n*2,5,6),t.fillStyle="#243a41",t.fillRect(186+n*7,162+n*2,5,2);this.machining(t,[[181,164],[190,148],[199,148],[217,158],[211,178],[189,179]],228,100);for(let n=0;n<4;n++)this.screw(t,188+n*7,157+n*2),this.line(t,[186+n*7,155+n*2],[190+n*7,155+n*2],"#e5e4c9",.5);this.etch(t,"VANE",193,170,"#b9cbc2",.25);return}if(e==="revolver"){this.arm(t,208,174),this.poly(t,[[196,156],[211,158],[230,185],[223,199],[208,196],[191,169]],"#191b1a"),this.poly(t,[[204,166],[212,167],[224,186],[218,193],[212,187]],"#4b3626");for(let n=0;n<5;n++)this.line(t,[210+n*2,175+n*3],[219+n,177+n*3],"#8a6d46");this.poly(t,[[155,122],[164,119],[180,139],[198,153],[196,170],[181,168],[169,145]],wn[2]),this.poly(t,[[156,121],[164,120],[183,143],[176,145]],wn[4]),this.poly(t,[[164,123],[169,128],[183,149],[182,156],[173,147]],wn[0]),this.line(t,[158,124],[177,148],wn[5],2),this.poly(t,[[175,143],[190,141],[204,152],[204,166],[194,173],[181,169],[174,155]],"#4a585b"),this.poly(t,[[177,144],[189,142],[199,150],[186,153]],"#b4bbaf"),this.poly(t,[[179,154],[186,152],[192,157],[191,168],[184,168]],"#202b31"),this.poly(t,[[193,154],[200,152],[203,157],[201,167],[195,170]],"#222d32"),this.line(t,[185,154],[185,166],"#8b9690",2),this.line(t,[198,155],[198,166],"#77847c",2),this.poly(t,[[163,120],[162,115],[157,116],[157,122]],"#1b2024"),t.fillStyle="#98f0c3",t.fillRect(158,115,3,1),this.poly(t,[[197,149],[201,143],[206,145],[208,153]],"#728281"),this.poly(t,[[193,171],[197,184],[207,188],[212,181],[207,171]],"#11191c"),this.line(t,[197,173],[201,182],"#9faaa4",2),this.scratches(t,[[174,142],[198,147],[203,164],[181,172]],129,45),this.paintGunDetail(t,e),this.hand(t,208,177),this.bolt(t,192,150),t.fillStyle="#a2ada1",t.fillRect(183,148,7,1)}else if(e==="shotgun"){this.arm(t,222,186);const n=[[154,120],[165,113],[183,136],[219,171],[240,192],[220,204],[186,170],[165,139]];this.poly(t,n,wn[1]),this.poly(t,[[156,121],[163,116],[188,142],[219,174],[211,179],[181,145]],"#879698"),this.poly(t,[[155,122],[159,125],[191,161],[203,176],[199,181],[179,161]],"#17222a"),this.line(t,[160,122],[208,174],"#c3cabb",2),this.poly(t,[[152,118],[156,114],[163,111],[167,115],[165,122],[158,125]],"#40545b"),this.poly(t,[[155,117],[159,115],[163,115],[163,120],[160,122],[156,121]],"#070c10"),this.line(t,[156,114],[163,112],"#b0bcb4",2),this.poly(t,[[194,155],[213,171],[229,188],[220,198],[205,184],[187,166]],"#34454a"),this.poly(t,[[200,155],[218,171],[225,183],[218,187],[207,174],[194,163]],"#617378"),this.poly(t,[[208,170],[214,170],[221,178],[218,182],[212,177]],"#0c171e"),this.line(t,[209,171],[219,180],"#a9b6b3"),this.poly(t,[[175,144],[184,140],[203,159],[196,171],[187,169],[174,155]],"#564939");for(let i=0;i<6;i++)this.line(t,[179+i*3,146+i*2],[181+i*3,157+i*2],i%2?"#b09562":"#282925",2);this.poly(t,[[227,187],[240,191],[254,212],[227,213],[216,197]],"#171c1b"),this.scratches(t,n,448,100),this.bolt(t,207,164),this.bolt(t,223,186),this.paintGunDetail(t,e),this.paintPumpHand(t,0),this.hand(t,225,184)}else if(e==="plasma"){this.arm(t,217,179);const n=[[150,122],[160,114],[170,119],[185,139],[215,150],[232,171],[233,193],[221,201],[198,180],[168,145]];this.poly(t,n,"#263a3c"),this.poly(t,[[150,121],[159,116],[169,119],[183,139],[175,144],[160,131]],"#566f71"),this.poly(t,[[149,121],[151,115],[158,111],[166,113],[171,122],[162,129]],"#182624"),this.poly(t,[[153,117],[158,114],[165,116],[167,120],[160,125],[154,123]],"#030c09"),this.poly(t,[[157,117],[162,117],[164,120],[160,122],[157,121]],"#76f6ac"),this.poly(t,[[179,139],[190,134],[208,146],[223,164],[213,174],[196,164]],"#668085"),this.poly(t,[[180,140],[189,136],[207,148],[204,155],[192,154]],"#aac0b5"),this.poly(t,[[179,151],[191,147],[212,169],[207,180],[196,175]],"#101b1d"),this.poly(t,[[185,151],[191,151],[205,167],[202,173],[198,170]],"#16714d");for(let i=0;i<5;i++)this.line(t,[185+i*4,149+i*4],[181+i*4,153+i*4],"#86f8b4",2);this.poly(t,[[205,150],[213,150],[232,169],[231,187],[224,190],[211,175]],"#314b50"),this.poly(t,[[211,153],[215,153],[226,165],[226,174],[220,173]],"#092522"),t.fillStyle="#84fbbe",t.fillRect(215,158,4,3),t.fillRect(220,164,3,3),this.poly(t,[[211,180],[220,177],[234,193],[231,205],[221,205],[209,192]],"#172424"),this.scratches(t,n,137,85),this.bolt(t,205,145),this.bolt(t,229,178),this.paintGunDetail(t,e),this.hand(t,215,181)}else{this.arm(t,229,186);const n=[[148,118],[158,109],[168,114],[178,134],[212,153],[240,178],[255,201],[222,211],[187,175],[160,145]];this.poly(t,n,"#222b2e"),this.poly(t,[[149,118],[157,112],[164,115],[191,151],[186,159],[173,146]],"#718184"),this.poly(t,[[156,127],[162,120],[199,156],[193,166],[184,159]],"#3a4c51"),this.poly(t,[[147,117],[150,111],[157,107],[165,111],[171,120],[163,130],[154,129]],"#3f525b");for(const[i,s]of[[153,115],[160,114],[157,122],[164,120]])t.fillStyle="#030a0e",t.fillRect(i-2,s-2,4,4),t.fillStyle="#8da09b",t.fillRect(i-2,s-3,4,1);for(let i=0;i<3;i++)this.line(t,[156+i*4,123-i*2],[187+i*5,159-i*2],i%2?"#b0b8ad":"#11191e",2);this.poly(t,[[186,153],[198,146],[215,154],[238,175],[243,193],[228,204],[207,188],[186,167]],"#405255"),this.poly(t,[[189,153],[198,150],[215,158],[229,173],[221,177],[204,163]],"#91a09b"),this.poly(t,[[189,160],[205,164],[227,182],[228,198],[214,192],[194,174]],"#1c2b31");for(let i=0;i<4;i++)this.poly(t,[[193+i*5,162+i*4],[197+i*5,163+i*4],[203+i*5,173+i*4],[199+i*5,174+i*4]],"#070f13");this.poly(t,[[211,164],[220,160],[230,168],[230,176],[222,177]],"#364747"),this.poly(t,[[218,161],[216,151],[221,147],[230,151],[234,157],[230,161]],"#586b6b"),this.poly(t,[[219,156],[221,151],[227,152],[229,157]],"#070f15"),this.poly(t,[[236,169],[263,174],[280,182],[277,194],[249,185],[237,181]],"#14191b");for(let i=0;i<8;i++){const s=240+i*5,a=174+i*1.7;this.poly(t,[[s,a],[s+4,a+1],[s+3,a+12],[s,a+14],[s-2,a+11]],i%2?"#846733":"#a68b4c"),t.fillStyle="#d0b471",t.fillRect(s,a+1,2,7),t.fillStyle="#382e23",t.fillRect(s-1,a+9,4,2)}this.scratches(t,n,1985,140),this.bolt(t,205,158),this.bolt(t,235,185),this.paintGunDetail(t,e),this.hand(t,232,185)}}paintGunDetail(t,e){if(e==="revolver"){this.line(t,[156.5,122.5],[176.5,145.5],"#eff0d1",.5),this.line(t,[162,122.5],[180,144],"#566570",.5),this.line(t,[164,124.5],[181,146.5],"#111b23",.5);for(let n=0;n<7;n++){const i=163+n*2,s=127+n*2.25;this.line(t,[i,s],[i+2,s-.5],"#263b41",.5),this.line(t,[i+.5,s+.5],[i+2,s],"#c6d3c9",.5)}this.etch(t,".357",166,133,"#32434a",.88);for(let n=0;n<5;n++){const i=176.5+n*4.5,s=147+n*1.9;this.poly(t,[[i,s],[i+2,s-.5],[i+4,s+3],[i+3,s+12],[i+1.5,s+13],[i,s+8]],n%2?"#5e7376":"#253842",""),this.line(t,[i+1,s+.5],[i+2,s+10],"#c2cbb3",.5),this.line(t,[i+3,s+2],[i+3,s+11],"#121f2a",.5),t.fillStyle="#d1ad61",t.fillRect(i+.5,s-1,1.5,1),t.fillStyle="#f4dd90",t.fillRect(i+.5,s-1,.5,.5)}this.inset(t,[[184,168],[195,168],[199,171],[197,175],[187,172]],"#42535a"),this.screw(t,188.5,170),this.screw(t,197,167),this.line(t,[178,145],[188,143],"#e9e6c3",.5),this.line(t,[192,143.5],[200,149.5],"#e1d9b2",.5),this.line(t,[197,147],[201,144],"#1c3038",.5);for(let n=0;n<4;n++)this.line(t,[200+n*.9,146.5+n*.2],[202+n*.9,147+n*.2],"#303e45",.5);this.gripTexture(t,[[204,166],[212,167],[224,186],[218,193],[212,187]]),this.machining(t,[[171,137],[187,146],[204,161],[191,170]],1974,115),this.etch(t,"VANE",194,166,"#c1b895",.15),this.screw(t,215.5,183.5,!0)}else if(e==="shotgun"){this.line(t,[157,115.5],[162.5,112.5],"#d1d7bb",.5),this.poly(t,[[156,116],[160,114.5],[162.5,115.5],[161.5,118],[158,119.5]],"#17262d",""),this.line(t,[158,116],[161,115],"#64818b",.5);for(let n=0;n<11;n++){const i=164.5+n*2.6,s=122+n*2.8;this.poly(t,[[i,s],[i+2.5,s+1.5],[i+3.5,s+4],[i+1,s+2.5]],"#13212b",""),this.line(t,[i+.5,s],[i+2.5,s+1.5],"#b3c4b5",.5),this.line(t,[i+3,s+.5],[i+5,s+2.5],"#2d3941",.5)}this.line(t,[164,121],[191,149],"#eef0cf",.5),this.line(t,[165,123],[194,154],"#52646d",.5),this.inset(t,[[198,157],[206,164],[213,168],[210,172],[201,167],[195,162]],"#2c4148"),this.etch(t,"12 GA",198,160,"#c1cdb9",.79),this.line(t,[208.5,171],[217,178],"#d3dbbf",.5),this.line(t,[211,174],[216.5,178.5],"#1a292b",.5),this.screw(t,199,157),this.screw(t,216,172),this.screw(t,223.5,189,!0);for(let n=0;n<8;n++){const i=177.5+n*2.5,s=144+n*2;this.line(t,[i,s],[i+1.5,s+7.5],"#180f13",.5),this.line(t,[i+.5,s],[i+2,s+7.5],"#c7aa6c",.5)}this.gripTexture(t,[[229,189],[239,193],[247,208],[229,209],[222,198]]),this.machining(t,[[155,120],[164,116],[193,146],[226,179],[221,194],[179,156]],2529,165),this.etch(t,"FN-12",216,183,"#b9c1ad",.8)}else if(e==="plasma"){for(let n=0;n<9;n++){const i=183+n*2.45,s=149+n*2.5;this.line(t,[i,s],[i-3.5,s+4],"#161913",2),this.line(t,[i,s],[i-3.5,s+4],"#c49657",1),this.line(t,[i,s],[i-2,s+2],"#f0d392",.5),t.fillStyle="#3e7651",t.fillRect(i-1,s+2.5,.5,1)}this.wire(t,[[184,141],[192,138],[205,144],[216,154],[220,162]],"#a46945",1.5),this.wire(t,[[181,144],[189,143],[204,150],[214,160]],"#254d5a",.5),this.inset(t,[[189,136],[202,143],[205,148],[198,148],[188,141]],"#394f57"),this.etch(t,"ION-X3",190,139,"#d2d9b9",.51),this.line(t,[180,140],[188,136],"#e5ebcf",.5),this.line(t,[197,141],[206,147],"#e0e1c0",.5);for(let n=0;n<5;n++){const i=208+n*2,s=153+n*2.2;this.poly(t,[[i,s],[i+2,s],[i+5,s+3],[i+3,s+3]],"#0b2329",""),this.line(t,[i+.5,s+.5],[i+3,s+2],"#91b8a1",.5)}this.inset(t,[[220,166],[226,169],[229,177],[225,181],[220,175]],"#293d42"),this.screw(t,222,169,!0),this.screw(t,226.5,176),this.line(t,[155,117],[158,114.5],"#aeffd3",.5),this.line(t,[165,116.5],[168,122],"#549878",.5),t.fillStyle="#ccfadc",t.fillRect(156.5,119,1,.5),this.gripTexture(t,[[215,182],[221,179],[230,194],[226,203],[218,197]]),this.machining(t,[[172,133],[190,135],[211,149],[233,173],[224,190],[196,161]],186,165),this.etch(t,"CAUTION",199,173,"#969972",.74)}else{for(const[n,i]of[[153,115],[160,114],[157,122],[164,120]])this.line(t,[n-2,i-1.5],[n+1.5,i-1.5],"#c6d2c1",.5),this.line(t,[n-2,i-1],[n-2,i+1],"#708a8f",.5),this.line(t,[n+1.5,i-.5],[n+1.5,i+1.5],"#17232e",.5),t.fillStyle="#2b414b",t.fillRect(n-.5,i+.5,1,.5);for(let n=0;n<8;n++){const i=166+n*2.5,s=129+n*2.7;this.poly(t,[[i,s],[i+2,s-1],[i+4,s+2],[i+2,s+3]],"#0b141c",""),this.line(t,[i,s],[i+1.5,s-.5],"#c5d0b5",.5),this.line(t,[i+2,s+3],[i+3.5,s+2],"#4e6a6c",.5)}this.line(t,[153,124],[178,153],"#e3e6c2",.5),this.line(t,[165,127],[192,155],"#566e72",.5),this.inset(t,[[198,150],[209,155],[218,164],[214,169],[203,160],[195,155]],"#556a6c"),this.etch(t,"M-60",200,153,"#d5d7b5",.64),this.line(t,[206,160],[216,168],"#152930",.5);for(let n=0;n<4;n++){const i=193.5+n*5,s=163+n*4;this.line(t,[i,s],[i+3,s+7],"#5b7378",.5),this.line(t,[i+4,s+2],[i+6,s+8],"#a2b8a850",.5)}this.screw(t,199,153),this.screw(t,218.5,166.5),this.screw(t,233,178,!0);for(let n=0;n<8;n++){const i=240+n*5,s=174+n*1.7;t.fillStyle="#eee0a1",t.fillRect(i+.5,s+1,.5,7),t.fillStyle="#614e2b",t.fillRect(i+2,s+1,.5,7),this.line(t,[i-1,s+10],[i+2,s+10],"#f6d080",.5),this.line(t,[i-1,s+12],[i+2,s+12],"#2e2822",.5),this.screw(t,i+2.5,s+9)}this.wire(t,[[236,183],[244,190],[256,191]],"#687c78",.5),this.gripTexture(t,[[226,189],[238,187],[249,201],[239,208],[228,204]]),this.machining(t,[[162,128],[182,145],[210,149],[238,175],[242,194],[212,188]],6509,190),this.etch(t,"FOSSIL",205,179,"#90a399",.72)}}paintAmmoGauge(t,e,n){if(e==="fist")return;if(e==="revolver"){for(let c=0;c<6;c++)t.fillStyle=c<n?"#dfc181":"#243c46",t.fillRect(181+c*2,144+c*.3,1,.5);return}const i=e==="plasma",s=e==="machinegun",a=i?216:s?220:204,o=i?159:s?173:164;t.save(),t.translate(a,o),t.rotate(i?.72:s?.7:.78),t.fillStyle="#050f14",t.fillRect(-.5,-.5,8,4),t.fillStyle="#4c7070",t.fillRect(-.5,-.5,8,.5),this.etch(t,String(Math.min(99,n)).padStart(2,"0"),.5,.25,n>0?i?"#94ffc5":"#d6d1a1":"#ff7851"),t.fillStyle=n>0?"#53b693":"#933b28",t.fillRect(5.5,.5,.5,2),t.restore()}paintPumpHand(t,e){t.save(),t.translate(Math.round(e*.8),Math.round(e)),this.poly(t,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],"#1a2226"),this.poly(t,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],"#74858a"),this.line(t,[143,195],[163,174],"#c3ccc3",2);for(let n=0;n<4;n++)this.poly(t,[[166+n*4,161+n*2],[173+n*4,163+n*2],[176+n*4,169+n*2],[173+n*4,174+n*2],[166+n*4,169+n*2]],n%2?"#9aaba4":"#576c75"),this.line(t,[170+n*4,166+n*2],[175+n*4,168+n*2],"#1c2c34",2),this.line(t,[167+n*4,162+n*2],[172+n*4,164+n*2],"#e2e6c8",.5),this.screw(t,170+n*4,166+n*2),t.fillStyle="#9c7747",t.fillRect(174+n*4,169+n*2,.5,2);this.bolt(t,154,187),this.inset(t,[[145,190],[151,181],[158,176],[162,180],[155,186],[148,194]],"#4a626b"),this.wire(t,[[143,196],[151,189],[156,186]],"#a1744a",.5),this.machining(t,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],271,60),this.etch(t,"09",148,187,"#d0d6bb",-.81),t.restore()}paintPlasmaPulse(t,e,n){n||(t.fillStyle=Math.sin(e*9)>0?"#c4ffe1":"#49dc95",t.fillRect(215,158,4,2),t.fillRect(221,165,2,2),t.fillRect(158,117,3,3))}paintReload(t,e,n){const i=Math.sin(n*Math.PI);if(e==="revolver"){const s=171-Math.round(i*12),a=158+Math.round(i*10);this.poly(t,[[s-8,a-5],[s+5,a-8],[s+12,a],[s+10,a+13],[s-3,a+15],[s-11,a+5]],"#687b7d"),this.line(t,[s-8,a-5],[s+4,a-7],"#dfe4c1",.5),this.line(t,[s+9,a+2],[s+8,a+11],"#1c353d",.5);for(let o=0;o<6;o++){const c=o*Math.PI/3+n*5,l=Math.round(s+Math.cos(c)*6),u=Math.round(a+Math.sin(c)*6);t.fillStyle=n>.45?"#c2a254":"#0b151a",t.fillRect(l-2,u-2,4,4),t.fillStyle=n>.45?"#fae5a2":"#5f777e",t.fillRect(l-1.5,u-2,2,.5),n>.45&&(t.fillStyle="#615137",t.fillRect(l-.5,u-.5,1,1))}this.screw(t,s,a,!0),n>.35&&n<.7&&this.hand(t,147,190)}else if(e==="shotgun")this.hand(t,175+Math.round(i*9),190),t.fillStyle="#932621",t.fillRect(179,176,5,10),t.fillStyle="#d0aa62",t.fillRect(179,175,5,2),t.fillStyle="#edc99a",t.fillRect(179.5,175,4,.5),t.fillStyle="#ef6352",t.fillRect(179.5,177,.5,8),t.fillStyle="#541c21",t.fillRect(183,178,.5,7),this.etch(t,"12",180,179,"#f3d4b2");else if(e==="plasma"){const a=176+Math.round(i*21);this.poly(t,[[188,a],[199,a-4],[211,a+11],[201,a+19],[192,a+9]],"#294447"),this.line(t,[193,a+3],[202,a+14],"#72ffb0",4);for(let o=0;o<5;o++)this.line(t,[194+o*2,a+3+o*2],[191+o*2,a+5+o*2],"#173c3a",.5);this.line(t,[190,a+.5],[198,a-2.5],"#c4d9be",.5),this.screw(t,201,a+5,!0),this.hand(t,168,a+15)}else e==="machinegun"&&(this.hand(t,259-Math.round(i*16),178+Math.round(i*11)),t.fillStyle="#c7ac68",t.fillRect(242,167,14,3))}paintFlash(t,e,n){const i=e==="plasma",s=159,a=114,o=e==="shotgun"?23:e==="machinegun"?17:13,c=Math.floor(n*70)%2?1:-1;this.poly(t,[[s-3,a],[s-o,a-9],[s-7,a-12],[s-11,a-o-5],[s,a-15],[s+o*.7,a-o],[s+7,a-8],[s+o,a-3],[s+5,a+4]],i?"#247e55":"#af4321",""),this.poly(t,[[s-3,a],[s-10,a-7],[s-3,a-10],[s+c*3,a-19],[s+4,a-9],[s+12,a-6],[s+4,a+2]],i?"#82ffae":"#f9b84e",""),this.poly(t,[[s-3,a],[s-2,a-7],[s+2,a-11],[s+5,a-4],[s+3,a+3]],i?"#e7ffeb":"#fff3b9","")}paintMount(t,e,n,i=0){const s=Math.round(Math.sin(e*9)*n*2-i*11);t.save(),t.translate(0,s),this.poly(t,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(t,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(t,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),this.machining(t,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);for(let a=0;a<7;a++){const o=147+a*3,c=172-a*2.1;this.poly(t,[[o,c],[o+2.5,c-1],[o+3,c+1],[o+1.5,c+2]],a%2?"#637558":"#283f34",""),this.line(t,[o,c],[o+2,c-.5],"#a0a580",.5)}if(this.line(t,[162,145],[173,145],"#8a966d",.5),this.line(t,[170,149.5],[177,151],"#1d342e",.5),t.fillStyle="#132922",t.fillRect(177,150,1.5,1),this.line(t,[157,149],[163,153],"#192c26",.5),this.line(t,[156.5,149.5],[162.5,153.5],"#91a371",.5),i>.25){this.poly(t,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let a=0;a<5;a++)t.fillStyle="#b9bf8c",t.fillRect(163+a*3,155,2,3)}else this.line(t,[157,155],[178,155],"#111c19",2);t.fillStyle="#dfb961",t.fillRect(171,146,4,2),t.fillStyle="#081410",t.fillRect(174,146,1,2),t.fillStyle="#ffdc89",t.fillRect(171,146,2,.5);for(let a=0;a<5;a++)this.poly(t,[[135+a*3,183-a*6],[130+a*4,179-a*7],[139+a*3,177-a*6]],"#809178");this.line(t,[150,162],[119,200],"#74664c",2),this.line(t,[174,163],[198,197],"#74664c",2),this.line(t,[151,162],[120,200],"#b5a483",.5),this.line(t,[174,162],[198,195],"#c2b298",.5),this.inset(t,[[150,164],[153,164],[150,168],[147,168]],"#ad9f6b"),this.screw(t,150,166,!0),t.restore()}}class B0{context;master;fx;music;noise;volume=.45;unlocked=!1;nextBeat=0;beat=0;lastStep=0;lastX=0;lastZ=0;distance=0;lastEnemy=0;musicActive=!1;constructor(){}unlock(){try{if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t,this.master=this.context.createGain(),this.master.gain.value=this.volume,this.master.connect(this.context.destination),this.fx=this.context.createGain(),this.fx.gain.value=.8,this.fx.connect(this.master),this.music=this.context.createGain(),this.music.gain.value=.2,this.music.connect(this.master);const e=this.context.sampleRate*2;this.noise=this.context.createBuffer(1,e,this.context.sampleRate);const n=this.noise.getChannelData(0);let i=1793;for(let s=0;s<e;s++)i=i*1664525+1013904223>>>0,n[s]=i/4294967296*2-1}this.context.resume().then(()=>{this.unlocked=!0,this.nextBeat=this.context.currentTime+.08}).catch(()=>{}),this.unlocked=!0}catch{}}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.context&&this.master&&this.master.gain.setTargetAtTime(this.volume,this.context.currentTime,.04)}suspend(){this.musicActive=!1,this.context&&this.music&&this.music.gain.setTargetAtTime(0,this.context.currentTime,.08)}handle(t){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const e of t)switch(e.type){case"shot":this.shot(e.weapon||"revolver");break;case"reload":this.tone(720,.035,.11,"square",370),this.burst(.08,.14,1500,.09),this.tone(440,.05,.1,"triangle",180,.17),this.burst(.03,.11,2600,.32);break;case"hurt":this.burst(.2,.15,700),this.tone(96,.17,.16,"sawtooth",46);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.43,.07,850),this.tone(89,.3,.08,"sawtooth",58),this.tone(420,.06,.06,"square",350,.35);break;case"enemy":{this.context.currentTime-this.lastEnemy>.65&&(this.lastEnemy=this.context.currentTime,e.message?.includes("charging shot")?(this.tone(260,.19,.055,"sawtooth",790),this.tone(880,.07,.055,"square",330,.2)):e.message?.startsWith("Strider")?(this.tone(90,.27,.1,"sawtooth",42),this.burst(.28,.08,530)):(this.tone(195,.23,.09,"sawtooth",58),this.burst(.22,.09,650)));break}case"kill":this.burst(.2,.12,430),this.tone(118,.22,.1,"sawtooth",34);break;case"mount":this.tone(110,.22,.11,"sawtooth",210),this.tone(82,.12,.12,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(t,e){if(!this.context||!this.unlocked||this.context.state!=="running")return;this.musicActive||(this.musicActive=!0,this.nextBeat=this.context.currentTime+.06,this.music?.gain.setTargetAtTime(t.status==="playing"?.2:.1,this.context.currentTime,.35));const n=this.context.currentTime;for(n>this.nextBeat+.8&&(this.nextBeat=n+.04);this.nextBeat<n+.11;)this.ambientBeat(this.nextBeat,t),this.nextBeat+=.375,this.beat++;const i=t.player,s=Math.hypot(i.x-this.lastX,i.z-this.lastZ);this.lastX=i.x,this.lastZ=i.z,s<1&&(this.distance+=s),i.grounded&&this.distance>(i.mounted?2.2:1.65)&&n-this.lastStep>.22&&e>0&&(this.distance=0,this.lastStep=n,this.burst(.045,i.mounted?.1:.045,i.mounted?350:950),this.tone(i.mounted?65:110,.07,i.mounted?.11:.045,"triangle",40))}tone(t,e,n,i="square",s=t,a=0,o="fx",c){const l=this.context;if(!l||!this.master||!this.fx||!this.music)return;const u=c??l.currentTime+a,f=l.createOscillator(),h=l.createGain();f.type=i,f.frequency.setValueAtTime(Math.max(1,t),u),f.frequency.exponentialRampToValueAtTime(Math.max(1,s),u+e),h.gain.setValueAtTime(1e-4,u),h.gain.linearRampToValueAtTime(n,u+Math.min(.006,e/4)),h.gain.exponentialRampToValueAtTime(1e-4,u+e),f.connect(h),h.connect(o==="music"?this.music:this.fx),f.start(u),f.stop(u+e+.025),f.onended=()=>{f.disconnect(),h.disconnect()}}burst(t,e,n,i=0,s,a="fx"){const o=this.context;if(!o||!this.noise||!this.fx||!this.music)return;const c=s??o.currentTime+i,l=o.createBufferSource(),u=o.createBiquadFilter(),f=o.createGain();l.buffer=this.noise,u.type="lowpass",u.frequency.setValueAtTime(n,c),u.Q.value=.4,f.gain.setValueAtTime(e,c),f.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(u),u.connect(f),f.connect(a==="music"?this.music:this.fx),l.start(c,Math.random()),l.stop(c+t+.025),l.onended=()=>{l.disconnect(),u.disconnect(),f.disconnect()}}shot(t){switch(t){case"revolver":this.burst(.13,.34,4800),this.tone(180,.11,.24,"triangle",42),this.tone(1280,.027,.065,"square",190);break;case"shotgun":this.burst(.25,.48,3900),this.tone(130,.2,.28,"triangle",28),this.burst(.05,.09,1800,.23),this.burst(.08,.11,2900,.37);break;case"plasma":this.tone(980,.14,.14,"sawtooth",140),this.tone(1450,.08,.07,"triangle",260),this.burst(.07,.06,4400);break;case"machinegun":this.burst(.075,.27,4200),this.tone(157,.065,.16,"triangle",46),this.tone(970,.017,.07,"square",380);break}}chime(t,e,n){t.forEach((i,s)=>this.tone(i,.42,n,"triangle",i,s*e))}ambientBeat(t,e){const n=this.beat%32,s=[55,55,65.406,49][Math.floor(n/8)];if(n%4===0&&this.tone(s,.48,.21,"triangle",s,0,"music",t),n%8===4&&this.tone(s*2,.35,.1,"triangle",s*2,0,"music",t),n%4===2&&this.burst(.035,.022,2100,0,t,"music"),n===2||n===11||n===18||n===27){const a=[220,261.626,293.665,196][Math.floor(n/8)];this.tone(a,.8,.055,"triangle",a,0,"music",t),this.tone(a*1.005,.65,.025,"sine",a*1.005,0,"music",t+.12)}e.enemies.some(a=>a.alive&&a.alert)&&n%2===0&&this.tone(75,.085,.1,"sine",30,0,"music",t)}}const Fa=document.querySelector("#world"),z0=document.querySelector("#weapon");let Te,qs,ti=!1,Zi=performance.now(),si=!1;const ri=new B0,Vn=new U0(Fa,es),k0=new O0(z0),un=new F0({start:Xl,resume:H0,restart:V0,menu:W0,pause:es,settings:ql});Te=new Vl(Ie,un.settings.difficulty);function G0(){try{localStorage.setItem("fossil-noir-3d-checkpoint",JSON.stringify({version:1,difficulty:Te.state.difficulty}))}catch{}}function Wl(){try{return JSON.parse(localStorage.getItem("fossil-noir-3d-checkpoint")||"null")?.version===1}catch{return!1}}function Wn(r){ti=r==="playing",Vn.enabled=ti,Vn.clear(),un.show(r),ti||(Vn.release(),ri.suspend())}function Xl(r=!1){si||(Te=new Vl(Ie,un.settings.difficulty),r&&Wl()&&Te.restart(!0),ri.unlock(),Wn("playing"),Vn.capture(),Zi=performance.now())}function H0(){si||Te.state.status!=="playing"||(ri.unlock(),Wn("playing"),Vn.capture(),Zi=performance.now())}function es(){ti&&Wn("pause")}function V0(r=!1){if(!si){if(!r){Xl(!1);return}Te.restart(r&&(Te.state.checkpoint||Wl())),ri.unlock(),Wn("playing"),Vn.capture(),Zi=performance.now()}}function W0(){Wn("menu")}function ql(r){Vn.sensitivity=r.sensitivity,ri.setVolume(r.volume),qs?.resize(r)}try{qs=new L0(Fa),ql(un.settings),un.show("menu")}catch(r){si=!0,un.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${r instanceof Error?r.message:""}`)}function Yl(r){const t=Math.min(Math.max((r-Zi)/1e3,0),.05);if(Zi=r,!si)try{if(ti){Te.update(t,Vn.read());for(const e of Te.state.events)e.type==="checkpoint"&&G0();if(ri.handle(Te.state.events),Te.state.events.length=0,ri.tick(Te.state,t),Te.state.status==="dead"&&Wn("dead"),Te.state.status==="complete"){try{localStorage.setItem("fossil-noir-3d-best",String(Math.floor(Te.state.time)))}catch{}Wn("complete")}}qs.render(Te.state,ti?t:0,un.settings),k0.render(Te.state,ti?t:0),un.update(Te.state)}catch(e){console.error("Fossil Noir 3D runtime error",e),si=!0,Wn("menu"),un.setError("The mission could not continue. Reload this page to restart.")}requestAnimationFrame(Yl)}window.addEventListener("resize",()=>qs?.resize(un.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&es()});window.addEventListener("blur",es);Fa.addEventListener("webglcontextlost",r=>{r.preventDefault(),es(),si=!0,un.setError("Graphics context lost. Reload the page to recover the mission.")});requestAnimationFrame(Yl);
