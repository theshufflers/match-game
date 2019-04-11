'use strict';

// ------------------------------------------------------
//  Defined Functions
// -------------------------------------------------------

function getGamesArr() {
  var gamesArr = JSON.parse(localStorage.getItem('Games'));

  console.log(gamesArr);

  if (gamesArr) {
    let results = document.getElementById('results');
    results.setAttribute('class', 'gameResult');

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

      let overallGuesses = document.createElement('h3');
      overallGuesses.textContent = `overallGuesses: ${gamesArr[i][2]}`;
      div.appendChild(overallGuesses);
    }

    renderChart(gamesArr);
  }
}

function renderChart(gamesArr) {
  const barData = {
    type: 'bar',
    data: {
      labels : [],
      datasets : [
        {
          data : [],
          backgroundColor : ['rgba(0,128,128, 0.6)', 'rgba(255,0,0, 0.6)', 'rgba(255,255,0, 0.6)', 'rgba(255,0,255, 0.6)', 'rgba(0,116,52, 0.6)', 'rgba(128,0,128, 0.6)'],
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
  canvas.setAttribute('height', '500');
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
  Chart.defaults.global.defaultFontColor = '#F2A104';
  Chart.defaults.global.defaultFontSize = '16';
  new Chart(ctx, barData);
}

getGamesArr();
