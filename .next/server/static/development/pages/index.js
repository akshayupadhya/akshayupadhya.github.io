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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/firstScrollHome.jsx":
/*!****************************************!*\
  !*** ./components/firstScrollHome.jsx ***!
  \****************************************/
/*! exports provided: FirstScrollHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstScrollHome", function() { return FirstScrollHome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_components_firstScrollHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/components/firstScrollHome.scss */ "./scss/components/firstScrollHome.scss");
/* harmony import */ var _scss_components_firstScrollHome_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_components_firstScrollHome_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands */ "@fortawesome/fontawesome-free-brands");
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_iconBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/iconBtn */ "./components/iconBtn.jsx");
var _jsxFileName = "/home/akshay/projects/test/portfolio_site/components/firstScrollHome.jsx";






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faTwitterSquare"], _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"], _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faGithubSquare"]);
var socialIcons = [{
  icon: _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faGithubSquare"],
  url: "https://github.com/akshayupadhya"
}, {
  icon: _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faTwitterSquare"],
  url: "https://twitter.com/kcification"
}, {
  icon: _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"],
  url: "https://www.linkedin.com/in/akshay-upadhya-68548156/"
}];
var FirstScrollHome = function FirstScrollHome() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "firstScroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Akshay Upadhya"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "job",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "designation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "FrontEnd developer ,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Jigsaw Academy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Bangalore")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, socialIcons.map(function (_ref, index) {
    var icon = _ref.icon,
        url = _ref.url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_iconBtn__WEBPACK_IMPORTED_MODULE_4__["IconBtn"], {
      key: index,
      icon: icon,
      url: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    });
  }))) // </OneScroll>
  ;
};

/***/ }),

/***/ "./components/iconBtn.jsx":
/*!********************************!*\
  !*** ./components/iconBtn.jsx ***!
  \********************************/
/*! exports provided: IconBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBtn", function() { return IconBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/akshay/projects/test/portfolio_site/components/iconBtn.jsx";


var socialIconColor = "#fff";
var IconBtn = function IconBtn(_ref) {
  var url = _ref.url,
      target = _ref.target,
      icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    size: "5x",
    className: className,
    color: socialIconColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/***/ }),

/***/ "./components/routeHandler.jsx":
/*!*************************************!*\
  !*** ./components/routeHandler.jsx ***!
  \*************************************/
/*! exports provided: RouteHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHandler", function() { return RouteHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/akshay/projects/test/portfolio_site/components/routeHandler.jsx";


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

    switch (type) {
      case "up":
        index += 1;
        break;

      case "down":
        index -= 1;
        break;
    }

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
            changeRoute("up"); // scroll down
          else changeRoute("down");
        }

      case "mouse":
        {
          if (tapStart === undefined) {
            if (e.deltaY > 0) changeRoute("up");else changeRoute("down");
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_firstScrollHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/firstScrollHome */ "./components/firstScrollHome.jsx");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_pages_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/pages/index.scss */ "./scss/pages/index.scss");
/* harmony import */ var _scss_pages_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_pages_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_routeHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/routeHandler */ "./components/routeHandler.jsx");
var _jsxFileName = "/home/akshay/projects/test/portfolio_site/pages/index.jsx";






var Home = function Home(_ref) {
  var url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routeHandler__WEBPACK_IMPORTED_MODULE_4__["RouteHandler"], {
    currentRoute: "/",
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    onScroll: function onScroll(e) {
      return console.log(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_firstScrollHome__WEBPACK_IMPORTED_MODULE_1__["FirstScrollHome"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./scss/components/firstScrollHome.scss":
/*!**********************************************!*\
  !*** ./scss/components/firstScrollHome.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/pages/index.scss":
/*!*******************************!*\
  !*** ./scss/pages/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@fortawesome/fontawesome-free-brands":
/*!*******************************************************!*\
  !*** external "@fortawesome/fontawesome-free-brands" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map