(this.webpackJsonparcgis=this.webpackJsonparcgis||[]).push([[33],{321:function(e,t){function a(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=321},339:function(e,t,a){},340:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(209),i=a(157),r=a.n(i),s=a(328),c=a.n(s),l=(a(339),a(264)),o=a(258),u=a(175),f=a(329);a(340);var p=function(){const e=Object(i.useRef)(null);return Object(i.useEffect)((()=>{if(e.current){const t=new o.a({basemap:"gray-vector"}),a=(new f.a({map:t,container:e.current,extent:{spatialReference:{wkid:102100},xmax:-13581772,xmin:-13584170,ymax:4436367,ymin:4435053}}),{title:"station: {Station_Name}",content:[{type:"fields",fieldInfos:[{fieldName:"Fuel_Type_Code",label:"Fuel type"},{fieldName:"EV_Network",label:"EV network"},{fieldName:"EV_Connector_Types",label:"EV connection types"},{fieldName:"Station_Name",label:"Station Name"}]}]}),n=36112,i=new l.default({url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",outFields:["*"],popupTemplate:a,renderer:new u.default({url:"https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af",fieldMap:{fuel_type:"Fuel_Type_Code"},config:{show_label:"false"},visualVariables:[{type:"size",valueExpression:"$view.scale",stops:[{value:n/2,size:20},{value:2*n,size:15},{value:4*n,size:10},{value:8*n,size:5},{value:16*n,size:2},{value:32*n,size:1}]}]}),minScale:0,maxScale:1e4}),r=new l.default({url:"https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",outFields:["*"],popupTemplate:a,renderer:new u.default({url:"https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af",fieldMap:{fuel_type:"Fuel_Type_Code",connector_types:"EV_Connector_Types",network:"EV_Network",name:"Station_Name"},config:{show_label:"true"}}),minScale:1e4,maxScale:0});t.addMany([i,r])}}),[]),Object(n.jsx)("div",{className:"mapDiv",ref:e})};var d=e=>{e&&e instanceof Function&&a.e(230).then(a.bind(null,734)).then((({getCLS:t,getFID:a,getFCP:n,getLCP:i,getTTFB:r})=>{t(e),a(e),n(e),i(e),r(e)}))};a(341);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),d()}},[[342,34,35]]]);
//# sourceMappingURL=main.7637bf8e.chunk.js.map