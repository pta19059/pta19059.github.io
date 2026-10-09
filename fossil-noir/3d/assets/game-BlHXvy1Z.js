(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const el=[],we=(s,e,t,n,i=4.2,r="concrete",a)=>el.push({x:s,z:e,w:t,d:n,h:i,material:r,...a===void 0?{}:{y:a}});we(0,12.3,11,.6,4,"brick");we(-5.3,8,.6,8.6,4,"brick");we(5.3,8,.6,8.6,4,"brick");we(-3.4,4,3.8,.6,4,"brick");we(3.4,4,3.8,.6,4,"brick");we(0,4,3,.6,.8,"brick",3.2);we(-13.3,0,.6,8,6.5,"brick");we(-13.3,-13.5,.6,7,6.5,"brick");we(-13.3,-18.7,.6,3.4,6.5,"brick");we(-13.3,-4.6,.6,2.2,6.5,"brick");we(-13.3,-9.4,.6,2.2,6.5,"brick");we(-17.3,-7,.6,6.6,4,"brick");we(-15.2,-3.7,4.8,.6,4,"brick");we(-15.2,-10.3,4.8,.6,4,"brick");we(13.3,-8,.6,24,7.2,"brick");we(-9.5,4,7,.6,5.5,"brick");we(9.5,4,7,.6,5.5,"brick");we(-8,-20,12,.7,6,"metal");we(8,-20,12,.7,6,"metal");we(0,-20,4,.7,2.4,"metal",3.2);we(-7.3,-26,.6,12.6,4.5,"metal");we(7.3,-23,.6,6,4.5,"metal");we(7.3,-30.5,.6,3,4.5,"metal");we(7.3,-27.4,.6,3,1.5,"metal",3);we(11.2,-23.9,8.4,.6,4.5,"metal");we(15.3,-27.9,.6,8.6,4.5,"metal");we(11.2,-32.2,8.4,.6,4.5,"metal");we(-5.8,-32.2,8.6,.6,4.5,"metal");we(5.8,-32.2,8.6,.6,4.5,"metal");we(0,-32.2,3,.6,1.3,"metal",3.2);we(-10.3,-39.2,.6,14.6,4.5,"metal");we(10.3,-39.2,.6,14.6,4.5,"metal");we(-11,-46,.6,1.2,4.5,"metal");we(-10,-46,2,.6,4.5,"metal");we(2.8,-46,15.6,.6,4.5,"metal");we(-7,-46,4,.6,1.3,"metal",3.2);we(-11.3,-49,.6,6.6,4.5,"metal");we(-2.7,-49,.6,6.6,4.5,"metal");we(-7,-52.3,9.2,.6,4.5,"metal");we(-3.2,8,2.2,1.1,.85,"crate");we(3.8,10,1.2,2.2,1.5,"crate");we(-8,-4,2.4,1.4,1.1,"crate");we(-7,-10,2,3.6,1.1,"metal");we(3.8,-13,2.4,1.6,1.7,"crate");we(5,-14.5,1.6,1.5,1.1,"crate");we(-4.7,-18,2.4,1.3,1.3,"crate");we(4.5,-23.8,1.8,1.8,1.2,"crate");we(-4.4,-26.8,2.2,1.4,1.25,"metal");we(12,-25.9,3.3,1,1.1,"metal");we(-6.7,-34.5,2.2,1.5,1.2,"metal");we(5,-36,2.4,1.2,1.2,"metal");we(0,-40,3.5,1.4,1.1,"metal");we(-7.5,-42.8,1.3,2.4,1.5,"crate");const Ft={walls:el,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",x:2,z:6.7},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",x:-10.5,z:-5.3},{id:"street-ammo2",kind:"ammo",x:5.8,z:-12},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",x:5.8,z:-28.5},{id:"lobby-ammo2",kind:"ammo",x:-5.7,z:-29.5},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",x:10,z:-30.7},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",x:4.7,z:-34.5},{id:"lab-ammo2",kind:"ammo",x:-8,z:-37},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",x:-5,z:-44.5},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"barrels",x:11.7,z:-12},{kind:"barrels",x:-11,z:-19},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="186",$l=0,$a=1,Zl=2,Es=1,Jl=2,zi=3,Qn=0,Ot=1,Yt=2,An=0,Gi=1,Za=2,Ja=3,Qa=4,Ql=5,Ei=100,jl=101,ec=102,tc=103,nc=104,ic=200,sc=201,rc=202,ac=203,tl=204,nl=205,oc=206,lc=207,cc=208,hc=209,uc=210,dc=211,fc=212,pc=213,mc=214,br=0,Tr=1,Ar=2,Hi=3,wr=4,Rr=5,Cr=6,Pr=7,fa=0,gc=1,_c=2,sn=0,il=1,sl=2,rl=3,al=4,ol=5,ll=6,cl=7,hl=300,jn=301,wi=302,Vs=303,Ws=304,Os=306,Cs=1e3,Tn=1001,Lr=1002,dt=1003,xc=1004,es=1005,Ct=1006,Xs=1007,Kn=1008,Wt=1009,ul=1010,dl=1011,Vi=1012,pa=1013,pn=1014,tn=1015,mn=1016,ma=1017,ga=1018,Wi=1020,fl=35902,pl=35899,ml=1021,gl=1022,nn=1023,Rn=1026,$n=1027,_a=1028,xa=1029,ei=1030,va=1031,Sa=1033,bs=33776,Ts=33777,As=33778,ws=33779,Ir=35840,Dr=35841,Ur=35842,Nr=35843,Fr=36196,Or=37492,Br=37496,zr=37488,kr=37489,Ps=37490,Gr=37491,Hr=37808,Vr=37809,Wr=37810,Xr=37811,qr=37812,Yr=37813,Kr=37814,$r=37815,Zr=37816,Jr=37817,Qr=37818,jr=37819,ea=37820,ta=37821,na=36492,ia=36494,sa=36495,ra=36283,aa=36284,Ls=36285,oa=36286,vc=3200,la=0,Sc=1,zn="",Rt="srgb",Is="srgb-linear",Ds="linear",Je="srgb",qs=7680,Mc=519,yc=512,Ec=513,bc=514,Ma=515,Tc=516,Ac=517,ya=518,wc=519,Rc=35044,Cc=35048,ja="300 es",fn=2e3,Xi=2001;function Pc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lc(){const s=Us("canvas");return s.style.display="block",s}const eo={};function to(...s){const e="THREE."+s.shift();console.log(e,...s)}function _l(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=_l(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qe(...s){s=_l(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ti(...s){const e=s.join(" ");e in eo||(eo[e]=!0,Ce(...s))}function Ic(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Dc={[br]:Tr,[Ar]:Cr,[wr]:Pr,[Hi]:Rr,[Tr]:br,[Cr]:Ar,[Pr]:wr,[Rr]:Hi};class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,ca=180/Math.PI;function Ki(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function He(s,e,t){return Math.max(e,Math.min(t,s))}function Uc(s,e){return(s%e+e)%e}function Ks(s,e,t){return(1-t)*s+t*e}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ua=class Ua{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ua.prototype.isVector2=!0;let De=Ua;class si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==p||h!==x){let m=l*u+c*p+h*x+d*M;m<0&&(u=-u,p=-p,x=-x,M=-M,m=-m);let f=1-o;if(m<.9995){const E=Math.acos(m),w=Math.sin(E);f=Math.sin(f*E)/w,o=Math.sin(o*E)/w,l=l*f+u*o,c=c*f+p*o,h=h*f+x*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+x*o,d=d*f+M*o;const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*d+l*p-c*u,e[t+1]=l*x+h*u+c*d-o*p,e[t+2]=c*x+h*p+o*u-l*d,e[t+3]=h*x-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),p=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d-u*p*x;break;case"YXZ":this._x=u*h*d+c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d+u*p*x;break;case"ZXY":this._x=u*h*d-c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d-u*p*x;break;case"ZYX":this._x=u*h*d-c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d+u*p*x;break;case"YZX":this._x=u*h*d+c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d-u*p*x;break;case"XZY":this._x=u*h*d-c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d+u*p*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Na=class Na{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Na.prototype.isVector3=!0;let O=Na;const $s=new O,no=new si,Fa=class Fa{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],x=n[8],M=i[0],m=i[3],f=i[6],E=i[1],w=i[4],S=i[7],y=i[2],T=i[5],R=i[8];return r[0]=a*M+o*E+l*y,r[3]=a*m+o*w+l*T,r[6]=a*f+o*S+l*R,r[1]=c*M+h*E+d*y,r[4]=c*m+h*w+d*T,r[7]=c*f+h*S+d*R,r[2]=u*M+p*E+x*y,r[5]=u*m+p*w+x*T,r[8]=u*f+p*S+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,x=t*d+n*u+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=d*M,e[1]=(i*c-h*n)*M,e[2]=(o*n-i*a)*M,e[3]=u*M,e[4]=(h*t-i*l)*M,e[5]=(i*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fa.prototype.isMatrix3=!0;let Le=Fa;const Zs=new Le,io=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),so=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nc(){const s={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?Ds:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Is]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}const Ge=Nc();function wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ai(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class Fc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{li===void 0&&(li=Us("canvas")),li.width=e.width,li.height=e.height;const i=li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oc=0;class Ea{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Js(i[a].image)):r.push(Js(i[a]))}else r=Js(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Bc=0;const Qs=new O;class Pt extends ii{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Tn,i=Tn,r=Ct,a=Kn,o=nn,l=Wt,c=Pt.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ki(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qs).x}get height(){return this.source.getSize(Qs).y}get depth(){return this.source.getSize(Qs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=hl;Pt.DEFAULT_ANISOTROPY=1;const Oa=class Oa{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],x=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(p+1)/2,y=(f+1)/2,T=(h+u)/4,R=(d+M)/4,_=(x+m)/4;return w>S&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=R/n):S>y?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=R/r,i=_/r),this.set(n,i,r,t),this}let E=Math.sqrt((m-x)*(m-x)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(d-M)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oa.prototype.isVector4=!0;let ct=Oa;class zc extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Pt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ea(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xl extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Fs=class Fs{constructor(e,t,n,i,r,a,o,l,c,h,d,u,p,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,p,x,M,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,p,x,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=x,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),a=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,x=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+x*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,x=c*h,M=c*d;t[0]=u+M*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,x=c*h,M=c*d;t[0]=u-M*o,t[4]=-a*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,x=o*h,M=o*d;t[0]=l*h,t[4]=x*c-p,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=M-u*d,t[8]=x*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+x,t[10]=u-M*d}else if(e.order==="XZY"){const u=a*l,p=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=a*h,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gc,e,Hc)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Dn.crossVectors(n,zt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Dn.crossVectors(n,zt)),Dn.normalize(),ts.crossVectors(zt,Dn),i[0]=Dn.x,i[4]=ts.x,i[8]=zt.x,i[1]=Dn.y,i[5]=ts.y,i[9]=zt.y,i[2]=Dn.z,i[6]=ts.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],x=n[2],M=n[6],m=n[10],f=n[14],E=n[3],w=n[7],S=n[11],y=n[15],T=i[0],R=i[4],_=i[8],b=i[12],C=i[1],P=i[5],N=i[9],B=i[13],U=i[2],G=i[6],$=i[10],V=i[14],ne=i[3],X=i[7],Q=i[11],j=i[15];return r[0]=a*T+o*C+l*U+c*ne,r[4]=a*R+o*P+l*G+c*X,r[8]=a*_+o*N+l*$+c*Q,r[12]=a*b+o*B+l*V+c*j,r[1]=h*T+d*C+u*U+p*ne,r[5]=h*R+d*P+u*G+p*X,r[9]=h*_+d*N+u*$+p*Q,r[13]=h*b+d*B+u*V+p*j,r[2]=x*T+M*C+m*U+f*ne,r[6]=x*R+M*P+m*G+f*X,r[10]=x*_+M*N+m*$+f*Q,r[14]=x*b+M*B+m*V+f*j,r[3]=E*T+w*C+S*U+y*ne,r[7]=E*R+w*P+S*G+y*X,r[11]=E*_+w*N+S*$+y*Q,r[15]=E*b+w*B+S*V+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],x=e[3],M=e[7],m=e[11],f=e[15],E=l*p-c*u,w=o*p-c*d,S=o*u-l*d,y=a*p-c*h,T=a*u-l*h,R=a*d-o*h;return t*(M*E-m*w+f*S)-n*(x*E-m*y+f*T)+i*(x*w-M*y+f*R)-r*(x*S-M*T+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],x=e[12],M=e[13],m=e[14],f=e[15],E=t*o-n*a,w=t*l-i*a,S=t*c-r*a,y=n*l-i*o,T=n*c-r*o,R=i*c-r*l,_=h*M-d*x,b=h*m-u*x,C=h*f-p*x,P=d*m-u*M,N=d*f-p*M,B=u*f-p*m,U=E*B-w*N+S*P+y*C-T*b+R*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/U;return e[0]=(o*B-l*N+c*P)*G,e[1]=(i*N-n*B-r*P)*G,e[2]=(M*R-m*T+f*y)*G,e[3]=(u*T-d*R-p*y)*G,e[4]=(l*C-a*B-c*b)*G,e[5]=(t*B-i*C+r*b)*G,e[6]=(m*S-x*R-f*w)*G,e[7]=(h*R-u*S+p*w)*G,e[8]=(a*N-o*C+c*_)*G,e[9]=(n*C-t*N-r*_)*G,e[10]=(x*T-M*S+f*E)*G,e[11]=(d*S-h*T-p*E)*G,e[12]=(o*b-a*P-l*_)*G,e[13]=(t*P-n*b+i*_)*G,e[14]=(M*w-x*y-m*E)*G,e[15]=(h*y-d*w+u*E)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,x=r*d,M=a*h,m=a*d,f=o*d,E=l*c,w=l*h,S=l*d,y=n.x,T=n.y,R=n.z;return i[0]=(1-(M+f))*y,i[1]=(p+S)*y,i[2]=(x-w)*y,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(u+f))*T,i[6]=(m+E)*T,i[7]=0,i[8]=(x+w)*R,i[9]=(m-E)*R,i[10]=(1-(u+M))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),l=ci.set(i[8],i[9],i[10]).length();r<0&&(a=-a),$t.copy(this);const c=1/a,h=1/o,d=1/l;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=fn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===fn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Xi)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=fn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),p=-(n+i)/(n-i);let x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===fn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Xi)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fs.prototype.isMatrix4=!0;let st=Fs;const ci=new O,$t=new st,Gc=new O(0,0,0),Hc=new O(1,1,1),Dn=new O,ts=new O,zt=new O,ro=new st,ao=new si;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vc=0;const oo=new O,hi=new si,_n=new st,ns=new O,Li=new O,Wc=new O,Xc=new si,lo=new O(1,0,0),co=new O(0,1,0),ho=new O(0,0,1),uo={type:"added"},qc={type:"removed"},ui={type:"childadded",child:null},js={type:"childremoved",child:null};class Et extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new O,t=new Cn,n=new si,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new Le}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Li,ns,this.up):_n.lookAt(ns,Li,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(_n),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uo),ui.child=e,this.dispatchEvent(ui),ui.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qc),js.child=e,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uo),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Et.DEFAULT_UP=new O(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ht extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yc={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},is={h:0,s:0,l:0};function tr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=Uc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=tr(a,r,e+1/3),this.g=tr(a,r,e),this.b=tr(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Sl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ge.workingToColorSpace(wt.copy(this),e),Math.round(He(wt.r*255,0,255))*65536+Math.round(He(wt.g*255,0,255))*256+Math.round(He(wt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Rt){Ge.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(is);const n=Ks(Un.h,is.h,t),i=Ks(Un.s,is.s,t),r=Ks(Un.l,is.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new ze;ze.NAMES=Sl;class ba{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kc extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zt=new O,xn=new O,nr=new O,vn=new O,di=new O,fi=new O,fo=new O,ir=new O,sr=new O,rr=new O,ar=new ct,or=new ct,lr=new ct;class en{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zt.subVectors(e,t),i.cross(Zt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zt.subVectors(i,t),xn.subVectors(n,t),nr.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(xn),l=Zt.dot(nr),c=xn.dot(xn),h=xn.dot(nr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ar.setScalar(0),or.setScalar(0),lr.setScalar(0),ar.fromBufferAttribute(e,t),or.fromBufferAttribute(e,n),lr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ar,r.x),a.addScaledVector(or,r.y),a.addScaledVector(lr,r.z),a}static isFrontFacing(e,t,n,i){return Zt.subVectors(n,t),xn.subVectors(e,t),Zt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Zt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;di.subVectors(i,n),fi.subVectors(r,n),ir.subVectors(e,n);const l=di.dot(ir),c=fi.dot(ir);if(l<=0&&c<=0)return t.copy(n);sr.subVectors(e,i);const h=di.dot(sr),d=fi.dot(sr);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(di,a);rr.subVectors(e,r);const p=di.dot(rr),x=fi.dot(rr);if(x>=0&&p<=x)return t.copy(r);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(fi,o);const m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return fo.subVectors(r,i),o=(d-h)/(d-h+(p-x)),t.copy(i).addScaledVector(fo,o);const f=1/(m+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ri{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),rs.subVectors(this.max,Ii),pi.subVectors(e.a,Ii),mi.subVectors(e.b,Ii),gi.subVectors(e.c,Ii),Nn.subVectors(mi,pi),Fn.subVectors(gi,mi),Vn.subVectors(pi,gi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Vn.z,Vn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Vn.z,0,-Vn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Vn.y,Vn.x,0];return!cr(t,pi,mi,gi,rs)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,pi,mi,gi,rs))?!1:(as.crossVectors(Nn,Fn),t=[as.x,as.y,as.z],cr(t,pi,mi,gi,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new O,new O,new O,new O,new O,new O,new O,new O],Jt=new O,ss=new ri,pi=new O,mi=new O,gi=new O,Nn=new O,Fn=new O,Vn=new O,Ii=new O,rs=new O,as=new O,Wn=new O;function cr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);const o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gt=new O,os=new De;let $c=0;class an extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$c++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ml extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Zc=new ri,Di=new O,hr=new O;class $i{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(hr)),this.expandByPoint(Di.copy(e.center).sub(hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jc=0;const qt=new st,ur=new Et,_i=new O,kt=new ri,Ui=new ri,Mt=new O;class Bt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?yl:Ml)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return ur.lookAt(e),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(kt.min,Ui.min),kt.expandByPoint(Mt),Mt.addVectors(kt.max,Ui.max),kt.expandByPoint(Mt)):(kt.expandByPoint(Ui.min),kt.expandByPoint(Ui.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),Mt.add(_i)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new O,l[_]=new O;const c=new O,h=new O,d=new O,u=new De,p=new De,x=new De,M=new O,m=new O;function f(_,b,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,C),h.sub(c),d.sub(c),p.sub(u),x.sub(u);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),o[_].add(M),o[b].add(M),o[C].add(M),l[_].add(m),l[b].add(m),l[C].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,b=E.length;_<b;++_){const C=E[_],P=C.start,N=C.count;for(let B=P,U=P+N;B<U;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new O,S=new O,y=new O,T=new O;function R(_){y.fromBufferAttribute(i,_),T.copy(y);const b=o[_];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),S.crossVectors(T,b);const P=S.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,b=E.length;_<b;++_){const C=E[_],P=C.start,N=C.count;for(let B=P,U=P+N;B<U;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[x++]=c[p++]}return new an(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dr=new O,Qc=new O,jc=new Le;class Bn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dr.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(dr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jc.getNormalMatrix(e),i=this.coplanarPoint(dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let eh=0;class Zi extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Gi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mn=new O,fr=new O,ls=new O,cs=new O;class th{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fr.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(fr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=cs.dot(this.direction),l=-cs.dot(ls),c=cs.lengthSq(),h=Math.abs(1-a*a);let d,u,p,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){const M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(fr).addScaledVector(ls,u),p}intersectSphere(e,t){if(e.radius<0)return null;Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,x=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,E=n.y-a.y,w=n.z-a.z,S=Math.abs(l),y=Math.abs(c),T=Math.abs(h);let R,_,b,C,P,N,B,U,G,$,V,ne;if(S>=y&&S>=T?(b=l,N=d,G=x,ne=f,l>=0?(R=c,_=h,C=u,P=p,B=M,U=m,$=E,V=w):(R=h,_=c,C=p,P=u,B=m,U=M,$=w,V=E)):y>=T?(b=c,N=u,G=M,ne=E,c>=0?(R=h,_=l,C=p,P=d,B=m,U=x,$=w,V=f):(R=l,_=h,C=d,P=p,B=x,U=m,$=f,V=w)):(b=h,N=p,G=m,ne=w,h>=0?(R=l,_=c,C=d,P=u,B=x,U=M,$=f,V=E):(R=c,_=l,C=u,P=d,B=M,U=x,$=E,V=f)),b===0)return null;const X=R/b,Q=_/b,j=1/b,Te=C-X*N,Me=P-Q*N,et=B-X*G,Ve=U-Q*G,Ye=$-X*ne,Y=V-Q*ne,ee=Ye*Ve-Y*et,_e=Te*Y-Me*Ye,Pe=et*Me-Ve*Te;if(i){if(ee<0||_e<0||Pe<0)return null}else if((ee<0||_e<0||Pe<0)&&(ee>0||_e>0||Pe>0))return null;const me=ee+_e+Pe;if(me===0)return null;const Fe=j*(ee*N+_e*G+Pe*ne);return(me>0?Fe<0:Fe>0)?null:this.at(Fe/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const po=new st,Xn=new th,hs=new $i,mo=new O,us=new O,ds=new O,fs=new O,pr=new O,ps=new O,go=new O,ms=new O;class ut extends Et{constructor(e=new Bt,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(pr.fromBufferAttribute(d,e),a?ps.addScaledVector(pr,h):ps.addScaledVector(pr.sub(t),h))}t.add(ps)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(hs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(hs,mo)===null||Xn.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const m=u[x],f=a[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,y=w;S<y;S+=3){const T=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);i=gs(this,f,e,n,c,h,d,T,R,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){const E=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);i=gs(this,a,e,n,c,h,d,E,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){const m=u[x],f=a[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,y=w;S<y;S+=3){const T=S,R=S+1,_=S+2;i=gs(this,f,e,n,c,h,d,T,R,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){const E=m,w=m+1,S=m+2;i=gs(this,a,e,n,c,h,d,E,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function nh(s,e,t,n,i,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Qn,o),l===null)return null;ms.copy(o),ms.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:s}}function gs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,us),s.getVertexPosition(l,ds),s.getVertexPosition(c,fs);const h=nh(s,e,t,n,us,ds,fs,go);if(h){const d=new O;en.getBarycoord(go,us,ds,fs,d),i&&(h.uv=en.getInterpolatedAttribute(i,o,l,c,d,new De)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,l,c,d,new De)),a&&(h.normal=en.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};en.getNormal(us,ds,fs,u.normal),h.face=u,h.barycoord=d}return h}class El extends Pt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=dt,h=dt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o extends an{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new st,xo=new st,_s=[],vo=new ri,ih=new st,Ni=new ut,Fi=new $i;class sh extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ih)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),vo.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(vo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Fi.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xi),xo.multiplyMatrices(n,xi),Ni.matrixWorld=xo,Ni.raycast(e,_s);for(let a=0,o=_s.length;a<o;a++){const l=_s[a];l.instanceId=r,l.object=this,t.push(l)}_s.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new El(new Float32Array(i*this.count),i,this.count,_a,tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qn=new $i,rh=new De(.5,.5),xs=new O;class Ta{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],x=r[8],M=r[9],m=r[10],f=r[11],E=r[12],w=r[13],S=r[14],y=r[15];if(i[0].setComponents(c-a,p-h,f-x,y-E).normalize(),i[1].setComponents(c+a,p+h,f+x,y+E).normalize(),i[2].setComponents(c+o,p+d,f+M,y+w).normalize(),i[3].setComponents(c-o,p-d,f-M,y-w).normalize(),n)i[4].setComponents(l,u,m,S).normalize(),i[5].setComponents(c-l,p-u,f-m,y-S).normalize();else if(i[4].setComponents(c-l,p-u,f-m,y-S).normalize(),t===fn)i[5].setComponents(c+l,p+u,f+m,y+S).normalize();else if(t===Xi)i[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);const t=rh.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xs.x=i.normal.x>0?e.max.x:e.min.x,xs.y=i.normal.y>0?e.max.y:e.min.y,xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bl extends Pt{constructor(e=[],t=jn,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Aa extends Pt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi extends Pt{constructor(e,t,n=pn,i,r,a,o=dt,l=dt,c,h=Rn,d=1){if(h!==Rn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ea(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ah extends qi{constructor(e,t=pn,n=jn,i,r,a=dt,o=dt,l,c=Rn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tl extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jt extends Bt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function x(M,m,f,E,w,S,y,T,R,_,b){const C=S/R,P=y/_,N=S/2,B=y/2,U=T/2,G=R+1,$=_+1;let V=0,ne=0;const X=new O;for(let Q=0;Q<$;Q++){const j=Q*P-B;for(let Te=0;Te<G;Te++){const Me=Te*C-N;X[M]=Me*E,X[m]=j*w,X[f]=U,c.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[f]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(Te/R),d.push(1-Q/_),V+=1}}for(let Q=0;Q<_;Q++)for(let j=0;j<R;j++){const Te=u+j+G*Q,Me=u+j+G*(Q+1),et=u+(j+1)+G*(Q+1),Ve=u+(j+1)+G*Q;l.push(Te,Me,Ve),l.push(Me,et,Ve),ne+=6}o.addGroup(p,ne,b),p+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wa extends Bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,h=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gt extends Bt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let x=0;const M=[],m=n/2;let f=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(p,2));function E(){const S=new O,y=new O;let T=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const b=[],C=_/r,P=C*(t-e)+e;for(let N=0;N<=i;N++){const B=N/i,U=B*l+o,G=Math.sin(U),$=Math.cos(U);y.x=P*G,y.y=-C*n+m,y.z=P*$,d.push(y.x,y.y,y.z),S.set(G,R,$).normalize(),u.push(S.x,S.y,S.z),p.push(B,1-C),b.push(x++)}M.push(b)}for(let _=0;_<i;_++)for(let b=0;b<r;b++){const C=M[b][_],P=M[b+1][_],N=M[b+1][_+1],B=M[b][_+1];(e>0||b!==0)&&(h.push(C,P,B),T+=3),(t>0||b!==r-1)&&(h.push(P,N,B),T+=3)}c.addGroup(f,T,0),f+=T}function w(S){const y=x,T=new De,R=new O;let _=0;const b=S===!0?e:t,C=S===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),x++;const P=x;for(let N=0;N<=i;N++){const U=N/i*l+o,G=Math.cos(U),$=Math.sin(U);R.x=b*$,R.y=m*C,R.z=b*G,d.push(R.x,R.y,R.z),u.push(0,C,0),T.x=G*.5+.5,T.y=$*.5*C+.5,p.push(T.x,T.y),x++}for(let N=0;N<i;N++){const B=y+N,U=P+N;S===!0?h.push(U,U+1,B):h.push(U+1,U,B),_+=3}c.addGroup(f,_,S===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends Gt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ns(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ra extends Bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const w=new O,S=new O,y=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],w),p(t[T+1],S),p(t[T+2],y),l(w,S,y,E)}function l(E,w,S,y){const T=y+1,R=[];for(let _=0;_<=T;_++){R[_]=[];const b=E.clone().lerp(S,_/T),C=w.clone().lerp(S,_/T),P=T-_;for(let N=0;N<=P;N++)N===0&&_===T?R[_][N]=b:R[_][N]=b.clone().lerp(C,N/P)}for(let _=0;_<T;_++)for(let b=0;b<2*(T-_)-1;b++){const C=Math.floor(b/2);b%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function c(E){const w=new O;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(E),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function h(){const E=new O;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];const S=m(E)/2/Math.PI+.5,y=f(E)/Math.PI+.5;a.push(S,1-y)}x(),d()}function d(){for(let E=0;E<a.length;E+=6){const w=a[E+0],S=a[E+2],y=a[E+4],T=Math.max(w,S,y),R=Math.min(w,S,y);T>.9&&R<.1&&(w<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),y<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function p(E,w){const S=E*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function x(){const E=new O,w=new O,S=new O,y=new O,T=new De,R=new De,_=new De;for(let b=0,C=0;b<r.length;b+=9,C+=6){E.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),T.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),y.copy(E).add(w).add(S).divideScalar(3);const P=m(y);M(T,C+0,E,P),M(R,C+2,w,P),M(_,C+4,S,P)}}function M(E,w,S,y){y<0&&E.x===1&&(a[w]=E.x-1),S.x===0&&S.z===0&&(a[w]=y/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.vertices,e.indices,e.radius,e.detail)}}class Ca extends Ra{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ca(e.radius,e.detail)}}class Zn extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],x=[],M=[],m=[];for(let f=0;f<h;f++){const E=f*u-a;for(let w=0;w<c;w++){const S=w*d-r;x.push(S,-E,0),M.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const w=E+c*f,S=E+c*(f+1),y=E+1+c*(f+1),T=E+1+c*f;p.push(w,S,T),p.push(S,y,T)}this.setIndex(p),this.setAttribute("position",new ft(x,3)),this.setAttribute("normal",new ft(M,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends Bt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,p=new O,x=new De;for(let M=0;M<=i;M++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let M=0;M<i;M++){const m=M*(n+1);for(let f=0;f<n;f++){const E=f+m,w=E,S=E+n+1,y=E+n+2,T=E+1;o.push(w,S,T),o.push(S,y,T)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Ri(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(So(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(So(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=Ri(s[t]);for(const i in n)e[i]=n[i]}return e}function So(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function oh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Al(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const lh={clone:Ri,merge:Dt};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(i.value);break;case"v2":this.uniforms[n].value=new De().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m4":this.uniforms[n].value=new st().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class uh extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mo extends Zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dh extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fh extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class La extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ph extends La{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mr=new st,yo=new O,Eo=new O;class wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Xi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vs=new O,Ss=new si,hn=new O;class Rl extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vs,Ss,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ss,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vs,Ss,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ss,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const On=new O,bo=new De,To=new De;class Vt extends Rl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,bo,To),t.subVectors(To,bo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mh extends wl{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}}class gh extends La{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ia extends Rl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _h extends wl{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new _h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const vi=-90,Si=1;class xh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(vi,Si,e,t);i.layers=this.layers,this.add(i);const r=new Vt(vi,Si,e,t);r.layers=this.layers,this.add(r);const a=new Vt(vi,Si,e,t);a.layers=this.layers,this.add(a);const o=new Vt(vi,Si,e,t);o.layers=this.layers,this.add(o);const l=new Vt(vi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Vt(vi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class vh extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ba=class Ba{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Ba.prototype.isMatrix2=!0;let wo=Ba;function Ro(s,e,t,n){const i=Sh(n);switch(t){case ml:return s*e;case _a:return s*e/i.components*i.byteLength;case xa:return s*e/i.components*i.byteLength;case ei:return s*e*2/i.components*i.byteLength;case va:return s*e*2/i.components*i.byteLength;case gl:return s*e*3/i.components*i.byteLength;case nn:return s*e*4/i.components*i.byteLength;case Sa:return s*e*4/i.components*i.byteLength;case bs:case Ts:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case As:case ws:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dr:case Nr:return Math.max(s,16)*Math.max(e,8)/4;case Ir:case Ur:return Math.max(s,8)*Math.max(e,8)/2;case Fr:case Or:case zr:case kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Br:case Ps:case Gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $r:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ea:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ta:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case na:case ia:case sa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ra:case aa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ls:case oa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sh(s){switch(s){case Wt:case ul:return{byteLength:1,components:1};case Vi:case dl:case mn:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case pn:case pa:case tn:return{byteLength:4,components:1};case fl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cl(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mh(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<d.length;p++){const x=d[u],M=d[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,x=d.length;p<x;p++){const M=d[p];s.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
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
#endif`,bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
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
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
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
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
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
#endif`,Fh=`#ifdef USE_BUMPMAP
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xh=`#define PI 3.141592653589793
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
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yh=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",jh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vu=`PhysicalMaterial material;
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
#endif`,Su=`uniform sampler2D dfgLUT;
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
}`,Mu=`
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
#endif`,yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,od=`float getShadowMask() {
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ed=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
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
}`,Cd=`#if DEPTH_PACKING == 3200
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
}`,Pd=`#define DISTANCE
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
}`,Ld=`#define DISTANCE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`uniform float scale;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Od=`uniform vec3 diffuse;
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
}`,Bd=`#define LAMBERT
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
}`,zd=`#define LAMBERT
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
}`,kd=`#define MATCAP
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
}`,Gd=`#define MATCAP
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
}`,Hd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Wd=`#define PHONG
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
}`,Xd=`#define PHONG
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
}`,qd=`#define STANDARD
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
}`,Yd=`#define STANDARD
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
}`,Kd=`#define TOON
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
}`,$d=`#define TOON
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
}`,Zd=`uniform float size;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,jd=`uniform vec3 color;
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
}`,ef=`uniform float rotation;
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
}`,tf=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:yh,alphahash_pars_fragment:Eh,alphamap_fragment:bh,alphamap_pars_fragment:Th,alphatest_fragment:Ah,alphatest_pars_fragment:wh,aomap_fragment:Rh,aomap_pars_fragment:Ch,batching_pars_vertex:Ph,batching_vertex:Lh,begin_vertex:Ih,beginnormal_vertex:Dh,bsdfs:Uh,iridescence_fragment:Nh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:kh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:Kh,displacementmap_vertex:$h,emissivemap_fragment:Zh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:jh,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:pu,envmap_vertex:su,fog_vertex:ru,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:hu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:du,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:xu,lights_physical_fragment:vu,lights_physical_pars_fragment:Su,lights_fragment_begin:Mu,lights_fragment_maps:yu,lights_fragment_end:Eu,lightprobes_pars_fragment:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Pu,map_particle_fragment:Lu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Uu,morphinstance_vertex:Nu,morphcolor_vertex:Fu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:ku,normal_fragment_maps:Gu,normal_pars_fragment:Hu,normal_pars_vertex:Vu,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:Ku,iridescence_pars_fragment:$u,opaque_fragment:Zu,packing:Ju,premultiplied_alpha_fragment:Qu,project_vertex:ju,dithering_fragment:ed,dithering_pars_fragment:td,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:rd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:_d,uv_pars_fragment:xd,uv_pars_vertex:vd,uv_vertex:Sd,worldpos_vertex:Md,background_vert:yd,background_frag:Ed,backgroundCube_vert:bd,backgroundCube_frag:Td,cube_vert:Ad,cube_frag:wd,depth_vert:Rd,depth_frag:Cd,distance_vert:Pd,distance_frag:Ld,equirect_vert:Id,equirect_frag:Dd,linedashed_vert:Ud,linedashed_frag:Nd,meshbasic_vert:Fd,meshbasic_frag:Od,meshlambert_vert:Bd,meshlambert_frag:zd,meshmatcap_vert:kd,meshmatcap_frag:Gd,meshnormal_vert:Hd,meshnormal_frag:Vd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:qd,meshphysical_frag:Yd,meshtoon_vert:Kd,meshtoon_frag:$d,points_vert:Zd,points_frag:Jd,shadow_vert:Qd,shadow_frag:jd,sprite_vert:ef,sprite_frag:tf},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},dn={basic:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Dt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Dt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Dt([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Dt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Dt([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Dt([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Dt([he.common,he.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Dt([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};dn.physical={uniforms:Dt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ms={r:0,b:0,g:0},nf=new st,Pl=new Le;Pl.set(-1,0,0,0,1,0,0,0,1);function sf(s,e,t,n,i,r){const a=new ze(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function p(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const S=E.backgroundBlurriness>0;w=e.get(w,S)}return w}function x(E){let w=!1;const S=p(E);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(E,w){const S=p(w);S&&(S.isCubeTexture||S.mapping===Os)?(c===void 0&&(c=new ut(new jt(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ri(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nf.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pl),c.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Je,(h!==S||d!==S.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ut(new Zn(2,2),new gn({name:"BackgroundMaterial",uniforms:Ri(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,w){E.getRGB(Ms,Al(s)),t.buffers.color.setClear(Ms.r,Ms.g,Ms.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:x,addToRenderList:M,dispose:f}}function rf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(P,N,B,U,G){let $=!1;const V=d(P,U,B,N);r!==V&&(r=V,c(r.object)),$=p(P,U,B,G),$&&x(P,U,B,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(P,N,B,U),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,N,B,U){const G=U.wireframe===!0;let $=n[N.id];$===void 0&&($={},n[N.id]=$);const V=P.isInstancedMesh===!0?P.id:0;let ne=$[V];ne===void 0&&(ne={},$[V]=ne);let X=ne[B.id];X===void 0&&(X={},ne[B.id]=X);let Q=X[G];return Q===void 0&&(Q=u(l()),X[G]=Q),Q}function u(P){const N=[],B=[],U=[];for(let G=0;G<t;G++)N[G]=0,B[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:U,object:P,attributes:{},index:null}}function p(P,N,B,U){const G=r.attributes,$=N.attributes;let V=0;const ne=B.getAttributes();for(const X in ne)if(ne[X].location>=0){const j=G[X];let Te=$[X];if(Te===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),j===void 0||j.attribute!==Te||Te&&j.data!==Te.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function x(P,N,B,U){const G={},$=N.attributes;let V=0;const ne=B.getAttributes();for(const X in ne)if(ne[X].location>=0){let j=$[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const Te={};Te.attribute=j,j&&j.data&&(Te.data=j.data),G[X]=Te,V++}r.attributes=G,r.attributesNum=V,r.index=U}function M(){const P=r.newAttributes;for(let N=0,B=P.length;N<B;N++)P[N]=0}function m(P){f(P,0)}function f(P,N){const B=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;B[P]=1,U[P]===0&&(s.enableVertexAttribArray(P),U[P]=1),G[P]!==N&&(s.vertexAttribDivisor(P,N),G[P]=N)}function E(){const P=r.newAttributes,N=r.enabledAttributes;for(let B=0,U=N.length;B<U;B++)N[B]!==P[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function w(P,N,B,U,G,$,V){V===!0?s.vertexAttribIPointer(P,N,B,G,$):s.vertexAttribPointer(P,N,B,U,G,$)}function S(P,N,B,U){M();const G=U.attributes,$=B.getAttributes(),V=N.defaultAttributeValues;for(const ne in $){const X=$[ne];if(X.location>=0){let Q=G[ne];if(Q===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const j=Q.normalized,Te=Q.itemSize,Me=e.get(Q);if(Me===void 0)continue;const et=Me.buffer,Ve=Me.type,Ye=Me.bytesPerElement,Y=Ve===s.INT||Ve===s.UNSIGNED_INT||Q.gpuType===pa;if(Q.isInterleavedBufferAttribute){const ee=Q.data,_e=ee.stride,Pe=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)f(X.location+me,ee.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,et);for(let me=0;me<X.locationSize;me++)w(X.location+me,Te/X.locationSize,Ve,j,_e*Ye,(Pe+Te/X.locationSize*me)*Ye,Y)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)f(X.location+ee,Q.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ee=0;ee<X.locationSize;ee++)w(X.location+ee,Te/X.locationSize,Ve,j,Te*Ye,Te/X.locationSize*ee*Ye,Y)}}else if(V!==void 0){const j=V[ne];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(X.location,j);break;case 3:s.vertexAttrib3fv(X.location,j);break;case 4:s.vertexAttrib4fv(X.location,j);break;default:s.vertexAttrib1fv(X.location,j)}}}}E()}function y(){b();for(const P in n){const N=n[P];for(const B in N){const U=N[B];for(const G in U){const $=U[G];for(const V in $)h($[V].object),delete $[V];delete U[G]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const B in N){const U=N[B];for(const G in U){const $=U[G];for(const V in $)h($[V].object),delete $[V];delete U[G]}}delete n[P.id]}function R(P){for(const N in n){const B=n[N];for(const U in B){const G=B[U];if(G[P.id]===void 0)continue;const $=G[P.id];for(const V in $)h($[V].object),delete $[V];delete G[P.id]}}}function _(P){for(const N in n){const B=n[N],U=P.isInstancedMesh===!0?P.id:0,G=B[U];if(G!==void 0){for(const $ in G){const V=G[$];for(const ne in V)h(V[ne].object),delete V[ne];delete G[$]}delete B[U],Object.keys(B).length===0&&delete n[N]}}}function b(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function af(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function of(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==nn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wt&&R!==tn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:S,maxSamples:y,samples:T}}function lf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Bn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const x=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,w=E*4;let S=f.clippingState||null;l.value=S,S=h(x,u,w,p);for(let y=0;y!==w;++y)S[y]=t[y];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,x){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const f=p+M*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,S=p;w!==M;++w,S+=4)a.copy(d[w]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const bi=4,cf=6,hf=20,uf=256,Oi=new Ia,Co=new ze;let gr=null,_r=0,xr=0,vr=!1;const df=new O,Yn=new O;class Po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=df}=r;gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gr,_r,xr),this._renderer.xr.enabled=vr,e.scissorTest=!1,Mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:mn,format:nn,colorSpace:Is,depthBuffer:!1},i=Lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ff(r)),this._blurMaterial=mf(r,e,t),this._ggxMaterial=pf(r,e,t)}return i}_compileMaterial(e){const t=new ut(new Bt,e);this._renderer.compile(t,Oi)}_sceneToCubeUV(e,t,n,i,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Co),d.toneMapping=sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new jt,new bn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,f=!0):(m.color.copy(Co),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const y=this._cubeSize;Mi(i,S*y,w>2?y:0,y,y),d.setRenderTarget(i),f&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===jn||e.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Mi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:x}=this,M=this._sizeLods[n],m=3*M*(n>x-bi?n-x+bi:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Mi(r,m,f,3*M,2*M),i.setRenderTarget(r),i.render(o,Oi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Mi(e,m,f,3*M,2*M),i.setRenderTarget(e),i.render(o,Oi)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-bi?i-this._lodMax+bi:0),u=4*(this._cubeSize-h);Mi(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Oi)}}function ff(s){const e=[],t=[];let n=s;const i=s-bi+1+cf;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,x=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){const E=f%3*2/3-1,w=f>2?0:-1,S=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];x.set(S,p*u*f);for(let y=0;y<u;y++){const T=h[y*2]*2-1,R=h[y*2+1]*2-1;f===0?Yn.set(1,R,T):f===1?Yn.set(-T,1,-R):f===2?Yn.set(-T,R,1):f===3?Yn.set(-1,R,-T):f===4?Yn.set(-T,-1,R):Yn.set(T,R,-1),Yn.toArray(M,(f*u+y)*p)}}const m=new Bt;m.setAttribute("position",new an(x,p)),m.setAttribute("outputDirection",new an(M,p)),t.push(new ut(m,null)),n>bi&&n--}return{lodMeshes:t,sizeLods:e}}function Lo(s,e,t){const n=new rn(s,e,t);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function pf(s,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function mf(s,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:hf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Io(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Do(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Bs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ll extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jt(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:An});r.uniforms.tEquirect.value=t;const a=new ut(i,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Ct),new xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function gf(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Vs||p===Ws)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const M=new Ll(x.height);return M.fromEquirectangularTexture(s,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,x=p===Vs||p===Ws,M=p===jn||p===wi;if(x||M){let m=t.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Po(s)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return x&&E&&E.height>0||M&&E&&l(E)?(n===null&&(n=new Po(s)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Vs?u.mapping=jn:p===Ws&&(u.mapping=wi),u}function l(u){let p=0;const x=6;for(let M=0;M<x;M++)u[M]!==void 0&&p++;return p===x}function c(u){const p=u.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function _f(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ti("WebGLRenderer: "+n+" extension not supported."),i}}}function xf(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,x=d.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const E=p.array;M=p.version;for(let w=0,S=E.length;w<S;w+=3){const y=E[w+0],T=E[w+1],R=E[w+2];u.push(y,T,T,R,R,y)}}else{const E=x.array;M=x.version;for(let w=0,S=E.length/3-1;w<S;w+=3){const y=w+0,T=w+1,R=w+2;u.push(y,T,T,R,R,y)}}const m=new(x.count>=65535?yl:Ml)(u,1);m.version=M;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function vf(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,p){p!==0&&(s.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mf(s,e,t){const n=new WeakMap,i=new ct;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var p=C;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let y=o.attributes.position.count*S,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*T*4*d),_=new xl(R,y,T,d);_.type=tn,_.needsUpdate=!0;const b=S*4;for(let P=0;P<d;P++){const N=f[P],B=E[P],U=w[P],G=y*T*4*P;for(let $=0;$<N.count;$++){const V=$*b;x===!0&&(i.fromBufferAttribute(N,$),R[G+V+0]=i.x,R[G+V+1]=i.y,R[G+V+2]=i.z,R[G+V+3]=0),M===!0&&(i.fromBufferAttribute(B,$),R[G+V+4]=i.x,R[G+V+5]=i.y,R[G+V+6]=i.z,R[G+V+7]=0),m===!0&&(i.fromBufferAttribute(U,$),R[G+V+8]=i.x,R[G+V+9]=i.y,R[G+V+10]=i.z,R[G+V+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new De(y,T)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(s,"morphTargetBaseInfluence",M),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function yf(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Ef={[il]:"LINEAR_TONE_MAPPING",[sl]:"REINHARD_TONE_MAPPING",[rl]:"CINEON_TONE_MAPPING",[al]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[ol]:"CUSTOM_TONE_MAPPING"};function bf(s,e,t,n,i,r){const a=new rn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Bt;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));const h=new uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ut(c,h),u=new Ia(-1,1,1,-1,0,1);let p=null,x=null,M=!1,m,f=null,E=[],w=!1;this.setSize=function(S,y){a.setSize(S,y),o!==null&&o.setSize(S,y),l!==null&&l.setSize(S,y);for(let T=0;T<E.length;T++){const R=E[T];R.setSize&&R.setSize(S,y)}},this.setEffects=function(S){E=S,w=E.length>0&&E[0].isRenderPass===!0;const y=a.width,T=a.height;E.length>0&&o===null&&(o=new rn(y,T,{type:mn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(y,T,{type:mn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){const _=E[R];_.setSize&&_.setSize(y,T)}},this.begin=function(S,y){if(M||S.toneMapping===sn&&E.length===0)return!1;if(f=y,y!==null){const T=y.width,R=y.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return w===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=sn,!0},this.hasRenderPass=function(){return w},this.end=function(S,y){S.toneMapping=m,M=!0;let T=a,R=o;for(let _=0;_<E.length;_++){const b=E[_];b.enabled!==!1&&(b.render(S,R,T,y),b.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,h.defines={},Ge.getTransfer(p)===Je&&(h.defines.SRGB_TRANSFER="");const _=Ef[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(f),S.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Il=new Pt,ha=new qi(1,1),Dl=new xl,Ul=new kc,Nl=new bl,Uo=[],No=[],Fo=new Float32Array(16),Oo=new Float32Array(9),Bo=new Float32Array(4);function Ci(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Uo[i];if(r===void 0&&(r=new Float32Array(i),Uo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zs(s,e){let t=No[e];t===void 0&&(t=new Int32Array(e),No[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Tf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function Rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function Cf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Bo.set(n),s.uniformMatrix2fv(this.addr,!1,Bo),vt(t,n)}}function Pf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Oo.set(n),s.uniformMatrix3fv(this.addr,!1,Oo),vt(t,n)}}function Lf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Fo.set(n),s.uniformMatrix4fv(this.addr,!1,Fo),vt(t,n)}}function If(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function Nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Ff(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function kf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ha.compareFunction=t.isReversedDepthBuffer()?ya:Ma,r=ha):r=Il,t.setTexture2D(e||r,i)}function Gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ul,i)}function Hf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nl,i)}function Vf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dl,i)}function Wf(s){switch(s){case 5126:return Tf;case 35664:return Af;case 35665:return wf;case 35666:return Rf;case 35674:return Cf;case 35675:return Pf;case 35676:return Lf;case 5124:case 35670:return If;case 35667:case 35671:return Df;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Vf}}function Xf(s,e){s.uniform1fv(this.addr,e)}function qf(s,e){const t=Ci(e,this.size,2);s.uniform2fv(this.addr,t)}function Yf(s,e){const t=Ci(e,this.size,3);s.uniform3fv(this.addr,t)}function Kf(s,e){const t=Ci(e,this.size,4);s.uniform4fv(this.addr,t)}function $f(s,e){const t=Ci(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zf(s,e){const t=Ci(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jf(s,e){const t=Ci(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qf(s,e){s.uniform1iv(this.addr,e)}function jf(s,e){s.uniform2iv(this.addr,e)}function ep(s,e){s.uniform3iv(this.addr,e)}function tp(s,e){s.uniform4iv(this.addr,e)}function np(s,e){s.uniform1uiv(this.addr,e)}function ip(s,e){s.uniform2uiv(this.addr,e)}function sp(s,e){s.uniform3uiv(this.addr,e)}function rp(s,e){s.uniform4uiv(this.addr,e)}function ap(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ha:a=Il;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function op(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ul,r[a])}function lp(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nl,r[a])}function cp(s,e,t){const n=this.cache,i=e.length,r=zs(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Dl,r[a])}function hp(s){switch(s){case 5126:return Xf;case 35664:return qf;case 35665:return Yf;case 35666:return Kf;case 35674:return $f;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return jf;case 35668:case 35672:return ep;case 35669:case 35673:return tp;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wf(t.type)}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hp(t.type)}}class fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function zo(s,e){s.seq.push(e),s.map[e.id]=e}function pp(s,e,t){const n=s.name,i=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zo(t,c===void 0?new up(o,s,e):new dp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new fp(o),zo(t,d)),t=d}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);pp(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ko(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const mp=37297;let gp=0;function _p(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Go=new Le;function xp(s){Ge._getMatrix(Go,Ge.workingColorSpace,s);const e=`mat3( ${Go.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(s)){case Ds:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ho(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_p(s.getShaderSource(e),o)}else return r}function vp(s,e){const t=xp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Sp={[il]:"Linear",[sl]:"Reinhard",[rl]:"Cineon",[al]:"ACESFilmic",[ll]:"AgX",[cl]:"Neutral",[ol]:"Custom"};function Mp(s,e){const t=Sp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ys=new O;function yp(){Ge.getLuminanceCoefficients(ys);const s=ys.x.toFixed(4),e=ys.y.toFixed(4),t=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function bp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ki(s){return s!==""}function Vo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(s){return s.replace(Ap,Rp)}const wp=new Map;function Rp(s,e){let t=Ne[e];if(t===void 0){const n=wp.get(e);if(n!==void 0)t=Ne[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ua(t)}const Cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(s){return s.replace(Cp,Pp)}function Pp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qo(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Lp={[Es]:"SHADOWMAP_TYPE_PCF",[zi]:"SHADOWMAP_TYPE_VSM"};function Ip(s){return Lp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dp={[jn]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE_UV"};function Up(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Dp[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Np={[wi]:"ENVMAP_MODE_REFRACTION"};function Fp(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Np[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Op={[fa]:"ENVMAP_BLENDING_MULTIPLY",[gc]:"ENVMAP_BLENDING_MIX",[_c]:"ENVMAP_BLENDING_ADD"};function Bp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Op[s.combine]||"ENVMAP_BLENDING_NONE"}function zp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ip(t),c=Up(t),h=Fp(t),d=Bp(t),u=zp(t),p=Ep(t),x=bp(r),M=i.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ki).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(m=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==sn?Mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),yp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),a=ua(a),a=Vo(a,t),a=Wo(a,t),o=ua(o),o=Vo(o,t),o=Wo(o,t),a=Xo(a),o=Xo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=E+m+a,S=E+f+o,y=ko(i,i.VERTEX_SHADER,w),T=ko(i,i.FRAGMENT_SHADER,S);i.attachShader(M,y),i.attachShader(M,T),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function R(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(M)||"",B=i.getShaderInfoLog(y)||"",U=i.getShaderInfoLog(T)||"",G=N.trim(),$=B.trim(),V=U.trim();let ne=!0,X=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,y,T);else{const Q=Ho(i,y,"vertex"),j=Ho(i,T,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Q+`
`+j)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):($===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:ne,programLog:G,vertexShader:{log:$,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(y),i.deleteShader(T),_=new Rs(i,M),b=Tp(i,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(M,mp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=T,this}let Gp=0;class Hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vp(e),t.set(e,n)),n}}class Vp{constructor(e){this.id=Gp++,this.code=e,this.usedTimes=0}}function Wp(s){return s===ei||s===Ps||s===Ls}function Xp(s,e,t,n,i,r){const a=new vl,o=new Hp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,b,C,P,N,B){const U=P.fog,G=N.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||$,V),X=ne&&ne.mapping===Os?ne.image.height:null,Q=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=j!==void 0?j.length:0;let Me=0;G.morphAttributes.position!==void 0&&(Me=1),G.morphAttributes.normal!==void 0&&(Me=2),G.morphAttributes.color!==void 0&&(Me=3);let et,Ve,Ye,Y;if(Q){const nt=dn[Q];et=nt.vertexShader,Ve=nt.fragmentShader}else{et=_.vertexShader,Ve=_.fragmentShader;const nt=o.getVertexShaderStage(_),Ke=o.getFragmentShaderStage(_);o.update(_,nt,Ke),Ye=nt.id,Y=Ke.id}const ee=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,Fe=!!_.map,_t=!!_.matcap,Oe=!!ne,Xe=!!_.aoMap,tt=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,at=!!_.normalMap,St=!!_.displacementMap,Ut=!!_.emissiveMap,lt=!!_.metalnessMap,pt=!!_.roughnessMap,D=_.anisotropy>0,bt=_.clearcoat>0,Ze=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,F=_.sheen>0,H=_.transmission>0,q=D&&!!_.anisotropyMap,ie=bt&&!!_.clearcoatMap,se=bt&&!!_.clearcoatNormalMap,K=bt&&!!_.clearcoatRoughnessMap,J=g&&!!_.iridescenceMap,re=g&&!!_.iridescenceThicknessMap,Ee=F&&!!_.sheenColorMap,ce=F&&!!_.sheenRoughnessMap,ae=!!_.specularMap,be=!!_.specularColorMap,Re=!!_.specularIntensityMap,Ie=H&&!!_.transmissionMap,I=H&&!!_.thicknessMap,oe=!!_.gradientMap,Z=!!_.alphaMap,le=_.alphaTest>0,fe=!!_.alphaHash,te=!!_.extensions;let Ae=sn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Se={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:Ve,defines:_.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:_t,envMap:Oe,envMapMode:Oe&&ne.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:tt,bumpMap:ke,normalMap:at,displacementMap:St,emissiveMap:Ut,normalMapObjectSpace:at&&_.normalMapType===Sc,normalMapTangentSpace:at&&_.normalMapType===la,packedNormalMap:at&&_.normalMapType===la&&Wp(_.normalMap.format),metalnessMap:lt,roughnessMap:pt,anisotropy:D,anisotropyMap:q,clearcoat:bt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:K,dispersion:Ze,retroreflection:A,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:re,sheen:F,sheenColorMap:Ee,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:be,specularIntensityMap:Re,transmission:H,transmissionMap:Ie,thicknessMap:I,gradientMap:oe,opaque:_.transparent===!1&&_.blending===Gi&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:fe,combine:_.combine,mapUv:Fe&&x(_.map.channel),aoMapUv:Xe&&x(_.aoMap.channel),lightMapUv:tt&&x(_.lightMap.channel),bumpMapUv:ke&&x(_.bumpMap.channel),normalMapUv:at&&x(_.normalMap.channel),displacementMapUv:St&&x(_.displacementMap.channel),emissiveMapUv:Ut&&x(_.emissiveMap.channel),metalnessMapUv:lt&&x(_.metalnessMap.channel),roughnessMapUv:pt&&x(_.roughnessMap.channel),anisotropyMapUv:q&&x(_.anisotropyMap.channel),clearcoatMapUv:ie&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ce&&x(_.sheenRoughnessMap.channel),specularMapUv:ae&&x(_.specularMap.channel),specularColorMapUv:be&&x(_.specularColorMap.channel),specularIntensityMapUv:Re&&x(_.specularIntensityMap.channel),transmissionMapUv:Ie&&x(_.transmissionMap.channel),thicknessMapUv:I&&x(_.thicknessMap.channel),alphaMapUv:Z&&x(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(at||D),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Fe||Z),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&at===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Me,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&Ge.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yt,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&_.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(b,_),E(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const b=p[_.type];let C;if(b){const P=dn[b];C=lh.clone(P.uniforms)}else C=_.uniforms;return C}function S(_,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new kp(s,b,_,i),c.push(C),h.set(b,C)),C}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:R}}function qp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Yp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Yo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ko(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,M,m,f){let E=s[e];return E===void 0?(E={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},s[e]=E):(E.id=u.id,E.object=u,E.geometry=p,E.material=x,E.materialVariant=a(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=m,E.group=f),e++,E}function l(u,p,x,M,m,f,E){E.reversedDepth===!0&&(m=-m);const w=o(u,p,x,M,m,f);x.transmission>0?n.push(w):x.transparent===!0?i.push(w):t.push(w)}function c(u,p,x,M,m,f){const E=o(u,p,x,M,m,f);x.transmission>0?n.unshift(E):x.transparent===!0?i.unshift(E):t.unshift(E)}function h(u,p){t.length>1&&t.sort(u||Yp),n.length>1&&n.sort(p||Yo),i.length>1&&i.sort(p||Yo)}function d(){for(let u=e,p=s.length;u<p;u++){const x=s[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Kp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ko,s.set(n,[a])):i>=r.length?(a=new Ko,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function $p(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Zp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jp=0;function Qp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jp(s){const e=new $p,t=Zp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,r=new st,a=new st;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,x=0,M=0,m=0,f=0,E=0,w=0,S=0,y=0,T=0,R=0,_=0,b=0,C=0;c.sort(Qp);for(let N=0,B=c.length;N<B;N++){const U=c[N],G=U.color,$=U.intensity,V=U.distance;let ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ei?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=G.r*$,d+=G.g*$,u+=G.b*$;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],$);C++}else if(U.isSunLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=ne;const Te=Q.getViewportCount();for(let Me=0;Me<Te;Me++)n.sunShadowMatrix[M+Me]=Q.getMatrix(Me),n.sunShadowCascade[M+Me]=Q._cascadeData[Me];M+=Te,x++}n.sun[p]=X,p++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=U.shadow.matrix,y++}n.directional[m]=X,m++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(G).multiplyScalar($),X.distance=V,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[E]=X;const Q=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,Q.updateMatrices(U),U.castShadow&&b++),n.spotLightMatrix[E]=Q.matrix,U.castShadow){const j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[E]=j,n.spotShadowMap[E]=ne,R++}E++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(G).multiplyScalar($),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=X,w++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[f]=j,n.pointShadowMap[f]=ne,n.pointShadowMatrix[f]=U.shadow.matrix,T++}n.point[f]=X,f++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar($),X.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[S]=X,S++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==E||P.rectAreaLength!==w||P.hemiLength!==S||P.numSunShadows!==x||P.numDirectionalShadows!==y||P.numPointShadows!==T||P.numSpotShadows!==R||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=E,n.rectArea.length=w,n.point.length=f,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=E,P.rectAreaLength=w,P.hemiLength=S,P.numSunShadows=x,P.numDirectionalShadows=y,P.numPointShadows=T,P.numSpotShadows=R,P.numSpotMaps=_,P.numLightProbes=C,n.version=Jp++)}function l(c,h){let d=0,u=0,p=0,x=0,M=0,m=0;const f=h.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){const S=c[E];if(S.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(f),d++}else if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(f),u++}else if(S.isSpotLight){const y=n.spot[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(f),x++}else if(S.isRectAreaLight){const y=n.rectArea[M];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function $o(s){const e=new jp(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function em(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new $o(s),e.set(i,[o])):r>=a.length?(o=new $o(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
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
}`,im=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],sm=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Zo=new st,Bi=new O,Mr=new O;function rm(s,e,t){let n=new Ta;const i=new De,r=new De,a=new ct,o=new dh,l=new fh,c={},h=t.maxTextureSize,d={[Qn]:Ot,[Ot]:Qn,[Yt]:Yt},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new Bt;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ut(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let f=this.type;this.render=function(T,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Jl&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);const b=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(An),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=T.length;U<G;U++){const $=T[U],V=$.shadow;if(V===void 0){Ce("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();i.multiply(ne),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,V.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zi){if($.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new rn(i.x,i.y,{format:ei,type:mn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new qi(i.x,i.y,tn),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Rn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=dt,V.map.depthTexture.magFilter=dt}else $.isPointLight?(V.map=new Ll(i.x),V.map.depthTexture=new ah(i.x,pn)):(V.map=new rn(i.x,i.y),V.map.depthTexture=new qi(i.x,i.y,pn)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Rn,this.type===Es?(V.map.depthTexture.compareFunction=X?ya:Ma,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=dt,V.map.depthTexture.magFilter=dt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,_);for(let j=0;j<Q;j++){const Te=V.getCamera(j);if($.isPointLight){const Me=V.camera,et=V.matrix,Ve=$.distance||Me.far;Ve!==Me.far&&(Me.far=Ve,Me.updateProjectionMatrix()),Bi.setFromMatrixPosition($.matrixWorld),Me.position.copy(Bi),Mr.copy(Me.position),Mr.add(im[j]),Me.up.copy(sm[j]),Me.lookAt(Mr),Me.updateMatrixWorld(),et.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Zo.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Zo,Me.coordinateSystem,Me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,j),s.clear();else{j===0&&(s.setRenderTarget(V.map),s.clear());const Me=V.getViewport(j);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),N.viewport(a)}n=V.getFrustum(j),S(R,_,Te,$,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&E(V,_),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,C,P)};function E(T,R){const _=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new rn(i.x,i.y,{format:ei,type:mn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,_,p,M,null)}function w(T,R,_,b){let C=null;const P=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=C.uuid,B=R.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let G=U[B];G===void 0&&(G=C.clone(),U[B]=G,R.addEventListener("dispose",y)),C=G}if(C.visible=R.visible,C.wireframe=R.wireframe,b===zi?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=s.properties.get(C);N.light=_}return C}function S(T,R,_,b,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===zi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const B=e.update(T),U=T.material;if(Array.isArray(U)){const G=B.groups;for(let $=0,V=G.length;$<V;$++){const ne=G[$],X=U[ne.materialIndex];if(X&&X.visible){const Q=w(T,X,b,C);T.onBeforeShadow(s,T,R,_,B,Q,ne),s.renderBufferDirect(_,null,B,Q,T,ne),T.onAfterShadow(s,T,R,_,B,Q,ne)}}}else if(U.visible){const G=w(T,U,b,C);T.onBeforeShadow(s,T,R,_,B,G,null),s.renderBufferDirect(_,null,B,G,T,null),T.onAfterShadow(s,T,R,_,B,G,null)}}const N=T.children;for(let B=0,U=N.length;B<U;B++)S(N[B],R,_,b,C)}function y(T){T.target.removeEventListener("dispose",y);for(const _ in c){const b=c[_],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function am(s,e){function t(){let I=!1;const oe=new ct;let Z=null;const le=new ct(0,0,0,0);return{setMask:function(fe){Z!==fe&&!I&&(s.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){I=fe},setClear:function(fe,te,Ae,Se,nt){nt===!0&&(fe*=Se,te*=Se,Ae*=Se),oe.set(fe,te,Ae,Se),le.equals(oe)===!1&&(s.clearColor(fe,te,Ae,Se),le.copy(oe))},reset:function(){I=!1,Z=null,le.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,Z=null,le=null,fe=null;return{setReversed:function(te){if(oe!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=te;const Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return oe},setTest:function(te){te?ee(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(te){Z!==te&&!I&&(s.depthMask(te),Z=te)},setFunc:function(te){if(oe&&(te=Dc[te]),le!==te){switch(te){case br:s.depthFunc(s.NEVER);break;case Tr:s.depthFunc(s.ALWAYS);break;case Ar:s.depthFunc(s.LESS);break;case Hi:s.depthFunc(s.LEQUAL);break;case wr:s.depthFunc(s.EQUAL);break;case Rr:s.depthFunc(s.GEQUAL);break;case Cr:s.depthFunc(s.GREATER);break;case Pr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=te}},setLocked:function(te){I=te},setClear:function(te){fe!==te&&(fe=te,oe&&(te=1-te),s.clearDepth(te))},reset:function(){I=!1,Z=null,le=null,fe=null,oe=!1}}}function i(){let I=!1,oe=null,Z=null,le=null,fe=null,te=null,Ae=null,Se=null,nt=null;return{setTest:function(Ke){I||(Ke?ee(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!I&&(s.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,Kt,ln){(Z!==Ke||le!==Kt||fe!==ln)&&(s.stencilFunc(Ke,Kt,ln),Z=Ke,le=Kt,fe=ln)},setOp:function(Ke,Kt,ln){(te!==Ke||Ae!==Kt||Se!==ln)&&(s.stencilOp(Ke,Kt,ln),te=Ke,Ae=Kt,Se=ln)},setLocked:function(Ke){I=Ke},setClear:function(Ke){nt!==Ke&&(s.clearStencil(Ke),nt=Ke)},reset:function(){I=!1,oe=null,Z=null,le=null,fe=null,te=null,Ae=null,Se=null,nt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,x=[],M=null,m=!1,f=null,E=null,w=null,S=null,y=null,T=null,R=null,_=new ze(0,0,0),b=0,C=!1,P=null,N=null,B=null,U=null,G=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ne>=2);let Q=null,j={};const Te=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),et=new ct().fromArray(Te),Ve=new ct().fromArray(Me);function Ye(I,oe,Z,le){const fe=new Uint8Array(4),te=s.createTexture();s.bindTexture(I,te),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<Z;Ae++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(oe+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return te}const Y={};Y[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Hi),ke(!1),at($a),ee(s.CULL_FACE),Xe(An);function ee(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function _e(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Pe(I,oe){return u[I]!==oe?(s.bindFramebuffer(I,oe),u[I]=oe,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(I,oe){let Z=x,le=!1;if(I){Z=p.get(oe),Z===void 0&&(Z=[],p.set(oe,Z));const fe=I.textures;if(Z.length!==fe.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Ae=fe.length;te<Ae;te++)Z[te]=s.COLOR_ATTACHMENT0+te;Z.length=fe.length,le=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,le=!0);le&&s.drawBuffers(Z)}function Fe(I){return M!==I?(s.useProgram(I),M=I,!0):!1}const _t={[Ei]:s.FUNC_ADD,[jl]:s.FUNC_SUBTRACT,[ec]:s.FUNC_REVERSE_SUBTRACT};_t[tc]=s.MIN,_t[nc]=s.MAX;const Oe={[ic]:s.ZERO,[sc]:s.ONE,[rc]:s.SRC_COLOR,[tl]:s.SRC_ALPHA,[uc]:s.SRC_ALPHA_SATURATE,[cc]:s.DST_COLOR,[oc]:s.DST_ALPHA,[ac]:s.ONE_MINUS_SRC_COLOR,[nl]:s.ONE_MINUS_SRC_ALPHA,[hc]:s.ONE_MINUS_DST_COLOR,[lc]:s.ONE_MINUS_DST_ALPHA,[dc]:s.CONSTANT_COLOR,[fc]:s.ONE_MINUS_CONSTANT_COLOR,[pc]:s.CONSTANT_ALPHA,[mc]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,oe,Z,le,fe,te,Ae,Se,nt,Ke){if(I===An){m===!0&&(_e(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),I!==Ql){if(I!==f||Ke!==C){if((E!==Ei||y!==Ei)&&(s.blendEquation(s.FUNC_ADD),E=Ei,y=Ei),Ke)switch(I){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qa:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ja:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",I);break}w=null,S=null,T=null,R=null,_.set(0,0,0),b=0,f=I,C=Ke}return}fe=fe||oe,te=te||Z,Ae=Ae||le,(oe!==E||fe!==y)&&(s.blendEquationSeparate(_t[oe],_t[fe]),E=oe,y=fe),(Z!==w||le!==S||te!==T||Ae!==R)&&(s.blendFuncSeparate(Oe[Z],Oe[le],Oe[te],Oe[Ae]),w=Z,S=le,T=te,R=Ae),(Se.equals(_)===!1||nt!==b)&&(s.blendColor(Se.r,Se.g,Se.b,nt),_.copy(Se),b=nt),f=I,C=!1}function tt(I,oe){I.side===Yt?_e(s.CULL_FACE):ee(s.CULL_FACE);let Z=I.side===Ot;oe&&(Z=!Z),ke(Z),I.blending===Gi&&I.transparent===!1?Xe(An):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const le=I.stencilWrite;o.setTest(le),le&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){P!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),P=I)}function at(I){I!==$l?(ee(s.CULL_FACE),I!==N&&(I===$a?s.cullFace(s.BACK):I===Zl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),N=I}function St(I){I!==B&&(V&&s.lineWidth(I),B=I)}function Ut(I,oe,Z){I?(ee(s.POLYGON_OFFSET_FILL),(U!==oe||G!==Z)&&(U=oe,G=Z,a.getReversed()&&(oe=-oe),s.polygonOffset(oe,Z))):_e(s.POLYGON_OFFSET_FILL)}function lt(I){I?ee(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function pt(I){I===void 0&&(I=s.TEXTURE0+$-1),Q!==I&&(s.activeTexture(I),Q=I)}function D(I,oe,Z){Z===void 0&&(Q===null?Z=s.TEXTURE0+$-1:Z=Q);let le=j[Z];le===void 0&&(le={type:void 0,texture:void 0},j[Z]=le),(le.type!==I||le.texture!==oe)&&(Q!==Z&&(s.activeTexture(Z),Q=Z),s.bindTexture(I,oe||Y[I]),le.type=I,le.texture=oe)}function bt(){const I=j[Q];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ze(){try{s.compressedTexImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function g(){try{s.texSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function F(){try{s.texSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function ie(){try{s.texStorage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function se(){try{s.texStorage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function K(){try{s.texImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function J(){try{s.texImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function re(I){return d[I]!==void 0?d[I]:s.getParameter(I)}function Ee(I,oe){d[I]!==oe&&(s.pixelStorei(I,oe),d[I]=oe)}function ce(I){et.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function ae(I){Ve.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function be(I,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let le=Z.get(I);le===void 0&&(le=s.getUniformBlockIndex(oe,I.name),Z.set(I,le))}function Re(I,oe){const le=c.get(oe).get(I);l.get(oe)!==le&&(s.uniformBlockBinding(oe,le,I.__bindingPointIndex),l.set(oe,le))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,j={},u={},p=new WeakMap,x=[],M=null,m=!1,f=null,E=null,w=null,S=null,y=null,T=null,R=null,_=new ze(0,0,0),b=0,C=!1,P=null,N=null,B=null,U=null,G=null,et.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Pe,drawBuffers:me,useProgram:Fe,setBlending:Xe,setMaterial:tt,setFlipSided:ke,setCullFace:at,setLineWidth:St,setPolygonOffset:Ut,setScissorTest:lt,activeTexture:pt,bindTexture:D,unbindTexture:bt,compressedTexImage2D:Ze,compressedTexImage3D:A,texImage2D:K,texImage3D:J,pixelStorei:Ee,getParameter:re,updateUBOMapping:be,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ce,viewport:ae,reset:Ie}}function om(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return x?new OffscreenCanvas(A,g):Us("canvas")}function m(A,g,F){let H=1;const q=Ze(A);if((q.width>F||q.height>F)&&(H=F/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(H*q.width),se=Math.floor(H*q.height);u===void 0&&(u=M(ie,se));const K=g?M(ie,se):u;return K.width=ie,K.height=se,K.getContext("2d").drawImage(A,0,0,ie,se),Ce("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+se+")."),K}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function f(A){return A.generateMipmaps}function E(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,g,F,H,q,ie=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;H&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8),F===s.UNSIGNED_SHORT&&se&&(K=se.R16_EXT),F===s.SHORT&&se&&(K=se.R16_SNORM_EXT)),g===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),g===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8),F===s.UNSIGNED_SHORT&&se&&(K=se.RG16_EXT),F===s.SHORT&&se&&(K=se.RG16_SNORM_EXT)),g===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),g===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),g===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),g===s.RGB&&(F===s.UNSIGNED_SHORT&&se&&(K=se.RGB16_EXT),F===s.SHORT&&se&&(K=se.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),g===s.RGBA){const J=ie?Ds:Ge.getTransfer(q);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=J===Je?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&se&&(K=se.RGBA16_EXT),F===s.SHORT&&se&&(K=se.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(A,g){let F;return A?g===null||g===pn||g===Wi?F=s.DEPTH24_STENCIL8:g===tn?F=s.DEPTH32F_STENCIL8:g===Vi&&(F=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pn||g===Wi?F=s.DEPTH_COMPONENT24:g===tn?F=s.DEPTH_COMPONENT32F:g===Vi&&(F=s.DEPTH_COMPONENT16),F}function T(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==dt&&A.minFilter!==Ct?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),b(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),P(g)}function b(A){const g=n.get(A);if(g.__webglInit===void 0)return;const F=A.source,H=p.get(F);if(H){const q=H[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(A),Object.keys(H).length===0&&p.delete(F)}n.remove(A)}function C(A){const g=n.get(A);s.deleteTexture(g.__webglTexture);const F=A.source,H=p.get(F);delete H[g.__cacheKey],a.memory.textures--}function P(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let q=0;q<g.__webglFramebuffer[H].length;q++)s.deleteFramebuffer(g.__webglFramebuffer[H][q]);else s.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)s.deleteFramebuffer(g.__webglFramebuffer[H]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=A.textures;for(let H=0,q=F.length;H<q;H++){const ie=n.get(F[H]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(A)}let N=0;function B(){N=0}function U(){return N}function G(A){N=A}function $(){const A=N;return A>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,A}function V(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function ne(A,g){const F=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const H=A.image;if(H===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,A,g);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+g)}function X(A,g){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,g);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+g)}function Q(A,g){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,g);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+g)}function j(A,g){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Pe(F,A,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+g)}const Te={[Cs]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[Lr]:s.MIRRORED_REPEAT},Me={[dt]:s.NEAREST,[xc]:s.NEAREST_MIPMAP_NEAREST,[es]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[Xs]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},et={[yc]:s.NEVER,[wc]:s.ALWAYS,[Ec]:s.LESS,[Ma]:s.LEQUAL,[bc]:s.EQUAL,[ya]:s.GEQUAL,[Tc]:s.GREATER,[Ac]:s.NOTEQUAL};function Ve(A,g){if(g.type===tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ct||g.magFilter===Xs||g.magFilter===es||g.magFilter===Kn||g.minFilter===Ct||g.minFilter===Xs||g.minFilter===es||g.minFilter===Kn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Te[g.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Te[g.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Te[g.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Me[g.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===dt||g.minFilter!==es&&g.minFilter!==Kn||g.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const H=g.source;let q=p.get(H);q===void 0&&(q={},p.set(H,q));const ie=V(g);if(ie!==A.__cacheKey){q[ie]===void 0&&(q[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[ie].usedTimes++;const se=q[A.__cacheKey];se!==void 0&&(q[A.__cacheKey].usedTimes--,se.usedTimes===0&&C(g)),A.__cacheKey=ie,A.__webglTexture=q[ie].texture}return F}function Y(A,g,F){return Math.floor(Math.floor(A/F)/g)}function ee(A,g,F,H){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,F,H,g.data);else{ie.sort((Ee,ce)=>Ee.start-ce.start);let se=0;for(let Ee=1;Ee<ie.length;Ee++){const ce=ie[se],ae=ie[Ee],be=ce.start+ce.count,Re=Y(ae.start,g.width,4),Ie=Y(ce.start,g.width,4);ae.start<=be+1&&Re===Ie&&Y(ae.start+ae.count-1,g.width,4)===Re?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;const K=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,ce=ie.length;Ee<ce;Ee++){const ae=ie[Ee],be=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Ie=be%g.width,I=Math.floor(be/g.width),oe=Re,Z=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Ie,I,oe,Z,F,H,g.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function _e(A,g,F){let H=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=s.TEXTURE_3D);const q=Ye(A,g),ie=g.source;t.bindTexture(H,A.__webglTexture,s.TEXTURE0+F);const se=n.get(ie);if(ie.version!==se.__version||q===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Z=Ge.getPrimaries(Ge.workingColorSpace),le=g.colorSpace===zn?null:Ge.getPrimaries(g.colorSpace),fe=g.colorSpace===zn||Z===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,i.maxTextureSize);J=bt(g,J);const re=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let ce=S(g.internalFormat,re,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Ve(H,g);let ae;const be=g.mipmaps,Re=g.isVideoTexture!==!0,Ie=se.__version===void 0||q===!0,I=ie.dataReady,oe=T(g,J);if(g.isDepthTexture)ce=y(g.format===$n,g.type),Ie&&(Re?t.texStorage2D(s.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,ce,J.width,J.height,0,re,Ee,null));else if(g.isDataTexture)if(be.length>0){Re&&Ie&&t.texStorage2D(s.TEXTURE_2D,oe,ce,be[0].width,be[0].height);for(let Z=0,le=be.length;Z<le;Z++)ae=be[Z],Re?I&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Ee,ae.data):t.texImage2D(s.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,Ee,ae.data);g.generateMipmaps=!1}else Re?(Ie&&t.texStorage2D(s.TEXTURE_2D,oe,ce,J.width,J.height),I&&ee(g,J,re,Ee)):t.texImage2D(s.TEXTURE_2D,0,ce,J.width,J.height,0,re,Ee,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,ce,be[0].width,be[0].height,J.depth);for(let Z=0,le=be.length;Z<le;Z++)if(ae=be[Z],g.format!==nn)if(re!==null)if(Re){if(I)if(g.layerUpdates.size>0){const fe=Ro(ae.width,ae.height,g.format,g.type);for(const te of g.layerUpdates){const Ae=ae.data.subarray(te*fe/ae.data.BYTES_PER_ELEMENT,(te+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,te,ae.width,ae.height,1,re,Ae)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,re,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,J.depth,0,ae.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,re,Ee,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,J.depth,0,re,Ee,ae.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Re&&Ie&&t.texStorage2D(s.TEXTURE_2D,oe,ce,be[0].width,be[0].height);for(let Z=0,le=be.length;Z<le;Z++)ae=be[Z],g.format!==nn?re!==null?Re?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,ce,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?I&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Ee,ae.data):t.texImage2D(s.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,Ee,ae.data)}else if(g.isDataArrayTexture)if(Re){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),I)if(g.layerUpdates.size>0){const Z=Ro(J.width,J.height,g.format,g.type);for(const le of g.layerUpdates){const fe=J.data.subarray(le*Z/J.data.BYTES_PER_ELEMENT,(le+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,re,Ee,fe)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,Ee,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,re,Ee,J.data);else if(g.isData3DTexture)Re?(Ie&&t.texStorage3D(s.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,Ee,J.data)):t.texImage3D(s.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,re,Ee,J.data);else if(g.isFramebufferTexture){if(Ie)if(Re)t.texStorage2D(s.TEXTURE_2D,oe,ce,J.width,J.height);else{let Z=J.width,le=J.height;for(let fe=0;fe<oe;fe++)t.texImage2D(s.TEXTURE_2D,fe,ce,Z,le,0,re,Ee,null),Z>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in s){const Z=s.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(g),Z.onpaint=le=>{const fe=le.changedElements;for(const te of d)fe.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const fe=s.RGBA,te=s.RGBA,Ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,fe,te,Ae,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(be.length>0){if(Re&&Ie){const Z=Ze(be[0]);t.texStorage2D(s.TEXTURE_2D,oe,ce,Z.width,Z.height)}for(let Z=0,le=be.length;Z<le;Z++)ae=be[Z],Re?I&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,re,Ee,ae):t.texImage2D(s.TEXTURE_2D,Z,ce,re,Ee,ae);g.generateMipmaps=!1}else if(Re){if(Ie){const Z=Ze(J);t.texStorage2D(s.TEXTURE_2D,oe,ce,Z.width,Z.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,Ee,J)}else t.texImage2D(s.TEXTURE_2D,0,ce,re,Ee,J);f(g)&&E(H),se.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Pe(A,g,F){if(g.image.length!==6)return;const H=Ye(A,g),q=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const ie=n.get(q);if(q.version!==ie.__version||H===!0){t.activeTexture(s.TEXTURE0+F);const se=Ge.getPrimaries(Ge.workingColorSpace),K=g.colorSpace===zn?null:Ge.getPrimaries(g.colorSpace),J=g.colorSpace===zn||se===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const re=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!re&&!Ee?ce[te]=m(g.image[te],!0,i.maxCubemapSize):ce[te]=Ee?g.image[te].image:g.image[te],ce[te]=bt(g,ce[te]);const ae=ce[0],be=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),Ie=S(g.internalFormat,be,Re,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,oe=ie.__version===void 0||H===!0,Z=q.dataReady;let le=T(g,ae);Ve(s.TEXTURE_CUBE_MAP,g);let fe;if(re){I&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ie,ae.width,ae.height);for(let te=0;te<6;te++){fe=ce[te].mipmaps;for(let Ae=0;Ae<fe.length;Ae++){const Se=fe[Ae];g.format!==nn?be!==null?I?Z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Ie,Se.width,Se.height,0,Se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Se.width,Se.height,be,Re,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Ie,Se.width,Se.height,0,be,Re,Se.data)}}}else{if(fe=g.mipmaps,I&&oe){fe.length>0&&le++;const te=Ze(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,be,Re,ce[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,ce[te].width,ce[te].height,0,be,Re,ce[te].data);for(let Ae=0;Ae<fe.length;Ae++){const nt=fe[Ae].image[te].image;I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,nt.width,nt.height,be,Re,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Ie,nt.width,nt.height,0,be,Re,nt.data)}}else{I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be,Re,ce[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,be,Re,ce[te]);for(let Ae=0;Ae<fe.length;Ae++){const Se=fe[Ae];I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,be,Re,Se.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Ie,be,Re,Se.image[te])}}}f(g)&&E(s.TEXTURE_CUBE_MAP),ie.__version=q.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function me(A,g,F,H,q,ie){const se=r.convert(F.format,F.colorSpace),K=r.convert(F.type),J=S(F.internalFormat,se,K,F.normalized,F.colorSpace),re=n.get(g),Ee=n.get(F);if(Ee.__renderTarget=g,!re.__hasExternalTextures){const ce=Math.max(1,g.width>>ie),ae=Math.max(1,g.height>>ie);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,J,ce,ae,g.depth,0,se,K,null):t.texImage2D(q,ie,J,ce,ae,0,se,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),pt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,q,Ee.__webglTexture,0,lt(g)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,q,Ee.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(A,g,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),g.depthBuffer){const H=g.depthTexture,q=H&&H.isDepthTexture?H.type:null,ie=y(g.stencilBuffer,q),se=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(g),ie,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(g),ie,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,ie,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,A)}else{const H=g.textures;for(let q=0;q<H.length;q++){const ie=H[q],se=r.convert(ie.format,ie.colorSpace),K=r.convert(ie.type),J=S(ie.internalFormat,se,K,ie.normalized,ie.colorSpace);pt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(g),J,g.width,g.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(g),J,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,J,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(A,g,F){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,g.depthTexture);const re=r.convert(g.depthTexture.format),Ee=r.convert(g.depthTexture.type);let ce;g.depthTexture.format===Rn?ce=s.DEPTH_COMPONENT24:g.depthTexture.format===$n&&(ce=s.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,g.width,g.height,0,re,Ee,null)}}else ne(g.depthTexture,0);const ie=q.__webglTexture,se=lt(g),K=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,J=g.depthTexture.format===$n?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===Rn)pt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,J,K,ie,0);else if(g.depthTexture.format===$n)pt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,J,K,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(A){const g=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=H}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)_t(g.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?_t(g.__webglFramebuffer[0],A,0):_t(g.__webglFramebuffer,A,0)}else if(F){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=s.createRenderbuffer(),Fe(g.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,ie)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Fe(g.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(A,g,F){const H=n.get(A);g!==void 0&&me(H.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Oe(A)}function tt(A){const g=A.texture,F=n.get(A),H=n.get(g);A.addEventListener("dispose",_);const q=A.textures,ie=A.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=g.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[K][J]=s.createFramebuffer()}else F.__webglFramebuffer[K]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)F.__webglFramebuffer[K]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(se)for(let K=0,J=q.length;K<J;K++){const re=n.get(q[K]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&pt(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const J=q[K];F.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const re=r.convert(J.format,J.colorSpace),Ee=r.convert(J.type),ce=S(J.internalFormat,re,Ee,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ae=lt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,ce,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,F.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[K][J],A,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else me(F.__webglFramebuffer[K],A,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(g)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,J=q.length;K<J;K++){const re=q[K],Ee=n.get(re);let ce=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,Ee.__webglTexture),Ve(ce,re),me(F.__webglFramebuffer,A,re,s.COLOR_ATTACHMENT0+K,ce,0),f(re)&&E(ce)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),Ve(K,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[J],A,g,s.COLOR_ATTACHMENT0,K,J);else me(F.__webglFramebuffer,A,g,s.COLOR_ATTACHMENT0,K,0);f(g)&&E(K),t.unbindTexture()}A.depthBuffer&&Oe(A)}function ke(A){const g=A.textures;for(let F=0,H=g.length;F<H;F++){const q=g[F];if(f(q)){const ie=w(A),se=n.get(q).__webglTexture;t.bindTexture(ie,se),E(ie),t.unbindTexture()}}}const at=[],St=[];function Ut(A){if(A.samples>0){if(pt(A)===!1){const g=A.textures,F=A.width,H=A.height;let q=s.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(A),K=g.length>1;if(K)for(let re=0;re<g.length;re++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Ee=n.get(g[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,F,H,0,0,F,H,q,s.NEAREST),l===!0&&(at.length=0,St.length=0,at.push(s.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(at.push(ie),St.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,St)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let re=0;re<g.length;re++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const Ee=n.get(g[re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const g=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function lt(A){return Math.min(i.maxSamples,A.samples)}function pt(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(A){const g=a.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function bt(A,g){const F=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Is&&F!==zn&&(Ge.getTransfer(F)===Je?(H!==nn||q!==Wt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",F)),g}function Ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=B,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Xe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lm(s,e){function t(n,i=zn){let r;const a=Ge.getTransfer(i);if(n===Wt)return s.UNSIGNED_BYTE;if(n===ma)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ul)return s.BYTE;if(n===dl)return s.SHORT;if(n===Vi)return s.UNSIGNED_SHORT;if(n===pa)return s.INT;if(n===pn)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===mn)return s.HALF_FLOAT;if(n===ml)return s.ALPHA;if(n===gl)return s.RGB;if(n===nn)return s.RGBA;if(n===Rn)return s.DEPTH_COMPONENT;if(n===$n)return s.DEPTH_STENCIL;if(n===_a)return s.RED;if(n===xa)return s.RED_INTEGER;if(n===ei)return s.RG;if(n===va)return s.RG_INTEGER;if(n===Sa)return s.RGBA_INTEGER;if(n===bs||n===Ts||n===As||n===ws)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ir||n===Dr||n===Ur||n===Nr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Or||n===Br||n===zr||n===kr||n===Ps||n===Gr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Or)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Br)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zr)return r.COMPRESSED_R11_EAC;if(n===kr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return r.COMPRESSED_RG11_EAC;if(n===Gr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===$r||n===Zr||n===Jr||n===Qr||n===jr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$r)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===ia||n===sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ra||n===aa||n===Ls||n===oa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ls)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hm=`
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

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Tl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:cm,fragmentShader:hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dm extends ii{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",m=new um,f={},E=t.getContextAttributes();let w=null,S=null;const y=[],T=[],R=new De;let _=null,b=null;const C=new Vt;C.viewport=new ct;const P=new Vt;P.viewport=new ct;const N=[C,P],B=new vh;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=y[Y];return ee===void 0&&(ee=new er,y[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=y[Y];return ee===void 0&&(ee=new er,y[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=y[Y];return ee===void 0&&(ee=new er,y[Y]=ee),ee.getHandSpace()};function $(Y){const ee=T.indexOf(Y.inputSource);if(ee===-1)return;const _e=y[ee];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<y.length;Y++){const ee=T[Y];ee!==null&&(T[Y]=null,y[Y].disconnect(ee))}U=null,G=null,m.reset();for(const Y in f)delete f[Y];if(e.setRenderTarget(w),p=null,u=null,d=null,i=null,S=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),b!==null){const Y=b.camera;Y.fov=b.fov,Y.zoom=b.zoom,Y.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ne),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?$n:Rn,Pe=E.stencil?Wi:pn);const Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new rn(u.textureWidth,u.textureHeight,{format:nn,type:Wt,depthTexture:new qi(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new rn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let ee=0;ee<Y.removed.length;ee++){const _e=Y.removed[ee],Pe=T.indexOf(_e);Pe>=0&&(T[Pe]=null,y[Pe].disconnect(_e))}for(let ee=0;ee<Y.added.length;ee++){const _e=Y.added[ee];let Pe=T.indexOf(_e);if(Pe===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=T.length){T.push(_e),Pe=Fe;break}else if(T[Fe]===null){T[Fe]=_e,Pe=Fe;break}if(Pe===-1)break}const me=y[Pe];me&&me.connect(_e)}}const X=new O,Q=new O;function j(Y,ee,_e){X.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Pe=X.distanceTo(Q),me=ee.projectionMatrix.elements,Fe=_e.projectionMatrix.elements,_t=me[14]/(me[10]-1),Oe=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],tt=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],at=(Fe[8]+1)/Fe[0],St=_t*ke,Ut=_t*at,lt=Pe/(-ke+at),pt=lt*-ke;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const D=_t+lt,bt=Oe+lt,Ze=St-pt,A=Ut+(Pe-pt),g=Xe*Oe/bt*D,F=tt*Oe/bt*D;Y.projectionMatrix.makePerspective(Ze,A,g,F,D,bt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Te(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ee=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),B.near=P.near=C.near=ee,B.far=P.far=C.far=_e,(U!==B.near||G!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),U=B.near,G=B.far),B.layers.mask=Y.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;const Pe=Y.parent,me=B.cameras;Te(B,Pe);for(let Fe=0;Fe<me.length;Fe++)Te(me[Fe],Pe);me.length===2?j(B,C,P):B.projectionMatrix.copy(C.projectionMatrix),b===null&&Y.isPerspectiveCamera&&(b={camera:Y,fov:Y.fov,zoom:Y.zoom}),Me(Y,B,Pe)};function Me(Y,ee,_e){_e===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return f[Y]};let et=null;function Ve(Y,ee){if(h=ee.getViewerPose(c||a),x=ee,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Pe=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let Oe=0;Oe<_e.length;Oe++){const Xe=_e[Oe];let tt=null;if(p!==null)tt=p.getViewport(Xe);else{const at=d.getViewSubImage(u,Xe);tt=at.viewport,Oe===0&&(e.setRenderTargetTextures(S,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(S))}let ke=N[Oe];ke===void 0&&(ke=new Vt,ke.layers.enable(Oe),ke.viewport=new ct,N[Oe]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(B.matrix.copy(ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pe===!0&&B.cameras.push(ke)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const Oe=d.getDepthInformation(_e[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,i.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let Oe=0;Oe<_e.length;Oe++){const Xe=_e[Oe].camera;if(Xe){let tt=f[Xe];tt||(tt=new Tl,f[Xe]=tt);const ke=d.getCameraImage(Xe);tt.sourceTexture=ke}}}}for(let _e=0;_e<y.length;_e++){const Pe=T[_e],me=y[_e];Pe!==null&&me!==void 0&&me.update(Pe,ee,c||a)}et&&et(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}const Ye=new Cl;Ye.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}}const fm=new st,Fl=new Le;Fl.set(-1,0,0,0,1,0,0,0,1);function pm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Al(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,w,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),w=E.envMap,S=E.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fl),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function c(S,y){let T=i[S.id];T===void 0&&(m(S),T=h(S),i[S.id]=T,S.addEventListener("dispose",E));const R=y.program;n.updateUBOMapping(S,R);const _=e.render.frame;r[S.id]!==_&&(u(S),r[S.id]=_)}function h(S){const y=d();S.__bindingPointIndex=y;const T=s.createBuffer(),R=S.__size,_=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const y=i[S.id],T=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,b=T.length;_<b;_++){const C=T[_];if(Array.isArray(C))for(let P=0,N=C.length;P<N;P++)p(C[P],_,P,R);else p(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,y,T,R){if(M(S,y,T,R)===!0){const _=S.__offset,b=S.value;if(Array.isArray(b)){let C=0;for(let P=0;P<b.length;P++){const N=b[P],B=f(N);x(N,S.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,S.__data)}}function x(S,y,T){typeof S=="number"||typeof S=="boolean"?y[0]=S:S.isMatrix3?(y[0]=S.elements[0],y[1]=S.elements[1],y[2]=S.elements[2],y[3]=0,y[4]=S.elements[3],y[5]=S.elements[4],y[6]=S.elements[5],y[7]=0,y[8]=S.elements[6],y[9]=S.elements[7],y[10]=S.elements[8],y[11]=0):ArrayBuffer.isView(S)?y.set(new S.constructor(S.buffer,S.byteOffset,y.length)):S.toArray(y,T)}function M(S,y,T,R){const _=S.value,b=y+"_"+T;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const C=R[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(S){const y=S.uniforms;let T=0;const R=16;for(let b=0,C=y.length;b<C;b++){const P=Array.isArray(y[b])?y[b]:[y[b]];for(let N=0,B=P.length;N<B;N++){const U=P[N],G=Array.isArray(U.value)?U.value:[U.value];for(let $=0,V=G.length;$<V;$++){const ne=G[$],X=f(ne),Q=T%R,j=Q%X.boundary,Te=Q+j;T+=j,Te!==0&&R-Te<X.storage&&(T+=R-Te),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=X.storage}}}const _=T%R;return _>0&&(T+=R-_),S.__size=T,S.__cache={},this}function f(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",S),y}function E(S){const y=S.target;y.removeEventListener("dispose",E);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function w(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}const gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function _m(){return un===null&&(un=new El(gm,16,16,ei,mn),un.name="DFG_LUT",un.minFilter=Ct,un.magFilter=Ct,un.wrapS=Tn,un.wrapT=Tn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class xm{constructor(e={}){const{canvas:t=Lc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Wt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const M=p,m=new Set([Sa,va,xa]),f=new Set([Wt,pn,Vi,Wi,ma,ga]),E=new Uint32Array(4),w=new Int32Array(4),S=new O;let y=null,T=null;const R=[],_=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,N=null,B=null,U=null,G=null;this._outputColorSpace=Rt;let $=0,V=0,ne=null,X=-1,Q=null;const j=new ct,Te=new ct;let Me=null;const et=new ze(0);let Ve=0,Ye=t.width,Y=t.height,ee=1,_e=null,Pe=null;const me=new ct(0,0,Ye,Y),Fe=new ct(0,0,Ye,Y);let _t=!1;const Oe=new Ta;let Xe=!1,tt=!1;const ke=new st,at=new O,St=new ct,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function pt(){return ne===null?ee:1}let D=n;function bt(v,L){return t.getContext(v,L)}let Ze,A,g,F,H,q,ie,se,K,J,re,Ee,ce,ae,be,Re,Ie,I,oe,Z,le,fe,te;try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),D===null){const L="webgl2";if(D=bt(L,v),D===null)throw bt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),qe("WebGLRenderer: "+v.message),v}function Ae(){Ze=new _f(D),Ze.init(),le=new lm(D,Ze),A=new of(D,Ze,e,le),g=new am(D,Ze),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),B=D.createFramebuffer(),U=D.createFramebuffer(),G=D.createFramebuffer(),F=new Sf(D),H=new qp,q=new om(D,Ze,g,H,A,le,F),ie=new gf(C),se=new Mh(D),fe=new rf(D,se),K=new xf(D,se,F,fe),J=new yf(D,K,se,fe,F),I=new Mf(D,A,q),be=new lf(H),re=new Xp(C,ie,Ze,A,fe,be),Ee=new pm(C,H),ce=new Kp,ae=new em(Ze),Ie=new sf(C,ie,g,J,x,l),Re=new rm(C,J,A),te=new mm(D,F,A,g),oe=new af(D,Ze,F),Z=new vf(D,Ze,F),F.programs=re.programs,C.capabilities=A,C.extensions=Ze,C.properties=H,C.renderLists=ce,C.shadowMap=Re,C.state=g,C.info=F}M!==Wt&&(b=new bf(M,t.width,t.height,o,i,r));const Se=new dm(C,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Ze.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ze.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(Ye,Y,!1))},this.getSize=function(v){return v.set(Ye,Y)},this.setSize=function(v,L,W=!0){if(Se.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=v,Y=L,t.width=Math.floor(v*ee),t.height=Math.floor(L*ee),W===!0&&(t.style.width=v+"px",t.style.height=L+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Ye*ee,Y*ee).floor()},this.setDrawingBufferSize=function(v,L,W){Ye=v,Y=L,ee=W,t.width=Math.floor(v*W),t.height=Math.floor(L*W),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(M===Wt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,L,W,z){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,L,W,z),g.viewport(j.copy(me).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(Fe)},this.setScissor=function(v,L,W,z){v.isVector4?Fe.set(v.x,v.y,v.z,v.w):Fe.set(v,L,W,z),g.scissor(Te.copy(Fe).multiplyScalar(ee).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(v){g.setScissorTest(_t=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){Pe=v},this.getClearColor=function(v){return v.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,W=!0){let z=0;if(v){let k=!1;if(ne!==null){const de=ne.texture.format;k=m.has(de)}if(k){const de=ne.texture.type,ge=f.has(de),ue=Ie.getClearColor(),xe=Ie.getClearAlpha(),ye=ue.r,Ue=ue.g,Be=ue.b;ge?(E[0]=ye,E[1]=Ue,E[2]=Be,E[3]=xe,D.clearBufferuiv(D.COLOR,0,E)):(w[0]=ye,w[1]=Ue,w[2]=Be,w[3]=xe,D.clearBufferiv(D.COLOR,0,w))}else z|=D.COLOR_BUFFER_BIT}L&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),Ie.dispose(),ce.dispose(),ae.dispose(),H.dispose(),ie.dispose(),J.dispose(),fe.dispose(),te.dispose(),re.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ka),Se.removeEventListener("sessionend",Ga),Hn.stop()};function nt(v){v.preventDefault(),to("WebGLRenderer: Context Lost."),P=!0}function Ke(){to("WebGLRenderer: Context Restored."),P=!1;const v=F.autoReset,L=Re.enabled,W=Re.autoUpdate,z=Re.needsUpdate,k=Re.type;Ae(),F.autoReset=v,Re.enabled=L,Re.autoUpdate=W,Re.needsUpdate=z,Re.type=k}function Kt(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ln(v){const L=v.target;L.removeEventListener("dispose",ln),Hl(L)}function Hl(v){Vl(v),H.remove(v)}function Vl(v){const L=H.get(v).programs;L!==void 0&&(L.forEach(function(W){re.releaseProgram(W)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,W,z,k,de){L===null&&(L=Ut);const ge=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=ql(v,L,W,z,k);g.setMaterial(z,ge);let xe=W.index,ye=1;if(z.wireframe===!0){if(xe=K.getWireframeAttribute(W),xe===void 0)return;ye=2}const Ue=W.drawRange,Be=W.attributes.position;let ve=Ue.start*ye,$e=(Ue.start+Ue.count)*ye;de!==null&&(ve=Math.max(ve,de.start*ye),$e=Math.min($e,(de.start+de.count)*ye)),xe!==null?(ve=Math.max(ve,0),$e=Math.min($e,xe.count)):Be!=null&&(ve=Math.max(ve,0),$e=Math.min($e,Be.count));const mt=$e-ve;if(mt<0||mt===1/0)return;fe.setup(k,z,ue,W,xe);let rt,je=oe;if(xe!==null&&(rt=se.get(xe),je=Z,je.setIndex(rt)),k.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*pt()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(k.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),g.setLineWidth(Tt*pt()),k.isLineSegments?je.setMode(D.LINES):k.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else k.isPoints?je.setMode(D.POINTS):k.isSprite&&je.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Tt=k._multiDrawStarts,pe=k._multiDrawCounts,Lt=k._multiDrawCount,We=xe?se.get(xe).bytesPerElement:1,Xt=H.get(z).currentProgram.getUniforms();for(let cn=0;cn<Lt;cn++)Xt.setValue(D,"_gl_DrawID",cn),je.render(Tt[cn]/We,pe[cn])}else if(k.isInstancedMesh)je.renderInstances(ve,mt,k.count);else if(W.isInstancedBufferGeometry){const Tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pe=Math.min(W.instanceCount,Tt);je.renderInstances(ve,mt,pe)}else je.render(ve,mt)};function za(v,L,W,z){N!==null&&v.isNodeMaterial&&N.setObject(z,v),Xe===!0&&be.setState(v,W,!1),v.transparent===!0&&v.side===Yt&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,ji(v,L,z),v.side=Qn,v.needsUpdate=!0,ji(v,L,z),v.side=Yt):ji(v,L,z)}this.compile=function(v,L,W=null){W===null&&(W=v),N!==null&&N.renderStart(v,L,W),T=ae.get(W),T.init(L),_.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),tt=this.localClippingEnabled,Xe=be.init(this.clippingPlanes,tt),Xe===!0&&be.setGlobalState(this.clippingPlanes,L),N!==null&&Re.render(T.state.shadowsArray,W,L);const z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const de=k.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const ue=de[ge];za(ue,W,L,k),z.add(ue)}else za(de,W,L,k),z.add(de)}),T=_.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(v,L,W=null){const z=this.compile(v,L,W);return new Promise(k=>{function de(){if(z.forEach(function(ge){const xe=H.get(ge).currentProgram;(xe===void 0||xe.isReady())&&z.delete(ge)}),z.size===0){k(v);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Gs=null;function Wl(v){Gs&&Gs(v)}function ka(){Hn.stop()}function Ga(){Hn.start()}const Hn=new Cl;Hn.setAnimationLoop(Wl),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(v){Gs=v,Se.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},Se.addEventListener("sessionstart",ka),Se.addEventListener("sessionend",Ga),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(v,L);const W=Se.enabled===!0&&Se.isPresenting===!0,z=b!==null&&(ne===null||W)&&b.begin(C,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(L),L=Se.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,L,ne),T=ae.get(v,_.length),T.init(L),T.state.textureUnits=q.getTextureUnits(),_.push(T),ke.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Oe.setFromProjectionMatrix(ke,fn,L.reversedDepth),tt=this.localClippingEnabled,Xe=be.init(this.clippingPlanes,tt),y=ce.get(v,R.length),y.init(),R.push(y),Se.enabled===!0&&Se.isPresenting===!0){const ge=C.xr.getDepthSensingMesh();ge!==null&&Hs(ge,L,-1/0,C.sortObjects)}Hs(v,L,0,C.sortObjects),y.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&y.sort(_e,Pe),lt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,lt&&Ie.addToRenderList(y,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&be.beginShadows();const k=T.state.shadowsArray;if(Re.render(k,v,L),Xe===!0&&be.endShadows(),(z&&b.hasRenderPass())===!1){const ge=y.opaque,ue=y.transmissive;if(T.setupLights(),L.isArrayCamera){const xe=L.cameras;if(ue.length>0)for(let ye=0,Ue=xe.length;ye<Ue;ye++){const Be=xe[ye];Va(ge,ue,v,Be)}lt&&Ie.render(v);for(let ye=0,Ue=xe.length;ye<Ue;ye++){const Be=xe[ye];Ha(y,v,Be,Be.viewport)}}else ue.length>0&&Va(ge,ue,v,L),lt&&Ie.render(v),Ha(y,v,L)}ne!==null&&V===0&&(q.updateMultisampleRenderTarget(ne),q.updateRenderTargetMipmap(ne)),z&&b.end(C),v.isScene===!0&&v.onAfterRender(C,v,L),fe.resetDefaultState(),X=-1,Q=null,_.pop(),_.length>0?(T=_[_.length-1],q.setTextureUnits(T.state.textureUnits),Xe===!0&&be.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,N!==null&&N.renderEnd()};function Hs(v,L,W,z){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Oe)){z&&St.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ke);const ge=J.update(v),ue=v.material;ue.visible&&y.push(v,ge,ue,W,St.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Oe))){const ge=J.update(v),ue=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),St.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),St.copy(ge.boundingSphere.center)),St.applyMatrix4(v.matrixWorld).applyMatrix4(ke)),Array.isArray(ue)){const xe=ge.groups;for(let ye=0,Ue=xe.length;ye<Ue;ye++){const Be=xe[ye],ve=ue[Be.materialIndex];ve&&ve.visible&&y.push(v,ge,ve,W,St.z,Be,L)}}else ue.visible&&y.push(v,ge,ue,W,St.z,null,L)}}const de=v.children;for(let ge=0,ue=de.length;ge<ue;ge++)Hs(de[ge],L,W,z)}function Ha(v,L,W,z){const{opaque:k,transmissive:de,transparent:ge}=v;T.setupLightsView(W),Xe===!0&&be.setGlobalState(C.clippingPlanes,W),z&&g.viewport(j.copy(z)),k.length>0&&Qi(k,L,W),de.length>0&&Qi(de,L,W),ge.length>0&&Qi(ge,L,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Va(v,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const ve=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new rn(1,1,{generateMipmaps:!0,type:ve?mn:Wt,minFilter:Kn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const de=T.state.transmissionRenderTarget[z.id],ge=z.viewport||j;de.setSize(ge.z*C.transmissionResolutionScale,ge.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),ye=C.getActiveMipmapLevel();C.setRenderTarget(de),C.getClearColor(et),Ve=C.getClearAlpha(),Ve<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Ie.render(W);const Ue=C.toneMapping;C.toneMapping=sn;const Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Xe===!0&&be.setGlobalState(C.clippingPlanes,z),Qi(v,W,z),q.updateMultisampleRenderTarget(de),q.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let $e=0,mt=L.length;$e<mt;$e++){const rt=L[$e],{object:je,geometry:Tt,material:pe,group:Lt}=rt;if(pe.side===Yt&&je.layers.test(z.layers)){const We=pe.side;pe.side=Ot,pe.needsUpdate=!0,Wa(je,W,z,Tt,pe,Lt),pe.side=We,pe.needsUpdate=!0,ve=!0}}ve===!0&&(q.updateMultisampleRenderTarget(de),q.updateRenderTargetMipmap(de))}C.setRenderTarget(ue,xe,ye),C.setClearColor(et,Ve),Be!==void 0&&(z.viewport=Be),C.toneMapping=Ue}function Qi(v,L,W){const z=L.isScene===!0?L.overrideMaterial:null;for(let k=0,de=v.length;k<de;k++){const ge=v[k],{object:ue,geometry:xe,group:ye}=ge;let Ue=ge.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),ue.layers.test(W.layers)&&Wa(ue,L,W,xe,Ue,ye)}}function Wa(v,L,W,z,k,de){N!==null&&k.isNodeMaterial&&N.setObject(v,k),v.onBeforeRender(C,L,W,z,k,de),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(C,L,W,z,v,de),k.transparent===!0&&k.side===Yt&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,C.renderBufferDirect(W,L,z,k,v,de),k.side=Qn,k.needsUpdate=!0,C.renderBufferDirect(W,L,z,k,v,de),k.side=Yt):C.renderBufferDirect(W,L,z,k,v,de),v.onAfterRender(C,L,W,z,k,de)}function ji(v,L,W){L.isScene!==!0&&(L=Ut);const z=H.get(v),k=T.state.lights,de=T.state.shadowsArray,ge=k.state.version,ue=re.getParameters(v,k.state,de,L,W,T.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue);let ye=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;const Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=ie.get(v.envMap||z.environment,Ue),z.envMapRotation=z.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,ye===void 0&&(v.addEventListener("dispose",ln),ye=new Map,z.programs=ye);let Be=ye.get(xe);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===ge)return qa(v,ue),Be}else ue.uniforms=re.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,W,ue),v.onBeforeCompile(ue,C),Be=re.acquireProgram(ue,xe),ye.set(xe,Be),z.uniforms=ue.uniforms;const ve=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ve.clippingPlanes=be.uniform),qa(v,ue),z.needsLights=Kl(v),z.lightsStateVersion=ge,z.needsLights&&(ve.ambientLightColor.value=k.state.ambient,ve.lightProbe.value=k.state.probe,ve.sunLights.value=k.state.sun,ve.sunLightShadows.value=k.state.sunShadow,ve.directionalLights.value=k.state.directional,ve.directionalLightShadows.value=k.state.directionalShadow,ve.spotLights.value=k.state.spot,ve.spotLightShadows.value=k.state.spotShadow,ve.rectAreaLights.value=k.state.rectArea,ve.ltc_1.value=k.state.rectAreaLTC1,ve.ltc_2.value=k.state.rectAreaLTC2,ve.pointLights.value=k.state.point,ve.pointLightShadows.value=k.state.pointShadow,ve.hemisphereLights.value=k.state.hemi,ve.sunShadowMatrix.value=k.state.sunShadowMatrix,ve.sunShadowCascade.value=k.state.sunShadowCascade,ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ve.spotLightMatrix.value=k.state.spotLightMatrix,ve.spotLightMap.value=k.state.spotLightMap,ve.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Be,z.uniformsList=null,Be}function Xa(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Rs.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function qa(v,L){const W=H.get(v);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Xl(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let W=0,z=v.length;W<z;W++){const k=v[W];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function ql(v,L,W,z,k){L.isScene!==!0&&(L=Ut),q.resetTextureUnits();const de=L.fog,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ue=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ge.workingColorSpace,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,ye=ie.get(z.envMap||ge,xe),Ue=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ve=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let rt=sn;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(rt=C.toneMapping);const je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=je!==void 0?je.length:0,pe=H.get(z),Lt=T.state.lights;if(Xe===!0&&(tt===!0||v!==Q)){const it=v===Q&&z.id===X;be.setState(z,v,it)}let We=!1;z.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Lt.state.version||pe.outputColorSpace!==ue||k.isBatchedMesh&&pe.batching===!1||!k.isBatchedMesh&&pe.batching===!0||k.isBatchedMesh&&pe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&pe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&pe.instancing===!1||!k.isInstancedMesh&&pe.instancing===!0||k.isSkinnedMesh&&pe.skinning===!1||!k.isSkinnedMesh&&pe.skinning===!0||k.isInstancedMesh&&pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&pe.instancingMorph===!1&&k.morphTexture!==null||pe.envMap!==ye||z.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==be.numPlanes||pe.numIntersection!==be.numIntersection)||pe.vertexAlphas!==Ue||pe.vertexTangents!==Be||pe.morphTargets!==ve||pe.morphNormals!==$e||pe.morphColors!==mt||pe.toneMapping!==rt||pe.morphTargetsCount!==Tt||!!pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,pe.__version=z.version);let Xt=pe.currentProgram;We===!0&&(Xt=ji(z,L,k),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Xt,pe));let cn=!1,Pn=!1,ai=!1;const Qe=Xt.getUniforms(),ht=pe.uniforms;if(g.useProgram(Xt.program)&&(cn=!0,Pn=!0,ai=!0),z.id!==X&&(X=z.id,Pn=!0),pe.needsLights){const it=Xl(T.state.lightProbeGridArray,k);pe.lightProbeGrid!==it&&(pe.lightProbeGrid=it,Pn=!0)}if(cn||Q!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Qe.setValue(D,"projectionMatrix",v.projectionMatrix),Qe.setValue(D,"viewMatrix",v.matrixWorldInverse);const In=Qe.map.cameraPosition;In!==void 0&&In.setValue(D,at.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&Qe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Qe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Pn=!0,ai=!0)}if(pe.needsLights&&(Lt.state.sunShadowMap.length>0&&Qe.setValue(D,"sunShadowMap",Lt.state.sunShadowMap,q),Lt.state.directionalShadowMap.length>0&&Qe.setValue(D,"directionalShadowMap",Lt.state.directionalShadowMap,q),Lt.state.spotShadowMap.length>0&&Qe.setValue(D,"spotShadowMap",Lt.state.spotShadowMap,q),Lt.state.pointShadowMap.length>0&&Qe.setValue(D,"pointShadowMap",Lt.state.pointShadowMap,q)),k.isSkinnedMesh){Qe.setOptional(D,k,"bindMatrix"),Qe.setOptional(D,k,"bindMatrixInverse");const it=k.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),Qe.setValue(D,"boneTexture",it.boneTexture,q))}k.isBatchedMesh&&(Qe.setOptional(D,k,"batchingTexture"),Qe.setValue(D,"batchingTexture",k._matricesTexture,q),Qe.setOptional(D,k,"batchingIdTexture"),Qe.setValue(D,"batchingIdTexture",k._indirectTexture,q),Qe.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Qe.setValue(D,"batchingColorTexture",k._colorsTexture,q));const Ln=W.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&I.update(k,W,Xt),(Pn||pe.receiveShadow!==k.receiveShadow)&&(pe.receiveShadow=k.receiveShadow,Qe.setValue(D,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(ht.envMapIntensity.value=L.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=_m()),Pn){if(Qe.setValue(D,"toneMappingExposure",C.toneMappingExposure),pe.needsLights&&Yl(ht,ai),de&&z.fog===!0&&Ee.refreshFogUniforms(ht,de),Ee.refreshMaterialUniforms(ht,z,ee,Y,T.state.transmissionRenderTarget[v.id]),pe.needsLights&&pe.lightProbeGrid){const it=pe.lightProbeGrid;ht.probesSH.value=it.texture,ht.probesMin.value.copy(it.boundingBox.min),ht.probesMax.value.copy(it.boundingBox.max),ht.probesResolution.value.copy(it.resolution)}Rs.upload(D,Xa(pe),ht,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rs.upload(D,Xa(pe),ht,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Qe.setValue(D,"center",k.center),Qe.setValue(D,"modelViewMatrix",k.modelViewMatrix),Qe.setValue(D,"normalMatrix",k.normalMatrix),Qe.setValue(D,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const it=z.uniformsGroups;for(let In=0,oi=it.length;In<oi;In++){const Ka=it[In];te.update(Ka,Xt),te.bind(Ka,Xt)}}return Xt}function Yl(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Kl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,L,W){const z=H.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=L,H.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const W=H.get(v);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,W=0){ne=v,$=L,V=W;let z=null,k=!1,de=!1;if(v){const ue=H.get(v);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),j.copy(v.viewport),Te.copy(v.scissor),Me=v.scissorTest,g.viewport(j),g.scissor(Te),g.setScissorTest(Me),X=-1;return}else if(ue.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(ue.__hasExternalTextures)q.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(ue.__boundDepthTexture!==Ue){if(Ue!==null&&H.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}const xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);const ye=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ye[L])?z=ye[L][W]:z=ye[L],k=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?z=H.get(v).__webglMultisampledFramebuffer:Array.isArray(ye)?z=ye[W]:z=ye,j.copy(v.viewport),Te.copy(v.scissor),Me=v.scissorTest}else j.copy(me).multiplyScalar(ee).floor(),Te.copy(Fe).multiplyScalar(ee).floor(),Me=_t;if(W!==0&&(z=B),g.bindFramebuffer(D.FRAMEBUFFER,z)&&g.drawBuffers(v,z),g.viewport(j),g.scissor(Te),g.setScissorTest(Me),k){const ue=H.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,W)}else if(de){const ue=L;for(let xe=0;xe<v.textures.length;xe++){const ye=H.get(v.textures[xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xe,ye.__webglTexture,W,ue)}}else if(v!==null&&W!==0){const ue=H.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function Ya(v){const L=H.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=A.textureFormatReadable(v.format),L.__typeReadable=A.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,W,z,k,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){g.bindFramebuffer(D.FRAMEBUFFER,xe);try{const ye=v.textures[ue],Ue=ye.format,Be=ye.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const ve=Ya(ye);if(ve.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-z&&W>=0&&W<=v.height-k&&D.readPixels(L,W,z,k,le.convert(Ue),le.convert(Be),de)}finally{const ye=ne!==null?H.get(ne).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(v,L,W,z,k,de,ge,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(L>=0&&L<=v.width-z&&W>=0&&W<=v.height-k){g.bindFramebuffer(D.FRAMEBUFFER,xe);const ye=v.textures[ue],Ue=ye.format,Be=ye.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const ve=Ya(ye);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(L,W,z,k,le.convert(Ue),le.convert(Be),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const mt=ne!==null?H.get(ne).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,mt);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ic(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer($e),D.deleteSync(rt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,W=0){const z=Math.pow(2,-W),k=Math.floor(v.image.width*z),de=Math.floor(v.image.height*z),ge=L!==null?L.x:0,ue=L!==null?L.y:0;q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ge,ue,k,de),g.unbindTexture()},this.copyTextureToTexture=function(v,L,W=null,z=null,k=0,de=0){let ge,ue,xe,ye,Ue,Be,ve,$e,mt;const rt=v.isCompressedTexture?v.mipmaps[de]:v.image;if(W!==null)ge=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,Ue=W.min.y,Be=W.isBox3?W.min.z:0;else{const ht=Math.pow(2,-k);ge=Math.floor(rt.width*ht),ue=Math.floor(rt.height*ht),v.isDataArrayTexture?xe=rt.depth:v.isData3DTexture?xe=Math.floor(rt.depth*ht):xe=1,ye=0,Ue=0,Be=0}z!==null?(ve=z.x,$e=z.y,mt=z.z):(ve=0,$e=0,mt=0);const je=le.convert(L.format),Tt=le.convert(L.type);let pe;L.isData3DTexture?(q.setTexture3D(L,0),pe=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(q.setTexture2DArray(L,0),pe=D.TEXTURE_2D_ARRAY):(q.setTexture2D(L,0),pe=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Lt=g.getParameter(D.UNPACK_ROW_LENGTH),We=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=g.getParameter(D.UNPACK_SKIP_PIXELS),cn=g.getParameter(D.UNPACK_SKIP_ROWS),Pn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const ai=v.isDataArrayTexture||v.isData3DTexture,Qe=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const ht=H.get(v),Ln=H.get(L),it=H.get(ht.__renderTarget),In=H.get(Ln.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,it.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let oi=0;oi<xe;oi++)ai&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(v).__webglTexture,k,Be+oi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(L).__webglTexture,de,mt+oi)),D.blitFramebuffer(ye,Ue,ge,ue,ve,$e,ge,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||H.has(v)){const ht=H.get(v),Ln=H.get(L);g.bindFramebuffer(D.READ_FRAMEBUFFER,U),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let it=0;it<xe;it++)ai?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,k,Be+it):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,k),Qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,de,mt+it):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,de),k!==0?D.blitFramebuffer(ye,Ue,ge,ue,ve,$e,ge,ue,D.COLOR_BUFFER_BIT,D.NEAREST):Qe?D.copyTexSubImage3D(pe,de,ve,$e,mt+it,ye,Ue,ge,ue):D.copyTexSubImage2D(pe,de,ve,$e,ye,Ue,ge,ue);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(pe,de,ve,$e,mt,ge,ue,xe,je,Tt,rt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(pe,de,ve,$e,mt,ge,ue,xe,je,rt.data):D.texSubImage3D(pe,de,ve,$e,mt,ge,ue,xe,je,Tt,rt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,ve,$e,ge,ue,je,Tt,rt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,ve,$e,rt.width,rt.height,je,rt.data):D.texSubImage2D(D.TEXTURE_2D,de,ve,$e,ge,ue,je,Tt,rt);g.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),g.pixelStorei(D.UNPACK_SKIP_ROWS,cn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),de===0&&L.generateMipmaps&&D.generateMipmap(pe),g.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){$=0,V=0,ne=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function vm(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Bt;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let x=0;x<p.count;++x)d.push(p.getX(x)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Jo(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let M=0;M<a[h].length;++M)p.push(a[h][M][u]);const x=Jo(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function Jo(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new an(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,p=h.count;u<p;u++)for(let x=0;x<t;x++){const M=h.getComponent(u,x);o.setComponent(u+d,x,M)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}const Sm=Math.PI*2,ot=s=>{const e=Math.sin(s*127.1+91.7)*43758.5453;return e-Math.floor(e)};function Mm(s){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n={brick:["#34313b","#48424d","#22242b"],metal:["#293d3c","#41564f","#102325"],concrete:["#3b4242","#4e5550","#293233"],crate:["#55503d","#777053","#242b27"],floor:["#242d2e","#353d39","#172323"],labfloor:["#334343","#455552","#1d3332"],road:["#21232c","#32343e","#14191f"],ceiling:["#20292b","#33443f","#111d1d"],door:["#33413e","#617266","#122622"]},i=n[s]??n.metal;t.fillStyle=i[0],t.fillRect(0,0,64,64);for(let a=0;a<480;a++)t.fillStyle=a%3===0?i[1]:i[2],t.globalAlpha=.18+ot(a)*.28,t.fillRect(Math.floor(ot(a+1)*64),Math.floor(ot(a+2)*64),1+a%3,1);if(t.globalAlpha=1,s==="brick")for(let a=0;a<4;a++){const o=a*16;t.fillStyle="#121e23",t.fillRect(0,o,64,2);for(let l=a%2*16;l<64;l+=32)t.fillRect(l,o,2,16),t.fillStyle="#64555a",t.fillRect(l+3,o+3,27,1),t.fillStyle="#121e23"}else if(s==="metal"||s==="ceiling"||s==="door"){t.fillStyle=i[2],t.fillRect(0,0,64,3),t.fillRect(0,0,3,64),t.fillRect(0,31,64,2),t.fillRect(31,0,2,64),t.fillStyle="#9ba89d";for(const a of[5,27,37,59])for(const o of[5,27,37,59])t.fillRect(a,o,2,2);if(s==="door"){t.fillStyle="#141e22",t.fillRect(7,7,50,50),t.fillStyle="#516d61";for(let a=9;a<54;a+=5)t.fillRect(9,a,46,2);t.fillStyle="#b99939",t.fillRect(0,54,64,7),t.fillStyle="#25261e";for(let a=-8;a<70;a+=12)t.beginPath(),t.moveTo(a,61),t.lineTo(a+6,54),t.lineTo(a+12,54),t.lineTo(a+6,61),t.fill()}}else if(s==="crate")t.fillStyle="#262d26",t.fillRect(0,0,64,5),t.fillRect(0,59,64,5),t.fillRect(0,0,5,64),t.fillRect(59,0,5,64),t.fillRect(28,0,7,64),t.fillRect(0,28,64,7),t.fillStyle="#ab9160",t.fillRect(7,7,50,2);else if(s==="floor"||s==="labfloor")t.fillStyle=i[2],t.fillRect(0,0,64,2),t.fillRect(0,0,2,64),t.fillRect(0,32,64,1),t.fillRect(32,0,1,64);else if(s==="concrete"){t.fillStyle="#253031",t.fillRect(0,0,64,2);for(let a=0;a<4;a++)t.fillRect(14+a*13,4,1,9+ot(a)*19)}const r=new Aa(e);return r.magFilter=dt,r.minFilter=dt,r.wrapS=r.wrapT=Cs,r.colorSpace=Rt,r.generateMipmaps=!1,r}function ym(s,e="#86ffb8",t="#101b20",n=256,i=64){const r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,i),a.fillStyle=e,a.fillRect(2,2,n-4,2),a.fillRect(2,i-4,n-4,2),a.fillRect(2,2,2,i-4),a.fillRect(n-4,2,2,i-4);const o=s.split("/").map(h=>h.trim());a.textAlign="center",a.textBaseline="middle";let l=o.length>1?19:22;l=Math.min(l,Math.floor((n-18)/(Math.max(...o.map(h=>h.length))*.61))),a.font=`bold ${Math.max(8,l)}px monospace`,o.forEach((h,d)=>a.fillText(h,n/2,i/2+(d-(o.length-1)/2)*(l+5)));const c=new Aa(r);return c.magFilter=c.minFilter=dt,c.colorSpace=Rt,c.generateMipmaps=!1,c}function Em(){const s=document.createElement("canvas");s.width=64,s.height=80;const e=s.getContext("2d");e.fillStyle="#132126",e.fillRect(0,0,64,80),e.fillStyle="#2e594d";for(let n=0;n<80;n++)e.fillRect(ot(n)*64|0,ot(n+15)*80|0,2,4);e.fillStyle="#19252d",e.fillRect(16,39,36,32),e.fillStyle="#97654b",e.fillRect(24,20,20,27),e.fillStyle="#b78660",e.fillRect(26,21,15,21),e.fillStyle="#342731",e.fillRect(16,13,36,6),e.fillRect(21,7,23,9),e.fillStyle="#806454",e.fillRect(14,17,41,4),e.fillStyle="#131922",e.fillRect(27,28,17,3),e.fillRect(34,27,9,7),e.fillStyle="#81d9b5",e.fillRect(27,29,2,2),e.fillStyle="#382c2b",e.fillRect(29,39,10,3),e.fillStyle="#7f9e9a",e.fillRect(43,45,10,25),e.fillStyle="#313f47";for(let n=47;n<70;n+=5)e.fillRect(44,n,8,2);e.fillStyle="#fcba67",e.fillRect(47,48,2,2),e.fillStyle="#a0dabc",e.font="bold 6px monospace",e.textAlign="center",e.fillText("ELIAS VANE",32,76);const t=new Aa(s);return t.magFilter=t.minFilter=dt,t.colorSpace=Rt,t}class bm{constructor(e){this.canvas=e,this.renderer=new xm({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=sn,this.scene.background=new ze(593690),this.scene.fog=new ba(661536,13,68),this.camera.rotation.order="YXZ";const t=new ph(10077128,2112297,1.45);this.scene.add(t);const n=new Ao(11123670,1.05);n.position.set(-10,25,12),this.scene.add(n);const i=new Ao(7598010,.65);i.position.set(7,9,-25),this.scene.add(i);for(const a of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door"]){const o=new Mo({map:Mm(a)});this.retroMaterial(o),this.mats.set(a,o)}this.buildLevel(),this.flush();for(const a of Ft.doors)this.buildDoor(a);for(const a of Ft.enemies){const o=this.buildMob(a.kind);o.root.position.set(a.x,0,a.z),this.enemyGroups.set(a.id,o),this.scene.add(o.root)}for(const a of Ft.pickups){const o=this.buildPickup(a.kind);o.position.set(a.x,.5,a.z),this.scene.add(o),this.pickupGroups.set(a.id,o)}const r=this.buildMob("raptor",!0);this.mountGroup=r.root,this.mountLegs=r.legs,this.mountGroup.scale.setScalar(1.55),this.mountGroup.position.set(Ft.mount.x,0,Ft.mount.z),this.mountGroup.rotation.y=-.7,this.scene.add(this.mountGroup),this.effectMat=new bn({color:16777215,transparent:!0,opacity:.9}),this.effectMesh=new sh(new jt(.08,.08,.08),this.effectMat,128),this.effectMesh.instanceMatrix.setUsage(Cc),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated"}renderer;scene=new Kc;camera=new Vt(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;lamps=[];hazmat=[];mountGroup;mountLegs=[];effectMesh;effectMat;dummy=new Et;snapGrid=new De(160,100);clock=0;lastResolution="";powerLamp;lights=[];retroMaterial(e){e.onBeforeCompile=t=>{t.uniforms.retroGrid={value:this.snapGrid},t.vertexShader=`uniform vec2 retroGrid;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},e.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(e,t=0,n=!0){const i=`c${e}-${t}`;let r=this.mats.get(i);return r||(r=new Mo({color:e,emissive:t,flatShading:n}),this.retroMaterial(r),this.mats.set(i,r)),r}basic(e){const t=`b${e}`;let n=this.mats.get(t);return n||(n=new bn({color:e}),this.mats.set(t,n)),n}addGeometry(e,t,n,i,r,a=0,o=0,l=0){const c=new st().compose(new O(n,i,r),new si().setFromEuler(new Cn(a,o,l)),new O(1,1,1));e.applyMatrix4(c),e.attributes.normal||e.computeVertexNormals();const h=this.batches.get(t)||[];h.push(e),this.batches.set(t,h)}box(e,t,n,i,r,a,o,l=0){const c=new jt(i,r,a),h=c.attributes.position,d=c.attributes.normal,u=c.attributes.uv;for(let p=0;p<h.count;p++){const x=Math.abs(d.getX(p)),M=Math.abs(d.getY(p));u.setXY(p,x>.5?h.getZ(p)/2:h.getX(p)/2,M>.5?h.getZ(p)/2:h.getY(p)/2)}this.addGeometry(c,o,e,t,n,0,l)}flush(){for(const[e,t]of this.batches){const n=vm(t,!1);this.scene.add(new ut(n,e));for(const i of t)i.dispose()}this.batches.clear()}sign(e,t,n,i,r=3,a=.8,o=0,l="#86ffb8",c="#101b20"){const h=ym(e,l,c),d=new bn({map:h,side:Yt});this.mats.set(`sign-${this.mats.size}`,d);const u=new ut(new Zn(r,a),d);return u.position.set(t,n,i),u.rotation.y=o,this.scene.add(u),u}lamp(e,t,n,i=8978368,r=!1){this.box(e,t,n,r?.08:1.2,r?1.9:.09,.1,this.mat(11791056,i));const a=new ut(new jt(r?.09:1.22,r?1.95:.1,.11),this.basic(i));a.position.set(e,t,n+.015),this.scene.add(a),this.lamps.push(a)}buildLevel(){const e=t=>this.mats.get(t);this.box(-.7,-.12,-20,35,.2,69,e("road")),this.box(0,-.005,8,10.5,.08,8.1,e("floor")),this.box(0,-.005,-26,14,.08,12.1,e("labfloor")),this.box(11.3,-.005,-28,8,.08,8,e("floor")),this.box(0,-.005,-39,20,.08,14,e("labfloor")),this.box(-7,-.005,-49,8,.08,6,e("metal")),this.box(-15.4,-.005,-7,4,.08,6,e("floor")),this.box(0,4.05,8,10.6,.12,8.3,e("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,e("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,e("ceiling")),this.box(0,4.5,-39,20.4,.12,14,e("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,e("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,e("ceiling"));for(const t of Ft.walls)this.box(t.x,(t.y??0)+t.h/2,t.z,t.w,t.h,t.d,e(t.material)),t.h>3&&t.d<1&&(this.box(t.x,.15,t.z+.03,t.w,.25,t.d+.04,this.mat(1517867)),this.box(t.x,3.08,t.z+.035,t.w,.1,t.d+.08,this.mat(4153687)));for(let t=-1;t<=1;t+=2)for(let n=0;n<5;n++){const i=1-n*5,r=8+ot(n+t+10)*10,a=t*17;this.box(a,r/2,i,6,r,4.5,e("brick")),this.box(a,r+.2,i,6.4,.4,4.8,this.mat(1583412));for(let o=4.8;o<r-1;o+=2.3)for(let l=0;l<2;l++){const c=t*13.95;this.box(c,o,i-1+l*2,.1,1.2,.9,this.mat((n+l)%3===0?6720377:1781821,(n+l)%3===0?2640696:0)),this.box(c-t*.04,o-.64,i-1+l*2,.25,.12,1.15,this.mat(989474))}this.box(a+t*.4,r+.8,i,.4,1.2,1.7,e("metal")),this.box(a,r+2.5,i,.12,4,.12,this.mat(4479848))}for(let t=0;t<10;t++){const n=-35+t*8,i=15+ot(t+30)*27,r=-63-ot(t+41)*18;this.box(n,i/2,r,5,i,6,this.mat(1385265));for(let a=4;a<i;a+=4)this.box(n,a,r+3.04,3.5,.15,.08,this.basic(2576199))}for(const t of[-11.8,11.8])this.box(t,.045,-8,2.6,.15,24,e("concrete")),this.box(t+Math.sign(t)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const t of[-1,1])for(let n=0;n<5;n++){const i=1-n*4.4;this.box(t*12.94,2.65,i,.08,1.8,1.7,this.mat(1518642));for(let r=-1;r<=1;r++)this.box(t*12.88,2.65,i+r*.58,.07,1.8,.045,this.mat(5859164));this.box(t*12.85,1.72,i,.13,.15,1.9,e("metal")),n%2===0&&this.lamp(t*12.84,3.95,i,n===2?14371183:7791803,!1)}for(const t of[6,10,-22,-27,-30,-34,-38,-42,-49]){const n=t<-31&&t>-46;this.box(0,3.91,t,n?20:9,.18,.25,e("metal")),this.lamp(t<-46?-7:0,t>0?3.79:4.22,t,11595712),this.box(3,4.12,t,1.5,.08,.8,e("metal"));for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,t,.06,.035,.65,this.mat(1189162))}for(const t of Ft.hazards){const n=new bn({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${t.x}`,n);const i=new ut(new Zn(t.w,t.d),n);i.rotation.x=-Math.PI/2,i.position.set(t.x,.11,t.z),this.scene.add(i),this.hazmat.push(i),this.box(t.x,t.x<0?.14:.02,t.z,t.w+.2,.1,t.d+.2,this.mat(2112557));for(let r=0;r<8;r++)this.box(t.x+(ot(r)-.5)*t.w,.13,t.z+(ot(r+13)-.5)*t.d,.12,.05,.12,this.basic(9623415))}for(const t of Ft.props){const n=t.x,i=t.z,r=t.rotation??0;if(["neon","office-sign","facility-sign","sign"].includes(t.kind)){const a=t.kind==="neon",o=t.kind==="office-sign"?3.05:t.kind==="facility-sign"?4.15:a?4.9:3.6;this.sign(t.label??"",n,o,i,t.kind==="facility-sign"?9:a?4.8:5,t.kind==="facility-sign"?1.3:.85,r,a&&i<-3?"#ff7095":"#96ffc9")}else if(t.kind==="portrait"){const a=new bn({map:Em()});this.mats.set("portrait",a);const o=new ut(new Zn(.9,1.12),a);o.position.set(n,2.1,i),o.rotation.y=Math.PI,this.scene.add(o),this.box(n,2.1,i+.08,1.04,1.27,.06,this.mat(5987138))}else if(t.kind==="office-board"){this.box(n,2,i,.08,1.7,3.7,this.mat(5327932)),this.sign(t.label??"",n-.06,2.55,i,2.8,.38,r,"#cecfaa","#32392e");for(let a=0;a<7;a++)this.box(n-.07,1.8+ot(a)*.5,i+(ot(a+10)-.5)*2.8,.035,.42,.31,this.mat(a%2?12233109:8296837))}else if(["terminal","console"].includes(t.kind)){this.box(n,1.4,i,.85,.65,.12,this.mat(1322032)),this.box(n,1.4,i+.07,.65,.45,.02,this.basic(3840368));for(let a=0;a<4;a++)this.box(n-.2,1.53-a*.08,i+.085,.32-ot(a)*.1,.025,.01,this.basic(10280873));this.box(n,1.02,i+.2,.9,.08,.5,this.mat(4872532))}else if(t.kind==="lamp")this.box(n,1.9,i,.13,3.8,.13,this.mat(4217429)),this.box(n,3.7,i-.35,.12,.12,.8,this.mat(4217429)),this.lamp(n,3.61,i-.68,11530187);else if(t.kind==="car"){this.box(n,1,i,1.8,.65,3.6,this.mat(4797250),r),this.box(n,1.62,i-.2,1.58,.8,1.8,this.mat(2701636),r),this.box(n,1.63,i+.76,1.4,.48,.08,this.mat(1585465),r);for(const a of[-.97,.97])for(const o of[-1.15,1.15])this.addGeometry(new Gt(.39,.39,.24,8),this.mat(1187107),n+a,.46,i+o,0,0,Math.PI/2);this.box(n,.78,i+1.86,1.1,.16,.08,this.basic(7021366)),this.box(n+.5,1.5,i,.04,.02,1.5,this.mat(9737091),.3)}else if(t.kind==="barrels")for(let a=0;a<3;a++){const o=n+a%2*.68,l=i+Math.floor(a/2)*.7;this.addGeometry(new Gt(.29,.3,1,8),this.mat(a===2?5918776:2576451),o,.5,l),this.addGeometry(new Gt(.31,.31,.07,8),this.mat(1059883),o,.22,l),this.addGeometry(new Gt(.31,.31,.07,8),this.mat(1059883),o,.78,l),this.box(o,.6,l+.3,.17,.19,.02,this.basic(14003533))}else if(t.kind==="rubble")for(let a=0;a<12;a++)this.box(n+(ot(a)-.5)*2,.18+ot(a+10)*.18,i+(ot(a+20)-.5)*2,.3+ot(a+30)*.6,.25+ot(a+40)*.4,.25+ot(a+50)*.6,e("concrete"),ot(a+60)*Sm);else if(t.kind==="tank")this.addGeometry(new Gt(.6,.65,.27,8),e("metal"),n,.14,i),this.addGeometry(new Gt(.55,.55,2.5,8),this.mat(2384967,1063201),n,1.52,i),this.addGeometry(new Gt(.65,.65,.28,8),e("metal"),n,2.91,i),this.box(n-.32,1.6,i+.45,.15,2.3,.15,this.basic(6671237)),this.box(n,1.8,i+.52,.28,.6,.16,this.mat(7580774)),this.box(n,1.4,i+.53,.53,.46,.12,this.mat(5929809)),this.box(n-.18,.8,i+.49,.12,.8,.15,this.mat(5929809)),this.box(n+.18,.8,i+.49,.12,.8,.15,this.mat(5929809));else if(t.kind==="pipe"){this.addGeometry(new Gt(.15,.15,12,6),this.mat(4549473),n,3.3,i,Math.PI/2);for(let a=-2;a<=2;a++)this.addGeometry(new Gt(.19,.19,.14,6),this.mat(1521208),n,3.3,i+a*2.4,Math.PI/2)}else if(t.kind==="lab-table"){this.box(n,1.27,i,3.9,.15,1.7,this.mat(5862506)),this.box(n,1.47,i,1.4,.26,.6,this.mat(6380610));for(let a=0;a<4;a++)this.box(n+(a-1.5)*.3,1.65,i,.16,.25,.18,this.mat(6653548))}else if(t.kind==="locker")this.box(n,1.25,i,.65,2.5,.85,e("metal")),this.box(n-.34,1.3,i,.025,.15,.17,this.basic(10471339));else if(t.kind==="power")this.box(n,1.15,i,.95,2.3,.45,e("metal")),this.sign("LIFT POWER",n,1.8,i+.24,1,.26),this.sign("E / ACTIVATE",n,1.48,i+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new ut(new jt(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(n,1.12,i+.25),this.scene.add(this.powerLamp),this.box(n,.7,i+.28,.18,.35,.1,this.mat(12235397));else if(t.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,i,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,i,1,.4,Math.PI/2);else if(t.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",n,2.4,-51.91,5,.9),this.box(n,.05,i,6,.16,4,e("metal"));for(let a=0;a<5;a++)this.box(n,.17,i-2+a,6,.03,.12,this.mat(11310909))}else if(t.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(t.label??"",10,3.3,i,4,.65,-Math.PI/2,"#ff6b56");else if(t.kind==="street-mark")for(let a=0;a<3;a++)this.box(n,.05,i+(a-1)*1.8,.18,.03,.9,this.mat(9213035));else if(t.kind==="drain"){this.box(n,.04,i,1.7,.08,.6,this.mat(661533));for(let a=0;a<12;a++)this.box(n-.8+a*.14,.095,i,.055,.02,.5,this.mat(5399644))}else if(t.kind==="corpse"||t.kind==="skeleton")this.box(n,.17,i,.45,.3,1.5,this.mat(t.kind==="corpse"?5058625:10658186),.55),this.box(n-.24,.16,i+.75,.35,.23,.34,this.mat(7763815)),this.box(n,.025,i+.15,1.7,.02,2,this.mat(5051943));else if(t.kind==="chair"){this.box(n,.55,i,.6,.12,.6,this.mat(3684161)),this.box(n,.97,i+.25,.6,.8,.09,this.mat(3749953));for(const a of[-.23,.23])for(const o of[-.23,.23])this.box(n+a,.28,i+o,.06,.5,.06,e("metal"))}else if(t.kind==="bottles")for(let a=0;a<3;a++)this.addGeometry(new Gt(.06,.1,.3,5),this.mat(4288072),n+a*.18,1,i);else t.kind==="secret-table"&&(this.box(n,.75,i,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}for(const t of[[0,2.6,7],[0,3,-26],[0,3,-39],[8,3,-8],[-9,3,-7]]){const n=new gh(t[2]===-7?13579886:5560217,7,12,2);n.position.set(t[0],t[1],t[2]),this.lights.push(n),this.scene.add(n)}}mesh(e,t,n,i,r,a){const o=new ut(e,t);return o.position.set(n,i,r),a.add(o),o}localBox(e,t,n,i,r,a,o,l,c=0){return this.mesh(new jt(r,a,o),this.mat(l,c),t,n,i,e)}buildDoor(e){const t=new Ht;t.position.set(e.x,0,e.z),this.mesh(new jt(e.w,3.2,e.d),this.mats.get("door"),0,1.6,0,t);const n=e.w>e.d;n?(this.localBox(t,0,1.58,e.d/2+.015,e.w*.85,.08,.035,7581064),this.localBox(t,e.w*.35,1.3,e.d/2+.03,.15,.25,.03,e.locked?15629110:7924400,2250034)):this.localBox(t,-e.w/2-.015,1.58,0,.035,.08,e.d*.85,7581064),this.scene.add(t),this.doorGroups.set(e.id,t);const i=n?e.x:e.x-.3,r=n?e.z+.33:e.z;this.sign(e.label,i,3.57,r,n?Math.min(e.w+1.4,5):2.4,.5,n?0:-Math.PI/2,e.locked?"#ffb05d":"#8ccdaa")}buildMob(e,t=!1){const n=new Ht,i=new Ht,r=[],a=[];if(e==="raptor"){const d=t?9404753:5730115,u=t?12299377:7903315;this.localBox(n,0,.88,0,.53,.5,1.03,d),this.mesh(new Ca(.4,0),this.mat(u),0,1.12,-.33,n),i.position.set(0,1.48,-.53),n.add(i),this.localBox(i,0,0,-.12,.37,.32,.5,u),this.localBox(i,0,-.07,-.45,.31,.17,.45,d),this.localBox(i,0,-.17,-.44,.3,.055,.43,12168840);for(const M of[-1,1]){this.localBox(i,M*.194,.07,-.18,.02,.07,.12,t?15788181:16730420,7804169);const m=new Ht;m.position.set(M*.27,.68,.12),this.localBox(m,0,-.08,0,.2,.5,.32,d),this.localBox(m,0,-.43,-.04,.1,.45,.11,u),this.localBox(m,0,-.64,-.2,.16,.11,.4,9737333),this.localBox(m,M*.075,-.64,-.42,.045,.07,.16,13683379),r.push(m),n.add(m);const f=new Ht;f.position.set(M*.33,1,-.44),this.localBox(f,0,-.15,-.12,.09,.34,.13,d),this.localBox(f,0,-.28,-.22,.1,.065,.21,12696227),a.push(f),n.add(f)}const p=new Ht;p.position.set(0,1,.48);const x=this.mesh(new Ns(.23,1.5,4),this.mat(d),0,0,.68,p);x.rotation.x=Math.PI/2,n.add(p);for(let M=0;M<5;M++)this.localBox(n,0,1.2-M*.04,.05+M*.19,.08,.2,.12,3161129);if(t){this.localBox(n,0,1.26,.02,.7,.18,.6,3157295),this.localBox(n,0,1.4,.18,.58,.25,.13,6180931);for(const M of[-1,1])this.localBox(n,M*.35,1.03,0,.07,.5,.65,3357238)}return{root:n,legs:r,arms:a,head:i,tail:p,kind:e,dead:!1}}const o=e==="brute",l=e==="soldier",c=l?10127216:o?7820880:7835740,h=l?4216168:o?6565430:4606772;if(this.localBox(n,0,1.1,0,o?.94:.58,.82,.36,c),this.localBox(n,0,1.15,.06,o?1:.64,.7,.43,h),this.localBox(n,0,.66,0,.52,.22,.38,3487552),i.position.set(0,1.72,-.01),n.add(i),this.localBox(i,0,0,0,.4,.4,.38,c),l)this.localBox(i,0,.1,.025,.46,.35,.44,3227472),this.localBox(i,0,.025,-.211,.35,.09,.03,5760719,1533791),this.localBox(n,0,1.25,-.24,.34,.29,.1,7836297),this.localBox(n,.05,1.22,-.305,.18,.08,.035,15042892);else{this.localBox(i,0,-.05,-.211,.26,.17,.03,3678495),this.localBox(i,0,-.04,-.23,.22,.035,.02,12827020);for(const d of[-.12,.12])this.localBox(i,d,.07,-.207,.07,.045,.03,16734012,6690048)}for(const d of[-1,1]){const u=new Ht;u.position.set(d*(o?.3:.19),.68,0),this.localBox(u,0,-.25,0,.2,.53,.26,h),this.localBox(u,0,-.57,-.07,.24,.16,.36,1911602),r.push(u),n.add(u);const p=new Ht;if(p.position.set(d*(o?.59:.39),1.45,0),this.localBox(p,0,-.28,0,o?.3:.2,.65,.25,c),this.localBox(p,0,-.06,0,o?.38:.28,.25,.35,h),this.localBox(p,0,-.55,-.06,.2,.17,.22,c),a.push(p),n.add(p),!l){const x=this.mesh(new Ns(.12,.36,4),this.mat(11774857),d*(o?.48:.36),1.62,0,n);x.rotation.z=-d*.55}}return l&&(this.localBox(a[1],-.15,-.5,-.31,.18,.22,.6,1584438),this.localBox(a[1],-.15,-.43,-.68,.06,.075,.25,6387309)),o&&(n.scale.setScalar(1.47),this.localBox(n,0,1.15,-.25,.35,.38,.14,8225136),this.localBox(n,0,1.15,-.335,.13,.13,.035,5700503,556583)),{root:n,legs:r,arms:a,head:i,kind:e,dead:!1}}buildPickup(e){const t=new Ht,i={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:9149585,plasma:6547611,machinegun:7767941}[e];if(e==="health")this.localBox(t,0,0,0,.55,.34,.3,12898751),this.localBox(t,0,0,.16,.3,.08,.015,12992833),this.localBox(t,0,0,.161,.08,.27,.015,12992833);else if(e==="armor"){this.localBox(t,0,0,0,.45,.42,.24,i),this.localBox(t,0,.26,0,.22,.13,.2,9684915);for(const a of[-1,1])this.localBox(t,a*.27,.1,0,.1,.3,.22,i)}else if(e==="ammo"){this.localBox(t,0,0,0,.5,.3,.35,5859659);for(let a=0;a<4;a++)this.localBox(t,-.17+a*.115,.19,0,.055,.15,.065,i)}else if(e==="keycard")this.localBox(t,0,0,0,.35,.23,.02,8961178),this.localBox(t,0,.04,-.015,.33,.04,.02,2178355),this.localBox(t,.08,-.06,-.016,.07,.055,.02,15060343);else if(e==="evidence"){this.localBox(t,0,0,0,.42,.02,.48,i);for(let a=0;a<5;a++)this.localBox(t,0,.016,-.15+a*.07,.24,.009,.018,4806471)}else this.localBox(t,0,0,0,e==="revolver"?.35:.7,.13,.2,i),this.localBox(t,.27,0,0,.4,.06,.07,6584431),this.localBox(t,-.11,-.15,0,.12,.22,.12,4209714),e==="plasma"&&this.localBox(t,0,.07,-.105,.37,.06,.035,7993010,1333048);const r=new ut(new Pa(.28,.36,12),new bn({color:i,transparent:!0,opacity:.6,side:Yt}));return r.rotation.x=-Math.PI/2,r.position.y=-.43,t.add(r),t}resize(e){const t=e.resolution==="320"?320:640,n=e.resolution==="320"?200:400;this.renderer.setSize(t,n,!1),this.snapGrid.set(t/2,n/2);const i=this.canvas.getBoundingClientRect();this.camera.aspect=i.width&&i.height?i.width/i.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=e.resolution;for(const r of this.lights)r.visible=e.quality==="high"}render(e,t,n){this.lastResolution!==n.resolution&&this.resize(n),this.clock+=t;const i=e.player,r=i.crouching?.9:i.mounted?2.6:1.65,a=e.status==="playing"?Math.sin(this.clock*(i.mounted?9:11))*(i.mounted?.025:.009):0;this.camera.position.set(i.x,i.y+r+a,i.z),this.camera.rotation.set(i.pitch+i.recoil*.012,i.yaw,0,"YXZ");for(const l of e.doors){const c=this.doorGroups.get(l.id);c&&(c.position.y=l.open*3.4)}for(const l of e.enemies){const c=this.enemyGroups.get(l.id);if(c.root.position.set(l.x,0,l.z),l.alive){c.root.rotation.y=Math.atan2(-(i.x-l.x),-(i.z-l.z)),c.root.rotation.z=0,c.root.position.y=0;const h=Math.sin(l.phase*6)*(l.alert?.72:.13);c.legs.forEach((d,u)=>d.rotation.x=h*(u%2?1:-1)),c.arms.forEach((d,u)=>{d.rotation.x=(c.kind==="soldier"?-.4:0)-h*(u%2?1:-1)*.5}),c.tail&&(c.tail.rotation.y=Math.sin(l.phase*3)*.18),c.head.rotation.z=l.hurt>0?Math.sin(this.clock*45)*.09:0,c.root.scale.y=(c.kind==="brute"?1.47:1)*(l.hurt>0?.94:1),c.dead=!1}else if(c.root.position.y=.1,c.root.rotation.z=Math.PI/2,c.root.rotation.x=.15,c.root.scale.y=c.kind==="brute"?1.47:1,!c.dead){const h=new ut(new wa(c.kind==="brute"?1:.6,9),new bn({color:6822962,side:Yt}));h.rotation.x=-Math.PI/2,h.position.set(l.x,.018,l.z),this.scene.add(h),c.dead=!0}}for(const l of e.pickups){const c=this.pickupGroups.get(l.id);c.visible=!l.collected,c.visible&&(c.position.y=.48+Math.sin(this.clock*3+l.x)*.06,c.rotation.y=this.clock*.75)}this.mountGroup.visible=!i.mounted,this.mountGroup.position.set(e.mount.x,0,e.mount.z),this.mountLegs.forEach((l,c)=>l.rotation.x=Math.sin(this.clock*2+c*Math.PI)*.04),this.powerLamp&&this.powerLamp.material.color.setHex(e.powered?7602073:16737843);for(let l=0;l<this.lamps.length;l++)this.lamps[l].visible=Math.sin(this.clock*3+l*1.73)>0||l%4!==1||Math.sin(this.clock*31+l)>-.7;for(let l=0;l<this.hazmat.length;l++)this.hazmat[l].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+l),.19);let o=0;for(const l of e.effects){const c=l.kind==="blood"?12334150:l.kind==="plasma"?7274401:l.kind==="smoke"?6585208:16765568,h=1-l.life/l.maxLife;for(let d=0;d<(l.kind==="muzzle"?3:7)&&o<128;d++){const u=l.kind==="smoke"?.32:l.kind==="plasma"?.06:.22;this.dummy.position.set(l.x+(ot(d+l.x)-.5)*h*u*5+(l.dx??0)*h*.4,l.y+(ot(d+l.z)-.3)*h*u*3,l.z+(ot(d+13)-.5)*h*u*5+(l.dz??0)*h*.4),this.dummy.scale.setScalar(l.kind==="smoke"?1+h*4:Math.max(.25,1-h)),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(o,this.dummy.matrix),this.effectMesh.setColorAt(o,new ze(c)),o++}}this.effectMesh.count=o,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.renderer.render(this.scene,this.camera)}dispose(){const e=new Set;this.scene.traverse(t=>{t instanceof ut&&e.add(t.geometry)});for(const t of e)t.dispose();for(const t of this.mats.values())t.map?.dispose(),t.dispose();this.effectMat.dispose(),this.renderer.dispose()}}const yn={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026}},yr=["revolver","shotgun","plasma","machinegun"],Qo={revolver:0,shotgun:0,plasma:0,machinegun:0},yi={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},It=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Qt=(s,e,t)=>Math.max(e,Math.min(t,s));class Ol{constructor(e,t="normal"){this.level=e,this.resetState(t)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(e){const t=e==="easy"?.8:e==="hard"?1.18:1,n={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:"revolver",owned:[],ammo:{...Qo},reserve:{...Qo},reload:0,cooldown:0,recoil:0,hurt:0};this.state={player:n,enemies:this.level.enemies.map(i=>({...i,health:Math.round(yi[i.kind].health*t),maxHealth:Math.round(yi[i.kind].health*t),alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,path:[],pathTime:0})),doors:this.level.doors.map(i=>({...i,open:0,target:0})),pickups:this.level.pickups.map(i=>({...i,collected:!1})),effects:[],status:"playing",kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty:e},this.reloading=null,this.attackWindups.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}restart(e=!1){if(e&&!this.checkpointState){this.resetState(this.state.difficulty);const t=this.state,n=t.player;n.keycard=!0,n.owned=["revolver","shotgun","machinegun"],n.weapon="machinegun",n.health=100,n.armor=55;for(const i of n.owned)n.ammo[i]=yn[i].clip,n.reserve[i]=yn[i].clip*4;for(const i of t.pickups)i.z>-32.2&&i.kind!=="evidence"&&i.x>-13&&(i.collected=!0);for(const i of t.enemies)i.z>-32.2&&(i.alive=!1,i.health=0,t.kills++);for(const i of t.doors)["office","facility","security"].includes(i.id)&&(i.open=1,i.target=1);t.checkpoint=!0,this.checkpointState=structuredClone(t),this.checkpointSecrets=[]}if(e&&this.checkpointState){this.state=structuredClone(this.checkpointState);const t=this.state.player;t.x=this.level.checkpoint.x,t.z=this.level.checkpoint.z,t.y=0,t.vy=0,t.grounded=!0,t.mounted=!1,t.health=Math.max(t.health,75),t.armor=Math.max(t.armor,25),t.cooldown=0,t.reload=0,t.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const n of this.state.enemies)n.path=[],n.pathTime=0,n.cooldown=1.1;this.message("CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.",4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(e,t){e=Qt(e,0,.075);const n=this.state,i=n.player;if(n.status!=="playing")return;if(n.time+=e,n.messageTime=Math.max(0,n.messageTime-e),i.yaw+=t.lookX,i.pitch=Qt(i.pitch+t.lookY,-1.22,1.22),i.cooldown=Math.max(0,i.cooldown-e),i.recoil=Math.max(0,i.recoil-e*4.6),i.hurt=Math.max(0,i.hurt-e*2),this.emptyClick=Math.max(0,this.emptyClick-e),i.reload>0&&(i.reload=Math.max(0,i.reload-e),i.reload===0&&this.reloading)){const a=this.reloading,o=Math.min(yn[a].clip-i.ammo[a],i.reserve[a]);i.ammo[a]+=o,i.reserve[a]-=o,this.reloading=null}(t.weaponDelta||t.weaponSlot)&&this.switchWeapon(t.weaponDelta,t.weaponSlot||void 0),t.reload&&this.reload(),t.interact&&this.interact(),this.updateDoors(e),this.movePlayer(e,t),this.collectPickups(),t.fire&&this.fire();const r=t.slow&&n.slow>.015;n.slow=Qt(n.slow+(r?-.17:.085)*e,0,1),this.updateEnemies(e*(r?.32:1)),this.updateHazards(e);for(const a of n.effects)a.life-=e;n.effects=n.effects.filter(a=>a.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const e=this.state.player;return e.y+(e.mounted?2.6:e.crouching?.9:1.65)}canOccupy(e,t,n=.32,i=this.state.player.y){return this.state.player.mounted&&(t<-19.1||t>3.2)?!1:this.clearAt(e,t,n,i,this.height())}clearAt(e,t,n,i=0,r=1.8){const a=this.level.bounds;if(e-n<a.minX||e+n>a.maxX||t-n<a.minZ||t+n>a.maxZ)return!1;for(const o of this.level.walls){const l=o.y??0;if(!(i>=l+o.h-.025||i+r<=l+.025)&&this.circleBox(e,t,n,o.x,o.z,o.w,o.d))return!1}for(const o of this.state.doors)if(!(i+r<=o.open*3.4+.025)&&this.circleBox(e,t,n,o.x,o.z,o.w,o.d))return!1;return!0}circleBox(e,t,n,i,r,a,o){const l=Qt(e,i-a/2,i+a/2),c=Qt(t,r-o/2,r+o/2);return(e-l)**2+(t-c)**2<n*n}movePlayer(e,t){const n=this.state.player;t.crouch&&!n.mounted?n.crouching=!0:n.crouching&&(n.crouching=!1,this.canOccupy(n.x,n.z)||(n.crouching=!0));const i=Qt(t.forward,-1,1),r=Qt(t.strafe,-1,1),a=Math.max(1,Math.hypot(i,r)),o=n.mounted?8:n.crouching?2.3:t.sprint?6.4:4.4,l=(-Math.sin(n.yaw)*i+Math.cos(n.yaw)*r)*o*e/a,c=(-Math.cos(n.yaw)*i-Math.sin(n.yaw)*r)*o*e/a;n.mounted&&(n.z+c<-19.1||n.z+c>3.2)&&this.message("Your strider stays in the street. Press E to dismount and enter the building.",2);const h=Math.max(1,Math.ceil(Math.hypot(l,c)/.14)),d=n.mounted?.53:.32;for(let x=0;x<h;x++)this.canOccupy(n.x+l/h,n.z,d)&&(n.x+=l/h),this.canOccupy(n.x,n.z+c/h,d)&&(n.z+=c/h);t.jump&&!this.jumpHeld&&n.grounded&&!n.crouching&&(n.vy=n.mounted?6.4:6.1,n.grounded=!1),this.jumpHeld=t.jump,n.vy-=14*e;const u=n.y+n.vy*e;let p=0;if(n.vy<=0)for(const x of this.level.walls){const M=(x.y??0)+x.h;M<=n.y+.035&&M>=u&&this.circleBox(n.x,n.z,d,x.x,x.z,x.w,x.d)&&(p=Math.max(p,M))}n.vy<=0&&u<=p?(n.y=p,n.vy=0,n.grounded=!0):this.canOccupy(n.x,n.z,d,u)?(n.y=u,n.grounded=!1):n.vy>0&&(n.vy=0),n.mounted&&(this.state.mount.x=n.x,this.state.mount.z=n.z)}switchWeapon(e,t){const n=this.state.player;if(!n.owned.length)return;let i;if(t){if(i=yr[Qt(Math.round(t)-1,0,3)],!n.owned.includes(i)){this.message("Weapon not acquired yet.",1.5);return}}else{const r=yr.filter(o=>n.owned.includes(o)),a=r.indexOf(n.weapon);i=r[(a+(e>0?1:-1)+r.length)%r.length]}i!==n.weapon&&(n.weapon=i,n.reload=0,n.cooldown=.22,n.recoil=.22,this.reloading=null,this.message(yn[i].name,1.2))}reload(){const e=this.state.player,t=e.weapon,n=yn[t];if(!(!e.owned.includes(t)||e.reload>0||e.ammo[t]>=n.clip)){if(e.reserve[t]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=t,e.reload=n.reload,this.state.events.push({type:"reload",weapon:t})}}fire(){const e=this.state.player;if(this.state.status!=="playing"||e.cooldown>0||e.reload>0)return;if(e.mounted){this.bite();return}if(!e.owned.includes(e.weapon)){this.message("Find your revolver in the office.",2);return}const t=yn[e.weapon];if(e.ammo[e.weapon]<=0){e.reserve[e.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}e.ammo[e.weapon]--,e.cooldown=t.interval,e.recoil=1,this.state.events.push({type:"shot",weapon:e.weapon}),this.effect("muzzle",e.x-Math.sin(e.yaw)*.5,e.z-Math.cos(e.yaw)*.5,this.eyeHeight()-.18,.07);for(let n=0;n<t.pellets;n++){const i=e.yaw+(this.random()-.5)*t.spread*2,r=e.pitch+(this.random()-.5)*t.spread*1.5,a=-Math.sin(i)*Math.cos(r),o=-Math.cos(i)*Math.cos(r),l=Math.sin(r),c=this.eyeHeight();let h=this.rayWalls(e.x,c,e.z,a,l,o,t.range),d=null;for(const M of this.state.enemies){if(!M.alive)continue;const m=yi[M.kind],f=this.rayEnemy(M,e.x,c,e.z,a,l,o,m.radius,m.height);f!==null&&f>=0&&f<h&&(h=f,d=M)}const u=e.x+a*h,p=e.z+o*h,x=c+l*h;if(d){const M=e.weapon==="shotgun"?Math.max(.35,1-h/42):1;this.damageEnemy(d,t.damage*M),this.effect("blood",u,p,x,.24)}else h<t.range&&this.effect("spark",u,p,x,.15);if(e.weapon==="plasma"){const M=Math.min(12,Math.ceil(h/1.5));for(let m=1;m<=M;m++){const f=h*m/M;this.effect("plasma",e.x+a*f,e.z+o*f,c+l*f,.14)}}}}bite(){const e=this.state.player;e.cooldown=.58,e.recoil=.7;let t=!1;for(const n of this.state.enemies){if(!n.alive||It(n,e)>3)continue;const i=n.x-e.x,r=n.z-e.z,a=Math.hypot(i,r);(-Math.sin(e.yaw)*i-Math.cos(e.yaw)*r)/Math.max(a,.1)>.35&&this.visible(e,n)&&(this.damageEnemy(n,95),this.effect("blood",n.x,n.z,1.1,.3),t=!0)}this.state.events.push({type:"enemy",message:t?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(e,t,n,i,r,a,o,l,c){const h=t-e.x,d=i-e.z,u=r*r+o*o,p=2*(h*r+d*o),x=h*h+d*d-l*l,M=p*p-4*u*x;if(M<0||u<1e-7)return null;const m=(-p-Math.sqrt(M))/(2*u),f=(-p+Math.sqrt(M))/(2*u);if(f<0)return null;let E=Math.max(0,m),w=f;if(Math.abs(a)<1e-8){if(n<0||n>c)return null}else{let S=-n/a,y=(c-n)/a;S>y&&([S,y]=[y,S]),E=Math.max(E,S),w=Math.min(w,y)}return E<=w?E:null}rayWalls(e,t,n,i,r,a,o){let l=o;for(const c of this.level.walls){const h=this.rayBox(e,t,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.y??0,(c.y??0)+c.h,c.z-c.d/2,c.z+c.d/2);h!==null&&h<l&&(l=h)}for(const c of this.state.doors){if(c.open>=.995)continue;const h=this.rayBox(e,t,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.open*3.4,3.4+c.open*3.4,c.z-c.d/2,c.z+c.d/2);h!==null&&h<l&&(l=h)}return l}rayBox(e,t,n,i,r,a,o,l,c,h,d,u){let p=0,x=1/0;const M=[e,t,n],m=[i,r,a],f=[o,c,d],E=[l,h,u];for(let w=0;w<3;w++){if(Math.abs(m[w])<1e-8){if(M[w]<f[w]||M[w]>E[w])return null;continue}let S=(f[w]-M[w])/m[w],y=(E[w]-M[w])/m[w];if(S>y&&([S,y]=[y,S]),p=Math.max(p,S),x=Math.min(x,y),p>x)return null}return x<0?null:p}visible(e,t,n=1.2){const i=It(e,t);return i<.001?!0:this.rayWalls(e.x,n,e.z,(t.x-e.x)/i,0,(t.z-e.z)/i,i)>=i-.1}enemySees(e){const t=this.state.player,n=yi[e.kind].height*.74,i=this.eyeHeight(),r=t.x-e.x,a=i-n,o=t.z-e.z,l=Math.hypot(r,a,o);return l<.001?!0:this.rayWalls(e.x,n,e.z,r/l,a/l,o/l,l)>=l-.1}damageEnemy(e,t){if(e.health-=t,e.hurt=1,e.alert=!0,e.health>0)return;e.health=0,e.alive=!1,e.path=[],this.attackWindups.delete(e.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",e.x,e.z,.7,.5);const n=this.state.player;n.reserve.revolver+=2,n.reserve.plasma+=2,n.reserve.machinegun+=3,e.kind==="brute"&&this.message("Containment beast neutralized. Restore the elevator power.",3)}updateDoors(e){for(const t of this.state.doors){const n=Math.sign(t.target-t.open);if(n!==0){if(n<0&&It(t,this.state.player)<1.4){t.target=1;continue}t.open=Qt(t.open+n*e*1.3,0,1)}}}interact(){const e=this.state,t=e.player;if(e.status!=="playing")return;if(t.mounted){const r=[{x:t.x+Math.cos(t.yaw)*1.1,z:t.z-Math.sin(t.yaw)*1.1},{x:t.x-Math.cos(t.yaw)*1.1,z:t.z+Math.sin(t.yaw)*1.1},{x:t.x,z:t.z+1.2}].find(a=>this.clearAt(a.x,a.z,.32,0,1.8));if(!r){this.message("No room to dismount. Move into the street.",2);return}t.mounted=!1,t.x=r.x,t.z=r.z,t.y=0,t.vy=0,e.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(It(t,this.level.switch)<2.5){e.powered?this.message("Power online. The industrial lift is ready.",2):(e.powered=!0,e.events.push({type:"door"}),this.message("ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.",4));return}if(It(t,e.mount)<2.6&&t.z>-19){t.mounted=!0,t.crouching=!1,e.mount.x=t.x,e.mount.z=t.z,e.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.",4);return}const n=e.doors.filter(i=>It(t,i)<2.9).sort((i,r)=>It(i,t)-It(r,t));if(n.length){const i=n[0];if(t.mounted&&i.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(i.locked&&!t.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(i.id==="elevator"){if(!e.powered){this.message("LIFT OFFLINE — restore power at the laboratory switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return}}i.target=i.target>.5?0:1,e.events.push({type:"door"}),i.secret&&!this.secretDoors.has(i.id)?(this.secretDoors.add(i.id),e.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${i.label}: ${i.target?"opening":"closing"}.`,1.6);return}if(It(t,this.level.exit)<3){this.checkExit(),e.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(t.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard.",2)}collectPickups(){const e=this.state,t=e.player;for(const n of e.pickups)if(!(n.collected||It(n,t)>1.1||t.y>1.5||!this.visible(t,n,.45))&&!(n.kind==="health"&&t.health>=100||n.kind==="armor"&&t.armor>=100))if(n.collected=!0,e.events.push({type:"pickup"}),yr.includes(n.kind)){const i=n.kind,r=!t.owned.includes(i);r&&t.owned.push(i),t.ammo[i]=yn[i].clip,t.reserve[i]+=yn[i].clip*(i==="revolver"?8:3),r&&(t.weapon=i,t.reload=0,this.reloading=null,t.cooldown=.15,t.recoil=.2),this.message(`${yn[i].name.toUpperCase()} ACQUIRED — ${t.ammo[i]} loaded.`,2.5)}else n.kind==="health"?(t.health=Math.min(100,t.health+38),this.message("MEDKIT +38 HEALTH",1.6)):n.kind==="armor"?(t.armor=Math.min(100,t.armor+55),this.message("BODY ARMOR +55",1.6)):n.kind==="ammo"?(t.reserve.revolver+=24,t.reserve.shotgun+=16,t.reserve.plasma+=45,t.reserve.machinegun+=80,this.message("AMMUNITION CACHE — supplies replenished.",2)):n.kind==="evidence"?(t.evidence++,this.message("EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(t.keycard=!0,e.checkpoint=!0,this.message("SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.",4),e.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(e),this.checkpointState.events=[],this.checkpointSecrets=[...this.secretDoors])}finalThreats(){return this.state.enemies.filter(e=>e.alive&&(this.level.enemies.find(t=>t.id===e.id)?.z??e.z)<-32).length}checkExit(){const e=this.state;It(e.player,this.level.exit)>1.5||e.status!=="playing"||!e.powered||this.finalThreats()>0||(e.status="complete",e.events.push({type:"complete"}),e.player.reload=0,this.message("NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(e){const t=this.state.player,n=this.state.difficulty,i=n==="easy"?13:17;for(const r of this.state.enemies){if(!r.alive)continue;const a=yi[r.kind],o=It(r,t);if(r.hurt=Math.max(0,r.hurt-e*3.3),r.cooldown=Math.max(0,r.cooldown-e),r.pathTime-=e,!r.alert&&o<i&&this.enemySees(r)&&(r.alert=!0),!r.alert){r.phase+=e*.6;continue}const l=this.attackWindups.get(r.id);if(l!==void 0){const M=l-e;if(M<=0){if(this.attackWindups.delete(r.id),this.enemySees(r)&&o<a.range+(r.kind==="soldier"?2:.55))if(r.kind==="soldier"){this.effect("muzzle",r.x,r.z,1.4,.12);const m=n==="easy"?.55:n==="hard"?.88:.72;this.random()<m&&this.hurtPlayer(a.damage),this.effect("spark",t.x,t.z,Math.min(1.65,this.eyeHeight()),.1)}else this.hurtPlayer(a.damage),this.effect("blood",t.x,t.z,.65,.17);r.cooldown=a.interval*(n==="hard"?.8:n==="easy"?1.2:1)}else this.attackWindups.set(r.id,M);continue}const c=this.enemySees(r);if(o<a.range&&c&&r.cooldown<=0){this.attackWindups.set(r.id,r.kind==="soldier"?.42:.32),this.state.events.push({type:"enemy",message:r.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),r.kind==="soldier"&&this.effect("plasma",r.x,r.z,1.65,.4);continue}if(r.kind==="soldier"&&c&&o<9)continue;let h=t;if(!c||!this.clearAt(r.x+(t.x-r.x)/Math.max(o,.01)*.7,r.z+(t.z-r.z)/Math.max(o,.01)*.7,a.radius,0,a.height))if(r.pathTime<=0&&(r.path=this.findPath(r,t,a.radius,Math.min(a.height,1.8)),r.pathTime=.8+this.random()*.25),r.path.length){for(;r.path.length&&It(r,r.path[0])<.4;)r.path.shift();r.path.length&&(h=r.path[0])}else continue;const d=It(r,h);if(d<.01)continue;const u=a.speed*(n==="easy"?.88:n==="hard"?1.12:1)*(r.hurt>0?.42:1);let p=(h.x-r.x)/d*u*e,x=(h.z-r.z)/d*u*e;for(const M of this.state.enemies){if(M===r||!M.alive)continue;const m=It(r,M),f=a.radius+yi[M.kind].radius;m>.01&&m<f&&(p+=(r.x-M.x)/m*(f-m)*e*2,x+=(r.z-M.z)/m*(f-m)*e*2)}o<Math.max(.65,a.radius+.35)||(this.clearAt(r.x+p,r.z,a.radius,0,a.height)&&(r.x+=p),this.clearAt(r.x,r.z+x,a.radius,0,a.height)&&(r.z+=x),r.phase+=e*u*3)}}findPath(e,t,n,i){const r=this.level.bounds,a=.9,o=Math.ceil((r.maxX-r.minX)/a),l=Math.ceil((r.maxZ-r.minZ)/a),c=P=>({x:Qt(Math.floor((P.x-r.minX)/a),0,o-1),z:Qt(Math.floor((P.z-r.minZ)/a),0,l-1)}),h=c(e),d=c(t),u=(P,N)=>N*o+P,p=P=>({x:r.minX+(P%o+.5)*a,z:r.minZ+(Math.floor(P/o)+.5)*a}),x=u(h.x,h.z),M=u(d.x,d.z),m=[x],f=new Map,E=new Map([[x,0]]),w=new Set,S=P=>Math.abs(P%o-d.x)+Math.abs(Math.floor(P/o)-d.z);let y=-1,T=x,R=S(x),_=0;for(;m.length&&_++<1900;){let P=0,N=1/0;for(let V=0;V<m.length;V++){const ne=(E.get(m[V])??1/0)+S(m[V]);ne<N&&(N=ne,P=V)}const B=m.splice(P,1)[0];if(w.has(B))continue;w.add(B);const U=S(B);if(U<R&&(R=U,T=B),B===M){y=B;break}const G=B%o,$=Math.floor(B/o);for(const[V,ne]of[[1,0],[-1,0],[0,1],[0,-1]]){const X=G+V,Q=$+ne;if(X<0||X>=o||Q<0||Q>=l)continue;const j=u(X,Q);if(w.has(j))continue;const Te=p(j);if(j!==M&&!this.clearAt(Te.x,Te.z,n,0,i))continue;const Me=(E.get(B)??0)+1;Me>=(E.get(j)??1/0)||(E.set(j,Me),f.set(j,B),m.includes(j)||m.push(j))}}if(y===-1){if(T===x)return[];y=T}const b=[];let C=y;for(;C!==x&&f.has(C);)b.push(p(C)),C=f.get(C);return b.reverse()}hurtPlayer(e){const t=this.state,n=t.player;if(t.status!=="playing")return;e*=t.difficulty==="easy"?.65:t.difficulty==="hard"?1.22:1,n.mounted&&(e*=.65);const i=Math.min(n.armor,e*.65);n.armor-=i,n.health=Math.max(0,n.health-(e-i)),n.hurt=1,t.events.push({type:"hurt"}),n.health<=0&&(t.status="dead",n.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(e){const t=this.state.player;t.y<.45&&this.level.hazards.some(i=>Math.abs(t.x-i.x)<i.w/2&&Math.abs(t.z-i.z)<i.d/2)?(this.hazardTime+=e,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(e,t,n,i,r){this.state.effects.push({kind:e,x:t,z:n,y:i,life:r,maxLife:r})}message(e,t){this.state.message===e&&this.state.messageTime>.1||(this.state.message=e,this.state.messageTime=t,this.state.events.push({type:"message",message:e}))}}const Tm={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class Am{constructor(e,t){this.canvas=e,this.onPause=t,document.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(n.code)){n.preventDefault(),n.stopImmediatePropagation(),n.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.repeat||(n.code==="Space"&&(this.pending.jump=!0),n.code==="KeyE"&&(this.pending.interact=!0),n.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-4]$/.test(n.code)&&(this.pending.weaponSlot=Number(n.code.slice(-1))))}}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=n.movementX,this.mouseY+=n.movementY)}),this.canvas.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType==="touch"||n.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===this.canvas,i=this.wasLocked&&!n;this.wasLocked=n,n||(this.clear(),i&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.enabled&&(n.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(n.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const e=(...n)=>n.some(i=>this.keys.has(i)),t=this.enabled?{forward:Math.max(-1,Math.min(1,Number(e("KeyW","ArrowUp"))-Number(e("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(e("KeyD"))-Number(e("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(e("ArrowLeft"))-Number(e("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:e("ShiftLeft","ShiftRight")||this.touchSprint,crouch:e("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:e("KeyQ")}:{...Tm};return this.mouseX=0,this.mouseY=0,this.pending={},t}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const e=this.canvas.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const e=document.querySelector("#touch-controls");if(!e)return;e.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const t=e.querySelector(".touch-stick");this.stick=t.querySelector("i"),t.addEventListener("pointerdown",a=>{!this.enabled||this.stickPointer>=0||(a.preventDefault(),this.stickPointer=a.pointerId,this.stickOrigin={x:a.clientX,y:a.clientY},t.setPointerCapture(a.pointerId))}),t.addEventListener("pointermove",a=>{if(!this.enabled||a.pointerId!==this.stickPointer)return;const o=a.clientX-this.stickOrigin.x,l=a.clientY-this.stickOrigin.y,c=Math.hypot(o,l),h=38,d=c>h?h/c:1;this.touchMove={x:o*d/h,y:l*d/h},this.stick&&(this.stick.style.transform=`translate(${o*d}px,${l*d}px)`)});const n=a=>{a.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n);const i=e.querySelector(".touch-look");i.addEventListener("pointerdown",a=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY},i.setPointerCapture(a.pointerId))}),i.addEventListener("pointermove",a=>{!this.enabled||a.pointerId!==this.lookPointer||(this.mouseX+=(a.clientX-this.lastLook.x)*1.6,this.mouseY+=(a.clientY-this.lastLook.y)*1.6,this.lastLook={x:a.clientX,y:a.clientY})});const r=a=>{a.pointerId===this.lookPointer&&(this.lookPointer=-1)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),e.querySelectorAll("button").forEach(a=>{a.addEventListener("pointerdown",l=>{if(this.enabled)switch(l.preventDefault(),a.setPointerCapture(l.pointerId),a.classList.add("held"),a.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const o=()=>{a.classList.remove("held"),a.dataset.action==="fire"&&(this.touchFire=!1),a.dataset.action==="sprint"&&(this.touchSprint=!1)};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)})}}const jo="fossil-noir-3d-settings",Er={sensitivity:1,resolution:"320",quality:"high",volume:.5,difficulty:"normal"},wm={revolver:"DETECTIVE REVOLVER",shotgun:"TACTICAL SHOTGUN",plasma:"PLASMA RIFLE",machinegun:"HEAVY MACHINE GUN"};class Rm{constructor(e){this.callbacks=e,this.settings=this.loadSettings(),this.overlay.addEventListener("click",n=>{const i=n.target.closest("button[data-action]");if(!(!i||i.disabled))switch(i.dataset.action){case"start":e.start(!1);break;case"continue":e.start(!0);break;case"resume":e.resume();break;case"retry":e.restart(!1);break;case"checkpoint":e.restart(!0);break;case"menu":e.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",n=>{const i=n.target;if(!i.dataset.setting)return;const r=i.dataset.setting,a=["sensitivity","volume"].includes(r)?Number(i.value):i.value;this.settings=this.validateSettings({...this.settings,[r]:a});try{localStorage.setItem(jo,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings}),r==="sensitivity"&&(this.overlay.querySelector("#sensitivity-value").textContent=`${this.settings.sensitivity.toFixed(1)}×`),r==="volume"&&(this.overlay.querySelector("#volume-value").textContent=`${Math.round(this.settings.volume*100)}%`)}),document.addEventListener("keydown",n=>{this.screen!=="playing"&&n.code==="Escape"&&(n.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&e.resume())});const t=document.createElement("button");t.className="desktop-pause",t.setAttribute("aria-label","Pause mission"),t.textContent="Ⅱ",t.addEventListener("click",()=>e.pause()),document.querySelector("#game").appendChild(t),this.show("menu")}settings;screen="menu";panel="main";state;overlay=document.querySelector("#menu-overlay");cached=new Map;show(e){this.screen=e,this.panel="main",document.body.classList.toggle("playing",e==="playing"),document.body.dataset.screen=e,this.overlay.hidden=e==="playing",e!=="playing"&&this.render()}update(e){this.state=e;const t=e.player;this.write("hud-health",String(Math.max(0,Math.ceil(t.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(t.armor))).padStart(3,"0")),this.write("hud-ammo",t.reload>0?"LOAD":String(t.ammo[t.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(t.reserve[t.weapon]).padStart(3,"0")}`),this.write("hud-weapon",t.owned.includes(t.weapon)?wm[t.weapon]:"MECHANICAL ARM"),this.write("hud-kills",`${e.kills} / ${e.enemies.length}`),this.write("hud-mode",t.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(e.slow*100)}%`);const n=document.querySelector("#hud-key");n.classList.toggle("acquired",t.keycard),n.querySelector("b").textContent=t.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,t.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,t.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",t.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,t.hurt*.7)));const i=t.owned.length?!t.keycard&&t.z>=-19?"REACH THE AXIOM FACILITY":t.keycard?e.powered?"REACH THE INDUSTRIAL ELEVATOR":"ENTER THE LAB · RESTORE ELEVATOR POWER":"FIND THE SECURITY KEYCARD":"FIND YOUR REVOLVER";this.write("objective",i),this.write("message",e.messageTime>0?e.message:"");let r="";const a=e.doors.find(o=>Math.hypot(o.x-t.x,o.z-t.z)<3.2);t.mounted?r="E · DISMOUNT STRIDER":Math.hypot(e.mount.x-t.x,e.mount.z-t.z)<2.8?r="E · RIDE STRIDER":!e.powered&&Math.hypot(Ft.switch.x-t.x,Ft.switch.z-t.z)<2.5?r="E · RESTORE ELEVATOR POWER":Math.hypot(Ft.exit.x-t.x,Ft.exit.z-t.z)<3?r=e.powered?"ENTER THE LIFT TO EXTRACT":"ELEVATOR POWER REQUIRED":a&&(r=a.locked&&!t.keycard?"SECURITY KEYCARD REQUIRED":`E · ${a.target>0?"CLOSE":"OPEN"} ${a.label.toUpperCase()}`),this.write("interaction",r),document.querySelector("#crosshair").classList.toggle("firing",t.recoil>.1)}setError(e){const t=document.querySelector("#error");t.textContent=e,t.hidden=!e}write(e,t){if(this.cached.get(e)===t)return;this.cached.set(e,t);const n=document.getElementById(e);n&&(n.textContent=t)}hasCheckpoint(){if(this.state?.checkpoint)return!0;try{return!!localStorage.getItem("fossil-noir-3d-checkpoint")}catch{return!1}}render(){const e=this.hasCheckpoint(),t=this.panel==="main",n=this.screen==="menu";let i="",r="";if(this.panel==="controls")r="FIELD MANUAL",i='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")r="SYSTEM SETUP",i=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">SOUND VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty==="easy"?"selected":""}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty==="normal"?"selected":""}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty==="hard"?"selected":""}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(n)i=`<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${e?"":"disabled"}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")r="MISSION PAUSED",i=`<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${e?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")r="CASE CLOSED",i=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${e?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${e?"":"primary"}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){r="DISTRICT SURVIVED";const a=Math.floor(this.state?.time??0);i=`<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${n&&t?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${n&&t?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${r?`<h2 class="panel-title">${r}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${i}</div></section>${n&&t?'<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>':""}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${n?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const e=localStorage.getItem(jo);return this.validateSettings(e?JSON.parse(e):{})}catch{return{...Er}}}validateSettings(e){const t=e&&typeof e=="object"?e:{},n=(i,r,a,o)=>typeof i=="number"&&Number.isFinite(i)?Math.min(a,Math.max(r,i)):o;return{sensitivity:n(t.sensitivity,.3,2.5,Er.sensitivity),resolution:t.resolution==="640"?"640":"320",quality:t.quality==="low"?"low":"high",volume:n(t.volume,0,1,Er.volume),difficulty:t.difficulty==="easy"||t.difficulty==="hard"?t.difficulty:"normal"}}}const En=["#151b20","#2d3b43","#465761","#687b84","#96a7ad","#ced5ce"];class Cm{constructor(e){this.canvas=e,e.width=320,e.height=200,e.style.imageRendering="pixelated";const t=e.getContext("2d");if(!t)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=t,t.imageSmoothingEnabled=!1;for(const n of["fist","revolver","shotgun","plasma","machinegun"]){const i=document.createElement("canvas");i.width=320,i.height=200;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,this.paintWeapon(r,n),this.sprites.set(n,i)}}ctx;sprites=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;render(e,t){const n=e.player,i=this.ctx;t=Math.min(t,.06),i.clearRect(0,0,320,200);const r=n.owned.includes(n.weapon)?n.weapon:"fist";this.initialized||(this.current=this.next=r,this.lastX=n.x,this.lastZ=n.z,this.initialized=!0),r!==this.next&&(this.next=r,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-t),this.switchTime<.16&&(this.current=this.next)),n.recoil>.65&&n.recoil>this.lastRecoil+.04&&r!=="fist"&&!n.mounted&&(this.flash=.075,this.shotAge=0),this.lastRecoil=n.recoil,this.flash=Math.max(0,this.flash-t),this.shotAge+=t,n.reload>this.lastReload+.1&&(this.reloadDuration=n.reload),this.lastReload=n.reload;const a=Math.hypot(n.x-this.lastX,n.z-this.lastZ)/Math.max(t,.001);this.lastX=n.x,this.lastZ=n.z,this.travel+=Math.min(a,15)*t*(n.mounted?1.9:2.5);const o=Math.min(a/4,1),l=Math.sin(this.travel)*2.2*o,c=Math.abs(Math.cos(this.travel))*2.5*o,h=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,d=n.reload>0?1-n.reload/this.reloadDuration:0,u=n.reload>0?Math.sin(d*Math.PI):0,p=Math.min(1,n.recoil),x=this.current==="shotgun"?13:this.current==="machinegun"?5:8;if(n.mounted){this.paintMount(i,e.time,o,p),this.line(i,[173,159],[251,188],"#5b4f35",2),this.arm(i,247,186);return}if(i.save(),i.translate(Math.round(l),Math.round(c+h+p*x+u*23)),n.reload>0&&(i.translate(209,176),i.rotate(u*(this.current==="revolver"?.3:-.14)),i.translate(-209,-176)),i.drawImage(this.sprites.get(this.current),0,0),this.current==="plasma"&&this.paintPlasmaPulse(i,e.time,n.reload>0),n.reload>0&&this.paintReload(i,this.current,d),this.flash>0&&n.reload<=0&&this.paintFlash(i,this.current,e.time),this.current==="shotgun"&&this.shotAge<.48&&this.shotAge>.12&&n.reload<=0&&this.paintPumpHand(i,Math.sin((this.shotAge-.12)/.36*Math.PI)*8),i.restore(),["shotgun","machinegun","revolver"].includes(this.current)&&this.shotAge>.06&&this.shotAge<.35){const M=this.shotAge/.35;i.save(),i.translate(Math.round(222+M*59),Math.round(148-Math.sin(M*Math.PI)*25)),i.rotate(M*9),i.fillStyle="#17130b",i.fillRect(-2,-1,9,4),i.fillStyle=this.current==="shotgun"?"#a12b25":"#c19f4d",i.fillRect(-1,0,6,2),i.fillStyle="#e2ce86",i.fillRect(4,0,2,2),i.restore()}}poly(e,t,n,i="#080c10"){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(const[r,a]of t.slice(1))e.lineTo(r,a);e.closePath(),e.fillStyle=n,e.fill(),i&&(e.strokeStyle=i,e.lineWidth=1,e.stroke())}line(e,t,n,i,r=1){e.beginPath(),e.moveTo(...t),e.lineTo(...n),e.strokeStyle=i,e.lineWidth=r,e.stroke()}bolt(e,t,n){e.fillStyle="#10161c",e.fillRect(t-2,n-2,5,5),e.fillStyle="#9faeae",e.fillRect(t-1,n-1,3,3),e.fillStyle="#344650",e.fillRect(t-1,n,3,1)}scratches(e,t,n,i=45){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const u of t.slice(1))e.lineTo(...u);e.closePath(),e.clip();const r=t.map(u=>u[0]),a=t.map(u=>u[1]),o=Math.min(...r),l=Math.min(...a),c=Math.max(...r)-o,h=Math.max(...a)-l;let d=n;for(let u=0;u<i;u++){d=d*1664525+1013904223>>>0;const p=o+d%Math.max(1,c|0);d=d*1664525+1013904223>>>0;const x=l+d%Math.max(1,h|0);e.fillStyle=u%3===0?"#a2afa42b":"#040b104a",e.fillRect(p,x,u%5===0?3:1,1)}e.restore()}arm(e,t=204,n=165){const i=[[266,184],[319,199],[326,217],[258,213],[240,195]];this.poly(e,i,"#141619"),this.poly(e,[[270,188],[319,203],[319,211],[264,201],[248,189]],"#2b3031"),this.line(e,[277,191],[314,204],"#484f4b",2);const r=[[t+7,n+13],[t+24,n+8],[274,181],[280,197],[258,209],[t+4,n+27]];this.poly(e,r,En[2]),this.poly(e,[[t+13,n+13],[t+24,n+11],[267,184],[271,190],[257,196],[t+12,n+24]],En[3]),this.poly(e,[[t+12,n+13],[t+24,n+11],[267,184],[260,185],[t+16,n+18]],En[5]),this.poly(e,[[t+14,n+25],[258,199],[275,191],[277,198],[259,205]],En[0]),this.scratches(e,r,773,100),this.line(e,[t+20,n+22],[259,193],"#0b151b",5),this.line(e,[t+20,n+22],[259,193],"#9eaeb0",2),this.line(e,[t+24,n+28],[258,201],"#0b151b",5),this.line(e,[t+24,n+28],[258,201],"#776b47",2),this.poly(e,[[258,185],[266,182],[277,190],[274,200],[266,202],[265,192]],"#30383c"),this.bolt(e,270,191),this.bolt(e,254,187),e.fillStyle="#28d989",e.fillRect(253,190,3,2),e.fillRect(257,191,2,2),this.line(e,[274,187],[278,197],"#afa17b",2),this.hand(e,t,n)}hand(e,t,n){this.poly(e,[[t-14,n-5],[t-6,n-12],[t+9,n-10],[t+19,n],[t+21,n+14],[t+12,n+22],[t-3,n+18],[t-14,n+9]],"#293841"),this.poly(e,[[t-12,n-5],[t-6,n-10],[t+6,n-8],[t+12,n],[t+9,n+10],[t-7,n+7]],"#65767b");for(let i=0;i<4;i++){const r=t-11+i*6,a=n+i*2;this.poly(e,[[r,a],[r+4,a-2],[r+8,a+3],[r+7,a+10],[r+3,a+12],[r-1,a+7]],i%2?"#839391":"#61747a"),this.line(e,[r+1,a+5],[r+6,a+3],"#182730",2),e.fillStyle="#c0c8bb",e.fillRect(r+1,a,3,2)}this.poly(e,[[t+12,n-2],[t+18,n-2],[t+23,n+6],[t+18,n+13],[t+13,n+8]],"#7e9195"),this.bolt(e,t+14,n+15)}paintWeapon(e,t){if(t==="fist"){this.arm(e,195,172),this.poly(e,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],"#61777e");for(let n=0;n<4;n++)e.fillStyle="#b9c1b5",e.fillRect(186+n*7,155+n*2,5,6),e.fillStyle="#243a41",e.fillRect(186+n*7,162+n*2,5,2);return}if(t==="revolver"){this.arm(e,208,174),this.poly(e,[[196,156],[211,158],[230,185],[223,199],[208,196],[191,169]],"#191b1a"),this.poly(e,[[204,166],[212,167],[224,186],[218,193],[212,187]],"#4b3626");for(let n=0;n<5;n++)this.line(e,[210+n*2,175+n*3],[219+n,177+n*3],"#8a6d46");this.poly(e,[[155,122],[164,119],[180,139],[198,153],[196,170],[181,168],[169,145]],En[2]),this.poly(e,[[156,121],[164,120],[183,143],[176,145]],En[4]),this.poly(e,[[164,123],[169,128],[183,149],[182,156],[173,147]],En[0]),this.line(e,[158,124],[177,148],En[5],2),this.poly(e,[[175,143],[190,141],[204,152],[204,166],[194,173],[181,169],[174,155]],"#4a585b"),this.poly(e,[[177,144],[189,142],[199,150],[186,153]],"#b4bbaf"),this.poly(e,[[179,154],[186,152],[192,157],[191,168],[184,168]],"#202b31"),this.poly(e,[[193,154],[200,152],[203,157],[201,167],[195,170]],"#222d32"),this.line(e,[185,154],[185,166],"#8b9690",2),this.line(e,[198,155],[198,166],"#77847c",2),this.poly(e,[[163,120],[162,115],[157,116],[157,122]],"#1b2024"),e.fillStyle="#98f0c3",e.fillRect(158,115,3,1),this.poly(e,[[197,149],[201,143],[206,145],[208,153]],"#728281"),this.poly(e,[[193,171],[197,184],[207,188],[212,181],[207,171]],"#11191c"),this.line(e,[197,173],[201,182],"#9faaa4",2),this.scratches(e,[[174,142],[198,147],[203,164],[181,172]],129,45),this.hand(e,208,177),this.bolt(e,192,150),e.fillStyle="#a2ada1",e.fillRect(183,148,7,1)}else if(t==="shotgun"){this.arm(e,222,186);const n=[[154,120],[165,113],[183,136],[219,171],[240,192],[220,204],[186,170],[165,139]];this.poly(e,n,En[1]),this.poly(e,[[156,121],[163,116],[188,142],[219,174],[211,179],[181,145]],"#879698"),this.poly(e,[[155,122],[159,125],[191,161],[203,176],[199,181],[179,161]],"#17222a"),this.line(e,[160,122],[208,174],"#c3cabb",2),this.poly(e,[[152,118],[156,114],[163,111],[167,115],[165,122],[158,125]],"#40545b"),this.poly(e,[[155,117],[159,115],[163,115],[163,120],[160,122],[156,121]],"#070c10"),this.line(e,[156,114],[163,112],"#b0bcb4",2),this.poly(e,[[194,155],[213,171],[229,188],[220,198],[205,184],[187,166]],"#34454a"),this.poly(e,[[200,155],[218,171],[225,183],[218,187],[207,174],[194,163]],"#617378"),this.poly(e,[[208,170],[214,170],[221,178],[218,182],[212,177]],"#0c171e"),this.line(e,[209,171],[219,180],"#a9b6b3"),this.poly(e,[[175,144],[184,140],[203,159],[196,171],[187,169],[174,155]],"#564939");for(let i=0;i<6;i++)this.line(e,[179+i*3,146+i*2],[181+i*3,157+i*2],i%2?"#b09562":"#282925",2);this.poly(e,[[227,187],[240,191],[254,212],[227,213],[216,197]],"#171c1b"),this.scratches(e,n,448,100),this.bolt(e,207,164),this.bolt(e,223,186),this.paintPumpHand(e,0),this.hand(e,225,184)}else if(t==="plasma"){this.arm(e,217,179);const n=[[150,122],[160,114],[170,119],[185,139],[215,150],[232,171],[233,193],[221,201],[198,180],[168,145]];this.poly(e,n,"#263a3c"),this.poly(e,[[150,121],[159,116],[169,119],[183,139],[175,144],[160,131]],"#566f71"),this.poly(e,[[149,121],[151,115],[158,111],[166,113],[171,122],[162,129]],"#182624"),this.poly(e,[[153,117],[158,114],[165,116],[167,120],[160,125],[154,123]],"#030c09"),this.poly(e,[[157,117],[162,117],[164,120],[160,122],[157,121]],"#76f6ac"),this.poly(e,[[179,139],[190,134],[208,146],[223,164],[213,174],[196,164]],"#668085"),this.poly(e,[[180,140],[189,136],[207,148],[204,155],[192,154]],"#aac0b5"),this.poly(e,[[179,151],[191,147],[212,169],[207,180],[196,175]],"#101b1d"),this.poly(e,[[185,151],[191,151],[205,167],[202,173],[198,170]],"#16714d");for(let i=0;i<5;i++)this.line(e,[185+i*4,149+i*4],[181+i*4,153+i*4],"#86f8b4",2);this.poly(e,[[205,150],[213,150],[232,169],[231,187],[224,190],[211,175]],"#314b50"),this.poly(e,[[211,153],[215,153],[226,165],[226,174],[220,173]],"#092522"),e.fillStyle="#84fbbe",e.fillRect(215,158,4,3),e.fillRect(220,164,3,3),this.poly(e,[[211,180],[220,177],[234,193],[231,205],[221,205],[209,192]],"#172424"),this.scratches(e,n,137,85),this.bolt(e,205,145),this.bolt(e,229,178),this.hand(e,215,181)}else{this.arm(e,229,186);const n=[[148,118],[158,109],[168,114],[178,134],[212,153],[240,178],[255,201],[222,211],[187,175],[160,145]];this.poly(e,n,"#222b2e"),this.poly(e,[[149,118],[157,112],[164,115],[191,151],[186,159],[173,146]],"#718184"),this.poly(e,[[156,127],[162,120],[199,156],[193,166],[184,159]],"#3a4c51"),this.poly(e,[[147,117],[150,111],[157,107],[165,111],[171,120],[163,130],[154,129]],"#3f525b");for(const[i,r]of[[153,115],[160,114],[157,122],[164,120]])e.fillStyle="#030a0e",e.fillRect(i-2,r-2,4,4),e.fillStyle="#8da09b",e.fillRect(i-2,r-3,4,1);for(let i=0;i<3;i++)this.line(e,[156+i*4,123-i*2],[187+i*5,159-i*2],i%2?"#b0b8ad":"#11191e",2);this.poly(e,[[186,153],[198,146],[215,154],[238,175],[243,193],[228,204],[207,188],[186,167]],"#405255"),this.poly(e,[[189,153],[198,150],[215,158],[229,173],[221,177],[204,163]],"#91a09b"),this.poly(e,[[189,160],[205,164],[227,182],[228,198],[214,192],[194,174]],"#1c2b31");for(let i=0;i<4;i++)this.poly(e,[[193+i*5,162+i*4],[197+i*5,163+i*4],[203+i*5,173+i*4],[199+i*5,174+i*4]],"#070f13");this.poly(e,[[211,164],[220,160],[230,168],[230,176],[222,177]],"#364747"),this.poly(e,[[218,161],[216,151],[221,147],[230,151],[234,157],[230,161]],"#586b6b"),this.poly(e,[[219,156],[221,151],[227,152],[229,157]],"#070f15"),this.poly(e,[[236,169],[263,174],[280,182],[277,194],[249,185],[237,181]],"#14191b");for(let i=0;i<8;i++){const r=240+i*5,a=174+i*1.7;this.poly(e,[[r,a],[r+4,a+1],[r+3,a+12],[r,a+14],[r-2,a+11]],i%2?"#846733":"#a68b4c"),e.fillStyle="#d0b471",e.fillRect(r,a+1,2,7),e.fillStyle="#382e23",e.fillRect(r-1,a+9,4,2)}this.scratches(e,n,1985,140),this.bolt(e,205,158),this.bolt(e,235,185),this.hand(e,232,185)}}paintPumpHand(e,t){e.save(),e.translate(Math.round(t*.8),Math.round(t)),this.poly(e,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],"#1a2226"),this.poly(e,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],"#74858a"),this.line(e,[143,195],[163,174],"#c3ccc3",2);for(let n=0;n<4;n++)this.poly(e,[[166+n*4,161+n*2],[173+n*4,163+n*2],[176+n*4,169+n*2],[173+n*4,174+n*2],[166+n*4,169+n*2]],n%2?"#9aaba4":"#576c75"),this.line(e,[170+n*4,166+n*2],[175+n*4,168+n*2],"#1c2c34",2);this.bolt(e,154,187),e.restore()}paintPlasmaPulse(e,t,n){n||(e.fillStyle=Math.sin(t*9)>0?"#c4ffe1":"#49dc95",e.fillRect(215,158,4,2),e.fillRect(221,165,2,2),e.fillRect(158,117,3,3))}paintReload(e,t,n){const i=Math.sin(n*Math.PI);if(t==="revolver"){const r=171-Math.round(i*12),a=158+Math.round(i*10);this.poly(e,[[r-8,a-5],[r+5,a-8],[r+12,a],[r+10,a+13],[r-3,a+15],[r-11,a+5]],"#687b7d");for(let o=0;o<6;o++){const l=o*Math.PI/3+n*5;e.fillStyle=n>.45?"#c2a254":"#0b151a",e.fillRect(Math.round(r+Math.cos(l)*6)-2,Math.round(a+Math.sin(l)*6)-2,4,4)}n>.35&&n<.7&&this.hand(e,147,190)}else if(t==="shotgun")this.hand(e,175+Math.round(i*9),190),e.fillStyle="#932621",e.fillRect(179,176,5,10),e.fillStyle="#d0aa62",e.fillRect(179,175,5,2);else if(t==="plasma"){const a=176+Math.round(i*21);this.poly(e,[[188,a],[199,a-4],[211,a+11],[201,a+19],[192,a+9]],"#294447"),this.line(e,[193,a+3],[202,a+14],"#72ffb0",4),this.hand(e,168,a+15)}else t==="machinegun"&&(this.hand(e,259-Math.round(i*16),178+Math.round(i*11)),e.fillStyle="#c7ac68",e.fillRect(242,167,14,3))}paintFlash(e,t,n){const i=t==="plasma",r=159,a=114,o=t==="shotgun"?23:t==="machinegun"?17:13,l=Math.floor(n*70)%2?1:-1;this.poly(e,[[r-3,a],[r-o,a-9],[r-7,a-12],[r-11,a-o-5],[r,a-15],[r+o*.7,a-o],[r+7,a-8],[r+o,a-3],[r+5,a+4]],i?"#247e55":"#af4321",""),this.poly(e,[[r-3,a],[r-10,a-7],[r-3,a-10],[r+l*3,a-19],[r+4,a-9],[r+12,a-6],[r+4,a+2]],i?"#82ffae":"#f9b84e",""),this.poly(e,[[r-3,a],[r-2,a-7],[r+2,a-11],[r+5,a-4],[r+3,a+3]],i?"#e7ffeb":"#fff3b9","")}paintMount(e,t,n,i=0){const r=Math.round(Math.sin(t*9)*n*2-i*11);if(e.save(),e.translate(0,r),this.poly(e,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(e,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(e,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),i>.25){this.poly(e,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let a=0;a<5;a++)e.fillStyle="#b9bf8c",e.fillRect(163+a*3,155,2,3)}else this.line(e,[157,155],[178,155],"#111c19",2);e.fillStyle="#dfb961",e.fillRect(171,146,4,2),e.fillStyle="#081410",e.fillRect(174,146,1,2);for(let a=0;a<5;a++)this.poly(e,[[135+a*3,183-a*6],[130+a*4,179-a*7],[139+a*3,177-a*6]],"#809178");this.line(e,[150,162],[119,200],"#74664c",2),this.line(e,[174,163],[198,197],"#74664c",2),e.restore()}}class Pm{context;master;fx;music;noise;volume=.45;unlocked=!1;nextBeat=0;beat=0;lastStep=0;lastX=0;lastZ=0;distance=0;lastEnemy=0;musicActive=!1;constructor(){}unlock(){try{if(!this.context){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=this.volume,this.master.connect(this.context.destination),this.fx=this.context.createGain(),this.fx.gain.value=.8,this.fx.connect(this.master),this.music=this.context.createGain(),this.music.gain.value=.2,this.music.connect(this.master);const t=this.context.sampleRate*2;this.noise=this.context.createBuffer(1,t,this.context.sampleRate);const n=this.noise.getChannelData(0);let i=1793;for(let r=0;r<t;r++)i=i*1664525+1013904223>>>0,n[r]=i/4294967296*2-1}this.context.resume().then(()=>{this.unlocked=!0,this.nextBeat=this.context.currentTime+.08}).catch(()=>{}),this.unlocked=!0}catch{}}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.context&&this.master&&this.master.gain.setTargetAtTime(this.volume,this.context.currentTime,.04)}suspend(){this.musicActive=!1,this.context&&this.music&&this.music.gain.setTargetAtTime(0,this.context.currentTime,.08)}handle(e){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const t of e)switch(t.type){case"shot":this.shot(t.weapon||"revolver");break;case"reload":this.tone(720,.035,.11,"square",370),this.burst(.08,.14,1500,.09),this.tone(440,.05,.1,"triangle",180,.17),this.burst(.03,.11,2600,.32);break;case"hurt":this.burst(.2,.15,700),this.tone(96,.17,.16,"sawtooth",46);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.43,.07,850),this.tone(89,.3,.08,"sawtooth",58),this.tone(420,.06,.06,"square",350,.35);break;case"enemy":{this.context.currentTime-this.lastEnemy>.65&&(this.lastEnemy=this.context.currentTime,t.message?.includes("charging shot")?(this.tone(260,.19,.055,"sawtooth",790),this.tone(880,.07,.055,"square",330,.2)):t.message?.startsWith("Strider")?(this.tone(90,.27,.1,"sawtooth",42),this.burst(.28,.08,530)):(this.tone(195,.23,.09,"sawtooth",58),this.burst(.22,.09,650)));break}case"kill":this.burst(.2,.12,430),this.tone(118,.22,.1,"sawtooth",34);break;case"mount":this.tone(110,.22,.11,"sawtooth",210),this.tone(82,.12,.12,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(e,t){if(!this.context||!this.unlocked||this.context.state!=="running")return;this.musicActive||(this.musicActive=!0,this.nextBeat=this.context.currentTime+.06,this.music?.gain.setTargetAtTime(e.status==="playing"?.2:.1,this.context.currentTime,.35));const n=this.context.currentTime;for(n>this.nextBeat+.8&&(this.nextBeat=n+.04);this.nextBeat<n+.11;)this.ambientBeat(this.nextBeat,e),this.nextBeat+=.375,this.beat++;const i=e.player,r=Math.hypot(i.x-this.lastX,i.z-this.lastZ);this.lastX=i.x,this.lastZ=i.z,r<1&&(this.distance+=r),i.grounded&&this.distance>(i.mounted?2.2:1.65)&&n-this.lastStep>.22&&t>0&&(this.distance=0,this.lastStep=n,this.burst(.045,i.mounted?.1:.045,i.mounted?350:950),this.tone(i.mounted?65:110,.07,i.mounted?.11:.045,"triangle",40))}tone(e,t,n,i="square",r=e,a=0,o="fx",l){const c=this.context;if(!c||!this.master||!this.fx||!this.music)return;const h=l??c.currentTime+a,d=c.createOscillator(),u=c.createGain();d.type=i,d.frequency.setValueAtTime(Math.max(1,e),h),d.frequency.exponentialRampToValueAtTime(Math.max(1,r),h+t),u.gain.setValueAtTime(1e-4,h),u.gain.linearRampToValueAtTime(n,h+Math.min(.006,t/4)),u.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(o==="music"?this.music:this.fx),d.start(h),d.stop(h+t+.025),d.onended=()=>{d.disconnect(),u.disconnect()}}burst(e,t,n,i=0,r,a="fx"){const o=this.context;if(!o||!this.noise||!this.fx||!this.music)return;const l=r??o.currentTime+i,c=o.createBufferSource(),h=o.createBiquadFilter(),d=o.createGain();c.buffer=this.noise,h.type="lowpass",h.frequency.setValueAtTime(n,l),h.Q.value=.4,d.gain.setValueAtTime(t,l),d.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(d),d.connect(a==="music"?this.music:this.fx),c.start(l,Math.random()),c.stop(l+e+.025),c.onended=()=>{c.disconnect(),h.disconnect(),d.disconnect()}}shot(e){switch(e){case"revolver":this.burst(.13,.34,4800),this.tone(180,.11,.24,"triangle",42),this.tone(1280,.027,.065,"square",190);break;case"shotgun":this.burst(.25,.48,3900),this.tone(130,.2,.28,"triangle",28),this.burst(.05,.09,1800,.23),this.burst(.08,.11,2900,.37);break;case"plasma":this.tone(980,.14,.14,"sawtooth",140),this.tone(1450,.08,.07,"triangle",260),this.burst(.07,.06,4400);break;case"machinegun":this.burst(.075,.27,4200),this.tone(157,.065,.16,"triangle",46),this.tone(970,.017,.07,"square",380);break}}chime(e,t,n){e.forEach((i,r)=>this.tone(i,.42,n,"triangle",i,r*t))}ambientBeat(e,t){const n=this.beat%32,r=[55,55,65.406,49][Math.floor(n/8)];if(n%4===0&&this.tone(r,.48,.21,"triangle",r,0,"music",e),n%8===4&&this.tone(r*2,.35,.1,"triangle",r*2,0,"music",e),n%4===2&&this.burst(.035,.022,2100,0,e,"music"),n===2||n===11||n===18||n===27){const a=[220,261.626,293.665,196][Math.floor(n/8)];this.tone(a,.8,.055,"triangle",a,0,"music",e),this.tone(a*1.005,.65,.025,"sine",a*1.005,0,"music",e+.12)}t.enemies.some(a=>a.alive&&a.alert)&&n%2===0&&this.tone(75,.085,.1,"sine",30,0,"music",e)}}const Da=document.querySelector("#world"),Lm=document.querySelector("#weapon");let yt,ks,Jn=!1,Yi=performance.now(),ti=!1;const ni=new Pm,kn=new Am(Da,Ji),Im=new Cm(Lm),on=new Rm({start:zl,resume:Um,restart:Nm,menu:Fm,pause:Ji,settings:kl});yt=new Ol(Ft,on.settings.difficulty);function Dm(){try{localStorage.setItem("fossil-noir-3d-checkpoint",JSON.stringify({version:1,difficulty:yt.state.difficulty}))}catch{}}function Bl(){try{return JSON.parse(localStorage.getItem("fossil-noir-3d-checkpoint")||"null")?.version===1}catch{return!1}}function Gn(s){Jn=s==="playing",kn.enabled=Jn,kn.clear(),on.show(s),Jn||(kn.release(),ni.suspend())}function zl(s=!1){ti||(yt=new Ol(Ft,on.settings.difficulty),s&&Bl()&&yt.restart(!0),ni.unlock(),Gn("playing"),kn.capture(),Yi=performance.now())}function Um(){ti||yt.state.status!=="playing"||(ni.unlock(),Gn("playing"),kn.capture(),Yi=performance.now())}function Ji(){Jn&&Gn("pause")}function Nm(s=!1){if(!ti){if(!s){zl(!1);return}yt.restart(s&&(yt.state.checkpoint||Bl())),ni.unlock(),Gn("playing"),kn.capture(),Yi=performance.now()}}function Fm(){Gn("menu")}function kl(s){kn.sensitivity=s.sensitivity,ni.setVolume(s.volume),ks?.resize(s)}try{ks=new bm(Da),kl(on.settings),on.show("menu")}catch(s){ti=!0,on.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${s instanceof Error?s.message:""}`)}function Gl(s){const e=Math.min(Math.max((s-Yi)/1e3,0),.05);if(Yi=s,!ti)try{if(Jn){yt.update(e,kn.read());for(const t of yt.state.events)t.type==="checkpoint"&&Dm();if(ni.handle(yt.state.events),yt.state.events.length=0,ni.tick(yt.state,e),yt.state.status==="dead"&&Gn("dead"),yt.state.status==="complete"){try{localStorage.setItem("fossil-noir-3d-best",String(Math.floor(yt.state.time)))}catch{}Gn("complete")}}ks.render(yt.state,Jn?e:0,on.settings),Im.render(yt.state,Jn?e:0),on.update(yt.state)}catch(t){console.error("Fossil Noir 3D runtime error",t),ti=!0,Gn("menu"),on.setError("The mission could not continue. Reload this page to restart.")}requestAnimationFrame(Gl)}window.addEventListener("resize",()=>ks?.resize(on.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&Ji()});window.addEventListener("blur",Ji);Da.addEventListener("webglcontextlost",s=>{s.preventDefault(),Ji(),ti=!0,on.setError("Graphics context lost. Reload the page to recover the mission.")});requestAnimationFrame(Gl);
