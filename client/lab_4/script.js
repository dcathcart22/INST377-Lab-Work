/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

console.log(totalSlides);

document
  .getElementById('button--next')
  // eslint-disable-next-line func-names
  // eslint-disable-next-line prefer-arrow-callback
  .addEventListener('click', function() {
    console.log('next');
    moveToNextSlide();
    document.getElementById('button--previous').style.background = 'lightgrey';
    document.getElementById('button--next').style.background = 'orange';
    document.getElementById('button--next').style.borderColor = 'green';
    document.getElementById('button--previous').style.borderColor = 'white';
  });

document
  .getElementById('button--previous')
  .addEventListener('click', () => {
    console.log('previous');
    moveToPrevSlide();
    document.getElementById('button--next').style.background = 'lightgrey';
    document.getElementById('button--previous').style.background = 'orange';
    document.getElementById('button--previous').style.borderColor = 'green';
    document.getElementById('button--next').style.borderColor = 'white';
  });

function updateSlidePosition() {
  for (const slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }

  slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}