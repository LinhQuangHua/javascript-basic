// DOM events

/**
 * Input/ select
 * Key up/ down
 */

var inputElement = document.querySelector('input[type="text"]');

// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }

inputElement.oninput = function (e) {
    console.log(e.target.value);
}

// inputElement.onkeyup = function (e) {
//     console.log(e.target.value);
// }

// inputElement.onkeydown = function (e) {
//     console.log(e.target.value);
// }

var checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function (e) {
    console.log(e.target.checked);
}

var selectElement = document.querySelector('select');
selectElement.onchange = function (e) {
    console.log(e.target.value);
}

document.onkeydown = function (e) {
    switch (e.which) {
        case 27:
            console.log("EXIT"); // 27 is ESC btn
            break;
        case 13:
            console.log("ENTER"); // 12 is Enter btn
            break;
    }
}
