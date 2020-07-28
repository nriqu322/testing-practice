function upperCase(str) {
  return str === str.toUpperCase();
}

const caesarCypher = (string, num) => {
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    if (upperCase(string[i])) {
      result += String.fromCharCode(((string.charCodeAt(i) + num - 65) % 26) + 65);
    } else {
      result += String.fromCharCode(((string.charCodeAt(i) + num - 97) % 26) + 97);
    }
  }
  return result;
};

export default caesarCypher;