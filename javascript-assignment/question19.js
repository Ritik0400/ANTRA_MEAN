function largerThanNumber(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(largerThanNumber([1, 5, 8, 12, 3], 5));