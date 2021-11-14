import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import dagre from "cytoscape-dagre";
import cytoscape from "cytoscape";
//import { epc } from '../../formats/epc.js';
import { dfg } from "../../formats/dfg.js";
import { diagramXML } from "../../diagram.js";
import axios from "axios";
import ReactBpmn from "react-bpmn";
import "./Canvas.css";

cytoscape.use(dagre);

function Canvas(props) {
  const layout = { name: "dagre" };

  const graphFormat = props.getGraphFormat;
  const graphId = props.getGraph;
  const variantId = props.getVariant;

  // Query Graph from the backend
  const [dfgGraph, setDFGGraph] = React.useState({});
  //const [epcGraph, setEPCGraph] = React.useState({});
  //const [bpmnGraph, setBPMNGraph] = React.useState({});

  // Status messages for the BPMN graph in the browser console
  function onShown() {
    console.log("diagram shown");
  }

  function onLoading() {
    console.log("diagram loading");
  }

  function onError(err) {
    console.log("failed to show diagram");
  }

  // Use the fetchGraph function
  React.useEffect(() => {
     // Fetch graph from node backend
     console.log(variantId + "var")
     async function fetchGraph() {
      await axios
        .post(
          "/graph/" + graphId,
          { variants: variantId === undefined ? [] : variantId, sequence: "" },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          setDFGGraph(response.data.dfg.graph);
          //setEPCGraph(response.data.epc.graph)
          //setBPMNGraph(response.data.bpmn.graph)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  fetchGraph()
  }, [graphId, variantId]);

  // Choose the right styling and the right graph
  let style = "";
  let graph = "";
  if (graphFormat === "DFG") {
    style = dfg;
    graph = dfgGraph;
  } /* else if (graphFormat === "EPC") {
            style = epc;
            graph = epcGraph;
        }*/

  return graphFormat === "BPMN" ? (
    <ReactBpmn
      class="djs-container"
      diagramXML={diagramXML}
      onShown={onShown}
      onLoading={onLoading}
      onError={onError}
    />
  ) : (
    <CytoscapeComponent
      className="cytoscape"
      wheelSensitivity={0.1}
      maxZoom={2}
      userZoomingEnabled={true}
      cy={
        (cy) => {cy.layout(layout).run() // Apply the dagre layout
        cy.fit()}
      }
      elements={Array.from(graph)}
      stylesheet={style} // The different graph types.
    />
  );
}

export default Canvas;
