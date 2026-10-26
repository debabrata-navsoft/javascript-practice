const movements = [200, 450, -400, 3000, 650, -130, 70, 1300];

const deposites = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposites);

const depositesFor = [];
for (const mov of movements) if (mov > 0) depositesFor.push(mov);
console.log(depositesFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
