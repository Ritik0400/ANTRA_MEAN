function randomId(length) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    result += chars[index];
  }

  return result;
}

console.log(randomId(8));