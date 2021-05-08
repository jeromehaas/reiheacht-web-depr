webpackHotUpdate_N_E("pages/index",{

/***/ "./components/buttons/Button.tsx":
/*!***************************************!*\
  !*** ./components/buttons/Button.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_buttons_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/Link */ \"./components/buttons/Link.tsx\");\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/buttons/Button.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar getAnimated = function getAnimated(_ref) {\n  var animate = _ref.animate,\n      delay = _ref.delay;\n\n  if (animate && delay) {\n    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"transition:\", \";opacity:0;animation:\", \";@keyframes moveUp{from{top:60px;opacity:0;}to{top:0px;opacity:1;}}\"], function (p) {\n      return p.theme.standardTransition;\n    }, \"0.5s ease-out \".concat(delay, \" 1 forwards moveUp\"));\n  }\n};\n\nvar getColor = function getColor(_ref2) {\n  var color = _ref2.color,\n      theme = _ref2.theme;\n\n  switch (color) {\n    case 'orange':\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\" background-color:\", \";\"], theme.orange);\n\n    case 'blue':\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\" background-color:\", \";\"], theme.blue);\n\n    case 'white':\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\" background-color:\", \";color:\", \";\"], theme.white, theme.darkGrey);\n\n    default:\n      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\" background-color:\", \";\"], theme.orange);\n  }\n};\n\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.withConfig({\n  displayName: \"Button__StyledButton\",\n  componentId: \"sc-63m0s1-0\"\n})([\"position:relative;width:auto;min-width:200px;padding:0;border-radius:5px;border:none;outline:none;margin:0 30px 30px 0;float:left;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);\", \";\", \";&:hover{background-color:\", \";}a{color:red;width:100%;height:100%;display:inline-block;padding:10px 15px;}@media (max-width:750px){a{font-size:15px !important}min-width:150px !important;margin:0 15px 15px 0;}@media (max-width:430px){a{font-size:12px !important}min-width:120px !important;margin:0 15px 15px 0;}@media (max-width:350px){min-width:0px;}\"], getAnimated, getColor, function (p) {\n  return p.theme.orangeHover;\n});\n_c = StyledButton;\n\nvar Button = function Button(_ref3) {\n  var text = _ref3.text,\n      target = _ref3.target,\n      animate = _ref3.animate,\n      delay = _ref3.delay,\n      color = _ref3.color,\n      type = _ref3.type;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledButton, {\n    animate: animate,\n    delay: delay,\n    color: color,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_buttons_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: type,\n      target: target,\n      children: text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledButton\");\n$RefreshReg$(_c2, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL0J1dHRvbi50c3g/MTYwOCJdLCJuYW1lcyI6WyJnZXRBbmltYXRlZCIsImFuaW1hdGUiLCJkZWxheSIsImNzcyIsInAiLCJ0aGVtZSIsInN0YW5kYXJkVHJhbnNpdGlvbiIsImdldENvbG9yIiwiY29sb3IiLCJvcmFuZ2UiLCJibHVlIiwid2hpdGUiLCJkYXJrR3JleSIsIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIm9yYW5nZUhvdmVyIiwiQnV0dG9uIiwidGV4dCIsInRhcmdldCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF3QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzFDLE1BQUlELE9BQU8sSUFBSUMsS0FBZixFQUFzQjtBQUNwQixXQUFPQyw2REFBUCxrSEFDZ0IsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxrQkFBZjtBQUFBLEtBRGhCLDBCQUdpQ0osS0FIakM7QUFTRDtBQUNGLENBWkQ7O0FBY0EsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBc0I7QUFBQSxNQUFuQkMsS0FBbUIsU0FBbkJBLEtBQW1CO0FBQUEsTUFBWkgsS0FBWSxTQUFaQSxLQUFZOztBQUNyQyxVQUFRRyxLQUFSO0FBQ0UsU0FBSyxRQUFMO0FBQWUsYUFBT0wsNkRBQVAsOEJBQWdDRSxLQUFLLENBQUNJLE1BQXRDOztBQUNmLFNBQUssTUFBTDtBQUFhLGFBQU9OLDZEQUFQLDhCQUFnQ0UsS0FBSyxDQUFDSyxJQUF0Qzs7QUFDYixTQUFLLE9BQUw7QUFBYyxhQUFPUCw2REFBUCx5Q0FBZ0NFLEtBQUssQ0FBQ00sS0FBdEMsRUFBd0ROLEtBQUssQ0FBQ08sUUFBOUQ7O0FBQ2Q7QUFBUyxhQUFPVCw2REFBUCw4QkFBZ0NFLEtBQUssQ0FBQ0ksTUFBdEM7QUFKWDtBQU1ELENBUEQ7O0FBU0EsSUFBTUksWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDRpQkFZZGYsV0FaYyxFQWFkTyxRQWJjLEVBZ0JNLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUVcsV0FBZjtBQUFBLENBaEJOLENBQWxCO0tBQU1ILFk7O0FBc0ROLElBQU1JLE1BQXNDLEdBQUcsU0FBekNBLE1BQXlDO0FBQUEsTUFDN0NDLElBRDZDLFNBQzdDQSxJQUQ2QztBQUFBLE1BQ3ZDQyxNQUR1QyxTQUN2Q0EsTUFEdUM7QUFBQSxNQUMvQmxCLE9BRCtCLFNBQy9CQSxPQUQrQjtBQUFBLE1BQ3RCQyxLQURzQixTQUN0QkEsS0FEc0I7QUFBQSxNQUNmTSxLQURlLFNBQ2ZBLEtBRGU7QUFBQSxNQUNSWSxJQURRLFNBQ1JBLElBRFE7QUFBQSxzQkFHN0MscUVBQUMsWUFBRDtBQUFjLFdBQU8sRUFBRW5CLE9BQXZCO0FBQWdDLFNBQUssRUFBRUMsS0FBdkM7QUFBOEMsU0FBSyxFQUFFTSxLQUFyRDtBQUFBLDJCQUNFLHFFQUFDLGdFQUFEO0FBQVEsVUFBSSxFQUFFWSxJQUFkO0FBQW9CLFlBQU0sRUFBRUQsTUFBNUI7QUFBQSxnQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUg2QztBQUFBLENBQS9DOztNQUFNRCxNO0FBVVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9idXR0b25zL0J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGlua2VyIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0xpbmsnO1xuXG5jb25zdCBnZXRBbmltYXRlZCA9ICh7IGFuaW1hdGUsIGRlbGF5IH0pID0+IHtcbiAgaWYgKGFuaW1hdGUgJiYgZGVsYXkpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgdHJhbnNpdGlvbjogJHsocCkgPT4gcC50aGVtZS5zdGFuZGFyZFRyYW5zaXRpb259O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGFuaW1hdGlvbjogJHsoYDAuNXMgZWFzZS1vdXQgJHtkZWxheX0gMSBmb3J3YXJkcyBtb3ZlVXBgKX07XG4gICAgICBAa2V5ZnJhbWVzIG1vdmVVcCB7XG4gICAgICAgIGZyb20ge3RvcDogNjBweDsgb3BhY2l0eTogMDt9XG4gICAgICAgIHRvIHt0b3A6IDBweDsgb3BhY2l0eTogMTt9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufTtcblxuY29uc3QgZ2V0Q29sb3IgPSAoeyBjb2xvciwgdGhlbWUgfSkgPT4ge1xuICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgY2FzZSAnb3JhbmdlJzogcmV0dXJuIGNzc2AgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5vcmFuZ2V9O2A7XG4gICAgY2FzZSAnYmx1ZSc6IHJldHVybiBjc3NgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmx1ZX07YDtcbiAgICBjYXNlICd3aGl0ZSc6IHJldHVybiBjc3NgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUud2hpdGV9OyAgY29sb3I6ICR7dGhlbWUuZGFya0dyZXl9O2A7XG4gICAgZGVmYXVsdDogcmV0dXJuIGNzc2AgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5vcmFuZ2V9O2A7XG4gIH1cbn07XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDAgMzBweCAzMHB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgJHtnZXRBbmltYXRlZH07XG4gICR7Z2V0Q29sb3J9O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUub3JhbmdlSG92ZXJ9O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgYSB7IGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50IH1cbiAgIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgIG1hcmdpbjogMCAxNXB4IDE1cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuICAgYSB7IGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50IH1cbiAgIG1pbi13aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgIG1hcmdpbjogMCAxNXB4IDE1cHggMDtcbiAgfVxuIFxuICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgIG1pbi13aWR0aDogMHB4O1xuICB9XG5cbiAgYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdHlwZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRhcmdldDogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgYW5pbWF0ZT86IGJvb2xlYW47XG4gIGRlbGF5Pzogc3RyaW5nO1xufVxuXG5jb25zdCBCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIHRleHQsIHRhcmdldCwgYW5pbWF0ZSwgZGVsYXksIGNvbG9yLCB0eXBlLFxufSkgPT4gKFxuICA8U3R5bGVkQnV0dG9uIGFuaW1hdGU9e2FuaW1hdGV9IGRlbGF5PXtkZWxheX0gY29sb3I9e2NvbG9yfT5cbiAgICA8TGlua2VyIHR5cGU9e3R5cGV9IHRhcmdldD17dGFyZ2V0fT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvTGlua2VyPlxuICA8L1N0eWxlZEJ1dHRvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/buttons/Button.tsx\n");

/***/ })

})