//this function doubles the input number, i have called it using the function name as argument
function doubleNumber(num) {
  return num * 2;
}

function useFunction(func, value) {
  return func(value);
}

console.log(useFunction(doubleNumber, 10));