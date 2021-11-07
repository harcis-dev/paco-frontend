import React, { Component } from "react";
import paco from "./Paco.png";
import profilePicture from "./profilePictureExample.png";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "./Header.css";

export default function Header() {
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
