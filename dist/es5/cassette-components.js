(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("@cassette/core"), require("resize-observer-polyfill"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "@cassette/core", "resize-observer-polyfill"], factory);
	else if(typeof exports === 'object')
		exports["cassetteComponents"] = factory(require("prop-types"), require("react"), require("@cassette/core"), require("resize-observer-polyfill"));
	else
		root["cassetteComponents"] = factory(root["PropTypes"], root["React"], root["cassetteCore"], root["ResizeObserver"]);
})((typeof self !== "undefined" ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);

// EXTERNAL MODULE: external {"root":"ResizeObserver","commonjs":"resize-observer-polyfill","commonjs2":"resize-observer-polyfill","amd":"resize-observer-polyfill"}
var external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_ = __webpack_require__(3);
var external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_);

// CONCATENATED MODULE: ./packages/components/src/MaybeMarquee.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var getNow = typeof performance !== 'undefined' && performance.now ? function () {
  return performance.now();
} : function () {
  return Date.now();
};

function pxToNum(px) {
  return Number(px.slice(0, -2));
}

function numToPx(num) {
  return num + "px";
}
/**
 * Used to make content scroll in marquee fashion, only when the container area is too small for all the content to be displayed at once
 */


var MaybeMarquee_MaybeMarquee =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(MaybeMarquee, _PureComponent);

  function MaybeMarquee(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      contentHeight: 0
    };
    _this.moveMarquee = _this.moveMarquee.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = MaybeMarquee.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.animationFrameRequest = requestAnimationFrame(this.moveMarquee);
    this.marqueeContainerElementWidth = getComputedStyle(this.marqueeContainerElement).width;
    var contentStyle = getComputedStyle(this.movingContentContainerElement);
    this.movingContentContainerElementWidth = contentStyle.width;
    this.setState({
      contentHeight: contentStyle.height
    });
    this.resizeObserver = new external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_default.a(this.handleResize);
    this.resizeObserver.observe(this.marqueeContainerElement);
    this.resizeObserver.observe(this.movingContentContainerElement);
    this.lastMovementTime = getNow();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameRequest);
    this.resizeObserver.disconnect();
  };

  _proto.moveMarquee = function moveMarquee() {
    var _this$props = this.props,
        pixelsPerSecond = _this$props.pixelsPerSecond,
        scrollDirection = _this$props.scrollDirection;
    var now = getNow();
    var dt = now - this.lastMovementTime;
    this.lastMovementTime = now;

    if (scrollDirection === 'left') {
      this.movingContentContainerElement.style.right = undefined;
    } else {
      this.movingContentContainerElement.style.left = undefined;
    }

    if (this.marqueeContainerElementWidth >= this.movingContentContainerElementWidth) {
      // no scrolling since all the content fits
      this.movingContentContainerElement.style[scrollDirection] = 0;
    } else {
      var movementInPixels = pixelsPerSecond * dt / 1000;
      var newOffset = pxToNum(this.movingContentContainerElement.style[scrollDirection]) - movementInPixels;

      if (newOffset > 0 - this.movingContentContainerElementWidth) {
        // we still have room to scroll.. keep going
        this.movingContentContainerElement.style[scrollDirection] = numToPx(newOffset);
      } else {
        // the content is off the screen so we should wrap around
        this.movingContentContainerElement.style[scrollDirection] = numToPx(this.marqueeContainerElementWidth);
      }
    }

    this.animationFrameRequest = requestAnimationFrame(this.moveMarquee);
  };

  _proto.handleResize = function handleResize(entries) {
    for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entry = _ref;

      if (entry.target === this.marqueeContainerElement) {
        this.marqueeContainerElementWidth = entry.contentRect.width;
      }

      if (entry.target === this.movingContentContainerElement) {
        this.movingContentContainerElementWidth = entry.contentRect.width;
        this.setState({
          contentHeight: entry.contentRect.height
        });
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        content = _this$props2.content,
        attributes = _objectWithoutPropertiesLoose(_this$props2, ["content"]);

    delete attributes.pixelsPerSecond;
    delete attributes.scrollDirection;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", _extends({}, attributes, {
      ref: function ref(elem) {
        return _this2.marqueeContainerElement = elem;
      },
      style: _objectSpread({
        position: 'relative',
        overflow: 'hidden',
        height: this.state.contentHeight
      }, attributes.style || {})
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: function ref(elem) {
        return _this2.movingContentContainerElement = elem;
      },
      style: {
        position: 'absolute',
        whiteSpace: 'nowrap'
      }
    }, content));
  };

  return MaybeMarquee;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
