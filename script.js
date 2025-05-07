//Array holding all the books in mylibrary
let myLibrary = [];

// Constructor to create a new book entry into myLibrary array
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.elementId = crypto.randomUUID();
  this.read = false;
}

// Adds toggleRead prototype function to the "Book" constructor
Book.prototype.toggleRead = function () {
  this.read = !this.read;
  return this.read;
};

//Event listener for form submission button
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("input-title");
  const author = formData.get("input-author");
  const pages = formData.get("input-pages")
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  displayInGrid(title, author, pages);
  this.reset();
});

//Function to cycle through array and display each book card in the grid
function displayInGrid(title, author, elementId) {
  const bookGrid = document.querySelector(".book-grid");
  bookGrid.innerHTML = "";

  for (const book of myLibrary) {
    const bookCardHTML = `
    <div class="book" id=${book.elementId}>
      <h3 class="card-title">Title: ${book.title}</h3>
      <h3 class="card-author">Author: ${book.author}</h3>
      <h3 class="card-pages">Pages: ${book.pages}</h3>
      <h3 class="card-read">Read: No</h3>
      <div class="card-button-div">
        <button id="card-remove-button">Remove</button>
        <button id="card-read-button">Read?</button>
      </div>
    </div>
  `;

    bookGrid.insertAdjacentHTML("beforeend", bookCardHTML);

    // Event listener for button to remove each book card (this is nested inside displayInGrid, so it is created when each card is created)
    document
      .getElementById(book.elementId)
      .querySelector("#card-remove-button")
      .addEventListener("click", function (event) {
        const card = this.closest(".book");
        card.remove();

        const bookIndex = myLibrary.findIndex(
          (item) => item.elementId === book.elementId
        );
        console.log(bookIndex);

        myLibrary.splice(bookIndex, 1);
        console.log(myLibrary);
      });

    // Event listener to toggle read status for each card (this is nested inside displayInGrid, so it is created when each card is created)
    document
      .getElementById(book.elementId)
      .querySelector("#card-read-button")
      .addEventListener("click", function () {
        const bookId = this.closest(".book").id;
        const book = myLibrary.find((book) => book.elementId === bookId);
        let readState = "";


        if (book) {
          book.toggleRead();

          if (book.read === false) {
            readState = "No";
          } else {
            readState = "Yes";
          }

          this.closest(".book").querySelector(
            ".card-read"
          ).textContent = `Read: ${readState}`;
        }

        console.log(myLibrary);
      });
  }

  console.log(myLibrary);
}
