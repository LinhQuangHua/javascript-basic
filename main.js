// Object prototype - Basic

function User(firstName, lastName, avaatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avaatr = avaatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'TH1715';
User.prototype.getClassName = function () {
    return this.className;
}

var author = new User('Wang', 'Hua', 'Avatar');
var user = new User('Linh', 'Hua', 'Avatar');

console.log(author.className);
console.log(user.getClassName());

