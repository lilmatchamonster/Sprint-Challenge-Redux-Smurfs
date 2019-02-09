import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

const SmurfsList = props => {
  return (
    <ul>
      {props.smurfs.map(individual => {
        return <Smurf key={individual.name} aSmurf={individual} />;
      })}
    </ul>
  );
};

const mapPropsToState = state =>{
  return{
    smurfs: state.smurfs 
  }
}

export default connect(mapPropsToState)(SmurfsList);