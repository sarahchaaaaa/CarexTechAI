import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'


const SubmitButton = (props) => {
  let disabled = false
  if( props.param1 === '' || props.param2 === '' ){
    disabled = true
  }

  return(
    <Button variant='contained' color='primary' disabled={disabled}>
      {props.children}
    </Button>
  )
}

export default SubmitButton
