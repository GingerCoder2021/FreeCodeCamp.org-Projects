/*                            Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
// convert function ===========================================
function convertToRoman(num) {
  return num;
}

// assert function ============================================

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("PASSED");
  } else {
    console.log(
      "FAILED: " +
        testName +
        ", expected " +
        expected +
        ", but got " +
        actual +
        "."
    );
  }
}




//test cases ==================================================

var test1 = assertEqual(output1, "I", "Roman Numeral Test");
var output1 = convertToRoman(1); // should return string "I"

var test2 = assertEqual(output2, "II", "Roman Numeral Test");
var output2 = convertToRoman(2); //should return the string II.

var test3 = assertEqual(output3, "III", "Roman Numeral Test");
var output3 = convertToRoman(3); // should return the string III.

var test4 = assertEqual(output4, "IV", "Roman Numeral Test");
var output4 = convertToRoman(4); // should return the string IV.

var test5 = assertEqual(output5, "V", "Roman Numeral Test");
var output5 = convertToRoman(5); // should return the string V.

var test6 = assertEqual(output6, "IX", "Roman Numeral Test");
var output6 = convertToRoman(9); // should return the string IX.

var test7 = assertEqual(output7, "XII", "Roman Numeral Test");
var output7 = convertToRoman(12); // should return the string XII.

var test8 = assertEqual(output8, "XVI", "Roman Numeral Test");
var output8 = convertToRoman(16); // should return the string XVI.

var test9 = assertEqual(output9, "XXIX", "Roman Numeral Test");
var output9 = convertToRoman(29); // should return the string XXIX.

var test10 = assertEqual(output10, "XLIV", "Roman Numeral Test");
var output10 = convertToRoman(44); // should return the string XLIV.

var test11 = assertEqual(output11, "XLV", "Roman Numeral Test");
var output11 = convertToRoman(45); // should return the string XLV.

var test12 = assertEqual(output12, "LXVIII", "Roman Numeral Test");
var output12 = convertToRoman(68); // should return the string LXVIII

var test13 = assertEqual(output13, "LXXXIII", "Roman Numeral Test");
var output13 = convertToRoman(83); // should return the string LXXXIII

var test14 = assertEqual(output14, "XCVII", "Roman Numeral Test");
var output14 = convertToRoman(97); // should return the string XCVII

var test15 = assertEqual(output15, "XCIX", "Roman Numeral Test");
var output15 = convertToRoman(99); // should return the string XCIX

var test16 = assertEqual(output16, "CD", "Roman Numeral Test");
var output16 = convertToRoman(400); // should return the string CD

var test17 = assertEqual(output17, "D", "Roman Numeral Test");
var output17 = convertToRoman(500); // should return the string D

var test18 = assertEqual(output18, "DI", "Roman Numeral Test");
var output18 = convertToRoman(501); // should return the string DI

var test19 = assertEqual(output19, "DCXLIX", "Roman Numeral Test");
var output19 = convertToRoman(649); // should return the string DCXLIX

var test20 = assertEqual(output20, "DCCXCVIII", "Roman Numeral Test");
var output20 = convertToRoman(798); // should return the string DCCXCVIII

var test21 = assertEqual(output21, "DCCCXCI", "Roman Numeral Test");
var output21 = convertToRoman(891); // should return the string DCCCXCI

var test22 = assertEqual(output22, "M", "Roman Numeral Test");
var output22 = convertToRoman(1000); // should return the string M

var test23 = assertEqual(output23, "MIV", "Roman Numeral Test");
var output23 = convertToRoman(1004); // should return the string MIV

var test24 = assertEqual(output24, "MVI", "Roman Numeral Test");
var output24 = convertToRoman(1006); // should return the string MVI

var test25 = assertEqual(output25, "MXXIII", "Roman Numeral Test");
var output25 = convertToRoman(1023); // should return the string MXXIII

var test26 = assertEqual(output26, "MMXIV", "Roman Numeral Test");
var output26 = convertToRoman(2014); // should return the string MMXIV

var test27 = assertEqual(output27, "MMMCMXCIX", "Roman Numeral Test");
var output27 = convertToRoman(3999); // should return the string MMMCMXCIX
