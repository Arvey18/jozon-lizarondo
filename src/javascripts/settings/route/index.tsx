import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../../pages/home';
import NoMatch from '../../pages/nomatch';

class RouteComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default RouteComponent;
