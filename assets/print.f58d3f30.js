import{bA as P,c as S,h as w,bB as C}from"./index.293eafd3.js";import{a as T}from"./_commonjsHelpers.6150b38b.js";var L=P({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(v,{slots:j}){const h=S(()=>{const s=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(n=>v[n]===!0).map(n=>`q-btn-group--${n}`).join(" ");return`q-btn-group row no-wrap${s.length!==0?" "+s:""}`+(v.spread===!0?" q-btn-group--spread":" inline")});return()=>w("div",{class:h.value},C(j.default))}}),M={exports:{}};(function(v,j){(function(s,n){v.exports=n()})(window,function(){return function(h){var s={};function n(o){if(s[o])return s[o].exports;var f=s[o]={i:o,l:!1,exports:{}};return h[o].call(f.exports,f,f.exports,n),f.l=!0,f.exports}return n.m=h,n.c=s,n.d=function(o,f,a){n.o(o,f)||Object.defineProperty(o,f,{enumerable:!0,get:a})},n.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,f){if(f&1&&(o=n(o)),f&8||f&4&&typeof o=="object"&&o&&o.__esModule)return o;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),f&2&&typeof o!="string")for(var b in o)n.d(a,b,function(i){return o[i]}.bind(null,b));return a},n.n=function(o){var f=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(f,"a",f),f},n.o=function(o,f){return Object.prototype.hasOwnProperty.call(o,f)},n.p="",n(n.s=0)}({"./src/index.js":function(h,s,n){n.r(s),n("./src/sass/index.scss");var o=n("./src/js/init.js"),f=o.default.init;typeof window!="undefined"&&(window.printJS=f),s.default=f},"./src/js/browser.js":function(h,s,n){n.r(s);var o={isFirefox:function(){return typeof InstallTrigger!="undefined"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!a.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};s.default=o},"./src/js/functions.js":function(h,s,n){n.r(s),n.d(s,"addWrapper",function(){return b}),n.d(s,"capitalizePrint",function(){return i}),n.d(s,"collectStyles",function(){return l}),n.d(s,"addHeader",function(){return e}),n.d(s,"cleanUp",function(){return u}),n.d(s,"isRawHTML",function(){return p});var o=n("./src/js/modal.js"),f=n("./src/js/browser.js");function a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(c){return typeof c}:a=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(t)}function b(t,d){var c="font-family:"+d.font+" !important; font-size: "+d.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,d){for(var c=document.defaultView||window,E="",y=c.getComputedStyle(t,""),m=0;m<y.length;m++)(d.targetStyles.indexOf("*")!==-1||d.targetStyle.indexOf(y[m])!==-1||r(d.targetStyles,y[m]))&&y.getPropertyValue(y[m])&&(E+=y[m]+":"+y.getPropertyValue(y[m])+";");return E+="max-width: "+d.maxWidth+"px !important; font-size: "+d.font_size+" !important;",E}function r(t,d){for(var c=0;c<t.length;c++)if(a(d)==="object"&&d.indexOf(t[c])!==-1)return!0;return!1}function e(t,d){var c=document.createElement("div");if(p(d.header))c.innerHTML=d.header;else{var E=document.createElement("h1"),y=document.createTextNode(d.header);E.appendChild(y),E.setAttribute("style",d.headerStyle),c.appendChild(E)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&o.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var d="mouseover";(f.default.isChrome()||f.default.isFirefox())&&(d="focus");var c=function E(){window.removeEventListener(d,E),t.onPrintDialogClose();var y=document.getElementById(t.frameId);y&&y.remove()};window.addEventListener(d,c)}function p(t){var d=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return d.test(t)}},"./src/js/html.js":function(h,s,n){n.r(s);var o=n("./src/js/functions.js"),f=n("./src/js/print.js");function a(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(e){return typeof e}:a=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(l)}s.default={print:function(r,e){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=b(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),f.default.send(r,e)}};function b(l,r){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),p=0;p<u.length;p++)if(r.ignoreElements.indexOf(u[p].id)===-1){var t=b(u[p],r);e.appendChild(t)}switch(r.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return a(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(h,s,n){n.r(s);var o=n("./src/js/functions.js"),f=n("./src/js/print.js"),a=n("./src/js/browser.js");s.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=r,a.default.isFirefox()){var u=e.src;e.src=u}var p=document.createElement("div");p.appendChild(e),i.printableElement.appendChild(p)}),i.header&&Object(o.addHeader)(i.printableElement,i),f.default.send(i,l)}}},"./src/js/init.js":function(h,s,n){n.r(s);var o=n("./src/js/browser.js"),f=n("./src/js/modal.js"),a=n("./src/js/pdf.js"),b=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function e(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(d){return typeof d}:e=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},e(p)}var u=["pdf","html","image","json","raw-html"];s.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(O){throw O},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},d=arguments[0];if(d===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(d)){case"string":t.printable=encodeURI(d),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=d.printable,t.fallbackPrintable=typeof d.fallbackPrintable!="undefined"?d.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof d[c]!="undefined"?d[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(d))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&f.default.show(t),t.onLoadingStart&&t.onLoadingStart();var E=document.getElementById(t.frameId);E&&E.parentNode.removeChild(E);var y=document.createElement("iframe");switch(o.default.isFirefox()?y.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):y.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),y.setAttribute("id",t.frameId),t.type!=="pdf"&&(y.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(g){y.srcdoc+='<link rel="stylesheet" href="'+g+'">'})),y.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var m=window.open(t.fallbackPrintable,"_blank");m.focus(),t.onIncompatibleBrowser()}catch(g){t.onError(g)}finally{t.showModal&&f.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else a.default.print(t,y);break;case"image":l.default.print(t,y);break;case"html":b.default.print(t,y);break;case"raw-html":i.default.print(t,y);break;case"json":r.default.print(t,y);break}}}},"./src/js/json.js":function(h,s,n){n.r(s);var o=n("./src/js/functions.js"),f=n("./src/js/print.js");function a(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(r){return typeof r}:a=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a(i)}s.default={print:function(l,r){if(a(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:a(e)==="object"?e.field:e,displayName:a(e)==="object"?e.displayName:e,columnSize:a(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=b(l),f.default.send(l,r)}};function b(i){var l=i.printable,r=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<r.length;u++)e+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var p=0;p<l.length;p++){e+="<tr>";for(var t=0;t<r.length;t++){var d=l[p],c=r[t].field.split(".");if(c.length>1)for(var E=0;E<c.length;E++)d=d[c[E]];else d=d[r[t].field];e+='<td style="width:'+r[t].columnSize+i.gridStyle+'">'+d+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(h,s,n){n.r(s);var o={show:function(a){var b="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",b),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(a.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var a=document.getElementById("printJS-Modal");a&&a.parentNode.removeChild(a)}};s.default=o},"./src/js/pdf.js":function(h,s,n){n.r(s);var o=n("./src/js/print.js"),f=n("./src/js/functions.js");s.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});a(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(f.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(f.cleanUp)(i),i.onError(e.statusText,e);return}a(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function a(b,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(b,i)}},"./src/js/print.js":function(h,s,n){n.r(s);var o=n("./src/js/browser.js"),f=n("./src/js/functions.js"),a={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var p=document.getElementById(e.frameId);p.onload=function(){if(e.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return b(p,e)},1e3):b(p,e);return}var t=p.contentWindow||p.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var d=document.createElement("style");d.innerHTML=e.style,t.head.appendChild(d)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return b(p,e)}):b(p,e)}}};function b(r,e){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){e.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(f.cleanUp)(e)}}function i(r){var e=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(r){return new Promise(function(e){var u=function p(){!r||typeof r.naturalWidth=="undefined"||r.naturalWidth===0||!r.complete?setTimeout(p,500):e()};u()})}s.default=a},"./src/js/raw-html.js":function(h,s,n){n.r(s);var o=n("./src/js/print.js");s.default={print:function(a,b){a.printableElement=document.createElement("div"),a.printableElement.setAttribute("style","width:100%"),a.printableElement.innerHTML=a.printable,o.default.send(a,b)}}},"./src/sass/index.scss":function(h,s,n){},0:function(h,s,n){h.exports=n("./src/index.js")}}).default})})(M);var D=T(M.exports);export{L as Q,D as p};
