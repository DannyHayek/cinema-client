import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const currentUser = localStorage.getItem("currentUser");
console.log(currentUser);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

const moviesGrid = document.getElementById("moviesGrid");

axios({
        method: "get",
        url: "http://localhost/cinema-server/get_movies",
    }
).then(function (response) {
    console.log(response.data);
    for (let i = 0; i < response.data["payload"].length; i++){
       let curMovieID = response.data["payload"][i][0];
       moviesGrid.innerHTML  += `
            <article id="${curMovieID}" class="movie-tile flex column flex-space-between">
                <h3 class="light-font">${response.data["payload"][i][1]}</h3>
                <h5 class="light-font tile-bottom-text">${response.data["payload"][i][2]}</h5>
            </article>
        ` 

        let curMovie = document.getElementById(curMovieID);
        curMovie.style.backgroundImage = `-webkit-linear-gradient(bottom, rgba(39, 44, 55, 0) 50%, rgba(39, 44, 55, 0.99) 100%), URL("${response.data["payload"][i][6]}")`;
        
    }
}).then(function (e) {
    const movieCards = document.querySelectorAll(".movie-tile");

    for (let i = 0; i < movieCards.length; i++) {
        let tile = movieCards[i];
        tile.addEventListener("click", function () {
            console.log(tile.id);
            localStorage.setItem("currentMovie", tile.id);
            window.location.href = "../pages/movie.html";
        });

        // console.log(localStorage.setItem("curretMovieID", );
    }

    // console.log(localStorage.getItem("currentQuiz"));
});