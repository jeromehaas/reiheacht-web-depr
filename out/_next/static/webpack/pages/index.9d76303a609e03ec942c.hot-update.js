webpackHotUpdate_N_E("pages/index",{

/***/ "./components/buttons/PlayButton.tsx":
/*!*******************************************!*\
  !*** ./components/buttons/PlayButton.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/actions/index */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/buttons/PlayButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar StyledPlayButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"PlayButton__StyledPlayButton\",\n  componentId: \"sc-2lj51u-0\"\n})([\"height:50px;width:50px;border:1px solid \", \";position:relative;width:auto;display:inline-block;padding:10px 15px;border-radius:5px;border:none;outline:none;margin:0 0 30px 0;float:left;cursor:pointer;background-color:transparent;border:2px solid \", \";display:flex;align-items:center;justify-content:center;animation:0.5s ease-out 8s 1 forwards moveUp;opacity:0;.icon{width:20px;height:auto;animation:heartBeat 4s infinite ease-in-out 5s;}@keyframes moveUp{from{top:60px;opacity:0;}to{top:0px;opacity:1;}}@keyframes heartBeat{0%{transform:scale(1)}10%{transform:scale(1.15)}20%{transform:scale(1)}100%{transform:scale(1)}}@media (max-width:750px){height:42px;width:42px;}@media (max-width:430px){height:38px;width:38px;.icon{width:15px;height:auto;animation:heartBeat 4s infinite ease-in-out 5s;}}@media (max-width:370px){margin:0 0 15px 0;display:block;width:100%;}\"], function (p) {\n  return p.theme.white;\n}, function (p) {\n  return p.theme.white;\n});\n_c = StyledPlayButton;\n\nvar PlayButton = function PlayButton() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledPlayButton, {\n    onClick: function onClick() {\n      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__[\"toggleShowreel\"])());\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"icon\",\n      src: \"/icons/other/play.svg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PlayButton, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c2 = PlayButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayButton);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPlayButton\");\n$RefreshReg$(_c2, \"PlayButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL1BsYXlCdXR0b24udHN4PzRjYTciXSwibmFtZXMiOlsiU3R5bGVkUGxheUJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInAiLCJ0aGVtZSIsIndoaXRlIiwiUGxheUJ1dHRvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVTaG93cmVlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDAyQkFHQSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQWY7QUFBQSxDQUhBLEVBZUEsVUFBQ0YsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFmO0FBQUEsQ0FmQSxDQUF0QjtLQUFNTCxnQjs7QUFrRU4sSUFBTU0sVUFBMEMsR0FBRyxTQUE3Q0EsVUFBNkMsR0FBTTtBQUFBOztBQUV2RCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsc0JBRUUscUVBQUMsZ0JBQUQ7QUFBa0IsV0FBTyxFQUFFO0FBQUEsYUFBTUQsUUFBUSxDQUFDRSwyRUFBYyxFQUFmLENBQWQ7QUFBQSxLQUEzQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFNRCxDQVZEOztHQUFNSCxVO1VBRWFFLHVEOzs7TUFGYkYsVTtBQVlTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYnV0dG9ucy9QbGF5QnV0dG9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgUm9vdFN0YXRlT3JBbnkgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB0b2dnbGVTaG93cmVlbCB9IGZyb20gJ0AvcmVkdXgvYWN0aW9ucy9pbmRleCc7XG5cbmNvbnN0IFN0eWxlZFBsYXlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLndoaXRlfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLndoaXRlfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogMC41cyBlYXNlLW91dCA4cyAxIGZvcndhcmRzIG1vdmVVcDtcbiAgb3BhY2l0eTogMDtcbiAgXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IGF1dG87ICBcbiAgICBhbmltYXRpb246IGhlYXJ0QmVhdCA0cyBpbmZpbml0ZSBlYXNlLWluLW91dCA1cztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW92ZVVwIHtcbiAgICAgZnJvbSB7dG9wOiA2MHB4OyBvcGFjaXR5OiAwO31cbiAgICAgdG8ge3RvcDogMHB4OyBvcGFjaXR5OiAxO31cbiAgfVxuXG4gIEBrZXlmcmFtZXMgaGVhcnRCZWF0IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpIH1cbiAgMTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KSB9XG4gIDIwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSl9IFxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKX0gXG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDM4cHg7XG5cbiAgICAuaWNvbiB7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGFuaW1hdGlvbjogaGVhcnRCZWF0IDRzIGluZmluaXRlIGVhc2UtaW4tb3V0IDVzO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyB9XG5cbmNvbnN0IFBsYXlCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICgpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTdHlsZWRQbGF5QnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHRvZ2dsZVNob3dyZWVsKCkpfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cIi9pY29ucy9vdGhlci9wbGF5LnN2Z1wiIC8+XG4gICAgPC9TdHlsZWRQbGF5QnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/buttons/PlayButton.tsx\n");

/***/ })

})