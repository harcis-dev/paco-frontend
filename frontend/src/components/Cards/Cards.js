import React from "react";
import Arrow from "./arrow.svg";
import "./Cards.css";
import { useState } from "react";
import axios from "axios";
import { List, StandardListItem } from "@ui5/webcomponents-react";

export default function Cards({ getGraph, getVariant }) {
  const [graphIds, setGraphIds] = useState([]);
  const [variants, setVariants] = useState([]);
  const [graph, setGraph] = useState();

  // Handle the click on a specific graph.
  // Handover data to the Home component.
  const handleGraphItem = (event) => {
    console.log(event.detail.item.dataset.id);
    setGraph(event.detail.item.dataset.id);
    getGraph(event.detail.item.dataset.id);
    getVariant(undefined);
  };

  // Handle the click on a variant.
  // Handover data to the Home component
  const handleVariantItem = (event) => {
    var result = [];
    event.detail.selectedItems.forEach((element) => {
      result.push(element.dataset.id);
    });
    console.log(result);
    getVariant(result);
  };

  // Fetch the different graph ids from backend
  async function getGraphIds() {
    await axios
      .get("/graph/ids")
      .then((response) => {
        var graphMap = [];
        response.data.forEach((element) => {
          graphMap.push(element);
        });
        setGraphIds(graphMap);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Use effect for the graph id fetching
  React.useEffect(() => {
    getGraphIds();
  }, []);

  // Use effect for the variants fetching
  React.useEffect(() => {
    async function getVariants() {
      await axios
        .post(
          "/graph/" + graph,
          { variants: [], sequence: "" },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          console.log(response);
          var result = [];
          var variants = response.data.dfg.graph[0].data.variants;
          let keys = Object.keys(variants);
          console.log(keys);
          console.log("test");
          keys.forEach((element) => {
            result.push({ id: element, name: element });
          });
          setVariants(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getVariants();
  }, [graph]);

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
              onItemClick={handleGraphItem}
            >
              {graphIds.map((listItem) => (
                <StandardListItem
                  image={Arrow}
                  description="12 Variants"
                  key={listItem.id}
                  data-id={listItem.id}
                >
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
            <List
              separators="None"
              style={{ height: "300px" }}
              class="card-content-child"
              mode="MultiSelect"
              onSelectionChange={handleVariantItem}
            >
              {variants.map((listItem) => (
                <StandardListItem
                  description="599 cases"
                  key={listItem.id}
                  data-id={listItem.id}
                >
                  #{listItem.name}
                </StandardListItem>
              ))}
            </List>
          </div>
        </ui5-card>
      </div>
    </>
  );
}
