'use strict';

function calcAge(year) {
  const age = 2022 - year;

  //   console.log(firstName); // scope chain look up hence we get the output
  function printAge() {
    //whay happens if we redefine the outer scope variable
    let output = `${firstName}, is ${age}s old and born in ${year}`; //says poorna..
    console.log(output);
    //for proving let const are block variables and var is function variable
    if (year >= 1992 && year <= 2020) {
      var millenium = true;
      //trying to prove JS engine will look for variable in current scope first
      const firstName = 'hero'; // the output returns as ..... poorna because it is declared in current scope first

      const str = `oh you are a millenium. ${firstName}`; //says hero
      console.log(str);
      // Lets us prove functions are blocked scope om Es6

      function add(a, b) {
        return a + b;
      }
      output = 'NewOutPut!'; // reassigning the outer scope variable
      console.log(output); //redfined the variable
      const x = add(3, 6);
      console.log(x); // this works because this is inside block
    }
    // console.log(str); //this does not work because const and let are block variables
    console.log(millenium); //this works because the type is var and it is a functional variable

    // const x = add(3, 6);//we declared this out side block
    // console.log(x);
  }
  printAge();
  return age;
}
//global variable
const firstName = 'poorna';
calcAge(1998);
