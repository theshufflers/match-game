'use strict';

// ------------------------------------------------------
// Data
// -------------------------------------------------------

var DATA = [
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
// Global Variables
// -------------------------------------------------------

var missedGuesses = 0;
var matches = 0;
var peeks = 0;

var COMPARE_ARR = [];
var CARDS_OBJ = {};

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------

function CARDS(id, imageURL, pairId, inPlay, showing) {
  this.id = id;
  this.img = imageURL;
  this.pairId = pairId;
  this.inPlay = inPlay;
  this.showing = showing;

  CARDS_OBJ[id] = this;
  this.render();
}

CARDS.prototype.toggleSelect = function(event) {
  event.preventDefault();

  var target = event.target;

  if (COMPARE_ARR < 2) {
    if (COMPARE_ARR[0] && COMPARE_ARR[0][0] === CARDS_OBJ[target.id].pairId[0] && COMPARE_ARR[0][1] === CARDS_OBJ[target.id].pairId[1]) {
      COMPARE_ARR.shift();
      CARDS_OBJ[target.id].inPlay = false;
      CARDS_OBJ[target.id].showing = false;
    } else {
      COMPARE_ARR.push(CARDS_OBJ[target.id].pairId);
      CARDS_OBJ[target.id].inPlay = true;
      CARDS_OBJ[target.id].showing = true;
    }
  } else {
    COMPARE_ARR.push(CARDS_OBJ[target.id].pairId);
    CARDS_OBJ[target.id].inPlay = true;
    CARDS_OBJ[target.id].showing = true;
    Compare();
  }
};

CARDS.prototype.render = function() {
  var cardsSection = document.getElementById('cards-section');

  var div = document.createElement('div');
  cardsSection.appendChild(div);

  var img = document.createElement('img');
  img.setAttribute('src', 'https://via.placeholder.com/200x250');
  img.setAttribute('id', this.id);
  div.appendChild(img);

  img.addEventListener('click', this.toggleSelect);
};

function Compare() {
  // Compare function

  if (COMPARE_ARR[0][0] === COMPARE_ARR[1][0]) {
    console.log('RIGHT!');
  } else {
    console.log('WRONG');
  }

  COMPARE_ARR.shift();
  COMPARE_ARR.shift();
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

