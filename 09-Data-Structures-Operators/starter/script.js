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

// coding challenge 1
/*
Coding Challenge #1

We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and 
'players2')

2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players

3. Create an array 'allPlayers' containing all players of both teams (22 
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.solution
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.solution
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.solution

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.solution
//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

/*
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/
const printGoals = function (...players) {
  console.log(`${players.length} goals are scores`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7.solution

team1 < team2 && console.log(`team1 is more likely to win`);

//for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

//index-of for of loop

for (const item1 of menu.entries()) {
  console.log(item1);
}

//optional chaining concept

// console.log(restaurant.openingHours.mon);
// undefined because mon is not available in opening hours

// to checkif the mon is available or not
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//as the above mon is not available then the if will not execuete

//in more complex to check we use
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//in order to avoid such complexites we have optional chaining

console.log(restaurant.openingHours.mon?.open);
//undefined same as above, if the mon is available then only it returns the open time

// we can also check like this
console.log(restaurant.openingHours?.mon?.open);
//the above one says if opening hours are available then it checks for mon if mon is available then it looks for open time

// example: to print the all week days working time

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const output = restaurant.openingHours[day]?.open; //we can also use || or ?? based on requirement

  console.log(`on ${day}, we open at ${output}`);
}

// //
// on mon, we open at undefined
// script.js:453 on tue, we open at undefined
// script.js:453 on wed, we open at undefined
// script.js:453 on thu, we open at 12
// script.js:453 on fri, we open at 11
// script.js:453 on sat, we open at 0
// // script.js:453 on sun, we open at undefined

//methods, we can check if the method is exists or not
console.log(restaurant.order?.(1, 0) ?? `Method does not exists`);
//
//  ['Bruschetta', 'Pizza']

//works also on arrays- we can check if an array is empty
const users = [{ name: 'jonas', email: 'hello@xys' }];
console.log(users[0]?.name ?? ' user array is empty');

//looping object keys

const properties = Object.keys(openingHours);
// console.log(properties);
//array is the output for object keys

let opnStr = `we are open ${properties.length} days :`;
for (const day of properties) {
  opnStr += ` ${day} `;
}
console.log(opnStr);
// we are open 3 days thu  fri  sat

// looping object values

const value = Object.values(openingHours);
console.log(value);

//returns the values of opening hours properties:
// 0: {open: 12, close: 22}
// 1: {open: 11, close: 23}
// 2: {open: 0, close: 24}
// length: 3

//looping entries index+element

// eentrie object

const entries = Object.entries(openingHours);
console.log(entries);
// (3) [Array(2), Array(2), Array(2)]
// 0: Array(2)
// 0: "thu"
// 1: {open: 12, close: 22}
// length: 2
// [[Prototype]]: Array(0)
// 1: Array(2)
// 0: "fri"
// 1: {open: 11, close: 23}
// length: 2
// [[Prototype]]: Array(0)
// 2: Array(2)
// 0: "sat"
// 1: {open: 0, close: 24}
// length: 2
// [[Prototype]]: Array(0)
// length: 3
// [[Prototype]]: Array(0)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// On {$day} we open at 12 and close at 22
// script.js:525 On {$day} we open at 11 and close at 23
// script.js:525 On {$day} we open at 0 and close at 24

// Sets: it is a new data structure and iterable which contains only unique values

const orderSet = new Set([
  'pizza',
  'burger',
  'pasta',
  'pizza',
  'burger',
  'pasta',
]);
console.log(orderSet);
//  {'pizza', 'burger', 'pasta'} all unique items

//to know the size of set
console.log(orderSet.size);
// 3

//TO know a element is in set or not
console.log(orderSet.has('burger'));
console.log(orderSet.has('lemon'));
// true
//  false

// to add new elements into set
console.log(orderSet.add('Garlic'));
console.log(orderSet.add('Garlic'));
// we added garlic 2 times but in output only once is shown
// {'pizza', 'burger', 'pasta', 'Garlic'}

// Delete the items in set
console.log(orderSet.delete('Garlic'));
console.log(orderSet);
// {'pizza', 'burger', 'pasta'}

// to clear all items in set
// orderSet.clear();
// console.log(orderSet);
// {size: 0}

// examples
const staff = ['waiter', 'manager', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//to know the size
console.log(
  new Set(['waiter', 'manager', 'chef', 'waiter', 'manager', 'chef']).size
);

// to know the letter length
console.log(new Set('poorna').size);

// Maps: Fundamentals
// Maps is a data structure used to map values to the keys

// empty map
const rst = new Map();

//insert values and keys in map

rst.set('name', 'classico Italiana');
rst.set(1, 'Ferrior, Italy');
rst.set(2, 'lisbon,portugal');
console.log(rst);
// 0: {"name" => "classico Italiana"}
// 1: {1 => "Ferrior, Italy"}
// 2: {2 => "lisbon,portugal"}

// similarly we can also add many to map like below

rst
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 8)
  .set('close', 20)
  .set(true, 'We are open')
  .set(false, 'we are close');
console.log(rst);

/*0: {"name" => "classico Italiana"}
1: {1 => "Ferrior, Italy"}
2: {2 => "lisbon,portugal"}
3: {"categories" => Array(4)}
4: {"open" => 11}
5: {"close" => 20}
6: {true => "We are open"}
7: {false => "we are close"}*/

