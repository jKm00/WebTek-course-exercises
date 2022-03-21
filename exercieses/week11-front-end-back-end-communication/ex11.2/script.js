const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  window.location = "https://www.jula.no/search/?query=" + input.value;
});
