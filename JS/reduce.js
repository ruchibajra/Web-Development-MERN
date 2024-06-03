//reduce take parameters as array

//addition
function add (...numbers){
    return numbers.reduce((sum, num) => sum + num, 0)
}

console.log(add(10,5));


//substraction
function sub (...numbers){
    return numbers.reduce((substract, num) => substract -  num)
}

console.log(sub(10,5));