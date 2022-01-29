'use strict';

function calcAge(year) {
  const age = 2022 - year;

  //   console.log(firstName); // scope chain look up hence we get the output
  function printAge() {
    //whay happens if we redefine the outer scope variable
    let output = `${firstName}, is ${age}s old and born in ${year}`; //says poorna..
    console.log(output);
    //for proving let const are block variables and var is function variable
    if (year >= 1992 && year <= 2020) {
      var millenium = true;
      //trying to prove JS engine will look for variable in current scope first
      const firstName = 'hero'; // the output returns as ..... poorna because it is declared in current scope first

      const str = `oh you are a millenium. ${firstName}`; //says hero
      console.log(str);
      // Lets us prove functions are blocked scope om Es6

      function add(a, b) {
        return a + b;
      }
      output = 'NewOutPut!'; // reassigning the outer scope variable
      console.log(output); //redfined the variable
      const x = add(3, 6);
      console.log(x); // this works because this is inside block
    }
    // console.log(str); //this does not work because const and let are block variables
    console.log(millenium); //this works because the type is var and it is a functional variable

    // const x = add(3, 6);//we declared this out side block
    // console.log(x);
  }
  printAge();
  return age;
}
//global variable
const firstName = 'poorna';
calcAge(1998);

//Hoisting

//samples for variables
// console.log(me); //undefined
// console.log(job); //error:Cannot access 'job' before initialization i.e., in TDz
// console.log(year); //Cannot access 'year' before initialization i.e., in TDz
//let us see what happens if we use them before declerations

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//samples for functions

//calling function declearation before intialization
const final = addi(10, 5);
console.log(final); // fnction decleration : this one works and gives the out put as 15

//calling function expression before initialozation
// const fina = total(10, 6);
// console.log(fina); //function expression, gives an error Cannot access 'total' before initialization

//calling arrow function before initialization
// mul(1, 5); //gives the error cannot access 'mul' before initialization

//function declearation
function addi(a, b) {
  return a + b;
}
//function expression
const total = function (a, b) {
  // as this starts with const it is in temp dead zone
  return a - b;
};

//arrow functions:
const mul = (a, b) => a * b;

//fictional function example
console.log(undefined);
//it shows the output in console
if (!products) deleteAllProducts();
//In above line we are using products which is a var type so output will be undefined but this still works
// because if(not undefined) then it deletes all products
//hence use const most of time
var products = 10;

function deleteAllProducts() {
  console.log('delete all products');
}
//declare varaiables in top of code. looks better
// always declare the functions and then use them only after declearations

//this keyword practise
console.log(this);

// inside a regular function call

const age = function (birthyear) {
  console.log(2030 - birthyear);
  console.log(this);
};
age(1999);
// says undefined in regular function call because the function is not attached to any object

//let see if this is an arrow function
const ageArrow = birthyear => {
  console.log(2030 - birthyear);
  console.log(this);
};
ageArrow(1999);

//returns a window, because the arrow function doesnot gets own this keyword.
//it picks up from lexical scope means it takes from parents scope
//window is the this keyword in global scope refer line 96

// this keyword inside of a method

const jonas = {
  year: 1991,
  job: 'teacher',
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

//the output gives the complete object after this keyword is used
//reason the owner is jonas object, this keyword points to the owner object which calls the function
