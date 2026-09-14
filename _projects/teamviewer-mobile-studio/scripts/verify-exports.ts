import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { initialProject, parseProject, makeElement } from '../lib/studio-model';
import { nativeFiles, createZip, previewHtml } from '../lib/studio-export';
const root=process.cwd();
globalThis.fetch=async (input:any)=>{
 const path=String(input);
 assert.match(path,/^\/(fonts|native)\/[A-Za-z0-9/._-]+$/);
 try {return new Response(await fs.readFile(root+'/public'+path))}catch{return new Response('',{status:404})}
};
for(const template of ['support','dark','clean']) assert.equal(parseProject(initialProject(template)).elements.length,11);
for(const type of ['text','button','image','shape','support','circle'] as const){const p=initialProject();p.elements.push(makeElement(type,390,844));parseProject(p);}
const p=initialProject();p.elements[3].text='<script>alert("unsafe")</script>';p.name='A & B <app>';
assert(previewHtml(p).includes('&lt;script&gt;'));
assert(!previewHtml(p).includes('<script>alert("unsafe")'));
assert.throws(()=>parseProject({...p,backgroundImage:'javascript:alert(1)'}));
assert.throws(()=>parseProject({...p,elements:[p.elements[0],p.elements[0]]}));
await assert.rejects(()=>nativeFiles({...p,bundleId:'../../bad'},'android'));
await assert.rejects(()=>nativeFiles({...p,sdkVersion:'15.0.0\nmalicious'},'android'));
await fs.mkdir('/tmp/mobile-studio-export-check',{recursive:true});
for(const platform of ['android','ios']){
 const files=await nativeFiles(p,platform);
 assert.equal(JSON.parse(files['design.json'] as string).name,p.name);
 const zip=createZip(files);
 await fs.writeFile('/tmp/mobile-studio-export-check/'+platform+'.zip',zip);
 if(platform==='android'){
  const workflow=files['.github/workflows/build-android.yml'] as string;
  assert(workflow.includes('${{ secrets.TEAMVIEWER_SDK_TOKEN }}'));
  assert(workflow.includes('assembleTeamviewerDebug'));
  assert((files['app/src/teamviewer/java/com/stefano/support/SupportBridge.java'] as string).includes('connectToSessionCode'));
 }else assert((files['MobileApp/TeamViewerIntegration.swift'] as string).includes('not an implementation'));
 console.log(platform+': source generation, assets and ZIP verified');
}
console.log('Schema boundaries and preview escaping passed');
