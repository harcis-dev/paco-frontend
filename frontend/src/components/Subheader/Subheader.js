import React, { Component } from "react";
import { Text, Button } from "@ui5/webcomponents-react";
import "./Subheader.css";

export default class Footer extends Component {
  render() {
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
        <ui5-combobox id="combo" slot="endContent" value="DFG">
          <ui5-cb-item text="DFG"></ui5-cb-item>
          <ui5-cb-item text="BPMN"></ui5-cb-item>
          <ui5-cb-item text="EPC"></ui5-cb-item>
        </ui5-combobox>
      </ui5-bar>
    );
  }
}
