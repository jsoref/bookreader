(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[423],{4851:function(t,e,n){"use strict";n(2526),n(1817),n(2165),n(2222),n(9826),n(1038),n(6992),n(1249),n(7042),n(8309),n(5003),n(489),n(1539),n(8674),n(2419),n(4819),n(4916),n(9714),n(8783),n(3123),n(3948),n(5666);var r=n(7775);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){l(i,r,o,c,a,"next",t)}function a(t){l(i,r,o,c,a,"throw",t)}c(void 0)}))}}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}var g=window.BookReader,y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.vU)(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.G6)();v(this,t),this.djvuPagesPromise=null,this.svgParagraphElement="text",this.svgWordElement="tspan",this.insertNewlines=e,this.pointerEventsOnParagraph=n,e&&(this.svgParagraphElement="g",this.svgWordElement="text")}var e,n;return d(t,[{key:"init",value:function(t){this.djvuPagesPromise=$.ajax({type:"GET",url:"https://cors.archive.org/cors/".concat(t,"/").concat(t,"_djvu.xml"),dataType:"xml",error:function(t){}}).then((function(t){return t&&$(t).find("OBJECT")}))}},{key:"getPageText",value:(n=p(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.djvuPagesPromise;case 2:if(!(n=t.sent)){t.next=5;break}return t.abrupt("return",n[e]);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"interceptCopy",value:function(t){t[0].addEventListener("copy",(function(t){var e=document.getSelection();t.clipboardData.setData("text/plain",e.toString()),t.preventDefault()}))}},{key:"defaultMode",value:function(t){var e=this;t.classList.remove("selectingSVG"),$(t).on("mousedown.textSelectPluginHandler",(function(n){$(n.target).is(".BRwordElement")&&(n.stopPropagation(),t.classList.add("selectingSVG"),$(t).one("mouseup.textSelectPluginHandler",(function(n){""!=window.getSelection().toString()?(n.stopPropagation(),$(t).off(".textSelectPluginHandler"),e.textSelectingMode(t)):t.classList.remove("selectingSVG")})))}))}},{key:"textSelectingMode",value:function(t){var e=this;$(t).on("mousedown.textSelectPluginHandler",(function(t){$(t.target).is(".BRwordElement")||""!=window.getSelection().toString()&&window.getSelection().removeAllRanges(),t.stopPropagation()})),$(t).on("mouseup.textSelectPluginHandler",(function(n){n.stopPropagation(),""==window.getSelection().toString()&&($(t).off(".textSelectPluginHandler"),e.defaultMode(t))}))}},{key:"stopPageFlip",value:function(t){var e=this,n=t.find("svg.textSelectionSVG");n.length&&(n.each((function(t,n){return e.defaultMode(n)})),this.interceptCopy(t))}},{key:"createTextLayer",value:(e=p(regeneratorRuntime.mark((function t(e,n){var r,o,i,c,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.find(".textSelectionSVG").length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.getPageText(e);case 5:if(r=t.sent){t.next=8;break}return t.abrupt("return");case 8:o=$(r).attr("width"),i=$(r).attr("height"),(c=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("xmlns","http://www.w3.org/2000/svg"),c.setAttribute("viewBox","0 0 ".concat(o," ").concat(i)),n.append(c),c.setAttribute("class","textSelectionSVG"),c.setAttribute("preserveAspectRatio","none"),$(c).css({width:"100%",position:"absolute",height:"100%",top:"0",left:"0"}),$(r).find("PARAGRAPH").each((function(t,e){var n=$(e).find("WORD");if(n.length){var r=document.createElementNS("http://www.w3.org/2000/svg",a.svgParagraphElement);r.setAttribute("class","BRparagElement"),a.pointerEventsOnParagraph&&(r.style.pointerEvents="all");for(var o=[],i=0;i<n.length;i++){var u=n[i],f=s($(u).attr("coords").split(",").map(parseFloat),4),l=f[0],p=f[1],v=f[2],h=p-f[3];o.push(h);var d=document.createElementNS("http://www.w3.org/2000/svg",a.svgWordElement);if(d.setAttribute("class","BRwordElement"),d.setAttribute("x",l.toString()),d.setAttribute("y",p.toString()),d.setAttribute("textLength",(v-l).toString()),d.setAttribute("lengthAdjust","spacingAndGlyphs"),d.textContent=u.textContent,r.appendChild(d),i<n.length-1){var g=n[i+1],y=s($(g).attr("coords").split(",").map(parseFloat),4),m=y[0],w=(y[1],y[2],y[3],document.createElementNS("http://www.w3.org/2000/svg",a.svgWordElement));w.setAttribute("class","BRwordElement"),w.setAttribute("x",v.toString()),w.setAttribute("y",p.toString()),m-v>0&&w.setAttribute("textLength",(m-v).toString()),w.setAttribute("lengthAdjust","spacingAndGlyphs"),w.textContent=" ",r.appendChild(w)}i==n.length-1&&a.insertNewlines&&r.appendChild(document.createTextNode("\n"))}o.sort();var b=o[Math.floor(.85*o.length)];r.setAttribute("font-size",b.toString()),c.appendChild(r)}})),this.stopPageFlip(n);case 19:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}(),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=u(e);if(n){var o=u(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)});function o(){return v(this,o),r.apply(this,arguments)}return d(o,[{key:"init",value:function(){this.enableTextSelection&&(this.textSelectionPlugin=new y,this.textSelectionPlugin.init(this.bookId)),i(u(o.prototype),"init",this).call(this)}},{key:"_createPageContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i(u(o.prototype),"_createPageContainer",this).call(this,t,e);return this.enableTextSelection&&this.mode!=this.constModeThumb&&this.textSelectionPlugin.createTextLayer(t,n),n}}]),o}(g);window.BookReader=m},7775:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.vendor;return/chrome/i.test(t)&&/google inc/i.test(e)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/firefox/i.test(t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/safari/i.test(t)&&!/chrome|chromium/i.test(t)}n.d(e,{i7:function(){return r},vU:function(){return o},G6:function(){return i}})},6833:function(t,e,n){var r=n(8113);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},7065:function(t,e,n){"use strict";var r=n(3099),o=n(111),i=[].slice,c={},a=function(t,e,n){if(!(e in c)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";c[e]=Function("C,a","return new C("+r.join(",")+")")}return c[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),c=function(){var r=n.concat(i.call(arguments));return this instanceof c?a(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(c.prototype=e.prototype),c}},842:function(t,e,n){var r=n(7854);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},408:function(t,e,n){var r=n(9670),o=n(7659),i=n(7466),c=n(9974),a=n(1246),u=n(3411),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,v,h,d,g,y,m,w=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(v=a(t)))throw TypeError("Target is not iterable");if(o(v)){for(h=0,d=i(t.length);d>h;h++)if((g=f?w(r(m=t[h])[0],m[1]):w(t[h]))&&g instanceof s)return g;return new s(!1)}p=v.call(t)}for(y=p.next;!(m=y.call(p)).done;)if("object"==typeof(g=u(p,w,m.value,f))&&g&&g instanceof s)return g;return new s(!1)}).stop=function(t){return new s(!0,t)}},5948:function(t,e,n){var r,o,i,c,a,u,s,f,l=n(7854),p=n(1236).f,v=n(4326),h=n(261).set,d=n(6833),g=l.MutationObserver||l.WebKitMutationObserver,y=l.process,m=l.Promise,w="process"==v(y),b=p(l,"queueMicrotask"),x=b&&b.value;x||(r=function(){var t,e;for(w&&(t=y.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},w?c=function(){y.nextTick(r)}:g&&!d?(a=!0,u=document.createTextNode(""),new g(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){h.call(l,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},3366:function(t,e,n){var r=n(7854);t.exports=r.Promise},8523:function(t,e,n){"use strict";var r=n(3099),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:function(t,e,n){var r=n(9670),o=n(111),i=n(8523);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},6340:function(t,e,n){"use strict";var r=n(5005),o=n(3070),i=n(5112),c=n(9781),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},261:function(t,e,n){var r,o,i,c=n(7854),a=n(7293),u=n(4326),s=n(9974),f=n(490),l=n(317),p=n(6833),v=c.location,h=c.setImmediate,d=c.clearImmediate,g=c.process,y=c.MessageChannel,m=c.Dispatch,w=0,b={},x=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},S=function(t){return function(){x(t)}},P=function(t){x(t.data)},j=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++w]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(w),w},d=function(t){delete b[t]},"process"==u(g)?r=function(t){g.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:y&&!p?(i=(o=new y).port2,o.port1.onmessage=P,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(j)||"file:"===v.protocol?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(S(t),0)}:(r=j,c.addEventListener("message",P,!1))),t.exports={set:h,clear:d}},5003:function(t,e,n){var r=n(2109),o=n(7293),i=n(5656),c=n(1236).f,a=n(9781),u=o((function(){c(1)}));r({target:"Object",stat:!0,forced:!a||u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},489:function(t,e,n){var r=n(2109),o=n(7293),i=n(7908),c=n(9518),a=n(8544);r({target:"Object",stat:!0,forced:o((function(){c(1)})),sham:!a},{getPrototypeOf:function(t){return c(i(t))}})},8674:function(t,e,n){"use strict";var r,o,i,c,a=n(2109),u=n(1913),s=n(7854),f=n(5005),l=n(3366),p=n(1320),v=n(2248),h=n(8003),d=n(6340),g=n(111),y=n(3099),m=n(5787),w=n(4326),b=n(2788),x=n(408),S=n(7072),P=n(6707),j=n(261).set,E=n(5948),A=n(9478),k=n(842),R=n(8523),O=n(2534),T=n(9909),C=n(4705),$=n(5112),M=n(7392),_=$("species"),G="Promise",B=T.get,D=T.set,L=T.getterFor(G),F=l,H=s.TypeError,N=s.document,I=s.process,V=f("fetch"),W=R.f,U=W,q="process"==w(I),z=!!(N&&N.createEvent&&s.dispatchEvent),J="unhandledrejection",K=C(G,(function(){if(b(F)===String(F)){if(66===M)return!0;if(!q&&"function"!=typeof PromiseRejectionEvent)return!0}if(u&&!F.prototype.finally)return!0;if(M>=51&&/native code/.test(F))return!1;var t=F.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[_]=e,!(t.then((function(){}))instanceof e)})),Q=K||!S((function(t){F.all(t).catch((function(){}))})),X=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},Y=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;E((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,v=f.reject,h=f.domain;try{l?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===l?a=o:(h&&h.enter(),a=l(o),h&&(h.exit(),s=!0)),a===f.promise?v(H("Promise-chain cycle")):(u=X(a))?u.call(a,p,v):p(a)):v(o)}catch(t){h&&!s&&h.exit(),v(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,n){var r,o;z?((r=N.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):t===J&&k("Unhandled promise rejection",n)},tt=function(t,e){j.call(s,(function(){var n,r=e.value;if(et(e)&&(n=O((function(){q?I.emit("unhandledRejection",r,t):Z(J,t,r)})),e.rejection=q||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){j.call(s,(function(){q?I.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Y(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw H("Promise can't be resolved itself");var o=X(n);o?E((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,Y(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};K&&(F=function(t){m(this,F,G),y(t),r.call(this);var e=B(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){D(this,{type:G,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(F.prototype,{then:function(t,e){var n=L(this),r=W(P(this,F));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=q?I.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Y(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=B(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},R.f=W=function(t){return t===F||t===i?new o(t):U(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new F((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof V&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return A(F,V.apply(s,arguments))}}))),a({global:!0,wrap:!0,forced:K},{Promise:F}),h(F,G,!1,!0),d(G),i=f(G),a({target:G,stat:!0,forced:K},{reject:function(t){var e=W(this);return e.reject.call(void 0,t),e.promise}}),a({target:G,stat:!0,forced:u||K},{resolve:function(t){return A(u&&this===i?F:this,t)}}),a({target:G,stat:!0,forced:Q},{all:function(t){var e=this,n=W(e),r=n.resolve,o=n.reject,i=O((function(){var n=y(e.resolve),i=[],c=0,a=1;x(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=W(e),r=n.reject,o=O((function(){var o=y(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},2419:function(t,e,n){var r=n(2109),o=n(5005),i=n(3099),c=n(9670),a=n(111),u=n(30),s=n(7065),f=n(7293),l=o("Reflect","construct"),p=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),v=!f((function(){l((function(){}))})),h=p||v;r({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(t,e){i(t),c(e);var n=arguments.length<3?t:i(arguments[2]);if(v&&!p)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var o=n.prototype,f=u(a(o)?o:Object.prototype),h=Function.apply.call(t,f,e);return a(h)?h:f}})},4819:function(t,e,n){var r=n(2109),o=n(111),i=n(9670),c=n(6656),a=n(1236),u=n(9518);r({target:"Reflect",stat:!0},{get:function t(e,n){var r,s,f=arguments.length<3?e:arguments[2];return i(e)===f?e[n]:(r=a.f(e,n))?c(r,"value")?r.value:void 0===r.get?void 0:r.get.call(f):o(s=u(e))?t(s,n,f):void 0}})}},0,[[4851,898]]]);
//# sourceMappingURL=plugin.text_selection.js.map