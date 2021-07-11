// Number in Javascript

// Create
var age = 18; // ==> type is number
var PI = 3.14;

var otherNumber = new Number(9); // type is object

// Check NaN
var check01 = 20 / 'ABC';
console.log(isNaN(check01)); // ==> true
var check02 = 20 / 5;
console.log(isNaN(check02)); // ==> flase

// To string
console.log(age.toString());

// To fixed
console.log(PI.toFixed()); // ==> return 3
var money = 300.561487;
console.log(money.toFixed(2)); // return 300.56
