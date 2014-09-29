// Universal Module Definition from https://github.com/umdjs/umd/blob/master/commonjsStrict.js
(function(root, factory) {
    'use strict';
    factory();
}(this, function() {
    'use strict';
    Element.prototype.getDocumentOffsetTop = function() {
        var element = this;
        var offset = 0;

        while (element && !isNaN(element.offsetTop)) {
            offset += element.offsetTop;
            element = element.offsetParent;
        }
        return offset;
    };
}));
