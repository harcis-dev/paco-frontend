import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Text, Button, Select, FileUploader } from "@ui5/webcomponents-react";
import "./Subheader.css";
import axios from "axios";

export default function SubHeader({ getFormat }) {
  const [format, setFormat] = useState("DFG");
  const history = useHistory();

  const data = [
    { id: "DFG", text: "DFG" },
    { id: "EPC", text: "EPC" },
    { id: "BPMN", text: "BPMN" },
    { id: "BPMN Import", text: "BPMN Import" },
  ];

  const handleFormat = (e) => {
    setFormat(e.detail.selectedOption.dataset.id);
    console.log(e.detail.selectedOption.dataset.id);
    getFormat(e.detail.selectedOption.dataset.id);
  };

  function timeout(ms) {
    //pass a time in milliseconds to this function
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let content;
  async function postFile() {
    await axios
      .post("/graph", content, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      });
    await timeout(1000);
    window.location.reload(false);
  }

  let fileReader;
  const handleFileRead = (e) => {
    content = fileReader.result;
    console.log(content);
    postFile();
  };
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const navigatTo = () => history.push("/upload");

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
          <FileUploader hideInput
              id="import"
              className="custom-file-input"
              onChange={(e) => handleFileChosen(e.detail.files[0])}>
              <Button>Import Model</Button>
          </FileUploader>
          <Button id="csvIm"
            onClick={navigatTo}>
            Import CSV
          </Button>
        </div>

        <div id="sliders" class="sliderClass" slot="endContent">
          <table table="tableClass">
            <tr>
              <td>
                <Text id="textNodes">Nodes</Text>
              </td>
              <td>
                <ui5-slider class="sliderNode"></ui5-slider>
              </td>
            </tr>
            <tr>
              <td>
                <Text id="textEdges">Edges</Text>
              </td>
              <td>
                <ui5-slider class="sliderEdge"></ui5-slider>
              </td>
            </tr>
          </table>
        </div>

        <div class="selectClass" slot="endContent">
          <Select id="selectFormat" value={format} onChange={handleFormat}>
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