MaybeMarquee_MaybeMarquee.propTypes = {
  content: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node.isRequired,
  pixelsPerSecond: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  scrollDirection: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['left', 'right']).isRequired
};
MaybeMarquee_MaybeMarquee.defaultProps = {
  pixelsPerSecond: 30,
  scrollDirection: 'left'
};
/* harmony default export */ var src_MaybeMarquee = (MaybeMarquee_MaybeMarquee);
// EXTERNAL MODULE: external {"root":"cassetteCore","commonjs":"@cassette/core","commonjs2":"@cassette/core","amd":"@cassette/core"}
var core_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/components/src/utils/getProgressStyle.js
function getProgressStyle(progress, progressDirection) {
  var progressAheadPercentage = (1 - (progress || 0)) * 100 + "%";
  var style = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };

  switch (progressDirection) {
    case 'left':
      style.left = progressAheadPercentage;
      style.willChange = 'left';
      break;

    case 'right':
      style.right = progressAheadPercentage;
      style.willChange = 'right';
      break;

    case 'up':
      style.top = progressAheadPercentage;
      style.willChange = 'top';
      break;

    case 'down':
      style.bottom = progressAheadPercentage;
      style.willChange = 'bottom';
      break;

    default:
      break;
  }

  return style;
}

/* harmony default export */ var utils_getProgressStyle = (getProgressStyle);
// CONCATENATED MODULE: ./packages/components/src/utils/getHandleStyle.js
function getHandleStyle(progress, progressDirection) {
  var progressPercentage = (progress || 0) * 100 + "%";
  var style = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  };

  switch (progressDirection) {
    case 'left':
      style.top = '50%';
      style.right = progressPercentage;
      style.willChange = 'right';
      style.transform = 'translate(50%, -50%)';
      break;

    case 'right':
      style.top = '50%';
      style.left = progressPercentage;
      style.willChange = 'left';
      style.transform = 'translate(-50%, -50%)';
      break;

    case 'up':
      style.left = '50%';
      style.bottom = progressPercentage;
      style.willChange = 'bottom';
      style.transform = 'translate(-50%, 50%)';
      break;

    case 'down':
      style.left = '50%';
      style.top = progressPercentage;
      style.willChange = 'top';
      style.transform = 'translate(-50%, -50%)';
      break;

    default:
      break;
  }

  return style;
}

/* harmony default export */ var utils_getHandleStyle = (getHandleStyle);
// CONCATENATED MODULE: ./packages/components/src/ProgressBarDisplay.js
function ProgressBarDisplay_extends() { ProgressBarDisplay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProgressBarDisplay_extends.apply(this, arguments); }

function ProgressBarDisplay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ProgressBarDisplay_defineProperty(target, key, source[key]); }); } return target; }

function ProgressBarDisplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProgressBarDisplay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ProgressBarDisplay_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






/**
 * A non-interactive version of [`ProgressBar`](#progressbar)
 */

