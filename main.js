// Ternary Operator

var course = {
    name: 'Javascript',
    coin: 0
}

// if(course.coin > 0){
//     console.log(`${course.coin} coin`);
// } else {
//     console.log('Free');
// }

var result = course.coin > 0 ? `${course.coin} coin` : 'Free';
console.log(result);

var a = 1, b = 2;

var c = a > 0 ? a : b;
console.log(c);