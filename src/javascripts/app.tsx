import * as React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// component
import Route from './settings/route';
import ProgressBar from './components/progress-bar';

// variables
const customHistory = createBrowserHistory();

export default function App() {
  return (
    <div id="App">
      <ProgressBar />
      <Router history={customHistory}>
        <Route />
      </Router>
    </div>
  );
}
