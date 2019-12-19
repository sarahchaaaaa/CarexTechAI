
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Navbar from './Navbar'
import { Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem, MobileStepper } from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import background from './images/background.png'

export default withStyles((theme) => ({
  offset: {
    paddingTop: '1em'
  },
  root: {
    flexGrow: 1,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
    // backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
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
  },
  res: {
    marginTop: 40
  }
}))(class extends Component {
  
  state = {
    learning: '',
    variable: '',
    age: '',
    gender: '',
    activity_count: '',
    activity_balance: '',
    mood: '',
    medication: '',
    falls: '',
    result: '',
    check: false,
    finished: false
  }


  handleSubmit = () => {  
    const { learning, variable, age, gender, activity_count, activity_balance, mood, medication, falls } = this.state
    if (learning === '' || 
      variable === '' ||
      age === '' ||
      gender === '' ||
      activity_count === '' ||
      activity_balance === '' ||
      mood === ''
    ) {
      window.alert("Error: Required Fields Not Filled Out!")
    } else {
      axios.post('http://localhost:3001/predict', {
        learning,
        variable,
        age,
        gender,
        activity_count,
        activity_balance,
        mood,
        medication,
        falls
      }).then((res) => {
        this.setState({ 'result': res.data.prediction, 'finished': true })
        console.log("RES", res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onNext = () => {
    const { variable } = this.state
    if (variable) {
      this.setState({'check': true})
    } else {
      window.alert("Error: Required Fields Not Filled Out!")
    }
  }

  render() {
    const { classes } = this.props
    const { learning, variable, check, finished, result, age, gender, activity_count, activity_balance, mood, medication, falls } = this.state
    const learnings = ['Neural Networks', 'Linear Regression', 'Decision Tree', 'SVM']
    const variables = ['Falls', 'Medication']
    const inputs = [
      {'age': [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, 
      {'gender': ['Male', 'Female']}, 
      {'activity_count': [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]},
      {'activity_balance': [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]}, 
      {'mood': [0, 1, 2, 3, 4, 5]}, 
      {'medication': [3, 4, 5, 6]}, 
      {'falls': [0, 1, 2, 3]}
    ]
    
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container direction='column' justify='space-around' alignItems='center' spacing={3} className={classes.container}>
          <Grid item>
          <Typography variant='body1'>
          This page uses pretrained models to take in user inputs and predict either the number of falls or the number of medications a senior will have within a given month. The first step is to select the model type and the variable that is being predicted. 
          </Typography>
          </Grid>
          <Grid item>
          <Typography variant='body1'>
          After clicking next, fields to enter values for all independent variables should be filled out and submitted. The application will run these parameters through the chosen model and display the predicted number of falls/medications the senior with the given values will have. 
          </Typography>
          </Grid>
          
          <Grid item container direction='row' justify='space-between' alignItems='center'>
            <Typography variant='h4'>Choose the Type of Prediction</Typography>
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
          {!check ? <Button onClick={this.onNext}>NEXT</Button> : <Grid></Grid>}
          {check ? 
          <Grid item container direction='column' alignItems='center' spacing={10}>
            <Grid item container direction='row'>
              {inputs.map((input, i) => {
                let ip = Object.keys(input)[0]
                let val = Object.values(input)[0]
                if (variable.toUpperCase() != ip.toUpperCase()) {
                  return (
                    <Grid item xs={4}>
                      <FormControl className={classes.formControl} key={i}>
                        <InputLabel id="demo-simple-select-label">{ip.toUpperCase()}</InputLabel>
                        <Select
                          value={eval(ip)}
                          name={ip}
                          onChange={this.handleChange}
                        >
                          {val.map((item, j) => {
                            return <MenuItem value={item} key={j}>{item}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  )
                } 
              })}
            </Grid>
            <Button onClick={this.handleSubmit} variant='contained' color='primary'>Submit</Button>
          </Grid>
          : <Grid></Grid>
          }
          {finished ? <Grid item className={classes.res}>
            <Typography variant='h3'>We predict {variable}: {result}</Typography>
          </Grid> : 
          <Grid></Grid>
          }
          
        </Grid>
      </div>
    )
  }

})

// age 60-100
// male female
// activity count 25-50
// activity balance 60-80
// mood 0-5 float
// medication 3-6
// falls 0-3