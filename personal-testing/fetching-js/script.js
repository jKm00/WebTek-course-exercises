const input = document.querySelector("input");
const button = document.querySelector("button");
const bookContainer = document.querySelector(".book-container");
const bookTitle = bookContainer.querySelector(".title");
const bookYear = bookContainer.querySelector(".year");
const bookPages = bookContainer.querySelector(".pages");

async function fetchData(id) {
  let book;
  await fetch("http://localhost:8080/books/" + id)
    .then((response) => response.json())
    .then((data) => (book = data));
  displayBook(book);
}

button.addEventListener("click", (e) => {
  const bookId = input.value;
  if (bookId != "") {
    fetchData(bookId);
  }
});

function displayBook(book) {
  console.log(book);
  bookTitle.innerHTML = book.title;
  bookYear.innerHTML = book.year;
  bookPages.innerHTML = book.numberOfPages;
}
