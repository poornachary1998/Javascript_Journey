/*let x = "Java Script is a High level programming language";
if (x==="Java Script is a High level programming language") 
alert("JS is programming language");
console.log(10+90+3-23);
*/

 //variable is box whichwe can store a value

 let myFirstJob = "Programmer";
 let myCurrentJob = "Tester";


 let PI = 3.14;

 let $function = "we can use $ or _ infront of variable";

 /*assignment
 1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console*/
 

let country = 'India';
let continent = 'Asia';
let population = '1378.6 (Millions)'
console.log(country);
console.log(continent);
console.log(population);


//boolean
//true;
console.log(true);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//typeof 

console.log(typeof 'number');
console.log(typeof 23);
console.log(typeof false);


// dynamic typing example
let myName = 'poorna';
console.log(typeof myName);

myName = 23;
console.log(typeof myName);

// undefined example

let myLastName;
console.log(myLastName);
console.log(typeof myLastName);

myLastName = 'Narsingosu';
console.log(typeof myLastName);

// null example
console.log(typeof null);

// Assignment 2
/*1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/


let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//let. const. var assignment.
/*
Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

let myLanguage = 'Telugu';
const canWrite = true;
console.log( myLanguage);
console.log(canWrite);

//canWrite = false;

//arthemathic operators
/*
const currentYear = 2021;
const poornaAge = currentYear - 1998 ;
const charyAge = currentYear - 2000;

console.log( poornaAge, charyAge );
console.log( poornaAge*3, charyAge-10, 3**9 );
//3**9 means 3 to the power of 9

//concat operator + 

const myFirstName1 = "Poorna";
const myMiddleName = "chary";

console.log(myFirstName1 + myMiddleName);

//for spacing

//console.log(myFirstName1+ ' ' + myMiddleName);

//Assignment Operator = 

//let abc = 10 + 5;
//console.log(abc);
// output 15
//abc+=10;
//console.log(abc);
//abc+=10>>> abc = abc + 10; >>>15+10 = 25

// abc*=2;
// console.log(abc);
//abc = abc*2; >>> 50

//abc++;
//console.log(abc);
// abc = abc+1;
//abc--;
//console.log(abc);
// abc = abc-1;

//comparison operator the output will be boolean > < >= <=
/*console.log(poornaAge >=20, charyAge>=19);

const result = poornaAge>=20; */
//console.log(result);

//console.log( currentYear - 1999 > currentYear - 2018 );

const currentYear = 2021;
const poornaAge = currentYear - 1998 ;
const charyAge = currentYear - 2000;

console.log( currentYear - 1999 > currentYear - 2018 );

let x , y;

x = y = 25-10-1;
console.log(x,y);

//average of ages and how precedence takes place.

// const averageAge= poornaAge + charyAge /2;
const averageAge= (poornaAge + charyAge )/2;

console.log (poornaAge, charyAge , averageAge);

//>>output is 33.5 which is wrong. NOw we need to implement () where precendence is high

//correct output is 22 with () using precedence takes place first for ();

//coding challenge -1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.


Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �
*/

var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;

markMass =95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

console.log(markMass , markHeight);
console.log(johnMass,johnHeight);

let bmiMarkResult = markMass / (markHeight * markHeight);
let bmiJohnResult = johnMass / (johnHeight * johnHeight);

console.log( bmiMarkResult , bmiJohnResult );

let markHighBMI = bmiMarkResult > bmiJohnResult;
console.log(markHighBMI);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Strings and Template Literals */


//coding challenge 2

if(bmiMarkResult>bmiJohnResult){
    console.log(`Mark's BMI (${bmiMarkResult}) is higher than John BMI`);
}
else{
    console.log(`John BMI (${bmiJohnResult}) is higher than Mark BMI`);
}




















const mName = 'chary';
const job = 'web dev';
const year = 1998;
const presentYear = 2022;
//Before ES6
const resultHere = "I'm " + mName + '. My age is ' + (presentYear-year) + ' and I am a ' + job +'.';
console.log(resultHere);
//After ES 6 Literals are introduced ``
const resultHere1 = `I am ${mName}. My age is ${presentYear-year} and I am a ${job}`;
console.log(resultHere1);


