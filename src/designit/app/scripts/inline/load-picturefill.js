// Load picturefill if not supported in browser
(function(document) {
    'use strict';
    if (!('srcset' in document.createElement('img'))) {
        var element = document.createElement('script');
        var ref = document.getElementsByTagName('script')[0];
        element.async = 1;
        element.src = '//cdnjs.cloudflare.com/ajax/libs/picturefill/2.1.0/picturefill.min.js';
        ref.parentNode.insertBefore(element, ref);
    }
}(document));
