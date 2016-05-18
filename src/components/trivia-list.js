import React, { Component } from 'react'
import { connect } from 'react-redux'


function TriviaList (props) {
  const { trivia } = props; 
  let index = 0;
  
  if (trivia.length === 0) return null
    
  return (
    <ul>
      {
        trivia.map(triviaString => {
          return (
            <li
              key={index++}
            >
              <p>{triviaString}</p>
            </li>
          )
        })
      }
    </ul>
  )  
}


function mapStateToProps (state) {
  return {
    trivia: state.trivia
  };
}

export default connect(mapStateToProps)(TriviaList)
