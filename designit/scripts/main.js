!function(e){"use strict";e.namespace=function(t){var _=t.split("."),n=e;return _.forEach(function(e){n[e]||(n[e]={}),n=n[e]}),n}}(function(e){"use strict";return e.App=e.App||{},e.App}(window)),function(e,t){"use strict";var _,n=.2,r="up".split(" "),o=!1,i=t.document,s=function(){o||(o=!0,t.setTimeout(function(){_||(_=i.querySelectorAll(".animate"),_=Array.prototype.slice.call(_));var e=t.scrollY+t.innerHeight*(1-n);_.forEach(function(t){e>t.offsetTop&&(r.forEach(function(e){t.classList.remove(e)}),_=_.filter(function(e){return e!==t}))}),0===_.length&&t.removeEventListener("scroll",s),o=!1},50))};t.addEventListener("scroll",s),i.addEventListener("DOMContentLoaded",s),e.refresh=function(){_=i.querySelectorAll(".animate"),_=Array.prototype.slice.call(_)}}(window.App.namespace("helpers.animate"),window),function(e,t){"use strict";var _,n=.5,r=!1,o=t.document,i=function(e){var t,_=o.createElement("div");return _.height=0,_.width=0,e.before(_),t=_.offsetTop,_.remove(),t},s=function(e){e.classList.add("animate"),e.classList.add("fade-in"),e.addEventListener("load",function(){e.classList.remove("fade-in")}),e.srcset=e.dataset.srcset},a=function(){r||(r=!0,t.setTimeout(function(){_||(_=o.querySelectorAll(".lazy"),_=Array.prototype.slice.call(_));var e=t.scrollY+t.innerHeight*(1+n);_.forEach(function(t){var n=t.matches("img"),r=n?i(t):t.offsetTop;e>r&&(n&&s(t),t.classList.remove("lazy"),_=_.filter(function(e){return e!==t}))}),0===_.length&&t.removeEventListener("scroll",a),r=!1},50))};t.addEventListener("scroll",a),o.addEventListener("DOMContentLoaded",a),e.refresh=function(){_=o.querySelectorAll(".lazy"),_=Array.prototype.slice.call(_)}}(window.App.namespace("helpers.lazyImages"),window),function(e){"use strict";if(e){var t=["#############################################################################################","                            __","                           [  |                                             / |_"," .---.  _ .--..--.  _ .--.  | |  .--.   _   __  _ .--..--.  .---.     ,--. `| |-'","/ /__\\\\[ `.-. .-. |[ '/'`\\ \\| |/ .'`\\ \\[ \\ [  ][ `.-. .-. |/ /__\\\\   `'_\\ : | |","| \\__., | | | | | | | \\__/ || || \\__. | \\ '/ /  | | | | | || \\__., _ // | |,| |,"," '.__.'[___||__||__]| ;.__/[___]'.__.'[\\_:  /  [___||__||__]'.__.'(_)\\'-;__/\\__/","     __     __     [__|       _        \\__.'      _____  _","    / /    |  ]              (_)                 |_   _|/ |_","   / / .--.| | .---.  .--.   __   .--./) _ .--.    | | `| |-'","  / // /'`\\' |/ /__\\\\( (`\\] [  | / /'`\\;[ `.-. |   | |  | |"," / / | \\__/  || \\__., `'.'.  | | \\ \\._// | | | |  _| |_ | |,","/_/   '.__.;__]'.__.'[\\__) )[___].',__` [___||__]|_____|\\__/","                                ( ( __))","","#############################################################################################","","","Want to see how this has been build. Visit the source code on github: ","https://github.com/jvdamgaard/jvdamgaard.github.io/tree/master/src/designit"];e.log(t.join("\n"))}}(window.console);