var ProgressBarDisplay_ProgressBarDisplay =
/*#__PURE__*/
function (_PureComponent) {
  ProgressBarDisplay_inheritsLoose(ProgressBarDisplay, _PureComponent);

  function ProgressBarDisplay() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ProgressBarDisplay.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        progressClassName = _this$props.progressClassName,
        progressStyle = _this$props.progressStyle,
        progress = _this$props.progress,
        progressDirection = _this$props.progressDirection,
        handle = _this$props.handle,
        progressBarRef = _this$props.progressBarRef,
        attributes = ProgressBarDisplay_objectWithoutPropertiesLoose(_this$props, ["progressClassName", "progressStyle", "progress", "progressDirection", "handle", "progressBarRef"]);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", ProgressBarDisplay_extends({}, attributes, {
      ref: progressBarRef
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        touchAction: 'none'
      }
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: progressClassName,
      style: ProgressBarDisplay_objectSpread({}, progressStyle || {}, utils_getProgressStyle(progress, progressDirection))
    }), handle && external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: utils_getHandleStyle(progress, progressDirection)
    }, handle)));
  };

  return ProgressBarDisplay;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
ProgressBarDisplay_ProgressBarDisplay.propTypes = {
  progressClassName: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  progressStyle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object,
  progress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  progressDirection: core_["PlayerPropTypes"].progressDirection.isRequired,
  handle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.element
};
/* harmony default export */ var src_ProgressBarDisplay = (Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["forwardRef"])(function (props, ref) {
  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ProgressBarDisplay_ProgressBarDisplay, ProgressBarDisplay_extends({}, props, {
    progressBarRef: ref
  }));
}));
// CONCATENATED MODULE: ./packages/components/src/ProgressBar.js
function ProgressBar_extends() { ProgressBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProgressBar_extends.apply(this, arguments); }

function ProgressBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ProgressBar_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function ProgressBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var noselectStyles = "\ncursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n";
/**
 * A vertical or horizontal progress bar element which can be manipulated by mouse or touch
 */

