'use strict';
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

const ageLeftForAdult = (fullName, birthYear, weight) =>{
    const age = 2022 - birthYear;
    const ageForAdult = 18 - age;
    return `The person ${fullName} whose ${birthYear} 
    is birth year and has weight of ${weight} need to
     complete ${ageForAdult} years for becoming adult`;
}

console.log(ageLeftForAdult('Poorna', 2010, 67));
console.log(ageLeftForAdult('suraj',2020,1));

//function calling another function

const fruitCutter = function(fruits){
    return fruits*2;
}

const fruitProcessor1 = function (apples, oranges)
{
const applePieces = fruitCutter(apples);
const orangePieces = fruitCutter(oranges);
const juice = `The juice is made up of ${applePieces} apple pieces and ${orangePieces} orange pieces`;

return juice;
}

console.log(fruitProcessor1(5,10));

//reviewing functions converting arrow function to normal function
const dateOfBirth = function(year){
   return 2022 - year;
}
const yearsToRetire = function(birthYear)
{
    const age = dateOfBirth(birthYear);
    const retirement  = 60 - age;
if(retirement>0){
    console.log(`The retirement time is ${retirement} years`);
return retirement;
console.log(`The retrement time is xyz..`);// after return statement it exists from function hence this line will not be exceuted.
}
else{
return -1;
}
}
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
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 ,nd,27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK 
*/

const calcAverage = (s1,s2, s3) => (s1+s2+s3)/3;

const scoreDolphins = calcAverage(85, 54,41);
const scoreKoalas = calcAverage(23,34,27);
console.log(`The average score of dolphins is ${scoreDolphins}`);
console.log(`The average score of Koalas is ${scoreKoalas}`);

const checkWinner = function(avgDolphins, avgKoalas){

    if(avgDolphins>= avgKoalas*2){
        console.log(`Dolphins winthe match with ${avgDolphins} vs. ${avgKoalas}`);
    }else if (avgKoalas>=avgDolphins*2){
        console.log('Koalas winthe match with (${avgKoalas} vs. ${avgDolphins})');
    }else{
        console.log(`No one wins`);
    }

}
checkWinner(scoreDolphins,scoreKoalas);
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

const friendsOne = ['Micheal','sam','jay'];
const newLength = friendsOne.push('chary');
console.log(friendsOne);
console.log(newLength);

//pop operation >> removes last element in array.

console.log(friendsOne.pop());
console.log(friendsOne);

//unshift operation to add a element in the starting of array

console.log(friendsOne.unshift('Ram'));
console.log(friendsOne)

//shift operation is used to remove the first element in array

console.log(friendsOne.shift());
console.log(friendsOne);

//indexOf returns the index of element in array

console.log(friendsOne.indexOf('sam'));
console.log(friendsOne);

//includes >> returns true or false values. if the element is present in array or not.

console.log(friendsOne.includes('sam')); //true;

//includes operator is strict equity.
friendsOne.push(23); //type is number
console.log(friendsOne.includes('23')); //searching for string>> false
console.log(friendsOne.includes(23));//>> true

//example for conditional statement

if(friendsOne.includes('sam')){
    console.log("Array has sam user");
}
else
{
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
array) �
GOOD LUCK 
*/

const calcTip = function (billValue){
    return billValue>=50 && billValue<=300 ? 0.15*billValue : 0.2*billValue;
    
}

const billValue  = [125,555,44];
const tips = [calcTip(billValue[0]),calcTip(billValue[1]),calcTip(billValue[2])];
console.log(`the bills are ${billValue} The Tips are ${tips}`);
const total = [billValue[0]+tips[0], billValue [1]+tips[1],billValue [2]+tips[2]];
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
    firstName : 'Poorna chary',
    lastName : 'Narsingosu',
    birthYear : 1998,
    job : 'Front - End Developer',
    friends : ['Nithish','charan','Rohit'],
    hasDriverLicense: true,

/*    calcAge : function(birthYear) {
        return 2022-birthYear;
    }*/

    /*calcAge : function(){
        return 2022- this.birthYear;
    }*/

    calcAge : function(){
        this.age = 2022 - this.birthYear;
        //this.age is an Dot notation adding age property in object  
        return this.age;//stored in age property in object
    }
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
