"use strict";
// PRE ES6 (2015) This is a constructor function which returns a Javascript Object
// Great Reference to explaining the inheritance chain. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
function Person(name, age, gender) {
  this.name = name !== undefined ? name : "John";
  this.age = age !== undefined ? age : 0;
  this.gender = gender !== undefined ? gender : "?";
  this.goodBye = function () {
    console.log("Good Bye", this.name, ".");
  };
}

Person.prototype.greet = function () {
  console.log("Hello " + this.name + "!");
};

var John = new Person("John", 21, "M");
John.greet();
John.goodBye();
console.log(John);
