const divs = document.querySelectorAll(".grid-item");
const menu = document.querySelector(".menu");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");
const square = document.querySelector(".square");
const scoreLabel = document.querySelector(".score-label");
const timerLabel = document.querySelector(".timer-label");

const startTime = 30;

let score = 0;
let timer = startTime;
let started = false;
let interval;

startBtn.addEventListener("click", (e) => {
  startBtn.classList.add("hidden");
  menu.classList.add("hidden");
  interval = setInterval("decrementTimer()", 1000);
  square.addEventListener("click", addScore);
  divs[generateRandom(divs.length)].appendChild(square);
});

resetBtn.addEventListener("click", (e) => {
  score = 0;
  timer = startTime;
  scoreLabel.innerText = score;
  timerLabel.innerText = timer;
  resetBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
});

initialize();

function generateRandom(maxLimit = 2) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}

function initialize() {
  scoreLabel.innerText = score;
  timerLabel.innerText = timer;
}

function decrementTimer() {
  timer--;
  timerLabel.innerText = timer;
  if (timer === 0) {
    endGame();
  }
}

function endGame() {
  clearTimeout(interval);
  square.removeEventListener("click", addScore);
  menu.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
}

function addScore() {
  score++;
  scoreLabel.innerText = score;
  divs[generateRandom(divs.length)].appendChild(square);
}
