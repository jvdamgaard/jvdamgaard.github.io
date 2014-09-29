(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    factory((root.App.Bugsense = {}), root.Bugsense);
}(this, function(exports, Bugsense) {
    'use strict';

    Bugsense.initAndStartSession({
        apiKey: '45bbb393'
    });
}));
