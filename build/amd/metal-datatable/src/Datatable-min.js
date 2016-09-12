define(["exports","metal/src/metal","metal-dom/src/all/dom","./Datatable.soy.js","metal-component/src/all/component","metal-keyboard-focus/src/KeyboardFocusManager","metal-soy/src/Soy","metal-useragent/src/UA"],function(e,t,o,r,n,a,s,i){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var p=u(t),d=u(o),y=u(r),h=u(n),_=u(a),b=u(s),m=u(i),g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},T=function(e){function t(){return l(this,t),c(this,e.apply(this,arguments))}return f(t,e),t.prototype.assertNoMixedTypesInArrays_=function(e){var t,o=this,r=function(e){var r=o.getValueType_(e);o.assertSameTypes_(t,r),t=r,o.assertNoMixedTypesInArrays_(e)},n=function(e){return o.assertNoMixedTypesInArrays_(e)};this.visit_(e,r,n)},t.prototype.assertSameTypes_=function(e,t){if(e&&t&&e!==t)throw new Error("Datatable does not support mixed types in arrays.")},t.prototype.attached=function(){this.keyboardFocusManager_=new _["default"](this,"td,th").setFocusHandler(this.handleNextFocus_.bind(this)).start()},t.prototype.buildRef_=function(e,t,o){return e+t+"-"+o},t.prototype.buildRefLastColumn_=function(e,t){var o=e.delegateTarget,r=parseInt(o.getAttribute("data-cols"),10);return this.buildRef_(t.prefix,t.row,r-1)},t.prototype.buildRefLastRow_=function(e,t){var o=e.delegateTarget.parentNode,r=parseInt(o.getAttribute("data-rows"),10);return this.buildRef_(t.prefix,r-1,t.col)},t.prototype.collectColumnsFromArrayValues_=function(e){var o=this,r=e.value,n=r[0]&&r[0].type===t.TYPES.OBJECT;n&&!function(){var t={},n={};r.forEach(function(e){return Object.keys(e.value).forEach(function(o){t[o]=!0,n[o]=e.value[o].type})}),e.columns=o.formatColumns(Object.keys(t)),e.columnsType=o.formatColumnsType(n)}()},t.prototype.collectColumnsFromObjectKeys_=function(e){var t=e.value,o={},r={};Object.keys(t).forEach(function(e){o[e]=!0,r[e]=t[e].type}),e.columns=this.formatColumns(Object.keys(o)),e.columnsType=this.formatColumnsType(r)},t.prototype.collectColumnsFromValues_=function(e){switch(e.type){case t.TYPES.ARRAY:this.collectColumnsFromArrayValues_(e);break;case t.TYPES.OBJECT:this.collectColumnsFromObjectKeys_(e)}},t.prototype.disposed=function(){this.keyboardFocusManager_&&(this.keyboardFocusManager_.dispose(),this.keyboardFocusManager_=null)},t.prototype.extractDataFromRef_=function(e){var o=t.REF_REGEX.exec(e);return{col:parseInt(o[2],10),prefix:e.substr(0,e.length-o[0].length),row:parseInt(o[1],10)}},t.prototype.getValueType_=function(e){return null===e?t.TYPES.NULL:void 0===e?t.TYPES.UNDEFINED:Array.isArray(e)?t.TYPES.ARRAY:p["default"].isObject(e)&&"HTML"===e.contentKind?t.TYPES.STRING:"undefined"==typeof e?"undefined":g(e)},t.prototype.handleClickToggle_=function(e){this.toggleTableContents(e.delegateTarget)},t.prototype.handleDownArrowKey_=function(e,t){return e.metaKey&&m["default"].isMac?this.buildRefLastRow_(e,t):this.buildRef_(t.prefix,t.row+1,t.col)},t.prototype.handleEnterKey_=function(e,t){var o=this.buildRef_(t.prefix,t.row,t.col)+"-label";this.refs[o]&&this.toggleTableContents(this.refs[o]),e.stopPropagation()},t.prototype.handleKeydownToggle_=function(e){13!==e.keyCode&&32!==e.keyCode||this.toggleTableContents(e.delegateTarget)},t.prototype.handleLeftArrowKey_=function(e,t){return!e.metaKey||!m["default"].isMac||this.buildRef_(t.prefix,t.row,0)},t.prototype.handleRightArrowKey_=function(e,t){return!e.metaKey||!m["default"].isMac||this.buildRefLastColumn_(e,t)},t.prototype.handleUpArrowKey_=function(e,t){return e.metaKey&&m["default"].isMac?this.buildRef_(t.prefix,0,t.col):this.buildRef_(t.prefix,t.row-1,t.col)},t.prototype.handleNextFocusData_=function(e,t){switch(e.keyCode){case 13:case 32:return this.handleEnterKey_(e,t);case 33:return this.buildRef_(t.prefix,0,t.col);case 34:return this.buildRefLastRow_(e,t);case 35:return this.buildRefLastColumn_(e,t);case 36:return this.buildRef_(t.prefix,t.row,0);case 37:return this.handleLeftArrowKey_(e,t);case 38:return this.handleUpArrowKey_(e,t);case 39:return this.handleRightArrowKey_(e,t);case 40:return this.handleDownArrowKey_(e,t)}},t.prototype.handleNextFocus_=function(e){var t=e.delegateTarget.getAttribute("ref"),o=this.extractDataFromRef_(t),r=this.handleNextFocusData_(e,o);return r&&(e.preventDefault(),e.stopPropagation()),r},t.prototype.isAlreadyExpanded=function(e){return p["default"].isObject(e)&&"columns"in e&&"type"in e},t.prototype.setData_=function(e){return this.isAlreadyExpanded(e)||(this.assertNoMixedTypesInArrays_(e),e=this.visitValuesAndExpandType_(e)),this.visitValuesAndWrapStringValues_(e)},t.prototype.toggleTableContents=function(e){d["default"].toggleClasses(e,this.labelClasses),d["default"].toggleClasses(d["default"].next(e,"table"),this.hiddenClasses)},t.prototype.visit_=function(e,o,r){switch(this.getValueType_(e)){case t.TYPES.ARRAY:e.forEach(function(t,r){return o(t,r,e)});break;case t.TYPES.OBJECT:Object.keys(e).forEach(function(t){return r(e[t],t,e)})}},t.prototype.visitValuesAndExpandType_=function(e){var t=this,o=function(e,o,r){return r[o]=t.visitValuesAndExpandType_(e)},r=function(e,o,r){return r[o]=t.visitValuesAndExpandType_(e)};this.visit_(e,o,r);var n=this.getValueType_(e),a={type:n,value:e};return this.collectColumnsFromValues_(a),a},t.prototype.visitValuesAndWrapStringValues_=function(e){var o=this,r=function(e,t,r){return r[t]=o.visitValuesAndWrapStringValues_(e)},n=function(e,t,r){return r[t]=o.visitValuesAndWrapStringValues_(e)};if(this.visit_(e,r,n),p["default"].isObject(e)){var a=this.getValueType_(e.value);a===t.TYPES.STRING&&(e.value=b["default"].toIncDom(e.value))}return e},t}(h["default"]);b["default"].register(T,y["default"]),T.STATE={data:{setter:"setData_"},displayColumnsType:{validator:p["default"].isBoolean,value:!0},formatColumns:{validator:p["default"].isFunction,value:function(e){return e.sort()}},formatColumnsType:{validator:p["default"].isFunction,value:function(e){return e}},hiddenClasses:{validator:p["default"].isString,value:"hidden"},labelClasses:{validator:p["default"].isString,value:"collapsed expanded"},tableClasses:{validator:p["default"].isString,value:"table table-bordered table-condensed table-hover"}},T.REF_REGEX=/(\d+)-(\d+)$/,T.TYPES={ARRAY:"array",BOOLEAN:"boolean",NULL:"null",NUMBER:"number",OBJECT:"object",STRING:"string",UNDEFINED:"undefined"},e["default"]=T});