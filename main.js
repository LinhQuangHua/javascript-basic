// Date in Javascript - Basic

var date = new Date(); // return object

//var date = Date(); // return string
console.log(date);

// Get hour
console.log(date.getHours());

// Get minutes
console.log(date.getMinutes());

// Get seconds
console.log(date.getSeconds());

// Get date
console.log(date.getDate());

// Get month
console.log(date.getMonth() + 1);

// Get year
console.log(date.getFullYear());

console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);