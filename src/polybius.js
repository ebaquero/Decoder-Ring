// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  function polybius(input, encode = true) {
    const polybiusSquare = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42',
    'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 
    'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 
    'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 
    'z': '55',
  };
    
  function encodeChar(char) {
  if (char === " ") return " ";
    return polybiusSquare[char];
  const rowIndex = Math.floor((char.charCodeAt() - 97) / 5) + 1;
  const colIndex = ((char.charCodeAt() - 97) % 5) + 1;
  return `${colIndex}${rowIndex}`;
}

  function decodePair(pair) {
  if (pair === " ") return " ";
  const colIndex = Number(pair.charAt(0));
  const rowIndex = Number(pair.charAt(1));
  return decipher[rowIndex][colIndex];
}

  function isValidForDecoding(input) {
  const messageNoSpaces = input.replace(/ /g, "");
  return messageNoSpaces.length % 2 === 0;
}


  const reversedPolybiusSquare = {};
  for (const letter in polybiusSquare) {
    reversedPolybiusSquare[polybiusSquare[letter]] = letter;
  }

  input = input.toLowerCase();
  let result = '';
  if (encode) {
      return input
        .toLowerCase()
        .split('')
        .map(encodeChar)
        .join('');
    } else {
      let message = input.toLowerCase().split("");
    const decipher = {
  1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' },
  2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k' },
  3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p' },
  4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u' },
  5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z' },
};
    let messageNoSpaces = message.filter((space) => space !== " ")
      let decodeString = "";
      if(messageNoSpaces.length%2 !==0){
        return false;
      };
      for(let i=0; i<message.length; i+=2 ){
        if(message[i]== " "){
          i--;
          decodeString += " ";
        }else{
          decodeString += decipher[message[i+1]][message[i]];
        }
      }
      return decodeString;

    }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


