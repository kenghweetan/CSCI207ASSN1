const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

// Position elements next to each other
let slideWidth = slides[0].getBoundingClientRect().width;
window.addEventListener("load", () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });
});

window.addEventListener("resize", () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });
  const currentSlide = track.querySelector(".current-slide");
  track.style.transform = `translatex(-${currentSlide.style.left})`;
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translatex(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, prevDot) => {
  currentDot.classList.remove("current-slide");
  prevDot.classList.add("current-slide");
};

dots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    const targetDot = event.target;
    const targetIndex = dots.indexOf(targetDot);
    const currentDot = dotsNav.querySelector(".current-slide");
    const currentSlide = track.querySelector(".current-slide");

    moveToSlide(track, currentSlide, slides[targetIndex]);
    updateDots(currentDot, targetDot);
  });
});

const moveToNextSlide = () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".carousel_indicator.current-slide");
  const nextDot = currentDot.nextElementSibling;
  if (!nextSlide) {
    moveToSlide(track, currentSlide, slides[0]);
    updateDots(currentDot, dots[0]);
    return;
  }

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
};

const moveToPrevSlide = () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".carousel_indicator.current-slide");
  const prevDot = currentDot.previousElementSibling;
  if (!prevSlide) {
    moveToSlide(track, currentSlide, slides[slides.length - 1]);
    updateDots(currentDot, dots[slides.length - 1]);
    return;
  }

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
};

nextButton.addEventListener("click", moveToNextSlide);

prevButton.addEventListener("click", moveToPrevSlide);

let carousel = document.querySelector(".carousel");
console.log(carousel);
let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  if (touchendX < touchstartX) moveToNextSlide();
  if (touchendX > touchstartX) moveToPrevSlide();
}

carousel.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
