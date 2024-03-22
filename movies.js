// API KEY === 3e685048

// MOVIES API === https://www.omdbapi.com/?i=tt3896198&apikey=3e685048
// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&




// document.querySelector(".redirect").addEventListener('click', () => {
//     window.location.href = `http://127.0.0.1:5501/index.html`;
//  });


// console.log(fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3e685048"));

const movieResultsElement = document.querySelector('.movies__results');

async function main() {
    const Title = localStorage.getItem("Title")
    const listing = await fetch(`https://www.omdbapi.com/?s=(${Title}&apikey=3e685048`)
    const listingData = await listing.json();

    console.log(listingData)

moviesResultsElement.innerHTML = listingData.map(listing => `
    <div class="movie__wrap">
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
  </div>`).join('');
}

main();

function onSearchChange() {
    console.log('12345')
}