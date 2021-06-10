import React, {} from "react";
import AdminPub from "../device/admin/AdminPub";
import {Link } from "react-router-dom";
export default function Admin() {
  return (
    <div className="Notes">
      <Link to="/">
           Home
            </Link> 
      <AdminPub/>
    </div>
  );
}
