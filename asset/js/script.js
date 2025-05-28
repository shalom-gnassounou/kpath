const timeLineDots = document.querySelectorAll(".timeline-dots");
const carousel = document.querySelector("#kpopCarousel");
const bsCarousel =
  bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);

for (const timeLineDot of timeLineDots) {
  timeLineDot.addEventListener("click", () => {
    const slideIndex = parseInt(timeLineDot.getAttribute("data-slide"));
    bsCarousel.to(slideIndex);
  });
}

