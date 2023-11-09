// Your code here
//API
const filmsAPI = "http://localhost:3000/films"
//elements
const movieTitle = document.getElementById('title');
const movieLength = document.getElementById('runtime');
const moviePoster = document.getElementById('poster');
const movieDetails = document.getElementById('film-info');
const movieTime = document.getElementById('showtime');
const filmList = document.getElementById('films-list')
const ticketAvailable = document.getElementById('ticket-num')




//section 1
fetch(`${filmsAPI}/1`)
    .then(res => res.json())
    .then(renderFilm)

function renderFilm(film){
    movieTitle.textContent = film.title;
    moviePoster.src = film.poster;
    movieLength.textContent = film.runtime;
    movieTime.textContent = film.showtime;
    movieDetails.textContent=film.description;
    
} 

//("tickets sold") - ("capacity") = ticketAvailable NEED LE MATH PROBLEM





//section 2

fetch(filmsAPI)
    .then(res => res.json())
    .then(renderMoreMovies)


function renderMoreMovies(films){
    filmList.innerHTML = '';
    films.forEach(addNewMovie)
}

function addNewMovie(film){
    const movieTitle = document.createElement('ul');
    movieTitle.textContent = film.title;
    filmList.append(movieTitle)

}



//button
document.getElementById('buy-ticket').addEventListener('click', buyTicket);
function buyTicket(){
   console.log(buyTicket)
    
}