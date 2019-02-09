import React from 'react';

import { connect } from 'react-redux';
import { removeSmurf } from '../actions';
import './App.css';

const Smurf = props => {
  return (
    <div className="smurfCard">
      <h3>{props.aSmurf.name}</h3>
      <p><b>Age:</b> {props.aSmurf.age}</p>
      <p><b>Height:</b> {props.aSmurf.height}</p>
      <button type="button" onClick={() => props.removeSmurf(props.aSmurf.id)}>Remove</button>
    </div>
  );
};

export default connect(null, { removeSmurf: removeSmurf })(Smurf);
