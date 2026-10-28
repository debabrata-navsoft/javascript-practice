function findFourLargest(a, b, c, d) {
  if (a >= b && a >= c && a >= d) {
    return a + " is the largest number.";
  } else if (b >= a && b >= c && b >= d) {
    return b + " is the largest number.";
  } else if (c >= a && c >= b && c >= d) {
    return c + " is the largest number.";
  } else {
    return d + " is the largest number.";
  }
}

console.log(findFourLargest(10, 20, 30, 40));
