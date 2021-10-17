import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs'
import dagre from 'cytoscape-dagre'
import cytoscape from 'cytoscape'
import {epc} from './formats/epc.js'
import axios from 'axios'

cytoscape.use( dagre );

export default function App() {
  const layout = {name: 'dagre'};

  // Query Graph from the backend
  const [graph, setGraph] = React.useState(0);
  
  // Fetch graph from node backend
  async function fetchGraph() {
    await axios.get("/graph", {params: {id: 1}})
    .then((response) => setGraph(response.data) )
  }

  // Use the fetchGraph function
  React.useEffect(() => {
    fetchGraph();
  }, [])
    
  return <CytoscapeComponent
  cy={cy =>
    cy.layout(layout).run() // Apply the dagre layout
  } 
  elements = {graph.epk} // only take the epk graph to display
  style =  { {width: '1920px', height: '1080px'} }
  stylesheet={epc} // The different graph types.
  />;
  
}



