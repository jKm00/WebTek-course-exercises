const btn = document.querySelector("button");
const imgContainer = document.querySelector(".img-container");
const input = document.querySelector("input");

const API_URL = "https://web-tek.ninja/php_backend/throw_a_dice.php";

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  // Clear container
  clearContainer();
  // Retrive number of dice from user input
  const numberOfDice = input.value;
  // Ask API for dice result
  fetch(API_URL + "?n=" + numberOfDice, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.forEach((result) => displayResult(result)));
}

function displayResult(response) {
  // Create div where the dice is displayed
  const imgWrapper = document.createElement("div");
  // Position the background image according to the result
  if (response === 1) {
    imgWrapper.classList.add("one");
  } else if (response === 2) {
    imgWrapper.classList.add("two");
  } else if (response === 3) {
    imgWrapper.classList.add("three");
  } else if (response === 4) {
    imgWrapper.classList.add("four");
  } else if (response === 5) {
    imgWrapper.classList.add("five");
  } else if (response === 6) {
    imgWrapper.classList.add("six");
  }
  // Append the dice div to the container
  imgContainer.appendChild(imgWrapper);
}

// Clear the container
function clearContainer() {
  imgContainer.innerHTML = "";
}
