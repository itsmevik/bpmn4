//import BpmnModeler from 'bpmn-js/lib/Modeler';
import emptyBpmn from "./empty.bpmn";
import BPMNViewer from "bpmn-js/lib/NavigatedViewer";
import emptyBPMN from "./empty.bpmn";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
export default class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xmlFile: null, loading: false, error: false };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.flowFile) {
      // console.log(props);
      return { xmlFile: props.flowFile, loading: true, error: props.private };
    }
    if (props.private) {
      //console.log(props);
      return { error: props.private };
    }
    return null;
  }
  componentDidMount() {}
  openDiagram(xml) {
    this.viewer.importXML(xml, (error) => {
      if (error) {
        return "404Error";
      }
    });
  }
  render() {
    if (this.state.loading) {
      this.viewer = new BPMNViewer({
        container: "#canvas",
      });
      this.openDiagram(
        this.state.xmlFile != null ? this.state.xmlFile : "404error"
      );
    }

    return (
      <React.Fragment>
        <div id="canvas">
          <div id="error">{this.state.error ? "404error" : ""}</div>
          <style jsx>
            {`
              #canvas {
                height: 100vh;
              }
              #error {
                text-align: center;
                position: relative;
                top: 50%;
                font-size: 48px;
                font-weight: bold;
              }
            `}
          </style>
        </div>
        <div
          style={{
            float: "right",
            position: "absolute",
            right: 0,
            bottom: -60,
            width: 60,
          }}
        >
          <IconButton style={{ marginBottom: 10 }}>
            <ZoomInIcon fontSize="large" color="primary"></ZoomInIcon>
          </IconButton>

          <IconButton style={{ marginBottom: 10 }}>
            <ZoomOutIcon fontSize="large" color="primary"></ZoomOutIcon>
          </IconButton>

          <IconButton>
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
