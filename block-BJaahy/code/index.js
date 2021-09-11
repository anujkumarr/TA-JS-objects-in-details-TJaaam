class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
    this.numberOfTimes = 0;
  }

  description() {
    alert(`The square is ${this.width} X ${this.height}`)
  }

  calcArea() {
    return this.width * this.height;
  }

  get area() {
    this.numberOfTimes++;
    if (this.numberOfTimes > 4) {
      alert("Upper limit reached")
    } else {
      return this.width * this.height;
    }
  }

  set area(value) {
    let side = Math.sqrt(value);
    this.width = side;
    this.height = side;
  }

  static isEqual(a, b) {
    return (a.width * a.height) === (b.width * b.height);
  }
}

let square1 = new Square(40);

let square2 = new Square(100);

// user

class User{

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(fName) {
    if (fName.length < 5) {
      alert("Full name should be more than 5 characters")
    } else {
      let firstName = fName.split(" ")[0];
      let lastName = fName.split(" ")[1];
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
  }

  nameContains(str) {
    if (this.fullName.includes(str)) {
      return true;
    } else {
      return false;
    }
  }
}

let firstUser = new User("Arya", "Stark");

let secondUser = new User("Tony", "Stark");
