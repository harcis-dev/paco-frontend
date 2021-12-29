import React from "react";
import "./SubheaderCSV.css";
import ReactFileReader from 'react-file-reader';
import axios from 'axios';
import { useState } from "react";

export default function SubHeader({getCSV, getRefresh}) {

  const [count, setCount] = useState(1);

  async function getCSVIds() {
    await axios
      .get("/graph/csv/ids")
      .then((response) => {
        console.log(response.data)
        if (response.data.length !== 0) {
          var ids = [];
          response.data.forEach((element) => {
            ids.push(element._id)
          })
          console.log(Math.max(...ids))
          setCount(Math.max(...ids) + 1)
        } else {
          setCount(1)
        } 
      })
      .catch((err) => {
        console.log(err);
      });  
  }
  
  const handleFiles = files =>   {
    if(files[0].name.split(".")[1] === "csv") {
      getCSVIds()
      console.log("Handle files " + count)
      getRefresh(count);
      var reader = new FileReader();
      reader.onload = function(e) {
          getCSV(reader.result)
      }
      reader.readAsText(files[0]);
      console.log(files[0])
      importCSV(files[0])
   } else {
     console.log("No csv file!")
   }
  }

  async function importCSV(files) {
    const formData = new FormData();
      formData.append('_id', count)
      formData.append('name', files.name.split(".")[0])
      formData.append('file', files)
      await axios.post("http://localhost:8080/graph/csv/import", formData, {
      })
      .then(res => {
        console.log(res.statusText)
        console.log(res.headers)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div class="flex-container">
      <ui5-bar design="Subheader" id="subheader">
        <div class="btnImport" slot="startContent">
          <ReactFileReader handleFiles={handleFiles} fileTypes={['.csv']}>
            <button id="csvImport" className="btn">Upload CSV File</button>
          </ReactFileReader>
        </div>
      </ui5-bar>
    </div>
  );
}
