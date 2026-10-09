import type {GameEvent,GameState,WeaponId} from './types';

/** Small original synthesized soundtrack and effects; no recordings or fetched assets. */
export class AudioSystem {
  private context?:AudioContext;
  private master?:GainNode;
  private fx?:GainNode;
  private music?:GainNode;
  private noise?:AudioBuffer;
  private volume=0.45;
  private unlocked=false;
  private nextBeat=0;
  private beat=0;
  private lastStep=0;
  private lastX=0;
  private lastZ=0;
  private distance=0;
  private lastEnemy=0;
  private musicActive=false;

  constructor() {
    // An AudioContext must only be created/unlocked from the user's start gesture.
  }

  unlock():void {
    try {
      if(!this.context) {
        const AudioCtor=window.AudioContext||(window as unknown as {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;
        if(!AudioCtor)return;
        this.context=new AudioCtor();
        this.master=this.context.createGain();
        this.master.gain.value=this.volume;
        this.master.connect(this.context.destination);
        this.fx=this.context.createGain();this.fx.gain.value=0.8;this.fx.connect(this.master);
        this.music=this.context.createGain();this.music.gain.value=0.2;this.music.connect(this.master);
        const length=this.context.sampleRate*2;
        this.noise=this.context.createBuffer(1,length,this.context.sampleRate);
        const data=this.noise.getChannelData(0);
        let seed=1793;
        for(let i=0;i<length;i++) {seed=(seed*1664525+1013904223)>>>0;data[i]=((seed/4294967296)*2-1);}
      }
      void this.context.resume().then(()=>{this.unlocked=true;this.nextBeat=this.context!.currentTime+0.08;}).catch(()=>{});
      this.unlocked=true;
    } catch { /* A silent game remains playable if the browser declines audio. */ }
  }

  setVolume(value:number):void {
    this.volume=Math.max(0,Math.min(1,value));
    if(this.context&&this.master) this.master.gain.setTargetAtTime(this.volume,this.context.currentTime,0.04);
  }

  suspend():void {
    this.musicActive=false;
    if(this.context&&this.music)this.music.gain.setTargetAtTime(0,this.context.currentTime,0.08);
    // Do not suspend the AudioContext: gesture-free unpausing must remain possible.
  }

  handle(events:GameEvent[]):void {
    if(!this.context||!this.unlocked||this.context.state!=='running')return;
    for(const event of events) {
      switch(event.type) {
        case 'shot':this.shot(event.weapon||'revolver');break;
        case 'reload':
          this.tone(720,0.035,0.11,'square',370);
          this.burst(0.08,0.14,1500,0.09);
          this.tone(440,0.05,0.1,'triangle',180,0.17);
          this.burst(0.03,0.11,2600,0.32);break;
        case 'hurt':this.burst(0.2,0.15,700);this.tone(96,0.17,0.16,'sawtooth',46);break;
        case 'pickup':this.tone(554.37,0.08,0.13,'triangle');this.tone(830.61,0.1,0.11,'triangle',830.61,0.085);break;
        case 'door':this.burst(0.43,0.07,850);this.tone(89,0.3,0.08,'sawtooth',58);this.tone(420,0.06,0.06,'square',350,0.35);break;
        case 'enemy': {
          // Rate-limited warning barks stay audible without becoming a constant wall of noise.
          if(this.context.currentTime-this.lastEnemy>0.65) {
            this.lastEnemy=this.context.currentTime;
            if(event.message?.includes('charging shot')) {
              this.tone(260,0.19,0.055,'sawtooth',790);
              this.tone(880,0.07,0.055,'square',330,0.2);
            } else if(event.message?.startsWith('Strider')) {
              this.tone(90,0.27,0.1,'sawtooth',42);
              this.burst(0.28,0.08,530);
            } else {
              this.tone(195,0.23,0.09,'sawtooth',58);
              this.burst(0.22,0.09,650);
            }
          }
          break;
        }
        case 'kill':this.burst(0.2,0.12,430);this.tone(118,0.22,0.1,'sawtooth',34);break;
        case 'mount':this.tone(110,0.22,0.11,'sawtooth',210);this.tone(82,0.12,0.12,'triangle',45,0.15);break;
        case 'checkpoint':this.chime([261.63,329.63,392],0.16,0.11);break;
        case 'complete':this.chime([164.81,220,261.63,329.63,440],0.18,0.16);break;
        case 'message':break;
      }
    }
  }

  tick(state:GameState,dt:number):void {
    if(!this.context||!this.unlocked||this.context.state!=='running')return;
    if(!this.musicActive) {
      this.musicActive=true;this.nextBeat=this.context.currentTime+0.06;
      this.music?.gain.setTargetAtTime(state.status==='playing'?0.2:0.1,this.context.currentTime,0.35);
    }
    const now=this.context.currentTime;
    // Only a short look-ahead is scheduled, so a paused game immediately goes quiet.
    if(now>this.nextBeat+0.8)this.nextBeat=now+0.04;
    while(this.nextBeat<now+0.11) {
      this.ambientBeat(this.nextBeat,state);
      this.nextBeat+=0.375;this.beat++;
    }
    const p=state.player;
    const travelled=Math.hypot(p.x-this.lastX,p.z-this.lastZ);
    this.lastX=p.x;this.lastZ=p.z;
    if(travelled<1)this.distance+=travelled;
    if(p.grounded&&this.distance>(p.mounted?2.2:1.65)&&now-this.lastStep>0.22&&dt>0) {
      this.distance=0;this.lastStep=now;
      this.burst(0.045,p.mounted?0.10:0.045,p.mounted?350:950);
      this.tone(p.mounted?65:110,0.07,p.mounted?0.11:0.045,'triangle',40);
    }
  }

  private tone(frequency:number,duration:number,volume:number,type:OscillatorType='square',end=frequency,delay=0,bus:'fx'|'music'='fx',at?:number):void {
    const c=this.context;
    if(!c||!this.master||!this.fx||!this.music)return;
    const start=at??c.currentTime+delay;
    const osc=c.createOscillator(),gain=c.createGain();
    osc.type=type;osc.frequency.setValueAtTime(Math.max(1,frequency),start);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1,end),start+duration);
    gain.gain.setValueAtTime(0.0001,start);
    gain.gain.linearRampToValueAtTime(volume,start+Math.min(0.006,duration/4));
    gain.gain.exponentialRampToValueAtTime(0.0001,start+duration);
    osc.connect(gain);gain.connect(bus==='music'?this.music:this.fx);
    osc.start(start);osc.stop(start+duration+0.025);
    osc.onended=()=>{osc.disconnect();gain.disconnect();};
  }

