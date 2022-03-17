const body = document.querySelector("body");
const addBtn = document.querySelector("[data-add]");
const removeBtn = document.querySelector("[data-remove");
let number = 0;

addBtn.addEventListener("click", (e) => {
  const p = document.createElement("p");
  p.innerHTML = "Hello " + number;
  body.appendChild(p);
  number++;
});

removeBtn.addEventListener("click", (e) => {
  const p = body.querySelector("p");
  if (p != null) {
    body.removeChild(p);
  }
});
