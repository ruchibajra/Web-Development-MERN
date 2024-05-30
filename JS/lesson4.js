//Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
console.log(john.name);
console.log(john.age);
console.log(john);
// ------------------------------------------------------------------------------------------------
/*aysnchromous has three types: call back, promise, async await */

//Call back function example 1

function greet(name, callback) {
  return callback(name);
}

greet("ruchi ", sayName);

function sayName(name) {
  console.log("Hello " + name);
}

//callback example 2

function add(num1, num2, callback) {
  sum = num1 + num2;
  console.log(sum);
  return callback(num1, num2);
}
add(6, 1, sub);

function sub(num1, num2) {
  min = num1 - num2;
  console.log(min);
}
// ------------------------------------------------------------------------------------------------

//Promise
/*
const promise = new Promise((resolve, reject) =>{
  const sum = 10;
  if(sum == 10){
    resolve("Success");
  }else{
    reject("Error");
  }
});
promise
.then((message) =>{
  console.log(message);
}).catch((message) =>{
  console.log(message);
})
*/


const promise = new Promise((resolve, reject) =>{
  let num1 = 4;
  let num2 = 2;
  let sub = num1 - num2 ;

  if(sub<=5){
    resolve("Success" + sub);
  }else{
    reject("Error" + sub);
  }
});
promise
.then((message) =>{
  console.log(message);
}).catch((message)=>{
  console.log(message);
})


