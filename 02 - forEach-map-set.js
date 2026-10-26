const countries = new Map([
  ["USD", "United Sates Dollar"],
  ["EUR", "Euro"],
  ["GBP", "British Pound Sterling"],
]);

countries.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const countriesUnique = new Set(["USD", "EUR", "GBP", "USD", "EUR"]);
console.log(countriesUnique);

countriesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
