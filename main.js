Array.prototype.reduce2 = function (callback, initialValue) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }
    for (; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this); // this is array
    }
    return initialValue;
}
const number = [1, 2, 3, 4, 5]

const result = number.reduce2(function (total, number) { return total + number }, 10);
console.log(result);