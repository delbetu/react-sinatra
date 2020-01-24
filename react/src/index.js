import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import store from './store'
import { ADD_NUMBER  } from "./constants/action-types";

const add_number_action = (number) => ({
  type: ADD_NUMBER,
  payload: number
})

store.subscribe(() => console.log(store.getState()));
store.dispatch(add_number_action(1))
store.dispatch(add_number_action(2))
store.dispatch(add_number_action(3))
store.dispatch(add_number_action(4))

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('main-content')
)
