import React, { useState, useRef } from "react";
import { Button, ThemeProvider, Toast } from "@ui5/webcomponents-react";
import axios from "axios";
import "./Footer.css";

export default function Footer(props) {

  const [graph, setGraph] = useState();
  const [graphName, setGraphName] = useState();
  const variantId = props.getVariant;
  const graphId = props.getGraph;
  const format = props.getFormat;
 // console.log(variantId)
 // console.log(graphId)
  const toast = useRef();

  const showToast = () => {
    toast.current.show();
  };
  

  const downloadGraph = () => {
    console.log(graph)
    if(graph === undefined) {
      console.log("No graph selected!")
    } else {
      var file;
      if (format === "DFG") {
        console.log(graph)
        const element = document.createElement("a");
          file = new File([graph], {
          type: "text/xml",
        });
        element.href = URL.createObjectURL(file);
        element.download = graphName + "-" + graphId + ".graphml";
        document.body.appendChild(element); 
        element.click();
        console.log(graph);
      } else if (format === "EPC") {
        const element = document.createElement("a");
          file = new File([graph], {
          type: "text/xml",
        });
        element.href = URL.createObjectURL(file);
        element.download = graphName + "-" + graphId + ".epml";
        document.body.appendChild(element); 
        element.click();
        console.log(graph);
      } else {
        showToast()
      }     
    }
  }

  // Use effect for the graph id fetching
  React.useEffect(() => {
    async function getGraphName() {
      await axios
        .post(
          "/graph/" + graphId,
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          console.log(response.data.name + " test")
          setGraphName(response.data.name)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getGraphName();
  }, [graphId]);

   // Use effect for the graph id fetching
   React.useEffect(() => {
    async function getVariantsDFG() {
      await axios
        .post(
          "/graph/download/dfg/" + graphId,
          { variants: variantId === undefined ? [] : variantId, sequence: "" },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          console.log(response.data + " test")
          setGraph(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getVariantsDFG();
  }, [graphId, variantId]);


   // Use effect for the graph id fetching
   React.useEffect(() => {
    async function getVariantsEPC() {
      await axios
        .post(
          "/graph/download/epc/" + graphId,
          { variants: variantId === undefined ? [] : variantId, sequence: "" },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          console.log(response.data + " test")
          setGraph(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getVariantsEPC();
  }, [graphId, variantId]);


  return (
    <ui5-bar design="Footer" id="footer">
      <Button
        onClick={downloadGraph}
        slot="endContent"
        design="Emphasized"
      >
        Export model
      </Button>
      <ThemeProvider class="toast">
        <Toast ref={toast}>Export not possible!</Toast>
      </ThemeProvider>
    </ui5-bar>
  );
}
