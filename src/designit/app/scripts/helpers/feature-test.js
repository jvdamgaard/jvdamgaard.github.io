/* global DocumentTouch */

(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    factory((root.App.featureTest = {}));
}(this, function(exports) {
    'use strict';
    exports.touch = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}));
