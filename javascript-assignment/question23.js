function firstNonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (str.indexOf(letter) === str.lastIndexOf(letter)) {
      return letter;
    }
  }

  return null;
}

console.log(firstNonRepeated("abacddbec"));