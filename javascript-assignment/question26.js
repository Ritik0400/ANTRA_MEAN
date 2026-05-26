function longestSubstringWithoutRepeating(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let current = "";

    for (let j = i; j < str.length; j++) {
      if (current.includes(str[j])) {
        break;
      } else {
        current += str[j];
      }
    }

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

console.log(longestSubstringWithoutRepeating("abcabcbb"));