


// function Book(title, author, pageCount, releaseDate, dateAdded) {
//   this.title = title;
//   this.author = author;
//   this.pageCount = pageCount;
//   this.releaseDate = releaseDate;
//   this.dateAdded = dateAdded;
// }

// function addToBookList(bookList) {
//   // Get add book button
//   const addBook = document.querySelector('#addBook');
//   // Get form element
//   const bookForm = document.querySelector('.bookForm');
//   // Get submit form button
//   const confirmBook = document.querySelector('.submitBook');
//   // Get close form button
//   const exitForm = document.querySelector('#exitForm');
  
//   addBook.addEventListener("click", () => {
//     /*
//       Make the book input form visible
//     */
//     bookForm.classList.add('open');
//   });

//   exitForm.addEventListener('click', () => {
//     /* 
//       Close the form without creating a new book
//     */
//     closeForm(bookForm);
//   });

//   confirmBook.addEventListener("click", () => {
//     /*
//       Create new book and add it to the library 
//     */

//     let book = new Book();

//     // Collect inputs
//     book.title = document.getElementById('title').value;
//     book.author = document.getElementById('author').value;
//     book.pageCount = document.getElementById('pageCount').value;
//     // book.releaseDate = document.getElementById('releaseDate').value;
//     // const d = new Date();
//     // let mdy = (d.getUTCMonth() + 1) + '/' + d.getUTCDay() + '/' + d.getUTCFullYear()
//     // book.dateAdded = mdy;

//     if (!bookList.push(book)) {
//       alert("Failed to add book to library");
//     } 

//     closeForm(bookForm);
//     displayBooks(bookList);
//   });
// }

// function closeForm(form) {
//   form.classList.remove('open');
    
//   // remove user input from input fields
//   const inputArray = document.querySelectorAll('.formInput');
//   let l = inputArray.length;

//   for (let i = 0; i < l; i++) {
//     inputArray[i].value = '';
//   }
// }

// function displayBooks(bookList) {
//   // Get library from html
//   const libraryDiv = document.querySelector('.library');

//   const cards = document.querySelectorAll('.bookCard');

//   let cl = cards.length;

//   for (let i = 0; i < cl; i++) {
//     // Remove cards from html so that there aren't duplicates
//     libraryDiv.removeChild(cards[i]);
//   }


//   let l = bookList.length;
//   for (let i = 0; i < l; i++) {
//     /* 
//       Add books in booklist to the display
//     */
//     let book = bookList[i];

//     // Create div and give it class
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('bookCard');

//     // Title
//     const h2Title = document.createElement('h2');
//     h2Title.classList.add('cardTitle');
//     h2Title.textContent = book.title;

//     // Author
//     const pAuthor = document.createElement('p');
//     pAuthor.textContent = 'Author: ' + book.author;

//     // Pagecount
//     const pPageCount = document.createElement('p');
//     pPageCount.textContent = 'Pages: ' + book.pageCount; 

//     // Release Date
//     // const pReleaseDate = document.createElement('p');
//     // pReleaseDate.textContent = 'Released: ' + book.releaseDate;

//     // // Date Added
//     // const pDateAdded = document.createElement('p');
//     // pDateAdded.textContent = 'Date added: ' + book.dateAdded;

//     // Create div for read and delete buttons
//     const cardButtons = document.createElement('div');
//     cardButtons.classList.add('cardButtons');

//     // Read btn
//     const readBtn = document.createElement('button');
//     readBtn.classList.add('readBook');
//     readBtn.textContent = 'read';
//     readBtn.addEventListener('click', () => {
//       if (!newDiv.classList.contains('read')) {
//         newDiv.classList.add('read');
//       } else {
//         newDiv.classList.remove('read');
//       }
//     });
//     cardButtons.appendChild(readBtn);

//     // Del btn
//     const dltBtn = document.createElement('button');
//     dltBtn.classList.add('deleteBook');
//     dltBtn.textContent = 'delete';
//     dltBtn.addEventListener('click', () => {
//       const library = document.querySelector('.library');
//       library.removeChild(newDiv);
//       removeBook(book);
//     });

//     cardButtons.appendChild(dltBtn);

//     // Add children to newDiv
//     newDiv.appendChild(h2Title);
//     newDiv.appendChild(pAuthor);
//     newDiv.appendChild(pPageCount);
//     // newDiv.appendChild(pReleaseDate);
//     // newDiv.appendChild(pDateAdded);
//     newDiv.appendChild(cardButtons);
    
//     // Add newDiv to library
//     libraryDiv.appendChild(newDiv);
//   }
// }

// function removeBook(book) {
//   offset = 0;
//   let l = bookList.length;

//   for (let i = 1; i < l; i++) {
//     if (bookList[i-1] === book) {
//       offset = 1;
//     }
//     bookList[i - 1] = bookList[i - 1 + offset];
//   }

//   if (offset || bookList[l-1] === book) {
//     bookList[l-1] = null;
//   }
//   bookList.pop();
// }

// const bookList = [];

// displayBooks(bookList);
// addToBookList(bookList);

