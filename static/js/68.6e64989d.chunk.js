(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[68],{372:function(n,t,e){"use strict";e.d(t,"a",(function(){return V})),e.d(t,"b",(function(){return D})),e.d(t,"c",(function(){return G})),e.d(t,"d",(function(){return H})),e.d(t,"e",(function(){return S})),e.d(t,"f",(function(){return j})),e.d(t,"g",(function(){return J})),e.d(t,"h",(function(){return L})),e.d(t,"i",(function(){return _})),e.d(t,"j",(function(){return k})),e.d(t,"k",(function(){return q})),e.d(t,"l",(function(){return a})),e.d(t,"m",(function(){return c})),e.d(t,"n",(function(){return o})),e.d(t,"o",(function(){return s})),e.d(t,"p",(function(){return u})),e.d(t,"q",(function(){return f})),e.d(t,"r",(function(){return B})),e.d(t,"s",(function(){return l})),e.d(t,"t",(function(){return d})),e.d(t,"u",(function(){return m})),e.d(t,"v",(function(){return v})),e.d(t,"w",(function(){return w})),e.d(t,"x",(function(){return y})),e.d(t,"y",(function(){return Z})),e.d(t,"z",(function(){return g})),e.d(t,"A",(function(){return z})),e.d(t,"B",(function(){return P})),e.d(t,"C",(function(){return x})),e.d(t,"D",(function(){return M})),e.d(t,"E",(function(){return h})),e.d(t,"F",(function(){return E})),e.d(t,"G",(function(){return R})),e.d(t,"H",(function(){return p})),e.d(t,"I",(function(){return A})),e.d(t,"J",(function(){return b})),e.d(t,"K",(function(){return I}));var r=e(532),i=e(421);function u(n){return r.a.extendedSpatialReferenceInfo(n)}function o(n,t,e){return r.a.clip(i.a,n,t,e)}function a(n,t,e){return r.a.cut(i.a,n,t,e)}function c(n,t,e){return r.a.contains(i.a,n,t,e)}function s(n,t,e){return r.a.crosses(i.a,n,t,e)}function f(n,t,e,u){return r.a.distance(i.a,n,t,e,u)}function l(n,t,e){return r.a.equals(i.a,n,t,e)}function d(n,t,e){return r.a.intersects(i.a,n,t,e)}function h(n,t,e){return r.a.touches(i.a,n,t,e)}function p(n,t,e){return r.a.within(i.a,n,t,e)}function m(n,t,e){return r.a.disjoint(i.a,n,t,e)}function g(n,t,e){return r.a.overlaps(i.a,n,t,e)}function x(n,t,e,u){return r.a.relate(i.a,n,t,e,u)}function v(n,t){return r.a.isSimple(i.a,n,t)}function M(n,t){return r.a.simplify(i.a,n,t)}function w(n,t,e=!1){return r.a.convexHull(i.a,n,t,e)}function y(n,t,e){return r.a.difference(i.a,n,t,e)}function Z(n,t,e){return r.a.symmetricDifference(i.a,n,t,e)}function z(n,t,e){return r.a.intersect(i.a,n,t,e)}function E(n,t,e=null){return r.a.union(i.a,n,t,e)}function P(n,t,e,u,o,a,c){return r.a.offset(i.a,n,t,e,u,o,a,c)}function R(n,t,e,u,o=!1){return r.a.buffer(i.a,n,t,e,u,o)}function A(n,t,e,u,o,a,c){return r.a.geodesicBuffer(i.a,n,t,e,u,o,a,c)}function b(n,t,e,u=!0){return r.a.nearestCoordinate(i.a,n,t,e,u)}function I(n,t,e){return r.a.nearestVertex(i.a,n,t,e)}function V(n,t,e,u,o){return r.a.nearestVertices(i.a,n,t,e,u,o)}function D(n,t,e,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const u=r.a.rotate(t,e,i);return u.spatialReference=n,u}function G(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");const i=r.a.flipHorizontal(t,e);return i.spatialReference=n,i}function H(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");const i=r.a.flipVertical(t,e);return i.spatialReference=n,i}function S(n,t,e,u,o){return r.a.generalize(i.a,n,t,e,u,o)}function j(n,t,e,u){return r.a.densify(i.a,n,t,e,u)}function J(n,t,e,u,o=0){return r.a.geodesicDensify(i.a,n,t,e,u,o)}function L(n,t,e){return r.a.planarArea(i.a,n,t,e)}function _(n,t,e){return r.a.planarLength(i.a,n,t,e)}function k(n,t,e,u){return r.a.geodesicArea(i.a,n,t,e,u)}function q(n,t,e,u){return r.a.geodesicLength(i.a,n,t,e,u)}var B=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:u,clip:o,cut:a,contains:c,crosses:s,distance:f,equals:l,intersects:d,touches:h,within:p,disjoint:m,overlaps:g,relate:x,isSimple:v,simplify:M,convexHull:w,difference:y,symmetricDifference:Z,intersect:z,union:E,offset:P,buffer:R,geodesicBuffer:A,nearestCoordinate:b,nearestVertex:I,nearestVertices:V,rotate:D,flipHorizontal:G,flipVertical:H,generalize:S,densify:j,geodesicDensify:J,planarArea:L,planarLength:_,geodesicArea:k,geodesicLength:q})},421:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));const r={convertToGEGeometry:function(n,t){return null==t?null:n.convertJSONToGeometry(t)},exportPoint:function(n,t,e){const r=new i(n.getPointX(t),n.getPointY(t),e),u=n.hasZ(t),o=n.hasM(t);return u&&(r.z=n.getPointZ(t)),o&&(r.m=n.getPointM(t)),r},exportPolygon:function(n,t,e){return new u(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportPolyline:function(n,t,e){return new o(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportMultipoint:function(n,t,e){return new a(n.exportPoints(t),e,n.hasZ(t),n.hasM(t))},exportExtent:function(n,t,e){const r=n.hasZ(t),i=n.hasM(t),u=new c(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),e);if(r){const e=n.getZExtent(t);u.zmin=e.vmin,u.zmax=e.vmax}if(i){const e=n.getMExtent(t);u.mmin=e.vmin,u.mmax=e.vmax}return u}};class i{constructor(n,t,e){this.x=n,this.y=t,this.spatialReference=e,this.z=void 0,this.m=void 0}}class u{constructor(n,t,e,r){this.rings=n,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),r&&(this.hasM=r)}}class o{constructor(n,t,e,r){this.paths=n,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),r&&(this.hasM=r)}}class a{constructor(n,t,e,r){this.points=n,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),r&&(this.hasM=r)}}class c{constructor(n,t,e,r,i){this.xmin=n,this.ymin=t,this.xmax=e,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},678:function(n,t,e){"use strict";e.r(t),e.d(t,"executeGEOperation",(function(){return i}));var r=e(372);function i(n){return(0,r.r[n.operation])(...n.parameters)}}}]);
//# sourceMappingURL=68.6e64989d.chunk.js.map