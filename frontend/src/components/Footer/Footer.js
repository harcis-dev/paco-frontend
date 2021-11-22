import React, { useState } from "react";
import { Button } from "@ui5/webcomponents-react";
import axios from "axios";
import "./Footer.css";

export default function Footer(props) {

  const [graph, setGraph] = useState();
  const variantId = props.getVariant;
  const graphId = props.getGraph;
  //console.log(variantId)
  //console.log(graphId)

  const downloadGraph = () => {
    console.log(graph)
    if(graph === undefined) {
      console.log("No graph selected!")
    } else {
      const element = document.createElement("a");
      var file = new File([graph], {
        type: "text/xml",
      });
      element.href = URL.createObjectURL(file);
      element.download = graphId + ".graphml";
      document.body.appendChild(element); 
      element.click();
      console.log(graph);
    }
  }

   // Use effect for the graph id fetching
   React.useEffect(() => {
    async function getVariants() {
      await axios
        .post(
          "/graph/download/" + graphId,
          { variants: variantId === undefined ? [] : variantId, sequence: "" },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          //console.log(response.data + " test")
          setGraph(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getVariants();
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
    </ui5-bar>
  );
}
