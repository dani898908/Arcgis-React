self.webpackChunkRemoteClient([143],{556:function(n,t,e){"use strict";e.r(t),e.d(t,"registerFunctions",(function(){return s}));var r=e(2),c=e(91),u=e(413),i=e(130);function a(n,t,e,a,s,f){if(1===a.length){if(Object(c.u)(a[0]))return Object(r.s)(Object(u.a)(n,a[0],Object(c.O)(a[1],-1)));if(Object(c.v)(a[0]))return Object(r.s)(Object(u.a)(n,a[0].toArray(),Object(c.O)(a[1],-1)))}else if(2===a.length){if(Object(c.u)(a[0]))return Object(r.s)(Object(u.a)(n,a[0],Object(c.O)(a[1],-1)));if(Object(c.v)(a[0]))return Object(r.s)(Object(u.a)(n,a[0].toArray(),Object(c.O)(a[1],-1)));if(Object(c.K)(a[0]))return a[0].load().then(e=>o(i.WhereClause.create(a[1],e.getFieldsIndex()),f,s).then(e=>a[0].calculateStatistic(n,e,Object(c.O)(a[2],1e3),t.abortSignal)))}else if(3===a.length&&Object(c.K)(a[0]))return a[0].load().then(e=>o(i.WhereClause.create(a[1],e.getFieldsIndex()),f,s).then(e=>a[0].calculateStatistic(n,e,Object(c.O)(a[2],1e3),t.abortSignal)));return Object(r.s)(Object(u.a)(n,a,-1))}function o(n,t,e){try{const c=n.getVariables();if(c.length>0){const u=[];for(let n=0;n<c.length;n++){const r={name:c[n]};u.push(t.evaluateIdentifier(e,r))}return Object(r.b)(u).then(t=>{const e={};for(let n=0;n<c.length;n++)e[c[n]]=t[n];return n.parameters=e,n})}return Object(r.s)(n)}catch(n){return Object(r.r)(n)}}function s(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("stdev",e,0,c,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("variance",e,0,c,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("mean",e,0,c,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("mean",e,0,c,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("sum",e,0,c,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("min",e,0,c,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("max",e,0,c,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(Object(c.J)(e,1,1),Object(c.K)(e[0]))return e[0].count(n.abortSignal);if(Object(c.u)(e[0])||Object(c.A)(e[0]))return e[0].length;if(Object(c.v)(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))})}}});