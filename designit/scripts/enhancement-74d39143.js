!function(e,n){"use strict";n()}(this,function(){"use strict";if(console){var e=["#############################################################################################"," __"," [ | / |_"," .---. _ .--..--. _ .--. | | .--. _ __ _ .--..--. .---. ,--. `| |-'","/ /__\\\\[ `.-. .-. |[ '/'`\\ \\| |/ .'`\\ \\[ \\ [ ][ `.-. .-. |/ /__\\\\ `'_\\ : | |","| \\__., | | | | | | | \\__/ || || \\__. | \\ '/ / | | | | | || \\__., _ // | |,| |,"," '.__.'[___||__||__]| ;.__/[___]'.__.'[\\_: / [___||__||__]'.__.'(_)\\'-;__/\\__/"," __ __ [__| _ \\__.' _____ _"," / / | ] (_) |_ _|/ |_"," / / .--.| | .---. .--. __ .--./) _ .--. | | `| |-'"," / // /'`\\' |/ /__\\\\( (`\\] [ | / /'`\\;[ `.-. | | | | |"," / / | \\__/ || \\__., `'.'. | | \\ \\._// | | | | _| |_ | |,","/_/ '.__.;__]'.__.'[\\__) )[___].',__` [___||__]|_____|\\__/"," ( ( __))","","#############################################################################################","","","Want to see how this has been build. Visit the source code on github: ","https://github.com/jvdamgaard/jvdamgaard.github.io/tree/master/src/designit"];console.log(e.join("\n"))}}),function(e,n,t,r,i){"use strict";e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date;var a=r.createElement(t),o=r.getElementsByTagName(t)[0];a.async=1,a.src="//www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o),e[n]("create",i,"auto"),e[n]("send","pageview")}(window,"ga","script",document,"UA-54769518-1"),function(){function e(){return i?{name:"Internet Explorer",msie:r,version:t.match(/(msie |rv:)(\d+(\.\d+)?)/i)[2]}:h?{name:"Opera",opera:r,version:t.match(m)?t.match(m)[1]:t.match(/opr\/(\d+(\.\d+)?)/i)[1]}:a?{name:"Chrome",webkit:r,chrome:r,version:t.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i)[1]}:o?{name:"PhantomJS",webkit:r,phantom:r,version:t.match(/phantomjs\/(\d+(\.\d+)+)/i)[1]}:l?{name:"TouchPad",webkit:r,touchpad:r,version:t.match(/touchpad\/(\d+(\.\d+)?)/i)[1]}:c||u?(n={name:c?"iPhone":"iPad",webkit:r,mobile:r,ios:r,iphone:c,ipad:u},m.test(t)&&(n.version=t.match(m)[1]),n):f?{name:"Android",webkit:r,android:r,mobile:r,version:(t.match(m)||t.match(v))[1]}:s?{name:"Safari",webkit:r,safari:r,version:t.match(m)[1]}:p?(n={name:"Gecko",gecko:r,mozilla:r,version:t.match(v)[1]},g&&(n.name="Firefox",n.firefox=r),n):d?{name:"SeaMonkey",seamonkey:r,version:t.match(/seamonkey\/(\d+(\.\d+)?)/i)[1]}:{}}var n,t=navigator.userAgent,r=!0,i=/(msie|trident)/i.test(t),a=/chrome|crios/i.test(t),o=/phantom/i.test(t),s=/safari/i.test(t)&&!a&&!o,c=/iphone/i.test(t),u=/ipad/i.test(t),l=/touchpad/i.test(t),f=/android/i.test(t),h=/opera/i.test(t)||/opr/i.test(t),g=/firefox/i.test(t),p=/gecko\//i.test(t),d=/seamonkey\//i.test(t),m=/version\/(\d+(\.\d+)?)/i,v=/firefox\/(\d+(\.\d+)?)/i;this.bowser=e(),bowser.msie&&bowser.version>=8||bowser.chrome&&bowser.version>=10||bowser.firefox&&bowser.version>=4||bowser.safari&&bowser.version>=5||bowser.opera&&bowser.version>=10?bowser.a=r:bowser.msie&&bowser.version<8||bowser.chrome&&bowser.version<10||bowser.firefox&&bowser.version<4||bowser.safari&&bowser.version<5||bowser.opera&&bowser.version<10?bowser.c=r:bowser.x=r}.call(this),function(e){function t(e){return"undefined"="=typeof" r="{},i=e.TraceKit,a=[].slice,o="unknown";r.noConflict=function(){return" e.tracekit="i,r},r.wrap=function(e){function" n},r.report=function(){function n=h.length-1;n>=0;--n)h[n]===e&&h.splice(n,1)}function o(e,t){var i=null;if(!t||r.collectWindowErrors){for(var o in h)if(n(h,o))try{h[o].apply(null,[e].concat(a.call(arguments,2)))}catch(s){i=s}if(i)throw i}}function s(e,n,t){var i=null;if(p)r.computeStackTrace.augmentStackTraceWithInitialElement(p,n,t,e),i=p,p=null,g=null;else{var a={url:n,line:t};a.func=r.computeStackTrace.guessFunctionName(a.url,a.line),a.context=r.computeStackTrace.gatherContext(a.url,a.line),i={mode:"onerror",message:e,url:document.location.href,stack:[a]}}return o(i,"from window.onerror"),l?l.apply(this,arguments):!1}function c(){f!==!0&&(l=e.onerror,e.onerror=s,f=!0)}function u(n){var t=a.call(arguments,1);if(p){if(g===n)return;var i=p;p=null,g=null,o.apply(null,[i,null].concat(t))}var s=r.computeStackTrace(n);throw p=s,g=n,e.setTimeout(function(){g===n&&(p=null,g=null,o.apply(null,[s,null].concat(t)))},s.incomplete?2e3:0),n}var l,f,h=[],g=null,p=null;return u.subscribe=t,u.unsubscribe=i,u}(),r.computeStackTrace=function(){function i(n){if(!r.remoteFetching)return"";try{var t=function(){try{return new e.XMLHttpRequest}catch(n){return new e.ActiveXObject("Microsoft.XMLHTTP")}},i=t();return i.open("GET",n,!1),i.send(""),i.responseText}catch(a){return""}}function a(e){if(!n(k,e)){var t="";-1!==e.indexOf(document.domain)&&(t=i(e)),k[e]=t?t.split("\n"):[]}return k[e]}function s(e,n){var r,i=/function ([^(]*)\(([^)]*)\)/,s=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,c="",u=10,l=a(e);if(!l.length)return o;for(var f=0;u>f;++f)if(c=l[n-f]+c,!t(c)){if(r=s.exec(c))return r[1];if(r=i.exec(c))return r[1]}return o}function c(e,n){var i=a(e);if(!i.length)return null;var o=[],s=Math.floor(r.linesOfContext/2),c=s+r.linesOfContext%2,u=Math.max(0,n-s-1),l=Math.min(i.length,n+c-1);n-=1;for(var f=u;l>f;++f)t(i[f])||o.push(i[f]);return o.length>0?o:null}function u(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function l(e){return u(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function f(e,n){for(var t,r,i=0,o=n.length;o>i;++i)if((t=a(n[i])).length&&(t=t.join("\n"),r=e.exec(t)))return{url:n[i],line:t.substring(0,r.index).split("\n").length,column:r.index-t.lastIndexOf("\n",r.index)-1};return null}function h(e,n,t){var r,i=a(n),o=new RegExp("\\b"+u(e)+"\\b");return t-=1,i&&i.length>t&&(r=o.exec(i[t]))?r.index:null}function g(n){for(var t,r,i,a,o=[e.location.href],s=document.getElementsByTagName("script"),c=""+n,h=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,g=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,p=0;p<s.length;++p){var d="s[p];d.src&&o.push(d.src)}if(i=h.exec(c)){var" m="i[1]?"\\s+"+i[1]:"",v=i[2].split(",").join("\\s*,\\s*");t=u(i[3]).replace(/;$/,";?"),r=new" r=new g,"\\s+"));if(a=f(r,o))return a;if(i=g.exec(c)){var _="i[1];if(t=l(i[2]),r=new" regexp("on"+_+"="[\\'\"]\\s*"+t+"\\s*[\\'\"]","i"),a=f(r,o[0]))return" a;if(r=new regexp(t),a=f(r,o))return n,t,r=/^\s*at i,i="/^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,a=e.stack.split("\n"),u=[],l=/^(.*)" .exec(e.message),f="0,g=a.length;g">f;++f){if(n=i.exec(a[f]))t={url:n[3],func:n[1]||o,args:n[2]?n[2].split(","):"",line:+n[4],column:n[5]?+n[5]:null};else{if(!(n=r.exec(a[f])))continue;t={url:n[2],func:n[1]||o,line:+n[3],column:n[4]?+n[4]:null}}!t.func&&t.line&&(t.func=s(t.url,t.line)),t.line&&(t.context=c(t.url,t.line)),u.push(t)}return u[0]&&u[0].line&&!u[0].column&&l&&(u[0].column=h(l[1],u[0].url,u[0].line)),u.length?{mode:"stack",name:e.name,message:e.message,url:document.location.href,stack:u}:null}function d(e){for(var n,t=e.stacktrace,r=/ line (\d+), column (\d+) in (?:<anonymous>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,i=t.split("\n"),a=[],o=0,u=i.length;u>o;o+=2)if(n=r.exec(i[o])){var l={line:+n[1],column:+n[2],func:n[3]||n[4],args:n[5]?n[5].split(","):[],url:n[6]};if(!l.func&&l.line&&(l.func=s(l.url,l.line)),l.line)try{l.context=c(l.url,l.line)}catch(f){}l.context||(l.context=[i[o+1]]),a.push(l)}return a.length?{mode:"stacktrace",name:e.name,message:e.message,url:document.location.href,stack:a}:null}function m(t){var r=t.message.split("\n");if(r.length<4)return i,o,u,h,g=/^\s*Line i,p=/^\s*Line i,d=/^\s*Line i,m="[],v=document.getElementsByTagName("script"),_=[];for(o" v)n(v,o)&&!v[o].src&&_.push(v[o]);for(o="2,u=r.length;u">o;o+=2){var b=null;if(i=g.exec(r[o]))b={url:i[2],func:i[3],line:+i[1]};else if(i=p.exec(r[o])){b={url:i[3],func:i[4]};var w=+i[1],x=_[i[2]-1];if(x&&(h=a(b.url))){h=h.join("\n");var k=h.indexOf(x.innerText);k>=0&&(b.line=w+h.substring(0,k).split("\n").length)}}else if(i=d.exec(r[o])){var y=e.location.href.replace(/#.*$/,""),B=i[1],S=new RegExp(l(r[o+1]));h=f(S,[y]),b={url:y,line:h?h.line:B,func:""}}if(b){b.func||(b.func=s(b.url,b.line));var E=c(b.url,b.line),j=E?E[Math.floor(E.length/2)]:null;b.context=E&&j.replace(/^\s*/,"")===r[o+1].replace(/^\s*/,"")?E:[r[o+1]],m.push(b)}}return m.length?{mode:"multiline",name:t.name,message:r[0],url:document.location.href,stack:m}:null}function v(e,n,t,r){var i={url:n,line:t};if(i.url&&i.line){e.incomplete=!1,i.func||(i.func=s(i.url,i.line)),i.context||(i.context=c(i.url,i.line));var a=/ '([^']+)' /.exec(r);if(a&&(i.column=h(a[1],i.url,i.line)),e.stack.length>0&&e.stack[0].url===i.url){if(e.stack[0].line===i.line)return!1;if(!e.stack[0].line&&e.stack[0].func===i.func)return e.stack[0].line=i.line,e.stack[0].context=i.context,!1}return e.stack.unshift(i),e.partial=!0,!0}return e.incomplete=!0,!1}function _(e,n){for(var t,i,a,c=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,u=[],l={},f=!1,p=_.caller;p&&!f;p=p.caller)if(p!==b&&p!==r.report){if(i={url:null,func:o,line:null,column:null},p.name?i.func=p.name:(t=c.exec(p.toString()))&&(i.func=t[1]),a=g(p)){i.url=a.url,i.line=a.line,i.func===o&&(i.func=s(i.url,i.line));var d=/ '([^']+)' /.exec(e.message||e.description);d&&(i.column=h(d[1],a.url,a.line))}l[""+p]?f=!0:l[""+p]=!0,u.push(i)}n&&u.splice(0,n);var m={mode:"callers",name:e.name,message:e.message,url:document.location.href,stack:u};return v(m,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),m}function b(e,n){var t=null;n=null==n?0:+n;try{if(t=d(e))return t}catch(r){if(x)throw r}try{if(t=p(e))return t}catch(r){if(x)throw r}try{if(t=m(e))return t}catch(r){if(x)throw r}try{if(t=_(e,n+1))return t}catch(r){if(x)throw r}return{mode:"failed"}}function w(e){e=(null==e?0:+e)+1;try{throw new Error}catch(n){return b(n,e+1)}}var x=!1,k={};return b.augmentStackTraceWithInitialElement=v,b.guessFunctionName=s,b.gatherContext=c,b.ofCaller=w,b}(),function(){var n=function(n){var t=e[n];e[n]=function(){var e=a.call(arguments),n=e[0];return"function"==typeof n&&(e[0]=r.wrap(n)),t.apply?t.apply(this,e):t(e[0],e[1])}};n("setTimeout"),n("setInterval")}(),r.remoteFetching||(r.remoteFetching=!0),r.collectWindowErrors||(r.collectWindowErrors=!0),(!r.linesOfContext||r.linesOfContext<1)&&(r.linesofcontext=11),e.tracekit=r}(window);var timestamp=function(){return(new date).gettime()},extend=function(e){return n)e[t]="n[t]}),e},_has=function(e,n){return" object.prototype.hasownproperty.call(e,n)},escape="encodeURIComponent;Object.keys=Object.keys||function(e){var" n=[];for(var isobject=function(e){return object},array="[],slice=array.slice,isArray=function(e){return" array},isvalidkeyvalue="function(e){return"string"==typeof" e||"number"="=typeof" e||"boolean"="=typeof" e},foreach="function(e,n){Array.prototype.forEach.call(Object.keys(e),function(t){n(t,e[t])})},each=function(e,n,t){if(null!=e){var" r="Array.prototype.forEach;if(r&&e.forEach===r)e.forEach(n,t);else" if(e.length="==+e.length){for(var" i="0,a=e.length;a">i;i++)if(n.call(t,e[i],i,e)===breaker)return}else for(var o=_.keys(e),i=0,a=o.length;a>i;i++)if(n.call(t,e[o[i]],o[i],e)===breaker)return}},serialize=function e(n,t,r,i){var a=isArray(t);forEach(t,function(t,o){i&&(t=r?i:i+"["+(a?"":t)+"]"),!i&&a?n.add(o.name,o.value):(r?isArray(o):isObject(o))?e(n,o,r,t):n.add(t,o)})},param=function(e,n){var t=[];return t.add=function(e,n){this.push(escape(e)+"="+escape(n))},serialize(t,e,n),t.join("&")},generator=function(){var e=function(){return Math.floor(65536*Math.random()).toString(16)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},eventSplitter=/\s+/,eventsApi=function(e,n,t,r){if(!t)return!0;if("object"==typeof t){for(var i in t)e[n].apply(e,[i,t[i]].concat(r));return!1}if(eventSplitter.test(t)){for(var a=t.split(eventSplitter),o=0,s=a.length;s>o;o++)e[n].apply(e,[a[o]].concat(r));return!1}return!0},triggerEvents=function(e,n){var t,r=-1,i=e.length,a=n[0],o=n[1],s=n[2];switch(n.length){case 0:for(;++r<i;)(t=e[r]).callback.call(t.ctx);return;case 1:for(;++r<i;)(t=e[r]).callback.call(t.ctx,a);return;case 2:for(;++r<i;)(t=e[r]).callback.call(t.ctx,a,o);return;case 3:for(;++r<i;)(t="e[r]).callback.call(t.ctx,a,o,s);return;default:for(;++r<i;)(t=e[r]).callback.apply(t.ctx,n)}},_once=function(e){var" n,t=!1;return t?n:(t="!0,n=e.apply(this,arguments),e=null,n)}};(function(){return" this.lockr="{},Lockr.set=function(e,n){localStorage.setItem(e,n)},Lockr.hset=function(e,n){localStorage.setItem(e,JSON.stringify(n))},Lockr.get=function(e){var" n=localStorage.getItem(e);return null="=n?void" )?parseint(n):n},lockr.getall=function(){var e=Object.keys(localStorage);return lockr.get(e)})},lockr.flush=function(){localStorage.clear()},Lockr}).call(this);var md5cycle=function(e,n){var t="e[0],r=e[1],i=e[2],a=e[3];t=ff(t,r,i,a,n[0],7,-680876936),a=ff(a,t,r,i,n[1],12,-389564586),i=ff(i,a,t,r,n[2],17,606105819),r=ff(r,i,a,t,n[3],22,-1044525330),t=ff(t,r,i,a,n[4],7,-176418897),a=ff(a,t,r,i,n[5],12,1200080426),i=ff(i,a,t,r,n[6],17,-1473231341),r=ff(r,i,a,t,n[7],22,-45705983),t=ff(t,r,i,a,n[8],7,1770035416),a=ff(a,t,r,i,n[9],12,-1958414417),i=ff(i,a,t,r,n[10],17,-42063),r=ff(r,i,a,t,n[11],22,-1990404162),t=ff(t,r,i,a,n[12],7,1804603682),a=ff(a,t,r,i,n[13],12,-40341101),i=ff(i,a,t,r,n[14],17,-1502002290),r=ff(r,i,a,t,n[15],22,1236535329),t=gg(t,r,i,a,n[1],5,-165796510),a=gg(a,t,r,i,n[6],9,-1069501632),i=gg(i,a,t,r,n[11],14,643717713),r=gg(r,i,a,t,n[0],20,-373897302),t=gg(t,r,i,a,n[5],5,-701558691),a=gg(a,t,r,i,n[10],9,38016083),i=gg(i,a,t,r,n[15],14,-660478335),r=gg(r,i,a,t,n[4],20,-405537848),t=gg(t,r,i,a,n[9],5,568446438),a=gg(a,t,r,i,n[14],9,-1019803690),i=gg(i,a,t,r,n[3],14,-187363961),r=gg(r,i,a,t,n[8],20,1163531501),t=gg(t,r,i,a,n[13],5,-1444681467),a=gg(a,t,r,i,n[2],9,-51403784),i=gg(i,a,t,r,n[7],14,1735328473),r=gg(r,i,a,t,n[12],20,-1926607734),t=hh(t,r,i,a,n[5],4,-378558),a=hh(a,t,r,i,n[8],11,-2022574463),i=hh(i,a,t,r,n[11],16,1839030562),r=hh(r,i,a,t,n[14],23,-35309556),t=hh(t,r,i,a,n[1],4,-1530992060),a=hh(a,t,r,i,n[4],11,1272893353),i=hh(i,a,t,r,n[7],16,-155497632),r=hh(r,i,a,t,n[10],23,-1094730640),t=hh(t,r,i,a,n[13],4,681279174),a=hh(a,t,r,i,n[0],11,-358537222),i=hh(i,a,t,r,n[3],16,-722521979),r=hh(r,i,a,t,n[6],23,76029189),t=hh(t,r,i,a,n[9],4,-640364487),a=hh(a,t,r,i,n[12],11,-421815835),i=hh(i,a,t,r,n[15],16,530742520),r=hh(r,i,a,t,n[2],23,-995338651),t=ii(t,r,i,a,n[0],6,-198630844),a=ii(a,t,r,i,n[7],10,1126891415),i=ii(i,a,t,r,n[14],15,-1416354905),r=ii(r,i,a,t,n[5],21,-57434055),t=ii(t,r,i,a,n[12],6,1700485571),a=ii(a,t,r,i,n[3],10,-1894986606),i=ii(i,a,t,r,n[10],15,-1051523),r=ii(r,i,a,t,n[1],21,-2054922799),t=ii(t,r,i,a,n[8],6,1873313359),a=ii(a,t,r,i,n[15],10,-30611744),i=ii(i,a,t,r,n[6],15,-1560198380),r=ii(r,i,a,t,n[13],21,1309151649),t=ii(t,r,i,a,n[4],6,-145523070),a=ii(a,t,r,i,n[11],10,-1120210379),i=ii(i,a,t,r,n[2],15,718787259),r=ii(r,i,a,t,n[9],21,-343485551),e[0]=add32(t,e[0]),e[1]=add32(r,e[1]),e[2]=add32(i,e[2]),e[3]=add32(a,e[3])},cmn=function(e,n,t,r,i,a){return">>>32-i,t)},ff=function(e,n,t,r,i,a,o){return cmn(n&t|~n&r,e,n,i,a,o)},gg=function(e,n,t,r,i,a,o){return cmn(n&r|t&~r,e,n,i,a,o)},hh=function(e,n,t,r,i,a,o){return cmn(n^t^r,e,n,i,a,o)},ii=function(e,n,t,r,i,a,o){return cmn(t^(n|~r),e,n,i,a,o)},md51=function(e){var n,t=e.length,r=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=e.length;n+=64)md5cycle(r,md5blk(e.substring(n-64,n)));e=e.substring(n-64);var i="[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(n=0;n<e.length;n++)i[n">>2]|=e.charCodeAt(n)<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(md5cycle(r,i),n=0;16>n;n++)i[n]=0;return i[14]=8*t,md5cycle(r,i),r},md5blk=function(e){var n,t=[];for(n=0;64>n;n+=4)t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charcodeat(n+2)<<16)+(e.charcodeat(n+3)<<24);return t},hex_chr=0123456789abcdef .split(""),rhex=function(e){for(var ,t=0;4>t;t++)n+=hex_chr[e>>8*t+4&15]+hex_chr[e>>8*t&15];return n},hex=function(e){for(var n=0;n<e.length;n++)e[n]=rhex(e[n]);return e.join("")},md5=function(e){return hex(md51(e))},add32=function(e,n){return e+n&4294967295};if("5d41402abc4b2a76b9719d911017c592"!=md5("hello"))var add32=function(e,n){var t="(65535&e)+(65535&n),r=(e">>16)+(n>>16)+(t>>16);return r<<16|65535&t};window.bugsense=function(){var e="{apiKey:null,message:null,uid:null,userIdentifier:null,appVersion:null,appname:null,osver:null,url:"https://www.bugsense.com/api/errors",disableOnError:!1,context:window},n=function(n){n.appver&&(n.appVersion=n.appver,delete" n.appver),e="extend(e,n)},t=function(){var" "+bowser.version,cordova:"undefined"!=typeof window.device?window.device.cordova:"unknown",device_name:"undefined"!=typeof window.device?window.device.name:"unknown",log_data:{}}}};return{config:e,initandstartsession:n,generatefixture:t}}(),bugsense.crashes="function(){Bugsense.breadcrumbs=[],Bugsense.extraData={},Bugsense.addExtraData=function(e,n){isValidKeyValue(e)&&isValidKeyValue(n)&&(Bugsense.extraData[e]=n)},Bugsense.removeExtraData=function(e){delete" bugsense.extradata[e]},bugsense.clearextradata="function(){Bugsense.extraData={}},Bugsense.leaveBreadcrumb=function(e){isValidKeyValue(e)&&(Bugsense.breadcrumbs.length+1==16&&(Bugsense.breadcrumbs=Bugsense.breadcrumbs.slice(1)),Bugsense.breadcrumbs.push(e))},Bugsense.clearBreadcrumbs=function(){Bugsense.breadcrumbs=[]}}(),Bugsense.channel=function(){var" o="r.split(e),s=0,c=o.length;c">s;s++)n[t].apply(n,[o[s]].concat(i));return!1}return!0},t=function(e,n){var t,r=-1,i=e.length,a=n[0],o=n[1],s=n[2];switch(n.length){case 0:for(;++r<i;)(t=e[r]).callback.call(t.ctx);return;case 1:for(;++r<i;)(t=e[r]).callback.call(t.ctx,a);return;case 2:for(;++r<i;)(t=e[r]).callback.call(t.ctx,a,o);return;case 3:for(;++r<i;)(t="e[r]).callback.call(t.ctx,a,o,s);return;default:for(;++r<i;)(t=e[r]).callback.apply(t.ctx,n)}},r=function(e){var" n,t=!1;return t?n:(t="!0,n=e.apply(this,arguments),e=null,n)}};Bugsense.on=function(e,t,r){if(!n(this,"on",e,[t,r])||!t)return" this;this._events||(this._events={});var i="this._events[e]||(this._events[e]=[]);return" i.push({callback:t,context:r,ctx:r||this}),this},bugsense.once=function(e,t,i){if(!n(this,"once",e,[t,i])||!t)return a="this,o=r(function(){a.off(e,o),t.apply(this,arguments)});return" o._callback="t,this.on(e,o,i)},Bugsense.off=function(e,t,r){var" this._events=void 0,this;for(s="e?[e]:_.keys(this._events),c=0,u=s.length;u">c;c++)if(e=s[c],o=this._events[e]){if(this._events[e]=i=[],t||r)for(l=0,f=o.length;f>l;l++)a=o[l],(t&&t!==a.callback&&t!==a.callback._callback||r&&r!==a.context)&&i.push(a);i.length||delete this._events[e]}return this},Bugsense.trigger=function(e){if(!this._events)return this;var r=slice.call(arguments,1);if(!n(this,"trigger",e,r))return this;var i=this._events[e],a=this._events.all;return i&&t(i,r),a&&t(a,arguments),this}}(),Bugsense.Cache=function(){var e={_queue:[],cacheReport:function(e){this._queue.push(e),this.update()},retrieve:function(){var e=Lockr.get("bugsense_cache");this._queue=e||[],this._queue.length&&this.sendCachedReport()},update:function(){Lockr.hset("bugsense_cache",this._queue)},sendCachedReport:function(){if(!this._queue.length)return!1;var e=this;each(this._queue,function(n,t){Bugsense.Network.send(n,"POST"),e._queue.shift(t)}),this.update()}};return e}(),Bugsense.Errors=function(){var e=function(e,n,t,r,i){var a=e+n+t+r+i;return md5(a)},n=function(e){var n=e.errorobj?e.errorobj.stack:e.stack||null,t={message:e.exception||e.message,url:e.url||e.lineNumber||e.sourceURL,line:e.line,stack:n};return t.custom_data=e.custom_data||{},t},t=function(e){var n="string"!=typeof e?e.message:e,t={},r=i(e),a=e.url||e.lineNumber||e.sourceUrl,o=e.line,s=a&&o?TraceKit.computeStackTrace.guessFunctionName(a,o):"unknown";return t=extend(Bugsense.generateFixture(),{exception:{message:n,where:[a,o].join(":"),klass:s,backtrace:r&&r.length?r:[],breadcrumbs:Bugsense.breadcrumbs}}),t.application_environment.log_data=extend(Bugsense.extraData,e.custom_data),t},r=function(e){var n=TraceKit.computeStackTrace(e).stack;return n?n.map(function(e){return e.func+"@"+e.url+":"+e.line}):[]},i=function(e){return e.stack||r(e)};return Bugsense.notify=function(e,r){var i={};return r&&(e.custom_data=r),i=n(e),Bugsense.Network.send(t(i),"POST"),!1},window.onerror=function(e,n,t,r,i){if(!Bugsense.config.disableOnError){if(Bugsense.config.apiKey)return Bugsense.trigger("crash"),Bugsense.notify({exception:e,url:n,line:t,column:r,errorobj:i});var a="You need a BugSense API key to use bugsense.js.";return"warn"in console?console.warn(a):console.log(a),!1}return!1},{parse:n,computeErrorHash:e,generateExceptionData:t}}(),Bugsense.Sessions=function(){var e=function(){var e=function(){return Math.floor(65536*Math.random()).toString(16)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},n={generateUid:function(){var n=Lockr.get("bugsense:uid")||e();return Lockr.set("bugsense:uid",n),n}};return n}(),Bugsense.Network=function(){var e={getPostURL:function(){return Bugsense.config.url+"?cacheBuster="+timestamp()},send:function(e,n){function t(){return r&&4!=r.readyState?void 0:r&&200!=r.status?!1:void("console"in window&&console.log("logged 1 error to Bugsense, status: "+r.responseText))}var r=new XMLHttpRequest;r.open(n,this.getPostURL(),!0),r.setRequestHeader("X-BugSense-Api-Key",Bugsense.config.apiKey),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onerror=function(){Bugsense.Cache.cacheReport(e)},r.onreadystatechange=t,r.send(param({data:JSON.stringify(e)}))}};return e}(),function(e,n){"use strict";e.App=e.App||{},n(e.App.Bugsense={},e.Bugsense)}(this,function(e,n){"use strict";n.initAndStartSession({apiKey:"45bbb393"})});</i;)(t=e[r]).callback.call(t.ctx);return;case></16|65535&t};window.bugsense=function(){var></e.length;n++)e[n]=rhex(e[n]);return></8)+(e.charcodeat(n+2)<<16)+(e.charcodeat(n+3)<<24);return></(n%4<<3),n></(n%4<<3);if(i[n></=e.length;n+=64)md5cycle(r,md5blk(e.substring(n-64,n)));e=e.substring(n-64);var></i;)(t=e[r]).callback.call(t.ctx);return;case></1)&&(r.linesofcontext=11),e.tracekit=r}(window);var></4)return></anonymous></s.length;++p){var></","(?:<|&lt;)").replace("></8||bowser.chrome&&bowser.version<10||bowser.firefox&&bowser.version<4||bowser.safari&&bowser.version<5||bowser.opera&&bowser.version<10?bowser.c=r:bowser.x=r}.call(this),function(e){function>