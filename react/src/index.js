import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Provider from 'react-redux'
import App from './components/app'
import { createStore } from 'redux'

const ADD_NUMBER = 'ADD_NUMBER'
const add_number_action = (number) => ({
  type: ADD_NUMBER,
  payload: number
})

const initialState = {
  numbers: []
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, { numbers: state.numbers.concat(action.payload) });
    default:
      return state
  }
}

const store = createStore(rootReducer, initialState)

store.dispatch(add_number_action(1))
store.dispatch(add_number_action(2))
store.dispatch(add_number_action(3))
store.dispatch(add_number_action(4))

console.log(store.getState())

ReactDom.render(
  <App place='index-page' />
  ,
  document.getElementById('main-content')
)
