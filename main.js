// Array in Javascript

// Create
var language = [
    'PHP',
    'Python',
    'C#',
    'JavaScript',
    undefined,
    null,
    function () {

    },
    {},
    123
];
console.log(language);

var language2 = new Array(
    'PHP',
    'Python',
    'C#',
    'JavaScript',
    undefined,
    null,
    function () {

    },
    {},
    123
)

// Check type of array
console.log(Array.isArray(language));

// Length of array
console.log(language.length);

console.log(language[2]);


