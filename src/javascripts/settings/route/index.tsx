import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

// pages
import Home from '../../pages/home';
import Dashboard from '../../pages/dashboard';
import NoMatch from '../../pages/nomatch';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard-patients/:search?/" component={Dashboard} />
      <Route exact path="/dashboard-xray" component={Dashboard} />
      <Route exact path="/dashboard-ultrasound" component={Dashboard} />
      <Route exact path="/dashboard-ecg" component={Dashboard} />
      <Route exact path="/dashboard-laboratory" component={Dashboard} />
      <Route exact path="/dashboard-settings" component={Dashboard} />
      <Route
        exact
        path="/dashboard-settings-profile-information"
        component={Dashboard}
      />
      <Route
        exact
        path="/dashboard-settings-user-management"
        component={Dashboard}
      />
      <Route exact path="/dashboard-settings-password" component={Dashboard} />
      <Route exact path="/dashboard-control-materials" component={Dashboard} />
      <Route exact path="/dashboard-reference-form" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  );
}
