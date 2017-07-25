'use strict';

const lowercaseA = 97;
const lowercaseZ = 122;
const uppercaseA = 65;
const uppercaseZ = 90;

// Why do we have to subtract 1 here
const k = 87 % 26 - 1;
console.log(`k=${k}`);

function encrypt(input) {
  const result = input.split('');
  for (let i = 0; i < result.length; i++) {
    const original = input.charCodeAt(i);
    const encrypted = processCode(original);
    result[i] = String.fromCharCode(encrypted);
  }
  const encryped = result.join('');

  return encryped;
}

function getRotatedCode(charCode, min, max) {
  let result = charCode + k;

  if (result > max) {
    const diff = result - max;
    result = min + diff;
  }

  return result;
}

function processCode(charCode) {
  let result = charCode;
  if (charCode >= lowercaseA && charCode <= lowercaseZ) {
    result = getRotatedCode(charCode, lowercaseA, lowercaseZ);
  }
  else if (charCode >= uppercaseA && charCode <= uppercaseZ) {
    result = getRotatedCode(charCode, uppercaseA, uppercaseZ);
  }

  return result;
}

//const input = 'middle-Outz';
const input = 'www.abc.xy';
const result = encrypt(input);
console.log(result);
