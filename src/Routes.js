import React from "react";
import { Route, Switch } from "react-router-dom";
//import Home1 from "./containers/Home1";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Notes from "./containers/Notes";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Prg from "./containers/Prg";
import Admin from "./containers/Admin";
import User from "./containers/User";
//import App2 from "./App2"
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      {/* <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute> */}
      <AuthenticatedRoute exact path="/User">
        <User />
      </AuthenticatedRoute>
      {/* <AuthenticatedRoute exact path="/main">
        <App2 />
      </AuthenticatedRoute> */}
      <AuthenticatedRoute exact path="/devices/new">
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/devices/:id/Temp">
        <Notes />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/devices/:id/Prg">
        <Prg/>
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/devices/:id/Settings">
        <Settings/>
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/devices/:id/Admin">
        <Admin/>
      </AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
