(function(exports, document, window) {
    'use strict';

    var MAX_SCROLL_FACTOR = 0.9;

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

    var setTransform = function(imageSlider) {
        // Point where image hit top of container
        var fromZeroOffset = window.scrollY - imageSlider.getDocumentOffsetTop();

        // Factor to scroll with
        var scrollFactor = (imageSlider.clientHeight - imageSlider.img.height) / (imageSlider.clientHeight - window.innerHeight);

        if (scrollFactor > MAX_SCROLL_FACTOR) {
            scrollFactor = MAX_SCROLL_FACTOR;
        }

        imageSlider.img.style[transformProperty] = 'translate3d(0, ' + (fromZeroOffset * scrollFactor) + 'px, 0)';
    };

    var sliderImages = document.querySelectorAll('.img.slider');
    sliderImages = Array.prototype.slice.call(sliderImages);

    var positionImages = function() {
        sliderImages.forEach(setTransform);
    };

    if (sliderImages.length > 0) {
        sliderImages.forEach(function(sliderImage) {
            sliderImage.img = sliderImage.querySelector('img');
            sliderImage.img.addEventListener('load', positionImages);
        });
        window.addEventListener('scroll', positionImages);
        window.addEventListener('resize', positionImages);
        document.addEventListener('DOMContentLoaded', positionImages);
    }

}(window.App.namespace('helpers.sliderImages'), document, window));
