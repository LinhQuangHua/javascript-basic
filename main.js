// // Array reduce() method - Part02

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

// Total coin all courses
var totalCoin = courses.reduce(function (total, courses) { return total + courses.coin }, 0);

console.log(totalCoin);

var number = [100, 400, 500, 200];

var total = number.reduce(function (total, number) { return total + number });

console.log(total);

// Flat
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

var topics = [
    {
        topic: 'front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'backend-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newArray = topics.reduce(function (course, topic) {
    return course.concat(topic.courses)
}, []);

console.log(newArray);

var html = newArray.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>${course.id}</p>
        </div>
    `;
});

console.log(html.join(''));




