exports.ids = [4];
exports.modules = {

/***/ "./components/RankPlot.js":
/*!********************************!*\
  !*** ./components/RankPlot.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RankPlot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "react-plotly.js");
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/RankPlot.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function RankPlot(props) {
  return __jsx(react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    data: [{
      type: 'bar',
      y: props.chartY,
      marker: {
        color: '#C8A2C8',
        line: {
          width: 2.5
        }
      }
    }],
    layout: {
      width: '30vh',
      height: '50vh',
      title: props.ititle
    },
    onHover: data => props.onHover(data),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

/***/ })

};;
//# sourceMappingURL=4.js.map