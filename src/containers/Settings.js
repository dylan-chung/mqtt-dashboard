import React, {} from "react";
import SpPublish from "../device/settings/SpPub";
import SettingRequest from "../device/settings/SettingRequest";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
export default function Settings() {
  return (
    <div className="Notes">
      <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer> 
      <SettingRequest/>
      <SpPublish/>
    </div>
  );
}
