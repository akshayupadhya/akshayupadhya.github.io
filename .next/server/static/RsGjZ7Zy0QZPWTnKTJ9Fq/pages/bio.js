module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),

/***/ 12:
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var routes = ["/", "/projects", "/bio"];
var RouteHandler = function RouteHandler(_ref) {
  var currentRoute = _ref.currentRoute,
      children = _ref.children,
      url = _ref.url;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      tapStart = _useState2[0],
      RecordTap = _useState2[1];

  var currentRouteIndex = routes.indexOf(currentRoute);

  var changeRoute = function changeRoute(type) {
    var index = currentRouteIndex;
    if (type == "up") index -= 1;else index += 1;

    if (index >= 0 && index <= routes.length - 1) {
      url.push(routes[index]);
    }
  };

  var timer = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // i know this is a freaking hack, will definely find a better way to this, but thats it for now
    setTimeout(function () {
      timer = true;
    }, 500);
  }, []);

  var ScrollHandler = function ScrollHandler(type, e, element) {
    e.preventDefault();

    switch (type) {
      case "tapStart":
        {
          //coz i like brackets
          RecordTap(e.touches[0].clientY);
          break;
        }

      case "tapEnd":
        {
          if (tapStart > e.changedTouches[0].clientY) // scroll up
            changeRoute("up"); // scroll down
          else changeRoute("down");
          break;
        }

      case "mouse":
        {
          if (tapStart === undefined && timer) {
            if (e.nativeEvent.deltaY <= 0) {
              /* scrolling up */
              e.preventDefault();
              changeRoute("up");
            } else {
              /* scrolling down */
              e.preventDefault();
              changeRoute("down");
            }
          }

          break;
        }
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "route-handler",
    onTouchStart: function onTouchStart(e) {
      return ScrollHandler("tapStart", e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return ScrollHandler("tapEnd", e);
    },
    onWheel: function onWheel(e) {
      return ScrollHandler("mouse", e, _this);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
    config: react_spring__WEBPACK_IMPORTED_MODULE_1__["config"].slow,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  }, function (style) {
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread({}, props, {
          style: style,
          height: "100%"
        })
      }, children);
    };
  }));
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./scss/components/thirdScrollHome.scss
var thirdScrollHome = __webpack_require__(12);

// CONCATENATED MODULE: ./components/thidScrollHome.jsx


var thidScrollHome_ThirdScrollHome = function ThirdScrollHome() {
  var me = {
    name: "Akshay Upadhya",
    title: "Full stack JS developer",
    company: "Jigsaw Academy",
    place: "Bangalore",
    languages: ["JavaScript", "HTML", "CSS", "PHP"],
    frameWorks: ["nodeJS", "reactJS", "vueJS", "ExpressJS", "nextJS", "nuxtJS"],
    tools: ["git", "zsh", "tmux", "guake"],
    misc: {
      favroiteFonts: ["IBM Plex Mono", "Fira Code"],
      editors: ["VS Code", "Atom", "VIM"],
      tabSpace: 2,
      OsOfChoice: ["elementary OS", "Ubuntu"],
      education: "B.E, Electronics And Communication, 2013-17",
      others: ["Tabs over Spaces", "Bengalooru namma ooru", "Filter coffee over Chai"]
    }
  };

  var TabChar = function TabChar(match, offset, string) {
    return offset > 0 ? "\n->->" : "";
  };

  return external_react_default.a.createElement("div", {
    className: "bio"
  }, external_react_default.a.createElement("div", {
    className: "title"
  }, "About me"), external_react_default.a.createElement("code", null, external_react_default.a.createElement("pre", null, // JSON.stringify(me, null, 1)
  JSON.stringify(me, function (key, value) {
    if (value instanceof Array) return JSON.stringify(value);
    return value;
  }, 2).replace(/"\[/g, "[").replace(/\]"/g, "]").replace(/\\"/g, '"').replace(/""/g, '"') // .replace(/\n/g,TabChar)// will fix it some day
  // .replace(/->\s{2}/g)
  .replace(/  /g, "->|").replace(/ /g, "·"))));
};
// EXTERNAL MODULE: ./components/routeHandler.jsx
var routeHandler = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/bio.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bio; });



function Bio(_ref) {
  var url = _ref.url;
  return external_react_default.a.createElement(routeHandler["a" /* RouteHandler */], {
    url: url,
    currentRoute: "/bio"
  }, external_react_default.a.createElement(thidScrollHome_ThirdScrollHome, null));
}

/***/ })

/******/ });