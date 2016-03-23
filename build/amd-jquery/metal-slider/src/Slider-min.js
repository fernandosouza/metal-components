define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","metal-drag-drop/src/all/drag","metal-position/src/all/position","metal-soy/src/Soy","./Slider.soy","metal-jquery-adapter/src/JQueryAdapter"],function(t,e,a,n,o,i,r,s,l){"use strict";function u(t){return t&&t.__esModule?t:{"default":t}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var h=u(e),f=u(a),y=u(n),m=u(i),g=u(r),_=u(s),v=u(l),D=function(t){function e(){return p(this,e),d(this,t.apply(this,arguments))}return c(e,t),e.prototype.attached=function(){this.drag_=new o.Drag({constrain:this.element.querySelector(".rail"),handles:this.element.querySelector(".handle"),sources:this.element.querySelector(".rail-handle")}),this.attachDragEvents_()},e.prototype.attachDragEvents_=function(){this.drag_.on(o.Drag.Events.DRAG,this.updateValueFromDragData_.bind(this)),this.drag_.on(o.Drag.Events.END,this.updateValueFromDragData_.bind(this))},e.prototype.disposeInternal=function(){t.prototype.disposeInternal.call(this),this.drag_.dispose()},e.prototype.onRailMouseDown_=function(t){(f["default"].hasClass(t.target,"rail")||f["default"].hasClass(t.target,"rail-active"))&&this.updateValue_(t.offsetX,0)},e.prototype.syncMax=function(t){t<this.value?this.value=t:this.updateHandlePosition_()},e.prototype.syncMin=function(t){t>this.value?this.value=t:this.updateHandlePosition_()},e.prototype.syncValue=function(){this.updateHandlePosition_()},e.prototype.updateHandlePosition_=function(){if(!this.drag_||!this.drag_.isDragging()){var t=100*(this.value-this.min)/(this.max-this.min)+"%";this.element.querySelector(".rail-handle").style.left=t}},e.prototype.updateValue_=function(t,e){var a=m["default"].getRegion(this.element);this.value=Math.round(e+t/a.width*(this.max-this.min))},e.prototype.updateValueFromDragData_=function(t){this.updateValue_(t.relativeX,this.min)},e}(y["default"]);D.prototype.registerMetalComponent&&D.prototype.registerMetalComponent(D,"Slider"),g["default"].register(D,_["default"]),D.STATE={inputName:{validator:h["default"].isString},max:{value:100},min:{value:0},value:{validator:function(t){return h["default"].isNumber(t)&&this.min<=t&&t<=this.max},value:80}},t["default"]=D,v["default"].register("slider",D)});