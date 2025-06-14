function atbashCipher(text) {
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
