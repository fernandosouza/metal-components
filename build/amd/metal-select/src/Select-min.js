define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","metal-soy/src/Soy","./Select.soy","metal-dropdown/src/Dropdown"],function(e,t,n,o,r,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=i(t),c=i(n),f=i(o),p=i(r),h=i(s),y=function(e){function t(){return d(this,t),l(this,e.apply(this,arguments))}return a(t,e),t.prototype.findItemIndex_=function(e){for(var t=this.element.querySelectorAll("li"),n=0;n<t.length;n++)if(t.item(n)===e)return n},t.prototype.focusIndex_=function(e){var t=this.element.querySelector(".select-option:nth-child("+(e+1)+") a");t&&(this.focusedIndex_=e,t.focus())},t.prototype.getDropdown=function(){return this.components[this.id+"-dropdown"]},t.prototype.handleDropdownStateSynced_=function(e){this.openedWithKeyboard_?(this.focusIndex_(0),this.openedWithKeyboard_=!1):e.changes.expanded&&(this.focusedIndex_=null)},t.prototype.handleItemClick_=function(e){this.selectedIndex=this.findItemIndex_(e.delegateTarget),this.getDropdown().close(),e.preventDefault()},t.prototype.handleKeyDown_=function(e){if(this.getDropdown().expanded)switch(e.keyCode){case 27:this.getDropdown().close();break;case 38:this.focusedIndex_=u["default"].isDefAndNotNull(this.focusedIndex_)?this.focusedIndex_:1,this.focusIndex_(0===this.focusedIndex_?this.items.length-1:this.focusedIndex_-1),e.preventDefault();break;case 40:this.focusedIndex_=u["default"].isDefAndNotNull(this.focusedIndex_)?this.focusedIndex_:-1,this.focusIndex_(this.focusedIndex_===this.items.length-1?0:this.focusedIndex_+1),e.preventDefault()}else if((13===e.keyCode||32===e.keyCode)&&c["default"].hasClass(e.target,"dropdown-select"))return this.openedWithKeyboard_=!0,this.getDropdown().open(),void e.preventDefault()},t}(f["default"]);y.prototype.registerMetalComponent&&y.prototype.registerMetalComponent(y,"Select"),p["default"].register(y,h["default"]),y.STATE={arrowClass:{value:"caret"},buttonClass:{validator:u["default"].isString,value:"btn btn-default"},hiddenInputName:{validator:u["default"].isString},items:{validator:function(e){return e instanceof Array},valueFn:function(){return[]}},label:{validator:u["default"].isString},selectedIndex:{validator:u["default"].isNumber,valueFn:function(){return this.label||!this.items.length?-1:0}}},y.ELEMENT_CLASSES="select",e["default"]=y});