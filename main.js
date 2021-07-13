// Nested loop

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    };
};

var language = [
    ['PHP', 'Python'],
    ['Java', 'JS'],
    ['C#', 'C++']
];

for (var i = 0; i < language.length; i++) {
    for (var j = 0; j < language[i].length; j++) {
        console.log(language[i][j]);
    };
};