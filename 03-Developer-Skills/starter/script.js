// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temp = [3, 2, 1, "error", 9, 13, 17, 14, 9, 5];

// compute the temerature amplitude of the above

//find min and max values
// difference of min and max values are the amplitude

// const tempAmplitude = function (temp) {
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temp.length - 1; ++i) {
//     if (typeof temp[i] !== "number") continue;
//     if (temp[i] > max) {
//       max = temp[i];
//     }
//     if (temp[i] < min) {
//       min = temp[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const calcTempAmplitude = tempAmplitude(temp);
// console.log(calcTempAmplitude);

// // another program for learning debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     //3.fixing bug
//     value: Number(prompt(`What is the temperature in celsius?`)),
//   };
//   // as this is the operation that converts the cel to kel
//   console.table(measurement);
//   //in the above line the value is string . The prompt funtion retruns always a string
//   // Now we need to change this type string to number
//   return measurement.value + 273;
// };
// // A.Identify the bug
// console.log(measureKelvin());

// // coding challenge

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK �

const maxTemp = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];

// console.log(
//   `${maxTemp[0]}ºC in 1days ... ${maxTemp[1]}ºC in 2 days ... ${maxTemp[2]}ºC in 3 days ...`
// );

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i <= maxTemp.length - 1; i++) {
    // console.log(`${maxTemp[i]}ºC in ${i + 1}days `);
    str = str + ` ... ${maxTemp[i]}ºC in  ${i + 1}days `;
  }
  return str;
};

console.log(printForecast());
