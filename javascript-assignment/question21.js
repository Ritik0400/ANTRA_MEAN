function fixedLengthCombinations(arr, length) {
  let result = [];

  function findCombos(start, current) {
    if (current.length === length) {
      result.push(current.slice());
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.unshift(arr[i]);
      findCombos(i + 1, current);
      current.shift();
    }
  }

  findCombos(0, []);
  return result;
}

console.log(fixedLengthCombinations([1, 2, 3], 2));