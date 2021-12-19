import React from "react";
import "./SubheaderCSV.css";
import ReactFileReader from 'react-file-reader';

export default function SubHeader() {

  // Idee CSV als Textdatei an Node.jd backend schicken. Darüber wird es persistiert entweder auf Serve oder als Binary
  // Kann 

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      console.log(reader.result);
    }
    reader.readAsText(files[0]);
  }

  return (
    <div class="flex-container">
      <ui5-bar design="Subheader" id="subheader">
        <div class="btnImport" slot="startContent">
          <ReactFileReader handleFiles={handleFiles} filesTypes={'.csv'}>
            <button id="csvImport" className="btn">Upload CSV File</button>
          </ReactFileReader>
        </div>
      </ui5-bar>
    </div>
  );
}
