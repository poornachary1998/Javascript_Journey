// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temp = [3, -2, -1, "error", 9, 13, 17, 14, 9, 5];

// compute the temerature amplitude of the above

//find min and max values
// difference of min and max values are the amplitude

const tempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length - 1; ++i) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > max) {
      max = temp[i];
    }
    if (temp[i] < min) {
      min = temp[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const calcTempAmplitude = tempAmplitude(temp);
console.log(calcTempAmplitude);

// another program for learning debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // 3.fix
    value: Number(prompt("Degree celsius")),
  };
  // 2.Find
  console.table(measurement);
  // the value is taking as a input string we need to change from string to number using number function
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
// 1.identify
