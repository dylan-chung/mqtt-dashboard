import React, {} from "react";
import ProgramPublish from "../device/prg/ProgramMode";
import PrgRequest from "../device/prg/PrgRequest";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
export default function Prg() {
  return (
    <div className="Notes">
      <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer> 
      <PrgRequest/>
      <ProgramPublish/>
    </div>
  );
}
