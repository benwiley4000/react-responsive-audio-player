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

// CONCATENATED MODULE: ./src/utils/requestAnimationFrameWhenPageVisible.js
let hiddenKey;
let visibilitychangeKey;

if (typeof document !== 'undefined') {
  if (typeof document.hidden !== 'undefined') {
    hiddenKey = 'hidden';
    visibilitychangeKey = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hiddenKey = 'msHidden';
    visibilitychangeKey = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hiddenKey = 'webkitHidden';
    visibilitychangeKey = 'webkitvisibilitychange';
  }
}

function requestAnimationFrameWhenPageVisible(rafCallback) {
  // if we have access to the Page Visibility API we should
  // check if the page is hidden and if so defer our requestAnimationFrame
  if (hiddenKey && document[hiddenKey]) {
    let cancelled = false;
    let id;
    document.addEventListener(visibilitychangeKey, () => {
      if (!cancelled) {
        id = requestAnimationFrame(rafCallback);
      }
    }, {
      once: true
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  } else {
    const id = requestAnimationFrame(rafCallback);
    return () => cancelAnimationFrame(id);
  }
}

/* harmony default export */ var utils_requestAnimationFrameWhenPageVisible = (requestAnimationFrameWhenPageVisible);
// CONCATENATED MODULE: ./src/MaybeMarquee.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const getNow = typeof performance !== 'undefined' && performance.now ? () => performance.now() : () => Date.now();

function pxToNum(px) {
  return Number(px.slice(0, -2));
}

function numToPx(num) {
  return `${num}px`;
}
/**
 * Used to make content scroll in marquee fashion, only when the container area is too small for all the content to be displayed at once
 */


class MaybeMarquee_MaybeMarquee extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0
    };
    this.moveMarquee = this.moveMarquee.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.requestMoveMarqueeAnimationFrame();
    this.marqueeContainerElementWidth = getComputedStyle(this.marqueeContainerElement).width;
    const contentStyle = getComputedStyle(this.movingContentContainerElement);
    this.movingContentContainerElementWidth = contentStyle.width;
    this.setState({
      contentHeight: contentStyle.height
    });
    this.resizeObserver = new external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_default.a(this.handleResize);
    this.resizeObserver.observe(this.marqueeContainerElement);
    this.resizeObserver.observe(this.movingContentContainerElement);
    this.lastMovementTime = getNow();
  }

  componentWillUnmount() {
    this.cancelRaf();
    this.resizeObserver.disconnect();
  }

  requestMoveMarqueeAnimationFrame() {
    this.cancelRaf = utils_requestAnimationFrameWhenPageVisible(this.moveMarquee);
  }

  moveMarquee() {
    const _this$props = this.props,
          pixelsPerSecond = _this$props.pixelsPerSecond,
          scrollDirection = _this$props.scrollDirection;
    const now = getNow();
    const dt = now - this.lastMovementTime;
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
      const movementInPixels = pixelsPerSecond * dt / 1000;
      const newOffset = pxToNum(this.movingContentContainerElement.style[scrollDirection]) - movementInPixels;

      if (newOffset > 0 - this.movingContentContainerElementWidth) {
        // we still have room to scroll.. keep going
        this.movingContentContainerElement.style[scrollDirection] = numToPx(newOffset);
      } else {
        // the content is off the screen so we should wrap around
        this.movingContentContainerElement.style[scrollDirection] = numToPx(this.marqueeContainerElementWidth);
      }
    }

    this.requestMoveMarqueeAnimationFrame();
  }

  handleResize(entries) {
    for (const entry of entries) {
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
  }

  render() {
    const _this$props2 = this.props,
          content = _this$props2.content,
          attributes = _objectWithoutPropertiesLoose(_this$props2, ["content"]);

    delete attributes.pixelsPerSecond;
    delete attributes.scrollDirection;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", _extends({}, attributes, {
      ref: elem => this.marqueeContainerElement = elem,
      style: _objectSpread({
        position: 'relative',
        overflow: 'hidden',
        height: this.state.contentHeight
      }, attributes.style || {})
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: elem => this.movingContentContainerElement = elem,
      style: {
        position: 'absolute',
        whiteSpace: 'nowrap'
      }
    }, content));
  }

}
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

