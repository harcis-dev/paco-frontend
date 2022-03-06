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


export default function SubHeader(props) {
  const [MSHOST, setMSHOST] = useState("");
  const [R3Name, setR3Name] = useState("");
  const [Group, setGroup] = useState("");
  const [SAPRouter, setSAPRouter] = useState("");
  const [Client, setClient] = useState("");
  const [ListIds, setListIds] = useState([]);
  const [Current, setCurrent] = useState("");
  const history = useHistory();
  const graphId = props.getGraph;
  const [data, setData] = useState([])
  const [format, setFormat] = useState("DFG")
  const [changedValue, setChangedValue] = useState(100);

  const navigatTo = () => history.push("/upload");

  const changeValue = (e) => {
    console.log(e.originalTarget.value);
    setChangedValue(e.originalTarget.value)
  };
  

 React.useEffect(() => {
   // Function to choose the right graph type
  function chooseGraphType(graphMap) {
    var typeMap = [];
    var graph = graphMap.find(x => x.id === graphId)
    console.log(graph);
    // Loop through the current graph and add the supported formats to an array.
    for (let i = 0; i < graph.types.length; i++) {
          if (graph.types[i] === "dfg") {
            typeMap[i] = {id: "DFG", text: "DFG"} 
          } else if (graph.types[i] === "epc") {
            typeMap[i] = {id: "EPC", text: "EPC"}
          } else if (graph.types[i] === "bpmn") {
            typeMap[i] = {id: "BPMN", text: "BPMN"}
          } else {
            typeMap[i] = {id: "BPMN Import", text: "BPMN Import"}
          }
    }
    setFormat(typeMap[0].id)
    // Check the current format and if it is unequal to undefined
    if (graph.types.includes(format.toLowerCase()) && format !== undefined) {
      // If the current graph supports the selected format show it
      props.getFormat(typeMap[graph.types.indexOf(format.toLowerCase())].id)
    } else {
      // If the graph doesn't support the current format show another supported format. 
      props.getFormat(typeMap[0].id)
    }
    console.log(typeMap);
    setData(typeMap);
  }
  // Get the graph ids and choose the graph types of a specific graph.
  async function getGraphIds() {
    await axios
      .get("/graph/ids")
      .then((response) => {
        var graphMap = [];
        response.data.forEach((element) => {
          console.log(element._id);
          graphMap.push({
            id: element._id,
            types: element.graphTypes
          });
        });
        console.log(graphMap);
        chooseGraphType(graphMap);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    getGraphIds();
  }, [graphId]); // eslint-disable-line react-hooks/exhaustive-deps


 // Get the graph ids and choose the graph types of a specific graph.
 async function getIds() {
  await axios
    .get("/graph/ids")
    .then((response) => {
      var ids = [];
      response.data.forEach((element) => {
        ids.push(
          element._id,
       );
      });
      props.getRefresh(ids[ids.length-1])
    })
    .catch((err) => {
      console.log(err);
    });
}

  const handleFormat = (e) => {
    // Set the format to a dynamic variable
    setFormat(e.detail.selectedOption.dataset.id)
    console.log(e.detail.selectedOption);
    props.getFormat(e.detail.selectedOption.dataset.id);
  };
/*
  function timeout(ms) {
    //pass a time in milliseconds to this function
    return new Promise((resolve) => setTimeout(resolve, ms));
  }*/

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
        getIds();
      });
      // await timeout(500); //TODO
     // window.location.reload(false);
  }

  async function importEpml() {
    await axios
      .post("/graph/import", {
       _id: 100,
       epc: content
      })
      .then((response) => {
        console.log(response);
        getIds();
      });
      // await timeout(500); //TODO
     // window.location.reload(false);
      
  }

  async function importGraphml() {
    await axios
      .post("/graph/import", {
       _id: 42,
       dfg: content
      })
      .then((response) => {
        console.log(response);
        getIds();
      });
     // await timeout(500); //TODO
     // window.location.reload(false);
  }

  let fileReader;

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    var dataType = file.name.split(".")[1]
    fileReader.onloadend = () => {
      content = fileReader.result;
      console.log(content);
      if (dataType === "json")
       postFile();
      else if (dataType === "epml")
       importEpml();
      else if (dataType === "graphml")
        importGraphml();
    };;
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
      MSHOST !== "" &&
      R3Name !== "" &&
      Group !== "" &&
      SAPRouter !== "" &&
      Client !== ""
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
              accept=".xlsx, .xls, .csv, .json, .bpmn, .graphml, .epml"
              onChange={(e) => handleFileChosen(e.target.files[0])}
            >
              <Button>Import Model</Button>
            </FileUploader>
            <Button id="csvIm" onClick={navigatTo}>
              Import CSV
            </Button>
          </div>

          <div id="sliders" class="sliderClass" slot="endContent">
            <div id="first">
              <Text>Nodes</Text>
              <Slider value={changedValue} class="sliderNode" onChange={changeValue}></Slider>
            </div>
            <div id="second">
              <Text >{changedValue}%</Text>
            </div>
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
      >
        <div id="fetchDialog">
          <div className="cards2">
            <Card class="medium2">
              <CardHeader
                slot="header"
                title-text="Logins"
                class="card-header2"
              >
                <Icon  name="sap-icon://account" slot="avatar"></Icon>
              </CardHeader>
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
            </Card >
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
                <FormItem >
                  <Button id="leftBtn" onClick={onClickAdd}>Add</Button>
                </FormItem>        
              </FormGroup>
            </Form>
          </div>
        </div>
        <Button id="rightBtn" onClick={handleCloseClick}>Close</Button>
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
