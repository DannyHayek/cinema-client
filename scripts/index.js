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

const favGenre = document.getElementById("favGenre");

loginBtn.addEventListener("click", login);
signupSwapBtn.addEventListener("click", signupSwap);
signupBtn.addEventListener("click", signup);
loginSwapBtn.addEventListener("click", loginSwap);

setCurrentUser("","");

function login() {
    if (lgnEmail.value == "") {
        console.log("Email missing!");
    } else if (lgnPass.value == "") {
        console.log("Password missing!");
    } else {
        //axios.get("http://localhost/cinema-server/controllers/getUsers.php").then(response => console.log(response.data["users"]));
        //axios.get("http://localhost/cinema-server/controllers/getUsers.php").then(response => response.data["users"]).then(function (data) {console.log(data)});

        let curEmail = lgnEmail.value;
        let curPass = lgnPass.value;

        axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getUsers.php?",
            params: {
                email: lgnEmail.value
            }
        }).then(function (response) {
            console.log(response.data);
            if (response.data[2] == curEmail) {
                if (response.data[4] == curPass){
                    console.log(response.data[4]);
                    console.log("Password correct! Logging in...");
                    setCurrentUser(response.data[1], response.data[2]);
                } else if (response.data[4] != curPass){;
                console.log("Incorrect password!");
            } else {
                console.log("No user with that email!");
            }
        }});

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

    let curName = sgnName.value;
    let curEmail = sgnEmail.value;
    let curNumber = sgnNumber.value;
    let curPass = sgnPass.value;

    let curGenre = favGenre.value;

    if (curGenre == 0) {
        curGenre = null;
    }

    sgnName.value = sgnEmail.value = sgnNumber.value = sgnPass.value = "";
    favGenre.value = 0;

    console.log(curName, curEmail, curNumber, curPass, curGenre);
    
    let params = new FormData();

    params.append("email", curEmail);
    params.append("name", curName);
    params.append("phone_number", curNumber);
    params.append("password", curPass);
    params.append("age", 0)
    params.append("favGenre", curGenre);

    axios.post("http://localhost/cinema-server/controllers/insertUser.php", params)
    .then(response => console.log(response)).then(error => console.log(error))
    .then(console.log("New user registered!")).then(function (e) {setCurrentUser(curName, curEmail)});
}

function loginSwap () {
    console.log("switching back...")

    loginDiv.style.display = "flex";
    signupDiv.style.display = "none";
}

function setCurrentUser (name, email) {
    localStorage.setItem("currentUser", name);
    localStorage.setItem("currentEmail", email);

    window.location.href = "../pages/home.html";
}