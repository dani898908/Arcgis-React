(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[22],{483:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return p})),r.d(t,"g",(function(){return E})),r.d(t,"h",(function(){return m})),r.d(t,"i",(function(){return T})),r.d(t,"j",(function(){return l})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return B}));var n=r(32);function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function f(e,t,r,n,s){return e[0]=t,e[1]=r,e[2]=n,e[3]=s,e}function u(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function i(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function y(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function d(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function c(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function h(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2],f=t[3]-e[3];return Math.sqrt(r*r+n*n+s*s+f*f)}function o(e,t){const r=t[0]-e[0],n=t[1]-e[1],s=t[2]-e[2],f=t[3]-e[3];return r*r+n*n+s*s+f*f}function a(e){const t=e[0],r=e[1],n=e[2],s=e[3];return Math.sqrt(t*t+r*r+n*n+s*s)}function p(e){const t=e[0],r=e[1],n=e[2],s=e[3];return t*t+r*r+n*n+s*s}function l(e,t){const r=t[0],n=t[1],s=t[2],f=t[3];let u=r*r+n*n+s*s+f*f;return u>0&&(u=1/Math.sqrt(u),e[0]=r*u,e[1]=n*u,e[2]=s*u,e[3]=f*u),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function T(e,t,r,n){const s=t[0],f=t[1],u=t[2],i=t[3];return e[0]=s+n*(r[0]-s),e[1]=f+n*(r[1]-f),e[2]=u+n*(r[2]-u),e[3]=i+n*(r[3]-i),e}function B(e,t,r){const n=t[0],s=t[1],f=t[2],u=t[3];return e[0]=r[0]*n+r[4]*s+r[8]*f+r[12]*u,e[1]=r[1]*n+r[5]*s+r[9]*f+r[13]*u,e[2]=r[2]*n+r[6]*s+r[10]*f+r[14]*u,e[3]=r[3]*n+r[7]*s+r[11]*f+r[15]*u,e}function E(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function m(e,t){const r=e[0],s=e[1],f=e[2],u=e[3],i=t[0],y=t[1],d=t[2],c=t[3];return Math.abs(r-i)<=n.a*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(s-y)<=n.a*Math.max(1,Math.abs(s),Math.abs(y))&&Math.abs(f-d)<=n.a*Math.max(1,Math.abs(f),Math.abs(d))&&Math.abs(u-c)<=n.a*Math.max(1,Math.abs(u),Math.abs(c))}let A=i,S=y,g=d,O=h,M=o,w=a,L=p;Object.freeze({__proto__:null,copy:s,set:f,add:u,subtract:i,multiply:y,divide:d,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:c,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},distance:h,squaredDistance:o,length:a,squaredLength:p,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:l,dot:b,lerp:T,random:function(e,t){let r,s,f,u,i,y;t=t||1;do{r=2*Object(n.b)()-1,s=2*Object(n.b)()-1,i=r*r+s*s}while(i>=1);do{f=2*Object(n.b)()-1,u=2*Object(n.b)()-1,y=f*f+u*u}while(y>=1);const d=Math.sqrt((1-i)/y);return e[0]=t*r,e[1]=t*s,e[2]=t*f*d,e[3]=t*u*d,e},transformMat4:B,transformQuat:function(e,t,r){const n=t[0],s=t[1],f=t[2],u=r[0],i=r[1],y=r[2],d=r[3],c=d*n+i*f-y*s,h=d*s+y*n-u*f,o=d*f+u*s-i*n,a=-u*n-i*s-y*f;return e[0]=c*d+a*-u+h*-y-o*-i,e[1]=h*d+a*-i+o*-u-c*-y,e[2]=o*d+a*-y+c*-i-h*-u,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:E,equals:m,sub:A,mul:S,div:g,dist:O,sqrDist:M,len:w,sqrLen:L})},523:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return q})),r.d(t,"d",(function(){return D})),r.d(t,"e",(function(){return Y})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return T})),r.d(t,"h",(function(){return B})),r.d(t,"i",(function(){return E})),r.d(t,"j",(function(){return _})),r.d(t,"k",(function(){return N})),r.d(t,"l",(function(){return O})),r.d(t,"m",(function(){return a})),r.d(t,"n",(function(){return A})),r.d(t,"o",(function(){return V})),r.d(t,"p",(function(){return J})),r.d(t,"q",(function(){return U})),r.d(t,"r",(function(){return x})),r.d(t,"s",(function(){return v})),r.d(t,"t",(function(){return M})),r.d(t,"u",(function(){return p})),r.d(t,"v",(function(){return S})),r.d(t,"w",(function(){return k})),r.d(t,"x",(function(){return H})),r.d(t,"y",(function(){return I})),r.d(t,"z",(function(){return F})),r.d(t,"A",(function(){return P})),r.d(t,"B",(function(){return w})),r.d(t,"C",(function(){return l})),r.d(t,"D",(function(){return g})),r.d(t,"E",(function(){return z})),r.d(t,"F",(function(){return G})),r.d(t,"G",(function(){return j})),r.d(t,"H",(function(){return C})),r.d(t,"I",(function(){return R})),r.d(t,"J",(function(){return L}));class n{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,u):new f(t,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(e,t){const r=e*this.typedBufferStride;for(let n=0;n<9;n++)t[n]=this.typedBuffer[r+n];return t}setMat(e,t){const r=e*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r+n]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer,f=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let i=0;i<9;++i)n[f+i]=s[u+i]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,u):new f(t,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(e,t){const r=e*this.typedBufferStride;for(let n=0;n<16;n++)t[n]=this.typedBuffer[r+n];return t}setMat(e,t){const r=e*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r+n]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer,f=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let i=0;i<16;++i)n[f+i]=s[u+i]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class f{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,u):new f(t,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var u=r(29);class i{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,u):new f(t,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return Object(u.m)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer,f=e*this.typedBufferStride,u=r*t.typedBufferStride;n[f]=s[u],n[f+1]=s[u+1]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;var y=r(40);class d{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,u):new f(t,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return Object(y.r)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer,f=e*this.typedBufferStride,u=r*t.typedBufferStride;n[f]=s[u],n[f+1]=s[u+1],n[f+2]=s[u+2]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=3;var c=r(483);class h{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,u):new f(t,u,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return Object(c.k)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=n,this.typedBuffer[e*this.typedBufferStride+3]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer,f=e*this.typedBufferStride,u=r*t.typedBufferStride;n[f]=s[u],n[f+1]=s[u+1],n[f+2]=s[u+2],n[f+3]=s[u+3]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=4;class o extends f{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class a extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class p extends d{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class l extends h{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class T extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class B extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class E extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends f{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class A extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class S extends d{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class g extends h{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class O extends f{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class M extends i{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class w extends d{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class L extends h{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class _ extends f{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class x extends i{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class F extends d{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class C extends h{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class N extends f{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class v extends i{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class P extends d{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u32";class R extends h{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class Y extends f{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class U extends i{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class I extends d{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class j extends h{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class q extends f{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class V extends i{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class k extends d{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class z extends h{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class D extends f{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class J extends i{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i32";class H extends d{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class G extends h{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32"},598:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(523),s=r(599);class f{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new f(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,n){const s=this.stride;if(s%4==0){const f=new Uint32Array(e.buffer,t*s,n*s/4);new Uint32Array(this.buffer,r*s,n*s/4).set(f)}else{const f=new Uint8Array(e.buffer,t*s,n*s);new Uint8Array(this.buffer,r*s,n*s).set(f)}}}class u{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,n.m,t),this}vec2f64(e,t){return this.appendField(e,n.n,t),this}vec3f(e,t){return this.appendField(e,n.u,t),this}vec3f64(e,t){return this.appendField(e,n.v,t),this}vec4f(e,t){return this.appendField(e,n.C,t),this}vec4f64(e,t){return this.appendField(e,n.D,t),this}mat3f(e,t){return this.appendField(e,n.f,t),this}mat3f64(e,t){return this.appendField(e,n.g,t),this}mat4f(e,t){return this.appendField(e,n.h,t),this}mat4f64(e,t){return this.appendField(e,n.i,t),this}vec4u8(e,t){return this.appendField(e,n.J,t),this}f32(e,t){return this.appendField(e,n.a,t),this}f64(e,t){return this.appendField(e,n.b,t),this}u8(e,t){return this.appendField(e,n.l,t),this}u16(e,t){return this.appendField(e,n.j,t),this}i8(e,t){return this.appendField(e,n.e,t),this}vec2i8(e,t){return this.appendField(e,n.q,t),this}vec2i16(e,t){return this.appendField(e,n.o,t),this}vec2u8(e,t){return this.appendField(e,n.t,t),this}vec4u16(e,t){return this.appendField(e,n.H,t),this}u32(e,t){return this.appendField(e,n.k,t),this}appendField(e,t,r){const n=t.ElementCount*Object(s.a)(t.ElementType),f=this.stride;this.fields.set(e,{size:n,constructor:t,offset:f,optional:r}),this.stride+=n,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new f(this,e)}createView(e){return new f(this,e)}clone(){const e=new u;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function i(){return new u}},599:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return u}));r(5);function n(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function f(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}}}]);
//# sourceMappingURL=22.242df6a4.chunk.js.map