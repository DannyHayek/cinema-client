import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

let currentUser = localStorage.getItem("currentUser");
let currentEmail = localStorage.getItem("currentEmail");
console.log(currentUser);
console.log(currentEmail);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

let userID = 0;
let userGenreID = 0;
let currentPass = "";

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userNumber = document.getElementById("userNumber");
const userAge = document.getElementById("userAge");
const userPassword = document.getElementById("userPassword");
const userGenre = document.getElementById("userGenre");

const submitChanges = document.getElementById("submitChanges");

const newName = document.getElementById("newName");
const newEmail = document.getElementById("newEmail");
const newNumber = document.getElementById("newNumber");
const newAge = document.getElementById("newAge");
const newPass = document.getElementById("newPass");
const newGenre = document.getElementById("newGenre");

submitChanges.addEventListener("click", updateUser)


fetchInfo();
resetField();


function fetchInfo () {
    axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getUsers.php?",
            params: {
                email: currentEmail
            }
        }).then(function (response) {
            console.log(response.data);
            userID =  response.data[0];
            userName.textContent = response.data[1];
            userEmail.textContent = response.data[2];
            userNumber.textContent = response.data[3];
            userAge.textContent = response.data[5];

            userGenreID = response.data[7];
            console.log(response.data[4]);
            currentPass = response.data[4];

            for (let i = 0; i < response.data[4].length; i++) {
                userPassword.textContent += "*";
            }

            userGenre.textContent = response.data[6];
        })
}

async function updateUser (newAttr) {
    console.log(userID, newName.value, newEmail.value, newNumber.value, newPass.value, newAge.value, newGenre.value);

    let params = new FormData();
    
    params.append("id", userID);

    if (newName.value == "") {
        params.append("name", userName.textContent);
    } else {
        params.append("name", newName.value);
        currentUser = newName.value;
        localStorage.setItem("currentUser", newName.value);
        welcomeMessage.textContent = "Welcome, " + currentUser;
    }

    if (newEmail.value == "") {
        params.append("email", userEmail.textContent);
    } else {
        params.append("email", newEmail.value);
        currentEmail = newEmail.value;
        localStorage.setItem("currentEmail", newEmail.value);
    }

    if (newNumber.value == "") {
        params.append("phone_number", userNumber.textContent);
    } else {
        params.append("phone_number", newNumber.value);
    }

    if (newPass.value == "") {
        params.append("password", currentPass);
    } else {
        params.append("password", newPass.value);
    }

    if (newAge.value == "") {
        params.append("age", userAge.textContent);
    } else {
        params.append("age", newAge.value);
    }

    if (newGenre.value == 0) {
        params.append("favorite_genre_id", userGenreID);
    } else {
        params.append("favorite_genre_id", newGenre.value);
    }

    console.log(params);
    resetField();

    axios.post("http://localhost/cinema-server/controllers/updateUser.php", params)
    .then(response => console.log(response)).then(error => console.log(error))
    .then(console.log("User successfully updated!"));

    fetchInfo();
    
}


function resetField () {
    newName.value = newPass.value = newAge.value = newNumber.value = newEmail.value = "";
    newGenre.value = 0;
}