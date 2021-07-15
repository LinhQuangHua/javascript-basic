// Build some menthod

var course = [
    {
        name: 'Ruby',
        coin: 700,
        isFinish: false
    },
    {
        name: 'Python',
        coin: 650,
        isFinish: false
    },
    {
        name: 'C#',
        coin: 500,
        isFinish: true
    }
];

Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                return true;
            }
        }
    }
    return false;
};

var filterCourses = course.some2(function (course) {
    return course.isFinish;
});
console.log(filterCourses);



