/* 6. Write a JavaScript function getLastElement that takes an array as an argument and
returns the last element of the array. Provide an example with an array of your choice.*/

function getLastElement(arr) {
  return arr[arr.length - 1];
}
const element = ["Pcps", "is", "in", "Lalitpur"];
let lastElement = getLastElement(element);
console.log(`The last element of an array is `, lastElement);

/* 8. Write a JavaScript function reverseString that takes a string as an argument and returns the string reversed. Provide an example with a sample string.*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
let sampleStr = "Plastic";
let reverseStringResult = reverseString(sampleStr);
console.log(`The reverse of ${sampleStr} is ` + reverseStringResult);

/* 17. Write a JavaScript function doubleArray that takes an array of numbers as an argument
 and returns a new array with each number doubled. provide an example with an array of numbers. */
function doubleArray(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
