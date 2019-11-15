import * as React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Home from "../../pages/home";
import Dashboard from "../../pages/dashboard";
import NoMatch from "../../pages/nomatch";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  );
}
