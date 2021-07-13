// Javascript array methods - Part 02

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML and CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Python',
        coin: 100
    },
    {
        id: 4,
        name: 'C#',
        coin: 150
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 200
    },
    {
        id: 6,
        name: 'Python',
        coin: 300
    }
];

// for (const i in courses) {
//     console.log(courses[i]);
// }

// forEach
courses.forEach(function (courses, index) {
    console.log(index, courses);
});

// every
var isFree = courses.every(function (courses, index) {
    console.log(index);
    return courses.coin === 0;
});
console.log(isFree);

// some
var isFree = courses.some(function (courses, index) {
    console.log(index);
    return courses.coin === 0;
});
console.log(isFree);

// find
var nameCourse = courses.find(function (courses, index) {
    console.log(index);
    return courses.name === 'Python'; // return first courses have name 'Python'
});
console.log(nameCourse);

// filter
var nameCourse = courses.filter(function (courses, index) {
    console.log(index);
    return courses.name === 'Python'; // return all courses have name 'Python'
});
console.log(nameCourse);