(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["cassetteCore"] = factory(require("prop-types"), require("react"));
	else
		root["cassetteCore"] = factory(root["PropTypes"], root["React"]);
})((typeof self !== "undefined" ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logWarning; });
/* eslint-disable no-console */
var log = console.log.bind(console);
var logError = console.error ? console.error.bind(console) : log;
var logWarning = console.warn ? console.warn.bind(console) : log;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



var packageVersion = __webpack_require__(6).version;

var _global = typeof window === 'undefined' ? global : window;

_global.__cassette_contexts__ = _global.__cassette_contexts__ || {};

function createSingleGlobalContext(_ref) {
  var displayName = _ref.displayName,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      keysWillUpdate = _ref.keysWillUpdate;
  var ExistingContext = _global.__cassette_contexts__[displayName];

  if (ExistingContext) {
    if (ExistingContext.packageVersion !== packageVersion) {
      Object(_console__WEBPACK_IMPORTED_MODULE_1__[/* logWarning */ "b"])("Warning: multiple versions of " + displayName + " from the @cassette/core" + (" package have been loaded. v" + packageVersion + " will be ignored and") + (" v" + ExistingContext.packageVersion + " will be used instead."));
    }

    return ExistingContext;
  } // inspired by:
  // https://github.com/philosaf/observed-bits/blob/master/src/index.js


  var flags = {};
  var i = 0;

  for (var _iterator = keysWillUpdate, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var key = _ref2;
    flags[key] = 1 << i++;
  }

  var Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue, function getChangedBits(prev, next) {
    var mask = 0;

    for (var _iterator2 = keysWillUpdate, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var key = _ref3;

      if (prev[key] !== next[key]) {
        mask |= flags[key];
      }
    }

    return mask;
  });

  Context.__cassetteGetObservedBits = function (keys) {
    var observedBits = 0;

    for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref4 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref4 = _i3.value;
      }

      var key = _ref4;
      observedBits |= flags[key];
    }

    return observedBits;
  };

  Context.displayName = displayName;
  Context.packageVersion = packageVersion;
  _global.__cassette_contexts__[displayName] = Context;
  return Context;
}

/* harmony default export */ __webpack_exports__["a"] = (createSingleGlobalContext);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (arr, predicate, ctx) {
	if (typeof Array.prototype.findIndex === 'function') {
		return arr.findIndex(predicate, ctx);
	}

	if (typeof predicate !== 'function') {
		throw new TypeError('predicate must be a function');
	}

	var list = Object(arr);
	var len = list.length;

	if (len === 0) {
		return -1;
	}

	for (var i = 0; i < len; i++) {
		if (predicate.call(ctx, list[i], i, list)) {
			return i;
		}
	}

	return -1;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = {"name":"@cassette/core","version":"2.0.0-alpha.33","description":"A simple, clean, and responsive visual wrapper for the HTML audio tag, built with React.","main":"dist/es5/cassette-core.js","scripts":{"build:clean":"rimraf dist","build:webpack":"BUILD_MODE=all webpack --progress","build":"npm run build:clean && npm run build:webpack","prepare":"npm run build","test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"https://github.com/benwiley4000/cassette.git"},"engines":{"node":">=6.0.0","npm":">=5.0.0"},"keywords":["audio","video","media","ui","react","reactjs","responsive","music","player","html5","component","components"],"author":{"name":"Ben Wiley","email":"therealbenwiley@gmail.com","url":"http://benwiley.org/"},"license":"MIT","peerDependencies":{"react":"^16.3.0"},"devDependencies":{"array-find-index":"^1.0.2","rimraf":"^2.5.4","webpack":"^4.17.1"},"dependencies":{"prop-types":"^15.5.10"},"publishConfig":{"access":"public"}};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PlayerPropTypes_namespaceObject = {};
__webpack_require__.r(PlayerPropTypes_namespaceObject);
__webpack_require__.d(PlayerPropTypes_namespaceObject, "controlKeyword", function() { return controlKeyword; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "control", function() { return control; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "crossOriginAttribute", function() { return crossOriginAttribute; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "repeatStrategy", function() { return PlayerPropTypes_repeatStrategy; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSource", function() { return mediaSource; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSessionAction", function() { return mediaSessionAction; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "mediaSessionArtwork", function() { return mediaSessionArtwork; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "track", function() { return PlayerPropTypes_track; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "progressDirection", function() { return progressDirection; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "seekMode", function() { return seekMode; });
__webpack_require__.d(PlayerPropTypes_namespaceObject, "aspectRatio", function() { return aspectRatio; });

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);

// EXTERNAL MODULE: ./node_modules/array-find-index/index.js
var array_find_index = __webpack_require__(4);
var array_find_index_default = /*#__PURE__*/__webpack_require__.n(array_find_index);

// EXTERNAL MODULE: ./src/utils/createSingleGlobalContext.js
var createSingleGlobalContext = __webpack_require__(3);

// CONCATENATED MODULE: ./src/PlayerContext.js
 // TODO: test to make sure context contents stay in sync with
// enumerated list here

/* harmony default export */ var PlayerContext = (Object(createSingleGlobalContext["a" /* default */])({
  displayName: 'PlayerContext',
  keysWillUpdate: ['playlist', 'activeTrackIndex', 'trackLoading', 'paused', 'currentTime', 'seekPreviewTime', 'seekInProgress', 'awaitingPlayResume', 'duration', 'bufferedRanges', 'playedRanges', 'seekableRanges', 'volume', 'muted', 'shuffle', 'stalled', 'playbackRate', 'setVolumeInProgress', 'repeatStrategy', 'mediaCannotPlay']
}));
// CONCATENATED MODULE: ./src/GroupContext.js

/* harmony default export */ var GroupContext = (Object(createSingleGlobalContext["a" /* default */])({
  displayName: 'GroupContext',
  keysWillUpdate: ['groupProps']
}));
// CONCATENATED MODULE: ./src/constants.js
var repeatStrategyOptions = ['none', 'playlist', 'track'];
// EXTERNAL MODULE: ./src/utils/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./src/PlayerPropTypes.js




function requiredOnlyUnlessHasProp(propType, altPropName) {
  var warnedAboutDefiningBoth = false;

  function validate(props, propName, componentName) {
    if (propName in props) {
      if (!warnedAboutDefiningBoth && altPropName in props) {
        Object(console["b" /* logWarning */])("Do not define both the '" + propName + "' and '" + altPropName + "' props.");
        warnedAboutDefiningBoth = true;
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.isRequired.apply(propType, [props, propName, componentName].concat(rest));
    }

    if (!(altPropName in props)) {
      return new Error("If the '" + altPropName + "' prop is not defined, '" + propName + "' must be.");
    }
  }

  return validate;
}

var controlKeyword = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['playpause', 'backskip', 'forwardskip', 'volume', 'mute', 'repeat', 'shuffle', 'progress', 'progressdisplay', 'fullscreen', 'spacer']);
var control = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func, controlKeyword]);
var crossOriginAttribute = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['anonymous', 'use-credentials']);
var PlayerPropTypes_repeatStrategy = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(repeatStrategyOptions);
var mediaSource = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired
});
var mediaSessionAction = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['play', 'pause', 'previoustrack', 'nexttrack', 'seekbackward', 'seekforward']);
var mediaSessionArtwork = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  sizes: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string
});
var PlayerPropTypes_track = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  url: requiredOnlyUnlessHasProp(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string, 'sources'),
  sources: requiredOnlyUnlessHasProp(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSource.isRequired), 'url'),
  title: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  artist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  album: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  artwork: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionArtwork.isRequired),
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number]),
  startingTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number,
  isUnboundedStream: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  meta: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object
});
var progressDirection = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['left', 'right', 'up', 'down']);
var seekMode = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['paused', 'immediate', 'onrelease']);
function aspectRatio(props, propName) {
  var prop = props[propName];

  if (prop === undefined) {
    return;
  }

  if (typeof prop !== 'string' || prop.split(':').length !== 2 || prop.split(':').some(isNaN)) {
    return new Error("The " + propName + " prop should be a string of the form 'x:y'. Example: 16:9");
  }
}
// CONCATENATED MODULE: ./src/factories/createCustomMediaElement.js
var loopchange = 'loopchange';
var srcrequest = 'srcrequest';

function createCustomMediaElement(media) {
  new MutationObserver(function () {
    media.dispatchEvent(new Event(loopchange));
  }).observe(media, {
    attributes: true,
    attributeFilter: ['loop']
  }); // Don't let the media src property get modified directly.
  // Instead, when it does get set, dispatch an event to be
  // handled in a way that doesn't conflict with the loaded
  // playlist.

  Object.defineProperty(media, 'src', {
    get: function get() {
      return media.currentSrc;
    },
    set: function set(src) {
      var e = new Event(srcrequest);
      e.srcRequested = src;
      media.dispatchEvent(e);
    }
  });
  return media;
}

/* harmony default export */ var factories_createCustomMediaElement = (createCustomMediaElement);
// CONCATENATED MODULE: ./src/utils/ShuffleManager.js
/* ShuffleManager
 *
 * Manages navigation throughout a list which is:
 * - Sourced from another provided list
 * - In random order (except to avoid consecutive duplicates)
 * - Extended endlessly on-the-fly, as needed
 * - Able to have future history overwritten by non-random choices
 * - Able to swap source lists and maintain shuffle order for common members
 */
