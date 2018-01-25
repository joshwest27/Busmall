'use strict';

// array to store the image instances
Photo.allPhotos = [];

// track total clicks
Photo.totalClicks = 0;

// track last displayed
Photo.lastDisplayed = [];

// access section element from the DOM
var sectionEl = document.getElementById('all-pics');

// access the ul element
var ulEl = document.getElementById('results');

// array to store names for chart labels
var photoNames = [];

// array to store pic votes
var picVotes = [];

// constructor for the image objects
function Photo(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.clicks = 0;
  this.timesOnScreen = 0;
  Photo.allPhotos.push(this);
  photoNames.push(this.name);
}

// Create instances of images
new Photo('img/bag.jpg', 'Bag');
new Photo('img/banana.jpg', 'Banana');
new Photo('img/bathroom.jpg', 'Bathroom');
new Photo('img/boots.jpg', 'Boots');
new Photo('img/breakfast.jpg', 'Breakfast');
new Photo('img/bubblegum.jpg', 'Bubblegum');
new Photo('img/chair.jpg', 'Chair');
new Photo('img/cthulhu.jpg', 'Cthulhu');
new Photo('img/dog-duck.jpg', 'DogDuck');
new Photo('img/dragon.jpg', 'Dragon');
new Photo('img/pen.jpg', 'Pen');
new Photo('img/pet-sweep.jpg', 'Sweep');
new Photo('img/scissors.jpg', 'Scissors');
new Photo('img/shark.jpg', 'Shark');
new Photo('img/sweep.png', 'Sweep');
new Photo('img/tauntaun.jpg', 'Tauntaun');
new Photo('img/unicorn.jpg', 'Unicorn');
new Photo('img/usb.gif', 'USB');
new Photo('img/water-can.jpg', 'Water');
new Photo('img/wine-glass.jpg', 'Wine Glass');

// access the image from the DOM
var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');

// add event listener
// imgEl.addEventListener('click', randomPhoto);
// img2El.addEventListener('click', randomPhoto);
// img3El.addEventListener('click', randomPhoto);


// callback function to diaplay random image
function randomPhoto() {
  // random number generator to return a number between 0 and length of the array. (Photo.allPhotos)
  var randomLeft = Math.floor(Math.random() * Photo.allPhotos.length);
  var randomCenter = Math.floor(Math.random() * Photo.allPhotos.length);
  var randomRight = Math.floor(Math.random() * Photo.allPhotos.length);

  // make sure random number is unique and not previously displayed
  // condition 1: random photos are the same
  // condition 2: left is in lastDisplayed array
  // condition 3: right is in the lastDisplayed array
  // condition 4: center is in the lastDisplayed array

  //  Photo.lastDisplayed.includes(randomLeft) || Photo.lastDisplayed.includes(randomCenter) || 
  // Photo.lastDisplayed.includes(randomRight)

  while(randomLeft === randomCenter || randomCenter === randomRight || randomRight === randomLeft || Photo.lastDisplayed.includes(randomLeft) || Photo.lastDisplayed.includes(randomCenter) || Photo.lastDisplayed.includes(randomRight)){
    randomLeft = Math.floor(Math.random() * Photo.allPhotos.length);
    randomCenter = Math.floor(Math.random() * Photo.allPhotos.length);
    randomRight = Math.floor(Math.random() * Photo.allPhotos.length);
  }
  // use the random number to diaplay photos at the random index
  // imgEl.src = Photo.allPhotos[randomLeft].filepath;
  // img2El.src = Photo.allPhotos[randomCenter].filepath;
  // img3El.src = Photo.allPhotos[randomRight].filepath;

  leftEl.src = Photo.allPhotos[randomLeft].filepath;
  leftEl.alt = Photo.allPhotos[randomLeft].name;

  centerEl.src = Photo.allPhotos[randomCenter].filepath;
  centerEl.alt = Photo.allPhotos[randomCenter].name;

  rightEl.src = Photo.allPhotos[randomRight].filepath;
  rightEl.alt = Photo.allPhotos[randomRight].name;

  // increment the number when each photo
  Photo.allPhotos[randomLeft].timesOnScreen += 1;
  Photo.allPhotos[randomCenter].timesOnScreen += 1;
  Photo.allPhotos[randomRight].timesOnScreen += 1;

  // // approach 1
  // Photo.lastDisplayed.push(randomLeft);
  // Photo.lastDisplayed.push(randomCenter);
  // Photo.lastDisplayed.push(randomRight);

  // approach 2
  Photo.lastDisplayed[0] = randomLeft;
  Photo.lastDisplayed[1] = randomCenter;
  Photo.lastDisplayed[2] = randomRight;
}
// define handleCLick function
function handleClick(e){
  // track number of total clicks
  Photo.totalClicks += 1;
  console.log(Photo.totalClicks);
  // count clicks on specific photo
  for(var i in Photo.allPhotos) {
    if(e.target.alt === Photo.allPhotos[i].name) {
      Photo.allPhotos[i].clicks += 1;
    }
  }
  if(Photo.totalClicks === 25) {
    alert("Thank you for voting. Here are your results.");
    sectionEl.removeEventListener('click', handleClick);
    showResults();
    updateVotes();
    renderChart();
  } else {
    randomPhoto();
  }
}

// show results
function showResults() {
  for(var i in Photo.allPhotos){
    var liEl = document.createElement('li');
    liEl.textContent = Photo.allPhotos[i].name + ' has ' + Photo.allPhotos[i].clicks +
    ' votes and was displayed ' + Photo.allPhotos[i].timesOnScreen + ' times.';
    ulEl.appendChild(liEl);
  }
}

// function to update votes for photos
function updateVotes() {
  for(var i in Photo.allPhotos) {
    picVotes[i] = Photo.allPhotos[i].clicks;
  }
  // adding to local storages
  var addingVotes = [];

  if(localStorage.totesVotes){
    for(var j in picVotes){

      addingVotes[j] = picVotes[j] + JSON.parse(localStorage.totesVotes)[j];
    } 
  } else {
    addingVotes = picVotes;   
  }
  localStorage.totesVotes = JSON.stringify(addingVotes);
}

// render chart
function renderChart() {
  var ctx = document.getElementById('chart-pics').getContext('2d');
  var chartColors = ['#EDF7F0', '#253E59', '#6D9ABC', '#C4DDED', '#AF6E4D',
    '#EDF7F0', '#253E59', '#6D9ABC', '#C4DDED', '#AF6E4D','#EDF7F0', '#253E59', '#6D9ABC', '#C4DDED', '#AF6E4D','#EDF7F0', '#253E59', '#6D9ABC', '#C4DDED', '#AF6E4D','#EDF7F0', '#253E59', '#6D9ABC', '#C4DDED', '#AF6E4D'];

  var photoChart = new Chart(ctx, {  //eslint-disable-line
    type: 'bar',
    data: {
      labels: photoNames,
      datasets: [{
        label: '# of votes',
        data: JSON.parse(localStorage.totesVotes),
        backgroundColor: chartColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
sectionEl.addEventListener('click', handleClick);

// display 3 images on page
randomPhoto();