function findLargest(a, b) {
  if (a > b) {
    return a + " is the largest number.";
  } else if (b > a) {
    return b + " is the largest number.";
  } else {
    return "Both numbers are equal.";
  }
}

console.log(findLargest(10, 20));