var ShuffleManager =
/*#__PURE__*/
function () {
  function ShuffleManager(list, options) {
    if (options === void 0) {
      options = {};
    }

    this._list = list;
    this._forwardStack = [];
    this._backStack = [];
    this._currentItem = undefined;
    this._allowBackShuffle = Boolean(options.allowBackShuffle);
  }

  var _proto = ShuffleManager.prototype;

  _proto.findNextItem = function findNextItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._forwardStack, this._backStack, this._currentItem, true);
    return this._currentItem;
  };

  _proto.findPreviousItem = function findPreviousItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._backStack, this._forwardStack, this._currentItem, this._allowBackShuffle);
    return this._currentItem;
  };

  _proto.pickNextItem = function pickNextItem(index, currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    if (this._list[index] === undefined) {
      return undefined;
    }

    if (this._currentItem !== undefined) {
      this._backStack.push(this._currentItem);
    }

    this._forwardStack.length = 0;
    this._currentItem = this._list[index];
    return this._currentItem;
  };

  _proto.setList = function setList(list) {
    this._list = list;
  };

  _proto.setOptions = function setOptions(options) {
    var _arr = Object.keys(options);

    for (var _i = 0; _i < _arr.length; _i++) {
      var o = _arr[_i];

      switch (o) {
        case 'allowBackShuffle':
          this["_" + o] = Boolean(options[o]);
          break;

        default:
          break;
      }
    }
  };

  _proto.setCurrentIndex = function setCurrentIndex(currentIndex) {
    var item = this._list[currentIndex];

    if (this._currentItem !== item) {
      this.clear();
      this._currentItem = item;
    }
  };

  _proto.clear = function clear() {
    this._forwardStack.length = 0;
    this._backStack.length = 0;
    this._currentItem = undefined;
  };

  return ShuffleManager;
}();

function _goForward(n, forwardStack, backStack, currentItem) {
  var item = currentItem;

  for (var i = 0; i < n; i++) {
    if (!forwardStack.length) {
      // rollback before erroring (note stack reversal)
      _goForward(i, backStack, forwardStack, item);

      throw "Moving " + n + " places was not possible!";
    }

    backStack.push(item);
    item = forwardStack.pop();
  }

  return item;
}

function _allItemsMatch(list, item) {
  if (!list.length) {
    return false;
  }

  for (var i = 0; i < list.length; i++) {
    if (item !== list[i]) {
      return false;
    }
  }

  return true;
}

function _findNextItem(list, forwardStack, backStack, currentItem, allowMore) {
  var item = currentItem;

  if (!list.length) {
    return undefined;
  }

  for (var i = 1; i <= forwardStack.length; i++) {
    if (list.indexOf(forwardStack[forwardStack.length - i]) !== -1) {
      return _goForward(i, forwardStack, backStack, item);
    }
  }

  if (!allowMore) {
    return undefined;
  }

  if (_allItemsMatch(list, item)) {
    // we can serve this as our "next" item but we
    // won't modify our history since it's the same.
    return item;
  }

  var nextItem;

  do {
    nextItem = list[Math.floor(Math.random() * list.length)];
  } while (item === nextItem || nextItem === undefined); // if we're skipping items that aren't in our current list we may
  // have some items in our forwardStack - make sure we move to the front.


  item = _goForward(forwardStack.length, forwardStack, backStack, item);

  if (item !== undefined) {
    backStack.push(item);
  }

  return nextItem;
}

/* harmony default export */ var utils_ShuffleManager = (ShuffleManager);
// CONCATENATED MODULE: ./src/utils/isPlaylistValid.js
function isPlaylistValid(playlist) {
  return Boolean(playlist && playlist.length);
}

/* harmony default export */ var utils_isPlaylistValid = (isPlaylistValid);
// CONCATENATED MODULE: ./src/utils/getTrackSources.js

var blankSources = [{
  src: ''
}];

function getTrackSources(playlist, index) {
  if (!utils_isPlaylistValid(playlist)) {
    return blankSources;
  }

  var _playlist$index = playlist[index],
      sources = _playlist$index.sources,
      url = _playlist$index.url;

  if (sources) {
    return sources.length ? sources : blankSources;
  }

  return [{
    src: url
  }];
}

/* harmony default export */ var utils_getTrackSources = (getTrackSources);
// CONCATENATED MODULE: ./src/utils/findTrackIndexByUrl.js


function findTrackIndexByUrl(playlist, url) {
  return array_find_index_default()(playlist, function (track) {
    if (track.sources) {
      return array_find_index_default()(track.sources, function (source) {
        return source.src === url;
      }) !== -1;
    }

    return track.url && url === track.url;
  });
}

/* harmony default export */ var utils_findTrackIndexByUrl = (findTrackIndexByUrl);
// CONCATENATED MODULE: ./src/utils/snapshot.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var veryLongKey = '__highly_unstable_snapshot_internals_which_will_break_your_app_if_you_use_them_directly__';
var versionKey = '__cassette_snapshot_version__'; // IMPORTANT: new migrations *must* always be added to the end since
// the tracked snapshot version is based on the migration index.
// If there is a crash-inducing bug in an existing migration, it can be patched
// in-place, but it should never be removed from the migrations array.

var migrations = [function (oldSnapshot) {
  var _objectSpread2;

  var __unstable__ = oldSnapshot.__unstable__,
      rest = _objectWithoutPropertiesLoose(oldSnapshot, ["__unstable__"]);

  return _objectSpread({}, rest, (_objectSpread2 = {}, _objectSpread2[veryLongKey] = __unstable__, _objectSpread2));
}];
function getStateSnapshot(state) {
  var _ref;

  var paused = state.paused,
      currentTime = state.currentTime,
      activeTrackIndex = state.activeTrackIndex,
      volume = state.volume,
      muted = state.muted,
      loop = state.loop,
      cycle = state.cycle,
      shuffle = state.shuffle,
      playbackRate = state.playbackRate,
      duration = state.duration,
      __playlist__ = state.__playlist__;
  return _ref = {}, _ref[versionKey] = migrations.length, _ref[veryLongKey] = {
    paused: paused,
    // currentTime can't be restored for unbounded live streams
    currentTime: duration === Infinity ? 0 : currentTime,
    activeTrackIndex: activeTrackIndex,
    volume: volume,
    muted: muted,
    loop: loop,
    cycle: cycle,
    shuffle: shuffle,
    playbackRate: playbackRate,
    activeTrackSrc: utils_isPlaylistValid(__playlist__) ? utils_getTrackSources(__playlist__, activeTrackIndex)[0].src : null
  }, _ref;
}
function restoreStateFromSnapshot(snapshot, props) {
  var migratedSnapshot = migrations.slice(snapshot[versionKey] || 0).reduce(function (oldSnapshot, migration) {
    return migration(oldSnapshot);
  }, snapshot);
  var _migratedSnapshot$ver = migratedSnapshot[veryLongKey],
      paused = _migratedSnapshot$ver.paused,
      currentTime = _migratedSnapshot$ver.currentTime,
      activeTrackIndex = _migratedSnapshot$ver.activeTrackIndex,
      volume = _migratedSnapshot$ver.volume,
      muted = _migratedSnapshot$ver.muted,
      loop = _migratedSnapshot$ver.loop,
      cycle = _migratedSnapshot$ver.cycle,
      shuffle = _migratedSnapshot$ver.shuffle,
      playbackRate = _migratedSnapshot$ver.playbackRate,
      activeTrackSrc = _migratedSnapshot$ver.activeTrackSrc;
  var restoredStateValues = {};

  if (utils_isPlaylistValid(props.playlist) && typeof paused === 'boolean') {
    // using awaitingPlay instead of paused triggers an animation
    restoredStateValues.awaitingPlay = !paused;
  }

  if (typeof volume === 'number' && volume >= 0 && volume <= 1) {
    restoredStateValues.volume = volume;
  }

  if (typeof muted === 'boolean') {
    restoredStateValues.muted = muted;
  }

  if (typeof loop === 'boolean') {
    restoredStateValues.loop = loop;
  }

  if (typeof cycle === 'boolean') {
    restoredStateValues.cycle = cycle;
  }

  if (typeof shuffle === 'boolean') {
    restoredStateValues.shuffle = shuffle;
  }

  if (typeof playbackRate === 'number') {
    restoredStateValues.playbackRate = playbackRate;
  }

  var useCurrentTime = false;

  if (typeof activeTrackSrc === 'string' && typeof activeTrackIndex === 'number' && activeTrackIndex >= 0) {
    // let's try staying on the same track index
    var currentSrc = props.playlist[activeTrackIndex] && utils_getTrackSources(props.playlist, activeTrackIndex)[0].src;

    if (currentSrc && activeTrackSrc === currentSrc) {
      restoredStateValues.activeTrackIndex = activeTrackIndex;
      useCurrentTime = true;
    } else {
      /* if the track we were playing before is in the new playlist,
       * update the activeTrackIndex.
       */
      var newTrackIndex = utils_findTrackIndexByUrl(props.playlist, activeTrackSrc);

      if (newTrackIndex !== -1) {
        restoredStateValues.activeTrackIndex = newTrackIndex;
        useCurrentTime = true;
      }
    }
  }

  if (useCurrentTime && typeof currentTime === 'number' && currentTime >= 0) {
    restoredStateValues.currentTime = currentTime;
  }

  return restoredStateValues;
}
// CONCATENATED MODULE: ./src/utils/getSourceList.js
 // collapses playlist into flat list containing
// the first source url for each track

function getSourceList(playlist) {
  return (playlist || []).map(function (_, i) {
    return utils_getTrackSources(playlist, i)[0].src;
  });
}

/* harmony default export */ var utils_getSourceList = (getSourceList);
// CONCATENATED MODULE: ./src/utils/getTimeRangesArray.js
function getTimeRangesArray(timeRangesObj) {
  var timeRangesArray = Array(timeRangesObj.length);

  for (var i = 0; i < timeRangesObj.length; i++) {
    timeRangesArray[i] = {
      start: timeRangesObj.start(i),
      end: timeRangesObj.end(i)
    };
  }

  return timeRangesArray;
}

