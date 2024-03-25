// API KEY === 3e685048

// MOVIES API === https://www.omdbapi.com/?i=tt3896198&apikey=3e685048
// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&

const Term = localStorage.getItem("Term")
// const moviesResultsElement = document.querySelector('.movies__results');


async function onSearchChange(event) {
    const Term = event.target.value
    getMovies(Term)
    console.log(event)
}

async function getMovies(Term) {
    const listing = await fetch(`https://www.omdbapi.com/?s=(${Term})&apikey=3e685048`)
    const listingData = await listing.json();
  moviesResultsElement.innerHTML = listingData.Search.map(movie => movieTitlesHTML(movie)).join('');
  console.log(listingData);
}

function movieTitlesHTML(movie) {
  return `<div class="movie__container">
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
    </div> `
}

getMovies(Term);


