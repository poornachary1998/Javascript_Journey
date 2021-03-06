"use strict";
/*
let moneyInCard = false;
const buyCar = true;
if(buyCar){
moneyInCard = true;
}
if(moneyInCard)
{
    console.log('Buy Stocks');
}

let interface = true;*/
/*
//functions
function ready(){
    console.log(`get ready for party`);
}
ready();
ready();


//Passing values to the function
function fruitProcessor(Apples, Oranges){
   //  console.log(Apples, Oranges);
    const juice = `The juice is made of ${Apples} Apples and ${Oranges} Oranges`;
    return juice;
}

//fruitProcessor(10,0); >> output will be only 10 0. The string is exceuted but doesnot show in output.
//The result of calling function fruitProcessor(10,0 ) will be the juice value which was returned.

// we need to save / capture the value.

const appleJuice = fruitProcessor(10,0);
console.log(appleJuice);

//re-use function with different values
const appleOrangeJuice = fruitProcessor(1,4);
console.log(appleOrangeJuice);

//function decleration

function calcAge1(birthYear){
    return 2022 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

//function expression

const calcAge2 = function (birthYear1){
return 2022-birthYear1;
}

const age2= calcAge2(1998);
console.log(age2);

//Arrow functions
const calcAge3 = birthYear=> 2037-birthYear;
const age3 = calcAge3(1998);
console.log(age3);


//number of years left for retirement

const yearsLeftForRetirement = birthYear =>{
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
// multiple lines of code in side arrow function need return
console.log(yearsLeftForRetirement(1991));*/

//arrow function 3 arguments / parameters

const ageLeftForAdult = (fullName, birthYear, weight) => {
  const age = 2022 - birthYear;
  const ageForAdult = 18 - age;
  return `The person ${fullName} whose ${birthYear} 
    is birth year and has weight of ${weight} need to
     complete ${ageForAdult} years for becoming adult`;
};

console.log(ageLeftForAdult("Poorna", 2010, 67));
console.log(ageLeftForAdult("suraj", 2020, 1));

//function calling another function

const fruitCutter = function (fruits) {
  return fruits * 2;
};

const fruitProcessor1 = function (apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);
  const juice = `The juice is made up of ${applePieces} apple pieces and ${orangePieces} orange pieces`;

  return juice;
};

console.log(fruitProcessor1(5, 10));

//reviewing functions converting arrow function to normal function
const dateOfBirth = function (year) {
  return 2022 - year;
};
const yearsToRetire = function (birthYear) {
  const age = dateOfBirth(birthYear);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`The retirement time is ${retirement} years`);
    return retirement;
    console.log(`The retrement time is xyz..`); // after return statement it exists from function hence this line will not be exceuted.
  } else {
    return -1;
  }
};
console.log(yearsToRetire(2001));
console.log(yearsToRetire(1960));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).

