import axios from 'https://cdn.jsdelivr.net/npm/axios@1.10.0/+esm';

const currentUser = localStorage.getItem("currentUser");
const currentEmail = localStorage.getItem("currentEmail");
console.log(currentUser);
console.log(currentEmail);

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.textContent = "Welcome, " + currentUser;

axios({
            method: "get",
            url: "http://localhost/cinema-server/controllers/getUsers.php?",
            params: {
                email: currentEmail
            }
        }).then(response => console.log(response.data));

