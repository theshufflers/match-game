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
];

// ------------------------------------------------------
// Global Variables
// -------------------------------------------------------

var missedGuesses = 0;
var matches = 0;
var peeks = 0;

var COMPARE_ARR = [];
var CARDS_ARR = [];

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------


function CARDS(id, imageURL, pairID, inPlay, showing) {
  this.id = id;
  this.img = imageURL;
  this.pairID = pairID;
  this.inPlay = inPlay;
  this.showing = showing;
  
  CARDS_ARR.push(id);
}

CARDS.prototype.toggleSelect = function() {
  // toggle function
};

CARDS.prototype.render = function() {
  let cardsSection = document.getElementById('cards-section');

  let div = document.createElement('div');
  div.setAttribute('id', this.id);
  cardsSection.appendChild(div);

  let img = document.createElement('img');
  img.setAttribute('src', 'https://via.placeholder.com/200x250');
  div.appendChild(img);
};

function Compare() {
  // Compare function
}

function CorrectAnswer() {
  // Correct Answer function
}

function WrongAnswer() {
  // Wrong Answer function
}

function Shuffle() {
  // Shuffle Function
}

//Card click Event Listenter - Click
//Reset game Event listener - Click

//Create Cards function
function createCards () {
  for (var i = 0; i < DATA.length; i++){
    new CARDS(DATA[i][0], DATA[i][1], DATA[i][2], DATA[i][3], DATA[i][4]);
  }
}

// ------------------------------------------------------
// Run Script
// -------------------------------------------------------

function startGame() {
  CreateCards();
  console.log('start game');

  createCards();
}

// ------------------------------------------------------
// Entry Point Storage
// -------------------------------------------------------
startGame();

// ------------------------------------------------------
// Local Storage
// -------------------------------------------------------

// -------------------------------------------------------

