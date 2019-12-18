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
import background from './images/background.png'

const useStyles = makeStyles(theme => ({
  offset: {
    paddingTop: '1em'
  },
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '100vh'
  },
}))

class Analytics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parameters: [
        'activity balance',
        'activity count',
        'age',
        'gender',
        'medication',
        'mood',
        'fall',
      ],
      type: '',
      param1: '',
      param2: '',
    }
  }

  setType(newType) {
    this.setState({
      type: newType,
    })
  }

  setParam1(newParam) {
    this.setState({
      param1: newParam
    })
  }

  setParam2(newParam) {
    this.setState({
      param2: newParam
    })
  }

  render() {
    const classes = this.props  
    console.log(classes)
    return (
      <div style={{backgroundImage: `url(${background})`,
      backgroundSize: 'cover', height: '100vh'}}>
        {/* Navbar */}
        <Navbar />

        {/* Padding */}
        <div className={classes.offset} />

        {/* Main Container */} 
        <SubGrid spacing={3} >
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
          <ParameterGrid
            param1={this.state.param1}
            param2={this.state.param2}
            setParam1={(newParam) => this.setParam1(newParam)}
            setParam2={(newParam) => this.setParam2(newParam)}
            parameters={this.state.parameters}
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