/* harmony default export */ var utils_getTimeRangesArray = (getTimeRangesArray);
// CONCATENATED MODULE: ./src/utils/getRepeatStrategy.js
function getRepeatStrategy(loop, cycle) {
  if (loop) {
    return 'track';
  }

  if (cycle) {
    return 'playlist';
  }

  return 'none';
}

/* harmony default export */ var utils_getRepeatStrategy = (getRepeatStrategy);
// CONCATENATED MODULE: ./src/utils/convertToNumberWithinIntervalBounds.js
function convertToNumberWithinIntervalBounds(number, min, max) {
  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;
  return Math.max(min, Math.min(number, max));
}

/* harmony default export */ var utils_convertToNumberWithinIntervalBounds = (convertToNumberWithinIntervalBounds);
// CONCATENATED MODULE: ./src/utils/getDisplayText.js
function getDisplayText(track) {
  if (!track) {
    return '';
  }

  if (track.displayText) {
    // TODO: Remove this check when support for the displayText prop is gone.
    return track.displayText;
  }

  if (track.title && track.artist) {
    return track.artist + " - " + track.title;
  }

  return track.title || track.artist || track.album || '';
}

/* harmony default export */ var utils_getDisplayText = (getDisplayText);
// CONCATENATED MODULE: ./src/utils/parseTimeString.js
function parseTimeString(str) {
  var seconds = 0;
  var factor = 1;
  var times = str.split(':').slice(-3);

  while (times.length > 0) {
    seconds += factor * parseInt(times.pop(), 10);
    factor *= 60;
  }

  return seconds;
}

/* harmony default export */ var utils_parseTimeString = (parseTimeString);
// CONCATENATED MODULE: ./src/utils/getInitialDuration.js


function getInitialDuration(track) {
  var duration = 0;

  if (track.duration) {
    if (typeof track.duration === 'string') {
      duration = utils_parseTimeString(track.duration);
    } else {
      duration = track.duration;
    }
  }

  return duration;
}

/* harmony default export */ var utils_getInitialDuration = (getInitialDuration);
// CONCATENATED MODULE: ./src/PlayerContextProvider.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PlayerContextProvider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlayerContextProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PlayerContextProvider_defineProperty(target, key, source[key]); }); } return target; }

function PlayerContextProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






















function playErrorHandler(err) {
  Object(console["a" /* logError */])(err);

  if (err.name === 'NotAllowedError') {
    var warningMessage = 'Media playback failed at ' + new Date().toLocaleTimeString() + '! (Perhaps autoplay is disabled in this browser.)';
    Object(console["b" /* logWarning */])(warningMessage);
  }
} // Existing Media Session API implementations have default handlers
// for play/pause, and may yield unexpected behavior if custom
// play/pause handlers are defined - so let's leave them be.


var supportableMediaSessionActions = ['previoustrack', 'nexttrack', 'seekbackward', 'seekforward'];
var defaultState = {
  // indicates whether media player should be paused
  paused: true,
  // elapsed time for active track, in seconds
  currentTime: 0,
  // The most recent targeted time, in seconds, for seek preview
  seekPreviewTime: 0,

  /* true if the user is currently dragging the mouse
   * to seek a new track position
   */
  seekInProgress: false,

  /* true if media was playing when seek previewing began,
   * it was paused, and it should be resumed on seek
   * complete
   */
  awaitingResumeOnSeekComplete: false,
  // true if media will play once new track has loaded
  awaitingPlayAfterTrackLoad: false,
  // the duration in seconds of the loaded track
  duration: 0,
  // array describing the buffered ranges in the loaded track
  bufferedRanges: [],
  // array describing the already-played ranges in the loaded track
  playedRanges: [],
  // array describing the seekable ranges in the loaded track
  seekableRanges: [],
  // true if the media is currently stalled pending data buffering
  stalled: false,
  // true if the active track should play on the next componentDidUpdate
  shouldRequestPlayOnNextUpdate: false,

  /* true if an error occurs while fetching the active track media data
   * or if its type is not a supported media format
   */
  mediaCannotPlay: false,
  // maximum currentTime since the current track has been playing
  maxKnownTime: 0
}; // assumes playlist is valid

function getGoToTrackState(_ref) {
  var prevState = _ref.prevState,
      index = _ref.index,
      track = _ref.track,
      _ref$shouldPlay = _ref.shouldPlay,
      shouldPlay = _ref$shouldPlay === void 0 ? true : _ref$shouldPlay,
      _ref$shouldForceLoad = _ref.shouldForceLoad,
      shouldForceLoad = _ref$shouldForceLoad === void 0 ? false : _ref$shouldForceLoad;
  var isNewTrack = prevState.activeTrackIndex !== index;
  var shouldLoadAsNew = Boolean(isNewTrack || shouldForceLoad);
  var currentTime = track.startingTime || 0;
  return {
    duration: utils_getInitialDuration(track),
    activeTrackIndex: index,
    trackLoading: shouldLoadAsNew,
    mediaCannotPlay: prevState.mediaCannotPlay && !shouldLoadAsNew,
    currentTime: utils_convertToNumberWithinIntervalBounds(currentTime, 0),
    loop: shouldLoadAsNew ? false : prevState.loop,
    shouldRequestPlayOnNextUpdate: Boolean(shouldPlay),
    awaitingPlayAfterTrackLoad: Boolean(shouldPlay),
    awaitingForceLoad: Boolean(shouldForceLoad),
    maxKnownTime: shouldLoadAsNew ? 0 : prevState.maxKnownTime
  };
}
/**
 * Wraps an area which shares a common [`playerContext`](#playercontext)
 */


