import React, { Component } from 'react'
import { ADD_NUMBER  } from "../constants/action-types";

const add_number_action = (number) => ({
  type: ADD_NUMBER,
  payload: number
})

function mapDispatchToProps(dispatch) {
  return {
    addNumber: n => dispatch(add_number_action(n))
  };
}

import { connect  } from "react-redux"
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "1" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value  });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { number } = this.state;  // extract number from state
    this.props.addNumber(number);
    this.setState({ number: ""  });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="number" value={this.state.number} onChange={this.handleChange} />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

const AddNumberForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm)

export default AddNumberForm