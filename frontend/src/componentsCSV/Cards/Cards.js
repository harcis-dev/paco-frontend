import React, { useState, useRef, useEffect } from "react";
//import Arrow from "./arrow.svg";
import "./CardsCSV.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import {
  List,
  CustomListItem,
  Button,
  Text,
  Dialog,
} from "@ui5/webcomponents-react";
import { Icon } from "@ui5/webcomponents-react";
import axios from "axios";

export default function Cards(props) {
  // Variable which stores the csv ids
  const [csvIds, setCSVIds] = useState([]);
  const [itemId, setItemId] = useState();
  const needRefresh = props.getRefresh;
  console.log(props.getRefresh);

  // REST request to get the csv ids
  async function getCSVIds() {
    await axios
      .get("/graph/csv/ids")
      .then((response) => {
        var csvMap = [];
        response.data.forEach((element) => {
          console.log(element._id);
          // Store the id and the name in an array
          csvMap.push({
            id: element._id,
            name: element.name,
          });
        });
        console.log(csvMap);
        setCSVIds(csvMap);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle the csv item an send its id to the parent
  const handleCSVItem = (event) => {
    console.log(event.detail.item.dataset.id);
    props.getPreview(event.detail.item.dataset.id);
  };

  // Use effect for the graph id fetching
  useEffect(() => {
    getCSVIds();
  }, [needRefresh]);

  // REST request to delete one csv file from the list
  async function delCSVFile(id) {
    await axios.delete("/graph/csv/" + id).then(function (response) {
      console.log("CSV file deleted");
      console.log(response);
    });
  }

  // Handle deleteButton
  const deletedialogRef = useRef(null);

  // Open delete dialog
  const ondeleteButtonClick = (id) => {
    setItemId(id);
    deletedialogRef.current.show();
  };

  // Close dialog if close was pressed
  const handledeleteClose = () => {
    deletedialogRef.current.close();
  };

  // Handle the deletion of the specific file
  const handledeleteClick = () => {
    delCSVFile(itemId);
    const newList = csvIds.filter((item) => item.id !== itemId);
    setCSVIds(newList);
    deletedialogRef.current.close();
  };

  return (
    <>
      <div className="cards">
        <ui5-card className="medium ui5-card-root">
          <ui5-card-header
            slot="header"
            title-text="Process Models"
            className="card-header"
          >
            <ui5-icon name="overview-chart" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div className="card-content">
            <Dialog
              id="delete-dialog"
              ref={deletedialogRef}
              footer={
                <div className="inputDelete">
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
              className="card-content-child"
              style={{ height: "800px" }}
              onItemClick={handleCSVItem}
            >
              {csvIds.map((listItem) => (
                <CustomListItem key={listItem.id} data-id={listItem.id}>
                  <div className="col1">
                    <Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Icon name="documents"></Icon> {listItem.name}
                    </Text>
                  </div>
                  <div className="col2">
                    <Button
                      className="btn-del"
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
