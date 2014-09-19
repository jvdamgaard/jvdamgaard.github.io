// TODO: Comment in console

(function(exports) {
    'use strict';

    // Create namespace
    exports.namespace = function(namespace) {
        var namespaces = namespace.split('.');
        var current = exports;
        namespaces.forEach(function(name) {
            if (!current[name]) {
                current[name] = {};
            }
            current = current[name];
        });
        return current;
    };

}((function(window) {
    'use strict';
    window.App = window.App || {};
    return window.App;
}(window))));
