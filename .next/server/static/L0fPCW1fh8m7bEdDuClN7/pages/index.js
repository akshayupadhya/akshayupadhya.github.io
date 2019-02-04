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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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

  var changeRoute = function changeRoute(index) {
    if (index >= 0 && index <= routes.length - 1) {
      url.push(routes[index]);
    }
  };

  var ScrollHandler = function ScrollHandler(type, e) {
    e.preventDefault();

    switch (type) {
      case "tapStart":
        {
          //coz i like brackets
          RecordTap(e.touches[0].clientY);
          console.log(e.touches[0].clientY);
          break;
        }

      case "tapEnd":
        {
          if (tapStart > e.changedTouches[0].clientY) // scroll up
            changeRoute(currentRouteIndex + 1); // scroll down

          changeRoute(currentRouteIndex - 1);
        }

      case "mouse":
        {
          if (tapStart === undefined) {
            if (e.deltaY > 0) changeRoute(currentRouteIndex + 1);else changeRoute(currentRouteIndex - 1);
          }

          break;
        }
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "routeHandler",
    onTouchStart: function onTouchStart(e) {
      return ScrollHandler("tapStart", e);
    },
    onTouchEnd: function onTouchEnd(e) {
      return ScrollHandler("tapEnd", e);
    },
    onWheel: function onWheel(e) {
      return ScrollHandler("mouse", e);
    }
  }, children);
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./scss/components/firstScrollHome.scss
var firstScrollHome = __webpack_require__(15);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands"
var fontawesome_free_brands_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(6);

// CONCATENATED MODULE: ./components/iconBtn.jsx


var socialIconColor = "#fff";
var iconBtn_IconBtn = function IconBtn(_ref) {
  var url = _ref.url,
      target = _ref.target,
      icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  return external_react_default.a.createElement("a", {
    href: url,
    target: "_blank"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: icon,
    size: "5x",
    className: className,
    color: socialIconColor
  }));
};
// CONCATENATED MODULE: ./components/firstScrollHome.jsx






fontawesome_svg_core_["library"].add(fontawesome_free_brands_["faTwitterSquare"], fontawesome_free_brands_["faLinkedin"], fontawesome_free_brands_["faGithubSquare"]);
var socialIcons = [{
  icon: fontawesome_free_brands_["faGithubSquare"],
  url: "https://github.com/akshayupadhya"
}, {
  icon: fontawesome_free_brands_["faTwitterSquare"],
  url: "https://twitter.com/kcification"
}, {
  icon: fontawesome_free_brands_["faLinkedin"],
  url: "https://www.linkedin.com/in/akshay-upadhya-68548156/"
}];
var firstScrollHome_FirstScrollHome = function FirstScrollHome() {
  return external_react_default.a.createElement("div", {
    className: "firstScroll"
  }, external_react_default.a.createElement("div", {
    className: "intro"
  }, external_react_default.a.createElement("div", {
    className: "circle"
  }), external_react_default.a.createElement("p", {
    className: "name"
  }, "Akshay Upadhya"), external_react_default.a.createElement("div", {
    className: "job"
  }, external_react_default.a.createElement("p", {
    className: "designation"
  }, "FrontEnd developer ,"), external_react_default.a.createElement("p", {
    className: "company"
  }, "Jigsaw Academy")), external_react_default.a.createElement("p", {
    className: "place"
  }, "Bangalore")), external_react_default.a.createElement("div", {
    className: "social-media"
  }, socialIcons.map(function (_ref, index) {
    var icon = _ref.icon,
        url = _ref.url;
    return external_react_default.a.createElement(iconBtn_IconBtn, {
      key: index,
      icon: icon,
      url: url
    });
  }))) // </OneScroll>
  ;
};
// EXTERNAL MODULE: ./scss/style.scss
var style = __webpack_require__(16);

// EXTERNAL MODULE: ./scss/pages/index.scss
var pages = __webpack_require__(17);

// EXTERNAL MODULE: ./components/routeHandler.jsx
var routeHandler = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.jsx






var pages_Home = function Home(_ref) {
  var url = _ref.url;
  return external_react_default.a.createElement(routeHandler["a" /* RouteHandler */], {
    currentRoute: "/",
    url: url
  }, external_react_default.a.createElement("div", {
    className: "home",
    onScroll: function onScroll(e) {
      return console.log(e);
    }
  }, external_react_default.a.createElement(firstScrollHome_FirstScrollHome, null)));
};

/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);