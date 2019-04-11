'use strict';

// ------------------------------------------------------
// Data
// -------------------------------------------------------

var DATA = [
  ['a', '../img/code 1_1.png', ['1', '1']],
  ['b', '../img/code 1_2.png', ['1', '2']],
  ['c', '../img/code 2_1.png', ['2', '1']],
  ['d', '../img/code 2_2.png', ['2', '2']],
  ['e', '../img/code 3_1.png', ['3', '1']],
  ['f', '../img/code 3_2.png', ['3', '2']],
  ['g', '../img/code 4_1.png', ['4', '1']],
  ['h', '../img/code 4_2.png', ['4', '2']],
  ['i', '../img/code 5_1.png', ['5', '1']],
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

  divInner.addEventListener('click', this.toggleSelect);
};

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

    // add green border
  } else {
    missedGuesses++;
    firstEl.classList.toggle('is-flipped');
    secondEl.classList.toggle('is-flipped');

    COMPARE_ARR.shift();
    COMPARE_ARR.shift();

    //shake animation
  }

  if (counter === 4) {
    winGame();
  }
}

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
  console.log(DATA);
}


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
  backButton.textContent = 'Back';
  aOne.appendChild(backButton);

  let restartButton = document.createElement('button');
  restartButton.textContent = 'Restart';
  div.appendChild(restartButton);

  restartButton.addEventListener('click', restart);
}

//Reset game Event listener - Click

function restart() {
  console.log('restart');
}

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
  if(!localStorage.getItem('Games')){
    localStorage.setItem('Games', JSON.stringify([]));
  }else {
    shuffle();
    createCards();
  }
}

// ------------------------------------------------------
// Entry Point Storage
// -------------------------------------------------------
startGame();

// ------------------------------------------------------
// Local Storage
// -------------------------------------------------------

// -------------------------------------------------------

