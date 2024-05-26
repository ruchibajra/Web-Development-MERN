/*
Q.1. Create two variables, one for your name and another for your age. Print a sentence
combining those variables.
*/

const fullName = "Ruchi Bajracharya";
const age = 20;
console.log("My name is " + fullName + " and I am " + age + " years old.");


/*
Q.2. Assign the value 10 to a variable. Then multiply that variable by itself and store the
result in another variable. Print the final value.
*/

const num = 10;
const result = num * num;
console.log("The final value is: " + result);


/*
Q.3. Write code to check if the character stored in a variable is uppercase or lowercase.
Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes)
*/

// Character to check
let char = 'A';

// Check if character is uppercase (ASCII range: 65-90)
if (char >= 'A' && char <= 'Z') {
    console.log("uppercase");
}
// Check if character is lowercase (ASCII range: 97-122)
else if (char >= 'a' && char <= 'z') {
    console.log("lowercase");
}
// If it's neither uppercase nor lowercase
else {
    console.log("The character is not an alphabet.");
}


/*
Q.4. Declare two variables with numeric values. Add them together and print the sum. Then,
subtract the smaller number from the larger number and store the difference in a new
variable. Print the difference.
*/

let num1 = 20;
let num2 = 10;

let sum = num1 + num2;
console.log("Sum:", sum);

// Find the larger and smaller numbers
let larger = Math.max(num1, num2);
let smaller = Math.min(num1, num2);

// Subtract the smaller number from the larger number
let difference = larger - smaller;
console.log("Difference:", difference);

/*
Q.5. Imagine you have a variable storing a product price. Write code to apply a 10%
discount and print the discounted price.
*/

let productPrice = 100;

// Calculate the discounted price
let discountedPrice = productPrice - (productPrice * 0.1);

// Print the discounted price
console.log("Discounted Price:", discountedPrice);





