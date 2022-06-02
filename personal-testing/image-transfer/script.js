const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", (e) => {
  const file = input.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    console.log("Hello");
  };
});
