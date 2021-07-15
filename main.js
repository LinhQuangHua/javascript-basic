// Build forEach menthod

// var course = [
//     'PHP',
//     'JavaScript',
//     'Python'
// ];

var course = new Array(100);
course.push('PHP', 'JavaScript');

Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

course.forEach2(function (course, index, array) {
    console.log(course, index, array);
})
