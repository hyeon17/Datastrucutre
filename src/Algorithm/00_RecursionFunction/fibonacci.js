// example (1) 피보나치 수열
function fibonacci(number) {
  let result = [0, 1];
  if (number === 0) {
    console.log([0]);
  }
  if (number === 1) {
    console.log([0, 1]);
  }
  for (let i = 2; i <= number; i++) {
    result.push(result[i - 2] + result[i - 1]);
    console.log(result);
  }
}
fibonacci(8);

function recursiveFibonacci(n) {
  //base case
  if (n <= 1) {
    return n;
  } else if (n >= 2) {
    // recursive case
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}
recursiveFibonacci(8);
