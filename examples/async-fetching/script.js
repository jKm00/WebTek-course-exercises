const btn = document.querySelector("button");
const p = document.querySelector("p");

const API_URL = "https://api.chucknorris.io/jokes/random";

/*const asyncRequest = new XMLHttpRequest();
asyncRequest.onload = onResponeReceived;
btn.addEventListener("click", () => {
  asyncRequest.open("GET", "https://api.chucknorris.io/jokes/random");
  asyncRequest.send();
});*/

btn.addEventListener("click", () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => (p.innerText = data.value))
    .catch((error) => console.log(error));
});

function onResponeReceived() {
  const response = JSON.parse(asyncRequest.responseText);
  p.innerText = response.value;
}
