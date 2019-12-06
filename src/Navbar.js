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
  root: {
      flexGrow: 1,
    },
  menuButton: {
      marginRight: theme.spacing(2),
    },
  title: {
      flexGrow: 1,
    },
}))

const Navbar = () => {
  const classes = useStyles();

  return(
      <div>
        <AppBar position="static">
            <Toolbar>
              <TypoGraphy variant="h6" className={classes.title}>
                Dashboard
              </TypoGraphy>
              <NavButton name='Machine Learning' className={classes.menuButton} href="/MachineLearning"></NavButton>
              <NavButton name='Analytics' className={classes.menuButton} href="/Analytics"></NavButton>
              <NavButton name='Home' className={classes.menuButton} variant="outlined" href="/"></NavButton>
            </Toolbar>
        </AppBar>
      </div>
  )
}
export default Navbar
