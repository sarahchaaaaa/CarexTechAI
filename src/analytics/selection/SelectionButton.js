import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'



const SelectionButton = (props) => {
  var text = 'No Description'
  if(props.id === 'clustering') {
    text = 'Clustering'
  } else if (props.id === 'correlation') {
    text = 'Correlation'
  }

  return (
    <Button
      color={props.id === props.type ? 'primary': 'default'}
      id={props.id}
      onClick={() => props.setType(props.id)}
      size='large'
      variant='contained'
    >
      {text}
    </Button>
  )
}

export default SelectionButton
