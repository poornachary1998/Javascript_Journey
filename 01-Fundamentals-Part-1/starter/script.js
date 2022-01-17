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
true;
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

console.log(myFirstName1+ ' ' + myMiddleName);

//Assignment Operator = 

let abc = 10 + 5;
console.log(abc);
// output 15
abc+=10;
console.log(abc);
//abc+=10>>> abc = abc + 10; >>>15+10 = 25

abc*=2;
console.log(abc);
//abc = abc*2; >>> 50

abc++;
console.log(abc);
// abc = abc+1;
abc--;
console.log(abc);
// abc = abc-1;





