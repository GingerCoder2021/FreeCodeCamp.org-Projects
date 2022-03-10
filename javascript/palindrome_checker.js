/*                        Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

// palindrome function ===========================================================

// removes all punctuation and spaces. returns alphanumeric string
function cleanString(rawString) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  var cleanWhiteSpace = /\s+/g;
  var punctFreeString = rawString.replace(regex, "");
  var cleanedString = punctFreeString.replace(cleanWhiteSpace, "")
  return cleanedString;
}

// puts string into an array, reverses array, then returns back into a string
function reverseString(string) {
  var splitString = string.split("");
  var reversedSplitString = splitString.reverse();
  var reversedString = reversedSplitString.join("");
  return reversedString;
}

// function that checks to see if input string is palindrome
function palindrome(str) {
  str = cleanString(str); // calls cleanString function to remove punctuation from str
  str = str.toLowerCase(); // turns all string into lowercase strings
  var reversedStr = reverseString(str); // calls function to reverse string
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

// assert function ===============================================================

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    return console.log("PASSED!");
  } else {
    return console.log("FALIED: "+testName+", expected "+expected+", but got "+actual+".");
  }
}

// test cases ====================================================================

var output1 = palindrome("eye"); // should return true
var test1 = assertEqual(output1, true, "palindrome test");

var output2 = palindrome("_eye"); // should return true
var test2 = assertEqual(output2, true, "palindrome test");

var output3 = palindrome("race car") // should return true
var test3 = assertEqual(output3, true, "palindrome test");

var output4 = palindrome("not a palindrome") // should return false.
var test4 = assertEqual(output4, false, "palindrome test");

var output5 = palindrome("A man, a plan, a canal. Panama") // should return true.
var test5 = assertEqual(output5, true, "palindrome test");

var output6 = palindrome("never odd or even") // should return true.
var test6 = assertEqual(output6, true, "palindrome test");

var output7 = palindrome("nope") // should return false.
var test7 = assertEqual(output7, false, "palindrome test");

var output8 = palindrome("almostomla") // should return false.
var test8 = assertEqual(output8, false, "palindrome test");

var output9 = palindrome("My age is 0, 0 si ega ym.") // should return true.
var test9 = assertEqual(output9, true, "palindrome test");

var output10 = palindrome("1 eye for of 1 eye.") // should return false.
var test10 = assertEqual(output10, false, "palindrome test");

var output11 = palindrome("0_0 (: /-\ :) 0-0") // should return true.
var test11 = assertEqual(output11, true, "palindrome test");

var output12 = palindrome("five|\_/|four") // should return false.
var test12 = assertEqual(output12, false, "palindrome test");