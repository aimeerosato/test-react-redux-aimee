import React from 'react'
import { connect } from 'react-redux'

export function TriviaList(props) {
  const { trivia } = props

  if (trivia.length === 0) return null
    console.log("This is trivia in list ", trivia);
  return (
    <ul>
      {
        trivia.map(triviaString => {
          return (
            <li>
              <p>{triviaString}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    trivia: state.trivia
  }
}

export default connect(mapStateToProps)(TriviaList)
