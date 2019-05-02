webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _front_end_libraries_markdown_viewer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front-end-libraries/markdown-viewer/index */ \"./src/front-end-libraries/markdown-viewer/index.js\");\n/* harmony import */ var _front_end_libraries_javascript_calculator_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front-end-libraries/javascript-calculator/index */ \"./src/front-end-libraries/javascript-calculator/index.js\");\n/* harmony import */ var _front_end_libraries_quote_machine_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front-end-libraries/quote-machine/index */ \"./src/front-end-libraries/quote-machine/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global.css */ \"./src/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\nvar ShowCaseCard = function ShowCaseCard(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    to: props.header,\n    image: props.image,\n    header: props.header,\n    description: props.description\n  });\n};\n\nvar generateShowCaseItems = function generateShowCaseItems(items) {\n  return items.reduce(function (acc, item) {\n    acc.push(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](ShowCaseCard, item));\n    return acc;\n  }, []);\n};\n\nvar Home = function Home(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Group, null, generateShowCaseItems(_constants__WEBPACK_IMPORTED_MODULE_6__[\"showcaseItems\"]));\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n        id: \"content-container\",\n        style: {\n          backgroundColor: \"white\",\n          minHeight: \"100vh\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: \"Home\",\n        exact: true,\n        path: \"/\",\n        component: Home\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: \"markdownViewer\",\n        exact: true,\n        path: \"/markdownViewer\",\n        component: _front_end_libraries_markdown_viewer_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: \"calcualtor\",\n        exact: true,\n        path: \"/calcualtor\",\n        render: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_front_end_libraries_javascript_calculator_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null);\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: \"randomQuoteMachine\",\n        exact: true,\n        path: \"/randomQuoteMachine\",\n        render: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_front_end_libraries_quote_machine_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

})