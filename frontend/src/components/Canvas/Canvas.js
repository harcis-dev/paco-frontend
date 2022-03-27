import React, { useState, useEffect } from "react";
import dagre from "cytoscape-dagre";
import cytoscape from "cytoscape";
import { diagramXML } from "../../diagram.js";
import axios from "axios";
import ReactBpmn from "react-bpmn";
import "./Canvas.css";
//import CytoscapeComp from "./CytoscapeComp";
import { epc } from "../../formats/epc.js";
import { dfg } from "../../formats/dfg.js";
import CytoscapeComponent from "react-cytoscapejs";
import { bpmn } from "../../formats/bpmn.js";

cytoscape.use(dagre);

function Canvas(props) {
  const layout = { name: "dagre" };

  const graphFormat = props.getGraphFormat;
  const graphId = props.getGraph;
  const variantId = props.getVariant;
  const value = props.getValue;

  // Query Graph from the backend
  const [dfgGraph, setDFGGraph] = useState({});
  const [epcGraph, setEPCGraph] = useState({});
  const [bpmnGraph, setBPMNGraph] = useState({});
  const [style, setStyle] = useState("");
  const [graph, setGraph] = useState("");
  const [graphName, setGraphName] = useState("");

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
  useEffect(() => {
    // Fetch graph from node backend
    console.log(variantId + " var");
    async function fetchGraph() {
      if (graphId.length !== 0) {
        await axios
          .post(
            "/graph/" + graphId,
            {
              variants: variantId === undefined ? [] : variantId,
              sequence: "",
              graphTypes: [graphFormat],
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            console.log(graphFormat);
            console.log(response)
            if (graphFormat === "DFG") {
                setDFGGraph(response.data.dfg.graph);
            } else if (graphFormat === "EPC") {
                setEPCGraph(response.data.epc.graph);
              
            } else if (graphFormat === "BPMN") {
                setBPMNGraph(response.data.bpmn.graph);
                setGraphName(response.data.name);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    fetchGraph();
  }, [graphId, variantId, graphFormat]);

  // Use the fetchGraph function
  useEffect(() => {
    // Fetch graph from node backend
    async function fetchGraphNodes() {
      if (graphId.length !== 0) {
        await axios
          .post(
            "/graph/" + graphId,
            {
              variants: [],
              sequence: "",
              graphTypes: [graphFormat],
              nodes: value / 100,
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            console.log(graphFormat);
            if (graphFormat === "DFG") {
                setDFGGraph(response.data.dfg.graph);
            } else if (graphFormat === "EPC") {
                setEPCGraph(response.data.epc.graph);
            } else if (graphFormat === "BPMN") {
                setBPMNGraph(response.data.bpmn.graph);
                setGraphName(response.data.name);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    fetchGraphNodes();
  }, [graphId, graphFormat, value]);
  

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
      cy.$("#Process").data("label", graphName);
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
      className="djs-container"
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
