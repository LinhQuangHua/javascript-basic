// Object in Javascript

// Create
var room = 'classroom';
var myInfo = {
    name: 'Linh Wang', // key in bject is property
    age: 20,
    address: 'HCMC',
    [room]: 'TH1715',
    getName: function () {
        return this.name;
    }
}

console.log(myInfo);
console.log(myInfo.getName()); // function in object is method

// Add key 'email' in Object
myInfo.email = 'pikachu@gmail.com';
//myInfo['email'] = 'pikachu@gmail.com'; // another way

console.log(myInfo);

// Get key 
console.log(myInfo.name);
//console.log(myInfo['name']);

// Delete key
delete myInfo.age;
console.log(myInfo);