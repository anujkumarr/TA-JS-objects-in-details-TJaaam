// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sayHello = function () {
    alert(`Welcome ${obj.name}`);
  }
  return obj;
}

let user = createUser("Arya", 24);

user.sayHello();


// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("Stark", 22);
let personTwo = createUser("Lannister", 20);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let userMethod = {
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}

function createUser(name, age) {
  let obj = Object.create(userMethod);
  obj.name = name;
  obj.age = age;
  return obj;
}
let personOne = createUser("Stark", 22);
let personTwo = createUser("Lannister", 20);


// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function createUser(name, age) {
  let obj = Object.create(createUser.prototype);
  obj.name = name;
  obj.age = age;
  return obj;
}

createUser.prototype = {
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}
let personOne = createUser("Stark", 22);
let personTwo = createUser("Lannister", 20);



// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

CreateUser.prototype = {
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}
let personOne = new CreateUser("John", 26);
let personTwo = new CreateUser("Arya", 24);


// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello();
personTwo.sayHello();

// 8. Convert the `createUser` function into `User` class.

class User{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

let personOne = new User("Kohli", 30);
let personTwo = new User("Dhoni", 38);


// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello();
personTwo.sayHello();