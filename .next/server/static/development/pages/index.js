module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.css":
/*!****************************!*\
  !*** ./components/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "overClick", e => {
      e.target.style = "cursor:pointer;text-decoration:underline;";
    });

    _defineProperty(this, "handleClicker", e => {
      var disval = e.target.textContent;
      var dbval = e.target.parentElement.getAttribute("title");
      var category = e.target.getAttribute("title");
      this.props.onValueChange(disval, dbval, category);
    });

    _defineProperty(this, "handleClicker2", e => {
      var disval = e.target.textContent;
      var dbval = e.target.parentElement.getAttribute("title");
      var category = e.target.getAttribute("title");
      this.props.onValueChange(disval, dbval, category);
    });

    _defineProperty(this, "handleClick", e => {
      e.target.parentElement.querySelector(".nested").classList.toggle("active");
      e.target.classList.toggle("caret-down"); //this.props.onClick(e.target.parentElement.getAttribute("title"));
    });

    _defineProperty(this, "handleClick2", e => {
      e.target.parentElement.querySelector(".nested").classList.toggle("active");
      e.target.classList.toggle("caret-down");
    });

    _defineProperty(this, "outClick", e => {
      e.target.style = "text-decoration:none";
    });

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/rest/").then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result
      });
    }, // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    var ligen = (item, txt) => {
      return Object.keys(item).map(element => {
        return element === "none" ? item["none"].map(el => __jsx("li", {
          key: el,
          title: txt.concat('|', el),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, __jsx("span", {
          class: "caret",
          title: "demographics",
          onClick: this.handleClicker,
          onMouseOver: this.overClick,
          onMouseOut: this.outClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, el))) : __jsx("li", {
          key: element,
          title: txt !== '' ? txt.concat('|', element) : element,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx("span", {
          class: "caret",
          onClick: this.handleClick,
          onMouseOver: this.overClick,
          onMouseOut: this.outClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, element), __jsx("ul", {
          class: "nested",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, ligen(item[element], txt !== '' ? txt.concat('|', element) : element)));
      });
    };

    var ligen2 = (item, cat) => {
      return Object.keys(item).map(element => {
        return element === "none" ? item[element].map(el => __jsx("li", {
          key: el,
          title: el,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("span", {
          class: "caret",
          title: cat,
          onClick: this.handleClicker2,
          onMouseOver: this.overClick,
          onMouseOut: this.outClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, el))) : __jsx("li", {
          key: element,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("span", {
          class: "caret",
          onClick: this.handleClick,
          onMouseOver: this.overClick,
          onMouseOut: this.outClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, element), __jsx("ul", {
          class: "nested",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, Array.isArray(item[element]) ? item[element].filter(el => el !== " ").map(el => __jsx("li", {
          key: el,
          title: el,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("span", {
          class: "caret",
          title: cat,
          onClick: this.handleClicker2,
          onMouseOver: this.overClick,
          onMouseOut: this.outClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, el))) : ligen2(item[element], cat)));
      });
    };

    const {
      error,
      isLoaded,
      items
    } = this.state;

    if (error) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Error: ", error.message);
    } else if (!isLoaded) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Loading...");
    } else {
      var list1 = ligen(items['dem'], '');
      var list2 = ligen2(items['inc'], 'incident');
      var list3 = ligen2(items['ret'], 'crime');
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("li", {
        title: "demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("span", {
        class: "caret",
        onClick: this.handleClick,
        onMouseOver: this.overClick,
        onMouseOut: this.outClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Demographics"), __jsx("ul", {
        class: "nested",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, list1)), list2, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("span", {
        class: "caret",
        onClick: this.handleClick2,
        onMouseOver: this.overClick,
        onMouseOut: this.outClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, " Crime"), __jsx("ul", {
        class: "nested",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, list3))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Comparator.css":
/*!***********************************!*\
  !*** ./components/Comparator.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Comparator.js":
/*!**********************************!*\
  !*** ./components/Comparator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Comparator_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comparator.css */ "./components/Comparator.css");
