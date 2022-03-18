import { epc } from "../../formats/epc.js";
import { dfg } from "../../formats/dfg.js";
import { bpmn } from "../../formats/bpmn.js";
import CytoscapeComponent from "react-cytoscapejs";
import { useEffect } from "react";

const layout = { name: "dagre" };
const CytoscapeComp = (props) => {
  useEffect(() => {
    // Choose the right styling and the right graph
    if (props.graphFormat === "DFG") {
      props.onStyle(dfg);
      props.onGraph(props.dfgGraph);
    } else if (props.graphFormat === "EPC") {
      props.onStyle(epc);
      props.onGraph(props.epcGraph);
    } else if (props.graphFormat === "BPMN") {
      props.onStyle(bpmn);
      props.onGraph(props.bpmnGraph);
    }
  });

  return (
    <CytoscapeComponent
      className="cytoscape"
      wheelSensitivity={0.1}
      maxZoom={2}
      userZoomingEnabled={true}
      cy={(cy) => {
        if (props.graphFormat === "BPMN") {
          cy.layout({ name: "dagre", rankDir: "LR" }).run(); // Apply the dagre layout
          cy.$('#Process').data('label', props.graphName);
        } else {
          cy.layout(layout).run(); // Apply the dagre layout
        }
        cy.fit();
      }}
      elements={Array.from(props.graph)}
      stylesheet={props.style} // The different graph types.
    />
  );
};

export default CytoscapeComp;