var ProgressBar_ProgressBar =
/*#__PURE__*/
function (_PureComponent) {
  ProgressBar_inheritsLoose(ProgressBar, _PureComponent);

  function ProgressBar(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      adjusting: false
    };
    _this.progressContainer = null; // bind methods fired on React events

    _this.setProgressContainerRef = _this.setProgressContainerRef.bind(ProgressBar_assertThisInitialized(ProgressBar_assertThisInitialized(_this)));
    _this.handleAdjustProgress = _this.handleAdjustProgress.bind(ProgressBar_assertThisInitialized(ProgressBar_assertThisInitialized(_this))); // bind listeners to add on mount and remove on unmount

    _this.handleAdjustComplete = _this.handleAdjustComplete.bind(ProgressBar_assertThisInitialized(ProgressBar_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = ProgressBar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // add event listeners bound outside the scope of our component
    window.addEventListener('mousemove', this.handleAdjustProgress);
    document.addEventListener('touchmove', this.handleAdjustProgress);
    window.addEventListener('mouseup', this.handleAdjustComplete);
    document.addEventListener('touchend', this.handleAdjustComplete);
    setTimeout(function () {
      var style = document.createElement('style');
      var className = "noselect_" + Math.random().toString(16).slice(2, 7);
      style.innerText = "." + className + "{" + noselectStyles + "}";
      document.body.appendChild(style);
      _this2.noselectStyleElement = style;
      _this2.noselectClassName = className;
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mousemove', this.handleAdjustProgress);
    document.removeEventListener('touchmove', this.handleAdjustProgress);
    window.removeEventListener('mouseup', this.handleAdjustComplete);
    document.removeEventListener('touchend', this.handleAdjustComplete); // remove noselect class in case a drag is in progress

    this.toggleNoselect(false);
    this.noselectStyleElement.parentNode.removeChild(this.noselectStyleElement);
  };

  _proto.setProgressContainerRef = function setProgressContainerRef(ref) {
    this.progressContainer = ref;
  };

  _proto.toggleNoselect = function toggleNoselect(on) {
    document.body.classList[on ? 'add' : 'remove'](this.noselectClassName);
  };

  _proto.getProgressFromPageCoordinates = function getProgressFromPageCoordinates(pageX, pageY) {
    var _this$progressContain = this.progressContainer.getBoundingClientRect(),
        left = _this$progressContain.left,
        top = _this$progressContain.top,
        width = _this$progressContain.width,
        height = _this$progressContain.height;

    var _document$body = document.body,
        scrollLeft = _document$body.scrollLeft,
        scrollTop = _document$body.scrollTop;

    switch (this.props.progressDirection) {
      case 'down':
        return (pageY - top - scrollTop) / height;

      case 'left':
        return 1 - (pageX - left - scrollLeft) / width;

      case 'up':
        return 1 - (pageY - top - scrollTop) / height;

      case 'right':
      default:
        return (pageX - left - scrollLeft) / width;
    }
  };

  _proto.handleAdjustProgress = function handleAdjustProgress(event) {
    var _this$props = this.props,
        readonly = _this$props.readonly,
        onAdjustProgress = _this$props.onAdjustProgress;
    var adjusting = this.state.adjusting;

    if (readonly) {
      return;
    } // make sure we don't select stuff in the background


    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.toggleNoselect(true);
    } else if (!adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */


    event.preventDefault();
    var isTouch = event.type.slice(0, 5) === 'touch';
    var pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
    var pageY = isTouch ? event.targetTouches.item(0).pageY : event.pageY;
    var progress = this.getProgressFromPageCoordinates(pageX, pageY);
    var progressInBounds = Object(core_["convertToNumberWithinIntervalBounds"])(progress, 0, 1);
    this.setState({
      adjusting: true
    });
    onAdjustProgress(progressInBounds);
  };

  _proto.handleAdjustComplete = function handleAdjustComplete(event) {
    var onAdjustComplete = this.props.onAdjustComplete;
    /* this function is activated when the user lets go of
     * the mouse, so if noselect was applied
     * to the document body, get rid of it.
     */

    this.toggleNoselect(false);
    var adjusting = this.state.adjusting;

    if (!adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */


    event.preventDefault();
    this.setState({
      adjusting: false
    });
    onAdjustComplete();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        progressClassName = _this$props2.progressClassName,
        progressStyle = _this$props2.progressStyle,
        progress = _this$props2.progress,
        progressDirection = _this$props2.progressDirection,
        handle = _this$props2.handle,
        attributes = ProgressBar_objectWithoutPropertiesLoose(_this$props2, ["progressClassName", "progressStyle", "progress", "progressDirection", "handle"]);

    delete attributes.readonly;
    delete attributes.onAdjustProgress;
    delete attributes.onAdjustComplete;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_ProgressBarDisplay, ProgressBar_extends({}, attributes, {
      ref: this.setProgressContainerRef,
      progressClassName: progressClassName,
      progressStyle: progressStyle,
      progress: progress,
      progressDirection: progressDirection,
      handle: handle,
      onMouseDown: this.handleAdjustProgress,
      onTouchStart: this.handleAdjustProgress
    }));
  };

  return ProgressBar;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
ProgressBar_ProgressBar.propTypes = {
  progressClassName: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  progressStyle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object,
  progress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  progressDirection: core_["PlayerPropTypes"].progressDirection.isRequired,
  handle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.element,
  readonly: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  onAdjustProgress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  onAdjustComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
ProgressBar_ProgressBar.defaultProps = {
  readonly: false
};
/* harmony default export */ var src_ProgressBar = (ProgressBar_ProgressBar);
// CONCATENATED MODULE: ./packages/components/src/MediaProgressBar.js
function MediaProgressBar_extends() { MediaProgressBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MediaProgressBar_extends.apply(this, arguments); }

function MediaProgressBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MediaProgressBar_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function MediaProgressBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





/**
 * An enhanced [`ProgressBar`](#progressbar) which uses the surrounding [`playerContext`](#playercontext) to set its own props for `progress`, `readonly`, `onAdjustProgress` and `onSeekComplete`, and accepts all the other props available for `ProgressBar`
 */

var MediaProgressBar_MediaProgressBar =
/*#__PURE__*/
function (_PureComponent) {
  MediaProgressBar_inheritsLoose(MediaProgressBar, _PureComponent);

  function MediaProgressBar(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this; // bind methods fired on React events

    _this.handleSeekPreview = _this.handleSeekPreview.bind(MediaProgressBar_assertThisInitialized(MediaProgressBar_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = MediaProgressBar.prototype;

  _proto.handleSeekPreview = function handleSeekPreview(progress) {
    this.props.onSeekPreview(progress * this.props.duration);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        playlist = _this$props.playlist,
        currentTime = _this$props.currentTime,
        seekPreviewTime = _this$props.seekPreviewTime,
        seekInProgress = _this$props.seekInProgress,
        duration = _this$props.duration,
        onSeekComplete = _this$props.onSeekComplete,
        attributes = MediaProgressBar_objectWithoutPropertiesLoose(_this$props, ["playlist", "currentTime", "seekPreviewTime", "seekInProgress", "duration", "onSeekComplete"]);

    delete attributes.onSeekPreview;
    var time = seekInProgress ? seekPreviewTime : currentTime;
    var displayedProgress = duration ? time / duration : 0;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_ProgressBar, MediaProgressBar_extends({}, attributes, {
      progress: displayedProgress,
      readonly: !Object(core_["isPlaylistValid"])(playlist),
      onAdjustProgress: this.handleSeekPreview,
      onAdjustComplete: onSeekComplete
    }));
  };

  return MediaProgressBar;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
MediaProgressBar_MediaProgressBar.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(core_["PlayerPropTypes"].track.isRequired).isRequired,
  currentTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  seekPreviewTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  seekInProgress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  onSeekPreview: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  onSeekComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var src_MediaProgressBar = (Object(core_["playerContextFilter"])(MediaProgressBar_MediaProgressBar, ['playlist', 'currentTime', 'seekPreviewTime', 'seekInProgress', 'duration', 'onSeekPreview', 'onSeekComplete']));
// CONCATENATED MODULE: ./packages/components/src/MediaProgressBarDisplay.js
function MediaProgressBarDisplay_extends() { MediaProgressBarDisplay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MediaProgressBarDisplay_extends.apply(this, arguments); }

function MediaProgressBarDisplay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MediaProgressBarDisplay_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





/**
 * An enhanced [`ProgressBarDisplay`](#progressbardisplay) which uses the surrounding [`playerContext`](#playercontext) to set its own `progress` prop, and accepts all the other props available for `ProgressBarDisplay`
 */

var MediaProgressBarDisplay_MediaProgressBarDisplay =
/*#__PURE__*/
function (_PureComponent) {
  MediaProgressBarDisplay_inheritsLoose(MediaProgressBarDisplay, _PureComponent);

  function MediaProgressBarDisplay() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MediaProgressBarDisplay.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        currentTime = _this$props.currentTime,
        duration = _this$props.duration,
        attributes = MediaProgressBarDisplay_objectWithoutPropertiesLoose(_this$props, ["currentTime", "duration"]);

    var progress = duration ? currentTime / duration : 0;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_ProgressBarDisplay, MediaProgressBarDisplay_extends({}, attributes, {
      progress: progress
    }));
  };

  return MediaProgressBarDisplay;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
MediaProgressBarDisplay_MediaProgressBarDisplay.propTypes = {
  currentTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired
};
/* harmony default export */ var src_MediaProgressBarDisplay = (Object(core_["playerContextFilter"])(MediaProgressBarDisplay_MediaProgressBarDisplay, ['currentTime', 'duration']));
// CONCATENATED MODULE: ./packages/components/src/VideoDisplay.js
function VideoDisplay_extends() { VideoDisplay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return VideoDisplay_extends.apply(this, arguments); }

function VideoDisplay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { VideoDisplay_defineProperty(target, key, source[key]); }); } return target; }

function VideoDisplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function VideoDisplay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function VideoDisplay_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




 // 'x:y' -> x / y

function extractAspectRatio(aspectRatio) {
  var values = aspectRatio.split(':').map(Number);
  return values[0] / values[1];
}

var defaultBgColor = '#000';

var VideoDisplay_InjectedCanvas =
/*#__PURE__*/
function (_Component) {
  VideoDisplay_inheritsLoose(InjectedCanvas, _Component);

  function InjectedCanvas() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = InjectedCanvas.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.div.appendChild(this.props.canvas);
  };

  _proto.render = function render() {
    var _this = this;

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: {
        width: this.props.containerWidth
      },
      ref: function ref(elem) {
        return _this.div = elem;
      }
    });
  };

  return InjectedCanvas;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);

VideoDisplay_InjectedCanvas.propTypes = {
  containerWidth: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number,
  canvas: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.instanceOf(typeof HTMLCanvasElement === 'undefined' ? Object : HTMLCanvasElement)
};
/**
 * A container for the video content from the surrounding [`playerContext`](#playercontext)
 */

var VideoDisplay_VideoDisplay =
/*#__PURE__*/
function (_PureComponent) {
  VideoDisplay_inheritsLoose(VideoDisplay, _PureComponent);

  function VideoDisplay(props) {
    var _this2;

    _this2 = _PureComponent.call(this, props) || this; // using instance properties instead of React state to make sure
    // we can avoid annoying race conditions

    _this2.containerWidth = 0;
    _this2.containerHeight = 0;
    _this2.hostedVideo = null;
    _this2.videoFrameAtTimeLastVacated = null;
    return _this2;
  }

  var _proto2 = VideoDisplay.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var _this3 = this;

    this.containerResizeObserver = new external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_default.a(this.handleContainerResize.bind(this));
    this.containerResizeObserver.observe(this.containerElement);
    this.props.registerVideoHostElement(this.containerElement, {
      onHostOccupied: function onHostOccupied(videoElement) {
        videoElement.style.width = _this3.containerWidth + "px";
        videoElement.style.maxHeight = _this3.containerHeight + "px";
        _this3.hostedVideo = videoElement;

        _this3.forceUpdate();
      },
      onHostVacated: function onHostVacated(videoElement) {
        // TODO: take into account container size and pixel density
        // when sizing videoFrame canvas element?
        var videoFrame = document.createElement('canvas');
        videoFrame.width = videoElement.videoWidth;
        videoFrame.height = videoElement.videoHeight;
        videoFrame.getContext('2d').drawImage(videoElement, 0, 0, videoFrame.width, videoFrame.height);
        videoFrame.style.maxWidth = '100%'; // 'vertical-align: middle' avoids unneeded 3px buffer below canvas

        videoFrame.style.verticalAlign = 'middle';
        _this3.videoFrameAtTimeLastVacated = videoFrame;
        _this3.hostedVideo = null;

        _this3.forceUpdate();
      }
    });
    this.props.renderVideoIntoHostElement(this.containerElement);
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    this.containerResizeObserver.disconnect();
    this.props.unregisterVideoHostElement(this.containerElement);
  };

  _proto2.handleContainerResize = function handleContainerResize() {
    var _this$containerElemen = this.containerElement,
        offsetWidth = _this$containerElemen.offsetWidth,
        offsetHeight = _this$containerElemen.offsetHeight;

    if (offsetWidth === this.containerWidth && offsetHeight === this.containerHeight) {
      return;
    }

    if (this.hostedVideo) {
      this.hostedVideo.style.width = offsetWidth + "px";
      this.hostedVideo.style.maxHeight = offsetHeight + "px";
    }

    this.containerWidth = offsetWidth;
    this.containerHeight = offsetHeight;
    this.forceUpdate();
  };

  _proto2.render = function render() {
    var _this4 = this;

    var _this$props = this.props,
        aspectRatio = _this$props.aspectRatio,
        fullscreen = _this$props.fullscreen,
        maintainAspectRatioInFullscreen = _this$props.maintainAspectRatioInFullscreen,
        renderPlaceholderContent = _this$props.renderPlaceholderContent,
        renderVideoIntoHostElement = _this$props.renderVideoIntoHostElement,
        attributes = VideoDisplay_objectWithoutPropertiesLoose(_this$props, ["aspectRatio", "fullscreen", "maintainAspectRatioInFullscreen", "renderPlaceholderContent", "renderVideoIntoHostElement"]);

    delete attributes.registerVideoHostElement;
    delete attributes.unregisterVideoHostElement;

    var containerStyle = VideoDisplay_objectSpread({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: defaultBgColor
    }, attributes.style || {});

    if (aspectRatio && this.containerWidth && (!fullscreen || maintainAspectRatioInFullscreen)) {
      if (containerStyle.height && !this.warnedAboutStyleOverride) {
        Object(core_["logWarning"])('VideoDisplay cannot use style.height prop because it is ' + 'overridden by aspectRatio.');
        this.warnedAboutStyleOverride = true;
      } // h = w/(x/y)  -->  h*(x/y) = w  -->  x/y = w/h


      containerStyle.height = this.containerWidth / extractAspectRatio(aspectRatio);
    }

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", VideoDisplay_extends({}, attributes, {
      style: containerStyle,
      ref: function ref(elem) {
        return _this4.containerElement = elem;
      }
    }), this.hostedVideo ? null : renderPlaceholderContent({
      containerWidth: this.containerWidth,
      containerHeight: this.containerHeight,
      stealVideo: function stealVideo() {
        return renderVideoIntoHostElement(_this4.containerElement);
      },
      renderLastShownFrame: function renderLastShownFrame() {
        return _this4.videoFrameAtTimeLastVacated && external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(VideoDisplay_InjectedCanvas, {
          canvas: _this4.videoFrameAtTimeLastVacated,
          containerWidth: _this4.containerWidth
        });
      }
    }));
  };

  return VideoDisplay;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
