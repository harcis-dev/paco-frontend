import React from "react";
import { CsvToHtmlTable } from 'react-csv-to-table';
import "./CSVPreview.css";
import "bootstrap/dist/css/bootstrap.min.css";



function CSVPreview(props) {
  console.log(props.getCSV)
  const sampleData = '';


  return (
      <div class='my-custom-scrollbar table-wrapper-scroll-y'>
          <CsvToHtmlTable
                data={sampleData}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
          />
      </div>
  );
}

export default CSVPreview;