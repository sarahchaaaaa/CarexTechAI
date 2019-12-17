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

import sansLight from './fonts/SourceSansPro-Light.ttf'

const source_sans = {
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  // fontWeight: 400,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

// Find default themes here 
// https://material-ui.com/customization/default-theme/

// Custom theme override
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#F7C331',
      main: '#F7882F',
      dark: '#6B78AF',
      contrastText: '#fff',
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.54)",        
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
    },
    background: {
      paper: "#DCC7AA",
      default: "#DCC7AA"
    }
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': 'Source Sans Pro',
      },
    },
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