// CONCATENATED MODULE: ./src/utils/getProgressStyle.js
function getProgressStyle(progress, progressDirection) {
  const progressAheadPercentage = `${(1 - (progress || 0)) * 100}%`;
  const style = {
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
// CONCATENATED MODULE: ./src/utils/getHandleStyle.js
function getHandleStyle(progress, progressDirection) {
  const progressPercentage = `${(progress || 0) * 100}%`;
  const style = {
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
// CONCATENATED MODULE: ./src/ProgressBarDisplay.js
function ProgressBarDisplay_extends() { ProgressBarDisplay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProgressBarDisplay_extends.apply(this, arguments); }

function ProgressBarDisplay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ProgressBarDisplay_defineProperty(target, key, source[key]); }); } return target; }

function ProgressBarDisplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProgressBarDisplay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * A non-interactive version of [`ProgressBar`](#progressbar)
 */

class ProgressBarDisplay_ProgressBarDisplay extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
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
  }

}
ProgressBarDisplay_ProgressBarDisplay.propTypes = {
  progressClassName: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  progressStyle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object,
  progress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  progressDirection: core_["PlayerPropTypes"].progressDirection.isRequired,
  handle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.element
};
/* harmony default export */ var src_ProgressBarDisplay = (Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["forwardRef"])((props, ref) => {
  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ProgressBarDisplay_ProgressBarDisplay, ProgressBarDisplay_extends({}, props, {
    progressBarRef: ref
  }));
}));
// CONCATENATED MODULE: ./src/utils/observeProgressBarRect.js
/*
Adapted from resize-observer-polyfill which has this license:
The MIT License (MIT)

Copyright (c) 2016 Denis Rul

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// Minimum delay before invoking the update of observers.
const REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.

const transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

const mutationObserverSupported = typeof MutationObserver !== 'undefined';
const observedElements = new Set();
const cachedRects = new Map();
const elementCallbacks = new Map();
let scrollTop;
let scrollLeft;
let isSetup = false;
let mutationObserver;

function setup() {
  if (isSetup) {
    return;
  }

  document.addEventListener('transitionend', onTransitionend);
  window.addEventListener('resize', refresh);

  if (mutationObserverSupported) {
    mutationObserver = new MutationObserver(refresh); // we don't observe contents since the progress bar's contents
    // are expected to conform to the shape of the container

    mutationObserver.observe(document, {
      attributes: true,
      subtree: true
    });
  } else {
    document.addEventListener('DOMSubtreeModified', refresh);
  }

  document.addEventListener('scroll', updateScroll);
  updateScroll();
  isSetup = true;
}

function teardown() {
  if (!isSetup) {
    return;
  }

  document.removeEventListener('transitionend', onTransitionend);
  window.removeEventListener('resize', refresh);

  if (mutationObserverSupported) {
    mutationObserver.disconnect();
  } else {
    document.removeEventListener('DOMSubtreeModified', refresh);
  }

  document.removeEventListener('scroll', updateScroll);
  isSetup = false;
}

let refreshTimeout;

function refresh() {
  clearTimeout(refreshTimeout);
  const updatedElements = [];

  for (const element of observedElements) {
    const newRect = getRectForElement(element);

    if (rectsAreDifferent(cachedRects.get(element), newRect)) {
      cachedRects.set(element, newRect);
      updatedElements.push(element);
    }
  }

  for (const element of updatedElements) {
    elementCallbacks.get(element)(cachedRects.get(element));
  }

  if (updatedElements.length) {
    // check again in the future to make sure nothing wasn't about to change
    refreshTimeout = setTimeout(refresh, REFRESH_DELAY);
  }
}

function updateScroll() {
  scrollTop = document.body.scrollTop;
  scrollLeft = document.body.scrollLeft;
}

function onTransitionend(_ref) {
  let _ref$propertyName = _ref.propertyName,
      propertyName = _ref$propertyName === void 0 ? '' : _ref$propertyName;
  // Detect whether transition may affect dimensions of an element.
  const isReflowProperty = transitionKeys.some(key => {
    return propertyName.indexOf(key) !== -1;
  });

  if (isReflowProperty) {
    refresh();
  }
}

function getRectForElement(element) {
  const domRect = element.getBoundingClientRect();
  return {
    pageTop: domRect.top + scrollTop,
    pageLeft: domRect.left + scrollLeft,
    width: domRect.width,
    height: domRect.height
  };
}

function rectsAreDifferent(a, b) {
  return a.pageTop !== b.pageTop || a.pageLeft !== b.pageLeft || a.width !== b.width || a.height !== b.height;
}

function observeProgressBarRect(element, callback) {
  if (!observedElements.size) {
    setup();
  }

  observedElements.add(element);
  cachedRects.set(element, getRectForElement(element));
  elementCallbacks.set(element, callback);
  callback(cachedRects.get(element));
  return () => {
    observedElements.delete(element);
    cachedRects.delete(element);
    elementCallbacks.delete(element);

    if (!observedElements.size) {
      teardown();
    }
  };
}

/* harmony default export */ var utils_observeProgressBarRect = (observeProgressBarRect);
// CONCATENATED MODULE: ./src/ProgressBar.js
function ProgressBar_extends() { ProgressBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProgressBar_extends.apply(this, arguments); }

function ProgressBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const noselectStyles = `
cursor: default;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-touch-callout: none;
`;
const arrowLeft = 37;
const arrowRight = 39;
const arrowUp = 38;
const arrowDown = 40;
/**
 * A vertical or horizontal progress bar element which can be manipulated by mouse or touch
 */

class ProgressBar_ProgressBar extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      adjusting: false,
      // used while adjusting
      tempProgress: null
    };
    this.progressContainer = null; // bind methods fired on React events

    this.setProgressContainerRef = this.setProgressContainerRef.bind(this);
    this.handleAdjustProgress = this.handleAdjustProgress.bind(this);
    this.handleAdjustComplete = this.handleAdjustComplete.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // add event listeners bound outside the scope of our component
    window.addEventListener('mousemove', this.handleAdjustProgress);
    document.addEventListener('touchmove', this.handleAdjustProgress);
    window.addEventListener('mouseup', this.handleAdjustComplete);
    document.addEventListener('touchend', this.handleAdjustComplete);
    this.unobserve = utils_observeProgressBarRect(this.progressContainer, rect => {
      this.cachedContainerRect = rect;
    });
    setTimeout(() => {
      const style = document.createElement('style');
      const className = `noselect_${Math.random().toString(16).slice(2, 7)}`;
      style.innerText = `.${className}{${noselectStyles}}`;
      document.body.appendChild(style);
      this.noselectStyleElement = style;
      this.noselectClassName = className;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const _this$state = this.state,
          adjusting = _this$state.adjusting,
          tempProgress = _this$state.tempProgress;

    if (adjusting && tempProgress !== prevState.tempProgress) {
      this.props.onAdjustProgress(tempProgress);
    }
  }

  componentWillUnmount() {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mousemove', this.handleAdjustProgress);
    document.removeEventListener('touchmove', this.handleAdjustProgress);
    window.removeEventListener('mouseup', this.handleAdjustComplete);
    document.removeEventListener('touchend', this.handleAdjustComplete);
    this.unobserve(); // remove noselect class in case a drag is in progress

    this.toggleNoselect(false); // noselectStyleElement might not exist if the component unmounts
    // before the timeout callback is called.

    if (this.noselectStyleElement) {
      this.noselectStyleElement.parentNode.removeChild(this.noselectStyleElement);
    }
  }

  setProgressContainerRef(ref) {
    this.progressContainer = ref;
  }

  toggleNoselect(on) {
    document.body.classList[on ? 'add' : 'remove'](this.noselectClassName);
  }

  getProgressFromPageCoordinates(pageX, pageY) {
    const _this$cachedContainer = this.cachedContainerRect,
          pageLeft = _this$cachedContainer.pageLeft,
          pageTop = _this$cachedContainer.pageTop,
          width = _this$cachedContainer.width,
          height = _this$cachedContainer.height;

    switch (this.props.progressDirection) {
      case 'down':
        return (pageY - pageTop) / height;

      case 'left':
        return 1 - (pageX - pageLeft) / width;

      case 'up':
        return 1 - (pageY - pageTop) / height;

      case 'right':
      default:
        return (pageX - pageLeft) / width;
    }
  }

  handleAdjustProgress(event) {
    if (this.props.readonly) {
      return;
    } // make sure we don't select stuff in the background


    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.toggleNoselect(true);
    } else if (!this.state.adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */


    event.preventDefault();
    const isTouch = event.type.slice(0, 5) === 'touch';
    const pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
    const pageY = isTouch ? event.targetTouches.item(0).pageY : event.pageY;
    const progress = this.getProgressFromPageCoordinates(pageX, pageY);
    const progressInBounds = Object(core_["convertToNumberWithinIntervalBounds"])(progress, 0, 1);
    this.setState({
      adjusting: true,
      tempProgress: progressInBounds
    });
  }

  handleAdjustComplete(event) {
    const onAdjustComplete = this.props.onAdjustComplete;
    /* this function is activated when the user lets go of
     * the mouse, so if noselect was applied
     * to the document body, get rid of it.
     */

    this.toggleNoselect(false);
    const _this$state2 = this.state,
          adjusting = _this$state2.adjusting,
          tempProgress = _this$state2.tempProgress;

    if (!adjusting) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers, so prevent default
     */


    event.preventDefault();
    this.setState({
      adjusting: false,
      tempProgress: null
    });
    onAdjustComplete(tempProgress);
  }

  handleKeyDown(event) {
    if (this.props.readonly) {
      return;
    }

    let newProgress = this.props.progress;

    switch (event.keyCode) {
      case arrowLeft:
      case arrowDown:
        newProgress -= 0.01;
        break;

      case arrowUp:
      case arrowRight:
        newProgress += 0.01;
        break;

      default:
        return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    this.setState({
      adjusting: true,
      tempProgress: Object(core_["convertToNumberWithinIntervalBounds"])(newProgress, 0, 1)
    });
  }

  render() {
    const _this$props = this.props,
          progressClassName = _this$props.progressClassName,
          progressStyle = _this$props.progressStyle,
          progress = _this$props.progress,
          progressDirection = _this$props.progressDirection,
          handle = _this$props.handle,
          attributes = ProgressBar_objectWithoutPropertiesLoose(_this$props, ["progressClassName", "progressStyle", "progress", "progressDirection", "handle"]);

    const _this$state3 = this.state,
          adjusting = _this$state3.adjusting,
          tempProgress = _this$state3.tempProgress;
    delete attributes.readonly;
    delete attributes.onAdjustProgress;
    delete attributes.onAdjustComplete;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_ProgressBarDisplay, ProgressBar_extends({
      tabIndex: 0
    }, attributes, {
      role: "slider",
      ref: this.setProgressContainerRef,
      progressClassName: progressClassName,
      progressStyle: progressStyle,
      progress: adjusting ? tempProgress : progress,
      progressDirection: progressDirection,
      handle: handle,
      onMouseDown: this.handleAdjustProgress,
      onTouchStart: this.handleAdjustProgress,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleAdjustComplete,
      onBlur: this.handleAdjustComplete
    }));
  }

}
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
// CONCATENATED MODULE: ./src/MediaProgressBar.js
function MediaProgressBar_extends() { MediaProgressBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MediaProgressBar_extends.apply(this, arguments); }

function MediaProgressBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * An enhanced [`ProgressBar`](#progressbar) which uses the surrounding [`playerContext`](#playercontext) to set its own props for `progress`, `readonly`, `onAdjustProgress` and `onSeekComplete`, and accepts all the other props available for `ProgressBar`
 */

class MediaProgressBar_MediaProgressBar extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props); // bind methods fired on React events

    this.handleSeekPreview = this.handleSeekPreview.bind(this);
    this.handleSeekComplete = this.handleSeekComplete.bind(this);
  }

  handleSeekPreview(progress) {
    this.props.onSeekPreview(progress * this.props.duration);
  }

  handleSeekComplete(progress) {
    this.props.onSeekComplete(progress * this.props.duration);
  }

  render() {
    const _this$props = this.props,
          playlist = _this$props.playlist,
          currentTime = _this$props.currentTime,
          seekPreviewTime = _this$props.seekPreviewTime,
          seekInProgress = _this$props.seekInProgress,
          duration = _this$props.duration,
          _this$props$durationO = _this$props.durationOverride,
          durationOverride = _this$props$durationO === void 0 ? duration : _this$props$durationO,
          attributes = MediaProgressBar_objectWithoutPropertiesLoose(_this$props, ["playlist", "currentTime", "seekPreviewTime", "seekInProgress", "duration", "durationOverride"]);

    delete attributes.onSeekPreview;
    delete attributes.onSeekComplete;
    const time = seekInProgress ? seekPreviewTime : currentTime;
    const displayedProgress = durationOverride ? time / durationOverride : 0;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_ProgressBar, MediaProgressBar_extends({}, attributes, {
      progress: displayedProgress,
      readonly: !Object(core_["isPlaylistValid"])(playlist),
      onAdjustProgress: this.handleSeekPreview,
      onAdjustComplete: this.handleSeekComplete
    }));
  }

}
MediaProgressBar_MediaProgressBar.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(core_["PlayerPropTypes"].track.isRequired).isRequired,
  currentTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  seekPreviewTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  seekInProgress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  onSeekPreview: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  onSeekComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  durationOverride: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
};
/* harmony default export */ var src_MediaProgressBar = (Object(core_["playerContextFilter"])(MediaProgressBar_MediaProgressBar, ['playlist', 'currentTime', 'seekPreviewTime', 'seekInProgress', 'duration', 'onSeekPreview', 'onSeekComplete']));
// CONCATENATED MODULE: ./src/MediaProgressBarDisplay.js
function MediaProgressBarDisplay_extends() { MediaProgressBarDisplay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MediaProgressBarDisplay_extends.apply(this, arguments); }

