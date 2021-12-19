import Subheader from "../componentsCSV/Subheader/Subheader.js";
import Cards from "../componentsCSV/Cards/Cards.js";
import Header from "../components/Header/Header.js";
import CSVPreview from "../componentsCSV/CSVPreview/CSVPreview.js";
import Footer from "../componentsCSV/Footer/Footer.js";
import React, { useState } from "react";

function CSVUpload() {

    const [csv, setCSV] = useState('');

    return (
      <>
        <div className="csvupload">
            <Header/>
            <Subheader getCSV={csv => setCSV(csv)}/>
            <Cards/>
            <CSVPreview getCSV={csv} />
            <Footer/>
        </div>
      </>
    );
  }
  
  export default CSVUpload;