define(["can/util/library","can/util/string","can/util/object"],function(e){if(!e.Object)throw new Error("can.fixture depends on can.Object. Please include it before can.fixture.");var t=function(t){return"undefined"!=typeof steal?e.isFunction(steal.config)?steal.config().root.mapJoin(t).toString():steal.root.join(t).toString():(e.fixture.rootUrl||"")+t},r=function(r,n){if(e.fixture.on){var i=function(){e.dev.log("can/fixture/fixture.js: "+Array.prototype.slice.call(arguments).join(" "))};r.type=r.type||r.method||"GET";var u=f(r);if(!r.fixture)return void("file:"===window.location.protocol&&i("ajax request to "+r.url+", no fixture found"));if("string"==typeof r.fixture&&e.fixture[r.fixture]&&(r.fixture=e.fixture[r.fixture]),"string"==typeof r.fixture){var a=r.fixture;/^\/\//.test(a)&&(a=t(r.fixture.substr(2))),u&&(a=e.sub(a,u)),delete r.fixture,i("looking for fixture in "+a),r.url=a,r.data=null,r.type="GET",r.error||(r.error=function(e,t,r){throw"fixtures.js Error "+t+" "+r})}else i("using a dynamic fixture for "+r.type+" "+r.url),r.dataTypes&&r.dataTypes.splice(0,0,"fixture"),u&&n&&(n.data=n.data||{},e.extend(n.data,u))}},n=function(e,t,r,n){return"number"!=typeof e&&(n=t,r=e,t="success",e=200),"string"!=typeof t&&(n=r,r=t,t="success"),e>=400&&599>=e&&(this.dataType="text"),[e,t,i(this,r),n]},i=function(e,t){var r=e.dataTypes?e.dataTypes[0]:e.dataType||"json";if(!t||!t[r]){var n={};n[r]=t,t=n}return t};if(e.ajaxPrefilter&&e.ajaxTransport)e.ajaxPrefilter(r),e.ajaxTransport("fixture",function(t,r){t.dataTypes.shift();var u,a=!1;return{send:function(o,f){u=setTimeout(function(){var e=function(){a===!1&&f.apply(null,n.apply(t,arguments))},u=t.fixture(r,e,o,t);void 0!==u&&f(200,"success",i(t,u),{})},e.fixture.delay)},abort:function(){a=!0,clearTimeout(u)}}});else{var u=e.ajax;e.ajax=function(t){if(r(t,t),t.fixture){var i,a=new e.Deferred,o=!1;return a.getResponseHeader=function(){},a.then(t.success,t.fail),a.abort=function(){clearTimeout(i),o=!0,a.reject(a)},i=setTimeout(function(){var e=function(){var e=n.apply(t,arguments),r=e[0];(r>=200&&300>r||304===r)&&o===!1?a.resolve(e[2][t.dataType]):a.reject(a,"error",e[1])},r=t.fixture(t,e,t.headers,t);void 0!==r&&a.resolve(r)},e.fixture.delay),a}return u(t)}}var a=[],o=function(e,t){for(var r=0;r<a.length;r++)if(c._similar(e,a[r],t))return r;return-1},f=function(e){var t=o(e);return t>-1?(e.fixture=a[t].fixture,c._getData(a[t].url,e.url)):void 0},s=function(e){var t=e.data.id;return void 0===t&&"number"==typeof e.data&&(t=e.data),void 0===t&&e.url.replace(/\/(\d+)(\/|$|\.)/g,function(e,r){t=r}),void 0===t&&(t=e.url.replace(/\/(\w+)(\/|$|\.)/g,function(e,r){"update"!==r&&(t=r)})),void 0===t&&(t=Math.round(1e3*Math.random())),t},c=e.fixture=function(t,r){if(void 0!==r){if("string"==typeof t){var n=t.match(/(GET|POST|PUT|DELETE) (.+)/i);t=n?{url:n[2],type:n[1]}:{url:t}}var i=o(t,!!r);if(i>-1&&a.splice(i,1),null==r)return;t.fixture=r,a.push(t)}else e.each(t,function(e,t){c(t,e)})},d=e.replacer;return e.extend(e.fixture,{_similar:function(t,r,n){return n?e.Object.same(t,r,{fixture:null}):e.Object.subset(t,r,e.fixture._compare)},_compare:{url:function(e,t){return!!c._getData(t,e)},fixture:null,type:"i"},_getData:function(t,r){var n=[],i=t.replace(".","\\.").replace("?","\\?"),u=new RegExp(i.replace(d,function(e,t){return n.push(t),"([^/]+)"})+"$").exec(r),a={};return u?(u.shift(),e.each(n,function(e){a[e]=u.shift()}),a):null},store:function(t,r,n){var i,u,a,o=0,f=function(e){for(var t=0;t<u.length;t++)if(e==u[t].id)return u[t]},c={};if(e.isArray(t)&&"string"==typeof t[0]?(i=t,t=r,r=n,n=arguments[3]):"string"==typeof t&&(i=[t+"s",t],t=r,r=n,n=arguments[3]),"number"==typeof t)u=[],a=function(){u=[];for(var n=0;t>n;n++){var a=r(n,u);a.id||(a.id=n),o=Math.max(a.id+1,o+1)||u.length,u.push(a)}e.isArray(i)&&(e.fixture["~"+i[0]]=u,e.fixture["-"+i[0]]=c.findAll,e.fixture["-"+i[1]]=c.findOne,e.fixture["-"+i[1]+"Update"]=c.update,e.fixture["-"+i[1]+"Destroy"]=c.destroy,e.fixture["-"+i[1]+"Create"]=c.create)};else{n=r;var d=t;a=function(){u=d.slice(0)}}return e.extend(c,{findAll:function(t){t=t||{};var r=u.slice(0);t.data=t.data||{},e.each((t.data.order||[]).slice(0).reverse(),function(e){var t=e.split(" ");r=r.sort(function(e,r){return"ASC"!==t[1].toUpperCase()?e[t[0]]<r[t[0]]?1:e[t[0]]===r[t[0]]?0:-1:e[t[0]]<r[t[0]]?-1:e[t[0]]===r[t[0]]?0:1})}),e.each((t.data.group||[]).slice(0).reverse(),function(e){var t=e.split(" ");r=r.sort(function(e,r){return e[t[0]]>r[t[0]]})});var i=parseInt(t.data.offset,10)||0,a=parseInt(t.data.limit,10)||u.length-i,o=0;for(var f in t.data)if(o=0,void 0!==t.data[f]&&(-1!==f.indexOf("Id")||-1!==f.indexOf("_id")))for(;o<r.length;)t.data[f]!=r[o][f]?r.splice(o,1):o++;if("function"==typeof n)for(o=0;o<r.length;)n(r[o],t)?o++:r.splice(o,1);else if("object"==typeof n)for(o=0;o<r.length;)e.Object.subset(r[o],t.data,n)?o++:r.splice(o,1);return{count:r.length,limit:t.data.limit,offset:t.data.offset,data:r.slice(i,i+a)}},findOne:function(e,t){var r=f(s(e));return"undefined"==typeof r?t(404,"Requested resource not found"):void t(r)},update:function(t,r){var n=s(t),i=f(n);return"undefined"==typeof i?r(404,"Requested resource not found"):(e.extend(i,t.data),void r({id:n},{location:t.url||"/"+s(t)}))},destroy:function(e,t){var r=s(e),n=f(r);if("undefined"==typeof n)return t(404,"Requested resource not found");for(var i=0;i<u.length;i++)if(u[i].id==r){u.splice(i,1);break}return{}},create:function(t,n){var i=r(u.length,u);e.extend(i,t.data),i.id||(i.id=o++),u.push(i),n({id:i.id},{location:t.url+"/"+i.id})}}),a(),e.extend({getId:s,find:function(e){return f(s(e))},reset:a},c)},rand:function l(e,t,r){if("number"==typeof e)return"number"==typeof t?e+Math.floor(Math.random()*(t-e)):Math.floor(Math.random()*e);var n=l;if(void 0===t)return n(e,n(e.length+1));var i=[];e=e.slice(0),r||(r=t),r=t+Math.round(n(r-t));for(var u=0;r>u;u++)i.push(e.splice(n(e.length),1)[0]);return i},xhr:function(t){return e.extend({},{abort:e.noop,getAllResponseHeaders:function(){return""},getResponseHeader:function(){return""},open:e.noop,overrideMimeType:e.noop,readyState:4,responseText:"",responseXML:null,send:e.noop,setRequestHeader:e.noop,status:200,statusText:"OK"},t)},on:!0}),e.fixture.delay=200,e.fixture.rootUrl=t(""),e.fixture["-handleFunction"]=function(t){return"string"==typeof t.fixture&&e.fixture[t.fixture]&&(t.fixture=e.fixture[t.fixture]),"function"==typeof t.fixture?(setTimeout(function(){t.success&&t.success.apply(null,t.fixture(t,"success")),t.complete&&t.complete.apply(null,t.fixture(t,"complete"))},e.fixture.delay),!0):!1},e.fixture.overwrites=a,e.fixture.make=e.fixture.store,e.fixture});
//# sourceMappingURL=fixture.js.map