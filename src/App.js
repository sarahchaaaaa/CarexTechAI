// App.js

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Navbar from './Navbar';
import Home from './Home';
import MachineLearning from './MachineLearning';
import Analytics from './Analytics';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/MachineLearning" component={MachineLearning} />
            <Route path="/Analytics" component={Analytics} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
