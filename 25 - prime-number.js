function isPrime(num) {
  if (num <= 1) return "Not Prime";

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return "Not Prime Number";
  }
  return "Prime Number";
}

console.log(isPrime(11));
