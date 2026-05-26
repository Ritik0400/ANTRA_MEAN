//1
function reverseNumber(num) {
  let str = String(num);
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return Number(reversed);
}

console.log("1:", reverseNumber(32243));


//2
function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}

console.log("2:", isPalindrome("madam"));
console.log("2:", isPalindrome("nurses run"));


//3
function stringCombinations(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let temp = "";

    for (let j = i; j < str.length; j++) {
      temp += str[j];
      result.push(temp);
    }
  }

  return result;
}

console.log("3:", stringCombinations("dog"));


//4
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}

console.log("4:", alphabeticalOrder("webmaster"));


//5
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let newWord = word[0].toUpperCase() + word.slice(1);
    result.push(newWord);
  }

  return result.join(" ");
}

console.log("5:", capitalizeWords("the quick brown fox"));


//6
function longestWord(str) {
  let words = str.split(" ");
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log("6:", longestWord("Web Development Tutorial"));


//7
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log("7:", countVowels("The quick brown fox"));


//8
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("8:", isPrime(7));
console.log("8:", isPrime(10));


//9
function getType(value) {
  return typeof value;
}

console.log("9:", getType("hello"));
console.log("9:", getType(100));
console.log("9:", getType(true));


//10
function identityMatrix(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    matrix.push(row);
  }

  return matrix;
}

console.log("10:", identityMatrix(3));


//11
function secondLowestAndGreatest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let secondLowest = arr[1];
  let secondGreatest = arr[arr.length - 2];

  return [secondLowest, secondGreatest];
}

console.log("11:", secondLowestAndGreatest([1, 2, 3, 4, 5]));


//12
function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

console.log("12:", isPerfectNumber(6));
console.log("12:", isPerfectNumber(28));


//13
function getFactors(num) {
  let factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

console.log("13:", getFactors(12));


//14
function amountToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }

  return result;
}

console.log("14:", amountToCoins(46, [25, 10, 5, 2, 1]));


//15
function power(base, exponent) {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }

  return result;
}

console.log("15:", power(2, 4));


//16
function uniqueCharacters(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

console.log("16:", uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));


//17
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

console.log("17:", letterOccurrences("hello"));


//18
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

console.log("18:", binarySearch([1, 3, 5, 7, 9], 7));


//19
function largerThanNumber(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log("19:", largerThanNumber([1, 5, 8, 12, 3], 5));


//20
function randomId(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    result += chars[index];
  }

  return result;
}

console.log("20:", randomId(8));


//21
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

console.log("21:", fixedLengthCombinations([1, 2, 3], 2));


//22
function countLetter(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  return count;
}

console.log("22:", countLetter("microsoft.com", "o"));


//23
function firstNonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (str.indexOf(letter) === str.lastIndexOf(letter)) {
      return letter;
    }
  }

  return null;
}

console.log("23:", firstNonRepeated("abacddbec"));


//24
function bubbleSortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(
  "24:",
  bubbleSortDescending([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);


//25
function longestCountryName(countries) {
  let longest = countries[0];

  for (let i = 1; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
      longest = countries[i];
    }
  }

  return longest;
}

console.log("25:", longestCountryName(["Australia", "Germany", "United States of America"]));


//26
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

console.log("26:", longestSubstringWithoutRepeating("abcabcbb"));


//27
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

console.log("27:", longestPalindrome("bananas"));


//28
function doubleNumber(num) {
  return num * 2;
}

function useFunction(func, value) {
  return func(value);
}

console.log("28:", useFunction(doubleNumber, 10));


//29
function getFunctionName(func) {
  return func.name;
}

console.log("29:", getFunctionName(doubleNumber));