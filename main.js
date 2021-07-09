// Prefix and Postfix

var a = 5;

// Prefix
// Step 01: + 1 for a, a = a + 1 => a = 6
// Step 02: return a after + 1
var output = ++a;
console.log(output);

a = 5;
// Postfix
// Step 01: 'a copy', 'a copy' = 5
// Step 02: - 1 for a, a = a - 1 => a = 6
// Step 03: return 'a copy'
var output = a++;
console.log("output: " + output);
console.log("a: " + a++);