/* harmony import */ var _Comparator_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Comparator_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/balaji/hello-next/components/Comparator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import MapsComp from './MapsComp'

const Pieplot = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./PiePlot */ "./components/PiePlot.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./PiePlot */ "./components/PiePlot.js")],
    modules: ['./PiePlot']
  }
});
const MapsComp = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./MapsComp */ "./components/MapsComp.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./MapsComp */ "./components/MapsComp.js")],
    modules: ['./MapsComp']
  }
});

class Comparator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "stylesetter", e => {
      var n = e.target.parentElement.nextSibling;
      var p = e.target.parentElement.previousSibling;
      e.target.parentElement.style = "background:#4157c559";

      while (n) {
        n.style.background = "white";
        n = n.nextSibling;
      }

      while (p) {
        p.style.background = "white";
        p = p.previousSibling;
      }
    });

    _defineProperty(this, "comparator", (val, cat) => {
      if (cat === 'A') {
        this.setState({
          valA: val
        });
      } else {
        this.setState({
          valB: val
        });
      }

      if (this.state.valA !== "" && this.state.valB !== "") {
        var tempArr = [];
        tempArr.push(this.state.valA);
        tempArr.push(this.state.valB);
        this.setState({
          loading: true
        });
        var param = {};
        param['index'] = tempArr;
        console.log(param);
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:5000/rest/comparisor/', {
          params: tempArr
        }).then(result => {
          console.log(result.data.result);
          this.setState({
            compres: result.data.result,
            loading: false
          });
        });
      }
    });

    _defineProperty(this, "handleClick", e => {
      this.stylesetter(e);
      var par = {};
      par['value'] = e.target.textContent;
      console.log(par);
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:5000/rest/pie/', {
        params: par
      }).then(result => {
        this.setState({
          weight1: result.data.pie['weight'],
          variable1: result.data.pie['variable'],
          pieLoading1: true
        });
        this.comparator(par['value'], 'A');
      });
    });

    _defineProperty(this, "handleClick2", e => {
      this.stylesetter(e);
      var par = {};
      par['value'] = e.target.textContent;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:5000/rest/pie/', {
        params: par
      }).then(result => {
        this.setState({
          weight2: result.data.pie['weight'],
          variable2: result.data.pie['variable'],
          pieLoading2: true
        });
        this.comparator(par['value'], 'B');
      });
    });

    this.state = {
      index1: [],
      index2: [],
      weight1: [],
      variable1: [],
      weight2: [],
      variable2: [],
      valA: "",
      valB: "",
      pieLoading1: false,
      pieLoading2: false,
      compres: {},
      loading: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/rest/collector/").then(res => res.json()).then(result => {
      console.log(result.indices['index1']);
      console.log(result.indices['index2']);
      this.setState({
        index1: result.indices['index1'],
        index2: result.indices['index2']
      });
    }, // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["AppProvider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      fullWidth: true,
      separator: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
      oneThird: true,
      primary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "IndexA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Scrollable"], {
      shadow: true,
      style: {
        height: '60vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("ul", {
      id: "myUL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, this.state.index1.map(item => __jsx("li", {
      key: item + 'A',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("span", {
      class: "caret ind1",
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, item))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Proportion Chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, this.state.pieLoading1 ? __jsx(Pieplot, {
      weight: this.state.weight1,
      variable: this.state.variable1,
      title: this.state.gtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }) : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Waiting for the Selection")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
      oneThird: true,
      secondary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "IndexB",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Scrollable"], {
      shadow: true,
      style: {
        height: '60vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("ul", {
      id: "myUL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, this.state.index2.map(item => __jsx("li", {
      key: item + 'B',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("span", {
      class: "caret ind1",
      onClick: this.handleClick2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, item))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Proportion Chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, this.state.pieLoading2 ? __jsx(Pieplot, {
      weight: this.state.weight2,
      variable: this.state.variable2,
      title: this.state.gtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }) : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Waiting for the Selection")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
      oneHalf: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Maps",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx(MapsComp, {
      data: this.state.compres,
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Comparator);

/***/ }),

