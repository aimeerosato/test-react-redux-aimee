import fetch from 'isomorphic-fetch'

//
// create an action creator to:
//
// * fetch a piece of trivia
// * dispatch data to the redux store
//

export function getNumberTrivia (number) {

  const triviaUrl = `http://numbersapi.com/${number}?json`

  fetch(triviaUrl).then(function(response) {
    return response.json();
  })
    .then(function(trivia) {
      console.log("Here is the trivia: ", trivia.text);
    });
  //
  // I need some code!!!
  //
  // Hints:
  //  * http://redux.js.org/
  //  * async? ¯\_(ツ)_/¯
  //
}
