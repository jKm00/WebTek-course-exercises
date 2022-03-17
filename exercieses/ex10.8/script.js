const add = document.querySelector("[data-add]");
const remove = document.querySelector("[data-remove]");
const p = document.querySelector("p");

add.addEventListener("click", (e) => {
  p.classList.add("yellow");
});

remove.addEventListener("click", (e) => {
  p.classList.remove("yellow");
});
