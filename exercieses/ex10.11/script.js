const body = document.querySelector("body");
const addBtn = document.querySelector("[data-add]");
const removeBtn = document.querySelector("[data-remove]");
const tableBody = document.querySelector("table").querySelector("tbody");

const square = document.querySelector("[data-square]");

addBtn.addEventListener("click", (e) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerHTML = "Hello";
  const td2 = document.createElement("td");
  td2.innerHTML = "World";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tableBody.appendChild(tr);
});

removeBtn.addEventListener("click", (e) => {
  const lastRow = tableBody.children[tableBody.children.length - 1];
  if (lastRow !== undefined && !lastRow.classList.contains("table-header")) {
    tableBody.removeChild(lastRow);
  }
});

square.addEventListener("mouseenter", (e) => {
  const gridSquares = document.querySelectorAll("body, h1, p, td, button");
  const red = generateRandom(255);
  const blue = generateRandom(255);
  const green = generateRandom(255);
  square.style.backgroundColor = "rgba(" + red + "," + blue + "," + green + ")";
  gridSquares[generateRandom(gridSquares.length)].appendChild(square);
});

function generateRandom(maxLimit = 2) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}
