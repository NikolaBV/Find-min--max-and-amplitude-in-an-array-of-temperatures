// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temperatures = [30, 20, 25, 25.5, 26, 32, `error1`, 45, 58, 2, 1];
function findMaxLowAndAmplitude(arr) {
  let highestTemp = 0;
  let lowestTemperature = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === `string`) {
      continue;
    } else {
      if (arr[i] > highestTemp) {
        highestTemp = arr[i];
      } else if (arr[i] < lowestTemperature) {
        lowestTemperature = arr[i];
      }
    }
    console.log(arr[i]);
  }
  console.log(
    `Highest temp: ` + highestTemp + `, Lowest temp: ` + lowestTemperature
  );
  console.log(`Amplitude: ` + (highestTemp - lowestTemperature));
}
findMaxLowAndAmplitude(temperatures);
