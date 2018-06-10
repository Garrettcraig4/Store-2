import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Store} path="/Store" />
  </Switch>
);
