exports.ids = [3];
exports.modules = {

/***/ "./components/PiePlot.js":
/*!*******************************!*\
  !*** ./components/PiePlot.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PiePlot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "react-plotly.js");
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/PiePlot.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PiePlot(props) {
  return __jsx(react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    data: [{
      type: 'pie',
      values: props.weight,
      labels: props.variable
    }],
    layout: {
      width: 400,
      height: 320,
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
//# sourceMappingURL=3.js.map