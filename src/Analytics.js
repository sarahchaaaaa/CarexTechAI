import React, { Component } from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Navbar from './Navbar'
import ParameterGrid from './analytics/parameter/ParameterGrid'
import SelectionButton from './analytics/selection/SelectionButton'
import SubGrid from './analytics/SubGrid'
import Title from './analytics/Title'


const useStyles = makeStyles(theme => ({
  offset: {
    paddingTop: '1em'
  },
  root: {
    flexGrow: 1,
  },
}))

class Analytics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }

  setType(newType) {
    this.setState({
      type: newType,
    })
  }

  render() {
    const classes = this.props
    return (
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Padding */}
        <div className={classes.offset} />

        {/* Main Container */} 
        <SubGrid className={classes.root} spacing={3} >
          <Title text='Choose the Type of Analysis' />

          {/* First Row */} 
          <SubGrid spacing={10} >
            {/* First Button */} 
            <SubGrid xs={2} >
              <SelectionButton
                id='clustering'
                setType={(newType) => this.setType(newType)}
                type={this.state.type}
              />
            </SubGrid>

            {/* Second Button */} 
            <SubGrid xs={2}>
              <SelectionButton 
                id='correlation'
                setType={(newType) => this.setType(newType)}
                type={this.state.type}
              />
            </SubGrid>
          </SubGrid>

          {/* Second Row */} 
          <Title text='Choose the Parameters' />
          <ParameterGrid
            type={this.state.type}
          />

          {/* Third Row */} 
          <Title text='Results' />
        </SubGrid>
      </div>
    )
  }
}

export default withStyles(useStyles)(Analytics)
