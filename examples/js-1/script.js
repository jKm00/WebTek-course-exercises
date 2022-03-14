const body = document.querySelector("body");
const inputs = document.querySelectorAll("input");

let red = 255;
let green = 255;
let blue = 255;

inputs.forEach((input) => {
  input.addEventListener("mouseup", (e) => {
    if (input.hasAttribute("data-red")) {
      red = input.value;
    } else if (input.hasAttribute("data-green")) {
      green = input.value;
    } else if (input.hasAttribute("data-blue")) {
      blue = input.value;
    }
    changeBg(red, green, blue);
  });
});

function changeBg(red, green, blue) {
  body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function hello(firstname, lastname = "Norris") {
  console.log("Hello, ", firstname, " ", lastname);
}

function includesChar(string, c) {
  if (string.toLowerCase().includes(c.toLowerCase())) return true;
  return false;
}

function countA(s) {
  return countChars(s, "a");
}

function countChars(s, c) {
  let count = 0;
  for (index in s) {
    if (s[index] == c) {
      count++;
    }
  }
  return count;
}

function isEmail(email) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) return true;
  return false;
}
