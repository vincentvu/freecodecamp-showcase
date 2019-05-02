webpackHotUpdate("main",{

/***/ "./src/front-end-libraries/quote-machine/index.js":
/*!********************************************************!*\
  !*** ./src/front-end-libraries/quote-machine/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/front-end-libraries/quote-machine/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./src/front-end-libraries/quote-machine/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * Math.floor(max));\n}\n\nvar QuoteText =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(QuoteText, _React$Component);\n\n  function QuoteText() {\n    _classCallCheck(this, QuoteText);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(QuoteText).apply(this, arguments));\n  }\n\n  _createClass(QuoteText, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        id: \"text\"\n      }, this.props.text);\n    }\n  }]);\n\n  return QuoteText;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nvar AuthorText =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(AuthorText, _React$Component2);\n\n  function AuthorText() {\n    _classCallCheck(this, AuthorText);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(AuthorText).apply(this, arguments));\n  }\n\n  _createClass(AuthorText, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        id: \"author\"\n      }, this.props.text);\n    }\n  }]);\n\n  return AuthorText;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nvar retrieveQuotes = function retrieveQuotes() {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      return resolve(_constants__WEBPACK_IMPORTED_MODULE_4__[\"quotes\"]);\n    }, 1000);\n  });\n};\n\nvar Buttons =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(Buttons, _React$Component3);\n\n  function Buttons() {\n    _classCallCheck(this, Buttons);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Buttons).apply(this, arguments));\n  }\n\n  _createClass(Buttons, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        id: \"buttons\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", {\n        className: \"ui twitter button blue\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"i\", {\n        className: \"twitter icon\"\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", {\n        className: \"ui tumblr button blue\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"i\", {\n        className: \"tumblr icon\"\n      })), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"button\", {\n        className: \"ui button blue\",\n        id: \"new-quote\",\n        onClick: function onClick() {\n          return _this.props.newQuoteFnc();\n        }\n      }, \"New Quote\"));\n    }\n  }]);\n\n  return Buttons;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nvar QuoteBox =\n/*#__PURE__*/\nfunction (_React$Component4) {\n  _inherits(QuoteBox, _React$Component4);\n\n  function QuoteBox() {\n    _classCallCheck(this, QuoteBox);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(QuoteBox).apply(this, arguments));\n  }\n\n  _createClass(QuoteBox, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        id: \"quote-box\"\n      }, this.props.quoteText, this.props.authorText, this.props.buttons);\n    }\n  }]);\n\n  return QuoteBox;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component5) {\n  _inherits(App, _React$Component5);\n\n  function App(props) {\n    var _this2;\n\n    _classCallCheck(this, App);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this2.state = {\n      quotes: [],\n      choosenQuote: undefined,\n      isLoading: true\n    };\n    _this2.componentDidMount = _this2.componentDidMount.bind(_assertThisInitialized(_this2));\n    _this2.pickRandomQuote = _this2.pickRandomQuote.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      retrieveQuotes().then(function (response) {\n        _this3.setState({\n          quotes: response.quotes,\n          isLoading: false\n        });\n\n        _this3.pickRandomQuote();\n      })[\"catch\"](function (error) {\n        console.log(error);\n        this.setState({\n          isError: true\n        });\n      });\n    }\n  }, {\n    key: \"pickRandomQuote\",\n    value: function pickRandomQuote() {\n      var len = this.state.quotes && this.state.quotes.length || 0;\n      console.log(\"len\", len);\n\n      if (len > 0) {\n        this.setState({\n          quote: this.state.quotes[getRandomInt(len) - 1]\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"center\",\n          alignItems: \"center\"\n        }\n      }, this.state.isLoading || !this.state.quote ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"], {\n        active: true\n      }) : react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](QuoteBox, {\n        quoteText: react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](QuoteText, {\n          text: this.state.quote.quote\n        }),\n        authorText: react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](AuthorText, {\n          text: this.state.quote.author\n        }),\n        buttons: react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Buttons, {\n          newQuoteFnc: this.pickRandomQuote\n        })\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/front-end-libraries/quote-machine/index.js?");

/***/ })

})