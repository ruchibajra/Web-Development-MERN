// arithmrtic operators

//addition
var a = 10;
var b = 20;
var sum = a + b;
console.log(sum);

const name = "John";
const concat = name + b;
console.log(concat);

//substraction
const sub = a - b;
const sub1 = b - name; // string cant be divided nor substracted but can be concatenated
console.log(sub1);

//Square of number
const mulResult = a ** 2; // 10 to the power 2
console.log(mulResult);

//division
const div = a / b; // this sign of division is called true division as it also gives decimals
console.log(div);

//modulas % -> for remainder
const mod = b % a;
console.log(mod);

const mod1 = 4 % 5;
console.log(mod1); //prints 4 as it adds . 0 and does the calculation
//----------------------------------------------------------------------------------------------------------

//increament and decreament
let z = 5;
z++;
z += 2;
z = z + 2;
console.log(z);
//----------------------------------------------------------------------------------------------------------

//comparison operators

// == : checks value only
// === : checks value and datatype BOTH

const x = 10;
const y = "10";
console.log(x == y); //true
console.log(x === y); //false
console.log(x != y); //false
console.log(x !== y); //true
//----------------------------------------------------------------------------------------------------------

//logical operators
//AND = all conditions should be TRUE to be TRUE
//OR = any one conditions can be TRUE to be TRUE
//NOT = opposite

const p = true;
const q = false;

console.log(p && q);
console.log(p || q);
console.log(!p);
//----------------------------------------------------------------------------------------------------------

//q/ansers
console.log("10" + " 10"); // 10 10
console.log("10" - "10"); // 0
console.log("10" + +10); // 1010
console.log("10" - 10); // 0
console.log(10 + +"10"); // 20
//----------------------------------------------------------------------------------------------------------

// CONDITIONAL STATEMENT

//if statement
// let age = 18;
// if (age >= 18) {
//   console.log("you are eligible to vote");
// } else {
//   console.log("you are not eligible to vote");
// }

//calculate grades based on marks
let marks = 85;
if (marks >= 80) {
  console.log("grade A");
} else if (marks >= 70) {
  console.log("grade B");
} else if (marks >= 60) {
  console.log("grade C");
} else {
  console.log("fail");
}

//calculate bmi

// let weight = 20;
// let height = 5.6;
// let height_in_meter = 152 / 100;
// let bmi = weight / (height_in_meter * height_in_meter);

// if (bmi < 18.5) {
//   console.log("you are underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("you are normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("you are overweight");
// } else {
//   console.log("you have obesity");
// }

// switch case

let day = 2;
switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 6:
    console.log("friday");
    break;
  default:
    console.log("invalid");
    break;
}

// switch case
let weight = 56;
let height = 5.6;
let height_in_meter = 152 / 100;
let bmi = weight / (height_in_meter * height_in_meter);

switch (true) {
  case bmi < 18.5:
    console.log("underweight");
    break;
  case bmi >= 18.5 && bmi <= 24.9:
    console.log("normal weight");
    break;
  case bmi >= 25 && bmi <= 29.9:
    console.log("you are over weight");
    break;
  case bmi > 30:
    console.log("obeisity");
    break;
  default:
    console.log("invalid");
    break;
}

//QNO1 : How can you use an if/else in js to check if a number is positive or negative. Use both cases.

let n = -5;

//if statement
if (n >= 1) {
  console.log("positive number");
} else {
  console.log("negative number");
}

//switch case
switch (true) {
  case n >= 1:
    console.log("positveee");
    break;
  case n < 1:
    console.log("negativeee");
    break;
  default:
    console.log("invalid");
    break;
}

//QNO2: check if user is eligible to vote

let age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

switch (true) {
  case age >= 18:
    console.log("eligible to vote");
    break;
  case age >= 18:
    console.log(" not eligible to vote");
    break;
  default:
    console.log("invalid");
    break;
}

//QNO 3: How can you use if else to check if a given string is longer than 10 characters or not.
let word = 'Ruchi';
let word_length = word.length;
// console.log(word_length);

if(word_length > 10){
    console.log("word is longer than 10")
}
else{
    console.log("word is not longer than 10")
}

// QNO 4:check is given year is leap year or not. hint year%4 === 0 && year % 100 !==0 
let year = 2024;

if ( year%4 === 0 && year % 100 !==0){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is NOT a leap year`);
}

// QNO5: Take a month number (1-12) as input and returns the number of days in that month using switch case

