import React, { Component } from "react"
import { connect  } from "react-redux"
import { addNumberAction } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    addNumber: n => dispatch(addNumberAction(n)),
    triggerSaga: request => dispatch(request)
  }
}

const mapStateToProps = state => {
  return { numbers: state.numbers  }
};

class ConnectedList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.triggerSaga({type: 'ADD_REMOTE_USER_IDS'})
  }

  render() {
    return (
      <div>
        {
          this.props.numbers.map(
            (num, index) => (<div key={index}>{num}</div>)
          )
        }
      </div>
    )
  }
}

const NumberList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)

export default NumberList
