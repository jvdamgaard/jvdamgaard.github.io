!function(e){"use strict";e.prototype.getDocumentOffsetTop=function(){for(var e=this,t=0;e&&!isNaN(e.offsetTop);)t+=e.offsetTop,e=e.offsetParent;return t}}(Element),function(e){"use strict";e.namespace=function(t){var n=t.split("."),r=e;return n.forEach(function(e){r[e]||(r[e]={}),r=r[e]}),r}}(function(e){"use strict";return e.App=e.App||{},e.App}(window)),function(e,t){"use strict";var n,r=.2,o="up fade-in".split(" "),a=!1,s=t.document,i=function(){a||(a=!0,t.setTimeout(function(){n||(n=s.querySelectorAll(".animate"),n=Array.prototype.slice.call(n));var e=t.scrollY+t.innerHeight*(1-r);n.forEach(function(t){if(e>t.offsetTop){var r=t.dataset.animateDelay||0;setTimeout(function(){o.forEach(function(e){t.classList.remove(e)})},r),n=n.filter(function(e){return e!==t})}}),0===n.length&&t.removeEventListener("scroll",i),a=!1},50))};t.addEventListener("scroll",i),s.addEventListener("DOMContentLoaded",i),e.refresh=function(){n=s.querySelectorAll(".animate"),n=Array.prototype.slice.call(n)}}(window.App.namespace("helpers.animate"),window),function(e,t){"use strict";var n,r=0,o=!1,a=t.document,s=function(e){var t,n=a.createElement("div");return n.height=0,n.width=0,e.before(n),t=n.getDocumentOffsetTop(),n.remove(),t},i=function(e){e.classList.add("animate-opacity"),e.classList.add("fade-in"),e.addEventListener("load",function(){e.classList.remove("fade-in")}),e.dataset.srcset?e.srcset=e.dataset.srcset:e.dataset.src&&(e.src=e.dataset.src)},c=function(){o||(o=!0,t.setTimeout(function(){n||(n=a.querySelectorAll(".lazy"),n=Array.prototype.slice.call(n));var e=t.scrollY+t.innerHeight*(1+r);n.forEach(function(t){var r=t.matches("img"),o=r?s(t):t.getDocumentOffsetTop();e>o&&(r&&i(t),t.classList.remove("lazy"),n=n.filter(function(e){return e!==t}))}),0===n.length&&t.removeEventListener("scroll",c),o=!1},50))};t.addEventListener("scroll",c),a.addEventListener("DOMContentLoaded",c),t.addEventListener("resize",c),e.refresh=function(){n=a.querySelectorAll(".lazy"),n=Array.prototype.slice.call(n)}}(window.App.namespace("helpers.lazyImages"),window),function(e,t,n){"use strict";e.ajax=function(e){return new t(function(t,r){var o=new n;o.open(e.method||"GET",e.url,!0),e.headers&&e.headers.keys.forEach(function(t){o.setRequestHeader(t,e.headers[t])}),o.addEventlistener("load",function(){200===o.status?t(o.response):r(new Error(o.statusText))}),o.addEventlistener("error",function(){r(new Error("Network Error"))}),o.send(e.data)})},e.get=function(t,n){return n.url=t,n.method="GET",e.ajax(n)},e.getJSON=function(t,n){return e.get(t,n).then(JSON.parse)},e.post=function(t,n,r){return r.url=t,r.data=n,r.method="POST",e.ajax(r)},e.post=function(t,n,r){return r.url=t,r.data=JSON.stringify(n),r.method="POST",e.ajax(r)}}(window.App.namespace("helpers.ajax"),window.Promise,window.XMLHttpRequest),function(e,t,n){"use strict";var r,o=.9,a=0,s="webkitTransform MozTransform msTransform OTransform transform".split(" "),i=t.createElement("div");if(s.some(function(e){return""===i.style[e]?(r=e,!0):void 0}),r){var c=function(e){var t=n.scrollY-e.getDocumentOffsetTop(),s=(e.clientHeight-e.backgroundElement.height)/(e.clientHeight-n.innerHeight);s>o&&(s=o),a>s&&(s=a),e.backgroundElement.style[r]="translate3d(0, "+t*s+"px, 0)"},l=t.querySelectorAll(".parallax-scroll");l=Array.prototype.slice.call(l);var u=function(){l.forEach(c)};l.length>0&&(l.forEach(function(e){e.backgroundElement=e.querySelector(".background"),e.backgroundElement.addEventListener("load",u)}),n.addEventListener("scroll",u),n.addEventListener("resize",u),t.addEventListener("DOMContentLoaded",u))}}(window.App.namespace("helpers.parallaxScroll"),document,window);