import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const Title = (props) => {
  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      item
      justify="center"
    >
      <Typography
        component="h3"
        variant="h3"
      >
        {props.text}
      </Typography>
    </Grid>
  )
}

export default Title
