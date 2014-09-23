(function(Element) {
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

}(Element));
