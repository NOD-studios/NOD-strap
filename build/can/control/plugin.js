define(["jquery","can/util/library","can/control"],function(t,n){var o,r=function(t,n){var r=t.constructor.pluginName||t.constructor._shortName;for(o=0;o<n.length;o++)if("string"==typeof n[o]?r===n[o]:t instanceof n[o])return!0;return!1},i=n.makeArray,e=n.Control.setup;return n.Control.setup=function(){if(this!==n.Control){var t=this.pluginName||this._fullName;"can_control"!==t&&this.plugin(t),e.apply(this,arguments)}},t.fn.extend({controls:function(){var t,o,e=i(arguments),a=[];return this.each(function(){if(t=n.$(this).data("controls"))for(var i=0;i<t.length;i++)o=t[i],(!e.length||r(o,e))&&a.push(o)}),a},control:function(){return this.controls.apply(this,arguments)[0]}}),n.Control.plugin=function(o){var r=this;t.fn[o]||(t.fn[o]=function(o){var e,a=i(arguments),s="string"==typeof o&&t.isFunction(r.prototype[o]),u=a[0];return this.each(function(){var t=n.$(this).control(r);t?s?e=t[u].apply(t,a.slice(1)):t.update.apply(t,a):r.newInstance.apply(r,[this].concat(a))}),void 0!==e?e:this})},n.Control.prototype.update=function(t){n.extend(this.options,t),this.on()},n});
//# sourceMappingURL=plugin.js.map