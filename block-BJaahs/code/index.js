let title = "JavaScript";
let options = ["HTML", "CSS", "JavaScript"];
let correctAnswerIndex = 2;
// without object
function isAnswerCorrect(index) {
  if (index === correctAnswerIndex) {
    return true;
  } else {
    return false;
  }
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// using object
let quiz = {
  title: title,
  options: options,
  correctAnswerIndex: correctAnswerIndex,
  isAnswerCorrect: function isAnswerCorrect(index){
  if (index === correctAnswerIndex) {
    return true;
  } else {
    return false;
  }
  },

  getCorrectAnswer: function getCorrectAnswer() {
  return options[correctAnswerIndex];
  }
}

// using function

function quizApp(title,options,correctAnswerIndex) {
  let obj = {};
    obj.title = title,
    obj.options = options,
    obj.correctAnswerIndex = correctAnswerIndex,

    obj.isAnswerCorrect = function (index) {
    if (index === obj.correctAnswerIndex) {
    return true;
    } else {
    return false;
    }
  }
  
  obj.getCorrectAnswer = function getCorrectAnswer() {
  return obj.options[correctAnswerIndex];
  }
  
  return obj;
}

// using this keyword

function quizAppTwo(title,options,correctAnswerIndex) {
  let obj = {};
    obj.title = title,
    obj.options = options,
    obj.correctAnswerIndex = correctAnswerIndex,

    obj.isAnswerCorrect = function (index) {
    if (index === this.correctAnswerIndex) {
    return true;
    } else {
    return false;
    }
  }
  
  obj.getCorrectAnswer = function getCorrectAnswer() {
  return this.options[correctAnswerIndex];
  }
  
  return obj;
}

let firstQuestion = quizApp("Capital of Spain", ["Madrid", "Sevilla", "Barcelona", "Las Palmas"], 0);
let secondQuestion = quizAppTwo("Capital of USA", ["New York", "Washington DC", "Texas", "California"], 1);