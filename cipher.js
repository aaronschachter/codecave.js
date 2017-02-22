'use strict'

// Write a simple cipher that will take a string and replace each letter in the range a-z with 
// the corresponding character 13 steps along the alphabet.

function cipher(inputStr) {
  const chars = inputStr.split('');
  const aCode = 'a'.charCodeAt();
  const zCode = 'z'.charCodeAt();

  for (let i = 0; i < chars.length; i++) {
    const charCode = chars[i].charCodeAt();
    console.log(`${chars[i]}:${charCode}`);
    let newCode;
    if (charCode + 13 < zCode) {
      newCode = charCode + 13;
      chars[i] = String.fromCharCode(newCode);
    } else {
      const diff = zCode - charCode;
      chars[i] = String.fromCharCode(aCode + diff);
    }
  }

  const result = chars.join('');
  console.log(result);

  return result;
}

cipher('aaronz');
