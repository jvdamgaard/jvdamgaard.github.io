(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    root.App.components = root.App.components || {};

    // Factory with dependencies
    factory((root.App.components.topNavigation = {}));
}(this, function() {
    'use strict';

    var $topNavigation = document.querySelector('.top-navigation');

    var lastPos = 0;

    var setSizeOfNavigation = function() {
        if (window.scrollY < $topNavigation.clientHeight || window.scrollY < lastPos) {
            $topNavigation.classList.remove('small');
        } else {
            $topNavigation.classList.add('small');
        }
        lastPos = window.scrollY;
    };

    window.addEventListener('scroll', setSizeOfNavigation);
    document.addEventListener('DOMContentLoaded', setSizeOfNavigation);
    window.addEventListener('resize', setSizeOfNavigation);
}));
