import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
//import
import Login from "../pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoutes
          exact
          path="/"
          component={() => {
            //painelLeads
            return <h1>TelaLeads</h1>;
          }}
        />
        <PrivateRoutes
          exact
          path="/create"
          component={() => {
            //painelLeads
            return <h1>Criar</h1>;
          }}
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
