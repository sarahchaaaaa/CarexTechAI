
import React, { Component } from 'react'

import Navbar from './Navbar'
import ParameterGrid from './analytics/parameter/ParameterGrid'
import SelectionButton from './analytics/selection/SelectionButton'
import SubGrid from './analytics/SubGrid'
import Title from './analytics/Title'

import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  offset: {
    paddingTop: '1em'
  },
  root: {
    flexGrow: 1,
  },
}))

const dependent = [
  { label: 'Falls', value: 1},
  { label: 'Medication', value: 2},
  { label: 'Moodscore', value: 3},
];

class MachineLearning extends Component {
  constructor(props) {
    super(props);
    // this.machineState = {value: 0};
    this.variableState = {value: 0};
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  // handleSubmit(event) {
  //   alert('Your choice of variable is: ' + this.machineState.value);
  //   alert('Your choice of variable is: ' + this.variableState.value);
  //   event.preventDefault();
  // }
  handleSubmit(values) {
    const options = {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Referrer-Policy': 'origin-when-cross-origin'
      },
      method: 'POST',
      body: JSON.stringify({'Polls': 'Polls'})
    }
  
  fetch('http://localhost:3000/apiMachineLearning', options)
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  render() {
    const classes = this.props
    return (
      <div>
        <Navbar />

        {/* Padding */}
        <div className={classes.offset} />

        {/* Main Container */} 
        <SubGrid className={classes.root} spacing={3} >
          <Title text='Choose the Type of Machine Learning' />
          {/* First Row */} 
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Neural Networks">Neural Networks</option>
                <option value="Linear Regression">Linear Regression</option>
                <option value="Decision Tree">Decision Tree</option>
                <option value="Naive Bayes">Naive Bayes</option>
                <option value="SVM">SVM</option>
              </select>
            </label>
          {/* Second Row */} 
          <Title text='Choose the Variable to Predict' />
          <form onSubmit={this.handleSubmit}>
              <label>
                <select value={this.variableState.value} onChange={this.handleChange}>
                  <option value="Falls">Falls</option>
                  <option value="Medication">Medication</option>
                  <option value="Moodscore">Moodscore</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
              {/* Predicted value of how many falls */}
          </form>

          {/* Third Row */} 
          <Title text='Choose the Parameters' />

          {/* Fourth Row */} 
          <Title text='Results' />

        </SubGrid>

        {/* Form Choice for Dependent Variables */}
        {/* Predicted value of whether or not they have a fall */}
        
      </div>
    );
  }
}

export default MachineLearning
