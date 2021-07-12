// Object constructor

function User(firstName, lastName, avaatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avaatr = avaatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Wang', 'Hua', 'Avatar');
var user = new User('Linh', 'Hua', 'Avatar');

author.title = 'Learning Javascript online';
user.comment = 'I like it'

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());