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