/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

// function ================================================

function checkCashRegister(price, cash, cid) {
  var change = {};
  var changeDue = (cash - price) * 100;
  var cidTotal = 0;

  for (var i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1] * 100;
  }
  if (changeDue == cidTotal) {
    change.status = "CLOSED";
    change.change = cid;
    return change;
  }

  change.change = [];
  const VALUE = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var remaining = changeDue;


// test cases ==============================================

// Test >=> 1
var expected1 = { status: "OPEN", change: [["QUARTER", 0.5]] };
var output1 = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
var test1 = assertEqual(output1, expected1, "Function Test: 1");

// Test >=> 2
var expected2 = {
  status: "OPEN",
  change: [
    ["TWENTY", 60],
    ["TEN", 20],
    ["FIVE", 15],
    ["ONE", 1],
    ["QUARTER", 0.5],
    ["DIME", 0.2],
    ["PENNY", 0.04],
  ],
};
var output2 = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
var test2 = assertEqual(output2, expected2, "Function Test: 2");

// Test >=> 3
var expected3 = { status: "INSUFFICIENT_FUNDS", change: [] };
var output3 = checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
var test3 = assertEqual(output3, expected3, "Function Test: 3");

// Test >=> 4
var expected4 = { status: "INSUFFICIENT_FUNDS", change: [] };
var output4 = checkCashRegister(25, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
var test4 = assertEqual(output4, expected4, "Function Test: 4");
*/
// Test >=> 5
var expected5 = {
  status: "CLOSED",
  change: [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ],
};
var output5 = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
var test5 = assertEqual(output5, expected5, "Function Test: 5");
