import React from "react";
import "./Home.css";
import { Button, StandardListItem } from "@ui5/webcomponents-react";
import { Select, List } from '@ui5/webcomponents-react';
import paco from "./Paco.png";
import Pfeil from "./Pfeil.png";
import Nummer from "./Nummer.png";
import profilePicture from "./profilePictureExample.png";
import { Avatar, Text, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import Canvas from '../components/Canvas'
import { useState } from "react";
import axios from 'axios'


function Home() {

    const [format, setFormat] = useState("DFG")
    const [graphIds, setGraphIds] = useState([])
    //const [variants, setVariants] = useState([])

    const data = [
      { id: "DFG", text: "DFG"},
      { id: "EPC", text: "EPC"},
      { id: "BPMN", text: "BPMN"}
    ]
/*
    const list = [
      { id: 1, text: '1'},
      { id: 2, text: '2'},
      { id: 3, text: '3'}
    ]*/

    async function getGraphIds() {
      await axios.get("/ids")
     .then((response) => {
        setGraphIds(response.data)
     })
     .catch(err => {
       console.log(err)
     })
    }
/*
    async function fetchVariants() {
      await axios.post("/graph/variants", {variants: [], sequence: ""}, {params: {id: 11}},
           {headers: {"Access-Control-Allow-Origin": "*"}}
           )
          .then((response) => {
            setVariants(response.data.dfg.graph)
          })
          .catch(err => {
            console.log(err)
          })
    }*/
   // Use the fetchGraph function
   React.useEffect(() => {
    getGraphIds();
    }, [])

    const handleFormat = (e) => {
        setFormat(e.detail.selectedOption.dataset.id)
        console.log(e.detail.selectedOption.dataset.id)
      }
/*
    const handleItem = (listItem) => {
      console.log(listItem)
    }*/

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
              <ui5-slider id="sliderNodes" slot="endContent" label="Nodes"></ui5-slider>
              <ui5-slider id="sliderEdges" slot="endContent"></ui5-slider>
            </div>
            <Select id="selectFormat" slot="endContent" value={format} onChange={handleFormat}>
              {data.map((item) => 
                <option key={item.id} data-id={item.id}>{item.text}</option>
              )}
            </Select>
          </ui5-bar>
          <div className="cards">
            <ui5-card class="medium">
              <ui5-card-header slot="header" title-text="Proccess Models">
                <ui5-icon name="group" slot="avatar"></ui5-icon>
              </ui5-card-header>
              <div class="card-content"> 
                <List separators="None" class="card-content-child"  style={{height: "320px"}} >
                  {graphIds.map(listItem => (
                      <StandardListItem image={Pfeil} description="42.000 variants">
                      #{listItem}
                      </StandardListItem>
                  ))}
                </List>
              </div>
            </ui5-card>
            <ui5-card class="medium">
              <ui5-card-header slot="header" title-text="Variants">
                <ui5-icon name="group" slot="avatar"></ui5-icon>
              </ui5-card-header>
              <div class="card-content">
                <ui5-list separators="None" style={{height: "300px"}} class="card-content-child">
                  <ui5-li image={Nummer} description="1.333 cases">
                    {"A -> B -> C -> D"}
                  </ui5-li>
                  <ui5-li image={Nummer} description="599 cases">
                    {"A -> B -> D"}
                  </ui5-li>
                  <ui5-li image={Nummer} description="20 cases">
                    {"B -> A -> C -> D"}
                  </ui5-li>
                  <ui5-li image={Nummer} description="20 cases">
                    {"B -> A -> C -> D"}
                  </ui5-li>
                  <ui5-li image={Nummer} description="20 cases">
                    {"B -> A -> C -> D"}
                  </ui5-li>
                  <ui5-li image={Nummer} description="20 cases">
                    {"B -> A -> C -> D"}
                  </ui5-li>
                </ui5-list>
              </div>
            </ui5-card>
          </div>
          <Canvas  getGraphFormat={format}/>
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