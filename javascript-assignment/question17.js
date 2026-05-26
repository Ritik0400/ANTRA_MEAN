function letterOccurrences(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter !== " ") {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
}

console.log(letterOccurrences("hello"));