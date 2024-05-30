//Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
console.log(john.name);
console.log(john.age);
console.log(john);

//Call back function

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
