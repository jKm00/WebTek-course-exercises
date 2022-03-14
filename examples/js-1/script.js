const body = document.querySelector("body");
const sliders = document.querySelectorAll("[data-slider]");
const textInput = document.querySelector("[data-text]");
const div = document.querySelector("[data-explosion]");

let red = 255;
let green = 255;
let blue = 255;

window.addEventListener("scroll", (e) => {
  div.style.transform = "translateY(" + window.scrollY * 0.5 + "px)";
});

sliders.forEach((slide) => {
  slide.addEventListener("mouseup", (e) => {
    if (slide.hasAttribute("data-red")) {
      red = slide.value;
    } else if (slide.hasAttribute("data-green")) {
      green = slide.value;
    } else if (slide.hasAttribute("data-blue")) {
      blue = slide.value;
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

function squareRootOf(number = 1764) {
  return Math.sqrt(number);
}

console.log(squareRootOf());

let i = 2;
function printSeconds() {
  if (i < 0) {
    div.style.backgroundImage =
      "url(https://media0.giphy.com/media/oe33xf3B50fsc/giphy.gif)";
  } else {
    console.log("Countdown: ", i);
    i--;
  }
}

setInterval("printSeconds()", 1000);

textInput.addEventListener("keyup", (e) => {
  console.log("Text was changed: ", textInput.value);
});
