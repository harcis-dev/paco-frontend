import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Bar } from "@ui5/webcomponents-react";


export default function Footer() {
  const history = useHistory();
  const navigateTo = () => history.push("/");

  return (
    <Bar design="Footer" id="footer">
      <Button
        onClick={navigateTo}
        slot="endContent"
        design="Emphasized"
      >
        Display Model
      </Button>
    </Bar>
  );
}
