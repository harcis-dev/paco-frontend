import React from "react";
import "./SubheaderCSV.css";
import ReactFileReader from 'react-file-reader';
import axios from 'axios';

export default function SubHeader({getCSV}) {
  
  const handleFiles = files => {
    if(files[0].name.split(".")[1] === "csv") {
      var reader = new FileReader();
      reader.onload = function(e) {
          
          getCSV(reader.result)
      }
      reader.readAsText(files[0]);
      console.log(files[0])
      const formData = new FormData();
      formData.append('_id', 1)
      formData.append('name', 'test1')
      formData.append('file', files[0])
      axios.post("http://localhost:8080/graph/csv/import", formData, {
      })
      .then(res => {
        console.log(res.statusText)
        console.log(res.headers)
      })
      .catch((err) => {
        console.log(err);
      });
   } else {
     console.log("No csv file!")
   }
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