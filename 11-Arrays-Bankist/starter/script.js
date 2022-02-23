'use strict';
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const dispalyMovements = function(movements){

  containerMovements.innerHTML = '';
  // .textContent = 0;
  // defaulr data is removed by innerHTML
  movements.forEach(function (mov,i){

    const type = mov>0 ? 'deposit':'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}</div>
    `;
    

  // for adding the new movements row in container we use insertAdjacentHTML()
containerMovements.insertAdjacentHTML('afterbegin', html)
// if we use the beforeend then the elements are reversed
  });
};
dispalyMovements(account1.movements);
// console.log(containerMovements.innerHTML);

// map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(function(mov){
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

// same above example with for of 
const newArr = [];

for(const mov of movements) newArr.push(mov * euroToUsd);
console.log(newArr 
);









/**
 * 
 * Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 
 */

const checkDogs = function (dogsJulia, dogsKate){
const juliaCorrected = dogsJulia.slice();
// console.log(juliaCorrected);
juliaCorrected.splice(0,1);
juliaCorrected.splice(-2);

const dogs = juliaCorrected.concat(dogsKate)
console.log(dogs);
//  [5, 2, 4, 1, 15, 8, 3]
dogs.forEach(function(dog,i){
  if (dog >=3){
    console.log(`it's an adult "Dog number ${i+1} is an adult, and is ${dog} years old"`);
  }
  else
  {
    console.log(`Dog number ${i+1} is still a puppy`);
  }
})

}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
console.log(`-----------------------`);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);















































































/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`-----------------for - of loop-----------------`);
for( const mov of movements){
  if (mov>0){
    console.log(`You have deposited : ${mov}`);
  }
  else{
    console.log(`You have with drew: ${Math.abs(mov)}`);
  }
}

console.log(`---------For each loop--------------`);
movements.forEach(function(mov){
  if (mov>0){
    console.log(`You have deposited : ${mov}`);
  }
  else{
    console.log(`You have with drew: ${Math.abs(mov)}`);
  }

})

console.log(`for each with order of arguments current element, index, array`);
movements.forEach(function (mov, i ,arr){
  if(mov>0){
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  }
  else{
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
  }
})
/* for each with order of arguments current element, index, array
 Movement 1: You deposited 200
 Movement 2: You deposited 450
 Movement 3: You withdrew 400
 Movement 4: You deposited 3000
 Movement 5: You withdrew 650
 Movement 6: You withdrew 130
 Movement 7: You deposited 70
 Movement 8: You deposited 13
*/
/*
console.log(`ForEach with maps `);
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}:${value}`);
})
/**
 * ForEach with maps and sets
script.js:120 USD:United States dollar
script.js:120 EUR:Euro
script.js:120 GBP:Pound sterling
 
console.log(`ForEach with sets`);

const uniqueSet = new Set(['USD','GBM','IND','GBM','IND','USD']);
console.log(uniqueSet);
// {'USD', 'GBM', 'IND'}
uniqueSet.forEach(function(value, key, map){
  console.log(`${key}:${value}`);
  console.log(`${value}:${value}`);
  
})
*/

// USD:USD
// GBM:GBM
// IND:IND
// the output of key and value are same because in sets we dont have keys
// so we can remove key and keep _ in function
// _ means throwback function which is not used





























/*
/////////////////////////////////////////////////
let arr = ['a', 'e', 'i', 'o', 'u'];
console.log(arr.slice(2));
// ['i', 'o', 'u']
console.log(arr.slice(2,4));
// ['i', 'o']
console.log(arr.slice(-1));
// ['u']
console.log(arr.slice(-3));
//  ['i', 'o', 'u']
console.log(arr.slice(1,-2));
// ['e', 'i']


// shallow copy
console.log(arr.slice());
// ['a', 'e', 'i', 'o', 'u']
console.log([...arr]);
// ['a', 'e', 'i', 'o', 'u']

// splice method
// same as slice but splice mutates/changes the original array

const arr1 = ['a','b','c','d','e','f','g'];



// console.log(arr1.splice(2));
// ['c', 'd', 'e', 'f', 'g']
// console.log(arr1);
// ['a', 'b']


console.log(arr1.splice(-1));
// ['g']
console.log(arr1);
// ['a', 'b', 'c', 'd', 'e', 'f']

console.log(arr1.splice(1,2));
// ['b', 'c']
console.log(arr1);
// ['a', 'd', 'e', 'f']

// reverse
// reverse also will mutate the string
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
// ['f', 'g', 'h', 'i', 'j']

console.log(arr2);
// ['f', 'g', 'h', 'i', 'j'] mutates the string

// CONCAT
console.log(arr.concat(arr2));
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(...arr,...arr2);
// a b c d e f g h i j

// JOIN method
console.log((arr.concat(arr2)).join('--'));
// a--b--c--d--e--f--g--h--i--j

// AT Method

const arr3 = ['1','2','3'];
console.log(arr3[0]);
// 1
console.log(arr3[2]);
// 3
console.log(arr3.at(0));
console.log(arr3.at(2));
// 1
// 3

console.log(arr3[arr3.length-1]);
// 3
console.log(arr3.at(-1));
// 3

console.log('jonas'.at(0));
*/