VideoDisplay_VideoDisplay.propTypes = {
  registerVideoHostElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  renderVideoIntoHostElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  unregisterVideoHostElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  fullscreen: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  aspectRatio: core_["PlayerPropTypes"].aspectRatio,
  maintainAspectRatioInFullscreen: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  renderPlaceholderContent: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
VideoDisplay_VideoDisplay.defaultProps = {
  aspectRatio: '16:9',
  maintainAspectRatioInFullscreen: false,
  renderPlaceholderContent: function renderPlaceholderContent(params) {
    var containerWidth = params.containerWidth,
        containerHeight = params.containerHeight,
        renderLastShownFrame = params.renderLastShownFrame;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: {
        width: containerWidth,
        height: containerHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, renderLastShownFrame());
  }
};
/* harmony default export */ var src_VideoDisplay = (Object(core_["playerContextFilter"])(VideoDisplay_VideoDisplay, ['registerVideoHostElement', 'renderVideoIntoHostElement', 'unregisterVideoHostElement', 'fullscreen']));
// CONCATENATED MODULE: ./packages/components/src/index.js
/* concated harmony reexport MaybeMarquee */__webpack_require__.d(__webpack_exports__, "MaybeMarquee", function() { return src_MaybeMarquee; });
/* concated harmony reexport ProgressBar */__webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return src_ProgressBar; });
/* concated harmony reexport ProgressBarDisplay */__webpack_require__.d(__webpack_exports__, "ProgressBarDisplay", function() { return src_ProgressBarDisplay; });
/* concated harmony reexport MediaProgressBar */__webpack_require__.d(__webpack_exports__, "MediaProgressBar", function() { return src_MediaProgressBar; });
/* concated harmony reexport MediaProgressBarDisplay */__webpack_require__.d(__webpack_exports__, "MediaProgressBarDisplay", function() { return src_MediaProgressBarDisplay; });
/* concated harmony reexport VideoDisplay */__webpack_require__.d(__webpack_exports__, "VideoDisplay", function() { return src_VideoDisplay; });













/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-components.js.map