var PlayerContextProvider_PlayerContextProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PlayerContextProvider, _Component);

  function PlayerContextProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var currentTime = 0;
    var activeTrackIndex = utils_convertToNumberWithinIntervalBounds(props.startingTrackIndex, 0);
    var playlistIsValid = utils_isPlaylistValid(props.playlist);

    if (playlistIsValid && props.playlist[activeTrackIndex]) {
      currentTime = props.playlist[activeTrackIndex].startingTime || 0;
    }

    var initialStateSnapshot = props.initialStateSnapshot;
    var restoredStateFromSnapshot = {};

    if (initialStateSnapshot) {
      try {
        restoredStateFromSnapshot = restoreStateFromSnapshot(initialStateSnapshot, props);
      } catch (err) {
        Object(console["b" /* logWarning */])(err);
        Object(console["b" /* logWarning */])('Loading Cassette state from snapshot failed.');
        Object(console["b" /* logWarning */])("Failed snapshot:\n" + JSON.stringify(initialStateSnapshot, null, 2));
      }
    }

    _this.state = PlayerContextProvider_objectSpread({}, defaultState, {
      // index matching requested track (whether track has loaded or not)
      activeTrackIndex: activeTrackIndex,
      // whether we're waiting on loading metadata for the active track
      trackLoading: utils_isPlaylistValid(props.playlist),
      // the current timestamp on the active track in seconds
      currentTime: utils_convertToNumberWithinIntervalBounds(currentTime, 0),
      // the latest volume of the media, between 0 and 1.
      volume: utils_convertToNumberWithinIntervalBounds(props.defaultVolume, 0, 1),
      // true if the media has been muted
      muted: props.defaultMuted,
      // whether to loop the active track
      loop: props.defaultRepeatStrategy === 'track',
      // true if playlist should continue at start after completion
      cycle: props.defaultRepeatStrategy === 'playlist',
      // whether to randomly pick next track from playlist after one finishes
      shuffle: props.defaultShuffle,
      // Rate at which media should be played. 1.0 is normal speed.
      playbackRate: props.defaultPlaybackRate,
      // true if user is currently dragging mouse to change the volume
      setVolumeInProgress: false,
      // initialize shouldRequestPlayOnNextUpdate from autoplay prop
      shouldRequestPlayOnNextUpdate: props.autoplay && playlistIsValid,
      awaitingForceLoad: false,
      // duration might be set on track object
      duration: utils_getInitialDuration(playlistIsValid && props.playlist[activeTrackIndex]),
      // playlist prop copied to state (for getDerivedStateFromProps)
      __playlist__: props.playlist
    }, restoredStateFromSnapshot); // volume at last time we were unmuted and not actively setting volume

    _this.lastStableVolume = _this.state.volume; // used to keep track of play history when we are shuffling

    _this.shuffler = new utils_ShuffleManager(utils_getSourceList(props.playlist), {
      allowBackShuffle: props.allowBackShuffle
    }); // html media element used for playback

    _this.media = null;
    _this.videoHostElementList = [];
    _this.videoHostOccupiedCallbacks = new Map();
    _this.videoHostVacatedCallbacks = new Map(); // bind internal methods

    _this.handleTrackPlaybackFailure = _this.handleTrackPlaybackFailure.bind(_assertThisInitialized(_assertThisInitialized(_this))); // bind callback methods to pass to descendant elements

    _this.togglePause = _this.togglePause.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.selectTrackIndex = _this.selectTrackIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.forwardSkip = _this.forwardSkip.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.backSkip = _this.backSkip.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.seekPreview = _this.seekPreview.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.seekComplete = _this.seekComplete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setVolume = _this.setVolume.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setVolumeComplete = _this.setVolumeComplete.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleMuted = _this.toggleMuted.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleShuffle = _this.toggleShuffle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setRepeatStrategy = _this.setRepeatStrategy.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setPlaybackRate = _this.setPlaybackRate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.registerVideoHostElement = _this.registerVideoHostElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderVideoIntoHostElement = _this.renderVideoIntoHostElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.unregisterVideoHostElement = _this.unregisterVideoHostElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateVideoHostElement = _this.updateVideoHostElement.bind(_assertThisInitialized(_assertThisInitialized(_this))); // bind media event handlers

    _this.handleMediaPlay = _this.handleMediaPlay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaPause = _this.handleMediaPause.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaSrcrequest = _this.handleMediaSrcrequest.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaEnded = _this.handleMediaEnded.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaEmptied = _this.handleMediaEmptied.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaStalled = _this.handleMediaStalled.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaCanplaythrough = _this.handleMediaCanplaythrough.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaCanplay = _this.handleMediaCanplay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaTimeupdate = _this.handleMediaTimeupdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaLoadeddata = _this.handleMediaLoadeddata.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaVolumechange = _this.handleMediaVolumechange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaDurationchange = _this.handleMediaDurationchange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaProgress = _this.handleMediaProgress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaLoopchange = _this.handleMediaLoopchange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMediaRatechange = _this.handleMediaRatechange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = PlayerContextProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var media = this.media = factories_createCustomMediaElement(this.props.createMediaElement());
    var _this$props = this.props,
        defaultPlaybackRate = _this$props.defaultPlaybackRate,
        crossOrigin = _this$props.crossOrigin,
        playlist = _this$props.playlist,
        autoplayDelayInSeconds = _this$props.autoplayDelayInSeconds,
        mediaElementRef = _this$props.mediaElementRef,
        getPosterImageForTrack = _this$props.getPosterImageForTrack,
        getMediaTitleAttributeForTrack = _this$props.getMediaTitleAttributeForTrack,
        onActiveTrackUpdate = _this$props.onActiveTrackUpdate;
    var _this$state = this.state,
        volume = _this$state.volume,
        muted = _this$state.muted,
        playbackRate = _this$state.playbackRate,
        loop = _this$state.loop,
        activeTrackIndex = _this$state.activeTrackIndex,
        shouldRequestPlayOnNextUpdate = _this$state.shouldRequestPlayOnNextUpdate; // initialize media properties
    // We used to set currentTime here.. now waiting for loadeddata.
    // This avoids an issue where some browsers ignore or delay currentTime
    // updates when in the HAVE_NOTHING state.

    media.defaultPlaybackRate = defaultPlaybackRate;

    if (crossOrigin) {
      media.crossOrigin = crossOrigin;
    }

    media.volume = volume;
    media.muted = muted;
    media.playbackRate = playbackRate;
    media.loop = loop;
    media.setAttribute('playsinline', '');
    media.setAttribute('webkit-playsinline', '');
    media.setAttribute('preload', 'metadata');
    media.setAttribute('poster', getPosterImageForTrack(playlist[activeTrackIndex]));
    media.setAttribute('title', getMediaTitleAttributeForTrack(playlist[activeTrackIndex])); // add listeners for media events

    media.addEventListener('play', this.handleMediaPlay);
    media.addEventListener('pause', this.handleMediaPause);
    media.addEventListener('ended', this.handleMediaEnded);
    media.addEventListener('stalled', this.handleMediaStalled);
    media.addEventListener('emptied', this.handleMediaEmptied);
    media.addEventListener('canplay', this.handleMediaCanplay);
    media.addEventListener('canplaythrough', this.handleMediaCanplaythrough);
    media.addEventListener('timeupdate', this.handleMediaTimeupdate);
    media.addEventListener('loadeddata', this.handleMediaLoadeddata);
    media.addEventListener('volumechange', this.handleMediaVolumechange);
    media.addEventListener('durationchange', this.handleMediaDurationchange);
    media.addEventListener('progress', this.handleMediaProgress);
    media.addEventListener('ratechange', this.handleMediaRatechange); // add listeners for special events

    media.addEventListener('srcrequest', this.handleMediaSrcrequest);
    media.addEventListener('loopchange', this.handleMediaLoopchange); // set source elements for current track

    this.setMediaElementSources(); // initially mount media element in the hidden container (this may change)

    this.mediaContainer.appendChild(media);

    if (shouldRequestPlayOnNextUpdate) {
      this.setState({
        shouldRequestPlayOnNextUpdate: false
      });
      this.delayTimeout = setTimeout(function () {
        _this2.togglePause(false);
      }, autoplayDelayInSeconds * 1000);
    }

    if (mediaElementRef) {
      mediaElementRef(media);
    }

    if (onActiveTrackUpdate) {
      onActiveTrackUpdate({
        track: playlist[activeTrackIndex],
        trackIndex: activeTrackIndex,
        previousTrack: null,
        previousTrackIndex: null
      });
    }
  };

  PlayerContextProvider.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newPlaylist = nextProps.playlist;

    if (newPlaylist === prevState.__playlist__) {
      // reference comparison is equal so we'll
      // assume the playlist is unchanged.
      return null;
    }

    var baseNewState = {
      __playlist__: newPlaylist
    }; // check if the new playlist is invalid

    if (!utils_isPlaylistValid(newPlaylist)) {
      return PlayerContextProvider_objectSpread({}, defaultState, baseNewState, {
        activeTrackIndex: 0,
        trackLoading: false
      });
    } // check if the activeTrackIndex doesn't need to be updated


    var prevSources = utils_getTrackSources(prevState.__playlist__, prevState.activeTrackIndex);

    if (newPlaylist[prevState.activeTrackIndex]) {
      // the sources if we stay on the same track index
      var currentSources = utils_getTrackSources(newPlaylist, prevState.activeTrackIndex); // non-comprehensive but probably accurate check

      if (prevSources[0].src === currentSources[0].src) {
        // our active track index already matches
        return baseNewState;
      }
    }
    /* if the track we're already playing is in the new playlist, update the
     * activeTrackIndex.
     */


    var newTrackIndex = utils_findTrackIndexByUrl(newPlaylist, prevSources[0].src);

    if (newTrackIndex !== -1) {
      return PlayerContextProvider_objectSpread({}, baseNewState, {
        activeTrackIndex: newTrackIndex
      });
    } // if not, then load the first track in the new playlist, and pause.


    return PlayerContextProvider_objectSpread({}, baseNewState, getGoToTrackState({
      prevState: prevState,
      track: newPlaylist[0],
      index: 0,
      shouldPlay: false,
      shouldForceLoad: true
    }), {
      mediaCannotPlay: false,
      awaitingPlayAfterTrackLoad: false
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this3 = this;

    this.media.defaultPlaybackRate = this.props.defaultPlaybackRate;
    this.media.crossOrigin = this.props.crossOrigin;
    this.shuffler.setList(utils_getSourceList(this.props.playlist));
    this.shuffler.setOptions({
      allowBackShuffle: this.props.allowBackShuffle
    });
    var prevSources = utils_getTrackSources(prevProps.playlist, prevState.activeTrackIndex);
    var newSources = utils_getTrackSources(this.props.playlist, this.state.activeTrackIndex);
    var prevTrack = prevProps.playlist[prevState.activeTrackIndex];
    var newTrack = this.props.playlist[this.state.activeTrackIndex];

    if (this.state.awaitingForceLoad || prevSources[0].src !== newSources[0].src) {
      this.setMediaElementSources();
      this.media.setAttribute('poster', this.props.getPosterImageForTrack(newTrack));
      this.media.setAttribute('title', this.props.getMediaTitleAttributeForTrack(newTrack));
      this.setState({
        awaitingForceLoad: false
      });

      if (!this.state.shuffle) {
        // after toggling off shuffle, we defer clearing the shuffle
        // history until we actually change tracks - if the user quickly
        // toggles  shuffle off then back on again, we don't want to have
        // lost our history.
        this.shuffler.clear();
      }
    }

    if (this.props.onActiveTrackUpdate && prevTrack !== newTrack) {
      this.props.onActiveTrackUpdate({
        track: newTrack,
        trackIndex: this.state.activeTrackIndex,
        previousTrack: prevTrack,
        previousTrackIndex: prevState.activeTrackIndex
      });
    }

    if (prevProps !== this.props && !this.media.paused) {
      // update running media session based on new props
      this.stealMediaSession();
    }

    if (this.state.shouldRequestPlayOnNextUpdate) {
      this.setState({
        shouldRequestPlayOnNextUpdate: false
      }); // media.currentSrc is updated asynchronously so we should
      // play async to avoid weird intermediate state issues

      setTimeout(function () {
        _this3.togglePause(false);
      });
    }

    clearTimeout(this.snapshotUpdateTimeout);
    this.snapshotUpdateTimeout = setTimeout(function () {
      if (_this3.props.onStateSnapshot) {
        _this3.props.onStateSnapshot(getStateSnapshot(_this3.state));
      }
    }, 100);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var media = this.media; // Media element creation will have failed if MutationObserver isn't
    // supported by the browser. The parent might use an Error Boundary
    // to display a fallback and so we try to avoid triggering *additional*
    // errors while the component unmounts.

    if (media) {
      // remove listeners for media events
      media.removeEventListener('play', this.handleMediaPlay);
      media.removeEventListener('pause', this.handleMediaPause);
      media.removeEventListener('ended', this.handleMediaEnded);
      media.removeEventListener('stalled', this.handleMediaStalled);
      media.removeEventListener('emptied', this.handleMediaEmptied);
      media.removeEventListener('canplaythrough', this.handleMediaCanplaythrough);
      media.removeEventListener('canplay', this.handleMediaCanplay);
      media.removeEventListener('timeupdate', this.handleMediaTimeupdate);
      media.removeEventListener('loadeddata', this.handleMediaLoadeddata);
      media.removeEventListener('volumechange', this.handleMediaVolumechange);
      media.removeEventListener('durationchange', this.handleMediaDurationchange);
      media.removeEventListener('progress', this.handleMediaProgress);
      media.removeEventListener('ratechange', this.handleMediaRatechange); // remove special event listeners on the media element

      media.removeEventListener('srcrequest', this.handleMediaSrcrequest);
      media.removeEventListener('loopchange', this.handleMediaLoopchange);
      var sourceElements = media.querySelectorAll('source');

      for (var _iterator = sourceElements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var sourceElement = _ref2;
        sourceElement.removeEventListener('error', this.handleTrackPlaybackFailure);
      }
    }

    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);
  };

  _proto.stealMediaSession = function stealMediaSession() {
    var _this4 = this;

    if ( // eslint-disable-next-line no-undef
    !(window.MediaSession && navigator.mediaSession instanceof MediaSession)) {
      return;
    } // eslint-disable-next-line no-undef


    navigator.mediaSession.metadata = new MediaMetadata(this.props.playlist[this.state.activeTrackIndex]);
    supportableMediaSessionActions.map(function (action) {
      if (_this4.props.supportedMediaSessionActions.indexOf(action) === -1) {
        return null;
      }

      var seekLength = _this4.props.mediaSessionSeekLengthInSeconds;

      switch (action) {
        case 'play':
          return _this4.togglePause.bind(_this4, false);

        case 'pause':
          return _this4.togglePause.bind(_this4, true);

        case 'previoustrack':
          return _this4.backSkip;

        case 'nexttrack':
          return _this4.forwardSkip;

        case 'seekbackward':
          return function () {
            return _this4.media.currentTime -= seekLength;
          };

        case 'seekforward':
          return function () {
            return _this4.media.currentTime += seekLength;
          };

        default:
          return undefined;
      }
    }).forEach(function (handler, i) {
      navigator.mediaSession.setActionHandler(supportableMediaSessionActions[i], handler);
    });
  };

  _proto.setMediaElementSources = function setMediaElementSources() {
    // remove current sources
    var playlist = this.props.playlist;
    var firstChild;

    while (firstChild = this.media.firstChild) {
      this.media.removeChild(firstChild);
    }

    if (utils_isPlaylistValid(playlist)) {
      var sources = utils_getTrackSources(playlist, this.state.activeTrackIndex); // add new sources

      for (var _iterator2 = sources, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref3 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref3 = _i2.value;
        }

        var source = _ref3;
        var sourceElement = document.createElement('source');
        sourceElement.src = source.src;

        if (source.type) {
          sourceElement.type = source.type;
        }

        sourceElement.addEventListener('error', this.handleTrackPlaybackFailure);
        this.media.appendChild(sourceElement);
      }
    } // cancel playback and re-scan new sources


    this.media.load();
  };

  _proto.handleTrackPlaybackFailure = function handleTrackPlaybackFailure(event) {
    this.setState({
      mediaCannotPlay: true
    });

    if (this.props.onTrackPlaybackFailure) {
      this.props.onTrackPlaybackFailure({
        track: this.props.playlist[this.state.activeTrackIndex],
        trackIndex: this.state.activeTrackIndex,
        event: event
      });
    }
  };

  _proto.registerVideoHostElement = function registerVideoHostElement(hostElement, _ref4) {
    var onHostOccupied = _ref4.onHostOccupied,
        onHostVacated = _ref4.onHostVacated;
    this.videoHostElementList = this.videoHostElementList.concat(hostElement);
    this.videoHostOccupiedCallbacks.set(hostElement, onHostOccupied);
    this.videoHostVacatedCallbacks.set(hostElement, onHostVacated);
  };

  _proto.renderVideoIntoHostElement = function renderVideoIntoHostElement(hostElement) {
    var _this5 = this;

    if (this.videoHostElementList.indexOf(hostElement) === -1) {
      return;
    }

    cancelAnimationFrame(this.videoHostUpdateRaf);
    this.videoHostUpdateRaf = requestAnimationFrame(function () {
      return _this5.updateVideoHostElement(hostElement);
    });
  };

  _proto.unregisterVideoHostElement = function unregisterVideoHostElement(hostElement) {
    this.videoHostElementList = this.videoHostElementList.filter(function (elem) {
      return elem !== hostElement;
    });
    this.videoHostOccupiedCallbacks.delete(hostElement);
    this.videoHostVacatedCallbacks.delete(hostElement);

    if (this.media.parentNode === hostElement) {
      this.updateVideoHostElement();
    }
  };

  _proto.updateVideoHostElement = function updateVideoHostElement(hostElement) {
    if (!hostElement) {
      hostElement = this.videoHostElementList[0] || this.mediaContainer;
    } else {
      // move hostElement to front of list
      this.videoHostElementList = [hostElement].concat(this.videoHostElementList.filter(function (elem) {
        return elem !== hostElement;
      }));
    }

    var playing = !this.media.paused;
    var oldHostElement = this.media.parentNode;

    if (hostElement === oldHostElement) {
      return;
    }

    hostElement.appendChild(this.media); // according to the HTML spec playback should continue, but
    // some browsers pause the element whenever it is moved around, so
    // let's make sure playback resumes if that's the case.

    if (playing && this.media.paused) {
      this.media.play();
    }

    var onVacated = this.videoHostVacatedCallbacks.get(oldHostElement);

    if (onVacated) {
      onVacated(this.media);
    }

    var onOccupied = this.videoHostOccupiedCallbacks.get(hostElement);

    if (onOccupied) {
      onOccupied(this.media);
    }
  };

  _proto.handleMediaPlay = function handleMediaPlay() {
    this.setState(function (state) {
      return state.paused === false && state.awaitingPlayAfterTrackLoad === false ? null : {
        paused: false,
        awaitingPlayAfterTrackLoad: false
      };
    });
    this.stealMediaSession();
  };

  _proto.handleMediaPause = function handleMediaPause() {
    this.setState(function (state) {
      return state.paused === true ? null : {
        paused: true
      };
    });
  };

  _proto.handleMediaSrcrequest = function handleMediaSrcrequest(e) {
    var playlist = this.props.playlist;
    var sources = utils_getTrackSources(playlist, this.state.activeTrackIndex);

    if (array_find_index_default()(sources, function (s) {
      return s.src === e.srcRequested;
    }) !== -1) {
      // we're good! nothing to update.
      return;
    } // looks like 'src' was set from outside our component.
    // let's see if we can use it.


    var newTrackIndex = utils_findTrackIndexByUrl(playlist, e.srcRequested);

    if (newTrackIndex === -1) {
      Object(console["a" /* logError */])("Source '" + e.srcRequested + "' does not exist in the loaded playlist. " + "Make sure you've updated the 'playlist' prop to " + "PlayerContextProvider before you select this track!");
      return;
    }

    this.selectTrackIndex(newTrackIndex);
  };

  _proto.handleMediaEnded = function handleMediaEnded() {
    if (this.state.seekInProgress) {
      // nothing to do if we're in the middle of a seek
      // (this can happen if we're in seekMode: immediate)
      return;
    }

    clearTimeout(this.gapLengthTimeout);
    var _this$props2 = this.props,
        playlist = _this$props2.playlist,
        loadFirstTrackOnPlaylistComplete = _this$props2.loadFirstTrackOnPlaylistComplete;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    var _this$state2 = this.state,
        cycle = _this$state2.cycle,
        activeTrackIndex = _this$state2.activeTrackIndex;

    if (!cycle && activeTrackIndex + 1 >= playlist.length) {
      if (loadFirstTrackOnPlaylistComplete) {
        this.goToTrack({
          index: 0,
          track: playlist[0],
          shouldPlay: false,
          shouldForceLoad: true
        });
      }

      return;
    }

    this.gapLengthTimeout = setTimeout(this.forwardSkip, this.props.gapLengthInSeconds * 1000);
  };

  _proto.handleMediaStalled = function handleMediaStalled() {
    this.setState(function (state) {
      return state.stalled === true ? null : {
        stalled: true
      };
    });
  };

  _proto.handleMediaEmptied = function handleMediaEmptied() {
    this.setState(function (state) {
      return state.paused === true ? null : {
        paused: true
      };
    });
  };

  _proto.handleMediaCanplay = function handleMediaCanplay() {
    this.setState(function (state) {
      return state.trackLoading === false ? null : {
        trackLoading: false
      };
    });
  };

  _proto.handleMediaCanplaythrough = function handleMediaCanplaythrough() {
    this.setState(function (state) {
      return state.stalled === false ? null : {
        stalled: false
      };
    });
  };

  _proto.handleMediaTimeupdate = function handleMediaTimeupdate() {
    var _this$media = this.media,
        currentTime = _this$media.currentTime,
        played = _this$media.played;
    var _this$props3 = this.props,
        onTimeUpdate = _this$props3.onTimeUpdate,
        playlist = _this$props3.playlist;
    var _this$state3 = this.state,
        activeTrackIndex = _this$state3.activeTrackIndex,
        trackLoading = _this$state3.trackLoading;

    if (trackLoading) {
      // we'll get another time update when the track loads
      // but for now this helps us avoid unnecessarily
      // jumping back to currentTime: 0 in the UI while
      // the track is loading.
      return;
    }

    this.setState(function (state) {
      return {
        currentTime: currentTime,
        playedRanges: utils_getTimeRangesArray(played),
        maxKnownTime: Math.max(state.maxKnownTime, currentTime)
      };
    });

    if (onTimeUpdate) {
      onTimeUpdate({
        currentTime: currentTime,
        track: playlist[activeTrackIndex],
        trackIndex: activeTrackIndex
      });
    }
  };

  _proto.handleMediaLoadeddata = function handleMediaLoadeddata() {
    if (this.media.currentTime !== this.state.currentTime) {
      this.media.currentTime = this.state.currentTime;
    }
  };

  _proto.handleMediaVolumechange = function handleMediaVolumechange() {
    var _this$media2 = this.media,
        volume = _this$media2.volume,
        muted = _this$media2.muted;
    this.setState({
      volume: volume,
      muted: muted
    });
  };

  _proto.handleMediaDurationchange = function handleMediaDurationchange() {
    var _this6 = this;

    var duration = this.media.duration;
    var activeTrack = this.props.playlist[this.state.activeTrackIndex];

    if (duration === Infinity) {
      // This *could* be because we're consuming an unbounded stream.
      // It could also be because of a weird iOS bug that we want to
      // try to prevent. See https://github.com/benwiley4000/cassette/issues/355
      // If we still end up with Infinity duration multiple times for
      // the same track, we'll assume it's correct.
      if (activeTrack.isUnboundedStream || activeTrack === this.activeTrackAtLastDurationChange) {
        this.setState({
          duration: duration,
          currentTime: 0
        });
        this.media.currentTime = 0;
      } else {
        var paused = this.state.paused;
        this.media.load();

        if (!paused) {
          // media.currentSrc is updated asynchronously so we should
          // play async to avoid weird intermediate state issues
          setTimeout(function () {
            _this6.togglePause(false);
          });
        }
      }
    } else {
      this.setState({
        duration: duration
      });
    }

    this.activeTrackAtLastDurationChange = activeTrack;
  };

  _proto.handleMediaProgress = function handleMediaProgress() {
    this.setState({
      bufferedRanges: utils_getTimeRangesArray(this.media.buffered),
      seekableRanges: utils_getTimeRangesArray(this.media.seekable)
    });
  };

  _proto.handleMediaLoopchange = function handleMediaLoopchange() {
    var loop = this.media.loop;
    this.setState(function (state) {
      return state.loop === loop ? null : {
        loop: loop
      };
    });
  };

  _proto.handleMediaRatechange = function handleMediaRatechange() {
    var playbackRate = this.media.playbackRate;
    this.setState(function (state) {
      return state.playbackRate === playbackRate ? null : {
        playbackRate: playbackRate
      };
    });
  };

  _proto.togglePause = function togglePause(value) {
    clearTimeout(this.delayTimeout);
    var pause = typeof value === 'boolean' ? value : !this.state.paused;

    if (pause) {
      this.media.pause();
      return;
    }

    if (!this.media.currentSrc) {
      return;
    }

    try {
      var playPromise = this.media.play();

      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function (err) {
          // AbortError is pretty much always called because we're skipping
          // tracks quickly or hitting pause before a track has a chance to
          // play. It's pretty safe to just ignore these error messages.
          if (err.name !== 'AbortError') {
            return Promise.reject(err);
          }
        }).catch(playErrorHandler);
      }
    } catch (err) {
      playErrorHandler(err);
    }
  } // assumes playlist is valid - don't call without checking
  ;

  _proto.goToTrack = function goToTrack(args) {
    clearTimeout(this.delayTimeout);
    this.setState(function (prevState) {
      return getGoToTrackState(PlayerContextProvider_objectSpread({
        prevState: prevState
      }, args));
    });
  };

  _proto.selectTrackIndex = function selectTrackIndex(index) {
    var playlist = this.props.playlist;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    if (index < 0 || index > playlist.length) {
      Object(console["b" /* logWarning */])("Playlist index " + index + " is out of bounds!");
      return;
    }

    if (this.state.shuffle) {
      this.shuffler.pickNextItem(index, this.state.activeTrackIndex);
    }

    this.goToTrack({
      index: index,
      track: playlist[index]
    });
  };

  _proto.backSkip = function backSkip() {
    var _this$props4 = this.props,
        playlist = _this$props4.playlist,
        stayOnBackSkipThreshold = _this$props4.stayOnBackSkipThreshold;
    var media = this.media;
    var _this$state4 = this.state,
        cycle = _this$state4.cycle,
        activeTrackIndex = _this$state4.activeTrackIndex,
        shuffle = _this$state4.shuffle;

    if (!utils_isPlaylistValid(playlist) || media.currentTime >= stayOnBackSkipThreshold || !cycle && activeTrackIndex < 1) {
      media.currentTime = 0;
      return;
    }

    var index;

    if (shuffle) {
      var previousItem = this.shuffler.findPreviousItem(activeTrackIndex);

      if (previousItem === undefined) {
        // if we aren't allowing backShuffle then we'll hit a stopping point.
        media.currentTime = 0;
        return;
      }

      index = utils_findTrackIndexByUrl(playlist, previousItem);
    } else {
      index = activeTrackIndex - 1;

      if (index < 0) {
        index = playlist.length - 1;
      }
    }

    this.goToTrack({
      index: index,
      track: playlist[index],
      shouldForceLoad: true
    });
  };

  _proto.forwardSkip = function forwardSkip() {
    var playlist = this.props.playlist;
    var _this$state5 = this.state,
        cycle = _this$state5.cycle,
        activeTrackIndex = _this$state5.activeTrackIndex,
        shuffle = _this$state5.shuffle;

    if (!utils_isPlaylistValid(playlist) || !cycle && activeTrackIndex + 1 >= playlist.length) {
      return;
    }

    var index;

    if (shuffle) {
      index = utils_findTrackIndexByUrl(playlist, this.shuffler.findNextItem(activeTrackIndex));
    } else {
      index = activeTrackIndex + 1;

      if (index >= playlist.length) {
        index = 0;
      }
    }

    this.goToTrack({
      index: index,
      track: playlist[index],
      shouldForceLoad: true
    });
  };

  _proto.seekPreview = function seekPreview(targetTime) {
    if (!utils_isPlaylistValid(this.props.playlist)) {
      return;
    }

    var baseStateUpdate = {
      seekPreviewTime: targetTime,
      seekInProgress: true
    };

    switch (this.props.seekMode) {
      case 'paused':
        this.setState(function (_ref5) {
          var paused = _ref5.paused,
              awaitingResumeOnSeekComplete = _ref5.awaitingResumeOnSeekComplete;
          return PlayerContextProvider_objectSpread({}, baseStateUpdate, {
            awaitingResumeOnSeekComplete: paused ? awaitingResumeOnSeekComplete : true,
            currentTime: targetTime
          });
        });

        if (!this.state.trackLoading) {
          this.media.currentTime = targetTime;
        }

        if (!this.state.paused) {
          this.togglePause(true);
        }

        break;

      case 'immediate':
        this.setState(function (_ref6) {
          var paused = _ref6.paused,
              awaitingResumeOnSeekComplete = _ref6.awaitingResumeOnSeekComplete;
          return PlayerContextProvider_objectSpread({}, baseStateUpdate, {
            awaitingResumeOnSeekComplete: paused ? awaitingResumeOnSeekComplete : true,
            currentTime: targetTime
          });
        });

        if (!this.state.trackLoading) {
          this.media.currentTime = targetTime;
        }

        if (this.state.awaitingResumeOnSeekComplete && !this.media.ended) {
          // if we earlier encountered an 'ended' state,
          // un-pausing becomes necessary to resume playback
          this.togglePause(false);
        }

        break;

      case 'onrelease':
        this.setState(baseStateUpdate);
        break;
    }
  };

  _proto.seekComplete = function seekComplete(targetTime) {
    var _this$state6 = this.state,
        seekPreviewTime = _this$state6.seekPreviewTime,
        awaitingResumeOnSeekComplete = _this$state6.awaitingResumeOnSeekComplete,
        trackLoading = _this$state6.trackLoading;
    var baseStateUpdate = {
      seekInProgress: false,
      awaitingResumeOnSeekComplete: false
    };
    var currentTime = typeof targetTime === 'number' ? targetTime : seekPreviewTime;

    if (isNaN(currentTime)) {
      this.setState(baseStateUpdate);
      return;
    }

    this.setState(PlayerContextProvider_objectSpread({}, baseStateUpdate, {
      /* we'll update currentTime on the media listener hook anyway,
       * but that might not happen for a bit... so the optimistic update
       * helps us avoid the progress bar jumping around and confusing the user.
       * https://github.com/benwiley4000/cassette/issues/209
       */
      currentTime: currentTime
    }));

    if (!trackLoading) {
      this.media.currentTime = currentTime;
    }

    if (awaitingResumeOnSeekComplete) {
      if (this.media.ended) {
        this.forwardSkip();
      } else {
        this.togglePause(false);
      }
    }
  };

  _proto.setVolume = function setVolume(volume, inProgress) {
    if (inProgress === void 0) {
      inProgress = true;
    }

    if (inProgress && !this.state.setVolumeInProgress) {
      this.setState({
        setVolumeInProgress: true
      });
    }

    var volumeInBounds = utils_convertToNumberWithinIntervalBounds(volume, 0, 1);
    this.media.muted = volumeInBounds === 0 ? true : false;
    this.media.volume = volumeInBounds;
  };

  _proto.setVolumeComplete = function setVolumeComplete(volume) {
    if (typeof volume === 'number') {
      this.setVolume(volume, false);
    }

    this.setState({
      setVolumeInProgress: false
    });

    if (!this.media.muted) {
      this.lastStableVolume = this.media.volume;
    }
  };

  _proto.toggleMuted = function toggleMuted(value) {
    var muted = typeof value === 'boolean' ? value : !this.state.muted;
    this.media.muted = muted;

    if (!muted) {
      this.media.volume = this.lastStableVolume;
    }
  };

  _proto.toggleShuffle = function toggleShuffle(value) {
    var shuffle = typeof value === 'boolean' ? value : !this.state.shuffle;
    this.setState({
      shuffle: shuffle
    });
  };

  _proto.setRepeatStrategy = function setRepeatStrategy(repeatStrategy) {
    if (repeatStrategyOptions.indexOf(repeatStrategy) === -1) {
      Object(console["b" /* logWarning */])('repeatStrategy "' + repeatStrategy + '" is not one of: ' + repeatStrategyOptions.split(', ') + '.');
      return;
    }

    switch (repeatStrategy) {
      case 'track':
        // state update is automatic
        this.media.loop = true;
        break;

      case 'playlist':
        this.setState({
          loop: false,
          cycle: true
        });
        this.media.loop = false;
        break;

      case 'none':
        this.setState({
          loop: false,
          cycle: false
        });
        this.media.loop = false;
        break;
    }
  };

  _proto.setPlaybackRate = function setPlaybackRate(rate) {
    this.media.playbackRate = rate;
  };

  _proto.getControlProps = function getControlProps() {
    var props = this.props,
        state = this.state;
    var playerContext = {
      playlist: props.playlist,
      activeTrackIndex: state.activeTrackIndex,
      trackLoading: state.trackLoading,
      paused: state.paused,
      currentTime: state.currentTime,
      seekPreviewTime: state.seekPreviewTime,
      seekInProgress: state.seekInProgress,
      awaitingPlayResume: state.awaitingResumeOnSeekComplete || state.awaitingPlayAfterTrackLoad,
      duration: state.duration === Infinity ? state.maxKnownTime : state.duration,
      bufferedRanges: state.bufferedRanges,
      playedRanges: state.playedRanges,
      seekableRanges: state.seekableRanges,
      volume: state.volume,
      muted: state.muted,
      shuffle: state.shuffle,
      stalled: state.stalled,
      playbackRate: state.playbackRate,
      mediaCannotPlay: state.mediaCannotPlay,
      setVolumeInProgress: state.setVolumeInProgress,
      repeatStrategy: utils_getRepeatStrategy(state.loop, state.cycle),
      registerVideoHostElement: this.registerVideoHostElement,
      renderVideoIntoHostElement: this.renderVideoIntoHostElement,
      unregisterVideoHostElement: this.unregisterVideoHostElement,
      onTogglePause: this.togglePause,
      onSelectTrackIndex: this.selectTrackIndex,
      onBackSkip: this.backSkip,
      onForwardSkip: this.forwardSkip,
      onSeekPreview: this.seekPreview,
      onSeekComplete: this.seekComplete,
      onSetVolume: this.setVolume,
      onSetVolumeComplete: this.setVolumeComplete,
      onToggleMuted: this.toggleMuted,
      onToggleShuffle: this.toggleShuffle,
      onSetRepeatStrategy: this.setRepeatStrategy,
      onSetPlaybackRate: this.setPlaybackRate
    };

    if (this.playerContext) {
      // only update this.playerContext if something has changed
      var _arr = Object.keys(this.playerContext);

      for (var _i3 = 0; _i3 < _arr.length; _i3++) {
        var key = _arr[_i3];

        if (playerContext[key] !== this.playerContext[key]) {
          this.playerContext = playerContext;
          break;
        }
      }
    } else {
      // first time - nothing to compare
      this.playerContext = playerContext;
    }

    return this.playerContext;
  };

  _proto.render = function render() {
    var _this7 = this;

    var playerContext = this.getControlProps();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: function ref(elem) {
        return _this7.mediaContainer = elem;
      },
      hidden: true
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Provider, {
      value: playerContext
    }, typeof this.props.children === 'function' ? this.props.children(playerContext) : this.props.children));
  };

  return PlayerContextProvider;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
