import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../views/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
