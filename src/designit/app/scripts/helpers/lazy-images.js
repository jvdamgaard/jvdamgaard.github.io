(function(root, factory) {
    'use strict';

    root.App = root.App || {};
    factory((root.App.lazyImages = {}));
}(this, function(exports) {
    'use strict';

    // Percent under bottom of screen images is loaded
    var OFFSET_PERCENT = 1.5;

    var queued = false;
    var lazyNodes;
    var document = window.document;

    var getHiddenImgOffsetTop = function(img) {
        var offsetTop;
        var tempElement = document.createElement('div');
        tempElement.height = 0;
        tempElement.width = 0;
        img.before(tempElement);
        offsetTop = tempElement.getDocumentOffsetTop();
        tempElement.remove();
        return offsetTop;
    };

    var loadImgSrc = function(img) {
        img.classList.add('animate-opacity');
        img.classList.add('fade-in');
        img.addEventListener('load', function() {
            img.classList.remove('fade-in');
        });
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
        } else if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    };

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
            lazyNodes.forEach(function(node) {
                var isImg = node.matches('img');
                var offsetTop = isImg ? getHiddenImgOffsetTop(node) : node.getDocumentOffsetTop();
                if (scrollBottom > offsetTop) {
                    if (isImg) {
                        loadImgSrc(node);
                    }
                    node.classList.remove('lazy');
                    lazyNodes = lazyNodes.filter(function(lazyNode) {
                        return lazyNode !== node;
                    });
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
    window.addEventListener('resize', checkForLazyImages);

    exports.refresh = function() {
        lazyNodes = document.querySelectorAll('.lazy');
        lazyNodes = Array.prototype.slice.call(lazyNodes);
    };
}));
