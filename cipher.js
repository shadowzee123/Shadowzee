function atbashCipher(text) {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
console.log(alphabet);
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const aCode = 'A'.charCodeAt(0);
  const zCode = 'Z'.charCodeAt(0);
  const AtoZ = zCode + aCode; // 155
  const lowerA = 'a'.charCodeAt(0);
  const lowerZ = 'z'.charCodeAt(0);
  const atoZ = lowerZ + lowerA; // 219

  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= aCode && code <= zCode) {
      return String.fromCharCode(AtoZ - code);
    } else if (code >= lowerA && code <= lowerZ) {
      return String.fromCharCode(atoZ - code);
    } else {
      return char;
    }
  }).join('');
}

document.getElementById('message').addEventListener('input', function () {
  const inputText = this.value;
  const encoded = atbashCipher(inputText);
  document.getElementById('result').textContent = encoded;
});
