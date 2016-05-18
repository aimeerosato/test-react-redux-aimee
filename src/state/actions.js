import fetch from 'isomorphic-fetch';
import dispatch from 'redux-thunk';

export function getNumberTrivia (number) {

  const triviaUrl = `http://numbersapi.com/${number}?json`

  return function(dispatch) {
    fetch(triviaUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(trivia) {
        dispatch ({
          type: 'TRIVIA_INPUT',
          payload: trivia.text
      });
    });
  }

}