A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
?? Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
?? Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 ,nd,27
Hints:
?? To calculate average of 3 values, add them all together and divide by 3
?? To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores ???
GOOD LUCK 
*/

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(`The average score of dolphins is ${scoreDolphins}`);
console.log(`The average score of Koalas is ${scoreKoalas}`);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins winthe match with ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log("Koalas winthe match with (${avgKoalas} vs. ${avgDolphins})");
  } else {
    console.log(`No one wins`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
/*
//Arrays
const friend1 = ' Micheal';
const friend2 = 'Sam';
const friend3  = 'jay';

const friends = ['Micheal','sam','jay',1990,11];
console.log(friends);
//length is an operation in array which giver the length of array.
//Length will not start with 0, starts with 1.
console.log(friends.length);
//another way to declare the length.
const friends1 = new Array('Micheal','Sam','Jay');
//Prints the elements in array
console.log(friends1);
//to find the length of array. we use lenght-1 because array starts with 0 index
console.log(friends.length-1);
// to print the element present in 0th index
console.log(friends[0]);
//we can also use [] for operations as well.
console.log(friends[friends.length-1]);

// In arrays, we cannot change complete array. but we can replace the elements
friends[1] = 'Poorna';

console.log(friends);

//Array can hold any sort of data it can also hold another array as shown below:

const testArray = ['Poorna', 123, 2016-2015 , friends];
console.log(testArray);

//array exercise

const calCAge = function(birthYear){
    return 2022-birthYear;
}
// we want to colculate for some years
const years = [1990,2000,2010,2020];

//we cannot do this:
//console.log(years);
//It is not valid, because years is an array. Not value. Instead
const age1 = calCAge(years[0]);
const age2 = calCAge(years[1]);
const age3 = calCAge(years[2]);
const age4 = calCAge(years[years.length-1]);
console.log(age1, age2, age3, age4);

const ages = [calCAge(years[0]),calCAge(years[1]),calCAge(years[2]),calCAge(years[years.length-1])];
console.log(ages);   */

//push operation>> toadd element in last in an array

const friendsOne = ["Micheal", "sam", "jay"];
const newLength = friendsOne.push("chary");
console.log(friendsOne);
console.log(newLength);

//pop operation >> removes last element in array.

console.log(friendsOne.pop());
console.log(friendsOne);

//unshift operation to add a element in the starting of array

console.log(friendsOne.unshift("Ram"));
console.log(friendsOne);

//shift operation is used to remove the first element in array

console.log(friendsOne.shift());
console.log(friendsOne);

//indexOf returns the index of element in array

console.log(friendsOne.indexOf("sam"));
console.log(friendsOne);

//includes >> returns true or false values. if the element is present in array or not.

console.log(friendsOne.includes("sam")); //true;

//includes operator is strict equity.
friendsOne.push(23); //type is number
console.log(friendsOne.includes("23")); //searching for string>> false
console.log(friendsOne.includes(23)); //>> true

//example for conditional statement

if (friendsOne.includes("sam")) {
  console.log("Array has sam user");
} else {
  console.log("array does not have sam user");
}

//assignment 2
/*
Steven is still building his tip calculator, using the same rules as before: 

Tip 15% of  the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.


Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) ???
GOOD LUCK 
*/

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? 0.15 * billValue
    : 0.2 * billValue;
};

const billValue = [125, 555, 44];
const tips = [
  calcTip(billValue[0]),
  calcTip(billValue[1]),
  calcTip(billValue[2]),
];
console.log(`the bills are ${billValue} The Tips are ${tips}`);
const total = [
  billValue[0] + tips[0],
  billValue[1] + tips[1],
  billValue[2] + tips[2],
];
console.log(total);

//objects are used similar to the arrays
//let us see how to use objects
/*
const poorna = {
    firstName : 'Poorna chary',
    lastName : 'Narsingosu',
    age : 2022 - 1998,
    job : 'Front - End Developer',
    friends : ['Nithish','charan','Rohit']
};

console.log(poorna);

  //How to retrive the data from objects. It can be done in 2 ways.
  //1.DOT Notation
  //2.Bracket Notation
//Taking above example for reference:

console.log(poorna.lastName); //returns last name directly. so simple. DOT Notation

//Bracket Notation
console.log(poorna['lastName']); //We use brackets but the main diff is we can use expressions / computed property names in brackets

//computed expression example:
const nameKey = 'Name';
console.log('first'+ nameKey);
console.log('last'+ nameKey);
//sample for usage of Bracket notation
const intrestedIn = prompt("what would you like to know about Poorna? firstName, lastName, age, job, and friends");
//console.log(poorna[intrestedIn]);

if(poorna[intrestedIn]){
    console.log(poorna[intrestedIn]);
}
else{
    console.log("wrong request, Choose between firstName, lastName, age, job, and friends")
}

//learning Dot and bracket notations for adding new properties in objects
poorna.location = 'Hyderabad';
poorna['twitter'] = '@poornachary';
console.log(poorna);
*/

const poorna = {
  firstName: "Poorna chary",
  lastName: "Narsingosu",
  birthYear: 1998,
  job: "Front - End Developer",
  friends: ["Nithish", "charan", "Rohit"],
  hasDriverLicense: true,

  /*    calcAge : function(birthYear) {
        return 2022-birthYear;
    }*/

  /*calcAge : function(){
        return 2022- this.birthYear;
    }*/

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    //this.age is an Dot notation adding age property in object
    return this.age; //stored in age property in object
  },

  getSummary: function () {
    if (this.age >= 18) {
      this.summary = console.log(
        `Poorna is a ${this.age} year old web dev, and he has a drivers license`
      );
      return this.summary;
    } else {
      this.summary = console.log(
        `Poorna is a ${this.age} year old web dev, and he dont have a drivers license`
      );
      return this.summary;
    }
  },
};

