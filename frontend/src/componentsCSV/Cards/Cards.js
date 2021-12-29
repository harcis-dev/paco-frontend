import React from "react";
//import Arrow from "./arrow.svg";
import "./CardsCSV.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  List,
  CustomListItem,
  Button,
  Text,
} from "@ui5/webcomponents-react";
import { Icon } from '@ui5/webcomponents-react';
import axios from 'axios';
import { useState } from "react";

export default function Cards() {

  const [csvIds, setCSVIds] = useState([]);

  async function getCSVIds() {
    await axios
      .get("/graph/csv/ids")
      .then((response) => {
        var csvMap = [];
        response.data.forEach((element) => {
          console.log(element._id);
          csvMap.push({
            id: element._id,
            name: element.name
          });
        });
        console.log(csvMap);
        setCSVIds(csvMap);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Use effect for the graph id fetching
  React.useEffect(() => {
    getCSVIds();
  }, []);
  
  return (
    <>
      <div className="cards">
        <ui5-card class="medium ui5-card-root">
          <ui5-card-header
            slot="header"
            title-text="Process Models"
            class="card-header"
          >
            <ui5-icon name="overview-chart" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
          <List
              separators="None"
              class="card-content-child"
              style={{ height: "320px" }}
              //onItemClick={handleGraphItem}
            >
          {csvIds.map((listItem) => (
                <CustomListItem key={listItem.id} data-id={listItem.id} >
                  <div class="col1">
                      <div>
                       <Text>#{listItem.id}</Text>
                      </div>
                      <Icon name="documents"></Icon>
                      <Text
                        style={{ fontSize: "16px", fontWeight: "bold", marginLeft: '10px'}}
                      >
                        {listItem.name}
                      </Text>
                  </div>
                  <div class="col2">
                    <Button
                      class="btn-del"
                      icon="sap-icon://delete"
                      //onClick={() => handleDelShow(listItem.id)}
                    ></Button>
                  </div>
                </CustomListItem>
              ))}
            </List>
          </div>
        </ui5-card>
      </div>
    </>
  );
}
