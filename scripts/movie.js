import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const currentUser = localStorage.getItem("currentUser");
console.log(currentUser);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;
