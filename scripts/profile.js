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

const submitChanges = document.getElementById("submitChanges");

const newName = document.getElementById("newName");
const newEmail = document.getElementById("newEmail");
const newNumber = document.getElementById("newNumber");
const newAge = document.getElementById("newAge");
const newPass = document.getElementById("newPass");
// const newGenre = document.getElementById("newGenre");

submitChanges.addEventListener("click", updateUser)


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
        })
}

async function updateUser (newAttr) {
    console.log(newName.value, newEmail.value, newNumber.value, newPass.value, newAge.value);

    // let params = new FormData();
    
    // params.append("email", curEmail);
    // params.append("name", curName);
    // params.append("phone_number", curNumber);
    // params.append("password", curPass);
    // params.append("age", 0)
    // params.append("favGenre", curGenre);


    // await axios.post("http://localhost/cinema-server/controllers/getUsers.php", params)
    // .then(response => console.log(response)).then(error => console.log(error))
    // .then(console.log("New user registered!"));
}
