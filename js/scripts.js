// business logic
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const addNums = add(number1, number2);
const subNums = subtract(number1, number2);
const multNums = multiply(number1, number2);
const divNums = divide(number1, number2);
const displayAdd = number1 + " + " + number2 + " = " + addNums + " \n";
const displaySub = number1 + " - " + number2 + " = " + subNums + " \n";
const displayMult = number1 + " * " + number2 + " = " + multNums + " \n";
const displayDiv = number1 + " / " + number2 + " = " + divNums + " \n";

// user interface logic 

window.alert(displayAdd + displaySub + displayMult + displayDiv);

