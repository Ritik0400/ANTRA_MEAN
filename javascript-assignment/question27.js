function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}

function longestPalindrome(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substring = str.slice(i, j + 1);

      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

console.log(longestPalindrome("bananas"));