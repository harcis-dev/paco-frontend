import React from "react";
//import Arrow from "./arrow.svg";
import "./CardsCSV.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import {
  List,
  CustomListItem,
  Button,
  Text,
  Dialog
} from "@ui5/webcomponents-react";
import { Icon } from '@ui5/webcomponents-react';
import axios from 'axios';
import { useState, useRef } from "react";

export default function Cards(props) {

  const [csvIds, setCSVIds] = useState([]);
  const [itemId, setItemId] = useState();
  const needRefresh = props.getRefresh
  console.log(props.getRefresh)

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
  }, [needRefresh]);

  async function delCSVFile(id) {
    await axios.delete("/graph/csv/" + id).then(function (response) {
      console.log("CSV file deleted");
      console.log(response);
    });
  }

  // Handle deleteButton
  const deletedialogRef = useRef(null);

  const ondeleteButtonClick = (id) => {
    setItemId(id);
    deletedialogRef.current.show();
  };

  const handledeleteClose = () => {
    deletedialogRef.current.close();
  };

  const handledeleteClick = () => {
    delCSVFile(itemId);
    const newList = csvIds.filter((item) => item.id !== itemId);
    setCSVIds(newList);
    deletedialogRef.current.close();
   };
  
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
          <Dialog
              id="delete-dialog"
              ref={deletedialogRef}
              footer={
                <div class="inputDelete">
                  <Button
                    variant="primary"
                    design="Emphasized"
                    onClick={handledeleteClick}
                  >
                    Delete
                  </Button>
                  &nbsp; &nbsp; &nbsp;
                  <Button variant="secondary" onClick={handledeleteClose}>
                    Close
                  </Button>
                </div>
              }
              headerText="Graph deletion"
            >
              <div id="deleteDialog">Do you want to delete this graph?</div>
            </Dialog>
          <List
              separators="None"
              class="card-content-child"
              style={{ height: "800px" }}
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
                      onClick={() => ondeleteButtonClick(listItem.id)}
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