function MediaProgressBarDisplay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * An enhanced [`ProgressBarDisplay`](#progressbardisplay) which uses the surrounding [`playerContext`](#playercontext) to set its own `progress` prop, and accepts all the other props available for `ProgressBarDisplay`
 */

class MediaProgressBarDisplay_MediaProgressBarDisplay extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          currentTime = _this$props.currentTime,
          duration = _this$props.duration,
          _this$props$durationO = _this$props.durationOverride,
          durationOverride = _this$props$durationO === void 0 ? duration : _this$props$durationO,
          attributes = MediaProgressBarDisplay_objectWithoutPropertiesLoose(_this$props, ["currentTime", "duration", "durationOverride"]);

    const progress = durationOverride ? currentTime / durationOverride : 0;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_ProgressBarDisplay, MediaProgressBarDisplay_extends({}, attributes, {
      progress: progress
    }));
  }

}
MediaProgressBarDisplay_MediaProgressBarDisplay.propTypes = {
  currentTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  durationOverride: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
};
/* harmony default export */ var src_MediaProgressBarDisplay = (Object(core_["playerContextFilter"])(MediaProgressBarDisplay_MediaProgressBarDisplay, ['currentTime', 'duration']));
// CONCATENATED MODULE: ./src/VideoDisplay.js
function VideoDisplay_extends() { VideoDisplay_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return VideoDisplay_extends.apply(this, arguments); }

function VideoDisplay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { VideoDisplay_defineProperty(target, key, source[key]); }); } return target; }

function VideoDisplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function VideoDisplay_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // 'x:y' -> x / y

function extractAspectRatio(aspectRatio) {
  const values = aspectRatio.split(':').map(Number);
  return values[0] / values[1];
}

const defaultBgColor = '#000';

class VideoDisplay_InjectedCanvas extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  componentDidMount() {
    this.div.appendChild(this.props.canvas);
  }

  render() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: {
        width: this.props.containerWidth
      },
      ref: elem => this.div = elem
    });
  }

}

