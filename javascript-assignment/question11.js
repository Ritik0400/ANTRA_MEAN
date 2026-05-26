function secondLowestAndGreatest(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let secondLowest = arr[1];
  let secondGreatest = arr[arr.length - 2];

  return [secondLowest, secondGreatest];
}

console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]));
