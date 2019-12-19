
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Navbar from './Navbar'
import { Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import background from './images/background.png'
var clusterings = require.context('../public/clusters')
var correlations = require.context('../public/correlation')


export default withStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
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
  },
  submit: {
    marginTop: 40
  }
}))(class extends Component {
  
  state = {
    analysis: '',
    var1: '',
    var2: '',
    show: false
  }

  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    const { analysis, var1, var2 } = this.state
    if (analysis === '' || var1 === '' || var2 === '') {
        window.alert("Error: Required Fields Not Filled Out!")
    } else {
        this.setState({'show': true})
        console.log("CLICKE")
    }
  }
    getImage = () => {
        var { analysis, var1, var2 } = this.state
        var1 = var1.replace(' ', '')
        var2 = var2.replace(' ', '')
        if (analysis == 'clustering') {
            return clusterings(`./${var1}vs${var2}.png`)
        } else {
            return correlations(`./${var1}vs${var2}.png`)
        }
    }

  render() {
    const { classes } = this.props
    const { analysis, var1, var2, show } = this.state

    const variables = [
        'Age',
        'Gender',
        'Activity Balance',
        'Activity Count',
        'Mood',
        'Medication',
        'Falls',
    ]
    return (
      <div className={classes.root}>
        <Navbar />
        <Grid container direction='column' justify='space-around' alignItems='center' spacing={3} className={classes.container}>
          <Grid item>
          <Typography variant='body1'>
          This page uses different analytic techniques to display the correlation or clusterings between two chosen variables. This will allow users to better visualize the interaction between variables.            </Typography>
          </Grid>
          <Grid item>
          <Typography variant='body1'>
          The first step is to select either correlation or clustering. After clicking ‘Conduct Analysis’, the correlation between the two variables will we displayed on the page. These images are dynamically rendered based off the user input.
          </Typography>
          </Grid>
          <Grid item container direction='row' justify='space-between' alignItems='center'>
            <Typography variant='h4'>Choose the Type of Analysis</Typography>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Analysis</InputLabel>
              <Select
                value={analysis}
                name = 'analysis'
                onChange={this.handleChange}
              >
                <MenuItem value='clustering' >Clustering</MenuItem>
                <MenuItem value='correlation' >Correlation</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item container direction='row' justify='space-between' alignItems='center'>
            <Typography variant='h4'>Choose the Parameters</Typography>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Var 1</InputLabel>
              <Select
                value={var1}
                name = 'var1'
                onChange={this.handleChange}
              >
                {variables.map((item, i) => {
                  return <MenuItem value={item} key={i}>{item}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Var 2</InputLabel>
              <Select
                value={var2}
                name = 'var2'
                onChange={this.handleChange}
              >
                {variables.map((item, i) => {
                  return <MenuItem value={item} key={i}>{item}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Button onClick={this.handleSubmit} className={classes.submit}>Conduct Analysis</Button>
          {show ? <img src={this.getImage()}></img> : <Grid></Grid>}
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