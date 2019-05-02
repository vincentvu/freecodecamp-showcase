webpackHotUpdate("main",{

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
  var expressionStyle = {
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
    style: expressionStyle
  }, props.message) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: expressionStyle
  }, props.expression + props.operator + props.number));
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
  expression: "",
  operator: "",
  number: "0",
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
      var value = e.target.value;
      var result;
      var expression;

      switch (value) {
        case "AC":
          this.setState(function () {
            return defaultState;
          });
          return;

        case "=":
          expression = this.state.expression + this.state.operator + this.state.number;
          result = eval(expression);
          this.setState(function () {
            return Object.assign({}, defaultState, result);
          });
          return;

        case "*":
        case "/":
        case "-":
        case "+":
          expression = this.state.expression + this.state.operator + this.state.number;
          result = eval(expression);
          this.setState(function () {
            return {
              operator: value,
              result: result,
              expression: expression,
              number: "0"
            };
          });
          return;

        default:
          if (this.state.expression.length >= 25) {
            this.setState({
              message: "Digit limit is met"
            });
          } else if (e.target.value == "." && this.state.expression.includes(".")) {} else if (this.state.number === "0") {
            this.setState({
              number: e.target.value
            });
          } else {
            this.setState({
              number: this.state.number + e.target.value
            });
          }

          return;
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
        expression: this.state.expression,
        operator: this.state.operator,
        number: this.state.number,
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



/***/ })

})
//# sourceMappingURL=main.dc57f66c550bef61dd69.hot-update.js.map