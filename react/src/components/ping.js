import React, { Component } from "react"
import { connect  } from "react-redux"
import { showPingResult } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    showPingResult: () => dispatch(showPingResult())
  }
}

const mapStateToProps = state => {
  return { pingResult: state.pingResult  }
};

class ConnectedPing extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.showPingResult()
  }

  render() {
    return (<h1> { this.props.pingResult } </h1>)
  }
}

const Ping = connect(mapStateToProps, mapDispatchToProps)(ConnectedPing)

export default Ping
