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

async function main() {
  const movies = await fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=3e685048");
  const moviesData = await movies.json();
  const moviesResultsElement = document.querySelector('.movies__results');
  moviesResultsElement.innerHTML = moviesData
  console.log(moviesData)
  moviesData
        .map((movies) => `<div class="movie__container">
                <div class="movie__name">
                ${movies.year}: <span> XXXX </span>
                </div>
                <div class="movie__year">
                Year: <span>0000</span>
                </div>mo
                <div class="movie__rated">
                Rated: <span> XXXX </span>
                </div>
                <div class="movie__runtime">
                Runtime: <span>00:00</span>
                </div>
                <div class="movie__genre">
                Genre: <span> ???? </span>
                </div>
                <div class="movie__language">
                Language: <span>English</span>
                </div>
                <div class="movie__ratings">
                Rating: <span>*****</span>
                </div>
                <div class="movie__poster">
                <figure>
                    <i class="fa-solid fa-clapperboard"></i>
                    <a href=""></a>
                </figure>
                </div>
            </div>`).join("");
}
main();
