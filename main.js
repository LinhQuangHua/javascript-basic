// Function in Javascript

// Create
function showDialog() {
    alert("Hello World!");
}
//showDialog();

// Function with a parameter
function writeLog(message) {
    console.log(message);
}
writeLog('Test message');
writeLog(123);
writeLog(['Python', 'JavaScript']);

function writeLog_02(log, message) {
    if (message) {
        console.log(message);
    }

    if (log) {
        console.log(log);
    }

    //console.log(arguments); ==> Out put array with all parameters in this function
}
writeLog_02("Log 01", "Log 02");

// For loop
function writeLog_03() {
    var myString = '';
    for (var param of arguments) {
        //console.log(param);
        myString += `${param} - `
    }
    console.log(myString);
}
writeLog_03("Log 01", "Log 02", "Log 03");