// API KEY === 3e685048

// MOVIES API === https://www.omdbapi.com/?i=tt3896198&apikey=3e685048
// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&

const Term = localStorage.getItem("Term")
const moviesResultsElement = document.querySelector('.movies__results');


async function onSearchChange(event) {
    const Term = event.target.value
    const listing = await fetch(`https://www.omdbapi.com/?s=(${Term}&apikey=3e685048`)
    const listingData = await listing.json();
    moviesResultsElement.innerHTML = listingData.Search.map(listing => `
    <div class="movie__container">
      <div class="movie__name">
      Title: <span> ${movie.Title} </span>
      </div>
      <div class="movie__year">
      Year: <span> ${movie.Year}</span>
      </div>
      <div class="movie__poster">
      <figure>
      <img src="${movie.Poster}" />
        </figure>
      </div>
    </div> 
  `).join('');
}

async function main() {
    const listing = await fetch(`https://www.omdbapi.com/?s=(${Term}&apikey=3e685048`)
    const listingData = await listing.json();


moviesResultsElement.innerHTML = listingData.Search.map(listing => 
  `<div class="movie__container">
      <div class="movie__name">
      Title: <span> ${movie.Title} </span>
      </div>
      <div class="movie__year">
      Year: <span> ${movie.Year}</span>
      </div>
      <div class="movie__poster">
      <figure>
      <img src="${movie.Poster}" />
        </figure>
      </div>
    </div> `).join('');
}

main();
