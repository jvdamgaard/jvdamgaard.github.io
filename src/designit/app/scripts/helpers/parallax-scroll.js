// Universal Module Definition from https://github.com/umdjs/umd/blob/master/commonjsStrict.js
(function(root, factory) {
    'use strict';

    root.App = root.App || {};
    factory((root.App.parallaxScroll = {}), root.App.featureTest);
}(this, function(exports, featureTest) {
    'use strict';

    // Make sure that the image is scrolling up. A factor of 1 would imply in
    // a static image. A factor above 1 would imply that the image would scroll
    // in the opposite direction of the document
    var MAX_SCROLL_FACTOR = 0.75;

    // Make sure that the image is scrolling slower that the document.
    // A factor of 0 would imply no scroll effect.
    // A factor under 0 would imply a fastre scroll than the document.
    var MIN_SCROLL_FACTOR = 0.25;

    var parallaxNodes = document.querySelectorAll('.parallax-scroll');
    parallaxNodes = Array.prototype.slice.call(parallaxNodes);

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

    // Set translateY to create a parallex scroll effect
    var setTransform = function() {
        if (transformProperty && !featureTest.touch) {

            parallaxNodes.forEach(function(parallaxNode) {

                // Point where image hit top of parallaxNode
                var fromZeroOffset = window.scrollY - parallaxNode.getDocumentOffsetTop();

                // Factor to scroll with
                var scrollFactor = (parallaxNode.clientHeight - parallaxNode.backgroundElement.height) / (parallaxNode.clientHeight - window.innerHeight);

                if (scrollFactor > MAX_SCROLL_FACTOR) {
                    scrollFactor = MAX_SCROLL_FACTOR;
                }
                if (scrollFactor < MIN_SCROLL_FACTOR) {
                    scrollFactor = MIN_SCROLL_FACTOR;
                }

                parallaxNode.backgroundElement.style[transformProperty] = 'translate3d(0, ' + (fromZeroOffset * scrollFactor) + 'px, 0)';
            });
        }
    };

    // Make sure that the background image in the parallax node i streches to
    // the edges when scrolling.
    var adjustBackgroundDimensions = function() {

        parallaxNodes.forEach(function(parallaxNode) {
            var minHeight;
            var offset;

            if (featureTest.touch) {
                minHeight = parallaxNode.clientHeight;
            } else {

                var visibleContainerHeight = parallaxNode.clientHeight;
                if (window.innerHeight < visibleContainerHeight) {
                    visibleContainerHeight = window.innerHeight;
                }

                minHeight = visibleContainerHeight + (window.innerHeight * MIN_SCROLL_FACTOR);
            }
            var windowRatio = window.innerWidth / minHeight;
            var backgroundRatio = parallaxNode.backgroundElement.width / parallaxNode.backgroundElement.height;

            if (windowRatio < backgroundRatio) {
                parallaxNode.backgroundElement.classList.remove('full-width');
                parallaxNode.backgroundElement.style.height = minHeight + 'px';
                offset = ((parallaxNode.backgroundElement.width - window.innerWidth) / 2);
                parallaxNode.backgroundElement.style.marginLeft = '-' + offset + 'px';
                parallaxNode.backgroundElement.style.marginTop = '0px';
            } else {
                parallaxNode.backgroundElement.classList.add('full-width');
                parallaxNode.backgroundElement.style.height = 'auto';
                offset = ((parallaxNode.backgroundElement.height - minHeight) / 2);
                parallaxNode.backgroundElement.style.marginTop = '-' + offset + 'px';
                parallaxNode.backgroundElement.style.marginLeft = '0px';
            }
        });
    };

    var resetParallax = function() {
        adjustBackgroundDimensions();
        setTransform();
    };

    // Refresh parallaz scroll if the elements is added async
    exports.refresh = function() {
        var parallaxNodes = document.querySelectorAll('.parallax-scroll');
        parallaxNodes = Array.prototype.slice.call(parallaxNodes);
        parallaxNodes.forEach(function(parallaxNode) {
            parallaxNode.backgroundElement = parallaxNode.querySelector('.background');
            parallaxNode.backgroundElement.addEventListener('load', resetParallax);
        });
        adjustBackgroundDimensions();
        setTransform();
    };

    exports.refresh();

    window.addEventListener('scroll', setTransform);
    window.addEventListener('resize', resetParallax);
    document.addEventListener('DOMContentLoaded', exports.refresh);
}));