//1.Function expression:
/* const calcAge = function(birthYear){
    return 2022-1998;
}
*/
//console.log(poorna.calcAge(1998));
//The above line is not ideal because we already have birthyear in object properties.

console.log(poorna.calcAge());
//If we want to use this calcAge again in code, we need to write the same line again and again
//which is not correct 'Dont repeat yourself'
//so we need to store the calcAge in a object and use in code.
/*
console.log(poorna.calcAge());
console.log(poorna.calcAge());
console.log(poorna.calcAge());
*/

console.log(poorna.age);
console.log(poorna.age);
console.log(poorna.age);

//challenge:
// A method called getSummary and this method should summarize the data about poorna.

//"Poorna is a 24 year old web dev, and he has a drivers license"

console.log(poorna.summary);

//coding challenge 3:

/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method

3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. 

Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall
*/

const person1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const person2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(person1.calcBMI(), person2.calcBMI());
console.log(person1.BMI, person2.BMI);
if (person1.calcBMI() > person2.calcBMI()) {
  console.log(
    `${person1.fullName}'s BMI ${person1.BMI} is higher than ${person2.fullName}'s BMI ${person2.BMI}`
  );
} else {
  console.log(
    `${person2.fullName}'s BMI ${person2.BMI} is higher than ${person1.fullName}'s BMI ${person1.BMI}`
  );
}

//loops
//for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`The rep count is ${rep}`);
}
/*
const about = [
    'Poorna chary',
    'Narsingosu',
    2022 - 1998,
   'Front - End Developer',
    ['Nithish','charan','Rohit']
];
//new array of types 
const types=[];

for (let i = 0; i < about.length ; i++) 
{
    // reading from about array
    console.log(about[i], typeof about[i]);
//filling type arrays
    //types[i]= typeof about[i];

    //another way for filling types
    types.push(typeof about[i]);
}
console.log(types);
*/

const years = [1991, 1988, 2001, 2022];

//calculate the age for all the years and store with loops

const ages = [];
for (let j = 0; j < years.length; j++) {
  ages.push(2022 - years[j]);
}

console.log(ages);

const about = [
  "Poorna chary",
  "Narsingosu",
  2022 - 1998,
  "Front - End Developer",
  ["Nithish", "charan", "Rohit"],
];

console.log("++++++++++++++++only strings by continue+++++++++++");
for (let i = 0; i < about.length; i++) {
  if (typeof about[i] !== "string") continue;
  //if the type of current element is not string then continue.
  //exit from current iteration and next one starts immediately.
  //if it is a string then below will exceute

  console.log(about[i], typeof about[i]);
}
console.log("+++++++++++++++break with only number++++++++++++++++");
for (let i = 0; i < about.length; i++) {
  if (typeof about[i] === "number") break;
  //if the type of current element is number then break.
  //exit from complete iteration and next one starts immediately.
  //if it is a string then below will exceute

  console.log(about[i], typeof about[i]);
}

/**
 * Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ???calcTip ???in the loop and use the push method to add values to the 
tips and totals arrays ???
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

 */

const calcTip1 = function (billValue1) {
  return billValue1 >= 50 && billValue1 <= 300
    ? 0.15 * billValue1
    : 0.2 * billValue1;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const total1 = [];

for (let i = 0; i <= bills.length; i++) {
  const tip = calcTip1(bills[i]);
  tips.push(tip);
  total1.push(tip + bills[i]);
}
console.log(bills, tips, total1);
