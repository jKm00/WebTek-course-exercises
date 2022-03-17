const addBtn = document.querySelector("[data-add]");
const removeBtn = document.querySelector("[data-remove]");
const tableBody = document.querySelector("table").querySelector("tbody");

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
