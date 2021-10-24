import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs'
import dagre from 'cytoscape-dagre'
import cytoscape from 'cytoscape'
//import {epc} from './formats/epc.js'
import { dfg } from './formats/dfg.js';
import axios from 'axios'

cytoscape.use( dagre );

export default function App() {
  //const layout = {name: 'breadthfirst'};
  const layout = {name: 'dagre'};

  // Query Graph from the backend
  const [graph, setGraph] = React.useState(0);
  
  // Fetch graph from node backend
  function fetchGraph() {
     axios.post("/graph/variants", {variants: []}, {params: {id: 6}},
     {headers: {"Access-Control-Allow-Origin": "*"}})
    .then((response) => setGraph(response.data) )
  }

  console.log(graph.dfg)

  // Use the fetchGraph function
  React.useEffect(() => {
    fetchGraph();
  }, [])
    
  return <CytoscapeComponent
  cy={cy =>
      cy.layout(layout).run() // Apply the dagre layout
  } 
  elements = {graph.dfg} 
  style =  { {width: 1920, height: 1080} }
  stylesheet={dfg} // The different graph types.
  />;
  
}



