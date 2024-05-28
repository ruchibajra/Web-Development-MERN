/*1. Write a function that takes two parameters and returns their sum.*/

// function add(num1, num2){
//     return num1 + num2;
// }

// let addition = add(4,5);
// console.log("Sum: " + addition);
// --------------------------------------------------------------------------------

/*2. Create a function that calculates the average of an array of numbers.*/

// function calculateAverage(numbers){
//     if (numbers === 0){
//         return 0;
//     }

//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++){
//         sum = sum + numbers[i];
//     }

//     let average = sum/numbers.length;
//     return average;
// }

// const numbers = [2,4,1,3,10];
// console.log(calculateAverage(numbers));
// --------------------------------------------------------------------------------

/*3. Write a function that checks if a given number is even or odd.*/

// function checkEvenOrOdd(num){
//     if(num%2 == 0){
//         return `the number ${num} is EVEN`
//     }
//     else if (num%2 == 1){
//         return `the number ${num} is ODD`
//     }
// }

// console.log(checkEvenOrOdd(10));
// console.log(checkEvenOrOdd(5));
// --------------------------------------------------------------------------------

/*4. Create a function that reverses a string. */

// function reverseString(str) {
//     // Split the string into an array of characters
//     const charArray = str.split('');

//     // Reverse the array of characters
//     const reversedArray = charArray.reverse();

//     // Join the reversed array back into a string
//     const reversedString = reversedArray.join('');

//     // Return the reversed string
//     return reversedString;
//   }

//   console.log(reverseString('Coding'));
//   console.log(reverseString('PROGRAMMING'));
// --------------------------------------------------------------------------------

/*5. Write a function that finds the maximum value in an array of numbers. */

//   function findMaxValue(numbers) {
//     // Check if the array is empty
//     if (numbers.length === 0) {
//       return undefined; // Return undefined for an empty array
//     }

//     // Initialize the maximum value with the first element of the array
//     let maxValue = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > maxValue) {
//         maxValue = numbers[i];
//       }
//     }

//     return maxValue;
//   }

//   const nums = [2, 9, 7, 2, 8, -3, 4];
//   console.log(findMaxValue(nums)); // Output: 8
// --------------------------------------------------------------------------------

/*6. Create a function that converts Celsius to Fahrenheit. */

// function celsiusToFahrenheit(celsius) {
//   // Convert Celsius to Fahrenheit using the formula
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// // Example usage:
// console.log(celsiusToFahrenheit(0)); // Output: 32
// console.log(celsiusToFahrenheit(25)); // Output: 77
// console.log(celsiusToFahrenheit(-10)); // Output: 14
// --------------------------------------------------------------------------------

/*7. Write a function that generates a random number between a given minimum and
maximum. */

// function getRandomNumber(min, max) {
//     // Ensure that min and max are numbers and min is less than or equal to max
//     if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
//       throw new Error('Invalid input: min and max should be numbers, and min should be less than or equal to max');
//     }
  
//     // Generate a random number between min and max (inclusive)
//     const randomNumber = Math.random() * (max - min + 1) + min;
  
//     // Return the random number, rounded down to the nearest integer
//     return Math.floor(randomNumber);
//   }
  
//   console.log(getRandomNumber(1, 10)); 
//   console.log(getRandomNumber(5, 15)); 
// --------------------------------------------------------------------------------

/*8. Create a function that checks if a string is a palindrome. */

// function isPalindrome(str) {
//     // Convert the string to lowercase to ensure the check is case-insensitive
//     const normalizedStr = str.toLowerCase();
  
//     // Remove any non-alphanumeric characters (like spaces and punctuation)
//     const cleanedStr = normalizedStr.replace(/[^a-z0-9]/g, '');
  
//     // Reverse the cleaned string
//     const reversedStr = cleanedStr.split('').reverse().join('');
  
//     // Check if the cleaned string is equal to its reverse
//     return cleanedStr === reversedStr;
//   }
  
//   console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
//   console.log(isPalindrome("racecar")); // Output: true
//   console.log(isPalindrome("hello")); // Output: false
// --------------------------------------------------------------------------------

/*9. Write a function that capitalizes the first letter of each word in a sentence. */
// function capitalizeFirstLetterOfEachWord(sentence) {
//     // Split the sentence into words
//     const words = sentence.split(' ');
  
//     // Capitalize the first letter of each word
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
  
//     // Join the words back into a single string
//     return words.join(' ');
//   }
  
//   console.log(capitalizeFirstLetterOfEachWord("hello world")); // Output: "Hello World"
//   console.log(capitalizeFirstLetterOfEachWord("this is a test sentence.")); // Output: "This Is A Test Sentence."
//   console.log(capitalizeFirstLetterOfEachWord("javaScript is fun!")); // Output: "Javascript Is Fun!"

// --------------------------------------------------------------------------------

/*10. Create a function that returns the factorial of a given number. */

// function factorial(n) {
//     // Return 1 if n is 0 because 0! is 1
//     if (n === 0) {
//       return 1;
//     }
  
//     // Initialize result to 1
//     let result = 1;
  
//     // Loop from 1 to n and multiply result by each number
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
  
//     // Return the final factorial value
//     return result;
//   }
  
//   console.log(factorial(5));  // Output: 120
//   console.log(factorial(0));  // Output: 1
//   console.log(factorial(7));  // Output: 5040
// --------------------------------------------------------------------------------

/*11. Write a function that counts the number of occurrences of a specific element in an array */

// function countOccurrences(array, element) {
//     let count = 0;
  
//     for (let i = 0; i < array.length; i++) {
//       // If the current element matches the specified element, increment the counter
//       if (array[i] === element) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const arr = [1, 2, 3, 4, 2, 2, 5, 2];
//   console.log(countOccurrences(arr, 2)); // Output: 4
//   console.log(countOccurrences(arr, 3)); // Output: 1
//   console.log(countOccurrences(arr, 6)); // Output: 0
// --------------------------------------------------------------------------------

/*12. Create a function that checks if a given year is a leap year. */

function isLeapYear(year) {
    // Leap years are divisible by 4, except for years divisible by 100 unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  console.log(isLeapYear(2020)); // Output: true
  console.log(isLeapYear(2021)); // Output: false
  console.log(isLeapYear(1900)); // Output: false
  console.log(isLeapYear(2000)); // Output: true



  
