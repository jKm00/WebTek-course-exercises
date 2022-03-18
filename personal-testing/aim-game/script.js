const menu = document.querySelector(".menu");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");
const target = document.querySelector(".square");
const scoreLabel = document.querySelector(".score-label");
const timerLabel = document.querySelector(".timer-label");
const boardHeight = document.querySelector(".board").clientHeight;
const boardWidth = document.querySelector(".board").clientWidth;

const startTime = 30;
const targetSize = 25;

let score = 0;
let timer = startTime;
let interval;

startBtn.addEventListener("click", (e) => {
  startBtn.classList.add("hidden");
  menu.classList.add("hidden");
  interval = setInterval("updateTimer()", 1000);
  target.addEventListener("click", onHit);
  moveTarget();
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

function updateTimer() {
  timer--;
  timerLabel.innerText = timer;
  if (timer === 0) {
    endGame();
  }
}

function endGame() {
  clearTimeout(interval);
  target.removeEventListener("click", addScore);
  menu.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
}

function onHit() {
  score++;
  scoreLabel.innerText = score;
  moveTarget();
}

function moveTarget() {
  xPos = generateRandom(boardWidth - targetSize);
  yPos = generateRandom(boardHeight - targetSize);
  target.style.top = yPos + "px";
  target.style.left = xPos + "px";
}
