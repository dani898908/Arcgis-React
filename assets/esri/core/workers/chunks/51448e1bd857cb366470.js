self.webpackChunkRemoteClient([133],{169:function(e,t,s){"use strict";var r=s(18),i=s(20),l=s(19),o=s(64),a=s(80);let n=class extends o.a{constructor(e){super(e),this._handles=new a.a,this.root=null}initialize(){this._handles.add(this.rootCollectionNames.map(e=>this.watch("root."+e,()=>this.updateCollections(),!0))),this.updateCollections()}destroy(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null}updateCollections(){this._collections=this.rootCollectionNames.map(e=>this.get("root."+e)).filter(e=>null!=e),this.refresh()}refresh(){const e=this._handles;e.remove("collections");const t=new Array;let s=0;for(const e of this._collections)s=this._processCollection(t,s,e);this.splice(s,this.length);for(const s of t)e.add(s.on("after-changes",()=>this.refresh()),"collections")}_createNewInstance(e){return new o.a(e)}_processCollection(e,t,s){return s?(e.push(s),s.forEach(s=>{if(s){if(!this.itemFilterFunction||this.itemFilterFunction(s)){const e=this.indexOf(s,t);e>=0?e!==t&&this.reorder(s,t):this.add(s,t),++t}this.getChildrenFunction&&(t=this._processCollection(e,t,this.getChildrenFunction(s)))}}),t):t}};Object(r.a)([Object(i.b)()],n.prototype,"rootCollectionNames",void 0),Object(r.a)([Object(i.b)()],n.prototype,"root",void 0),Object(r.a)([Object(i.b)()],n.prototype,"getChildrenFunction",void 0),Object(r.a)([Object(i.b)()],n.prototype,"itemFilterFunction",void 0),n=Object(r.a)([Object(l.a)("esri.core.CollectionFlattener")],n);var c=n;t.a=c},349:function(e,t,s){"use strict";s.r(t);var r=s(18),i=(s(7),s(1)),l=(s(3),s(4)),o=s(20),a=s(53),n=s(19),c=s(57),u=s(24),b=(s(34),s(35),s(2)),y=s(55),h=s(56),p=(s(58),s(64)),d=s(169),f=s(81),O=s(82),j=s(110),m=s(92),v=s(89),g=s(128),S=s(107),w=s(5),_=s(16),x=s(175),E=(s(137),s(102)),F=s(51),k=(s(219),s(104),s(132));const C={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function I(e){const t=e.folders||[],s=t.slice(),r=new Map,i=new Map,l=new Map,o=new Map,a=new Map,n={esriGeometryPoint:i,esriGeometryPolyline:l,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach(e=>{const t=Object(w.a)(e);t.featureSet.features=[];const s=e.featureSet.geometryType;r.set(s,t);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===s?P(i,a,e.featureSet.features):"esriGeometryPolyline"===s?P(l,a,e.featureSet.features):"esriGeometryPolygon"===s&&P(o,a,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(e=>{a.set(e.id,e)}),t.forEach(t=>{t.networkLinkIds.forEach(r=>{const i=function(e,t,s){const r=function(e,t){let s;return t.some(t=>t.id===e&&(s=t,!0)),s}(e,s);return r&&(r.parentFolderId=t,r.networkLink=r),r}(r,t.id,e.networkLinks);i&&s.push(i)})}),s.forEach(e=>{e.featureInfos&&(e.points=Object(w.a)(r.get("esriGeometryPoint")),e.polylines=Object(w.a)(r.get("esriGeometryPolyline")),e.polygons=Object(w.a)(r.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const s=n[t.type].get(t.id);s&&e[C[t.type]].featureSet.features.push(s);break}case"GroundOverlay":{const s=a.get(t.id);s&&e.mapImages.push(s);break}}}),e.fullExtent=M([e]))});const c=M(s);return{folders:t,sublayers:s,extent:c}}function G(e,t,s,r){const i=E.b&&E.b.findCredential(e);e=Object(u.e)(e,{token:i&&i.token});const l=_.a.kmlServiceUrl;return Object(F.default)(l,{query:{url:e,model:"simple",folders:"",refresh:0!==s||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function L(e,t,s=null,r=[]){const i=[],l={},o=t.sublayers,a=t.folders.map(e=>e.id);return o.forEach(t=>{const o=new e;if(s?o.read(t,s):o.read(t),r.length&&a.indexOf(o.id)>-1&&(o.visible=-1!==r.indexOf(o.id)),l[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=l[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(o)}else i.unshift(o)}),i}function P(e,t,s){s.forEach(s=>{e.set(s.attributes[t],s)})}function M(e){const t=Object(k.b)(),s=Object(k.b)(k.a);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)Object(x.b)(t,e.geometry),Object(k.e)(s,t);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)Object(x.b)(t,e.geometry),Object(k.e)(s,t);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)Object(x.b)(t,e.geometry),Object(k.e)(s,t);if(r.mapImages)for(const e of r.mapImages)Object(x.b)(t,e.extent),Object(k.e)(s,t)}return Object(k.d)(s,k.a)?null:{xmin:s[0],ymin:s[1],zmin:s[2],xmax:s[3],ymax:s[4],zmax:s[5],spatialReference:y.a.WGS84}}var N,R=s(72),T=s(50),z=s(103),K=s(109),J=s(36);let A=N=class extends(z.a.EventedMixin(Object(T.b)(K.a))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(J.h)(this,"networkLink").then(()=>Object(J.i)(this,"visible")).then(()=>this.load())}load(e){if(!this.networkLink)return;const t=Object(i.g)(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then(e=>{const t=M(e.sublayers);this.fullExtent=h.a.fromJSON(t),this.sourceJSON=e;const s=Object(l.m)(p.a.ofType(N),L(N,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Object(b.s)(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this._sublayersHandles.forEach(e=>e.remove()),this._sublayersHandles=null),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})]),this._set("sublayers",e)}castSublayers(e){return Object(l.m)(p.a.ofType(N),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return G(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(e=>I(e.data))}};Object(r.a)([Object(o.b)()],A.prototype,"description",void 0),Object(r.a)([Object(o.b)()],A.prototype,"id",void 0),Object(r.a)([Object(o.b)({readOnly:!0,value:null})],A.prototype,"networkLink",void 0),Object(r.a)([Object(o.b)({json:{write:{allowNull:!0}}})],A.prototype,"parent",void 0),Object(r.a)([Object(o.b)({value:null,json:{write:{allowNull:!0}}})],A.prototype,"sublayers",null),Object(r.a)([Object(R.a)("sublayers")],A.prototype,"castSublayers",null),Object(r.a)([Object(o.b)({value:null,json:{read:{source:"name"}}})],A.prototype,"title",void 0),Object(r.a)([Object(o.b)({value:!0})],A.prototype,"visible",null),Object(r.a)([Object(a.a)("visible",["visibility"])],A.prototype,"readVisible",null),Object(r.a)([Object(o.b)()],A.prototype,"sourceJSON",void 0),Object(r.a)([Object(o.b)({value:null})],A.prototype,"layer",null),Object(r.a)([Object(o.b)({type:h.a})],A.prototype,"fullExtent",void 0),A=N=Object(r.a)([Object(n.a)("esri.layers.support.KMLSublayer")],A);var H=A;let W=class extends(Object(j.a)(Object(g.a)(Object(S.a)(Object(m.a)(Object(v.a)(Object(O.a)(f.a))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new d.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=y.a.WGS84,this.path=null,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,t)=>{t&&t.forEach(e=>{e.parent=null,e.layer=null}),e&&e.forEach(e=>{e.parent=this,e.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return L(H,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const e=r[0];e.networkLink||(e.visible&&s.push(e.id),e.sublayers&&r.push(...e.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){let e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(i.g)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then(()=>this._fetchService(t))),Object(b.s)(this)}async _fetchService(e){const t=I((await Object(b.s)().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:G(this.url,this.outSpatialReference,this.refreshInterval,e))).data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};Object(r.a)([Object(o.b)({readOnly:!0})],W.prototype,"allSublayers",void 0),Object(r.a)([Object(o.b)({type:y.a})],W.prototype,"outSpatialReference",void 0),Object(r.a)([Object(o.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],W.prototype,"path",void 0),Object(r.a)([Object(o.b)({type:["show","hide","hide-children"]})],W.prototype,"listMode",void 0),Object(r.a)([Object(o.b)({type:["KML"]})],W.prototype,"operationalLayerType",void 0),Object(r.a)([Object(o.b)({type:p.a.ofType(H),json:{write:{ignoreOrigin:!0}}})],W.prototype,"sublayers",void 0),Object(r.a)([Object(a.a)(["web-map","portal-item"],"sublayers",["visibleFolders"])],W.prototype,"readSublayersFromItemOrWebMap",null),Object(r.a)([Object(a.a)("service","sublayers",["sublayers"])],W.prototype,"readSublayers",null),Object(r.a)([Object(c.a)("sublayers")],W.prototype,"writeSublayers",null),Object(r.a)([Object(o.b)({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),Object(r.a)([Object(o.b)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],W.prototype,"title",null),Object(r.a)([Object(o.b)()],W.prototype,"url",void 0),Object(r.a)([Object(o.b)({readOnly:!0,dependsOn:["sublayers"]})],W.prototype,"visibleSublayers",null),Object(r.a)([Object(o.b)({type:h.a})],W.prototype,"extent",void 0),Object(r.a)([Object(o.b)({dependsOn:["extent"]})],W.prototype,"fullExtent",null),W=Object(r.a)([Object(n.a)("esri.layers.KMLLayer")],W);var U=W;t.default=U}});