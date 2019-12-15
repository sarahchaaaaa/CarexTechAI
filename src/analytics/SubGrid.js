import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'


const SubGrid = (props) => {
  return (
    <Grid
      alignItems='center'
      className={props.className}
      container
      direction={props.direction ? props.direction : 'row'}
      item
      justify='center'
      spacing={props.spacing ? props.spacing : 0}
      xs={props.xs}
    >
      {props.children}
    </Grid>
  )
}

export default SubGrid
