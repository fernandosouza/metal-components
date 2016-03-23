define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","./IncrementalDomAop"],function(e,t,n,o,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=a(n),c=a(r),h=function(e){function n(t){s(this,n);var r=i(this,e.call(this,t));return r.changes_={},r.eventsCollector_=new o.EventsCollector(t),t.on("stateKeyChanged",r.handleStateKeyChanged_.bind(r)),t.on("detached",r.handleDetached_.bind(r)),r}return p(n,e),n.prototype.addInlineListeners_=function(e){for(var t=0;t<e.length;t+=2){var n=e[t];n.startsWith("data-on")&&this.listenersToAttach_.push({eventName:n.substr(7),fn:e[t+1]})}},n.prototype.attachInlineListeners_=function(){this.eventsCollector_.startCollecting();for(var e=0;e<this.listenersToAttach_.length;e++){var t=this.listenersToAttach_[e];this.eventsCollector_.attachListener(t.eventName,t.fn)}},n.prototype.disposeUnusedSubComponents_=function(){for(var e=Object.keys(this.component_.components),t=[],n=0;n<e.length;n++)this.subComponentsFound_[e[n]]||t.push(e[n]);this.component_.disposeSubComponents(t)},n.prototype.getSubComponent_=function(e,t){var n=e;"Component"===e&&t.ctor&&(n=t.ctor,t=t.data);var o=this.component_.addSubComponent(n,t);return o.wasRendered&&o.setState(t),o},n.prototype.guaranteeParent_=function(){var e=this.component_.element;if(!e||!e.parentNode){var t=document.createElement("div");return e&&l["default"].append(t,e),t}},n.prototype.handleDetached_=function(){this.eventsCollector_.detachAllListeners()},n.prototype.handleInterceptedCloseCall_=function(e,t){this.isComponentTag_(t)||e(t)},n.prototype.handleInterceptedOpenCall_=function(e,t){var n;return n=this.isComponentTag_(t)?this.handleSubComponentCall_.apply(this,arguments):this.handleRegularCall_.apply(this,arguments)},n.prototype.handleRegularCall_=function(e,n,o,r){var a=t.array.slice(arguments,4);this.addInlineListeners_((r||[]).concat(a));var s=e.apply(null,t.array.slice(arguments,1));return this.rootElementReached_||(this.rootElementReached_=!0,this.component_.element!==s&&(this.component_.element=s)),s},n.prototype.handleStateKeyChanged_=function(e){"element"!==e.key&&(this.changes_[e.key]=e)},n.prototype.handleSubComponentCall_=function(e,n,o,r){for(var a={},s=(r||[]).concat(t.array.slice(arguments,4)),i=0;i<s.length;i+=2)a[s[i]]=s[i+1];var p=this.renderSubComponent_(n,a);return p.element},n.prototype.isComponentTag_=function(e){return e[0]===e[0].toUpperCase()},n.prototype.render=function(){this.patch()},n.prototype.renderIncDom=function(){IncrementalDOM.elementVoid("div",null,["id",this.component_.id])},n.prototype.renderWithoutPatch=function(){this.changes_={},this.rootElementReached_=!1,this.subComponentsFound_={},this.listenersToAttach_=[],c["default"].startInterception(this.handleInterceptedOpenCall_.bind(this),this.handleInterceptedCloseCall_.bind(this)),this.renderIncDom(),c["default"].stopInterception(),this.attachInlineListeners_()},n.prototype.shouldUpdate=function(){return!0},n.prototype.patch=function(){var e=this.guaranteeParent_();e?(IncrementalDOM.patch(e,this.renderWithoutPatch.bind(this)),l["default"].exitDocument(this.component_.element)):IncrementalDOM.patchOuter(this.component_.element,this.renderWithoutPatch.bind(this))},n.prototype.update=function(){var e=Object.keys(this.changes_);e.length>0&&this.shouldUpdate(this.changes_)&&(this.patch(),this.eventsCollector_.detachUnusedListeners(),this.disposeUnusedSubComponents_())},n.prototype.renderSubComponent_=function(e,t){var n=this.getSubComponent_(e,t);return n.getRenderer().renderWithoutPatch(),n.wasRendered||n.renderAsSubComponent(),this.subComponentsFound_[n.id]=!0,n},n}(o.ComponentRenderer);h.prototype.registerMetalComponent&&h.prototype.registerMetalComponent(h,"IncrementalDomRenderer"),e["default"]=h});