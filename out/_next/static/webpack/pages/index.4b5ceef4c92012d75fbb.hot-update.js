webpackHotUpdate_N_E("pages/index",{

/***/ "./components/buttons/PlayButton.tsx":
/*!*******************************************!*\
  !*** ./components/buttons/PlayButton.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/actions/index */ \"./redux/actions/index.js\");\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/buttons/PlayButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar StyledPlayButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"PlayButton__StyledPlayButton\",\n  componentId: \"sc-2lj51u-0\"\n})([\"height:50px;width:50px;border:1px solid \", \";position:relative;width:auto;display:inline-block;padding:10px 15px;border-radius:5px;border:none;outline:none;margin:0 0 30px 0;float:left;cursor:pointer;background-color:transparent;border:2px solid \", \";display:flex;align-items:center;justify-content:center;animation:0.5s ease-out 8s 1 forwards moveUp;opacity:0;.icon{width:300%;height:auto;animation:heartBeat 4s infinite ease-in-out 5s;}@keyframes moveUp{from{top:60px;opacity:0;}to{top:0px;opacity:1;}}@keyframes heartBeat{0%{transform:scale(1)}10%{transform:scale(1.15)}20%{transform:scale(1)}100%{transform:scale(1)}}@media (max-width:750px){height:42px;width:42px;}@media (max-width:430px){height:38px;width:38px;}\"], function (p) {\n  return p.theme.white;\n}, function (p) {\n  return p.theme.white;\n});\n_c = StyledPlayButton;\n\nvar PlayButton = function PlayButton() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledPlayButton, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"icon\",\n      src: \"/icons/other/play.svg\",\n      onClick: function onClick() {\n        return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__[\"toggleShowreel\"])());\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PlayButton, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c2 = PlayButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayButton);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPlayButton\");\n$RefreshReg$(_c2, \"PlayButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL1BsYXlCdXR0b24udHN4PzRjYTciXSwibmFtZXMiOlsiU3R5bGVkUGxheUJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInAiLCJ0aGVtZSIsIndoaXRlIiwiUGxheUJ1dHRvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVTaG93cmVlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHd0QkFHQSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQWY7QUFBQSxDQUhBLEVBZUEsVUFBQ0YsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFmO0FBQUEsQ0FmQSxDQUF0QjtLQUFNTCxnQjs7QUFzRE4sSUFBTU0sVUFBMEMsR0FBRyxTQUE3Q0EsVUFBNkMsR0FBTTtBQUFBOztBQUV2RCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsc0JBRUUscUVBQUMsZ0JBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUcsRUFBQyx1QkFBMUI7QUFBa0QsYUFBTyxFQUFFO0FBQUEsZUFBTUQsUUFBUSxDQUFDRSwyRUFBYyxFQUFmLENBQWQ7QUFBQTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBTUQsQ0FWRDs7R0FBTUgsVTtVQUVhRSx1RDs7O01BRmJGLFU7QUFZU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbnMvUGxheUJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IsIFJvb3RTdGF0ZU9yQW55IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9nZ2xlU2hvd3JlZWwgfSBmcm9tICdAL3JlZHV4L2FjdGlvbnMvaW5kZXgnO1xuXG5jb25zdCBTdHlsZWRQbGF5QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS53aGl0ZX07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgJHsocCkgPT4gcC50aGVtZS53aGl0ZX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246IDAuNXMgZWFzZS1vdXQgOHMgMSBmb3J3YXJkcyBtb3ZlVXA7XG4gIG9wYWNpdHk6IDA7XG4gIFxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDMwMCU7XG4gICAgaGVpZ2h0OiBhdXRvOyAgXG4gICAgYW5pbWF0aW9uOiBoZWFydEJlYXQgNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgNXM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIG1vdmVVcCB7XG4gICAgIGZyb20ge3RvcDogNjBweDsgb3BhY2l0eTogMDt9XG4gICAgIHRvIHt0b3A6IDBweDsgb3BhY2l0eTogMTt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhlYXJ0QmVhdCB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKSB9XG4gIDEwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xNSkgfVxuICAyMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpfSBcbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSl9IFxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHdpZHRoOiA0MnB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHdpZHRoOiAzOHB4O1xuICB9XG5cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7IH1cblxuY29uc3QgUGxheUJ1dHRvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFN0eWxlZFBsYXlCdXR0b24+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9XCIvaWNvbnMvb3RoZXIvcGxheS5zdmdcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh0b2dnbGVTaG93cmVlbCgpKX0gLz5cbiAgICA8L1N0eWxlZFBsYXlCdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/buttons/PlayButton.tsx\n");

/***/ })

})