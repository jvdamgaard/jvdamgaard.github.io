(function(Element) {
    'use strict';
    Element.prototype.getDocumentOffset = function() {
        var element = this;
        var offset = 0;
        while (element.parentNode) {
            offset += element.offsetTop;
            element = element.parentNode;
        }
        return offset;
    };
}(Element));
