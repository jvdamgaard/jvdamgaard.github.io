/**
 * Creates a temporary global ga object and loads analy  tics.js.
 * Paramenters o, a, and m are all used internally.  They could have been declared using 'var',
 * instead they are declared as parameters to save 4 bytes ('var ').
 */
(function(window, ga, script, document, uaId) {
    'use strict';

    window.GoogleAnalyticsObject = ga; // Acts as a pointer to support renaming.

    // Creates an initial ga() function.  The queued commands will be executed once analytics.js loads.
    window[ga] = window[ga] || function() {
        (window[ga].q = window[ga].q || []).push(arguments);
    };

    // Sets the time (as an integer) this tag was executed.  Used for timing hits.
    window[ga].l = 1 * new Date();

    // Insert the script tag asynchronously.  Inserts above current tag to prevent blocking in
    // addition to using the async attribute.
    var element = document.createElement(script);
    var ref = document.getElementsByTagName(script)[0];
    element.async = 1;
    element.src = '//www.google-analytics.com/analytics.js';
    ref.parentNode.insertBefore(element, ref);

    window[ga]('create', uaId, 'auto'); // Creates the tracker with default parameters.
    window[ga]('send', 'pageview'); // Sends a pageview hit.

}(window, 'ga', 'script', document, 'UA-54769518-1'));
