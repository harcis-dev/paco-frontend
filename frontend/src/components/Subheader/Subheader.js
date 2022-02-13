import React, { useState, useRef } from "react";
import {
  Button,
  List,
  Bar,
  Form,
  FormItem,
  Input,
  InputType,
  CustomListItem,
  FormGroup,
  Select,
  Text,
  Icon,
  Title,
  Dialog,
} from "@ui5/webcomponents-react";
import "./Subheader.css";
import axios from "axios";

export default function SubHeader({ getFormat }) {
  const [format, setFormat] = useState("DFG");
  const [MSHOST, setMSHOST] = useState("");
  const [R3Name, setR3Name] = useState("");
  const [Group, setGroup] = useState("");
  const [SAPRouter, setSAPRouter] = useState("");
  const [Client, setClient] = useState("");
  const [ListIds, setListIds] = useState([]);
  const [Current, setCurrent] = useState("");

  const data = [
    { id: "DFG", text: "DFG" },
    { id: "EPC", text: "EPC" },
    { id: "BPMN", text: "BPMN" },
    { id: "BPMN Import", text: "BPMN Import" },
  ];

  const handleFormat = (e) => {
    setFormat(e.detail.selectedOption.dataset.id);
    console.log(e.detail.selectedOption.dataset.id);
    getFormat(e.detail.selectedOption.dataset.id);
  };

  function timeout(ms) {
    //pass a time in milliseconds to this function
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let content;
  async function postFile() {
    await axios
      .post("/graph", content, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      });
    await timeout(500); //TODO
    window.location.reload(false);
  }

  let fileReader;
  const handleFileRead = (e) => {
    content = fileReader.result;
    console.log(content);
    postFile();
  };
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const dialogSettingsRef = useRef(null);

  const handleFetchModelClick = () => {
    getList();
    emptyTextfields();
    dialogSettingsRef.current.show();
  };

  const handleCloseClick = () => {
    dialogSettingsRef.current.close();
    emptyTextfields();
  };

  //

  const loginDialogRef = useRef(null);

  // Click one in List to open Login
  const handleloginClick = (event) => {
    loginDialogRef.current.show();
  };

  // Click Close in Login Dialog
  const handleLoginClose = () => {
    loginDialogRef.current.close();
  };

  // Click Login in Login Dialog
  const handleLoginaccClose = () => {
    loginDialogRef.current.close();
    dialogSettingsRef.current.close();
  };

  const deletedialogRef = useRef(null);

  const ondeleteButtonClick = (event) => {
    setCurrent(event);
    deletedialogRef.current.show();
  };

  const handledeleteClose = () => {
    emptyTextfields();
    deletedialogRef.current.close();
  };

  const handledeleteClick = (event) => {
    localStorage.removeItem(Current.split(" ")[0]);
    const newList = ListIds.filter((item) => item !== Current);
    setListIds(newList);
    emptyTextfields();
    deletedialogRef.current.close();
  };

  // Handle the click on a account.
  const handleGraphItem = (event) => {
    handleloginClick();
    setMSHOST(event.detail.item.dataset.id.split(" ")[0]);
    setR3Name(event.detail.item.dataset.id.split(" ")[1]);
    setGroup(event.detail.item.dataset.id.split(" ")[2]);
    setSAPRouter(event.detail.item.dataset.id.split(" ")[3]);
    setClient(event.detail.item.dataset.id.split(" ")[4]);
  };

  //
  const emptyTextfields = () => {
    setMSHOST("");
    setR3Name("");
    setGroup("");
    setSAPRouter("");
    setClient("");
  };

  // get every
  const getList = () => {
    var result = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      result.push(localStorage.getItem(keys[i]));
    }

    setListIds(result);
  };

  const onClickAdd = () => {
    if (
      MSHOST != "" &&
      R3Name != "" &&
      Group != "" &&
      SAPRouter != "" &&
      Client != ""
    ) {
      localStorage.setItem(
        MSHOST,
        MSHOST + " " + R3Name + " " + Group + " " + SAPRouter + " " + Client
      );
    }
    emptyTextfields();
    getList();
  };

  var password = "";
  var user = "";

  const navigatTo = () => history.push("/upload");

  return (
    <>
      <div class="flex-container">
        <ui5-bar design="Subheader" id="subheader">
          <div class="btnClass" slot="startContent">
            <Button
              onClick={handleFetchModelClick}
              slot="startContent"
              design="Emphasized"
              id="fetchData"
            >
              Fetch new model from SAP
            </Button>
            <FileUploader
              hideInput
              id="import"
              className="custom-file-input"
              accept=".xlsx, .xls, .csv, .json, .bpmn, .graphml"
              onChange={(e) => handleFileChosen(e.target.files[0])}
            >
              <Button>Import Model</Button>
            </FileUploader>
            <Button id="csvIm" onClick={navigatTo}>
              Import CSV
            </Button>
          </div>

          <div id="sliders" class="sliderClass" slot="endContent">
            <table table="tableClass">
              <tr>
                <td>
                  <Text id="textNodes">Nodes</Text>
                </td>
                <td>
                  <ui5-slider class="sliderNode"></ui5-slider>
                </td>
              </tr>
              <tr>
                <td>
                  <Text id="textEdges">Edges</Text>
                </td>
                <td>
                  <ui5-slider class="sliderEdge"></ui5-slider>
                </td>
              </tr>
            </table>
          </div>

          <div class="selectClass" slot="endContent">
            <Select id="selectFormat" value={format} onChange={handleFormat}>
              {data.map((item) => (
                <option key={item.id} data-id={item.id}>
                  {item.text}
                </option>
              ))}
            </Select>
          </div>
        </ui5-bar>
      </div>
      <Dialog
        ref={dialogSettingsRef}
        class="importdialog"
        header={
          <Bar endContent={<Icon name="settings" />}>
            <Title>Fetch new model from SAP</Title>
          </Bar>
        }
      >
        <div id="fetchDialog">
          <div className="cards2">
            <ui5-card class="medium2">
              <ui5-card-header
                slot="header"
                title-text="Logins"
                class="card-header2"
              >
                <ui5-icon name="sap-icon://account" slot="avatar"></ui5-icon>
              </ui5-card-header>
              <div class="card-content">
                <List
                  separators="None"
                  class="card-content-child"
                  style={{ height: "320px" }}
                  onItemClick={handleGraphItem}
                >
                  {ListIds.map((listItem) => (
                    <CustomListItem key={listItem} data-id={listItem}>
                      <div class="col1">
                        <div>
                          <Text
                            class="graph-name"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            {listItem.split(" ")[0]}
                          </Text>
                        </div>
                      </div>
                      <div class="col3">
                        <Button
                          class="btn-del"
                          icon="sap-icon://delete"
                          onClick={() => ondeleteButtonClick(listItem)}
                        ></Button>
                      </div>
                    </CustomListItem>
                  ))}
                </List>
              </div>
            </ui5-card>
          </div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <div id="form">
            <Form>
              <FormGroup titleText={"Data"}>
                <FormItem label={"MSHOST"}>
                  <Input
                    type={InputType.Text}
                    value={MSHOST}
                    onChange={(e) => setMSHOST(e.target.value)}
                  />
                </FormItem>
                <FormItem label={"R3Name"}>
                  <Input
                    type={InputType.Text}
                    value={R3Name}
                    onChange={(e) => setR3Name(e.target.value)}
                  />
                </FormItem>
                <FormItem label={"Group"}>
                  <Input
                    type={InputType.Text}
                    value={Group}
                    onChange={(e) => setGroup(e.target.value)}
                  />
                </FormItem>
                <FormItem label={"SAPRouter String"}>
                  <Input
                    type={InputType.Text}
                    value={SAPRouter}
                    onChange={(e) => setSAPRouter(e.target.value)}
                  />
                </FormItem>
                <FormItem label={"Client"}>
                  <Input
                    type={InputType.Text}
                    value={Client}
                    onChange={(e) => setClient(e.target.value)}
                  />
                </FormItem>
                &nbsp;
                <FormItem>
                  <Button onClick={onClickAdd}>Add</Button>
                </FormItem>
                <FormItem>
                  <Button onClick={handleCloseClick}>Close</Button>
                </FormItem>
              </FormGroup>
            </Form>
          </div>
        </div>
      </Dialog>
      <Dialog
        id="delete-dialog2"
        ref={deletedialogRef}
        footer={
          <div class="inputDelete2">
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
        headerText="Account deletion"
      >
        <div id="deleteDialog">Do you want to delete this account?</div>
      </Dialog>
      <Dialog
        id="delete-dialog3"
        ref={loginDialogRef}
        footer={
          <div class="inputDelete3">
            <Button
              variant="primary"
              design="Emphasized"
              onClick={handleLoginaccClose} //TODO
            >
              Login
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="secondary"
              onClick={handleLoginClose} //TODO
            >
              Close
            </Button>
          </div>
        }
        headerText="Account Login"
      >
        <div id="form2">
          <Form>
            <FormItem label={"User"}>
              <Input type={InputType.Text} value={user} />
            </FormItem>
            <FormItem label={"Password"}>
              <Input type={InputType.Text} value={password} />
            </FormItem>
          </Form>
        </div>
      </Dialog>
    </>
  );
}
