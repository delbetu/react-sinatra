import { combineReducers  } from 'redux'
import { ADD_NUMBER  } from "../constants/action-types";

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

export default rootReducer
