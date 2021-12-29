var rs = require('readline-sync')

function promptUser (msg){
  return rs.question(msg);
}
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

(function main() {
// create variables
  let repeat = true;
  let regExTest = /(\d+(\.\d+)?\s?)[+\-\/*]{1}(\s?\d+(\.\d+)?)/;
  let numberSplitter = /\d+(\.\d+)?/mg;
  let userQuestion = '';
  let numbers = [];
  let operator = '';
  let num1;
  let num2;

  //get the users question and test the question to make sure it is viable for the program.
  while (repeat) {
    userQuestion = promptUser('What math problem should we solve? [ex.25 * 7]: ')
    if(regExTest.test(userQuestion)) {
      repeat = false
    } else {
      console.log(`We don't recognize that as a math problem. Try again.`)
      userQuestion = ''
    }
  }

  //collect the numbers from the question
  numbers = userQuestion.match(numberSplitter);
  //collect the operator from the question
  operator = userQuestion.match(/[*+\-\/]/);

  // Change number strings to actual numbers for the functions
  num1 = Number(numbers[0]);
  num2 = Number(numbers[1]);
  
  // Switch the function based on operator and reply the answer.
  switch (operator[0]) {
    case '+':
      console.log(`The answer is ${add(num1, num2)}`);
      break;
    case '-':
      console.log(`The answer is ${subtract(num1, num2)}`);
      break;
    case '*':
      console.log(`The answer is ${multiply(num1, num2)}`);
      break;
    case '/':
      console.log(`The answer is ${divide(num1, num2)}`);
      break;
  }
})()