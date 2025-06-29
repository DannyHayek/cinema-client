import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const currentUser = localStorage.getItem("currentUser");
const currentEmail = localStorage.getItem("currentEmail");
console.log(currentUser);
console.log(currentEmail);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userNumber = document.getElementById("userNumber");
const userAge = document.getElementById("userAge");
const userPassword = document.getElementById("userPassword");
const userGenre = document.getElementById("userGenre");

const chngName = document.getElementById("changeName");
const chngEmail = document.getElementById("changeEmail");
const chngNumber = document.getElementById("changeNumber");
const chngAge = document.getElementById("changeAge");
const chngPass = document.getElementById("changePass");
const chngGenre = document.getElementById("changeGenre");

const newName = document.getElementById("newName");
const newEmail = document.getElementById("newEmail");
const newNumber = document.getElementById("newNumber");
const newAge = document.getElementById("newAge");
const newPass = document.getElementById("newPass");
// const newGenre = document.getElementById("newName");


fetchInfo();


function fetchInfo () {
    axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getUsers.php?",
            params: {
                email: currentEmail
            }
        }).then(function (response) {
            console.log(response.data);
            let userID =  response.data[0];
            userName.textContent = response.data[1];
            userEmail.textContent = response.data[2];
            userNumber.textContent = response.data[3];
            userAge.textContent = response.data[5];

            for (let i = 0; i < response.data[4].length; i++) {
                userPassword.textContent += "*";
            }

            userGenre.textContent = response.data[6];
        }).then(function (userID) {

        });
}


