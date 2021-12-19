import React from "react";
import { Button } from "@ui5/webcomponents-react";


export default function Footer() {

  return (
    <ui5-bar design="Footer" id="footer">
      <Button
        onClick={() => alert("Hello World!")}
        slot="endContent"
        design="Emphasized"
      >
        Display Model
      </Button>
    </ui5-bar>
  );
}
