import React from "react";
import { Button } from "@ui5/webcomponents-react";
import "./Footer.css";

export default function Footer() {
  return (
    <ui5-bar design="Footer" id="footer">
      <Button
        onClick={() => alert("Hello World!")}
        slot="endContent"
        design="Emphasized"
      >
        Export model
      </Button>
    </ui5-bar>
  );
}
