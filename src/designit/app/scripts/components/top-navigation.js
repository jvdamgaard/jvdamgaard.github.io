(function(root, factory) {
    'use strict';
    root.App = root.App || {};
    root.App.components = root.App.components || {};

    // Factory with dependencies
    factory((root.App.components.topNavigation = {}));
}(this, function() {
    'use strict';

    var $topNavigation = document.querySelector('.top-navigation');
    var navLinks = Array.prototype.slice.call($topNavigation.querySelectorAll('a')).reverse();
    var currentPos = 0;
    var startScrollUpPos;

    // Get nav links references
    navLinks.forEach(function(navLink) {
        var id = navLink.getAttribute('href');
        navLink.refEl = document.querySelector(id);
    });

    var setSizeOfNavigation = function() {

        var lastPos = currentPos;
        currentPos = window.scrollY;

        // Abort if no scroll
        if (lastPos === window.scrollY) {
            return;
        }

        // Always large navigation when in top
        if (currentPos < $topNavigation.clientHeight) {
            $topNavigation.classList.remove('small');
            startScrollUpPos = null;
            return;
        }

        // Small navigation when scrolling down
        if (lastPos < currentPos) {
            $topNavigation.classList.add('small');
            startScrollUpPos = null;
            return;
        }

        // Don't change navigation size when scrolling under the document
        if (currentPos + window.innerHeight >= document.body.innerHeight) {
            startScrollUpPos = null;
            return;
        }

        // Ignore big jumps (navigating the site)
        if (Math.abs(currentPos - lastPos) > 200) {
            startScrollUpPos = null;
            return;
        }

        // Abort if scrolling up
        if (startScrollUpPos) {
            return;
        }

        // Scroll up more than the height og the navigation within 200 ms
        startScrollUpPos = currentPos;
        setTimeout(function() {
            if (!startScrollUpPos) {
                return;
            }
            if (startScrollUpPos > (currentPos + $topNavigation.clientHeight * 2)) {
                $topNavigation.classList.remove('small');
            }
            startScrollUpPos = null;
        }, 200);
    };

    var setActiveNavigation = function() {
        var activeFound = false;
        navLinks.forEach(function(navLink) {
            var refOffset = navLink.refEl.getDocumentOffsetTop();
            if (!activeFound && (window.scrollY + window.innerHeight / 2) >= refOffset) {
                navLink.classList.add('active');
                activeFound = true;
            } else {
                navLink.classList.remove('active');
            }
        });
    };

    var delayed = function(callback) {
        var pending = false;
        return function() {
            if (!pending) {
                pending = true;
                setTimeout(function() {
                    callback();
                    pending = false;
                }, 100);
            }
        };
    };

    window.addEventListener('scroll', delayed(setSizeOfNavigation));
    window.addEventListener('scroll', delayed(setActiveNavigation));
    document.addEventListener('DOMContentLoaded', setSizeOfNavigation);
    document.addEventListener('DOMContentLoaded', setActiveNavigation);
    window.addEventListener('resize', delayed(setSizeOfNavigation));
    window.addEventListener('resize', delayed(setActiveNavigation));
}));
