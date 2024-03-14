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



/* LINKING APIs */


const moviesResultsElement = document.querySelector('.movies__results');

async function main() {
    const movie = await fetch("https://www.omdbapi.com/?s=fast&apikey=3e685048");
    const moviesData = await movie.json();
    console.log(moviesData.Search)
    moviesResultsElement.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
}
main();

function showMovie(title) {
    localStorage.setItem("title", title)
    window.location.href = `${window.location.origin}/movies.html`
}

function moviesHTML(movie) {
    return `<div class="movie__container" onclick="showMovie(${movie.Title})>
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
            </div>`
}
moviesHTML(movie);

