webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/front-end-libraries/javascript-calculator/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/front-end-libraries/javascript-calculator/style.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.btn-size {\n  width: 50px;\n  height: 50px;\n  margin: 0 auto;\n}\n\n.double-width {\n  width: 100px;\n}\n\n.double-height {\n  height: 100px;\n}\n\n.grid {\n  display: grid;\n}\n\n#calculator-container {\n  width: 204px;\n  height: 304px;\n  grid-template-columns: repeat(4, 50px);\n  grid-template-rows: repeat(6, 50px);\n  border-width: 2px;\n  border-style: solid;\n  border-color: black;\n}\n\n#result {\n  grid-column: 1 / span 4;\n  height: 50px;\n}\n\n#btn-0 {\n  grid-column: 1 / span 2;\n}\n\n#btn-equal {\n  grid-row: 5 / span 2;\n  grid-column: 4 / span 1;\n  height: 100px;\n}\n\n#btn-ac {\n  grid-column: 1 / span 2;\n}\n\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _front_end_libraries_markdown_viewer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./front-end-libraries/markdown-viewer/index */ "./src/front-end-libraries/markdown-viewer/index.js");
/* harmony import */ var _front_end_libraries_javascript_calculator_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front-end-libraries/javascript-calculator/index */ "./src/front-end-libraries/javascript-calculator/index.js");
/* harmony import */ var _front_end_libraries_quote_machine_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front-end-libraries/quote-machine/index */ "./src/front-end-libraries/quote-machine/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global.css */ "./src/global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var ShowCaseCard = function ShowCaseCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: props.header,
    image: props.image,
    header: props.header,
    description: props.description
  });
};

var generateShowCaseItems = function generateShowCaseItems(items) {
  return items.reduce(function (acc, item) {
    acc.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ShowCaseCard, item));
    return acc;
  }, []);
};

var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, null, generateShowCaseItems(_constants__WEBPACK_IMPORTED_MODULE_6__["showcaseItems"]));
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        id: "content-container",
        style: {
          backgroundColor: "white",
          minHeight: "100vh"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: "Home",
        exact: true,
        path: "/",
        component: Home
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: "markdownViewer",
        exact: true,
        path: "/markdownViewer",
        component: _front_end_libraries_markdown_viewer_index__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: "calcualtor",
        exact: true,
        path: "/calcualtor",
        component: _front_end_libraries_javascript_calculator_index__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        key: "randomQuoteMachine",
        exact: true,
        path: "/randomQuoteMachine",
        component: _front_end_libraries_quote_machine_index__WEBPACK_IMPORTED_MODULE_5__["default"]
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/front-end-libraries/javascript-calculator/index.js":
/*!****************************************************************!*\
  !*** ./src/front-end-libraries/javascript-calculator/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/front-end-libraries/javascript-calculator/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ResultDisplay = function ResultDisplay(props) {
  var resultStyle = {
    height: "20px",
    color: "yellow",
    textAlign: "right",
    fontFamily: "sans-serif"
  };
  var currentExpressionStyle = {
    height: "30px",
    color: "white",
    textAlign: "right",
    fontFamily: "sans-serif"
  };
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      height: "50px",
      backgroundColor: "black"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: resultStyle
  }, props.result), props.message ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: currentExpressionStyle
  }, props.message) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: currentExpressionStyle
  }, props.currentExpression));
};

var Button = function Button(props) {
  var className = "fluid ui button" + (props.color ? " " + props.color : "");
  var customStyle = {
    height: "100%",
    borderRadius: "0px",
    borderStyle: "solid",
    borderWidth: "1px"
  };
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    style: customStyle,
    className: className,
    onClick: function onClick(e) {
      return props.onClick(e);
    },
    value: props.content
  }, props.content);
};

var defaultState = {
  currentExpression: "0",
  result: "",
  message: ""
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = defaultState;
    _this.updateNumber = _this.updateNumber.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "updateNumber",
    value: function updateNumber(e) {
      console.log(e.target.value);
      var value = e.target.value;
      var result;

      switch (value) {
        case "AC":
          this.setState(function () {
            return defaultState;
          });
          return;

        case "=":
          result = eval(this.state.currentExpression);
          this.setState({
            result: result,
            currentExpression: "0"
          });
          return;

        case "*":
        case "/":
        case "-":
        case "+":
          result = eval(this.state.currentExpression);
          this.setState({
            result: result,
            currentExpression: this.state.currentExpression + e.target.value
          });
          return;

        default:
          if (this.state.currentExpression.length >= 25) {
            this.setState({
              message: "Digit limit is met"
            });
          } else if (e.target.value == "." && this.state.currentExpression.includes(".")) {} else if (this.state.currentExpression === "0") {
            this.setState({
              currentExpression: e.target.value
            });
          } else {
            this.setState({
              currentExpression: this.state.currentExpression + e.target.value
            });
          }

          return;
      }

      if (e.target.value == "AC") {
        this.setState(function () {
          return defaultState;
        });
      } else if (e.target.value == "=") {
        var _result = eval(this.state.currentExpression);

        this.setState({
          result: _result,
          currentExpression: "0"
        });
      } else if (value === "*" || value === "/" || value === "-" || value === "+") {
        var _result2 = eval(this.state.currentExpression);

        this.setState({
          result: _result2,
          currentExpression: this.state.currentExpression + e.target.value
        });
      } else {
        if (this.state.currentExpression.length >= 25) {
          this.setState({
            message: "Digit limit is met"
          });
        } else if (e.target.value == "." && this.state.currentExpression.includes(".")) {} else if (this.state.currentExpression === "0") {
          this.setState({
            currentExpression: e.target.value
          });
        } else {
          this.setState({
            currentExpression: this.state.currentExpression + e.target.value
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "grid",
        id: "calculator-container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        id: "result"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ResultDisplay, {
        currentExpression: this.state.currentExpression,
        result: this.state.result,
        message: this.state.message
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size double-width",
        id: "btn-ac"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "AC",
        color: "teal",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-divide"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "/",
        color: "teal",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-multiply"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "*",
        color: "teal",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-1"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "7",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-2"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "8",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-3"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "9",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-minus"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "-",
        color: "teal",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "4",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "5",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "6",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-plus"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "+",
        color: "teal",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "1",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "2",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "3",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size double-height",
        id: "btn-equal"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "=",
        color: "teal",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size double-width",
        id: "btn-0"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: "0",
        color: "grey",
        onClick: this.updateNumber
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "btn-size",
        id: "btn-dot"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Button, {
        content: ".",
        color: "grey",
        onClick: this.updateNumber
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/front-end-libraries/javascript-calculator/style.css":
/*!*****************************************************************!*\
  !*** ./src/front-end-libraries/javascript-calculator/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/front-end-libraries/javascript-calculator/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/front-end-libraries/javascript-calculator/style.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/front-end-libraries/javascript-calculator/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=main.b0f7be0a82265a125e2b.hot-update.js.map