import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs'
import dagre from 'cytoscape-dagre'
import cytoscape from 'cytoscape'
//import {epc} from './formats/epc.js'
import { dfg } from './formats/dfg.js';
import { diagramXML } from './diagram.js';
import axios from 'axios'
import './App.css';
import ReactBpmn from 'react-bpmn';


cytoscape.use( dagre );

export default function App() {


  var isBPMN = true;
  // Functions for BPMN
    function onShown() {
      console.log('diagram shown');
    }
  
    function onLoading() {
      console.log('diagram loading');
    }
  
    function onError(err) {
      console.log('failed to show diagram');
    }

  //const layout = {name: 'breadthfirst'};
  const layout = {name: 'dagre'};

  // Query Graph from the backend
  const [dfgGraph, setDFGGraph] = React.useState({});
  
  // Fetch graph from node backend
  async function fetchGraph() {
     await axios.post("/graph/variants", {variants: ['3']}, {params: {id: 6}},
     {headers: {"Access-Control-Allow-Origin": "*"}}
     )
    .then((response) => {
      setDFGGraph(response.data.dfg.graph)
    })
    .catch(err => {
      console.log(err)
    })
    
  }
  

  // Use the fetchGraph function
  React.useEffect(() => {
    fetchGraph();
  }, [])
  
    
  return isBPMN ? (<ReactBpmn class="diagram-container"
                  diagramXML={ diagramXML }
                  onShown={ onShown }
                  onLoading={ onLoading }
                  onError={ onError }
                  />)
                  : 
                  <CytoscapeComponent
                    cy={cy =>
                    cy.layout(layout).run() // Apply the dagre layout
                    } 
                    elements = {Array.from(dfgGraph)} 
                    style =  { {width: 1920, height: 1080} }
                    stylesheet={dfg} // The different graph types.
                    />;
}
