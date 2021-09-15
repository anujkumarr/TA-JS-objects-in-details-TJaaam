
// Stack

class Stack {
  constructor(){
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
    return this.arr;
  }

  pop() {
    this.arr.pop();
  }

  peek(i = this.arr.length - 1) {
    return this.arr[i];
  }

  reverse() {
   return this.arr.reverse();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  displayStack() {
    return this.arr.join(" ");
  }

  get() {
    return this.arr.length;
  }
}


// queue

class Queue{
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr.push(item);
    return this.arr;
  }

  dequeue() {
    this.arr.shift();
    return this.arr;
  }

  peek(i = 0) {
    return this.arr[i];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  displayQueue() {
    return this.arr.join();
  }

  get() {
    return this.arr.length;
  }
}
