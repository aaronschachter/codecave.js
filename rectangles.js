'use strict';

/**
http://www.geeksforgeeks.org/find-two-rectangles-overlap/
Given two rectangles, find if the given two rectangles overlap or not.

Note that a rectangle can be represented by two coordinates, top left and bottom right. 
So mainly we are given following four coordinates.
l1: Top Left coordinate of first rectangle.
r1: Bottom Right coordinate of first rectangle.
l2: Top Left coordinate of second rectangle.
r2: Bottom Right coordinate of second rectangle

4 XXX
3 XXXYYYYY
2 XXXYYYYY
1 XXXYYYYY
0   YYYYYY
  01234567


L1: (0,4)
R1: (2,1)
L2: (2,3)
R2: (7,0)

width1: R1.x - L1.x
width2: R2.x - R2.y
height1: L1.y - R1.y
height2: L2.y - R2.y

if R2.x > R1.x + width1 NO they do not
if R1.y > R2.y + height2 NO they do not

*/

const topLeft1 = {
  x: 0,
  y: 4,
};
const bottomRight1 = {
  x: 2,
  y: 1,
};
const topLeft2 = {
  x: -2,
  y: 3,
};
const bottomRight2 = {
  x: 7,
  y: 0,
};


function width(left, right) {
  return Math.abs(right - left);
}

function height(top, bottom) {
  return Math.abs(top - bottom);
}

const width1 = width(bottomRight1.x, topLeft1.x);
console.log(width1);
const width2 = width(bottomRight2.x, topLeft2.x);
console.log(width2);

if (topLeft1.x + width1 < topLeft2.x) {
  console.log('false');
  return;
}
if (topLeft1.y + width1 < topLeft2.x) {
  console.log('false');
  return;
}
console.log('overlap');
