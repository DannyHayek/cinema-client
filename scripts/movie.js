import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const currentUser = localStorage.getItem("currentUser");
console.log(currentUser);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

const curMovieID = localStorage.getItem("currentMovie").at(5);

console.log(curMovieID);

const movieName = document.getElementById("movieName");
const synopsis = document.getElementById("synopsis");
const cast = document.getElementById("cast");
const runtime = document.getElementById("runtime");
const ageRating = document.getElementById("ageRating");
const genre = document.getElementById("genre");
const trailerLink = document.getElementById("trailerLink");



axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getMovies.php?",
            params: {
                id: curMovieID
            }
        }).then(function (response) {
            const movie = response.data["movie"];
            const genreData = response.data["genre"];
            console.log(movie);
            console.log(genreData);


            movieName.textContent += movie[1];
            synopsis.textContent += movie[2];
            runtime.textContent += movie[3] + " minutes";
            ageRating.textContent += movie[4];
            trailerLink.textContent = movie[5];

            for (let i = 0; i < genreData.length; i++) {
                console.log(genreData[i][1]);
                genre.textContent += genreData[i][1];
                if (i + 1 != genreData.length) {
                    genre.textContent += ", ";
                }
            }
        }
);