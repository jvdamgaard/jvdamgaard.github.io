// Load non-critical css
// Gets inlined in index.html

(function(hrefs, document, i) {
    'use strict';
    var setMediaAll = function(stylesheet) {
        setTimeout(function() {
            stylesheet.media = 'all';
        });
    };
    for (i = 0; i < hrefs.length; i++) {
        var href = hrefs[i];
        var stylesheet = document.createElement('link');
        var ref = document.getElementsByTagName('script')[0];
        stylesheet.rel = 'stylesheet';
        stylesheet.href = href;
        stylesheet.media = 'only x';
        ref.parentNode.insertBefore(stylesheet, ref);
        setMediaAll(stylesheet);
    }

}(['styles/non-critical.css', '//polyfill.io/normalize.min.css'], window.document));

// <!-- When ready: //cdn.polyfill.io/v1/normalize.min.css
