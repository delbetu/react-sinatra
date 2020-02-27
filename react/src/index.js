import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Numbers from './components/numbers'
import Ping from './components/ping'
import store from './store'
import { addNumberAction } from './actions'

store.subscribe(() => console.log(store.getState()));


ReactDom.render(
  <Provider store={store}>
    <Numbers />
    <Ping />
  </Provider>
  ,
  document.getElementById('main-content')
)