/***/ "./components/DashBoard.js":
/*!*********************************!*\
  !*** ./components/DashBoard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.js */ "./components/App.js");
/* harmony import */ var _Loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.js */ "./components/Loader.js");
/* harmony import */ var _Interpreter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Interpreter.js */ "./components/Interpreter.js");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Setting_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Setting.js */ "./components/Setting.js");
/* harmony import */ var _MethodSetting_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MethodSetting.js */ "./components/MethodSetting.js");
/* harmony import */ var _Ranger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Ranger.js */ "./components/Ranger.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/balaji/hello-next/components/DashBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // import Maps from './Maps'

const Rankplot = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./RankPlot */ "./components/RankPlot.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./RankPlot */ "./components/RankPlot.js")],
    modules: ['./RankPlot']
  }
});
const Maps = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Maps */ "./components/Maps.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Maps */ "./components/Maps.js")],
    modules: ['./Maps']
  }
});

class DashBoard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "storeDisplay", (disval, dbval, cat) => {
      if (this.state.stat === "generate") {
        const dbdata2 = this.state.dbdata;
        const flag = dbdata2.some(val => val === dbval); //console.log(flag);

        if (!flag) {
          const dbdata = this.state.dbdata;
          dbdata.push(dbval);
          const source = this.state.source;
          source.push(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowUpMinor"]);
          const display = this.state.display;
          display.push(disval);
          const category2 = this.state.category;
          category2.push(cat);
          const src = this.state.src;
          src.push(1);
          const range = this.state.range;
          range.push(0);
          this.setState({
            display: display,
            dbdata: dbdata,
            source: source,
            src: src,
            category: category2,
            range: range
          });
        }
      } else {
        const idbdata = this.state.idbdata;
        const flag2 = idbdata.some(val => val === dbval);

        if (!flag2) {
          const idbdata = this.state.idbdata;
          idbdata.push(dbval);
          const idisplay = this.state.idisplay;
          idisplay.push(disval);
          const icategory = this.state.icategory;
          icategory.push(cat);
          this.setState({
            idbdata: idbdata,
            idisplay: idisplay,
            icategory: icategory
          });
        }
      }
    });

    _defineProperty(this, "clearArray", () => {
      const display = [];
      const dbdata = [];
      const source = [];
      const category = [];
      const src = [];
      const range = [];
      const gresult = {};
      const gdata = [];
      this.setState({
        display: display,
        dbdata: dbdata,
        source: source,
        category: category,
        src: src,
        range: range,
        gresult: gresult,
        gdata: gdata
      });
    });

    _defineProperty(this, "clearArray2", () => {
      const idbdata = [];
      const idisplay = [];
      const icategory = [];
      this.setState({
        idbdata: idbdata,
        idisplay: idisplay,
        icategory: icategory
      });
    });

    _defineProperty(this, "generateArray", () => {
      var res = {};

      for (var i = 0; i < this.state.dbdata.length; i++) {
        res[this.state.dbdata[i]] = this.state.range[i] * this.state.src[i];
      } // console.log(res);


      var cat = "index";

      if (this.state.category[0] == "crime") {
        res['d1'] = this.state.datequery + '/01/01';
        res['d2'] = this.state.datequery + '/12/31';
      }

      if (this.state.category[0] === "incident") {
        cat = "incident";
      }

      if (this.state.category[0] === "demographics") {
        cat = "dindex";
      }

      this.setState({
        ajaxLoading: true,
        ajaxLoading2: true
      });

      if (this.state.method === 'lc') {
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:5000/rest/' + cat + '/', {
          params: res
        }).then(result => {
          //console.log(result.data['resu2']);
          var res = result.data['sums'].sort((a, b) => {
            return a.Index - b.Index;
          });
          var indexWeight = {};
          res.map(r => {
            indexWeight[r.DAUID] = 1;
          });
          var sx = res.map(r => r.DAUID);
          console.log(indexWeight, sx);
          this.setState({
            ajaxLoading: false,
            ajaxLoading2: false,
            gresult: result.data['resu2'],
            gdata: result.data['sums'],
            indexWeight: indexWeight,
            chartX: res.map(a => a.DAUID),
            chartY: res.map(b => b.Index)
          });
        });
      } else {
        console.log("in crimepca method");
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:5000/rest/crimepca/', {
          params: res
        }).then(result => {
          //console.log(result.data['resu2']);
          var res = result.data['sums'].sort((a, b) => {
            return a.Index - b.Index;
          });
          var indexWeight = {};
          res.map(r => {
            indexWeight[r.DAUID] = 1;
          });
          var sx = res.map(r => r.DAUID);
          console.log(indexWeight, sx);
          this.setState({
            ajaxLoading: false,
            ajaxLoading2: false,
            gresult: result.data['resu2'],
            gdata: result.data['sums'],
            indexWeight: indexWeight,
            chartX: res.map(a => a.DAUID),
            chartY: res.map(b => b.Index)
          });
        });
      }
    });

    _defineProperty(this, "interpretArray", () => {
      var result = {};

      for (var j = 0; j < this.state.idbdata.length; j++) {
        result[this.state.idbdata[j]] = 1;
      }

      var cat1 = "interpreter3";

      if (this.state.icategory[0] === "incident") {
        cat1 = "interpreter2";
      }

      if (this.state.icategory[0] === "demographics") {
        cat1 = "interpreter1";
      }

      this.setState({
        ajaxLoading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:5000/rest/' + cat1 + '/', {
        params: result
      }).then(result => {
        var res = result.data['sums'].sort((a, b) => {
          return a.Index - b.Index;
        });
        this.setState({
          ajaxLoading: false,
          iresult: result.data['pred'],
          idata: result.data['sums'],
          chartX: res.map(a => a.DAUID),
          chartY: res.map(b => b.Index)
        });
      });
    });

    _defineProperty(this, "mutateSource", src => {
      this.setState({
        source: src
      });
    });

    _defineProperty(this, "mutateRange", range => {
      this.setState({
        range: range
      });
    });

    _defineProperty(this, "setStat", value => {
      const stat = value;
      this.setState({
        stat: stat
      });
    });

    _defineProperty(this, "methodStat", value => {
      console.log(value, this.state.stat);

      if (value === "PCA") {
        this.setState({
          method: 'pca'
        });
      } else {
        this.setState({
          method: 'lc'
        });
      }
    });

    _defineProperty(this, "handleHover", data => {
      console.log(data.points[0].value);
      console.log(data.points[0].x);
      console.log(this.state.chartX[data.points[0].x]);
      var cdauid = this.state.chartX[data.points[0].x];
      var indexWeight = this.state.indexWeight;

      for (var key in indexWeight) {
        indexWeight[key] = 1;

        if (key == cdauid) {
          indexWeight[key] = 6;
        }
      }

      this.setState({
        indexWeight: indexWeight
      });
      console.log(this.state.indexWeight[cdauid]);
    });

    _defineProperty(this, "handleDateChange", value => {
      this.setState({
        datequery: value
      });
      var res2 = {};
      res2['d1'] = this.state.datequery + '/01/01';
      res2['d2'] = this.state.datequery + '/12/31';
      console.log(res2);
    });

    this.state = {
      idisplay: [],
      idbdata: [],
      icategory: [],
      display: [],
      dbdata: [],
      source: [],
      category: [],
      src: [],
      range: [],
      gendic: [],
      gresult: {},
      iresult: {},
      gdata: [],
      idata: [],
      stat: "generate",
      chartX: [],
      chartY: [],
      ajaxLoading: false,
      ajaxLoading2: true,
      indexWeight: {},
      method: 'lc',
      datequery: 2005
    };
  }

  componentDidMount() {} // handleClick(a,b){
  //    console.log(a,b);
  // }


  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["AppProvider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      fullWidth: true,
      separator: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
      secondary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Indicators",
      actions: [{
        content: 'Manage'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
      variation: "subdued",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, "Choose Indicators"), __jsx(_Setting_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: value => this.setStat(value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }), __jsx(_MethodSetting_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: methodvalue => this.methodStat(methodvalue),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
      variation: "subdued",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, "Date Period for Indicators"), __jsx(_Ranger_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      min: 2005,
      max: 2017,
      onChange: value => this.handleDateChange(value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      title: "Items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Scrollable"], {
      shadow: true,
      style: {
        height: '40vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, __jsx(_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onValueChange: (disval, dbval, cat) => this.storeDisplay(disval, dbval, cat),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
      primary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, __jsx(Maps, {
      genres: this.state.gresult,
      gendata: this.state.gdata,
      ajaxload: this.state.ajaxLoading,
      intres: this.state.iresult,
      intdata: this.state.idata,
      iweight: this.state.indexWeight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Selector",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      spacing: "loose",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      primary: true,
      onClick: this.generateArray,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, "Generate"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      primary: true,
      onClick: this.clearArray,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, "Clear"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Scrollable"], {
      shadow: true,
      style: {
        height: '20vh',
        width: '45vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, __jsx(_Loader_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: this.state.display,
      src: this.state.source,
      cat: this.state.category,
      source: this.state.src,
      range: this.state.range,
      onSourceChange: src => this.mutateSource(src),
      onRangeChange: range => this.mutateRange(range),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Interpreters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      spacing: "loose",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      primary: true,
      onClick: this.interpretArray,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, "Interpret"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      primary: true,
      onClick: this.clearArray2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    }, "clear"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Scrollable"], {
      shadow: true,
      style: {
        height: '20vh',
        width: '45vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, __jsx(_Interpreter_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: this.state.idisplay,
      cat: this.state.icategory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: "Chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Scrollable"], {
      shadow: true,
      style: {
        height: '32vh',
        width: '59vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, !this.state.ajaxLoading2 ? __jsx(Rankplot, {
      chartY: this.state.chartY,
      ititle: this.state.ititle,
      onHover: data => this.handleHover(data),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }) : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, "Waiting for the load"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DashBoard);

/***/ }),

/***/ "./components/FrameBoard.js":
/*!**********************************!*\
  !*** ./components/FrameBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrameBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Comparator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comparator.js */ "./components/Comparator.js");
/* harmony import */ var _DashBoard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashBoard.js */ "./components/DashBoard.js");
var _jsxFileName = "/home/balaji/hello-next/components/FrameBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function FrameBoard() {
  const defaultState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    emailFieldValue: 'balajid@dal.ca',
    nameFieldValue: 'Logged in'
  });
  const skipToContentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: toastActive,
    1: setToastActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: userMenuActive,
    1: setUserMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: mobileNavigationActive,
    1: setMobileNavigationActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: storeName,
    1: setStoreName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState.current.nameFieldValue);
  const toggleToastActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setToastActive(toastActive => !toastActive), []);
  const toggleUserMenuActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setUserMenuActive(userMenuActive => !userMenuActive), []);
  const toggleMobileNavigationActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setMobileNavigationActive(mobileNavigationActive => !mobileNavigationActive), []);
  const toggleIsLoading = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsLoading(() => false), []);
  const toggleIsLoading2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsLoading(() => true), []);
  const toastMarkup = toastActive ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    onDismiss: toggleToastActive,
    content: "Changes saved",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : null;
  const userMenuActions = [{
    items: [{
      content: 'Account'
    }]
  }];

  const userMenuMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"].UserMenu, {
    actions: userMenuActions,
    name: "VVALAB",
    detail: storeName,
    initials: "D",
    open: userMenuActive,
    onToggle: toggleUserMenuActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  });

  const topBarMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"], {
    showNavigationToggle: true,
    userMenu: userMenuMarkup,
    onNavigationToggle: toggleMobileNavigationActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  });

  const navigationMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Navigation"], {
    location: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Navigation"].Section, {
    separator: true,
    title: "HRM",
    items: [{
      label: 'Index',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["HomeMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Index Compare',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["DataVisualizationMajorMonotone"],
      onClick: toggleIsLoading2
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }));

  const loadingMarkup = null;

  const actualPageMarkup = __jsx(_DashBoard_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  });

  const loadingPageMarkup = __jsx(_Comparator_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  });

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;
  const theme = {
    colors: {
      topBar: {
        background: '#357997'
      }
    },
    logo: {
      width: 124,
      topBarSource: 'https://dalu-my.sharepoint.com/:i:/r/personal/bl977277_dal_ca/Documents/HRM.png?csf=1&e=NVVU6T',
      contextualSaveBarSource: 'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://localhost:2000',
      accessibilityLabel: 'VVA LAB'
    }
  };
  return __jsx("div", {
    style: {
      height: '500px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["AppProvider"], {
    theme: theme,
    i18n: {
      Polaris: {
        Avatar: {
          label: 'Avatar',
          labelWithInitials: 'Avatar with initials {initials}'
        },
        ContextualSaveBar: {
          save: 'Save',
          discard: 'Discard'
        },
        TextField: {
          characterCount: '{count} characters'
        },
        TopBar: {
          toggleMenuLabel: 'Toggle menu',
          SearchField: {
            clearButtonLabel: 'Clear',
            search: 'Search'
          }
        },
        Modal: {
          iFrameTitle: 'body markup'
        },
        Frame: {
          skipToContent: 'Skip to content',
          Navigation: {
            closeMobileNavigationLabel: 'Close navigation'
          }
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    topBar: topBarMarkup,
    navigation: navigationMarkup,
    showMobileNavigation: mobileNavigationActive,
    onNavigationDismiss: toggleMobileNavigationActive,
    skipToContentTarget: skipToContentRef.current,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, loadingMarkup, pageMarkup)));
}

/***/ }),

