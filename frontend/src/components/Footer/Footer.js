import React, { useState, useRef, useEffect } from "react";
import { Button, ThemeProvider, Toast, Bar } from "@ui5/webcomponents-react";
import axios from "axios";
import "./Footer.css";
import { saveAs } from "file-saver";

export default function Footer(props) {
  const [graph, setGraph] = useState([]);
  const [graphName, setGraphName] = useState("");
  const variantId = props.getVariant;
  const graphId = props.getGraph;
  const format = props.getFormat;
  console.log(variantId);
  console.log(graphId);
  console.log(format);
  const toast = useRef();

  const showToast = () => {
    toast.current.show();
  };

  const downloadGraph = () => {
    console.log(graph);
    if (graph === undefined) {
      console.log("No graph selected!");
      showToast();
    } else {
      var blob = new Blob([graph], { type: "application/xml" });
      //var url = URL.createObjectURL(file);
      if (format === "DFG") {
        saveAs(blob, graphName + "-" + graphId + ".graphml");
      } else if (format === "EPC") {
        saveAs(blob, graphName + "-" + graphId + ".epml");
      } else if (format === "BPMN") {
        saveAs(blob, graphName + "-" + graphId + ".bpmn");
      } else {
        showToast();
      }
    }
  };

  // Use effect for the graph id fetching
  useEffect(() => {
    async function getGraphName() {
      if (graphId.length !== 0) {
        await axios
          .post("/graph/" + graphId, {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then((response) => {
            console.log(response.data.name + " test");
            setGraphName(response.data.name);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getGraphName();
  }, [graphId]);

  // Use effect for the graph id fetching
  useEffect(() => {
    async function getVariantsDFG() {
      if (graphId.length !== 0 && format === "DFG") {
        await axios
          .post(
            "/graph/download/dfg/" + graphId,
            {
              variants: variantId === undefined ? [] : variantId,
              sequence: "",
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            //console.log(response.data + " test")
            if (response.data !== undefined) {
              setGraph(response.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getVariantsDFG();
  }, [graphId, variantId, format]);

  // Use effect for the graph id fetching
  useEffect(() => {
    async function getVariantsBPMN() {
      if (graphId.length !== 0 && format === "BPMN") {
        await axios
          .post(
            "/graph/download/bpmn/" + graphId,
            {
              variants: variantId === undefined ? [] : variantId,
              sequence: "",
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            //console.log(response.data + " test")
            if (response.data !== undefined) {
              setGraph(response.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getVariantsBPMN();
  }, [graphId, variantId, format]);

  // Use effect for the graph id fetching
  useEffect(() => {
    async function getVariantsEPC() {
      if (graphId.length !== 0 && format === "EPC") {
        await axios
          .post(
            "/graph/download/epc/" + graphId,
            {
              variants: variantId === undefined ? [] : variantId,
              sequence: "",
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            // console.log(response.data + " test")
            if (response.data !== undefined) {
              setGraph(response.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getVariantsEPC();
  }, [graphId, variantId, format]);

  return (
    <Bar design="Footer" id="footer">
      <Button onClick={downloadGraph} slot="endContent" design="Emphasized">
        Export model
      </Button>
      <ThemeProvider className="toast">
        <Toast ref={toast}>Export not possible!</Toast>
      </ThemeProvider>
    </Bar>
  );
}
