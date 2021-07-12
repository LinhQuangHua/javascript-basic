// Types of function

showMessage();
// Declaration function
function showMessage() {
    console.log("Declaration function");
}

// Expression function

var showMessage_02 = function () {
    console.log("Expression function");
}
// Expression function - Callback
setTimeout(function () {
    console.log("Expression function - Callback");
});
// Expression function in object
var myObject = {
    myFunction: function () {
        console.log("Expression function in object");
    }
}