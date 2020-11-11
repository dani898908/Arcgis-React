(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[50],{378:function(e,t,i){"use strict";var s=i(0),n=(i(5),i(4)),r=(i(7),i(1)),a=i(2),o=(i(3),i(8),i(9),i(17)),l=i(81),c=i(222),u=i(114),h=i(113);let d=class extends(Object(h.b)(Object(c.a)(Object(u.b)(l.a.EventedMixin(o.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw n.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s.a)([Object(r.b)({dependsOn:["layer.opacity","parent.fullOpacity"]})],d.prototype,"fullOpacity",null),Object(s.a)([Object(r.b)()],d.prototype,"layer",void 0),Object(s.a)([Object(r.b)()],d.prototype,"parent",void 0),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],d.prototype,"suspended",null),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],d.prototype,"suspendInfo",null),Object(s.a)([Object(r.b)({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],d.prototype,"legendEnabled",null),Object(s.a)([Object(r.b)({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],d.prototype,"updating",null),Object(s.a)([Object(r.b)({dependsOn:["layer.visible"]})],d.prototype,"visible",null),d=Object(s.a)([Object(a.a)("esri.views.layers.LayerView")],d);var p=d;t.a=p},380:function(e,t,i){"use strict";i.d(t,"a",(function(){return N}));var s=i(0),n=(i(5),i(4),i(7),i(1)),r=i(2),a=(i(3),i(8),i(9),i(20)),o=i(86),l=i(18),c=i(12);let u=class extends c.a{};u=Object(s.a)([Object(r.a)("esri.views.layers.support.ClipArea")],u);var h,d=u;let p=h=class extends d{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new h({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(n.b)({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),Object(s.a)([Object(n.b)({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),Object(s.a)([Object(n.b)({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),Object(s.a)([Object(n.b)({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),Object(s.a)([Object(n.b)({readOnly:!0,dependsOn:["left","right","top","bottom"]})],p.prototype,"version",null),p=h=Object(s.a)([Object(r.a)("esri.views.layers.support.ClipRect")],p);var b,m=p,y=i(427),g=i(67),f=i(34),x=i(74),O=i(58);i(54);const v={base:g.a,key:"type",typeMap:{extent:f.a,polygon:x.a}};let j=b=class extends d{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new b({geometry:this.geometry.clone()})}};Object(s.a)([Object(n.b)({types:v,json:{read:O.a,write:!0}})],j.prototype,"geometry",void 0),Object(s.a)([Object(n.b)({readOnly:!0,dependsOn:["geometry"]})],j.prototype,"version",null),j=b=Object(s.a)([Object(r.a)("esri.views.layers.support.Geometry")],j);var w=j;let _=class extends d{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(n.b)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),Object(s.a)([Object(n.b)({readOnly:!0,dependsOn:["path"]})],_.prototype,"version",null),_=Object(s.a)([Object(r.a)("esri.views.layers.support.Path")],_);var S=_;const R=a.a.ofType({key:"type",base:d,typeMap:{rect:m,path:S,geometry:w}}),N=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new R,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new y.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(l.a)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),Object(l.a)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),Object(l.a)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),Object(l.a)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),(null==(e=this.view)?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,n=i.maxScale;if(null!=s&&null!=n){let i=!s,r=!n;!i&&e<=s&&(i=!0),!r&&e>=n&&(r=!0),t=i&&r}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s.a)([Object(n.b)({type:R,set(e){const t=Object(o.b)(e,this._get("clips"),R);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s.a)([Object(n.b)()],t.prototype,"moving",void 0),Object(s.a)([Object(n.b)()],t.prototype,"attached",void 0),Object(s.a)([Object(n.b)()],t.prototype,"container",void 0),Object(s.a)([Object(n.b)({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s.a)([Object(n.b)()],t.prototype,"updateRequested",void 0),Object(s.a)([Object(n.b)({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),Object(s.a)([Object(n.b)()],t.prototype,"view",void 0),t=Object(s.a)([Object(r.a)("esri.views.2d.layers.LayerView2D")],t),t}},440:function(e,t,i){"use strict";t.a=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(s),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},443:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));i(5);var s=i(151),n=i(221),r=i(263),a=(i(364),i(373)),o=(i(360),i(363),i(390)),l=i(440);function c(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new a.a(e,s)}class u extends o.a{constructor(e=null,t=!0){super(),this.requestRenderOnSourceChangedEnabled=t,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(n.b)()},this.source=e,this.requestRender=this.requestRender.bind(this)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=Object(s.d)(this.transforms.dvs),[i,n]=e.toScreenNoRotation([0,0],this.x,this.y),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,l=a*this.height,c=Math.PI*this.rotation/180;Object(s.a)(t,t,Object(r.b)(i,n)),Object(s.a)(t,t,Object(r.b)(o/2,l/2)),Object(s.h)(t,t,-c),Object(s.a)(t,t,Object(r.b)(-o/2,-l/2)),Object(s.e)(t,t,Object(r.b)(o,l)),Object(s.f)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=c(e,this.sourceWidth,this.sourceHeight):this._texture=c(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof l.a){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},466:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i(353),n=i(457),r=i(428);class a extends r.a{prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[n.a.bitmap],target:()=>this.children,drawPhase:s.c.MAP});return[...super.prepareRenderPasses(e),t]}}},489:function(e,t,i){"use strict";var s=i(0),n=(i(5),i(4),i(7),i(1)),r=i(2),a=(i(3),i(8),i(9),i(10)),o=i(17),l=i(28),c=i(34),u=i(195),h=i(285),d=i(150),p=i(300);const b=Math.PI/180;var m=i(443);const y=Object(u.d)(),g=[0,0],f=new d.a(0,0,0,0);let x=class extends o.a{constructor(e){super(e),this._imagePromise=null,this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=Object(a.i)((async(e,t)=>{const i=e.state,s=Object(l.d)(i.spatialReference),n=this.hidpi?e.pixelRatio:1;if(!e.stationary||this.destroyed)return;this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):function(e,t){const i=t.rotation*b,s=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),[r,a]=t.size;e[0]=Math.round(a*n+r*s),e[1]=Math.round(a*s+r*n)}(g,i);const r=Math.floor(g[0]*n)>this.imageMaxWidth||Math.floor(g[1]*n)>this.imageMaxHeight,a=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),o=!this.imageNormalizationSupported&&a,c=!r&&!o,u=this.imageRotationSupported?i.rotation:0;if(c)this._imagePromise=this._singleExport(i,g,u,n,t);else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);o&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,u,n,t)}return this._imagePromise.then((async e=>{this._imagePromise=null,await Promise.all(e.map((e=>(this.container.addChild(e),e.fadeIn()))));for(const t of this.container.children)e.includes(t)||t.fadeOut().then((()=>{this.container.removeChild(t)}))})).catch((e=>{throw this._imagePromise=null,e}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(t.invalidateTexture(),t.requestRender())}}_export(e,t,i,s,n,r){return Object(a.u)().then((()=>this.fetchSource(e,Math.floor(t*n),Math.floor(i*n),{rotation:s,pixelRatio:n,signal:r}))).then((i=>{const r=new m.a(i);return r.x=e.xmin,r.y=e.ymax,r.resolution=e.width/t,r.rotation=s,r.pixelRatio=n,r}))}_singleExport(e,t,i,s,n){!function(e,t,i,s){const[n,r]=t,[a,o]=s,l=.5*i;e[0]=n-l*a,e[1]=r-l*o,e[2]=n+l*a,e[3]=r+l*o}(y,e.center,e.resolution,t);const r=new c.a(y[0],y[1],y[2],y[3],e.spatialReference);return this._export(r,t[0],t[1],i,s,n).then((e=>[e]))}_tiledExport(e,t,i,s,n){const r=h.a.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),o=new p.a(r),l=o.getTileCoverage(e);if(!l)return null;const u=[];return l.forEach(((r,a,l,h)=>{f.set(r,a,l,h),o.getTileBounds(y,f);const d=new c.a(y[0],y[1],y[2],y[3],e.spatialReference);u.push(this._export(d,t,t,i,s,n))})),Object(a.b)(u)}};Object(s.a)([Object(n.b)()],x.prototype,"_imagePromise",void 0),Object(s.a)([Object(n.b)()],x.prototype,"container",void 0),Object(s.a)([Object(n.b)()],x.prototype,"fetchSource",void 0),Object(s.a)([Object(n.b)()],x.prototype,"hidpi",void 0),Object(s.a)([Object(n.b)()],x.prototype,"imageMaxWidth",void 0),Object(s.a)([Object(n.b)()],x.prototype,"imageMaxHeight",void 0),Object(s.a)([Object(n.b)()],x.prototype,"imageRotationSupported",void 0),Object(s.a)([Object(n.b)()],x.prototype,"imageNormalizationSupported",void 0),Object(s.a)([Object(n.b)()],x.prototype,"requestUpdate",void 0),Object(s.a)([Object(n.b)({dependsOn:["_imagePromise"]})],x.prototype,"updating",null),x=Object(s.a)([Object(r.a)("esri.views.2d.layers.support.ExportStrategy")],x);var O=x;t.a=O},542:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return h})),i.d(t,"c",(function(){return c})),i.d(t,"d",(function(){return E}));var s=i(13),n=i(3),r=i(27),a=i(34);const o=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],l={84:4326,83:4269,27:4267};function c(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const i=e.documentElement;if("ServiceExceptionReport"===i.nodeName){const e=Array.prototype.slice.call(i.childNodes).map((e=>e.textContent)).join("\r\n");throw new s.a("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=b("Capability",i),r=b("Service",i),o=b("Request",n);if(!n||!r||!o)return null;const l=b("Layer",n);if(!l)return null;const c="WMS_Capabilities"===i.nodeName||"WMT_MS_Capabilities"===i.nodeName?i.getAttribute("version"):"1.3.0",u=y("Title",r,"")||y("Name",r,""),h=y("AccessConstraints",r,""),p=y("Abstract",r,""),m=parseInt(y("MaxWidth",r,"5000"),10),g=parseInt(y("MaxHeight",r,"5000"),10),O=x(o,"GetMap"),j=f(o,"GetMap"),_=v(l,c,t);let S,R,N,M,E=0;if(Array.prototype.slice.call(n.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===E?S=e:1===E?(_.name&&(_.name="",_.sublayers.push(v(S,c,t))),_.sublayers.push(v(e,c,t))):_.sublayers.push(v(e,c,t)),E++)})),!_)return null;const I=_.fullExtents;if(R=_.sublayers,R||(R=[]),0===R.length&&R.push(_),N=_.extent,!N){const e=new a.a(R[0].extent);_.extent=e.toJSON(),N=_.extent}if(M=_.spatialReferences,!M.length&&R.length>0){const e=t=>{let i=[];return t.sublayers.forEach((t=>{!i.length&&t.spatialReferences.length&&(i=t.spatialReferences||e(t))})),i};R.forEach((t=>{M.length||(M=t.spatialReferences||e(t))}))}const A=f(o,"GetFeatureInfo");let P;if(A){const e=x(o,"GetFeatureInfo");e.indexOf("text/html")>-1?P="text/html":e.indexOf("text/plain")>-1&&(P="text/plain")}if(!P){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(_)}const C=d(R),T=_.minScale||0,q=_.maxScale||0,F=_.dimensions,L=C.reduce(((e,t)=>e.concat(t.dimensions)),[]),k=F.concat(L).filter(w);let W=null;if(k.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;k.forEach((i=>{const{extent:s}=i;var n;n=s,Array.isArray(n)&&n.length>0&&n[0]instanceof Date?s.forEach((i=>{e=Math.min(e,i.getTime()),t=Math.max(t,i.getTime())})):s.forEach((i=>{e=Math.min(e,i.min.getTime()),t=Math.max(t,i.max.getTime())}))})),W={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:h,description:p,dimensions:F,extent:N,fullExtents:I,featureInfoFormat:P,featureInfoUrl:A,mapUrl:j,maxWidth:m,maxHeight:g,maxScale:q,minScale:T,layers:C,spatialReferences:M,supportedImageFormatTypes:O,timeInfo:W,title:u,version:c}}function u(e){return o.some((t=>{const i=t[0],s=t[1];return e>=i&&e<=s}))}function h(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function d(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(d(e.sublayers)),delete e.sublayers)})),t}function p(e,t,i){var s;return null!=(s=t.getAttribute(e))?s:i}function b(e,t){for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];if(j(s)&&s.nodeName===e)return s}return null}function m(e,t){const i=[];for(let s=0;s<t.childNodes.length;s++){const n=t.childNodes[s];j(n)&&n.nodeName===e&&i.push(n)}return i}function y(e,t,i){const s=b(e,t);return s?s.textContent:i}function g(e,t,i){if(!e)return null;const s=parseFloat(e.getAttribute("minx")),n=parseFloat(e.getAttribute("miny")),o=parseFloat(e.getAttribute("maxx")),l=parseFloat(e.getAttribute("maxy"));let c,u,h,d;i?(c=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(s)?-Number.MAX_VALUE:s,h=isNaN(l)?Number.MAX_VALUE:l,d=isNaN(o)?Number.MAX_VALUE:o):(c=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(n)?-Number.MAX_VALUE:n,h=isNaN(o)?Number.MAX_VALUE:o,d=isNaN(l)?Number.MAX_VALUE:l);const p=new r.a({wkid:t});return new a.a({xmin:c,ymin:u,xmax:h,ymax:d,spatialReference:p})}function f(e,t){const i=b(t,e);if(i){const e=b("DCPType",i);if(e){const t=b("HTTP",e);if(t){const e=b("Get",t);if(e){let t=function(e,t,i,s){const n=b("OnlineResource",i);return n?p("xlink:href",n,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const i=[],s=Object(n.H)(e);for(const n in s.query)s.query.hasOwnProperty(n)&&-1===t.indexOf(n.toLowerCase())&&i.push(n+"="+s.query[n]);return s.path+(i.length?"?"+i.join("&"):"")}(t,["service","request"])}}}}return null}function x(e,t){const i=m("Operation",e);if(0===i.length)return m("Format",b(t,e)).map((e=>e.textContent));const s=[];return i.forEach((e=>{e.getAttribute("name")===t&&m("Format",e).forEach((e=>{s.push(e.textContent)}))})),s}function O(e,t,i){const s=b(t,e);if(!s)return i;const{textContent:n}=s;if(null==n||""===n)return i;const r=Number(n);return isNaN(r)?i:r}function v(e,t,i){var s;if(!e)return null;const n={id:i.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},o=b("LatLonBoundingBox",e),c=b("EX_GeographicBoundingBox",e);let h=null;o&&(h=g(o,4326)),c&&(h=new a.a(0,0,0,0,new r.a({wkid:4326})),h.xmin=parseFloat(y("westBoundLongitude",c,"0")),h.ymin=parseFloat(y("southBoundLatitude",c,"0")),h.xmax=parseFloat(y("eastBoundLongitude",c,"0")),h.ymax=parseFloat(y("northBoundLatitude",c,"0"))),o||c||(h=new a.a(-180,-90,180,90,new r.a({wkid:4326}))),n.minScale=O(e,"MaxScaleDenominator",0),n.maxScale=O(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const i=e.getAttribute(d);if(i&&0===i.indexOf("EPSG:")){const s=parseInt(i.substring(5),10);0===s||isNaN(s)||h||(h="1.3.0"===t?g(e,s,u(s)):g(e,s))}const s=i&&i.indexOf(":");if(s&&s>-1){let r=parseInt(i.substring(s+1,i.length),10);0===r||isNaN(r)||(r=l[r]?l[r]:r);const a="1.3.0"===t?g(e,r,u(r)):g(e,r);n.fullExtents.push(a)}}else if(e.nodeName===d)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(l[e]&&(e=l[e]),-1===n.spatialReferences.indexOf(e)&&n.spatialReferences.push(e))}));else if("Style"!==e.nodeName||n.legendURL){if("Layer"===e.nodeName){const s=v(e,t,i);s&&(s.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(s))}}else{const t=b("LegendURL",e);if(t){const e=b("OnlineResource",t);e&&(n.legendURL=e.getAttribute("xlink:href"))}}})),n.extent=null==(s=h)?void 0:s.toJSON(),n.dimensions=m("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),i=e.getAttribute("units"),s=e.textContent,n=e.getAttribute("unitSymbol"),r=e.getAttribute("default"),a="0"!==p("default",e,"0"),o="0"!==p("nearestValue",e,"0"),l="0"!==p("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(i)?{name:"time",units:"ISO8601",extent:R(s),default:R(r),multipleValues:a,nearestValue:o,current:l}:/^elevation$/i.test(t)?{name:"elevation",units:i,extent:_(s),unitSymbol:n,default:_(r),multipleValues:a,nearestValue:o}:{name:t,units:i,extent:S(s),unitSymbol:n,default:S(r),multipleValues:a,nearestValue:o}})),n}function j(e){return e.nodeType===Node.ELEMENT_NODE}function w(e){return"time"===e.name}function _(e){if(!e)return null;const t=-1!==e.indexOf("/"),i=e.split(",");return t?i.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):i.map((e=>parseFloat(e)))}function S(e){if(!e)return null;const t=-1!==e.indexOf("/"),i=e.split(",");return t?i.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):i}function R(e){if(!e)return null;const t=-1!==e.indexOf("/"),i=e.split(",");return t?i.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?N(t[2]):void 0}})).filter((e=>e)):i.map((e=>new Date(e)))}function N(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:M(t[1]),months:M(t[2]),days:M(t[3]),hours:M(t[4]),minutes:M(t[5]),seconds:M(t[6])}:null}function M(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const i=t[0].replace(",",".");return Number(i)}function E(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}},612:function(e,t,i){"use strict";var s=i(0),n=(i(5),i(4),i(7),i(1)),r=i(2),a=(i(3),i(8),i(9),i(17)),o=i(41),l=i(93),c=i(542);const u={visible:"visibleSublayers"},h=[102100,3857,102113,900913],d=[3395,54004];let p=class extends a.a{constructor(){super(...arguments),this._layerHandles=new o.a,this.extent=null,this._scale=null,this.view=null}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new o.a),this._layerHandles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(u[e.propertyName])))])))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){return(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,{sublayers:i}=e,s=[],n=e=>{const{minScale:i,maxScale:r,sublayers:a,visible:o}=e;o&&(0===t||(0===i||t<=i)&&(0===r||t>=r))&&(a?a.forEach(n):s.unshift(e))};return null==i||i.forEach(n),s}get wkid(){const{extent:e,layer:t}=this,i=t.spatialReferences;let s=e.spatialReference&&e.spatialReference.wkid;i&&-1===i.indexOf(s)&&e.spatialReference.latestWkid&&(s=e.spatialReference.latestWkid);const n=h.some((e=>e===s));if(!i)return s;if(n){const e=[];i.forEach((t=>{h.indexOf(t)>-1&&e.push(t)})),e.length||i.forEach((t=>{d.indexOf(t)>-1&&e.push(t)})),s=e.length>0?e[0]:h[0]}return s}toJSON(){const{extent:e,layer:t,layers:i}=this,{imageFormat:s,imageTransparency:n,spatialReferences:r,version:a}=t;let{wkid:o}=this;r&&-1===r.indexOf(o)&&e.spatialReference.latestWkid&&(o=e.spatialReference.latestWkid);const{xmin:l,ymin:u,xmax:h,ymax:d}=e,p={bbox:"1.3.0"===t.version&&Object(c.a)(o)?`${u},${l},${d},${h}`:`${l},${u},${h},${d}`,format:s,request:"GetMap",service:"WMS",styles:"",transparent:n,version:a};return isNaN(o)||("1.3.0"===a?p.crs="EPSG:"+o:p.srs="EPSG:"+o),{...p,layers:i}}};Object(s.a)([Object(n.b)()],p.prototype,"extent",void 0),Object(s.a)([Object(n.b)()],p.prototype,"layer",null),Object(s.a)([Object(n.b)({readOnly:!0,dependsOn:["visibleSublayers"]})],p.prototype,"layers",null),Object(s.a)([Object(n.b)({type:Number,dependsOn:["view.scale"]})],p.prototype,"scale",null),Object(s.a)([Object(n.b)(l.a)],p.prototype,"timeExtent",void 0),Object(s.a)([Object(n.b)({type:Number,dependsOn:["layers","layer.imageTransparency","timeExtent"],readOnly:!0})],p.prototype,"version",null),Object(s.a)([Object(n.b)()],p.prototype,"view",void 0),Object(s.a)([Object(n.b)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],p.prototype,"visibleSublayers",null),Object(s.a)([Object(n.b)({dependsOn:[],autoTracked:!1})],p.prototype,"wkid",null),p=Object(s.a)([Object(r.a)("esri.layers.support.ExportWMSImageParameters")],p);var b=p;t.a=b},837:function(e,t,i){"use strict";i.r(t);var s=i(0),n=(i(5),i(4)),r=(i(7),i(1)),a=i(2),o=i(13),l=(i(3),i(8),i(9),i(10)),c=i(34),u=i(228),h=i(612),d=i(378);const p=e=>{let t=class extends e{async fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Object(l.t)(new o.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:i}=t;if(!i)return Object(l.t)(new o.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i}));const s=this.createFetchPopupFeaturesQuery(e),{extent:n,width:r,height:a,x:c,y:u}=s;if(!(n&&r&&a))throw new o.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:r,height:a});const h=t.fetchFeatureInfo(n,r,a,c,u);return h?h.then((e=>[e])):Object(l.u)([])}};return Object(s.a)([Object(r.b)()],t.prototype,"layer",void 0),t=Object(s.a)([Object(a.a)("esri.layers.mixins.WMSLayerView")],t),t};var b=i(466),m=i(380),y=i(489);const g=n.a.getLogger("esri.views.2d.layers.WMSLayerView2D");let f=class extends(p(Object(u.a)(Object(m.a)(d.a)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Object(l.t)(new o.a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(l.n)(e)||g.error(e)}))}attach(){const{layer:e,view:t}=this,{imageMaxHeight:i,imageMaxWidth:s}=e;this._bitmapContainer=new b.a,this.container.addChild(this._bitmapContainer),this.strategy=new y.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:i,imageMaxWidth:s,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new h.a({layer:e,view:t}),this.handles.add(this._exportWMSImageParameters.watch("version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"wms")}detach(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,i=this._bitmapContainer,{x:s,y:n}=e,{spatialReference:r}=t;let a=null,o=0,l=0;i.children.some((e=>{const{width:t,height:i,resolution:u,x:h,y:d}=e,p=h+u*t,b=d-u*i;return s>=h&&s<=p&&n<=d&&n>=b&&(a=new c.a({xmin:h,ymin:b,xmax:p,ymax:d,spatialReference:r}),o=t,l=i,!0)}));const u=a.width/o,h=Math.round((s-a.xmin)/u),d=Math.round((a.ymax-n)/u);return{extent:a,width:o,height:l,x:h,y:d}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImage(e,t,i,{timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp,...s})}};Object(s.a)([Object(r.b)()],f.prototype,"strategy",void 0),Object(s.a)([Object(r.b)({dependsOn:["strategy.updating"]})],f.prototype,"updating",void 0),f=Object(s.a)([Object(a.a)("esri.views.2d.layers.WMSLayerView2D")],f);var x=f;t.default=x}}]);
//# sourceMappingURL=50.05f6b49f.chunk.js.map