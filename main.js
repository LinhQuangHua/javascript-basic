// ClassList Property

/**
 * add
 * contains
 * remove
 * toggle
 */

var boxElement = document.querySelector('.box');

console.log(boxElement.classList);

boxElement.classList.add('red', 'blue');

console.log(boxElement.classList.contains('red'));

// boxElement.classList.remove('red');

setTimeout(() => {
    boxElement.classList.remove('red');
}, 3000)

setInterval(() => {
    boxElement.classList.toggle('blue');
}, 1000)
