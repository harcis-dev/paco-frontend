import React, { Component } from "react";
import Pfeil from "./Pfeil.png";
import Nummer from "./Nummer.png";
import "./Cards.css";

export default class Header extends Component {
  render() {
    return (
      <div className="cards">
        <ui5-card class="medium">
          <ui5-card-header slot="header" title-text="Proccess Models">
            <ui5-icon name="group" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
            <ui5-list separators="None" class="card-content-child">
              <ui5-li image={Pfeil} description="42.000 variants">
                #1
              </ui5-li>
              <ui5-li image={Pfeil} description="1.337 variants">
                #2
              </ui5-li>
              <ui5-li image={Pfeil} description="3.333 variants">
                #3
              </ui5-li>
              <ui5-li image={Pfeil} description="1.234 variants">
                #4
              </ui5-li>
            </ui5-list>
          </div>
        </ui5-card>
        <ui5-card class="medium">
          <ui5-card-header slot="header" title-text="Variants">
            <ui5-icon name="group" slot="avatar"></ui5-icon>
          </ui5-card-header>
          <div class="card-content">
            <ui5-list separators="None" class="card-content-child">
              <ui5-li image={Nummer} description="1.333 cases">
                {"A -> B -> C -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="599 cases">
                {"A -> B -> D"}
              </ui5-li>
              <ui5-li image={Nummer} description="20 cases">
                {"B -> A -> C -> D"}
              </ui5-li>
            </ui5-list>
          </div>
        </ui5-card>
      </div>
    );
  }
}
