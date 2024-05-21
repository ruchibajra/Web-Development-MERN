//3types of variables in JS = var, let, const

// var fullName = "Ruchi Bajracharya" //redeclare
// console.log(fullName);

// let age = 21; 
// console.log(age);

// const role = "Admin";
// console.log(role);


// //VAR
// // var can be redeclared 
// var lastName; //declare
// lastName = "Shakya"
// console.log(lastName);

// var lastName; //redeclare
// lastName = "Shrestha"
// console.log(lastName);
// // (In VAR both last name will be printed : shakya shrestha)


// //LET
// //let cannot be redeclared but can be re assigned
// let year 
// year = 2024;
// year = 2030;
// console.log(year);
// // let year = 2030; (In CONST, this types of redeclaring is not possible, hence it only prints 2030)


const student_name = "ruchi bajracharya"
var address = "patan";
const course = "CSSE"
let interest = "I love playing badminton, dancing and coding"

//BRIEF INTRODUCTION
console.log("Student Name : " + student_name);
console.log("Location : " + address);
console.log("Course : " + course);
console.log(interest);
console.log(typeof address);

//NAN Variable
const history = "social studies"
const nan = history/3;
console.log(nan);

//TYPEOF Variable
const num = 9848;
console.log(typeof num)

//type conversion

// number to sting
const a = 10;
const conversion = String(a);
console.log(typeof(a));
console.log(typeof(conversion));

// string to number
const b = "123";
const consversion1 = Number(b);
console.log(b);
console.log(consversion1);
console.log(typeof(b))
console.log(typeof(consversion1))




