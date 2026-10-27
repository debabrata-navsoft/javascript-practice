const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dev = new Person("Dev", 1997);
console.log(dev);

const nick = new Person("Nick", 2017);
const nikhil = new Person("Nikhil", 1975);
console.log(dev instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

dev.calcAge();
nick.calcAge();

console.log(dev.__proto__);
console.log(dev.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(dev));
console.log(Person.prototype.isPrototypeOf(nick));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Home sapiens";
console.log(dev.species, nick.species);

console.log(dev.hasOwnProperty("firstName"));
console.log(dev.hasOwnProperty("species"));
console.log(dev.species);
