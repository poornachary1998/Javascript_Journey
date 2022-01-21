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



//type conversions
//string to Number
const inputYear = '1991';
console.log(inputYear+18);
console.log (Number(inputYear)+18);
console.log(Number(inputYear), inputYear);

console.log(Number('poorna'));
console.log(typeof(Number('Poorna')));
//number to string
console.log(String(11));

console.log(String(11), 11);

//type coercion

console.log( 'I am' + 23+ 'years old');
console.log('20' - '10' - 3); 
console.log('23'*'2');
console.log('22'/'2');

//Equity operator

const age= 18;
if ( age === 18){
console.log('You are an adult ( Strict equality )');
}
if (age == 18)
{
    console.log('You are an adult ( loose equality)');
}
//exercise

//const favi = prompt("What is your favorite number ?");
/*
const fav = Number(prompt("What is your favorite number ?"));

console.log(fav);
console.log(typeof(fav));

if(fav === 27){
    console.log("cool! The number is 27")
} else if( fav === 7 )
{
    console.log("Number 7 is a cool number")
}
else{
    console.log("The number is neither 27 nor 7");
}

if(fav !== 23){
    console.log("why not 23?");
}
*/
//logical operators

const hasDriversLicense = true; //A
const hasVision = false; //B
console.log(hasDriversLicense && hasVision);//AND operator
console.log(hasDriversLicense || hasVision);//OR operator
console.log(!hasDriversLicense);

if(hasDriversLicense &&hasVision){
    console.log("sarah should drive!");
}
else{
    console.log("someone else should drive");
}

/* coding challenge 3 
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)


/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/


var dol1 = 96;
var dol2 = 108;
var dol3 = 89;

const avgDol = (dol1+dol2+dol3)/3;
console.log(avgDol);

var kol1 = 88;
var kol2 = 91;
var kol3 = 110;

const avgKol = (kol1+kol2+kol3)/3;
console.log(avgKol);

if(avgDol>=avgKol && avgDol>=100){
    console.log(`The winner is Dolphins`);
}else if(avgKol>=avgDol && avgKol>=100)
{
    console.log(`The winner is Koalas `);
} else if(avgDol===avgKol && avgDol>=100 && avgKol>=100)
{
    console.log(`Match is draw`);
}
else{
    console.log(`No one wins the match`);
}


const day = 'monday';

switch(day){
    case 'monday': //day===monday
    console.log('write code');
    break;

    case tuesday: //day===tuesday
    console.log('practise code');
    break
    
    case wednesday:
    case thursday:
    case friday:
    console.log('Learn code and update in git');
    break;

    case saturday:
    case sunday:
    console.log('Weekend time');
    break;

    default:
        console.log('Not a valid day');
}



//conditional or ternary operator

const myAge=23;

const drink = myAge>=18?'wine':'water';
console.log(drink);

//or
//conditional operator will exceute in template literals but if..else doesnot exceute in template literanls
console.log(`i can drink ${myAge>=18?'wine':'water'}`);

/*

Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.


Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �

*/


const bill = 430;

var tip = bill >= 50 && bill <=300 ? bill*(15/100):bill*(20/100);
console.log(tip);
//or

console.log(`The final value spent is ${bill+tip}`);
