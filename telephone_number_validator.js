/*
                                Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/

// function ======================================================================

function telephoneCheck(str) {
  var phoneRegex1 = /^1?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneRegex2 = /^1? ?\(([0-9]{3})\)[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneRegex1.test(str)){
    return true;
  }
  if(phoneRegex2.test(str)){
    return true;
  }
  return false;
}

// assert function ===============================================================
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    return console.log("PASSED!");
  } else {
    return console.log(
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

// test cases ====================================================================

var output1 = telephoneCheck("1 555-555-5555"); // should return true
var test1 = assertEqual(
  output1,
  true,
  "tests if number input is valid telephone number"
);

var output2 = telephoneCheck("1 (555) 555-5555"); // should return true
var test2 = assertEqual(
  output2,
  true,
  "tests if number input is valid telephone number"
);

var output3 = telephoneCheck("5555555555"); // should return true.
var test3 = assertEqual(
  output3,
  true,
  "tests if number input is valid telephone number"
);

var output4 = telephoneCheck("555-555-5555"); // should return true.
var test4 = assertEqual(
  output4,
  true,
  "tests if number input is valid telephone number"
);

var output5 = telephoneCheck("(555)555-5555"); // should return true.
var test5 = assertEqual(
  output5,
  true,
  "tests if number input is valid telephone number"
);

var output6 = telephoneCheck("1(555)555-5555"); // should return true.
var test6 = assertEqual(
  output6,
  true,
  "tests if number input is valid telephone number"
);

var output7 = telephoneCheck("555-5555"); // should return false.
var test7 = assertEqual(
  output7,
  false,
  "tests if number input is valid telephone number"
);

var output8 = telephoneCheck("5555555"); // should return false.
var test8 = assertEqual(
  output8,
  false,
  "tests if number input is valid telephone number"
);

var output9 = telephoneCheck("1 555)555-5555"); // should return false.
var test9 = assertEqual(
  output9,
  false,
  "tests if number input is valid telephone number"
);

var output10 = telephoneCheck("1 555 555 5555"); // should return true.
var test10 = assertEqual(
  output10,
  true,
  "tests if number input is valid telephone number"
);

var output11 = telephoneCheck("1 456 789 4444"); // should return true.
var test11 = assertEqual(
  output11,
  true,
  "tests if number input is valid telephone number"
);

var output12 = telephoneCheck("123**&!!asdf#"); // should return false.
var test12 = assertEqual(
  output12,
  false,
  "tests if number input is valid telephone number"
);

var output13 = telephoneCheck("55555555"); // should return false.
var test13 = assertEqual(
  output13,
  false,
  "tests if number input is valid telephone number");

var output14 = telephoneCheck("(6054756961)"); // should return false.
var test14 = assertEqual(
  output14,
  false,
  "tests if number input is valid telephone number"
);

var output15 = telephoneCheck("2 (757) 622-7382"); // should return false.
var test15 = assertEqual(
  output15,
  false,
  "tests if number input is valid telephone number"
);

var output16 = telephoneCheck("0 (757) 622-7382"); // should return false.
var test16 = assertEqual(
  output16,
  false,
  "tests if number input is valid telephone number"
);

var output17 = telephoneCheck("-1 (757) 622-7382"); // should return false.
var test17 = assertEqual(
  output17,
  false,
  "tests if number input is valid telephone number"
);

var output18 = telephoneCheck("2 757 622-7382"); // should return false.
var test18 = assertEqual(
  output18,
  false,
  "tests if number input is valid telephone number"
);

var output19 = telephoneCheck("10 (757) 622-7382"); // should return false.
var test19 = assertEqual(
  output19,
  false,
  "tests if number input is valid telephone number"
);

var output20 = telephoneCheck("27576227382"); // should return false.
var test20 = assertEqual(
  output20,
  false,
  "tests if number input is valid telephone number"
);

var output21 = telephoneCheck("(275)76227382"); // should return false.
var test21 = assertEqual(
  output21,
  false,
  "tests if number input is valid telephone number"
);

var output22 = telephoneCheck("2(757)6227382"); // should return false.
var test22 = assertEqual(
  output22,
  false,
  "tests if number input is valid telephone number"
);

var output23 = telephoneCheck("2(757)622-7382"); // should return false.
var test23 = assertEqual(
  output23,
  false,
  "tests if number input is valid telephone number"
);

var output24 = telephoneCheck("555)-555-5555"); // should return false.
var test24 = assertEqual(
  output24,
  false,
  "tests if number input is valid telephone number"
);

var output25 = telephoneCheck("(555-555-5555"); // should return false.
var test25 = assertEqual(
  output25,
  false,
  "tests if number input is valid telephone number"
);

var output26 = telephoneCheck("(555)5(55?)-5555"); // should return false.
var test26 = assertEqual(
  output26,
  false,
  "tests if number input is valid telephone number"
);

var output27 = telephoneCheck("55 55-55-555-5"); // should return false.
var test27 = assertEqual(
  output27,
  false,
  "tests if number input is valid telephone number"
);

var output28 = telephoneCheck("11 555-555-5555"); // should return false.
var test28 = assertEqual(
  output28,
  false,
  "tests if number input is valid telephone number"
);
