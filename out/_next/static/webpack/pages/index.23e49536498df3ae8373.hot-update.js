webpackHotUpdate_N_E("pages/index",{

/***/ "./components/partials/Showreel.tsx":
/*!******************************************!*\
  !*** ./components/partials/Showreel.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jeromehaas_Documents_Projects_reiheacht_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/partials/Showreel.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_jeromehaas_Documents_Projects_reiheacht_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\n.background {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 0vw;\\n  height: 0vh;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.0);\\n  transition: all 1.5s ease, width 0s ease 2s, height 0s ease 2s;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  &.active {\\n    width: 100vw;\\n    height: 100vh;\\n    border: 1px solid red;\\n    background-color: rgba(0, 0, 0, 0.75);\\n    transition: backdrop-filter 1s ease;\\n  }\\n\\n  .videoWrapper {\\n    width: 75vh;\\n    height: 43vh;\\n    margin: 0 auto;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 10px solid blue;\\n  }\\n\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar StyledShowreel = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledShowreel;\n\nvar ShowReel = function ShowReel() {\n  _s();\n\n  var showreelStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.showreel.visible;\n  });\n  console.log(showreelStatus);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledShowreel, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"background \".concat(showreelStatus === true ? 'active' : null),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        url: \"https://player.vimeo.com/video/520902562\",\n        className: \"react-player\",\n        controls: true,\n        responsive: \"1\",\n        width: \"100%\",\n        height: \"100%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ShowReel, \"480NqS3mtvTWsu2eoLTiyy3kacM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n\n_c2 = ShowReel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowReel);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledShowreel\");\n$RefreshReg$(_c2, \"ShowReel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9TaG93cmVlbC50c3g/YTFiYSJdLCJuYW1lcyI6WyJTdHlsZWRTaG93cmVlbCIsInN0eWxlZCIsImRpdiIsIlNob3dSZWVsIiwic2hvd3JlZWxTdGF0dXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvd3JlZWwiLCJ2aXNpYmxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO0tBQU1GLGM7O0FBd0NOLElBQU1HLFFBQXdDLEdBQUcsU0FBM0NBLFFBQTJDLEdBQU07QUFBQTs7QUFFckQsTUFBTUMsY0FBYyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQTFDO0FBQUEsR0FBRCxDQUFsQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sY0FBWjtBQUVBLHNCQUNFLHFFQUFDLGNBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsdUJBQWdCQSxjQUFjLEtBQUssSUFBbkIsR0FBMEIsUUFBMUIsR0FBcUMsSUFBckQsQ0FBZDtBQUFBLDZCQUVFLHFFQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFDLDBDQUROO0FBRUUsaUJBQVMsRUFBQyxjQUZaO0FBR0UsZ0JBQVEsTUFIVjtBQUlFLGtCQUFVLEVBQUMsR0FKYjtBQUtFLGFBQUssRUFBQyxNQUxSO0FBTUUsY0FBTSxFQUFDO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FyQkQ7O0dBQU1ELFE7VUFFbUJFLHVEOzs7TUFGbkJGLFE7QUFzQlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wYXJ0aWFscy9TaG93cmVlbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnQC9jb21wb25lbnRzL3BhcnRpYWxzL1ZpZGVvJztcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yLCBSb290U3RhdGVPckFueSB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgU3R5bGVkU2hvd3JlZWwgPSBzdHlsZWQuZGl2YFxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMHZ3O1xuICBoZWlnaHQ6IDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTtcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZSwgd2lkdGggMHMgZWFzZSAycywgaGVpZ2h0IDBzIGVhc2UgMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICYuYWN0aXZlIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZHJvcC1maWx0ZXIgMXMgZWFzZTtcbiAgfVxuXG4gIC52aWRlb1dyYXBwZXIge1xuICAgIHdpZHRoOiA3NXZoO1xuICAgIGhlaWdodDogNDN2aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsdWU7XG4gIH1cblxufVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5jb25zdCBTaG93UmVlbDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHNob3dyZWVsU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuc2hvd3JlZWwudmlzaWJsZSk7XG4gIGNvbnNvbGUubG9nKHNob3dyZWVsU3RhdHVzKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTaG93cmVlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFja2dyb3VuZCAke3Nob3dyZWVsU3RhdHVzID09PSB0cnVlID8gJ2FjdGl2ZScgOiBudWxsfWB9PlxuXG4gICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgIHVybD1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81MjA5MDI1NjJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LXBsYXllclwiXG4gICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICByZXNwb25zaXZlPVwiMVwiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkU2hvd3JlZWw+XG4gICk7XG5cbn07XG5leHBvcnQgZGVmYXVsdCBTaG93UmVlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/partials/Showreel.tsx\n");

/***/ })

})