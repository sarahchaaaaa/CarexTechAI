import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import ParameterDropdown from './ParameterDropdown'
import SubGrid from '../SubGrid'
import Title from '../Title'


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}))

const ParameterGrid = (props) => {
  const classes = useStyles()

  //   var component = <Button>Blah</Button>
  // 
  //   /* Change Inner Component Based on Type of Analysis */
  //   if( props.type === 'clustering' ){
  //     component = props.parameters.map(
  //       parameter => <Button key={parameter}>{parameter}</Button>
  //     )
  //   } else if( props.type === 'correlation' ){
  //     component = <Button>Correlation</Button>
  //   }
  var component = <React.Fragment></React.Fragment>
  if( props.type !== "" ){
    component = 
      <React.Fragment>
        <Title text='Choose the Parameters' />
        <SubGrid direction='column'>
          <FormControl className={classes.formControl}>
            <ParameterDropdown id='1st Variable' parameters={props.parameters}
              onChange={(event) => props.setParam1(event.target.value)}
              value={props.param1}/>
          </FormControl>
          <FormControl className={classes.formControl}>
            <ParameterDropdown id='2nd Variable' parameters={props.parameters}
              onChange={(event) => props.setParam2(event.target.value)}
              value={props.param2}/>
          </FormControl>
          <Button color='primary' variant='contained'>
            Conduct Analysis
          </Button>
        </SubGrid>
      </React.Fragment>
  }

  return (
    component
  )
}

export default ParameterGrid
