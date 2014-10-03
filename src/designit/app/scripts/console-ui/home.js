(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    root.App.UI = root.App.UI || {};

    // Factory with dependencies
    factory((root.App.UI.home = {}));
}(this, function(exports) {
    'use strict';

    exports.render = function() {
        console.clear();
        console.log('Work in progress');
        window.goto('menu');
    };
}));
