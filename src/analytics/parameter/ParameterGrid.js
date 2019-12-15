import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import SubGrid from '../SubGrid'


const ParameterGrid = (props) => {
  var component = <Button>Blah</Button>

  /* Change Inner Component Based on Type of Analysis */
  if( props.type === 'clustering' ){
    component = <Button>Clustering</Button>
  } else if( props.type === 'correlation' ){
    component = <Button>Correlation</Button>
  }
  return (
    <SubGrid>
      {component}
    </SubGrid>
  )
}

export default ParameterGrid