VideoDisplay_InjectedCanvas.propTypes = {
  containerWidth: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number,
  canvas: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.instanceOf(typeof HTMLCanvasElement === 'undefined' ? Object : HTMLCanvasElement)
};
/**
 * A container for the video content from the surrounding [`playerContext`](#playercontext)
 */

class VideoDisplay_VideoDisplay extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props); // using instance properties instead of React state to make sure
    // we can avoid annoying race conditions

    this.containerWidth = 0;
    this.containerHeight = 0;
    this.hostedVideo = null;
    this.videoFrameAtTimeLastVacated = null;
  }

  componentDidMount() {
    this.containerResizeObserver = new external_root_ResizeObserver_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_default.a(this.handleContainerResize.bind(this));
    this.containerResizeObserver.observe(this.containerElement);
    this.props.registerVideoHostElement(this.containerElement, {
      onHostOccupied: videoElement => {
        videoElement.style.width = `${this.containerWidth}px`;
        videoElement.style.maxHeight = `${this.containerHeight}px`;
        this.hostedVideo = videoElement;
        this.forceUpdate();
      },
      onHostVacated: videoElement => {
        // TODO: take into account container size and pixel density
        // when sizing videoFrame canvas element?
        const videoFrame = document.createElement('canvas');
        videoFrame.width = videoElement.videoWidth;
        videoFrame.height = videoElement.videoHeight;
        videoFrame.getContext('2d').drawImage(videoElement, 0, 0, videoFrame.width, videoFrame.height);
        videoFrame.style.maxWidth = '100%'; // 'vertical-align: middle' avoids unneeded 3px buffer below canvas

        videoFrame.style.verticalAlign = 'middle';
        this.videoFrameAtTimeLastVacated = videoFrame;
        this.hostedVideo = null;
        this.forceUpdate();
      }
    });
    this.props.renderVideoIntoHostElement(this.containerElement);
  }

  componentWillUnmount() {
    this.containerResizeObserver.disconnect();
    this.props.unregisterVideoHostElement(this.containerElement);
  }

  handleContainerResize() {
    const _this$containerElemen = this.containerElement,
          offsetWidth = _this$containerElemen.offsetWidth,
          offsetHeight = _this$containerElemen.offsetHeight;

    if (offsetWidth === this.containerWidth && offsetHeight === this.containerHeight) {
      return;
    }

    if (this.hostedVideo) {
      this.hostedVideo.style.width = `${offsetWidth}px`;
      this.hostedVideo.style.maxHeight = `${offsetHeight}px`;
    }

    this.containerWidth = offsetWidth;
    this.containerHeight = offsetHeight;
    this.forceUpdate();
  }

  render() {
    const _this$props = this.props,
          aspectRatio = _this$props.aspectRatio,
          fullscreen = _this$props.fullscreen,
          maintainAspectRatioInFullscreen = _this$props.maintainAspectRatioInFullscreen,
          renderPlaceholderContent = _this$props.renderPlaceholderContent,
          renderVideoIntoHostElement = _this$props.renderVideoIntoHostElement,
          attributes = VideoDisplay_objectWithoutPropertiesLoose(_this$props, ["aspectRatio", "fullscreen", "maintainAspectRatioInFullscreen", "renderPlaceholderContent", "renderVideoIntoHostElement"]);

    delete attributes.registerVideoHostElement;
    delete attributes.unregisterVideoHostElement;

    const containerStyle = VideoDisplay_objectSpread({
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
      ref: elem => this.containerElement = elem
    }), this.hostedVideo ? null : renderPlaceholderContent({
      containerWidth: this.containerWidth,
      containerHeight: this.containerHeight,
      stealVideo: () => renderVideoIntoHostElement(this.containerElement),
      renderLastShownFrame: () => this.videoFrameAtTimeLastVacated && external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(VideoDisplay_InjectedCanvas, {
        canvas: this.videoFrameAtTimeLastVacated,
        containerWidth: this.containerWidth
      })
    }));
  }

}
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

  renderPlaceholderContent(params) {
    const containerWidth = params.containerWidth,
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
// CONCATENATED MODULE: ./src/index.js
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