// to retrive from map we have get method

console.log(rst.get('open')); //gives the value for open key
console.log(rst.get(true));

// 11
// script.js:622 We are open

// power of booleans in maps
const time = 21;
console.log(rst.get(time > rst.get('open') && time < rst.get('close')));
// we are close

// to check if map contains a key or not
console.log(rst.has('categories'));
// true

// to delete items in map
rst.delete('categories');
console.log(rst);
// categories key is removed.

// to remove everything from map
// rst.clear();
// console.log(rst);

// mapping arrays and objects

const arrOne = [1, 2];

rst.set(arrOne, 'poorna');
// rst.set([1,2],'poorna');
// console.log([1,2]); >> invalid move
console.log(rst);

// key: (2) [1, 2]
// value: "poorna"

// rst.set(document.querySelector('h1'), 'heading');

// another way of declaring maps instead of set function

const ques = new Map([
  ['question', 'What is your fav programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javasscript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Wrong answer'],
]);
console.log(ques);

// convert objects to Maps

// objectentries example
console.log(Object.entries(openingHours));

/*[Array(2), Array(2), Array(2)]
0: (2) ['thu', {…}]
1: (2) ['fri', {…}]
2: (2) ['sat', {…}]
*/

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
/*
0: {"thu" => Object}
1: {"fri" => Object}
2: {"sat" => Object}
*/

// console.log(ques.get('question'));
// for (const [key, value] of ques) {
//   if (typeof key === 'number') {
//     console.log(`The answer: ${key} : ${value}`);
//   }
// }
// const ans = Number(prompt(`Enter your answer`));
// console.log(ans);

// console.log(ques.get(ques.get('correct') === ans));

// converting maps to arrays

console.log([...ques]);
/*
0: (2) ['question', 'What is your fav programming language']
1: (2) [1, 'C']
2: (2) [2, 'Java']
3: (2) [3, 'Javasscript']
4: (2) ['correct', 3]
5: (2) [true, 'Correct']
6: (2) [false, 'Wrong answer']
*/

console.log([ques.keys()]);
/*
0: "question"
1: 1
2: 2
3: 3
4: "correct"
5: true
6: false
*/

console.log([ques.values()]);
/*
0: "What is your fav programming language"
1: "C"
2: "Java"
3: "Javasscript"
4: 3
5: "Correct"
6: "Wrong answer"
*/

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:

[FIRST HALF] 17: ⚽ GOAL


*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = new Set([
  '⚽ GOAL',
  '� Substitution',
  '⚽ GOAL',
  '� Substitution',
  '� Yellow card',
  '� Red card',
  '� Substitution',
  '� Substitution',
  '⚽ GOAL',
  '⚽ GOAL',
  '� Yellow card',
]);
console.log(events);

