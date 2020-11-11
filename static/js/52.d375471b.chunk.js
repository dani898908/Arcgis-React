(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[52,7],{469:function(e,t,r){"use strict";var o,i=r(0),a=(r(5),r(11)),n=(r(4),r(7),r(1)),s=r(21),l=r(2),c=(r(3),r(8),r(9),r(12));let p=o=class extends c.a{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(i.a)([Object(n.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(i.a)([Object(n.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),Object(i.a)([Object(n.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=o=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorModulation")],p);var d=p;const u=new s.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends c.a{};Object(i.a)([Object(n.b)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],b.prototype,"type",void 0),b=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);var y,h=b,j=r(19);let f=y=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(i.a)([Object(j.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],f.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"size",void 0),Object(i.a)([Object(n.b)({type:Boolean,json:{write:!0}})],f.prototype,"useRealWorldSymbolSizes",void 0),f=y=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],f);var O,m=f;let v=O=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new O({scaleFactor:this.scaleFactor})}};Object(i.a)([Object(j.a)({pointCloudSplatAlgorithm:"splat"})],v.prototype,"type",void 0),Object(i.a)([Object(n.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],v.prototype,"scaleFactor",void 0),v=O=Object(i.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],v);const w={key:"type",base:h,typeMap:{"fixed-size":m,splat:v}},g=Object(s.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let S=class extends c.a{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(a.a)(this.pointSizeAlgorithm),colorModulation:Object(a.a)(this.colorModulation),pointsPerInch:Object(a.a)(this.pointsPerInch)}}};Object(i.a)([Object(n.b)({type:g.apiValues,readOnly:!0,nonNullable:!0,json:{type:g.jsonValues,read:!1,write:g.write}})],S.prototype,"type",void 0),Object(i.a)([Object(n.b)({types:w,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),Object(i.a)([Object(n.b)({type:d,json:{write:!0}})],S.prototype,"colorModulation",void 0),Object(i.a)([Object(n.b)({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=Object(i.a)([Object(l.a)("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new s.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var I=S;t.a=I},493:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return l})),r.d(t,"contentToBlob",(function(){return b})),r.d(t,"fetchResources",(function(){return s})),r.d(t,"getSiblingOfSameType",(function(){return y})),r.d(t,"getSiblingOfSameTypeI",(function(){return h})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return c})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return u}));var o=r(6),i=r(13),a=r(3),n=r(45);async function s(e,t={},r){await e.load(r);const i=Object(a.w)(e.itemUrl,"resources"),{start:n=1,num:s=10,sortOrder:l="asc",sortField:c="created"}=t,p={query:{start:n,num:s,sortOrder:l,sortField:c},signal:Object(o.f)(r,"signal")},d=await e.portal._request(i,p);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function l(e,t,r,n){if(!e.hasPath())throw new i.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(n);const s=Object(a.w)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[l,c]=d(e.path),p=await b(r),u=new FormData;return l&&"."!==l&&u.append("resourcesPrefix",l),u.append("fileName",c),u.append("file",p,c),u.append("f","json"),Object(o.h)(n)&&n.access&&u.append("access",n.access),await e.portalItem.portal._request(s,{method:"post",body:u,signal:Object(o.f)(n,"signal")}),e}async function c(e,t,r){if(!t.hasPath())throw new i.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=Object(a.w)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:Object(o.f)(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(a.w)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(o.f)(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,r]=function(e){const t=Object(a.m)(e);return Object(o.g)(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}(e),[i,n]=d(t);return[i,n,r]}async function b(e){return e instanceof Blob?e:(await Object(n.default)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath(Object(a.w)(r,t+o))}function h(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath(Object(a.w)(r,t+o))}},497:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},504:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var o=r(0),i=(r(5),r(4)),a=(r(7),r(1)),n=r(16),s=r(2),l=r(15),c=r(13),p=r(3),d=r(8),u=(r(9),r(10)),b=r(27),y=r(34),h=r(45),j=r(63),f=r(197),O=r(497);function m(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(O.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var v=r(106),w=r(129),g=r(154),S=r(493);async function I(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const i=new Set(t.resources.toKeep.map((e=>e.resource.path))),a=new Set,n=[];i.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const c of t.resources.toUpdate)if(o.delete(c.resource.path),i.has(c.resource.path)||a.has(c.resource.path)){const{resource:t,content:o,finish:i,error:a}=c,s=Object(S.getSiblingOfSameTypeI)(t,Object(d.a)());e.paths.push(s.path),n.push(x({resource:s,content:o,finish:i,error:a},r))}else e.paths.push(c.resource.path),n.push(T(c,r)),a.add(c.resource.path);for(const c of t.resources.toAdd)n.push(x(c,r)),e.paths.push(c.resource.path);if(o.forEach((e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===n.length)return;const s=await Object(u.j)(n);Object(u.w)(r);const l=s.filter((e=>"error"in e)).map((e=>e.error));if(l.length>0)throw new c.a("save:resources","Failed to save one or more resources",{errors:l})}async function x(e,t){const r=await Object(g.c)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function T(e,t){const r=await Object(g.c)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var R=r(93);const C=i.a.getLogger("esri.layers.mixins.SceneService"),P=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this._debouncedSaveOperations=Object(u.i)((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return b.a.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new b.a(o):null}}readFullExtent(e,t){const r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some((e=>e<N))?null:new y.a({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},a=o.split(".");return a.length>=2&&(i.major=parseInt(a[0],10),i.minor=parseInt(a[1],10)),i}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(v.h)(this.url,t.name);let o=t.name||Object(v.e)(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(v.a)(o)}set url(e){const t=Object(v.g)(this,e,C);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(v.i)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(p.H)(e);return null!=this.layerId&&Object(v.b)(t.path)&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _verifyRootNodeAndUpdateExtent(e,t){if(e)try{return this._updateExtentFromRootPage(e,await this._fetchRootPage(e,t))}catch(e){}return this._updateExtentFromRootNode(await this._fetchRootNode(t))}async _fetchRootPage(e,t){if(!e)return Object(u.t)();const r=Math.floor(e.rootIndex/e.nodesPerPage),o=`${this.parsedUrl.path}/nodepages/${r}`;return(await Object(h.default)(o,{responseType:"json",signal:t})).data}_updateExtentFromRootPage(e,t){if(null==t||null==t.nodes)throw new c.a("sceneservice:invalid-node-page","Inavlid node page.");const r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new c.a("sceneservice:invalid-node-page","Inavlid node page.");if(r.obb.center[0]<N)return;const o=r.obb.halfSize,i=r.obb.center[2],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-a,this.fullExtent.zmax=i+a}_updateExtentFromRootNode(e){if(null==e||null==this.fullExtent||this.fullExtent.hasZ)return;if(!Array.isArray(e.mbs)||4!==e.mbs.length||e.mbs[0]<N)return;const t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}async _fetchRootNode(e){if(!this.rootNode)return;const t=Object(p.w)(this.parsedUrl.path,this.rootNode);try{return(await Object(h.default)(t,{query:{f:"json"},responseType:"json",signal:e})).data}catch(e){throw new c.a("sceneservice:root-node-missing","Root node missing.",{error:e,url:t})}}async _fetchService(e){if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(h.default)(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(h.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...V,...t};let o=f.default.from(e);o||(C.error("_saveAs(): requires a portal item parameter"),await Object(u.t)(new c.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const i=o.portal||j.a.getDefault();await this._ensureLoadBeforeSave(),o.type=_,o.portal=i;const a={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,a)]};return await Object(u.b)(a.resources.pendingOperations),await this._validateAgainstJSONSchema(n,a,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await i._signIn(),await i.user.addItem({item:o,folder:r&&r.folder,data:n}),await I(this.resourceReferences,a,null),this.portalItem=o,m(a),a.portalItem=o,o}async _save(e){const t={...V,...e};this.portalItem||(C.error("_save(): requires the .portalItem property to be set"),await Object(u.t)(new c.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==_&&(C.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+_),await Object(u.t)(new c.a("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(p.H)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||j.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Object(u.b)(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await I(this.resourceReferences,r,null),m(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages.filter((e=>"error"===e.type)).map((e=>new c.a(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||F){const t=(await r.e(152).then(r.bind(null,825))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(C.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map((e=>new c.a("sceneservice:schema-validation",e))).concat(i);throw new c.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new c.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return Object(o.a)([Object(a.b)({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],t.prototype,"id",void 0),Object(o.a)([Object(a.b)({type:b.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(n.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o.a)([Object(a.b)({type:y.a})],t.prototype,"fullExtent",void 0),Object(o.a)([Object(n.a)("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o.a)([Object(a.b)({readOnly:!0,type:w.a})],t.prototype,"heightModelInfo",void 0),Object(o.a)([Object(a.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o.a)([Object(a.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o.a)([Object(a.b)({readOnly:!0})],t.prototype,"version",void 0),Object(o.a)([Object(n.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(o.a)([Object(a.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(a.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o.a)([Object(a.b)({type:String})],t.prototype,"title",void 0),Object(o.a)([Object(n.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o.a)([Object(n.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(o.a)([Object(a.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o.a)([Object(a.b)(R.j)],t.prototype,"url",null),Object(o.a)([Object(l.a)("url")],t.prototype,"writeUrl",null),Object(o.a)([Object(a.b)({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),Object(o.a)([Object(a.b)({readOnly:!0})],t.prototype,"store",void 0),Object(o.a)([Object(a.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o.a)([Object(s.a)("esri.layers.mixins.SceneService")],t),t},N=-1e38,F=!1,_="Scene Service",V={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},564:function(e,t,r){"use strict";r.r(t);var o=r(0),i=(r(5),r(11)),a=r(44),n=r(6),s=r(4),l=r(7),c=r(1),p=r(16),d=r(2),u=r(15),b=r(13),y=r(3),h=(r(8),r(9),r(10)),j=r(235),f=r(139),O=r(45),m=r(169),v=r(286),w=r(170),g=r(288),S=r(298),I=r(93),x=r(290),T=r(289),R=r(291),C=r(313),P=r(304),N=r(504),F=r(12);let _=class extends F.a{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};Object(o.a)([Object(c.b)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"field",void 0),Object(o.a)([Object(c.b)({readOnly:!0,nonNullable:!0,json:{read:!1}})],_.prototype,"type",void 0),_=Object(o.a)([Object(d.a)("esri.layers.pointCloudFilters.PointCloudFilter")],_);var V,q=_,A=r(19);let B=V=class extends q{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new V({field:this.field,requiredClearBits:Object(i.a)(this.requiredClearBits),requiredSetBits:Object(i.a)(this.requiredSetBits)})}};Object(o.a)([Object(c.b)({type:[l.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],B.prototype,"requiredClearBits",void 0),Object(o.a)([Object(c.b)({type:[l.a],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],B.prototype,"requiredSetBits",void 0),Object(o.a)([Object(A.a)({pointCloudBitfieldFilter:"bitfield"})],B.prototype,"type",void 0),B=V=Object(o.a)([Object(d.a)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],B);var K,U=B;let E=K=class extends q{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new K({field:this.field,includedReturns:Object(i.a)(this.includedReturns)})}};Object(o.a)([Object(c.b)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"includedReturns",void 0),Object(o.a)([Object(A.a)({pointCloudReturnFilter:"return"})],E.prototype,"type",void 0),E=K=Object(o.a)([Object(d.a)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],E);var z,D=E;let L=z=class extends q{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new z({field:this.field,mode:this.mode,values:Object(i.a)(this.values)})}};Object(o.a)([Object(c.b)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"mode",void 0),Object(o.a)([Object(A.a)({pointCloudValueFilter:"value"})],L.prototype,"type",void 0),Object(o.a)([Object(c.b)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"values",void 0),L=z=Object(o.a)([Object(d.a)("esri.layers.pointCloudFilters.PointCloudValueFilter")],L);const M={key:"type",base:q,typeMap:{value:L,bitfield:U,return:D}};var k,$=r(469),G=r(629);let J=k=class extends $.a{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new k({...this.cloneProperties(),field:Object(i.a)(this.field)})}};Object(o.a)([Object(A.a)({pointCloudRGBRenderer:"point-cloud-rgb"})],J.prototype,"type",void 0),Object(o.a)([Object(c.b)({type:String,json:{write:!0}})],J.prototype,"field",void 0),J=k=Object(o.a)([Object(d.a)("esri.renderers.PointCloudRGBRenderer")],J);var W=J,H=r(630),Z=r(631);const Q={key:"type",base:$.a,typeMap:{"point-cloud-class-breaks":G.a,"point-cloud-rgb":W,"point-cloud-stretch":H.a,"point-cloud-unique-value":Z.a},errorContext:"renderer"},X=s.a.getLogger("esri.layers.PointCloudLayer"),Y=Object(C.a)();let ee=class extends(Object(N.a)(Object(S.a)(Object(x.a)(Object(T.a)(Object(R.a)(Object(v.a)(m.a))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new g.a(this.fields)}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new w.a;return"FieldTypeInteger"===e.type&&((e=Object(i.a)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new w.a({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,o){Object(a.c)("layerDefinition.drawingInfo.renderer",e.write(null,o),t)}load(e){const t=Object(n.h)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)));return this.addResolvingPromise(r),Object(h.u)(this)}createPopupTemplate(e){const t=Object(P.a)(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const o=new j.a({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos.find((e=>e.fieldName===t.name));if(!r)return;const o=new j.a({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new b.a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new b.a("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===r.name){const e=Object(y.w)(this.parsedUrl.path,"./statistics/"+o.key);return Object(O.default)(e,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new b.a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new b.a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new b.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new b.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&X.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&X.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};Object(o.a)([Object(c.b)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),Object(o.a)([Object(c.b)(I.g)],ee.prototype,"popupEnabled",void 0),Object(o.a)([Object(c.b)({type:f.a,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),Object(o.a)([Object(c.b)({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],ee.prototype,"defaultPopupTemplate",null),Object(o.a)([Object(c.b)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),Object(o.a)([Object(c.b)({type:["show","hide"]})],ee.prototype,"listMode",void 0),Object(o.a)([Object(c.b)({types:[M],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),Object(o.a)([Object(c.b)({type:[w.a]})],ee.prototype,"fields",void 0),Object(o.a)([Object(c.b)({readOnly:!0,dependsOn:["fields"]})],ee.prototype,"fieldsIndex",null),Object(o.a)([Object(p.a)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),Object(o.a)([Object(c.b)(Y.outFields)],ee.prototype,"outFields",void 0),Object(o.a)([Object(c.b)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),Object(o.a)([Object(c.b)(I.b)],ee.prototype,"elevationInfo",null),Object(o.a)([Object(c.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),Object(o.a)([Object(c.b)(I.d)],ee.prototype,"legendEnabled",void 0),Object(o.a)([Object(c.b)({types:Q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:Q},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),Object(o.a)([Object(u.a)("renderer")],ee.prototype,"writeRenderer",null),Object(o.a)([Object(c.b)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=Object(o.a)([Object(d.a)("esri.layers.PointCloudLayer")],ee);var te=ee;t.default=te},629:function(e,t,r){"use strict";var o,i=r(0),a=(r(5),r(11)),n=(r(4),r(7)),s=r(1),l=r(19),c=r(2),p=(r(3),r(8),r(9),r(469)),d=r(173),u=r(12),b=r(26);let y=o=class extends u.a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(a.a)(this.color)})}};Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i.a)([Object(s.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),Object(i.a)([Object(s.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),Object(i.a)([Object(s.b)({type:b.a,json:{type:[n.a],write:!0}})],y.prototype,"color",void 0),y=o=Object(i.a)([Object(c.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);var h,j=y;let f=h=class extends p.a{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(a.a)(this.colorClassBreakInfos),legendOptions:Object(a.a)(this.legendOptions)})}};Object(i.a)([Object(l.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],f.prototype,"type",void 0),Object(i.a)([Object(s.b)({json:{write:!0},type:String})],f.prototype,"field",void 0),Object(i.a)([Object(s.b)({type:d.a,json:{write:!0}})],f.prototype,"legendOptions",void 0),Object(i.a)([Object(s.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),Object(i.a)([Object(s.b)({type:[j],json:{write:!0}})],f.prototype,"colorClassBreakInfos",void 0),f=h=Object(i.a)([Object(c.a)("esri.renderers.PointCloudClassBreaksRenderer")],f);var O=f;t.a=O},630:function(e,t,r){"use strict";var o,i=r(0),a=(r(5),r(11)),n=(r(4),r(7)),s=r(1),l=r(19),c=r(2),p=(r(3),r(8),r(9),r(469)),d=r(173),u=r(12),b=r(26);let y=o=class extends u.a{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null}clone(){return new o({label:this.label,value:this.value,color:Object(a.a)(this.color)})}};Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i.a)([Object(s.b)({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"value",void 0),Object(i.a)([Object(s.b)({type:b.a,json:{type:[n.a],write:!0}})],y.prototype,"color",void 0),y=o=Object(i.a)([Object(c.a)("esri.renderers.support.pointCloud.StopInfo")],y);var h,j=y;let f=h=class extends p.a{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new h({...this.cloneProperties(),field:Object(a.a)(this.field),fieldTransformType:Object(a.a)(this.fieldTransformType),stops:Object(a.a)(this.stops),legendOptions:Object(a.a)(this.legendOptions)})}};Object(i.a)([Object(l.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],f.prototype,"type",void 0),Object(i.a)([Object(s.b)({json:{write:!0},type:String})],f.prototype,"field",void 0),Object(i.a)([Object(s.b)({type:d.a,json:{write:!0}})],f.prototype,"legendOptions",void 0),Object(i.a)([Object(s.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),Object(i.a)([Object(s.b)({type:[j],json:{write:!0}})],f.prototype,"stops",void 0),f=h=Object(i.a)([Object(c.a)("esri.renderers.PointCloudStretchRenderer")],f);var O=f;t.a=O},631:function(e,t,r){"use strict";var o,i=r(0),a=(r(5),r(11)),n=(r(4),r(7)),s=r(1),l=r(19),c=r(2),p=(r(3),r(8),r(9),r(469)),d=r(173),u=r(12),b=r(26);let y=o=class extends u.a{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:Object(a.a)(this.values),color:Object(a.a)(this.color)})}};Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(i.a)([Object(s.b)({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i.a)([Object(s.b)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),Object(i.a)([Object(s.b)({type:b.a,json:{type:[n.a],write:!0}})],y.prototype,"color",void 0),y=o=Object(i.a)([Object(c.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);var h,j=y;let f=h=class extends p.a{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(a.a)(this.field),fieldTransformType:Object(a.a)(this.fieldTransformType),colorUniqueValueInfos:Object(a.a)(this.colorUniqueValueInfos),legendOptions:Object(a.a)(this.legendOptions)})}};Object(i.a)([Object(l.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],f.prototype,"type",void 0),Object(i.a)([Object(s.b)({json:{write:!0},type:String})],f.prototype,"field",void 0),Object(i.a)([Object(s.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],f.prototype,"fieldTransformType",void 0),Object(i.a)([Object(s.b)({type:[j],json:{write:!0}})],f.prototype,"colorUniqueValueInfos",void 0),Object(i.a)([Object(s.b)({type:d.a,json:{write:!0}})],f.prototype,"legendOptions",void 0),f=h=Object(i.a)([Object(c.a)("esri.renderers.PointCloudUniqueValueRenderer")],f);var O=f;t.a=O}}]);
//# sourceMappingURL=52.d375471b.chunk.js.map