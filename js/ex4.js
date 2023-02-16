const values = [3, 11, 7, 2, 9, 10];

function sumArray() {
  let result = 0;
  values.forEach((value) => (result += value));
  return result;
}

function lowestValue() {
  let lowest = values[0];
  values.forEach((value) => {
    if (value < lowest) lowest = value;
  });
  return lowest;
}

function highestValue() {
  let highest = values[0];
  values.forEach((value) => {
    if (value > highest) highest = value;
  });
  return highest;
}

const result = sumArray();
const lowest = lowestValue();
const highest = highestValue();

alert(`Sum: ${result}, lowest: ${lowest}, highest: ${highest}`);
console.log(`Sum: ${result}, lowest: ${lowest}, highest: ${highest}`);
