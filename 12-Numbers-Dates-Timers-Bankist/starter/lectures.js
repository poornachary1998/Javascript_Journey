/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(25 === 25.0);

// convert string to number
console.log(Number('23'));
// alternative, + does the ty[pe coresion
console.log(+'23');

// parsing
console.log(Number.parseInt('23px'));
// 23
console.log(Number.parseInt('px23'));
// Nan
// The string should start with Number
// Parse int also accept the second parameter
// THe second parameter should be the base
// if we are using the base 10 from 0 to 9 should mention in parse int as 10

console.log(Number.parseInt('23px', 10));
// 23
// if we are using the base 2 from 0 and 1 should mention in parse int as 2

console.log(Number.parseInt('23px', 2));
// NaN

// similar way we have parsefloat
console.log(Number.parseFloat('23.33px', 10));
//23.33
console.log(Number.parseInt('23.33px', 10));
// 23

// parseInt and parseFloat are called global functions
// we need not to call them on number it also works like thisds

console.log(parseInt('23px', 10));
// 23
console.log(parseFloat('23.89'));
// 23.89

// BigInt
console.log(BigInt(12345678987654323456789876543234567898765432345678n));

// // creating dates
// const now = new Date();
// console.log(now);

console.log(new Date('25 Dec 2021'));

// Date to Number - how many date back the action took place, ex: 3 days ago

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
// console.log(Number(future));
console.log(+future); //2142237180000

const daysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);
// abs used to avoid negative ouptuts if the date2 is smaller

const days1 = daysPassed(new Date(2037, 10, 13), new Date(2037, 10, 17));
console.log(days1);
const future1 = new Date();
console.log(future1.toISOString());

setTimeout(() => console.log('Here is your Pizza'), 3000);
