async function fetchGenreDramas(genreId) {
  const API_KEY = "30b77497cab93e431d0c4e933cbbf16b"; 
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=fr-FR&with_original_language=ko&with_genres=${genreId}&sort_by=first_air_date.desc&first_air_date.gte=2022-01-01`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erreur API : ${res.status}`);

    const data = await res.json();
    const results = data.results;

    const container = document.getElementById("tmdb-dramas");
    container.innerHTML = ""; // Reset

    if (results.length === 0) {
      container.innerHTML = "<p>Aucun drama trouvé pour ce genre.</p>";
      return;
    }

    results.slice(0, 3).forEach((drama) => {
      const card = document.createElement("div");
      card.classList.add("drama-card");
      card.innerHTML = `
        <img src="${drama.poster_path ? `https://image.tmdb.org/t/p/w300${drama.poster_path}` : 'https://dummyimage.com/300x450/cccccc/000000&text=Pas+de+visuel'}" alt="${drama.name}">
        <h4>${drama.name}</h4>
        <p>${drama.overview || "Pas de description disponible."}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erreur de récupération :", error.message);
    const container = document.getElementById("tmdb-dramas");
    container.innerHTML = "<p>Une erreur est survenue. Réessaie plus tard.</p>";
  }
}


