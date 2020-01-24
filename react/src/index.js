import $ from 'jquery'
import ReactDom from 'react-dom'
import React, { Component } from 'react'

const sum = (a, b) => a + b;

class App extends Component {
  render() {
    return <div>hello</div>
  }
}

ReactDom.render(<App />, document.getElementById('main-content'))
