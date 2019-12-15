import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}))

const ParameterDropdown = (props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Select value={props.value} displayEmpty labelid={props.id} onChange={props.onChange}>
        <MenuItem value='' disabled>
          {props.id}
        </MenuItem>
        {props.parameters.map(parameter => <MenuItem
          key={parameter}
          value={parameter}>
            {parameter}
        </MenuItem>)}
      </Select>
    </React.Fragment>
  )
}

export default ParameterDropdown
