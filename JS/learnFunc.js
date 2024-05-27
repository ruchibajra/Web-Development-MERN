
// (This is not efficient)

// function greet(name){
//     console.log(`Hello, ${name}`);
// }

// greet('Ruchi');
// greet('Ruchi');
// greet('Ruchi');
// greet('Ruchi');
//-------------------

// (This is efficient & reusability is high as data is stored in variable and can be called whereever necessary. ir result)

function greet(name){
    return (`Hello, ${name}`);
}

const result = greet("Sabita");
console.log(result);
console.log(result);
console.log(result);
console.log(result);
//-------------------

function sum(a,b){
    const sumValue = a+b;
    return sumValue;
}

const sumResult = sum(2,5);
console.log(sumResult);
//-------------------

//Function Expresstion

const sub = function(a,b){
    return a-b;
}

const subResult = sub(5,3);
console.log(subResult);
//---------------------

// Function Types:

// a. Named Function
function mult(a,b){
    return a*b;
}
multValue = mult(2,4);
console.log(multValue);

// b. Anonymous Function
const div = function(a,b){
    return a/b;
}
divValue =  div(4,2);
console.log(divValue);

// c. Arrow Function (ES6)
let multiply = (a,b) => a * b;

multiplyValue = multiply(5,5);
console.log(multiplyValue);

