(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[154],{596:function(t,e,r){"use strict";var o=r(0),a=(r(5),r(4)),s=(r(7),r(1)),i=r(2),n=(r(3),r(8),r(9),r(12)),c=r(58);const p=a.a.getLogger("esri.tasks.support.ProjectParameters");let u=class extends n.a{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}get outSR(){return p.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference}set outSR(t){p.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=t}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(c.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o.a)([Object(s.b)()],u.prototype,"geometries",void 0),Object(o.a)([Object(s.b)({json:{read:{source:"outSR"}}})],u.prototype,"outSpatialReference",void 0),Object(o.a)([Object(s.b)({json:{read:!1}})],u.prototype,"outSR",null),Object(o.a)([Object(s.b)()],u.prototype,"transformation",void 0),Object(o.a)([Object(s.b)()],u.prototype,"transformForward",void 0),u=Object(o.a)([Object(i.a)("esri.tasks.support.ProjectParameters")],u);var f=u;e.a=f}}]);
//# sourceMappingURL=154.25280acf.chunk.js.map