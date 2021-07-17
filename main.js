// Event listener

//var btnElement = document.querySelector('button');

// DOM event
// btnElement.onclick = function () {

//     console.log('Task 01');

//     console.log('Task 02');

//     alert('Task 03');
// };

// setTimeout(function () {
//     // btnElement.onclick();
//     btnElement.onclick = function () { }
// }, 3000)

// Event listener
var btnElement = document.querySelector('button');

function Task01() {
    console.log('Task 01');
}

function Task02() {
    console.log('Task 02');
}

btnElement.addEventListener('click', Task01);
btnElement.addEventListener('click', Task02);

setTimeout(function () {
    btnElement.removeEventListener('click', Task02);
}, 3000);