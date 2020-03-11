webpackHotUpdate("static/development/pages/bpmn.js",{

/***/ "./components/bpmn/bpmn-container.js":
false,

/***/ "./pages/bpmn.js":
/*!***********************!*\
  !*** ./pages/bpmn.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "/Users/believecreative/Kumar/bpmn/pages/bpmn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import BPMNContainer from '../components/bpmn/bpmn-container';


var BPMNContainer = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/bpmn/bpmn-container */ "./components/bpmn/bpmn-container.js"));
}, {
  ssr: false
});
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: {
      width: _constants__WEBPACK_IMPORTED_MODULE_3__["drawerWidth"],
      flexShrink: 0
    },
    drawerPaper: {
      width: _constants__WEBPACK_IMPORTED_MODULE_3__["drawerWidth"]
    },
    bpmnContainer: {
      marginLeft: _constants__WEBPACK_IMPORTED_MODULE_3__["drawerWidth"]
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    variant: "permanent",
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: classes.bpmnContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(BPMNContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=bpmn.js.16c79b64583f5db99b5f.hot-update.js.map