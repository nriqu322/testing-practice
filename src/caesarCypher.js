const caesarCypher = (string, num) => {
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
      result += String.fromCharCode(((string.charCodeAt(i) + num - 65) % 26) + 65);
    } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
      result += String.fromCharCode(((string.charCodeAt(i) + num - 97) % 26) + 97);
    } else {
      result += string[i];
    }
  }
  return result;
};

export default caesarCypher;