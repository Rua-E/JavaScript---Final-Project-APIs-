
function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function delay(URL) {
  setTimeout(function(){ window.location = URL}, 1000);
}

const moviesResultsElement = document.querySelector('.movies__results');

function moviesHTML(movie) {
  return `<div class="movie__container" onclick="showMovie('${movie.Title}')">
          <div class="movie__name">
          <span> ${movie.Title} </span>
          </div>
          <div class="movie__year">
          <span> ${movie.Year}</span>
          </div>
          <div>
          <figure>
          <img class="movie__poster" src="${movie.Poster}" />
          </figure>
          </div>
          </div>`
        }

async function main() {
    const movies = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=3e685048`);
    const moviesData = await movies.json();
    console.log(moviesData.Search)
    moviesResultsElement.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join('');
  }
// main();

function showMovie(term) {
  localStorage.setItem("term", term)
  window.location.href = `http://127.0.0.1:5501/movies.html`
}