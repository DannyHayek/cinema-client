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
            <article class="movie-tile flex column flex-space-between">
                <h3 class="light-font">${response.data["movies"][i][1]}</h3>
                <h5 class="light-font tile-bottom-text">${response.data["movies"][i][2]}</h5>
            </article>
        ` 
    }
});
