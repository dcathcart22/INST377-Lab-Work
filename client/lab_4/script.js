const slideposition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

const next = document.getElementById('next').addEventListener('click', () => {
  moveToNextSlide();
});

const prev = document.getElementById('prev').addEventListener('click', () => {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (const slide of slides) {
    slide.classList.remove('carousel_item-visible');
    slide.classList.add('carousel_item-hidden');
  }

  slides[slidePosition].classList.add('carousel_item-visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition(slides);
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition(slides);
}