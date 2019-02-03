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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./scss/components/oneScroll.scss
var oneScroll = __webpack_require__(10);

// CONCATENATED MODULE: ./components/OneScroll.jsx

// import React from 'react'

var OneScroll_OneScroll = function OneScroll(props) {
  var className = props.className;
  return external_react_default.a.createElement("div", {
    className: "OneScroll ".concat(className ? className : "")
  }, props.children);
};
// EXTERNAL MODULE: ./scss/components/firstScrollHome.scss
var firstScrollHome = __webpack_require__(11);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands"
var fontawesome_free_brands_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(5);

// CONCATENATED MODULE: ./components/iconBtn.jsx


var socialIconColor = "#fff";
var iconBtn_IconBtn = function IconBtn(_ref) {
  var url = _ref.url,
      target = _ref.target,
      icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  console.info(url, size, className);
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







fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faEnvelope"], free_solid_svg_icons_["faKey"], fontawesome_free_brands_["faTwitter"], fontawesome_free_brands_["faGithub"], fontawesome_free_brands_["faLinkedinIn"], fontawesome_free_brands_["faTwitterSquare"], fontawesome_free_brands_["faLinkedin"], fontawesome_free_brands_["faGithubSquare"]);
var socialIcons = [{
  icon: fontawesome_free_brands_["faGithub"],
  url: "https://github.com/akshayupadhya"
}, {
  icon: fontawesome_free_brands_["faTwitterSquare"],
  url: "https://twitter.com/kcification"
}, {
  icon: fontawesome_free_brands_["faLinkedin"],
  url: "https://www.linkedin.com/in/akshay-upadhya-68548156/"
}];
var firstScrollHome_FirstScrollHome = function FirstScrollHome() {
  return external_react_default.a.createElement(OneScroll_OneScroll, {
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
  })));
};
// EXTERNAL MODULE: ./scss/components/secondScrollHome.scss
var secondScrollHome = __webpack_require__(12);

// CONCATENATED MODULE: ./components/secondScrollHome.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faGripHorizontal"], free_solid_svg_icons_["faGripVertical"]);
var secondScrollHome_SecondScrollHome =
/*#__PURE__*/
function (_Component) {
  _inherits(SecondScrollHome, _Component);

  function SecondScrollHome() {
    var _this;

    _classCallCheck(this, SecondScrollHome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SecondScrollHome).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "classNames", ["oneThird", "oneFourth", "half", "fullWidth"]);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "classToggle", function () {
      var currentState = (_this.state.counter + 1) % _this.classNames.length;

      _this.setState({
        counter: currentState
      });
    });

    _this.state = {
      counter: 0
    };
    console.log("re built");
    return _this;
  }

  _createClass(SecondScrollHome, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(OneScroll_OneScroll, {
        className: "SecondScroll"
      }, external_react_default.a.createElement("div", {
        className: "title"
      }, external_react_default.a.createElement("div", null, "Projects"), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: this.state.counter % 2 === 0 ? free_solid_svg_icons_["faGripHorizontal"] : free_solid_svg_icons_["faGripVertical"],
        onClick: this.classToggle,
        size: "2x"
      })), external_react_default.a.createElement("div", {
        className: "projects ".concat(this.classNames[this.state.counter])
      }, _toConsumableArray(Array(8).keys()).map(function (i) {
        return external_react_default.a.createElement("div", {
          className: "project",
          key: i
        }, i);
      })));
    }
  }]);

  return SecondScrollHome;
}(external_react_["Component"]);
;
// EXTERNAL MODULE: ./scss/components/thirdScrollHome.scss
var thirdScrollHome = __webpack_require__(13);

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
      others: ["Tabs over Spaces", "Been in bangalore all my life", "Filter coffee over Chai"]
    }
  };

  var TabChar = function TabChar(match, offset, string) {
    return offset > 0 ? "\n->->" : "";
  };

  return external_react_default.a.createElement(OneScroll_OneScroll, {
    className: "thirdScroll"
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
// EXTERNAL MODULE: ./scss/style.scss
var style = __webpack_require__(14);

// EXTERNAL MODULE: ./scss/pages/index.scss
var pages = __webpack_require__(15);

// CONCATENATED MODULE: ./pages/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Home; });


function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }








var pages_Home =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Home, _Component);

  function Home() {
    pages_classCallCheck(this, Home);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Home).apply(this, arguments));
  }

  pages_createClass(Home, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "home"
      }, external_react_default.a.createElement(firstScrollHome_FirstScrollHome, null), external_react_default.a.createElement(secondScrollHome_SecondScrollHome, null), external_react_default.a.createElement(thidScrollHome_ThirdScrollHome, null));
    }
  }]);

  return Home;
}(external_react_["Component"]);



/***/ })
/******/ ]);