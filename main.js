// Build filter menthod

var course = [
    {
        name: 'Ruby',
        coin: 100
    },
    {
        name: 'Python',
        coin: 300
    },
    {
        name: 'C#',
        coin: 200
    }
];

Array.prototype.filter2 = function (callback) {
    output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
};

var filterCourses = course.filter2(function (course) {
    return course.coin > 100;
});
console.log(filterCourses);



