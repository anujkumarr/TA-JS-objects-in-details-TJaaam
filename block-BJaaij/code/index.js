// book

  class Book{
    constructor(title, category, author, isRead= false, finishedDate) {
      this.title = title;
      this.category = category;
      this.author = author;
      this.isRead = isRead;
      this.finishedDate = finishedDate;
    }
    
    markBookAsRead() {
      this.isRead = true;
      this.finishedDate = Date.now();
    }
  }

  class BookList{
    constructor() {
      this.allBooks = [];
      this.index = 0;
    }

    add(bookArr) {
      return this.allBooks.push(bookArr);
    }

    getCurrentBook(index) {
      return this.allBooks[this.index];
    }

    getNextBook(index) {
      return this.allBooks[this.index + 1];
    }

    getNextBook(index) {
      return this.allBooks[this.index - 1];
    }

    changeCurrentBook(value) {
      return this.index = 0;
    }


  }