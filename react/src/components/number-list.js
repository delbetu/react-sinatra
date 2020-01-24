import React from "react"
import { connect  } from "react-redux"

const mapStateToProps = state => {
  return { numbers: state.numbers  }
};

const ConnectedList = ({ numbers }) => (
  <div>
    {
      numbers.map(
        (num, index) => (<div key={index}>{num}</div>)
      )
    }
  </div>
)

const NumberList = connect(mapStateToProps)(ConnectedList)

export default NumberList
