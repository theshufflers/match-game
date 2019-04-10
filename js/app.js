// ------------------------------------------------------
// Local Storage
// -------------------------------------------------------

var STATE_KEY = 'cardObject';
var SHUFFLE_ARRAY = 'shuffleArray';

//Placeholder of Main Program Global Variables - Remove at Merge?
//______________________________________________________
var shuffleArray = [];//new design for Fisher-Yates algorythm results
//___________________________________________________________

//Place all functions within the getStateFromLocalStoreage and setStateToLocalStorage functions for any change of state.
(function getStateFromLocalStoreage(){
  if(localStorage[STATE_KEY]){
    var rawState = localStorage.getItem(STATE_KEY);
    CARDS_OBJ = JSON.parse(rawState);
    getPeeks();
    getMisses();
    getGuesses();
    // getCompareArray();
    // getShuffleArray();
    // getCards();
    // // getOptions();
    // renderDOM();
  }else{
    resetState();
  }
})(); //groups and calls function.

function setStateToLocalStorage(){
  setPeeks();
  setMisses();
  setGuesses();
  // setCompareArray();
  // setShuffleArray();
  // setCards();
  // // setOptions();
  // setDOM();
}

function resetState(){
  //include calls to all functions needed to reset the state to where the user refreshed or closed browser window.
}

// function setDOM () {
//   //save the state of the DOM to local storage
// }

// function renderDOM () {
//   //render the DOM
// }

// function setCompareArray (){
//   localStorage.setItem(COMPARE_ARR, JSON.stringify(COMPARE_ARR));
//   // store the compare array
// }

// function getCompareArray (){
//   //get last compare array data and populate array
//   if(localStorage[COMPARE_ARR]){
//     var rawState = localStorage.getItem(COMPARE_ARR);
//     COMPARE_ARR = JSON.parse(rawState);
//   }
// }

// function setShuffleArray(){
//   localStorage.setItem(SHUFFLE_ARRAY, JSON.stringify(shuffleArray));
//   // store the shuffle array
// }

// function getShuffleArray (){
//   //get last shuffle array data and populate array
//   if(localStorage[SHUFFLE_ARRAY]){
//     var rawState = localStorage.getItem(shuffleArray);
//     shuffleArray = JSON.parse(rawState);
//   }
// }

function getGamesArr{
  var gamesArr = JSON.parse(localStorage.getItem('Games'));
 for( var i = 0; i < gamesArr.length; i++){
  peeks = GamesArr[i][0];
  missedGuesses = GamesArr[i][1];
  misses = GamesArr [i][2];
}
}

function getPeeks(){
  //get the peeks
}
function setPeeks(){
  //set the Peeks
}

function getMisses(){
  //get  missedGuesses
}
function setMisses(){
  //set  missedGuesses
}

function getMatches(){
  //get matches
}
function setMatches(){
  //set matches
}

// function getCards(){
//   //get the cards
// }
// function setCards(){
//   //set the cards
// }

// function getOptions(){
//   //get the options
// }
// function setOptions(){
//   //set the options
// }

