import React from 'react'
import { connect } from 'react-redux'

import { getNumberTrivia } from '../state/actions'

class GetNumberTriviaBtn extends React.Component {
  constructor (props) {
    super(props)
  }

  _generateRandomInt () {
    const min = 0
    const max = 9999

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _requestRandomNumberTrivia () {
    const { dispatch } = this.props
    //Goes into the action to make the async call
    dispatch(getNumberTrivia(this._generateRandomInt()))
  }

  render () {
    return (
      <button onClick={() => {this._requestRandomNumberTrivia()}}>
        Get Trivia
      </button>
    )
  }
}

export default connect()(GetNumberTriviaBtn)
