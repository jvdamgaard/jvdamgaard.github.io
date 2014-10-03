(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    root.App.UI = root.App.UI || {};

    // Factory with dependencies
    factory((root.App.UI.menu = {}));
}(this, function(exports) {
    'use strict';

    var MENU = 'home cv';

    exports.render = function() {
        console.group('Menu');
        MENU.split(' ').forEach(function(menuItem) {
            console.log('goto("' + menuItem + '")');
        });
        console.groupEnd();
    };
}));
