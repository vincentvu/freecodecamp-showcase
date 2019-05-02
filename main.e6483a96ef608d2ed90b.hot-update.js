webpackHotUpdate("main",{

/***/ "./src/front-end-libraries/javascript-calculator/index.js":
/*!****************************************************************!*\
  !*** ./src/front-end-libraries/javascript-calculator/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/front-end-libraries/javascript-calculator/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar ResultDisplay = function ResultDisplay(props) {\n  var resultStyle = {\n    height: \"20px\",\n    color: \"yellow\",\n    textAlign: \"right\",\n    fontFamily: \"sans-serif\"\n  };\n  var currentExpressionStyle = {\n    height: \"30px\",\n    color: \"white\",\n    textAlign: \"right\",\n    fontFamily: \"sans-serif\"\n  };\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    style: {\n      height: \"50px\",\n      backgroundColor: \"black\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    style: resultStyle\n  }, props.result), props.message ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    style: currentExpressionStyle\n  }, props.message) : react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    style: currentExpressionStyle\n  }, props.currentExpression));\n};\n\nvar Button = function Button(props) {\n  var className = \"fluid ui button\" + (props.color ? \" \" + props.color : \"\");\n  var customStyle = {\n    height: \"100%\",\n    borderRadius: \"0px\",\n    borderStyle: \"solid\",\n    borderWidth: \"1px\"\n  };\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", {\n    style: customStyle,\n    className: className,\n    onClick: function onClick(e) {\n      return props.onClick(e);\n    },\n    value: props.content\n  }, props.content);\n};\n\nvar defaultState = {\n  currentExpression: \"0\",\n  result: \"\",\n  message: \"\"\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = defaultState;\n    _this.updateNumber = _this.updateNumber.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"updateNumber\",\n    value: function updateNumber(e) {\n      console.log(e.target.value);\n      var value = e.target.value;\n\n      if (e.target.value == \"AC\") {\n        console.log(\"reset\");\n        this.setState(defaultState);\n      } else if (e.target.value == \"=\") {\n        console.log(\"calculate result\");\n        var result = eval(this.state.currentExpression);\n        this.setState({\n          result: result,\n          currentExpression: result\n        });\n      } else if (value === \"*\" || value === \"/\" || value === \"-\" || value === \"+\") {} else {\n        if (this.state.currentExpression.length >= 25) {\n          this.setState({\n            message: \"Digit limit is met\"\n          });\n        } else if (e.target.value == \".\" && this.state.currentExpression.includes(\".\")) {} else if (this.state.currentExpression === \"0\") {\n          this.setState({\n            currentExpression: e.target.value\n          });\n        } else {\n          this.setState({\n            currentExpression: this.state.currentExpression + e.target.value\n          });\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        style: {\n          direction: \"flex\",\n          justifyContent: \"center\",\n          alignItems: \"center\",\n          height: \"100%\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"grid\",\n        id: \"calculator-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        id: \"result\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](ResultDisplay, {\n        currentExpression: this.state.currentExpression,\n        result: this.state.result,\n        message: this.state.message\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size double-width\",\n        id: \"btn-ac\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"AC\",\n        color: \"teal\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-divide\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"/\",\n        color: \"teal\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-multiply\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"*\",\n        color: \"teal\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-1\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"7\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-2\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"8\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"9\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-minus\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"-\",\n        color: \"teal\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"4\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"5\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"6\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-plus\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"+\",\n        color: \"teal\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"1\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"2\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"3\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size double-height\",\n        id: \"btn-equal\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"=\",\n        color: \"teal\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size double-width\",\n        id: \"btn-0\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \"0\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"btn-size\",\n        id: \"btn-dot\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Button, {\n        content: \".\",\n        color: \"grey\",\n        onClick: this.updateNumber\n      }))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/front-end-libraries/javascript-calculator/index.js?");

/***/ })

})