import React, { useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
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
  Form,
  FormItem,
  Input,
  InputType,
  CheckBox,
  FormGroup,
  Label,
  Select,
  Option,
  TextArea,
  Icon,
  Title,
  SideNavigation,
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

  const dialogSettingsRef = useRef(null);
  const settingsClick = () => {
    dialogSettingsRef.current.show();
  };
  const handlesettingsClose = () => {
    dialogSettingsRef.current.close();
  };

  const history = useHistory();

  function handleLogout() {
    history.push("/Login");
    sessionStorage.removeItem("token");
    window.location.reload(false);
  }

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
        <div className="popover-content">
          <List headerText="Max Mustermann" separators="Inner">
            <StandardListItem onClick={settingsClick} icon="settings">
              Settings
            </StandardListItem>
            <StandardListItem icon="sys-help">Help</StandardListItem>
            <StandardListItem onClick={handleLogout} icon="log">
              Sign out
            </StandardListItem>
          </List>
        </div>
      </Popover>
      <Dialog
        ref={dialogSettingsRef}
        className="settingsdialog"
        header={
          <Bar endContent={<Icon name="settings" />}>
            <Title>Settings</Title>
          </Bar>
        }
        footer={
          <div className="settingsFooter">
            <Button
              variant="primary"
              design="Emphasized"
              onClick={handlesettingsClose}
            >
              Save
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button variant="secondary" onClick={handlesettingsClose}>
              Close
            </Button>
          </div>
        }
      >
        <div id="settingsdialog">
          <div id="sidenav">
            <SideNavigation>
              <SideNavigationItem text="Account"></SideNavigationItem>
              <SideNavigationItem text="Notifications"></SideNavigationItem>
              <SideNavigationItem text="Security"></SideNavigationItem>
              <SideNavigationItem text="Data export"></SideNavigationItem>
              <SideNavigationItem text="Help & Feedback"></SideNavigationItem>
            </SideNavigation>
          </div>
          <div id="form">
            <Form>
              <FormGroup titleText={"Personal Data"}>
                <FormItem label={"First Name"}>
                  <Input type={InputType.Text} value="Max" />
                </FormItem>
                <FormItem label={"Last Name"}>
                  <Input type={InputType.Text} value="Mustermann" />
                </FormItem>
                <FormItem label={<Label>Address</Label>}>
                  <Input type={InputType.Text} value="Musterstraße 123" />
                </FormItem>
                <FormItem label={"Country"}>
                  <Select>
                    <Option>Germany</Option>
                    <Option>France</Option>
                    <Option>Italy</Option>
                  </Select>
                </FormItem>
                <FormItem label="Additional Comment">
                  <TextArea
                    rows={3}
                    style={{
                      width: "210px",
                    }}
                  />
                </FormItem>
                <FormItem label={"Home address"}>
                  <CheckBox checked />
                </FormItem>
              </FormGroup>
            </Form>
          </div>
        </div>
      </Dialog>
    </>
  );
}
