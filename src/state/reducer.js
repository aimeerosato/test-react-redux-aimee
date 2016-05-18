import { combineReducers } from 'redux';
import { List } from 'immutable';

// Used an immutable List instead of an array to avoid mutating state

function trivia (state = List(), action) {
  switch (action.type) {
    case 'TRIVIA_INPUT':
      return state.push(action.payload);
  
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  trivia
})

export default rootReducer
