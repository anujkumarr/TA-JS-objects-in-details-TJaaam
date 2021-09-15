class Person{
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    return "Eat cholestrol free foods";
  }

  sleep() {
    return "Sleep is a good medication to relax our body";
  }

  walk() {
    return "Walking on daily basis keeps us healthy";
  }
}

class Player extends Person{
  constructor(sportsName, name, age, gender) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  play() {
    return "I love to play cricket";
  }
}

class Cricketer extends Player{
  constructor(teamName, sportsName, name, age, gender) {
    super(sportsName, name, age, gender);
    this.teamName = teamName;
  }

  playCricket() {
    return "I usually play cricket on weekends";
  }
}

class Teacher extends Person{
  constructor(instituteName, name, age, gender) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teach() {
    return "Always teach with concepts";
  }
}

class Artist extends Person{
  constructor(kind, name, age, gender) {
    super(name, age, gender);
    this.kind = kind;
  }

  createArt() {
    return "Rock band always rocks";
  }
}

let person = new Person ("Vasam",24,"M");

let artist = new Artist("Band", "Rock", 25,  "Male");

let teacher = new Teacher("Rebel", "Arya", 27, "Male");

let cricketer = new Cricketer("India", "Cricket",  "Dhoni", 35, "Male");

let player = new Player ("Cricket", "Kohli", 33, "Male");

