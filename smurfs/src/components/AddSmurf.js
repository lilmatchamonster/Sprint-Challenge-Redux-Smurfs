import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: "",
      age: "",
      height: ""
    }
  }

  changeHandler = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({ name: "", age: "", height: "" })
      }}>
        <label>Add New Smurf:</label>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.changeHandler}></input>
        <input type="text" placeholder="Height" name="height" value={this.state.height} onChange={this.changeHandler}></input>
        <button type="submit" >Add New</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, { addSmurf: addSmurf })(AddSmurf);