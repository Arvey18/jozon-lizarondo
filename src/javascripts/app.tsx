import * as React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// component
import Route from './settings/route';

// variables
const customHistory = createBrowserHistory();

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div id="App">
        <Router history={customHistory}>
          <Route />
        </Router>
      </div>
    );
  }
}

export default App;
