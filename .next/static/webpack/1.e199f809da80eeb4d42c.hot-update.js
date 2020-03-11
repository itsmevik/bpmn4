webpackHotUpdate(1,{

/***/ "./components/bpmn/bpmn-container.js":
/*!*******************************************!*\
  !*** ./components/bpmn/bpmn-container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BPMNContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bpmn-js/lib/Modeler */ "./node_modules/bpmn-js/lib/Modeler.js");
/* harmony import */ var _empty_bpmn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./empty.bpmn */ "./components/bpmn/empty.bpmn.js");





var _jsxFileName = "/Users/believecreative/Kumar/bpmn/components/bpmn/bpmn-container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var BPMNContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BPMNContainer, _React$Component);

  function BPMNContainer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BPMNContainer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BPMNContainer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BPMNContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.modeler = new bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_7__["default"]({
        container: '#bpmnview'
      });
      this.newDiagram();
    }
  }, {
    key: "newDiagram",
    value: function newDiagram() {
      this.openDiagram(_empty_bpmn__WEBPACK_IMPORTED_MODULE_8__["default"]);
    }
  }, {
    key: "openDiagram",
    value: function openDiagram(xml) {
      var _this = this;

      this.modeler.importXML(xml, function (error) {
        if (error) {
          return;
        }

        var canvas = _this.modeler.get('canvas');

        canvas.zoom('fit-viewport');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        id: "bpmnview",
        className: "jsx-2373631723",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2373631723",
        __self: this
      }, "#bpmnview.jsx-2373631723{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxpZXZlY3JlYXRpdmUvS3VtYXIvYnBtbi9jb21wb25lbnRzL2JwbW4vYnBtbi1jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJXLEFBRzRCLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2JlbGlldmVjcmVhdGl2ZS9LdW1hci9icG1uL2NvbXBvbmVudHMvYnBtbi9icG1uLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcG1uTW9kZWxlciBmcm9tICdicG1uLWpzL2xpYi9Nb2RlbGVyJztcbmltcG9ydCBlbXB0eUJwbW4gZnJvbSAnLi9lbXB0eS5icG1uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBNTkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW9kZWxlciA9IG5ldyBCcG1uTW9kZWxlcih7XG4gICAgICBjb250YWluZXI6ICcjYnBtbnZpZXcnXG4gICAgfSk7XG4gICAgdGhpcy5uZXdEaWFncmFtKCk7XG4gIH1cbiAgbmV3RGlhZ3JhbSgpIHtcbiAgICB0aGlzLm9wZW5EaWFncmFtKGVtcHR5QnBtbik7XG4gIH1cbiAgb3BlbkRpYWdyYW0oeG1sKSB7XG4gICAgdGhpcy5tb2RlbGVyLmltcG9ydFhNTCh4bWwsIGVycm9yID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5tb2RlbGVyLmdldCgnY2FudmFzJyk7XG4gICAgICBjYW52YXMuem9vbSgnZml0LXZpZXdwb3J0Jyk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgaWQ9XCJicG1udmlld1wiPjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAjYnBtbnZpZXcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/believecreative/Kumar/bpmn/components/bpmn/bpmn-container.js */"));
    }
  }]);

  return BPMNContainer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=1.e199f809da80eeb4d42c.hot-update.js.map