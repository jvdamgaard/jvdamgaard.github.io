(function(exports, window) {
    'use strict';

    // Percent under bottom of screen images i loaded
    var OFFSET_PERCENT = 0.2;

    var queued = false;
    var lazyNodes;
    var document = window.document;

    var checkForLazyImages = function() {

        // Avoid continuous scroll events
        if (queued) {
            return;
        }
        queued = true;
        window.setTimeout(function() {

            // Get nodes to animate
            if (!lazyNodes) {
                lazyNodes = document.querySelectorAll('.lazy');
                lazyNodes = Array.prototype.slice.call(lazyNodes);
            }

            // Remove lazy class if scroll position is reached
            var scrollBottom = window.scrollY + (window.innerHeight * (1 + OFFSET_PERCENT));
            lazyNodes.forEach(function(node, index) {
                var offsetTop = node.offsetTop;
                if (node.matches('img')) { // Can't get offsetTop of hidden element
                    var tempElement = document.createElement('div');
                    tempElement.height = 0;
                    tempElement.width = 0;
                    node.before(tempElement);
                    offsetTop = tempElement.offsetTop;
                    tempElement.remove();
                }
                if (scrollBottom > offsetTop) {
                    node.classList.remove('lazy');
                    lazyNodes.splice(index, 1);
                }
            });

            // Remove scroll listener when there is no more nodes to animate
            if (lazyNodes.length === 0) {
                window.removeEventListener('scroll', checkForLazyImages);
            }
            queued = false;
        }, 50);
    };

    window.addEventListener('scroll', checkForLazyImages);
    document.addEventListener('DOMContentLoaded', checkForLazyImages);

    exports.refresh = function() {
        lazyNodes = document.querySelectorAll('.lazy');
        lazyNodes = Array.prototype.slice.call(lazyNodes);
    };

}(window.App.namespace('helpers.lazyImages'), window));
