exports.ids = [2];
exports.modules = {

/***/ "./components/BarPlot.js":
/*!*******************************!*\
  !*** ./components/BarPlot.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarPlot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "react-plotly.js");
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/BarPlot.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function BarPlot(props) {
  return __jsx(react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    data: [{
      type: 'bar',
      x: props.X,
      y: props.Y,
      marker: {
        color: '#74C67A',
        line: {
          width: 2.5
        }
      }
    }],
    layout: {
      width: 320,
      height: 240,
      title: props.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

/***/ })

};;
//# sourceMappingURL=2.js.map