import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import './App.css';

const SmurfsList = props => {
  return (
    <div className="smurfList">
      {props.smurfs.map((individual, index) => {
        return <Smurf key={index} aSmurf={individual} />
      })}
    </div>
  );
};

const mapPropsToState = state =>{
  return{
    smurfs: state.smurfs 
  }
}

export default connect(mapPropsToState)(SmurfsList);