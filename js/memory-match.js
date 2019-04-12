'use strict';

// ------------------------------------------------------
// Data
// -------------------------------------------------------

var DATA = [
  ['a', '../img/code-1-1.png', ['1', '1']],
  ['b', '../img/code-1-2.png', ['1', '2']],
  ['c', '../img/code-2-1.png', ['2', '1']],
  ['d', '../img/code-2-2.png', ['2', '2']],
  ['e', '../img/code-3-1.png', ['3', '1']],
  ['f', '../img/code-3-2.png', ['3', '2']],
  ['g', '../img/code-4-1.png', ['4', '1']],
  ['h', '../img/code-4-2.png', ['4', '2']],
  ['i', '../img/code-5-1.png', ['5', '1']],
];

// ------------------------------------------------------
// Global Variables
// -------------------------------------------------------

var missedGuesses = 0;
var peeks = 0;
var guesses = 0;
var counter = 0;

var COMPARE_ARR = [];
var CARDS_OBJ = {};

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------

function CARDS(id, imageURL, pairId) {
  this.id = id;
  this.img = imageURL;
  this.pairId = pairId;

  CARDS_OBJ[id] = this;
  this.render();
}

// ------------------------------------------------------
//  Handles clicking on cards
// -------------------------------------------------------

CARDS.prototype.toggleSelect = function(event) {
  event.preventDefault();
  var target = event.target;
  let element;

  if (COMPARE_ARR.length < 2) {
    if (target.className === 'flip-card-inner' || target.className === 'flip-card-inner is-flipped') {
      element = target;
    } else if (target.className === 'flip-card-front' || target.className === 'flip-card-back') {
      element = target.parentElement;
    }
  }

  if (COMPARE_ARR.length < 2 && element !== undefined) {
    element.classList.toggle('is-flipped');
    if (COMPARE_ARR.length < 1) {
      COMPARE_ARR.push(CARDS_OBJ[element.id].pairId);
    } else if (COMPARE_ARR[0][0] === CARDS_OBJ[element.id].pairId[0] && COMPARE_ARR[0][1] === CARDS_OBJ[element.id].pairId[1]) {
      peeks++;
      COMPARE_ARR.shift();
    } else {
      COMPARE_ARR.push(CARDS_OBJ[element.id].pairId);
      setTimeout(function() {
        compare();
      }, 500);
    }
  }
};

// ------------------------------------------------------
//  Renders cards
// -------------------------------------------------------

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

  img.setAttribute('src', this.img);
  img.setAttribute('class', 'flip-card-back');
  divInner.appendChild(img);

  if (localStorage.getItem('background')) {
    var background = localStorage.getItem('background');
    var cardsArr = document.getElementsByClassName('flip-card-front');

    for (let i = 0; i < cardsArr.length; i++) {
      cardsArr[i].style.backgroundImage = background;
    }
  }

  divInner.addEventListener('click', this.toggleSelect);
};

// ------------------------------------------------------
//  Compares two selected cards
// -------------------------------------------------------

function compare() {
  let firstEl = document.getElementsByClassName('is-flipped')[0];
  let secondEl = document.getElementsByClassName('is-flipped')[1];
  guesses++;
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

    counter++;

  } else {
    missedGuesses++;
    firstEl.classList.toggle('is-flipped');
    secondEl.classList.toggle('is-flipped');

    COMPARE_ARR.shift();
    COMPARE_ARR.shift();
  }

  if (counter === 4) {
    winGame();
  }
}

// ------------------------------------------------------
//  Shuffle cards
// -------------------------------------------------------

function shuffle() {
  for ( var i = 0; i < DATA.length; i++){
    var j = DATA.length - i - 1;
    var random =  Math.floor(Math.random() * (j + 1));
    var cardToShuffle = DATA[j];
    var cardReplaced = DATA.slice(random, random + 1);
    var cardReplacedValue = cardReplaced[0];
    DATA.splice(random,1, cardToShuffle);
    DATA.splice( j, 1, cardReplacedValue);
  }
}


// ------------------------------------------------------
//  Handles finishing the game
// -------------------------------------------------------


