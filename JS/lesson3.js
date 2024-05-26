// JavaScript questions for loop

/*Question 1:
Q: Write a for loop that prints numbers from 1 to 5 in the console. */

for(let i = 1; i<=5; i++){
    console.log('Numbers from 1 to 5 are : '+i);
}

//----------------------------------------------------------------------------------------------

/*Question 2:
Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the
console. */

// let i = 2;
// while(i<=10){
//     console.log('Even numbers from 2 to 10 are : ' + i)
//     i += 2;
// }

//----------------------------------------------------------------------------------------------

/*Question 3:
Q: Write a for loop to calculate the sum of numbers from 1 to 10.*/

// let sum = 0;

// for(let i = 1; i<=10; i++){
//     sum = sum + i;
// }
// console.log('Sum of numbers from 1 to 10 is: ' + sum)

//----------------------------------------------------------------------------------------------

/*Question 4:
 **Q: Using a while loop, find the factorial of a given number (e.g., 5).** */

// let num = 5;
// let facto = 1;

// while (num>=1){
//     facto = facto * num;
//     num-- ;
// }
// console.log(`Factorial of 5 is ${facto}`);

//----------------------------------------------------------------------------------------------

/*Question 5:
 **Q: Write a for loop that prints the square of numbers from 1 to 5.** */

// for (let i = 1 ; i<=5; i++){
//     let result = i**2;
//     console.log(`Square of ${i} is ${result}`)
// }

//----------------------------------------------------------------------------------------------

/*Question 6:
 **Q: Using a while loop, print the cube of numbers from 1 to 5.** */

// let n = 1;

// while(n<=5){
//     let result = n**3;
//     console.log(`Cube of ${n} is ${result}`)
//     n++
// }

//----------------------------------------------------------------------------------------------

/*Question 7:
**Q: Write a for loop to iterate through an array of names and print each name
in the console.** */

// // Array of names
// let names = ["Reena", "Ruchi", "Aryan", "Aveshesh"];

// // Iterate through the array using a for loop
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

//----------------------------------------------------------------------------------------------

/*Question 8:
 **Q: Using a while loop, find the sum of elements in an array of numbers.** */

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// let i = 0;

// while (i < numbers.length){
//     sum += numbers[i];
//     i++;
// }
// console.log("The sum of the elements in the array is " + sum);

//----------------------------------------------------------------------------------------------

/*Question 9:
 **Q: Write a for loop that prints the elements of an array in reverse order.** */

// array = ['apple', 'banana', 'orange', 'watermelon', 'mango'];

// for(let i = array.length - 1; i>=0; i--){
//     console,console.log(array[i]);
// }

//----------------------------------------------------------------------------------------------

/*Question 10:
 **Q: Using a while loop, find the largest number in an array of numbers.** */

// let num = [4, 5, 2, 7, 3, 1, -9, 8, 6];
// let i = 0;
// let largest = num[0]; //Initializing first element of array of num as largest

// while(i<=num.length){
//     if(num[i] >= largest){
//         largest = num[i];
//     }
//     i++;
// }

// console.log('the largest number is: ' + largest);

//----------------------------------------------------------------------------------------------

/*Question 11:
 **Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.** */

// let sum = 0;

// for(let i = 1; i<=20; i++){
//     if(i%2 == 0){
//         sum = sum + i;
//     }
// }
// console.log(`The sum of all even numbers from 1 to 20 is ${sum}`);

//----------------------------------------------------------------------------------------------

/*Question 12:
 **Q: Using a while loop, find the product of all odd numbers from 1 to 15.** */

// let prod = 1;
// let i = 1;

// while (i <= 15) {
//   if (i % 2 == 1) {
//     prod = prod * i;
//   }
//   i++;
// }
// console.log(`The product of all odd numbers from 1 to 15 is ${prod}`);

//----------------------------------------------------------------------------------------------

/*
Question 13:
**Q: Write a for loop to print the following pattern:**
```
*
**
***
****
*****
```
*/

// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += "*";
//     }
//     console.log(line);
// }

//----------------------------------------------------------------------------------------------

/*Question 14:
 **Q: Using a while loop, print the numbers from 10 to 1 in descending order.** */

// let num = 10;

// while(num>=1){
//     console.log(num);
//     num--
// }

//----------------------------------------------------------------------------------------------

/*Question 15:
 **Q: Write a for loop to calculate the factorial of a given number (e.g., 6).** */

// let fact = 1;
// let num = 6;

