import React, { useState } from "react";
import { Text, Button, Select } from "@ui5/webcomponents-react";
import "./Subheader.css";

export default function SubHeader({ getFormat }) {

  const [format, setFormat] = useState("DFG")


  const data = [
    { id: "DFG", text: "DFG" },
    { id: "EPC", text: "EPC" },
    { id: "BPMN", text: "BPMN" },
  ];

  const handleFormat = (e) => {
    setFormat(e.detail.selectedOption.dataset.id)
    console.log(e.detail.selectedOption.dataset.id)
    getFormat(e.detail.selectedOption.dataset.id)
  }
  
  return (
    <div class="flex-container">
    <ui5-bar design="Subheader" id="subheader">
      
        <div class="btnClass" slot="startContent">
          <Button
          onClick={() => alert("Hello World!")}
          slot="startContent"
          design="Emphasized"
          id="fetchData"
        >
          Fetch new model from SAP
        </Button>
        <Button
          id="import"
          onClick={() => alert("Hello World!")}
          slot="startContent"
        >
          Import model
        </Button>
        </div>

      <div id="sliders" class="sliderClass" slot="endContent"> 
        <table table="tableClass">
          <tr>
            <td><Text id="textNodes">
            Nodes
            </Text></td>
            <td><ui5-slider class="sliderNode"></ui5-slider></td>
          </tr>
          <tr>
            <td><Text id="textEdges">
            Edges
          </Text></td>
            <td><ui5-slider class="sliderEdge"></ui5-slider></td>
          </tr> 
        </table>
        
        
      </div>
      
      <div class="selectClass" slot="endContent">
      <Select
        id="selectFormat"
        
        value={format}
        onChange={handleFormat}
      >
        {data.map((item) => (
          <option key={item.id} data-id={item.id}>
            {item.text}
          </option>
        ))}
      </Select>
      </div>
      
    </ui5-bar>
    </div>
  );
}
