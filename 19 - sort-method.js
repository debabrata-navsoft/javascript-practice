// Ascending order
const numbers = [10, 20, 1, 5, 40, 80, 2, 100];

numbers.sort((a, b) => a - b);
console.log(numbers);

// Descending order
const numbers2 = [10, 20, 1, 5, 40, 80, 2, 100];

numbers2.sort((a, b) => b - a);
console.log(numbers2);

// Sort object by property - Ascending order
const users = [
  { name: "Rohit", age: 30 },
  { name: "Amit", age: 22 },
  { name: "Dev", age: 27 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);

// Descending order
const users2 = [
  { name: "Rohit", age: 30 },
  { name: "Amit", age: 22 },
  { name: "Dev", age: 27 },
];

users.sort((a, b) => b.age - a.age);
console.log(users);

// Sorting strings without worrying about latter case
const names = ["rohit", "Amit", "dev", "Sourav"];

names.sort((a, b) => a.localeCompare(b));
console.log(names);

// Dose sort() change the original array
const numbers3 = [30, 10, 20];

const result = numbers3.sort((a, b) => a - b);
console.log(numbers3);
console.log(result);

// Mordern JavaScript --- toSorted
const numbers4 = [20, 30, 2, 40, 100, 80];

const sortedNumbers = numbers4.toSorted((a, b) => a - b);
console.log(numbers4);
console.log(sortedNumbers);
