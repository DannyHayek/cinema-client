import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const loginBtn = document.getElementById("login-btn");
const signupSwapBtn = document.getElementById("signup-swap-btn");
const signupBtn = document.getElementById("signup-btn");
const loginSwapBtn = document.getElementById("login-swap-btn");

const loginDiv = document.getElementById("loginDiv");
const signupDiv = document.getElementById("signupDiv");

const lgnEmail = document.getElementById("lgnEmail");
const lgnPass = document.getElementById("lgnPass");

const sgnName = document.getElementById("sgnName");
const sgnEmail = document.getElementById("sgnEmail");
const sgnNumber = document.getElementById("sgnNumber");
const sgnGenre = document.getElementById("sgnGenre");
const sgnPass = document.getElementById("sgnPass");



loginBtn.addEventListener("click", login);
signupSwapBtn.addEventListener("click", signupSwap);
signupBtn.addEventListener("click", signup);
loginSwapBtn.addEventListener("click", loginSwap);

function login() {
    console.log("logging in...")

    let curEmail = lgnEmail.value;
    let curPass = lgnPass.value;

    if (curEmail == "") {
        console.log("Email missing!");
    } else if (curPass == "") {
        console.log("Password missing!");
    } else {
        //axios.get("http://localhost/cinema-server/controllers/getUsers.php").then(response => console.log(response.data["users"]));
        //axios.get("http://localhost/cinema-server/controllers/getUsers.php").then(response => response.data["users"]).then(function (data) {console.log(data)});

        axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getUsers.php?",
            params: {
                email: curEmail
            }
        }).then(function (response) {
            console.log(response.data);
            if (response.data == "") {
                console.log("No such email!");
            }
        });

        lgnEmail.value = lgnPass.value = "";
    }
}

function signupSwap() {
    console.log("switching...")

    loginDiv.style.display = "none";
    signupDiv.style.display = "flex";
}

function signup () {
    console.log("signing up...")
}

function loginSwap () {
    console.log("switching back...")

    loginDiv.style.display = "flex";
    signupDiv.style.display = "none";
}