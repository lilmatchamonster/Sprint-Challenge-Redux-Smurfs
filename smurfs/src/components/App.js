import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmufs } from '../actions'

import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount(){
    this.props.getSmufs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <AddSmurf />
        {this.props.loadingSmurfs ?  "LOADING, ONE MOMENT PLEASE..." : <SmurfsList /> }
      </div>
    );
  }
}

const mapPropsToState = state =>{
  return{
    loadingSmurfs: state.loadingSmurfs,
    // error: state.error
  }
}
export default connect(mapPropsToState, { getSmufs: getSmufs } )(App);
