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
                                        <th class = "dark-font table-head">Favorite Genre ID</th>
                                    </tr>`
                }
                
            generateRows(users);

            });
}


function fetchMovies() {
    console.log("Fetching movies...");
}

function fetchShowtimes() {
    console.log("Fetching showtimes...");
}

function generateRows(data) {
    for (let i = 0; i < data.length; i++) {
        let trID = "table-row" + i;
        console.log(data[i]);

        adminTable.innerHTML += `<tr id="${trID}" class = "table-row">
                                    <td class = "dark-font table-data">${data[i][0]}</td>
                                    <td class = "dark-font table-data">${data[i][1]}</td>
                                    <td class = "dark-font table-data">${data[i][2]}</td>
                                    <td class = "dark-font table-data">${data[i][3]}</td>
                                    <td class = "dark-font table-data">${hidePass(data[i][4])}</td>
                                    <td class = "dark-font table-data">${data[i][5]}</td>
                                    <td class = "dark-font table-data">${data[i][6]}</td>
                                </tr>`                       
        }
}

function hidePass(pass) {
    let starred = ""

    for (let i = 0; i < pass.length; i++) {
        starred += "*";
    }

    return starred;
}