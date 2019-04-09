'use strict';

// ------------------------------------------------------
// Data
// -------------------------------------------------------

var DATA = [
  ['a', 'https://via.placeholder.com/200x250', '1', false, false],
  ['b', 'https://via.placeholder.com/200x250', '1', false, false],
  ['c', 'https://via.placeholder.com/200x250', '2', false, false],
  ['d', 'https://via.placeholder.com/200x250', '2', false, false],
  ['e', 'https://via.placeholder.com/200x250', '3', false, false],
  ['f', 'https://via.placeholder.com/200x250', '3', false, false],
  ['g', 'https://via.placeholder.com/200x250', '4', false, false],
  ['h', 'https://via.placeholder.com/200x250', '4', false, false],
  ['i', 'https://via.placeholder.com/200x250', '5', false, false],
]

// ------------------------------------------------------
// Global Variables
// -------------------------------------------------------
var missedQuesses = 0;
var matches = 0;
var peeks = 0;

var COMPARE_ARR = [];
var CARDS_ARR = [];

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------

function CARDS(id, imageURL, pairID, inPlay, showing){
  this.id = id;
  this.img = imageURL;
  this.pairID = pairID;
  this.inPlay = inPlay;
  this.showing = showing;
  
  CARDS_ARR.push(id);
}

CARDS.prototype.selectUnselectCard(){
// Select Unselect Card function
}

CARDS.prototype.render(){
// render function
}

CARDS.prototype.toggleSelect(){
// toggle function
}

function CorrectAnswer(){
  // Correct Answer function
}

function WrongAnswer(){
  // Wrong Answer function
}

function Compare(){
  // Compare function
}

function Shuffle(){
  // Shuffle Function
}

//Card click Event Listenter - Click

//Reset game Event listener - Click

//Create Cards function
function CreateCards (){
  for (var i = 0; i < DATA.length; i++){
    new CARDS(DATA[i].id, DATA[i].imageURL, DATA[i].pairID, DATA[i].inPlay, DATA[i].showing);
  }
}

// ------------------------------------------------------
// Run Script
// -------------------------------------------------------

function startGame() {
  CreateCards();
  console.log('start game');
}

// ------------------------------------------------------
// Entry Point Storage
// -------------------------------------------------------
startGame();

// ------------------------------------------------------
// Local Storage
// -------------------------------------------------------

