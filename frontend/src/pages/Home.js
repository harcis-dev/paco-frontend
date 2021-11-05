import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import "./Home.css";
import { Button } from "@ui5/webcomponents-react";
import paco from "./Paco.png";
import Pfeil from "./Pfeil.png";
import Nummer from "./Nummer.png";
import profilePicture from "./profilePictureExample.png";
import { Avatar, Text, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import dagre from 'cytoscape-dagre'
import cytoscape from 'cytoscape'
import { epc } from '../formats/epc.js';
import { dfg } from '../formats/dfg.js';
import { diagramXML } from '../diagram.js';
import axios from 'axios'
import ReactBpmn from 'react-bpmn';

cytoscape.use( dagre );

function Home() {
    const layout = {name: 'dagre'};

    // True if the user wanna see the BPMN graph
    var isBPMN = true;
  
    // True if the user wanna see the DFG graph
    var isDFG = true;
  
    // Query Graph from the backend
    const [dfgGraph, setDFGGraph] = React.useState({});
    const [epcGraph, setEPCGraph] = React.useState({});
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
       await axios.post("/graph/variants", {variants: [], sequence: ""}, {params: {id: 12}},
       {headers: {"Access-Control-Allow-Origin": "*"}}
       )
      .then((response) => {
        setDFGGraph(response.data.dfg.graph)
        setEPCGraph(response.data.epc.graph)
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
    let style = isDFG ? dfg : epc;
    let graph = isDFG ? dfgGraph : epcGraph;

  return (
    <>
      <div className="home">
        <ShellBar
          logo={<img src={paco} alt="Paco" />}
          profile={
            <Avatar>
              <img src={profilePicture} alt="Profile" />
            </Avatar>
          }
          primaryTitle="Paco"
        >
          <ShellBarItem icon="bell" text="Add" />
        </ShellBar>
        <ui5-bar design="Subheader" id="subheader">
          <Button
            onClick={() => alert("Hello World!")}
            slot="startContent"
            design="Emphasized"
          >
            Fetch new model from SAP
          </Button>
          &nbsp;
          <Button
            id="import"
            onClick={() => alert("Hello World!")}
            slot="startContent"
          >
            Import model
          </Button>
          <div class="new_line">
            <Text id="textNodes" slot="endContent">
              Nodes
            </Text>
            <span></span>
            <Text id="textEdges" slot="endContent">
              Edges
            </Text>
          </div>
          <div class="new_line">
            <ui5-slider id="sliderNodes" slot="endContent"></ui5-slider>
            <ui5-slider id="sliderEdges" slot="endContent"></ui5-slider>
          </div>
          <ui5-combobox id="comboBox" slot="endContent" value="DFG">
            <ui5-cb-item text="DFG"></ui5-cb-item>
            <ui5-cb-item text="BPMN"></ui5-cb-item>
            <ui5-cb-item text="EPC"></ui5-cb-item>
          </ui5-combobox>
        </ui5-bar>
        <div className="cards">
          <ui5-card class="medium">
            <ui5-card-header slot="header" title-text="Proccess Models">
              <ui5-icon name="group" slot="avatar"></ui5-icon>
            </ui5-card-header>
            <div class="card-content">
              <ui5-list separators="None" class="card-content-child">
                <ui5-li image={Pfeil} description="42.000 variants">
                  #1
                </ui5-li>
                <ui5-li image={Pfeil} description="1.337 variants">
                  #2
                </ui5-li>
                <ui5-li image={Pfeil} description="3.333 variants">
                  #3
                </ui5-li>
                <ui5-li image={Pfeil} description="1.234 variants">
                  #4
                </ui5-li>
              </ui5-list>
            </div>
          </ui5-card>
          <ui5-card class="medium">
            <ui5-card-header slot="header" title-text="Variants">
              <ui5-icon name="group" slot="avatar"></ui5-icon>
            </ui5-card-header>
            <div class="card-content">
              <ui5-list separators="None" class="card-content-child">
                <ui5-li image={Nummer} description="1.333 cases">
                  {"A -> B -> C -> D"}
                </ui5-li>
                <ui5-li image={Nummer} description="599 cases">
                  {"A -> B -> D"}
                </ui5-li>
                <ui5-li image={Nummer} description="20 cases">
                  {"B -> A -> C -> D"}
                </ui5-li>
              </ui5-list>
            </div>
          </ui5-card>
        </div>
        {
        isBPMN ? (<ReactBpmn class="djs-container"
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
        <ui5-bar design="Footer" id="footer">
          <Button
            onClick={() => alert("Hello World!")}
            slot="endContent"
            design="Emphasized"
          >
            Export model
          </Button>
        </ui5-bar>
      </div>
    </>
  );
}

export default Home;

/*
<CytoscapeComponent className="cytoscape" elements={elements} style={ { width: '1000px', height: '700px' } } />
<Button onClick={() => alert('Hello World!')}>Hello world!</Button>
slot="startContent" endContent
*/