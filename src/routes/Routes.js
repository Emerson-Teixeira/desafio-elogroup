import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CreateLead from "../pages/CreateLead";
import CreateUser from "../pages/CreateUser";
//import
import Login from "../pages/Login";
import Painel from "../pages/Painel";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoutes
          exact
          path="/"
          component={Painel}
        />
        <PrivateRoutes
          exact
          path="/create"
          component={CreateLead}
        />
        <CustomRoutes exact path="/login" component={Login} />
        <CustomRoutes exact path="/register" component={CreateUser} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isLoggedEloGroup") === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}

function CustomRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isLoggedEloGroup") !== "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
}
