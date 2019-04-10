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
  let element;

  if (COMPARE_ARR.length < 2) {
    if (target.className === 'flip-card-inner') {
      element = target;
    } else {
      element = target.parentElement;
    }
    element.classList.toggle('is-flipped');
  }

  if (COMPARE_ARR.length < 2) {
    if (COMPARE_ARR.length < 1) {
      COMPARE_ARR.push(CARDS_OBJ[element.id].pairId);
    } else if (COMPARE_ARR[0][0] === CARDS_OBJ[element.id].pairId[0] && COMPARE_ARR[0][1] === CARDS_OBJ[element.id].pairId[1]) {
      COMPARE_ARR.shift();
    } else {
      COMPARE_ARR.push(CARDS_OBJ[element.id].pairId);
      setTimeout(function() {
        compare();
      }, 500);
    }
  }
  // RE-FLIP HERE???
};

CARDS.prototype.render = function() {
  var cardsSection = document.getElementById('cards-section');

  var div = document.createElement('div');
  div.setAttribute('class', 'flip-card');
  cardsSection.appendChild(div);

  var divInner = document.createElement('div');
  divInner.setAttribute('id', this.id);
  divInner.setAttribute('class', 'flip-card-inner');
  div.appendChild(divInner);

  var divFront = document.createElement('div');
  divFront.setAttribute('class', 'flip-card-front');
  divInner.appendChild(divFront);

  var img = document.createElement('img');
  img.setAttribute('src', 'https://via.placeholder.com/200x250');
  img.setAttribute('class', 'flip-card-back');
  divInner.appendChild(img);

  divInner.addEventListener('click', this.toggleSelect);
};

function compare() {
  let firstEl = document.getElementsByClassName('is-flipped')[0];
  let secondEl = document.getElementsByClassName('is-flipped')[1];

  if (COMPARE_ARR[0][0] === COMPARE_ARR[1][0]) {
    COMPARE_ARR.shift();
    COMPARE_ARR.shift();

    // add dark screen
    firstEl.removeEventListener('click', CARDS_OBJ[firstEl.id].toggleSelect);
    secondEl.removeEventListener('click', CARDS_OBJ[firstEl.id].toggleSelect);

    let darkDivOne = document.createElement('div');
    darkDivOne.setAttribute('class', 'dark-div');
    firstEl.appendChild(darkDivOne);

    firstEl.classList.replace('is-flipped', 'flipped-perm');
    secondEl.classList.replace('is-flipped', 'flipped-perm');

    let darkDivTwo = document.createElement('div');
    darkDivTwo.setAttribute('class', 'dark-div');
    secondEl.appendChild(darkDivTwo);

    // add green border
  } else {
    firstEl.classList.toggle('is-flipped');
    secondEl.classList.toggle('is-flipped');

    COMPARE_ARR.shift();
    COMPARE_ARR.shift();

    //shake animation
  }
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
  //Does previous game exist?

  //if not
  //shuffle
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