class Book {
  constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = 0;
    this.favourite = 0;
  }

  get info() {
    return [this.title, this.author, this.pageCount];
  }

  get getRead() {
    return this.read === 1 ? "Read" : "Not read";
  }

  get getFavourite() {
    return this.favourite === 1 ? "Favourite" : "Not favourite";
  }

  set setRead(bool) {
    if (bool !== null) {
      this.read = bool;
    } else {
      this.read = this.read === 0 ? 1 : 0;
    }
  }

  set setFavourite(bool) { 
    if (bool !== null) {
      this.favourite = bool;
    } else {
      this.favourite = this.favourite === 0 ? 1 : 0;
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.bookList = [];
  }

  get getName() {
    return this.name;
  }

  get getBooks() {
    return this.bookList;
  }

  set addBook(book) {
    this.bookList.push(book);
  }

  removeBook(book) {
    const l = this.bookList.length
    let offset = 0;

    for (let i = 0; i < l; i++) {
      if (this.bookList[i] === book) {
        offset = 1;
      }
      if (offset) {
        this.bookList[i] = this.bookList[i+offset];
      }
    }
    if (offset) {
      this.bookList.pop();
    }
  }
}

class Library {
  constructor(user) {
    this.user = user;
    this.books = []; //this.user.getBooks;
    this.fBooks = [];
    this.htmlLibrary = document.querySelector('.library');
  }

  fetchBooks() {
    this.books = this.user.getBooks;
  }

  formatBook(book) {
    /*
      Creates book card ready to insert into html library

      Parameters: book

      Returns: formatted card "newCard"
    */

    // Create html elements
    const newCard = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    
    // Give elements classes
    newCard.classList.add('bookCard');
    title.classList.add('cardTitle');
    btnDiv.classList.add('cardButtons');
    readBtn.classList.add('readBook');
    deleteBtn.classList.add('deleteBook');

    // Give elements content
    const info = book.info;
    title.textContent = info[0];
    author.textContent = `Author: ${info[1]}`;
    pages.textContent = `Pages: ${info[2]}`;
    readBtn.textContent = 'read';
    deleteBtn.textContent = 'remove';

    // Event Listeners
    readBtn.addEventListener('click', () => {
      book.setRead = null;
      if (!newCard.classList.contains('read')) {
        newCard.classList.add('read');
      } else {
        newCard.classList.remove('read');
      }
    });
    // deleteBtn.addEventListener('click', this.deleteEvent(newCard, book));
    deleteBtn.addEventListener('click', () => {
      const lib = document.querySelector('.library');
      lib.removeChild(newCard);
      this.removeBook(book); 
    });

    // Add buttons to btnDiv
    btnDiv.appendChild(readBtn);
    btnDiv.appendChild(deleteBtn);

    // Add elements to newCard
    const elements = [title, author, pages, btnDiv];
    for (let i = 0; i < elements.length; i++) {
      newCard.appendChild(elements[i]);
    }
    
    this.fBooks.push(newCard);
  }

  injectLibrary() {
    /*
      Sequentially injects each formatted book into the library
    */

    const l = this.fBooks.length;

    for (let i = 0; i < l; i++) {
      this.htmlLibrary.appendChild(this.fBooks[i]);
    }
  }

  emptyLibrary() {
    const currentCards = document.querySelectorAll('.bookCard');
    let cl = currentCards.length;

    for (let i = 0; i < cl; i++) {
      
      this.htmlLibrary.removeChild(currentCards[i]);
    }
  }

  addBook(book) {
    /* 
      This function adds the new book to the users library, formats it, and then
      adds it to the html library
    */

    this.user.addBook = book;
    this.books.push(book);

    this.formatBook(book);
    const l = this.fBooks.length;
    this.htmlLibrary.appendChild(this.fBooks[l-1]);
  }

  removeBook(book) {
    /*
      Parameters: book --> unformatted book object from this.books
    */
    this.user.removeBook(book);

    const l = this.books.length;
    let offset = 0;

    for (let i = 0; i < l; i++) {
      if (this.books[i] === book) {
        offset = 1;
      }
      if (offset) {
        this.books[i] = this.books[i+offset];
        this.fBooks[i] = this.fBooks[i+offset];
      }
    }
    if (offset) {
      this.books.pop();
      this.fBooks.pop();
    }

    this.emptyLibrary();
    this.injectLibrary();
  }
}

(function Control() {
  const user1 = new User('bookLover');
  const lib = new Library(user1);
  lib.fetchBooks;

  const closeForm = (form) => {
  form.classList.remove('open');
    
    // remove user input from input fields
    const inputArray = document.querySelectorAll('.formInput');
    let l = inputArray.length;

    for (let i = 0; i < l; i++) {
      inputArray[i].value = '';
    }
  }

  const getFormInputs = () => {
    // Collect inputs
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageCount = document.getElementById('pageCount').value;

    return [title, author, pageCount];
  }

  const formListeners = () => {

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

      // Get input values
      const values = getFormInputs();
      
      // Create book object
      const book = new Book(values[0], values[1], values[2]);

      // Add book to library (and user)
      lib.addBook(book);

      closeForm(bookForm);
    });
  }

  formListeners();
      
})();

// let a = new Book('a', 'me', 333);

// console.log(a.getRead);
// a.setRead = 0;
// console.log(a.getRead);
// a.setFavourite = 0;
// console.log(a.getFavourite);

// let b = new Book('b', 'me', 332);

// let jackson = new User('Jackson');
// jackson.addBook = a;
// jackson.addBook = b;
// console.log("Books " + jackson.bookList[0]);

// let lib = new Library(jackson);

