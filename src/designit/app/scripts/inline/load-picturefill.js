// Load picturefill if not supported in browser
(function(document) {
    'use strict';
    if (!(window.HTMLPictureElement)) {
        var element = document.createElement('script');
        var ref = document.getElementsByTagName('script')[0];
        element.async = 1;
        element.src = 'bower_components/picturefill/dist/picturefill.min.js';
        ref.parentNode.insertBefore(element, ref);
    }
}(document));
