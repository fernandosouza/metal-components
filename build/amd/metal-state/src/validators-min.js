define(["exports","metal/src/metal"],function(n,r){"use strict";function e(n,e,t){var o=t?(0,r.getFunctionName)(t.constructor):null,u=t&&t.getRenderer&&t.getRenderer(),f=u&&u.getParent?t.getRenderer().getParent():null,i=f?(0,r.getFunctionName)(f.constructor):null,c=i?"Check render method of '"+i+"'.":"";return new Error("Warning: Invalid state passed to '"+e+"'. "+(n+" Passed to '"+o+"'. "+c))}function t(n){var r="undefined"==typeof n?"undefined":i(n);return Array.isArray(n)?"array":r}function o(n){return n instanceof Error}function u(n){return function(e,t,o){return!((0,r.isDef)(e)&&!(0,r.isNull)(e))||n(e,t,o)}}function f(n){var r=u(function(r,o,u){var f=t(r);return f===n||e("Expected type '"+n+"', but received type '"+f+"'.",o,u)});return function(){return 0===arguments.length?r:r.apply(void 0,arguments)}}Object.defineProperty(n,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c={any:function(){return function(){return!0}},array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),arrayOf:function(n){return u(function(r,t,u){var f=c.array(r,t,u);if(o(f))return f;for(var i=0;i<r.length;i++)if(o(n(r[i],t,u)))return e("Expected an array of single type",t,u);return!0})},instanceOf:function(n){return u(function(r,t,o){return r instanceof n||e("Expected instance of "+n,t,o)})},objectOf:function(n){return u(function(r,t,u){for(var f in r)if(o(n(r[f])))return e("Expected object of one type",t,u);return!0})},oneOf:function(n){return u(function(r,t,u){var f=c.array(n,t,u);if(o(f))return f;for(var i=0;i<n.length;i++){var a=n[i];if(r===a)return!0}return e("Expected one of given values.",t,u)})},oneOfType:function(n){return u(function(r,t,u){var f=c.array(n,t,u);if(o(f))return f;for(var i=0;i<n.length;i++)if(!o(n[i](r,t,u)))return!0;return e("Expected one of given types.",t,u)})},shapeOf:function(n){return u(function(t,u,f){var i=c.object(n,u,f);if(o(i))return i;for(var a in n){var l=!1,y=n[a];if(y.config&&(l=y.config.required,y=y.config.validator),l&&!(0,r.isDefAndNotNull)(t[a])||o(y(t[a])))return e("Expected object with a specific shape",u,f)}return!0})}};n["default"]=c});