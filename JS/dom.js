// let titleElement = document.getElementById("title");
// // console.log(titleElement.textContent);
// let content = titleElement.textContent;

// let contentParagraph = document.getElementsByClassName("content");
// console.log(contentParagraph);
// console.log(contentParagraph[0].innerHTML);

// let tagListElements = document.getElementsByTagName("li");
// console.log(tagListElements.length);

// console.log(content);
// content = "hello chatgpt";
// console.log(content);

const paragraphElement = document.querySelector(".content");
paragraphElement.innerHTML = "This is a <strong> modified </strong> paragrapgh";

// // accessing attributes

// var inputElement = document.getElementById("myInput");
// console.log(inputElement.type);
// console.log(inputElement.value);

// // modifying attributes

// inputElement.value = "new value ho hai";
// console.log(inputElement.value);

// // using getAttribute()
// var inputElement = document.getElementById("myInput");
// console.log(inputElement.getAttribute("value"));

// inputElement.setAttribute("value", "New Value Ji");
// console.log(inputElement.getAttribute("value"));

// // checking if an attribute exists
// var element = document.getElementById("myInput");
// if (element.hasAttribute("type")) {
//   console.log("attribute exists");
// } else {
//   content.log("attribute doesnot exists");
// }

// // creating NEW and appending elements
// const newElement = document.createElement("div");
// newElement.textContent = 'newly created element';

// const bodyElement = document.body;
// bodyElement.appendChild(newElement);



/* DOM Manipulation in Javascript
d- document (refers to web page)
o- object (represent element or entity in the document eg. html tags, attributes, text etc)
m- model (how objects are organized and its relation with each other eg reln of body and head tgt)


several methods to select elements in DOM
1. getElementById
2. getElementByClassName
3. getElementByTagName 
4. querySelector -> selects 1st element that matches a specific css selector
5. querySelectorAll -> selects all elements that matches a css selector
*/

//---------------------------------------------------------------------------------------------------------

// note in browser -> inspect -> console -> console.log(document);


// 1. ACCESSING ELEMENT

// 1a. using id
let titleElement = document.getElementById('title')
// console.log(titleElement.textContent);

// 1b. using class
let contentElements = document.getElementsByClassName('content');
console.log(contentElements[0].textContent);


// 2. MODIFYING ELEMENT

// 2a. For Changing Text Content : Use the textContent property 
titleElement.textContent = 'This is a new modified text'
console.log(titleElement.textContent);

// 2b. For Changing HTML Content : Use the innerHTML property 
const paragrapghElement = document.querySelector('.content');
paragrapghElement.innerHTML = "this para is changed using innerHTML";


// 3. ACCESSING ATTRIBUTES USING DOM PROPERTIES
var inputElement = document.getElementById('myInput');
console.log(inputElement.type); /*output: text */
console.log(inputElement.value); /*output: Hello, Ruchi Bajracharya! */


// 4. MODIFYING ATTRIBUTES USING DOM PROPERTY
inputElement.value = 'Hi, this is Sabita Bajracharya';
console.log(inputElement.value)


// 5. Using getAttribute() and setAttribute() methods

// 5a. getAttribute()
var inputElement = document.getElementById('myInput');
console.log(inputElement.getAttribute('value')) /*out[ut: Hello, Ruchi Bajracharya!*/


// 5b. setAttribute()
inputElement.setAttribute('value', 'new value using setAttribute');
console.log(inputElement.getAttribute('value'));


// 6. REMOVING AN ATTRIBUTE
var inputElement = document.getElementById('myInput');
inputElement.removeAttribute('type');


// 7. CHECKING IF AN ATTRIBUTES EXISTS

var element = document.getElementById('myInput');

if(element.hasAttribute('type')){
  console.log('attribute exists');
}else{
  console.log('attribute does not exists');
}


// 8. CREATING AND APPENDING ELEMENTS

// 8a. Creating Elements: Use the createElement method to create a new element
const newElement = document.createElement('div');
newElement.textContent = 'This is a newly created div from js';

// 8b. Appending Elements: The newly created div is added in the body using appenChild method
const bodyElement = document.body;
bodyElement.appendChild(newElement);










