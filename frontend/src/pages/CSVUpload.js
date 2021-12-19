import Subheader from "../componentsCSV/Subheader/Subheader.js";
import Cards from "../componentsCSV/Cards/Cards.js";
import Header from "../components/Header/Header.js";
import CSVPreview from "../componentsCSV/CSVPreview/CSVPreview.js";
import Footer from "../componentsCSV/Footer/Footer.js";

function CSVUpload() {
    
    return (
      <>
        <div className="csvupload">
            <Header/>
            <Subheader/>
            <Cards/>
            <CSVPreview/>
            <Footer/>
        </div>
      </>
    );
  }
  
  export default CSVUpload;