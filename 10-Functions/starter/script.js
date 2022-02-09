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
