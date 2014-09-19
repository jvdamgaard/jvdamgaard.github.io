(function(exports, window) {
    'use strict';

    // Percent under bottom of screen images i loaded
    var OFFSET_PERCENT = 0.5;

    var queued = false;
    var lazyNodes;
    var document = window.document;

    var getHiddenImgOffsetHeight = function(img) {
        var offsetTop;
        var tempElement = document.createElement('div');
        tempElement.height = 0;
        tempElement.width = 0;
        img.before(tempElement);
        offsetTop = tempElement.offsetTop;
        tempElement.remove();
        return offsetTop;
    };

    var loadImgSrc = function(img) {
        img.classList.add('animate');
        img.classList.add('fade-in');
        img.addEventListener('load', function() {
            img.classList.remove('fade-in');
        });
        img.srcset = img.dataset.srcset;
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
                var offsetTop = isImg ? getHiddenImgOffsetHeight(node) : node.offsetTop;

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

    exports.refresh = function() {
        lazyNodes = document.querySelectorAll('.lazy');
        lazyNodes = Array.prototype.slice.call(lazyNodes);
    };

}(window.App.namespace('helpers.lazyImages'), window));
