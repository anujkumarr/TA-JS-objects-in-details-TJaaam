// animal methods
let animalMethods = {
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

//create animal

function animalProperties(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

// dog
let dogMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark`)
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


function dog(name, color, location, numberOfLegs) {
  let createDog = animalProperties(location, numberOfLegs);
  Object.setPrototypeOf(createDog, dogMethods)
  createDog.name = name;
  createDog.color = color;

  return createDog;
}

Object.setPrototypeOf(dogMethods, animalMethods);

// cat

let catMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow`)
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

function cat(name, colorOfEyes, location, numberOfLegs) {
  let createCat = animalProperties(location, numberOfLegs);
  Object.setPrototypeOf(createCat, catMethods)
  createCat.name = name;
  createCat.colorOfEyes = colorOfEyes;
  
  return createCat;
}

Object.setPrototypeOf(catMethods, animalMethods);