const newEvents = events.delete('� Yellow card');
console.log(events);

// "An event happened, on
// average, every 9 minutes"

console.log(`"An event happened, on 
average, every ${90 / gameEvents.size} minutes"`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:

// [FIRST HALF] 17: ⚽ GOAL

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
/*
[FIRST HALF] 17: ⚽ GOAL
script.js:806 [FIRST HALF] 36: � Substitution
script.js:806 [SECOND HALF] 47: ⚽ GOAL
script.js:806 [SECOND HALF] 61: � Substitution
script.js:806 [SECOND HALF] 64: � Yellow card
script.js:806 [SECOND HALF] 69: � Red card
script.js:806 [SECOND HALF] 70: � Substitution
script.js:806 [SECOND HALF] 72: � Substitution
script.js:806 [SECOND HALF] 76: ⚽ GOAL
script.js:806 [SECOND HALF] 80: ⚽ GOAL
script.js:806 [SECOND HALF] 92: � Yellow card
*/

// Strings Part 1

const airline = 'TAP Air Portugal';
const plane = 'B101';

console.log(airline[0]);
console.log(airline[1]);
console.log('A101'[2]);
// T
// A
// 0

// to know the length
console.log(airline.length);
// 16
console.log('a10101'.length);
// 6

// Methods

// indexOf
// gives the first occurances
console.log(airline.indexOf('r'));
// 6

// lastindexOf
// to get the last occurance of

console.log(airline.lastIndexOf('r'));
// 10

// we can also search for entire words
console.log(airline.indexOf('Portugal'));
// 8
// this is case sensitive
console.log(airline.indexOf('portugal'));
// -1

// slice method
console.log(airline.slice(4));
//Air Portugal

console.log(airline.slice(4, 7));
//Air

// extract first word without indexOF
console.log(airline.slice(0, airline.indexOf(' ')));
//TAP

// extract last word without indexof
console.log(airline.slice(airline.lastIndexOf(' ')));
//  Portugal >> this has the space infront

console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//Portugal

// to get the string from the end
console.log(airline.slice(-2));
//al

console.log(airline.slice(1, -1));
// AP Air Portuga

// exercise: write a program to check if you got a middle seat or not
// in general B and E will be the middle seats
const middleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`congrats! you got middle seat`);
  } else {
    console.log('you are not lucky');
  }
};
middleSeat('11B');
middleSeat('13C');
middleSeat('2E');

// working with strings part-2

// changing case in string

const passenger = 'JoNas';
console.log(passenger.toLowerCase());
// jonas

console.log(passenger.toUpperCase());
// JONAS

// comparing emails
const email1 = 'hello@poorna.io';
const emailLogin = ' HelLO@Poorna@I0 \n';
// make the values true
// console.log(emailLogin.toLowerCase());
//  hello@poorna@i0 >>has extra spaces to remove front and last extra spaces we use trim()
console.log(emailLogin.toLowerCase().trim());
// hello@poorna@i0

// replace parts in string

const priceGB = '234,35*';
console.log(priceGB.replace('*', '$').replace(',', '.'));
// 234.35$
// replace is case sensitive it works only for first occurance

// replaceAll for all occurances
// example
const announcements = 'welcome gate 23. gate 23';
// replace gate with door

console.log(announcements.replaceAll('gate', 'door'));
// welcome door 23. door 23

// alternative wayis regular expressions
console.log(announcements.replace(/gate/g, 'door'));

// booleans includes(), startsWith() , endsWith()
const plane1 = 'A352';
console.log(plane1.includes('A'));
// true

console.log(plane1.startsWith('A'));
// true

console.log(plane1.endsWith('A'));
// false

// learning time - exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log(`You are not allowed`);
  } else {
    console.log('Welcome abroad');
  }
};
checkBaggage('I have Knife, GUN');
checkBaggage('I have fOOD');
// You are not allowed
// Welcome abroad
