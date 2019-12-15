// App.js

import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from './Home';
import MachineLearning from './MachineLearning';
import Analytics from './Analytics';

// Find default themes here 
// https://material-ui.com/customization/default-theme/

// Custom theme override
const theme = createMuiTheme({
  palette: {
      type: 'dark',
      primary: {
          light: '#63ccff',
          main: '#ad7b05',
          dark: '#eb4034',
          contrastText: '#fff',
      },
      text: {
          primary: "rgba(255, 255, 255, 0.87)",
          secondary: "rgba(255, 255, 255, 0.54)",        
          disabled: "rgba(255, 255, 255, 0.38)",
          hint: "rgba(255, 255, 255, 0.38)",
      },
      background: {
          paper: "#fff",
          default: "#000"
      }
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route path="/MachineLearning" component={MachineLearning} />
              <Route path="/Analytics" component={Analytics} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
