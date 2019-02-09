import React from 'react';


const Smurf = props => {

  return (
    <div>
      <h3>{props.aSmurf.name}</h3>
      <p><b>Age:</b> {props.aSmurf.age}</p>
      <p><b>Height:</b> {props.aSmurf.height}</p>
    </div>
  );
};

export default Smurf;