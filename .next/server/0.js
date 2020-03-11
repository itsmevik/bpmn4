exports.ids = [0];
exports.modules = {

/***/ "./components/bpmn/bpmn-container.js":
/*!*******************************************!*\
  !*** ./components/bpmn/bpmn-container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BPMNContainer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/Modeler */ "./node_modules/bpmn-js/lib/Modeler.js");
/* harmony import */ var _empty_bpmn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty.bpmn */ "./components/bpmn/empty.bpmn.js");
var _jsxFileName = "/Users/believecreative/Kumar/bpmn/components/bpmn/bpmn-container.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class BPMNContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    this.modeler = new bpmn_js_lib_Modeler__WEBPACK_IMPORTED_MODULE_2__["default"]({
      container: '#bpmnview'
    });
    this.newDiagram();
  }

  newDiagram() {
    this.openDiagram(_empty_bpmn__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  openDiagram(xml) {
    this.modeler.importXML(xml, error => {
      if (error) {
        return;
      }

      var canvas = this.modeler.get('canvas');
      canvas.zoom('fit-viewport');
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
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
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2373631723",
      __self: this
    }, "#bpmnview.jsx-2373631723{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxpZXZlY3JlYXRpdmUvS3VtYXIvYnBtbi9jb21wb25lbnRzL2JwbW4vYnBtbi1jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJXLEFBRzRCLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2JlbGlldmVjcmVhdGl2ZS9LdW1hci9icG1uL2NvbXBvbmVudHMvYnBtbi9icG1uLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcG1uTW9kZWxlciBmcm9tICdicG1uLWpzL2xpYi9Nb2RlbGVyJztcbmltcG9ydCBlbXB0eUJwbW4gZnJvbSAnLi9lbXB0eS5icG1uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQlBNTkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW9kZWxlciA9IG5ldyBCcG1uTW9kZWxlcih7XG4gICAgICBjb250YWluZXI6ICcjYnBtbnZpZXcnXG4gICAgfSk7XG4gICAgdGhpcy5uZXdEaWFncmFtKCk7XG4gIH1cbiAgbmV3RGlhZ3JhbSgpIHtcbiAgICB0aGlzLm9wZW5EaWFncmFtKGVtcHR5QnBtbik7XG4gIH1cbiAgb3BlbkRpYWdyYW0oeG1sKSB7XG4gICAgdGhpcy5tb2RlbGVyLmltcG9ydFhNTCh4bWwsIGVycm9yID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5tb2RlbGVyLmdldCgnY2FudmFzJyk7XG4gICAgICBjYW52YXMuem9vbSgnZml0LXZpZXdwb3J0Jyk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgaWQ9XCJicG1udmlld1wiPjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAjYnBtbnZpZXcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/believecreative/Kumar/bpmn/components/bpmn/bpmn-container.js */"));
  }

}

/***/ }),

/***/ "./components/bpmn/empty.bpmn.js":
/*!***************************************!*\
  !*** ./components/bpmn/empty.bpmn.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const emptyBPMN = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
	<bpmn2:collaboration id="Collaboration_0czsqyr">
		<bpmn2:participant id="Participant_0cyhvx8" processRef="Process_1" />
	</bpmn2:collaboration>
	<bpmn2:process id="Process_1" isExecutable="false">
		<bpmn2:startEvent id="StartEvent_1" />
	</bpmn2:process>
	<bpmndi:BPMNDiagram id="BPMNDiagram_1">
		<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0czsqyr">
			<bpmndi:BPMNShape id="Participant_0cyhvx8_di" bpmnElement="Participant_0cyhvx8">
				<dc:Bounds x="130" y="220" width="600" height="250" />
			</bpmndi:BPMNShape>
			<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
				<dc:Bounds x="412" y="240" width="36" height="36" />
			</bpmndi:BPMNShape>
		</bpmndi:BPMNPlane>
	</bpmndi:BPMNDiagram>
</bpmn2:definitions>`;
/* harmony default export */ __webpack_exports__["default"] = (emptyBPMN);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/BaseModeler.js":
/*!*************************************************!*\
  !*** ./node_modules/bpmn-js/lib/BaseModeler.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseModeler; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ids */ "ids");
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseViewer */ "./node_modules/bpmn-js/lib/BaseViewer.js");



/**
 * A base modeler for BPMN 2.0 diagrams.
 *
 * Have a look at {@link Modeler} for a bundle that includes actual features.
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {String|Number} [options.width] the width of the viewer
 * @param {String|Number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */

function BaseModeler(options) {
  _BaseViewer__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, options); // hook ID collection into the modeler

  this.on('import.parse.complete', function (event) {
    if (!event.error) {
      this._collectIds(event.definitions, event.context);
    }
  }, this);
  this.on('diagram.destroy', function () {
    this.get('moddle').ids.clear();
  }, this);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BaseModeler, _BaseViewer__WEBPACK_IMPORTED_MODULE_2__["default"]);
/**
 * Create a moddle instance, attaching ids to it.
 *
 * @param {Object} options
 */

BaseModeler.prototype._createModdle = function (options) {
  var moddle = _BaseViewer__WEBPACK_IMPORTED_MODULE_2__["default"].prototype._createModdle.call(this, options); // attach ids to moddle to be able to track
  // and validated ids in the BPMN 2.0 XML document
  // tree


  moddle.ids = new ids__WEBPACK_IMPORTED_MODULE_1___default.a([32, 36, 1]);
  return moddle;
};
/**
 * Collect ids processed during parsing of the
 * definitions object.
 *
 * @param {ModdleElement} definitions
 * @param {Context} context
 */


BaseModeler.prototype._collectIds = function (definitions, context) {
  var moddle = definitions.$model,
      ids = moddle.ids,
      id; // remove references from previous import

  ids.clear();

  for (id in context.elementsById) {
    ids.claim(id, context.elementsById[id]);
  }
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/BaseViewer.js":
/*!************************************************!*\
  !*** ./node_modules/bpmn-js/lib/BaseViewer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseViewer; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-svg */ "tiny-svg");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tiny_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js */ "diagram-js");
/* harmony import */ var diagram_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bpmn_moddle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmn-moddle */ "bpmn-moddle");
/* harmony import */ var bpmn_moddle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bpmn_moddle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _import_Importer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/Importer */ "./node_modules/bpmn-js/lib/import/Importer.js");
/* harmony import */ var _util_PoweredByUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/PoweredByUtil */ "./node_modules/bpmn-js/lib/util/PoweredByUtil.js");
/**
 * The code in the <project-logo></project-logo> area
 * must not be changed.
 *
 * @see http://bpmn.io/license for more information.
 */







/**
 * A base viewer for BPMN 2.0 diagrams.
 *
 * Have a look at {@link Viewer}, {@link NavigatedViewer} or {@link Modeler} for
 * bundles that include actual features.
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {String|Number} [options.width] the width of the viewer
 * @param {String|Number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */

function BaseViewer(options) {
  options = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, DEFAULT_OPTIONS, options);
  this._moddle = this._createModdle(options);
  this._container = this._createContainer(options);
  /* <project-logo> */

  addProjectLogo(this._container);
  /* </project-logo> */

  this._init(this._container, this._moddle, options);
}
inherits__WEBPACK_IMPORTED_MODULE_5___default()(BaseViewer, diagram_js__WEBPACK_IMPORTED_MODULE_3___default.a);
/**
 * Parse and render a BPMN 2.0 diagram.
 *
 * Once finished the viewer reports back the result to the
 * provided callback function with (err, warnings).
 *
 * ## Life-Cycle Events
 *
 * During import the viewer will fire life-cycle events:
 *
 *   * import.parse.start (about to read model from xml)
 *   * import.parse.complete (model read; may have worked or not)
 *   * import.render.start (graphical import start)
 *   * import.render.complete (graphical import finished)
 *   * import.done (everything done)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {String} xml the BPMN 2.0 xml
 * @param {ModdleElement<BPMNDiagram>|String} [bpmnDiagram] BPMN diagram or id of diagram to render (if not provided, the first one will be rendered)
 * @param {Function} [done] invoked with (err, warnings=[])
 */

BaseViewer.prototype.importXML = function (xml, bpmnDiagram, done) {
  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(bpmnDiagram)) {
    done = bpmnDiagram;
    bpmnDiagram = null;
  } // done is optional


  done = done || function () {};

  var self = this; // hook in pre-parse listeners +
  // allow xml manipulation

  xml = this._emit('import.parse.start', {
    xml: xml
  }) || xml;

  this._moddle.fromXML(xml, 'bpmn:Definitions', function (err, definitions, context) {
    // hook in post parse listeners +
    // allow definitions manipulation
    definitions = self._emit('import.parse.complete', {
      error: err,
      definitions: definitions,
      context: context
    }) || definitions;
    var parseWarnings = context.warnings;

    if (err) {
      err = checkValidationError(err);

      self._emit('import.done', {
        error: err,
        warnings: parseWarnings
      });

      return done(err, parseWarnings);
    }

    self.importDefinitions(definitions, bpmnDiagram, function (err, importWarnings) {
      var allWarnings = [].concat(parseWarnings, importWarnings || []);

      self._emit('import.done', {
        error: err,
        warnings: allWarnings
      });

      done(err, allWarnings);
    });
  });
};
/**
 * Import parsed definitions and render a BPMN 2.0 diagram.
 *
 * Once finished the viewer reports back the result to the
 * provided callback function with (err, warnings).
 *
 * ## Life-Cycle Events
 *
 * During import the viewer will fire life-cycle events:
 *
 *   * import.render.start (graphical import start)
 *   * import.render.complete (graphical import finished)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {ModdleElement<Definitions>} definitions parsed BPMN 2.0 definitions
 * @param {ModdleElement<BPMNDiagram>|String} [bpmnDiagram] BPMN diagram or id of diagram to render (if not provided, the first one will be rendered)
 * @param {Function} [done] invoked with (err, warnings=[])
 */


BaseViewer.prototype.importDefinitions = function (definitions, bpmnDiagram, done) {
  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(bpmnDiagram)) {
    done = bpmnDiagram;
    bpmnDiagram = null;
  } // done is optional


  done = done || function () {};

  this._setDefinitions(definitions);

  return this.open(bpmnDiagram, done);
};
/**
 * Open diagram of previously imported XML.
 *
 * Once finished the viewer reports back the result to the
 * provided callback function with (err, warnings).
 *
 * ## Life-Cycle Events
 *
 * During switch the viewer will fire life-cycle events:
 *
 *   * import.render.start (graphical import start)
 *   * import.render.complete (graphical import finished)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {String|ModdleElement<BPMNDiagram>} [bpmnDiagramOrId] id or the diagram to open
 * @param {Function} [done] invoked with (err, warnings=[])
 */


BaseViewer.prototype.open = function (bpmnDiagramOrId, done) {
  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(bpmnDiagramOrId)) {
    done = bpmnDiagramOrId;
    bpmnDiagramOrId = null;
  }

  var definitions = this._definitions;
  var bpmnDiagram = bpmnDiagramOrId; // done is optional

  done = done || function () {};

  if (!definitions) {
    return done(new Error('no XML imported'));
  }

  if (typeof bpmnDiagramOrId === 'string') {
    bpmnDiagram = findBPMNDiagram(definitions, bpmnDiagramOrId);

    if (!bpmnDiagram) {
      return done(new Error('BPMNDiagram <' + bpmnDiagramOrId + '> not found'));
    }
  } // clear existing rendered diagram
  // catch synchronous exceptions during #clear()


  try {
    this.clear();
  } catch (error) {
    return done(error);
  } // perform graphical import


  return Object(_import_Importer__WEBPACK_IMPORTED_MODULE_6__["importBpmnDiagram"])(this, definitions, bpmnDiagram, done);
};
/**
 * Export the currently displayed BPMN 2.0 diagram as
 * a BPMN 2.0 XML document.
 *
 * ## Life-Cycle Events
 *
 * During XML saving the viewer will fire life-cycle events:
 *
 *   * saveXML.start (before serialization)
 *   * saveXML.serialized (after xml generation)
 *   * saveXML.done (everything done)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {Object} [options] export options
 * @param {Boolean} [options.format=false] output formatted XML
 * @param {Boolean} [options.preamble=true] output preamble
 *
 * @param {Function} done invoked with (err, xml)
 */


BaseViewer.prototype.saveXML = function (options, done) {
  if (!done) {
    done = options;
    options = {};
  }

  var self = this;
  var definitions = this._definitions;

  if (!definitions) {
    return done(new Error('no definitions loaded'));
  } // allow to fiddle around with definitions


  definitions = this._emit('saveXML.start', {
    definitions: definitions
  }) || definitions;

  this._moddle.toXML(definitions, options, function (err, xml) {
    try {
      xml = self._emit('saveXML.serialized', {
        error: err,
        xml: xml
      }) || xml;

      self._emit('saveXML.done', {
        error: err,
        xml: xml
      });
    } catch (e) {
      console.error('error in saveXML life-cycle listener', e);
    }

    done(err, xml);
  });
};
/**
 * Export the currently displayed BPMN 2.0 diagram as
 * an SVG image.
 *
 * ## Life-Cycle Events
 *
 * During SVG saving the viewer will fire life-cycle events:
 *
 *   * saveSVG.start (before serialization)
 *   * saveSVG.done (everything done)
 *
 * You can use these events to hook into the life-cycle.
 *
 * @param {Object} [options]
 * @param {Function} done invoked with (err, svgStr)
 */


BaseViewer.prototype.saveSVG = function (options, done) {
  if (!done) {
    done = options;
    options = {};
  }

  this._emit('saveSVG.start');

  var svg, err;

  try {
    var canvas = this.get('canvas');
    var contentNode = canvas.getDefaultLayer(),
        defsNode = Object(min_dom__WEBPACK_IMPORTED_MODULE_1__["query"])('defs', canvas._svg);
    var contents = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_2__["innerSVG"])(contentNode),
        defs = defsNode ? '<defs>' + Object(tiny_svg__WEBPACK_IMPORTED_MODULE_2__["innerSVG"])(defsNode) + '</defs>' : '';
    var bbox = contentNode.getBBox();
    svg = '<?xml version="1.0" encoding="utf-8"?>\n' + '<!-- created with bpmn-js / http://bpmn.io -->\n' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' + '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'width="' + bbox.width + '" height="' + bbox.height + '" ' + 'viewBox="' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height + '" version="1.1">' + defs + contents + '</svg>';
  } catch (e) {
    err = e;
  }

  this._emit('saveSVG.done', {
    error: err,
    svg: svg
  });

  done(err, svg);
};
/**
 * Get a named diagram service.
 *
 * @example
 *
 * var elementRegistry = viewer.get('elementRegistry');
 * var startEventShape = elementRegistry.get('StartEvent_1');
 *
 * @param {String} name
 *
 * @return {Object} diagram service instance
 *
 * @method BaseViewer#get
 */

/**
 * Invoke a function in the context of this viewer.
 *
 * @example
 *
 * viewer.invoke(function(elementRegistry) {
 *   var startEventShape = elementRegistry.get('StartEvent_1');
 * });
 *
 * @param {Function} fn to be invoked
 *
 * @return {Object} the functions return value
 *
 * @method BaseViewer#invoke
 */


BaseViewer.prototype._setDefinitions = function (definitions) {
  this._definitions = definitions;
};

BaseViewer.prototype.getModules = function () {
  return this._modules;
};
/**
 * Remove all drawn elements from the viewer.
 *
 * After calling this method the viewer can still
 * be reused for opening another diagram.
 *
 * @method BaseViewer#clear
 */


BaseViewer.prototype.clear = function () {
  if (!this.getDefinitions()) {
    // no diagram to clear
    return;
  } // remove businessObject#di binding
  //
  // this is necessary, as we establish the bindings
  // in the BpmnTreeWalker (and assume none are given
  // on reimport)


  this.get('elementRegistry').forEach(function (element) {
    var bo = element.businessObject;

    if (bo && bo.di) {
      delete bo.di;
    }
  }); // remove drawn elements

  diagram_js__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.clear.call(this);
};
/**
 * Destroy the viewer instance and remove all its
 * remainders from the document tree.
 */


BaseViewer.prototype.destroy = function () {
  // diagram destroy
  diagram_js__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.destroy.call(this); // dom detach

  Object(min_dom__WEBPACK_IMPORTED_MODULE_1__["remove"])(this._container);
};
/**
 * Register an event listener
 *
 * Remove a previously added listener via {@link #off(event, callback)}.
 *
 * @param {String} event
 * @param {Number} [priority]
 * @param {Function} callback
 * @param {Object} [that]
 */


BaseViewer.prototype.on = function (event, priority, callback, target) {
  return this.get('eventBus').on(event, priority, callback, target);
};
/**
 * De-register an event listener
 *
 * @param {String} event
 * @param {Function} callback
 */


BaseViewer.prototype.off = function (event, callback) {
  this.get('eventBus').off(event, callback);
};

BaseViewer.prototype.attachTo = function (parentNode) {
  if (!parentNode) {
    throw new Error('parentNode required');
  } // ensure we detach from the
  // previous, old parent


  this.detach(); // unwrap jQuery if provided

  if (parentNode.get && parentNode.constructor.prototype.jquery) {
    parentNode = parentNode.get(0);
  }

  if (typeof parentNode === 'string') {
    parentNode = Object(min_dom__WEBPACK_IMPORTED_MODULE_1__["query"])(parentNode);
  }

  parentNode.appendChild(this._container);

  this._emit('attach', {});

  this.get('canvas').resized();
};

BaseViewer.prototype.getDefinitions = function () {
  return this._definitions;
};

BaseViewer.prototype.detach = function () {
  var container = this._container,
      parentNode = container.parentNode;

  if (!parentNode) {
    return;
  }

  this._emit('detach', {});

  parentNode.removeChild(container);
};

BaseViewer.prototype._init = function (container, moddle, options) {
  var baseModules = options.modules || this.getModules(),
      additionalModules = options.additionalModules || [],
      staticModules = [{
    bpmnjs: ['value', this],
    moddle: ['value', moddle]
  }];
  var diagramModules = [].concat(staticModules, baseModules, additionalModules);
  var diagramOptions = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["omit"])(options, ['additionalModules']), {
    canvas: Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.canvas, {
      container: container
    }),
    modules: diagramModules
  }); // invoke diagram constructor

  diagram_js__WEBPACK_IMPORTED_MODULE_3___default.a.call(this, diagramOptions);

  if (options && options.container) {
    this.attachTo(options.container);
  }
};
/**
 * Emit an event on the underlying {@link EventBus}
 *
 * @param  {String} type
 * @param  {Object} event
 *
 * @return {Object} event processing result (if any)
 */


BaseViewer.prototype._emit = function (type, event) {
  return this.get('eventBus').fire(type, event);
};

BaseViewer.prototype._createContainer = function (options) {
  var container = Object(min_dom__WEBPACK_IMPORTED_MODULE_1__["domify"])('<div class="bjs-container"></div>');
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(container.style, {
    width: ensureUnit(options.width),
    height: ensureUnit(options.height),
    position: options.position
  });
  return container;
};

BaseViewer.prototype._createModdle = function (options) {
  var moddleOptions = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, this._moddleExtensions, options.moddleExtensions);
  return new bpmn_moddle__WEBPACK_IMPORTED_MODULE_4___default.a(moddleOptions);
};

BaseViewer.prototype._modules = []; // helpers ///////////////

function checkValidationError(err) {
  // check if we can help the user by indicating wrong BPMN 2.0 xml
  // (in case he or the exporting tool did not get that right)
  var pattern = /unparsable content <([^>]+)> detected([\s\S]*)$/;
  var match = pattern.exec(err.message);

  if (match) {
    err.message = 'unparsable content <' + match[1] + '> detected; ' + 'this may indicate an invalid BPMN 2.0 diagram file' + match[2];
  }

  return err;
}

var DEFAULT_OPTIONS = {
  width: '100%',
  height: '100%',
  position: 'relative'
};
/**
 * Ensure the passed argument is a proper unit (defaulting to px)
 */

function ensureUnit(val) {
  return val + (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(val) ? 'px' : '');
}
/**
 * Find BPMNDiagram in definitions by ID
 *
 * @param {ModdleElement<Definitions>} definitions
 * @param {String} diagramId
 *
 * @return {ModdleElement<BPMNDiagram>|null}
 */


function findBPMNDiagram(definitions, diagramId) {
  if (!diagramId) {
    return null;
  }

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(definitions.diagrams, function (element) {
    return element.id === diagramId;
  }) || null;
}
/* <project-logo> */




/**
 * Adds the project logo to the diagram container as
 * required by the bpmn.io license.
 *
 * @see http://bpmn.io/license
 *
 * @param {Element} container
 */

function addProjectLogo(container) {
  var img = _util_PoweredByUtil__WEBPACK_IMPORTED_MODULE_7__["BPMNIO_IMG"];
  var linkMarkup = '<a href="http://bpmn.io" ' + 'target="_blank" ' + 'class="bjs-powered-by" ' + 'title="Powered by bpmn.io" ' + 'style="position: absolute; bottom: 15px; right: 15px; z-index: 100">' + img + '</a>';
  var linkElement = Object(min_dom__WEBPACK_IMPORTED_MODULE_1__["domify"])(linkMarkup);
  container.appendChild(linkElement);
  min_dom__WEBPACK_IMPORTED_MODULE_1__["event"].bind(linkElement, 'click', function (event) {
    Object(_util_PoweredByUtil__WEBPACK_IMPORTED_MODULE_7__["open"])();
    event.preventDefault();
  });
}
/* </project-logo> */

/***/ }),

/***/ "./node_modules/bpmn-js/lib/Modeler.js":
/*!*********************************************!*\
  !*** ./node_modules/bpmn-js/lib/Modeler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modeler; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseModeler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseModeler */ "./node_modules/bpmn-js/lib/BaseModeler.js");
/* harmony import */ var _Viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viewer */ "./node_modules/bpmn-js/lib/Viewer.js");
/* harmony import */ var _NavigatedViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigatedViewer */ "./node_modules/bpmn-js/lib/NavigatedViewer.js");
/* harmony import */ var diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/navigation/keyboard-move */ "diagram-js/lib/navigation/keyboard-move");
/* harmony import */ var diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! diagram-js/lib/navigation/movecanvas */ "diagram-js/lib/navigation/movecanvas");
/* harmony import */ var diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var diagram_js_lib_navigation_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/navigation/touch */ "diagram-js/lib/navigation/touch");
/* harmony import */ var diagram_js_lib_navigation_touch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_touch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! diagram-js/lib/navigation/zoomscroll */ "diagram-js/lib/navigation/zoomscroll");
/* harmony import */ var diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var diagram_js_lib_features_align_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! diagram-js/lib/features/align-elements */ "diagram-js/lib/features/align-elements");
/* harmony import */ var diagram_js_lib_features_align_elements__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_align_elements__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _features_auto_place__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/auto-place */ "./node_modules/bpmn-js/lib/features/auto-place/index.js");
/* harmony import */ var _features_auto_resize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/auto-resize */ "./node_modules/bpmn-js/lib/features/auto-resize/index.js");
/* harmony import */ var diagram_js_lib_features_auto_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! diagram-js/lib/features/auto-scroll */ "diagram-js/lib/features/auto-scroll");
/* harmony import */ var diagram_js_lib_features_auto_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_auto_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var diagram_js_lib_features_bendpoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! diagram-js/lib/features/bendpoints */ "diagram-js/lib/features/bendpoints");
/* harmony import */ var diagram_js_lib_features_bendpoints__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_bendpoints__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! diagram-js/lib/features/connect */ "diagram-js/lib/features/connect");
/* harmony import */ var diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var diagram_js_lib_features_connection_preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! diagram-js/lib/features/connection-preview */ "diagram-js/lib/features/connection-preview");
/* harmony import */ var diagram_js_lib_features_connection_preview__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_connection_preview__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _features_context_pad__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/context-pad */ "./node_modules/bpmn-js/lib/features/context-pad/index.js");
/* harmony import */ var _features_copy_paste__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/copy-paste */ "./node_modules/bpmn-js/lib/features/copy-paste/index.js");
/* harmony import */ var diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! diagram-js/lib/features/create */ "diagram-js/lib/features/create");
/* harmony import */ var diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _features_distribute_elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./features/distribute-elements */ "./node_modules/bpmn-js/lib/features/distribute-elements/index.js");
/* harmony import */ var _features_editor_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/editor-actions */ "./node_modules/bpmn-js/lib/features/editor-actions/index.js");
/* harmony import */ var _features_grid_snapping__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./features/grid-snapping */ "./node_modules/bpmn-js/lib/features/grid-snapping/index.js");
/* harmony import */ var _features_interaction_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./features/interaction-events */ "./node_modules/bpmn-js/lib/features/interaction-events/index.js");
/* harmony import */ var _features_keyboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./features/keyboard */ "./node_modules/bpmn-js/lib/features/keyboard/index.js");
/* harmony import */ var diagram_js_lib_features_keyboard_move_selection__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! diagram-js/lib/features/keyboard-move-selection */ "diagram-js/lib/features/keyboard-move-selection");
/* harmony import */ var diagram_js_lib_features_keyboard_move_selection__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_keyboard_move_selection__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _features_label_editing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./features/label-editing */ "./node_modules/bpmn-js/lib/features/label-editing/index.js");
/* harmony import */ var _features_modeling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./features/modeling */ "./node_modules/bpmn-js/lib/features/modeling/index.js");
/* harmony import */ var diagram_js_lib_features_move__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! diagram-js/lib/features/move */ "diagram-js/lib/features/move");
/* harmony import */ var diagram_js_lib_features_move__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_move__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _features_palette__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./features/palette */ "./node_modules/bpmn-js/lib/features/palette/index.js");
/* harmony import */ var _features_replace_preview__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./features/replace-preview */ "./node_modules/bpmn-js/lib/features/replace-preview/index.js");
/* harmony import */ var diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! diagram-js/lib/features/resize */ "diagram-js/lib/features/resize");
/* harmony import */ var diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _features_snapping__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./features/snapping */ "./node_modules/bpmn-js/lib/features/snapping/index.js");
/* harmony import */ var _features_search__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./features/search */ "./node_modules/bpmn-js/lib/features/search/index.js");
































var initialDiagram = '<?xml version="1.0" encoding="UTF-8"?>' + '<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' + 'xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" ' + 'xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" ' + 'xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" ' + 'targetNamespace="http://bpmn.io/schema/bpmn" ' + 'id="Definitions_1">' + '<bpmn:process id="Process_1" isExecutable="false">' + '<bpmn:startEvent id="StartEvent_1"/>' + '</bpmn:process>' + '<bpmndi:BPMNDiagram id="BPMNDiagram_1">' + '<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">' + '<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' + '<dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/>' + '</bpmndi:BPMNShape>' + '</bpmndi:BPMNPlane>' + '</bpmndi:BPMNDiagram>' + '</bpmn:definitions>';
/**
 * A modeler for BPMN 2.0 diagrams.
 *
 *
 * ## Extending the Modeler
 *
 * In order to extend the viewer pass extension modules to bootstrap via the
 * `additionalModules` option. An extension module is an object that exposes
 * named services.
 *
 * The following example depicts the integration of a simple
 * logging component that integrates with interaction events:
 *
 *
 * ```javascript
 *
 * // logging component
 * function InteractionLogger(eventBus) {
 *   eventBus.on('element.hover', function(event) {
 *     console.log()
 *   })
 * }
 *
 * InteractionLogger.$inject = [ 'eventBus' ]; // minification save
 *
 * // extension module
 * var extensionModule = {
 *   __init__: [ 'interactionLogger' ],
 *   interactionLogger: [ 'type', InteractionLogger ]
 * };
 *
 * // extend the viewer
 * var bpmnModeler = new Modeler({ additionalModules: [ extensionModule ] });
 * bpmnModeler.importXML(...);
 * ```
 *
 *
 * ## Customizing / Replacing Components
 *
 * You can replace individual diagram components by redefining them in override modules.
 * This works for all components, including those defined in the core.
 *
 * Pass in override modules via the `options.additionalModules` flag like this:
 *
 * ```javascript
 * function CustomContextPadProvider(contextPad) {
 *
 *   contextPad.registerProvider(this);
 *
 *   this.getContextPadEntries = function(element) {
 *     // no entries, effectively disable the context pad
 *     return {};
 *   };
 * }
 *
 * CustomContextPadProvider.$inject = [ 'contextPad' ];
 *
 * var overrideModule = {
 *   contextPadProvider: [ 'type', CustomContextPadProvider ]
 * };
 *
 * var bpmnModeler = new Modeler({ additionalModules: [ overrideModule ]});
 * ```
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {String|Number} [options.width] the width of the viewer
 * @param {String|Number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */

function Modeler(options) {
  _BaseModeler__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, options);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(Modeler, _BaseModeler__WEBPACK_IMPORTED_MODULE_1__["default"]);
Modeler.Viewer = _Viewer__WEBPACK_IMPORTED_MODULE_2__["default"];
Modeler.NavigatedViewer = _NavigatedViewer__WEBPACK_IMPORTED_MODULE_3__["default"];
/**
 * Create a new diagram to start modeling.
 *
 * @param {Function} [done]
 */

Modeler.prototype.createDiagram = function (done) {
  return this.importXML(initialDiagram, done);
};

Modeler.prototype._interactionModules = [// non-modeling components
diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_4___default.a, diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_5___default.a, diagram_js_lib_navigation_touch__WEBPACK_IMPORTED_MODULE_6___default.a, diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_7___default.a];
Modeler.prototype._modelingModules = [// modeling components
diagram_js_lib_features_align_elements__WEBPACK_IMPORTED_MODULE_8___default.a, _features_auto_place__WEBPACK_IMPORTED_MODULE_9__["default"], diagram_js_lib_features_auto_scroll__WEBPACK_IMPORTED_MODULE_11___default.a, _features_auto_resize__WEBPACK_IMPORTED_MODULE_10__["default"], diagram_js_lib_features_bendpoints__WEBPACK_IMPORTED_MODULE_12___default.a, diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_13___default.a, diagram_js_lib_features_connection_preview__WEBPACK_IMPORTED_MODULE_14___default.a, _features_context_pad__WEBPACK_IMPORTED_MODULE_15__["default"], _features_copy_paste__WEBPACK_IMPORTED_MODULE_16__["default"], diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_17___default.a, _features_distribute_elements__WEBPACK_IMPORTED_MODULE_18__["default"], _features_editor_actions__WEBPACK_IMPORTED_MODULE_19__["default"], _features_grid_snapping__WEBPACK_IMPORTED_MODULE_20__["default"], _features_interaction_events__WEBPACK_IMPORTED_MODULE_21__["default"], _features_keyboard__WEBPACK_IMPORTED_MODULE_22__["default"], diagram_js_lib_features_keyboard_move_selection__WEBPACK_IMPORTED_MODULE_23___default.a, _features_label_editing__WEBPACK_IMPORTED_MODULE_24__["default"], _features_modeling__WEBPACK_IMPORTED_MODULE_25__["default"], diagram_js_lib_features_move__WEBPACK_IMPORTED_MODULE_26___default.a, _features_palette__WEBPACK_IMPORTED_MODULE_27__["default"], _features_replace_preview__WEBPACK_IMPORTED_MODULE_28__["default"], diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_29___default.a, _features_snapping__WEBPACK_IMPORTED_MODULE_30__["default"], _features_search__WEBPACK_IMPORTED_MODULE_31__["default"]]; // modules the modeler is composed of
//
// - viewer modules
// - interaction modules
// - modeling modules

Modeler.prototype._modules = [].concat(_Viewer__WEBPACK_IMPORTED_MODULE_2__["default"].prototype._modules, Modeler.prototype._interactionModules, Modeler.prototype._modelingModules);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/NavigatedViewer.js":
/*!*****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/NavigatedViewer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigatedViewer; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Viewer */ "./node_modules/bpmn-js/lib/Viewer.js");
/* harmony import */ var diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/navigation/keyboard-move */ "diagram-js/lib/navigation/keyboard-move");
/* harmony import */ var diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/navigation/movecanvas */ "diagram-js/lib/navigation/movecanvas");
/* harmony import */ var diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/navigation/zoomscroll */ "diagram-js/lib/navigation/zoomscroll");
/* harmony import */ var diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_4__);





/**
 * A viewer that includes mouse navigation facilities
 *
 * @param {Object} options
 */

function NavigatedViewer(options) {
  _Viewer__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, options);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(NavigatedViewer, _Viewer__WEBPACK_IMPORTED_MODULE_1__["default"]);
NavigatedViewer.prototype._navigationModules = [diagram_js_lib_navigation_keyboard_move__WEBPACK_IMPORTED_MODULE_2___default.a, diagram_js_lib_navigation_movecanvas__WEBPACK_IMPORTED_MODULE_3___default.a, diagram_js_lib_navigation_zoomscroll__WEBPACK_IMPORTED_MODULE_4___default.a];
NavigatedViewer.prototype._modules = [].concat(_Viewer__WEBPACK_IMPORTED_MODULE_1__["default"].prototype._modules, NavigatedViewer.prototype._navigationModules);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/Viewer.js":
/*!********************************************!*\
  !*** ./node_modules/bpmn-js/lib/Viewer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewer; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/bpmn-js/lib/core/index.js");
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/i18n/translate */ "diagram-js/lib/i18n/translate");
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/features/selection */ "diagram-js/lib/features/selection");
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_features_overlays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/features/overlays */ "diagram-js/lib/features/overlays");
/* harmony import */ var diagram_js_lib_features_overlays__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_overlays__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BaseViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseViewer */ "./node_modules/bpmn-js/lib/BaseViewer.js");






/**
 * A viewer for BPMN 2.0 diagrams.
 *
 * Have a look at {@link NavigatedViewer} or {@link Modeler} for bundles that include
 * additional features.
 *
 *
 * ## Extending the Viewer
 *
 * In order to extend the viewer pass extension modules to bootstrap via the
 * `additionalModules` option. An extension module is an object that exposes
 * named services.
 *
 * The following example depicts the integration of a simple
 * logging component that integrates with interaction events:
 *
 *
 * ```javascript
 *
 * // logging component
 * function InteractionLogger(eventBus) {
 *   eventBus.on('element.hover', function(event) {
 *     console.log()
 *   })
 * }
 *
 * InteractionLogger.$inject = [ 'eventBus' ]; // minification save
 *
 * // extension module
 * var extensionModule = {
 *   __init__: [ 'interactionLogger' ],
 *   interactionLogger: [ 'type', InteractionLogger ]
 * };
 *
 * // extend the viewer
 * var bpmnViewer = new Viewer({ additionalModules: [ extensionModule ] });
 * bpmnViewer.importXML(...);
 * ```
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {String|Number} [options.width] the width of the viewer
 * @param {String|Number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */

function Viewer(options) {
  _BaseViewer__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, options);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(Viewer, _BaseViewer__WEBPACK_IMPORTED_MODULE_5__["default"]); // modules the viewer is composed of

Viewer.prototype._modules = [_core__WEBPACK_IMPORTED_MODULE_1__["default"], diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_2___default.a, diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_3___default.a, diagram_js_lib_features_overlays__WEBPACK_IMPORTED_MODULE_4___default.a]; // default moddle extensions the viewer is composed of

Viewer.prototype._moddleExtensions = {};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/core/index.js":
/*!************************************************!*\
  !*** ./node_modules/bpmn-js/lib/core/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draw */ "./node_modules/bpmn-js/lib/draw/index.js");
/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import */ "./node_modules/bpmn-js/lib/import/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [_draw__WEBPACK_IMPORTED_MODULE_0__["default"], _import__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js":
/*!*********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js ***!
  \*********************************************************/
/*! exports provided: isTypedEvent, isThrowEvent, isCollection, getDi, getSemantic, getFillColor, getStrokeColor, getCirclePath, getRoundRectPath, getDiamondPath, getRectPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypedEvent", function() { return isTypedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThrowEvent", function() { return isThrowEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDi", function() { return getDi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSemantic", function() { return getSemantic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFillColor", function() { return getFillColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrokeColor", function() { return getStrokeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCirclePath", function() { return getCirclePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoundRectPath", function() { return getRoundRectPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiamondPath", function() { return getDiamondPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRectPath", function() { return getRectPath; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/util/RenderUtil */ "diagram-js/lib/util/RenderUtil");
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1__);

 // element utils //////////////////////

/**
 * Checks if eventDefinition of the given element matches with semantic type.
 *
 * @return {boolean} true if element is of the given semantic type
 */

function isTypedEvent(event, eventDefinitionType, filter) {
  function matches(definition, filter) {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["every"])(filter, function (val, key) {
      // we want a == conversion here, to be able to catch
      // undefined == false and friends

      /* jshint -W116 */
      return definition[key] == val;
    });
  }

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["some"])(event.eventDefinitions, function (definition) {
    return definition.$type === eventDefinitionType && matches(event, filter);
  });
}
function isThrowEvent(event) {
  return event.$type === 'bpmn:IntermediateThrowEvent' || event.$type === 'bpmn:EndEvent';
}
function isCollection(element) {
  var dataObject = element.dataObjectRef;
  return element.isCollection || dataObject && dataObject.isCollection;
}
function getDi(element) {
  return element.businessObject.di;
}
function getSemantic(element) {
  return element.businessObject;
} // color access //////////////////////

function getFillColor(element, defaultColor) {
  return getDi(element).get('bioc:fill') || defaultColor || 'white';
}
function getStrokeColor(element, defaultColor) {
  return getDi(element).get('bioc:stroke') || defaultColor || 'black';
} // cropping path customizations //////////////////////

function getCirclePath(shape) {
  var cx = shape.x + shape.width / 2,
      cy = shape.y + shape.height / 2,
      radius = shape.width / 2;
  var circlePath = [['M', cx, cy], ['m', 0, -radius], ['a', radius, radius, 0, 1, 1, 0, 2 * radius], ['a', radius, radius, 0, 1, 1, 0, -2 * radius], ['z']];
  return Object(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1__["componentsToPath"])(circlePath);
}
function getRoundRectPath(shape, borderRadius) {
  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;
  var roundRectPath = [['M', x + borderRadius, y], ['l', width - borderRadius * 2, 0], ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius], ['l', 0, height - borderRadius * 2], ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius], ['l', borderRadius * 2 - width, 0], ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius], ['l', 0, borderRadius * 2 - height], ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius], ['z']];
  return Object(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1__["componentsToPath"])(roundRectPath);
}
function getDiamondPath(shape) {
  var width = shape.width,
      height = shape.height,
      x = shape.x,
      y = shape.y,
      halfWidth = width / 2,
      halfHeight = height / 2;
  var diamondPath = [['M', x + halfWidth, y], ['l', halfWidth, halfHeight], ['l', -halfWidth, halfHeight], ['l', -halfWidth, -halfHeight], ['z']];
  return Object(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1__["componentsToPath"])(diamondPath);
}
function getRectPath(shape) {
  var x = shape.x,
      y = shape.y,
      width = shape.width,
      height = shape.height;
  var rectPath = [['M', x, y], ['l', width, 0], ['l', 0, height], ['l', -width, 0], ['z']];
  return Object(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_1__["componentsToPath"])(rectPath);
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/BpmnRenderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/BpmnRenderer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnRenderer; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/draw/BaseRenderer */ "diagram-js/lib/draw/BaseRenderer");
/* harmony import */ var diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _features_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/label-editing/LabelUtil */ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/util/RenderUtil */ "diagram-js/lib/util/RenderUtil");
/* harmony import */ var diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BpmnRenderUtil */ "./node_modules/bpmn-js/lib/draw/BpmnRenderUtil.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(min_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-svg */ "tiny-svg");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tiny_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! diagram-js/lib/util/SvgTransformUtil */ "diagram-js/lib/util/SvgTransformUtil");
/* harmony import */ var diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ids */ "ids");
/* harmony import */ var ids__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ids__WEBPACK_IMPORTED_MODULE_11__);












var RENDERER_IDS = new ids__WEBPACK_IMPORTED_MODULE_11___default.a();
var TASK_BORDER_RADIUS = 10;
var INNER_OUTER_DIST = 3;
var DEFAULT_FILL_OPACITY = .95,
    HIGH_FILL_OPACITY = .35;
function BpmnRenderer(config, eventBus, styles, pathMap, canvas, textRenderer, priority) {
  diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2___default.a.call(this, eventBus, priority);
  var defaultFillColor = config && config.defaultFillColor,
      defaultStrokeColor = config && config.defaultStrokeColor;
  var rendererId = RENDERER_IDS.next();
  var markers = {};
  var computeStyle = styles.computeStyle;

  function addMarker(id, options) {
    var attrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({
      fill: 'black',
      strokeWidth: 1,
      strokeLinecap: 'round',
      strokeDasharray: 'none'
    }, options.attrs);
    var ref = options.ref || {
      x: 0,
      y: 0
    };
    var scale = options.scale || 1; // fix for safari / chrome / firefox bug not correctly
    // resetting stroke dash array

    if (attrs.strokeDasharray === 'none') {
      attrs.strokeDasharray = [10000, 1];
    }

    var marker = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('marker');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(options.element, attrs);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(marker, options.element);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(marker, {
      id: id,
      viewBox: '0 0 20 20',
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: 'auto'
    });
    var defs = Object(min_dom__WEBPACK_IMPORTED_MODULE_8__["query"])('defs', canvas._svg);

    if (!defs) {
      defs = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('defs');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(canvas._svg, defs);
    }

    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(defs, marker);
    markers[id] = marker;
  }

  function colorEscape(str) {
    // only allow characters and numbers
    return str.replace(/[^0-9a-zA-z]+/g, '_');
  }

  function marker(type, fill, stroke) {
    var id = type + '-' + colorEscape(fill) + '-' + colorEscape(stroke) + '-' + rendererId;

    if (!markers[id]) {
      createMarker(id, type, fill, stroke);
    }

    return 'url(#' + id + ')';
  }

  function createMarker(id, type, fill, stroke) {
    if (type === 'sequenceflow-end') {
      var sequenceflowEnd = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(sequenceflowEnd, {
        d: 'M 1 5 L 11 10 L 1 15 Z'
      });
      addMarker(id, {
        element: sequenceflowEnd,
        ref: {
          x: 11,
          y: 10
        },
        scale: 0.5,
        attrs: {
          fill: stroke,
          stroke: stroke
        }
      });
    }

    if (type === 'messageflow-start') {
      var messageflowStart = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('circle');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(messageflowStart, {
        cx: 6,
        cy: 6,
        r: 3.5
      });
      addMarker(id, {
        element: messageflowStart,
        attrs: {
          fill: fill,
          stroke: stroke
        },
        ref: {
          x: 6,
          y: 6
        }
      });
    }

    if (type === 'messageflow-end') {
      var messageflowEnd = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(messageflowEnd, {
        d: 'm 1 5 l 0 -3 l 7 3 l -7 3 z'
      });
      addMarker(id, {
        element: messageflowEnd,
        attrs: {
          fill: fill,
          stroke: stroke,
          strokeLinecap: 'butt'
        },
        ref: {
          x: 8.5,
          y: 5
        }
      });
    }

    if (type === 'association-start') {
      var associationStart = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(associationStart, {
        d: 'M 11 5 L 1 10 L 11 15'
      });
      addMarker(id, {
        element: associationStart,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: {
          x: 1,
          y: 10
        },
        scale: 0.5
      });
    }

    if (type === 'association-end') {
      var associationEnd = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(associationEnd, {
        d: 'M 1 5 L 11 10 L 1 15'
      });
      addMarker(id, {
        element: associationEnd,
        attrs: {
          fill: 'none',
          stroke: stroke,
          strokeWidth: 1.5
        },
        ref: {
          x: 12,
          y: 10
        },
        scale: 0.5
      });
    }

    if (type === 'conditional-flow-marker') {
      var conditionalflowMarker = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(conditionalflowMarker, {
        d: 'M 0 10 L 8 6 L 16 10 L 8 14 Z'
      });
      addMarker(id, {
        element: conditionalflowMarker,
        attrs: {
          fill: fill,
          stroke: stroke
        },
        ref: {
          x: -1,
          y: 10
        },
        scale: 0.5
      });
    }

    if (type === 'conditional-default-flow-marker') {
      var conditionaldefaultflowMarker = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(conditionaldefaultflowMarker, {
        d: 'M 6 4 L 10 16'
      });
      addMarker(id, {
        element: conditionaldefaultflowMarker,
        attrs: {
          stroke: stroke
        },
        ref: {
          x: 0,
          y: 10
        },
        scale: 0.5
      });
    }
  }

  function drawCircle(parentGfx, width, height, offset, attrs) {
    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isObject"])(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;
    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });

    if (attrs.fill === 'none') {
      delete attrs.fillOpacity;
    }

    var cx = width / 2,
        cy = height / 2;
    var circle = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('circle');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(circle, {
      cx: cx,
      cy: cy,
      r: Math.round((width + height) / 4 - offset)
    });
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(circle, attrs);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(parentGfx, circle);
    return circle;
  }

  function drawRect(parentGfx, width, height, r, offset, attrs) {
    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isObject"])(offset)) {
      attrs = offset;
      offset = 0;
    }

    offset = offset || 0;
    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });
    var rect = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('rect');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(rect, {
      x: offset,
      y: offset,
      width: width - offset * 2,
      height: height - offset * 2,
      rx: r,
      ry: r
    });
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(rect, attrs);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(parentGfx, rect);
    return rect;
  }

  function drawDiamond(parentGfx, width, height, attrs) {
    var x_2 = width / 2;
    var y_2 = height / 2;
    var points = [{
      x: x_2,
      y: 0
    }, {
      x: width,
      y: y_2
    }, {
      x: x_2,
      y: height
    }, {
      x: 0,
      y: y_2
    }];
    var pointsString = points.map(function (point) {
      return point.x + ',' + point.y;
    }).join(' ');
    attrs = computeStyle(attrs, {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'white'
    });
    var polygon = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('polygon');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(polygon, {
      points: pointsString
    });
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(polygon, attrs);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(parentGfx, polygon);
    return polygon;
  }

  function drawLine(parentGfx, waypoints, attrs) {
    attrs = computeStyle(attrs, ['no-fill'], {
      stroke: 'black',
      strokeWidth: 2,
      fill: 'none'
    });
    var line = Object(diagram_js_lib_util_RenderUtil__WEBPACK_IMPORTED_MODULE_6__["createLine"])(waypoints, attrs);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(parentGfx, line);
    return line;
  }

  function drawPath(parentGfx, d, attrs) {
    attrs = computeStyle(attrs, ['no-fill'], {
      strokeWidth: 2,
      stroke: 'black'
    });
    var path = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["create"])('path');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(path, {
      d: d
    });
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(path, attrs);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(parentGfx, path);
    return path;
  }

  function drawMarker(type, parentGfx, path, attrs) {
    return drawPath(parentGfx, path, Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({
      'data-marker': type
    }, attrs));
  }

  function as(type) {
    return function (parentGfx, element) {
      return handlers[type](parentGfx, element);
    };
  }

  function renderer(type) {
    return handlers[type];
  }

  function renderEventContent(element, parentGfx) {
    var event = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
    var isThrowing = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isThrowEvent"])(event);

    if (event.eventDefinitions && event.eventDefinitions.length > 1) {
      if (event.parallelMultiple) {
        return renderer('bpmn:ParallelMultipleEventDefinition')(parentGfx, element, isThrowing);
      } else {
        return renderer('bpmn:MultipleEventDefinition')(parentGfx, element, isThrowing);
      }
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:MessageEventDefinition')) {
      return renderer('bpmn:MessageEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:TimerEventDefinition')) {
      return renderer('bpmn:TimerEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:ConditionalEventDefinition')) {
      return renderer('bpmn:ConditionalEventDefinition')(parentGfx, element);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:SignalEventDefinition')) {
      return renderer('bpmn:SignalEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:EscalationEventDefinition')) {
      return renderer('bpmn:EscalationEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:LinkEventDefinition')) {
      return renderer('bpmn:LinkEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:ErrorEventDefinition')) {
      return renderer('bpmn:ErrorEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:CancelEventDefinition')) {
      return renderer('bpmn:CancelEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:CompensateEventDefinition')) {
      return renderer('bpmn:CompensateEventDefinition')(parentGfx, element, isThrowing);
    }

    if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isTypedEvent"])(event, 'bpmn:TerminateEventDefinition')) {
      return renderer('bpmn:TerminateEventDefinition')(parentGfx, element, isThrowing);
    }

    return null;
  }

  function renderLabel(parentGfx, label, options) {
    options = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({
      size: {
        width: 100
      }
    }, options);
    var text = textRenderer.createText(label || '', options);
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["classes"])(text).add('djs-label');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["append"])(parentGfx, text);
    return text;
  }

  function renderEmbeddedLabel(parentGfx, element, align) {
    var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
    return renderLabel(parentGfx, semantic.name, {
      box: element,
      align: align,
      padding: 5,
      style: {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      }
    });
  }

  function renderExternalLabel(parentGfx, element) {
    var box = {
      width: 90,
      height: 30,
      x: element.width / 2 + element.x,
      y: element.height / 2 + element.y
    };
    return renderLabel(parentGfx, Object(_features_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["getLabel"])(element), {
      box: box,
      fitBox: true,
      style: Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, textRenderer.getExternalStyle(), {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      })
    });
  }

  function renderLaneLabel(parentGfx, text, element) {
    var textBox = renderLabel(parentGfx, text, {
      box: {
        height: 30,
        width: element.height
      },
      align: 'center-middle',
      style: {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      }
    });
    var top = -1 * element.height;
    Object(diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_10__["transform"])(textBox, 0, -top, 270);
  }

  function createPathFromConnection(connection) {
    var waypoints = connection.waypoints;
    var pathData = 'm  ' + waypoints[0].x + ',' + waypoints[0].y;

    for (var i = 1; i < waypoints.length; i++) {
      pathData += 'L' + waypoints[i].x + ',' + waypoints[i].y + ' ';
    }

    return pathData;
  }

  var handlers = this.handlers = {
    'bpmn:Event': function (parentGfx, element, attrs) {
      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawCircle(parentGfx, element.width, element.height, attrs);
    },
    'bpmn:StartEvent': function (parentGfx, element) {
      var attrs = {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);

      if (!semantic.isInterrupting) {
        attrs = {
          strokeDasharray: '6',
          strokeLinecap: 'round',
          fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
          stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
        };
      }

      var circle = renderer('bpmn:Event')(parentGfx, element, attrs);
      renderEventContent(element, parentGfx);
      return circle;
    },
    'bpmn:MessageEventDefinition': function (parentGfx, element, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_MESSAGE', {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.235,
          my: 0.315
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor) : Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor);
      var stroke = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor) : Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor);
      var messagePath = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: stroke
      });
      return messagePath;
    },
    'bpmn:TimerEventDefinition': function (parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 0.2 * element.height, {
        strokeWidth: 2,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var pathData = pathMap.getScaledPath('EVENT_TIMER_WH', {
        xScaleFactor: 0.75,
        yScaleFactor: 0.75,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.5,
          my: 0.5
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 2,
        strokeLinecap: 'square',
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });

      for (var i = 0; i < 12; i++) {
        var linePathData = pathMap.getScaledPath('EVENT_TIMER_LINE', {
          xScaleFactor: 0.75,
          yScaleFactor: 0.75,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.5,
            my: 0.5
          }
        });
        var width = element.width / 2;
        var height = element.height / 2;
        drawPath(parentGfx, linePathData, {
          strokeWidth: 1,
          strokeLinecap: 'square',
          transform: 'rotate(' + i * 30 + ',' + height + ',' + width + ')',
          stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
        });
      }

      return circle;
    },
    'bpmn:EscalationEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_ESCALATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:ConditionalEventDefinition': function (parentGfx, event) {
      var pathData = pathMap.getScaledPath('EVENT_CONDITIONAL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.222
        }
      });
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:LinkEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_LINK', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.57,
          my: 0.263
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:ErrorEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_ERROR', {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.2,
          my: 0.722
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:CancelEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_CANCEL_45', {
        xScaleFactor: 1.0,
        yScaleFactor: 1.0,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.638,
          my: -0.055
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      var path = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
      Object(diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_10__["rotate"])(path, 45);
      return path;
    },
    'bpmn:CompensateEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_COMPENSATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.22,
          my: 0.5
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:SignalEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_SIGNAL', {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:MultipleEventDefinition': function (parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath('EVENT_MULTIPLE', {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.222,
          my: 0.36
        }
      });
      var fill = isThrowing ? Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor) : 'none';
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: fill
      });
    },
    'bpmn:ParallelMultipleEventDefinition': function (parentGfx, event) {
      var pathData = pathMap.getScaledPath('EVENT_PARALLEL_MULTIPLE', {
        xScaleFactor: 1.2,
        yScaleFactor: 1.2,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.458,
          my: 0.194
        }
      });
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(event, defaultStrokeColor)
      });
    },
    'bpmn:EndEvent': function (parentGfx, element) {
      var circle = renderer('bpmn:Event')(parentGfx, element, {
        strokeWidth: 4,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      renderEventContent(element, parentGfx, true);
      return circle;
    },
    'bpmn:TerminateEventDefinition': function (parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 8, {
        strokeWidth: 4,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return circle;
    },
    'bpmn:IntermediateEvent': function (parentGfx, element) {
      var outer = renderer('bpmn:Event')(parentGfx, element, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      /* inner */

      drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, 'none'),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      renderEventContent(element, parentGfx);
      return outer;
    },
    'bpmn:IntermediateCatchEvent': as('bpmn:IntermediateEvent'),
    'bpmn:IntermediateThrowEvent': as('bpmn:IntermediateEvent'),
    'bpmn:Activity': function (parentGfx, element, attrs) {
      attrs = attrs || {};

      if (!('fillOpacity' in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }

      return drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, attrs);
    },
    'bpmn:Task': function (parentGfx, element) {
      var attrs = {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };
      var rect = renderer('bpmn:Activity')(parentGfx, element, attrs);
      renderEmbeddedLabel(parentGfx, element, 'center-middle');
      attachTaskMarkers(parentGfx, element);
      return rect;
    },
    'bpmn:ServiceTask': function (parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathDataBG = pathMap.getScaledPath('TASK_TYPE_SERVICE', {
        abspos: {
          x: 12,
          y: 18
        }
      });
      /* service bg */

      drawPath(parentGfx, pathDataBG, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var fillPathData = pathMap.getScaledPath('TASK_TYPE_SERVICE_FILL', {
        abspos: {
          x: 17.2,
          y: 18
        }
      });
      /* service fill */

      drawPath(parentGfx, fillPathData, {
        strokeWidth: 0,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor)
      });
      var pathData = pathMap.getScaledPath('TASK_TYPE_SERVICE', {
        abspos: {
          x: 17,
          y: 22
        }
      });
      /* service */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return task;
    },
    'bpmn:UserTask': function (parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);
      var x = 15;
      var y = 12;
      var pathData = pathMap.getScaledPath('TASK_TYPE_USER_1', {
        abspos: {
          x: x,
          y: y
        }
      });
      /* user path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var pathData2 = pathMap.getScaledPath('TASK_TYPE_USER_2', {
        abspos: {
          x: x,
          y: y
        }
      });
      /* user2 path */

      drawPath(parentGfx, pathData2, {
        strokeWidth: 0.5,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var pathData3 = pathMap.getScaledPath('TASK_TYPE_USER_3', {
        abspos: {
          x: x,
          y: y
        }
      });
      /* user3 path */

      drawPath(parentGfx, pathData3, {
        strokeWidth: 0.5,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return task;
    },
    'bpmn:ManualTask': function (parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathData = pathMap.getScaledPath('TASK_TYPE_MANUAL', {
        abspos: {
          x: 17,
          y: 15
        }
      });
      /* manual path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        // 0.25,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return task;
    },
    'bpmn:SendTask': function (parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathData = pathMap.getScaledPath('TASK_TYPE_SEND', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: 21,
        containerHeight: 14,
        position: {
          mx: 0.285,
          my: 0.357
        }
      });
      /* send path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor)
      });
      return task;
    },
    'bpmn:ReceiveTask': function (parentGfx, element) {
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathData;

      if (semantic.instantiate) {
        drawCircle(parentGfx, 28, 28, 20 * 0.22, {
          strokeWidth: 1
        });
        pathData = pathMap.getScaledPath('TASK_TYPE_INSTANTIATING_SEND', {
          abspos: {
            x: 7.77,
            y: 9.52
          }
        });
      } else {
        pathData = pathMap.getScaledPath('TASK_TYPE_SEND', {
          xScaleFactor: 0.9,
          yScaleFactor: 0.9,
          containerWidth: 21,
          containerHeight: 14,
          position: {
            mx: 0.3,
            my: 0.4
          }
        });
      }
      /* receive path */


      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return task;
    },
    'bpmn:ScriptTask': function (parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);
      var pathData = pathMap.getScaledPath('TASK_TYPE_SCRIPT', {
        abspos: {
          x: 15,
          y: 20
        }
      });
      /* script path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return task;
    },
    'bpmn:BusinessRuleTask': function (parentGfx, element) {
      var task = renderer('bpmn:Task')(parentGfx, element);
      var headerPathData = pathMap.getScaledPath('TASK_TYPE_BUSINESS_RULE_HEADER', {
        abspos: {
          x: 8,
          y: 8
        }
      });
      var businessHeaderPath = drawPath(parentGfx, headerPathData);
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(businessHeaderPath, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, '#aaaaaa'),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var headerData = pathMap.getScaledPath('TASK_TYPE_BUSINESS_RULE_MAIN', {
        abspos: {
          x: 8,
          y: 8
        }
      });
      var businessPath = drawPath(parentGfx, headerData);
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(businessPath, {
        strokeWidth: 1,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return task;
    },
    'bpmn:SubProcess': function (parentGfx, element, attrs) {
      attrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      }, attrs);
      var rect = renderer('bpmn:Activity')(parentGfx, element, attrs);
      var expanded = Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(element);

      if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isEventSubProcess"])(element)) {
        Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(rect, {
          strokeDasharray: '1,2'
        });
      }

      renderEmbeddedLabel(parentGfx, element, expanded ? 'center-top' : 'center-middle');

      if (expanded) {
        attachTaskMarkers(parentGfx, element);
      } else {
        attachTaskMarkers(parentGfx, element, ['SubProcessMarker']);
      }

      return rect;
    },
    'bpmn:AdHocSubProcess': function (parentGfx, element) {
      return renderer('bpmn:SubProcess')(parentGfx, element);
    },
    'bpmn:Transaction': function (parentGfx, element) {
      var outer = renderer('bpmn:SubProcess')(parentGfx, element);
      var innerAttrs = styles.style(['no-fill', 'no-events'], {
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      /* inner path */

      drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS - 2, INNER_OUTER_DIST, innerAttrs);
      return outer;
    },
    'bpmn:CallActivity': function (parentGfx, element) {
      return renderer('bpmn:SubProcess')(parentGfx, element, {
        strokeWidth: 5
      });
    },
    'bpmn:Participant': function (parentGfx, element) {
      var attrs = {
        fillOpacity: DEFAULT_FILL_OPACITY,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };
      var lane = renderer('bpmn:Lane')(parentGfx, element, attrs);
      var expandedPool = Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(element);

      if (expandedPool) {
        drawLine(parentGfx, [{
          x: 30,
          y: 0
        }, {
          x: 30,
          y: element.height
        }], {
          stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
        });
        var text = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element).name;
        renderLaneLabel(parentGfx, text, element);
      } else {
        // Collapsed pool draw text inline
        var text2 = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element).name;
        renderLabel(parentGfx, text2, {
          box: element,
          align: 'center-middle',
          style: {
            fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
          }
        });
      }

      var participantMultiplicity = !!Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element).participantMultiplicity;

      if (participantMultiplicity) {
        renderer('ParticipantMultiplicityMarker')(parentGfx, element);
      }

      return lane;
    },
    'bpmn:Lane': function (parentGfx, element, attrs) {
      var rect = drawRect(parentGfx, element.width, element.height, 0, Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        fillOpacity: HIGH_FILL_OPACITY,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      }, attrs));
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);

      if (semantic.$type === 'bpmn:Lane') {
        var text = semantic.name;
        renderLaneLabel(parentGfx, text, element);
      }

      return rect;
    },
    'bpmn:InclusiveGateway': function (parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);
      /* circle path */

      drawCircle(parentGfx, element.width, element.height, element.height * 0.24, {
        strokeWidth: 2.5,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return diamond;
    },
    'bpmn:ExclusiveGateway': function (parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);
      var pathData = pathMap.getScaledPath('GATEWAY_EXCLUSIVE', {
        xScaleFactor: 0.4,
        yScaleFactor: 0.4,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.32,
          my: 0.3
        }
      });

      if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getDi"])(element).isMarkerVisible) {
        drawPath(parentGfx, pathData, {
          strokeWidth: 1,
          fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
          stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
        });
      }

      return diamond;
    },
    'bpmn:ComplexGateway': function (parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);
      var pathData = pathMap.getScaledPath('GATEWAY_COMPLEX', {
        xScaleFactor: 0.5,
        yScaleFactor: 0.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.26
        }
      });
      /* complex path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return diamond;
    },
    'bpmn:ParallelGateway': function (parentGfx, element) {
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);
      var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
        xScaleFactor: 0.6,
        yScaleFactor: 0.6,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.2
        }
      });
      /* parallel path */

      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return diamond;
    },
    'bpmn:EventBasedGateway': function (parentGfx, element) {
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
      var diamond = renderer('bpmn:Gateway')(parentGfx, element);
      /* outer circle path */

      drawCircle(parentGfx, element.width, element.height, element.height * 0.20, {
        strokeWidth: 1,
        fill: 'none',
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var type = semantic.eventGatewayType;
      var instantiate = !!semantic.instantiate;

      function drawEvent() {
        var pathData = pathMap.getScaledPath('GATEWAY_EVENT_BASED', {
          xScaleFactor: 0.18,
          yScaleFactor: 0.18,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.36,
            my: 0.44
          }
        });
        var attrs = {
          strokeWidth: 2,
          fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, 'none'),
          stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
        };
        /* event path */

        drawPath(parentGfx, pathData, attrs);
      }

      if (type === 'Parallel') {
        var pathData = pathMap.getScaledPath('GATEWAY_PARALLEL', {
          xScaleFactor: 0.4,
          yScaleFactor: 0.4,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.474,
            my: 0.296
          }
        });
        var parallelPath = drawPath(parentGfx, pathData);
        Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(parallelPath, {
          strokeWidth: 1,
          fill: 'none'
        });
      } else if (type === 'Exclusive') {
        if (!instantiate) {
          var innerCircle = drawCircle(parentGfx, element.width, element.height, element.height * 0.26);
          Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(innerCircle, {
            strokeWidth: 1,
            fill: 'none',
            stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
          });
        }

        drawEvent();
      }

      return diamond;
    },
    'bpmn:Gateway': function (parentGfx, element) {
      var attrs = {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };
      return drawDiamond(parentGfx, element.width, element.height, attrs);
    },
    'bpmn:SequenceFlow': function (parentGfx, element) {
      var pathData = createPathFromConnection(element);
      var fill = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
          stroke = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor);
      var attrs = {
        strokeLinejoin: 'round',
        markerEnd: marker('sequenceflow-end', fill, stroke),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };
      var path = drawPath(parentGfx, pathData, attrs);
      var sequenceFlow = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
      var source;

      if (element.source) {
        source = element.source.businessObject; // conditional flow marker

        if (sequenceFlow.conditionExpression && source.$instanceOf('bpmn:Activity')) {
          Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(path, {
            markerStart: marker('conditional-flow-marker', fill, stroke)
          });
        } // default marker


        if (source.default && (source.$instanceOf('bpmn:Gateway') || source.$instanceOf('bpmn:Activity')) && source.default === sequenceFlow) {
          Object(tiny_svg__WEBPACK_IMPORTED_MODULE_9__["attr"])(path, {
            markerStart: marker('conditional-default-flow-marker', fill, stroke)
          });
        }
      }

      return path;
    },
    'bpmn:Association': function (parentGfx, element, attrs) {
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
      var fill = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
          stroke = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor);
      attrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        strokeDasharray: '0.5, 5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      }, attrs || {});

      if (semantic.associationDirection === 'One' || semantic.associationDirection === 'Both') {
        attrs.markerEnd = marker('association-end', fill, stroke);
      }

      if (semantic.associationDirection === 'Both') {
        attrs.markerStart = marker('association-start', fill, stroke);
      }

      return drawLine(parentGfx, element.waypoints, attrs);
    },
    'bpmn:DataInputAssociation': function (parentGfx, element) {
      var fill = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
          stroke = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor);
      return renderer('bpmn:Association')(parentGfx, element, {
        markerEnd: marker('association-end', fill, stroke)
      });
    },
    'bpmn:DataOutputAssociation': function (parentGfx, element) {
      var fill = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
          stroke = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor);
      return renderer('bpmn:Association')(parentGfx, element, {
        markerEnd: marker('association-end', fill, stroke)
      });
    },
    'bpmn:MessageFlow': function (parentGfx, element) {
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element),
          di = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getDi"])(element);
      var fill = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
          stroke = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor);
      var pathData = createPathFromConnection(element);
      var attrs = {
        markerEnd: marker('messageflow-end', fill, stroke),
        markerStart: marker('messageflow-start', fill, stroke),
        strokeDasharray: '10, 12',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1.5px',
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };
      var path = drawPath(parentGfx, pathData, attrs);

      if (semantic.messageRef) {
        var midPoint = path.getPointAtLength(path.getTotalLength() / 2);
        var markerPathData = pathMap.getScaledPath('MESSAGE_FLOW_MARKER', {
          abspos: {
            x: midPoint.x,
            y: midPoint.y
          }
        });
        var messageAttrs = {
          strokeWidth: 1
        };

        if (di.messageVisibleKind === 'initiating') {
          messageAttrs.fill = 'white';
          messageAttrs.stroke = 'black';
        } else {
          messageAttrs.fill = '#888';
          messageAttrs.stroke = 'white';
        }

        drawPath(parentGfx, markerPathData, messageAttrs);
      }

      return path;
    },
    'bpmn:DataObject': function (parentGfx, element) {
      var pathData = pathMap.getScaledPath('DATA_OBJECT_PATH', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.474,
          my: 0.296
        }
      });
      var elementObject = drawPath(parentGfx, pathData, {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);

      if (Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["isCollection"])(semantic)) {
        renderDataItemCollection(parentGfx, element);
      }

      return elementObject;
    },
    'bpmn:DataObjectReference': as('bpmn:DataObject'),
    'bpmn:DataInput': function (parentGfx, element) {
      var arrowPathData = pathMap.getRawPath('DATA_ARROW'); // page

      var elementObject = renderer('bpmn:DataObject')(parentGfx, element);
      /* input arrow path */

      drawPath(parentGfx, arrowPathData, {
        strokeWidth: 1
      });
      return elementObject;
    },
    'bpmn:DataOutput': function (parentGfx, element) {
      var arrowPathData = pathMap.getRawPath('DATA_ARROW'); // page

      var elementObject = renderer('bpmn:DataObject')(parentGfx, element);
      /* output arrow path */

      drawPath(parentGfx, arrowPathData, {
        strokeWidth: 1,
        fill: 'black'
      });
      return elementObject;
    },
    'bpmn:DataStoreReference': function (parentGfx, element) {
      var DATA_STORE_PATH = pathMap.getScaledPath('DATA_STORE', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0,
          my: 0.133
        }
      });
      var elementStore = drawPath(parentGfx, DATA_STORE_PATH, {
        strokeWidth: 2,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      return elementStore;
    },
    'bpmn:BoundaryEvent': function (parentGfx, element) {
      var semantic = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element),
          cancel = semantic.cancelActivity;
      var attrs = {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      };

      if (!cancel) {
        attrs.strokeDasharray = '6';
        attrs.strokeLinecap = 'round';
      } // apply fillOpacity


      var outerAttrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, attrs, {
        fillOpacity: 1
      }); // apply no-fill

      var innerAttrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, attrs, {
        fill: 'none'
      });
      var outer = renderer('bpmn:Event')(parentGfx, element, outerAttrs);
      /* inner path */

      drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, innerAttrs);
      renderEventContent(element, parentGfx);
      return outer;
    },
    'bpmn:Group': function (parentGfx, element) {
      var group = drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, {
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        strokeWidth: 1,
        strokeDasharray: '8,3,1,3',
        fill: 'none',
        pointerEvents: 'none'
      });
      return group;
    },
    'label': function (parentGfx, element) {
      return renderExternalLabel(parentGfx, element);
    },
    'bpmn:TextAnnotation': function (parentGfx, element) {
      var style = {
        'fill': 'none',
        'stroke': 'none'
      };
      var textElement = drawRect(parentGfx, element.width, element.height, 0, 0, style);
      var textPathData = pathMap.getScaledPath('TEXT_ANNOTATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.0
        }
      });
      drawPath(parentGfx, textPathData, {
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
      var text = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element).text || '';
      renderLabel(parentGfx, text, {
        box: element,
        align: 'left-top',
        padding: 5,
        style: {
          fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
        }
      });
      return textElement;
    },
    'ParticipantMultiplicityMarker': function (parentGfx, element) {
      var markerPath = pathMap.getScaledPath('MARKER_PARALLEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: element.width / 2 / element.width,
          my: (element.height - 15) / element.height
        }
      });
      drawMarker('participant-multiplicity', parentGfx, markerPath, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
    },
    'SubProcessMarker': function (parentGfx, element) {
      var markerRect = drawRect(parentGfx, 14, 14, 0, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      }); // Process marker is placed in the middle of the box
      // therefore fixed values can be used here

      Object(diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_10__["translate"])(markerRect, element.width / 2 - 7.5, element.height - 20);
      var markerPath = pathMap.getScaledPath('MARKER_SUB_PROCESS', {
        xScaleFactor: 1.5,
        yScaleFactor: 1.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 - 7.5) / element.width,
          my: (element.height - 20) / element.height
        }
      });
      drawMarker('sub-process', parentGfx, markerPath, {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
    },
    'ParallelMarker': function (parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_PARALLEL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.parallel) / element.width,
          my: (element.height - 20) / element.height
        }
      });
      drawMarker('parallel', parentGfx, markerPath, {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
    },
    'SequentialMarker': function (parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_SEQUENTIAL', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.seq) / element.width,
          my: (element.height - 19) / element.height
        }
      });
      drawMarker('sequential', parentGfx, markerPath, {
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
    },
    'CompensationMarker': function (parentGfx, element, position) {
      var markerMath = pathMap.getScaledPath('MARKER_COMPENSATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.compensation) / element.width,
          my: (element.height - 13) / element.height
        }
      });
      drawMarker('compensation', parentGfx, markerMath, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
    },
    'LoopMarker': function (parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_LOOP', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.loop) / element.width,
          my: (element.height - 7) / element.height
        }
      });
      drawMarker('loop', parentGfx, markerPath, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getFillColor"])(element, defaultFillColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        strokeLinecap: 'round',
        strokeMiterlimit: 0.5
      });
    },
    'AdhocMarker': function (parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath('MARKER_ADHOC', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.adhoc) / element.width,
          my: (element.height - 15) / element.height
        }
      });
      drawMarker('adhoc', parentGfx, markerPath, {
        strokeWidth: 1,
        fill: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor),
        stroke: Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getStrokeColor"])(element, defaultStrokeColor)
      });
    }
  };

  function attachTaskMarkers(parentGfx, element, taskMarkers) {
    var obj = Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getSemantic"])(element);
    var subprocess = taskMarkers && taskMarkers.indexOf('SubProcessMarker') !== -1;
    var position;

    if (subprocess) {
      position = {
        seq: -21,
        parallel: -22,
        compensation: -42,
        loop: -18,
        adhoc: 10
      };
    } else {
      position = {
        seq: -3,
        parallel: -6,
        compensation: -27,
        loop: 0,
        adhoc: 10
      };
    }

    Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(taskMarkers, function (marker) {
      renderer(marker)(parentGfx, element, position);
    });

    if (obj.isForCompensation) {
      renderer('CompensationMarker')(parentGfx, element, position);
    }

    if (obj.$type === 'bpmn:AdHocSubProcess') {
      renderer('AdhocMarker')(parentGfx, element, position);
    }

    var loopCharacteristics = obj.loopCharacteristics,
        isSequential = loopCharacteristics && loopCharacteristics.isSequential;

    if (loopCharacteristics) {
      if (isSequential === undefined) {
        renderer('LoopMarker')(parentGfx, element, position);
      }

      if (isSequential === false) {
        renderer('ParallelMarker')(parentGfx, element, position);
      }

      if (isSequential === true) {
        renderer('SequentialMarker')(parentGfx, element, position);
      }
    }
  }

  function renderDataItemCollection(parentGfx, element) {
    var yPosition = (element.height - 16) / element.height;
    var pathData = pathMap.getScaledPath('DATA_OBJECT_COLLECTION_PATH', {
      xScaleFactor: 1,
      yScaleFactor: 1,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.451,
        my: yPosition
      }
    });
    /* collection path */

    drawPath(parentGfx, pathData, {
      strokeWidth: 2
    });
  } // extension API, use at your own risk


  this._drawPath = drawPath;
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BpmnRenderer, diagram_js_lib_draw_BaseRenderer__WEBPACK_IMPORTED_MODULE_2___default.a);
BpmnRenderer.$inject = ['config.bpmnRenderer', 'eventBus', 'styles', 'pathMap', 'canvas', 'textRenderer'];

BpmnRenderer.prototype.canRender = function (element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_5__["is"])(element, 'bpmn:BaseElement');
};

BpmnRenderer.prototype.drawShape = function (parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];
  /* jshint -W040 */

  return h(parentGfx, element);
};

BpmnRenderer.prototype.drawConnection = function (parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];
  /* jshint -W040 */

  return h(parentGfx, element);
};

BpmnRenderer.prototype.getShapePath = function (element) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_5__["is"])(element, 'bpmn:Event')) {
    return Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getCirclePath"])(element);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_5__["is"])(element, 'bpmn:Activity')) {
    return Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getRoundRectPath"])(element, TASK_BORDER_RADIUS);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_5__["is"])(element, 'bpmn:Gateway')) {
    return Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getDiamondPath"])(element);
  }

  return Object(_BpmnRenderUtil__WEBPACK_IMPORTED_MODULE_7__["getRectPath"])(element);
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/PathMap.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/PathMap.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathMap; });
/**
 * Map containing SVG paths needed by BpmnRenderer.
 */
function PathMap() {
  /**
   * Contains a map of path elements
   *
   * <h1>Path definition</h1>
   * A parameterized path is defined like this:
   * <pre>
   * 'GATEWAY_PARALLEL': {
   *   d: 'm {mx},{my} {e.x0},0 0,{e.x1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} ' +
          '-{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z',
   *   height: 17.5,
   *   width:  17.5,
   *   heightElements: [2.5, 7.5],
   *   widthElements: [2.5, 7.5]
   * }
   * </pre>
   * <p>It's important to specify a correct <b>height and width</b> for the path as the scaling
   * is based on the ratio between the specified height and width in this object and the
   * height and width that is set as scale target (Note x,y coordinates will be scaled with
   * individual ratios).</p>
   * <p>The '<b>heightElements</b>' and '<b>widthElements</b>' array must contain the values that will be scaled.
   * The scaling is based on the computed ratios.
   * Coordinates on the y axis should be in the <b>heightElement</b>'s array, they will be scaled using
   * the computed ratio coefficient.
   * In the parameterized path the scaled values can be accessed through the 'e' object in {} brackets.
   *   <ul>
   *    <li>The values for the y axis can be accessed in the path string using {e.y0}, {e.y1}, ....</li>
   *    <li>The values for the x axis can be accessed in the path string using {e.x0}, {e.x1}, ....</li>
   *   </ul>
   *   The numbers x0, x1 respectively y0, y1, ... map to the corresponding array index.
   * </p>
   */
  this.pathMap = {
    'EVENT_MESSAGE': {
      d: 'm {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}',
      height: 36,
      width: 36,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'EVENT_SIGNAL': {
      d: 'M {mx},{my} l {e.x0},{e.y0} l -{e.x1},0 Z',
      height: 36,
      width: 36,
      heightElements: [18],
      widthElements: [10, 20]
    },
    'EVENT_ESCALATION': {
      d: 'M {mx},{my} l {e.x0},{e.y0} l -{e.x0},-{e.y1} l -{e.x0},{e.y1} Z',
      height: 36,
      width: 36,
      heightElements: [20, 7],
      widthElements: [8]
    },
    'EVENT_CONDITIONAL': {
      d: 'M {e.x0},{e.y0} l {e.x1},0 l 0,{e.y2} l -{e.x1},0 Z ' + 'M {e.x2},{e.y3} l {e.x0},0 ' + 'M {e.x2},{e.y4} l {e.x0},0 ' + 'M {e.x2},{e.y5} l {e.x0},0 ' + 'M {e.x2},{e.y6} l {e.x0},0 ' + 'M {e.x2},{e.y7} l {e.x0},0 ' + 'M {e.x2},{e.y8} l {e.x0},0 ',
      height: 36,
      width: 36,
      heightElements: [8.5, 14.5, 18, 11.5, 14.5, 17.5, 20.5, 23.5, 26.5],
      widthElements: [10.5, 14.5, 12.5]
    },
    'EVENT_LINK': {
      d: 'm {mx},{my} 0,{e.y0} -{e.x1},0 0,{e.y1} {e.x1},0 0,{e.y0} {e.x0},-{e.y2} -{e.x0},-{e.y2} z',
      height: 36,
      width: 36,
      heightElements: [4.4375, 6.75, 7.8125],
      widthElements: [9.84375, 13.5]
    },
    'EVENT_ERROR': {
      d: 'm {mx},{my} {e.x0},-{e.y0} {e.x1},-{e.y1} {e.x2},{e.y2} {e.x3},-{e.y3} -{e.x4},{e.y4} -{e.x5},-{e.y5} z',
      height: 36,
      width: 36,
      heightElements: [0.023, 8.737, 8.151, 16.564, 10.591, 8.714],
      widthElements: [0.085, 6.672, 6.97, 4.273, 5.337, 6.636]
    },
    'EVENT_CANCEL_45': {
      d: 'm {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 ' + '0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z',
      height: 36,
      width: 36,
      heightElements: [4.75, 8.5],
      widthElements: [4.75, 8.5]
    },
    'EVENT_COMPENSATION': {
      d: 'm {mx},{my} {e.x0},-{e.y0} 0,{e.y1} z m {e.x1},-{e.y2} {e.x2},-{e.y3} 0,{e.y1} -{e.x2},-{e.y3} z',
      height: 36,
      width: 36,
      heightElements: [6.5, 13, 0.4, 6.1],
      widthElements: [9, 9.3, 8.7]
    },
    'EVENT_TIMER_WH': {
      d: 'M {mx},{my} l {e.x0},-{e.y0} m -{e.x0},{e.y0} l {e.x1},{e.y1} ',
      height: 36,
      width: 36,
      heightElements: [10, 2],
      widthElements: [3, 7]
    },
    'EVENT_TIMER_LINE': {
      d: 'M {mx},{my} ' + 'm {e.x0},{e.y0} l -{e.x1},{e.y1} ',
      height: 36,
      width: 36,
      heightElements: [10, 3],
      widthElements: [0, 0]
    },
    'EVENT_MULTIPLE': {
      d: 'm {mx},{my} {e.x1},-{e.y0} {e.x1},{e.y0} -{e.x0},{e.y1} -{e.x2},0 z',
      height: 36,
      width: 36,
      heightElements: [6.28099, 12.56199],
      widthElements: [3.1405, 9.42149, 12.56198]
    },
    'EVENT_PARALLEL_MULTIPLE': {
      d: 'm {mx},{my} {e.x0},0 0,{e.y1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} ' + '-{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z',
      height: 36,
      width: 36,
      heightElements: [2.56228, 7.68683],
      widthElements: [2.56228, 7.68683]
    },
    'GATEWAY_EXCLUSIVE': {
      d: 'm {mx},{my} {e.x0},{e.y0} {e.x1},{e.y0} {e.x2},0 {e.x4},{e.y2} ' + '{e.x4},{e.y1} {e.x2},0 {e.x1},{e.y3} {e.x0},{e.y3} ' + '{e.x3},0 {e.x5},{e.y1} {e.x5},{e.y2} {e.x3},0 z',
      height: 17.5,
      width: 17.5,
      heightElements: [8.5, 6.5312, -6.5312, -8.5],
      widthElements: [6.5, -6.5, 3, -3, 5, -5]
    },
    'GATEWAY_PARALLEL': {
      d: 'm {mx},{my} 0,{e.y1} -{e.x1},0 0,{e.y0} {e.x1},0 0,{e.y1} {e.x0},0 ' + '0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z',
      height: 30,
      width: 30,
      heightElements: [5, 12.5],
      widthElements: [5, 12.5]
    },
    'GATEWAY_EVENT_BASED': {
      d: 'm {mx},{my} {e.x0},{e.y0} {e.x0},{e.y1} {e.x1},{e.y2} {e.x2},0 z',
      height: 11,
      width: 11,
      heightElements: [-6, 6, 12, -12],
      widthElements: [9, -3, -12]
    },
    'GATEWAY_COMPLEX': {
      d: 'm {mx},{my} 0,{e.y0} -{e.x0},-{e.y1} -{e.x1},{e.y2} {e.x0},{e.y1} -{e.x2},0 0,{e.y3} ' + '{e.x2},0  -{e.x0},{e.y1} l {e.x1},{e.y2} {e.x0},-{e.y1} 0,{e.y0} {e.x3},0 0,-{e.y0} {e.x0},{e.y1} ' + '{e.x1},-{e.y2} -{e.x0},-{e.y1} {e.x2},0 0,-{e.y3} -{e.x2},0 {e.x0},-{e.y1} -{e.x1},-{e.y2} ' + '-{e.x0},{e.y1} 0,-{e.y0} -{e.x3},0 z',
      height: 17.125,
      width: 17.125,
      heightElements: [4.875, 3.4375, 2.125, 3],
      widthElements: [3.4375, 2.125, 4.875, 3]
    },
    'DATA_OBJECT_PATH': {
      d: 'm 0,0 {e.x1},0 {e.x0},{e.y0} 0,{e.y1} -{e.x2},0 0,-{e.y2} {e.x1},0 0,{e.y0} {e.x0},0',
      height: 61,
      width: 51,
      heightElements: [10, 50, 60],
      widthElements: [10, 40, 50, 60]
    },
    'DATA_OBJECT_COLLECTION_PATH': {
      d: 'm {mx}, {my} ' + 'm  0 15  l 0 -15 ' + 'm  4 15  l 0 -15 ' + 'm  4 15  l 0 -15 ',
      height: 61,
      width: 51,
      heightElements: [12],
      widthElements: [1, 6, 12, 15]
    },
    'DATA_ARROW': {
      d: 'm 5,9 9,0 0,-3 5,5 -5,5 0,-3 -9,0 z',
      height: 61,
      width: 51,
      heightElements: [],
      widthElements: []
    },
    'DATA_STORE': {
      d: 'm  {mx},{my} ' + 'l  0,{e.y2} ' + 'c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 ' + 'l  0,-{e.y2} ' + 'c -{e.x0},-{e.y1} -{e.x1},-{e.y1} -{e.x2},0' + 'c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 ' + 'm  -{e.x2},{e.y0}' + 'c  {e.x0},{e.y1} {e.x1},{e.y1} {e.x2},0' + 'm  -{e.x2},{e.y0}' + 'c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0',
      height: 61,
      width: 61,
      heightElements: [7, 10, 45],
      widthElements: [2, 58, 60]
    },
    'TEXT_ANNOTATION': {
      d: 'm {mx}, {my} m 10,0 l -10,0 l 0,{e.y0} l 10,0',
      height: 30,
      width: 10,
      heightElements: [30],
      widthElements: [10]
    },
    'MARKER_SUB_PROCESS': {
      d: 'm{mx},{my} m 7,2 l 0,10 m -5,-5 l 10,0',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'MARKER_PARALLEL': {
      d: 'm{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'MARKER_SEQUENTIAL': {
      d: 'm{mx},{my} m 0,3 l 10,0 m -10,3 l 10,0 m -10,3 l 10,0',
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    'MARKER_COMPENSATION': {
      d: 'm {mx},{my} 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z',
      height: 10,
      width: 21,
      heightElements: [],
      widthElements: []
    },
    'MARKER_LOOP': {
      d: 'm {mx},{my} c 3.526979,0 6.386161,-2.829858 6.386161,-6.320661 0,-3.490806 -2.859182,-6.320661 ' + '-6.386161,-6.320661 -3.526978,0 -6.38616,2.829855 -6.38616,6.320661 0,1.745402 ' + '0.714797,3.325567 1.870463,4.469381 0.577834,0.571908 1.265885,1.034728 2.029916,1.35457 ' + 'l -0.718163,-3.909793 m 0.718163,3.909793 -3.885211,0.802902',
      height: 13.9,
      width: 13.7,
      heightElements: [],
      widthElements: []
    },
    'MARKER_ADHOC': {
      d: 'm {mx},{my} m 0.84461,2.64411 c 1.05533,-1.23780996 2.64337,-2.07882 4.29653,-1.97997996 2.05163,0.0805 ' + '3.85579,1.15803 5.76082,1.79107 1.06385,0.34139996 2.24454,0.1438 3.18759,-0.43767 0.61743,-0.33642 ' + '1.2775,-0.64078 1.7542,-1.17511 0,0.56023 0,1.12046 0,1.6807 -0.98706,0.96237996 -2.29792,1.62393996 ' + '-3.6918,1.66181996 -1.24459,0.0927 -2.46671,-0.2491 -3.59505,-0.74812 -1.35789,-0.55965 ' + '-2.75133,-1.33436996 -4.27027,-1.18121996 -1.37741,0.14601 -2.41842,1.13685996 -3.44288,1.96782996 z',
      height: 4,
      width: 15,
      heightElements: [],
      widthElements: []
    },
    'TASK_TYPE_SEND': {
      d: 'm {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}',
      height: 14,
      width: 21,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'TASK_TYPE_SCRIPT': {
      d: 'm {mx},{my} c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 ' + 'c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z ' + 'm -7,-12 l 5,0 ' + 'm -4.5,3 l 4.5,0 ' + 'm -3,3 l 5,0' + 'm -4,3 l 5,0',
      height: 15,
      width: 12.6,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    'TASK_TYPE_USER_1': {
      d: 'm {mx},{my} c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 ' + '-4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 ' + '0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 ' + 'h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 z' + 'm -8,6 l 0,5.5 m 11,0 l 0,-5'
    },
    'TASK_TYPE_USER_2': {
      d: 'm {mx},{my} m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 ' + '-2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 '
    },
    'TASK_TYPE_USER_3': {
      d: 'm {mx},{my} m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 ' + '4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 ' + '-4.20799998,3.36699999 -4.20699998,4.34799999 z'
    },
    'TASK_TYPE_MANUAL': {
      d: 'm {mx},{my} c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 ' + '-0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 ' + '0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 ' + '-1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 ' + '0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 ' + '-10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 ' + '2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 ' + '-0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 ' + '-1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 ' + '-0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 ' + '0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 ' + '-5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z'
    },
    'TASK_TYPE_INSTANTIATING_SEND': {
      d: 'm {mx},{my} l 0,8.4 l 12.6,0 l 0,-8.4 z l 6.3,3.6 l 6.3,-3.6'
    },
    'TASK_TYPE_SERVICE': {
      d: 'm {mx},{my} v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 ' + '0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 ' + '-1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 ' + 'v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 ' + '-0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 ' + '-1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 ' + 'h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 ' + '-0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 ' + 'c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 ' + 'l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 ' + '0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 ' + 'c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z ' + 'm 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 ' + '0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 ' + '0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z'
    },
    'TASK_TYPE_SERVICE_FILL': {
      d: 'm {mx},{my} c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 ' + '0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 ' + '0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z'
    },
    'TASK_TYPE_BUSINESS_RULE_HEADER': {
      d: 'm {mx},{my} 0,4 20,0 0,-4 z'
    },
    'TASK_TYPE_BUSINESS_RULE_MAIN': {
      d: 'm {mx},{my} 0,12 20,0 0,-12 z' + 'm 0,8 l 20,0 ' + 'm -13,-4 l 0,8'
    },
    'MESSAGE_FLOW_MARKER': {
      d: 'm {mx},{my} m -10.5 ,-7 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6'
    }
  };

  this.getRawPath = function getRawPath(pathId) {
    return this.pathMap[pathId].d;
  };
  /**
   * Scales the path to the given height and width.
   * <h1>Use case</h1>
   * <p>Use case is to scale the content of elements (event, gateways) based
   * on the element bounding box's size.
   * </p>
   * <h1>Why not transform</h1>
   * <p>Scaling a path with transform() will also scale the stroke and IE does not support
   * the option 'non-scaling-stroke' to prevent this.
   * Also there are use cases where only some parts of a path should be
   * scaled.</p>
   *
   * @param {String} pathId The ID of the path.
   * @param {Object} param <p>
   *   Example param object scales the path to 60% size of the container (data.width, data.height).
   *   <pre>
   *   {
   *     xScaleFactor: 0.6,
   *     yScaleFactor:0.6,
   *     containerWidth: data.width,
   *     containerHeight: data.height,
   *     position: {
   *       mx: 0.46,
   *       my: 0.2,
   *     }
   *   }
   *   </pre>
   *   <ul>
   *    <li>targetpathwidth = xScaleFactor * containerWidth</li>
   *    <li>targetpathheight = yScaleFactor * containerHeight</li>
   *    <li>Position is used to set the starting coordinate of the path. M is computed:
    *    <ul>
    *      <li>position.x * containerWidth</li>
    *      <li>position.y * containerHeight</li>
    *    </ul>
    *    Center of the container <pre> position: {
   *       mx: 0.5,
   *       my: 0.5,
   *     }</pre>
   *     Upper left corner of the container
   *     <pre> position: {
   *       mx: 0.0,
   *       my: 0.0,
   *     }</pre>
   *    </li>
   *   </ul>
   * </p>
   *
   */


  this.getScaledPath = function getScaledPath(pathId, param) {
    var rawPath = this.pathMap[pathId]; // positioning
    // compute the start point of the path

    var mx, my;

    if (param.abspos) {
      mx = param.abspos.x;
      my = param.abspos.y;
    } else {
      mx = param.containerWidth * param.position.mx;
      my = param.containerHeight * param.position.my;
    }

    var coordinates = {}; // map for the scaled coordinates

    if (param.position) {
      // path
      var heightRatio = param.containerHeight / rawPath.height * param.yScaleFactor;
      var widthRatio = param.containerWidth / rawPath.width * param.xScaleFactor; // Apply height ratio

      for (var heightIndex = 0; heightIndex < rawPath.heightElements.length; heightIndex++) {
        coordinates['y' + heightIndex] = rawPath.heightElements[heightIndex] * heightRatio;
      } // Apply width ratio


      for (var widthIndex = 0; widthIndex < rawPath.widthElements.length; widthIndex++) {
        coordinates['x' + widthIndex] = rawPath.widthElements[widthIndex] * widthRatio;
      }
    } // Apply value to raw path


    var path = format(rawPath.d, {
      mx: mx,
      my: my,
      e: coordinates
    });
    return path;
  };
} // helpers //////////////////////
// copied from https://github.com/adobe-webplatform/Snap.svg/blob/master/src/svg.js

var tokenRegex = /\{([^}]+)\}/g,
    objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g; // matches .xxxxx or ["xxxxx"] to run over object properties

function replacer(all, key, obj) {
  var res = obj;
  key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
    name = name || quotedName;

    if (res) {
      if (name in res) {
        res = res[name];
      }

      typeof res == 'function' && isFunc && (res = res());
    }
  });
  res = (res == null || res == obj ? all : res) + '';
  return res;
}

function format(str, obj) {
  return String(str).replace(tokenRegex, function (all, key) {
    return replacer(all, key, obj);
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/TextRenderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/TextRenderer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextRenderer; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_util_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/util/Text */ "diagram-js/lib/util/Text");
/* harmony import */ var diagram_js_lib_util_Text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Text__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_FONT_SIZE = 12;
var LINE_HEIGHT_RATIO = 1.2;
var MIN_TEXT_ANNOTATION_HEIGHT = 30;
function TextRenderer(config) {
  var defaultStyle = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    fontFamily: 'Arial, sans-serif',
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: 'normal',
    lineHeight: LINE_HEIGHT_RATIO
  }, config && config.defaultStyle || {});
  var fontSize = parseInt(defaultStyle.fontSize, 10) - 1;
  var externalStyle = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, defaultStyle, {
    fontSize: fontSize
  }, config && config.externalStyle || {});
  var textUtil = new diagram_js_lib_util_Text__WEBPACK_IMPORTED_MODULE_1___default.a({
    style: defaultStyle
  });
  /**
   * Get the new bounds of an externally rendered,
   * layouted label.
   *
   * @param  {Bounds} bounds
   * @param  {String} text
   *
   * @return {Bounds}
   */

  this.getExternalLabelBounds = function (bounds, text) {
    var layoutedDimensions = textUtil.getDimensions(text, {
      box: {
        width: 90,
        height: 30,
        x: bounds.width / 2 + bounds.x,
        y: bounds.height / 2 + bounds.y
      },
      style: externalStyle
    }); // resize label shape to fit label text

    return {
      x: Math.round(bounds.x + bounds.width / 2 - layoutedDimensions.width / 2),
      y: Math.round(bounds.y),
      width: Math.ceil(layoutedDimensions.width),
      height: Math.ceil(layoutedDimensions.height)
    };
  };
  /**
   * Get the new bounds of text annotation.
   *
   * @param  {Bounds} bounds
   * @param  {String} text
   *
   * @return {Bounds}
   */


  this.getTextAnnotationBounds = function (bounds, text) {
    var layoutedDimensions = textUtil.getDimensions(text, {
      box: bounds,
      style: defaultStyle,
      align: 'left-top',
      padding: 5
    });
    return {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: Math.max(MIN_TEXT_ANNOTATION_HEIGHT, Math.round(layoutedDimensions.height))
    };
  };
  /**
   * Create a layouted text element.
   *
   * @param {String} text
   * @param {Object} [options]
   *
   * @return {SVGElement} rendered text
   */


  this.createText = function (text, options) {
    return textUtil.createText(text, options || {});
  };
  /**
   * Get default text style.
   */


  this.getDefaultStyle = function () {
    return defaultStyle;
  };
  /**
   * Get the external text style.
   */


  this.getExternalStyle = function () {
    return externalStyle;
  };
}
TextRenderer.$inject = ['config.textRenderer'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/draw/index.js":
/*!************************************************!*\
  !*** ./node_modules/bpmn-js/lib/draw/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BpmnRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpmnRenderer */ "./node_modules/bpmn-js/lib/draw/BpmnRenderer.js");
/* harmony import */ var _TextRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextRenderer */ "./node_modules/bpmn-js/lib/draw/TextRenderer.js");
/* harmony import */ var _PathMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathMap */ "./node_modules/bpmn-js/lib/draw/PathMap.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['bpmnRenderer'],
  bpmnRenderer: ['type', _BpmnRenderer__WEBPACK_IMPORTED_MODULE_0__["default"]],
  textRenderer: ['type', _TextRenderer__WEBPACK_IMPORTED_MODULE_1__["default"]],
  pathMap: ['type', _PathMap__WEBPACK_IMPORTED_MODULE_2__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlace.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-place/AutoPlace.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoPlace; });
/* harmony import */ var _AutoPlaceUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoPlaceUtil */ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceUtil.js");

/**
 * A service that places elements connected to existing ones
 * to an appropriate position in an _automated_ fashion.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */

function AutoPlace(eventBus, modeling) {
  function emit(event, payload) {
    return eventBus.fire(event, payload);
  }
  /**
   * Append shape to source at appropriate position.
   *
   * @param {djs.model.Shape} source
   * @param {djs.model.Shape} shape
   *
   * @return {djs.model.Shape} appended shape
   */


  this.append = function (source, shape) {
    emit('autoPlace.start', {
      source: source,
      shape: shape
    }); // allow others to provide the position

    var position = emit('autoPlace', {
      source: source,
      shape: shape
    });

    if (!position) {
      position = Object(_AutoPlaceUtil__WEBPACK_IMPORTED_MODULE_0__["getNewShapePosition"])(source, shape);
    }

    var newShape = modeling.appendShape(source, shape, position, source.parent);
    emit('autoPlace.end', {
      source: source,
      shape: newShape
    });
    return newShape;
  };
}
AutoPlace.$inject = ['eventBus', 'modeling'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceSelectionBehavior.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceSelectionBehavior.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoPlaceSelectionBehavior; });
/**
 * Select element after auto placement.
 *
 * @param {EventBus} eventBus
 * @param {Selection} selection
 */
function AutoPlaceSelectionBehavior(eventBus, selection) {
  eventBus.on('autoPlace.end', 500, function (e) {
    selection.select(e.shape);
  });
}
AutoPlaceSelectionBehavior.$inject = ['eventBus', 'selection'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceUtil.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceUtil.js ***!
  \***********************************************************************/
/*! exports provided: getNewShapePosition, getFlowNodePosition, getFlowNodeDistance, getTextAnnotationPosition, getDataElementPosition, getDefaultPosition, getConnectedAtPosition, deconflictPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewShapePosition", function() { return getNewShapePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlowNodePosition", function() { return getFlowNodePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlowNodeDistance", function() { return getFlowNodeDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextAnnotationPosition", function() { return getTextAnnotationPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataElementPosition", function() { return getDataElementPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultPosition", function() { return getDefaultPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedAtPosition", function() { return getConnectedAtPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deconflictPosition", function() { return deconflictPosition; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);




var DEFAULT_HORIZONTAL_DISTANCE = 50;
var MAX_HORIZONTAL_DISTANCE = 250; // padding to detect element placement

var PLACEMENT_DETECTION_PAD = 10;
/**
 * Find the new position for the target element to
 * connect to source.
 *
 * @param  {djs.model.Shape} source
 * @param  {djs.model.Shape} element
 *
 * @return {Point}
 */

function getNewShapePosition(source, element) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:TextAnnotation')) {
    return getTextAnnotationPosition(source, element);
  }

  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__["isAny"])(element, ['bpmn:DataObjectReference', 'bpmn:DataStoreReference'])) {
    return getDataElementPosition(source, element);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:FlowNode')) {
    return getFlowNodePosition(source, element);
  }

  return getDefaultPosition(source, element);
}
/**
 * Always try to place element right of source;
 * compute actual distance from previous nodes in flow.
 */

function getFlowNodePosition(source, element) {
  var sourceTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(source);
  var sourceMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getMid"])(source);
  var horizontalDistance = getFlowNodeDistance(source, element);
  var orientation = 'left',
      rowSize = 80,
      margin = 30;

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(source, 'bpmn:BoundaryEvent')) {
    orientation = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getOrientation"])(source, source.host, -25);

    if (orientation.indexOf('top') !== -1) {
      margin *= -1;
    }
  }

  function getVerticalDistance(orient) {
    if (orient.indexOf('top') != -1) {
      return -1 * rowSize;
    } else if (orient.indexOf('bottom') != -1) {
      return rowSize;
    } else {
      return 0;
    }
  }

  var position = {
    x: sourceTrbl.right + horizontalDistance + element.width / 2,
    y: sourceMid.y + getVerticalDistance(orientation)
  };
  var escapeDirection = {
    y: {
      margin: margin,
      rowSize: rowSize
    }
  };
  return deconflictPosition(source, element, position, escapeDirection);
}
/**
 * Compute best distance between source and target,
 * based on existing connections to and from source.
 *
 * @param {djs.model.Shape} source
 * @param {djs.model.Shape} element
 *
 * @return {Number} distance
 */

function getFlowNodeDistance(source, element) {
  var sourceTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(source); // is connection a reference to consider?

  function isReference(c) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(c, 'bpmn:SequenceFlow');
  }

  function toTargetNode(weight) {
    return function (shape) {
      return {
        shape: shape,
        weight: weight,
        distanceTo: function (shape) {
          var shapeTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(shape);
          return shapeTrbl.left - sourceTrbl.right;
        }
      };
    };
  }

  function toSourceNode(weight) {
    return function (shape) {
      return {
        shape: shape,
        weight: weight,
        distanceTo: function (shape) {
          var shapeTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(shape);
          return sourceTrbl.left - shapeTrbl.right;
        }
      };
    };
  } // we create a list of nodes to take into consideration
  // for calculating the optimal flow node distance
  //
  //   * weight existing target nodes higher than source nodes
  //   * only take into account individual nodes once
  //


  var nodes = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["reduce"])([].concat(getTargets(source, isReference).map(toTargetNode(5)), getSources(source, isReference).map(toSourceNode(1))), function (nodes, node) {
    // filter out shapes connected twice via source or target
    nodes[node.shape.id + '__weight_' + node.weight] = node;
    return nodes;
  }, {}); // compute distances between source and incoming nodes;
  // group at the same time by distance and expose the
  // favourite distance as { fav: { count, value } }.

  var distancesGrouped = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["reduce"])(nodes, function (result, node) {
    var shape = node.shape,
        weight = node.weight,
        distanceTo = node.distanceTo;
    var fav = result.fav,
        currentDistance,
        currentDistanceCount,
        currentDistanceEntry;
    currentDistance = distanceTo(shape); // ignore too far away peers
    // or non-left to right modeled nodes

    if (currentDistance < 0 || currentDistance > MAX_HORIZONTAL_DISTANCE) {
      return result;
    }

    currentDistanceEntry = result[String(currentDistance)] = result[String(currentDistance)] || {
      value: currentDistance,
      count: 0
    }; // inc diff count

    currentDistanceCount = currentDistanceEntry.count += 1 * weight;

    if (!fav || fav.count < currentDistanceCount) {
      result.fav = currentDistanceEntry;
    }

    return result;
  }, {});

  if (distancesGrouped.fav) {
    return distancesGrouped.fav.value;
  } else {
    return DEFAULT_HORIZONTAL_DISTANCE;
  }
}
/**
 * Always try to place text annotations top right of source.
 */

function getTextAnnotationPosition(source, element) {
  var sourceTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(source);
  var position = {
    x: sourceTrbl.right + element.width / 2,
    y: sourceTrbl.top - 50 - element.height / 2
  };
  var escapeDirection = {
    y: {
      margin: -30,
      rowSize: 20
    }
  };
  return deconflictPosition(source, element, position, escapeDirection);
}
/**
 * Always put element bottom right of source.
 */

function getDataElementPosition(source, element) {
  var sourceTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(source);
  var position = {
    x: sourceTrbl.right - 10 + element.width / 2,
    y: sourceTrbl.bottom + 40 + element.width / 2
  };
  var escapeDirection = {
    x: {
      margin: 30,
      rowSize: 30
    }
  };
  return deconflictPosition(source, element, position, escapeDirection);
}
/**
 * Always put element right of source per default.
 */

function getDefaultPosition(source, element) {
  var sourceTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(source);
  var sourceMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getMid"])(source); // simply put element right next to source

  return {
    x: sourceTrbl.right + DEFAULT_HORIZONTAL_DISTANCE + element.width / 2,
    y: sourceMid.y
  };
}
/**
 * Returns all connected elements around the given source.
 *
 * This includes:
 *
 *   - connected elements
 *   - host connected elements
 *   - attachers connected elements
 *
 * @param  {djs.model.Shape} source
 * @param  {djs.model.Shape} element
 *
 * @return {Array<djs.model.Shape>}
 */

function getAutoPlaceClosure(source, element) {
  var allConnected = getConnected(source);

  if (source.host) {
    allConnected = allConnected.concat(getConnected(source.host));
  }

  if (source.attachers) {
    allConnected = allConnected.concat(source.attachers.reduce(function (shapes, attacher) {
      return shapes.concat(getConnected(attacher));
    }, []));
  }

  return allConnected;
}
/**
 * Return target at given position, if defined.
 *
 * This takes connected elements from host and attachers
 * into account, too.
 */


function getConnectedAtPosition(source, position, element) {
  var bounds = {
    x: position.x - element.width / 2,
    y: position.y - element.height / 2,
    width: element.width,
    height: element.height
  };
  var closure = getAutoPlaceClosure(source, element);
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["find"])(closure, function (target) {
    if (target === element) {
      return false;
    }

    var orientation = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getOrientation"])(target, bounds, PLACEMENT_DETECTION_PAD);
    return orientation === 'intersect';
  });
}
/**
 * Returns a new, position for the given element
 * based on the given element that is not occupied
 * by some element connected to source.
 *
 * Take into account the escapeDirection (where to move
 * on positioning clashes) in the computation.
 *
 * @param {djs.model.Shape} source
 * @param {djs.model.Shape} element
 * @param {Point} position
 * @param {Object} escapeDelta
 *
 * @return {Point}
 */

function deconflictPosition(source, element, position, escapeDelta) {
  function nextPosition(existingElement) {
    var newPosition = {
      x: position.x,
      y: position.y
    };
    ['x', 'y'].forEach(function (axis) {
      var axisDelta = escapeDelta[axis];

      if (!axisDelta) {
        return;
      }

      var dimension = axis === 'x' ? 'width' : 'height';
      var margin = axisDelta.margin,
          rowSize = axisDelta.rowSize;

      if (margin < 0) {
        newPosition[axis] = Math.min(existingElement[axis] + margin - element[dimension] / 2, position[axis] - rowSize + margin);
      } else {
        newPosition[axis] = Math.max(existingTarget[axis] + existingTarget[dimension] + margin + element[dimension] / 2, position[axis] + rowSize + margin);
      }
    });
    return newPosition;
  }

  var existingTarget; // deconflict position until free slot is found

  while (existingTarget = getConnectedAtPosition(source, position, element)) {
    position = nextPosition(existingTarget);
  }

  return position;
} // helpers //////////////////////

function noneFilter() {
  return true;
}

function getConnected(element, connectionFilter) {
  return [].concat(getTargets(element, connectionFilter), getSources(element, connectionFilter));
}

function getSources(shape, connectionFilter) {
  if (!connectionFilter) {
    connectionFilter = noneFilter;
  }

  return shape.incoming.filter(connectionFilter).map(function (c) {
    return c.source;
  });
}

function getTargets(shape, connectionFilter) {
  if (!connectionFilter) {
    connectionFilter = noneFilter;
  }

  return shape.outgoing.filter(connectionFilter).map(function (c) {
    return c.target;
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-place/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-place/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoPlace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoPlace */ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlace.js");
/* harmony import */ var _AutoPlaceSelectionBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoPlaceSelectionBehavior */ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceSelectionBehavior.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['autoPlaceSelectionBehavior'],
  autoPlace: ['type', _AutoPlace__WEBPACK_IMPORTED_MODULE_0__["default"]],
  autoPlaceSelectionBehavior: ['type', _AutoPlaceSelectionBehavior__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-resize/BpmnAutoResize.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-resize/BpmnAutoResize.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnAutoResize; });
/* harmony import */ var diagram_js_lib_features_auto_resize_AutoResize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/auto-resize/AutoResize */ "diagram-js/lib/features/auto-resize/AutoResize");
/* harmony import */ var diagram_js_lib_features_auto_resize_AutoResize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_auto_resize_AutoResize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



/**
 * Sub class of the AutoResize module which implements a BPMN
 * specific resize function.
 */

function BpmnAutoResize(injector) {
  injector.invoke(diagram_js_lib_features_auto_resize_AutoResize__WEBPACK_IMPORTED_MODULE_0___default.a, this);
}
BpmnAutoResize.$inject = ['injector'];
inherits__WEBPACK_IMPORTED_MODULE_1___default()(BpmnAutoResize, diagram_js_lib_features_auto_resize_AutoResize__WEBPACK_IMPORTED_MODULE_0___default.a);
/**
 * Resize shapes and lanes.
 *
 * @param {djs.model.Shape} target
 * @param {Bounds} newBounds
 * @param {Object} hints
 */

BpmnAutoResize.prototype.resize = function (target, newBounds, hints) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Participant')) {
    this._modeling.resizeLane(target, newBounds, null, hints);
  } else {
    this._modeling.resizeShape(target, newBounds, null, hints);
  }
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-resize/BpmnAutoResizeProvider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-resize/BpmnAutoResizeProvider.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnAutoResizeProvider; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_features_auto_resize_AutoResizeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/features/auto-resize/AutoResizeProvider */ "diagram-js/lib/features/auto-resize/AutoResizeProvider");
/* harmony import */ var diagram_js_lib_features_auto_resize_AutoResizeProvider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_auto_resize_AutoResizeProvider__WEBPACK_IMPORTED_MODULE_3__);




/**
 * This module is a provider for automatically resizing parent BPMN elements
 */

function BpmnAutoResizeProvider(eventBus, modeling) {
  diagram_js_lib_features_auto_resize_AutoResizeProvider__WEBPACK_IMPORTED_MODULE_3___default.a.call(this, eventBus);
  this._modeling = modeling;
}
inherits__WEBPACK_IMPORTED_MODULE_1___default()(BpmnAutoResizeProvider, diagram_js_lib_features_auto_resize_AutoResizeProvider__WEBPACK_IMPORTED_MODULE_3___default.a);
BpmnAutoResizeProvider.$inject = ['eventBus', 'modeling'];
/**
 * Check if the given target can be expanded
 *
 * @param  {djs.model.Shape} target
 *
 * @return {boolean}
 */

BpmnAutoResizeProvider.prototype.canResize = function (elements, target) {
  if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(target, 'bpmn:Participant') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(target, 'bpmn:Lane') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(target, 'bpmn:SubProcess')) {
    return false;
  }

  var canResize = true;
  Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(elements, function (element) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Lane') || element.labelTarget) {
      canResize = false;
      return;
    }
  });
  return canResize;
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/auto-resize/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/auto-resize/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BpmnAutoResize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpmnAutoResize */ "./node_modules/bpmn-js/lib/features/auto-resize/BpmnAutoResize.js");
/* harmony import */ var _BpmnAutoResizeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnAutoResizeProvider */ "./node_modules/bpmn-js/lib/features/auto-resize/BpmnAutoResizeProvider.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['bpmnAutoResize', 'bpmnAutoResizeProvider'],
  bpmnAutoResize: ['type', _BpmnAutoResize__WEBPACK_IMPORTED_MODULE_0__["default"]],
  bpmnAutoResizeProvider: ['type', _BpmnAutoResizeProvider__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/context-pad/ContextPadProvider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/context-pad/ContextPadProvider.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextPadProvider; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modeling/util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! diagram-js/lib/util/Mouse */ "diagram-js/lib/util/Mouse");
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_5__);






/**
 * A provider for BPMN 2.0 elements context pad
 */

function ContextPadProvider(config, injector, eventBus, contextPad, modeling, elementFactory, connect, create, popupMenu, canvas, rules, translate) {
  config = config || {};
  contextPad.registerProvider(this);
  this._contextPad = contextPad;
  this._modeling = modeling;
  this._elementFactory = elementFactory;
  this._connect = connect;
  this._create = create;
  this._popupMenu = popupMenu;
  this._canvas = canvas;
  this._rules = rules;
  this._translate = translate;

  if (config.autoPlace !== false) {
    this._autoPlace = injector.get('autoPlace', false);
  }

  eventBus.on('create.end', 250, function (event) {
    var context = event.context,
        shape = context.shape;

    if (!Object(diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_5__["hasPrimaryModifier"])(event) || !contextPad.isOpen(shape)) {
      return;
    }

    var entries = contextPad.getEntries(shape);

    if (entries.replace) {
      entries.replace.action.click(event, shape);
    }
  });
}
ContextPadProvider.$inject = ['config.contextPad', 'injector', 'eventBus', 'contextPad', 'modeling', 'elementFactory', 'connect', 'create', 'popupMenu', 'canvas', 'rules', 'translate'];

ContextPadProvider.prototype.getContextPadEntries = function (element) {
  var contextPad = this._contextPad,
      modeling = this._modeling,
      elementFactory = this._elementFactory,
      connect = this._connect,
      create = this._create,
      popupMenu = this._popupMenu,
      canvas = this._canvas,
      rules = this._rules,
      autoPlace = this._autoPlace,
      translate = this._translate;
  var actions = {};

  if (element.type === 'label') {
    return actions;
  }

  var businessObject = element.businessObject;

  function startConnect(event, element) {
    connect.start(event, element);
  }

  function removeElement(e) {
    modeling.removeElements([element]);
  }

  function getReplaceMenuPosition(element) {
    var Y_OFFSET = 5;
    var diagramContainer = canvas.getContainer(),
        pad = contextPad.getPad(element).html;
    var diagramRect = diagramContainer.getBoundingClientRect(),
        padRect = pad.getBoundingClientRect();
    var top = padRect.top - diagramRect.top;
    var left = padRect.left - diagramRect.left;
    var pos = {
      x: left,
      y: top + padRect.height + Y_OFFSET
    };
    return pos;
  }
  /**
   * Create an append action
   *
   * @param {String} type
   * @param {String} className
   * @param {String} [title]
   * @param {Object} [options]
   *
   * @return {Object} descriptor
   */


  function appendAction(type, className, title, options) {
    if (typeof title !== 'string') {
      options = title;
      title = translate('Append {type}', {
        type: type.replace(/^bpmn:/, '')
      });
    }

    function appendStart(event, element) {
      var shape = elementFactory.createShape(Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        type: type
      }, options));
      create.start(event, shape, {
        source: element
      });
    }

    var append = autoPlace ? function (event, element) {
      var shape = elementFactory.createShape(Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        type: type
      }, options));
      autoPlace.append(element, shape);
    } : appendStart;
    return {
      group: 'model',
      className: className,
      title: title,
      action: {
        dragstart: appendStart,
        click: append
      }
    };
  }

  function splitLaneHandler(count) {
    return function (event, element) {
      // actual split
      modeling.splitLane(element, count); // refresh context pad after split to
      // get rid of split icons

      contextPad.open(element, true);
    };
  }

  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(businessObject, ['bpmn:Lane', 'bpmn:Participant']) && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__["isExpanded"])(businessObject)) {
    var childLanes = Object(_modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_4__["getChildLanes"])(element);
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
      'lane-insert-above': {
        group: 'lane-insert-above',
        className: 'bpmn-icon-lane-insert-above',
        title: translate('Add Lane above'),
        action: {
          click: function (event, element) {
            modeling.addLane(element, 'top');
          }
        }
      }
    });

    if (childLanes.length < 2) {
      if (element.height >= 120) {
        Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
          'lane-divide-two': {
            group: 'lane-divide',
            className: 'bpmn-icon-lane-divide-two',
            title: translate('Divide into two Lanes'),
            action: {
              click: splitLaneHandler(2)
            }
          }
        });
      }

      if (element.height >= 180) {
        Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
          'lane-divide-three': {
            group: 'lane-divide',
            className: 'bpmn-icon-lane-divide-three',
            title: translate('Divide into three Lanes'),
            action: {
              click: splitLaneHandler(3)
            }
          }
        });
      }
    }

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
      'lane-insert-below': {
        group: 'lane-insert-below',
        className: 'bpmn-icon-lane-insert-below',
        title: translate('Add Lane below'),
        action: {
          click: function (event, element) {
            modeling.addLane(element, 'bottom');
          }
        }
      }
    });
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(businessObject, 'bpmn:FlowNode')) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(businessObject, 'bpmn:EventBasedGateway')) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
        'append.receive-task': appendAction('bpmn:ReceiveTask', 'bpmn-icon-receive-task', translate('Append ReceiveTask')),
        'append.message-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-message', translate('Append MessageIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:MessageEventDefinition'
        }),
        'append.timer-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-timer', translate('Append TimerIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:TimerEventDefinition'
        }),
        'append.condition-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-condition', translate('Append ConditionIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:ConditionalEventDefinition'
        }),
        'append.signal-intermediate-event': appendAction('bpmn:IntermediateCatchEvent', 'bpmn-icon-intermediate-event-catch-signal', translate('Append SignalIntermediateCatchEvent'), {
          eventDefinitionType: 'bpmn:SignalEventDefinition'
        })
      });
    } else if (isEventType(businessObject, 'bpmn:BoundaryEvent', 'bpmn:CompensateEventDefinition')) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
        'append.compensation-activity': appendAction('bpmn:Task', 'bpmn-icon-task', translate('Append compensation activity'), {
          isForCompensation: true
        })
      });
    } else if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(businessObject, 'bpmn:EndEvent') && !businessObject.isForCompensation && !isEventType(businessObject, 'bpmn:IntermediateThrowEvent', 'bpmn:LinkEventDefinition') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__["isEventSubProcess"])(businessObject)) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
        'append.end-event': appendAction('bpmn:EndEvent', 'bpmn-icon-end-event-none', translate('Append EndEvent')),
        'append.gateway': appendAction('bpmn:ExclusiveGateway', 'bpmn-icon-gateway-none', translate('Append Gateway')),
        'append.append-task': appendAction('bpmn:Task', 'bpmn-icon-task', translate('Append Task')),
        'append.intermediate-event': appendAction('bpmn:IntermediateThrowEvent', 'bpmn-icon-intermediate-event-none', translate('Append Intermediate/Boundary Event'))
      });
    }
  }

  if (!popupMenu.isEmpty(element, 'bpmn-replace')) {
    // Replace menu entry
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
      'replace': {
        group: 'edit',
        className: 'bpmn-icon-screw-wrench',
        title: translate('Change type'),
        action: {
          click: function (event, element) {
            var position = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(getReplaceMenuPosition(element), {
              cursor: {
                x: event.x,
                y: event.y
              }
            });
            popupMenu.open(element, 'bpmn-replace', position);
          }
        }
      }
    });
  }

  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(businessObject, ['bpmn:FlowNode', 'bpmn:InteractionNode', 'bpmn:DataObjectReference', 'bpmn:DataStoreReference'])) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
      'append.text-annotation': appendAction('bpmn:TextAnnotation', 'bpmn-icon-text-annotation'),
      'connect': {
        group: 'connect',
        className: 'bpmn-icon-connection-multi',
        title: translate('Connect using ' + (businessObject.isForCompensation ? '' : 'Sequence/MessageFlow or ') + 'Association'),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    });
  }

  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(businessObject, ['bpmn:DataObjectReference', 'bpmn:DataStoreReference'])) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
      'connect': {
        group: 'connect',
        className: 'bpmn-icon-connection-multi',
        title: translate('Connect using DataInputAssociation'),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    });
  } // delete element entry, only show if allowed by rules


  var deleteAllowed = rules.allowed('elements.delete', {
    elements: [element]
  });

  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(deleteAllowed)) {
    // was the element returned as a deletion candidate?
    deleteAllowed = deleteAllowed[0] === element;
  }

  if (deleteAllowed) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
      'delete': {
        group: 'edit',
        className: 'bpmn-icon-trash',
        title: translate('Remove'),
        action: {
          click: removeElement
        }
      }
    });
  }

  return actions;
}; // helpers /////////


function isEventType(eventBo, type, definition) {
  var isType = eventBo.$instanceOf(type);
  var isDefinition = false;
  var definitions = eventBo.eventDefinitions || [];
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(definitions, function (def) {
    if (def.$type === definition) {
      isDefinition = true;
    }
  });
  return isType && isDefinition;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/context-pad/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/context-pad/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js-direct-editing */ "diagram-js-direct-editing");
/* harmony import */ var diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_context_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/context-pad */ "diagram-js/lib/features/context-pad");
/* harmony import */ var diagram_js_lib_features_context_pad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_context_pad__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/features/selection */ "diagram-js/lib/features/selection");
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/features/connect */ "diagram-js/lib/features/connect");
/* harmony import */ var diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/features/create */ "diagram-js/lib/features/create");
/* harmony import */ var diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _popup_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup-menu */ "./node_modules/bpmn-js/lib/features/popup-menu/index.js");
/* harmony import */ var _ContextPadProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContextPadProvider */ "./node_modules/bpmn-js/lib/features/context-pad/ContextPadProvider.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_0___default.a, diagram_js_lib_features_context_pad__WEBPACK_IMPORTED_MODULE_1___default.a, diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2___default.a, diagram_js_lib_features_connect__WEBPACK_IMPORTED_MODULE_3___default.a, diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_4___default.a, _popup_menu__WEBPACK_IMPORTED_MODULE_5__["default"]],
  __init__: ['contextPadProvider'],
  contextPadProvider: ['type', _ContextPadProvider__WEBPACK_IMPORTED_MODULE_6__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/copy-paste/BpmnCopyPaste.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/copy-paste/BpmnCopyPaste.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnCopyPaste; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);



function copyProperties(source, target, properties) {
  if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(properties)) {
    properties = [properties];
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(properties, function (property) {
    if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(source[property])) {
      target[property] = source[property];
    }
  });
}

function removeProperties(element, properties) {
  if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(properties)) {
    properties = [properties];
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(properties, function (property) {
    if (element[property]) {
      delete element[property];
    }
  });
}

var LOW_PRIORITY = 750;
function BpmnCopyPaste(bpmnFactory, eventBus, moddleCopy) {
  eventBus.on('copyPaste.copyElement', LOW_PRIORITY, function (context) {
    var descriptor = context.descriptor,
        element = context.element;
    var businessObject = descriptor.oldBusinessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element);
    descriptor.type = element.type;
    copyProperties(businessObject, descriptor, 'name');
    descriptor.di = {}; // fill and stroke will be set to DI

    copyProperties(businessObject.di, descriptor.di, ['fill', 'stroke']);
    copyProperties(businessObject.di, descriptor, 'isExpanded');

    if (isLabel(descriptor)) {
      return descriptor;
    } // default sequence flow


    if (businessObject.default) {
      descriptor.default = businessObject.default.id;
    }
  });
  eventBus.on('moddleCopy.canCopyProperty', function (context) {
    var parent = context.parent,
        property = context.property,
        propertyName = context.propertyName,
        bpmnProcess;

    if (propertyName === 'processRef' && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(parent, 'bpmn:Participant') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(property, 'bpmn:Process')) {
      bpmnProcess = bpmnFactory.create('bpmn:Process'); // return copy of process

      return moddleCopy.copyElement(property, bpmnProcess);
    }
  });
  var references;

  function resolveReferences(descriptor, cache) {
    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(descriptor); // default sequence flows

    if (descriptor.default) {
      // relationship cannot be resolved immediately
      references[descriptor.default] = {
        element: businessObject,
        property: 'default'
      };
    } // boundary events


    if (descriptor.host) {
      // relationship can be resolved immediately
      Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(descriptor).attachedToRef = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(cache[descriptor.host]);
    }

    references = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["omit"])(references, Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["reduce"])(references, function (array, reference, key) {
      var element = reference.element,
          property = reference.property;

      if (key === descriptor.id) {
        element[property] = businessObject;
        array.push(descriptor.id);
      }

      return array;
    }, []));
  }

  eventBus.on('copyPaste.pasteElements', function () {
    references = {};
  });
  eventBus.on('copyPaste.pasteElement', function (context) {
    var cache = context.cache,
        descriptor = context.descriptor,
        oldBusinessObject = descriptor.oldBusinessObject,
        newBusinessObject; // do NOT copy business object if external label

    if (isLabel(descriptor)) {
      descriptor.businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(cache[descriptor.labelTarget]);
      return;
    }

    newBusinessObject = bpmnFactory.create(oldBusinessObject.$type);
    descriptor.businessObject = moddleCopy.copyElement(oldBusinessObject, newBusinessObject); // resolve references e.g. default sequence flow

    resolveReferences(descriptor, cache);
    copyProperties(descriptor, newBusinessObject, ['isExpanded', 'name']);
    removeProperties(descriptor, 'oldBusinessObject');
  });
}
BpmnCopyPaste.$inject = ['bpmnFactory', 'eventBus', 'moddleCopy']; // helpers //////////

function isLabel(element) {
  return !!element.labelTarget;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/copy-paste/ModdleCopy.js":
/*!********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/copy-paste/ModdleCopy.js ***!
  \********************************************************************/
/*! exports provided: default, getPropertyNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModdleCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyNames", function() { return getPropertyNames; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);

var DISALLOWED_PROPERTIES = ['artifacts', 'dataInputAssociations', 'dataOutputAssociations', 'default', 'flowElements', 'lanes', 'incoming', 'outgoing'];
/**
 * @typedef {Function} <moddleCopy.canCopyProperties> listener
 *
 * @param {Object} context
 * @param {Array<string>} context.propertyNames
 * @param {ModdleElement} context.sourceElement
 * @param {ModdleElement} context.targetElement
 *
 * @returns {Array<string>|boolean} - Return properties to be copied or false to disallow
 * copying.
 */

/**
 * @typedef {Function} <moddleCopy.canCopyProperty> listener
 *
 * @param {Object} context
 * @param {ModdleElement} context.parent
 * @param {*} context.property
 * @param {string} context.propertyName
 *
 * @returns {*|boolean} - Return copied property or false to disallow
 * copying.
 */

/**
 * @typedef {Function} <moddleCopy.canSetCopiedProperty> listener
 *
 * @param {Object} context
 * @param {ModdleElement} context.parent
 * @param {*} context.property
 * @param {string} context.propertyName
 *
 * @returns {boolean} - Return false to disallow
 * setting copied property.
 */

/**
 * Utility for copying model properties from source element to target element.
 *
 * @param {EventBus} eventBus
 * @param {BpmnFactory} bpmnFactory
 * @param {BpmnModdle} moddle
 */

function ModdleCopy(eventBus, bpmnFactory, moddle) {
  this._bpmnFactory = bpmnFactory;
  this._eventBus = eventBus;
  this._moddle = moddle; // copy extension elements last

  eventBus.on('moddleCopy.canCopyProperties', function (context) {
    var propertyNames = context.propertyNames;

    if (!propertyNames || !propertyNames.length) {
      return;
    }

    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(propertyNames, function (propertyName) {
      return propertyName === 'extensionElements';
    });
  }); // default check whether property can be copied

  eventBus.on('moddleCopy.canCopyProperty', function (context) {
    var parent = context.parent,
        parentDescriptor = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(parent) && parent.$descriptor,
        propertyName = context.propertyName;

    if (propertyName && DISALLOWED_PROPERTIES.indexOf(propertyName) !== -1) {
      // disallow copying property
      return false;
    }

    if (propertyName && parentDescriptor && !Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(parentDescriptor.properties, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["matchPattern"])({
      name: propertyName
    }))) {
      // disallow copying property
      return false;
    }
  }); // do NOT allow to copy empty extension elements

  eventBus.on('moddleCopy.canSetCopiedProperty', function (context) {
    var property = context.property;

    if (is(property, 'bpmn:ExtensionElements') && (!property.values || !property.values.length)) {
      // disallow setting copied property
      return false;
    }
  });
}
ModdleCopy.$inject = ['eventBus', 'bpmnFactory', 'moddle'];
/**
 * Copy model properties of source element to target element.
 *
 * @param {ModdleElement} sourceElement
 * @param {ModdleElement} targetElement
 * @param {Array<string>} [propertyNames]
 *
 * @param {ModdleElement}
 */

ModdleCopy.prototype.copyElement = function (sourceElement, targetElement, propertyNames) {
  var self = this;

  if (propertyNames && !Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyNames)) {
    propertyNames = [propertyNames];
  }

  propertyNames = propertyNames || getPropertyNames(sourceElement.$descriptor);

  var canCopyProperties = this._eventBus.fire('moddleCopy.canCopyProperties', {
    propertyNames: propertyNames,
    sourceElement: sourceElement,
    targetElement: targetElement
  });

  if (canCopyProperties === false) {
    return targetElement;
  }

  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(canCopyProperties)) {
    propertyNames = canCopyProperties;
  } // copy properties


  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(propertyNames, function (propertyName) {
    var sourceProperty;

    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["has"])(sourceElement, propertyName)) {
      sourceProperty = sourceElement.get(propertyName);
    }

    var copiedProperty = self.copyProperty(sourceProperty, targetElement, propertyName);

    var canSetProperty = self._eventBus.fire('moddleCopy.canSetCopiedProperty', {
      parent: targetElement,
      property: copiedProperty,
      propertyName: propertyName
    });

    if (canSetProperty === false) {
      return;
    }

    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(copiedProperty)) {
      targetElement.set(propertyName, copiedProperty);
    }
  });
  return targetElement;
};
/**
 * Copy model property.
 *
 * @param {*} property
 * @param {ModdleElement} parent
 * @param {string} propertyName
 *
 * @returns {*}
 */


ModdleCopy.prototype.copyProperty = function (property, parent, propertyName) {
  var self = this; // allow others to copy property

  var copiedProperty = this._eventBus.fire('moddleCopy.canCopyProperty', {
    parent: parent,
    property: property,
    propertyName: propertyName
  }); // return if copying is NOT allowed


  if (copiedProperty === false) {
    return;
  }

  if (copiedProperty) {
    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(copiedProperty) && copiedProperty.$type && !copiedProperty.$parent) {
      copiedProperty.$parent = parent;
    }

    return copiedProperty;
  }

  var propertyDescriptor = this._moddle.getPropertyDescriptor(parent, propertyName); // do NOT copy Ids and references


  if (propertyDescriptor.isId || propertyDescriptor.isReference) {
    return;
  } // copy arrays


  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(property)) {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(property, function (childProperties, childProperty) {
      // recursion
      copiedProperty = self.copyProperty(childProperty, parent, propertyName); // copying might NOT be allowed

      if (copiedProperty) {
        copiedProperty.$parent = parent;
        return childProperties.concat(copiedProperty);
      }

      return childProperties;
    }, []);
  } // copy model elements


  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(property) && property.$type) {
    if (this._moddle.getElementDescriptor(property).isGeneric) {
      return;
    }

    copiedProperty = self._bpmnFactory.create(property.$type);
    copiedProperty.$parent = parent; // recursion

    copiedProperty = self.copyElement(property, copiedProperty);
    return copiedProperty;
  } // copy primitive properties


  return property;
}; // helpers //////////


function getPropertyNames(descriptor, keepDefaultProperties) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(descriptor.properties, function (properties, property) {
    if (keepDefaultProperties && property.default) {
      return properties;
    }

    return properties.concat(property.name);
  }, []);
}

function is(element, type) {
  return element && typeof element.$instanceOf === 'function' && element.$instanceOf(type);
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/copy-paste/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/copy-paste/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_copy_paste__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/copy-paste */ "diagram-js/lib/features/copy-paste");
/* harmony import */ var diagram_js_lib_features_copy_paste__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_copy_paste__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnCopyPaste__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnCopyPaste */ "./node_modules/bpmn-js/lib/features/copy-paste/BpmnCopyPaste.js");
/* harmony import */ var _ModdleCopy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModdleCopy */ "./node_modules/bpmn-js/lib/features/copy-paste/ModdleCopy.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_copy_paste__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['bpmnCopyPaste', 'moddleCopy'],
  bpmnCopyPaste: ['type', _BpmnCopyPaste__WEBPACK_IMPORTED_MODULE_1__["default"]],
  moddleCopy: ['type', _ModdleCopy__WEBPACK_IMPORTED_MODULE_2__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/distribute-elements/BpmnDistributeElements.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/distribute-elements/BpmnDistributeElements.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnDistributeElements; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");


/**
 * Registers element exclude filters for elements that
 * currently do not support distribution.
 */

function BpmnDistributeElements(distributeElements) {
  distributeElements.registerFilter(function (elements) {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(elements, function (element) {
      var cannotDistribute = Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__["isAny"])(element, ['bpmn:Association', 'bpmn:BoundaryEvent', 'bpmn:DataInputAssociation', 'bpmn:DataOutputAssociation', 'bpmn:Lane', 'bpmn:MessageFlow', 'bpmn:Participant', 'bpmn:SequenceFlow', 'bpmn:TextAnnotation']);
      return !(element.labelTarget || cannotDistribute);
    });
  });
}
BpmnDistributeElements.$inject = ['distributeElements'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/distribute-elements/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/distribute-elements/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_distribute_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/distribute-elements */ "diagram-js/lib/features/distribute-elements");
/* harmony import */ var diagram_js_lib_features_distribute_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_distribute_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnDistributeElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnDistributeElements */ "./node_modules/bpmn-js/lib/features/distribute-elements/BpmnDistributeElements.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_distribute_elements__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['bpmnDistributeElements'],
  bpmnDistributeElements: ['type', _BpmnDistributeElements__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/editor-actions/BpmnEditorActions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/editor-actions/BpmnEditorActions.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnEditorActions; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_editor_actions_EditorActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/editor-actions/EditorActions */ "diagram-js/lib/features/editor-actions/EditorActions");
/* harmony import */ var diagram_js_lib_features_editor_actions_EditorActions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_editor_actions_EditorActions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "diagram-js/lib/util/Elements");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Registers and executes BPMN specific editor actions.
 *
 * @param {Injector} injector
 */

function BpmnEditorActions(injector) {
  injector.invoke(diagram_js_lib_features_editor_actions_EditorActions__WEBPACK_IMPORTED_MODULE_1___default.a, this);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BpmnEditorActions, diagram_js_lib_features_editor_actions_EditorActions__WEBPACK_IMPORTED_MODULE_1___default.a);
BpmnEditorActions.$inject = ['injector'];
/**
 * Register default actions.
 *
 * @param {Injector} injector
 */

BpmnEditorActions.prototype._registerDefaultActions = function (injector) {
  // (0) invoke super method
  diagram_js_lib_features_editor_actions_EditorActions__WEBPACK_IMPORTED_MODULE_1___default.a.prototype._registerDefaultActions.call(this, injector); // (1) retrieve optional components to integrate with


  var canvas = injector.get('canvas', false);
  var elementRegistry = injector.get('elementRegistry', false);
  var selection = injector.get('selection', false);
  var spaceTool = injector.get('spaceTool', false);
  var lassoTool = injector.get('lassoTool', false);
  var handTool = injector.get('handTool', false);
  var globalConnect = injector.get('globalConnect', false);
  var distributeElements = injector.get('distributeElements', false);
  var alignElements = injector.get('alignElements', false);
  var directEditing = injector.get('directEditing', false);
  var searchPad = injector.get('searchPad', false);
  var modeling = injector.get('modeling', false); // (2) check components and register actions

  if (canvas && elementRegistry && selection) {
    this._registerAction('selectElements', function () {
      // select all elements except for the invisible
      // root element
      var rootElement = canvas.getRootElement();
      var elements = elementRegistry.filter(function (element) {
        return element !== rootElement;
      });
      selection.select(elements);
      return elements;
    });
  }

  if (spaceTool) {
    this._registerAction('spaceTool', function () {
      spaceTool.toggle();
    });
  }

  if (lassoTool) {
    this._registerAction('lassoTool', function () {
      lassoTool.toggle();
    });
  }

  if (handTool) {
    this._registerAction('handTool', function () {
      handTool.toggle();
    });
  }

  if (globalConnect) {
    this._registerAction('globalConnectTool', function () {
      globalConnect.toggle();
    });
  }

  if (selection && distributeElements) {
    this._registerAction('distributeElements', function (opts) {
      var currentSelection = selection.get(),
          type = opts.type;

      if (currentSelection.length) {
        distributeElements.trigger(currentSelection, type);
      }
    });
  }

  if (selection && alignElements) {
    this._registerAction('alignElements', function (opts) {
      var currentSelection = selection.get(),
          aligneableElements = [],
          type = opts.type;

      if (currentSelection.length) {
        aligneableElements = Object(min_dash__WEBPACK_IMPORTED_MODULE_2__["filter"])(currentSelection, function (element) {
          return !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(element, 'bpmn:Lane');
        });
        alignElements.trigger(aligneableElements, type);
      }
    });
  }

  if (selection && modeling) {
    this._registerAction('setColor', function (opts) {
      var currentSelection = selection.get();

      if (currentSelection.length) {
        modeling.setColor(currentSelection, opts);
      }
    });
  }

  if (selection && directEditing) {
    this._registerAction('directEditing', function () {
      var currentSelection = selection.get();

      if (currentSelection.length) {
        directEditing.activate(currentSelection[0]);
      }
    });
  }

  if (searchPad) {
    this._registerAction('find', function () {
      searchPad.toggle();
    });
  }

  if (canvas && modeling) {
    this._registerAction('moveToOrigin', function () {
      var rootElement = canvas.getRootElement(),
          boundingBox,
          elements;

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(rootElement, 'bpmn:Collaboration')) {
        elements = elementRegistry.filter(function (element) {
          return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(element.parent, 'bpmn:Collaboration');
        });
      } else {
        elements = elementRegistry.filter(function (element) {
          return element !== rootElement && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(element.parent, 'bpmn:SubProcess');
        });
      }

      boundingBox = Object(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__["getBBox"])(elements);
      modeling.moveElements(elements, {
        x: -boundingBox.x,
        y: -boundingBox.y
      }, rootElement);
    });
  }
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/editor-actions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/editor-actions/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_editor_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/editor-actions */ "diagram-js/lib/features/editor-actions");
/* harmony import */ var diagram_js_lib_features_editor_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_editor_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnEditorActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnEditorActions */ "./node_modules/bpmn-js/lib/features/editor-actions/BpmnEditorActions.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_editor_actions__WEBPACK_IMPORTED_MODULE_0___default.a],
  editorActions: ['type', _BpmnEditorActions__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/grid-snapping/BpmnGridSnapping.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/grid-snapping/BpmnGridSnapping.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnGridSnapping; });
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");

function BpmnGridSnapping(eventBus) {
  eventBus.on(['create.init', 'shape.move.init'], function (event) {
    var context = event.context,
        shape = event.shape;

    if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_0__["isAny"])(shape, ['bpmn:Participant', 'bpmn:SubProcess', 'bpmn:TextAnnotation'])) {
      if (!context.gridSnappingContext) {
        context.gridSnappingContext = {};
      }

      context.gridSnappingContext.snapLocation = 'top-left';
    }
  });
}
BpmnGridSnapping.$inject = ['eventBus'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/AutoPlaceBehavior.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/grid-snapping/behavior/AutoPlaceBehavior.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoPlaceBehavior; });
/* harmony import */ var _auto_place_AutoPlaceUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auto-place/AutoPlaceUtil */ "./node_modules/bpmn-js/lib/features/auto-place/AutoPlaceUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



function AutoPlaceBehavior(eventBus, gridSnapping) {
  eventBus.on('autoPlace', function (context) {
    var source = context.source,
        sourceMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(source),
        shape = context.shape;
    var position = Object(_auto_place_AutoPlaceUtil__WEBPACK_IMPORTED_MODULE_0__["getNewShapePosition"])(source, shape);
    ['x', 'y'].forEach(function (axis) {
      var options = {}; // do not snap if x/y equal

      if (position[axis] === sourceMid[axis]) {
        return;
      }

      if (position[axis] > sourceMid[axis]) {
        options.min = position[axis];
      } else {
        options.max = position[axis];
      }

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:TextAnnotation')) {
        if (isHorizontal(axis)) {
          options.offset = -shape.width / 2;
        } else {
          options.offset = -shape.height / 2;
        }
      }

      position[axis] = gridSnapping.snapValue(position[axis], options);
    }); // must be returned to be considered by auto place

    return position;
  });
}
AutoPlaceBehavior.$inject = ['eventBus', 'gridSnapping']; // helpers //////////

function isHorizontal(axis) {
  return axis === 'x';
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/CreateParticipantBehavior.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/grid-snapping/behavior/CreateParticipantBehavior.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateParticipantBehavior; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");

var HIGHER_PRIORITY = 1750;
function CreateParticipantBehavior(canvas, eventBus, gridSnapping) {
  eventBus.on(['create.start', 'shape.move.start'], HIGHER_PRIORITY, function (event) {
    var context = event.context,
        shape = context.shape,
        rootElement = canvas.getRootElement();

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Participant') || !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(rootElement, 'bpmn:Process') || !rootElement.children.length) {
      return;
    }

    var createConstraints = context.createConstraints;

    if (!createConstraints) {
      return;
    }

    shape.width = gridSnapping.snapValue(shape.width, {
      min: shape.width
    });
    shape.height = gridSnapping.snapValue(shape.height, {
      min: shape.height
    });
  });
}
CreateParticipantBehavior.$inject = ['canvas', 'eventBus', 'gridSnapping'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/LayoutConnectionBehavior.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/grid-snapping/behavior/LayoutConnectionBehavior.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutConnectionBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_util_Geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Geometry */ "diagram-js/lib/util/Geometry");
/* harmony import */ var diagram_js_lib_util_Geometry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Geometry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);




var HIGH_PRIORITY = 3000;
/**
 * Snaps connections with Manhattan layout.
 */

function LayoutConnectionBehavior(eventBus, gridSnapping, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  this._gridSnapping = gridSnapping;
  var self = this;
  this.postExecuted(['connection.create', 'connection.layout'], HIGH_PRIORITY, function (event) {
    var context = event.context,
        connection = context.connection,
        hints = context.hints || {},
        waypoints = connection.waypoints;

    if (hints.connectionStart || hints.connectionEnd || hints.createElementsBehavior === false) {
      return;
    }

    if (!hasMiddleSegments(waypoints)) {
      return;
    }

    modeling.updateWaypoints(connection, self.snapMiddleSegments(waypoints));
  });
}
LayoutConnectionBehavior.$inject = ['eventBus', 'gridSnapping', 'modeling'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(LayoutConnectionBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);
/**
 * Snap middle segments of a given connection.
 *
 * @param {Array<Point>} waypoints
 *
 * @returns {Array<Point>}
 */

LayoutConnectionBehavior.prototype.snapMiddleSegments = function (waypoints) {
  var gridSnapping = this._gridSnapping,
      snapped;
  waypoints = waypoints.slice();

  for (var i = 1; i < waypoints.length - 2; i++) {
    snapped = snapSegment(gridSnapping, waypoints[i], waypoints[i + 1]);
    waypoints[i] = snapped[0];
    waypoints[i + 1] = snapped[1];
  }

  return waypoints;
}; // helpers //////////

/**
 * Check whether a connection has a middle segments.
 *
 * @param {Array} waypoints
 *
 * @returns {boolean}
 */


function hasMiddleSegments(waypoints) {
  return waypoints.length > 3;
}
/**
 * Check whether an alignment is horizontal.
 *
 * @param {string} aligned
 *
 * @returns {boolean}
 */


function horizontallyAligned(aligned) {
  return aligned === 'h';
}
/**
 * Check whether an alignment is vertical.
 *
 * @param {string} aligned
 *
 * @returns {boolean}
 */


function verticallyAligned(aligned) {
  return aligned === 'v';
}
/**
 * Get middle segments from a given connection.
 *
 * @param {Array} waypoints
 *
 * @returns {Array}
 */


function snapSegment(gridSnapping, segmentStart, segmentEnd) {
  var aligned = Object(diagram_js_lib_util_Geometry__WEBPACK_IMPORTED_MODULE_2__["pointsAligned"])(segmentStart, segmentEnd);
  var snapped = {};

  if (horizontallyAligned(aligned)) {
    // snap horizontally
    snapped.y = gridSnapping.snapValue(segmentStart.y);
  }

  if (verticallyAligned(aligned)) {
    // snap vertically
    snapped.x = gridSnapping.snapValue(segmentStart.x);
  }

  if ('x' in snapped || 'y' in snapped) {
    segmentStart = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, segmentStart, snapped);
    segmentEnd = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["assign"])({}, segmentEnd, snapped);
  }

  return [segmentStart, segmentEnd];
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/grid-snapping/behavior/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoPlaceBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoPlaceBehavior */ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/AutoPlaceBehavior.js");
/* harmony import */ var _CreateParticipantBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateParticipantBehavior */ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/CreateParticipantBehavior.js");
/* harmony import */ var _LayoutConnectionBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutConnectionBehavior */ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/LayoutConnectionBehavior.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['gridSnappingAutoPlaceBehavior', 'gridSnappingCreateParticipantBehavior', 'gridSnappingLayoutConnectionBehavior'],
  gridSnappingAutoPlaceBehavior: ['type', _AutoPlaceBehavior__WEBPACK_IMPORTED_MODULE_0__["default"]],
  gridSnappingCreateParticipantBehavior: ['type', _CreateParticipantBehavior__WEBPACK_IMPORTED_MODULE_1__["default"]],
  gridSnappingLayoutConnectionBehavior: ['type', _LayoutConnectionBehavior__WEBPACK_IMPORTED_MODULE_2__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/grid-snapping/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/grid-snapping/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BpmnGridSnapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpmnGridSnapping */ "./node_modules/bpmn-js/lib/features/grid-snapping/BpmnGridSnapping.js");
/* harmony import */ var diagram_js_lib_features_grid_snapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/grid-snapping */ "diagram-js/lib/features/grid-snapping");
/* harmony import */ var diagram_js_lib_features_grid_snapping__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_grid_snapping__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behavior */ "./node_modules/bpmn-js/lib/features/grid-snapping/behavior/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_grid_snapping__WEBPACK_IMPORTED_MODULE_1___default.a, _behavior__WEBPACK_IMPORTED_MODULE_2__["default"]],
  __init__: ['bpmnGridSnapping'],
  bpmnGridSnapping: ['type', _BpmnGridSnapping__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/interaction-events/BpmnInteractionEvents.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/interaction-events/BpmnInteractionEvents.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnInteractionEvents; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");


var LABEL_WIDTH = 30,
    LABEL_HEIGHT = 30;
/**
 * BPMN-specific hit zones and interaction fixes.
 *
 * @param {EventBus} eventBus
 * @param {InteractionEvents} interactionEvents
 */

function BpmnInteractionEvents(eventBus, interactionEvents) {
  this._interactionEvents = interactionEvents;
  var self = this;
  eventBus.on(['interactionEvents.createHit', 'interactionEvents.updateHit'], function (context) {
    var element = context.element,
        gfx = context.gfx;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Lane')) {
      return self.createParticipantHit(element, gfx);
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Participant')) {
      if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(element)) {
        return self.createParticipantHit(element, gfx);
      } else {
        return self.createDefaultHit(element, gfx);
      }
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:SubProcess')) {
      if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(element)) {
        return self.createSubProcessHit(element, gfx);
      } else {
        return self.createDefaultHit(element, gfx);
      }
    }
  });
}
BpmnInteractionEvents.$inject = ['eventBus', 'interactionEvents'];

BpmnInteractionEvents.prototype.createDefaultHit = function (element, gfx) {
  this._interactionEvents.removeHits(gfx);

  this._interactionEvents.createDefaultHit(element, gfx); // indicate that we created a hit


  return true;
};

BpmnInteractionEvents.prototype.createParticipantHit = function (element, gfx) {
  // remove existing hits
  this._interactionEvents.removeHits(gfx); // add outline hit


  this._interactionEvents.createBoxHit(gfx, 'click-stroke', {
    width: element.width,
    height: element.height
  }); // add label hit


  this._interactionEvents.createBoxHit(gfx, 'all', {
    width: LABEL_WIDTH,
    height: element.height
  }); // indicate that we created a hit


  return true;
};

BpmnInteractionEvents.prototype.createSubProcessHit = function (element, gfx) {
  // remove existing hits
  this._interactionEvents.removeHits(gfx); // add outline hit


  this._interactionEvents.createBoxHit(gfx, 'click-stroke', {
    width: element.width,
    height: element.height
  }); // add label hit


  this._interactionEvents.createBoxHit(gfx, 'all', {
    width: element.width,
    height: LABEL_HEIGHT
  }); // indicate that we created a hit


  return true;
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/interaction-events/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/interaction-events/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BpmnInteractionEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpmnInteractionEvents */ "./node_modules/bpmn-js/lib/features/interaction-events/BpmnInteractionEvents.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['bpmnInteractionEvents'],
  bpmnInteractionEvents: ['type', _BpmnInteractionEvents__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/keyboard/BpmnKeyboardBindings.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/keyboard/BpmnKeyboardBindings.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnKeyboardBindings; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_keyboard_KeyboardBindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/keyboard/KeyboardBindings */ "diagram-js/lib/features/keyboard/KeyboardBindings");
/* harmony import */ var diagram_js_lib_features_keyboard_KeyboardBindings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_keyboard_KeyboardBindings__WEBPACK_IMPORTED_MODULE_1__);


/**
 * BPMN 2.0 specific keyboard bindings.
 *
 * @param {Injector} injector
 */

function BpmnKeyboardBindings(injector) {
  injector.invoke(diagram_js_lib_features_keyboard_KeyboardBindings__WEBPACK_IMPORTED_MODULE_1___default.a, this);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BpmnKeyboardBindings, diagram_js_lib_features_keyboard_KeyboardBindings__WEBPACK_IMPORTED_MODULE_1___default.a);
BpmnKeyboardBindings.$inject = ['injector'];
/**
 * Register available keyboard bindings.
 *
 * @param {Keyboard} keyboard
 * @param {EditorActions} editorActions
 */

BpmnKeyboardBindings.prototype.registerBindings = function (keyboard, editorActions) {
  // inherit default bindings
  diagram_js_lib_features_keyboard_KeyboardBindings__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.registerBindings.call(this, keyboard, editorActions);
  /**
   * Add keyboard binding if respective editor action
   * is registered.
   *
   * @param {String} action name
   * @param {Function} fn that implements the key binding
   */

  function addListener(action, fn) {
    if (editorActions.isRegistered(action)) {
      keyboard.addListener(fn);
    }
  } // select all elements
  // CTRL + A


  addListener('selectElements', function (context) {
    var event = context.keyEvent;

    if (keyboard.isKey(['a', 'A'], event) && keyboard.isCmd(event)) {
      editorActions.trigger('selectElements');
      return true;
    }
  }); // search labels
  // CTRL + F

  addListener('find', function (context) {
    var event = context.keyEvent;

    if (keyboard.isKey(['f', 'F'], event) && keyboard.isCmd(event)) {
      editorActions.trigger('find');
      return true;
    }
  }); // activate space tool
  // S

  addListener('spaceTool', function (context) {
    var event = context.keyEvent;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard.isKey(['s', 'S'], event)) {
      editorActions.trigger('spaceTool');
      return true;
    }
  }); // activate lasso tool
  // L

  addListener('lassoTool', function (context) {
    var event = context.keyEvent;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard.isKey(['l', 'L'], event)) {
      editorActions.trigger('lassoTool');
      return true;
    }
  }); // activate hand tool
  // H

  addListener('handTool', function (context) {
    var event = context.keyEvent;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard.isKey(['h', 'H'], event)) {
      editorActions.trigger('handTool');
      return true;
    }
  }); // activate global connect tool
  // C

  addListener('globalConnectTool', function (context) {
    var event = context.keyEvent;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard.isKey(['c', 'C'], event)) {
      editorActions.trigger('globalConnectTool');
      return true;
    }
  }); // activate direct editing
  // E

  addListener('directEditing', function (context) {
    var event = context.keyEvent;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (keyboard.isKey(['e', 'E'], event)) {
      editorActions.trigger('directEditing');
      return true;
    }
  });
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/keyboard/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/keyboard/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/keyboard */ "diagram-js/lib/features/keyboard");
/* harmony import */ var diagram_js_lib_features_keyboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_keyboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnKeyboardBindings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnKeyboardBindings */ "./node_modules/bpmn-js/lib/features/keyboard/BpmnKeyboardBindings.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_keyboard__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['keyboardBindings'],
  keyboardBindings: ['type', _BpmnKeyboardBindings__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/label-editing/LabelEditingPreview.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/label-editing/LabelEditingPreview.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelEditingPreview; });
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-svg */ "tiny-svg");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/SvgTransformUtil */ "diagram-js/lib/util/SvgTransformUtil");
/* harmony import */ var diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_2__);



var MARKER_HIDDEN = 'djs-element-hidden',
    MARKER_LABEL_HIDDEN = 'djs-label-hidden';
function LabelEditingPreview(eventBus, canvas, elementRegistry, pathMap) {
  var self = this;
  var defaultLayer = canvas.getDefaultLayer();
  var element, absoluteElementBBox, gfx;
  eventBus.on('directEditing.activate', function (context) {
    var activeProvider = context.active;
    element = activeProvider.element.label || activeProvider.element; // text annotation

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:TextAnnotation')) {
      absoluteElementBBox = canvas.getAbsoluteBBox(element);
      gfx = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["create"])('g');
      var textPathData = pathMap.getScaledPath('TEXT_ANNOTATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.0,
          my: 0.0
        }
      });
      var path = self.path = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["create"])('path');
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["attr"])(path, {
        d: textPathData,
        strokeWidth: 2,
        stroke: getStrokeColor(element)
      });
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["append"])(gfx, path);
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["append"])(defaultLayer, gfx);
      Object(diagram_js_lib_util_SvgTransformUtil__WEBPACK_IMPORTED_MODULE_2__["translate"])(gfx, element.x, element.y);
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:TextAnnotation') || element.labelTarget) {
      canvas.addMarker(element, MARKER_HIDDEN);
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:Task') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:CallActivity') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:SubProcess') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:Participant')) {
      canvas.addMarker(element, MARKER_LABEL_HIDDEN);
    }
  });
  eventBus.on('directEditing.resize', function (context) {
    // text annotation
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:TextAnnotation')) {
      var height = context.height,
          dy = context.dy;
      var newElementHeight = Math.max(element.height / absoluteElementBBox.height * (height + dy), 0);
      var textPathData = pathMap.getScaledPath('TEXT_ANNOTATION', {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: newElementHeight,
        position: {
          mx: 0.0,
          my: 0.0
        }
      });
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["attr"])(self.path, {
        d: textPathData
      });
    }
  });
  eventBus.on(['directEditing.complete', 'directEditing.cancel'], function (context) {
    var activeProvider = context.active;

    if (activeProvider) {
      canvas.removeMarker(activeProvider.element.label || activeProvider.element, MARKER_HIDDEN);
      canvas.removeMarker(element, MARKER_LABEL_HIDDEN);
    }

    element = undefined;
    absoluteElementBBox = undefined;

    if (gfx) {
      Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["remove"])(gfx);
      gfx = undefined;
    }
  });
}
LabelEditingPreview.$inject = ['eventBus', 'canvas', 'elementRegistry', 'pathMap']; // helpers ///////////////////

function getStrokeColor(element, defaultColor) {
  var bo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["getBusinessObject"])(element);
  return bo.di.get('stroke') || defaultColor || 'black';
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/label-editing/LabelEditingProvider.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/label-editing/LabelEditingProvider.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelEditingProvider; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelUtil */ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _modeling_behavior_util_CategoryUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeling/behavior/util/CategoryUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/CategoryUtil.js");
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");







function LabelEditingProvider(eventBus, bpmnFactory, canvas, directEditing, modeling, resizeHandles, textRenderer) {
  this._bpmnFactory = bpmnFactory;
  this._canvas = canvas;
  this._modeling = modeling;
  this._textRenderer = textRenderer;
  directEditing.registerProvider(this); // listen to dblclick on non-root elements

  eventBus.on('element.dblclick', function (event) {
    activateDirectEdit(event.element, true);
  }); // complete on followup canvas operation

  eventBus.on(['autoPlace.start', 'canvas.viewbox.changing', 'drag.init', 'element.mousedown', 'popupMenu.open'], function (event) {
    if (directEditing.isActive()) {
      directEditing.complete();
    }
  }); // cancel on command stack changes

  eventBus.on(['commandStack.changed'], function (e) {
    if (directEditing.isActive()) {
      directEditing.cancel();
    }
  });
  eventBus.on('directEditing.activate', function (event) {
    resizeHandles.removeResizers();
  });
  eventBus.on('create.end', 500, function (event) {
    var context = event.context,
        element = context.shape,
        canExecute = event.context.canExecute,
        isTouch = event.isTouch; // TODO(nikku): we need to find a way to support the
    // direct editing on mobile devices; right now this will
    // break for desworkflowediting on mobile devices
    // as it breaks the user interaction workflow
    // TODO(nre): we should temporarily focus the edited element
    // here and release the focused viewport after the direct edit
    // operation is finished

    if (isTouch) {
      return;
    }

    if (!canExecute) {
      return;
    }

    if (context.hints && context.hints.createElementsBehavior === false) {
      return;
    }

    activateDirectEdit(element);
  });
  eventBus.on('autoPlace.end', 500, function (event) {
    activateDirectEdit(event.shape);
  });

  function activateDirectEdit(element, force) {
    if (force || Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__["isAny"])(element, ['bpmn:Task', 'bpmn:TextAnnotation', 'bpmn:Group']) || isCollapsedSubProcess(element)) {
      directEditing.activate(element);
    }
  }
}
LabelEditingProvider.$inject = ['eventBus', 'bpmnFactory', 'canvas', 'directEditing', 'modeling', 'resizeHandles', 'textRenderer'];
/**
 * Activate direct editing for activities and text annotations.
 *
 * @param  {djs.model.Base} element
 *
 * @return {Object} an object with properties bounds (position and size), text and options
 */

LabelEditingProvider.prototype.activate = function (element) {
  // text
  var text = Object(_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["getLabel"])(element);

  if (text === undefined) {
    return;
  }

  var context = {
    text: text
  }; // bounds

  var bounds = this.getEditingBBox(element);
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(context, bounds);
  var options = {}; // tasks

  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__["isAny"])(element, ['bpmn:Task', 'bpmn:Participant', 'bpmn:Lane', 'bpmn:CallActivity']) || isCollapsedSubProcess(element)) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(options, {
      centerVertically: true
    });
  } // external labels


  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_6__["isLabelExternal"])(element)) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(options, {
      autoResize: true
    });
  } // text annotations


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:TextAnnotation')) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(options, {
      resizable: true,
      autoResize: true
    });
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(context, {
    options: options
  });
  return context;
};
/**
 * Get the editing bounding box based on the element's size and position
 *
 * @param  {djs.model.Base} element
 *
 * @return {Object} an object containing information about position
 *                  and size (fixed or minimum and/or maximum)
 */


LabelEditingProvider.prototype.getEditingBBox = function (element) {
  var canvas = this._canvas;
  var target = element.label || element;
  var bbox = canvas.getAbsoluteBBox(target);
  var mid = {
    x: bbox.x + bbox.width / 2,
    y: bbox.y + bbox.height / 2
  }; // default position

  var bounds = {
    x: bbox.x,
    y: bbox.y
  };
  var zoom = canvas.zoom();

  var defaultStyle = this._textRenderer.getDefaultStyle(),
      externalStyle = this._textRenderer.getExternalStyle(); // take zoom into account


  var externalFontSize = externalStyle.fontSize * zoom,
      externalLineHeight = externalStyle.lineHeight,
      defaultFontSize = defaultStyle.fontSize * zoom,
      defaultLineHeight = defaultStyle.lineHeight;
  var style = {
    fontFamily: this._textRenderer.getDefaultStyle().fontFamily,
    fontWeight: this._textRenderer.getDefaultStyle().fontWeight
  }; // adjust for expanded pools AND lanes

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Lane') || isExpandedPool(element)) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
      width: bbox.height,
      height: 30 * zoom,
      x: bbox.x - bbox.height / 2 + 15 * zoom,
      y: mid.y - 30 * zoom / 2
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: 7 * zoom + 'px',
      paddingBottom: 7 * zoom + 'px',
      paddingLeft: 5 * zoom + 'px',
      paddingRight: 5 * zoom + 'px',
      transform: 'rotate(-90deg)'
    });
  } // internal labels for tasks and collapsed call activities,
  // sub processes and participants


  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__["isAny"])(element, ['bpmn:Task', 'bpmn:CallActivity']) || isCollapsedPool(element) || isCollapsedSubProcess(element)) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
      width: bbox.width,
      height: bbox.height
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: 7 * zoom + 'px',
      paddingBottom: 7 * zoom + 'px',
      paddingLeft: 5 * zoom + 'px',
      paddingRight: 5 * zoom + 'px'
    });
  } // internal labels for expanded sub processes


  if (isExpandedSubProcess(element)) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
      width: bbox.width,
      x: bbox.x
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(style, {
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight,
      paddingTop: 7 * zoom + 'px',
      paddingBottom: 7 * zoom + 'px',
      paddingLeft: 5 * zoom + 'px',
      paddingRight: 5 * zoom + 'px'
    });
  }

  var width = 90 * zoom,
      paddingTop = 7 * zoom,
      paddingBottom = 4 * zoom; // external labels for events, data elements, gateways, groups and connections

  if (target.labelTarget) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
      width: width,
      height: bbox.height + paddingTop + paddingBottom,
      x: mid.x - width / 2,
      y: bbox.y - paddingTop
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(style, {
      fontSize: externalFontSize + 'px',
      lineHeight: externalLineHeight,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    });
  } // external label not yet created


  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_6__["isLabelExternal"])(target) && !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_6__["hasExternalLabel"])(target) && !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_6__["isLabel"])(target)) {
    var externalLabelMid = Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_6__["getExternalLabelMid"])(element);
    var absoluteBBox = canvas.getAbsoluteBBox({
      x: externalLabelMid.x,
      y: externalLabelMid.y,
      width: 0,
      height: 0
    });
    var height = externalFontSize + paddingTop + paddingBottom;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
      width: width,
      height: height,
      x: absoluteBBox.x - width / 2,
      y: absoluteBBox.y - height / 2
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(style, {
      fontSize: externalFontSize + 'px',
      lineHeight: externalLineHeight,
      paddingTop: paddingTop + 'px',
      paddingBottom: paddingBottom + 'px'
    });
  } // text annotations


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:TextAnnotation')) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
      width: bbox.width,
      height: bbox.height,
      minWidth: 30 * zoom,
      minHeight: 10 * zoom
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(style, {
      textAlign: 'left',
      paddingTop: 5 * zoom + 'px',
      paddingBottom: 7 * zoom + 'px',
      paddingLeft: 7 * zoom + 'px',
      paddingRight: 5 * zoom + 'px',
      fontSize: defaultFontSize + 'px',
      lineHeight: defaultLineHeight
    });
  }

  return {
    bounds: bounds,
    style: style
  };
};

LabelEditingProvider.prototype.update = function (element, newLabel, activeContextText, bounds) {
  var newBounds, bbox;

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:TextAnnotation')) {
    bbox = this._canvas.getAbsoluteBBox(element);
    newBounds = {
      x: element.x,
      y: element.y,
      width: element.width / bbox.width * bounds.width,
      height: element.height / bbox.height * bounds.height
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Group')) {
    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element); // initialize categoryValue if not existing

    if (!businessObject.categoryValueRef) {
      var rootElement = this._canvas.getRootElement(),
          definitions = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(rootElement).$parent;

      var categoryValue = Object(_modeling_behavior_util_CategoryUtil__WEBPACK_IMPORTED_MODULE_3__["createCategoryValue"])(definitions, this._bpmnFactory);
      Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element).categoryValueRef = categoryValue;
    }
  }

  if (isEmptyText(newLabel)) {
    newLabel = null;
  }

  this._modeling.updateLabel(element, newLabel, newBounds);
}; // helpers //////////////////////


function isCollapsedSubProcess(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:SubProcess') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(element);
}

function isExpandedSubProcess(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:SubProcess') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(element);
}

function isCollapsedPool(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Participant') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(element);
}

function isExpandedPool(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Participant') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(element);
}

function isEmptyText(label) {
  return !label || !label.trim();
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js ***!
  \**********************************************************************/
/*! exports provided: getLabel, setLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLabel", function() { return setLabel; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");


function getLabelAttr(semantic) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:FlowElement') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:Participant') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:Lane') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:SequenceFlow') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:MessageFlow') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:DataInput') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:DataOutput')) {
    return 'name';
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:TextAnnotation')) {
    return 'text';
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(semantic, 'bpmn:Group')) {
    return 'categoryValueRef';
  }
}

function getCategoryValue(semantic) {
  var categoryValueRef = semantic['categoryValueRef'];

  if (!categoryValueRef) {
    return '';
  }

  return categoryValueRef.value || '';
}

function getLabel(element) {
  var semantic = element.businessObject,
      attr = getLabelAttr(semantic);

  if (attr) {
    if (attr === 'categoryValueRef') {
      return getCategoryValue(semantic);
    }

    return semantic[attr] || '';
  }
}
function setLabel(element, text, isExternal) {
  var semantic = element.businessObject,
      attr = getLabelAttr(semantic);

  if (attr) {
    if (attr === 'categoryValueRef') {
      semantic['categoryValueRef'].value = text;
    } else {
      semantic[attr] = text;
    }
  }

  return element;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/label-editing/cmd/UpdateLabelHandler.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/label-editing/cmd/UpdateLabelHandler.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateLabelHandler; });
/* harmony import */ var _LabelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LabelUtil */ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



var NULL_DIMENSIONS = {
  width: 0,
  height: 0
};
/**
 * A handler that updates the text of a BPMN element.
 */

function UpdateLabelHandler(modeling, textRenderer) {
  /**
   * Set the label and return the changed elements.
   *
   * Element parameter can be label itself or connection (i.e. sequence flow).
   *
   * @param {djs.model.Base} element
   * @param {String} text
   */
  function setText(element, text) {
    // external label if present
    var label = element.label || element;
    var labelTarget = element.labelTarget || element;
    Object(_LabelUtil__WEBPACK_IMPORTED_MODULE_0__["setLabel"])(label, text, labelTarget !== label);
    return [label, labelTarget];
  }

  function preExecute(ctx) {
    var element = ctx.element,
        businessObject = element.businessObject,
        newLabel = ctx.newLabel;

    if (!Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["isLabel"])(element) && Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["isLabelExternal"])(element) && !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["hasExternalLabel"])(element) && !isEmptyText(newLabel)) {
      // create label
      var paddingTop = 7;
      var labelCenter = Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["getExternalLabelMid"])(element);
      labelCenter = {
        x: labelCenter.x,
        y: labelCenter.y + paddingTop
      };
      modeling.createLabel(element, labelCenter, {
        id: businessObject.id + '_label',
        businessObject: businessObject
      });
    }
  }

  function execute(ctx) {
    ctx.oldLabel = Object(_LabelUtil__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(ctx.element);
    return setText(ctx.element, ctx.newLabel);
  }

  function revert(ctx) {
    return setText(ctx.element, ctx.oldLabel);
  }

  function postExecute(ctx) {
    var element = ctx.element,
        label = element.label || element,
        newLabel = ctx.newLabel,
        newBounds = ctx.newBounds,
        hints = ctx.hints || {};

    if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["isLabel"])(label) && isEmptyText(newLabel)) {
      if (hints.removeShape !== false) {
        modeling.removeShape(label, {
          unsetLabel: false
        });
      }

      return;
    } // ignore internal labels for elements except text annotations


    if (!Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["isLabelExternal"])(element) && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:TextAnnotation')) {
      return;
    }

    var text = Object(_LabelUtil__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(label); // don't resize without text

    if (!text) {
      return;
    } // resize element based on label _or_ pre-defined bounds


    if (typeof newBounds === 'undefined') {
      newBounds = textRenderer.getExternalLabelBounds(label, text);
    } // setting newBounds to false or _null_ will
    // disable the postExecute resize operation


    if (newBounds) {
      modeling.resizeShape(label, newBounds, NULL_DIMENSIONS);
    }
  } // API


  this.preExecute = preExecute;
  this.execute = execute;
  this.revert = revert;
  this.postExecute = postExecute;
}
UpdateLabelHandler.$inject = ['modeling', 'textRenderer']; // helpers ///////////////////////

function isEmptyText(label) {
  return !label || !label.trim();
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/label-editing/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/label-editing/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/change-support */ "diagram-js/lib/features/change-support");
/* harmony import */ var diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/resize */ "diagram-js/lib/features/resize");
/* harmony import */ var diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js-direct-editing */ "diagram-js-direct-editing");
/* harmony import */ var diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LabelEditingProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LabelEditingProvider */ "./node_modules/bpmn-js/lib/features/label-editing/LabelEditingProvider.js");
/* harmony import */ var _LabelEditingPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LabelEditingPreview */ "./node_modules/bpmn-js/lib/features/label-editing/LabelEditingPreview.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_0___default.a, diagram_js_lib_features_resize__WEBPACK_IMPORTED_MODULE_1___default.a, diagram_js_direct_editing__WEBPACK_IMPORTED_MODULE_2___default.a],
  __init__: ['labelEditingProvider', 'labelEditingPreview'],
  labelEditingProvider: ['type', _LabelEditingProvider__WEBPACK_IMPORTED_MODULE_3__["default"]],
  labelEditingPreview: ['type', _LabelEditingPreview__WEBPACK_IMPORTED_MODULE_4__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/BpmnFactory.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/BpmnFactory.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnFactory; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



function BpmnFactory(moddle) {
  this._model = moddle;
}
BpmnFactory.$inject = ['moddle'];

BpmnFactory.prototype._needsId = function (element) {
  return Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__["isAny"])(element, ['bpmn:RootElement', 'bpmn:FlowElement', 'bpmn:MessageFlow', 'bpmn:DataAssociation', 'bpmn:Artifact', 'bpmn:Participant', 'bpmn:Lane', 'bpmn:LaneSet', 'bpmn:Process', 'bpmn:Collaboration', 'bpmndi:BPMNShape', 'bpmndi:BPMNEdge', 'bpmndi:BPMNDiagram', 'bpmndi:BPMNPlane', 'bpmn:Property', 'bpmn:CategoryValue']);
};

BpmnFactory.prototype._ensureId = function (element) {
  // generate semantic ids for elements
  // bpmn:SequenceFlow -> SequenceFlow_ID
  var prefix;

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Activity')) {
    prefix = 'Activity';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Event')) {
    prefix = 'Event';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Gateway')) {
    prefix = 'Gateway';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:FlowElement')) {
    prefix = 'Flow';
  } else {
    prefix = (element.$type || '').replace(/^[^:]*:/g, '');
  }

  prefix += '_';

  if (!element.id && this._needsId(element)) {
    element.id = this._model.ids.nextPrefixed(prefix, element);
  }
};

BpmnFactory.prototype.create = function (type, attrs) {
  var element = this._model.create(type, attrs || {});

  this._ensureId(element);

  return element;
};

BpmnFactory.prototype.createDiLabel = function () {
  return this.create('bpmndi:BPMNLabel', {
    bounds: this.createDiBounds()
  });
};

BpmnFactory.prototype.createDiShape = function (semantic, bounds, attrs) {
  return this.create('bpmndi:BPMNShape', Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    bpmnElement: semantic,
    bounds: this.createDiBounds(bounds)
  }, attrs));
};

BpmnFactory.prototype.createDiBounds = function (bounds) {
  return this.create('dc:Bounds', bounds);
};

BpmnFactory.prototype.createDiWaypoints = function (waypoints) {
  var self = this;
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["map"])(waypoints, function (pos) {
    return self.createDiWaypoint(pos);
  });
};

BpmnFactory.prototype.createDiWaypoint = function (point) {
  return this.create('dc:Point', Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["pick"])(point, ['x', 'y']));
};

BpmnFactory.prototype.createDiEdge = function (semantic, waypoints, attrs) {
  return this.create('bpmndi:BPMNEdge', Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    bpmnElement: semantic
  }, attrs));
};

BpmnFactory.prototype.createDiPlane = function (semantic) {
  return this.create('bpmndi:BPMNPlane', {
    bpmnElement: semantic
  });
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/BpmnLayouter.js":
/*!********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/BpmnLayouter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnLayouter; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_layout_BaseLayouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/layout/BaseLayouter */ "diagram-js/lib/layout/BaseLayouter");
/* harmony import */ var diagram_js_lib_layout_BaseLayouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_BaseLayouter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_layout_ManhattanLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/layout/ManhattanLayout */ "diagram-js/lib/layout/ManhattanLayout");
/* harmony import */ var diagram_js_lib_layout_ManhattanLayout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_ManhattanLayout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");







var ATTACH_ORIENTATION_PADDING = -10,
    BOUNDARY_TO_HOST_THRESHOLD = 40;
var oppositeOrientationMapping = {
  'top': 'bottom',
  'top-right': 'bottom-left',
  'top-left': 'bottom-right',
  'right': 'left',
  'bottom': 'top',
  'bottom-right': 'top-left',
  'bottom-left': 'top-right',
  'left': 'right'
};
var orientationDirectionMapping = {
  top: 't',
  right: 'r',
  bottom: 'b',
  left: 'l'
};
function BpmnLayouter() {}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BpmnLayouter, diagram_js_lib_layout_BaseLayouter__WEBPACK_IMPORTED_MODULE_2___default.a);

BpmnLayouter.prototype.layoutConnection = function (connection, hints) {
  if (!hints) {
    hints = {};
  }

  var source = hints.source || connection.source,
      target = hints.target || connection.target,
      waypoints = hints.waypoints || connection.waypoints,
      connectionStart = hints.connectionStart,
      connectionEnd = hints.connectionEnd;
  var manhattanOptions, updatedWaypoints;

  if (!connectionStart) {
    connectionStart = getConnectionDocking(waypoints && waypoints[0], source);
  }

  if (!connectionEnd) {
    connectionEnd = getConnectionDocking(waypoints && waypoints[waypoints.length - 1], target);
  } // TODO(nikku): support vertical modeling
  // and invert preferredLayouts accordingly


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(connection, 'bpmn:Association') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(connection, 'bpmn:DataAssociation')) {
    if (waypoints && !isCompensationAssociation(source, target)) {
      return [].concat([connectionStart], waypoints.slice(1, -1), [connectionEnd]);
    }
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(connection, 'bpmn:MessageFlow')) {
    manhattanOptions = getMessageFlowManhattanOptions(source, target);
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(connection, 'bpmn:SequenceFlow') || isCompensationAssociation(source, target)) {
    // layout all connection between flow elements h:h, except for
    // (1) outgoing of boundary events -> layout based on attach orientation and target orientation
    // (2) incoming/outgoing of gateways -> v:h for outgoing, h:v for incoming
    // (3) loops
    if (source === target) {
      manhattanOptions = {
        preferredLayouts: getLoopPreferredLayout(source, connection)
      };
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(source, 'bpmn:BoundaryEvent')) {
      manhattanOptions = {
        preferredLayouts: getBoundaryEventPreferredLayouts(source, target, connectionEnd)
      };
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(source, 'bpmn:Gateway')) {
      manhattanOptions = {
        preferredLayouts: ['v:h']
      };
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(target, 'bpmn:Gateway')) {
      manhattanOptions = {
        preferredLayouts: ['h:v']
      };
    } else {
      manhattanOptions = {
        preferredLayouts: ['h:h']
      };
    }
  }

  if (manhattanOptions) {
    manhattanOptions = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])(manhattanOptions, hints);
    updatedWaypoints = Object(diagram_js_lib_layout_ManhattanLayout__WEBPACK_IMPORTED_MODULE_3__["withoutRedundantPoints"])(Object(diagram_js_lib_layout_ManhattanLayout__WEBPACK_IMPORTED_MODULE_3__["repairConnection"])(source, target, connectionStart, connectionEnd, waypoints, manhattanOptions));
  }

  return updatedWaypoints || [connectionStart, connectionEnd];
}; // helpers //////////


function getAttachOrientation(attachedElement) {
  var hostElement = attachedElement.host;
  return Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getOrientation"])(Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getMid"])(attachedElement), hostElement, ATTACH_ORIENTATION_PADDING);
}

function getMessageFlowManhattanOptions(source, target) {
  return {
    preferredLayouts: ['straight', 'v:v'],
    preserveDocking: getMessageFlowPreserveDocking(source, target)
  };
}

function getMessageFlowPreserveDocking(source, target) {
  // (1) docking element connected to participant has precedence
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(target, 'bpmn:Participant')) {
    return 'source';
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(source, 'bpmn:Participant')) {
    return 'target';
  } // (2) docking element connected to expanded sub-process has precedence


  if (isExpandedSubProcess(target)) {
    return 'source';
  }

  if (isExpandedSubProcess(source)) {
    return 'target';
  } // (3) docking event has precedence


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(target, 'bpmn:Event')) {
    return 'target';
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(source, 'bpmn:Event')) {
    return 'source';
  }

  return null;
}

function getConnectionDocking(point, shape) {
  return point ? point.original || point : Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getMid"])(shape);
}

function isCompensationAssociation(source, target) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(target, 'bpmn:Activity') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(source, 'bpmn:BoundaryEvent') && target.businessObject.isForCompensation;
}

function isExpandedSubProcess(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_6__["is"])(element, 'bpmn:SubProcess') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(element);
}

function isSame(a, b) {
  return a === b;
}

function isAnyOrientation(orientation, orientations) {
  return orientations.indexOf(orientation) !== -1;
}

function getHorizontalOrientation(orientation) {
  var matches = /right|left/.exec(orientation);
  return matches && matches[0];
}

function getVerticalOrientation(orientation) {
  var matches = /top|bottom/.exec(orientation);
  return matches && matches[0];
}

function isOppositeOrientation(a, b) {
  return oppositeOrientationMapping[a] === b;
}

function isOppositeHorizontalOrientation(a, b) {
  var horizontalOrientation = getHorizontalOrientation(a);
  var oppositeHorizontalOrientation = oppositeOrientationMapping[horizontalOrientation];
  return b.indexOf(oppositeHorizontalOrientation) !== -1;
}

function isOppositeVerticalOrientation(a, b) {
  var verticalOrientation = getVerticalOrientation(a);
  var oppositeVerticalOrientation = oppositeOrientationMapping[verticalOrientation];
  return b.indexOf(oppositeVerticalOrientation) !== -1;
}

function isHorizontalOrientation(orientation) {
  return orientation === 'right' || orientation === 'left';
}

function getLoopPreferredLayout(source, connection) {
  var waypoints = connection.waypoints;
  var orientation = waypoints && waypoints.length && Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getOrientation"])(waypoints[0], source);

  if (orientation === 'top') {
    return ['t:r'];
  } else if (orientation === 'right') {
    return ['r:b'];
  } else if (orientation === 'left') {
    return ['l:t'];
  }

  return ['b:l'];
}

function getBoundaryEventPreferredLayouts(source, target, end) {
  var sourceMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getMid"])(source),
      targetMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getMid"])(target),
      attachOrientation = getAttachOrientation(source),
      sourceLayout,
      targetLayout;
  var isLoop = isSame(source.host, target);
  var attachedToSide = isAnyOrientation(attachOrientation, ['top', 'right', 'bottom', 'left']);
  var targetOrientation = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getOrientation"])(targetMid, sourceMid, {
    x: source.width / 2 + target.width / 2,
    y: source.height / 2 + target.height / 2
  });

  if (isLoop) {
    return getBoundaryEventLoopLayout(attachOrientation, attachedToSide, source, target, end);
  } // source layout


  sourceLayout = getBoundaryEventSourceLayout(attachOrientation, targetOrientation, attachedToSide); // target layout

  targetLayout = getBoundaryEventTargetLayout(attachOrientation, targetOrientation, attachedToSide);
  return [sourceLayout + ':' + targetLayout];
}

function getBoundaryEventLoopLayout(attachOrientation, attachedToSide, source, target, end) {
  var orientation = attachedToSide ? attachOrientation : getVerticalOrientation(attachOrientation),
      sourceLayout = orientationDirectionMapping[orientation],
      targetLayout;

  if (attachedToSide) {
    if (isHorizontalOrientation(attachOrientation)) {
      targetLayout = shouldConnectToSameSide('y', source, target, end) ? 'h' : 'b';
    } else {
      targetLayout = shouldConnectToSameSide('x', source, target, end) ? 'v' : 'l';
    }
  } else {
    targetLayout = 'v';
  }

  return [sourceLayout + ':' + targetLayout];
}

function shouldConnectToSameSide(axis, source, target, end) {
  var threshold = BOUNDARY_TO_HOST_THRESHOLD;
  return !(areCloseOnAxis(axis, end, target, threshold) || areCloseOnAxis(axis, end, {
    x: target.x + target.width,
    y: target.y + target.height
  }, threshold) || areCloseOnAxis(axis, end, Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_4__["getMid"])(source), threshold));
}

function areCloseOnAxis(axis, a, b, threshold) {
  return Math.abs(a[axis] - b[axis]) < threshold;
}

function getBoundaryEventSourceLayout(attachOrientation, targetOrientation, attachedToSide) {
  // attached to either top, right, bottom or left side
  if (attachedToSide) {
    return orientationDirectionMapping[attachOrientation];
  } // attached to either top-right, top-left, bottom-right or bottom-left corner
  // same vertical or opposite horizontal orientation


  if (isSame(getVerticalOrientation(attachOrientation), getVerticalOrientation(targetOrientation)) || isOppositeOrientation(getHorizontalOrientation(attachOrientation), getHorizontalOrientation(targetOrientation))) {
    return orientationDirectionMapping[getVerticalOrientation(attachOrientation)];
  } // fallback


  return orientationDirectionMapping[getHorizontalOrientation(attachOrientation)];
}

function getBoundaryEventTargetLayout(attachOrientation, targetOrientation, attachedToSide) {
  // attached to either top, right, bottom or left side
  if (attachedToSide) {
    if (isHorizontalOrientation(attachOrientation)) {
      // orientation is right or left
      // opposite horizontal orientation or same orientation
      if (isOppositeHorizontalOrientation(attachOrientation, targetOrientation) || isSame(attachOrientation, targetOrientation)) {
        return 'h';
      } // fallback


      return 'v';
    } else {
      // orientation is top or bottom
      // opposite vertical orientation or same orientation
      if (isOppositeVerticalOrientation(attachOrientation, targetOrientation) || isSame(attachOrientation, targetOrientation)) {
        return 'v';
      } // fallback


      return 'h';
    }
  } // attached to either top-right, top-left, bottom-right or bottom-left corner
  // orientation is right, left
  // or same vertical orientation but also right or left


  if (isHorizontalOrientation(targetOrientation) || isSame(getVerticalOrientation(attachOrientation), getVerticalOrientation(targetOrientation)) && getHorizontalOrientation(targetOrientation)) {
    return 'h';
  } else {
    return 'v';
  }
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/BpmnUpdater.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/BpmnUpdater.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnUpdater; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/model */ "diagram-js/lib/model");
/* harmony import */ var diagram_js_lib_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6__);







/**
 * A handler responsible for updating the underlying BPMN 2.0 XML + DI
 * once changes on the diagram happen
 */

function BpmnUpdater(eventBus, bpmnFactory, connectionDocking, translate) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6___default.a.call(this, eventBus);
  this._bpmnFactory = bpmnFactory;
  this._translate = translate;
  var self = this; // connection cropping //////////////////////
  // crop connection ends during create/update

  function cropConnection(e) {
    var context = e.context,
        hints = context.hints || {},
        connection;

    if (!context.cropped && hints.createElementsBehavior !== false) {
      connection = context.connection;
      connection.waypoints = connectionDocking.getCroppedWaypoints(connection);
      context.cropped = true;
    }
  }

  this.executed(['connection.layout', 'connection.create'], cropConnection);
  this.reverted(['connection.layout'], function (e) {
    delete e.context.cropped;
  }); // BPMN + DI update //////////////////////
  // update parent

  function updateParent(e) {
    var context = e.context;
    self.updateParent(context.shape || context.connection, context.oldParent);
  }

  function reverseUpdateParent(e) {
    var context = e.context;
    var element = context.shape || context.connection,
        // oldParent is the (old) new parent, because we are undoing
    oldParent = context.parent || context.newParent;
    self.updateParent(element, oldParent);
  }

  this.executed(['shape.move', 'shape.create', 'shape.delete', 'connection.create', 'connection.move', 'connection.delete'], ifBpmn(updateParent));
  this.reverted(['shape.move', 'shape.create', 'shape.delete', 'connection.create', 'connection.move', 'connection.delete'], ifBpmn(reverseUpdateParent));
  /*
   * ## Updating Parent
   *
   * When morphing a Process into a Collaboration or vice-versa,
   * make sure that both the *semantic* and *di* parent of each element
   * is updated.
   *
   */

  function updateRoot(event) {
    var context = event.context,
        oldRoot = context.oldRoot,
        children = oldRoot.children;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(children, function (child) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(child, 'bpmn:BaseElement')) {
        self.updateParent(child);
      }
    });
  }

  this.executed(['canvas.updateRoot'], updateRoot);
  this.reverted(['canvas.updateRoot'], updateRoot); // update bounds

  function updateBounds(e) {
    var shape = e.context.shape;

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(shape, 'bpmn:BaseElement')) {
      return;
    }

    self.updateBounds(shape);
  }

  this.executed(['shape.move', 'shape.create', 'shape.resize'], ifBpmn(function (event) {
    // exclude labels because they're handled separately during shape.changed
    if (event.context.shape.type === 'label') {
      return;
    }

    updateBounds(event);
  }));
  this.reverted(['shape.move', 'shape.create', 'shape.resize'], ifBpmn(function (event) {
    // exclude labels because they're handled separately during shape.changed
    if (event.context.shape.type === 'label') {
      return;
    }

    updateBounds(event);
  })); // Handle labels separately. This is necessary, because the label bounds have to be updated
  // every time its shape changes, not only on move, create and resize.

  eventBus.on('shape.changed', function (event) {
    if (event.element.type === 'label') {
      updateBounds({
        context: {
          shape: event.element
        }
      });
    }
  }); // attach / detach connection

  function updateConnection(e) {
    self.updateConnection(e.context);
  }

  this.executed(['connection.create', 'connection.move', 'connection.delete', 'connection.reconnect'], ifBpmn(updateConnection));
  this.reverted(['connection.create', 'connection.move', 'connection.delete', 'connection.reconnect'], ifBpmn(updateConnection)); // update waypoints

  function updateConnectionWaypoints(e) {
    self.updateConnectionWaypoints(e.context.connection);
  }

  this.executed(['connection.layout', 'connection.move', 'connection.updateWaypoints'], ifBpmn(updateConnectionWaypoints));
  this.reverted(['connection.layout', 'connection.move', 'connection.updateWaypoints'], ifBpmn(updateConnectionWaypoints)); // update conditional/default flows

  this.executed('connection.reconnect', ifBpmn(function (event) {
    var context = event.context,
        connection = context.connection,
        oldSource = context.oldSource,
        newSource = context.newSource,
        connectionBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(connection),
        oldSourceBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(oldSource),
        newSourceBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(newSource); // remove condition from connection on reconnect to new source
    // if new source can NOT have condional sequence flow

    if (connectionBo.conditionExpression && !Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_5__["isAny"])(newSourceBo, ['bpmn:Activity', 'bpmn:ExclusiveGateway', 'bpmn:InclusiveGateway'])) {
      context.oldConditionExpression = connectionBo.conditionExpression;
      delete connectionBo.conditionExpression;
    } // remove default from old source flow on reconnect to new source
    // if source changed


    if (oldSource !== newSource && oldSourceBo.default === connectionBo) {
      context.oldDefault = oldSourceBo.default;
      delete oldSourceBo.default;
    }
  }));
  this.reverted('connection.reconnect', ifBpmn(function (event) {
    var context = event.context,
        connection = context.connection,
        oldSource = context.oldSource,
        newSource = context.newSource,
        connectionBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(connection),
        oldSourceBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(oldSource),
        newSourceBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(newSource); // add condition to connection on revert reconnect to new source

    if (context.oldConditionExpression) {
      connectionBo.conditionExpression = context.oldConditionExpression;
    } // add default to old source on revert reconnect to new source


    if (context.oldDefault) {
      oldSourceBo.default = context.oldDefault;
      delete newSourceBo.default;
    }
  })); // update attachments

  function updateAttachment(e) {
    self.updateAttachment(e.context);
  }

  this.executed(['element.updateAttachment'], ifBpmn(updateAttachment));
  this.reverted(['element.updateAttachment'], ifBpmn(updateAttachment));
}
inherits__WEBPACK_IMPORTED_MODULE_1___default()(BpmnUpdater, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6___default.a);
BpmnUpdater.$inject = ['eventBus', 'bpmnFactory', 'connectionDocking', 'translate']; // implementation //////////////////////

BpmnUpdater.prototype.updateAttachment = function (context) {
  var shape = context.shape,
      businessObject = shape.businessObject,
      host = shape.host;
  businessObject.attachedToRef = host && host.businessObject;
};

BpmnUpdater.prototype.updateParent = function (element, oldParent) {
  // do not update BPMN 2.0 label parent
  if (element instanceof diagram_js_lib_model__WEBPACK_IMPORTED_MODULE_3__["Label"]) {
    return;
  } // data stores in collaborations are handled separately by DataStoreBehavior


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:DataStoreReference') && element.parent && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element.parent, 'bpmn:Collaboration')) {
    return;
  }

  var parentShape = element.parent;
  var businessObject = element.businessObject,
      parentBusinessObject = parentShape && parentShape.businessObject,
      parentDi = parentBusinessObject && parentBusinessObject.di;

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:FlowNode')) {
    this.updateFlowNodeRefs(businessObject, parentBusinessObject, oldParent && oldParent.businessObject);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:DataOutputAssociation')) {
    if (element.source) {
      parentBusinessObject = element.source.businessObject;
    } else {
      parentBusinessObject = null;
    }
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:DataInputAssociation')) {
    if (element.target) {
      parentBusinessObject = element.target.businessObject;
    } else {
      parentBusinessObject = null;
    }
  }

  this.updateSemanticParent(businessObject, parentBusinessObject);

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:DataObjectReference') && businessObject.dataObjectRef) {
    this.updateSemanticParent(businessObject.dataObjectRef, parentBusinessObject);
  }

  this.updateDiParent(businessObject.di, parentDi);
};

BpmnUpdater.prototype.updateBounds = function (shape) {
  var di = shape.businessObject.di;
  var target = shape instanceof diagram_js_lib_model__WEBPACK_IMPORTED_MODULE_3__["Label"] ? this._getLabel(di) : di;
  var bounds = target.bounds;

  if (!bounds) {
    bounds = this._bpmnFactory.createDiBounds();
    target.set('bounds', bounds);
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(bounds, {
    x: shape.x,
    y: shape.y,
    width: shape.width,
    height: shape.height
  });
};

BpmnUpdater.prototype.updateFlowNodeRefs = function (businessObject, newContainment, oldContainment) {
  if (oldContainment === newContainment) {
    return;
  }

  var oldRefs, newRefs;

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(oldContainment, 'bpmn:Lane')) {
    oldRefs = oldContainment.get('flowNodeRef');
    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(oldRefs, businessObject);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newContainment, 'bpmn:Lane')) {
    newRefs = newContainment.get('flowNodeRef');
    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(newRefs, businessObject);
  }
}; // update existing sourceElement and targetElement di information


BpmnUpdater.prototype.updateDiConnection = function (di, newSource, newTarget) {
  if (di.sourceElement && di.sourceElement.bpmnElement !== newSource) {
    di.sourceElement = newSource && newSource.di;
  }

  if (di.targetElement && di.targetElement.bpmnElement !== newTarget) {
    di.targetElement = newTarget && newTarget.di;
  }
};

BpmnUpdater.prototype.updateDiParent = function (di, parentDi) {
  if (parentDi && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(parentDi, 'bpmndi:BPMNPlane')) {
    parentDi = parentDi.$parent;
  }

  if (di.$parent === parentDi) {
    return;
  }

  var planeElements = (parentDi || di.$parent).get('planeElement');

  if (parentDi) {
    planeElements.push(di);
    di.$parent = parentDi;
  } else {
    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(planeElements, di);
    di.$parent = null;
  }
};

function getDefinitions(element) {
  while (element && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:Definitions')) {
    element = element.$parent;
  }

  return element;
}

BpmnUpdater.prototype.getLaneSet = function (container) {
  var laneSet, laneSets; // bpmn:Lane

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(container, 'bpmn:Lane')) {
    laneSet = container.childLaneSet;

    if (!laneSet) {
      laneSet = this._bpmnFactory.create('bpmn:LaneSet');
      container.childLaneSet = laneSet;
      laneSet.$parent = container;
    }

    return laneSet;
  } // bpmn:Participant


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(container, 'bpmn:Participant')) {
    container = container.processRef;
  } // bpmn:FlowElementsContainer


  laneSets = container.get('laneSets');
  laneSet = laneSets[0];

  if (!laneSet) {
    laneSet = this._bpmnFactory.create('bpmn:LaneSet');
    laneSet.$parent = container;
    laneSets.push(laneSet);
  }

  return laneSet;
};

BpmnUpdater.prototype.updateSemanticParent = function (businessObject, newParent, visualParent) {
  var containment,
      translate = this._translate;

  if (businessObject.$parent === newParent) {
    return;
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataInput') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataOutput')) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Participant') && 'processRef' in newParent) {
      newParent = newParent.processRef;
    } // already in correct ioSpecification


    if ('ioSpecification' in newParent && newParent.ioSpecification === businessObject.$parent) {
      return;
    }
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:Lane')) {
    if (newParent) {
      newParent = this.getLaneSet(newParent);
    }

    containment = 'lanes';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:FlowElement')) {
    if (newParent) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Participant')) {
        newParent = newParent.processRef;
      } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Lane')) {
        do {
          // unwrap Lane -> LaneSet -> (Lane | FlowElementsContainer)
          newParent = newParent.$parent.$parent;
        } while (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Lane'));
      }
    }

    containment = 'flowElements';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:Artifact')) {
    while (newParent && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Process') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:SubProcess') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Collaboration')) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(newParent, 'bpmn:Participant')) {
        newParent = newParent.processRef;
        break;
      } else {
        newParent = newParent.$parent;
      }
    }

    containment = 'artifacts';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:MessageFlow')) {
    containment = 'messageFlows';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:Participant')) {
    containment = 'participants'; // make sure the participants process is properly attached / detached
    // from the XML document

    var process = businessObject.processRef,
        definitions;

    if (process) {
      definitions = getDefinitions(businessObject.$parent || newParent);

      if (businessObject.$parent) {
        Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(definitions.get('rootElements'), process);
        process.$parent = null;
      }

      if (newParent) {
        Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(definitions.get('rootElements'), process);
        process.$parent = definitions;
      }
    }
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataOutputAssociation')) {
    containment = 'dataOutputAssociations';
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataInputAssociation')) {
    containment = 'dataInputAssociations';
  }

  if (!containment) {
    throw new Error(translate('no parent for {element} in {parent}', {
      element: businessObject.id,
      parent: newParent.id
    }));
  }

  var children;

  if (businessObject.$parent) {
    // remove from old parent
    children = businessObject.$parent.get(containment);
    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(children, businessObject);
  }

  if (!newParent) {
    businessObject.$parent = null;
  } else {
    // add to new parent
    children = newParent.get(containment);
    children.push(businessObject);
    businessObject.$parent = newParent;
  }

  if (visualParent) {
    var diChildren = visualParent.get(containment);
    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(children, businessObject);

    if (newParent) {
      if (!diChildren) {
        diChildren = [];
        newParent.set(containment, diChildren);
      }

      diChildren.push(businessObject);
    }
  }
};

BpmnUpdater.prototype.updateConnectionWaypoints = function (connection) {
  connection.businessObject.di.set('waypoint', this._bpmnFactory.createDiWaypoints(connection.waypoints));
};

BpmnUpdater.prototype.updateConnection = function (context) {
  var connection = context.connection,
      businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(connection),
      newSource = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(connection.source),
      newTarget = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(connection.target),
      visualParent;

  if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataAssociation')) {
    var inverseSet = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:SequenceFlow');

    if (businessObject.sourceRef !== newSource) {
      if (inverseSet) {
        Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(businessObject.sourceRef && businessObject.sourceRef.get('outgoing'), businessObject);

        if (newSource && newSource.get('outgoing')) {
          newSource.get('outgoing').push(businessObject);
        }
      }

      businessObject.sourceRef = newSource;
    }

    if (businessObject.targetRef !== newTarget) {
      if (inverseSet) {
        Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(businessObject.targetRef && businessObject.targetRef.get('incoming'), businessObject);

        if (newTarget && newTarget.get('incoming')) {
          newTarget.get('incoming').push(businessObject);
        }
      }

      businessObject.targetRef = newTarget;
    }
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataInputAssociation')) {
    // handle obnoxious isMsome sourceRef
    businessObject.get('sourceRef')[0] = newSource;
    visualParent = context.parent || context.newParent || newTarget;
    this.updateSemanticParent(businessObject, newTarget, visualParent);
  } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(businessObject, 'bpmn:DataOutputAssociation')) {
    visualParent = context.parent || context.newParent || newSource;
    this.updateSemanticParent(businessObject, newSource, visualParent); // targetRef = new target

    businessObject.targetRef = newTarget;
  }

  this.updateConnectionWaypoints(connection);
  this.updateDiConnection(businessObject.di, newSource, newTarget);
}; // helpers //////////////////////


BpmnUpdater.prototype._getLabel = function (di) {
  if (!di.label) {
    di.label = this._bpmnFactory.createDiLabel();
  }

  return di.label;
};
/**
 * Make sure the event listener is only called
 * if the touched element is a BPMN element.
 *
 * @param  {Function} fn
 * @return {Function} guarded function
 */


function ifBpmn(fn) {
  return function (event) {
    var context = event.context,
        element = context.shape || context.connection;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:BaseElement')) {
      fn(event);
    }
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/ElementFactory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/ElementFactory.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElementFactory; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var diagram_js_lib_core_ElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/core/ElementFactory */ "diagram-js/lib/core/ElementFactory");
/* harmony import */ var diagram_js_lib_core_ElementFactory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_core_ElementFactory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");






/**
 * A bpmn-aware factory for diagram-js shapes
 */

function ElementFactory(bpmnFactory, moddle, translate) {
  diagram_js_lib_core_ElementFactory__WEBPACK_IMPORTED_MODULE_4___default.a.call(this);
  this._bpmnFactory = bpmnFactory;
  this._moddle = moddle;
  this._translate = translate;
}
inherits__WEBPACK_IMPORTED_MODULE_1___default()(ElementFactory, diagram_js_lib_core_ElementFactory__WEBPACK_IMPORTED_MODULE_4___default.a);
ElementFactory.$inject = ['bpmnFactory', 'moddle', 'translate'];
ElementFactory.prototype.baseCreate = diagram_js_lib_core_ElementFactory__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.create;

ElementFactory.prototype.create = function (elementType, attrs) {
  // no special magic for labels,
  // we assume their businessObjects have already been created
  // and wired via attrs
  if (elementType === 'label') {
    return this.baseCreate(elementType, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      type: 'label'
    }, _util_LabelUtil__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_LABEL_SIZE"], attrs));
  }

  return this.createBpmnElement(elementType, attrs);
};

ElementFactory.prototype.createBpmnElement = function (elementType, attrs) {
  var size,
      translate = this._translate;
  attrs = attrs || {};
  var businessObject = attrs.businessObject;

  if (!businessObject) {
    if (!attrs.type) {
      throw new Error(translate('no shape type specified'));
    }

    businessObject = this._bpmnFactory.create(attrs.type);
  }

  if (!businessObject.di) {
    if (elementType === 'root') {
      businessObject.di = this._bpmnFactory.createDiPlane(businessObject, [], {
        id: businessObject.id + '_di'
      });
    } else if (elementType === 'connection') {
      businessObject.di = this._bpmnFactory.createDiEdge(businessObject, [], {
        id: businessObject.id + '_di'
      });
    } else {
      businessObject.di = this._bpmnFactory.createDiShape(businessObject, {}, {
        id: businessObject.id + '_di'
      });
    }
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(businessObject, 'bpmn:Group')) {
    attrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
      isFrame: true
    }, attrs);
  }

  if (attrs.di) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(businessObject.di, attrs.di);
    delete attrs.di;
  }

  applyAttributes(businessObject, attrs, ['processRef', 'isInterrupting', 'associationDirection', 'isForCompensation']);

  if (attrs.isExpanded) {
    applyAttribute(businessObject.di, attrs, 'isExpanded');
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(businessObject, 'bpmn:ExclusiveGateway')) {
    businessObject.di.isMarkerVisible = true;
  }

  var eventDefinitions, newEventDefinition;

  if (attrs.eventDefinitionType) {
    eventDefinitions = businessObject.get('eventDefinitions') || [];
    newEventDefinition = this._bpmnFactory.create(attrs.eventDefinitionType);

    if (attrs.eventDefinitionType === 'bpmn:ConditionalEventDefinition') {
      newEventDefinition.condition = this._bpmnFactory.create('bpmn:FormalExpression');
    }

    eventDefinitions.push(newEventDefinition);
    newEventDefinition.$parent = businessObject;
    businessObject.eventDefinitions = eventDefinitions;
    delete attrs.eventDefinitionType;
  }

  size = this._getDefaultSize(businessObject);
  attrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    businessObject: businessObject,
    id: businessObject.id
  }, size, attrs);
  return this.baseCreate(elementType, attrs);
};

ElementFactory.prototype._getDefaultSize = function (semantic) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:SubProcess')) {
    if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(semantic)) {
      return {
        width: 350,
        height: 200
      };
    } else {
      return {
        width: 100,
        height: 80
      };
    }
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:Task')) {
    return {
      width: 100,
      height: 80
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:Gateway')) {
    return {
      width: 50,
      height: 50
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:Event')) {
    return {
      width: 36,
      height: 36
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:Participant')) {
    if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(semantic)) {
      return {
        width: 600,
        height: 250
      };
    } else {
      return {
        width: 400,
        height: 60
      };
    }
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:Lane')) {
    return {
      width: 400,
      height: 100
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:DataObjectReference')) {
    return {
      width: 36,
      height: 50
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:DataStoreReference')) {
    return {
      width: 50,
      height: 50
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:TextAnnotation')) {
    return {
      width: 100,
      height: 30
    };
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(semantic, 'bpmn:Group')) {
    return {
      width: 300,
      height: 300
    };
  }

  return {
    width: 100,
    height: 80
  };
};
/**
 * Create participant.
 *
 * @param {boolean|Object} [attrs] attrs
 *
 * @returns {djs.model.Shape}
 */


ElementFactory.prototype.createParticipantShape = function (attrs) {
  if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs)) {
    attrs = {
      isExpanded: attrs
    };
  }

  attrs = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    type: 'bpmn:Participant'
  }, attrs || {}); // participants are expanded by default

  if (attrs.isExpanded !== false) {
    attrs.processRef = this._bpmnFactory.create('bpmn:Process');
  }

  return this.createShape(attrs);
}; // helpers //////////////////////

/**
 * Apply attributes from a map to the given element,
 * remove attribute from the map on application.
 *
 * @param {Base} element
 * @param {Object} attrs (in/out map of attributes)
 * @param {Array<String>} attributeNames name of attributes to apply
 */


function applyAttributes(element, attrs, attributeNames) {
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(attributeNames, function (property) {
    if (attrs[property] !== undefined) {
      applyAttribute(element, attrs, property);
    }
  });
}
/**
 * Apply named property to element and drain it from the attrs
 * collection.
 *
 * @param {Base} element
 * @param {Object} attrs (in/out map of attributes)
 * @param {String} attributeName to apply
 */


function applyAttribute(element, attrs, attributeName) {
  element[attributeName] = attrs[attributeName];
  delete attrs[attributeName];
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/Modeling.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/Modeling.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modeling; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_modeling_Modeling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/modeling/Modeling */ "diagram-js/lib/features/modeling/Modeling");
/* harmony import */ var diagram_js_lib_features_modeling_Modeling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_modeling_Modeling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cmd_UpdatePropertiesHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmd/UpdatePropertiesHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdatePropertiesHandler.js");
/* harmony import */ var _cmd_UpdateCanvasRootHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmd/UpdateCanvasRootHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateCanvasRootHandler.js");
/* harmony import */ var _cmd_AddLaneHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmd/AddLaneHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/AddLaneHandler.js");
/* harmony import */ var _cmd_SplitLaneHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmd/SplitLaneHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/SplitLaneHandler.js");
/* harmony import */ var _cmd_ResizeLaneHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmd/ResizeLaneHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/ResizeLaneHandler.js");
/* harmony import */ var _cmd_UpdateFlowNodeRefsHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmd/UpdateFlowNodeRefsHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateFlowNodeRefsHandler.js");
/* harmony import */ var _cmd_IdClaimHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmd/IdClaimHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/IdClaimHandler.js");
/* harmony import */ var _cmd_SetColorHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmd/SetColorHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/SetColorHandler.js");
/* harmony import */ var _label_editing_cmd_UpdateLabelHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../label-editing/cmd/UpdateLabelHandler */ "./node_modules/bpmn-js/lib/features/label-editing/cmd/UpdateLabelHandler.js");











/**
 * BPMN 2.0 modeling features activator
 *
 * @param {EventBus} eventBus
 * @param {ElementFactory} elementFactory
 * @param {CommandStack} commandStack
 * @param {BpmnRules} bpmnRules
 */

function Modeling(eventBus, elementFactory, commandStack, bpmnRules) {
  diagram_js_lib_features_modeling_Modeling__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus, elementFactory, commandStack);
  this._bpmnRules = bpmnRules;
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(Modeling, diagram_js_lib_features_modeling_Modeling__WEBPACK_IMPORTED_MODULE_1___default.a);
Modeling.$inject = ['eventBus', 'elementFactory', 'commandStack', 'bpmnRules'];

Modeling.prototype.getHandlers = function () {
  var handlers = diagram_js_lib_features_modeling_Modeling__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.getHandlers.call(this);
  handlers['element.updateProperties'] = _cmd_UpdatePropertiesHandler__WEBPACK_IMPORTED_MODULE_2__["default"];
  handlers['canvas.updateRoot'] = _cmd_UpdateCanvasRootHandler__WEBPACK_IMPORTED_MODULE_3__["default"];
  handlers['lane.add'] = _cmd_AddLaneHandler__WEBPACK_IMPORTED_MODULE_4__["default"];
  handlers['lane.resize'] = _cmd_ResizeLaneHandler__WEBPACK_IMPORTED_MODULE_6__["default"];
  handlers['lane.split'] = _cmd_SplitLaneHandler__WEBPACK_IMPORTED_MODULE_5__["default"];
  handlers['lane.updateRefs'] = _cmd_UpdateFlowNodeRefsHandler__WEBPACK_IMPORTED_MODULE_7__["default"];
  handlers['id.updateClaim'] = _cmd_IdClaimHandler__WEBPACK_IMPORTED_MODULE_8__["default"];
  handlers['element.setColor'] = _cmd_SetColorHandler__WEBPACK_IMPORTED_MODULE_9__["default"];
  handlers['element.updateLabel'] = _label_editing_cmd_UpdateLabelHandler__WEBPACK_IMPORTED_MODULE_10__["default"];
  return handlers;
};

Modeling.prototype.updateLabel = function (element, newLabel, newBounds, hints) {
  this._commandStack.execute('element.updateLabel', {
    element: element,
    newLabel: newLabel,
    newBounds: newBounds,
    hints: hints || {}
  });
};

Modeling.prototype.connect = function (source, target, attrs, hints) {
  var bpmnRules = this._bpmnRules;

  if (!attrs) {
    attrs = bpmnRules.canConnect(source, target);
  }

  if (!attrs) {
    return;
  }

  return this.createConnection(source, target, attrs, source.parent, hints);
};

Modeling.prototype.updateProperties = function (element, properties) {
  this._commandStack.execute('element.updateProperties', {
    element: element,
    properties: properties
  });
};

Modeling.prototype.resizeLane = function (laneShape, newBounds, balanced) {
  this._commandStack.execute('lane.resize', {
    shape: laneShape,
    newBounds: newBounds,
    balanced: balanced
  });
};

Modeling.prototype.addLane = function (targetLaneShape, location) {
  var context = {
    shape: targetLaneShape,
    location: location
  };

  this._commandStack.execute('lane.add', context);

  return context.newLane;
};

Modeling.prototype.splitLane = function (targetLane, count) {
  this._commandStack.execute('lane.split', {
    shape: targetLane,
    count: count
  });
};
/**
 * Transform the current diagram into a collaboration.
 *
 * @return {djs.model.Root} the new root element
 */


Modeling.prototype.makeCollaboration = function () {
  var collaborationElement = this._create('root', {
    type: 'bpmn:Collaboration'
  });

  var context = {
    newRoot: collaborationElement
  };

  this._commandStack.execute('canvas.updateRoot', context);

  return collaborationElement;
};

Modeling.prototype.updateLaneRefs = function (flowNodeShapes, laneShapes) {
  this._commandStack.execute('lane.updateRefs', {
    flowNodeShapes: flowNodeShapes,
    laneShapes: laneShapes
  });
};
/**
 * Transform the current diagram into a process.
 *
 * @return {djs.model.Root} the new root element
 */


Modeling.prototype.makeProcess = function () {
  var processElement = this._create('root', {
    type: 'bpmn:Process'
  });

  var context = {
    newRoot: processElement
  };

  this._commandStack.execute('canvas.updateRoot', context);
};

Modeling.prototype.claimId = function (id, moddleElement) {
  this._commandStack.execute('id.updateClaim', {
    id: id,
    element: moddleElement,
    claiming: true
  });
};

Modeling.prototype.unclaimId = function (id, moddleElement) {
  this._commandStack.execute('id.updateClaim', {
    id: id,
    element: moddleElement
  });
};

Modeling.prototype.setColor = function (elements, colors) {
  if (!elements.length) {
    elements = [elements];
  }

  this._commandStack.execute('element.setColor', {
    elements: elements,
    colors: colors
  });
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/AdaptiveLabelPositioningBehavior.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/AdaptiveLabelPositioningBehavior.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdaptiveLabelPositioningBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_util_Math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Math */ "diagram-js/lib/util/Math");
/* harmony import */ var diagram_js_lib_util_Math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Math__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_4__);





var ALIGNMENTS = ['top', 'bottom', 'left', 'right'];
var ELEMENT_LABEL_DISTANCE = 10;
/**
 * A component that makes sure that external labels are added
 * together with respective elements and properly updated (DI wise)
 * during move.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */

function AdaptiveLabelPositioningBehavior(eventBus, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_4___default.a.call(this, eventBus);
  this.postExecuted(['connection.create', 'connection.layout', 'connection.updateWaypoints'], function (event) {
    var context = event.context,
        connection = context.connection,
        source = connection.source,
        target = connection.target,
        hints = context.hints || {};

    if (hints.createElementsBehavior !== false) {
      checkLabelAdjustment(source);
      checkLabelAdjustment(target);
    }
  });
  this.postExecuted(['label.create'], function (event) {
    var context = event.context,
        shape = context.shape,
        hints = context.hints || {};

    if (hints.createElementsBehavior !== false) {
      checkLabelAdjustment(shape.labelTarget);
    }
  });
  this.postExecuted(['elements.create'], function (event) {
    var context = event.context,
        elements = context.elements,
        hints = context.hints || {};

    if (hints.createElementsBehavior !== false) {
      elements.forEach(function (element) {
        checkLabelAdjustment(element);
      });
    }
  });

  function checkLabelAdjustment(element) {
    // skip non-existing labels
    if (!Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["hasExternalLabel"])(element)) {
      return;
    }

    var optimalPosition = getOptimalPosition(element); // no optimal position found

    if (!optimalPosition) {
      return;
    }

    adjustLabelPosition(element, optimalPosition);
  }

  function adjustLabelPosition(element, orientation) {
    var elementMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(element),
        label = element.label,
        labelMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(label); // ignore labels that are being created

    if (!label.parent) {
      return;
    }

    var elementTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["asTRBL"])(element);
    var newLabelMid;

    switch (orientation) {
      case 'top':
        newLabelMid = {
          x: elementMid.x,
          y: elementTrbl.top - ELEMENT_LABEL_DISTANCE - label.height / 2
        };
        break;

      case 'left':
        newLabelMid = {
          x: elementTrbl.left - ELEMENT_LABEL_DISTANCE - label.width / 2,
          y: elementMid.y
        };
        break;

      case 'bottom':
        newLabelMid = {
          x: elementMid.x,
          y: elementTrbl.bottom + ELEMENT_LABEL_DISTANCE + label.height / 2
        };
        break;

      case 'right':
        newLabelMid = {
          x: elementTrbl.right + ELEMENT_LABEL_DISTANCE + label.width / 2,
          y: elementMid.y
        };
        break;
    }

    var delta = Object(diagram_js_lib_util_Math__WEBPACK_IMPORTED_MODULE_2__["substract"])(newLabelMid, labelMid);
    modeling.moveShape(label, delta);
  }
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(AdaptiveLabelPositioningBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_4___default.a);
AdaptiveLabelPositioningBehavior.$inject = ['eventBus', 'modeling']; // helpers //////////////////////

/**
 * Return alignments which are taken by a boundary's host element
 *
 * @param {Shape} element
 *
 * @return {Array<String>}
 */

function getTakenHostAlignments(element) {
  var hostElement = element.host,
      elementMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(element),
      hostOrientation = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getOrientation"])(elementMid, hostElement);
  var freeAlignments; // check whether there is a multi-orientation, e.g. 'top-left'

  if (hostOrientation.indexOf('-') >= 0) {
    freeAlignments = hostOrientation.split('-');
  } else {
    freeAlignments = [hostOrientation];
  }

  var takenAlignments = ALIGNMENTS.filter(function (alignment) {
    return freeAlignments.indexOf(alignment) === -1;
  });
  return takenAlignments;
}
/**
 * Return alignments which are taken by related connections
 *
 * @param {Shape} element
 *
 * @return {Array<String>}
 */


function getTakenConnectionAlignments(element) {
  var elementMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(element);
  var takenAlignments = [].concat(element.incoming.map(function (c) {
    return c.waypoints[c.waypoints.length - 2];
  }), element.outgoing.map(function (c) {
    return c.waypoints[1];
  })).map(function (point) {
    return getApproximateOrientation(elementMid, point);
  });
  return takenAlignments;
}
/**
 * Return the optimal label position around an element
 * or _undefined_, if none was found.
 *
 * @param  {Shape} element
 *
 * @return {String} positioning identifier
 */


function getOptimalPosition(element) {
  var labelMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(element.label);
  var elementMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getMid"])(element);
  var labelOrientation = getApproximateOrientation(elementMid, labelMid);

  if (!isAligned(labelOrientation)) {
    return;
  }

  var takenAlignments = getTakenConnectionAlignments(element);

  if (element.host) {
    var takenHostAlignments = getTakenHostAlignments(element);
    takenAlignments = takenAlignments.concat(takenHostAlignments);
  }

  var freeAlignments = ALIGNMENTS.filter(function (alignment) {
    return takenAlignments.indexOf(alignment) === -1;
  }); // NOTHING TO DO; label already aligned a.O.K.

  if (freeAlignments.indexOf(labelOrientation) !== -1) {
    return;
  }

  return freeAlignments[0];
}

function getApproximateOrientation(p0, p1) {
  return Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["getOrientation"])(p1, p0, 5);
}

function isAligned(orientation) {
  return ALIGNMENTS.indexOf(orientation) !== -1;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/AppendBehavior.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/AppendBehavior.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppendBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);



function AppendBehavior(eventBus, elementFactory, bpmnRules) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a.call(this, eventBus); // assign correct shape position unless already set

  this.preExecute('shape.append', function (context) {
    var source = context.source,
        shape = context.shape;

    if (!context.position) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:TextAnnotation')) {
        context.position = {
          x: source.x + source.width / 2 + 75,
          y: source.y - 50 - shape.height / 2
        };
      } else {
        context.position = {
          x: source.x + source.width + 80 + shape.width / 2,
          y: source.y + source.height / 2
        };
      }
    }
  }, true);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(AppendBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a);
AppendBehavior.$inject = ['eventBus', 'elementFactory', 'bpmnRules'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/AssociationBehavior.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/AssociationBehavior.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssociationBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);




function AssociationBehavior(injector, modeling) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a, this);
  this.postExecute('shape.move', function (context) {
    var newParent = context.newParent,
        shape = context.shape;
    var associations = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(shape.incoming.concat(shape.outgoing), function (connection) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(connection, 'bpmn:Association');
    });
    Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(associations, function (association) {
      modeling.moveConnection(association, {
        x: 0,
        y: 0
      }, newParent);
    });
  }, true);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(AssociationBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a);
AssociationBehavior.$inject = ['injector', 'modeling'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/AttachEventBehavior.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/AttachEventBehavior.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttachEventBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");





var LOW_PRIORITY = 500;
/**
 * Replace intermediate event with boundary event when creating or moving results in attached event.
 */

function AttachEventBehavior(bpmnReplace, injector) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a, this);
  this._bpmnReplace = bpmnReplace;
  var self = this;
  this.postExecuted('elements.create', LOW_PRIORITY, function (context) {
    var elements = context.elements;
    elements = elements.filter(function (shape) {
      var host = shape.host;
      return shouldReplace(shape, host);
    });

    if (elements.length !== 1) {
      return;
    }

    elements.map(function (element) {
      return elements.indexOf(element);
    }).forEach(function (index) {
      var host = elements[index];
      context.elements[index] = self.replaceShape(elements[index], host);
    });
  }, true);
  this.preExecute('elements.move', LOW_PRIORITY, function (context) {
    var shapes = context.shapes,
        host = context.newHost;

    if (shapes.length !== 1) {
      return;
    }

    var shape = shapes[0];

    if (shouldReplace(shape, host)) {
      context.shapes = [self.replaceShape(shape, host)];
    }
  }, true);
}
AttachEventBehavior.$inject = ['bpmnReplace', 'injector'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(AttachEventBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

AttachEventBehavior.prototype.replaceShape = function (shape, host) {
  var eventDefinition = getEventDefinition(shape);
  var boundaryEvent = {
    type: 'bpmn:BoundaryEvent',
    host: host
  };

  if (eventDefinition) {
    boundaryEvent.eventDefinitionType = eventDefinition.$type;
  }

  return this._bpmnReplace.replaceElement(shape, boundaryEvent, {
    layoutConnection: false
  });
}; // helpers //////////


function getEventDefinition(element) {
  var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element),
      eventDefinitions = businessObject.eventDefinitions;
  return eventDefinitions && eventDefinitions[0];
}

function shouldReplace(shape, host) {
  return !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(shape) && Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(shape, ['bpmn:IntermediateThrowEvent', 'bpmn:IntermediateCatchEvent']) && !!host;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/BoundaryEventBehavior.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/BoundaryEventBehavior.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoundaryEventBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);




/**
 * BPMN specific boundary event behavior
 */

function BoundaryEventBehavior(eventBus, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);

  function getBoundaryEvents(element) {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(element.attachers, function (attacher) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(attacher, 'bpmn:BoundaryEvent');
    });
  } // remove after connecting to event-based gateway


  this.postExecute('connection.create', function (event) {
    var source = event.context.source,
        target = event.context.target,
        boundaryEvents = getBoundaryEvents(target);

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(source, 'bpmn:EventBasedGateway') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:ReceiveTask') && boundaryEvents.length > 0) {
      modeling.removeElements(boundaryEvents);
    }
  }); // remove after replacing connected gateway with event-based gateway

  this.postExecute('connection.reconnect', function (event) {
    var oldSource = event.context.oldSource,
        newSource = event.context.newSource;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(oldSource, 'bpmn:Gateway') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(newSource, 'bpmn:EventBasedGateway')) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(newSource.outgoing, function (connection) {
        var target = connection.target,
            attachedboundaryEvents = getBoundaryEvents(target);

        if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:ReceiveTask') && attachedboundaryEvents.length > 0) {
          modeling.removeElements(attachedboundaryEvents);
        }
      });
    }
  });
}
BoundaryEventBehavior.$inject = ['eventBus', 'modeling'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BoundaryEventBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/CreateBehavior.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/CreateBehavior.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");




function CreateBehavior(injector) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a, this);
  this.preExecute('shape.create', 1500, function (event) {
    var context = event.context,
        parent = context.parent,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(parent, 'bpmn:Lane') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:Lane')) {
      context.parent = Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parent, 'bpmn:Participant');
    }
  });
}
CreateBehavior.$inject = ['injector'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(CreateBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/CreateDataObjectBehavior.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/CreateDataObjectBehavior.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateDataObjectBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



/**
 * BPMN specific create data object behavior
 */

function CreateDataObjectBehavior(eventBus, bpmnFactory, moddle) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  this.preExecute('shape.create', function (event) {
    var context = event.context,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:DataObjectReference') && shape.type !== 'label') {
      // create a DataObject every time a DataObjectReference is created
      var dataObject = bpmnFactory.create('bpmn:DataObject'); // set the reference to the DataObject

      shape.businessObject.dataObjectRef = dataObject;
    }
  });
}
CreateDataObjectBehavior.$inject = ['eventBus', 'bpmnFactory', 'moddle'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(CreateDataObjectBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/CreateParticipantBehavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/CreateParticipantBehavior.js ***!
  \******************************************************************************************/
/*! exports provided: PARTICIPANT_BORDER_WIDTH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANT_BORDER_WIDTH", function() { return PARTICIPANT_BORDER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateParticipantBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "diagram-js/lib/util/Elements");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_6__);







var HORIZONTAL_PARTICIPANT_PADDING = 20,
    VERTICAL_PARTICIPANT_PADDING = 20;
var PARTICIPANT_BORDER_WIDTH = 30;
var HIGH_PRIORITY = 2000;
/**
 * BPMN-specific behavior for creating participants.
 */

function CreateParticipantBehavior(canvas, eventBus, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus); // fit participant

  eventBus.on(['create.start', 'shape.move.start'], HIGH_PRIORITY, function (event) {
    var context = event.context,
        shape = context.shape,
        rootElement = canvas.getRootElement();

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Participant') || !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(rootElement, 'bpmn:Process') || !rootElement.children.length) {
      return;
    } // ignore connections, groups and labels


    var children = rootElement.children.filter(function (element) {
      return !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Group') && !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["isLabel"])(element) && !isConnection(element);
    }); // ensure for available children to calculate bounds

    if (!children.length) {
      return;
    }

    var childrenBBox = Object(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__["getBBox"])(children);
    var participantBounds = getParticipantBounds(shape, childrenBBox); // assign width and height

    Object(min_dash__WEBPACK_IMPORTED_MODULE_5__["assign"])(shape, participantBounds); // assign create constraints

    context.createConstraints = getParticipantCreateConstraints(shape, childrenBBox);
  }); // force hovering process when creating first participant

  eventBus.on('create.start', HIGH_PRIORITY, function (event) {
    var context = event.context,
        shape = context.shape,
        rootElement = canvas.getRootElement(),
        rootElementGfx = canvas.getGraphics(rootElement);

    function ensureHoveringProcess(event) {
      event.element = rootElement;
      event.gfx = rootElementGfx;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Participant') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(rootElement, 'bpmn:Process')) {
      eventBus.on('element.hover', HIGH_PRIORITY, ensureHoveringProcess);
      eventBus.once('create.cleanup', function () {
        eventBus.off('element.hover', ensureHoveringProcess);
      });
    }
  });

  function ensureCollaboration(context) {
    var parent = context.parent,
        collaboration;
    var rootElement = canvas.getRootElement();

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(rootElement, 'bpmn:Collaboration')) {
      collaboration = rootElement;
    } else {
      // update root element by making collaboration
      collaboration = modeling.makeCollaboration(); // re-use process when creating first participant

      context.process = parent;
    }

    context.parent = collaboration;
  } // turn process into collaboration before adding participant


  this.preExecute('shape.create', function (context) {
    var parent = context.parent,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Participant') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(parent, 'bpmn:Process')) {
      ensureCollaboration(context);
    }
  }, true);
  this.execute('shape.create', function (context) {
    var process = context.process,
        shape = context.shape;

    if (process) {
      context.oldProcessRef = shape.businessObject.processRef; // re-use process when creating first participant

      shape.businessObject.processRef = process.businessObject;
    }
  }, true);
  this.revert('shape.create', function (context) {
    var process = context.process,
        shape = context.shape;

    if (process) {
      // re-use process when creating first participant
      shape.businessObject.processRef = context.oldProcessRef;
    }
  }, true);
  this.postExecute('shape.create', function (context) {
    var process = context.process,
        shape = context.shape;

    if (process) {
      // move children from process to participant
      var processChildren = process.children.slice();
      modeling.moveElements(processChildren, {
        x: 0,
        y: 0
      }, shape);
    }
  }, true); // turn process into collaboration when creating participants

  this.preExecute('elements.create', HIGH_PRIORITY, function (context) {
    var elements = context.elements,
        parent = context.parent,
        participant;
    var hasParticipants = findParticipant(elements);

    if (hasParticipants && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(parent, 'bpmn:Process')) {
      ensureCollaboration(context);
      participant = findParticipant(elements);
      context.oldProcessRef = participant.businessObject.processRef; // re-use process when creating first participant

      participant.businessObject.processRef = parent.businessObject;
    }
  }, true);
  this.revert('elements.create', function (context) {
    var elements = context.elements,
        process = context.process,
        participant;

    if (process) {
      participant = findParticipant(elements); // re-use process when creating first participant

      participant.businessObject.processRef = context.oldProcessRef;
    }
  }, true);
  this.postExecute('elements.create', function (context) {
    var elements = context.elements,
        process = context.process,
        participant;

    if (process) {
      participant = findParticipant(elements); // move children from process to first participant

      var processChildren = process.children.slice();
      modeling.moveElements(processChildren, {
        x: 0,
        y: 0
      }, participant);
    }
  }, true);
}
CreateParticipantBehavior.$inject = ['canvas', 'eventBus', 'modeling'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(CreateParticipantBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a); // helpers //////////

function getParticipantBounds(shape, childrenBBox) {
  childrenBBox = {
    width: childrenBBox.width + HORIZONTAL_PARTICIPANT_PADDING * 2 + PARTICIPANT_BORDER_WIDTH,
    height: childrenBBox.height + VERTICAL_PARTICIPANT_PADDING * 2
  };
  var width = Math.max(shape.width, childrenBBox.width),
      height = Math.max(shape.height, childrenBBox.height);
  return {
    x: -width / 2,
    y: -height / 2,
    width: width,
    height: height
  };
}

function getParticipantCreateConstraints(shape, childrenBBox) {
  childrenBBox = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_6__["asTRBL"])(childrenBBox);
  return {
    bottom: childrenBBox.top + shape.height / 2 - VERTICAL_PARTICIPANT_PADDING,
    left: childrenBBox.right - shape.width / 2 + HORIZONTAL_PARTICIPANT_PADDING,
    top: childrenBBox.bottom - shape.height / 2 + VERTICAL_PARTICIPANT_PADDING,
    right: childrenBBox.left + shape.width / 2 - HORIZONTAL_PARTICIPANT_PADDING - PARTICIPANT_BORDER_WIDTH
  };
}

function isConnection(element) {
  return !!element.waypoints;
}

function findParticipant(elements) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_5__["find"])(elements, function (element) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Participant');
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/DataInputAssociationBehavior.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/DataInputAssociationBehavior.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataInputAssociationBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");





var TARGET_REF_PLACEHOLDER_NAME = '__targetRef_placeholder';
/**
 * This behavior makes sure we always set a fake
 * DataInputAssociation#targetRef as demanded by the BPMN 2.0
 * XSD schema.
 *
 * The reference is set to a bpmn:Property{ name: '__targetRef_placeholder' }
 * which is created on the fly and cleaned up afterwards if not needed
 * anymore.
 *
 * @param {EventBus} eventBus
 * @param {BpmnFactory} bpmnFactory
 */

function DataInputAssociationBehavior(eventBus, bpmnFactory) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  this.executed(['connection.create', 'connection.delete', 'connection.move', 'connection.reconnect'], ifDataInputAssociation(fixTargetRef));
  this.reverted(['connection.create', 'connection.delete', 'connection.move', 'connection.reconnect'], ifDataInputAssociation(fixTargetRef));

  function usesTargetRef(element, targetRef, removedConnection) {
    var inputAssociations = element.get('dataInputAssociations');
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["find"])(inputAssociations, function (association) {
      return association !== removedConnection && association.targetRef === targetRef;
    });
  }

  function getTargetRef(element, create) {
    var properties = element.get('properties');
    var targetRefProp = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["find"])(properties, function (p) {
      return p.name === TARGET_REF_PLACEHOLDER_NAME;
    });

    if (!targetRefProp && create) {
      targetRefProp = bpmnFactory.create('bpmn:Property', {
        name: TARGET_REF_PLACEHOLDER_NAME
      });
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(properties, targetRefProp);
    }

    return targetRefProp;
  }

  function cleanupTargetRef(element, connection) {
    var targetRefProp = getTargetRef(element);

    if (!targetRefProp) {
      return;
    }

    if (!usesTargetRef(element, targetRefProp, connection)) {
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(element.get('properties'), targetRefProp);
    }
  }
  /**
   * Make sure targetRef is set to a valid property or
   * `null` if the connection is detached.
   *
   * @param {Event} event
   */


  function fixTargetRef(event) {
    var context = event.context,
        connection = context.connection,
        connectionBo = connection.businessObject,
        target = connection.target,
        targetBo = target && target.businessObject,
        newTarget = context.newTarget,
        newTargetBo = newTarget && newTarget.businessObject,
        oldTarget = context.oldTarget || context.target,
        oldTargetBo = oldTarget && oldTarget.businessObject;
    var dataAssociation = connection.businessObject,
        targetRefProp;

    if (oldTargetBo && oldTargetBo !== targetBo) {
      cleanupTargetRef(oldTargetBo, connectionBo);
    }

    if (newTargetBo && newTargetBo !== targetBo) {
      cleanupTargetRef(newTargetBo, connectionBo);
    }

    if (targetBo) {
      targetRefProp = getTargetRef(targetBo, true);
      dataAssociation.targetRef = targetRefProp;
    } else {
      dataAssociation.targetRef = null;
    }
  }
}
DataInputAssociationBehavior.$inject = ['eventBus', 'bpmnFactory'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(DataInputAssociationBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);
/**
 * Only call the given function when the event
 * touches a bpmn:DataInputAssociation.
 *
 * @param {Function} fn
 * @return {Function}
 */

function ifDataInputAssociation(fn) {
  return function (event) {
    var context = event.context,
        connection = context.connection;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(connection, 'bpmn:DataInputAssociation')) {
      return fn(event);
    }
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/DataStoreBehavior.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/DataStoreBehavior.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataStoreBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _cmd_UpdateSemanticParentHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cmd/UpdateSemanticParentHandler */ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateSemanticParentHandler.js");





/**
 * BPMN specific data store behavior
 */

function DataStoreBehavior(canvas, commandStack, elementRegistry, eventBus) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  commandStack.registerHandler('dataStore.updateContainment', _cmd_UpdateSemanticParentHandler__WEBPACK_IMPORTED_MODULE_4__["default"]);

  function getFirstParticipant() {
    return elementRegistry.filter(function (element) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Participant');
    })[0];
  }

  function getDataStores(element) {
    return element.children.filter(function (child) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(child, 'bpmn:DataStoreReference') && !child.labelTarget;
    });
  }

  function updateDataStoreParent(dataStore, newDataStoreParent) {
    var dataStoreBo = dataStore.businessObject || dataStore;
    newDataStoreParent = newDataStoreParent || getFirstParticipant();

    if (newDataStoreParent) {
      var newDataStoreParentBo = newDataStoreParent.businessObject || newDataStoreParent;
      commandStack.execute('dataStore.updateContainment', {
        dataStoreBo: dataStoreBo,
        newSemanticParent: newDataStoreParentBo.processRef || newDataStoreParentBo,
        newDiParent: newDataStoreParentBo.di
      });
    }
  } // disable auto-resize for data stores


  this.preExecute('shape.create', function (event) {
    var context = event.context,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:DataStoreReference') && shape.type !== 'label') {
      if (!context.hints) {
        context.hints = {};
      } // prevent auto resizing


      context.hints.autoResize = false;
    }
  }); // disable auto-resize for data stores

  this.preExecute('elements.move', function (event) {
    var context = event.context,
        shapes = context.shapes;
    var dataStoreReferences = shapes.filter(function (shape) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:DataStoreReference');
    });

    if (dataStoreReferences.length) {
      if (!context.hints) {
        context.hints = {};
      } // prevent auto resizing for data store references


      context.hints.autoResize = shapes.filter(function (shape) {
        return !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:DataStoreReference');
      });
    }
  }); // update parent on data store created

  this.postExecute('shape.create', function (event) {
    var context = event.context,
        shape = context.shape,
        parent = shape.parent;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:DataStoreReference') && shape.type !== 'label' && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(parent, 'bpmn:Collaboration')) {
      updateDataStoreParent(shape);
    }
  }); // update parent on data store moved

  this.postExecute('shape.move', function (event) {
    var context = event.context,
        shape = context.shape,
        oldParent = context.oldParent,
        parent = shape.parent;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(oldParent, 'bpmn:Collaboration')) {
      // do nothing if not necessary
      return;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:DataStoreReference') && shape.type !== 'label' && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(parent, 'bpmn:Collaboration')) {
      var participant = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(oldParent, 'bpmn:Participant') ? oldParent : getAncestor(oldParent, 'bpmn:Participant');
      updateDataStoreParent(shape, participant);
    }
  }); // update data store parents on participant or subprocess deleted

  this.postExecute('shape.delete', function (event) {
    var context = event.context,
        shape = context.shape,
        rootElement = canvas.getRootElement();

    if (Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(shape, ['bpmn:Participant', 'bpmn:SubProcess']) && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(rootElement, 'bpmn:Collaboration')) {
      getDataStores(rootElement).filter(function (dataStore) {
        return isDescendant(dataStore, shape);
      }).forEach(function (dataStore) {
        updateDataStoreParent(dataStore);
      });
    }
  }); // update data store parents on collaboration -> process

  this.postExecute('canvas.updateRoot', function (event) {
    var context = event.context,
        oldRoot = context.oldRoot,
        newRoot = context.newRoot;
    var dataStores = getDataStores(oldRoot);
    dataStores.forEach(function (dataStore) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(newRoot, 'bpmn:Process')) {
        updateDataStoreParent(dataStore, newRoot);
      }
    });
  });
}
DataStoreBehavior.$inject = ['canvas', 'commandStack', 'elementRegistry', 'eventBus'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(DataStoreBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a); // helpers //////////

function isDescendant(descendant, ancestor) {
  var descendantBo = descendant.businessObject || descendant,
      ancestorBo = ancestor.businessObject || ancestor;

  while (descendantBo.$parent) {
    if (descendantBo.$parent === ancestorBo.processRef || ancestorBo) {
      return true;
    }

    descendantBo = descendantBo.$parent;
  }

  return false;
}

function getAncestor(element, type) {
  while (element.parent) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element.parent, type)) {
      return element.parent;
    }

    element = element.parent;
  }
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/DeleteLaneBehavior.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/DeleteLaneBehavior.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteLaneBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_LaneUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "diagram-js/lib/util/Elements");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__);





var LOW_PRIORITY = 500;
/**
 * BPMN specific delete lane behavior
 */

function DeleteLaneBehavior(eventBus, modeling, spaceTool) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);

  function compensateLaneDelete(shape, oldParent) {
    var siblings = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_3__["getChildLanes"])(oldParent);
    var topAffected = [];
    var bottomAffected = [];
    Object(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_4__["eachElement"])(siblings, function (element) {
      if (element.y > shape.y) {
        bottomAffected.push(element);
      } else {
        topAffected.push(element);
      }

      return element.children;
    });

    if (!siblings.length) {
      return;
    }

    var offset;

    if (bottomAffected.length && topAffected.length) {
      offset = shape.height / 2;
    } else {
      offset = shape.height;
    }

    var topAdjustments, bottomAdjustments;

    if (topAffected.length) {
      topAdjustments = spaceTool.calculateAdjustments(topAffected, 'y', offset, shape.y - 10);
      spaceTool.makeSpace(topAdjustments.movingShapes, topAdjustments.resizingShapes, {
        x: 0,
        y: offset
      }, 's');
    }

    if (bottomAffected.length) {
      bottomAdjustments = spaceTool.calculateAdjustments(bottomAffected, 'y', -offset, shape.y + shape.height + 10);
      spaceTool.makeSpace(bottomAdjustments.movingShapes, bottomAdjustments.resizingShapes, {
        x: 0,
        y: -offset
      }, 'n');
    }
  }
  /**
   * Adjust sizes of other lanes after lane deletion
   */


  this.postExecuted('shape.delete', LOW_PRIORITY, function (event) {
    var context = event.context,
        hints = context.hints,
        shape = context.shape,
        oldParent = context.oldParent; // only compensate lane deletes

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Lane')) {
      return;
    } // compensate root deletes only


    if (hints && hints.nested) {
      return;
    }

    compensateLaneDelete(shape, oldParent);
  });
}
DeleteLaneBehavior.$inject = ['eventBus', 'modeling', 'spaceTool'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(DeleteLaneBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/DetachEventBehavior.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/DetachEventBehavior.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetachEventBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");




var LOW_PRIORITY = 500;
/**
 * Replace boundary event with intermediate event when creating or moving results in detached event.
 */

function DetachEventBehavior(bpmnReplace, injector) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a, this);
  this._bpmnReplace = bpmnReplace;
  var self = this;
  this.postExecuted('elements.create', LOW_PRIORITY, function (context) {
    var elements = context.elements;
    elements.filter(function (shape) {
      var host = shape.host;
      return shouldReplace(shape, host);
    }).map(function (shape) {
      return elements.indexOf(shape);
    }).forEach(function (index) {
      context.elements[index] = self.replaceShape(elements[index]);
    });
  }, true);
  this.preExecute('elements.move', LOW_PRIORITY, function (context) {
    var shapes = context.shapes,
        newHost = context.newHost;
    shapes.forEach(function (shape, index) {
      var host = shape.host;

      if (shouldReplace(shape, includes(shapes, host) ? host : newHost)) {
        shapes[index] = self.replaceShape(shape);
      }
    });
  }, true);
}
DetachEventBehavior.$inject = ['bpmnReplace', 'injector'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(DetachEventBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

DetachEventBehavior.prototype.replaceShape = function (shape) {
  var eventDefinition = getEventDefinition(shape),
      intermediateEvent;

  if (eventDefinition) {
    intermediateEvent = {
      type: 'bpmn:IntermediateCatchEvent',
      eventDefinitionType: eventDefinition.$type
    };
  } else {
    intermediateEvent = {
      type: 'bpmn:IntermediateThrowEvent'
    };
  }

  return this._bpmnReplace.replaceElement(shape, intermediateEvent, {
    layoutConnection: false
  });
}; // helpers //////////


function getEventDefinition(element) {
  var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element),
      eventDefinitions = businessObject.eventDefinitions;
  return eventDefinitions && eventDefinitions[0];
}

function shouldReplace(shape, host) {
  return !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["isLabel"])(shape) && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:BoundaryEvent') && !host;
}

function includes(array, item) {
  return array.indexOf(item) !== -1;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/DropOnFlowBehavior.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/DropOnFlowBehavior.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropOnFlowBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_util_LineIntersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/util/LineIntersection */ "diagram-js/lib/util/LineIntersection");
/* harmony import */ var diagram_js_lib_util_LineIntersection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_LineIntersection__WEBPACK_IMPORTED_MODULE_4__);





function DropOnFlowBehavior(eventBus, bpmnRules, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_3___default.a.call(this, eventBus);
  /**
   * Reconnect start / end of a connection after
   * dropping an element on a flow.
   */

  function insertShape(shape, targetFlow, positionOrBounds) {
    var waypoints = targetFlow.waypoints,
        waypointsBefore,
        waypointsAfter,
        dockingPoint,
        source,
        target,
        incomingConnection,
        outgoingConnection,
        oldOutgoing = shape.outgoing.slice(),
        oldIncoming = shape.incoming.slice();
    var mid;

    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(positionOrBounds.width)) {
      mid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getMid"])(positionOrBounds);
    } else {
      mid = positionOrBounds;
    }

    var intersection = Object(diagram_js_lib_util_LineIntersection__WEBPACK_IMPORTED_MODULE_4__["getApproxIntersection"])(waypoints, mid);

    if (intersection) {
      waypointsBefore = waypoints.slice(0, intersection.index);
      waypointsAfter = waypoints.slice(intersection.index + (intersection.bendpoint ? 1 : 0)); // due to inaccuracy intersection might have been found

      if (!waypointsBefore.length || !waypointsAfter.length) {
        return;
      }

      dockingPoint = intersection.bendpoint ? waypoints[intersection.index] : mid; // if last waypointBefore is inside shape's bounds, ignore docking point

      if (!isPointInsideBBox(shape, waypointsBefore[waypointsBefore.length - 1])) {
        waypointsBefore.push(copy(dockingPoint));
      } // if first waypointAfter is inside shape's bounds, ignore docking point


      if (!isPointInsideBBox(shape, waypointsAfter[0])) {
        waypointsAfter.unshift(copy(dockingPoint));
      }
    }

    source = targetFlow.source;
    target = targetFlow.target;

    if (bpmnRules.canConnect(source, shape, targetFlow)) {
      // reconnect source -> inserted shape
      modeling.reconnectEnd(targetFlow, shape, waypointsBefore || mid);
      incomingConnection = targetFlow;
    }

    if (bpmnRules.canConnect(shape, target, targetFlow)) {
      if (!incomingConnection) {
        // reconnect inserted shape -> end
        modeling.reconnectStart(targetFlow, shape, waypointsAfter || mid);
        outgoingConnection = targetFlow;
      } else {
        outgoingConnection = modeling.connect(shape, target, {
          type: targetFlow.type,
          waypoints: waypointsAfter
        });
      }
    }

    var duplicateConnections = [].concat(incomingConnection && Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["filter"])(oldIncoming, function (connection) {
      return connection.source === incomingConnection.source;
    }) || [], outgoingConnection && Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["filter"])(oldOutgoing, function (connection) {
      return connection.target === outgoingConnection.target;
    }) || []);

    if (duplicateConnections.length) {
      modeling.removeElements(duplicateConnections);
    }
  }

  this.preExecute('elements.move', function (context) {
    var newParent = context.newParent,
        shapes = context.shapes,
        delta = context.delta,
        shape = shapes[0];

    if (!shape || !newParent) {
      return;
    } // if the new parent is a connection,
    // change it to the new parent's parent


    if (newParent && newParent.waypoints) {
      context.newParent = newParent = newParent.parent;
    }

    var shapeMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getMid"])(shape);
    var newShapeMid = {
      x: shapeMid.x + delta.x,
      y: shapeMid.y + delta.y
    }; // find a connection which intersects with the
    // element's mid point

    var connection = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["find"])(newParent.children, function (element) {
      var canInsert = bpmnRules.canInsert(shapes, element);
      return canInsert && Object(diagram_js_lib_util_LineIntersection__WEBPACK_IMPORTED_MODULE_4__["getApproxIntersection"])(element.waypoints, newShapeMid);
    });

    if (connection) {
      context.targetFlow = connection;
      context.position = newShapeMid;
    }
  }, true);
  this.postExecuted('elements.move', function (context) {
    var shapes = context.shapes,
        targetFlow = context.targetFlow,
        position = context.position;

    if (targetFlow) {
      insertShape(shapes[0], targetFlow, position);
    }
  }, true);
  this.preExecute('shape.create', function (context) {
    var parent = context.parent,
        shape = context.shape;

    if (bpmnRules.canInsert(shape, parent)) {
      context.targetFlow = parent;
      context.parent = parent.parent;
    }
  }, true);
  this.postExecuted('shape.create', function (context) {
    var shape = context.shape,
        targetFlow = context.targetFlow,
        positionOrBounds = context.position;

    if (targetFlow) {
      insertShape(shape, targetFlow, positionOrBounds);
    }
  }, true);
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(DropOnFlowBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_3___default.a);
DropOnFlowBehavior.$inject = ['eventBus', 'bpmnRules', 'modeling']; // helpers /////////////////////

function isPointInsideBBox(bbox, point) {
  var x = point.x,
      y = point.y;
  return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
}

function copy(obj) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, obj);
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/EventBasedGatewayBehavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/EventBasedGatewayBehavior.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventBasedGatewayBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



function EventBasedGatewayBehavior(eventBus, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  /**
   * Remove existing sequence flows of event-based target before connecting
   * from event-based gateway.
   */

  this.preExecuted('connection.create', function (event) {
    var context = event.context,
        source = context.source,
        target = context.target,
        existingIncomingConnections = target.incoming.slice();

    if (context.hints && context.hints.createElementsBehavior === false) {
      return;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(source, 'bpmn:EventBasedGateway') && target.incoming.length) {
      existingIncomingConnections.filter(isSequenceFlow).forEach(function (sequenceFlow) {
        modeling.removeConnection(sequenceFlow);
      });
    }
  });
  /**
   *  After replacing shape with event-based gateway, remove incoming sequence
   *  flows of event-based targets which do not belong to event-based gateway
   *  source.
   */

  this.preExecuted('shape.replace', function (event) {
    var newShape = event.context.newShape,
        newShapeTargets,
        newShapeTargetsIncomingSequenceFlows;

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(newShape, 'bpmn:EventBasedGateway')) {
      return;
    }

    newShapeTargets = newShape.outgoing.filter(isSequenceFlow).map(function (sequenceFlow) {
      return sequenceFlow.target;
    });
    newShapeTargetsIncomingSequenceFlows = newShapeTargets.reduce(function (sequenceFlows, target) {
      var incomingSequenceFlows = target.incoming.filter(isSequenceFlow);
      return sequenceFlows.concat(incomingSequenceFlows);
    }, []);
    newShapeTargetsIncomingSequenceFlows.forEach(function (sequenceFlow) {
      if (sequenceFlow.source !== newShape) {
        modeling.removeConnection(sequenceFlow);
      }
    });
  });
}
EventBasedGatewayBehavior.$inject = ['eventBus', 'modeling'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(EventBasedGatewayBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a); // helpers //////////////////////

function isSequenceFlow(connection) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(connection, 'bpmn:SequenceFlow');
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/FixHoverBehavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/FixHoverBehavior.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FixHoverBehavior; });
/* harmony import */ var _util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");



var HIGH_PRIORITY = 1500;
var HIGHEST_PRIORITY = 2000;
/**
 * Correct hover targets in certain situations to improve diagram interaction.
 *
 * @param {ElementRegistry} elementRegistry
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */

function FixHoverBehavior(elementRegistry, eventBus, canvas) {
  eventBus.on(['create.hover', 'create.move', 'create.end', 'shape.move.hover', 'shape.move.move', 'shape.move.end'], HIGH_PRIORITY, function (event) {
    var context = event.context,
        shape = context.shape || event.shape,
        hover = event.hover; // ensure elements are not dropped onto a bpmn:Lane but onto
    // the underlying bpmn:Participant

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(hover, 'bpmn:Lane') && !Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__["isAny"])(shape, ['bpmn:Lane', 'bpmn:Participant'])) {
      event.hover = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(hover);
      event.hoverGfx = elementRegistry.getGraphics(event.hover);
    }

    var rootElement = canvas.getRootElement(); // ensure bpmn:Group and label elements are dropped
    // always onto the root

    if (hover !== rootElement && (shape.labelTarget || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:Group'))) {
      event.hover = rootElement;
      event.hoverGfx = elementRegistry.getGraphics(event.hover);
    }
  });
  eventBus.on(['connect.hover', 'connect.out', 'connect.end', 'connect.cleanup', 'global-connect.hover', 'global-connect.out', 'global-connect.end', 'global-connect.cleanup'], HIGH_PRIORITY, function (event) {
    var hover = event.hover; // ensure connections start/end on bpmn:Participant,
    // not the underlying bpmn:Lane

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(hover, 'bpmn:Lane')) {
      event.hover = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(hover) || hover;
      event.hoverGfx = elementRegistry.getGraphics(event.hover);
    }
  });
  eventBus.on(['bendpoint.move.hover'], HIGH_PRIORITY, function (event) {
    var context = event.context,
        hover = event.hover,
        type = context.type; // ensure reconnect start/end on bpmn:Participant,
    // not the underlying bpmn:Lane

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(hover, 'bpmn:Lane') && /reconnect/.test(type)) {
      event.hover = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(hover) || hover;
      event.hoverGfx = elementRegistry.getGraphics(event.hover);
    }
  });
  eventBus.on(['connect.start'], HIGH_PRIORITY, function (event) {
    var context = event.context,
        start = context.start; // ensure connect start on bpmn:Participant,
    // not the underlying bpmn:Lane

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(start, 'bpmn:Lane')) {
      context.start = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(start) || start;
    }
  }); // allow movement of participants from lanes

  eventBus.on('shape.move.start', HIGHEST_PRIORITY, function (event) {
    var shape = event.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:Lane')) {
      event.shape = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(shape) || shape;
    }
  });
}
FixHoverBehavior.$inject = ['elementRegistry', 'eventBus', 'canvas'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/GroupBehavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/GroupBehavior.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_CategoryUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/CategoryUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/CategoryUtil.js");





var HIGH_PRIORITY = 2000;
/**
 * BPMN specific Group behavior
 */

function GroupBehavior(bpmnFactory, canvas, elementRegistry, eventBus, injector, moddleCopy) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a, this);
  /**
   * Gets process definitions
   *
   * @return {ModdleElement} definitions
   */

  function getDefinitions() {
    var rootElement = canvas.getRootElement(),
        businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(rootElement);
    return businessObject.$parent;
  }
  /**
   * Removes a referenced category value for a given group shape
   *
   * @param {djs.model.Shape} shape
   */


  function removeReferencedCategoryValue(shape) {
    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(shape),
        categoryValue = businessObject.categoryValueRef;

    if (!categoryValue) {
      return;
    }

    var category = categoryValue.$parent;

    if (!categoryValue) {
      return;
    }

    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(category.categoryValue, categoryValue); // cleanup category if it is empty

    if (category && !category.categoryValue.length) {
      removeCategory(category);
    }
  }
  /**
   * Removes a given category from the definitions
   *
   * @param {ModdleElement} category
   */


  function removeCategory(category) {
    var definitions = getDefinitions();
    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(definitions.get('rootElements'), category);
  }
  /**
   * Returns all group element in the current registry
   *
   * @return {Array<djs.model.shape>} a list of group shapes
   */


  function getGroupElements() {
    return elementRegistry.filter(function (e) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(e, 'bpmn:Group');
    });
  }
  /**
   * Returns true if given categoryValue is referenced in one of the given elements
   *
   * @param {Array<djs.model.shape>} elements
   * @param {ModdleElement} categoryValue
   * @return {Boolean}
   */


  function isReferenced(elements, categoryValue) {
    return elements.some(function (e) {
      var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(e);
      return businessObject.categoryValueRef && businessObject.categoryValueRef === categoryValue;
    });
  }
  /**
   * remove referenced category + value when group was deleted
   */


  this.executed('shape.delete', function (event) {
    var context = event.context,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(shape, 'bpmn:Group')) {
      var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(shape),
          categoryValueRef = businessObject.categoryValueRef,
          groupElements = getGroupElements();

      if (!isReferenced(groupElements, categoryValueRef)) {
        removeReferencedCategoryValue(shape);
      }
    }
  });
  /**
   * re-attach removed category
   */

  this.reverted('shape.delete', function (event) {
    var context = event.context,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(shape, 'bpmn:Group')) {
      var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(shape),
          categoryValueRef = businessObject.categoryValueRef,
          definitions = getDefinitions(),
          category = categoryValueRef ? categoryValueRef.$parent : null;
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(category.get('categoryValue'), categoryValueRef);
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(definitions.get('rootElements'), category);
    }
  });
  /**
   * create new category + value when group was created
   */

  this.execute('shape.create', function (event) {
    var context = event.context,
        shape = context.shape,
        businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(shape);

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(businessObject, 'bpmn:Group') && !businessObject.categoryValueRef) {
      var definitions = getDefinitions(),
          categoryValue = Object(_util_CategoryUtil__WEBPACK_IMPORTED_MODULE_4__["createCategoryValue"])(definitions, bpmnFactory); // link the reference to the Group

      businessObject.categoryValueRef = categoryValue;
    }
  });
  this.revert('shape.create', function (event) {
    var context = event.context,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(shape, 'bpmn:Group')) {
      removeReferencedCategoryValue(shape);
      delete Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["getBusinessObject"])(shape).categoryValueRef;
    }
  }); // copy bpmn:CategoryValue when copying element

  eventBus.on('moddleCopy.canCopyProperty', HIGH_PRIORITY, function (context) {
    var property = context.property,
        categoryValue;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(property, 'bpmn:CategoryValue')) {
      categoryValue = Object(_util_CategoryUtil__WEBPACK_IMPORTED_MODULE_4__["createCategoryValue"])(getDefinitions(), bpmnFactory); // return copy of category

      return moddleCopy.copyElement(property, categoryValue);
    }
  });
}
GroupBehavior.$inject = ['bpmnFactory', 'canvas', 'elementRegistry', 'eventBus', 'injector', 'moddleCopy'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(GroupBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ImportDockingFix.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ImportDockingFix.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImportDockingFix; });
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_LineIntersect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/LineIntersect */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineIntersect.js");


/**
 * Fix broken dockings after DI imports.
 *
 * @param {EventBus} eventBus
 */

function ImportDockingFix(eventBus) {
  function adjustDocking(startPoint, nextPoint, elementMid) {
    var elementTop = {
      x: elementMid.x,
      y: elementMid.y - 50
    };
    var elementLeft = {
      x: elementMid.x - 50,
      y: elementMid.y
    };
    var verticalIntersect = Object(_util_LineIntersect__WEBPACK_IMPORTED_MODULE_1__["default"])(startPoint, nextPoint, elementMid, elementTop),
        horizontalIntersect = Object(_util_LineIntersect__WEBPACK_IMPORTED_MODULE_1__["default"])(startPoint, nextPoint, elementMid, elementLeft); // original is horizontal or vertical center cross intersection

    var centerIntersect;

    if (verticalIntersect && horizontalIntersect) {
      if (getDistance(verticalIntersect, elementMid) > getDistance(horizontalIntersect, elementMid)) {
        centerIntersect = horizontalIntersect;
      } else {
        centerIntersect = verticalIntersect;
      }
    } else {
      centerIntersect = verticalIntersect || horizontalIntersect;
    }

    startPoint.original = centerIntersect;
  }

  function fixDockings(connection) {
    var waypoints = connection.waypoints;
    adjustDocking(waypoints[0], waypoints[1], Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__["getMid"])(connection.source));
    adjustDocking(waypoints[waypoints.length - 1], waypoints[waypoints.length - 2], Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__["getMid"])(connection.target));
  }

  eventBus.on('bpmnElement.added', function (e) {
    var element = e.element;

    if (element.waypoints) {
      fixDockings(element);
    }
  });
}
ImportDockingFix.$inject = ['eventBus']; // helpers //////////////////////

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/IsHorizontalFix.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/IsHorizontalFix.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IsHorizontalFix; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");




/**
 * A component that makes sure that each created or updated
 * Pool and Lane is assigned an isHorizontal property set to true.
 *
 * @param {EventBus} eventBus
 */

function IsHorizontalFix(eventBus) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  var elementTypesToUpdate = ['bpmn:Participant', 'bpmn:Lane'];
  this.executed(['shape.move', 'shape.create', 'shape.resize'], function (event) {
    var bo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(event.context.shape);

    if (Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(bo, elementTypesToUpdate) && !bo.di.get('isHorizontal')) {
      // set attribute directly to avoid modeling#updateProperty side effects
      bo.di.set('isHorizontal', true);
    }
  });
}
IsHorizontalFix.$inject = ['eventBus'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(IsHorizontalFix, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/LabelBehavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/LabelBehavior.js ***!
  \******************************************************************************/
/*! exports provided: default, getReferencePointDelta, getReferencePoint, asEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferencePointDelta", function() { return getReferencePointDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferencePoint", function() { return getReferencePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asEdges", function() { return asEdges; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var _label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../label-editing/LabelUtil */ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js");
/* harmony import */ var _util_LabelLayoutUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/LabelLayoutUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LabelLayoutUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var diagram_js_lib_util_AttachUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! diagram-js/lib/util/AttachUtil */ "diagram-js/lib/util/AttachUtil");
/* harmony import */ var diagram_js_lib_util_AttachUtil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_AttachUtil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var diagram_js_lib_util_PositionUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! diagram-js/lib/util/PositionUtil */ "diagram-js/lib/util/PositionUtil");
/* harmony import */ var diagram_js_lib_util_PositionUtil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_PositionUtil__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_GeometricUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/GeometricUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/GeometricUtil.js");












var DEFAULT_LABEL_DIMENSIONS = {
  width: 90,
  height: 20
};
var NAME_PROPERTY = 'name';
var TEXT_PROPERTY = 'text';
/**
 * A component that makes sure that external labels are added
 * together with respective elements and properly updated (DI wise)
 * during move.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 * @param {BpmnFactory} bpmnFactory
 * @param {TextRenderer} textRenderer
 */

function LabelBehavior(eventBus, modeling, bpmnFactory, textRenderer) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6___default.a.call(this, eventBus); // update label if name property was updated

  this.postExecute('element.updateProperties', function (e) {
    var context = e.context,
        element = context.element,
        properties = context.properties;

    if (NAME_PROPERTY in properties) {
      modeling.updateLabel(element, properties[NAME_PROPERTY]);
    }

    if (TEXT_PROPERTY in properties && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:TextAnnotation')) {
      var newBounds = textRenderer.getTextAnnotationBounds({
        x: element.x,
        y: element.y,
        width: element.width,
        height: element.height
      }, properties[TEXT_PROPERTY] || '');
      modeling.updateLabel(element, properties.text, newBounds);
    }
  }); // create label shape after shape/connection was created

  this.postExecute(['shape.create', 'connection.create'], function (e) {
    var context = e.context,
        hints = context.hints || {};

    if (hints.createElementsBehavior === false) {
      return;
    }

    var element = context.shape || context.connection,
        businessObject = element.businessObject;

    if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["isLabel"])(element) || !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["isLabelExternal"])(element)) {
      return;
    } // only create label if attribute available


    if (!Object(_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["getLabel"])(element)) {
      return;
    }

    var labelCenter = Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["getExternalLabelMid"])(element); // we don't care about x and y

    var labelDimensions = textRenderer.getExternalLabelBounds(DEFAULT_LABEL_DIMENSIONS, Object(_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["getLabel"])(element));
    modeling.createLabel(element, labelCenter, {
      id: businessObject.id + '_label',
      businessObject: businessObject,
      width: labelDimensions.width,
      height: labelDimensions.height
    });
  }); // update label after label shape was deleted

  this.postExecute('shape.delete', function (event) {
    var context = event.context,
        labelTarget = context.labelTarget,
        hints = context.hints || {}; // check if label

    if (labelTarget && hints.unsetLabel !== false) {
      modeling.updateLabel(labelTarget, null, null, {
        removeShape: false
      });
    }
  }); // update di information on label creation

  this.postExecute(['label.create'], function (event) {
    var context = event.context,
        element = context.shape,
        businessObject,
        di; // we want to trigger on real labels only

    if (!element.labelTarget) {
      return;
    } // we want to trigger on BPMN elements only


    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element.labelTarget || element, 'bpmn:BaseElement')) {
      return;
    }

    businessObject = element.businessObject, di = businessObject.di;

    if (!di.label) {
      di.label = bpmnFactory.create('bpmndi:BPMNLabel', {
        bounds: bpmnFactory.create('dc:Bounds')
      });
    }

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(di.label.bounds, {
      x: element.x,
      y: element.y,
      width: element.width,
      height: element.height
    });
  });

  function getVisibleLabelAdjustment(event) {
    var context = event.context,
        connection = context.connection,
        label = connection.label,
        hints = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, context.hints),
        newWaypoints = context.newWaypoints || connection.waypoints,
        oldWaypoints = context.oldWaypoints;

    if (typeof hints.startChanged === 'undefined') {
      hints.startChanged = !!hints.connectionStart;
    }

    if (typeof hints.endChanged === 'undefined') {
      hints.endChanged = !!hints.connectionEnd;
    }

    return Object(_util_LabelLayoutUtil__WEBPACK_IMPORTED_MODULE_5__["getLabelAdjustment"])(label, newWaypoints, oldWaypoints, hints);
  }

  this.postExecute(['connection.layout', 'connection.updateWaypoints'], function (event) {
    var context = event.context,
        hints = context.hints || {};

    if (hints.labelBehavior === false) {
      return;
    }

    var connection = context.connection,
        label = connection.label,
        labelAdjustment; // handle missing label as well as the case
    // that the label parent does not exist (yet),
    // because it is being pasted / created via multi element create
    //
    // Cf. https://github.com/bpmn-io/bpmn-js/pull/1227

    if (!label || !label.parent) {
      return;
    }

    labelAdjustment = getVisibleLabelAdjustment(event);
    modeling.moveShape(label, labelAdjustment);
  }); // keep label position on shape replace

  this.postExecute(['shape.replace'], function (event) {
    var context = event.context,
        newShape = context.newShape,
        oldShape = context.oldShape;
    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(newShape);

    if (businessObject && Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["isLabelExternal"])(businessObject) && oldShape.label && newShape.label) {
      newShape.label.x = oldShape.label.x;
      newShape.label.y = oldShape.label.y;
    }
  }); // move external label after resizing

  this.postExecute('shape.resize', function (event) {
    var context = event.context,
        shape = context.shape,
        newBounds = context.newBounds,
        oldBounds = context.oldBounds;

    if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_3__["hasExternalLabel"])(shape)) {
      var label = shape.label,
          labelMid = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_8__["getMid"])(label),
          edges = asEdges(oldBounds); // get nearest border point to label as reference point

      var referencePoint = getReferencePoint(labelMid, edges);
      var delta = getReferencePointDelta(referencePoint, oldBounds, newBounds);
      modeling.moveShape(label, delta);
    }
  });
}
inherits__WEBPACK_IMPORTED_MODULE_1___default()(LabelBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_6___default.a);
LabelBehavior.$inject = ['eventBus', 'modeling', 'bpmnFactory', 'textRenderer']; // helpers //////////////////////

/**
 * Calculates a reference point delta relative to a new position
 * of a certain element's bounds
 *
 * @param {Point} point
 * @param {Bounds} oldBounds
 * @param {Bounds} newBounds
 *
 * @return {Delta} delta
 */

function getReferencePointDelta(referencePoint, oldBounds, newBounds) {
  var newReferencePoint = Object(diagram_js_lib_util_AttachUtil__WEBPACK_IMPORTED_MODULE_7__["getNewAttachPoint"])(referencePoint, oldBounds, newBounds);
  return Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_8__["roundPoint"])(Object(diagram_js_lib_util_PositionUtil__WEBPACK_IMPORTED_MODULE_9__["delta"])(newReferencePoint, referencePoint));
}
/**
 * Generates the nearest point (reference point) for a given point
 * onto given set of lines
 *
 * @param {Array<Point, Point>} lines
 * @param {Point} point
 *
 * @param {Point}
 */

function getReferencePoint(point, lines) {
  if (!lines.length) {
    return;
  }

  var nearestLine = getNearestLine(point, lines);
  return Object(_util_GeometricUtil__WEBPACK_IMPORTED_MODULE_10__["perpendicularFoot"])(point, nearestLine);
}
/**
 * Convert the given bounds to a lines array containing all edges
 *
 * @param {Bounds|Point} bounds
 *
 * @return Array<Point>
 */

function asEdges(bounds) {
  return [[// top
  {
    x: bounds.x,
    y: bounds.y
  }, {
    x: bounds.x + (bounds.width || 0),
    y: bounds.y
  }], [// right
  {
    x: bounds.x + (bounds.width || 0),
    y: bounds.y
  }, {
    x: bounds.x + (bounds.width || 0),
    y: bounds.y + (bounds.height || 0)
  }], [// bottom
  {
    x: bounds.x,
    y: bounds.y + (bounds.height || 0)
  }, {
    x: bounds.x + (bounds.width || 0),
    y: bounds.y + (bounds.height || 0)
  }], [// left
  {
    x: bounds.x,
    y: bounds.y
  }, {
    x: bounds.x,
    y: bounds.y + (bounds.height || 0)
  }]];
}
/**
 * Returns the nearest line for a given point by distance
 * @param {Point} point
 * @param Array<Point> lines
 *
 * @return Array<Point>
 */

function getNearestLine(point, lines) {
  var distances = lines.map(function (l) {
    return {
      line: l,
      distance: Object(_util_GeometricUtil__WEBPACK_IMPORTED_MODULE_10__["getDistancePointLine"])(point, l)
    };
  });
  var sorted = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(distances, 'distance');
  return sorted[0].line;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ModelingFeedback.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ModelingFeedback.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelingFeedback; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");

var COLLAB_ERR_MSG = 'flow elements must be children of pools/participants',
    PROCESS_ERR_MSG = 'participants cannot be pasted onto a non-empty process diagram';
function ModelingFeedback(eventBus, tooltips, translate) {
  function showError(position, message, timeout) {
    tooltips.add({
      position: {
        x: position.x + 5,
        y: position.y + 5
      },
      type: 'error',
      timeout: timeout || 2000,
      html: '<div>' + message + '</div>'
    });
  }

  eventBus.on(['shape.move.rejected', 'create.rejected'], function (event) {
    var context = event.context,
        shape = context.shape,
        target = context.target;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(target, 'bpmn:Collaboration') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:FlowNode')) {
      showError(event, translate(COLLAB_ERR_MSG));
    }
  });
  eventBus.on(['elements.paste.rejected'], function (event) {
    var context = event.context,
        position = context.position,
        target = context.target;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(target, 'bpmn:Collaboration')) {
      showError(position, translate(COLLAB_ERR_MSG));
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(target, 'bpmn:Process')) {
      showError(position, translate(PROCESS_ERR_MSG), 3000);
    }
  });
}
ModelingFeedback.$inject = ['eventBus', 'tooltips', 'translate'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/RemoveElementBehavior.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/RemoveElementBehavior.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoveElementBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_LineIntersect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/LineIntersect */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineIntersect.js");




function RemoveElementBehavior(eventBus, bpmnRules, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a.call(this, eventBus);
  /**
   * Combine sequence flows when deleting an element
   * if there is one incoming and one outgoing
   * sequence flow
   */

  this.preExecute('shape.delete', function (e) {
    var shape = e.context.shape; // only handle [a] -> [shape] -> [b] patterns

    if (shape.incoming.length !== 1 || shape.outgoing.length !== 1) {
      return;
    }

    var inConnection = shape.incoming[0],
        outConnection = shape.outgoing[0]; // only handle sequence flows

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(inConnection, 'bpmn:SequenceFlow') || !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(outConnection, 'bpmn:SequenceFlow')) {
      return;
    }

    if (bpmnRules.canConnect(inConnection.source, outConnection.target, inConnection)) {
      // compute new, combined waypoints
      var newWaypoints = getNewWaypoints(inConnection.waypoints, outConnection.waypoints);
      modeling.reconnectEnd(inConnection, outConnection.target, newWaypoints);
    }
  });
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(RemoveElementBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a);
RemoveElementBehavior.$inject = ['eventBus', 'bpmnRules', 'modeling']; // helpers //////////////////////

function getDocking(point) {
  return point.original || point;
}

function getNewWaypoints(inWaypoints, outWaypoints) {
  var intersection = Object(_util_LineIntersect__WEBPACK_IMPORTED_MODULE_3__["default"])(getDocking(inWaypoints[inWaypoints.length - 2]), getDocking(inWaypoints[inWaypoints.length - 1]), getDocking(outWaypoints[1]), getDocking(outWaypoints[0]));

  if (intersection) {
    return [].concat(inWaypoints.slice(0, inWaypoints.length - 1), [intersection], outWaypoints.slice(1));
  } else {
    return [getDocking(inWaypoints[0]), getDocking(outWaypoints[outWaypoints.length - 1])];
  }
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/RemoveParticipantBehavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/RemoveParticipantBehavior.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoveParticipantBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



/**
 * BPMN specific remove behavior
 */

function RemoveParticipantBehavior(eventBus, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  /**
   * morph collaboration diagram into process diagram
   * after the last participant has been removed
   */

  this.preExecute('shape.delete', function (context) {
    var shape = context.shape,
        parent = shape.parent; // activate the behavior if the shape to be removed
    // is a participant

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Participant')) {
      context.collaborationRoot = parent;
    }
  }, true);
  this.postExecute('shape.delete', function (context) {
    var collaborationRoot = context.collaborationRoot;

    if (collaborationRoot && !collaborationRoot.businessObject.participants.length) {
      // replace empty collaboration with process diagram
      modeling.makeProcess();
    }
  }, true);
}
RemoveParticipantBehavior.$inject = ['eventBus', 'modeling'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(RemoveParticipantBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ReplaceConnectionBehavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ReplaceConnectionBehavior.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReplaceConnectionBehavior; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");




function ReplaceConnectionBehavior(eventBus, modeling, bpmnRules, injector) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a.call(this, eventBus);
  var dragging = injector.get('dragging', false);

  function fixConnection(connection) {
    var source = connection.source,
        target = connection.target,
        parent = connection.parent; // do not do anything if connection
    // is already deleted (may happen due to other
    // behaviors plugged-in before)

    if (!parent) {
      return;
    }

    var replacementType, remove;
    /**
     * Check if incoming or outgoing connections
     * can stay or could be substituted with an
     * appropriate replacement.
     *
     * This holds true for SequenceFlow <> MessageFlow.
     */

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(connection, 'bpmn:SequenceFlow')) {
      if (!bpmnRules.canConnectSequenceFlow(source, target)) {
        remove = true;
      }

      if (bpmnRules.canConnectMessageFlow(source, target)) {
        replacementType = 'bpmn:MessageFlow';
      }
    } // transform message flows into sequence flows, if possible


    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(connection, 'bpmn:MessageFlow')) {
      if (!bpmnRules.canConnectMessageFlow(source, target)) {
        remove = true;
      }

      if (bpmnRules.canConnectSequenceFlow(source, target)) {
        replacementType = 'bpmn:SequenceFlow';
      }
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(connection, 'bpmn:Association') && !bpmnRules.canConnectAssociation(source, target)) {
      remove = true;
    } // remove invalid connection,
    // unless it has been removed already


    if (remove) {
      modeling.removeConnection(connection);
    } // replace SequenceFlow <> MessageFlow


    if (replacementType) {
      modeling.connect(source, target, {
        type: replacementType,
        waypoints: connection.waypoints.slice()
      });
    }
  }

  function replaceReconnectedConnection(event) {
    var context = event.context,
        connection = context.connection,
        source = context.newSource || connection.source,
        target = context.newTarget || connection.target,
        allowed,
        replacement;
    allowed = bpmnRules.canConnect(source, target);

    if (!allowed || allowed.type === connection.type) {
      return;
    }

    replacement = modeling.connect(source, target, {
      type: allowed.type,
      waypoints: connection.waypoints.slice()
    }); // remove old connection

    modeling.removeConnection(connection); // replace connection in context to reconnect end/start

    context.connection = replacement;

    if (dragging) {
      cleanDraggingSelection(connection, replacement);
    }
  } // monkey-patch selection saved in dragging in order to re-select it when operation is finished


  function cleanDraggingSelection(oldConnection, newConnection) {
    var context = dragging.context(),
        previousSelection = context && context.payload.previousSelection,
        index; // do nothing if not dragging or no selection was present

    if (!previousSelection || !previousSelection.length) {
      return;
    }

    index = previousSelection.indexOf(oldConnection);

    if (index === -1) {
      return;
    }

    previousSelection.splice(index, 1, newConnection);
  } // lifecycle hooks


  this.postExecuted('elements.move', function (context) {
    var closure = context.closure,
        allConnections = closure.allConnections;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(allConnections, fixConnection);
  }, true);
  this.preExecute('connection.reconnect', replaceReconnectedConnection);
  this.postExecuted('element.updateProperties', function (event) {
    var context = event.context,
        properties = context.properties,
        element = context.element,
        businessObject = element.businessObject,
        connection; // remove condition on change to default

    if (properties.default) {
      connection = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(element.outgoing, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["matchPattern"])({
        id: element.businessObject.default.id
      }));

      if (connection) {
        modeling.updateProperties(connection, {
          conditionExpression: undefined
        });
      }
    } // remove default from source on change to conditional


    if (properties.conditionExpression && businessObject.sourceRef.default === businessObject) {
      modeling.updateProperties(element.source, {
        default: undefined
      });
    }
  });
}
inherits__WEBPACK_IMPORTED_MODULE_1___default()(ReplaceConnectionBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a);
ReplaceConnectionBehavior.$inject = ['eventBus', 'modeling', 'bpmnRules', 'injector'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ReplaceElementBehaviour.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ReplaceElementBehaviour.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReplaceElementBehaviour; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");




/**
 * BPMN-specific replace behavior.
 */

function ReplaceElementBehaviour(bpmnReplace, bpmnRules, elementRegistry, injector, modeling, selection) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a, this);
  this._bpmnReplace = bpmnReplace;
  this._elementRegistry = elementRegistry;
  this._selection = selection; // replace elements on move

  this.postExecuted(['elements.move'], 500, function (event) {
    var context = event.context,
        target = context.newParent,
        newHost = context.newHost,
        elements = [];
    Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(context.closure.topLevel, function (topLevelElements) {
      if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isEventSubProcess"])(topLevelElements)) {
        elements = elements.concat(topLevelElements.children);
      } else {
        elements = elements.concat(topLevelElements);
      }
    }); // set target to host if attaching

    if (elements.length === 1 && newHost) {
      target = newHost;
    }

    var canReplace = bpmnRules.canReplace(elements, target);

    if (canReplace) {
      this.replaceElements(elements, canReplace.replacements, newHost);
    }
  }, this); // update attachments on host replace

  this.postExecute(['shape.replace'], 1500, function (e) {
    var context = e.context,
        oldShape = context.oldShape,
        newShape = context.newShape,
        attachers = oldShape.attachers,
        canReplace;

    if (attachers && attachers.length) {
      canReplace = bpmnRules.canReplace(attachers, newShape);
      this.replaceElements(attachers, canReplace.replacements);
    }
  }, this); // keep ID on shape replace

  this.postExecuted(['shape.replace'], 1500, function (e) {
    var context = e.context,
        oldShape = context.oldShape,
        newShape = context.newShape;
    modeling.unclaimId(oldShape.businessObject.id, oldShape.businessObject);
    modeling.updateProperties(newShape, {
      id: oldShape.id
    });
  });
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(ReplaceElementBehaviour, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a);

ReplaceElementBehaviour.prototype.replaceElements = function (elements, newElements) {
  var elementRegistry = this._elementRegistry,
      bpmnReplace = this._bpmnReplace,
      selection = this._selection;
  Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(newElements, function (replacement) {
    var newElement = {
      type: replacement.newElementType
    };
    var oldElement = elementRegistry.get(replacement.oldElementId);
    var idx = elements.indexOf(oldElement);
    elements[idx] = bpmnReplace.replaceElement(oldElement, newElement, {
      select: false
    });
  });

  if (newElements) {
    selection.select(elements);
  }
};

ReplaceElementBehaviour.$inject = ['bpmnReplace', 'bpmnRules', 'elementRegistry', 'injector', 'modeling', 'selection'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeBehavior.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeBehavior.js ***!
  \*******************************************************************************/
/*! exports provided: PARTICIPANT_MIN_DIMENSIONS, SUB_PROCESS_MIN_DIMENSIONS, TEXT_ANNOTATION_MIN_DIMENSIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANT_MIN_DIMENSIONS", function() { return PARTICIPANT_MIN_DIMENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_PROCESS_MIN_DIMENSIONS", function() { return SUB_PROCESS_MIN_DIMENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_ANNOTATION_MIN_DIMENSIONS", function() { return TEXT_ANNOTATION_MIN_DIMENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeBehavior; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_ResizeUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/ResizeUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/ResizeUtil.js");



var HIGH_PRIORITY = 1500;
var PARTICIPANT_MIN_DIMENSIONS = {
  width: 300,
  height: 150
};
var SUB_PROCESS_MIN_DIMENSIONS = {
  width: 140,
  height: 120
};
var TEXT_ANNOTATION_MIN_DIMENSIONS = {
  width: 50,
  height: 30
};
/**
 * Set minimum bounds/resize constraints on resize.
 *
 * @param {EventBus} eventBus
 */

function ResizeBehavior(eventBus) {
  eventBus.on('resize.start', HIGH_PRIORITY, function (event) {
    var context = event.context,
        shape = context.shape,
        direction = context.direction,
        balanced = context.balanced;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Lane') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Participant')) {
      context.resizeConstraints = Object(_util_ResizeUtil__WEBPACK_IMPORTED_MODULE_2__["getParticipantResizeConstraints"])(shape, direction, balanced);
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Participant')) {
      context.minDimensions = PARTICIPANT_MIN_DIMENSIONS;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:SubProcess') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(shape)) {
      context.minDimensions = SUB_PROCESS_MIN_DIMENSIONS;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:TextAnnotation')) {
      context.minDimensions = TEXT_ANNOTATION_MIN_DIMENSIONS;
    }
  });
}
ResizeBehavior.$inject = ['eventBus'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeLaneBehavior.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeLaneBehavior.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeLaneBehavior; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Mouse */ "diagram-js/lib/util/Mouse");
/* harmony import */ var diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_2__);



var SLIGHTLY_HIGHER_PRIORITY = 1001;
/**
 * Invoke {@link Modeling#resizeLane} instead of
 * {@link Modeling#resizeShape} when resizing a Lane
 * or Participant shape.
 */

function ResizeLaneBehavior(eventBus, modeling) {
  eventBus.on('resize.start', SLIGHTLY_HIGHER_PRIORITY + 500, function (event) {
    var context = event.context,
        shape = context.shape;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Lane') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Participant')) {
      // should we resize the opposite lane(s) in
      // order to compensate for the resize operation?
      context.balanced = !Object(diagram_js_lib_util_Mouse__WEBPACK_IMPORTED_MODULE_2__["hasPrimaryModifier"])(event);
    }
  });
  /**
   * Intercept resize end and call resize lane function instead.
   */

  eventBus.on('resize.end', SLIGHTLY_HIGHER_PRIORITY, function (event) {
    var context = event.context,
        shape = context.shape,
        canExecute = context.canExecute,
        newBounds = context.newBounds;

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Lane') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(shape, 'bpmn:Participant')) {
      if (canExecute) {
        // ensure we have actual pixel values for new bounds
        // (important when zoom level was > 1 during move)
        newBounds = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["roundBounds"])(newBounds); // perform the actual resize

        modeling.resizeLane(shape, newBounds, context.balanced);
      } // stop propagation


      return false;
    }
  });
}
ResizeLaneBehavior.$inject = ['eventBus', 'modeling'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/RootElementReferenceBehavior.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/RootElementReferenceBehavior.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootElementReferenceBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_ModelingUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");







var LOW_PRIORITY = 500;
/**
 * Add referenced root elements (error, escalation, message, signal) if they don't exist.
 * Copy referenced root elements on copy & paste.
 */

function RootElementReferenceBehavior(bpmnjs, eventBus, injector, moddleCopy, bpmnFactory) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a, this);

  function canHaveRootElementReference(element) {
    return Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_5__["isAny"])(element, ['bpmn:ReceiveTask', 'bpmn:SendTask']) || hasAnyEventDefinition(element, ['bpmn:ErrorEventDefinition', 'bpmn:EscalationEventDefinition', 'bpmn:MessageEventDefinition', 'bpmn:SignalEventDefinition']);
  }

  function hasRootElement(rootElement) {
    var definitions = bpmnjs.getDefinitions(),
        rootElements = definitions.get('rootElements');
    return !!Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["find"])(rootElements, Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["matchPattern"])({
      id: rootElement.id
    }));
  }

  function getRootElementReferencePropertyName(eventDefinition) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(eventDefinition, 'bpmn:ErrorEventDefinition')) {
      return 'errorRef';
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(eventDefinition, 'bpmn:EscalationEventDefinition')) {
      return 'escalationRef';
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(eventDefinition, 'bpmn:MessageEventDefinition')) {
      return 'messageRef';
    } else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(eventDefinition, 'bpmn:SignalEventDefinition')) {
      return 'signalRef';
    }
  }

  function getRootElement(businessObject) {
    if (Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_5__["isAny"])(businessObject, ['bpmn:ReceiveTask', 'bpmn:SendTask'])) {
      return businessObject.get('messageRef');
    }

    var eventDefinitions = businessObject.get('eventDefinitions'),
        eventDefinition = eventDefinitions[0];
    return eventDefinition.get(getRootElementReferencePropertyName(eventDefinition));
  }

  function setRootElement(businessObject, rootElement) {
    if (Object(_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_5__["isAny"])(businessObject, ['bpmn:ReceiveTask', 'bpmn:SendTask'])) {
      return businessObject.set('messageRef', rootElement);
    }

    var eventDefinitions = businessObject.get('eventDefinitions'),
        eventDefinition = eventDefinitions[0];
    return eventDefinition.set(getRootElementReferencePropertyName(eventDefinition), rootElement);
  } // create shape


  this.executed('shape.create', function (context) {
    var shape = context.shape;

    if (!canHaveRootElementReference(shape)) {
      return;
    }

    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(shape),
        rootElement = getRootElement(businessObject),
        rootElements;

    if (rootElement && !hasRootElement(rootElement)) {
      rootElements = bpmnjs.getDefinitions().get('rootElements'); // add root element

      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_3__["add"])(rootElements, rootElement);
      context.addedRootElement = rootElement;
    }
  }, true);
  this.reverted('shape.create', function (context) {
    var addedRootElement = context.addedRootElement;

    if (!addedRootElement) {
      return;
    }

    var rootElements = bpmnjs.getDefinitions().get('rootElements'); // remove root element

    Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_3__["remove"])(rootElements, addedRootElement);
  }, true);
  eventBus.on('copyPaste.copyElement', function (context) {
    var descriptor = context.descriptor,
        element = context.element;

    if (!canHaveRootElementReference(element)) {
      return;
    }

    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["getBusinessObject"])(element),
        rootElement = getRootElement(businessObject);

    if (rootElement) {
      descriptor.referencedRootElement = rootElement;
    }
  });
  eventBus.on('copyPaste.pasteElement', LOW_PRIORITY, function (context) {
    var descriptor = context.descriptor,
        businessObject = descriptor.businessObject;

    if (!canHaveRootElementReference(businessObject)) {
      return;
    }

    var referencedRootElement = descriptor.referencedRootElement;

    if (!referencedRootElement) {
      return;
    }

    if (!hasRootElement(referencedRootElement)) {
      referencedRootElement = moddleCopy.copyElement(referencedRootElement, bpmnFactory.create(referencedRootElement.$type));
    }

    setRootElement(businessObject, referencedRootElement);
  });
}
RootElementReferenceBehavior.$inject = ['bpmnjs', 'eventBus', 'injector', 'moddleCopy', 'bpmnFactory'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(RootElementReferenceBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_2___default.a); // helpers //////////

function hasAnyEventDefinition(element, types) {
  if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(types)) {
    types = [types];
  }

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["some"])(types, function (type) {
    return Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_6__["hasEventDefinition"])(element, type);
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/SpaceToolBehavior.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/SpaceToolBehavior.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpaceToolBehavior; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _ResizeBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResizeBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeBehavior.js");




function SpaceToolBehavior(eventBus) {
  eventBus.on('spaceTool.getMinDimensions', function (context) {
    var shapes = context.shapes,
        minDimensions = {};
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(shapes, function (shape) {
      var id = shape.id;

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:Participant')) {
        minDimensions[id] = _ResizeBehavior__WEBPACK_IMPORTED_MODULE_3__["PARTICIPANT_MIN_DIMENSIONS"];
      }

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:SubProcess') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_2__["isExpanded"])(shape)) {
        minDimensions[id] = _ResizeBehavior__WEBPACK_IMPORTED_MODULE_3__["SUB_PROCESS_MIN_DIMENSIONS"];
      }

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(shape, 'bpmn:TextAnnotation')) {
        minDimensions[id] = _ResizeBehavior__WEBPACK_IMPORTED_MODULE_3__["TEXT_ANNOTATION_MIN_DIMENSIONS"];
      }
    });
    return minDimensions;
  });
}
SpaceToolBehavior.$inject = ['eventBus'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/SubProcessStartEventBehavior.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/SubProcessStartEventBehavior.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubProcessStartEventBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/DiUtil.js */ "./node_modules/bpmn-js/lib/util/DiUtil.js");




/**
 * Add start event replacing element with expanded sub process.
 *
 * @param {Injector} injector
 * @param {Modeling} modeling
 */

function SubProcessStartEventBehavior(injector, modeling) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a, this);
  this.postExecuted('shape.replace', function (event) {
    var oldShape = event.context.oldShape,
        newShape = event.context.newShape;

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(newShape, 'bpmn:SubProcess') || !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(oldShape, 'bpmn:Task') || !Object(_util_DiUtil_js__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(newShape)) {
      return;
    }

    var position = getStartEventPosition(newShape);
    modeling.createShape({
      type: 'bpmn:StartEvent'
    }, position, newShape);
  });
}
SubProcessStartEventBehavior.$inject = ['injector', 'modeling'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(SubProcessStartEventBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a); // helpers //////////

function getStartEventPosition(shape) {
  return {
    x: shape.x + shape.width / 6,
    y: shape.y + shape.height / 2
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/ToggleElementCollapseBehaviour.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/ToggleElementCollapseBehaviour.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleElementCollapseBehaviour; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/features/resize/ResizeUtil */ "diagram-js/lib/features/resize/ResizeUtil");
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__);




var LOW_PRIORITY = 500;
function ToggleElementCollapseBehaviour(eventBus, elementFactory, modeling, resize) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);

  function hideEmptyLabels(children) {
    if (children.length) {
      children.forEach(function (child) {
        if (child.type === 'label' && !child.businessObject.name) {
          child.hidden = true;
        }
      });
    }
  }

  function expandedBounds(shape, defaultSize) {
    var children = shape.children,
        newBounds = defaultSize,
        visibleElements,
        visibleBBox;
    visibleElements = filterVisible(children).concat([shape]);
    visibleBBox = Object(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__["computeChildrenBBox"])(visibleElements);

    if (visibleBBox) {
      // center to visibleBBox with max(defaultSize, childrenBounds)
      newBounds.width = Math.max(visibleBBox.width, newBounds.width);
      newBounds.height = Math.max(visibleBBox.height, newBounds.height);
      newBounds.x = visibleBBox.x + (visibleBBox.width - newBounds.width) / 2;
      newBounds.y = visibleBBox.y + (visibleBBox.height - newBounds.height) / 2;
    } else {
      // center to collapsed shape with defaultSize
      newBounds.x = shape.x + (shape.width - newBounds.width) / 2;
      newBounds.y = shape.y + (shape.height - newBounds.height) / 2;
    }

    return newBounds;
  }

  function collapsedBounds(shape, defaultSize) {
    return {
      x: shape.x + (shape.width - defaultSize.width) / 2,
      y: shape.y + (shape.height - defaultSize.height) / 2,
      width: defaultSize.width,
      height: defaultSize.height
    };
  }

  this.executed(['shape.toggleCollapse'], LOW_PRIORITY, function (e) {
    var context = e.context,
        shape = context.shape;

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:SubProcess')) {
      return;
    }

    if (!shape.collapsed) {
      // all children got made visible through djs, hide empty labels
      hideEmptyLabels(shape.children); // remove collapsed marker

      Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(shape).di.isExpanded = true;
    } else {
      // place collapsed marker
      Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(shape).di.isExpanded = false;
    }
  });
  this.reverted(['shape.toggleCollapse'], LOW_PRIORITY, function (e) {
    var context = e.context;
    var shape = context.shape; // revert removing/placing collapsed marker

    if (!shape.collapsed) {
      Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(shape).di.isExpanded = true;
    } else {
      Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(shape).di.isExpanded = false;
    }
  });
  this.postExecuted(['shape.toggleCollapse'], LOW_PRIORITY, function (e) {
    var shape = e.context.shape,
        defaultSize = elementFactory._getDefaultSize(shape),
        newBounds;

    if (shape.collapsed) {
      // resize to default size of collapsed shapes
      newBounds = collapsedBounds(shape, defaultSize);
    } else {
      // resize to bounds of max(visible children, defaultSize)
      newBounds = expandedBounds(shape, defaultSize);
    }

    modeling.resizeShape(shape, newBounds, null, {
      autoResize: shape.collapsed ? false : 'nwse'
    });
  });
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(ToggleElementCollapseBehaviour, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);
ToggleElementCollapseBehaviour.$inject = ['eventBus', 'elementFactory', 'modeling']; // helpers //////////////////////

function filterVisible(elements) {
  return elements.filter(function (e) {
    return !e.hidden;
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/UnclaimIdBehavior.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/UnclaimIdBehavior.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnclaimIdBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");





/**
 * Unclaims model IDs on element deletion.
 *
 * @param {Canvas} canvas
 * @param {Injector} injector
 * @param {Moddle} moddle
 * @param {Modeling} modeling
 */

function UnclaimIdBehavior(canvas, injector, moddle, modeling) {
  injector.invoke(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a, this);
  this.preExecute('shape.delete', function (event) {
    var context = event.context,
        shape = context.shape,
        shapeBo = shape.businessObject;

    if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(shape)) {
      return;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Participant') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(shape)) {
      moddle.ids.unclaim(shapeBo.processRef.id);
    }

    modeling.unclaimId(shapeBo.id, shapeBo);
  });
  this.preExecute('connection.delete', function (event) {
    var context = event.context,
        connection = context.connection,
        connectionBo = connection.businessObject;
    modeling.unclaimId(connectionBo.id, connectionBo);
  });
  this.preExecute('canvas.updateRoot', function () {
    var rootElement = canvas.getRootElement(),
        rootElementBo = rootElement.businessObject;
    moddle.ids.unclaim(rootElementBo.id);
  });
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(UnclaimIdBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);
UnclaimIdBehavior.$inject = ['canvas', 'injector', 'moddle', 'modeling'];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/UnsetDefaultFlowBehavior.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/UnsetDefaultFlowBehavior.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteSequenceFlowBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



/**
 * A behavior that unsets the Default property of
 * sequence flow source on element delete, if the
 * removed element is the Gateway or Task's default flow.
 *
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 */

function DeleteSequenceFlowBehavior(eventBus, modeling) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  this.preExecute('connection.delete', function (event) {
    var context = event.context,
        connection = context.connection,
        source = connection.source;

    if (isDefaultFlow(connection, source)) {
      modeling.updateProperties(source, {
        'default': null
      });
    }
  });
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(DeleteSequenceFlowBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);
DeleteSequenceFlowBehavior.$inject = ['eventBus', 'modeling']; // helpers //////////////////////

function isDefaultFlow(connection, source) {
  if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(connection, 'bpmn:SequenceFlow')) {
    return false;
  }

  var sourceBo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(source),
      sequenceFlow = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(connection);
  return sourceBo.get('default') === sequenceFlow;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/UpdateFlowNodeRefsBehavior.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/UpdateFlowNodeRefsBehavior.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateFlowNodeRefsBehavior; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");



var LOW_PRIORITY = 500,
    HIGH_PRIORITY = 5000;
/**
 * BPMN specific delete lane behavior
 */

function UpdateFlowNodeRefsBehavior(eventBus, modeling, translate) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  /**
   * Ok, this is it:
   *
   * We have to update the Lane#flowNodeRefs _and_
   * FlowNode#lanes with every FlowNode move/resize and
   * Lane move/resize.
   *
   * We want to group that stuff to recompute containments
   * as efficient as possible.
   *
   * Yea!
   */
  // the update context

  var context;

  function initContext() {
    context = context || new UpdateContext();
    context.enter();
    return context;
  }

  function getContext() {
    if (!context) {
      throw new Error(translate('out of bounds release'));
    }

    return context;
  }

  function releaseContext() {
    if (!context) {
      throw new Error(translate('out of bounds release'));
    }

    var triggerUpdate = context.leave();

    if (triggerUpdate) {
      modeling.updateLaneRefs(context.flowNodes, context.lanes);
      context = null;
    }

    return triggerUpdate;
  }

  var laneRefUpdateEvents = ['spaceTool', 'lane.add', 'lane.resize', 'lane.split', 'elements.create', 'elements.delete', 'elements.move', 'shape.create', 'shape.delete', 'shape.move', 'shape.resize']; // listen to a lot of stuff to group lane updates

  this.preExecute(laneRefUpdateEvents, HIGH_PRIORITY, function (event) {
    initContext();
  });
  this.postExecuted(laneRefUpdateEvents, LOW_PRIORITY, function (event) {
    releaseContext();
  }); // Mark flow nodes + lanes that need an update

  this.preExecute(['shape.create', 'shape.move', 'shape.delete', 'shape.resize'], function (event) {
    var context = event.context,
        shape = context.shape;
    var updateContext = getContext(); // no need to update labels

    if (shape.labelTarget) {
      return;
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Lane')) {
      updateContext.addLane(shape);
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:FlowNode')) {
      updateContext.addFlowNode(shape);
    }
  });
}
UpdateFlowNodeRefsBehavior.$inject = ['eventBus', 'modeling', 'translate'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(UpdateFlowNodeRefsBehavior, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_1___default.a);

function UpdateContext() {
  this.flowNodes = [];
  this.lanes = [];
  this.counter = 0;

  this.addLane = function (lane) {
    this.lanes.push(lane);
  };

  this.addFlowNode = function (flowNode) {
    this.flowNodes.push(flowNode);
  };

  this.enter = function () {
    this.counter++;
  };

  this.leave = function () {
    this.counter--;
    return !this.counter;
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdaptiveLabelPositioningBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveLabelPositioningBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/AdaptiveLabelPositioningBehavior.js");
/* harmony import */ var _AppendBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppendBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/AppendBehavior.js");
/* harmony import */ var _AssociationBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssociationBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/AssociationBehavior.js");
/* harmony import */ var _AttachEventBehavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachEventBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/AttachEventBehavior.js");
/* harmony import */ var _BoundaryEventBehavior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoundaryEventBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/BoundaryEventBehavior.js");
/* harmony import */ var _RootElementReferenceBehavior__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RootElementReferenceBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/RootElementReferenceBehavior.js");
/* harmony import */ var _CreateBehavior__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/CreateBehavior.js");
/* harmony import */ var _FixHoverBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FixHoverBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/FixHoverBehavior.js");
/* harmony import */ var _CreateDataObjectBehavior__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateDataObjectBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/CreateDataObjectBehavior.js");
/* harmony import */ var _CreateParticipantBehavior__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreateParticipantBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/CreateParticipantBehavior.js");
/* harmony import */ var _DataInputAssociationBehavior__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataInputAssociationBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/DataInputAssociationBehavior.js");
/* harmony import */ var _DataStoreBehavior__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DataStoreBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/DataStoreBehavior.js");
/* harmony import */ var _DeleteLaneBehavior__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DeleteLaneBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/DeleteLaneBehavior.js");
/* harmony import */ var _DetachEventBehavior__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DetachEventBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/DetachEventBehavior.js");
/* harmony import */ var _DropOnFlowBehavior__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DropOnFlowBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/DropOnFlowBehavior.js");
/* harmony import */ var _EventBasedGatewayBehavior__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EventBasedGatewayBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/EventBasedGatewayBehavior.js");
/* harmony import */ var _GroupBehavior__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GroupBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/GroupBehavior.js");
/* harmony import */ var _ImportDockingFix__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ImportDockingFix */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ImportDockingFix.js");
/* harmony import */ var _IsHorizontalFix__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IsHorizontalFix */ "./node_modules/bpmn-js/lib/features/modeling/behavior/IsHorizontalFix.js");
/* harmony import */ var _LabelBehavior__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LabelBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/LabelBehavior.js");
/* harmony import */ var _ModelingFeedback__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ModelingFeedback */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ModelingFeedback.js");
/* harmony import */ var _ReplaceConnectionBehavior__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ReplaceConnectionBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ReplaceConnectionBehavior.js");
/* harmony import */ var _RemoveParticipantBehavior__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RemoveParticipantBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/RemoveParticipantBehavior.js");
/* harmony import */ var _ReplaceElementBehaviour__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ReplaceElementBehaviour */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ReplaceElementBehaviour.js");
/* harmony import */ var _ResizeBehavior__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ResizeBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeBehavior.js");
/* harmony import */ var _ResizeLaneBehavior__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ResizeLaneBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ResizeLaneBehavior.js");
/* harmony import */ var _RemoveElementBehavior__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./RemoveElementBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/RemoveElementBehavior.js");
/* harmony import */ var _SpaceToolBehavior__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./SpaceToolBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/SpaceToolBehavior.js");
/* harmony import */ var _SubProcessStartEventBehavior__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./SubProcessStartEventBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/SubProcessStartEventBehavior.js");
/* harmony import */ var _ToggleElementCollapseBehaviour__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ToggleElementCollapseBehaviour */ "./node_modules/bpmn-js/lib/features/modeling/behavior/ToggleElementCollapseBehaviour.js");
/* harmony import */ var _UnclaimIdBehavior__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./UnclaimIdBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/UnclaimIdBehavior.js");
/* harmony import */ var _UpdateFlowNodeRefsBehavior__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./UpdateFlowNodeRefsBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/UpdateFlowNodeRefsBehavior.js");
/* harmony import */ var _UnsetDefaultFlowBehavior__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./UnsetDefaultFlowBehavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/UnsetDefaultFlowBehavior.js");

































/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['adaptiveLabelPositioningBehavior', 'appendBehavior', 'associationBehavior', 'attachEventBehavior', 'boundaryEventBehavior', 'rootElementReferenceBehavior', 'createBehavior', 'fixHoverBehavior', 'createDataObjectBehavior', 'createParticipantBehavior', 'dataStoreBehavior', 'dataInputAssociationBehavior', 'deleteLaneBehavior', 'detachEventBehavior', 'dropOnFlowBehavior', 'eventBasedGatewayBehavior', 'groupBehavior', 'importDockingFix', 'isHorizontalFix', 'labelBehavior', 'modelingFeedback', 'removeElementBehavior', 'removeParticipantBehavior', 'replaceConnectionBehavior', 'replaceElementBehaviour', 'resizeBehavior', 'resizeLaneBehavior', 'toggleElementCollapseBehaviour', 'spaceToolBehavior', 'subProcessStartEventBehavior', 'unclaimIdBehavior', 'unsetDefaultFlowBehavior', 'updateFlowNodeRefsBehavior'],
  adaptiveLabelPositioningBehavior: ['type', _AdaptiveLabelPositioningBehavior__WEBPACK_IMPORTED_MODULE_0__["default"]],
  appendBehavior: ['type', _AppendBehavior__WEBPACK_IMPORTED_MODULE_1__["default"]],
  associationBehavior: ['type', _AssociationBehavior__WEBPACK_IMPORTED_MODULE_2__["default"]],
  attachEventBehavior: ['type', _AttachEventBehavior__WEBPACK_IMPORTED_MODULE_3__["default"]],
  boundaryEventBehavior: ['type', _BoundaryEventBehavior__WEBPACK_IMPORTED_MODULE_4__["default"]],
  rootElementReferenceBehavior: ['type', _RootElementReferenceBehavior__WEBPACK_IMPORTED_MODULE_5__["default"]],
  createBehavior: ['type', _CreateBehavior__WEBPACK_IMPORTED_MODULE_6__["default"]],
  fixHoverBehavior: ['type', _FixHoverBehavior__WEBPACK_IMPORTED_MODULE_7__["default"]],
  createDataObjectBehavior: ['type', _CreateDataObjectBehavior__WEBPACK_IMPORTED_MODULE_8__["default"]],
  createParticipantBehavior: ['type', _CreateParticipantBehavior__WEBPACK_IMPORTED_MODULE_9__["default"]],
  dataInputAssociationBehavior: ['type', _DataInputAssociationBehavior__WEBPACK_IMPORTED_MODULE_10__["default"]],
  dataStoreBehavior: ['type', _DataStoreBehavior__WEBPACK_IMPORTED_MODULE_11__["default"]],
  deleteLaneBehavior: ['type', _DeleteLaneBehavior__WEBPACK_IMPORTED_MODULE_12__["default"]],
  detachEventBehavior: ['type', _DetachEventBehavior__WEBPACK_IMPORTED_MODULE_13__["default"]],
  dropOnFlowBehavior: ['type', _DropOnFlowBehavior__WEBPACK_IMPORTED_MODULE_14__["default"]],
  eventBasedGatewayBehavior: ['type', _EventBasedGatewayBehavior__WEBPACK_IMPORTED_MODULE_15__["default"]],
  groupBehavior: ['type', _GroupBehavior__WEBPACK_IMPORTED_MODULE_16__["default"]],
  importDockingFix: ['type', _ImportDockingFix__WEBPACK_IMPORTED_MODULE_17__["default"]],
  isHorizontalFix: ['type', _IsHorizontalFix__WEBPACK_IMPORTED_MODULE_18__["default"]],
  labelBehavior: ['type', _LabelBehavior__WEBPACK_IMPORTED_MODULE_19__["default"]],
  modelingFeedback: ['type', _ModelingFeedback__WEBPACK_IMPORTED_MODULE_20__["default"]],
  replaceConnectionBehavior: ['type', _ReplaceConnectionBehavior__WEBPACK_IMPORTED_MODULE_21__["default"]],
  removeParticipantBehavior: ['type', _RemoveParticipantBehavior__WEBPACK_IMPORTED_MODULE_22__["default"]],
  replaceElementBehaviour: ['type', _ReplaceElementBehaviour__WEBPACK_IMPORTED_MODULE_23__["default"]],
  resizeBehavior: ['type', _ResizeBehavior__WEBPACK_IMPORTED_MODULE_24__["default"]],
  resizeLaneBehavior: ['type', _ResizeLaneBehavior__WEBPACK_IMPORTED_MODULE_25__["default"]],
  removeElementBehavior: ['type', _RemoveElementBehavior__WEBPACK_IMPORTED_MODULE_26__["default"]],
  toggleElementCollapseBehaviour: ['type', _ToggleElementCollapseBehaviour__WEBPACK_IMPORTED_MODULE_29__["default"]],
  spaceToolBehavior: ['type', _SpaceToolBehavior__WEBPACK_IMPORTED_MODULE_27__["default"]],
  subProcessStartEventBehavior: ['type', _SubProcessStartEventBehavior__WEBPACK_IMPORTED_MODULE_28__["default"]],
  unclaimIdBehavior: ['type', _UnclaimIdBehavior__WEBPACK_IMPORTED_MODULE_30__["default"]],
  updateFlowNodeRefsBehavior: ['type', _UpdateFlowNodeRefsBehavior__WEBPACK_IMPORTED_MODULE_31__["default"]],
  unsetDefaultFlowBehavior: ['type', _UnsetDefaultFlowBehavior__WEBPACK_IMPORTED_MODULE_32__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/CategoryUtil.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/util/CategoryUtil.js ***!
  \**********************************************************************************/
/*! exports provided: createCategoryValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategoryValue", function() { return createCategoryValue; });
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");


/**
 * Creates a new bpmn:CategoryValue inside a new bpmn:Category
 *
 * @param {ModdleElement} definitions
 * @param {BpmnFactory} bpmnFactory
 *
 * @return {ModdleElement} categoryValue.
 */

function createCategoryValue(definitions, bpmnFactory) {
  var categoryValue = bpmnFactory.create('bpmn:CategoryValue'),
      category = bpmnFactory.create('bpmn:Category', {
    categoryValue: [categoryValue]
  }); // add to correct place

  Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__["add"])(definitions.get('rootElements'), category);
  Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["getBusinessObject"])(category).$parent = definitions;
  Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["getBusinessObject"])(categoryValue).$parent = category;
  return categoryValue;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/GeometricUtil.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/util/GeometricUtil.js ***!
  \***********************************************************************************/
/*! exports provided: vectorLength, getAngle, rotateVector, perpendicularFoot, getDistancePointLine, getDistancePointPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorLength", function() { return vectorLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateVector", function() { return rotateVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perpendicularFoot", function() { return perpendicularFoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistancePointLine", function() { return getDistancePointLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistancePointPoint", function() { return getDistancePointPoint; });
/**
 * Returns the length of a vector
 *
 * @param {Vector}
 * @return {Float}
 */
function vectorLength(v) {
  return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
}
/**
 * Calculates the angle between a line a the yAxis
 *
 * @param {Array}
 * @return {Float}
 */

function getAngle(line) {
  // return value is between 0, 180 and -180, -0
  // @janstuemmel: maybe replace return a/b with b/a
  return Math.atan((line[1].y - line[0].y) / (line[1].x - line[0].x));
}
/**
 * Rotates a vector by a given angle
 *
 * @param {Vector}
 * @param {Float} Angle in radians
 * @return {Vector}
 */

function rotateVector(vector, angle) {
  return !angle ? vector : {
    x: Math.cos(angle) * vector.x - Math.sin(angle) * vector.y,
    y: Math.sin(angle) * vector.x + Math.cos(angle) * vector.y
  };
}
/**
 * Solves a 2D equation system
 * a + r*b = c, where a,b,c are 2D vectors
 *
 * @param {Vector}
 * @param {Vector}
 * @param {Vector}
 * @return {Float}
 */

function solveLambaSystem(a, b, c) {
  // the 2d system
  var system = [{
    n: a[0] - c[0],
    lambda: b[0]
  }, {
    n: a[1] - c[1],
    lambda: b[1]
  }]; // solve

  var n = system[0].n * b[0] + system[1].n * b[1],
      l = system[0].lambda * b[0] + system[1].lambda * b[1];
  return -n / l;
}
/**
 * Position of perpendicular foot
 *
 * @param {Point}
 * @param [ {Point}, {Point} ] line defined through two points
 * @return {Point} the perpendicular foot position
 */


function perpendicularFoot(point, line) {
  var a = line[0],
      b = line[1]; // relative position of b from a

  var bd = {
    x: b.x - a.x,
    y: b.y - a.y
  }; // solve equation system to the parametrized vectors param real value

  var r = solveLambaSystem([a.x, a.y], [bd.x, bd.y], [point.x, point.y]);
  return {
    x: a.x + r * bd.x,
    y: a.y + r * bd.y
  };
}
/**
 * Calculates the distance between a point and a line
 *
 * @param {Point}
 * @param [ {Point}, {Point} ] line defined through two points
 * @return {Float} distance
 */

function getDistancePointLine(point, line) {
  var pfPoint = perpendicularFoot(point, line); // distance vector

  var connectionVector = {
    x: pfPoint.x - point.x,
    y: pfPoint.y - point.y
  };
  return vectorLength(connectionVector);
}
/**
 * Calculates the distance between two points
 *
 * @param {Point}
 * @param {Point}
 * @return {Float} distance
 */

function getDistancePointPoint(point1, point2) {
  return vectorLength({
    x: point1.x - point2.x,
    y: point1.y - point2.y
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LabelLayoutUtil.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/util/LabelLayoutUtil.js ***!
  \*************************************************************************************/
/*! exports provided: findNewLabelLineStartIndex, getLabelAdjustment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNewLabelLineStartIndex", function() { return findNewLabelLineStartIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelAdjustment", function() { return getLabelAdjustment; });
/* harmony import */ var _GeometricUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeometricUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/GeometricUtil.js");
/* harmony import */ var _LineAttachmentUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineAttachmentUtil */ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineAttachmentUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__);



function findNewLabelLineStartIndex(oldWaypoints, newWaypoints, attachment, hints) {
  var index = attachment.segmentIndex;
  var offset = newWaypoints.length - oldWaypoints.length; // segmentMove happened

  if (hints.segmentMove) {
    var oldSegmentStartIndex = hints.segmentMove.segmentStartIndex,
        newSegmentStartIndex = hints.segmentMove.newSegmentStartIndex; // if label was on moved segment return new segment index

    if (index === oldSegmentStartIndex) {
      return newSegmentStartIndex;
    } // label is after new segment index


    if (index >= newSegmentStartIndex) {
      return index + offset < newSegmentStartIndex ? newSegmentStartIndex : index + offset;
    } // if label is before new segment index


    return index;
  } // bendpointMove happened


  if (hints.bendpointMove) {
    var insert = hints.bendpointMove.insert,
        bendpointIndex = hints.bendpointMove.bendpointIndex,
        newIndex; // waypoints length didnt change

    if (offset === 0) {
      return index;
    } // label behind new/removed bendpoint


    if (index >= bendpointIndex) {
      newIndex = insert ? index + 1 : index - 1;
    } // label before new/removed bendpoint


    if (index < bendpointIndex) {
      newIndex = index; // decide label should take right or left segment

      if (insert && attachment.type !== 'bendpoint' && bendpointIndex - 1 === index) {
        var rel = relativePositionMidWaypoint(newWaypoints, bendpointIndex);

        if (rel < attachment.relativeLocation) {
          newIndex++;
        }
      }
    }

    return newIndex;
  } // start/end changed


  if (offset === 0) {
    return index;
  }

  if (hints.connectionStart) {
    return index === 0 ? 0 : null;
  }

  if (hints.connectionEnd) {
    return index === oldWaypoints.length - 2 ? newWaypoints.length - 2 : null;
  } // if nothing fits, return null


  return null;
}
/**
 * Calculate the required adjustment (move delta) for the given label
 * after the connection waypoints got updated.
 *
 * @param {djs.model.Label} label
 * @param {Array<Point>} newWaypoints
 * @param {Array<Point>} oldWaypoints
 * @param {Object} hints
 *
 * @return {Point} delta
 */

function getLabelAdjustment(label, newWaypoints, oldWaypoints, hints) {
  var x = 0,
      y = 0;
  var labelPosition = getLabelMid(label); // get closest attachment

  var attachment = Object(_LineAttachmentUtil__WEBPACK_IMPORTED_MODULE_1__["getAttachment"])(labelPosition, oldWaypoints),
      oldLabelLineIndex = attachment.segmentIndex,
      newLabelLineIndex = findNewLabelLineStartIndex(oldWaypoints, newWaypoints, attachment, hints);

  if (newLabelLineIndex === null) {
    return {
      x: x,
      y: y
    };
  } // should never happen
  // TODO(@janstuemmel): throw an error here when connectionSegmentMove is refactored


  if (newLabelLineIndex < 0 || newLabelLineIndex > newWaypoints.length - 2) {
    return {
      x: x,
      y: y
    };
  }

  var oldLabelLine = getLine(oldWaypoints, oldLabelLineIndex),
      newLabelLine = getLine(newWaypoints, newLabelLineIndex),
      oldFoot = attachment.position;
  var relativeFootPosition = getRelativeFootPosition(oldLabelLine, oldFoot),
      angleDelta = getAngleDelta(oldLabelLine, newLabelLine); // special rule if label on bendpoint

  if (attachment.type === 'bendpoint') {
    var offset = newWaypoints.length - oldWaypoints.length,
        oldBendpointIndex = attachment.bendpointIndex,
        oldBendpoint = oldWaypoints[oldBendpointIndex]; // bendpoint position hasn't changed, return same position

    if (newWaypoints.indexOf(oldBendpoint) !== -1) {
      return {
        x: x,
        y: y
      };
    } // new bendpoint and old bendpoint have same index, then just return the offset


    if (offset === 0) {
      var newBendpoint = newWaypoints[oldBendpointIndex];
      return {
        x: newBendpoint.x - attachment.position.x,
        y: newBendpoint.y - attachment.position.y
      };
    } // if bendpoints get removed


    if (offset < 0 && oldBendpointIndex !== 0 && oldBendpointIndex < oldWaypoints.length - 1) {
      relativeFootPosition = relativePositionMidWaypoint(oldWaypoints, oldBendpointIndex);
    }
  }

  var newFoot = {
    x: (newLabelLine[1].x - newLabelLine[0].x) * relativeFootPosition + newLabelLine[0].x,
    y: (newLabelLine[1].y - newLabelLine[0].y) * relativeFootPosition + newLabelLine[0].y
  }; // the rotated vector to label

  var newLabelVector = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["rotateVector"])({
    x: labelPosition.x - oldFoot.x,
    y: labelPosition.y - oldFoot.y
  }, angleDelta); // the new relative position

  x = newFoot.x + newLabelVector.x - labelPosition.x;
  y = newFoot.y + newLabelVector.y - labelPosition.y;
  return Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["roundPoint"])({
    x: x,
    y: y
  });
} // HELPERS //////////////////////

function relativePositionMidWaypoint(waypoints, idx) {
  var distanceSegment1 = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["getDistancePointPoint"])(waypoints[idx - 1], waypoints[idx]),
      distanceSegment2 = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["getDistancePointPoint"])(waypoints[idx], waypoints[idx + 1]);
  var relativePosition = distanceSegment1 / (distanceSegment1 + distanceSegment2);
  return relativePosition;
}

function getLabelMid(label) {
  return {
    x: label.x + label.width / 2,
    y: label.y + label.height / 2
  };
}

function getAngleDelta(l1, l2) {
  var a1 = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["getAngle"])(l1),
      a2 = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["getAngle"])(l2);
  return a2 - a1;
}

function getLine(waypoints, idx) {
  return [waypoints[idx], waypoints[idx + 1]];
}

function getRelativeFootPosition(line, foot) {
  var length = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["getDistancePointPoint"])(line[0], line[1]),
      lengthToFoot = Object(_GeometricUtil__WEBPACK_IMPORTED_MODULE_0__["getDistancePointPoint"])(line[0], foot);
  return length === 0 ? 0 : lengthToFoot / length;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineAttachmentUtil.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineAttachmentUtil.js ***!
  \****************************************************************************************/
/*! exports provided: getAttachment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttachment", function() { return getAttachment; });
var sqrt = Math.sqrt,
    min = Math.min,
    max = Math.max,
    abs = Math.abs;
/**
 * Calculate the square (power to two) of a number.
 *
 * @param {Number} n
 *
 * @return {Number}
 */

function sq(n) {
  return Math.pow(n, 2);
}
/**
 * Get distance between two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 *
 * @return {Number}
 */


function getDistance(p1, p2) {
  return sqrt(sq(p1.x - p2.x) + sq(p1.y - p2.y));
}
/**
 * Return the attachment of the given point on the specified line.
 *
 * The attachment is either a bendpoint (attached to the given point)
 * or segment (attached to a location on a line segment) attachment:
 *
 * ```javascript
 * var pointAttachment = {
 *   type: 'bendpoint',
 *   bendpointIndex: 3,
 *   position: { x: 10, y: 10 } // the attach point on the line
 * };
 *
 * var segmentAttachment = {
 *   type: 'segment',
 *   segmentIndex: 2,
 *   relativeLocation: 0.31, // attach point location between 0 (at start) and 1 (at end)
 *   position: { x: 10, y: 10 } // the attach point on the line
 * };
 * ```
 *
 * @param {Point} point
 * @param {Array<Point>} line
 *
 * @return {Object} attachment
 */


function getAttachment(point, line) {
  var idx = 0,
      segmentStart,
      segmentEnd,
      segmentStartDistance,
      segmentEndDistance,
      attachmentPosition,
      minDistance,
      intersections,
      attachment,
      attachmentDistance,
      closestAttachmentDistance,
      closestAttachment;

  for (idx = 0; idx < line.length - 1; idx++) {
    segmentStart = line[idx];
    segmentEnd = line[idx + 1];

    if (pointsEqual(segmentStart, segmentEnd)) {
      intersections = [segmentStart];
    } else {
      segmentStartDistance = getDistance(point, segmentStart);
      segmentEndDistance = getDistance(point, segmentEnd);
      minDistance = min(segmentStartDistance, segmentEndDistance);
      intersections = getCircleSegmentIntersections(segmentStart, segmentEnd, point, minDistance);
    }

    if (intersections.length < 1) {
      throw new Error('expected between [1, 2] circle -> line intersections');
    } // one intersection -> bendpoint attachment


    if (intersections.length === 1) {
      attachment = {
        type: 'bendpoint',
        position: intersections[0],
        segmentIndex: idx,
        bendpointIndex: pointsEqual(segmentStart, intersections[0]) ? idx : idx + 1
      };
    } // two intersections -> segment attachment


    if (intersections.length === 2) {
      attachmentPosition = mid(intersections[0], intersections[1]);
      attachment = {
        type: 'segment',
        position: attachmentPosition,
        segmentIndex: idx,
        relativeLocation: getDistance(segmentStart, attachmentPosition) / getDistance(segmentStart, segmentEnd)
      };
    }

    attachmentDistance = getDistance(attachment.position, point);

    if (!closestAttachment || closestAttachmentDistance > attachmentDistance) {
      closestAttachment = attachment;
      closestAttachmentDistance = attachmentDistance;
    }
  }

  return closestAttachment;
}
/**
 * Gets the intersection between a circle and a line segment.
 *
 * @param {Point} s1 segment start
 * @param {Point} s2 segment end
 * @param {Point} cc circle center
 * @param {Number} cr circle radius
 *
 * @return {Array<Point>} intersections
 */

function getCircleSegmentIntersections(s1, s2, cc, cr) {
  var baX = s2.x - s1.x;
  var baY = s2.y - s1.y;
  var caX = cc.x - s1.x;
  var caY = cc.y - s1.y;
  var a = baX * baX + baY * baY;
  var bBy2 = baX * caX + baY * caY;
  var c = caX * caX + caY * caY - cr * cr;
  var pBy2 = bBy2 / a;
  var q = c / a;
  var disc = pBy2 * pBy2 - q; // check against negative value to work around
  // negative, very close to zero results (-4e-15)
  // being produced in some environments

  if (disc < 0 && disc > -0.000001) {
    disc = 0;
  }

  if (disc < 0) {
    return [];
  } // if disc == 0 ... dealt with later


  var tmpSqrt = sqrt(disc);
  var abScalingFactor1 = -pBy2 + tmpSqrt;
  var abScalingFactor2 = -pBy2 - tmpSqrt;
  var i1 = {
    x: s1.x - baX * abScalingFactor1,
    y: s1.y - baY * abScalingFactor1
  };

  if (disc === 0) {
    // abScalingFactor1 == abScalingFactor2
    return [i1];
  }

  var i2 = {
    x: s1.x - baX * abScalingFactor2,
    y: s1.y - baY * abScalingFactor2
  }; // return only points on line segment

  return [i1, i2].filter(function (p) {
    return isPointInSegment(p, s1, s2);
  });
}

function isPointInSegment(p, segmentStart, segmentEnd) {
  return fenced(p.x, segmentStart.x, segmentEnd.x) && fenced(p.y, segmentStart.y, segmentEnd.y);
}

function fenced(n, rangeStart, rangeEnd) {
  // use matching threshold to work around
  // precision errors in intersection computation
  return n >= min(rangeStart, rangeEnd) - EQUAL_THRESHOLD && n <= max(rangeStart, rangeEnd) + EQUAL_THRESHOLD;
}
/**
 * Calculate mid of two points.
 *
 * @param {Point} p1
 * @param {Point} p2
 *
 * @return {Point}
 */


function mid(p1, p2) {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2
  };
}

var EQUAL_THRESHOLD = 0.1;

function pointsEqual(p1, p2) {
  return abs(p1.x - p2.x) <= EQUAL_THRESHOLD && abs(p1.y - p2.y) <= EQUAL_THRESHOLD;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineIntersect.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/util/LineIntersect.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lineIntersect; });
/**
 * Returns the intersection between two line segments a and b.
 *
 * @param {Point} l1s
 * @param {Point} l1e
 * @param {Point} l2s
 * @param {Point} l2e
 *
 * @return {Point}
 */
function lineIntersect(l1s, l1e, l2s, l2e) {
  // if the lines intersect, the result contains the x and y of the
  // intersection (treating the lines as infinite) and booleans for
  // whether line segment 1 or line segment 2 contain the point
  var denominator, a, b, c, numerator;
  denominator = (l2e.y - l2s.y) * (l1e.x - l1s.x) - (l2e.x - l2s.x) * (l1e.y - l1s.y);

  if (denominator == 0) {
    return null;
  }

  a = l1s.y - l2s.y;
  b = l1s.x - l2s.x;
  numerator = (l2e.x - l2s.x) * a - (l2e.y - l2s.y) * b;
  c = numerator / denominator; // if we cast these lines infinitely in
  // both directions, they intersect here

  return {
    x: Math.round(l1s.x + c * (l1e.x - l1s.x)),
    y: Math.round(l1s.y + c * (l1e.y - l1s.y))
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/behavior/util/ResizeUtil.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/behavior/util/ResizeUtil.js ***!
  \********************************************************************************/
/*! exports provided: getParticipantResizeConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticipantResizeConstraints", function() { return getParticipantResizeConstraints; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modeling/util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");



var abs = Math.abs,
    min = Math.min,
    max = Math.max;

function addToTrbl(trbl, attr, value, choice) {
  var current = trbl[attr]; // make sure to set the value if it does not exist
  // or apply the correct value by comparing against
  // choice(value, currentValue)

  trbl[attr] = current === undefined ? value : choice(value, current);
}

function addMin(trbl, attr, value) {
  return addToTrbl(trbl, attr, value, min);
}

function addMax(trbl, attr, value) {
  return addToTrbl(trbl, attr, value, max);
}

var LANE_MIN_HEIGHT = 60,
    LANE_MIN_WIDTH = 300,
    LANE_RIGHT_PADDING = 20,
    LANE_LEFT_PADDING = 50,
    LANE_TOP_PADDING = 20,
    LANE_BOTTOM_PADDING = 20;
function getParticipantResizeConstraints(laneShape, resizeDirection, balanced) {
  var lanesRoot = Object(_modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["getLanesRoot"])(laneShape);
  var isFirst = true,
      isLast = true; // max top/bottom size for lanes

  var allLanes = Object(_modeling_util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["collectLanes"])(lanesRoot, [lanesRoot]);
  var laneTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["asTRBL"])(laneShape);
  var maxTrbl = {},
      minTrbl = {};

  if (/e/.test(resizeDirection)) {
    minTrbl.right = laneTrbl.left + LANE_MIN_WIDTH;
  } else if (/w/.test(resizeDirection)) {
    minTrbl.left = laneTrbl.right - LANE_MIN_WIDTH;
  }

  allLanes.forEach(function (other) {
    var otherTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["asTRBL"])(other);

    if (/n/.test(resizeDirection)) {
      if (otherTrbl.top < laneTrbl.top - 10) {
        isFirst = false;
      } // max top size (based on next element)


      if (balanced && abs(laneTrbl.top - otherTrbl.bottom) < 10) {
        addMax(maxTrbl, 'top', otherTrbl.top + LANE_MIN_HEIGHT);
      } // min top size (based on self or nested element)


      if (abs(laneTrbl.top - otherTrbl.top) < 5) {
        addMin(minTrbl, 'top', otherTrbl.bottom - LANE_MIN_HEIGHT);
      }
    }

    if (/s/.test(resizeDirection)) {
      if (otherTrbl.bottom > laneTrbl.bottom + 10) {
        isLast = false;
      } // max bottom size (based on previous element)


      if (balanced && abs(laneTrbl.bottom - otherTrbl.top) < 10) {
        addMin(maxTrbl, 'bottom', otherTrbl.bottom - LANE_MIN_HEIGHT);
      } // min bottom size (based on self or nested element)


      if (abs(laneTrbl.bottom - otherTrbl.bottom) < 5) {
        addMax(minTrbl, 'bottom', otherTrbl.top + LANE_MIN_HEIGHT);
      }
    }
  }); // max top/bottom/left/right size based on flow nodes

  var flowElements = lanesRoot.children.filter(function (s) {
    return !s.hidden && !s.waypoints && (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(s, 'bpmn:FlowElement') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(s, 'bpmn:Artifact'));
  });
  flowElements.forEach(function (flowElement) {
    var flowElementTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_1__["asTRBL"])(flowElement);

    if (isFirst && /n/.test(resizeDirection)) {
      addMin(minTrbl, 'top', flowElementTrbl.top - LANE_TOP_PADDING);
    }

    if (/e/.test(resizeDirection)) {
      addMax(minTrbl, 'right', flowElementTrbl.right + LANE_RIGHT_PADDING);
    }

    if (isLast && /s/.test(resizeDirection)) {
      addMax(minTrbl, 'bottom', flowElementTrbl.bottom + LANE_BOTTOM_PADDING);
    }

    if (/w/.test(resizeDirection)) {
      addMin(minTrbl, 'left', flowElementTrbl.left - LANE_LEFT_PADDING);
    }
  });
  return {
    min: minTrbl,
    max: maxTrbl
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/AddLaneHandler.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/AddLaneHandler.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddLaneHandler; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "diagram-js/lib/util/Elements");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");



/**
 * A handler that allows us to add a new lane
 * above or below an existing one.
 *
 * @param {Modeling} modeling
 */

function AddLaneHandler(modeling, spaceTool) {
  this._modeling = modeling;
  this._spaceTool = spaceTool;
}
AddLaneHandler.$inject = ['modeling', 'spaceTool'];

AddLaneHandler.prototype.preExecute = function (context) {
  var spaceTool = this._spaceTool,
      modeling = this._modeling;
  var shape = context.shape,
      location = context.location;
  var lanesRoot = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["getLanesRoot"])(shape);
  var isRoot = lanesRoot === shape,
      laneParent = isRoot ? shape : shape.parent;
  var existingChildLanes = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["getChildLanes"])(laneParent); // (0) add a lane if we currently got none and are adding to root

  if (!existingChildLanes.length) {
    modeling.createShape({
      type: 'bpmn:Lane'
    }, {
      x: shape.x + _util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["LANE_INDENTATION"],
      y: shape.y,
      width: shape.width - _util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["LANE_INDENTATION"],
      height: shape.height
    }, laneParent);
  } // (1) collect affected elements to create necessary space


  var allAffected = [];
  Object(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_1__["eachElement"])(lanesRoot, function (element) {
    allAffected.push(element);

    if (element === shape) {
      return [];
    }

    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(element.children, function (c) {
      return c !== shape;
    });
  });
  var offset = location === 'top' ? -120 : 120,
      lanePosition = location === 'top' ? shape.y : shape.y + shape.height,
      spacePos = lanePosition + (location === 'top' ? 10 : -10),
      direction = location === 'top' ? 'n' : 's';
  var adjustments = spaceTool.calculateAdjustments(allAffected, 'y', offset, spacePos);
  spaceTool.makeSpace(adjustments.movingShapes, adjustments.resizingShapes, {
    x: 0,
    y: offset
  }, direction); // (2) create new lane at open space

  context.newLane = modeling.createShape({
    type: 'bpmn:Lane'
  }, {
    x: shape.x + (isRoot ? _util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["LANE_INDENTATION"] : 0),
    y: lanePosition - (location === 'top' ? 120 : 0),
    width: shape.width - (isRoot ? _util_LaneUtil__WEBPACK_IMPORTED_MODULE_2__["LANE_INDENTATION"] : 0),
    height: 120
  }, laneParent);
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/IdClaimHandler.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/IdClaimHandler.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdClaimHandler; });
function IdClaimHandler(moddle) {
  this._moddle = moddle;
}
IdClaimHandler.$inject = ['moddle'];

IdClaimHandler.prototype.execute = function (context) {
  var ids = this._moddle.ids,
      id = context.id,
      element = context.element,
      claiming = context.claiming;

  if (claiming) {
    ids.claim(id, element);
  } else {
    ids.unclaim(id);
  }
};
/**
 * Command revert implementation.
 */


IdClaimHandler.prototype.revert = function (context) {
  var ids = this._moddle.ids,
      id = context.id,
      element = context.element,
      claiming = context.claiming;

  if (claiming) {
    ids.unclaim(id);
  } else {
    ids.claim(id, element);
  }
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/ResizeLaneHandler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/ResizeLaneHandler.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeLaneHandler; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_LaneUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Elements */ "diagram-js/lib/util/Elements");
/* harmony import */ var diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/features/resize/ResizeUtil */ "diagram-js/lib/features/resize/ResizeUtil");
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_4__);





/**
 * A handler that resizes a lane.
 *
 * @param {Modeling} modeling
 */

function ResizeLaneHandler(modeling, spaceTool) {
  this._modeling = modeling;
  this._spaceTool = spaceTool;
}
ResizeLaneHandler.$inject = ['modeling', 'spaceTool'];

ResizeLaneHandler.prototype.preExecute = function (context) {
  var shape = context.shape,
      newBounds = context.newBounds,
      balanced = context.balanced;

  if (balanced !== false) {
    this.resizeBalanced(shape, newBounds);
  } else {
    this.resizeSpace(shape, newBounds);
  }
};
/**
 * Resize balanced, adjusting next / previous lane sizes.
 *
 * @param {djs.model.Shape} shape
 * @param {Bounds} newBounds
 */


ResizeLaneHandler.prototype.resizeBalanced = function (shape, newBounds) {
  var modeling = this._modeling;
  var resizeNeeded = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_1__["computeLanesResize"])(shape, newBounds); // resize the lane

  modeling.resizeShape(shape, newBounds); // resize other lanes as needed

  resizeNeeded.forEach(function (r) {
    modeling.resizeShape(r.shape, r.newBounds);
  });
};
/**
 * Resize, making actual space and moving below / above elements.
 *
 * @param {djs.model.Shape} shape
 * @param {Bounds} newBounds
 */


ResizeLaneHandler.prototype.resizeSpace = function (shape, newBounds) {
  var spaceTool = this._spaceTool;
  var shapeTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__["asTRBL"])(shape),
      newTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__["asTRBL"])(newBounds);
  var trblDiff = Object(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_4__["substractTRBL"])(newTrbl, shapeTrbl);
  var lanesRoot = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_1__["getLanesRoot"])(shape);
  var allAffected = [],
      allLanes = [];
  Object(diagram_js_lib_util_Elements__WEBPACK_IMPORTED_MODULE_2__["eachElement"])(lanesRoot, function (element) {
    allAffected.push(element);

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Lane') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Participant')) {
      allLanes.push(element);
    }

    return element.children;
  });
  var change, spacePos, direction, offset, adjustments;

  if (trblDiff.bottom || trblDiff.top) {
    change = trblDiff.bottom || trblDiff.top;
    spacePos = shape.y + (trblDiff.bottom ? shape.height : 0) + (trblDiff.bottom ? -10 : 10);
    direction = trblDiff.bottom ? 's' : 'n';
    offset = trblDiff.top > 0 || trblDiff.bottom < 0 ? -change : change;
    adjustments = spaceTool.calculateAdjustments(allAffected, 'y', offset, spacePos);
    spaceTool.makeSpace(adjustments.movingShapes, adjustments.resizingShapes, {
      x: 0,
      y: change
    }, direction);
  }

  if (trblDiff.left || trblDiff.right) {
    change = trblDiff.right || trblDiff.left;
    spacePos = shape.x + (trblDiff.right ? shape.width : 0) + (trblDiff.right ? -10 : 100);
    direction = trblDiff.right ? 'e' : 'w';
    offset = trblDiff.left > 0 || trblDiff.right < 0 ? -change : change;
    adjustments = spaceTool.calculateAdjustments(allLanes, 'x', offset, spacePos);
    spaceTool.makeSpace(adjustments.movingShapes, adjustments.resizingShapes, {
      x: change,
      y: 0
    }, direction);
  }
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/SetColorHandler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/SetColorHandler.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetColorHandler; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_COLORS = {
  fill: undefined,
  stroke: undefined
};
function SetColorHandler(commandStack) {
  this._commandStack = commandStack;
}
SetColorHandler.$inject = ['commandStack'];

SetColorHandler.prototype.postExecute = function (context) {
  var elements = context.elements,
      colors = context.colors || DEFAULT_COLORS;
  var self = this;
  var di = {};

  if ('fill' in colors) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(di, {
      fill: colors.fill
    });
  }

  if ('stroke' in colors) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(di, {
      stroke: colors.stroke
    });
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(elements, function (element) {
    self._commandStack.execute('element.updateProperties', {
      element: element,
      properties: {
        di: di
      }
    });
  });
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/SplitLaneHandler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/SplitLaneHandler.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitLaneHandler; });
/* harmony import */ var _util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");

/**
 * A handler that splits a lane into a number of sub-lanes,
 * creating new sub lanes, if necessary.
 *
 * @param {Modeling} modeling
 */

function SplitLaneHandler(modeling, translate) {
  this._modeling = modeling;
  this._translate = translate;
}
SplitLaneHandler.$inject = ['modeling', 'translate'];

SplitLaneHandler.prototype.preExecute = function (context) {
  var modeling = this._modeling,
      translate = this._translate;
  var shape = context.shape,
      newLanesCount = context.count;
  var childLanes = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getChildLanes"])(shape),
      existingLanesCount = childLanes.length;

  if (existingLanesCount > newLanesCount) {
    throw new Error(translate('more than {count} child lanes', {
      count: newLanesCount
    }));
  }

  var newLanesHeight = Math.round(shape.height / newLanesCount); // Iterate from top to bottom in child lane order,
  // resizing existing lanes and creating new ones
  // so that they split the parent proportionally.
  //
  // Due to rounding related errors, the bottom lane
  // needs to take up all the remaining space.

  var laneY, laneHeight, laneBounds, newLaneAttrs, idx;

  for (idx = 0; idx < newLanesCount; idx++) {
    laneY = shape.y + idx * newLanesHeight; // if bottom lane

    if (idx === newLanesCount - 1) {
      laneHeight = shape.height - newLanesHeight * idx;
    } else {
      laneHeight = newLanesHeight;
    }

    laneBounds = {
      x: shape.x + _util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["LANE_INDENTATION"],
      y: laneY,
      width: shape.width - _util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["LANE_INDENTATION"],
      height: laneHeight
    };

    if (idx < existingLanesCount) {
      // resize existing lane
      modeling.resizeShape(childLanes[idx], laneBounds);
    } else {
      // create a new lane at position
      newLaneAttrs = {
        type: 'bpmn:Lane'
      };
      modeling.createShape(newLaneAttrs, laneBounds, shape);
    }
  }
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateCanvasRootHandler.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateCanvasRootHandler.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateCanvasRootHandler; });
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__);

function UpdateCanvasRootHandler(canvas, modeling) {
  this._canvas = canvas;
  this._modeling = modeling;
}
UpdateCanvasRootHandler.$inject = ['canvas', 'modeling'];

UpdateCanvasRootHandler.prototype.execute = function (context) {
  var canvas = this._canvas;
  var newRoot = context.newRoot,
      newRootBusinessObject = newRoot.businessObject,
      oldRoot = canvas.getRootElement(),
      oldRootBusinessObject = oldRoot.businessObject,
      bpmnDefinitions = oldRootBusinessObject.$parent,
      diPlane = oldRootBusinessObject.di; // (1) replace process old <> new root

  canvas.setRootElement(newRoot, true); // (2) update root elements

  Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__["add"])(bpmnDefinitions.rootElements, newRootBusinessObject);
  newRootBusinessObject.$parent = bpmnDefinitions;
  Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__["remove"])(bpmnDefinitions.rootElements, oldRootBusinessObject);
  oldRootBusinessObject.$parent = null; // (3) wire di

  oldRootBusinessObject.di = null;
  diPlane.bpmnElement = newRootBusinessObject;
  newRootBusinessObject.di = diPlane;
  context.oldRoot = oldRoot; // TODO(nikku): return changed elements?
  // return [ newRoot, oldRoot ];
};

UpdateCanvasRootHandler.prototype.revert = function (context) {
  var canvas = this._canvas;
  var newRoot = context.newRoot,
      newRootBusinessObject = newRoot.businessObject,
      oldRoot = context.oldRoot,
      oldRootBusinessObject = oldRoot.businessObject,
      bpmnDefinitions = newRootBusinessObject.$parent,
      diPlane = newRootBusinessObject.di; // (1) replace process old <> new root

  canvas.setRootElement(oldRoot, true); // (2) update root elements

  Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__["remove"])(bpmnDefinitions.rootElements, newRootBusinessObject);
  newRootBusinessObject.$parent = null;
  Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_0__["add"])(bpmnDefinitions.rootElements, oldRootBusinessObject);
  oldRootBusinessObject.$parent = bpmnDefinitions; // (3) wire di

  newRootBusinessObject.di = null;
  diPlane.bpmnElement = oldRootBusinessObject;
  oldRootBusinessObject.di = diPlane; // TODO(nikku): return changed elements?
  // return [ newRoot, oldRoot ];
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateFlowNodeRefsHandler.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateFlowNodeRefsHandler.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateFlowNodeRefsHandler; });
/* harmony import */ var _util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/LaneUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/util/Collections */ "diagram-js/lib/util/Collections");
/* harmony import */ var diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__);




var FLOW_NODE_REFS_ATTR = 'flowNodeRef',
    LANES_ATTR = 'lanes';
/**
 * A handler that updates lane refs on changed elements
 */

function UpdateFlowNodeRefsHandler(elementRegistry) {
  this._elementRegistry = elementRegistry;
}
UpdateFlowNodeRefsHandler.$inject = ['elementRegistry'];

UpdateFlowNodeRefsHandler.prototype.computeUpdates = function (flowNodeShapes, laneShapes) {
  var handledNodes = [];
  var updates = [];
  var participantCache = {};
  var allFlowNodeShapes = [];

  function isInLaneShape(element, laneShape) {
    var laneTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__["asTRBL"])(laneShape);
    var elementMid = {
      x: element.x + element.width / 2,
      y: element.y + element.height / 2
    };
    return elementMid.x > laneTrbl.left && elementMid.x < laneTrbl.right && elementMid.y > laneTrbl.top && elementMid.y < laneTrbl.bottom;
  }

  function addFlowNodeShape(flowNodeShape) {
    if (handledNodes.indexOf(flowNodeShape) === -1) {
      allFlowNodeShapes.push(flowNodeShape);
      handledNodes.push(flowNodeShape);
    }
  }

  function getAllLaneShapes(flowNodeShape) {
    var root = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(flowNodeShape);

    if (!participantCache[root.id]) {
      participantCache[root.id] = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["collectLanes"])(root);
    }

    return participantCache[root.id];
  }

  function getNewLanes(flowNodeShape) {
    if (!flowNodeShape.parent) {
      return [];
    }

    var allLaneShapes = getAllLaneShapes(flowNodeShape);
    return allLaneShapes.filter(function (l) {
      return isInLaneShape(flowNodeShape, l);
    }).map(function (shape) {
      return shape.businessObject;
    });
  }

  laneShapes.forEach(function (laneShape) {
    var root = Object(_util_LaneUtil__WEBPACK_IMPORTED_MODULE_0__["getLanesRoot"])(laneShape);

    if (!root || handledNodes.indexOf(root) !== -1) {
      return;
    }

    var children = root.children.filter(function (c) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(c, 'bpmn:FlowNode');
    });
    children.forEach(addFlowNodeShape);
    handledNodes.push(root);
  });
  flowNodeShapes.forEach(addFlowNodeShape);
  allFlowNodeShapes.forEach(function (flowNodeShape) {
    var flowNode = flowNodeShape.businessObject;
    var lanes = flowNode.get(LANES_ATTR),
        remove = lanes.slice(),
        add = getNewLanes(flowNodeShape);
    updates.push({
      flowNode: flowNode,
      remove: remove,
      add: add
    });
  });
  laneShapes.forEach(function (laneShape) {
    var lane = laneShape.businessObject; // lane got removed XX-)

    if (!laneShape.parent) {
      lane.get(FLOW_NODE_REFS_ATTR).forEach(function (flowNode) {
        updates.push({
          flowNode: flowNode,
          remove: [lane],
          add: []
        });
      });
    }
  });
  return updates;
};

UpdateFlowNodeRefsHandler.prototype.execute = function (context) {
  var updates = context.updates;

  if (!updates) {
    updates = context.updates = this.computeUpdates(context.flowNodeShapes, context.laneShapes);
  }

  updates.forEach(function (update) {
    var flowNode = update.flowNode,
        lanes = flowNode.get(LANES_ATTR); // unwire old

    update.remove.forEach(function (oldLane) {
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(lanes, oldLane);
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(oldLane.get(FLOW_NODE_REFS_ATTR), flowNode);
    }); // wire new

    update.add.forEach(function (newLane) {
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(lanes, newLane);
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(newLane.get(FLOW_NODE_REFS_ATTR), flowNode);
    });
  }); // TODO(nikku): return changed elements
  // return [ ... ];
};

UpdateFlowNodeRefsHandler.prototype.revert = function (context) {
  var updates = context.updates;
  updates.forEach(function (update) {
    var flowNode = update.flowNode,
        lanes = flowNode.get(LANES_ATTR); // unwire new

    update.add.forEach(function (newLane) {
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(lanes, newLane);
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["remove"])(newLane.get(FLOW_NODE_REFS_ATTR), flowNode);
    }); // wire old

    update.remove.forEach(function (oldLane) {
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(lanes, oldLane);
      Object(diagram_js_lib_util_Collections__WEBPACK_IMPORTED_MODULE_2__["add"])(oldLane.get(FLOW_NODE_REFS_ATTR), flowNode);
    });
  }); // TODO(nikku): return changed elements
  // return [ ... ];
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdatePropertiesHandler.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/UpdatePropertiesHandler.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdatePropertiesHandler; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");


var DEFAULT_FLOW = 'default',
    ID = 'id',
    DI = 'di';
var NULL_DIMENSIONS = {
  width: 0,
  height: 0
};
/**
 * A handler that implements a BPMN 2.0 property update.
 *
 * This should be used to set simple properties on elements with
 * an underlying BPMN business object.
 *
 * Use respective diagram-js provided handlers if you would
 * like to perform automated modeling.
 */

function UpdatePropertiesHandler(elementRegistry, moddle, translate, modeling, textRenderer) {
  this._elementRegistry = elementRegistry;
  this._moddle = moddle;
  this._translate = translate;
  this._modeling = modeling;
  this._textRenderer = textRenderer;
}
UpdatePropertiesHandler.$inject = ['elementRegistry', 'moddle', 'translate', 'modeling', 'textRenderer']; // api //////////////////////

/**
 * Updates a BPMN element with a list of new properties
 *
 * @param {Object} context
 * @param {djs.model.Base} context.element the element to update
 * @param {Object} context.properties a list of properties to set on the element's
 *                                    businessObject (the BPMN model element)
 *
 * @return {Array<djs.model.Base>} the updated element
 */

UpdatePropertiesHandler.prototype.execute = function (context) {
  var element = context.element,
      changed = [element],
      translate = this._translate;

  if (!element) {
    throw new Error(translate('element required'));
  }

  var elementRegistry = this._elementRegistry,
      ids = this._moddle.ids;
  var businessObject = element.businessObject,
      properties = unwrapBusinessObjects(context.properties),
      oldProperties = context.oldProperties || getProperties(businessObject, properties);

  if (isIdChange(properties, businessObject)) {
    ids.unclaim(businessObject[ID]);
    elementRegistry.updateId(element, properties[ID]);
    ids.claim(properties[ID], businessObject);
  } // correctly indicate visual changes on default flow updates


  if (DEFAULT_FLOW in properties) {
    if (properties[DEFAULT_FLOW]) {
      changed.push(elementRegistry.get(properties[DEFAULT_FLOW].id));
    }

    if (businessObject[DEFAULT_FLOW]) {
      changed.push(elementRegistry.get(businessObject[DEFAULT_FLOW].id));
    }
  } // update properties


  setProperties(businessObject, properties); // store old values

  context.oldProperties = oldProperties;
  context.changed = changed; // indicate changed on objects affected by the update

  return changed;
};

UpdatePropertiesHandler.prototype.postExecute = function (context) {
  var element = context.element,
      label = element.label;
  var text = label && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["getBusinessObject"])(label).name;

  if (!text) {
    return;
  } // get layouted text bounds and resize external
  // external label accordingly


  var newLabelBounds = this._textRenderer.getExternalLabelBounds(label, text);

  this._modeling.resizeShape(label, newLabelBounds, NULL_DIMENSIONS);
};
/**
 * Reverts the update on a BPMN elements properties.
 *
 * @param  {Object} context
 *
 * @return {djs.model.Base} the updated element
 */


UpdatePropertiesHandler.prototype.revert = function (context) {
  var element = context.element,
      properties = context.properties,
      oldProperties = context.oldProperties,
      businessObject = element.businessObject,
      elementRegistry = this._elementRegistry,
      ids = this._moddle.ids; // update properties

  setProperties(businessObject, oldProperties);

  if (isIdChange(properties, businessObject)) {
    ids.unclaim(properties[ID]);
    elementRegistry.updateId(element, oldProperties[ID]);
    ids.claim(oldProperties[ID], businessObject);
  }

  return context.changed;
};

function isIdChange(properties, businessObject) {
  return ID in properties && properties[ID] !== businessObject[ID];
}

function getProperties(businessObject, properties) {
  var propertyNames = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["keys"])(properties);
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(propertyNames, function (result, key) {
    // handle DI separately
    if (key !== DI) {
      result[key] = businessObject.get(key);
    } else {
      result[key] = getDiProperties(businessObject.di, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["keys"])(properties.di));
    }

    return result;
  }, {});
}

function getDiProperties(di, propertyNames) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(propertyNames, function (result, key) {
    result[key] = di.get(key);
    return result;
  }, {});
}

function setProperties(businessObject, properties) {
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(properties, function (value, key) {
    if (key !== DI) {
      businessObject.set(key, value);
    } else {
      // only update, if businessObject.di exists
      if (businessObject.di) {
        setDiProperties(businessObject.di, value);
      }
    }
  });
}

function setDiProperties(di, properties) {
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(properties, function (value, key) {
    di.set(key, value);
  });
}

var referencePropertyNames = ['default'];
/**
 * Make sure we unwrap the actual business object
 * behind diagram element that may have been
 * passed as arguments.
 *
 * @param  {Object} properties
 *
 * @return {Object} unwrappedProps
 */

function unwrapBusinessObjects(properties) {
  var unwrappedProps = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, properties);
  referencePropertyNames.forEach(function (name) {
    if (name in properties) {
      unwrappedProps[name] = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["getBusinessObject"])(unwrappedProps[name]);
    }
  });
  return unwrappedProps;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateSemanticParentHandler.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/cmd/UpdateSemanticParentHandler.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateSemanticParentHandler; });
function UpdateSemanticParentHandler(bpmnUpdater) {
  this._bpmnUpdater = bpmnUpdater;
}
UpdateSemanticParentHandler.$inject = ['bpmnUpdater'];

UpdateSemanticParentHandler.prototype.execute = function (context) {
  var dataStoreBo = context.dataStoreBo,
      newSemanticParent = context.newSemanticParent,
      newDiParent = context.newDiParent;
  context.oldSemanticParent = dataStoreBo.$parent;
  context.oldDiParent = dataStoreBo.di.$parent; // update semantic parent

  this._bpmnUpdater.updateSemanticParent(dataStoreBo, newSemanticParent); // update DI parent


  this._bpmnUpdater.updateDiParent(dataStoreBo.di, newDiParent);
};

UpdateSemanticParentHandler.prototype.revert = function (context) {
  var dataStoreBo = context.dataStoreBo,
      oldSemanticParent = context.oldSemanticParent,
      oldDiParent = context.oldDiParent; // update semantic parent

  this._bpmnUpdater.updateSemanticParent(dataStoreBo, oldSemanticParent); // update DI parent


  this._bpmnUpdater.updateDiParent(dataStoreBo.di, oldDiParent);
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behavior */ "./node_modules/bpmn-js/lib/features/modeling/behavior/index.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules */ "./node_modules/bpmn-js/lib/features/rules/index.js");
/* harmony import */ var _ordering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ordering */ "./node_modules/bpmn-js/lib/features/ordering/index.js");
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../replace */ "./node_modules/bpmn-js/lib/features/replace/index.js");
/* harmony import */ var diagram_js_lib_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/command */ "diagram-js/lib/command");
/* harmony import */ var diagram_js_lib_command__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var diagram_js_lib_features_tooltips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! diagram-js/lib/features/tooltips */ "diagram-js/lib/features/tooltips");
/* harmony import */ var diagram_js_lib_features_tooltips__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_tooltips__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var diagram_js_lib_features_label_support__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/features/label-support */ "diagram-js/lib/features/label-support");
/* harmony import */ var diagram_js_lib_features_label_support__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_label_support__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var diagram_js_lib_features_attach_support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! diagram-js/lib/features/attach-support */ "diagram-js/lib/features/attach-support");
/* harmony import */ var diagram_js_lib_features_attach_support__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_attach_support__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! diagram-js/lib/features/selection */ "diagram-js/lib/features/selection");
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! diagram-js/lib/features/change-support */ "diagram-js/lib/features/change-support");
/* harmony import */ var diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! diagram-js/lib/features/space-tool */ "diagram-js/lib/features/space-tool");
/* harmony import */ var diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _BpmnFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BpmnFactory */ "./node_modules/bpmn-js/lib/features/modeling/BpmnFactory.js");
/* harmony import */ var _BpmnUpdater__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BpmnUpdater */ "./node_modules/bpmn-js/lib/features/modeling/BpmnUpdater.js");
/* harmony import */ var _ElementFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementFactory */ "./node_modules/bpmn-js/lib/features/modeling/ElementFactory.js");
/* harmony import */ var _Modeling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Modeling */ "./node_modules/bpmn-js/lib/features/modeling/Modeling.js");
/* harmony import */ var _BpmnLayouter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BpmnLayouter */ "./node_modules/bpmn-js/lib/features/modeling/BpmnLayouter.js");
/* harmony import */ var diagram_js_lib_layout_CroppingConnectionDocking__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! diagram-js/lib/layout/CroppingConnectionDocking */ "diagram-js/lib/layout/CroppingConnectionDocking");
/* harmony import */ var diagram_js_lib_layout_CroppingConnectionDocking__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_CroppingConnectionDocking__WEBPACK_IMPORTED_MODULE_16__);

















/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['modeling', 'bpmnUpdater'],
  __depends__: [_behavior__WEBPACK_IMPORTED_MODULE_0__["default"], _rules__WEBPACK_IMPORTED_MODULE_1__["default"], _ordering__WEBPACK_IMPORTED_MODULE_2__["default"], _replace__WEBPACK_IMPORTED_MODULE_3__["default"], diagram_js_lib_command__WEBPACK_IMPORTED_MODULE_4___default.a, diagram_js_lib_features_tooltips__WEBPACK_IMPORTED_MODULE_5___default.a, diagram_js_lib_features_label_support__WEBPACK_IMPORTED_MODULE_6___default.a, diagram_js_lib_features_attach_support__WEBPACK_IMPORTED_MODULE_7___default.a, diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_8___default.a, diagram_js_lib_features_change_support__WEBPACK_IMPORTED_MODULE_9___default.a, diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_10___default.a],
  bpmnFactory: ['type', _BpmnFactory__WEBPACK_IMPORTED_MODULE_11__["default"]],
  bpmnUpdater: ['type', _BpmnUpdater__WEBPACK_IMPORTED_MODULE_12__["default"]],
  elementFactory: ['type', _ElementFactory__WEBPACK_IMPORTED_MODULE_13__["default"]],
  modeling: ['type', _Modeling__WEBPACK_IMPORTED_MODULE_14__["default"]],
  layouter: ['type', _BpmnLayouter__WEBPACK_IMPORTED_MODULE_15__["default"]],
  connectionDocking: ['type', diagram_js_lib_layout_CroppingConnectionDocking__WEBPACK_IMPORTED_MODULE_16___default.a]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/util/LaneUtil.js ***!
  \*********************************************************************/
/*! exports provided: LANE_INDENTATION, collectLanes, getChildLanes, getLanesRoot, computeLanesResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANE_INDENTATION", function() { return LANE_INDENTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectLanes", function() { return collectLanes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildLanes", function() { return getChildLanes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanesRoot", function() { return getLanesRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLanesResize", function() { return computeLanesResize; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _ModelingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/features/resize/ResizeUtil */ "diagram-js/lib/features/resize/ResizeUtil");
/* harmony import */ var diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__);




var abs = Math.abs;

function getTRBLResize(oldBounds, newBounds) {
  return Object(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__["substractTRBL"])(Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(newBounds), Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(oldBounds));
}

var LANE_PARENTS = ['bpmn:Participant', 'bpmn:Process', 'bpmn:SubProcess'];
var LANE_INDENTATION = 30;
/**
 * Collect all lane shapes in the given paren
 *
 * @param  {djs.model.Shape} shape
 * @param  {Array<djs.model.Base>} [collectedShapes]
 *
 * @return {Array<djs.model.Base>}
 */

function collectLanes(shape, collectedShapes) {
  collectedShapes = collectedShapes || [];
  shape.children.filter(function (s) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(s, 'bpmn:Lane')) {
      collectLanes(s, collectedShapes);
      collectedShapes.push(s);
    }
  });
  return collectedShapes;
}
/**
 * Return the lane children of the given element.
 *
 * @param {djs.model.Shape} shape
 *
 * @return {Array<djs.model.Shape>}
 */

function getChildLanes(shape) {
  return shape.children.filter(function (c) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(c, 'bpmn:Lane');
  });
}
/**
 * Return the root element containing the given lane shape
 *
 * @param {djs.model.Shape} shape
 *
 * @return {djs.model.Shape}
 */

function getLanesRoot(shape) {
  return Object(_ModelingUtil__WEBPACK_IMPORTED_MODULE_1__["getParent"])(shape, LANE_PARENTS) || shape;
}
/**
 * Compute the required resize operations for lanes
 * adjacent to the given shape, assuming it will be
 * resized to the given new bounds.
 *
 * @param {djs.model.Shape} shape
 * @param {Bounds} newBounds
 *
 * @return {Array<Object>}
 */

function computeLanesResize(shape, newBounds) {
  var rootElement = getLanesRoot(shape);
  var initialShapes = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(rootElement, 'bpmn:Process') ? [] : [rootElement];
  var allLanes = collectLanes(rootElement, initialShapes),
      shapeTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(shape),
      shapeNewTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(newBounds),
      trblResize = getTRBLResize(shape, newBounds),
      resizeNeeded = [];
  allLanes.forEach(function (other) {
    if (other === shape) {
      return;
    }

    var topResize = 0,
        rightResize = trblResize.right,
        bottomResize = 0,
        leftResize = trblResize.left;
    var otherTrbl = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["asTRBL"])(other);

    if (trblResize.top) {
      if (abs(otherTrbl.bottom - shapeTrbl.top) < 10) {
        bottomResize = shapeNewTrbl.top - otherTrbl.bottom;
      }

      if (abs(otherTrbl.top - shapeTrbl.top) < 5) {
        topResize = shapeNewTrbl.top - otherTrbl.top;
      }
    }

    if (trblResize.bottom) {
      if (abs(otherTrbl.top - shapeTrbl.bottom) < 10) {
        topResize = shapeNewTrbl.bottom - otherTrbl.top;
      }

      if (abs(otherTrbl.bottom - shapeTrbl.bottom) < 5) {
        bottomResize = shapeNewTrbl.bottom - otherTrbl.bottom;
      }
    }

    if (topResize || rightResize || bottomResize || leftResize) {
      resizeNeeded.push({
        shape: other,
        newBounds: Object(diagram_js_lib_features_resize_ResizeUtil__WEBPACK_IMPORTED_MODULE_3__["resizeTRBL"])(other, {
          top: topResize,
          right: rightResize,
          bottom: bottomResize,
          left: leftResize
        })
      });
    }
  });
  return resizeNeeded;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js ***!
  \*************************************************************************/
/*! exports provided: isAny, getParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAny", function() { return isAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");


/**
 * Return true if element has any of the given types.
 *
 * @param {djs.model.Base} element
 * @param {Array<String>} types
 *
 * @return {Boolean}
 */

function isAny(element, types) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["some"])(types, function (t) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, t);
  });
}
/**
 * Return the parent of the element with any of the given types.
 *
 * @param {djs.model.Base} element
 * @param {String|Array<String>} anyType
 *
 * @return {djs.model.Base}
 */

function getParent(element, anyType) {
  if (typeof anyType === 'string') {
    anyType = [anyType];
  }

  while (element = element.parent) {
    if (isAny(element, anyType)) {
      return element;
    }
  }

  return null;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/ordering/BpmnOrderingProvider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/ordering/BpmnOrderingProvider.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnOrderingProvider; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_ordering_OrderingProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/ordering/OrderingProvider */ "diagram-js/lib/features/ordering/OrderingProvider");
/* harmony import */ var diagram_js_lib_features_ordering_OrderingProvider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_ordering_OrderingProvider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);




/**
 * a simple ordering provider that makes sure:
 *
 * (0) labels and groups are rendered always on top
 * (1) elements are ordered by a {level} property
 */

function BpmnOrderingProvider(eventBus, canvas, translate) {
  diagram_js_lib_features_ordering_OrderingProvider__WEBPACK_IMPORTED_MODULE_1___default.a.call(this, eventBus);
  var orders = [{
    type: 'bpmn:SubProcess',
    order: {
      level: 6
    }
  }, {
    type: 'bpmn:SequenceFlow',
    order: {
      level: 3,
      containers: ['bpmn:Participant', 'bpmn:FlowElementsContainer']
    }
  }, // handle DataAssociation(s) like message flows and render them always on top
  {
    type: 'bpmn:DataAssociation',
    order: {
      level: 9,
      containers: ['bpmn:Collaboration', 'bpmn:Process']
    }
  }, {
    type: 'bpmn:MessageFlow',
    order: {
      level: 9,
      containers: ['bpmn:Collaboration']
    }
  }, {
    type: 'bpmn:Association',
    order: {
      level: 6,
      containers: ['bpmn:Participant', 'bpmn:FlowElementsContainer', 'bpmn:Collaboration']
    }
  }, {
    type: 'bpmn:BoundaryEvent',
    order: {
      level: 8
    }
  }, {
    type: 'bpmn:Group',
    order: {
      level: 10,
      containers: ['bpmn:Collaboration', 'bpmn:Process']
    }
  }, {
    type: 'bpmn:FlowElement',
    order: {
      level: 5
    }
  }, {
    type: 'bpmn:Participant',
    order: {
      level: -2
    }
  }, {
    type: 'bpmn:Lane',
    order: {
      level: -1
    }
  }];

  function computeOrder(element) {
    if (element.labelTarget) {
      return {
        level: 10
      };
    }

    var entry = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["find"])(orders, function (o) {
      return Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__["isAny"])(element, [o.type]);
    });
    return entry && entry.order || {
      level: 1
    };
  }

  function getOrder(element) {
    var order = element.order;

    if (!order) {
      element.order = order = computeOrder(element);
    }

    return order;
  }

  function findActualParent(element, newParent, containers) {
    var actualParent = newParent;

    while (actualParent) {
      if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__["isAny"])(actualParent, containers)) {
        break;
      }

      actualParent = actualParent.parent;
    }

    if (!actualParent) {
      throw new Error(translate('no parent for {element} in {parent}', {
        element: element.id,
        parent: newParent.id
      }));
    }

    return actualParent;
  }

  this.getOrdering = function (element, newParent) {
    // render labels always on top
    if (element.labelTarget) {
      return {
        parent: canvas.getRootElement(),
        index: -1
      };
    }

    var elementOrder = getOrder(element);

    if (elementOrder.containers) {
      newParent = findActualParent(element, newParent, elementOrder.containers);
    }

    var currentIndex = newParent.children.indexOf(element);
    var insertIndex = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(newParent.children, function (child) {
      // do not compare with labels, they are created
      // in the wrong order (right after elements) during import and
      // mess up the positioning.
      if (!element.labelTarget && child.labelTarget) {
        return false;
      }

      return elementOrder.level < getOrder(child).level;
    }); // if the element is already in the child list at
    // a smaller index, we need to adjust the insert index.
    // this takes into account that the element is being removed
    // before being re-inserted

    if (insertIndex !== -1) {
      if (currentIndex !== -1 && currentIndex < insertIndex) {
        insertIndex -= 1;
      }
    }

    return {
      index: insertIndex,
      parent: newParent
    };
  };
}
BpmnOrderingProvider.$inject = ['eventBus', 'canvas', 'translate'];
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BpmnOrderingProvider, diagram_js_lib_features_ordering_OrderingProvider__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/ordering/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/ordering/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/i18n/translate */ "diagram-js/lib/i18n/translate");
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnOrderingProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnOrderingProvider */ "./node_modules/bpmn-js/lib/features/ordering/BpmnOrderingProvider.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['bpmnOrderingProvider'],
  bpmnOrderingProvider: ['type', _BpmnOrderingProvider__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/palette/PaletteProvider.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/palette/PaletteProvider.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaletteProvider; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A palette provider for BPMN 2.0 elements.
 */

function PaletteProvider(palette, create, elementFactory, spaceTool, lassoTool, handTool, globalConnect, translate) {
  this._palette = palette;
  this._create = create;
  this._elementFactory = elementFactory;
  this._spaceTool = spaceTool;
  this._lassoTool = lassoTool;
  this._handTool = handTool;
  this._globalConnect = globalConnect;
  this._translate = translate;
  palette.registerProvider(this);
}
PaletteProvider.$inject = ['palette', 'create', 'elementFactory', 'spaceTool', 'lassoTool', 'handTool', 'globalConnect', 'translate'];

PaletteProvider.prototype.getPaletteEntries = function (element) {
  var actions = {},
      create = this._create,
      elementFactory = this._elementFactory,
      spaceTool = this._spaceTool,
      lassoTool = this._lassoTool,
      handTool = this._handTool,
      globalConnect = this._globalConnect,
      translate = this._translate;

  function createAction(type, group, className, title, options) {
    function createListener(event) {
      var shape = elementFactory.createShape(Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
        type: type
      }, options));

      if (options) {
        shape.businessObject.di.isExpanded = options.isExpanded;
      }

      create.start(event, shape);
    }

    var shortType = type.replace(/^bpmn:/, '');
    return {
      group: group,
      className: className,
      title: title || translate('Create {type}', {
        type: shortType
      }),
      action: {
        dragstart: createListener,
        click: createListener
      }
    };
  }

  function createSubprocess(event) {
    var subProcess = elementFactory.createShape({
      type: 'bpmn:SubProcess',
      x: 0,
      y: 0,
      isExpanded: true
    });
    var startEvent = elementFactory.createShape({
      type: 'bpmn:StartEvent',
      x: 40,
      y: 82,
      parent: subProcess
    });
    create.start(event, [subProcess, startEvent], {
      hints: {
        autoSelect: [startEvent]
      }
    });
  }

  function createParticipant(event) {
    create.start(event, elementFactory.createParticipantShape());
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(actions, {
    'hand-tool': {
      group: 'tools',
      className: 'bpmn-icon-hand-tool',
      title: translate('Activate the hand tool'),
      action: {
        click: function (event) {
          handTool.activateHand(event);
        }
      }
    },
    'lasso-tool': {
      group: 'tools',
      className: 'bpmn-icon-lasso-tool',
      title: translate('Activate the lasso tool'),
      action: {
        click: function (event) {
          lassoTool.activateSelection(event);
        }
      }
    },
    'space-tool': {
      group: 'tools',
      className: 'bpmn-icon-space-tool',
      title: translate('Activate the create/remove space tool'),
      action: {
        click: function (event) {
          spaceTool.activateSelection(event);
        }
      }
    },
    'global-connect-tool': {
      group: 'tools',
      className: 'bpmn-icon-connection-multi',
      title: translate('Activate the global connect tool'),
      action: {
        click: function (event) {
          globalConnect.toggle(event);
        }
      }
    },
    'tool-separator': {
      group: 'tools',
      separator: true
    },
    'create.start-event': createAction('bpmn:StartEvent', 'event', 'bpmn-icon-start-event-none', translate('Create StartEvent')),
    'create.intermediate-event': createAction('bpmn:IntermediateThrowEvent', 'event', 'bpmn-icon-intermediate-event-none', translate('Create Intermediate/Boundary Event')),
    'create.end-event': createAction('bpmn:EndEvent', 'event', 'bpmn-icon-end-event-none', translate('Create EndEvent')),
    'create.exclusive-gateway': createAction('bpmn:ExclusiveGateway', 'gateway', 'bpmn-icon-gateway-none', translate('Create Gateway')),
    'create.task': createAction('bpmn:Task', 'activity', 'bpmn-icon-task', translate('Create Task')),
    'create.data-object': createAction('bpmn:DataObjectReference', 'data-object', 'bpmn-icon-data-object', translate('Create DataObjectReference')),
    'create.data-store': createAction('bpmn:DataStoreReference', 'data-store', 'bpmn-icon-data-store', translate('Create DataStoreReference')),
    'create.subprocess-expanded': {
      group: 'activity',
      className: 'bpmn-icon-subprocess-expanded',
      title: translate('Create expanded SubProcess'),
      action: {
        dragstart: createSubprocess,
        click: createSubprocess
      }
    },
    'create.participant-expanded': {
      group: 'collaboration',
      className: 'bpmn-icon-participant',
      title: translate('Create Pool/Participant'),
      action: {
        dragstart: createParticipant,
        click: createParticipant
      }
    },
    'create.group': createAction('bpmn:Group', 'artifact', 'bpmn-icon-group', translate('Create Group'))
  });
  return actions;
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/palette/index.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/palette/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/palette */ "diagram-js/lib/features/palette");
/* harmony import */ var diagram_js_lib_features_palette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_palette__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/create */ "diagram-js/lib/features/create");
/* harmony import */ var diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/features/space-tool */ "diagram-js/lib/features/space-tool");
/* harmony import */ var diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var diagram_js_lib_features_lasso_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/features/lasso-tool */ "diagram-js/lib/features/lasso-tool");
/* harmony import */ var diagram_js_lib_features_lasso_tool__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_lasso_tool__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var diagram_js_lib_features_hand_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! diagram-js/lib/features/hand-tool */ "diagram-js/lib/features/hand-tool");
/* harmony import */ var diagram_js_lib_features_hand_tool__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_hand_tool__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var diagram_js_lib_features_global_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! diagram-js/lib/features/global-connect */ "diagram-js/lib/features/global-connect");
/* harmony import */ var diagram_js_lib_features_global_connect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_global_connect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/i18n/translate */ "diagram-js/lib/i18n/translate");
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PaletteProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PaletteProvider */ "./node_modules/bpmn-js/lib/features/palette/PaletteProvider.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_palette__WEBPACK_IMPORTED_MODULE_0___default.a, diagram_js_lib_features_create__WEBPACK_IMPORTED_MODULE_1___default.a, diagram_js_lib_features_space_tool__WEBPACK_IMPORTED_MODULE_2___default.a, diagram_js_lib_features_lasso_tool__WEBPACK_IMPORTED_MODULE_3___default.a, diagram_js_lib_features_hand_tool__WEBPACK_IMPORTED_MODULE_4___default.a, diagram_js_lib_features_global_connect__WEBPACK_IMPORTED_MODULE_5___default.a, diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_6___default.a],
  __init__: ['paletteProvider'],
  paletteProvider: ['type', _PaletteProvider__WEBPACK_IMPORTED_MODULE_7__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/popup-menu/ReplaceMenuProvider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/popup-menu/ReplaceMenuProvider.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReplaceMenuProvider; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_TypeUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/TypeUtil */ "./node_modules/bpmn-js/lib/features/popup-menu/util/TypeUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../replace/ReplaceOptions */ "./node_modules/bpmn-js/lib/features/replace/ReplaceOptions.js");





/**
 * This module is an element agnostic replace menu provider for the popup menu.
 */

function ReplaceMenuProvider(popupMenu, modeling, moddle, bpmnReplace, rules, translate) {
  this._popupMenu = popupMenu;
  this._modeling = modeling;
  this._moddle = moddle;
  this._bpmnReplace = bpmnReplace;
  this._rules = rules;
  this._translate = translate;
  this.register();
}
ReplaceMenuProvider.$inject = ['popupMenu', 'modeling', 'moddle', 'bpmnReplace', 'rules', 'translate'];
/**
 * Register replace menu provider in the popup menu
 */

ReplaceMenuProvider.prototype.register = function () {
  this._popupMenu.registerProvider('bpmn-replace', this);
};
/**
 * Get all entries from replaceOptions for the given element and apply filters
 * on them. Get for example only elements, which are different from the current one.
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu entry items
 */


ReplaceMenuProvider.prototype.getEntries = function (element) {
  var businessObject = element.businessObject;
  var rules = this._rules;
  var entries;

  if (!rules.allowed('shape.replace', {
    element: element
  })) {
    return [];
  }

  var differentType = Object(_util_TypeUtil__WEBPACK_IMPORTED_MODULE_2__["isDifferentType"])(element); // start events outside event sub processes

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:StartEvent') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isEventSubProcess"])(businessObject.$parent)) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["START_EVENT"], differentType);
    return this._createEntries(element, entries);
  } // expanded/collapsed pools


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:Participant')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["PARTICIPANT"], function (entry) {
      return Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(businessObject) !== entry.target.isExpanded;
    });
    return this._createEntries(element, entries);
  } // start events inside event sub processes


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:StartEvent') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isEventSubProcess"])(businessObject.$parent)) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["EVENT_SUB_PROCESS_START_EVENT"], function (entry) {
      var target = entry.target;
      var isInterrupting = target.isInterrupting !== false;
      var isInterruptingEqual = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element).isInterrupting === isInterrupting; // filters elements which types and event definition are equal but have have different interrupting types

      return differentType(entry) || !differentType(entry) && !isInterruptingEqual;
    });
    return this._createEntries(element, entries);
  } // end events


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:EndEvent')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["END_EVENT"], function (entry) {
      var target = entry.target; // hide cancel end events outside transactions

      if (target.eventDefinitionType == 'bpmn:CancelEventDefinition' && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.$parent, 'bpmn:Transaction')) {
        return false;
      }

      return differentType(entry);
    });
    return this._createEntries(element, entries);
  } // boundary events


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:BoundaryEvent')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["BOUNDARY_EVENT"], function (entry) {
      var target = entry.target;

      if (target.eventDefinition == 'bpmn:CancelEventDefinition' && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.attachedToRef, 'bpmn:Transaction')) {
        return false;
      }

      var cancelActivity = target.cancelActivity !== false;
      var isCancelActivityEqual = businessObject.cancelActivity == cancelActivity;
      return differentType(entry) || !differentType(entry) && !isCancelActivityEqual;
    });
    return this._createEntries(element, entries);
  } // intermediate events


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:IntermediateCatchEvent') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:IntermediateThrowEvent')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["INTERMEDIATE_EVENT"], differentType);
    return this._createEntries(element, entries);
  } // gateways


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:Gateway')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["GATEWAY"], differentType);
    return this._createEntries(element, entries);
  } // transactions


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:Transaction')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["TRANSACTION"], differentType);
    return this._createEntries(element, entries);
  } // expanded event sub processes


  if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isEventSubProcess"])(businessObject) && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(businessObject)) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["EVENT_SUB_PROCESS"], differentType);
    return this._createEntries(element, entries);
  } // expanded sub processes


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:SubProcess') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(businessObject)) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["SUBPROCESS_EXPANDED"], differentType);
    return this._createEntries(element, entries);
  } // collapsed ad hoc sub processes


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:AdHocSubProcess') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(businessObject)) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["TASK"], function (entry) {
      var target = entry.target;
      var isTargetSubProcess = target.type === 'bpmn:SubProcess';
      var isTargetExpanded = target.isExpanded === true;
      return Object(_util_TypeUtil__WEBPACK_IMPORTED_MODULE_2__["isDifferentType"])(element, target) && (!isTargetSubProcess || isTargetExpanded);
    });
    return this._createEntries(element, entries);
  } // sequence flows


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:SequenceFlow')) {
    return this._createSequenceFlowEntries(element, _replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["SEQUENCE_FLOW"]);
  } // flow nodes


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:FlowNode')) {
    entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(_replace_ReplaceOptions__WEBPACK_IMPORTED_MODULE_4__["TASK"], differentType); // collapsed SubProcess can not be replaced with itself

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:SubProcess') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(businessObject)) {
      entries = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["filter"])(entries, function (entry) {
        return entry.label !== 'Sub Process (collapsed)';
      });
    }

    return this._createEntries(element, entries);
  }

  return [];
};
/**
 * Get a list of header items for the given element. This includes buttons
 * for multi instance markers and for the ad hoc marker.
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu entry items
 */


ReplaceMenuProvider.prototype.getHeaderEntries = function (element) {
  var headerEntries = [];

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Activity') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isEventSubProcess"])(element)) {
    headerEntries = headerEntries.concat(this._getLoopEntries(element));
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:SubProcess') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Transaction') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isEventSubProcess"])(element)) {
    headerEntries.push(this._getAdHocEntry(element));
  }

  return headerEntries;
};
/**
 * Creates an array of menu entry objects for a given element and filters the replaceOptions
 * according to a filter function.
 *
 * @param  {djs.model.Base} element
 * @param  {Object} replaceOptions
 *
 * @return {Array<Object>} a list of menu items
 */


ReplaceMenuProvider.prototype._createEntries = function (element, replaceOptions) {
  var menuEntries = [];
  var self = this;
  Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(replaceOptions, function (definition) {
    var entry = self._createMenuEntry(definition, element);

    menuEntries.push(entry);
  });
  return menuEntries;
};
/**
 * Creates an array of menu entry objects for a given sequence flow.
 *
 * @param  {djs.model.Base} element
 * @param  {Object} replaceOptions

 * @return {Array<Object>} a list of menu items
 */


ReplaceMenuProvider.prototype._createSequenceFlowEntries = function (element, replaceOptions) {
  var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element);
  var menuEntries = [];
  var modeling = this._modeling,
      moddle = this._moddle;
  var self = this;
  Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(replaceOptions, function (entry) {
    switch (entry.actionName) {
      case 'replace-with-default-flow':
        if (businessObject.sourceRef.default !== businessObject && (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:ExclusiveGateway') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:InclusiveGateway') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:ComplexGateway') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:Activity'))) {
          menuEntries.push(self._createMenuEntry(entry, element, function () {
            modeling.updateProperties(element.source, {
              default: businessObject
            });
          }));
        }

        break;

      case 'replace-with-conditional-flow':
        if (!businessObject.conditionExpression && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:Activity')) {
          menuEntries.push(self._createMenuEntry(entry, element, function () {
            var conditionExpression = moddle.create('bpmn:FormalExpression', {
              body: ''
            });
            modeling.updateProperties(element, {
              conditionExpression: conditionExpression
            });
          }));
        }

        break;

      default:
        // default flows
        if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:Activity') && businessObject.conditionExpression) {
          return menuEntries.push(self._createMenuEntry(entry, element, function () {
            modeling.updateProperties(element, {
              conditionExpression: undefined
            });
          }));
        } // conditional flows


        if ((Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:ExclusiveGateway') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:InclusiveGateway') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:ComplexGateway') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject.sourceRef, 'bpmn:Activity')) && businessObject.sourceRef.default === businessObject) {
          return menuEntries.push(self._createMenuEntry(entry, element, function () {
            modeling.updateProperties(element.source, {
              default: undefined
            });
          }));
        }

    }
  });
  return menuEntries;
};
/**
 * Creates and returns a single menu entry item.
 *
 * @param  {Object} definition a single replace options definition object
 * @param  {djs.model.Base} element
 * @param  {Function} [action] an action callback function which gets called when
 *                             the menu entry is being triggered.
 *
 * @return {Object} menu entry item
 */


ReplaceMenuProvider.prototype._createMenuEntry = function (definition, element, action) {
  var translate = this._translate;
  var replaceElement = this._bpmnReplace.replaceElement;

  var replaceAction = function () {
    return replaceElement(element, definition.target);
  };

  action = action || replaceAction;
  var menuEntry = {
    label: translate(definition.label),
    className: definition.className,
    id: definition.actionName,
    action: action
  };
  return menuEntry;
};
/**
 * Get a list of menu items containing buttons for multi instance markers
 *
 * @param  {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu items
 */


ReplaceMenuProvider.prototype._getLoopEntries = function (element) {
  var self = this;
  var translate = this._translate;

  function toggleLoopEntry(event, entry) {
    var loopCharacteristics;

    if (entry.active) {
      loopCharacteristics = undefined;
    } else {
      loopCharacteristics = self._moddle.create(entry.options.loopCharacteristics);

      if (entry.options.isSequential) {
        loopCharacteristics.isSequential = entry.options.isSequential;
      }
    }

    self._modeling.updateProperties(element, {
      loopCharacteristics: loopCharacteristics
    });
  }

  var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element),
      loopCharacteristics = businessObject.loopCharacteristics;
  var isSequential, isLoop, isParallel;

  if (loopCharacteristics) {
    isSequential = loopCharacteristics.isSequential;
    isLoop = loopCharacteristics.isSequential === undefined;
    isParallel = loopCharacteristics.isSequential !== undefined && !loopCharacteristics.isSequential;
  }

  var loopEntries = [{
    id: 'toggle-parallel-mi',
    className: 'bpmn-icon-parallel-mi-marker',
    title: translate('Parallel Multi Instance'),
    active: isParallel,
    action: toggleLoopEntry,
    options: {
      loopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
      isSequential: false
    }
  }, {
    id: 'toggle-sequential-mi',
    className: 'bpmn-icon-sequential-mi-marker',
    title: translate('Sequential Multi Instance'),
    active: isSequential,
    action: toggleLoopEntry,
    options: {
      loopCharacteristics: 'bpmn:MultiInstanceLoopCharacteristics',
      isSequential: true
    }
  }, {
    id: 'toggle-loop',
    className: 'bpmn-icon-loop-marker',
    title: translate('Loop'),
    active: isLoop,
    action: toggleLoopEntry,
    options: {
      loopCharacteristics: 'bpmn:StandardLoopCharacteristics'
    }
  }];
  return loopEntries;
};
/**
 * Get the menu items containing a button for the ad hoc marker
 *
 * @param  {djs.model.Base} element
 *
 * @return {Object} a menu item
 */


ReplaceMenuProvider.prototype._getAdHocEntry = function (element) {
  var translate = this._translate;
  var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element);
  var isAdHoc = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(businessObject, 'bpmn:AdHocSubProcess');
  var replaceElement = this._bpmnReplace.replaceElement;
  var adHocEntry = {
    id: 'toggle-adhoc',
    className: 'bpmn-icon-ad-hoc-marker',
    title: translate('Ad-hoc'),
    active: isAdHoc,
    action: function (event, entry) {
      if (isAdHoc) {
        return replaceElement(element, {
          type: 'bpmn:SubProcess'
        }, {
          autoResize: false,
          layoutConnection: false
        });
      } else {
        return replaceElement(element, {
          type: 'bpmn:AdHocSubProcess'
        }, {
          autoResize: false,
          layoutConnection: false
        });
      }
    }
  };
  return adHocEntry;
};

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/popup-menu/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/popup-menu/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_popup_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/popup-menu */ "diagram-js/lib/features/popup-menu");
/* harmony import */ var diagram_js_lib_features_popup_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_popup_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../replace */ "./node_modules/bpmn-js/lib/features/replace/index.js");
/* harmony import */ var _ReplaceMenuProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReplaceMenuProvider */ "./node_modules/bpmn-js/lib/features/popup-menu/ReplaceMenuProvider.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_popup_menu__WEBPACK_IMPORTED_MODULE_0___default.a, _replace__WEBPACK_IMPORTED_MODULE_1__["default"]],
  __init__: ['replaceMenuProvider'],
  replaceMenuProvider: ['type', _ReplaceMenuProvider__WEBPACK_IMPORTED_MODULE_2__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/popup-menu/util/TypeUtil.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/popup-menu/util/TypeUtil.js ***!
  \***********************************************************************/
/*! exports provided: isDifferentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDifferentType", function() { return isDifferentType; });
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");


/**
 * Returns true, if an element is from a different type
 * than a target definition. Takes into account the type,
 * event definition type and triggeredByEvent property.
 *
 * @param {djs.model.Base} element
 *
 * @return {Boolean}
 */

function isDifferentType(element) {
  return function (entry) {
    var target = entry.target;
    var businessObject = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element),
        eventDefinition = businessObject.eventDefinitions && businessObject.eventDefinitions[0];
    var isTypeEqual = businessObject.$type === target.type;
    var isEventDefinitionEqual = (eventDefinition && eventDefinition.$type) === target.eventDefinitionType;
    var isTriggeredByEventEqual = businessObject.triggeredByEvent === target.triggeredByEvent;
    var isExpandedEqual = target.isExpanded === undefined || target.isExpanded === Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_1__["isExpanded"])(businessObject);
    return !isTypeEqual || !isEventDefinitionEqual || !isTriggeredByEventEqual || !isExpandedEqual;
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/replace-preview/BpmnReplacePreview.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/replace-preview/BpmnReplacePreview.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnReplacePreview; });
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/command/CommandInterceptor */ "diagram-js/lib/command/CommandInterceptor");
/* harmony import */ var diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css.escape */ "css.escape");
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_escape__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(min_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-svg */ "tiny-svg");
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tiny_svg__WEBPACK_IMPORTED_MODULE_5__);






var LOW_PRIORITY = 250;
function BpmnReplacePreview(eventBus, elementRegistry, elementFactory, canvas, previewSupport) {
  diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_0___default.a.call(this, eventBus);
  /**
   * Replace the visuals of all elements in the context which can be replaced
   *
   * @param  {Object} context
   */

  function replaceVisual(context) {
    var replacements = context.canExecute.replacements;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(replacements, function (replacement) {
      var id = replacement.oldElementId;
      var newElement = {
        type: replacement.newElementType
      }; // if the visual of the element is already replaced

      if (context.visualReplacements[id]) {
        return;
      }

      var element = elementRegistry.get(id);
      Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["assign"])(newElement, {
        x: element.x,
        y: element.y
      }); // create a temporary shape

      var tempShape = elementFactory.createShape(newElement);
      canvas.addShape(tempShape, element.parent); // select the original SVG element related to the element and hide it

      var gfx = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])('[data-element-id="' + css_escape__WEBPACK_IMPORTED_MODULE_2___default()(element.id) + '"]', context.dragGroup);

      if (gfx) {
        Object(tiny_svg__WEBPACK_IMPORTED_MODULE_5__["attr"])(gfx, {
          display: 'none'
        });
      } // clone the gfx of the temporary shape and add it to the drag group


      var dragger = previewSupport.addDragger(tempShape, context.dragGroup);
      context.visualReplacements[id] = dragger;
      canvas.removeShape(tempShape);
    });
  }
  /**
   * Restore the original visuals of the previously replaced elements
   *
   * @param  {Object} context
   */


  function restoreVisual(context) {
    var visualReplacements = context.visualReplacements;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(visualReplacements, function (dragger, id) {
      var originalGfx = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])('[data-element-id="' + css_escape__WEBPACK_IMPORTED_MODULE_2___default()(id) + '"]', context.dragGroup);

      if (originalGfx) {
        Object(tiny_svg__WEBPACK_IMPORTED_MODULE_5__["attr"])(originalGfx, {
          display: 'inline'
        });
      }

      dragger.remove();

      if (visualReplacements[id]) {
        delete visualReplacements[id];
      }
    });
  }

  eventBus.on('shape.move.move', LOW_PRIORITY, function (event) {
    var context = event.context,
        canExecute = context.canExecute;

    if (!context.visualReplacements) {
      context.visualReplacements = {};
    }

    if (canExecute && canExecute.replacements) {
      replaceVisual(context);
    } else {
      restoreVisual(context);
    }
  });
}
BpmnReplacePreview.$inject = ['eventBus', 'elementRegistry', 'elementFactory', 'canvas', 'previewSupport'];
inherits__WEBPACK_IMPORTED_MODULE_1___default()(BpmnReplacePreview, diagram_js_lib_command_CommandInterceptor__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/replace-preview/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/replace-preview/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_preview_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/preview-support */ "diagram-js/lib/features/preview-support");
/* harmony import */ var diagram_js_lib_features_preview_support__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_preview_support__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnReplacePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnReplacePreview */ "./node_modules/bpmn-js/lib/features/replace-preview/BpmnReplacePreview.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_preview_support__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['bpmnReplacePreview'],
  bpmnReplacePreview: ['type', _BpmnReplacePreview__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/replace/BpmnReplace.js":
/*!******************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/replace/BpmnReplace.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnReplace; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _copy_paste_ModdleCopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../copy-paste/ModdleCopy */ "./node_modules/bpmn-js/lib/features/copy-paste/ModdleCopy.js");






function copyProperties(source, target, properties) {
  if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(properties)) {
    properties = [properties];
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(properties, function (property) {
    if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(source[property])) {
      target[property] = source[property];
    }
  });
}

var CUSTOM_PROPERTIES = ['cancelActivity', 'instantiate', 'eventGatewayType', 'triggeredByEvent', 'isInterrupting'];

function toggeling(element, target) {
  var oldCollapsed = element && Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["has"])(element, 'collapsed') ? element.collapsed : !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(element);
  var targetCollapsed;

  if (target && (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["has"])(target, 'collapsed') || Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["has"])(target, 'isExpanded'))) {
    // property is explicitly set so use it
    targetCollapsed = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["has"])(target, 'collapsed') ? target.collapsed : !target.isExpanded;
  } else {
    // keep old state
    targetCollapsed = oldCollapsed;
  }

  if (oldCollapsed !== targetCollapsed) {
    element.collapsed = oldCollapsed;
    return true;
  }

  return false;
}
/**
 * This module takes care of replacing BPMN elements
 */


function BpmnReplace(bpmnFactory, elementFactory, moddleCopy, modeling, replace, selection) {
  /**
   * Prepares a new business object for the replacement element
   * and triggers the replace operation.
   *
   * @param  {djs.model.Base} element
   * @param  {Object} target
   * @param  {Object} [hints]
   *
   * @return {djs.model.Base} the newly created element
   */
  function replaceElement(element, target, hints) {
    hints = hints || {};
    var type = target.type,
        oldBusinessObject = element.businessObject;

    if (isSubProcess(oldBusinessObject)) {
      if (type === 'bpmn:SubProcess') {
        if (toggeling(element, target)) {
          // expanding or collapsing process
          modeling.toggleCollapse(element);
          return element;
        }
      }
    }

    var newBusinessObject = bpmnFactory.create(type);
    var newElement = {
      type: type,
      businessObject: newBusinessObject
    };
    var elementProps = Object(_copy_paste_ModdleCopy__WEBPACK_IMPORTED_MODULE_4__["getPropertyNames"])(oldBusinessObject.$descriptor),
        newElementProps = Object(_copy_paste_ModdleCopy__WEBPACK_IMPORTED_MODULE_4__["getPropertyNames"])(newBusinessObject.$descriptor, true),
        copyProps = intersection(elementProps, newElementProps); // initialize special properties defined in target definition

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(newBusinessObject, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["pick"])(target, CUSTOM_PROPERTIES));
    var properties = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(copyProps, function (propertyName) {
      // copying event definitions, unless we replace
      if (propertyName === 'eventDefinitions') {
        return hasEventDefinition(element, target.eventDefinitionType);
      } // retain loop characteristics if the target element
      // is not an event sub process


      if (propertyName === 'loopCharacteristics') {
        return !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isEventSubProcess"])(newBusinessObject);
      } // so the applied properties from 'target' don't get lost


      if (newBusinessObject.hasOwnProperty(propertyName)) {
        return false;
      }

      if (propertyName === 'processRef' && target.isExpanded === false) {
        return false;
      }

      if (propertyName === 'triggeredByEvent') {
        return false;
      }

      return true;
    });
    newBusinessObject = moddleCopy.copyElement(oldBusinessObject, newBusinessObject, properties); // initialize custom BPMN extensions

    if (target.eventDefinitionType) {
      // only initialize with new eventDefinition
      // if we did not set an event definition yet,
      // i.e. because we copied it
      if (!hasEventDefinition(newBusinessObject, target.eventDefinitionType)) {
        newElement.eventDefinitionType = target.eventDefinitionType;
      }
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(oldBusinessObject, 'bpmn:Activity')) {
      if (isSubProcess(oldBusinessObject)) {
        // no toggeling, so keep old state
        newElement.isExpanded = Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(oldBusinessObject);
      } // else if property is explicitly set, use it
      else if (target && Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["has"])(target, 'isExpanded')) {
          newElement.isExpanded = target.isExpanded;
        } // TODO: need also to respect min/max Size
      // copy size, from an expanded subprocess to an expanded alternative subprocess
      // except bpmn:Task, because Task is always expanded


      if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(oldBusinessObject) && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(oldBusinessObject, 'bpmn:Task') && newElement.isExpanded) {
        newElement.width = element.width;
        newElement.height = element.height;
      }
    } // remove children if not expanding sub process


    if (isSubProcess(oldBusinessObject) && !isSubProcess(newBusinessObject)) {
      hints.moveChildren = false;
    } // transform collapsed/expanded pools


    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(oldBusinessObject, 'bpmn:Participant')) {
      // create expanded pool
      if (target.isExpanded === true) {
        newBusinessObject.processRef = bpmnFactory.create('bpmn:Process');
      } else {
        // remove children when transforming to collapsed pool
        hints.moveChildren = false;
      } // apply same width and default height


      newElement.width = element.width;
      newElement.height = elementFactory._getDefaultSize(newBusinessObject).height;
    }

    newBusinessObject.name = oldBusinessObject.name; // retain default flow's reference between inclusive <-> exclusive gateways and activities

    if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__["isAny"])(oldBusinessObject, ['bpmn:ExclusiveGateway', 'bpmn:InclusiveGateway', 'bpmn:Activity']) && Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_2__["isAny"])(newBusinessObject, ['bpmn:ExclusiveGateway', 'bpmn:InclusiveGateway', 'bpmn:Activity'])) {
      newBusinessObject.default = oldBusinessObject.default;
    }

    if (target.host && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(oldBusinessObject, 'bpmn:BoundaryEvent') && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(newBusinessObject, 'bpmn:BoundaryEvent')) {
      newElement.host = target.host;
    }

    newElement.di = {}; // fill and stroke will be set to DI

    copyProperties(oldBusinessObject.di, newElement.di, ['fill', 'stroke']);
    newElement = replace.replaceElement(element, newElement, hints);

    if (hints.select !== false) {
      selection.select(newElement);
    }

    return newElement;
  }

  this.replaceElement = replaceElement;
}
BpmnReplace.$inject = ['bpmnFactory', 'elementFactory', 'moddleCopy', 'modeling', 'replace', 'selection'];

function isSubProcess(bo) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(bo, 'bpmn:SubProcess');
}

function hasEventDefinition(element, type) {
  var bo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["getBusinessObject"])(element);
  return type && bo.get('eventDefinitions').some(function (definition) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(definition, type);
  });
}
/**
 * Compute intersection between two arrays.
 */


function intersection(a1, a2) {
  return a1.filter(function (el) {
    return a2.indexOf(el) !== -1;
  });
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/replace/ReplaceOptions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/replace/ReplaceOptions.js ***!
  \*********************************************************************/
/*! exports provided: START_EVENT, INTERMEDIATE_EVENT, END_EVENT, GATEWAY, SUBPROCESS_EXPANDED, TRANSACTION, EVENT_SUB_PROCESS, TASK, BOUNDARY_EVENT, EVENT_SUB_PROCESS_START_EVENT, SEQUENCE_FLOW, PARTICIPANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EVENT", function() { return START_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERMEDIATE_EVENT", function() { return INTERMEDIATE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_EVENT", function() { return END_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GATEWAY", function() { return GATEWAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBPROCESS_EXPANDED", function() { return SUBPROCESS_EXPANDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION", function() { return TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SUB_PROCESS", function() { return EVENT_SUB_PROCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOUNDARY_EVENT", function() { return BOUNDARY_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_SUB_PROCESS_START_EVENT", function() { return EVENT_SUB_PROCESS_START_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEQUENCE_FLOW", function() { return SEQUENCE_FLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANT", function() { return PARTICIPANT; });
var START_EVENT = [{
  label: 'Start Event',
  actionName: 'replace-with-none-start',
  className: 'bpmn-icon-start-event-none',
  target: {
    type: 'bpmn:StartEvent'
  }
}, {
  label: 'Intermediate Throw Event',
  actionName: 'replace-with-none-intermediate-throwing',
  className: 'bpmn-icon-intermediate-event-none',
  target: {
    type: 'bpmn:IntermediateThrowEvent'
  }
}, {
  label: 'End Event',
  actionName: 'replace-with-none-end',
  className: 'bpmn-icon-end-event-none',
  target: {
    type: 'bpmn:EndEvent'
  }
}, {
  label: 'Message Start Event',
  actionName: 'replace-with-message-start',
  className: 'bpmn-icon-start-event-message',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Start Event',
  actionName: 'replace-with-timer-start',
  className: 'bpmn-icon-start-event-timer',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Conditional Start Event',
  actionName: 'replace-with-conditional-start',
  className: 'bpmn-icon-start-event-condition',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Signal Start Event',
  actionName: 'replace-with-signal-start',
  className: 'bpmn-icon-start-event-signal',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}];
var INTERMEDIATE_EVENT = [{
  label: 'Start Event',
  actionName: 'replace-with-none-start',
  className: 'bpmn-icon-start-event-none',
  target: {
    type: 'bpmn:StartEvent'
  }
}, {
  label: 'Intermediate Throw Event',
  actionName: 'replace-with-none-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-none',
  target: {
    type: 'bpmn:IntermediateThrowEvent'
  }
}, {
  label: 'End Event',
  actionName: 'replace-with-none-end',
  className: 'bpmn-icon-end-event-none',
  target: {
    type: 'bpmn:EndEvent'
  }
}, {
  label: 'Message Intermediate Catch Event',
  actionName: 'replace-with-message-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-message',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Message Intermediate Throw Event',
  actionName: 'replace-with-message-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-message',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Intermediate Catch Event',
  actionName: 'replace-with-timer-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-timer',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Escalation Intermediate Throw Event',
  actionName: 'replace-with-escalation-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-escalation',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Conditional Intermediate Catch Event',
  actionName: 'replace-with-conditional-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-condition',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Link Intermediate Catch Event',
  actionName: 'replace-with-link-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-link',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:LinkEventDefinition'
  }
}, {
  label: 'Link Intermediate Throw Event',
  actionName: 'replace-with-link-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-link',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:LinkEventDefinition'
  }
}, {
  label: 'Compensation Intermediate Throw Event',
  actionName: 'replace-with-compensation-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-compensation',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Signal Intermediate Catch Event',
  actionName: 'replace-with-signal-intermediate-catch',
  className: 'bpmn-icon-intermediate-event-catch-signal',
  target: {
    type: 'bpmn:IntermediateCatchEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Signal Intermediate Throw Event',
  actionName: 'replace-with-signal-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-throw-signal',
  target: {
    type: 'bpmn:IntermediateThrowEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}];
var END_EVENT = [{
  label: 'Start Event',
  actionName: 'replace-with-none-start',
  className: 'bpmn-icon-start-event-none',
  target: {
    type: 'bpmn:StartEvent'
  }
}, {
  label: 'Intermediate Throw Event',
  actionName: 'replace-with-none-intermediate-throw',
  className: 'bpmn-icon-intermediate-event-none',
  target: {
    type: 'bpmn:IntermediateThrowEvent'
  }
}, {
  label: 'End Event',
  actionName: 'replace-with-none-end',
  className: 'bpmn-icon-end-event-none',
  target: {
    type: 'bpmn:EndEvent'
  }
}, {
  label: 'Message End Event',
  actionName: 'replace-with-message-end',
  className: 'bpmn-icon-end-event-message',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Escalation End Event',
  actionName: 'replace-with-escalation-end',
  className: 'bpmn-icon-end-event-escalation',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Error End Event',
  actionName: 'replace-with-error-end',
  className: 'bpmn-icon-end-event-error',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:ErrorEventDefinition'
  }
}, {
  label: 'Cancel End Event',
  actionName: 'replace-with-cancel-end',
  className: 'bpmn-icon-end-event-cancel',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:CancelEventDefinition'
  }
}, {
  label: 'Compensation End Event',
  actionName: 'replace-with-compensation-end',
  className: 'bpmn-icon-end-event-compensation',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Signal End Event',
  actionName: 'replace-with-signal-end',
  className: 'bpmn-icon-end-event-signal',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Terminate End Event',
  actionName: 'replace-with-terminate-end',
  className: 'bpmn-icon-end-event-terminate',
  target: {
    type: 'bpmn:EndEvent',
    eventDefinitionType: 'bpmn:TerminateEventDefinition'
  }
}];
var GATEWAY = [{
  label: 'Exclusive Gateway',
  actionName: 'replace-with-exclusive-gateway',
  className: 'bpmn-icon-gateway-xor',
  target: {
    type: 'bpmn:ExclusiveGateway'
  }
}, {
  label: 'Parallel Gateway',
  actionName: 'replace-with-parallel-gateway',
  className: 'bpmn-icon-gateway-parallel',
  target: {
    type: 'bpmn:ParallelGateway'
  }
}, {
  label: 'Inclusive Gateway',
  actionName: 'replace-with-inclusive-gateway',
  className: 'bpmn-icon-gateway-or',
  target: {
    type: 'bpmn:InclusiveGateway'
  }
}, {
  label: 'Complex Gateway',
  actionName: 'replace-with-complex-gateway',
  className: 'bpmn-icon-gateway-complex',
  target: {
    type: 'bpmn:ComplexGateway'
  }
}, {
  label: 'Event based Gateway',
  actionName: 'replace-with-event-based-gateway',
  className: 'bpmn-icon-gateway-eventbased',
  target: {
    type: 'bpmn:EventBasedGateway',
    instantiate: false,
    eventGatewayType: 'Exclusive'
  }
} // Gateways deactivated until https://github.com/bpmn-io/bpmn-js/issues/194
// {
//   label: 'Event based instantiating Gateway',
//   actionName: 'replace-with-exclusive-event-based-gateway',
//   className: 'bpmn-icon-exclusive-event-based',
//   target: {
//     type: 'bpmn:EventBasedGateway'
//   },
//   options: {
//     businessObject: { instantiate: true, eventGatewayType: 'Exclusive' }
//   }
// },
// {
//   label: 'Parallel Event based instantiating Gateway',
//   actionName: 'replace-with-parallel-event-based-instantiate-gateway',
//   className: 'bpmn-icon-parallel-event-based-instantiate-gateway',
//   target: {
//     type: 'bpmn:EventBasedGateway'
//   },
//   options: {
//     businessObject: { instantiate: true, eventGatewayType: 'Parallel' }
//   }
// }
];
var SUBPROCESS_EXPANDED = [{
  label: 'Transaction',
  actionName: 'replace-with-transaction',
  className: 'bpmn-icon-transaction',
  target: {
    type: 'bpmn:Transaction',
    isExpanded: true
  }
}, {
  label: 'Event Sub Process',
  actionName: 'replace-with-event-subprocess',
  className: 'bpmn-icon-event-subprocess-expanded',
  target: {
    type: 'bpmn:SubProcess',
    triggeredByEvent: true,
    isExpanded: true
  }
}, {
  label: 'Sub Process (collapsed)',
  actionName: 'replace-with-collapsed-subprocess',
  className: 'bpmn-icon-subprocess-collapsed',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: false
  }
}];
var TRANSACTION = [{
  label: 'Sub Process',
  actionName: 'replace-with-subprocess',
  className: 'bpmn-icon-subprocess-expanded',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: true
  }
}, {
  label: 'Event Sub Process',
  actionName: 'replace-with-event-subprocess',
  className: 'bpmn-icon-event-subprocess-expanded',
  target: {
    type: 'bpmn:SubProcess',
    triggeredByEvent: true,
    isExpanded: true
  }
}];
var EVENT_SUB_PROCESS = [{
  label: 'Sub Process',
  actionName: 'replace-with-subprocess',
  className: 'bpmn-icon-subprocess-expanded',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: true
  }
}, {
  label: 'Transaction',
  actionName: 'replace-with-transaction',
  className: 'bpmn-icon-transaction',
  target: {
    type: 'bpmn:Transaction',
    isExpanded: true
  }
}];
var TASK = [{
  label: 'Task',
  actionName: 'replace-with-task',
  className: 'bpmn-icon-task',
  target: {
    type: 'bpmn:Task'
  }
}, {
  label: 'Send Task',
  actionName: 'replace-with-send-task',
  className: 'bpmn-icon-send',
  target: {
    type: 'bpmn:SendTask'
  }
}, {
  label: 'Receive Task',
  actionName: 'replace-with-receive-task',
  className: 'bpmn-icon-receive',
  target: {
    type: 'bpmn:ReceiveTask'
  }
}, {
  label: 'User Task',
  actionName: 'replace-with-user-task',
  className: 'bpmn-icon-user',
  target: {
    type: 'bpmn:UserTask'
  }
}, {
  label: 'Manual Task',
  actionName: 'replace-with-manual-task',
  className: 'bpmn-icon-manual',
  target: {
    type: 'bpmn:ManualTask'
  }
}, {
  label: 'Business Rule Task',
  actionName: 'replace-with-rule-task',
  className: 'bpmn-icon-business-rule',
  target: {
    type: 'bpmn:BusinessRuleTask'
  }
}, {
  label: 'Service Task',
  actionName: 'replace-with-service-task',
  className: 'bpmn-icon-service',
  target: {
    type: 'bpmn:ServiceTask'
  }
}, {
  label: 'Script Task',
  actionName: 'replace-with-script-task',
  className: 'bpmn-icon-script',
  target: {
    type: 'bpmn:ScriptTask'
  }
}, {
  label: 'Call Activity',
  actionName: 'replace-with-call-activity',
  className: 'bpmn-icon-call-activity',
  target: {
    type: 'bpmn:CallActivity'
  }
}, {
  label: 'Sub Process (collapsed)',
  actionName: 'replace-with-collapsed-subprocess',
  className: 'bpmn-icon-subprocess-collapsed',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: false
  }
}, {
  label: 'Sub Process (expanded)',
  actionName: 'replace-with-expanded-subprocess',
  className: 'bpmn-icon-subprocess-expanded',
  target: {
    type: 'bpmn:SubProcess',
    isExpanded: true
  }
}];
var BOUNDARY_EVENT = [{
  label: 'Message Boundary Event',
  actionName: 'replace-with-message-boundary',
  className: 'bpmn-icon-intermediate-event-catch-message',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Boundary Event',
  actionName: 'replace-with-timer-boundary',
  className: 'bpmn-icon-intermediate-event-catch-timer',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Escalation Boundary Event',
  actionName: 'replace-with-escalation-boundary',
  className: 'bpmn-icon-intermediate-event-catch-escalation',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Conditional Boundary Event',
  actionName: 'replace-with-conditional-boundary',
  className: 'bpmn-icon-intermediate-event-catch-condition',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Error Boundary Event',
  actionName: 'replace-with-error-boundary',
  className: 'bpmn-icon-intermediate-event-catch-error',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:ErrorEventDefinition'
  }
}, {
  label: 'Cancel Boundary Event',
  actionName: 'replace-with-cancel-boundary',
  className: 'bpmn-icon-intermediate-event-catch-cancel',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:CancelEventDefinition'
  }
}, {
  label: 'Signal Boundary Event',
  actionName: 'replace-with-signal-boundary',
  className: 'bpmn-icon-intermediate-event-catch-signal',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Compensation Boundary Event',
  actionName: 'replace-with-compensation-boundary',
  className: 'bpmn-icon-intermediate-event-catch-compensation',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Message Boundary Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-message-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-message',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Timer Boundary Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-timer-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-timer',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Escalation Boundary Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-escalation-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-escalation',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Conditional Boundary Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-conditional-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-condition',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition',
    cancelActivity: false
  }
}, {
  label: 'Signal Boundary Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-signal-boundary',
  className: 'bpmn-icon-intermediate-event-catch-non-interrupting-signal',
  target: {
    type: 'bpmn:BoundaryEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition',
    cancelActivity: false
  }
}];
var EVENT_SUB_PROCESS_START_EVENT = [{
  label: 'Message Start Event',
  actionName: 'replace-with-message-start',
  className: 'bpmn-icon-start-event-message',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition'
  }
}, {
  label: 'Timer Start Event',
  actionName: 'replace-with-timer-start',
  className: 'bpmn-icon-start-event-timer',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition'
  }
}, {
  label: 'Conditional Start Event',
  actionName: 'replace-with-conditional-start',
  className: 'bpmn-icon-start-event-condition',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition'
  }
}, {
  label: 'Signal Start Event',
  actionName: 'replace-with-signal-start',
  className: 'bpmn-icon-start-event-signal',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition'
  }
}, {
  label: 'Error Start Event',
  actionName: 'replace-with-error-start',
  className: 'bpmn-icon-start-event-error',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:ErrorEventDefinition'
  }
}, {
  label: 'Escalation Start Event',
  actionName: 'replace-with-escalation-start',
  className: 'bpmn-icon-start-event-escalation',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition'
  }
}, {
  label: 'Compensation Start Event',
  actionName: 'replace-with-compensation-start',
  className: 'bpmn-icon-start-event-compensation',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:CompensateEventDefinition'
  }
}, {
  label: 'Message Start Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-message-start',
  className: 'bpmn-icon-start-event-non-interrupting-message',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:MessageEventDefinition',
    isInterrupting: false
  }
}, {
  label: 'Timer Start Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-timer-start',
  className: 'bpmn-icon-start-event-non-interrupting-timer',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:TimerEventDefinition',
    isInterrupting: false
  }
}, {
  label: 'Conditional Start Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-conditional-start',
  className: 'bpmn-icon-start-event-non-interrupting-condition',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:ConditionalEventDefinition',
    isInterrupting: false
  }
}, {
  label: 'Signal Start Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-signal-start',
  className: 'bpmn-icon-start-event-non-interrupting-signal',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:SignalEventDefinition',
    isInterrupting: false
  }
}, {
  label: 'Escalation Start Event (non-interrupting)',
  actionName: 'replace-with-non-interrupting-escalation-start',
  className: 'bpmn-icon-start-event-non-interrupting-escalation',
  target: {
    type: 'bpmn:StartEvent',
    eventDefinitionType: 'bpmn:EscalationEventDefinition',
    isInterrupting: false
  }
}];
var SEQUENCE_FLOW = [{
  label: 'Sequence Flow',
  actionName: 'replace-with-sequence-flow',
  className: 'bpmn-icon-connection'
}, {
  label: 'Default Flow',
  actionName: 'replace-with-default-flow',
  className: 'bpmn-icon-default-flow'
}, {
  label: 'Conditional Flow',
  actionName: 'replace-with-conditional-flow',
  className: 'bpmn-icon-conditional-flow'
}];
var PARTICIPANT = [{
  label: 'Expanded Pool',
  actionName: 'replace-with-expanded-pool',
  className: 'bpmn-icon-participant',
  target: {
    type: 'bpmn:Participant',
    isExpanded: true
  }
}, {
  label: 'Collapsed Pool',
  actionName: 'replace-with-collapsed-pool',
  // TODO(@janstuemmel): maybe design new icon
  className: 'bpmn-icon-lane',
  target: {
    type: 'bpmn:Participant',
    isExpanded: false
  }
}];

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/replace/index.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/replace/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy_paste__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../copy-paste */ "./node_modules/bpmn-js/lib/features/copy-paste/index.js");
/* harmony import */ var diagram_js_lib_features_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/replace */ "diagram-js/lib/features/replace");
/* harmony import */ var diagram_js_lib_features_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/features/selection */ "diagram-js/lib/features/selection");
/* harmony import */ var diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BpmnReplace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BpmnReplace */ "./node_modules/bpmn-js/lib/features/replace/BpmnReplace.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [_copy_paste__WEBPACK_IMPORTED_MODULE_0__["default"], diagram_js_lib_features_replace__WEBPACK_IMPORTED_MODULE_1___default.a, diagram_js_lib_features_selection__WEBPACK_IMPORTED_MODULE_2___default.a],
  bpmnReplace: ['type', _BpmnReplace__WEBPACK_IMPORTED_MODULE_3__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/rules/BpmnRules.js":
/*!**************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/rules/BpmnRules.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnRules; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var diagram_js_lib_features_rules_RuleProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! diagram-js/lib/features/rules/RuleProvider */ "diagram-js/lib/features/rules/RuleProvider");
/* harmony import */ var diagram_js_lib_features_rules_RuleProvider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_rules_RuleProvider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _snapping_BpmnSnappingUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snapping/BpmnSnappingUtil */ "./node_modules/bpmn-js/lib/features/snapping/BpmnSnappingUtil.js");








/**
 * BPMN specific modeling rule
 */

function BpmnRules(eventBus) {
  diagram_js_lib_features_rules_RuleProvider__WEBPACK_IMPORTED_MODULE_6___default.a.call(this, eventBus);
}
inherits__WEBPACK_IMPORTED_MODULE_1___default()(BpmnRules, diagram_js_lib_features_rules_RuleProvider__WEBPACK_IMPORTED_MODULE_6___default.a);
BpmnRules.$inject = ['eventBus'];

BpmnRules.prototype.init = function () {
  this.addRule('connection.start', function (context) {
    var source = context.source;
    return canStartConnection(source);
  });
  this.addRule('connection.create', function (context) {
    var source = context.source,
        target = context.target,
        hints = context.hints || {},
        targetParent = hints.targetParent,
        targetAttach = hints.targetAttach; // don't allow incoming connections on
    // newly created boundary events
    // to boundary events

    if (targetAttach) {
      return false;
    } // temporarily set target parent for scoping
    // checks to work


    if (targetParent) {
      target.parent = targetParent;
    }

    try {
      return canConnect(source, target);
    } finally {
      // unset temporary target parent
      if (targetParent) {
        target.parent = null;
      }
    }
  });
  this.addRule('connection.reconnect', function (context) {
    var connection = context.connection,
        source = context.source,
        target = context.target;
    return canConnect(source, target, connection);
  });
  this.addRule('connection.updateWaypoints', function (context) {
    return {
      type: context.connection.type
    };
  });
  this.addRule('shape.resize', function (context) {
    var shape = context.shape,
        newBounds = context.newBounds;
    return canResize(shape, newBounds);
  });
  this.addRule('elements.create', function (context) {
    var elements = context.elements,
        position = context.position,
        target = context.target;
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["every"])(elements, function (element) {
      if (isConnection(element)) {
        return canConnect(element.source, element.target, element);
      }

      if (element.host) {
        return canAttach(element, element.host, null, position);
      }

      return canCreate(element, target, null, position);
    });
  });
  this.addRule('elements.move', function (context) {
    var target = context.target,
        shapes = context.shapes,
        position = context.position;
    return canAttach(shapes, target, null, position) || canReplace(shapes, target, position) || canMove(shapes, target, position) || canInsert(shapes, target, position);
  });
  this.addRule('shape.create', function (context) {
    return canCreate(context.shape, context.target, context.source, context.position);
  });
  this.addRule('shape.attach', function (context) {
    return canAttach(context.shape, context.target, null, context.position);
  });
  this.addRule('element.copy', function (context) {
    var element = context.element,
        elements = context.elements;
    return canCopy(elements, element);
  });
};

BpmnRules.prototype.canConnectMessageFlow = canConnectMessageFlow;
BpmnRules.prototype.canConnectSequenceFlow = canConnectSequenceFlow;
BpmnRules.prototype.canConnectDataAssociation = canConnectDataAssociation;
BpmnRules.prototype.canConnectAssociation = canConnectAssociation;
BpmnRules.prototype.canMove = canMove;
BpmnRules.prototype.canAttach = canAttach;
BpmnRules.prototype.canReplace = canReplace;
BpmnRules.prototype.canDrop = canDrop;
BpmnRules.prototype.canInsert = canInsert;
BpmnRules.prototype.canCreate = canCreate;
BpmnRules.prototype.canConnect = canConnect;
BpmnRules.prototype.canResize = canResize;
BpmnRules.prototype.canCopy = canCopy;
/**
 * Utility functions for rule checking
 */

/**
 * Checks if given element can be used for starting connection.
 *
 * @param  {Element} source
 * @return {Boolean}
 */

function canStartConnection(element) {
  if (nonExistingOrLabel(element)) {
    return null;
  }

  return Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(element, ['bpmn:FlowNode', 'bpmn:InteractionNode', 'bpmn:DataObjectReference', 'bpmn:DataStoreReference']);
}

function nonExistingOrLabel(element) {
  return !element || Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(element);
}

function isSame(a, b) {
  return a === b;
}

function getOrganizationalParent(element) {
  do {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Process')) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element);
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Participant')) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element).processRef || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element);
    }
  } while (element = element.parent);
}

function isTextAnnotation(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:TextAnnotation');
}

function isGroup(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Group') && !element.labelTarget;
}

function isCompensationBoundary(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:BoundaryEvent') && hasEventDefinition(element, 'bpmn:CompensateEventDefinition');
}

function isForCompensation(e) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(e).isForCompensation;
}

function isSameOrganization(a, b) {
  var parentA = getOrganizationalParent(a),
      parentB = getOrganizationalParent(b);
  return parentA === parentB;
}

function isMessageFlowSource(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:InteractionNode') && (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Event') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:ThrowEvent') && hasEventDefinitionOrNone(element, 'bpmn:MessageEventDefinition'));
}

function isMessageFlowTarget(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:InteractionNode') && !isForCompensation(element) && (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Event') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:CatchEvent') && hasEventDefinitionOrNone(element, 'bpmn:MessageEventDefinition'));
}

function getScopeParent(element) {
  var parent = element;

  while (parent = parent.parent) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(parent, 'bpmn:FlowElementsContainer')) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(parent);
    }

    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(parent, 'bpmn:Participant')) {
      return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(parent).processRef;
    }
  }

  return null;
}

function isSameScope(a, b) {
  var scopeParentA = getScopeParent(a),
      scopeParentB = getScopeParent(b);
  return scopeParentA === scopeParentB;
}

function hasEventDefinition(element, eventDefinition) {
  var bo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element);
  return !!Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(bo.eventDefinitions || [], function (definition) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(definition, eventDefinition);
  });
}

function hasEventDefinitionOrNone(element, eventDefinition) {
  var bo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element);
  return (bo.eventDefinitions || []).every(function (definition) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(definition, eventDefinition);
  });
}

function isSequenceFlowSource(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:FlowNode') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:EndEvent') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isEventSubProcess"])(element) && !(Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:IntermediateThrowEvent') && hasEventDefinition(element, 'bpmn:LinkEventDefinition')) && !isCompensationBoundary(element) && !isForCompensation(element);
}

function isSequenceFlowTarget(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:FlowNode') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:StartEvent') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:BoundaryEvent') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isEventSubProcess"])(element) && !(Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:IntermediateCatchEvent') && hasEventDefinition(element, 'bpmn:LinkEventDefinition')) && !isForCompensation(element);
}

function isEventBasedTarget(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:ReceiveTask') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:IntermediateCatchEvent') && (hasEventDefinition(element, 'bpmn:MessageEventDefinition') || hasEventDefinition(element, 'bpmn:TimerEventDefinition') || hasEventDefinition(element, 'bpmn:ConditionalEventDefinition') || hasEventDefinition(element, 'bpmn:SignalEventDefinition'));
}

function isConnection(element) {
  return element.waypoints;
}

function getParents(element) {
  var parents = [];

  while (element) {
    element = element.parent;

    if (element) {
      parents.push(element);
    }
  }

  return parents;
}

function isParent(possibleParent, element) {
  var allParents = getParents(element);
  return allParents.indexOf(possibleParent) !== -1;
}

function canConnect(source, target, connection) {
  if (nonExistingOrLabel(source) || nonExistingOrLabel(target)) {
    return null;
  }

  if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(connection, 'bpmn:DataAssociation')) {
    if (canConnectMessageFlow(source, target)) {
      return {
        type: 'bpmn:MessageFlow'
      };
    }

    if (canConnectSequenceFlow(source, target)) {
      return {
        type: 'bpmn:SequenceFlow'
      };
    }
  }

  var connectDataAssociation = canConnectDataAssociation(source, target);

  if (connectDataAssociation) {
    return connectDataAssociation;
  }

  if (isCompensationBoundary(source) && isForCompensation(target)) {
    return {
      type: 'bpmn:Association',
      associationDirection: 'One'
    };
  }

  if (canConnectAssociation(source, target)) {
    return {
      type: 'bpmn:Association'
    };
  }

  return false;
}
/**
 * Can an element be dropped into the target element
 *
 * @return {Boolean}
 */


function canDrop(element, target, position) {
  // can move labels and groups everywhere
  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(element) || isGroup(element)) {
    return true;
  } // disallow to create elements on collapsed pools


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Participant') && !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(target)) {
    return false;
  } // allow to create new participants on
  // existing collaboration and process diagrams


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Participant')) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Process') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Collaboration');
  } // allow moving DataInput / DataOutput within its original container only


  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(element, ['bpmn:DataInput', 'bpmn:DataOutput'])) {
    if (element.parent) {
      return target === element.parent;
    }
  } // allow creating lanes on participants and other lanes only


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Lane')) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Participant') || Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Lane');
  } // disallow dropping boundary events which cannot replace with intermediate event


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:BoundaryEvent') && !isDroppableBoundaryEvent(element)) {
    return false;
  } // drop flow elements onto flow element containers
  // and participants


  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:FlowElement') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:DataStoreReference')) {
    if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:FlowElementsContainer')) {
      return Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(target);
    }

    return Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(target, ['bpmn:Participant', 'bpmn:Lane']);
  } // account for the fact that data associations are always
  // rendered and moved to top (Process or Collaboration level)
  //
  // artifacts may be placed wherever, too


  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(element, ['bpmn:Artifact', 'bpmn:DataAssociation', 'bpmn:DataStoreReference'])) {
    return Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(target, ['bpmn:Collaboration', 'bpmn:Lane', 'bpmn:Participant', 'bpmn:Process', 'bpmn:SubProcess']);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:MessageFlow')) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Collaboration') || element.source.parent == target || element.target.parent == target;
  }

  return false;
}

function isDroppableBoundaryEvent(event) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(event).cancelActivity && (hasNoEventDefinition(event) || hasCommonBoundaryIntermediateEventDefinition(event));
}

function isBoundaryEvent(element) {
  return !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(element) && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:BoundaryEvent');
}

function isLane(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Lane');
}
/**
 * We treat IntermediateThrowEvents as boundary events during create,
 * this must be reflected in the rules.
 */


function isBoundaryCandidate(element) {
  if (isBoundaryEvent(element)) {
    return true;
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:IntermediateThrowEvent') && hasNoEventDefinition(element)) {
    return true;
  }

  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:IntermediateCatchEvent') && hasCommonBoundaryIntermediateEventDefinition(element);
}

function hasNoEventDefinition(element) {
  var bo = Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element);
  return bo && !(bo.eventDefinitions && bo.eventDefinitions.length);
}

function hasCommonBoundaryIntermediateEventDefinition(element) {
  return hasOneOfEventDefinitions(element, ['bpmn:MessageEventDefinition', 'bpmn:TimerEventDefinition', 'bpmn:SignalEventDefinition', 'bpmn:ConditionalEventDefinition']);
}

function hasOneOfEventDefinitions(element, eventDefinitions) {
  return eventDefinitions.some(function (definition) {
    return hasEventDefinition(element, definition);
  });
}

function isReceiveTaskAfterEventBasedGateway(element) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:ReceiveTask') && Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(element.incoming, function (incoming) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(incoming.source, 'bpmn:EventBasedGateway');
  });
}

function canAttach(elements, target, source, position) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  } // only (re-)attach one element at a time


  if (elements.length !== 1) {
    return false;
  }

  var element = elements[0]; // do not attach labels

  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(element)) {
    return false;
  } // only handle boundary events


  if (!isBoundaryCandidate(element)) {
    return false;
  } // disallow drop on event sub processes


  if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isEventSubProcess"])(target)) {
    return false;
  } // only allow drop on non compensation activities


  if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Activity') || isForCompensation(target)) {
    return false;
  } // only attach to subprocess border


  if (position && !Object(_snapping_BpmnSnappingUtil__WEBPACK_IMPORTED_MODULE_7__["getBoundaryAttachment"])(position, target)) {
    return false;
  } // do not attach on receive tasks after event based gateways


  if (isReceiveTaskAfterEventBasedGateway(target)) {
    return false;
  }

  return 'attach';
}
/**
 * Defines how to replace elements for a given target.
 *
 * Returns an array containing all elements which will be replaced.
 *
 * @example
 *
 *  [{ id: 'IntermediateEvent_2',
 *     type: 'bpmn:StartEvent'
 *   },
 *   { id: 'IntermediateEvent_5',
 *     type: 'bpmn:EndEvent'
 *   }]
 *
 * @param  {Array} elements
 * @param  {Object} target
 *
 * @return {Object} an object containing all elements which have to be replaced
 */


function canReplace(elements, target, position) {
  if (!target) {
    return false;
  }

  var canExecute = {
    replacements: []
  };
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(elements, function (element) {
    if (!Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isEventSubProcess"])(target)) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:StartEvent') && element.type !== 'label' && canDrop(element, target)) {
        // replace a non-interrupting start event by a blank interrupting start event
        // when the target is not an event sub process
        if (!Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isInterrupting"])(element)) {
          canExecute.replacements.push({
            oldElementId: element.id,
            newElementType: 'bpmn:StartEvent'
          });
        } // replace an error/escalation/compensate start event by a blank interrupting start event
        // when the target is not an event sub process


        if (Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["hasErrorEventDefinition"])(element) || Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["hasEscalationEventDefinition"])(element) || Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["hasCompensateEventDefinition"])(element)) {
          canExecute.replacements.push({
            oldElementId: element.id,
            newElementType: 'bpmn:StartEvent'
          });
        }
      }
    }

    if (!Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(target, 'bpmn:Transaction')) {
      if (hasEventDefinition(element, 'bpmn:CancelEventDefinition') && element.type !== 'label') {
        if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:EndEvent') && canDrop(element, target)) {
          canExecute.replacements.push({
            oldElementId: element.id,
            newElementType: 'bpmn:EndEvent'
          });
        }

        if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:BoundaryEvent') && canAttach(element, target, null, position)) {
          canExecute.replacements.push({
            oldElementId: element.id,
            newElementType: 'bpmn:BoundaryEvent'
          });
        }
      }
    }
  });
  return canExecute.replacements.length ? canExecute : false;
}

function canMove(elements, target) {
  // do not move selection containing lanes
  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["some"])(elements, isLane)) {
    return false;
  } // allow default move check to start move operation


  if (!target) {
    return true;
  }

  return elements.every(function (element) {
    return canDrop(element, target);
  });
}

function canCreate(shape, target, source, position) {
  if (!target) {
    return false;
  }

  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(shape) || isGroup(shape)) {
    return true;
  }

  if (isSame(source, target)) {
    return false;
  } // ensure we do not drop the element
  // into source


  if (source && isParent(source, target)) {
    return false;
  }

  return canDrop(shape, target, position) || canInsert(shape, target, position);
}

function canResize(shape, newBounds) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:SubProcess')) {
    return Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_5__["isExpanded"])(shape) && (!newBounds || newBounds.width >= 100 && newBounds.height >= 80);
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Lane')) {
    return !newBounds || newBounds.width >= 130 && newBounds.height >= 60;
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:Participant')) {
    return !newBounds || newBounds.width >= 250 && newBounds.height >= 50;
  }

  if (isTextAnnotation(shape)) {
    return true;
  }

  if (isGroup(shape)) {
    return true;
  }

  return false;
}
/**
 * Check, whether one side of the relationship
 * is a text annotation.
 */


function isOneTextAnnotation(source, target) {
  var sourceTextAnnotation = isTextAnnotation(source),
      targetTextAnnotation = isTextAnnotation(target);
  return (sourceTextAnnotation || targetTextAnnotation) && sourceTextAnnotation !== targetTextAnnotation;
}

function canConnectAssociation(source, target) {
  // do not connect connections
  if (isConnection(source) || isConnection(target)) {
    return false;
  } // compensation boundary events are exception


  if (isCompensationBoundary(source) && isForCompensation(target)) {
    return true;
  } // don't connect parent <-> child


  if (isParent(target, source) || isParent(source, target)) {
    return false;
  } // allow connection of associations between <!TextAnnotation> and <TextAnnotation>


  if (isOneTextAnnotation(source, target)) {
    return true;
  } // can connect associations where we can connect
  // data associations, too (!)


  return !!canConnectDataAssociation(source, target);
}

function canConnectMessageFlow(source, target) {
  // during connect user might move mouse out of canvas
  // https://github.com/bpmn-io/bpmn-js/issues/1033
  if (getRootElement(source) && !getRootElement(target)) {
    return false;
  }

  return isMessageFlowSource(source) && isMessageFlowTarget(target) && !isSameOrganization(source, target);
}

function canConnectSequenceFlow(source, target) {
  if (isEventBasedTarget(target) && target.incoming.length > 0 && areOutgoingEventBasedGatewayConnections(target.incoming) && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(source, 'bpmn:EventBasedGateway')) {
    return false;
  }

  return isSequenceFlowSource(source) && isSequenceFlowTarget(target) && isSameScope(source, target) && !(Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(source, 'bpmn:EventBasedGateway') && !isEventBasedTarget(target));
}

function canConnectDataAssociation(source, target) {
  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(source, ['bpmn:DataObjectReference', 'bpmn:DataStoreReference']) && Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(target, ['bpmn:Activity', 'bpmn:ThrowEvent'])) {
    return {
      type: 'bpmn:DataInputAssociation'
    };
  }

  if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(target, ['bpmn:DataObjectReference', 'bpmn:DataStoreReference']) && Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(source, ['bpmn:Activity', 'bpmn:CatchEvent'])) {
    return {
      type: 'bpmn:DataOutputAssociation'
    };
  }

  return false;
}

function canInsert(shape, flow, position) {
  if (!flow) {
    return false;
  }

  if (Array.isArray(shape)) {
    if (shape.length !== 1) {
      return false;
    }

    shape = shape[0];
  }

  if (flow.source === shape || flow.target === shape) {
    return false;
  } // return true if we can drop on the
  // underlying flow parent
  //
  // at this point we are not really able to talk
  // about connection rules (yet)


  return Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["isAny"])(flow, ['bpmn:SequenceFlow', 'bpmn:MessageFlow']) && !Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(flow) && Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:FlowNode') && !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(shape, 'bpmn:BoundaryEvent') && canDrop(shape, flow.parent, position);
}

function includes(elements, element) {
  return elements && element && elements.indexOf(element) !== -1;
}

function canCopy(elements, element) {
  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_4__["isLabel"])(element)) {
    return true;
  }

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(element, 'bpmn:Lane') && !includes(elements, element.parent)) {
    return false;
  }

  return true;
}

function isOutgoingEventBasedGatewayConnection(connection) {
  if (connection && connection.source) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["is"])(connection.source, 'bpmn:EventBasedGateway');
  }
}

function areOutgoingEventBasedGatewayConnections(connections) {
  connections = connections || [];
  return connections.some(isOutgoingEventBasedGatewayConnection);
}

function getRootElement(element) {
  return Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["getParent"])(element, 'bpmn:Process') || Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_3__["getParent"])(element, 'bpmn:Collaboration');
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/rules/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/rules/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/rules */ "diagram-js/lib/features/rules");
/* harmony import */ var diagram_js_lib_features_rules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_rules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnRules */ "./node_modules/bpmn-js/lib/features/rules/BpmnRules.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_rules__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['bpmnRules'],
  bpmnRules: ['type', _BpmnRules__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/search/BpmnSearchProvider.js":
/*!************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/search/BpmnSearchProvider.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnSearchProvider; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label-editing/LabelUtil */ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js");


/**
 * Provides ability to search through BPMN elements
 */

function BpmnSearchProvider(elementRegistry, searchPad, canvas) {
  this._elementRegistry = elementRegistry;
  this._canvas = canvas;
  searchPad.registerProvider(this);
}
BpmnSearchProvider.$inject = ['elementRegistry', 'searchPad', 'canvas'];
/**
 * Finds all elements that match given pattern
 *
 * <Result> :
 *  {
 *    primaryTokens: <Array<Token>>,
 *    secondaryTokens: <Array<Token>>,
 *    element: <Element>
 *  }
 *
 * <Token> :
 *  {
 *    normal|matched: <String>
 *  }
 *
 * @param  {String} pattern
 * @return {Array<Result>}
 */

BpmnSearchProvider.prototype.find = function (pattern) {
  var rootElement = this._canvas.getRootElement();

  var elements = this._elementRegistry.filter(function (element) {
    if (element.labelTarget) {
      return false;
    }

    return true;
  }); // do not include root element


  elements = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(elements, function (element) {
    return element !== rootElement;
  });
  elements = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["map"])(elements, function (element) {
    return {
      primaryTokens: matchAndSplit(Object(_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["getLabel"])(element), pattern),
      secondaryTokens: matchAndSplit(element.id, pattern),
      element: element
    };
  }); // exclude non-matched elements

  elements = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(elements, function (element) {
    return hasMatched(element.primaryTokens) || hasMatched(element.secondaryTokens);
  });
  elements = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(elements, function (element) {
    return Object(_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_1__["getLabel"])(element.element) + element.element.id;
  });
  return elements;
};

function hasMatched(tokens) {
  var matched = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(tokens, function (t) {
    return !!t.matched;
  });
  return matched.length > 0;
}

function matchAndSplit(text, pattern) {
  var tokens = [],
      originalText = text;

  if (!text) {
    return tokens;
  }

  text = text.toLowerCase();
  pattern = pattern.toLowerCase();
  var i = text.indexOf(pattern);

  if (i > -1) {
    if (i !== 0) {
      tokens.push({
        normal: originalText.substr(0, i)
      });
    }

    tokens.push({
      matched: originalText.substr(i, pattern.length)
    });

    if (pattern.length + i < text.length) {
      tokens.push({
        normal: originalText.substr(pattern.length + i, text.length)
      });
    }
  } else {
    tokens.push({
      normal: originalText
    });
  }

  return tokens;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/search/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/search/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_features_search_pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/search-pad */ "diagram-js/lib/features/search-pad");
/* harmony import */ var diagram_js_lib_features_search_pad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_search_pad__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnSearchProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnSearchProvider */ "./node_modules/bpmn-js/lib/features/search/BpmnSearchProvider.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_search_pad__WEBPACK_IMPORTED_MODULE_0___default.a],
  __init__: ['bpmnSearch'],
  bpmnSearch: ['type', _BpmnSearchProvider__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/snapping/BpmnConnectSnapping.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/snapping/BpmnConnectSnapping.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnConnectSnapping; });
/* harmony import */ var diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/features/snapping/SnapUtil */ "diagram-js/lib/features/snapping/SnapUtil");
/* harmony import */ var diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_keyboard_KeyboardUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/keyboard/KeyboardUtil */ "diagram-js/lib/features/keyboard/KeyboardUtil");
/* harmony import */ var diagram_js_lib_features_keyboard_KeyboardUtil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_keyboard_KeyboardUtil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modeling/util/ModelingUtil */ "./node_modules/bpmn-js/lib/features/modeling/util/ModelingUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_5__);






var HIGHER_PRIORITY = 1250;
var BOUNDARY_TO_HOST_THRESHOLD = 40;
var TARGET_BOUNDS_PADDING = 20,
    TASK_BOUNDS_PADDING = 10;
var TARGET_CENTER_PADDING = 20;
var AXES = ['x', 'y'];
var abs = Math.abs;
/**
 * Snap during connect.
 *
 * @param {EventBus} eventBus
 */

function BpmnConnectSnapping(eventBus) {
  eventBus.on(['connect.hover', 'connect.move', 'connect.end'], HIGHER_PRIORITY, function (event) {
    var context = event.context,
        canExecute = context.canExecute,
        start = context.start,
        hover = context.hover,
        source = context.source,
        target = context.target; // do NOT snap on CMD

    if (event.originalEvent && Object(diagram_js_lib_features_keyboard_KeyboardUtil__WEBPACK_IMPORTED_MODULE_1__["isCmd"])(event.originalEvent)) {
      return;
    }

    if (!context.initialConnectionStart) {
      context.initialConnectionStart = context.connectionStart;
    } // snap hover


    if (canExecute && hover) {
      snapToShape(event, hover, getTargetBoundsPadding(hover));
    }

    if (hover && isAnyType(canExecute, ['bpmn:Association', 'bpmn:DataInputAssociation', 'bpmn:DataOutputAssociation', 'bpmn:SequenceFlow'])) {
      context.connectionStart = Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["mid"])(start); // snap hover

      if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__["isAny"])(hover, ['bpmn:Event', 'bpmn:Gateway'])) {
        snapToPosition(event, Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["mid"])(hover));
      } // snap hover


      if (Object(_modeling_util_ModelingUtil__WEBPACK_IMPORTED_MODULE_4__["isAny"])(hover, ['bpmn:Task', 'bpmn:SubProcess'])) {
        snapToTargetMid(event, hover);
      } // snap source and target


      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(source, 'bpmn:BoundaryEvent') && target === source.host) {
        snapBoundaryEventLoop(event);
      }
    } else if (isType(canExecute, 'bpmn:MessageFlow')) {
      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(start, 'bpmn:Event')) {
        // snap start
        context.connectionStart = Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["mid"])(start);
      }

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(hover, 'bpmn:Event')) {
        // snap hover
        snapToPosition(event, Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["mid"])(hover));
      }
    } else {
      // un-snap source
      context.connectionStart = context.initialConnectionStart;
    }
  });
}
BpmnConnectSnapping.$inject = ['eventBus']; // helpers //////////
// snap to target if event in target

function snapToShape(event, target, padding) {
  AXES.forEach(function (axis) {
    var dimensionForAxis = getDimensionForAxis(axis, target);

    if (event[axis] < target[axis] + padding) {
      Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["setSnapped"])(event, axis, target[axis] + padding);
    } else if (event[axis] > target[axis] + dimensionForAxis - padding) {
      Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["setSnapped"])(event, axis, target[axis] + dimensionForAxis - padding);
    }
  });
} // snap to target mid if event in target mid


function snapToTargetMid(event, target) {
  var targetMid = Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["mid"])(target);
  AXES.forEach(function (axis) {
    if (isMid(event, target, axis)) {
      Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["setSnapped"])(event, axis, targetMid[axis]);
    }
  });
} // snap to prevent loop overlapping boundary event


function snapBoundaryEventLoop(event) {
  var context = event.context,
      source = context.source,
      target = context.target;

  if (isReverse(context)) {
    return;
  }

  var sourceMid = Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["mid"])(source),
      orientation = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_2__["getOrientation"])(sourceMid, target, -10),
      axes = [];

  if (/top|bottom/.test(orientation)) {
    axes.push('x');
  }

  if (/left|right/.test(orientation)) {
    axes.push('y');
  }

  axes.forEach(function (axis) {
    var coordinate = event[axis],
        newCoordinate;

    if (abs(coordinate - sourceMid[axis]) < BOUNDARY_TO_HOST_THRESHOLD) {
      if (coordinate > sourceMid[axis]) {
        newCoordinate = sourceMid[axis] + BOUNDARY_TO_HOST_THRESHOLD;
      } else {
        newCoordinate = sourceMid[axis] - BOUNDARY_TO_HOST_THRESHOLD;
      }

      Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["setSnapped"])(event, axis, newCoordinate);
    }
  });
}

function snapToPosition(event, position) {
  Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["setSnapped"])(event, 'x', position.x);
  Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_0__["setSnapped"])(event, 'y', position.y);
}

function isType(attrs, type) {
  return attrs && attrs.type === type;
}

function isAnyType(attrs, types) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_5__["some"])(types, function (type) {
    return isType(attrs, type);
  });
}

function getDimensionForAxis(axis, element) {
  return axis === 'x' ? element.width : element.height;
}

function getTargetBoundsPadding(target) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_3__["is"])(target, 'bpmn:Task')) {
    return TASK_BOUNDS_PADDING;
  } else {
    return TARGET_BOUNDS_PADDING;
  }
}

function isMid(event, target, axis) {
  return event[axis] > target[axis] + TARGET_CENTER_PADDING && event[axis] < target[axis] + getDimensionForAxis(axis, target) - TARGET_CENTER_PADDING;
}

function isReverse(context) {
  var hover = context.hover,
      source = context.source;
  return hover && source && hover === source;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/snapping/BpmnCreateMoveSnapping.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/snapping/BpmnCreateMoveSnapping.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnCreateMoveSnapping; });
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inherits */ "inherits");
/* harmony import */ var inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inherits__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diagram-js/lib/features/snapping/CreateMoveSnapping */ "diagram-js/lib/features/snapping/CreateMoveSnapping");
/* harmony import */ var diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/features/snapping/SnapUtil */ "diagram-js/lib/features/snapping/SnapUtil");
/* harmony import */ var diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BpmnSnappingUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BpmnSnappingUtil */ "./node_modules/bpmn-js/lib/features/snapping/BpmnSnappingUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_7__);








var HIGH_PRIORITY = 1500;
/**
 * Snap during create and move.
 *
 * @param {EventBus} eventBus
 * @param {Injector} injector
 */

function BpmnCreateMoveSnapping(eventBus, injector) {
  injector.invoke(diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1___default.a, this); // creating first participant

  eventBus.on(['create.move', 'create.end'], HIGH_PRIORITY, setSnappedIfConstrained); // snap boundary events

  eventBus.on(['create.move', 'create.end', 'shape.move.move', 'shape.move.end'], HIGH_PRIORITY, function (event) {
    var context = event.context,
        canExecute = context.canExecute,
        target = context.target;
    var canAttach = canExecute && (canExecute === 'attach' || canExecute.attach);

    if (canAttach && !Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["isSnapped"])(event)) {
      snapBoundaryEvent(event, target);
    }
  });
}
inherits__WEBPACK_IMPORTED_MODULE_0___default()(BpmnCreateMoveSnapping, diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1___default.a);
BpmnCreateMoveSnapping.$inject = ['eventBus', 'injector'];

BpmnCreateMoveSnapping.prototype.initSnap = function (event) {
  var snapContext = diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.initSnap.call(this, event);
  var shape = event.shape;
  var isMove = !!this._elementRegistry.get(shape.id); // snap to docking points

  Object(min_dash__WEBPACK_IMPORTED_MODULE_7__["forEach"])(shape.outgoing, function (connection) {
    var docking = connection.waypoints[0];
    docking = docking.original || docking;
    snapContext.setSnapOrigin(connection.id + '-docking', getDockingSnapOrigin(docking, isMove, event));
  });
  Object(min_dash__WEBPACK_IMPORTED_MODULE_7__["forEach"])(shape.incoming, function (connection) {
    var docking = connection.waypoints[connection.waypoints.length - 1];
    docking = docking.original || docking;
    snapContext.setSnapOrigin(connection.id + '-docking', getDockingSnapOrigin(docking, isMove, event));
  });

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(shape, 'bpmn:Participant')) {
    // snap to borders with higher priority
    snapContext.setSnapLocations(['top-left', 'bottom-right', 'mid']);
  }

  return snapContext;
};

BpmnCreateMoveSnapping.prototype.addSnapTargetPoints = function (snapPoints, shape, target) {
  diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.addSnapTargetPoints.call(this, snapPoints, shape, target);
  var snapTargets = this.getSnapTargets(shape, target);
  Object(min_dash__WEBPACK_IMPORTED_MODULE_7__["forEach"])(snapTargets, function (snapTarget) {
    // handle TRBL alignment
    //
    // * with container elements
    // * with text annotations
    if (isContainer(snapTarget) || areAll([shape, snapTarget], 'bpmn:TextAnnotation')) {
      snapPoints.add('top-left', Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["topLeft"])(snapTarget));
      snapPoints.add('bottom-right', Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["bottomRight"])(snapTarget));
    }
  });
  var elementRegistry = this._elementRegistry; // snap to docking points if not create mode

  Object(min_dash__WEBPACK_IMPORTED_MODULE_7__["forEach"])(shape.incoming, function (connection) {
    if (elementRegistry.get(shape.id)) {
      if (!includes(snapTargets, connection.source)) {
        snapPoints.add('mid', Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5__["getMid"])(connection.source));
      }

      var docking = connection.waypoints[0];
      snapPoints.add(connection.id + '-docking', docking.original || docking);
    }
  });
  Object(min_dash__WEBPACK_IMPORTED_MODULE_7__["forEach"])(shape.outgoing, function (connection) {
    if (elementRegistry.get(shape.id)) {
      if (!includes(snapTargets, connection.target)) {
        snapPoints.add('mid', Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5__["getMid"])(connection.target));
      }

      var docking = connection.waypoints[connection.waypoints.length - 1];
      snapPoints.add(connection.id + '-docking', docking.original || docking);
    }
  }); // add sequence flow parents as snap targets

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(target, 'bpmn:SequenceFlow')) {
    snapPoints = this.addSnapTargetPoints(snapPoints, shape, target.parent);
  }

  return snapPoints;
};

BpmnCreateMoveSnapping.prototype.getSnapTargets = function (shape, target) {
  return diagram_js_lib_features_snapping_CreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.getSnapTargets.call(this, shape, target).filter(function (snapTarget) {
    // do not snap to lanes
    return !Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(snapTarget, 'bpmn:Lane');
  });
}; // helpers //////////


function snapBoundaryEvent(event, target) {
  var targetTRBL = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5__["asTRBL"])(target);
  var direction = Object(_BpmnSnappingUtil__WEBPACK_IMPORTED_MODULE_6__["getBoundaryAttachment"])(event, target);
  var context = event.context,
      shape = context.shape;
  var offset;

  if (shape.parent) {
    offset = {
      x: 0,
      y: 0
    };
  } else {
    offset = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_5__["getMid"])(shape);
  }

  if (/top/.test(direction)) {
    Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["setSnapped"])(event, 'y', targetTRBL.top - offset.y);
  } else if (/bottom/.test(direction)) {
    Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["setSnapped"])(event, 'y', targetTRBL.bottom - offset.y);
  }

  if (/left/.test(direction)) {
    Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["setSnapped"])(event, 'x', targetTRBL.left - offset.x);
  } else if (/right/.test(direction)) {
    Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["setSnapped"])(event, 'x', targetTRBL.right - offset.x);
  }
}

function areAll(elements, type) {
  return elements.every(function (el) {
    return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(el, type);
  });
}

function isContainer(element) {
  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:SubProcess') && Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_3__["isExpanded"])(element)) {
    return true;
  }

  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_4__["is"])(element, 'bpmn:Participant');
}

function setSnappedIfConstrained(event) {
  var context = event.context,
      createConstraints = context.createConstraints;

  if (!createConstraints) {
    return;
  }

  var top = createConstraints.top,
      right = createConstraints.right,
      bottom = createConstraints.bottom,
      left = createConstraints.left;

  if (left && left >= event.x || right && right <= event.x) {
    Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["setSnapped"])(event, 'x', event.x);
  }

  if (top && top >= event.y || bottom && bottom <= event.y) {
    Object(diagram_js_lib_features_snapping_SnapUtil__WEBPACK_IMPORTED_MODULE_2__["setSnapped"])(event, 'y', event.y);
  }
}

function includes(array, value) {
  return array.indexOf(value) !== -1;
}

function getDockingSnapOrigin(docking, isMove, event) {
  return isMove ? {
    x: docking.x - event.x,
    y: docking.y - event.y
  } : {
    x: docking.x,
    y: docking.y
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/snapping/BpmnSnappingUtil.js":
/*!************************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/snapping/BpmnSnappingUtil.js ***!
  \************************************************************************/
/*! exports provided: getBoundaryAttachment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundaryAttachment", function() { return getBoundaryAttachment; });
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__);

function getBoundaryAttachment(position, targetBounds) {
  var orientation = Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_0__["getOrientation"])(position, targetBounds, -15);

  if (orientation !== 'intersect') {
    return orientation;
  } else {
    return null;
  }
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/features/snapping/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmn-js/lib/features/snapping/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BpmnConnectSnapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpmnConnectSnapping */ "./node_modules/bpmn-js/lib/features/snapping/BpmnConnectSnapping.js");
/* harmony import */ var _BpmnCreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnCreateMoveSnapping */ "./node_modules/bpmn-js/lib/features/snapping/BpmnCreateMoveSnapping.js");
/* harmony import */ var diagram_js_lib_features_snapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diagram-js/lib/features/snapping */ "diagram-js/lib/features/snapping");
/* harmony import */ var diagram_js_lib_features_snapping__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_features_snapping__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_features_snapping__WEBPACK_IMPORTED_MODULE_2___default.a],
  __init__: ['connectSnapping', 'createMoveSnapping'],
  connectSnapping: ['type', _BpmnConnectSnapping__WEBPACK_IMPORTED_MODULE_0__["default"]],
  createMoveSnapping: ['type', _BpmnCreateMoveSnapping__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/import/BpmnImporter.js":
/*!*********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/import/BpmnImporter.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnImporter; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _util_LabelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/LabelUtil */ "./node_modules/bpmn-js/lib/util/LabelUtil.js");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/layout/LayoutUtil */ "diagram-js/lib/layout/LayoutUtil");
/* harmony import */ var diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_DiUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DiUtil */ "./node_modules/bpmn-js/lib/util/DiUtil.js");
/* harmony import */ var _features_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/label-editing/LabelUtil */ "./node_modules/bpmn-js/lib/features/label-editing/LabelUtil.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util */ "./node_modules/bpmn-js/lib/import/Util.js");








function elementData(semantic, attrs) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    id: semantic.id,
    type: semantic.$type,
    businessObject: semantic
  }, attrs);
}

function getWaypoints(bo, source, target) {
  var waypoints = bo.di.waypoint;

  if (!waypoints || waypoints.length < 2) {
    return [Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__["getMid"])(source), Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__["getMid"])(target)];
  }

  return waypoints.map(function (p) {
    return {
      x: p.x,
      y: p.y
    };
  });
}

function notYetDrawn(translate, semantic, refSemantic, property) {
  return new Error(translate('element {element} referenced by {referenced}#{property} not yet drawn', {
    element: Object(_Util__WEBPACK_IMPORTED_MODULE_6__["elementToString"])(refSemantic),
    referenced: Object(_Util__WEBPACK_IMPORTED_MODULE_6__["elementToString"])(semantic),
    property: property
  }));
}
/**
 * An importer that adds bpmn elements to the canvas
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 * @param {ElementFactory} elementFactory
 * @param {ElementRegistry} elementRegistry
 * @param {Function} translate
 * @param {TextRenderer} textRenderer
 */


function BpmnImporter(eventBus, canvas, elementFactory, elementRegistry, translate, textRenderer) {
  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementFactory = elementFactory;
  this._elementRegistry = elementRegistry;
  this._translate = translate;
  this._textRenderer = textRenderer;
}
BpmnImporter.$inject = ['eventBus', 'canvas', 'elementFactory', 'elementRegistry', 'translate', 'textRenderer'];
/**
 * Add bpmn element (semantic) to the canvas onto the
 * specified parent shape.
 */

BpmnImporter.prototype.add = function (semantic, parentElement) {
  var di = semantic.di,
      element,
      translate = this._translate,
      hidden;
  var parentIndex; // ROOT ELEMENT
  // handle the special case that we deal with a
  // invisible root element (process or collaboration)

  if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(di, 'bpmndi:BPMNPlane')) {
    // add a virtual element (not being drawn)
    element = this._elementFactory.createRoot(elementData(semantic));

    this._canvas.setRootElement(element);
  } // SHAPE
  else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(di, 'bpmndi:BPMNShape')) {
      var collapsed = !Object(_util_DiUtil__WEBPACK_IMPORTED_MODULE_4__["isExpanded"])(semantic),
          isFrame = isFrameElement(semantic);
      hidden = parentElement && (parentElement.hidden || parentElement.collapsed);
      var bounds = semantic.di.bounds;
      element = this._elementFactory.createShape(elementData(semantic, {
        collapsed: collapsed,
        hidden: hidden,
        x: Math.round(bounds.x),
        y: Math.round(bounds.y),
        width: Math.round(bounds.width),
        height: Math.round(bounds.height),
        isFrame: isFrame
      }));

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:BoundaryEvent')) {
        this._attachBoundary(semantic, element);
      } // insert lanes behind other flow nodes (cf. #727)


      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:Lane')) {
        parentIndex = 0;
      }

      if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:DataStoreReference')) {
        // check whether data store is inside our outside of its semantic parent
        if (!isPointInsideBBox(parentElement, Object(diagram_js_lib_layout_LayoutUtil__WEBPACK_IMPORTED_MODULE_3__["getMid"])(bounds))) {
          parentElement = this._canvas.getRootElement();
        }
      }

      this._canvas.addShape(element, parentElement, parentIndex);
    } // CONNECTION
    else if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(di, 'bpmndi:BPMNEdge')) {
        var source = this._getSource(semantic),
            target = this._getTarget(semantic);

        hidden = parentElement && (parentElement.hidden || parentElement.collapsed);
        element = this._elementFactory.createConnection(elementData(semantic, {
          hidden: hidden,
          source: source,
          target: target,
          waypoints: getWaypoints(semantic, source, target)
        }));

        if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:DataAssociation')) {
          // render always on top; this ensures DataAssociations
          // are rendered correctly across different "hacks" people
          // love to model such as cross participant / sub process
          // associations
          parentElement = null;
        } // insert sequence flows behind other flow nodes (cf. #727)


        if (Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:SequenceFlow')) {
          parentIndex = 0;
        }

        this._canvas.addConnection(element, parentElement, parentIndex);
      } else {
        throw new Error(translate('unknown di {di} for element {semantic}', {
          di: Object(_Util__WEBPACK_IMPORTED_MODULE_6__["elementToString"])(di),
          semantic: Object(_Util__WEBPACK_IMPORTED_MODULE_6__["elementToString"])(semantic)
        }));
      } // (optional) LABEL


  if (Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_2__["isLabelExternal"])(semantic) && Object(_features_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_5__["getLabel"])(element)) {
    this.addLabel(semantic, element);
  }

  this._eventBus.fire('bpmnElement.added', {
    element: element
  });

  return element;
};
/**
 * Attach the boundary element to the given host
 *
 * @param {ModdleElement} boundarySemantic
 * @param {djs.model.Base} boundaryElement
 */


BpmnImporter.prototype._attachBoundary = function (boundarySemantic, boundaryElement) {
  var translate = this._translate;
  var hostSemantic = boundarySemantic.attachedToRef;

  if (!hostSemantic) {
    throw new Error(translate('missing {semantic}#attachedToRef', {
      semantic: Object(_Util__WEBPACK_IMPORTED_MODULE_6__["elementToString"])(boundarySemantic)
    }));
  }

  var host = this._elementRegistry.get(hostSemantic.id),
      attachers = host && host.attachers;

  if (!host) {
    throw notYetDrawn(translate, boundarySemantic, hostSemantic, 'attachedToRef');
  } // wire element.host <> host.attachers


  boundaryElement.host = host;

  if (!attachers) {
    host.attachers = attachers = [];
  }

  if (attachers.indexOf(boundaryElement) === -1) {
    attachers.push(boundaryElement);
  }
};
/**
 * add label for an element
 */


BpmnImporter.prototype.addLabel = function (semantic, element) {
  var bounds, text, label;
  bounds = Object(_util_LabelUtil__WEBPACK_IMPORTED_MODULE_2__["getExternalLabelBounds"])(semantic, element);
  text = Object(_features_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_5__["getLabel"])(element);

  if (text) {
    // get corrected bounds from actual layouted text
    bounds = this._textRenderer.getExternalLabelBounds(bounds, text);
  }

  label = this._elementFactory.createLabel(elementData(semantic, {
    id: semantic.id + '_label',
    labelTarget: element,
    type: 'label',
    hidden: element.hidden || !Object(_features_label_editing_LabelUtil__WEBPACK_IMPORTED_MODULE_5__["getLabel"])(element),
    x: Math.round(bounds.x),
    y: Math.round(bounds.y),
    width: Math.round(bounds.width),
    height: Math.round(bounds.height)
  }));
  return this._canvas.addShape(label, element.parent);
};
/**
 * Return the drawn connection end based on the given side.
 *
 * @throws {Error} if the end is not yet drawn
 */


BpmnImporter.prototype._getEnd = function (semantic, side) {
  var element,
      refSemantic,
      type = semantic.$type,
      translate = this._translate;
  refSemantic = semantic[side + 'Ref']; // handle mysterious isMany DataAssociation#sourceRef

  if (side === 'source' && type === 'bpmn:DataInputAssociation') {
    refSemantic = refSemantic && refSemantic[0];
  } // fix source / target for DataInputAssociation / DataOutputAssociation


  if (side === 'source' && type === 'bpmn:DataOutputAssociation' || side === 'target' && type === 'bpmn:DataInputAssociation') {
    refSemantic = semantic.$parent;
  }

  element = refSemantic && this._getElement(refSemantic);

  if (element) {
    return element;
  }

  if (refSemantic) {
    throw notYetDrawn(translate, semantic, refSemantic, side + 'Ref');
  } else {
    throw new Error(translate('{semantic}#{side} Ref not specified', {
      semantic: Object(_Util__WEBPACK_IMPORTED_MODULE_6__["elementToString"])(semantic),
      side: side
    }));
  }
};

BpmnImporter.prototype._getSource = function (semantic) {
  return this._getEnd(semantic, 'source');
};

BpmnImporter.prototype._getTarget = function (semantic) {
  return this._getEnd(semantic, 'target');
};

BpmnImporter.prototype._getElement = function (semantic) {
  return this._elementRegistry.get(semantic.id);
}; // helpers ////////////////////


function isPointInsideBBox(bbox, point) {
  var x = point.x,
      y = point.y;
  return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
}

function isFrameElement(semantic) {
  return Object(_util_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:Group');
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/import/BpmnTreeWalker.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/import/BpmnTreeWalker.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BpmnTreeWalker; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-refs */ "object-refs");
/* harmony import */ var object_refs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_refs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util */ "./node_modules/bpmn-js/lib/import/Util.js");



var diRefs = new object_refs__WEBPACK_IMPORTED_MODULE_1___default.a({
  name: 'bpmnElement',
  enumerable: true
}, {
  name: 'di',
  configurable: true
});
/**
 * Returns true if an element has the given meta-model type
 *
 * @param  {ModdleElement}  element
 * @param  {String}         type
 *
 * @return {Boolean}
 */

function is(element, type) {
  return element.$instanceOf(type);
}
/**
 * Find a suitable display candidate for definitions where the DI does not
 * correctly specify one.
 */


function findDisplayCandidate(definitions) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(definitions.rootElements, function (e) {
    return is(e, 'bpmn:Process') || is(e, 'bpmn:Collaboration');
  });
}

function BpmnTreeWalker(handler, translate) {
  // list of containers already walked
  var handledElements = {}; // list of elements to handle deferred to ensure
  // prerequisites are drawn

  var deferred = []; // Helpers //////////////////////

  function contextual(fn, ctx) {
    return function (e) {
      fn(e, ctx);
    };
  }

  function handled(element) {
    handledElements[element.id] = element;
  }

  function isHandled(element) {
    return handledElements[element.id];
  }

  function visit(element, ctx) {
    var gfx = element.gfx; // avoid multiple rendering of elements

    if (gfx) {
      throw new Error(translate('already rendered {element}', {
        element: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(element)
      }));
    } // call handler


    return handler.element(element, ctx);
  }

  function visitRoot(element, diagram) {
    return handler.root(element, diagram);
  }

  function visitIfDi(element, ctx) {
    try {
      var gfx = element.di && visit(element, ctx);
      handled(element);
      return gfx;
    } catch (e) {
      logError(e.message, {
        element: element,
        error: e
      });
      console.error(translate('failed to import {element}', {
        element: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(element)
      }));
      console.error(e);
    }
  }

  function logError(message, context) {
    handler.error(message, context);
  } // DI handling //////////////////////


  function registerDi(di) {
    var bpmnElement = di.bpmnElement;

    if (bpmnElement) {
      if (bpmnElement.di) {
        logError(translate('multiple DI elements defined for {element}', {
          element: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(bpmnElement)
        }), {
          element: bpmnElement
        });
      } else {
        diRefs.bind(bpmnElement, 'di');
        bpmnElement.di = di;
      }
    } else {
      logError(translate('no bpmnElement referenced in {element}', {
        element: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(di)
      }), {
        element: di
      });
    }
  }

  function handleDiagram(diagram) {
    handlePlane(diagram.plane);
  }

  function handlePlane(plane) {
    registerDi(plane);
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(plane.planeElement, handlePlaneElement);
  }

  function handlePlaneElement(planeElement) {
    registerDi(planeElement);
  } // Semantic handling //////////////////////

  /**
   * Handle definitions and return the rendered diagram (if any)
   *
   * @param {ModdleElement} definitions to walk and import
   * @param {ModdleElement} [diagram] specific diagram to import and display
   *
   * @throws {Error} if no diagram to display could be found
   */


  function handleDefinitions(definitions, diagram) {
    // make sure we walk the correct bpmnElement
    var diagrams = definitions.diagrams;

    if (diagram && diagrams.indexOf(diagram) === -1) {
      throw new Error(translate('diagram not part of bpmn:Definitions'));
    }

    if (!diagram && diagrams && diagrams.length) {
      diagram = diagrams[0];
    } // no diagram -> nothing to import


    if (!diagram) {
      throw new Error(translate('no diagram to display'));
    } // load DI from selected diagram only


    handleDiagram(diagram);
    var plane = diagram.plane;

    if (!plane) {
      throw new Error(translate('no plane for {element}', {
        element: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(diagram)
      }));
    }

    var rootElement = plane.bpmnElement; // ensure we default to a suitable display candidate (process or collaboration),
    // even if non is specified in DI

    if (!rootElement) {
      rootElement = findDisplayCandidate(definitions);

      if (!rootElement) {
        throw new Error(translate('no process or collaboration to display'));
      } else {
        logError(translate('correcting missing bpmnElement on {plane} to {rootElement}', {
          plane: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(plane),
          rootElement: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(rootElement)
        })); // correct DI on the fly

        plane.bpmnElement = rootElement;
        registerDi(plane);
      }
    }

    var ctx = visitRoot(rootElement, plane);

    if (is(rootElement, 'bpmn:Process')) {
      handleProcess(rootElement, ctx);
    } else if (is(rootElement, 'bpmn:Collaboration')) {
      handleCollaboration(rootElement, ctx); // force drawing of everything not yet drawn that is part of the target DI

      handleUnhandledProcesses(definitions.rootElements, ctx);
    } else {
      throw new Error(translate('unsupported bpmnElement for {plane}: {rootElement}', {
        plane: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(plane),
        rootElement: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(rootElement)
      }));
    } // handle all deferred elements


    handleDeferred(deferred);
  }

  function handleDeferred() {
    var fn; // drain deferred until empty

    while (deferred.length) {
      fn = deferred.shift();
      fn();
    }
  }

  function handleProcess(process, context) {
    handleFlowElementsContainer(process, context);
    handleIoSpecification(process.ioSpecification, context);
    handleArtifacts(process.artifacts, context); // log process handled

    handled(process);
  }

  function handleUnhandledProcesses(rootElements, ctx) {
    // walk through all processes that have not yet been drawn and draw them
    // if they contain lanes with DI information.
    // we do this to pass the free-floating lane test cases in the MIWG test suite
    var processes = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(rootElements, function (e) {
      return !isHandled(e) && is(e, 'bpmn:Process') && e.laneSets;
    });
    processes.forEach(contextual(handleProcess, ctx));
  }

  function handleMessageFlow(messageFlow, context) {
    visitIfDi(messageFlow, context);
  }

  function handleMessageFlows(messageFlows, context) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(messageFlows, contextual(handleMessageFlow, context));
  }

  function handleDataAssociation(association, context) {
    visitIfDi(association, context);
  }

  function handleDataInput(dataInput, context) {
    visitIfDi(dataInput, context);
  }

  function handleDataOutput(dataOutput, context) {
    visitIfDi(dataOutput, context);
  }

  function handleArtifact(artifact, context) {
    // bpmn:TextAnnotation
    // bpmn:Group
    // bpmn:Association
    visitIfDi(artifact, context);
  }

  function handleArtifacts(artifacts, context) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(artifacts, function (e) {
      if (is(e, 'bpmn:Association')) {
        deferred.push(function () {
          handleArtifact(e, context);
        });
      } else {
        handleArtifact(e, context);
      }
    });
  }

  function handleIoSpecification(ioSpecification, context) {
    if (!ioSpecification) {
      return;
    }

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(ioSpecification.dataInputs, contextual(handleDataInput, context));
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(ioSpecification.dataOutputs, contextual(handleDataOutput, context));
  }

  function handleSubProcess(subProcess, context) {
    handleFlowElementsContainer(subProcess, context);
    handleArtifacts(subProcess.artifacts, context);
  }

  function handleFlowNode(flowNode, context) {
    var childCtx = visitIfDi(flowNode, context);

    if (is(flowNode, 'bpmn:SubProcess')) {
      handleSubProcess(flowNode, childCtx || context);
    }

    if (is(flowNode, 'bpmn:Activity')) {
      handleIoSpecification(flowNode.ioSpecification, context);
    } // defer handling of associations
    // affected types:
    //
    //   * bpmn:Activity
    //   * bpmn:ThrowEvent
    //   * bpmn:CatchEvent
    //


    deferred.push(function () {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(flowNode.dataInputAssociations, contextual(handleDataAssociation, context));
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(flowNode.dataOutputAssociations, contextual(handleDataAssociation, context));
    });
  }

  function handleSequenceFlow(sequenceFlow, context) {
    visitIfDi(sequenceFlow, context);
  }

  function handleDataElement(dataObject, context) {
    visitIfDi(dataObject, context);
  }

  function handleLane(lane, context) {
    deferred.push(function () {
      var newContext = visitIfDi(lane, context);

      if (lane.childLaneSet) {
        handleLaneSet(lane.childLaneSet, newContext || context);
      }

      wireFlowNodeRefs(lane);
    });
  }

  function handleLaneSet(laneSet, context) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(laneSet.lanes, contextual(handleLane, context));
  }

  function handleLaneSets(laneSets, context) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(laneSets, contextual(handleLaneSet, context));
  }

  function handleFlowElementsContainer(container, context) {
    handleFlowElements(container.flowElements, context);

    if (container.laneSets) {
      handleLaneSets(container.laneSets, context);
    }
  }

  function handleFlowElements(flowElements, context) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(flowElements, function (e) {
      if (is(e, 'bpmn:SequenceFlow')) {
        deferred.push(function () {
          handleSequenceFlow(e, context);
        });
      } else if (is(e, 'bpmn:BoundaryEvent')) {
        deferred.unshift(function () {
          handleFlowNode(e, context);
        });
      } else if (is(e, 'bpmn:FlowNode')) {
        handleFlowNode(e, context);
      } else if (is(e, 'bpmn:DataObject')) {// SKIP (assume correct referencing via DataObjectReference)
      } else if (is(e, 'bpmn:DataStoreReference')) {
        handleDataElement(e, context);
      } else if (is(e, 'bpmn:DataObjectReference')) {
        handleDataElement(e, context);
      } else {
        logError(translate('unrecognized flowElement {element} in context {context}', {
          element: Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(e),
          context: context ? Object(_Util__WEBPACK_IMPORTED_MODULE_2__["elementToString"])(context.businessObject) : 'null'
        }), {
          element: e,
          context: context
        });
      }
    });
  }

  function handleParticipant(participant, context) {
    var newCtx = visitIfDi(participant, context);
    var process = participant.processRef;

    if (process) {
      handleProcess(process, newCtx || context);
    }
  }

  function handleCollaboration(collaboration) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(collaboration.participants, contextual(handleParticipant));
    handleArtifacts(collaboration.artifacts); // handle message flows latest in the process

    deferred.push(function () {
      handleMessageFlows(collaboration.messageFlows);
    });
  }

  function wireFlowNodeRefs(lane) {
    // wire the virtual flowNodeRefs <-> relationship
    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(lane.flowNodeRef, function (flowNode) {
      var lanes = flowNode.get('lanes');

      if (lanes) {
        lanes.push(lane);
      }
    });
  } // API //////////////////////


  return {
    handleDeferred: handleDeferred,
    handleDefinitions: handleDefinitions,
    handleSubProcess: handleSubProcess,
    registerDi: registerDi
  };
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/import/Importer.js":
/*!*****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/import/Importer.js ***!
  \*****************************************************/
/*! exports provided: importBpmnDiagram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importBpmnDiagram", function() { return importBpmnDiagram; });
/* harmony import */ var _BpmnTreeWalker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BpmnTreeWalker */ "./node_modules/bpmn-js/lib/import/BpmnTreeWalker.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Import the definitions into a diagram.
 *
 * Errors and warnings are reported through the specified callback.
 *
 * @param  {djs.Diagram} diagram
 * @param  {ModdleElement<Definitions>} definitions
 * @param  {ModdleElement<BPMNDiagram>} [bpmnDiagram] the diagram to be rendered
 * (if not provided, the first one will be rendered)
 * @param  {Function} done the callback, invoked with (err, [ warning ]) once the import is done
 */

function importBpmnDiagram(diagram, definitions, bpmnDiagram, done) {
  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(bpmnDiagram)) {
    done = bpmnDiagram;
    bpmnDiagram = null;
  }

  var importer, eventBus, translate;
  var error,
      warnings = [];
  /**
   * Walk the diagram semantically, importing (=drawing)
   * all elements you encounter.
   *
   * @param {ModdleElement<Definitions>} definitions
   * @param {ModdleElement<BPMNDiagram>} bpmnDiagram
   */

  function render(definitions, bpmnDiagram) {
    var visitor = {
      root: function (element) {
        return importer.add(element);
      },
      element: function (element, parentShape) {
        return importer.add(element, parentShape);
      },
      error: function (message, context) {
        warnings.push({
          message: message,
          context: context
        });
      }
    };
    var walker = new _BpmnTreeWalker__WEBPACK_IMPORTED_MODULE_0__["default"](visitor, translate); // traverse BPMN 2.0 document model,
    // starting at definitions

    walker.handleDefinitions(definitions, bpmnDiagram);
  }

  try {
    importer = diagram.get('bpmnImporter');
    eventBus = diagram.get('eventBus');
    translate = diagram.get('translate');
    eventBus.fire('import.render.start', {
      definitions: definitions
    });
    render(definitions, bpmnDiagram);
    eventBus.fire('import.render.complete', {
      error: error,
      warnings: warnings
    });
  } catch (e) {
    error = e;
  }

  done(error, warnings);
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/import/Util.js":
/*!*************************************************!*\
  !*** ./node_modules/bpmn-js/lib/import/Util.js ***!
  \*************************************************/
/*! exports provided: elementToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementToString", function() { return elementToString; });
function elementToString(e) {
  if (!e) {
    return '<null>';
  }

  return '<' + e.$type + (e.id ? ' id="' + e.id : '') + '" />';
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/import/index.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmn-js/lib/import/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diagram-js/lib/i18n/translate */ "diagram-js/lib/i18n/translate");
/* harmony import */ var diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BpmnImporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BpmnImporter */ "./node_modules/bpmn-js/lib/import/BpmnImporter.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  __depends__: [diagram_js_lib_i18n_translate__WEBPACK_IMPORTED_MODULE_0___default.a],
  bpmnImporter: ['type', _BpmnImporter__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/DiUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/DiUtil.js ***!
  \*************************************************/
/*! exports provided: isExpanded, isInterrupting, isEventSubProcess, hasEventDefinition, hasErrorEventDefinition, hasEscalationEventDefinition, hasCompensateEventDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpanded", function() { return isExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInterrupting", function() { return isInterrupting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventSubProcess", function() { return isEventSubProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEventDefinition", function() { return hasEventDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasErrorEventDefinition", function() { return hasErrorEventDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEscalationEventDefinition", function() { return hasEscalationEventDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCompensateEventDefinition", function() { return hasCompensateEventDefinition; });
/* harmony import */ var _ModelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_1__);


function isExpanded(element) {
  if (Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:CallActivity')) {
    return false;
  }

  if (Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:SubProcess')) {
    return !!Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element).di.isExpanded;
  }

  if (Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(element, 'bpmn:Participant')) {
    return !!Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element).processRef;
  }

  return true;
}
function isInterrupting(element) {
  return element && Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element).isInterrupting !== false;
}
function isEventSubProcess(element) {
  return element && !!Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element).triggeredByEvent;
}
function hasEventDefinition(element, eventType) {
  var bo = Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["getBusinessObject"])(element),
      hasEventDefinition = false;

  if (bo.eventDefinitions) {
    Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["forEach"])(bo.eventDefinitions, function (event) {
      if (Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_0__["is"])(event, eventType)) {
        hasEventDefinition = true;
      }
    });
  }

  return hasEventDefinition;
}
function hasErrorEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:ErrorEventDefinition');
}
function hasEscalationEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:EscalationEventDefinition');
}
function hasCompensateEventDefinition(element) {
  return hasEventDefinition(element, 'bpmn:CompensateEventDefinition');
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/LabelUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/LabelUtil.js ***!
  \****************************************************/
/*! exports provided: DEFAULT_LABEL_SIZE, FLOW_LABEL_INDENT, isLabelExternal, hasExternalLabel, getFlowLabelPosition, getWaypointsMid, getExternalLabelMid, getExternalLabelBounds, isLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LABEL_SIZE", function() { return DEFAULT_LABEL_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOW_LABEL_INDENT", function() { return FLOW_LABEL_INDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLabelExternal", function() { return isLabelExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExternalLabel", function() { return hasExternalLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlowLabelPosition", function() { return getFlowLabelPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWaypointsMid", function() { return getWaypointsMid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalLabelMid", function() { return getExternalLabelMid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalLabelBounds", function() { return getExternalLabelBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLabel", function() { return isLabel; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "min-dash");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");


var DEFAULT_LABEL_SIZE = {
  width: 90,
  height: 20
};
var FLOW_LABEL_INDENT = 15;
/**
 * Returns true if the given semantic has an external label
 *
 * @param {BpmnElement} semantic
 * @return {Boolean} true if has label
 */

function isLabelExternal(semantic) {
  return Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:Event') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:Gateway') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:DataStoreReference') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:DataObjectReference') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:DataInput') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:DataOutput') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:SequenceFlow') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:MessageFlow') || Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(semantic, 'bpmn:Group');
}
/**
 * Returns true if the given element has an external label
 *
 * @param {djs.model.shape} element
 * @return {Boolean} true if has label
 */

function hasExternalLabel(element) {
  return isLabel(element.label);
}
/**
 * Get the position for sequence flow labels
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the label position
 */

function getFlowLabelPosition(waypoints) {
  // get the waypoints mid
  var mid = waypoints.length / 2 - 1;
  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)]; // get position

  var position = getWaypointsMid(waypoints); // calculate angle

  var angle = Math.atan((second.y - first.y) / (second.x - first.x));
  var x = position.x,
      y = position.y;

  if (Math.abs(angle) < Math.PI / 2) {
    y -= FLOW_LABEL_INDENT;
  } else {
    x += FLOW_LABEL_INDENT;
  }

  return {
    x: x,
    y: y
  };
}
/**
 * Get the middle of a number of waypoints
 *
 * @param  {Array<Point>} waypoints
 * @return {Point} the mid point
 */

function getWaypointsMid(waypoints) {
  var mid = waypoints.length / 2 - 1;
  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];
  return {
    x: first.x + (second.x - first.x) / 2,
    y: first.y + (second.y - first.y) / 2
  };
}
function getExternalLabelMid(element) {
  if (element.waypoints) {
    return getFlowLabelPosition(element.waypoints);
  } else if (Object(_ModelUtil__WEBPACK_IMPORTED_MODULE_1__["is"])(element, 'bpmn:Group')) {
    return {
      x: element.x + element.width / 2,
      y: element.y + DEFAULT_LABEL_SIZE.height / 2
    };
  } else {
    return {
      x: element.x + element.width / 2,
      y: element.y + element.height + DEFAULT_LABEL_SIZE.height / 2
    };
  }
}
/**
 * Returns the bounds of an elements label, parsed from the elements DI or
 * generated from its bounds.
 *
 * @param {BpmnElement} semantic
 * @param {djs.model.Base} element
 */

function getExternalLabelBounds(semantic, element) {
  var mid,
      size,
      bounds,
      di = semantic.di,
      label = di.label;

  if (label && label.bounds) {
    bounds = label.bounds;
    size = {
      width: Math.max(DEFAULT_LABEL_SIZE.width, bounds.width),
      height: bounds.height
    };
    mid = {
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2
    };
  } else {
    mid = getExternalLabelMid(element);
    size = DEFAULT_LABEL_SIZE;
  }

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    x: mid.x - size.width / 2,
    y: mid.y - size.height / 2
  }, size);
}
function isLabel(element) {
  return element && !!element.labelTarget;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/ModelUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/ModelUtil.js ***!
  \****************************************************/
/*! exports provided: is, getBusinessObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusinessObject", function() { return getBusinessObject; });
/**
 * Is an element of the given BPMN type?
 *
 * @param  {djs.model.Base|ModdleElement} element
 * @param  {String} type
 *
 * @return {Boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);
  return bo && typeof bo.$instanceOf === 'function' && bo.$instanceOf(type);
}
/**
 * Return the business object for a given element.
 *
 * @param  {djs.model.Base|ModdleElement} element
 *
 * @return {ModdleElement}
 */

function getBusinessObject(element) {
  return element && element.businessObject || element;
}

/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/PoweredByUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/PoweredByUtil.js ***!
  \********************************************************/
/*! exports provided: BPMNIO_IMG, open */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPMNIO_IMG", function() { return BPMNIO_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(min_dom__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file must not be changed or exchanged.
 *
 * @see http://bpmn.io/license for more information.
 */
 // inlined ../../resources/logo.svg

var BPMNIO_LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960"><path fill="#fff" d="M960 60v839c0 33-27 61-60 61H60c-33 0-60-27-60-60V60C0 27 27 0 60 0h839c34 0 61 27 61 60z"/><path fill="#52b415" d="M217 548a205 205 0 0 0-144 58 202 202 0 0 0-4 286 202 202 0 0 0 285 3 200 200 0 0 0 48-219 203 203 0 0 0-185-128zM752 6a206 206 0 0 0-192 285 206 206 0 0 0 269 111 207 207 0 0 0 111-260A204 204 0 0 0 752 6zM62 0A62 62 0 0 0 0 62v398l60 46a259 259 0 0 1 89-36c5-28 10-57 14-85l99 2 12 85a246 246 0 0 1 88 38l70-52 69 71-52 68c17 30 29 58 35 90l86 14-2 100-86 12a240 240 0 0 1-38 89l43 58h413c37 0 60-27 60-61V407a220 220 0 0 1-44 40l21 85-93 39-45-76a258 258 0 0 1-98 1l-45 76-94-39 22-85a298 298 0 0 1-70-69l-86 22-38-94 76-45a258 258 0 0 1-1-98l-76-45 40-94 85 22a271 271 0 0 1 41-47z"/></svg>';
var BPMNIO_LOGO_URL = 'data:image/svg+xml,' + encodeURIComponent(BPMNIO_LOGO_SVG);
var BPMNIO_IMG = '<img width="52" height="52" src="' + BPMNIO_LOGO_URL + '" />';

function css(attrs) {
  return attrs.join(';');
}

var LIGHTBOX_STYLES = css(['z-index: 1001', 'position: fixed', 'top: 0', 'left: 0', 'right: 0', 'bottom: 0']);
var BACKDROP_STYLES = css(['width: 100%', 'height: 100%', 'background: rgba(0,0,0,0.2)']);
var NOTICE_STYLES = css(['position: absolute', 'left: 50%', 'top: 40%', 'margin: 0 -130px', 'width: 260px', 'padding: 10px', 'background: white', 'border: solid 1px #AAA', 'border-radius: 3px', 'font-family: Helvetica, Arial, sans-serif', 'font-size: 14px', 'line-height: 1.2em']);
var LIGHTBOX_MARKUP = '<div class="bjs-powered-by-lightbox" style="' + LIGHTBOX_STYLES + '">' + '<div class="backdrop" style="' + BACKDROP_STYLES + '"></div>' + '<div class="notice" style="' + NOTICE_STYLES + '">' + '<a href="http://bpmn.io" target="_blank" style="float: left; margin-right: 10px">' + BPMNIO_IMG + '</a>' + 'Web-based tooling for BPMN, DMN and CMMN diagrams ' + 'powered by <a href="http://bpmn.io" target="_blank">bpmn.io</a>.' + '</div>' + '</div>';
var lightbox;
function open() {
  if (!lightbox) {
    lightbox = Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["domify"])(LIGHTBOX_MARKUP);
    min_dom__WEBPACK_IMPORTED_MODULE_0__["delegate"].bind(lightbox, '.backdrop', 'click', function (event) {
      document.body.removeChild(lightbox);
    });
  }

  document.body.appendChild(lightbox);
}

/***/ }),

/***/ "./node_modules/min-dom/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/min-dom/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */

function attr(el, name, val) {
  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  } // remove


  if (val === null) {
    return el.removeAttribute(name);
  } // set


  el.setAttribute(name, val);
  return el;
}

var indexOf = [].indexOf;

var indexof = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};
/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * Whitespace regexp.
 */


var re = /\s+/;
/**
 * toString reference.
 */

var toString = Object.prototype.toString;
/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}
/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */


function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }

  this.el = el;
  this.list = el.classList;
}
/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  } // fallback


  var arr = this.array();
  var i = indexof(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};
/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.remove = function (name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  } // classList


  if (this.list) {
    this.list.remove(name);
    return this;
  } // fallback


  var arr = this.array();
  var i = indexof(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};
/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */


ClassList.prototype.removeMatching = function (re) {
  var arr = this.array();

  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }

  return this;
};
/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ('undefined' !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }

    return this;
  } // fallback


  if ('undefined' !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};
/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */


ClassList.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};
/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.has = ClassList.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~indexof(this.array(), name);
};
/**
 * Remove all children from the given element.
 */


function clear(el) {
  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}
/**
 * Element prototype.
 */


var proto = Element.prototype;
/**
 * Vendor function.
 */

var vendor = proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;
/**
 * Expose `match()`.
 */

var matchesSelector = match;
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);

  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }

  return false;
}

var closest = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode;

  while (parent && parent !== document) {
    if (matchesSelector(parent, selector)) return parent;
    parent = parent.parentNode;
  }
};

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';
/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = function (el, type, fn, capture) {
  el[bind](prefix + type, fn, capture || false);
  return fn;
};
/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */


var unbind_1 = function (el, type, fn, capture) {
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};

var componentEvent = {
  bind: bind_1,
  unbind: unbind_1
};
/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */
// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.

var forceCaptureEvents = ['focus', 'blur'];

var bind$1 = function (el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;
  return componentEvent.bind(el, type, function (e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) fn.call(el, e);
  }, capture);
};
/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */


var unbind$1 = function (el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;
  componentEvent.unbind(el, type, fn, capture);
};

var delegateEvents = {
  bind: bind$1,
  unbind: unbind$1
};
/**
 * Expose `parse`.
 */

var domify = parse;
/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;

if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div'); // Setup

  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>'; // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE

  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}
/**
 * Wrap map from jquery.
 */


var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};
map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
map.polyline = map.ellipse = map.polygon = map.circle = map.text = map.line = map.path = map.rect = map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', '</svg>'];
/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected'); // default to the global `document` object

  if (!doc) doc = document; // tag name

  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);
  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1]; // body support

  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  } // wrap map


  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;

  while (depth--) el = el.lastChild; // one element


  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  } // several elements


  var fragment = doc.createDocumentFragment();

  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

var proto$1 = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor$1 = proto$1.matches || proto$1.matchesSelector || proto$1.webkitMatchesSelector || proto$1.mozMatchesSelector || proto$1.msMatchesSelector || proto$1.oMatchesSelector;
var matchesSelector$1 = match$1;
/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match$1(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor$1) return vendor$1.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }

  return false;
}

function query(selector, el) {
  el = el || document;
  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;
  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}

exports.attr = attr;
exports.classes = classes;
exports.clear = clear;
exports.closest = closest;
exports.delegate = delegateEvents;
exports.domify = domify;
exports.event = componentEvent;
exports.matches = matchesSelector$1;
exports.query = query;
exports.queryAll = all;
exports.remove = remove;

/***/ })

};;
//# sourceMappingURL=0.js.map