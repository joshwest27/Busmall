'use strict';

// array to store the image instances
Photo.allPhotos = [];

// constructor for the image objects
function Photo(filepath, name){
  this.filepath = filepath;
  this.name = name;
  var timesClicked = 0;
  var timeShown = 0;
  Photo.allPhotos.push(this);
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
var imgEl = document.getElementById('photos');

// add event listener
imgEl.addEventListener('click', randomPhoto);

// callback function to diaplay random image
function randomPhoto() {
  // random number generator to return a number between 0 and length of the array. (Photo.allPhotos)
  var randomIndex = Math.floor(Math.random() * Photo.allPhotos.length);

  // use the random number to diaplay photos at the random index
  imgEl.src = Photo.allPhotos[randomIndex].filepath;
}

// invoke the callback on page load to show random phtos
randomPhoto();