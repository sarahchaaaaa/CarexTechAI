// Home.js
import React, { Component } from 'react'
import Navbar from './Navbar'
import { Grid, Typography } from '@material-ui/core';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br></br>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item>
            <Typography variant='h2'>Home</Typography>
          </Grid>
        </Grid>
        <Grid container direction='row' justify='center' alignItems='baseline'>
          <p>Description about project goes here.</p>
        </Grid>

      </div>
    );
  }
}

export default Home;
