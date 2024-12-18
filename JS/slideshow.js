let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideshow = document.querySelector(".slideshow");
const dotsContainer = document.querySelector(".dots-container");

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.onclick = () => currentSlide(i);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlides() {
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Initial display
showSlides();

// Auto-advance slides every 5 seconds
setInterval(() => changeSlide(1), 5000);
