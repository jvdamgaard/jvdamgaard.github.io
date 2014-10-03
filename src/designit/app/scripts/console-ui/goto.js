(function(root, factory) {
    'use strict';
    root.App = root.App || {};

    // Factory with dependencies
    factory(root, (root.App.UI = {}));
}(this, function(exports, UI) {
    'use strict';

    exports.goto = function(page) {
        if (UI[page]) {
            return UI[page].render();
        }
        var ref = document.getElementsByTagName('script')[0];
        var script = document.createElement('script');
        script.src = 'scripts/console-ui/' + page + '.js';
        ref.parentNode.insertBefore(script, ref);
        script.onload = function() {
            UI[page].render();
        };
        script.onerror = function() {
            console.clear();
            console.log('%cgoto("' + page + '")', 'font-weight:bold;', 'was not found. Try with one of the following:');
            window.goto('menu');
        };
    };
}));
