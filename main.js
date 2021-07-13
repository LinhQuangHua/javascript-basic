// Do/while loop

var a = 0;

do {

    a++;
    console.log(a);

} while (a < 10);


var i = 0;
var isSuccess = false;

do {
    i++;

    console.log(i);

    if (true) {
        isSuccess = true;
    }

} while (!isSuccess && i <= 3);