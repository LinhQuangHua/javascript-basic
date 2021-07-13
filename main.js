// For/in loop

var myInfo = {
    name: 'Wang Hua',
    age: 18,
    address: 'HCMC'
};

for (var key in myInfo) {
    console.log(myInfo[key]);
}

var language = ['PHP', 'Java', 'Python'];

for (var key in language) {
    console.log(language[key]);
}

var myString = 'Javascript';

for (var key in myString) {
    console.log(myString[key]);
}