PlayerContextProvider_PlayerContextProvider.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(PlayerPropTypes_track.isRequired).isRequired,
  autoplay: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  createMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  autoplayDelayInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  gapLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  crossOrigin: crossOriginAttribute,
  defaultVolume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  defaultMuted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  defaultRepeatStrategy: PlayerPropTypes_repeatStrategy.isRequired,
  defaultShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  defaultPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  startingTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  loadFirstTrackOnPlaylistComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  seekMode: seekMode.isRequired,
  maintainPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  allowBackShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  stayOnBackSkipThreshold: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  supportedMediaSessionActions: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionAction.isRequired).isRequired,
  mediaSessionSeekLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  mediaElementRef: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  initialStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object,
  onStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  onActiveTrackUpdate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  // A function called when the media element's currentTime attribute has changed
  onTimeUpdate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  onTrackPlaybackFailure: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,
  getPosterImageForTrack: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  getMediaTitleAttributeForTrack: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
PlayerContextProvider_PlayerContextProvider.defaultProps = {
  autoplay: false,
  autoplayDelayInSeconds: 0,
  createMediaElement: function createMediaElement() {
    return document.createElement('video');
  },
  gapLengthInSeconds: 0,
  defaultVolume: 1,
  defaultMuted: false,
  defaultRepeatStrategy: 'playlist',
  defaultShuffle: false,
  defaultPlaybackRate: 1,
  startingTrackIndex: 0,
  loadFirstTrackOnPlaylistComplete: true,
  seekMode: 'immediate',
  maintainPlaybackRate: false,
  allowBackShuffle: false,
  stayOnBackSkipThreshold: 5,
  supportedMediaSessionActions: ['play', 'pause', 'previoustrack', 'nexttrack'],
  mediaSessionSeekLengthInSeconds: 10,
  getPosterImageForTrack: function getPosterImageForTrack(track) {
    return track && track.artwork ? track.artwork[0].src : '';
  },
  getMediaTitleAttributeForTrack: utils_getDisplayText
};
var PlayerContextProvider_PlayerContextGroupMember =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(PlayerContextGroupMember, _Component2);

  function PlayerContextGroupMember() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = PlayerContextGroupMember.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    this.props.groupContext.registerMediaElement(this.mediaElement);
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    // Media element might not exist
    // (see componentWillUnmount of PlayerContextProvider)
    if (this.mediaElement) {
      this.props.groupContext.unregisterMediaElement(this.mediaElement);
    }
  };

  _proto2.render = function render() {
    var _this8 = this;

    var _this$props5 = this.props,
        groupContext = _this$props5.groupContext,
        props = _this$props5.props;

    var _mediaElementRef = props.mediaElementRef,
        rest = PlayerContextProvider_objectWithoutPropertiesLoose(props, ["mediaElementRef"]);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContextProvider_PlayerContextProvider, _extends({}, groupContext.groupProps, rest, {
      mediaElementRef: function mediaElementRef(ref) {
        if (_mediaElementRef) {
          _mediaElementRef(ref);
        }

        _this8.mediaElement = ref;
      }
    }));
  };

  return PlayerContextGroupMember;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