  private burst(duration:number,volume:number,cutoff:number,delay=0,at?:number,bus:'fx'|'music'='fx'):void {
    const c=this.context;
    if(!c||!this.noise||!this.fx||!this.music)return;
    const start=at??c.currentTime+delay;
    const source=c.createBufferSource(),filter=c.createBiquadFilter(),gain=c.createGain();
    source.buffer=this.noise;
    filter.type='lowpass';filter.frequency.setValueAtTime(cutoff,start);filter.Q.value=0.4;
    gain.gain.setValueAtTime(volume,start);gain.gain.exponentialRampToValueAtTime(0.0001,start+duration);
    source.connect(filter);filter.connect(gain);gain.connect(bus==='music'?this.music:this.fx);
    source.start(start,Math.random());source.stop(start+duration+0.025);
    source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};
  }

  private shot(weapon:WeaponId):void {
    switch(weapon) {
      case 'revolver':
        this.burst(0.13,0.34,4800);this.tone(180,0.11,0.24,'triangle',42);
        this.tone(1280,0.027,0.065,'square',190);break;
      case 'shotgun':
        this.burst(0.25,0.48,3900);this.tone(130,0.2,0.28,'triangle',28);
        this.burst(0.05,0.09,1800,0.23);this.burst(0.08,0.11,2900,0.37);break;
      case 'plasma':
        this.tone(980,0.14,0.14,'sawtooth',140);this.tone(1450,0.08,0.07,'triangle',260);
        this.burst(0.07,0.06,4400);break;
      case 'machinegun':
        this.burst(0.075,0.27,4200);this.tone(157,0.065,0.16,'triangle',46);
        this.tone(970,0.017,0.07,'square',380);break;
    }
  }

  private chime(notes:number[],spacing:number,volume:number):void {
    notes.forEach((note,i)=>this.tone(note,0.42,volume,'triangle',note,i*spacing));
  }

  private ambientBeat(at:number,state:GameState):void {
    const b=this.beat%32;
    // Sparse minor-key pulse: noir bass, distant metal hits and a quiet green synth motif.
    const roots=[55,55,65.406,49];
    const root=roots[Math.floor(b/8)];
    if(b%4===0)this.tone(root,0.48,0.21,'triangle',root,0,'music',at);
    if(b%8===4)this.tone(root*2,0.35,0.1,'triangle',root*2,0,'music',at);
    if(b%4===2)this.burst(0.035,0.022,2100,0,at,'music');
    if(b===2||b===11||b===18||b===27) {
      const note=[220,261.626,293.665,196][Math.floor(b/8)];
      this.tone(note,0.8,0.055,'triangle',note,0,'music',at);
      this.tone(note*1.005,0.65,0.025,'sine',note*1.005,0,'music',at+0.12);
    }
    if(state.enemies.some(enemy=>enemy.alive&&enemy.alert)&&b%2===0) {
      this.tone(75,0.085,0.10,'sine',30,0,'music',at);
    }
  }
}
