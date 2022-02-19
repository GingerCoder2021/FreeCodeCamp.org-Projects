/*
                          Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

//function ==============================================
var alphabet = [
  "A", //[0]
  "B", //[1]
  "C", //[2]
  "D", //[3]
  "E", //[4]
  "F", //[5]
  "G", //[6]
  "H", //[7]
  "I", //[8]
  "J", //[9]
  "K", //[10]
  "L", //[11]
  "M", //[12]
  "N", //[13]
  "O", //[14]
  "P", //[15]
  "Q", //[16]
  "R", //[17]
  "S", //[18]
  "T", //[19]
  "U", //[20]
  "V", //[21]
  "W", //[22]
  "X", //[23]
  "Y", //[24]
  "Z", //[25]
];

function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");

// assert function ===============================================================

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    return console.log("PASSED!");
  } else {
    return console.log(
      "FALIED: " +
        testName +
        ", expected " +
        expected +
        ", but got " +
        actual +
        "."
    );
  }
}

// test cases ====================================================================

var output1 = rot13("this is a string");
var test1 = assertEqual(output1, "", "rot13 test");

var output2 = rot13(" one 1, two, 3, four, 4"); // should return true
var test2 = assertEqual(output2, "", "rot13 test");
