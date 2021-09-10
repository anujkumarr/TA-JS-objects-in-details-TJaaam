
// Prototypal pattern

function quiz(title, options, index) {
  let obj = Object.create(quiz.prototype);
  obj.title = title;
  obj.options = options;
  obj.index = index;
  return obj;
}

quiz.prototype = {
  isAnswerCorrect(value) {
    return value === this.index;
  },
  getCorrectAnswer() {
    return this.options[this.index];
  },
}

let firstQuestion = quiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = quiz(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

// Pseudo classical pattern 

function Quiz(title, options, index) {
  this.title = title;
  this.options = options;
  this.index = index;
}

Quiz.prototype = {
  isAnswerCorrect(value) {
    return value === this.index;
  },
  getCorrectAnswer() {
    return this.options[this.index];
  },
}


let firstQuestion = new Quiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Quiz(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

// class pattern

class Quiz{
  constructor(title, options, index) {
    this.title = title;
    this.options = options;
    this.index = index;
  }
  isAnswerCorrect(value) {
    return value === this.index;
  }
  getCorrectAnswer() {
    return this.options[this.index];
  }
}

let firstQuestion = new Quiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Quiz(
  'Where is the capital of India',
  ['Delhi', 'Kolkata', 'Mumbai', 'Bengaluru'],
  0
);