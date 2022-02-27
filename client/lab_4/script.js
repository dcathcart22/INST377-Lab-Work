/* eslint-disable no-const-assign */
const slideposition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

// eslint-disable-next-line no-unused-vars
const next = document.getElementById('next').addEventListener('click', () => {
  // eslint-disable-next-line no-use-before-define
  moveToNextSlide();
});

const prev = document.getElementById('prev').addEventListener('click', () => {
  // eslint-disable-next-line no-use-before-define
  moveToPrevSlide();
});

function updateSlidePosition() {
  // eslint-disable-next-line no-restricted-syntax
  for (const slide of slides) {
    slide.classList.remove('carousel_item-visible');
    slide.classList.add('carousel_item-hidden');
  }

  slides[slideposition].classList.add('carousel_item-visible');
}

function moveToNextSlide() {
  if (slideposition === totalSlides - 1) {
    // eslint-disable-next-line no-const-assign
    slideposition = 0;
  } else {
    // eslint-disable-next-line no-const-assign
    // eslint-disable-next-line no-plusplus
    slideposition++;
  }
  updateSlidePosition(slides);
}

function moveToPrevSlide() {
  if (slideposition === 0) {
    slideposition = totalSlides - 1;
  } else {
    // eslint-disable-next-line no-plusplus
    slideposition--;
  }
  updateSlidePosition(slides);
}