import React from "react";
//import Arrow from "./arrow.svg";
import "./CardsCSV.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards() {
  
  return (
    <>
      <div className="cards">
        <ui5-card class="medium ui5-card-root">
          <ui5-card-header
            slot="header"
            title-text="Process Models"
            class="card-header"
          >
            <ui5-icon name="overview-chart" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
          <ui5-list id="myList" class="full-width">
            <ui5-li icon="sap-icon://documents">Eventlog.csv</ui5-li>
            <ui5-li icon="sap-icon://documents">Eventlog2.csv</ui5-li>
            <ui5-li icon="sap-icon://documents">Eventlog3.csv</ui5-li>
            <ui5-li icon="sap-icon://documents">Eventlog4.csv</ui5-li>
          </ui5-list>
          </div>
        </ui5-card>
      </div>
    </>
  );
}
