"use strict";
class Stack {
  constructor(stack) {
    this.stack = [];
    if (stack !== undefined && stack !== null) this.stack = stack;
  }

  get getStack() {
    return this.stack;
  }

  set setStack(stack) {
    if (stack !== undefined && stack !== null && stack.length)
      this.stack = stack;
    else console.error("The Stack you gave was not an array");
  }

  pop() {
    let tempArr = [];
    for (let i = 0; i < this.stack.length; i++) {
      if (i !== this.stack.length - 1) tempArr[i] = this.stack[i];
    }
    this.stack = tempArr;
  }

  add(val) {
    this.stack[this.stack.length] = val;
  }

  unshift(val) {
    let tempArr = [val];
    for (let i = 0; i < this.stack.length; i++) {
      tempArr[i + 1] = this.stack[i];
    }
    this.stack = tempArr;
  }
}

let s = new Stack(["a", "b", "c"]);
console.log(s.getStack);
s.add("d");
console.log(s.getStack);
s.unshift("0");
console.log(s.getStack);
s.setStack = [1, 2, 3];
// s.setStack = ""
console.log(s.getStack);
s.pop();
console.log(s.getStack);
