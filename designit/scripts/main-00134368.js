!function(e,n){"use strict";e.App=e.App||{},n(e.App.parallaxScroll={},e.App.featureTest)}(this,function(e,n){"use strict";var t=.75,o=.25,r=document.querySelectorAll(".parallax-scroll");r=Array.prototype.slice.call(r);var i,l="webkitTransform MozTransform msTransform OTransform transform".split(" "),a=document.createElement("div");l.some(function(e){return""===a.style[e]?(i=e,!0):void 0});var c=function(){i&&!n.touch&&r.forEach(function(e){var n=window.scrollY-e.getDocumentOffsetTop(),r=(e.clientHeight-e.backgroundElement.height)/(e.clientHeight-window.innerHeight);r>t&&(r=t),o>r&&(r=o),e.backgroundElement.style[i]="translate3d(0, "+n*r+"px, 0)"})},d=function(){r.forEach(function(e){var t,r;if(n.touch)t=e.clientHeight;else{var i=e.clientHeight;window.innerHeight<i&&(i=window.innerheight),t=i+window.innerheight*o}var l="window.innerWidth/t,a=e.backgroundElement.width/e.backgroundElement.height;a">l?(e.backgroundElement.classList.remove("full-width"),e.backgroundElement.style.height=t+"px",r=(e.backgroundElement.width-window.innerWidth)/2,e.backgroundElement.style.marginLeft="-"+r+"px",e.backgroundElement.style.marginTop="0px"):(e.backgroundElement.classList.add("full-width"),e.backgroundElement.style.height="auto",r=(e.backgroundElement.height-t)/2,e.backgroundElement.style.marginTop="-"+r+"px",e.backgroundElement.style.marginLeft="0px")})},s=function(){d(),c()};e.refresh=function(){var e=document.querySelectorAll(".parallax-scroll");e=Array.prototype.slice.call(e),e.forEach(function(e){e.backgroundElement=e.querySelector(".background"),e.backgroundElement.addEventListener("load",s)}),d(),c()},e.refresh(),window.addEventListener("scroll",c),window.addEventListener("resize",s),document.addEventListener("DOMContentLoaded",e.refresh)}),function(e,n){"use strict";e.App=e.App||{},e.App.components=e.App.components||{},n(e.App.components.topNavigation={})}(this,function(){"use strict";var e=document.querySelector(".top-navigation"),n=0,t=function(){window.scrollY</i&&(i=window.innerheight),t=i+window.innerheight*o}var>