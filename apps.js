// THINGS NEED TO BE DONE
// - routing from the first page to the search page
// window.location.href = ` URL HERE `
// window.location.href = `${window.location.origin}/user.html`

// - get information from the local storage
// localStorage.setItem("id", id) --> index.js
// localStorage.getItem("id") --> movies.js

// - log the search event
// <input type="text" placeholder="1" onchange="onSearchChange(event)">
// function onSearchChange(event){
//    console.log(event.target.value)
// }

// function submit(event) {
//     event.preventDefault();
//     const loading = document.querySelector(".spinner__overlay--loading");
//     loading.classList += " spinner__overlay--visible"
//     setTimeout(() => {
//     }, 500);
//  }

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}



setTimeout(function redirect() {
  document.getElementById(redirectButton).addEventListener("click",redirect);
  window.location = "http://127.0.0.1:5501/movies.html";
}, 500);


/* LINKING APIs */


const moviesResultsElement = document.querySelector('.movies__results');

function moviesHTML(movie) {
  return [`<div class="movie__container" onclick="showMovie('${movie.Title}')">
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
          </div>`,
          `<div class="search__info"  onclick="showMovie('${movie.Title}')>
          Search Results: <span> ${Term} </span>
          </div>`]
}
// moviesHTML(movie);

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?s=fast&apikey=3e685048");
    const moviesData = await movies.json();
    console.log(moviesData.Search)
    moviesResultsElement.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join('');
  }
main();


function showMovie(Term) {
  localStorage.setItem("Term", Term)
  window.location.href = `http://127.0.0.1:5501/movies.html`
}
