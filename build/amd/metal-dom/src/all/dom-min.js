define(["exports","../dom","../domData","../DomEventEmitterProxy","../DomEventHandle","../features","../globalEval","../globalEvalStyles","../events"],function(e,t,l,a,o,r,n,u){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t["default"]=e,t}Object.defineProperty(e,"__esModule",{value:!0}),e.dom=e.globalEvalStyles=e.globalEval=e.features=e.DomEventHandle=e.DomEventEmitterProxy=e.domData=void 0,Object.keys(t).forEach(function(l){"default"!==l&&"__esModule"!==l&&Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[l]}})});var v=f(t),i=d(l),m=d(a),s=d(o),E=d(r),c=d(n),b=d(u);e.domData=i["default"],e.DomEventEmitterProxy=m["default"],e.DomEventHandle=s["default"],e.features=E["default"],e.globalEval=c["default"],e.globalEvalStyles=b["default"],e["default"]=v,e.dom=v});