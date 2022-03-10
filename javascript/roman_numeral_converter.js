/*                            Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

// function ===============================================

function convertToRoman(num) {
  //Roman Numeral Objects ======
  var onesRoman = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };
  var tensRoman = {
    0: "",
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  };
  var hundredsRoman = {
    0: "",
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
  };
  var thousandsRoman = {
    0: "",
    1: "M",
    2: "MM",
    3: "MMM",
    4: "MV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };

  // finds place value
  var romanNumeral = "";
  var ones = Math.floor(num % 10); // 7
  var tens = Math.floor((num / 10) % 10); // 6
  var hundreds = Math.floor((num / 100) % 10); // 5
  var thousands = Math.floor((num / 1000) % 10); // 1

  //uses place values and matchs with key[value] pair and puts in string
  romanNumeral =
    thousandsRoman[thousands] +
    hundredsRoman[hundreds] +
    tensRoman[tens] +
    onesRoman[ones];

  return romanNumeral; //returns roman numerals
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

var output1 = convertToRoman(1);
var test1 = assertEqual(output1, "I", "Roman Numeral Test"); // should return string "I"

var output2 = convertToRoman(2); //should return the string II.
var test2 = assertEqual(output2, "II", "Roman Numeral Test");

var output3 = convertToRoman(3); // should return the string III.
var test3 = assertEqual(output3, "III", "Roman Numeral Test");

var output4 = convertToRoman(4); // should return the string IV.
var test4 = assertEqual(output4, "IV", "Roman Numeral Test");

var output5 = convertToRoman(5); // should return the string V.
var test5 = assertEqual(output5, "V", "Roman Numeral Test");

var output6 = convertToRoman(9); // should return the string IX.
var test6 = assertEqual(output6, "IX", "Roman Numeral Test");

var output7 = convertToRoman(12); // should return the string XII.
var test7 = assertEqual(output7, "XII", "Roman Numeral Test");

var output8 = convertToRoman(16); // should return the string XVI.
var test8 = assertEqual(output8, "XVI", "Roman Numeral Test");

var output9 = convertToRoman(29); // should return the string XXIX.
var test9 = assertEqual(output9, "XXIX", "Roman Numeral Test");

var output10 = convertToRoman(44); // should return the string XLIV.
var test10 = assertEqual(output10, "XLIV", "Roman Numeral Test");

var output11 = convertToRoman(45); // should return the string XLV.
var test11 = assertEqual(output11, "XLV", "Roman Numeral Test");

var output12 = convertToRoman(68); // should return the string LXVIII
var test12 = assertEqual(output12, "LXVIII", "Roman Numeral Test");

var output13 = convertToRoman(83); // should return the string LXXXIII
var test13 = assertEqual(output13, "LXXXIII", "Roman Numeral Test");

var output14 = convertToRoman(97); // should return the string XCVII
var test14 = assertEqual(output14, "XCVII", "Roman Numeral Test");

var output15 = convertToRoman(99); // should return the string XCIX
var test15 = assertEqual(output15, "XCIX", "Roman Numeral Test");

var output16 = convertToRoman(400); // should return the string CD
var test16 = assertEqual(output16, "CD", "Roman Numeral Test");

var output17 = convertToRoman(500); // should return the string D
var test17 = assertEqual(output17, "D", "Roman Numeral Test");

var output18 = convertToRoman(501); // should return the string DI
var test18 = assertEqual(output18, "DI", "Roman Numeral Test");

var output19 = convertToRoman(649); // should return the string DCXLIX
var test19 = assertEqual(output19, "DCXLIX", "Roman Numeral Test");

var output20 = convertToRoman(798); // should return the string DCCXCVIII
var test20 = assertEqual(output20, "DCCXCVIII", "Roman Numeral Test");

var output21 = convertToRoman(891); // should return the string DCCCXCI
var test21 = assertEqual(output21, "DCCCXCI", "Roman Numeral Test");

var output22 = convertToRoman(1000); // should return the string M
var test22 = assertEqual(output22, "M", "Roman Numeral Test");

var output23 = convertToRoman(1004); // should return the string MIV
var test23 = assertEqual(output23, "MIV", "Roman Numeral Test");

var output24 = convertToRoman(1006); // should return the string MVI
var test24 = assertEqual(output24, "MVI", "Roman Numeral Test");

var output25 = convertToRoman(1023); // should return the string MXXIII
var test25 = assertEqual(output25, "MXXIII", "Roman Numeral Test");

var output26 = convertToRoman(2014); // should return the string MMXIV
var test26 = assertEqual(output26, "MMXIV", "Roman Numeral Test");

var output27 = convertToRoman(3999); // should return the string MMMCMXCIX
var test27 = assertEqual(output27, "MMMCMXCIX", "Roman Numeral Test");
