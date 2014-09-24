(function(exports, document, window) {
    'use strict';

    var MAX_SCROLL_FACTOR = 0.8;
    var MIN_SCROLL_FACTOR = 0.2;

    // Get prefixed transform property
    var transformProperty;
    var transformProperties = 'webkitTransform MozTransform msTransform OTransform transform'.split(' ');
    var tempElement = document.createElement('div');
    transformProperties.some(function(property) {
        if (tempElement.style[property] === '') {
            transformProperty = property;
            return true;
        }
    });
    if (!transformProperty) {
        return;
    }

    var setTransform = function(container) {
        // Point where image hit top of container
        var fromZeroOffset = window.scrollY - container.getDocumentOffsetTop();

        // Factor to scroll with
        var scrollFactor = (container.clientHeight - container.backgroundElement.height) / (container.clientHeight - window.innerHeight);

        if (scrollFactor > MAX_SCROLL_FACTOR) {
            scrollFactor = MAX_SCROLL_FACTOR;
        }
        if (scrollFactor < MIN_SCROLL_FACTOR) {
            scrollFactor = MIN_SCROLL_FACTOR;
        }

        container.backgroundElement.style[transformProperty] = 'translate3d(0, ' + (fromZeroOffset * scrollFactor) + 'px, 0)';
    };

    var parallaxNodes = document.querySelectorAll('.parallax-scroll');
    parallaxNodes = Array.prototype.slice.call(parallaxNodes);

    var positionBackground = function() {
        parallaxNodes.forEach(setTransform);
    };

    if (parallaxNodes.length > 0) {
        parallaxNodes.forEach(function(parallaxNode) {
            parallaxNode.backgroundElement = parallaxNode.querySelector('.background');
            parallaxNode.backgroundElement.addEventListener('load', positionBackground);
        });
        window.addEventListener('scroll', positionBackground);
        window.addEventListener('resize', positionBackground);
        document.addEventListener('DOMContentLoaded', positionBackground);
    }

}(window.App.namespace('helpers.parallaxScroll'), document, window));
