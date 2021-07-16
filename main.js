// InnerText vs textContent

var headingElement = document.querySelector('.heading');

//geter
console.log(headingElement.innerText);
// console.log(headingElement.textContent);

//seter
headingElement.innerText = 'New heading';
// headingElement.textContent = 'New heading';

// different innerText and textContent
var heading02Element = document.querySelector('.heading-2');
console.log(heading02Element.innerText);
console.log(heading02Element.textContent);


