import React, { Component } from 'react';
import paco from "./Paco.png";
import profilePicture from "./profilePictureExample.png";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";



export default class Header extends Component {
    render(){
      return (
        <ShellBar
        logo={<img src={paco} alt="Paco" />}
        profile={
          <Avatar>
            <img src={profilePicture} alt="Profile" />
          </Avatar>
        }
        primaryTitle="Paco"
      >
        <ShellBarItem icon="bell" text="Add" />
      </ShellBar>
      );
    }
}