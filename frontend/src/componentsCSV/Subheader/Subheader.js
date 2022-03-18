import React, { useRef } from "react";
import "./SubheaderCSV.css";
import axios from "axios";
import {
  Toast,
  ThemeProvider,
  FileUploader,
  Button,
} from "@ui5/webcomponents-react";

export default function SubHeader({ getRefresh }) {
  // Get CsvIDs to refresh the csv file list
  async function getCSVIds() {
    await axios
      .get("/graph/csv/ids")
      .then((response) => {
        console.log(response.data);
        if (response.data.length !== 0) {
          var ids = [];
          response.data.forEach((element) => {
            ids.push(element._id);
          });
          getRefresh(ids[ids.length - 1]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle the csv file
  const handleFiles = (files) => {
    console.log(files);
    if (files[0].name.split(".")[1] === "csv") {
      importCSV(files[0]);
      getCSVIds();
    } else {
      console.log("No csv file!");
    }
  };

  // Reference for the Toast messages
  const successToast = useRef();
  const failureToast = useRef();

  async function importCSV(files) {
    const formData = new FormData();
    formData.append("name", files.name.split(".")[0]);
    formData.append("file", files);
    await axios
      .post("/graph/csv/import", formData, {})
      .then((res) => {
        console.log(res.statusText);
        console.log(res.headers);
        successToast.current.show();
      })
      .catch((err) => {
        failureToast.current.show();
        console.log(err);
      });
  }

  return (
    <div className="flex-container">
      <ui5-bar design="Subheader" id="subheader">
        <div className="btnImport" slot="startContent">
          <FileUploader
            hideInput
            id="importCSV"
            onChange={(e) => handleFiles(e.detail.files)}
          >
            <Button>Import Model</Button>
          </FileUploader>
        </div>
      </ui5-bar>
      <ThemeProvider>
        <Toast ref={successToast}>Successfully uploaded!</Toast>
      </ThemeProvider>
      <ThemeProvider>
        <Toast ref={failureToast}>An error has occurred!</Toast>
      </ThemeProvider>
    </div>
  );
}
