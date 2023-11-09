// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const characterMap = {};

    for (let i = 0; i < 26; i++) {
      if (encode) {
        characterMap[standardAlphabet[i]] = alphabet[i];
      } else {
        characterMap[alphabet[i]] = standardAlphabet[i];
      }
    }

    input = input.toLowerCase(); 
    let result = '';

    for (let char of input) {
      if (char === ' ') {
        result += ' ';
      } else {
        result += characterMap[char];
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

