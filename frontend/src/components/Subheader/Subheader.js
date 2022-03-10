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
  Select,
  FileUploader,
  Text,
  Icon,
  Title,
  Dialog,
  Slider,
  Card,
  CardHeader,
} from "@ui5/webcomponents-react";
import "./Subheader.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SubHeader({ getFormat }) {
  const [format, setFormat] = useState("DFG");
  const [MSHOST, setMSHOST] = useState("");
  const [R3Name, setR3Name] = useState("");
  const [Group, setGroup] = useState("");
  const [SAPRouter, setSAPRouter] = useState("");
  const [Client, setClient] = useState("");
  const [ListIds, setListIds] = useState([]);
  const [Current, setCurrent] = useState("");
  const history = useHistory();

  const navigatTo = () => history.push("/upload");

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

  // Click Login in Login Dialog
  async function handleLoginaccClose() {
    await axios
      .post(
        "/api/connect",
        {
          name: R3Name,
          user: user,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
    loginDialogRef.current.close();
    dialogSettingsRef.current.close();
    conntectedRef.current.show();
  }

  const conntectedRef = useRef(null);

  const deletedialogRef = useRef(null);

  const editdialogRef = useRef(null);

  const addRef = useRef(null);

  const onOpenAdd = () => {
    addRef.current.show();
  };

  const oneditButtonClick = (event) => {
    setCurrent(event);
    editdialogRef.current.show();
  };

  const ondeleteButtonClick = (event) => {
    setCurrent(event);
    deletedialogRef.current.show();
  };

  const handledeleteClose = () => {
    emptyTextfields();
    deletedialogRef.current.close();
  };

  const handleLoginClose = () => {
    emptyTextfields();
    loginDialogRef.current.close();
  };

  async function handledeleteClick() {
    console.log(Current.id);
    await axios
      .delete(
        "/api/delete/" + Current.id,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
    emptyTextfields();
    deletedialogRef.current.close();
  }

  // Handle the click on a account.
  const handleGraphItem = (event) => {
    handleloginClick();
    setR3Name(event.detail.item.innerText);
  };

  //
  const emptyTextfields = () => {
    setMSHOST("10.2.18.36");
    setR3Name("R36_3");
    setGroup("36");
    setSAPRouter("/H/cloud.ucc.ovgu.de/S/3299/H/");
    setClient("213");
  };

  //Get List with Accounts from DB
  async function getList() {
    var result = [];
    await axios.get("/api/destinations").then((response) => {
      response.data.forEach((element) => {
        console.log(element["name"]);
        result.push(element); //TODO passend formatieren
      });
    });

    setListIds(result);
  }

  async function onClickEdit() {
    var lang = "en";
    if (
      MSHOST !== "" &&
      R3Name !== "" &&
      Group !== "" &&
      SAPRouter !== "" &&
      Client !== ""
    ) {
      await axios
        .put(
          "/api/destination",
          {
            name: R3Name,
            ashost: MSHOST,
            sysnr: Group,
            client: Client,
            lang: lang,
            saprouter: SAPRouter,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    }
    editdialogRef.current.close();
    emptyTextfields();
    getList();
  }

  //Post new Account to DB
  async function onClickAdd() {
    var lang = "en";
    if (
      MSHOST !== "" &&
      R3Name !== "" &&
      Group !== "" &&
      SAPRouter !== "" &&
      Client !== ""
    ) {
      await axios
        .post(
          "/api/destination",
          {
            name: R3Name,
            ashost: MSHOST,
            sysnr: Group,
            client: Client,
            lang: lang,
            saprouter: SAPRouter,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    }
    addRef.current.close();
    emptyTextfields();
    getList();
  }

  var password = "";
  var user = "";

  return (
    <>
      <div class="flex-container">
        <Bar design="Subheader" id="subheader">
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
                  <Slider class="sliderNode"></Slider>
                </td>
              </tr>
              <tr>
                <td>
                  <Text id="textEdges">Edges</Text>
                </td>
                <td>
                  <Slider class="sliderEdge"></Slider>
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
        </Bar>
      </div>

      <Dialog
        ref={dialogSettingsRef}
        class="importdialog"
        header={
          <Bar endContent={<Icon name="settings" />}>
            <Title>Fetch new model from SAP</Title>
          </Bar>
        }
        footer={
          <div class="inputDelete4">
            <Button variant="primary" design="Emphasized" onClick={onOpenAdd}>
              Add
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button onClick={handleCloseClick}>Close</Button>
          </div>
        }
      >
        <div id="fetchDialog">
          <div className="cards2">
            <Card class="medium2">
              <CardHeader slot="header" title-text="Login" class="card-header2">
                <Icon name="sap-icon://account" slot="avatar"></Icon>
              </CardHeader>
              <div class="card-content">
                <List
                  separators="None"
                  class="card-content-child"
                  style={{ height: "320px" }}
                  onItemClick={handleGraphItem}
                >
                  {ListIds.map((listItem) => (
                    <CustomListItem key={listItem.id} data-id={listItem.id}>
                      <div class="col1">
                        <div>
                          <Text
                            class="graph-name"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            {listItem.name}
                          </Text>
                        </div>
                      </div>
                      <div class="col3">
                        <Button
                          class="btn-del"
                          icon="sap-icon://edit"
                          onClick={() => oneditButtonClick(listItem)}
                        ></Button>
                        &nbsp; &nbsp; &nbsp;
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
            </Card>
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
              onClick={handleLoginaccClose}
            >
              Login
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button variant="secondary" onClick={handleLoginClose}>
              Close
            </Button>
          </div>
        }
        headerText="Account Login"
      >
        <div id="form2">
          <Form labelSpanS={"12"}>
            <FormItem label={"User"}>
              <Input type={InputType.Text} value={user} />
            </FormItem>
            <FormItem label={"Password"}>
              <Input type={InputType.Password} value={password} />
            </FormItem>
          </Form>
        </div>
      </Dialog>

      <Dialog
        id="delete-dialog3"
        ref={conntectedRef}
        footer={
          <Button
            variant="secondary"
            onClick={() => conntectedRef.current.close()} //TODO
          >
            Close
          </Button>
        }
      >
        <div id="form2">
          <h2>Connected</h2>
        </div>
      </Dialog>

      <Dialog
        ref={addRef}
        footer={
          <div class="inputDelete5">
            <Button variant="primary" design="Emphasized" onClick={onClickAdd}>
              Add
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button onClick={() => addRef.current.close()}>Close</Button>
          </div>
        }
        headerText="Add new Login"
      >
        <div id="form3">
          <Form labelSpanS={"12"}>
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
          </Form>
        </div>
      </Dialog>

      <Dialog
        ref={editdialogRef}
        footer={
          <div class="inputDelete6">
            <Button
              variant="primary"
              design="Emphasized"
              // onClick={onClickEdit()} //TODO
            >
              Edit
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button onClick={() => editdialogRef.current.close()}>Close</Button>
          </div>
        }
        headerText="Edit Login"
      >
        <div id="form4">
          <Form labelSpanS={"12"}>
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
          </Form>
        </div>
      </Dialog>
    </>
  );
}
