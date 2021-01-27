"use strict";

// DECLARATIVE
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  set setName(value) {
    this.name = value;
  }

  get getName() {
    return this.name;
  }

  sayName() {
    console.log("Class " + this.name + " was created declaratively.");
  }

  sayHistory() {
    console.log(
      '"Polygon" is derived from the Greek polus (many) ' + "and gonia (angle)."
    );
  }
}

let p = new Polygon(300, 400);
p.sayName();
console.log("My width is ", p.width);
console.log(" ---------------------------------------- ");
/**
 *
 *
 *
 * SPACER
 *
 *
 *
 *  */
// EXPRESSION
const MyPoly2 = class Poly {
  // note, no defined constructor, which means it will used a default constructor instead:
  // constructor() { }

  getPolyName() {
    console.log(
      "MyPoly2 was created with a class expression. My name is ",
      Poly.name
    );
  }
};

let poly2 = new MyPoly2();
poly2.getPolyName();
console.log(" ---------------------------------------- ");
/**
 *
 *
 *
 * SPACER
 *
 *
 *
 *  */
// EXTENDING
class Square extends Polygon {
  // EXTENDING A CLASS, THIS NEW CLASS NEEDS A CONSTRUCTOR
  constructor(length) {
    // SUPER HAS TO BE CALLED IN ORDER TO CALL THE EXTENDED CLASSES CONSTRUCTOR & BEFORE THIS CAN BE USED
    super(length, length);
  }

  // GETTER AND SETTERS
  set setArea(val) {
    this.area = val;
  }

  get getArea() {
    return this.area;
  }

  get calcArea() {
    return this.height + this.width;
  }
}

console.log("Class Sqaure extends Polygon");
let square = new Square(5);
// square.sayName()
square.name = "New Square Name"; // SETTER ON SQ CLASS
console.log("Square name getter: ", square.name);
console.log("Calc Area: ", square.calcArea);
square.setArea = 100;
console.log("Get Area: ", square.getArea);
console.log(" ---------------------------------------- ");
/**
 *
 *
 *
 * SPACER
 *
 *
 *
 *  */
// SUBCLASSING
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  sayName() {
    console.log(
      "I am a Subclass Method and I will override superclass method, name: " +
        this.name
    );
  }
}
let r = new Rectangle(50, 60);
r.sayName();
console.log(" ---------------------------------------- ");
/**
 *
 *
 *
 * SPACER
 *
 *
 *
 *  */
// Static Methods
class Triple {
  static triple(n) {
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  // super.prop allows you to access super-properties from a parent class.
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}
console.log("Static Methods");
console.log(Triple.triple(3));
console.log(BiggerTriple.triple(3));
