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
const sub1 = b-name; // string cant be divided nor substracted but can be concatenated 
console.log(sub1);

//Square of number 
const mulResult = a ** 2; // 10 to the power 2
console.log(mulResult);

//division
const div = a/b; // this sign of division is called true division as it also gives decimals
console.log(div);

//modulas % -> for remainder
const mod = b%a;
console.log(mod);

const mod1 = 4%5;
console.log(mod1); //prints 4 as it adds . 0 and does the calculation
//----------------------------------------------------------------------------------------------------------

//increament and decreament
let z = 5;
z++;
z+=2;
z=z+2;
console.log(z);
//----------------------------------------------------------------------------------------------------------

//comparison operators

// == : checks value only 
// === : checks value and datatype BOTH

const x = 10;
const y = '10';
console.log(x == y); //true
console.log(x === y); //false
console.log(x != y ); //false
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

