(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[25],{437:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return a}));var n=t(479);function a(e){let r="";for(const t in e){const n=e[t];if("boolean"==typeof n)n&&(r+=`#define ${t}\n`);else if("number"==typeof n)r+=`#define ${t} ${n.toFixed()}\n`;else if("object"==typeof n){const e=n.options;let a=0;for(const t in e)r+=`#define ${e[t]} ${(a++).toFixed()}\n`;r+=`#define ${t} ${e[n.value]}\n`}}return r}function s(e,r,t,a){t=t||{},a=a||"";const s="function"==typeof r.shaders?r.shaders(t):r.shaders;return new n.a(e,a+s.vertexShader,a+s.fragmentShader,r.attributes)}},494:function(e,r,t){"use strict";var n=t(437);r.a=class{constructor(e){this._programCacheByTemplate=new Map,this._rctx=e}dispose(){this._programCacheByTemplate.forEach((e=>{e.programs.forEach((e=>{e.dispose()}))})),this._programCacheByTemplate=null}getProgram(e,r){return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,(r=>Object(n.a)(this._rctx,e,r))),this.getProgramTemplateInstance(e,r)}addProgramTemplate(e,r){this._programCacheByTemplate.set(e,{constructor:r,programs:new Map})}getProgramTemplateInstance(e,r){const t=this._programCacheByTemplate.get(e);if(t){const e=r?JSON.stringify(r):"default";if(!t.programs.has(e)){const n=t.constructor(r);t.programs.set(e,n)}return t.programs.get(e)}return null}}},515:function(e,r,t){"use strict";r.a=class{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,r=new Map){if(r.has(e))return r.get(e);const t=this.read(e);if(!t)throw new Error("cannot find shader file "+e);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let a=n.exec(t);const s=[];for(;null!=a;)s.push({path:a[1],start:a.index,length:a[0].length}),a=n.exec(t);let o=0,c="";return s.forEach((e=>{c+=t.slice(o,e.start),c+=r.has(e.path)?"":this.resolve(e.path,r),o=e.start+e.length})),c+=t.slice(o),r.set(e,c),c}read(e){return this.readFile(e)}}},683:function(e,r,t){"use strict";t.r(r);var n=t(232);t.d(r,"createContextOrErrorHTML",(function(){return n.b}));var a=t(479);t.d(r,"Program",(function(){return a.a}));var s=t(418);t.d(r,"BufferObject",(function(){return s.a}));var o=t(373);t.d(r,"Texture",(function(){return o.a}));var c=t(442);t.d(r,"VertexArrayObject",(function(){return c.a}));var i=t(535);t.d(r,"Renderbuffer",(function(){return i.a}));var u=t(360);t.d(r,"FramebufferObject",(function(){return u.a}));var f=t(437);t.d(r,"createProgram",(function(){return f.a})),t.d(r,"glslifyDefineMap",(function(){return f.b}));var h=t(494);t.d(r,"ProgramCache",(function(){return h.a}));var d=t(363);t.d(r,"RenderingContext",(function(){return d.a}));var l=t(515);t.d(r,"ShaderCompiler",(function(){return l.a}))}}]);
//# sourceMappingURL=25.0d678652.chunk.js.map