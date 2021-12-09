import React, { useCallback, useRef } from "react";
import paco from "./Paco.png";
import profilePicture from "./profilePictureExample.png";
import {
  Avatar,
  ShellBar,
  StandardListItem,
  Popover,
  Button,
  List,
  Bar,
  Icon,
  Title,
  SideNavigation,
  SideNavigationSubItem,
  SideNavigationItem,
  PopoverPlacementType,
  Dialog,
} from "@ui5/webcomponents-react";
import "./Header.css";

export default function Header() {
  const popoverRef = useRef(null);
  const handleProfileClick = useCallback(
    (e) => {
      popoverRef.current.showAt(e.detail.targetRef);
    },
    [popoverRef]
  );

  const dialogRef = useRef(null);
  const itemClick = () => {
    dialogRef.current.show();
  };
  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <ShellBar
        logo={<img src={paco} alt="Paco" />}
        profile={
          <Avatar>
            <img src={profilePicture} alt="Profile" />
          </Avatar>
        }
        primaryTitle="Paco"
        showNotifications={true}
        onProfileClick={handleProfileClick}
      ></ShellBar>
      <Popover
        ref={popoverRef}
        allowTargetOverlap={false}
        //horizontalAlign={PopoverHorizontalAlign.Right}
        placementType={PopoverPlacementType.Bottom}
        id="popover"
      >
        <div class="popover-content">
          <List headerText="Profile" separators="Inner">
            <StandardListItem onClick={itemClick} icon="add">
              test
            </StandardListItem>
            <StandardListItem icon="sys-find">Settings</StandardListItem>
            <StandardListItem icon="accept"> Messages</StandardListItem>
          </List>
        </div>
      </Popover>
      <Dialog
        ref={dialogRef}
        id="Dialog"
        header={
          <Bar endContent={<Icon name="settings" />}>
            <Title>Dialog</Title>
          </Bar>
        }
        footer={
          <Bar endContent={<Button onClick={handleClose}>Close</Button>} />
        }
      >
        <SideNavigation>
          <SideNavigationItem>
            <SideNavigationSubItem text="SideNavigationSubItem 1" />
            <SideNavigationSubItem text="SideNavigationSubItem 2" />
          </SideNavigationItem>
        </SideNavigation>
        Das ist ein random Text
      </Dialog>
    </>
  );
}
