webpackHotUpdate("main",{

/***/ "./src/front-end-libraries/markdown-viewer/index.js":
/*!**********************************************************!*\
  !*** ./src/front-end-libraries/markdown-viewer/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.js\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar TAB_MODE = false;\nvar sampleMarkdownText = \"# Welcome to my React Markdown Previewer!\\n\\n## This is a sub-heading...\\n### And here's some other cool stuff:\\n\\nHeres some code, `<div></div>`, between 2 backticks.\\n\\n```\\n// this is multi-line code:\\n\\nfunction anotherExample(firstLine, lastLine) {\\n  if (firstLine == '```' && lastLine == '```') {\\n    return multiLineCode;\\n  }\\n}\\n```\\n\\nYou can also make text **bold**... whoa!\\nOr _italic_.\\nOr... wait for it... **_both!_**\\nAnd feel free to go crazy ~~crossing stuff out~~.\\n\\nThere's also [links](https://www.freecodecamp.com), and\\n> Block Quotes!\\n\\nAnd if you want to get really crazy, even tables:\\n\\nWild Header | Crazy Header | Another Header?\\n------------ | ------------- | -------------\\nYour content can | be here, and it | can be here....\\nAnd here. | Okay. | I think we get it.\\n\\n- And of course there are lists.\\n  - Some are bulleted.\\n     - With different indentation levels.\\n        - That look like this.\\n\\n\\n1. And there are numbererd lists too.\\n1. Use just 1s if you want!\\n1. But the list goes on...\\n- Even if you use dashes or asterisks.\\n* And last but not least, let's not forget embedded images:\\n\\n![React Logo w/ Text](https://goo.gl/Umyytc)\\n\";\n\nvar Editor =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Editor, _React$Component);\n\n  function Editor() {\n    _classCallCheck(this, Editor);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Editor).apply(this, arguments));\n  }\n\n  _createClass(Editor, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"TextArea\"], {\n        id: \"editor\",\n        rows: \"10\",\n        onChange: function onChange(event, data) {\n          return _this.props.onUpdate(data.value);\n        },\n        value: this.props.markdownText\n      });\n    }\n  }]);\n\n  return Editor;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Preview =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Preview, _React$Component2);\n\n  function Preview() {\n    _classCallCheck(this, Preview);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Preview).apply(this, arguments));\n  }\n\n  _createClass(Preview, [{\n    key: \"createMarkup\",\n    value: function createMarkup(htmlText) {\n      return {\n        __html: htmlText\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      marked__WEBPACK_IMPORTED_MODULE_1__[\"setOptions\"]({\n        gfm: true,\n        breaks: true\n      });\n      var htmlText = marked__WEBPACK_IMPORTED_MODULE_1__(this.props.markdownText);\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        id: \"preview\",\n        dangerouslySetInnerHTML: this.createMarkup(htmlText)\n      });\n    }\n  }]);\n\n  return Preview;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(App, _React$Component3);\n\n  function App(props) {\n    var _this2;\n\n    _classCallCheck(this, App);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this2.switchToEditorTab = _this2.switchToEditorTab.bind(_assertThisInitialized(_this2));\n    _this2.switchToPreviewTab = _this2.switchToPreviewTab.bind(_assertThisInitialized(_this2));\n    _this2.updateMarkdownText = _this2.updateMarkdownText.bind(_assertThisInitialized(_this2));\n    _this2.state = {\n      activeTab: \"editor\",\n      markdownText: sampleMarkdownText\n    };\n    return _this2;\n  }\n\n  _createClass(App, [{\n    key: \"switchToEditorTab\",\n    value: function switchToEditorTab() {\n      this.setState({\n        activeTab: \"editor\"\n      });\n    }\n  }, {\n    key: \"switchToPreviewTab\",\n    value: function switchToPreviewTab() {\n      this.setState({\n        activeTab: \"preview\"\n      });\n    }\n  }, {\n    key: \"updateMarkdownText\",\n    value: function updateMarkdownText(text) {\n      console.log(\"text:\", text);\n      this.setState({\n        markdownText: text\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Editor, {\n        markdownText: this.state.markdownText,\n        onUpdate: this.updateMarkdownText\n      }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Preview, {\n        markdownText: this.state.markdownText\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/front-end-libraries/markdown-viewer/index.js?");

/***/ })

})