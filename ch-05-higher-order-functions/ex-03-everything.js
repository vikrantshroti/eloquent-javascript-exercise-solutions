function every(array, predicateFn) {
  for (let element of array) {
    if (!predicateFn(element)) return false;
  }
  return true;
}

function every2(array, predicateFn) {
  return !array.some((element) => !predicateFn(element));
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
