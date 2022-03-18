import React, { useState, useEffect } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
import "./CSVPreview.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Select, Option, Text } from "@ui5/webcomponents-react";

function CSVPreview(props) {
  const [lineNr, setLineNr] = useState(100);

  // The 100 lines of the csv file to display
  const [csv, setCsv] = useState("");
  const data = [
    { id: 0, text: "Default" },
    { id: 1, text: 10 },
    { id: 2, text: 50 },
    { id: 3, text: 100 },
    { id: 4, text: 200 },
    { id: 5, text: 500 },
  ];

  // The csv item id from parent component
  const id = props.getCsvPreview;
  console.log(props.getCsvPreview);

  // Always run through the getCsvPreview() function
  // if the id variable change.
  useEffect(() => {
    // Fetch csv preview from backend
    async function getCsvPreview() {
      if (id.length !== 0) {
        await axios
          .post("/graph/csv/preview/" + id, { columnCount: lineNr })
          .then((response) => {
            //console.log(response.data)
            setCsv(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getCsvPreview();
  }, [id, lineNr]);

  const onChange = (event) => {
    var lineId = event.detail.selectedOption.dataset.id;
    console.log(lineId);
    if (lineId === "1") {
      setLineNr(10);
    } else if (lineId === "2") {
      setLineNr(50);
    } else if (lineId === "3") {
      setLineNr(100);
    } else if (lineId === "4") {
      setLineNr(200);
    } else if (lineId === "5") {
      setLineNr(500);
    } else if (lineId === "0") {
      setLineNr(100);
    }
  };

  return (
    <>
      <div className="my-custom-scrollbar table-wrapper-scroll-y">
        <div id="select">
          <Text id="txtLineNr">Zeilenanzahl:</Text>
          <Select id="selectLines" onChange={onChange}>
            {data.map((item) => (
              <Option key={item.id} data-id={item.id}>
                {item.text}
              </Option>
            ))}
          </Select>
        </div>
        <CsvToHtmlTable
          data={csv}
          csvDelimiter=","
          tableClassName="table table-striped table-hover"
        />
      </div>
    </>
  );
}

export default CSVPreview;
