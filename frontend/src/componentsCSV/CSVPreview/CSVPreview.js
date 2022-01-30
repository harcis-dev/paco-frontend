import React from "react";
import {useState} from "react";
import { CsvToHtmlTable } from 'react-csv-to-table';
import "./CSVPreview.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



function CSVPreview(props) {
  console.log(props.getCSV)
  const [csv, setCsv] = useState('');
  const id = props.getCsvPreview;
  console.log(props.getCsvPreview)

  

  React.useEffect(() => {
   // Fetch csv preview from backend
  async function getCsvPreview() {
    await axios
      .get("/graph/csv/preview/" + id)
      .then((response) => {
        console.log(response.data)
        setCsv(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getCsvPreview();
  }, [id]);
  return (
      <div class='my-custom-scrollbar table-wrapper-scroll-y'>
          <CsvToHtmlTable
                data={csv}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
          />
      </div>
  );
}

export default CSVPreview;