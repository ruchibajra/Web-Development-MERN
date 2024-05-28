/* OBJECT */

const college = {
    name: 'PCPS',
    establishment: 2020,
    color: 'red',
    faculty: ['Administration', 'Finance', 'Academic'],
};

console.log(college.name); //access object
console.log(college.faculty); //access object
console.log(college.faculty[0]); //access objecl's array
//----------------------------------------------------------------------

/* ARRAY KEYWORDS */

const numbers = [3,1,5,2,4];

numbers.push(6); // add element at the end
console.log(numbers) //[[3,1,5,2,4,6]

numbers.pop();
console.log(numbers) //[[3,1,5,2,4]

numbers.sort();
console.log(numbers); //[ 1, 2, 3, 4, 5 ]

numbers.shift();
console.log(numbers); //[ 2, 3, 4, 5 ]

numbers.unshift(88);
console.log(numbers); //[ 88, 2, 3, 4, 5 ]

//----------------------------------------------------------------------

/*OBJECT METHODS*/

const rectangle = {
    width: 10,
    height: 5,
    getArea: function(){
        return this.width * this.height;
    }
}

console.log(rectangle.getArea());


