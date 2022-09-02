/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.getElementById("btn");
const output = document.getElementById("output");
const message = document.getElementById("message");

btn.addEventListener("click", showGithubUsers);

function showGithubUsers() {
  fetch(ENDPOINT)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.forEach((el) => {
        let card = document.createElement("div");
        card.textContent = `${el.login}`;

        card.style.border = "black solid";
        card.style.marginBlock = "1rem";
        card.style.backgroundColor = "lightgrey";
        card.style.textAlign = "center";
        card.style.fontSize = "16pt";
        card.style.fontWeight = "600";

        let avatar = document.createElement("img");
        card.appendChild(avatar);

        avatar.setAttribute("src", el.avatar_url);
        avatar.style.display = "block";
        avatar.style.height = "100px";
        avatar.style.width = "100px";

        output.appendChild(card);

        message.style.display = "none";
      });
    });
}
