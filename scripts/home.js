import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const currentUser = localStorage.getItem("currentUser");
console.log(currentUser);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

const moviesGrid = document.getElementById("moviesGrid");

axios({
        method: "get",
        url: "http://localhost/cinema-server/controllers/getMovies.php",
    }
).then(function (response) {
    console.log(response.data["movies"].length);
    for (let i = 0; i < response.data["movies"].length; i++){
       moviesGrid.innerHTML  += `
            <article id="movie${response.data["movies"][i][0]}" class="movie-tile flex column flex-space-between">
                <h3 class="light-font">${response.data["movies"][i][1]}</h3>
                <h5 class="light-font tile-bottom-text">${response.data["movies"][i][2]}</h5>
            </article>
        ` 
    }
}).then(function (e) {
    const movieCards = document.querySelectorAll(".movie-tile");

    for (let i = 0; i < movieCards.length; i++) {
        let tile = movieCards[i];
        tile.addEventListener("click", function () {
            console.log(tile.id);
            localStorage.setItem("currentMovie", tile.id)
            // window.location.href = "../pages/quiz.html";
        });

        // console.log(localStorage.setItem("curretMovieID", );
    }

    // console.log(localStorage.getItem("currentQuiz"));
});