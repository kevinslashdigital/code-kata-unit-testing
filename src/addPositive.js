// Write a function that takes an array and returns the sum of all the positive numbers in the array. Values that can be converted to numbers should be converted and included in the sum if positive. If the array is empty, return zero.
const addPositive = (array) => {
  let sum = 0;
  array.forEach((number) => {
    if (number > 0) {
      sum += Number(number);
    }
  });
  return sum;
};

module.exports = addPositive;
