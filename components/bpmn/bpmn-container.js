import BpmnModeler from "bpmn-js/lib/Modeler";
import emptyBpmn from "./empty.bpmn";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";

export default class BPMNContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoomCount: 2 };
  }
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
      canvas.zoom("fit-viewport", "auto");
    });
  }

  render() {
    return (
      <React.Fragment>
        <IconButton
          style={{ float: "right", zIndex: 9999, width: 50, height: 50 }}
        >
          <SaveIcon
            fontSize="large"
            color="primary"
            onClick={() => this.saveDiagram()}
          >
            Save
          </SaveIcon>
        </IconButton>

        <div id="bpmnview"></div>
        <style jsx>
          {`
            #bpmnview {
              height: 100vh;
            }
          `}
        </style>
        <div
          style={{
            float: "right",
            position: "absolute",
            right: 0,
            bottom: -60,
            width: 60,
          }}
        >
          <IconButton
            style={{ marginBottom: 10 }}
            onClick={() => {
              var canvas = this.modeler.get("canvas");
              var count = this.state.zoomCount;
              if (count <= 5) {
                count++;
                //console.log(count * 0.5, this.state.zoomCount);
                this.setState({ zoomCount: count * 0.9 });
                //if (count >= 1.5) {
                canvas.zoom(count * 0.5);
                //}
              }
              // if (count == 1) {
              //   this.setState({ zoomCount: 3 });
              //   canvas.zoom(1.5);
              // }
            }}
          >
            <ZoomInIcon fontSize="large" color="primary"></ZoomInIcon>
          </IconButton>

          <IconButton
            style={{ marginBottom: 10 }}
            onClick={() => {
              var canvas = this.modeler.get("canvas");
              var count = this.state.zoomCount;
              if (count >= 1.5) {
                count--;
                // console.log(count * 0.5, this.state.zoomCount);

                this.setState({ zoomCount: count *0.8});
                canvas.zoom(count * 0.5);
              }
              // if (count == 4) {
              //   this.setState({ zoomCount: 3 });
              //   canvas.zoom(2);
              // }
            }}
          >
            <ZoomOutIcon fontSize="large" color="primary"></ZoomOutIcon>
          </IconButton>

          <IconButton
            onClick={() => {
              var canvas = this.modeler.get("canvas");
              this.setState({ zoomCount: 1.5 });
              canvas.zoom("fit-viewport", "auto");
            }}
          >
            <CenterFocusStrongIcon
              fontSize="large"
              color="primary"
            ></CenterFocusStrongIcon>
          </IconButton>
        </div>
      </React.Fragment>
    );
  }
}