PlayerContextProvider_PlayerContextGroupMember.propTypes = {
  groupContext: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
    groupProps: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object.isRequired,
    registerMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
    unregisterMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
  }).isRequired
};

function PlayerContextGroupConsumer(props) {
  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(GroupContext.Consumer, null, function (groupContext) {
    if (!groupContext) {
      return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextProvider, props);
    }

    return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextGroupMember, {
      groupContext: groupContext,
      props: props
    });
  });
}

/* harmony default export */ var src_PlayerContextProvider = (PlayerContextGroupConsumer);
// CONCATENATED MODULE: ./src/utils/getReactParentNameStack.js
// TODO: support Preact, Inferno, etc.
function getReactParentNameStack(componentInstance) {
  var fiber = componentInstance._reactInternalFiber;
  var parentStack = [];
  var owner = fiber;

  if (!owner) {
    return parentStack;
  }

  while (owner = owner._debugOwner) {
    if (owner.type.name) {
      parentStack.push(owner.type.name);
    }
  }

  return parentStack;
}

/* harmony default export */ var utils_getReactParentNameStack = (getReactParentNameStack);
// CONCATENATED MODULE: ./src/PlayerContextConsumer.js
function PlayerContextConsumer_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }







var PlayerContextConsumer_PlayerContextConsumer =
/*#__PURE__*/
function (_PureComponent) {
  PlayerContextConsumer_inheritsLoose(PlayerContextConsumer, _PureComponent);

  function PlayerContextConsumer() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = PlayerContextConsumer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        filterList = _this$props.filterList;

    if (!filterList) {
      if (!this.warnedAboutFilterList) {
        var warning = "\n          Please pass the filterList prop to PlayerContextConsumer in order\n          to avoid unnecessarily frequent re-renders, e.g.\n\n          const filterList = ['paused', 'onTogglePause'];\n          // ...\n          <PlayerContextConsumer filterList={filterList}>\n            {({ paused, onTogglePause }) => {\n              return <div>{/* ... */}</div>;\n            }}\n          </PlayerContextConsumer>\n        ";

        for (var _iterator = utils_getReactParentNameStack(this), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var parentName = _ref;
          warning += "\n            Rendered by " + parentName;
        }

        Object(console["b" /* logWarning */])(warning);
        this.warnedAboutFilterList = true;
      }

      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Consumer, null, children);
    }

    var flags = PlayerContext.__cassetteGetObservedBits(filterList);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Consumer, {
      unstable_observedBits: flags
    }, function (playerContext) {
      var usedContext = {};

      for (var _iterator2 = filterList, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var name = _ref2;

        if (playerContext.hasOwnProperty(name)) {
          usedContext[name] = playerContext[name];
        }
      }

      return children(usedContext);
    });
  };

  return PlayerContextConsumer;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);

