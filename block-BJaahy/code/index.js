class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  description() {
    alert(`The square is ${this.width} X ${this.height}`)
  }

  calcArea() {
    return this.width * this.height;
  }

  get area() {
    return this.calcArea
  }

  set area(calcArea) {
    this.width = calcArea;
    this.height = calcArea;
  }

  // static isEqual()

  // numberOfTimes(value = 0) {
  //   if (this.area > 4) {
  //     return "Upper Limit Reached"
  //   }

  // }
}

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
    let splitName = fName.split("");
    if (fName.length > 5) {
      this.firstName = splitName[0];
      this.lastName = splitName[1];
    } else {
      return "Full Name should be more than 5 characters"
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
