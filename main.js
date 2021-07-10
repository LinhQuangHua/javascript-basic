//1 - Primitive Data

// Number type
var a = 1;
var b = 1.5;

console.log(typeof (a));
// String type
var name = "Pikachu";
var nickName = "Linh 'Wang'";

// Boolean type
var isOpen = true;

// undefined type
var age;

// Null
var isNull = null;
console.log(typeof (isNull)); // typeof null is object
// Symbol type
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique

console.log(id === id2); //false

//2 - Complex Data

// Array
var myArray = [
    'PHP',
    'C#',
    'Python',
    'javascript'
]

console.log(myArray);

// Function
var myFunction = function () {
    console.log("Helllo World");
}

myFunction();
// Object
var myObject = {
    name: 'Linh Wang',
    age: 20,
    location: 'HCMC',
}
console.log(myObject);

