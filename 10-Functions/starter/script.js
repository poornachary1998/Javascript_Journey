'use strict';
/*
DEFAULT PARAMETERS

const bookings = [];

const createBooking = function (
  flightName,
  numPass = 2,
  price = 199 * numPass
) {
  // Short ciruting ES5
  //   numPass = numPass || 1;
  //   price = price || 199;
  //   {flightName: 'AB124', numPass: 1, price: 199}
  const booking = {
    flightName,
    numPass,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
  //   0: {flightName: 'AB124', numPass: 2, price: 398}
  // 1: {flightName: 'd;ec', numPass: 2, price: 223}
  // 2: {flightName: 'efe', numPass: 2, price: 22}
};

createBooking('AB124');
// {flightName: 'AB124', numPass: undefined, price: undefined}
// Now we are using short circuiting to remove undefined
createBooking('d;ec', 2, 223);
// {flightName: 'd;ec', numPass: 2, price: 223}

createBooking('efe', undefined, 22);
// {flightName: 'efe', numPass: 1, price: 22}
// to skip any middle argument use undefined

*/
/*

// CALL BY VALUE VS REFERENCE
const flight = 'AB!23'; //primitive data type
const jonas = {
  namef: 'jonas sched',
  passport: 984956,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'CD234';
  passenger.namef = 'MR. ' + passenger.namef;

  if (passenger.passport === 984956) {
    alert('Check IN');
  } else {
    alert('OUT!!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
// AB!23
// {namef: 'MR. jonas sched', passport: 984956}

// realtime challenge

const newPassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jonas);
checkIn(flight, jonas);

*/
//
// oneWord function
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
// upperFirstWord function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High order function
const transformer = function (str, fn) {
  console.log(`original String: ${str}`);

  console.log(`transformedString is: ${fn(str)}`);

  console.log(`trnasformed function name is ${fn.name}`);
};

transformer('Javascript is the best language', upperFirstWord);
/*
original String: Javascript is the best language
transformedString is: JAVASCRIPT is the best language
trnasformed function name is upperFirstWord
*/
transformer('Javascript is the best language', oneWord);
/*
original String: Javascript is the best language
transformedString is: javascriptisthebestlanguage
trnasformed function name is oneWord
*/

// function returning the new functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet('HI');
greeter('Jonas');
greeter('Poorna');

// or
greet('Hi')('Jonas');

// the same code in arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

// call and apply methods

const tata = {
  airline: 'Tata',
  iatacode: 'TA',
  bookings: [],
  // book:function(){};
  book(flightNum, name) {
    console.log(
      `${name} booked the flight ${this.airline} and the seat number is ${this.iatacode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iatacode}, ${flightNum}`, name });
  },
};
tata.book(1, 'poorna');
// poorna booked the flight Tata and the seat number is TA1

tata.book(2, 'chary');
// chary booked the flight Tata and the seat number is TA2

console.log(tata);
/*
{airline: 'Tata', iatacode: 'TA', bookings: Array(2), book: ƒ}
airline: "Tata"
book: ƒ book(flightNum, name)
bookings: Array(2)
0: {flight: 'TA, 1', name: 'poorna'}
1: {flight: 'TA, 2', name: 'chary'}
length: 2
[[Prototype]]: Array(0)
iatacode: "TA"
[[Prototype]]: Object */

// Now tata group acquired the eurowings flight

const eurowings = {
  airline: 'EuroWings',
  iatacode: 'EW',
  bookings: [],
};
// we already have book function instead of writing the code we simple load the function in value

const book = tata.book;

// the book is value / function for Eurowings so the this keyword in tata object will not work.

// book(3, 'narisng'); //>> gives error undefined because this keyword is available in tata object.

// so we need to call this keyword explicitly using 3 function methods,

book.call(eurowings, 4, 'narsing');
// narsing booked the flight EuroWings and the seat number is EW4

console.log(eurowings);
/*
{airline: 'EuroWings', iatacode: 'EW', bookings: Array(1)}
airline: "EuroWings"
bookings: Array(1)
0: {flight: 'EW, 4', name: 'narsing'}
length: 1
[[Prototype]]: Array(0)
iatacode: "EW"
[[Prototype]]: Object
 */

// similar way Tata acquired the swiss flight

const swiss = {
  airline: 'Swiss',
  iatacode: 'SW',
  bookings: [],
};

book.call(swiss, 5, 'family');
// family booked the flight Swiss and the seat number is SW5

console.log(swiss);
/**
 {airline: 'Swiss', iatacode: 'SW', bookings: Array(1)}
airline: "Swiss"
bookings: [{…}]
iatacode: "SW"
[[Prototype]]: Object
 */

// Apply function method
// same as call function but uses array

const flightData = [6, 'hero'];

book.apply(swiss, flightData);
console.log(swiss);

// apply method is no more in ES6 reason the apply work can be done using call function

book.call(swiss, ...flightData);
// hero booked the flight Swiss and the seat number is SW6

// Bind method

const bookEW = book.bind(eurowings);
// bookEW is the variable hold the bind which creates the separate this keyword for eurowings
// similarly
const bookSW = book.bind(swiss);
const bookTA = book.bind(tata);

bookEW(7, 'heroine');
bookTA(8, 'Ratan');
bookSW(9, 'Gmomez');

// we dont need to use the this.bookEW/SW/TA because this keyword is declared already in
// bookEW/SW/TA using bind

// we can use multiple parametes in bind

const bookEW1 = book.bind(eurowings, 1);
bookEW1('Poornachary');
// Poornachary booked the flight EuroWings and the seat number is EW1

// bind in event listeners

tata.planes = 200;
tata.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', tata.buyPlanes.bind(tata));

// partial application
const addTax = (rate, value) => value + value * rate;
// general way
console.log(addTax(0.1, 22));
// using bind
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(50));

// assignment
const oper = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const operInput = oper(0.23);
console.log(operInput(100));

// Immediately invokde function expression IIFE

(function () {
  console.log(`this will run only once`);
})();

(() => console.log(`This  will never run`))();

// closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} : Passengers`);
  };
};

const bookApp = secureBooking();
bookApp();
bookApp();
bookApp();

// More closure examples

let f;
const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 3);
  };
};

g();
f();
// 60

console.dir(f);

/*
This is more of a thinking challenge than a coding challenge �
Your tasks:

1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!

2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example.

(function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
*/
