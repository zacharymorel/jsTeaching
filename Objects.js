// OPTION A USING OBJECT.CREATE OR FACTORY FUNCTIONS

function sayHello() {
  console.log("Hello my name is " + this.name)
}

var person = {
  name: "",
  weight: "",
  height: "",
  sex: "",
  greet: sayHello,
}

// function person (n, w, h, s) {
//   return {
//     name: n,
//     weight: w,
//     height: h,
//     sex: s,
//     greet: sayHello
//   }
// }
//---- FF  ----- //
// var Rebecca = person('rebecca', 150, "5'10", 'female')

// Object literal //
var Rebecca = Object.create(person)
Rebecca.name = "Rebecca"
Rebecca.weight = 150
Rebecca.height = "5'10"
Rebecca.sex = "female"
Rebecca.greet()
console.log(Rebecca)

// OPTION B USING constructor FUNCTIONS
// Dev has to use the new keyword inorder to instantiate an object
function createPerson(n, w, h, s, sibling) {
  this.name = n
  this.weight = w
  this.height = h
  this.sex = s
  this.sibling = sibling
  this.greet = sayHello
}
var Ethan = new createPerson("Ethan", 180, "5'11", "male", Rebecca)
console.log(Ethan.sibling.name)
