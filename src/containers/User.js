import React, {  } from "react";

export default function User() {
    var storage=window.localStorage;

    var email = storage.email;
  const date = new Date();
  const dateAsString = date.toString();
  const timezone = dateAsString.match(/\(([^)]+)\)$/)[1];

  return (
      <div>
      <span><h8>Email: </h8></span>
      <br/>
      <h6>{email}</h6>
      <br/>
      <span><h8>TimeZone: </h8></span>
      <br/>
      <h6>{timezone}</h6>
      </div>
  )
      
}
