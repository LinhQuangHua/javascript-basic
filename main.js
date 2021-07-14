// // Array reduce() method

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
var total = 0;
courses.forEach(element => {
    return total += element.coin;
});
console.log(total);

// use reduce()
function coinHandler(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0); // 0 is initial value

console.log(totalCoin);

/*--------------------------------------*/

// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0); 

/*--------------------------------------*/

// var totalCoin = courses.reduce((a,b) => a+b.coin ,0); 







