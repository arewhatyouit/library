//Sample books to pre-populate myLibrary array
//  const hyperion = {
//   title: "Hyperion",
//   author: "Dan Simmons",
//   id: crypto.randomUUID(),
//   read: true
// };

// const hobbit = {
//   title: "The Hobbit",
//   author: "JRR Tolken",
//   id: crypto.randomUUID(),
//   read: true
// };

// const stars = {
//   title: "The Stars Our Destination",
//   author: "Alfred Bester",
//   id: crypto.randomUUID(),
//   read: true
// };

//Array holding all the books in my library
let myLibrary = [];

// Constructor to create a new book entry into myLibrary array
function Book(title, author, read = false) {
  this.title = title;
  this.author = author;
  this.elementId = crypto.randomUUID();
  this.read = read;
}


//Event listener for form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("input-title");
  const author = formData.get("input-author");
  let newBook = new Book(title, author);
  myLibrary.push(newBook);
  displayInGrid(title, author);
  this.reset();
});

//Function to cycle through array and display in the grid
function displayInGrid(title, author, elementId) {
  const bookGrid = document.querySelector(".book-grid");
  bookGrid.innerHTML = "";
  let readOutput = "";

  for (const book of myLibrary) {
    const bookCardHTML = `
    <div class="book" id=${book.elementId}>
      <h3 class="card-title">Title: ${book.title}</h3>
      <h3 class="card-author">Author: ${book.author}</h3>
      <h3 class="card-read">Read: ${book.read}</h3>
      <div class="card-button-div">
        <button id="card-remove-button">Remove</button>
        <button id="card-read-button">Read?</button>
      </div>
    </div>
  `;

    bookGrid.insertAdjacentHTML("beforeend", bookCardHTML);

    document
      .getElementById(book.elementId)
      .querySelector("#card-remove-button")
      .addEventListener("click", function (event) {
        const card = this.closest(".book");
        card.remove();

        const bookIndex = myLibrary.findIndex(item => item.elementId === book.elementId);
        console.log(bookIndex);

        myLibrary.splice(bookIndex, 1);
        console.log(myLibrary);
      });

      document
      .getElementById(book.elementId);
      .querySelector("#card-read-button");
      .addEventListener("click", function (event) {
//FIXME Create a prototype to set each library book card as read when clicking the "read" button.
      })
  };

  console.log(myLibrary);
};

