self.webpackChunkRemoteClient([192],{357:function(e,t,r){"use strict";r.r(t);var i,o=r(18),n=r(0),a=(r(7),r(1)),s=r(3),l=r(4),c=r(20),p=r(52),d=r(53),b=r(30),y=r(19),u=r(57),j=r(14),O=(r(24),r(34),r(35),r(2)),f=r(55),h=r(56),m=(r(58),r(88)),g=r(137),v=r(51),w=r(113),S=r(81),I=(r(143),r(148),r(157)),R=(r(215),r(235),r(237),r(217)),F=r(218),T=r(219),x=r(82),D=r(112),P=r(111),k=r(149),N=r(110),E=r(439),G=r(85),L=r(92),_=r(89),C=r(128),U=r(107),W=r(252),A=r(238),J=r(479),q=r(402),z=r(253),V=r(182),M=r(106),Q=r(50);let B=i=class extends Q.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"age",void 0),Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"ageReceived",void 0),Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"displayCount",void 0),Object(o.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"maxObservations",void 0),B=i=Object(o.a)([Object(y.a)("esri.layers.support.PurgeOptions")],B);var H=B;const K=s.a.getLogger("esri.layers.StreamLayer"),X=new p.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let Y=class extends(Object(N.a)(Object(W.a)(Object(U.a)(Object(C.a)(Object(k.a)(Object(L.a)(Object(_.a)(Object(x.a)(S.a))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new H,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=f.a.WGS84,this.type="stream",this.url=null,this.updateInterval=100,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){"WebSocket"in n.a||Object(O.r)(new j.a("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."));const t=Object(a.g)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch(e=>e).then(()=>this._fetchService(t))),Object(O.s)(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return Object(J.a)(e,t)}writeWebSceneFeatureReduction(e,t,r,i){Object(J.c)(e,t,"layerDefinition.featureReduction",i)}get fieldsIndex(){return new P.a(this.fields)}set renderer(e){Object(m.f)(e,this.fields),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=Object(T.b)(i,t,r)||void 0;return e||K.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new I.a({defaultSymbol:Z(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map(e=>({id:e.id,symbol:Z(e.symbol,e,r)}))}):new R.a({symbol:Z(t.defaultSymbol,t,r)})}writeRenderer(e,t,r,i){Object(T.c)(e,t,r,i)}writeWebSceneRenderer(e,t,r,i){Object(T.c)(e,t,"layerDefinition.drawingInfo.renderer",i)}createPopupTemplate(e){return Object(V.a)(this,e)}createQuery(){const e=new M.a;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some(t=>(t.name===e&&(r=t.domain),!!r)),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(!(null==(r=this.timeInfo)?void 0:r.trackIdField))throw new j.a("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new j.a("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new j.a("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new j.a("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await Object(v.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(m.f)(this.renderer,this.fields),Object(m.g)(this.timeInfo,this.fields),Object(z.a)(this,{origin:"service"})}};Object(o.a)([Object(c.b)({type:String})],Y.prototype,"copyright",void 0),Object(o.a)([Object(c.b)({readOnly:!0,dependsOn:["fields","title"]})],Y.prototype,"defaultPopupTemplate",null),Object(o.a)([Object(c.b)({type:String})],Y.prototype,"definitionExpression",void 0),Object(o.a)([Object(c.b)({type:String})],Y.prototype,"displayField",void 0),Object(o.a)([Object(c.b)({type:E.a})],Y.prototype,"elevationInfo",void 0),Object(o.a)([Object(d.a)("featureReduction",["layerDefinition.featureReduction"])],Y.prototype,"readFeatureReduction",null),Object(o.a)([Object(u.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:J.b}})],Y.prototype,"writeWebSceneFeatureReduction",null),Object(o.a)([Object(c.b)({type:[D.a]})],Y.prototype,"fields",void 0),Object(o.a)([Object(c.b)({readOnly:!0,dependsOn:["fields"]})],Y.prototype,"fieldsIndex",null),Object(o.a)([Object(c.b)({type:h.a})],Y.prototype,"geometryDefinition",void 0),Object(o.a)([Object(c.b)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:X.read}}})],Y.prototype,"geometryType",void 0),Object(o.a)([Object(c.b)(G.c)],Y.prototype,"labelsVisible",void 0),Object(o.a)([Object(c.b)({type:[A.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:q.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],Y.prototype,"labelingInfo",void 0),Object(o.a)([Object(c.b)(G.d)],Y.prototype,"legendEnabled",void 0),Object(o.a)([Object(c.b)({type:["show","hide"]})],Y.prototype,"listMode",void 0),Object(o.a)([Object(c.b)({type:l.a})],Y.prototype,"maxReconnectionAttempts",void 0),Object(o.a)([Object(c.b)({type:l.a})],Y.prototype,"maxReconnectionInterval",void 0),Object(o.a)([Object(c.b)({type:String})],Y.prototype,"objectIdField",void 0),Object(o.a)([Object(c.b)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],Y.prototype,"operationalLayerType",void 0),Object(o.a)([Object(c.b)(G.g)],Y.prototype,"popupEnabled",void 0),Object(o.a)([Object(c.b)({type:g.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Y.prototype,"popupTemplate",void 0),Object(o.a)([Object(c.b)({type:H})],Y.prototype,"purgeOptions",void 0),Object(o.a)([Object(c.b)({types:F.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],Y.prototype,"renderer",null),Object(o.a)([Object(d.a)("service","renderer",["drawingInfo.renderer","defaultSymbol","type"]),Object(d.a)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol","layerDefinition.type"])],Y.prototype,"readRenderer",null),Object(o.a)([Object(u.a)("renderer")],Y.prototype,"writeRenderer",null),Object(o.a)([Object(u.a)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:F.b}})],Y.prototype,"writeWebSceneRenderer",null),Object(o.a)([Object(c.b)(G.i)],Y.prototype,"screenSizePerspectiveEnabled",void 0),Object(o.a)([Object(c.b)({type:f.a,json:{origins:{service:{read:{source:"spatialReference"}}}}})],Y.prototype,"spatialReference",void 0),Object(o.a)([Object(c.b)({json:{read:!1}})],Y.prototype,"type",void 0),Object(o.a)([Object(c.b)(G.j)],Y.prototype,"url",void 0),Object(o.a)([Object(c.b)({type:Number})],Y.prototype,"updateInterval",void 0),Object(o.a)([Object(c.b)({type:String})],Y.prototype,"webSocketUrl",void 0),Y=Object(o.a)([Object(y.a)("esri.layers.StreamLayer")],Y);const Z=Object(b.b)({types:w.a});var $=Y;t.default=$}});