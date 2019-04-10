'use strict';

console.log('Hello World');

// ------------------------------------------------------
// Global Variables
// -------------------------------------------------------






// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------






// ------------------------------------------------------
// Run Script
// -------------------------------------------------------



// ------------------------------------------------------
// Local Storage
// -------------------------------------------------------

var STATE_KEY = 'cardObject';
var CARD_KEY = 'cards';
var PEEKS = 'peeks';
var MISSES = 'misses';
var QUESSES = 'quesses';
var COMPARE_ARRAY = 'compareArray';
var SHUFFLE_ARRAY = 'shuffleArray';

//Placeholder of Main Program Global Variables - Remove at Merge?
//________________________________________________________
var CARDS = {};
var compareArray = [];
var shuffleArray = [];//new design for Fisher-Yates algorythm results
//___________________________________________________________

//Place all functions within the getStateFromLocalStoreage and setStateToLocalStorage functions for any change of state.
(function getStateFromLocalStoreage(){
  if(localStorage[STATE_KEY]){
    var rawState = localStorage.getItem(STATE_KEY);
    CARDS = JSON.parse(rawState);
    getPeeks();
    getMisses();
    getGuesses();
    getCompareArray();
    getShuffleArray();
    getCards();
    // getOptions();
    renderDOM();
  }else{
    resetState();
  }
})(); //groups and calls function.

function setStateToLocalStorage(){
  setPeeks();
  setMisses();
  setGuesses();
  setCompareArray();
  setShuffleArray();
  setCards();
  // setOptions();
  setDOM();
}

function resetState(){
  //include calls to all functions needed to reset the state to where the user refreshed or closed browser window.
}

function setDOM () {
  //save the state of the DOM to local storage
}

function renderDOM () {
  //render the DOM
}

function setCompareArray (){
  localStorage.setItem(COMPARE_ARRAY, JSON.stringify(compareArray));
  // store the compare array
}

function getCompareArray (){
  //get last compare array data and populate array
  if(localStorage[COMPARE_ARRAY]){
    var rawState = localStorage.getItem(COMPARE_ARRAY);
    compareArray = JSON.parse(rawState);
  }
}

function setShuffleArray(){
  localStorage.setItem(SHUFFLE_ARRAY, JSON.stringify(shuffleArray));
  // store the shuffle array
}

function getShuffleArray (){
  //get last shuffle array data and populate array
  if(localStorage[SHUFFLE_ARRAY]){
    var rawState = localStorage.getItem(shuffleArray);
    compareArray = JSON.parse(rawState);
  }
}

function getPeeks(){
  //get the peeks
}
function setPeeks(){
  //set the Peeks
}

function getMisses(){
  //get the misses
}
function setMisses(){
  //set the misses
}

function getGuesses(){
  //get the guesses
}
function setGuesses(){
  //set the guesses
}

function getCards(){
  //get the cards
}
function setCards(){
  //set the cards
}

// function getOptions(){
//   //get the options
// }
// function setOptions(){
//   //set the options
// }

