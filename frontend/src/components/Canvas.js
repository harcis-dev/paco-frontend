import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import dagre from 'cytoscape-dagre'
import cytoscape from 'cytoscape'
//import { epc } from '../../formats/epc.js';
import { dfg } from '../formats/dfg.js';
import { diagramXML } from '../diagram.js';
import axios from 'axios'
import ReactBpmn from 'react-bpmn';

cytoscape.use( dagre );

function Canvas(getGraphFormat) {
        const layout = {name: 'dagre'};

        const graphFormat = getGraphFormat.getGraphFormat; 
      
        // Query Graph from the backend
        const [dfgGraph, setDFGGraph] = React.useState({});
        //const [epcGraph, setEPCGraph] = React.useState({});
       // const [format, setFormat] = React.useState("");
       //const [bpmnGraph, setBPMNGraph] = React.useState({});
    
      
        // Status messages for the BPMN graph in the browser console
          function onShown() {
            console.log('diagram shown');
          }
        
          function onLoading() {
            console.log('diagram loading');
          }
        
          function onError(err) {
            console.log('failed to show diagram');
          }
        
        // Fetch graph from node backend
        async function fetchGraph() {
           await axios.post("/graph/variants", {variants: [], sequence: ""}, {params: {id: 11}},
           {headers: {"Access-Control-Allow-Origin": "*"}}
           )
          .then((response) => {
            setDFGGraph(response.data.dfg.graph)
            //setEPCGraph(response.data.epc.graph)
            //setBPMNGraph(response.data.bpmn.graph)
          })
          .catch(err => {
            console.log(err)
          })
          
        }
      
        // Use the fetchGraph function
        React.useEffect(() => {
          fetchGraph();
        }, [])
        
        // Choose the right styling and the right graph
        let style = "";
        let graph = "";
        if (graphFormat === "DFG") {
            style = dfg;
            graph = dfgGraph;
        }/* else if (graphFormat === "EPC") {
            style = epc;
            graph = epcGraph;
        }*/
        
        return graphFormat === "BPMN" ? (<ReactBpmn class="djs-container"
                            diagramXML={ diagramXML }
                            onShown={ onShown }
                            onLoading={ onLoading }
                            onError={ onError }
                            />)
                            : 
                        <CytoscapeComponent className="cytoscape"
                        wheelSensitivity={0.1}
                        minZoom={0.5}
                        maxZoom={2}
                        userZoomingEnabled={true}
                        cy={cy =>
                        cy.layout(layout).run() // Apply the dagre layout
                        } 
                        elements = {Array.from(graph)} 
                        stylesheet={style} // The different graph types.
                        />
} 


export default Canvas;