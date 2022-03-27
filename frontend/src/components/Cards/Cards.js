import React, { useRef, useEffect } from "react";
//import Arrow from "./arrow.svg";
import "./Cards.css";
import { useState } from "react";
import axios from "axios";
import {
  List,
  CustomListItem,
  Button,
  Text,
  Input,
  Dialog,
  CardHeader,
  Card,
  Icon,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards(props) {
  const [graphIds, setGraphIds] = useState([]);
  const [variants, setVariants] = useState([]);
  const [graph, setGraph] = useState("");
  const [itemId, setItemId] = useState();
  const [itemChangeId, setItemChangeId] = useState();
  const [name, setName] = useState("");
  const refresh = props.getRefresh;

  // Handle the click on a specific graph.
  // Handover data to the Home component.
  const handleGraphItem = (event) => {
    console.log(event.detail.item.dataset.id);
    setGraph(event.detail.item.dataset.id);
    props.getGraph(event.detail.item.dataset.id || []);
    props.getVariant(undefined);
  };

  // Handle the click on a variant.
  // Handover data to the Home component
  const handleVariantItem = (event) => {
    var result = [];
    event.detail.selectedItems.forEach((element) => {
      result.push(element.dataset.id);
    });
    console.log(result);
    props.getVariant(result);
  };

  async function delGraph(id) {
    await axios.delete("/graph/" + id).then(function (response) {
      console.log("Graph deleted");
      console.log(response);
    });
  }

  async function changeGraphName(name, id) {
    await axios
      .put("/graph/" + id, {
        name: name,
      })
      .then((response) => {
        console.log(response);
      });
  }

  // Use effect for the graph id fetching
  useEffect(() => {
    // Fetch the different graph ids from backend
    async function getGraphIds() {
      await axios
        .get("/graph/ids")
        .then((response) => {
          var graphMap = [];
          response.data.forEach((element) => {
            console.log(element._id);
            graphMap.push({
              id: element._id,
              name: element.name,
              variants:
                element.variantsCount +
                (element.variantsCount === 1 ? " Variant" : " Variants"),
            });
          });
          console.log(graphMap);
          setGraphIds(graphMap);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getGraphIds();
  }, [name, refresh]);

  // Use effect for the variants fetching
  useEffect(() => {
    async function getVariants() {
      if (graph.length !== 0) {
        await axios
          .post(
            "/graph/" + graph,
            { variants: [], sequence: "" },
            { headers: { "Access-Control-Allow-Origin": "*" } }
          )
          .then((response) => {
            if (response.data.dfg.graph[0].data.variants !== undefined) {
              var result = [];
              var variants = response.data.dfg.graph[0].data.variants;
              let keys = Object.keys(variants);
              keys.forEach((element) => {
                result.push({ id: element, name: element });
              });
              setVariants(result);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getVariants();
  }, [graph]);

  // Handle editButton
  const editdialogRef = useRef(null);

  const oneditButtonClick = (id) => {
    setItemChangeId(id);
    editdialogRef.current.show();
  };

  const handleeditClose = () => {
    editdialogRef.current.close();
    setName("");
  };

  const handleeditClick = () => {
    changeGraphName(name, itemChangeId);
    editdialogRef.current.close();
    setName("");
  };

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
    delGraph(itemId);
    const newList = graphIds.filter((item) => item.id !== itemId);
    setGraphIds(newList);
    deletedialogRef.current.close();
  };

  return (
    <>
      <div className="cards">
        <Card className="medium">
          <CardHeader
            slot="header"
            title-text="Process Models"
            className="card-header"
          >
            <Icon name="overview-chart" slot="avatar"></Icon>
          </CardHeader>
          <div className="card-content">
            <Dialog
              id="edit-dialog"
              ref={editdialogRef}
              footer={
                <div className="inputEdit">
                  <Button
                    variant="primary"
                    design="Emphasized"
                    onClick={handleeditClick}
                  >
                    Change
                  </Button>
                  &nbsp; &nbsp; &nbsp;
                  <Button variant="secondary" onClick={handleeditClose}>
                    Close
                  </Button>
                </div>
              }
              headerText="Graph naming"
            >
              <div id="editDialog">
                Do you want to change the name of this item?
                <br></br>
                <br></br>
                <label>New Name:</label>
                &nbsp; &nbsp; &nbsp;
                <Input
                  className="inputField"
                  placeholder="New name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </div>
            </Dialog>

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
              style={{ height: "320px" }}
              onItemClick={handleGraphItem}
            >
              {graphIds.map((listItem) => (
                <CustomListItem key={listItem.id} data-id={listItem.id}>
                  <div className="col1">
                    <div>
                      <Text
                        className="graph-name"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        #{listItem.name}
                      </Text>
                    </div>
                    <div>
                      <Text>{listItem.variants}</Text>
                    </div>
                  </div>
                  <div className="col2">
                    <Button
                      className="btn-edit"
                      icon="sap-icon://edit"
                      onClick={() => oneditButtonClick(listItem.id)}
                    ></Button>
                  </div>
                  <div className="col3">
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
        </Card>
        <Card className="medium">
          <CardHeader
            slot="header"
            title-text="Variants"
            className="card-header"
          >
            <Icon name="org-chart" slot="avatar"></Icon>
          </CardHeader>
          <div className="card-content">
            <List
              separators="None"
              style={{ height: "300px" }}
              className="card-content-child"
              mode="MultiSelect"
              onSelectionChange={handleVariantItem}
            >
              {variants.map((listItem) => (
                <CustomListItem
                  description="599 cases"
                  key={listItem.id}
                  data-id={listItem.id}
                >
                  <Text
                    className="graph-name"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    #{listItem.name}
                  </Text>
                </CustomListItem>
              ))}
            </List>
          </div>
        </Card>
      </div>
    </>
  );
}
