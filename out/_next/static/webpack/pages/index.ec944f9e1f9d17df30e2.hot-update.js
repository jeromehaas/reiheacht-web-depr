webpackHotUpdate_N_E("pages/index",{

/***/ "./components/partials/MainTextBlock.tsx":
/*!***********************************************!*\
  !*** ./components/partials/MainTextBlock.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/text/Text */ \"./components/text/Text.tsx\");\n/* harmony import */ var _components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/Button */ \"./components/buttons/Button.tsx\");\n/* harmony import */ var _components_shapes_HorizontalLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/shapes/HorizontalLine */ \"./components/shapes/HorizontalLine.tsx\");\n/* harmony import */ var _components_animations_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/animations/Carousel */ \"./components/animations/Carousel.tsx\");\n/* harmony import */ var _components_layout_Space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/layout/Space */ \"./components/layout/Space.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/partials/MainTextBlock.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar MoveDownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"MainTextBlock__MoveDownWrapper\",\n  componentId: \"sc-1rakz4j-0\"\n})([\"top:-60px;opacity:0;animation:slideDown  1s forwards 3s;position:relative;@keyframes slideDown{0%{top:-60px;opacity:0.1;}100%{top:0px;opacity:1;}}\"]);\n_c = MoveDownWrapper;\n\nvar MainTextBlock = function MainTextBlock(_ref) {\n  var content = _ref.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MoveDownWrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_text_Text__WEBPACK_IMPORTED_MODULE_2__[\"H1\"], {\n      children: [content.title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_animations_Carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        items: content.carouselItems\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 24\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_shapes_HorizontalLine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      delay: \"7s\",\n      animated: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_text_Text__WEBPACK_IMPORTED_MODULE_2__[\"P\"], {\n      size: \"big\",\n      animated: true,\n      delay: \"7s\",\n      children: content.text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Space__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      height: \"60px\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this), content.buttons.map(function (button) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_buttons_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        type: \"anchor\",\n        target: button.target,\n        text: button.text,\n        animate: true,\n        delay: button.delay\n      }, button.text, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = MainTextBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainTextBlock);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MoveDownWrapper\");\n$RefreshReg$(_c2, \"MainTextBlock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9NYWluVGV4dEJsb2NrLnRzeD85YzU3Il0sIm5hbWVzIjpbIk1vdmVEb3duV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk1haW5UZXh0QmxvY2siLCJjb250ZW50IiwidGl0bGUiLCJjYXJvdXNlbEl0ZW1zIiwidGV4dCIsImJ1dHRvbnMiLCJtYXAiLCJidXR0b24iLCJ0YXJnZXQiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBKQUFyQjtLQUFNRixlOztBQXFCTixJQUFNRyxhQUE2QyxHQUFHLFNBQWhEQSxhQUFnRDtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLHNCQUNwRCxxRUFBQyxlQUFEO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBQSxpQkFBS0EsT0FBTyxDQUFDQyxLQUFiLGVBQW1CLHFFQUFDLHVFQUFEO0FBQVUsYUFBSyxFQUFFRCxPQUFPLENBQUNFO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyx5RUFBRDtBQUFnQixXQUFLLEVBQUMsSUFBdEI7QUFBMkIsY0FBUTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyx1REFBRDtBQUFHLFVBQUksRUFBQyxLQUFSO0FBQWMsY0FBUSxNQUF0QjtBQUF1QixXQUFLLEVBQUMsSUFBN0I7QUFBQSxnQkFBbUNGLE9BQU8sQ0FBQ0c7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBTyxZQUFNLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFLR0gsT0FBTyxDQUFDSSxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxNQUFEO0FBQUEsMEJBQ25CLHFFQUFDLGtFQUFEO0FBQTBCLFlBQUksRUFBQyxRQUEvQjtBQUF3QyxjQUFNLEVBQUVBLE1BQU0sQ0FBQ0MsTUFBdkQ7QUFBK0QsWUFBSSxFQUFFRCxNQUFNLENBQUNILElBQTVFO0FBQWtGLGVBQU8sTUFBekY7QUFBMEYsYUFBSyxFQUFFRyxNQUFNLENBQUNFO0FBQXhHLFNBQWFGLE1BQU0sQ0FBQ0gsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQjtBQUFBLEtBQXBCLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG9EO0FBQUEsQ0FBdEQ7O01BQU1KLGE7QUFZU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhcnRpYWxzL01haW5UZXh0QmxvY2sudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEgxLCBQIH0gZnJvbSAnQC9jb21wb25lbnRzL3RleHQvVGV4dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0J1dHRvbic7XG5pbXBvcnQgSG9yaXpvbnRhbExpbmUgZnJvbSAnQC9jb21wb25lbnRzL3NoYXBlcy9Ib3Jpem9udGFsTGluZSc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL2FuaW1hdGlvbnMvQ2Fyb3VzZWwnO1xuaW1wb3J0IFNwYWNlIGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvU3BhY2UnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE1vdmVEb3duV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHRvcDogLTYwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duICAxcyBmb3J3YXJkcyAzcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgICAwJSB7dG9wOiAtNjBweDsgb3BhY2l0eTogMC4xOyB9XG4gICAgMTAwJSB7dG9wOiAwcHg7IG9wYWNpdHk6IDE7IH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29udGVudDoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYnV0dG9uczogYW55W107XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNhcm91c2VsSXRlbXM6IHN0cmluZ1tdXG4gIH1cbn1cblxuY29uc3QgTWFpblRleHRCbG9jazogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgY29udGVudCB9KSA9PiAoXG4gIDxNb3ZlRG93bldyYXBwZXI+XG4gICAgPEgxPntjb250ZW50LnRpdGxlfTxDYXJvdXNlbCBpdGVtcz17Y29udGVudC5jYXJvdXNlbEl0ZW1zfSAvPjwvSDE+XG4gICAgPEhvcml6b250YWxMaW5lIGRlbGF5PVwiN3NcIiBhbmltYXRlZCAvPlxuICAgIDxQIHNpemU9XCJiaWdcIiBhbmltYXRlZCBkZWxheT1cIjdzXCI+e2NvbnRlbnQudGV4dH08L1A+XG4gICAgPFNwYWNlIGhlaWdodD1cIjYwcHhcIiAvPlxuICAgIHtjb250ZW50LmJ1dHRvbnMubWFwKChidXR0b24pID0+IChcbiAgICAgIDxCdXR0b24ga2V5PXtidXR0b24udGV4dH0gdHlwZT1cImFuY2hvclwiIHRhcmdldD17YnV0dG9uLnRhcmdldH0gdGV4dD17YnV0dG9uLnRleHR9IGFuaW1hdGUgZGVsYXk9e2J1dHRvbi5kZWxheX0gLz5cbiAgICApKX1cbiAgPC9Nb3ZlRG93bldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluVGV4dEJsb2NrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/partials/MainTextBlock.tsx\n");

/***/ })

})