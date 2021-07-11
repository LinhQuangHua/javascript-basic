//Javascript string methods

var myString = "Hello Pika Hello Togepi ";

// Length 
console.log(myString.length);

// Find index 
console.log(myString.indexOf('Hello'));  // No position start find
console.log(myString.indexOf('Hello', 8)); // Have position start find

// Search
console.log(myString.search('Hello'));

// Cut 
console.log(myString.slice(6));
console.log(myString.slice(6, 10));
console.log(myString.slice(-7, -1));

// Replace
console.log(myString.replace('Hello', 'Hi')); // replace a first 'Hello' ==> 'Hi'
console.log(myString.replace(/Hello/g, 'Hi')); // replace all 'Hello' ==> 'Hi'

// Upper case
console.log(myString.toUpperCase());

// Upper case
console.log(myString.toLowerCase());

// Trim 
var myName = "   Wang Hua   ";
console.log(myName.trim()); // remove blank
console.log(myName.length); //==> length is 14
console.log(myName.trim().length); // ===> length is 8

// Split
var language = 'PHP, JS, Python';
console.log(language.split(', '));
var language2 = 'Ruby';
console.log(language2.split(''));

// Get a character by index
var fullName = 'Wang Hua';
console.log(fullName[0]); // not exists return undefined
console.log(fullName.charAt(0)); // not exists return string