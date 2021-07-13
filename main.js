// For/of loop

var language = [
    'PHP',
    'Java',
    'Python'
];

for (var value of language) {
    console.log(value);
}

var myString = 'Javascript';

for (var value of myString) {
    console.log(value);
}

// Use for/of loop object

var myInfo = {
    name: 'Wang Hua',
    age: 18,
    address: 'HCMC'
};

console.log(Object.values(myInfo));

for (var value of Object.keys(myInfo)) {
    console.log(value);
}