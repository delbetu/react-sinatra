import { combineReducers  } from 'redux'
import { ADD_NUMBER, SHOW_PING_RESULT } from "../constants/action-types";

const initialState = {
  numbers: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, { numbers: state.numbers.concat(action.payload) });
    case SHOW_PING_RESULT:
      return Object.assign({}, state, { pingResult: 'PONG' });
    default:
      return state
  }
}

export default rootReducer