// for(let i = num; i >= 1; i-- ){
//     fact = i * fact;
// }
// console.log(fact);

//----------------------------------------------------------------------------------------------

/*Question 16:
 **Q: Using a while loop, find the sum of digits of a given number (e.g., 123).** */

// let number = 1234;
// let sum = 0;

// // Loop until the number becomes 0
// while (number !== 0) {
//     // Extract the last digit of the number
//     let digit = number % 10;
//     // Add the extracted digit to the sum
//     sum += digit;
//     // Remove the last digit from the number
//     number = Math.floor(number / 10);
// }

// console.log("Sum of digits:", sum);

//----------------------------------------------------------------------------------------------

/**Question 17:
**Q: Write a for loop to print the following pattern:
```
55555
4444
333
22
1
```
**/
// console.log("Pattern:");

// for (let i = 5; i >= 1; i--) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += i;
//     }
//     console.log(line);
// }

//----------------------------------------------------------------------------------------------

/*Question 18:
 **Q: Using a while loop, print the first 10 Fibonacci numbers.**
 */

// let n = 10;
// let fib1 = 0, fib2 = 1;
// let count = 0;

// // Print the first two Fibonacci numbers
// console.log(fib1);
// console.log(fib2);
// count += 2;

// // Loop to generate and print the next Fibonacci numbers
// while (count < n) {
//     let fibNext = fib1 + fib2;
//     console.log(fibNext);
//     fib1 = fib2;
//     fib2 = fibNext;
//     count++;
// }

//----------------------------------------------------------------------------------------------

/*Question 19:
 **Q: Write a for loop to find and print the prime numbers between 1 and 20.**
 */
// console.log("Prime numbers between 1 and 20:");

// for (let num = 2; num <= 20; num++) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(num);
//   }
// }

//----------------------------------------------------------------------------------------------

/*Question 20:
 **Q: Using a while loop, reverse a given number (e.g., 12345).**
 */
// let number = 12345;
// let reversedNumber = 0;
// let remainder;

// console.log("Original number:", number);

// while (number !== 0) {
//   remainder = number % 10;
//   reversedNumber = reversedNumber * 10 + remainder;
//   number = Math.floor(number / 10);
// }

// console.log("Reversed number:", reversedNumber);

// --------------------------------------------------------------------------------------------

// //for loop
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// //CONTINUE : it skips the given number , BREAK: it terminates after the given number
// //EX1:
// for(let i = 1; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// //EX2:
// for(let i = 1; i<=10; i++){
//     if(i==5 || i==6 || i==7){
//         continue;
//     }
//     console.log(i);

// }

// //WHILE LOOP
// let i = 1;
// while(i <= 10){
//     if (i==6){
//         i++
//         continue;
//     }
//     console.log(i)
//     i++
// }

// //DO WHILE LOOP
// do{
//  console.log(i);
//  i++;
// }while(i<=10);

// CLASSWORK

// // 1: even number from 2 to 10 using while loop

// let i = 2;

// while(i<=10){
//     console.log(i)
//     i += 2;
// }

// // 2: for loop to calculate the sum of number from 1 to 10
// let sum = 0;

// for(let i = 1; i<=10; i++){
//     sum = sum + i;
// }
// console.log(sum)

// //3. Using while loop find the factorial of the given number

// let n=5;
// result = 1;

// while(n>1){
//     result = result * n;
//     n--;

// }
// console.log(result);

// //4. Write a for loop that prints the square of numbers from 1 to 5

// for (let i = 1 ; i<=5; i++){
//     let result = i**2;
//     console.log(`Square of ${i} is ${result}`)
// }

// //5. Write a while loop that prints the cube of numbers from 1 to 5

// let i = 1;

// while(i<=5){
//     let result = i**3;
//     console.log(`Cube of ${i} is ${result}`)
//     i++
// }

// //6. Write a for loop to iterate through an array of names and print each name.

// // Array of names
// let names = ["Reena", "Ruchi", "Aryan", "Aveshesh"];

// // Iterate through the array using a for loop
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // 7. Using while loop, find the sum of the element in an array of numbers
// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// let i = 0;

// while (i < numbers.length){
//     sum += numbers[i];
//     i++;
// }
// console.log("The sum of the elements in the array is " + sum);

// //8. Write a for loop that prints the element in reverse order

// //9 . Using a while loop, print the first 10 fibonacci numbers.

// //10. Write a for loop and print the prime numbers between 1 to 20.
