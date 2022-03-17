const color = document.querySelector("input");
const colorDisplay = document.querySelector(".color-display");

color.addEventListener("change", (e) => {
  colorDisplay.style.backgroundColor = e.target.value;
  colorDisplay.innerHTML = e.target.value;
});
