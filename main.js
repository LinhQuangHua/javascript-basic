// Build some menthod

var course = [
    {
        name: 'Ruby',
        coin: 700,
        isFinish: true
    },
    {
        name: 'Python',
        coin: 650,
        isFinish: true
    },
    {
        name: 'C#',
        coin: 500,
        isFinish: true
    }
];

Array.prototype.every2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                return false;
            }
        }
    }
    return true;
};

var filterCourses = course.every2(function (course) {
    return course.isFinish;
});
console.log(filterCourses);



