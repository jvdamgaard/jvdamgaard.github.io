(function(exports, Bugsense) {
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

    Bugsense.initAndStartSession({
        apiKey: '45bbb393'
    });

}((function(window) {
    'use strict';
    window.App = window.App || {};
    return window.App;
}(window)), window.Bugsense));
