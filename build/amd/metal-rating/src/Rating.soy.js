define(['exports', 'metal-component/src/all/component', 'metal-soy/src/Soy'], function (exports, _component, _Soy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.templates = exports.Rating = undefined;

  var _component2 = _interopRequireDefault(_component);

  var _Soy2 = _interopRequireDefault(_Soy);

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

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

  var templates;
  goog.loadModule(function (exports) {

    // This file was automatically generated from Rating.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Rating.
     * @public
     */

    goog.module('Rating.incrementaldom');

    /** @suppress {extraRequire} */
    var soy = goog.require('soy');
    /** @suppress {extraRequire} */
    var soydata = goog.require('soydata');
    /** @suppress {extraRequire} */
    goog.require('goog.asserts');
    /** @suppress {extraRequire} */
    goog.require('soy.asserts');
    /** @suppress {extraRequire} */
    goog.require('goog.i18n.bidi');
    /** @suppress {extraRequire} */
    goog.require('goog.string');
    var IncrementalDom = goog.require('incrementaldom');
    var ie_open = IncrementalDom.elementOpen;
    var ie_close = IncrementalDom.elementClose;
    var ie_void = IncrementalDom.elementVoid;
    var ie_open_start = IncrementalDom.elementOpenStart;
    var ie_open_end = IncrementalDom.elementOpenEnd;
    var itext = IncrementalDom.text;
    var iattr = IncrementalDom.attr;

    /**
     * @param {{
     *    cssClasses: (?),
     *    disabled: (?),
     *    inputHiddenName: (?),
     *    options: (?),
     *    value: (?),
     *    label: (?soydata.SanitizedHtml|string|undefined)
     * }} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $render(opt_data, opt_ignored, opt_ijData) {
      soy.asserts.assertType(opt_data.label == null || opt_data.label instanceof Function || opt_data.label instanceof goog.soy.data.SanitizedContent || opt_data.label instanceof soydata.UnsanitizedText || goog.isString(opt_data.label), 'label', opt_data.label, '?soydata.SanitizedHtml|string|undefined');
      var label = /** @type {?soydata.SanitizedHtml|string|undefined} */opt_data.label;
      ie_open('div', null, null, 'aria-valuemin', opt_data.options[0].value, 'aria-valuemax', opt_data.options[opt_data.options.length - 1].value, 'aria-valuenow', opt_data.options[opt_data.value] ? opt_data.options[opt_data.value].value : '', 'aria-valuetext', opt_data.options[opt_data.value] ? opt_data.options[opt_data.value].title : '', 'class', 'rating', 'data-onmouseleave', 'handleMouseLeaveEvent');
      if (label) {
        ie_open('label', null, null, 'class', 'rate-label');
        var dyn0 = label;
        if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
        ie_close('label');
      }
      ie_open('div', null, null, 'class', 'rating-items');
      var optionLimit18 = opt_data.options.length;
      for (var option18 = 0; option18 < optionLimit18; option18++) {
        ie_void('button', null, null, 'aria-disabled', opt_data.disabled, 'aria-pressed', option18 <= opt_data.value ? 'true' : 'false', 'aria-label', opt_data.options[option18].title ? opt_data.options[option18].title : option18, 'class', 'btn rating-item ' + (option18 <= opt_data.value ? opt_data.cssClasses.on : opt_data.cssClasses.off), 'data-index', option18, 'data-onclick', 'handleClickEvent', 'data-onmouseover', 'handleMouseOverEvent', 'disabled', opt_data.disabled, 'title', opt_data.options[option18].title, 'type', 'button');
      }
      ie_close('div');
      ie_open('input', null, null, 'type', 'hidden', 'aria-hidden', 'true', 'name', opt_data.inputHiddenName, 'value', opt_data.options[opt_data.value] ? opt_data.options[opt_data.value].value : opt_data.value);
      ie_close('input');
      ie_close('div');
    }
    exports.render = $render;
    if (goog.DEBUG) {
      $render.soyTemplateName = 'Rating.render';
    }

    exports.render.params = ["label", "cssClasses", "disabled", "inputHiddenName", "options", "value"];
    exports.render.types = { "label": "html|string", "cssClasses": "any", "disabled": "any", "inputHiddenName": "any", "options": "any", "value": "any" };
    exports.templates = templates = exports;
    return exports;
  });

  var Rating = function (_Component) {
    _inherits(Rating, _Component);

    function Rating() {
      _classCallCheck(this, Rating);

      return _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).apply(this, arguments));
    }

    return Rating;
  }(_component2.default);

  _Soy2.default.register(Rating, templates);
  exports.Rating = Rating;
  exports.templates = templates;
  exports.default = templates;
});
//# sourceMappingURL=Rating.soy.js.map