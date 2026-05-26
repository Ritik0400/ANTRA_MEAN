function longestCountryName(countries) {
  let longest = countries[0];

  for (let i = 1; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
      longest = countries[i];
    }
  }

  return longest;
}

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));