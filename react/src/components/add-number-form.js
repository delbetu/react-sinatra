import React, { Component } from 'react'
import { ADD_NUMBER  } from "../constants/action-types"

const addNumberAction = (number) => ({
  type: ADD_NUMBER,
  payload: number
})

function mapDispatchToProps(dispatch) {
  return {
    addNumber: n => dispatch(addNumberAction(n))
  }
}

import { connect  } from "react-redux"
class ConnectedForm extends Component {
  constructor(props) {
    super(props)
    this.state = { number: "1" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value  })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { number } = this.state
    this.props.addNumber(number)
    const randInt = Math.ceil(Math.random() * 10) // Suggest a new number
    this.setState({ number: randInt  })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="number" value={this.state.number} onChange={this.handleChange} />
        <button type="submit">ADD</button>
      </form>
    )
  }
}

const AddNumberForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm)

export default AddNumberForm
