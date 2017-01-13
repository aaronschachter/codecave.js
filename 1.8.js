'use strict';

/*
Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using 
only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”)

if (s1.length !== s2.length) return false;

if (s1 === s2) return false, technically s2 is not a rotation

if we can use multiple subString calls, we could do something like this
foreach character c in s2:
return subString[0-c] && substring[c-length]

Concat the two strings? waterbottleerbottlewat

// Had to look up the solution -- was pretty close. concat 1st string on itself:
waterbottlewaterbottle
*/
