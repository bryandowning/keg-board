(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/BeerRow.js":
/*!*******************************!*\
  !*** ./components/BeerRow.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jwhite/Repositories/raspberry-pints/ui-server/components/BeerRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const srmToRGBLookupTable = ["#FFE699", "#FFE699", "#FFD878", "#FFCA5A", "#FFBF42", "#FBB123", "#F8A600", "#F39C00", "#EA8F00", "#E58500", "#DE7C00", "#D77200", "#CF6900", "#CB6200", "#C35900", "#BB5100", "#B54C00", "#B04500", "#A63E00", "#A13700", "#9B3200", "#952D00", "#8E2900", "#882300", "#821E00", "#7B1A00", "#771900", "#701400", "#6A0E00", "#660D00", "#5E0B00", "#5A0A02", "#600903", "#520907", "#4C0505", "#470606", "#420607", "#3D0708", "#370607", "#2D0607", "#1F0506"];

const BeerRow = props => {
  const beer = props.beer;
  var srmNumber = beer.srm;

  if (beer.srm < 1) {
    srmNumber = 1;
  } else if (beer.srm > 40) {
    srmNumber = 40;
  }

  const srmBackgroundColor = srmNumber !== "" ? srmToRGBLookupTable[Math.round(srmNumber)] : srmToRGBLookupTable[1]; // TODO: right way to check empty string?

  const srmTextColor = srmNumber > 13 ? "white" : "default";
  const bugu = beer.og > 1 ? (beer.ibu / ((beer.og - 1) * 1000)).toFixed(2) : "0.00"; // TODO: format to two decimal places

  var calFromAlc = 1881.22 * (beer.fg * (beer.og - beer.fg)) / (1.775 - beer.og);
  var calFromCarbs = 3550.0 * beer.fg * (0.1808 * beer.og + 0.8192 * beer.fg - 1.0004);

  if (beer.og === 1 && beer.fg === 1) {
    calFromAlc = 0;
    calFromCarbs = 0;
  }

  const calories = (calFromAlc + calFromCarbs).toFixed();
  const abv = (beer.og - beer.fg) * 131;
  const beerPoured = ((beer.startAmount - beer.remainAmount) * 128).toFixed();
  const beerLeft = (beer.remainAmount * 128).toFixed();
  return __jsx("tr", {
    style: {
      backgroundColor: srmBackgroundColor,
      color: srmTextColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, beer.tapNumber), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, beer.og, " OG"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, beer.srm, " SRM"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, bugu, " BU:GU"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, beer.ibu, " IBU"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, beer.beername), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, beer.style), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, beer.notes), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, calories, " kCal"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, abv.toFixed(1), "% ABV"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, beerPoured, " oz"), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, beerLeft, " oz"));
};

/* harmony default export */ __webpack_exports__["default"] = (BeerRow);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jwhite/Repositories/raspberry-pints/ui-server/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => {
  return __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, "Jeremy's Beers");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjwhite%2FRepositories%2Fraspberry-pints%2Fui-server%2Fpages%2Findex.js!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjwhite%2FRepositories%2Fraspberry-pints%2Fui-server%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_BeerRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BeerRow */ "./components/BeerRow.js");
var _jsxFileName = "/Users/jwhite/Repositories/raspberry-pints/ui-server/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  const beers = [{
    id: 1,
    beername: "Cherrywood Smoked Lager",
    style: "Rauchbier",
    notes: "Smokey, amber German style of lager",
    og: 1.050,
    fg: 1.017,
    srm: 14,
    ibu: 22,
    startAmount: 5,
    amountPoured: 0.2,
    remainAmount: 4.8,
    tapNumber: 1
  }, {
    id: 2,
    beername: "EMPTY",
    style: "N/A",
    notes: "",
    og: 1.0,
    fg: 1.0,
    srm: 0,
    ibu: 0,
    startAmount: 0,
    amountPoured: 0,
    remainAmount: 0,
    tapNumber: 2
  }, {
    id: 3,
    beername: "Modified Janet's Brown",
    style: "American Brown Ale",
    notes: "Slightly modified Janet's Brown recipe, adapted for liquid malt extract and a less agressive hop schedule",
    og: 1.062,
    fg: 1.012,
    srm: 19,
    ibu: 31,
    startAmount: 5,
    amountPoured: 1,
    remainAmount: 4,
    tapNumber: 3
  }, {
    id: 4,
    beername: "Old Rasputin Clone",
    style: "Imperial Stout",
    notes: "Inspired by the Old Rasputin recipe, with slightly modified grain bill",
    og: 1.096,
    fg: 1.028,
    srm: 31,
    ibu: 29,
    startAmount: 5,
    amountPoured: 0.1,
    remainAmount: 4.9,
    tapNumber: 4
  }, {
    id: 5,
    beername: "EMPTY",
    style: "N/A",
    notes: "",
    og: 1.0,
    fg: 1.0,
    srm: 0,
    ibu: 0,
    startAmount: 0,
    amountPoured: 0,
    remainAmount: 0,
    tapNumber: 5
  }];
  const rows = beers.map(beer => __jsx(_components_BeerRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: beer.id,
    beer: beer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 36
    }
  }));
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Tap #"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Gravity"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Color"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Balance"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Bitterness"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Beer name"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Style"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Tasting notes"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Calories"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Alcohol"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Poured"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Remaining"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, rows)));
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fjwhite%2FRepositories%2Fraspberry-pints%2Fui-server%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fjwhite%2FRepositories%2Fraspberry-pints%2Fui-server%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fjwhite%2FRepositories%2Fraspberry-pints%2Fui-server%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map