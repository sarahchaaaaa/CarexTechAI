
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

const NavButton = (props) => {
  return (
    <Button color="inherit" variant={props.variant ? props.variant : "title"} href={props.href}>
      {props.name}
    </Button>
  )
}

export default NavButton
