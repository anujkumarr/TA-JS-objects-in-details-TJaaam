
// using function

function user(name, id, noOfProjects) {
  let studentInfo = {};

  studentInfo.name = name;
  studentInfo.id = id;
  studentInfo.noOfProjects = noOfProjects;

   studentInfo.getProjects = function(){
    return studentInfo.noOfProjects;
   },
   
     studentInfo.changeName = function (newName) {
     let prevName = studentInfo.name;
     studentInfo.name = newName;
     return prevName;
   }
   
  studentInfo.incrementProject = function (value = 0) {
    return studentInfo.noOfProjects = studentInfo.noOfProjects + value;
  }

  studentInfo.decrementProject = function (value = 0) {
    return studentInfo.noOfProjects = studentInfo.noOfProjects - value;
  }
  return studentInfo;
}

let student1 = user("Anuj", "J0765", 4);
let student2 = user("Arya", "J102", 10);

// using Object.create (prototypal pattern)

let userMethods = {
  getProjects(){
    return this.noOfProjects;
   },
   
  changeName(newName) {
    let prevName = this.name;
     this.name = newName;
     return prevName;
   },
   
  incrementProject(value = 0) {
    return this.noOfProjects = this.noOfProjects + value;
  },

  decrementProject(value = 0) {
    return this.noOfProjects = this.noOfProjects - value;
  },
}

function user(name, id, noOfProjects) {
  let studentInfo = Object.create(userMethods)
  studentInfo.name = name;
  studentInfo.id = id;
  studentInfo.noOfProjects = noOfProjects;
  return studentInfo;
}

let student1 = user("Anuj", "J0765", 4);
let student2 = user("Arya", "J102", 10);

// pseudoclassical way


function User(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

User.prototype = {
  getProjects(){
    return this.noOfProjects;
   },
   
  changeName(newName) {
     let prevName = this.name;
     this.name = newName;
     return prevName;
   },
   
  incrementProject(value = 0) {
    return this.noOfProjects = this.noOfProjects + value;
  },

  decrementProject(value = 0) {
    return this.noOfProjects = this.noOfProjects - value;
  },
}

let student1 = new User("Anuj", "J0765", 4);
let student2 = new User("Arya", "J102", 10);

// class pattern

class User{
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects(){
    return this.noOfProjects;
   }
   
  changeName(newName) {
     let prevName = this.name;
     this.name = newName;
     return prevName;
   }
   
  incrementProject(value = 0) {
    return this.noOfProjects = this.noOfProjects + value;
  }

  decrementProject(value = 0) {
    return this.noOfProjects = this.noOfProjects - value;
  }
}

let student1 = new User("Anuj", "J0765", 4);
let student2 = new User("Arya", "J102", 10);