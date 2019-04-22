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
const log = console.log.bind(console);
const logError = console.error ? console.error.bind(console) : log;
const logWarning = console.warn ? console.warn.bind(console) : log;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const packageVersion = __webpack_require__(6).version;

const _global = typeof window === 'undefined' ? global : window;

_global.__cassette_contexts__ = _global.__cassette_contexts__ || {};

function createSingleGlobalContext(_ref) {
  let displayName = _ref.displayName,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      keysWillUpdate = _ref.keysWillUpdate;
  const ExistingContext = _global.__cassette_contexts__[displayName];

  if (ExistingContext) {
    if (ExistingContext.packageVersion !== packageVersion) {
      Object(_console__WEBPACK_IMPORTED_MODULE_1__[/* logWarning */ "b"])(`Warning: multiple versions of ${displayName} from the @cassette/core` + ` package have been loaded. v${packageVersion} will be ignored and` + ` v${ExistingContext.packageVersion} will be used instead.`);
    }

    return ExistingContext;
  } // inspired by:
  // https://github.com/philosaf/observed-bits/blob/master/src/index.js


  const flags = {};
  let i = 0;

  for (const key of keysWillUpdate) {
    flags[key] = 1 << i++;
  }

  const Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue, function getChangedBits(prev, next) {
    let mask = 0;

    for (const key of keysWillUpdate) {
      if (prev[key] !== next[key]) {
        mask |= flags[key];
      }
    }

    return mask;
  });

  Context.__cassetteGetObservedBits = keys => {
    let observedBits = 0;

    for (const key of keys) {
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

module.exports = {"name":"@cassette/core","version":"2.0.0-beta.1","description":"A simple, clean, and responsive visual wrapper for the HTML audio tag, built with React.","main":"dist/es5/cassette-core.js","scripts":{"build:clean":"rimraf dist","build:webpack":"BUILD_MODE=all webpack --progress","build":"npm run build:clean && npm run build:webpack","prepare":"npm run build","test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"https://github.com/benwiley4000/cassette.git"},"engines":{"node":">=6.0.0","npm":">=5.0.0"},"keywords":["audio","video","media","ui","react","reactjs","responsive","music","player","html5","component","components"],"author":{"name":"Ben Wiley","email":"therealbenwiley@gmail.com","url":"http://benwiley.org/"},"license":"MIT","peerDependencies":{"react":"^16.3.0"},"devDependencies":{"array-find-index":"^1.0.2","rimraf":"^2.5.4","webpack":"^4.17.1"},"dependencies":{"prop-types":"^15.5.10"},"publishConfig":{"access":"public"}};

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
__webpack_require__.d(PlayerPropTypes_namespaceObject, "seekMode", function() { return seekMode; });

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
const repeatStrategyOptions = ['none', 'playlist', 'track'];
// EXTERNAL MODULE: ./src/utils/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./src/PlayerPropTypes.js




function requiredOnlyUnlessHasProp(propType, altPropName) {
  let warnedAboutDefiningBoth = false;

  function validate(props, propName, componentName) {
    if (propName in props) {
      if (!warnedAboutDefiningBoth && altPropName in props) {
        Object(console["b" /* logWarning */])(`Do not define both the '${propName}' and '${altPropName}' props.`);
        warnedAboutDefiningBoth = true;
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.isRequired(props, propName, componentName, ...rest);
    }

    if (!(altPropName in props)) {
      return new Error(`If the '${altPropName}' prop is not defined, '${propName}' must be.`);
    }
  }

  return validate;
}

const controlKeyword = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['playpause', 'backskip', 'forwardskip', 'volume', 'mute', 'repeat', 'shuffle', 'progress', 'progressdisplay', 'fullscreen', 'spacer']);
const control = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func, controlKeyword]);
const crossOriginAttribute = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['anonymous', 'use-credentials']);
const PlayerPropTypes_repeatStrategy = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(repeatStrategyOptions);
const mediaSource = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired
});
const mediaSessionAction = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['play', 'pause', 'previoustrack', 'nexttrack', 'seekbackward', 'seekforward']);
const mediaSessionArtwork = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
  src: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  sizes: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  type: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string
});
const PlayerPropTypes_track = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
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
const seekMode = external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOf(['paused', 'immediate', 'onrelease']);
// CONCATENATED MODULE: ./src/factories/createCustomMediaElement.js
const loopchange = 'loopchange';
const srcrequest = 'srcrequest';

