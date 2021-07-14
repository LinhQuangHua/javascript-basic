// Math object

// Math.PI 
console.log(Math.PI);

// Math.round()
console.log(Math.round(1.3)); // return 1
console.log(Math.round(1.5)); // return 2

// Math.abs()
console.log(Math.abs(-4)); //  |-4| = 4

// Math.ceil()
console.log(Math.ceil(1.9));
console.log(Math.ceil(1.00023));

// Math.floor()
console.log(Math.floor(1.9));
console.log(Math.floor(1.00023));

// Math.min()
console.log(Math.min(-10, 50, 20, 10, 5, 7));

// Math.max()
console.log(Math.max(-10, 50, 20, 10, 5, 7));


// Math.random()
console.log(Math.random()); // Return number < 1
console.log(Math.floor(Math.random() * 10))

var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
];

console.log(bonus[random]);