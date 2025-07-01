import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const usersButton = document.getElementById("usersButton");
const moviesButton = document.getElementById("moviesButton");
const showtimesButton = document.getElementById("showtimesButton");

const userTable = document.getElementById("admin-table");

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
                userTable.innerHTML = `<tr class="table-headers">
                                        <th class = "dark-font table-head">User ID</th>
                                        <th class = "dark-font table-head">Name</th>
                                        <th class = "dark-font table-head">Email</th>
                                        <th class = "dark-font table-head">Phone Number</th>
                                        <th class = "dark-font table-head">Password</th>
                                        <th class = "dark-font table-head">Age</th>
                                        <th class = "dark-font table-head">Favorite Genre ID</th>
                                    </tr>`
            }

            for (let i = 0; i < users.length; i++) {
                let trID = "table-row" + i;
                console.log(users[i]);

                userTable.innerHTML += `<tr id="${trID}" class = "table-row">
                                            <td class = "dark-font table-data">${users[i][0]}</td>
                                            <td class = "dark-font table-data">${users[i][1]}</td>
                                            <td class = "dark-font table-data">${users[i][2]}</td>
                                            <td class = "dark-font table-data">${users[i][3]}</td>
                                            <td class = "dark-font table-data">${hidePass(users[i][4])}</td>
                                            <td class = "dark-font table-data">${users[i][5]}</td>
                                            <td class = "dark-font table-data">${users[i][6]}</td>
                                        </tr>`

                // let curRow = document.getElementById(trID);
                // for (let j = 0; j < users[i].scores.length; j++) {
                //     curRow.innerHTML += `<td class = "inquiz-text-font table-data">${users[i].scores[j]}/3</td>`
                // }                            
                }
            });
}

/* <table id="admin-table">
                <tr class="table-headers">
                    <th class = "dark-font table-head">USERNAME</th>
                    <th class = "dark-font table-head">PASSWORD</th>
                    <th class = "dark-font table-head">SCORE QUIZ 1</th>
                    <th class = "dark-font table-head">SCORE QUIZ 2</th>
                    <th class = "dark-font table-head">SCORE QUIZ 3</th>
                    <th class = "dark-font table-head">SCORE QUIZ 4</th>
                </tr>

                <tr class="table-data">
                    <td class = "dark-font table-row">Danny</td>
                    <td class = "dark-font table-row">***</td>
                    <td class = "dark-font table-row">2/3</td>
                    <td class = "dark-font table-row">0/3</td>
                    <td class = "dark-font table-row">1/3</td>
                    <td class = "dark-font table-row">3/3</td>
                </tr>
            </table>  */


function fetchMovies() {
    console.log("Fetching movies...");
}

function fetchShowtimes() {
    console.log("Fetching showtimes...");
}


function hidePass(pass) {
    let starred = ""

    for (let i = 0; i < pass.length; i++) {
        starred += "*";
    }

    return starred;
}