(function(root) {
    'use strict';
    var App = root.App = root.App || {};

    // Create namespace
    App.namespace = function(namespace) {
        var namespaces = namespace.split('.');
        var current = App;
        namespaces.forEach(function(name) {
            if (!current[name]) {
                current[name] = {};
            }
            current = current[name];
        });
        return current;
    };

    root.Bugsense.initAndStartSession({
        apiKey: '45bbb393'
    });
}(window));
