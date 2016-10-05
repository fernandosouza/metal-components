define(["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=function(){function e(){t(this,e)}return r(e,null,[{key:"getNativeUserAgent",value:function(){var t=e.globals.window.navigator;if(t){var r=t.userAgent;if(r)return r}return""}},{key:"getNativePlatform",value:function(){var t=e.globals.window.navigator;if(t){var r=t.platform;if(r)return r}return""}},{key:"matchPlatform",value:function(t){return e.platform.indexOf(t)!==-1}},{key:"matchUserAgent",value:function(t){return e.userAgent.indexOf(t)!==-1}},{key:"testUserAgent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.userAgent=t,e.platform=r,e.isMac=e.matchPlatform("Mac"),e.isWin=e.matchPlatform("Win"),e.isOpera=e.matchUserAgent("Opera")||e.matchUserAgent("OPR"),e.isIe=e.matchUserAgent("Trident")||e.matchUserAgent("MSIE"),e.isEdge=e.matchUserAgent("Edge"),e.isIeOrEdge=e.isIe||e.isEdge,e.isChrome=(e.matchUserAgent("Chrome")||e.matchUserAgent("CriOS"))&&!e.isOpera&&!e.isEdge,e.isSafari=e.matchUserAgent("Safari")&&!(e.isChrome||e.isOpera||e.isEdge),e.isFirefox=e.matchUserAgent("Firefox")}}]),e}();n.globals={window:window},n.testUserAgent(n.getNativeUserAgent(),n.getNativePlatform()),e["default"]=n});