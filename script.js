const button = document.getElementById('showCarousel');
const carouselContainer = document.getElementById('carouselContainer');
let currentSlide = 0;

button.addEventListener('click', function() {
  carouselContainer.style.display = 'block';
  startCarousel();
});

function startCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    const offset = currentSlide * -100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}%)`;
    });
  }, 2000); // Slide every 2 seconds
}