PlayerContextConsumer_PlayerContextConsumer.propTypes = {
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  filterList: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired)
};
/* harmony default export */ var src_PlayerContextConsumer = (PlayerContextConsumer_PlayerContextConsumer);
// CONCATENATED MODULE: ./src/PlayerContextGroup.js
function PlayerContextGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PlayerContextGroup_defineProperty(target, key, source[key]); }); } return target; }

function PlayerContextGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PlayerContextGroup_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function PlayerContextGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




/**
 * A wrapper which can be used to share configuration among multiple descendant [`PlayerContextProvider`](#playercontextprovider) instances as well as prevent multiple media elements from playing audio simultaneously
 */

var PlayerContextGroup_PlayerContextGroup =
/*#__PURE__*/
function (_Component) {
  PlayerContextGroup_inheritsLoose(PlayerContextGroup, _Component);

  function PlayerContextGroup(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.registerMediaElement = _this.registerMediaElement.bind(PlayerContextGroup_assertThisInitialized(PlayerContextGroup_assertThisInitialized(_this)));
    _this.unregisterMediaElement = _this.unregisterMediaElement.bind(PlayerContextGroup_assertThisInitialized(PlayerContextGroup_assertThisInitialized(_this)));
    _this.enforceOneMediaSourceOnly = _this.enforceOneMediaSourceOnly.bind(PlayerContextGroup_assertThisInitialized(PlayerContextGroup_assertThisInitialized(_this)));
    _this.mediaElements = [];
    return _this;
  }

  var _proto = PlayerContextGroup.prototype;

  _proto.registerMediaElement = function registerMediaElement(elem) {
    this.mediaElements = this.mediaElements.concat(elem);
    elem.addEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.addEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  };

  _proto.unregisterMediaElement = function unregisterMediaElement(elem) {
    this.mediaElements = this.mediaElements.filter(function (element) {
      return elem !== element;
    });
    elem.removeEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.removeEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  };

  _proto.enforceOneMediaSourceOnly = function enforceOneMediaSourceOnly(e) {
    var mediaElement = e.target;
    var paused = mediaElement.paused,
        muted = mediaElement.muted;

    if (paused || muted) {
      return;
    }

    for (var _iterator = this.mediaElements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var element = _ref;

      if (element !== mediaElement && !element.muted) {
        element.pause();
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(GroupContext.Consumer, null, function (groupContext) {
      var value = groupContext ? PlayerContextGroup_objectSpread({}, groupContext, {
        groupProps: PlayerContextGroup_objectSpread({}, groupContext.groupProps, _this2.props)
      }) : {
        groupProps: _this2.props,
        registerMediaElement: _this2.registerMediaElement,
        unregisterMediaElement: _this2.unregisterMediaElement
      };
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(GroupContext.Provider, {
        value: value
      }, _this2.props.children);
    });
  };

  return PlayerContextGroup;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"]);
PlayerContextGroup_PlayerContextGroup.propTypes = {
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node.isRequired
};
/* harmony default export */ var src_PlayerContextGroup = (PlayerContextGroup_PlayerContextGroup);
// CONCATENATED MODULE: ./src/FullscreenContext.js


/* harmony default export */ var FullscreenContext = (Object(createSingleGlobalContext["a" /* default */])({
  displayName: 'FullscreenContext',
  defaultValue: {
    fullscreen: false,
    requestFullscreen: function requestFullscreen() {
      Object(console["b" /* logWarning */])('Fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
    },
    requestExitFullscreen: function requestExitFullscreen() {
      Object(console["b" /* logWarning */])('Exit fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
    }
  },
  keysWillUpdate: ['fullscreen']
}));
// CONCATENATED MODULE: ./src/FullscreenContextProvider.js
function FullscreenContextProvider_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function FullscreenContextProvider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var fullscreenStyle = {
  width: '100%',
  height: '100%'
};
/**
 * Wraps an area which should be fullscreen-able
 */

var FullscreenContextProvider_FullscreenContextProvider =
/*#__PURE__*/
function (_PureComponent) {
  FullscreenContextProvider_inheritsLoose(FullscreenContextProvider, _PureComponent);

  function FullscreenContextProvider(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      fullscreen: false
    };
    _this.requestFullscreen = _this.requestFullscreen.bind(FullscreenContextProvider_assertThisInitialized(FullscreenContextProvider_assertThisInitialized(_this)));
    _this.requestExitFullscreen = _this.requestExitFullscreen.bind(FullscreenContextProvider_assertThisInitialized(FullscreenContextProvider_assertThisInitialized(_this)));
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(FullscreenContextProvider_assertThisInitialized(FullscreenContextProvider_assertThisInitialized(_this)));
    _this.fullscreenElement = null;
    return _this;
  }

  var _proto = FullscreenContextProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('msfullscreenchange', this.handleFullscreenChange);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.handleFullscreenChange);
  };

  _proto.requestFullscreen = function requestFullscreen() {
    if (!this.props.fullscreenEnabled) {
      return;
    }

    if (this.fullscreenElement.requestFullscreen) {
      this.fullscreenElement.requestFullscreen();
    } else if (this.fullscreenElement.webkitRequestFullscreen) {
      this.fullscreenElement.webkitRequestFullscreen();
    } else if (this.fullscreenElement.mozRequestFullscreen) {
      this.fullscreenElement.mozRequestFullScreen();
    } else if (this.fullscreenElement.msRequestFullscreen) {
      this.fullscreenElement.msRequestFullscreen();
    }
  };

  _proto.requestExitFullscreen = function requestExitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.mozExitFullscreen();
    }
  };

  _proto.handleFullscreenChange = function handleFullscreenChange() {
    var documentFullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    this.setState({
      fullscreen: documentFullscreenElement === this.fullscreenElement
    });
  };

  _proto.getFullscreenContext = function getFullscreenContext() {
    var fullscreenContext = {
      fullscreen: this.state.fullscreen,
      requestFullscreen: this.requestFullscreen,
      requestExitFullscreen: this.requestExitFullscreen
    };

    if (this.fullscreenContext && fullscreenContext.fullscreen === this.fullscreenContext.fullscreen) {
      // no change
      return this.fullscreenContext;
    }

    return this.fullscreenContext = fullscreenContext;
  };

  _proto.render = function render() {
    var _this2 = this;

    var fullscreenContext = this.getFullscreenContext();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: function ref(elem) {
        return _this2.fullscreenElement = elem;
      },
      style: this.state.fullscreen ? fullscreenStyle : undefined
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FullscreenContext.Provider, {
      value: fullscreenContext
    }, typeof this.props.children === 'function' ? this.props.children(fullscreenContext) : this.props.children));
  };

  return FullscreenContextProvider;
}(external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"]);
FullscreenContextProvider_FullscreenContextProvider.propTypes = {
  fullscreenEnabled: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
FullscreenContextProvider_FullscreenContextProvider.defaultProps = {
  fullscreenEnabled: true
};
/* harmony default export */ var src_FullscreenContextProvider = (FullscreenContextProvider_FullscreenContextProvider);
// CONCATENATED MODULE: ./src/playerContextFilter.js
function playerContextFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { playerContextFilter_defineProperty(target, key, source[key]); }); } return target; }

