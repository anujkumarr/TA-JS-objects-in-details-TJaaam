// book

class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}


  // booklist

class Booklist {
  constructor() {
    this.AllBooks = [];
    this.index = 0;
  }
  add(arr = []) {
    this.AllBooks = this.AllBooks.concat(arr);
    return this.AllBooks;
  }
  getCurrentBook() {
    return this.AllBooks[this.index];
  }
  getNextBook() {
    return this.AllBooks[this.index + 1];
  }
  getPrevBook() {
    return this.AllBooks[this.index - 1];
  }
  changeCurrentBook(num) {
    this.index = num;
  }
}

let book1 = new Book("The Old Man and the Sea", "Allegory, Nautical fiction", "Ernest Hemigway");

let book2 = new Book("Harry Potter", "Fantasy", "J K Rowling");
let book3 = new Book("Lord of the rings", "Fantasy", "Tolkins");
let book4 = new Book("Wings of fire", "Autobiography", "A P J");
let book5 = new Book("Animal Farm", "Political Satire", "Gorge Orewell");

let library = new Booklist();

library.add([book1, book2, book3, book4, book5]);