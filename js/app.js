'use strict';

// array to store the image instances
Photo.allPhotos = [];

// global variable
var totalClicks = 0;
var pick1 = 0;
var pick2 = 0;
var pick3 = 0;

// constructor for the image objects
function Photo(filepath, name){
  this.filepath = filepath;
  this.name = name;
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
var imgEl = document.getElementById('photos1');
var img2El = document.getElementById('photos2');
var img3El = document.getElementById('photos3');

// add event listener
imgEl.addEventListener('click', allRandomPhotos);
img2El.addEventListener('click', allRandomPhotos);
img3El.addEventListener('click', allRandomPhotos);


function allRandomPhotos (){
// callback function to diaplay random image
  function randomPhoto() {
  // random number generator to return a number between 0 and length of the array. (Photo.allPhotos)
    var randomIndex = Math.floor(Math.random() * Photo.allPhotos.length);

    // use the random number to diaplay photos at the random index
    imgEl.src = Photo.allPhotos[randomIndex].filepath;
  }

  function randomPhoto2() {
  // random number generator to return a number between 0 and length of the array. (Photo.allPhotos)
    var randomIndex = Math.floor(Math.random() * Photo.allPhotos.length);

    // use the random number to diaplay photos at the random index
    img2El.src = Photo.allPhotos[randomIndex].filepath;
  }

  function randomPhoto3() {
  // random number generator to return a number between 0 and length of the array. (Photo.allPhotos)
    var randomIndex = Math.floor(Math.random() * Photo.allPhotos.length);

    // use the random number to diaplay photos at the random index
    img3El.src = Photo.allPhotos[randomIndex].filepath;
  }
  randomPhoto();
  randomPhoto2();
  randomPhoto3();
  console.log(totalClicks);
  if(totalClicks === 25){
    alert('You have voted 25 times! Thanks for your input. ');
  }
}

// invoke the callback on page load to show random photos
// randomPhoto();
// randomPhoto2();
// randomPhoto3();
allRandomPhotos();

