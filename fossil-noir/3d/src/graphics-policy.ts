import type {Settings} from './types';

/** Internal buffers are bounded independently of a phone's devicePixelRatio. */
export function renderProfile(settings:Settings,width:number,height:number,touch:boolean,adaptiveScale=1){
 const aspect=Math.max(.3,Math.min(4,width/Math.max(1,height)));
 const enhanced=settings.rendering!=='retro';
 if(!enhanced||settings.resolution==='320'||settings.resolution==='640'){
  const small=settings.resolution==='320';
  return {width:small?320:640,height:small?200:400,enhanced,shadows:false,bloom:false};
 }
 const high=settings.quality==='high';
 let targetHeight=settings.resolution==='1080'?1080:settings.resolution==='720'?720:Math.min(height,900);
 let targetWidth=targetHeight*aspect;
 const capWidth=touch?(high?960:720):(high?1920:1280);
 const capHeight=touch?(high?960:720):(high?1080:720);
 const budget=touch?(high?460800:259200):(high?2073600:921600);
 let factor=Math.min(1,capWidth/targetWidth,capHeight/targetHeight,Math.sqrt(budget/(targetWidth*targetHeight)));
 // Adaptive never supersamples a CSS-sized viewport and has a lower bound.
 if(settings.resolution==='auto')factor*=Math.max(.55,Math.min(1,adaptiveScale));
 targetWidth=Math.max(160,Math.floor(targetWidth*factor));targetHeight=Math.max(120,Math.floor(targetHeight*factor));
 return {width:targetWidth,height:targetHeight,enhanced,shadows:high&&!touch,bloom:high&&!touch};
}
