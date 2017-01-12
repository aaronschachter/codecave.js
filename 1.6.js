'use strict';

/**

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees. Can you do this in place?

Example: 

A B C 
D E F
G H I

G D A
H E B
I F C

0,0 -> 0,2
1,0 -> 0,1
2,0 -> 0,0

0,2 -> 2,2
1,2 -> 2,1
2,2 -> 2,0

0,1 => 1,2
1,1 => 1,1
2,1 => 1,0

A B 
C D 

C A
D B 

0,0 => 0,1
1,0 => 1,0
1,0 => 0,1
1,1 => 1,0

A B C D 
E F G H
I J K L
M N O P

M I E A
N J F B
O K G C
P L H D



*/
const orig = [['A','B','C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
console.log(orig);

function rotateMatrix(orig) {
  const length = orig.length;
  const rotated = [];
  for (let i = 0; i < length; i++) {
    const row = orig[i];
    rotated[i] = [];
    for (let j = 0; j < length; j++) {
      const y = Math.abs(length - j - 1);
      console.log(`y=${y}`);
      rotated[i][j] = orig[y][i];
    }
  }
  console.log(rotated);
}

rotateMatrix(orig);
