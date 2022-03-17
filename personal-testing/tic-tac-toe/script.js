const divs = document.querySelectorAll("[data-div]");
const winner = document.querySelector("[data-winner]");
const resetBtn = document.querySelector("[data-reset]");
const winnerColor = "lime";
let firstPlayer = true;

divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (!e.target.classList.contains("occupied")) {
      if (firstPlayer) {
        e.target.innerHTML = "X";
        e.target.classList.add("x");
        checkForWinner("x");
      } else {
        e.target.innerHTML = "O";
        e.target.classList.add("o");
        checkForWinner("o");
      }
      e.target.classList.add("occupied");
      firstPlayer = !firstPlayer;
    }
  });
});

resetBtn.addEventListener("click", (e) => {
  divs.forEach((div) => {
    div.classList.remove("o");
    div.classList.remove("x");
    div.classList.remove("occupied");
    div.innerHTML = "";
    div.style.backgroundColor = "transparent";
    firstPlayer = true;
    winner.innerHTML = "";
  });
});

function checkForWinner(player) {
  if (checkLine(0, 1, 2, player)) {
    declareWinner(0, 1, 2, player);
  } else if (checkLine(3, 4, 5, player)) {
    declareWinner(3, 4, 5, player);
  } else if (checkLine(6, 7, 8, player)) {
    declareWinner(6, 7, 8, player);
  } else if (checkLine(0, 3, 6, player)) {
    declareWinner(0, 3, 6, player);
  } else if (checkLine(1, 4, 7, player)) {
    declareWinner(1, 4, 7, player);
  } else if (checkLine(2, 5, 8, player)) {
    declareWinner(2, 5, 8, player);
  } else if (checkLine(0, 4, 8, player)) {
    declareWinner(0, 4, 8, player);
  } else if (checkLine(2, 4, 6, player)) {
    declareWinner(2, 4, 6, player);
  }
}

function checkLine(div1, div2, div3, player) {
  if (
    divs[div1].classList.contains(player) &&
    divs[div2].classList.contains(player) &&
    divs[div3].classList.contains(player)
  )
    return true;
  return false;
}

function declareWinner(div1, div2, div3, player) {
  divs[div1].style.backgroundColor = winnerColor;
  divs[div2].style.backgroundColor = winnerColor;
  divs[div3].style.backgroundColor = winnerColor;
  winner.innerHTML = player;
}
