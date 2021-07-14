// Callback in Javascript

function myFunction(params) {
    if (typeof params === 'function') {
        params('Learning Javascript!');
    }
};

function Callback(value) {
    console.log('Value: ' + value);
}

myFunction(Callback);

/*---------------------------------------------*/

var courses = [
    'C#',
    'PHP',
    'Javascript'
];

Array.prototype.map2 = function (callback) {
    var output = [];
    var arraysLength = this.length;
    for (var i = 0; i < arraysLength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var html = courses.map2(function (courses) {
    return `<h2>${courses}</h2>`;
});

// var html = courses.map(function (courses) {
//     return `<h2>${courses}</h2>`;
// });

console.log(html.join(''));