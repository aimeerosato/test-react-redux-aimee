import React from 'react'
import GetNumberTriviaBtn from './get-number-trivia-btn'
import TriviaList from './trivia-list'

export function App(props) {
  return (
    <main>
      <h1>Welcome to the Doorsteps Trivia!</h1>
      <GetNumberTriviaBtn />
      <TriviaList />
    </main>
  )
}

export default App
