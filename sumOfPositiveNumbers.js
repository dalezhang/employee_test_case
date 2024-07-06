function sumOfPositiveNumbers(arr) {
   return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

console.log(sumOfPositiveNumbers([-1, 2, 3, -4, 5]));
