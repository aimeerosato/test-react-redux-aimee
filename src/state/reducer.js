import { combineReducers } from 'redux'

function trivia (state = [], action) {
  switch (action.type) {
    //
    // Looks like I need a case
    //

    default:
      return state
  }
}

const rootReducer = combineReducers({
  trivia
})

export default rootReducer
