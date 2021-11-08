import React from "react";
import Pfeil from "./Pfeil.png";
import Nummer from "./Nummer.png";
import "./Cards.css";
import { useState } from "react";
import axios from "axios";
import { List, StandardListItem } from "@ui5/webcomponents-react";

export default function Header() {
  const [graphIds, setGraphIds] = useState([]);
  //const [variants, setVariants] = useState([])

  /*
    const list = [
      { id: 1, text: '1'},
      { id: 2, text: '2'},
      { id: 3, text: '3'}
    ]*/

  async function getGraphIds() {
    await axios
      .get("/ids")
      .then((response) => {
        setGraphIds(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    getGraphIds();
  }, []);

  return (
    <>
      <div className="cards">
        <ui5-card class="medium">
          <ui5-card-header slot="header" title-text="Proccess Models">
            <ui5-icon name="group" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
            <List
              separators="None"
              class="card-content-child"
              style={{ height: "320px" }}
            >
              {graphIds.map((listItem) => (
                <StandardListItem image={Pfeil} description="42.000 variants">
                  #{listItem}
                </StandardListItem>
              ))}
            </List>
          </div>
        </ui5-card>
        <ui5-card class="medium">
          <ui5-card-header slot="header" title-text="Variants">
            <ui5-icon name="group" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
            <ui5-list
              separators="None"
              style={{ height: "300px" }}
              class="card-content-child"
            >
              <ui5-li image={Nummer} description="1.333 cases">
                {"A -> B -> C -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="599 cases">
                {"A -> B -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="20 cases">
                {"B -> A -> C -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="20 cases">
                {"B -> A -> C -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="20 cases">
                {"B -> A -> C -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="20 cases">
                {"B -> A -> C -> D"}
              </ui5-li>
            </ui5-list>
          </div>
        </ui5-card>
      </div>
    </>
  );
}
