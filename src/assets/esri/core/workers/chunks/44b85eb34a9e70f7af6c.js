self.webpackChunkRemoteClient([78,139],{567:function(e,n,r){!function(e){"use strict";
//! moment.js locale configuration
var n="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),r="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),s=[/^led/i,/^úno/i,/^bře/i,/^dub/i,/^kvě/i,/^(čvn|červen$|června)/i,/^(čvc|červenec|července)/i,/^srp/i,/^zář/i,/^říj/i,/^lis/i,/^pro/i],t=/^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;function d(e){return e>1&&e<5&&1!=~~(e/10)}function o(e,n,r,s){var t=e+" ";switch(r){case"s":return n||s?"pár sekund":"pár sekundami";case"ss":return n||s?t+(d(e)?"sekundy":"sekund"):t+"sekundami";case"m":return n?"minuta":s?"minutu":"minutou";case"mm":return n||s?t+(d(e)?"minuty":"minut"):t+"minutami";case"h":return n?"hodina":s?"hodinu":"hodinou";case"hh":return n||s?t+(d(e)?"hodiny":"hodin"):t+"hodinami";case"d":return n||s?"den":"dnem";case"dd":return n||s?t+(d(e)?"dny":"dní"):t+"dny";case"M":return n||s?"měsíc":"měsícem";case"MM":return n||s?t+(d(e)?"měsíce":"měsíců"):t+"měsíci";case"y":return n||s?"rok":"rokem";case"yy":return n||s?t+(d(e)?"roky":"let"):t+"lety"}}e.defineLocale("cs",{months:n,monthsShort:r,monthsRegex:t,monthsShortRegex:t,monthsStrictRegex:/^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,monthsParse:s,longMonthsParse:s,shortMonthsParse:s,weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:o,ss:o,m:o,mm:o,h:o,hh:o,d:o,dd:o,M:o,MM:o,y:o,yy:o},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(r(63))},61:function(e,n){function r(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=61}});