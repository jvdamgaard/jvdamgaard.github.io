(function(html, property) {
    'use strict';
    html[property] = html[property].replace('no-js', 'js');
}(document.documentElement, 'className'));
