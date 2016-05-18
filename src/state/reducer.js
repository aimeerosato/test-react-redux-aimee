import { combineReducers } from 'redux'

function trivia (state = [], action) {
  switch (action.type) {
    case 'TRIVIA_INPUT':
      state.push(action.payload);
      console.log(state);
      return state;
  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  trivia
})

export default rootReducer
