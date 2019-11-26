import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Home from '../../pages/home';
import Dashboard from '../../pages/dashboard';
import NoMatch from '../../pages/nomatch';

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard-patients" component={Dashboard} />
      <Route exact path="/dashboard-xray" component={Dashboard} />
      <Route exact path="/dashboard-ultrasound" component={Dashboard} />
      <Route exact path="/dashboard-ecg" component={Dashboard} />
      <Route exact path="/dashboard-laboratory" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  );
}
