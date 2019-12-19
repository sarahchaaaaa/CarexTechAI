// Navbar.js

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import NavButton from './NavButton'

const useStyles = makeStyles(theme => ({
  homeButton: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  menuButton: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  root: {
      flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  bar: {
    padding: '10px 150px',
    background: 'transparent', 
    boxShadow: 'none',
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return(
      <React.Fragment>
        <AppBar position="fixed" className={classes.bar}>
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                Smile Analytics
              </Typography>
              <NavButton name='Machine Learning' className={classes.menuButton} href="/MachineLearning"></NavButton>
              <NavButton name='Analytics' className={classes.menuButton} href="/Analytics"></NavButton>
              <NavButton name='Home' className={classes.homeButton} variant="outlined" href="/"></NavButton>
            </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </React.Fragment>
  )
}
export default Navbar
