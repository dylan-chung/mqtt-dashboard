import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Login.css";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import {useHistory } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";



export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  var storage=window.localStorage;
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      storage.email=fields.email;
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <Paper>
    <div className="Login">
    <Grid container direction="row" justify="center" alignItems="flex-end">
      <h3>Log In</h3>
      </Grid>
      <Form onSubmit={handleSubmit}>
      
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
        <Grid container direction="row" justify="center" alignItems="flex-end">

        <LinkContainer  to="/signup">
      <Nav.Link>Create New Account</Nav.Link>
          </LinkContainer>
          </Grid>
      </Form>
      

    </div>
    </Paper>
  );
}