function playerContextFilter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function playerContextFilter(component, contextPropNames) {
  var warned = {};
  var childName = component.displayName || component.name;

  var flags = PlayerContext.__cassetteGetObservedBits(contextPropNames);

  function PlayerContextFilter(props) {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FullscreenContext.Consumer, null, function (fullscreenContext) {
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Consumer, {
        unstable_observedBits: flags
      }, function (playerContext) {
        var childProps = playerContextFilter_objectSpread({}, props);

        for (var _iterator = contextPropNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var propName = _ref;

          if (playerContext.hasOwnProperty(propName)) {
            childProps[propName] = playerContext[propName];
          } else if (fullscreenContext.hasOwnProperty(propName)) {
            childProps[propName] = fullscreenContext[propName];
          } else if (!warned[propName]) {
            Object(console["b" /* logWarning */])("Prop '" + propName + "' for component " + childName + ' not found in playerContext or fullscreenContext.');
            warned[propName] = true;
          }
        }

        return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(component, childProps);
      });
    });
  }

  if (childName) {
    PlayerContextFilter.displayName = "PlayerContextFilter(" + childName + ")";
  }

  return PlayerContextFilter;
}

/* harmony default export */ var src_playerContextFilter = (playerContextFilter);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenContextConsumer", function() { return FullscreenContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donotuse_PlayerContext", function() { return donotuse_PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "donotuse_FullscreenContext", function() { return donotuse_FullscreenContext; });
/* concated harmony reexport PlayerContextProvider */__webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return src_PlayerContextProvider; });
/* concated harmony reexport PlayerContextConsumer */__webpack_require__.d(__webpack_exports__, "PlayerContextConsumer", function() { return src_PlayerContextConsumer; });
/* concated harmony reexport PlayerContextGroup */__webpack_require__.d(__webpack_exports__, "PlayerContextGroup", function() { return src_PlayerContextGroup; });
/* concated harmony reexport FullscreenContextProvider */__webpack_require__.d(__webpack_exports__, "FullscreenContextProvider", function() { return src_FullscreenContextProvider; });
/* concated harmony reexport playerContextFilter */__webpack_require__.d(__webpack_exports__, "playerContextFilter", function() { return src_playerContextFilter; });
/* concated harmony reexport PlayerPropTypes */__webpack_require__.d(__webpack_exports__, "PlayerPropTypes", function() { return PlayerPropTypes_namespaceObject; });
/* concated harmony reexport logError */__webpack_require__.d(__webpack_exports__, "logError", function() { return console["a" /* logError */]; });
/* concated harmony reexport logWarning */__webpack_require__.d(__webpack_exports__, "logWarning", function() { return console["b" /* logWarning */]; });
/* concated harmony reexport convertToNumberWithinIntervalBounds */__webpack_require__.d(__webpack_exports__, "convertToNumberWithinIntervalBounds", function() { return utils_convertToNumberWithinIntervalBounds; });
/* concated harmony reexport isPlaylistValid */__webpack_require__.d(__webpack_exports__, "isPlaylistValid", function() { return utils_isPlaylistValid; });
/* concated harmony reexport getDisplayText */__webpack_require__.d(__webpack_exports__, "getDisplayText", function() { return utils_getDisplayText; });
/* concated harmony reexport repeatStrategyOptions */__webpack_require__.d(__webpack_exports__, "repeatStrategyOptions", function() { return repeatStrategyOptions; });












var FullscreenContextConsumer = FullscreenContext.Consumer;

 // undocumented exports






var donotuse_PlayerContext = PlayerContext;
var donotuse_FullscreenContext = FullscreenContext;

/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-core.js.map