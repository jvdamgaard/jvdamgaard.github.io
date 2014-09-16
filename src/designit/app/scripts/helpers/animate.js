(function(root) {
    'use strict';

    var animate = root.App.namespace('helpers.animate');

    // Percent before bottom that scroll is activated
    var OFFSET_PERCENT = 0.2;

    var queued = false;
    var animateNodes;

    animate.refresh = function() {
        animateNodes = document.querySelectorAll('.animate');
        animateNodes = Array.prototype.slice.call(animateNodes);
    };

    var onScroll = function() {

        // Avoid continuous scroll events
        if (queued) {
            return;
        }
        queued = true;
        root.setTimeout(function() {

            // Get nodes to animate
            if (!animateNodes) {
                animateNodes = document.querySelectorAll('.animate');
                animateNodes = Array.prototype.slice.call(animateNodes);
            }

            // Remove animate--* class if scroll position is reached
            var scrollBottom = root.scrollY + (root.innerHeight * (1 - OFFSET_PERCENT));
            animateNodes.forEach(function(node, index) {
                if (scrollBottom > node.offsetTop) {
                    node.className = node.className.replace(/\banimate--[a-z]*\b/, '');
                    animateNodes.splice(index, 1);
                }
            });

            // Remove scroll listener when there is no more nodes to animate
            if (animateNodes.length === 0) {
                root.removeEventListener('scroll', onScroll);
            }
            queued = false;
        }, 50);
    };

    root.addEventListener('scroll', onScroll);
}(window));
