// DOM style

var boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'green',
});

console.log(boxElement.style.backgroundColor);



