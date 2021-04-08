webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_HeadTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/HeadTag */ \"./components/layout/HeadTag.js\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Header */ \"./components/layout/Header.js\");\n/* harmony import */ var _components_layout_MoHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/MoHeader */ \"./components/layout/MoHeader.js\");\n/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Footer */ \"./components/layout/Footer.js\");\n/* harmony import */ var _components_layout_MoFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/MoFooter */ \"./components/layout/MoFooter.js\");\n/* harmony import */ var _components_layout_Wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/Wrap */ \"./components/layout/Wrap.js\");\n/* harmony import */ var _components_layout_Wrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Wrap__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/choemiyeong/Desktop/pardus_react_ver/front/pages/_app.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar _app = function _app(_ref) {\n  _s();\n\n  var Component = _ref.Component;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  var handleResize = function handleResize() {\n    setWindowSize(window.innerWidth);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('resize', handleResize);\n    handleResize();\n  }, [windowSize]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(_components_layout_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(_app, \"BuEyXWF1vQV2KKInO73a179ILiQ=\");\n\n_app.prototype = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_app);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIl9hcHAiLCJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm90b3R5cGUiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLFNBQWMsUUFBZEEsU0FBYzs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxDQUFELENBRGY7QUFBQSxNQUNuQkMsVUFEbUI7QUFBQSxNQUNSQyxhQURROztBQUcxQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFLO0FBQ3RCRCxpQkFBYSxDQUFDRSxNQUFNLENBQUNDLFVBQVIsQ0FBYjtBQUNILEdBRkQ7O0FBSUFDLHlEQUFTLENBQUMsWUFBSTtBQUNWRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDSixZQUFqQztBQUNBQSxnQkFBWTtBQUNmLEdBSFEsRUFHUCxDQUFDRixVQUFELENBSE8sQ0FBVDtBQUlBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBS0gsQ0FoQkQ7O0dBQU1ILEk7O0FBa0JOQSxJQUFJLENBQUNVLFNBQUwsR0FBaUI7QUFDYlQsV0FBUyxFQUFFVSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURwQixDQUFqQjtBQUllYixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSGVhZFRhZyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9IZWFkVGFnJztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlclwiO1xuaW1wb3J0IE1vSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9Nb0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgTW9Gb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L01vRm9vdGVyXCI7XG5pbXBvcnQgV3JhcCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvV3JhcFwiO1xuXG5cblxuY29uc3QgX2FwcCA9ICh7IENvbXBvbmVudCB9KT0+e1xuICAgIGNvbnN0IFt3aW5kb3dTaXplLHNldFdpbmRvd1NpemVdPXVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT57XG4gICAgICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGgpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIH0sW3dpbmRvd1NpemVdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuX2FwcC5wcm90b3R5cGUgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgX2FwcDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})