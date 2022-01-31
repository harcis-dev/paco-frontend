import Subheader from "../componentsCSV/Subheader/Subheader.js";
import Cards from "../componentsCSV/Cards/Cards.js";
import Header from "../components/Header/Header.js";
import CSVPreview from "../componentsCSV/CSVPreview/CSVPreview.js";
import Footer from "../componentsCSV/Footer/Footer.js";
import React, { useState } from "react";

function CSVUpload() {
    // The variable to tell the csv list to refresh
    const [refresh, setRefresh] = useState('');
    // The id of the clicked csv item
    const [preview, setPreview] = useState('');

    return (
      <>
        <div className="csvupload">
            <Header/>
            <Subheader getRefresh={refresh => setRefresh(refresh)} />
            <Cards getRefresh={refresh} getPreview={preview => setPreview(preview)}/>
            <CSVPreview  getCsvPreview={preview}/>
            <Footer/>
        </div>
      </>
    );
  }
  
  export default CSVUpload;