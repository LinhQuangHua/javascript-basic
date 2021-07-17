// JSON(JavaScript Object Notation)

// Stringify: JavaScript type to JSON
// Parse: JSON to JavaScript type

var a = '1'; // number in JSON
console.log(typeof JSON.parse(a));

var b = 'true'; // boolean in JSON
console.log(typeof JSON.parse(b));

var c = '"Hello"'; // string in JSON
console.log(typeof JSON.parse(c));

var json = '{"name":"Wang Hua", "age":18}';
var object = JSON.parse(json);
console.log(typeof object);

console.log(JSON.stringify({
    name: 'Wang',
    age: 18,
}));
