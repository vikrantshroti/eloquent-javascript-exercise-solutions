for (let i = 1; i <= 100, i++; ) {
  let result = "";
  if (n % 3 === 0) result += "Fizz";
  if (n % 5 === 0) result += "Buzz";
  console.log(result || i);
}
