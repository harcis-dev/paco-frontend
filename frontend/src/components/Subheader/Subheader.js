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
    );
  }
}
