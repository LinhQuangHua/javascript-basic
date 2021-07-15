// HTML DOM

/**
 * 1. Elements: Get by ID, class, tag, CSS selector, HTML collection
 * 2. Attribute:
 * 3. Text: 
 */

var getById = document.getElementById('heading');
console.log(getById);

var getClassName = document.getElementsByClassName('heading');
console.log(getClassName);

var getTagName = document.getElementsByTagName('h1');
console.log(getTagName);

var getCssSelector = document.querySelector('.heading');
console.log(getCssSelector);

var getHeading01 = document.querySelector('.box .heading-2:first-child');
console.log(getHeading01);

var getHeading02 = document.querySelector('.box .heading-2:nth-child(2)');
console.log(getHeading02);

var getAllHeading = document.querySelectorAll('.box .heading-2');
console.log(getAllHeading);
console.log(getAllHeading[0]);

var htmlCollection = document.forms.form01;
// var htmlCollection = document.forms['form01'];
console.log(htmlCollection);

console.log(document.anchors);



