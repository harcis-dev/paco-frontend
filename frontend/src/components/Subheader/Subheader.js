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
    <ui5-bar design="Subheader" id="subheader">
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

      <div id="sliders">
        <div id="1">
          <Text id="textNodes" slot="endContent">
            Nodes
          </Text>
        </div>
        <div id="2">
          <ui5-slider id="sliderNodes" slot="endContent"></ui5-slider>
        </div>
        <div id="3">
          <Text id="textEdges" slot="endContent">
            Edges
          </Text>
        </div>
        <div id="4">
          <ui5-slider id="sliderEdges" slot="endContent"></ui5-slider>
        </div>
      </div>
      <Select
        id="selectFormat"
        slot="endContent"
        value={format}
        onChange={handleFormat}
      >
        {data.map((item) => (
          <option key={item.id} data-id={item.id}>
            {item.text}
          </option>
        ))}
      </Select>
    </ui5-bar>
  );
}
