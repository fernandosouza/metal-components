define(["exports","metal-soy/src/Soy","./TooltipBase","./Tooltip.soy","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,o,r,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.TooltipBase=e.Tooltip=void 0;var a=i(t),u=i(o),f=i(r),c=i(n),y=function(e){function t(){return l(this,t),p(this,e.apply(this,arguments))}return s(t,e),t.prototype.syncVisible=function(t){this.element.style.opacity=t?1:"",e.prototype.syncVisible.call(this,t)},t}(u["default"]);y.prototype.registerMetalComponent&&y.prototype.registerMetalComponent(y,"Tooltip"),a["default"].register(y,f["default"]),y.Align=u["default"].Align,e["default"]=y,e.Tooltip=y,e.TooltipBase=u["default"],c["default"].register("tooltip",y)});