(function(exports, window) {
    'use strict';

    // Percent before bottom that scroll is activated
    var OFFSET_PERCENT = 0.2;

    var queued = false;
    var animateNodes;

    var onScroll = function() {

        // Avoid continuous scroll events
        if (queued) {
            return;
        }
        queued = true;
        window.setTimeout(function() {

            // Get nodes to animate
            if (!animateNodes) {
                animateNodes = document.querySelectorAll('.animate');
                animateNodes = Array.prototype.slice.call(animateNodes);
            }

            // Remove animate--* class if scroll position is reached
            var scrollBottom = window.scrollY + (window.innerHeight * (1 - OFFSET_PERCENT));
            animateNodes.forEach(function(node, index) {
                if (scrollBottom > node.offsetTop) {
                    node.className = node.className.replace(/\banimate--[a-z]*\b/, '');
                    animateNodes.splice(index, 1);
                }
            });

            // Remove scroll listener when there is no more nodes to animate
            if (animateNodes.length === 0) {
                window.removeEventListener('scroll', onScroll);
            }
            queued = false;
        }, 50);
    };

    window.addEventListener('scroll', onScroll);

    exports.refresh = function() {
        animateNodes = document.querySelectorAll('.animate');
        animateNodes = Array.prototype.slice.call(animateNodes);
    };

}(window.App.namespace('helpers.animate'), window));
