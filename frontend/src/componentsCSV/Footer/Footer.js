import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@ui5/webcomponents-react";


export default function Footer() {
  const history = useHistory();
  const navigateTo = () => history.push("/");

  return (
    <ui5-bar design="Footer" id="footer">
      <Button
        onClick={navigateTo}
        slot="endContent"
        design="Emphasized"
      >
        Display Model
      </Button>
    </ui5-bar>
  );
}
