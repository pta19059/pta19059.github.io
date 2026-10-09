(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const nl=[],we=(s,e,t,n,i=4.2,r="concrete",a)=>nl.push({x:s,z:e,w:t,d:n,h:i,material:r,...a===void 0?{}:{y:a}});we(0,12.3,11,.6,4,"brick");we(-5.3,8,.6,8.6,4,"brick");we(5.3,8,.6,8.6,4,"brick");we(-3.4,4,3.8,.6,4,"brick");we(3.4,4,3.8,.6,4,"brick");we(0,4,3,.6,.8,"brick",3.2);we(-13.3,0,.6,8,6.5,"brick");we(-13.3,-13.5,.6,7,6.5,"brick");we(-13.3,-18.7,.6,3.4,6.5,"brick");we(-13.3,-4.6,.6,2.2,6.5,"brick");we(-13.3,-9.4,.6,2.2,6.5,"brick");we(-17.3,-7,.6,6.6,4,"brick");we(-15.2,-3.7,4.8,.6,4,"brick");we(-15.2,-10.3,4.8,.6,4,"brick");we(13.3,-8,.6,24,7.2,"brick");we(-9.5,4,7,.6,5.5,"brick");we(9.5,4,7,.6,5.5,"brick");we(-8,-20,12,.7,6,"metal");we(8,-20,12,.7,6,"metal");we(0,-20,4,.7,2.4,"metal",3.2);we(-7.3,-26,.6,12.6,4.5,"metal");we(7.3,-23,.6,6,4.5,"metal");we(7.3,-30.5,.6,3,4.5,"metal");we(7.3,-27.4,.6,3,1.5,"metal",3);we(11.2,-23.9,8.4,.6,4.5,"metal");we(15.3,-27.9,.6,8.6,4.5,"metal");we(11.2,-32.2,8.4,.6,4.5,"metal");we(-5.8,-32.2,8.6,.6,4.5,"metal");we(5.8,-32.2,8.6,.6,4.5,"metal");we(0,-32.2,3,.6,1.3,"metal",3.2);we(-10.3,-39.2,.6,14.6,4.5,"metal");we(10.3,-39.2,.6,14.6,4.5,"metal");we(-11,-46,.6,1.2,4.5,"metal");we(-10,-46,2,.6,4.5,"metal");we(2.8,-46,15.6,.6,4.5,"metal");we(-7,-46,4,.6,1.3,"metal",3.2);we(-11.3,-49,.6,6.6,4.5,"metal");we(-2.7,-49,.6,6.6,4.5,"metal");we(-7,-52.3,9.2,.6,4.5,"metal");we(-3.2,8,2.2,1.1,.85,"crate");we(3.8,10,1.2,2.2,1.5,"crate");we(-8,-4,2.4,1.4,1.1,"crate");we(-7,-10,2,3.6,1.1,"metal");we(3.8,-13,2.4,1.6,1.7,"crate");we(5,-14.5,1.6,1.5,1.1,"crate");we(-4.7,-18,2.4,1.3,1.3,"crate");we(4.5,-23.8,1.8,1.8,1.2,"crate");we(-4.4,-26.8,2.2,1.4,1.25,"metal");we(12,-25.9,3.3,1,1.1,"metal");we(-6.7,-34.5,2.2,1.5,1.2,"metal");we(5,-36,2.4,1.2,1.2,"metal");we(0,-40,3.5,1.4,1.1,"metal");we(-7.5,-42.8,1.3,2.4,1.5,"crate");const Ft={walls:nl,spawn:{x:0,z:8},checkpoint:{x:0,z:-23.5},switch:{x:7.5,z:-43},exit:{x:-7,z:-49},mount:{x:8,z:-6},bounds:{minX:-18,maxX:16,minZ:-53,maxZ:13},doors:[{id:"office",x:0,z:4,w:3,d:.5,label:"VANE DETECTIVE AGENCY"},{id:"facility",x:0,z:-20,w:4,d:.5,label:"HELIX RESEARCH"},{id:"security",x:7.3,z:-27.5,w:.5,d:3,label:"SECURITY CONTROL"},{id:"laboratory",x:0,z:-32.2,w:3,d:.5,locked:!0,label:"RESTRICTED LAB • KEYCARD"},{id:"elevator",x:-7,z:-46,w:4,d:.5,label:"FREIGHT LIFT"},{id:"secret",x:-13.3,z:-7,w:.5,d:2.6,secret:!0,label:"THE LAST CHANCE"}],enemies:[{id:"r01",kind:"raptor",x:-4,z:-3},{id:"r02",kind:"raptor",x:2,z:-6},{id:"r03",kind:"raptor",x:-3,z:-10},{id:"s01",kind:"soldier",x:-9,z:-14},{id:"s02",kind:"soldier",x:7,z:-17},{id:"r04",kind:"raptor",x:1,z:-16},{id:"s03",kind:"soldier",x:-4,z:-23},{id:"s04",kind:"soldier",x:3,z:-27},{id:"m01",kind:"mutant",x:-4,z:-30},{id:"s05",kind:"soldier",x:10,z:-27.5},{id:"s06",kind:"soldier",x:13,z:-30},{id:"r05",kind:"raptor",x:-5,z:-36},{id:"m02",kind:"mutant",x:7,z:-34.8},{id:"s07",kind:"soldier",x:3,z:-38},{id:"r06",kind:"raptor",x:-7,z:-39},{id:"m03",kind:"mutant",x:6,z:-40},{id:"m04",kind:"mutant",x:-3,z:-43},{id:"s08",kind:"soldier",x:4,z:-44},{id:"b01",kind:"brute",x:-2,z:-44},{id:"r07",kind:"raptor",x:8,z:-12}],pickups:[{id:"revolver",kind:"revolver",x:.7,z:7,label:"Detective Revolver"},{id:"office-ammo",kind:"ammo",x:2,z:6.7},{id:"office-evidence",kind:"evidence",x:-2.1,z:9.5,label:"CASE 091: FIND MARA"},{id:"street-shotgun",kind:"shotgun",x:-10,z:-4,label:"Tactical Shotgun"},{id:"street-ammo1",kind:"ammo",x:-10.5,z:-5.3},{id:"street-ammo2",kind:"ammo",x:5.8,z:-12},{id:"street-health",kind:"health",x:9.5,z:-3.5},{id:"street-armor",kind:"armor",x:-10,z:-17},{id:"secret-plasma",kind:"plasma",x:-15.8,z:-7,label:"Plasma Rifle"},{id:"secret-armor",kind:"armor",x:-15,z:-5},{id:"secret-health",kind:"health",x:-15,z:-9},{id:"lobby-health",kind:"health",x:-5.5,z:-22},{id:"lobby-ammo1",kind:"ammo",x:5.8,z:-28.5},{id:"lobby-ammo2",kind:"ammo",x:-5.7,z:-29.5},{id:"keycard",kind:"keycard",x:12,z:-29.3,label:"Helix Security Keycard"},{id:"machinegun",kind:"machinegun",x:13.8,z:-25.5,label:"Heavy Machine Gun"},{id:"security-ammo",kind:"ammo",x:10,z:-30.7},{id:"security-evidence",kind:"evidence",x:14,z:-30,label:"SUBJECTS WERE HUMAN"},{id:"lab-plasma",kind:"plasma",x:8.2,z:-33.8,label:"Plasma Rifle"},{id:"lab-health1",kind:"health",x:-8.3,z:-33.8},{id:"lab-ammo1",kind:"ammo",x:4.7,z:-34.5},{id:"lab-ammo2",kind:"ammo",x:-8,z:-37},{id:"lab-armor",kind:"armor",x:8,z:-38.5},{id:"lab-health2",kind:"health",x:8.3,z:-44.5},{id:"lab-ammo3",kind:"ammo",x:-5,z:-44.5},{id:"lab-evidence",kind:"evidence",x:-8.8,z:-44.6,label:"PROJECT LAZARUS: NO SURVIVORS"}],hazards:[{x:9,z:-10,w:2.8,d:3},{x:-4.5,z:-38.5,w:2.5,d:2.8}],props:[{kind:"office-sign",x:0,z:3.55,label:"VANE / PRIVATE INVESTIGATIONS"},{kind:"portrait",x:0,z:11.94,label:"ELIAS VANE"},{kind:"office-board",x:4.94,z:7.7,rotation:-Math.PI/2,label:"MARA / PROJECT LAZARUS"},{kind:"terminal",x:-3.1,z:8},{kind:"chair",x:-3.1,z:9.1},{kind:"lamp",x:-4.6,z:6},{kind:"bottles",x:-3.8,z:8},{kind:"neon",x:-12.93,z:-1.5,rotation:Math.PI/2,label:"HOTEL / NO VACANCY"},{kind:"neon",x:12.93,z:-7,rotation:-Math.PI/2,label:"EDEN / AFTER DARK"},{kind:"neon",x:-12.93,z:-7,rotation:Math.PI/2,label:"LAST CHANCE"},{kind:"facility-sign",x:0,z:-19.56,label:"AXIOM / HELIX RESEARCH"},{kind:"car",x:-7,z:-10,rotation:.15},{kind:"barrels",x:11.7,z:-12},{kind:"barrels",x:-11,z:-19},{kind:"lamp",x:10.8,z:1},{kind:"lamp",x:-10.8,z:-8},{kind:"lamp",x:10.8,z:-18},{kind:"rubble",x:-11,z:-11},{kind:"rubble",x:11,z:-16},{kind:"corpse",x:3,z:-9},{kind:"street-mark",x:0,z:-8},{kind:"street-mark",x:0,z:-15},{kind:"drain",x:4,z:-3},{kind:"console",x:-4.4,z:-26.8},{kind:"sign",x:0,z:-31.81,label:"BIOHAZARD / AUTHORIZED PERSONNEL"},{kind:"sign",x:7,z:-25,rotation:-Math.PI/2,label:"SECURITY →"},{kind:"terminal",x:12,z:-25.9},{kind:"locker",x:14.8,z:-27},{kind:"locker",x:14.8,z:-28},{kind:"tank",x:-8.7,z:-35.3},{kind:"tank",x:8.7,z:-36},{kind:"tank",x:-8.7,z:-41},{kind:"tank",x:8.7,z:-41.5},{kind:"lab-table",x:0,z:-40},{kind:"console",x:5,z:-36},{kind:"pipe",x:-9.6,z:-39,rotation:Math.PI/2},{kind:"pipe",x:9.6,z:-39,rotation:Math.PI/2},{kind:"power",x:7.5,z:-43,label:"RESTORE LIFT POWER"},{kind:"checkpoint",x:0,z:-23.5,label:"CHECKPOINT"},{kind:"exit",x:-7,z:-49,label:"EXTRACTION / FREIGHT LIFT"},{kind:"sign",x:-7,z:-45.61,label:"FREIGHT LIFT / POWER REQUIRED"},{kind:"warning",x:0,z:-35.5,label:"CONTAINMENT BREACH"},{kind:"skeleton",x:2,z:-42.8},{kind:"secret-table",x:-15.7,z:-7}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="186",Ql=0,Za=1,jl=2,Ts=1,ec=2,ki=3,jn=0,kt=1,Xt=2,wn=0,Hi=1,Ja=2,Qa=3,ja=4,tc=5,Ei=100,nc=101,ic=102,sc=103,rc=104,ac=200,oc=201,lc=202,cc=203,il=204,sl=205,hc=206,uc=207,fc=208,dc=209,pc=210,mc=211,gc=212,_c=213,xc=214,Ar=0,wr=1,Rr=2,Vi=3,Cr=4,Pr=5,Lr=6,Ir=7,ma=0,vc=1,Mc=2,rn=0,rl=1,al=2,ol=3,ll=4,cl=5,hl=6,ul=7,fl=300,ei=301,Ri=302,Xs=303,qs=304,zs=306,Ls=1e3,An=1001,Dr=1002,xt=1003,Sc=1004,ts=1005,Lt=1006,Ys=1007,Zn=1008,qt=1009,dl=1010,pl=1011,Wi=1012,ga=1013,gn=1014,nn=1015,_n=1016,_a=1017,xa=1018,Xi=1020,ml=35902,gl=35899,_l=1021,xl=1022,sn=1023,Cn=1026,Jn=1027,va=1028,Ma=1029,ti=1030,Sa=1031,ba=1033,As=33776,ws=33777,Rs=33778,Cs=33779,Ur=35840,Nr=35841,Fr=35842,Or=35843,Br=36196,zr=37492,kr=37496,Gr=37488,Hr=37489,Is=37490,Vr=37491,Wr=37808,Xr=37809,qr=37810,Yr=37811,Kr=37812,$r=37813,Zr=37814,Jr=37815,Qr=37816,jr=37817,ea=37818,ta=37819,na=37820,ia=37821,sa=36492,ra=36494,aa=36495,oa=36283,la=36284,Ds=36285,ca=36286,bc=3200,ha=0,yc=1,kn="",Pt="srgb",Us="srgb-linear",Ns="linear",Je="srgb",Ks=7680,Ec=519,Tc=512,Ac=513,wc=514,ya=515,Rc=516,Cc=517,Ea=518,Pc=519,Lc=35044,Ic=35048,eo="300 es",mn=2e3,qi=2001;function Dc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uc(){const s=Fs("canvas");return s.style.display="block",s}const to={};function no(...s){const e="THREE."+s.shift();console.log(e,...s)}function vl(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=vl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qe(...s){s=vl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ai(...s){const e=s.join(" ");e in to||(to[e]=!0,Ce(...s))}function Nc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Fc={[Ar]:wr,[Rr]:Lr,[Cr]:Ir,[Vi]:Pr,[wr]:Ar,[Lr]:Rr,[Ir]:Cr,[Pr]:Vi};class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,ua=180/Math.PI;function $i(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function He(s,e,t){return Math.max(e,Math.min(t,s))}function Oc(s,e){return(s%e+e)%e}function Zs(s,e,t){return(1-t)*s+t*e}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Na=class Na{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Na.prototype.isVector2=!0;let Fe=Na;class ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],p=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+f*S;m<0&&(u=-u,p=-p,g=-g,S=-S,m=-m);let d=1-o;if(m<.9995){const E=Math.acos(m),w=Math.sin(E);d=Math.sin(d*E)/w,o=Math.sin(o*E)/w,l=l*d+u*o,c=c*d+p*o,h=h*d+g*o,f=f*d+S*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+g*o,f=f*d+S*o;const E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-o*p,e[t+2]=c*g+h*p+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fa=class Fa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fa.prototype.isVector3=!0;let B=Fa;const Js=new B,io=new ri,Oa=class Oa{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],S=i[0],m=i[3],d=i[6],E=i[1],w=i[4],M=i[7],y=i[2],b=i[5],R=i[8];return r[0]=a*S+o*E+l*y,r[3]=a*m+o*w+l*b,r[6]=a*d+o*M+l*R,r[1]=c*S+h*E+f*y,r[4]=c*m+h*w+f*b,r[7]=c*d+h*M+f*R,r[2]=u*S+p*E+g*y,r[5]=u*m+p*w+g*b,r[8]=u*d+p*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*f+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(i*c-h*n)*S,e[2]=(o*n-i*a)*S,e[3]=u*S,e[4]=(h*t-i*l)*S,e[5]=(i*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oa.prototype.isMatrix3=!0;let Le=Oa;const Qs=new Le,so=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ro=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bc(){const s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?Ns:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Us]:{primaries:e,whitePoint:n,transfer:Ns,toXYZ:so,fromXYZ:ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:so,fromXYZ:ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}const Ge=Bc();function Rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ci;class zc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ci===void 0&&(ci=Fs("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kc=0;class Ta{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(js(i[a].image)):r.push(js(i[a]))}else r=js(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Gc=0;const er=new B;class It extends si{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=An,i=An,r=Lt,a=Zn,o=sn,l=qt,c=It.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=$i(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=fl;It.DEFAULT_ANISOTROPY=1;const Ba=class Ba{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(p+1)/2,y=(d+1)/2,b=(h+u)/4,R=(f+S)/4,x=(g+m)/4;return w>M&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=R/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=R/r,i=x/r),this.set(n,i,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-S)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ba.prototype.isVector4=!0;let ut=Ba;class Hc extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new It(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ta(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ml extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Bs=class Bs{constructor(e,t,n,i,r,a,o,l,c,h,f,u,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,u,p,g,S,m)}set(e,t,n,i,r,a,o,l,c,h,f,u,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/hi.setFromMatrixColumn(e,0).length(),r=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*f,g=o*h,S=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,g=c*h,S=c*f;t[0]=u+S*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,g=c*h,S=c*f;t[0]=u-S*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,g=o*h,S=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+S,t[1]=l*f,t[5]=S*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=S-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-S*f}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+S,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wc,e,Xc)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Un.crossVectors(n,Ht),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Un.crossVectors(n,Ht)),Un.normalize(),ns.crossVectors(Ht,Un),i[0]=Un.x,i[4]=ns.x,i[8]=Ht.x,i[1]=Un.y,i[5]=ns.y,i[9]=Ht.y,i[2]=Un.z,i[6]=ns.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],S=n[6],m=n[10],d=n[14],E=n[3],w=n[7],M=n[11],y=n[15],b=i[0],R=i[4],x=i[8],T=i[12],P=i[1],C=i[5],N=i[9],O=i[13],U=i[2],G=i[6],$=i[10],V=i[14],ne=i[3],X=i[7],Q=i[11],j=i[15];return r[0]=a*b+o*P+l*U+c*ne,r[4]=a*R+o*C+l*G+c*X,r[8]=a*x+o*N+l*$+c*Q,r[12]=a*T+o*O+l*V+c*j,r[1]=h*b+f*P+u*U+p*ne,r[5]=h*R+f*C+u*G+p*X,r[9]=h*x+f*N+u*$+p*Q,r[13]=h*T+f*O+u*V+p*j,r[2]=g*b+S*P+m*U+d*ne,r[6]=g*R+S*C+m*G+d*X,r[10]=g*x+S*N+m*$+d*Q,r[14]=g*T+S*O+m*V+d*j,r[3]=E*b+w*P+M*U+y*ne,r[7]=E*R+w*C+M*G+y*X,r[11]=E*x+w*N+M*$+y*Q,r[15]=E*T+w*O+M*V+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15],E=l*p-c*u,w=o*p-c*f,M=o*u-l*f,y=a*p-c*h,b=a*u-l*h,R=a*f-o*h;return t*(S*E-m*w+d*M)-n*(g*E-m*y+d*b)+i*(g*w-S*y+d*R)-r*(g*M-S*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],E=t*o-n*a,w=t*l-i*a,M=t*c-r*a,y=n*l-i*o,b=n*c-r*o,R=i*c-r*l,x=h*S-f*g,T=h*m-u*g,P=h*d-p*g,C=f*m-u*S,N=f*d-p*S,O=u*d-p*m,U=E*O-w*N+M*C+y*P-b*T+R*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/U;return e[0]=(o*O-l*N+c*C)*G,e[1]=(i*N-n*O-r*C)*G,e[2]=(S*R-m*b+d*y)*G,e[3]=(u*b-f*R-p*y)*G,e[4]=(l*P-a*O-c*T)*G,e[5]=(t*O-i*P+r*T)*G,e[6]=(m*M-g*R-d*w)*G,e[7]=(h*R-u*M+p*w)*G,e[8]=(a*N-o*P+c*x)*G,e[9]=(n*P-t*N-r*x)*G,e[10]=(g*b-S*M+d*E)*G,e[11]=(f*M-h*b-p*E)*G,e[12]=(o*T-a*C-l*x)*G,e[13]=(t*C-n*T+i*x)*G,e[14]=(S*w-g*y-m*E)*G,e[15]=(h*y-f*w+u*E)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,g=r*f,S=a*h,m=a*f,d=o*f,E=l*c,w=l*h,M=l*f,y=n.x,b=n.y,R=n.z;return i[0]=(1-(S+d))*y,i[1]=(p+M)*y,i[2]=(g-w)*y,i[3]=0,i[4]=(p-M)*b,i[5]=(1-(u+d))*b,i[6]=(m+E)*b,i[7]=0,i[8]=(g+w)*R,i[9]=(m-E)*R,i[10]=(1-(u+S))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=hi.set(i[0],i[1],i[2]).length();const o=hi.set(i[4],i[5],i[6]).length(),l=hi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Zt.copy(this);const c=1/a,h=1/o,f=1/l;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=mn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===qi)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===mn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===qi)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bs.prototype.isMatrix4=!0;let rt=Bs;const hi=new B,Zt=new rt,Wc=new B(0,0,0),Xc=new B(1,1,1),Un=new B,ns=new B,Ht=new B,ao=new rt,oo=new ri;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qc=0;const lo=new B,ui=new ri,vn=new rt,is=new B,Ii=new B,Yc=new B,Kc=new ri,co=new B(1,0,0),ho=new B(0,1,0),uo=new B(0,0,1),fo={type:"added"},$c={type:"removed"},fi={type:"childadded",child:null},tr={type:"childremoved",child:null};class Tt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new B,t=new Pn,n=new ri,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Le}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(ho,e)}rotateZ(e){return this.rotateOnAxis(uo,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(ho,e)}translateZ(e){return this.translateOnAxis(uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?is.copy(e):is.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Ii,is,this.up):vn.lookAt(is,Ii,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(vn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fo),fi.child=e,this.dispatchEvent(fi),fi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($c),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Yc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Kc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new B(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zc={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function ir(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=Oc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ir(a,r,e+1/3),this.g=ir(a,r,e),this.b=ir(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ge.workingToColorSpace(Ct.copy(this),e),Math.round(He(Ct.r*255,0,255))*65536+Math.round(He(Ct.g*255,0,255))*256+Math.round(He(Ct.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Pt){Ge.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(ss);const n=Zs(Nn.h,ss.h,t),i=Zs(Nn.s,ss.s,t),r=Zs(Nn.l,ss.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new ze;ze.NAMES=bl;class Aa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jc extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jt=new B,Mn=new B,sr=new B,Sn=new B,di=new B,pi=new B,po=new B,rr=new B,ar=new B,or=new B,lr=new ut,cr=new ut,hr=new ut;class tn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jt.subVectors(e,t),i.cross(Jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jt.subVectors(i,t),Mn.subVectors(n,t),sr.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(Mn),l=Jt.dot(sr),c=Mn.dot(Mn),h=Mn.dot(sr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return lr.setScalar(0),cr.setScalar(0),hr.setScalar(0),lr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(lr,r.x),a.addScaledVector(cr,r.y),a.addScaledVector(hr,r.z),a}static isFrontFacing(e,t,n,i){return Jt.subVectors(n,t),Mn.subVectors(e,t),Jt.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Jt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;di.subVectors(i,n),pi.subVectors(r,n),rr.subVectors(e,n);const l=di.dot(rr),c=pi.dot(rr);if(l<=0&&c<=0)return t.copy(n);ar.subVectors(e,i);const h=di.dot(ar),f=pi.dot(ar);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(di,a);or.subVectors(e,r);const p=di.dot(or),g=pi.dot(or);if(g>=0&&p<=g)return t.copy(r);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(pi,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return po.subVectors(r,i),o=(f-h)/(f-h+(p-g)),t.copy(i).addScaledVector(po,o);const d=1/(m+S+u);return a=S*d,o=u*d,t.copy(n).addScaledVector(di,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ai{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),as.subVectors(this.max,Di),mi.subVectors(e.a,Di),gi.subVectors(e.b,Di),_i.subVectors(e.c,Di),Fn.subVectors(gi,mi),On.subVectors(_i,gi),Xn.subVectors(mi,_i);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Xn.z,Xn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Xn.z,0,-Xn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Xn.y,Xn.x,0];return!ur(t,mi,gi,_i,as)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,mi,gi,_i,as))?!1:(os.crossVectors(Fn,On),t=[os.x,os.y,os.z],ur(t,mi,gi,_i,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new B,new B,new B,new B,new B,new B,new B,new B],Qt=new B,rs=new ai,mi=new B,gi=new B,_i=new B,Fn=new B,On=new B,Xn=new B,Di=new B,as=new B,os=new B,qn=new B;function ur(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qn.fromArray(s,r);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gt=new B,ls=new Fe;let Qc=0;class on extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yl extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class El extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}const jc=new ai,Ui=new B,fr=new B;class Zi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(fr)),this.expandByPoint(Ui.copy(e.center).sub(fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eh=0;const Kt=new rt,dr=new Tt,xi=new B,Vt=new ai,Ni=new ai,yt=new B;class Gt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dc(e)?El:yl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Vt.min,Ni.min),Vt.expandByPoint(yt),yt.addVectors(Vt.max,Ni.max),Vt.expandByPoint(yt)):(Vt.expandByPoint(Ni.min),Vt.expandByPoint(Ni.max))}Vt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),yt.add(xi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new B,l[x]=new B;const c=new B,h=new B,f=new B,u=new Fe,p=new Fe,g=new Fe,S=new B,m=new B;function d(x,T,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[x].add(S),o[T].add(S),o[P].add(S),l[x].add(m),l[T].add(m),l[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,T=E.length;x<T;++x){const P=E[x],C=P.start,N=P.count;for(let O=C,U=C+N;O<U;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new B,M=new B,y=new B,b=new B;function R(x){y.fromBufferAttribute(i,x),b.copy(y);const T=o[x];w.copy(T),w.sub(y.multiplyScalar(y.dot(T))).normalize(),M.crossVectors(b,T);const C=M.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,C)}for(let x=0,T=E.length;x<T;++x){const P=E[x],C=P.start,N=P.count;for(let O=C,U=C+N;O<U;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new on(u,h,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pr=new B,th=new B,nh=new Le;class zn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pr.subVectors(n,t).cross(th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(pr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nh.getNormalMatrix(e),i=this.coplanarPoint(pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ih=0;class Ji extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Hi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yn=new B,mr=new B,cs=new B,hs=new B;class sh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mr.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(mr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=hs.dot(this.direction),l=-hs.dot(cs),c=hs.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const S=1/h;f*=S,u*=S,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(mr).addScaledVector(cs,u),p}intersectSphere(e,t){if(e.radius<0)return null;yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,d=n.x-a.x,E=n.y-a.y,w=n.z-a.z,M=Math.abs(l),y=Math.abs(c),b=Math.abs(h);let R,x,T,P,C,N,O,U,G,$,V,ne;if(M>=y&&M>=b?(T=l,N=f,G=g,ne=d,l>=0?(R=c,x=h,P=u,C=p,O=S,U=m,$=E,V=w):(R=h,x=c,P=p,C=u,O=m,U=S,$=w,V=E)):y>=b?(T=c,N=u,G=S,ne=E,c>=0?(R=h,x=l,P=p,C=f,O=m,U=g,$=w,V=d):(R=l,x=h,P=f,C=p,O=g,U=m,$=d,V=w)):(T=h,N=p,G=m,ne=w,h>=0?(R=l,x=c,P=f,C=u,O=g,U=S,$=d,V=E):(R=c,x=l,P=u,C=f,O=S,U=g,$=E,V=d)),T===0)return null;const X=R/T,Q=x/T,j=1/T,Te=P-X*N,Se=C-Q*N,et=O-X*G,Ve=U-Q*G,Ye=$-X*ne,Y=V-Q*ne,ee=Ye*Ve-Y*et,_e=Te*Y-Se*Ye,Pe=et*Se-Ve*Te;if(i){if(ee<0||_e<0||Pe<0)return null}else if((ee<0||_e<0||Pe<0)&&(ee>0||_e>0||Pe>0))return null;const me=ee+_e+Pe;if(me===0)return null;const Ne=j*(ee*N+_e*G+Pe*ne);return(me>0?Ne<0:Ne>0)?null:this.at(Ne/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mo=new rt,Yn=new sh,us=new Zi,go=new B,fs=new B,ds=new B,ps=new B,gr=new B,ms=new B,_o=new B,gs=new B;class ct extends Tt{constructor(e=new Gt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(gr.fromBufferAttribute(f,e),a?ms.addScaledVector(gr,h):ms.addScaledVector(gr.sub(t),h))}t.add(ms)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(us.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(us,go)===null||Yn.origin.distanceToSquared(go)>(e.far-e.near)**2))&&(mo.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(mo),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,y=w;M<y;M+=3){const b=o.getX(M),R=o.getX(M+1),x=o.getX(M+2);i=_s(this,d,e,n,c,h,f,b,R,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const E=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);i=_s(this,a,e,n,c,h,f,E,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,y=w;M<y;M+=3){const b=M,R=M+1,x=M+2;i=_s(this,d,e,n,c,h,f,b,R,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const E=m,w=m+1,M=m+2;i=_s(this,a,e,n,c,h,f,E,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function rh(s,e,t,n,i,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===jn,o),l===null)return null;gs.copy(o),gs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:s}}function _s(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,fs),s.getVertexPosition(l,ds),s.getVertexPosition(c,ps);const h=rh(s,e,t,n,fs,ds,ps,_o);if(h){const f=new B;tn.getBarycoord(_o,fs,ds,ps,f),i&&(h.uv=tn.getInterpolatedAttribute(i,o,l,c,f,new Fe)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,l,c,f,new Fe)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};tn.getNormal(fs,ds,ps,u.normal),h.face=u,h.barycoord=f}return h}class Tl extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=xt,h=xt,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo extends on{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new rt,vo=new rt,xs=[],Mo=new ai,ah=new rt,Fi=new ct,Oi=new Zi;class oh extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ah)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Mo.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(Mo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Oi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vi),vo.multiplyMatrices(n,vi),Fi.matrixWorld=vo,Fi.raycast(e,xs);for(let a=0,o=xs.length;a<o;a++){const l=xs[a];l.instanceId=r,l.object=this,t.push(l)}xs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(i*this.count),i,this.count,va,nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kn=new Zi,lh=new Fe(.5,.5),vs=new B;class wa{constructor(e=new zn,t=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],g=r[8],S=r[9],m=r[10],d=r[11],E=r[12],w=r[13],M=r[14],y=r[15];if(i[0].setComponents(c-a,p-h,d-g,y-E).normalize(),i[1].setComponents(c+a,p+h,d+g,y+E).normalize(),i[2].setComponents(c+o,p+f,d+S,y+w).normalize(),i[3].setComponents(c-o,p-f,d-S,y-w).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,p-u,d-m,y-M).normalize();else if(i[4].setComponents(c-l,p-u,d-m,y-M).normalize(),t===mn)i[5].setComponents(c+l,p+u,d+m,y+M).normalize();else if(t===qi)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);const t=lh.distanceTo(e.center);return Kn.radius=.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vs.x=i.normal.x>0?e.max.x:e.min.x,vs.y=i.normal.y>0?e.max.y:e.min.y,vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Al extends It{constructor(e=[],t=ei,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ra extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi extends It{constructor(e,t,n=gn,i,r,a,o=xt,l=xt,c,h=Cn,f=1){if(h!==Cn&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ch extends Yi{constructor(e,t=gn,n=ei,i,r,a=xt,o=xt,l,c=Cn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wl extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class en extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function g(S,m,d,E,w,M,y,b,R,x,T){const P=M/R,C=y/x,N=M/2,O=y/2,U=b/2,G=R+1,$=x+1;let V=0,ne=0;const X=new B;for(let Q=0;Q<$;Q++){const j=Q*C-O;for(let Te=0;Te<G;Te++){const Se=Te*P-N;X[S]=Se*E,X[m]=j*w,X[d]=U,c.push(X.x,X.y,X.z),X[S]=0,X[m]=0,X[d]=b>0?1:-1,h.push(X.x,X.y,X.z),f.push(Te/R),f.push(1-Q/x),V+=1}}for(let Q=0;Q<x;Q++)for(let j=0;j<R;j++){const Te=u+j+G*Q,Se=u+j+G*(Q+1),et=u+(j+1)+G*(Q+1),Ve=u+(j+1)+G*Q;l.push(Te,Se,Ve),l.push(Se,et,Ve),ne+=6}o.addGroup(p,ne,T),p+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ca extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new B,h=new Fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=n+f/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _t extends Gt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],p=[];let g=0;const S=[],m=n/2;let d=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(p,2));function E(){const M=new B,y=new B;let b=0;const R=(t-e)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,C=P*(t-e)+e;for(let N=0;N<=i;N++){const O=N/i,U=O*l+o,G=Math.sin(U),$=Math.cos(U);y.x=C*G,y.y=-P*n+m,y.z=C*$,f.push(y.x,y.y,y.z),M.set(G,R,$).normalize(),u.push(M.x,M.y,M.z),p.push(O,1-P),T.push(g++)}S.push(T)}for(let x=0;x<i;x++)for(let T=0;T<r;T++){const P=S[T][x],C=S[T+1][x],N=S[T+1][x+1],O=S[T][x+1];(e>0||T!==0)&&(h.push(P,C,O),b+=3),(t>0||T!==r-1)&&(h.push(C,N,O),b+=3)}c.addGroup(d,b,0),d+=b}function w(M){const y=g,b=new Fe,R=new B;let x=0;const T=M===!0?e:t,P=M===!0?1:-1;for(let N=1;N<=i;N++)f.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),g++;const C=g;for(let N=0;N<=i;N++){const U=N/i*l+o,G=Math.cos(U),$=Math.sin(U);R.x=T*$,R.y=m*P,R.z=T*G,f.push(R.x,R.y,R.z),u.push(0,P,0),b.x=G*.5+.5,b.y=$*.5*P+.5,p.push(b.x,b.y),g++}for(let N=0;N<i;N++){const O=y+N,U=C+N;M===!0?h.push(U,U+1,O):h.push(U+1,U,O),x+=3}c.addGroup(d,x,M===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Os extends _t{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Os(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gn extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,p=[],g=[],S=[],m=[];for(let d=0;d<h;d++){const E=d*u-a;for(let w=0;w<c;w++){const M=w*f-r;g.push(M,-E,0),S.push(0,0,1),m.push(w/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const w=E+c*d,M=E+c*(d+1),y=E+1+c*(d+1),b=E+1+c*d;p.push(w,M,b),p.push(M,y,b)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(S,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends Gt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,p=new B,g=new Fe;for(let S=0;S<=i;S++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let S=0;S<i;S++){const m=S*(n+1);for(let d=0;d<n;d++){const E=d+m,w=E,M=E+n+1,y=E+n+2,b=E+1;o.push(w,M,b),o.push(M,y,b)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class La extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new B,u=new B,p=[],g=[],S=[],m=[];for(let d=0;d<=n;d++){const E=[],w=d/n,M=a+w*o,y=e*Math.cos(M),b=Math.sqrt(e*e-y*y);let R=0;d===0&&a===0?R=.5/t:d===n&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){const T=x/t,P=i+T*r;f.x=-b*Math.cos(P),f.y=y,f.z=b*Math.sin(P),g.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(T+R,1-w),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const w=h[d][E+1],M=h[d][E],y=h[d+1][E],b=h[d+1][E+1];(d!==0||a>0)&&p.push(w,M,b),(d!==n-1||l<Math.PI)&&p.push(M,y,b)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(S,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ci(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(So(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(So(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=Ci(s[t]);for(const i in n)e[i]=n[i]}return e}function So(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const uh={clone:Ci,merge:Nt};var fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(i.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ph extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bo extends Ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mh extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gh extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ia extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class _h extends Ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _r=new rt,yo=new B,Eo=new B;class Cl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_r,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ms=new B,Ss=new ri,un=new B;class Pl extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ms,Ss,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ms,Ss,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new B,To=new Fe,Ao=new Fe;class Wt extends Pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,To,Ao),t.subVectors(Ao,To)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xh extends Cl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class vh extends Ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Da extends Pl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mh extends Cl{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wo extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Mi=-90,Si=1;class Sh extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Mi,Si,e,t);i.layers=this.layers,this.add(i);const r=new Wt(Mi,Si,e,t);r.layers=this.layers,this.add(r);const a=new Wt(Mi,Si,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Mi,Si,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Mi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Mi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bh extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const za=class za{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};za.prototype.isMatrix2=!0;let Ro=za;function Co(s,e,t,n){const i=yh(n);switch(t){case _l:return s*e;case va:return s*e/i.components*i.byteLength;case Ma:return s*e/i.components*i.byteLength;case ti:return s*e*2/i.components*i.byteLength;case Sa:return s*e*2/i.components*i.byteLength;case xl:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case ba:return s*e*4/i.components*i.byteLength;case As:case ws:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rs:case Cs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nr:case Or:return Math.max(s,16)*Math.max(e,8)/4;case Ur:case Fr:return Math.max(s,8)*Math.max(e,8)/2;case Br:case zr:case Gr:case Hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kr:case Is:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $r:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sa:case ra:case aa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oa:case la:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ds:case ca:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yh(s){switch(s){case qt:case dl:return{byteLength:1,components:1};case Wi:case pl:case _n:return{byteLength:2,components:1};case _a:case xa:return{byteLength:2,components:4};case gn:case ga:case nn:return{byteLength:4,components:1};case ml:case gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ll(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Eh(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,f[u]=S)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const S=f[p];s.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ah=`#ifdef USE_ALPHAHASH
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
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ph=`#ifdef USE_ALPHATEST
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
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
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
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
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
#endif`,zh=`#ifdef USE_BUMPMAP
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kh=`#define PI 3.141592653589793
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
} // validated`,$h=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
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
#endif`,yu=`uniform sampler2D dfgLUT;
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
}`,Eu=`
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ru=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nu=`#if defined( USE_POINTS_UV )
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
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`#ifdef USE_MORPHTARGETS
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
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ku=`#ifdef USE_NORMALMAP
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
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ju=`#ifdef OPAQUE
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
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
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pf=`varying vec3 vWorldDirection;
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
}`,If=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,Uf=`#define DISTANCE
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
}`,Nf=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,Zf=`#define STANDARD
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
}`,Jf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,jf=`#define TOON
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
}`,td=`uniform vec3 diffuse;
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
}`,nd=`#include <common>
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
}`,id=`uniform vec3 color;
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
}`,sd=`uniform float rotation;
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
}`,rd=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Th,alphahash_pars_fragment:Ah,alphamap_fragment:wh,alphamap_pars_fragment:Rh,alphatest_fragment:Ch,alphatest_pars_fragment:Ph,aomap_fragment:Lh,aomap_pars_fragment:Ih,batching_pars_vertex:Dh,batching_vertex:Uh,begin_vertex:Nh,beginnormal_vertex:Fh,bsdfs:Oh,iridescence_fragment:Bh,bumpmap_pars_fragment:zh,clipping_planes_fragment:kh,clipping_planes_pars_fragment:Gh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Vh,color_fragment:Wh,color_pars_fragment:Xh,color_pars_vertex:qh,color_vertex:Yh,common:Kh,cube_uv_reflection_fragment:$h,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Jh,displacementmap_vertex:Qh,emissivemap_fragment:jh,emissivemap_pars_fragment:eu,colorspace_fragment:tu,colorspace_pars_fragment:nu,envmap_fragment:iu,envmap_common_pars_fragment:su,envmap_pars_fragment:ru,envmap_pars_vertex:au,envmap_physical_pars_fragment:_u,envmap_vertex:ou,fog_vertex:lu,fog_pars_vertex:cu,fog_fragment:hu,fog_pars_fragment:uu,gradientmap_pars_fragment:fu,lightmap_pars_fragment:du,lights_lambert_fragment:pu,lights_lambert_pars_fragment:mu,lights_pars_begin:gu,lights_toon_fragment:xu,lights_toon_pars_fragment:vu,lights_phong_fragment:Mu,lights_phong_pars_fragment:Su,lights_physical_fragment:bu,lights_physical_pars_fragment:yu,lights_fragment_begin:Eu,lights_fragment_maps:Tu,lights_fragment_end:Au,lightprobes_pars_fragment:wu,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Pu,logdepthbuf_vertex:Lu,map_fragment:Iu,map_pars_fragment:Du,map_particle_fragment:Uu,map_particle_pars_fragment:Nu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphinstance_vertex:Bu,morphcolor_vertex:zu,morphnormal_vertex:ku,morphtarget_pars_vertex:Gu,morphtarget_vertex:Hu,normal_fragment_begin:Vu,normal_fragment_maps:Wu,normal_pars_fragment:Xu,normal_pars_vertex:qu,normal_vertex:Yu,normalmap_pars_fragment:Ku,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Qu,opaque_fragment:ju,packing:ef,premultiplied_alpha_fragment:tf,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:hf,shadowmask_pars_fragment:uf,skinbase_vertex:ff,skinning_pars_vertex:df,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:vf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:yf,uv_vertex:Ef,worldpos_vertex:Tf,background_vert:Af,background_frag:wf,backgroundCube_vert:Rf,backgroundCube_frag:Cf,cube_vert:Pf,cube_frag:Lf,depth_vert:If,depth_frag:Df,distance_vert:Uf,distance_frag:Nf,equirect_vert:Ff,equirect_frag:Of,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Gf,meshlambert_vert:Hf,meshlambert_frag:Vf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:qf,meshnormal_frag:Yf,meshphong_vert:Kf,meshphong_frag:$f,meshphysical_vert:Zf,meshphysical_frag:Jf,meshtoon_vert:Qf,meshtoon_frag:jf,points_vert:ed,points_frag:td,shadow_vert:nd,shadow_frag:id,sprite_vert:sd,sprite_frag:rd},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},pn={basic:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nt([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nt([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nt([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Nt([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Nt([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};pn.physical={uniforms:Nt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const bs={r:0,b:0,g:0},ad=new rt,Il=new Le;Il.set(-1,0,0,0,1,0,0,0,1);function od(s,e,t,n,i,r){const a=new ze(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function p(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const M=E.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(E){let w=!1;const M=p(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(E,w){const M=p(w);M&&(M.isCubeTexture||M.mapping===zs)?(c===void 0&&(c=new ct(new en(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ci(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ad.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Il),c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==Je,(h!==M||f!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ct(new Gn(2,2),new xn({name:"BackgroundMaterial",uniforms:Ci(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,w){E.getRGB(bs,Rl(s)),t.buffers.color.setClear(bs.r,bs.g,bs.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:S,dispose:d}}function ld(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(C,N,O,U,G){let $=!1;const V=f(C,U,O,N);r!==V&&(r=V,c(r.object)),$=p(C,U,O,G),$&&g(C,U,O,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(C,N,O,U),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function f(C,N,O,U){const G=U.wireframe===!0;let $=n[N.id];$===void 0&&($={},n[N.id]=$);const V=C.isInstancedMesh===!0?C.id:0;let ne=$[V];ne===void 0&&(ne={},$[V]=ne);let X=ne[O.id];X===void 0&&(X={},ne[O.id]=X);let Q=X[G];return Q===void 0&&(Q=u(l()),X[G]=Q),Q}function u(C){const N=[],O=[],U=[];for(let G=0;G<t;G++)N[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:U,object:C,attributes:{},index:null}}function p(C,N,O,U){const G=r.attributes,$=N.attributes;let V=0;const ne=O.getAttributes();for(const X in ne)if(ne[X].location>=0){const j=G[X];let Te=$[X];if(Te===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Te=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Te=C.instanceColor)),j===void 0||j.attribute!==Te||Te&&j.data!==Te.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(C,N,O,U){const G={},$=N.attributes;let V=0;const ne=O.getAttributes();for(const X in ne)if(ne[X].location>=0){let j=$[X];j===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));const Te={};Te.attribute=j,j&&j.data&&(Te.data=j.data),G[X]=Te,V++}r.attributes=G,r.attributesNum=V,r.index=U}function S(){const C=r.newAttributes;for(let N=0,O=C.length;N<O;N++)C[N]=0}function m(C){d(C,0)}function d(C,N){const O=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;O[C]=1,U[C]===0&&(s.enableVertexAttribArray(C),U[C]=1),G[C]!==N&&(s.vertexAttribDivisor(C,N),G[C]=N)}function E(){const C=r.newAttributes,N=r.enabledAttributes;for(let O=0,U=N.length;O<U;O++)N[O]!==C[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function w(C,N,O,U,G,$,V){V===!0?s.vertexAttribIPointer(C,N,O,G,$):s.vertexAttribPointer(C,N,O,U,G,$)}function M(C,N,O,U){S();const G=U.attributes,$=O.getAttributes(),V=N.defaultAttributeValues;for(const ne in $){const X=$[ne];if(X.location>=0){let Q=G[ne];if(Q===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const j=Q.normalized,Te=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;const et=Se.buffer,Ve=Se.type,Ye=Se.bytesPerElement,Y=Ve===s.INT||Ve===s.UNSIGNED_INT||Q.gpuType===ga;if(Q.isInterleavedBufferAttribute){const ee=Q.data,_e=ee.stride,Pe=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)d(X.location+me,ee.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,et);for(let me=0;me<X.locationSize;me++)w(X.location+me,Te/X.locationSize,Ve,j,_e*Ye,(Pe+Te/X.locationSize*me)*Ye,Y)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)d(X.location+ee,Q.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ee=0;ee<X.locationSize;ee++)w(X.location+ee,Te/X.locationSize,Ve,j,Te*Ye,Te/X.locationSize*ee*Ye,Y)}}else if(V!==void 0){const j=V[ne];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(X.location,j);break;case 3:s.vertexAttrib3fv(X.location,j);break;case 4:s.vertexAttrib4fv(X.location,j);break;default:s.vertexAttrib1fv(X.location,j)}}}}E()}function y(){T();for(const C in n){const N=n[C];for(const O in N){const U=N[O];for(const G in U){const $=U[G];for(const V in $)h($[V].object),delete $[V];delete U[G]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const O in N){const U=N[O];for(const G in U){const $=U[G];for(const V in $)h($[V].object),delete $[V];delete U[G]}}delete n[C.id]}function R(C){for(const N in n){const O=n[N];for(const U in O){const G=O[U];if(G[C.id]===void 0)continue;const $=G[C.id];for(const V in $)h($[V].object),delete $[V];delete G[C.id]}}}function x(C){for(const N in n){const O=n[N],U=C.isInstancedMesh===!0?C.id:0,G=O[U];if(G!==void 0){for(const $ in G){const V=G[$];for(const ne in V)h(V[ne].object),delete V[ne];delete G[$]}delete O[U],Object.keys(O).length===0&&delete n[N]}}}function T(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function cd(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hd(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&R!==nn&&!x&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,maxSamples:y,samples:b}}function ud(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new zn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||i;return i=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,w=E*4;let M=d.clippingState||null;l.value=M,M=h(g,u,w,p);for(let y=0;y!==w;++y)M[y]=t[y];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,M=p;w!==S;++w,M+=4)a.copy(f[w]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Ti=4,fd=6,dd=20,pd=256,Bi=new Da,Po=new ze;let xr=null,vr=0,Mr=0,Sr=!1;const md=new B,$n=new B;class Lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=md}=r;xr=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xr,vr,Mr),this._renderer.xr.enabled=Sr,e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xr=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:_n,format:sn,colorSpace:Us,depthBuffer:!1},i=Io(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gd(r)),this._blurMaterial=xd(r,e,t),this._ggxMaterial=_d(r,e,t)}return i}_compileMaterial(e){const t=new ct(new Gt,e);this._renderer.compile(t,Bi)}_sceneToCubeUV(e,t,n,i,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Po),f.toneMapping=rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new en,new dn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,d=!0):(m.color.copy(Po),d=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const y=this._cubeSize;bi(i,M*y,w>2?y:0,y,y),f.setRenderTarget(i),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ei||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;bi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-Ti?n-g+Ti:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,bi(r,m,d,3*S,2*S),i.setRenderTarget(r),i.render(o,Bi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,bi(e,m,d,3*S,2*S),i.setRenderTarget(e),i.render(o,Bi)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-Ti?i-this._lodMax+Ti:0),u=4*(this._cubeSize-h);bi(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Bi)}}function gd(s){const e=[],t=[];let n=s;const i=s-Ti+1+fd;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,g=new Float32Array(p*u*f),S=new Float32Array(p*u*f);for(let d=0;d<f;d++){const E=d%3*2/3-1,w=d>2?0:-1,M=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];g.set(M,p*u*d);for(let y=0;y<u;y++){const b=h[y*2]*2-1,R=h[y*2+1]*2-1;d===0?$n.set(1,R,b):d===1?$n.set(-b,1,-R):d===2?$n.set(-b,R,1):d===3?$n.set(-1,R,-b):d===4?$n.set(-b,-1,R):$n.set(b,R,-1),$n.toArray(S,(d*u+y)*p)}}const m=new Gt;m.setAttribute("position",new on(g,p)),m.setAttribute("outputDirection",new on(S,p)),t.push(new ct(m,null)),n>Ti&&n--}return{lodMeshes:t,sizeLods:e}}function Io(s,e,t){const n=new an(s,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _d(s,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function xd(s,e,t){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:dd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Do(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Uo(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dl extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Al(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new en(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:wn});r.uniforms.tEquirect.value=t;const a=new ct(i,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Lt),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function vd(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Xs||p===qs)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new Dl(g.height);return S.fromEquirectangularTexture(s,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,g=p===Xs||p===qs,S=p===ei||p===Ri;if(g||S){let m=t.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Lo(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return g&&E&&E.height>0||S&&E&&l(E)?(n===null&&(n=new Lo(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Xs?u.mapping=ei:p===qs&&(u.mapping=Ri),u}function l(u){let p=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Md(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ai("WebGLRenderer: "+n+" extension not supported."),i}}}function Sd(s,e,t,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const E=p.array;S=p.version;for(let w=0,M=E.length;w<M;w+=3){const y=E[w+0],b=E[w+1],R=E[w+2];u.push(y,b,b,R,R,y)}}else{const E=g.array;S=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){const y=w+0,b=w+1,R=w+2;u.push(y,b,b,R,R,y)}}const m=new(g.count>=65535?El:yl)(u,1);m.version=S;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function bd(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,p){p!==0&&(s.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];t.update(S,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ed(s,e,t){const n=new WeakMap,i=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*b*4*f),x=new Ml(R,y,b,f);x.type=nn,x.needsUpdate=!0;const T=M*4;for(let C=0;C<f;C++){const N=d[C],O=E[C],U=w[C],G=y*b*4*C;for(let $=0;$<N.count;$++){const V=$*T;g===!0&&(i.fromBufferAttribute(N,$),R[G+V+0]=i.x,R[G+V+1]=i.y,R[G+V+2]=i.z,R[G+V+3]=0),S===!0&&(i.fromBufferAttribute(O,$),R[G+V+4]=i.x,R[G+V+5]=i.y,R[G+V+6]=i.z,R[G+V+7]=0),m===!0&&(i.fromBufferAttribute(U,$),R[G+V+8]=i.x,R[G+V+9]=i.y,R[G+V+10]=i.z,R[G+V+11]=U.itemSize===4?i.w:1)}}u={count:f,texture:x,size:new Fe(y,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",S),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Td(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Ad={[rl]:"LINEAR_TONE_MAPPING",[al]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[ll]:"ACES_FILMIC_TONE_MAPPING",[hl]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function wd(s,e,t,n,i,r){const a=new an(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Gt;c.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dt([0,2,0,0,2,0],2));const h=new ph({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ct(c,h),u=new Da(-1,1,1,-1,0,1);let p=null,g=null,S=!1,m,d=null,E=[],w=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),l!==null&&l.setSize(M,y);for(let b=0;b<E.length;b++){const R=E[b];R.setSize&&R.setSize(M,y)}},this.setEffects=function(M){E=M,w=E.length>0&&E[0].isRenderPass===!0;const y=a.width,b=a.height;E.length>0&&o===null&&(o=new an(y,b,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new an(y,b,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){const x=E[R];x.setSize&&x.setSize(y,b)}},this.begin=function(M,y){if(S||M.toneMapping===rn&&E.length===0)return!1;if(d=y,y!==null){const b=y.width,R=y.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return w===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=rn,!0},this.hasRenderPass=function(){return w},this.end=function(M,y){M.toneMapping=m,S=!0;let b=a,R=o;for(let x=0;x<E.length;x++){const T=E[x];T.enabled!==!1&&(T.render(M,R,b,y),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,h.defines={},Ge.getTransfer(p)===Je&&(h.defines.SRGB_TRANSFER="");const x=Ad[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(d),M.render(f,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Ul=new It,fa=new Yi(1,1),Nl=new Ml,Fl=new Vc,Ol=new Al,No=[],Fo=[],Oo=new Float32Array(16),Bo=new Float32Array(9),zo=new Float32Array(4);function Pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=No[i];if(r===void 0&&(r=new Float32Array(i),No[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gs(s,e){let t=Fo[e];t===void 0&&(t=new Int32Array(e),Fo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Rd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function Pd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function Ld(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function Id(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;zo.set(n),s.uniformMatrix2fv(this.addr,!1,zo),St(t,n)}}function Dd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Bo.set(n),s.uniformMatrix3fv(this.addr,!1,Bo),St(t,n)}}function Ud(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Oo.set(n),s.uniformMatrix4fv(this.addr,!1,Oo),St(t,n)}}function Nd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function Od(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function Bd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function zd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function Gd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function Hd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function Vd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fa.compareFunction=t.isReversedDepthBuffer()?Ea:ya,r=fa):r=Ul,t.setTexture2D(e||r,i)}function Wd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fl,i)}function Xd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ol,i)}function qd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nl,i)}function Yd(s){switch(s){case 5126:return Rd;case 35664:return Cd;case 35665:return Pd;case 35666:return Ld;case 35674:return Id;case 35675:return Dd;case 35676:return Ud;case 5124:case 35670:return Nd;case 35667:case 35671:return Fd;case 35668:case 35672:return Od;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return kd;case 36295:return Gd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return qd}}function Kd(s,e){s.uniform1fv(this.addr,e)}function $d(s,e){const t=Pi(e,this.size,2);s.uniform2fv(this.addr,t)}function Zd(s,e){const t=Pi(e,this.size,3);s.uniform3fv(this.addr,t)}function Jd(s,e){const t=Pi(e,this.size,4);s.uniform4fv(this.addr,t)}function Qd(s,e){const t=Pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jd(s,e){const t=Pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ep(s,e){const t=Pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tp(s,e){s.uniform1iv(this.addr,e)}function np(s,e){s.uniform2iv(this.addr,e)}function ip(s,e){s.uniform3iv(this.addr,e)}function sp(s,e){s.uniform4iv(this.addr,e)}function rp(s,e){s.uniform1uiv(this.addr,e)}function ap(s,e){s.uniform2uiv(this.addr,e)}function op(s,e){s.uniform3uiv(this.addr,e)}function lp(s,e){s.uniform4uiv(this.addr,e)}function cp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=fa:a=Ul;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function hp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fl,r[a])}function up(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ol,r[a])}function fp(s,e,t){const n=this.cache,i=e.length,r=Gs(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Nl,r[a])}function dp(s){switch(s){case 5126:return Kd;case 35664:return $d;case 35665:return Zd;case 35666:return Jd;case 35674:return Qd;case 35675:return jd;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return fp}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yd(t.type)}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dp(t.type)}}class gp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const br=/(\w+)(\])?(\[|\.)?/g;function ko(s,e){s.seq.push(e),s.map[e.id]=e}function _p(s,e,t){const n=s.name,i=n.length;for(br.lastIndex=0;;){const r=br.exec(n),a=br.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ko(t,c===void 0?new pp(o,s,e):new mp(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new gp(o),ko(t,f)),t=f}}}class Ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_p(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Go(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const xp=37297;let vp=0;function Mp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ho=new Le;function Sp(s){Ge._getMatrix(Ho,Ge.workingColorSpace,s);const e=`mat3( ${Ho.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(s)){case Ns:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Mp(s.getShaderSource(e),o)}else return r}function bp(s,e){const t=Sp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yp={[rl]:"Linear",[al]:"Reinhard",[ol]:"Cineon",[ll]:"ACESFilmic",[hl]:"AgX",[ul]:"Neutral",[cl]:"Custom"};function Ep(s,e){const t=yp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ys=new B;function Tp(){Ge.getLuminanceCoefficients(ys);const s=ys.x.toFixed(4),e=ys.y.toFixed(4),t=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ap(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function wp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Gi(s){return s!==""}function Wo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(s){return s.replace(Cp,Lp)}const Pp=new Map;function Lp(s,e){let t=Ue[e];if(t===void 0){const n=Pp.get(e);if(n!==void 0)t=Ue[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return da(t)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(s){return s.replace(Ip,Dp)}function Dp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yo(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Up={[Ts]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function Np(s){return Up[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fp={[ei]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE_UV"};function Op(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Fp[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bp={[Ri]:"ENVMAP_MODE_REFRACTION"};function zp(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Bp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kp={[ma]:"ENVMAP_BLENDING_MULTIPLY",[vc]:"ENVMAP_BLENDING_MIX",[Mc]:"ENVMAP_BLENDING_ADD"};function Gp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kp[s.combine]||"ENVMAP_BLENDING_NONE"}function Hp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Np(t),c=Op(t),h=zp(t),f=Gp(t),u=Hp(t),p=Ap(t),g=wp(r),S=i.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),d.length>0&&(d+=`
`)):(m=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),d=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==rn?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,bp("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=da(a),a=Wo(a,t),a=Xo(a,t),o=da(o),o=Wo(o,t),o=Xo(o,t),a=qo(a),o=qo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=E+m+a,M=E+d+o,y=Go(i,i.VERTEX_SHADER,w),b=Go(i,i.FRAGMENT_SHADER,M);i.attachShader(S,y),i.attachShader(S,b),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function R(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(S)||"",O=i.getShaderInfoLog(y)||"",U=i.getShaderInfoLog(b)||"",G=N.trim(),$=O.trim(),V=U.trim();let ne=!0,X=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,y,b);else{const Q=Vo(i,y,"vertex"),j=Vo(i,b,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Q+`
`+j)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):($===""||V==="")&&(X=!1);X&&(C.diagnostics={runnable:ne,programLog:G,vertexShader:{log:$,prefix:m},fragmentShader:{log:V,prefix:d}})}i.deleteShader(y),i.deleteShader(b),x=new Ps(i,S),T=Rp(i,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(S,xp)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=b,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qp(e),t.set(e,n)),n}}class qp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function Yp(s){return s===ti||s===Is||s===Ds}function Kp(s,e,t,n,i,r){const a=new Sl,o=new Xp,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,T,P,C,N,O){const U=C.fog,G=N.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||$,V),X=ne&&ne.mapping===zs?ne.image.height:null,Q=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=j!==void 0?j.length:0;let Se=0;G.morphAttributes.position!==void 0&&(Se=1),G.morphAttributes.normal!==void 0&&(Se=2),G.morphAttributes.color!==void 0&&(Se=3);let et,Ve,Ye,Y;if(Q){const nt=pn[Q];et=nt.vertexShader,Ve=nt.fragmentShader}else{et=x.vertexShader,Ve=x.fragmentShader;const nt=o.getVertexShaderStage(x),Ke=o.getFragmentShaderStage(x);o.update(x,nt,Ke),Ye=nt.id,Y=Ke.id}const ee=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,Ne=!!x.map,vt=!!x.matcap,Oe=!!ne,Xe=!!x.aoMap,tt=!!x.lightMap,ke=!!x.bumpMap&&x.wireframe===!1,ot=!!x.normalMap,bt=!!x.displacementMap,Ot=!!x.emissiveMap,lt=!!x.metalnessMap,pt=!!x.roughnessMap,D=x.anisotropy>0,At=x.clearcoat>0,Ze=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,F=x.sheen>0,H=x.transmission>0,q=D&&!!x.anisotropyMap,ie=At&&!!x.clearcoatMap,se=At&&!!x.clearcoatNormalMap,K=At&&!!x.clearcoatRoughnessMap,J=_&&!!x.iridescenceMap,re=_&&!!x.iridescenceThicknessMap,ye=F&&!!x.sheenColorMap,ce=F&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Ee=!!x.specularColorMap,Re=!!x.specularIntensityMap,Ie=H&&!!x.transmissionMap,I=H&&!!x.thicknessMap,oe=!!x.gradientMap,Z=!!x.alphaMap,le=x.alphaTest>0,de=!!x.alphaHash,te=!!x.extensions;let Ae=rn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Me={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:Ve,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:vt,envMap:Oe,envMapMode:Oe&&ne.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:tt,bumpMap:ke,normalMap:ot,displacementMap:bt,emissiveMap:Ot,normalMapObjectSpace:ot&&x.normalMapType===yc,normalMapTangentSpace:ot&&x.normalMapType===ha,packedNormalMap:ot&&x.normalMapType===ha&&Yp(x.normalMap.format),metalnessMap:lt,roughnessMap:pt,anisotropy:D,anisotropyMap:q,clearcoat:At,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:K,dispersion:Ze,retroreflection:A,iridescence:_,iridescenceMap:J,iridescenceThicknessMap:re,sheen:F,sheenColorMap:ye,sheenRoughnessMap:ce,specularMap:ae,specularColorMap:Ee,specularIntensityMap:Re,transmission:H,transmissionMap:Ie,thicknessMap:I,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Hi&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:de,combine:x.combine,mapUv:Ne&&g(x.map.channel),aoMapUv:Xe&&g(x.aoMap.channel),lightMapUv:tt&&g(x.lightMap.channel),bumpMapUv:ke&&g(x.bumpMap.channel),normalMapUv:ot&&g(x.normalMap.channel),displacementMapUv:bt&&g(x.displacementMap.channel),emissiveMapUv:Ot&&g(x.emissiveMap.channel),metalnessMapUv:lt&&g(x.metalnessMap.channel),roughnessMapUv:pt&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:ie&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(x.sheenRoughnessMap.channel),specularMapUv:ae&&g(x.specularMap.channel),specularColorMapUv:Ee&&g(x.specularColorMap.channel),specularIntensityMapUv:Re&&g(x.specularIntensityMap.channel),transmissionMapUv:Ie&&g(x.transmissionMap.channel),thicknessMapUv:I&&g(x.thicknessMap.channel),alphaMapUv:Z&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ot||D),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Ne||Z),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xt,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:te&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(d(T,x),E(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const T=p[x.type];let P;if(T){const C=pn[T];P=uh.clone(C.uniforms)}else P=x.uniforms;return P}function M(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Vp(s,T,x,i),c.push(P),h.set(T,P)),P}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:R}}function $p(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Zp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ko(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $o(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,S,m,d){let E=s[e];return E===void 0?(E={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:d},s[e]=E):(E.id=u.id,E.object=u,E.geometry=p,E.material=g,E.materialVariant=a(u),E.groupOrder=S,E.renderOrder=u.renderOrder,E.z=m,E.group=d),e++,E}function l(u,p,g,S,m,d,E){E.reversedDepth===!0&&(m=-m);const w=o(u,p,g,S,m,d);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(u,p,g,S,m,d){const E=o(u,p,g,S,m,d);g.transmission>0?n.unshift(E):g.transparent===!0?i.unshift(E):t.unshift(E)}function h(u,p){t.length>1&&t.sort(u||Zp),n.length>1&&n.sort(p||Ko),i.length>1&&i.sort(p||Ko)}function f(){for(let u=e,p=s.length;u<p;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function Jp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new $o,s.set(n,[a])):i>=r.length?(a=new $o,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Qp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new ze};break;case"SpotLight":t={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function jp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let e0=0;function t0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function n0(s){const e=new Qp,t=jp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new rt,a=new rt;function o(c){let h=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,E=0,w=0,M=0,y=0,b=0,R=0,x=0,T=0,P=0;c.sort(t0);for(let N=0,O=c.length;N<O;N++){const U=c[N],G=U.color,$=U.intensity,V=U.distance;let ne=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ti?ne=U.shadow.map.texture:ne=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=G.r*$,f+=G.g*$,u+=G.b*$;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],$);P++}else if(U.isSunLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=ne;const Te=Q.getViewportCount();for(let Se=0;Se<Te;Se++)n.sunShadowMatrix[S+Se]=Q.getMatrix(Se),n.sunShadowCascade[S+Se]=Q._cascadeData[Se];S+=Te,g++}n.sun[p]=X,p++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=U.shadow.matrix,y++}n.directional[m]=X,m++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(G).multiplyScalar($),X.distance=V,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[E]=X;const Q=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,Q.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[E]=Q.matrix,U.castShadow){const j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[E]=j,n.spotShadowMap[E]=ne,R++}E++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(G).multiplyScalar($),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=X,w++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,j=t.get(U);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=ne,n.pointShadowMatrix[d]=U.shadow.matrix,b++}n.point[d]=X,d++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar($),X.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[M]=X,M++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.sunLength!==p||C.directionalLength!==m||C.pointLength!==d||C.spotLength!==E||C.rectAreaLength!==w||C.hemiLength!==M||C.numSunShadows!==g||C.numDirectionalShadows!==y||C.numPointShadows!==b||C.numSpotShadows!==R||C.numSpotMaps!==x||C.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=E,n.rectArea.length=w,n.point.length=d,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,C.sunLength=p,C.directionalLength=m,C.pointLength=d,C.spotLength=E,C.rectAreaLength=w,C.hemiLength=M,C.numSunShadows=g,C.numDirectionalShadows=y,C.numPointShadows=b,C.numSpotShadows=R,C.numSpotMaps=x,C.numLightProbes=P,n.version=e0++)}function l(c,h){let f=0,u=0,p=0,g=0,S=0,m=0;const d=h.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){const M=c[E];if(M.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),f++}else if(M.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(d),u++}else if(M.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const y=n.rectArea[S];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function Zo(s){const e=new n0(s),t=[],n=[],i=[];function r(u){f.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function i0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Zo(s),e.set(i,[o])):r>=a.length?(o=new Zo(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`,a0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],o0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Jo=new rt,zi=new B,yr=new B;function l0(s,e,t){let n=new wa;const i=new Fe,r=new Fe,a=new ut,o=new mh,l=new gh,c={},h=t.maxTextureSize,f={[jn]:kt,[kt]:jn,[Xt]:Xt},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let d=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ec&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);const T=s.getRenderTarget(),P=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(wn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=d!==this.type;O&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=b.length;U<G;U++){const $=b[U],V=$.shadow;if(V===void 0){Ce("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ne=V.getFrameExtents();i.multiply(ne),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,V.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ki){if($.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new an(i.x,i.y,{format:ti,type:_n,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Yi(i.x,i.y,nn),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Cn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=xt,V.map.depthTexture.magFilter=xt}else $.isPointLight?(V.map=new Dl(i.x),V.map.depthTexture=new ch(i.x,gn)):(V.map=new an(i.x,i.y),V.map.depthTexture=new Yi(i.x,i.y,gn)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Cn,this.type===Ts?(V.map.depthTexture.compareFunction=X?Ea:ya,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=xt,V.map.depthTexture.magFilter=xt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,x);for(let j=0;j<Q;j++){const Te=V.getCamera(j);if($.isPointLight){const Se=V.camera,et=V.matrix,Ve=$.distance||Se.far;Ve!==Se.far&&(Se.far=Ve,Se.updateProjectionMatrix()),zi.setFromMatrixPosition($.matrixWorld),Se.position.copy(zi),yr.copy(Se.position),yr.add(a0[j]),Se.up.copy(o0[j]),Se.lookAt(yr),Se.updateMatrixWorld(),et.makeTranslation(-zi.x,-zi.y,-zi.z),Jo.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Jo,Se.coordinateSystem,Se.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,j),s.clear();else{j===0&&(s.setRenderTarget(V.map),s.clear());const Se=V.getViewport(j);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(a)}n=V.getFrustum(j),M(R,x,Te,$,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&E(V,x),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,C)};function E(b,R){const x=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new an(i.x,i.y,{format:ti,type:_n}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,x,u,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,x,p,S,null)}function w(b,R,x,T){let P=null;const C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)P=C;else if(P=x.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=P.uuid,O=R.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let G=U[O];G===void 0&&(G=P.clone(),U[O]=G,R.addEventListener("dispose",y)),P=G}if(P.visible=R.visible,P.wireframe=R.wireframe,T===ki?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=s.properties.get(P);N.light=x}return P}function M(b,R,x,T,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===ki)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const O=e.update(b),U=b.material;if(Array.isArray(U)){const G=O.groups;for(let $=0,V=G.length;$<V;$++){const ne=G[$],X=U[ne.materialIndex];if(X&&X.visible){const Q=w(b,X,T,P);b.onBeforeShadow(s,b,R,x,O,Q,ne),s.renderBufferDirect(x,null,O,Q,b,ne),b.onAfterShadow(s,b,R,x,O,Q,ne)}}}else if(U.visible){const G=w(b,U,T,P);b.onBeforeShadow(s,b,R,x,O,G,null),s.renderBufferDirect(x,null,O,G,b,null),b.onAfterShadow(s,b,R,x,O,G,null)}}const N=b.children;for(let O=0,U=N.length;O<U;O++)M(N[O],R,x,T,P)}function y(b){b.target.removeEventListener("dispose",y);for(const x in c){const T=c[x],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function c0(s,e){function t(){let I=!1;const oe=new ut;let Z=null;const le=new ut(0,0,0,0);return{setMask:function(de){Z!==de&&!I&&(s.colorMask(de,de,de,de),Z=de)},setLocked:function(de){I=de},setClear:function(de,te,Ae,Me,nt){nt===!0&&(de*=Me,te*=Me,Ae*=Me),oe.set(de,te,Ae,Me),le.equals(oe)===!1&&(s.clearColor(de,te,Ae,Me),le.copy(oe))},reset:function(){I=!1,Z=null,le.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,Z=null,le=null,de=null;return{setReversed:function(te){if(oe!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=te;const Me=de;de=null,this.setClear(Me)}},getReversed:function(){return oe},setTest:function(te){te?ee(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(te){Z!==te&&!I&&(s.depthMask(te),Z=te)},setFunc:function(te){if(oe&&(te=Fc[te]),le!==te){switch(te){case Ar:s.depthFunc(s.NEVER);break;case wr:s.depthFunc(s.ALWAYS);break;case Rr:s.depthFunc(s.LESS);break;case Vi:s.depthFunc(s.LEQUAL);break;case Cr:s.depthFunc(s.EQUAL);break;case Pr:s.depthFunc(s.GEQUAL);break;case Lr:s.depthFunc(s.GREATER);break;case Ir:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=te}},setLocked:function(te){I=te},setClear:function(te){de!==te&&(de=te,oe&&(te=1-te),s.clearDepth(te))},reset:function(){I=!1,Z=null,le=null,de=null,oe=!1}}}function i(){let I=!1,oe=null,Z=null,le=null,de=null,te=null,Ae=null,Me=null,nt=null;return{setTest:function(Ke){I||(Ke?ee(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!I&&(s.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,$t,cn){(Z!==Ke||le!==$t||de!==cn)&&(s.stencilFunc(Ke,$t,cn),Z=Ke,le=$t,de=cn)},setOp:function(Ke,$t,cn){(te!==Ke||Ae!==$t||Me!==cn)&&(s.stencilOp(Ke,$t,cn),te=Ke,Ae=$t,Me=cn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){nt!==Ke&&(s.clearStencil(Ke),nt=Ke)},reset:function(){I=!1,oe=null,Z=null,le=null,de=null,te=null,Ae=null,Me=null,nt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],S=null,m=!1,d=null,E=null,w=null,M=null,y=null,b=null,R=null,x=new ze(0,0,0),T=0,P=!1,C=null,N=null,O=null,U=null,G=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ne>=2);let Q=null,j={};const Te=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),et=new ut().fromArray(Te),Ve=new ut().fromArray(Se);function Ye(I,oe,Z,le){const de=new Uint8Array(4),te=s.createTexture();s.bindTexture(I,te),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<Z;Ae++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(oe+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return te}const Y={};Y[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(Vi),ke(!1),ot(Za),ee(s.CULL_FACE),Xe(wn);function ee(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function _e(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Pe(I,oe){return u[I]!==oe?(s.bindFramebuffer(I,oe),u[I]=oe,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(I,oe){let Z=g,le=!1;if(I){Z=p.get(oe),Z===void 0&&(Z=[],p.set(oe,Z));const de=I.textures;if(Z.length!==de.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Ae=de.length;te<Ae;te++)Z[te]=s.COLOR_ATTACHMENT0+te;Z.length=de.length,le=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,le=!0);le&&s.drawBuffers(Z)}function Ne(I){return S!==I?(s.useProgram(I),S=I,!0):!1}const vt={[Ei]:s.FUNC_ADD,[nc]:s.FUNC_SUBTRACT,[ic]:s.FUNC_REVERSE_SUBTRACT};vt[sc]=s.MIN,vt[rc]=s.MAX;const Oe={[ac]:s.ZERO,[oc]:s.ONE,[lc]:s.SRC_COLOR,[il]:s.SRC_ALPHA,[pc]:s.SRC_ALPHA_SATURATE,[fc]:s.DST_COLOR,[hc]:s.DST_ALPHA,[cc]:s.ONE_MINUS_SRC_COLOR,[sl]:s.ONE_MINUS_SRC_ALPHA,[dc]:s.ONE_MINUS_DST_COLOR,[uc]:s.ONE_MINUS_DST_ALPHA,[mc]:s.CONSTANT_COLOR,[gc]:s.ONE_MINUS_CONSTANT_COLOR,[_c]:s.CONSTANT_ALPHA,[xc]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,oe,Z,le,de,te,Ae,Me,nt,Ke){if(I===wn){m===!0&&(_e(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),I!==tc){if(I!==d||Ke!==P){if((E!==Ei||y!==Ei)&&(s.blendEquation(s.FUNC_ADD),E=Ei,y=Ei),Ke)switch(I){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFunc(s.ONE,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ja:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qa:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",I);break}w=null,M=null,b=null,R=null,x.set(0,0,0),T=0,d=I,P=Ke}return}de=de||oe,te=te||Z,Ae=Ae||le,(oe!==E||de!==y)&&(s.blendEquationSeparate(vt[oe],vt[de]),E=oe,y=de),(Z!==w||le!==M||te!==b||Ae!==R)&&(s.blendFuncSeparate(Oe[Z],Oe[le],Oe[te],Oe[Ae]),w=Z,M=le,b=te,R=Ae),(Me.equals(x)===!1||nt!==T)&&(s.blendColor(Me.r,Me.g,Me.b,nt),x.copy(Me),T=nt),d=I,P=!1}function tt(I,oe){I.side===Xt?_e(s.CULL_FACE):ee(s.CULL_FACE);let Z=I.side===kt;oe&&(Z=!Z),ke(Z),I.blending===Hi&&I.transparent===!1?Xe(wn):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const le=I.stencilWrite;o.setTest(le),le&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){C!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),C=I)}function ot(I){I!==Ql?(ee(s.CULL_FACE),I!==N&&(I===Za?s.cullFace(s.BACK):I===jl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),N=I}function bt(I){I!==O&&(V&&s.lineWidth(I),O=I)}function Ot(I,oe,Z){I?(ee(s.POLYGON_OFFSET_FILL),(U!==oe||G!==Z)&&(U=oe,G=Z,a.getReversed()&&(oe=-oe),s.polygonOffset(oe,Z))):_e(s.POLYGON_OFFSET_FILL)}function lt(I){I?ee(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function pt(I){I===void 0&&(I=s.TEXTURE0+$-1),Q!==I&&(s.activeTexture(I),Q=I)}function D(I,oe,Z){Z===void 0&&(Q===null?Z=s.TEXTURE0+$-1:Z=Q);let le=j[Z];le===void 0&&(le={type:void 0,texture:void 0},j[Z]=le),(le.type!==I||le.texture!==oe)&&(Q!==Z&&(s.activeTexture(Z),Q=Z),s.bindTexture(I,oe||Y[I]),le.type=I,le.texture=oe)}function At(){const I=j[Q];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ze(){try{s.compressedTexImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function _(){try{s.texSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function F(){try{s.texSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function ie(){try{s.texStorage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function se(){try{s.texStorage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function K(){try{s.texImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function J(){try{s.texImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function re(I){return f[I]!==void 0?f[I]:s.getParameter(I)}function ye(I,oe){f[I]!==oe&&(s.pixelStorei(I,oe),f[I]=oe)}function ce(I){et.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function ae(I){Ve.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function Ee(I,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let le=Z.get(I);le===void 0&&(le=s.getUniformBlockIndex(oe,I.name),Z.set(I,le))}function Re(I,oe){const le=c.get(oe).get(I);l.get(oe)!==le&&(s.uniformBlockBinding(oe,le,I.__bindingPointIndex),l.set(oe,le))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,j={},u={},p=new WeakMap,g=[],S=null,m=!1,d=null,E=null,w=null,M=null,y=null,b=null,R=null,x=new ze(0,0,0),T=0,P=!1,C=null,N=null,O=null,U=null,G=null,et.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Pe,drawBuffers:me,useProgram:Ne,setBlending:Xe,setMaterial:tt,setFlipSided:ke,setCullFace:ot,setLineWidth:bt,setPolygonOffset:Ot,setScissorTest:lt,activeTexture:pt,bindTexture:D,unbindTexture:At,compressedTexImage2D:Ze,compressedTexImage3D:A,texImage2D:K,texImage3D:J,pixelStorei:ye,getParameter:re,updateUBOMapping:Ee,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:se,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:ce,viewport:ae,reset:Ie}}function h0(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,_){return g?new OffscreenCanvas(A,_):Fs("canvas")}function m(A,_,F){let H=1;const q=Ze(A);if((q.width>F||q.height>F)&&(H=F/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(H*q.width),se=Math.floor(H*q.height);u===void 0&&(u=S(ie,se));const K=_?S(ie,se):u;return K.width=ie,K.height=se,K.getContext("2d").drawImage(A,0,0,ie,se),Ce("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ie+"x"+se+")."),K}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function d(A){return A.generateMipmaps}function E(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,_,F,H,q,ie=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se;H&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8),F===s.UNSIGNED_SHORT&&se&&(K=se.R16_EXT),F===s.SHORT&&se&&(K=se.R16_SNORM_EXT)),_===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),_===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8),F===s.UNSIGNED_SHORT&&se&&(K=se.RG16_EXT),F===s.SHORT&&se&&(K=se.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),_===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),_===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),_===s.RGB&&(F===s.UNSIGNED_SHORT&&se&&(K=se.RGB16_EXT),F===s.SHORT&&se&&(K=se.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),_===s.RGBA){const J=ie?Ns:Ge.getTransfer(q);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=J===Je?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&se&&(K=se.RGBA16_EXT),F===s.SHORT&&se&&(K=se.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(A,_){let F;return A?_===null||_===gn||_===Xi?F=s.DEPTH24_STENCIL8:_===nn?F=s.DEPTH32F_STENCIL8:_===Wi&&(F=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gn||_===Xi?F=s.DEPTH_COMPONENT24:_===nn?F=s.DEPTH_COMPONENT32F:_===Wi&&(F=s.DEPTH_COMPONENT16),F}function b(A,_){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==xt&&A.minFilter!==Lt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),C(_)}function T(A){const _=n.get(A);if(_.__webglInit===void 0)return;const F=A.source,H=p.get(F);if(H){const q=H[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(A),Object.keys(H).length===0&&p.delete(F)}n.remove(A)}function P(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const F=A.source,H=p.get(F);delete H[_.__cacheKey],a.memory.textures--}function C(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let q=0;q<_.__webglFramebuffer[H].length;q++)s.deleteFramebuffer(_.__webglFramebuffer[H][q]);else s.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)s.deleteFramebuffer(_.__webglFramebuffer[H]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=A.textures;for(let H=0,q=F.length;H<q;H++){const ie=n.get(F[H]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(A)}let N=0;function O(){N=0}function U(){return N}function G(A){N=A}function $(){const A=N;return A>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ne(A,_){const F=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const H=A.image;if(H===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+_)}function X(A,_){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,_);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+_)}function Q(A,_){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){_e(F,A,_);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+_)}function j(A,_){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Pe(F,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+_)}const Te={[Ls]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Dr]:s.MIRRORED_REPEAT},Se={[xt]:s.NEAREST,[Sc]:s.NEAREST_MIPMAP_NEAREST,[ts]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},et={[Tc]:s.NEVER,[Pc]:s.ALWAYS,[Ac]:s.LESS,[ya]:s.LEQUAL,[wc]:s.EQUAL,[Ea]:s.GEQUAL,[Rc]:s.GREATER,[Cc]:s.NOTEQUAL};function Ve(A,_){if(_.type===nn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Lt||_.magFilter===Ys||_.magFilter===ts||_.magFilter===Zn||_.minFilter===Lt||_.minFilter===Ys||_.minFilter===ts||_.minFilter===Zn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Te[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Te[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Te[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Se[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===xt||_.minFilter!==ts&&_.minFilter!==Zn||_.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const H=_.source;let q=p.get(H);q===void 0&&(q={},p.set(H,q));const ie=V(_);if(ie!==A.__cacheKey){q[ie]===void 0&&(q[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[ie].usedTimes++;const se=q[A.__cacheKey];se!==void 0&&(q[A.__cacheKey].usedTimes--,se.usedTimes===0&&P(_)),A.__cacheKey=ie,A.__webglTexture=q[ie].texture}return F}function Y(A,_,F){return Math.floor(Math.floor(A/F)/_)}function ee(A,_,F,H){const ie=A.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,F,H,_.data);else{ie.sort((ye,ce)=>ye.start-ce.start);let se=0;for(let ye=1;ye<ie.length;ye++){const ce=ie[se],ae=ie[ye],Ee=ce.start+ce.count,Re=Y(ae.start,_.width,4),Ie=Y(ce.start,_.width,4);ae.start<=Ee+1&&Re===Ie&&Y(ae.start+ae.count-1,_.width,4)===Re?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++se,ie[se]=ae)}ie.length=se+1;const K=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ye=0,ce=ie.length;ye<ce;ye++){const ae=ie[ye],Ee=Math.floor(ae.start/4),Re=Math.ceil(ae.count/4),Ie=Ee%_.width,I=Math.floor(Ee/_.width),oe=Re,Z=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Ie,I,oe,Z,F,H,_.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function _e(A,_,F){let H=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=s.TEXTURE_3D);const q=Ye(A,_),ie=_.source;t.bindTexture(H,A.__webglTexture,s.TEXTURE0+F);const se=n.get(ie);if(ie.version!==se.__version||q===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=Ge.getPrimaries(Ge.workingColorSpace),le=_.colorSpace===kn?null:Ge.getPrimaries(_.colorSpace),de=_.colorSpace===kn||Z===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,i.maxTextureSize);J=At(_,J);const re=r.convert(_.format,_.colorSpace),ye=r.convert(_.type);let ce=M(_.internalFormat,re,ye,_.normalized,_.colorSpace,_.isVideoTexture);Ve(H,_);let ae;const Ee=_.mipmaps,Re=_.isVideoTexture!==!0,Ie=se.__version===void 0||q===!0,I=ie.dataReady,oe=b(_,J);if(_.isDepthTexture)ce=y(_.format===Jn,_.type),Ie&&(Re?t.texStorage2D(s.TEXTURE_2D,1,ce,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,ce,J.width,J.height,0,re,ye,null));else if(_.isDataTexture)if(Ee.length>0){Re&&Ie&&t.texStorage2D(s.TEXTURE_2D,oe,ce,Ee[0].width,Ee[0].height);for(let Z=0,le=Ee.length;Z<le;Z++)ae=Ee[Z],Re?I&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ye,ae.data):t.texImage2D(s.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,ye,ae.data);_.generateMipmaps=!1}else Re?(Ie&&t.texStorage2D(s.TEXTURE_2D,oe,ce,J.width,J.height),I&&ee(_,J,re,ye)):t.texImage2D(s.TEXTURE_2D,0,ce,J.width,J.height,0,re,ye,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,ce,Ee[0].width,Ee[0].height,J.depth);for(let Z=0,le=Ee.length;Z<le;Z++)if(ae=Ee[Z],_.format!==sn)if(re!==null)if(Re){if(I)if(_.layerUpdates.size>0){const de=Co(ae.width,ae.height,_.format,_.type);for(const te of _.layerUpdates){const Ae=ae.data.subarray(te*de/ae.data.BYTES_PER_ELEMENT,(te+1)*de/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,te,ae.width,ae.height,1,re,Ae)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,re,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,J.depth,0,ae.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,J.depth,re,ye,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,J.depth,0,re,ye,ae.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Re&&Ie&&t.texStorage2D(s.TEXTURE_2D,oe,ce,Ee[0].width,Ee[0].height);for(let Z=0,le=Ee.length;Z<le;Z++)ae=Ee[Z],_.format!==sn?re!==null?Re?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,ce,ae.width,ae.height,0,ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?I&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ye,ae.data):t.texImage2D(s.TEXTURE_2D,Z,ce,ae.width,ae.height,0,re,ye,ae.data)}else if(_.isDataArrayTexture)if(Re){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),I)if(_.layerUpdates.size>0){const Z=Co(J.width,J.height,_.format,_.type);for(const le of _.layerUpdates){const de=J.data.subarray(le*Z/J.data.BYTES_PER_ELEMENT,(le+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,re,ye,de)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,ye,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,re,ye,J.data);else if(_.isData3DTexture)Re?(Ie&&t.texStorage3D(s.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,ye,J.data)):t.texImage3D(s.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,re,ye,J.data);else if(_.isFramebufferTexture){if(Ie)if(Re)t.texStorage2D(s.TEXTURE_2D,oe,ce,J.width,J.height);else{let Z=J.width,le=J.height;for(let de=0;de<oe;de++)t.texImage2D(s.TEXTURE_2D,de,ce,Z,le,0,re,ye,null),Z>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const Z=s.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(_),Z.onpaint=le=>{const de=le.changedElements;for(const te of f)de.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{const de=s.RGBA,te=s.RGBA,Ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,de,te,Ae,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Re&&Ie){const Z=Ze(Ee[0]);t.texStorage2D(s.TEXTURE_2D,oe,ce,Z.width,Z.height)}for(let Z=0,le=Ee.length;Z<le;Z++)ae=Ee[Z],Re?I&&t.texSubImage2D(s.TEXTURE_2D,Z,0,0,re,ye,ae):t.texImage2D(s.TEXTURE_2D,Z,ce,re,ye,ae);_.generateMipmaps=!1}else if(Re){if(Ie){const Z=Ze(J);t.texStorage2D(s.TEXTURE_2D,oe,ce,Z.width,Z.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,ye,J)}else t.texImage2D(s.TEXTURE_2D,0,ce,re,ye,J);d(_)&&E(H),se.__version=ie.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Pe(A,_,F){if(_.image.length!==6)return;const H=Ye(A,_),q=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const ie=n.get(q);if(q.version!==ie.__version||H===!0){t.activeTexture(s.TEXTURE0+F);const se=Ge.getPrimaries(Ge.workingColorSpace),K=_.colorSpace===kn?null:Ge.getPrimaries(_.colorSpace),J=_.colorSpace===kn||se===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const re=_.isCompressedTexture||_.image[0].isCompressedTexture,ye=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!re&&!ye?ce[te]=m(_.image[te],!0,i.maxCubemapSize):ce[te]=ye?_.image[te].image:_.image[te],ce[te]=At(_,ce[te]);const ae=ce[0],Ee=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),Ie=M(_.internalFormat,Ee,Re,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,oe=ie.__version===void 0||H===!0,Z=q.dataReady;let le=b(_,ae);Ve(s.TEXTURE_CUBE_MAP,_);let de;if(re){I&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ie,ae.width,ae.height);for(let te=0;te<6;te++){de=ce[te].mipmaps;for(let Ae=0;Ae<de.length;Ae++){const Me=de[Ae];_.format!==sn?Ee!==null?I?Z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Ie,Me.width,Me.height,0,Me.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,Me.width,Me.height,Ee,Re,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Ie,Me.width,Me.height,0,Ee,Re,Me.data)}}}else{if(de=_.mipmaps,I&&oe){de.length>0&&le++;const te=Ze(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(ye){I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Ee,Re,ce[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,ce[te].width,ce[te].height,0,Ee,Re,ce[te].data);for(let Ae=0;Ae<de.length;Ae++){const nt=de[Ae].image[te].image;I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,nt.width,nt.height,Ee,Re,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Ie,nt.width,nt.height,0,Ee,Re,nt.data)}}else{I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,Re,ce[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,Ee,Re,ce[te]);for(let Ae=0;Ae<de.length;Ae++){const Me=de[Ae];I?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Ee,Re,Me.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Ie,Ee,Re,Me.image[te])}}}d(_)&&E(s.TEXTURE_CUBE_MAP),ie.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function me(A,_,F,H,q,ie){const se=r.convert(F.format,F.colorSpace),K=r.convert(F.type),J=M(F.internalFormat,se,K,F.normalized,F.colorSpace),re=n.get(_),ye=n.get(F);if(ye.__renderTarget=_,!re.__hasExternalTextures){const ce=Math.max(1,_.width>>ie),ae=Math.max(1,_.height>>ie);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,ie,J,ce,ae,_.depth,0,se,K,null):t.texImage2D(q,ie,J,ce,ae,0,se,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),pt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,q,ye.__webglTexture,0,lt(_)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,q,ye.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(A,_,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const H=_.depthTexture,q=H&&H.isDepthTexture?H.type:null,ie=y(_.stencilBuffer,q),se=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(_),ie,_.width,_.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(_),ie,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ie,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,A)}else{const H=_.textures;for(let q=0;q<H.length;q++){const ie=H[q],se=r.convert(ie.format,ie.colorSpace),K=r.convert(ie.type),J=M(ie.internalFormat,se,K,ie.normalized,ie.colorSpace);pt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt(_),J,_.width,_.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt(_),J,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,J,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(A,_,F){const H=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,_.depthTexture);const re=r.convert(_.depthTexture.format),ye=r.convert(_.depthTexture.type);let ce;_.depthTexture.format===Cn?ce=s.DEPTH_COMPONENT24:_.depthTexture.format===Jn&&(ce=s.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ce,_.width,_.height,0,re,ye,null)}}else ne(_.depthTexture,0);const ie=q.__webglTexture,se=lt(_),K=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,J=_.depthTexture.format===Jn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Cn)pt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,J,K,ie,0);else if(_.depthTexture.format===Jn)pt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,ie,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,J,K,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(A){const _=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)vt(_.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?vt(_.__webglFramebuffer[0],A,0):vt(_.__webglFramebuffer,A,0)}else if(F){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=s.createRenderbuffer(),Ne(_.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,ie)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Ne(_.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(A,_,F){const H=n.get(A);_!==void 0&&me(H.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Oe(A)}function tt(A){const _=A.texture,F=n.get(A),H=n.get(_);A.addEventListener("dispose",x);const q=A.textures,ie=A.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=_.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let J=0;J<_.mipmaps.length;J++)F.__webglFramebuffer[K][J]=s.createFramebuffer()}else F.__webglFramebuffer[K]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[K]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(se)for(let K=0,J=q.length;K<J;K++){const re=n.get(q[K]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&pt(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const J=q[K];F.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const re=r.convert(J.format,J.colorSpace),ye=r.convert(J.type),ce=M(J.internalFormat,re,ye,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ae=lt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,ce,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,F.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)me(F.__webglFramebuffer[K][J],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else me(F.__webglFramebuffer[K],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(_)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,J=q.length;K<J;K++){const re=q[K],ye=n.get(re);let ce=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ye.__webglTexture),Ve(ce,re),me(F.__webglFramebuffer,A,re,s.COLOR_ATTACHMENT0+K,ce,0),d(re)&&E(ce)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),Ve(K,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)me(F.__webglFramebuffer[J],A,_,s.COLOR_ATTACHMENT0,K,J);else me(F.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,K,0);d(_)&&E(K),t.unbindTexture()}A.depthBuffer&&Oe(A)}function ke(A){const _=A.textures;for(let F=0,H=_.length;F<H;F++){const q=_[F];if(d(q)){const ie=w(A),se=n.get(q).__webglTexture;t.bindTexture(ie,se),E(ie),t.unbindTexture()}}}const ot=[],bt=[];function Ot(A){if(A.samples>0){if(pt(A)===!1){const _=A.textures,F=A.width,H=A.height;let q=s.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(A),K=_.length>1;if(K)for(let re=0;re<_.length;re++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<_.length;re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const ye=n.get(_[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,F,H,0,0,F,H,q,s.NEAREST),l===!0&&(ot.length=0,bt.length=0,ot.push(s.COLOR_ATTACHMENT0+re),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ot.push(ie),bt.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let re=0;re<_.length;re++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,se.__webglColorRenderbuffer[re]);const ye=n.get(_[re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function lt(A){return Math.min(i.maxSamples,A.samples)}function pt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function At(A,_){const F=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Us&&F!==kn&&(Ge.getTransfer(F)===Je?(H!==sn||q!==qt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",F)),_}function Ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=Xe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function u0(s,e){function t(n,i=kn){let r;const a=Ge.getTransfer(i);if(n===qt)return s.UNSIGNED_BYTE;if(n===_a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===dl)return s.BYTE;if(n===pl)return s.SHORT;if(n===Wi)return s.UNSIGNED_SHORT;if(n===ga)return s.INT;if(n===gn)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===_l)return s.ALPHA;if(n===xl)return s.RGB;if(n===sn)return s.RGBA;if(n===Cn)return s.DEPTH_COMPONENT;if(n===Jn)return s.DEPTH_STENCIL;if(n===va)return s.RED;if(n===Ma)return s.RED_INTEGER;if(n===ti)return s.RG;if(n===Sa)return s.RG_INTEGER;if(n===ba)return s.RGBA_INTEGER;if(n===As||n===ws||n===Rs||n===Cs)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ur||n===Nr||n===Fr||n===Or)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===zr||n===kr||n===Gr||n===Hr||n===Is||n===Vr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Br||n===zr)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gr)return r.COMPRESSED_R11_EAC;if(n===Hr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Is)return r.COMPRESSED_RG11_EAC;if(n===Vr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===$r||n===Zr||n===Jr||n===Qr||n===jr||n===ea||n===ta||n===na||n===ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===ra||n===aa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oa||n===la||n===Ds||n===ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:f0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends si{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new p0,d={},E=t.getContextAttributes();let w=null,M=null;const y=[],b=[],R=new Fe;let x=null,T=null;const P=new Wt;P.viewport=new ut;const C=new Wt;C.viewport=new ut;const N=[P,C],O=new bh;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=y[Y];return ee===void 0&&(ee=new nr,y[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=y[Y];return ee===void 0&&(ee=new nr,y[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=y[Y];return ee===void 0&&(ee=new nr,y[Y]=ee),ee.getHandSpace()};function $(Y){const ee=b.indexOf(Y.inputSource);if(ee===-1)return;const _e=y[ee];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<y.length;Y++){const ee=b[Y];ee!==null&&(b[Y]=null,y[Y].disconnect(ee))}U=null,G=null,m.reset();for(const Y in d)delete d[Y];if(e.setRenderTarget(w),p=null,u=null,f=null,i=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),T!==null){const Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ne),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?Jn:Cn,Pe=E.stencil?Xi:gn);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ne),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new an(u.textureWidth,u.textureHeight,{format:sn,type:qt,depthTexture:new Yi(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new an(p.framebufferWidth,p.framebufferHeight,{format:sn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let ee=0;ee<Y.removed.length;ee++){const _e=Y.removed[ee],Pe=b.indexOf(_e);Pe>=0&&(b[Pe]=null,y[Pe].disconnect(_e))}for(let ee=0;ee<Y.added.length;ee++){const _e=Y.added[ee];let Pe=b.indexOf(_e);if(Pe===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=b.length){b.push(_e),Pe=Ne;break}else if(b[Ne]===null){b[Ne]=_e,Pe=Ne;break}if(Pe===-1)break}const me=y[Pe];me&&me.connect(_e)}}const X=new B,Q=new B;function j(Y,ee,_e){X.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Pe=X.distanceTo(Q),me=ee.projectionMatrix.elements,Ne=_e.projectionMatrix.elements,vt=me[14]/(me[10]-1),Oe=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],tt=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],ot=(Ne[8]+1)/Ne[0],bt=vt*ke,Ot=vt*ot,lt=Pe/(-ke+ot),pt=lt*-ke;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const D=vt+lt,At=Oe+lt,Ze=bt-pt,A=Ot+(Pe-pt),_=Xe*Oe/At*D,F=tt*Oe/At*D;Y.projectionMatrix.makePerspective(Ze,A,_,F,D,At),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Te(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ee=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),O.near=C.near=P.near=ee,O.far=C.far=P.far=_e,(U!==O.near||G!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,G=O.far),O.layers.mask=Y.layers.mask|6,P.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;const Pe=Y.parent,me=O.cameras;Te(O,Pe);for(let Ne=0;Ne<me.length;Ne++)Te(me[Ne],Pe);me.length===2?j(O,P,C):O.projectionMatrix.copy(P.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),Se(Y,O,Pe)};function Se(Y,ee,_e){_e===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let et=null;function Ve(Y,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Pe=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let Oe=0;Oe<_e.length;Oe++){const Xe=_e[Oe];let tt=null;if(p!==null)tt=p.getViewport(Xe);else{const ot=f.getViewSubImage(u,Xe);tt=ot.viewport,Oe===0&&(e.setRenderTargetTextures(M,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(M))}let ke=N[Oe];ke===void 0&&(ke=new Wt,ke.layers.enable(Oe),ke.viewport=new ut,N[Oe]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(O.matrix.copy(ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(ke)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const Oe=f.getDepthInformation(_e[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,i.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Oe=0;Oe<_e.length;Oe++){const Xe=_e[Oe].camera;if(Xe){let tt=d[Xe];tt||(tt=new wl,d[Xe]=tt);const ke=f.getCameraImage(Xe);tt.sourceTexture=ke}}}}for(let _e=0;_e<y.length;_e++){const Pe=b[_e],me=y[_e];Pe!==null&&me!==void 0&&me.update(Pe,ee,c||a)}et&&et(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ye=new Ll;Ye.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}}const g0=new rt,Bl=new Le;Bl.set(-1,0,0,0,1,0,0,0,1);function _0(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Rl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,E,w,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),w=E.envMap,M=E.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bl),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function x0(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=i[M.id];b===void 0&&(m(M),b=h(M),i[M.id]=b,M.addEventListener("dispose",E));const R=y.program;n.updateUBOMapping(M,R);const x=e.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){const y=f();M.__bindingPointIndex=y;const b=s.createBuffer(),R=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=i[M.id],b=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let x=0,T=b.length;x<T;x++){const P=b[x];if(Array.isArray(P))for(let C=0,N=P.length;C<N;C++)p(P[C],x,C,R);else p(P,x,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,y,b,R){if(S(M,y,b,R)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let C=0;C<T.length;C++){const N=T[C],O=d(N);g(N,M.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,M.__data)}}function g(M,y,b){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,b)}function S(M,y,b,R){const x=M.value,T=y+"_"+b;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{const P=R[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){const y=M.uniforms;let b=0;const R=16;for(let T=0,P=y.length;T<P;T++){const C=Array.isArray(y[T])?y[T]:[y[T]];for(let N=0,O=C.length;N<O;N++){const U=C[N],G=Array.isArray(U.value)?U.value:[U.value];for(let $=0,V=G.length;$<V;$++){const ne=G[$],X=d(ne),Q=b%R,j=Q%X.boundary,Te=Q+j;b+=j,Te!==0&&R-Te<X.storage&&(b+=R-Te),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=X.storage}}}const x=b%R;return x>0&&(b+=R-x),M.__size=b,M.__cache={},this}function d(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),y}function E(M){const y=M.target;y.removeEventListener("dispose",E);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function w(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}const v0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function M0(){return fn===null&&(fn=new Tl(v0,16,16,ti,_n),fn.name="DFG_LUT",fn.minFilter=Lt,fn.magFilter=Lt,fn.wrapS=An,fn.wrapT=An,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class S0{constructor(e={}){const{canvas:t=Uc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=p,m=new Set([ba,Sa,Ma]),d=new Set([qt,gn,Wi,Xi,_a,xa]),E=new Uint32Array(4),w=new Int32Array(4),M=new B;let y=null,b=null;const R=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,N=null,O=null,U=null,G=null;this._outputColorSpace=Pt;let $=0,V=0,ne=null,X=-1,Q=null;const j=new ut,Te=new ut;let Se=null;const et=new ze(0);let Ve=0,Ye=t.width,Y=t.height,ee=1,_e=null,Pe=null;const me=new ut(0,0,Ye,Y),Ne=new ut(0,0,Ye,Y);let vt=!1;const Oe=new wa;let Xe=!1,tt=!1;const ke=new rt,ot=new B,bt=new ut,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function pt(){return ne===null?ee:1}let D=n;function At(v,L){return t.getContext(v,L)}let Ze,A,_,F,H,q,ie,se,K,J,re,ye,ce,ae,Ee,Re,Ie,I,oe,Z,le,de,te;try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pa}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",$t,!1),D===null){const L="webgl2";if(D=At(L,v),D===null)throw At(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),qe("WebGLRenderer: "+v.message),v}function Ae(){Ze=new Md(D),Ze.init(),le=new u0(D,Ze),A=new hd(D,Ze,e,le),_=new c0(D,Ze),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),O=D.createFramebuffer(),U=D.createFramebuffer(),G=D.createFramebuffer(),F=new yd(D),H=new $p,q=new h0(D,Ze,_,H,A,le,F),ie=new vd(P),se=new Eh(D),de=new ld(D,se),K=new Sd(D,se,F,de),J=new Td(D,K,se,de,F),I=new Ed(D,A,q),Ee=new ud(H),re=new Kp(P,ie,Ze,A,de,Ee),ye=new _0(P,H),ce=new Jp,ae=new i0(Ze),Ie=new od(P,ie,_,J,g,l),Re=new l0(P,J,A),te=new x0(D,F,A,_),oe=new cd(D,Ze,F),Z=new bd(D,Ze,F),F.programs=re.programs,P.capabilities=A,P.extensions=Ze,P.properties=H,P.renderLists=ce,P.shadowMap=Re,P.state=_,P.info=F}S!==qt&&(T=new wd(S,t.width,t.height,o,i,r));const Me=new m0(P,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Ze.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ze.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(Ye,Y,!1))},this.getSize=function(v){return v.set(Ye,Y)},this.setSize=function(v,L,W=!0){if(Me.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=v,Y=L,t.width=Math.floor(v*ee),t.height=Math.floor(L*ee),W===!0&&(t.style.width=v+"px",t.style.height=L+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Ye*ee,Y*ee).floor()},this.setDrawingBufferSize=function(v,L,W){Ye=v,Y=L,ee=W,t.width=Math.floor(v*W),t.height=Math.floor(L*W),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(S===qt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(me)},this.setViewport=function(v,L,W,z){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,L,W,z),_.viewport(j.copy(me).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(Ne)},this.setScissor=function(v,L,W,z){v.isVector4?Ne.set(v.x,v.y,v.z,v.w):Ne.set(v,L,W,z),_.scissor(Te.copy(Ne).multiplyScalar(ee).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(v){_.setScissorTest(vt=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){Pe=v},this.getClearColor=function(v){return v.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,W=!0){let z=0;if(v){let k=!1;if(ne!==null){const fe=ne.texture.format;k=m.has(fe)}if(k){const fe=ne.texture.type,ge=d.has(fe),ue=Ie.getClearColor(),xe=Ie.getClearAlpha(),be=ue.r,De=ue.g,Be=ue.b;ge?(E[0]=be,E[1]=De,E[2]=Be,E[3]=xe,D.clearBufferuiv(D.COLOR,0,E)):(w[0]=be,w[1]=De,w[2]=Be,w[3]=xe,D.clearBufferiv(D.COLOR,0,w))}else z|=D.COLOR_BUFFER_BIT}L&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Ie.dispose(),ce.dispose(),ae.dispose(),H.dispose(),ie.dispose(),J.dispose(),de.dispose(),te.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ga),Me.removeEventListener("sessionend",Ha),Wn.stop()};function nt(v){v.preventDefault(),no("WebGLRenderer: Context Lost."),C=!0}function Ke(){no("WebGLRenderer: Context Restored."),C=!1;const v=F.autoReset,L=Re.enabled,W=Re.autoUpdate,z=Re.needsUpdate,k=Re.type;Ae(),F.autoReset=v,Re.enabled=L,Re.autoUpdate=W,Re.needsUpdate=z,Re.type=k}function $t(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function cn(v){const L=v.target;L.removeEventListener("dispose",cn),Xl(L)}function Xl(v){ql(v),H.remove(v)}function ql(v){const L=H.get(v).programs;L!==void 0&&(L.forEach(function(W){re.releaseProgram(W)}),v.isShaderMaterial&&re.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,W,z,k,fe){L===null&&(L=Ot);const ge=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=$l(v,L,W,z,k);_.setMaterial(z,ge);let xe=W.index,be=1;if(z.wireframe===!0){if(xe=K.getWireframeAttribute(W),xe===void 0)return;be=2}const De=W.drawRange,Be=W.attributes.position;let ve=De.start*be,$e=(De.start+De.count)*be;fe!==null&&(ve=Math.max(ve,fe.start*be),$e=Math.min($e,(fe.start+fe.count)*be)),xe!==null?(ve=Math.max(ve,0),$e=Math.min($e,xe.count)):Be!=null&&(ve=Math.max(ve,0),$e=Math.min($e,Be.count));const mt=$e-ve;if(mt<0||mt===1/0)return;de.setup(k,z,ue,W,xe);let at,je=oe;if(xe!==null&&(at=se.get(xe),je=Z,je.setIndex(at)),k.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*pt()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(k.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),_.setLineWidth(wt*pt()),k.isLineSegments?je.setMode(D.LINES):k.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else k.isPoints?je.setMode(D.POINTS):k.isSprite&&je.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const wt=k._multiDrawStarts,pe=k._multiDrawCounts,Dt=k._multiDrawCount,We=xe?se.get(xe).bytesPerElement:1,Yt=H.get(z).currentProgram.getUniforms();for(let hn=0;hn<Dt;hn++)Yt.setValue(D,"_gl_DrawID",hn),je.render(wt[hn]/We,pe[hn])}else if(k.isInstancedMesh)je.renderInstances(ve,mt,k.count);else if(W.isInstancedBufferGeometry){const wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pe=Math.min(W.instanceCount,wt);je.renderInstances(ve,mt,pe)}else je.render(ve,mt)};function ka(v,L,W,z){N!==null&&v.isNodeMaterial&&N.setObject(z,v),Xe===!0&&Ee.setState(v,W,!1),v.transparent===!0&&v.side===Xt&&v.forceSinglePass===!1?(v.side=kt,v.needsUpdate=!0,es(v,L,z),v.side=jn,v.needsUpdate=!0,es(v,L,z),v.side=Xt):es(v,L,z)}this.compile=function(v,L,W=null){W===null&&(W=v),N!==null&&N.renderStart(v,L,W),b=ae.get(W),b.init(L),x.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),tt=this.localClippingEnabled,Xe=Ee.init(this.clippingPlanes,tt),Xe===!0&&Ee.setGlobalState(this.clippingPlanes,L),N!==null&&Re.render(b.state.shadowsArray,W,L);const z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const ue=fe[ge];ka(ue,W,L,k),z.add(ue)}else ka(fe,W,L,k),z.add(fe)}),b=x.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(v,L,W=null){const z=this.compile(v,L,W);return new Promise(k=>{function fe(){if(z.forEach(function(ge){const xe=H.get(ge).currentProgram;(xe===void 0||xe.isReady())&&z.delete(ge)}),z.size===0){k(v);return}setTimeout(fe,10)}Ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Vs=null;function Yl(v){Vs&&Vs(v)}function Ga(){Wn.stop()}function Ha(){Wn.start()}const Wn=new Ll;Wn.setAnimationLoop(Yl),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(v){Vs=v,Me.setAnimationLoop(v),v===null?Wn.stop():Wn.start()},Me.addEventListener("sessionstart",Ga),Me.addEventListener("sessionend",Ha),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(v,L);const W=Me.enabled===!0&&Me.isPresenting===!0,z=T!==null&&(ne===null||W)&&T.begin(P,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(L),L=Me.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,L,ne),b=ae.get(v,x.length),b.init(L),b.state.textureUnits=q.getTextureUnits(),x.push(b),ke.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Oe.setFromProjectionMatrix(ke,mn,L.reversedDepth),tt=this.localClippingEnabled,Xe=Ee.init(this.clippingPlanes,tt),y=ce.get(v,R.length),y.init(),R.push(y),Me.enabled===!0&&Me.isPresenting===!0){const ge=P.xr.getDepthSensingMesh();ge!==null&&Ws(ge,L,-1/0,P.sortObjects)}Ws(v,L,0,P.sortObjects),y.finish(),N!==null&&N.updateLights(b.state.lightsArray),P.sortObjects===!0&&y.sort(_e,Pe),lt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,lt&&Ie.addToRenderList(y,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Ee.beginShadows();const k=b.state.shadowsArray;if(Re.render(k,v,L),Xe===!0&&Ee.endShadows(),(z&&T.hasRenderPass())===!1){const ge=y.opaque,ue=y.transmissive;if(b.setupLights(),L.isArrayCamera){const xe=L.cameras;if(ue.length>0)for(let be=0,De=xe.length;be<De;be++){const Be=xe[be];Wa(ge,ue,v,Be)}lt&&Ie.render(v);for(let be=0,De=xe.length;be<De;be++){const Be=xe[be];Va(y,v,Be,Be.viewport)}}else ue.length>0&&Wa(ge,ue,v,L),lt&&Ie.render(v),Va(y,v,L)}ne!==null&&V===0&&(q.updateMultisampleRenderTarget(ne),q.updateRenderTargetMipmap(ne)),z&&T.end(P),v.isScene===!0&&v.onAfterRender(P,v,L),de.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(b=x[x.length-1],q.setTextureUnits(b.state.textureUnits),Xe===!0&&Ee.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,N!==null&&N.renderEnd()};function Ws(v,L,W,z){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Oe)){z&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ke);const ge=J.update(v),ue=v.material;ue.visible&&y.push(v,ge,ue,W,bt.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Oe))){const ge=J.update(v),ue=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),bt.copy(ge.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(ke)),Array.isArray(ue)){const xe=ge.groups;for(let be=0,De=xe.length;be<De;be++){const Be=xe[be],ve=ue[Be.materialIndex];ve&&ve.visible&&y.push(v,ge,ve,W,bt.z,Be,L)}}else ue.visible&&y.push(v,ge,ue,W,bt.z,null,L)}}const fe=v.children;for(let ge=0,ue=fe.length;ge<ue;ge++)Ws(fe[ge],L,W,z)}function Va(v,L,W,z){const{opaque:k,transmissive:fe,transparent:ge}=v;b.setupLightsView(W),Xe===!0&&Ee.setGlobalState(P.clippingPlanes,W),z&&_.viewport(j.copy(z)),k.length>0&&ji(k,L,W),fe.length>0&&ji(fe,L,W),ge.length>0&&ji(ge,L,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Wa(v,L,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const ve=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new an(1,1,{generateMipmaps:!0,type:ve?_n:qt,minFilter:Zn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const fe=b.state.transmissionRenderTarget[z.id],ge=z.viewport||j;fe.setSize(ge.z*P.transmissionResolutionScale,ge.w*P.transmissionResolutionScale);const ue=P.getRenderTarget(),xe=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(et),Ve=P.getClearAlpha(),Ve<1&&P.setClearColor(16777215,.5),P.clear(),lt&&Ie.render(W);const De=P.toneMapping;P.toneMapping=rn;const Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Xe===!0&&Ee.setGlobalState(P.clippingPlanes,z),ji(v,W,z),q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let $e=0,mt=L.length;$e<mt;$e++){const at=L[$e],{object:je,geometry:wt,material:pe,group:Dt}=at;if(pe.side===Xt&&je.layers.test(z.layers)){const We=pe.side;pe.side=kt,pe.needsUpdate=!0,Xa(je,W,z,wt,pe,Dt),pe.side=We,pe.needsUpdate=!0,ve=!0}}ve===!0&&(q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe))}P.setRenderTarget(ue,xe,be),P.setClearColor(et,Ve),Be!==void 0&&(z.viewport=Be),P.toneMapping=De}function ji(v,L,W){const z=L.isScene===!0?L.overrideMaterial:null;for(let k=0,fe=v.length;k<fe;k++){const ge=v[k],{object:ue,geometry:xe,group:be}=ge;let De=ge.material;De.allowOverride===!0&&z!==null&&(De=z),ue.layers.test(W.layers)&&Xa(ue,L,W,xe,De,be)}}function Xa(v,L,W,z,k,fe){N!==null&&k.isNodeMaterial&&N.setObject(v,k),v.onBeforeRender(P,L,W,z,k,fe),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,L,W,z,v,fe),k.transparent===!0&&k.side===Xt&&k.forceSinglePass===!1?(k.side=kt,k.needsUpdate=!0,P.renderBufferDirect(W,L,z,k,v,fe),k.side=jn,k.needsUpdate=!0,P.renderBufferDirect(W,L,z,k,v,fe),k.side=Xt):P.renderBufferDirect(W,L,z,k,v,fe),v.onAfterRender(P,L,W,z,k,fe)}function es(v,L,W){L.isScene!==!0&&(L=Ot);const z=H.get(v),k=b.state.lights,fe=b.state.shadowsArray,ge=k.state.version,ue=re.getParameters(v,k.state,fe,L,W,b.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue);let be=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=ie.get(v.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",cn),be=new Map,z.programs=be);let Be=be.get(xe);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===ge)return Ya(v,ue),Be}else ue.uniforms=re.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,W,ue),v.onBeforeCompile(ue,P),Be=re.acquireProgram(ue,xe),be.set(xe,Be),z.uniforms=ue.uniforms;const ve=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ve.clippingPlanes=Ee.uniform),Ya(v,ue),z.needsLights=Jl(v),z.lightsStateVersion=ge,z.needsLights&&(ve.ambientLightColor.value=k.state.ambient,ve.lightProbe.value=k.state.probe,ve.sunLights.value=k.state.sun,ve.sunLightShadows.value=k.state.sunShadow,ve.directionalLights.value=k.state.directional,ve.directionalLightShadows.value=k.state.directionalShadow,ve.spotLights.value=k.state.spot,ve.spotLightShadows.value=k.state.spotShadow,ve.rectAreaLights.value=k.state.rectArea,ve.ltc_1.value=k.state.rectAreaLTC1,ve.ltc_2.value=k.state.rectAreaLTC2,ve.pointLights.value=k.state.point,ve.pointLightShadows.value=k.state.pointShadow,ve.hemisphereLights.value=k.state.hemi,ve.sunShadowMatrix.value=k.state.sunShadowMatrix,ve.sunShadowCascade.value=k.state.sunShadowCascade,ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ve.spotLightMatrix.value=k.state.spotLightMatrix,ve.spotLightMap.value=k.state.spotLightMap,ve.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Be,z.uniformsList=null,Be}function qa(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Ps.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Ya(v,L){const W=H.get(v);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Kl(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let W=0,z=v.length;W<z;W++){const k=v[W];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function $l(v,L,W,z,k){L.isScene!==!0&&(L=Ot),q.resetTextureUnits();const fe=L.fog,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,ue=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ge.workingColorSpace,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,be=ie.get(z.envMap||ge,xe),De=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ve=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let at=rn;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(at=P.toneMapping);const je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=je!==void 0?je.length:0,pe=H.get(z),Dt=b.state.lights;if(Xe===!0&&(tt===!0||v!==Q)){const it=v===Q&&z.id===X;Ee.setState(z,v,it)}let We=!1;z.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Dt.state.version||pe.outputColorSpace!==ue||k.isBatchedMesh&&pe.batching===!1||!k.isBatchedMesh&&pe.batching===!0||k.isBatchedMesh&&pe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&pe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&pe.instancing===!1||!k.isInstancedMesh&&pe.instancing===!0||k.isSkinnedMesh&&pe.skinning===!1||!k.isSkinnedMesh&&pe.skinning===!0||k.isInstancedMesh&&pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&pe.instancingMorph===!1&&k.morphTexture!==null||pe.envMap!==be||z.fog===!0&&pe.fog!==fe||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Ee.numPlanes||pe.numIntersection!==Ee.numIntersection)||pe.vertexAlphas!==De||pe.vertexTangents!==Be||pe.morphTargets!==ve||pe.morphNormals!==$e||pe.morphColors!==mt||pe.toneMapping!==at||pe.morphTargetsCount!==wt||!!pe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,pe.__version=z.version);let Yt=pe.currentProgram;We===!0&&(Yt=es(z,L,k),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Yt,pe));let hn=!1,Ln=!1,oi=!1;const Qe=Yt.getUniforms(),ft=pe.uniforms;if(_.useProgram(Yt.program)&&(hn=!0,Ln=!0,oi=!0),z.id!==X&&(X=z.id,Ln=!0),pe.needsLights){const it=Kl(b.state.lightProbeGridArray,k);pe.lightProbeGrid!==it&&(pe.lightProbeGrid=it,Ln=!0)}if(hn||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Qe.setValue(D,"projectionMatrix",v.projectionMatrix),Qe.setValue(D,"viewMatrix",v.matrixWorldInverse);const Dn=Qe.map.cameraPosition;Dn!==void 0&&Dn.setValue(D,ot.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&Qe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Qe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ln=!0,oi=!0)}if(pe.needsLights&&(Dt.state.sunShadowMap.length>0&&Qe.setValue(D,"sunShadowMap",Dt.state.sunShadowMap,q),Dt.state.directionalShadowMap.length>0&&Qe.setValue(D,"directionalShadowMap",Dt.state.directionalShadowMap,q),Dt.state.spotShadowMap.length>0&&Qe.setValue(D,"spotShadowMap",Dt.state.spotShadowMap,q),Dt.state.pointShadowMap.length>0&&Qe.setValue(D,"pointShadowMap",Dt.state.pointShadowMap,q)),k.isSkinnedMesh){Qe.setOptional(D,k,"bindMatrix"),Qe.setOptional(D,k,"bindMatrixInverse");const it=k.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),Qe.setValue(D,"boneTexture",it.boneTexture,q))}k.isBatchedMesh&&(Qe.setOptional(D,k,"batchingTexture"),Qe.setValue(D,"batchingTexture",k._matricesTexture,q),Qe.setOptional(D,k,"batchingIdTexture"),Qe.setValue(D,"batchingIdTexture",k._indirectTexture,q),Qe.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Qe.setValue(D,"batchingColorTexture",k._colorsTexture,q));const In=W.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&I.update(k,W,Yt),(Ln||pe.receiveShadow!==k.receiveShadow)&&(pe.receiveShadow=k.receiveShadow,Qe.setValue(D,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(ft.envMapIntensity.value=L.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=M0()),Ln){if(Qe.setValue(D,"toneMappingExposure",P.toneMappingExposure),pe.needsLights&&Zl(ft,oi),fe&&z.fog===!0&&ye.refreshFogUniforms(ft,fe),ye.refreshMaterialUniforms(ft,z,ee,Y,b.state.transmissionRenderTarget[v.id]),pe.needsLights&&pe.lightProbeGrid){const it=pe.lightProbeGrid;ft.probesSH.value=it.texture,ft.probesMin.value.copy(it.boundingBox.min),ft.probesMax.value.copy(it.boundingBox.max),ft.probesResolution.value.copy(it.resolution)}Ps.upload(D,qa(pe),ft,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ps.upload(D,qa(pe),ft,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Qe.setValue(D,"center",k.center),Qe.setValue(D,"modelViewMatrix",k.modelViewMatrix),Qe.setValue(D,"normalMatrix",k.normalMatrix),Qe.setValue(D,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const it=z.uniformsGroups;for(let Dn=0,li=it.length;Dn<li;Dn++){const $a=it[Dn];te.update($a,Yt),te.bind($a,Yt)}}return Yt}function Zl(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Jl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,L,W){const z=H.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=L,H.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const W=H.get(v);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,W=0){ne=v,$=L,V=W;let z=null,k=!1,fe=!1;if(v){const ue=H.get(v);if(ue.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),j.copy(v.viewport),Te.copy(v.scissor),Se=v.scissorTest,_.viewport(j),_.scissor(Te),_.setScissorTest(Se),X=-1;return}else if(ue.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(ue.__hasExternalTextures)q.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(ue.__boundDepthTexture!==De){if(De!==null&&H.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}const xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const be=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[L])?z=be[L][W]:z=be[L],k=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?z=H.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?z=be[W]:z=be,j.copy(v.viewport),Te.copy(v.scissor),Se=v.scissorTest}else j.copy(me).multiplyScalar(ee).floor(),Te.copy(Ne).multiplyScalar(ee).floor(),Se=vt;if(W!==0&&(z=O),_.bindFramebuffer(D.FRAMEBUFFER,z)&&_.drawBuffers(v,z),_.viewport(j),_.scissor(Te),_.setScissorTest(Se),k){const ue=H.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,W)}else if(fe){const ue=L;for(let xe=0;xe<v.textures.length;xe++){const be=H.get(v.textures[xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xe,be.__webglTexture,W,ue)}}else if(v!==null&&W!==0){const ue=H.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function Ka(v){const L=H.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=A.textureFormatReadable(v.format),L.__typeReadable=A.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,W,z,k,fe,ge,ue=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){_.bindFramebuffer(D.FRAMEBUFFER,xe);try{const be=v.textures[ue],De=be.format,Be=be.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const ve=Ka(be);if(ve.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-z&&W>=0&&W<=v.height-k&&D.readPixels(L,W,z,k,le.convert(De),le.convert(Be),fe)}finally{const be=ne!==null?H.get(ne).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,L,W,z,k,fe,ge,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(L>=0&&L<=v.width-z&&W>=0&&W<=v.height-k){_.bindFramebuffer(D.FRAMEBUFFER,xe);const be=v.textures[ue],De=be.format,Be=be.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const ve=Ka(be);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(L,W,z,k,le.convert(De),le.convert(Be),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const mt=ne!==null?H.get(ne).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,mt);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nc(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer($e),D.deleteSync(at),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,W=0){const z=Math.pow(2,-W),k=Math.floor(v.image.width*z),fe=Math.floor(v.image.height*z),ge=L!==null?L.x:0,ue=L!==null?L.y:0;q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ge,ue,k,fe),_.unbindTexture()},this.copyTextureToTexture=function(v,L,W=null,z=null,k=0,fe=0){let ge,ue,xe,be,De,Be,ve,$e,mt;const at=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(W!==null)ge=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,De=W.min.y,Be=W.isBox3?W.min.z:0;else{const ft=Math.pow(2,-k);ge=Math.floor(at.width*ft),ue=Math.floor(at.height*ft),v.isDataArrayTexture?xe=at.depth:v.isData3DTexture?xe=Math.floor(at.depth*ft):xe=1,be=0,De=0,Be=0}z!==null?(ve=z.x,$e=z.y,mt=z.z):(ve=0,$e=0,mt=0);const je=le.convert(L.format),wt=le.convert(L.type);let pe;L.isData3DTexture?(q.setTexture3D(L,0),pe=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(q.setTexture2DArray(L,0),pe=D.TEXTURE_2D_ARRAY):(q.setTexture2D(L,0),pe=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Dt=_.getParameter(D.UNPACK_ROW_LENGTH),We=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Yt=_.getParameter(D.UNPACK_SKIP_PIXELS),hn=_.getParameter(D.UNPACK_SKIP_ROWS),Ln=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,be),_.pixelStorei(D.UNPACK_SKIP_ROWS,De),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const oi=v.isDataArrayTexture||v.isData3DTexture,Qe=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const ft=H.get(v),In=H.get(L),it=H.get(ft.__renderTarget),Dn=H.get(In.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,it.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let li=0;li<xe;li++)oi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(v).__webglTexture,k,Be+li),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(L).__webglTexture,fe,mt+li)),D.blitFramebuffer(be,De,ge,ue,ve,$e,ge,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||H.has(v)){const ft=H.get(v),In=H.get(L);_.bindFramebuffer(D.READ_FRAMEBUFFER,U),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let it=0;it<xe;it++)oi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ft.__webglTexture,k,Be+it):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ft.__webglTexture,k),Qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,In.__webglTexture,fe,mt+it):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,In.__webglTexture,fe),k!==0?D.blitFramebuffer(be,De,ge,ue,ve,$e,ge,ue,D.COLOR_BUFFER_BIT,D.NEAREST):Qe?D.copyTexSubImage3D(pe,fe,ve,$e,mt+it,be,De,ge,ue):D.copyTexSubImage2D(pe,fe,ve,$e,be,De,ge,ue);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(pe,fe,ve,$e,mt,ge,ue,xe,je,wt,at.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(pe,fe,ve,$e,mt,ge,ue,xe,je,at.data):D.texSubImage3D(pe,fe,ve,$e,mt,ge,ue,xe,je,wt,at):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,ve,$e,ge,ue,je,wt,at.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,ve,$e,at.width,at.height,je,at.data):D.texSubImage2D(D.TEXTURE_2D,fe,ve,$e,ge,ue,je,wt,at);_.pixelStorei(D.UNPACK_ROW_LENGTH,Dt),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),_.pixelStorei(D.UNPACK_SKIP_ROWS,hn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),fe===0&&L.generateMipmaps&&D.generateMipmap(pe),_.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){$=0,V=0,ne=null,_.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function Qo(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Gt;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const f=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=jo(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const p=[];for(let S=0;S<a[h].length;++S)p.push(a[h][S][u]);const g=jo(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function jo(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new on(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const S=h.getComponent(u,g);o.setComponent(u+f,g,S)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}const ht=s=>{const e=Math.sin(s*127.1+91.7)*43758.5453;return e-Math.floor(e)};function zl(s,e=!1){const t=new Ra(s);return t.magFilter=t.minFilter=xt,t.colorSpace=Pt,t.generateMipmaps=!1,e&&(t.wrapS=t.wrapT=Ls),t}function b0(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n={brick:["#48434c","#63585e","#292c35"],metal:["#334743","#6a7a6e","#162b2c"],concrete:["#4c5554","#69716a","#303e3e"],crate:["#696047","#988457","#30342c"],floor:["#303b3b","#515952","#19292b"],labfloor:["#405450","#697b6e","#223a39"],road:["#252a32","#485057","#171f28"],ceiling:["#2c3a3a","#53635b","#142628"],door:["#3d5149","#7d8e77","#182b29"]},i=n[s]??n.metal,r=(l,c,h,f,u)=>{t.fillStyle=l,t.fillRect(c,h,f,u)},a=(l,c,h=1)=>{t.strokeStyle=l,t.lineWidth=h,t.beginPath(),t.moveTo(c[0],c[1]);for(let f=2;f<c.length;f+=2)t.lineTo(c[f],c[f+1]);t.stroke()},o=(l,c)=>{r("#172827",l,c,4,4),r("#a2ac95",l,c,3,2),r("#63776b",l+1,c+2,2,1),r("#263e39",l+1,c+1,1,1)};r(i[0],0,0,128,128);for(let l=0;l<1500;l++)t.globalAlpha=.18+ht(l)*.2,r(l%3?i[2]:i[1],ht(l+1)*128|0,ht(l+2)*128|0,1+l%3,1);if(t.globalAlpha=1,s==="brick"){for(let l=0;l<8;l++)for(let c=-1;c<5;c++){const h=c*32+l%2*16,f=l*16,u=l*5+c+2;t.globalAlpha=.15+ht(u+70)*.15,r(u%3?i[1]:i[2],h+2,f+2,29,13),t.globalAlpha=1,r("#202832",h,f,32,2),r("#242930",h,f,2,16),r("#77656a",h+3,f+3,26,1),r("#584e56",h+2,f+4,1,9),r("#33323a",h+3,f+14,27,1),u%3===0&&(r("#292d35",h+22,f+3,3,2),r("#81716e",h+22,f+5,4,1)),u%4===0&&a("#302c35",[h+12,f+4,h+10,f+7,h+12,f+10,h+11,f+13]),r("#393a40",h+5,f+9,4,1),r("#62545a",h+17,f+7,6,1)}for(let l=0;l<15;l++)t.globalAlpha=.12,r("#1b302c",ht(l+201)*128|0,ht(l+231)*128|0,4,8);t.globalAlpha=1}else if(["metal","ceiling","door"].includes(s)){for(let l=0;l<2;l++)for(let c=0;c<2;c++){const h=c*64,f=l*64;r(i[2],h,f,64,3),r(i[2],h,f,3,64),r(i[1],h+3,f+3,59,1),r("#445d51",h+3,f+4,1,57);for(const u of[7,55])for(const p of[7,55])o(h+u,f+p);for(let u=0;u<7;u++){const p=h+10+ht(u+l*14+c*7)*42|0,g=f+13+u*6;r("#263d38",p,g,10,1),r("#748077",p+2,g+1,5,1)}if(r("#7e6643",h+3,f+48,3,12),r("#553f2b",h+6,f+55,6,4),s==="ceiling"||s==="metal"&&l===1&&c===1){r("#1a2d2e",h+17,f+19,31,27);for(let u=21;u<45;u+=4)r("#0e2226",h+20,f+u-f,25,2),r("#667b6a",h+20,f+u-f+2,25,1)}}if(s==="door"){r("#172929",12,14,104,93),r("#718573",14,16,100,2);for(let l=20;l<101;l+=8)r("#4f6b59",16,l,96,4),r("#263e37",16,l+4,96,3),r("#76917a",18,l,90,1);r("#c7ab53",0,108,128,13);for(let l=-16;l<144;l+=24)t.fillStyle="#242c28",t.beginPath(),t.moveTo(l,121),t.lineTo(l+12,108),t.lineTo(l+24,108),t.lineTo(l+12,121),t.fill();r("#132a28",60,0,4,108),r("#92a288",65,2,2,104);for(const l of[7,97])o(53,l),o(72,l)}}else if(s==="crate"){for(let l=0;l<128;l+=16){r("#3e4030",l,0,2,128),r("#a18c5b",l+3,3,1,119);for(let c=8;c<120;c+=11)r("#4f4c35",l+5,c,7,1)}for(const l of[0,60,120])r("#333a30",l,0,8,128),r("#77836b",l+1,2,2,123);for(const l of[0,60,120])r("#333a30",0,l,128,8),r("#8e916f",3,l+1,121,2);for(const l of[3,63,123])for(const c of[5,62,122])o(l,c);r("#c4b886",19,21,34,22),r("#292f27",22,24,28,3),r("#595b40",22,30,19,2);for(let l=23;l<49;l+=3)r("#3d4934",l,36,1,5)}else if(s==="floor"||s==="labfloor")for(let l=0;l<2;l++)for(let c=0;c<2;c++){const h=c*64,f=l*64;r(i[2],h,f,64,3),r(i[2],h,f,3,64),r(i[1],h+3,f+3,59,1),r("#54675b",h+3,f+4,1,57);for(let u=0;u<9;u++){const p=h+8+ht(u+l*21+c*7)*44|0,g=f+9+ht(u+90)*44|0;r("#637363",p,g,5,1),r("#243a35",p+1,g+1,7,1)}if(s==="floor"){o(h+7,f+7),o(h+54,f+54);for(let u=14;u<52;u+=9)for(let p=15;p<52;p+=12)a("#506157",[h+p,f+u,h+p+3,f+u-3,h+p+5,f+u-3])}else l===1&&c===0&&a("#263e38",[h+20,f+3,h+21,f+12,h+26,f+19,h+25,f+29,h+31,f+35,h+32,f+45])}else if(s==="concrete"){r("#273c3d",0,0,128,3),r("#7b8173",0,3,128,1),r("#344848",0,64,128,2),a("#2b3b3d",[17,4,20,19,14,32,17,40,9,48,7,65]),a("#728074",[19,5,22,20,16,32]),a("#293b3c",[105,65,103,81,94,92,94,101,89,108,88,125]),a("#687768",[105,82,110,89,120,91]);for(const l of[11,115])for(const c of[12,114])r("#273c3c",l,c,5,4),r("#8b8c78",l,c,4,1);for(let l=0;l<16;l++)t.globalAlpha=.15,r("#1b3436",8+l*7,5,3,10+ht(l+4)*30);t.globalAlpha=1}else if(s==="road"){for(let l=0;l<450;l++){const c=ht(l+19)*128|0,h=ht(l+81)*128|0;r(l%4===0?"#62655f":"#3a4549",c,h,1+l%2,1)}a("#101d25",[0,42,16,45,23,53,36,54,48,66,64,70,79,86,95,89,112,103,128,101],2),a("#46514d",[0,40,16,43,24,51,36,52,48,64,64,68]),a("#14212a",[49,65,49,80,41,88,39,107,29,128]);for(let l=0;l<5;l++)t.globalAlpha=.16,r("#121e29",20+l*3,10+l*4,25-l*3,15);t.globalAlpha=1}return zl(e,!0)}function y0(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=(i,r,a,o,l)=>{t.fillStyle=i,t.fillRect(r,a,o,l)};if(t.imageSmoothingEnabled=!1,s==="poster"){n("#142e32",4,3,118,122),n("#8ba084",8,7,110,110),n("#273a38",12,11,102,67);for(let i=0;i<12;i++)n(i%2?"#5b856e":"#365b54",19+i*7,20,3,44),n("#b2c09b",17+i*7,27+i%4*8,7,3);t.textAlign="center",t.fillStyle="#c8d4aa",t.font="bold 15px monospace",t.fillText("AXIOM",64,29),t.font="bold 9px monospace",t.fillText("A BETTER SPECIES",64,72),t.fillStyle="#293d37",t.fillText("LAZARUS / 2091",64,90),t.fillText("TRUST THE FUTURE",64,103),n("#597460",12,114,66,2),n("#203a34",22,119,86,2),n("#0d272d",4,100,5,15),n("#0d272d",119,8,5,16)}else if(s==="graffiti"){t.textAlign="center",t.font="bold 24px monospace",t.fillStyle="#cb5365",t.fillText("THEY LIED",64,54),t.font="bold 12px monospace",t.fillText("MARA IS ALIVE",64,74);for(let i=0;i<8;i++)n("#a33e50",14+i*14,56,1,5+ht(i)*15);t.strokeStyle="#b75059",t.lineWidth=2,t.beginPath(),t.moveTo(8,83),t.lineTo(116,88),t.stroke()}else if(s==="paper"){n("#766e55",9,9,108,111),n("#c2b791",8,6,106,109),n("#aea17e",9,111,101,4),n("#3e4940",17,15,51,7),n("#7d4543",83,13,23,13);for(let i=0;i<13;i++)n("#6e7461",18,30+i*5,48+ht(i)*37,1),i%3===0&&n("#9b9271",16,31+i*5,80,1);n("#7c5f50",75,69,28,22),n("#37473e",80,74,18,14),n("#b0a47c",12,93,16,13),t.fillStyle="#713f38",t.font="bold 8px monospace",t.fillText("CASE 091",36,105)}else if(s==="puddle"){t.fillStyle="#173541",t.beginPath();for(let i=0;i<20;i++){const r=i*Math.PI/10,a=45+ht(i)*13,o=64+Math.cos(r)*a,l=64+Math.sin(r)*a*.65;i?t.lineTo(o,l):t.moveTo(o,l)}t.closePath(),t.fill();for(let i=0;i<14;i++)n(i%3?"#214f54":"#3a796a",20+ht(i)*85,44+ht(i+13)*41,7+ht(i+9)*25,1);n("#548a73",34,49,27,1),n("#407869",73,58,21,1)}else if(s==="leak"){for(let i=0;i<40;i++)t.globalAlpha=.2+ht(i)*.6,n(i%3?"#352d2a":"#806443",ht(i)*128,ht(i+5)*18,1+ht(i+9)*4,19+ht(i+3)*104);t.globalAlpha=1}else{n("#102a2b",0,0,128,128),n("#6a7a67",3,3,122,3),n("#3b5950",3,6,3,119);for(let i=0;i<6;i++)n("#203b36",10,12+i*17,75,11),n("#537766",13,15+i*17,42,2),n("#62dda0",17+i*8,17+i*17,5,3),n("#88a58b",94,14+i*17,18,6),n(i%2?"#edac58":"#74dca0",117,15+i*17,3,3);for(let i=0;i<9;i++)n("#899277",12+i*12,120,5,2)}return zl(e)}const Er=Math.PI*2,st=s=>{const e=Math.sin(s*127.1+91.7)*43758.5453;return e-Math.floor(e)};function E0(s,e="#86ffb8",t="#101b20",n=256,i=64){const r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,i),a.fillStyle=e,a.fillRect(2,2,n-4,2),a.fillRect(2,i-4,n-4,2),a.fillRect(2,2,2,i-4),a.fillRect(n-4,2,2,i-4);const o=s.split("/").map(h=>h.trim());a.textAlign="center",a.textBaseline="middle";let l=o.length>1?19:22;l=Math.min(l,Math.floor((n-18)/(Math.max(...o.map(h=>h.length))*.61))),a.font=`bold ${Math.max(8,l)}px monospace`,o.forEach((h,f)=>a.fillText(h,n/2,i/2+(f-(o.length-1)/2)*(l+5)));const c=new Ra(r);return c.magFilter=c.minFilter=xt,c.colorSpace=Pt,c.generateMipmaps=!1,c}function T0(){const s=document.createElement("canvas");s.width=64,s.height=80;const e=s.getContext("2d");e.fillStyle="#132126",e.fillRect(0,0,64,80),e.fillStyle="#2e594d";for(let n=0;n<80;n++)e.fillRect(st(n)*64|0,st(n+15)*80|0,2,4);e.fillStyle="#19252d",e.fillRect(16,39,36,32),e.fillStyle="#97654b",e.fillRect(24,20,20,27),e.fillStyle="#b78660",e.fillRect(26,21,15,21),e.fillStyle="#342731",e.fillRect(16,13,36,6),e.fillRect(21,7,23,9),e.fillStyle="#806454",e.fillRect(14,17,41,4),e.fillStyle="#131922",e.fillRect(27,28,17,3),e.fillRect(34,27,9,7),e.fillStyle="#81d9b5",e.fillRect(27,29,2,2),e.fillStyle="#382c2b",e.fillRect(29,39,10,3),e.fillStyle="#7f9e9a",e.fillRect(43,45,10,25),e.fillStyle="#313f47";for(let n=47;n<70;n+=5)e.fillRect(44,n,8,2);e.fillStyle="#fcba67",e.fillRect(47,48,2,2),e.fillStyle="#a0dabc",e.font="bold 6px monospace",e.textAlign="center",e.fillText("ELIAS VANE",32,76);const t=new Ra(s);return t.magFilter=t.minFilter=xt,t.colorSpace=Pt,t}class A0{constructor(e){this.canvas=e,this.renderer=new S0({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Pt,this.renderer.toneMapping=rn,this.scene.background=new ze(593690),this.scene.fog=new Aa(661536,13,68),this.camera.rotation.order="YXZ";const t=new _h(10077128,2112297,1.45);this.scene.add(t);const n=new wo(11123670,1.05);n.position.set(-10,25,12),this.scene.add(n);const i=new wo(7598010,.65);i.position.set(7,9,-25),this.scene.add(i);for(const a of["brick","metal","concrete","crate","floor","labfloor","road","ceiling","door"]){const o=new bo({map:b0(a)});this.retroMaterial(o),this.mats.set(a,o)}this.buildLevel(),this.flush();for(const a of Ft.doors)this.buildDoor(a);for(const a of Ft.enemies){const o=this.buildMob(a.kind);o.root.position.set(a.x,0,a.z),this.enemyGroups.set(a.id,o),this.scene.add(o.root)}for(const a of Ft.pickups){const o=this.buildPickup(a.kind);o.position.set(a.x,.5,a.z),this.scene.add(o),this.pickupGroups.set(a.id,o)}const r=this.buildMob("raptor",!0);this.mountGroup=r.root,this.mountLegs=r.legs,this.mountGroup.scale.setScalar(1.55),this.mountGroup.position.set(Ft.mount.x,0,Ft.mount.z),this.mountGroup.rotation.y=-.7,this.scene.add(this.mountGroup),this.effectMat=new dn({color:16777215,transparent:!0,opacity:.9}),this.effectMesh=new oh(new en(.08,.08,.08),this.effectMat,128),this.effectMesh.instanceMatrix.setUsage(Ic),this.effectMesh.count=0,this.effectMesh.frustumCulled=!1,this.scene.add(this.effectMesh),this.canvas.style.imageRendering="pixelated"}renderer;scene=new Jc;camera=new Wt(76,1.6,.06,110);mats=new Map;batches=new Map;doorGroups=new Map;enemyGroups=new Map;pickupGroups=new Map;lamps=[];hazmat=[];mountGroup;mountLegs=[];effectMesh;effectMat;dummy=new Tt;snapGrid=new Fe(160,100);clock=0;lastResolution="";powerLamp;lights=[];retroMaterial(e){e.onBeforeCompile=t=>{t.uniforms.retroGrid={value:this.snapGrid},t.vertexShader=`uniform vec2 retroGrid;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if(gl_Position.w>0.0){vec2 p=gl_Position.xy/gl_Position.w;gl_Position.xy=floor(p*retroGrid+0.5)/retroGrid*gl_Position.w;}`)},e.customProgramCacheKey=()=>"fossil-retro-vertex-v1"}mat(e,t=0,n=!0){const i=`c${e}-${t}`;let r=this.mats.get(i);return r||(r=new bo({color:e,emissive:t,flatShading:n}),this.retroMaterial(r),this.mats.set(i,r)),r}basic(e){const t=`b${e}`;let n=this.mats.get(t);return n||(n=new dn({color:e}),this.mats.set(t,n)),n}addGeometry(e,t,n,i,r,a=0,o=0,l=0){const c=new rt().compose(new B(n,i,r),new ri().setFromEuler(new Pn(a,o,l)),new B(1,1,1));e.applyMatrix4(c),e.attributes.normal||e.computeVertexNormals();const h=this.batches.get(t)||[];h.push(e),this.batches.set(t,h)}box(e,t,n,i,r,a,o,l=0){const c=new en(i,r,a),h=c.attributes.position,f=c.attributes.normal,u=c.attributes.uv;for(let p=0;p<h.count;p++){const g=Math.abs(f.getX(p)),S=Math.abs(f.getY(p));u.setXY(p,g>.5?h.getZ(p)/2:h.getX(p)/2,S>.5?h.getZ(p)/2:h.getY(p)/2)}this.addGeometry(c,o,e,t,n,0,l)}flush(){for(const[e,t]of this.batches){const n=Qo(t,!1);this.scene.add(new ct(n,e));for(const i of t)i.dispose()}this.batches.clear()}sign(e,t,n,i,r=3,a=.8,o=0,l="#86ffb8",c="#101b20"){const h=E0(e,l,c),f=new dn({map:h,side:Xt});this.mats.set(`sign-${this.mats.size}`,f);const u=new ct(new Gn(r,a),f);return u.position.set(t,n,i),u.rotation.y=o,this.scene.add(u),u}lamp(e,t,n,i=8978368,r=!1){this.box(e,t,n,r?.08:1.2,r?1.9:.09,.1,this.mat(11791056,i));const a=new ct(new en(r?.09:1.22,r?1.95:.1,.11),this.basic(i));a.position.set(e,t,n+.015),this.scene.add(a),this.lamps.push(a)}buildLevel(){const e=t=>this.mats.get(t);this.box(-.7,-.12,-20,35,.2,69,e("road")),this.box(0,-.005,8,10.5,.08,8.1,e("floor")),this.box(0,-.005,-26,14,.08,12.1,e("labfloor")),this.box(11.3,-.005,-28,8,.08,8,e("floor")),this.box(0,-.005,-39,20,.08,14,e("labfloor")),this.box(-7,-.005,-49,8,.08,6,e("metal")),this.box(-15.4,-.005,-7,4,.08,6,e("floor")),this.box(0,4.05,8,10.6,.12,8.3,e("ceiling")),this.box(0,4.5,-26,14.4,.12,12.2,e("ceiling")),this.box(11.3,4.5,-28,8.3,.12,8.3,e("ceiling")),this.box(0,4.5,-39,20.4,.12,14,e("ceiling")),this.box(-7,4.5,-49,8.3,.12,6.3,e("ceiling")),this.box(-15.4,4,-7,4.2,.1,6.2,e("ceiling"));for(const t of Ft.walls)this.box(t.x,(t.y??0)+t.h/2,t.z,t.w,t.h,t.d,e(t.material)),t.h>3&&t.d<1&&(this.box(t.x,.15,t.z+.03,t.w,.25,t.d+.04,this.mat(1517867)),this.box(t.x,3.08,t.z+.035,t.w,.1,t.d+.08,this.mat(4153687)));for(let t=-1;t<=1;t+=2)for(let n=0;n<5;n++){const i=1-n*5,r=8+st(n+t+10)*10,a=t*17;this.box(a,r/2,i,6,r,4.5,e("brick")),this.box(a,r+.2,i,6.4,.4,4.8,this.mat(1583412));for(let o=4.8;o<r-1;o+=2.3)for(let l=0;l<2;l++){const c=t*13.95;this.box(c,o,i-1+l*2,.1,1.2,.9,this.mat((n+l)%3===0?6720377:1781821,(n+l)%3===0?2640696:0)),this.box(c-t*.04,o-.64,i-1+l*2,.25,.12,1.15,this.mat(989474))}this.box(a+t*.4,r+.8,i,.4,1.2,1.7,e("metal")),this.box(a,r+2.5,i,.12,4,.12,this.mat(4479848))}for(let t=0;t<10;t++){const n=-35+t*8,i=15+st(t+30)*27,r=-63-st(t+41)*18;this.box(n,i/2,r,5,i,6,this.mat(1385265));for(let a=4;a<i;a+=4)this.box(n,a,r+3.04,3.5,.15,.08,this.basic(2576199))}for(const t of[-11.8,11.8])this.box(t,.045,-8,2.6,.15,24,e("concrete")),this.box(t+Math.sign(t)*.9,1.2,-8,.06,.08,22,this.mat(3691334));for(const t of[-1,1])for(let n=0;n<5;n++){const i=1-n*4.4;this.box(t*12.94,2.65,i,.08,1.8,1.7,this.mat(1518642));for(let r=-1;r<=1;r++)this.box(t*12.88,2.65,i+r*.58,.07,1.8,.045,this.mat(5859164));this.box(t*12.85,1.72,i,.13,.15,1.9,e("metal")),n%2===0&&this.lamp(t*12.84,3.95,i,n===2?14371183:7791803,!1)}for(const t of[6,10,-22,-27,-30,-34,-38,-42,-49]){const n=t<-31&&t>-46;this.box(0,3.91,t,n?20:9,.18,.25,e("metal")),this.lamp(t<-46?-7:0,t>0?3.79:4.22,t,11595712),this.box(3,4.12,t,1.5,.08,.8,e("metal"));for(let i=0;i<6;i++)this.box(2.4+i*.22,4.02,t,.06,.035,.65,this.mat(1189162))}for(const t of Ft.hazards){const n=new dn({color:4229692,transparent:!0,opacity:.76});this.mats.set(`hazard-${t.x}`,n);const i=new ct(new Gn(t.w,t.d),n);i.rotation.x=-Math.PI/2,i.position.set(t.x,.11,t.z),this.scene.add(i),this.hazmat.push(i),this.box(t.x,t.x<0?.14:.02,t.z,t.w+.2,.1,t.d+.2,this.mat(2112557));for(let r=0;r<8;r++)this.box(t.x+(st(r)-.5)*t.w,.13,t.z+(st(r+13)-.5)*t.d,.12,.05,.12,this.basic(9623415))}for(const t of Ft.props){const n=t.x,i=t.z,r=t.rotation??0;if(["neon","office-sign","facility-sign","sign"].includes(t.kind)){const a=t.kind==="neon",o=t.kind==="office-sign"?3.05:t.kind==="facility-sign"?4.15:a?4.9:3.6;this.sign(t.label??"",n,o,i,t.kind==="facility-sign"?9:a?4.8:5,t.kind==="facility-sign"?1.3:.85,r,a&&i<-3?"#ff7095":"#96ffc9")}else if(t.kind==="portrait"){const a=new dn({map:T0()});this.mats.set("portrait",a);const o=new ct(new Gn(.9,1.12),a);o.position.set(n,2.1,i),o.rotation.y=Math.PI,this.scene.add(o),this.box(n,2.1,i+.08,1.04,1.27,.06,this.mat(5987138))}else if(t.kind==="office-board"){this.box(n,2,i,.08,1.7,3.7,this.mat(5327932)),this.sign(t.label??"",n-.06,2.55,i,2.8,.38,r,"#cecfaa","#32392e");for(let a=0;a<7;a++)this.box(n-.07,1.8+st(a)*.5,i+(st(a+10)-.5)*2.8,.035,.42,.31,this.mat(a%2?12233109:8296837))}else if(["terminal","console"].includes(t.kind)){this.box(n,1.4,i,.85,.65,.12,this.mat(1322032)),this.box(n,1.4,i+.07,.65,.45,.02,this.basic(3840368));for(let a=0;a<4;a++)this.box(n-.2,1.53-a*.08,i+.085,.32-st(a)*.1,.025,.01,this.basic(10280873));this.box(n,1.02,i+.2,.9,.08,.5,this.mat(4872532))}else if(t.kind==="lamp")this.box(n,1.9,i,.13,3.8,.13,this.mat(4217429)),this.box(n,3.7,i-.35,.12,.12,.8,this.mat(4217429)),this.lamp(n,3.61,i-.68,11530187);else if(t.kind==="car"){this.box(n,1,i,1.8,.65,3.6,this.mat(4797250),r),this.box(n,1.62,i-.2,1.58,.8,1.8,this.mat(2701636),r),this.box(n,1.63,i+.76,1.4,.48,.08,this.mat(1585465),r);for(const a of[-.97,.97])for(const o of[-1.15,1.15])this.addGeometry(new _t(.39,.39,.24,8),this.mat(1187107),n+a,.46,i+o,0,0,Math.PI/2);this.box(n,.78,i+1.86,1.1,.16,.08,this.basic(7021366)),this.box(n+.5,1.5,i,.04,.02,1.5,this.mat(9737091),.3)}else if(t.kind==="barrels")for(let a=0;a<3;a++){const o=n+a%2*.68,l=i+Math.floor(a/2)*.7;this.addGeometry(new _t(.29,.3,1,8),this.mat(a===2?5918776:2576451),o,.5,l),this.addGeometry(new _t(.31,.31,.07,8),this.mat(1059883),o,.22,l),this.addGeometry(new _t(.31,.31,.07,8),this.mat(1059883),o,.78,l),this.box(o,.6,l+.3,.17,.19,.02,this.basic(14003533))}else if(t.kind==="rubble")for(let a=0;a<12;a++)this.box(n+(st(a)-.5)*2,.18+st(a+10)*.18,i+(st(a+20)-.5)*2,.3+st(a+30)*.6,.25+st(a+40)*.4,.25+st(a+50)*.6,e("concrete"),st(a+60)*Er);else if(t.kind==="tank")this.addGeometry(new _t(.6,.65,.27,8),e("metal"),n,.14,i),this.addGeometry(new _t(.55,.55,2.5,8),this.mat(2384967,1063201),n,1.52,i),this.addGeometry(new _t(.65,.65,.28,8),e("metal"),n,2.91,i),this.box(n-.32,1.6,i+.45,.15,2.3,.15,this.basic(6671237)),this.box(n,1.8,i+.52,.28,.6,.16,this.mat(7580774)),this.box(n,1.4,i+.53,.53,.46,.12,this.mat(5929809)),this.box(n-.18,.8,i+.49,.12,.8,.15,this.mat(5929809)),this.box(n+.18,.8,i+.49,.12,.8,.15,this.mat(5929809));else if(t.kind==="pipe"){this.addGeometry(new _t(.15,.15,12,6),this.mat(4549473),n,3.3,i,Math.PI/2);for(let a=-2;a<=2;a++)this.addGeometry(new _t(.19,.19,.14,6),this.mat(1521208),n,3.3,i+a*2.4,Math.PI/2)}else if(t.kind==="lab-table"){this.box(n,1.27,i,3.9,.15,1.7,this.mat(5862506)),this.box(n,1.47,i,1.4,.26,.6,this.mat(6380610));for(let a=0;a<4;a++)this.box(n+(a-1.5)*.3,1.65,i,.16,.25,.18,this.mat(6653548))}else if(t.kind==="locker")this.box(n,1.25,i,.65,2.5,.85,e("metal")),this.box(n-.34,1.3,i,.025,.15,.17,this.basic(10471339));else if(t.kind==="power")this.box(n,1.15,i,.95,2.3,.45,e("metal")),this.sign("LIFT POWER",n,1.8,i+.24,1,.26),this.sign("E / ACTIVATE",n,1.48,i+.24,.9,.2,0,"#e8ca69"),this.powerLamp=new ct(new en(.23,.26,.04),this.basic(16737843)),this.powerLamp.position.set(n,1.12,i+.25),this.scene.add(this.powerLamp),this.box(n,.7,i+.28,.18,.35,.1,this.mat(12235397));else if(t.kind==="checkpoint")this.sign("LOBBY / SECURITY →",0,3.65,-24.5,5,.55),this.box(-6.94,1.5,i,.08,1.5,.8,this.mat(2506555)),this.sign("SAFE / CHECKPOINT",-6.88,1.6,i,1,.4,Math.PI/2);else if(t.kind==="exit"){this.sign("EXTRACTION / LEVEL 01",n,2.4,-51.91,5,.9),this.box(n,.05,i,6,.16,4,e("metal"));for(let a=0;a<5;a++)this.box(n,.17,i-2+a,6,.03,.12,this.mat(11310909))}else if(t.kind==="warning")this.sign("AXIOM / PROJECT LAZARUS",0,3.8,-45.62,7,.8),this.sign(t.label??"",10,3.3,i,4,.65,-Math.PI/2,"#ff6b56");else if(t.kind==="street-mark")for(let a=0;a<3;a++)this.box(n,.05,i+(a-1)*1.8,.18,.03,.9,this.mat(9213035));else if(t.kind==="drain"){this.box(n,.04,i,1.7,.08,.6,this.mat(661533));for(let a=0;a<12;a++)this.box(n-.8+a*.14,.095,i,.055,.02,.5,this.mat(5399644))}else if(t.kind==="corpse"||t.kind==="skeleton")this.box(n,.17,i,.45,.3,1.5,this.mat(t.kind==="corpse"?5058625:10658186),.55),this.box(n-.24,.16,i+.75,.35,.23,.34,this.mat(7763815)),this.box(n,.025,i+.15,1.7,.02,2,this.mat(5051943));else if(t.kind==="chair"){this.box(n,.55,i,.6,.12,.6,this.mat(3684161)),this.box(n,.97,i+.25,.6,.8,.09,this.mat(3749953));for(const a of[-.23,.23])for(const o of[-.23,.23])this.box(n+a,.28,i+o,.06,.5,.06,e("metal"))}else if(t.kind==="bottles")for(let a=0;a<3;a++)this.addGeometry(new _t(.06,.1,.3,5),this.mat(4288072),n+a*.18,1,i);else t.kind==="secret-table"&&(this.box(n,.75,i,2.3,.14,1.1,this.mat(4933432)),this.sign("MARA WAS HERE",-17,2.5,-7,3,.6,Math.PI/2,"#eecc91"))}this.buildEnvironmentDetails();for(const t of[[0,2.6,7],[0,3,-26],[0,3,-39],[8,3,-8],[-9,3,-7]]){const n=new vh(t[2]===-7?13579886:5560217,7,12,2);n.position.set(t[0],t[1],t[2]),this.lights.push(n),this.scene.add(n)}}decal(e,t,n,i,r,a,o=0,l=!1){const c=`decal-${e}`;let h=this.mats.get(c);h||(h=new dn({map:y0(e),alphaTest:.12,side:Xt,depthWrite:!l,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.mats.set(c,h)),this.addGeometry(new Gn(r,a),h,t,n,i,l?-Math.PI/2:0,o)}buildEnvironmentDetails(){const e=c=>this.mats.get(c),t=this.mat(5005912),n=this.mat(1716275),i=this.mat(9279361),r=this.mat(7885891),a=this.mat(7496267),o=(c,h,f,u,p,g=0,S=0)=>this.addGeometry(new _t(u,u,p,8),t,c,h,f,g,0,S);this.box(-3.2,.88,8,2.3,.06,1.22,a),this.box(-3.2,.72,8.54,2,.16,.025,n);for(const c of[-3.7,-3.1,-2.5])this.box(c,.72,8.57,.49,.11,.035,a),this.box(c,.73,8.6,.16,.025,.03,i);this.box(-3.08,.98,8.26,.66,.055,.22,t);for(let c=0;c<3;c++)for(let h=0;h<10;h++)this.box(-3.34+h*.057,1.014,8.19+c*.052,.043,.018,.035,n);this.decal("paper",-2.46,.931,7.99,.43,.56,.15,!0),this.decal("paper",-3.96,.928,8.15,.36,.47,-.2,!0);for(let c=0;c<4;c++)this.box(-2.54,.96+c*.045,7.69,.38,.035,.32,this.mat(c%2?6315587:9273441),.12);this.box(-4.03,1.04,7.72,.29,.25,.22,n),this.box(-4.03,1.05,7.838,.23,.16,.012,t);for(let c=0;c<4;c++)this.box(-4.09+c*.04,1.06,7.85,.018,.09,.008,n);o(-4.13,1.26,7.69,.012,.32),this.box(-3.58,.95,8.35,.17,.05,.14,i),this.box(-3.59,.985,8.35,.1,.015,.08,n),o(-2.36,.953,7.72,.11,.04),o(-2.36,1.15,7.72,.025,.37),o(-2.53,1.39,7.72,.026,.4,0,Math.PI/2),this.addGeometry(new Os(.19,.17,8),n,-2.69,1.37,7.72),this.box(-2.69,1.29,7.72,.22,.015,.14,this.basic(11390112));for(const c of[1.9,2.55]){this.box(-4.91,c,10.4,.16,.06,2.1,a);for(let h=0;h<9;h++){const f=9.58+h*.19;this.box(-4.89,c+.17,f,.16,.28+st(h)*.09,.12,this.mat([7162948,5730661,8287574][h%3])),this.box(-4.8,c+.16,f,.012,.025,.1,i)}}this.box(-4.98,.95,8,.07,.04,7.6,n),this.box(4.99,3.6,8,.07,.06,7.6,t),this.sign("VESPER 2091 / MISSING: MARA",-2.48,2.67,11.97,2.35,.44,Math.PI,"#b7a57b","#2b3230"),this.decal("paper",1.9,.048,10,.43,.54,.6,!0),this.decal("paper",1.65,.047,10.32,.31,.42,-.2,!0);for(const c of[-1,1])for(let h=0;h<5;h++){const f=1-h*4.4,u=c*12.87;for(const g of[-.99,.99])this.box(u,2.65,f+g,.15,2.1,.14,t),this.box(u-c*.045,2.65,f+g,.06,1.9,.04,i);if(this.box(u,3.71,f,.22,.13,2.16,t),this.box(u,1.56,f,.29,.12,2.22,n),h%2===1){this.box(c*12.5,3.98,f,.95,.1,2.4,n);for(let g=0;g<6;g++)this.box(c*12.47,4.037,f-1.05+g*.4,.94,.015,.14,this.mat(c<0?8478553:5471595));this.box(c*12.04,3.82,f,.055,.28,2.42,t)}const p=f-1.65;this.box(c*12.84,4.77,p,.28,.63,.94,e("metal"));for(let g=0;g<6;g++)this.box(c*12.66,4.52+g*.09,p,.026,.035,.77,n);o(c*12.78,3.2,p,.043,2.3),this.box(c*12.72,2.01,p,.16,.19,.18,r),this.decal("leak",c*12.975,2.9,p+.1,1,1.7,-c*Math.PI/2),(h===0||h===3)&&this.decal("poster",c*12.97,1.68,f-1.68,.64,.95,-c*Math.PI/2);for(const g of[-1.8,1.8])this.box(c*12.8,5.65,f+g,.14,.4,.17,t)}this.decal("graffiti",12.97,1.12,-14.2,2.55,1.12,-Math.PI/2),this.decal("graffiti",-12.97,1.3,-.7,2.4,1.05,Math.PI/2);for(const c of[-1,1]){o(c*12.83,5.4,-8,.065,23,Math.PI/2);for(let h=2;h>-20;h-=4)this.box(c*12.75,5.4,h,.09,.24,.2,t),this.box(c*11.78,.13,h,2.25,.024,.025,n);for(let h=1;h>-20;h-=6){this.box(c*11.68,.143,h,.7,.02,.42,n);for(let f=0;f<7;f++)this.box(c*11.68-.3+f*.1,.16,h,.038,.018,.38,t)}}for(let c=0;c<16;c++){const h=2-c*1.35;this.box(.6,.038,h,.12,.012,.62,this.mat(9277799));for(let f=0;f<3;f++)this.box(.58+(st(c+f)-.5)*.13,.047,h+(st(c+f+20)-.5)*.65,.08,.004,.05,e("road"))}for(const[c,h,f,u]of[[5,-4,2.8,1.6],[-5,-7,3.5,1.4],[9,-16,2.6,1.6],[-10,-1,2,1.2],[2,-17,3.2,1.5]])this.decal("puddle",c,.049,h,f,u,0,!0);for(let c=0;c<8;c++){const h=-10.7+st(c+42)*21,f=-1-st(c+90)*18;this.decal("paper",h,.048,f,.23,.31,st(c)*Er,!0)}this.box(-7,.85,-8.17,1.75,.14,.1,t);for(let c=0;c<10;c++)this.box(-7.6+c*.13,1.02,-8.11,.044,.13,.04,n);for(const c of[-7.59,-6.41])this.box(c,1.12,-8.12,.28,.19,.045,this.mat(10593678)),this.box(c,1.13,-8.09,.21,.07,.015,this.basic(7835254));this.box(-7,1.38,-8.22,1.53,.03,.1,r),this.box(-7.2,1.66,-9.2,.026,.45,.028,i,.6);for(const c of[-.97,.97])for(const h of[-1.15,1.15])this.addGeometry(new _t(.2,.2,.27,8),t,-7+c,.46,-10+h,0,0,Math.PI/2),this.addGeometry(new _t(.085,.085,.28,6),n,-7+c,.46,-10+h,0,0,Math.PI/2);for(const[c,h,f]of[[6.98,-21,-31],[9.98,-33,-45]])for(const u of[-1,1]){const p=u*c;this.box(p,3.9,(h+f)/2,.14,.21,h-f,t),o(p-u*.11,3.62,(h+f)/2,.055,h-f,Math.PI/2);for(let g=h;g>=f;g-=2.4){this.box(p,2,g,.065,3.65,.075,n);for(const S of[.4,1.5,2.6,3.6])this.box(p-u*.045,S,g,.035,.055,.055,i);this.box(p-u*.09,3.62,g,.06,.27,.22,t)}this.decal("circuit",p-u*.04,1.6,(h+f)/2,.53,.76,-u*Math.PI/2)}for(const c of[-3.5,3.5]){this.box(c,4.28,-39,.6,.18,12,e("metal"));for(let h=-33.3;h>-45;h-=.65)this.box(c,4.17,h,.47,.08,.07,n);this.box(c,4.03,-33.5,.82,.18,.19,t),this.box(c,4.03,-44.5,.82,.18,.19,t)}this.decal("poster",-6.975,2.05,-22.8,.73,1.02,Math.PI/2),this.sign("HELIX / SECTOR 04",6.98,2.55,-22.8,1.7,.42,-Math.PI/2,"#b3c4a1");let l=0;for(const c of Ft.props)if(c.kind==="tank"){const{x:h,z:f}=c;for(const u of[.32,2.7]){this.addGeometry(new _t(.63,.63,.12,8),t,h,u,f);for(let p=0;p<8;p++){const g=p*Er/8;this.box(h+Math.sin(g)*.6,u,f+Math.cos(g)*.6,.075,.16,.075,i,g)}}for(const u of[-.45,.45])o(h+u,1.52,f-.36,.042,2.47);o(h,3.16,f,.1,.34),o(h,3.29,f-.5,.07,1,Math.PI/2),this.box(h+.43,1.6,f+.37,.31,.67,.18,n),this.decal("circuit",h+.43,1.6,f+.465,.24,.54),this.addGeometry(new _t(.105,.105,.035,12),i,h+.43,2.14,f+.42,Math.PI/2),this.box(h+.43,2.14,f+.446,.01,.11,.016,this.mat(12281932),.4),this.sign(`LZ-${String(++l).padStart(2,"0")} / CONTAINED`,h,.64,f+.655,.72,.18,0,"#b6cda2","#183b34")}for(const[c,h,f]of[[-4.4,-26.8,1.31],[12,-25.9,1.16],[5,-36,1.26]]){this.box(c-.6,f+.09,h+.22,.26,.14,.3,n),this.box(c-.6,f+.16,h+.22,.19,.015,.2,i),this.decal("paper",c+.57,f+.009,h,.31,.43,.2,!0);for(let u=0;u<4;u++)this.box(c-.65+u*.15,f+.013,h-.24,.08,.012,.02,r)}for(const c of[-1.38,1.38]){this.box(c,1.36,-40,.23,.055,1.43,i);for(const h of[-40.49,-39.52])this.box(c,1.41,h,.27,.05,.12,n)}this.box(-1.1,1.4,-40,.18,.2,.22,n),o(-1.09,1.65,-40,.045,.28),this.box(-1.17,1.79,-40,.18,.07,.14,i);for(let c=0;c<3;c++){const h=.8+c*.27;this.addGeometry(new _t(.06,.09,.29,6),this.mat(6523764),h,1.48,-40.4),this.box(h,1.64,-40.4,.07,.025,.07,t)}this.decal("paper",-1,1.36,-39.6,.35,.43,0,!0);for(const c of[-10.87,-3.12]){o(c,2.1,-49,.09,3.6);for(const h of[.7,3.45])o(c,h,-49,.14,.12);this.box(c,2.7,-51.88,.23,1.5,.12,t)}this.box(-7,4.25,-51.86,6,.12,.14,t),this.sign("AXIOM INDUSTRIES / FREIGHT 06",-7,1.35,-51.87,3.6,.36,0,"#8aa08e")}mesh(e,t,n,i,r,a){const o=new ct(e,t);return o.position.set(n,i,r),a.add(o),o}localBox(e,t,n,i,r,a,o,l,c=0){return this.mesh(new en(r,a,o),this.mat(l,c),t,n,i,e)}buildDoor(e){const t=new zt;t.position.set(e.x,0,e.z),this.mesh(new en(e.w,3.2,e.d),this.mats.get("door"),0,1.6,0,t);const n=e.w>e.d;n?(this.localBox(t,0,1.58,e.d/2+.015,e.w*.85,.08,.035,7581064),this.localBox(t,e.w*.35,1.3,e.d/2+.03,.15,.25,.03,e.locked?15629110:7924400,2250034)):this.localBox(t,-e.w/2-.015,1.58,0,.035,.08,e.d*.85,7581064),this.scene.add(t),this.doorGroups.set(e.id,t);const i=n?e.x:e.x-.3,r=n?e.z+.33:e.z;this.sign(e.label,i,3.57,r,n?Math.min(e.w+1.4,5):2.4,.5,n?0:-Math.PI/2,e.locked?"#ffb05d":"#8ccdaa")}mergeMobParts(e){for(const n of[...e.children])n instanceof zt&&this.mergeMobParts(n);const t=new Map;for(const n of e.children)if(n instanceof ct&&!Array.isArray(n.material)){const i=t.get(n.material)??[];i.push(n),t.set(n.material,i)}for(const[n,i]of t){if(i.length<2)continue;const r=i.map(o=>(o.updateMatrix(),o.geometry.clone().applyMatrix4(o.matrix))),a=Qo(r,!1);if(a){for(const o of i)e.remove(o),o.geometry.dispose();e.add(new ct(a,n))}for(const o of r)o.dispose()}}buildMob(e,t=!1){const n=new zt,i=new zt,r=[],a=[],o=(d,E,w,M,y,b,R,x)=>{const T=this.mesh(new La(1,6,4),this.mat(x),E,w,M,d);return T.scale.set(y,b,R),T},l=(d,E,w,M,y,b,R=6)=>{const x=new B(...E),T=new B(...w),P=T.clone().sub(x),C=x.clone().add(T).multiplyScalar(.5),N=this.mesh(new _t(y,M,P.length(),R),this.mat(b),C.x,C.y,C.z,d);return N.quaternion.setFromUnitVectors(new B(0,1,0),P.normalize()),N},c=(d,E,w,M,y,b,R=0)=>{const x=this.mesh(new Os(y*.26,y,4),this.mat(b),E,w,M,d);return x.rotation.z=R,x};if(e==="raptor"){const d=t?9798226:6322507,E=t?12889715:10202996,w=t?5984827:3492664,M=13945248;o(n,0,.94,.15,.38,.33,.65,d),o(n,0,.86,-.17,.28,.24,.44,E),o(n,0,1.2,-.34,.26,.28,.3,d),l(n,[0,1.1,-.26],[0,1.47,-.6],.19,.14,d),i.position.set(0,1.47,-.6),n.add(i),o(i,0,.01,-.08,.18,.19,.29,d),l(i,[0,-.015,-.19],[0,-.025,-.86],.143,.075,d),o(i,0,-.26,-.52,.119,.054,.415,E),this.localBox(i,0,-.151,-.59,.2,.105,.64,w),this.localBox(i,0,-.201,-.59,.2,.025,.64,E);for(const b of[-1,1])c(i,b*.065,-.153,-.907,.166,M,Math.PI);for(const b of[-1,1]){const R=o(i,b*.144,.105,-.19,.067,.032,.12,w);R.rotation.z=b*.22;const x=this.localBox(i,b*.16,.062,-.249,.043,.039,.034,t?15784331:16736578,5904136);x.rotation.y=b*.25,this.localBox(i,b*.157,.062,-.271,.012,.034,.012,w),o(i,b*.045,.031,-.832,.021,.016,.028,w);for(let C=0;C<4;C++)c(i,b*(.122-C*.011),-.147,-.4-C*.115,.078+C%2*.012,M,Math.PI);const T=new zt;T.position.set(b*.28,.78,.23),n.add(T),r.push(T),o(T,0,-.02,.02,.19,.29,.29,d),l(T,[0,-.14,-.02],[0,-.4,.12],.115,.07,d),o(T,0,-.36,.1,.084,.085,.085,E),l(T,[0,-.39,.1],[0,-.65,-.08],.065,.04,E),o(T,0,-.69,-.18,.125,.05,.2,w);for(let C=-1;C<=1;C++)l(T,[C*.057,-.68,-.15],[C*.077,-.69,-.35],.025,.014,d,4),l(T,[C*.077,-.69,-.34],[C*.077,-.7,-.43],.027,.001,M,4);l(T,[b*.09,-.62,-.15],[b*.12,-.55,-.3],.045,.008,M,4);const P=new zt;P.position.set(b*.29,1.11,-.42),n.add(P),a.push(P),l(P,[0,0,0],[b*.065,-.17,-.12],.055,.04,d),l(P,[b*.065,-.17,-.12],[b*.02,-.22,-.31],.04,.027,E);for(let C=0;C<3;C++)l(P,[b*.02+(C-1)*.027,-.22,-.29],[b*.02+(C-1)*.035,-.27,-.4],.021,.001,M,4);for(let C=0;C<5;C++){const N=o(n,b*(.27+.035*Math.sin(C)),1.03-C*.035,-.31+C*.18,.055,.16,.065,w);N.rotation.z=b*.23;const O=o(n,b*.32,.88,-.2+C*.16,.032,.05,.07,E);O.rotation.z=b*.5}}const y=new zt;y.position.set(0,1.02,.6),n.add(y);for(let b=0;b<5;b++){const R=[Math.sin(b*.45)*.09,-b*.075,b*.31],x=[Math.sin((b+1)*.45)*.09,-(b+1)*.075,(b+1)*.31];l(y,R,x,.19-b*.034,Math.max(.005,.155-b*.034),d),b<4&&o(y,R[0],R[1]+.115-b*.02,R[2]+.15,.05,.095-b*.012,.07,w)}for(let b=0;b<7;b++){const R=c(n,0,1.24-b*.025,-.13+b*.14,.18-b*.007,w);R.rotation.x=.25}if(t){this.localBox(n,0,1.26,.05,.58,.14,.6,4274220),this.localBox(n,0,1.41,.25,.55,.27,.12,6574141);for(const b of[-1,1])this.localBox(n,b*.33,1.05,.08,.065,.5,.59,4274220),this.localBox(n,b*.39,.83,.11,.17,.08,.26,M),l(n,[b*.16,1.45,-.63],[b*.32,1.37,-.18],.014,.014,4274220,4)}return this.mergeMobParts(n),{root:n,legs:r,arms:a,head:i,tail:y,kind:e,dead:!1}}const h=e==="brute",f=e==="soldier",u=f?10587248:h?10121060:8820318,p=f?4809334:h?8075325:5135683,g=f?2108985:h?3942703:3556401,S=f?10268063:13943713,m=f?8426382:7897973;if(o(n,0,1.15,.025,h?.54:.34,.46,h?.31:.235,u),o(n,0,.78,.025,h?.4:.28,.22,.24,g),l(n,[0,1.4,0],[0,1.68,0],.15,.115,u),i.position.set(0,1.72,-.025),n.add(i),o(i,0,0,0,.215,.215,.205,u),f){for(const d of[-1,1]){const E=o(n,d*.167,1.3,-.157,.19,.245,.12,p);E.rotation.z=-d*.1,this.localBox(n,d*.26,.83,-.19,.13,.19,.13,g),this.localBox(n,d*.26,.89,-.27,.11,.055,.027,m),this.localBox(n,d*.135,.88,-.23,.12,.24,.1,p)}this.localBox(n,0,1.3,-.278,.095,.24,.055,m);for(let d=0;d<3;d++)this.localBox(n,0,1.08-d*.075,-.232,.37,.055,.07,p);this.localBox(n,0,.74,-.01,.62,.1,.44,g),this.localBox(n,0,.75,-.254,.1,.08,.035,m),this.localBox(n,0,1.22,.24,.37,.48,.19,g),this.localBox(n,0,1.28,.35,.23,.25,.06,p),o(i,0,.063,.016,.247,.235,.25,p),this.localBox(i,0,.01,-.22,.34,.13,.047,g),this.localBox(i,0,.027,-.251,.3,.073,.017,6613456,1731421),this.localBox(i,.105,.027,-.269,.047,.055,.017,16747605,7744016),o(i,0,-.1,-.193,.16,.088,.1,g);for(const d of[-1,1])l(i,[d*.108,-.111,-.207],[d*.108,-.111,-.286],.051,.047,m),o(i,d*.244,.01,.015,.046,.103,.115,g);l(i,[.215,.18,.06],[.217,.39,.06],.011,.008,g,4),this.localBox(n,-.135,1.39,-.279,.06,.1,.013,14981973)}else{o(n,-.14,1.32,-.13,.29,.29,.18,u),o(n,.2,1.12,-.17,.16,.27,.14,p);for(let d=0;d<4;d++)for(const E of[-1,1]){const w=l(n,[E*.035,1.36-d*.085,-.255],[E*(.21-d*.013),1.33-d*.085,-.205],.025,.018,S,5);w.rotation.z+=E*.07}l(n,[0,1.41,-.27],[0,1.03,-.275],.031,.026,g),this.localBox(n,-.2,1.38,.25,.14,.38,.11,m);for(let d=0;d<4;d++)o(n,-.2,1.47-d*.09,.316,.039,.033,.024,g);o(i,-.035,-.105,-.105,.185,.125,.17,u),this.localBox(i,-.018,-.061,-.222,.255,.142,.036,g);for(let d=0;d<5;d++)c(i,-.118+d*.047,-.11,-.243,.055+d%2*.023,S,Math.PI);for(const d of[-1,1]){const E=o(i,d*.112,.069,-.165,.103,.064,.086,p);E.rotation.z=-d*.2,this.localBox(i,d*.105,.027,-.213,.058,.051,.027,16738374,7085837)}this.localBox(i,-.195,-.002,-.04,.054,.19,.18,m);for(let d=0;d<3;d++)this.localBox(i,-.225,.06-d*.055,-.13,.016,.025,.03,g)}for(const d of[-1,1]){const E=new zt;if(E.position.set(d*(h?.31:.19),.69,0),n.add(E),r.push(E),l(E,[0,-.025,0],[0,-.31,.025],h?.16:.115,h?.13:.09,f?g:u),o(E,0,-.3,-.025,h?.145:.11,.11,.13,p),l(E,[0,-.32,.025],[0,-.58,-.01],h?.105:.075,.066,f?g:u),f||h)o(E,0,-.46,-.075,.12,.19,.083,p),this.localBox(E,0,-.27,-.136,.17,.14,.059,m),this.localBox(E,0,-.6,-.087,.24,.15,.35,g),this.localBox(E,0,-.652,-.1,.25,.038,.36,m);else{o(E,0,-.61,-.095,.13,.069,.2,p);for(let M=0;M<3;M++)l(E,[(M-1)*.068,-.625,-.18],[(M-1)*.078,-.651,-.32],.028,.001,S,4)}const w=new zt;if(w.position.set(d*(h?.55:.36),1.46,0),n.add(w),a.push(w),o(w,0,-.045,0,h?.225:.155,h?.19:.15,.195,p),l(w,[0,-.095,0],[d*.016,-.33,.009],h?.15:.092,.083,u),o(w,d*.016,-.33,.009,.1,.105,.11,g),l(w,[d*.016,-.35,.009],[0,-.57,-.073],.09,h?.115:.069,f||d<0?m:u),o(w,0,-.58,-.09,h?.14:.089,.12,.115,u),f)this.localBox(w,0,-.455,-.13,.15,.19,.042,p),this.localBox(w,0,-.36,-.114,.115,.06,.025,m);else{if(d<0)for(let y=0;y<3;y++)this.localBox(w,0,-.405-y*.055,-.108,.17,.03,.055,g);for(let y=0;y<3;y++)l(w,[(y-1)*.056,-.62,-.135],[(y-1)*.063,-.76,-.19],.027,.001,S,4);const M=c(w,d*.12,.082,0,h?.29:.22,S,-d*.65);M.rotation.x=.2}}if(f){const d=a[1];this.localBox(d,-.13,-.52,-.285,.16,.18,.42,g),this.localBox(d,-.13,-.42,-.31,.12,.025,.31,m),l(d,[-.13,-.5,-.45],[-.13,-.5,-.73],.041,.035,m,6),l(d,[-.13,-.5,-.72],[-.13,-.5,-.81],.046,.046,g,6),this.localBox(d,-.13,-.652,-.36,.09,.18,.14,p),this.localBox(d,-.13,-.37,-.35,.06,.075,.14,g),this.localBox(d,-.13,-.367,-.428,.035,.027,.011,6613456,1731421)}if(h){n.scale.setScalar(1.47);for(const d of[-1,1]){const E=o(n,d*.265,1.29,-.235,.275,.285,.12,p);E.rotation.z=-d*.18,this.localBox(n,d*.32,1.25,-.352,.035,.28,.032,m),o(n,d*.42,1.54,.035,.21,.14,.25,p),l(n,[d*.39,1.65,.15],[d*.43,1.88,.22],.053,.006,S,4)}this.localBox(n,0,1.2,-.305,.31,.36,.12,g),l(n,[0,1.2,-.365],[0,1.2,-.413],.106,.106,m,8),l(n,[0,1.2,-.418],[0,1.2,-.434],.076,.076,7897973,8),this.localBox(n,0,1.2,-.45,.12,.12,.022,6683806,1539133);for(let d=0;d<3;d++)this.localBox(n,0,.99-d*.074,-.28,.5,.049,.073,p);l(n,[-.3,1.03,.225],[-.3,1.5,.225],.095,.095,g),l(n,[.3,1.03,.225],[.3,1.5,.225],.095,.095,g),o(i,0,.093,.035,.245,.16,.22,p),this.localBox(i,0,.062,-.205,.35,.055,.039,m),this.localBox(i,0,-.166,-.138,.37,.055,.22,m);for(let d=0;d<4;d++)this.localBox(i,-.135+d*.09,-.172,-.253,.031,.048,.018,g)}return this.mergeMobParts(n),{root:n,legs:r,arms:a,head:i,kind:e,dead:!1}}buildPickup(e){const t=new zt,i={health:15383969,armor:4958644,ammo:12818757,keycard:7925405,evidence:13154182,revolver:11451569,shotgun:9149585,plasma:6547611,machinegun:7767941}[e];if(e==="health")this.localBox(t,0,0,0,.55,.34,.3,12898751),this.localBox(t,0,0,.16,.3,.08,.015,12992833),this.localBox(t,0,0,.161,.08,.27,.015,12992833);else if(e==="armor"){this.localBox(t,0,0,0,.45,.42,.24,i),this.localBox(t,0,.26,0,.22,.13,.2,9684915);for(const a of[-1,1])this.localBox(t,a*.27,.1,0,.1,.3,.22,i)}else if(e==="ammo"){this.localBox(t,0,0,0,.5,.3,.35,5859659);for(let a=0;a<4;a++)this.localBox(t,-.17+a*.115,.19,0,.055,.15,.065,i)}else if(e==="keycard")this.localBox(t,0,0,0,.35,.23,.02,8961178),this.localBox(t,0,.04,-.015,.33,.04,.02,2178355),this.localBox(t,.08,-.06,-.016,.07,.055,.02,15060343);else if(e==="evidence"){this.localBox(t,0,0,0,.42,.02,.48,i);for(let a=0;a<5;a++)this.localBox(t,0,.016,-.15+a*.07,.24,.009,.018,4806471)}else this.localBox(t,0,0,0,e==="revolver"?.35:.7,.13,.2,i),this.localBox(t,.27,0,0,.4,.06,.07,6584431),this.localBox(t,-.11,-.15,0,.12,.22,.12,4209714),e==="plasma"&&this.localBox(t,0,.07,-.105,.37,.06,.035,7993010,1333048);const r=new ct(new Pa(.28,.36,12),new dn({color:i,transparent:!0,opacity:.6,side:Xt}));return r.rotation.x=-Math.PI/2,r.position.y=-.43,t.add(r),t}resize(e){const t=e.resolution==="320"?320:640,n=e.resolution==="320"?200:400;this.renderer.setSize(t,n,!1),this.snapGrid.set(t/2,n/2);const i=this.canvas.getBoundingClientRect();this.camera.aspect=i.width&&i.height?i.width/i.height:1.6,this.camera.updateProjectionMatrix(),this.lastResolution=e.resolution;for(const r of this.lights)r.visible=e.quality==="high"}render(e,t,n){this.lastResolution!==n.resolution&&this.resize(n),this.clock+=t;const i=e.player,r=i.crouching?.9:i.mounted?2.6:1.65,a=e.status==="playing"?Math.sin(this.clock*(i.mounted?9:11))*(i.mounted?.025:.009):0;this.camera.position.set(i.x,i.y+r+a,i.z),this.camera.rotation.set(i.pitch+i.recoil*.012,i.yaw,0,"YXZ");for(const l of e.doors){const c=this.doorGroups.get(l.id);c&&(c.position.y=l.open*3.4)}for(const l of e.enemies){const c=this.enemyGroups.get(l.id);if(c.root.position.set(l.x,0,l.z),l.alive){c.root.rotation.y=Math.atan2(-(i.x-l.x),-(i.z-l.z)),c.root.rotation.z=0,c.root.position.y=0;const h=Math.sin(l.phase*6)*(l.alert?.72:.13);c.legs.forEach((f,u)=>f.rotation.x=h*(u%2?1:-1)),c.arms.forEach((f,u)=>{f.rotation.x=(c.kind==="soldier"?-.4:0)-h*(u%2?1:-1)*.5}),c.tail&&(c.tail.rotation.y=Math.sin(l.phase*3)*.18),c.head.rotation.z=l.hurt>0?Math.sin(this.clock*45)*.09:0,c.root.scale.y=(c.kind==="brute"?1.47:1)*(l.hurt>0?.94:1),c.dead=!1}else if(c.root.position.y=.1,c.root.rotation.z=Math.PI/2,c.root.rotation.x=.15,c.root.scale.y=c.kind==="brute"?1.47:1,!c.dead){const h=new ct(new Ca(c.kind==="brute"?1:.6,9),new dn({color:6822962,side:Xt}));h.rotation.x=-Math.PI/2,h.position.set(l.x,.018,l.z),this.scene.add(h),c.dead=!0}}for(const l of e.pickups){const c=this.pickupGroups.get(l.id);c.visible=!l.collected,c.visible&&(c.position.y=.48+Math.sin(this.clock*3+l.x)*.06,c.rotation.y=this.clock*.75)}this.mountGroup.visible=!i.mounted,this.mountGroup.position.set(e.mount.x,0,e.mount.z),this.mountLegs.forEach((l,c)=>l.rotation.x=Math.sin(this.clock*2+c*Math.PI)*.04),this.powerLamp&&this.powerLamp.material.color.setHex(e.powered?7602073:16737843);for(let l=0;l<this.lamps.length;l++)this.lamps[l].visible=Math.sin(this.clock*3+l*1.73)>0||l%4!==1||Math.sin(this.clock*31+l)>-.7;for(let l=0;l<this.hazmat.length;l++)this.hazmat[l].material.color.setRGB(.22+.04*Math.sin(this.clock*3),.48+.07*Math.sin(this.clock*2+l),.19);let o=0;for(const l of e.effects){const c=l.kind==="blood"?12334150:l.kind==="plasma"?7274401:l.kind==="smoke"?6585208:16765568,h=1-l.life/l.maxLife;for(let f=0;f<(l.kind==="muzzle"?3:7)&&o<128;f++){const u=l.kind==="smoke"?.32:l.kind==="plasma"?.06:.22;this.dummy.position.set(l.x+(st(f+l.x)-.5)*h*u*5+(l.dx??0)*h*.4,l.y+(st(f+l.z)-.3)*h*u*3,l.z+(st(f+13)-.5)*h*u*5+(l.dz??0)*h*.4),this.dummy.scale.setScalar(l.kind==="smoke"?1+h*4:Math.max(.25,1-h)),this.dummy.updateMatrix(),this.effectMesh.setMatrixAt(o,this.dummy.matrix),this.effectMesh.setColorAt(o,new ze(c)),o++}}this.effectMesh.count=o,this.effectMesh.instanceMatrix.needsUpdate=!0,this.effectMesh.instanceColor&&(this.effectMesh.instanceColor.needsUpdate=!0),this.renderer.render(this.scene,this.camera)}dispose(){const e=new Set;this.scene.traverse(t=>{t instanceof ct&&e.add(t.geometry)});for(const t of e)t.dispose();for(const t of this.mats.values())t.map?.dispose(),t.dispose();this.effectMat.dispose(),this.renderer.dispose()}}const En={revolver:{name:"Detective Revolver",damage:36,interval:.32,clip:6,range:58,reload:1.35,pellets:1,spread:.003},shotgun:{name:"Tactical Shotgun",damage:21,interval:.72,clip:8,range:27,reload:1.75,pellets:8,spread:.065},plasma:{name:"Plasma Rifle",damage:27,interval:.16,clip:30,range:48,reload:1.25,pellets:1,spread:.012},machinegun:{name:"Heavy Machine Gun",damage:19,interval:.085,clip:60,range:52,reload:2.1,pellets:1,spread:.026}},Tr=["revolver","shotgun","plasma","machinegun"],el={revolver:0,shotgun:0,plasma:0,machinegun:0},yi={raptor:{health:78,speed:3.6,damage:12,range:1.35,interval:1,height:1.65,radius:.42},soldier:{health:112,speed:1.65,damage:9,range:15,interval:1.35,height:1.95,radius:.43},mutant:{health:165,speed:2.5,damage:19,range:1.6,interval:1.2,height:2.25,radius:.55},brute:{health:460,speed:1.8,damage:29,range:2,interval:1.5,height:2.9,radius:.75}},Ut=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),jt=(s,e,t)=>Math.max(e,Math.min(t,s));class kl{constructor(e,t="normal"){this.level=e,this.resetState(t)}state;checkpointState=null;checkpointSecrets=[];reloading=null;attackWindups=new Map;secretDoors=new Set;hazardTime=0;seed=91271;jumpHeld=!1;emptyClick=0;resetState(e){const t=e==="easy"?.8:e==="hard"?1.18:1,n={...this.level.spawn,y:0,vy:0,yaw:0,pitch:0,health:100,armor:0,keycard:!1,evidence:0,mounted:!1,crouching:!1,grounded:!0,weapon:"revolver",owned:[],ammo:{...el},reserve:{...el},reload:0,cooldown:0,recoil:0,hurt:0};this.state={player:n,enemies:this.level.enemies.map(i=>({...i,health:Math.round(yi[i.kind].health*t),maxHealth:Math.round(yi[i.kind].health*t),alive:!0,alert:!1,cooldown:.7,hurt:0,phase:0,path:[],pathTime:0})),doors:this.level.doors.map(i=>({...i,open:0,target:0})),pickups:this.level.pickups.map(i=>({...i,collected:!1})),effects:[],status:"playing",kills:0,time:0,message:'ELIAS VANE: "Another night. Another extinction event." Find your revolver.',messageTime:5,powered:!1,checkpoint:!1,secrets:0,slow:1,events:[],mount:{...this.level.mount},difficulty:e},this.reloading=null,this.attackWindups.clear(),this.secretDoors.clear(),this.hazardTime=0,this.seed=91271,this.jumpHeld=!1,this.emptyClick=0}restart(e=!1){if(e&&!this.checkpointState){this.resetState(this.state.difficulty);const t=this.state,n=t.player;n.keycard=!0,n.owned=["revolver","shotgun","machinegun"],n.weapon="machinegun",n.health=100,n.armor=55;for(const i of n.owned)n.ammo[i]=En[i].clip,n.reserve[i]=En[i].clip*4;for(const i of t.pickups)i.z>-32.2&&i.kind!=="evidence"&&i.x>-13&&(i.collected=!0);for(const i of t.enemies)i.z>-32.2&&(i.alive=!1,i.health=0,t.kills++);for(const i of t.doors)["office","facility","security"].includes(i.id)&&(i.open=1,i.target=1);t.checkpoint=!0,this.checkpointState=structuredClone(t),this.checkpointSecrets=[]}if(e&&this.checkpointState){this.state=structuredClone(this.checkpointState);const t=this.state.player;t.x=this.level.checkpoint.x,t.z=this.level.checkpoint.z,t.y=0,t.vy=0,t.grounded=!0,t.mounted=!1,t.health=Math.max(t.health,75),t.armor=Math.max(t.armor,25),t.cooldown=0,t.reload=0,t.hurt=0,this.state.status="playing",this.state.effects=[],this.state.events=[],this.attackWindups.clear(),this.reloading=null,this.jumpHeld=!1,this.secretDoors=new Set(this.checkpointSecrets),this.hazardTime=0,this.emptyClick=0;for(const n of this.state.enemies)n.path=[],n.pathTime=0,n.cooldown=1.1;this.message("CHECKPOINT RESTORED — keycard secured. Enter the restricted laboratory.",4)}else this.checkpointState=null,this.checkpointSecrets=[],this.resetState(this.state.difficulty)}update(e,t){e=jt(e,0,.075);const n=this.state,i=n.player;if(n.status!=="playing")return;if(n.time+=e,n.messageTime=Math.max(0,n.messageTime-e),i.yaw+=t.lookX,i.pitch=jt(i.pitch+t.lookY,-1.22,1.22),i.cooldown=Math.max(0,i.cooldown-e),i.recoil=Math.max(0,i.recoil-e*4.6),i.hurt=Math.max(0,i.hurt-e*2),this.emptyClick=Math.max(0,this.emptyClick-e),i.reload>0&&(i.reload=Math.max(0,i.reload-e),i.reload===0&&this.reloading)){const a=this.reloading,o=Math.min(En[a].clip-i.ammo[a],i.reserve[a]);i.ammo[a]+=o,i.reserve[a]-=o,this.reloading=null}(t.weaponDelta||t.weaponSlot)&&this.switchWeapon(t.weaponDelta,t.weaponSlot||void 0),t.reload&&this.reload(),t.interact&&this.interact(),this.updateDoors(e),this.movePlayer(e,t),this.collectPickups(),t.fire&&this.fire();const r=t.slow&&n.slow>.015;n.slow=jt(n.slow+(r?-.17:.085)*e,0,1),this.updateEnemies(e*(r?.32:1)),this.updateHazards(e);for(const a of n.effects)a.life-=e;n.effects=n.effects.filter(a=>a.life>0).slice(-130),this.checkExit()}height(){return this.state.player.mounted?2.8:this.state.player.crouching?1:1.8}eyeHeight(){const e=this.state.player;return e.y+(e.mounted?2.6:e.crouching?.9:1.65)}canOccupy(e,t,n=.32,i=this.state.player.y){return this.state.player.mounted&&(t<-19.1||t>3.2)?!1:this.clearAt(e,t,n,i,this.height())}clearAt(e,t,n,i=0,r=1.8){const a=this.level.bounds;if(e-n<a.minX||e+n>a.maxX||t-n<a.minZ||t+n>a.maxZ)return!1;for(const o of this.level.walls){const l=o.y??0;if(!(i>=l+o.h-.025||i+r<=l+.025)&&this.circleBox(e,t,n,o.x,o.z,o.w,o.d))return!1}for(const o of this.state.doors)if(!(i+r<=o.open*3.4+.025)&&this.circleBox(e,t,n,o.x,o.z,o.w,o.d))return!1;return!0}circleBox(e,t,n,i,r,a,o){const l=jt(e,i-a/2,i+a/2),c=jt(t,r-o/2,r+o/2);return(e-l)**2+(t-c)**2<n*n}movePlayer(e,t){const n=this.state.player;t.crouch&&!n.mounted?n.crouching=!0:n.crouching&&(n.crouching=!1,this.canOccupy(n.x,n.z)||(n.crouching=!0));const i=jt(t.forward,-1,1),r=jt(t.strafe,-1,1),a=Math.max(1,Math.hypot(i,r)),o=n.mounted?8:n.crouching?2.3:t.sprint?6.4:4.4,l=(-Math.sin(n.yaw)*i+Math.cos(n.yaw)*r)*o*e/a,c=(-Math.cos(n.yaw)*i-Math.sin(n.yaw)*r)*o*e/a;n.mounted&&(n.z+c<-19.1||n.z+c>3.2)&&this.message("Your strider stays in the street. Press E to dismount and enter the building.",2);const h=Math.max(1,Math.ceil(Math.hypot(l,c)/.14)),f=n.mounted?.53:.32;for(let g=0;g<h;g++)this.canOccupy(n.x+l/h,n.z,f)&&(n.x+=l/h),this.canOccupy(n.x,n.z+c/h,f)&&(n.z+=c/h);t.jump&&!this.jumpHeld&&n.grounded&&!n.crouching&&(n.vy=n.mounted?6.4:6.1,n.grounded=!1),this.jumpHeld=t.jump,n.vy-=14*e;const u=n.y+n.vy*e;let p=0;if(n.vy<=0)for(const g of this.level.walls){const S=(g.y??0)+g.h;S<=n.y+.035&&S>=u&&this.circleBox(n.x,n.z,f,g.x,g.z,g.w,g.d)&&(p=Math.max(p,S))}n.vy<=0&&u<=p?(n.y=p,n.vy=0,n.grounded=!0):this.canOccupy(n.x,n.z,f,u)?(n.y=u,n.grounded=!1):n.vy>0&&(n.vy=0),n.mounted&&(this.state.mount.x=n.x,this.state.mount.z=n.z)}switchWeapon(e,t){const n=this.state.player;if(!n.owned.length)return;let i;if(t){if(i=Tr[jt(Math.round(t)-1,0,3)],!n.owned.includes(i)){this.message("Weapon not acquired yet.",1.5);return}}else{const r=Tr.filter(o=>n.owned.includes(o)),a=r.indexOf(n.weapon);i=r[(a+(e>0?1:-1)+r.length)%r.length]}i!==n.weapon&&(n.weapon=i,n.reload=0,n.cooldown=.22,n.recoil=.22,this.reloading=null,this.message(En[i].name,1.2))}reload(){const e=this.state.player,t=e.weapon,n=En[t];if(!(!e.owned.includes(t)||e.reload>0||e.ammo[t]>=n.clip)){if(e.reserve[t]<=0){this.message("No spare ammunition. Search the district.",1.6);return}this.reloading=t,e.reload=n.reload,this.state.events.push({type:"reload",weapon:t})}}fire(){const e=this.state.player;if(this.state.status!=="playing"||e.cooldown>0||e.reload>0)return;if(e.mounted){this.bite();return}if(!e.owned.includes(e.weapon)){this.message("Find your revolver in the office.",2);return}const t=En[e.weapon];if(e.ammo[e.weapon]<=0){e.reserve[e.weapon]>0?this.reload():this.emptyClick===0&&(this.message("EMPTY — change weapon or find ammunition.",2),this.emptyClick=.6);return}e.ammo[e.weapon]--,e.cooldown=t.interval,e.recoil=1,this.state.events.push({type:"shot",weapon:e.weapon}),this.effect("muzzle",e.x-Math.sin(e.yaw)*.5,e.z-Math.cos(e.yaw)*.5,this.eyeHeight()-.18,.07);for(let n=0;n<t.pellets;n++){const i=e.yaw+(this.random()-.5)*t.spread*2,r=e.pitch+(this.random()-.5)*t.spread*1.5,a=-Math.sin(i)*Math.cos(r),o=-Math.cos(i)*Math.cos(r),l=Math.sin(r),c=this.eyeHeight();let h=this.rayWalls(e.x,c,e.z,a,l,o,t.range),f=null;for(const S of this.state.enemies){if(!S.alive)continue;const m=yi[S.kind],d=this.rayEnemy(S,e.x,c,e.z,a,l,o,m.radius,m.height);d!==null&&d>=0&&d<h&&(h=d,f=S)}const u=e.x+a*h,p=e.z+o*h,g=c+l*h;if(f){const S=e.weapon==="shotgun"?Math.max(.35,1-h/42):1;this.damageEnemy(f,t.damage*S),this.effect("blood",u,p,g,.24)}else h<t.range&&this.effect("spark",u,p,g,.15);if(e.weapon==="plasma"){const S=Math.min(12,Math.ceil(h/1.5));for(let m=1;m<=S;m++){const d=h*m/S;this.effect("plasma",e.x+a*d,e.z+o*d,c+l*d,.14)}}}}bite(){const e=this.state.player;e.cooldown=.58,e.recoil=.7;let t=!1;for(const n of this.state.enemies){if(!n.alive||Ut(n,e)>3)continue;const i=n.x-e.x,r=n.z-e.z,a=Math.hypot(i,r);(-Math.sin(e.yaw)*i-Math.cos(e.yaw)*r)/Math.max(a,.1)>.35&&this.visible(e,n)&&(this.damageEnemy(n,95),this.effect("blood",n.x,n.z,1.1,.3),t=!0)}this.state.events.push({type:"enemy",message:t?"Strider bite":"Strider roar"})}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}rayEnemy(e,t,n,i,r,a,o,l,c){const h=t-e.x,f=i-e.z,u=r*r+o*o,p=2*(h*r+f*o),g=h*h+f*f-l*l,S=p*p-4*u*g;if(S<0||u<1e-7)return null;const m=(-p-Math.sqrt(S))/(2*u),d=(-p+Math.sqrt(S))/(2*u);if(d<0)return null;let E=Math.max(0,m),w=d;if(Math.abs(a)<1e-8){if(n<0||n>c)return null}else{let M=-n/a,y=(c-n)/a;M>y&&([M,y]=[y,M]),E=Math.max(E,M),w=Math.min(w,y)}return E<=w?E:null}rayWalls(e,t,n,i,r,a,o){let l=o;for(const c of this.level.walls){const h=this.rayBox(e,t,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.y??0,(c.y??0)+c.h,c.z-c.d/2,c.z+c.d/2);h!==null&&h<l&&(l=h)}for(const c of this.state.doors){if(c.open>=.995)continue;const h=this.rayBox(e,t,n,i,r,a,c.x-c.w/2,c.x+c.w/2,c.open*3.4,3.4+c.open*3.4,c.z-c.d/2,c.z+c.d/2);h!==null&&h<l&&(l=h)}return l}rayBox(e,t,n,i,r,a,o,l,c,h,f,u){let p=0,g=1/0;const S=[e,t,n],m=[i,r,a],d=[o,c,f],E=[l,h,u];for(let w=0;w<3;w++){if(Math.abs(m[w])<1e-8){if(S[w]<d[w]||S[w]>E[w])return null;continue}let M=(d[w]-S[w])/m[w],y=(E[w]-S[w])/m[w];if(M>y&&([M,y]=[y,M]),p=Math.max(p,M),g=Math.min(g,y),p>g)return null}return g<0?null:p}visible(e,t,n=1.2){const i=Ut(e,t);return i<.001?!0:this.rayWalls(e.x,n,e.z,(t.x-e.x)/i,0,(t.z-e.z)/i,i)>=i-.1}enemySees(e){const t=this.state.player,n=yi[e.kind].height*.74,i=this.eyeHeight(),r=t.x-e.x,a=i-n,o=t.z-e.z,l=Math.hypot(r,a,o);return l<.001?!0:this.rayWalls(e.x,n,e.z,r/l,a/l,o/l,l)>=l-.1}damageEnemy(e,t){if(e.health-=t,e.hurt=1,e.alert=!0,e.health>0)return;e.health=0,e.alive=!1,e.path=[],this.attackWindups.delete(e.id),this.state.kills++,this.state.events.push({type:"kill"}),this.effect("blood",e.x,e.z,.7,.5);const n=this.state.player;n.reserve.revolver+=2,n.reserve.plasma+=2,n.reserve.machinegun+=3,e.kind==="brute"&&this.message("Containment beast neutralized. Restore the elevator power.",3)}updateDoors(e){for(const t of this.state.doors){const n=Math.sign(t.target-t.open);if(n!==0){if(n<0&&Ut(t,this.state.player)<1.4){t.target=1;continue}t.open=jt(t.open+n*e*1.3,0,1)}}}interact(){const e=this.state,t=e.player;if(e.status!=="playing")return;if(t.mounted){const r=[{x:t.x+Math.cos(t.yaw)*1.1,z:t.z-Math.sin(t.yaw)*1.1},{x:t.x-Math.cos(t.yaw)*1.1,z:t.z+Math.sin(t.yaw)*1.1},{x:t.x,z:t.z+1.2}].find(a=>this.clearAt(a.x,a.z,.32,0,1.8));if(!r){this.message("No room to dismount. Move into the street.",2);return}t.mounted=!1,t.x=r.x,t.z=r.z,t.y=0,t.vy=0,e.events.push({type:"mount"}),this.message("Dismounted. Your strider will wait here.",2);return}if(Ut(t,this.level.switch)<2.5){e.powered?this.message("Power online. The industrial lift is ready.",2):(e.powered=!0,e.events.push({type:"door"}),this.message("ELEVATOR POWER RESTORED — eliminate the laboratory threats and reach the lift.",4));return}if(Ut(t,e.mount)<2.6&&t.z>-19){t.mounted=!0,t.crouching=!1,e.mount.x=t.x,e.mount.z=t.z,e.events.push({type:"mount"}),this.message("STRIDER MOUNTED — faster movement. Fire to bite; E to dismount. Street area only.",4);return}const n=e.doors.filter(i=>Ut(t,i)<2.9).sort((i,r)=>Ut(i,t)-Ut(r,t));if(n.length){const i=n[0];if(t.mounted&&i.id==="facility"){this.message("Dismount before entering the research facility.",2);return}if(i.locked&&!t.keycard){this.message("RESTRICTED — find the security keycard in the guard room.",3);return}if(i.id==="elevator"){if(!e.powered){this.message("LIFT OFFLINE — restore power at the laboratory switch.",3);return}if(this.finalThreats()>0){this.message(`${this.finalThreats()} laboratory threats remain. Clear containment before extraction.`,3);return}}i.target=i.target>.5?0:1,e.events.push({type:"door"}),i.secret&&!this.secretDoors.has(i.id)?(this.secretDoors.add(i.id),e.secrets++,this.message("SECRET FOUND — the city still keeps a few things off the record.",3)):this.message(`${i.label}: ${i.target?"opening":"closing"}.`,1.6);return}if(Ut(t,this.level.exit)<3){this.checkExit(),e.powered||this.message("Restore elevator power first.",2);return}this.collectPickups(),this.message(t.keycard?"Find the laboratory power switch, then clear the lift route.":"Search the security wing for a keycard.",2)}collectPickups(){const e=this.state,t=e.player;for(const n of e.pickups)if(!(n.collected||Ut(n,t)>1.1||t.y>1.5||!this.visible(t,n,.45))&&!(n.kind==="health"&&t.health>=100||n.kind==="armor"&&t.armor>=100))if(n.collected=!0,e.events.push({type:"pickup"}),Tr.includes(n.kind)){const i=n.kind,r=!t.owned.includes(i);r&&t.owned.push(i),t.ammo[i]=En[i].clip,t.reserve[i]+=En[i].clip*(i==="revolver"?8:3),r&&(t.weapon=i,t.reload=0,this.reloading=null,t.cooldown=.15,t.recoil=.2),this.message(`${En[i].name.toUpperCase()} ACQUIRED — ${t.ammo[i]} loaded.`,2.5)}else n.kind==="health"?(t.health=Math.min(100,t.health+38),this.message("MEDKIT +38 HEALTH",1.6)):n.kind==="armor"?(t.armor=Math.min(100,t.armor+55),this.message("BODY ARMOR +55",1.6)):n.kind==="ammo"?(t.reserve.revolver+=24,t.reserve.shotgun+=16,t.reserve.plasma+=45,t.reserve.machinegun+=80,this.message("AMMUNITION CACHE — supplies replenished.",2)):n.kind==="evidence"?(t.evidence++,this.message("EVIDENCE RECOVERED — AXIOM / LAZARUS: Mara Vale warned us. Human trials authorized.",3.5)):n.kind==="keycard"&&(t.keycard=!0,e.checkpoint=!0,this.message("SECURITY KEYCARD ACQUIRED — CHECKPOINT SAVED. Unlock the laboratory.",4),e.events.push({type:"checkpoint"}),this.checkpointState=structuredClone(e),this.checkpointState.events=[],this.checkpointSecrets=[...this.secretDoors])}finalThreats(){return this.state.enemies.filter(e=>e.alive&&(this.level.enemies.find(t=>t.id===e.id)?.z??e.z)<-32).length}checkExit(){const e=this.state;Ut(e.player,this.level.exit)>1.5||e.status!=="playing"||!e.powered||this.finalThreats()>0||(e.status="complete",e.events.push({type:"complete"}),e.player.reload=0,this.message("NEON DISTRICT CLEARED — Elias Vane lives to investigate another night.",99))}updateEnemies(e){const t=this.state.player,n=this.state.difficulty,i=n==="easy"?13:17;for(const r of this.state.enemies){if(!r.alive)continue;const a=yi[r.kind],o=Ut(r,t);if(r.hurt=Math.max(0,r.hurt-e*3.3),r.cooldown=Math.max(0,r.cooldown-e),r.pathTime-=e,!r.alert&&o<i&&this.enemySees(r)&&(r.alert=!0),!r.alert){r.phase+=e*.6;continue}const l=this.attackWindups.get(r.id);if(l!==void 0){const S=l-e;if(S<=0){if(this.attackWindups.delete(r.id),this.enemySees(r)&&o<a.range+(r.kind==="soldier"?2:.55))if(r.kind==="soldier"){this.effect("muzzle",r.x,r.z,1.4,.12);const m=n==="easy"?.55:n==="hard"?.88:.72;this.random()<m&&this.hurtPlayer(a.damage),this.effect("spark",t.x,t.z,Math.min(1.65,this.eyeHeight()),.1)}else this.hurtPlayer(a.damage),this.effect("blood",t.x,t.z,.65,.17);r.cooldown=a.interval*(n==="hard"?.8:n==="easy"?1.2:1)}else this.attackWindups.set(r.id,S);continue}const c=this.enemySees(r);if(o<a.range&&c&&r.cooldown<=0){this.attackWindups.set(r.id,r.kind==="soldier"?.42:.32),this.state.events.push({type:"enemy",message:r.kind==="soldier"?"Enemy charging shot":"Predator attacking"}),r.kind==="soldier"&&this.effect("plasma",r.x,r.z,1.65,.4);continue}if(r.kind==="soldier"&&c&&o<9)continue;let h=t;if(!c||!this.clearAt(r.x+(t.x-r.x)/Math.max(o,.01)*.7,r.z+(t.z-r.z)/Math.max(o,.01)*.7,a.radius,0,a.height))if(r.pathTime<=0&&(r.path=this.findPath(r,t,a.radius,Math.min(a.height,1.8)),r.pathTime=.8+this.random()*.25),r.path.length){for(;r.path.length&&Ut(r,r.path[0])<.4;)r.path.shift();r.path.length&&(h=r.path[0])}else continue;const f=Ut(r,h);if(f<.01)continue;const u=a.speed*(n==="easy"?.88:n==="hard"?1.12:1)*(r.hurt>0?.42:1);let p=(h.x-r.x)/f*u*e,g=(h.z-r.z)/f*u*e;for(const S of this.state.enemies){if(S===r||!S.alive)continue;const m=Ut(r,S),d=a.radius+yi[S.kind].radius;m>.01&&m<d&&(p+=(r.x-S.x)/m*(d-m)*e*2,g+=(r.z-S.z)/m*(d-m)*e*2)}o<Math.max(.65,a.radius+.35)||(this.clearAt(r.x+p,r.z,a.radius,0,a.height)&&(r.x+=p),this.clearAt(r.x,r.z+g,a.radius,0,a.height)&&(r.z+=g),r.phase+=e*u*3)}}findPath(e,t,n,i){const r=this.level.bounds,a=.9,o=Math.ceil((r.maxX-r.minX)/a),l=Math.ceil((r.maxZ-r.minZ)/a),c=C=>({x:jt(Math.floor((C.x-r.minX)/a),0,o-1),z:jt(Math.floor((C.z-r.minZ)/a),0,l-1)}),h=c(e),f=c(t),u=(C,N)=>N*o+C,p=C=>({x:r.minX+(C%o+.5)*a,z:r.minZ+(Math.floor(C/o)+.5)*a}),g=u(h.x,h.z),S=u(f.x,f.z),m=[g],d=new Map,E=new Map([[g,0]]),w=new Set,M=C=>Math.abs(C%o-f.x)+Math.abs(Math.floor(C/o)-f.z);let y=-1,b=g,R=M(g),x=0;for(;m.length&&x++<1900;){let C=0,N=1/0;for(let V=0;V<m.length;V++){const ne=(E.get(m[V])??1/0)+M(m[V]);ne<N&&(N=ne,C=V)}const O=m.splice(C,1)[0];if(w.has(O))continue;w.add(O);const U=M(O);if(U<R&&(R=U,b=O),O===S){y=O;break}const G=O%o,$=Math.floor(O/o);for(const[V,ne]of[[1,0],[-1,0],[0,1],[0,-1]]){const X=G+V,Q=$+ne;if(X<0||X>=o||Q<0||Q>=l)continue;const j=u(X,Q);if(w.has(j))continue;const Te=p(j);if(j!==S&&!this.clearAt(Te.x,Te.z,n,0,i))continue;const Se=(E.get(O)??0)+1;Se>=(E.get(j)??1/0)||(E.set(j,Se),d.set(j,O),m.includes(j)||m.push(j))}}if(y===-1){if(b===g)return[];y=b}const T=[];let P=y;for(;P!==g&&d.has(P);)T.push(p(P)),P=d.get(P);return T.reverse()}hurtPlayer(e){const t=this.state,n=t.player;if(t.status!=="playing")return;e*=t.difficulty==="easy"?.65:t.difficulty==="hard"?1.22:1,n.mounted&&(e*=.65);const i=Math.min(n.armor,e*.65);n.armor-=i,n.health=Math.max(0,n.health-(e-i)),n.hurt=1,t.events.push({type:"hurt"}),n.health<=0&&(t.status="dead",n.reload=0,this.message("ELIAS VANE IS DOWN. The city keeps its secrets.",99))}updateHazards(e){const t=this.state.player;t.y<.45&&this.level.hazards.some(i=>Math.abs(t.x-i.x)<i.w/2&&Math.abs(t.z-i.z)<i.d/2)?(this.hazardTime+=e,this.hazardTime>.65&&(this.hazardTime=0,this.hurtPlayer(12),this.message("TOXIC SPILL — move clear of the green waste.",1.5))):this.hazardTime=0}effect(e,t,n,i,r){this.state.effects.push({kind:e,x:t,z:n,y:i,life:r,maxLife:r})}message(e,t){this.state.message===e&&this.state.messageTime>.1||(this.state.message=e,this.state.messageTime=t,this.state.events.push({type:"message",message:e}))}}const w0={forward:0,strafe:0,lookX:0,lookY:0,fire:!1,sprint:!1,crouch:!1,jump:!1,interact:!1,reload:!1,weaponDelta:0,weaponSlot:0,slow:!1};class R0{constructor(e,t){this.canvas=e,this.onPause=t,document.addEventListener("keydown",n=>{if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLSelectElement)&&this.enabled){if(["Escape","KeyP"].includes(n.code)){n.preventDefault(),n.stopImmediatePropagation(),n.repeat||this.onPause();return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","ControlRight","Tab"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.repeat||(n.code==="Space"&&(this.pending.jump=!0),n.code==="KeyE"&&(this.pending.interact=!0),n.code==="KeyR"&&(this.pending.reload=!0),/^Digit[1-4]$/.test(n.code)&&(this.pending.weaponSlot=Number(n.code.slice(-1))))}}),document.addEventListener("keyup",n=>this.keys.delete(n.code)),document.addEventListener("mousemove",n=>{this.enabled&&document.pointerLockElement===this.canvas&&(this.mouseX+=n.movementX,this.mouseY+=n.movementY)}),this.canvas.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType==="touch"||n.button===0&&(this.mouseFire=!0,this.pending.fire=!0,this.capture())}),document.addEventListener("mouseup",n=>{n.button===0&&(this.mouseFire=!1)}),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===this.canvas,i=this.wasLocked&&!n;this.wasLocked=n,n||(this.clear(),i&&this.enabled&&!this.releasing&&this.onPause(),this.releasing=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),this.canvas.addEventListener("wheel",n=>{this.enabled&&(n.preventDefault(),this.pending.weaponDelta=(this.pending.weaponDelta??0)+Math.sign(n.deltaY))},{passive:!1}),window.addEventListener("blur",()=>{this.clear(),this.enabled&&this.onPause()}),this.installTouch()}enabled=!1;sensitivity=1;keys=new Set;pending={};mouseX=0;mouseY=0;mouseFire=!1;wasLocked=!1;releasing=!1;touchMove={x:0,y:0};touchFire=!1;touchSprint=!1;stick=null;stickPointer=-1;lookPointer=-1;stickOrigin={x:0,y:0};lastLook={x:0,y:0};read(){const e=(...n)=>n.some(i=>this.keys.has(i)),t=this.enabled?{forward:Math.max(-1,Math.min(1,Number(e("KeyW","ArrowUp"))-Number(e("KeyS","ArrowDown"))-this.touchMove.y)),strafe:Math.max(-1,Math.min(1,Number(e("KeyD"))-Number(e("KeyA"))+this.touchMove.x)),lookX:-this.mouseX*.0024*this.sensitivity+(Number(e("ArrowLeft"))-Number(e("ArrowRight")))*.035,lookY:-this.mouseY*.0024*this.sensitivity,fire:this.mouseFire||this.touchFire||!!this.pending.fire,sprint:e("ShiftLeft","ShiftRight")||this.touchSprint,crouch:e("ControlLeft","ControlRight","KeyC"),jump:!!this.pending.jump,interact:!!this.pending.interact,reload:!!this.pending.reload,weaponDelta:this.pending.weaponDelta??0,weaponSlot:this.pending.weaponSlot??0,slow:e("KeyQ")}:{...w0};return this.mouseX=0,this.mouseY=0,this.pending={},t}capture(){if(!(!this.enabled||matchMedia("(pointer: coarse)").matches||document.pointerLockElement===this.canvas)){this.releasing=!1,this.canvas.focus({preventScroll:!0});try{const e=this.canvas.requestPointerLock?.();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}}release(){this.releasing=!0,this.clear(),document.pointerLockElement===this.canvas?document.exitPointerLock():this.releasing=!1}clear(){this.keys.clear(),this.pending={},this.mouseX=this.mouseY=0,this.mouseFire=this.touchFire=this.touchSprint=!1,this.touchMove={x:0,y:0},this.stickPointer=this.lookPointer=-1,this.stick&&(this.stick.style.transform="")}installTouch(){const e=document.querySelector("#touch-controls");if(!e)return;e.innerHTML='<div class="touch-look" aria-label="Drag to aim"></div><div class="touch-stick" aria-label="Movement joystick"><i></i><span>MOVE</span></div><div class="touch-actions"><button data-action="fire" class="touch-fire" aria-label="Fire">FIRE</button><button data-action="interact" aria-label="Interact or ride">E</button><button data-action="jump" aria-label="Jump">JUMP</button><button data-action="reload" aria-label="Reload">R</button><button data-action="weapon" aria-label="Next weapon">GUN</button><button data-action="sprint" aria-label="Hold to sprint">RUN</button></div><button class="touch-pause" data-action="pause" aria-label="Pause">Ⅱ</button>';const t=e.querySelector(".touch-stick");this.stick=t.querySelector("i"),t.addEventListener("pointerdown",a=>{!this.enabled||this.stickPointer>=0||(a.preventDefault(),this.stickPointer=a.pointerId,this.stickOrigin={x:a.clientX,y:a.clientY},t.setPointerCapture(a.pointerId))}),t.addEventListener("pointermove",a=>{if(!this.enabled||a.pointerId!==this.stickPointer)return;const o=a.clientX-this.stickOrigin.x,l=a.clientY-this.stickOrigin.y,c=Math.hypot(o,l),h=38,f=c>h?h/c:1;this.touchMove={x:o*f/h,y:l*f/h},this.stick&&(this.stick.style.transform=`translate(${o*f}px,${l*f}px)`)});const n=a=>{a.pointerId===this.stickPointer&&(this.touchMove={x:0,y:0},this.stickPointer=-1,this.stick&&(this.stick.style.transform=""))};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n);const i=e.querySelector(".touch-look");i.addEventListener("pointerdown",a=>{!this.enabled||this.lookPointer>=0||(this.lookPointer=a.pointerId,this.lastLook={x:a.clientX,y:a.clientY},i.setPointerCapture(a.pointerId))}),i.addEventListener("pointermove",a=>{!this.enabled||a.pointerId!==this.lookPointer||(this.mouseX+=(a.clientX-this.lastLook.x)*1.6,this.mouseY+=(a.clientY-this.lastLook.y)*1.6,this.lastLook={x:a.clientX,y:a.clientY})});const r=a=>{a.pointerId===this.lookPointer&&(this.lookPointer=-1)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),e.querySelectorAll("button").forEach(a=>{a.addEventListener("pointerdown",l=>{if(this.enabled)switch(l.preventDefault(),a.setPointerCapture(l.pointerId),a.classList.add("held"),a.dataset.action){case"fire":this.touchFire=!0,this.pending.fire=!0;break;case"sprint":this.touchSprint=!0;break;case"interact":this.pending.interact=!0;break;case"jump":this.pending.jump=!0;break;case"reload":this.pending.reload=!0;break;case"weapon":this.pending.weaponDelta=1;break;case"pause":this.onPause();break}});const o=()=>{a.classList.remove("held"),a.dataset.action==="fire"&&(this.touchFire=!1),a.dataset.action==="sprint"&&(this.touchSprint=!1)};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o)})}}const tl="fossil-noir-3d-settings",Es={sensitivity:1,resolution:"640",quality:"high",volume:.5,difficulty:"normal"},C0={revolver:"DETECTIVE REVOLVER",shotgun:"TACTICAL SHOTGUN",plasma:"PLASMA RIFLE",machinegun:"HEAVY MACHINE GUN"};class P0{constructor(e){this.callbacks=e,this.settings=this.loadSettings(),this.overlay.addEventListener("click",n=>{const i=n.target.closest("button[data-action]");if(!(!i||i.disabled))switch(i.dataset.action){case"start":e.start(!1);break;case"continue":e.start(!0);break;case"resume":e.resume();break;case"retry":e.restart(!1);break;case"checkpoint":e.restart(!0);break;case"menu":e.menu();break;case"controls":this.panel="controls",this.render();break;case"settings":this.panel="settings",this.render();break;case"back":this.panel="main",this.render();break}}),this.overlay.addEventListener("input",n=>{const i=n.target;if(!i.dataset.setting)return;const r=i.dataset.setting,a=["sensitivity","volume"].includes(r)?Number(i.value):i.value;this.settings=this.validateSettings({...this.settings,[r]:a});try{localStorage.setItem(tl,JSON.stringify(this.settings))}catch{}this.callbacks.settings({...this.settings}),r==="sensitivity"&&(this.overlay.querySelector("#sensitivity-value").textContent=`${this.settings.sensitivity.toFixed(1)}×`),r==="volume"&&(this.overlay.querySelector("#volume-value").textContent=`${Math.round(this.settings.volume*100)}%`)}),document.addEventListener("keydown",n=>{this.screen!=="playing"&&n.code==="Escape"&&(n.preventDefault(),this.panel!=="main"?(this.panel="main",this.render()):this.screen==="pause"&&e.resume())});const t=document.createElement("button");t.className="desktop-pause",t.setAttribute("aria-label","Pause mission"),t.textContent="Ⅱ",t.addEventListener("click",()=>e.pause()),document.querySelector("#game").appendChild(t),this.show("menu")}settings;screen="menu";panel="main";state;overlay=document.querySelector("#menu-overlay");cached=new Map;show(e){this.screen=e,this.panel="main",document.body.classList.toggle("playing",e==="playing"),document.body.dataset.screen=e,this.overlay.hidden=e==="playing",e!=="playing"&&this.render()}update(e){this.state=e;const t=e.player;this.write("hud-health",String(Math.max(0,Math.ceil(t.health))).padStart(3,"0")),this.write("hud-armor",String(Math.max(0,Math.ceil(t.armor))).padStart(3,"0")),this.write("hud-ammo",t.reload>0?"LOAD":String(t.ammo[t.weapon]).padStart(2,"0")),this.write("hud-reserve",`/ ${String(t.reserve[t.weapon]).padStart(3,"0")}`),this.write("hud-weapon",t.owned.includes(t.weapon)?C0[t.weapon]:"MECHANICAL ARM"),this.write("hud-kills",`${e.kills} / ${e.enemies.length}`),this.write("hud-mode",t.mounted?"STRIDER MOUNTED":`FOCUS ${Math.round(e.slow*100)}%`);const n=document.querySelector("#hud-key");n.classList.toggle("acquired",t.keycard),n.querySelector("b").textContent=t.keycard?"■":"—",document.querySelector("#health-bar").style.width=`${Math.max(0,Math.min(100,t.health))}%`,document.querySelector("#armor-bar").style.width=`${Math.max(0,Math.min(100,t.armor))}%`,document.querySelector(".health-stat").classList.toggle("critical",t.health<=25),document.querySelector("#game").style.setProperty("--hurt",String(Math.min(.68,t.hurt*.7)));const i=t.owned.length?!t.keycard&&t.z>=-19?"REACH THE AXIOM FACILITY":t.keycard?e.powered?"REACH THE INDUSTRIAL ELEVATOR":"ENTER THE LAB · RESTORE ELEVATOR POWER":"FIND THE SECURITY KEYCARD":"FIND YOUR REVOLVER";this.write("objective",i),this.write("message",e.messageTime>0?e.message:"");let r="";const a=e.doors.find(o=>Math.hypot(o.x-t.x,o.z-t.z)<3.2);t.mounted?r="E · DISMOUNT STRIDER":Math.hypot(e.mount.x-t.x,e.mount.z-t.z)<2.8?r="E · RIDE STRIDER":!e.powered&&Math.hypot(Ft.switch.x-t.x,Ft.switch.z-t.z)<2.5?r="E · RESTORE ELEVATOR POWER":Math.hypot(Ft.exit.x-t.x,Ft.exit.z-t.z)<3?r=e.powered?"ENTER THE LIFT TO EXTRACT":"ELEVATOR POWER REQUIRED":a&&(r=a.locked&&!t.keycard?"SECURITY KEYCARD REQUIRED":`E · ${a.target>0?"CLOSE":"OPEN"} ${a.label.toUpperCase()}`),this.write("interaction",r),document.querySelector("#crosshair").classList.toggle("firing",t.recoil>.1)}setError(e){const t=document.querySelector("#error");t.textContent=e,t.hidden=!e}write(e,t){if(this.cached.get(e)===t)return;this.cached.set(e,t);const n=document.getElementById(e);n&&(n.textContent=t)}hasCheckpoint(){if(this.state?.checkpoint)return!0;try{return!!localStorage.getItem("fossil-noir-3d-checkpoint")}catch{return!1}}render(){const e=this.hasCheckpoint(),t=this.panel==="main",n=this.screen==="menu";let i="",r="";if(this.panel==="controls")r="FIELD MANUAL",i='<div class="controls-grid"><span>MOVE</span><kbd>W A S D</kbd><span>AIM / FIRE</span><kbd>MOUSE / LEFT CLICK</kbd><span>SPRINT / JUMP</span><kbd>SHIFT / SPACE</kbd><span>CROUCH</span><kbd>CTRL / C</kbd><span>INTERACT / RIDE</span><kbd>E</kbd><span>RELOAD</span><kbd>R</kbd><span>CHANGE WEAPON</span><kbd>1–4 / MOUSE WHEEL</kbd><span>BULLET TIME</span><kbd>HOLD Q</kbd><span>PAUSE</span><kbd>ESC / P</kbd></div><p class="field-note">Click the game to capture your mouse. Esc releases it. Collect weapons, ammunition, armor and medical kits by walking over them.</p><p class="field-note">TOUCH: left joystick to move; drag the right side to aim. Hold FIRE or RUN. Tap E for doors, switches and the rideable raptor.</p><button data-action="back" class="menu-button">← BACK</button>';else if(this.panel==="settings")r="SYSTEM SETUP",i=`<div class="settings-grid"><label for="sensitivity">MOUSE SENSITIVITY <output id="sensitivity-value">${this.settings.sensitivity.toFixed(1)}×</output></label><input id="sensitivity" data-setting="sensitivity" type="range" min="0.3" max="2.5" step="0.1" value="${this.settings.sensitivity}"><label for="resolution">RETRO RESOLUTION</label><select id="resolution" data-setting="resolution"><option value="320" ${this.settings.resolution==="320"?"selected":""}>320 × 200 — CLASSIC</option><option value="640" ${this.settings.resolution==="640"?"selected":""}>640 × 400 — SHARP</option></select><label for="quality">EFFECTS QUALITY</label><select id="quality" data-setting="quality"><option value="low" ${this.settings.quality==="low"?"selected":""}>LOW</option><option value="high" ${this.settings.quality==="high"?"selected":""}>HIGH</option></select><label for="volume">SOUND VOLUME <output id="volume-value">${Math.round(this.settings.volume*100)}%</output></label><input id="volume" data-setting="volume" type="range" min="0" max="1" step="0.05" value="${this.settings.volume}"><label for="difficulty">DIFFICULTY</label><select id="difficulty" data-setting="difficulty"><option value="easy" ${this.settings.difficulty==="easy"?"selected":""}>EASY — NIGHT SHIFT</option><option value="normal" ${this.settings.difficulty==="normal"?"selected":""}>NORMAL — HARD BOILED</option><option value="hard" ${this.settings.difficulty==="hard"?"selected":""}>HARD — EXTINCTION</option></select></div><p class="field-note">Difficulty applies when starting or restarting a mission. Your settings are saved automatically.</p><button data-action="back" class="menu-button">← BACK</button>`;else if(n)i=`<button data-action="start" class="menu-button primary"><span>▶</span> START MISSION</button><button data-action="continue" class="menu-button" ${e?"":"disabled"}>CONTINUE CHECKPOINT</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><a class="original-link" href="../">↗ PLAY THE ORIGINAL 2D GAME</a>`;else if(this.screen==="pause")r="MISSION PAUSED",i=`<p class="pause-quote">“Even the end of the world can wait a minute.”</p><button data-action="resume" class="menu-button primary">▶ RESUME MISSION</button>${e?'<button data-action="checkpoint" class="menu-button">RESTART CHECKPOINT</button>':""}<button data-action="retry" class="menu-button">RESTART MISSION</button><button data-action="controls" class="menu-button">CONTROLS</button><button data-action="settings" class="menu-button">SETTINGS</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="dead")r="CASE CLOSED",i=`<p class="pause-quote">“The city finally got its pound of flesh.”</p><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0}</b></div>${e?'<button data-action="checkpoint" class="menu-button primary">▶ RETRY CHECKPOINT</button>':""}<button data-action="retry" class="menu-button ${e?"":"primary"}">RESTART MISSION</button><button data-action="menu" class="menu-button">MAIN MENU</button>`;else if(this.screen==="complete"){r="DISTRICT SURVIVED";const a=Math.floor(this.state?.time??0);i=`<p class="pause-quote">“Lazarus was never about bringing people back.”</p><div class="results"><div class="result-line"><span>MISSION TIME</span><b>${Math.floor(a/60)}:${String(a%60).padStart(2,"0")}</b></div><div class="result-line"><span>HOSTILES NEUTRALIZED</span><b>${this.state?.kills??0} / ${this.state?.enemies.length??0}</b></div><div class="result-line"><span>SECRETS DISCOVERED</span><b>${this.state?.secrets??0}</b></div><div class="result-line"><span>EVIDENCE RECOVERED</span><b>${this.state?.player.evidence??0}</b></div></div><button data-action="retry" class="menu-button primary">▶ PLAY AGAIN</button><button data-action="menu" class="menu-button">MAIN MENU</button>`}this.overlay.innerHTML=`<div class="menu-scroll"><div class="menu-topline"><span>PRIVATE INVESTIGATION / FILE 0001</span><span>VESPER CITY · 2091</span></div><div class="menu-columns ${n&&t?"title-screen":"subscreen"}"><section class="menu-panel"><div class="brand ${n&&t?"":"brand-small"}"><div class="brand-kicker">ELIAS VANE RETURNS IN</div><h1>FOSSIL<span>NOIR<em>3D</em></span></h1><div class="brand-rule"></div></div>${r?`<h2 class="panel-title">${r}</h2>`:'<p class="tagline">The city died. The dinosaurs didn’t.</p>'}<div class="menu-actions">${i}</div></section>${n&&t?'<aside class="case-file"><div class="file-tab">CASE FILE <b>01</b></div><h2>THE NEON<br>DISTRICT</h2><div class="file-subject">SUBJECT: PROJECT LAZARUS</div><p>Mara is missing. Axiom’s experiments are loose. And someone paid an army to keep you out.</p><p>You are <strong>Elias Vane</strong>. Cowboy hat. Eyepatch. Mechanical arm. One very bad night.</p><div class="case-route"><span>01 / ARM UP</span><span>02 / BREACH AXIOM</span><span>03 / FIND THE KEYCARD</span><span>04 / MAKE IT OUT ALIVE</span></div><div class="file-stamp">STATUS: OPEN</div></aside>':""}</div><div class="menu-bottomline"><span>RETRO FPS / CHAPTER ONE</span><span>${n?"KEYBOARD + MOUSE · TOUCH SUPPORTED":"ELIAS VANE / FOSSIL NOIR"}</span></div></div>`,requestAnimationFrame(()=>this.overlay.querySelector('button.primary, button[data-action="back"]')?.focus({preventScroll:!0}))}loadSettings(){try{const e=localStorage.getItem(tl);return this.validateSettings(e?JSON.parse(e):{})}catch{return{...Es}}}validateSettings(e){const t=e&&typeof e=="object"?e:{},n=(i,r,a,o)=>typeof i=="number"&&Number.isFinite(i)?Math.min(a,Math.max(r,i)):o;return{sensitivity:n(t.sensitivity,.3,2.5,Es.sensitivity),resolution:t.resolution==="320"||t.resolution==="640"?t.resolution:Es.resolution,quality:t.quality==="low"?"low":"high",volume:n(t.volume,0,1,Es.volume),difficulty:t.difficulty==="easy"||t.difficulty==="hard"?t.difficulty:"normal"}}}const Tn=["#151b20","#2d3b43","#465761","#687b84","#96a7ad","#ced5ce"];class L0{constructor(e){this.canvas=e,e.width=640,e.height=400,e.style.imageRendering="pixelated";const t=e.getContext("2d");if(!t)throw new Error("A 2D canvas is required for the weapon view.");this.ctx=t,t.imageSmoothingEnabled=!1,t.setTransform(2,0,0,2,0,0);for(const n of["fist","revolver","shotgun","plasma","machinegun"]){const i=document.createElement("canvas");i.width=640,i.height=400;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.setTransform(2,0,0,2,0,0),this.paintWeapon(r,n),this.sprites.set(n,i)}}ctx;sprites=new Map;current="fist";next="fist";switchTime=0;flash=0;shotAge=1;lastRecoil=0;lastReload=0;reloadDuration=1;lastX=0;lastZ=0;travel=0;initialized=!1;render(e,t){const n=e.player,i=this.ctx;t=Math.min(t,.06),i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,320,200);const r=n.owned.includes(n.weapon)?n.weapon:"fist";this.initialized||(this.current=this.next=r,this.lastX=n.x,this.lastZ=n.z,this.initialized=!0),r!==this.next&&(this.next=r,this.switchTime=.32),this.switchTime>0&&(this.switchTime=Math.max(0,this.switchTime-t),this.switchTime<.16&&(this.current=this.next)),n.recoil>.65&&n.recoil>this.lastRecoil+.04&&r!=="fist"&&!n.mounted&&(this.flash=.075,this.shotAge=0),this.lastRecoil=n.recoil,this.flash=Math.max(0,this.flash-t),this.shotAge+=t,n.reload>this.lastReload+.1&&(this.reloadDuration=n.reload),this.lastReload=n.reload;const a=Math.hypot(n.x-this.lastX,n.z-this.lastZ)/Math.max(t,.001);this.lastX=n.x,this.lastZ=n.z,this.travel+=Math.min(a,15)*t*(n.mounted?1.9:2.5);const o=Math.min(a/4,1),l=Math.sin(this.travel)*2.2*o,c=Math.abs(Math.cos(this.travel))*2.5*o,h=this.switchTime>0?Math.sin(this.switchTime/.32*Math.PI)*100:0,f=n.reload>0?1-n.reload/this.reloadDuration:0,u=n.reload>0?Math.sin(f*Math.PI):0,p=Math.min(1,n.recoil),g=this.current==="shotgun"?13:this.current==="machinegun"?5:8;if(n.mounted){this.paintMount(i,e.time,o,p),this.line(i,[173,159],[251,188],"#5b4f35",2),this.arm(i,247,186);return}if(i.save(),i.translate(Math.round(l),Math.round(c+h+p*g+u*23)),n.reload>0&&(i.translate(209,176),i.rotate(u*(this.current==="revolver"?.3:-.14)),i.translate(-209,-176)),i.drawImage(this.sprites.get(this.current),0,0,320,200),this.paintAmmoGauge(i,this.current,n.ammo[this.current]||0),this.current==="plasma"&&this.paintPlasmaPulse(i,e.time,n.reload>0),n.reload>0&&this.paintReload(i,this.current,f),this.flash>0&&n.reload<=0&&this.paintFlash(i,this.current,e.time),this.current==="shotgun"&&this.shotAge<.48&&this.shotAge>.12&&n.reload<=0&&this.paintPumpHand(i,Math.sin((this.shotAge-.12)/.36*Math.PI)*8),i.restore(),["shotgun","machinegun","revolver"].includes(this.current)&&this.shotAge>.06&&this.shotAge<.35){const S=this.shotAge/.35;i.save(),i.translate(Math.round(222+S*59),Math.round(148-Math.sin(S*Math.PI)*25)),i.rotate(S*9),i.fillStyle="#17130b",i.fillRect(-2,-1,9,4),i.fillStyle=this.current==="shotgun"?"#a12b25":"#c19f4d",i.fillRect(-1,0,6,2),i.fillStyle="#e2ce86",i.fillRect(4,0,2,2),i.restore()}}poly(e,t,n,i="#080c10"){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(const[r,a]of t.slice(1))e.lineTo(r,a);e.closePath(),e.fillStyle=n,e.fill(),i&&(e.strokeStyle=i,e.lineWidth=1,e.stroke())}line(e,t,n,i,r=1){e.beginPath(),e.moveTo(...t),e.lineTo(...n),e.strokeStyle=i,e.lineWidth=r,e.stroke()}bolt(e,t,n){e.fillStyle="#10161c",e.fillRect(t-2,n-2,5,5),e.fillStyle="#9faeae",e.fillRect(t-1,n-1,3,3),e.fillStyle="#344650",e.fillRect(t-1,n,3,1),e.fillStyle="#e2e5d5",e.fillRect(t-1,n-1,2,.5),e.fillStyle="#131f26",e.fillRect(t-.5,n-.5,.5,2),e.fillStyle="#52636a",e.fillRect(t+1,n+.5,.5,1.5)}screw(e,t,n,i=!1){e.fillStyle="#091317",e.fillRect(t-1,n-1,2.5,2.5),e.fillStyle=i?"#a58d59":"#91a19e",e.fillRect(t-.5,n-.5,1.5,1.5),e.fillStyle=i?"#f0d399":"#dbe0d3",e.fillRect(t-.5,n-.5,1,.5),e.fillStyle="#24333b",e.fillRect(t,n-.5,.5,1.5)}inset(e,t,n="#27353b"){this.poly(e,t,n,"#091318");for(let i=0;i<t.length-1;i++)i%2===0&&this.line(e,t[i],t[i+1],"#b0beb063",.5)}machining(e,t,n,i=90){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const u of t.slice(1))e.lineTo(...u);e.closePath(),e.clip();const r=t.map(u=>u[0]),a=t.map(u=>u[1]),o=Math.min(...r),l=Math.min(...a),c=Math.max(...r)-o,h=Math.max(...a)-l;let f=n;for(let u=0;u<i;u++){f=f*1664525+1013904223>>>0;const p=o+f%Math.max(1,c*2|0)*.5;f=f*1664525+1013904223>>>0;const g=l+f%Math.max(1,h*2|0)*.5;e.fillStyle=u%4===0?"#d3dcc241":u%4===1?"#030a136a":"#a5bab225",e.fillRect(p,g,u%9===0?2.5:.5,.5),u%17===0&&(e.fillStyle="#101b2570",e.fillRect(p,g+.5,1.5,.5))}e.restore()}etch(e,t,n,i,r="#b3bdab",a=0){const o={A:["010","101","111","101","101"],B:["110","101","110","101","110"],C:["111","100","100","100","111"],D:["110","101","101","101","110"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],G:["111","100","101","101","111"],H:["101","101","111","101","101"],I:["111","010","010","010","111"],K:["101","101","110","101","101"],L:["100","100","100","100","111"],M:["101","111","111","101","101"],N:["101","111","111","111","101"],O:["111","101","101","101","111"],P:["110","101","110","100","100"],R:["110","101","110","101","101"],S:["111","100","111","001","111"],T:["111","010","010","010","010"],U:["101","101","101","101","111"],V:["101","101","101","101","010"],X:["101","101","010","101","101"],Y:["101","101","010","010","010"],0:["111","101","101","101","111"],1:["010","110","010","010","111"],2:["110","001","010","100","111"],3:["110","001","010","001","110"],4:["101","101","111","001","001"],5:["111","100","110","001","110"],6:["011","100","111","101","111"],7:["111","001","010","010","010"],8:["111","101","111","101","111"],9:["111","101","111","001","110"],"-":["000","000","111","000","000"],".":["000","000","000","000","010"]};e.save(),e.translate(n,i),e.rotate(a),e.fillStyle=r;for(let l=0;l<t.length;l++){const c=o[t[l]];c&&c.forEach((h,f)=>{for(let u=0;u<3;u++)h[u]==="1"&&e.fillRect(l*2+u*.5,f*.5,.5,.5)})}e.restore()}wire(e,t,n,i=1){for(let r=0;r<t.length-1;r++)this.line(e,t[r],t[r+1],"#071219",i+1.5);for(let r=0;r<t.length-1;r++)this.line(e,t[r],t[r+1],n,i);for(let r=0;r<t.length-1;r++){const[a,o]=t[r];this.line(e,[a,o-.5],[t[r+1][0],t[r+1][1]-.5],"#ffe1b03a",.5)}}gripTexture(e,t){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const r of t.slice(1))e.lineTo(...r);e.closePath(),e.clip();const n=t.map(r=>r[0]),i=t.map(r=>r[1]);for(let r=Math.min(...i);r<Math.max(...i);r+=1.5)for(let a=Math.min(...n);a<Math.max(...n);a+=1.5)e.fillStyle="#090e1380",e.fillRect(a+Math.round(r)%2*.5,r,.5,.5),e.fillStyle="#c2ae8b45",e.fillRect(a+.5,r+.5,.5,.5);e.restore()}scratches(e,t,n,i=45){e.save(),e.beginPath(),e.moveTo(...t[0]);for(const u of t.slice(1))e.lineTo(...u);e.closePath(),e.clip();const r=t.map(u=>u[0]),a=t.map(u=>u[1]),o=Math.min(...r),l=Math.min(...a),c=Math.max(...r)-o,h=Math.max(...a)-l;let f=n;for(let u=0;u<i;u++){f=f*1664525+1013904223>>>0;const p=o+f%Math.max(1,c|0);f=f*1664525+1013904223>>>0;const g=l+f%Math.max(1,h|0);e.fillStyle=u%3===0?"#a2afa42b":"#040b104a",e.fillRect(p,g,u%5===0?3:1,1)}e.restore()}arm(e,t=204,n=165){const i=[[266,184],[319,199],[326,217],[258,213],[240,195]];this.poly(e,i,"#141619"),this.poly(e,[[270,188],[319,203],[319,211],[264,201],[248,189]],"#2b3031"),this.line(e,[277,191],[314,204],"#484f4b",2);const r=[[t+7,n+13],[t+24,n+8],[274,181],[280,197],[258,209],[t+4,n+27]];this.poly(e,r,Tn[2]),this.poly(e,[[t+13,n+13],[t+24,n+11],[267,184],[271,190],[257,196],[t+12,n+24]],Tn[3]),this.poly(e,[[t+12,n+13],[t+24,n+11],[267,184],[260,185],[t+16,n+18]],Tn[5]),this.poly(e,[[t+14,n+25],[258,199],[275,191],[277,198],[259,205]],Tn[0]),this.scratches(e,r,773,100),this.line(e,[t+20,n+22],[259,193],"#0b151b",5),this.line(e,[t+20,n+22],[259,193],"#9eaeb0",2),this.line(e,[t+24,n+28],[258,201],"#0b151b",5),this.line(e,[t+24,n+28],[258,201],"#776b47",2),this.poly(e,[[258,185],[266,182],[277,190],[274,200],[266,202],[265,192]],"#30383c"),this.bolt(e,270,191),this.bolt(e,254,187),e.fillStyle="#28d989",e.fillRect(253,190,3,2),e.fillRect(257,191,2,2),this.line(e,[274,187],[278,197],"#afa17b",2),this.inset(e,[[239,181],[253,183],[258,189],[247,193],[238,187]],"#31434b"),this.machining(e,r,7133,145),this.line(e,[241,182],[251,184],"#ced4bd",.5),this.line(e,[240,188],[247,192],"#14202c",.5),this.screw(e,241,184),this.screw(e,251.5,187.5,!0),this.screw(e,261.5,194.5),this.etch(e,"VANE-09",244,184,"#b9c7b9",.28),this.wire(e,[[t+17,n+28],[238,195],[247,198],[254,197]],"#ac724c",1),this.wire(e,[[t+19,n+30],[240,198],[248,201],[255,200]],"#527b82",.5);for(let a=0;a<6;a++)this.line(e,[257+a*.8,191-a*.3],[258+a*.8,195-a*.3],a%2?"#192b32":"#afbcae",.5),this.line(e,[270+a*.6,185+a*.6],[272+a*.6,187+a*.6],a%2?"#b7ba99":"#2f3431",.5);for(let a=0;a<4;a++)e.fillStyle="#111e25",e.fillRect(263+a*1.5,187+a*.5,1,.5);this.line(e,[t+21,n+20],[254,188],"#f2efce",.5),this.line(e,[t+21,n+21],[255,190],"#303c42",.5),e.fillStyle="#0a191b",e.fillRect(251,189,8,3);for(let a=0;a<4;a++)e.fillStyle=a===3?"#6e7150":"#7ef4af",e.fillRect(252+a*1.5,190,1,1);this.line(e,[276,192],[279,196],"#f0d7a4",.5),this.line(e,[246,189],[248.5,188.5],"#111b20",.5),this.line(e,[246,189.5],[248,189],"#bfcbb1",.5);for(let a=0;a<11;a++)this.line(e,[283+a*2.5,193+a*.75],[283.5+a*2.5,194+a*.75],"#9b96784d",.5);this.line(e,[286,197],[310,206],"#080d13",.5),this.line(e,[291,199],[309,205],"#66706a",.5),this.hand(e,t,n)}hand(e,t,n){this.poly(e,[[t-14,n-5],[t-6,n-12],[t+9,n-10],[t+19,n],[t+21,n+14],[t+12,n+22],[t-3,n+18],[t-14,n+9]],"#293841"),this.poly(e,[[t-12,n-5],[t-6,n-10],[t+6,n-8],[t+12,n],[t+9,n+10],[t-7,n+7]],"#65767b");for(let i=0;i<4;i++){const r=t-11+i*6,a=n+i*2;this.poly(e,[[r,a],[r+4,a-2],[r+8,a+3],[r+7,a+10],[r+3,a+12],[r-1,a+7]],i%2?"#839391":"#61747a"),this.line(e,[r+1,a+5],[r+6,a+3],"#182730",2),e.fillStyle="#c0c8bb",e.fillRect(r+1,a,3,2),this.line(e,[r+1,a+.5],[r+4.5,a-1],"#e0e4c8",.5),this.line(e,[r+1.5,a+6.5],[r+5,a+5],"#afc0b6",.5),this.line(e,[r+1,a+9],[r+5.5,a+8],"#263a44",.5),this.screw(e,r+3,a+7),e.fillStyle="#233d42",e.fillRect(r+3.5,a+.5,.5,2),e.fillStyle="#9e8155",e.fillRect(r+6,a+4,.5,3),e.fillStyle="#f3e2b6",e.fillRect(r+6,a+4,.5,.5)}this.poly(e,[[t+12,n-2],[t+18,n-2],[t+23,n+6],[t+18,n+13],[t+13,n+8]],"#7e9195"),this.bolt(e,t+14,n+15),this.inset(e,[[t-9,n-7],[t-3,n-9],[t+4,n-5],[t+5,n-1],[t-4,n+2],[t-10,n-1]],"#41535b"),this.screw(e,t-6,n-4,!0),this.screw(e,t+1,n-3),this.line(e,[t+15,n],[t+20,n+6],"#cfdbcd",.5),this.line(e,[t+17,n+8],[t+20,n+6],"#243b43",.5),this.machining(e,[[t-12,n-5],[t+17,n],[t+20,n+13],[t-4,n+17]],139,30)}paintWeapon(e,t){if(t==="fist"){this.arm(e,195,172),this.poly(e,[[181,164],[182,155],[189,148],[200,147],[217,156],[217,173],[207,184],[189,180]],"#61777e");for(let n=0;n<4;n++)e.fillStyle="#b9c1b5",e.fillRect(186+n*7,155+n*2,5,6),e.fillStyle="#243a41",e.fillRect(186+n*7,162+n*2,5,2);this.machining(e,[[181,164],[190,148],[199,148],[217,158],[211,178],[189,179]],228,100);for(let n=0;n<4;n++)this.screw(e,188+n*7,157+n*2),this.line(e,[186+n*7,155+n*2],[190+n*7,155+n*2],"#e5e4c9",.5);this.etch(e,"VANE",193,170,"#b9cbc2",.25);return}if(t==="revolver"){this.arm(e,208,174),this.poly(e,[[196,156],[211,158],[230,185],[223,199],[208,196],[191,169]],"#191b1a"),this.poly(e,[[204,166],[212,167],[224,186],[218,193],[212,187]],"#4b3626");for(let n=0;n<5;n++)this.line(e,[210+n*2,175+n*3],[219+n,177+n*3],"#8a6d46");this.poly(e,[[155,122],[164,119],[180,139],[198,153],[196,170],[181,168],[169,145]],Tn[2]),this.poly(e,[[156,121],[164,120],[183,143],[176,145]],Tn[4]),this.poly(e,[[164,123],[169,128],[183,149],[182,156],[173,147]],Tn[0]),this.line(e,[158,124],[177,148],Tn[5],2),this.poly(e,[[175,143],[190,141],[204,152],[204,166],[194,173],[181,169],[174,155]],"#4a585b"),this.poly(e,[[177,144],[189,142],[199,150],[186,153]],"#b4bbaf"),this.poly(e,[[179,154],[186,152],[192,157],[191,168],[184,168]],"#202b31"),this.poly(e,[[193,154],[200,152],[203,157],[201,167],[195,170]],"#222d32"),this.line(e,[185,154],[185,166],"#8b9690",2),this.line(e,[198,155],[198,166],"#77847c",2),this.poly(e,[[163,120],[162,115],[157,116],[157,122]],"#1b2024"),e.fillStyle="#98f0c3",e.fillRect(158,115,3,1),this.poly(e,[[197,149],[201,143],[206,145],[208,153]],"#728281"),this.poly(e,[[193,171],[197,184],[207,188],[212,181],[207,171]],"#11191c"),this.line(e,[197,173],[201,182],"#9faaa4",2),this.scratches(e,[[174,142],[198,147],[203,164],[181,172]],129,45),this.paintGunDetail(e,t),this.hand(e,208,177),this.bolt(e,192,150),e.fillStyle="#a2ada1",e.fillRect(183,148,7,1)}else if(t==="shotgun"){this.arm(e,222,186);const n=[[154,120],[165,113],[183,136],[219,171],[240,192],[220,204],[186,170],[165,139]];this.poly(e,n,Tn[1]),this.poly(e,[[156,121],[163,116],[188,142],[219,174],[211,179],[181,145]],"#879698"),this.poly(e,[[155,122],[159,125],[191,161],[203,176],[199,181],[179,161]],"#17222a"),this.line(e,[160,122],[208,174],"#c3cabb",2),this.poly(e,[[152,118],[156,114],[163,111],[167,115],[165,122],[158,125]],"#40545b"),this.poly(e,[[155,117],[159,115],[163,115],[163,120],[160,122],[156,121]],"#070c10"),this.line(e,[156,114],[163,112],"#b0bcb4",2),this.poly(e,[[194,155],[213,171],[229,188],[220,198],[205,184],[187,166]],"#34454a"),this.poly(e,[[200,155],[218,171],[225,183],[218,187],[207,174],[194,163]],"#617378"),this.poly(e,[[208,170],[214,170],[221,178],[218,182],[212,177]],"#0c171e"),this.line(e,[209,171],[219,180],"#a9b6b3"),this.poly(e,[[175,144],[184,140],[203,159],[196,171],[187,169],[174,155]],"#564939");for(let i=0;i<6;i++)this.line(e,[179+i*3,146+i*2],[181+i*3,157+i*2],i%2?"#b09562":"#282925",2);this.poly(e,[[227,187],[240,191],[254,212],[227,213],[216,197]],"#171c1b"),this.scratches(e,n,448,100),this.bolt(e,207,164),this.bolt(e,223,186),this.paintGunDetail(e,t),this.paintPumpHand(e,0),this.hand(e,225,184)}else if(t==="plasma"){this.arm(e,217,179);const n=[[150,122],[160,114],[170,119],[185,139],[215,150],[232,171],[233,193],[221,201],[198,180],[168,145]];this.poly(e,n,"#263a3c"),this.poly(e,[[150,121],[159,116],[169,119],[183,139],[175,144],[160,131]],"#566f71"),this.poly(e,[[149,121],[151,115],[158,111],[166,113],[171,122],[162,129]],"#182624"),this.poly(e,[[153,117],[158,114],[165,116],[167,120],[160,125],[154,123]],"#030c09"),this.poly(e,[[157,117],[162,117],[164,120],[160,122],[157,121]],"#76f6ac"),this.poly(e,[[179,139],[190,134],[208,146],[223,164],[213,174],[196,164]],"#668085"),this.poly(e,[[180,140],[189,136],[207,148],[204,155],[192,154]],"#aac0b5"),this.poly(e,[[179,151],[191,147],[212,169],[207,180],[196,175]],"#101b1d"),this.poly(e,[[185,151],[191,151],[205,167],[202,173],[198,170]],"#16714d");for(let i=0;i<5;i++)this.line(e,[185+i*4,149+i*4],[181+i*4,153+i*4],"#86f8b4",2);this.poly(e,[[205,150],[213,150],[232,169],[231,187],[224,190],[211,175]],"#314b50"),this.poly(e,[[211,153],[215,153],[226,165],[226,174],[220,173]],"#092522"),e.fillStyle="#84fbbe",e.fillRect(215,158,4,3),e.fillRect(220,164,3,3),this.poly(e,[[211,180],[220,177],[234,193],[231,205],[221,205],[209,192]],"#172424"),this.scratches(e,n,137,85),this.bolt(e,205,145),this.bolt(e,229,178),this.paintGunDetail(e,t),this.hand(e,215,181)}else{this.arm(e,229,186);const n=[[148,118],[158,109],[168,114],[178,134],[212,153],[240,178],[255,201],[222,211],[187,175],[160,145]];this.poly(e,n,"#222b2e"),this.poly(e,[[149,118],[157,112],[164,115],[191,151],[186,159],[173,146]],"#718184"),this.poly(e,[[156,127],[162,120],[199,156],[193,166],[184,159]],"#3a4c51"),this.poly(e,[[147,117],[150,111],[157,107],[165,111],[171,120],[163,130],[154,129]],"#3f525b");for(const[i,r]of[[153,115],[160,114],[157,122],[164,120]])e.fillStyle="#030a0e",e.fillRect(i-2,r-2,4,4),e.fillStyle="#8da09b",e.fillRect(i-2,r-3,4,1);for(let i=0;i<3;i++)this.line(e,[156+i*4,123-i*2],[187+i*5,159-i*2],i%2?"#b0b8ad":"#11191e",2);this.poly(e,[[186,153],[198,146],[215,154],[238,175],[243,193],[228,204],[207,188],[186,167]],"#405255"),this.poly(e,[[189,153],[198,150],[215,158],[229,173],[221,177],[204,163]],"#91a09b"),this.poly(e,[[189,160],[205,164],[227,182],[228,198],[214,192],[194,174]],"#1c2b31");for(let i=0;i<4;i++)this.poly(e,[[193+i*5,162+i*4],[197+i*5,163+i*4],[203+i*5,173+i*4],[199+i*5,174+i*4]],"#070f13");this.poly(e,[[211,164],[220,160],[230,168],[230,176],[222,177]],"#364747"),this.poly(e,[[218,161],[216,151],[221,147],[230,151],[234,157],[230,161]],"#586b6b"),this.poly(e,[[219,156],[221,151],[227,152],[229,157]],"#070f15"),this.poly(e,[[236,169],[263,174],[280,182],[277,194],[249,185],[237,181]],"#14191b");for(let i=0;i<8;i++){const r=240+i*5,a=174+i*1.7;this.poly(e,[[r,a],[r+4,a+1],[r+3,a+12],[r,a+14],[r-2,a+11]],i%2?"#846733":"#a68b4c"),e.fillStyle="#d0b471",e.fillRect(r,a+1,2,7),e.fillStyle="#382e23",e.fillRect(r-1,a+9,4,2)}this.scratches(e,n,1985,140),this.bolt(e,205,158),this.bolt(e,235,185),this.paintGunDetail(e,t),this.hand(e,232,185)}}paintGunDetail(e,t){if(t==="revolver"){this.line(e,[156.5,122.5],[176.5,145.5],"#eff0d1",.5),this.line(e,[162,122.5],[180,144],"#566570",.5),this.line(e,[164,124.5],[181,146.5],"#111b23",.5);for(let n=0;n<7;n++){const i=163+n*2,r=127+n*2.25;this.line(e,[i,r],[i+2,r-.5],"#263b41",.5),this.line(e,[i+.5,r+.5],[i+2,r],"#c6d3c9",.5)}this.etch(e,".357",166,133,"#32434a",.88);for(let n=0;n<5;n++){const i=176.5+n*4.5,r=147+n*1.9;this.poly(e,[[i,r],[i+2,r-.5],[i+4,r+3],[i+3,r+12],[i+1.5,r+13],[i,r+8]],n%2?"#5e7376":"#253842",""),this.line(e,[i+1,r+.5],[i+2,r+10],"#c2cbb3",.5),this.line(e,[i+3,r+2],[i+3,r+11],"#121f2a",.5),e.fillStyle="#d1ad61",e.fillRect(i+.5,r-1,1.5,1),e.fillStyle="#f4dd90",e.fillRect(i+.5,r-1,.5,.5)}this.inset(e,[[184,168],[195,168],[199,171],[197,175],[187,172]],"#42535a"),this.screw(e,188.5,170),this.screw(e,197,167),this.line(e,[178,145],[188,143],"#e9e6c3",.5),this.line(e,[192,143.5],[200,149.5],"#e1d9b2",.5),this.line(e,[197,147],[201,144],"#1c3038",.5);for(let n=0;n<4;n++)this.line(e,[200+n*.9,146.5+n*.2],[202+n*.9,147+n*.2],"#303e45",.5);this.gripTexture(e,[[204,166],[212,167],[224,186],[218,193],[212,187]]),this.machining(e,[[171,137],[187,146],[204,161],[191,170]],1974,115),this.etch(e,"VANE",194,166,"#c1b895",.15),this.screw(e,215.5,183.5,!0)}else if(t==="shotgun"){this.line(e,[157,115.5],[162.5,112.5],"#d1d7bb",.5),this.poly(e,[[156,116],[160,114.5],[162.5,115.5],[161.5,118],[158,119.5]],"#17262d",""),this.line(e,[158,116],[161,115],"#64818b",.5);for(let n=0;n<11;n++){const i=164.5+n*2.6,r=122+n*2.8;this.poly(e,[[i,r],[i+2.5,r+1.5],[i+3.5,r+4],[i+1,r+2.5]],"#13212b",""),this.line(e,[i+.5,r],[i+2.5,r+1.5],"#b3c4b5",.5),this.line(e,[i+3,r+.5],[i+5,r+2.5],"#2d3941",.5)}this.line(e,[164,121],[191,149],"#eef0cf",.5),this.line(e,[165,123],[194,154],"#52646d",.5),this.inset(e,[[198,157],[206,164],[213,168],[210,172],[201,167],[195,162]],"#2c4148"),this.etch(e,"12 GA",198,160,"#c1cdb9",.79),this.line(e,[208.5,171],[217,178],"#d3dbbf",.5),this.line(e,[211,174],[216.5,178.5],"#1a292b",.5),this.screw(e,199,157),this.screw(e,216,172),this.screw(e,223.5,189,!0);for(let n=0;n<8;n++){const i=177.5+n*2.5,r=144+n*2;this.line(e,[i,r],[i+1.5,r+7.5],"#180f13",.5),this.line(e,[i+.5,r],[i+2,r+7.5],"#c7aa6c",.5)}this.gripTexture(e,[[229,189],[239,193],[247,208],[229,209],[222,198]]),this.machining(e,[[155,120],[164,116],[193,146],[226,179],[221,194],[179,156]],2529,165),this.etch(e,"FN-12",216,183,"#b9c1ad",.8)}else if(t==="plasma"){for(let n=0;n<9;n++){const i=183+n*2.45,r=149+n*2.5;this.line(e,[i,r],[i-3.5,r+4],"#161913",2),this.line(e,[i,r],[i-3.5,r+4],"#c49657",1),this.line(e,[i,r],[i-2,r+2],"#f0d392",.5),e.fillStyle="#3e7651",e.fillRect(i-1,r+2.5,.5,1)}this.wire(e,[[184,141],[192,138],[205,144],[216,154],[220,162]],"#a46945",1.5),this.wire(e,[[181,144],[189,143],[204,150],[214,160]],"#254d5a",.5),this.inset(e,[[189,136],[202,143],[205,148],[198,148],[188,141]],"#394f57"),this.etch(e,"ION-X3",190,139,"#d2d9b9",.51),this.line(e,[180,140],[188,136],"#e5ebcf",.5),this.line(e,[197,141],[206,147],"#e0e1c0",.5);for(let n=0;n<5;n++){const i=208+n*2,r=153+n*2.2;this.poly(e,[[i,r],[i+2,r],[i+5,r+3],[i+3,r+3]],"#0b2329",""),this.line(e,[i+.5,r+.5],[i+3,r+2],"#91b8a1",.5)}this.inset(e,[[220,166],[226,169],[229,177],[225,181],[220,175]],"#293d42"),this.screw(e,222,169,!0),this.screw(e,226.5,176),this.line(e,[155,117],[158,114.5],"#aeffd3",.5),this.line(e,[165,116.5],[168,122],"#549878",.5),e.fillStyle="#ccfadc",e.fillRect(156.5,119,1,.5),this.gripTexture(e,[[215,182],[221,179],[230,194],[226,203],[218,197]]),this.machining(e,[[172,133],[190,135],[211,149],[233,173],[224,190],[196,161]],186,165),this.etch(e,"CAUTION",199,173,"#969972",.74)}else{for(const[n,i]of[[153,115],[160,114],[157,122],[164,120]])this.line(e,[n-2,i-1.5],[n+1.5,i-1.5],"#c6d2c1",.5),this.line(e,[n-2,i-1],[n-2,i+1],"#708a8f",.5),this.line(e,[n+1.5,i-.5],[n+1.5,i+1.5],"#17232e",.5),e.fillStyle="#2b414b",e.fillRect(n-.5,i+.5,1,.5);for(let n=0;n<8;n++){const i=166+n*2.5,r=129+n*2.7;this.poly(e,[[i,r],[i+2,r-1],[i+4,r+2],[i+2,r+3]],"#0b141c",""),this.line(e,[i,r],[i+1.5,r-.5],"#c5d0b5",.5),this.line(e,[i+2,r+3],[i+3.5,r+2],"#4e6a6c",.5)}this.line(e,[153,124],[178,153],"#e3e6c2",.5),this.line(e,[165,127],[192,155],"#566e72",.5),this.inset(e,[[198,150],[209,155],[218,164],[214,169],[203,160],[195,155]],"#556a6c"),this.etch(e,"M-60",200,153,"#d5d7b5",.64),this.line(e,[206,160],[216,168],"#152930",.5);for(let n=0;n<4;n++){const i=193.5+n*5,r=163+n*4;this.line(e,[i,r],[i+3,r+7],"#5b7378",.5),this.line(e,[i+4,r+2],[i+6,r+8],"#a2b8a850",.5)}this.screw(e,199,153),this.screw(e,218.5,166.5),this.screw(e,233,178,!0);for(let n=0;n<8;n++){const i=240+n*5,r=174+n*1.7;e.fillStyle="#eee0a1",e.fillRect(i+.5,r+1,.5,7),e.fillStyle="#614e2b",e.fillRect(i+2,r+1,.5,7),this.line(e,[i-1,r+10],[i+2,r+10],"#f6d080",.5),this.line(e,[i-1,r+12],[i+2,r+12],"#2e2822",.5),this.screw(e,i+2.5,r+9)}this.wire(e,[[236,183],[244,190],[256,191]],"#687c78",.5),this.gripTexture(e,[[226,189],[238,187],[249,201],[239,208],[228,204]]),this.machining(e,[[162,128],[182,145],[210,149],[238,175],[242,194],[212,188]],6509,190),this.etch(e,"FOSSIL",205,179,"#90a399",.72)}}paintAmmoGauge(e,t,n){if(t==="fist")return;if(t==="revolver"){for(let l=0;l<6;l++)e.fillStyle=l<n?"#dfc181":"#243c46",e.fillRect(181+l*2,144+l*.3,1,.5);return}const i=t==="plasma",r=t==="machinegun",a=i?216:r?220:204,o=i?159:r?173:164;e.save(),e.translate(a,o),e.rotate(i?.72:r?.7:.78),e.fillStyle="#050f14",e.fillRect(-.5,-.5,8,4),e.fillStyle="#4c7070",e.fillRect(-.5,-.5,8,.5),this.etch(e,String(Math.min(99,n)).padStart(2,"0"),.5,.25,n>0?i?"#94ffc5":"#d6d1a1":"#ff7851"),e.fillStyle=n>0?"#53b693":"#933b28",e.fillRect(5.5,.5,.5,2),e.restore()}paintPumpHand(e,t){e.save(),e.translate(Math.round(t*.8),Math.round(t)),this.poly(e,[[124,205],[145,181],[162,162],[174,159],[191,171],[190,182],[171,187],[153,212]],"#1a2226"),this.poly(e,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],"#74858a"),this.line(e,[143,195],[163,174],"#c3ccc3",2);for(let n=0;n<4;n++)this.poly(e,[[166+n*4,161+n*2],[173+n*4,163+n*2],[176+n*4,169+n*2],[173+n*4,174+n*2],[166+n*4,169+n*2]],n%2?"#9aaba4":"#576c75"),this.line(e,[170+n*4,166+n*2],[175+n*4,168+n*2],"#1c2c34",2),this.line(e,[167+n*4,162+n*2],[172+n*4,164+n*2],"#e2e6c8",.5),this.screw(e,170+n*4,166+n*2),e.fillStyle="#9c7747",e.fillRect(174+n*4,169+n*2,.5,2);this.bolt(e,154,187),this.inset(e,[[145,190],[151,181],[158,176],[162,180],[155,186],[148,194]],"#4a626b"),this.wire(e,[[143,196],[151,189],[156,186]],"#a1744a",.5),this.machining(e,[[139,199],[160,174],[172,168],[180,176],[169,187],[154,204]],271,60),this.etch(e,"09",148,187,"#d0d6bb",-.81),e.restore()}paintPlasmaPulse(e,t,n){n||(e.fillStyle=Math.sin(t*9)>0?"#c4ffe1":"#49dc95",e.fillRect(215,158,4,2),e.fillRect(221,165,2,2),e.fillRect(158,117,3,3))}paintReload(e,t,n){const i=Math.sin(n*Math.PI);if(t==="revolver"){const r=171-Math.round(i*12),a=158+Math.round(i*10);this.poly(e,[[r-8,a-5],[r+5,a-8],[r+12,a],[r+10,a+13],[r-3,a+15],[r-11,a+5]],"#687b7d"),this.line(e,[r-8,a-5],[r+4,a-7],"#dfe4c1",.5),this.line(e,[r+9,a+2],[r+8,a+11],"#1c353d",.5);for(let o=0;o<6;o++){const l=o*Math.PI/3+n*5,c=Math.round(r+Math.cos(l)*6),h=Math.round(a+Math.sin(l)*6);e.fillStyle=n>.45?"#c2a254":"#0b151a",e.fillRect(c-2,h-2,4,4),e.fillStyle=n>.45?"#fae5a2":"#5f777e",e.fillRect(c-1.5,h-2,2,.5),n>.45&&(e.fillStyle="#615137",e.fillRect(c-.5,h-.5,1,1))}this.screw(e,r,a,!0),n>.35&&n<.7&&this.hand(e,147,190)}else if(t==="shotgun")this.hand(e,175+Math.round(i*9),190),e.fillStyle="#932621",e.fillRect(179,176,5,10),e.fillStyle="#d0aa62",e.fillRect(179,175,5,2),e.fillStyle="#edc99a",e.fillRect(179.5,175,4,.5),e.fillStyle="#ef6352",e.fillRect(179.5,177,.5,8),e.fillStyle="#541c21",e.fillRect(183,178,.5,7),this.etch(e,"12",180,179,"#f3d4b2");else if(t==="plasma"){const a=176+Math.round(i*21);this.poly(e,[[188,a],[199,a-4],[211,a+11],[201,a+19],[192,a+9]],"#294447"),this.line(e,[193,a+3],[202,a+14],"#72ffb0",4);for(let o=0;o<5;o++)this.line(e,[194+o*2,a+3+o*2],[191+o*2,a+5+o*2],"#173c3a",.5);this.line(e,[190,a+.5],[198,a-2.5],"#c4d9be",.5),this.screw(e,201,a+5,!0),this.hand(e,168,a+15)}else t==="machinegun"&&(this.hand(e,259-Math.round(i*16),178+Math.round(i*11)),e.fillStyle="#c7ac68",e.fillRect(242,167,14,3))}paintFlash(e,t,n){const i=t==="plasma",r=159,a=114,o=t==="shotgun"?23:t==="machinegun"?17:13,l=Math.floor(n*70)%2?1:-1;this.poly(e,[[r-3,a],[r-o,a-9],[r-7,a-12],[r-11,a-o-5],[r,a-15],[r+o*.7,a-o],[r+7,a-8],[r+o,a-3],[r+5,a+4]],i?"#247e55":"#af4321",""),this.poly(e,[[r-3,a],[r-10,a-7],[r-3,a-10],[r+l*3,a-19],[r+4,a-9],[r+12,a-6],[r+4,a+2]],i?"#82ffae":"#f9b84e",""),this.poly(e,[[r-3,a],[r-2,a-7],[r+2,a-11],[r+5,a-4],[r+3,a+3]],i?"#e7ffeb":"#fff3b9","")}paintMount(e,t,n,i=0){const r=Math.round(Math.sin(t*9)*n*2-i*11);e.save(),e.translate(0,r),this.poly(e,[[100,215],[110,192],[131,180],[145,170],[151,146],[163,134],[177,139],[184,150],[178,165],[171,175],[194,188],[207,215]],"#1a332e"),this.poly(e,[[128,207],[145,177],[154,148],[164,138],[171,142],[173,154],[160,182],[175,207]],"#47654b"),this.poly(e,[[154,147],[161,143],[179,148],[180,156],[171,161],[157,157]],"#385947"),this.machining(e,[[132,185],[150,166],[154,148],[164,138],[174,144],[175,154],[160,182],[173,204]],651,115);for(let a=0;a<7;a++){const o=147+a*3,l=172-a*2.1;this.poly(e,[[o,l],[o+2.5,l-1],[o+3,l+1],[o+1.5,l+2]],a%2?"#637558":"#283f34",""),this.line(e,[o,l],[o+2,l-.5],"#a0a580",.5)}if(this.line(e,[162,145],[173,145],"#8a966d",.5),this.line(e,[170,149.5],[177,151],"#1d342e",.5),e.fillStyle="#132922",e.fillRect(177,150,1.5,1),this.line(e,[157,149],[163,153],"#192c26",.5),this.line(e,[156.5,149.5],[162.5,153.5],"#91a371",.5),i>.25){this.poly(e,[[157,153],[180,155],[179,163],[162,160]],"#0b1110");for(let a=0;a<5;a++)e.fillStyle="#b9bf8c",e.fillRect(163+a*3,155,2,3)}else this.line(e,[157,155],[178,155],"#111c19",2);e.fillStyle="#dfb961",e.fillRect(171,146,4,2),e.fillStyle="#081410",e.fillRect(174,146,1,2),e.fillStyle="#ffdc89",e.fillRect(171,146,2,.5);for(let a=0;a<5;a++)this.poly(e,[[135+a*3,183-a*6],[130+a*4,179-a*7],[139+a*3,177-a*6]],"#809178");this.line(e,[150,162],[119,200],"#74664c",2),this.line(e,[174,163],[198,197],"#74664c",2),this.line(e,[151,162],[120,200],"#b5a483",.5),this.line(e,[174,162],[198,195],"#c2b298",.5),this.inset(e,[[150,164],[153,164],[150,168],[147,168]],"#ad9f6b"),this.screw(e,150,166,!0),e.restore()}}class I0{context;master;fx;music;noise;volume=.45;unlocked=!1;nextBeat=0;beat=0;lastStep=0;lastX=0;lastZ=0;distance=0;lastEnemy=0;musicActive=!1;constructor(){}unlock(){try{if(!this.context){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=this.volume,this.master.connect(this.context.destination),this.fx=this.context.createGain(),this.fx.gain.value=.8,this.fx.connect(this.master),this.music=this.context.createGain(),this.music.gain.value=.2,this.music.connect(this.master);const t=this.context.sampleRate*2;this.noise=this.context.createBuffer(1,t,this.context.sampleRate);const n=this.noise.getChannelData(0);let i=1793;for(let r=0;r<t;r++)i=i*1664525+1013904223>>>0,n[r]=i/4294967296*2-1}this.context.resume().then(()=>{this.unlocked=!0,this.nextBeat=this.context.currentTime+.08}).catch(()=>{}),this.unlocked=!0}catch{}}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.context&&this.master&&this.master.gain.setTargetAtTime(this.volume,this.context.currentTime,.04)}suspend(){this.musicActive=!1,this.context&&this.music&&this.music.gain.setTargetAtTime(0,this.context.currentTime,.08)}handle(e){if(!(!this.context||!this.unlocked||this.context.state!=="running"))for(const t of e)switch(t.type){case"shot":this.shot(t.weapon||"revolver");break;case"reload":this.tone(720,.035,.11,"square",370),this.burst(.08,.14,1500,.09),this.tone(440,.05,.1,"triangle",180,.17),this.burst(.03,.11,2600,.32);break;case"hurt":this.burst(.2,.15,700),this.tone(96,.17,.16,"sawtooth",46);break;case"pickup":this.tone(554.37,.08,.13,"triangle"),this.tone(830.61,.1,.11,"triangle",830.61,.085);break;case"door":this.burst(.43,.07,850),this.tone(89,.3,.08,"sawtooth",58),this.tone(420,.06,.06,"square",350,.35);break;case"enemy":{this.context.currentTime-this.lastEnemy>.65&&(this.lastEnemy=this.context.currentTime,t.message?.includes("charging shot")?(this.tone(260,.19,.055,"sawtooth",790),this.tone(880,.07,.055,"square",330,.2)):t.message?.startsWith("Strider")?(this.tone(90,.27,.1,"sawtooth",42),this.burst(.28,.08,530)):(this.tone(195,.23,.09,"sawtooth",58),this.burst(.22,.09,650)));break}case"kill":this.burst(.2,.12,430),this.tone(118,.22,.1,"sawtooth",34);break;case"mount":this.tone(110,.22,.11,"sawtooth",210),this.tone(82,.12,.12,"triangle",45,.15);break;case"checkpoint":this.chime([261.63,329.63,392],.16,.11);break;case"complete":this.chime([164.81,220,261.63,329.63,440],.18,.16);break}}tick(e,t){if(!this.context||!this.unlocked||this.context.state!=="running")return;this.musicActive||(this.musicActive=!0,this.nextBeat=this.context.currentTime+.06,this.music?.gain.setTargetAtTime(e.status==="playing"?.2:.1,this.context.currentTime,.35));const n=this.context.currentTime;for(n>this.nextBeat+.8&&(this.nextBeat=n+.04);this.nextBeat<n+.11;)this.ambientBeat(this.nextBeat,e),this.nextBeat+=.375,this.beat++;const i=e.player,r=Math.hypot(i.x-this.lastX,i.z-this.lastZ);this.lastX=i.x,this.lastZ=i.z,r<1&&(this.distance+=r),i.grounded&&this.distance>(i.mounted?2.2:1.65)&&n-this.lastStep>.22&&t>0&&(this.distance=0,this.lastStep=n,this.burst(.045,i.mounted?.1:.045,i.mounted?350:950),this.tone(i.mounted?65:110,.07,i.mounted?.11:.045,"triangle",40))}tone(e,t,n,i="square",r=e,a=0,o="fx",l){const c=this.context;if(!c||!this.master||!this.fx||!this.music)return;const h=l??c.currentTime+a,f=c.createOscillator(),u=c.createGain();f.type=i,f.frequency.setValueAtTime(Math.max(1,e),h),f.frequency.exponentialRampToValueAtTime(Math.max(1,r),h+t),u.gain.setValueAtTime(1e-4,h),u.gain.linearRampToValueAtTime(n,h+Math.min(.006,t/4)),u.gain.exponentialRampToValueAtTime(1e-4,h+t),f.connect(u),u.connect(o==="music"?this.music:this.fx),f.start(h),f.stop(h+t+.025),f.onended=()=>{f.disconnect(),u.disconnect()}}burst(e,t,n,i=0,r,a="fx"){const o=this.context;if(!o||!this.noise||!this.fx||!this.music)return;const l=r??o.currentTime+i,c=o.createBufferSource(),h=o.createBiquadFilter(),f=o.createGain();c.buffer=this.noise,h.type="lowpass",h.frequency.setValueAtTime(n,l),h.Q.value=.4,f.gain.setValueAtTime(t,l),f.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(f),f.connect(a==="music"?this.music:this.fx),c.start(l,Math.random()),c.stop(l+e+.025),c.onended=()=>{c.disconnect(),h.disconnect(),f.disconnect()}}shot(e){switch(e){case"revolver":this.burst(.13,.34,4800),this.tone(180,.11,.24,"triangle",42),this.tone(1280,.027,.065,"square",190);break;case"shotgun":this.burst(.25,.48,3900),this.tone(130,.2,.28,"triangle",28),this.burst(.05,.09,1800,.23),this.burst(.08,.11,2900,.37);break;case"plasma":this.tone(980,.14,.14,"sawtooth",140),this.tone(1450,.08,.07,"triangle",260),this.burst(.07,.06,4400);break;case"machinegun":this.burst(.075,.27,4200),this.tone(157,.065,.16,"triangle",46),this.tone(970,.017,.07,"square",380);break}}chime(e,t,n){e.forEach((i,r)=>this.tone(i,.42,n,"triangle",i,r*t))}ambientBeat(e,t){const n=this.beat%32,r=[55,55,65.406,49][Math.floor(n/8)];if(n%4===0&&this.tone(r,.48,.21,"triangle",r,0,"music",e),n%8===4&&this.tone(r*2,.35,.1,"triangle",r*2,0,"music",e),n%4===2&&this.burst(.035,.022,2100,0,e,"music"),n===2||n===11||n===18||n===27){const a=[220,261.626,293.665,196][Math.floor(n/8)];this.tone(a,.8,.055,"triangle",a,0,"music",e),this.tone(a*1.005,.65,.025,"sine",a*1.005,0,"music",e+.12)}t.enemies.some(a=>a.alive&&a.alert)&&n%2===0&&this.tone(75,.085,.1,"sine",30,0,"music",e)}}const Ua=document.querySelector("#world"),D0=document.querySelector("#weapon");let Et,Hs,Qn=!1,Ki=performance.now(),ni=!1;const ii=new I0,Hn=new R0(Ua,Qi),U0=new L0(D0),ln=new P0({start:Hl,resume:F0,restart:O0,menu:B0,pause:Qi,settings:Vl});Et=new kl(Ft,ln.settings.difficulty);function N0(){try{localStorage.setItem("fossil-noir-3d-checkpoint",JSON.stringify({version:1,difficulty:Et.state.difficulty}))}catch{}}function Gl(){try{return JSON.parse(localStorage.getItem("fossil-noir-3d-checkpoint")||"null")?.version===1}catch{return!1}}function Vn(s){Qn=s==="playing",Hn.enabled=Qn,Hn.clear(),ln.show(s),Qn||(Hn.release(),ii.suspend())}function Hl(s=!1){ni||(Et=new kl(Ft,ln.settings.difficulty),s&&Gl()&&Et.restart(!0),ii.unlock(),Vn("playing"),Hn.capture(),Ki=performance.now())}function F0(){ni||Et.state.status!=="playing"||(ii.unlock(),Vn("playing"),Hn.capture(),Ki=performance.now())}function Qi(){Qn&&Vn("pause")}function O0(s=!1){if(!ni){if(!s){Hl(!1);return}Et.restart(s&&(Et.state.checkpoint||Gl())),ii.unlock(),Vn("playing"),Hn.capture(),Ki=performance.now()}}function B0(){Vn("menu")}function Vl(s){Hn.sensitivity=s.sensitivity,ii.setVolume(s.volume),Hs?.resize(s)}try{Hs=new A0(Ua),Vl(ln.settings),ln.show("menu")}catch(s){ni=!0,ln.setError(`WebGL could not start. Enable hardware acceleration and reload in Chrome, Edge or Firefox. ${s instanceof Error?s.message:""}`)}function Wl(s){const e=Math.min(Math.max((s-Ki)/1e3,0),.05);if(Ki=s,!ni)try{if(Qn){Et.update(e,Hn.read());for(const t of Et.state.events)t.type==="checkpoint"&&N0();if(ii.handle(Et.state.events),Et.state.events.length=0,ii.tick(Et.state,e),Et.state.status==="dead"&&Vn("dead"),Et.state.status==="complete"){try{localStorage.setItem("fossil-noir-3d-best",String(Math.floor(Et.state.time)))}catch{}Vn("complete")}}Hs.render(Et.state,Qn?e:0,ln.settings),U0.render(Et.state,Qn?e:0),ln.update(Et.state)}catch(t){console.error("Fossil Noir 3D runtime error",t),ni=!0,Vn("menu"),ln.setError("The mission could not continue. Reload this page to restart.")}requestAnimationFrame(Wl)}window.addEventListener("resize",()=>Hs?.resize(ln.settings));document.addEventListener("visibilitychange",()=>{document.hidden&&Qi()});window.addEventListener("blur",Qi);Ua.addEventListener("webglcontextlost",s=>{s.preventDefault(),Qi(),ni=!0,ln.setError("Graphics context lost. Reload the page to recover the mission.")});requestAnimationFrame(Wl);
