let form = document.querySelector(".form");
let bookList = document.querySelector(".bookList");

const nameElm = document.getElementById("author");
const titleElm = document.getElementById("title");
const isbnElm = document.getElementById("isbn");
const bookImgElm = document.getElementById("book-img");

class BookList {
    constructor(root, list = []) {
        this.books =  list;
        this.root = root;
    }
    add(title, author, bookImg, isbn) {
        let book = new Book(title, author, bookImg, isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id) {
        let index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }
    createUI () {
        this.root.innerHTML = "";
        this.books.forEach((book) => {
        let ui = book.createUI();
         ui.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.id));
         this.root.append(ui);
        });
        
    } 
}

class Book {
    constructor(title, author, bookImg, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.bookImg = bookImg;     
        this.isRead = false;
        this.id =  `id-${Date.now()}`;
    }
    toggleIsRead() {
        this.isRead = !this.isRead;
        new BookList(bookList, library.books).createUI();
    }
    createUI(){
            let li = document.createElement("li");
            let deleteElm = document.createElement("span");
            deleteElm.innerText = "❌";            
            let bookCover =  document.createElement("img");
            bookCover.src = this.bookImg;
            let coverContainer = document.createElement("div");
            coverContainer.append(bookCover);
            let title = document.createElement("h3");
            title.innerText = this.title;
            let author = document.createElement("p");
            author.innerText = this.author;
            let isbn = document.createElement("p");
            isbn.innerText = `ISBN: ${this.isbn}`;
            let button = document.createElement("button");
            button.addEventListener("click", this.toggleIsRead.bind(this));
            button.innerText = this.isRead ? "Read Already" : "Yet to Read";
            button.style.background = this.isRead ? "green" : "red";

            li.append(deleteElm, coverContainer, title, author, isbn, button);
            return li;
    }
      
}


let library = new BookList(bookList);
library.add("Harry Potter", "J.K Rowling", "https://i.guim.co.uk/img/media/1d4b16d4c6703e9bec9174f1cadc278026de0647/0_75_1280_768/master/1280.jpg?width=1200&quality=85&auto=format&fit=max&s=9fa140210db6cb53ee74b8f9ce03267e", "9780451526342");
library.add("Two States", "Chetan Bhagat", "http://scribblesofsoul.com/wp-content/uploads/2011/09/2-states-chetan-bhagat.jpg", "978-0099908401");




function handleSubmit(event) {
    event.preventDefault();
    const name = nameElm.value;
    const title = titleElm.value;
    const bookImg = bookImgElm.value;
    const isbn = isbnElm.value;
    library.add(name, title, bookImg, isbn);

    nameElm.value = "";
    titleElm.value = "";
    bookImgElm.value = "";
    isbnElm.value = "";
}
form.addEventListener("submit", handleSubmit);