function createCustomMediaElement(media) {
  new MutationObserver(() => {
    media.dispatchEvent(new Event(loopchange));
  }).observe(media, {
    attributes: true,
    attributeFilter: ['loop']
  }); // Don't let the media src property get modified directly.
  // Instead, when it does get set, dispatch an event to be
  // handled in a way that doesn't conflict with the loaded
  // playlist.

  Object.defineProperty(media, 'src', {
    get: () => media.currentSrc,
    set: src => {
      const e = new Event(srcrequest);
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
class ShuffleManager {
  constructor(list, options) {
    if (options === void 0) {
      options = {};
    }

    this._list = list;
    this._forwardStack = [];
    this._backStack = [];
    this._currentItem = undefined;
    this._allowBackShuffle = Boolean(options.allowBackShuffle);
  }

  findNextItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._forwardStack, this._backStack, this._currentItem, true);
    return this._currentItem;
  }

  findPreviousItem(currentIndex) {
    if (currentIndex !== undefined) {
      this.setCurrentIndex(currentIndex);
    }

    this._currentItem = _findNextItem(this._list, this._backStack, this._forwardStack, this._currentItem, this._allowBackShuffle);
    return this._currentItem;
  }

  pickNextItem(index, currentIndex) {
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
  }

  setList(list) {
    this._list = list;
  }

  setOptions(options) {
    for (const o of Object.keys(options)) {
      switch (o) {
        case 'allowBackShuffle':
          this[`_${o}`] = Boolean(options[o]);
          break;

        default:
          break;
      }
    }
  }

  setCurrentIndex(currentIndex) {
    const item = this._list[currentIndex];

    if (this._currentItem !== item) {
      this.clear();
      this._currentItem = item;
    }
  }

  clear() {
    this._forwardStack.length = 0;
    this._backStack.length = 0;
    this._currentItem = undefined;
  }

}

function _goForward(n, forwardStack, backStack, currentItem) {
  let item = currentItem;

  for (let i = 0; i < n; i++) {
    if (!forwardStack.length) {
      // rollback before erroring (note stack reversal)
      _goForward(i, backStack, forwardStack, item);

      throw `Moving ${n} places was not possible!`;
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

  for (let i = 0; i < list.length; i++) {
    if (item !== list[i]) {
      return false;
    }
  }

  return true;
}

function _findNextItem(list, forwardStack, backStack, currentItem, allowMore) {
  let item = currentItem;

  if (!list.length) {
    return undefined;
  }

  for (let i = 1; i <= forwardStack.length; i++) {
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

  let nextItem;

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

const blankSources = [{
  src: ''
}];

function getTrackSources(playlist, index) {
  if (!utils_isPlaylistValid(playlist)) {
    return blankSources;
  }

  const _playlist$index = playlist[index],
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
  return array_find_index_default()(playlist, track => {
    if (track.sources) {
      return array_find_index_default()(track.sources, source => source.src === url) !== -1;
    }

    return track.url && url === track.url;
  });
}

/* harmony default export */ var utils_findTrackIndexByUrl = (findTrackIndexByUrl);
// CONCATENATED MODULE: ./src/utils/snapshot.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const veryLongKey = '__highly_unstable_snapshot_internals_which_will_break_your_app_if_you_use_them_directly__';
const versionKey = '__cassette_snapshot_version__'; // IMPORTANT: new migrations *must* always be added to the end since
// the tracked snapshot version is based on the migration index.
// If there is a crash-inducing bug in an existing migration, it can be patched
// in-place, but it should never be removed from the migrations array.

const migrations = [oldSnapshot => {
  const __unstable__ = oldSnapshot.__unstable__,
        rest = _objectWithoutPropertiesLoose(oldSnapshot, ["__unstable__"]);

  return _objectSpread({}, rest, {
    [veryLongKey]: __unstable__
  });
}];
function getStateSnapshot(state) {
  const paused = state.paused,
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
  return {
    [versionKey]: migrations.length,
    [veryLongKey]: {
      paused,
      // currentTime can't be restored for unbounded live streams
      currentTime: duration === Infinity ? 0 : currentTime,
      activeTrackIndex,
      volume,
      muted,
      loop,
      cycle,
      shuffle,
      playbackRate,
      activeTrackSrc: utils_isPlaylistValid(__playlist__) ? utils_getTrackSources(__playlist__, activeTrackIndex)[0].src : null
    }
  };
}
function restoreStateFromSnapshot(snapshot, props) {
  const migratedSnapshot = migrations.slice(snapshot[versionKey] || 0).reduce((oldSnapshot, migration) => migration(oldSnapshot), snapshot);
  const _migratedSnapshot$ver = migratedSnapshot[veryLongKey],
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
  const restoredStateValues = {};

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

  let useCurrentTime = false;

  if (typeof activeTrackSrc === 'string' && typeof activeTrackIndex === 'number' && activeTrackIndex >= 0) {
    // let's try staying on the same track index
    const currentSrc = props.playlist[activeTrackIndex] && utils_getTrackSources(props.playlist, activeTrackIndex)[0].src;

    if (currentSrc && activeTrackSrc === currentSrc) {
      restoredStateValues.activeTrackIndex = activeTrackIndex;
      useCurrentTime = true;
    } else {
      /* if the track we were playing before is in the new playlist,
       * update the activeTrackIndex.
       */
      const newTrackIndex = utils_findTrackIndexByUrl(props.playlist, activeTrackSrc);

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
  return (playlist || []).map((_, i) => utils_getTrackSources(playlist, i)[0].src);
}

/* harmony default export */ var utils_getSourceList = (getSourceList);
// CONCATENATED MODULE: ./src/utils/getTimeRangesArray.js
function getTimeRangesArray(timeRangesObj) {
  const timeRangesArray = Array(timeRangesObj.length);

  for (let i = 0; i < timeRangesObj.length; i++) {
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

  if (track.title && track.artist) {
    return `${track.artist} - ${track.title}`;
  }

  return track.title || track.artist || track.album || '';
}

/* harmony default export */ var utils_getDisplayText = (getDisplayText);
// CONCATENATED MODULE: ./src/utils/parseTimeString.js
function parseTimeString(str) {
  let seconds = 0;
  let factor = 1;
  const times = str.split(':').slice(-3);

  while (times.length > 0) {
    seconds += factor * parseInt(times.pop(), 10);
    factor *= 60;
  }

  return seconds;
}

/* harmony default export */ var utils_parseTimeString = (parseTimeString);
// CONCATENATED MODULE: ./src/utils/getInitialDuration.js


function getInitialDuration(track) {
  let duration = 0;

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






















function playErrorHandler(err) {
  Object(console["a" /* logError */])(err);

  if (err.name === 'NotAllowedError') {
    const warningMessage = 'Media playback failed at ' + new Date().toLocaleTimeString() + '! (Perhaps autoplay is disabled in this browser.)';
    Object(console["b" /* logWarning */])(warningMessage);
  }
} // Existing Media Session API implementations have default handlers
// for play/pause, and may yield unexpected behavior if custom
// play/pause handlers are defined - so let's leave them be.


const supportableMediaSessionActions = ['previoustrack', 'nexttrack', 'seekbackward', 'seekforward'];
const defaultState = {
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
  let prevState = _ref.prevState,
      index = _ref.index,
      track = _ref.track,
      _ref$shouldPlay = _ref.shouldPlay,
      shouldPlay = _ref$shouldPlay === void 0 ? true : _ref$shouldPlay,
      _ref$shouldForceLoad = _ref.shouldForceLoad,
      shouldForceLoad = _ref$shouldForceLoad === void 0 ? false : _ref$shouldForceLoad;
  const isNewTrack = prevState.activeTrackIndex !== index;
  const shouldLoadAsNew = Boolean(isNewTrack || shouldForceLoad);
  const currentTime = track.startingTime || 0;
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


class PlayerContextProvider_PlayerContextProvider extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  constructor(props) {
    super(props);
    let currentTime = 0;
    let activeTrackIndex = utils_convertToNumberWithinIntervalBounds(props.startingTrackIndex, 0);
    const playlistIsValid = utils_isPlaylistValid(props.playlist);

    if (playlistIsValid && props.playlist[activeTrackIndex]) {
      currentTime = props.playlist[activeTrackIndex].startingTime || 0;
    }

    const initialStateSnapshot = props.initialStateSnapshot;
    let restoredStateFromSnapshot = {};

    if (initialStateSnapshot) {
      try {
        restoredStateFromSnapshot = restoreStateFromSnapshot(initialStateSnapshot, props);
        const _restoredStateFromSna = restoredStateFromSnapshot,
              a = _restoredStateFromSna.activeTrackIndex,
              c = _restoredStateFromSna.currentTime;

        if (typeof a === 'number') {
          activeTrackIndex = a;
        }

        if (typeof c === 'number') {
          currentTime = c;
        }
      } catch (err) {
        Object(console["b" /* logWarning */])(err);
        Object(console["b" /* logWarning */])('Loading Cassette state from snapshot failed.');
        Object(console["b" /* logWarning */])(`Failed snapshot:\n${JSON.stringify(initialStateSnapshot, null, 2)}`);
      }
    }

    this.state = PlayerContextProvider_objectSpread({}, defaultState, {
      // index matching requested track (whether track has loaded or not)
      activeTrackIndex,
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

    this.lastStableVolume = this.state.volume; // used to keep track of play history when we are shuffling

    this.shuffler = new utils_ShuffleManager(utils_getSourceList(props.playlist), {
      allowBackShuffle: props.allowBackShuffle
    }); // html media element used for playback

    this.media = null;
    this.videoHostElementList = [];
    this.videoHostOccupiedCallbacks = new Map();
    this.videoHostVacatedCallbacks = new Map(); // bind internal methods

    this.handleTrackPlaybackFailure = this.handleTrackPlaybackFailure.bind(this); // bind callback methods to pass to descendant elements

    this.togglePause = this.togglePause.bind(this);
    this.selectTrackIndex = this.selectTrackIndex.bind(this);
    this.forwardSkip = this.forwardSkip.bind(this);
    this.backSkip = this.backSkip.bind(this);
    this.seekPreview = this.seekPreview.bind(this);
    this.seekComplete = this.seekComplete.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setVolumeComplete = this.setVolumeComplete.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.setRepeatStrategy = this.setRepeatStrategy.bind(this);
    this.setPlaybackRate = this.setPlaybackRate.bind(this);
    this.registerVideoHostElement = this.registerVideoHostElement.bind(this);
    this.renderVideoIntoHostElement = this.renderVideoIntoHostElement.bind(this);
    this.unregisterVideoHostElement = this.unregisterVideoHostElement.bind(this);
    this.updateVideoHostElement = this.updateVideoHostElement.bind(this); // bind media event handlers

    this.handleMediaPlay = this.handleMediaPlay.bind(this);
    this.handleMediaPause = this.handleMediaPause.bind(this);
    this.handleMediaSrcrequest = this.handleMediaSrcrequest.bind(this);
    this.handleMediaEnded = this.handleMediaEnded.bind(this);
    this.handleMediaEmptied = this.handleMediaEmptied.bind(this);
    this.handleMediaStalled = this.handleMediaStalled.bind(this);
    this.handleMediaCanplaythrough = this.handleMediaCanplaythrough.bind(this);
    this.handleMediaCanplay = this.handleMediaCanplay.bind(this);
    this.handleMediaTimeupdate = this.handleMediaTimeupdate.bind(this);
    this.handleMediaLoadeddata = this.handleMediaLoadeddata.bind(this);
    this.handleMediaVolumechange = this.handleMediaVolumechange.bind(this);
    this.handleMediaDurationchange = this.handleMediaDurationchange.bind(this);
    this.handleMediaProgress = this.handleMediaProgress.bind(this);
    this.handleMediaLoopchange = this.handleMediaLoopchange.bind(this);
    this.handleMediaRatechange = this.handleMediaRatechange.bind(this);
  }

  componentDidMount() {
    const media = this.media = factories_createCustomMediaElement(this.props.createMediaElement());
    const _this$props = this.props,
          defaultPlaybackRate = _this$props.defaultPlaybackRate,
          crossOrigin = _this$props.crossOrigin,
          playlist = _this$props.playlist,
          autoplayDelayInSeconds = _this$props.autoplayDelayInSeconds,
          mediaElementRef = _this$props.mediaElementRef,
          getPosterImageForTrack = _this$props.getPosterImageForTrack,
          getMediaTitleAttributeForTrack = _this$props.getMediaTitleAttributeForTrack,
          onActiveTrackUpdate = _this$props.onActiveTrackUpdate;
    const _this$state = this.state,
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
      this.delayTimeout = setTimeout(() => {
        this.togglePause(false);
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
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const newPlaylist = nextProps.playlist;

    if (newPlaylist === prevState.__playlist__) {
      // reference comparison is equal so we'll
      // assume the playlist is unchanged.
      return null;
    }

    const baseNewState = {
      __playlist__: newPlaylist
    }; // check if the new playlist is invalid

    if (!utils_isPlaylistValid(newPlaylist)) {
      return PlayerContextProvider_objectSpread({}, defaultState, baseNewState, {
        activeTrackIndex: 0,
        trackLoading: false
      });
    } // check if the activeTrackIndex doesn't need to be updated


    const prevSources = utils_getTrackSources(prevState.__playlist__, prevState.activeTrackIndex);

    if (newPlaylist[prevState.activeTrackIndex]) {
      // the sources if we stay on the same track index
      const currentSources = utils_getTrackSources(newPlaylist, prevState.activeTrackIndex); // non-comprehensive but probably accurate check

      if (prevSources[0].src === currentSources[0].src) {
        // our active track index already matches
        return baseNewState;
      }
    }
    /* if the track we're already playing is in the new playlist, update the
     * activeTrackIndex.
     */


    const newTrackIndex = utils_findTrackIndexByUrl(newPlaylist, prevSources[0].src);

    if (newTrackIndex !== -1) {
      return PlayerContextProvider_objectSpread({}, baseNewState, {
        activeTrackIndex: newTrackIndex
      });
    } // if not, then load the first track in the new playlist, and pause.


    return PlayerContextProvider_objectSpread({}, baseNewState, getGoToTrackState({
      prevState,
      track: newPlaylist[0],
      index: 0,
      shouldPlay: false,
      shouldForceLoad: true
    }), {
      mediaCannotPlay: false,
      awaitingPlayAfterTrackLoad: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.media.defaultPlaybackRate = this.props.defaultPlaybackRate;
    this.media.crossOrigin = this.props.crossOrigin;
    this.shuffler.setList(utils_getSourceList(this.props.playlist));
    this.shuffler.setOptions({
      allowBackShuffle: this.props.allowBackShuffle
    });
    const prevSources = utils_getTrackSources(prevProps.playlist, prevState.activeTrackIndex);
    const newSources = utils_getTrackSources(this.props.playlist, this.state.activeTrackIndex);
    const prevTrack = prevProps.playlist[prevState.activeTrackIndex];
    const newTrack = this.props.playlist[this.state.activeTrackIndex];

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

      setTimeout(() => {
        this.togglePause(false);
      });
    }

    clearTimeout(this.snapshotUpdateTimeout);
    this.snapshotUpdateTimeout = setTimeout(() => {
      if (this.props.onStateSnapshot) {
        this.props.onStateSnapshot(getStateSnapshot(this.state));
      }
    }, 100);
  }

  componentWillUnmount() {
    const media = this.media; // Media element creation will have failed if MutationObserver isn't
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
      const sourceElements = media.querySelectorAll('source');

      for (const sourceElement of sourceElements) {
        sourceElement.removeEventListener('error', this.handleTrackPlaybackFailure);
      }
    }

    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);
  }

  stealMediaSession() {
    if ( // eslint-disable-next-line no-undef
    !(window.MediaSession && navigator.mediaSession instanceof MediaSession)) {
      return;
    } // eslint-disable-next-line no-undef


    navigator.mediaSession.metadata = new MediaMetadata(this.props.playlist[this.state.activeTrackIndex]);
    supportableMediaSessionActions.map(action => {
      if (this.props.supportedMediaSessionActions.indexOf(action) === -1) {
        return null;
      }

      const seekLength = this.props.mediaSessionSeekLengthInSeconds;

      switch (action) {
        case 'play':
          return this.togglePause.bind(this, false);

        case 'pause':
          return this.togglePause.bind(this, true);

        case 'previoustrack':
          return this.backSkip;

        case 'nexttrack':
          return this.forwardSkip;

        case 'seekbackward':
          return () => this.media.currentTime -= seekLength;

        case 'seekforward':
          return () => this.media.currentTime += seekLength;

        default:
          return undefined;
      }
    }).forEach((handler, i) => {
      navigator.mediaSession.setActionHandler(supportableMediaSessionActions[i], handler);
    });
  }

  setMediaElementSources() {
    // remove current sources
    const playlist = this.props.playlist;
    let firstChild;

    while (firstChild = this.media.firstChild) {
      this.media.removeChild(firstChild);
    }

    if (utils_isPlaylistValid(playlist)) {
      const sources = utils_getTrackSources(playlist, this.state.activeTrackIndex); // add new sources

      for (const source of sources) {
        const sourceElement = document.createElement('source');
        sourceElement.src = source.src;

        if (source.type) {
          sourceElement.type = source.type;
        }

        sourceElement.addEventListener('error', this.handleTrackPlaybackFailure);
        this.media.appendChild(sourceElement);
      }
    } // cancel playback and re-scan new sources


    this.media.load();
  }

  handleTrackPlaybackFailure(event) {
    this.setState({
      mediaCannotPlay: true
    });

    if (this.props.onTrackPlaybackFailure) {
      this.props.onTrackPlaybackFailure({
        track: this.props.playlist[this.state.activeTrackIndex],
        trackIndex: this.state.activeTrackIndex,
        event
      });
    }
  }

  registerVideoHostElement(hostElement, _ref2) {
    let onHostOccupied = _ref2.onHostOccupied,
        onHostVacated = _ref2.onHostVacated;
    this.videoHostElementList = this.videoHostElementList.concat(hostElement);
    this.videoHostOccupiedCallbacks.set(hostElement, onHostOccupied);
    this.videoHostVacatedCallbacks.set(hostElement, onHostVacated);
  }

  renderVideoIntoHostElement(hostElement) {
    if (this.videoHostElementList.indexOf(hostElement) === -1) {
      return;
    }

    cancelAnimationFrame(this.videoHostUpdateRaf);
    this.videoHostUpdateRaf = requestAnimationFrame(() => this.updateVideoHostElement(hostElement));
  }

  unregisterVideoHostElement(hostElement) {
    this.videoHostElementList = this.videoHostElementList.filter(elem => elem !== hostElement);
    this.videoHostOccupiedCallbacks.delete(hostElement);
    this.videoHostVacatedCallbacks.delete(hostElement);

    if (this.media.parentNode === hostElement) {
      this.updateVideoHostElement();
    }
  }

  updateVideoHostElement(hostElement) {
    if (!hostElement) {
      hostElement = this.videoHostElementList[0] || this.mediaContainer;
    } else {
      // move hostElement to front of list
      this.videoHostElementList = [hostElement].concat(this.videoHostElementList.filter(elem => elem !== hostElement));
    }

    const playing = !this.media.paused;
    const oldHostElement = this.media.parentNode;

    if (hostElement === oldHostElement) {
      return;
    }

    hostElement.appendChild(this.media); // according to the HTML spec playback should continue, but
    // some browsers pause the element whenever it is moved around, so
    // let's make sure playback resumes if that's the case.

    if (playing && this.media.paused) {
      this.media.play();
    }

    const onVacated = this.videoHostVacatedCallbacks.get(oldHostElement);

    if (onVacated) {
      onVacated(this.media);
    }

    const onOccupied = this.videoHostOccupiedCallbacks.get(hostElement);

    if (onOccupied) {
      onOccupied(this.media);
    }
  }

  handleMediaPlay() {
    this.setState(state => state.paused === false && state.awaitingPlayAfterTrackLoad === false ? null : {
      paused: false,
      awaitingPlayAfterTrackLoad: false
    });
    this.stealMediaSession();
  }

  handleMediaPause() {
    this.setState(state => state.paused === true ? null : {
      paused: true
    });
  }

  handleMediaSrcrequest(e) {
    const playlist = this.props.playlist;
    const sources = utils_getTrackSources(playlist, this.state.activeTrackIndex);

    if (array_find_index_default()(sources, s => s.src === e.srcRequested) !== -1) {
      // we're good! nothing to update.
      return;
    } // looks like 'src' was set from outside our component.
    // let's see if we can use it.


    const newTrackIndex = utils_findTrackIndexByUrl(playlist, e.srcRequested);

    if (newTrackIndex === -1) {
      Object(console["a" /* logError */])(`Source '${e.srcRequested}' does not exist in the loaded playlist. ` + `Make sure you've updated the 'playlist' prop to ` + `PlayerContextProvider before you select this track!`);
      return;
    }

    this.selectTrackIndex(newTrackIndex);
  }

  handleMediaEnded() {
    if (this.state.seekInProgress) {
      // nothing to do if we're in the middle of a seek
      // (this can happen if we're in seekMode: immediate)
      return;
    }

    clearTimeout(this.gapLengthTimeout);
    const _this$props2 = this.props,
          playlist = _this$props2.playlist,
          loadFirstTrackOnPlaylistComplete = _this$props2.loadFirstTrackOnPlaylistComplete;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    const _this$state2 = this.state,
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
  }

  handleMediaStalled() {
    this.setState(state => state.stalled === true ? null : {
      stalled: true
    });
  }

  handleMediaEmptied() {
    this.setState(state => state.paused === true ? null : {
      paused: true
    });
  }

  handleMediaCanplay() {
    this.setState(state => state.trackLoading === false ? null : {
      trackLoading: false
    });
  }

  handleMediaCanplaythrough() {
    this.setState(state => state.stalled === false ? null : {
      stalled: false
    });
  }

  handleMediaTimeupdate() {
    const _this$media = this.media,
          currentTime = _this$media.currentTime,
          played = _this$media.played;
    const _this$props3 = this.props,
          onTimeUpdate = _this$props3.onTimeUpdate,
          playlist = _this$props3.playlist;
    const _this$state3 = this.state,
          activeTrackIndex = _this$state3.activeTrackIndex,
          trackLoading = _this$state3.trackLoading;

    if (trackLoading) {
      // we'll get another time update when the track loads
      // but for now this helps us avoid unnecessarily
      // jumping back to currentTime: 0 in the UI while
      // the track is loading.
      return;
    }

    this.setState(state => ({
      currentTime,
      playedRanges: utils_getTimeRangesArray(played),
      maxKnownTime: Math.max(state.maxKnownTime, currentTime)
    }));

    if (onTimeUpdate) {
      onTimeUpdate({
        currentTime,
        track: playlist[activeTrackIndex],
        trackIndex: activeTrackIndex
      });
    }
  }

  handleMediaLoadeddata() {
    if (this.media.currentTime !== this.state.currentTime) {
      this.media.currentTime = this.state.currentTime;
    }
  }

  handleMediaVolumechange() {
    const _this$media2 = this.media,
          volume = _this$media2.volume,
          muted = _this$media2.muted;
    this.setState({
      volume,
      muted
    });
  }

  handleMediaDurationchange() {
    const duration = this.media.duration;
    const activeTrack = this.props.playlist[this.state.activeTrackIndex];

    if (duration === Infinity) {
      // This *could* be because we're consuming an unbounded stream.
      // It could also be because of a weird iOS bug that we want to
      // try to prevent. See https://github.com/benwiley4000/cassette/issues/355
      // If we still end up with Infinity duration multiple times for
      // the same track, we'll assume it's correct.
      if (activeTrack.isUnboundedStream || activeTrack === this.activeTrackAtLastDurationChange) {
        this.setState({
          duration,
          currentTime: 0
        });
        this.media.currentTime = 0;
      } else {
        const paused = this.state.paused;
        this.media.load();

        if (!paused) {
          // media.currentSrc is updated asynchronously so we should
          // play async to avoid weird intermediate state issues
          setTimeout(() => {
            this.togglePause(false);
          });
        }
      }
    } else {
      this.setState({
        duration
      });
    }

    this.activeTrackAtLastDurationChange = activeTrack;
  }

  handleMediaProgress() {
    this.setState({
      bufferedRanges: utils_getTimeRangesArray(this.media.buffered),
      seekableRanges: utils_getTimeRangesArray(this.media.seekable)
    });
  }

  handleMediaLoopchange() {
    const loop = this.media.loop;
    this.setState(state => state.loop === loop ? null : {
      loop
    });
  }

  handleMediaRatechange() {
    const playbackRate = this.media.playbackRate;
    this.setState(state => state.playbackRate === playbackRate ? null : {
      playbackRate
    });
  }

  togglePause(value) {
    clearTimeout(this.delayTimeout);
    const pause = typeof value === 'boolean' ? value : !this.state.paused;

    if (pause) {
      this.media.pause();
      return;
    }

    if (!this.media.currentSrc) {
      return;
    }

    try {
      const playPromise = this.media.play();

      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(err => {
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


  goToTrack(args) {
    clearTimeout(this.delayTimeout);
    this.setState(prevState => getGoToTrackState(PlayerContextProvider_objectSpread({
      prevState
    }, args)));
  }

  selectTrackIndex(index) {
    const playlist = this.props.playlist;

    if (!utils_isPlaylistValid(playlist)) {
      return;
    }

    if (index < 0 || index > playlist.length) {
      Object(console["b" /* logWarning */])(`Playlist index ${index} is out of bounds!`);
      return;
    }

    if (this.state.shuffle) {
      this.shuffler.pickNextItem(index, this.state.activeTrackIndex);
    }

    this.goToTrack({
      index,
      track: playlist[index]
    });
  }

  backSkip() {
    const _this$props4 = this.props,
          playlist = _this$props4.playlist,
          stayOnBackSkipThreshold = _this$props4.stayOnBackSkipThreshold;
    const media = this.media;
    const _this$state4 = this.state,
          cycle = _this$state4.cycle,
          activeTrackIndex = _this$state4.activeTrackIndex,
          shuffle = _this$state4.shuffle;

    if (!utils_isPlaylistValid(playlist) || media.currentTime >= stayOnBackSkipThreshold || !cycle && activeTrackIndex < 1) {
      media.currentTime = 0;
      return;
    }

    let index;

    if (shuffle) {
      const previousItem = this.shuffler.findPreviousItem(activeTrackIndex);

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
      index,
      track: playlist[index],
      shouldForceLoad: true
    });
  }

  forwardSkip() {
    const playlist = this.props.playlist;
    const _this$state5 = this.state,
          cycle = _this$state5.cycle,
          activeTrackIndex = _this$state5.activeTrackIndex,
          shuffle = _this$state5.shuffle;

    if (!utils_isPlaylistValid(playlist) || !cycle && activeTrackIndex + 1 >= playlist.length) {
      return;
    }

    let index;

    if (shuffle) {
      index = utils_findTrackIndexByUrl(playlist, this.shuffler.findNextItem(activeTrackIndex));
    } else {
      index = activeTrackIndex + 1;

      if (index >= playlist.length) {
        index = 0;
      }
    }

    this.goToTrack({
      index,
      track: playlist[index],
      shouldForceLoad: true
    });
  }

  seekPreview(targetTime) {
    if (!utils_isPlaylistValid(this.props.playlist)) {
      return;
    }

    const baseStateUpdate = {
      seekPreviewTime: targetTime,
      seekInProgress: true
    };

    switch (this.props.seekMode) {
      case 'paused':
        this.setState((_ref3) => {
          let paused = _ref3.paused,
              awaitingResumeOnSeekComplete = _ref3.awaitingResumeOnSeekComplete;
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
        this.setState((_ref4) => {
          let paused = _ref4.paused,
              awaitingResumeOnSeekComplete = _ref4.awaitingResumeOnSeekComplete;
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
  }

  seekComplete(targetTime) {
    const _this$state6 = this.state,
          seekPreviewTime = _this$state6.seekPreviewTime,
          awaitingResumeOnSeekComplete = _this$state6.awaitingResumeOnSeekComplete,
          trackLoading = _this$state6.trackLoading;
    const baseStateUpdate = {
      seekInProgress: false,
      awaitingResumeOnSeekComplete: false
    };
    const currentTime = typeof targetTime === 'number' ? targetTime : seekPreviewTime;

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
      currentTime
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
  }

  setVolume(volume, inProgress) {
    if (inProgress === void 0) {
      inProgress = true;
    }

    if (inProgress && !this.state.setVolumeInProgress) {
      this.setState({
        setVolumeInProgress: true
      });
    }

    const volumeInBounds = utils_convertToNumberWithinIntervalBounds(volume, 0, 1);
    this.media.muted = volumeInBounds === 0 ? true : false;
    this.media.volume = volumeInBounds;
  }

  setVolumeComplete(volume) {
    if (typeof volume === 'number') {
      this.setVolume(volume, false);
    }

    this.setState({
      setVolumeInProgress: false
    });

    if (!this.media.muted) {
      this.lastStableVolume = this.media.volume;
    }
  }

  toggleMuted(value) {
    const muted = typeof value === 'boolean' ? value : !this.state.muted;
    this.media.muted = muted;

    if (!muted) {
      this.media.volume = this.lastStableVolume;
    }
  }

  toggleShuffle(value) {
    const shuffle = typeof value === 'boolean' ? value : !this.state.shuffle;
    this.setState({
      shuffle
    });
  }

  setRepeatStrategy(repeatStrategy) {
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
  }

  setPlaybackRate(rate) {
    this.media.playbackRate = rate;
  }

  getControlProps() {
    const props = this.props,
          state = this.state;
    const playerContext = {
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
      for (const key of Object.keys(this.playerContext)) {
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
  }

  render() {
    const playerContext = this.getControlProps();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(external_root_React_commonjs_react_commonjs2_react_amd_react_["Fragment"], null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: elem => this.mediaContainer = elem,
      hidden: true
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Provider, {
      value: playerContext
    }, typeof this.props.children === 'function' ? this.props.children(playerContext) : this.props.children));
  }

}
PlayerContextProvider_PlayerContextProvider.propTypes = {
  /**
   * An array of [`track`](#track) objects to play in order (except when
   * shuffle mode is turned on)
   **/
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(PlayerPropTypes_track.isRequired).isRequired,

  /** Set to `true` to play media on player load. Think before doing this. It is
   * often a bad idea, although it can make sense if your app is expressly made
   * for media playback and you're resuming playback from the last session.
   * Note that some platforms will disallow this from happening under many
   * scenarios, and in these cases, `autoplay` will simply fail gracefully.
   */
  autoplay: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,

  /**
   * If your app uses a custom implementation of the `HTMLMediaElement`, you
   * can supply your own factory function to return it. This is an advanced
   * edge case.
   */
  createMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,

  /** If you're using `autoplay` but want to wait a few seconds before the
   * media playback kicks in, you can specify that timeout in second here.
   */
  autoplayDelayInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /**
   * Similar to `autoplayDelayInSeconds` but for the pause between tracks
   * (if you want to evoke the feeling of listening to one of those old CDs with
   * a negative countdown before it starts, which you never asked for).
   */
  gapLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /** A [`crossOriginAttribute`](#crossoriginattribute) value */
  crossOrigin: crossOriginAttribute,

  /** The starting volume (0-1) */
  defaultVolume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /** The starting `muted` value (`true` or `false`) */
  defaultMuted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,

  /** The starting [`repeatStrategy`](#repeatstrategy) */
  defaultRepeatStrategy: PlayerPropTypes_repeatStrategy.isRequired,

  /** Will shuffle mode be active by default? */
  defaultShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,

  /** The starting playback rate (1 is normal, 0.5 is half, 2 is double) */
  defaultPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /**
   * The starting track index (an advanced use case.. normally you should put
   * the track you want to hear first at the start of the playlist, unless
   * you are loading an `initialStateSnapshot` which will override this value
   * anyway
   */
  startingTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /**
   * Set this `false` if the player should rest of the final track when
   * the playlist has completed. Ignored unless the
   * current [`repeatStrategy`](#repeatstrategy) is `none`
   */
  loadFirstTrackOnPlaylistComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,

  /** Use this to set the player's [`seekMode`](#seekmode) */
  seekMode: seekMode.isRequired,

  /**
   * The default media element behavior is to reset the `playbackRate` to 1
   * whenever a new source is loaded. Set this prop to `true` to maintain the
   * same irregular playback rate across multiple tracks.
   */
  maintainPlaybackRate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,

  /**
   * By default, activating a back skip in shuffle mode will select the previous
   * track in the shuffled list, but if the current track was the first selected
   * track, back skip will be disabled. Setting this prop to `true` will
   * select new arbitrary tracks in the "past" if back skip is used beyond
   * the buffered history.
   */
  allowBackShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,

  /**
   * The number of seconds before pressing back skip becomes "back to
   * beginning of current track" rather than "go to the previous track"
   */
  stayOnBackSkipThreshold: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /**
   * An array of [`mediaSessionAction`](#mediasessionaction) types to display
   * in the end users's system UI, when applicable.
   * It is *not* the same as the `controls` array.
   */
  supportedMediaSessionActions: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(mediaSessionAction.isRequired).isRequired,

  /** The number of seconds to seek back or forward when the Media Session API
   * backseek/forwardseek buttons are activated in the end user's system UI
   */
  mediaSessionSeekLengthInSeconds: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,

  /**
   * A function called on component mount and component unmount with a reference
   * to the underlying media element. Generally not recommended for use, but
   * can be used as an escape hatch for features that aren't well-supported by
   * Cassette (if you find yourself needing this, you may want to
   * [open a new issue](https://github.com/benwiley4000/cassette/issues/new)
   * to talk about adding first-class support for your use case).
   */
  mediaElementRef: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,

  /**
   * If you're using `onStateSnapshot` to save snapshots of the media player
   * state as a serializable object, you should pass that restored object here
   * to preserve the user's state from the previous session
   */
  initialStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object,

  /**
   * Called whenever a new state snapshot is generated. The internals of this
   * snapshot are not documented and may change in a non-major release, so it's
   * not safe to rely on them directly. Instead, the state snapshot should
   * be serialized to JSON with `JSON.stringify` and restored later with
   * `JSON.parse` to be passed as the `initialStateSnapshot` prop
   */
  onStateSnapshot: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,

  /**
   * A function called whenever the active track is set or updated. Passed an
   * object with the properties `track`, `trackIndex`, `previousTrack` and
   * `previousTrackIndex` (these may be `null` or `undefined`)
   */
  onActiveTrackUpdate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,

  /**
   * A function called when the media element's `currentTime` attribute has
   * changed. Passed an object with the properties `currentTime`, `track` and
   * `trackIndex`
   */
  onTimeUpdate: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,

  /**
   * A function called when playback of the current track has failed for some
   * reason. Passed an object with the properties `event`,
   * `track` and `trackIndex`
   */
  onTrackPlaybackFailure: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func,

  /**
   * A function which receives a [`track`](#track) object (if one is active)
   * and returns a url pointing to a poster image representing the current
   * track which should be used in a [`VideoDisplay`](#videodisplay) when the
   * media content hasn't yet loaded
   */
  getPosterImageForTrack: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,

  /**
   * A function which receives a [`track`](#track) object (if one is active)
   * and returns the value for the media element's `title` attribute, which
   * may be used in iOS to display information about the current track in the
   * system UI
   */
  getMediaTitleAttributeForTrack: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,

  /**
   * Either a renderable React node or a render prop function like the
   * one passed into [`PlayerContextConsumer`](#playercontextconsumer)
   */
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.oneOfType([external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node, external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func]).isRequired
};
PlayerContextProvider_PlayerContextProvider.defaultProps = {
  autoplay: false,
  autoplayDelayInSeconds: 0,
  createMediaElement: () => document.createElement('video'),
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

  getPosterImageForTrack(track) {
    return track && track.artwork ? track.artwork[0].src : '';
  },

  getMediaTitleAttributeForTrack: utils_getDisplayText
};
class PlayerContextProvider_PlayerContextGroupMember extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  componentDidMount() {
    this.props.groupContext.registerMediaElement(this.mediaElement);
  }

  componentWillUnmount() {
    // Media element might not exist
    // (see componentWillUnmount of PlayerContextProvider)
    if (this.mediaElement) {
      this.props.groupContext.unregisterMediaElement(this.mediaElement);
    }
  }

  render() {
    const _this$props5 = this.props,
          groupContext = _this$props5.groupContext,
          props = _this$props5.props;

    const _mediaElementRef = props.mediaElementRef,
          rest = PlayerContextProvider_objectWithoutPropertiesLoose(props, ["mediaElementRef"]);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContextProvider_PlayerContextProvider, _extends({}, groupContext.groupProps, rest, {
      mediaElementRef: ref => {
        if (_mediaElementRef) {
          _mediaElementRef(ref);
        }

        this.mediaElement = ref;
      }
    }));
  }

}
PlayerContextProvider_PlayerContextGroupMember.propTypes = {
  groupContext: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.shape({
    groupProps: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object.isRequired,
    registerMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
    unregisterMediaElement: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
  }).isRequired
};

function PlayerContextGroupConsumer(props) {
  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(GroupContext.Consumer, null, groupContext => {
    if (!groupContext) {
      return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextProvider, props);
    }

    return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(PlayerContextProvider_PlayerContextGroupMember, {
      groupContext,
      props
    });
  });
}

/* harmony default export */ var src_PlayerContextProvider = (PlayerContextGroupConsumer);
// CONCATENATED MODULE: ./src/utils/getReactParentNameStack.js
// TODO: support Preact, Inferno, etc.
function getReactParentNameStack(componentInstance) {
  const fiber = componentInstance._reactInternalFiber;
  const parentStack = [];
  let owner = fiber;

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






class PlayerContextConsumer_PlayerContextConsumer extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          filterList = _this$props.filterList;

    if (!filterList) {
      if (!this.warnedAboutFilterList) {
        let warning = `
          Please pass the filterList prop to PlayerContextConsumer in order
          to avoid unnecessarily frequent re-renders, e.g.

          const filterList = ['paused', 'onTogglePause'];
          // ...
          <PlayerContextConsumer filterList={filterList}>
            {({ paused, onTogglePause }) => {
              return <div>{/* ... */}</div>;
            }}
          </PlayerContextConsumer>
        `;

        for (const parentName of utils_getReactParentNameStack(this)) {
          warning += `
            Rendered by ${parentName}`;
        }

        Object(console["b" /* logWarning */])(warning);
        this.warnedAboutFilterList = true;
      }

      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Consumer, null, children);
    }

    const flags = PlayerContext.__cassetteGetObservedBits(filterList);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Consumer, {
      unstable_observedBits: flags
    }, playerContext => {
      const usedContext = {};

      for (const name of filterList) {
        if (playerContext.hasOwnProperty(name)) {
          usedContext[name] = playerContext[name];
        }
      }

      return children(usedContext);
    });
  }

}

PlayerContextConsumer_PlayerContextConsumer.propTypes = {
  /**
   * A [render prop](https://reactjs.org/docs/render-props.html) function
   * which receives as its argument an object with the latest values of the
   * keys specified in the `filterList` prop (if you forget `filterList`, you
   * will get all the `playerContext` values and a warning in the console)
   */
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,

  /**
   * A full list of `playerContext` values which will need to be consumed.
   * Similar to the prop name array passed to
   * [`playerContextFilter`](#playercontextfilter), but only made up of values
   * found in [`playerContext`](#playercontext).
   *
   */
  filterList: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired)
};
/* harmony default export */ var src_PlayerContextConsumer = (PlayerContextConsumer_PlayerContextConsumer);
// CONCATENATED MODULE: ./src/PlayerContextGroup.js
function PlayerContextGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PlayerContextGroup_defineProperty(target, key, source[key]); }); } return target; }

function PlayerContextGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * A wrapper which can be used to share configuration among multiple descendant [`PlayerContextProvider`](#playercontextprovider) instances as well as prevent multiple media elements from playing audio simultaneously
 */

class PlayerContextGroup_PlayerContextGroup extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  constructor(props) {
    super(props);
    this.registerMediaElement = this.registerMediaElement.bind(this);
    this.unregisterMediaElement = this.unregisterMediaElement.bind(this);
    this.enforceOneMediaSourceOnly = this.enforceOneMediaSourceOnly.bind(this);
    this.mediaElements = [];
  }

  registerMediaElement(elem) {
    this.mediaElements = this.mediaElements.concat(elem);
    elem.addEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.addEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  }

  unregisterMediaElement(elem) {
    this.mediaElements = this.mediaElements.filter(element => elem !== element);
    elem.removeEventListener('play', this.enforceOneMediaSourceOnly, true);
    elem.removeEventListener('volumechange', this.enforceOneMediaSourceOnly, true);
  }

  enforceOneMediaSourceOnly(e) {
    const mediaElement = e.target;
    const paused = mediaElement.paused,
          muted = mediaElement.muted;

    if (paused || muted) {
      return;
    }

    for (const element of this.mediaElements) {
      if (element !== mediaElement && !element.muted) {
        element.pause();
      }
    }
  }

  render() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(GroupContext.Consumer, null, groupContext => {
      const value = groupContext ? PlayerContextGroup_objectSpread({}, groupContext, {
        groupProps: PlayerContextGroup_objectSpread({}, groupContext.groupProps, this.props)
      }) : {
        groupProps: this.props,
        registerMediaElement: this.registerMediaElement,
        unregisterMediaElement: this.unregisterMediaElement
      };
      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(GroupContext.Provider, {
        value: value
      }, this.props.children);
    });
  }

}
PlayerContextGroup_PlayerContextGroup.propTypes = {
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node.isRequired
};
/* harmony default export */ var src_PlayerContextGroup = (PlayerContextGroup_PlayerContextGroup);
// CONCATENATED MODULE: ./src/FullscreenContext.js


/* harmony default export */ var FullscreenContext = (Object(createSingleGlobalContext["a" /* default */])({
  displayName: 'FullscreenContext',
  defaultValue: {
    fullscreen: false,

    requestFullscreen() {
      Object(console["b" /* logWarning */])('Fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
    },

    requestExitFullscreen() {
      Object(console["b" /* logWarning */])('Exit fullscreen request ignored since there is no ' + 'FullscreenContextProvider ancestor.');
    }

  },
  keysWillUpdate: ['fullscreen']
}));
// CONCATENATED MODULE: ./src/FullscreenContextProvider.js



const fullscreenStyle = {
  width: '100%',
  height: '100%'
};
/**
 * Wraps an area which should be fullscreen-able
 */

class FullscreenContextProvider_FullscreenContextProvider extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false
    };
    this.requestFullscreen = this.requestFullscreen.bind(this);
    this.requestExitFullscreen = this.requestExitFullscreen.bind(this);
    this.handleFullscreenChange = this.handleFullscreenChange.bind(this);
    this.fullscreenElement = null;
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('msfullscreenchange', this.handleFullscreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.handleFullscreenChange);
  }

  requestFullscreen() {
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
  }

  requestExitFullscreen() {
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
  }

  handleFullscreenChange() {
    const documentFullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    this.setState({
      fullscreen: documentFullscreenElement === this.fullscreenElement
    });
  }

  getFullscreenContext() {
    const fullscreenContext = {
      fullscreen: this.state.fullscreen,
      requestFullscreen: this.requestFullscreen,
      requestExitFullscreen: this.requestExitFullscreen
    };

    if (this.fullscreenContext && fullscreenContext.fullscreen === this.fullscreenContext.fullscreen) {
      // no change
      return this.fullscreenContext;
    }

    return this.fullscreenContext = fullscreenContext;
  }

  render() {
    const fullscreenContext = this.getFullscreenContext();
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      ref: elem => this.fullscreenElement = elem,
      style: this.state.fullscreen ? fullscreenStyle : undefined
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FullscreenContext.Provider, {
      value: fullscreenContext
    }, typeof this.props.children === 'function' ? this.props.children(fullscreenContext) : this.props.children));
  }

}
FullscreenContextProvider_FullscreenContextProvider.propTypes = {
  /** If set `false`, disables fullscreen for the wrapped area */
  fullscreenEnabled: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,

  /**
   * Either a renderable React node or a render prop function like the
   * one passed into [`FullscreenContextConsumer`](#fullscreencontextconsumer)
   */
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
  const warned = {};
  const childName = component.displayName || component.name;

  const flags = PlayerContext.__cassetteGetObservedBits(contextPropNames);

  function PlayerContextFilter(props) {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(FullscreenContext.Consumer, null, fullscreenContext => external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(PlayerContext.Consumer, {
      unstable_observedBits: flags
    }, playerContext => {
      const childProps = playerContextFilter_objectSpread({}, props);

      for (const propName of contextPropNames) {
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
    }));
  }

  if (childName) {
    PlayerContextFilter.displayName = `PlayerContextFilter(${childName})`;
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












const FullscreenContextConsumer = FullscreenContext.Consumer;

 // undocumented exports






const donotuse_PlayerContext = PlayerContext;
const donotuse_FullscreenContext = FullscreenContext;

/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-core.js.map