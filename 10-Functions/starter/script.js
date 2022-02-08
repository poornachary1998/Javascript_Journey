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
