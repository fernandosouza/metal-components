'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/attribute/Attribute', 'metal/src/events/EventEmitter', 'metal/src/events/EventEmitterProxy', 'metal-position/src/Position'], function (exports, _core, _dom, _Attribute2, _EventEmitter, _EventEmitterProxy, _Position) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _Attribute3 = _interopRequireDefault(_Attribute2);

	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

	var _EventEmitterProxy2 = _interopRequireDefault(_EventEmitterProxy);

	var _Position2 = _interopRequireDefault(_Position);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = (function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	})();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Affix = (function (_Attribute) {
		_inherits(Affix, _Attribute);

		function Affix(opt_config) {
			_classCallCheck(this, Affix);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Affix).call(this, opt_config));

			if (!Affix.emitter_) {
				Affix.emitter_ = new _EventEmitter2.default();
				Affix.proxy_ = new _EventEmitterProxy2.default(document, Affix.emitter_, null, {
					scroll: true
				});
			}

			_this.lastPosition_ = null;
			_this.scrollHandle_ = Affix.emitter_.on('scroll', _this.checkPosition.bind(_this));

			_this.on('elementChanged', _this.checkPosition);

			_this.on('offsetTopChanged', _this.checkPosition);

			_this.on('offsetBottomChanged', _this.checkPosition);

			_this.checkPosition();

			return _this;
		}

		_createClass(Affix, [{
			key: 'disposeInternal',
			value: function disposeInternal() {
				_dom2.default.removeClasses(this.element, Affix.Position.Bottom + ' ' + Affix.Position.Default + ' ' + Affix.Position.Top);

				this.scrollHandle_.dispose();

				_get(Object.getPrototypeOf(Affix.prototype), 'disposeInternal', this).call(this);
			}
		}, {
			key: 'checkPosition',
			value: function checkPosition() {
				if (this.intersectTopRegion()) {
					this.syncPosition(Affix.Position.Top);
				} else if (this.intersectBottomRegion()) {
					this.syncPosition(Affix.Position.Bottom);
				} else {
					this.syncPosition(Affix.Position.Default);
				}
			}
		}, {
			key: 'intersectBottomRegion',
			value: function intersectBottomRegion() {
				if (!_core2.default.isDef(this.offsetBottom)) {
					return false;
				}

				var clientHeight = _Position2.default.getHeight(this.scrollElement);

				var scrollElementClientHeight = _Position2.default.getClientHeight(this.scrollElement);

				return _Position2.default.getScrollTop(this.scrollElement) + scrollElementClientHeight >= clientHeight - this.offsetBottom;
			}
		}, {
			key: 'intersectTopRegion',
			value: function intersectTopRegion() {
				if (!_core2.default.isDef(this.offsetTop)) {
					return false;
				}

				return _Position2.default.getScrollTop(this.scrollElement) <= this.offsetTop;
			}
		}, {
			key: 'syncPosition',
			value: function syncPosition(position) {
				if (this.lastPosition_ !== position) {
					_dom2.default.addClasses(this.element, position);

					_dom2.default.removeClasses(this.element, this.lastPosition_);

					this.lastPosition_ = position;
				}
			}
		}]);

		return Affix;
	})(_Attribute3.default);

	Affix.Position = {
		Top: 'affix-top',
		Bottom: 'affix-bottom',
		Default: 'affix-default'
	};
	Affix.ATTRS = {
		scrollElement: {
			setter: _dom2.default.toElement,
			value: document
		},
		offsetTop: {
			validator: _core2.default.isNumber
		},
		offsetBottom: {
			validator: _core2.default.isNumber
		},
		element: {
			setter: _dom2.default.toElement
		}
	};
	exports.default = Affix;
});
//# sourceMappingURL=Affix.js.map