self.webpackChunkRemoteClient([119,139],{608:function(e,n,r){!function(e){"use strict";
//! moment.js locale configuration
var n="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),r="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function t(e){return e>1&&e<5}function s(e,n,r,s){var a=e+" ";switch(r){case"s":return n||s?"pár sekúnd":"pár sekundami";case"ss":return n||s?a+(t(e)?"sekundy":"sekúnd"):a+"sekundami";case"m":return n?"minúta":s?"minútu":"minútou";case"mm":return n||s?a+(t(e)?"minúty":"minút"):a+"minútami";case"h":return n?"hodina":s?"hodinu":"hodinou";case"hh":return n||s?a+(t(e)?"hodiny":"hodín"):a+"hodinami";case"d":return n||s?"deň":"dňom";case"dd":return n||s?a+(t(e)?"dni":"dní"):a+"dňami";case"M":return n||s?"mesiac":"mesiacom";case"MM":return n||s?a+(t(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return n||s?"rok":"rokom";case"yy":return n||s?a+(t(e)?"roky":"rokov"):a+"rokmi"}}e.defineLocale("sk",{months:n,monthsShort:r,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:s,ss:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(r(63))},61:function(e,n){function r(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=61}});