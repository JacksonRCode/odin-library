
function Book(title, author, pageCount, releaseDate, dateAdded) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.releaseDate = releaseDate;
  this.addDate = dateAdded;
}

function addToBookList(bookList) {
  const bookForm = document.querySelector('.submitBook');

  let book = new Book();

  bookForm.addEventListener("click", () => {
    // Make form visible
    bookForm.classList.add('open');

    // Collect inputs
    book.title = document.getElementById('#title').value;
    book.author = document.getElementById('#author').value;
    book.pageCount = document.getElementById('#pageCount').value;
    book.releaseDate = document.getElementById('#releaseDate').value;
  });

  if (bookList.push(book)) {
  alert("Successfully added book to book list");
  } else {
    alert("Failed to add book to library");
  } 

  bookForm.classList.remove('open');
}

function removeBook() {
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
}

function displayBooks(bookList) {
  // Get library from html
  const libraryDiv = document.querySelector('.library');

  let l = bookList.length;
  for (let i = 0; i < l; i++) {
    /* Steps:
      1. Create new div and give it a class of .bookCard
      2. Create h2 element for the book title
      3. Create p element for the rest of the book elements
      4. Add each of these elements to the newDiv as children
      5. Add newDiv to library as child
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
    pPageCount.textContent = 'Num Pages: ' + book.pageCount; 

    // Release Date
    const pReleaseDate = document.createElement('p');
    pReleaseDate.textContent = 'Released: ' + book.releaseDate;

    // Date Added
    const pDateAdded = document.createElement('p');
    pDateAdded.textContent = 'Date added: ' + book.dateAdded;

    // Add children to newDiv
    newDiv.appendChild(h2Title);
    newDiv.appendChild(pAuthor);
    newDiv.appendChild(pPageCount);
    newDiv.appendChild(pReleaseDate);
    newDiv.appendChild(pDateAdded);
    
    // Add newDiv to library
    libraryDiv.appendChild(newDiv);
  }
}

const bookList = [];

displayBooks(bookList);
addToBookList(bookList);
removeBook()
