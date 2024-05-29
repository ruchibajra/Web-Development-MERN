// /*

// Right-Angled Triangle:
// *
// **
// ***
// ****
// *****

// */
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
// }

// -----------------------------------------------------------------------

// /*

// Solid Rectangle:
// *******
// *******
// *******
// *******
// *******

// */

// let rows = 5;
// let columns = 7;
// for (let i = 0; i < rows; i++) {
//     let line = '';
//     for (let j = 0; j < columns; j++) {
//         line += '*';
//     }
//     console.log(line);
// }

// -----------------------------------------------------------------------

/*

Inverted Triangle:
*****
****
***
**
*

*/

// let rows = 5;
// for (let i = rows; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
// }

// -----------------------------------------------------------------------

/*

Pyramid:
    *
   ***
  *****
 *******
*********

*/

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     // Print spaces to center the pyramid
//     for (let j = 1; j <= rows - i; j++) {
//         line += ' ';
//     }
//     // Print stars for each row
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         line += '*';
//     }
//     console.log(line);
// }

/*

Inverted Pyramid:
*********
 *******
  *****
   ***
    *

*/

// let rows = 5;
// for (let i = rows; i >= 1; i--) {
//     let line = '';
//     // Print spaces before stars
//     for (let j = 1; j <= rows - i; j++) {
//         line += ' ';
//     }
//     // Print stars for each row
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         line += '*';
//     }
//     console.log(line);
// }
//------------------------------------------------

/*

Hollow Rectangle:
*******
*     *
*     *
*     *
*******

*/
// let rows = 5;
// let columns = 7;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     for (let j = 1; j <= columns; j++) {
//         if (i === 1 || i === rows || j === 1 || j === columns) {
//             // Print stars on the first and last rows, and the first and last columns
//             line += '*';
//         } else {
//             // Print spaces in the interior
//             line += ' ';
//         }
//     }
//     console.log(line);
// }

//------------------------

/*
CROSS:

*   *
 * *
  *
 * *
*   *

*/

// let size = 5;

// for (let i = 0; i < size; i++) {
//     let line = '';
//     for (let j = 0; j < size; j++) {
//         if (i === j || i + j === size - 1) {
//             line += '*';
//         } else {
//             line += ' ';
//         }
//     }
//     console.log(line);
// }

//-----------------

/*
Number Triangle:

1
12
123
1234
12345

*/

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }

//------------

/*

Repeated Number Triangle:
1
22
333
4444
55555

*/

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += i;
//     }
//     console.log(line);
// }

//--------------

/**
 Inverted Number Triangle:
12345
1234
123
12
1
 */

// let rows = 5;
// for (let i = rows; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }

//---------------

/*
Inverted Number Square:
54321
54321
54321
54321
54321
*/

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     for (let j = rows; j >= 1; j--) {
//         line += j;
//     }
//     console.log(line);
// }

//-----------

/**
 Right-Aligned Triangle:
    *
   **
  ***
 ****
*****
 
 */

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     // Adding spaces to right-align the triangle
//     for (let k = 1; k <= rows - i; k++) {
//         line += ' ';
//     }
//     // Adding asterisks
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     }
//     console.log(line);
// }

//-----

/*
Inverted Number Ladder:
12345
1234
123
12
1

*/

// let rows = 5;
// for (let i = rows; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }

//-----------
/*
Alphabet Triangle:

A
AB
ABC
ABCD
ABCDE

*/
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += String.fromCharCode(64 + j);
//     }
//     console.log(line);
// }


// 12345
// 1234
// 123
// 12
// 1

let rows = 5;

for(let i = rows; i>=1; i--){
    let pattern = "";
    for(let j = 1; j<=i; j++ ){
        pattern = pattern + j;
    }
    console.log(pattern);
}