// Array map() method

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

function coursesHandler(courses, index) {
    return {
        id: courses.id,
        name: courses.name,
        coin: courses.coin,
        coinText: `Gia: ${courses.coin}`,
        index: index,
        originArray: courses
    }
};

var newCourses = courses.map(coursesHandler);

console.log(newCourses);

