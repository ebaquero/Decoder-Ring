// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (!shift || shift == 0 || shift >= alphabet.length || shift <= (alphabet.length)* -1) {
      return false;
    }
    
    if (encode === false) {
      shift = shift * (-1);
    }
    
    input = input.toLowerCase();
    let encodedMessage = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (!alphabet.includes(char)) {
        encodedMessage += char;
      }
      for (let i = 0; i < alphabet.length; i++) {
        if (char === alphabet[i]) {
          if (i + shift >= alphabet.length) {
            encodedMessage += alphabet[(i + shift) - alphabet.length];
          } else if (i + shift < 0) {
            encodedMessage += alphabet[26 + (i + shift)]
          } else {
            encodedMessage += alphabet[i + shift]
          }
        }
      }
    }
    return encodedMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
