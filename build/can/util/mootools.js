define(["can/util/can","can/util/attr","mootools","can/event","can/util/fragment","can/util/deferred","can/util/array/each","can/util/object/isplain","can/util/inserted"],function(t,e){t.trim=function(t){return t?t.trim():t};var n=function(){var e,n,r,i,a,o,s=arguments[0]||{},u=1,d=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||t.isFunction(s)||(s={}),d===u&&(s=this,--u);d>u;u++)if(null!==(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(t.isPlainObject(i)||(a=t.isArray(i)))?(a?(a=!1,o=r&&t.isArray(r)?r:[]):o=r&&t.isPlainObject(r)?r:{},s[n]=t.extend(c,o,i)):void 0!==i&&(s[n]=i));return s};t.extend=n,t.makeArray=function(t){if(null===t)return[];try{return Type.isEnumerable(t)&&"string"!=typeof t?Array.prototype.slice.call(t):[t]}catch(e){var n,r=[];for(n=0;n<t.length;++n)r.push(t[n]);return r}},t.isArray=function(t){return"array"===typeOf(t)},t.inArray=function(t,e,n){return e?Array.prototype.indexOf.call(e,t,n):-1},t.map=function(t,e){return Array.from(t||[]).map(e)},t.param=function(t){return Object.toQueryString(t)},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.proxy=function(){var e=t.makeArray(arguments),n=e.shift();return n.bind.apply(n,e)},t.isFunction=function(t){return"function"===typeOf(t)},t.bind=function(e,n){return this.bind&&this.bind!==t.bind?this.bind(e,n):this.nodeName&&this.nodeType&&11!==this.nodeType?t.$(this).addEvent(e,n):this.addEvent?this.addEvent(e,n):t.addEvent.call(this,e,n),this},t.unbind=function(e,n){return this.unbind&&this.unbind!==t.unbind?this.unbind(e,n):this.nodeName&&this.nodeType&&11!==this.nodeType?t.$(this).removeEvent(e,n):this.removeEvent?this.removeEvent(e,n):t.removeEvent.call(this,e,n),this},t.on=t.bind,t.off=t.unbind,t.trigger=function(e,n,r,i){i=void 0===i?!0:i,r=r||[];var a=!0;if(e.fireEvent)for(e=e[0]||e;e&&a;){n.type||(n={type:n,target:e,stopPropagation:function(){a=!1}});var o=e!==window?t.$(e).retrieve("events")[0]:e.retrieve("events");o&&o[n.type]&&o[n.type].keys.each(function(t){t.apply(e,[n].concat(r))},this),e=i&&e.parentNode&&11!==e.parentNode.nodeType?e.parentNode:null}else"string"==typeof n&&(n={type:n}),n.target=n.target||e,t.dispatch.call(e,n,t.makeArray(r))},t.delegate=function(e,n,r){return this.delegate?this.delegate(e,n,r):this.addEvent?this.addEvent(n+":relay("+e+")",r):t.bind.call(this,n,r),this},t.undelegate=function(e,n,r){return this.undelegate?this.undelegate(e,n,r):this.removeEvent?this.removeEvent(n+":relay("+e+")",r):t.unbind.call(this,n,r),this};var r={type:"method",success:void 0,error:void 0},i=function(t,e){for(var n in t)e[n]="function"==typeof e[n]?function(){t[n].apply(t,arguments)}:n[t]};t.ajax=function(e){var n,a=t.Deferred(),o=t.extend({},e);for(var s in r)void 0!==o[s]&&(o[r[s]]=o[s],delete o[s]);o.method=o.method||"get",o.url=o.url.toString();var u=e.onSuccess||e.success,d=e.onFailure||e.error;return o.onSuccess=function(t){var e=t;i(n.xhr,a),a.resolve(e,"success",n.xhr),u&&u(e,"success",n.xhr)},o.onFailure=function(){i(n.xhr,a),a.reject(n.xhr,"error"),d&&d(n.xhr,"error")},n="json"===e.dataType?new Request.JSON(o):new Request(o),n.send(),i(n.xhr,a),a},t.$=function(t){return t===window?window:$$(t&&t.nodeName?[t]:t)};var a=document.id;document.id=function(t){return t&&11===t.nodeType?t:a.apply(document,arguments)},t.append=function(e,n){return"string"==typeof n&&(n=t.buildFragment(n)),e.grab(n)},t.filter=function(t,e){return t.filter(e)},t.data=function(t,e,n){return void 0===n?t[0].retrieve(e):t.store(e,n)},t.addClass=function(t,e){return t.addClass(e)},t.remove=function(t){var e=t.filter(function(t){return 1===t.nodeType?!0:void t.parentNode.removeChild(t)});return e.destroy(),e},t.has=function(t,e){return Slick.contains(t[0],e)?t:[]};var o=Element.prototype.destroy,s=Element.prototype.grab,u=Element.prototype.set;Element.implement({destroy:function(){t.trigger(this,"removed",[],!1);for(var e,n=this.getElementsByTagName("*"),r=0;void 0!==(e=n[r]);r++)t.trigger(e,"removed",[],!1);o.apply(this,arguments)},grab:function(e){var n;n=e&&11===e.nodeType?t.makeArray(e.childNodes):[e];var r=s.apply(this,arguments);return t.inserted(n),r},set:function(e){var n,r,i=-1===t.inArray(e,["events","html","load","morph","send","tag","tween"]);i&&(r=this.get(e));var a=u.apply(this,arguments);return i&&(n=this.get(e)),n!==r&&t.attr.trigger(this,e,r),a}.overloadSetter()}),t.get=function(t,e){return t[e]};var d=Slick.uidOf;return Slick.uidOf=function(t){return 1===t.nodeType||t===window||t.document===document?d(t):Math.random()},Element.NativeEvents.hashchange=2,t.attr=e,delete e.MutationObserver,Element.Events.attributes={onAdd:function(){var e=t.$(this);t.data(e,"canHasAttributesBindings",(t.data(e,"canHasAttributesBindings")||0)+1)},onRemove:function(){var e=t.$(this),n=t.data(e,"canHasAttributesBindings")||0;0>=n?t.cleanData(e,"canHasAttributesBindings"):t.data(e,"canHasAttributesBindings",n-1)}},t});
//# sourceMappingURL=mootools.js.map