function winGame() {
  //Save stuff to local storage
  var gamesArr = JSON.parse(localStorage.getItem('Games'));
  var data = [peeks, missedGuesses, guesses];
  gamesArr.push(data);

  localStorage.setItem('Games',JSON.stringify(gamesArr));

  //create popup
  let container = document.getElementById('container');

  let div = document.createElement('div');
  div.setAttribute('id', 'win-game-popup');
  container.appendChild(div);

  let h2 = document.createElement('h2');
  h2.textContent ='CONGRATULATIONS!!! You Finished the game! Hit restart game to play a new round, or go back to see your results.';
  div.appendChild(h2);

  let aOne = document.createElement('a');
  aOne.setAttribute('href', '../index.html');
  div.appendChild(aOne);

  let backButton = document.createElement('button');
  backButton.setAttribute('class', 'gameButtons');
  backButton.textContent = 'See Results';
  aOne.appendChild(backButton);

  let restartButton = document.createElement('button');
  restartButton.setAttribute('class', 'gameButtons');
  restartButton.textContent = 'Restart';
  div.appendChild(restartButton);

  restartButton.addEventListener('click', reset);
}

// ------------------------------------------------------
//  Reset game event listener
// -------------------------------------------------------

function reset(){
  // set global variables
  missedGuesses = 0;
  peeks = 0;
  guesses = 0;
  counter = 0;
  COMPARE_ARR = [];
  CARDS_OBJ = {};

  let parent = document.getElementById('cards-section');
  let flipCardArr = document.getElementsByClassName('flip-card');

  while (flipCardArr.length > 0) {
    let child = flipCardArr[0];
    parent.removeChild(child);
  }

  let container = document.getElementById('container');

  if (document.getElementById('win-game-popup')) {
    let popup = document.getElementById('win-game-popup');
    container.removeChild(popup);
  }

  startGame();
}

// ------------------------------------------------------
// Creates card objects
// -------------------------------------------------------

function createCards () {
  for (var i = 0; i < DATA.length; i++){
    new CARDS(DATA[i][0], DATA[i][1], DATA[i][2], DATA[i][3], DATA[i][4]);
  }
}

// ------------------------------------------------------
// Run Script
// -------------------------------------------------------

function startGame() {
  if(!localStorage.getItem('Games')){
    localStorage.setItem('Games', JSON.stringify([]));
  }

  shuffle();
  createCards();

  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', reset);
}

// ------------------------------------------------------
// Changes background
// -------------------------------------------------------

function handleChangeBackground(event) {
  event.preventDefault();

  var target = event.target;
  var url = '';

  var cardsArr = document.getElementsByClassName('flip-card-front');
  for (let i = 0; i < cardsArr.length; i++) {
    if (target.id === 'stars') {
      url = 'url(\'https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif\')';
    } else if (event.target.id === 'waves') {
      url = 'url(\'https://media.giphy.com/media/2SYpZ92iLQsF6QZl5u/giphy.gif\')';
    } else if (event.target.id === 'cubes') {
      url = 'url(\'https://media.giphy.com/media/3oFzlWifRcnogZOs3m/giphy.gif\')';
    } else if (event.target.id === 'matrix') {
      url = 'url(\'https://media.giphy.com/media/9g2MtMzYF30WY/giphy.gif\')';
    } else if (event.target.id === 'circuit') {
      url = 'url(\'https://media.giphy.com/media/BkjdN6MQCDPaw/giphy.gif\')';
    }

    cardsArr[i].style.backgroundImage = url;
  }

  localStorage.setItem('background', url);
}

// ------------------------------------------------------
// Click listeners for background change
// -------------------------------------------------------

document.getElementById('stars').addEventListener('click', handleChangeBackground);
document.getElementById('waves').addEventListener('click', handleChangeBackground);
document.getElementById('cubes').addEventListener('click', handleChangeBackground);
document.getElementById('matrix').addEventListener('click', handleChangeBackground);
document.getElementById('circuit').addEventListener('click', handleChangeBackground);

// ------------------------------------------------------
// Entry Point Storage
// -------------------------------------------------------
startGame();
