// Home.js
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import { Grid, Typography, Button } from '@material-ui/core';
import aikoo from './images/aikoo.gif'
import background from './images/background.png'

export default withStyles((theme) => ({
  
  card: {
    minWidth: 275,
  },
  gif: {
    width: 600,
    height: 600
  },
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    // backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: '100vh',
    padding: '50px 150px'
  },
  main: {
    paddingRight: theme.spacing(15),
    fontWeight: 600
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
        <Grid container direction='row' justify='space-around' alignItems='center' spacing={24}>
          <img src={aikoo} className={classes.gif} />
          <Typography variant='h1' className={classes.main}>Welcome</Typography>
        </Grid>
        <Grid container direction='row' justify='center' alignItems='baseline'>
          <p>Description about project goes here.</p>
        </Grid>
      </div>
    )
  }

})