let titleElement = document.getElementById("title");
// console.log(titleElement.textContent);
let content = titleElement.textContent;

let contentParagraph = document.getElementsByClassName("content");
console.log(contentParagraph);
console.log(contentParagraph[0].innerHTML);

let tagListElements = document.getElementsByTagName("li");
console.log(tagListElements.length);

console.log(content);
content = "hello chatgpt";
console.log(content);

const paragraphElement = document.querySelector(".content");
paragraphElement.innerHTML = "This is a <strong> modified </strong> paragrapgh";

// accessing attributes

var inputElement = document.getElementById("myInput");
console.log(inputElement.type);
console.log(inputElement.value);

// modifying attributes

inputElement.value = "new value ho hai";
console.log(inputElement.value);

// using getAttribute()
var inputElement = document.getElementById("myInput");
console.log(inputElement.getAttribute("value"));

inputElement.setAttribute("value", "New Value Ji");
console.log(inputElement.getAttribute("value"));

// checking if an attribute exists
var element = document.getElementById("myInput");
if (element.hasAttribute("type")) {
  console.log("attribute exists");
} else {
  content.log("attribute doesnot exists");
}

// creating NEW and appending elements
const newElement = document.createElement("div");
newElement.textContent = 'newly created element';

const bodyElement = document.body;
bodyElement.appendChild(newElement);
