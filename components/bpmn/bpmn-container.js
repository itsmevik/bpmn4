import BpmnModeler from "bpmn-js/lib/Modeler";
import emptyBpmn from "./empty.bpmn";
import { Button } from "@material-ui/core";

export default class BPMNContainer extends React.Component {
  componentDidMount() {
    this.modeler = new BpmnModeler({
      container: "#bpmnview",
    });
    // this.newDiagram();

    this.openDiagram(this.props.flow.flow_file);
  }
  saveDiagram() {
    this.modeler.saveXML({ format: true }, (err, xml) => {
      //here xml is the bpmn format
      if (!err) {
        this.props.onSave(xml);
      }
    });
  }
  openDiagram(xml) {
    this.modeler.importXML(xml, (error) => {
      if (error) {
        return;
      }
      var canvas = this.modeler.get("canvas");
      canvas.zoom("fit-viewport");
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button
          variant="contained"
          color="primary"
          style={{ float: "right", zIndex: 9999 }}
          onClick={() => this.saveDiagram()}
        >
          Save
        </Button>
        <div id="bpmnview"></div>
        <style jsx>
          {`
            #bpmnview {
              height: 100vh;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
