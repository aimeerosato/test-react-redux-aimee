import fetch from 'isomorphic-fetch';
import dispatch from 'redux-thunk';

//
// create an action creator to:
//
// * fetch a piece of trivia
// * dispatch data to the redux store
//

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

  
  //
  // I need some code!!!
  //
  // Hints:
  //  * http://redux.js.org/
  //  * async? ¯\_(ツ)_/¯
  //
}
