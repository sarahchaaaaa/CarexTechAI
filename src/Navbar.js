// Navbar.js

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import NavButton from './NavButton'

const useStyles = makeStyles(theme => ({
  homeButton: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  menuButton: {
    },
  root: {
      flexGrow: 1,
    },
  offset: theme.mixins.toolbar,
  title: {
      flexGrow: 1,
    },
}))

const Navbar = () => {
  const classes = useStyles()

  return(
      <React.Fragment>
        <AppBar position="fixed">
            <Toolbar>
              <TypoGraphy variant="h6" className={classes.title}>
                Dashboard
              </TypoGraphy>
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
