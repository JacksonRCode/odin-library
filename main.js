
/*
TODO
1. Finish and test add to book list.
1.1. Add addition date to the addToBookList function
2. Query selector for removing from book list.
2.1. Need icons on book cards for removing them.

*/

function Book(title, author, pageCount, releaseDate, dateAdded) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.releaseDate = releaseDate;
  this.dateAdded = dateAdded;
}

function addToBookList(bookList) {
  // Get add book button
  const addBook = document.querySelector('#addBook');
  // Get form element
  const bookForm = document.querySelector('.bookForm');
  // Get submit form button
  const confirmBook = document.querySelector('.submitBook');
  // Get close form button
  const exitForm = document.querySelector('#exitForm');
  
  addBook.addEventListener("click", () => {
    /*
      Make the book input form visible
    */
    bookForm.classList.add('open');
  });

  exitForm.addEventListener('click', () => {
    /* 
      Close the form without creating a new book
    */
    closeForm(bookForm);
  });

  confirmBook.addEventListener("click", () => {
    /*
      Create new book and add it to the library 
    */

    let book = new Book();

    // Collect inputs
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pageCount = document.getElementById('pageCount').value;
    // book.releaseDate = document.getElementById('releaseDate').value;
    // const d = new Date();
    // let mdy = (d.getUTCMonth() + 1) + '/' + d.getUTCDay() + '/' + d.getUTCFullYear()
    // book.dateAdded = mdy;

    if (!bookList.push(book)) {
      alert("Failed to add book to library");
    } 

    closeForm(bookForm);
    displayBooks(bookList);
  });
}

function closeForm(form) {
  form.classList.remove('open');
    
  // remove user input from input fields
  const inputArray = document.querySelectorAll('.formInput');
  let l = inputArray.length;

  for (let i = 0; i < l; i++) {
    inputArray[i].value = '';
  }
}

function displayBooks(bookList) {
  // Get library from html
  const libraryDiv = document.querySelector('.library');

  const cards = document.querySelectorAll('.bookCard');

  let cl = cards.length;

  for (let i = 0; i < cl; i++) {
    // Remove cards from html so that there aren't duplicates
    libraryDiv.removeChild(cards[i]);
  }


  let l = bookList.length;
  for (let i = 0; i < l; i++) {
    /* 
      Add books in booklist to the display
    */
    let book = bookList[i];

    // Create div and give it class
    const newDiv = document.createElement('div');
    newDiv.classList.add('bookCard');

    // Title
    const h2Title = document.createElement('h2');
    h2Title.classList.add('cardTitle');
    h2Title.textContent = book.title;

    // Author
    const pAuthor = document.createElement('p');
    pAuthor.textContent = 'Author: ' + book.author;

    // Pagecount
    const pPageCount = document.createElement('p');
    pPageCount.textContent = 'Pages: ' + book.pageCount; 

    // Release Date
    // const pReleaseDate = document.createElement('p');
    // pReleaseDate.textContent = 'Released: ' + book.releaseDate;

    // // Date Added
    // const pDateAdded = document.createElement('p');
    // pDateAdded.textContent = 'Date added: ' + book.dateAdded;

    // Create div for read and delete buttons
    const cardButtons = document.createElement('div');
    cardButtons.classList.add('cardButtons');

    // Read btn
    const readBtn = document.createElement('button');
    readBtn.classList.add('readBook');
    readBtn.textContent = 'read';
    readBtn.addEventListener('click', () => {
      if (!newDiv.classList.contains('read')) {
        newDiv.classList.add('read');
      } else {
        newDiv.classList.remove('read');
      }
    });
    cardButtons.appendChild(readBtn);

    // Del btn
    const dltBtn = document.createElement('button');
    dltBtn.classList.add('deleteBook');
    dltBtn.textContent = 'delete';
    dltBtn.addEventListener('click', () => {
      const library = document.querySelector('.library');
      library.removeChild(newDiv);
      removeBook(book);
    });

    cardButtons.appendChild(dltBtn);

    // Add children to newDiv
    newDiv.appendChild(h2Title);
    newDiv.appendChild(pAuthor);
    newDiv.appendChild(pPageCount);
    // newDiv.appendChild(pReleaseDate);
    // newDiv.appendChild(pDateAdded);
    newDiv.appendChild(cardButtons);
    
    // Add newDiv to library
    libraryDiv.appendChild(newDiv);
  }
}

function removeBook(book) {
  offset = 0;
  let l = bookList.length;

  for (let i = 1; i < l; i++) {
    if (bookList[i-1] === book) {
      offset = 1;
    }
    bookList[i - 1] = bookList[i - 1 + offset];
  }

  if (offset || bookList[l-1] === book) {
    bookList[l-1] = null;
  }
  bookList.pop();
}

const bookList = [];

displayBooks(bookList);
addToBookList(bookList);

