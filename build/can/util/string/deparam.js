define(["can/util/library","can/util/string"],function(t){var n=/^\d+$/,e=/([^\[\]]+)|(\[\])/g,r=/([^?#]*)(#.*)?$/,i=function(t){return decodeURIComponent(t.replace(/\+/g," "))};return t.extend(t,{deparam:function(a){var c,o,u={};return a&&r.test(a)&&(c=a.split("&"),t.each(c,function(t){var r=t.split("="),a=i(r.shift()),c=i(r.join("=")),f=u;if(a){r=a.match(e);for(var p=0,l=r.length-1;l>p;p++)f[r[p]]||(f[r[p]]=n.test(r[p+1])||"[]"===r[p+1]?[]:{}),f=f[r[p]];o=r.pop(),"[]"===o?f.push(c):f[o]=c}})),u}}),t});
//# sourceMappingURL=deparam.js.map