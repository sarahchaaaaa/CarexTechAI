// App.js

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import {
  Route,
  NavLink,
  BrowserRouter
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
          <div>
            <ul className="header">
              <Navbar/>
                <li><NavLink exact to="/Home">Home</NavLink> </li>
                <li><NavLink to="/MachineLearning">MachineLearning</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/Home" component={Home} />
              <Route path="/MachineLearning" component={MachineLearning} />
              <Route path="/Analytics" component={Analytics} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;