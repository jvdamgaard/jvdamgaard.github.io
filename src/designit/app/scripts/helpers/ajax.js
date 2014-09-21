(function(exports, Promise, XMLHttpRequest) {
    'use strict';

    exports.ajax = function(options) {

        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open(options.method || 'GET', options.url, true);

            if (options.headers) {
                options.headers.keys.forEach(function(key) {
                    req.setRequestHeader(key, options.headers[key]);
                });
            }

            req.addEventlistener('load', function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status === 200) {
                    // Resolve the promise with the response text
                    resolve(req.response);
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(new Error(req.statusText));
                }
            });

            // Handle network errors
            req.addEventlistener('error', function() {
                reject(new Error('Network Error'));
            });

            // Make the request
            req.send(options.data);
        });
    };

    exports.get = function(url, options) {
        options.url = url;
        options.method = 'GET';
        return exports.ajax(options);
    };

    exports.getJSON = function(url, options) {
        return exports.get(url, options).then(JSON.parse);
    };

    exports.post = function(url, data, options) {
        options.url = url;
        options.data = data;
        options.method = 'POST';
        return exports.ajax(options);
    };

    exports.post = function(url, data, options) {
        options.url = url;
        options.data = JSON.stringify(data);
        options.method = 'POST';
        return exports.ajax(options);
    };

}(window.App.namespace('helpers.ajax'), window.Promise, window.XMLHttpRequest));
