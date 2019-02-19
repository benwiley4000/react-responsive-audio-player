(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@cassette/core"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@cassette/core", "react"], factory);
	else if(typeof exports === 'object')
		exports["cassetteHooks"] = factory(require("@cassette/core"), require("react"));
	else
		root["cassetteHooks"] = factory(root["cassetteCore"], root["React"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/***/ (function(module) {

module.exports = {"name":"@cassette/hooks","version":"2.0.0-alpha.28","description":"A simple, clean, and responsive visual wrapper for the HTML audio tag, built with React.","main":"dist/es5/cassette-hooks.js","scripts":{"build:clean":"rimraf dist","build:webpack":"BUILD_MODE=all webpack --progress","build":"npm run build:clean && npm run build:webpack","prepare":"npm run build","test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"https://github.com/benwiley4000/cassette.git"},"engines":{"node":">=6.0.0","npm":">=5.0.0"},"keywords":["audio","video","media","ui","react","reactjs","responsive","music","player","html5","component","components"],"author":{"name":"Ben Wiley","email":"therealbenwiley@gmail.com","url":"http://benwiley.org/"},"license":"MIT","peerDependencies":{"react":"^16.8.0"},"devDependencies":{"rimraf":"^2.5.4","webpack":"^4.17.1"},"dependencies":{"@cassette/core":"^2.0.0-alpha.28","prop-types":"^15.5.10"},"publishConfig":{"access":"public"}};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"cassetteCore","commonjs":"@cassette/core","commonjs2":"@cassette/core","amd":"@cassette/core"}
var core_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/hooks/src/useFullscreenContext.js



function useFullscreenContext() {
  return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["useContext"])(core_["donotuse_FullscreenContext"]);
}

/* harmony default export */ var src_useFullscreenContext = (useFullscreenContext);
// CONCATENATED MODULE: ./packages/hooks/src/usePlayerContext.js



const packageVersion = __webpack_require__(2).version; // TODO: hopefully in the future we'll have a more stable API
// for observedBits/similar that doesn't require trial and error.


let warningLogged = false;

function logObservedBitsWarning() {
  if (!warningLogged) {
    Object(core_["logWarning"])(`
      Unable to optimize playerContext subscription with @cassette/hooks
      v${packageVersion} and react v${external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.version}.
      Please email therealbenwiley@gmail.com to get this fixed!
      Meanwhile you can try an earlier version of React (v16.8.0 or later).
    `);
    warningLogged = true;
  }
}

let Dispatcher;

try {
  Dispatcher = external_root_React_commonjs_react_commonjs2_react_amd_react_["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"].ReactCurrentDispatcher;
} catch (err) {
  logObservedBitsWarning();
}

function usePlayerContext(filterList) {
  if (!filterList) {
    Object(core_["logWarning"])(`
      Please pass list of context items to usePlayerContext in order
      to avoid unnecessarily frequent re-renders, e.g.

      const { paused, onTogglePause } = usePlayerContext([
        'paused',
        'onTogglePause'
      ]);
    `);
    return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["useContext"])(core_["donotuse_PlayerContext"]);
  }

  const _ref = Dispatcher && Dispatcher.current || {},
        readContext = _ref.readContext;

  let playerContext;

  if (readContext) {
    const flags = core_["donotuse_PlayerContext"].__cassetteGetObservedBits(filterList);

    playerContext = readContext(core_["donotuse_PlayerContext"], flags);
  } else {
    logObservedBitsWarning(); // if use of readContext internal fails, we
    // will use useContext, but skip passing
    // unstable_observedBits.

    playerContext = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["useContext"])(core_["donotuse_PlayerContext"]);
  }

  const usedContext = {};

  for (const name of filterList) {
    if (playerContext.hasOwnProperty(name)) {
      usedContext[name] = playerContext[name];
    }
  }

  return usedContext;
}

/* harmony default export */ var src_usePlayerContext = (usePlayerContext);
// CONCATENATED MODULE: ./packages/hooks/src/index.js
/* concated harmony reexport useFullscreenContext */__webpack_require__.d(__webpack_exports__, "useFullscreenContext", function() { return src_useFullscreenContext; });
/* concated harmony reexport usePlayerContext */__webpack_require__.d(__webpack_exports__, "usePlayerContext", function() { return src_usePlayerContext; });



/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-hooks.js.map