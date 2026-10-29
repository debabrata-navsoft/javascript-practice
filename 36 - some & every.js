const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Equality
console.log(movements.includes(-130));

//Some
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//Every
console.log(movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
