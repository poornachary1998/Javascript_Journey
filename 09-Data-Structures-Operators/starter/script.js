'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startIndex,
    mainIndex,
    time = '20 mins from the order time',
    address,
  }) {
    console.log(
      `order recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious food item with ${ing1},${ing2},${ing3}`);
  },
  //rest pattern
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
  //rest pattern finish
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//spread operator >>used to expand all elements in array

//1.example
const ar1 = [7, 8, 9];
//if you want to add 1 and 3  begining of array then instead of adding manually
const arnew = [1, 2, ...ar1];
console.log(arnew);
//[1, 2, 7, 8, 9] output

//2.when we pass many values as arguments
console.log(...arnew);
//output: 1 2 7 8 9

//3.new food item in main menu
const newMainMenu = [...restaurant.mainMenu, 'roti'];
console.log(newMainMenu);
//output:['Pizza', 'Pasta', 'Risotto', 'roti']

//4. removing the elements from array

//5.shadowcoping of arrays
//let us create a new copy of main menu

const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu);
//output: ['Pizza', 'Pasta', 'Risotto']

//6. join two arrays: join main menu and startmenu

const finalMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(finalMenu);
// ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//spread operator also works on strings
//7. spread operator on strings

const str = 'poorna';
console.log(...str);
// p o o r n a

//8.function that takes many values as arguments we are creating a function in restaurant

// const ingrediants = [
//   prompt(`give me the food ingrediant 1`),
//   prompt(`ingrediant 2`),
//   prompt(`ingrediant 3`),
// ];

// restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
//Here's your delicious food item with rice,sambar,pappu

//9. from 2018 spread operator can also be used in objects
//we are adding an property to existing object

const newResto = { ...restaurant, founder: 'poorna' };
console.log(newResto);
/*
categories: (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
founder: "poorna"
location: "Via Angelo Tavanti 23, Firenze, Italy"
mainMenu: (3) ['Pizza', 'Pasta', 'Risotto']
*/

// Rest Pattern
restaurant.orderPizza('mushrooms', 'Onions', 'veggies');

//object destruction

let { name1, openingHours } = restaurant;
console.log(name1, openingHours);

//to remove property name of object and give custom name
const { name: RestoName, openingHours: workHours } = restaurant;
console.log(RestoName, workHours);

//default values
const { menu1 = [], starterMenu: starter1 = [] } = restaurant;
console.log(menu1, starter1);

//mutating variables

let a = 111;
let b = 33;
const obj = { a: 33, b: 11, c: 111 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//real time example, we created an new function orderDelivery

restaurant.orderDelivery({
  time: '22:30',
  address: 'Karimnagar',
  startIndex: 1,
  mainIndex: 1,
});
restaurant.orderDelivery({
  address: 'Karimnagar',
  startIndex: 1,
  mainIndex: 1,
});
/* Array Destruction
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//without destructing

const [x, y, z] = arr;
console.log(x, y, z);
//destructing array

// const [first, second] = restaurant.categories;
// console.log(first, second);
//Italian Pizzeria output

//if we need one and third elements by destucting then we need to leave a hole

const [first, , second] = restaurant.categories;
console.log(first, second);
// Italian Vegetarian

// Now the restaurant wants to change the Italian vegetarain to vegetarian Italian.
//let see how can we do it withoit destructing

//normal way
let [main, , secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

//using destruction
[main, secondary] = [secondary, main];
console.log(main, secondary);

//destructing function return values

// console.log(restaurant.order(2, 0));
const [order1, order2] = restaurant.order(2, 0);
console.log(order1, order2);

//for nested array, nested destructing
const nested = [2, 4, [5, 6]];
// we need to get 2 and [5,6]

const [one, , three] = nested;
console.log(one, three);
//output:2 [5,6](the output is in array)

//if we want all values in array
const [onee, , [threee, fourr]] = nested;
console.log(onee, threee, fourr);
//2 5 6 is output

//default values
const [a1, b1, c1] = [8, 9];
console.log(a1, b1, c1); // 8 9 undefined is the output

const [a2 = 1, b2 = 1, c2 = 1] = [8, 9];
console.log(a2, b2, c2);
//output is 8 9 1

*/

//logical assignment operator

const rest1 = {
  name: 'poorna',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name2: 'chary',
  owner: 'Lavanya',
};

//we need to add or get numguests for rest2 which doesnot have this property

//1.OR operator

rest2.numGuests = rest1.numGuests || 5;
console.log(rest2);
//{name2: 'chary', owner: 'Lavanya', numGuests: 20}

// which is similar to
rest2.numGuests || 5;
console.log(rest2);
// {name2: 'chary', owner: 'Lavanya', numGuests: 20}
// the value of numGuests is 20 in rest 1 which is truthy value hence the outout for the rest2 guets is also 20

//situation: if the num guests are 0 in rest1, then the output will be 5 for rest 2 guests
// reason: 0 is falsy value. to over come this we have
// 2.logical coalescing operator ??
//we have changed the numGuests to 0 in rest 1
rest2.numGuests || 5;
// {name2: 'chary', owner: 'Lavanya', numGuests: 5} output

rest1.numGuests ?? 5;
console.log(rest1);
//output: {name: 'poorna', numGuests: 0}

rest2.numGuests ??= 5;
console.log(rest2);
// output: {name2: 'chary', owner: 'Lavanya', numGuests: 5}

// 3.logical AND operator
//if we want to make any owner as anonymous then see the below

rest2.owner = rest2.owner && '<anonymouns>';
console.log(rest2);
//in the above example the both values are truthy
//as per and short circuit it displays the last value in output
// {name2: 'chary', owner: '<anonymouns>', numGuests: 5}

// alsowritten in
rest1.owner &&= '<Unknown>';
rest2.owner &&= '<Unknown>';
console.log(rest1, rest2);

// output:{name: 'poorna', numGuests: 0}
//  {name2: 'chary', owner: '<Unknown>', numGuests: 5}
