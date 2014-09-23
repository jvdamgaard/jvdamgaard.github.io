(function(exports, document, window) {
    'use strict';

    var setTransform = function(image) {
        var offset = (window.scrollY - image.getDocumentOffsetTop()) * 0.75;
        image.style[transformProperty] = 'translate3d(0, ' + offset + 'px, 0)';
    };

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

    var sliderImages = document.querySelectorAll('.img.slider > img');
    sliderImages = Array.prototype.slice.call(sliderImages);
    sliderImages.forEach(function(sliderImage) {
        sliderImage.addEventListener('load', function() {
            setTransform(sliderImage);
        });
    });

    var positionImages = function() {
        sliderImages.forEach(setTransform);
    };

    if (sliderImages) {
        window.addEventListener('scroll', positionImages);
        window.addEventListener('resize', positionImages);
        document.addEventListener('DOMContentLoaded', positionImages);
        sliderImages.forEach(function(sliderImage) {
            sliderImage.addEventListener('load', positionImages);
        });
    }

}(window.App.namespace('helpers.sliderImages'), document, window));
