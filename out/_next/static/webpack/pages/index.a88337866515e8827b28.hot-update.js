webpackHotUpdate_N_E("pages/index",{

/***/ "./components/partials/Showreel.tsx":
/*!******************************************!*\
  !*** ./components/partials/Showreel.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jeromehaas_Documents_Projects_reiheacht_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/partials/Showreel.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_jeromehaas_Documents_Projects_reiheacht_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\n.background {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 0vw;\\n  height: 0vh;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.0);\\n  transition: all 1.5s ease, width 0s ease 2s, height 0s ease 2s;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  &.active {\\n    width: 100vw;\\n    height: 100vh;\\n    border: 1px solid red;\\n    background-color: rgba(0, 0, 0, 0.75);\\n    transition: backdrop-filter 1s ease;\\n  }\\n\\n  .videoWrapper {\\n    width: auto;\\n    height: 75vh;\\n    margin: 0 auto;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 10px solid blue;\\n  }\\n\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar StyledShowreel = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledShowreel;\n\nvar ShowReel = function ShowReel() {\n  _s();\n\n  var showreelStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.showreel.visible;\n  });\n  console.log(showreelStatus);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledShowreel, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"background \".concat(showreelStatus === true ? 'active' : null),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"videoWrapper\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          url: \"https://player.vimeo.com/video/520902562\",\n          className: \"react-player\",\n          controls: true,\n          responsive: \"1\",\n          width: \"100%\",\n          height: \"100%\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ShowReel, \"480NqS3mtvTWsu2eoLTiyy3kacM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n\n_c2 = ShowReel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowReel);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledShowreel\");\n$RefreshReg$(_c2, \"ShowReel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9TaG93cmVlbC50c3g/YTFiYSJdLCJuYW1lcyI6WyJTdHlsZWRTaG93cmVlbCIsInN0eWxlZCIsImRpdiIsIlNob3dSZWVsIiwic2hvd3JlZWxTdGF0dXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvd3JlZWwiLCJ2aXNpYmxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO0tBQU1GLGM7O0FBd0NOLElBQU1HLFFBQXdDLEdBQUcsU0FBM0NBLFFBQTJDLEdBQU07QUFBQTs7QUFFckQsTUFBTUMsY0FBYyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQTFDO0FBQUEsR0FBRCxDQUFsQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sY0FBWjtBQUVBLHNCQUNFLHFFQUFDLGNBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsdUJBQWdCQSxjQUFjLEtBQUssSUFBbkIsR0FBMEIsUUFBMUIsR0FBcUMsSUFBckQsQ0FBZDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBRUUscUVBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUMsMENBRE47QUFFRSxtQkFBUyxFQUFDLGNBRlo7QUFHRSxrQkFBUSxNQUhWO0FBSUUsb0JBQVUsRUFBQyxHQUpiO0FBS0UsZUFBSyxFQUFDLE1BTFI7QUFNRSxnQkFBTSxFQUFDO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBdkJEOztHQUFNRCxRO1VBRW1CRSx1RDs7O01BRm5CRixRO0FBd0JTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGFydGlhbHMvU2hvd3JlZWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJ0AvY29tcG9uZW50cy9wYXJ0aWFscy9WaWRlbyc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgUm9vdFN0YXRlT3JBbnkgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IFN0eWxlZFNob3dyZWVsID0gc3R5bGVkLmRpdmBcblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDB2dztcbiAgaGVpZ2h0OiAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMCk7XG4gIHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2UsIHdpZHRoIDBzIGVhc2UgMnMsIGhlaWdodCAwcyBlYXNlIDJzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAmLmFjdGl2ZSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2Ryb3AtZmlsdGVyIDFzIGVhc2U7XG4gIH1cblxuICAudmlkZW9XcmFwcGVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibHVlO1xuICB9XG5cbn1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7IH1cblxuY29uc3QgU2hvd1JlZWw6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICgpID0+IHtcblxuICBjb25zdCBzaG93cmVlbFN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlT3JBbnkpID0+IHN0YXRlLnNob3dyZWVsLnZpc2libGUpO1xuICBjb25zb2xlLmxvZyhzaG93cmVlbFN0YXR1cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2hvd3JlZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJhY2tncm91bmQgJHtzaG93cmVlbFN0YXR1cyA9PT0gdHJ1ZSA/ICdhY3RpdmUnIDogbnVsbH1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb1dyYXBwZXJcIj5cblxuICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzUyMDkwMjU2MlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1wbGF5ZXJcIlxuICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgIHJlc3BvbnNpdmU9XCIxXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkU2hvd3JlZWw+XG4gICk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBTaG93UmVlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/partials/Showreel.tsx\n");

/***/ })

})