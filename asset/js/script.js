const burger = document.getElementById("burger");
const navBurger = document.getElementById("navburger");

burger.addEventListener("click", () => {
  navBurger.classList.toggle("show");
  console.log("clique");
});

const timeLineDots = document.querySelectorAll(".timeline-dots-horizontal");
const timeLineVerticalDots = document.querySelectorAll(
  ".timeline-dots-vertical"
);
const carousel = document.querySelector("#kpopCarousel");
const targetElement = document.getElementById("carouselkpop");
const bsCarousel =
  bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
const bsVerCarousel =
  bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);

for (const timeLineDot of timeLineDots) {
  timeLineDot.addEventListener("click", () => {
    const slideIndex = parseInt(timeLineDot.getAttribute("data-slide"));
    bsCarousel.to(slideIndex);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    console.log("clique");
  });
   
}

for (const timeLineVerticalDot of timeLineVerticalDots) {
  timeLineVerticalDot.addEventListener("click", () => {
    const slideVerIndex = parseInt(
      timeLineVerticalDot.getAttribute("data-slide")
    );
    bsVerCarousel.to(slideVerIndex);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    console.log("clique");
  });

}
