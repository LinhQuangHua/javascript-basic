// Javascript array methods

// Create
var language = [
    'PHP',
    'Python',
    'C#',
    'JavaScript'
];

// To string
console.log(language.toString()); // returns array to strings

// Join
console.log(language.join(' ')); // same toString() with separator char

// Pop
console.log(language.pop()); // Delete a final element and return it

// Push
console.log(language.push('C++')); // return new length of array
console.log(language);

// Shift
console.log(language.shift()); // Delete a first element and return it

// Unshift
console.log(language.unshift('Dart', 'C')); // add one or more element in array head and return new length of array
console.log(language);

// Splicing
language.splice(1, 1);
//language.splice(1, 0); no delete
language.splice(1, 0, 'Ruby');
console.log(language);

// Concat
var language2 = [
    'Swift',
    'Java'
];
console.log(language.concat(language2));

// Slicing
console.log(language.slice(1, 4));
console.log(language2.slice(-2, -1));
//console.log(language2.slice(0)); copy array
