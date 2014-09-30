(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    factory((root.App.animate = {}));
}(this, function(exports) {
    'use strict';

    // Percent before bottom that scroll is activated
    var OFFSET_PERCENT = 0.35;
    var ANIMATE_CLASSES = 'up fade-in left'.split(' ');

    var queued = false;
    var animateNodes;
    var document = window.document;

    var checkForAnimation = function() {

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
            animateNodes.forEach(function(node) {
                if (scrollBottom > node.offsetTop) {
                    var delay = node.dataset.animateDelay || 0;
                    setTimeout(function() {
                        ANIMATE_CLASSES.forEach(function(className) {
                            node.classList.remove(className);
                        });
                    }, delay);
                    animateNodes = animateNodes.filter(function(animateNode) {
                        return animateNode !== node;
                    });
                }
            });

            // Remove scroll listener when there is no more nodes to animate
            if (animateNodes.length === 0) {
                window.removeEventListener('scroll', checkForAnimation);
            }
            queued = false;
        }, 50);
    };

    window.addEventListener('scroll', checkForAnimation);
    document.addEventListener('DOMContentLoaded', checkForAnimation);

    exports.refresh = function() {
        animateNodes = document.querySelectorAll('.animate');
        animateNodes = Array.prototype.slice.call(animateNodes);
    };
}));
