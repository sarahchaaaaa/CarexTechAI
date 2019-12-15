// Home.js
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import { Grid, Typography, Button } from '@material-ui/core';
import aikoo from './images/aikoo.gif'
import { withTheme } from '@material-ui/core/styles';

export default withStyles((theme) => ({
  
  card: {
    minWidth: 275,
  },
  gif: {
    width: 300,
    height: 250
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: '100vh'
  }
}))(class extends Component {
  
  state = {
    teams: [],
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Navbar />
        <br></br>
        <Grid container direction='row' justify='center' alignItems='center' spacing={24}>
          <img src={aikoo} className={classes.gif} />
          <Typography variant='h2'>Home</Typography>
        </Grid>
        <Grid container direction='row' justify='center' alignItems='baseline'>
          <p>Description about project goes here.</p>
        </Grid>
      </div>
    )
  }

})