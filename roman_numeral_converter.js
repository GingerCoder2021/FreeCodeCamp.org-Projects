/*                            Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
// convert function ===========================================
function convertToRoman(num) {
  return num;
 }
 




// assert function ============================================

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log("PASSED")
  }else{
    console.log("FALIED: "+testName+", expected "+expected+", but got "+actual+".")
  }
}

//test cases ==================================================
 
var test1 = assertEqual(output1, "II", "Roman Numeral Test");
var output1 = convertToRoman(2); // should return string "II"

var output2 = convertToRoman(2); //should return the string II.

var output3 = convertToRoman(3); // should return the string III.

var output4 = convertToRoman(4); // should return the string IV.

var output5 = convertToRoman(5); // should return the string V.

var output6 = convertToRoman(9); // should return the string IX.

var output7 = convertToRoman(12); // should return the string XII.

var output8 = convertToRoman(16); // should return the string XVI.

var output9 = convertToRoman(29); // should return the string XXIX.

var output10 = convertToRoman(44); // should return the string XLIV.

var output11 = convertToRoman(45); // should return the string XLV.

var output12 = convertToRoman(68); // should return the string LXVIII

var output13 = convertToRoman(83); // should return the string LXXXIII

var output14 = convertToRoman(97); // should return the string XCVII

var output15 = convertToRoman(99); // should return the string XCIX

var output16 = convertToRoman(400); // should return the string CD

var output17 = convertToRoman(500); // should return the string D

var output18 = convertToRoman(501); // should return the string DI

var output19 = convertToRoman(649); // should return the string DCXLIX

var output20 = convertToRoman(798); // should return the string DCCXCVIII

var output21 = convertToRoman(891); // should return the string DCCCXCI

var output22 = convertToRoman(1000); // should return the string M

var output23 = convertToRoman(1004); // should return the string MIV

var output24 = convertToRoman(1006); // should return the string MVI

var output25 = convertToRoman(1023); // should return the string MXXIII

var output26 = convertToRoman(2014); // should return the string MMXIV

var output27 = convertToRoman(3999); // should return the string MMMCMXCIX
