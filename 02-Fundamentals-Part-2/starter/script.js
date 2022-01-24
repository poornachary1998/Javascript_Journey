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