self.webpackChunkRemoteClient([165],{621:function(r,t,a){"use strict";a.r(t),a.d(t,"i",(function(){return o}));var e=a(62),n=Object(e.b)((function(r,t){!function(r){var t=function(r){var t=0,a=0,e=0,n=0;return r.map((function(r){var c=(r=r.slice())[0],o=c.toUpperCase();if(c!=o)switch(r[0]=o,c){case"a":r[6]+=e,r[7]+=n;break;case"v":r[1]+=n;break;case"h":r[1]+=e;break;default:for(var i=1;i<r.length;)r[i++]+=e,r[i++]+=n}switch(o){case"Z":e=t,n=a;break;case"H":e=r[1];break;case"V":n=r[1];break;case"M":e=t=r[1],n=a=r[2];break;default:e=r[r.length-2],n=r[r.length-1]}return r}))};var a=function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var a=[],e=!0,n=!1,c=void 0;try{for(var o,i=r[Symbol.iterator]();!(e=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);e=!0);}catch(r){n=!0,c=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw c}}return a}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},e=2*Math.PI,n=function(r,t,a,e,n,c,o){var i=r.x,u=r.y;return{x:e*(i*=t)-n*(u*=a)+c,y:n*i+e*u+o}},c=function(r,t){var a=1.5707963267948966===t?.551915024494:-1.5707963267948966===t?-.551915024494:4/3*Math.tan(t/4),e=Math.cos(r),n=Math.sin(r),c=Math.cos(r+t),o=Math.sin(r+t);return[{x:e-n*a,y:n+e*a},{x:c+o*a,y:o-c*a},{x:c,y:o}]},o=function(r,t,a,e){var n=r*a+t*e;return n>1&&(n=1),n<-1&&(n=-1),(r*e-t*a<0?-1:1)*Math.acos(n)},i=function(r,t,a,n,c,i,u,h,s,l,f,v){var p=Math.pow(c,2),b=Math.pow(i,2),y=Math.pow(f,2),M=Math.pow(v,2),g=p*b-p*M-b*y;g<0&&(g=0),g/=p*M+b*y;var x=(g=Math.sqrt(g)*(u===h?-1:1))*c/i*v,w=g*-i/c*f,m=l*x-s*w+(r+a)/2,d=s*x+l*w+(t+n)/2,k=(f-x)/c,C=(v-w)/i,j=(-f-x)/c,A=(-v-w)/i,O=o(1,0,k,C),q=o(k,C,j,A);return 0===h&&q>0&&(q-=e),1===h&&q<0&&(q+=e),[m,d,O,q]},u=function(r){var t=r.px,o=r.py,u=r.cx,h=r.cy,s=r.rx,l=r.ry,f=r.xAxisRotation,v=void 0===f?0:f,p=r.largeArcFlag,b=void 0===p?0:p,y=r.sweepFlag,M=void 0===y?0:y,g=[];if(0===s||0===l)return[];var x=Math.sin(v*e/360),w=Math.cos(v*e/360),m=w*(t-u)/2+x*(o-h)/2,d=-x*(t-u)/2+w*(o-h)/2;if(0===m&&0===d)return[];s=Math.abs(s),l=Math.abs(l);var k=Math.pow(m,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(l,2);k>1&&(s*=Math.sqrt(k),l*=Math.sqrt(k));var C=i(t,o,u,h,s,l,b,M,x,w,m,d),j=a(C,4),A=j[0],O=j[1],q=j[2],z=j[3],T=Math.abs(z)/(e/4);Math.abs(1-T)<1e-7&&(T=1);var F=Math.max(Math.ceil(T),1);z/=F;for(var S=0;S<F;S++)g.push(c(q,z)),q+=z;return g.map((function(r){var t=n(r[0],s,l,w,x,A,O),a=t.x,e=t.y,c=n(r[1],s,l,w,x,A,O),o=c.x,i=c.y,u=n(r[2],s,l,w,x,A,O);return{x1:a,y1:e,x2:o,y2:i,x:u.x,y:u.y}}))},h=function(r){for(var t,a=[],e=0,n=0,c=0,o=0,i=null,h=null,f=0,v=0,p=0,b=r.length;p<b;p++){var y=r[p],M=y[0];switch(M){case"M":c=y[1],o=y[2];break;case"A":var g=u({px:f,py:v,cx:y[6],cy:y[7],rx:y[1],ry:y[2],xAxisRotation:y[3],largeArcFlag:y[4],sweepFlag:y[5]});if(!g.length)continue;for(var x,w=0;w<g.length;w++)y=["C",(x=g[w]).x1,x.y1,x.x2,x.y2,x.x,x.y],w<g.length-1&&a.push(y);break;case"S":var m=f,d=v;"C"!=t&&"S"!=t||(m+=m-e,d+=d-n),y=["C",m,d,y[1],y[2],y[3],y[4]];break;case"T":"Q"==t||"T"==t?(i=2*f-i,h=2*v-h):(i=f,h=v),y=l(f,v,i,h,y[1],y[2]);break;case"Q":i=y[1],h=y[2],y=l(f,v,y[1],y[2],y[3],y[4]);break;case"L":y=s(f,v,y[1],y[2]);break;case"H":y=s(f,v,y[1],v);break;case"V":y=s(f,v,f,y[1]);break;case"Z":y=s(f,v,c,o)}t=M,f=y[y.length-2],v=y[y.length-1],y.length>4?(e=y[y.length-4],n=y[y.length-3]):(e=f,n=v),a.push(y)}return a};function s(r,t,a,e){return["C",r,t,a,e,a,e]}function l(r,t,a,e,n,c){return["C",r/3+2/3*a,t/3+2/3*e,n/3+2/3*a,c/3+2/3*e,n,c]}var f=function(r){var t=[];return r.replace(p,(function(r,a,e){var n=a.toLowerCase();for(e=function(r){var t=r.match(b);return t?t.map(Number):[]}(e),"m"==n&&e.length>2&&(t.push([a].concat(e.splice(0,2))),n="l",a="m"==a?"l":"L");;){if(e.length==v[n])return e.unshift(a),t.push(e);if(e.length<v[n])throw new Error("malformed path data");t.push([a].concat(e.splice(0,v[n])))}})),t},v={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},p=/([astvzqmhlc])([^astvzqmhlc]*)/gi;var b=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;r.draw=function(r,a){for(var e=h(t(f(a))),n=0;n<e.length;n++){var c=e[n];"M"===c[0]?r.moveTo(c[1],c[2]):"C"===c[0]&&r.bezierCurveTo(c[1],c[2],c[3],c[4],c[5],c[6])}},Object.defineProperty(r,"__esModule",{value:!0})}(t)})),c=Object(e.c)(n),o=Object.freeze(Object.assign(Object.create(null),n,{default:c}))}});