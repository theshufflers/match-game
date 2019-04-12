'use strict';

// ------------------------------------------------------
//  Global Variables
// -------------------------------------------------------

var COLORS_ARR = ['rgba(0,128,128, 0.6)', 'rgba(255,0,0, 0.6)', 'rgba(255,255,0, 0.6)', 'rgba(255,0,255, 0.6)', 'rgba(0,116,52, 0.6)', 'rgba(128,0,128, 0.6)'];
var TOTAL_COLORS = [];

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------

function getGamesArr() {
  var gamesArr = JSON.parse(localStorage.getItem('Games'));

  if (gamesArr) {
    let resultsList = document.getElementById('resultsList');

    let listContainer = document.createElement('div');
    listContainer.setAttribute('class', 'gameResult');
    listContainer.setAttribute('id', 'results');
    resultsList.appendChild(listContainer);

    for( var i = 0; i < gamesArr.length; i++){
      let div = document.createElement('div');
      listContainer.appendChild(div);

      let h2 = document.createElement('h2');
      h2.textContent = `Game: ${i + 1}`;
      div.appendChild(h2);

      let list = document.createElement('ol');
      div.appendChild(list);

      let peeks = document.createElement('li');
      peeks.textContent = `Peeks: ${gamesArr[i][0]}`;
      list.appendChild(peeks);

      let missedGuesses = document.createElement('li');
      missedGuesses.textContent = `Missed Guesses: ${gamesArr[i][1]}`;
      list.appendChild(missedGuesses);

      let overallGuesses = document.createElement('li');
      overallGuesses.textContent = `Overall Guesses: ${gamesArr[i][2]}`;
      list.appendChild(overallGuesses);
    }

    renderBarChart(gamesArr);
    //renderDoughnutChart(gamesArr);
  }
}

// ------------------------------------------------------
//  Renders bar chart
// -------------------------------------------------------

function renderBarChart(gamesArr) {
  const barData = {
    type: 'bar',
    data: {
      labels : [],
      datasets : [
        {
          data : [],
          backgroundColor : TOTAL_COLORS,
        }
      ]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          maxBarThickness: 30,
        }],
        yAxes: [{
          gridLines: {
            offsetGridLines: false,
          },
          ticks: {stepSize: 50},
          maintainAspectRatio: false,
        }]
      },
      title: {
        display: true,
        text: 'Final Points!'
      }
    }
  };

  let container = document.getElementById('graph');

  let canvas = document.createElement('Canvas');
  canvas.setAttribute('width', '1000px');
  canvas.setAttribute('height', '800');
  let ctx = canvas.getContext('2d');

  container.appendChild(canvas);

  for (let i = 0; i < gamesArr.length; i++) {
    barData.data.labels.push(`Game: ${i + 1}`);

    let peaks = gamesArr[i][0];
    let missedGuesses = gamesArr[i][1];
    let points = 1000 - (peaks * 10);

    points = points - (missedGuesses * 20);

    barData.data.datasets[0].data.push(points);
  }

  let n = 0;

  while (TOTAL_COLORS.length < gamesArr.length) {
    if (n === COLORS_ARR.length) {
      n = 0;
    }

    TOTAL_COLORS.push(COLORS_ARR[n]);

    n++;
  }

  Chart.defaults.global.defaultFontColor = 'whitesmoke';
  Chart.defaults.global.defaultFontSize = '26';
  new Chart(ctx, barData);
}

getGamesArr();
