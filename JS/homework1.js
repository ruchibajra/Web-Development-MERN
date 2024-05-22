//ASSIGNMENT 2

/* QNO1: Password Strength Checker: Write code using if/else statements to check the strength of a password based on its length. Print messages 
 * like "Strong password," "Medium password," or "Weak password" depending on the length criteria (e.g., strong: > 12 characters, 
 * medium: 8-12 characters, weak: less than 8 characters). */

const password = "BeautifulLife111#";

if(password.length > 12){
    console.log("Strong Password");
} else if(password.length >= 8 && password.length <=12){
    console.log("Medium Password");
} else {
    console.log("Weak password");
}


/**QNO2: Vowel or Consonant: Write a program using if/else to determine if a character entered by the user is a vowel (a, e, i, o, u) or a consonant.
 *  Consider uppercase and lowercase letters. */

var char = prompt("Enter a character: ");
const lowercase_vowel = (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
const uppercase_vowel = (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U');
if(lowercase_vowel || uppercase_vowel){
    console.log("The character entered is a vowel.");
} else {
    console.log("The character entered is consonant.");
}

/**QNO3: Number Guessing Game: Create a simple guessing game using if/else statements. Generate a random number between 1 and 10 and allow the user to guess it. 
 * Print messages like "Correct!" or "Guess higher/lower" based on their input. */

 const random_number = Math.floor(Math.random() * 10) + 1;
 const guess_number = prompt("Guess a number between 1 to 10: ");
 
  if(guess_number === random_number){
     console.log("Correct! Your guess is right");
  } else if(guess_number < random_number){
     console.log("Guess higher");
  } else {
     console.log("Guess lower");
  }

/**QNO4: Calculate Price with Tax: Write code using if/else to calculate the final price of a product considering a sales tax rate (e.g., 8%).
 *  Take the product price and tax rate as inputs and print the final price with tax. */
const product_price = parseFloat(prompt("Enter the price of the product: "));
const tax_rate = parseFloat(prompt("Enter the sales tax rate: "));

const sales_tax = product_price * (tax_rate / 100);
const final_price = product_price + sales_tax;

console.log(`The final product price with tax is Rs ${final_price}`);

/**QNO5: Simple Calculator: Develop a basic calculator using if/else statements. Allow the user to enter two numbers and 
 * an operator (+, -, *, /). Based on the operator, perform the calculation and print the result.
 */

let first_num = parseInt(prompt("Enter a first number: "));
let second_num = parseInt(prompt("Enter a second number: "));
let operator = prompt("Enter the operator: ");

const sum = first_num + second_num;
const sub = first_num - second_num;
const div = first_num / second_num;
const mul = first_num * second_num;

if(operator === '+'){
    console.log(`The sum of two numbers is ${sum}`);
} else if(operator === '-'){
    console.log(`The subtraction of two numbers is ${sub}`);
} else if(operator === '/'){
    console.log(`The division of two numbers is ${div}`);
}else if(operator === '*'){
    console.log(`The multiplication of two numbers is ${mul}`);
} else{
    console.log("Invalid operator! Please apply this operator (+, -, *, /)");
}

/**QNO6:Movie Rating Recommendation: Write code using switch/case to recommend a movie genre based on a user's age. 
 * Use different cases for age ranges (e.g., children, teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama). */

let age = 19;
let genre;

switch (true){
    case age <= 12:
        console.log("Animation");
        break;
    case age <= 18:
        genre = "Action or Drama";
        break;
    case age <= 40:
        genre = "Drama or Mystery or Romance";
        break;
    case age <= 60:
        genre = "Documentary or Drama";
        break;
    default:
        genre = "Documentary or Thriller or War";
}
console.log(`For the age of ${age}, We reccommend you to watch ${genre} movies.`);

/**QNO7: Weekend or Weekday Checker: Create a program using if/else to determine if a given date (e.g., stored in a variable)
 *  falls on a weekend (Saturday or Sunday). */
var date = '26 May 2024';
let dt = new Date(date); 
let dayOfWeek = dt.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log("The date falls on a weekend (Saturday or Sunday).");
} else {
    console.log("The date does not fall on a weekend.");
}

/**QNO8: Positive, Zero, or Negative: Write code using if/else statements to check if a number
is positive, zero, or negative. Print the corresponding message. */

let num = 0;

if(num >= 1){
    console.log("Positive");
} else if (num <= -1) {
    console.log("Negative");
} else{
    console.log("Zero");
}

/**QNO9 : Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible by 3, 5, or both. Print a message indicating
 *  divisibility or non-divisibility. */
let num1 = 10;

if(num1 % 3 === 0 || num1 % 5 === 0){
    console.log(`${num1} is divisible by both 3 and 5`);

} else if(num1 % 3 === 0) {
    console.log(`${num1} is divisible by 3`);

} else if(num1 % 5 === 0){
    console.log(`${num1} is divisible by 5`);

} else{
    console.log("The number entered is a Non-divisible");
}

/**QNO 10: Even or Odd Sum: Write code using if/else to check if the sum of two user-entered numbers is even or odd. Print the result. */
let number1 = parseFloat(prompt("Enter a first number: "));
let number2 = parseFloat(prompt("Enter a second number:"));

if(isNaN(number1) || isNaN(number2)) {
    console.log("Invalid input");
    } else {
        const sum_result = number1 + number2;
        if(sum_result % 2 === 0){
            console.log("The sum of two user entered number is Even.");
        } else {
            console.log("The sum of two user entered number is Odd.");
        }
    }

 