/***/ "./components/Interpreter.js":
/*!***********************************!*\
  !*** ./components/Interpreter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/Interpreter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Interpreter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: []
    };
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.props.data !== oldState.data && this.props.cat !== oldState.category) {
      console.log(this.props.data, this.props.cat);
      this.setState({
        data: this.props.data,
        category: this.props.cat
      });
      console.log(this.state.data);
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Waiting for the contents");
    }

    console.log(this.state.data);
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      vertical: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, this.state.data.map(it => __jsx("p", {
      key: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, it))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Interpreter);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Severity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Severity.js */ "./components/Severity.js");
var _jsxFileName = "/home/balaji/hello-next/components/Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Loader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "changeSource", i => {
      var source = this.state.source;
      var src = this.state.src;

      if (source[i] === _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpMinor"]) {
        source[i] = _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowDownMinor"];
        src[i] = -1;
      } else {
        source[i] = _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpMinor"];
        src[i] = 1;
      }

      this.setState({
        source: source,
        src: src
      });
      this.props.onSourceChange(this.state.src);
    });

    _defineProperty(this, "onRangeChange", (value, index) => {
      var range = this.state.range;
      range[index] = value;
      this.setState({
        range: range
      });
      this.props.onRangeChange(this.state.range);
    });

    this.state = {
      data: [],
      source: [],
      src: [],
      category: [],
      range: []
    };
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.props.data !== oldState.data && this.props.src !== oldState.source) {
      this.setState({
        data: this.props.data,
        source: this.props.src,
        category: this.props.cat,
        src: this.props.source,
        range: this.props.range
      });
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Waiting for the contents");
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.state.data.map((item, index) => __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      distribution: "equalSpacing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("p", {
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, item), __jsx(_Severity_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attr: item,
      cat: this.state.category[index],
      setRange: ivalue => this.onRangeChange(ivalue, index),
      onChange: value => this.onRangeChange(value, index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: this.state.source[index],
      onClick: () => this.changeSource(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/MethodSetting.js":
/*!*************************************!*\
  !*** ./components/MethodSetting.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MethodSetting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/MethodSetting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MethodSetting(props) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('generate');
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((_checked, newValue) => {
    setValue(newValue);
    props.onClick(newValue);
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "PCA",
    checked: value === 'PCA',
    id: "PCA",
    name: "acc",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "linear combination",
    id: "lc",
    name: "lc",
    checked: value === 'lc',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Ranger.js":
/*!******************************!*\
  !*** ./components/Ranger.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ranger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/Ranger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Ranger(props) {
  const {
    0: rangeValue,
    1: setRangeValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.min);
  const handleRangeSliderChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setRangeValue(value);
    props.onChange(value);
  }, []);
  const suffixStyles = {
    minWidth: '24px',
    textAlign: 'right'
  };
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RangeSlider"], {
    min: props.min,
    max: props.max,
    value: rangeValue,
    onChange: handleRangeSliderChange,
    output: true,
    suffix: __jsx("p", {
      style: suffixStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, rangeValue),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/Setting.js":
/*!*******************************!*\
  !*** ./components/Setting.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Setting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/balaji/hello-next/components/Setting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Setting(props) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('generate');
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((_checked, newValue) => {
    setValue(newValue);
    props.onClick(newValue);
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Generate",
    checked: value === 'generate',
    id: "generate",
    name: "accounts",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Interpret",
    id: "interpret",
    name: "accounts",
    checked: value === 'interpret',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Severity.js":
/*!********************************!*\
  !*** ./components/Severity.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ranger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ranger.js */ "./components/Ranger.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/balaji/hello-next/components/Severity.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // function RangeSliderExample() {
//     const [rangeValue, setRangeValue] = useState(32);
//     const handleRangeSliderChange = useCallback(
//       (value) => setRangeValue(value),
//       [],
//     );
//     return (
//       <Card sectioned title="Background color">
//         <RangeSlider
//           label="Opacity percentage"
//           value={rangeValue}
//           onChange={handleRangeSliderChange}
//           output
//         />
//       </Card>
//     );
//   }

class Severity extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      min: 0,
      max: 0
    };
  }

  componentDidMount() {
    var trans = [];
    trans.push(this.props.attr);
    console.log(trans);
    console.log("***************", this.props.cat);

    if (this.props.cat === "crime") {
      console.log("in");
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:5000/rest/severity/', {
        params: {
          param2: trans
        }
      }).then(result => {
        console.log(result.data['min']);
        const min = result.data['min'];
        const max = result.data['max'];
        this.props.setRange(max);
        this.setState({
          isLoaded: true,
          min: min,
          max: max
        });
      });
    } else {
      this.props.setRange(100);
      this.setState({
        isLoaded: true,
        min: 0,
        max: 100
      });
    }
  }

  render() {
    if (this.state.isLoaded) {
      return __jsx(_Ranger_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        min: 0,
        max: this.state.max,
        onChange: value => this.props.onChange(value),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      });
    }

    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "error");
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Severity);

/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FrameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrameBoard */ "./components/FrameBoard.js");
var _jsxFileName = "/home/balaji/hello-next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import L from 'leaflet';
// L.Icon.Default.imagePath = '.';
// // OR
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });
// const DynamicPlot = dynamic(import('../components/FrameBoard'),{
//    ssr: false
// })

function Index() {
  return __jsx("div", {
    id: "root",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_FrameBoard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/balaji/hello-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-leaflet":
/*!********************************!*\
  !*** external "react-leaflet" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "react-plotly.js":
/*!**********************************!*\
  !*** external "react-plotly.js" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-plotly.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map