import React from "react";
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
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards({ getGraph, getVariant }) {
  const [graphIds, setGraphIds] = useState([]);
  const [variants, setVariants] = useState([]);
  const [graph, setGraph] = useState();
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [itemId, setItemId] = useState();
  const [itemChangeId, setItemChangeId] = useState();
  const [name, setName] = useState("");

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
        getGraphIds();
      });
  }

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
          var result = [];
          var variants = response.data.dfg.graph[0].data.variants;
          let keys = Object.keys(variants);
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

  // Handle the deletion dialog
  const handleDelClose = () => setShowDel(false);
  const handleDelete = () => {
    delGraph(itemId);
    const newList = graphIds.filter((item) => item.id !== itemId);
    setGraphIds(newList);
    setShowDel(false);
  };
  const handleDelShow = (id) => {
    console.log(id);
    setItemId(id);
    setShowDel(true);
  };

  // Handle the editing dialog
  const handleEditClose = () => setShowEdit(false);
  const handleEdit = () => {
    changeGraphName(name, itemChangeId);
    // getGraphIds();
    setShowEdit(false);
  };
  const handleEditShow = (id) => {
    console.log(id);
    setItemChangeId(id);
    setShowEdit(true);
  };

  return (
    <>
      <div className="cards">
        <ui5-card class="medium">
          <ui5-card-header
            slot="header"
            title-text="Process Models"
            class="card-header"
          >
            <ui5-icon name="overview-chart" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
            <Modal show={showDel} onHide={handleDelClose}>
              <Modal.Header closeButton>
                <Modal.Title>Graph deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>Do you wanna delete this graph?</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => handleDelete()}>
                  Delete
                </Button>
                <Button variant="secondary" onClick={handleDelClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={showEdit} onHide={handleEditClose}>
              <Modal.Header closeButton>
                <Modal.Title>Graph naming</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Do you wanna change the name of this item?
              </Modal.Body>
              <Modal.Footer>
                <label>New Name:</label>
                <Input
                  id="inputField"
                  placeholder="New name..."
                  onChange={(e) => setName(e.target.value)}
                ></Input>
                <Button variant="primary" onClick={() => handleEdit()}>
                  Change
                </Button>
                <Button variant="secondary" onClick={handleEditClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <List
              separators="None"
              class="card-content-child"
              style={{ height: "320px" }}
              onItemClick={handleGraphItem}
            >
              {graphIds.map((listItem) => (
                <CustomListItem key={listItem.id} data-id={listItem.id}>
                  <div class="col1">
                    <div>
                      <Text
                        class="graph-name"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #{listItem.name}
                      </Text>
                    </div>
                    <div>
                      <Text>{listItem.variants}</Text>
                    </div>
                  </div>
                  <div class="col2">
                    <Button
                      class="btn-edit"
                      icon="sap-icon://edit"
                      onClick={() => handleEditShow(listItem.id)}
                    ></Button>
                  </div>
                  <div class="col3">
                    <Button
                      class="btn-del"
                      icon="sap-icon://delete"
                      onClick={() => handleDelShow(listItem.id)}
                    ></Button>
                  </div>
                </CustomListItem>
              ))}
            </List>
          </div>
        </ui5-card>
        <ui5-card class="medium">
          <ui5-card-header
            slot="header"
            title-text="Variants"
            class="card-header"
          >
            <ui5-icon name="org-chart" slot="avatar"></ui5-icon>
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
                <CustomListItem
                  description="599 cases"
                  key={listItem.id}
                  data-id={listItem.id}
                >
                  #{listItem.name}
                </CustomListItem>
              ))}
            </List>
          </div>
        </ui5-card>
      </div>
    </>
  );
}
