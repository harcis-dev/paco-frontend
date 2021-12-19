import React, { useState } from "react";
import "./SubheaderCSV.css";
import ReactFileReader from 'react-file-reader';

export default function SubHeader({getCSV}) {

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      getCSV(reader.result)
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
