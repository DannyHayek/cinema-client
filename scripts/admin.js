import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const usersButton = document.getElementById("usersButton");
const moviesButton = document.getElementById("moviesButton");
const showtimesButton = document.getElementById("showtimesButton");

const adminTable = document.getElementById("admin-table");

usersButton.addEventListener("click", fetchUsers);
moviesButton.addEventListener("click", fetchMovies);
showtimesButton.addEventListener("click", fetchShowtimes);



function fetchUsers() {
    console.log("Fetching users...");

    axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getUsers.php",
        }).then(function (response) {
            console.log(response.data);
            const users = response.data["users"];

            console.log(users);

            for (let i = 0; i < users[0].length; i++) {
                adminTable.innerHTML = `<tr class="table-headers">
                                        <th class = "dark-font table-head">User ID</th>
                                        <th class = "dark-font table-head">Name</th>
                                        <th class = "dark-font table-head">Email</th>
                                        <th class = "dark-font table-head">Phone Number</th>
                                        <th class = "dark-font table-head">Password</th>
                                        <th class = "dark-font table-head">Age</th>
                                        <th class = "dark-font table-head">Favorite Genre</th>
                                        <th class = "dark-font table-head">Favorite Genre ID</th>
                                    </tr>`
                }
                
            generateRows(users, true);

            });
}


function fetchMovies() {
    console.log("Fetching movies...");

    axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getMovies.php",
        }).then(function (response) {
            console.log(response.data);
            const movies = response.data["movies"];

            console.log(movies);

            for (let i = 0; i < movies[0].length; i++) {
                adminTable.innerHTML = `<tr class="table-headers">
                                        <th class = "dark-font table-head">Movie ID</th>
                                        <th class = "dark-font table-head">Name</th>
                                        <th class = "dark-font table-head">Synopsis</th>
                                        <th class = "dark-font table-head">Length</th>
                                        <th class = "dark-font table-head">Age Rating</th>
                                        <th class = "dark-font table-head">Trailer Link</th>
                                        <th class = "dark-font table-head">Poster URL</th>
                                    </tr>`
                }
                
            generateRows(movies, false);

            });
}

function fetchShowtimes() {
    console.log("Fetching showtimes...");
}

function generateRows(data, isUsers) {
    for (let i = 1; i < data.length; i++) {
        let trID = "table-row" + i;
        console.log(data[i]);

        adminTable.innerHTML += `<tr id="${trID}" class = "table-row">
                                </tr>`

        let curRow = document.getElementById(trID);

        for (let j = 0; j < data[i].length; j++) {

            if (isUsers && j == 4) {
                curRow.innerHTML += `<td class = "dark-font table-data">${hidePass(data[i][4])}</td>`;
            } else {
                curRow.innerHTML += `<td class = "dark-font table-data">${data[i][j]}</td>`;
            }
        }                    
        }
}

function hidePass(pass) {
    let starred = ""

    for (let i = 0; i < pass.length; i++) {
        starred += "*";
    }

    return starred;
}