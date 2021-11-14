import React from "react";
import Pfeil from "./Pfeil.png";
import Nummer from "./Nummer.png";
import "./Cards.css";
import { useState } from "react";
import axios from "axios";
import { List, StandardListItem } from "@ui5/webcomponents-react";

export default function Cards({ getGraph }) {
  const [graphIds, setGraphIds] = useState([]);
  //const [variants, setVariants] = useState([]);

  const handleItemClick = event => {
    console.log(event.detail.item.dataset.id);
    getGraph(event.detail.item.dataset.id);
  }

  async function getGraphIds() {
    await axios
      .get("/ids")
      .then((response) => {
        var graphMap = [];
        response.data.forEach(element => {
          graphMap.push({id: element, name: element});
        });
        console.log(graphMap);
        setGraphIds(graphMap);
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
              onItemClick={handleItemClick}
            >
              {graphIds.map((listItem) => (
                <StandardListItem image={Pfeil} description="42.000 variants" key={listItem.id} data-id={listItem.id}>
                  #{listItem.name}
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
