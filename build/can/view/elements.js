define(["can/util/library","can/view"],function(t){var e=function(){return 1===t.$(document.createComment("~")).length}(),n={tagToContentPropMap:{option:"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:t.attr.map,attrReg:/([^\s=]+)[\s]*=[\s]*/,defaultValue:t.attr.defaultValue,tagMap:{"":"span",colgroup:"col",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{col:"colgroup",tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},getParentNode:function(t,e){return e&&11===t.parentNode.nodeType?e:t.parentNode},setAttr:t.attr.set,getAttr:t.attr.get,removeAttr:t.attr.remove,contentText:function(t){return"string"==typeof t?t:t||0===t?""+t:""},after:function(e,n){var r=e[e.length-1];r.nextSibling?t.insertBefore(r.parentNode,n,r.nextSibling):t.appendChild(r.parentNode,n)},replace:function(r,o){n.after(r,o),t.remove(t.$(r)).length<r.length&&!e&&t.each(r,function(t){8===t.nodeType&&t.parentNode.removeChild(t)})}};return t.view.elements=n,n});
//# sourceMappingURL=elements.js.map