import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import dagre from "cytoscape-dagre";
import cytoscape from "cytoscape";
import { epc } from '../../formats/epc.js';
import { dfg } from "../../formats/dfg.js";
import { bpmn } from "../../formats/bpmn.js";
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
  const [epcGraph, setEPCGraph] = React.useState({});
  const [bpmnGraph, setBPMNGraph] = React.useState({});
  const [style, setStyle] = React.useState("");
  const [graph, setGraph] = React.useState("");

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
     console.log(variantId + " var")
     async function fetchGraph() {
      await axios
        .post(
          "/graph/" + graphId,
          { variants: variantId === undefined ? [] : variantId, sequence: "", graphTypes: [graphFormat]},
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          console.log(graphFormat)
          if (graphFormat === "DFG") {
            setDFGGraph(response.data.dfg.graph);
          } else if (graphFormat === "EPC") {
            setEPCGraph(response.data.epc.graph)
          } else if (graphFormat === "BPMN") {
            setBPMNGraph(response.data.bpmn.graph)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  fetchGraph()
  }, [graphId, variantId, graphFormat]);

  const CytoscapeComp = () => {
      // Choose the right styling and the right graph  
      if (graphFormat === "DFG") {
      setStyle(dfg);
      setGraph(dfgGraph);
    }  else if (graphFormat === "EPC") {
              setStyle(epc);
              setGraph(epcGraph);
    }  else if (graphFormat === "BPMN") {
      setStyle(bpmn);
      setGraph(bpmnGraph)
    }

    return  <CytoscapeComponent
    className="cytoscape"
    wheelSensitivity={0.1}
    maxZoom={2}
    userZoomingEnabled={true}
    cy={
      (cy) => {
      if( graphFormat === "BPMN") {
        cy.layout({name: 'dagre', rankDir: 'LR'}).run() // Apply the dagre layout
      } else {
        cy.layout(layout).run() // Apply the dagre layout
      }
      cy.fit()
     }
    }
    elements={Array.from(graph)}
    stylesheet={style} // The different graph types.
  />
  }

  return graphFormat === "BPMN Import" ? (
    <ReactBpmn
      class="djs-container"
      diagramXML={diagramXML}
      onShown={onShown}
      onLoading={onLoading}
      onError={onError}
    />
  ) : (
   <CytoscapeComp></CytoscapeComp>
  );
}

export default Canvas;
