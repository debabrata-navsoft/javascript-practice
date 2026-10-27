const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dev = new Person("Dev", 1997);
console.log(dev);

const nick = new Person("Nick", 2017);
const nikhil = new Person("Nikhil", 1975);
console.log(dev instanceof Person);
