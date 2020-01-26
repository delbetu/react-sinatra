import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import store from './store'
import { addNumberAction } from './actions'

store.subscribe(() => console.log(store.getState()));


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('main-content')
)
