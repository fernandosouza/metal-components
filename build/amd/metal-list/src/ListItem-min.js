define(["exports","metal/src/metal","metal-component/src/all/component","metal-soy/src/Soy","./ListItem.soy"],function(t,e,n,o,r){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(e),u=a(n),f=a(o),p=a(r),m=function(t){function e(){return i(this,e),c(this,t.apply(this,arguments))}return s(e,t),e.prototype.setterItemFn_=function(t){return t.avatar&&t.avatar.content&&l["default"].isString(t.avatar.content)&&(t.avatar.content=f["default"].toIncDom(t.avatar.content)),Array.isArray(t.iconsHtml)&&(t.iconsHtml=t.iconsHtml.map(f["default"].toIncDom)),t},e}(u["default"]);m.prototype.registerMetalComponent&&m.prototype.registerMetalComponent(m,"ListItem"),f["default"].register(m,p["default"]),m.STATE={item:{validator:l["default"].isObject,setter:"setterItemFn_"},index:{value:-1}},t["default"]=m});