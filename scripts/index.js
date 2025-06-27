import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const loginBtn = document.getElementById("login-btn");
const signupSwapBtn = document.getElementById("signup-swap-btn");
const signupBtn = document.getElementById("signup-btn");
const loginSwapBtn = document.getElementById("login-swap-btn");

const loginDiv = document.getElementById("loginDiv");
const signupDiv = document.getElementById("signupDiv");


loginBtn.addEventListener("click", login);
signupSwapBtn.addEventListener("click", signupSwap);
signupBtn.addEventListener("click", signup);
loginSwapBtn.addEventListener("click", loginSwap);

function login() {
    console.log("logging in...")


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