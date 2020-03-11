import BpmnModeler from 'bpmn-js/lib/Modeler';
import emptyBpmn from './empty.bpmn';

export default class BPMNContainer extends React.Component {
  componentDidMount() {
    this.modeler = new BpmnModeler({
      container: '#bpmnview'
    });
    this.newDiagram();
  }
  newDiagram() {
    this.openDiagram(emptyBpmn);
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
    return (
      <React.Fragment>
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
