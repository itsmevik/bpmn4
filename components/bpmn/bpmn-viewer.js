//import BpmnModeler from 'bpmn-js/lib/Modeler';
import emptyBpmn from "./empty.bpmn";
import BPMNViewer from "bpmn-js/lib/NavigatedViewer";
export default class Viewer extends React.Component {
  componentDidMount() {
    // var xml;
    this.viewer = new BPMNViewer({
      container: "#canvas",
    });
    this.newDiagram();
  }
  newDiagram() {
    this.openDiagram(emptyBpmn);
  }
  openDiagram(xml) {
    this.viewer.importXML(xml, (error) => {
      if (error) {
        return;
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="canvas">
          <style jsx>
            {`
              #canvas {
                height: 100vh;
              }
            `}
          </style>
        </div>
      </React.Fragment>
    );
  }
}
