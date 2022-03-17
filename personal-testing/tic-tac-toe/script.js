const divs = document.querySelectorAll("[data-div]");
let firstPlayer = true;

console.log(divs);

divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (!e.target.classList.contains("occupied")) {
      if (firstPlayer) {
        e.target.innerHTML = "X";
        e.target.classList.add("x");
      } else {
        e.target.innerHTML = "O";
        e.target.classList.add("o");
      }
      e.target.classList.add("occupied");
      firstPlayer = !firstPlayer;
    }
  });
});
