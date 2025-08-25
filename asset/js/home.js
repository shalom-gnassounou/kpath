document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger")
  const navBurger = document.getElementById("navburger")

  burger.addEventListener("click", () => {
     navBurger.classList.toggle("nav-open")
  })
})



