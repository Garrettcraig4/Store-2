import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Store} path="/Store" />
    <Route component={Cart} path="/Cart" />
  </Switch>
);
