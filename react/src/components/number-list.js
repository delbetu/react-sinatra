import React, { Component } from "react"
import { connect  } from "react-redux"
import { addNumberAction } from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    addNumber: n => dispatch(addNumberAction(n))
  }
}

// requestSaga({type: 'FETCH_USER_IDS'})

const mapStateToProps = state => {
  return { numbers: state.numbers  }
};

class ConnectedList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(users => users.map( u => u.id ))
          .then(ids => { ids.map(id => this.props.addNumber(id)) })
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
