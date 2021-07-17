// DOM events - Part03

/**
 * PreventDefault
 * StopPropagation
 */

var aElement = document.links;

for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (e) {
        // console.log(e.target.href);
        if (!e.target.href.startsWith('https://f8.edu.vn/')) {
            e.preventDefault();
        }
    };
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function (e) {
    e.preventDefault();
}
ulElement.onclick = function (e) {
    console.log(e.target);
}

document.querySelector('div').onclick = function () {
    console.log('DIV');
}

document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('Click me!');
}


