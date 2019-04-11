
'use strict';

// ------------------------------------------------------
// Global Variables
// -------------------------------------------------------
var peeks = 0;
var guesses = 0;
var missedGuesses = 0;

var myArr  = [
  ['a', 'https://via.placeholder.com/200x250', ['1', '1'], false, false],
  ['b', 'https://via.placeholder.com/200x250', ['1', '2'], false, false],
  ['c', 'https://via.placeholder.com/200x250', ['2', '1'], false, false],
  ['d', 'https://via.placeholder.com/200x250', ['2', '2'], false, false],
  ['e', 'https://via.placeholder.com/200x250', ['3', '1'], false, false],
  ['f', 'https://via.placeholder.com/200x250', ['3', '2'], false, false],
  ['g', 'https://via.placeholder.com/200x250', ['4', '1'], false, false],
  ['h', 'https://via.placeholder.com/200x250', ['4', '2'], false, false],
  ['i', 'https://via.placeholder.com/200x250', ['5', '1'], false, false],
];

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------

function fyShuffle(){
  for ( var i = 0; i < myArr.length; i++){
    var j = myArr.length - i - 1;
    var random =  Math.floor(Math.random() * (j + 1));
    var cardToShuffle = myArr[j];
    var cardReplaced = myArr.slice(random, random + 1);
    var cardReplacedValue = cardReplaced[0];
    myArr.splice(random,1, cardToShuffle);
    myArr.splice( j, 1, cardReplacedValue);
  }
  console.log(myArr);
}

fyShuffle();



// ------------------------------------------------------
// Run Script
// -------------------------------------------------------


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
// (function getStateFromLocalStoreage(){
//   if(localStorage[STATE_KEY]){
//     var rawState = localStorage.getItem(STATE_KEY);
//     CARDS_OBJ = JSON.parse(rawState);
//     getPeeks();
//     getMisses();
//     getGuesses();
//     // getCompareArray();
//     // getShuffleArray();
//     // getCards();
//     // // getOptions();
//     // renderDOM();
//   }else{
//     resetState();
//   }
// })(); //groups and calls function.

// function setStateToLocalStorage(){
//   setPeeks();
//   setMisses();
//   setGuesses();
//   // setCompareArray();
//   // setShuffleArray();
//   // setCards();
//   // // setOptions();
//   // setDOM();
// }

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

function getGamesArr() {
  var gamesArr = JSON.parse(localStorage.getItem('Games'));
  
  let results = document.getElementById('results');

  for( var i = 0; i < gamesArr.length; i++){
    let div = document.createElement('div');
    results.appendChild(div);

    let h2 = document.createElement('h2');
    h2.textContent = `Game: ${i + 1}`;
    div.appendChild(h2);

    let peeks = document.createElement('h3');
    peeks.textContent = `Peeks: ${gamesArr[i][0]}`;
    div.appendChild(peeks);

    let missedGuesses = document.createElement('h3');
    missedGuesses.textContent = `Missed Guesses: ${gamesArr[i][1]}`;
    div.appendChild(missedGuesses);

    let guesses = document.createElement('h3');
    guesses.textContent = `guesses: ${gamesArr[i][2]}`;
    div.appendChild(guesses);
  }
}

getGamesArr();

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

