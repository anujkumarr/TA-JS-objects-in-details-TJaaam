
// Pseudoclassical pattern

function AnimalProperties(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

AnimalProperties.prototype = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`)
  },

  ChangeLocation(newLocation) {
    this.location = newLocation;
    return this.location
  },

  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`
  }
}

// dog

function Dog(name, color, location, numberOfLegs) {
  AnimalProperties.call(this,location, numberOfLegs);
  this.name = name;
  this.color = color;
}


Dog.prototype = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`)
  },

  changeName(newName) {
    this.name = newName;
    return this.name;
  },

  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },

  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  }
}

Object.setPrototypeOf(Dog.prototype, AnimalProperties.prototype);

// cat

function Cat(name, colorOfEyes, location, numberOfLegs) {
  AnimalProperties.call(this,location, numberOfLegs);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

Cat.prototype = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`)
  },

  changeName(newName) {
    this.name = newName;
    return this.name;
  },

  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },

  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes} color. I can also do meow meow`
  }


}

Object.setPrototypeOf(Cat.prototype, AnimalProperties.prototype);


// using class pattern 

class Animal{
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  
  eat() {
    console.log(`I live in ${this.location} and I can eat`)
  }

  ChangeLocation(newLocation) {
    this.location = newLocation;
    return this.location
  }

  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`
  }
}

// dog

class Dog extends Animal{
  constructor(name, color, location, numberOfLegs) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }

  bark() {
    alert(`I am ${this.name} and I can bark 🐶`)
  }

  changeName(newName) {
    this.name = newName;
    return this.name;
  }

  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }

  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  }
}

// cats

class Cat extends Animal{
  constructor(name, colorOfEyes, location, numberOfLegs) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }

  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`)
  }

  changeName(newName) {
    this.name = newName;
    return this.name;
  }

  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }

  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes} color. I can also do meow meow`
  }
}