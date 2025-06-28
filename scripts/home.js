const currentUser = localStorage.getItem("currentUser");
console.log(currentUser);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

const moviesGrid = document.getElementById("moviesGrid");

for (let i = 0; i < 10; i++) {
    moviesGrid.innerHTML += `<article class="movie-tile flex column flex-space-between">
                                <h3 class="light-font">Movie Name</h3>
                                <h5 class="light-font tile-bottom-text">Synopsis</h5>
                                <h5 class="light-font tile-bottom-text">Cast</h5>
                            </article>`
}