webpackHotUpdate_N_E("pages/index",{

/***/ "./components/partials/Showreel.tsx":
/*!******************************************!*\
  !*** ./components/partials/Showreel.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jeromehaas_Documents_Projects_reiheacht_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_partials_Video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/partials/Video */ \"./components/partials/Video.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/jeromehaas/Documents/Projects/reiheacht/components/partials/Showreel.tsx\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_jeromehaas_Documents_Projects_reiheacht_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\n.background {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 0vw;\\n  height: 0vh;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.0);\\n  transition: all 1.5s ease, width 0s ease 2s, height 0s ease 2s;\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n\\n  &.active {\\n    width: 100vw;\\n    height: 100vh;\\n    border: 1px solid red;\\n    background-color: rgba(0, 0, 0, 0.75);\\n    transition: backdrop-filter 1s ease;\\n  }\\n\\n\\n\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar StyledShowreel = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledShowreel;\n\nvar ShowReel = function ShowReel() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledShowreel, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"background active\",\n      children: [\"hello\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_partials_Video__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        link: \"https://player.vimeo.com/video/520902562\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ShowReel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowReel);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledShowreel\");\n$RefreshReg$(_c2, \"ShowReel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9TaG93cmVlbC50c3g/YTFiYSJdLCJuYW1lcyI6WyJTdHlsZWRTaG93cmVlbCIsInN0eWxlZCIsImRpdiIsIlNob3dSZWVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO0tBQU1GLGM7O0FBZ0NOLElBQU1HLFFBQXdDLEdBQUcsU0FBM0NBLFFBQTJDO0FBQUEsc0JBQy9DLHFFQUFDLGNBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLHVDQUVFLHFFQUFDLGtFQUFEO0FBQU8sWUFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEK0M7QUFBQSxDQUFqRDs7TUFBTUEsUTtBQVVTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGFydGlhbHMvU2hvd3JlZWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJ0AvY29tcG9uZW50cy9wYXJ0aWFscy9WaWRlbyc7XG5cbmNvbnN0IFN0eWxlZFNob3dyZWVsID0gc3R5bGVkLmRpdmBcblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDB2dztcbiAgaGVpZ2h0OiAwdmg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMCk7XG4gIHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2UsIHdpZHRoIDBzIGVhc2UgMnMsIGhlaWdodCAwcyBlYXNlIDJzO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmLmFjdGl2ZSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2Ryb3AtZmlsdGVyIDFzIGVhc2U7XG4gIH1cblxuXG5cbn1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7IH1cblxuY29uc3QgU2hvd1JlZWw6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICgpID0+IChcbiAgPFN0eWxlZFNob3dyZWVsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZCBhY3RpdmVcIj5cbiAgICAgIGhlbGxvXG4gICAgICA8VmlkZW8gbGluaz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby81MjA5MDI1NjJcIiAvPlxuXG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkU2hvd3JlZWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93UmVlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/partials/Showreel.tsx\n");

/***/ })

})