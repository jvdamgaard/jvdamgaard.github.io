(function(root, factory) {
    'use strict';
    root.App = root.App || {};

    // Factory with dependencies
    factory((root.App.myModule = {}), root.b);
}(this, function(exports, b) {
    'use strict';

    exports.action = b.init();
}));
