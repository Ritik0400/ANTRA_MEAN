function reverseNumber(num) {
  let str = String(num);
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return Number(reversed);
}

console.log(reverseNumber(32243));