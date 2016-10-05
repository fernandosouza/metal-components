define(["exports","metal/src/metal","./domData","./DomDelegatedEventHandle","./DomEventHandle"],function(e,t,n,r,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,n){if((0,t.isObject)(e)&&(0,t.isString)(n)){e.length||(e=[e]);for(var r=0;r<e.length;r++)"classList"in e[r]?s(e[r],n):l(e[r],n)}}function s(e,t){t.split(" ").forEach(function(t){t&&e.classList.add(t)})}function l(e,t){var n=" "+e.className+" ",r="";t=t.split(" ");for(var i=0;i<t.length;i++){var o=t[i];n.indexOf(" "+o+" ")===-1&&(r+=" "+o)}r&&(e.className=e.className+r)}function c(e,t,n){var r=W["default"].get(e);d(r.listeners,t,n)}function u(e,t,n,r){var i=W["default"].get(e);d(i.delegating[t].selectors,n,r)}function d(e,t,n){e[t]||(e[t]=[]),e[t].push(n)}function f(e,t){var n=W["default"].get(e);n.delegating[t]||(n.delegating[t]={handle:T(e,t,y,!!te[t]),selectors:{}})}function p(e,t){for(;e&&!x(e,t);)e=e.parentNode;return e}function g(e,n){if((0,t.isString)(n)&&(n=m(n)),n instanceof NodeList)for(var r=Array.prototype.slice.call(n),i=0;i<r.length;i++)e.appendChild(r[i]);else e.appendChild(n);return n}function m(e){var t=document.createElement("div");t.innerHTML="<br>"+e,t.removeChild(t.firstChild);for(var n=document.createDocumentFragment();t.firstChild;)n.appendChild(t.firstChild);return n}function v(e,n){return(0,t.isDocument)(e)?e.documentElement.contains(n):e.contains(n)}function h(e,n,r,i,o){var a=$[n];return a&&a.delegate&&(n=a.originalEvent,i=a.handler.bind(a,i)),o&&(i=i.bind(),i.defaultListener_=!0),f(e,n),(0,t.isString)(r)?u(e,n,r,i):c(r,n,i),new X["default"]((0,t.isString)(r)?e:r,n,i,(0,t.isString)(r)?r:null)}function E(e,t){var n=e,r=!0,i="button, input, select, textarea, fieldset";if("click"===t)for(;n;){if(n.disabled&&x(n,i)){r=!1;break}n=n.parentNode}return r}function b(e){e&&g(document.body,e)}function N(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function y(e){M(e);for(var n=(0,t.isDef)(e[ee])?e[ee]:e.target,r=!0,i=e.currentTarget,o=e.currentTarget.parentNode,a=[];n&&n!==o&&!e.stopped;)e.delegateTarget=n,r&=V(i,n,e,a),n=n.parentNode;for(var s=0;s<a.length&&!e.defaultPrevented;s++)e.delegateTarget=a[s].element,r&=a[s].fn(e);return e.delegateTarget=null,e[ee]=o,r}function C(e,t){return"classList"in e?S(e,t):L(e,t)}function S(e,t){return e.classList.contains(t)}function L(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function _(e){return 0===e.childNodes.length}function x(e,t){if(!e||1!==e.nodeType)return!1;var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return r?r.call(e,t):D(e,t)}function D(e,t){for(var n=document.querySelectorAll(t,e.parentNode),r=0;r<n.length;++r)if(n[r]===e)return!0;return!1}function O(e,t){do if(e=e.nextSibling,e&&x(e,t))return e;while(e);return null}function M(e){e.stopPropagation=F,e.stopImmediatePropagation=B}function T(e,n,r,i){if((0,t.isString)(e))return h(document,n,e,r);var o=$[n];return o&&o.event&&(n=o.originalEvent,r=o.handler.bind(o,r)),e.addEventListener(n,r,i),new Y["default"](e,n,r,i)}function j(e,t,n){var r=T(e,t,function(){return r.removeListener(),n.apply(this,arguments)});return r}function I(e,t){return p(e.parentNode,t)}function P(e,t){$[e]=t}function k(e){for(var t;t=e.firstChild;)e.removeChild(t)}function w(e,n){if((0,t.isObject)(e)&&(0,t.isString)(n)){e.length||(e=[e]);for(var r=0;r<e.length;r++)"classList"in e[r]?H(e[r],n):q(e[r],n)}}function H(e,t){t.split(" ").forEach(function(t){t&&e.classList.remove(t)})}function q(e,t){var n=" "+e.className+" ";t=t.split(" ");for(var r=0;r<t.length;r++)n=n.replace(" "+t[r]+" "," ");e.className=n.trim()}function A(e,t){e&&t&&e!==t&&e.parentNode&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))}function B(){var e=this;e.stopped=!0,e.stoppedImmediate=!0,Event.prototype.stopImmediatePropagation.call(e)}function F(){var e=this;e.stopped=!0,Event.prototype.stopPropagation.call(e)}function z(e,n){return!!$[n]||((0,t.isString)(e)&&(Z[e]||(Z[e]=document.createElement(e)),e=Z[e]),"on"+n in e)}function G(e){return(0,t.isElement)(e)||(0,t.isDocument)(e)?e:(0,t.isString)(e)?"#"===e[0]&&e.indexOf(" ")===-1?document.getElementById(e.substr(1)):document.querySelector(e):null}function J(e,n){(0,t.isObject)(e)&&(0,t.isString)(n)&&("classList"in e?K(e,n):Q(e,n))}function K(e,t){t.split(" ").forEach(function(t){e.classList.toggle(t)})}function Q(e,t){var n=" "+e.className+" ";t=t.split(" ");for(var r=0;r<t.length;r++){var i=" "+t[r]+" ",o=n.indexOf(i);n=o===-1?n+t[r]+" ":n.substring(0,o)+" "+n.substring(o+i.length)}e.className=n.trim()}function R(e,n,r){if(E(e,n)){var i=document.createEvent("HTMLEvents");i.initEvent(n,!0,!0),t.object.mixin(i,r),e.dispatchEvent(i)}}function U(e,t,n,r){var i=!0;e=e||[];for(var o=0;o<e.length&&!t.stoppedImmediate;o++)e[o].defaultListener_?r.push({element:n,fn:e[o]}):i&=e[o](t);return i}function V(e,t,n,r){if("click"!==n.type||2!==n.button){for(var i=W["default"].get(t),o=i.listeners[n.type],a=U(o,n,t,r),s=W["default"].get(e).delegating[n.type].selectors,l=Object.keys(s),c=0;c<l.length&&!n.stoppedImmediate;c++)x(t,l[c])&&(o=s[l[c]],a&=U(o,n,t,r));return a}}Object.defineProperty(e,"__esModule",{value:!0}),e.customEvents=void 0,e.addClasses=a,e.closest=p,e.append=g,e.buildFragment=m,e.contains=v,e.delegate=h,e.enterDocument=b,e.exitDocument=N,e.hasClass=C,e.isEmpty=_,e.match=x,e.next=O,e.on=T,e.once=j,e.parent=I,e.registerCustomEvent=P,e.removeChildren=k,e.removeClasses=w,e.replace=A,e.supportsEvent=z,e.toElement=G,e.toggleClasses=J,e.triggerEvent=R;var W=o(n),X=o(r),Y=o(i),Z={},$=e.customEvents={},ee="__metal_next_target__",te={blur:!0,error:!0,focus:!0,invalid:!0,load:!0,scroll:!0}});