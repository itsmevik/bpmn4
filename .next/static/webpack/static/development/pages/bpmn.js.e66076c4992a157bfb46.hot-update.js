webpackHotUpdate("static/development/pages/bpmn.js",{

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");
var _jsxFileName = "/Users/believecreative/Kumar/bpmn/pages/bpmn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import BPMNContainer from '../components/bpmn/bpmn-container';



var BPMNContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/bpmn/bpmn-container */ "./components/bpmn/bpmn-container.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/bpmn/bpmn-container */ "./components/bpmn/bpmn-container.js")];
    },
    modules: ['../components/bpmn/bpmn-container']
  }
});
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    drawer: {
      width: _constants__WEBPACK_IMPORTED_MODULE_4__["drawerWidth"],
      flexShrink: 0
    },
    drawerPaper: {
      width: _constants__WEBPACK_IMPORTED_MODULE_4__["drawerWidth"]
    },
    bpmnContainer: {
      marginLeft: _constants__WEBPACK_IMPORTED_MODULE_4__["drawerWidth"]
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    variant: "permanent",
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: classes.bpmnContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(BPMNContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=bpmn.js.e66076c4992a157bfb46.hot-update.js.map