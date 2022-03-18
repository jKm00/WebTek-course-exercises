window.addEventListener("load", (e) => {
  const inner = document.querySelectorAll(".inner");

  for (let index in inner) {
    if (index % 2 == 0) {
      inner[index].innerHTML = "X";
    } else if (index % 2 != 0) {
      inner[index].innerHTML = "O";
    }
  }
});

// Another alternative
const even = document.querySelectorAll(".inner:nth-child(even)");
const odd = document.querySelectorAll(".inner:nth-child(odd)");
