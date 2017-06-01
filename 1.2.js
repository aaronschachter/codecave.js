// 1.2
// Write code to reverse a C-Style String.
// (C-String means that “abcd” is represented as 5 characters, including the null character.)

// For now let's just reverse a string.

function reverseString(input) {
  const output = [];
  for (let i = input.length - 1; i >= 0; i--) {
//    console.log(`${i}: ${input.charAt(i)}`);
    output.push(input.charAt(i));
  }

  return output.join('');
}

function reverseStringInPlace(inputString) {
  const input = inputString.split('');
  for (let i = 0; i < inputString.length / 2; i++) {
    const tailIndex = input.length - i - 1;
    const tailChar = input[tailIndex];
    input[tailIndex] = input[i];
    input[i] = tailChar; 
  }
  return input.join('');
}

const input = ['Alabama', 'bear', 'carlton'];

input.forEach((string) => {
  console.log(`${string}: ${reverseString(string)}`);
  console.log(`${string}: ${reverseStringInPlace(string)}`);
});
