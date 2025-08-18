const burger = document.getElementById("burger");
const navBurger = document.getElementById("navburger");

burger.addEventListener("click", () => {
  navBurger.classList.toggle("show");
  console.log("clique");
});






function showIntro(category) {
  const intro = document.getElementById('intro-text');
  let text = '';

  if (category === 'kdrama') {
    text = "Plonge dans l'univers des K-Dramas — là où les émotions sont intenses, les histoires magnifiquement racontées, et chaque épisode te donne envie d'en voir plus..";
  } else if (category === 'kpop') {
    text = " Bienvenue dans le monde du K-Pop — un univers vibrant de musique, de style et de performances qui a conquis le cœur du monde entier.";
  }

  intro.textContent = text;
  intro.classList.remove('hidden');
  intro.classList.add('visible');
}
