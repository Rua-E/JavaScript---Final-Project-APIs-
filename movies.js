
// MOVIES API === https://www.omdbapi.com/?i=tt3896198&apikey=3e685048

const term = localStorage.getItem("term")

async function onSearchChange(event) {
    const term = event.target.value;
    getMovies(term)
    console.log(event)
}

async function getMovies(term ) {
    const listing = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=3e685048`)
    const listingData = await listing.json();
    moviesResultsElement.innerHTML = listingData.Search.map((movie) => movieTitlesHTML(movie)).join("");
    listingData.Search.sort((a,b) =>  b.Year - a.Year);
    listingData.Search = listingData.Search.slice(0,6)
    console.log(listingData);
    console.log(term)
  }

function movieTitlesHTML(movie) {
  return `<div class="movie__container" onclick="showMovie('${movie.Title}')">
    <div class="movie__name">
    <span>${movie.Title} </span>
    </div>
    <div class="movie__year">
    <span> ${movie.Year}</span>
    </div>
    <div>
    <figure>
    <img class="movie__poster" src="${movie.Poster}" />
      </figure>
    </div>
    </div>`;
}
getMovies(term);