//this is for array only, do for object yourself

//  MAP

// const numbers = [1,2,3,50,5];

// const getNumber = numbers.find((number) => number > 30);
// console.log(getNumber);
//------------------------------------------------------------------

// const numbers = [10, 20, 30, 50, 50];

// const getNumber = numbers.find((number) => {
//   return number > 30;
// });
// console.log(getNumber);
//------------------------------------------------------------------

// FILTER

// const numbers = [10, 20, 30, 40, 50];

// const getNumber = numbers.filter((number) => {
//   return number > 30;
// });
// console.log(getNumber);
//------------------------------------------------------------------

// MAP -> USED TO MANIPUTE THE WHOLE ARRAY (ADD, SUBSTRACT, MULTIPLE ETC)

const numbers = [10, 20, 30, 40, 50];

const getNumber = numbers.map((number) => {
  return number - 2;
});
console.log(getNumber);
