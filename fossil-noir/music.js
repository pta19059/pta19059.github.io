/* Original score: "Vesper After Dark". Synthesized locally with Web Audio. */
(() => {
  'use strict';
  const melody = [
    [[0,12,2],[3,15,1],[4,19,2],[6,17,1],[8,15,3],[12,12,2],[14,10,1]],
    [[0,12,3],[4,7,2],[7,10,1],[8,12,3],[12,15,2]],
    [[0,10,2],[3,14,1],[4,17,3],[8,14,2],[10,10,2],[14,9,1]],
    [[0,10,3],[4,5,2],[8,9,2],[11,10,1],[12,14,3]],
    [[0,8,2],[3,12,1],[4,15,3],[8,19,2],[11,15,1],[12,12,3]],
    [[0,15,2],[4,12,3],[8,8,2],[11,7,1],[12,8,3]],
    [[0,7,2],[3,11,1],[4,14,2],[6,17,2],[8,14,2],[11,11,1],[12,7,2],[14,11,2]],
    [[0,14,3],[4,11,2],[8,7,2],[12,11,2],[14,14,1]]
  ];
  const chords = [[0,3,7,10],[-2,2,5,9],[-4,0,3,7],[-5,-1,2,5]];
  const tempos = [112,86,116,120,114,124,110,122];
  const transpose = [0,0,2,0,-2,2,-2,0];
  const hz = midi => 440 * 2 ** ((midi - 69) / 12);

  function create(context) {
    const output = context.createGain();
    output.gain.value = 0; output.connect(context.destination);
    const noise = context.createBuffer(1, Math.ceil(context.sampleRate * .25), context.sampleRate);
    const samples = noise.getChannelData(0);
    let seed = 19059;
    for (let i=0;i<samples.length;i++) {seed=(seed*1664525+1013904223)>>>0;samples[i]=seed/2147483648-1;}
    const voices = new Set();
    let playing=false,track='',step=0,nextTime=0;

    function voice(source,time,duration,volume,filter=null) {
      const gain=context.createGain();
      gain.gain.setValueAtTime(0,time);
      gain.gain.linearRampToValueAtTime(volume,time+.006);
      gain.gain.exponentialRampToValueAtTime(.0001,time+Math.max(.012,duration));
      if(filter){source.connect(filter);filter.connect(gain);}else source.connect(gain);
      gain.connect(output);voices.add(source);
      source.onended=()=>{voices.delete(source);source.disconnect();gain.disconnect();if(filter)filter.disconnect();};
      source.start(time);source.stop(time+duration+.012);
    }
    function tone(midi,time,duration,volume,type='triangle') {
      const oscillator=context.createOscillator();oscillator.type=type;
      oscillator.frequency.setValueAtTime(hz(midi),time);
      voice(oscillator,time,duration,volume);
    }
    function percussion(time,kind,soft) {
      if(kind==='kick'){
        const oscillator=context.createOscillator();oscillator.type='sine';
        oscillator.frequency.setValueAtTime(125,time);oscillator.frequency.exponentialRampToValueAtTime(42,time+.13);
        voice(oscillator,time,.16,.2);return;
      }
      const source=context.createBufferSource();source.buffer=noise;
      const filter=context.createBiquadFilter();filter.type='highpass';filter.frequency.value=kind==='snare'?1400:6500;
      voice(source,time,kind==='snare'?.11:.035,(kind==='snare'?.1:.036)*(soft?.35:1),filter);
      if(kind==='snare')tone(50,time,.07,.06,'triangle');
    }
    function stop() {
      if(!playing)return;
      const now=context.currentTime;playing=false;
      output.gain.cancelScheduledValues(now);output.gain.setTargetAtTime(0,now,.008);
      for(const source of voices)source.stop(now+.03);
    }
    function update({enabled,active,stage=0,safe=false,boss=false}) {
      if(!enabled||!active||context.state!=='running'){stop();return;}
      const chapter=Math.max(0,Math.min(7,stage)),key=`${chapter}:${safe}:${boss}`;
      if(key!==track){stop();track=key;step=0;}
      const now=context.currentTime,duration=60/(safe?86:tempos[chapter]+(boss?10:0))/4;
      if(!playing){
        playing=true;nextTime=now+.04;
        output.gain.cancelScheduledValues(now);output.gain.setValueAtTime(0,now);
        output.gain.linearRampToValueAtTime(safe?.17:.23,now+.14);
      }
      // Use the audio clock. A delayed frame never queues a burst of missed notes.
      if(nextTime<now)nextTime=now+.02;
      while(nextTime<now+.15){
        const bar=Math.floor(step/16)%16,beat=step%16,chord=chords[Math.floor((bar%8)/2)],shift=transpose[chapter];
        const note=melody[bar%8].find(n=>n[0]===beat);
        if(note&&(!safe||beat%4===0))tone(64+note[1]+shift,nextTime,duration*note[2]*(safe?1.6:.87),safe?.085:.09,safe?'sine':'triangle');
        if(beat%4===0)tone(40+chord[0]+shift+(beat===8?7:beat===12?12:0),nextTime,duration*(safe?3.8:2.8),.12);
        if(safe){
          if(beat===0||beat===8)for(const pitch of chord.slice(0,3))tone(52+pitch+shift,nextTime,duration*7,.018,'sine');
          if(beat===4||beat===12)percussion(nextTime,'hat',true);
        }else{
          if(beat%2===0)tone(64+chord[(beat/2)%4]+shift,nextTime,duration*.75,.024,'square');
          if(beat===0||beat===8||boss&&beat===10)percussion(nextTime,'kick',false);
          if(beat===4||beat===12)percussion(nextTime,'snare',false);
          if(beat%2===0||boss)percussion(nextTime,'hat',false);
          if(bar>=8&&beat===14)tone(76+chord[2]+shift,nextTime,duration*1.6,.035,'sine');
        }
        step=(step+1)%256;nextTime+=duration;
      }
    }
    return {update,stop};
  }
  window.FossilMusic={create};
})();
