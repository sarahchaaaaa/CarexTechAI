
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Navbar from './Navbar'
import ParameterGrid from './analytics/parameter/ParameterGrid'
import SelectionButton from './analytics/selection/SelectionButton'
import SubGrid from './analytics/SubGrid'
import Title from './analytics/Title'
import { Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import background from './images/background.png'


export default withStyles((theme) => ({
  offset: {
    paddingTop: '1em'
  },
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    // backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: '100vh',
    padding: '50px 150px'
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 200,
  },
  container: {
    paddingLeft: 200,
    paddingRight: 200
    // margin: '20px 100px'
  }
}))(class extends Component {
  
  state = {
    learning: '',
    variable: ''
  }
  handleSubmit = () => {  
    const { learning, variable } = this.state
    axios.post('http://localhost:3000/apiMachineLearning', {
      learning,
      variable
    }).then((res) => {
      console.log('res', res)
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { classes } = this.props
    const { learning, variable } = this.state
    const learnings = ['Neural Networks', 'Linear Regression', 'Decision Tree', 'Naive Bayes', 'SVM']
    const variables = ['Falls', 'Medication', 'Moodscore']
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container direction='column' justify='space-around' alignItems='center' spacing={4} className={classes.container}>
          <Grid item container direction='row' justify='space-between' alignItems='center'>
            <Typography variant='h4'>Choose the Type of Machine Learning</Typography>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Learning</InputLabel>
              <Select
                value={learning}
                name = 'learning'
                onChange={this.handleChange}
              >
                {learnings.map((item, i) => {
                  return <MenuItem value={item} key={i}>{item}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item container direction='row' justify='space-between' alignItems='center'>
            <Typography variant='h4'>Choose the Variable to Predict</Typography>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Variable</InputLabel>
              <Select
                value={variable}
                name = 'variable'
                onChange={this.handleChange}
              >
                {variables.map((item, i) => {
                  return <MenuItem value={item} key={i}>{item}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Button onClick={this.handleSubmit} variant='contained'>Submit</Button>
        </Grid>
      </div>
    )
  }

})