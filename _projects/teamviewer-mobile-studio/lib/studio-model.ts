import { z } from "zod";
const color=z.string().regex(/^#[0-9a-fA-F]{6}$/);
const image=z.string().max(12_000_000).refine(v=>v===""||/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(v));
export const ElementSchema=z.object({id:z.string().min(1).max(100),type:z.enum(["text","button","image","shape","support","circle"]),text:z.string().max(1000),x:z.number().min(0).max(390),y:z.number().min(0).max(844),w:z.number().min(24).max(390),h:z.number().min(24).max(844),color,fill:z.union([color,z.literal("transparent")]),radius:z.number().min(0).max(200),fontSize:z.number().min(10).max(100),bold:z.boolean(),align:z.enum(["left","center","right"]),opacity:z.number().min(0).max(100),src:image,fit:z.enum(["contain","cover"])}).refine(e=>e.x+e.w<=390&&e.y+e.h<=844);
const schema=z.object({version:z.literal(1),name:z.string().max(60),bundleId:z.string().max(150),sdkVersion:z.string().max(40),background:color,backgroundImage:image,statusColor:color,font:z.enum(["Manrope","Arial","Georgia","monospace"]),elements:z.array(ElementSchema).max(150)}).refine(p=>new Set(p.elements.map(e=>e.id)).size===p.elements.length);
export type DesignElement=z.infer<typeof ElementSchema>;
export type ElementType=DesignElement["type"];
export type Project=z.infer<typeof schema>;
export function parseProject(v:unknown):Project{return schema.parse(v)}
export function makeElement(type:ElementType,x=32,y=260):DesignElement{const w=type==="circle"?100:type==="image"?140:326,h=type==="text"?64:type==="image"?140:type==="circle"?100:type==="shape"?130:58;return {id:crypto.randomUUID(),type,text:type==="text"?"Your text":type==="button"?"Continue":type==="support"?"Start support":"",x:Math.max(0,Math.min(x,390-w)),y:Math.max(0,Math.min(y,844-h)),w,h,color:type==="button"||type==="support"?"#ffffff":"#162646",fill:type==="text"?"transparent":type==="button"||type==="support"?"#245bfa":"#e8edfa",radius:type==="circle"?100:16,fontSize:16,bold:type==="button"||type==="support",align:type==="text"?"left":"center",opacity:100,src:"",fit:"contain"};}
export function initialProject(template="support"):Project{
 const dark=template==="dark",clean=template==="clean",fg=dark?"#f7faff":"#132849",muted=dark?"#becadd":"#6b7b96",accent=dark?"#7aecd0":clean?"#19293e":"#255df5";
 const el=(id:string,type:ElementType,text:string,x:number,y:number,w:number,h:number,extra:Partial<DesignElement>={}):DesignElement=>({id,type,text,x,y,w,h,color:fg,fill:"transparent",radius:0,fontSize:16,bold:false,align:"left",opacity:100,src:"",fit:"contain",...extra});
 return {version:1,name:"My support app",bundleId:"com.stefano.support",sdkVersion:"15.73.39",background:dark?"#101d32":"#ffffff",backgroundImage:"",statusColor:fg,font:"Manrope",elements:[
 el("top-card","shape","",0,0,390,475,{fill:dark?"#182b46":clean?"#f0f2f5":"#eff4ff",radius:0}),
 el("logo","shape","S",32,83,48,48,{fill:accent,color:dark?"#102a35":"#ffffff",radius:15,fontSize:28,bold:true,align:"center"}),
 el("brand","text","SUPPORT SPACE",94,89,260,36,{fontSize:13,bold:true}),
 el("headline","text","A helping hand.\nRight here.",32,171,326,117,{fontSize:36,bold:true}),
 el("subtitle","text","The right people. At the right time.\nWe are here to help.",32,311,326,69,{fontSize:16,color:muted}),
 el("support","support","Talk to an expert",32,399,326,58,{fill:accent,color:dark?"#102a35":"#ffffff",radius:16,bold:true,align:"center"}),
 el("help-title","text","How can we help you?",32,510,326,40,{fontSize:20,bold:true}),
 el("card","shape","",32,574,326,127,{fill:dark?"#182b46":"#f5f7fb",radius:20}),
 el("card-title","text","Support, without distance.",52,593,286,36,{fontSize:17,bold:true}),
 el("card-body","text","Share your app screen\nwith an expert you trust.",52,635,286,50,{fontSize:14,color:muted}),
 el("footer","text","A session only starts with your permission.",32,744,326,36,{fontSize:12,color:muted,align:"center"})]};
}
