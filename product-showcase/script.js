console.clear();

// Get all elements from DOM
const thumbnails = document.querySelectorAll(".thumbnail");
const images = document.querySelectorAll(".images");
const thumbnailWrapper = document.querySelector(".showcase__thumbnails");

// Add id attributes to the elements
for (i = 0; i < thumbnails.length; i++) {
  thumbnails[i].setAttribute("thumbnail", i);
  images[i].setAttribute("image", i);
}

// Initialize: activate the first img
let currentImageID = 0;
updateImages();
updateSideBar();

// Add onclick eventlistener to the thumbnail wrapper
thumbnailWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("thumbnail")) {
    currentImageID = parseInt(e.target.getAttribute("thumbnail"));
    updateImages();
    updateSideBar();
  }
});

// Update the main image
function updateImages() {
  images.forEach((image) => {
    image.classList.remove("active--image");
  });
  images[currentImageID].classList.add("active--image");
}

// Update sidebar
function updateSideBar() {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active--thumbnail");
  });
  thumbnails[currentImageID].classList.add("active--thumbnail");

  const scrollAmount = 160 * 0.5 * currentImageID;
  thumbnailWrapper.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
}

const productNavBtns = document.querySelectorAll(".product-info__item");
const productInfoDivs = document.querySelectorAll(".product-info--div");

productNavBtns.forEach(function (button, i) {
  button.addEventListener("click", (e) => {
    clearButtons();
    addActiveClass(button);
    translateContent(-100 * i);
  });
});

function clearButtons() {
  productNavBtns.forEach((e) => {
    e.classList.remove("active--item");
  });
}

function addActiveClass(button) {
  button.classList.add("active--item");
}

function translateContent(amount) {
  productInfoDivs.forEach((e) => {
    e.style.transform = "translateX(" + amount + "%)";
  });
}
