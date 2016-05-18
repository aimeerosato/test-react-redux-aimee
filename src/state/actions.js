import fetch from 'isomorphic-fetch';
import dispatch from 'redux-thunk';

export function getNumberTrivia (number) {

  const triviaUrl = `http://numbersapi.com/${number}?json`

  //Used Thunk middleware to dispatch action after async call returns with trivia from Numbers API
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
