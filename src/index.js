// Library
import { bookList } from "./books";

function Book(title, author, genre, pages) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.details = function (book) {
    return `
    📖 title: ${book.title} \n
    🧑: ${book.author}
    `;
  };
  this.updatePages = function (newPages) {
    // How many pages you want to write
    this.pages = this.pages + newPages;
    console.log(this.title + " now has " + this.pages + "pages");
  };
}

var library = {
  books: [],
  addBook(bookObj) {
    this.books.push(bookObj);
    this.showAllBooks();
  },
  importBooks(booksArray) {
    for (var count = 0; count < booksArray.length; count++) {
      this.addBook(
        new Book(
          bookList[count].title,
          bookList[count].author,
          bookList[count].pages,
          bookList[count].genre
        )
      );
    }
    this.showAllBooks();
  },
  findBookByTitle(bookTitle) {
    for (var count = 0; count < this.books.length; count++) {
      if (bookTitle === this.books[count].title) {
        return this.speak("You found me!");
      }
    }
  },
  removeBookByTitle(bookTitle) {
    console.log("Removed book");
    for (var count = 0; count < this.books.length; count++) {
      if (bookTitle === this.books[count].title) {
        this.books.splice(count, 1);
        return this.speak(`The book ${bookTitle} has been removed!`);
      }
    }
  },
  showAllBooks() {
    for (var count = 0; count < this.books.length; count++) {
      this.speak(this.displayBook(this.books[count]));
    }
  },
  speak(message) {
    console.log(message);
  },
  displayBook(bookObj) {
    // help display books, not required for final project
    return `
    📖 title: ${bookObj.title} \n
    🧑: ${bookObj.author}
    `;
  },
};

var harryPotter = new Book("title", "asdf", "askldfj", "sdfkjsk");
harryPotter.updatePages(100);

library.addBook(harryPotter);
library.importBooks(bookList);
library.findBookByTitle("title");
library.removeBookByTitle("title");
library.showAllBooks();
